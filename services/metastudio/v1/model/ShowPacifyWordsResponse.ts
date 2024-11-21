import { LanguageEnum } from './LanguageEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPacifyWordsResponse extends SdkResponse {
    private 'pacify_words_id'?: string;
    private 'pacify_words'?: string;
    public language?: LanguageEnum;
    private 'robot_id'?: string;
    private 'pacify_words_type'?: number;
    public intent?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withPacifyWordsId(pacifyWordsId: string): ShowPacifyWordsResponse {
        this['pacify_words_id'] = pacifyWordsId;
        return this;
    }
    public set pacifyWordsId(pacifyWordsId: string  | undefined) {
        this['pacify_words_id'] = pacifyWordsId;
    }
    public get pacifyWordsId(): string | undefined {
        return this['pacify_words_id'];
    }
    public withPacifyWords(pacifyWords: string): ShowPacifyWordsResponse {
        this['pacify_words'] = pacifyWords;
        return this;
    }
    public set pacifyWords(pacifyWords: string  | undefined) {
        this['pacify_words'] = pacifyWords;
    }
    public get pacifyWords(): string | undefined {
        return this['pacify_words'];
    }
    public withLanguage(language: LanguageEnum): ShowPacifyWordsResponse {
        this['language'] = language;
        return this;
    }
    public withRobotId(robotId: string): ShowPacifyWordsResponse {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withPacifyWordsType(pacifyWordsType: number): ShowPacifyWordsResponse {
        this['pacify_words_type'] = pacifyWordsType;
        return this;
    }
    public set pacifyWordsType(pacifyWordsType: number  | undefined) {
        this['pacify_words_type'] = pacifyWordsType;
    }
    public get pacifyWordsType(): number | undefined {
        return this['pacify_words_type'];
    }
    public withIntent(intent: string): ShowPacifyWordsResponse {
        this['intent'] = intent;
        return this;
    }
    public withCreateTime(createTime: string): ShowPacifyWordsResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowPacifyWordsResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): ShowPacifyWordsResponse {
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