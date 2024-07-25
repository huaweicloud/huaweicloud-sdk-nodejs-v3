

export class ScanJobRequest {
    private 'asset_ids'?: Array<string>;
    public cycle?: ScanJobRequestCycleEnum | string;
    public name?: string;
    public open?: boolean;
    private 'rule_group_ids'?: Array<string>;
    private 'start_time'?: number;
    private 'time_zone'?: string;
    private 'topic_urn'?: string;
    private 'use_nlp'?: boolean;
    public constructor(assetIds?: Array<string>, cycle?: string, name?: string, ruleGroupIds?: Array<string>) { 
        this['asset_ids'] = assetIds;
        this['cycle'] = cycle;
        this['name'] = name;
        this['rule_group_ids'] = ruleGroupIds;
    }
    public withAssetIds(assetIds: Array<string>): ScanJobRequest {
        this['asset_ids'] = assetIds;
        return this;
    }
    public set assetIds(assetIds: Array<string>  | undefined) {
        this['asset_ids'] = assetIds;
    }
    public get assetIds(): Array<string> | undefined {
        return this['asset_ids'];
    }
    public withCycle(cycle: ScanJobRequestCycleEnum | string): ScanJobRequest {
        this['cycle'] = cycle;
        return this;
    }
    public withName(name: string): ScanJobRequest {
        this['name'] = name;
        return this;
    }
    public withOpen(open: boolean): ScanJobRequest {
        this['open'] = open;
        return this;
    }
    public withRuleGroupIds(ruleGroupIds: Array<string>): ScanJobRequest {
        this['rule_group_ids'] = ruleGroupIds;
        return this;
    }
    public set ruleGroupIds(ruleGroupIds: Array<string>  | undefined) {
        this['rule_group_ids'] = ruleGroupIds;
    }
    public get ruleGroupIds(): Array<string> | undefined {
        return this['rule_group_ids'];
    }
    public withStartTime(startTime: number): ScanJobRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTimeZone(timeZone: string): ScanJobRequest {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withTopicUrn(topicUrn: string): ScanJobRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withUseNlp(useNlp: boolean): ScanJobRequest {
        this['use_nlp'] = useNlp;
        return this;
    }
    public set useNlp(useNlp: boolean  | undefined) {
        this['use_nlp'] = useNlp;
    }
    public get useNlp(): boolean | undefined {
        return this['use_nlp'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScanJobRequestCycleEnum {
    ONCE = 'ONCE',
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH'
}
