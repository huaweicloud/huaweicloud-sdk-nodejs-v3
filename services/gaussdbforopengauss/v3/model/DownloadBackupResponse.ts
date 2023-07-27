import { DownloadObject } from './DownloadObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadBackupResponse extends SdkResponse {
    public files?: Array<DownloadObject>;
    public bucket?: string;
    public constructor() { 
        super();
    }
    public withFiles(files: Array<DownloadObject>): DownloadBackupResponse {
        this['files'] = files;
        return this;
    }
    public withBucket(bucket: string): DownloadBackupResponse {
        this['bucket'] = bucket;
        return this;
    }
}