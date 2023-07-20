import { Common } from './Common';
import { QualityInfo } from './QualityInfo';


export class TemplateGroup {
    private 'group_id'?: string;
    public name?: string;
    public status?: string;
    public type?: string;
    private 'auto_encrypt'?: number;
    private 'quality_info_list'?: Array<QualityInfo>;
    private 'watermark_template_ids'?: Array<string>;
    public description?: string;
    public common?: Common;
    public constructor() { 
    }
    public withGroupId(groupId: string): TemplateGroup {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withName(name: string): TemplateGroup {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): TemplateGroup {
        this['status'] = status;
        return this;
    }
    public withType(type: string): TemplateGroup {
        this['type'] = type;
        return this;
    }
    public withAutoEncrypt(autoEncrypt: number): TemplateGroup {
        this['auto_encrypt'] = autoEncrypt;
        return this;
    }
    public set autoEncrypt(autoEncrypt: number  | undefined) {
        this['auto_encrypt'] = autoEncrypt;
    }
    public get autoEncrypt(): number | undefined {
        return this['auto_encrypt'];
    }
    public withQualityInfoList(qualityInfoList: Array<QualityInfo>): TemplateGroup {
        this['quality_info_list'] = qualityInfoList;
        return this;
    }
    public set qualityInfoList(qualityInfoList: Array<QualityInfo>  | undefined) {
        this['quality_info_list'] = qualityInfoList;
    }
    public get qualityInfoList(): Array<QualityInfo> | undefined {
        return this['quality_info_list'];
    }
    public withWatermarkTemplateIds(watermarkTemplateIds: Array<string>): TemplateGroup {
        this['watermark_template_ids'] = watermarkTemplateIds;
        return this;
    }
    public set watermarkTemplateIds(watermarkTemplateIds: Array<string>  | undefined) {
        this['watermark_template_ids'] = watermarkTemplateIds;
    }
    public get watermarkTemplateIds(): Array<string> | undefined {
        return this['watermark_template_ids'];
    }
    public withDescription(description: string): TemplateGroup {
        this['description'] = description;
        return this;
    }
    public withCommon(common: Common): TemplateGroup {
        this['common'] = common;
        return this;
    }
}