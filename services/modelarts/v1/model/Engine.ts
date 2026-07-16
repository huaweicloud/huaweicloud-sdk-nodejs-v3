

export class Engine {
    private 'engine_id'?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    private 'v1_compatible'?: boolean;
    private 'run_user'?: string;
    public constructor() { 
    }
    public withEngineId(engineId: string): Engine {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withEngineName(engineName: string): Engine {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): Engine {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withV1Compatible(v1Compatible: boolean): Engine {
        this['v1_compatible'] = v1Compatible;
        return this;
    }
    public set v1Compatible(v1Compatible: boolean  | undefined) {
        this['v1_compatible'] = v1Compatible;
    }
    public get v1Compatible(): boolean | undefined {
        return this['v1_compatible'];
    }
    public withRunUser(runUser: string): Engine {
        this['run_user'] = runUser;
        return this;
    }
    public set runUser(runUser: string  | undefined) {
        this['run_user'] = runUser;
    }
    public get runUser(): string | undefined {
        return this['run_user'];
    }
}