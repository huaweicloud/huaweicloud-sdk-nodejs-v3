import { CreateColdVolumeRequestBody } from './CreateColdVolumeRequestBody';


export class CreateColdVolumeRequest {
    private 'instance_id'?: string;
    public body?: CreateColdVolumeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateColdVolumeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateColdVolumeRequestBody): CreateColdVolumeRequest {
        this['body'] = body;
        return this;
    }
}