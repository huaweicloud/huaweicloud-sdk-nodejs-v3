import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BatchDeleteTagsRequest } from './model/BatchDeleteTagsRequest';
import { BatchDeleteTagsResponse } from './model/BatchDeleteTagsResponse';
import { BlackWhiteListBody } from './model/BlackWhiteListBody';
import { CacheConfig } from './model/CacheConfig';
import { CacheConfigRequest } from './model/CacheConfigRequest';
import { CacheConfigRequestBody } from './model/CacheConfigRequestBody';
import { CacheUrlParameterFilter } from './model/CacheUrlParameterFilter';
import { CdnIps } from './model/CdnIps';
import { Compress } from './model/Compress';
import { CompressRequest } from './model/CompressRequest';
import { CompressResponse } from './model/CompressResponse';
import { CompressRules } from './model/CompressRules';
import { Configs } from './model/Configs';
import { ConfigsGetBody } from './model/ConfigsGetBody';
import { CreateDomainRequest } from './model/CreateDomainRequest';
import { CreateDomainRequestBody } from './model/CreateDomainRequestBody';
import { CreateDomainResponse } from './model/CreateDomainResponse';
import { CreateDomainResponseBodyContent } from './model/CreateDomainResponseBodyContent';
import { CreatePreheatingTasksRequest } from './model/CreatePreheatingTasksRequest';
import { CreatePreheatingTasksResponse } from './model/CreatePreheatingTasksResponse';
import { CreateRefreshTasksRequest } from './model/CreateRefreshTasksRequest';
import { CreateRefreshTasksResponse } from './model/CreateRefreshTasksResponse';
import { CreateTagsRequest } from './model/CreateTagsRequest';
import { CreateTagsRequestBody } from './model/CreateTagsRequestBody';
import { CreateTagsResponse } from './model/CreateTagsResponse';
import { DeleteDomainRequest } from './model/DeleteDomainRequest';
import { DeleteDomainResponse } from './model/DeleteDomainResponse';
import { DeleteTagsRequestBody } from './model/DeleteTagsRequestBody';
import { DisableDomainRequest } from './model/DisableDomainRequest';
import { DisableDomainResponse } from './model/DisableDomainResponse';
import { DomainBody } from './model/DomainBody';
import { DomainItemDetail } from './model/DomainItemDetail';
import { DomainItemLocationDetails } from './model/DomainItemLocationDetails';
import { DomainOriginHost } from './model/DomainOriginHost';
import { DomainRegion } from './model/DomainRegion';
import { Domains } from './model/Domains';
import { DomainsWithPort } from './model/DomainsWithPort';
import { EnableDomainRequest } from './model/EnableDomainRequest';
import { EnableDomainResponse } from './model/EnableDomainResponse';
import { EpResourceTag } from './model/EpResourceTag';
import { ErrorCodeCache } from './model/ErrorCodeCache';
import { ErrorCodeRedirectRules } from './model/ErrorCodeRedirectRules';
import { Follow302StatusBody } from './model/Follow302StatusBody';
import { Follow302StatusRequest } from './model/Follow302StatusRequest';
import { ForceRedirect } from './model/ForceRedirect';
import { ForceRedirectConfig } from './model/ForceRedirectConfig';
import { HeaderBody } from './model/HeaderBody';
import { HeaderMap } from './model/HeaderMap';
import { HttpGetBody } from './model/HttpGetBody';
import { HttpInfoRequest } from './model/HttpInfoRequest';
import { HttpInfoRequestBody } from './model/HttpInfoRequestBody';
import { HttpInfoResponseBody } from './model/HttpInfoResponseBody';
import { HttpPutBody } from './model/HttpPutBody';
import { HttpResponseHeader } from './model/HttpResponseHeader';
import { HttpsDetail } from './model/HttpsDetail';
import { ListDomainsRequest } from './model/ListDomainsRequest';
import { ListDomainsResponse } from './model/ListDomainsResponse';
import { LogObject } from './model/LogObject';
import { ModelMap } from './model/ModelMap';
import { ModifyDomainConfigRequestBody } from './model/ModifyDomainConfigRequestBody';
import { OriginHostBody } from './model/OriginHostBody';
import { OriginHostRequest } from './model/OriginHostRequest';
import { OriginRangeBody } from './model/OriginRangeBody';
import { OriginRequest } from './model/OriginRequest';
import { OriginRequestHeader } from './model/OriginRequestHeader';
import { OriginRequestUrlRewrite } from './model/OriginRequestUrlRewrite';
import { PreheatingTaskRequest } from './model/PreheatingTaskRequest';
import { PreheatingTaskRequestBody } from './model/PreheatingTaskRequestBody';
import { Quotas } from './model/Quotas';
import { RangeStatusRequest } from './model/RangeStatusRequest';
import { Referer } from './model/Referer';
import { RefererBody } from './model/RefererBody';
import { RefererRsp } from './model/RefererRsp';
import { RefreshTaskRequest } from './model/RefreshTaskRequest';
import { RefreshTaskRequestBody } from './model/RefreshTaskRequestBody';
import { ResourceBody } from './model/ResourceBody';
import { Rules } from './model/Rules';
import { ShowBlackWhiteListRequest } from './model/ShowBlackWhiteListRequest';
import { ShowBlackWhiteListResponse } from './model/ShowBlackWhiteListResponse';
import { ShowCacheRulesRequest } from './model/ShowCacheRulesRequest';
import { ShowCacheRulesResponse } from './model/ShowCacheRulesResponse';
import { ShowCertificatesHttpsInfoRequest } from './model/ShowCertificatesHttpsInfoRequest';
import { ShowCertificatesHttpsInfoResponse } from './model/ShowCertificatesHttpsInfoResponse';
import { ShowDomainDetailRequest } from './model/ShowDomainDetailRequest';
import { ShowDomainDetailResponse } from './model/ShowDomainDetailResponse';
import { ShowDomainFullConfigRequest } from './model/ShowDomainFullConfigRequest';
import { ShowDomainFullConfigResponse } from './model/ShowDomainFullConfigResponse';
import { ShowDomainItemDetailsRequest } from './model/ShowDomainItemDetailsRequest';
import { ShowDomainItemDetailsResponse } from './model/ShowDomainItemDetailsResponse';
import { ShowDomainItemLocationDetailsRequest } from './model/ShowDomainItemLocationDetailsRequest';
import { ShowDomainItemLocationDetailsResponse } from './model/ShowDomainItemLocationDetailsResponse';
import { ShowDomainLocationStatsRequest } from './model/ShowDomainLocationStatsRequest';
import { ShowDomainLocationStatsResponse } from './model/ShowDomainLocationStatsResponse';
import { ShowDomainStatsRequest } from './model/ShowDomainStatsRequest';
import { ShowDomainStatsResponse } from './model/ShowDomainStatsResponse';
import { ShowHistoryTaskDetailsRequest } from './model/ShowHistoryTaskDetailsRequest';
import { ShowHistoryTaskDetailsResponse } from './model/ShowHistoryTaskDetailsResponse';
import { ShowHistoryTasksRequest } from './model/ShowHistoryTasksRequest';
import { ShowHistoryTasksResponse } from './model/ShowHistoryTasksResponse';
import { ShowHttpInfoRequest } from './model/ShowHttpInfoRequest';
import { ShowHttpInfoResponse } from './model/ShowHttpInfoResponse';
import { ShowIpInfoRequest } from './model/ShowIpInfoRequest';
import { ShowIpInfoResponse } from './model/ShowIpInfoResponse';
import { ShowLogsRequest } from './model/ShowLogsRequest';
import { ShowLogsResponse } from './model/ShowLogsResponse';
import { ShowOriginHostRequest } from './model/ShowOriginHostRequest';
import { ShowOriginHostResponse } from './model/ShowOriginHostResponse';
import { ShowQuotaRequest } from './model/ShowQuotaRequest';
import { ShowQuotaResponse } from './model/ShowQuotaResponse';
import { ShowReferRequest } from './model/ShowReferRequest';
import { ShowReferResponse } from './model/ShowReferResponse';
import { ShowResponseHeaderRequest } from './model/ShowResponseHeaderRequest';
import { ShowResponseHeaderResponse } from './model/ShowResponseHeaderResponse';
import { ShowTagsRequest } from './model/ShowTagsRequest';
import { ShowTagsResponse } from './model/ShowTagsResponse';
import { ShowTopUrlRequest } from './model/ShowTopUrlRequest';
import { ShowTopUrlResponse } from './model/ShowTopUrlResponse';
import { ShowUrlTaskInfoRequest } from './model/ShowUrlTaskInfoRequest';
import { ShowUrlTaskInfoResponse } from './model/ShowUrlTaskInfoResponse';
import { SourceWithPort } from './model/SourceWithPort';
import { Sources } from './model/Sources';
import { SourcesConfig } from './model/SourcesConfig';
import { TasksObject } from './model/TasksObject';
import { TopUrlSummary } from './model/TopUrlSummary';
import { UpdateBlackWhiteListRequest } from './model/UpdateBlackWhiteListRequest';
import { UpdateBlackWhiteListResponse } from './model/UpdateBlackWhiteListResponse';
import { UpdateCacheRulesRequest } from './model/UpdateCacheRulesRequest';
import { UpdateCacheRulesResponse } from './model/UpdateCacheRulesResponse';
import { UpdateDomainFullConfigRequest } from './model/UpdateDomainFullConfigRequest';
import { UpdateDomainFullConfigResponse } from './model/UpdateDomainFullConfigResponse';
import { UpdateDomainMultiCertificatesRequest } from './model/UpdateDomainMultiCertificatesRequest';
import { UpdateDomainMultiCertificatesRequestBody } from './model/UpdateDomainMultiCertificatesRequestBody';
import { UpdateDomainMultiCertificatesRequestBodyContent } from './model/UpdateDomainMultiCertificatesRequestBodyContent';
import { UpdateDomainMultiCertificatesResponse } from './model/UpdateDomainMultiCertificatesResponse';
import { UpdateDomainMultiCertificatesResponseBodyContent } from './model/UpdateDomainMultiCertificatesResponseBodyContent';
import { UpdateDomainOriginRequest } from './model/UpdateDomainOriginRequest';
import { UpdateDomainOriginResponse } from './model/UpdateDomainOriginResponse';
import { UpdateFollow302SwitchRequest } from './model/UpdateFollow302SwitchRequest';
import { UpdateFollow302SwitchResponse } from './model/UpdateFollow302SwitchResponse';
import { UpdateHttpsInfoRequest } from './model/UpdateHttpsInfoRequest';
import { UpdateHttpsInfoResponse } from './model/UpdateHttpsInfoResponse';
import { UpdateOriginHostRequest } from './model/UpdateOriginHostRequest';
import { UpdateOriginHostResponse } from './model/UpdateOriginHostResponse';
import { UpdatePrivateBucketAccessBody } from './model/UpdatePrivateBucketAccessBody';
import { UpdatePrivateBucketAccessRequest } from './model/UpdatePrivateBucketAccessRequest';
import { UpdatePrivateBucketAccessResponse } from './model/UpdatePrivateBucketAccessResponse';
import { UpdateRangeSwitchRequest } from './model/UpdateRangeSwitchRequest';
import { UpdateRangeSwitchResponse } from './model/UpdateRangeSwitchResponse';
import { UpdateReferRequest } from './model/UpdateReferRequest';
import { UpdateReferResponse } from './model/UpdateReferResponse';
import { UpdateResponseHeaderRequest } from './model/UpdateResponseHeaderRequest';
import { UpdateResponseHeaderResponse } from './model/UpdateResponseHeaderResponse';
import { UrlAuth } from './model/UrlAuth';
import { UrlAuthGetBody } from './model/UrlAuthGetBody';
import { UrlObject } from './model/UrlObject';
import { Urls } from './model/Urls';
import { UserAgentFilter } from './model/UserAgentFilter';

