import { CreateSubscribeUserGroupInfo } from './CreateSubscribeUserGroupInfo';
import { CreateSubscribeUserInfo } from './CreateSubscribeUserInfo';
import { SubscribeOperationReqProject } from './SubscribeOperationReqProject';


export class SubscribeOperationReq {
    public project?: SubscribeOperationReqProject;
    public users?: Array<CreateSubscribeUserInfo>;
    public usergroups?: Array<CreateSubscribeUserGroupInfo>;
    public constructor() { 
    }
    public withProject(project: SubscribeOperationReqProject): SubscribeOperationReq {
        this['project'] = project;
        return this;
    }
    public withUsers(users: Array<CreateSubscribeUserInfo>): SubscribeOperationReq {
        this['users'] = users;
        return this;
    }
    public withUsergroups(usergroups: Array<CreateSubscribeUserGroupInfo>): SubscribeOperationReq {
        this['usergroups'] = usergroups;
        return this;
    }
}