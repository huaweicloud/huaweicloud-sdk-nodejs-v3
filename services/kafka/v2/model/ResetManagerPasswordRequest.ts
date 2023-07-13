import { ResetManagerPasswordReq } from './ResetManagerPasswordReq';


export class ResetManagerPasswordRequest {
    private 'instance_id': string | undefined;
    public body?: ResetManagerPasswordReq;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ResetManagerPasswordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: ResetManagerPasswordReq): ResetManagerPasswordRequest {
        this['body'] = body;
        return this;
    }
}