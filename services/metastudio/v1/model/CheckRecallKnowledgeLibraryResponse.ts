import { RecallKnowledgeLibraryInfo } from './RecallKnowledgeLibraryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckRecallKnowledgeLibraryResponse extends SdkResponse {
    public body?: Array<RecallKnowledgeLibraryInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RecallKnowledgeLibraryInfo>): CheckRecallKnowledgeLibraryResponse {
        this['body'] = body;
        return this;
    }
    public withXRequestId(xRequestId: string): CheckRecallKnowledgeLibraryResponse {
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