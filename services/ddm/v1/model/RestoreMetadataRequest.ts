import { RestoreMetaData2ExistReq } from './RestoreMetaData2ExistReq';


export class RestoreMetadataRequest {
    private 'instance_id'?: string;
    public body?: RestoreMetaData2ExistReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): RestoreMetadataRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RestoreMetaData2ExistReq): RestoreMetadataRequest {
        this['body'] = body;
        return this;
    }
}