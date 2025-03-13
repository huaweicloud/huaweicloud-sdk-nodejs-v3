import { ImportDefaultRuleResultDto } from './ImportDefaultRuleResultDto';


export class ImportDefaultCategoryResultDto {
    private 'import_status'?: ImportDefaultCategoryResultDtoImportStatusEnum | string;
    private 'import_error_message'?: string;
    public children?: Array<ImportDefaultCategoryResultDto>;
    private 'rule_result'?: Array<ImportDefaultRuleResultDto>;
    public uuid?: string;
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withImportStatus(importStatus: ImportDefaultCategoryResultDtoImportStatusEnum | string): ImportDefaultCategoryResultDto {
        this['import_status'] = importStatus;
        return this;
    }
    public set importStatus(importStatus: ImportDefaultCategoryResultDtoImportStatusEnum | string  | undefined) {
        this['import_status'] = importStatus;
    }
    public get importStatus(): ImportDefaultCategoryResultDtoImportStatusEnum | string | undefined {
        return this['import_status'];
    }
    public withImportErrorMessage(importErrorMessage: string): ImportDefaultCategoryResultDto {
        this['import_error_message'] = importErrorMessage;
        return this;
    }
    public set importErrorMessage(importErrorMessage: string  | undefined) {
        this['import_error_message'] = importErrorMessage;
    }
    public get importErrorMessage(): string | undefined {
        return this['import_error_message'];
    }
    public withChildren(children: Array<ImportDefaultCategoryResultDto>): ImportDefaultCategoryResultDto {
        this['children'] = children;
        return this;
    }
    public withRuleResult(ruleResult: Array<ImportDefaultRuleResultDto>): ImportDefaultCategoryResultDto {
        this['rule_result'] = ruleResult;
        return this;
    }
    public set ruleResult(ruleResult: Array<ImportDefaultRuleResultDto>  | undefined) {
        this['rule_result'] = ruleResult;
    }
    public get ruleResult(): Array<ImportDefaultRuleResultDto> | undefined {
        return this['rule_result'];
    }
    public withUuid(uuid: string): ImportDefaultCategoryResultDto {
        this['uuid'] = uuid;
        return this;
    }
    public withName(name: string): ImportDefaultCategoryResultDto {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ImportDefaultCategoryResultDto {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImportDefaultCategoryResultDtoImportStatusEnum {
    SUCCESS = 'success',
    FAILED = 'failed'
}
