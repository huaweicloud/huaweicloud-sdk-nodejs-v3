import { ShowRelatedProjectResult } from './ShowRelatedProjectResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRelatedProjectResponse extends SdkResponse {
    public result?: ShowRelatedProjectResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ShowRelatedProjectResult): ShowRelatedProjectResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ShowRelatedProjectResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ShowRelatedProjectResponse {
        this['status'] = status;
        return this;
    }
}