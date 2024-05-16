import { KnowledgeSkillInfo } from './KnowledgeSkillInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKnowledgeSkillResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<KnowledgeSkillInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListKnowledgeSkillResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListKnowledgeSkillResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListKnowledgeSkillResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<KnowledgeSkillInfo>): ListKnowledgeSkillResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListKnowledgeSkillResponse {
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