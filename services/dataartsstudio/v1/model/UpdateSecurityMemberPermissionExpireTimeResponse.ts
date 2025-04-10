import { UpdatePermissionExpireTimeResultDTOResults } from './UpdatePermissionExpireTimeResultDTOResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSecurityMemberPermissionExpireTimeResponse extends SdkResponse {
    public results?: Array<UpdatePermissionExpireTimeResultDTOResults>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<UpdatePermissionExpireTimeResultDTOResults>): UpdateSecurityMemberPermissionExpireTimeResponse {
        this['results'] = results;
        return this;
    }
}