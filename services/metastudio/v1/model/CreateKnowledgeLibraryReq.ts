import { KnowledgeTypeEnum } from './KnowledgeTypeEnum';
import { LanguageEnum } from './LanguageEnum';


export class CreateKnowledgeLibraryReq {
    public name?: string;
    public language?: LanguageEnum;
    private 'knowledge_type'?: KnowledgeTypeEnum;
    public topk?: number;
    public score?: number;
    public constructor(name?: string, language?: LanguageEnum, knowledgeType?: KnowledgeTypeEnum) { 
        this['name'] = name;
        this['language'] = language;
        this['knowledge_type'] = knowledgeType;
    }
    public withName(name: string): CreateKnowledgeLibraryReq {
        this['name'] = name;
        return this;
    }
    public withLanguage(language: LanguageEnum): CreateKnowledgeLibraryReq {
        this['language'] = language;
        return this;
    }
    public withKnowledgeType(knowledgeType: KnowledgeTypeEnum): CreateKnowledgeLibraryReq {
        this['knowledge_type'] = knowledgeType;
        return this;
    }
    public set knowledgeType(knowledgeType: KnowledgeTypeEnum  | undefined) {
        this['knowledge_type'] = knowledgeType;
    }
    public get knowledgeType(): KnowledgeTypeEnum | undefined {
        return this['knowledge_type'];
    }
    public withTopk(topk: number): CreateKnowledgeLibraryReq {
        this['topk'] = topk;
        return this;
    }
    public withScore(score: number): CreateKnowledgeLibraryReq {
        this['score'] = score;
        return this;
    }
}