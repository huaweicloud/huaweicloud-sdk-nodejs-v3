

export class UpdateDbUserReq {
    public comment?: string;
    public constructor() { 
    }
    public withComment(comment: string): UpdateDbUserReq {
        this['comment'] = comment;
        return this;
    }
}