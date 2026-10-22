import { AiGuardTimeLineItem } from './AiGuardTimeLineItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAiGuardRequestTimelineResponse extends SdkResponse {
    public body?: Array<AiGuardTimeLineItem>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<AiGuardTimeLineItem>): ShowAiGuardRequestTimelineResponse {
        this['body'] = body;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowAiGuardRequestTimelineResponse {
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