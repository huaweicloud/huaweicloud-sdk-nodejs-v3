import { ResizeVolumeRequestBody } from './ResizeVolumeRequestBody';


export class ResizeVolumeRequest {
    private 'volume_id'?: string;
    public body?: ResizeVolumeRequestBody;
    public constructor(volumeId?: string) { 
        this['volume_id'] = volumeId;
    }
    public withVolumeId(volumeId: string): ResizeVolumeRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withBody(body: ResizeVolumeRequestBody): ResizeVolumeRequest {
        this['body'] = body;
        return this;
    }
}