

export class WorkItemFlowNodeConfigVO {
    public code?: string;
    public name?: string;
    public description?: string;
    public end?: boolean;
    public last?: boolean;
    public start?: boolean;
    private 'enable_suspend'?: boolean;
    private 'extra_config'?: { [key: string]: object; };
    private 'static_rules'?: Array<{ [key: string]: object; }>;
    private 'static_actions'?: { [key: string]: object; };
    private 'any_status'?: boolean;
    private 'submit_can_operate'?: boolean;
    public constructor() { 
    }
    public withCode(code: string): WorkItemFlowNodeConfigVO {
        this['code'] = code;
        return this;
    }
    public withName(name: string): WorkItemFlowNodeConfigVO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): WorkItemFlowNodeConfigVO {
        this['description'] = description;
        return this;
    }
    public withEnd(end: boolean): WorkItemFlowNodeConfigVO {
        this['end'] = end;
        return this;
    }
    public withLast(last: boolean): WorkItemFlowNodeConfigVO {
        this['last'] = last;
        return this;
    }
    public withStart(start: boolean): WorkItemFlowNodeConfigVO {
        this['start'] = start;
        return this;
    }
    public withEnableSuspend(enableSuspend: boolean): WorkItemFlowNodeConfigVO {
        this['enable_suspend'] = enableSuspend;
        return this;
    }
    public set enableSuspend(enableSuspend: boolean  | undefined) {
        this['enable_suspend'] = enableSuspend;
    }
    public get enableSuspend(): boolean | undefined {
        return this['enable_suspend'];
    }
    public withExtraConfig(extraConfig: { [key: string]: object; }): WorkItemFlowNodeConfigVO {
        this['extra_config'] = extraConfig;
        return this;
    }
    public set extraConfig(extraConfig: { [key: string]: object; }  | undefined) {
        this['extra_config'] = extraConfig;
    }
    public get extraConfig(): { [key: string]: object; } | undefined {
        return this['extra_config'];
    }
    public withStaticRules(staticRules: Array<{ [key: string]: object; }>): WorkItemFlowNodeConfigVO {
        this['static_rules'] = staticRules;
        return this;
    }
    public set staticRules(staticRules: Array<{ [key: string]: object; }>  | undefined) {
        this['static_rules'] = staticRules;
    }
    public get staticRules(): Array<{ [key: string]: object; }> | undefined {
        return this['static_rules'];
    }
    public withStaticActions(staticActions: { [key: string]: object; }): WorkItemFlowNodeConfigVO {
        this['static_actions'] = staticActions;
        return this;
    }
    public set staticActions(staticActions: { [key: string]: object; }  | undefined) {
        this['static_actions'] = staticActions;
    }
    public get staticActions(): { [key: string]: object; } | undefined {
        return this['static_actions'];
    }
    public withAnyStatus(anyStatus: boolean): WorkItemFlowNodeConfigVO {
        this['any_status'] = anyStatus;
        return this;
    }
    public set anyStatus(anyStatus: boolean  | undefined) {
        this['any_status'] = anyStatus;
    }
    public get anyStatus(): boolean | undefined {
        return this['any_status'];
    }
    public withSubmitCanOperate(submitCanOperate: boolean): WorkItemFlowNodeConfigVO {
        this['submit_can_operate'] = submitCanOperate;
        return this;
    }
    public set submitCanOperate(submitCanOperate: boolean  | undefined) {
        this['submit_can_operate'] = submitCanOperate;
    }
    public get submitCanOperate(): boolean | undefined {
        return this['submit_can_operate'];
    }
}