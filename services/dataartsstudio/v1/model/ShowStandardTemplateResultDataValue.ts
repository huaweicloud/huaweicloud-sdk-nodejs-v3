import { StandElementFieldVO } from './StandElementFieldVO';


export class ShowStandardTemplateResultDataValue {
    public allFields?: Array<StandElementFieldVO>;
    public optional?: Array<StandElementFieldVO>;
    private 'system_default'?: Array<StandElementFieldVO>;
    public custom?: Array<StandElementFieldVO>;
    public hasTemplate?: boolean;
    public constructor() { 
    }
    public withAllFields(allFields: Array<StandElementFieldVO>): ShowStandardTemplateResultDataValue {
        this['allFields'] = allFields;
        return this;
    }
    public withOptional(optional: Array<StandElementFieldVO>): ShowStandardTemplateResultDataValue {
        this['optional'] = optional;
        return this;
    }
    public withSystemDefault(systemDefault: Array<StandElementFieldVO>): ShowStandardTemplateResultDataValue {
        this['system_default'] = systemDefault;
        return this;
    }
    public set systemDefault(systemDefault: Array<StandElementFieldVO>  | undefined) {
        this['system_default'] = systemDefault;
    }
    public get systemDefault(): Array<StandElementFieldVO> | undefined {
        return this['system_default'];
    }
    public withCustom(custom: Array<StandElementFieldVO>): ShowStandardTemplateResultDataValue {
        this['custom'] = custom;
        return this;
    }
    public withHasTemplate(hasTemplate: boolean): ShowStandardTemplateResultDataValue {
        this['hasTemplate'] = hasTemplate;
        return this;
    }
}