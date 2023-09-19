import { LogMappingConfig } from './LogMappingConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLogConvergeConfigResponse extends SdkResponse {
    public id?: string;
    private 'member_account_id'?: string;
    private 'member_project_id'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public status?: ShowLogConvergeConfigResponseStatusEnum | string;
    private 'organization_id'?: string;
    private 'management_account_id'?: string;
    private 'management_project_id'?: string;
    public version?: string;
    private 'log_mapping_config'?: Array<LogMappingConfig>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowLogConvergeConfigResponse {
        this['id'] = id;
        return this;
    }
    public withMemberAccountId(memberAccountId: string): ShowLogConvergeConfigResponse {
        this['member_account_id'] = memberAccountId;
        return this;
    }
    public set memberAccountId(memberAccountId: string  | undefined) {
        this['member_account_id'] = memberAccountId;
    }
    public get memberAccountId(): string | undefined {
        return this['member_account_id'];
    }
    public withMemberProjectId(memberProjectId: string): ShowLogConvergeConfigResponse {
        this['member_project_id'] = memberProjectId;
        return this;
    }
    public set memberProjectId(memberProjectId: string  | undefined) {
        this['member_project_id'] = memberProjectId;
    }
    public get memberProjectId(): string | undefined {
        return this['member_project_id'];
    }
    public withCreateTime(createTime: number): ShowLogConvergeConfigResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ShowLogConvergeConfigResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withStatus(status: ShowLogConvergeConfigResponseStatusEnum | string): ShowLogConvergeConfigResponse {
        this['status'] = status;
        return this;
    }
    public withOrganizationId(organizationId: string): ShowLogConvergeConfigResponse {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withManagementAccountId(managementAccountId: string): ShowLogConvergeConfigResponse {
        this['management_account_id'] = managementAccountId;
        return this;
    }
    public set managementAccountId(managementAccountId: string  | undefined) {
        this['management_account_id'] = managementAccountId;
    }
    public get managementAccountId(): string | undefined {
        return this['management_account_id'];
    }
    public withManagementProjectId(managementProjectId: string): ShowLogConvergeConfigResponse {
        this['management_project_id'] = managementProjectId;
        return this;
    }
    public set managementProjectId(managementProjectId: string  | undefined) {
        this['management_project_id'] = managementProjectId;
    }
    public get managementProjectId(): string | undefined {
        return this['management_project_id'];
    }
    public withVersion(version: string): ShowLogConvergeConfigResponse {
        this['version'] = version;
        return this;
    }
    public withLogMappingConfig(logMappingConfig: Array<LogMappingConfig>): ShowLogConvergeConfigResponse {
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

/**
    * @export
    * @enum {string}
    */
export enum ShowLogConvergeConfigResponseStatusEnum {
    CREATING = 'creating',
    DONE = ' done'
}
