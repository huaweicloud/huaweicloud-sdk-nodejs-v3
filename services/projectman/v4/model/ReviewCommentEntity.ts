

export class ReviewCommentEntity {
    public id?: string;
    private 'user_id'?: string;
    private 'other_user_id'?: string;
    public result?: string;
    public comment?: string;
    public constructor() { 
    }
    public withId(id: string): ReviewCommentEntity {
        this['id'] = id;
        return this;
    }
    public withUserId(userId: string): ReviewCommentEntity {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withOtherUserId(otherUserId: string): ReviewCommentEntity {
        this['other_user_id'] = otherUserId;
        return this;
    }
    public set otherUserId(otherUserId: string  | undefined) {
        this['other_user_id'] = otherUserId;
    }
    public get otherUserId(): string | undefined {
        return this['other_user_id'];
    }
    public withResult(result: string): ReviewCommentEntity {
        this['result'] = result;
        return this;
    }
    public withComment(comment: string): ReviewCommentEntity {
        this['comment'] = comment;
        return this;
    }
}