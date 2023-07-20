import { RecordData } from './RecordData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecordDataResponse extends SdkResponse {
    private 'record_data_list'?: Array<RecordData>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRecordDataList(recordDataList: Array<RecordData>): ListRecordDataResponse {
        this['record_data_list'] = recordDataList;
        return this;
    }
    public set recordDataList(recordDataList: Array<RecordData>  | undefined) {
        this['record_data_list'] = recordDataList;
    }
    public get recordDataList(): Array<RecordData> | undefined {
        return this['record_data_list'];
    }
    public withXRequestId(xRequestId: string): ListRecordDataResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}