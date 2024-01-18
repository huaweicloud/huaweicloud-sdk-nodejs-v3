import { CaCertificate } from './CaCertificate';
import { VpnResourceTag } from './VpnResourceTag';


export class ResponseCustomerGateway {
    public id?: string;
    public name?: string;
    private 'bgp_asn'?: number;
    private 'id_type'?: string;
    private 'id_value'?: string;
    private 'ca_certificate'?: CaCertificate;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public tags?: Array<VpnResourceTag>;
    public constructor() { 
    }
    public withId(id: string): ResponseCustomerGateway {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ResponseCustomerGateway {
        this['name'] = name;
        return this;
    }
    public withBgpAsn(bgpAsn: number): ResponseCustomerGateway {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withIdType(idType: string): ResponseCustomerGateway {
        this['id_type'] = idType;
        return this;
    }
    public set idType(idType: string  | undefined) {
        this['id_type'] = idType;
    }
    public get idType(): string | undefined {
        return this['id_type'];
    }
    public withIdValue(idValue: string): ResponseCustomerGateway {
        this['id_value'] = idValue;
        return this;
    }
    public set idValue(idValue: string  | undefined) {
        this['id_value'] = idValue;
    }
    public get idValue(): string | undefined {
        return this['id_value'];
    }
    public withCaCertificate(caCertificate: CaCertificate): ResponseCustomerGateway {
        this['ca_certificate'] = caCertificate;
        return this;
    }
    public set caCertificate(caCertificate: CaCertificate  | undefined) {
        this['ca_certificate'] = caCertificate;
    }
    public get caCertificate(): CaCertificate | undefined {
        return this['ca_certificate'];
    }
    public withCreatedAt(createdAt: Date): ResponseCustomerGateway {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): ResponseCustomerGateway {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withTags(tags: Array<VpnResourceTag>): ResponseCustomerGateway {
        this['tags'] = tags;
        return this;
    }
}