import { TimelineTrafficStatisticsRequestBody } from './TimelineTrafficStatisticsRequestBody';


export class ListTimeLineTrafficStatisticsRequest {
    private 'Content-Type'?: string;
    public timezone?: string;
    public body?: TimelineTrafficStatisticsRequestBody;
    public constructor(contentType?: string, timezone?: string) { 
        this['Content-Type'] = contentType;
        this['timezone'] = timezone;
    }
    public withContentType(contentType: string): ListTimeLineTrafficStatisticsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withTimezone(timezone: string): ListTimeLineTrafficStatisticsRequest {
        this['timezone'] = timezone;
        return this;
    }
    public withBody(body: TimelineTrafficStatisticsRequestBody): ListTimeLineTrafficStatisticsRequest {
        this['body'] = body;
        return this;
    }
}