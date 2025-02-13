import { CreateNoticeRuleRespItem } from './CreateNoticeRuleRespItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNoticeRuleResponse extends SdkResponse {
    private 'api_version'?: string;
    public kind?: string;
    public spec?: CreateNoticeRuleRespItem;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): CreateNoticeRuleResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withKind(kind: string): CreateNoticeRuleResponse {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: CreateNoticeRuleRespItem): CreateNoticeRuleResponse {
        this['spec'] = spec;
        return this;
    }
}