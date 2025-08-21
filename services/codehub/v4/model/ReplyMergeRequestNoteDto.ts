

export class ReplyMergeRequestNoteDto {
    public body?: string;
    public constructor() { 
    }
    public withBody(body: string): ReplyMergeRequestNoteDto {
        this['body'] = body;
        return this;
    }
}