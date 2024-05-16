import { LanguageEnum } from './LanguageEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRobotResponse extends SdkResponse {
    private 'robot_id'?: string;
    public name?: string;
    private 'room_id'?: string;
    private 'app_id'?: string;
    private 'app_type'?: number;
    private 'app_key'?: string;
    public language?: LanguageEnum;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public region?: number;
    private 'cbs_project_id'?: string;
    private 'llm_url'?: string;
    private 'is_stream'?: boolean;
    private 'chat_rounds'?: number;
    private 'role_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRobotId(robotId: string): ShowRobotResponse {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withName(name: string): ShowRobotResponse {
        this['name'] = name;
        return this;
    }
    public withRoomId(roomId: string): ShowRobotResponse {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withAppId(appId: string): ShowRobotResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppType(appType: number): ShowRobotResponse {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: number  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): number | undefined {
        return this['app_type'];
    }
    public withAppKey(appKey: string): ShowRobotResponse {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withLanguage(language: LanguageEnum): ShowRobotResponse {
        this['language'] = language;
        return this;
    }
    public withCreateTime(createTime: string): ShowRobotResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowRobotResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withRegion(region: number): ShowRobotResponse {
        this['region'] = region;
        return this;
    }
    public withCbsProjectId(cbsProjectId: string): ShowRobotResponse {
        this['cbs_project_id'] = cbsProjectId;
        return this;
    }
    public set cbsProjectId(cbsProjectId: string  | undefined) {
        this['cbs_project_id'] = cbsProjectId;
    }
    public get cbsProjectId(): string | undefined {
        return this['cbs_project_id'];
    }
    public withLlmUrl(llmUrl: string): ShowRobotResponse {
        this['llm_url'] = llmUrl;
        return this;
    }
    public set llmUrl(llmUrl: string  | undefined) {
        this['llm_url'] = llmUrl;
    }
    public get llmUrl(): string | undefined {
        return this['llm_url'];
    }
    public withIsStream(isStream: boolean): ShowRobotResponse {
        this['is_stream'] = isStream;
        return this;
    }
    public set isStream(isStream: boolean  | undefined) {
        this['is_stream'] = isStream;
    }
    public get isStream(): boolean | undefined {
        return this['is_stream'];
    }
    public withChatRounds(chatRounds: number): ShowRobotResponse {
        this['chat_rounds'] = chatRounds;
        return this;
    }
    public set chatRounds(chatRounds: number  | undefined) {
        this['chat_rounds'] = chatRounds;
    }
    public get chatRounds(): number | undefined {
        return this['chat_rounds'];
    }
    public withRoleId(roleId: string): ShowRobotResponse {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withXRequestId(xRequestId: string): ShowRobotResponse {
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