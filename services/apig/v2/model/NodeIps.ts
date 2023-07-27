

export class NodeIps {
    public livedata?: Array<string>;
    public shubao?: Array<string>;
    public constructor() { 
    }
    public withLivedata(livedata: Array<string>): NodeIps {
        this['livedata'] = livedata;
        return this;
    }
    public withShubao(shubao: Array<string>): NodeIps {
        this['shubao'] = shubao;
        return this;
    }
}