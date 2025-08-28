import { TtscExternalVoiceAssetMeta } from './TtscExternalVoiceAssetMeta';


export class TtscVoiceModelAssetMeta {
    public sex?: string;
    private 'external_voice_meta'?: TtscExternalVoiceAssetMeta;
    public language?: string;
    private 'speed_ratio'?: number;
    private 'volume_ratio'?: number;
    public constructor() { 
    }
    public withSex(sex: string): TtscVoiceModelAssetMeta {
        this['sex'] = sex;
        return this;
    }
    public withExternalVoiceMeta(externalVoiceMeta: TtscExternalVoiceAssetMeta): TtscVoiceModelAssetMeta {
        this['external_voice_meta'] = externalVoiceMeta;
        return this;
    }
    public set externalVoiceMeta(externalVoiceMeta: TtscExternalVoiceAssetMeta  | undefined) {
        this['external_voice_meta'] = externalVoiceMeta;
    }
    public get externalVoiceMeta(): TtscExternalVoiceAssetMeta | undefined {
        return this['external_voice_meta'];
    }
    public withLanguage(language: string): TtscVoiceModelAssetMeta {
        this['language'] = language;
        return this;
    }
    public withSpeedRatio(speedRatio: number): TtscVoiceModelAssetMeta {
        this['speed_ratio'] = speedRatio;
        return this;
    }
    public set speedRatio(speedRatio: number  | undefined) {
        this['speed_ratio'] = speedRatio;
    }
    public get speedRatio(): number | undefined {
        return this['speed_ratio'];
    }
    public withVolumeRatio(volumeRatio: number): TtscVoiceModelAssetMeta {
        this['volume_ratio'] = volumeRatio;
        return this;
    }
    public set volumeRatio(volumeRatio: number  | undefined) {
        this['volume_ratio'] = volumeRatio;
    }
    public get volumeRatio(): number | undefined {
        return this['volume_ratio'];
    }
}