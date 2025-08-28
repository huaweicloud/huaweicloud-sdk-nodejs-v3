import { InstructionLibraryInfo } from './InstructionLibraryInfo';
import { Pages } from './Pages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstructionLibraryResponse extends SdkResponse {
    public offset?: number;
    public limit?: number;
    public count?: number;
    public data?: Array<InstructionLibraryInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withOffset(offset: number): ListInstructionLibraryResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstructionLibraryResponse {
        this['limit'] = limit;
        return this;
    }
    public withCount(count: number): ListInstructionLibraryResponse {
        this['count'] = count;
        return this;
    }
    public withData(data: Array<InstructionLibraryInfo>): ListInstructionLibraryResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListInstructionLibraryResponse {
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