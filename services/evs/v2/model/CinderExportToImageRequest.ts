import { CinderExportToImageRequestBody } from './CinderExportToImageRequestBody';


export class CinderExportToImageRequest {
    private 'volume_id': string | undefined;
    public body?: CinderExportToImageRequestBody;
    public constructor(volumeId?: any) { 
        this['volume_id'] = volumeId;
    }
    public withVolumeId(volumeId: string): CinderExportToImageRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
    public withBody(body: CinderExportToImageRequestBody): CinderExportToImageRequest {
        this['body'] = body;
        return this;
    }
}