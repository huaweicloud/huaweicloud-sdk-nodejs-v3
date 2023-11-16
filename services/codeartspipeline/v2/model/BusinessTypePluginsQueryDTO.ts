

export class BusinessTypePluginsQueryDTO {
    private 'use_condition'?: string;
    private 'input_repo_type'?: string;
    private 'input_source_type'?: string;
    private 'business_type'?: string;
    private 'regex_name'?: string;
    public constructor() { 
    }
    public withUseCondition(useCondition: string): BusinessTypePluginsQueryDTO {
        this['use_condition'] = useCondition;
        return this;
    }
    public set useCondition(useCondition: string  | undefined) {
        this['use_condition'] = useCondition;
    }
    public get useCondition(): string | undefined {
        return this['use_condition'];
    }
    public withInputRepoType(inputRepoType: string): BusinessTypePluginsQueryDTO {
        this['input_repo_type'] = inputRepoType;
        return this;
    }
    public set inputRepoType(inputRepoType: string  | undefined) {
        this['input_repo_type'] = inputRepoType;
    }
    public get inputRepoType(): string | undefined {
        return this['input_repo_type'];
    }
    public withInputSourceType(inputSourceType: string): BusinessTypePluginsQueryDTO {
        this['input_source_type'] = inputSourceType;
        return this;
    }
    public set inputSourceType(inputSourceType: string  | undefined) {
        this['input_source_type'] = inputSourceType;
    }
    public get inputSourceType(): string | undefined {
        return this['input_source_type'];
    }
    public withBusinessType(businessType: string): BusinessTypePluginsQueryDTO {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withRegexName(regexName: string): BusinessTypePluginsQueryDTO {
        this['regex_name'] = regexName;
        return this;
    }
    public set regexName(regexName: string  | undefined) {
        this['regex_name'] = regexName;
    }
    public get regexName(): string | undefined {
        return this['regex_name'];
    }
}