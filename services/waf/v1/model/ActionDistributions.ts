import { TypedStatBucket } from './TypedStatBucket';


export class ActionDistributions {
    public total?: number;
    public items?: Array<TypedStatBucket>;
    public constructor() { 
    }
    public withTotal(total: number): ActionDistributions {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<TypedStatBucket>): ActionDistributions {
        this['items'] = items;
        return this;
    }
}