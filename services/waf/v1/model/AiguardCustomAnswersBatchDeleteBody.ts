

export class AiguardCustomAnswersBatchDeleteBody {
    private 'answer_ids'?: Array<string>;
    public constructor(answerIds?: Array<string>) { 
        this['answer_ids'] = answerIds;
    }
    public withAnswerIds(answerIds: Array<string>): AiguardCustomAnswersBatchDeleteBody {
        this['answer_ids'] = answerIds;
        return this;
    }
    public set answerIds(answerIds: Array<string>  | undefined) {
        this['answer_ids'] = answerIds;
    }
    public get answerIds(): Array<string> | undefined {
        return this['answer_ids'];
    }
}