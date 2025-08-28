import { KnowledgeLibraryInfo } from './KnowledgeLibraryInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKnowledgeLibraryResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<KnowledgeLibraryInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListKnowledgeLibraryResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListKnowledgeLibraryResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListKnowledgeLibraryResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<KnowledgeLibraryInfo>): ListKnowledgeLibraryResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListKnowledgeLibraryResponse {
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