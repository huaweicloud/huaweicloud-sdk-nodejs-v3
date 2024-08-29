import { RetypeVolumeRequestBody } from './RetypeVolumeRequestBody';


export class RetypeVolumeRequest {
    private 'volume_id'?: string;
    public body?: RetypeVolumeRequestBody;
    public constructor(volumeId?: string) { 
        this['volume_id'] = volumeId;
    }
    public withVolumeId(volumeId: string): RetypeVolumeRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withBody(body: RetypeVolumeRequestBody): RetypeVolumeRequest {
        this['body'] = body;
        return this;
    }
}