import { BindEIPRequest } from './BindEIPRequest';


export class BindDbEncryptEipRequest {
    private 'instance_id'?: string;
    public body?: BindEIPRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BindDbEncryptEipRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BindEIPRequest): BindDbEncryptEipRequest {
        this['body'] = body;
        return this;
    }
}