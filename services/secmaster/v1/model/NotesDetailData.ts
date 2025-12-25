

export class NotesDetailData {
    public content?: string;
    public constructor() { 
    }
    public withContent(content: string): NotesDetailData {
        this['content'] = content;
        return this;
    }
}