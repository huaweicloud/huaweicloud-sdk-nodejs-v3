import { AddOrUpdateAlarmRuleV4RequestBody } from './AddOrUpdateAlarmRuleV4RequestBody';


export class AddOrUpdateMetricOrEventAlarmRuleRequest {
    private 'action_id'?: string;
    private 'Enterprise-Project-Id'?: string;
    public body?: AddOrUpdateAlarmRuleV4RequestBody;
    public constructor(actionId?: string) { 
        this['action_id'] = actionId;
    }
    public withActionId(actionId: string): AddOrUpdateMetricOrEventAlarmRuleRequest {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddOrUpdateMetricOrEventAlarmRuleRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: AddOrUpdateAlarmRuleV4RequestBody): AddOrUpdateMetricOrEventAlarmRuleRequest {
        this['body'] = body;
        return this;
    }
}