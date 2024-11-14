
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckCallNumberInConfResponse extends SdkResponse {
    private 'in_conf'?: boolean;
    private 'conf_id'?: string;
    public constructor() { 
        super();
    }
    public withInConf(inConf: boolean): CheckCallNumberInConfResponse {
        this['in_conf'] = inConf;
        return this;
    }
    public set inConf(inConf: boolean  | undefined) {
        this['in_conf'] = inConf;
    }
    public get inConf(): boolean | undefined {
        return this['in_conf'];
    }
    public withConfId(confId: string): CheckCallNumberInConfResponse {
        this['conf_id'] = confId;
        return this;
    }
    public set confId(confId: string  | undefined) {
        this['conf_id'] = confId;
    }
    public get confId(): string | undefined {
        return this['conf_id'];
    }
}