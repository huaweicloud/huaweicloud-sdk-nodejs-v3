import { KnowledgeTypeEnum } from './KnowledgeTypeEnum';
import { LanguageEnum } from './LanguageEnum';


export class KnowledgeLibraryInfo {
    private 'knowledge_library_id'?: string;
    public name?: string;
    public language?: LanguageEnum;
    private 'knowledge_type'?: KnowledgeTypeEnum;
    private 'knowledge_size'?: number;
    public topk?: number;
    public score?: number;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withKnowledgeLibraryId(knowledgeLibraryId: string): KnowledgeLibraryInfo {
        this['knowledge_library_id'] = knowledgeLibraryId;
        return this;
    }
    public set knowledgeLibraryId(knowledgeLibraryId: string  | undefined) {
        this['knowledge_library_id'] = knowledgeLibraryId;
    }
    public get knowledgeLibraryId(): string | undefined {
        return this['knowledge_library_id'];
    }
    public withName(name: string): KnowledgeLibraryInfo {
        this['name'] = name;
        return this;
    }
    public withLanguage(language: LanguageEnum): KnowledgeLibraryInfo {
        this['language'] = language;
        return this;
    }
    public withKnowledgeType(knowledgeType: KnowledgeTypeEnum): KnowledgeLibraryInfo {
        this['knowledge_type'] = knowledgeType;
        return this;
    }
    public set knowledgeType(knowledgeType: KnowledgeTypeEnum  | undefined) {
        this['knowledge_type'] = knowledgeType;
    }
    public get knowledgeType(): KnowledgeTypeEnum | undefined {
        return this['knowledge_type'];
    }
    public withKnowledgeSize(knowledgeSize: number): KnowledgeLibraryInfo {
        this['knowledge_size'] = knowledgeSize;
        return this;
    }
    public set knowledgeSize(knowledgeSize: number  | undefined) {
        this['knowledge_size'] = knowledgeSize;
    }
    public get knowledgeSize(): number | undefined {
        return this['knowledge_size'];
    }
    public withTopk(topk: number): KnowledgeLibraryInfo {
        this['topk'] = topk;
        return this;
    }
    public withScore(score: number): KnowledgeLibraryInfo {
        this['score'] = score;
        return this;
    }
    public withCreateTime(createTime: string): KnowledgeLibraryInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): KnowledgeLibraryInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}