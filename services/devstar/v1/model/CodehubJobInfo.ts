import { RepositoryInfo } from './RepositoryInfo';


export class CodehubJobInfo {
    private 'application_name': string | undefined;
    public privately?: boolean;
    private 'short_id'?: string | undefined;
    private 'code_url': string | undefined;
    private 'region_id': string | undefined;
    private 'repo_type': number | undefined;
    public properties?: { [key: string]: string; };
    private 'repo_info'?: RepositoryInfo | undefined;
    public constructor(applicationName?: any, codeUrl?: any, regionId?: any, repoType?: any) { 
        this['application_name'] = applicationName;
        this['code_url'] = codeUrl;
        this['region_id'] = regionId;
        this['repo_type'] = repoType;
    }
    public withApplicationName(applicationName: string): CodehubJobInfo {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName() {
        return this['application_name'];
    }
    public withPrivately(privately: boolean): CodehubJobInfo {
        this['privately'] = privately;
        return this;
    }
    public withShortId(shortId: string): CodehubJobInfo {
        this['short_id'] = shortId;
        return this;
    }
    public set shortId(shortId: string | undefined) {
        this['short_id'] = shortId;
    }
    public get shortId() {
        return this['short_id'];
    }
    public withCodeUrl(codeUrl: string): CodehubJobInfo {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl() {
        return this['code_url'];
    }
    public withRegionId(regionId: string): CodehubJobInfo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withRepoType(repoType: number): CodehubJobInfo {
        this['repo_type'] = repoType;
        return this;
    }
    public set repoType(repoType: number | undefined) {
        this['repo_type'] = repoType;
    }
    public get repoType() {
        return this['repo_type'];
    }
    public withProperties(properties: { [key: string]: string; }): CodehubJobInfo {
        this['properties'] = properties;
        return this;
    }
    public withRepoInfo(repoInfo: RepositoryInfo): CodehubJobInfo {
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