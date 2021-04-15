import { AttachServerVolumeOption } from './AttachServerVolumeOption';


export class AttachServerVolumeRequestBody {
    public volumeAttachment: AttachServerVolumeOption;
    public constructor(volumeAttachment?: any) { 
        this['volumeAttachment'] = volumeAttachment;
    }
    public withVolumeAttachment(volumeAttachment: AttachServerVolumeOption): AttachServerVolumeRequestBody {
        this['volumeAttachment'] = volumeAttachment;
        return this;
    }
}