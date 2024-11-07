import { UpdateSiteConnectionBandwidthSize } from './UpdateSiteConnectionBandwidthSize';


export class UpdateSiteConnectionBandwidthSizeRequestBody {
    private 'site_connection'?: UpdateSiteConnectionBandwidthSize;
    public constructor(siteConnection?: UpdateSiteConnectionBandwidthSize) { 
        this['site_connection'] = siteConnection;
    }
    public withSiteConnection(siteConnection: UpdateSiteConnectionBandwidthSize): UpdateSiteConnectionBandwidthSizeRequestBody {
        this['site_connection'] = siteConnection;
        return this;
    }
    public set siteConnection(siteConnection: UpdateSiteConnectionBandwidthSize  | undefined) {
        this['site_connection'] = siteConnection;
    }
    public get siteConnection(): UpdateSiteConnectionBandwidthSize | undefined {
        return this['site_connection'];
    }
}