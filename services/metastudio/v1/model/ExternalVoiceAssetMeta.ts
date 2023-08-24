import { HuaweiEIVoiceAssetMeta } from './HuaweiEIVoiceAssetMeta';
import { XimalayaVoiceAssetMeta } from './XimalayaVoiceAssetMeta';


export class ExternalVoiceAssetMeta {
    public provider?: ExternalVoiceAssetMetaProviderEnum | string;
    private 'ximalaya_voice_meta'?: XimalayaVoiceAssetMeta;
    private 'huawei_ei_voice_meta'?: HuaweiEIVoiceAssetMeta;
    public constructor(provider?: string) { 
        this['provider'] = provider;
    }
    public withProvider(provider: ExternalVoiceAssetMetaProviderEnum | string): ExternalVoiceAssetMeta {
        this['provider'] = provider;
        return this;
    }
    public withXimalayaVoiceMeta(ximalayaVoiceMeta: XimalayaVoiceAssetMeta): ExternalVoiceAssetMeta {
        this['ximalaya_voice_meta'] = ximalayaVoiceMeta;
        return this;
    }
    public set ximalayaVoiceMeta(ximalayaVoiceMeta: XimalayaVoiceAssetMeta  | undefined) {
        this['ximalaya_voice_meta'] = ximalayaVoiceMeta;
    }
    public get ximalayaVoiceMeta(): XimalayaVoiceAssetMeta | undefined {
        return this['ximalaya_voice_meta'];
    }
    public withHuaweiEiVoiceMeta(huaweiEiVoiceMeta: HuaweiEIVoiceAssetMeta): ExternalVoiceAssetMeta {
        this['huawei_ei_voice_meta'] = huaweiEiVoiceMeta;
        return this;
    }
    public set huaweiEiVoiceMeta(huaweiEiVoiceMeta: HuaweiEIVoiceAssetMeta  | undefined) {
        this['huawei_ei_voice_meta'] = huaweiEiVoiceMeta;
    }
    public get huaweiEiVoiceMeta(): HuaweiEIVoiceAssetMeta | undefined {
        return this['huawei_ei_voice_meta'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExternalVoiceAssetMetaProviderEnum {
    XIMALAYA = 'XIMALAYA',
    HUAWEI_EI = 'HUAWEI_EI'
}
