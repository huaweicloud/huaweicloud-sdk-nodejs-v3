

export class InstanceActionParameters {
    public replica?: number;
    public hosts?: Array<string>;
    public version?: string;
    public constructor() { 
    }
    public withReplica(replica: number): InstanceActionParameters {
        this['replica'] = replica;
        return this;
    }
    public withHosts(hosts: Array<string>): InstanceActionParameters {
        this['hosts'] = hosts;
        return this;
    }
    public withVersion(version: string): InstanceActionParameters {
        this['version'] = version;
        return this;
    }
}