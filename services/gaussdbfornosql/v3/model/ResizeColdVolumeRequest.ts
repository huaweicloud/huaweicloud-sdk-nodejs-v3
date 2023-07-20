import { ResizeColdVolumeRequestBody } from './ResizeColdVolumeRequestBody';


export class ResizeColdVolumeRequest {
    private 'instance_id'?: string;
    public body?: ResizeColdVolumeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ResizeColdVolumeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ResizeColdVolumeRequestBody): ResizeColdVolumeRequest {
        this['body'] = body;
        return this;
    }
}