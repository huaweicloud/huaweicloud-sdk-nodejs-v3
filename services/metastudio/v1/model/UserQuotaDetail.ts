

export class UserQuotaDetail {
    private 'modeling_count_2d_model'?: number;
    private 'modeling_count_2d_model_flexus'?: number;
    private 'video_time_2d_model'?: number;
    private 'video_time_flexus_2d_model'?: number;
    private 'voice_clone_basic'?: number;
    private 'voice_clone_middle'?: number;
    private 'voice_clone_advance'?: number;
    private 'voice_clone_flexus'?: number;
    public constructor() { 
    }
    public withModelingCount2dModel(modelingCount2dModel: number): UserQuotaDetail {
        this['modeling_count_2d_model'] = modelingCount2dModel;
        return this;
    }
    public set modelingCount2dModel(modelingCount2dModel: number  | undefined) {
        this['modeling_count_2d_model'] = modelingCount2dModel;
    }
    public get modelingCount2dModel(): number | undefined {
        return this['modeling_count_2d_model'];
    }
    public withModelingCount2dModelFlexus(modelingCount2dModelFlexus: number): UserQuotaDetail {
        this['modeling_count_2d_model_flexus'] = modelingCount2dModelFlexus;
        return this;
    }
    public set modelingCount2dModelFlexus(modelingCount2dModelFlexus: number  | undefined) {
        this['modeling_count_2d_model_flexus'] = modelingCount2dModelFlexus;
    }
    public get modelingCount2dModelFlexus(): number | undefined {
        return this['modeling_count_2d_model_flexus'];
    }
    public withVideoTime2dModel(videoTime2dModel: number): UserQuotaDetail {
        this['video_time_2d_model'] = videoTime2dModel;
        return this;
    }
    public set videoTime2dModel(videoTime2dModel: number  | undefined) {
        this['video_time_2d_model'] = videoTime2dModel;
    }
    public get videoTime2dModel(): number | undefined {
        return this['video_time_2d_model'];
    }
    public withVideoTimeFlexus2dModel(videoTimeFlexus2dModel: number): UserQuotaDetail {
        this['video_time_flexus_2d_model'] = videoTimeFlexus2dModel;
        return this;
    }
    public set videoTimeFlexus2dModel(videoTimeFlexus2dModel: number  | undefined) {
        this['video_time_flexus_2d_model'] = videoTimeFlexus2dModel;
    }
    public get videoTimeFlexus2dModel(): number | undefined {
        return this['video_time_flexus_2d_model'];
    }
    public withVoiceCloneBasic(voiceCloneBasic: number): UserQuotaDetail {
        this['voice_clone_basic'] = voiceCloneBasic;
        return this;
    }
    public set voiceCloneBasic(voiceCloneBasic: number  | undefined) {
        this['voice_clone_basic'] = voiceCloneBasic;
    }
    public get voiceCloneBasic(): number | undefined {
        return this['voice_clone_basic'];
    }
    public withVoiceCloneMiddle(voiceCloneMiddle: number): UserQuotaDetail {
        this['voice_clone_middle'] = voiceCloneMiddle;
        return this;
    }
    public set voiceCloneMiddle(voiceCloneMiddle: number  | undefined) {
        this['voice_clone_middle'] = voiceCloneMiddle;
    }
    public get voiceCloneMiddle(): number | undefined {
        return this['voice_clone_middle'];
    }
    public withVoiceCloneAdvance(voiceCloneAdvance: number): UserQuotaDetail {
        this['voice_clone_advance'] = voiceCloneAdvance;
        return this;
    }
    public set voiceCloneAdvance(voiceCloneAdvance: number  | undefined) {
        this['voice_clone_advance'] = voiceCloneAdvance;
    }
    public get voiceCloneAdvance(): number | undefined {
        return this['voice_clone_advance'];
    }
    public withVoiceCloneFlexus(voiceCloneFlexus: number): UserQuotaDetail {
        this['voice_clone_flexus'] = voiceCloneFlexus;
        return this;
    }
    public set voiceCloneFlexus(voiceCloneFlexus: number  | undefined) {
        this['voice_clone_flexus'] = voiceCloneFlexus;
    }
    public get voiceCloneFlexus(): number | undefined {
        return this['voice_clone_flexus'];
    }
}