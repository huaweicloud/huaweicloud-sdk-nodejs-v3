
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEnvironmentV2Response extends SdkResponse {
    private 'create_time'?: Date;
    public name?: string;
    public remark?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withCreateTime(createTime: Date): CreateEnvironmentV2Response {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withName(name: string): CreateEnvironmentV2Response {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): CreateEnvironmentV2Response {
        this['remark'] = remark;
        return this;
    }
    public withId(id: string): CreateEnvironmentV2Response {
        this['id'] = id;
        return this;
    }
}