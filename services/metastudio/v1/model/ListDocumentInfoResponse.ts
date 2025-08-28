import { DocumentInfo } from './DocumentInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDocumentInfoResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<DocumentInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListDocumentInfoResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDocumentInfoResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListDocumentInfoResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<DocumentInfo>): ListDocumentInfoResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListDocumentInfoResponse {
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