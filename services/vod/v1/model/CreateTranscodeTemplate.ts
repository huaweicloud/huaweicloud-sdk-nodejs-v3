import { CommonInfo } from './CommonInfo';
import { QualityInfoList } from './QualityInfoList';


export class CreateTranscodeTemplate {
    public name?: string;
    private 'is_default'?: boolean;
    private 'is_auto_encrypt'?: boolean;
    private 'quality_info_list'?: Array<QualityInfoList>;
    public common?: CommonInfo;
    private 'watermark_template_ids'?: Array<string>;
    public description?: string;
    public constructor(name?: string, qualityInfoList?: Array<QualityInfoList>, common?: CommonInfo) { 
        this['name'] = name;
        this['quality_info_list'] = qualityInfoList;
        this['common'] = common;
    }
    public withName(name: string): CreateTranscodeTemplate {
        this['name'] = name;
        return this;
    }
    public withIsDefault(isDefault: boolean): CreateTranscodeTemplate {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
    public withIsAutoEncrypt(isAutoEncrypt: boolean): CreateTranscodeTemplate {
        this['is_auto_encrypt'] = isAutoEncrypt;
        return this;
    }
    public set isAutoEncrypt(isAutoEncrypt: boolean  | undefined) {
        this['is_auto_encrypt'] = isAutoEncrypt;
    }
    public get isAutoEncrypt(): boolean | undefined {
        return this['is_auto_encrypt'];
    }
    public withQualityInfoList(qualityInfoList: Array<QualityInfoList>): CreateTranscodeTemplate {
        this['quality_info_list'] = qualityInfoList;
        return this;
    }
    public set qualityInfoList(qualityInfoList: Array<QualityInfoList>  | undefined) {
        this['quality_info_list'] = qualityInfoList;
    }
    public get qualityInfoList(): Array<QualityInfoList> | undefined {
        return this['quality_info_list'];
    }
    public withCommon(common: CommonInfo): CreateTranscodeTemplate {
        this['common'] = common;
        return this;
    }
    public withWatermarkTemplateIds(watermarkTemplateIds: Array<string>): CreateTranscodeTemplate {
        this['watermark_template_ids'] = watermarkTemplateIds;
        return this;
    }
    public set watermarkTemplateIds(watermarkTemplateIds: Array<string>  | undefined) {
        this['watermark_template_ids'] = watermarkTemplateIds;
    }
    public get watermarkTemplateIds(): Array<string> | undefined {
        return this['watermark_template_ids'];
    }
    public withDescription(description: string): CreateTranscodeTemplate {
        this['description'] = description;
        return this;
    }
}