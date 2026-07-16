import { ViewWorkspaceResponseGrants } from './ViewWorkspaceResponseGrants';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkspaceResponse extends SdkResponse {
    public grants?: Array<ViewWorkspaceResponseGrants>;
    public owner?: string;
    private 'auth_type'?: string;
    private 'enterprise_project_id'?: string;
    private 'update_time'?: number;
    private 'create_time'?: number;
    private 'enterprise_project_name'?: string;
    public name?: string;
    public description?: string;
    public id?: string;
    public status?: string;
    private 'status_info'?: string;
    public constructor() { 
        super();
    }
    public withGrants(grants: Array<ViewWorkspaceResponseGrants>): ShowWorkspaceResponse {
        this['grants'] = grants;
        return this;
    }
    public withOwner(owner: string): ShowWorkspaceResponse {
        this['owner'] = owner;
        return this;
    }
    public withAuthType(authType: string): ShowWorkspaceResponse {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowWorkspaceResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withUpdateTime(updateTime: number): ShowWorkspaceResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withCreateTime(createTime: number): ShowWorkspaceResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): ShowWorkspaceResponse {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withName(name: string): ShowWorkspaceResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowWorkspaceResponse {
        this['description'] = description;
        return this;
    }
    public withId(id: string): ShowWorkspaceResponse {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ShowWorkspaceResponse {
        this['status'] = status;
        return this;
    }
    public withStatusInfo(statusInfo: string): ShowWorkspaceResponse {
        this['status_info'] = statusInfo;
        return this;
    }
    public set statusInfo(statusInfo: string  | undefined) {
        this['status_info'] = statusInfo;
    }
    public get statusInfo(): string | undefined {
        return this['status_info'];
    }
}