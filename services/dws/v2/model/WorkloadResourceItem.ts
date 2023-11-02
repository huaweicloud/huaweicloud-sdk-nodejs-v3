

export class WorkloadResourceItem {
    private 'resource_name'?: string;
    private 'resource_value'?: number;
    private 'value_unit'?: string;
    private 'resource_description'?: string;
    public constructor(resourceName?: string, resourceValue?: number) { 
        this['resource_name'] = resourceName;
        this['resource_value'] = resourceValue;
    }
    public withResourceName(resourceName: string): WorkloadResourceItem {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceValue(resourceValue: number): WorkloadResourceItem {
        this['resource_value'] = resourceValue;
        return this;
    }
    public set resourceValue(resourceValue: number  | undefined) {
        this['resource_value'] = resourceValue;
    }
    public get resourceValue(): number | undefined {
        return this['resource_value'];
    }
    public withValueUnit(valueUnit: string): WorkloadResourceItem {
        this['value_unit'] = valueUnit;
        return this;
    }
    public set valueUnit(valueUnit: string  | undefined) {
        this['value_unit'] = valueUnit;
    }
    public get valueUnit(): string | undefined {
        return this['value_unit'];
    }
    public withResourceDescription(resourceDescription: string): WorkloadResourceItem {
        this['resource_description'] = resourceDescription;
        return this;
    }
    public set resourceDescription(resourceDescription: string  | undefined) {
        this['resource_description'] = resourceDescription;
    }
    public get resourceDescription(): string | undefined {
        return this['resource_description'];
    }
}