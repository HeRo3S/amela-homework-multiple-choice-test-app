interface IQuestionData {
  question: {
    id: number;
    text: string;
  };
  answers: { id: number; text: string }[];
}
const ExamPageMockData: {
  time: number;
  questions: IQuestionData[];
} = {
  time: 30 * 60 * 1000,
  questions: Array(16).fill({
    question: {
      id: 3,
      text: "Nhân viên chính thức của công ty Amela được nghỉ phép (có hưởng lương) bao nhiêu ngày một năm?",
    },
    answers: [
      { id: 0, text: "12 ngày nếu làm đủ cả năm" },
      { id: 1, text: "16 ngày nếu làm đủ cả năm" },
      { id: 2, text: "Không có nghỉ phép vẫn hưởng lương" },
      { id: 3, text: "8 ngày nếu làm đủ cả năm" },
    ],
  }),
};

export default ExamPageMockData;
