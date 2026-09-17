
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceProcessesResponse extends SdkResponse {
    private 'data_sync_time'?: number;
    public total?: number;
    public data?: Array<object>;
    private 'user_info_list'?: Array<string>;
    private 'db_info_list'?: Array<string>;
    private 'host_info_list'?: Array<string>;
    private 'state_info_list'?: Array<string>;
    private 'command_info_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withDataSyncTime(dataSyncTime: number): ListInstanceProcessesResponse {
        this['data_sync_time'] = dataSyncTime;
        return this;
    }
    public set dataSyncTime(dataSyncTime: number  | undefined) {
        this['data_sync_time'] = dataSyncTime;
    }
    public get dataSyncTime(): number | undefined {
        return this['data_sync_time'];
    }
    public withTotal(total: number): ListInstanceProcessesResponse {
        this['total'] = total;
        return this;
    }
    public withData(data: Array<object>): ListInstanceProcessesResponse {
        this['data'] = data;
        return this;
    }
    public withUserInfoList(userInfoList: Array<string>): ListInstanceProcessesResponse {
        this['user_info_list'] = userInfoList;
        return this;
    }
    public set userInfoList(userInfoList: Array<string>  | undefined) {
        this['user_info_list'] = userInfoList;
    }
    public get userInfoList(): Array<string> | undefined {
        return this['user_info_list'];
    }
    public withDbInfoList(dbInfoList: Array<string>): ListInstanceProcessesResponse {
        this['db_info_list'] = dbInfoList;
        return this;
    }
    public set dbInfoList(dbInfoList: Array<string>  | undefined) {
        this['db_info_list'] = dbInfoList;
    }
    public get dbInfoList(): Array<string> | undefined {
        return this['db_info_list'];
    }
    public withHostInfoList(hostInfoList: Array<string>): ListInstanceProcessesResponse {
        this['host_info_list'] = hostInfoList;
        return this;
    }
    public set hostInfoList(hostInfoList: Array<string>  | undefined) {
        this['host_info_list'] = hostInfoList;
    }
    public get hostInfoList(): Array<string> | undefined {
        return this['host_info_list'];
    }
    public withStateInfoList(stateInfoList: Array<string>): ListInstanceProcessesResponse {
        this['state_info_list'] = stateInfoList;
        return this;
    }
    public set stateInfoList(stateInfoList: Array<string>  | undefined) {
        this['state_info_list'] = stateInfoList;
    }
    public get stateInfoList(): Array<string> | undefined {
        return this['state_info_list'];
    }
    public withCommandInfoList(commandInfoList: Array<string>): ListInstanceProcessesResponse {
        this['command_info_list'] = commandInfoList;
        return this;
    }
    public set commandInfoList(commandInfoList: Array<string>  | undefined) {
        this['command_info_list'] = commandInfoList;
    }
    public get commandInfoList(): Array<string> | undefined {
        return this['command_info_list'];
    }
}