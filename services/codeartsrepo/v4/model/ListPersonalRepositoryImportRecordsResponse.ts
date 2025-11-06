import { RepositoryImportRecordDto } from './RepositoryImportRecordDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPersonalRepositoryImportRecordsResponse extends SdkResponse {
    public body?: Array<RepositoryImportRecordDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RepositoryImportRecordDto>): ListPersonalRepositoryImportRecordsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListPersonalRepositoryImportRecordsResponse {
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