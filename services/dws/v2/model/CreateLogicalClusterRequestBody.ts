import { CreateLogicalClusterInfo } from './CreateLogicalClusterInfo';


export class CreateLogicalClusterRequestBody {
    private 'logical_cluster'?: CreateLogicalClusterInfo;
    public constructor(logicalCluster?: CreateLogicalClusterInfo) { 
        this['logical_cluster'] = logicalCluster;
    }
    public withLogicalCluster(logicalCluster: CreateLogicalClusterInfo): CreateLogicalClusterRequestBody {
        this['logical_cluster'] = logicalCluster;
        return this;
    }
    public set logicalCluster(logicalCluster: CreateLogicalClusterInfo  | undefined) {
        this['logical_cluster'] = logicalCluster;
    }
    public get logicalCluster(): CreateLogicalClusterInfo | undefined {
        return this['logical_cluster'];
    }
}