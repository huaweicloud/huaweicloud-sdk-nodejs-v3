import { LanguageEnum } from './LanguageEnum';
import { RoleKnowledgeLibraryReq } from './RoleKnowledgeLibraryReq';


export class RoleBusinessReq {
    public language?: LanguageEnum;
    public prompt?: string;
    private 'knowledge_library_list'?: Array<RoleKnowledgeLibraryReq>;
    public constructor(language?: LanguageEnum) { 
        this['language'] = language;
    }
    public withLanguage(language: LanguageEnum): RoleBusinessReq {
        this['language'] = language;
        return this;
    }
    public withPrompt(prompt: string): RoleBusinessReq {
        this['prompt'] = prompt;
        return this;
    }
    public withKnowledgeLibraryList(knowledgeLibraryList: Array<RoleKnowledgeLibraryReq>): RoleBusinessReq {
        this['knowledge_library_list'] = knowledgeLibraryList;
        return this;
    }
    public set knowledgeLibraryList(knowledgeLibraryList: Array<RoleKnowledgeLibraryReq>  | undefined) {
        this['knowledge_library_list'] = knowledgeLibraryList;
    }
    public get knowledgeLibraryList(): Array<RoleKnowledgeLibraryReq> | undefined {
        return this['knowledge_library_list'];
    }
}