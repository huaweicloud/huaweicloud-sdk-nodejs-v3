

export class ModClusterProtectionEventRequest {
    private 'total_num'?: number;
    public opr?: string;
    private 'data_list'?: Array<string>;
    public constructor(totalNum?: number, opr?: string, dataList?: Array<string>) { 
        this['total_num'] = totalNum;
        this['opr'] = opr;
        this['data_list'] = dataList;
    }
    public withTotalNum(totalNum: number): ModClusterProtectionEventRequest {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withOpr(opr: string): ModClusterProtectionEventRequest {
        this['opr'] = opr;
        return this;
    }
    public withDataList(dataList: Array<string>): ModClusterProtectionEventRequest {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<string>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<string> | undefined {
        return this['data_list'];
    }
}