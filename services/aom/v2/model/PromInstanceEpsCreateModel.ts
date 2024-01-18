import { PromConfigModel } from './PromConfigModel';


export class PromInstanceEpsCreateModel {
    private 'prom_name'?: string;
    private 'prom_id'?: string;
    private 'prom_type'?: PromInstanceEpsCreateModelPromTypeEnum | string;
    private 'prom_version'?: string;
    private 'prom_create_timestamp'?: number;
    private 'prom_update_timestamp'?: number;
    private 'prom_status'?: PromInstanceEpsCreateModelPromStatusEnum | string;
    private 'enterprise_project_id'?: string;
    private 'project_id'?: string;
    private 'deleted_time'?: number;
    private 'prom_spec_config'?: PromConfigModel;
    private 'cce_spec_config'?: string;
    public constructor(promName?: string, promType?: string) { 
        this['prom_name'] = promName;
        this['prom_type'] = promType;
    }
    public withPromName(promName: string): PromInstanceEpsCreateModel {
        this['prom_name'] = promName;
        return this;
    }
    public set promName(promName: string  | undefined) {
        this['prom_name'] = promName;
    }
    public get promName(): string | undefined {
        return this['prom_name'];
    }
    public withPromId(promId: string): PromInstanceEpsCreateModel {
        this['prom_id'] = promId;
        return this;
    }
    public set promId(promId: string  | undefined) {
        this['prom_id'] = promId;
    }
    public get promId(): string | undefined {
        return this['prom_id'];
    }
    public withPromType(promType: PromInstanceEpsCreateModelPromTypeEnum | string): PromInstanceEpsCreateModel {
        this['prom_type'] = promType;
        return this;
    }
    public set promType(promType: PromInstanceEpsCreateModelPromTypeEnum | string  | undefined) {
        this['prom_type'] = promType;
    }
    public get promType(): PromInstanceEpsCreateModelPromTypeEnum | string | undefined {
        return this['prom_type'];
    }
    public withPromVersion(promVersion: string): PromInstanceEpsCreateModel {
        this['prom_version'] = promVersion;
        return this;
    }
    public set promVersion(promVersion: string  | undefined) {
        this['prom_version'] = promVersion;
    }
    public get promVersion(): string | undefined {
        return this['prom_version'];
    }
    public withPromCreateTimestamp(promCreateTimestamp: number): PromInstanceEpsCreateModel {
        this['prom_create_timestamp'] = promCreateTimestamp;
        return this;
    }
    public set promCreateTimestamp(promCreateTimestamp: number  | undefined) {
        this['prom_create_timestamp'] = promCreateTimestamp;
    }
    public get promCreateTimestamp(): number | undefined {
        return this['prom_create_timestamp'];
    }
    public withPromUpdateTimestamp(promUpdateTimestamp: number): PromInstanceEpsCreateModel {
        this['prom_update_timestamp'] = promUpdateTimestamp;
        return this;
    }
    public set promUpdateTimestamp(promUpdateTimestamp: number  | undefined) {
        this['prom_update_timestamp'] = promUpdateTimestamp;
    }
    public get promUpdateTimestamp(): number | undefined {
        return this['prom_update_timestamp'];
    }
    public withPromStatus(promStatus: PromInstanceEpsCreateModelPromStatusEnum | string): PromInstanceEpsCreateModel {
        this['prom_status'] = promStatus;
        return this;
    }
    public set promStatus(promStatus: PromInstanceEpsCreateModelPromStatusEnum | string  | undefined) {
        this['prom_status'] = promStatus;
    }
    public get promStatus(): PromInstanceEpsCreateModelPromStatusEnum | string | undefined {
        return this['prom_status'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PromInstanceEpsCreateModel {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProjectId(projectId: string): PromInstanceEpsCreateModel {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDeletedTime(deletedTime: number): PromInstanceEpsCreateModel {
        this['deleted_time'] = deletedTime;
        return this;
    }
    public set deletedTime(deletedTime: number  | undefined) {
        this['deleted_time'] = deletedTime;
    }
    public get deletedTime(): number | undefined {
        return this['deleted_time'];
    }
    public withPromSpecConfig(promSpecConfig: PromConfigModel): PromInstanceEpsCreateModel {
        this['prom_spec_config'] = promSpecConfig;
        return this;
    }
    public set promSpecConfig(promSpecConfig: PromConfigModel  | undefined) {
        this['prom_spec_config'] = promSpecConfig;
    }
    public get promSpecConfig(): PromConfigModel | undefined {
        return this['prom_spec_config'];
    }
    public withCceSpecConfig(cceSpecConfig: string): PromInstanceEpsCreateModel {
        this['cce_spec_config'] = cceSpecConfig;
        return this;
    }
    public set cceSpecConfig(cceSpecConfig: string  | undefined) {
        this['cce_spec_config'] = cceSpecConfig;
    }
    public get cceSpecConfig(): string | undefined {
        return this['cce_spec_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PromInstanceEpsCreateModelPromTypeEnum {
    ECS = 'ECS',
    VPC = 'VPC',
    CCE = 'CCE',
    REMOTE_WRITE = 'REMOTE_WRITE',
    KUBERNETES = 'KUBERNETES',
    CLOUD_SERVICE = 'CLOUD_SERVICE',
    ACROSS_ACCOUNT = 'ACROSS_ACCOUNT'
}
/**
    * @export
    * @enum {string}
    */
export enum PromInstanceEpsCreateModelPromStatusEnum {
    DELETED = 'DELETED',
    NORMAL = 'NORMAL',
    ALL = 'ALL'
}
