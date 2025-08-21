

export class CreateMergeRequestTemplateDto {
    private 'template_name'?: string;
    private 'merge_request_title'?: string;
    public description?: string;
    private 'auto_extract_mr_title'?: number;
    private 'is_wip'?: boolean;
    private 'is_default'?: boolean;
    public constructor(templateName?: string) { 
        this['template_name'] = templateName;
    }
    public withTemplateName(templateName: string): CreateMergeRequestTemplateDto {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withMergeRequestTitle(mergeRequestTitle: string): CreateMergeRequestTemplateDto {
        this['merge_request_title'] = mergeRequestTitle;
        return this;
    }
    public set mergeRequestTitle(mergeRequestTitle: string  | undefined) {
        this['merge_request_title'] = mergeRequestTitle;
    }
    public get mergeRequestTitle(): string | undefined {
        return this['merge_request_title'];
    }
    public withDescription(description: string): CreateMergeRequestTemplateDto {
        this['description'] = description;
        return this;
    }
    public withAutoExtractMrTitle(autoExtractMrTitle: number): CreateMergeRequestTemplateDto {
        this['auto_extract_mr_title'] = autoExtractMrTitle;
        return this;
    }
    public set autoExtractMrTitle(autoExtractMrTitle: number  | undefined) {
        this['auto_extract_mr_title'] = autoExtractMrTitle;
    }
    public get autoExtractMrTitle(): number | undefined {
        return this['auto_extract_mr_title'];
    }
    public withIsWip(isWip: boolean): CreateMergeRequestTemplateDto {
        this['is_wip'] = isWip;
        return this;
    }
    public set isWip(isWip: boolean  | undefined) {
        this['is_wip'] = isWip;
    }
    public get isWip(): boolean | undefined {
        return this['is_wip'];
    }
    public withIsDefault(isDefault: boolean): CreateMergeRequestTemplateDto {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
}