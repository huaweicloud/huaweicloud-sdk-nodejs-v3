import { CdmCreateAndUpdateLinkReq } from './CdmCreateAndUpdateLinkReq';


export class CreateLinkRequest {
    private 'cluster_id'?: string;
    public validate?: string;
    public body?: CdmCreateAndUpdateLinkReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateLinkRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withValidate(validate: string): CreateLinkRequest {
        this['validate'] = validate;
        return this;
    }
    public withBody(body: CdmCreateAndUpdateLinkReq): CreateLinkRequest {
        this['body'] = body;
        return this;
    }
}