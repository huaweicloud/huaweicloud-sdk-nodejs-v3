import { CheckRuleIdListRequestInfo } from './CheckRuleIdListRequestInfo';


export class ChangeCheckRuleActionRequest {
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    private 'check_cce'?: boolean;
    public action?: string;
    public body?: CheckRuleIdListRequestInfo;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeCheckRuleActionRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): ChangeCheckRuleActionRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withCheckCce(checkCce: boolean): ChangeCheckRuleActionRequest {
        this['check_cce'] = checkCce;
        return this;
    }
    public set checkCce(checkCce: boolean  | undefined) {
        this['check_cce'] = checkCce;
    }
    public get checkCce(): boolean | undefined {
        return this['check_cce'];
    }
    public withAction(action: string): ChangeCheckRuleActionRequest {
        this['action'] = action;
        return this;
    }
    public withBody(body: CheckRuleIdListRequestInfo): ChangeCheckRuleActionRequest {
        this['body'] = body;
        return this;
    }
}