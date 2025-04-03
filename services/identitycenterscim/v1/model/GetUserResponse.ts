import { AddressItemDto } from './AddressItemDto';
import { EmailItemDto } from './EmailItemDto';
import { EnterpriseDto } from './EnterpriseDto';
import { MetaDto } from './MetaDto';
import { NameDto } from './NameDto';
import { PhoneNumberItemDto } from './PhoneNumberItemDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetUserResponse extends SdkResponse {
    public id?: string;
    public externalId?: string;
    public meta?: MetaDto;
    public schemas?: Array<string>;
    public userName?: string;
    public name?: NameDto;
    public displayName?: string;
    public active?: boolean;
    public emails?: Array<EmailItemDto>;
    public userType?: string;
    public nickName?: string;
    public title?: string;
    public preferredLanguage?: string;
    public locale?: string;
    public timezone?: string;
    public addresses?: Array<AddressItemDto>;
    public phoneNumbers?: Array<PhoneNumberItemDto>;
    private 'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User'?: EnterpriseDto;
    public constructor() { 
        super();
    }
    public withId(id: string): GetUserResponse {
        this['id'] = id;
        return this;
    }
    public withExternalId(externalId: string): GetUserResponse {
        this['externalId'] = externalId;
        return this;
    }
    public withMeta(meta: MetaDto): GetUserResponse {
        this['meta'] = meta;
        return this;
    }
    public withSchemas(schemas: Array<string>): GetUserResponse {
        this['schemas'] = schemas;
        return this;
    }
    public withUserName(userName: string): GetUserResponse {
        this['userName'] = userName;
        return this;
    }
    public withName(name: NameDto): GetUserResponse {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): GetUserResponse {
        this['displayName'] = displayName;
        return this;
    }
    public withActive(active: boolean): GetUserResponse {
        this['active'] = active;
        return this;
    }
    public withEmails(emails: Array<EmailItemDto>): GetUserResponse {
        this['emails'] = emails;
        return this;
    }
    public withUserType(userType: string): GetUserResponse {
        this['userType'] = userType;
        return this;
    }
    public withNickName(nickName: string): GetUserResponse {
        this['nickName'] = nickName;
        return this;
    }
    public withTitle(title: string): GetUserResponse {
        this['title'] = title;
        return this;
    }
    public withPreferredLanguage(preferredLanguage: string): GetUserResponse {
        this['preferredLanguage'] = preferredLanguage;
        return this;
    }
    public withLocale(locale: string): GetUserResponse {
        this['locale'] = locale;
        return this;
    }
    public withTimezone(timezone: string): GetUserResponse {
        this['timezone'] = timezone;
        return this;
    }
    public withAddresses(addresses: Array<AddressItemDto>): GetUserResponse {
        this['addresses'] = addresses;
        return this;
    }
    public withPhoneNumbers(phoneNumbers: Array<PhoneNumberItemDto>): GetUserResponse {
        this['phoneNumbers'] = phoneNumbers;
        return this;
    }
    public withUrnIetfParamsScimSchemasExtensionEnterprise20User(urnIetfParamsScimSchemasExtensionEnterprise20User: EnterpriseDto): GetUserResponse {
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