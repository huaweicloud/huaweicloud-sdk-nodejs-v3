import { UpdateLineGroupsBody } from './UpdateLineGroupsBody';


export class UpdateLineGroupsRequest {
    private 'linegroup_id'?: string;
    public body?: UpdateLineGroupsBody;
    public constructor(linegroupId?: string) { 
        this['linegroup_id'] = linegroupId;
    }
    public withLinegroupId(linegroupId: string): UpdateLineGroupsRequest {
        this['linegroup_id'] = linegroupId;
        return this;
    }
    public set linegroupId(linegroupId: string  | undefined) {
        this['linegroup_id'] = linegroupId;
    }
    public get linegroupId(): string | undefined {
        return this['linegroup_id'];
    }
    public withBody(body: UpdateLineGroupsBody): UpdateLineGroupsRequest {
        this['body'] = body;
        return this;
    }
}