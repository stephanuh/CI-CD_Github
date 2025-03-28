import { Question } from '../models/index.js';

const cleanDB = async (): Promise<void> => {
  try{
    await Question.deleteMany({});
    console.log('Database cleaned!');
  } catch (err) {
    console.error('Error cleaning the database:', err);
    process.exit(1);
  }
};

export default cleanDB;
