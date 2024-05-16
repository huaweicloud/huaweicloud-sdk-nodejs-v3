import { KnowledgeQuestionInfo } from './KnowledgeQuestionInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKnowledgeQuestionResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<KnowledgeQuestionInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListKnowledgeQuestionResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListKnowledgeQuestionResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListKnowledgeQuestionResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<KnowledgeQuestionInfo>): ListKnowledgeQuestionResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListKnowledgeQuestionResponse {
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