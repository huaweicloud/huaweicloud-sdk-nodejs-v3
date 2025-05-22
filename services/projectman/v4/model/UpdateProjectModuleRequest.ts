import { UpdateProjectModuleRequestBody } from './UpdateProjectModuleRequestBody';


export class UpdateProjectModuleRequest {
    private 'project_id'?: string;
    private 'module_id'?: number;
    public body?: UpdateProjectModuleRequestBody;
    public constructor(projectId?: string, moduleId?: number) { 
        this['project_id'] = projectId;
        this['module_id'] = moduleId;
    }
    public withProjectId(projectId: string): UpdateProjectModuleRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withModuleId(moduleId: number): UpdateProjectModuleRequest {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: number  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): number | undefined {
        return this['module_id'];
    }
    public withBody(body: UpdateProjectModuleRequestBody): UpdateProjectModuleRequest {
        this['body'] = body;
        return this;
    }
}