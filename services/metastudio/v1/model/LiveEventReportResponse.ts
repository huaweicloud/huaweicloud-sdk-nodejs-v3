
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class LiveEventReportResponse extends SdkResponse {
    private 'live_event_report_url'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withLiveEventReportUrl(liveEventReportUrl: string): LiveEventReportResponse {
        this['live_event_report_url'] = liveEventReportUrl;
        return this;
    }
    public set liveEventReportUrl(liveEventReportUrl: string  | undefined) {
        this['live_event_report_url'] = liveEventReportUrl;
    }
    public get liveEventReportUrl(): string | undefined {
        return this['live_event_report_url'];
    }
    public withXRequestId(xRequestId: string): LiveEventReportResponse {
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