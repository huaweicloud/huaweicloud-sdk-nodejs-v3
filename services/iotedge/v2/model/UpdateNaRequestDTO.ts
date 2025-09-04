import { AccessRomaInfo } from './AccessRomaInfo';
import { AuthAkSkInfo } from './AuthAkSkInfo';


export class UpdateNaRequestDTO {
    public name?: string;
    public description?: string;
    public endpoint?: string;
    private 'auth_type'?: string;
    private 'auth_aksk_info'?: AuthAkSkInfo;
    private 'access_type'?: string;
    private 'access_roma_info'?: AccessRomaInfo;
    public constructor(name?: string, endpoint?: string, accessType?: string) { 
        this['name'] = name;
        this['endpoint'] = endpoint;
        this['access_type'] = accessType;
    }
    public withName(name: string): UpdateNaRequestDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateNaRequestDTO {
        this['description'] = description;
        return this;
    }
    public withEndpoint(endpoint: string): UpdateNaRequestDTO {
        this['endpoint'] = endpoint;
        return this;
    }
    public withAuthType(authType: string): UpdateNaRequestDTO {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withAuthAkskInfo(authAkskInfo: AuthAkSkInfo): UpdateNaRequestDTO {
        this['auth_aksk_info'] = authAkskInfo;
        return this;
    }
    public set authAkskInfo(authAkskInfo: AuthAkSkInfo  | undefined) {
        this['auth_aksk_info'] = authAkskInfo;
    }
    public get authAkskInfo(): AuthAkSkInfo | undefined {
        return this['auth_aksk_info'];
    }
    public withAccessType(accessType: string): UpdateNaRequestDTO {
        this['access_type'] = accessType;
        return this;
    }
    public set accessType(accessType: string  | undefined) {
        this['access_type'] = accessType;
    }
    public get accessType(): string | undefined {
        return this['access_type'];
    }
    public withAccessRomaInfo(accessRomaInfo: AccessRomaInfo): UpdateNaRequestDTO {
        this['access_roma_info'] = accessRomaInfo;
        return this;
    }
    public set accessRomaInfo(accessRomaInfo: AccessRomaInfo  | undefined) {
        this['access_roma_info'] = accessRomaInfo;
    }
    public get accessRomaInfo(): AccessRomaInfo | undefined {
        return this['access_roma_info'];
    }
}