import { AssetValueHostNumInfo } from './AssetValueHostNumInfo';
import { ServerGroupItem } from './ServerGroupItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHostsStatisticsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'risk_num'?: number;
    private 'unprotected_num'?: number;
    private 'not_installed_num'?: number;
    private 'installed_failed_num'?: number;
    private 'not_online_num'?: number;
    private 'version_basic_num'?: number;
    private 'version_advanced_num'?: number;
    private 'version_enterprise_num'?: number;
    private 'version_premium_num'?: number;
    private 'version_wtp_num'?: number;
    private 'version_container_num'?: number;
    private 'host_group_num'?: number;
    private 'server_group_num'?: number;
    private 'asset_value_list'?: Array<AssetValueHostNumInfo>;
    private 'server_group_list'?: Array<ServerGroupItem>;
    private 'ignore_host_num'?: number;
    private 'protected_num'?: number;
    private 'protect_interrupt_num'?: number;
    private 'idle_num'?: number;
    private 'premium_non_sp_num'?: number;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowHostsStatisticsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withRiskNum(riskNum: number): ShowHostsStatisticsResponse {
        this['risk_num'] = riskNum;
        return this;
    }
    public set riskNum(riskNum: number  | undefined) {
        this['risk_num'] = riskNum;
    }
    public get riskNum(): number | undefined {
        return this['risk_num'];
    }
    public withUnprotectedNum(unprotectedNum: number): ShowHostsStatisticsResponse {
        this['unprotected_num'] = unprotectedNum;
        return this;
    }
    public set unprotectedNum(unprotectedNum: number  | undefined) {
        this['unprotected_num'] = unprotectedNum;
    }
    public get unprotectedNum(): number | undefined {
        return this['unprotected_num'];
    }
    public withNotInstalledNum(notInstalledNum: number): ShowHostsStatisticsResponse {
        this['not_installed_num'] = notInstalledNum;
        return this;
    }
    public set notInstalledNum(notInstalledNum: number  | undefined) {
        this['not_installed_num'] = notInstalledNum;
    }
    public get notInstalledNum(): number | undefined {
        return this['not_installed_num'];
    }
    public withInstalledFailedNum(installedFailedNum: number): ShowHostsStatisticsResponse {
        this['installed_failed_num'] = installedFailedNum;
        return this;
    }
    public set installedFailedNum(installedFailedNum: number  | undefined) {
        this['installed_failed_num'] = installedFailedNum;
    }
    public get installedFailedNum(): number | undefined {
        return this['installed_failed_num'];
    }
    public withNotOnlineNum(notOnlineNum: number): ShowHostsStatisticsResponse {
        this['not_online_num'] = notOnlineNum;
        return this;
    }
    public set notOnlineNum(notOnlineNum: number  | undefined) {
        this['not_online_num'] = notOnlineNum;
    }
    public get notOnlineNum(): number | undefined {
        return this['not_online_num'];
    }
    public withVersionBasicNum(versionBasicNum: number): ShowHostsStatisticsResponse {
        this['version_basic_num'] = versionBasicNum;
        return this;
    }
    public set versionBasicNum(versionBasicNum: number  | undefined) {
        this['version_basic_num'] = versionBasicNum;
    }
    public get versionBasicNum(): number | undefined {
        return this['version_basic_num'];
    }
    public withVersionAdvancedNum(versionAdvancedNum: number): ShowHostsStatisticsResponse {
        this['version_advanced_num'] = versionAdvancedNum;
        return this;
    }
    public set versionAdvancedNum(versionAdvancedNum: number  | undefined) {
        this['version_advanced_num'] = versionAdvancedNum;
    }
    public get versionAdvancedNum(): number | undefined {
        return this['version_advanced_num'];
    }
    public withVersionEnterpriseNum(versionEnterpriseNum: number): ShowHostsStatisticsResponse {
        this['version_enterprise_num'] = versionEnterpriseNum;
        return this;
    }
    public set versionEnterpriseNum(versionEnterpriseNum: number  | undefined) {
        this['version_enterprise_num'] = versionEnterpriseNum;
    }
    public get versionEnterpriseNum(): number | undefined {
        return this['version_enterprise_num'];
    }
    public withVersionPremiumNum(versionPremiumNum: number): ShowHostsStatisticsResponse {
        this['version_premium_num'] = versionPremiumNum;
        return this;
    }
    public set versionPremiumNum(versionPremiumNum: number  | undefined) {
        this['version_premium_num'] = versionPremiumNum;
    }
    public get versionPremiumNum(): number | undefined {
        return this['version_premium_num'];
    }
    public withVersionWtpNum(versionWtpNum: number): ShowHostsStatisticsResponse {
        this['version_wtp_num'] = versionWtpNum;
        return this;
    }
    public set versionWtpNum(versionWtpNum: number  | undefined) {
        this['version_wtp_num'] = versionWtpNum;
    }
    public get versionWtpNum(): number | undefined {
        return this['version_wtp_num'];
    }
    public withVersionContainerNum(versionContainerNum: number): ShowHostsStatisticsResponse {
        this['version_container_num'] = versionContainerNum;
        return this;
    }
    public set versionContainerNum(versionContainerNum: number  | undefined) {
        this['version_container_num'] = versionContainerNum;
    }
    public get versionContainerNum(): number | undefined {
        return this['version_container_num'];
    }
    public withHostGroupNum(hostGroupNum: number): ShowHostsStatisticsResponse {
        this['host_group_num'] = hostGroupNum;
        return this;
    }
    public set hostGroupNum(hostGroupNum: number  | undefined) {
        this['host_group_num'] = hostGroupNum;
    }
    public get hostGroupNum(): number | undefined {
        return this['host_group_num'];
    }
    public withServerGroupNum(serverGroupNum: number): ShowHostsStatisticsResponse {
        this['server_group_num'] = serverGroupNum;
        return this;
    }
    public set serverGroupNum(serverGroupNum: number  | undefined) {
        this['server_group_num'] = serverGroupNum;
    }
    public get serverGroupNum(): number | undefined {
        return this['server_group_num'];
    }
    public withAssetValueList(assetValueList: Array<AssetValueHostNumInfo>): ShowHostsStatisticsResponse {
        this['asset_value_list'] = assetValueList;
        return this;
    }
    public set assetValueList(assetValueList: Array<AssetValueHostNumInfo>  | undefined) {
        this['asset_value_list'] = assetValueList;
    }
    public get assetValueList(): Array<AssetValueHostNumInfo> | undefined {
        return this['asset_value_list'];
    }
    public withServerGroupList(serverGroupList: Array<ServerGroupItem>): ShowHostsStatisticsResponse {
        this['server_group_list'] = serverGroupList;
        return this;
    }
    public set serverGroupList(serverGroupList: Array<ServerGroupItem>  | undefined) {
        this['server_group_list'] = serverGroupList;
    }
    public get serverGroupList(): Array<ServerGroupItem> | undefined {
        return this['server_group_list'];
    }
    public withIgnoreHostNum(ignoreHostNum: number): ShowHostsStatisticsResponse {
        this['ignore_host_num'] = ignoreHostNum;
        return this;
    }
    public set ignoreHostNum(ignoreHostNum: number  | undefined) {
        this['ignore_host_num'] = ignoreHostNum;
    }
    public get ignoreHostNum(): number | undefined {
        return this['ignore_host_num'];
    }
    public withProtectedNum(protectedNum: number): ShowHostsStatisticsResponse {
        this['protected_num'] = protectedNum;
        return this;
    }
    public set protectedNum(protectedNum: number  | undefined) {
        this['protected_num'] = protectedNum;
    }
    public get protectedNum(): number | undefined {
        return this['protected_num'];
    }
    public withProtectInterruptNum(protectInterruptNum: number): ShowHostsStatisticsResponse {
        this['protect_interrupt_num'] = protectInterruptNum;
        return this;
    }
    public set protectInterruptNum(protectInterruptNum: number  | undefined) {
        this['protect_interrupt_num'] = protectInterruptNum;
    }
    public get protectInterruptNum(): number | undefined {
        return this['protect_interrupt_num'];
    }
    public withIdleNum(idleNum: number): ShowHostsStatisticsResponse {
        this['idle_num'] = idleNum;
        return this;
    }
    public set idleNum(idleNum: number  | undefined) {
        this['idle_num'] = idleNum;
    }
    public get idleNum(): number | undefined {
        return this['idle_num'];
    }
    public withPremiumNonSpNum(premiumNonSpNum: number): ShowHostsStatisticsResponse {
        this['premium_non_sp_num'] = premiumNonSpNum;
        return this;
    }
    public set premiumNonSpNum(premiumNonSpNum: number  | undefined) {
        this['premium_non_sp_num'] = premiumNonSpNum;
    }
    public get premiumNonSpNum(): number | undefined {
        return this['premium_non_sp_num'];
    }
}