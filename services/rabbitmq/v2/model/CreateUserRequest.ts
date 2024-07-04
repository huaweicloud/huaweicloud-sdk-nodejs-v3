import { AMQPUser } from './AMQPUser';


export class CreateUserRequest {
    private 'instance_id'?: string;
    public body?: AMQPUser;
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
    public withBody(body: AMQPUser): CreateUserRequest {
        this['body'] = body;
        return this;
    }
}