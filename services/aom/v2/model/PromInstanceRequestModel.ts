

export class PromInstanceRequestModel {
    private 'prom_name'?: string;
    private 'prom_type'?: PromInstanceRequestModelPromTypeEnum | string;
    private 'prom_version'?: string;
    private 'enterprise_project_id'?: string;
    private 'project_id'?: string;
    public constructor(promName?: string, promType?: string) { 
        this['prom_name'] = promName;
        this['prom_type'] = promType;
    }
    public withPromName(promName: string): PromInstanceRequestModel {
        this['prom_name'] = promName;
        return this;
    }
    public set promName(promName: string  | undefined) {
        this['prom_name'] = promName;
    }
    public get promName(): string | undefined {
        return this['prom_name'];
    }
    public withPromType(promType: PromInstanceRequestModelPromTypeEnum | string): PromInstanceRequestModel {
        this['prom_type'] = promType;
        return this;
    }
    public set promType(promType: PromInstanceRequestModelPromTypeEnum | string  | undefined) {
        this['prom_type'] = promType;
    }
    public get promType(): PromInstanceRequestModelPromTypeEnum | string | undefined {
        return this['prom_type'];
    }
    public withPromVersion(promVersion: string): PromInstanceRequestModel {
        this['prom_version'] = promVersion;
        return this;
    }
    public set promVersion(promVersion: string  | undefined) {
        this['prom_version'] = promVersion;
    }
    public get promVersion(): string | undefined {
        return this['prom_version'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PromInstanceRequestModel {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProjectId(projectId: string): PromInstanceRequestModel {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PromInstanceRequestModelPromTypeEnum {
    ECS = 'ECS',
    VPC = 'VPC',
    CCE = 'CCE',
    REMOTE_WRITE = 'REMOTE_WRITE',
    KUBERNETES = 'KUBERNETES',
    CLOUD_SERVICE = 'CLOUD_SERVICE',
    ACROSS_ACCOUNT = 'ACROSS_ACCOUNT'
}
