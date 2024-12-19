import { GdgwRouteTableRequest } from './GdgwRouteTableRequest';


export class UpdateGdgwRoutetableRequestBody {
    private 'dry_run'?: boolean;
    private 'gdgw_routetable'?: GdgwRouteTableRequest;
    public constructor() { 
    }
    public withDryRun(dryRun: boolean): UpdateGdgwRoutetableRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withGdgwRoutetable(gdgwRoutetable: GdgwRouteTableRequest): UpdateGdgwRoutetableRequestBody {
        this['gdgw_routetable'] = gdgwRoutetable;
        return this;
    }
    public set gdgwRoutetable(gdgwRoutetable: GdgwRouteTableRequest  | undefined) {
        this['gdgw_routetable'] = gdgwRoutetable;
    }
    public get gdgwRoutetable(): GdgwRouteTableRequest | undefined {
        return this['gdgw_routetable'];
    }
}