import { ListCollectConfigResponseBodyCsvcList } from './ListCollectConfigResponseBodyCsvcList';


export class ListCollectConfigResponseBodyAllVendors {
    private 'cloud_vendor'?: string;
    private 'csvc_list'?: Array<ListCollectConfigResponseBodyCsvcList>;
    public constructor() { 
    }
    public withCloudVendor(cloudVendor: string): ListCollectConfigResponseBodyAllVendors {
        this['cloud_vendor'] = cloudVendor;
        return this;
    }
    public set cloudVendor(cloudVendor: string  | undefined) {
        this['cloud_vendor'] = cloudVendor;
    }
    public get cloudVendor(): string | undefined {
        return this['cloud_vendor'];
    }
    public withCsvcList(csvcList: Array<ListCollectConfigResponseBodyCsvcList>): ListCollectConfigResponseBodyAllVendors {
        this['csvc_list'] = csvcList;
        return this;
    }
    public set csvcList(csvcList: Array<ListCollectConfigResponseBodyCsvcList>  | undefined) {
        this['csvc_list'] = csvcList;
    }
    public get csvcList(): Array<ListCollectConfigResponseBodyCsvcList> | undefined {
        return this['csvc_list'];
    }
}