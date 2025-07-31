import { HostTagValuesInfo } from './HostTagValuesInfo';


export class HostTagInfoList {
    private 'data_list'?: Array<HostTagValuesInfo>;
    private 'total_num'?: number;
    public constructor() { 
    }
    public withDataList(dataList: Array<HostTagValuesInfo>): HostTagInfoList {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<HostTagValuesInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<HostTagValuesInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): HostTagInfoList {
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