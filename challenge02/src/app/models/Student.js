import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weight: Sequelize.DECIMAL,
        height: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );

    // this.addHook('beforeSave', async user => {
    //   if (user.password) {
    //     user.password_hash = await bcrypt.hash(user.password, 8);
    //   }
    // });

    return this;
  }

  // checkPassword(password) {
  //   return bcrypt.compare(password, this.password_hash);
  // }
}

export default Student;
