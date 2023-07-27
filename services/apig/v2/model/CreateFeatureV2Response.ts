
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFeatureV2Response extends SdkResponse {
    public id?: string;
    public name?: string;
    public enable?: boolean;
    public config?: string;
    private 'instance_id'?: string;
    private 'update_time'?: Date;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateFeatureV2Response {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateFeatureV2Response {
        this['name'] = name;
        return this;
    }
    public withEnable(enable: boolean): CreateFeatureV2Response {
        this['enable'] = enable;
        return this;
    }
    public withConfig(config: string): CreateFeatureV2Response {
        this['config'] = config;
        return this;
    }
    public withInstanceId(instanceId: string): CreateFeatureV2Response {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUpdateTime(updateTime: Date): CreateFeatureV2Response {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}