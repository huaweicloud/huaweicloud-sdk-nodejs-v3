import { BatchAttachSharableVolumesRequestBody } from './BatchAttachSharableVolumesRequestBody';


export class BatchAttachSharableVolumesRequest {
    private 'volume_id'?: string;
    public body?: BatchAttachSharableVolumesRequestBody;
    public constructor(volumeId?: string) { 
        this['volume_id'] = volumeId;
    }
    public withVolumeId(volumeId: string): BatchAttachSharableVolumesRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withBody(body: BatchAttachSharableVolumesRequestBody): BatchAttachSharableVolumesRequest {
        this['body'] = body;
        return this;
    }
}