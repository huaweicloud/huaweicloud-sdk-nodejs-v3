import { RotateCertNode } from './RotateCertNode';


export class RotateCertNodeList {
    public apiVersion?: string;
    public kind?: string;
    public nodeList?: Array<RotateCertNode>;
    public constructor(apiVersion?: string, kind?: string, nodeList?: Array<RotateCertNode>) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['nodeList'] = nodeList;
    }
    public withApiVersion(apiVersion: string): RotateCertNodeList {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): RotateCertNodeList {
        this['kind'] = kind;
        return this;
    }
    public withNodeList(nodeList: Array<RotateCertNode>): RotateCertNodeList {
        this['nodeList'] = nodeList;
        return this;
    }
}