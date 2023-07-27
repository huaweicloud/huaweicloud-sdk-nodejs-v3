import { VolumeAttachment } from './VolumeAttachment';


export class AttachVolumeBody {
    public volumeAttachment?: VolumeAttachment;
    public constructor(volumeAttachment?: VolumeAttachment) { 
        this['volumeAttachment'] = volumeAttachment;
    }
    public withVolumeAttachment(volumeAttachment: VolumeAttachment): AttachVolumeBody {
        this['volumeAttachment'] = volumeAttachment;
        return this;
    }
}