import { AntiVirusHandleHistory } from './AntiVirusHandleHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAntivirusHandleHistoryResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AntiVirusHandleHistory>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAntivirusHandleHistoryResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AntiVirusHandleHistory>): ListAntivirusHandleHistoryResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AntiVirusHandleHistory>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AntiVirusHandleHistory> | undefined {
        return this['data_list'];
    }
}