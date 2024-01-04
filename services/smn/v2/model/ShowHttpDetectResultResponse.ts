import { GetHttpDetectResponseBodyDetail } from './GetHttpDetectResponseBodyDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHttpDetectResultResponse extends SdkResponse {
    public detail?: GetHttpDetectResponseBodyDetail;
    public status?: ShowHttpDetectResultResponseStatusEnum | number;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withDetail(detail: GetHttpDetectResponseBodyDetail): ShowHttpDetectResultResponse {
        this['detail'] = detail;
        return this;
    }
    public withStatus(status: ShowHttpDetectResultResponseStatusEnum | number): ShowHttpDetectResultResponse {
        this['status'] = status;
        return this;
    }
    public withRequestId(requestId: string): ShowHttpDetectResultResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowHttpDetectResultResponseStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
