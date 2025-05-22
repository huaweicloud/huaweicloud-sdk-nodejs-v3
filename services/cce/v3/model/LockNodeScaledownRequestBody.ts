

export class LockNodeScaledownRequestBody {
    public apiVersion?: string;
    public kind?: string;
    public nodeList?: Array<string>;
    public constructor(apiVersion?: string, kind?: string) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
    }
    public withApiVersion(apiVersion: string): LockNodeScaledownRequestBody {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): LockNodeScaledownRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withNodeList(nodeList: Array<string>): LockNodeScaledownRequestBody {
        this['nodeList'] = nodeList;
        return this;
    }
}