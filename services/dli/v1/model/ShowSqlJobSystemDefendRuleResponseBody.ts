import { SysRuleParam } from './SysRuleParam';


export class ShowSqlJobSystemDefendRuleResponseBody {
    private 'rule_id'?: ShowSqlJobSystemDefendRuleResponseBodyRuleIdEnum | string;
    public category?: ShowSqlJobSystemDefendRuleResponseBodyCategoryEnum | string;
    public actions?: Array<string>;
    public engines?: Array<string>;
    private 'no_limit'?: boolean;
    public desc?: string;
    public param?: SysRuleParam;
    public constructor() { 
    }
    public withRuleId(ruleId: ShowSqlJobSystemDefendRuleResponseBodyRuleIdEnum | string): ShowSqlJobSystemDefendRuleResponseBody {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: ShowSqlJobSystemDefendRuleResponseBodyRuleIdEnum | string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): ShowSqlJobSystemDefendRuleResponseBodyRuleIdEnum | string | undefined {
        return this['rule_id'];
    }
    public withCategory(category: ShowSqlJobSystemDefendRuleResponseBodyCategoryEnum | string): ShowSqlJobSystemDefendRuleResponseBody {
        this['category'] = category;
        return this;
    }
    public withActions(actions: Array<string>): ShowSqlJobSystemDefendRuleResponseBody {
        this['actions'] = actions;
        return this;
    }
    public withEngines(engines: Array<string>): ShowSqlJobSystemDefendRuleResponseBody {
        this['engines'] = engines;
        return this;
    }
    public withNoLimit(noLimit: boolean): ShowSqlJobSystemDefendRuleResponseBody {
        this['no_limit'] = noLimit;
        return this;
    }
    public set noLimit(noLimit: boolean  | undefined) {
        this['no_limit'] = noLimit;
    }
    public get noLimit(): boolean | undefined {
        return this['no_limit'];
    }
    public withDesc(desc: string): ShowSqlJobSystemDefendRuleResponseBody {
        this['desc'] = desc;
        return this;
    }
    public withParam(param: SysRuleParam): ShowSqlJobSystemDefendRuleResponseBody {
        this['param'] = param;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSqlJobSystemDefendRuleResponseBodyRuleIdEnum {
    STATIC_0001 = 'static_0001',
    STATIC_0002 = 'static_0002',
    STATIC_0003 = 'static_0003',
    STATIC_0004 = 'static_0004',
    STATIC_0005 = 'static_0005',
    STATIC_0006 = 'static_0006',
    STATIC_0007 = 'static_0007',
    DYNAMIC_0001 = 'dynamic_0001',
    DYNAMIC_0002 = 'dynamic_0002',
    RUNNING_0002 = 'running_0002',
    RUNNING_0003 = 'running_0003',
    RUNNING_0004 = 'running_0004'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSqlJobSystemDefendRuleResponseBodyCategoryEnum {
    STATIC = 'static',
    DYNAMIC = 'dynamic',
    RUNNING = 'running'
}
