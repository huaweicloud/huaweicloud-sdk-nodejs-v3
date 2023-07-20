

export class SetSensitiveSlowLogRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public status?: string;
    public constructor(instanceId?: string, status?: string) { 
        this['instance_id'] = instanceId;
        this['status'] = status;
    }
    public withXLanguage(xLanguage: string): SetSensitiveSlowLogRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): SetSensitiveSlowLogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: string): SetSensitiveSlowLogRequest {
        this['status'] = status;
        return this;
    }
}