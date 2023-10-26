import { BlockedIpRequestInfo } from './BlockedIpRequestInfo';


export class ChangeBlockedIpRequestInfo {
    private 'data_list'?: Array<BlockedIpRequestInfo>;
    public constructor() { 
    }
    public withDataList(dataList: Array<BlockedIpRequestInfo>): ChangeBlockedIpRequestInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<BlockedIpRequestInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<BlockedIpRequestInfo> | undefined {
        return this['data_list'];
    }
}