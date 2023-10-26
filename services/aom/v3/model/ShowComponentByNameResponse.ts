
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowComponentByNameResponse extends SdkResponse {
    public name?: string;
    public id?: string;
    private 'aom_id'?: string;
    private 'app_id'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowComponentByNameResponse {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ShowComponentByNameResponse {
        this['id'] = id;
        return this;
    }
    public withAomId(aomId: string): ShowComponentByNameResponse {
        this['aom_id'] = aomId;
        return this;
    }
    public set aomId(aomId: string  | undefined) {
        this['aom_id'] = aomId;
    }
    public get aomId(): string | undefined {
        return this['aom_id'];
    }
    public withAppId(appId: string): ShowComponentByNameResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}