import { AssignModelInfo } from './AssignModelInfo';
import { AttachInstancesDesktopInfo } from './AttachInstancesDesktopInfo';
import { AttachInstancesUserInfo } from './AttachInstancesUserInfo';


export class BatchAttachInstancesReq {
    public desktops?: Array<AttachInstancesDesktopInfo>;
    public users?: Array<AttachInstancesUserInfo>;
    private 'assign_model'?: AssignModelInfo;
    public constructor() { 
    }
    public withDesktops(desktops: Array<AttachInstancesDesktopInfo>): BatchAttachInstancesReq {
        this['desktops'] = desktops;
        return this;
    }
    public withUsers(users: Array<AttachInstancesUserInfo>): BatchAttachInstancesReq {
        this['users'] = users;
        return this;
    }
    public withAssignModel(assignModel: AssignModelInfo): BatchAttachInstancesReq {
        this['assign_model'] = assignModel;
        return this;
    }
    public set assignModel(assignModel: AssignModelInfo  | undefined) {
        this['assign_model'] = assignModel;
    }
    public get assignModel(): AssignModelInfo | undefined {
        return this['assign_model'];
    }
}