import { FileInfo } from './FileInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditLogDownloadLinkResponse extends SdkResponse {
    public files?: Array<FileInfo>;
    public constructor() { 
        super();
    }
    public withFiles(files: Array<FileInfo>): ListAuditLogDownloadLinkResponse {
        this['files'] = files;
        return this;
    }
}