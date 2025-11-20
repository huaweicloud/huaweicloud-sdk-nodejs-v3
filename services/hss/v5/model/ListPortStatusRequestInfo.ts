import { PortStatusRequestInfo } from './PortStatusRequestInfo';


export class ListPortStatusRequestInfo {
    private 'operate_type'?: string;
    private 'data_list'?: Array<PortStatusRequestInfo>;
    public constructor() { 
    }
    public withOperateType(operateType: string): ListPortStatusRequestInfo {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withDataList(dataList: Array<PortStatusRequestInfo>): ListPortStatusRequestInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PortStatusRequestInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PortStatusRequestInfo> | undefined {
        return this['data_list'];
    }
}