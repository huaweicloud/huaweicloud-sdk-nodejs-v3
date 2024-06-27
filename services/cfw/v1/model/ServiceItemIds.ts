import { ServiceItemIdsItems } from './ServiceItemIdsItems';


export class ServiceItemIds {
    public items?: Array<ServiceItemIdsItems>;
    public constructor() { 
    }
    public withItems(items: Array<ServiceItemIdsItems>): ServiceItemIds {
        this['items'] = items;
        return this;
    }
}