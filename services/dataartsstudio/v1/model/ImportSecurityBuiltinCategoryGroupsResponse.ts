import { ImportDefaultCategoryResultDto } from './ImportDefaultCategoryResultDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportSecurityBuiltinCategoryGroupsResponse extends SdkResponse {
    public result?: Array<ImportDefaultCategoryResultDto>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<ImportDefaultCategoryResultDto>): ImportSecurityBuiltinCategoryGroupsResponse {
        this['result'] = result;
        return this;
    }
}