import { AddressItemDto } from './AddressItemDto';
import { EmailItemDto } from './EmailItemDto';
import { EnterpriseDto } from './EnterpriseDto';
import { MetaDto } from './MetaDto';
import { NameDto } from './NameDto';
import { PhoneNumberItemDto } from './PhoneNumberItemDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PatchUserResponse extends SdkResponse {
    public id?: string;
    public externalId?: string;
    public meta?: MetaDto;
    public schemas?: Array<string>;
    public userName?: string;
    public name?: NameDto;
    public displayName?: string;
    public nickName?: string;
    public title?: string;
    public userType?: string;
    public preferredLanguage?: string;
    public locale?: string;
    public timezone?: string;
    public active?: boolean;
    public emails?: Array<EmailItemDto>;
    public addresses?: Array<AddressItemDto>;
    public phoneNumbers?: Array<PhoneNumberItemDto>;
    private 'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User'?: EnterpriseDto;
    public constructor() { 
        super();
    }
    public withId(id: string): PatchUserResponse {
        this['id'] = id;
        return this;
    }
    public withExternalId(externalId: string): PatchUserResponse {
        this['externalId'] = externalId;
        return this;
    }
    public withMeta(meta: MetaDto): PatchUserResponse {
        this['meta'] = meta;
        return this;
    }
    public withSchemas(schemas: Array<string>): PatchUserResponse {
        this['schemas'] = schemas;
        return this;
    }
    public withUserName(userName: string): PatchUserResponse {
        this['userName'] = userName;
        return this;
    }
    public withName(name: NameDto): PatchUserResponse {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): PatchUserResponse {
        this['displayName'] = displayName;
        return this;
    }
    public withNickName(nickName: string): PatchUserResponse {
        this['nickName'] = nickName;
        return this;
    }
    public withTitle(title: string): PatchUserResponse {
        this['title'] = title;
        return this;
    }
    public withUserType(userType: string): PatchUserResponse {
        this['userType'] = userType;
        return this;
    }
    public withPreferredLanguage(preferredLanguage: string): PatchUserResponse {
        this['preferredLanguage'] = preferredLanguage;
        return this;
    }
    public withLocale(locale: string): PatchUserResponse {
        this['locale'] = locale;
        return this;
    }
    public withTimezone(timezone: string): PatchUserResponse {
        this['timezone'] = timezone;
        return this;
    }
    public withActive(active: boolean): PatchUserResponse {
        this['active'] = active;
        return this;
    }
    public withEmails(emails: Array<EmailItemDto>): PatchUserResponse {
        this['emails'] = emails;
        return this;
    }
    public withAddresses(addresses: Array<AddressItemDto>): PatchUserResponse {
        this['addresses'] = addresses;
        return this;
    }
    public withPhoneNumbers(phoneNumbers: Array<PhoneNumberItemDto>): PatchUserResponse {
        this['phoneNumbers'] = phoneNumbers;
        return this;
    }
    public withUrnIetfParamsScimSchemasExtensionEnterprise20User(urnIetfParamsScimSchemasExtensionEnterprise20User: EnterpriseDto): PatchUserResponse {
        this['urn:ietf:params:scim:schemas:extension:enterprise:2.0:User'] = urnIetfParamsScimSchemasExtensionEnterprise20User;
        return this;
    }
    public set urnIetfParamsScimSchemasExtensionEnterprise20User(urnIetfParamsScimSchemasExtensionEnterprise20User: EnterpriseDto  | undefined) {
        this['urn:ietf:params:scim:schemas:extension:enterprise:2.0:User'] = urnIetfParamsScimSchemasExtensionEnterprise20User;
    }
    public get urnIetfParamsScimSchemasExtensionEnterprise20User(): EnterpriseDto | undefined {
        return this['urn:ietf:params:scim:schemas:extension:enterprise:2.0:User'];
    }
}