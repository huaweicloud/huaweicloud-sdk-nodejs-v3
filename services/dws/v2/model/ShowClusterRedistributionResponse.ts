import { RdsRedisInfo } from './RdsRedisInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterRedistributionResponse extends SdkResponse {
    private 'redis_info'?: RdsRedisInfo;
    private 'schedule_mode'?: boolean;
    private 'pause_enable'?: boolean;
    private 'recover_enable'?: boolean;
    private 'retry_enable'?: boolean;
    private 'update_enable'?: boolean;
    private 'control_enable'?: boolean;
    public constructor() { 
        super();
    }
    public withRedisInfo(redisInfo: RdsRedisInfo): ShowClusterRedistributionResponse {
        this['redis_info'] = redisInfo;
        return this;
    }
    public set redisInfo(redisInfo: RdsRedisInfo  | undefined) {
        this['redis_info'] = redisInfo;
    }
    public get redisInfo(): RdsRedisInfo | undefined {
        return this['redis_info'];
    }
    public withScheduleMode(scheduleMode: boolean): ShowClusterRedistributionResponse {
        this['schedule_mode'] = scheduleMode;
        return this;
    }
    public set scheduleMode(scheduleMode: boolean  | undefined) {
        this['schedule_mode'] = scheduleMode;
    }
    public get scheduleMode(): boolean | undefined {
        return this['schedule_mode'];
    }
    public withPauseEnable(pauseEnable: boolean): ShowClusterRedistributionResponse {
        this['pause_enable'] = pauseEnable;
        return this;
    }
    public set pauseEnable(pauseEnable: boolean  | undefined) {
        this['pause_enable'] = pauseEnable;
    }
    public get pauseEnable(): boolean | undefined {
        return this['pause_enable'];
    }
    public withRecoverEnable(recoverEnable: boolean): ShowClusterRedistributionResponse {
        this['recover_enable'] = recoverEnable;
        return this;
    }
    public set recoverEnable(recoverEnable: boolean  | undefined) {
        this['recover_enable'] = recoverEnable;
    }
    public get recoverEnable(): boolean | undefined {
        return this['recover_enable'];
    }
    public withRetryEnable(retryEnable: boolean): ShowClusterRedistributionResponse {
        this['retry_enable'] = retryEnable;
        return this;
    }
    public set retryEnable(retryEnable: boolean  | undefined) {
        this['retry_enable'] = retryEnable;
    }
    public get retryEnable(): boolean | undefined {
        return this['retry_enable'];
    }
    public withUpdateEnable(updateEnable: boolean): ShowClusterRedistributionResponse {
        this['update_enable'] = updateEnable;
        return this;
    }
    public set updateEnable(updateEnable: boolean  | undefined) {
        this['update_enable'] = updateEnable;
    }
    public get updateEnable(): boolean | undefined {
        return this['update_enable'];
    }
    public withControlEnable(controlEnable: boolean): ShowClusterRedistributionResponse {
        this['control_enable'] = controlEnable;
        return this;
    }
    public set controlEnable(controlEnable: boolean  | undefined) {
        this['control_enable'] = controlEnable;
    }
    public get controlEnable(): boolean | undefined {
        return this['control_enable'];
    }
}