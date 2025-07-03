import { InstanceInfo } from './InstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchAgentResponse extends SdkResponse {
    private 'total_page'?: number;
    private 'total_count'?: number;
    private 'online_count'?: number;
    private 'offline_count'?: number;
    private 'disable_count'?: number;
    private 'agent_info_list'?: Array<InstanceInfo>;
    public constructor() { 
        super();
    }
    public withTotalPage(totalPage: number): SearchAgentResponse {
        this['total_page'] = totalPage;
        return this;
    }
    public set totalPage(totalPage: number  | undefined) {
        this['total_page'] = totalPage;
    }
    public get totalPage(): number | undefined {
        return this['total_page'];
    }
    public withTotalCount(totalCount: number): SearchAgentResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withOnlineCount(onlineCount: number): SearchAgentResponse {
        this['online_count'] = onlineCount;
        return this;
    }
    public set onlineCount(onlineCount: number  | undefined) {
        this['online_count'] = onlineCount;
    }
    public get onlineCount(): number | undefined {
        return this['online_count'];
    }
    public withOfflineCount(offlineCount: number): SearchAgentResponse {
        this['offline_count'] = offlineCount;
        return this;
    }
    public set offlineCount(offlineCount: number  | undefined) {
        this['offline_count'] = offlineCount;
    }
    public get offlineCount(): number | undefined {
        return this['offline_count'];
    }
    public withDisableCount(disableCount: number): SearchAgentResponse {
        this['disable_count'] = disableCount;
        return this;
    }
    public set disableCount(disableCount: number  | undefined) {
        this['disable_count'] = disableCount;
    }
    public get disableCount(): number | undefined {
        return this['disable_count'];
    }
    public withAgentInfoList(agentInfoList: Array<InstanceInfo>): SearchAgentResponse {
        this['agent_info_list'] = agentInfoList;
        return this;
    }
    public set agentInfoList(agentInfoList: Array<InstanceInfo>  | undefined) {
        this['agent_info_list'] = agentInfoList;
    }
    public get agentInfoList(): Array<InstanceInfo> | undefined {
        return this['agent_info_list'];
    }
}