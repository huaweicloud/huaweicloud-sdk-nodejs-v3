import { AppCodeCreate } from './AppCodeCreate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAppCodeV2Response extends SdkResponse {
    private 'app_code'?: string;
    public id?: string;
    private 'app_id'?: string;
    private 'create_time'?: string;
    public constructor(appCode?: string) { 
        super();
        this['app_code'] = appCode;
    }
    public withAppCode(appCode: string): CreateAppCodeV2Response {
        this['app_code'] = appCode;
        return this;
    }
    public set appCode(appCode: string  | undefined) {
        this['app_code'] = appCode;
    }
    public get appCode(): string | undefined {
        return this['app_code'];
    }
    public withId(id: string): CreateAppCodeV2Response {
        this['id'] = id;
        return this;
    }
    public withAppId(appId: string): CreateAppCodeV2Response {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withCreateTime(createTime: string): CreateAppCodeV2Response {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}