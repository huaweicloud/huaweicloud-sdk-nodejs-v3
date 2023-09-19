import { LogMappingConfig } from './LogMappingConfig';


export class UpdatelogConvergeConfig {
    public id?: string;
    private 'member_account_id'?: string;
    private 'member_project_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public status?: string;
    private 'organization_id'?: string;
    private 'management_account_id'?: string;
    private 'management_project_id'?: string;
    public version?: string;
    private 'log_mapping_config'?: Array<LogMappingConfig>;
    public constructor(memberAccountId?: string, organizationId?: string, managementAccountId?: string, managementProjectId?: string) { 
        this['member_account_id'] = memberAccountId;
        this['organization_id'] = organizationId;
        this['management_account_id'] = managementAccountId;
        this['management_project_id'] = managementProjectId;
    }
    public withId(id: string): UpdatelogConvergeConfig {
        this['id'] = id;
        return this;
    }
    public withMemberAccountId(memberAccountId: string): UpdatelogConvergeConfig {
        this['member_account_id'] = memberAccountId;
        return this;
    }
    public set memberAccountId(memberAccountId: string  | undefined) {
        this['member_account_id'] = memberAccountId;
    }
    public get memberAccountId(): string | undefined {
        return this['member_account_id'];
    }
    public withMemberProjectId(memberProjectId: string): UpdatelogConvergeConfig {
        this['member_project_id'] = memberProjectId;
        return this;
    }
    public set memberProjectId(memberProjectId: string  | undefined) {
        this['member_project_id'] = memberProjectId;
    }
    public get memberProjectId(): string | undefined {
        return this['member_project_id'];
    }
    public withCreateTime(createTime: number): UpdatelogConvergeConfig {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): UpdatelogConvergeConfig {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withStatus(status: string): UpdatelogConvergeConfig {
        this['status'] = status;
        return this;
    }
    public withOrganizationId(organizationId: string): UpdatelogConvergeConfig {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withManagementAccountId(managementAccountId: string): UpdatelogConvergeConfig {
        this['management_account_id'] = managementAccountId;
        return this;
    }
    public set managementAccountId(managementAccountId: string  | undefined) {
        this['management_account_id'] = managementAccountId;
    }
    public get managementAccountId(): string | undefined {
        return this['management_account_id'];
    }
    public withManagementProjectId(managementProjectId: string): UpdatelogConvergeConfig {
        this['management_project_id'] = managementProjectId;
        return this;
    }
    public set managementProjectId(managementProjectId: string  | undefined) {
        this['management_project_id'] = managementProjectId;
    }
    public get managementProjectId(): string | undefined {
        return this['management_project_id'];
    }
    public withVersion(version: string): UpdatelogConvergeConfig {
        this['version'] = version;
        return this;
    }
    public withLogMappingConfig(logMappingConfig: Array<LogMappingConfig>): UpdatelogConvergeConfig {
        this['log_mapping_config'] = logMappingConfig;
        return this;
    }
    public set logMappingConfig(logMappingConfig: Array<LogMappingConfig>  | undefined) {
        this['log_mapping_config'] = logMappingConfig;
    }
    public get logMappingConfig(): Array<LogMappingConfig> | undefined {
        return this['log_mapping_config'];
    }
}