import { SlowLogTopInfo } from './SlowLogTopInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSlowLogTopInfoNewResponse extends SdkResponse {
    private 'top_user_list'?: Array<SlowLogTopInfo>;
    private 'top_ip_list'?: Array<SlowLogTopInfo>;
    private 'top_db_list'?: Array<SlowLogTopInfo>;
    public constructor() { 
        super();
    }
    public withTopUserList(topUserList: Array<SlowLogTopInfo>): ShowSlowLogTopInfoNewResponse {
        this['top_user_list'] = topUserList;
        return this;
    }
    public set topUserList(topUserList: Array<SlowLogTopInfo>  | undefined) {
        this['top_user_list'] = topUserList;
    }
    public get topUserList(): Array<SlowLogTopInfo> | undefined {
        return this['top_user_list'];
    }
    public withTopIpList(topIpList: Array<SlowLogTopInfo>): ShowSlowLogTopInfoNewResponse {
        this['top_ip_list'] = topIpList;
        return this;
    }
    public set topIpList(topIpList: Array<SlowLogTopInfo>  | undefined) {
        this['top_ip_list'] = topIpList;
    }
    public get topIpList(): Array<SlowLogTopInfo> | undefined {
        return this['top_ip_list'];
    }
    public withTopDbList(topDbList: Array<SlowLogTopInfo>): ShowSlowLogTopInfoNewResponse {
        this['top_db_list'] = topDbList;
        return this;
    }
    public set topDbList(topDbList: Array<SlowLogTopInfo>  | undefined) {
        this['top_db_list'] = topDbList;
    }
    public get topDbList(): Array<SlowLogTopInfo> | undefined {
        return this['top_db_list'];
    }
}