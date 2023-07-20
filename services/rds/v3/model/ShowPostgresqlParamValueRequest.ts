

export class ShowPostgresqlParamValueRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public name?: string;
    public constructor(instanceId?: string, name?: string) { 
        this['instance_id'] = instanceId;
        this['name'] = name;
    }
    public withXLanguage(xLanguage: string): ShowPostgresqlParamValueRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ShowPostgresqlParamValueRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): ShowPostgresqlParamValueRequest {
        this['name'] = name;
        return this;
    }
}