

export class Bw {
    private 'black_ip_list'?: Array<string>;
    private 'white_ip_list'?: Array<string>;
    public constructor(blackIpList?: Array<string>, whiteIpList?: Array<string>) { 
        this['black_ip_list'] = blackIpList;
        this['white_ip_list'] = whiteIpList;
    }
    public withBlackIpList(blackIpList: Array<string>): Bw {
        this['black_ip_list'] = blackIpList;
        return this;
    }
    public set blackIpList(blackIpList: Array<string>  | undefined) {
        this['black_ip_list'] = blackIpList;
    }
    public get blackIpList(): Array<string> | undefined {
        return this['black_ip_list'];
    }
    public withWhiteIpList(whiteIpList: Array<string>): Bw {
        this['white_ip_list'] = whiteIpList;
        return this;
    }
    public set whiteIpList(whiteIpList: Array<string>  | undefined) {
        this['white_ip_list'] = whiteIpList;
    }
    public get whiteIpList(): Array<string> | undefined {
        return this['white_ip_list'];
    }
}