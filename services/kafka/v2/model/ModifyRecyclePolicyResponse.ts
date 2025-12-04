import { InstanceRecycleInfo } from './InstanceRecycleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyRecyclePolicyResponse extends SdkResponse {
    private 'retention_days'?: number;
    private 'default_use_recycle'?: boolean;
    private 'recycle_instances'?: Array<InstanceRecycleInfo>;
    public constructor() { 
        super();
    }
    public withRetentionDays(retentionDays: number): ModifyRecyclePolicyResponse {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
    public withDefaultUseRecycle(defaultUseRecycle: boolean): ModifyRecyclePolicyResponse {
        this['default_use_recycle'] = defaultUseRecycle;
        return this;
    }
    public set defaultUseRecycle(defaultUseRecycle: boolean  | undefined) {
        this['default_use_recycle'] = defaultUseRecycle;
    }
    public get defaultUseRecycle(): boolean | undefined {
        return this['default_use_recycle'];
    }
    public withRecycleInstances(recycleInstances: Array<InstanceRecycleInfo>): ModifyRecyclePolicyResponse {
        this['recycle_instances'] = recycleInstances;
        return this;
    }
    public set recycleInstances(recycleInstances: Array<InstanceRecycleInfo>  | undefined) {
        this['recycle_instances'] = recycleInstances;
    }
    public get recycleInstances(): Array<InstanceRecycleInfo> | undefined {
        return this['recycle_instances'];
    }
}