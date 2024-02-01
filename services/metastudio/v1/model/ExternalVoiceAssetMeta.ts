import { MobvoiVoiceAssetMeta } from './MobvoiVoiceAssetMeta';


export class ExternalVoiceAssetMeta {
    public provider?: ExternalVoiceAssetMetaProviderEnum | string;
    private 'mobvoi_voice_meta'?: MobvoiVoiceAssetMeta;
    public constructor(provider?: string) { 
        this['provider'] = provider;
    }
    public withProvider(provider: ExternalVoiceAssetMetaProviderEnum | string): ExternalVoiceAssetMeta {
        this['provider'] = provider;
        return this;
    }
    public withMobvoiVoiceMeta(mobvoiVoiceMeta: MobvoiVoiceAssetMeta): ExternalVoiceAssetMeta {
        this['mobvoi_voice_meta'] = mobvoiVoiceMeta;
        return this;
    }
    public set mobvoiVoiceMeta(mobvoiVoiceMeta: MobvoiVoiceAssetMeta  | undefined) {
        this['mobvoi_voice_meta'] = mobvoiVoiceMeta;
    }
    public get mobvoiVoiceMeta(): MobvoiVoiceAssetMeta | undefined {
        return this['mobvoi_voice_meta'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExternalVoiceAssetMetaProviderEnum {
    XIMALAYA = 'XIMALAYA',
    HUAWEI_EI = 'HUAWEI_EI',
    MOBVOI = 'MOBVOI'
}
