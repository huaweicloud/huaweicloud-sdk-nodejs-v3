import { UpdateEsElbRequestBody } from './UpdateEsElbRequestBody';


export class EnableOrDisableElbRequest {
    private 'cluster_id'?: string;
    public body?: UpdateEsElbRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): EnableOrDisableElbRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: UpdateEsElbRequestBody): EnableOrDisableElbRequest {
        this['body'] = body;
        return this;
    }
}