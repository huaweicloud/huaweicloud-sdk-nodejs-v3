import { ApplicationModel } from './ApplicationModel';
import { PromConfigModel } from './PromConfigModel';


export class PromInstanceEpsModel {
    private 'prom_name'?: string;
    private 'prom_id'?: string;
    private 'prom_type'?: PromInstanceEpsModelPromTypeEnum | string;
    private 'prom_version'?: string;
    private 'cce_spec'?: string;
    private 'prom_config'?: PromConfigModel;
    private 'prom_create_timestamp'?: number;
    private 'prom_update_timestamp'?: number;
    private 'prom_status'?: string;
    private 'enterprise_project_id'?: string;
    private 'project_id'?: string;
    private 'is_deleted_tag'?: number;
    private 'deleted_time'?: number;
    private 'prom_spec_config'?: PromConfigModel;
    private 'cce_spec_config'?: string;
    public application?: ApplicationModel;
    public constructor(promName?: string, promType?: string) { 
        this['prom_name'] = promName;
        this['prom_type'] = promType;
    }
    public withPromName(promName: string): PromInstanceEpsModel {
        this['prom_name'] = promName;
        return this;
    }
    public set promName(promName: string  | undefined) {
        this['prom_name'] = promName;
    }
    public get promName(): string | undefined {
        return this['prom_name'];
    }
    public withPromId(promId: string): PromInstanceEpsModel {
        this['prom_id'] = promId;
        return this;
    }
    public set promId(promId: string  | undefined) {
        this['prom_id'] = promId;
    }
    public get promId(): string | undefined {
        return this['prom_id'];
    }
    public withPromType(promType: PromInstanceEpsModelPromTypeEnum | string): PromInstanceEpsModel {
        this['prom_type'] = promType;
        return this;
    }
    public set promType(promType: PromInstanceEpsModelPromTypeEnum | string  | undefined) {
        this['prom_type'] = promType;
    }
    public get promType(): PromInstanceEpsModelPromTypeEnum | string | undefined {
        return this['prom_type'];
    }
    public withPromVersion(promVersion: string): PromInstanceEpsModel {
        this['prom_version'] = promVersion;
        return this;
    }
    public set promVersion(promVersion: string  | undefined) {
        this['prom_version'] = promVersion;
    }
    public get promVersion(): string | undefined {
        return this['prom_version'];
    }
    public withCceSpec(cceSpec: string): PromInstanceEpsModel {
        this['cce_spec'] = cceSpec;
        return this;
    }
    public set cceSpec(cceSpec: string  | undefined) {
        this['cce_spec'] = cceSpec;
    }
    public get cceSpec(): string | undefined {
        return this['cce_spec'];
    }
    public withPromConfig(promConfig: PromConfigModel): PromInstanceEpsModel {
        this['prom_config'] = promConfig;
        return this;
    }
    public set promConfig(promConfig: PromConfigModel  | undefined) {
        this['prom_config'] = promConfig;
    }
    public get promConfig(): PromConfigModel | undefined {
        return this['prom_config'];
    }
    public withPromCreateTimestamp(promCreateTimestamp: number): PromInstanceEpsModel {
        this['prom_create_timestamp'] = promCreateTimestamp;
        return this;
    }
    public set promCreateTimestamp(promCreateTimestamp: number  | undefined) {
        this['prom_create_timestamp'] = promCreateTimestamp;
    }
    public get promCreateTimestamp(): number | undefined {
        return this['prom_create_timestamp'];
    }
    public withPromUpdateTimestamp(promUpdateTimestamp: number): PromInstanceEpsModel {
        this['prom_update_timestamp'] = promUpdateTimestamp;
        return this;
    }
    public set promUpdateTimestamp(promUpdateTimestamp: number  | undefined) {
        this['prom_update_timestamp'] = promUpdateTimestamp;
    }
    public get promUpdateTimestamp(): number | undefined {
        return this['prom_update_timestamp'];
    }
    public withPromStatus(promStatus: string): PromInstanceEpsModel {
        this['prom_status'] = promStatus;
        return this;
    }
    public set promStatus(promStatus: string  | undefined) {
        this['prom_status'] = promStatus;
    }
    public get promStatus(): string | undefined {
        return this['prom_status'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PromInstanceEpsModel {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProjectId(projectId: string): PromInstanceEpsModel {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIsDeletedTag(isDeletedTag: number): PromInstanceEpsModel {
        this['is_deleted_tag'] = isDeletedTag;
        return this;
    }
    public set isDeletedTag(isDeletedTag: number  | undefined) {
        this['is_deleted_tag'] = isDeletedTag;
    }
    public get isDeletedTag(): number | undefined {
        return this['is_deleted_tag'];
    }
    public withDeletedTime(deletedTime: number): PromInstanceEpsModel {
        this['deleted_time'] = deletedTime;
        return this;
    }
    public set deletedTime(deletedTime: number  | undefined) {
        this['deleted_time'] = deletedTime;
    }
    public get deletedTime(): number | undefined {
        return this['deleted_time'];
    }
    public withPromSpecConfig(promSpecConfig: PromConfigModel): PromInstanceEpsModel {
        this['prom_spec_config'] = promSpecConfig;
        return this;
    }
    public set promSpecConfig(promSpecConfig: PromConfigModel  | undefined) {
        this['prom_spec_config'] = promSpecConfig;
    }
    public get promSpecConfig(): PromConfigModel | undefined {
        return this['prom_spec_config'];
    }
    public withCceSpecConfig(cceSpecConfig: string): PromInstanceEpsModel {
        this['cce_spec_config'] = cceSpecConfig;
        return this;
    }
    public set cceSpecConfig(cceSpecConfig: string  | undefined) {
        this['cce_spec_config'] = cceSpecConfig;
    }
    public get cceSpecConfig(): string | undefined {
        return this['cce_spec_config'];
    }
    public withApplication(application: ApplicationModel): PromInstanceEpsModel {
        this['application'] = application;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PromInstanceEpsModelPromTypeEnum {
    DEFAULT = 'DEFAULT',
    ECS = 'ECS',
    VPC = 'VPC',
    CCE = 'CCE',
    REMOTE_WRITE = 'REMOTE_WRITE',
    KUBERNETES = 'KUBERNETES',
    CLOUD_SERVICE = 'CLOUD_SERVICE',
    ACROSS_ACCOUNT = 'ACROSS_ACCOUNT'
}
