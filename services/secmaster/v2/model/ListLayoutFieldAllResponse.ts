import { LayoutFieldResponseBody } from './LayoutFieldResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLayoutFieldAllResponse extends SdkResponse {
    public body?: Array<LayoutFieldResponseBody>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<LayoutFieldResponseBody>): ListLayoutFieldAllResponse {
        this['body'] = body;
        return this;
    }
    public withXRequestId(xRequestId: string): ListLayoutFieldAllResponse {
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