import { KnowledgeTypeEnum } from './KnowledgeTypeEnum';
import { LanguageEnum } from './LanguageEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKnowledgeLibraryResponse extends SdkResponse {
    private 'knowledge_library_id'?: string;
    public name?: string;
    public language?: LanguageEnum;
    private 'knowledge_type'?: KnowledgeTypeEnum;
    private 'knowledge_size'?: number;
    public topk?: number;
    public score?: number;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withKnowledgeLibraryId(knowledgeLibraryId: string): ShowKnowledgeLibraryResponse {
        this['knowledge_library_id'] = knowledgeLibraryId;
        return this;
    }
    public set knowledgeLibraryId(knowledgeLibraryId: string  | undefined) {
        this['knowledge_library_id'] = knowledgeLibraryId;
    }
    public get knowledgeLibraryId(): string | undefined {
        return this['knowledge_library_id'];
    }
    public withName(name: string): ShowKnowledgeLibraryResponse {
        this['name'] = name;
        return this;
    }
    public withLanguage(language: LanguageEnum): ShowKnowledgeLibraryResponse {
        this['language'] = language;
        return this;
    }
    public withKnowledgeType(knowledgeType: KnowledgeTypeEnum): ShowKnowledgeLibraryResponse {
        this['knowledge_type'] = knowledgeType;
        return this;
    }
    public set knowledgeType(knowledgeType: KnowledgeTypeEnum  | undefined) {
        this['knowledge_type'] = knowledgeType;
    }
    public get knowledgeType(): KnowledgeTypeEnum | undefined {
        return this['knowledge_type'];
    }
    public withKnowledgeSize(knowledgeSize: number): ShowKnowledgeLibraryResponse {
        this['knowledge_size'] = knowledgeSize;
        return this;
    }
    public set knowledgeSize(knowledgeSize: number  | undefined) {
        this['knowledge_size'] = knowledgeSize;
    }
    public get knowledgeSize(): number | undefined {
        return this['knowledge_size'];
    }
    public withTopk(topk: number): ShowKnowledgeLibraryResponse {
        this['topk'] = topk;
        return this;
    }
    public withScore(score: number): ShowKnowledgeLibraryResponse {
        this['score'] = score;
        return this;
    }
    public withCreateTime(createTime: string): ShowKnowledgeLibraryResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowKnowledgeLibraryResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): ShowKnowledgeLibraryResponse {
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