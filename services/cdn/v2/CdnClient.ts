import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessAreaFilter } from './model/AccessAreaFilter';
import { AccessControl } from './model/AccessControl';
import { AccessControlTask } from './model/AccessControlTask';
import { AccessControlUrls } from './model/AccessControlUrls';
import { AccountConfigModifyRequest } from './model/AccountConfigModifyRequest';
import { Actions } from './model/Actions';
import { ApplyDomainTemplateRequest } from './model/ApplyDomainTemplateRequest';
import { ApplyDomainTemplateResponse } from './model/ApplyDomainTemplateResponse';
import { ApplyRecord } from './model/ApplyRecord';
import { ApplyTmlDetail } from './model/ApplyTmlDetail';
import { BackSources } from './model/BackSources';
import { BanUrlList } from './model/BanUrlList';
import { BatchCopyConfigs } from './model/BatchCopyConfigs';
import { BatchCopyDRequestBody } from './model/BatchCopyDRequestBody';
import { BatchCopyDomainRequest } from './model/BatchCopyDomainRequest';
import { BatchCopyDomainResponse } from './model/BatchCopyDomainResponse';
import { BatchCopyErrorRsp } from './model/BatchCopyErrorRsp';
import { BatchCopyErrorRspError } from './model/BatchCopyErrorRspError';
import { BatchCopyResultVo } from './model/BatchCopyResultVo';
import { BatchDeleteTagsRequest } from './model/BatchDeleteTagsRequest';
import { BatchDeleteTagsResponse } from './model/BatchDeleteTagsResponse';
import { BatchUpdateRuleStatusRequest } from './model/BatchUpdateRuleStatusRequest';
import { BatchUpdateRuleStatusResponse } from './model/BatchUpdateRuleStatusResponse';
import { BatchUpdateRulesRequest } from './model/BatchUpdateRulesRequest';
import { BrowserCacheRules } from './model/BrowserCacheRules';
import { BrowserCacheRulesCondition } from './model/BrowserCacheRulesCondition';
import { BrowserCacheRulesEngine } from './model/BrowserCacheRulesEngine';
import { CacheRules } from './model/CacheRules';
import { CacheRulesEngine } from './model/CacheRulesEngine';
import { CacheUrlParameterFilter } from './model/CacheUrlParameterFilter';
import { CacheUrlParameterFilterGetBody } from './model/CacheUrlParameterFilterGetBody';
import { CdnIps } from './model/CdnIps';
import { CertificatesGetBody } from './model/CertificatesGetBody';
import { CertificatesPutBody } from './model/CertificatesPutBody';
import { ClientCert } from './model/ClientCert';
import { CnameStatus } from './model/CnameStatus';
import { CommonRemoteAuth } from './model/CommonRemoteAuth';
import { Compress } from './model/Compress';
import { Conditions } from './model/Conditions';
import { ConfigInfo } from './model/ConfigInfo';
import { Configs } from './model/Configs';
import { ConfigsGetBody } from './model/ConfigsGetBody';
import { CreateAccessControlTaskRequest } from './model/CreateAccessControlTaskRequest';
import { CreateAccessControlTaskResponse } from './model/CreateAccessControlTaskResponse';
import { CreateDomainByDuplicateRequest } from './model/CreateDomainByDuplicateRequest';
import { CreateDomainByDuplicateResponse } from './model/CreateDomainByDuplicateResponse';
import { CreateDomainRequest } from './model/CreateDomainRequest';
import { CreateDomainRequestBody } from './model/CreateDomainRequestBody';
import { CreateDomainResponse } from './model/CreateDomainResponse';
import { CreateDomainResponseBodyContent } from './model/CreateDomainResponseBodyContent';
import { CreateDomainTemplateRequest } from './model/CreateDomainTemplateRequest';
import { CreateDomainTemplateResponse } from './model/CreateDomainTemplateResponse';
import { CreateExportTaskRequest } from './model/CreateExportTaskRequest';
import { CreateExportTaskResponse } from './model/CreateExportTaskResponse';
import { CreatePreheatingTasksRequest } from './model/CreatePreheatingTasksRequest';
import { CreatePreheatingTasksResponse } from './model/CreatePreheatingTasksResponse';
import { CreateRefreshTasksRequest } from './model/CreateRefreshTasksRequest';
import { CreateRefreshTasksResponse } from './model/CreateRefreshTasksResponse';
import { CreateRuleNewRequest } from './model/CreateRuleNewRequest';
import { CreateRuleNewResponse } from './model/CreateRuleNewResponse';
import { CreateRuleRequest } from './model/CreateRuleRequest';
import { CreateShareCacheGroupsRequest } from './model/CreateShareCacheGroupsRequest';
import { CreateShareCacheGroupsRequstBody } from './model/CreateShareCacheGroupsRequstBody';
import { CreateShareCacheGroupsResponse } from './model/CreateShareCacheGroupsResponse';
import { CreateSubscriptionTaskRequest } from './model/CreateSubscriptionTaskRequest';
import { CreateSubscriptionTaskResponse } from './model/CreateSubscriptionTaskResponse';
import { CreateTagsRequest } from './model/CreateTagsRequest';
import { CreateTagsRequestBody } from './model/CreateTagsRequestBody';
import { CreateTagsResponse } from './model/CreateTagsResponse';
import { CreateTemplateRequestBody } from './model/CreateTemplateRequestBody';
import { CriteriaItem } from './model/CriteriaItem';
import { CustomArgs } from './model/CustomArgs';
import { DeleteDomainRequest } from './model/DeleteDomainRequest';
import { DeleteDomainResponse } from './model/DeleteDomainResponse';
import { DeleteDomainTemplateRequest } from './model/DeleteDomainTemplateRequest';
import { DeleteDomainTemplateResponse } from './model/DeleteDomainTemplateResponse';
import { DeleteRuleNewRequest } from './model/DeleteRuleNewRequest';
import { DeleteRuleNewResponse } from './model/DeleteRuleNewResponse';
import { DeleteShareCacheGroupsRequest } from './model/DeleteShareCacheGroupsRequest';
import { DeleteShareCacheGroupsResponse } from './model/DeleteShareCacheGroupsResponse';
import { DeleteSubscriptionTaskRequest } from './model/DeleteSubscriptionTaskRequest';
import { DeleteSubscriptionTaskResponse } from './model/DeleteSubscriptionTaskResponse';
import { DeleteTagsRequestBody } from './model/DeleteTagsRequestBody';
import { DisableDomainRequest } from './model/DisableDomainRequest';
import { DisableDomainResponse } from './model/DisableDomainResponse';
import { DomainBody } from './model/DomainBody';
import { DomainOriginHost } from './model/DomainOriginHost';
import { Domains } from './model/Domains';
import { DomainsDetail } from './model/DomainsDetail';
import { DomainsWithPort } from './model/DomainsWithPort';
import { DownloadRegionCarrierExcelRequest } from './model/DownloadRegionCarrierExcelRequest';
import { DownloadRegionCarrierExcelResponse } from './model/DownloadRegionCarrierExcelResponse';
import { DownloadStatisticsExcelRequest } from './model/DownloadStatisticsExcelRequest';
import { DownloadStatisticsExcelResponse } from './model/DownloadStatisticsExcelResponse';
import { DuplicateDomainRequestBody } from './model/DuplicateDomainRequestBody';
import { EnableDomainRequest } from './model/EnableDomainRequest';
import { EnableDomainResponse } from './model/EnableDomainResponse';
import { EpResourceTag } from './model/EpResourceTag';
import { ErrMsg } from './model/ErrMsg';
import { ErrRsp } from './model/ErrRsp';
import { ErrorCodeCache } from './model/ErrorCodeCache';
import { ErrorCodeCacheEngine } from './model/ErrorCodeCacheEngine';
import { ErrorCodeRedirectRules } from './model/ErrorCodeRedirectRules';
import { ExportStatsOpenRequest } from './model/ExportStatsOpenRequest';
import { ExportStatsOpenResponse } from './model/ExportStatsOpenResponse';
import { ExportTask } from './model/ExportTask';
import { ExportTaskVo } from './model/ExportTaskVo';
import { ExportVo } from './model/ExportVo';
import { FlexibleOrigins } from './model/FlexibleOrigins';
import { FlexibleOriginsEngine } from './model/FlexibleOriginsEngine';
import { FlowLimitStrategy } from './model/FlowLimitStrategy';
import { ForceRedirect } from './model/ForceRedirect';
import { ForceRedirectConfig } from './model/ForceRedirectConfig';
import { FullUpdateRulesRequest } from './model/FullUpdateRulesRequest';
import { Hsts } from './model/Hsts';
import { HstsQuery } from './model/HstsQuery';
import { HttpGetBody } from './model/HttpGetBody';
import { HttpPutBody } from './model/HttpPutBody';
import { HttpResponseHeader } from './model/HttpResponseHeader';
import { HttpsDetail } from './model/HttpsDetail';
import { InheritConfig } from './model/InheritConfig';
import { InheritConfigQuery } from './model/InheritConfigQuery';
import { IpFilter } from './model/IpFilter';
import { IpFrequencyLimit } from './model/IpFrequencyLimit';
import { IpFrequencyLimitQuery } from './model/IpFrequencyLimitQuery';
import { ListAccessControlTaskRequest } from './model/ListAccessControlTaskRequest';
import { ListAccessControlTaskResponse } from './model/ListAccessControlTaskResponse';
import { ListBanUrlRequest } from './model/ListBanUrlRequest';
import { ListBanUrlResponse } from './model/ListBanUrlResponse';
import { ListCdnDomainTopIpsRequest } from './model/ListCdnDomainTopIpsRequest';
import { ListCdnDomainTopIpsResponse } from './model/ListCdnDomainTopIpsResponse';
import { ListCdnDomainTopOriginUrlRequest } from './model/ListCdnDomainTopOriginUrlRequest';
import { ListCdnDomainTopOriginUrlResponse } from './model/ListCdnDomainTopOriginUrlResponse';
import { ListCdnDomainTopPathRequest } from './model/ListCdnDomainTopPathRequest';
import { ListCdnDomainTopPathResponse } from './model/ListCdnDomainTopPathResponse';
import { ListCdnDomainTopRefersRequest } from './model/ListCdnDomainTopRefersRequest';
import { ListCdnDomainTopRefersResponse } from './model/ListCdnDomainTopRefersResponse';
import { ListCdnDomainTopUasRequest } from './model/ListCdnDomainTopUasRequest';
import { ListCdnDomainTopUasResponse } from './model/ListCdnDomainTopUasResponse';
import { ListDomainClientStatsRequest } from './model/ListDomainClientStatsRequest';
import { ListDomainClientStatsResponse } from './model/ListDomainClientStatsResponse';
import { ListDomainConfigsRequest } from './model/ListDomainConfigsRequest';
import { ListDomainConfigsResponse } from './model/ListDomainConfigsResponse';
import { ListDomainsRequest } from './model/ListDomainsRequest';
import { ListDomainsResponse } from './model/ListDomainsResponse';
import { ListExportTasksRequest } from './model/ListExportTasksRequest';
import { ListExportTasksResponse } from './model/ListExportTasksResponse';
import { ListRuleDetailsRequest } from './model/ListRuleDetailsRequest';
import { ListRuleDetailsResponse } from './model/ListRuleDetailsResponse';
import { ListShareCacheGroupsConfig } from './model/ListShareCacheGroupsConfig';
import { ListShareCacheGroupsRecord } from './model/ListShareCacheGroupsRecord';
import { ListShareCacheGroupsRequest } from './model/ListShareCacheGroupsRequest';
import { ListShareCacheGroupsResponse } from './model/ListShareCacheGroupsResponse';
import { ListSpecialConfigurationRequest } from './model/ListSpecialConfigurationRequest';
import { ListSpecialConfigurationResponse } from './model/ListSpecialConfigurationResponse';
import { ListSubscriptionTasksRequest } from './model/ListSubscriptionTasksRequest';
import { ListSubscriptionTasksResponse } from './model/ListSubscriptionTasksResponse';
import { LogObject } from './model/LogObject';
import { Match } from './model/Match';
import { ModifyAccountInfoRequest } from './model/ModifyAccountInfoRequest';
import { ModifyAccountInfoResponse } from './model/ModifyAccountInfoResponse';
import { ModifyDomainConfigRequestBody } from './model/ModifyDomainConfigRequestBody';
import { OriginRequestHeader } from './model/OriginRequestHeader';
import { OriginRequestUrlRewrite } from './model/OriginRequestUrlRewrite';
import { OriginRequestUrlRewriteEngine } from './model/OriginRequestUrlRewriteEngine';
import { PreheatingTaskRequest } from './model/PreheatingTaskRequest';
import { PreheatingTaskRequestBody } from './model/PreheatingTaskRequestBody';
import { Quic } from './model/Quic';
import { Quotas } from './model/Quotas';
import { RefererConfig } from './model/RefererConfig';
import { RefreshTaskRequest } from './model/RefreshTaskRequest';
import { RefreshTaskRequestBody } from './model/RefreshTaskRequestBody';
import { RemoteAuthRule } from './model/RemoteAuthRule';
import { RequestLimitRules } from './model/RequestLimitRules';
import { RequestLimitRulesEngine } from './model/RequestLimitRulesEngine';
import { RequestUrlRewrite } from './model/RequestUrlRewrite';
import { RequestUrlRewriteEngine } from './model/RequestUrlRewriteEngine';
import { Resource } from './model/Resource';
import { RuleResponse } from './model/RuleResponse';
import { SetChargeModesBody } from './model/SetChargeModesBody';
import { SetChargeModesRequest } from './model/SetChargeModesRequest';
import { SetChargeModesResponse } from './model/SetChargeModesResponse';
import { SetStatsConfigBody } from './model/SetStatsConfigBody';
import { SetStatsConfigRequest } from './model/SetStatsConfigRequest';
import { SetStatsConfigResponse } from './model/SetStatsConfigResponse';
import { ShareCacheGroupsRecord } from './model/ShareCacheGroupsRecord';
import { ShowAppliedTemplateRecordRequest } from './model/ShowAppliedTemplateRecordRequest';
import { ShowAppliedTemplateRecordResponse } from './model/ShowAppliedTemplateRecordResponse';
import { ShowBandwidthCalcRequest } from './model/ShowBandwidthCalcRequest';
import { ShowBandwidthCalcResponse } from './model/ShowBandwidthCalcResponse';
import { ShowCertificatesHttpsInfoRequest } from './model/ShowCertificatesHttpsInfoRequest';
import { ShowCertificatesHttpsInfoResponse } from './model/ShowCertificatesHttpsInfoResponse';
import { ShowChargeModesRequest } from './model/ShowChargeModesRequest';
import { ShowChargeModesResponse } from './model/ShowChargeModesResponse';
import { ShowDomainCountryStatRequest } from './model/ShowDomainCountryStatRequest';
import { ShowDomainCountryStatResponse } from './model/ShowDomainCountryStatResponse';
import { ShowDomainDetailByNameRequest } from './model/ShowDomainDetailByNameRequest';
import { ShowDomainDetailByNameResponse } from './model/ShowDomainDetailByNameResponse';
import { ShowDomainFullConfigRequest } from './model/ShowDomainFullConfigRequest';
import { ShowDomainFullConfigResponse } from './model/ShowDomainFullConfigResponse';
import { ShowDomainLocationStatsRequest } from './model/ShowDomainLocationStatsRequest';
import { ShowDomainLocationStatsResponse } from './model/ShowDomainLocationStatsResponse';
import { ShowDomainStatsRequest } from './model/ShowDomainStatsRequest';
import { ShowDomainStatsResponse } from './model/ShowDomainStatsResponse';
import { ShowDomainTemplateRequest } from './model/ShowDomainTemplateRequest';
import { ShowDomainTemplateResponse } from './model/ShowDomainTemplateResponse';
import { ShowHistoryTaskDetailsRequest } from './model/ShowHistoryTaskDetailsRequest';
import { ShowHistoryTaskDetailsResponse } from './model/ShowHistoryTaskDetailsResponse';
import { ShowHistoryTasksRequest } from './model/ShowHistoryTasksRequest';
import { ShowHistoryTasksResponse } from './model/ShowHistoryTasksResponse';
import { ShowIpInfoRequest } from './model/ShowIpInfoRequest';
import { ShowIpInfoResponse } from './model/ShowIpInfoResponse';
import { ShowLogsRequest } from './model/ShowLogsRequest';
import { ShowLogsResponse } from './model/ShowLogsResponse';
import { ShowQuotaRequest } from './model/ShowQuotaRequest';
import { ShowQuotaResponse } from './model/ShowQuotaResponse';
import { ShowSpecialUserRequest } from './model/ShowSpecialUserRequest';
import { ShowSpecialUserResponse } from './model/ShowSpecialUserResponse';
import { ShowStatsConfigsRequest } from './model/ShowStatsConfigsRequest';
import { ShowStatsConfigsResponse } from './model/ShowStatsConfigsResponse';
import { ShowTagsRequest } from './model/ShowTagsRequest';
import { ShowTagsResponse } from './model/ShowTagsResponse';
import { ShowTopDomainNamesRequest } from './model/ShowTopDomainNamesRequest';
import { ShowTopDomainNamesResponse } from './model/ShowTopDomainNamesResponse';
import { ShowTopUrlRequest } from './model/ShowTopUrlRequest';
import { ShowTopUrlResponse } from './model/ShowTopUrlResponse';
import { ShowUrlTaskInfoRequest } from './model/ShowUrlTaskInfoRequest';
import { ShowUrlTaskInfoResponse } from './model/ShowUrlTaskInfoResponse';
import { ShowVerifyDomainOwnerInfoRequest } from './model/ShowVerifyDomainOwnerInfoRequest';
import { ShowVerifyDomainOwnerInfoResponse } from './model/ShowVerifyDomainOwnerInfoResponse';
import { Sni } from './model/Sni';
import { SourceWithPort } from './model/SourceWithPort';
import { Sources } from './model/Sources';
import { SourcesConfig } from './model/SourcesConfig';
import { SourcesConfigResponseBody } from './model/SourcesConfigResponseBody';
import { SourcesDomainConfig } from './model/SourcesDomainConfig';
import { SourcesRequestBody } from './model/SourcesRequestBody';
import { SpeicialConfiguration } from './model/SpeicialConfiguration';
import { StatsConfigDetails } from './model/StatsConfigDetails';
import { SubscriptionTask } from './model/SubscriptionTask';
import { SubscriptionTaskVo } from './model/SubscriptionTaskVo';
import { TagMap } from './model/TagMap';
import { TasksObject } from './model/TasksObject';
import { TemplateApplyRequestBody } from './model/TemplateApplyRequestBody';
import { TemplateConfigs } from './model/TemplateConfigs';
import { TemplateItem } from './model/TemplateItem';
import { TopIpSummary } from './model/TopIpSummary';
import { TopOriginUrlSummary } from './model/TopOriginUrlSummary';
import { TopPathSummary } from './model/TopPathSummary';
import { TopReferSummary } from './model/TopReferSummary';
import { TopUa } from './model/TopUa';
import { TopUaSummary } from './model/TopUaSummary';
import { TopUrl } from './model/TopUrl';
import { TopUrlSummary } from './model/TopUrlSummary';
import { TopUrlinReq } from './model/TopUrlinReq';
import { UpdateDomainFullConfigRequest } from './model/UpdateDomainFullConfigRequest';
import { UpdateDomainFullConfigResponse } from './model/UpdateDomainFullConfigResponse';
import { UpdateDomainMultiCertificatesRequest } from './model/UpdateDomainMultiCertificatesRequest';
import { UpdateDomainMultiCertificatesRequestBody } from './model/UpdateDomainMultiCertificatesRequestBody';
import { UpdateDomainMultiCertificatesRequestBodyContent } from './model/UpdateDomainMultiCertificatesRequestBodyContent';
import { UpdateDomainMultiCertificatesResponse } from './model/UpdateDomainMultiCertificatesResponse';
import { UpdateDomainMultiCertificatesResponseBodyContent } from './model/UpdateDomainMultiCertificatesResponseBodyContent';
import { UpdateDomainMultiCertificatesResponseBodyResult } from './model/UpdateDomainMultiCertificatesResponseBodyResult';
import { UpdateDomainTemplateRequest } from './model/UpdateDomainTemplateRequest';
import { UpdateDomainTemplateResponse } from './model/UpdateDomainTemplateResponse';
import { UpdateFullRuleRequest } from './model/UpdateFullRuleRequest';
import { UpdateFullRuleResponse } from './model/UpdateFullRuleResponse';
import { UpdatePrivateBucketAccessBody } from './model/UpdatePrivateBucketAccessBody';
import { UpdatePrivateBucketAccessRequest } from './model/UpdatePrivateBucketAccessRequest';
import { UpdatePrivateBucketAccessResponse } from './model/UpdatePrivateBucketAccessResponse';
import { UpdateRuleNewRequest } from './model/UpdateRuleNewRequest';
import { UpdateRuleNewResponse } from './model/UpdateRuleNewResponse';
import { UpdateRuleRequest } from './model/UpdateRuleRequest';
import { UpdateRuleStatusRequest } from './model/UpdateRuleStatusRequest';
import { UpdateShareCacheGroupsRequest } from './model/UpdateShareCacheGroupsRequest';
import { UpdateShareCacheGroupsRequstBody } from './model/UpdateShareCacheGroupsRequstBody';
import { UpdateShareCacheGroupsResponse } from './model/UpdateShareCacheGroupsResponse';
import { UpdateSubscriptionTaskRequest } from './model/UpdateSubscriptionTaskRequest';
import { UpdateSubscriptionTaskResponse } from './model/UpdateSubscriptionTaskResponse';
import { UrlAccessControlTaskRequestBody } from './model/UrlAccessControlTaskRequestBody';
import { UrlAuth } from './model/UrlAuth';
import { UrlAuthGetBody } from './model/UrlAuthGetBody';
import { UrlObject } from './model/UrlObject';
import { UrlRewriteCondition } from './model/UrlRewriteCondition';
import { Urls } from './model/Urls';
import { UserAgentFilter } from './model/UserAgentFilter';
import { VerifyDomainOwnerRequest } from './model/VerifyDomainOwnerRequest';
import { VerifyDomainOwnerRequestBody } from './model/VerifyDomainOwnerRequestBody';
import { VerifyDomainOwnerResponse } from './model/VerifyDomainOwnerResponse';
import { VideoSeek } from './model/VideoSeek';
import { WebSocketSeek } from './model/WebSocketSeek';

