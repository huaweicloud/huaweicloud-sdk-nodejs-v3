

export class CreateMergeRequestDiscussionNoteDto {
    public body?: string;
    public constructor(body?: string) { 
        this['body'] = body;
    }
    public withBody(body: string): CreateMergeRequestDiscussionNoteDto {
        this['body'] = body;
        return this;
    }
}