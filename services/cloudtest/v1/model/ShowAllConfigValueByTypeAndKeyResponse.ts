
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAllConfigValueByTypeAndKeyResponse extends SdkResponse {
    public comments?: string;
    private 'config_key'?: string;
    private 'config_type'?: string;
    private 'config_value'?: string;
    private 'create_time'?: Date;
    private 'create_user'?: string;
    public id?: string;
    private 'test_service_id'?: string;
    private 'update_time'?: Date;
    private 'update_user'?: string;
    public constructor() { 
        super();
    }
    public withComments(comments: string): ShowAllConfigValueByTypeAndKeyResponse {
        this['comments'] = comments;
        return this;
    }
    public withConfigKey(configKey: string): ShowAllConfigValueByTypeAndKeyResponse {
        this['config_key'] = configKey;
        return this;
    }
    public set configKey(configKey: string  | undefined) {
        this['config_key'] = configKey;
    }
    public get configKey(): string | undefined {
        return this['config_key'];
    }
    public withConfigType(configType: string): ShowAllConfigValueByTypeAndKeyResponse {
        this['config_type'] = configType;
        return this;
    }
    public set configType(configType: string  | undefined) {
        this['config_type'] = configType;
    }
    public get configType(): string | undefined {
        return this['config_type'];
    }
    public withConfigValue(configValue: string): ShowAllConfigValueByTypeAndKeyResponse {
        this['config_value'] = configValue;
        return this;
    }
    public set configValue(configValue: string  | undefined) {
        this['config_value'] = configValue;
    }
    public get configValue(): string | undefined {
        return this['config_value'];
    }
    public withCreateTime(createTime: Date): ShowAllConfigValueByTypeAndKeyResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): ShowAllConfigValueByTypeAndKeyResponse {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withId(id: string): ShowAllConfigValueByTypeAndKeyResponse {
        this['id'] = id;
        return this;
    }
    public withTestServiceId(testServiceId: string): ShowAllConfigValueByTypeAndKeyResponse {
        this['test_service_id'] = testServiceId;
        return this;
    }
    public set testServiceId(testServiceId: string  | undefined) {
        this['test_service_id'] = testServiceId;
    }
    public get testServiceId(): string | undefined {
        return this['test_service_id'];
    }
    public withUpdateTime(updateTime: Date): ShowAllConfigValueByTypeAndKeyResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): ShowAllConfigValueByTypeAndKeyResponse {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
}