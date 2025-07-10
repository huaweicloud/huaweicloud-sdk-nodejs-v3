import { RepoInfoV2 } from './RepoInfoV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryByUuidResponse extends SdkResponse {
    public error?: Error;
    public result?: RepoInfoV2;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowRepositoryByUuidResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: RepoInfoV2): ShowRepositoryByUuidResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowRepositoryByUuidResponse {
        this['status'] = status;
        return this;
    }
}