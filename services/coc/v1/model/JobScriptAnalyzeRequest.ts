

export class JobScriptAnalyzeRequest {
    public content?: string;
    public constructor(content?: string) { 
        this['content'] = content;
    }
    public withContent(content: string): JobScriptAnalyzeRequest {
        this['content'] = content;
        return this;
    }
}