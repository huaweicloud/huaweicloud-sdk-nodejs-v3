import { Links } from './Links';


export class Image {
    public id?: string;
    public links?: Array<Links>;
    public constructor() { 
    }
    public withId(id: string): Image {
        this['id'] = id;
        return this;
    }
    public withLinks(links: Array<Links>): Image {
        this['links'] = links;
        return this;
    }
}