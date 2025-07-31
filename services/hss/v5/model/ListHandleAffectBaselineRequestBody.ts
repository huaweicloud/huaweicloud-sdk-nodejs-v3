import { ListHandleAffectBaselineRequestBodyCheckRuleList } from './ListHandleAffectBaselineRequestBodyCheckRuleList';


export class ListHandleAffectBaselineRequestBody {
    public action?: string;
    private 'handle_status'?: string;
    private 'host_id'?: string;
    private 'check_rule_list'?: Array<ListHandleAffectBaselineRequestBodyCheckRuleList>;
    public constructor(action?: string, handleStatus?: string, checkRuleList?: Array<ListHandleAffectBaselineRequestBodyCheckRuleList>) { 
        this['action'] = action;
        this['handle_status'] = handleStatus;
        this['check_rule_list'] = checkRuleList;
    }
    public withAction(action: string): ListHandleAffectBaselineRequestBody {
        this['action'] = action;
        return this;
    }
    public withHandleStatus(handleStatus: string): ListHandleAffectBaselineRequestBody {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withHostId(hostId: string): ListHandleAffectBaselineRequestBody {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withCheckRuleList(checkRuleList: Array<ListHandleAffectBaselineRequestBodyCheckRuleList>): ListHandleAffectBaselineRequestBody {
        this['check_rule_list'] = checkRuleList;
        return this;
    }
    public set checkRuleList(checkRuleList: Array<ListHandleAffectBaselineRequestBodyCheckRuleList>  | undefined) {
        this['check_rule_list'] = checkRuleList;
    }
    public get checkRuleList(): Array<ListHandleAffectBaselineRequestBodyCheckRuleList> | undefined {
        return this['check_rule_list'];
    }
}