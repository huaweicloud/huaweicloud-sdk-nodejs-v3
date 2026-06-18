import { MRConflictFileDto } from './MRConflictFileDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestConflictFilesResponse extends SdkResponse {
    public body?: Array<MRConflictFileDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MRConflictFileDto>): ListMergeRequestConflictFilesResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListMergeRequestConflictFilesResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}