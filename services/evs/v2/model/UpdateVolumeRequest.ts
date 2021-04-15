import { UpdateVolumeRequestBody } from './UpdateVolumeRequestBody';


export class UpdateVolumeRequest {
    private 'volume_id': string | undefined;
    public body?: UpdateVolumeRequestBody;
    public constructor(volumeId?: any) { 
        this['volume_id'] = volumeId;
    }
    public withVolumeId(volumeId: string): UpdateVolumeRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
    public withBody(body: UpdateVolumeRequestBody): UpdateVolumeRequest {
        this['body'] = body;
        return this;
    }
}