import { LanguageEnum } from './LanguageEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateWelcomeSpeechResponse extends SdkResponse {
    private 'welcome_speech_id'?: string;
    private 'welcome_speech'?: string;
    private 'enable_welcome_speech'?: boolean;
    public language?: LanguageEnum;
    private 'robot_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withWelcomeSpeechId(welcomeSpeechId: string): CreateWelcomeSpeechResponse {
        this['welcome_speech_id'] = welcomeSpeechId;
        return this;
    }
    public set welcomeSpeechId(welcomeSpeechId: string  | undefined) {
        this['welcome_speech_id'] = welcomeSpeechId;
    }
    public get welcomeSpeechId(): string | undefined {
        return this['welcome_speech_id'];
    }
    public withWelcomeSpeech(welcomeSpeech: string): CreateWelcomeSpeechResponse {
        this['welcome_speech'] = welcomeSpeech;
        return this;
    }
    public set welcomeSpeech(welcomeSpeech: string  | undefined) {
        this['welcome_speech'] = welcomeSpeech;
    }
    public get welcomeSpeech(): string | undefined {
        return this['welcome_speech'];
    }
    public withEnableWelcomeSpeech(enableWelcomeSpeech: boolean): CreateWelcomeSpeechResponse {
        this['enable_welcome_speech'] = enableWelcomeSpeech;
        return this;
    }
    public set enableWelcomeSpeech(enableWelcomeSpeech: boolean  | undefined) {
        this['enable_welcome_speech'] = enableWelcomeSpeech;
    }
    public get enableWelcomeSpeech(): boolean | undefined {
        return this['enable_welcome_speech'];
    }
    public withLanguage(language: LanguageEnum): CreateWelcomeSpeechResponse {
        this['language'] = language;
        return this;
    }
    public withRobotId(robotId: string): CreateWelcomeSpeechResponse {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withCreateTime(createTime: string): CreateWelcomeSpeechResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateWelcomeSpeechResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): CreateWelcomeSpeechResponse {
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