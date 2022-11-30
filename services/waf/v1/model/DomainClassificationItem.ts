import { DomainItem } from './DomainItem';


export class DomainClassificationItem {
    public total?: number;
    public items?: Array<DomainItem>;
    public constructor() { 
    }
    public withTotal(total: number): DomainClassificationItem {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<DomainItem>): DomainClassificationItem {
        this['items'] = items;
        return this;
    }
}