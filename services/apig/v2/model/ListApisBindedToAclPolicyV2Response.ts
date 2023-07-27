import { AclBindApiInfo } from './AclBindApiInfo';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApisBindedToAclPolicyV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public apis?: Array<AclBindApiInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListApisBindedToAclPolicyV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListApisBindedToAclPolicyV2Response {
        this['total'] = total;
        return this;
    }
    public withApis(apis: Array<AclBindApiInfo>): ListApisBindedToAclPolicyV2Response {
        this['apis'] = apis;
        return this;
    }
}