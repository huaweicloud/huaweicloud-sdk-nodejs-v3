

export class ComponentActionParameters {
    public replica?: number;
    public hosts?: Array<string>;
    public version?: string;
    public constructor() { 
    }
    public withReplica(replica: number): ComponentActionParameters {
        this['replica'] = replica;
        return this;
    }
    public withHosts(hosts: Array<string>): ComponentActionParameters {
        this['hosts'] = hosts;
        return this;
    }
    public withVersion(version: string): ComponentActionParameters {
        this['version'] = version;
        return this;
    }
}