import { AssociateSiteConnectionBandwidth } from './AssociateSiteConnectionBandwidth';


export class AssociateSiteConnectionBandwidthRequestBody {
    private 'site_connection'?: AssociateSiteConnectionBandwidth;
    public constructor(siteConnection?: AssociateSiteConnectionBandwidth) { 
        this['site_connection'] = siteConnection;
    }
    public withSiteConnection(siteConnection: AssociateSiteConnectionBandwidth): AssociateSiteConnectionBandwidthRequestBody {
        this['site_connection'] = siteConnection;
        return this;
    }
    public set siteConnection(siteConnection: AssociateSiteConnectionBandwidth  | undefined) {
        this['site_connection'] = siteConnection;
    }
    public get siteConnection(): AssociateSiteConnectionBandwidth | undefined {
        return this['site_connection'];
    }
}