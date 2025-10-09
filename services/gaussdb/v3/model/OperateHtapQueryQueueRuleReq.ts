import { HtapQueryQueueRule } from './HtapQueryQueueRule';


export class OperateHtapQueryQueueRuleReq {
    private 'query_queue_rule'?: HtapQueryQueueRule;
    public constructor(queryQueueRule?: HtapQueryQueueRule) { 
        this['query_queue_rule'] = queryQueueRule;
    }
    public withQueryQueueRule(queryQueueRule: HtapQueryQueueRule): OperateHtapQueryQueueRuleReq {
        this['query_queue_rule'] = queryQueueRule;
        return this;
    }
    public set queryQueueRule(queryQueueRule: HtapQueryQueueRule  | undefined) {
        this['query_queue_rule'] = queryQueueRule;
    }
    public get queryQueueRule(): HtapQueryQueueRule | undefined {
        return this['query_queue_rule'];
    }
}