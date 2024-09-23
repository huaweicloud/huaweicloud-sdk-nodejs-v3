

export class ListServersDetailsRequest {
    private 'enterprise_project_id'?: string;
    public flavor?: string;
    public ip?: string;
    public limit?: number;
    public name?: string;
    private 'not-tags'?: string;
    public offset?: number;
    private 'reservation_id'?: string;
    public status?: string;
    public tags?: string;
    private 'ip_eq'?: string;
    private 'server_id'?: string;
    public marker?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListServersDetailsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withFlavor(flavor: string): ListServersDetailsRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withIp(ip: string): ListServersDetailsRequest {
        this['ip'] = ip;
        return this;
    }
    public withLimit(limit: number): ListServersDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListServersDetailsRequest {
        this['name'] = name;
        return this;
    }
    public withNotTags(notTags: string): ListServersDetailsRequest {
        this['not-tags'] = notTags;
        return this;
    }
    public set notTags(notTags: string  | undefined) {
        this['not-tags'] = notTags;
    }
    public get notTags(): string | undefined {
        return this['not-tags'];
    }
    public withOffset(offset: number): ListServersDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withReservationId(reservationId: string): ListServersDetailsRequest {
        this['reservation_id'] = reservationId;
        return this;
    }
    public set reservationId(reservationId: string  | undefined) {
        this['reservation_id'] = reservationId;
    }
    public get reservationId(): string | undefined {
        return this['reservation_id'];
    }
    public withStatus(status: string): ListServersDetailsRequest {
        this['status'] = status;
        return this;
    }
    public withTags(tags: string): ListServersDetailsRequest {
        this['tags'] = tags;
        return this;
    }
    public withIpEq(ipEq: string): ListServersDetailsRequest {
        this['ip_eq'] = ipEq;
        return this;
    }
    public set ipEq(ipEq: string  | undefined) {
        this['ip_eq'] = ipEq;
    }
    public get ipEq(): string | undefined {
        return this['ip_eq'];
    }
    public withServerId(serverId: string): ListServersDetailsRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withMarker(marker: string): ListServersDetailsRequest {
        this['marker'] = marker;
        return this;
    }
}