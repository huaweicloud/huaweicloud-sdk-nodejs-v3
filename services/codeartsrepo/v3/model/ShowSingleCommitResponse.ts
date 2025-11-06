import { SpecificCommitInfo } from './SpecificCommitInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSingleCommitResponse extends SdkResponse {
    public error?: Error;
    public result?: SpecificCommitInfo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowSingleCommitResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: SpecificCommitInfo): ShowSingleCommitResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowSingleCommitResponse {
        this['status'] = status;
        return this;
    }
}