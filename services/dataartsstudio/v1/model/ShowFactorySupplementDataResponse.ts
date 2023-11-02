import { SupplementDataRespRows } from './SupplementDataRespRows';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFactorySupplementDataResponse extends SdkResponse {
    public msg?: string;
    public rows?: Array<SupplementDataRespRows>;
    public success?: boolean;
    public total?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): ShowFactorySupplementDataResponse {
        this['msg'] = msg;
        return this;
    }
    public withRows(rows: Array<SupplementDataRespRows>): ShowFactorySupplementDataResponse {
        this['rows'] = rows;
        return this;
    }
    public withSuccess(success: boolean): ShowFactorySupplementDataResponse {
        this['success'] = success;
        return this;
    }
    public withTotal(total: number): ShowFactorySupplementDataResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowFactorySupplementDataResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}