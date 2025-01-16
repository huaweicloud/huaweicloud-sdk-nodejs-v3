import { UpdateLineGroupsRequestBody } from './UpdateLineGroupsRequestBody';


export class UpdateLineGroupsRequest {
    private 'linegroup_id'?: string;
    public body?: UpdateLineGroupsRequestBody;
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
    public withBody(body: UpdateLineGroupsRequestBody): UpdateLineGroupsRequest {
        this['body'] = body;
        return this;
    }
}