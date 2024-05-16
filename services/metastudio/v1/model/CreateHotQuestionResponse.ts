
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateHotQuestionResponse extends SdkResponse {
    private 'hot_question_id'?: string;
    private 'hot_question'?: string;
    private 'robot_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withHotQuestionId(hotQuestionId: string): CreateHotQuestionResponse {
        this['hot_question_id'] = hotQuestionId;
        return this;
    }
    public set hotQuestionId(hotQuestionId: string  | undefined) {
        this['hot_question_id'] = hotQuestionId;
    }
    public get hotQuestionId(): string | undefined {
        return this['hot_question_id'];
    }
    public withHotQuestion(hotQuestion: string): CreateHotQuestionResponse {
        this['hot_question'] = hotQuestion;
        return this;
    }
    public set hotQuestion(hotQuestion: string  | undefined) {
        this['hot_question'] = hotQuestion;
    }
    public get hotQuestion(): string | undefined {
        return this['hot_question'];
    }
    public withRobotId(robotId: string): CreateHotQuestionResponse {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withCreateTime(createTime: string): CreateHotQuestionResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateHotQuestionResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): CreateHotQuestionResponse {
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