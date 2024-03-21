import { SourceRsp } from './SourceRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteOttChannelInfoResponse extends SdkResponse {
    private 'result_code'?: string;
    private 'result_msg'?: string;
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    public sources?: Array<SourceRsp>;
    public constructor() { 
        super();
    }
    public withResultCode(resultCode: string): DeleteOttChannelInfoResponse {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: string  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): string | undefined {
        return this['result_code'];
    }
    public withResultMsg(resultMsg: string): DeleteOttChannelInfoResponse {
        this['result_msg'] = resultMsg;
        return this;
    }
    public set resultMsg(resultMsg: string  | undefined) {
        this['result_msg'] = resultMsg;
    }
    public get resultMsg(): string | undefined {
        return this['result_msg'];
    }
    public withDomain(domain: string): DeleteOttChannelInfoResponse {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): DeleteOttChannelInfoResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): DeleteOttChannelInfoResponse {
        this['id'] = id;
        return this;
    }
    public withSources(sources: Array<SourceRsp>): DeleteOttChannelInfoResponse {
        this['sources'] = sources;
        return this;
    }
}