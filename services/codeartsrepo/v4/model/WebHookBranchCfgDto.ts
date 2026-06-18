

export class WebHookBranchCfgDto {
    private 'branch_type'?: WebHookBranchCfgDtoBranchTypeEnum | number;
    public branch?: string;
    private 'project_type'?: WebHookBranchCfgDtoProjectTypeEnum | number;
    public project?: string;
    public constructor() { 
    }
    public withBranchType(branchType: WebHookBranchCfgDtoBranchTypeEnum | number): WebHookBranchCfgDto {
        this['branch_type'] = branchType;
        return this;
    }
    public set branchType(branchType: WebHookBranchCfgDtoBranchTypeEnum | number  | undefined) {
        this['branch_type'] = branchType;
    }
    public get branchType(): WebHookBranchCfgDtoBranchTypeEnum | number | undefined {
        return this['branch_type'];
    }
    public withBranch(branch: string): WebHookBranchCfgDto {
        this['branch'] = branch;
        return this;
    }
    public withProjectType(projectType: WebHookBranchCfgDtoProjectTypeEnum | number): WebHookBranchCfgDto {
        this['project_type'] = projectType;
        return this;
    }
    public set projectType(projectType: WebHookBranchCfgDtoProjectTypeEnum | number  | undefined) {
        this['project_type'] = projectType;
    }
    public get projectType(): WebHookBranchCfgDtoProjectTypeEnum | number | undefined {
        return this['project_type'];
    }
    public withProject(project: string): WebHookBranchCfgDto {
        this['project'] = project;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WebHookBranchCfgDtoBranchTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum WebHookBranchCfgDtoProjectTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
