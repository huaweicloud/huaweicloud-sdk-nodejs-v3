

export class ListBareMetalServersRequest {
    public flavor?: string;
    public name?: string;
    public status?: string;
    public limit?: number;
    public offset?: number;
    public tags?: string;
    private 'reservation_id'?: string;
    public detail?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withFlavor(flavor: string): ListBareMetalServersRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withName(name: string): ListBareMetalServersRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListBareMetalServersRequest {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: number): ListBareMetalServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBareMetalServersRequest {
        this['offset'] = offset;
        return this;
    }
    public withTags(tags: string): ListBareMetalServersRequest {
        this['tags'] = tags;
        return this;
    }
    public withReservationId(reservationId: string): ListBareMetalServersRequest {
        this['reservation_id'] = reservationId;
        return this;
    }
    public set reservationId(reservationId: string  | undefined) {
        this['reservation_id'] = reservationId;
    }
    public get reservationId(): string | undefined {
        return this['reservation_id'];
    }
    public withDetail(detail: string): ListBareMetalServersRequest {
        this['detail'] = detail;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListBareMetalServersRequest {
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