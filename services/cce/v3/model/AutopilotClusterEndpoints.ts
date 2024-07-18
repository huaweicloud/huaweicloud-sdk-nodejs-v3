

export class AutopilotClusterEndpoints {
    public url?: string;
    public type?: string;
    public constructor() { 
    }
    public withUrl(url: string): AutopilotClusterEndpoints {
        this['url'] = url;
        return this;
    }
    public withType(type: string): AutopilotClusterEndpoints {
        this['type'] = type;
        return this;
    }
}