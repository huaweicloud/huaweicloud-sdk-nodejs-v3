import { KnowledgeTypeEnum } from './KnowledgeTypeEnum';


export class RecallKnowledgeLibraryRequestBody {
    private 'knowledge_library_id'?: string;
    private 'knowledge_type'?: KnowledgeTypeEnum;
    public query?: string;
    public topk?: number;
    public score?: number;
    public constructor(knowledgeLibraryId?: string, knowledgeType?: KnowledgeTypeEnum, query?: string) { 
        this['knowledge_library_id'] = knowledgeLibraryId;
        this['knowledge_type'] = knowledgeType;
        this['query'] = query;
    }
    public withKnowledgeLibraryId(knowledgeLibraryId: string): RecallKnowledgeLibraryRequestBody {
        this['knowledge_library_id'] = knowledgeLibraryId;
        return this;
    }
    public set knowledgeLibraryId(knowledgeLibraryId: string  | undefined) {
        this['knowledge_library_id'] = knowledgeLibraryId;
    }
    public get knowledgeLibraryId(): string | undefined {
        return this['knowledge_library_id'];
    }
    public withKnowledgeType(knowledgeType: KnowledgeTypeEnum): RecallKnowledgeLibraryRequestBody {
        this['knowledge_type'] = knowledgeType;
        return this;
    }
    public set knowledgeType(knowledgeType: KnowledgeTypeEnum  | undefined) {
        this['knowledge_type'] = knowledgeType;
    }
    public get knowledgeType(): KnowledgeTypeEnum | undefined {
        return this['knowledge_type'];
    }
    public withQuery(query: string): RecallKnowledgeLibraryRequestBody {
        this['query'] = query;
        return this;
    }
    public withTopk(topk: number): RecallKnowledgeLibraryRequestBody {
        this['topk'] = topk;
        return this;
    }
    public withScore(score: number): RecallKnowledgeLibraryRequestBody {
        this['score'] = score;
        return this;
    }
}