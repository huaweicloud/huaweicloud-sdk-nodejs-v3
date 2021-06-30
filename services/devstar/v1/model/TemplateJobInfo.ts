import { RepositoryInfo } from './RepositoryInfo';


export class TemplateJobInfo {
    private 'application_name'?: string | undefined;
    private 'template_id': string | undefined;
    private 'project_name'?: string | undefined;
    private 'repo_type'?: number | undefined;
    public properties?: object;
    private 'template_dependencies'?: Array<string> | undefined;
    private 'repo_info'?: RepositoryInfo | undefined;
    public constructor(templateId?: any) { 
        this['template_id'] = templateId;
    }
    public withApplicationName(applicationName: string): TemplateJobInfo {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName() {
        return this['application_name'];
    }
    public withTemplateId(templateId: string): TemplateJobInfo {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withProjectName(projectName: string): TemplateJobInfo {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
    public withRepoType(repoType: number): TemplateJobInfo {
        this['repo_type'] = repoType;
        return this;
    }
    public set repoType(repoType: number | undefined) {
        this['repo_type'] = repoType;
    }
    public get repoType() {
        return this['repo_type'];
    }
    public withProperties(properties: object): TemplateJobInfo {
        this['properties'] = properties;
        return this;
    }
    public withTemplateDependencies(templateDependencies: Array<string>): TemplateJobInfo {
        this['template_dependencies'] = templateDependencies;
        return this;
    }
    public set templateDependencies(templateDependencies: Array<string> | undefined) {
        this['template_dependencies'] = templateDependencies;
    }
    public get templateDependencies() {
        return this['template_dependencies'];
    }
    public withRepoInfo(repoInfo: RepositoryInfo): TemplateJobInfo {
        this['repo_info'] = repoInfo;
        return this;
    }
    public set repoInfo(repoInfo: RepositoryInfo | undefined) {
        this['repo_info'] = repoInfo;
    }
    public get repoInfo() {
        return this['repo_info'];
    }
}