import { ApiVersionObj } from './ApiVersionObj';
import { TimeRuleKindObj } from './TimeRuleKindObj';
import { TimerRuleDetails } from './TimerRuleDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTimerRulesResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: TimeRuleKindObj;
    public items?: Array<TimerRuleDetails>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ListTimerRulesResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: TimeRuleKindObj): ListTimerRulesResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<TimerRuleDetails>): ListTimerRulesResponse {
        this['items'] = items;
        return this;
    }
}