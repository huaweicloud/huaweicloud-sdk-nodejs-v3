import { FailureResources } from './FailureResources';
import { SuccessResources } from './SuccessResources';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchModifyBandwidthResponse extends SdkResponse {
    private 'success_resources'?: Array<SuccessResources>;
    private 'failure_resources'?: Array<FailureResources>;
    public constructor() { 
        super();
    }
    public withSuccessResources(successResources: Array<SuccessResources>): BatchModifyBandwidthResponse {
        this['success_resources'] = successResources;
        return this;
    }
    public set successResources(successResources: Array<SuccessResources>  | undefined) {
        this['success_resources'] = successResources;
    }
    public get successResources(): Array<SuccessResources> | undefined {
        return this['success_resources'];
    }
    public withFailureResources(failureResources: Array<FailureResources>): BatchModifyBandwidthResponse {
        this['failure_resources'] = failureResources;
        return this;
    }
    public set failureResources(failureResources: Array<FailureResources>  | undefined) {
        this['failure_resources'] = failureResources;
    }
    public get failureResources(): Array<FailureResources> | undefined {
        return this['failure_resources'];
    }
}