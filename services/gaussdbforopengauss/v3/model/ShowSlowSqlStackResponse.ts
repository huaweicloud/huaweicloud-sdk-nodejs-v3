
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSlowSqlStackResponse extends SdkResponse {
    private 'gs_stack'?: string;
    public constructor() { 
        super();
    }
    public withGsStack(gsStack: string): ShowSlowSqlStackResponse {
        this['gs_stack'] = gsStack;
        return this;
    }
    public set gsStack(gsStack: string  | undefined) {
        this['gs_stack'] = gsStack;
    }
    public get gsStack(): string | undefined {
        return this['gs_stack'];
    }
}