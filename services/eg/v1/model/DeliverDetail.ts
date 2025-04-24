

export class DeliverDetail {
    public deliverTime?: string;
    public deliverStatus?: string;
    public deliverConsuming?: string;
    public deliverRspCode?: string;
    public constructor() { 
    }
    public withDeliverTime(deliverTime: string): DeliverDetail {
        this['deliverTime'] = deliverTime;
        return this;
    }
    public withDeliverStatus(deliverStatus: string): DeliverDetail {
        this['deliverStatus'] = deliverStatus;
        return this;
    }
    public withDeliverConsuming(deliverConsuming: string): DeliverDetail {
        this['deliverConsuming'] = deliverConsuming;
        return this;
    }
    public withDeliverRspCode(deliverRspCode: string): DeliverDetail {
        this['deliverRspCode'] = deliverRspCode;
        return this;
    }
}