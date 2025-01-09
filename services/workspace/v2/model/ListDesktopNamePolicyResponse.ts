import { DesktopNamePolicyInfo } from './DesktopNamePolicyInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopNamePolicyResponse extends SdkResponse {
    private 'desktop_name_policy_infos'?: Array<DesktopNamePolicyInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDesktopNamePolicyInfos(desktopNamePolicyInfos: Array<DesktopNamePolicyInfo>): ListDesktopNamePolicyResponse {
        this['desktop_name_policy_infos'] = desktopNamePolicyInfos;
        return this;
    }
    public set desktopNamePolicyInfos(desktopNamePolicyInfos: Array<DesktopNamePolicyInfo>  | undefined) {
        this['desktop_name_policy_infos'] = desktopNamePolicyInfos;
    }
    public get desktopNamePolicyInfos(): Array<DesktopNamePolicyInfo> | undefined {
        return this['desktop_name_policy_infos'];
    }
    public withTotalCount(totalCount: number): ListDesktopNamePolicyResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}