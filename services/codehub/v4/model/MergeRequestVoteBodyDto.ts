

export class MergeRequestVoteBodyDto {
    public score?: number;
    public action?: MergeRequestVoteBodyDtoActionEnum | string;
    public constructor() { 
    }
    public withScore(score: number): MergeRequestVoteBodyDto {
        this['score'] = score;
        return this;
    }
    public withAction(action: MergeRequestVoteBodyDtoActionEnum | string): MergeRequestVoteBodyDto {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MergeRequestVoteBodyDtoActionEnum {
    VOTE = 'vote'
}
