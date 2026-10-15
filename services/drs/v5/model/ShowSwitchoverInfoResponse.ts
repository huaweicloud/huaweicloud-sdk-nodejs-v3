
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSwitchoverInfoResponse extends SdkResponse {
    private 'last_switchover_time'?: string;
    private 'increment_check_point'?: string;
    private 'target_safe_point'?: string;
    public constructor() { 
        super();
    }
    public withLastSwitchoverTime(lastSwitchoverTime: string): ShowSwitchoverInfoResponse {
        this['last_switchover_time'] = lastSwitchoverTime;
        return this;
    }
    public set lastSwitchoverTime(lastSwitchoverTime: string  | undefined) {
        this['last_switchover_time'] = lastSwitchoverTime;
    }
    public get lastSwitchoverTime(): string | undefined {
        return this['last_switchover_time'];
    }
    public withIncrementCheckPoint(incrementCheckPoint: string): ShowSwitchoverInfoResponse {
        this['increment_check_point'] = incrementCheckPoint;
        return this;
    }
    public set incrementCheckPoint(incrementCheckPoint: string  | undefined) {
        this['increment_check_point'] = incrementCheckPoint;
    }
    public get incrementCheckPoint(): string | undefined {
        return this['increment_check_point'];
    }
    public withTargetSafePoint(targetSafePoint: string): ShowSwitchoverInfoResponse {
        this['target_safe_point'] = targetSafePoint;
        return this;
    }
    public set targetSafePoint(targetSafePoint: string  | undefined) {
        this['target_safe_point'] = targetSafePoint;
    }
    public get targetSafePoint(): string | undefined {
        return this['target_safe_point'];
    }
}