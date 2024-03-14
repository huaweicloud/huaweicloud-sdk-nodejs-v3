import { ModelInfo } from './ModelInfo';
import { VoiceConfig } from './VoiceConfig';


export class SmartChatRoomBaseInfo {
    private 'room_id'?: string;
    private 'room_name'?: string;
    private 'room_description'?: string;
    private 'robot_id'?: string;
    private 'cover_url'?: string;
    private 'model_infos'?: ModelInfo;
    private 'voice_config'?: VoiceConfig;
    public concurrency?: number;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withRoomId(roomId: string): SmartChatRoomBaseInfo {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withRoomName(roomName: string): SmartChatRoomBaseInfo {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withRoomDescription(roomDescription: string): SmartChatRoomBaseInfo {
        this['room_description'] = roomDescription;
        return this;
    }
    public set roomDescription(roomDescription: string  | undefined) {
        this['room_description'] = roomDescription;
    }
    public get roomDescription(): string | undefined {
        return this['room_description'];
    }
    public withRobotId(robotId: string): SmartChatRoomBaseInfo {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withCoverUrl(coverUrl: string): SmartChatRoomBaseInfo {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
    public withModelInfos(modelInfos: ModelInfo): SmartChatRoomBaseInfo {
        this['model_infos'] = modelInfos;
        return this;
    }
    public set modelInfos(modelInfos: ModelInfo  | undefined) {
        this['model_infos'] = modelInfos;
    }
    public get modelInfos(): ModelInfo | undefined {
        return this['model_infos'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): SmartChatRoomBaseInfo {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withConcurrency(concurrency: number): SmartChatRoomBaseInfo {
        this['concurrency'] = concurrency;
        return this;
    }
    public withCreateTime(createTime: string): SmartChatRoomBaseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): SmartChatRoomBaseInfo {
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