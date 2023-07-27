import { OpenIngressEipReq } from './OpenIngressEipReq';


export class AddIngressEipV2Request {
    private 'instance_id'?: string;
    public body?: OpenIngressEipReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AddIngressEipV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: OpenIngressEipReq): AddIngressEipV2Request {
        this['body'] = body;
        return this;
    }
}