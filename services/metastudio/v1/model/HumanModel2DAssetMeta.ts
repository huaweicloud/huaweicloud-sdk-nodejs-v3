

export class HumanModel2DAssetMeta {
    private 'is_action_editable'?: boolean;
    private 'is_real_background'?: boolean;
    private 'support_live'?: boolean;
    private 'is_realtime_matting'?: boolean;
    private 'model_version'?: HumanModel2DAssetMetaModelVersionEnum | string;
    public constructor() { 
    }
    public withIsActionEditable(isActionEditable: boolean): HumanModel2DAssetMeta {
        this['is_action_editable'] = isActionEditable;
        return this;
    }
    public set isActionEditable(isActionEditable: boolean  | undefined) {
        this['is_action_editable'] = isActionEditable;
    }
    public get isActionEditable(): boolean | undefined {
        return this['is_action_editable'];
    }
    public withIsRealBackground(isRealBackground: boolean): HumanModel2DAssetMeta {
        this['is_real_background'] = isRealBackground;
        return this;
    }
    public set isRealBackground(isRealBackground: boolean  | undefined) {
        this['is_real_background'] = isRealBackground;
    }
    public get isRealBackground(): boolean | undefined {
        return this['is_real_background'];
    }
    public withSupportLive(supportLive: boolean): HumanModel2DAssetMeta {
        this['support_live'] = supportLive;
        return this;
    }
    public set supportLive(supportLive: boolean  | undefined) {
        this['support_live'] = supportLive;
    }
    public get supportLive(): boolean | undefined {
        return this['support_live'];
    }
    public withIsRealtimeMatting(isRealtimeMatting: boolean): HumanModel2DAssetMeta {
        this['is_realtime_matting'] = isRealtimeMatting;
        return this;
    }
    public set isRealtimeMatting(isRealtimeMatting: boolean  | undefined) {
        this['is_realtime_matting'] = isRealtimeMatting;
    }
    public get isRealtimeMatting(): boolean | undefined {
        return this['is_realtime_matting'];
    }
    public withModelVersion(modelVersion: HumanModel2DAssetMetaModelVersionEnum | string): HumanModel2DAssetMeta {
        this['model_version'] = modelVersion;
        return this;
    }
    public set modelVersion(modelVersion: HumanModel2DAssetMetaModelVersionEnum | string  | undefined) {
        this['model_version'] = modelVersion;
    }
    public get modelVersion(): HumanModel2DAssetMetaModelVersionEnum | string | undefined {
        return this['model_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HumanModel2DAssetMetaModelVersionEnum {
    V2 = 'V2',
    V3 = 'V3'
}
