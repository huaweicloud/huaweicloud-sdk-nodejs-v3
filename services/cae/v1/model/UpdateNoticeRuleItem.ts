import { NoticeRuleScope } from './NoticeRuleScope';
import { TriggerPolicy } from './TriggerPolicy';


export class UpdateNoticeRuleItem {
    private 'event_name'?: UpdateNoticeRuleItemEventNameEnum | string;
    public scope?: NoticeRuleScope;
    private 'trigger_policy'?: TriggerPolicy;
    public enable?: boolean;
    public constructor(scope?: NoticeRuleScope, triggerPolicy?: TriggerPolicy) { 
        this['scope'] = scope;
        this['trigger_policy'] = triggerPolicy;
    }
    public withEventName(eventName: UpdateNoticeRuleItemEventNameEnum | string): UpdateNoticeRuleItem {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: UpdateNoticeRuleItemEventNameEnum | string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): UpdateNoticeRuleItemEventNameEnum | string | undefined {
        return this['event_name'];
    }
    public withScope(scope: NoticeRuleScope): UpdateNoticeRuleItem {
        this['scope'] = scope;
        return this;
    }
    public withTriggerPolicy(triggerPolicy: TriggerPolicy): UpdateNoticeRuleItem {
        this['trigger_policy'] = triggerPolicy;
        return this;
    }
    public set triggerPolicy(triggerPolicy: TriggerPolicy  | undefined) {
        this['trigger_policy'] = triggerPolicy;
    }
    public get triggerPolicy(): TriggerPolicy | undefined {
        return this['trigger_policy'];
    }
    public withEnable(enable: boolean): UpdateNoticeRuleItem {
        this['enable'] = enable;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateNoticeRuleItemEventNameEnum {
    SCHEDULED = 'Scheduled',
    FAILEDSCHEDULING = 'FailedScheduling',
    HEALTHY = 'Healthy',
    UNHEALTHY = 'Unhealthy',
    PULLED = 'Pulled',
    FAILEDPULLIMAGE = 'FailedPullImage',
    STARTED = 'Started',
    BACKOFFSTART = 'BackOffStart',
    SUCCESSFULMOUNTVOLUME = 'SuccessfulMountVolume',
    FAILEDMOUNT = 'FailedMount'
}
