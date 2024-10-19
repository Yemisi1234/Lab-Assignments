interface IStudent{
studentId : number;
answers: IQuestion[];
addAnswer(question: IQuestion): void;
}
interface IQuestion{
qid : number;
answer: string;
checkAnswer(answer: string): boolean;
}
interface IQuiz{
scoreStudentBySid(sid: number): number;
getAverageScore(): number;
}


class Student implements IStudent{
  studentId: number;
  answers: IQuestion[];
  constructor(studentId: number) {
    this.studentId = studentId;
    this.answers = [] ;
  }
  addAnswer(question : IQuestion): void {
    this.answers.push(question);
  }
}

class Question implements IQuestion {
    qid: number;
    answer: string;
  constructor(qid : number, answer : string) {
    this.qid = qid;
    this.answer = answer;
  }
  checkAnswer(answer : string) : boolean{
    return this.answer === answer;
  }
}

class Quiz implements IQuiz {
  private questions: Map<number, string>;

  constructor(questions: IQuestion[], private students: IStudent[]) {
    this.questions = new Map(
      questions.map((question) => [question.qid, question.answer])
    );
  }

  scoreStudentBySid(sid : number) : number{
    let score = 0;
    let student = this.students.find((student) => student.studentId == sid);
    if (!student) return 0;
    student.answers.forEach((question) => {
      let correctAnswer = this.questions.get(question.qid);
      if (correctAnswer && question.checkAnswer(correctAnswer)) {
        score++;
      }
    });
    return score;
  }
  getAverageScore(): number {
    let totalScore = 0;
    this.students.forEach((student) => {
      totalScore += this.scoreStudentBySid(student.studentId);
    });
    return totalScore / this.students.length;
  }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));
student1.addAnswer(new Question(1, "b"));

const student2 = new Student(11);
student2.addAnswer(new Question(3, "b"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(1, "d"));

const students = [student1, student2];
const questions = [
  new Question(1, "b"),
  new Question(2, "a"),
  new Question(3, "b"),
];
const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10);

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11);

let average = quiz.getAverageScore();
console.log(average);
