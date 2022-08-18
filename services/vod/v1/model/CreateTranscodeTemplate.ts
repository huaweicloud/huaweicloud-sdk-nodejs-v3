import { CommonInfo } from './CommonInfo';
import { QualityInfoList } from './QualityInfoList';


export class CreateTranscodeTemplate {
    public name?: string;
    private 'is_default'?: boolean | undefined;
    private 'is_auto_encrypt'?: boolean | undefined;
    private 'quality_info_list'?: Array<QualityInfoList> | undefined;
    public common?: CommonInfo;
    private 'watermark_template_ids'?: Array<string> | undefined;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): CreateTranscodeTemplate {
        this['name'] = name;
        return this;
    }
    public withIsDefault(isDefault: boolean): CreateTranscodeTemplate {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault() {
        return this['is_default'];
    }
    public withIsAutoEncrypt(isAutoEncrypt: boolean): CreateTranscodeTemplate {
        this['is_auto_encrypt'] = isAutoEncrypt;
        return this;
    }
    public set isAutoEncrypt(isAutoEncrypt: boolean | undefined) {
        this['is_auto_encrypt'] = isAutoEncrypt;
    }
    public get isAutoEncrypt() {
        return this['is_auto_encrypt'];
    }
    public withQualityInfoList(qualityInfoList: Array<QualityInfoList>): CreateTranscodeTemplate {
        this['quality_info_list'] = qualityInfoList;
        return this;
    }
    public set qualityInfoList(qualityInfoList: Array<QualityInfoList> | undefined) {
        this['quality_info_list'] = qualityInfoList;
    }
    public get qualityInfoList() {
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
    public set watermarkTemplateIds(watermarkTemplateIds: Array<string> | undefined) {
        this['watermark_template_ids'] = watermarkTemplateIds;
    }
    public get watermarkTemplateIds() {
        return this['watermark_template_ids'];
    }
    public withDescription(description: string): CreateTranscodeTemplate {
        this['description'] = description;
        return this;
    }
}