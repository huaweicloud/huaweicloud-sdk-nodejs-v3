import { ResourceTimeDetails } from './ResourceTimeDetails';


export class ResourceTime {
    private 'all_time'?: number;
    private 'resource_time_details'?: ResourceTimeDetails;
    public constructor(allTime?: number, resourceTimeDetails?: ResourceTimeDetails) { 
        this['all_time'] = allTime;
        this['resource_time_details'] = resourceTimeDetails;
    }
    public withAllTime(allTime: number): ResourceTime {
        this['all_time'] = allTime;
        return this;
    }
    public set allTime(allTime: number  | undefined) {
        this['all_time'] = allTime;
    }
    public get allTime(): number | undefined {
        return this['all_time'];
    }
    public withResourceTimeDetails(resourceTimeDetails: ResourceTimeDetails): ResourceTime {
        this['resource_time_details'] = resourceTimeDetails;
        return this;
    }
    public set resourceTimeDetails(resourceTimeDetails: ResourceTimeDetails  | undefined) {
        this['resource_time_details'] = resourceTimeDetails;
    }
    public get resourceTimeDetails(): ResourceTimeDetails | undefined {
        return this['resource_time_details'];
    }
}