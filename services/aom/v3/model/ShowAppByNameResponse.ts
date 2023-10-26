
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppByNameResponse extends SdkResponse {
    private 'aom_id'?: string;
    private 'app_id'?: string;
    private 'create_time'?: string;
    public creator?: string;
    public description?: string;
    private 'display_name'?: string;
    private 'eps_id'?: string;
    private 'modified_time'?: string;
    public modifier?: string;
    public name?: string;
    private 'register_type'?: ShowAppByNameResponseRegisterTypeEnum | string;
    public constructor() { 
        super();
    }
    public withAomId(aomId: string): ShowAppByNameResponse {
        this['aom_id'] = aomId;
        return this;
    }
    public set aomId(aomId: string  | undefined) {
        this['aom_id'] = aomId;
    }
    public get aomId(): string | undefined {
        return this['aom_id'];
    }
    public withAppId(appId: string): ShowAppByNameResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withCreateTime(createTime: string): ShowAppByNameResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreator(creator: string): ShowAppByNameResponse {
        this['creator'] = creator;
        return this;
    }
    public withDescription(description: string): ShowAppByNameResponse {
        this['description'] = description;
        return this;
    }
    public withDisplayName(displayName: string): ShowAppByNameResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withEpsId(epsId: string): ShowAppByNameResponse {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withModifiedTime(modifiedTime: string): ShowAppByNameResponse {
        this['modified_time'] = modifiedTime;
        return this;
    }
    public set modifiedTime(modifiedTime: string  | undefined) {
        this['modified_time'] = modifiedTime;
    }
    public get modifiedTime(): string | undefined {
        return this['modified_time'];
    }
    public withModifier(modifier: string): ShowAppByNameResponse {
        this['modifier'] = modifier;
        return this;
    }
    public withName(name: string): ShowAppByNameResponse {
        this['name'] = name;
        return this;
    }
    public withRegisterType(registerType: ShowAppByNameResponseRegisterTypeEnum | string): ShowAppByNameResponse {
        this['register_type'] = registerType;
        return this;
    }
    public set registerType(registerType: ShowAppByNameResponseRegisterTypeEnum | string  | undefined) {
        this['register_type'] = registerType;
    }
    public get registerType(): ShowAppByNameResponseRegisterTypeEnum | string | undefined {
        return this['register_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAppByNameResponseRegisterTypeEnum {
    API = 'API',
    CONSOLE = 'CONSOLE',
    SERVICE_DISCOVERY = 'SERVICE_DISCOVERY'
}
