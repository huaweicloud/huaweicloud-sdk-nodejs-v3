import { LanguageEnum } from './LanguageEnum';


export class SlotKnowledgeLibraryInfo {
    public language?: LanguageEnum;
    private 'knowledge_library_id'?: string;
    public constructor(language?: LanguageEnum, knowledgeLibraryId?: string) { 
        this['language'] = language;
        this['knowledge_library_id'] = knowledgeLibraryId;
    }
    public withLanguage(language: LanguageEnum): SlotKnowledgeLibraryInfo {
        this['language'] = language;
        return this;
    }
    public withKnowledgeLibraryId(knowledgeLibraryId: string): SlotKnowledgeLibraryInfo {
        this['knowledge_library_id'] = knowledgeLibraryId;
        return this;
    }
    public set knowledgeLibraryId(knowledgeLibraryId: string  | undefined) {
        this['knowledge_library_id'] = knowledgeLibraryId;
    }
    public get knowledgeLibraryId(): string | undefined {
        return this['knowledge_library_id'];
    }
}