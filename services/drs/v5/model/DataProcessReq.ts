import { DataProcessInfo } from './DataProcessInfo';


export class DataProcessReq {
    private 'data_process_info'?: Array<DataProcessInfo>;
    public constructor() { 
    }
    public withDataProcessInfo(dataProcessInfo: Array<DataProcessInfo>): DataProcessReq {
        this['data_process_info'] = dataProcessInfo;
        return this;
    }
    public set dataProcessInfo(dataProcessInfo: Array<DataProcessInfo>  | undefined) {
        this['data_process_info'] = dataProcessInfo;
    }
    public get dataProcessInfo(): Array<DataProcessInfo> | undefined {
        return this['data_process_info'];
    }
}