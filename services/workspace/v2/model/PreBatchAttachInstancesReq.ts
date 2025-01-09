import { AssignModelInfo } from './AssignModelInfo';
import { AttachInstancesDesktopInfo } from './AttachInstancesDesktopInfo';
import { AttachInstancesUserInfo } from './AttachInstancesUserInfo';


export class PreBatchAttachInstancesReq {
    public desktops?: Array<AttachInstancesDesktopInfo>;
    public users?: Array<AttachInstancesUserInfo>;
    private 'assign_model'?: AssignModelInfo;
    public constructor() { 
    }
    public withDesktops(desktops: Array<AttachInstancesDesktopInfo>): PreBatchAttachInstancesReq {
        this['desktops'] = desktops;
        return this;
    }
    public withUsers(users: Array<AttachInstancesUserInfo>): PreBatchAttachInstancesReq {
        this['users'] = users;
        return this;
    }
    public withAssignModel(assignModel: AssignModelInfo): PreBatchAttachInstancesReq {
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