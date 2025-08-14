import { UpdateUserAssignmentInfo } from './UpdateUserAssignmentInfo';


export class UpdateUserFolderReq {
    private 'update_user_assignment_info'?: UpdateUserAssignmentInfo;
    public constructor() { 
    }
    public withUpdateUserAssignmentInfo(updateUserAssignmentInfo: UpdateUserAssignmentInfo): UpdateUserFolderReq {
        this['update_user_assignment_info'] = updateUserAssignmentInfo;
        return this;
    }
    public set updateUserAssignmentInfo(updateUserAssignmentInfo: UpdateUserAssignmentInfo  | undefined) {
        this['update_user_assignment_info'] = updateUserAssignmentInfo;
    }
    public get updateUserAssignmentInfo(): UpdateUserAssignmentInfo | undefined {
        return this['update_user_assignment_info'];
    }
}