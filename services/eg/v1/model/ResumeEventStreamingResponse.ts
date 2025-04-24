
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResumeEventStreamingResponse extends SdkResponse {
    public eventStreamingID?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withEventStreamingID(eventStreamingID: string): ResumeEventStreamingResponse {
        this['eventStreamingID'] = eventStreamingID;
        return this;
    }
    public withXRequestId(xRequestId: string): ResumeEventStreamingResponse {
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