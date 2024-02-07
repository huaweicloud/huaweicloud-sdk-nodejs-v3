import { CaCertificateRequest } from './CaCertificateRequest';
import { VpnResourceTag } from './VpnResourceTag';


export class CreateCgwRequestBodyContent {
    public name?: string;
    private 'id_type'?: CreateCgwRequestBodyContentIdTypeEnum | string;
    private 'id_value'?: string;
    private 'bgp_asn'?: number;
    private 'ca_certificate'?: CaCertificateRequest;
    public tags?: Array<VpnResourceTag>;
    public constructor(idValue?: string) { 
        this['id_value'] = idValue;
    }
    public withName(name: string): CreateCgwRequestBodyContent {
        this['name'] = name;
        return this;
    }
    public withIdType(idType: CreateCgwRequestBodyContentIdTypeEnum | string): CreateCgwRequestBodyContent {
        this['id_type'] = idType;
        return this;
    }
    public set idType(idType: CreateCgwRequestBodyContentIdTypeEnum | string  | undefined) {
        this['id_type'] = idType;
    }
    public get idType(): CreateCgwRequestBodyContentIdTypeEnum | string | undefined {
        return this['id_type'];
    }
    public withIdValue(idValue: string): CreateCgwRequestBodyContent {
        this['id_value'] = idValue;
        return this;
    }
    public set idValue(idValue: string  | undefined) {
        this['id_value'] = idValue;
    }
    public get idValue(): string | undefined {
        return this['id_value'];
    }
    public withBgpAsn(bgpAsn: number): CreateCgwRequestBodyContent {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withCaCertificate(caCertificate: CaCertificateRequest): CreateCgwRequestBodyContent {
        this['ca_certificate'] = caCertificate;
        return this;
    }
    public set caCertificate(caCertificate: CaCertificateRequest  | undefined) {
        this['ca_certificate'] = caCertificate;
    }
    public get caCertificate(): CaCertificateRequest | undefined {
        return this['ca_certificate'];
    }
    public withTags(tags: Array<VpnResourceTag>): CreateCgwRequestBodyContent {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateCgwRequestBodyContentIdTypeEnum {
    IP = 'ip',
    FQDN = 'fqdn'
}
