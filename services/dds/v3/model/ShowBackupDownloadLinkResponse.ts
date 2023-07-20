import { GetBackupDownloadLinkResponseBodyFiles } from './GetBackupDownloadLinkResponseBodyFiles';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupDownloadLinkResponse extends SdkResponse {
    public files?: Array<GetBackupDownloadLinkResponseBodyFiles>;
    public bucket?: string;
    public constructor() { 
        super();
    }
    public withFiles(files: Array<GetBackupDownloadLinkResponseBodyFiles>): ShowBackupDownloadLinkResponse {
        this['files'] = files;
        return this;
    }
    public withBucket(bucket: string): ShowBackupDownloadLinkResponse {
        this['bucket'] = bucket;
        return this;
    }
}