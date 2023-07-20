
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainLocationStatsResponse extends SdkResponse {
    private 'group_by'?: string;
    public result?: { [key: string]: object; };
    public constructor() { 
        super();
    }
    public withGroupBy(groupBy: string): ShowDomainLocationStatsResponse {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): string | undefined {
        return this['group_by'];
    }
    public withResult(result: { [key: string]: object; }): ShowDomainLocationStatsResponse {
        this['result'] = result;
        return this;
    }
}