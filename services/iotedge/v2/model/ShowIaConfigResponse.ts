
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIaConfigResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public value?: string;
    public description?: string;
    public version?: number;
    public state?: ShowIaConfigResponseStateEnum | string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowIaConfigResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowIaConfigResponse {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): ShowIaConfigResponse {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): ShowIaConfigResponse {
        this['description'] = description;
        return this;
    }
    public withVersion(version: number): ShowIaConfigResponse {
        this['version'] = version;
        return this;
    }
    public withState(state: ShowIaConfigResponseStateEnum | string): ShowIaConfigResponse {
        this['state'] = state;
        return this;
    }
    public withCreateTime(createTime: string): ShowIaConfigResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowIaConfigResponse {
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
export enum ShowIaConfigResponseStateEnum {
    SUCCESS = 'SUCCESS',
    SENDING = 'SENDING'
}
