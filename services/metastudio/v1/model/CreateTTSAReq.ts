

export class CreateTTSAReq {
    private 'voice_asset_id'?: string;
    public text?: string;
    public speed?: number;
    public pitch?: number;
    public volume?: number;
    public emotion?: string;
    private 'parent_job_id'?: string;
    private 'auto_motion'?: boolean;
    private 'style_id'?: string;
    private 'camera_position'?: string;
    public constructor(voiceAssetId?: string, text?: string) { 
        this['voice_asset_id'] = voiceAssetId;
        this['text'] = text;
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
    public withText(text: string): CreateTTSAReq {
        this['text'] = text;
        return this;
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
    public withParentJobId(parentJobId: string): CreateTTSAReq {
        this['parent_job_id'] = parentJobId;
        return this;
    }
    public set parentJobId(parentJobId: string  | undefined) {
        this['parent_job_id'] = parentJobId;
    }
    public get parentJobId(): string | undefined {
        return this['parent_job_id'];
    }
    public withAutoMotion(autoMotion: boolean): CreateTTSAReq {
        this['auto_motion'] = autoMotion;
        return this;
    }
    public set autoMotion(autoMotion: boolean  | undefined) {
        this['auto_motion'] = autoMotion;
    }
    public get autoMotion(): boolean | undefined {
        return this['auto_motion'];
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
}