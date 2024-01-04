import { SkippedCheckItemList } from './SkippedCheckItemList';


export class PrecheckSpec {
    public clusterID?: string;
    public clusterVersion?: string;
    public targetVersion?: string;
    public skippedCheckItemList?: Array<SkippedCheckItemList>;
    public constructor() { 
    }
    public withClusterID(clusterID: string): PrecheckSpec {
        this['clusterID'] = clusterID;
        return this;
    }
    public withClusterVersion(clusterVersion: string): PrecheckSpec {
        this['clusterVersion'] = clusterVersion;
        return this;
    }
    public withTargetVersion(targetVersion: string): PrecheckSpec {
        this['targetVersion'] = targetVersion;
        return this;
    }
    public withSkippedCheckItemList(skippedCheckItemList: Array<SkippedCheckItemList>): PrecheckSpec {
        this['skippedCheckItemList'] = skippedCheckItemList;
        return this;
    }
}