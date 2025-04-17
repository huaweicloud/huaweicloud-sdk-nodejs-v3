

export class ProductInstance {
    private 'first_dimension_name'?: string;
    private 'first_dimension_value'?: string;
    private 'resource_name'?: string;
    public constructor(firstDimensionName?: string, firstDimensionValue?: string, resourceName?: string) { 
        this['first_dimension_name'] = firstDimensionName;
        this['first_dimension_value'] = firstDimensionValue;
        this['resource_name'] = resourceName;
    }
    public withFirstDimensionName(firstDimensionName: string): ProductInstance {
        this['first_dimension_name'] = firstDimensionName;
        return this;
    }
    public set firstDimensionName(firstDimensionName: string  | undefined) {
        this['first_dimension_name'] = firstDimensionName;
    }
    public get firstDimensionName(): string | undefined {
        return this['first_dimension_name'];
    }
    public withFirstDimensionValue(firstDimensionValue: string): ProductInstance {
        this['first_dimension_value'] = firstDimensionValue;
        return this;
    }
    public set firstDimensionValue(firstDimensionValue: string  | undefined) {
        this['first_dimension_value'] = firstDimensionValue;
    }
    public get firstDimensionValue(): string | undefined {
        return this['first_dimension_value'];
    }
    public withResourceName(resourceName: string): ProductInstance {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
}