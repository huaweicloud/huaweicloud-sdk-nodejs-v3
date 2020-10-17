import { RepositoryInfo } from './RepositoryInfo';


export class TemplateJobInfo {
    public applicationName?: string;
    public templateId: string;
    public repoType?: number;
    public properties?: object;
    public repoInfo?: RepositoryInfo;
    public constructor(templateId: any) { 
        this.templateId = templateId;
    }
    public withApplicationName(applicationName?: string): TemplateJobInfo {
        this.applicationName = applicationName;
        return this;
    }
    public withTemplateId(templateId: string): TemplateJobInfo {
        this.templateId = templateId;
        return this;
    }
    public withRepoType(repoType?: number): TemplateJobInfo {
        this.repoType = repoType;
        return this;
    }
    public withProperties(properties?: object): TemplateJobInfo {
        this.properties = properties;
        return this;
    }
    public withRepoInfo(repoInfo?: RepositoryInfo): TemplateJobInfo {
        this.repoInfo = repoInfo;
        return this;
    }
    public getParseParam() {
        const parseParam = new TemplateJobInfoParse();
        if(this.applicationName !== null && this.applicationName !== undefined) { 
            parseParam.setApplicationName(this.applicationName);
        }
        if(this.templateId !== null && this.templateId !== undefined) { 
            parseParam.setTemplateId(this.templateId);
        }
        if(this.repoType !== null && this.repoType !== undefined) { 
            parseParam.setRepoType(this.repoType);
        }
        if(this.properties !== null && this.properties !== undefined) { 
            parseParam.setProperties(this.properties);
        }
        if(this.repoInfo !== null && this.repoInfo !== undefined) { 
            parseParam.setRepoInfo(this.repoInfo.getParseParam());
        }
        return parseParam;
    }
}

export class TemplateJobInfoParse {
    private 'application_name'?: any;
    private 'template_id'?: any;
    private 'repo_type'?: any;
    private 'properties'?: any;
    private 'repo_info'?: any;

    public setApplicationName(applicationName?: any) {
        this['application_name'] = applicationName;
    }
    public setTemplateId(templateId?: any) {
        this['template_id'] = templateId;
    }
    public setRepoType(repoType?: any) {
        this['repo_type'] = repoType;
    }
    public setProperties(properties?: any) {
        this['properties'] = properties;
    }
    public setRepoInfo(repoInfo?: any) {
        this['repo_info'] = repoInfo;
    }
}