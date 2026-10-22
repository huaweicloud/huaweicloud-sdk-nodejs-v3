import { AiAppBasicInfo } from './AiAppBasicInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAiGuardPolicyResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'bind_ai_apps'?: Array<AiAppBasicInfo>;
    private 'create_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowAiGuardPolicyResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowAiGuardPolicyResponse {
        this['name'] = name;
        return this;
    }
    public withBindAiApps(bindAiApps: Array<AiAppBasicInfo>): ShowAiGuardPolicyResponse {
        this['bind_ai_apps'] = bindAiApps;
        return this;
    }
    public set bindAiApps(bindAiApps: Array<AiAppBasicInfo>  | undefined) {
        this['bind_ai_apps'] = bindAiApps;
    }
    public get bindAiApps(): Array<AiAppBasicInfo> | undefined {
        return this['bind_ai_apps'];
    }
    public withCreateTime(createTime: number): ShowAiGuardPolicyResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}