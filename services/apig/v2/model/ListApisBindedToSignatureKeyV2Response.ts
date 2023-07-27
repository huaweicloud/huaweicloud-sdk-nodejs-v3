import { BasePage } from './BasePage';
import { SignApiBindingBase } from './SignApiBindingBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApisBindedToSignatureKeyV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public bindings?: Array<SignApiBindingBase>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListApisBindedToSignatureKeyV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListApisBindedToSignatureKeyV2Response {
        this['total'] = total;
        return this;
    }
    public withBindings(bindings: Array<SignApiBindingBase>): ListApisBindedToSignatureKeyV2Response {
        this['bindings'] = bindings;
        return this;
    }
}