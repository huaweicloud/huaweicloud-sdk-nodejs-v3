

export class ListBareMetalServersDetailRequest {
    public flavor?: string;
    public name?: string;
    public status?: string;
    public limit?: number;
    public offset?: number;
    public detail?: string;
    public constructor() { 
    }
    public withFlavor(flavor: string): ListBareMetalServersDetailRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withName(name: string): ListBareMetalServersDetailRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ListBareMetalServersDetailRequest {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: number): ListBareMetalServersDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBareMetalServersDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withDetail(detail: string): ListBareMetalServersDetailRequest {
        this['detail'] = detail;
        return this;
    }
}