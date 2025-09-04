import { AccessRomaBriefInfo } from './AccessRomaBriefInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNaResponse extends SdkResponse {
    private 'na_id'?: string;
    public name?: string;
    public description?: string;
    public endpoint?: string;
    private 'auth_type'?: string;
    private 'access_type'?: string;
    private 'access_roma_info'?: AccessRomaBriefInfo;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withNaId(naId: string): ShowNaResponse {
        this['na_id'] = naId;
        return this;
    }
    public set naId(naId: string  | undefined) {
        this['na_id'] = naId;
    }
    public get naId(): string | undefined {
        return this['na_id'];
    }
    public withName(name: string): ShowNaResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowNaResponse {
        this['description'] = description;
        return this;
    }
    public withEndpoint(endpoint: string): ShowNaResponse {
        this['endpoint'] = endpoint;
        return this;
    }
    public withAuthType(authType: string): ShowNaResponse {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withAccessType(accessType: string): ShowNaResponse {
        this['access_type'] = accessType;
        return this;
    }
    public set accessType(accessType: string  | undefined) {
        this['access_type'] = accessType;
    }
    public get accessType(): string | undefined {
        return this['access_type'];
    }
    public withAccessRomaInfo(accessRomaInfo: AccessRomaBriefInfo): ShowNaResponse {
        this['access_roma_info'] = accessRomaInfo;
        return this;
    }
    public set accessRomaInfo(accessRomaInfo: AccessRomaBriefInfo  | undefined) {
        this['access_roma_info'] = accessRomaInfo;
    }
    public get accessRomaInfo(): AccessRomaBriefInfo | undefined {
        return this['access_roma_info'];
    }
    public withCreateTime(createTime: string): ShowNaResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowNaResponse {
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