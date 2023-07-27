import { EipBindReq } from './EipBindReq';


export class AddEipV2Request {
    private 'instance_id'?: string;
    public body?: EipBindReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AddEipV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: EipBindReq): AddEipV2Request {
        this['body'] = body;
        return this;
    }
}