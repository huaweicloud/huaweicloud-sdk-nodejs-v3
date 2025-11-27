import { UpdateAssociatedZonesRequest } from './UpdateAssociatedZonesRequest';


export class UpdateClusterGroupAssociatedZonesRequest {
    public clustergroupid?: string;
    public body?: UpdateAssociatedZonesRequest;
    public constructor(clustergroupid?: string) { 
        this['clustergroupid'] = clustergroupid;
    }
    public withClustergroupid(clustergroupid: string): UpdateClusterGroupAssociatedZonesRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withBody(body: UpdateAssociatedZonesRequest): UpdateClusterGroupAssociatedZonesRequest {
        this['body'] = body;
        return this;
    }
}