import { CreateUserRequestV3 } from './CreateUserRequestV3';


export class CreateDdmUserRequest {
    private 'instance_id'?: string;
    public body?: CreateUserRequestV3;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateDdmUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateUserRequestV3): CreateDdmUserRequest {
        this['body'] = body;
        return this;
    }
}