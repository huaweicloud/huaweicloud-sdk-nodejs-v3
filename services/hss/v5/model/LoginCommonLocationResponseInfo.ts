

export class LoginCommonLocationResponseInfo {
    private 'area_code'?: number;
    private 'total_num'?: number;
    private 'host_id_list'?: Array<string>;
    public constructor() { 
    }
    public withAreaCode(areaCode: number): LoginCommonLocationResponseInfo {
        this['area_code'] = areaCode;
        return this;
    }
    public set areaCode(areaCode: number  | undefined) {
        this['area_code'] = areaCode;
    }
    public get areaCode(): number | undefined {
        return this['area_code'];
    }
    public withTotalNum(totalNum: number): LoginCommonLocationResponseInfo {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withHostIdList(hostIdList: Array<string>): LoginCommonLocationResponseInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}