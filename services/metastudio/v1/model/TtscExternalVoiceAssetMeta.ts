import { TtscAudioxVoiceAssetMeta } from './TtscAudioxVoiceAssetMeta';
import { TtscMobvoiVoiceAssetMeta } from './TtscMobvoiVoiceAssetMeta';


export class TtscExternalVoiceAssetMeta {
    public provider?: string;
    private 'mobvoi_voice_meta'?: TtscMobvoiVoiceAssetMeta;
    private 'audiox_voice_meta'?: TtscAudioxVoiceAssetMeta;
    public constructor(provider?: string) { 
        this['provider'] = provider;
    }
    public withProvider(provider: string): TtscExternalVoiceAssetMeta {
        this['provider'] = provider;
        return this;
    }
    public withMobvoiVoiceMeta(mobvoiVoiceMeta: TtscMobvoiVoiceAssetMeta): TtscExternalVoiceAssetMeta {
        this['mobvoi_voice_meta'] = mobvoiVoiceMeta;
        return this;
    }
    public set mobvoiVoiceMeta(mobvoiVoiceMeta: TtscMobvoiVoiceAssetMeta  | undefined) {
        this['mobvoi_voice_meta'] = mobvoiVoiceMeta;
    }
    public get mobvoiVoiceMeta(): TtscMobvoiVoiceAssetMeta | undefined {
        return this['mobvoi_voice_meta'];
    }
    public withAudioxVoiceMeta(audioxVoiceMeta: TtscAudioxVoiceAssetMeta): TtscExternalVoiceAssetMeta {
        this['audiox_voice_meta'] = audioxVoiceMeta;
        return this;
    }
    public set audioxVoiceMeta(audioxVoiceMeta: TtscAudioxVoiceAssetMeta  | undefined) {
        this['audiox_voice_meta'] = audioxVoiceMeta;
    }
    public get audioxVoiceMeta(): TtscAudioxVoiceAssetMeta | undefined {
        return this['audiox_voice_meta'];
    }
}