import { LiveWarningItem } from './LiveWarningItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLiveWarningInfoResponse extends SdkResponse {
    private 'live_warning_info'?: Array<LiveWarningItem>;
    private 'limit_duration'?: number;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withLiveWarningInfo(liveWarningInfo: Array<LiveWarningItem>): ShowLiveWarningInfoResponse {
        this['live_warning_info'] = liveWarningInfo;
        return this;
    }
    public set liveWarningInfo(liveWarningInfo: Array<LiveWarningItem>  | undefined) {
        this['live_warning_info'] = liveWarningInfo;
    }
    public get liveWarningInfo(): Array<LiveWarningItem> | undefined {
        return this['live_warning_info'];
    }
    public withLimitDuration(limitDuration: number): ShowLiveWarningInfoResponse {
        this['limit_duration'] = limitDuration;
        return this;
    }
    public set limitDuration(limitDuration: number  | undefined) {
        this['limit_duration'] = limitDuration;
    }
    public get limitDuration(): number | undefined {
        return this['limit_duration'];
    }
    public withXRequestId(xRequestId: string): ShowLiveWarningInfoResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}