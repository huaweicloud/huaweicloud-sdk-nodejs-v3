

export class ListPublicipsRequest {
    public marker?: string;
    public limit?: number;
    private 'ip_version'?: ListPublicipsRequestIpVersionEnum | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'port_id'?: Array<string> | undefined;
    private 'public_ip_address'?: Array<string> | undefined;
    private 'private_ip_address'?: Array<string> | undefined;
    public id?: Array<string>;
    private 'allow_share_bandwidth_type_any'?: Array<string> | undefined;
    public constructor() { 
    }
    public withMarker(marker: string): ListPublicipsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListPublicipsRequest {
        this['limit'] = limit;
        return this;
    }
    public withIpVersion(ipVersion: ListPublicipsRequestIpVersionEnum): ListPublicipsRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: ListPublicipsRequestIpVersionEnum | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPublicipsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withPortId(portId: Array<string>): ListPublicipsRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: Array<string> | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
    public withPublicIpAddress(publicIpAddress: Array<string>): ListPublicipsRequest {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: Array<string> | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress() {
        return this['public_ip_address'];
    }
    public withPrivateIpAddress(privateIpAddress: Array<string>): ListPublicipsRequest {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: Array<string> | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress() {
        return this['private_ip_address'];
    }
    public withId(id: Array<string>): ListPublicipsRequest {
        this['id'] = id;
        return this;
    }
    public withAllowShareBandwidthTypeAny(allowShareBandwidthTypeAny: Array<string>): ListPublicipsRequest {
        this['allow_share_bandwidth_type_any'] = allowShareBandwidthTypeAny;
        return this;
    }
    public set allowShareBandwidthTypeAny(allowShareBandwidthTypeAny: Array<string> | undefined) {
        this['allow_share_bandwidth_type_any'] = allowShareBandwidthTypeAny;
    }
    public get allowShareBandwidthTypeAny() {
        return this['allow_share_bandwidth_type_any'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPublicipsRequestIpVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
