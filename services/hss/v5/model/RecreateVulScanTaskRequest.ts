import { RescanVulScanTaskRequestInfo } from './RescanVulScanTaskRequestInfo';


export class RecreateVulScanTaskRequest {
    private 'enterprise_project_id'?: string;
    private 'task_id'?: string;
    public body?: RescanVulScanTaskRequestInfo;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecreateVulScanTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTaskId(taskId: string): RecreateVulScanTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: RescanVulScanTaskRequestInfo): RecreateVulScanTaskRequest {
        this['body'] = body;
        return this;
    }
}