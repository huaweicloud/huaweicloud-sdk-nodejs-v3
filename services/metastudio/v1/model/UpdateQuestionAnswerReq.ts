

export class UpdateQuestionAnswerReq {
    public question?: string;
    public answer?: string;
    private 'similar_questions'?: string;
    public constructor() { 
    }
    public withQuestion(question: string): UpdateQuestionAnswerReq {
        this['question'] = question;
        return this;
    }
    public withAnswer(answer: string): UpdateQuestionAnswerReq {
        this['answer'] = answer;
        return this;
    }
    public withSimilarQuestions(similarQuestions: string): UpdateQuestionAnswerReq {
        this['similar_questions'] = similarQuestions;
        return this;
    }
    public set similarQuestions(similarQuestions: string  | undefined) {
        this['similar_questions'] = similarQuestions;
    }
    public get similarQuestions(): string | undefined {
        return this['similar_questions'];
    }
}