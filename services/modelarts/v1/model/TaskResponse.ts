import { FlavorResponse } from './FlavorResponse';
import { TaskResponseAlgorithm } from './TaskResponseAlgorithm';
import { TaskResponseLogExportPath } from './TaskResponseLogExportPath';


export class TaskResponse {
    public role?: string;
    public algorithm?: TaskResponseAlgorithm;
    private 'task_resource'?: FlavorResponse;
    private 'log_export_path'?: TaskResponseLogExportPath;
    public constructor() { 
    }
    public withRole(role: string): TaskResponse {
        this['role'] = role;
        return this;
    }
    public withAlgorithm(algorithm: TaskResponseAlgorithm): TaskResponse {
        this['algorithm'] = algorithm;
        return this;
    }
    public withTaskResource(taskResource: FlavorResponse): TaskResponse {
        this['task_resource'] = taskResource;
        return this;
    }
    public set taskResource(taskResource: FlavorResponse  | undefined) {
        this['task_resource'] = taskResource;
    }
    public get taskResource(): FlavorResponse | undefined {
        return this['task_resource'];
    }
    public withLogExportPath(logExportPath: TaskResponseLogExportPath): TaskResponse {
        this['log_export_path'] = logExportPath;
        return this;
    }
    public set logExportPath(logExportPath: TaskResponseLogExportPath  | undefined) {
        this['log_export_path'] = logExportPath;
    }
    public get logExportPath(): TaskResponseLogExportPath | undefined {
        return this['log_export_path'];
    }
}