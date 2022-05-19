import { AttachServerVolumeOption } from './AttachServerVolumeOption';


export class AttachServerVolumeRequestBody {
    public volumeAttachment: AttachServerVolumeOption;
    private 'dry_run'?: boolean | undefined;
    public constructor(volumeAttachment?: any) { 
        this['volumeAttachment'] = volumeAttachment;
    }
    public withVolumeAttachment(volumeAttachment: AttachServerVolumeOption): AttachServerVolumeRequestBody {
        this['volumeAttachment'] = volumeAttachment;
        return this;
    }
    public withDryRun(dryRun: boolean): AttachServerVolumeRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
    }
}