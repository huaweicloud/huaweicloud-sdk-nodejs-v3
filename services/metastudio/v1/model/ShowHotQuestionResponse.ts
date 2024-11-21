import { LanguageEnum } from './LanguageEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHotQuestionResponse extends SdkResponse {
    private 'hot_question_id'?: string;
    private 'hot_question'?: string;
    public language?: LanguageEnum;
    private 'robot_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withHotQuestionId(hotQuestionId: string): ShowHotQuestionResponse {
        this['hot_question_id'] = hotQuestionId;
        return this;
    }
    public set hotQuestionId(hotQuestionId: string  | undefined) {
        this['hot_question_id'] = hotQuestionId;
    }
    public get hotQuestionId(): string | undefined {
        return this['hot_question_id'];
    }
    public withHotQuestion(hotQuestion: string): ShowHotQuestionResponse {
        this['hot_question'] = hotQuestion;
        return this;
    }
    public set hotQuestion(hotQuestion: string  | undefined) {
        this['hot_question'] = hotQuestion;
    }
    public get hotQuestion(): string | undefined {
        return this['hot_question'];
    }
    public withLanguage(language: LanguageEnum): ShowHotQuestionResponse {
        this['language'] = language;
        return this;
    }
    public withRobotId(robotId: string): ShowHotQuestionResponse {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withCreateTime(createTime: string): ShowHotQuestionResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowHotQuestionResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): ShowHotQuestionResponse {
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