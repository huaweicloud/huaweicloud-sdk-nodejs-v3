

export class DnInstanceInfo {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'access_host'?: string;
    private 'access_port'?: number;
    public engine?: string;
    private 'engine_version'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): DnInstanceInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): DnInstanceInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withAccessHost(accessHost: string): DnInstanceInfo {
        this['access_host'] = accessHost;
        return this;
    }
    public set accessHost(accessHost: string  | undefined) {
        this['access_host'] = accessHost;
    }
    public get accessHost(): string | undefined {
        return this['access_host'];
    }
    public withAccessPort(accessPort: number): DnInstanceInfo {
        this['access_port'] = accessPort;
        return this;
    }
    public set accessPort(accessPort: number  | undefined) {
        this['access_port'] = accessPort;
    }
    public get accessPort(): number | undefined {
        return this['access_port'];
    }
    public withEngine(engine: string): DnInstanceInfo {
        this['engine'] = engine;
        return this;
    }
    public withEngineVersion(engineVersion: string): DnInstanceInfo {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
}