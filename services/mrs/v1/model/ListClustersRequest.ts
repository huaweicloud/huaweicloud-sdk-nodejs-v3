

export class ListClustersRequest {
    public tags?: string;
    public pageSize?: string;
    public currentPage?: string;
    public clusterName?: string;
    public clusterState?: string;
    public enterpriseProjectId?: string;
    public constructor() { 
    }
    public withTags(tags: string): ListClustersRequest {
        this['tags'] = tags;
        return this;
    }
    public withPageSize(pageSize: string): ListClustersRequest {
        this['pageSize'] = pageSize;
        return this;
    }
    public withCurrentPage(currentPage: string): ListClustersRequest {
        this['currentPage'] = currentPage;
        return this;
    }
    public withClusterName(clusterName: string): ListClustersRequest {
        this['clusterName'] = clusterName;
        return this;
    }
    public withClusterState(clusterState: string): ListClustersRequest {
        this['clusterState'] = clusterState;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListClustersRequest {
        this['enterpriseProjectId'] = enterpriseProjectId;
        return this;
    }
}