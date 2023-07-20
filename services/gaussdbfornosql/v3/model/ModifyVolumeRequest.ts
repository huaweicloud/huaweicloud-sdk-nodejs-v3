import { ModifyVolumeRequestBody } from './ModifyVolumeRequestBody';


export class ModifyVolumeRequest {
    private 'instance_id'?: string;
    public body?: ModifyVolumeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ModifyVolumeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyVolumeRequestBody): ModifyVolumeRequest {
        this['body'] = body;
        return this;
    }
}