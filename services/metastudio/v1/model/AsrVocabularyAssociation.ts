import { LanguageEnum } from './LanguageEnum';


export class AsrVocabularyAssociation {
    private 'hot_words_id'?: string;
    private 'vocabulary_id'?: string;
    private 'robot_id'?: string;
    public language?: LanguageEnum;
    public constructor() { 
    }
    public withHotWordsId(hotWordsId: string): AsrVocabularyAssociation {
        this['hot_words_id'] = hotWordsId;
        return this;
    }
    public set hotWordsId(hotWordsId: string  | undefined) {
        this['hot_words_id'] = hotWordsId;
    }
    public get hotWordsId(): string | undefined {
        return this['hot_words_id'];
    }
    public withVocabularyId(vocabularyId: string): AsrVocabularyAssociation {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string  | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId(): string | undefined {
        return this['vocabulary_id'];
    }
    public withRobotId(robotId: string): AsrVocabularyAssociation {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withLanguage(language: LanguageEnum): AsrVocabularyAssociation {
        this['language'] = language;
        return this;
    }
}