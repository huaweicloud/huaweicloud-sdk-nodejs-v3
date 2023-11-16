

export class BlackWhiteIpRequestBody {
    public type?: BlackWhiteIpRequestBodyTypeEnum | string;
    private 'ip_list'?: Array<string>;
    public constructor(type?: string, ipList?: Array<string>) { 
        this['type'] = type;
        this['ip_list'] = ipList;
    }
    public withType(type: BlackWhiteIpRequestBodyTypeEnum | string): BlackWhiteIpRequestBody {
        this['type'] = type;
        return this;
    }
    public withIpList(ipList: Array<string>): BlackWhiteIpRequestBody {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<string>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<string> | undefined {
        return this['ip_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BlackWhiteIpRequestBodyTypeEnum {
    WHITE = 'white',
    BLACK = 'black'
}
