import { TaskAlgorithm } from './TaskAlgorithm';
import { TaskLogExportPath } from './TaskLogExportPath';
import { TaskTaskResource } from './TaskTaskResource';


export class Task {
    public role?: string;
    public algorithm?: TaskAlgorithm;
    private 'task_resource'?: TaskTaskResource;
    private 'log_export_path'?: TaskLogExportPath;
    public constructor() { 
    }
    public withRole(role: string): Task {
        this['role'] = role;
        return this;
    }
    public withAlgorithm(algorithm: TaskAlgorithm): Task {
        this['algorithm'] = algorithm;
        return this;
    }
    public withTaskResource(taskResource: TaskTaskResource): Task {
        this['task_resource'] = taskResource;
        return this;
    }
    public set taskResource(taskResource: TaskTaskResource  | undefined) {
        this['task_resource'] = taskResource;
    }
    public get taskResource(): TaskTaskResource | undefined {
        return this['task_resource'];
    }
    public withLogExportPath(logExportPath: TaskLogExportPath): Task {
        this['log_export_path'] = logExportPath;
        return this;
    }
    public set logExportPath(logExportPath: TaskLogExportPath  | undefined) {
        this['log_export_path'] = logExportPath;
    }
    public get logExportPath(): TaskLogExportPath | undefined {
        return this['log_export_path'];
    }
}