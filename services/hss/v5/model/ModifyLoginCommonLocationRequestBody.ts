

export class ModifyLoginCommonLocationRequestBody {
    private 'area_code'?: number;
    private 'host_id_list'?: Array<string>;
    public constructor() { 
    }
    public withAreaCode(areaCode: number): ModifyLoginCommonLocationRequestBody {
        this['area_code'] = areaCode;
        return this;
    }
    public set areaCode(areaCode: number  | undefined) {
        this['area_code'] = areaCode;
    }
    public get areaCode(): number | undefined {
        return this['area_code'];
    }
    public withHostIdList(hostIdList: Array<string>): ModifyLoginCommonLocationRequestBody {
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