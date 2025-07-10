import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessLoggingBucketBaseline } from './model/AccessLoggingBucketBaseline';
import { AccountBaseline } from './model/AccountBaseline';
import { AccountBaselineRsp } from './model/AccountBaselineRsp';
import { Artifact } from './model/Artifact';
import { BestPracticeCheckItemDetail } from './model/BestPracticeCheckItemDetail';
import { BestPracticeOverviewItem } from './model/BestPracticeOverviewItem';
import { Blueprint } from './model/Blueprint';
import { CheckLaunchRequest } from './model/CheckLaunchRequest';
import { CheckLaunchResponse } from './model/CheckLaunchResponse';
import { CommonConfiguration } from './model/CommonConfiguration';
import { ConfigRuleCompliance } from './model/ConfigRuleCompliance';
import { Content } from './model/Content';
import { Control } from './model/Control';
import { ControlOperateReqBody } from './model/ControlOperateReqBody';
import { ControlOperation } from './model/ControlOperation';
import { ControlViolation } from './model/ControlViolation';
import { CreateAccountRequest } from './model/CreateAccountRequest';
import { CreateAccountResponse } from './model/CreateAccountResponse';
import { CreateBestPracticeDetectRequest } from './model/CreateBestPracticeDetectRequest';
import { CreateBestPracticeDetectResponse } from './model/CreateBestPracticeDetectResponse';
import { CreateManagedAccountRequest } from './model/CreateManagedAccountRequest';
import { CreateManagedOrganizationalUnitRequest } from './model/CreateManagedOrganizationalUnitRequest';
import { CreateManagedOrganizationalUnitResponse } from './model/CreateManagedOrganizationalUnitResponse';
import { CreateOrganizationalUnit } from './model/CreateOrganizationalUnit';
import { CreateOrganizationalUnitReqBody } from './model/CreateOrganizationalUnitReqBody';
import { CreateTemplateRequest } from './model/CreateTemplateRequest';
import { CreateTemplateRequestBody } from './model/CreateTemplateRequestBody';
import { CreateTemplateResponse } from './model/CreateTemplateResponse';
import { DeleteLandingZoneRequest } from './model/DeleteLandingZoneRequest';
import { DeleteLandingZoneResponse } from './model/DeleteLandingZoneResponse';
import { DeleteManagedOrganizationalUnitsRequest } from './model/DeleteManagedOrganizationalUnitsRequest';
import { DeleteManagedOrganizationalUnitsResponse } from './model/DeleteManagedOrganizationalUnitsResponse';
import { DeleteTemplateRequest } from './model/DeleteTemplateRequest';
import { DeleteTemplateResponse } from './model/DeleteTemplateResponse';
import { DeregisterOrganizationalUnitRequest } from './model/DeregisterOrganizationalUnitRequest';
import { DeregisterOrganizationalUnitResponse } from './model/DeregisterOrganizationalUnitResponse';
import { DisableControlRequest } from './model/DisableControlRequest';
import { DisableControlResponse } from './model/DisableControlResponse';
import { DriftDetail } from './model/DriftDetail';
import { EnableControlParameters } from './model/EnableControlParameters';
import { EnableControlRequest } from './model/EnableControlRequest';
import { EnableControlResponse } from './model/EnableControlResponse';
import { EnabledControl } from './model/EnabledControl';
import { EnrollAccountRequest } from './model/EnrollAccountRequest';
import { EnrollAccountRequestBody } from './model/EnrollAccountRequestBody';
import { EnrollAccountResponse } from './model/EnrollAccountResponse';
import { ExternalConfigRuleCompliance } from './model/ExternalConfigRuleCompliance';
import { IdentityCenterGroup } from './model/IdentityCenterGroup';
import { LandingZoneErrorMessage } from './model/LandingZoneErrorMessage';
import { ListConfigRuleCompliancesRequest } from './model/ListConfigRuleCompliancesRequest';
import { ListConfigRuleCompliancesResponse } from './model/ListConfigRuleCompliancesResponse';
import { ListControlViolationsRequest } from './model/ListControlViolationsRequest';
import { ListControlViolationsResponse } from './model/ListControlViolationsResponse';
import { ListControlsForAccountRequest } from './model/ListControlsForAccountRequest';
import { ListControlsForAccountResponse } from './model/ListControlsForAccountResponse';
import { ListControlsForOrganizationalUnitRequest } from './model/ListControlsForOrganizationalUnitRequest';
import { ListControlsForOrganizationalUnitResponse } from './model/ListControlsForOrganizationalUnitResponse';
import { ListControlsRequest } from './model/ListControlsRequest';
import { ListControlsResponse } from './model/ListControlsResponse';
import { ListDriftDetailsRequest } from './model/ListDriftDetailsRequest';
import { ListDriftDetailsResponse } from './model/ListDriftDetailsResponse';
import { ListEnabledControlsRequest } from './model/ListEnabledControlsRequest';
import { ListEnabledControlsResponse } from './model/ListEnabledControlsResponse';
import { ListExternalConfigRuleCompliancesRequest } from './model/ListExternalConfigRuleCompliancesRequest';
import { ListExternalConfigRuleCompliancesResponse } from './model/ListExternalConfigRuleCompliancesResponse';
import { ListManagedAccountsForParentRequest } from './model/ListManagedAccountsForParentRequest';
import { ListManagedAccountsForParentResponse } from './model/ListManagedAccountsForParentResponse';
import { ListManagedAccountsRequest } from './model/ListManagedAccountsRequest';
import { ListManagedAccountsResponse } from './model/ListManagedAccountsResponse';
import { ListManagedOrganizationalUnitsRequest } from './model/ListManagedOrganizationalUnitsRequest';
import { ListManagedOrganizationalUnitsResponse } from './model/ListManagedOrganizationalUnitsResponse';
import { ListOperationRequest } from './model/ListOperationRequest';
import { ListOperationResponse } from './model/ListOperationResponse';
import { ListPredefinedTemplatesRequest } from './model/ListPredefinedTemplatesRequest';
import { ListPredefinedTemplatesResponse } from './model/ListPredefinedTemplatesResponse';
import { LoggingBucketBaseline } from './model/LoggingBucketBaseline';
import { LoggingConfiguration } from './model/LoggingConfiguration';
import { ManagedAccount } from './model/ManagedAccount';
import { ManagedOrganizationalUnit } from './model/ManagedOrganizationalUnit';
import { OrganizationStructureBaseLine } from './model/OrganizationStructureBaseLine';
import { OrganizationStructureBaseLineRsp } from './model/OrganizationStructureBaseLineRsp';
import { OrganizationalPercentageDetail } from './model/OrganizationalPercentageDetail';
import { OrganizationalUnitType } from './model/OrganizationalUnitType';
import { OrganizationalUnitTypeForSetup } from './model/OrganizationalUnitTypeForSetup';
import { PageInfoDto } from './model/PageInfoDto';
import { PercentageDetail } from './model/PercentageDetail';
import { PermissionSet } from './model/PermissionSet';
import { PredefinedTemplate } from './model/PredefinedTemplate';
import { ReRegisterOrganizationalUnitRequest } from './model/ReRegisterOrganizationalUnitRequest';
import { ReRegisterOrganizationalUnitResponse } from './model/ReRegisterOrganizationalUnitResponse';
import { RegionConfigurationList } from './model/RegionConfigurationList';
import { RegionManagedList } from './model/RegionManagedList';
import { RegisterOrganizationalUnitRequest } from './model/RegisterOrganizationalUnitRequest';
import { RegisterOrganizationalUnitResponse } from './model/RegisterOrganizationalUnitResponse';
import { SetupLandingZoneReqBody } from './model/SetupLandingZoneReqBody';
import { SetupLandingZoneRequest } from './model/SetupLandingZoneRequest';
import { SetupLandingZoneResponse } from './model/SetupLandingZoneResponse';
import { ShowAvailableUpdatesRequest } from './model/ShowAvailableUpdatesRequest';
import { ShowAvailableUpdatesResponse } from './model/ShowAvailableUpdatesResponse';
import { ShowBestPracticeDetailsRequest } from './model/ShowBestPracticeDetailsRequest';
import { ShowBestPracticeDetailsResponse } from './model/ShowBestPracticeDetailsResponse';
import { ShowBestPracticeOverviewRequest } from './model/ShowBestPracticeOverviewRequest';
import { ShowBestPracticeOverviewResponse } from './model/ShowBestPracticeOverviewResponse';
import { ShowBestPracticeStatusRequest } from './model/ShowBestPracticeStatusRequest';
import { ShowBestPracticeStatusResponse } from './model/ShowBestPracticeStatusResponse';
import { ShowComplianceStatusForAccountRequest } from './model/ShowComplianceStatusForAccountRequest';
import { ShowComplianceStatusForAccountResponse } from './model/ShowComplianceStatusForAccountResponse';
import { ShowComplianceStatusForOrganizationalUnitRequest } from './model/ShowComplianceStatusForOrganizationalUnitRequest';
import { ShowComplianceStatusForOrganizationalUnitResponse } from './model/ShowComplianceStatusForOrganizationalUnitResponse';
import { ShowControlOperateRequest } from './model/ShowControlOperateRequest';
import { ShowControlOperateResponse } from './model/ShowControlOperateResponse';
import { ShowControlRequest } from './model/ShowControlRequest';
import { ShowControlResponse } from './model/ShowControlResponse';
import { ShowControlsForAccountRequest } from './model/ShowControlsForAccountRequest';
import { ShowControlsForAccountResponse } from './model/ShowControlsForAccountResponse';
import { ShowControlsForOrganizationalUnitRequest } from './model/ShowControlsForOrganizationalUnitRequest';
import { ShowControlsForOrganizationalUnitResponse } from './model/ShowControlsForOrganizationalUnitResponse';
import { ShowHomeRegionRequest } from './model/ShowHomeRegionRequest';
import { ShowHomeRegionResponse } from './model/ShowHomeRegionResponse';
import { ShowLandingZoneConfigurationRequest } from './model/ShowLandingZoneConfigurationRequest';
import { ShowLandingZoneConfigurationResponse } from './model/ShowLandingZoneConfigurationResponse';
import { ShowLandingZoneIdentityCenterRequest } from './model/ShowLandingZoneIdentityCenterRequest';
import { ShowLandingZoneIdentityCenterResponse } from './model/ShowLandingZoneIdentityCenterResponse';
import { ShowLandingZoneStatusRequest } from './model/ShowLandingZoneStatusRequest';
import { ShowLandingZoneStatusResponse } from './model/ShowLandingZoneStatusResponse';
import { ShowManagedAccountRequest } from './model/ShowManagedAccountRequest';
import { ShowManagedAccountResponse } from './model/ShowManagedAccountResponse';
import { ShowManagedAccountTemplateRequest } from './model/ShowManagedAccountTemplateRequest';
import { ShowManagedAccountTemplateResponse } from './model/ShowManagedAccountTemplateResponse';
import { ShowManagedCoreAccountRequest } from './model/ShowManagedCoreAccountRequest';
import { ShowManagedCoreAccountResponse } from './model/ShowManagedCoreAccountResponse';
import { ShowManagedOrganizationalUnitRequest } from './model/ShowManagedOrganizationalUnitRequest';
import { ShowManagedOrganizationalUnitResponse } from './model/ShowManagedOrganizationalUnitResponse';
import { ShowOperationRequest } from './model/ShowOperationRequest';
import { ShowOperationResponse } from './model/ShowOperationResponse';
import { ShowTemplateDeployParamsRequest } from './model/ShowTemplateDeployParamsRequest';
import { ShowTemplateDeployParamsResponse } from './model/ShowTemplateDeployParamsResponse';
import { TargetControl } from './model/TargetControl';
import { TemplateParamVariable } from './model/TemplateParamVariable';
import { TemplateParamVariableValidation } from './model/TemplateParamVariableValidation';
import { UnEnrollAccountRequest } from './model/UnEnrollAccountRequest';
import { UnEnrollAccountResponse } from './model/UnEnrollAccountResponse';
import { UpdateManagedAccountRequest } from './model/UpdateManagedAccountRequest';
import { UpdateManagedAccountRequestBody } from './model/UpdateManagedAccountRequestBody';
import { UpdateManagedAccountResponse } from './model/UpdateManagedAccountResponse';

