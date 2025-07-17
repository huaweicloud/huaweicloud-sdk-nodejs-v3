import { AsrVocabularyTypeEnum } from './AsrVocabularyTypeEnum';
import { LanguageEnum } from './LanguageEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAsrVocabularyResponse extends SdkResponse {
    private 'asr_vocabulary_id'?: string;
    private 'vocabulary_type'?: AsrVocabularyTypeEnum;
    public name?: string;
    public content?: string;
    public language?: LanguageEnum;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withAsrVocabularyId(asrVocabularyId: string): CreateAsrVocabularyResponse {
        this['asr_vocabulary_id'] = asrVocabularyId;
        return this;
    }
    public set asrVocabularyId(asrVocabularyId: string  | undefined) {
        this['asr_vocabulary_id'] = asrVocabularyId;
    }
    public get asrVocabularyId(): string | undefined {
        return this['asr_vocabulary_id'];
    }
    public withVocabularyType(vocabularyType: AsrVocabularyTypeEnum): CreateAsrVocabularyResponse {
        this['vocabulary_type'] = vocabularyType;
        return this;
    }
    public set vocabularyType(vocabularyType: AsrVocabularyTypeEnum  | undefined) {
        this['vocabulary_type'] = vocabularyType;
    }
    public get vocabularyType(): AsrVocabularyTypeEnum | undefined {
        return this['vocabulary_type'];
    }
    public withName(name: string): CreateAsrVocabularyResponse {
        this['name'] = name;
        return this;
    }
    public withContent(content: string): CreateAsrVocabularyResponse {
        this['content'] = content;
        return this;
    }
    public withLanguage(language: LanguageEnum): CreateAsrVocabularyResponse {
        this['language'] = language;
        return this;
    }
    public withCreateTime(createTime: string): CreateAsrVocabularyResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateAsrVocabularyResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): CreateAsrVocabularyResponse {
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