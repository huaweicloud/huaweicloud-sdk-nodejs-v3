import { ConfigInfoDO } from './ConfigInfoDO';


export class TemplateTaskRequestBody {
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'template_id'?: string;
    private 'task_name'?: string;
    private 'slave_cluster_id'?: string;
    public configs?: Array<ConfigInfoDO>;
    public constructor(projectId?: string, projectName?: string, templateId?: string, taskName?: string) { 
        this['project_id'] = projectId;
        this['project_name'] = projectName;
        this['template_id'] = templateId;
        this['task_name'] = taskName;
    }
    public withProjectId(projectId: string): TemplateTaskRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): TemplateTaskRequestBody {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withTemplateId(templateId: string): TemplateTaskRequestBody {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTaskName(taskName: string): TemplateTaskRequestBody {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withSlaveClusterId(slaveClusterId: string): TemplateTaskRequestBody {
        this['slave_cluster_id'] = slaveClusterId;
        return this;
    }
    public set slaveClusterId(slaveClusterId: string  | undefined) {
        this['slave_cluster_id'] = slaveClusterId;
    }
    public get slaveClusterId(): string | undefined {
        return this['slave_cluster_id'];
    }
    public withConfigs(configs: Array<ConfigInfoDO>): TemplateTaskRequestBody {
        this['configs'] = configs;
        return this;
    }
}