import { CreateWorkspaceResponseBodyWorkspaceAgencyList } from './CreateWorkspaceResponseBodyWorkspaceAgencyList';


export class ShowWorkspaceResponseBodyWorkspace {
    public id?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public name?: string;
    public description?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    private 'is_view'?: boolean;
    private 'region_id'?: string;
    private 'view_bind_id'?: string;
    private 'view_bind_name'?: string;
    private 'workspace_agency_list'?: Array<CreateWorkspaceResponseBodyWorkspaceAgencyList>;
    public constructor() { 
    }
    public withId(id: string): ShowWorkspaceResponseBodyWorkspace {
        this['id'] = id;
        return this;
    }
    public withCreateTime(createTime: string): ShowWorkspaceResponseBodyWorkspace {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowWorkspaceResponseBodyWorkspace {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withName(name: string): ShowWorkspaceResponseBodyWorkspace {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowWorkspaceResponseBodyWorkspace {
        this['description'] = description;
        return this;
    }
    public withCreatorId(creatorId: string): ShowWorkspaceResponseBodyWorkspace {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): ShowWorkspaceResponseBodyWorkspace {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withModifierId(modifierId: string): ShowWorkspaceResponseBodyWorkspace {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): ShowWorkspaceResponseBodyWorkspace {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withProjectId(projectId: string): ShowWorkspaceResponseBodyWorkspace {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ShowWorkspaceResponseBodyWorkspace {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withDomainId(domainId: string): ShowWorkspaceResponseBodyWorkspace {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): ShowWorkspaceResponseBodyWorkspace {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowWorkspaceResponseBodyWorkspace {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): ShowWorkspaceResponseBodyWorkspace {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withIsView(isView: boolean): ShowWorkspaceResponseBodyWorkspace {
        this['is_view'] = isView;
        return this;
    }
    public set isView(isView: boolean  | undefined) {
        this['is_view'] = isView;
    }
    public get isView(): boolean | undefined {
        return this['is_view'];
    }
    public withRegionId(regionId: string): ShowWorkspaceResponseBodyWorkspace {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withViewBindId(viewBindId: string): ShowWorkspaceResponseBodyWorkspace {
        this['view_bind_id'] = viewBindId;
        return this;
    }
    public set viewBindId(viewBindId: string  | undefined) {
        this['view_bind_id'] = viewBindId;
    }
    public get viewBindId(): string | undefined {
        return this['view_bind_id'];
    }
    public withViewBindName(viewBindName: string): ShowWorkspaceResponseBodyWorkspace {
        this['view_bind_name'] = viewBindName;
        return this;
    }
    public set viewBindName(viewBindName: string  | undefined) {
        this['view_bind_name'] = viewBindName;
    }
    public get viewBindName(): string | undefined {
        return this['view_bind_name'];
    }
    public withWorkspaceAgencyList(workspaceAgencyList: Array<CreateWorkspaceResponseBodyWorkspaceAgencyList>): ShowWorkspaceResponseBodyWorkspace {
        this['workspace_agency_list'] = workspaceAgencyList;
        return this;
    }
    public set workspaceAgencyList(workspaceAgencyList: Array<CreateWorkspaceResponseBodyWorkspaceAgencyList>  | undefined) {
        this['workspace_agency_list'] = workspaceAgencyList;
    }
    public get workspaceAgencyList(): Array<CreateWorkspaceResponseBodyWorkspaceAgencyList> | undefined {
        return this['workspace_agency_list'];
    }
}