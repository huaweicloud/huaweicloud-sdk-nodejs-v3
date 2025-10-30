import { ModifyAutoNodeExpansionPolicyRequestBody } from './ModifyAutoNodeExpansionPolicyRequestBody';


export class ModifyAutoNodeExpansionPolicyRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    public body?: ModifyAutoNodeExpansionPolicyRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ModifyAutoNodeExpansionPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): ModifyAutoNodeExpansionPolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ModifyAutoNodeExpansionPolicyRequestBody): ModifyAutoNodeExpansionPolicyRequest {
        this['body'] = body;
        return this;
    }
}