import { ClusterConfigurationsSpecPackages } from './ClusterConfigurationsSpecPackages';


export class ClusterConfigurationsSpec {
    public packages?: Array<ClusterConfigurationsSpecPackages>;
    public constructor(packages?: Array<ClusterConfigurationsSpecPackages>) { 
        this['packages'] = packages;
    }
    public withPackages(packages: Array<ClusterConfigurationsSpecPackages>): ClusterConfigurationsSpec {
        this['packages'] = packages;
        return this;
    }
}