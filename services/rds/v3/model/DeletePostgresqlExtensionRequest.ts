import { ExtensionRequest } from './ExtensionRequest';


export class DeletePostgresqlExtensionRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    public body?: ExtensionRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): DeletePostgresqlExtensionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): DeletePostgresqlExtensionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ExtensionRequest): DeletePostgresqlExtensionRequest {
        this['body'] = body;
        return this;
    }
}