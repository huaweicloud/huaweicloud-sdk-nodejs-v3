
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEnvironmentV2Response extends SdkResponse {
    private 'create_time'?: Date;
    public name?: string;
    public remark?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withCreateTime(createTime: Date): UpdateEnvironmentV2Response {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withName(name: string): UpdateEnvironmentV2Response {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): UpdateEnvironmentV2Response {
        this['remark'] = remark;
        return this;
    }
    public withId(id: string): UpdateEnvironmentV2Response {
        this['id'] = id;
        return this;
    }
}