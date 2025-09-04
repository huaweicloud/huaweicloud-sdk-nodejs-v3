
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateIaConfigResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public value?: string;
    public description?: string;
    public version?: number;
    public state?: UpdateIaConfigResponseStateEnum | string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateIaConfigResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateIaConfigResponse {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): UpdateIaConfigResponse {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): UpdateIaConfigResponse {
        this['description'] = description;
        return this;
    }
    public withVersion(version: number): UpdateIaConfigResponse {
        this['version'] = version;
        return this;
    }
    public withState(state: UpdateIaConfigResponseStateEnum | string): UpdateIaConfigResponse {
        this['state'] = state;
        return this;
    }
    public withCreateTime(createTime: string): UpdateIaConfigResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateIaConfigResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateIaConfigResponseStateEnum {
    SUCCESS = 'SUCCESS',
    SENDING = 'SENDING'
}
