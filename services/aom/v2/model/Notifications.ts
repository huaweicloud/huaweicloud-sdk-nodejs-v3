import { SmnResponse } from './SmnResponse';


export class Notifications {
    private 'action_rule'?: string;
    private 'notifier_channel'?: NotificationsNotifierChannelEnum | string;
    private 'smn_channel'?: SmnResponse;
    public constructor() { 
    }
    public withActionRule(actionRule: string): Notifications {
        this['action_rule'] = actionRule;
        return this;
    }
    public set actionRule(actionRule: string  | undefined) {
        this['action_rule'] = actionRule;
    }
    public get actionRule(): string | undefined {
        return this['action_rule'];
    }
    public withNotifierChannel(notifierChannel: NotificationsNotifierChannelEnum | string): Notifications {
        this['notifier_channel'] = notifierChannel;
        return this;
    }
    public set notifierChannel(notifierChannel: NotificationsNotifierChannelEnum | string  | undefined) {
        this['notifier_channel'] = notifierChannel;
    }
    public get notifierChannel(): NotificationsNotifierChannelEnum | string | undefined {
        return this['notifier_channel'];
    }
    public withSmnChannel(smnChannel: SmnResponse): Notifications {
        this['smn_channel'] = smnChannel;
        return this;
    }
    public set smnChannel(smnChannel: SmnResponse  | undefined) {
        this['smn_channel'] = smnChannel;
    }
    public get smnChannel(): SmnResponse | undefined {
        return this['smn_channel'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NotificationsNotifierChannelEnum {
    SMN = 'SMN'
}
