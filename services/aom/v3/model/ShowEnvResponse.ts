import { TagNameAndIdVo } from './TagNameAndIdVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEnvResponse extends SdkResponse {
    private 'aom_id'?: string;
    private 'component_id'?: string;
    private 'create_time'?: string;
    public creator?: string;
    public description?: string;
    private 'env_id'?: string;
    private 'env_name'?: string;
    private 'env_tags'?: Array<TagNameAndIdVo>;
    private 'env_type'?: string;
    private 'eps_id'?: string;
    private 'modified_time'?: string;
    public modifier?: string;
    private 'os_type'?: string;
    public region?: string;
    private 'register_type'?: ShowEnvResponseRegisterTypeEnum | string;
    public constructor() { 
        super();
    }
    public withAomId(aomId: string): ShowEnvResponse {
        this['aom_id'] = aomId;
        return this;
    }
    public set aomId(aomId: string  | undefined) {
        this['aom_id'] = aomId;
    }
    public get aomId(): string | undefined {
        return this['aom_id'];
    }
    public withComponentId(componentId: string): ShowEnvResponse {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withCreateTime(createTime: string): ShowEnvResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreator(creator: string): ShowEnvResponse {
        this['creator'] = creator;
        return this;
    }
    public withDescription(description: string): ShowEnvResponse {
        this['description'] = description;
        return this;
    }
    public withEnvId(envId: string): ShowEnvResponse {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withEnvName(envName: string): ShowEnvResponse {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withEnvTags(envTags: Array<TagNameAndIdVo>): ShowEnvResponse {
        this['env_tags'] = envTags;
        return this;
    }
    public set envTags(envTags: Array<TagNameAndIdVo>  | undefined) {
        this['env_tags'] = envTags;
    }
    public get envTags(): Array<TagNameAndIdVo> | undefined {
        return this['env_tags'];
    }
    public withEnvType(envType: string): ShowEnvResponse {
        this['env_type'] = envType;
        return this;
    }
    public set envType(envType: string  | undefined) {
        this['env_type'] = envType;
    }
    public get envType(): string | undefined {
        return this['env_type'];
    }
    public withEpsId(epsId: string): ShowEnvResponse {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withModifiedTime(modifiedTime: string): ShowEnvResponse {
        this['modified_time'] = modifiedTime;
        return this;
    }
    public set modifiedTime(modifiedTime: string  | undefined) {
        this['modified_time'] = modifiedTime;
    }
    public get modifiedTime(): string | undefined {
        return this['modified_time'];
    }
    public withModifier(modifier: string): ShowEnvResponse {
        this['modifier'] = modifier;
        return this;
    }
    public withOsType(osType: string): ShowEnvResponse {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withRegion(region: string): ShowEnvResponse {
        this['region'] = region;
        return this;
    }
    public withRegisterType(registerType: ShowEnvResponseRegisterTypeEnum | string): ShowEnvResponse {
        this['register_type'] = registerType;
        return this;
    }
    public set registerType(registerType: ShowEnvResponseRegisterTypeEnum | string  | undefined) {
        this['register_type'] = registerType;
    }
    public get registerType(): ShowEnvResponseRegisterTypeEnum | string | undefined {
        return this['register_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEnvResponseRegisterTypeEnum {
    API = 'API',
    CONSOLE = 'CONSOLE',
    SERVICE_DISCOVERY = 'SERVICE_DISCOVERY'
}
