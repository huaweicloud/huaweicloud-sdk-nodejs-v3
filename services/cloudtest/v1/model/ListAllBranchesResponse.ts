import { ResultValueListTestVersionVo } from './ResultValueListTestVersionVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllBranchesResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueListTestVersionVo;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListAllBranchesResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueListTestVersionVo): ListAllBranchesResponse {
        this['result'] = result;
        return this;
    }
}