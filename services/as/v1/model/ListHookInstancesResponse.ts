import { InstanceHangingInfos } from './InstanceHangingInfos';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHookInstancesResponse extends SdkResponse {
    private 'instance_hanging_info'?: Array<InstanceHangingInfos>;
    public constructor() { 
        super();
    }
    public withInstanceHangingInfo(instanceHangingInfo: Array<InstanceHangingInfos>): ListHookInstancesResponse {
        this['instance_hanging_info'] = instanceHangingInfo;
        return this;
    }
    public set instanceHangingInfo(instanceHangingInfo: Array<InstanceHangingInfos>  | undefined) {
        this['instance_hanging_info'] = instanceHangingInfo;
    }
    public get instanceHangingInfo(): Array<InstanceHangingInfos> | undefined {
        return this['instance_hanging_info'];
    }
}