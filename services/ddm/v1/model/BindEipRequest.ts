import { BindEipOpenRequest } from './BindEipOpenRequest';


export class BindEipRequest {
    private 'instance_id'?: string;
    public body?: BindEipOpenRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BindEipRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BindEipOpenRequest): BindEipRequest {
        this['body'] = body;
        return this;
    }
}