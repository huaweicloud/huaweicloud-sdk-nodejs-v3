import { ConditionInstance } from './ConditionInstance';


export class ValidateRule {
    private 'dependent_info'?: Array<ConditionInstance>;
    public enabled?: boolean;
    private 'is_configDep'?: boolean;
    private 'is_dependent'?: boolean;
    public message?: string;
    public result?: string;
    private 'special_char'?: string;
    private 'special_char_valid'?: string;
    private 'x_example'?: string;
    public constructor() { 
    }
    public withDependentInfo(dependentInfo: Array<ConditionInstance>): ValidateRule {
        this['dependent_info'] = dependentInfo;
        return this;
    }
    public set dependentInfo(dependentInfo: Array<ConditionInstance>  | undefined) {
        this['dependent_info'] = dependentInfo;
    }
    public get dependentInfo(): Array<ConditionInstance> | undefined {
        return this['dependent_info'];
    }
    public withEnabled(enabled: boolean): ValidateRule {
        this['enabled'] = enabled;
        return this;
    }
    public withIsConfigDep(isConfigDep: boolean): ValidateRule {
        this['is_configDep'] = isConfigDep;
        return this;
    }
    public set isConfigDep(isConfigDep: boolean  | undefined) {
        this['is_configDep'] = isConfigDep;
    }
    public get isConfigDep(): boolean | undefined {
        return this['is_configDep'];
    }
    public withIsDependent(isDependent: boolean): ValidateRule {
        this['is_dependent'] = isDependent;
        return this;
    }
    public set isDependent(isDependent: boolean  | undefined) {
        this['is_dependent'] = isDependent;
    }
    public get isDependent(): boolean | undefined {
        return this['is_dependent'];
    }
    public withMessage(message: string): ValidateRule {
        this['message'] = message;
        return this;
    }
    public withResult(result: string): ValidateRule {
        this['result'] = result;
        return this;
    }
    public withSpecialChar(specialChar: string): ValidateRule {
        this['special_char'] = specialChar;
        return this;
    }
    public set specialChar(specialChar: string  | undefined) {
        this['special_char'] = specialChar;
    }
    public get specialChar(): string | undefined {
        return this['special_char'];
    }
    public withSpecialCharValid(specialCharValid: string): ValidateRule {
        this['special_char_valid'] = specialCharValid;
        return this;
    }
    public set specialCharValid(specialCharValid: string  | undefined) {
        this['special_char_valid'] = specialCharValid;
    }
    public get specialCharValid(): string | undefined {
        return this['special_char_valid'];
    }
    public withXExample(xExample: string): ValidateRule {
        this['x_example'] = xExample;
        return this;
    }
    public set xExample(xExample: string  | undefined) {
        this['x_example'] = xExample;
    }
    public get xExample(): string | undefined {
        return this['x_example'];
    }
}