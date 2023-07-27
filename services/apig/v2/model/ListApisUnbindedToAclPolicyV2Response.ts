import { BasePage } from './BasePage';
import { UnbindApiForAcl } from './UnbindApiForAcl';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApisUnbindedToAclPolicyV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public apis?: Array<UnbindApiForAcl>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListApisUnbindedToAclPolicyV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListApisUnbindedToAclPolicyV2Response {
        this['total'] = total;
        return this;
    }
    public withApis(apis: Array<UnbindApiForAcl>): ListApisUnbindedToAclPolicyV2Response {
        this['apis'] = apis;
        return this;
    }
}