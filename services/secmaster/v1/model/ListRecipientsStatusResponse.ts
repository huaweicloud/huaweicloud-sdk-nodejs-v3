import { EmailStatusInfo } from './EmailStatusInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecipientsStatusResponse extends SdkResponse {
    public body?: Array<EmailStatusInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<EmailStatusInfo>): ListRecipientsStatusResponse {
        this['body'] = body;
        return this;
    }
    public withXRequestId(xRequestId: string): ListRecipientsStatusResponse {
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