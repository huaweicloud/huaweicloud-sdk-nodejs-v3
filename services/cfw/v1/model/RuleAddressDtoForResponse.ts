import { AddressGroupVO } from './AddressGroupVO';
import { IpRegionDto } from './IpRegionDto';


export class RuleAddressDtoForResponse {
    public type?: number;
    private 'address_type'?: number;
    public address?: string;
    private 'address_set_id'?: string;
    private 'address_set_name'?: string;
    private 'domain_address_name'?: string;
    private 'region_list_json'?: string;
    private 'region_list'?: Array<IpRegionDto>;
    private 'domain_set_id'?: string;
    private 'domain_set_name'?: string;
    private 'ip_address'?: Array<string>;
    private 'address_group'?: Array<string>;
    private 'address_group_names'?: Array<AddressGroupVO>;
    private 'address_set_type'?: number;
    public constructor(type?: number) { 
        this['type'] = type;
    }
    public withType(type: number): RuleAddressDtoForResponse {
        this['type'] = type;
        return this;
    }
    public withAddressType(addressType: number): RuleAddressDtoForResponse {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: number  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): number | undefined {
        return this['address_type'];
    }
    public withAddress(address: string): RuleAddressDtoForResponse {
        this['address'] = address;
        return this;
    }
    public withAddressSetId(addressSetId: string): RuleAddressDtoForResponse {
        this['address_set_id'] = addressSetId;
        return this;
    }
    public set addressSetId(addressSetId: string  | undefined) {
        this['address_set_id'] = addressSetId;
    }
    public get addressSetId(): string | undefined {
        return this['address_set_id'];
    }
    public withAddressSetName(addressSetName: string): RuleAddressDtoForResponse {
        this['address_set_name'] = addressSetName;
        return this;
    }
    public set addressSetName(addressSetName: string  | undefined) {
        this['address_set_name'] = addressSetName;
    }
    public get addressSetName(): string | undefined {
        return this['address_set_name'];
    }
    public withDomainAddressName(domainAddressName: string): RuleAddressDtoForResponse {
        this['domain_address_name'] = domainAddressName;
        return this;
    }
    public set domainAddressName(domainAddressName: string  | undefined) {
        this['domain_address_name'] = domainAddressName;
    }
    public get domainAddressName(): string | undefined {
        return this['domain_address_name'];
    }
    public withRegionListJson(regionListJson: string): RuleAddressDtoForResponse {
        this['region_list_json'] = regionListJson;
        return this;
    }
    public set regionListJson(regionListJson: string  | undefined) {
        this['region_list_json'] = regionListJson;
    }
    public get regionListJson(): string | undefined {
        return this['region_list_json'];
    }
    public withRegionList(regionList: Array<IpRegionDto>): RuleAddressDtoForResponse {
        this['region_list'] = regionList;
        return this;
    }
    public set regionList(regionList: Array<IpRegionDto>  | undefined) {
        this['region_list'] = regionList;
    }
    public get regionList(): Array<IpRegionDto> | undefined {
        return this['region_list'];
    }
    public withDomainSetId(domainSetId: string): RuleAddressDtoForResponse {
        this['domain_set_id'] = domainSetId;
        return this;
    }
    public set domainSetId(domainSetId: string  | undefined) {
        this['domain_set_id'] = domainSetId;
    }
    public get domainSetId(): string | undefined {
        return this['domain_set_id'];
    }
    public withDomainSetName(domainSetName: string): RuleAddressDtoForResponse {
        this['domain_set_name'] = domainSetName;
        return this;
    }
    public set domainSetName(domainSetName: string  | undefined) {
        this['domain_set_name'] = domainSetName;
    }
    public get domainSetName(): string | undefined {
        return this['domain_set_name'];
    }
    public withIpAddress(ipAddress: Array<string>): RuleAddressDtoForResponse {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: Array<string>  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): Array<string> | undefined {
        return this['ip_address'];
    }
    public withAddressGroup(addressGroup: Array<string>): RuleAddressDtoForResponse {
        this['address_group'] = addressGroup;
        return this;
    }
    public set addressGroup(addressGroup: Array<string>  | undefined) {
        this['address_group'] = addressGroup;
    }
    public get addressGroup(): Array<string> | undefined {
        return this['address_group'];
    }
    public withAddressGroupNames(addressGroupNames: Array<AddressGroupVO>): RuleAddressDtoForResponse {
        this['address_group_names'] = addressGroupNames;
        return this;
    }
    public set addressGroupNames(addressGroupNames: Array<AddressGroupVO>  | undefined) {
        this['address_group_names'] = addressGroupNames;
    }
    public get addressGroupNames(): Array<AddressGroupVO> | undefined {
        return this['address_group_names'];
    }
    public withAddressSetType(addressSetType: number): RuleAddressDtoForResponse {
        this['address_set_type'] = addressSetType;
        return this;
    }
    public set addressSetType(addressSetType: number  | undefined) {
        this['address_set_type'] = addressSetType;
    }
    public get addressSetType(): number | undefined {
        return this['address_set_type'];
    }
}