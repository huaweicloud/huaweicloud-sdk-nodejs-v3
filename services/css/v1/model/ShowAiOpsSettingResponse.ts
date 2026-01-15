
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAiOpsSettingResponse extends SdkResponse {
    private 'check_type'?: string;
    private 'check_items'?: Array<string>;
    public period?: string;
    public constructor() { 
        super();
    }
    public withCheckType(checkType: string): ShowAiOpsSettingResponse {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withCheckItems(checkItems: Array<string>): ShowAiOpsSettingResponse {
        this['check_items'] = checkItems;
        return this;
    }
    public set checkItems(checkItems: Array<string>  | undefined) {
        this['check_items'] = checkItems;
    }
    public get checkItems(): Array<string> | undefined {
        return this['check_items'];
    }
    public withPeriod(period: string): ShowAiOpsSettingResponse {
        this['period'] = period;
        return this;
    }
}