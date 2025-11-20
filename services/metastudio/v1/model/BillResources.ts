import { BillResourceType } from './BillResourceType';


export class BillResources {
    private 'resource_type'?: BillResourceType;
    private 'resource_nums'?: number;
    public constructor() { 
    }
    public withResourceType(resourceType: BillResourceType): BillResources {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: BillResourceType  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): BillResourceType | undefined {
        return this['resource_type'];
    }
    public withResourceNums(resourceNums: number): BillResources {
        this['resource_nums'] = resourceNums;
        return this;
    }
    public set resourceNums(resourceNums: number  | undefined) {
        this['resource_nums'] = resourceNums;
    }
    public get resourceNums(): number | undefined {
        return this['resource_nums'];
    }
}