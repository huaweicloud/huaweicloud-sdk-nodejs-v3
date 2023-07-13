import { BatchCreateVolumeTagsRequestBody } from './BatchCreateVolumeTagsRequestBody';


export class BatchCreateVolumeTagsRequest {
    private 'volume_id': string | undefined;
    public body?: BatchCreateVolumeTagsRequestBody;
    public constructor(volumeId?: any) { 
        this['volume_id'] = volumeId;
    }
    public withVolumeId(volumeId: string): BatchCreateVolumeTagsRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
    public withBody(body: BatchCreateVolumeTagsRequestBody): BatchCreateVolumeTagsRequest {
        this['body'] = body;
        return this;
    }
}