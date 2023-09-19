import { InteractionRuleInfo } from './InteractionRuleInfo';
import { LiveVideoScriptInfo } from './LiveVideoScriptInfo';
import { PlayPolicy } from './PlayPolicy';
import { VideoConfig } from './VideoConfig';


export class CreateSmartLiveRoomReq {
    private 'room_name'?: string;
    private 'room_description'?: string;
    private 'room_type'?: CreateSmartLiveRoomReqRoomTypeEnum | string;
    private 'scene_scripts'?: Array<LiveVideoScriptInfo>;
    private 'interaction_rules'?: Array<InteractionRuleInfo>;
    private 'play_policy'?: PlayPolicy;
    private 'video_config'?: VideoConfig;
    private 'output_urls'?: Array<string>;
    public constructor(roomName?: string) { 
        this['room_name'] = roomName;
    }
    public withRoomName(roomName: string): CreateSmartLiveRoomReq {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withRoomDescription(roomDescription: string): CreateSmartLiveRoomReq {
        this['room_description'] = roomDescription;
        return this;
    }
    public set roomDescription(roomDescription: string  | undefined) {
        this['room_description'] = roomDescription;
    }
    public get roomDescription(): string | undefined {
        return this['room_description'];
    }
    public withRoomType(roomType: CreateSmartLiveRoomReqRoomTypeEnum | string): CreateSmartLiveRoomReq {
        this['room_type'] = roomType;
        return this;
    }
    public set roomType(roomType: CreateSmartLiveRoomReqRoomTypeEnum | string  | undefined) {
        this['room_type'] = roomType;
    }
    public get roomType(): CreateSmartLiveRoomReqRoomTypeEnum | string | undefined {
        return this['room_type'];
    }
    public withSceneScripts(sceneScripts: Array<LiveVideoScriptInfo>): CreateSmartLiveRoomReq {
        this['scene_scripts'] = sceneScripts;
        return this;
    }
    public set sceneScripts(sceneScripts: Array<LiveVideoScriptInfo>  | undefined) {
        this['scene_scripts'] = sceneScripts;
    }
    public get sceneScripts(): Array<LiveVideoScriptInfo> | undefined {
        return this['scene_scripts'];
    }
    public withInteractionRules(interactionRules: Array<InteractionRuleInfo>): CreateSmartLiveRoomReq {
        this['interaction_rules'] = interactionRules;
        return this;
    }
    public set interactionRules(interactionRules: Array<InteractionRuleInfo>  | undefined) {
        this['interaction_rules'] = interactionRules;
    }
    public get interactionRules(): Array<InteractionRuleInfo> | undefined {
        return this['interaction_rules'];
    }
    public withPlayPolicy(playPolicy: PlayPolicy): CreateSmartLiveRoomReq {
        this['play_policy'] = playPolicy;
        return this;
    }
    public set playPolicy(playPolicy: PlayPolicy  | undefined) {
        this['play_policy'] = playPolicy;
    }
    public get playPolicy(): PlayPolicy | undefined {
        return this['play_policy'];
    }
    public withVideoConfig(videoConfig: VideoConfig): CreateSmartLiveRoomReq {
        this['video_config'] = videoConfig;
        return this;
    }
    public set videoConfig(videoConfig: VideoConfig  | undefined) {
        this['video_config'] = videoConfig;
    }
    public get videoConfig(): VideoConfig | undefined {
        return this['video_config'];
    }
    public withOutputUrls(outputUrls: Array<string>): CreateSmartLiveRoomReq {
        this['output_urls'] = outputUrls;
        return this;
    }
    public set outputUrls(outputUrls: Array<string>  | undefined) {
        this['output_urls'] = outputUrls;
    }
    public get outputUrls(): Array<string> | undefined {
        return this['output_urls'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSmartLiveRoomReqRoomTypeEnum {
    NORMAL = 'NORMAL',
    TEMP = 'TEMP'
}
