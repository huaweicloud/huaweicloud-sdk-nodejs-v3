import { RadiusHost } from './RadiusHost';


export class RadiusConfigInfo {
    private 'radius_configs'?: Array<RadiusHost>;
    private 'radius_secret'?: string;
    private 'radius_timeout'?: number;
    private 'radius_attempt_time'?: number;
    private 'domain_in_user_prefix'?: string;
    private 'radius_auth_type'?: string;
    public enable?: boolean;
    private 'auth_protocol'?: string;
    private 'verification_code_display_enable'?: boolean;
    private 'verification_code_conditions'?: number;
    private 'obtain_code_attributes'?: object;
    private 'check_code_attributes'?: object;
    public constructor() { 
    }
    public withRadiusConfigs(radiusConfigs: Array<RadiusHost>): RadiusConfigInfo {
        this['radius_configs'] = radiusConfigs;
        return this;
    }
    public set radiusConfigs(radiusConfigs: Array<RadiusHost>  | undefined) {
        this['radius_configs'] = radiusConfigs;
    }
    public get radiusConfigs(): Array<RadiusHost> | undefined {
        return this['radius_configs'];
    }
    public withRadiusSecret(radiusSecret: string): RadiusConfigInfo {
        this['radius_secret'] = radiusSecret;
        return this;
    }
    public set radiusSecret(radiusSecret: string  | undefined) {
        this['radius_secret'] = radiusSecret;
    }
    public get radiusSecret(): string | undefined {
        return this['radius_secret'];
    }
    public withRadiusTimeout(radiusTimeout: number): RadiusConfigInfo {
        this['radius_timeout'] = radiusTimeout;
        return this;
    }
    public set radiusTimeout(radiusTimeout: number  | undefined) {
        this['radius_timeout'] = radiusTimeout;
    }
    public get radiusTimeout(): number | undefined {
        return this['radius_timeout'];
    }
    public withRadiusAttemptTime(radiusAttemptTime: number): RadiusConfigInfo {
        this['radius_attempt_time'] = radiusAttemptTime;
        return this;
    }
    public set radiusAttemptTime(radiusAttemptTime: number  | undefined) {
        this['radius_attempt_time'] = radiusAttemptTime;
    }
    public get radiusAttemptTime(): number | undefined {
        return this['radius_attempt_time'];
    }
    public withDomainInUserPrefix(domainInUserPrefix: string): RadiusConfigInfo {
        this['domain_in_user_prefix'] = domainInUserPrefix;
        return this;
    }
    public set domainInUserPrefix(domainInUserPrefix: string  | undefined) {
        this['domain_in_user_prefix'] = domainInUserPrefix;
    }
    public get domainInUserPrefix(): string | undefined {
        return this['domain_in_user_prefix'];
    }
    public withRadiusAuthType(radiusAuthType: string): RadiusConfigInfo {
        this['radius_auth_type'] = radiusAuthType;
        return this;
    }
    public set radiusAuthType(radiusAuthType: string  | undefined) {
        this['radius_auth_type'] = radiusAuthType;
    }
    public get radiusAuthType(): string | undefined {
        return this['radius_auth_type'];
    }
    public withEnable(enable: boolean): RadiusConfigInfo {
        this['enable'] = enable;
        return this;
    }
    public withAuthProtocol(authProtocol: string): RadiusConfigInfo {
        this['auth_protocol'] = authProtocol;
        return this;
    }
    public set authProtocol(authProtocol: string  | undefined) {
        this['auth_protocol'] = authProtocol;
    }
    public get authProtocol(): string | undefined {
        return this['auth_protocol'];
    }
    public withVerificationCodeDisplayEnable(verificationCodeDisplayEnable: boolean): RadiusConfigInfo {
        this['verification_code_display_enable'] = verificationCodeDisplayEnable;
        return this;
    }
    public set verificationCodeDisplayEnable(verificationCodeDisplayEnable: boolean  | undefined) {
        this['verification_code_display_enable'] = verificationCodeDisplayEnable;
    }
    public get verificationCodeDisplayEnable(): boolean | undefined {
        return this['verification_code_display_enable'];
    }
    public withVerificationCodeConditions(verificationCodeConditions: number): RadiusConfigInfo {
        this['verification_code_conditions'] = verificationCodeConditions;
        return this;
    }
    public set verificationCodeConditions(verificationCodeConditions: number  | undefined) {
        this['verification_code_conditions'] = verificationCodeConditions;
    }
    public get verificationCodeConditions(): number | undefined {
        return this['verification_code_conditions'];
    }
    public withObtainCodeAttributes(obtainCodeAttributes: object): RadiusConfigInfo {
        this['obtain_code_attributes'] = obtainCodeAttributes;
        return this;
    }
    public set obtainCodeAttributes(obtainCodeAttributes: object  | undefined) {
        this['obtain_code_attributes'] = obtainCodeAttributes;
    }
    public get obtainCodeAttributes(): object | undefined {
        return this['obtain_code_attributes'];
    }
    public withCheckCodeAttributes(checkCodeAttributes: object): RadiusConfigInfo {
        this['check_code_attributes'] = checkCodeAttributes;
        return this;
    }
    public set checkCodeAttributes(checkCodeAttributes: object  | undefined) {
        this['check_code_attributes'] = checkCodeAttributes;
    }
    public get checkCodeAttributes(): object | undefined {
        return this['check_code_attributes'];
    }
}