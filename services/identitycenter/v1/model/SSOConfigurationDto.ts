import { SessionConfigurationDto } from './SessionConfigurationDto';


export class SSOConfigurationDto {
    private 'mfa_mode'?: SSOConfigurationDtoMfaModeEnum | string;
    private 'no_mfa_signin_behavior'?: SSOConfigurationDtoNoMfaSigninBehaviorEnum | string;
    private 'no_password_signin_behavior'?: SSOConfigurationDtoNoPasswordSigninBehaviorEnum | string;
    private 'allowed_mfa_types'?: Array<SSOConfigurationDtoAllowedMfaTypesEnum> | Array<string>;
    private 'session_configuration'?: SessionConfigurationDto;
    public constructor() { 
    }
    public withMfaMode(mfaMode: SSOConfigurationDtoMfaModeEnum | string): SSOConfigurationDto {
        this['mfa_mode'] = mfaMode;
        return this;
    }
    public set mfaMode(mfaMode: SSOConfigurationDtoMfaModeEnum | string  | undefined) {
        this['mfa_mode'] = mfaMode;
    }
    public get mfaMode(): SSOConfigurationDtoMfaModeEnum | string | undefined {
        return this['mfa_mode'];
    }
    public withNoMfaSigninBehavior(noMfaSigninBehavior: SSOConfigurationDtoNoMfaSigninBehaviorEnum | string): SSOConfigurationDto {
        this['no_mfa_signin_behavior'] = noMfaSigninBehavior;
        return this;
    }
    public set noMfaSigninBehavior(noMfaSigninBehavior: SSOConfigurationDtoNoMfaSigninBehaviorEnum | string  | undefined) {
        this['no_mfa_signin_behavior'] = noMfaSigninBehavior;
    }
    public get noMfaSigninBehavior(): SSOConfigurationDtoNoMfaSigninBehaviorEnum | string | undefined {
        return this['no_mfa_signin_behavior'];
    }
    public withNoPasswordSigninBehavior(noPasswordSigninBehavior: SSOConfigurationDtoNoPasswordSigninBehaviorEnum | string): SSOConfigurationDto {
        this['no_password_signin_behavior'] = noPasswordSigninBehavior;
        return this;
    }
    public set noPasswordSigninBehavior(noPasswordSigninBehavior: SSOConfigurationDtoNoPasswordSigninBehaviorEnum | string  | undefined) {
        this['no_password_signin_behavior'] = noPasswordSigninBehavior;
    }
    public get noPasswordSigninBehavior(): SSOConfigurationDtoNoPasswordSigninBehaviorEnum | string | undefined {
        return this['no_password_signin_behavior'];
    }
    public withAllowedMfaTypes(allowedMfaTypes: Array<SSOConfigurationDtoAllowedMfaTypesEnum> | Array<string>): SSOConfigurationDto {
        this['allowed_mfa_types'] = allowedMfaTypes;
        return this;
    }
    public set allowedMfaTypes(allowedMfaTypes: Array<SSOConfigurationDtoAllowedMfaTypesEnum> | Array<string>  | undefined) {
        this['allowed_mfa_types'] = allowedMfaTypes;
    }
    public get allowedMfaTypes(): Array<SSOConfigurationDtoAllowedMfaTypesEnum> | Array<string> | undefined {
        return this['allowed_mfa_types'];
    }
    public withSessionConfiguration(sessionConfiguration: SessionConfigurationDto): SSOConfigurationDto {
        this['session_configuration'] = sessionConfiguration;
        return this;
    }
    public set sessionConfiguration(sessionConfiguration: SessionConfigurationDto  | undefined) {
        this['session_configuration'] = sessionConfiguration;
    }
    public get sessionConfiguration(): SessionConfigurationDto | undefined {
        return this['session_configuration'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SSOConfigurationDtoMfaModeEnum {
    CONTEXT_AWARE = 'CONTEXT_AWARE',
    DISABLED = 'DISABLED',
    ALWAYS_ON = 'ALWAYS_ON'
}
/**
    * @export
    * @enum {string}
    */
export enum SSOConfigurationDtoNoMfaSigninBehaviorEnum {
    ALLOWED_WITH_ENROLLMENT = 'ALLOWED_WITH_ENROLLMENT',
    ALLOWED = 'ALLOWED',
    EMAIL_OTP = 'EMAIL_OTP',
    BLOCKED = 'BLOCKED'
}
/**
    * @export
    * @enum {string}
    */
export enum SSOConfigurationDtoNoPasswordSigninBehaviorEnum {
    BLOCKED = 'BLOCKED',
    EMAIL_OTP = 'EMAIL_OTP'
}
/**
    * @export
    * @enum {string}
    */
export enum SSOConfigurationDtoAllowedMfaTypesEnum {
    TOTP = 'TOTP',
    WEBAUTHN = 'WEBAUTHN',
    WEBAUTHN_SECURITY_KEY = 'WEBAUTHN_SECURITY_KEY'
}
