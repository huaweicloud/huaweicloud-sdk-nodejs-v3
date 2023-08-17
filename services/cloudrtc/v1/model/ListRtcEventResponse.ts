
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRtcEventResponse extends SdkResponse {
    public ctime?: string;
    private 'event_id'?: string;
    private 'event_info'?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCtime(ctime: string): ListRtcEventResponse {
        this['ctime'] = ctime;
        return this;
    }
    public withEventId(eventId: string): ListRtcEventResponse {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventInfo(eventInfo: string): ListRtcEventResponse {
        this['event_info'] = eventInfo;
        return this;
    }
    public set eventInfo(eventInfo: string  | undefined) {
        this['event_info'] = eventInfo;
    }
    public get eventInfo(): string | undefined {
        return this['event_info'];
    }
    public withXRequestId(xRequestId: string): ListRtcEventResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}