import { AddressItemDto } from './AddressItemDto';
import { EmailItemDto } from './EmailItemDto';
import { EnterpriseDto } from './EnterpriseDto';
import { MetaDto } from './MetaDto';
import { NameDto } from './NameDto';
import { PhoneNumberItemDto } from './PhoneNumberItemDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateUserResponse extends SdkResponse {
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
    public withId(id: string): CreateUserResponse {
        this['id'] = id;
        return this;
    }
    public withExternalId(externalId: string): CreateUserResponse {
        this['externalId'] = externalId;
        return this;
    }
    public withMeta(meta: MetaDto): CreateUserResponse {
        this['meta'] = meta;
        return this;
    }
    public withSchemas(schemas: Array<string>): CreateUserResponse {
        this['schemas'] = schemas;
        return this;
    }
    public withUserName(userName: string): CreateUserResponse {
        this['userName'] = userName;
        return this;
    }
    public withName(name: NameDto): CreateUserResponse {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): CreateUserResponse {
        this['displayName'] = displayName;
        return this;
    }
    public withNickName(nickName: string): CreateUserResponse {
        this['nickName'] = nickName;
        return this;
    }
    public withTitle(title: string): CreateUserResponse {
        this['title'] = title;
        return this;
    }
    public withUserType(userType: string): CreateUserResponse {
        this['userType'] = userType;
        return this;
    }
    public withPreferredLanguage(preferredLanguage: string): CreateUserResponse {
        this['preferredLanguage'] = preferredLanguage;
        return this;
    }
    public withLocale(locale: string): CreateUserResponse {
        this['locale'] = locale;
        return this;
    }
    public withTimezone(timezone: string): CreateUserResponse {
        this['timezone'] = timezone;
        return this;
    }
    public withActive(active: boolean): CreateUserResponse {
        this['active'] = active;
        return this;
    }
    public withEmails(emails: Array<EmailItemDto>): CreateUserResponse {
        this['emails'] = emails;
        return this;
    }
    public withAddresses(addresses: Array<AddressItemDto>): CreateUserResponse {
        this['addresses'] = addresses;
        return this;
    }
    public withPhoneNumbers(phoneNumbers: Array<PhoneNumberItemDto>): CreateUserResponse {
        this['phoneNumbers'] = phoneNumbers;
        return this;
    }
    public withUrnIetfParamsScimSchemasExtensionEnterprise20User(urnIetfParamsScimSchemasExtensionEnterprise20User: EnterpriseDto): CreateUserResponse {
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