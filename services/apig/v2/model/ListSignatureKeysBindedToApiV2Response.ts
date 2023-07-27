import { BasePage } from './BasePage';
import { SignApiBindingInfo } from './SignApiBindingInfo';
import { SignApiBindingResult } from './SignApiBindingResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSignatureKeysBindedToApiV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public bindings?: Array<SignApiBindingInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListSignatureKeysBindedToApiV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListSignatureKeysBindedToApiV2Response {
        this['total'] = total;
        return this;
    }
    public withBindings(bindings: Array<SignApiBindingInfo>): ListSignatureKeysBindedToApiV2Response {
        this['bindings'] = bindings;
        return this;
    }
}