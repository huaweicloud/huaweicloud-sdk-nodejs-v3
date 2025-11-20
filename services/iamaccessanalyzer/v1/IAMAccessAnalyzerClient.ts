import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessPreview } from './model/AccessPreview';
import { AccessPreviewId } from './model/AccessPreviewId';
import { AccessPreviewStatus } from './model/AccessPreviewStatus';
import { AccessPreviewSummary } from './model/AccessPreviewSummary';
import { AnalyzerConfiguration } from './model/AnalyzerConfiguration';
import { AnalyzerConfigurationUnusedAccess } from './model/AnalyzerConfigurationUnusedAccess';
import { AnalyzerId } from './model/AnalyzerId';
import { AnalyzerName } from './model/AnalyzerName';
import { AnalyzerSummary } from './model/AnalyzerSummary';
import { AnalyzerType } from './model/AnalyzerType';
import { AnalyzerUrn } from './model/AnalyzerUrn';
import { ApplyArchiveRuleRequest } from './model/ApplyArchiveRuleRequest';
import { ApplyArchiveRuleResponse } from './model/ApplyArchiveRuleResponse';
import { ArchiveRuleId } from './model/ArchiveRuleId';
import { ArchiveRuleName } from './model/ArchiveRuleName';
import { ArchiveRuleSummary } from './model/ArchiveRuleSummary';
import { ArchiveRuleUrn } from './model/ArchiveRuleUrn';
import { CheckNoNewAccessReason } from './model/CheckNoNewAccessReason';
import { CheckNoNewAccessReqBody } from './model/CheckNoNewAccessReqBody';
import { CheckNoNewAccessRequest } from './model/CheckNoNewAccessRequest';
import { CheckNoNewAccessResponse } from './model/CheckNoNewAccessResponse';
import { Configuration } from './model/Configuration';
import { CreateAccessPreviewReqBody } from './model/CreateAccessPreviewReqBody';
import { CreateAccessPreviewRequest } from './model/CreateAccessPreviewRequest';
import { CreateAccessPreviewResponse } from './model/CreateAccessPreviewResponse';
import { CreateAnalyzerReqBody } from './model/CreateAnalyzerReqBody';
import { CreateAnalyzerRequest } from './model/CreateAnalyzerRequest';
import { CreateAnalyzerResponse } from './model/CreateAnalyzerResponse';
import { CreateArchiveRuleReqBody } from './model/CreateArchiveRuleReqBody';
import { CreateArchiveRuleRequest } from './model/CreateArchiveRuleRequest';
import { CreateArchiveRuleResponse } from './model/CreateArchiveRuleResponse';
import { CreateNotificationSettingReqBody } from './model/CreateNotificationSettingReqBody';
import { CreateNotificationSettingRequest } from './model/CreateNotificationSettingRequest';
import { CreateNotificationSettingResponse } from './model/CreateNotificationSettingResponse';
import { CreateResourceConfigurationsReqBody } from './model/CreateResourceConfigurationsReqBody';
import { CreateResourceConfigurationsRequest } from './model/CreateResourceConfigurationsRequest';
import { CreateResourceConfigurationsResponse } from './model/CreateResourceConfigurationsResponse';
import { Criterion } from './model/Criterion';
import { CurrentCount } from './model/CurrentCount';
import { DeleteAnalyzerRequest } from './model/DeleteAnalyzerRequest';
import { DeleteAnalyzerResponse } from './model/DeleteAnalyzerResponse';
import { DeleteArchiveRuleRequest } from './model/DeleteArchiveRuleRequest';
import { DeleteArchiveRuleResponse } from './model/DeleteArchiveRuleResponse';
import { DeleteNotificationSettingRequest } from './model/DeleteNotificationSettingRequest';
import { DeleteNotificationSettingResponse } from './model/DeleteNotificationSettingResponse';
import { DeleteResourceConfigurationReqBody } from './model/DeleteResourceConfigurationReqBody';
import { DeleteResourceConfigurationsRequest } from './model/DeleteResourceConfigurationsRequest';
import { DeleteResourceConfigurationsResponse } from './model/DeleteResourceConfigurationsResponse';
import { ExternalAccessDetails } from './model/ExternalAccessDetails';
import { Finding } from './model/Finding';
import { FindingCondition } from './model/FindingCondition';
import { FindingDetails } from './model/FindingDetails';
import { FindingFilter } from './model/FindingFilter';
import { FindingId } from './model/FindingId';
import { FindingPrincipal } from './model/FindingPrincipal';
import { FindingSourceType } from './model/FindingSourceType';
import { FindingSummary } from './model/FindingSummary';
import { FindingType } from './model/FindingType';
import { IAMAgency } from './model/IAMAgency';
import { IamBpAccessApiWithPasswordDetails } from './model/IamBpAccessApiWithPasswordDetails';
import { IamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails } from './model/IamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails';
import { IamBpAssignHighRiskSysPolicyOrRoleToUserDetails } from './model/IamBpAssignHighRiskSysPolicyOrRoleToUserDetails';
import { IamBpAttachHighRiskSysIdentityPolicyToAgencyDetails } from './model/IamBpAttachHighRiskSysIdentityPolicyToAgencyDetails';
import { IamBpAttachHighRiskSysIdentityPolicyToUserDetails } from './model/IamBpAttachHighRiskSysIdentityPolicyToUserDetails';
import { IamBpLoginProtectionDisabledDetails } from './model/IamBpLoginProtectionDisabledDetails';
import { IamBpMfaUnconfiguredDetails } from './model/IamBpMfaUnconfiguredDetails';
import { IamBpRootUserHasAccessKeyDetails } from './model/IamBpRootUserHasAccessKeyDetails';
import { KMSCmk } from './model/KMSCmk';
import { LastAnalyzedResourceUrn } from './model/LastAnalyzedResourceUrn';
import { Limit } from './model/Limit';
import { ListAccessPreviewFindingsRequest } from './model/ListAccessPreviewFindingsRequest';
import { ListAccessPreviewFindingsResponse } from './model/ListAccessPreviewFindingsResponse';
import { ListAccessPreviewsRequest } from './model/ListAccessPreviewsRequest';
import { ListAccessPreviewsResponse } from './model/ListAccessPreviewsResponse';
import { ListAnalyzersRequest } from './model/ListAnalyzersRequest';
import { ListAnalyzersResponse } from './model/ListAnalyzersResponse';
import { ListArchiveRulesRequest } from './model/ListArchiveRulesRequest';
import { ListArchiveRulesResponse } from './model/ListArchiveRulesResponse';
import { ListFindingsReqBody } from './model/ListFindingsReqBody';
import { ListFindingsRequest } from './model/ListFindingsRequest';
import { ListFindingsResponse } from './model/ListFindingsResponse';
import { ListNotificationSettingsRequest } from './model/ListNotificationSettingsRequest';
import { ListNotificationSettingsResponse } from './model/ListNotificationSettingsResponse';
import { ListPreviewFindingsReqBody } from './model/ListPreviewFindingsReqBody';
import { ListResourceConfigurationsRequest } from './model/ListResourceConfigurationsRequest';
import { ListResourceConfigurationsResponse } from './model/ListResourceConfigurationsResponse';
import { Location } from './model/Location';
import { Marker } from './model/Marker';
import { NextMarker } from './model/NextMarker';
import { NotificationSettingId } from './model/NotificationSettingId';
import { NotificationSettingSummary } from './model/NotificationSettingSummary';
import { NotificationSettingUrn } from './model/NotificationSettingUrn';
import { OBSBucket } from './model/OBSBucket';
import { OrganizationId } from './model/OrganizationId';
import { PageInfo } from './model/PageInfo';
import { PathElement } from './model/PathElement';
import { PolicyDocument } from './model/PolicyDocument';
import { PolicyDocumentType } from './model/PolicyDocumentType';
import { PolicyType } from './model/PolicyType';
import { Position } from './model/Position';
import { PreviewFinding } from './model/PreviewFinding';
import { PreviewStatusReason } from './model/PreviewStatusReason';
import { PrivilegeEscalationDetails } from './model/PrivilegeEscalationDetails';
import { PrivilegeEscalationStep } from './model/PrivilegeEscalationStep';
import { ResourceConfiguration } from './model/ResourceConfiguration';
import { ResourceOwnerAccount } from './model/ResourceOwnerAccount';
import { ResourceType } from './model/ResourceType';
import { ResourceUrn } from './model/ResourceUrn';
import { ShowAccessPreviewRequest } from './model/ShowAccessPreviewRequest';
import { ShowAccessPreviewResponse } from './model/ShowAccessPreviewResponse';
import { ShowAnalyzerRequest } from './model/ShowAnalyzerRequest';
import { ShowAnalyzerResponse } from './model/ShowAnalyzerResponse';
import { ShowArchiveRuleRequest } from './model/ShowArchiveRuleRequest';
import { ShowArchiveRuleResponse } from './model/ShowArchiveRuleResponse';
import { ShowFindingRequest } from './model/ShowFindingRequest';
import { ShowFindingResponse } from './model/ShowFindingResponse';
import { ShowNotificationSettingRequest } from './model/ShowNotificationSettingRequest';
import { ShowNotificationSettingResponse } from './model/ShowNotificationSettingResponse';
import { Span } from './model/Span';
import { StartResourceScanReqBody } from './model/StartResourceScanReqBody';
import { StartResourceScanRequest } from './model/StartResourceScanRequest';
import { StartResourceScanResponse } from './model/StartResourceScanResponse';
import { StatusReason } from './model/StatusReason';
import { Substring } from './model/Substring';
import { Tag } from './model/Tag';
import { TagKey } from './model/TagKey';
import { TagResourceReqBody } from './model/TagResourceReqBody';
import { TagResourceRequest } from './model/TagResourceRequest';
import { TagResourceResponse } from './model/TagResourceResponse';
import { TagValue } from './model/TagValue';
import { UntagResourceReqBody } from './model/UntagResourceReqBody';
import { UntagResourceRequest } from './model/UntagResourceRequest';
import { UntagResourceResponse } from './model/UntagResourceResponse';
import { UnusedAction } from './model/UnusedAction';
import { UnusedAnalysisRule } from './model/UnusedAnalysisRule';
import { UnusedAnalysisRuleCriteria } from './model/UnusedAnalysisRuleCriteria';
import { UnusedIamAgencyDetails } from './model/UnusedIamAgencyDetails';
import { UnusedIamUserAccessKeyDetails } from './model/UnusedIamUserAccessKeyDetails';
import { UnusedIamUserPasswordDetails } from './model/UnusedIamUserPasswordDetails';
import { UnusedPermissionDetails } from './model/UnusedPermissionDetails';
import { UpdateAnalyzerReqBody } from './model/UpdateAnalyzerReqBody';
import { UpdateAnalyzerRequest } from './model/UpdateAnalyzerRequest';
import { UpdateAnalyzerResponse } from './model/UpdateAnalyzerResponse';
import { UpdateArchiveRuleReqBody } from './model/UpdateArchiveRuleReqBody';
import { UpdateArchiveRuleRequest } from './model/UpdateArchiveRuleRequest';
import { UpdateArchiveRuleResponse } from './model/UpdateArchiveRuleResponse';
import { UpdateFindingsReqBody } from './model/UpdateFindingsReqBody';
import { UpdateFindingsRequest } from './model/UpdateFindingsRequest';
import { UpdateFindingsResponse } from './model/UpdateFindingsResponse';
import { UpdateNotificationSettingReqBody } from './model/UpdateNotificationSettingReqBody';
import { UpdateNotificationSettingRequest } from './model/UpdateNotificationSettingRequest';
import { UpdateNotificationSettingResponse } from './model/UpdateNotificationSettingResponse';
import { ValidatePolicyFinding } from './model/ValidatePolicyFinding';
import { ValidatePolicyReqBody } from './model/ValidatePolicyReqBody';
import { ValidatePolicyRequest } from './model/ValidatePolicyRequest';
import { ValidatePolicyResourceType } from './model/ValidatePolicyResourceType';
import { ValidatePolicyResponse } from './model/ValidatePolicyResponse';

