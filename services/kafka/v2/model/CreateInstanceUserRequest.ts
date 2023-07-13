import { CreateInstanceUserReq } from './CreateInstanceUserReq';


export class CreateInstanceUserRequest {
    private 'instance_id': string | undefined;
    public body?: CreateInstanceUserReq;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateInstanceUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: CreateInstanceUserReq): CreateInstanceUserRequest {
        this['body'] = body;
        return this;
    }
}