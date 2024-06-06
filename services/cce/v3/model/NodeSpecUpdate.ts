import { Login } from './Login';
import { Taint } from './Taint';
import { UserTag } from './UserTag';


export class NodeSpecUpdate {
    public taints?: Array<Taint>;
    public k8sTags?: { [key: string]: string; };
    public userTags?: Array<UserTag>;
    public initializedConditions?: Array<string>;
    public login?: Login;
    public serverEnterpriseProjectID?: string;
    public constructor(taints?: Array<Taint>, k8sTags?: { [key: string]: string; }, userTags?: Array<UserTag>) { 
        this['taints'] = taints;
        this['k8sTags'] = k8sTags;
        this['userTags'] = userTags;
    }
    public withTaints(taints: Array<Taint>): NodeSpecUpdate {
        this['taints'] = taints;
        return this;
    }
    public withK8sTags(k8sTags: { [key: string]: string; }): NodeSpecUpdate {
        this['k8sTags'] = k8sTags;
        return this;
    }
    public withUserTags(userTags: Array<UserTag>): NodeSpecUpdate {
        this['userTags'] = userTags;
        return this;
    }
    public withInitializedConditions(initializedConditions: Array<string>): NodeSpecUpdate {
        this['initializedConditions'] = initializedConditions;
        return this;
    }
    public withLogin(login: Login): NodeSpecUpdate {
        this['login'] = login;
        return this;
    }
    public withServerEnterpriseProjectID(serverEnterpriseProjectID: string): NodeSpecUpdate {
        this['serverEnterpriseProjectID'] = serverEnterpriseProjectID;
        return this;
    }
}