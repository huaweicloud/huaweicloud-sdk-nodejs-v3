import { JobActions } from './JobActions';


export class SubscriptionListResp {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'begin_time'?: string;
    public description?: string;
    private 'now_time'?: string;
    private 'job_action'?: JobActions;
    private 'enterprise_project_id'?: string;
    public constructor(id?: string, name?: string, status?: string, createTime?: string, beginTime?: string, description?: string, nowTime?: string, jobAction?: JobActions, enterpriseProjectId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['create_time'] = createTime;
        this['begin_time'] = beginTime;
        this['description'] = description;
        this['now_time'] = nowTime;
        this['job_action'] = jobAction;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withId(id: string): SubscriptionListResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SubscriptionListResp {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): SubscriptionListResp {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): SubscriptionListResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withBeginTime(beginTime: string): SubscriptionListResp {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withDescription(description: string): SubscriptionListResp {
        this['description'] = description;
        return this;
    }
    public withNowTime(nowTime: string): SubscriptionListResp {
        this['now_time'] = nowTime;
        return this;
    }
    public set nowTime(nowTime: string  | undefined) {
        this['now_time'] = nowTime;
    }
    public get nowTime(): string | undefined {
        return this['now_time'];
    }
    public withJobAction(jobAction: JobActions): SubscriptionListResp {
        this['job_action'] = jobAction;
        return this;
    }
    public set jobAction(jobAction: JobActions  | undefined) {
        this['job_action'] = jobAction;
    }
    public get jobAction(): JobActions | undefined {
        return this['job_action'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SubscriptionListResp {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}