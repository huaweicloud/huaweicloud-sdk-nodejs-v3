import { BatchResizeVolumeRequestBody } from './BatchResizeVolumeRequestBody';


export class BatchResizeVolumesRequest {
    public body?: BatchResizeVolumeRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchResizeVolumeRequestBody): BatchResizeVolumesRequest {
        this['body'] = body;
        return this;
    }
}