import * as Yup from 'yup';
import { parseISO, addDays, format } from 'date-fns';
import Plan from '../models/Plan';
import Student from '../models/Student';
import Registration from '../models/Registration';

class RegistrationController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const registrations = await Registration.findAll({
      order: ['start_date'],
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Student,
          as: 'student',
          attributes: ['name', 'email', 'age'],
        },
        {
          model: Plan,
          as: 'plan',
          attributes: ['title', 'duration', 'price'],
        },
      ],
    });

    return res.json(registrations);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { student_id, plan_id, start_date } = req.body;

    if (!plan_id || !student_id) {
      return res
        .status(400)
        .json({ error: 'Plan ID or Student ID is invalid.' });
    }

    const planExists = await Plan.findOne({ where: { id: plan_id } });

    if (!planExists) {
      return res.status(400).json({ error: 'Plan not found.' });
    }

    const studentExists = await Student.findOne({ where: { id: student_id } });

    if (!studentExists) {
      return res.status(400).json({ error: 'Student not found.' });
    }

    const { duration, price } = planExists;

    const end_date = format(
      addDays(parseISO(start_date), duration * 30),
      'yyyy-MM-dd'
    );

    const registration = await Registration.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price: price * duration,
    });

    return res.json(registration);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      plan_id: Yup.number(),
      start_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { id } = req.params;
    const { plan_id, start_date } = req.body;

    const registrationExists = await Registration.findByPk(id);

    if (!registrationExists) {
      return res.status(400).json({ error: 'Registration not found.' });
    }

    const planExists = await Plan.findOne({ where: { id: plan_id } });

    if (!planExists) {
      return res.status(404).json({ error: 'Plan not found.' });
    }

    // const studentExists = await Student.findOne({ where: { id: student_id } });
    // if (!studentExists) {
    //   return res.status(404).json({ error: 'Student not found.' });
    // }

    const { duration, price } = planExists;

    const end_date = format(
      addDays(parseISO(start_date), duration * 30),
      'yyyy-MM-dd'
    );


    const { active } = await registrationExists.update({
      plan_id,
      start_date,
      end_date,
      price: price * duration,
    });

    console.log('.......................');
    console.log(id, plan_id, start_date, duration, price, end_date, active);

    return res.json({
      plan_id,
      start_date: format(parseISO(start_date), duration * 30),
      end_date,
      active,
      price: price * duration,
    });
  }

  async delete(req, res) {
    return res.json();
  }
}

export default new RegistrationController();
