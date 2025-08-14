import { CreateUserAssignmentInfo } from './CreateUserAssignmentInfo';


export class CreateUserFolderReq {
    public items?: Array<CreateUserAssignmentInfo>;
    public constructor(items?: Array<CreateUserAssignmentInfo>) { 
        this['items'] = items;
    }
    public withItems(items: Array<CreateUserAssignmentInfo>): CreateUserFolderReq {
        this['items'] = items;
        return this;
    }
}