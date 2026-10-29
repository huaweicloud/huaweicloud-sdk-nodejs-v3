import { ConfigTemplateRuleSetInfo } from './ConfigTemplateRuleSetInfo';
import { ReviewDataInfoResponse } from './ReviewDataInfoResponse';


export class ConfigTemplateBasicInfo {
    public arch?: string;
    public branch?: string;
    public createTime?: string;
    public creator?: string;
    public exclude?: string;
    public id?: string;
    public includePaths?: string;
    public lastReviser?: string;
    public lastUpdateTime?: string;
    public name?: string;
    public projectId?: string;
    public projectName?: string;
    public region?: string;
    public repoType?: string;
    public repoUrl?: string;
    public resourcePoolId?: string;
    public resourcePoolName?: string;
    private 'resource_pool_type'?: string;
    public reviewData?: Array<ReviewDataInfoResponse>;
    public reviewDataJson?: string;
    public ruleSets?: Array<ConfigTemplateRuleSetInfo>;
    public constructor() { 
    }
    public withArch(arch: string): ConfigTemplateBasicInfo {
        this['arch'] = arch;
        return this;
    }
    public withBranch(branch: string): ConfigTemplateBasicInfo {
        this['branch'] = branch;
        return this;
    }
    public withCreateTime(createTime: string): ConfigTemplateBasicInfo {
        this['createTime'] = createTime;
        return this;
    }
    public withCreator(creator: string): ConfigTemplateBasicInfo {
        this['creator'] = creator;
        return this;
    }
    public withExclude(exclude: string): ConfigTemplateBasicInfo {
        this['exclude'] = exclude;
        return this;
    }
    public withId(id: string): ConfigTemplateBasicInfo {
        this['id'] = id;
        return this;
    }
    public withIncludePaths(includePaths: string): ConfigTemplateBasicInfo {
        this['includePaths'] = includePaths;
        return this;
    }
    public withLastReviser(lastReviser: string): ConfigTemplateBasicInfo {
        this['lastReviser'] = lastReviser;
        return this;
    }
    public withLastUpdateTime(lastUpdateTime: string): ConfigTemplateBasicInfo {
        this['lastUpdateTime'] = lastUpdateTime;
        return this;
    }
    public withName(name: string): ConfigTemplateBasicInfo {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): ConfigTemplateBasicInfo {
        this['projectId'] = projectId;
        return this;
    }
    public withProjectName(projectName: string): ConfigTemplateBasicInfo {
        this['projectName'] = projectName;
        return this;
    }
    public withRegion(region: string): ConfigTemplateBasicInfo {
        this['region'] = region;
        return this;
    }
    public withRepoType(repoType: string): ConfigTemplateBasicInfo {
        this['repoType'] = repoType;
        return this;
    }
    public withRepoUrl(repoUrl: string): ConfigTemplateBasicInfo {
        this['repoUrl'] = repoUrl;
        return this;
    }
    public withResourcePoolId(resourcePoolId: string): ConfigTemplateBasicInfo {
        this['resourcePoolId'] = resourcePoolId;
        return this;
    }
    public withResourcePoolName(resourcePoolName: string): ConfigTemplateBasicInfo {
        this['resourcePoolName'] = resourcePoolName;
        return this;
    }
    public withResourcePoolType(resourcePoolType: string): ConfigTemplateBasicInfo {
        this['resource_pool_type'] = resourcePoolType;
        return this;
    }
    public set resourcePoolType(resourcePoolType: string  | undefined) {
        this['resource_pool_type'] = resourcePoolType;
    }
    public get resourcePoolType(): string | undefined {
        return this['resource_pool_type'];
    }
    public withReviewData(reviewData: Array<ReviewDataInfoResponse>): ConfigTemplateBasicInfo {
        this['reviewData'] = reviewData;
        return this;
    }
    public withReviewDataJson(reviewDataJson: string): ConfigTemplateBasicInfo {
        this['reviewDataJson'] = reviewDataJson;
        return this;
    }
    public withRuleSets(ruleSets: Array<ConfigTemplateRuleSetInfo>): ConfigTemplateBasicInfo {
        this['ruleSets'] = ruleSets;
        return this;
    }
}