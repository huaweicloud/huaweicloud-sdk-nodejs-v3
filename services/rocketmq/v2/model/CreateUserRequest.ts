import { User } from './User';


export class CreateUserRequest {
    private 'instance_id'?: string;
    public body?: User;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateUserRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: User): CreateUserRequest {
        this['body'] = body;
        return this;
    }
}