import { CommonInfo } from './CommonInfo';
import { QualityInfoList } from './QualityInfoList';


export class TransTemplateRsp {
    private 'group_id'?: string | undefined;
    public name?: string;
    private 'is_default'?: boolean | undefined;
    public type?: string;
    private 'is_auto_encrypt'?: boolean | undefined;
    private 'quality_info_list'?: Array<QualityInfoList> | undefined;
    private 'watermark_template_ids'?: Array<string> | undefined;
    public description?: string;
    public common?: CommonInfo;
    public constructor() { 
    }
    public withGroupId(groupId: string): TransTemplateRsp {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withName(name: string): TransTemplateRsp {
        this['name'] = name;
        return this;
    }
    public withIsDefault(isDefault: boolean): TransTemplateRsp {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault() {
        return this['is_default'];
    }
    public withType(type: string): TransTemplateRsp {
        this['type'] = type;
        return this;
    }
    public withIsAutoEncrypt(isAutoEncrypt: boolean): TransTemplateRsp {
        this['is_auto_encrypt'] = isAutoEncrypt;
        return this;
    }
    public set isAutoEncrypt(isAutoEncrypt: boolean | undefined) {
        this['is_auto_encrypt'] = isAutoEncrypt;
    }
    public get isAutoEncrypt() {
        return this['is_auto_encrypt'];
    }
    public withQualityInfoList(qualityInfoList: Array<QualityInfoList>): TransTemplateRsp {
        this['quality_info_list'] = qualityInfoList;
        return this;
    }
    public set qualityInfoList(qualityInfoList: Array<QualityInfoList> | undefined) {
        this['quality_info_list'] = qualityInfoList;
    }
    public get qualityInfoList() {
        return this['quality_info_list'];
    }
    public withWatermarkTemplateIds(watermarkTemplateIds: Array<string>): TransTemplateRsp {
        this['watermark_template_ids'] = watermarkTemplateIds;
        return this;
    }
    public set watermarkTemplateIds(watermarkTemplateIds: Array<string> | undefined) {
        this['watermark_template_ids'] = watermarkTemplateIds;
    }
    public get watermarkTemplateIds() {
        return this['watermark_template_ids'];
    }
    public withDescription(description: string): TransTemplateRsp {
        this['description'] = description;
        return this;
    }
    public withCommon(common: CommonInfo): TransTemplateRsp {
        this['common'] = common;
        return this;
    }
}