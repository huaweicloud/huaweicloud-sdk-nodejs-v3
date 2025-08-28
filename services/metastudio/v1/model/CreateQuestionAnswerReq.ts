

export class CreateQuestionAnswerReq {
    public question?: string;
    public answer?: string;
    private 'knowledge_library_id'?: string;
    private 'similar_questions'?: string;
    public constructor(question?: string, answer?: string, knowledgeLibraryId?: string) { 
        this['question'] = question;
        this['answer'] = answer;
        this['knowledge_library_id'] = knowledgeLibraryId;
    }
    public withQuestion(question: string): CreateQuestionAnswerReq {
        this['question'] = question;
        return this;
    }
    public withAnswer(answer: string): CreateQuestionAnswerReq {
        this['answer'] = answer;
        return this;
    }
    public withKnowledgeLibraryId(knowledgeLibraryId: string): CreateQuestionAnswerReq {
        this['knowledge_library_id'] = knowledgeLibraryId;
        return this;
    }
    public set knowledgeLibraryId(knowledgeLibraryId: string  | undefined) {
        this['knowledge_library_id'] = knowledgeLibraryId;
    }
    public get knowledgeLibraryId(): string | undefined {
        return this['knowledge_library_id'];
    }
    public withSimilarQuestions(similarQuestions: string): CreateQuestionAnswerReq {
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