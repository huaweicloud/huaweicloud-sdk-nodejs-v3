import { DeliverDetail } from './DeliverDetail';


export class DeliverTarget {
    public deliverTargetId?: string;
    public deliverTargetName?: string;
    public deliverStatus?: string;
    public deliverDetailList?: Array<DeliverDetail>;
    public constructor() { 
    }
    public withDeliverTargetId(deliverTargetId: string): DeliverTarget {
        this['deliverTargetId'] = deliverTargetId;
        return this;
    }
    public withDeliverTargetName(deliverTargetName: string): DeliverTarget {
        this['deliverTargetName'] = deliverTargetName;
        return this;
    }
    public withDeliverStatus(deliverStatus: string): DeliverTarget {
        this['deliverStatus'] = deliverStatus;
        return this;
    }
    public withDeliverDetailList(deliverDetailList: Array<DeliverDetail>): DeliverTarget {
        this['deliverDetailList'] = deliverDetailList;
        return this;
    }
}