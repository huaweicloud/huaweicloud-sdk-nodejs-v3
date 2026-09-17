import { DasConnInfo } from './DasConnInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConnectionResponse extends SdkResponse {
    private 'total_record'?: number;
    private 'das_conn_info_list'?: Array<DasConnInfo>;
    public constructor() { 
        super();
    }
    public withTotalRecord(totalRecord: number): ListConnectionResponse {
        this['total_record'] = totalRecord;
        return this;
    }
    public set totalRecord(totalRecord: number  | undefined) {
        this['total_record'] = totalRecord;
    }
    public get totalRecord(): number | undefined {
        return this['total_record'];
    }
    public withDasConnInfoList(dasConnInfoList: Array<DasConnInfo>): ListConnectionResponse {
        this['das_conn_info_list'] = dasConnInfoList;
        return this;
    }
    public set dasConnInfoList(dasConnInfoList: Array<DasConnInfo>  | undefined) {
        this['das_conn_info_list'] = dasConnInfoList;
    }
    public get dasConnInfoList(): Array<DasConnInfo> | undefined {
        return this['das_conn_info_list'];
    }
}