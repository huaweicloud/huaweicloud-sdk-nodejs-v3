import { IdObject } from './IdObject';


export class ServiceItemIds {
    public items?: Array<IdObject>;
    public constructor() { 
    }
    public withItems(items: Array<IdObject>): ServiceItemIds {
        this['items'] = items;
        return this;
    }
}