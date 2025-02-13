import { CreateNoticeRuleRespItem } from './CreateNoticeRuleRespItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNoticeRulesResponse extends SdkResponse {
    private 'api_version'?: string;
    public kind?: string;
    public items?: Array<CreateNoticeRuleRespItem>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListNoticeRulesResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withKind(kind: string): ListNoticeRulesResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<CreateNoticeRuleRespItem>): ListNoticeRulesResponse {
        this['items'] = items;
        return this;
    }
}