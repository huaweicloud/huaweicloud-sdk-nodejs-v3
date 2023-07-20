import { Common } from './Common';
import { QualityInfo } from './QualityInfo';


export class TransTemplateGroup {
    public name?: string;
    public status?: TransTemplateGroupStatusEnum | string;
    public type?: TransTemplateGroupTypeEnum | string;
    private 'auto_encrypt'?: number;
    private 'quality_info_list'?: Array<QualityInfo>;
    public common?: Common;
    private 'watermark_template_ids'?: Array<string>;
    public description?: string;
    public constructor(name?: string, type?: string) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): TransTemplateGroup {
        this['name'] = name;
        return this;
    }
    public withStatus(status: TransTemplateGroupStatusEnum | string): TransTemplateGroup {
        this['status'] = status;
        return this;
    }
    public withType(type: TransTemplateGroupTypeEnum | string): TransTemplateGroup {
        this['type'] = type;
        return this;
    }
    public withAutoEncrypt(autoEncrypt: number): TransTemplateGroup {
        this['auto_encrypt'] = autoEncrypt;
        return this;
    }
    public set autoEncrypt(autoEncrypt: number  | undefined) {
        this['auto_encrypt'] = autoEncrypt;
    }
    public get autoEncrypt(): number | undefined {
        return this['auto_encrypt'];
    }
    public withQualityInfoList(qualityInfoList: Array<QualityInfo>): TransTemplateGroup {
        this['quality_info_list'] = qualityInfoList;
        return this;
    }
    public set qualityInfoList(qualityInfoList: Array<QualityInfo>  | undefined) {
        this['quality_info_list'] = qualityInfoList;
    }
    public get qualityInfoList(): Array<QualityInfo> | undefined {
        return this['quality_info_list'];
    }
    public withCommon(common: Common): TransTemplateGroup {
        this['common'] = common;
        return this;
    }
    public withWatermarkTemplateIds(watermarkTemplateIds: Array<string>): TransTemplateGroup {
        this['watermark_template_ids'] = watermarkTemplateIds;
        return this;
    }
    public set watermarkTemplateIds(watermarkTemplateIds: Array<string>  | undefined) {
        this['watermark_template_ids'] = watermarkTemplateIds;
    }
    public get watermarkTemplateIds(): Array<string> | undefined {
        return this['watermark_template_ids'];
    }
    public withDescription(description: string): TransTemplateGroup {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TransTemplateGroupStatusEnum {
    E_1 = '1',
    E_0 = '0'
}
/**
    * @export
    * @enum {string}
    */
export enum TransTemplateGroupTypeEnum {
    CUSTOM_TEMPLATE_GROUP = 'custom_template_group'
}
