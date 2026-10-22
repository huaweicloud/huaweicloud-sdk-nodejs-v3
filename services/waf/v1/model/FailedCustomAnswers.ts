

export class FailedCustomAnswers {
    private 'answer_id'?: string;
    public reason?: string;
    public constructor() { 
    }
    public withAnswerId(answerId: string): FailedCustomAnswers {
        this['answer_id'] = answerId;
        return this;
    }
    public set answerId(answerId: string  | undefined) {
        this['answer_id'] = answerId;
    }
    public get answerId(): string | undefined {
        return this['answer_id'];
    }
    public withReason(reason: string): FailedCustomAnswers {
        this['reason'] = reason;
        return this;
    }
}