import { CommonInfo } from './CommonInfo';
import { QualityInfoList } from './QualityInfoList';


export class TransTemplateRsp {
    private 'group_id'?: string;
    public name?: string;
    private 'is_default'?: boolean;
    public type?: string;
    private 'is_auto_encrypt'?: boolean;
    private 'quality_info_list'?: Array<QualityInfoList>;
    private 'watermark_template_ids'?: Array<string>;
    public description?: string;
    public common?: CommonInfo;
    public constructor() { 
    }
    public withGroupId(groupId: string): TransTemplateRsp {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
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
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
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
    public set isAutoEncrypt(isAutoEncrypt: boolean  | undefined) {
        this['is_auto_encrypt'] = isAutoEncrypt;
    }
    public get isAutoEncrypt(): boolean | undefined {
        return this['is_auto_encrypt'];
    }
    public withQualityInfoList(qualityInfoList: Array<QualityInfoList>): TransTemplateRsp {
        this['quality_info_list'] = qualityInfoList;
        return this;
    }
    public set qualityInfoList(qualityInfoList: Array<QualityInfoList>  | undefined) {
        this['quality_info_list'] = qualityInfoList;
    }
    public get qualityInfoList(): Array<QualityInfoList> | undefined {
        return this['quality_info_list'];
    }
    public withWatermarkTemplateIds(watermarkTemplateIds: Array<string>): TransTemplateRsp {
        this['watermark_template_ids'] = watermarkTemplateIds;
        return this;
    }
    public set watermarkTemplateIds(watermarkTemplateIds: Array<string>  | undefined) {
        this['watermark_template_ids'] = watermarkTemplateIds;
    }
    public get watermarkTemplateIds(): Array<string> | undefined {
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