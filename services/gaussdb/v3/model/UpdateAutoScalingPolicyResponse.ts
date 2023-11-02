import { AutoScalingSwitchStatus } from './AutoScalingSwitchStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAutoScalingPolicyResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'switch_status'?: AutoScalingSwitchStatus;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): UpdateAutoScalingPolicyResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): UpdateAutoScalingPolicyResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withSwitchStatus(switchStatus: AutoScalingSwitchStatus): UpdateAutoScalingPolicyResponse {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: AutoScalingSwitchStatus  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): AutoScalingSwitchStatus | undefined {
        return this['switch_status'];
    }
}