export class IAMAccessAnalyzerClient {
    public static newBuilder(): ClientBuilder<IAMAccessAnalyzerClient> {
            let client = new ClientBuilder<IAMAccessAnalyzerClient>(newClient);
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
     * 为您的账号或者组织创建分析器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建分析器
     * @param {CreateAnalyzerReqBody} createAnalyzerReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAnalyzer(createAnalyzerRequest?: CreateAnalyzerRequest): Promise<CreateAnalyzerResponse> {
        const options = ParamCreater().createAnalyzer(createAnalyzerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的分析器。分析器生成的所有检查结果都将被删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定的分析器
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAnalyzer(deleteAnalyzerRequest?: DeleteAnalyzerRequest): Promise<DeleteAnalyzerResponse> {
        const options = ParamCreater().deleteAnalyzer(deleteAnalyzerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索分析器的列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索分析器的列表
     * @param {number} [limit] 单页最大结果数。
     * @param {string} [marker] 页面标记。
     * @param {'account' | 'organization' | 'account_unused_access' | 'organization_unused_access' | 'account_privilege_escalation' | 'account_iam_best_practice'} [type] 分析器的类型。 - account：账号级外部访问分析器 - organization：组织级外部访问分析器 - account_unused_access：账号级未使用访问分析器 - organization_unused_access：组织级未使用访问分析器 - account_privilege_escalation：账号级提权访问分析器 - account_iam_best_practice：账号级IAM最佳实践分析器 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAnalyzers(listAnalyzersRequest?: ListAnalyzersRequest): Promise<ListAnalyzersResponse> {
        const options = ParamCreater().listAnalyzers(listAnalyzersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索有关指定分析器的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 显示指定的分析器
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAnalyzer(showAnalyzerRequest?: ShowAnalyzerRequest): Promise<ShowAnalyzerResponse> {
        const options = ParamCreater().showAnalyzer(showAnalyzerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 立即开始扫描应用于指定资源的策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 立即开始扫描应用于指定资源的策略
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {StartResourceScanReqBody} startResourceScanReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startResourceScan(startResourceScanRequest?: StartResourceScanRequest): Promise<StartResourceScanResponse> {
        const options = ParamCreater().startResourceScan(startResourceScanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定分析器的配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定分析器的配置
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {UpdateAnalyzerReqBody} updateAnalyzerReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAnalyzer(updateAnalyzerRequest?: UpdateAnalyzerRequest): Promise<UpdateAnalyzerResponse> {
        const options = ParamCreater().updateAnalyzer(updateAnalyzerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 以追溯方式将存档规则应用于符合存档规则条件的现有结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用存档规则
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {string} archiveRuleId 存档规则的唯一标识符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applyArchiveRule(applyArchiveRuleRequest?: ApplyArchiveRuleRequest): Promise<ApplyArchiveRuleResponse> {
        const options = ParamCreater().applyArchiveRule(applyArchiveRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定的分析器创建存档规则。存档规则会自动存档符合您在创建规则时所定义条件的新结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定的分析器创建存档规则
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {CreateArchiveRuleReqBody} createArchiveRuleReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createArchiveRule(createArchiveRuleRequest?: CreateArchiveRuleRequest): Promise<CreateArchiveRuleResponse> {
        const options = ParamCreater().createArchiveRule(createArchiveRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的存档规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定的存档规则
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {string} archiveRuleId 存档规则的唯一标识符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteArchiveRule(deleteArchiveRuleRequest?: DeleteArchiveRuleRequest): Promise<DeleteArchiveRuleResponse> {
        const options = ParamCreater().deleteArchiveRule(deleteArchiveRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索为指定分析器创建的存档规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索为指定分析器创建的存档规则的列表
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {number} [limit] 单页最大结果数。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listArchiveRules(listArchiveRulesRequest?: ListArchiveRulesRequest): Promise<ListArchiveRulesResponse> {
        const options = ParamCreater().listArchiveRules(listArchiveRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索有关存档规则的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索有关存档规则的信息
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {string} archiveRuleId 存档规则的唯一标识符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showArchiveRule(showArchiveRuleRequest?: ShowArchiveRuleRequest): Promise<ShowArchiveRuleResponse> {
        const options = ParamCreater().showArchiveRule(showArchiveRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定存档规则的条件和值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定存档规则的条件和值
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {string} archiveRuleId 存档规则的唯一标识符。
     * @param {UpdateArchiveRuleReqBody} updateArchiveRuleReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateArchiveRule(updateArchiveRuleRequest?: UpdateArchiveRuleRequest): Promise<UpdateArchiveRuleResponse> {
        const options = ParamCreater().updateArchiveRule(updateArchiveRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建指定分析器的资源分析配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源分析配置
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {CreateResourceConfigurationsReqBody} createResourceConfigurationsReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createResourceConfigurations(createResourceConfigurationsRequest?: CreateResourceConfigurationsRequest): Promise<CreateResourceConfigurationsResponse> {
        const options = ParamCreater().createResourceConfigurations(createResourceConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定分析器的资源分析配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源分析配置
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {DeleteResourceConfigurationReqBody} deleteResourceConfigurationReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResourceConfigurations(deleteResourceConfigurationsRequest?: DeleteResourceConfigurationsRequest): Promise<DeleteResourceConfigurationsResponse> {
        const options = ParamCreater().deleteResourceConfigurations(deleteResourceConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举指定分析器的资源分析配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源分析配置
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {number} [limit] 单页最大结果数。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceConfigurations(listResourceConfigurationsRequest?: ListResourceConfigurationsRequest): Promise<ListResourceConfigurationsResponse> {
        const options = ParamCreater().listResourceConfigurations(listResourceConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索指定分析器生成的访问分析结果列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索指定分析器生成的访问分析结果列表
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {ListFindingsReqBody} listFindingsReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFindings(listFindingsRequest?: ListFindingsRequest): Promise<ListFindingsResponse> {
        const options = ParamCreater().listFindings(listFindingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索有关指定结果的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索有关指定结果的信息
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {string} findingId 访问分析结果的唯一标识符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFinding(showFindingRequest?: ShowFindingRequest): Promise<ShowFindingResponse> {
        const options = ParamCreater().showFinding(showFindingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定访问分析结果的状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定结果的状态
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {UpdateFindingsReqBody} updateFindingsReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFindings(updateFindingsRequest?: UpdateFindingsRequest): Promise<UpdateFindingsResponse> {
        const options = ParamCreater().updateFindings(updateFindingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建消息通知配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建消息通知配置
     * @param {CreateNotificationSettingReqBody} createNotificationSettingReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNotificationSetting(createNotificationSettingRequest?: CreateNotificationSettingRequest): Promise<CreateNotificationSettingResponse> {
        const options = ParamCreater().createNotificationSetting(createNotificationSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除消息通知配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除消息通知配置
     * @param {string} notificationSettingId 消息通知配置的唯一标识符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNotificationSetting(deleteNotificationSettingRequest?: DeleteNotificationSettingRequest): Promise<DeleteNotificationSettingResponse> {
        const options = ParamCreater().deleteNotificationSetting(deleteNotificationSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取消息通知配置列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取消息通知配置列表
     * @param {number} [limit] 单页最大结果数。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNotificationSettings(listNotificationSettingsRequest?: ListNotificationSettingsRequest): Promise<ListNotificationSettingsResponse> {
        const options = ParamCreater().listNotificationSettings(listNotificationSettingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取消息通知配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取消息通知配置
     * @param {string} notificationSettingId 消息通知配置的唯一标识符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNotificationSetting(showNotificationSettingRequest?: ShowNotificationSettingRequest): Promise<ShowNotificationSettingResponse> {
        const options = ParamCreater().showNotificationSetting(showNotificationSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新消息通知配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新消息通知配置
     * @param {string} notificationSettingId 消息通知配置的唯一标识符。
     * @param {UpdateNotificationSettingReqBody} updateNotificationSettingReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNotificationSetting(updateNotificationSettingRequest?: UpdateNotificationSettingRequest): Promise<UpdateNotificationSettingResponse> {
        const options = ParamCreater().updateNotificationSetting(updateNotificationSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建访问预览。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建访问预览
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {CreateAccessPreviewReqBody} createAccessPreviewReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAccessPreview(createAccessPreviewRequest?: CreateAccessPreviewRequest): Promise<CreateAccessPreviewResponse> {
        const options = ParamCreater().createAccessPreview(createAccessPreviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取相关预览生成的分析结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取相关预览生成的分析结果
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {string} accessPreviewId 访问预览的唯一标识符。
     * @param {ListPreviewFindingsReqBody} listPreviewFindingsReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccessPreviewFindings(listAccessPreviewFindingsRequest?: ListAccessPreviewFindingsRequest): Promise<ListAccessPreviewFindingsResponse> {
        const options = ParamCreater().listAccessPreviewFindings(listAccessPreviewFindingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取所有访问预览。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取所有访问预览
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {number} [limit] 单页最大结果数。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccessPreviews(listAccessPreviewsRequest?: ListAccessPreviewsRequest): Promise<ListAccessPreviewsResponse> {
        const options = ParamCreater().listAccessPreviews(listAccessPreviewsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取相关访问预览的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取相关访问预览的信息
     * @param {string} analyzerId 分析器的唯一标识符。
     * @param {string} accessPreviewId 访问预览的唯一标识符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAccessPreview(showAccessPreviewRequest?: ShowAccessPreviewRequest): Promise<ShowAccessPreviewResponse> {
        const options = ParamCreater().showAccessPreview(showAccessPreviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 向指定资源添加标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 向指定资源添加标签
     * @param {'analyzers'} resourceType 资源类型。 - analyzers：分析器 
     * @param {string} resourceId 资源的唯一标识符。
     * @param {TagResourceReqBody} tagResourceReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public tagResource(tagResourceRequest?: TagResourceRequest): Promise<TagResourceResponse> {
        const options = ParamCreater().tagResource(tagResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从指定资源中删除标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从指定资源中删除标签
     * @param {'analyzers'} resourceType 资源类型。 - analyzers：分析器 
     * @param {string} resourceId 资源的唯一标识符。
     * @param {UntagResourceReqBody} untagResourceReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public untagResource(untagResourceRequest?: UntagResourceRequest): Promise<UntagResourceResponse> {
        const options = ParamCreater().untagResource(untagResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验策略是否有新访问权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验策略是否有新访问权限
     * @param {CheckNoNewAccessReqBody} checkNoNewAccessReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkNoNewAccess(checkNoNewAccessRequest?: CheckNoNewAccessRequest): Promise<CheckNoNewAccessResponse> {
        const options = ParamCreater().checkNoNewAccess(checkNoNewAccessRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验策略并返回结果列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验策略
     * @param {ValidatePolicyReqBody} validatePolicyReqBody 
     * @param {number} [limit] 单页最大结果数。
     * @param {string} [marker] 页面标记。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 返回消息的语言，默认值为\&#39;zh-cn\&#39;。 - zh-cn：中文 - en-us：英文 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validatePolicy(validatePolicyRequest?: ValidatePolicyRequest): Promise<ValidatePolicyResponse> {
        const options = ParamCreater().validatePolicy(validatePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 为您的账号或者组织创建分析器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAnalyzer(createAnalyzerRequest?: CreateAnalyzerRequest) {
            const options = {
                method: "POST",
                url: "/v5/analyzers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAnalyzerRequest !== null && createAnalyzerRequest !== undefined) {
                if (createAnalyzerRequest instanceof CreateAnalyzerRequest) {
                    body = createAnalyzerRequest.body
                } else {
                    body = createAnalyzerRequest['body'];
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
         * 删除指定的分析器。分析器生成的所有检查结果都将被删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAnalyzer(deleteAnalyzerRequest?: DeleteAnalyzerRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/analyzers/{analyzer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let analyzerId;

            if (deleteAnalyzerRequest !== null && deleteAnalyzerRequest !== undefined) {
                if (deleteAnalyzerRequest instanceof DeleteAnalyzerRequest) {
                    analyzerId = deleteAnalyzerRequest.analyzerId;
                } else {
                    analyzerId = deleteAnalyzerRequest['analyzer_id'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling deleteAnalyzer.');
            }

            options.pathParams = { 'analyzer_id': analyzerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索分析器的列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAnalyzers(listAnalyzersRequest?: ListAnalyzersRequest) {
            const options = {
                method: "GET",
                url: "/v5/analyzers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let type;

            if (listAnalyzersRequest !== null && listAnalyzersRequest !== undefined) {
                if (listAnalyzersRequest instanceof ListAnalyzersRequest) {
                    limit = listAnalyzersRequest.limit;
                    marker = listAnalyzersRequest.marker;
                    type = listAnalyzersRequest.type;
                } else {
                    limit = listAnalyzersRequest['limit'];
                    marker = listAnalyzersRequest['marker'];
                    type = listAnalyzersRequest['type'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索有关指定分析器的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAnalyzer(showAnalyzerRequest?: ShowAnalyzerRequest) {
            const options = {
                method: "GET",
                url: "/v5/analyzers/{analyzer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let analyzerId;

            if (showAnalyzerRequest !== null && showAnalyzerRequest !== undefined) {
                if (showAnalyzerRequest instanceof ShowAnalyzerRequest) {
                    analyzerId = showAnalyzerRequest.analyzerId;
                } else {
                    analyzerId = showAnalyzerRequest['analyzer_id'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling showAnalyzer.');
            }

            options.pathParams = { 'analyzer_id': analyzerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 立即开始扫描应用于指定资源的策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startResourceScan(startResourceScanRequest?: StartResourceScanRequest) {
            const options = {
                method: "POST",
                url: "/v5/analyzers/{analyzer_id}/scan",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let analyzerId;

            if (startResourceScanRequest !== null && startResourceScanRequest !== undefined) {
                if (startResourceScanRequest instanceof StartResourceScanRequest) {
                    analyzerId = startResourceScanRequest.analyzerId;
                    body = startResourceScanRequest.body
                } else {
                    analyzerId = startResourceScanRequest['analyzer_id'];
                    body = startResourceScanRequest['body'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling startResourceScan.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'analyzer_id': analyzerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定分析器的配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAnalyzer(updateAnalyzerRequest?: UpdateAnalyzerRequest) {
            const options = {
                method: "PUT",
                url: "/v5/analyzers/{analyzer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let analyzerId;

            if (updateAnalyzerRequest !== null && updateAnalyzerRequest !== undefined) {
                if (updateAnalyzerRequest instanceof UpdateAnalyzerRequest) {
                    analyzerId = updateAnalyzerRequest.analyzerId;
                    body = updateAnalyzerRequest.body
                } else {
                    analyzerId = updateAnalyzerRequest['analyzer_id'];
                    body = updateAnalyzerRequest['body'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling updateAnalyzer.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'analyzer_id': analyzerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 以追溯方式将存档规则应用于符合存档规则条件的现有结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        applyArchiveRule(applyArchiveRuleRequest?: ApplyArchiveRuleRequest) {
            const options = {
                method: "POST",
                url: "/v5/analyzers/{analyzer_id}/archive-rules/{archive_rule_id}/apply",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let analyzerId;
            
            let archiveRuleId;

            if (applyArchiveRuleRequest !== null && applyArchiveRuleRequest !== undefined) {
                if (applyArchiveRuleRequest instanceof ApplyArchiveRuleRequest) {
                    analyzerId = applyArchiveRuleRequest.analyzerId;
                    archiveRuleId = applyArchiveRuleRequest.archiveRuleId;
                } else {
                    analyzerId = applyArchiveRuleRequest['analyzer_id'];
                    archiveRuleId = applyArchiveRuleRequest['archive_rule_id'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling applyArchiveRule.');
            }
            if (archiveRuleId === null || archiveRuleId === undefined) {
            throw new RequiredError('archiveRuleId','Required parameter archiveRuleId was null or undefined when calling applyArchiveRule.');
            }

            options.pathParams = { 'analyzer_id': analyzerId,'archive_rule_id': archiveRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定的分析器创建存档规则。存档规则会自动存档符合您在创建规则时所定义条件的新结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createArchiveRule(createArchiveRuleRequest?: CreateArchiveRuleRequest) {
            const options = {
                method: "POST",
                url: "/v5/analyzers/{analyzer_id}/archive-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let analyzerId;

            if (createArchiveRuleRequest !== null && createArchiveRuleRequest !== undefined) {
                if (createArchiveRuleRequest instanceof CreateArchiveRuleRequest) {
                    analyzerId = createArchiveRuleRequest.analyzerId;
                    body = createArchiveRuleRequest.body
                } else {
                    analyzerId = createArchiveRuleRequest['analyzer_id'];
                    body = createArchiveRuleRequest['body'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling createArchiveRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'analyzer_id': analyzerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的存档规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteArchiveRule(deleteArchiveRuleRequest?: DeleteArchiveRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/analyzers/{analyzer_id}/archive-rules/{archive_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let analyzerId;
            
            let archiveRuleId;

            if (deleteArchiveRuleRequest !== null && deleteArchiveRuleRequest !== undefined) {
                if (deleteArchiveRuleRequest instanceof DeleteArchiveRuleRequest) {
                    analyzerId = deleteArchiveRuleRequest.analyzerId;
                    archiveRuleId = deleteArchiveRuleRequest.archiveRuleId;
                } else {
                    analyzerId = deleteArchiveRuleRequest['analyzer_id'];
                    archiveRuleId = deleteArchiveRuleRequest['archive_rule_id'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling deleteArchiveRule.');
            }
            if (archiveRuleId === null || archiveRuleId === undefined) {
            throw new RequiredError('archiveRuleId','Required parameter archiveRuleId was null or undefined when calling deleteArchiveRule.');
            }

            options.pathParams = { 'analyzer_id': analyzerId,'archive_rule_id': archiveRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索为指定分析器创建的存档规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listArchiveRules(listArchiveRulesRequest?: ListArchiveRulesRequest) {
            const options = {
                method: "GET",
                url: "/v5/analyzers/{analyzer_id}/archive-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let analyzerId;
            
            let limit;
            
            let marker;

            if (listArchiveRulesRequest !== null && listArchiveRulesRequest !== undefined) {
                if (listArchiveRulesRequest instanceof ListArchiveRulesRequest) {
                    analyzerId = listArchiveRulesRequest.analyzerId;
                    limit = listArchiveRulesRequest.limit;
                    marker = listArchiveRulesRequest.marker;
                } else {
                    analyzerId = listArchiveRulesRequest['analyzer_id'];
                    limit = listArchiveRulesRequest['limit'];
                    marker = listArchiveRulesRequest['marker'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling listArchiveRules.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'analyzer_id': analyzerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索有关存档规则的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showArchiveRule(showArchiveRuleRequest?: ShowArchiveRuleRequest) {
            const options = {
                method: "GET",
                url: "/v5/analyzers/{analyzer_id}/archive-rules/{archive_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let analyzerId;
            
            let archiveRuleId;

            if (showArchiveRuleRequest !== null && showArchiveRuleRequest !== undefined) {
                if (showArchiveRuleRequest instanceof ShowArchiveRuleRequest) {
                    analyzerId = showArchiveRuleRequest.analyzerId;
                    archiveRuleId = showArchiveRuleRequest.archiveRuleId;
                } else {
                    analyzerId = showArchiveRuleRequest['analyzer_id'];
                    archiveRuleId = showArchiveRuleRequest['archive_rule_id'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling showArchiveRule.');
            }
            if (archiveRuleId === null || archiveRuleId === undefined) {
            throw new RequiredError('archiveRuleId','Required parameter archiveRuleId was null or undefined when calling showArchiveRule.');
            }

            options.pathParams = { 'analyzer_id': analyzerId,'archive_rule_id': archiveRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定存档规则的条件和值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateArchiveRule(updateArchiveRuleRequest?: UpdateArchiveRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v5/analyzers/{analyzer_id}/archive-rules/{archive_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let analyzerId;
            
            let archiveRuleId;

            if (updateArchiveRuleRequest !== null && updateArchiveRuleRequest !== undefined) {
                if (updateArchiveRuleRequest instanceof UpdateArchiveRuleRequest) {
                    analyzerId = updateArchiveRuleRequest.analyzerId;
                    archiveRuleId = updateArchiveRuleRequest.archiveRuleId;
                    body = updateArchiveRuleRequest.body
                } else {
                    analyzerId = updateArchiveRuleRequest['analyzer_id'];
                    archiveRuleId = updateArchiveRuleRequest['archive_rule_id'];
                    body = updateArchiveRuleRequest['body'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling updateArchiveRule.');
            }
            if (archiveRuleId === null || archiveRuleId === undefined) {
            throw new RequiredError('archiveRuleId','Required parameter archiveRuleId was null or undefined when calling updateArchiveRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'analyzer_id': analyzerId,'archive_rule_id': archiveRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建指定分析器的资源分析配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createResourceConfigurations(createResourceConfigurationsRequest?: CreateResourceConfigurationsRequest) {
            const options = {
                method: "POST",
                url: "/v5/analyzers/{analyzer_id}/resource-configurations/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let analyzerId;

            if (createResourceConfigurationsRequest !== null && createResourceConfigurationsRequest !== undefined) {
                if (createResourceConfigurationsRequest instanceof CreateResourceConfigurationsRequest) {
                    analyzerId = createResourceConfigurationsRequest.analyzerId;
                    body = createResourceConfigurationsRequest.body
                } else {
                    analyzerId = createResourceConfigurationsRequest['analyzer_id'];
                    body = createResourceConfigurationsRequest['body'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling createResourceConfigurations.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'analyzer_id': analyzerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定分析器的资源分析配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResourceConfigurations(deleteResourceConfigurationsRequest?: DeleteResourceConfigurationsRequest) {
            const options = {
                method: "POST",
                url: "/v5/analyzers/{analyzer_id}/resource-configurations/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let analyzerId;

            if (deleteResourceConfigurationsRequest !== null && deleteResourceConfigurationsRequest !== undefined) {
                if (deleteResourceConfigurationsRequest instanceof DeleteResourceConfigurationsRequest) {
                    analyzerId = deleteResourceConfigurationsRequest.analyzerId;
                    body = deleteResourceConfigurationsRequest.body
                } else {
                    analyzerId = deleteResourceConfigurationsRequest['analyzer_id'];
                    body = deleteResourceConfigurationsRequest['body'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling deleteResourceConfigurations.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'analyzer_id': analyzerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举指定分析器的资源分析配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceConfigurations(listResourceConfigurationsRequest?: ListResourceConfigurationsRequest) {
            const options = {
                method: "GET",
                url: "/v5/analyzers/{analyzer_id}/resource-configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let analyzerId;
            
            let limit;
            
            let marker;

            if (listResourceConfigurationsRequest !== null && listResourceConfigurationsRequest !== undefined) {
                if (listResourceConfigurationsRequest instanceof ListResourceConfigurationsRequest) {
                    analyzerId = listResourceConfigurationsRequest.analyzerId;
                    limit = listResourceConfigurationsRequest.limit;
                    marker = listResourceConfigurationsRequest.marker;
                } else {
                    analyzerId = listResourceConfigurationsRequest['analyzer_id'];
                    limit = listResourceConfigurationsRequest['limit'];
                    marker = listResourceConfigurationsRequest['marker'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling listResourceConfigurations.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'analyzer_id': analyzerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索指定分析器生成的访问分析结果列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFindings(listFindingsRequest?: ListFindingsRequest) {
            const options = {
                method: "POST",
                url: "/v5/analyzers/{analyzer_id}/findings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let analyzerId;

            if (listFindingsRequest !== null && listFindingsRequest !== undefined) {
                if (listFindingsRequest instanceof ListFindingsRequest) {
                    analyzerId = listFindingsRequest.analyzerId;
                    body = listFindingsRequest.body
                } else {
                    analyzerId = listFindingsRequest['analyzer_id'];
                    body = listFindingsRequest['body'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling listFindings.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'analyzer_id': analyzerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索有关指定结果的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFinding(showFindingRequest?: ShowFindingRequest) {
            const options = {
                method: "GET",
                url: "/v5/analyzers/{analyzer_id}/findings/{finding_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let analyzerId;
            
            let findingId;

            if (showFindingRequest !== null && showFindingRequest !== undefined) {
                if (showFindingRequest instanceof ShowFindingRequest) {
                    analyzerId = showFindingRequest.analyzerId;
                    findingId = showFindingRequest.findingId;
                } else {
                    analyzerId = showFindingRequest['analyzer_id'];
                    findingId = showFindingRequest['finding_id'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling showFinding.');
            }
            if (findingId === null || findingId === undefined) {
            throw new RequiredError('findingId','Required parameter findingId was null or undefined when calling showFinding.');
            }

            options.pathParams = { 'analyzer_id': analyzerId,'finding_id': findingId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定访问分析结果的状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFindings(updateFindingsRequest?: UpdateFindingsRequest) {
            const options = {
                method: "PUT",
                url: "/v5/analyzers/{analyzer_id}/findings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let analyzerId;

            if (updateFindingsRequest !== null && updateFindingsRequest !== undefined) {
                if (updateFindingsRequest instanceof UpdateFindingsRequest) {
                    analyzerId = updateFindingsRequest.analyzerId;
                    body = updateFindingsRequest.body
                } else {
                    analyzerId = updateFindingsRequest['analyzer_id'];
                    body = updateFindingsRequest['body'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling updateFindings.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'analyzer_id': analyzerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建消息通知配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNotificationSetting(createNotificationSettingRequest?: CreateNotificationSettingRequest) {
            const options = {
                method: "POST",
                url: "/v5/notification-settings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createNotificationSettingRequest !== null && createNotificationSettingRequest !== undefined) {
                if (createNotificationSettingRequest instanceof CreateNotificationSettingRequest) {
                    body = createNotificationSettingRequest.body
                } else {
                    body = createNotificationSettingRequest['body'];
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
         * 删除消息通知配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNotificationSetting(deleteNotificationSettingRequest?: DeleteNotificationSettingRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/notification-settings/{notification_setting_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let notificationSettingId;

            if (deleteNotificationSettingRequest !== null && deleteNotificationSettingRequest !== undefined) {
                if (deleteNotificationSettingRequest instanceof DeleteNotificationSettingRequest) {
                    notificationSettingId = deleteNotificationSettingRequest.notificationSettingId;
                } else {
                    notificationSettingId = deleteNotificationSettingRequest['notification_setting_id'];
                }
            }

        
            if (notificationSettingId === null || notificationSettingId === undefined) {
            throw new RequiredError('notificationSettingId','Required parameter notificationSettingId was null or undefined when calling deleteNotificationSetting.');
            }

            options.pathParams = { 'notification_setting_id': notificationSettingId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取消息通知配置列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNotificationSettings(listNotificationSettingsRequest?: ListNotificationSettingsRequest) {
            const options = {
                method: "GET",
                url: "/v5/notification-settings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listNotificationSettingsRequest !== null && listNotificationSettingsRequest !== undefined) {
                if (listNotificationSettingsRequest instanceof ListNotificationSettingsRequest) {
                    limit = listNotificationSettingsRequest.limit;
                    marker = listNotificationSettingsRequest.marker;
                } else {
                    limit = listNotificationSettingsRequest['limit'];
                    marker = listNotificationSettingsRequest['marker'];
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
         * 获取消息通知配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNotificationSetting(showNotificationSettingRequest?: ShowNotificationSettingRequest) {
            const options = {
                method: "GET",
                url: "/v5/notification-settings/{notification_setting_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let notificationSettingId;

            if (showNotificationSettingRequest !== null && showNotificationSettingRequest !== undefined) {
                if (showNotificationSettingRequest instanceof ShowNotificationSettingRequest) {
                    notificationSettingId = showNotificationSettingRequest.notificationSettingId;
                } else {
                    notificationSettingId = showNotificationSettingRequest['notification_setting_id'];
                }
            }

        
            if (notificationSettingId === null || notificationSettingId === undefined) {
            throw new RequiredError('notificationSettingId','Required parameter notificationSettingId was null or undefined when calling showNotificationSetting.');
            }

            options.pathParams = { 'notification_setting_id': notificationSettingId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新消息通知配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNotificationSetting(updateNotificationSettingRequest?: UpdateNotificationSettingRequest) {
            const options = {
                method: "PUT",
                url: "/v5/notification-settings/{notification_setting_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let notificationSettingId;

            if (updateNotificationSettingRequest !== null && updateNotificationSettingRequest !== undefined) {
                if (updateNotificationSettingRequest instanceof UpdateNotificationSettingRequest) {
                    notificationSettingId = updateNotificationSettingRequest.notificationSettingId;
                    body = updateNotificationSettingRequest.body
                } else {
                    notificationSettingId = updateNotificationSettingRequest['notification_setting_id'];
                    body = updateNotificationSettingRequest['body'];
                }
            }

        
            if (notificationSettingId === null || notificationSettingId === undefined) {
            throw new RequiredError('notificationSettingId','Required parameter notificationSettingId was null or undefined when calling updateNotificationSetting.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'notification_setting_id': notificationSettingId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建访问预览。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAccessPreview(createAccessPreviewRequest?: CreateAccessPreviewRequest) {
            const options = {
                method: "POST",
                url: "/v5/analyzers/{analyzer_id}/access-previews",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let analyzerId;

            if (createAccessPreviewRequest !== null && createAccessPreviewRequest !== undefined) {
                if (createAccessPreviewRequest instanceof CreateAccessPreviewRequest) {
                    analyzerId = createAccessPreviewRequest.analyzerId;
                    body = createAccessPreviewRequest.body
                } else {
                    analyzerId = createAccessPreviewRequest['analyzer_id'];
                    body = createAccessPreviewRequest['body'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling createAccessPreview.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'analyzer_id': analyzerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取相关预览生成的分析结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccessPreviewFindings(listAccessPreviewFindingsRequest?: ListAccessPreviewFindingsRequest) {
            const options = {
                method: "POST",
                url: "/v5/analyzers/{analyzer_id}/access-previews/{access_preview_id}/findings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let analyzerId;
            
            let accessPreviewId;

            if (listAccessPreviewFindingsRequest !== null && listAccessPreviewFindingsRequest !== undefined) {
                if (listAccessPreviewFindingsRequest instanceof ListAccessPreviewFindingsRequest) {
                    analyzerId = listAccessPreviewFindingsRequest.analyzerId;
                    accessPreviewId = listAccessPreviewFindingsRequest.accessPreviewId;
                    body = listAccessPreviewFindingsRequest.body
                } else {
                    analyzerId = listAccessPreviewFindingsRequest['analyzer_id'];
                    accessPreviewId = listAccessPreviewFindingsRequest['access_preview_id'];
                    body = listAccessPreviewFindingsRequest['body'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling listAccessPreviewFindings.');
            }
            if (accessPreviewId === null || accessPreviewId === undefined) {
            throw new RequiredError('accessPreviewId','Required parameter accessPreviewId was null or undefined when calling listAccessPreviewFindings.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'analyzer_id': analyzerId,'access_preview_id': accessPreviewId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取所有访问预览。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccessPreviews(listAccessPreviewsRequest?: ListAccessPreviewsRequest) {
            const options = {
                method: "GET",
                url: "/v5/analyzers/{analyzer_id}/access-previews",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let analyzerId;
            
            let limit;
            
            let marker;

            if (listAccessPreviewsRequest !== null && listAccessPreviewsRequest !== undefined) {
                if (listAccessPreviewsRequest instanceof ListAccessPreviewsRequest) {
                    analyzerId = listAccessPreviewsRequest.analyzerId;
                    limit = listAccessPreviewsRequest.limit;
                    marker = listAccessPreviewsRequest.marker;
                } else {
                    analyzerId = listAccessPreviewsRequest['analyzer_id'];
                    limit = listAccessPreviewsRequest['limit'];
                    marker = listAccessPreviewsRequest['marker'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling listAccessPreviews.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'analyzer_id': analyzerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取相关访问预览的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAccessPreview(showAccessPreviewRequest?: ShowAccessPreviewRequest) {
            const options = {
                method: "GET",
                url: "/v5/analyzers/{analyzer_id}/access-previews/{access_preview_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let analyzerId;
            
            let accessPreviewId;

            if (showAccessPreviewRequest !== null && showAccessPreviewRequest !== undefined) {
                if (showAccessPreviewRequest instanceof ShowAccessPreviewRequest) {
                    analyzerId = showAccessPreviewRequest.analyzerId;
                    accessPreviewId = showAccessPreviewRequest.accessPreviewId;
                } else {
                    analyzerId = showAccessPreviewRequest['analyzer_id'];
                    accessPreviewId = showAccessPreviewRequest['access_preview_id'];
                }
            }

        
            if (analyzerId === null || analyzerId === undefined) {
            throw new RequiredError('analyzerId','Required parameter analyzerId was null or undefined when calling showAccessPreview.');
            }
            if (accessPreviewId === null || accessPreviewId === undefined) {
            throw new RequiredError('accessPreviewId','Required parameter accessPreviewId was null or undefined when calling showAccessPreview.');
            }

            options.pathParams = { 'analyzer_id': analyzerId,'access_preview_id': accessPreviewId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 向指定资源添加标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        tagResource(tagResourceRequest?: TagResourceRequest) {
            const options = {
                method: "POST",
                url: "/v5/{resource_type}/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;

            if (tagResourceRequest !== null && tagResourceRequest !== undefined) {
                if (tagResourceRequest instanceof TagResourceRequest) {
                    resourceType = tagResourceRequest.resourceType;
                    resourceId = tagResourceRequest.resourceId;
                    body = tagResourceRequest.body
                } else {
                    resourceType = tagResourceRequest['resource_type'];
                    resourceId = tagResourceRequest['resource_id'];
                    body = tagResourceRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling tagResource.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling tagResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从指定资源中删除标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        untagResource(untagResourceRequest?: UntagResourceRequest) {
            const options = {
                method: "POST",
                url: "/v5/{resource_type}/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;

            if (untagResourceRequest !== null && untagResourceRequest !== undefined) {
                if (untagResourceRequest instanceof UntagResourceRequest) {
                    resourceType = untagResourceRequest.resourceType;
                    resourceId = untagResourceRequest.resourceId;
                    body = untagResourceRequest.body
                } else {
                    resourceType = untagResourceRequest['resource_type'];
                    resourceId = untagResourceRequest['resource_id'];
                    body = untagResourceRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling untagResource.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling untagResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 校验策略是否有新访问权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkNoNewAccess(checkNoNewAccessRequest?: CheckNoNewAccessRequest) {
            const options = {
                method: "POST",
                url: "/v5/policies/check-no-new-access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (checkNoNewAccessRequest !== null && checkNoNewAccessRequest !== undefined) {
                if (checkNoNewAccessRequest instanceof CheckNoNewAccessRequest) {
                    body = checkNoNewAccessRequest.body
                } else {
                    body = checkNoNewAccessRequest['body'];
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
         * 校验策略并返回结果列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validatePolicy(validatePolicyRequest?: ValidatePolicyRequest) {
            const options = {
                method: "POST",
                url: "/v5/policies/validate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let marker;
            
            let xLanguage;

            if (validatePolicyRequest !== null && validatePolicyRequest !== undefined) {
                if (validatePolicyRequest instanceof ValidatePolicyRequest) {
                    body = validatePolicyRequest.body
                    limit = validatePolicyRequest.limit;
                    marker = validatePolicyRequest.marker;
                    xLanguage = validatePolicyRequest.xLanguage;
                } else {
                    body = validatePolicyRequest['body'];
                    limit = validatePolicyRequest['limit'];
                    marker = validatePolicyRequest['marker'];
                    xLanguage = validatePolicyRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): IAMAccessAnalyzerClient {
    return new IAMAccessAnalyzerClient(client);
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