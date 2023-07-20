import { LinksInfoResponse } from './LinksInfoResponse';


export class ApiVersion {
    public id?: string;
    public links?: Array<LinksInfoResponse>;
    public status?: string;
    public updated?: string;
    public constructor(id?: string, links?: Array<LinksInfoResponse>, status?: string, updated?: string) { 
        this['id'] = id;
        this['links'] = links;
        this['status'] = status;
        this['updated'] = updated;
    }
    public withId(id: string): ApiVersion {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<LinksInfoResponse>): ApiVersion {
        this['links'] = links;
        return this;
    }
    public withStatus(status: string): ApiVersion {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: string): ApiVersion {
        this['updated'] = updated;
        return this;
    }
}