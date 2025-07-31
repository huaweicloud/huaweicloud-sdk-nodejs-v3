import { PrivilegedProcessResponseInfo } from './PrivilegedProcessResponseInfo';


export class ListPrivilegedProcessResponseInfo {
    private 'data_list'?: Array<PrivilegedProcessResponseInfo>;
    private 'total_num'?: number;
    public constructor() { 
    }
    public withDataList(dataList: Array<PrivilegedProcessResponseInfo>): ListPrivilegedProcessResponseInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PrivilegedProcessResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PrivilegedProcessResponseInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListPrivilegedProcessResponseInfo {
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