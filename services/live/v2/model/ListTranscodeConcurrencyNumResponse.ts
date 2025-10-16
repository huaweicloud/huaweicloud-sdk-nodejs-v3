import { TranscodeConNumData } from './TranscodeConNumData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTranscodeConcurrencyNumResponse extends SdkResponse {
    private 'data_list'?: Array<TranscodeConNumData>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<TranscodeConNumData>): ListTranscodeConcurrencyNumResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<TranscodeConNumData>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<TranscodeConNumData> | undefined {
        return this['data_list'];
    }
    public withXRequestId(xRequestId: string): ListTranscodeConcurrencyNumResponse {
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