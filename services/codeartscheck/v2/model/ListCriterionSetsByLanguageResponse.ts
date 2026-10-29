import { CriterionSetsInfo } from './CriterionSetsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCriterionSetsByLanguageResponse extends SdkResponse {
    public httpStatus?: string;
    public result?: CriterionSetsInfo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withHttpStatus(httpStatus: string): ListCriterionSetsByLanguageResponse {
        this['httpStatus'] = httpStatus;
        return this;
    }
    public withResult(result: CriterionSetsInfo): ListCriterionSetsByLanguageResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListCriterionSetsByLanguageResponse {
        this['status'] = status;
        return this;
    }
}