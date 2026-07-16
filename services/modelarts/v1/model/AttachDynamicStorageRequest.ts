import { DataVolumesReq } from './DataVolumesReq';


export class AttachDynamicStorageRequest {
    private 'instance_id'?: string;
    public body?: DataVolumesReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): AttachDynamicStorageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DataVolumesReq): AttachDynamicStorageRequest {
        this['body'] = body;
        return this;
    }
}