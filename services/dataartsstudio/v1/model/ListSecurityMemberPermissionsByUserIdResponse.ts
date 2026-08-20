import { AccountPermission } from './AccountPermission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityMemberPermissionsByUserIdResponse extends SdkResponse {
    public total?: number;
    public result?: Array<AccountPermission>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityMemberPermissionsByUserIdResponse {
        this['total'] = total;
        return this;
    }
    public withResult(result: Array<AccountPermission>): ListSecurityMemberPermissionsByUserIdResponse {
        this['result'] = result;
        return this;
    }
}