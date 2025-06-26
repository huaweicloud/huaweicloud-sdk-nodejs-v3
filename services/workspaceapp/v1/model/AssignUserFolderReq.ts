import { UserAssignment } from './UserAssignment';


export class AssignUserFolderReq {
    public items?: Array<UserAssignment>;
    public constructor(items?: Array<UserAssignment>) { 
        this['items'] = items;
    }
    public withItems(items: Array<UserAssignment>): AssignUserFolderReq {
        this['items'] = items;
        return this;
    }
}