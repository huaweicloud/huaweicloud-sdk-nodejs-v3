import { AddonInfo } from './AddonInfo';


export class AddonCheckSpec {
    public clusterID?: string;
    public addonList?: Array<AddonInfo>;
    public constructor(clusterID?: string, addonList?: Array<AddonInfo>) { 
        this['clusterID'] = clusterID;
        this['addonList'] = addonList;
    }
    public withClusterID(clusterID: string): AddonCheckSpec {
        this['clusterID'] = clusterID;
        return this;
    }
    public withAddonList(addonList: Array<AddonInfo>): AddonCheckSpec {
        this['addonList'] = addonList;
        return this;
    }
}