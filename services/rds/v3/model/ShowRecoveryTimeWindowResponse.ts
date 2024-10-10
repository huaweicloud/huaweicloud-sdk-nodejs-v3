
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecoveryTimeWindowResponse extends SdkResponse {
    private 'recovery_min_time'?: string;
    private 'recovery_max_time'?: string;
    public constructor() { 
        super();
    }
    public withRecoveryMinTime(recoveryMinTime: string): ShowRecoveryTimeWindowResponse {
        this['recovery_min_time'] = recoveryMinTime;
        return this;
    }
    public set recoveryMinTime(recoveryMinTime: string  | undefined) {
        this['recovery_min_time'] = recoveryMinTime;
    }
    public get recoveryMinTime(): string | undefined {
        return this['recovery_min_time'];
    }
    public withRecoveryMaxTime(recoveryMaxTime: string): ShowRecoveryTimeWindowResponse {
        this['recovery_max_time'] = recoveryMaxTime;
        return this;
    }
    public set recoveryMaxTime(recoveryMaxTime: string  | undefined) {
        this['recovery_max_time'] = recoveryMaxTime;
    }
    public get recoveryMaxTime(): string | undefined {
        return this['recovery_max_time'];
    }
}