import { NoticeRuleNotification } from './NoticeRuleNotification';
import { NoticeRuleScope } from './NoticeRuleScope';
import { TriggerPolicy } from './TriggerPolicy';


export class CreateNoticeRuleRespItem {
    public id?: string;
    public name?: string;
    private 'event_name'?: string;
    public scope?: NoticeRuleScope;
    private 'trigger_policy'?: TriggerPolicy;
    public notification?: NoticeRuleNotification;
    public enable?: boolean;
    public constructor() { 
    }
    public withId(id: string): CreateNoticeRuleRespItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateNoticeRuleRespItem {
        this['name'] = name;
        return this;
    }
    public withEventName(eventName: string): CreateNoticeRuleRespItem {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withScope(scope: NoticeRuleScope): CreateNoticeRuleRespItem {
        this['scope'] = scope;
        return this;
    }
    public withTriggerPolicy(triggerPolicy: TriggerPolicy): CreateNoticeRuleRespItem {
        this['trigger_policy'] = triggerPolicy;
        return this;
    }
    public set triggerPolicy(triggerPolicy: TriggerPolicy  | undefined) {
        this['trigger_policy'] = triggerPolicy;
    }
    public get triggerPolicy(): TriggerPolicy | undefined {
        return this['trigger_policy'];
    }
    public withNotification(notification: NoticeRuleNotification): CreateNoticeRuleRespItem {
        this['notification'] = notification;
        return this;
    }
    public withEnable(enable: boolean): CreateNoticeRuleRespItem {
        this['enable'] = enable;
        return this;
    }
}