

export class MindStudioInsight {
    public url?: string;
    public token?: string;
    public constructor() { 
    }
    public withUrl(url: string): MindStudioInsight {
        this['url'] = url;
        return this;
    }
    public withToken(token: string): MindStudioInsight {
        this['token'] = token;
        return this;
    }
}