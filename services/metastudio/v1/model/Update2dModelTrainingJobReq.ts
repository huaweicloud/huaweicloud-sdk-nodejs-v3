import { ActionBasicSampleInfo } from './ActionBasicSampleInfo';
import { SupportedServiceEnum } from './SupportedServiceEnum';


export class Update2dModelTrainingJobReq {
    public name?: string;
    public contact?: string;
    private 'command_message'?: Update2dModelTrainingJobReqCommandMessageEnum | string;
    private 'video_multipart_count'?: number;
    private 'action_video_multipart_count'?: number;
    private 'is_background_replacement'?: boolean;
    private 'batch_name'?: string;
    public tags?: Array<string>;
    private 'samples_basic_info'?: Array<ActionBasicSampleInfo>;
    private 'supported_service'?: Array<SupportedServiceEnum>;
    private 'audio_source_type'?: Update2dModelTrainingJobReqAudioSourceTypeEnum | string;
    public constructor() { 
    }
    public withName(name: string): Update2dModelTrainingJobReq {
        this['name'] = name;
        return this;
    }
    public withContact(contact: string): Update2dModelTrainingJobReq {
        this['contact'] = contact;
        return this;
    }
    public withCommandMessage(commandMessage: Update2dModelTrainingJobReqCommandMessageEnum | string): Update2dModelTrainingJobReq {
        this['command_message'] = commandMessage;
        return this;
    }
    public set commandMessage(commandMessage: Update2dModelTrainingJobReqCommandMessageEnum | string  | undefined) {
        this['command_message'] = commandMessage;
    }
    public get commandMessage(): Update2dModelTrainingJobReqCommandMessageEnum | string | undefined {
        return this['command_message'];
    }
    public withVideoMultipartCount(videoMultipartCount: number): Update2dModelTrainingJobReq {
        this['video_multipart_count'] = videoMultipartCount;
        return this;
    }
    public set videoMultipartCount(videoMultipartCount: number  | undefined) {
        this['video_multipart_count'] = videoMultipartCount;
    }
    public get videoMultipartCount(): number | undefined {
        return this['video_multipart_count'];
    }
    public withActionVideoMultipartCount(actionVideoMultipartCount: number): Update2dModelTrainingJobReq {
        this['action_video_multipart_count'] = actionVideoMultipartCount;
        return this;
    }
    public set actionVideoMultipartCount(actionVideoMultipartCount: number  | undefined) {
        this['action_video_multipart_count'] = actionVideoMultipartCount;
    }
    public get actionVideoMultipartCount(): number | undefined {
        return this['action_video_multipart_count'];
    }
    public withIsBackgroundReplacement(isBackgroundReplacement: boolean): Update2dModelTrainingJobReq {
        this['is_background_replacement'] = isBackgroundReplacement;
        return this;
    }
    public set isBackgroundReplacement(isBackgroundReplacement: boolean  | undefined) {
        this['is_background_replacement'] = isBackgroundReplacement;
    }
    public get isBackgroundReplacement(): boolean | undefined {
        return this['is_background_replacement'];
    }
    public withBatchName(batchName: string): Update2dModelTrainingJobReq {
        this['batch_name'] = batchName;
        return this;
    }
    public set batchName(batchName: string  | undefined) {
        this['batch_name'] = batchName;
    }
    public get batchName(): string | undefined {
        return this['batch_name'];
    }
    public withTags(tags: Array<string>): Update2dModelTrainingJobReq {
        this['tags'] = tags;
        return this;
    }
    public withSamplesBasicInfo(samplesBasicInfo: Array<ActionBasicSampleInfo>): Update2dModelTrainingJobReq {
        this['samples_basic_info'] = samplesBasicInfo;
        return this;
    }
    public set samplesBasicInfo(samplesBasicInfo: Array<ActionBasicSampleInfo>  | undefined) {
        this['samples_basic_info'] = samplesBasicInfo;
    }
    public get samplesBasicInfo(): Array<ActionBasicSampleInfo> | undefined {
        return this['samples_basic_info'];
    }
    public withSupportedService(supportedService: Array<SupportedServiceEnum>): Update2dModelTrainingJobReq {
        this['supported_service'] = supportedService;
        return this;
    }
    public set supportedService(supportedService: Array<SupportedServiceEnum>  | undefined) {
        this['supported_service'] = supportedService;
    }
    public get supportedService(): Array<SupportedServiceEnum> | undefined {
        return this['supported_service'];
    }
    public withAudioSourceType(audioSourceType: Update2dModelTrainingJobReqAudioSourceTypeEnum | string): Update2dModelTrainingJobReq {
        this['audio_source_type'] = audioSourceType;
        return this;
    }
    public set audioSourceType(audioSourceType: Update2dModelTrainingJobReqAudioSourceTypeEnum | string  | undefined) {
        this['audio_source_type'] = audioSourceType;
    }
    public get audioSourceType(): Update2dModelTrainingJobReqAudioSourceTypeEnum | string | undefined {
        return this['audio_source_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum Update2dModelTrainingJobReqCommandMessageEnum {
    UPDATE_VIDEO = 'UPDATE_VIDEO',
    UPLOAD_VIDEO = 'UPLOAD_VIDEO',
    CONFIRM_ACTION_VIDEO = 'CONFIRM_ACTION_VIDEO',
    GET_ACTION_VIDEO_MULTIPART = 'GET_ACTION_VIDEO_MULTIPART'
}
/**
    * @export
    * @enum {string}
    */
export enum Update2dModelTrainingJobReqAudioSourceTypeEnum {
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO'
}
