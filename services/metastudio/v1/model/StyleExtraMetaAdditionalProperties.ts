import { EngineAssetInfo } from './EngineAssetInfo';


export class StyleExtraMetaAdditionalProperties {
    public icon?: string;
    public label?: { [key: string]: string; };
    private 'use_alg_file'?: boolean;
    private 'algorithm_classify_tag'?: { [key: string]: string; };
    private 'model_body_style'?: string;
    private 'mc_asset'?: EngineAssetInfo;
    private 'ue_asset'?: EngineAssetInfo;
    public constructor() { 
    }
    public withIcon(icon: string): StyleExtraMetaAdditionalProperties {
        this['icon'] = icon;
        return this;
    }
    public withLabel(label: { [key: string]: string; }): StyleExtraMetaAdditionalProperties {
        this['label'] = label;
        return this;
    }
    public withUseAlgFile(useAlgFile: boolean): StyleExtraMetaAdditionalProperties {
        this['use_alg_file'] = useAlgFile;
        return this;
    }
    public set useAlgFile(useAlgFile: boolean  | undefined) {
        this['use_alg_file'] = useAlgFile;
    }
    public get useAlgFile(): boolean | undefined {
        return this['use_alg_file'];
    }
    public withAlgorithmClassifyTag(algorithmClassifyTag: { [key: string]: string; }): StyleExtraMetaAdditionalProperties {
        this['algorithm_classify_tag'] = algorithmClassifyTag;
        return this;
    }
    public set algorithmClassifyTag(algorithmClassifyTag: { [key: string]: string; }  | undefined) {
        this['algorithm_classify_tag'] = algorithmClassifyTag;
    }
    public get algorithmClassifyTag(): { [key: string]: string; } | undefined {
        return this['algorithm_classify_tag'];
    }
    public withModelBodyStyle(modelBodyStyle: string): StyleExtraMetaAdditionalProperties {
        this['model_body_style'] = modelBodyStyle;
        return this;
    }
    public set modelBodyStyle(modelBodyStyle: string  | undefined) {
        this['model_body_style'] = modelBodyStyle;
    }
    public get modelBodyStyle(): string | undefined {
        return this['model_body_style'];
    }
    public withMcAsset(mcAsset: EngineAssetInfo): StyleExtraMetaAdditionalProperties {
        this['mc_asset'] = mcAsset;
        return this;
    }
    public set mcAsset(mcAsset: EngineAssetInfo  | undefined) {
        this['mc_asset'] = mcAsset;
    }
    public get mcAsset(): EngineAssetInfo | undefined {
        return this['mc_asset'];
    }
    public withUeAsset(ueAsset: EngineAssetInfo): StyleExtraMetaAdditionalProperties {
        this['ue_asset'] = ueAsset;
        return this;
    }
    public set ueAsset(ueAsset: EngineAssetInfo  | undefined) {
        this['ue_asset'] = ueAsset;
    }
    public get ueAsset(): EngineAssetInfo | undefined {
        return this['ue_asset'];
    }
}