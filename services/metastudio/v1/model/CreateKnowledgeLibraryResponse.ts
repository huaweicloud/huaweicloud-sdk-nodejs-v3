
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateKnowledgeLibraryResponse extends SdkResponse {
    private 'knowledge_library_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withKnowledgeLibraryId(knowledgeLibraryId: string): CreateKnowledgeLibraryResponse {
        this['knowledge_library_id'] = knowledgeLibraryId;
        return this;
    }
    public set knowledgeLibraryId(knowledgeLibraryId: string  | undefined) {
        this['knowledge_library_id'] = knowledgeLibraryId;
    }
    public get knowledgeLibraryId(): string | undefined {
        return this['knowledge_library_id'];
    }
    public withXRequestId(xRequestId: string): CreateKnowledgeLibraryResponse {
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