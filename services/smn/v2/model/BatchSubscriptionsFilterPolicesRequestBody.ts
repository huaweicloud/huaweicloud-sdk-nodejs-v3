import { BatchSubscriptionsFilterPolicesRequestBodyPolices } from './BatchSubscriptionsFilterPolicesRequestBodyPolices';


export class BatchSubscriptionsFilterPolicesRequestBody {
    public polices?: Array<BatchSubscriptionsFilterPolicesRequestBodyPolices>;
    public constructor(polices?: Array<BatchSubscriptionsFilterPolicesRequestBodyPolices>) { 
        this['polices'] = polices;
    }
    public withPolices(polices: Array<BatchSubscriptionsFilterPolicesRequestBodyPolices>): BatchSubscriptionsFilterPolicesRequestBody {
        this['polices'] = polices;
        return this;
    }
}