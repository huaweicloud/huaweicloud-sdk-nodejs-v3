import { VpcCreate } from './VpcCreate';


export class CreateVpcChannelV2Request {
    private 'instance_id'?: string;
    public body?: VpcCreate;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateVpcChannelV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: VpcCreate): CreateVpcChannelV2Request {
        this['body'] = body;
        return this;
    }
}