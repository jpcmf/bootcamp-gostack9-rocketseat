const express = require('express');
const server = express();

server.use(express.json());

let numberOfRequests = 0;
const projects = [
  {
    id: "0",
    title: "New project",
    tasks: ["New task"]
  },
  {
    id: "1",
    title: "New project 2",
    tasks: ["New task 2"]
  }
]

function checkProjectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find((p) => {
    return p.id == id;
  });

  if (!project) {
    return res.status(400).json({ error: 'Project not found!' });
  }

  return next();
}

function logRequests(req, res, next) {
  numberOfRequests++;

  console.log(`Number of requests: ${numberOfRequests}`);
  
  return next();
}

server.use(logRequests);

// projects

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.get('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  
  return res.json(projects[id])
});

server.post('/projects', (req, res) => {
  const { id } = req.body;
  const { title } = req.body;
  
  projects.push({
    "id": id,
    "title": title,
    "tasks": []
  });
  
  return res.json(projects);
});

server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  
  projects[id].title = title;
  
  return res.json(projects);
});

server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  projects.splice(id, 1);
  
  return res.send();
});

// tasks

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects[id].tasks.push(title);
  
  return res.json(projects);
});

server.listen(3000);