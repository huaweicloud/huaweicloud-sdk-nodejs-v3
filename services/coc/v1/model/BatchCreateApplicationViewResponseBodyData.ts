

export class BatchCreateApplicationViewResponseBodyData {
    private 'application_ids'?: Array<string>;
    private 'component_ids'?: Array<string>;
    private 'group_ids'?: Array<string>;
    public constructor() { 
    }
    public withApplicationIds(applicationIds: Array<string>): BatchCreateApplicationViewResponseBodyData {
        this['application_ids'] = applicationIds;
        return this;
    }
    public set applicationIds(applicationIds: Array<string>  | undefined) {
        this['application_ids'] = applicationIds;
    }
    public get applicationIds(): Array<string> | undefined {
        return this['application_ids'];
    }
    public withComponentIds(componentIds: Array<string>): BatchCreateApplicationViewResponseBodyData {
        this['component_ids'] = componentIds;
        return this;
    }
    public set componentIds(componentIds: Array<string>  | undefined) {
        this['component_ids'] = componentIds;
    }
    public get componentIds(): Array<string> | undefined {
        return this['component_ids'];
    }
    public withGroupIds(groupIds: Array<string>): BatchCreateApplicationViewResponseBodyData {
        this['group_ids'] = groupIds;
        return this;
    }
    public set groupIds(groupIds: Array<string>  | undefined) {
        this['group_ids'] = groupIds;
    }
    public get groupIds(): Array<string> | undefined {
        return this['group_ids'];
    }
}