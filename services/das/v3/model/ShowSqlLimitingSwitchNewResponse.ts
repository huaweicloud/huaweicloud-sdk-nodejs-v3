
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlLimitingSwitchNewResponse extends SdkResponse {
    private 'switch_on'?: string;
    public constructor() { 
        super();
    }
    public withSwitchOn(switchOn: string): ShowSqlLimitingSwitchNewResponse {
        this['switch_on'] = switchOn;
        return this;
    }
    public set switchOn(switchOn: string  | undefined) {
        this['switch_on'] = switchOn;
    }
    public get switchOn(): string | undefined {
        return this['switch_on'];
    }
}