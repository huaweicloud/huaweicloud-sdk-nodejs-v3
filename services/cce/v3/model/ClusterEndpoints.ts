

export class ClusterEndpoints {
    public type?: string;
    public url?: string;
    public constructor() { 
    }
    public withType(type: string): ClusterEndpoints {
        this['type'] = type;
        return this;
    }
    public withUrl(url: string): ClusterEndpoints {
        this['url'] = url;
        return this;
    }
}