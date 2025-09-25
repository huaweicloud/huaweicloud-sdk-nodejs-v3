import { ResourceWaitEvenTimeDetails } from './ResourceWaitEvenTimeDetails';


export class ResourceWaitEventTime {
    private 'all_time'?: number;
    private 'resource_wait_event_time_details'?: ResourceWaitEvenTimeDetails;
    private 'other_time'?: number;
    public constructor(allTime?: number, resourceWaitEventTimeDetails?: ResourceWaitEvenTimeDetails) { 
        this['all_time'] = allTime;
        this['resource_wait_event_time_details'] = resourceWaitEventTimeDetails;
    }
    public withAllTime(allTime: number): ResourceWaitEventTime {
        this['all_time'] = allTime;
        return this;
    }
    public set allTime(allTime: number  | undefined) {
        this['all_time'] = allTime;
    }
    public get allTime(): number | undefined {
        return this['all_time'];
    }
    public withResourceWaitEventTimeDetails(resourceWaitEventTimeDetails: ResourceWaitEvenTimeDetails): ResourceWaitEventTime {
        this['resource_wait_event_time_details'] = resourceWaitEventTimeDetails;
        return this;
    }
    public set resourceWaitEventTimeDetails(resourceWaitEventTimeDetails: ResourceWaitEvenTimeDetails  | undefined) {
        this['resource_wait_event_time_details'] = resourceWaitEventTimeDetails;
    }
    public get resourceWaitEventTimeDetails(): ResourceWaitEvenTimeDetails | undefined {
        return this['resource_wait_event_time_details'];
    }
    public withOtherTime(otherTime: number): ResourceWaitEventTime {
        this['other_time'] = otherTime;
        return this;
    }
    public set otherTime(otherTime: number  | undefined) {
        this['other_time'] = otherTime;
    }
    public get otherTime(): number | undefined {
        return this['other_time'];
    }
}