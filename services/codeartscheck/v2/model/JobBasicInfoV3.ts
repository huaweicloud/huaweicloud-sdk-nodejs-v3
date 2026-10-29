import { ConfigTemplateRuleSetInfo } from './ConfigTemplateRuleSetInfo';
import { JobResultInfo } from './JobResultInfo';
import { ProcessInfo } from './ProcessInfo';


export class JobBasicInfoV3 {
    public executor?: string;
    public finishTime?: string;
    public id?: string;
    public jobResult?: JobResultInfo;
    public jobType?: string;
    public process?: ProcessInfo;
    public reviewResult?: string;
    public ruleSets?: Array<ConfigTemplateRuleSetInfo>;
    public source?: string;
    public sourceRepoUrl?: string;
    public startTime?: string;
    public status?: string;
    public subJobIds?: Array<string>;
    public subJobStatuses?: Array<string>;
    public targetRepoUrl?: string;
    public taskId?: string;
    public totalExecuteTime?: string;
    public constructor() { 
    }
    public withExecutor(executor: string): JobBasicInfoV3 {
        this['executor'] = executor;
        return this;
    }
    public withFinishTime(finishTime: string): JobBasicInfoV3 {
        this['finishTime'] = finishTime;
        return this;
    }
    public withId(id: string): JobBasicInfoV3 {
        this['id'] = id;
        return this;
    }
    public withJobResult(jobResult: JobResultInfo): JobBasicInfoV3 {
        this['jobResult'] = jobResult;
        return this;
    }
    public withJobType(jobType: string): JobBasicInfoV3 {
        this['jobType'] = jobType;
        return this;
    }
    public withProcess(process: ProcessInfo): JobBasicInfoV3 {
        this['process'] = process;
        return this;
    }
    public withReviewResult(reviewResult: string): JobBasicInfoV3 {
        this['reviewResult'] = reviewResult;
        return this;
    }
    public withRuleSets(ruleSets: Array<ConfigTemplateRuleSetInfo>): JobBasicInfoV3 {
        this['ruleSets'] = ruleSets;
        return this;
    }
    public withSource(source: string): JobBasicInfoV3 {
        this['source'] = source;
        return this;
    }
    public withSourceRepoUrl(sourceRepoUrl: string): JobBasicInfoV3 {
        this['sourceRepoUrl'] = sourceRepoUrl;
        return this;
    }
    public withStartTime(startTime: string): JobBasicInfoV3 {
        this['startTime'] = startTime;
        return this;
    }
    public withStatus(status: string): JobBasicInfoV3 {
        this['status'] = status;
        return this;
    }
    public withSubJobIds(subJobIds: Array<string>): JobBasicInfoV3 {
        this['subJobIds'] = subJobIds;
        return this;
    }
    public withSubJobStatuses(subJobStatuses: Array<string>): JobBasicInfoV3 {
        this['subJobStatuses'] = subJobStatuses;
        return this;
    }
    public withTargetRepoUrl(targetRepoUrl: string): JobBasicInfoV3 {
        this['targetRepoUrl'] = targetRepoUrl;
        return this;
    }
    public withTaskId(taskId: string): JobBasicInfoV3 {
        this['taskId'] = taskId;
        return this;
    }
    public withTotalExecuteTime(totalExecuteTime: string): JobBasicInfoV3 {
        this['totalExecuteTime'] = totalExecuteTime;
        return this;
    }
}