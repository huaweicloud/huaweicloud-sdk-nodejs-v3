import { UpdateBandwidthInfoRequest } from './UpdateBandwidthInfoRequest';


export class UpdateBandwidthRequest {
    private 'instance_id'?: string;
    public body?: UpdateBandwidthInfoRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateBandwidthRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateBandwidthInfoRequest): UpdateBandwidthRequest {
        this['body'] = body;
        return this;
    }
}