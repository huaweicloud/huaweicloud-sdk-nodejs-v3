import { GetBackupDownloadLinkFiles } from './GetBackupDownloadLinkFiles';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupDownloadLinkResponse extends SdkResponse {
    public files?: Array<GetBackupDownloadLinkFiles>;
    public bucket?: string;
    public constructor() { 
        super();
    }
    public withFiles(files: Array<GetBackupDownloadLinkFiles>): ShowBackupDownloadLinkResponse {
        this['files'] = files;
        return this;
    }
    public withBucket(bucket: string): ShowBackupDownloadLinkResponse {
        this['bucket'] = bucket;
        return this;
    }
}