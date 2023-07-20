import { CheckPasswordRequestBody } from './CheckPasswordRequestBody';


export class CheckPasswordRequest {
    private 'instance_id'?: string;
    public body?: CheckPasswordRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CheckPasswordRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CheckPasswordRequestBody): CheckPasswordRequest {
        this['body'] = body;
        return this;
    }
}