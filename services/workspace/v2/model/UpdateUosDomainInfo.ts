import { BaseThirdDomainController } from './BaseThirdDomainController';


export class UpdateUosDomainInfo {
    public username?: string;
    private 'user_password'?: string;
    private 'main_dc_address'?: string;
    private 'open_interface_address'?: string;
    private 'open_interface_domain_name'?: string;
    private 'internal_service_address'?: string;
    private 'app_cert'?: string;
    private 'app_cert_key'?: string;
    private 'openapi_ca_cert'?: string;
    public id?: string;
    private 'app_cert_id'?: string;
    private 'openapi_ca_cert_id'?: string;
    public constructor() { 
    }
    public withUsername(username: string): UpdateUosDomainInfo {
        this['username'] = username;
        return this;
    }
    public withUserPassword(userPassword: string): UpdateUosDomainInfo {
        this['user_password'] = userPassword;
        return this;
    }
    public set userPassword(userPassword: string  | undefined) {
        this['user_password'] = userPassword;
    }
    public get userPassword(): string | undefined {
        return this['user_password'];
    }
    public withMainDcAddress(mainDcAddress: string): UpdateUosDomainInfo {
        this['main_dc_address'] = mainDcAddress;
        return this;
    }
    public set mainDcAddress(mainDcAddress: string  | undefined) {
        this['main_dc_address'] = mainDcAddress;
    }
    public get mainDcAddress(): string | undefined {
        return this['main_dc_address'];
    }
    public withOpenInterfaceAddress(openInterfaceAddress: string): UpdateUosDomainInfo {
        this['open_interface_address'] = openInterfaceAddress;
        return this;
    }
    public set openInterfaceAddress(openInterfaceAddress: string  | undefined) {
        this['open_interface_address'] = openInterfaceAddress;
    }
    public get openInterfaceAddress(): string | undefined {
        return this['open_interface_address'];
    }
    public withOpenInterfaceDomainName(openInterfaceDomainName: string): UpdateUosDomainInfo {
        this['open_interface_domain_name'] = openInterfaceDomainName;
        return this;
    }
    public set openInterfaceDomainName(openInterfaceDomainName: string  | undefined) {
        this['open_interface_domain_name'] = openInterfaceDomainName;
    }
    public get openInterfaceDomainName(): string | undefined {
        return this['open_interface_domain_name'];
    }
    public withInternalServiceAddress(internalServiceAddress: string): UpdateUosDomainInfo {
        this['internal_service_address'] = internalServiceAddress;
        return this;
    }
    public set internalServiceAddress(internalServiceAddress: string  | undefined) {
        this['internal_service_address'] = internalServiceAddress;
    }
    public get internalServiceAddress(): string | undefined {
        return this['internal_service_address'];
    }
    public withAppCert(appCert: string): UpdateUosDomainInfo {
        this['app_cert'] = appCert;
        return this;
    }
    public set appCert(appCert: string  | undefined) {
        this['app_cert'] = appCert;
    }
    public get appCert(): string | undefined {
        return this['app_cert'];
    }
    public withAppCertKey(appCertKey: string): UpdateUosDomainInfo {
        this['app_cert_key'] = appCertKey;
        return this;
    }
    public set appCertKey(appCertKey: string  | undefined) {
        this['app_cert_key'] = appCertKey;
    }
    public get appCertKey(): string | undefined {
        return this['app_cert_key'];
    }
    public withOpenapiCaCert(openapiCaCert: string): UpdateUosDomainInfo {
        this['openapi_ca_cert'] = openapiCaCert;
        return this;
    }
    public set openapiCaCert(openapiCaCert: string  | undefined) {
        this['openapi_ca_cert'] = openapiCaCert;
    }
    public get openapiCaCert(): string | undefined {
        return this['openapi_ca_cert'];
    }
    public withId(id: string): UpdateUosDomainInfo {
        this['id'] = id;
        return this;
    }
    public withAppCertId(appCertId: string): UpdateUosDomainInfo {
        this['app_cert_id'] = appCertId;
        return this;
    }
    public set appCertId(appCertId: string  | undefined) {
        this['app_cert_id'] = appCertId;
    }
    public get appCertId(): string | undefined {
        return this['app_cert_id'];
    }
    public withOpenapiCaCertId(openapiCaCertId: string): UpdateUosDomainInfo {
        this['openapi_ca_cert_id'] = openapiCaCertId;
        return this;
    }
    public set openapiCaCertId(openapiCaCertId: string  | undefined) {
        this['openapi_ca_cert_id'] = openapiCaCertId;
    }
    public get openapiCaCertId(): string | undefined {
        return this['openapi_ca_cert_id'];
    }
}