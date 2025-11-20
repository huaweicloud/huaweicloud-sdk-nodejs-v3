

export class SecurityCheckPolicyInfoResponseInfo {
    public content?: string;
    public constructor() { 
    }
    public withContent(content: string): SecurityCheckPolicyInfoResponseInfo {
        this['content'] = content;
        return this;
    }
}