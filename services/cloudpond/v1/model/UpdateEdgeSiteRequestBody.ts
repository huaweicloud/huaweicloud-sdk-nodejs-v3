import { UpdateEdgeSite } from './UpdateEdgeSite';


export class UpdateEdgeSiteRequestBody {
    private 'edge_site'?: UpdateEdgeSite;
    public constructor(edgeSite?: UpdateEdgeSite) { 
        this['edge_site'] = edgeSite;
    }
    public withEdgeSite(edgeSite: UpdateEdgeSite): UpdateEdgeSiteRequestBody {
        this['edge_site'] = edgeSite;
        return this;
    }
    public set edgeSite(edgeSite: UpdateEdgeSite  | undefined) {
        this['edge_site'] = edgeSite;
    }
    public get edgeSite(): UpdateEdgeSite | undefined {
        return this['edge_site'];
    }
}