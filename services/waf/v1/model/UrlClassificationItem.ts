import { UrlItem } from './UrlItem';


export class UrlClassificationItem {
    public total?: number;
    public items?: Array<UrlItem>;
    public constructor() { 
    }
    public withTotal(total: number): UrlClassificationItem {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<UrlItem>): UrlClassificationItem {
        this['items'] = items;
        return this;
    }
}