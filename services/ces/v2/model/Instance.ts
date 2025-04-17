import { ResourceNameItem } from './ResourceNameItem';


export class Instance {
    private 'product_name'?: string;
    private 'logical_operator'?: InstanceLogicalOperatorEnum | string;
    private 'instance_names'?: Array<ResourceNameItem>;
    public constructor(productName?: string, logicalOperator?: string, instanceNames?: Array<ResourceNameItem>) { 
        this['product_name'] = productName;
        this['logical_operator'] = logicalOperator;
        this['instance_names'] = instanceNames;
    }
    public withProductName(productName: string): Instance {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withLogicalOperator(logicalOperator: InstanceLogicalOperatorEnum | string): Instance {
        this['logical_operator'] = logicalOperator;
        return this;
    }
    public set logicalOperator(logicalOperator: InstanceLogicalOperatorEnum | string  | undefined) {
        this['logical_operator'] = logicalOperator;
    }
    public get logicalOperator(): InstanceLogicalOperatorEnum | string | undefined {
        return this['logical_operator'];
    }
    public withInstanceNames(instanceNames: Array<ResourceNameItem>): Instance {
        this['instance_names'] = instanceNames;
        return this;
    }
    public set instanceNames(instanceNames: Array<ResourceNameItem>  | undefined) {
        this['instance_names'] = instanceNames;
    }
    public get instanceNames(): Array<ResourceNameItem> | undefined {
        return this['instance_names'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstanceLogicalOperatorEnum {
    ALL = 'ALL',
    ANY = 'ANY'
}