export class RgcClient {
    public static newBuilder(): ClientBuilder<RgcClient> {
            let client = new ClientBuilder<RgcClient>(newClient);
            return client;
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 检测八大场景治理成熟度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检测八大场景治理成熟度
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBestPracticeDetect(createBestPracticeDetectRequest?: CreateBestPracticeDetectRequest): Promise<CreateBestPracticeDetectResponse> {
        const options = ParamCreater().createBestPracticeDetect();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询最近一次成功的治理成熟度检测的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询最近一次成功的治理成熟度检测的详情
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBestPracticeDetails(showBestPracticeDetailsRequest?: ShowBestPracticeDetailsRequest): Promise<ShowBestPracticeDetailsResponse> {
        const options = ParamCreater().showBestPracticeDetails();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询最近一次成功的治理成熟度检测的总览。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询最近一次成功的治理成熟度检测的总览
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBestPracticeOverview(showBestPracticeOverviewRequest?: ShowBestPracticeOverviewRequest): Promise<ShowBestPracticeOverviewResponse> {
        const options = ParamCreater().showBestPracticeOverview();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询最近一次的治理成熟度检测的状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询最近一次的治理成熟度检测的状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBestPracticeStatus(showBestPracticeStatusRequest?: ShowBestPracticeStatusRequest): Promise<ShowBestPracticeStatusResponse> {
        const options = ParamCreater().showBestPracticeStatus();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭组织下的某个单元的某个控制策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭控制策略
     * @param {ControlOperateReqBody} controlOperateReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableControl(disableControlRequest?: DisableControlRequest): Promise<DisableControlResponse> {
        const options = ParamCreater().disableControl(disableControlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给组织下的某个单元开启某个控制策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启控制策略
     * @param {ControlOperateReqBody} controlOperateReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableControl(enableControlRequest?: EnableControlRequest): Promise<EnableControlResponse> {
        const options = ParamCreater().enableControl(enableControlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询纳管账号的Config规则合规性信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询纳管账号的Config规则合规性信息
     * @param {string} managedAccountId 纳管账号ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigRuleCompliances(listConfigRuleCompliancesRequest?: ListConfigRuleCompliancesRequest): Promise<ListConfigRuleCompliancesResponse> {
        const options = ParamCreater().listConfigRuleCompliances(listConfigRuleCompliancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出组织里所有不合规的资源信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出不合规信息
     * @param {string} [accountId] 账户ID。
     * @param {string} [organizationalUnitId] 注册OU ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listControlViolations(listControlViolationsRequest?: ListControlViolationsRequest): Promise<ListControlViolationsResponse> {
        const options = ParamCreater().listControlViolations(listControlViolationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出RGC服务里所有的预置控制策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出控制策略
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listControls(listControlsRequest?: ListControlsRequest): Promise<ListControlsResponse> {
        const options = ParamCreater().listControls(listControlsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出组织里某个纳管账号开启的所有控制策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出纳管账号下开启的控制策略
     * @param {string} managedAccountId 纳管账号ID。
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listControlsForAccount(listControlsForAccountRequest?: ListControlsForAccountRequest): Promise<ListControlsForAccountResponse> {
        const options = ParamCreater().listControlsForAccount(listControlsForAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出组织里某个注册OU开启的所有控制策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出注册OU下开启的控制策略
     * @param {string} managedOrganizationalUnitId 注册OU ID。
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listControlsForOrganizationalUnit(listControlsForOrganizationalUnitRequest?: ListControlsForOrganizationalUnitRequest): Promise<ListControlsForOrganizationalUnitResponse> {
        const options = ParamCreater().listControlsForOrganizationalUnit(listControlsForOrganizationalUnitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出Landing Zone的所有漂移详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出漂移信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDriftDetails(listDriftDetailsRequest?: ListDriftDetailsRequest): Promise<ListDriftDetailsResponse> {
        const options = ParamCreater().listDriftDetails();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出组织里开启的所有控制策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出开启的控制策略
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnabledControls(listEnabledControlsRequest?: ListEnabledControlsRequest): Promise<ListEnabledControlsResponse> {
        const options = ParamCreater().listEnabledControls(listEnabledControlsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询纳管账号的外部Config规则合规性信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询纳管账号的外部Config规则合规性信息
     * @param {string} managedAccountId 纳管账号ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExternalConfigRuleCompliances(listExternalConfigRuleCompliancesRequest?: ListExternalConfigRuleCompliancesRequest): Promise<ListExternalConfigRuleCompliancesResponse> {
        const options = ParamCreater().listExternalConfigRuleCompliances(listExternalConfigRuleCompliancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织里某个纳管账号的资源合规状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询纳管账号的合规状态
     * @param {string} managedAccountId 纳管账号ID。
     * @param {string} [controlId] 启用的控制策略信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showComplianceStatusForAccount(showComplianceStatusForAccountRequest?: ShowComplianceStatusForAccountRequest): Promise<ShowComplianceStatusForAccountResponse> {
        const options = ParamCreater().showComplianceStatusForAccount(showComplianceStatusForAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织里某个注册OU下所有纳管账号的资源合规状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询注册OU的合规状态
     * @param {string} managedOrganizationalUnitId 注册OU ID。
     * @param {string} [controlId] 启用的控制策略信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showComplianceStatusForOrganizationalUnit(showComplianceStatusForOrganizationalUnitRequest?: ShowComplianceStatusForOrganizationalUnitRequest): Promise<ShowComplianceStatusForOrganizationalUnitResponse> {
        const options = ParamCreater().showComplianceStatusForOrganizationalUnit(showComplianceStatusForOrganizationalUnitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个预置的控制策略详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询控制策略详细信息
     * @param {string} controlId 控制策略ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showControl(showControlRequest?: ShowControlRequest): Promise<ShowControlResponse> {
        const options = ParamCreater().showControl(showControlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据操作ID查询返回指定ID的操作状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询控制策略操作状态
     * @param {string} operationControlStatusId 操作控制策略的请求ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showControlOperate(showControlOperateRequest?: ShowControlOperateRequest): Promise<ShowControlOperateResponse> {
        const options = ParamCreater().showControlOperate(showControlOperateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织里某个注册账号下开启的某个控制策略的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询注册账号开启的控制策略
     * @param {string} managedAccountId 纳管账号ID。
     * @param {string} controlId 控制策略ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showControlsForAccount(showControlsForAccountRequest?: ShowControlsForAccountRequest): Promise<ShowControlsForAccountResponse> {
        const options = ParamCreater().showControlsForAccount(showControlsForAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织里某个注册OU下开启的某个控制策略的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询注册OU开启的控制策略
     * @param {string} managedOrganizationalUnitId 注册OU ID。
     * @param {string} controlId 控制策略ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showControlsForOrganizationalUnit(showControlsForOrganizationalUnitRequest?: ShowControlsForOrganizationalUnitRequest): Promise<ShowControlsForOrganizationalUnitResponse> {
        const options = ParamCreater().showControlsForOrganizationalUnit(showControlsForOrganizationalUnitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在设置Landing Zone之前，检查当前区域是否可以设置Landing Zone。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置Landing Zone前检查
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkLaunch(checkLaunchRequest?: CheckLaunchRequest): Promise<CheckLaunchResponse> {
        const options = ParamCreater().checkLaunch();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除Landing Zone。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除Landing Zone
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLandingZone(deleteLandingZoneRequest?: DeleteLandingZoneRequest): Promise<DeleteLandingZoneResponse> {
        const options = ParamCreater().deleteLandingZone();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在当前区域创建或者更新Landing Zone。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置Landing Zone
     * @param {SetupLandingZoneReqBody} setupLandingZoneReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setupLandingZone(setupLandingZoneRequest?: SetupLandingZoneRequest): Promise<SetupLandingZoneResponse> {
        const options = ParamCreater().setupLandingZone(setupLandingZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Landing Zone当前是否需要升级更新。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Landing Zone可更新状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAvailableUpdates(showAvailableUpdatesRequest?: ShowAvailableUpdatesRequest): Promise<ShowAvailableUpdatesResponse> {
        const options = ParamCreater().showAvailableUpdates();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Landing Zone的主区域。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主区域
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHomeRegion(showHomeRegionRequest?: ShowHomeRegionRequest): Promise<ShowHomeRegionResponse> {
        const options = ParamCreater().showHomeRegion();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前客户的Landing Zone的所有配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Landing Zone的配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLandingZoneConfiguration(showLandingZoneConfigurationRequest?: ShowLandingZoneConfigurationRequest): Promise<ShowLandingZoneConfigurationResponse> {
        const options = ParamCreater().showLandingZoneConfiguration();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前客户的Identity Center用户信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前客户的Identity Center用户信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLandingZoneIdentityCenter(showLandingZoneIdentityCenterRequest?: ShowLandingZoneIdentityCenterRequest): Promise<ShowLandingZoneIdentityCenterResponse> {
        const options = ParamCreater().showLandingZoneIdentityCenter();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Landing Zone的设置状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Landing Zone设置状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLandingZoneStatus(showLandingZoneStatusRequest?: ShowLandingZoneStatusRequest): Promise<ShowLandingZoneStatusResponse> {
        const options = ParamCreater().showLandingZoneStatus();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在组织里的某个注册OU下创建账号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建账号
     * @param {CreateManagedAccountRequest} createManagedAccountRequest 组织单元信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAccount(createAccountRequest?: CreateAccountRequest): Promise<CreateAccountResponse> {
        const options = ParamCreater().createAccount(createAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过RGC服务在组织下创建OU，创建后的OU在RGC中状态为已注册。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建OU
     * @param {CreateOrganizationalUnitReqBody} createOrganizationalUnitReqBody 组织单元信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createManagedOrganizationalUnit(createManagedOrganizationalUnitRequest?: CreateManagedOrganizationalUnitRequest): Promise<CreateManagedOrganizationalUnitResponse> {
        const options = ParamCreater().createManagedOrganizationalUnit(createManagedOrganizationalUnitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在组织里删除已注册OU。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除注册OU
     * @param {string} managedOrganizationalUnitId 注册OU ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteManagedOrganizationalUnits(deleteManagedOrganizationalUnitsRequest?: DeleteManagedOrganizationalUnitsRequest): Promise<DeleteManagedOrganizationalUnitsResponse> {
        const options = ParamCreater().deleteManagedOrganizationalUnits(deleteManagedOrganizationalUnitsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将组织里的某个OU从RGC服务里取消注册。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消注册OU
     * @param {string} managedOrganizationalUnitId 注册OU ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deregisterOrganizationalUnit(deregisterOrganizationalUnitRequest?: DeregisterOrganizationalUnitRequest): Promise<DeregisterOrganizationalUnitResponse> {
        const options = ParamCreater().deregisterOrganizationalUnit(deregisterOrganizationalUnitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将组织里的某个账号纳管到RGC服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 纳管账号
     * @param {string} managedAccountId 纳管账号ID。
     * @param {EnrollAccountRequestBody} enrollAccountRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enrollAccount(enrollAccountRequest?: EnrollAccountRequest): Promise<EnrollAccountResponse> {
        const options = ParamCreater().enrollAccount(enrollAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举控制策略生效的纳管账号信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举控制策略生效的纳管账号信息
     * @param {string} [controlId] 启用的控制策略信息。
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listManagedAccounts(listManagedAccountsRequest?: ListManagedAccountsRequest): Promise<ListManagedAccountsResponse> {
        const options = ParamCreater().listManagedAccounts(listManagedAccountsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出组织里某个注册OU下的所有纳管账号信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出注册OU下的纳管账号信息
     * @param {string} managedOrganizationalUnitId 注册OU ID。
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listManagedAccountsForParent(listManagedAccountsForParentRequest?: ListManagedAccountsForParentRequest): Promise<ListManagedAccountsForParentResponse> {
        const options = ParamCreater().listManagedAccountsForParent(listManagedAccountsForParentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举控制策略生效的注册OU信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举控制策略生效的注册OU信息
     * @param {string} [controlId] 启用的控制策略信息。
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listManagedOrganizationalUnits(listManagedOrganizationalUnitsRequest?: ListManagedOrganizationalUnitsRequest): Promise<ListManagedOrganizationalUnitsResponse> {
        const options = ParamCreater().listManagedOrganizationalUnits(listManagedOrganizationalUnitsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询在RGC服务里已注册OU和纳管账号操作的过程信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询已注册OU和纳管账号操作过程信息列表
     * @param {string} [accountId] 账户ID。
     * @param {string} [organizationalUnitId] 注册OU ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOperation(listOperationRequest?: ListOperationRequest): Promise<ListOperationResponse> {
        const options = ParamCreater().listOperation(listOperationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重新注册组织里的某个OU到RGC服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重新注册OU
     * @param {string} organizationalUnitId 注册OU ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public reRegisterOrganizationalUnit(reRegisterOrganizationalUnitRequest?: ReRegisterOrganizationalUnitRequest): Promise<ReRegisterOrganizationalUnitResponse> {
        const options = ParamCreater().reRegisterOrganizationalUnit(reRegisterOrganizationalUnitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将组织里的某个OU注册到RGC服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册OU
     * @param {string} organizationalUnitId 注册OU ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerOrganizationalUnit(registerOrganizationalUnitRequest?: RegisterOrganizationalUnitRequest): Promise<RegisterOrganizationalUnitResponse> {
        const options = ParamCreater().registerOrganizationalUnit(registerOrganizationalUnitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织里某个纳管账号信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询纳管账号信息
     * @param {string} managedAccountId 纳管账号ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showManagedAccount(showManagedAccountRequest?: ShowManagedAccountRequest): Promise<ShowManagedAccountResponse> {
        const options = ParamCreater().showManagedAccount(showManagedAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织里某个纳管账号的模板信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询纳管账号的模板信息
     * @param {string} managedAccountId 纳管账号ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showManagedAccountTemplate(showManagedAccountTemplateRequest?: ShowManagedAccountTemplateRequest): Promise<ShowManagedAccountTemplateResponse> {
        const options = ParamCreater().showManagedAccountTemplate(showManagedAccountTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出组织里的所有核心纳管账号信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出核心纳管账号
     * @param {'LOGGING' | 'SECURITY' | 'PRIMARY'} accountType 纳管账号类型。类型包括LOGGING，SECURITY和PRIMARY。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showManagedCoreAccount(showManagedCoreAccountRequest?: ShowManagedCoreAccountRequest): Promise<ShowManagedCoreAccountResponse> {
        const options = ParamCreater().showManagedCoreAccount(showManagedCoreAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询在RGC服务里的注册OU信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询已注册OU信息
     * @param {string} managedOrganizationalUnitId 注册OU ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showManagedOrganizationalUnit(showManagedOrganizationalUnitRequest?: ShowManagedOrganizationalUnitRequest): Promise<ShowManagedOrganizationalUnitResponse> {
        const options = ParamCreater().showManagedOrganizationalUnit(showManagedOrganizationalUnitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询在RGC服务里注册/取消注册的过程信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询注册过程信息
     * @param {string} operationId 操作ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOperation(showOperationRequest?: ShowOperationRequest): Promise<ShowOperationResponse> {
        const options = ParamCreater().showOperation(showOperationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将组织里的某个账号从RGC服务里取消纳管。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消纳管账号
     * @param {string} managedAccountId 纳管账号ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unEnrollAccount(unEnrollAccountRequest?: UnEnrollAccountRequest): Promise<UnEnrollAccountResponse> {
        const options = ParamCreater().unEnrollAccount(unEnrollAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新组织里某个已在RGC服务的纳管账号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新纳管账号
     * @param {string} managedAccountId 纳管账号ID。
     * @param {UpdateManagedAccountRequestBody} updateManagedAccountRequestBody 组织单元信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateManagedAccount(updateManagedAccountRequest?: UpdateManagedAccountRequest): Promise<UpdateManagedAccountResponse> {
        const options = ParamCreater().updateManagedAccount(updateManagedAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建RFS模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建模板
     * @param {CreateTemplateRequestBody} createTemplateRequestBody 模板创建参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTemplate(createTemplateRequest?: CreateTemplateRequest): Promise<CreateTemplateResponse> {
        const options = ParamCreater().createTemplate(createTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除RFS模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除模板
     * @param {string} templateName 模板名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
        const options = ParamCreater().deleteTemplate(deleteTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询预置模板列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询预置模板列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPredefinedTemplates(listPredefinedTemplatesRequest?: ListPredefinedTemplatesRequest): Promise<ListPredefinedTemplatesResponse> {
        const options = ParamCreater().listPredefinedTemplates();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询模板的部署参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询模板的部署参数
     * @param {string} templateName 模板名称。
     * @param {string} version 模板版本。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateDeployParams(showTemplateDeployParamsRequest?: ShowTemplateDeployParamsRequest): Promise<ShowTemplateDeployParamsResponse> {
        const options = ParamCreater().showTemplateDeployParams(showTemplateDeployParamsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 检测八大场景治理成熟度。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBestPracticeDetect() {
            const options = {
                method: "POST",
                url: "/v1/best-practice/detect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询最近一次成功的治理成熟度检测的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBestPracticeDetails() {
            const options = {
                method: "GET",
                url: "/v1/best-practice/detection-details",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询最近一次成功的治理成熟度检测的总览。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBestPracticeOverview() {
            const options = {
                method: "GET",
                url: "/v1/best-practice/detection-overview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询最近一次的治理成熟度检测的状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBestPracticeStatus() {
            const options = {
                method: "GET",
                url: "/v1/best-practice/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭组织下的某个单元的某个控制策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableControl(disableControlRequest?: DisableControlRequest) {
            const options = {
                method: "POST",
                url: "/v1/governance/controls/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (disableControlRequest !== null && disableControlRequest !== undefined) {
                if (disableControlRequest instanceof DisableControlRequest) {
                    body = disableControlRequest.body
                } else {
                    body = disableControlRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 给组织下的某个单元开启某个控制策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableControl(enableControlRequest?: EnableControlRequest) {
            const options = {
                method: "POST",
                url: "/v1/governance/controls/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (enableControlRequest !== null && enableControlRequest !== undefined) {
                if (enableControlRequest instanceof EnableControlRequest) {
                    body = enableControlRequest.body
                } else {
                    body = enableControlRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询纳管账号的Config规则合规性信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigRuleCompliances(listConfigRuleCompliancesRequest?: ListConfigRuleCompliancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/managed-accounts/{managed_account_id}/config-rule-compliances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let managedAccountId;

            if (listConfigRuleCompliancesRequest !== null && listConfigRuleCompliancesRequest !== undefined) {
                if (listConfigRuleCompliancesRequest instanceof ListConfigRuleCompliancesRequest) {
                    managedAccountId = listConfigRuleCompliancesRequest.managedAccountId;
                } else {
                    managedAccountId = listConfigRuleCompliancesRequest['managed_account_id'];
                }
            }

        
            if (managedAccountId === null || managedAccountId === undefined) {
            throw new RequiredError('managedAccountId','Required parameter managedAccountId was null or undefined when calling listConfigRuleCompliances.');
            }

            options.pathParams = { 'managed_account_id': managedAccountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出组织里所有不合规的资源信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listControlViolations(listControlViolationsRequest?: ListControlViolationsRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/control-violations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let accountId;
            
            let organizationalUnitId;

            if (listControlViolationsRequest !== null && listControlViolationsRequest !== undefined) {
                if (listControlViolationsRequest instanceof ListControlViolationsRequest) {
                    accountId = listControlViolationsRequest.accountId;
                    organizationalUnitId = listControlViolationsRequest.organizationalUnitId;
                } else {
                    accountId = listControlViolationsRequest['account_id'];
                    organizationalUnitId = listControlViolationsRequest['organizational_unit_id'];
                }
            }

        
            if (accountId !== null && accountId !== undefined) {
                localVarQueryParameter['account_id'] = accountId;
            }
            if (organizationalUnitId !== null && organizationalUnitId !== undefined) {
                localVarQueryParameter['organizational_unit_id'] = organizationalUnitId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出RGC服务里所有的预置控制策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listControls(listControlsRequest?: ListControlsRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/controls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listControlsRequest !== null && listControlsRequest !== undefined) {
                if (listControlsRequest instanceof ListControlsRequest) {
                    limit = listControlsRequest.limit;
                    marker = listControlsRequest.marker;
                } else {
                    limit = listControlsRequest['limit'];
                    marker = listControlsRequest['marker'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出组织里某个纳管账号开启的所有控制策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listControlsForAccount(listControlsForAccountRequest?: ListControlsForAccountRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/managed-accounts/{managed_account_id}/controls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let managedAccountId;
            
            let limit;
            
            let marker;

            if (listControlsForAccountRequest !== null && listControlsForAccountRequest !== undefined) {
                if (listControlsForAccountRequest instanceof ListControlsForAccountRequest) {
                    managedAccountId = listControlsForAccountRequest.managedAccountId;
                    limit = listControlsForAccountRequest.limit;
                    marker = listControlsForAccountRequest.marker;
                } else {
                    managedAccountId = listControlsForAccountRequest['managed_account_id'];
                    limit = listControlsForAccountRequest['limit'];
                    marker = listControlsForAccountRequest['marker'];
                }
            }

        
            if (managedAccountId === null || managedAccountId === undefined) {
            throw new RequiredError('managedAccountId','Required parameter managedAccountId was null or undefined when calling listControlsForAccount.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'managed_account_id': managedAccountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出组织里某个注册OU开启的所有控制策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listControlsForOrganizationalUnit(listControlsForOrganizationalUnitRequest?: ListControlsForOrganizationalUnitRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/managed-organizational-units/{managed_organizational_unit_id}/controls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let managedOrganizationalUnitId;
            
            let limit;
            
            let marker;

            if (listControlsForOrganizationalUnitRequest !== null && listControlsForOrganizationalUnitRequest !== undefined) {
                if (listControlsForOrganizationalUnitRequest instanceof ListControlsForOrganizationalUnitRequest) {
                    managedOrganizationalUnitId = listControlsForOrganizationalUnitRequest.managedOrganizationalUnitId;
                    limit = listControlsForOrganizationalUnitRequest.limit;
                    marker = listControlsForOrganizationalUnitRequest.marker;
                } else {
                    managedOrganizationalUnitId = listControlsForOrganizationalUnitRequest['managed_organizational_unit_id'];
                    limit = listControlsForOrganizationalUnitRequest['limit'];
                    marker = listControlsForOrganizationalUnitRequest['marker'];
                }
            }

        
            if (managedOrganizationalUnitId === null || managedOrganizationalUnitId === undefined) {
            throw new RequiredError('managedOrganizationalUnitId','Required parameter managedOrganizationalUnitId was null or undefined when calling listControlsForOrganizationalUnit.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'managed_organizational_unit_id': managedOrganizationalUnitId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出Landing Zone的所有漂移详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDriftDetails() {
            const options = {
                method: "GET",
                url: "/v1/governance/drift-details",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出组织里开启的所有控制策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnabledControls(listEnabledControlsRequest?: ListEnabledControlsRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/enabled-controls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listEnabledControlsRequest !== null && listEnabledControlsRequest !== undefined) {
                if (listEnabledControlsRequest instanceof ListEnabledControlsRequest) {
                    limit = listEnabledControlsRequest.limit;
                    marker = listEnabledControlsRequest.marker;
                } else {
                    limit = listEnabledControlsRequest['limit'];
                    marker = listEnabledControlsRequest['marker'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询纳管账号的外部Config规则合规性信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExternalConfigRuleCompliances(listExternalConfigRuleCompliancesRequest?: ListExternalConfigRuleCompliancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/managed-accounts/{managed_account_id}/external-config-rule-compliances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let managedAccountId;

            if (listExternalConfigRuleCompliancesRequest !== null && listExternalConfigRuleCompliancesRequest !== undefined) {
                if (listExternalConfigRuleCompliancesRequest instanceof ListExternalConfigRuleCompliancesRequest) {
                    managedAccountId = listExternalConfigRuleCompliancesRequest.managedAccountId;
                } else {
                    managedAccountId = listExternalConfigRuleCompliancesRequest['managed_account_id'];
                }
            }

        
            if (managedAccountId === null || managedAccountId === undefined) {
            throw new RequiredError('managedAccountId','Required parameter managedAccountId was null or undefined when calling listExternalConfigRuleCompliances.');
            }

            options.pathParams = { 'managed_account_id': managedAccountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组织里某个纳管账号的资源合规状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showComplianceStatusForAccount(showComplianceStatusForAccountRequest?: ShowComplianceStatusForAccountRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/managed-accounts/{managed_account_id}/compliance-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let managedAccountId;
            
            let controlId;

            if (showComplianceStatusForAccountRequest !== null && showComplianceStatusForAccountRequest !== undefined) {
                if (showComplianceStatusForAccountRequest instanceof ShowComplianceStatusForAccountRequest) {
                    managedAccountId = showComplianceStatusForAccountRequest.managedAccountId;
                    controlId = showComplianceStatusForAccountRequest.controlId;
                } else {
                    managedAccountId = showComplianceStatusForAccountRequest['managed_account_id'];
                    controlId = showComplianceStatusForAccountRequest['control_id'];
                }
            }

        
            if (managedAccountId === null || managedAccountId === undefined) {
            throw new RequiredError('managedAccountId','Required parameter managedAccountId was null or undefined when calling showComplianceStatusForAccount.');
            }
            if (controlId !== null && controlId !== undefined) {
                localVarQueryParameter['control_id'] = controlId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'managed_account_id': managedAccountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组织里某个注册OU下所有纳管账号的资源合规状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showComplianceStatusForOrganizationalUnit(showComplianceStatusForOrganizationalUnitRequest?: ShowComplianceStatusForOrganizationalUnitRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/managed-organizational-units/{managed_organizational_unit_id}/compliance-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let managedOrganizationalUnitId;
            
            let controlId;

            if (showComplianceStatusForOrganizationalUnitRequest !== null && showComplianceStatusForOrganizationalUnitRequest !== undefined) {
                if (showComplianceStatusForOrganizationalUnitRequest instanceof ShowComplianceStatusForOrganizationalUnitRequest) {
                    managedOrganizationalUnitId = showComplianceStatusForOrganizationalUnitRequest.managedOrganizationalUnitId;
                    controlId = showComplianceStatusForOrganizationalUnitRequest.controlId;
                } else {
                    managedOrganizationalUnitId = showComplianceStatusForOrganizationalUnitRequest['managed_organizational_unit_id'];
                    controlId = showComplianceStatusForOrganizationalUnitRequest['control_id'];
                }
            }

        
            if (managedOrganizationalUnitId === null || managedOrganizationalUnitId === undefined) {
            throw new RequiredError('managedOrganizationalUnitId','Required parameter managedOrganizationalUnitId was null or undefined when calling showComplianceStatusForOrganizationalUnit.');
            }
            if (controlId !== null && controlId !== undefined) {
                localVarQueryParameter['control_id'] = controlId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'managed_organizational_unit_id': managedOrganizationalUnitId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个预置的控制策略详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showControl(showControlRequest?: ShowControlRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/controls/{control_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let controlId;

            if (showControlRequest !== null && showControlRequest !== undefined) {
                if (showControlRequest instanceof ShowControlRequest) {
                    controlId = showControlRequest.controlId;
                } else {
                    controlId = showControlRequest['control_id'];
                }
            }

        
            if (controlId === null || controlId === undefined) {
            throw new RequiredError('controlId','Required parameter controlId was null or undefined when calling showControl.');
            }

            options.pathParams = { 'control_id': controlId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据操作ID查询返回指定ID的操作状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showControlOperate(showControlOperateRequest?: ShowControlOperateRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/operation-control-status/{operation_control_status_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let operationControlStatusId;

            if (showControlOperateRequest !== null && showControlOperateRequest !== undefined) {
                if (showControlOperateRequest instanceof ShowControlOperateRequest) {
                    operationControlStatusId = showControlOperateRequest.operationControlStatusId;
                } else {
                    operationControlStatusId = showControlOperateRequest['operation_control_status_id'];
                }
            }

        
            if (operationControlStatusId === null || operationControlStatusId === undefined) {
            throw new RequiredError('operationControlStatusId','Required parameter operationControlStatusId was null or undefined when calling showControlOperate.');
            }

            options.pathParams = { 'operation_control_status_id': operationControlStatusId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组织里某个注册账号下开启的某个控制策略的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showControlsForAccount(showControlsForAccountRequest?: ShowControlsForAccountRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/managed-accounts/{managed_account_id}/controls/{control_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let managedAccountId;
            
            let controlId;

            if (showControlsForAccountRequest !== null && showControlsForAccountRequest !== undefined) {
                if (showControlsForAccountRequest instanceof ShowControlsForAccountRequest) {
                    managedAccountId = showControlsForAccountRequest.managedAccountId;
                    controlId = showControlsForAccountRequest.controlId;
                } else {
                    managedAccountId = showControlsForAccountRequest['managed_account_id'];
                    controlId = showControlsForAccountRequest['control_id'];
                }
            }

        
            if (managedAccountId === null || managedAccountId === undefined) {
            throw new RequiredError('managedAccountId','Required parameter managedAccountId was null or undefined when calling showControlsForAccount.');
            }
            if (controlId === null || controlId === undefined) {
            throw new RequiredError('controlId','Required parameter controlId was null or undefined when calling showControlsForAccount.');
            }

            options.pathParams = { 'managed_account_id': managedAccountId,'control_id': controlId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组织里某个注册OU下开启的某个控制策略的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showControlsForOrganizationalUnit(showControlsForOrganizationalUnitRequest?: ShowControlsForOrganizationalUnitRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/managed-organizational-units/{managed_organizational_unit_id}/controls/{control_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let managedOrganizationalUnitId;
            
            let controlId;

            if (showControlsForOrganizationalUnitRequest !== null && showControlsForOrganizationalUnitRequest !== undefined) {
                if (showControlsForOrganizationalUnitRequest instanceof ShowControlsForOrganizationalUnitRequest) {
                    managedOrganizationalUnitId = showControlsForOrganizationalUnitRequest.managedOrganizationalUnitId;
                    controlId = showControlsForOrganizationalUnitRequest.controlId;
                } else {
                    managedOrganizationalUnitId = showControlsForOrganizationalUnitRequest['managed_organizational_unit_id'];
                    controlId = showControlsForOrganizationalUnitRequest['control_id'];
                }
            }

        
            if (managedOrganizationalUnitId === null || managedOrganizationalUnitId === undefined) {
            throw new RequiredError('managedOrganizationalUnitId','Required parameter managedOrganizationalUnitId was null or undefined when calling showControlsForOrganizationalUnit.');
            }
            if (controlId === null || controlId === undefined) {
            throw new RequiredError('controlId','Required parameter controlId was null or undefined when calling showControlsForOrganizationalUnit.');
            }

            options.pathParams = { 'managed_organizational_unit_id': managedOrganizationalUnitId,'control_id': controlId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在设置Landing Zone之前，检查当前区域是否可以设置Landing Zone。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkLaunch() {
            const options = {
                method: "POST",
                url: "/v1/landing-zone/pre-launch-check",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除Landing Zone。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLandingZone() {
            const options = {
                method: "POST",
                url: "/v1/landing-zone/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在当前区域创建或者更新Landing Zone。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setupLandingZone(setupLandingZoneRequest?: SetupLandingZoneRequest) {
            const options = {
                method: "POST",
                url: "/v1/landing-zone/setup",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setupLandingZoneRequest !== null && setupLandingZoneRequest !== undefined) {
                if (setupLandingZoneRequest instanceof SetupLandingZoneRequest) {
                    body = setupLandingZoneRequest.body
                } else {
                    body = setupLandingZoneRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Landing Zone当前是否需要升级更新。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAvailableUpdates() {
            const options = {
                method: "GET",
                url: "/v1/landing-zone/available-updates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Landing Zone的主区域。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHomeRegion() {
            const options = {
                method: "GET",
                url: "/v1/landing-zone/home-region",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前客户的Landing Zone的所有配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLandingZoneConfiguration() {
            const options = {
                method: "GET",
                url: "/v1/landing-zone/configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前客户的Identity Center用户信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLandingZoneIdentityCenter() {
            const options = {
                method: "GET",
                url: "/v1/landing-zone/identity-center",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Landing Zone的设置状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLandingZoneStatus() {
            const options = {
                method: "GET",
                url: "/v1/landing-zone/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在组织里的某个注册OU下创建账号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAccount(createAccountRequest?: CreateAccountRequest) {
            const options = {
                method: "POST",
                url: "/v1/managed-organization/managed-accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAccountRequest !== null && createAccountRequest !== undefined) {
                if (createAccountRequest instanceof CreateAccountRequest) {
                    body = createAccountRequest.body
                } else {
                    body = createAccountRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过RGC服务在组织下创建OU，创建后的OU在RGC中状态为已注册。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createManagedOrganizationalUnit(createManagedOrganizationalUnitRequest?: CreateManagedOrganizationalUnitRequest) {
            const options = {
                method: "POST",
                url: "/v1/managed-organization/managed-organizational-units",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createManagedOrganizationalUnitRequest !== null && createManagedOrganizationalUnitRequest !== undefined) {
                if (createManagedOrganizationalUnitRequest instanceof CreateManagedOrganizationalUnitRequest) {
                    body = createManagedOrganizationalUnitRequest.body
                } else {
                    body = createManagedOrganizationalUnitRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在组织里删除已注册OU。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteManagedOrganizationalUnits(deleteManagedOrganizationalUnitsRequest?: DeleteManagedOrganizationalUnitsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/managed-organization/managed-organizational-units/{managed_organizational_unit_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let managedOrganizationalUnitId;

            if (deleteManagedOrganizationalUnitsRequest !== null && deleteManagedOrganizationalUnitsRequest !== undefined) {
                if (deleteManagedOrganizationalUnitsRequest instanceof DeleteManagedOrganizationalUnitsRequest) {
                    managedOrganizationalUnitId = deleteManagedOrganizationalUnitsRequest.managedOrganizationalUnitId;
                } else {
                    managedOrganizationalUnitId = deleteManagedOrganizationalUnitsRequest['managed_organizational_unit_id'];
                }
            }

        
            if (managedOrganizationalUnitId === null || managedOrganizationalUnitId === undefined) {
            throw new RequiredError('managedOrganizationalUnitId','Required parameter managedOrganizationalUnitId was null or undefined when calling deleteManagedOrganizationalUnits.');
            }

            options.pathParams = { 'managed_organizational_unit_id': managedOrganizationalUnitId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将组织里的某个OU从RGC服务里取消注册。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deregisterOrganizationalUnit(deregisterOrganizationalUnitRequest?: DeregisterOrganizationalUnitRequest) {
            const options = {
                method: "POST",
                url: "/v1/managed-organization/managed-organizational-units/{managed_organizational_unit_id}/de-register",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let managedOrganizationalUnitId;

            if (deregisterOrganizationalUnitRequest !== null && deregisterOrganizationalUnitRequest !== undefined) {
                if (deregisterOrganizationalUnitRequest instanceof DeregisterOrganizationalUnitRequest) {
                    managedOrganizationalUnitId = deregisterOrganizationalUnitRequest.managedOrganizationalUnitId;
                } else {
                    managedOrganizationalUnitId = deregisterOrganizationalUnitRequest['managed_organizational_unit_id'];
                }
            }

        
            if (managedOrganizationalUnitId === null || managedOrganizationalUnitId === undefined) {
            throw new RequiredError('managedOrganizationalUnitId','Required parameter managedOrganizationalUnitId was null or undefined when calling deregisterOrganizationalUnit.');
            }

            options.pathParams = { 'managed_organizational_unit_id': managedOrganizationalUnitId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将组织里的某个账号纳管到RGC服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enrollAccount(enrollAccountRequest?: EnrollAccountRequest) {
            const options = {
                method: "POST",
                url: "/v1/managed-organization/accounts/{managed_account_id}/enroll",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let managedAccountId;

            if (enrollAccountRequest !== null && enrollAccountRequest !== undefined) {
                if (enrollAccountRequest instanceof EnrollAccountRequest) {
                    managedAccountId = enrollAccountRequest.managedAccountId;
                    body = enrollAccountRequest.body
                } else {
                    managedAccountId = enrollAccountRequest['managed_account_id'];
                    body = enrollAccountRequest['body'];
                }
            }

        
            if (managedAccountId === null || managedAccountId === undefined) {
            throw new RequiredError('managedAccountId','Required parameter managedAccountId was null or undefined when calling enrollAccount.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'managed_account_id': managedAccountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举控制策略生效的纳管账号信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listManagedAccounts(listManagedAccountsRequest?: ListManagedAccountsRequest) {
            const options = {
                method: "GET",
                url: "/v1/managed-organization/managed-accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let controlId;
            
            let limit;
            
            let marker;

            if (listManagedAccountsRequest !== null && listManagedAccountsRequest !== undefined) {
                if (listManagedAccountsRequest instanceof ListManagedAccountsRequest) {
                    controlId = listManagedAccountsRequest.controlId;
                    limit = listManagedAccountsRequest.limit;
                    marker = listManagedAccountsRequest.marker;
                } else {
                    controlId = listManagedAccountsRequest['control_id'];
                    limit = listManagedAccountsRequest['limit'];
                    marker = listManagedAccountsRequest['marker'];
                }
            }

        
            if (controlId !== null && controlId !== undefined) {
                localVarQueryParameter['control_id'] = controlId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出组织里某个注册OU下的所有纳管账号信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listManagedAccountsForParent(listManagedAccountsForParentRequest?: ListManagedAccountsForParentRequest) {
            const options = {
                method: "GET",
                url: "/v1/managed-organization/managed-organizational-units/{managed_organizational_unit_id}/managed-accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let managedOrganizationalUnitId;
            
            let limit;
            
            let marker;

            if (listManagedAccountsForParentRequest !== null && listManagedAccountsForParentRequest !== undefined) {
                if (listManagedAccountsForParentRequest instanceof ListManagedAccountsForParentRequest) {
                    managedOrganizationalUnitId = listManagedAccountsForParentRequest.managedOrganizationalUnitId;
                    limit = listManagedAccountsForParentRequest.limit;
                    marker = listManagedAccountsForParentRequest.marker;
                } else {
                    managedOrganizationalUnitId = listManagedAccountsForParentRequest['managed_organizational_unit_id'];
                    limit = listManagedAccountsForParentRequest['limit'];
                    marker = listManagedAccountsForParentRequest['marker'];
                }
            }

        
            if (managedOrganizationalUnitId === null || managedOrganizationalUnitId === undefined) {
            throw new RequiredError('managedOrganizationalUnitId','Required parameter managedOrganizationalUnitId was null or undefined when calling listManagedAccountsForParent.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'managed_organizational_unit_id': managedOrganizationalUnitId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举控制策略生效的注册OU信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listManagedOrganizationalUnits(listManagedOrganizationalUnitsRequest?: ListManagedOrganizationalUnitsRequest) {
            const options = {
                method: "GET",
                url: "/v1/managed-organization/managed-organizational-units",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let controlId;
            
            let limit;
            
            let marker;

            if (listManagedOrganizationalUnitsRequest !== null && listManagedOrganizationalUnitsRequest !== undefined) {
                if (listManagedOrganizationalUnitsRequest instanceof ListManagedOrganizationalUnitsRequest) {
                    controlId = listManagedOrganizationalUnitsRequest.controlId;
                    limit = listManagedOrganizationalUnitsRequest.limit;
                    marker = listManagedOrganizationalUnitsRequest.marker;
                } else {
                    controlId = listManagedOrganizationalUnitsRequest['control_id'];
                    limit = listManagedOrganizationalUnitsRequest['limit'];
                    marker = listManagedOrganizationalUnitsRequest['marker'];
                }
            }

        
            if (controlId !== null && controlId !== undefined) {
                localVarQueryParameter['control_id'] = controlId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询在RGC服务里已注册OU和纳管账号操作的过程信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOperation(listOperationRequest?: ListOperationRequest) {
            const options = {
                method: "GET",
                url: "/v1/managed-organization",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let accountId;
            
            let organizationalUnitId;

            if (listOperationRequest !== null && listOperationRequest !== undefined) {
                if (listOperationRequest instanceof ListOperationRequest) {
                    accountId = listOperationRequest.accountId;
                    organizationalUnitId = listOperationRequest.organizationalUnitId;
                } else {
                    accountId = listOperationRequest['account_id'];
                    organizationalUnitId = listOperationRequest['organizational_unit_id'];
                }
            }

        
            if (accountId !== null && accountId !== undefined) {
                localVarQueryParameter['account_id'] = accountId;
            }
            if (organizationalUnitId !== null && organizationalUnitId !== undefined) {
                localVarQueryParameter['organizational_unit_id'] = organizationalUnitId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重新注册组织里的某个OU到RGC服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        reRegisterOrganizationalUnit(reRegisterOrganizationalUnitRequest?: ReRegisterOrganizationalUnitRequest) {
            const options = {
                method: "POST",
                url: "/v1/managed-organization/organizational-units/{organizational_unit_id}/re-register",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let organizationalUnitId;

            if (reRegisterOrganizationalUnitRequest !== null && reRegisterOrganizationalUnitRequest !== undefined) {
                if (reRegisterOrganizationalUnitRequest instanceof ReRegisterOrganizationalUnitRequest) {
                    organizationalUnitId = reRegisterOrganizationalUnitRequest.organizationalUnitId;
                } else {
                    organizationalUnitId = reRegisterOrganizationalUnitRequest['organizational_unit_id'];
                }
            }

        
            if (organizationalUnitId === null || organizationalUnitId === undefined) {
            throw new RequiredError('organizationalUnitId','Required parameter organizationalUnitId was null or undefined when calling reRegisterOrganizationalUnit.');
            }

            options.pathParams = { 'organizational_unit_id': organizationalUnitId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将组织里的某个OU注册到RGC服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerOrganizationalUnit(registerOrganizationalUnitRequest?: RegisterOrganizationalUnitRequest) {
            const options = {
                method: "POST",
                url: "/v1/managed-organization/organizational-units/{organizational_unit_id}/register",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let organizationalUnitId;

            if (registerOrganizationalUnitRequest !== null && registerOrganizationalUnitRequest !== undefined) {
                if (registerOrganizationalUnitRequest instanceof RegisterOrganizationalUnitRequest) {
                    organizationalUnitId = registerOrganizationalUnitRequest.organizationalUnitId;
                } else {
                    organizationalUnitId = registerOrganizationalUnitRequest['organizational_unit_id'];
                }
            }

        
            if (organizationalUnitId === null || organizationalUnitId === undefined) {
            throw new RequiredError('organizationalUnitId','Required parameter organizationalUnitId was null or undefined when calling registerOrganizationalUnit.');
            }

            options.pathParams = { 'organizational_unit_id': organizationalUnitId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组织里某个纳管账号信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showManagedAccount(showManagedAccountRequest?: ShowManagedAccountRequest) {
            const options = {
                method: "GET",
                url: "/v1/managed-organization/managed-accounts/{managed_account_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let managedAccountId;

            if (showManagedAccountRequest !== null && showManagedAccountRequest !== undefined) {
                if (showManagedAccountRequest instanceof ShowManagedAccountRequest) {
                    managedAccountId = showManagedAccountRequest.managedAccountId;
                } else {
                    managedAccountId = showManagedAccountRequest['managed_account_id'];
                }
            }

        
            if (managedAccountId === null || managedAccountId === undefined) {
            throw new RequiredError('managedAccountId','Required parameter managedAccountId was null or undefined when calling showManagedAccount.');
            }

            options.pathParams = { 'managed_account_id': managedAccountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组织里某个纳管账号的模板信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showManagedAccountTemplate(showManagedAccountTemplateRequest?: ShowManagedAccountTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/managed-organization/managed-accounts/{managed_account_id}/blueprint",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let managedAccountId;

            if (showManagedAccountTemplateRequest !== null && showManagedAccountTemplateRequest !== undefined) {
                if (showManagedAccountTemplateRequest instanceof ShowManagedAccountTemplateRequest) {
                    managedAccountId = showManagedAccountTemplateRequest.managedAccountId;
                } else {
                    managedAccountId = showManagedAccountTemplateRequest['managed_account_id'];
                }
            }

        
            if (managedAccountId === null || managedAccountId === undefined) {
            throw new RequiredError('managedAccountId','Required parameter managedAccountId was null or undefined when calling showManagedAccountTemplate.');
            }

            options.pathParams = { 'managed_account_id': managedAccountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出组织里的所有核心纳管账号信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showManagedCoreAccount(showManagedCoreAccountRequest?: ShowManagedCoreAccountRequest) {
            const options = {
                method: "GET",
                url: "/v1/managed-organization/managed-core-accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let accountType;

            if (showManagedCoreAccountRequest !== null && showManagedCoreAccountRequest !== undefined) {
                if (showManagedCoreAccountRequest instanceof ShowManagedCoreAccountRequest) {
                    accountType = showManagedCoreAccountRequest.accountType;
                } else {
                    accountType = showManagedCoreAccountRequest['account_type'];
                }
            }

        
            if (accountType === null || accountType === undefined) {
                throw new RequiredError('accountType','Required parameter accountType was null or undefined when calling showManagedCoreAccount.');
            }
            if (accountType !== null && accountType !== undefined) {
                localVarQueryParameter['account_type'] = accountType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询在RGC服务里的注册OU信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showManagedOrganizationalUnit(showManagedOrganizationalUnitRequest?: ShowManagedOrganizationalUnitRequest) {
            const options = {
                method: "GET",
                url: "/v1/managed-organization/managed-organizational-units/{managed_organizational_unit_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let managedOrganizationalUnitId;

            if (showManagedOrganizationalUnitRequest !== null && showManagedOrganizationalUnitRequest !== undefined) {
                if (showManagedOrganizationalUnitRequest instanceof ShowManagedOrganizationalUnitRequest) {
                    managedOrganizationalUnitId = showManagedOrganizationalUnitRequest.managedOrganizationalUnitId;
                } else {
                    managedOrganizationalUnitId = showManagedOrganizationalUnitRequest['managed_organizational_unit_id'];
                }
            }

        
            if (managedOrganizationalUnitId === null || managedOrganizationalUnitId === undefined) {
            throw new RequiredError('managedOrganizationalUnitId','Required parameter managedOrganizationalUnitId was null or undefined when calling showManagedOrganizationalUnit.');
            }

            options.pathParams = { 'managed_organizational_unit_id': managedOrganizationalUnitId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询在RGC服务里注册/取消注册的过程信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOperation(showOperationRequest?: ShowOperationRequest) {
            const options = {
                method: "GET",
                url: "/v1/managed-organization/{operation_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let operationId;

            if (showOperationRequest !== null && showOperationRequest !== undefined) {
                if (showOperationRequest instanceof ShowOperationRequest) {
                    operationId = showOperationRequest.operationId;
                } else {
                    operationId = showOperationRequest['operation_id'];
                }
            }

        
            if (operationId === null || operationId === undefined) {
            throw new RequiredError('operationId','Required parameter operationId was null or undefined when calling showOperation.');
            }

            options.pathParams = { 'operation_id': operationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将组织里的某个账号从RGC服务里取消纳管。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unEnrollAccount(unEnrollAccountRequest?: UnEnrollAccountRequest) {
            const options = {
                method: "POST",
                url: "/v1/managed-organization/managed-accounts/{managed_account_id}/un-enroll",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let managedAccountId;

            if (unEnrollAccountRequest !== null && unEnrollAccountRequest !== undefined) {
                if (unEnrollAccountRequest instanceof UnEnrollAccountRequest) {
                    managedAccountId = unEnrollAccountRequest.managedAccountId;
                } else {
                    managedAccountId = unEnrollAccountRequest['managed_account_id'];
                }
            }

        
            if (managedAccountId === null || managedAccountId === undefined) {
            throw new RequiredError('managedAccountId','Required parameter managedAccountId was null or undefined when calling unEnrollAccount.');
            }

            options.pathParams = { 'managed_account_id': managedAccountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新组织里某个已在RGC服务的纳管账号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateManagedAccount(updateManagedAccountRequest?: UpdateManagedAccountRequest) {
            const options = {
                method: "POST",
                url: "/v1/managed-organization/managed-accounts/{managed_account_id}/update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let managedAccountId;

            if (updateManagedAccountRequest !== null && updateManagedAccountRequest !== undefined) {
                if (updateManagedAccountRequest instanceof UpdateManagedAccountRequest) {
                    managedAccountId = updateManagedAccountRequest.managedAccountId;
                    body = updateManagedAccountRequest.body
                } else {
                    managedAccountId = updateManagedAccountRequest['managed_account_id'];
                    body = updateManagedAccountRequest['body'];
                }
            }

        
            if (managedAccountId === null || managedAccountId === undefined) {
            throw new RequiredError('managedAccountId','Required parameter managedAccountId was null or undefined when calling updateManagedAccount.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'managed_account_id': managedAccountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建RFS模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTemplate(createTemplateRequest?: CreateTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v1/rgc/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTemplateRequest !== null && createTemplateRequest !== undefined) {
                if (createTemplateRequest instanceof CreateTemplateRequest) {
                    body = createTemplateRequest.body
                } else {
                    body = createTemplateRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除RFS模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/rgc/templates/{template_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let templateName;

            if (deleteTemplateRequest !== null && deleteTemplateRequest !== undefined) {
                if (deleteTemplateRequest instanceof DeleteTemplateRequest) {
                    templateName = deleteTemplateRequest.templateName;
                } else {
                    templateName = deleteTemplateRequest['template_name'];
                }
            }

        
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling deleteTemplate.');
            }

            options.pathParams = { 'template_name': templateName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询预置模板列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPredefinedTemplates() {
            const options = {
                method: "GET",
                url: "/v1/rgc/predefined-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询模板的部署参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTemplateDeployParams(showTemplateDeployParamsRequest?: ShowTemplateDeployParamsRequest) {
            const options = {
                method: "GET",
                url: "/v1/rgc/templates/{template_name}/deploy-params",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let templateName;
            
            let version;

            if (showTemplateDeployParamsRequest !== null && showTemplateDeployParamsRequest !== undefined) {
                if (showTemplateDeployParamsRequest instanceof ShowTemplateDeployParamsRequest) {
                    templateName = showTemplateDeployParamsRequest.templateName;
                    version = showTemplateDeployParamsRequest.version;
                } else {
                    templateName = showTemplateDeployParamsRequest['template_name'];
                    version = showTemplateDeployParamsRequest['version'];
                }
            }

        
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling showTemplateDeployParams.');
            }
            if (version === null || version === undefined) {
                throw new RequiredError('version','Required parameter version was null or undefined when calling showTemplateDeployParams.');
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'template_name': templateName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): RgcClient {
    return new RgcClient(client);
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}