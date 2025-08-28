

export class ListPluginInstallScriptRequest {
    private 'enterprise_project_id'?: string;
    private 'outside_host'?: boolean;
    private 'batch_install'?: boolean;
    public plugin?: string;
    private 'operate_type'?: string;
    public constructor(plugin?: string, operateType?: string) { 
        this['plugin'] = plugin;
        this['operate_type'] = operateType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPluginInstallScriptRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOutsideHost(outsideHost: boolean): ListPluginInstallScriptRequest {
        this['outside_host'] = outsideHost;
        return this;
    }
    public set outsideHost(outsideHost: boolean  | undefined) {
        this['outside_host'] = outsideHost;
    }
    public get outsideHost(): boolean | undefined {
        return this['outside_host'];
    }
    public withBatchInstall(batchInstall: boolean): ListPluginInstallScriptRequest {
        this['batch_install'] = batchInstall;
        return this;
    }
    public set batchInstall(batchInstall: boolean  | undefined) {
        this['batch_install'] = batchInstall;
    }
    public get batchInstall(): boolean | undefined {
        return this['batch_install'];
    }
    public withPlugin(plugin: string): ListPluginInstallScriptRequest {
        this['plugin'] = plugin;
        return this;
    }
    public withOperateType(operateType: string): ListPluginInstallScriptRequest {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
}