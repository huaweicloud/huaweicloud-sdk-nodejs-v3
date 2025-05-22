

export class UnlockNodeScaledownRequestBody {
    public apiVersion?: string;
    public kind?: string;
    public nodeList?: Array<string>;
    public constructor(apiVersion?: string, kind?: string) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
    }
    public withApiVersion(apiVersion: string): UnlockNodeScaledownRequestBody {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): UnlockNodeScaledownRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withNodeList(nodeList: Array<string>): UnlockNodeScaledownRequestBody {
        this['nodeList'] = nodeList;
        return this;
    }
}