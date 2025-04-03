import { AddressItemDto } from './AddressItemDto';
import { EmailItemDto } from './EmailItemDto';
import { EnterpriseDto } from './EnterpriseDto';
import { NameDto } from './NameDto';
import { PhoneNumberItemDto } from './PhoneNumberItemDto';


export class UpdateUserReqBody {
    public id?: string;
    public externalId?: string;
    public userName?: string;
    public name?: NameDto;
    public displayName?: string;
    public nickName?: string;
    public profileUrl?: string;
    public emails?: Array<EmailItemDto>;
    public addresses?: Array<AddressItemDto>;
    public phoneNumbers?: Array<PhoneNumberItemDto>;
    public userType?: string;
    public title?: string;
    public preferredLanguage?: string;
    public locale?: string;
    public timezone?: string;
    public active?: boolean;
    public schemas?: Array<string>;
    private 'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User'?: EnterpriseDto;
    public constructor(userName?: string, name?: NameDto, displayName?: string, emails?: Array<EmailItemDto>, schemas?: Array<string>) { 
        this['userName'] = userName;
        this['name'] = name;
        this['displayName'] = displayName;
        this['emails'] = emails;
        this['schemas'] = schemas;
    }
    public withId(id: string): UpdateUserReqBody {
        this['id'] = id;
        return this;
    }
    public withExternalId(externalId: string): UpdateUserReqBody {
        this['externalId'] = externalId;
        return this;
    }
    public withUserName(userName: string): UpdateUserReqBody {
        this['userName'] = userName;
        return this;
    }
    public withName(name: NameDto): UpdateUserReqBody {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): UpdateUserReqBody {
        this['displayName'] = displayName;
        return this;
    }
    public withNickName(nickName: string): UpdateUserReqBody {
        this['nickName'] = nickName;
        return this;
    }
    public withProfileUrl(profileUrl: string): UpdateUserReqBody {
        this['profileUrl'] = profileUrl;
        return this;
    }
    public withEmails(emails: Array<EmailItemDto>): UpdateUserReqBody {
        this['emails'] = emails;
        return this;
    }
    public withAddresses(addresses: Array<AddressItemDto>): UpdateUserReqBody {
        this['addresses'] = addresses;
        return this;
    }
    public withPhoneNumbers(phoneNumbers: Array<PhoneNumberItemDto>): UpdateUserReqBody {
        this['phoneNumbers'] = phoneNumbers;
        return this;
    }
    public withUserType(userType: string): UpdateUserReqBody {
        this['userType'] = userType;
        return this;
    }
    public withTitle(title: string): UpdateUserReqBody {
        this['title'] = title;
        return this;
    }
    public withPreferredLanguage(preferredLanguage: string): UpdateUserReqBody {
        this['preferredLanguage'] = preferredLanguage;
        return this;
    }
    public withLocale(locale: string): UpdateUserReqBody {
        this['locale'] = locale;
        return this;
    }
    public withTimezone(timezone: string): UpdateUserReqBody {
        this['timezone'] = timezone;
        return this;
    }
    public withActive(active: boolean): UpdateUserReqBody {
        this['active'] = active;
        return this;
    }
    public withSchemas(schemas: Array<string>): UpdateUserReqBody {
        this['schemas'] = schemas;
        return this;
    }
    public withUrnIetfParamsScimSchemasExtensionEnterprise20User(urnIetfParamsScimSchemasExtensionEnterprise20User: EnterpriseDto): UpdateUserReqBody {
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