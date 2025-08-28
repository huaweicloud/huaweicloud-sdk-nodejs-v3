

export class KnowledgeLibraryBaseInfo {
    private 'knowledge_library_id'?: string;
    public name?: string;
    public constructor(knowledgeLibraryId?: string) { 
        this['knowledge_library_id'] = knowledgeLibraryId;
    }
    public withKnowledgeLibraryId(knowledgeLibraryId: string): KnowledgeLibraryBaseInfo {
        this['knowledge_library_id'] = knowledgeLibraryId;
        return this;
    }
    public set knowledgeLibraryId(knowledgeLibraryId: string  | undefined) {
        this['knowledge_library_id'] = knowledgeLibraryId;
    }
    public get knowledgeLibraryId(): string | undefined {
        return this['knowledge_library_id'];
    }
    public withName(name: string): KnowledgeLibraryBaseInfo {
        this['name'] = name;
        return this;
    }
}