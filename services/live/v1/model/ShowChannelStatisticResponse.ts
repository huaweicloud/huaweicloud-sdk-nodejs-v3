import { SCTE35StatisticRsp } from './SCTE35StatisticRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowChannelStatisticResponse extends SdkResponse {
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    public type?: ShowChannelStatisticResponseTypeEnum | string;
    public scte35?: SCTE35StatisticRsp;
    public constructor() { 
        super();
    }
    public withDomain(domain: string): ShowChannelStatisticResponse {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): ShowChannelStatisticResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): ShowChannelStatisticResponse {
        this['id'] = id;
        return this;
    }
    public withType(type: ShowChannelStatisticResponseTypeEnum | string): ShowChannelStatisticResponse {
        this['type'] = type;
        return this;
    }
    public withScte35(scte35: SCTE35StatisticRsp): ShowChannelStatisticResponse {
        this['scte35'] = scte35;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowChannelStatisticResponseTypeEnum {
    SCTE35 = 'scte35'
}
