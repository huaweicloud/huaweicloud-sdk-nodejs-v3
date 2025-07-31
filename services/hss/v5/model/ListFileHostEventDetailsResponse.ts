import { FileHostEventDetailResponseInfo } from './FileHostEventDetailResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFileHostEventDetailsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'change_total_num'?: number;
    private 'change_file_num'?: number;
    private 'change_registry_num'?: number;
    private 'host_name'?: string;
    private 'data_list'?: Array<FileHostEventDetailResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListFileHostEventDetailsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withChangeTotalNum(changeTotalNum: number): ListFileHostEventDetailsResponse {
        this['change_total_num'] = changeTotalNum;
        return this;
    }
    public set changeTotalNum(changeTotalNum: number  | undefined) {
        this['change_total_num'] = changeTotalNum;
    }
    public get changeTotalNum(): number | undefined {
        return this['change_total_num'];
    }
    public withChangeFileNum(changeFileNum: number): ListFileHostEventDetailsResponse {
        this['change_file_num'] = changeFileNum;
        return this;
    }
    public set changeFileNum(changeFileNum: number  | undefined) {
        this['change_file_num'] = changeFileNum;
    }
    public get changeFileNum(): number | undefined {
        return this['change_file_num'];
    }
    public withChangeRegistryNum(changeRegistryNum: number): ListFileHostEventDetailsResponse {
        this['change_registry_num'] = changeRegistryNum;
        return this;
    }
    public set changeRegistryNum(changeRegistryNum: number  | undefined) {
        this['change_registry_num'] = changeRegistryNum;
    }
    public get changeRegistryNum(): number | undefined {
        return this['change_registry_num'];
    }
    public withHostName(hostName: string): ListFileHostEventDetailsResponse {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withDataList(dataList: Array<FileHostEventDetailResponseInfo>): ListFileHostEventDetailsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<FileHostEventDetailResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<FileHostEventDetailResponseInfo> | undefined {
        return this['data_list'];
    }
}