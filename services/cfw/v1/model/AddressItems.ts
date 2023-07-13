import { IdObject } from './IdObject';


export class AddressItems {
    public items?: Array<IdObject>;
    public constructor() { 
    }
    public withItems(items: Array<IdObject>): AddressItems {
        this['items'] = items;
        return this;
    }
}