import { AppSession } from './AppSession';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSessionByUserNameResponse extends SdkResponse {
    private 'session_info_list'?: Array<AppSession>;
    public constructor() { 
        super();
    }
    public withSessionInfoList(sessionInfoList: Array<AppSession>): ListSessionByUserNameResponse {
        this['session_info_list'] = sessionInfoList;
        return this;
    }
    public set sessionInfoList(sessionInfoList: Array<AppSession>  | undefined) {
        this['session_info_list'] = sessionInfoList;
    }
    public get sessionInfoList(): Array<AppSession> | undefined {
        return this['session_info_list'];
    }
}