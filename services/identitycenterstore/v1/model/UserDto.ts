import { AddressDto } from './AddressDto';
import { EmailDto } from './EmailDto';
import { EnterpriseDto } from './EnterpriseDto';
import { ExternalIdDto } from './ExternalIdDto';
import { NameDto } from './NameDto';
import { PhoneNumberDto } from './PhoneNumberDto';


export class UserDto {
    public addresses?: Array<AddressDto>;
    private 'display_name'?: string;
    public emails?: Array<EmailDto>;
    private 'external_id'?: string;
    private 'external_ids'?: Array<ExternalIdDto>;
    private 'identity_store_id'?: string;
    public locale?: string;
    public name?: NameDto;
    public nickname?: string;
    private 'phone_numbers'?: Array<PhoneNumberDto>;
    private 'preferred_language'?: string;
    private 'profile_url'?: string;
    public timezone?: string;
    public title?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'user_type'?: string;
    private 'created_at'?: number;
    private 'created_by'?: string;
    private 'updated_at'?: number;
    private 'updated_by'?: string;
    public enabled?: boolean;
    public enterprise?: EnterpriseDto;
    public constructor(displayName?: string, emails?: Array<EmailDto>, identityStoreId?: string, name?: NameDto, userId?: string, userName?: string, createdAt?: number, createdBy?: string, updatedAt?: number, updatedBy?: string, enabled?: boolean) { 
        this['display_name'] = displayName;
        this['emails'] = emails;
        this['identity_store_id'] = identityStoreId;
        this['name'] = name;
        this['user_id'] = userId;
        this['user_name'] = userName;
        this['created_at'] = createdAt;
        this['created_by'] = createdBy;
        this['updated_at'] = updatedAt;
        this['updated_by'] = updatedBy;
        this['enabled'] = enabled;
    }
    public withAddresses(addresses: Array<AddressDto>): UserDto {
        this['addresses'] = addresses;
        return this;
    }
    public withDisplayName(displayName: string): UserDto {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withEmails(emails: Array<EmailDto>): UserDto {
        this['emails'] = emails;
        return this;
    }
    public withExternalId(externalId: string): UserDto {
        this['external_id'] = externalId;
        return this;
    }
    public set externalId(externalId: string  | undefined) {
        this['external_id'] = externalId;
    }
    public get externalId(): string | undefined {
        return this['external_id'];
    }
    public withExternalIds(externalIds: Array<ExternalIdDto>): UserDto {
        this['external_ids'] = externalIds;
        return this;
    }
    public set externalIds(externalIds: Array<ExternalIdDto>  | undefined) {
        this['external_ids'] = externalIds;
    }
    public get externalIds(): Array<ExternalIdDto> | undefined {
        return this['external_ids'];
    }
    public withIdentityStoreId(identityStoreId: string): UserDto {
        this['identity_store_id'] = identityStoreId;
        return this;
    }
    public set identityStoreId(identityStoreId: string  | undefined) {
        this['identity_store_id'] = identityStoreId;
    }
    public get identityStoreId(): string | undefined {
        return this['identity_store_id'];
    }
    public withLocale(locale: string): UserDto {
        this['locale'] = locale;
        return this;
    }
    public withName(name: NameDto): UserDto {
        this['name'] = name;
        return this;
    }
    public withNickname(nickname: string): UserDto {
        this['nickname'] = nickname;
        return this;
    }
    public withPhoneNumbers(phoneNumbers: Array<PhoneNumberDto>): UserDto {
        this['phone_numbers'] = phoneNumbers;
        return this;
    }
    public set phoneNumbers(phoneNumbers: Array<PhoneNumberDto>  | undefined) {
        this['phone_numbers'] = phoneNumbers;
    }
    public get phoneNumbers(): Array<PhoneNumberDto> | undefined {
        return this['phone_numbers'];
    }
    public withPreferredLanguage(preferredLanguage: string): UserDto {
        this['preferred_language'] = preferredLanguage;
        return this;
    }
    public set preferredLanguage(preferredLanguage: string  | undefined) {
        this['preferred_language'] = preferredLanguage;
    }
    public get preferredLanguage(): string | undefined {
        return this['preferred_language'];
    }
    public withProfileUrl(profileUrl: string): UserDto {
        this['profile_url'] = profileUrl;
        return this;
    }
    public set profileUrl(profileUrl: string  | undefined) {
        this['profile_url'] = profileUrl;
    }
    public get profileUrl(): string | undefined {
        return this['profile_url'];
    }
    public withTimezone(timezone: string): UserDto {
        this['timezone'] = timezone;
        return this;
    }
    public withTitle(title: string): UserDto {
        this['title'] = title;
        return this;
    }
    public withUserId(userId: string): UserDto {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): UserDto {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserType(userType: string): UserDto {
        this['user_type'] = userType;
        return this;
    }
    public set userType(userType: string  | undefined) {
        this['user_type'] = userType;
    }
    public get userType(): string | undefined {
        return this['user_type'];
    }
    public withCreatedAt(createdAt: number): UserDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withCreatedBy(createdBy: string): UserDto {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withUpdatedAt(updatedAt: number): UserDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: number  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): number | undefined {
        return this['updated_at'];
    }
    public withUpdatedBy(updatedBy: string): UserDto {
        this['updated_by'] = updatedBy;
        return this;
    }
    public set updatedBy(updatedBy: string  | undefined) {
        this['updated_by'] = updatedBy;
    }
    public get updatedBy(): string | undefined {
        return this['updated_by'];
    }
    public withEnabled(enabled: boolean): UserDto {
        this['enabled'] = enabled;
        return this;
    }
    public withEnterprise(enterprise: EnterpriseDto): UserDto {
        this['enterprise'] = enterprise;
        return this;
    }
}