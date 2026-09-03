import { UploadStatusEnum } from './UploadStatusEnum';


export class PackageRegionWithStatusInfo {
    public region?: string;
    private 'upload_status'?: UploadStatusEnum;
    public constructor(region?: string, uploadStatus?: UploadStatusEnum) { 
        this['region'] = region;
        this['upload_status'] = uploadStatus;
    }
    public withRegion(region: string): PackageRegionWithStatusInfo {
        this['region'] = region;
        return this;
    }
    public withUploadStatus(uploadStatus: UploadStatusEnum): PackageRegionWithStatusInfo {
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