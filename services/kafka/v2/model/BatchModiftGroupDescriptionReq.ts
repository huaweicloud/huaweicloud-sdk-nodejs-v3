import { GroupCreateReq } from './GroupCreateReq';


export class BatchModiftGroupDescriptionReq {
    public groups?: Array<GroupCreateReq>;
    public constructor() { 
    }
    public withGroups(groups: Array<GroupCreateReq>): BatchModiftGroupDescriptionReq {
        this['groups'] = groups;
        return this;
    }
}