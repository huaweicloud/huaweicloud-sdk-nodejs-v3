import { ResultValueStringForOk } from './ResultValueStringForOk';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRelationsByOneCaseResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueStringForOk;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateRelationsByOneCaseResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueStringForOk): CreateRelationsByOneCaseResponse {
        this['result'] = result;
        return this;
    }
}