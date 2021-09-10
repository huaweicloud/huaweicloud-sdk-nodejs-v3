import { ResetNode } from './ResetNode';


export class ResetNodeList {
    public apiVersion: string;
    public kind: string;
    public nodeList: Array<ResetNode>;
    public constructor(apiVersion?: any, kind?: any, nodeList?: any) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['nodeList'] = nodeList;
    }
    public withApiVersion(apiVersion: string): ResetNodeList {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ResetNodeList {
        this['kind'] = kind;
        return this;
    }
    public withNodeList(nodeList: Array<ResetNode>): ResetNodeList {
        this['nodeList'] = nodeList;
        return this;
    }
}