

export class ResourceNameItem {
    private 'resource_name'?: string;
    public operator?: ResourceNameItemOperatorEnum | string;
    public constructor(operator?: string) { 
        this['operator'] = operator;
    }
    public withResourceName(resourceName: string): ResourceNameItem {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withOperator(operator: ResourceNameItemOperatorEnum | string): ResourceNameItem {
        this['operator'] = operator;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceNameItemOperatorEnum {
    INCLUDE = 'include',
    PREFIX = 'prefix',
    SUFFIX = 'suffix',
    NOTINCLUDE = 'notInclude',
    EQUAL = 'equal',
    ALL = 'all'
}
