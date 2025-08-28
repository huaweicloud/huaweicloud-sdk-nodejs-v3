import { DocumentSegmentInfo } from './DocumentSegmentInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PreviewDocumentSegmentResponse extends SdkResponse {
    public body?: Array<DocumentSegmentInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<DocumentSegmentInfo>): PreviewDocumentSegmentResponse {
        this['body'] = body;
        return this;
    }
    public withXRequestId(xRequestId: string): PreviewDocumentSegmentResponse {
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