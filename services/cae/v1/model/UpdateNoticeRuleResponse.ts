import { CreateNoticeRuleRespItem } from './CreateNoticeRuleRespItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNoticeRuleResponse extends SdkResponse {
    private 'api_version'?: string;
    public kind?: string;
    public spec?: CreateNoticeRuleRespItem;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): UpdateNoticeRuleResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withKind(kind: string): UpdateNoticeRuleResponse {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: CreateNoticeRuleRespItem): UpdateNoticeRuleResponse {
        this['spec'] = spec;
        return this;
    }
}