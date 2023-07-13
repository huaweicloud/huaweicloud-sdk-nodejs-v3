import { AddNode } from './AddNode';


export class AddNodeList {
    public apiVersion: string;
    public kind: string;
    public nodeList: Array<AddNode>;
    public constructor(apiVersion?: any, kind?: any, nodeList?: any) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['nodeList'] = nodeList;
    }
    public withApiVersion(apiVersion: string): AddNodeList {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): AddNodeList {
        this['kind'] = kind;
        return this;
    }
    public withNodeList(nodeList: Array<AddNode>): AddNodeList {
        this['nodeList'] = nodeList;
        return this;
    }
}