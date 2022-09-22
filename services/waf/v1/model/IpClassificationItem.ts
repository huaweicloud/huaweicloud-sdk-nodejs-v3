import { IpItem } from './IpItem';


export class IpClassificationItem {
    public total?: number;
    public items?: Array<IpItem>;
    public constructor() { 
    }
    public withTotal(total: number): IpClassificationItem {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<IpItem>): IpClassificationItem {
        this['items'] = items;
        return this;
    }
}