

export class CommonList {
    private 'data_list'?: Array<string>;
    private 'total_num'?: number;
    public constructor() { 
    }
    public withDataList(dataList: Array<string>): CommonList {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<string>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<string> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): CommonList {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}