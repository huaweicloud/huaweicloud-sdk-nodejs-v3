import { TimelineTrafficStatisticsRequestBody } from './TimelineTrafficStatisticsRequestBody';


export class ListTimeLineTrafficStatisticsRequest {
    private 'Content-Type': string | undefined;
    public timezone: string;
    public body?: TimelineTrafficStatisticsRequestBody;
    public constructor(contentType?: any, timezone?: any) { 
        this['Content-Type'] = contentType;
        this['timezone'] = timezone;
    }
    public withContentType(contentType: string): ListTimeLineTrafficStatisticsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
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