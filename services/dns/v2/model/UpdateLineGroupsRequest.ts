import { UpdateLineGroupsBody } from './UpdateLineGroupsBody';


export class UpdateLineGroupsRequest {
    private 'linegroup_id': string | undefined;
    public body?: UpdateLineGroupsBody;
    public constructor(linegroupId?: any) { 
        this['linegroup_id'] = linegroupId;
    }
    public withLinegroupId(linegroupId: string): UpdateLineGroupsRequest {
        this['linegroup_id'] = linegroupId;
        return this;
    }
    public set linegroupId(linegroupId: string | undefined) {
        this['linegroup_id'] = linegroupId;
    }
    public get linegroupId() {
        return this['linegroup_id'];
    }
    public withBody(body: UpdateLineGroupsBody): UpdateLineGroupsRequest {
        this['body'] = body;
        return this;
    }
}