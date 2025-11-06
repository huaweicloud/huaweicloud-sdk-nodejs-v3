import { FileContentInfo } from './FileContentInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFilesByQueryResponse extends SdkResponse {
    public error?: Error;
    public result?: FileContentInfo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListFilesByQueryResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: FileContentInfo): ListFilesByQueryResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListFilesByQueryResponse {
        this['status'] = status;
        return this;
    }
}