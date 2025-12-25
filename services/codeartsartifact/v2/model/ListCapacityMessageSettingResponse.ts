import { CapacitySettingVO } from './CapacitySettingVO';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCapacityMessageSettingResponse extends SdkResponse {
    public status?: ListCapacityMessageSettingResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: CapacitySettingVO;
    public constructor() { 
        super();
    }
    public withStatus(status: ListCapacityMessageSettingResponseStatusEnum | string): ListCapacityMessageSettingResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListCapacityMessageSettingResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: CapacitySettingVO): ListCapacityMessageSettingResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCapacityMessageSettingResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
