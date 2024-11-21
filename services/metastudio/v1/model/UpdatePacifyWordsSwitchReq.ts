import { LanguageEnum } from './LanguageEnum';


export class UpdatePacifyWordsSwitchReq {
    private 'robot_id'?: string;
    public language?: LanguageEnum;
    private 'enable_pacify_words'?: boolean;
    public constructor(robotId?: string, language?: LanguageEnum, enablePacifyWords?: boolean) { 
        this['robot_id'] = robotId;
        this['language'] = language;
        this['enable_pacify_words'] = enablePacifyWords;
    }
    public withRobotId(robotId: string): UpdatePacifyWordsSwitchReq {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withLanguage(language: LanguageEnum): UpdatePacifyWordsSwitchReq {
        this['language'] = language;
        return this;
    }
    public withEnablePacifyWords(enablePacifyWords: boolean): UpdatePacifyWordsSwitchReq {
        this['enable_pacify_words'] = enablePacifyWords;
        return this;
    }
    public set enablePacifyWords(enablePacifyWords: boolean  | undefined) {
        this['enable_pacify_words'] = enablePacifyWords;
    }
    public get enablePacifyWords(): boolean | undefined {
        return this['enable_pacify_words'];
    }
}