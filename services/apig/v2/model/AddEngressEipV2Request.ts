import { OpenEngressEipReq } from './OpenEngressEipReq';


export class AddEngressEipV2Request {
    private 'instance_id'?: string;
    public body?: OpenEngressEipReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AddEngressEipV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: OpenEngressEipReq): AddEngressEipV2Request {
        this['body'] = body;
        return this;
    }
}