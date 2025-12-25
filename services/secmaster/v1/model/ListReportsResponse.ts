import { ReportInfo } from './ReportInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReportsResponse extends SdkResponse {
    public body?: Array<ReportInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ReportInfo>): ListReportsResponse {
        this['body'] = body;
        return this;
    }
    public withXRequestId(xRequestId: string): ListReportsResponse {
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