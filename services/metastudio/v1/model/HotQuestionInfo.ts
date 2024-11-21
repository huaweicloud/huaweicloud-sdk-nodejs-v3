import { LanguageEnum } from './LanguageEnum';


export class HotQuestionInfo {
    private 'hot_question_id'?: string;
    private 'hot_question'?: string;
    public language?: LanguageEnum;
    private 'robot_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withHotQuestionId(hotQuestionId: string): HotQuestionInfo {
        this['hot_question_id'] = hotQuestionId;
        return this;
    }
    public set hotQuestionId(hotQuestionId: string  | undefined) {
        this['hot_question_id'] = hotQuestionId;
    }
    public get hotQuestionId(): string | undefined {
        return this['hot_question_id'];
    }
    public withHotQuestion(hotQuestion: string): HotQuestionInfo {
        this['hot_question'] = hotQuestion;
        return this;
    }
    public set hotQuestion(hotQuestion: string  | undefined) {
        this['hot_question'] = hotQuestion;
    }
    public get hotQuestion(): string | undefined {
        return this['hot_question'];
    }
    public withLanguage(language: LanguageEnum): HotQuestionInfo {
        this['language'] = language;
        return this;
    }
    public withRobotId(robotId: string): HotQuestionInfo {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withCreateTime(createTime: string): HotQuestionInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): HotQuestionInfo {
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