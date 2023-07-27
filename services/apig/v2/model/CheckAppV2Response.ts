
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckAppV2Response extends SdkResponse {
    public id?: string;
    public name?: string;
    public remark?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): CheckAppV2Response {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CheckAppV2Response {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): CheckAppV2Response {
        this['remark'] = remark;
        return this;
    }
}