

export class ApprovePlaybookInfo {
    public result?: string;
    public content?: string;
    public constructor() { 
    }
    public withResult(result: string): ApprovePlaybookInfo {
        this['result'] = result;
        return this;
    }
    public withContent(content: string): ApprovePlaybookInfo {
        this['content'] = content;
        return this;
    }
}