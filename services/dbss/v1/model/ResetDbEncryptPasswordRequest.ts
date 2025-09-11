import { ChangePasswordRequest } from './ChangePasswordRequest';


export class ResetDbEncryptPasswordRequest {
    private 'instance_id'?: string;
    public body?: ChangePasswordRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ResetDbEncryptPasswordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ChangePasswordRequest): ResetDbEncryptPasswordRequest {
        this['body'] = body;
        return this;
    }
}