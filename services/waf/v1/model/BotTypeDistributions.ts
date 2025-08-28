import { TypedStatBucket } from './TypedStatBucket';


export class BotTypeDistributions {
    public total?: number;
    public items?: Array<TypedStatBucket>;
    public constructor() { 
    }
    public withTotal(total: number): BotTypeDistributions {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<TypedStatBucket>): BotTypeDistributions {
        this['items'] = items;
        return this;
    }
}