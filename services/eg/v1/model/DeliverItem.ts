import { DeliverTarget } from './DeliverTarget';


export class DeliverItem {
    public subscriptionId?: string;
    public subscriptionName?: string;
    public successCounts?: number;
    public failCounts?: number;
    public allDeliverTimes?: number;
    public deliverTargetList?: Array<DeliverTarget>;
    public constructor() { 
    }
    public withSubscriptionId(subscriptionId: string): DeliverItem {
        this['subscriptionId'] = subscriptionId;
        return this;
    }
    public withSubscriptionName(subscriptionName: string): DeliverItem {
        this['subscriptionName'] = subscriptionName;
        return this;
    }
    public withSuccessCounts(successCounts: number): DeliverItem {
        this['successCounts'] = successCounts;
        return this;
    }
    public withFailCounts(failCounts: number): DeliverItem {
        this['failCounts'] = failCounts;
        return this;
    }
    public withAllDeliverTimes(allDeliverTimes: number): DeliverItem {
        this['allDeliverTimes'] = allDeliverTimes;
        return this;
    }
    public withDeliverTargetList(deliverTargetList: Array<DeliverTarget>): DeliverItem {
        this['deliverTargetList'] = deliverTargetList;
        return this;
    }
}