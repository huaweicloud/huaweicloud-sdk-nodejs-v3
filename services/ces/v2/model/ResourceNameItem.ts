

export class ResourceNameItem {
    private 'resource_name'?: string;
    public operator?: ResourceNameItemOperatorEnum | string;
    private 'resource_name_is_ignore_case'?: boolean;
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
    public withResourceNameIsIgnoreCase(resourceNameIsIgnoreCase: boolean): ResourceNameItem {
        this['resource_name_is_ignore_case'] = resourceNameIsIgnoreCase;
        return this;
    }
    public set resourceNameIsIgnoreCase(resourceNameIsIgnoreCase: boolean  | undefined) {
        this['resource_name_is_ignore_case'] = resourceNameIsIgnoreCase;
    }
    public get resourceNameIsIgnoreCase(): boolean | undefined {
        return this['resource_name_is_ignore_case'];
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
