

export class CreateClusterDns {
    public name?: string;
    public type?: string;
    public ttl?: number;
    public constructor(name?: string, type?: string, ttl?: number) { 
        this['name'] = name;
        this['type'] = type;
        this['ttl'] = ttl;
    }
    public withName(name: string): CreateClusterDns {
        this['name'] = name;
        return this;
    }
    public withType(type: string): CreateClusterDns {
        this['type'] = type;
        return this;
    }
    public withTtl(ttl: number): CreateClusterDns {
        this['ttl'] = ttl;
        return this;
    }
}