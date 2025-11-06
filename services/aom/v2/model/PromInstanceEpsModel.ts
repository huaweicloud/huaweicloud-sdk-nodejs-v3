import { ApplicationModel } from './ApplicationModel';
import { PromConfigModel } from './PromConfigModel';
import { PromLimits } from './PromLimits';


export class PromInstanceEpsModel {
    private 'prom_name'?: string;
    private 'prom_id'?: string;
    private 'prom_type'?: string;
    private 'prom_version'?: string;
    private 'prom_create_timestamp'?: number;
    private 'prom_update_timestamp'?: number;
    private 'prom_status'?: PromInstanceEpsModelPromStatusEnum | string;
    private 'enterprise_project_id'?: string;
    private 'project_id'?: string;
    private 'is_deleted_tag'?: number;
    private 'deleted_time'?: number;
    private 'prom_spec_config'?: PromConfigModel;
    private 'cce_spec_config'?: string;
    private 'prom_limits'?: PromLimits;
    private 'limits_update_time'?: number;
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
    public withPromType(promType: string): PromInstanceEpsModel {
        this['prom_type'] = promType;
        return this;
    }
    public set promType(promType: string  | undefined) {
        this['prom_type'] = promType;
    }
    public get promType(): string | undefined {
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
    public withPromStatus(promStatus: PromInstanceEpsModelPromStatusEnum | string): PromInstanceEpsModel {
        this['prom_status'] = promStatus;
        return this;
    }
    public set promStatus(promStatus: PromInstanceEpsModelPromStatusEnum | string  | undefined) {
        this['prom_status'] = promStatus;
    }
    public get promStatus(): PromInstanceEpsModelPromStatusEnum | string | undefined {
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
    public withPromLimits(promLimits: PromLimits): PromInstanceEpsModel {
        this['prom_limits'] = promLimits;
        return this;
    }
    public set promLimits(promLimits: PromLimits  | undefined) {
        this['prom_limits'] = promLimits;
    }
    public get promLimits(): PromLimits | undefined {
        return this['prom_limits'];
    }
    public withLimitsUpdateTime(limitsUpdateTime: number): PromInstanceEpsModel {
        this['limits_update_time'] = limitsUpdateTime;
        return this;
    }
    public set limitsUpdateTime(limitsUpdateTime: number  | undefined) {
        this['limits_update_time'] = limitsUpdateTime;
    }
    public get limitsUpdateTime(): number | undefined {
        return this['limits_update_time'];
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
export enum PromInstanceEpsModelPromStatusEnum {
    DELETED = 'DELETED',
    NORMAL = 'NORMAL',
    ALL = 'ALL'
}
