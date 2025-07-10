import { FileContentInfo } from './FileContentInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFileResponse extends SdkResponse {
    public error?: Error;
    public result?: FileContentInfo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowFileResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: FileContentInfo): ShowFileResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowFileResponse {
        this['status'] = status;
        return this;
    }
}