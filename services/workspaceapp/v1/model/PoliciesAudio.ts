

export class PoliciesAudio {
    private 'audio_redirection_enable'?: boolean;
    private 'play_redirection_enable'?: boolean;
    private 'play_classification'?: PoliciesAudioPlayClassificationEnum | string;
    private 'record_redirection_enable'?: boolean;
    private 'record_classification'?: PoliciesAudioRecordClassificationEnum | string;
    public constructor() { 
    }
    public withAudioRedirectionEnable(audioRedirectionEnable: boolean): PoliciesAudio {
        this['audio_redirection_enable'] = audioRedirectionEnable;
        return this;
    }
    public set audioRedirectionEnable(audioRedirectionEnable: boolean  | undefined) {
        this['audio_redirection_enable'] = audioRedirectionEnable;
    }
    public get audioRedirectionEnable(): boolean | undefined {
        return this['audio_redirection_enable'];
    }
    public withPlayRedirectionEnable(playRedirectionEnable: boolean): PoliciesAudio {
        this['play_redirection_enable'] = playRedirectionEnable;
        return this;
    }
    public set playRedirectionEnable(playRedirectionEnable: boolean  | undefined) {
        this['play_redirection_enable'] = playRedirectionEnable;
    }
    public get playRedirectionEnable(): boolean | undefined {
        return this['play_redirection_enable'];
    }
    public withPlayClassification(playClassification: PoliciesAudioPlayClassificationEnum | string): PoliciesAudio {
        this['play_classification'] = playClassification;
        return this;
    }
    public set playClassification(playClassification: PoliciesAudioPlayClassificationEnum | string  | undefined) {
        this['play_classification'] = playClassification;
    }
    public get playClassification(): PoliciesAudioPlayClassificationEnum | string | undefined {
        return this['play_classification'];
    }
    public withRecordRedirectionEnable(recordRedirectionEnable: boolean): PoliciesAudio {
        this['record_redirection_enable'] = recordRedirectionEnable;
        return this;
    }
    public set recordRedirectionEnable(recordRedirectionEnable: boolean  | undefined) {
        this['record_redirection_enable'] = recordRedirectionEnable;
    }
    public get recordRedirectionEnable(): boolean | undefined {
        return this['record_redirection_enable'];
    }
    public withRecordClassification(recordClassification: PoliciesAudioRecordClassificationEnum | string): PoliciesAudio {
        this['record_classification'] = recordClassification;
        return this;
    }
    public set recordClassification(recordClassification: PoliciesAudioRecordClassificationEnum | string  | undefined) {
        this['record_classification'] = recordClassification;
    }
    public get recordClassification(): PoliciesAudioRecordClassificationEnum | string | undefined {
        return this['record_classification'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PoliciesAudioPlayClassificationEnum {
    LOSSLESS = 'LossLess',
    SPEECH_CALL = 'Speech Call',
    MUSIC_PLAY = 'Music Play',
    AUTOMATIC_IDENTIFICATION = 'Automatic Identification'
}
/**
    * @export
    * @enum {string}
    */
export enum PoliciesAudioRecordClassificationEnum {
    LOSSLESS = 'LossLess',
    SPEECH_CALL = 'Speech Call',
    MUSIC_RECORD = 'Music Record',
    AUTOMATIC_IDENTIFICATION = 'Automatic Identification'
}
