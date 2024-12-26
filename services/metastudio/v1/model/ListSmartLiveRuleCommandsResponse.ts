import { RuleCommand } from './RuleCommand';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSmartLiveRuleCommandsResponse extends SdkResponse {
    public count?: number;
    private 'rule_commands'?: Array<RuleCommand>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSmartLiveRuleCommandsResponse {
        this['count'] = count;
        return this;
    }
    public withRuleCommands(ruleCommands: Array<RuleCommand>): ListSmartLiveRuleCommandsResponse {
        this['rule_commands'] = ruleCommands;
        return this;
    }
    public set ruleCommands(ruleCommands: Array<RuleCommand>  | undefined) {
        this['rule_commands'] = ruleCommands;
    }
    public get ruleCommands(): Array<RuleCommand> | undefined {
        return this['rule_commands'];
    }
    public withXRequestId(xRequestId: string): ListSmartLiveRuleCommandsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}