import { UpdatePublicIpRequestBody } from './UpdatePublicIpRequestBody';


export class UpdatePublicIpRequest {
    private 'instance_id'?: string;
    public body?: UpdatePublicIpRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdatePublicIpRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdatePublicIpRequestBody): UpdatePublicIpRequest {
        this['body'] = body;
        return this;
    }
}