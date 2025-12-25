

export class ApproveOpinionDetail {
    public result?: string;
    public content?: string;
    public constructor() { 
    }
    public withResult(result: string): ApproveOpinionDetail {
        this['result'] = result;
        return this;
    }
    public withContent(content: string): ApproveOpinionDetail {
        this['content'] = content;
        return this;
    }
}