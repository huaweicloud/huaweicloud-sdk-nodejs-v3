import { GeoItem } from './GeoItem';


export class GeoClassificationItem {
    public total?: number;
    public items?: Array<GeoItem>;
    public constructor() { 
    }
    public withTotal(total: number): GeoClassificationItem {
        this['total'] = total;
        return this;
    }
    public withItems(items: Array<GeoItem>): GeoClassificationItem {
        this['items'] = items;
        return this;
    }
}