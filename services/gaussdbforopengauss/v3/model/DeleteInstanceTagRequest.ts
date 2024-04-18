

export class DeleteInstanceTagRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public key?: string;
    public constructor(instanceId?: string, key?: string) { 
        this['instance_id'] = instanceId;
        this['key'] = key;
    }
    public withXLanguage(xLanguage: string): DeleteInstanceTagRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DeleteInstanceTagRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withKey(key: string): DeleteInstanceTagRequest {
        this['key'] = key;
        return this;
    }
}