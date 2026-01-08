import { DesktopSysprepInfo } from './DesktopSysprepInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckSysprepInfoResponse extends SdkResponse {
    private 'sysprep_infos'?: Array<DesktopSysprepInfo>;
    public constructor() { 
        super();
    }
    public withSysprepInfos(sysprepInfos: Array<DesktopSysprepInfo>): CheckSysprepInfoResponse {
        this['sysprep_infos'] = sysprepInfos;
        return this;
    }
    public set sysprepInfos(sysprepInfos: Array<DesktopSysprepInfo>  | undefined) {
        this['sysprep_infos'] = sysprepInfos;
    }
    public get sysprepInfos(): Array<DesktopSysprepInfo> | undefined {
        return this['sysprep_infos'];
    }
}