

export class UpdateHotQuestionReq {
    private 'hot_question'?: string;
    public constructor() { 
    }
    public withHotQuestion(hotQuestion: string): UpdateHotQuestionReq {
        this['hot_question'] = hotQuestion;
        return this;
    }
    public set hotQuestion(hotQuestion: string  | undefined) {
        this['hot_question'] = hotQuestion;
    }
    public get hotQuestion(): string | undefined {
        return this['hot_question'];
    }
}