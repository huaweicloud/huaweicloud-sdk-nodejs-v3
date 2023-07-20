import { SetBackupPolicyRequestBody } from './SetBackupPolicyRequestBody';


export class SetBackupPolicyRequest {
    private 'instance_id'?: string;
    public body?: SetBackupPolicyRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetBackupPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SetBackupPolicyRequestBody): SetBackupPolicyRequest {
        this['body'] = body;
        return this;
    }
}