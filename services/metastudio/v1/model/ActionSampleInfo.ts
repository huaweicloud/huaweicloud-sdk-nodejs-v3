import { ActionBasicSampleInfo } from './ActionBasicSampleInfo';


export class ActionSampleInfo {
    private 'action_name_zh'?: string;
    private 'action_name_en'?: string;
    private 'action_tag'?: string;
    public catalog?: string;
    private 'recommended_value'?: number;
    private 'is_selected'?: boolean;
    private 'sample_download_url'?: string;
    public constructor(actionTag?: string) { 
        this['action_tag'] = actionTag;
    }
    public withActionNameZh(actionNameZh: string): ActionSampleInfo {
        this['action_name_zh'] = actionNameZh;
        return this;
    }
    public set actionNameZh(actionNameZh: string  | undefined) {
        this['action_name_zh'] = actionNameZh;
    }
    public get actionNameZh(): string | undefined {
        return this['action_name_zh'];
    }
    public withActionNameEn(actionNameEn: string): ActionSampleInfo {
        this['action_name_en'] = actionNameEn;
        return this;
    }
    public set actionNameEn(actionNameEn: string  | undefined) {
        this['action_name_en'] = actionNameEn;
    }
    public get actionNameEn(): string | undefined {
        return this['action_name_en'];
    }
    public withActionTag(actionTag: string): ActionSampleInfo {
        this['action_tag'] = actionTag;
        return this;
    }
    public set actionTag(actionTag: string  | undefined) {
        this['action_tag'] = actionTag;
    }
    public get actionTag(): string | undefined {
        return this['action_tag'];
    }
    public withCatalog(catalog: string): ActionSampleInfo {
        this['catalog'] = catalog;
        return this;
    }
    public withRecommendedValue(recommendedValue: number): ActionSampleInfo {
        this['recommended_value'] = recommendedValue;
        return this;
    }
    public set recommendedValue(recommendedValue: number  | undefined) {
        this['recommended_value'] = recommendedValue;
    }
    public get recommendedValue(): number | undefined {
        return this['recommended_value'];
    }
    public withIsSelected(isSelected: boolean): ActionSampleInfo {
        this['is_selected'] = isSelected;
        return this;
    }
    public set isSelected(isSelected: boolean  | undefined) {
        this['is_selected'] = isSelected;
    }
    public get isSelected(): boolean | undefined {
        return this['is_selected'];
    }
    public withSampleDownloadUrl(sampleDownloadUrl: string): ActionSampleInfo {
        this['sample_download_url'] = sampleDownloadUrl;
        return this;
    }
    public set sampleDownloadUrl(sampleDownloadUrl: string  | undefined) {
        this['sample_download_url'] = sampleDownloadUrl;
    }
    public get sampleDownloadUrl(): string | undefined {
        return this['sample_download_url'];
    }
}