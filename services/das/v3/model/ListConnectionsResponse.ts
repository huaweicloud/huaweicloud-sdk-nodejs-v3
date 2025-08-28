import { ApiListConnectionsInfoRespDasConnInfoList } from './ApiListConnectionsInfoRespDasConnInfoList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConnectionsResponse extends SdkResponse {
    private 'total_record'?: number;
    private 'das_conn_info_list'?: Array<ApiListConnectionsInfoRespDasConnInfoList>;
    public constructor() { 
        super();
    }
    public withTotalRecord(totalRecord: number): ListConnectionsResponse {
        this['total_record'] = totalRecord;
        return this;
    }
    public set totalRecord(totalRecord: number  | undefined) {
        this['total_record'] = totalRecord;
    }
    public get totalRecord(): number | undefined {
        return this['total_record'];
    }
    public withDasConnInfoList(dasConnInfoList: Array<ApiListConnectionsInfoRespDasConnInfoList>): ListConnectionsResponse {
        this['das_conn_info_list'] = dasConnInfoList;
        return this;
    }
    public set dasConnInfoList(dasConnInfoList: Array<ApiListConnectionsInfoRespDasConnInfoList>  | undefined) {
        this['das_conn_info_list'] = dasConnInfoList;
    }
    public get dasConnInfoList(): Array<ApiListConnectionsInfoRespDasConnInfoList> | undefined {
        return this['das_conn_info_list'];
    }
}