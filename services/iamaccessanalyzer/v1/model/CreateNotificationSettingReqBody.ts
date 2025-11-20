

export class CreateNotificationSettingReqBody {
    private 'analyzer_id'?: string;
    private 'mc_switch'?: boolean;
    private 'smn_topic_urns'?: Array<string>;
    public constructor(analyzerId?: string, mcSwitch?: boolean, smnTopicUrns?: Array<string>) { 
        this['analyzer_id'] = analyzerId;
        this['mc_switch'] = mcSwitch;
        this['smn_topic_urns'] = smnTopicUrns;
    }
    public withAnalyzerId(analyzerId: string): CreateNotificationSettingReqBody {
        this['analyzer_id'] = analyzerId;
        return this;
    }
    public set analyzerId(analyzerId: string  | undefined) {
        this['analyzer_id'] = analyzerId;
    }
    public get analyzerId(): string | undefined {
        return this['analyzer_id'];
    }
    public withMcSwitch(mcSwitch: boolean): CreateNotificationSettingReqBody {
        this['mc_switch'] = mcSwitch;
        return this;
    }
    public set mcSwitch(mcSwitch: boolean  | undefined) {
        this['mc_switch'] = mcSwitch;
    }
    public get mcSwitch(): boolean | undefined {
        return this['mc_switch'];
    }
    public withSmnTopicUrns(smnTopicUrns: Array<string>): CreateNotificationSettingReqBody {
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