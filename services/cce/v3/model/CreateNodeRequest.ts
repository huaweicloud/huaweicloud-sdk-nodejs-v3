import { NodeCreateRequest } from './NodeCreateRequest';


export class CreateNodeRequest {
    private 'cluster_id'?: string;
    private 'Content-Type'?: string;
    public nodepoolScaleUp?: CreateNodeRequestNodepoolScaleUpEnum | string;
    public body?: NodeCreateRequest;
    public constructor(clusterId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): CreateNodeRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withContentType(contentType: string): CreateNodeRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withNodepoolScaleUp(nodepoolScaleUp: CreateNodeRequestNodepoolScaleUpEnum | string): CreateNodeRequest {
        this['nodepoolScaleUp'] = nodepoolScaleUp;
        return this;
    }
    public withBody(body: NodeCreateRequest): CreateNodeRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateNodeRequestNodepoolScaleUpEnum {
    NODEPOOLSCALEUP = 'NodepoolScaleUp'
}