export class CdnClient {
    public static newBuilder(): ClientBuilder<CdnClient> {
            return new ClientBuilder<CdnClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 用于删除资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源标签配置接口
     * @param {DeleteTagsRequestBody} batchDeleteTagsRequestBody DeleteTags对象。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteTags(batchDeleteTagsRequest?: BatchDeleteTagsRequest): Promise<BatchDeleteTagsResponse> {
        const options = ParamCreater().batchDeleteTags(batchDeleteTagsRequest);

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
     * @param {CreateDomainRequestBody} domain This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDomain(createDomainRequest?: CreateDomainRequest): Promise<CreateDomainResponse> {
        const options = ParamCreater().createDomain(createDomainRequest);

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
     * @param {PreheatingTaskRequest} preheatingTask urls: 多个URL之间需要用逗号分隔，目前不支持对目录的预热，单个url的长度限制为4096字符。每个账户每天最多预热1000个URL，单次提交数量不超过1000条。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示在当前企业项目下添加缓存预热任务，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPreheatingTasks(createPreheatingTasksRequest?: CreatePreheatingTasksRequest): Promise<CreatePreheatingTasksResponse> {
        const options = ParamCreater().createPreheatingTasks(createPreheatingTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建刷新缓存任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建刷新缓存任务
     * @param {RefreshTaskRequest} refreshTask type: 刷新类型，其值可为file 或directory，默认为file; urls: 多个URL之间需用逗号分隔，单个url长度限制为4096字符。每个账户每天最多刷新2000个文件和100个目录，单次提交数量不超过1000条。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示在当前企业项目下添加缓存刷新任务，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRefreshTasks(createRefreshTasksRequest?: CreateRefreshTasksRequest): Promise<CreateRefreshTasksResponse> {
        const options = ParamCreater().createRefreshTasks(createRefreshTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于创建资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源标签配置接口
     * @param {CreateTagsRequestBody} createTagsRequestBody CreateTags对象。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTags(createTagsRequest?: CreateTagsRequest): Promise<CreateTagsResponse> {
        const options = ParamCreater().createTags(createTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除加速域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除加速域名
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDomain(deleteDomainRequest?: DeleteDomainRequest): Promise<DeleteDomainResponse> {
        const options = ParamCreater().deleteDomain(deleteDomainRequest);

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
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableDomain(disableDomainRequest?: DisableDomainRequest): Promise<DisableDomainResponse> {
        const options = ParamCreater().disableDomain(disableDomainRequest);

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
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableDomain(enableDomainRequest?: EnableDomainRequest): Promise<EnableDomainResponse> {
        const options = ParamCreater().enableDomain(enableDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询加速域名信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询加速域名
     * @param {string} [domainName] 加速域名，采用模糊匹配的方式。（长度限制为1-255字符）。
     * @param {'web' | 'download' | 'video' | 'wholeSite'} [businessType] 加速域名的业务类型。取值： - web（网站加速） - download（文件下载加速） - video（点播加速） - wholeSite（全站加速）
     * @param {'online' | 'offline' | 'configuring' | 'configure_failed' | 'checking' | 'check_failed' | 'deleting'} [domainStatus] 加速域名状态。取值意义： - online表示“已开启” - offline表示“已停用” - configuring表示“配置中” - configure_failed表示“配置失败” - checking表示“审核中” - check_failed表示“审核未通过” - deleting表示“删除中”。
     * @param {'mainland_china' | 'outside_mainland_china' | 'global'} [serviceArea] 华为云CDN提供的加速服务范围，包含： - mainland_china 中国大陆 - outside_mainland_china 中国大陆境外 - global 全球。
     * @param {number} [pageSize] 每页的数量，取值范围1-10000，不设值时默认值为30。
     * @param {number} [pageNumber] 查询的页码。取值范围1-65535，不设值时默认值为1。
     * @param {boolean} [showTags] 展示标签标识 true：不展示 false：展示。
     * @param {boolean} [exactMatch] 精准匹配 on：开启 off：关闭。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomains(listDomainsRequest?: ListDomainsRequest): Promise<ListDomainsResponse> {
        const options = ParamCreater().listDomains(listDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域名已经设置的IP黑白名单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IP黑白名单
     * @param {string} domainId 需要查询IP黑白名单的域名id。获取方法请参见查询加速域名。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBlackWhiteList(showBlackWhiteListRequest?: ShowBlackWhiteListRequest): Promise<ShowBlackWhiteListResponse> {
        const options = ParamCreater().showBlackWhiteList(showBlackWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询缓存规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询缓存规则
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCacheRules(showCacheRulesRequest?: ShowCacheRulesRequest): Promise<ShowCacheRulesResponse> {
        const options = ParamCreater().showCacheRules(showCacheRulesRequest);

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
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCertificatesHttpsInfo(showCertificatesHttpsInfoRequest?: ShowCertificatesHttpsInfoRequest): Promise<ShowCertificatesHttpsInfoResponse> {
        const options = ParamCreater().showCertificatesHttpsInfo(showCertificatesHttpsInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询加速域名详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询加速域名详情
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainDetail(showDomainDetailRequest?: ShowDomainDetailRequest): Promise<ShowDomainDetailResponse> {
        const options = ParamCreater().showDomainDetail(showDomainDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域名配置接口，支持查询回源请求头、HTTP header配置、URL鉴权、证书、源站、回源协议、强制重定向、智能压缩、缓存URL参数、IPv6开关、状态码缓存时间、Range回源、User-Agent黑白名单、改写回源URL、自定义错误页面
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名配置接口
     * @param {string} domainName 加速域名
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainFullConfig(showDomainFullConfigRequest?: ShowDomainFullConfigRequest): Promise<ShowDomainFullConfigResponse> {
        const options = ParamCreater().showDomainFullConfig(showDomainFullConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 支持查询90天内的数据。
     * - 查询跨度不能超过7天。
     * - 最多同时指定100个域名。
     * - 起始时间和结束时间，左闭右开，需要同时指定。
     * - 开始时间、结束时间必须传毫秒级时间戳，且必须为5分钟整时刻点，如：0分、5分、10分、15分等，如果传的不是5分钟时刻点，返回数据可能与预期不一致。
     * - 统一用开始时间表示一个时间段，如：2019-01-24 20:15:00 表示取 [20:15:00, 20:20:00)的统计数据，且左闭右开。
     * - 流量类指标单位统一为Byte（字节）、带宽类指标单位统一为bit/s（比特/秒）、请求数类指标单位统一为次数。用于查询指定域名、指定统计指标的明细数据。
     * - 如果传的是多个域名，则每个域名的数据分开返回。
     * - 支持同时查询多个指标，不超过10个。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询域名的统计明细-按域名单独返回
     * @param {number} startTime 查询起始时间戳，必须设为5分钟整时刻点
     * @param {number} endTime 查询结束时间戳，必须设为5分钟整时刻点
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com，all表示查询名下全部域名
     * @param {string} statType 网络资源消耗： - bw（带宽） - flux（流量） - bs_bw(回源带宽) - bs_flux（回源流量）  访问情况： - req_num（请求总数） - hit_num（请求命中次数） - bs_num(回源总数) - bs_fail_num(回源失败数) - hit_flux（命中流量）  HTTP状态码（组合指标）： - http_code_2xx(状态码汇总2xx) - http_code_3xx(状态码汇总3xx) - http_code_4xx(状态码汇总4xx) - http_code_5xx(状态码汇总5xx) - bs_http_code_2xx（回源状态码汇总2xx） - bs_http_code_3xx（回源状态码汇总3xx） - bs_http_code_4xx（回源状态码汇总4xx） - bs_http_code_5xx（回源状态码汇总5xx） - status_code_2xx（状态码详情2xx） - status_code_3xx（状态码详情3xx） - status_code_4xx（状态码详情4xx） - status_code_5xx（状态码详情5xx） - bs_status_code_2xx（回源状态码详情2xx） - bs_status_code_3xx（回源状态码详情3xx） - bs_status_code_4xx（回源状态码详情4xx） - bs_status_code_5xx（回源状态码详情5xx） - status_code和bs_status_code不能一起查询，否则数据会不准确，status_code不支持指定服务区域
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，不传表示查询默认项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {string} [serviceArea] mainland_china(中国大陆)，outside_mainland_china(中国大陆境外)，默认为mainland_china。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainItemDetails(showDomainItemDetailsRequest?: ShowDomainItemDetailsRequest): Promise<ShowDomainItemDetailsResponse> {
        const options = ParamCreater().showDomainItemDetails(showDomainItemDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 支持查询90天内的数据。
     * - 查询跨度是7天。
     * - 最多同时指定100个域名。
     * - 起始时间和结束时间，左闭右开，需要同时指定。
     * - 开始时间、结束时间必须传毫秒级时间戳，且必须为5分钟整时刻点，如：0分、5分、10分、15分等，如果传的不是5分钟时刻点，返回数据可能与预期不一致。
     * - 统一用开始时间表示一个时间段，如：2019-01-24 20:15:00 表示取 [20:15:00, 20:20:00)的统计数据，且左闭右开。
     * - 流量类指标单位统一为Byte（字节）、带宽类指标单位统一为bit/s（比特/秒）、请求数类指标单位统一为次数。
     * - 用于查询指定域名、指定统计指标的明细数据。
     * - 如果传的是多个域名，则每个域名的数据分开返回。
     * - 支持按区域、运营商维度查询统计数据, 回源指标除外。
     * - 支持同时查询多个指标，不超过10个。
     * - 域名为海外加速场景不适用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询域名的区域、运营商统计明细-按域名单独返回
     * @param {number} startTime 查询开始时间戳，必须设为5分钟整时刻点
     * @param {number} endTime 查询结束时间戳，必须设为5分钟整时刻点
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com，all表示查询名下全部域名
     * @param {string} statType 指标类型列表 网络资源消耗：bw（带宽），flux（流量），ipv6_bw(ipv6带宽)，ipv6_flux(ipv6流量), https_bw(https带宽)，https_flux(https流量) 访问情况：req_num（请求总数），hit_num（请求命中次数），req_time(请求时长) HTTP状态码（组合指标）：status_code_2xx(状态码2xx)，status_code_3xx(状态码3xx)，status_code_4xx(状态码4xx)，status_code_5xx(状态码5xx)
     * @param {string} region 区域列表，以逗号分隔，all表示查询全部区域
     * @param {string} isp 运营商列表，以逗号分隔，all表示查询全部运营商
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，不传表示查询默认项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainItemLocationDetails(showDomainItemLocationDetailsRequest?: ShowDomainItemLocationDetailsRequest): Promise<ShowDomainItemLocationDetailsResponse> {
        const options = ParamCreater().showDomainItemLocationDetails(showDomainItemLocationDetailsRequest);

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
     * - action取值：location_detail,location_summary
     * 
     * - 流量类指标单位统一为Byte（字节）、带宽类指标单位统一为bit/s（比特/秒）、请求数类和状态码类指标单位统一为次数。用于查询指定域名、指定统计指标的区域运营商明细数据。
     * 
     * - 单租户调用频率：15次/s。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名统计数据-区域运营商
     * @param {string} action - 动作名称，可选location_summary、location_detail。 - location_summary：查询汇总数据 - location_detail：查询数据详情。
     * @param {number} startTime - 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下：  - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00)  - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00)  - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime - 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下：  - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00)  - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00)  - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com，all表示查询名下全部域名。
     * @param {string} statType - 网络资源消耗   - bw(带宽)   - flux(流量) - 访问情况   - req_num(请求总数) - HTTP状态码（组合指标）   - http_code_2xx(状态码汇总2xx)   - http_code_3xx(状态码汇总3xx)   - http_code_4xx(状态码汇总4xx)   - http_code_5xx(状态码汇总5xx)   - status_code_2xx(状态码详情2xx)   - status_code_3xx(状态码详情3xx)   - status_code_4xx(状态码详情4xx)   - status_code_5xx(状态码详情5xx)
     * @param {number} [interval] - 查询时间间隔，单位：秒，取值说明： - 300(5分钟)：最大查询跨度2天 - 3600(1小时)：最大查询跨度7天 - 86400(1天)：最大查询跨度31天 - 如果不传，默认取对应时间跨度的最小间隔。
     * @param {string} [groupBy] 数据分组方式，多个以英文逗号分隔，可选domain、country、province、isp，默认不分组。
     * @param {string} [country] 国家编码，多个以英文逗号分隔，all表示全部，取值见附录。
     * @param {string} [province] 省份编码，当country为cn（中国）时有效，多个以英文逗号分隔，all表示全部，取值见附录。
     * @param {string} [isp] 运营商编码，多个以英文逗号分隔，all表示全部，取值见附录。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
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
     * @param {string} action - 动作名称，可选summary、detail。 - summary：查询汇总数据 - detail：查询数据详情。
     * @param {number} startTime - 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下：  - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00)  - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00)  - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime - 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下：  - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00)  - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00)  - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com，all表示查询名下全部域名。
     * @param {string} statType - 网络资源消耗：   - bw（带宽）   - flux（流量）   - bs_bw（回源带宽）   - bs_flux（回源流量） - 访问情况：   - req_num（请求总数）   - hit_num（请求命中次数）   - bs_num（回源总数）   - bs_fail_num（回源失败数）   - hit_flux（命中流量） - HTTP状态码（组合指标）：   - http_code_2xx（状态码汇总2xx）   - http_code_3xx（状态码汇总3xx）   - http_code_4xx（状态码汇总4xx）   - http_code_5xx（状态码汇总5xx）   - bs_http_code_2xx（回源状态码汇总2xx）   - bs_http_code_3xx（回源状态码汇总3xx）   - bs_http_code_4xx（回源状态码汇总4xx）   - bs_http_code_5xx（回源状态码汇总5xx）   - status_code_2xx（状态码详情2xx）   - status_code_3xx（状态码详情3xx）   - status_code_4xx（状态码详情4xx）   - status_code_5xx（状态码详情5xx）   - bs_status_code_2xx（回源状态码详情2xx）   - bs_status_code_3xx（回源状态码详情3xx）   - bs_status_code_4xx（回源状态码详情4xx）   - bs_status_code_5xx（回源状态码详情5xx）   - status_code和bs_status_code不能一起查询
     * @param {number} [interval] - 查询时间间隔，单位：秒，取值说明： - 300(5分钟)：最大查询跨度2天 - 3600(1小时)：最大查询跨度7天 - 86400(1天)：最大查询跨度31天 - 如果不传，默认取对应时间跨度的最小间隔。
     * @param {string} [groupBy] 数据分组方式，可选domain，默认不分组。
     * @param {string} [serviceArea] 服务区域：mainland_china（默认）、outside_mainland_china，当查询回源类指标时该参数无效。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
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
        options['responseHeaders'] = [''];

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
     * @param {string} [orderField] 用来排序的字段，支持的字段有“task_type”，“total”，“processing”， “succeed”，“failed”，“create_time”。order_field和order_type必须同时传值，否则使用默认值\&quot;create_time\&quot; 和 \&quot;desc\&quot;。
     * @param {string} [orderType] desc 或者asc。默认值desc。
     * @param {'file' | 'directory'} [fileType] 默认是文件file。file：文件,directory：目录。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHistoryTasks(showHistoryTasksRequest?: ShowHistoryTasksRequest): Promise<ShowHistoryTasksResponse> {
        const options = ParamCreater().showHistoryTasks(showHistoryTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取加速域名证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询HTTPS配置
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHttpInfo(showHttpInfoRequest?: ShowHttpInfoRequest): Promise<ShowHttpInfoResponse> {
        const options = ParamCreater().showHttpInfo(showHttpInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

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
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 日志查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 日志查询
     * @param {string} domainName 只支持单个域名，如：www.test1.com。
     * @param {number} queryDate 查询开始时间，查询开始时间到开始时间+1天内的日志数据，取值范围是距离当前30天内。
     * @param {number} [pageSize] 单页最大数量，取值范围为1-10000。
     * @param {number} [pageNumber] 当前查询第几页，取值范围为1-65535。
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
     * 查询回源HOST。回源HOST是CDN节点在回源过程中，在源站访问的站点域名，即http请求头中的host信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询回源HOST
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOriginHost(showOriginHostRequest?: ShowOriginHostRequest): Promise<ShowOriginHostResponse> {
        const options = ParamCreater().showOriginHost(showOriginHostRequest);

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
    public showQuota(): Promise<ShowQuotaResponse> {
        const options = ParamCreater().showQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Referer过滤规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Referer过滤规则
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRefer(showReferRequest?: ShowReferRequest): Promise<ShowReferResponse> {
        const options = ParamCreater().showRefer(showReferRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举header所有配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询响应头配置
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResponseHeader(showResponseHeaderRequest?: ShowResponseHeaderRequest): Promise<ShowResponseHeaderResponse> {
        const options = ParamCreater().showResponseHeader(showResponseHeaderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于查询资源标签列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签列表配置接口
     * @param {string} resourceId 资源id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTags(showTagsRequest?: ShowTagsRequest): Promise<ShowTagsResponse> {
        const options = ParamCreater().showTags(showTagsRequest);

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
     * - 起始时间和结束时间，左闭右开，需要同时指定。如查询2021-10-24 00:00:00 到 2021-10-25 00:00:00
     * 的数据，表示取 [2021-10-24 00:00:00, 2021-10-25 00:00:00)的统计数据。
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
     * @param {number} startTime 查询起始时间戳（单位：毫秒）。该时间戳的取值在转化为日期格式后须满足以下格式：XXXX-XX-XX 00:00:00
     * @param {number} endTime 查询结束时间戳（单位：毫秒）。该时间戳的取值在转化为日期格式后须满足以下格式：XXXX-XX-XX 00:00:00
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com ，ALL表示查询名下全部域名。
     * @param {'flux' | 'req_num'} statType 参数类型支持：flux(流量),req_num(请求总数)。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {'mainland_china' | 'outside_mainland_china'} [serviceArea] mainland_china(中国大陆)，outside_mainland_china(中国大陆境外)，默认为mainland_china。
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
     * 查询刷新预热URL记录。如需此接口，请提交工单开通
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询刷新预热URL记录
     * @param {number} [startTime] 起始时间戳（毫秒），默认当天00:00
     * @param {number} [endTime] 结束时间戳（毫秒），默认次日00:00
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 单次查询数据条数，上限为100
     * @param {string} [url] 刷新预热url
     * @param {string} [taskType] 任务类型，REFRESH：刷新任务；PREHEATING：预热任务
     * @param {string} [status] url状态，状态类型：processing：处理中；succeed：完成；failed：失败；waiting：等待；refreshing：刷新中; preheating : 预热中
     * @param {string} [fileType] 文件类型，file:文件;directory:目录
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
     * 设置域名的IP黑白名单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置IP黑白名单
     * @param {string} domainId 需要设置IP黑白名单的域名id。获取方法请参见查询加速域名。
     * @param {BlackWhiteListBody} blackWhiteListBody This is a auto Body Object
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBlackWhiteList(updateBlackWhiteListRequest?: UpdateBlackWhiteListRequest): Promise<UpdateBlackWhiteListResponse> {
        const options = ParamCreater().updateBlackWhiteList(updateBlackWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置CDN节点上缓存资源的缓存策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置缓存规则
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {CacheConfigRequestBody} cacheConfig This is a auto create Body Object 
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCacheRules(updateCacheRulesRequest?: UpdateCacheRulesRequest): Promise<UpdateCacheRulesResponse> {
        const options = ParamCreater().updateCacheRules(updateCacheRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改域名全量配置接口，支持配置回源请求头、HTTP header配置、URL鉴权、证书、源站、回源协议、强制重定向、智能压缩、缓存URL参数、IPv6、状态码缓存时间、Range回源、User-Agent黑白名单、改写回源URL、自定义错误页面
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改域名全量配置接口
     * @param {string} domainName 加速域名
     * @param {ModifyDomainConfigRequestBody} configs configs对象。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainFullConfig(updateDomainFullConfigRequest?: UpdateDomainFullConfigRequest): Promise<UpdateDomainFullConfigResponse> {
        const options = ParamCreater().updateDomainFullConfig(updateDomainFullConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 一个证书配置多个域名，设置域名强制https回源参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 一个证书批量设置多个域名
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {UpdateDomainMultiCertificatesRequestBody} [https] https对象。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainMultiCertificates(updateDomainMultiCertificatesRequest?: UpdateDomainMultiCertificatesRequest): Promise<UpdateDomainMultiCertificatesResponse> {
        const options = ParamCreater().updateDomainMultiCertificates(updateDomainMultiCertificatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改源站信息。源站IP地址或域名都可以指引CDN节点回源到对应的源站服务器，源站域名不能与加速域名相同。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改源站信息
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {OriginRequest} origin This is a auto create Body Object
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainOrigin(updateDomainOriginRequest?: UpdateDomainOriginRequest): Promise<UpdateDomainOriginResponse> {
        const options = ParamCreater().updateDomainOrigin(updateDomainOriginRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启此项配置后，当CDN节点回源请求源站返回301/302状态码时，CDN节点会先跳转到301/302对应地址获取资源并缓存后再返回给用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启/关闭回源跟随
     * @param {string} domainId 加速域名id。获取方法请参见查询加速域名。
     * @param {Follow302StatusRequest} followStatus This is a auto create Body Object
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFollow302Switch(updateFollow302SwitchRequest?: UpdateFollow302SwitchRequest): Promise<UpdateFollow302SwitchResponse> {
        const options = ParamCreater().updateFollow302Switch(updateFollow302SwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置加速域名HTTPS。通过配置加速域名的HTTPS证书，并将其部署在全网CDN节点，实现HTTPS安全加速。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置HTTPS
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {HttpInfoRequest} https https对象。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHttpsInfo(updateHttpsInfoRequest?: UpdateHttpsInfoRequest): Promise<UpdateHttpsInfoResponse> {
        const options = ParamCreater().updateHttpsInfo(updateHttpsInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改回源HOST。回源HOST是CDN节点在回源过程中，在源站访问的站点域名，即http请求头中的host信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改回源HOST
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {OriginHostRequest} originHost This is a auto create Body Object
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateOriginHost(updateOriginHostRequest?: UpdateOriginHostRequest): Promise<UpdateOriginHostResponse> {
        const options = ParamCreater().updateOriginHost(updateOriginHostRequest);

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
     * @param {string} domainId 加速域名id。获取方法请参见查询加速域名。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {UpdatePrivateBucketAccessBody} [status] 桶开启关闭状态（true：开启；false：关闭），默认为关闭
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePrivateBucketAccess(updatePrivateBucketAccessRequest?: UpdatePrivateBucketAccessRequest): Promise<UpdatePrivateBucketAccessResponse> {
        const options = ParamCreater().updatePrivateBucketAccess(updatePrivateBucketAccessRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Range回源是指源站在收到CDN节点回源请求时，根据http请求头中的Range信息返回指定范围的数据给CDN节点。
     * 
     * 开启Range回源前需要确认源站是否支持Range请求，若源站不支持Range请求，开启Range回源将导致资源无法缓存。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启/关闭Range回源
     * @param {string} domainId 加速域名id。获取方法请参见查询加速域名。
     * @param {RangeStatusRequest} rangeStatus range状态（\&quot;off\&quot;/\&quot;on\&quot;）
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRangeSwitch(updateRangeSwitchRequest?: UpdateRangeSwitchRequest): Promise<UpdateRangeSwitchResponse> {
        const options = ParamCreater().updateRangeSwitch(updateRangeSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置Referer过滤规则。通过设置过滤策略，对访问者身份进行识别和过滤，实现限制访问来源的目的。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置Referer过滤规则
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {RefererBody} refer 
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRefer(updateReferRequest?: UpdateReferRequest): Promise<UpdateReferResponse> {
        const options = ParamCreater().updateRefer(updateReferRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增/修改域名响应头配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增/修改响应头配置
     * @param {string} domainId 加速域名ID。获取方法请参见查询加速域名。
     * @param {HeaderBody} headers 置响应头的键和值。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示修改当前企业项目下加速域名的配置，\&quot;all\&quot;代表所有项目。注意：当使用子帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateResponseHeader(updateResponseHeaderRequest?: UpdateResponseHeaderRequest): Promise<UpdateResponseHeaderResponse> {
        const options = ParamCreater().updateResponseHeader(updateResponseHeaderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 用于删除资源标签
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

            var body: any;

            if (batchDeleteTagsRequest !== null && batchDeleteTagsRequest !== undefined) {
                if (batchDeleteTagsRequest instanceof BatchDeleteTagsRequest) {
                    body = batchDeleteTagsRequest.body
                } else {
                    body = batchDeleteTagsRequest['body'];
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

            var body: any;

            if (createDomainRequest !== null && createDomainRequest !== undefined) {
                if (createDomainRequest instanceof CreateDomainRequest) {
                    body = createDomainRequest.body
                } else {
                    body = createDomainRequest['body'];
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
            var body: any;
            
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
            var body: any;
            
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
         * 用于创建资源标签
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

            var body: any;

            if (createTagsRequest !== null && createTagsRequest !== undefined) {
                if (createTagsRequest instanceof CreateTagsRequest) {
                    body = createTagsRequest.body
                } else {
                    body = createTagsRequest['body'];
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
         * 查询加速域名信息
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
                headers: {},
                data: {}
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
         * 查询域名已经设置的IP黑白名单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBlackWhiteList(showBlackWhiteListRequest?: ShowBlackWhiteListRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/domains/{domain_id}/ip-acl",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (showBlackWhiteListRequest !== null && showBlackWhiteListRequest !== undefined) {
                if (showBlackWhiteListRequest instanceof ShowBlackWhiteListRequest) {
                    domainId = showBlackWhiteListRequest.domainId;
                    enterpriseProjectId = showBlackWhiteListRequest.enterpriseProjectId;
                } else {
                    domainId = showBlackWhiteListRequest['domain_id'];
                    enterpriseProjectId = showBlackWhiteListRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showBlackWhiteList.');
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
         * 查询缓存规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCacheRules(showCacheRulesRequest?: ShowCacheRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/domains/{domain_id}/cache",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (showCacheRulesRequest !== null && showCacheRulesRequest !== undefined) {
                if (showCacheRulesRequest instanceof ShowCacheRulesRequest) {
                    domainId = showCacheRulesRequest.domainId;
                    enterpriseProjectId = showCacheRulesRequest.enterpriseProjectId;
                } else {
                    domainId = showCacheRulesRequest['domain_id'];
                    enterpriseProjectId = showCacheRulesRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showCacheRules.');
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
                headers: {},
                data: {}
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
         * 查询加速域名详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainDetail(showDomainDetailRequest?: ShowDomainDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/domains/{domain_id}/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (showDomainDetailRequest !== null && showDomainDetailRequest !== undefined) {
                if (showDomainDetailRequest instanceof ShowDomainDetailRequest) {
                    domainId = showDomainDetailRequest.domainId;
                    enterpriseProjectId = showDomainDetailRequest.enterpriseProjectId;
                } else {
                    domainId = showDomainDetailRequest['domain_id'];
                    enterpriseProjectId = showDomainDetailRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showDomainDetail.');
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
         * 查询域名配置接口，支持查询回源请求头、HTTP header配置、URL鉴权、证书、源站、回源协议、强制重定向、智能压缩、缓存URL参数、IPv6开关、状态码缓存时间、Range回源、User-Agent黑白名单、改写回源URL、自定义错误页面
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainName;
            
            let enterpriseProjectId;

            if (showDomainFullConfigRequest !== null && showDomainFullConfigRequest !== undefined) {
                if (showDomainFullConfigRequest instanceof ShowDomainFullConfigRequest) {
                    domainName = showDomainFullConfigRequest.domainName;
                    enterpriseProjectId = showDomainFullConfigRequest.enterpriseProjectId;
                } else {
                    domainName = showDomainFullConfigRequest['domain_name'];
                    enterpriseProjectId = showDomainFullConfigRequest['enterprise_project_id'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showDomainFullConfig.');
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
         * - 支持查询90天内的数据。
         * - 查询跨度不能超过7天。
         * - 最多同时指定100个域名。
         * - 起始时间和结束时间，左闭右开，需要同时指定。
         * - 开始时间、结束时间必须传毫秒级时间戳，且必须为5分钟整时刻点，如：0分、5分、10分、15分等，如果传的不是5分钟时刻点，返回数据可能与预期不一致。
         * - 统一用开始时间表示一个时间段，如：2019-01-24 20:15:00 表示取 [20:15:00, 20:20:00)的统计数据，且左闭右开。
         * - 流量类指标单位统一为Byte（字节）、带宽类指标单位统一为bit/s（比特/秒）、请求数类指标单位统一为次数。用于查询指定域名、指定统计指标的明细数据。
         * - 如果传的是多个域名，则每个域名的数据分开返回。
         * - 支持同时查询多个指标，不超过10个。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainItemDetails(showDomainItemDetailsRequest?: ShowDomainItemDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/domain-item-details",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let statType;
            
            let enterpriseProjectId;
            
            let serviceArea;

            if (showDomainItemDetailsRequest !== null && showDomainItemDetailsRequest !== undefined) {
                if (showDomainItemDetailsRequest instanceof ShowDomainItemDetailsRequest) {
                    startTime = showDomainItemDetailsRequest.startTime;
                    endTime = showDomainItemDetailsRequest.endTime;
                    domainName = showDomainItemDetailsRequest.domainName;
                    statType = showDomainItemDetailsRequest.statType;
                    enterpriseProjectId = showDomainItemDetailsRequest.enterpriseProjectId;
                    serviceArea = showDomainItemDetailsRequest.serviceArea;
                } else {
                    startTime = showDomainItemDetailsRequest['start_time'];
                    endTime = showDomainItemDetailsRequest['end_time'];
                    domainName = showDomainItemDetailsRequest['domain_name'];
                    statType = showDomainItemDetailsRequest['stat_type'];
                    enterpriseProjectId = showDomainItemDetailsRequest['enterprise_project_id'];
                    serviceArea = showDomainItemDetailsRequest['service_area'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showDomainItemDetails.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showDomainItemDetails.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showDomainItemDetails.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling showDomainItemDetails.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (serviceArea !== null && serviceArea !== undefined) {
                localVarQueryParameter['service_area'] = serviceArea;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 支持查询90天内的数据。
         * - 查询跨度是7天。
         * - 最多同时指定100个域名。
         * - 起始时间和结束时间，左闭右开，需要同时指定。
         * - 开始时间、结束时间必须传毫秒级时间戳，且必须为5分钟整时刻点，如：0分、5分、10分、15分等，如果传的不是5分钟时刻点，返回数据可能与预期不一致。
         * - 统一用开始时间表示一个时间段，如：2019-01-24 20:15:00 表示取 [20:15:00, 20:20:00)的统计数据，且左闭右开。
         * - 流量类指标单位统一为Byte（字节）、带宽类指标单位统一为bit/s（比特/秒）、请求数类指标单位统一为次数。
         * - 用于查询指定域名、指定统计指标的明细数据。
         * - 如果传的是多个域名，则每个域名的数据分开返回。
         * - 支持按区域、运营商维度查询统计数据, 回源指标除外。
         * - 支持同时查询多个指标，不超过10个。
         * - 域名为海外加速场景不适用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainItemLocationDetails(showDomainItemLocationDetailsRequest?: ShowDomainItemLocationDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/statistics/domain-item-location-details",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let statType;
            
            let region;
            
            let isp;
            
            let enterpriseProjectId;

            if (showDomainItemLocationDetailsRequest !== null && showDomainItemLocationDetailsRequest !== undefined) {
                if (showDomainItemLocationDetailsRequest instanceof ShowDomainItemLocationDetailsRequest) {
                    startTime = showDomainItemLocationDetailsRequest.startTime;
                    endTime = showDomainItemLocationDetailsRequest.endTime;
                    domainName = showDomainItemLocationDetailsRequest.domainName;
                    statType = showDomainItemLocationDetailsRequest.statType;
                    region = showDomainItemLocationDetailsRequest.region;
                    isp = showDomainItemLocationDetailsRequest.isp;
                    enterpriseProjectId = showDomainItemLocationDetailsRequest.enterpriseProjectId;
                } else {
                    startTime = showDomainItemLocationDetailsRequest['start_time'];
                    endTime = showDomainItemLocationDetailsRequest['end_time'];
                    domainName = showDomainItemLocationDetailsRequest['domain_name'];
                    statType = showDomainItemLocationDetailsRequest['stat_type'];
                    region = showDomainItemLocationDetailsRequest['region'];
                    isp = showDomainItemLocationDetailsRequest['isp'];
                    enterpriseProjectId = showDomainItemLocationDetailsRequest['enterprise_project_id'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showDomainItemLocationDetails.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showDomainItemLocationDetails.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showDomainItemLocationDetails.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (statType === null || statType === undefined) {
                throw new RequiredError('statType','Required parameter statType was null or undefined when calling showDomainItemLocationDetails.');
            }
            if (statType !== null && statType !== undefined) {
                localVarQueryParameter['stat_type'] = statType;
            }
            if (region === null || region === undefined) {
                throw new RequiredError('region','Required parameter region was null or undefined when calling showDomainItemLocationDetails.');
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (isp === null || isp === undefined) {
                throw new RequiredError('isp','Required parameter isp was null or undefined when calling showDomainItemLocationDetails.');
            }
            if (isp !== null && isp !== undefined) {
                localVarQueryParameter['isp'] = isp;
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
                headers: {},
                data: {}
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
            
            let country;
            
            let province;
            
            let isp;
            
            let enterpriseProjectId;

            if (showDomainLocationStatsRequest !== null && showDomainLocationStatsRequest !== undefined) {
                if (showDomainLocationStatsRequest instanceof ShowDomainLocationStatsRequest) {
                    action = showDomainLocationStatsRequest.action;
                    startTime = showDomainLocationStatsRequest.startTime;
                    endTime = showDomainLocationStatsRequest.endTime;
                    domainName = showDomainLocationStatsRequest.domainName;
                    statType = showDomainLocationStatsRequest.statType;
                    interval = showDomainLocationStatsRequest.interval;
                    groupBy = showDomainLocationStatsRequest.groupBy;
                    country = showDomainLocationStatsRequest.country;
                    province = showDomainLocationStatsRequest.province;
                    isp = showDomainLocationStatsRequest.isp;
                    enterpriseProjectId = showDomainLocationStatsRequest.enterpriseProjectId;
                } else {
                    action = showDomainLocationStatsRequest['action'];
                    startTime = showDomainLocationStatsRequest['start_time'];
                    endTime = showDomainLocationStatsRequest['end_time'];
                    domainName = showDomainLocationStatsRequest['domain_name'];
                    statType = showDomainLocationStatsRequest['stat_type'];
                    interval = showDomainLocationStatsRequest['interval'];
                    groupBy = showDomainLocationStatsRequest['group_by'];
                    country = showDomainLocationStatsRequest['country'];
                    province = showDomainLocationStatsRequest['province'];
                    isp = showDomainLocationStatsRequest['isp'];
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
            if (groupBy !== null && groupBy !== undefined) {
                localVarQueryParameter['group_by'] = groupBy;
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取加速域名证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHttpInfo(showHttpInfoRequest?: ShowHttpInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/domains/{domain_id}/https-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (showHttpInfoRequest !== null && showHttpInfoRequest !== undefined) {
                if (showHttpInfoRequest instanceof ShowHttpInfoRequest) {
                    domainId = showHttpInfoRequest.domainId;
                    enterpriseProjectId = showHttpInfoRequest.enterpriseProjectId;
                } else {
                    domainId = showHttpInfoRequest['domain_id'];
                    enterpriseProjectId = showHttpInfoRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showHttpInfo.');
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
                headers: {},
                data: {}
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
         * 日志查询。
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainName;
            
            let queryDate;
            
            let pageSize;
            
            let pageNumber;
            
            let enterpriseProjectId;

            if (showLogsRequest !== null && showLogsRequest !== undefined) {
                if (showLogsRequest instanceof ShowLogsRequest) {
                    domainName = showLogsRequest.domainName;
                    queryDate = showLogsRequest.queryDate;
                    pageSize = showLogsRequest.pageSize;
                    pageNumber = showLogsRequest.pageNumber;
                    enterpriseProjectId = showLogsRequest.enterpriseProjectId;
                } else {
                    domainName = showLogsRequest['domain_name'];
                    queryDate = showLogsRequest['query_date'];
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
            if (queryDate === null || queryDate === undefined) {
                throw new RequiredError('queryDate','Required parameter queryDate was null or undefined when calling showLogs.');
            }
            if (queryDate !== null && queryDate !== undefined) {
                localVarQueryParameter['query_date'] = queryDate;
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
         * 查询回源HOST。回源HOST是CDN节点在回源过程中，在源站访问的站点域名，即http请求头中的host信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOriginHost(showOriginHostRequest?: ShowOriginHostRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/domains/{domain_id}/originhost",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (showOriginHostRequest !== null && showOriginHostRequest !== undefined) {
                if (showOriginHostRequest instanceof ShowOriginHostRequest) {
                    domainId = showOriginHostRequest.domainId;
                    enterpriseProjectId = showOriginHostRequest.enterpriseProjectId;
                } else {
                    domainId = showOriginHostRequest['domain_id'];
                    enterpriseProjectId = showOriginHostRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showOriginHost.');
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Referer过滤规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRefer(showReferRequest?: ShowReferRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/domains/{domain_id}/referer",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (showReferRequest !== null && showReferRequest !== undefined) {
                if (showReferRequest instanceof ShowReferRequest) {
                    domainId = showReferRequest.domainId;
                    enterpriseProjectId = showReferRequest.enterpriseProjectId;
                } else {
                    domainId = showReferRequest['domain_id'];
                    enterpriseProjectId = showReferRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showRefer.');
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
         * 列举header所有配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResponseHeader(showResponseHeaderRequest?: ShowResponseHeaderRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/cdn/domains/{domain_id}/response-header",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (showResponseHeaderRequest !== null && showResponseHeaderRequest !== undefined) {
                if (showResponseHeaderRequest instanceof ShowResponseHeaderRequest) {
                    domainId = showResponseHeaderRequest.domainId;
                    enterpriseProjectId = showResponseHeaderRequest.enterpriseProjectId;
                } else {
                    domainId = showResponseHeaderRequest['domain_id'];
                    enterpriseProjectId = showResponseHeaderRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showResponseHeader.');
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
         * 用于查询资源标签列表
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
                headers: {},
                data: {}
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
         * - 查询TOP100 URL明细。
         * 
         * - 支持查询90天内的数据。
         * 
         * - 查询跨度不能超过31天。
         * 
         * - 起始时间和结束时间，左闭右开，需要同时指定。如查询2021-10-24 00:00:00 到 2021-10-25 00:00:00
         * 的数据，表示取 [2021-10-24 00:00:00, 2021-10-25 00:00:00)的统计数据。
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let domainName;
            
            let statType;
            
            let enterpriseProjectId;
            
            let serviceArea;

            if (showTopUrlRequest !== null && showTopUrlRequest !== undefined) {
                if (showTopUrlRequest instanceof ShowTopUrlRequest) {
                    startTime = showTopUrlRequest.startTime;
                    endTime = showTopUrlRequest.endTime;
                    domainName = showTopUrlRequest.domainName;
                    statType = showTopUrlRequest.statType;
                    enterpriseProjectId = showTopUrlRequest.enterpriseProjectId;
                    serviceArea = showTopUrlRequest.serviceArea;
                } else {
                    startTime = showTopUrlRequest['start_time'];
                    endTime = showTopUrlRequest['end_time'];
                    domainName = showTopUrlRequest['domain_name'];
                    statType = showTopUrlRequest['stat_type'];
                    enterpriseProjectId = showTopUrlRequest['enterprise_project_id'];
                    serviceArea = showTopUrlRequest['service_area'];
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
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (serviceArea !== null && serviceArea !== undefined) {
                localVarQueryParameter['service_area'] = serviceArea;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询刷新预热URL记录。如需此接口，请提交工单开通
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
                headers: {},
                data: {}
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
         * 设置域名的IP黑白名单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBlackWhiteList(updateBlackWhiteListRequest?: UpdateBlackWhiteListRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/domains/{domain_id}/ip-acl",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (updateBlackWhiteListRequest !== null && updateBlackWhiteListRequest !== undefined) {
                if (updateBlackWhiteListRequest instanceof UpdateBlackWhiteListRequest) {
                    domainId = updateBlackWhiteListRequest.domainId;
                    body = updateBlackWhiteListRequest.body
                    enterpriseProjectId = updateBlackWhiteListRequest.enterpriseProjectId;
                } else {
                    domainId = updateBlackWhiteListRequest['domain_id'];
                    body = updateBlackWhiteListRequest['body'];
                    enterpriseProjectId = updateBlackWhiteListRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateBlackWhiteList.');
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
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置CDN节点上缓存资源的缓存策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCacheRules(updateCacheRulesRequest?: UpdateCacheRulesRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/domains/{domain_id}/cache",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (updateCacheRulesRequest !== null && updateCacheRulesRequest !== undefined) {
                if (updateCacheRulesRequest instanceof UpdateCacheRulesRequest) {
                    domainId = updateCacheRulesRequest.domainId;
                    body = updateCacheRulesRequest.body
                    enterpriseProjectId = updateCacheRulesRequest.enterpriseProjectId;
                } else {
                    domainId = updateCacheRulesRequest['domain_id'];
                    body = updateCacheRulesRequest['body'];
                    enterpriseProjectId = updateCacheRulesRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateCacheRules.');
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
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改域名全量配置接口，支持配置回源请求头、HTTP header配置、URL鉴权、证书、源站、回源协议、强制重定向、智能压缩、缓存URL参数、IPv6、状态码缓存时间、Range回源、User-Agent黑白名单、改写回源URL、自定义错误页面
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
            var body: any;
            
            let domainName;
            
            let enterpriseProjectId;

            if (updateDomainFullConfigRequest !== null && updateDomainFullConfigRequest !== undefined) {
                if (updateDomainFullConfigRequest instanceof UpdateDomainFullConfigRequest) {
                    domainName = updateDomainFullConfigRequest.domainName;
                    body = updateDomainFullConfigRequest.body
                    enterpriseProjectId = updateDomainFullConfigRequest.enterpriseProjectId;
                } else {
                    domainName = updateDomainFullConfigRequest['domain_name'];
                    body = updateDomainFullConfigRequest['body'];
                    enterpriseProjectId = updateDomainFullConfigRequest['enterprise_project_id'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling updateDomainFullConfig.');
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
            var body: any;
            
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
         * 修改源站信息。源站IP地址或域名都可以指引CDN节点回源到对应的源站服务器，源站域名不能与加速域名相同。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainOrigin(updateDomainOriginRequest?: UpdateDomainOriginRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/domains/{domain_id}/origin",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (updateDomainOriginRequest !== null && updateDomainOriginRequest !== undefined) {
                if (updateDomainOriginRequest instanceof UpdateDomainOriginRequest) {
                    domainId = updateDomainOriginRequest.domainId;
                    body = updateDomainOriginRequest.body
                    enterpriseProjectId = updateDomainOriginRequest.enterpriseProjectId;
                } else {
                    domainId = updateDomainOriginRequest['domain_id'];
                    body = updateDomainOriginRequest['body'];
                    enterpriseProjectId = updateDomainOriginRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateDomainOrigin.');
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
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启此项配置后，当CDN节点回源请求源站返回301/302状态码时，CDN节点会先跳转到301/302对应地址获取资源并缓存后再返回给用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFollow302Switch(updateFollow302SwitchRequest?: UpdateFollow302SwitchRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/domains/{domain_id}/follow302-switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (updateFollow302SwitchRequest !== null && updateFollow302SwitchRequest !== undefined) {
                if (updateFollow302SwitchRequest instanceof UpdateFollow302SwitchRequest) {
                    domainId = updateFollow302SwitchRequest.domainId;
                    body = updateFollow302SwitchRequest.body
                    enterpriseProjectId = updateFollow302SwitchRequest.enterpriseProjectId;
                } else {
                    domainId = updateFollow302SwitchRequest['domain_id'];
                    body = updateFollow302SwitchRequest['body'];
                    enterpriseProjectId = updateFollow302SwitchRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateFollow302Switch.');
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
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置加速域名HTTPS。通过配置加速域名的HTTPS证书，并将其部署在全网CDN节点，实现HTTPS安全加速。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHttpsInfo(updateHttpsInfoRequest?: UpdateHttpsInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/domains/{domain_id}/https-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (updateHttpsInfoRequest !== null && updateHttpsInfoRequest !== undefined) {
                if (updateHttpsInfoRequest instanceof UpdateHttpsInfoRequest) {
                    domainId = updateHttpsInfoRequest.domainId;
                    body = updateHttpsInfoRequest.body
                    enterpriseProjectId = updateHttpsInfoRequest.enterpriseProjectId;
                } else {
                    domainId = updateHttpsInfoRequest['domain_id'];
                    body = updateHttpsInfoRequest['body'];
                    enterpriseProjectId = updateHttpsInfoRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateHttpsInfo.');
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
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改回源HOST。回源HOST是CDN节点在回源过程中，在源站访问的站点域名，即http请求头中的host信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateOriginHost(updateOriginHostRequest?: UpdateOriginHostRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/domains/{domain_id}/originhost",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (updateOriginHostRequest !== null && updateOriginHostRequest !== undefined) {
                if (updateOriginHostRequest instanceof UpdateOriginHostRequest) {
                    domainId = updateOriginHostRequest.domainId;
                    body = updateOriginHostRequest.body
                    enterpriseProjectId = updateOriginHostRequest.enterpriseProjectId;
                } else {
                    domainId = updateOriginHostRequest['domain_id'];
                    body = updateOriginHostRequest['body'];
                    enterpriseProjectId = updateOriginHostRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateOriginHost.');
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
            options.pathParams = { 'domain_id': domainId, };
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
            var body: any;
            
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
         * Range回源是指源站在收到CDN节点回源请求时，根据http请求头中的Range信息返回指定范围的数据给CDN节点。
         * 
         * 开启Range回源前需要确认源站是否支持Range请求，若源站不支持Range请求，开启Range回源将导致资源无法缓存。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRangeSwitch(updateRangeSwitchRequest?: UpdateRangeSwitchRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/domains/{domain_id}/range-switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (updateRangeSwitchRequest !== null && updateRangeSwitchRequest !== undefined) {
                if (updateRangeSwitchRequest instanceof UpdateRangeSwitchRequest) {
                    domainId = updateRangeSwitchRequest.domainId;
                    body = updateRangeSwitchRequest.body
                    enterpriseProjectId = updateRangeSwitchRequest.enterpriseProjectId;
                } else {
                    domainId = updateRangeSwitchRequest['domain_id'];
                    body = updateRangeSwitchRequest['body'];
                    enterpriseProjectId = updateRangeSwitchRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateRangeSwitch.');
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
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置Referer过滤规则。通过设置过滤策略，对访问者身份进行识别和过滤，实现限制访问来源的目的。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRefer(updateReferRequest?: UpdateReferRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/domains/{domain_id}/referer",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (updateReferRequest !== null && updateReferRequest !== undefined) {
                if (updateReferRequest instanceof UpdateReferRequest) {
                    domainId = updateReferRequest.domainId;
                    body = updateReferRequest.body
                    enterpriseProjectId = updateReferRequest.enterpriseProjectId;
                } else {
                    domainId = updateReferRequest['domain_id'];
                    body = updateReferRequest['body'];
                    enterpriseProjectId = updateReferRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateRefer.');
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
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增/修改域名响应头配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateResponseHeader(updateResponseHeaderRequest?: UpdateResponseHeaderRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/cdn/domains/{domain_id}/response-header",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let domainId;
            
            let enterpriseProjectId;

            if (updateResponseHeaderRequest !== null && updateResponseHeaderRequest !== undefined) {
                if (updateResponseHeaderRequest instanceof UpdateResponseHeaderRequest) {
                    domainId = updateResponseHeaderRequest.domainId;
                    body = updateResponseHeaderRequest.body
                    enterpriseProjectId = updateResponseHeaderRequest.enterpriseProjectId;
                } else {
                    domainId = updateResponseHeaderRequest['domain_id'];
                    body = updateResponseHeaderRequest['body'];
                    enterpriseProjectId = updateResponseHeaderRequest['enterprise_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateResponseHeader.');
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
            options.pathParams = { 'domain_id': domainId, };
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