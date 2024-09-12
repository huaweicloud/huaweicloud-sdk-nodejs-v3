import { AddNodesToNodePool } from './AddNodesToNodePool';


export class AddNodesToNodePoolList {
    public apiVersion?: string;
    public kind?: string;
    public nodeList?: Array<AddNodesToNodePool>;
    public constructor(apiVersion?: string, kind?: string, nodeList?: Array<AddNodesToNodePool>) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['nodeList'] = nodeList;
    }
    public withApiVersion(apiVersion: string): AddNodesToNodePoolList {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): AddNodesToNodePoolList {
        this['kind'] = kind;
        return this;
    }
    public withNodeList(nodeList: Array<AddNodesToNodePool>): AddNodesToNodePoolList {
        this['nodeList'] = nodeList;
        return this;
    }
}