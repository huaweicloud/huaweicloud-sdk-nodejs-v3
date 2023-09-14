

export class TemplateState {
    public type?: string;
    public name?: string;
    private 'module_or_template_id'?: string;
    private 'module_or_template_name'?: string;
    private 'display_name'?: string;
    private 'dsl_method'?: string;
    public parameters?: { [key: string]: object; };
    private 'is_manual_execution'?: boolean;
    private 'job_parameter_validate'?: boolean;
    private 'is_show_codehub_url'?: boolean;
    private 'is_execute'?: boolean;
    private 'job_id'?: string;
    private 'job_name'?: string;
    private 'project_id'?: string;
    private 'execution_mode'?: string;
    public constructor(type?: string, name?: string, moduleOrTemplateId?: string, moduleOrTemplateName?: string, displayName?: string, dslMethod?: string, parameters?: { [key: string]: object; }, isManualExecution?: boolean, jobParameterValidate?: boolean, isShowCodehubUrl?: boolean, isExecute?: boolean, jobId?: string, jobName?: string, projectId?: string, executionMode?: string) { 
        this['type'] = type;
        this['name'] = name;
        this['module_or_template_id'] = moduleOrTemplateId;
        this['module_or_template_name'] = moduleOrTemplateName;
        this['display_name'] = displayName;
        this['dsl_method'] = dslMethod;
        this['parameters'] = parameters;
        this['is_manual_execution'] = isManualExecution;
        this['job_parameter_validate'] = jobParameterValidate;
        this['is_show_codehub_url'] = isShowCodehubUrl;
        this['is_execute'] = isExecute;
        this['job_id'] = jobId;
        this['job_name'] = jobName;
        this['project_id'] = projectId;
        this['execution_mode'] = executionMode;
    }
    public withType(type: string): TemplateState {
        this['type'] = type;
        return this;
    }
    public withName(name: string): TemplateState {
        this['name'] = name;
        return this;
    }
    public withModuleOrTemplateId(moduleOrTemplateId: string): TemplateState {
        this['module_or_template_id'] = moduleOrTemplateId;
        return this;
    }
    public set moduleOrTemplateId(moduleOrTemplateId: string  | undefined) {
        this['module_or_template_id'] = moduleOrTemplateId;
    }
    public get moduleOrTemplateId(): string | undefined {
        return this['module_or_template_id'];
    }
    public withModuleOrTemplateName(moduleOrTemplateName: string): TemplateState {
        this['module_or_template_name'] = moduleOrTemplateName;
        return this;
    }
    public set moduleOrTemplateName(moduleOrTemplateName: string  | undefined) {
        this['module_or_template_name'] = moduleOrTemplateName;
    }
    public get moduleOrTemplateName(): string | undefined {
        return this['module_or_template_name'];
    }
    public withDisplayName(displayName: string): TemplateState {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withDslMethod(dslMethod: string): TemplateState {
        this['dsl_method'] = dslMethod;
        return this;
    }
    public set dslMethod(dslMethod: string  | undefined) {
        this['dsl_method'] = dslMethod;
    }
    public get dslMethod(): string | undefined {
        return this['dsl_method'];
    }
    public withParameters(parameters: { [key: string]: object; }): TemplateState {
        this['parameters'] = parameters;
        return this;
    }
    public withIsManualExecution(isManualExecution: boolean): TemplateState {
        this['is_manual_execution'] = isManualExecution;
        return this;
    }
    public set isManualExecution(isManualExecution: boolean  | undefined) {
        this['is_manual_execution'] = isManualExecution;
    }
    public get isManualExecution(): boolean | undefined {
        return this['is_manual_execution'];
    }
    public withJobParameterValidate(jobParameterValidate: boolean): TemplateState {
        this['job_parameter_validate'] = jobParameterValidate;
        return this;
    }
    public set jobParameterValidate(jobParameterValidate: boolean  | undefined) {
        this['job_parameter_validate'] = jobParameterValidate;
    }
    public get jobParameterValidate(): boolean | undefined {
        return this['job_parameter_validate'];
    }
    public withIsShowCodehubUrl(isShowCodehubUrl: boolean): TemplateState {
        this['is_show_codehub_url'] = isShowCodehubUrl;
        return this;
    }
    public set isShowCodehubUrl(isShowCodehubUrl: boolean  | undefined) {
        this['is_show_codehub_url'] = isShowCodehubUrl;
    }
    public get isShowCodehubUrl(): boolean | undefined {
        return this['is_show_codehub_url'];
    }
    public withIsExecute(isExecute: boolean): TemplateState {
        this['is_execute'] = isExecute;
        return this;
    }
    public set isExecute(isExecute: boolean  | undefined) {
        this['is_execute'] = isExecute;
    }
    public get isExecute(): boolean | undefined {
        return this['is_execute'];
    }
    public withJobId(jobId: string): TemplateState {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): TemplateState {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withProjectId(projectId: string): TemplateState {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withExecutionMode(executionMode: string): TemplateState {
        this['execution_mode'] = executionMode;
        return this;
    }
    public set executionMode(executionMode: string  | undefined) {
        this['execution_mode'] = executionMode;
    }
    public get executionMode(): string | undefined {
        return this['execution_mode'];
    }
}