const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM tasks", (err, task) => {
            if (err){
                res.json(err);
            }
            res.render("task", {
                data: task
            });
        });
    });
};

module.exports = controller;