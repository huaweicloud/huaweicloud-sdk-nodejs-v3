import { ModifyVolumeQoSRequestBody } from './ModifyVolumeQoSRequestBody';


export class ModifyVolumeQoSRequest {
    private 'volume_id'?: string;
    public body?: ModifyVolumeQoSRequestBody;
    public constructor(volumeId?: string) { 
        this['volume_id'] = volumeId;
    }
    public withVolumeId(volumeId: string): ModifyVolumeQoSRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withBody(body: ModifyVolumeQoSRequestBody): ModifyVolumeQoSRequest {
        this['body'] = body;
        return this;
    }
}