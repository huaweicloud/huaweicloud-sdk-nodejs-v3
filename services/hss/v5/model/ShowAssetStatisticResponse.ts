
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssetStatisticResponse extends SdkResponse {
    private 'account_num'?: number;
    private 'port_num'?: number;
    private 'process_num'?: number;
    private 'app_num'?: number;
    private 'auto_launch_num'?: number;
    private 'web_framework_num'?: number;
    private 'web_site_num'?: number;
    private 'jar_package_num'?: number;
    private 'kernel_module_num'?: number;
    private 'web_service_num'?: number;
    private 'web_app_num'?: number;
    private 'database_num'?: number;
    private 'core_conf_file_num'?: number;
    private 'environment_num'?: number;
    public constructor() { 
        super();
    }
    public withAccountNum(accountNum: number): ShowAssetStatisticResponse {
        this['account_num'] = accountNum;
        return this;
    }
    public set accountNum(accountNum: number  | undefined) {
        this['account_num'] = accountNum;
    }
    public get accountNum(): number | undefined {
        return this['account_num'];
    }
    public withPortNum(portNum: number): ShowAssetStatisticResponse {
        this['port_num'] = portNum;
        return this;
    }
    public set portNum(portNum: number  | undefined) {
        this['port_num'] = portNum;
    }
    public get portNum(): number | undefined {
        return this['port_num'];
    }
    public withProcessNum(processNum: number): ShowAssetStatisticResponse {
        this['process_num'] = processNum;
        return this;
    }
    public set processNum(processNum: number  | undefined) {
        this['process_num'] = processNum;
    }
    public get processNum(): number | undefined {
        return this['process_num'];
    }
    public withAppNum(appNum: number): ShowAssetStatisticResponse {
        this['app_num'] = appNum;
        return this;
    }
    public set appNum(appNum: number  | undefined) {
        this['app_num'] = appNum;
    }
    public get appNum(): number | undefined {
        return this['app_num'];
    }
    public withAutoLaunchNum(autoLaunchNum: number): ShowAssetStatisticResponse {
        this['auto_launch_num'] = autoLaunchNum;
        return this;
    }
    public set autoLaunchNum(autoLaunchNum: number  | undefined) {
        this['auto_launch_num'] = autoLaunchNum;
    }
    public get autoLaunchNum(): number | undefined {
        return this['auto_launch_num'];
    }
    public withWebFrameworkNum(webFrameworkNum: number): ShowAssetStatisticResponse {
        this['web_framework_num'] = webFrameworkNum;
        return this;
    }
    public set webFrameworkNum(webFrameworkNum: number  | undefined) {
        this['web_framework_num'] = webFrameworkNum;
    }
    public get webFrameworkNum(): number | undefined {
        return this['web_framework_num'];
    }
    public withWebSiteNum(webSiteNum: number): ShowAssetStatisticResponse {
        this['web_site_num'] = webSiteNum;
        return this;
    }
    public set webSiteNum(webSiteNum: number  | undefined) {
        this['web_site_num'] = webSiteNum;
    }
    public get webSiteNum(): number | undefined {
        return this['web_site_num'];
    }
    public withJarPackageNum(jarPackageNum: number): ShowAssetStatisticResponse {
        this['jar_package_num'] = jarPackageNum;
        return this;
    }
    public set jarPackageNum(jarPackageNum: number  | undefined) {
        this['jar_package_num'] = jarPackageNum;
    }
    public get jarPackageNum(): number | undefined {
        return this['jar_package_num'];
    }
    public withKernelModuleNum(kernelModuleNum: number): ShowAssetStatisticResponse {
        this['kernel_module_num'] = kernelModuleNum;
        return this;
    }
    public set kernelModuleNum(kernelModuleNum: number  | undefined) {
        this['kernel_module_num'] = kernelModuleNum;
    }
    public get kernelModuleNum(): number | undefined {
        return this['kernel_module_num'];
    }
    public withWebServiceNum(webServiceNum: number): ShowAssetStatisticResponse {
        this['web_service_num'] = webServiceNum;
        return this;
    }
    public set webServiceNum(webServiceNum: number  | undefined) {
        this['web_service_num'] = webServiceNum;
    }
    public get webServiceNum(): number | undefined {
        return this['web_service_num'];
    }
    public withWebAppNum(webAppNum: number): ShowAssetStatisticResponse {
        this['web_app_num'] = webAppNum;
        return this;
    }
    public set webAppNum(webAppNum: number  | undefined) {
        this['web_app_num'] = webAppNum;
    }
    public get webAppNum(): number | undefined {
        return this['web_app_num'];
    }
    public withDatabaseNum(databaseNum: number): ShowAssetStatisticResponse {
        this['database_num'] = databaseNum;
        return this;
    }
    public set databaseNum(databaseNum: number  | undefined) {
        this['database_num'] = databaseNum;
    }
    public get databaseNum(): number | undefined {
        return this['database_num'];
    }
    public withCoreConfFileNum(coreConfFileNum: number): ShowAssetStatisticResponse {
        this['core_conf_file_num'] = coreConfFileNum;
        return this;
    }
    public set coreConfFileNum(coreConfFileNum: number  | undefined) {
        this['core_conf_file_num'] = coreConfFileNum;
    }
    public get coreConfFileNum(): number | undefined {
        return this['core_conf_file_num'];
    }
    public withEnvironmentNum(environmentNum: number): ShowAssetStatisticResponse {
        this['environment_num'] = environmentNum;
        return this;
    }
    public set environmentNum(environmentNum: number  | undefined) {
        this['environment_num'] = environmentNum;
    }
    public get environmentNum(): number | undefined {
        return this['environment_num'];
    }
}