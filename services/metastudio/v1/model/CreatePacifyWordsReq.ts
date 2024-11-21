import { LanguageEnum } from './LanguageEnum';


export class CreatePacifyWordsReq {
    private 'robot_id'?: string;
    private 'pacify_words_type'?: number;
    public intent?: string;
    private 'pacify_words'?: string;
    public language?: LanguageEnum;
    public constructor(robotId?: string, pacifyWordsType?: number, pacifyWords?: string, language?: LanguageEnum) { 
        this['robot_id'] = robotId;
        this['pacify_words_type'] = pacifyWordsType;
        this['pacify_words'] = pacifyWords;
        this['language'] = language;
    }
    public withRobotId(robotId: string): CreatePacifyWordsReq {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withPacifyWordsType(pacifyWordsType: number): CreatePacifyWordsReq {
        this['pacify_words_type'] = pacifyWordsType;
        return this;
    }
    public set pacifyWordsType(pacifyWordsType: number  | undefined) {
        this['pacify_words_type'] = pacifyWordsType;
    }
    public get pacifyWordsType(): number | undefined {
        return this['pacify_words_type'];
    }
    public withIntent(intent: string): CreatePacifyWordsReq {
        this['intent'] = intent;
        return this;
    }
    public withPacifyWords(pacifyWords: string): CreatePacifyWordsReq {
        this['pacify_words'] = pacifyWords;
        return this;
    }
    public set pacifyWords(pacifyWords: string  | undefined) {
        this['pacify_words'] = pacifyWords;
    }
    public get pacifyWords(): string | undefined {
        return this['pacify_words'];
    }
    public withLanguage(language: LanguageEnum): CreatePacifyWordsReq {
        this['language'] = language;
        return this;
    }
}