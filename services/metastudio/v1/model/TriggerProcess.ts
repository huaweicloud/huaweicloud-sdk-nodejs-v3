import { ReplyAudioInfo } from './ReplyAudioInfo';
import { SmartLayerConfig } from './SmartLayerConfig';


export class TriggerProcess {
    private 'time_window'?: number;
    private 'reply_mode'?: TriggerProcessReplyModeEnum | string;
    private 'layer_config'?: SmartLayerConfig;
    private 'extra_layer_config'?: SmartLayerConfig;
    private 'reply_texts'?: Array<string>;
    private 'reply_audios'?: Array<ReplyAudioInfo>;
    private 'reply_order'?: TriggerProcessReplyOrderEnum | string;
    private 'reply_role'?: TriggerProcessReplyRoleEnum | string;
    private 'robot_id'?: string;
    private 'play_type'?: TriggerProcessPlayTypeEnum | string;
    public constructor() { 
    }
    public withTimeWindow(timeWindow: number): TriggerProcess {
        this['time_window'] = timeWindow;
        return this;
    }
    public set timeWindow(timeWindow: number  | undefined) {
        this['time_window'] = timeWindow;
    }
    public get timeWindow(): number | undefined {
        return this['time_window'];
    }
    public withReplyMode(replyMode: TriggerProcessReplyModeEnum | string): TriggerProcess {
        this['reply_mode'] = replyMode;
        return this;
    }
    public set replyMode(replyMode: TriggerProcessReplyModeEnum | string  | undefined) {
        this['reply_mode'] = replyMode;
    }
    public get replyMode(): TriggerProcessReplyModeEnum | string | undefined {
        return this['reply_mode'];
    }
    public withLayerConfig(layerConfig: SmartLayerConfig): TriggerProcess {
        this['layer_config'] = layerConfig;
        return this;
    }
    public set layerConfig(layerConfig: SmartLayerConfig  | undefined) {
        this['layer_config'] = layerConfig;
    }
    public get layerConfig(): SmartLayerConfig | undefined {
        return this['layer_config'];
    }
    public withExtraLayerConfig(extraLayerConfig: SmartLayerConfig): TriggerProcess {
        this['extra_layer_config'] = extraLayerConfig;
        return this;
    }
    public set extraLayerConfig(extraLayerConfig: SmartLayerConfig  | undefined) {
        this['extra_layer_config'] = extraLayerConfig;
    }
    public get extraLayerConfig(): SmartLayerConfig | undefined {
        return this['extra_layer_config'];
    }
    public withReplyTexts(replyTexts: Array<string>): TriggerProcess {
        this['reply_texts'] = replyTexts;
        return this;
    }
    public set replyTexts(replyTexts: Array<string>  | undefined) {
        this['reply_texts'] = replyTexts;
    }
    public get replyTexts(): Array<string> | undefined {
        return this['reply_texts'];
    }
    public withReplyAudios(replyAudios: Array<ReplyAudioInfo>): TriggerProcess {
        this['reply_audios'] = replyAudios;
        return this;
    }
    public set replyAudios(replyAudios: Array<ReplyAudioInfo>  | undefined) {
        this['reply_audios'] = replyAudios;
    }
    public get replyAudios(): Array<ReplyAudioInfo> | undefined {
        return this['reply_audios'];
    }
    public withReplyOrder(replyOrder: TriggerProcessReplyOrderEnum | string): TriggerProcess {
        this['reply_order'] = replyOrder;
        return this;
    }
    public set replyOrder(replyOrder: TriggerProcessReplyOrderEnum | string  | undefined) {
        this['reply_order'] = replyOrder;
    }
    public get replyOrder(): TriggerProcessReplyOrderEnum | string | undefined {
        return this['reply_order'];
    }
    public withReplyRole(replyRole: TriggerProcessReplyRoleEnum | string): TriggerProcess {
        this['reply_role'] = replyRole;
        return this;
    }
    public set replyRole(replyRole: TriggerProcessReplyRoleEnum | string  | undefined) {
        this['reply_role'] = replyRole;
    }
    public get replyRole(): TriggerProcessReplyRoleEnum | string | undefined {
        return this['reply_role'];
    }
    public withRobotId(robotId: string): TriggerProcess {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withPlayType(playType: TriggerProcessPlayTypeEnum | string): TriggerProcess {
        this['play_type'] = playType;
        return this;
    }
    public set playType(playType: TriggerProcessPlayTypeEnum | string  | undefined) {
        this['play_type'] = playType;
    }
    public get playType(): TriggerProcessPlayTypeEnum | string | undefined {
        return this['play_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TriggerProcessReplyModeEnum {
    SYSTEM_REPLY = 'SYSTEM_REPLY',
    CALLBACK = 'CALLBACK',
    SYSTEM_REPLY_AND_CALLBACK = 'SYSTEM_REPLY_AND_CALLBACK',
    SHOW_LAYER = 'SHOW_LAYER',
    INTELLIGENT_REPLY = 'INTELLIGENT_REPLY'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerProcessReplyOrderEnum {
    RANDOM = 'RANDOM',
    ORDER = 'ORDER'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerProcessReplyRoleEnum {
    STREAMER = 'STREAMER',
    CO_STREAMER = 'CO_STREAMER'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerProcessPlayTypeEnum {
    APPEND = 'APPEND',
    INSERT = 'INSERT',
    PLAY_NOW = 'PLAY_NOW'
}
