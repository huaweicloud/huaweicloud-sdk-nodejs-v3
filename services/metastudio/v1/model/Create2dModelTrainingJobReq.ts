import { SupportedServiceEnum } from './SupportedServiceEnum';
import { VoiceProperties } from './VoiceProperties';


export class Create2dModelTrainingJobReq {
    public name?: string;
    public contact?: string;
    private 'command_message'?: Create2dModelTrainingJobReqCommandMessageEnum | string;
    private 'video_multipart_count'?: number;
    private 'action_video_multipart_count'?: number;
    private 'is_background_replacement'?: boolean;
    private 'batch_name'?: string;
    public tags?: Array<string>;
    private 'model_version'?: Create2dModelTrainingJobReqModelVersionEnum | string;
    private 'is_flexus'?: boolean;
    private 'audio_source_type'?: Create2dModelTrainingJobReqAudioSourceTypeEnum | string;
    private 'voice_properties'?: VoiceProperties;
    private 'supported_service'?: Array<SupportedServiceEnum>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): Create2dModelTrainingJobReq {
        this['name'] = name;
        return this;
    }
    public withContact(contact: string): Create2dModelTrainingJobReq {
        this['contact'] = contact;
        return this;
    }
    public withCommandMessage(commandMessage: Create2dModelTrainingJobReqCommandMessageEnum | string): Create2dModelTrainingJobReq {
        this['command_message'] = commandMessage;
        return this;
    }
    public set commandMessage(commandMessage: Create2dModelTrainingJobReqCommandMessageEnum | string  | undefined) {
        this['command_message'] = commandMessage;
    }
    public get commandMessage(): Create2dModelTrainingJobReqCommandMessageEnum | string | undefined {
        return this['command_message'];
    }
    public withVideoMultipartCount(videoMultipartCount: number): Create2dModelTrainingJobReq {
        this['video_multipart_count'] = videoMultipartCount;
        return this;
    }
    public set videoMultipartCount(videoMultipartCount: number  | undefined) {
        this['video_multipart_count'] = videoMultipartCount;
    }
    public get videoMultipartCount(): number | undefined {
        return this['video_multipart_count'];
    }
    public withActionVideoMultipartCount(actionVideoMultipartCount: number): Create2dModelTrainingJobReq {
        this['action_video_multipart_count'] = actionVideoMultipartCount;
        return this;
    }
    public set actionVideoMultipartCount(actionVideoMultipartCount: number  | undefined) {
        this['action_video_multipart_count'] = actionVideoMultipartCount;
    }
    public get actionVideoMultipartCount(): number | undefined {
        return this['action_video_multipart_count'];
    }
    public withIsBackgroundReplacement(isBackgroundReplacement: boolean): Create2dModelTrainingJobReq {
        this['is_background_replacement'] = isBackgroundReplacement;
        return this;
    }
    public set isBackgroundReplacement(isBackgroundReplacement: boolean  | undefined) {
        this['is_background_replacement'] = isBackgroundReplacement;
    }
    public get isBackgroundReplacement(): boolean | undefined {
        return this['is_background_replacement'];
    }
    public withBatchName(batchName: string): Create2dModelTrainingJobReq {
        this['batch_name'] = batchName;
        return this;
    }
    public set batchName(batchName: string  | undefined) {
        this['batch_name'] = batchName;
    }
    public get batchName(): string | undefined {
        return this['batch_name'];
    }
    public withTags(tags: Array<string>): Create2dModelTrainingJobReq {
        this['tags'] = tags;
        return this;
    }
    public withModelVersion(modelVersion: Create2dModelTrainingJobReqModelVersionEnum | string): Create2dModelTrainingJobReq {
        this['model_version'] = modelVersion;
        return this;
    }
    public set modelVersion(modelVersion: Create2dModelTrainingJobReqModelVersionEnum | string  | undefined) {
        this['model_version'] = modelVersion;
    }
    public get modelVersion(): Create2dModelTrainingJobReqModelVersionEnum | string | undefined {
        return this['model_version'];
    }
    public withIsFlexus(isFlexus: boolean): Create2dModelTrainingJobReq {
        this['is_flexus'] = isFlexus;
        return this;
    }
    public set isFlexus(isFlexus: boolean  | undefined) {
        this['is_flexus'] = isFlexus;
    }
    public get isFlexus(): boolean | undefined {
        return this['is_flexus'];
    }
    public withAudioSourceType(audioSourceType: Create2dModelTrainingJobReqAudioSourceTypeEnum | string): Create2dModelTrainingJobReq {
        this['audio_source_type'] = audioSourceType;
        return this;
    }
    public set audioSourceType(audioSourceType: Create2dModelTrainingJobReqAudioSourceTypeEnum | string  | undefined) {
        this['audio_source_type'] = audioSourceType;
    }
    public get audioSourceType(): Create2dModelTrainingJobReqAudioSourceTypeEnum | string | undefined {
        return this['audio_source_type'];
    }
    public withVoiceProperties(voiceProperties: VoiceProperties): Create2dModelTrainingJobReq {
        this['voice_properties'] = voiceProperties;
        return this;
    }
    public set voiceProperties(voiceProperties: VoiceProperties  | undefined) {
        this['voice_properties'] = voiceProperties;
    }
    public get voiceProperties(): VoiceProperties | undefined {
        return this['voice_properties'];
    }
    public withSupportedService(supportedService: Array<SupportedServiceEnum>): Create2dModelTrainingJobReq {
        this['supported_service'] = supportedService;
        return this;
    }
    public set supportedService(supportedService: Array<SupportedServiceEnum>  | undefined) {
        this['supported_service'] = supportedService;
    }
    public get supportedService(): Array<SupportedServiceEnum> | undefined {
        return this['supported_service'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum Create2dModelTrainingJobReqCommandMessageEnum {
    UPDATE_VIDEO = 'UPDATE_VIDEO',
    UPLOAD_VIDEO = 'UPLOAD_VIDEO',
    CONFIRM_ACTION_VIDEO = 'CONFIRM_ACTION_VIDEO',
    GET_ACTION_VIDEO_MULTIPART = 'GET_ACTION_VIDEO_MULTIPART'
}
/**
    * @export
    * @enum {string}
    */
export enum Create2dModelTrainingJobReqModelVersionEnum {
    V2 = 'V2',
    V3 = 'V3',
    V3_2 = 'V3.2'
}
/**
    * @export
    * @enum {string}
    */
export enum Create2dModelTrainingJobReqAudioSourceTypeEnum {
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO'
}
