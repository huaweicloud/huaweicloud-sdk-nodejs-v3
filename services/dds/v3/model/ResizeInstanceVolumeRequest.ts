import { ResizeInstanceVolumeRequestBody } from './ResizeInstanceVolumeRequestBody';


export class ResizeInstanceVolumeRequest {
    private 'instance_id'?: string;
    public body?: ResizeInstanceVolumeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ResizeInstanceVolumeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResizeInstanceVolumeRequestBody): ResizeInstanceVolumeRequest {
        this['body'] = body;
        return this;
    }
}