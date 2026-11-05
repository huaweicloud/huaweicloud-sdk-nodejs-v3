import { ServiceOpenItem } from './ServiceOpenItem';


export class ServiceBatchOpenRequest {
    private 'service_list'?: Array<ServiceOpenItem>;
    public constructor() { 
    }
    public withServiceList(serviceList: Array<ServiceOpenItem>): ServiceBatchOpenRequest {
        this['service_list'] = serviceList;
        return this;
    }
    public set serviceList(serviceList: Array<ServiceOpenItem>  | undefined) {
        this['service_list'] = serviceList;
    }
    public get serviceList(): Array<ServiceOpenItem> | undefined {
        return this['service_list'];
    }
}