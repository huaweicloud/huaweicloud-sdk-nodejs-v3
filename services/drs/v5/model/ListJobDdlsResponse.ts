import { DdlAlarmResp } from './DdlAlarmResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobDdlsResponse extends SdkResponse {
    private 'ddl_list'?: Array<DdlAlarmResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withDdlList(ddlList: Array<DdlAlarmResp>): ListJobDdlsResponse {
        this['ddl_list'] = ddlList;
        return this;
    }
    public set ddlList(ddlList: Array<DdlAlarmResp>  | undefined) {
        this['ddl_list'] = ddlList;
    }
    public get ddlList(): Array<DdlAlarmResp> | undefined {
        return this['ddl_list'];
    }
    public withCount(count: number): ListJobDdlsResponse {
        this['count'] = count;
        return this;
    }
}