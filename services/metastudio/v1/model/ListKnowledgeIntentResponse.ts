import { KnowledgeIntentInfo } from './KnowledgeIntentInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKnowledgeIntentResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<KnowledgeIntentInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListKnowledgeIntentResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListKnowledgeIntentResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListKnowledgeIntentResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<KnowledgeIntentInfo>): ListKnowledgeIntentResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListKnowledgeIntentResponse {
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