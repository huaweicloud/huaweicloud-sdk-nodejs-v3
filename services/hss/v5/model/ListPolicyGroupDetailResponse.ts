import { ShowPolicyDetailResponseInfo } from './ShowPolicyDetailResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyGroupDetailResponse extends SdkResponse {
    public description?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'support_version'?: string;
    private 'support_os'?: string;
    private 'data_list'?: Array<ShowPolicyDetailResponseInfo>;
    public constructor() { 
        super();
    }
    public withDescription(description: string): ListPolicyGroupDetailResponse {
        this['description'] = description;
        return this;
    }
    public withGroupId(groupId: string): ListPolicyGroupDetailResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): ListPolicyGroupDetailResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withSupportVersion(supportVersion: string): ListPolicyGroupDetailResponse {
        this['support_version'] = supportVersion;
        return this;
    }
    public set supportVersion(supportVersion: string  | undefined) {
        this['support_version'] = supportVersion;
    }
    public get supportVersion(): string | undefined {
        return this['support_version'];
    }
    public withSupportOs(supportOs: string): ListPolicyGroupDetailResponse {
        this['support_os'] = supportOs;
        return this;
    }
    public set supportOs(supportOs: string  | undefined) {
        this['support_os'] = supportOs;
    }
    public get supportOs(): string | undefined {
        return this['support_os'];
    }
    public withDataList(dataList: Array<ShowPolicyDetailResponseInfo>): ListPolicyGroupDetailResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ShowPolicyDetailResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ShowPolicyDetailResponseInfo> | undefined {
        return this['data_list'];
    }
}