import { ModifyNewBackupEncryptRequestBody } from './ModifyNewBackupEncryptRequestBody';


export class ModifyNewBackupEncryptRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    public body?: ModifyNewBackupEncryptRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ModifyNewBackupEncryptRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): ModifyNewBackupEncryptRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ModifyNewBackupEncryptRequestBody): ModifyNewBackupEncryptRequest {
        this['body'] = body;
        return this;
    }
}