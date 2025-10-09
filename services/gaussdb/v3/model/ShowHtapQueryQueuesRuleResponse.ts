import { HtapQueryQueueRule } from './HtapQueryQueueRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHtapQueryQueuesRuleResponse extends SdkResponse {
    private 'query_queue_rule'?: HtapQueryQueueRule;
    public constructor() { 
        super();
    }
    public withQueryQueueRule(queryQueueRule: HtapQueryQueueRule): ShowHtapQueryQueuesRuleResponse {
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