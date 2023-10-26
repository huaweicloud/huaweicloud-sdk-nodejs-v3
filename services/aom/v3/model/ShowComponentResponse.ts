
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowComponentResponse extends SdkResponse {
    private 'aom_id'?: string;
    private 'app_id'?: string;
    private 'create_time'?: string;
    public creator?: string;
    public description?: string;
    public id?: string;
    private 'modified_time'?: string;
    public modifier?: string;
    public name?: string;
    private 'register_type'?: ShowComponentResponseRegisterTypeEnum | string;
    private 'sub_app_id'?: string;
    public constructor() { 
        super();
    }
    public withAomId(aomId: string): ShowComponentResponse {
        this['aom_id'] = aomId;
        return this;
    }
    public set aomId(aomId: string  | undefined) {
        this['aom_id'] = aomId;
    }
    public get aomId(): string | undefined {
        return this['aom_id'];
    }
    public withAppId(appId: string): ShowComponentResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withCreateTime(createTime: string): ShowComponentResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreator(creator: string): ShowComponentResponse {
        this['creator'] = creator;
        return this;
    }
    public withDescription(description: string): ShowComponentResponse {
        this['description'] = description;
        return this;
    }
    public withId(id: string): ShowComponentResponse {
        this['id'] = id;
        return this;
    }
    public withModifiedTime(modifiedTime: string): ShowComponentResponse {
        this['modified_time'] = modifiedTime;
        return this;
    }
    public set modifiedTime(modifiedTime: string  | undefined) {
        this['modified_time'] = modifiedTime;
    }
    public get modifiedTime(): string | undefined {
        return this['modified_time'];
    }
    public withModifier(modifier: string): ShowComponentResponse {
        this['modifier'] = modifier;
        return this;
    }
    public withName(name: string): ShowComponentResponse {
        this['name'] = name;
        return this;
    }
    public withRegisterType(registerType: ShowComponentResponseRegisterTypeEnum | string): ShowComponentResponse {
        this['register_type'] = registerType;
        return this;
    }
    public set registerType(registerType: ShowComponentResponseRegisterTypeEnum | string  | undefined) {
        this['register_type'] = registerType;
    }
    public get registerType(): ShowComponentResponseRegisterTypeEnum | string | undefined {
        return this['register_type'];
    }
    public withSubAppId(subAppId: string): ShowComponentResponse {
        this['sub_app_id'] = subAppId;
        return this;
    }
    public set subAppId(subAppId: string  | undefined) {
        this['sub_app_id'] = subAppId;
    }
    public get subAppId(): string | undefined {
        return this['sub_app_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowComponentResponseRegisterTypeEnum {
    API = 'API',
    CONSOLE = 'CONSOLE',
    SERVICE_DISCOVERY = 'SERVICE_DISCOVERY'
}
