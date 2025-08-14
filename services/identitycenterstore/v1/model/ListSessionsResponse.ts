import { UserSessionDto } from './UserSessionDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSessionsResponse extends SdkResponse {
    private 'session_list'?: Array<UserSessionDto>;
    public constructor() { 
        super();
    }
    public withSessionList(sessionList: Array<UserSessionDto>): ListSessionsResponse {
        this['session_list'] = sessionList;
        return this;
    }
    public set sessionList(sessionList: Array<UserSessionDto>  | undefined) {
        this['session_list'] = sessionList;
    }
    public get sessionList(): Array<UserSessionDto> | undefined {
        return this['session_list'];
    }
}