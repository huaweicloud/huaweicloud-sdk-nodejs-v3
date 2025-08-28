import { InstructionInfo } from './InstructionInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstructionResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<InstructionInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListInstructionResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstructionResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListInstructionResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<InstructionInfo>): ListInstructionResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListInstructionResponse {
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