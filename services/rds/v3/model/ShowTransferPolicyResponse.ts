import { TransferPolicy } from './TransferPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTransferPolicyResponse extends SdkResponse {
    public policies?: Array<TransferPolicy>;
    public constructor() { 
        super();
    }
    public withPolicies(policies: Array<TransferPolicy>): ShowTransferPolicyResponse {
        this['policies'] = policies;
        return this;
    }
}