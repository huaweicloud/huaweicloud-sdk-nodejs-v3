import { SignApiBindingInfo } from './SignApiBindingInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateSignatureKeyV2Response extends SdkResponse {
    public bindings?: Array<SignApiBindingInfo>;
    public constructor() { 
        super();
    }
    public withBindings(bindings: Array<SignApiBindingInfo>): AssociateSignatureKeyV2Response {
        this['bindings'] = bindings;
        return this;
    }
}