

export class CreateTTSAReq {
    private 'voice_asset_id'?: string;
    private 'script_type'?: CreateTTSAReqScriptTypeEnum | string;
    public text?: string;
    private 'audio_file_download_url'?: string;
    public speed?: number;
    public pitch?: number;
    public volume?: number;
    public emotion?: string;
    private 'style_id'?: string;
    private 'camera_position'?: string;
    private 'job_type'?: CreateTTSAReqJobTypeEnum | string;
    public constructor(voiceAssetId?: string, styleId?: string) { 
        this['voice_asset_id'] = voiceAssetId;
        this['style_id'] = styleId;
    }
    public withVoiceAssetId(voiceAssetId: string): CreateTTSAReq {
        this['voice_asset_id'] = voiceAssetId;
        return this;
    }
    public set voiceAssetId(voiceAssetId: string  | undefined) {
        this['voice_asset_id'] = voiceAssetId;
    }
    public get voiceAssetId(): string | undefined {
        return this['voice_asset_id'];
    }
    public withScriptType(scriptType: CreateTTSAReqScriptTypeEnum | string): CreateTTSAReq {
        this['script_type'] = scriptType;
        return this;
    }
    public set scriptType(scriptType: CreateTTSAReqScriptTypeEnum | string  | undefined) {
        this['script_type'] = scriptType;
    }
    public get scriptType(): CreateTTSAReqScriptTypeEnum | string | undefined {
        return this['script_type'];
    }
    public withText(text: string): CreateTTSAReq {
        this['text'] = text;
        return this;
    }
    public withAudioFileDownloadUrl(audioFileDownloadUrl: string): CreateTTSAReq {
        this['audio_file_download_url'] = audioFileDownloadUrl;
        return this;
    }
    public set audioFileDownloadUrl(audioFileDownloadUrl: string  | undefined) {
        this['audio_file_download_url'] = audioFileDownloadUrl;
    }
    public get audioFileDownloadUrl(): string | undefined {
        return this['audio_file_download_url'];
    }
    public withSpeed(speed: number): CreateTTSAReq {
        this['speed'] = speed;
        return this;
    }
    public withPitch(pitch: number): CreateTTSAReq {
        this['pitch'] = pitch;
        return this;
    }
    public withVolume(volume: number): CreateTTSAReq {
        this['volume'] = volume;
        return this;
    }
    public withEmotion(emotion: string): CreateTTSAReq {
        this['emotion'] = emotion;
        return this;
    }
    public withStyleId(styleId: string): CreateTTSAReq {
        this['style_id'] = styleId;
        return this;
    }
    public set styleId(styleId: string  | undefined) {
        this['style_id'] = styleId;
    }
    public get styleId(): string | undefined {
        return this['style_id'];
    }
    public withCameraPosition(cameraPosition: string): CreateTTSAReq {
        this['camera_position'] = cameraPosition;
        return this;
    }
    public set cameraPosition(cameraPosition: string  | undefined) {
        this['camera_position'] = cameraPosition;
    }
    public get cameraPosition(): string | undefined {
        return this['camera_position'];
    }
    public withJobType(jobType: CreateTTSAReqJobTypeEnum | string): CreateTTSAReq {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: CreateTTSAReqJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): CreateTTSAReqJobTypeEnum | string | undefined {
        return this['job_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTTSAReqScriptTypeEnum {
    TEXT = 'TEXT',
    AUDIO = 'AUDIO'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateTTSAReqJobTypeEnum {
    REAL_JOB = 'REAL_JOB',
    UNREAL_JOB = 'UNREAL_JOB'
}
