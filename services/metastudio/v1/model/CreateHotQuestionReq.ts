import { LanguageEnum } from './LanguageEnum';


export class CreateHotQuestionReq {
    private 'robot_id'?: string;
    private 'hot_question'?: string;
    public language?: LanguageEnum;
    public constructor(robotId?: string, hotQuestion?: string) { 
        this['robot_id'] = robotId;
        this['hot_question'] = hotQuestion;
    }
    public withRobotId(robotId: string): CreateHotQuestionReq {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withHotQuestion(hotQuestion: string): CreateHotQuestionReq {
        this['hot_question'] = hotQuestion;
        return this;
    }
    public set hotQuestion(hotQuestion: string  | undefined) {
        this['hot_question'] = hotQuestion;
    }
    public get hotQuestion(): string | undefined {
        return this['hot_question'];
    }
    public withLanguage(language: LanguageEnum): CreateHotQuestionReq {
        this['language'] = language;
        return this;
    }
}