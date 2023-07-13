

export class ClusterEndpoints {
    public url?: string;
    public type?: string;
    public constructor() { 
    }
    public withUrl(url: string): ClusterEndpoints {
        this['url'] = url;
        return this;
    }
    public withType(type: string): ClusterEndpoints {
        this['type'] = type;
        return this;
    }
}