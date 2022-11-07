const router = require("express").Router();
const { Project, User } = require("../models")
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
    try {
        const allProjectData = await Project.findAll({
            include: [
                {
                    model: User
                }]
        })
        const projectData = allProjectData.map((projectData) =>
            projectData.get({ plain: true }))
        res.render("homepage", {projectData})
    } catch (err) {
        res.status(500).json(err)
    }
})