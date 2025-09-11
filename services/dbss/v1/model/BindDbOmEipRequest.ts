import { BindEIPRequest } from './BindEIPRequest';


export class BindDbOmEipRequest {
    private 'instance_id'?: string;
    public body?: BindEIPRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BindDbOmEipRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BindEIPRequest): BindDbOmEipRequest {
        this['body'] = body;
        return this;
    }
}