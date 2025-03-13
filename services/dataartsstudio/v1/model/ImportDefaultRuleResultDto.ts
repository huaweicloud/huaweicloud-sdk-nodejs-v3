import { ImportDataClassificationRuleDto } from './ImportDataClassificationRuleDto';


export class ImportDefaultRuleResultDto {
    private 'import_status'?: ImportDefaultRuleResultDtoImportStatusEnum | string;
    private 'import_error_message'?: string;
    public uuid?: string;
    private 'import_data_classification_rule'?: ImportDataClassificationRuleDto;
    private 'rule_name'?: string;
    private 'rule_type'?: ImportDefaultRuleResultDtoRuleTypeEnum | string;
    private 'rule_desc'?: string;
    private 'rule_name_en'?: string;
    private 'rule_desc_en'?: string;
    public country?: string;
    public constructor() { 
    }
    public withImportStatus(importStatus: ImportDefaultRuleResultDtoImportStatusEnum | string): ImportDefaultRuleResultDto {
        this['import_status'] = importStatus;
        return this;
    }
    public set importStatus(importStatus: ImportDefaultRuleResultDtoImportStatusEnum | string  | undefined) {
        this['import_status'] = importStatus;
    }
    public get importStatus(): ImportDefaultRuleResultDtoImportStatusEnum | string | undefined {
        return this['import_status'];
    }
    public withImportErrorMessage(importErrorMessage: string): ImportDefaultRuleResultDto {
        this['import_error_message'] = importErrorMessage;
        return this;
    }
    public set importErrorMessage(importErrorMessage: string  | undefined) {
        this['import_error_message'] = importErrorMessage;
    }
    public get importErrorMessage(): string | undefined {
        return this['import_error_message'];
    }
    public withUuid(uuid: string): ImportDefaultRuleResultDto {
        this['uuid'] = uuid;
        return this;
    }
    public withImportDataClassificationRule(importDataClassificationRule: ImportDataClassificationRuleDto): ImportDefaultRuleResultDto {
        this['import_data_classification_rule'] = importDataClassificationRule;
        return this;
    }
    public set importDataClassificationRule(importDataClassificationRule: ImportDataClassificationRuleDto  | undefined) {
        this['import_data_classification_rule'] = importDataClassificationRule;
    }
    public get importDataClassificationRule(): ImportDataClassificationRuleDto | undefined {
        return this['import_data_classification_rule'];
    }
    public withRuleName(ruleName: string): ImportDefaultRuleResultDto {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withRuleType(ruleType: ImportDefaultRuleResultDtoRuleTypeEnum | string): ImportDefaultRuleResultDto {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: ImportDefaultRuleResultDtoRuleTypeEnum | string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): ImportDefaultRuleResultDtoRuleTypeEnum | string | undefined {
        return this['rule_type'];
    }
    public withRuleDesc(ruleDesc: string): ImportDefaultRuleResultDto {
        this['rule_desc'] = ruleDesc;
        return this;
    }
    public set ruleDesc(ruleDesc: string  | undefined) {
        this['rule_desc'] = ruleDesc;
    }
    public get ruleDesc(): string | undefined {
        return this['rule_desc'];
    }
    public withRuleNameEn(ruleNameEn: string): ImportDefaultRuleResultDto {
        this['rule_name_en'] = ruleNameEn;
        return this;
    }
    public set ruleNameEn(ruleNameEn: string  | undefined) {
        this['rule_name_en'] = ruleNameEn;
    }
    public get ruleNameEn(): string | undefined {
        return this['rule_name_en'];
    }
    public withRuleDescEn(ruleDescEn: string): ImportDefaultRuleResultDto {
        this['rule_desc_en'] = ruleDescEn;
        return this;
    }
    public set ruleDescEn(ruleDescEn: string  | undefined) {
        this['rule_desc_en'] = ruleDescEn;
    }
    public get ruleDescEn(): string | undefined {
        return this['rule_desc_en'];
    }
    public withCountry(country: string): ImportDefaultRuleResultDto {
        this['country'] = country;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImportDefaultRuleResultDtoImportStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed'
}
/**
    * @export
    * @enum {string}
    */
export enum ImportDefaultRuleResultDtoRuleTypeEnum {
    REGEX = 'REGEX',
    KEYWORD = 'KEYWORD'
}
