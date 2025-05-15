import { UpdateSiteConnectionBandwidth } from './UpdateSiteConnectionBandwidth';


export class UpdateSiteConnectionBandwidthRequestBody {
    private 'site_connection'?: UpdateSiteConnectionBandwidth;
    public constructor(siteConnection?: UpdateSiteConnectionBandwidth) { 
        this['site_connection'] = siteConnection;
    }
    public withSiteConnection(siteConnection: UpdateSiteConnectionBandwidth): UpdateSiteConnectionBandwidthRequestBody {
        this['site_connection'] = siteConnection;
        return this;
    }
    public set siteConnection(siteConnection: UpdateSiteConnectionBandwidth  | undefined) {
        this['site_connection'] = siteConnection;
    }
    public get siteConnection(): UpdateSiteConnectionBandwidth | undefined {
        return this['site_connection'];
    }
}