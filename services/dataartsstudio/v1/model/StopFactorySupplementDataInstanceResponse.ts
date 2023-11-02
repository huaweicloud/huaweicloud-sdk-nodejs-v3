import { SupplementDataRespRows } from './SupplementDataRespRows';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopFactorySupplementDataInstanceResponse extends SdkResponse {
    public msg?: string;
    public rows?: Array<SupplementDataRespRows>;
    public success?: boolean;
    public total?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): StopFactorySupplementDataInstanceResponse {
        this['msg'] = msg;
        return this;
    }
    public withRows(rows: Array<SupplementDataRespRows>): StopFactorySupplementDataInstanceResponse {
        this['rows'] = rows;
        return this;
    }
    public withSuccess(success: boolean): StopFactorySupplementDataInstanceResponse {
        this['success'] = success;
        return this;
    }
    public withTotal(total: number): StopFactorySupplementDataInstanceResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): StopFactorySupplementDataInstanceResponse {
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