
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateReportResponse extends SdkResponse {
    public body?: string;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): UpdateReportResponse {
        this['body'] = body;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateReportResponse {
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