import { ResultValueListTestVersionVo } from './ResultValueListTestVersionVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllIteratorsResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueListTestVersionVo;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListAllIteratorsResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueListTestVersionVo): ListAllIteratorsResponse {
        this['result'] = result;
        return this;
    }
}