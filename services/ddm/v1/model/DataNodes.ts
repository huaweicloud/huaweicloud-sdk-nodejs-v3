

export class DataNodes {
    public id?: string;
    public status?: string;
    public name?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    public mem?: number;
    public cpu?: number;
    public constructor() { 
    }
    public withId(id: string): DataNodes {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): DataNodes {
        this['status'] = status;
        return this;
    }
    public withName(name: string): DataNodes {
        this['name'] = name;
        return this;
    }
    public withEngineName(engineName: string): DataNodes {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): DataNodes {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withMem(mem: number): DataNodes {
        this['mem'] = mem;
        return this;
    }
    public withCpu(cpu: number): DataNodes {
        this['cpu'] = cpu;
        return this;
    }
}