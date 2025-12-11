

export class ListVirsubnetCidrReservationsRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    private 'virsubnet_id'?: Array<string>;
    public cidr?: Array<string>;
    private 'ip_version'?: Array<number>;
    public name?: Array<string>;
    public description?: Array<string>;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListVirsubnetCidrReservationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVirsubnetCidrReservationsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListVirsubnetCidrReservationsRequest {
        this['id'] = id;
        return this;
    }
    public withVirsubnetId(virsubnetId: Array<string>): ListVirsubnetCidrReservationsRequest {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: Array<string>  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): Array<string> | undefined {
        return this['virsubnet_id'];
    }
    public withCidr(cidr: Array<string>): ListVirsubnetCidrReservationsRequest {
        this['cidr'] = cidr;
        return this;
    }
    public withIpVersion(ipVersion: Array<number>): ListVirsubnetCidrReservationsRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: Array<number>  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): Array<number> | undefined {
        return this['ip_version'];
    }
    public withName(name: Array<string>): ListVirsubnetCidrReservationsRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListVirsubnetCidrReservationsRequest {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVirsubnetCidrReservationsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}