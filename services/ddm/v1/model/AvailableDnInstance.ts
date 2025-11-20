

export class AvailableDnInstance {
    public id?: string;
    public status?: string;
    public name?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    private 'private_ip'?: string;
    public port?: number;
    private 'time_zone'?: string;
    public constructor() { 
    }
    public withId(id: string): AvailableDnInstance {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): AvailableDnInstance {
        this['status'] = status;
        return this;
    }
    public withName(name: string): AvailableDnInstance {
        this['name'] = name;
        return this;
    }
    public withEngineName(engineName: string): AvailableDnInstance {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): AvailableDnInstance {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withPrivateIp(privateIp: string): AvailableDnInstance {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPort(port: number): AvailableDnInstance {
        this['port'] = port;
        return this;
    }
    public withTimeZone(timeZone: string): AvailableDnInstance {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}