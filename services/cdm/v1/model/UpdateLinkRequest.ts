import { CdmCreateAndUpdateLinkReq } from './CdmCreateAndUpdateLinkReq';


export class UpdateLinkRequest {
    private 'cluster_id'?: string;
    private 'link_name'?: string;
    public body?: CdmCreateAndUpdateLinkReq;
    public constructor(clusterId?: string, linkName?: string) { 
        this['cluster_id'] = clusterId;
        this['link_name'] = linkName;
    }
    public withClusterId(clusterId: string): UpdateLinkRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withLinkName(linkName: string): UpdateLinkRequest {
        this['link_name'] = linkName;
        return this;
    }
    public set linkName(linkName: string  | undefined) {
        this['link_name'] = linkName;
    }
    public get linkName(): string | undefined {
        return this['link_name'];
    }
    public withBody(body: CdmCreateAndUpdateLinkReq): UpdateLinkRequest {
        this['body'] = body;
        return this;
    }
}