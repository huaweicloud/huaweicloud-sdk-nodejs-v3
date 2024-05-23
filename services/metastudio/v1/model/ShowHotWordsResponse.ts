import { HotWordsTypeEnum } from './HotWordsTypeEnum';
import { LanguageEnum } from './LanguageEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHotWordsResponse extends SdkResponse {
    private 'hot_words_id'?: string;
    private 'robot_id'?: string;
    private 'hot_words_type'?: HotWordsTypeEnum;
    private 'vocabulary_id'?: string;
    private 'sis_project_id'?: string;
    public region?: number;
    public language?: LanguageEnum;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withHotWordsId(hotWordsId: string): ShowHotWordsResponse {
        this['hot_words_id'] = hotWordsId;
        return this;
    }
    public set hotWordsId(hotWordsId: string  | undefined) {
        this['hot_words_id'] = hotWordsId;
    }
    public get hotWordsId(): string | undefined {
        return this['hot_words_id'];
    }
    public withRobotId(robotId: string): ShowHotWordsResponse {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withHotWordsType(hotWordsType: HotWordsTypeEnum): ShowHotWordsResponse {
        this['hot_words_type'] = hotWordsType;
        return this;
    }
    public set hotWordsType(hotWordsType: HotWordsTypeEnum  | undefined) {
        this['hot_words_type'] = hotWordsType;
    }
    public get hotWordsType(): HotWordsTypeEnum | undefined {
        return this['hot_words_type'];
    }
    public withVocabularyId(vocabularyId: string): ShowHotWordsResponse {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string  | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId(): string | undefined {
        return this['vocabulary_id'];
    }
    public withSisProjectId(sisProjectId: string): ShowHotWordsResponse {
        this['sis_project_id'] = sisProjectId;
        return this;
    }
    public set sisProjectId(sisProjectId: string  | undefined) {
        this['sis_project_id'] = sisProjectId;
    }
    public get sisProjectId(): string | undefined {
        return this['sis_project_id'];
    }
    public withRegion(region: number): ShowHotWordsResponse {
        this['region'] = region;
        return this;
    }
    public withLanguage(language: LanguageEnum): ShowHotWordsResponse {
        this['language'] = language;
        return this;
    }
    public withCreateTime(createTime: string): ShowHotWordsResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowHotWordsResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): ShowHotWordsResponse {
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