import { ListJobResult } from './ListJobResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobResponse extends SdkResponse {
    public result?: ListJobResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ListJobResult): ListJobResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListJobResponse {
        this['status'] = status;
        return this;
    }
}