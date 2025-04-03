import { AddressItemDto } from './AddressItemDto';
import { EmailItemDto } from './EmailItemDto';
import { EnterpriseDto } from './EnterpriseDto';
import { NameDto } from './NameDto';
import { PhoneNumberItemDto } from './PhoneNumberItemDto';


export class CreateUserReqBody {
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
    public withExternalId(externalId: string): CreateUserReqBody {
        this['externalId'] = externalId;
        return this;
    }
    public withUserName(userName: string): CreateUserReqBody {
        this['userName'] = userName;
        return this;
    }
    public withName(name: NameDto): CreateUserReqBody {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): CreateUserReqBody {
        this['displayName'] = displayName;
        return this;
    }
    public withNickName(nickName: string): CreateUserReqBody {
        this['nickName'] = nickName;
        return this;
    }
    public withProfileUrl(profileUrl: string): CreateUserReqBody {
        this['profileUrl'] = profileUrl;
        return this;
    }
    public withEmails(emails: Array<EmailItemDto>): CreateUserReqBody {
        this['emails'] = emails;
        return this;
    }
    public withAddresses(addresses: Array<AddressItemDto>): CreateUserReqBody {
        this['addresses'] = addresses;
        return this;
    }
    public withPhoneNumbers(phoneNumbers: Array<PhoneNumberItemDto>): CreateUserReqBody {
        this['phoneNumbers'] = phoneNumbers;
        return this;
    }
    public withUserType(userType: string): CreateUserReqBody {
        this['userType'] = userType;
        return this;
    }
    public withTitle(title: string): CreateUserReqBody {
        this['title'] = title;
        return this;
    }
    public withPreferredLanguage(preferredLanguage: string): CreateUserReqBody {
        this['preferredLanguage'] = preferredLanguage;
        return this;
    }
    public withLocale(locale: string): CreateUserReqBody {
        this['locale'] = locale;
        return this;
    }
    public withTimezone(timezone: string): CreateUserReqBody {
        this['timezone'] = timezone;
        return this;
    }
    public withActive(active: boolean): CreateUserReqBody {
        this['active'] = active;
        return this;
    }
    public withSchemas(schemas: Array<string>): CreateUserReqBody {
        this['schemas'] = schemas;
        return this;
    }
    public withUrnIetfParamsScimSchemasExtensionEnterprise20User(urnIetfParamsScimSchemasExtensionEnterprise20User: EnterpriseDto): CreateUserReqBody {
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