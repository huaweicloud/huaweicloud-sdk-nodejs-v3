import { LinksItem } from './LinksItem';


export class ListApiVersionsItem {
    public status?: string;
    public id?: string;
    public links?: Array<LinksItem>;
    public constructor() { 
    }
    public withStatus(status: string): ListApiVersionsItem {
        this['status'] = status;
        return this;
    }
    public withId(id: string): ListApiVersionsItem {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<LinksItem>): ListApiVersionsItem {
        this['links'] = links;
        return this;
    }
}