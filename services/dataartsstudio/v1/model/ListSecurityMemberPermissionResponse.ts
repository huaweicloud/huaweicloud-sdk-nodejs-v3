import { AccountPermission } from './AccountPermission';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityMemberPermissionResponse extends SdkResponse {
    public total?: number;
    public result?: Array<AccountPermission>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityMemberPermissionResponse {
        this['total'] = total;
        return this;
    }
    public withResult(result: Array<AccountPermission>): ListSecurityMemberPermissionResponse {
        this['result'] = result;
        return this;
    }
}