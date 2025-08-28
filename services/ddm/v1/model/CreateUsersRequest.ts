import { CreateUsersReq } from './CreateUsersReq';


export class CreateUsersRequest {
    private 'instance_id'?: string;
    public body?: CreateUsersReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateUsersRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateUsersReq): CreateUsersRequest {
        this['body'] = body;
        return this;
    }
}