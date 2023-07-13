import { ResetPasswordReq } from './ResetPasswordReq';


export class ResetPasswordRequest {
    private 'instance_id': string | undefined;
    public body?: ResetPasswordReq;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ResetPasswordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: ResetPasswordReq): ResetPasswordRequest {
        this['body'] = body;
        return this;
    }
}