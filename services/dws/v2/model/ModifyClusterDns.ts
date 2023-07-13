

export class ModifyClusterDns {
    public name: string;
    public type: string;
    public ttl: number;
    public constructor(name?: any, type?: any, ttl?: any) { 
        this['name'] = name;
        this['type'] = type;
        this['ttl'] = ttl;
    }
    public withName(name: string): ModifyClusterDns {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ModifyClusterDns {
        this['type'] = type;
        return this;
    }
    public withTtl(ttl: number): ModifyClusterDns {
        this['ttl'] = ttl;
        return this;
    }
}