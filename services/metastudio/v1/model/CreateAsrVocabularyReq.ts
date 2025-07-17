import { AsrVocabularyTypeEnum } from './AsrVocabularyTypeEnum';
import { LanguageEnum } from './LanguageEnum';
import { MobvoiVocabulary } from './MobvoiVocabulary';


export class CreateAsrVocabularyReq {
    private 'vocabulary_type'?: AsrVocabularyTypeEnum;
    public name?: string;
    public language?: LanguageEnum;
    private 'mobvoi_vocabulary'?: MobvoiVocabulary;
    public constructor(vocabularyType?: AsrVocabularyTypeEnum, name?: string, language?: LanguageEnum) { 
        this['vocabulary_type'] = vocabularyType;
        this['name'] = name;
        this['language'] = language;
    }
    public withVocabularyType(vocabularyType: AsrVocabularyTypeEnum): CreateAsrVocabularyReq {
        this['vocabulary_type'] = vocabularyType;
        return this;
    }
    public set vocabularyType(vocabularyType: AsrVocabularyTypeEnum  | undefined) {
        this['vocabulary_type'] = vocabularyType;
    }
    public get vocabularyType(): AsrVocabularyTypeEnum | undefined {
        return this['vocabulary_type'];
    }
    public withName(name: string): CreateAsrVocabularyReq {
        this['name'] = name;
        return this;
    }
    public withLanguage(language: LanguageEnum): CreateAsrVocabularyReq {
        this['language'] = language;
        return this;
    }
    public withMobvoiVocabulary(mobvoiVocabulary: MobvoiVocabulary): CreateAsrVocabularyReq {
        this['mobvoi_vocabulary'] = mobvoiVocabulary;
        return this;
    }
    public set mobvoiVocabulary(mobvoiVocabulary: MobvoiVocabulary  | undefined) {
        this['mobvoi_vocabulary'] = mobvoiVocabulary;
    }
    public get mobvoiVocabulary(): MobvoiVocabulary | undefined {
        return this['mobvoi_vocabulary'];
    }
}