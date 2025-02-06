import { AddressDto } from './AddressDto';
import { EmailDto } from './EmailDto';
import { EnterpriseDto } from './EnterpriseDto';
import { NameDto } from './NameDto';
import { PhoneNumberDto } from './PhoneNumberDto';


export class CreateUserReqBody {
    public addresses?: Array<AddressDto>;
    private 'display_name'?: string;
    public emails?: Array<EmailDto>;
    public locale?: string;
    public name?: NameDto;
    public nickname?: string;
    private 'phone_numbers'?: Array<PhoneNumberDto>;
    private 'preferred_language'?: string;
    private 'profile_url'?: string;
    public timezone?: string;
    public title?: string;
    private 'user_name'?: string;
    private 'user_type'?: string;
    private 'password_mode'?: CreateUserReqBodyPasswordModeEnum | string;
    public enterprise?: EnterpriseDto;
    public constructor(displayName?: string, emails?: Array<EmailDto>, name?: NameDto, userName?: string, passwordMode?: string) { 
        this['display_name'] = displayName;
        this['emails'] = emails;
        this['name'] = name;
        this['user_name'] = userName;
        this['password_mode'] = passwordMode;
    }
    public withAddresses(addresses: Array<AddressDto>): CreateUserReqBody {
        this['addresses'] = addresses;
        return this;
    }
    public withDisplayName(displayName: string): CreateUserReqBody {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withEmails(emails: Array<EmailDto>): CreateUserReqBody {
        this['emails'] = emails;
        return this;
    }
    public withLocale(locale: string): CreateUserReqBody {
        this['locale'] = locale;
        return this;
    }
    public withName(name: NameDto): CreateUserReqBody {
        this['name'] = name;
        return this;
    }
    public withNickname(nickname: string): CreateUserReqBody {
        this['nickname'] = nickname;
        return this;
    }
    public withPhoneNumbers(phoneNumbers: Array<PhoneNumberDto>): CreateUserReqBody {
        this['phone_numbers'] = phoneNumbers;
        return this;
    }
    public set phoneNumbers(phoneNumbers: Array<PhoneNumberDto>  | undefined) {
        this['phone_numbers'] = phoneNumbers;
    }
    public get phoneNumbers(): Array<PhoneNumberDto> | undefined {
        return this['phone_numbers'];
    }
    public withPreferredLanguage(preferredLanguage: string): CreateUserReqBody {
        this['preferred_language'] = preferredLanguage;
        return this;
    }
    public set preferredLanguage(preferredLanguage: string  | undefined) {
        this['preferred_language'] = preferredLanguage;
    }
    public get preferredLanguage(): string | undefined {
        return this['preferred_language'];
    }
    public withProfileUrl(profileUrl: string): CreateUserReqBody {
        this['profile_url'] = profileUrl;
        return this;
    }
    public set profileUrl(profileUrl: string  | undefined) {
        this['profile_url'] = profileUrl;
    }
    public get profileUrl(): string | undefined {
        return this['profile_url'];
    }
    public withTimezone(timezone: string): CreateUserReqBody {
        this['timezone'] = timezone;
        return this;
    }
    public withTitle(title: string): CreateUserReqBody {
        this['title'] = title;
        return this;
    }
    public withUserName(userName: string): CreateUserReqBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserType(userType: string): CreateUserReqBody {
        this['user_type'] = userType;
        return this;
    }
    public set userType(userType: string  | undefined) {
        this['user_type'] = userType;
    }
    public get userType(): string | undefined {
        return this['user_type'];
    }
    public withPasswordMode(passwordMode: CreateUserReqBodyPasswordModeEnum | string): CreateUserReqBody {
        this['password_mode'] = passwordMode;
        return this;
    }
    public set passwordMode(passwordMode: CreateUserReqBodyPasswordModeEnum | string  | undefined) {
        this['password_mode'] = passwordMode;
    }
    public get passwordMode(): CreateUserReqBodyPasswordModeEnum | string | undefined {
        return this['password_mode'];
    }
    public withEnterprise(enterprise: EnterpriseDto): CreateUserReqBody {
        this['enterprise'] = enterprise;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateUserReqBodyPasswordModeEnum {
    OTP = 'OTP',
    EMAIL = 'EMAIL'
}
