import { OperateRecord } from './OperateRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOperateRecordResponse extends SdkResponse {
    public count?: number;
    public traces?: Array<OperateRecord>;
    private 'all_operate_type'?: Array<string>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListOperateRecordResponse {
        this['count'] = count;
        return this;
    }
    public withTraces(traces: Array<OperateRecord>): ListOperateRecordResponse {
        this['traces'] = traces;
        return this;
    }
    public withAllOperateType(allOperateType: Array<string>): ListOperateRecordResponse {
        this['all_operate_type'] = allOperateType;
        return this;
    }
    public set allOperateType(allOperateType: Array<string>  | undefined) {
        this['all_operate_type'] = allOperateType;
    }
    public get allOperateType(): Array<string> | undefined {
        return this['all_operate_type'];
    }
}