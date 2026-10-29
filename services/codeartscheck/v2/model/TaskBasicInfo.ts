import { ConfigTemplateBasicInfo } from './ConfigTemplateBasicInfo';
import { ConfigTemplateRuleSetInfo } from './ConfigTemplateRuleSetInfo';
import { JobBasicInfo } from './JobBasicInfo';
import { JobResultInfo } from './JobResultInfo';


export class TaskBasicInfo {
    public branchName?: string;
    public canDelete?: boolean;
    public canEdit?: boolean;
    public canExecute?: boolean;
    public canRead?: boolean;
    public configTemplate?: ConfigTemplateBasicInfo;
    public configTemplateId?: string;
    public createTime?: string;
    public id?: string;
    public isFollowed?: boolean;
    public jobResult?: JobResultInfo;
    public lastJob?: JobBasicInfo;
    public lastUpdateTime?: string;
    public name?: string;
    public owner?: string;
    public projectId?: string;
    public projectName?: string;
    public region?: string;
    public repoUrl?: string;
    public ruleSets?: Array<ConfigTemplateRuleSetInfo>;
    public ruleType?: string;
    public taskGroupId?: string;
    public constructor() { 
    }
    public withBranchName(branchName: string): TaskBasicInfo {
        this['branchName'] = branchName;
        return this;
    }
    public withCanDelete(canDelete: boolean): TaskBasicInfo {
        this['canDelete'] = canDelete;
        return this;
    }
    public withCanEdit(canEdit: boolean): TaskBasicInfo {
        this['canEdit'] = canEdit;
        return this;
    }
    public withCanExecute(canExecute: boolean): TaskBasicInfo {
        this['canExecute'] = canExecute;
        return this;
    }
    public withCanRead(canRead: boolean): TaskBasicInfo {
        this['canRead'] = canRead;
        return this;
    }
    public withConfigTemplate(configTemplate: ConfigTemplateBasicInfo): TaskBasicInfo {
        this['configTemplate'] = configTemplate;
        return this;
    }
    public withConfigTemplateId(configTemplateId: string): TaskBasicInfo {
        this['configTemplateId'] = configTemplateId;
        return this;
    }
    public withCreateTime(createTime: string): TaskBasicInfo {
        this['createTime'] = createTime;
        return this;
    }
    public withId(id: string): TaskBasicInfo {
        this['id'] = id;
        return this;
    }
    public withIsFollowed(isFollowed: boolean): TaskBasicInfo {
        this['isFollowed'] = isFollowed;
        return this;
    }
    public withJobResult(jobResult: JobResultInfo): TaskBasicInfo {
        this['jobResult'] = jobResult;
        return this;
    }
    public withLastJob(lastJob: JobBasicInfo): TaskBasicInfo {
        this['lastJob'] = lastJob;
        return this;
    }
    public withLastUpdateTime(lastUpdateTime: string): TaskBasicInfo {
        this['lastUpdateTime'] = lastUpdateTime;
        return this;
    }
    public withName(name: string): TaskBasicInfo {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): TaskBasicInfo {
        this['owner'] = owner;
        return this;
    }
    public withProjectId(projectId: string): TaskBasicInfo {
        this['projectId'] = projectId;
        return this;
    }
    public withProjectName(projectName: string): TaskBasicInfo {
        this['projectName'] = projectName;
        return this;
    }
    public withRegion(region: string): TaskBasicInfo {
        this['region'] = region;
        return this;
    }
    public withRepoUrl(repoUrl: string): TaskBasicInfo {
        this['repoUrl'] = repoUrl;
        return this;
    }
    public withRuleSets(ruleSets: Array<ConfigTemplateRuleSetInfo>): TaskBasicInfo {
        this['ruleSets'] = ruleSets;
        return this;
    }
    public withRuleType(ruleType: string): TaskBasicInfo {
        this['ruleType'] = ruleType;
        return this;
    }
    public withTaskGroupId(taskGroupId: string): TaskBasicInfo {
        this['taskGroupId'] = taskGroupId;
        return this;
    }
}