

export class FeedbackReason {
    public tags?: Array<string>;
    public content?: string;
    public constructor(tags?: Array<string>) { 
        this['tags'] = tags;
    }
    public withTags(tags: Array<string>): FeedbackReason {
        this['tags'] = tags;
        return this;
    }
    public withContent(content: string): FeedbackReason {
        this['content'] = content;
        return this;
    }
}