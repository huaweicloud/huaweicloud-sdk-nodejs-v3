import { ReadWriteRatioList } from './ReadWriteRatioList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReadWriteRatioResponse extends SdkResponse {
    public totalRecord?: number;
    public readWriteRatioList?: Array<ReadWriteRatioList>;
    public constructor() { 
        super();
    }
    public withTotalRecord(totalRecord: number): ListReadWriteRatioResponse {
        this['totalRecord'] = totalRecord;
        return this;
    }
    public withReadWriteRatioList(readWriteRatioList: Array<ReadWriteRatioList>): ListReadWriteRatioResponse {
        this['readWriteRatioList'] = readWriteRatioList;
        return this;
    }
}