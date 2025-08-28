import { LinkInfo } from './LinkInfo';


export class ApiVersion {
    public id?: string;
    public links?: Array<LinkInfo>;
    public status?: string;
    public version?: string;
    public updated?: string;
    public constructor(id?: string, links?: Array<LinkInfo>, status?: string, updated?: string) { 
        this['id'] = id;
        this['links'] = links;
        this['status'] = status;
        this['updated'] = updated;
    }
    public withId(id: string): ApiVersion {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<LinkInfo>): ApiVersion {
        this['links'] = links;
        return this;
    }
    public withStatus(status: string): ApiVersion {
        this['status'] = status;
        return this;
    }
    public withVersion(version: string): ApiVersion {
        this['version'] = version;
        return this;
    }
    public withUpdated(updated: string): ApiVersion {
        this['updated'] = updated;
        return this;
    }
}