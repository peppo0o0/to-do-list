import { useEffect, useState } from "react";
import * as Realm from "realm-web";

import "../App.css";
import "../assets/css/responsive.css";
import { useSession } from "../hooks/session";
import useTaskData from "../hooks/task";
// import useAdminSettings from "../hooks/admin";
const appId = import.meta.env.VITE_MONGO_ID
const mongoDbApiKey = import.meta.env.VITE_API_KEY
console.log(import.meta.env)
const app = new Realm.App({ id: appId });

export default function AdminPage() {
  const { logoutSession } = useSession();
  const { redirectToDoList } = useTaskData();
  // const { user_total, task_total } = useAdminSettings();
  const [user, setUser] = useState();
  const [events, setEvents] = useState([]);

  async function loginApiKey() {
    const apiKey = mongoDbApiKey;
    const credentials = Realm.Credentials.apiKey(apiKey);
    const user = await app.logIn(credentials);
    setUser(user);
  }

  const getEventData = (change) => {
    return {
      id: JSON.stringify(change.fullDocument._id),
      task_total: change.fullDocument.task_total,
      user_total: change.fullDocument.user_total,
    };
  };

  const getEventsData = (mongoData) => {
    return mongoData.map((event) => ({
      id: JSON.stringify(event._id),
      task_total: event.task_total,
      user_total: event.user_total,
    }));
  };

  useEffect(() => {
    const login = async () => {
      loginApiKey();
      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const collection = mongodb.db("data").collection("stats");
      const data = await collection.find();
      setEvents((events) => [events, ...getEventsData(data)]);

      for await (const change of collection.watch()) {
        if (change.operationType === "update") {
          const updatedEvent = getEventData(change);
          setEvents((events) => {
            const newEvents = [...events];
            const index = newEvents.findIndex(
              (event) => event.id === updatedEvent.id
            );
            newEvents[index] = updatedEvent;
            return newEvents;
          });
        }
      }
    };
    login();
  }, []);

  return (
    <>
      <h1 id="welcome-h1-admin">Admin Dashboard</h1>
      <p id="admin-id">Admin ID {user ? user.id : "..."}</p>
      <div>
        <button
          className="top-right-button"
          id="logout-button"
          onClick={logoutSession}
        >
          <i className="fa-solid fa-right-from-bracket" />
        </button>

        <button
          className="admin-dashboard-top-button"
          onClick={redirectToDoList}
        >
          <i className="fa-solid fa-list" />
        </button>
      </div>
      <div id="count-user-task-container">
        <table id="table-count">
          <thead>
            <tr>
              <th>Users</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, key) => (
              <tr key={key}>
                <th>{event.user_total}</th>
                <th>{event.task_total}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
