import { AddressItemDto } from './AddressItemDto';
import { EmailItemDto } from './EmailItemDto';
import { EnterpriseDto } from './EnterpriseDto';
import { MetaDto } from './MetaDto';
import { NameDto } from './NameDto';
import { PhoneNumberItemDto } from './PhoneNumberItemDto';


export class GetUserResp {
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
    }
    public withId(id: string): GetUserResp {
        this['id'] = id;
        return this;
    }
    public withExternalId(externalId: string): GetUserResp {
        this['externalId'] = externalId;
        return this;
    }
    public withMeta(meta: MetaDto): GetUserResp {
        this['meta'] = meta;
        return this;
    }
    public withSchemas(schemas: Array<string>): GetUserResp {
        this['schemas'] = schemas;
        return this;
    }
    public withUserName(userName: string): GetUserResp {
        this['userName'] = userName;
        return this;
    }
    public withName(name: NameDto): GetUserResp {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): GetUserResp {
        this['displayName'] = displayName;
        return this;
    }
    public withActive(active: boolean): GetUserResp {
        this['active'] = active;
        return this;
    }
    public withEmails(emails: Array<EmailItemDto>): GetUserResp {
        this['emails'] = emails;
        return this;
    }
    public withUserType(userType: string): GetUserResp {
        this['userType'] = userType;
        return this;
    }
    public withNickName(nickName: string): GetUserResp {
        this['nickName'] = nickName;
        return this;
    }
    public withTitle(title: string): GetUserResp {
        this['title'] = title;
        return this;
    }
    public withPreferredLanguage(preferredLanguage: string): GetUserResp {
        this['preferredLanguage'] = preferredLanguage;
        return this;
    }
    public withLocale(locale: string): GetUserResp {
        this['locale'] = locale;
        return this;
    }
    public withTimezone(timezone: string): GetUserResp {
        this['timezone'] = timezone;
        return this;
    }
    public withAddresses(addresses: Array<AddressItemDto>): GetUserResp {
        this['addresses'] = addresses;
        return this;
    }
    public withPhoneNumbers(phoneNumbers: Array<PhoneNumberItemDto>): GetUserResp {
        this['phoneNumbers'] = phoneNumbers;
        return this;
    }
    public withUrnIetfParamsScimSchemasExtensionEnterprise20User(urnIetfParamsScimSchemasExtensionEnterprise20User: EnterpriseDto): GetUserResp {
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