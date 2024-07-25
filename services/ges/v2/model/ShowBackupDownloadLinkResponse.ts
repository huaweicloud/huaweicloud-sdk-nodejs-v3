import { BackupDownloadLink } from './BackupDownloadLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupDownloadLinkResponse extends SdkResponse {
    public bucket?: string;
    public files?: Array<BackupDownloadLink>;
    public constructor() { 
        super();
    }
    public withBucket(bucket: string): ShowBackupDownloadLinkResponse {
        this['bucket'] = bucket;
        return this;
    }
    public withFiles(files: Array<BackupDownloadLink>): ShowBackupDownloadLinkResponse {
        this['files'] = files;
        return this;
    }
}