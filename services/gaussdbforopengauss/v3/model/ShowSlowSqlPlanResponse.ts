
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSlowSqlPlanResponse extends SdkResponse {
    private 'gs_explain'?: string;
    public constructor() { 
        super();
    }
    public withGsExplain(gsExplain: string): ShowSlowSqlPlanResponse {
        this['gs_explain'] = gsExplain;
        return this;
    }
    public set gsExplain(gsExplain: string  | undefined) {
        this['gs_explain'] = gsExplain;
    }
    public get gsExplain(): string | undefined {
        return this['gs_explain'];
    }
}