import { CommonInfo } from './CommonInfo';
import { QualityInfoList } from './QualityInfoList';


export class ModifyTransTemplate {
    private 'group_id': string | undefined;
    public name: string;
    private 'is_default'?: boolean | undefined;
    private 'is_auto_encrypt'?: boolean | undefined;
    private 'quality_info_list'?: Array<QualityInfoList> | undefined;
    private 'watermark_template_ids'?: Array<string> | undefined;
    public description?: string;
    public common?: CommonInfo;
    public constructor(groupId?: any, name?: any) { 
        this['group_id'] = groupId;
        this['name'] = name;
    }
    public withGroupId(groupId: string): ModifyTransTemplate {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withName(name: string): ModifyTransTemplate {
        this['name'] = name;
        return this;
    }
    public withIsDefault(isDefault: boolean): ModifyTransTemplate {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault() {
        return this['is_default'];
    }
    public withIsAutoEncrypt(isAutoEncrypt: boolean): ModifyTransTemplate {
        this['is_auto_encrypt'] = isAutoEncrypt;
        return this;
    }
    public set isAutoEncrypt(isAutoEncrypt: boolean | undefined) {
        this['is_auto_encrypt'] = isAutoEncrypt;
    }
    public get isAutoEncrypt() {
        return this['is_auto_encrypt'];
    }
    public withQualityInfoList(qualityInfoList: Array<QualityInfoList>): ModifyTransTemplate {
        this['quality_info_list'] = qualityInfoList;
        return this;
    }
    public set qualityInfoList(qualityInfoList: Array<QualityInfoList> | undefined) {
        this['quality_info_list'] = qualityInfoList;
    }
    public get qualityInfoList() {
        return this['quality_info_list'];
    }
    public withWatermarkTemplateIds(watermarkTemplateIds: Array<string>): ModifyTransTemplate {
        this['watermark_template_ids'] = watermarkTemplateIds;
        return this;
    }
    public set watermarkTemplateIds(watermarkTemplateIds: Array<string> | undefined) {
        this['watermark_template_ids'] = watermarkTemplateIds;
    }
    public get watermarkTemplateIds() {
        return this['watermark_template_ids'];
    }
    public withDescription(description: string): ModifyTransTemplate {
        this['description'] = description;
        return this;
    }
    public withCommon(common: CommonInfo): ModifyTransTemplate {
        this['common'] = common;
        return this;
    }
}