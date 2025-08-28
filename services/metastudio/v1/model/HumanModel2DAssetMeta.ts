import { ActionTagInfo } from './ActionTagInfo';


export class HumanModel2DAssetMeta {
    private 'is_action_editable'?: boolean;
    private 'is_live_copy'?: boolean;
    private 'is_real_background'?: boolean;
    private 'support_live'?: boolean;
    private 'model_version'?: HumanModel2DAssetMetaModelVersionEnum | string;
    private 'model_resolution'?: string;
    private 'device_names'?: Array<string>;
    private 'is_with_action_library'?: boolean;
    private 'action_tag_map'?: Array<ActionTagInfo>;
    private 'is_flexus'?: boolean;
    private 'voice_asset_id'?: string;
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
    public withIsLiveCopy(isLiveCopy: boolean): HumanModel2DAssetMeta {
        this['is_live_copy'] = isLiveCopy;
        return this;
    }
    public set isLiveCopy(isLiveCopy: boolean  | undefined) {
        this['is_live_copy'] = isLiveCopy;
    }
    public get isLiveCopy(): boolean | undefined {
        return this['is_live_copy'];
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
    public withModelResolution(modelResolution: string): HumanModel2DAssetMeta {
        this['model_resolution'] = modelResolution;
        return this;
    }
    public set modelResolution(modelResolution: string  | undefined) {
        this['model_resolution'] = modelResolution;
    }
    public get modelResolution(): string | undefined {
        return this['model_resolution'];
    }
    public withDeviceNames(deviceNames: Array<string>): HumanModel2DAssetMeta {
        this['device_names'] = deviceNames;
        return this;
    }
    public set deviceNames(deviceNames: Array<string>  | undefined) {
        this['device_names'] = deviceNames;
    }
    public get deviceNames(): Array<string> | undefined {
        return this['device_names'];
    }
    public withIsWithActionLibrary(isWithActionLibrary: boolean): HumanModel2DAssetMeta {
        this['is_with_action_library'] = isWithActionLibrary;
        return this;
    }
    public set isWithActionLibrary(isWithActionLibrary: boolean  | undefined) {
        this['is_with_action_library'] = isWithActionLibrary;
    }
    public get isWithActionLibrary(): boolean | undefined {
        return this['is_with_action_library'];
    }
    public withActionTagMap(actionTagMap: Array<ActionTagInfo>): HumanModel2DAssetMeta {
        this['action_tag_map'] = actionTagMap;
        return this;
    }
    public set actionTagMap(actionTagMap: Array<ActionTagInfo>  | undefined) {
        this['action_tag_map'] = actionTagMap;
    }
    public get actionTagMap(): Array<ActionTagInfo> | undefined {
        return this['action_tag_map'];
    }
    public withIsFlexus(isFlexus: boolean): HumanModel2DAssetMeta {
        this['is_flexus'] = isFlexus;
        return this;
    }
    public set isFlexus(isFlexus: boolean  | undefined) {
        this['is_flexus'] = isFlexus;
    }
    public get isFlexus(): boolean | undefined {
        return this['is_flexus'];
    }
    public withVoiceAssetId(voiceAssetId: string): HumanModel2DAssetMeta {
        this['voice_asset_id'] = voiceAssetId;
        return this;
    }
    public set voiceAssetId(voiceAssetId: string  | undefined) {
        this['voice_asset_id'] = voiceAssetId;
    }
    public get voiceAssetId(): string | undefined {
        return this['voice_asset_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HumanModel2DAssetMetaModelVersionEnum {
    V2 = 'V2',
    V3 = 'V3',
    V3_2 = 'V3_2',
    V3_3 = 'V3_3'
}
