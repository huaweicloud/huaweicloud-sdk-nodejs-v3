

export class ListAgentInstallScriptRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'os_type'?: ListAgentInstallScriptRequestOsTypeEnum | string;
    private 'os_arch'?: ListAgentInstallScriptRequestOsArchEnum | string;
    private 'outside_host'?: boolean;
    private 'outside_group_id'?: string;
    private 'batch_install'?: boolean;
    public type?: ListAgentInstallScriptRequestTypeEnum | string;
    public constructor(osType?: string, osArch?: string) { 
        this['os_type'] = osType;
        this['os_arch'] = osArch;
    }
    public withRegion(region: string): ListAgentInstallScriptRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAgentInstallScriptRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOsType(osType: ListAgentInstallScriptRequestOsTypeEnum | string): ListAgentInstallScriptRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: ListAgentInstallScriptRequestOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): ListAgentInstallScriptRequestOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withOsArch(osArch: ListAgentInstallScriptRequestOsArchEnum | string): ListAgentInstallScriptRequest {
        this['os_arch'] = osArch;
        return this;
    }
    public set osArch(osArch: ListAgentInstallScriptRequestOsArchEnum | string  | undefined) {
        this['os_arch'] = osArch;
    }
    public get osArch(): ListAgentInstallScriptRequestOsArchEnum | string | undefined {
        return this['os_arch'];
    }
    public withOutsideHost(outsideHost: boolean): ListAgentInstallScriptRequest {
        this['outside_host'] = outsideHost;
        return this;
    }
    public set outsideHost(outsideHost: boolean  | undefined) {
        this['outside_host'] = outsideHost;
    }
    public get outsideHost(): boolean | undefined {
        return this['outside_host'];
    }
    public withOutsideGroupId(outsideGroupId: string): ListAgentInstallScriptRequest {
        this['outside_group_id'] = outsideGroupId;
        return this;
    }
    public set outsideGroupId(outsideGroupId: string  | undefined) {
        this['outside_group_id'] = outsideGroupId;
    }
    public get outsideGroupId(): string | undefined {
        return this['outside_group_id'];
    }
    public withBatchInstall(batchInstall: boolean): ListAgentInstallScriptRequest {
        this['batch_install'] = batchInstall;
        return this;
    }
    public set batchInstall(batchInstall: boolean  | undefined) {
        this['batch_install'] = batchInstall;
    }
    public get batchInstall(): boolean | undefined {
        return this['batch_install'];
    }
    public withType(type: ListAgentInstallScriptRequestTypeEnum | string): ListAgentInstallScriptRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAgentInstallScriptRequestOsTypeEnum {
    WINDOWS = 'Windows',
    LINUX = 'Linux'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAgentInstallScriptRequestOsArchEnum {
    X86_64 = 'x86_64',
    AARCH64 = 'aarch64'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAgentInstallScriptRequestTypeEnum {
    PASSWORD = 'password',
    SSH_KEY = 'ssh_key'
}
