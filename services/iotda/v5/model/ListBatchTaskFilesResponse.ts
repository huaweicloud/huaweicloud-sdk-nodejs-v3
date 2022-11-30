import { BatchTaskFile } from './BatchTaskFile';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBatchTaskFilesResponse extends SdkResponse {
    public files?: Array<BatchTaskFile>;
    public constructor() { 
        super();
    }
    public withFiles(files: Array<BatchTaskFile>): ListBatchTaskFilesResponse {
        this['files'] = files;
        return this;
    }
}