import { ScriptSimpleInfo } from './ScriptSimpleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowScriptDetailResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public type?: string;
    public version?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    public content?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowScriptDetailResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowScriptDetailResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowScriptDetailResponse {
        this['description'] = description;
        return this;
    }
    public withType(type: string): ShowScriptDetailResponse {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ShowScriptDetailResponse {
        this['version'] = version;
        return this;
    }
    public withCreateTime(createTime: Date): ShowScriptDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): ShowScriptDetailResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withContent(content: string): ShowScriptDetailResponse {
        this['content'] = content;
        return this;
    }
}