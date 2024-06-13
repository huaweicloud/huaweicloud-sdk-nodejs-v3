
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReplayDelayStatusResponse extends SdkResponse {
    private 'cur_delay_time_mills'?: number;
    private 'delay_time_value_range'?: string;
    private 'real_delay_time_mills'?: number;
    private 'cur_log_replay_paused'?: boolean;
    private 'latest_receive_log'?: string;
    private 'latest_replay_log'?: string;
    public constructor() { 
        super();
    }
    public withCurDelayTimeMills(curDelayTimeMills: number): ShowReplayDelayStatusResponse {
        this['cur_delay_time_mills'] = curDelayTimeMills;
        return this;
    }
    public set curDelayTimeMills(curDelayTimeMills: number  | undefined) {
        this['cur_delay_time_mills'] = curDelayTimeMills;
    }
    public get curDelayTimeMills(): number | undefined {
        return this['cur_delay_time_mills'];
    }
    public withDelayTimeValueRange(delayTimeValueRange: string): ShowReplayDelayStatusResponse {
        this['delay_time_value_range'] = delayTimeValueRange;
        return this;
    }
    public set delayTimeValueRange(delayTimeValueRange: string  | undefined) {
        this['delay_time_value_range'] = delayTimeValueRange;
    }
    public get delayTimeValueRange(): string | undefined {
        return this['delay_time_value_range'];
    }
    public withRealDelayTimeMills(realDelayTimeMills: number): ShowReplayDelayStatusResponse {
        this['real_delay_time_mills'] = realDelayTimeMills;
        return this;
    }
    public set realDelayTimeMills(realDelayTimeMills: number  | undefined) {
        this['real_delay_time_mills'] = realDelayTimeMills;
    }
    public get realDelayTimeMills(): number | undefined {
        return this['real_delay_time_mills'];
    }
    public withCurLogReplayPaused(curLogReplayPaused: boolean): ShowReplayDelayStatusResponse {
        this['cur_log_replay_paused'] = curLogReplayPaused;
        return this;
    }
    public set curLogReplayPaused(curLogReplayPaused: boolean  | undefined) {
        this['cur_log_replay_paused'] = curLogReplayPaused;
    }
    public get curLogReplayPaused(): boolean | undefined {
        return this['cur_log_replay_paused'];
    }
    public withLatestReceiveLog(latestReceiveLog: string): ShowReplayDelayStatusResponse {
        this['latest_receive_log'] = latestReceiveLog;
        return this;
    }
    public set latestReceiveLog(latestReceiveLog: string  | undefined) {
        this['latest_receive_log'] = latestReceiveLog;
    }
    public get latestReceiveLog(): string | undefined {
        return this['latest_receive_log'];
    }
    public withLatestReplayLog(latestReplayLog: string): ShowReplayDelayStatusResponse {
        this['latest_replay_log'] = latestReplayLog;
        return this;
    }
    public set latestReplayLog(latestReplayLog: string  | undefined) {
        this['latest_replay_log'] = latestReplayLog;
    }
    public get latestReplayLog(): string | undefined {
        return this['latest_replay_log'];
    }
}