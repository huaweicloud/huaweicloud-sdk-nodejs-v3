import { CreateNoticeRuleRespItem } from './CreateNoticeRuleRespItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNoticeRuleResponse extends SdkResponse {
    private 'api_version'?: string;
    public kind?: string;
    public spec?: CreateNoticeRuleRespItem;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowNoticeRuleResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withKind(kind: string): ShowNoticeRuleResponse {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: CreateNoticeRuleRespItem): ShowNoticeRuleResponse {
        this['spec'] = spec;
        return this;
    }
}