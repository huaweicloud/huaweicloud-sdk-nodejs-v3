import { DocumentSegmentInfo } from './DocumentSegmentInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDocumentSegmentResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<DocumentSegmentInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListDocumentSegmentResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDocumentSegmentResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListDocumentSegmentResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<DocumentSegmentInfo>): ListDocumentSegmentResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListDocumentSegmentResponse {
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