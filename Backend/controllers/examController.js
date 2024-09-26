const Exam = require('../models/Exam');

// Obtener todos los exámenes
exports.getAllExams = async (req, res) => {
  const exams = await Exam.findAll();
  res.json(exams);
};

// Crear un nuevo examen
exports.createExam = async (req, res) => {
  const exam = await Exam.create(req.body);
  res.json(exam);
};
