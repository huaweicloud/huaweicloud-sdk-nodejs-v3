import { BatchDeleteVolumeTagsRequestBody } from './BatchDeleteVolumeTagsRequestBody';


export class BatchDeleteVolumeTagsRequest {
    private 'volume_id': string | undefined;
    public body?: BatchDeleteVolumeTagsRequestBody;
    public constructor(volumeId?: any) { 
        this['volume_id'] = volumeId;
    }
    public withVolumeId(volumeId: string): BatchDeleteVolumeTagsRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
    public withBody(body: BatchDeleteVolumeTagsRequestBody): BatchDeleteVolumeTagsRequest {
        this['body'] = body;
        return this;
    }
}