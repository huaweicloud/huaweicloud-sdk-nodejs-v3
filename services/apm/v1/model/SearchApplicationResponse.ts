import { AppInfo } from './AppInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchApplicationResponse extends SdkResponse {
    private 'app_info_list'?: Array<AppInfo>;
    private 'app_total_count'?: number;
    private 'app_info_map'?: { [key: string]: AppInfo; };
    public constructor() { 
        super();
    }
    public withAppInfoList(appInfoList: Array<AppInfo>): SearchApplicationResponse {
        this['app_info_list'] = appInfoList;
        return this;
    }
    public set appInfoList(appInfoList: Array<AppInfo>  | undefined) {
        this['app_info_list'] = appInfoList;
    }
    public get appInfoList(): Array<AppInfo> | undefined {
        return this['app_info_list'];
    }
    public withAppTotalCount(appTotalCount: number): SearchApplicationResponse {
        this['app_total_count'] = appTotalCount;
        return this;
    }
    public set appTotalCount(appTotalCount: number  | undefined) {
        this['app_total_count'] = appTotalCount;
    }
    public get appTotalCount(): number | undefined {
        return this['app_total_count'];
    }
    public withAppInfoMap(appInfoMap: { [key: string]: AppInfo; }): SearchApplicationResponse {
        this['app_info_map'] = appInfoMap;
        return this;
    }
    public set appInfoMap(appInfoMap: { [key: string]: AppInfo; }  | undefined) {
        this['app_info_map'] = appInfoMap;
    }
    public get appInfoMap(): { [key: string]: AppInfo; } | undefined {
        return this['app_info_map'];
    }
}