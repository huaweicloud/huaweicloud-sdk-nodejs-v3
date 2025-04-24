import { TransForm } from './TransForm';


export class EventStreamingCreateReqRuleConfig {
    public transform?: TransForm;
    public filter?: object;
    public constructor() { 
    }
    public withTransform(transform: TransForm): EventStreamingCreateReqRuleConfig {
        this['transform'] = transform;
        return this;
    }
    public withFilter(filter: object): EventStreamingCreateReqRuleConfig {
        this['filter'] = filter;
        return this;
    }
}