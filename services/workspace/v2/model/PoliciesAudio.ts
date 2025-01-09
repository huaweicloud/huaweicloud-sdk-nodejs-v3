

export class PoliciesAudio {
    private 'audio_redirection_enable'?: boolean;
    private 'play_volume'?: string;
    private 'play_volume_ratio'?: PoliciesAudioPlayVolumeRatioEnum | string;
    private 'record_volume'?: string;
    private 'record_volume_ratio'?: PoliciesAudioRecordVolumeRatioEnum | string;
    private 'audio_transmission_mode'?: PoliciesAudioAudioTransmissionModeEnum | string;
    private 'play_redirection_enable'?: boolean;
    private 'play_classification'?: PoliciesAudioPlayClassificationEnum | string;
    private 'play_quality'?: PoliciesAudioPlayQualityEnum | string;
    private 'play_denoising'?: string;
    private 'play_agc'?: string;
    private 'play_crc'?: PoliciesAudioPlayCrcEnum | string;
    private 'play_device_mode'?: PoliciesAudioPlayDeviceModeEnum | string;
    private 'play_delay_threshold'?: string;
    private 'play_amplitude_threshold'?: string;
    private 'play_prefill_data'?: string;
    private 'record_redirection_enable'?: boolean;
    private 'record_classification'?: PoliciesAudioRecordClassificationEnum | string;
    private 'record_quality'?: PoliciesAudioRecordQualityEnum | string;
    private 'record_denoising'?: string;
    private 'record_agc'?: string;
    private 'record_crc'?: PoliciesAudioRecordCrcEnum | string;
    private 'record_device_mode'?: PoliciesAudioRecordDeviceModeEnum | string;
    private 'record_delay_threshold'?: string;
    private 'record_amplitude_threshold'?: string;
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
    public withPlayVolume(playVolume: string): PoliciesAudio {
        this['play_volume'] = playVolume;
        return this;
    }
    public set playVolume(playVolume: string  | undefined) {
        this['play_volume'] = playVolume;
    }
    public get playVolume(): string | undefined {
        return this['play_volume'];
    }
    public withPlayVolumeRatio(playVolumeRatio: PoliciesAudioPlayVolumeRatioEnum | string): PoliciesAudio {
        this['play_volume_ratio'] = playVolumeRatio;
        return this;
    }
    public set playVolumeRatio(playVolumeRatio: PoliciesAudioPlayVolumeRatioEnum | string  | undefined) {
        this['play_volume_ratio'] = playVolumeRatio;
    }
    public get playVolumeRatio(): PoliciesAudioPlayVolumeRatioEnum | string | undefined {
        return this['play_volume_ratio'];
    }
    public withRecordVolume(recordVolume: string): PoliciesAudio {
        this['record_volume'] = recordVolume;
        return this;
    }
    public set recordVolume(recordVolume: string  | undefined) {
        this['record_volume'] = recordVolume;
    }
    public get recordVolume(): string | undefined {
        return this['record_volume'];
    }
    public withRecordVolumeRatio(recordVolumeRatio: PoliciesAudioRecordVolumeRatioEnum | string): PoliciesAudio {
        this['record_volume_ratio'] = recordVolumeRatio;
        return this;
    }
    public set recordVolumeRatio(recordVolumeRatio: PoliciesAudioRecordVolumeRatioEnum | string  | undefined) {
        this['record_volume_ratio'] = recordVolumeRatio;
    }
    public get recordVolumeRatio(): PoliciesAudioRecordVolumeRatioEnum | string | undefined {
        return this['record_volume_ratio'];
    }
    public withAudioTransmissionMode(audioTransmissionMode: PoliciesAudioAudioTransmissionModeEnum | string): PoliciesAudio {
        this['audio_transmission_mode'] = audioTransmissionMode;
        return this;
    }
    public set audioTransmissionMode(audioTransmissionMode: PoliciesAudioAudioTransmissionModeEnum | string  | undefined) {
        this['audio_transmission_mode'] = audioTransmissionMode;
    }
    public get audioTransmissionMode(): PoliciesAudioAudioTransmissionModeEnum | string | undefined {
        return this['audio_transmission_mode'];
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
    public withPlayQuality(playQuality: PoliciesAudioPlayQualityEnum | string): PoliciesAudio {
        this['play_quality'] = playQuality;
        return this;
    }
    public set playQuality(playQuality: PoliciesAudioPlayQualityEnum | string  | undefined) {
        this['play_quality'] = playQuality;
    }
    public get playQuality(): PoliciesAudioPlayQualityEnum | string | undefined {
        return this['play_quality'];
    }
    public withPlayDenoising(playDenoising: string): PoliciesAudio {
        this['play_denoising'] = playDenoising;
        return this;
    }
    public set playDenoising(playDenoising: string  | undefined) {
        this['play_denoising'] = playDenoising;
    }
    public get playDenoising(): string | undefined {
        return this['play_denoising'];
    }
    public withPlayAgc(playAgc: string): PoliciesAudio {
        this['play_agc'] = playAgc;
        return this;
    }
    public set playAgc(playAgc: string  | undefined) {
        this['play_agc'] = playAgc;
    }
    public get playAgc(): string | undefined {
        return this['play_agc'];
    }
    public withPlayCrc(playCrc: PoliciesAudioPlayCrcEnum | string): PoliciesAudio {
        this['play_crc'] = playCrc;
        return this;
    }
    public set playCrc(playCrc: PoliciesAudioPlayCrcEnum | string  | undefined) {
        this['play_crc'] = playCrc;
    }
    public get playCrc(): PoliciesAudioPlayCrcEnum | string | undefined {
        return this['play_crc'];
    }
    public withPlayDeviceMode(playDeviceMode: PoliciesAudioPlayDeviceModeEnum | string): PoliciesAudio {
        this['play_device_mode'] = playDeviceMode;
        return this;
    }
    public set playDeviceMode(playDeviceMode: PoliciesAudioPlayDeviceModeEnum | string  | undefined) {
        this['play_device_mode'] = playDeviceMode;
    }
    public get playDeviceMode(): PoliciesAudioPlayDeviceModeEnum | string | undefined {
        return this['play_device_mode'];
    }
    public withPlayDelayThreshold(playDelayThreshold: string): PoliciesAudio {
        this['play_delay_threshold'] = playDelayThreshold;
        return this;
    }
    public set playDelayThreshold(playDelayThreshold: string  | undefined) {
        this['play_delay_threshold'] = playDelayThreshold;
    }
    public get playDelayThreshold(): string | undefined {
        return this['play_delay_threshold'];
    }
    public withPlayAmplitudeThreshold(playAmplitudeThreshold: string): PoliciesAudio {
        this['play_amplitude_threshold'] = playAmplitudeThreshold;
        return this;
    }
    public set playAmplitudeThreshold(playAmplitudeThreshold: string  | undefined) {
        this['play_amplitude_threshold'] = playAmplitudeThreshold;
    }
    public get playAmplitudeThreshold(): string | undefined {
        return this['play_amplitude_threshold'];
    }
    public withPlayPrefillData(playPrefillData: string): PoliciesAudio {
        this['play_prefill_data'] = playPrefillData;
        return this;
    }
    public set playPrefillData(playPrefillData: string  | undefined) {
        this['play_prefill_data'] = playPrefillData;
    }
    public get playPrefillData(): string | undefined {
        return this['play_prefill_data'];
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
    public withRecordQuality(recordQuality: PoliciesAudioRecordQualityEnum | string): PoliciesAudio {
        this['record_quality'] = recordQuality;
        return this;
    }
    public set recordQuality(recordQuality: PoliciesAudioRecordQualityEnum | string  | undefined) {
        this['record_quality'] = recordQuality;
    }
    public get recordQuality(): PoliciesAudioRecordQualityEnum | string | undefined {
        return this['record_quality'];
    }
    public withRecordDenoising(recordDenoising: string): PoliciesAudio {
        this['record_denoising'] = recordDenoising;
        return this;
    }
    public set recordDenoising(recordDenoising: string  | undefined) {
        this['record_denoising'] = recordDenoising;
    }
    public get recordDenoising(): string | undefined {
        return this['record_denoising'];
    }
    public withRecordAgc(recordAgc: string): PoliciesAudio {
        this['record_agc'] = recordAgc;
        return this;
    }
    public set recordAgc(recordAgc: string  | undefined) {
        this['record_agc'] = recordAgc;
    }
    public get recordAgc(): string | undefined {
        return this['record_agc'];
    }
    public withRecordCrc(recordCrc: PoliciesAudioRecordCrcEnum | string): PoliciesAudio {
        this['record_crc'] = recordCrc;
        return this;
    }
    public set recordCrc(recordCrc: PoliciesAudioRecordCrcEnum | string  | undefined) {
        this['record_crc'] = recordCrc;
    }
    public get recordCrc(): PoliciesAudioRecordCrcEnum | string | undefined {
        return this['record_crc'];
    }
    public withRecordDeviceMode(recordDeviceMode: PoliciesAudioRecordDeviceModeEnum | string): PoliciesAudio {
        this['record_device_mode'] = recordDeviceMode;
        return this;
    }
    public set recordDeviceMode(recordDeviceMode: PoliciesAudioRecordDeviceModeEnum | string  | undefined) {
        this['record_device_mode'] = recordDeviceMode;
    }
    public get recordDeviceMode(): PoliciesAudioRecordDeviceModeEnum | string | undefined {
        return this['record_device_mode'];
    }
    public withRecordDelayThreshold(recordDelayThreshold: string): PoliciesAudio {
        this['record_delay_threshold'] = recordDelayThreshold;
        return this;
    }
    public set recordDelayThreshold(recordDelayThreshold: string  | undefined) {
        this['record_delay_threshold'] = recordDelayThreshold;
    }
    public get recordDelayThreshold(): string | undefined {
        return this['record_delay_threshold'];
    }
    public withRecordAmplitudeThreshold(recordAmplitudeThreshold: string): PoliciesAudio {
        this['record_amplitude_threshold'] = recordAmplitudeThreshold;
        return this;
    }
    public set recordAmplitudeThreshold(recordAmplitudeThreshold: string  | undefined) {
        this['record_amplitude_threshold'] = recordAmplitudeThreshold;
    }
    public get recordAmplitudeThreshold(): string | undefined {
        return this['record_amplitude_threshold'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PoliciesAudioPlayVolumeRatioEnum {
    DO_NOT_SET_VOLUME_RATIO = 'Do Not Set Volume Ratio',
    LOW = 'Low',
    MIDDLE = 'Middle',
    HIGH = 'High'
}
/**
    * @export
    * @enum {string}
    */
export enum PoliciesAudioRecordVolumeRatioEnum {
    DO_NOT_SET_VOLUME_RATIO = 'Do Not Set Volume Ratio',
    LOW = 'Low',
    MIDDLE = 'Middle',
    HIGH = 'High'
}
/**
    * @export
    * @enum {string}
    */
export enum PoliciesAudioAudioTransmissionModeEnum {
    REAL_TIME_TRANSMISSION = 'Real Time Transmission',
    RELIABLE_TRANSMISSION = 'Reliable Transmission'
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
export enum PoliciesAudioPlayQualityEnum {
    LOW = 'Low',
    MIDDLE = 'Middle',
    HIGH = 'High'
}
/**
    * @export
    * @enum {string}
    */
export enum PoliciesAudioPlayCrcEnum {
    DISABLE_CRC = 'Disable CRC',
    ENABLE_CRC = 'Enable CRC'
}
/**
    * @export
    * @enum {string}
    */
export enum PoliciesAudioPlayDeviceModeEnum {
    PLAY_DEVICE_IN_SHARED_MODE = 'Play Device In Shared Mode',
    PLAY_DEVICE_IN_EXCLUSIVE_MODE = 'Play Device In Exclusive Mode'
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
/**
    * @export
    * @enum {string}
    */
export enum PoliciesAudioRecordQualityEnum {
    LOW = 'Low',
    MIDDLE = 'Middle',
    HIGH = 'High'
}
/**
    * @export
    * @enum {string}
    */
export enum PoliciesAudioRecordCrcEnum {
    DISABLE_CRC = 'Disable CRC',
    ENABLE_CRC = 'Enable CRC'
}
/**
    * @export
    * @enum {string}
    */
export enum PoliciesAudioRecordDeviceModeEnum {
    RECORD_DEVICE_IN_SHARED_MODE = 'Record Device In Shared Mode',
    RECORD_DEVICE_IN_EXCLUSIVE_MODE = 'Record Device In Exclusive Mode'
}
