

export class InstancesNodesResult {
    public id?: string;
    public name?: string;
    private 'component_ids'?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): InstancesNodesResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InstancesNodesResult {
        this['name'] = name;
        return this;
    }
    public withComponentIds(componentIds: Array<string>): InstancesNodesResult {
        this['component_ids'] = componentIds;
        return this;
    }
    public set componentIds(componentIds: Array<string>  | undefined) {
        this['component_ids'] = componentIds;
    }
    public get componentIds(): Array<string> | undefined {
        return this['component_ids'];
    }
}