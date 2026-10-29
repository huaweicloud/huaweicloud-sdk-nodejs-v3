import { ConfigTemplateRuleSetInfo } from './ConfigTemplateRuleSetInfo';
import { CustomParameter } from './CustomParameter';
import { JobBasicInfoV3 } from './JobBasicInfoV3';
import { TaskBasicInfoV3CheckParamMap } from './TaskBasicInfoV3CheckParamMap';


export class TaskBasicInfoV3 {
    public avastarType?: string;
    public branchName?: string;
    public canChangeIgnoreMode?: boolean;
    public canDelete?: boolean;
    public canEdit?: boolean;
    public canEditTemplateSwitch?: boolean;
    public canExecute?: boolean;
    public canRead?: boolean;
    public checkParamList?: Array<CustomParameter>;
    public checkParamMap?: TaskBasicInfoV3CheckParamMap;
    public configTemplateId?: string;
    public createTime?: string;
    public criterionSets?: Array<ConfigTemplateRuleSetInfo>;
    public customParams?: Array<CustomParameter>;
    public defaultBranchName?: string;
    public fileEncoding?: string;
    public hwCloudRegion?: string;
    public id?: string;
    public includePaths?: string;
    public isSetMrWebhook?: boolean;
    public isSetPushWebhook?: boolean;
    public isSetWebhook?: boolean;
    public isTemplateTask?: boolean;
    public jobId?: string;
    public jobTimeout?: string;
    public lastFinishedFullJobId?: string;
    public lastJob?: JobBasicInfoV3;
    public lastReviser?: string;
    public lastUpdateTime?: string;
    public modelSets?: Array<string>;
    public mrCheckBranchStrategy?: number;
    public name?: string;
    public notificationConfig?: string;
    public owner?: string;
    public ownerId?: string;
    public projectId?: string;
    public projectName?: string;
    public region?: string;
    public repoId?: string;
    public repoUrl?: string;
    public reviewData?: Array<string>;
    public ruleSets?: Array<string>;
    public source?: string;
    public taskGroupId?: string;
    public taskIds?: Array<string>;
    public tenantId?: string;
    public useCache?: boolean;
    public useWorkspaceNotificationConfig?: number;
    public versionUpdateDelayDays?: Array<string>;
    public webhookCheckMode?: number;
    public zone?: string;
    public constructor() { 
    }
    public withAvastarType(avastarType: string): TaskBasicInfoV3 {
        this['avastarType'] = avastarType;
        return this;
    }
    public withBranchName(branchName: string): TaskBasicInfoV3 {
        this['branchName'] = branchName;
        return this;
    }
    public withCanChangeIgnoreMode(canChangeIgnoreMode: boolean): TaskBasicInfoV3 {
        this['canChangeIgnoreMode'] = canChangeIgnoreMode;
        return this;
    }
    public withCanDelete(canDelete: boolean): TaskBasicInfoV3 {
        this['canDelete'] = canDelete;
        return this;
    }
    public withCanEdit(canEdit: boolean): TaskBasicInfoV3 {
        this['canEdit'] = canEdit;
        return this;
    }
    public withCanEditTemplateSwitch(canEditTemplateSwitch: boolean): TaskBasicInfoV3 {
        this['canEditTemplateSwitch'] = canEditTemplateSwitch;
        return this;
    }
    public withCanExecute(canExecute: boolean): TaskBasicInfoV3 {
        this['canExecute'] = canExecute;
        return this;
    }
    public withCanRead(canRead: boolean): TaskBasicInfoV3 {
        this['canRead'] = canRead;
        return this;
    }
    public withCheckParamList(checkParamList: Array<CustomParameter>): TaskBasicInfoV3 {
        this['checkParamList'] = checkParamList;
        return this;
    }
    public withCheckParamMap(checkParamMap: TaskBasicInfoV3CheckParamMap): TaskBasicInfoV3 {
        this['checkParamMap'] = checkParamMap;
        return this;
    }
    public withConfigTemplateId(configTemplateId: string): TaskBasicInfoV3 {
        this['configTemplateId'] = configTemplateId;
        return this;
    }
    public withCreateTime(createTime: string): TaskBasicInfoV3 {
        this['createTime'] = createTime;
        return this;
    }
    public withCriterionSets(criterionSets: Array<ConfigTemplateRuleSetInfo>): TaskBasicInfoV3 {
        this['criterionSets'] = criterionSets;
        return this;
    }
    public withCustomParams(customParams: Array<CustomParameter>): TaskBasicInfoV3 {
        this['customParams'] = customParams;
        return this;
    }
    public withDefaultBranchName(defaultBranchName: string): TaskBasicInfoV3 {
        this['defaultBranchName'] = defaultBranchName;
        return this;
    }
    public withFileEncoding(fileEncoding: string): TaskBasicInfoV3 {
        this['fileEncoding'] = fileEncoding;
        return this;
    }
    public withHwCloudRegion(hwCloudRegion: string): TaskBasicInfoV3 {
        this['hwCloudRegion'] = hwCloudRegion;
        return this;
    }
    public withId(id: string): TaskBasicInfoV3 {
        this['id'] = id;
        return this;
    }
    public withIncludePaths(includePaths: string): TaskBasicInfoV3 {
        this['includePaths'] = includePaths;
        return this;
    }
    public withIsSetMrWebhook(isSetMrWebhook: boolean): TaskBasicInfoV3 {
        this['isSetMrWebhook'] = isSetMrWebhook;
        return this;
    }
    public withIsSetPushWebhook(isSetPushWebhook: boolean): TaskBasicInfoV3 {
        this['isSetPushWebhook'] = isSetPushWebhook;
        return this;
    }
    public withIsSetWebhook(isSetWebhook: boolean): TaskBasicInfoV3 {
        this['isSetWebhook'] = isSetWebhook;
        return this;
    }
    public withIsTemplateTask(isTemplateTask: boolean): TaskBasicInfoV3 {
        this['isTemplateTask'] = isTemplateTask;
        return this;
    }
    public withJobId(jobId: string): TaskBasicInfoV3 {
        this['jobId'] = jobId;
        return this;
    }
    public withJobTimeout(jobTimeout: string): TaskBasicInfoV3 {
        this['jobTimeout'] = jobTimeout;
        return this;
    }
    public withLastFinishedFullJobId(lastFinishedFullJobId: string): TaskBasicInfoV3 {
        this['lastFinishedFullJobId'] = lastFinishedFullJobId;
        return this;
    }
    public withLastJob(lastJob: JobBasicInfoV3): TaskBasicInfoV3 {
        this['lastJob'] = lastJob;
        return this;
    }
    public withLastReviser(lastReviser: string): TaskBasicInfoV3 {
        this['lastReviser'] = lastReviser;
        return this;
    }
    public withLastUpdateTime(lastUpdateTime: string): TaskBasicInfoV3 {
        this['lastUpdateTime'] = lastUpdateTime;
        return this;
    }
    public withModelSets(modelSets: Array<string>): TaskBasicInfoV3 {
        this['modelSets'] = modelSets;
        return this;
    }
    public withMrCheckBranchStrategy(mrCheckBranchStrategy: number): TaskBasicInfoV3 {
        this['mrCheckBranchStrategy'] = mrCheckBranchStrategy;
        return this;
    }
    public withName(name: string): TaskBasicInfoV3 {
        this['name'] = name;
        return this;
    }
    public withNotificationConfig(notificationConfig: string): TaskBasicInfoV3 {
        this['notificationConfig'] = notificationConfig;
        return this;
    }
    public withOwner(owner: string): TaskBasicInfoV3 {
        this['owner'] = owner;
        return this;
    }
    public withOwnerId(ownerId: string): TaskBasicInfoV3 {
        this['ownerId'] = ownerId;
        return this;
    }
    public withProjectId(projectId: string): TaskBasicInfoV3 {
        this['projectId'] = projectId;
        return this;
    }
    public withProjectName(projectName: string): TaskBasicInfoV3 {
        this['projectName'] = projectName;
        return this;
    }
    public withRegion(region: string): TaskBasicInfoV3 {
        this['region'] = region;
        return this;
    }
    public withRepoId(repoId: string): TaskBasicInfoV3 {
        this['repoId'] = repoId;
        return this;
    }
    public withRepoUrl(repoUrl: string): TaskBasicInfoV3 {
        this['repoUrl'] = repoUrl;
        return this;
    }
    public withReviewData(reviewData: Array<string>): TaskBasicInfoV3 {
        this['reviewData'] = reviewData;
        return this;
    }
    public withRuleSets(ruleSets: Array<string>): TaskBasicInfoV3 {
        this['ruleSets'] = ruleSets;
        return this;
    }
    public withSource(source: string): TaskBasicInfoV3 {
        this['source'] = source;
        return this;
    }
    public withTaskGroupId(taskGroupId: string): TaskBasicInfoV3 {
        this['taskGroupId'] = taskGroupId;
        return this;
    }
    public withTaskIds(taskIds: Array<string>): TaskBasicInfoV3 {
        this['taskIds'] = taskIds;
        return this;
    }
    public withTenantId(tenantId: string): TaskBasicInfoV3 {
        this['tenantId'] = tenantId;
        return this;
    }
    public withUseCache(useCache: boolean): TaskBasicInfoV3 {
        this['useCache'] = useCache;
        return this;
    }
    public withUseWorkspaceNotificationConfig(useWorkspaceNotificationConfig: number): TaskBasicInfoV3 {
        this['useWorkspaceNotificationConfig'] = useWorkspaceNotificationConfig;
        return this;
    }
    public withVersionUpdateDelayDays(versionUpdateDelayDays: Array<string>): TaskBasicInfoV3 {
        this['versionUpdateDelayDays'] = versionUpdateDelayDays;
        return this;
    }
    public withWebhookCheckMode(webhookCheckMode: number): TaskBasicInfoV3 {
        this['webhookCheckMode'] = webhookCheckMode;
        return this;
    }
    public withZone(zone: string): TaskBasicInfoV3 {
        this['zone'] = zone;
        return this;
    }
}