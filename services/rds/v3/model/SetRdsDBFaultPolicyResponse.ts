
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetRdsDBFaultPolicyResponse extends SdkResponse {
    public state?: string;
    public errmsg?: string;
    public constructor() { 
        super();
    }
    public withState(state: string): SetRdsDBFaultPolicyResponse {
        this['state'] = state;
        return this;
    }
    public withErrmsg(errmsg: string): SetRdsDBFaultPolicyResponse {
        this['errmsg'] = errmsg;
        return this;
    }
}