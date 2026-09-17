

export class CommentUpdateVO {
    public description?: string;
    public at?: string;
    public constructor() { 
    }
    public withDescription(description: string): CommentUpdateVO {
        this['description'] = description;
        return this;
    }
    public withAt(at: string): CommentUpdateVO {
        this['at'] = at;
        return this;
    }
}