

export class RepositoryTemplateVO {
    public templateType?: string;
    public codeTitle?: string;
    public creatorName?: string;
    public codeDescription?: string;
    public languages?: Array<string>;
    public plateform?: Array<string>;
    public entertype?: Array<string>;
    public constructor(templateType?: string) { 
        this['templateType'] = templateType;
    }
    public withTemplateType(templateType: string): RepositoryTemplateVO {
        this['templateType'] = templateType;
        return this;
    }
    public withCodeTitle(codeTitle: string): RepositoryTemplateVO {
        this['codeTitle'] = codeTitle;
        return this;
    }
    public withCreatorName(creatorName: string): RepositoryTemplateVO {
        this['creatorName'] = creatorName;
        return this;
    }
    public withCodeDescription(codeDescription: string): RepositoryTemplateVO {
        this['codeDescription'] = codeDescription;
        return this;
    }
    public withLanguages(languages: Array<string>): RepositoryTemplateVO {
        this['languages'] = languages;
        return this;
    }
    public withPlateform(plateform: Array<string>): RepositoryTemplateVO {
        this['plateform'] = plateform;
        return this;
    }
    public withEntertype(entertype: Array<string>): RepositoryTemplateVO {
        this['entertype'] = entertype;
        return this;
    }
}