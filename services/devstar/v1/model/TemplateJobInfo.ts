import { RepositoryInfo } from './RepositoryInfo';


export class TemplateJobInfo {
    private 'application_name': string | undefined;
    private 'repo_type': TemplateJobInfoRepoTypeEnum | undefined;
    private 'template_id': string | undefined;
    public properties?: { [key: string]: string; };
    private 'repo_info'?: RepositoryInfo | undefined;
    public constructor(applicationName: any, repoType: any, templateId: any) { 
        this['application_name'] = applicationName;
        this['repo_type'] = repoType;
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
    public withRepoType(repoType: TemplateJobInfoRepoTypeEnum): TemplateJobInfo {
        this['repo_type'] = repoType;
        return this;
    }
    public set repoType(repoType: TemplateJobInfoRepoTypeEnum | undefined) {
        this['repo_type'] = repoType;
    }
    public get repoType() {
        return this['repo_type'];
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
    public withProperties(properties: { [key: string]: string; }): TemplateJobInfo {
        this['properties'] = properties;
        return this;
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

/**
    * @export
    * @enum {string}
    */
export enum TemplateJobInfoRepoTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
