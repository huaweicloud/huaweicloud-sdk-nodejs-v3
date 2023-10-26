import { Node } from './Node';
import { Parameter } from './Parameter';
import { Step } from './Step';
import { WorkFlowModel } from './WorkFlowModel';


export class Workflow {
    public id?: string;
    public name?: string;
    public type?: string;
    public description?: string;
    public tags?: { [key: string]: string; };
    private 'create_time'?: number;
    private 'create_by'?: string;
    private 'update_time'?: number;
    private 'update_by'?: string;
    private 'template_name'?: string;
    private 'template_id'?: string;
    public input?: { [key: string]: object; };
    private 'last_execution_id'?: string;
    public status?: string;
    private 'citation_urns'?: Array<string>;
    private 'last_execution_end_time'?: number;
    private 'last_execution_start_time'?: number;
    public quote?: Array<string>;
    private 'job_name'?: string;
    private 'job_id'?: string;
    private 'service_scenario'?: string;
    private 'service_name'?: string;
    private 'task_type'?: string;
    private 'project_id'?: string;
    private 'workflow_id'?: string;
    private 'task_status'?: string;
    public nodes?: Array<Node>;
    private 'edit_time'?: number;
    private 'execution_action_rules'?: Array<string>;
    private 'execution_permission'?: Array<string>;
    private 'global_parameters'?: Array<Parameter>;
    private 'is_delete'?: boolean;
    public steps?: Array<Step>;
    public output?: string;
    private 'trigger_id'?: string;
    private 'trigger_status'?: string;
    private 'approve_id'?: string;
    private 'template_i18n'?: WorkFlowModel;
    private 'enterprise_project_id'?: string;
    private 'last_execute_by'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withId(id: string): Workflow {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Workflow {
        this['name'] = name;
        return this;
    }
    public withType(type: string): Workflow {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): Workflow {
        this['description'] = description;
        return this;
    }
    public withTags(tags: { [key: string]: string; }): Workflow {
        this['tags'] = tags;
        return this;
    }
    public withCreateTime(createTime: number): Workflow {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateBy(createBy: string): Workflow {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateTime(updateTime: number): Workflow {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateBy(updateBy: string): Workflow {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withTemplateName(templateName: string): Workflow {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateId(templateId: string): Workflow {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withInput(input: { [key: string]: object; }): Workflow {
        this['input'] = input;
        return this;
    }
    public withLastExecutionId(lastExecutionId: string): Workflow {
        this['last_execution_id'] = lastExecutionId;
        return this;
    }
    public set lastExecutionId(lastExecutionId: string  | undefined) {
        this['last_execution_id'] = lastExecutionId;
    }
    public get lastExecutionId(): string | undefined {
        return this['last_execution_id'];
    }
    public withStatus(status: string): Workflow {
        this['status'] = status;
        return this;
    }
    public withCitationUrns(citationUrns: Array<string>): Workflow {
        this['citation_urns'] = citationUrns;
        return this;
    }
    public set citationUrns(citationUrns: Array<string>  | undefined) {
        this['citation_urns'] = citationUrns;
    }
    public get citationUrns(): Array<string> | undefined {
        return this['citation_urns'];
    }
    public withLastExecutionEndTime(lastExecutionEndTime: number): Workflow {
        this['last_execution_end_time'] = lastExecutionEndTime;
        return this;
    }
    public set lastExecutionEndTime(lastExecutionEndTime: number  | undefined) {
        this['last_execution_end_time'] = lastExecutionEndTime;
    }
    public get lastExecutionEndTime(): number | undefined {
        return this['last_execution_end_time'];
    }
    public withLastExecutionStartTime(lastExecutionStartTime: number): Workflow {
        this['last_execution_start_time'] = lastExecutionStartTime;
        return this;
    }
    public set lastExecutionStartTime(lastExecutionStartTime: number  | undefined) {
        this['last_execution_start_time'] = lastExecutionStartTime;
    }
    public get lastExecutionStartTime(): number | undefined {
        return this['last_execution_start_time'];
    }
    public withQuote(quote: Array<string>): Workflow {
        this['quote'] = quote;
        return this;
    }
    public withJobName(jobName: string): Workflow {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobId(jobId: string): Workflow {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withServiceScenario(serviceScenario: string): Workflow {
        this['service_scenario'] = serviceScenario;
        return this;
    }
    public set serviceScenario(serviceScenario: string  | undefined) {
        this['service_scenario'] = serviceScenario;
    }
    public get serviceScenario(): string | undefined {
        return this['service_scenario'];
    }
    public withServiceName(serviceName: string): Workflow {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withTaskType(taskType: string): Workflow {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withProjectId(projectId: string): Workflow {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkflowId(workflowId: string): Workflow {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withTaskStatus(taskStatus: string): Workflow {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withNodes(nodes: Array<Node>): Workflow {
        this['nodes'] = nodes;
        return this;
    }
    public withEditTime(editTime: number): Workflow {
        this['edit_time'] = editTime;
        return this;
    }
    public set editTime(editTime: number  | undefined) {
        this['edit_time'] = editTime;
    }
    public get editTime(): number | undefined {
        return this['edit_time'];
    }
    public withExecutionActionRules(executionActionRules: Array<string>): Workflow {
        this['execution_action_rules'] = executionActionRules;
        return this;
    }
    public set executionActionRules(executionActionRules: Array<string>  | undefined) {
        this['execution_action_rules'] = executionActionRules;
    }
    public get executionActionRules(): Array<string> | undefined {
        return this['execution_action_rules'];
    }
    public withExecutionPermission(executionPermission: Array<string>): Workflow {
        this['execution_permission'] = executionPermission;
        return this;
    }
    public set executionPermission(executionPermission: Array<string>  | undefined) {
        this['execution_permission'] = executionPermission;
    }
    public get executionPermission(): Array<string> | undefined {
        return this['execution_permission'];
    }
    public withGlobalParameters(globalParameters: Array<Parameter>): Workflow {
        this['global_parameters'] = globalParameters;
        return this;
    }
    public set globalParameters(globalParameters: Array<Parameter>  | undefined) {
        this['global_parameters'] = globalParameters;
    }
    public get globalParameters(): Array<Parameter> | undefined {
        return this['global_parameters'];
    }
    public withIsDelete(isDelete: boolean): Workflow {
        this['is_delete'] = isDelete;
        return this;
    }
    public set isDelete(isDelete: boolean  | undefined) {
        this['is_delete'] = isDelete;
    }
    public get isDelete(): boolean | undefined {
        return this['is_delete'];
    }
    public withSteps(steps: Array<Step>): Workflow {
        this['steps'] = steps;
        return this;
    }
    public withOutput(output: string): Workflow {
        this['output'] = output;
        return this;
    }
    public withTriggerId(triggerId: string): Workflow {
        this['trigger_id'] = triggerId;
        return this;
    }
    public set triggerId(triggerId: string  | undefined) {
        this['trigger_id'] = triggerId;
    }
    public get triggerId(): string | undefined {
        return this['trigger_id'];
    }
    public withTriggerStatus(triggerStatus: string): Workflow {
        this['trigger_status'] = triggerStatus;
        return this;
    }
    public set triggerStatus(triggerStatus: string  | undefined) {
        this['trigger_status'] = triggerStatus;
    }
    public get triggerStatus(): string | undefined {
        return this['trigger_status'];
    }
    public withApproveId(approveId: string): Workflow {
        this['approve_id'] = approveId;
        return this;
    }
    public set approveId(approveId: string  | undefined) {
        this['approve_id'] = approveId;
    }
    public get approveId(): string | undefined {
        return this['approve_id'];
    }
    public withTemplateI18n(templateI18n: WorkFlowModel): Workflow {
        this['template_i18n'] = templateI18n;
        return this;
    }
    public set templateI18n(templateI18n: WorkFlowModel  | undefined) {
        this['template_i18n'] = templateI18n;
    }
    public get templateI18n(): WorkFlowModel | undefined {
        return this['template_i18n'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Workflow {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLastExecuteBy(lastExecuteBy: string): Workflow {
        this['last_execute_by'] = lastExecuteBy;
        return this;
    }
    public set lastExecuteBy(lastExecuteBy: string  | undefined) {
        this['last_execute_by'] = lastExecuteBy;
    }
    public get lastExecuteBy(): string | undefined {
        return this['last_execute_by'];
    }
}