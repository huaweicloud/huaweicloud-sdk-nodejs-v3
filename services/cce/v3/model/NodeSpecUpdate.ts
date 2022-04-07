import { Taint } from './Taint';
import { UserTag } from './UserTag';


export class NodeSpecUpdate {
    public taints: Array<Taint>;
    public k8sTags: { [key: string]: string; };
    public userTags: Array<UserTag>;
    public constructor(taints?: any, k8sTags?: any, userTags?: any) { 
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
}