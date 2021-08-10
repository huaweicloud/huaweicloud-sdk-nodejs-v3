import { Common } from './Common';
import { QualityInfo } from './QualityInfo';


export class ModifyTransTemplateGroup {
    private 'group_id': string | undefined;
    public name: string;
    public status?: ModifyTransTemplateGroupStatusEnum;
    private 'auto_encrypt'?: number | undefined;
    private 'quality_info_list'?: Array<QualityInfo> | undefined;
    private 'watermark_template_ids'?: Array<string> | undefined;
    public description?: string;
    public common?: Common;
    public constructor(groupId?: any, name?: any) { 
        this['group_id'] = groupId;
        this['name'] = name;
    }
    public withGroupId(groupId: string): ModifyTransTemplateGroup {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withName(name: string): ModifyTransTemplateGroup {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ModifyTransTemplateGroupStatusEnum): ModifyTransTemplateGroup {
        this['status'] = status;
        return this;
    }
    public withAutoEncrypt(autoEncrypt: number): ModifyTransTemplateGroup {
        this['auto_encrypt'] = autoEncrypt;
        return this;
    }
    public set autoEncrypt(autoEncrypt: number | undefined) {
        this['auto_encrypt'] = autoEncrypt;
    }
    public get autoEncrypt() {
        return this['auto_encrypt'];
    }
    public withQualityInfoList(qualityInfoList: Array<QualityInfo>): ModifyTransTemplateGroup {
        this['quality_info_list'] = qualityInfoList;
        return this;
    }
    public set qualityInfoList(qualityInfoList: Array<QualityInfo> | undefined) {
        this['quality_info_list'] = qualityInfoList;
    }
    public get qualityInfoList() {
        return this['quality_info_list'];
    }
    public withWatermarkTemplateIds(watermarkTemplateIds: Array<string>): ModifyTransTemplateGroup {
        this['watermark_template_ids'] = watermarkTemplateIds;
        return this;
    }
    public set watermarkTemplateIds(watermarkTemplateIds: Array<string> | undefined) {
        this['watermark_template_ids'] = watermarkTemplateIds;
    }
    public get watermarkTemplateIds() {
        return this['watermark_template_ids'];
    }
    public withDescription(description: string): ModifyTransTemplateGroup {
        this['description'] = description;
        return this;
    }
    public withCommon(common: Common): ModifyTransTemplateGroup {
        this['common'] = common;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyTransTemplateGroupStatusEnum {
    E_1 = '1',
    E_0 = '0'
}
