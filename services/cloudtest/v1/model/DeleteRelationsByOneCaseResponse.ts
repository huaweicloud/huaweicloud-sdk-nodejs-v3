import { ResultValueStringForOk } from './ResultValueStringForOk';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteRelationsByOneCaseResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueStringForOk;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteRelationsByOneCaseResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueStringForOk): DeleteRelationsByOneCaseResponse {
        this['result'] = result;
        return this;
    }
}