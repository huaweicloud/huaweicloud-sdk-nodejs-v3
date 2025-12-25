import { TagsPojo } from './TagsPojo';


export class CreateWorkspaceRequestBody {
    private 'region_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'enterprise_project_name'?: string;
    private 'view_bind_id'?: string;
    private 'is_view'?: boolean;
    public name?: string;
    public description?: string;
    private 'project_name'?: string;
    public tags?: Array<TagsPojo>;
    public constructor(regionId?: string, name?: string, projectName?: string) { 
        this['region_id'] = regionId;
        this['name'] = name;
        this['project_name'] = projectName;
    }
    public withRegionId(regionId: string): CreateWorkspaceRequestBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateWorkspaceRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): CreateWorkspaceRequestBody {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withViewBindId(viewBindId: string): CreateWorkspaceRequestBody {
        this['view_bind_id'] = viewBindId;
        return this;
    }
    public set viewBindId(viewBindId: string  | undefined) {
        this['view_bind_id'] = viewBindId;
    }
    public get viewBindId(): string | undefined {
        return this['view_bind_id'];
    }
    public withIsView(isView: boolean): CreateWorkspaceRequestBody {
        this['is_view'] = isView;
        return this;
    }
    public set isView(isView: boolean  | undefined) {
        this['is_view'] = isView;
    }
    public get isView(): boolean | undefined {
        return this['is_view'];
    }
    public withName(name: string): CreateWorkspaceRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateWorkspaceRequestBody {
        this['description'] = description;
        return this;
    }
    public withProjectName(projectName: string): CreateWorkspaceRequestBody {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withTags(tags: Array<TagsPojo>): CreateWorkspaceRequestBody {
        this['tags'] = tags;
        return this;
    }
}