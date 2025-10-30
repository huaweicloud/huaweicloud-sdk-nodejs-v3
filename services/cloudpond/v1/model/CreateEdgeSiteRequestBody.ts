import { CreateEdgeSite } from './CreateEdgeSite';


export class CreateEdgeSiteRequestBody {
    private 'edge_site'?: CreateEdgeSite;
    public constructor(edgeSite?: CreateEdgeSite) { 
        this['edge_site'] = edgeSite;
    }
    public withEdgeSite(edgeSite: CreateEdgeSite): CreateEdgeSiteRequestBody {
        this['edge_site'] = edgeSite;
        return this;
    }
    public set edgeSite(edgeSite: CreateEdgeSite  | undefined) {
        this['edge_site'] = edgeSite;
    }
    public get edgeSite(): CreateEdgeSite | undefined {
        return this['edge_site'];
    }
}