import { MigrateNodesToNodePool } from './MigrateNodesToNodePool';


export class MigrateNodesToNodePoolList {
    public apiVersion?: string;
    public kind?: string;
    public nodeList?: Array<MigrateNodesToNodePool>;
    public constructor(apiVersion?: string, kind?: string, nodeList?: Array<MigrateNodesToNodePool>) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
        this['nodeList'] = nodeList;
    }
    public withApiVersion(apiVersion: string): MigrateNodesToNodePoolList {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): MigrateNodesToNodePoolList {
        this['kind'] = kind;
        return this;
    }
    public withNodeList(nodeList: Array<MigrateNodesToNodePool>): MigrateNodesToNodePoolList {
        this['nodeList'] = nodeList;
        return this;
    }
}