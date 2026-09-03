import { UploadStatusEnum } from './UploadStatusEnum';


export class SkillPackageRegionItem {
    public region?: string;
    private 'obs_bucket'?: string;
    private 'obs_object_key'?: string;
    private 'upload_status'?: UploadStatusEnum;
    public constructor() { 
    }
    public withRegion(region: string): SkillPackageRegionItem {
        this['region'] = region;
        return this;
    }
    public withObsBucket(obsBucket: string): SkillPackageRegionItem {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withObsObjectKey(obsObjectKey: string): SkillPackageRegionItem {
        this['obs_object_key'] = obsObjectKey;
        return this;
    }
    public set obsObjectKey(obsObjectKey: string  | undefined) {
        this['obs_object_key'] = obsObjectKey;
    }
    public get obsObjectKey(): string | undefined {
        return this['obs_object_key'];
    }
    public withUploadStatus(uploadStatus: UploadStatusEnum): SkillPackageRegionItem {
        this['upload_status'] = uploadStatus;
        return this;
    }
    public set uploadStatus(uploadStatus: UploadStatusEnum  | undefined) {
        this['upload_status'] = uploadStatus;
    }
    public get uploadStatus(): UploadStatusEnum | undefined {
        return this['upload_status'];
    }
}