export class CdnClient {
    public static newBuilder(): ClientBuilder<CdnClient> {
            let client = new ClientBuilder<CdnClient>(newClient);
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
     * 应用域名模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用域名模板。
     * @param {string} tmlId **参数解释：** 域名模板ID，可以通过查询域名模板列表接口获取 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {TemplateApplyRequestBody} [templateApplyRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applyDomainTemplate(applyDomainTemplateRequest?: ApplyDomainTemplateRequest): Promise<ApplyDomainTemplateResponse> {
        const options = ParamCreater().applyDomainTemplate(applyDomainTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量域名复制接口。
     *  &gt; 将某个加速域名的配置批量复制到其他域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量域名复制
     * @param {BatchCopyDRequestBody} batchCopyDRequestBody 域名复制参数请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCopyDomain(batchCopyDomainRequest?: BatchCopyDomainRequest): Promise<BatchCopyDomainResponse> {
        const options = ParamCreater().batchCopyDomain(batchCopyDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于删除资源标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源标签配置接口
     * @param {DeleteTagsRequestBody} [deleteTagsRequestBody] DeleteTags对象。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteTags(batchDeleteTagsRequest?: BatchDeleteTagsRequest): Promise<BatchDeleteTagsResponse> {
        const options = ParamCreater().batchDeleteTags(batchDeleteTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量更新规则状态及优先级。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新规则状态及优先级
     * @param {string} domainName **参数解释：** 加速域名 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {BatchUpdateRulesRequest} batchUpdateRulesRequest **参数解释：** 批量更新规则状态和优先级 **约束限制：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateRuleStatus(batchUpdateRuleStatusRequest?: BatchUpdateRuleStatusRequest): Promise<BatchUpdateRuleStatusResponse> {
        const options = ParamCreater().batchUpdateRuleStatus(batchUpdateRuleStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建封禁/解禁URL任务，如需使用本接口，请提交工单申请。
     * - 单租户调用频率：10次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建封禁/解禁URL任务
     * @param {string} action **参数解释：** 操作类型， **约束限制：** 不涉及 **取值范围：** - ban：禁用 - unban：解禁  **默认取值：** 不涉及
     * @param {UrlAccessControlTaskRequestBody} urlAccessControlTaskRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAccessControlTask(createAccessControlTaskRequest?: CreateAccessControlTaskRequest): Promise<CreateAccessControlTaskResponse> {
        const options = ParamCreater().createAccessControlTask(createAccessControlTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建加速域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建加速域名
     * @param {CreateDomainRequestBody} [createDomainRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDomain(createDomainRequest?: CreateDomainRequest): Promise<CreateDomainResponse> {
        const options = ParamCreater().createDomain(createDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将存量加速域名的配置复制给新添加的域名。
     * - 已开通CDN服务。
     * - 如果加速域名的服务范围包含中国大陆，加速域名需要已完成备案。
     * - 单租户调用频率：20次/min。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制配置到新添加域名
     * @param {DuplicateDomainRequestBody} [duplicateDomainRequestBody] 复制域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDomainByDuplicate(createDomainByDuplicateRequest?: CreateDomainByDuplicateRequest): Promise<CreateDomainByDuplicateResponse> {
        const options = ParamCreater().createDomainByDuplicate(createDomainByDuplicateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建域名模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建域名模板。
     * @param {CreateTemplateRequestBody} createTemplateRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDomainTemplate(createDomainTemplateRequest?: CreateDomainTemplateRequest): Promise<CreateDomainTemplateResponse> {
        const options = ParamCreater().createDomainTemplate(createDomainTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建统计数据异步导出任务，目前支持话单数据导出、top url导出
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建统计数据异步导出任务
     * @param {ExportTaskVo} [exportTaskVo] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createExportTask(createExportTaskRequest?: CreateExportTaskRequest): Promise<CreateExportTaskResponse> {
        const options = ParamCreater().createExportTask(createExportTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建预热任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建预热缓存任务
     * @param {PreheatingTaskRequest} preheatingTaskRequest urls: 多个URL之间需要用逗号分隔，目前不支持对目录的预热，单个url的长度限制为4096字符。每个账户每天最多预热1000个URL，单次提交数量不超过1000条。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示在当前企业项目下添加缓存预热任务，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPreheatingTasks(createPreheatingTasksRequest?: CreatePreheatingTasksRequest): Promise<CreatePreheatingTasksResponse> {
        const options = ParamCreater().createPreheatingTasks(createPreheatingTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建刷新缓存任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建刷新缓存任务
     * @param {RefreshTaskRequest} refreshTaskRequest type: 刷新类型，其值可为file 或directory，默认为file; urls: 多个URL之间需用逗号分隔，单个url长度限制为4096字符。每个账户每天最多刷新2000个文件和100个目录，单次提交数量不超过1000条。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示在当前企业项目下添加缓存刷新任务，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRefreshTasks(createRefreshTasksRequest?: CreateRefreshTasksRequest): Promise<CreateRefreshTasksResponse> {
        const options = ParamCreater().createRefreshTasks(createRefreshTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 规则引擎功能通过图形化的方式实现各种规则配置，实现更加灵活、细粒度的规则配置。通过限制触发条件，控制当前配置生效的资源范围，满足多种场景的配置需求。
     * - 请提交工单开通规则引擎功能后再使用当前接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建规则引擎规则
     * @param {string} domainName **参数解释：** 加速域名 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {CreateRuleRequest} createRuleRequest **参数解释：** 规则配置内容 **约束限制：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRuleNew(createRuleNewRequest?: CreateRuleNewRequest): Promise<CreateRuleNewResponse> {
        const options = ParamCreater().createRuleNew(createRuleNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 配置共享缓存组，将一个域名设置为主域名，组内其他域名共享该域名的缓存，提高缓存命中率。
     * - 只有缓存规则中“URL参数”的配置为“忽略参数”或者“不忽略参数”的域名才能加入共享缓存组。
     * - 每个账号最多配置500个共享缓存组。
     * - 单租户调用频率：5次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建共享缓存组
     * @param {CreateShareCacheGroupsRequstBody} [createShareCacheGroupsRequstBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createShareCacheGroups(createShareCacheGroupsRequest?: CreateShareCacheGroupsRequest): Promise<CreateShareCacheGroupsResponse> {
        const options = ParamCreater().createShareCacheGroups(createShareCacheGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * create subscription task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建运营报表订阅任务
     * @param {SubscriptionTaskVo} [subscriptionTaskVo] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubscriptionTask(createSubscriptionTaskRequest?: CreateSubscriptionTaskRequest): Promise<CreateSubscriptionTaskResponse> {
        const options = ParamCreater().createSubscriptionTask(createSubscriptionTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于创建资源标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源标签配置接口
     * @param {CreateTagsRequestBody} [createTagsRequestBody] CreateTags对象。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTags(createTagsRequest?: CreateTagsRequest): Promise<CreateTagsResponse> {
        const options = ParamCreater().createTags(createTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除加速域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除加速域名
     * @param {string} domainId 加速域名ID。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDomain(deleteDomainRequest?: DeleteDomainRequest): Promise<DeleteDomainResponse> {
        const options = ParamCreater().deleteDomain(deleteDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除域名模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除域名模板。
     * @param {string} tmlId **参数解释：** 域名模板ID，可以通过查询域名模板列表接口获取 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDomainTemplate(deleteDomainTemplateRequest?: DeleteDomainTemplateRequest): Promise<DeleteDomainTemplateResponse> {
        const options = ParamCreater().deleteDomainTemplate(deleteDomainTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除规则引擎规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除规则引擎规则
     * @param {string} domainName **参数解释：** 加速域名 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} ruleId **参数解释：** 规则ID，可以通过查询规则引擎列表接口获取 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRuleNew(deleteRuleNewRequest?: DeleteRuleNewRequest): Promise<DeleteRuleNewResponse> {
        const options = ParamCreater().deleteRuleNew(deleteRuleNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除新共享缓存组。
     * - 共享缓存组内不包含关联域名时才可以删除。
     * - 单租户调用频率：5次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除共享缓存组
     * @param {string} id **参数解释：** 共享缓存组ID，可通过查询共享缓存组列表接口获取 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteShareCacheGroups(deleteShareCacheGroupsRequest?: DeleteShareCacheGroupsRequest): Promise<DeleteShareCacheGroupsResponse> {
        const options = ParamCreater().deleteShareCacheGroups(deleteShareCacheGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * delete subscription task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除运营报表订阅任务
     * @param {number} id 订阅任务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubscriptionTask(deleteSubscriptionTaskRequest?: DeleteSubscriptionTaskRequest): Promise<DeleteSubscriptionTaskResponse> {
        const options = ParamCreater().deleteSubscriptionTask(deleteSubscriptionTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停用加速域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停用加速域名
     * @param {string} domainId 加速域名ID。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableDomain(disableDomainRequest?: DisableDomainRequest): Promise<DisableDomainResponse> {
        const options = ParamCreater().disableDomain(disableDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 下载区域运营商指标数据表格文件。
     * 
     * - 支持下载90天内的指标数据表格。
     * 
     * - 时间跨度不能超过31天。
     * 
     * - 起始时间和结束时间，左闭右开。如时间跨度为2022-10-24 00:00:00 到 2022-10-25 00:00:00，表示取 [2022-10-24 00:00:00, 2022-10-25 00:00:00)的统计数据。
     * 
     * - 起始时间、结束时间必须传毫秒级时间戳，起始时间和结束时间必须同时指定。
     * 
     * - 单租户调用频率：10次/min。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载区域运营商指标数据表格文件
     * @param {number} startTime 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名。如果域名在查询时间段内无数据，结果将不返回该域名的信息。
     * @param {string} excelType 统计数据表格类型,目前支持 - 区域用量统计数据(excel_type_usage) - 区域访问情况统计数据(excel_type_access) - 区域情况统计数据（excel_type_region） - 区域运营商情况统计数据(excel_type_carrier) - 国家情况统计数据(excel_type_country) - top_url统计数据(excel_type_top_url)
     * @param {number} [interval] - 查询时间间隔，单位：秒，取值说明： - 300(5分钟)：最大查询跨度2天 - 3600(1小时)：最大查询跨度7天 - 86400(1天)：最大查询跨度31天 - 如果不传，默认取对应时间跨度的最小间隔。
     * @param {string} [country] - 国家&amp;地区编码，多个以英文逗号分隔，all表示全部，取值见附录 - 访问运营商统计数据时不能填写 - 访问top_url数据时不能填写 - 访问区域情况数据时只能填写cn(中国)
     * @param {string} [excelLanguage] 创建表格语言，支持zh(中文)，en(英文)两种，如果不传默认为zh
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子账号调用接口时，该参数必传。
     * @param {string} [region] - 地区区域,当country为cn（中国）时有效 - 访问运营商统计数据时不能填写 - 访问国家统计数据时不能填写 - 访问top_url数据时不能填写
     * @param {string} [carrier] - 运营商编码 - 访问区域统计数据时不能填写 - 访问国家统计数据时不能填写 - 访问top_url数据时不能填写
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadRegionCarrierExcel(downloadRegionCarrierExcelRequest?: DownloadRegionCarrierExcelRequest): Promise<DownloadRegionCarrierExcelResponse> {
        const options = ParamCreater().downloadRegionCarrierExcel(downloadRegionCarrierExcelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 下载统计指标数据表格文件。
     * 
     * - 支持下载90天内的指标数据。
     * 
     * - 时间跨度不能超过31天。
     * 
     * - 起始时间和结束时间，左闭右开。如时间跨度为2022-10-24 00:00:00 到 2022-10-25 00:00:00，表示取 [2022-10-24 00:00:00, 2022-10-25 00:00:00)的统计数据。
     * 
     * - 起始时间、结束时间必须传毫秒级时间戳，起始时间和结束时间必须同时指定。
     * 
     * - 单租户调用频率：10次/min。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载统计指标数据表格文件
     * @param {number} startTime 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名。如果域名在查询时间段内无数据，结果将不返回该域名的信息。
     * @param {string} excelType 统计数据表格类型,目前支持 - 用量统计数据(excel_type_usage) - 访问情况统计数据(excel_type_access) - 回源情况统计数据（excel_type_origin） - http_code统计数据(excel_type_http_code)
     * @param {string} [excelLanguage] 创建表格语言，支持zh(中文)，en(英文)两种，如果不传默认为zh
     * @param {string} [serviceArea] 服务区域：mainland_china(中国大陆)，outside_mainland_china(中国大陆境外)，默认为mainland_china，当查询回源类指标时该参数无效。
     * @param {number} [interval] - 查询时间间隔，单位：秒，取值说明： - 300(5分钟)：最大查询跨度2天 - 3600(1小时)：最大查询跨度7天 - 86400(1天)：最大查询跨度31天 - 如果不传，默认取对应时间跨度的最小间隔。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子账号调用接口时，该参数必传。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadStatisticsExcel(downloadStatisticsExcelRequest?: DownloadStatisticsExcelRequest): Promise<DownloadStatisticsExcelResponse> {
        const options = ParamCreater().downloadStatisticsExcel(downloadStatisticsExcelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用加速域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用加速域名
     * @param {string} domainId 加速域名ID。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableDomain(enableDomainRequest?: EnableDomainRequest): Promise<EnableDomainResponse> {
        const options = ParamCreater().enableDomain(enableDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * CDN数据导出
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary CDN数据导出
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子账号调用接口时，该参数必传。
     * @param {ExportVo} [exportVo] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportStatsOpen(exportStatsOpenRequest?: ExportStatsOpenRequest): Promise<ExportStatsOpenResponse> {
        const options = ParamCreater().exportStatsOpen(exportStatsOpenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询封禁/解禁URL任务，如需使用本接口，请提交工单申请。
     * - 单租户调用频率：30次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询封禁/解禁URL任务
     * @param {number} [startTime] 查询起始时间戳（毫秒），不传默认为当前时间，需与结束时间戳同时指定，时间跨度不能超过7天。
     * @param {number} [endTime] 查询结束时间戳（毫秒），不传默认3天前，需与开始时间戳同时指定，时间跨度不能超过7天。
     * @param {number} [offset] 偏移量：特定数据字段与起始数据字段位置的距离，默认为0。
     * @param {number} [limit] 单次查询数据条数，上限为10000，默认为10。
     * @param {string} [status] 任务状态，状态类型：processing：处理中；succeed：完成；failed：失败。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccessControlTask(listAccessControlTaskRequest?: ListAccessControlTaskRequest): Promise<ListAccessControlTaskResponse> {
        const options = ParamCreater().listAccessControlTask(listAccessControlTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询已封禁的URL，如需使用本接口，请提交工单申请。
     * - 单租户调用频率：30次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询已封禁的URL
     * @param {number} [startTime] 查询起始时间戳（毫秒），需与结束时间戳同时指定。
     * @param {number} [endTime] 查询结束时间戳（毫秒），需与开始时间戳同时指定。
     * @param {number} [pageSize] 封禁的url所显示单页最大数量，取值范围为1-50。page_size和page_number必须同时传值。默认值10.
     * @param {number} [pageNumber] 封禁的url当前查询为第几页，取值范围为1-65535。默认值1
     * @param {string} [url] 封禁的url地址。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBanUrl(listBanUrlRequest?: ListBanUrlRequest): Promise<ListBanUrlResponse> {
        const options = ParamCreater().listBanUrl(listBanUrlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询域名top ip统计分析数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名top ip统计分析数据
     * @param {number} startTime 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名。如果域名在查询时间段内无数据，结果将不返回该域名的信息。
     * @param {string} statType -  参数类型支持：flux(流量),req_num(请求数)
     * @param {string} [groupBy] 数据分组方式，可选domain，默认不分组
     * @param {string} [serviceArea] 服务区域：mainland_china(大陆)，outside_mainland_china(海外)，默认为mainland_china
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子账号调用接口时，该参数必传。
     * @param {boolean} [includeRatio] 是否包含百分比数据，默认false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCdnDomainTopIps(listCdnDomainTopIpsRequest?: ListCdnDomainTopIpsRequest): Promise<ListCdnDomainTopIpsResponse> {
        const options = ParamCreater().listCdnDomainTopIps(listCdnDomainTopIpsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询域名top 回源URL数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名top回源URL数据
     * @param {number} startTime 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名。如果域名在查询时间段内无数据，结果将不返回该域名的信息。
     * @param {string} statType -  参数类型支持：flux(流量),req_num(请求数)
     * @param {string} [groupBy] 数据分组方式，可选domain，默认不分组
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子账号调用接口时，该参数必传。
     * @param {boolean} [includeRatio] 是否包含百分比数据，默认false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCdnDomainTopOriginUrl(listCdnDomainTopOriginUrlRequest?: ListCdnDomainTopOriginUrlRequest): Promise<ListCdnDomainTopOriginUrlResponse> {
        const options = ParamCreater().listCdnDomainTopOriginUrl(listCdnDomainTopOriginUrlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询 TOP Path明细
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询 TOP Path明细
     * @param {number} startTime 查询起始时间戳，只能传0点毫秒时间戳
     * @param {number} endTime 查询结束时间戳，只能传0点毫秒时间戳
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名。如果域名在查询时间段内无数据，结果将不返回该域名的信息。
     * @param {string} statType - 参数类型支持：flux(流量),req_num(请求数)
     * @param {string} [serviceArea] 服务区域：mainland_china(大陆)，outside_mainland_china(海外)，默认为global(全球)
     * @param {string} [userDomainId] 域名所属用户的domain_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCdnDomainTopPath(listCdnDomainTopPathRequest?: ListCdnDomainTopPathRequest): Promise<ListCdnDomainTopPathResponse> {
        const options = ParamCreater().listCdnDomainTopPath(listCdnDomainTopPathRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询TOP100 referer数据。
     * 
     * - 支持查询90天内的数据。
     * 
     * - 查询跨度不能超过31天。
     * 
     * - 单租户调用频率：2次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询统计TOP100 referer数据明细
     * @param {number} startTime 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名。如果域名在查询时间段内无数据，结果将不返回该域名的信息。
     * @param {string} statType - 统计指标类型 - 目前只支持flux（流量），req_num（请求数）
     * @param {string} [serviceArea] 服务区域：mainland_china(大陆)，outside_mainland_china(海外)，默认为global(全球)
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子账号调用接口时，该参数必传。
     * @param {boolean} [includeRatio] 是否包含百分比数据，默认false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCdnDomainTopRefers(listCdnDomainTopRefersRequest?: ListCdnDomainTopRefersRequest): Promise<ListCdnDomainTopRefersResponse> {
        const options = ParamCreater().listCdnDomainTopRefers(listCdnDomainTopRefersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 统计分析TOP UA统计数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名top ua统计分析数据
     * @param {number} startTime 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名。如果域名在查询时间段内无数据，结果将不返回该域名的信息。
     * @param {string} statType -  参数类型支持：flux(流量),req_num(请求数)
     * @param {string} [groupBy] 数据分组方式，可选domain，默认不分组
     * @param {string} [serviceArea] 服务区域：mainland_china(大陆)，outside_mainland_china(海外)，默认为mainland_china
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子账号调用接口时，该参数必传。
     * @param {boolean} [includeRatio] 是否包含百分比数据，默认false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCdnDomainTopUas(listCdnDomainTopUasRequest?: ListCdnDomainTopUasRequest): Promise<ListCdnDomainTopUasResponse> {
        const options = ParamCreater().listCdnDomainTopUas(listCdnDomainTopUasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 按域名维度查询每天客户端访问详情统计。
     * - 支持查询90天内的数据。
     * - ip_num查询跨度只支持1天,uv查询跨度只支持5分钟。
     * - 起始时间和结束时间，左闭右开，需要同时指定。如查询2022-07-12 00:00:00 到 2022-07-13 00:00:00 的数据，表示取 [2022-07-12 00:00:00, 2022-07-13 00:00:00)的统计数据。
     * - ip_num开始时间、结束时间必须传毫秒级时间戳，必须为凌晨0点整时刻点，如果传的不是凌晨0点整时刻点，返回数据可能与预期不一致。
     * - uv必须为5分钟整时刻点，如：0分、5分、10分、15分等，如果传的不是5分钟时刻点，返回数据可能与预期不一致
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按域名维度查询每天客户端访问详情统计
     * @param {number} startTime 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名。如果域名在查询时间段内无数据，结果将不返回该域名的信息。
     * @param {string} statType -  客户端访问资源指标类别：  - ip_num (去重后ip访问数量) - uv(五分钟内的访问独立IP数，一个独立ip记一次。)
     * @param {string} [serviceArea] 服务区域：mainland_china(大陆)，outside_mainland_china(海外)，默认为mainland_china
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子账号调用接口时，该参数必传。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainClientStats(listDomainClientStatsRequest?: ListDomainClientStatsRequest): Promise<ListDomainClientStatsResponse> {
        const options = ParamCreater().listDomainClientStats(listDomainClientStatsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询加速域名的基础信息，包含cname状态、加速域名是否支持复制配置。
     * - 单租户调用频率：5次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询加速域名基础信息
     * @param {string} item **参数解释：** 查询数据类型 **约束限制：** 不涉及 **取值范围：** - cname_status: 域名cname状态 - copy: 查询账号下哪些加速域名支持复制配置  **默认取值：** 不涉及
     * @param {string} [domainNames] **参数解释：** 加速域名  - 多个域名使用英文半角逗号分隔  - 当查询cname状态时，该参数必传  **约束限制：** 仅支持查询已经在CDN添加成功的域名 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [enterpriseProjectId] **参数解释：** 企业项目id。您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id **约束限制：** 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainConfigs(listDomainConfigsRequest?: ListDomainConfigsRequest): Promise<ListDomainConfigsResponse> {
        const options = ParamCreater().listDomainConfigs(listDomainConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询加速域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询加速域名
     * @param {string} [domainName] 加速域名，采用模糊匹配的方式。（长度限制为1-255字符）。
     * @param {string} [businessType] 加速域名的业务类型。取值： - web（网站加速） - download（文件下载加速） - video（点播加速） - wholeSite（全站加速）
     * @param {string} [domainStatus] 加速域名状态。取值意义： - online表示“已开启” - offline表示“已停用” - configuring表示“配置中” - configure_failed表示“配置失败” - checking表示“审核中” - check_failed表示“审核未通过” - deleting表示“删除中”。
     * @param {string} [serviceArea] 华为云CDN提供的加速服务范围，包含： - mainland_china 中国大陆 - outside_mainland_china 中国大陆境外 - global 全球。
     * @param {number} [pageSize] 每页加速域名的数量，取值范围1-10000，默认值为30。
     * @param {number} [pageNumber] 查询的页码，即：从哪一页开始查询，取值范围1-65535，默认值为1。
     * @param {boolean} [showTags] 展示标签标识 true：展示 false：不展示。
     * @param {boolean} [exactMatch] 精准匹配 true：开启 false：关闭。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomains(listDomainsRequest?: ListDomainsRequest): Promise<ListDomainsResponse> {
        const options = ParamCreater().listDomains(listDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页查询统计数据异步导出任务，按修改时间降序排列，当任务状态为success时，返回参数中会包含download_link
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分页查询统计数据异步导出
     * @param {string} taskId 任务id
     * @param {string} taskName 任务名称
     * @param {number} [limit] - 每页显示的条目数量, 默认为10
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0，默认为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExportTasks(listExportTasksRequest?: ListExportTasksRequest): Promise<ListExportTasksResponse> {
        const options = ParamCreater().listExportTasks(listExportTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询规则引擎列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规则引擎列表
     * @param {string} domainName **参数解释：** 加速域名 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRuleDetails(listRuleDetailsRequest?: ListRuleDetailsRequest): Promise<ListRuleDetailsResponse> {
        const options = ParamCreater().listRuleDetails(listRuleDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询共享缓存组列表。
     * - 单租户调用频率：5次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询共享缓存组列表
     * @param {number} [limit] **参数解释：** 分页查询每页的数量 **约束限制：** 不涉及 **取值范围：** 1-1000 **默认取值：** 10
     * @param {number} [offset] **参数解释：** 查询偏移量，表示跳过多少个数据开始查询 **约束限制：** 不涉及 **取值范围：** 0-65535 **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listShareCacheGroups(listShareCacheGroupsRequest?: ListShareCacheGroupsRequest): Promise<ListShareCacheGroupsResponse> {
        const options = ParamCreater().listShareCacheGroups(listShareCacheGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询加速域名的特殊配置，当前支持查询备忘录信息。
     * - 单租户调用频率：15次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询加速域名的特殊配置
     * @param {string} domainName **参数解释：** 加速域名  **约束限制：** 仅支持查询已经在CDN添加成功的域名 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} [pageSize] **参数解释：** 每页加速域名的数量 **约束限制：** 不涉及 **取值范围：** 1-10000 **默认取值：** 30
     * @param {number} [pageNumber] **参数解释：** 查询的页码 **约束限制：** 不涉及 **取值范围：** 1-65535 **默认取值：** 1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSpecialConfiguration(listSpecialConfigurationRequest?: ListSpecialConfigurationRequest): Promise<ListSpecialConfigurationResponse> {
        const options = ParamCreater().listSpecialConfiguration(listSpecialConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * query subscription task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分页查询运营报表订阅任务
     * @param {number} [limit] - 每页显示的条目数量，默认值为5, 传入空或0时，会按默认处理
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset大于等于0，默认为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubscriptionTasks(listSubscriptionTasksRequest?: ListSubscriptionTasksRequest): Promise<ListSubscriptionTasksResponse> {
        const options = ParamCreater().listSubscriptionTasks(listSubscriptionTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改租户配置，当前仅支持开启OBS和SCM委托授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改租户配置
     * @param {AccountConfigModifyRequest} [accountConfigModifyRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyAccountInfo(modifyAccountInfoRequest?: ModifyAccountInfoRequest): Promise<ModifyAccountInfoResponse> {
        const options = ParamCreater().modifyAccountInfo(modifyAccountInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 设置用户计费模式。
     * 
     * - 服务区域仅支持mainland_china（国内）
     * 
     * - 计费模式仅支持设置flux（流量），v2及以上客户支持bw（带宽）
     * 
     * - 加速类型仅支持base（基础加速）
     * 
     * - 单租户调用频率：10次/min。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置用户计费模式
     * @param {SetChargeModesBody} setChargeModesBody 设置计费模式参数请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setChargeModes(setChargeModesRequest?: SetChargeModesRequest): Promise<SetChargeModesResponse> {
        const options = ParamCreater().setChargeModes(setChargeModesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 设置统计配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置统计配置
     * @param {SetStatsConfigBody} [setStatsConfigBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setStatsConfig(setStatsConfigRequest?: SetStatsConfigRequest): Promise<SetStatsConfigResponse> {
        const options = ParamCreater().setStatsConfig(setStatsConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域名模板应用记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名模板应用记录。
     * @param {string} [tmlId] **参数解释：** 域名模板ID，可以通过查询域名模板列表接口获取 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [tmlName] **参数解释：** 域名模板名称 **约束限制：** 不涉及 **取值范围：** - 1-100个字符 - 仅支持字母、数字、中文、下划线（_）、中横线（-） **默认取值：** 不涉及
     * @param {string} [operatorId] **参数解释：** 域名模板操作ID，可以通过本接口获取 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} [offset] **参数解释：** 查询的页码 **约束限制：** 不涉及 **取值范围：** 0-65535 **默认取值：** 0
     * @param {number} [limit] **参数解释：** 每页应用记录的数量 **约束限制：** 不涉及 **取值范围：** 1-10000 **默认取值：** 30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppliedTemplateRecord(showAppliedTemplateRecordRequest?: ShowAppliedTemplateRecordRequest): Promise<ShowAppliedTemplateRecordResponse> {
        const options = ParamCreater().showAppliedTemplateRecord(showAppliedTemplateRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询域名带宽峰值类数据。
     * 
     * - 支持查询90天内的数据。
     * 
     * - 查询时间跨度不能超过31天。
     * 
     * - 起始时间和结束时间，左闭右开。如查询2022-10-24 00:00:00 到 2022-10-25 00:00:00 的数据，表示取 [2022-10-24 00:00:00, 2022-10-25 00:00:00)的统计数据。
     * 
     * - 起始时间、结束时间必须传毫秒级时间戳，起始时间和结束时间必须同时指定。
     * 
     * - 流量类指标单位统一为Byte（字节）、带宽类指标单位统一为bit/s（比特/秒）、峰值类指标单位统一为bps（比特率），请求数类和状态码类指标单位统一为次数。用于查询指定域名、指定统计指标的明细数据。
     * 
     * - 单租户调用频率：2次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名带宽峰值类数据
     * @param {number} startTime 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名。如果域名在查询时间段内无数据，结果将不返回该域名的信息。
     * @param {string} calcType 查询类别，目前支持bw_95（95峰值带宽），bw_peak（日峰值月平均带宽），bw_95_average(95月平均带宽)
     * @param {string} [serviceArea] 服务区域：mainland_china(中国大陆)，outside_mainland_china(中国大陆境外)，默认为mainland_china，当查询回源类指标时该参数无效。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子账号调用接口时，该参数必传。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBandwidthCalc(showBandwidthCalcRequest?: ShowBandwidthCalcRequest): Promise<ShowBandwidthCalcResponse> {
        const options = ParamCreater().showBandwidthCalc(showBandwidthCalcRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有绑定HTTPS证书的域名信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有绑定HTTPS证书的域名信息
     * @param {number} [pageSize] 每页的数量，取值范围1-10000，不设值时默认值为30。
     * @param {number} [pageNumber] 查询的页码。取值范围1-65535，不设值时默认值为1。
     * @param {string} [domainName] 加速域名。
     * @param {string} [userDomainId] 域名所属用户的domain_id。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCertificatesHttpsInfo(showCertificatesHttpsInfoRequest?: ShowCertificatesHttpsInfoRequest): Promise<ShowCertificatesHttpsInfoResponse> {
        const options = ParamCreater().showCertificatesHttpsInfo(showCertificatesHttpsInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询用户计费模式。
     * 
     * - 服务区域仅支持mainland_china（国内，默认）和outside_mainland_china（海外）
     * 
     * - 计费模式状态支持active（已生效），upcoming（待生效）两种状态，默认为active(已生效)
     * 
     * - 加速类型仅支持base（基础加速）
     * 
     * - 单租户调用频率：5次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户计费模式
     * @param {string} productType 加速类型，base（基础加速）
     * @param {string} [status] 查询计费模式状态，active（已生效），upcoming（待生效），不传默认为active(已生效)
     * @param {string} [serviceArea] 服务区域，mainland_china（国内），outside_mainland_china（海外），不传默认为mainland_china(国内)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showChargeModes(showChargeModesRequest?: ShowChargeModesRequest): Promise<ShowChargeModesResponse> {
        const options = ParamCreater().showChargeModes(showChargeModesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * CDN查询域名的国家统计数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary CDN查询域名的国家统计数据
     * @param {string} action 动作名称，可选summary、detail。 - summary：查询汇总数据 - detail：查询数据详情。
     * @param {number} startTime 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名。如果域名在查询时间段内无数据，结果将不返回该域名的信息。
     * @param {string} statType - 网络资源消耗   - bw（带宽）   - flux（流量） - 访问情况   - req_num（请求总数） - HTTP状态码（组合指标）   - http_code_2xx(状态码汇总2xx)   - http_code_3xx(状态码汇总3xx)   - http_code_4xx(状态码汇总4xx)   - http_code_5xx(状态码汇总5xx)   - status_code_2xx(状态码详情2xx)   - status_code_3xx(状态码详情3xx)   - status_code_4xx(状态码详情4xx)   - status_code_5xx(状态码详情5xx)
     * @param {string} [country] - 国家&amp;地区编码，多个以英文逗号分隔，all表示全部，取值见附录 - 访问运营商统计数据时不能填写 - 访问top_url数据时不能填写 - 访问区域情况数据时只能填写cn(中国)
     * @param {string} [groupBy] 数据分组方式，多个以英文逗号分隔，可选domain（域名）、country（国家）、province（省份，仅国家为中国时有效）、isp（区域运营商），默认不分组
     * @param {string} [userDomainId] 域名所属用户的domain_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainCountryStat(showDomainCountryStatRequest?: ShowDomainCountryStatRequest): Promise<ShowDomainCountryStatResponse> {
        const options = ParamCreater().showDomainCountryStat(showDomainCountryStatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 加速域名详情信息接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询加速域名详情
     * @param {string} domainName 加速域名名称。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainDetailByName(showDomainDetailByNameRequest?: ShowDomainDetailByNameRequest): Promise<ShowDomainDetailByNameResponse> {
        const options = ParamCreater().showDomainDetailByName(showDomainDetailByNameRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域名配置接口，支持查询业务类型、服务范围、备注、IPv6开关、回源方式、回源URL改写、高级回源、Range回源、回源跟随、回源是否校验Etag、回源超时时间、回源请求头、HTTPS配置、TLS版本配置、强制跳转、HSTS、HTTP/2、OCSP Stapling、QUIC、缓存规则、状态码缓存时间、防盗链、IP黑白名单、 Use-Agent黑白名单、URL鉴权配置、远程鉴权配置、IP访问限频、HTTP header配置、自定义错误页面配置、智能压缩、请求限速配置、WebSocket配置、视频拖拽、回源SNI、访问URL重写、浏览器缓存过期时间、区域访问控制。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名配置接口
     * @param {string} domainName 加速域名。
     * @param {string} [enterpriseProjectId] 企业项目ID， all：所有项目。
     * @param {string} [showSpecialConfigs] 取值为auth_key，用来查询鉴权KEY和鉴权备KEY的值。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainFullConfig(showDomainFullConfigRequest?: ShowDomainFullConfigRequest): Promise<ShowDomainFullConfigResponse> {
        const options = ParamCreater().showDomainFullConfig(showDomainFullConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 支持查询90天内的数据。
     * 
     * - 支持多指标同时查询，不超过5个。
     * 
     * - 最多同时指定20个域名。
     * 
     * - 起始时间和结束时间需要同时指定，左闭右开，毫秒级时间戳，且时间点必须为与查询时间间隔参数匹配的整时刻点。比如查询时间间隔为5分钟时，起始时间和结束时间必须为5分钟整时刻点，如：0分、5分、10分、15分等，如果时间点与时间间隔不匹配，返回数据可能与预期不一致。统一用开始时间表示一个时间段，如：2019-01-24 20:15:00 表示取 [20:15:00, 20:20:00)的统计数据，且左闭右开。
     * 
     * - action取值：location_detail,location_summary
     * 
     * - 流量类指标单位统一为Byte（字节）、带宽类指标单位统一为bit/s（比特/秒）、请求数类和状态码类指标单位统一为次数。用于查询指定域名、指定统计指标的区域运营商明细数据。
     * 
     * - 单租户调用频率：15次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按区域运营商查询域名统计数据
     * @param {string} action 动作名称，可选location_summary、location_detail。 - location_summary：查询汇总数据 - location_detail：查询数据详情。
     * @param {number} startTime 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名。如果域名在查询时间段内无数据，结果将不返回该域名的信息。
     * @param {string} statType - 网络资源消耗   - bw（带宽）   - flux（流量） - 访问情况   - req_num（请求总数） - HTTP状态码（组合指标）   - http_code_2xx(状态码汇总2xx)   - http_code_3xx(状态码汇总3xx)   - http_code_4xx(状态码汇总4xx)   - http_code_5xx(状态码汇总5xx)   - status_code_2xx(状态码详情2xx)   - status_code_3xx(状态码详情3xx)   - status_code_4xx(状态码详情4xx)   - status_code_5xx(状态码详情5xx)
     * @param {number} [interval] 查询时间间隔，单位：秒，取值说明： - 300(5分钟)：最大查询跨度2天 - 3600(1小时)：最大查询跨度7天 - 86400(1天)：最大查询跨度31天 - 如果不传，默认取对应时间跨度的最小间隔。
     * @param {string} [country] - 国家&amp;地区编码，多个以英文逗号分隔，all表示全部，取值见附录 - 访问运营商统计数据时不能填写 - 访问top_url数据时不能填写 - 访问区域情况数据时只能填写cn(中国)
     * @param {string} [province] 省份编码，当country为cn（中国）时有效，多个以英文逗号分隔，all表示全部，取值见附录
     * @param {string} [isp] 运营商编码，多个以英文逗号分隔，all表示全部，取值见附录
     * @param {string} [groupBy] 数据分组方式，多个以英文逗号分隔，可选domain（域名）、country（国家）、province（省份，仅国家为中国时有效）、isp（区域运营商），默认不分组
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子账号调用接口时，该参数必传。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainLocationStats(showDomainLocationStatsRequest?: ShowDomainLocationStatsRequest): Promise<ShowDomainLocationStatsResponse> {
        const options = ParamCreater().showDomainLocationStats(showDomainLocationStatsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 支持查询90天内的数据。
     * 
     * - 支持多指标同时查询，不超过5个。
     * 
     * - 最多同时指定20个域名。
     * 
     * - 起始时间和结束时间需要同时指定，左闭右开，毫秒级时间戳，且时间点必须为与查询时间间隔参数匹配的整时刻点。比如查询时间间隔为5分钟时，起始时间和结束时间必须为5分钟整时刻点，如：0分、5分、10分、15分等，如果时间点与时间间隔不匹配，返回数据可能与预期不一致。统一用开始时间表示一个时间段，如：2019-01-24 20:15:00 表示取 [20:15:00, 20:20:00)的统计数据，且左闭右开。
     * 
     * - action取值：detail,summary
     * 
     * - 流量类指标单位统一为Byte（字节）、带宽类指标单位统一为bit/s（比特/秒）、请求数类和状态码类指标单位统一为次数。用于查询指定域名、指定统计指标的明细数据。
     * 
     * - 单租户调用频率：15次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名统计数据
     * @param {string} action 动作名称，可选summary、detail。 - summary：查询汇总数据 - detail：查询数据详情。
     * @param {number} startTime 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名。如果域名在查询时间段内无数据，结果将不返回该域名的信息。
     * @param {string} statType - 网络资源消耗：   - bw（带宽）   - flux（流量）   - bs_bw（回源带宽）   - bs_flux（回源流量） - 访问情况   - req_num（请求总数）   - hit_num（请求命中次数）   - bs_num（回源总数）   - bs_fail_num（回源失败数）   - hit_flux（命中流量） - HTTP状态码（组合指标）   - http_code_2xx（状态码汇总2xx）   - http_code_3xx（状态码汇总3xx）   - http_code_4xx（状态码汇总4xx）   - http_code_5xx（状态码汇总5xx）   - bs_http_code_2xx（回源状态码汇总2xx）   - bs_http_code_3xx（回源状态码汇总3xx）   - bs_http_code_4xx（回源状态码汇总4xx）   - bs_http_code_5xx（回源状态码汇总5xx）   - status_code_2xx（状态码详情2xx）   - status_code_3xx（状态码详情3xx）   - status_code_4xx（状态码详情4xx）   - status_code_5xx（状态码详情5xx）   - bs_status_code_2xx（回源状态码详情2xx）   - bs_status_code_3xx（回源状态码详情3xx）   - bs_status_code_4xx（回源状态码详情4xx）   - bs_status_code_5xx（回源状态码详情5xx）   - status_code和bs_status_code不能一起查询
     * @param {number} [interval] 查询时间间隔，单位：秒，取值说明： - 300(5分钟)：最大查询跨度2天 - 3600(1小时)：最大查询跨度7天 - 86400(1天)：最大查询跨度31天 - 如果不传，默认取对应时间跨度的最小间隔。
     * @param {string} [groupBy] 数据分组方式，可选domain，默认不分组
     * @param {string} [serviceArea] 服务区域：mainland_china(中国大陆)，outside_mainland_china(中国大陆境外)，默认为mainland_china，当查询回源类指标时该参数无效。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子账号调用接口时，该参数必传。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainStats(showDomainStatsRequest?: ShowDomainStatsRequest): Promise<ShowDomainStatsResponse> {
        const options = ParamCreater().showDomainStats(showDomainStatsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域名模板列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名模板列表
     * @param {string} [tmlName] **参数解释：** 域名模板名称 **约束限制：** 不涉及 **取值范围：** - 1-100个字符 - 仅支持字母、数字、中文、下划线（_）、中横线（-） **默认取值：** 不涉及
     * @param {string} [tmlId] **参数解释：** 域名模板ID，可以通过本接口获取 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} [tmlType] **参数解释：** 域名模板类型 **约束限制：** 不涉及 **取值范围：** - 1: 系统预置模板 - 2: 租户自定义模板 **默认取值：** 不涉及
     * @param {string} [limit] **参数解释：** 分页大小 **约束限制：** 不涉及 **取值范围：** 1-10000 **默认取值：** 30
     * @param {string} [offset] **参数解释：** 查询的页码 **约束限制：** 不涉及 **取值范围：** 0-65535 **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainTemplate(showDomainTemplateRequest?: ShowDomainTemplateRequest): Promise<ShowDomainTemplateResponse> {
        const options = ParamCreater().showDomainTemplate(showDomainTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询刷新预热任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询刷新预热任务详情
     * @param {string} historyTasksId 刷新任务ID。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {number} [pageSize] 刷新预热的urls所显示单页最大数量，取值范围为1-10000。page_size和page_number必须同时传值。默认值30。
     * @param {number} [pageNumber] 刷新预热的urls当前查询为第几页，取值范围为1-65535。默认值1。
     * @param {string} [status] url的状态 processing 处理中，succeed 完成，failed 失败，waiting 等待，refreshing 刷新中，preheating 预热中。
     * @param {string} [url] url的地址。
     * @param {number} [createTime] 刷新预热任务的创建时间。不传参默认为查询7天内的任务。最长可查询15天内数据。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHistoryTaskDetails(showHistoryTaskDetailsRequest?: ShowHistoryTaskDetailsRequest): Promise<ShowHistoryTaskDetailsResponse> {
        const options = ParamCreater().showHistoryTaskDetails(showHistoryTaskDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询刷新预热任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询刷新预热任务
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {number} [pageSize] 单页最大数量，取值范围为1-10000。page_size和page_number必须同时传值。默认值30。
     * @param {number} [pageNumber] 当前查询第几页，取值范围为1-65535。默认值1。
     * @param {'task_inprocess' | 'task_done'} [status] 任务状态。 task_inprocess 表示任务处理中，task_done表示任务完成。
     * @param {number} [startDate] 查询起始时间，相对于UTC 1970-01-01到当前时间相隔的毫秒数。
     * @param {number} [endDate] 查询结束时间，相对于UTC 1970-01-01到当前时间相隔的毫秒数。
     * @param {string} [orderField] 用来排序的字段，支持的字段有“task_type”：任务的类型，“total”：url总数，“processing”：处理中的url个数， “succeed”：成功处理的url个数，“failed”：处理失败的url个数，“create_time”：任务的创建时间。order_field和order_type必须同时传值，否则使用默认值\&quot;create_time\&quot; 和 \&quot;desc\&quot;：降序。
     * @param {string} [orderType] desc：降序，或者asc：升序。默认值desc。
     * @param {'file' | 'directory'} [fileType] 默认是文件file。file：文件,directory：目录。
     * @param {'refresh' | 'preheating'} [taskType] 任务类型，refresh：刷新任务；preheating：预热任务
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHistoryTasks(showHistoryTasksRequest?: ShowHistoryTasksRequest): Promise<ShowHistoryTasksResponse> {
        const options = ParamCreater().showHistoryTasks(showHistoryTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询IP归属信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IP归属信息
     * @param {string} ips IP地址列表，以“，”分割，最多20个。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIpInfo(showIpInfoRequest?: ShowIpInfoRequest): Promise<ShowIpInfoResponse> {
        const options = ParamCreater().showIpInfo(showIpInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询日志下载链接，支持查询30天内的日志信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 日志查询
     * @param {string} domainName 只支持单个域名，如：www.test1.com。
     * @param {number} [startTime] 查询开始时间，时间格式为整点毫秒时间戳，此参数传空值时默认为当天0点。
     * @param {number} [endTime] 查询结束时间（不包含结束时间），时间格式为整点毫秒时间戳，与开始时间的最大跨度为30天，此参数传空值时默认为开始时间加1天。
     * @param {number} [pageSize] 单页最大数量，取值范围为1-10000，默认值：10。
     * @param {number} [pageNumber] 当前查询第几页，取值范围为1-65535，默认值：1。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLogs(showLogsRequest?: ShowLogsRequest): Promise<ShowLogsResponse> {
        const options = ParamCreater().showLogs(showLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前用户域名、刷新文件、刷新目录和预热的配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuota(showQuotaRequest?: ShowQuotaRequest): Promise<ShowQuotaResponse> {
        const options = ParamCreater().showQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询CDN特殊用户接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CDN特殊用户接口
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSpecialUser(showSpecialUserRequest?: ShowSpecialUserRequest): Promise<ShowSpecialUserResponse> {
        const options = ParamCreater().showSpecialUser();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 配置类型：目前支持，
     * - 0：热点统计。
     * - 1：ces上报。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询统计配置
     * @param {number} configType - 配置类型 - 目前支持0：热点统计，1：ces上报
     * @param {number} [limit] **参数解释：** 分页查询每页的数量 **约束限制：** 不涉及 **取值范围：** 1-1000 **默认取值：** 10
     * @param {number} [offset] **参数解释：** 查询偏移量，表示跳过多少个数据开始查询 **约束限制：** 不涉及 **取值范围：** 0-65535 **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStatsConfigs(showStatsConfigsRequest?: ShowStatsConfigsRequest): Promise<ShowStatsConfigsResponse> {
        const options = ParamCreater().showStatsConfigs(showStatsConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于查询资源标签列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签列表配置接口
     * @param {string} resourceId 资源id。  &gt; 域名ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTags(showTagsRequest?: ShowTagsRequest): Promise<ShowTagsResponse> {
        const options = ParamCreater().showTags(showTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询TOP域名。
     * 
     * - 支持查询90天内的数据。
     * 
     * - 查询时间跨度不能超过1天。
     * 
     * - 起始时间和结束时间，左闭右开，必须同时指定。如查询2022-10-24 00:00:00 到 2022-10-25 00:00:00 的数据，表示取 [2022-10-24 00:00:00, 2022-10-25 00:00:00)的统计数据。
     * 
     * - 起始时间、结束时间必须传整点毫秒级时间戳。
     * 
     * - 流量类指标单位统一为Byte（字节）、带宽类指标单位统一为bit/s（比特/秒）、请求数类和状态码类指标单位统一为次数。用于查询指定域名、指定统计指标的明细数据。
     * 
     * - 单租户调用频率：5次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询TOP域名
     * @param {number} startTime - 查询起始时间戳，时间戳应设置需为整点时间戳，设置方式如下： - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime - 查询结束时间戳，时间戳应设置需为整点时间戳，设置方式如下： - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} statType - 统计类型 - 目前只支持bw（带宽），flux（流量），req_num（请求总数）
     * @param {string} [serviceArea] 服务区域：mainland_china(中国大陆)，outside_mainland_china(中国大陆境外)，默认为mainland_china，当查询回源类指标时该参数无效。
     * @param {number} [limit] top域名查询数量,默认为20,最大为500，最小为0
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子账号调用接口时，该参数必传。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTopDomainNames(showTopDomainNamesRequest?: ShowTopDomainNamesRequest): Promise<ShowTopDomainNamesResponse> {
        const options = ParamCreater().showTopDomainNames(showTopDomainNamesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询TOP100 URL明细。
     * 
     * - 支持查询90天内的数据。
     * 
     * - 查询跨度不能超过31天。
     * 
     * - 起始时间和结束时间，左闭右开，需要同时指定。如查询2021-10-24 00:00:00 到 2021-10-25 00:00:00 的数据，表示取 [2021-10-24 00:00:00, 2021-10-25 00:00:00)的统计数据。
     * 
     * - 开始时间、结束时间必须传毫秒级时间戳，且必须为凌晨0点整时刻点，如果传的不是凌晨0点整时刻点，返回数据可能与预期不一致。
     * 
     * - 流量类指标单位统一为Byte（字节）、请求数类指标单位统一为次数。用于查询指定域名、指定统计指标的明细数据。
     * 
     * - 单租户调用频率：5次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询TOP100 URL明细
     * @param {number} startTime 查询起始时间戳，只能传0点毫秒时间戳
     * @param {number} endTime 查询结束时间戳，只能传0点毫秒时间戳
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名。如果域名在查询时间段内无数据，结果将不返回该域名的信息。
     * @param {string} statType - 参数类型支持：flux(流量),req_num(请求数)
     * @param {string} [serviceArea] 服务区域：mainland_china(大陆)，outside_mainland_china(海外)，默认为global(全球)
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子账号调用接口时，该参数必传。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTopUrl(showTopUrlRequest?: ShowTopUrlRequest): Promise<ShowTopUrlResponse> {
        const options = ParamCreater().showTopUrl(showTopUrlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询刷新预热URL记录。如需此接口，请提交工单开通。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询刷新预热URL记录
     * @param {number} [startTime] 查询起始时间戳（毫秒），不传默认当天00:00，需与结束时间戳同时指定，时间跨度不能超过24小时。
     * @param {number} [endTime] 查询结束时间戳（毫秒），不传默认次日00:00，需与开始时间戳同时指定，时间跨度不能超过24小时。
     * @param {number} [offset] 偏移量：特定数据字段与起始数据字段位置的距离，默认为0。
     * @param {number} [limit] 单次查询数据条数，上限为100，默认为10。
     * @param {string} [url] 刷新预热url。
     * @param {string} [taskType] 任务类型，REFRESH：刷新任务；PREHEATING：预热任务。
     * @param {string} [status] url状态，状态类型：processing：处理中；succeed：完成；failed：失败；waiting：等待；refreshing：刷新中; preheating : 预热中。
     * @param {string} [fileType] 文件类型，file:文件;directory:目录。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUrlTaskInfo(showUrlTaskInfoRequest?: ShowUrlTaskInfoRequest): Promise<ShowUrlTaskInfoResponse> {
        const options = ParamCreater().showUrlTaskInfo(showUrlTaskInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于查询域名归属校验信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名归属校验信息
     * @param {string} domainName 域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVerifyDomainOwnerInfo(showVerifyDomainOwnerInfoRequest?: ShowVerifyDomainOwnerInfoRequest): Promise<ShowVerifyDomainOwnerInfoResponse> {
        const options = ParamCreater().showVerifyDomainOwnerInfo(showVerifyDomainOwnerInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改域名配置接口，支持修改业务类型、服务范围、备注、IPv6开关、回源方式、回源URL改写、高级回源、Range回源、回源跟随、回源是否校验Etag、回源超时时间、回源请求头、HTTPS配置、TLS版本配置、强制跳转、HSTS、HTTP/2、OCSP Stapling、QUIC、缓存规则、状态码缓存时间、防盗链、IP黑白名单、Use-Agent黑白名单、URL鉴权配置、远程鉴权配置、IP访问限频、HTTP header配置、自定义错误页面配置、智能压缩、请求限速配置、WebSocket配置、视频拖拽、回源SNI、访问URL重写、浏览器缓存过期时间、区域访问控制。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改域名全量配置接口
     * @param {string} domainName 加速域名。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。  &gt; 当使用子帐号调用接口时，该参数必传。 您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {ModifyDomainConfigRequestBody} [modifyDomainConfigRequestBody] 域名配置。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainFullConfig(updateDomainFullConfigRequest?: UpdateDomainFullConfigRequest): Promise<UpdateDomainFullConfigResponse> {
        const options = ParamCreater().updateDomainFullConfig(updateDomainFullConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 一个证书配置多个域名，设置域名强制https回源参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 一个证书批量设置多个域名
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {UpdateDomainMultiCertificatesRequestBody} [updateDomainMultiCertificatesRequestBody] https配置。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainMultiCertificates(updateDomainMultiCertificatesRequest?: UpdateDomainMultiCertificatesRequest): Promise<UpdateDomainMultiCertificatesResponse> {
        const options = ParamCreater().updateDomainMultiCertificates(updateDomainMultiCertificatesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改域名模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改域名模板。
     * @param {string} tmlId **参数解释：** 域名模板ID，可以通过查询域名模板列表接口获取 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {CreateTemplateRequestBody} [createTemplateRequestBody] 模板配置。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainTemplate(updateDomainTemplateRequest?: UpdateDomainTemplateRequest): Promise<UpdateDomainTemplateResponse> {
        const options = ParamCreater().updateDomainTemplate(updateDomainTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 全量更新规则引擎规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 全量更新规则引擎规则
     * @param {string} domainName **参数解释：** 加速域名 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {FullUpdateRulesRequest} fullUpdateRulesRequest **参数解释：** 全量更新规则配置 **约束限制：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFullRule(updateFullRuleRequest?: UpdateFullRuleRequest): Promise<UpdateFullRuleResponse> {
        const options = ParamCreater().updateFullRule(updateFullRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改私有桶开启关闭状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改私有桶开启关闭状态
     * @param {string} domainId 加速域名id。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {UpdatePrivateBucketAccessBody} [updatePrivateBucketAccessBody] 桶开启关闭状态（true：开启；false：关闭），默认为关闭
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePrivateBucketAccess(updatePrivateBucketAccessRequest?: UpdatePrivateBucketAccessRequest): Promise<UpdatePrivateBucketAccessResponse> {
        const options = ParamCreater().updatePrivateBucketAccess(updatePrivateBucketAccessRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新规则引擎规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新规则引擎规则
     * @param {string} domainName **参数解释：** 加速域名 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} ruleId **参数解释：** 规则ID，可以通过查询规则引擎列表接口获取 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {UpdateRuleRequest} updateRuleRequest **参数解释：** 规则配置内容 **约束限制：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRuleNew(updateRuleNewRequest?: UpdateRuleNewRequest): Promise<UpdateRuleNewResponse> {
        const options = ParamCreater().updateRuleNew(updateRuleNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新共享缓存组。
     * - 单租户调用频率：5次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新共享缓存组
     * @param {string} id **参数解释：** 共享缓存组ID，可通过查询共享缓存组列表接口获取 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {UpdateShareCacheGroupsRequstBody} [updateShareCacheGroupsRequstBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateShareCacheGroups(updateShareCacheGroupsRequest?: UpdateShareCacheGroupsRequest): Promise<UpdateShareCacheGroupsResponse> {
        const options = ParamCreater().updateShareCacheGroups(updateShareCacheGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * modify subscription task
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改运营报表订阅任务
     * @param {number} id 订阅任务id
     * @param {SubscriptionTaskVo} [subscriptionTaskVo] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubscriptionTask(updateSubscriptionTaskRequest?: UpdateSubscriptionTaskRequest): Promise<UpdateSubscriptionTaskResponse> {
        const options = ParamCreater().updateSubscriptionTask(updateSubscriptionTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于域名归属校验
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 域名归属校验
     * @param {string} domainName 域名
     * @param {VerifyDomainOwnerRequestBody} [verifyDomainOwnerRequestBody] 域名归属校验
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public verifyDomainOwner(verifyDomainOwnerRequest?: VerifyDomainOwnerRequest): Promise<VerifyDomainOwnerResponse> {
        const options = ParamCreater().verifyDomainOwner(verifyDomainOwnerRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 应用域名模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        applyDomainTemplate(applyDomainTemplateRequest?: ApplyDomainTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/configuration/templates/{tml_id}/apply",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let tmlId;

            if (applyDomainTemplateRequest !== null && applyDomainTemplateRequest !== undefined) {
                if (applyDomainTemplateRequest instanceof ApplyDomainTemplateRequest) {
                    tmlId = applyDomainTemplateRequest.tmlId;
                    body = applyDomainTemplateRequest.body
                } else {
                    tmlId = applyDomainTemplateRequest['tml_id'];
                    body = applyDomainTemplateRequest['body'];
                }
            }

        
            if (tmlId === null || tmlId === undefined) {
            throw new RequiredError('tmlId','Required parameter tmlId was null or undefined when calling applyDomainTemplate.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'tml_id': tmlId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量域名复制接口。
         *  &gt; 将某个加速域名的配置批量复制到其他域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCopyDomain(batchCopyDomainRequest?: BatchCopyDomainRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/configuration/domains/batch-copy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchCopyDomainRequest !== null && batchCopyDomainRequest !== undefined) {
                if (batchCopyDomainRequest instanceof BatchCopyDomainRequest) {
                    body = batchCopyDomainRequest.body
                } else {
                    body = batchCopyDomainRequest['body'];
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
         * 用于删除资源标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteTags(batchDeleteTagsRequest?: BatchDeleteTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/configuration/tags/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteTagsRequest !== null && batchDeleteTagsRequest !== undefined) {
                if (batchDeleteTagsRequest instanceof BatchDeleteTagsRequest) {
                    body = batchDeleteTagsRequest.body
                } else {
                    body = batchDeleteTagsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量更新规则状态及优先级。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateRuleStatus(batchUpdateRuleStatusRequest?: BatchUpdateRuleStatusRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/configuration/domains/{domain_name}/rules/batch-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainName;

            if (batchUpdateRuleStatusRequest !== null && batchUpdateRuleStatusRequest !== undefined) {
                if (batchUpdateRuleStatusRequest instanceof BatchUpdateRuleStatusRequest) {
                    domainName = batchUpdateRuleStatusRequest.domainName;
                    body = batchUpdateRuleStatusRequest.body
                } else {
                    domainName = batchUpdateRuleStatusRequest['domain_name'];
                    body = batchUpdateRuleStatusRequest['body'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling batchUpdateRuleStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_name': domainName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建封禁/解禁URL任务，如需使用本接口，请提交工单申请。
         * - 单租户调用频率：10次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAccessControlTask(createAccessControlTaskRequest?: CreateAccessControlTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/content/access-control-urls/{action}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let action;

            if (createAccessControlTaskRequest !== null && createAccessControlTaskRequest !== undefined) {
                if (createAccessControlTaskRequest instanceof CreateAccessControlTaskRequest) {
                    action = createAccessControlTaskRequest.action;
                    body = createAccessControlTaskRequest.body
                } else {
                    action = createAccessControlTaskRequest['action'];
                    body = createAccessControlTaskRequest['body'];
                }
            }

        
            if (action === null || action === undefined) {
            throw new RequiredError('action','Required parameter action was null or undefined when calling createAccessControlTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'action': action, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建加速域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDomain(createDomainRequest?: CreateDomainRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDomainRequest !== null && createDomainRequest !== undefined) {
                if (createDomainRequest instanceof CreateDomainRequest) {
                    body = createDomainRequest.body
                } else {
                    body = createDomainRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将存量加速域名的配置复制给新添加的域名。
         * - 已开通CDN服务。
         * - 如果加速域名的服务范围包含中国大陆，加速域名需要已完成备案。
         * - 单租户调用频率：20次/min。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDomainByDuplicate(createDomainByDuplicateRequest?: CreateDomainByDuplicateRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/configuration/domains/duplicate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDomainByDuplicateRequest !== null && createDomainByDuplicateRequest !== undefined) {
                if (createDomainByDuplicateRequest instanceof CreateDomainByDuplicateRequest) {
                    body = createDomainByDuplicateRequest.body
                } else {
                    body = createDomainByDuplicateRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建域名模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDomainTemplate(createDomainTemplateRequest?: CreateDomainTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/configuration/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDomainTemplateRequest !== null && createDomainTemplateRequest !== undefined) {
                if (createDomainTemplateRequest instanceof CreateDomainTemplateRequest) {
                    body = createDomainTemplateRequest.body
                } else {
                    body = createDomainTemplateRequest['body'];
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
         * 创建统计数据异步导出任务，目前支持话单数据导出、top url导出
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createExportTask(createExportTaskRequest?: CreateExportTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/cdn/statistics/export-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createExportTaskRequest !== null && createExportTaskRequest !== undefined) {
                if (createExportTaskRequest instanceof CreateExportTaskRequest) {
                    body = createExportTaskRequest.body
                } else {
                    body = createExportTaskRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建预热任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPreheatingTasks(createPreheatingTasksRequest?: CreatePreheatingTasksRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/content/preheating-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (createPreheatingTasksRequest !== null && createPreheatingTasksRequest !== undefined) {
                if (createPreheatingTasksRequest instanceof CreatePreheatingTasksRequest) {
                    body = createPreheatingTasksRequest.body
                    enterpriseProjectId = createPreheatingTasksRequest.enterpriseProjectId;
                } else {
                    body = createPreheatingTasksRequest['body'];
                    enterpriseProjectId = createPreheatingTasksRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建刷新缓存任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRefreshTasks(createRefreshTasksRequest?: CreateRefreshTasksRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/content/refresh-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (createRefreshTasksRequest !== null && createRefreshTasksRequest !== undefined) {
                if (createRefreshTasksRequest instanceof CreateRefreshTasksRequest) {
                    body = createRefreshTasksRequest.body
                    enterpriseProjectId = createRefreshTasksRequest.enterpriseProjectId;
                } else {
                    body = createRefreshTasksRequest['body'];
                    enterpriseProjectId = createRefreshTasksRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 规则引擎功能通过图形化的方式实现各种规则配置，实现更加灵活、细粒度的规则配置。通过限制触发条件，控制当前配置生效的资源范围，满足多种场景的配置需求。
         * - 请提交工单开通规则引擎功能后再使用当前接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRuleNew(createRuleNewRequest?: CreateRuleNewRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/configuration/domains/{domain_name}/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainName;

            if (createRuleNewRequest !== null && createRuleNewRequest !== undefined) {
                if (createRuleNewRequest instanceof CreateRuleNewRequest) {
                    domainName = createRuleNewRequest.domainName;
                    body = createRuleNewRequest.body
                } else {
                    domainName = createRuleNewRequest['domain_name'];
                    body = createRuleNewRequest['body'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling createRuleNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_name': domainName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 配置共享缓存组，将一个域名设置为主域名，组内其他域名共享该域名的缓存，提高缓存命中率。
         * - 只有缓存规则中“URL参数”的配置为“忽略参数”或者“不忽略参数”的域名才能加入共享缓存组。
         * - 每个账号最多配置500个共享缓存组。
         * - 单租户调用频率：5次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createShareCacheGroups(createShareCacheGroupsRequest?: CreateShareCacheGroupsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/configuration/share-cache-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createShareCacheGroupsRequest !== null && createShareCacheGroupsRequest !== undefined) {
                if (createShareCacheGroupsRequest instanceof CreateShareCacheGroupsRequest) {
                    body = createShareCacheGroupsRequest.body
                } else {
                    body = createShareCacheGroupsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * create subscription task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubscriptionTask(createSubscriptionTaskRequest?: CreateSubscriptionTaskRequest) {
            const options = {
                method: "POST",
                url: "/v1/cdn/statistics/subscription-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSubscriptionTaskRequest !== null && createSubscriptionTaskRequest !== undefined) {
                if (createSubscriptionTaskRequest instanceof CreateSubscriptionTaskRequest) {
                    body = createSubscriptionTaskRequest.body
                } else {
                    body = createSubscriptionTaskRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于创建资源标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTags(createTagsRequest?: CreateTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/configuration/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTagsRequest !== null && createTagsRequest !== undefined) {
                if (createTagsRequest instanceof CreateTagsRequest) {
                    body = createTagsRequest.body
                } else {
                    body = createTagsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除加速域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDomain(deleteDomainRequest?: DeleteDomainRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/cdn/domains/{domain_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (deleteDomainRequest !== null && deleteDomainRequest !== undefined) {
                if (deleteDomainRequest instanceof DeleteDomainRequest) {
                    domainId = deleteDomainRequest.domainId;
                    enterpriseProjectId = deleteDomainRequest.enterpriseProjectId;
                } else {
                    domainId = deleteDomainRequest['domain_id'];
                    enterpriseProjectId = deleteDomainRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling deleteDomain.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除域名模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDomainTemplate(deleteDomainTemplateRequest?: DeleteDomainTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/cdn/configuration/templates/{tml_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let tmlId;

            if (deleteDomainTemplateRequest !== null && deleteDomainTemplateRequest !== undefined) {
                if (deleteDomainTemplateRequest instanceof DeleteDomainTemplateRequest) {
                    tmlId = deleteDomainTemplateRequest.tmlId;
                } else {
                    tmlId = deleteDomainTemplateRequest['tml_id'];
                }
            }

        
            if (tmlId === null || tmlId === undefined) {
            throw new RequiredError('tmlId','Required parameter tmlId was null or undefined when calling deleteDomainTemplate.');
            }

            options.pathParams = { 'tml_id': tmlId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除规则引擎规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRuleNew(deleteRuleNewRequest?: DeleteRuleNewRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/cdn/configuration/domains/{domain_name}/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainName;
            
            let ruleId;

            if (deleteRuleNewRequest !== null && deleteRuleNewRequest !== undefined) {
                if (deleteRuleNewRequest instanceof DeleteRuleNewRequest) {
                    domainName = deleteRuleNewRequest.domainName;
                    ruleId = deleteRuleNewRequest.ruleId;
                } else {
                    domainName = deleteRuleNewRequest['domain_name'];
                    ruleId = deleteRuleNewRequest['rule_id'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling deleteRuleNew.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteRuleNew.');
            }

            options.pathParams = { 'domain_name': domainName,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除新共享缓存组。
         * - 共享缓存组内不包含关联域名时才可以删除。
         * - 单租户调用频率：5次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteShareCacheGroups(deleteShareCacheGroupsRequest?: DeleteShareCacheGroupsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/cdn/configuration/share-cache-groups/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteShareCacheGroupsRequest !== null && deleteShareCacheGroupsRequest !== undefined) {
                if (deleteShareCacheGroupsRequest instanceof DeleteShareCacheGroupsRequest) {
                    id = deleteShareCacheGroupsRequest.id;
                } else {
                    id = deleteShareCacheGroupsRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteShareCacheGroups.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * delete subscription task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubscriptionTask(deleteSubscriptionTaskRequest?: DeleteSubscriptionTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/cdn/statistics/subscription-tasks/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteSubscriptionTaskRequest !== null && deleteSubscriptionTaskRequest !== undefined) {
                if (deleteSubscriptionTaskRequest instanceof DeleteSubscriptionTaskRequest) {
                    id = deleteSubscriptionTaskRequest.id;
                } else {
                    id = deleteSubscriptionTaskRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteSubscriptionTask.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停用加速域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableDomain(disableDomainRequest?: DisableDomainRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/domains/{domain_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (disableDomainRequest !== null && disableDomainRequest !== undefined) {
                if (disableDomainRequest instanceof DisableDomainRequest) {
                    domainId = disableDomainRequest.domainId;
                    enterpriseProjectId = disableDomainRequest.enterpriseProjectId;
                } else {
                    domainId = disableDomainRequest['domain_id'];
                    enterpriseProjectId = disableDomainRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling disableDomain.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 下载区域运营商指标数据表格文件。
         * 
         * - 支持下载90天内的指标数据表格。
         * 
         * - 时间跨度不能超过31天。
         * 
         * - 起始时间和结束时间，左闭右开。如时间跨度为2022-10-24 00:00:00 到 2022-10-25 00:00:00，表示取 [2022-10-24 00:00:00, 2022-10-25 00:00:00)的统计数据。
         * 
         * - 起始时间、结束时间必须传毫秒级时间戳，起始时间和结束时间必须同时指定。
         * 
         * - 单租户调用频率：10次/min。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadRegionCarrierExcel(downloadRegionCarrierExcelRequest?: DownloadRegionCarrierExcelRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/region-carrier-excel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let excelType;
            
            let interval;
            
            let country;
            
            let excelLanguage;
            
            let enterpriseProjectId;
            
            let region;
            
            let carrier;

            if (downloadRegionCarrierExcelRequest !== null && downloadRegionCarrierExcelRequest !== undefined) {
                if (downloadRegionCarrierExcelRequest instanceof DownloadRegionCarrierExcelRequest) {
                    startTime = downloadRegionCarrierExcelRequest.startTime;
                    endTime = downloadRegionCarrierExcelRequest.endTime;
                    domainName = downloadRegionCarrierExcelRequest.domainName;
                    excelType = downloadRegionCarrierExcelRequest.excelType;
                    interval = downloadRegionCarrierExcelRequest.interval;
                    country = downloadRegionCarrierExcelRequest.country;
                    excelLanguage = downloadRegionCarrierExcelRequest.excelLanguage;
                    enterpriseProjectId = downloadRegionCarrierExcelRequest.enterpriseProjectId;
                    region = downloadRegionCarrierExcelRequest.region;
                    carrier = downloadRegionCarrierExcelRequest.carrier;
                } else {
                    startTime = downloadRegionCarrierExcelRequest['start_time'];
                    endTime = downloadRegionCarrierExcelRequest['end_time'];
                    domainName = downloadRegionCarrierExcelRequest['domain_name'];
                    excelType = downloadRegionCarrierExcelRequest['excel_type'];
                    interval = downloadRegionCarrierExcelRequest['interval'];
                    country = downloadRegionCarrierExcelRequest['country'];
                    excelLanguage = downloadRegionCarrierExcelRequest['excel_language'];
                    enterpriseProjectId = downloadRegionCarrierExcelRequest['enterprise_project_id'];
                    region = downloadRegionCarrierExcelRequest['region'];
                    carrier = downloadRegionCarrierExcelRequest['carrier'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling downloadRegionCarrierExcel.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling downloadRegionCarrierExcel.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling downloadRegionCarrierExcel.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (excelType === null || excelType === undefined) {
                throw new RequiredError('excelType','Required parameter excelType was null or undefined when calling downloadRegionCarrierExcel.');
            }
            if (excelType !== null && excelType !== undefined) {
                localVarQueryParameter['excel_type'] = excelType;
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            if (country !== null && country !== undefined) {
                localVarQueryParameter['country'] = country;
            }
            if (excelLanguage !== null && excelLanguage !== undefined) {
                localVarQueryParameter['excel_language'] = excelLanguage;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (carrier !== null && carrier !== undefined) {
                localVarQueryParameter['carrier'] = carrier;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 下载统计指标数据表格文件。
         * 
         * - 支持下载90天内的指标数据。
         * 
         * - 时间跨度不能超过31天。
         * 
         * - 起始时间和结束时间，左闭右开。如时间跨度为2022-10-24 00:00:00 到 2022-10-25 00:00:00，表示取 [2022-10-24 00:00:00, 2022-10-25 00:00:00)的统计数据。
         * 
         * - 起始时间、结束时间必须传毫秒级时间戳，起始时间和结束时间必须同时指定。
         * 
         * - 单租户调用频率：10次/min。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadStatisticsExcel(downloadStatisticsExcelRequest?: DownloadStatisticsExcelRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/statistics-excel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let excelType;
            
            let excelLanguage;
            
            let serviceArea;
            
            let interval;
            
            let enterpriseProjectId;

            if (downloadStatisticsExcelRequest !== null && downloadStatisticsExcelRequest !== undefined) {
                if (downloadStatisticsExcelRequest instanceof DownloadStatisticsExcelRequest) {
                    startTime = downloadStatisticsExcelRequest.startTime;
                    endTime = downloadStatisticsExcelRequest.endTime;
                    domainName = downloadStatisticsExcelRequest.domainName;
                    excelType = downloadStatisticsExcelRequest.excelType;
                    excelLanguage = downloadStatisticsExcelRequest.excelLanguage;
                    serviceArea = downloadStatisticsExcelRequest.serviceArea;
                    interval = downloadStatisticsExcelRequest.interval;
                    enterpriseProjectId = downloadStatisticsExcelRequest.enterpriseProjectId;
                } else {
                    startTime = downloadStatisticsExcelRequest['start_time'];
                    endTime = downloadStatisticsExcelRequest['end_time'];
                    domainName = downloadStatisticsExcelRequest['domain_name'];
                    excelType = downloadStatisticsExcelRequest['excel_type'];
                    excelLanguage = downloadStatisticsExcelRequest['excel_language'];
                    serviceArea = downloadStatisticsExcelRequest['service_area'];
                    interval = downloadStatisticsExcelRequest['interval'];
                    enterpriseProjectId = downloadStatisticsExcelRequest['enterprise_project_id'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling downloadStatisticsExcel.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling downloadStatisticsExcel.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling downloadStatisticsExcel.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (excelType === null || excelType === undefined) {
                throw new RequiredError('excelType','Required parameter excelType was null or undefined when calling downloadStatisticsExcel.');
            }
            if (excelType !== null && excelType !== undefined) {
                localVarQueryParameter['excel_type'] = excelType;
            }
            if (excelLanguage !== null && excelLanguage !== undefined) {
                localVarQueryParameter['excel_language'] = excelLanguage;
            }
            if (serviceArea !== null && serviceArea !== undefined) {
                localVarQueryParameter['service_area'] = serviceArea;
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用加速域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableDomain(enableDomainRequest?: EnableDomainRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/domains/{domain_id}/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (enableDomainRequest !== null && enableDomainRequest !== undefined) {
                if (enableDomainRequest instanceof EnableDomainRequest) {
                    domainId = enableDomainRequest.domainId;
                    enterpriseProjectId = enableDomainRequest.enterpriseProjectId;
                } else {
                    domainId = enableDomainRequest['domain_id'];
                    enterpriseProjectId = enableDomainRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling enableDomain.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * CDN数据导出
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportStatsOpen(exportStatsOpenRequest?: ExportStatsOpenRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/statistics/stats/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (exportStatsOpenRequest !== null && exportStatsOpenRequest !== undefined) {
                if (exportStatsOpenRequest instanceof ExportStatsOpenRequest) {
                    enterpriseProjectId = exportStatsOpenRequest.enterpriseProjectId;
                    body = exportStatsOpenRequest.body
                } else {
                    enterpriseProjectId = exportStatsOpenRequest['enterprise_project_id'];
                    body = exportStatsOpenRequest['body'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询封禁/解禁URL任务，如需使用本接口，请提交工单申请。
         * - 单租户调用频率：30次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccessControlTask(listAccessControlTaskRequest?: ListAccessControlTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/content/access-control-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let offset;
            
            let limit;
            
            let status;

            if (listAccessControlTaskRequest !== null && listAccessControlTaskRequest !== undefined) {
                if (listAccessControlTaskRequest instanceof ListAccessControlTaskRequest) {
                    startTime = listAccessControlTaskRequest.startTime;
                    endTime = listAccessControlTaskRequest.endTime;
                    offset = listAccessControlTaskRequest.offset;
                    limit = listAccessControlTaskRequest.limit;
                    status = listAccessControlTaskRequest.status;
                } else {
                    startTime = listAccessControlTaskRequest['start_time'];
                    endTime = listAccessControlTaskRequest['end_time'];
                    offset = listAccessControlTaskRequest['offset'];
                    limit = listAccessControlTaskRequest['limit'];
                    status = listAccessControlTaskRequest['status'];
                }
            }

        
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询已封禁的URL，如需使用本接口，请提交工单申请。
         * - 单租户调用频率：30次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBanUrl(listBanUrlRequest?: ListBanUrlRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/content/ban-urls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let pageSize;
            
            let pageNumber;
            
            let url;

            if (listBanUrlRequest !== null && listBanUrlRequest !== undefined) {
                if (listBanUrlRequest instanceof ListBanUrlRequest) {
                    startTime = listBanUrlRequest.startTime;
                    endTime = listBanUrlRequest.endTime;
                    pageSize = listBanUrlRequest.pageSize;
                    pageNumber = listBanUrlRequest.pageNumber;
                    url = listBanUrlRequest.url;
                } else {
                    startTime = listBanUrlRequest['start_time'];
                    endTime = listBanUrlRequest['end_time'];
                    pageSize = listBanUrlRequest['page_size'];
                    pageNumber = listBanUrlRequest['page_number'];
                    url = listBanUrlRequest['url'];
                }
            }

        
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNumber !== null && pageNumber !== undefined) {
                localVarQueryParameter['page_number'] = pageNumber;
            }
            if (url !== null && url !== undefined) {
                localVarQueryParameter['url'] = url;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询域名top ip统计分析数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCdnDomainTopIps(listCdnDomainTopIpsRequest?: ListCdnDomainTopIpsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/top-ips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let statType;
            
            let groupBy;
            
            let serviceArea;
            
            let enterpriseProjectId;
            
            let includeRatio;

            if (listCdnDomainTopIpsRequest !== null && listCdnDomainTopIpsRequest !== undefined) {
                if (listCdnDomainTopIpsRequest instanceof ListCdnDomainTopIpsRequest) {
                    startTime = listCdnDomainTopIpsRequest.startTime;
                    endTime = listCdnDomainTopIpsRequest.endTime;
                    domainName = listCdnDomainTopIpsRequest.domainName;
                    statType = listCdnDomainTopIpsRequest.statType;
                    groupBy = listCdnDomainTopIpsRequest.groupBy;
                    serviceArea = listCdnDomainTopIpsRequest.serviceArea;
                    enterpriseProjectId = listCdnDomainTopIpsRequest.enterpriseProjectId;
                    includeRatio = listCdnDomainTopIpsRequest.includeRatio;
                } else {
                    startTime = listCdnDomainTopIpsRequest['start_time'];
                    endTime = listCdnDomainTopIpsRequest['end_time'];
                    domainName = listCdnDomainTopIpsRequest['domain_name'];
                    statType = listCdnDomainTopIpsRequest['stat_type'];
                    groupBy = listCdnDomainTopIpsRequest['group_by'];
                    serviceArea = listCdnDomainTopIpsRequest['service_area'];
                    enterpriseProjectId = listCdnDomainTopIpsRequest['enterprise_project_id'];
                    includeRatio = listCdnDomainTopIpsRequest['include_ratio'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listCdnDomainTopIps.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listCdnDomainTopIps.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listCdnDomainTopIps.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling listCdnDomainTopIps.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }
            if (groupBy !== null && groupBy !== undefined) {
                localVarQueryParameter['group_by'] = groupBy;
            }
            if (serviceArea !== null && serviceArea !== undefined) {
                localVarQueryParameter['service_area'] = serviceArea;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (includeRatio !== null && includeRatio !== undefined) {
                localVarQueryParameter['include_ratio'] = includeRatio;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询域名top 回源URL数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCdnDomainTopOriginUrl(listCdnDomainTopOriginUrlRequest?: ListCdnDomainTopOriginUrlRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/top-origin-urls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let statType;
            
            let groupBy;
            
            let enterpriseProjectId;
            
            let includeRatio;

            if (listCdnDomainTopOriginUrlRequest !== null && listCdnDomainTopOriginUrlRequest !== undefined) {
                if (listCdnDomainTopOriginUrlRequest instanceof ListCdnDomainTopOriginUrlRequest) {
                    startTime = listCdnDomainTopOriginUrlRequest.startTime;
                    endTime = listCdnDomainTopOriginUrlRequest.endTime;
                    domainName = listCdnDomainTopOriginUrlRequest.domainName;
                    statType = listCdnDomainTopOriginUrlRequest.statType;
                    groupBy = listCdnDomainTopOriginUrlRequest.groupBy;
                    enterpriseProjectId = listCdnDomainTopOriginUrlRequest.enterpriseProjectId;
                    includeRatio = listCdnDomainTopOriginUrlRequest.includeRatio;
                } else {
                    startTime = listCdnDomainTopOriginUrlRequest['start_time'];
                    endTime = listCdnDomainTopOriginUrlRequest['end_time'];
                    domainName = listCdnDomainTopOriginUrlRequest['domain_name'];
                    statType = listCdnDomainTopOriginUrlRequest['stat_type'];
                    groupBy = listCdnDomainTopOriginUrlRequest['group_by'];
                    enterpriseProjectId = listCdnDomainTopOriginUrlRequest['enterprise_project_id'];
                    includeRatio = listCdnDomainTopOriginUrlRequest['include_ratio'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listCdnDomainTopOriginUrl.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listCdnDomainTopOriginUrl.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listCdnDomainTopOriginUrl.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling listCdnDomainTopOriginUrl.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }
            if (groupBy !== null && groupBy !== undefined) {
                localVarQueryParameter['group_by'] = groupBy;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (includeRatio !== null && includeRatio !== undefined) {
                localVarQueryParameter['include_ratio'] = includeRatio;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询 TOP Path明细
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCdnDomainTopPath(listCdnDomainTopPathRequest?: ListCdnDomainTopPathRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/top-path",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let statType;
            
            let serviceArea;
            
            let userDomainId;

            if (listCdnDomainTopPathRequest !== null && listCdnDomainTopPathRequest !== undefined) {
                if (listCdnDomainTopPathRequest instanceof ListCdnDomainTopPathRequest) {
                    startTime = listCdnDomainTopPathRequest.startTime;
                    endTime = listCdnDomainTopPathRequest.endTime;
                    domainName = listCdnDomainTopPathRequest.domainName;
                    statType = listCdnDomainTopPathRequest.statType;
                    serviceArea = listCdnDomainTopPathRequest.serviceArea;
                    userDomainId = listCdnDomainTopPathRequest.userDomainId;
                } else {
                    startTime = listCdnDomainTopPathRequest['start_time'];
                    endTime = listCdnDomainTopPathRequest['end_time'];
                    domainName = listCdnDomainTopPathRequest['domain_name'];
                    statType = listCdnDomainTopPathRequest['stat_type'];
                    serviceArea = listCdnDomainTopPathRequest['service_area'];
                    userDomainId = listCdnDomainTopPathRequest['user_domain_id'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listCdnDomainTopPath.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listCdnDomainTopPath.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listCdnDomainTopPath.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling listCdnDomainTopPath.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }
            if (serviceArea !== null && serviceArea !== undefined) {
                localVarQueryParameter['service_area'] = serviceArea;
            }
            if (userDomainId !== null && userDomainId !== undefined) {
                localVarQueryParameter['user_domain_id'] = userDomainId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询TOP100 referer数据。
         * 
         * - 支持查询90天内的数据。
         * 
         * - 查询跨度不能超过31天。
         * 
         * - 单租户调用频率：2次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCdnDomainTopRefers(listCdnDomainTopRefersRequest?: ListCdnDomainTopRefersRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/top-refers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let statType;
            
            let serviceArea;
            
            let enterpriseProjectId;
            
            let includeRatio;

            if (listCdnDomainTopRefersRequest !== null && listCdnDomainTopRefersRequest !== undefined) {
                if (listCdnDomainTopRefersRequest instanceof ListCdnDomainTopRefersRequest) {
                    startTime = listCdnDomainTopRefersRequest.startTime;
                    endTime = listCdnDomainTopRefersRequest.endTime;
                    domainName = listCdnDomainTopRefersRequest.domainName;
                    statType = listCdnDomainTopRefersRequest.statType;
                    serviceArea = listCdnDomainTopRefersRequest.serviceArea;
                    enterpriseProjectId = listCdnDomainTopRefersRequest.enterpriseProjectId;
                    includeRatio = listCdnDomainTopRefersRequest.includeRatio;
                } else {
                    startTime = listCdnDomainTopRefersRequest['start_time'];
                    endTime = listCdnDomainTopRefersRequest['end_time'];
                    domainName = listCdnDomainTopRefersRequest['domain_name'];
                    statType = listCdnDomainTopRefersRequest['stat_type'];
                    serviceArea = listCdnDomainTopRefersRequest['service_area'];
                    enterpriseProjectId = listCdnDomainTopRefersRequest['enterprise_project_id'];
                    includeRatio = listCdnDomainTopRefersRequest['include_ratio'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listCdnDomainTopRefers.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listCdnDomainTopRefers.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listCdnDomainTopRefers.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling listCdnDomainTopRefers.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }
            if (serviceArea !== null && serviceArea !== undefined) {
                localVarQueryParameter['service_area'] = serviceArea;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (includeRatio !== null && includeRatio !== undefined) {
                localVarQueryParameter['include_ratio'] = includeRatio;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 统计分析TOP UA统计数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCdnDomainTopUas(listCdnDomainTopUasRequest?: ListCdnDomainTopUasRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/top-uas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let statType;
            
            let groupBy;
            
            let serviceArea;
            
            let enterpriseProjectId;
            
            let includeRatio;

            if (listCdnDomainTopUasRequest !== null && listCdnDomainTopUasRequest !== undefined) {
                if (listCdnDomainTopUasRequest instanceof ListCdnDomainTopUasRequest) {
                    startTime = listCdnDomainTopUasRequest.startTime;
                    endTime = listCdnDomainTopUasRequest.endTime;
                    domainName = listCdnDomainTopUasRequest.domainName;
                    statType = listCdnDomainTopUasRequest.statType;
                    groupBy = listCdnDomainTopUasRequest.groupBy;
                    serviceArea = listCdnDomainTopUasRequest.serviceArea;
                    enterpriseProjectId = listCdnDomainTopUasRequest.enterpriseProjectId;
                    includeRatio = listCdnDomainTopUasRequest.includeRatio;
                } else {
                    startTime = listCdnDomainTopUasRequest['start_time'];
                    endTime = listCdnDomainTopUasRequest['end_time'];
                    domainName = listCdnDomainTopUasRequest['domain_name'];
                    statType = listCdnDomainTopUasRequest['stat_type'];
                    groupBy = listCdnDomainTopUasRequest['group_by'];
                    serviceArea = listCdnDomainTopUasRequest['service_area'];
                    enterpriseProjectId = listCdnDomainTopUasRequest['enterprise_project_id'];
                    includeRatio = listCdnDomainTopUasRequest['include_ratio'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listCdnDomainTopUas.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listCdnDomainTopUas.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listCdnDomainTopUas.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling listCdnDomainTopUas.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }
            if (groupBy !== null && groupBy !== undefined) {
                localVarQueryParameter['group_by'] = groupBy;
            }
            if (serviceArea !== null && serviceArea !== undefined) {
                localVarQueryParameter['service_area'] = serviceArea;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (includeRatio !== null && includeRatio !== undefined) {
                localVarQueryParameter['include_ratio'] = includeRatio;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 按域名维度查询每天客户端访问详情统计。
         * - 支持查询90天内的数据。
         * - ip_num查询跨度只支持1天,uv查询跨度只支持5分钟。
         * - 起始时间和结束时间，左闭右开，需要同时指定。如查询2022-07-12 00:00:00 到 2022-07-13 00:00:00 的数据，表示取 [2022-07-12 00:00:00, 2022-07-13 00:00:00)的统计数据。
         * - ip_num开始时间、结束时间必须传毫秒级时间戳，必须为凌晨0点整时刻点，如果传的不是凌晨0点整时刻点，返回数据可能与预期不一致。
         * - uv必须为5分钟整时刻点，如：0分、5分、10分、15分等，如果传的不是5分钟时刻点，返回数据可能与预期不一致
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainClientStats(listDomainClientStatsRequest?: ListDomainClientStatsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/domain-client-stats",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let statType;
            
            let serviceArea;
            
            let enterpriseProjectId;

            if (listDomainClientStatsRequest !== null && listDomainClientStatsRequest !== undefined) {
                if (listDomainClientStatsRequest instanceof ListDomainClientStatsRequest) {
                    startTime = listDomainClientStatsRequest.startTime;
                    endTime = listDomainClientStatsRequest.endTime;
                    domainName = listDomainClientStatsRequest.domainName;
                    statType = listDomainClientStatsRequest.statType;
                    serviceArea = listDomainClientStatsRequest.serviceArea;
                    enterpriseProjectId = listDomainClientStatsRequest.enterpriseProjectId;
                } else {
                    startTime = listDomainClientStatsRequest['start_time'];
                    endTime = listDomainClientStatsRequest['end_time'];
                    domainName = listDomainClientStatsRequest['domain_name'];
                    statType = listDomainClientStatsRequest['stat_type'];
                    serviceArea = listDomainClientStatsRequest['service_area'];
                    enterpriseProjectId = listDomainClientStatsRequest['enterprise_project_id'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listDomainClientStats.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listDomainClientStats.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listDomainClientStats.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling listDomainClientStats.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }
            if (serviceArea !== null && serviceArea !== undefined) {
                localVarQueryParameter['service_area'] = serviceArea;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询加速域名的基础信息，包含cname状态、加速域名是否支持复制配置。
         * - 单租户调用频率：5次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainConfigs(listDomainConfigsRequest?: ListDomainConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/configuration/domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let item;
            
            let domainNames;
            
            let enterpriseProjectId;

            if (listDomainConfigsRequest !== null && listDomainConfigsRequest !== undefined) {
                if (listDomainConfigsRequest instanceof ListDomainConfigsRequest) {
                    item = listDomainConfigsRequest.item;
                    domainNames = listDomainConfigsRequest.domainNames;
                    enterpriseProjectId = listDomainConfigsRequest.enterpriseProjectId;
                } else {
                    item = listDomainConfigsRequest['item'];
                    domainNames = listDomainConfigsRequest['domain_names'];
                    enterpriseProjectId = listDomainConfigsRequest['enterprise_project_id'];
                }
            }

        
            if (item === null || item === undefined) {
                throw new RequiredError('item','Required parameter item was null or undefined when calling listDomainConfigs.');
            }
            if (item !== null && item !== undefined) {
                localVarQueryParameter['item'] = item;
            }
            if (domainNames !== null && domainNames !== undefined) {
                localVarQueryParameter['domain_names'] = domainNames;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询加速域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomains(listDomainsRequest?: ListDomainsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainName;
            
            let businessType;
            
            let domainStatus;
            
            let serviceArea;
            
            let pageSize;
            
            let pageNumber;
            
            let showTags;
            
            let exactMatch;
            
            let enterpriseProjectId;

            if (listDomainsRequest !== null && listDomainsRequest !== undefined) {
                if (listDomainsRequest instanceof ListDomainsRequest) {
                    domainName = listDomainsRequest.domainName;
                    businessType = listDomainsRequest.businessType;
                    domainStatus = listDomainsRequest.domainStatus;
                    serviceArea = listDomainsRequest.serviceArea;
                    pageSize = listDomainsRequest.pageSize;
                    pageNumber = listDomainsRequest.pageNumber;
                    showTags = listDomainsRequest.showTags;
                    exactMatch = listDomainsRequest.exactMatch;
                    enterpriseProjectId = listDomainsRequest.enterpriseProjectId;
                } else {
                    domainName = listDomainsRequest['domain_name'];
                    businessType = listDomainsRequest['business_type'];
                    domainStatus = listDomainsRequest['domain_status'];
                    serviceArea = listDomainsRequest['service_area'];
                    pageSize = listDomainsRequest['page_size'];
                    pageNumber = listDomainsRequest['page_number'];
                    showTags = listDomainsRequest['show_tags'];
                    exactMatch = listDomainsRequest['exact_match'];
                    enterpriseProjectId = listDomainsRequest['enterprise_project_id'];
                }
            }

        
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (businessType !== null && businessType !== undefined) {
                localVarQueryParameter['business_type'] = businessType;
            }
            if (domainStatus !== null && domainStatus !== undefined) {
                localVarQueryParameter['domain_status'] = domainStatus;
            }
            if (serviceArea !== null && serviceArea !== undefined) {
                localVarQueryParameter['service_area'] = serviceArea;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNumber !== null && pageNumber !== undefined) {
                localVarQueryParameter['page_number'] = pageNumber;
            }
            if (showTags !== null && showTags !== undefined) {
                localVarQueryParameter['show_tags'] = showTags;
            }
            if (exactMatch !== null && exactMatch !== undefined) {
                localVarQueryParameter['exact_match'] = exactMatch;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页查询统计数据异步导出任务，按修改时间降序排列，当任务状态为success时，返回参数中会包含download_link
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExportTasks(listExportTasksRequest?: ListExportTasksRequest) {
            const options = {
                method: "GET",
                url: "/v1/cdn/statistics/export-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let taskName;
            
            let limit;
            
            let offset;

            if (listExportTasksRequest !== null && listExportTasksRequest !== undefined) {
                if (listExportTasksRequest instanceof ListExportTasksRequest) {
                    taskId = listExportTasksRequest.taskId;
                    taskName = listExportTasksRequest.taskName;
                    limit = listExportTasksRequest.limit;
                    offset = listExportTasksRequest.offset;
                } else {
                    taskId = listExportTasksRequest['task_id'];
                    taskName = listExportTasksRequest['task_name'];
                    limit = listExportTasksRequest['limit'];
                    offset = listExportTasksRequest['offset'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listExportTasks.');
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
            }
            if (taskName === null || taskName === undefined) {
                throw new RequiredError('taskName','Required parameter taskName was null or undefined when calling listExportTasks.');
            }
            if (taskName !== null && taskName !== undefined) {
                localVarQueryParameter['task_name'] = taskName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询规则引擎列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRuleDetails(listRuleDetailsRequest?: ListRuleDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/configuration/domains/{domain_name}/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainName;

            if (listRuleDetailsRequest !== null && listRuleDetailsRequest !== undefined) {
                if (listRuleDetailsRequest instanceof ListRuleDetailsRequest) {
                    domainName = listRuleDetailsRequest.domainName;
                } else {
                    domainName = listRuleDetailsRequest['domain_name'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listRuleDetails.');
            }

            options.pathParams = { 'domain_name': domainName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询共享缓存组列表。
         * - 单租户调用频率：5次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listShareCacheGroups(listShareCacheGroupsRequest?: ListShareCacheGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/configuration/share-cache-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listShareCacheGroupsRequest !== null && listShareCacheGroupsRequest !== undefined) {
                if (listShareCacheGroupsRequest instanceof ListShareCacheGroupsRequest) {
                    limit = listShareCacheGroupsRequest.limit;
                    offset = listShareCacheGroupsRequest.offset;
                } else {
                    limit = listShareCacheGroupsRequest['limit'];
                    offset = listShareCacheGroupsRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询加速域名的特殊配置，当前支持查询备忘录信息。
         * - 单租户调用频率：15次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSpecialConfiguration(listSpecialConfigurationRequest?: ListSpecialConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/configuration/special-configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainName;
            
            let pageSize;
            
            let pageNumber;

            if (listSpecialConfigurationRequest !== null && listSpecialConfigurationRequest !== undefined) {
                if (listSpecialConfigurationRequest instanceof ListSpecialConfigurationRequest) {
                    domainName = listSpecialConfigurationRequest.domainName;
                    pageSize = listSpecialConfigurationRequest.pageSize;
                    pageNumber = listSpecialConfigurationRequest.pageNumber;
                } else {
                    domainName = listSpecialConfigurationRequest['domain_name'];
                    pageSize = listSpecialConfigurationRequest['page_size'];
                    pageNumber = listSpecialConfigurationRequest['page_number'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listSpecialConfiguration.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNumber !== null && pageNumber !== undefined) {
                localVarQueryParameter['page_number'] = pageNumber;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * query subscription task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubscriptionTasks(listSubscriptionTasksRequest?: ListSubscriptionTasksRequest) {
            const options = {
                method: "GET",
                url: "/v1/cdn/statistics/subscription-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listSubscriptionTasksRequest !== null && listSubscriptionTasksRequest !== undefined) {
                if (listSubscriptionTasksRequest instanceof ListSubscriptionTasksRequest) {
                    limit = listSubscriptionTasksRequest.limit;
                    offset = listSubscriptionTasksRequest.offset;
                } else {
                    limit = listSubscriptionTasksRequest['limit'];
                    offset = listSubscriptionTasksRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改租户配置，当前仅支持开启OBS和SCM委托授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyAccountInfo(modifyAccountInfoRequest?: ModifyAccountInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/configuration/account-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (modifyAccountInfoRequest !== null && modifyAccountInfoRequest !== undefined) {
                if (modifyAccountInfoRequest instanceof ModifyAccountInfoRequest) {
                    body = modifyAccountInfoRequest.body
                } else {
                    body = modifyAccountInfoRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 设置用户计费模式。
         * 
         * - 服务区域仅支持mainland_china（国内）
         * 
         * - 计费模式仅支持设置flux（流量），v2及以上客户支持bw（带宽）
         * 
         * - 加速类型仅支持base（基础加速）
         * 
         * - 单租户调用频率：10次/min。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setChargeModes(setChargeModesRequest?: SetChargeModesRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/charge/charge-modes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setChargeModesRequest !== null && setChargeModesRequest !== undefined) {
                if (setChargeModesRequest instanceof SetChargeModesRequest) {
                    body = setChargeModesRequest.body
                } else {
                    body = setChargeModesRequest['body'];
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
         * - 设置统计配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setStatsConfig(setStatsConfigRequest?: SetStatsConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/cdn/statistics/stats-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setStatsConfigRequest !== null && setStatsConfigRequest !== undefined) {
                if (setStatsConfigRequest instanceof SetStatsConfigRequest) {
                    body = setStatsConfigRequest.body
                } else {
                    body = setStatsConfigRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询域名模板应用记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppliedTemplateRecord(showAppliedTemplateRecordRequest?: ShowAppliedTemplateRecordRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/configuration/tml-apply-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let tmlId;
            
            let tmlName;
            
            let operatorId;
            
            let offset;
            
            let limit;

            if (showAppliedTemplateRecordRequest !== null && showAppliedTemplateRecordRequest !== undefined) {
                if (showAppliedTemplateRecordRequest instanceof ShowAppliedTemplateRecordRequest) {
                    tmlId = showAppliedTemplateRecordRequest.tmlId;
                    tmlName = showAppliedTemplateRecordRequest.tmlName;
                    operatorId = showAppliedTemplateRecordRequest.operatorId;
                    offset = showAppliedTemplateRecordRequest.offset;
                    limit = showAppliedTemplateRecordRequest.limit;
                } else {
                    tmlId = showAppliedTemplateRecordRequest['tml_id'];
                    tmlName = showAppliedTemplateRecordRequest['tml_name'];
                    operatorId = showAppliedTemplateRecordRequest['operator_id'];
                    offset = showAppliedTemplateRecordRequest['offset'];
                    limit = showAppliedTemplateRecordRequest['limit'];
                }
            }

        
            if (tmlId !== null && tmlId !== undefined) {
                localVarQueryParameter['tml_id'] = tmlId;
            }
            if (tmlName !== null && tmlName !== undefined) {
                localVarQueryParameter['tml_name'] = tmlName;
            }
            if (operatorId !== null && operatorId !== undefined) {
                localVarQueryParameter['operator_id'] = operatorId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询域名带宽峰值类数据。
         * 
         * - 支持查询90天内的数据。
         * 
         * - 查询时间跨度不能超过31天。
         * 
         * - 起始时间和结束时间，左闭右开。如查询2022-10-24 00:00:00 到 2022-10-25 00:00:00 的数据，表示取 [2022-10-24 00:00:00, 2022-10-25 00:00:00)的统计数据。
         * 
         * - 起始时间、结束时间必须传毫秒级时间戳，起始时间和结束时间必须同时指定。
         * 
         * - 流量类指标单位统一为Byte（字节）、带宽类指标单位统一为bit/s（比特/秒）、峰值类指标单位统一为bps（比特率），请求数类和状态码类指标单位统一为次数。用于查询指定域名、指定统计指标的明细数据。
         * 
         * - 单租户调用频率：2次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBandwidthCalc(showBandwidthCalcRequest?: ShowBandwidthCalcRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/bandwidth-calc",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let calcType;
            
            let serviceArea;
            
            let enterpriseProjectId;

            if (showBandwidthCalcRequest !== null && showBandwidthCalcRequest !== undefined) {
                if (showBandwidthCalcRequest instanceof ShowBandwidthCalcRequest) {
                    startTime = showBandwidthCalcRequest.startTime;
                    endTime = showBandwidthCalcRequest.endTime;
                    domainName = showBandwidthCalcRequest.domainName;
                    calcType = showBandwidthCalcRequest.calcType;
                    serviceArea = showBandwidthCalcRequest.serviceArea;
                    enterpriseProjectId = showBandwidthCalcRequest.enterpriseProjectId;
                } else {
                    startTime = showBandwidthCalcRequest['start_time'];
                    endTime = showBandwidthCalcRequest['end_time'];
                    domainName = showBandwidthCalcRequest['domain_name'];
                    calcType = showBandwidthCalcRequest['calc_type'];
                    serviceArea = showBandwidthCalcRequest['service_area'];
                    enterpriseProjectId = showBandwidthCalcRequest['enterprise_project_id'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showBandwidthCalc.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showBandwidthCalc.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showBandwidthCalc.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (calcType === null || calcType === undefined) {
                throw new RequiredError('calcType','Required parameter calcType was null or undefined when calling showBandwidthCalc.');
            }
            if (calcType !== null && calcType !== undefined) {
                localVarQueryParameter['calc_type'] = calcType;
            }
            if (serviceArea !== null && serviceArea !== undefined) {
                localVarQueryParameter['service_area'] = serviceArea;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有绑定HTTPS证书的域名信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCertificatesHttpsInfo(showCertificatesHttpsInfoRequest?: ShowCertificatesHttpsInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/domains/https-certificate-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageSize;
            
            let pageNumber;
            
            let domainName;
            
            let userDomainId;
            
            let enterpriseProjectId;

            if (showCertificatesHttpsInfoRequest !== null && showCertificatesHttpsInfoRequest !== undefined) {
                if (showCertificatesHttpsInfoRequest instanceof ShowCertificatesHttpsInfoRequest) {
                    pageSize = showCertificatesHttpsInfoRequest.pageSize;
                    pageNumber = showCertificatesHttpsInfoRequest.pageNumber;
                    domainName = showCertificatesHttpsInfoRequest.domainName;
                    userDomainId = showCertificatesHttpsInfoRequest.userDomainId;
                    enterpriseProjectId = showCertificatesHttpsInfoRequest.enterpriseProjectId;
                } else {
                    pageSize = showCertificatesHttpsInfoRequest['page_size'];
                    pageNumber = showCertificatesHttpsInfoRequest['page_number'];
                    domainName = showCertificatesHttpsInfoRequest['domain_name'];
                    userDomainId = showCertificatesHttpsInfoRequest['user_domain_id'];
                    enterpriseProjectId = showCertificatesHttpsInfoRequest['enterprise_project_id'];
                }
            }

        
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNumber !== null && pageNumber !== undefined) {
                localVarQueryParameter['page_number'] = pageNumber;
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (userDomainId !== null && userDomainId !== undefined) {
                localVarQueryParameter['user_domain_id'] = userDomainId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询用户计费模式。
         * 
         * - 服务区域仅支持mainland_china（国内，默认）和outside_mainland_china（海外）
         * 
         * - 计费模式状态支持active（已生效），upcoming（待生效）两种状态，默认为active(已生效)
         * 
         * - 加速类型仅支持base（基础加速）
         * 
         * - 单租户调用频率：5次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showChargeModes(showChargeModesRequest?: ShowChargeModesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/charge/charge-modes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let productType;
            
            let status;
            
            let serviceArea;

            if (showChargeModesRequest !== null && showChargeModesRequest !== undefined) {
                if (showChargeModesRequest instanceof ShowChargeModesRequest) {
                    productType = showChargeModesRequest.productType;
                    status = showChargeModesRequest.status;
                    serviceArea = showChargeModesRequest.serviceArea;
                } else {
                    productType = showChargeModesRequest['product_type'];
                    status = showChargeModesRequest['status'];
                    serviceArea = showChargeModesRequest['service_area'];
                }
            }

        
            if (productType === null || productType === undefined) {
                throw new RequiredError('productType','Required parameter productType was null or undefined when calling showChargeModes.');
            }
            if (productType !== null && productType !== undefined) {
                localVarQueryParameter['product_type'] = productType;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (serviceArea !== null && serviceArea !== undefined) {
                localVarQueryParameter['service_area'] = serviceArea;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * CDN查询域名的国家统计数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainCountryStat(showDomainCountryStatRequest?: ShowDomainCountryStatRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/domain-country-stats",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let action;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let statType;
            
            let country;
            
            let groupBy;
            
            let userDomainId;

            if (showDomainCountryStatRequest !== null && showDomainCountryStatRequest !== undefined) {
                if (showDomainCountryStatRequest instanceof ShowDomainCountryStatRequest) {
                    action = showDomainCountryStatRequest.action;
                    startTime = showDomainCountryStatRequest.startTime;
                    endTime = showDomainCountryStatRequest.endTime;
                    domainName = showDomainCountryStatRequest.domainName;
                    statType = showDomainCountryStatRequest.statType;
                    country = showDomainCountryStatRequest.country;
                    groupBy = showDomainCountryStatRequest.groupBy;
                    userDomainId = showDomainCountryStatRequest.userDomainId;
                } else {
                    action = showDomainCountryStatRequest['action'];
                    startTime = showDomainCountryStatRequest['start_time'];
                    endTime = showDomainCountryStatRequest['end_time'];
                    domainName = showDomainCountryStatRequest['domain_name'];
                    statType = showDomainCountryStatRequest['stat_type'];
                    country = showDomainCountryStatRequest['country'];
                    groupBy = showDomainCountryStatRequest['group_by'];
                    userDomainId = showDomainCountryStatRequest['user_domain_id'];
                }
            }

        
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling showDomainCountryStat.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showDomainCountryStat.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showDomainCountryStat.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showDomainCountryStat.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling showDomainCountryStat.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }
            if (country !== null && country !== undefined) {
                localVarQueryParameter['country'] = country;
            }
            if (groupBy !== null && groupBy !== undefined) {
                localVarQueryParameter['group_by'] = groupBy;
            }
            if (userDomainId !== null && userDomainId !== undefined) {
                localVarQueryParameter['user_domain_id'] = userDomainId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 加速域名详情信息接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainDetailByName(showDomainDetailByNameRequest?: ShowDomainDetailByNameRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/configuration/domains/{domain_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainName;
            
            let enterpriseProjectId;

            if (showDomainDetailByNameRequest !== null && showDomainDetailByNameRequest !== undefined) {
                if (showDomainDetailByNameRequest instanceof ShowDomainDetailByNameRequest) {
                    domainName = showDomainDetailByNameRequest.domainName;
                    enterpriseProjectId = showDomainDetailByNameRequest.enterpriseProjectId;
                } else {
                    domainName = showDomainDetailByNameRequest['domain_name'];
                    enterpriseProjectId = showDomainDetailByNameRequest['enterprise_project_id'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showDomainDetailByName.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_name': domainName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询域名配置接口，支持查询业务类型、服务范围、备注、IPv6开关、回源方式、回源URL改写、高级回源、Range回源、回源跟随、回源是否校验Etag、回源超时时间、回源请求头、HTTPS配置、TLS版本配置、强制跳转、HSTS、HTTP/2、OCSP Stapling、QUIC、缓存规则、状态码缓存时间、防盗链、IP黑白名单、 Use-Agent黑白名单、URL鉴权配置、远程鉴权配置、IP访问限频、HTTP header配置、自定义错误页面配置、智能压缩、请求限速配置、WebSocket配置、视频拖拽、回源SNI、访问URL重写、浏览器缓存过期时间、区域访问控制。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainFullConfig(showDomainFullConfigRequest?: ShowDomainFullConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/cdn/configuration/domains/{domain_name}/configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainName;
            
            let enterpriseProjectId;
            
            let showSpecialConfigs;

            if (showDomainFullConfigRequest !== null && showDomainFullConfigRequest !== undefined) {
                if (showDomainFullConfigRequest instanceof ShowDomainFullConfigRequest) {
                    domainName = showDomainFullConfigRequest.domainName;
                    enterpriseProjectId = showDomainFullConfigRequest.enterpriseProjectId;
                    showSpecialConfigs = showDomainFullConfigRequest.showSpecialConfigs;
                } else {
                    domainName = showDomainFullConfigRequest['domain_name'];
                    enterpriseProjectId = showDomainFullConfigRequest['enterprise_project_id'];
                    showSpecialConfigs = showDomainFullConfigRequest['show_special_configs'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showDomainFullConfig.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (showSpecialConfigs !== null && showSpecialConfigs !== undefined) {
                localVarQueryParameter['show_special_configs'] = showSpecialConfigs;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_name': domainName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 支持查询90天内的数据。
         * 
         * - 支持多指标同时查询，不超过5个。
         * 
         * - 最多同时指定20个域名。
         * 
         * - 起始时间和结束时间需要同时指定，左闭右开，毫秒级时间戳，且时间点必须为与查询时间间隔参数匹配的整时刻点。比如查询时间间隔为5分钟时，起始时间和结束时间必须为5分钟整时刻点，如：0分、5分、10分、15分等，如果时间点与时间间隔不匹配，返回数据可能与预期不一致。统一用开始时间表示一个时间段，如：2019-01-24 20:15:00 表示取 [20:15:00, 20:20:00)的统计数据，且左闭右开。
         * 
         * - action取值：location_detail,location_summary
         * 
         * - 流量类指标单位统一为Byte（字节）、带宽类指标单位统一为bit/s（比特/秒）、请求数类和状态码类指标单位统一为次数。用于查询指定域名、指定统计指标的区域运营商明细数据。
         * 
         * - 单租户调用频率：15次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainLocationStats(showDomainLocationStatsRequest?: ShowDomainLocationStatsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/domain-location-stats",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let action;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let statType;
            
            let interval;
            
            let country;
            
            let province;
            
            let isp;
            
            let groupBy;
            
            let enterpriseProjectId;

            if (showDomainLocationStatsRequest !== null && showDomainLocationStatsRequest !== undefined) {
                if (showDomainLocationStatsRequest instanceof ShowDomainLocationStatsRequest) {
                    action = showDomainLocationStatsRequest.action;
                    startTime = showDomainLocationStatsRequest.startTime;
                    endTime = showDomainLocationStatsRequest.endTime;
                    domainName = showDomainLocationStatsRequest.domainName;
                    statType = showDomainLocationStatsRequest.statType;
                    interval = showDomainLocationStatsRequest.interval;
                    country = showDomainLocationStatsRequest.country;
                    province = showDomainLocationStatsRequest.province;
                    isp = showDomainLocationStatsRequest.isp;
                    groupBy = showDomainLocationStatsRequest.groupBy;
                    enterpriseProjectId = showDomainLocationStatsRequest.enterpriseProjectId;
                } else {
                    action = showDomainLocationStatsRequest['action'];
                    startTime = showDomainLocationStatsRequest['start_time'];
                    endTime = showDomainLocationStatsRequest['end_time'];
                    domainName = showDomainLocationStatsRequest['domain_name'];
                    statType = showDomainLocationStatsRequest['stat_type'];
                    interval = showDomainLocationStatsRequest['interval'];
                    country = showDomainLocationStatsRequest['country'];
                    province = showDomainLocationStatsRequest['province'];
                    isp = showDomainLocationStatsRequest['isp'];
                    groupBy = showDomainLocationStatsRequest['group_by'];
                    enterpriseProjectId = showDomainLocationStatsRequest['enterprise_project_id'];
                }
            }

        
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling showDomainLocationStats.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showDomainLocationStats.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showDomainLocationStats.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showDomainLocationStats.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling showDomainLocationStats.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            if (country !== null && country !== undefined) {
                localVarQueryParameter['country'] = country;
            }
            if (province !== null && province !== undefined) {
                localVarQueryParameter['province'] = province;
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
            }
            if (groupBy !== null && groupBy !== undefined) {
                localVarQueryParameter['group_by'] = groupBy;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 支持查询90天内的数据。
         * 
         * - 支持多指标同时查询，不超过5个。
         * 
         * - 最多同时指定20个域名。
         * 
         * - 起始时间和结束时间需要同时指定，左闭右开，毫秒级时间戳，且时间点必须为与查询时间间隔参数匹配的整时刻点。比如查询时间间隔为5分钟时，起始时间和结束时间必须为5分钟整时刻点，如：0分、5分、10分、15分等，如果时间点与时间间隔不匹配，返回数据可能与预期不一致。统一用开始时间表示一个时间段，如：2019-01-24 20:15:00 表示取 [20:15:00, 20:20:00)的统计数据，且左闭右开。
         * 
         * - action取值：detail,summary
         * 
         * - 流量类指标单位统一为Byte（字节）、带宽类指标单位统一为bit/s（比特/秒）、请求数类和状态码类指标单位统一为次数。用于查询指定域名、指定统计指标的明细数据。
         * 
         * - 单租户调用频率：15次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainStats(showDomainStatsRequest?: ShowDomainStatsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/domain-stats",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let action;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let statType;
            
            let interval;
            
            let groupBy;
            
            let serviceArea;
            
            let enterpriseProjectId;

            if (showDomainStatsRequest !== null && showDomainStatsRequest !== undefined) {
                if (showDomainStatsRequest instanceof ShowDomainStatsRequest) {
                    action = showDomainStatsRequest.action;
                    startTime = showDomainStatsRequest.startTime;
                    endTime = showDomainStatsRequest.endTime;
                    domainName = showDomainStatsRequest.domainName;
                    statType = showDomainStatsRequest.statType;
                    interval = showDomainStatsRequest.interval;
                    groupBy = showDomainStatsRequest.groupBy;
                    serviceArea = showDomainStatsRequest.serviceArea;
                    enterpriseProjectId = showDomainStatsRequest.enterpriseProjectId;
                } else {
                    action = showDomainStatsRequest['action'];
                    startTime = showDomainStatsRequest['start_time'];
                    endTime = showDomainStatsRequest['end_time'];
                    domainName = showDomainStatsRequest['domain_name'];
                    statType = showDomainStatsRequest['stat_type'];
                    interval = showDomainStatsRequest['interval'];
                    groupBy = showDomainStatsRequest['group_by'];
                    serviceArea = showDomainStatsRequest['service_area'];
                    enterpriseProjectId = showDomainStatsRequest['enterprise_project_id'];
                }
            }

        
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling showDomainStats.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showDomainStats.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showDomainStats.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showDomainStats.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling showDomainStats.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            if (groupBy !== null && groupBy !== undefined) {
                localVarQueryParameter['group_by'] = groupBy;
            }
            if (serviceArea !== null && serviceArea !== undefined) {
                localVarQueryParameter['service_area'] = serviceArea;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询域名模板列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainTemplate(showDomainTemplateRequest?: ShowDomainTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/configuration/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let tmlName;
            
            let tmlId;
            
            let tmlType;
            
            let limit;
            
            let offset;

            if (showDomainTemplateRequest !== null && showDomainTemplateRequest !== undefined) {
                if (showDomainTemplateRequest instanceof ShowDomainTemplateRequest) {
                    tmlName = showDomainTemplateRequest.tmlName;
                    tmlId = showDomainTemplateRequest.tmlId;
                    tmlType = showDomainTemplateRequest.tmlType;
                    limit = showDomainTemplateRequest.limit;
                    offset = showDomainTemplateRequest.offset;
                } else {
                    tmlName = showDomainTemplateRequest['tml_name'];
                    tmlId = showDomainTemplateRequest['tml_id'];
                    tmlType = showDomainTemplateRequest['tml_type'];
                    limit = showDomainTemplateRequest['limit'];
                    offset = showDomainTemplateRequest['offset'];
                }
            }

        
            if (tmlName !== null && tmlName !== undefined) {
                localVarQueryParameter['tml_name'] = tmlName;
            }
            if (tmlId !== null && tmlId !== undefined) {
                localVarQueryParameter['tml_id'] = tmlId;
            }
            if (tmlType !== null && tmlType !== undefined) {
                localVarQueryParameter['tml_type'] = tmlType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询刷新预热任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHistoryTaskDetails(showHistoryTaskDetailsRequest?: ShowHistoryTaskDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/historytasks/{history_tasks_id}/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let historyTasksId;
            
            let enterpriseProjectId;
            
            let pageSize;
            
            let pageNumber;
            
            let status;
            
            let url;
            
            let createTime;

            if (showHistoryTaskDetailsRequest !== null && showHistoryTaskDetailsRequest !== undefined) {
                if (showHistoryTaskDetailsRequest instanceof ShowHistoryTaskDetailsRequest) {
                    historyTasksId = showHistoryTaskDetailsRequest.historyTasksId;
                    enterpriseProjectId = showHistoryTaskDetailsRequest.enterpriseProjectId;
                    pageSize = showHistoryTaskDetailsRequest.pageSize;
                    pageNumber = showHistoryTaskDetailsRequest.pageNumber;
                    status = showHistoryTaskDetailsRequest.status;
                    url = showHistoryTaskDetailsRequest.url;
                    createTime = showHistoryTaskDetailsRequest.createTime;
                } else {
                    historyTasksId = showHistoryTaskDetailsRequest['history_tasks_id'];
                    enterpriseProjectId = showHistoryTaskDetailsRequest['enterprise_project_id'];
                    pageSize = showHistoryTaskDetailsRequest['page_size'];
                    pageNumber = showHistoryTaskDetailsRequest['page_number'];
                    status = showHistoryTaskDetailsRequest['status'];
                    url = showHistoryTaskDetailsRequest['url'];
                    createTime = showHistoryTaskDetailsRequest['create_time'];
                }
            }

        
            if (historyTasksId === null || historyTasksId === undefined) {
            throw new RequiredError('historyTasksId','Required parameter historyTasksId was null or undefined when calling showHistoryTaskDetails.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNumber !== null && pageNumber !== undefined) {
                localVarQueryParameter['page_number'] = pageNumber;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (url !== null && url !== undefined) {
                localVarQueryParameter['url'] = url;
            }
            if (createTime !== null && createTime !== undefined) {
                localVarQueryParameter['create_time'] = createTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'history_tasks_id': historyTasksId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询刷新预热任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHistoryTasks(showHistoryTasksRequest?: ShowHistoryTasksRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/historytasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let pageSize;
            
            let pageNumber;
            
            let status;
            
            let startDate;
            
            let endDate;
            
            let orderField;
            
            let orderType;
            
            let fileType;
            
            let taskType;

            if (showHistoryTasksRequest !== null && showHistoryTasksRequest !== undefined) {
                if (showHistoryTasksRequest instanceof ShowHistoryTasksRequest) {
                    enterpriseProjectId = showHistoryTasksRequest.enterpriseProjectId;
                    pageSize = showHistoryTasksRequest.pageSize;
                    pageNumber = showHistoryTasksRequest.pageNumber;
                    status = showHistoryTasksRequest.status;
                    startDate = showHistoryTasksRequest.startDate;
                    endDate = showHistoryTasksRequest.endDate;
                    orderField = showHistoryTasksRequest.orderField;
                    orderType = showHistoryTasksRequest.orderType;
                    fileType = showHistoryTasksRequest.fileType;
                    taskType = showHistoryTasksRequest.taskType;
                } else {
                    enterpriseProjectId = showHistoryTasksRequest['enterprise_project_id'];
                    pageSize = showHistoryTasksRequest['page_size'];
                    pageNumber = showHistoryTasksRequest['page_number'];
                    status = showHistoryTasksRequest['status'];
                    startDate = showHistoryTasksRequest['start_date'];
                    endDate = showHistoryTasksRequest['end_date'];
                    orderField = showHistoryTasksRequest['order_field'];
                    orderType = showHistoryTasksRequest['order_type'];
                    fileType = showHistoryTasksRequest['file_type'];
                    taskType = showHistoryTasksRequest['task_type'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNumber !== null && pageNumber !== undefined) {
                localVarQueryParameter['page_number'] = pageNumber;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }
            if (orderField !== null && orderField !== undefined) {
                localVarQueryParameter['order_field'] = orderField;
            }
            if (orderType !== null && orderType !== undefined) {
                localVarQueryParameter['order_type'] = orderType;
            }
            if (fileType !== null && fileType !== undefined) {
                localVarQueryParameter['file_type'] = fileType;
            }
            if (taskType !== null && taskType !== undefined) {
                localVarQueryParameter['task_type'] = taskType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询IP归属信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIpInfo(showIpInfoRequest?: ShowIpInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/ip-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let ips;
            
            let enterpriseProjectId;

            if (showIpInfoRequest !== null && showIpInfoRequest !== undefined) {
                if (showIpInfoRequest instanceof ShowIpInfoRequest) {
                    ips = showIpInfoRequest.ips;
                    enterpriseProjectId = showIpInfoRequest.enterpriseProjectId;
                } else {
                    ips = showIpInfoRequest['ips'];
                    enterpriseProjectId = showIpInfoRequest['enterprise_project_id'];
                }
            }

        
            if (ips === null || ips === undefined) {
                throw new RequiredError('ips','Required parameter ips was null or undefined when calling showIpInfo.');
            }
            if (ips !== null && ips !== undefined) {
                localVarQueryParameter['ips'] = ips;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询日志下载链接，支持查询30天内的日志信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLogs(showLogsRequest?: ShowLogsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainName;
            
            let startTime;
            
            let endTime;
            
            let pageSize;
            
            let pageNumber;
            
            let enterpriseProjectId;

            if (showLogsRequest !== null && showLogsRequest !== undefined) {
                if (showLogsRequest instanceof ShowLogsRequest) {
                    domainName = showLogsRequest.domainName;
                    startTime = showLogsRequest.startTime;
                    endTime = showLogsRequest.endTime;
                    pageSize = showLogsRequest.pageSize;
                    pageNumber = showLogsRequest.pageNumber;
                    enterpriseProjectId = showLogsRequest.enterpriseProjectId;
                } else {
                    domainName = showLogsRequest['domain_name'];
                    startTime = showLogsRequest['start_time'];
                    endTime = showLogsRequest['end_time'];
                    pageSize = showLogsRequest['page_size'];
                    pageNumber = showLogsRequest['page_number'];
                    enterpriseProjectId = showLogsRequest['enterprise_project_id'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showLogs.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNumber !== null && pageNumber !== undefined) {
                localVarQueryParameter['page_number'] = pageNumber;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前用户域名、刷新文件、刷新目录和预热的配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuota() {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/quota",
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
         * 查询CDN特殊用户接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSpecialUser() {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/special-user",
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
         * - 配置类型：目前支持，
         * - 0：热点统计。
         * - 1：ces上报。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStatsConfigs(showStatsConfigsRequest?: ShowStatsConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v1/cdn/statistics/stats-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let configType;
            
            let limit;
            
            let offset;

            if (showStatsConfigsRequest !== null && showStatsConfigsRequest !== undefined) {
                if (showStatsConfigsRequest instanceof ShowStatsConfigsRequest) {
                    configType = showStatsConfigsRequest.configType;
                    limit = showStatsConfigsRequest.limit;
                    offset = showStatsConfigsRequest.offset;
                } else {
                    configType = showStatsConfigsRequest['config_type'];
                    limit = showStatsConfigsRequest['limit'];
                    offset = showStatsConfigsRequest['offset'];
                }
            }

        
            if (configType === null || configType === undefined) {
                throw new RequiredError('configType','Required parameter configType was null or undefined when calling showStatsConfigs.');
            }
            if (configType !== null && configType !== undefined) {
                localVarQueryParameter['config_type'] = configType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于查询资源标签列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTags(showTagsRequest?: ShowTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/configuration/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceId;

            if (showTagsRequest !== null && showTagsRequest !== undefined) {
                if (showTagsRequest instanceof ShowTagsRequest) {
                    resourceId = showTagsRequest.resourceId;
                } else {
                    resourceId = showTagsRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
                throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showTags.');
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询TOP域名。
         * 
         * - 支持查询90天内的数据。
         * 
         * - 查询时间跨度不能超过1天。
         * 
         * - 起始时间和结束时间，左闭右开，必须同时指定。如查询2022-10-24 00:00:00 到 2022-10-25 00:00:00 的数据，表示取 [2022-10-24 00:00:00, 2022-10-25 00:00:00)的统计数据。
         * 
         * - 起始时间、结束时间必须传整点毫秒级时间戳。
         * 
         * - 流量类指标单位统一为Byte（字节）、带宽类指标单位统一为bit/s（比特/秒）、请求数类和状态码类指标单位统一为次数。用于查询指定域名、指定统计指标的明细数据。
         * 
         * - 单租户调用频率：5次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTopDomainNames(showTopDomainNamesRequest?: ShowTopDomainNamesRequest) {
            const options = {
                method: "GET",
                url: "/v1/cdn/statistics/top-domain-names",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let statType;
            
            let serviceArea;
            
            let limit;
            
            let enterpriseProjectId;

            if (showTopDomainNamesRequest !== null && showTopDomainNamesRequest !== undefined) {
                if (showTopDomainNamesRequest instanceof ShowTopDomainNamesRequest) {
                    startTime = showTopDomainNamesRequest.startTime;
                    endTime = showTopDomainNamesRequest.endTime;
                    statType = showTopDomainNamesRequest.statType;
                    serviceArea = showTopDomainNamesRequest.serviceArea;
                    limit = showTopDomainNamesRequest.limit;
                    enterpriseProjectId = showTopDomainNamesRequest.enterpriseProjectId;
                } else {
                    startTime = showTopDomainNamesRequest['start_time'];
                    endTime = showTopDomainNamesRequest['end_time'];
                    statType = showTopDomainNamesRequest['stat_type'];
                    serviceArea = showTopDomainNamesRequest['service_area'];
                    limit = showTopDomainNamesRequest['limit'];
                    enterpriseProjectId = showTopDomainNamesRequest['enterprise_project_id'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showTopDomainNames.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showTopDomainNames.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling showTopDomainNames.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }
            if (serviceArea !== null && serviceArea !== undefined) {
                localVarQueryParameter['service_area'] = serviceArea;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询TOP100 URL明细。
         * 
         * - 支持查询90天内的数据。
         * 
         * - 查询跨度不能超过31天。
         * 
         * - 起始时间和结束时间，左闭右开，需要同时指定。如查询2021-10-24 00:00:00 到 2021-10-25 00:00:00 的数据，表示取 [2021-10-24 00:00:00, 2021-10-25 00:00:00)的统计数据。
         * 
         * - 开始时间、结束时间必须传毫秒级时间戳，且必须为凌晨0点整时刻点，如果传的不是凌晨0点整时刻点，返回数据可能与预期不一致。
         * 
         * - 流量类指标单位统一为Byte（字节）、请求数类指标单位统一为次数。用于查询指定域名、指定统计指标的明细数据。
         * 
         * - 单租户调用频率：5次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTopUrl(showTopUrlRequest?: ShowTopUrlRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/top-url",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let statType;
            
            let serviceArea;
            
            let enterpriseProjectId;

            if (showTopUrlRequest !== null && showTopUrlRequest !== undefined) {
                if (showTopUrlRequest instanceof ShowTopUrlRequest) {
                    startTime = showTopUrlRequest.startTime;
                    endTime = showTopUrlRequest.endTime;
                    domainName = showTopUrlRequest.domainName;
                    statType = showTopUrlRequest.statType;
                    serviceArea = showTopUrlRequest.serviceArea;
                    enterpriseProjectId = showTopUrlRequest.enterpriseProjectId;
                } else {
                    startTime = showTopUrlRequest['start_time'];
                    endTime = showTopUrlRequest['end_time'];
                    domainName = showTopUrlRequest['domain_name'];
                    statType = showTopUrlRequest['stat_type'];
                    serviceArea = showTopUrlRequest['service_area'];
                    enterpriseProjectId = showTopUrlRequest['enterprise_project_id'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showTopUrl.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showTopUrl.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showTopUrl.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling showTopUrl.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }
            if (serviceArea !== null && serviceArea !== undefined) {
                localVarQueryParameter['service_area'] = serviceArea;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询刷新预热URL记录。如需此接口，请提交工单开通。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUrlTaskInfo(showUrlTaskInfoRequest?: ShowUrlTaskInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/contentgateway/url-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let offset;
            
            let limit;
            
            let url;
            
            let taskType;
            
            let status;
            
            let fileType;

            if (showUrlTaskInfoRequest !== null && showUrlTaskInfoRequest !== undefined) {
                if (showUrlTaskInfoRequest instanceof ShowUrlTaskInfoRequest) {
                    startTime = showUrlTaskInfoRequest.startTime;
                    endTime = showUrlTaskInfoRequest.endTime;
                    offset = showUrlTaskInfoRequest.offset;
                    limit = showUrlTaskInfoRequest.limit;
                    url = showUrlTaskInfoRequest.url;
                    taskType = showUrlTaskInfoRequest.taskType;
                    status = showUrlTaskInfoRequest.status;
                    fileType = showUrlTaskInfoRequest.fileType;
                } else {
                    startTime = showUrlTaskInfoRequest['start_time'];
                    endTime = showUrlTaskInfoRequest['end_time'];
                    offset = showUrlTaskInfoRequest['offset'];
                    limit = showUrlTaskInfoRequest['limit'];
                    url = showUrlTaskInfoRequest['url'];
                    taskType = showUrlTaskInfoRequest['task_type'];
                    status = showUrlTaskInfoRequest['status'];
                    fileType = showUrlTaskInfoRequest['file_type'];
                }
            }

        
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (url !== null && url !== undefined) {
                localVarQueryParameter['url'] = url;
            }
            if (taskType !== null && taskType !== undefined) {
                localVarQueryParameter['task_type'] = taskType;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (fileType !== null && fileType !== undefined) {
                localVarQueryParameter['file_type'] = fileType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于查询域名归属校验信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVerifyDomainOwnerInfo(showVerifyDomainOwnerInfoRequest?: ShowVerifyDomainOwnerInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/configuration/domains/{domain_name}/domain-verifies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainName;

            if (showVerifyDomainOwnerInfoRequest !== null && showVerifyDomainOwnerInfoRequest !== undefined) {
                if (showVerifyDomainOwnerInfoRequest instanceof ShowVerifyDomainOwnerInfoRequest) {
                    domainName = showVerifyDomainOwnerInfoRequest.domainName;
                } else {
                    domainName = showVerifyDomainOwnerInfoRequest['domain_name'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showVerifyDomainOwnerInfo.');
            }

            options.pathParams = { 'domain_name': domainName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改域名配置接口，支持修改业务类型、服务范围、备注、IPv6开关、回源方式、回源URL改写、高级回源、Range回源、回源跟随、回源是否校验Etag、回源超时时间、回源请求头、HTTPS配置、TLS版本配置、强制跳转、HSTS、HTTP/2、OCSP Stapling、QUIC、缓存规则、状态码缓存时间、防盗链、IP黑白名单、Use-Agent黑白名单、URL鉴权配置、远程鉴权配置、IP访问限频、HTTP header配置、自定义错误页面配置、智能压缩、请求限速配置、WebSocket配置、视频拖拽、回源SNI、访问URL重写、浏览器缓存过期时间、区域访问控制。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainFullConfig(updateDomainFullConfigRequest?: UpdateDomainFullConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1.1/cdn/configuration/domains/{domain_name}/configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let domainName;
            
            let enterpriseProjectId;

            if (updateDomainFullConfigRequest !== null && updateDomainFullConfigRequest !== undefined) {
                if (updateDomainFullConfigRequest instanceof UpdateDomainFullConfigRequest) {
                    domainName = updateDomainFullConfigRequest.domainName;
                    enterpriseProjectId = updateDomainFullConfigRequest.enterpriseProjectId;
                    body = updateDomainFullConfigRequest.body
                } else {
                    domainName = updateDomainFullConfigRequest['domain_name'];
                    enterpriseProjectId = updateDomainFullConfigRequest['enterprise_project_id'];
                    body = updateDomainFullConfigRequest['body'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling updateDomainFullConfig.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_name': domainName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 一个证书配置多个域名，设置域名强制https回源参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainMultiCertificates(updateDomainMultiCertificatesRequest?: UpdateDomainMultiCertificatesRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/domains/config-https-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (updateDomainMultiCertificatesRequest !== null && updateDomainMultiCertificatesRequest !== undefined) {
                if (updateDomainMultiCertificatesRequest instanceof UpdateDomainMultiCertificatesRequest) {
                    enterpriseProjectId = updateDomainMultiCertificatesRequest.enterpriseProjectId;
                    body = updateDomainMultiCertificatesRequest.body
                } else {
                    enterpriseProjectId = updateDomainMultiCertificatesRequest['enterprise_project_id'];
                    body = updateDomainMultiCertificatesRequest['body'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改域名模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainTemplate(updateDomainTemplateRequest?: UpdateDomainTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/configuration/templates/{tml_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let tmlId;

            if (updateDomainTemplateRequest !== null && updateDomainTemplateRequest !== undefined) {
                if (updateDomainTemplateRequest instanceof UpdateDomainTemplateRequest) {
                    tmlId = updateDomainTemplateRequest.tmlId;
                    body = updateDomainTemplateRequest.body
                } else {
                    tmlId = updateDomainTemplateRequest['tml_id'];
                    body = updateDomainTemplateRequest['body'];
                }
            }

        
            if (tmlId === null || tmlId === undefined) {
            throw new RequiredError('tmlId','Required parameter tmlId was null or undefined when calling updateDomainTemplate.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'tml_id': tmlId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 全量更新规则引擎规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFullRule(updateFullRuleRequest?: UpdateFullRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/configuration/domains/{domain_name}/rules/full-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainName;

            if (updateFullRuleRequest !== null && updateFullRuleRequest !== undefined) {
                if (updateFullRuleRequest instanceof UpdateFullRuleRequest) {
                    domainName = updateFullRuleRequest.domainName;
                    body = updateFullRuleRequest.body
                } else {
                    domainName = updateFullRuleRequest['domain_name'];
                    body = updateFullRuleRequest['body'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling updateFullRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_name': domainName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改私有桶开启关闭状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePrivateBucketAccess(updatePrivateBucketAccessRequest?: UpdatePrivateBucketAccessRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/domains/{domain_id}/private-bucket-access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (updatePrivateBucketAccessRequest !== null && updatePrivateBucketAccessRequest !== undefined) {
                if (updatePrivateBucketAccessRequest instanceof UpdatePrivateBucketAccessRequest) {
                    domainId = updatePrivateBucketAccessRequest.domainId;
                    enterpriseProjectId = updatePrivateBucketAccessRequest.enterpriseProjectId;
                    body = updatePrivateBucketAccessRequest.body
                } else {
                    domainId = updatePrivateBucketAccessRequest['domain_id'];
                    enterpriseProjectId = updatePrivateBucketAccessRequest['enterprise_project_id'];
                    body = updatePrivateBucketAccessRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updatePrivateBucketAccess.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新规则引擎规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRuleNew(updateRuleNewRequest?: UpdateRuleNewRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/configuration/domains/{domain_name}/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainName;
            
            let ruleId;

            if (updateRuleNewRequest !== null && updateRuleNewRequest !== undefined) {
                if (updateRuleNewRequest instanceof UpdateRuleNewRequest) {
                    domainName = updateRuleNewRequest.domainName;
                    ruleId = updateRuleNewRequest.ruleId;
                    body = updateRuleNewRequest.body
                } else {
                    domainName = updateRuleNewRequest['domain_name'];
                    ruleId = updateRuleNewRequest['rule_id'];
                    body = updateRuleNewRequest['body'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling updateRuleNew.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateRuleNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_name': domainName,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新共享缓存组。
         * - 单租户调用频率：5次/s。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateShareCacheGroups(updateShareCacheGroupsRequest?: UpdateShareCacheGroupsRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/configuration/share-cache-groups/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateShareCacheGroupsRequest !== null && updateShareCacheGroupsRequest !== undefined) {
                if (updateShareCacheGroupsRequest instanceof UpdateShareCacheGroupsRequest) {
                    id = updateShareCacheGroupsRequest.id;
                    body = updateShareCacheGroupsRequest.body
                } else {
                    id = updateShareCacheGroupsRequest['id'];
                    body = updateShareCacheGroupsRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateShareCacheGroups.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * modify subscription task
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubscriptionTask(updateSubscriptionTaskRequest?: UpdateSubscriptionTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v1/cdn/statistics/subscription-tasks/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateSubscriptionTaskRequest !== null && updateSubscriptionTaskRequest !== undefined) {
                if (updateSubscriptionTaskRequest instanceof UpdateSubscriptionTaskRequest) {
                    id = updateSubscriptionTaskRequest.id;
                    body = updateSubscriptionTaskRequest.body
                } else {
                    id = updateSubscriptionTaskRequest['id'];
                    body = updateSubscriptionTaskRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateSubscriptionTask.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于域名归属校验
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        verifyDomainOwner(verifyDomainOwnerRequest?: VerifyDomainOwnerRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/cdn/configuration/domains/{domain_name}/verify-owner",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainName;

            if (verifyDomainOwnerRequest !== null && verifyDomainOwnerRequest !== undefined) {
                if (verifyDomainOwnerRequest instanceof VerifyDomainOwnerRequest) {
                    domainName = verifyDomainOwnerRequest.domainName;
                    body = verifyDomainOwnerRequest.body
                } else {
                    domainName = verifyDomainOwnerRequest['domain_name'];
                    body = verifyDomainOwnerRequest['body'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling verifyDomainOwner.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_name': domainName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CdnClient {
    return new CdnClient(client);
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