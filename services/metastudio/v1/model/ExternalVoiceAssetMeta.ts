

export class ExternalVoiceAssetMeta {
    public provider?: ExternalVoiceAssetMetaProviderEnum | string;
    public constructor(provider?: string) { 
        this['provider'] = provider;
    }
    public withProvider(provider: ExternalVoiceAssetMetaProviderEnum | string): ExternalVoiceAssetMeta {
        this['provider'] = provider;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExternalVoiceAssetMetaProviderEnum {
    XIMALAYA = 'XIMALAYA',
    HUAWEI_EI = 'HUAWEI_EI',
    MOBVOI = 'MOBVOI',
    AUDIOX = 'AUDIOX',
    SINOVOICE = 'SINOVOICE',
    DATABAKER = 'DATABAKER',
    AISPEECH = 'AISPEECH'
}
