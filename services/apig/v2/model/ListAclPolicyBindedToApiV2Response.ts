import { ApiBindAclInfo } from './ApiBindAclInfo';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAclPolicyBindedToApiV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public acls?: Array<ApiBindAclInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListAclPolicyBindedToApiV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListAclPolicyBindedToApiV2Response {
        this['total'] = total;
        return this;
    }
    public withAcls(acls: Array<ApiBindAclInfo>): ListAclPolicyBindedToApiV2Response {
        this['acls'] = acls;
        return this;
    }
}