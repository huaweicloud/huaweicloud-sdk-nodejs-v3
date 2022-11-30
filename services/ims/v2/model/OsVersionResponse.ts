import { Links } from './Links';


export class OsVersionResponse {
    public status: string;
    public id?: string;
    public links?: Array<Links>;
    public constructor(status?: any) { 
        this['status'] = status;
    }
    public withStatus(status: string): OsVersionResponse {
        this['status'] = status;
        return this;
    }
    public withId(id: string): OsVersionResponse {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Links>): OsVersionResponse {
        this['links'] = links;
        return this;
    }
}