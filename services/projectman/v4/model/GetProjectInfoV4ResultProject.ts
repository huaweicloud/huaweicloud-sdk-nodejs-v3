import { GetProjectInfoV4ResultProjectCreator } from './GetProjectInfoV4ResultProjectCreator';


export class GetProjectInfoV4ResultProject {
    private 'project_num_id'?: number;
    private 'project_id'?: string;
    public name?: string;
    private 'created_on'?: number;
    private 'updated_on'?: number;
    private 'project_type'?: string;
    public archive?: number;
    private 'enterprise_id'?: string;
    private 'project_code'?: string;
    public creator?: GetProjectInfoV4ResultProjectCreator;
    public constructor() { 
    }
    public withProjectNumId(projectNumId: number): GetProjectInfoV4ResultProject {
        this['project_num_id'] = projectNumId;
        return this;
    }
    public set projectNumId(projectNumId: number  | undefined) {
        this['project_num_id'] = projectNumId;
    }
    public get projectNumId(): number | undefined {
        return this['project_num_id'];
    }
    public withProjectId(projectId: string): GetProjectInfoV4ResultProject {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): GetProjectInfoV4ResultProject {
        this['name'] = name;
        return this;
    }
    public withCreatedOn(createdOn: number): GetProjectInfoV4ResultProject {
        this['created_on'] = createdOn;
        return this;
    }
    public set createdOn(createdOn: number  | undefined) {
        this['created_on'] = createdOn;
    }
    public get createdOn(): number | undefined {
        return this['created_on'];
    }
    public withUpdatedOn(updatedOn: number): GetProjectInfoV4ResultProject {
        this['updated_on'] = updatedOn;
        return this;
    }
    public set updatedOn(updatedOn: number  | undefined) {
        this['updated_on'] = updatedOn;
    }
    public get updatedOn(): number | undefined {
        return this['updated_on'];
    }
    public withProjectType(projectType: string): GetProjectInfoV4ResultProject {
        this['project_type'] = projectType;
        return this;
    }
    public set projectType(projectType: string  | undefined) {
        this['project_type'] = projectType;
    }
    public get projectType(): string | undefined {
        return this['project_type'];
    }
    public withArchive(archive: number): GetProjectInfoV4ResultProject {
        this['archive'] = archive;
        return this;
    }
    public withEnterpriseId(enterpriseId: string): GetProjectInfoV4ResultProject {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
    public withProjectCode(projectCode: string): GetProjectInfoV4ResultProject {
        this['project_code'] = projectCode;
        return this;
    }
    public set projectCode(projectCode: string  | undefined) {
        this['project_code'] = projectCode;
    }
    public get projectCode(): string | undefined {
        return this['project_code'];
    }
    public withCreator(creator: GetProjectInfoV4ResultProjectCreator): GetProjectInfoV4ResultProject {
        this['creator'] = creator;
        return this;
    }
}