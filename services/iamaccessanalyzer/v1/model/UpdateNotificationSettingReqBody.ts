

export class UpdateNotificationSettingReqBody {
    private 'mc_switch'?: boolean;
    private 'smn_topic_urns'?: Array<string>;
    public constructor(mcSwitch?: boolean, smnTopicUrns?: Array<string>) { 
        this['mc_switch'] = mcSwitch;
        this['smn_topic_urns'] = smnTopicUrns;
    }
    public withMcSwitch(mcSwitch: boolean): UpdateNotificationSettingReqBody {
        this['mc_switch'] = mcSwitch;
        return this;
    }
    public set mcSwitch(mcSwitch: boolean  | undefined) {
        this['mc_switch'] = mcSwitch;
    }
    public get mcSwitch(): boolean | undefined {
        return this['mc_switch'];
    }
    public withSmnTopicUrns(smnTopicUrns: Array<string>): UpdateNotificationSettingReqBody {
        this['smn_topic_urns'] = smnTopicUrns;
        return this;
    }
    public set smnTopicUrns(smnTopicUrns: Array<string>  | undefined) {
        this['smn_topic_urns'] = smnTopicUrns;
    }
    public get smnTopicUrns(): Array<string> | undefined {
        return this['smn_topic_urns'];
    }
}