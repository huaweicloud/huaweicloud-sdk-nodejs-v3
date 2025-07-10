import { FilesResponseInfo } from './FilesResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFilesResponse extends SdkResponse {
    public error?: Error;
    public result?: FilesResponseInfo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListFilesResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: FilesResponseInfo): ListFilesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListFilesResponse {
        this['status'] = status;
        return this;
    }
}