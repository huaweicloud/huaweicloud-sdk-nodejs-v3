import { NoticeRuleNotification } from './NoticeRuleNotification';
import { NoticeRuleScope } from './NoticeRuleScope';
import { TriggerPolicy } from './TriggerPolicy';


export class CreateNoticeRuleItem {
    public name?: string;
    private 'event_name'?: CreateNoticeRuleItemEventNameEnum | string;
    public scope?: NoticeRuleScope;
    private 'trigger_policy'?: TriggerPolicy;
    public notification?: NoticeRuleNotification;
    public enable?: boolean;
    public constructor(name?: string, scope?: NoticeRuleScope, triggerPolicy?: TriggerPolicy, notification?: NoticeRuleNotification) { 
        this['name'] = name;
        this['scope'] = scope;
        this['trigger_policy'] = triggerPolicy;
        this['notification'] = notification;
    }
    public withName(name: string): CreateNoticeRuleItem {
        this['name'] = name;
        return this;
    }
    public withEventName(eventName: CreateNoticeRuleItemEventNameEnum | string): CreateNoticeRuleItem {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: CreateNoticeRuleItemEventNameEnum | string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): CreateNoticeRuleItemEventNameEnum | string | undefined {
        return this['event_name'];
    }
    public withScope(scope: NoticeRuleScope): CreateNoticeRuleItem {
        this['scope'] = scope;
        return this;
    }
    public withTriggerPolicy(triggerPolicy: TriggerPolicy): CreateNoticeRuleItem {
        this['trigger_policy'] = triggerPolicy;
        return this;
    }
    public set triggerPolicy(triggerPolicy: TriggerPolicy  | undefined) {
        this['trigger_policy'] = triggerPolicy;
    }
    public get triggerPolicy(): TriggerPolicy | undefined {
        return this['trigger_policy'];
    }
    public withNotification(notification: NoticeRuleNotification): CreateNoticeRuleItem {
        this['notification'] = notification;
        return this;
    }
    public withEnable(enable: boolean): CreateNoticeRuleItem {
        this['enable'] = enable;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateNoticeRuleItemEventNameEnum {
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
