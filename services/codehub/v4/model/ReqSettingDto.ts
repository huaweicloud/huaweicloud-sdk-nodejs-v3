

export class ReqSettingDto {
    public active?: boolean;
    public branches?: string;
    private 'branches_type'?: ReqSettingDtoBranchesTypeEnum | string;
    private 'project_type'?: ReqSettingDtoProjectTypeEnum | string;
    public categories?: string;
    private 'category_codes'?: string;
    private 'exclude_statuses'?: string;
    private 'exclude_status_codes'?: string;
    public constructor() { 
    }
    public withActive(active: boolean): ReqSettingDto {
        this['active'] = active;
        return this;
    }
    public withBranches(branches: string): ReqSettingDto {
        this['branches'] = branches;
        return this;
    }
    public withBranchesType(branchesType: ReqSettingDtoBranchesTypeEnum | string): ReqSettingDto {
        this['branches_type'] = branchesType;
        return this;
    }
    public set branchesType(branchesType: ReqSettingDtoBranchesTypeEnum | string  | undefined) {
        this['branches_type'] = branchesType;
    }
    public get branchesType(): ReqSettingDtoBranchesTypeEnum | string | undefined {
        return this['branches_type'];
    }
    public withProjectType(projectType: ReqSettingDtoProjectTypeEnum | string): ReqSettingDto {
        this['project_type'] = projectType;
        return this;
    }
    public set projectType(projectType: ReqSettingDtoProjectTypeEnum | string  | undefined) {
        this['project_type'] = projectType;
    }
    public get projectType(): ReqSettingDtoProjectTypeEnum | string | undefined {
        return this['project_type'];
    }
    public withCategories(categories: string): ReqSettingDto {
        this['categories'] = categories;
        return this;
    }
    public withCategoryCodes(categoryCodes: string): ReqSettingDto {
        this['category_codes'] = categoryCodes;
        return this;
    }
    public set categoryCodes(categoryCodes: string  | undefined) {
        this['category_codes'] = categoryCodes;
    }
    public get categoryCodes(): string | undefined {
        return this['category_codes'];
    }
    public withExcludeStatuses(excludeStatuses: string): ReqSettingDto {
        this['exclude_statuses'] = excludeStatuses;
        return this;
    }
    public set excludeStatuses(excludeStatuses: string  | undefined) {
        this['exclude_statuses'] = excludeStatuses;
    }
    public get excludeStatuses(): string | undefined {
        return this['exclude_statuses'];
    }
    public withExcludeStatusCodes(excludeStatusCodes: string): ReqSettingDto {
        this['exclude_status_codes'] = excludeStatusCodes;
        return this;
    }
    public set excludeStatusCodes(excludeStatusCodes: string  | undefined) {
        this['exclude_status_codes'] = excludeStatusCodes;
    }
    public get excludeStatusCodes(): string | undefined {
        return this['exclude_status_codes'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ReqSettingDtoBranchesTypeEnum {
    PLAIN = 'plain',
    REGEX = 'regex'
}
/**
    * @export
    * @enum {string}
    */
export enum ReqSettingDtoProjectTypeEnum {
    SCRUM = 'scrum',
    IPD = 'ipd',
    XBOARD = 'xboard'
}
