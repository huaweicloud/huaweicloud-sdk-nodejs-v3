

export class ListLogtanksRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean | undefined;
    private 'enterprise_project_id'?: Array<string> | undefined;
    public id?: Array<string>;
    private 'loadbalancer_id'?: Array<string> | undefined;
    private 'log_group_id'?: Array<string> | undefined;
    private 'log_topic_id'?: Array<string> | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListLogtanksRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListLogtanksRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): ListLogtanksRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
        return this['page_reverse'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListLogtanksRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string> | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withId(id: Array<string>): ListLogtanksRequest {
        this['id'] = id;
        return this;
    }
    public withLoadbalancerId(loadbalancerId: Array<string>): ListLogtanksRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: Array<string> | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withLogGroupId(logGroupId: Array<string>): ListLogtanksRequest {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: Array<string> | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withLogTopicId(logTopicId: Array<string>): ListLogtanksRequest {
        this['log_topic_id'] = logTopicId;
        return this;
    }
    public set logTopicId(logTopicId: Array<string> | undefined) {
        this['log_topic_id'] = logTopicId;
    }
    public get logTopicId() {
        return this['log_topic_id'];
    }
}