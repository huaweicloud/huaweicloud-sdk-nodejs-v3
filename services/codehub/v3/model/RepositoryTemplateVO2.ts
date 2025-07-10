

export class RepositoryTemplateVO2 {
    private 'template_type'?: string;
    private 'code_title'?: string;
    private 'creator_name'?: string;
    private 'code_description'?: string;
    public languages?: Array<string>;
    public plateform?: Array<string>;
    public entertype?: Array<string>;
    public constructor(templateType?: string) { 
        this['template_type'] = templateType;
    }
    public withTemplateType(templateType: string): RepositoryTemplateVO2 {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): string | undefined {
        return this['template_type'];
    }
    public withCodeTitle(codeTitle: string): RepositoryTemplateVO2 {
        this['code_title'] = codeTitle;
        return this;
    }
    public set codeTitle(codeTitle: string  | undefined) {
        this['code_title'] = codeTitle;
    }
    public get codeTitle(): string | undefined {
        return this['code_title'];
    }
    public withCreatorName(creatorName: string): RepositoryTemplateVO2 {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCodeDescription(codeDescription: string): RepositoryTemplateVO2 {
        this['code_description'] = codeDescription;
        return this;
    }
    public set codeDescription(codeDescription: string  | undefined) {
        this['code_description'] = codeDescription;
    }
    public get codeDescription(): string | undefined {
        return this['code_description'];
    }
    public withLanguages(languages: Array<string>): RepositoryTemplateVO2 {
        this['languages'] = languages;
        return this;
    }
    public withPlateform(plateform: Array<string>): RepositoryTemplateVO2 {
        this['plateform'] = plateform;
        return this;
    }
    public withEntertype(entertype: Array<string>): RepositoryTemplateVO2 {
        this['entertype'] = entertype;
        return this;
    }
}