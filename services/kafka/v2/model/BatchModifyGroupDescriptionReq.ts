import { GroupCreateReq } from './GroupCreateReq';


export class BatchModifyGroupDescriptionReq {
    public groups?: Array<GroupCreateReq>;
    public constructor() { 
    }
    public withGroups(groups: Array<GroupCreateReq>): BatchModifyGroupDescriptionReq {
        this['groups'] = groups;
        return this;
    }
}