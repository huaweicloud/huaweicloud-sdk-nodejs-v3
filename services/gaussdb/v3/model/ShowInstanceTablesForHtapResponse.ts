
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceTablesForHtapResponse extends SdkResponse {
    public tables?: Array<string>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTables(tables: Array<string>): ShowInstanceTablesForHtapResponse {
        this['tables'] = tables;
        return this;
    }
    public withTotalCount(totalCount: number): ShowInstanceTablesForHtapResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}