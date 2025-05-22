
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateProjectV4Response extends SdkResponse {
    private 'project_num_id'?: number;
    private 'project_id'?: string;
    private 'project_name'?: string;
    public description?: string;
    private 'project_type'?: string;
    private 'user_num_id'?: number;
    public constructor() { 
        super();
    }
    public withProjectNumId(projectNumId: number): CreateProjectV4Response {
        this['project_num_id'] = projectNumId;
        return this;
    }
    public set projectNumId(projectNumId: number  | undefined) {
        this['project_num_id'] = projectNumId;
    }
    public get projectNumId(): number | undefined {
        return this['project_num_id'];
    }
    public withProjectId(projectId: string): CreateProjectV4Response {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): CreateProjectV4Response {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withDescription(description: string): CreateProjectV4Response {
        this['description'] = description;
        return this;
    }
    public withProjectType(projectType: string): CreateProjectV4Response {
        this['project_type'] = projectType;
        return this;
    }
    public set projectType(projectType: string  | undefined) {
        this['project_type'] = projectType;
    }
    public get projectType(): string | undefined {
        return this['project_type'];
    }
    public withUserNumId(userNumId: number): CreateProjectV4Response {
        this['user_num_id'] = userNumId;
        return this;
    }
    public set userNumId(userNumId: number  | undefined) {
        this['user_num_id'] = userNumId;
    }
    public get userNumId(): number | undefined {
        return this['user_num_id'];
    }
}