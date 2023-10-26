import { Links } from './Links';


export class CdmCreateAndUpdateLinkReq {
    public links?: Array<Links>;
    public constructor(links?: Array<Links>) { 
        this['links'] = links;
    }
    public withLinks(links: Array<Links>): CdmCreateAndUpdateLinkReq {
        this['links'] = links;
        return this;
    }
}