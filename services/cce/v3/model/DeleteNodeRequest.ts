

export class DeleteNodeRequest {
    private 'cluster_id': string | undefined;
    private 'node_id': string | undefined;
    private 'Content-Type': string | undefined;
    public nodepoolScaleDown?: DeleteNodeRequestNodepoolScaleDownEnum;
    public constructor(clusterId?: any, nodeId?: any, contentType?: any) { 
        this['cluster_id'] = clusterId;
        this['node_id'] = nodeId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): DeleteNodeRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withNodeId(nodeId: string): DeleteNodeRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId() {
        return this['node_id'];
    }
    public withContentType(contentType: string): DeleteNodeRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withNodepoolScaleDown(nodepoolScaleDown: DeleteNodeRequestNodepoolScaleDownEnum): DeleteNodeRequest {
        this['nodepoolScaleDown'] = nodepoolScaleDown;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteNodeRequestNodepoolScaleDownEnum {
    NOSCALEDOWN = 'NoScaleDown'
}
