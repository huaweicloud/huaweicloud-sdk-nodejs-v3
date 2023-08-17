

export class Source {
    private 'codehub_name'?: string;
    public branches?: Array<string>;
    private 'scm_type'?: string;
    private 'hook_flag'?: boolean;
    public branch?: string;
    private 'git_url'?: string;
    private 'codehub_id'?: string;
    private 'web_url'?: string;
    private 'branch_list'?: Array<string>;
    private 'init_id'?: string;
    public disable?: boolean;
    public constructor(codehubName?: string, branches?: Array<string>, scmType?: string, hookFlag?: boolean, branch?: string, gitUrl?: string, codehubId?: string, webUrl?: string, branchList?: Array<string>, initId?: string, disable?: boolean) { 
        this['codehub_name'] = codehubName;
        this['branches'] = branches;
        this['scm_type'] = scmType;
        this['hook_flag'] = hookFlag;
        this['branch'] = branch;
        this['git_url'] = gitUrl;
        this['codehub_id'] = codehubId;
        this['web_url'] = webUrl;
        this['branch_list'] = branchList;
        this['init_id'] = initId;
        this['disable'] = disable;
    }
    public withCodehubName(codehubName: string): Source {
        this['codehub_name'] = codehubName;
        return this;
    }
    public set codehubName(codehubName: string  | undefined) {
        this['codehub_name'] = codehubName;
    }
    public get codehubName(): string | undefined {
        return this['codehub_name'];
    }
    public withBranches(branches: Array<string>): Source {
        this['branches'] = branches;
        return this;
    }
    public withScmType(scmType: string): Source {
        this['scm_type'] = scmType;
        return this;
    }
    public set scmType(scmType: string  | undefined) {
        this['scm_type'] = scmType;
    }
    public get scmType(): string | undefined {
        return this['scm_type'];
    }
    public withHookFlag(hookFlag: boolean): Source {
        this['hook_flag'] = hookFlag;
        return this;
    }
    public set hookFlag(hookFlag: boolean  | undefined) {
        this['hook_flag'] = hookFlag;
    }
    public get hookFlag(): boolean | undefined {
        return this['hook_flag'];
    }
    public withBranch(branch: string): Source {
        this['branch'] = branch;
        return this;
    }
    public withGitUrl(gitUrl: string): Source {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
    public withCodehubId(codehubId: string): Source {
        this['codehub_id'] = codehubId;
        return this;
    }
    public set codehubId(codehubId: string  | undefined) {
        this['codehub_id'] = codehubId;
    }
    public get codehubId(): string | undefined {
        return this['codehub_id'];
    }
    public withWebUrl(webUrl: string): Source {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withBranchList(branchList: Array<string>): Source {
        this['branch_list'] = branchList;
        return this;
    }
    public set branchList(branchList: Array<string>  | undefined) {
        this['branch_list'] = branchList;
    }
    public get branchList(): Array<string> | undefined {
        return this['branch_list'];
    }
    public withInitId(initId: string): Source {
        this['init_id'] = initId;
        return this;
    }
    public set initId(initId: string  | undefined) {
        this['init_id'] = initId;
    }
    public get initId(): string | undefined {
        return this['init_id'];
    }
    public withDisable(disable: boolean): Source {
        this['disable'] = disable;
        return this;
    }
}