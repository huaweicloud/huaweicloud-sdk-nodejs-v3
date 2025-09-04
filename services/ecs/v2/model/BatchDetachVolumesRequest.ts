import { VolumeBatchDetachRequest } from './VolumeBatchDetachRequest';


export class BatchDetachVolumesRequest {
    private 'volume_id'?: string;
    public body?: VolumeBatchDetachRequest;
    public constructor(volumeId?: string) { 
        this['volume_id'] = volumeId;
    }
    public withVolumeId(volumeId: string): BatchDetachVolumesRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withBody(body: VolumeBatchDetachRequest): BatchDetachVolumesRequest {
        this['body'] = body;
        return this;
    }
}