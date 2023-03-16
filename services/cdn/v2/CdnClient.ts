import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BatchCopyConfigs } from './model/BatchCopyConfigs';
import { BatchCopyDRequestBody } from './model/BatchCopyDRequestBody';
import { BatchCopyDomainRequest } from './model/BatchCopyDomainRequest';
import { BatchCopyDomainResponse } from './model/BatchCopyDomainResponse';
import { BatchCopyErrorRsp } from './model/BatchCopyErrorRsp';
import { BatchCopyErrorRspError } from './model/BatchCopyErrorRspError';
import { BatchCopyResultVo } from './model/BatchCopyResultVo';
import { DomainOriginHost } from './model/DomainOriginHost';
import { Domains } from './model/Domains';
import { DomainsWithPort } from './model/DomainsWithPort';
import { DownloadRegionCarrierExcelRequest } from './model/DownloadRegionCarrierExcelRequest';
import { DownloadRegionCarrierExcelResponse } from './model/DownloadRegionCarrierExcelResponse';
import { DownloadStatisticsExcelRequest } from './model/DownloadStatisticsExcelRequest';
import { DownloadStatisticsExcelResponse } from './model/DownloadStatisticsExcelResponse';
import { EpResourceTag } from './model/EpResourceTag';
import { ErrMsg } from './model/ErrMsg';
import { ErrRsp } from './model/ErrRsp';
import { ListDomainsRequest } from './model/ListDomainsRequest';
import { ListDomainsResponse } from './model/ListDomainsResponse';
import { SetChargeModesBody } from './model/SetChargeModesBody';
import { SetChargeModesRequest } from './model/SetChargeModesRequest';
import { SetChargeModesResponse } from './model/SetChargeModesResponse';
import { ShowBandwidthCalcRequest } from './model/ShowBandwidthCalcRequest';
import { ShowBandwidthCalcResponse } from './model/ShowBandwidthCalcResponse';
import { ShowChargeModesRequest } from './model/ShowChargeModesRequest';
import { ShowChargeModesResponse } from './model/ShowChargeModesResponse';
import { ShowDomainDetailByNameRequest } from './model/ShowDomainDetailByNameRequest';
import { ShowDomainDetailByNameResponse } from './model/ShowDomainDetailByNameResponse';
import { ShowDomainLocationStatsRequest } from './model/ShowDomainLocationStatsRequest';
import { ShowDomainLocationStatsResponse } from './model/ShowDomainLocationStatsResponse';
import { ShowDomainStatsRequest } from './model/ShowDomainStatsRequest';
import { ShowDomainStatsResponse } from './model/ShowDomainStatsResponse';
import { ShowTopDomainNamesRequest } from './model/ShowTopDomainNamesRequest';
import { ShowTopDomainNamesResponse } from './model/ShowTopDomainNamesResponse';
import { ShowTopUrlRequest } from './model/ShowTopUrlRequest';
import { ShowTopUrlResponse } from './model/ShowTopUrlResponse';
import { Sources } from './model/Sources';
import { SourcesConfig } from './model/SourcesConfig';
import { TopUrlSummary } from './model/TopUrlSummary';

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
     * 批量域名复制接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量域名复制
     * @param {BatchCopyDRequestBody} batchCopyDRequestBody 域名复制参数请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCopyDomain(batchCopyDomainRequest?: BatchCopyDomainRequest): Promise<BatchCopyDomainResponse> {
        const options = ParamCreater().batchCopyDomain(batchCopyDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

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
     * @param {number} startTime - 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime - 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名
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
     * @param {number} startTime - 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime - 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名
     * @param {string} excelType 统计数据表格类型,目前支持 - 用量统计数据(excel_type_usage) - 访问情况统计数据(excel_type_access) - 回源情况统计数据（excel_type_origin） - http_code统计数据(excel_type_http_code)
     * @param {string} [excelLanguage] 创建表格语言，支持zh(中文)，en(英文)两种，如果不传默认为zh
     * @param {string} [serviceArea] 服务区域：mainland_china（默认）、outside_mainland_china，当查询回源类指标时该参数无效。
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
     * 查询加速域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询加速域名
     * @param {string} [domainName] 加速域名，采用模糊匹配的方式。（长度限制为1-255字符）。
     * @param {string} [businessType] 加速域名的业务类型。取值： - web（网站加速） - download（文件下载加速） - video（点播加速） - wholeSite（全站加速）
     * @param {string} [domainStatus] 加速域名状态。取值意义： - online表示“已开启” - offline表示“已停用” - configuring表示“配置中” - configure_failed表示“配置失败” - checking表示“审核中” - check_failed表示“审核未通过” - deleting表示“删除中”。
     * @param {string} [serviceArea] 华为云CDN提供的加速服务范围，包含： - mainland_china 中国大陆 - outside_mainland_china 中国大陆境外 - global 全球。
     * @param {number} [pageSize] 每页的数量，取值范围1-10000，不设值时默认值为30。
     * @param {number} [pageNumber] 查询的页码。取值范围1-65535，不设值时默认值为1。
     * @param {boolean} [showTags] 展示标签标识 true：不展示 false：展示。
     * @param {boolean} [exactMatch] 精准匹配 true：开启 false：关闭。
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
     * @param {number} startTime - 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime - 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名
     * @param {string} calcType 查询类别，目前支持bw_95（95峰值带宽），bw_peak（日峰值月平均带宽），bw_95_average(95月平均带宽)
     * @param {string} [serviceArea] 服务区域：mainland_china（默认）、outside_mainland_china，当查询回源类指标时该参数无效。
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
     * 加速域名详情信息接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询加速域名详情
     * @param {string} domainName 加速域名名称,获取方法请参见查询加速域名。
     * @param {string} [enterpriseProjectId] 当用户开启企业项目功能时，该参数生效，表示查询资源所属项目，\&quot;all\&quot;表示所有项目。注意：当使用帐号调用接口时，该参数必传。  您可以通过调用企业项目管理服务（EPS）的查询企业项目列表接口（ListEnterpriseProject）查询企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainDetailByName(showDomainDetailByNameRequest?: ShowDomainDetailByNameRequest): Promise<ShowDomainDetailByNameResponse> {
        const options = ParamCreater().showDomainDetailByName(showDomainDetailByNameRequest);

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
     * @summary 查询域名统计区域运营商数据
     * @param {string} action - 动作名称，可选location_summary、location_detail。 - location_summary：查询汇总数据 - location_detail：查询数据详情。
     * @param {number} startTime - 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime - 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名
     * @param {string} statType - 网络资源消耗   - bw（带宽）   - flux（流量） - 访问情况   - req_num（请求总数） - HTTP状态码（组合指标）   - http_code_2xx(状态码汇总2xx)   - http_code_3xx(状态码汇总3xx)   - http_code_4xx(状态码汇总4xx)   - http_code_5xx(状态码汇总5xx)   - status_code_2xx(状态码详情2xx)   - status_code_3xx(状态码详情3xx)   - status_code_4xx(状态码详情4xx)   - status_code_5xx(状态码详情5xx)
     * @param {number} [interval] - 查询时间间隔，单位：秒，取值说明： - 300(5分钟)：最大查询跨度2天 - 3600(1小时)：最大查询跨度7天 - 86400(1天)：最大查询跨度31天 - 如果不传，默认取对应时间跨度的最小间隔。
     * @param {string} [country] - 国家&amp;地区编码，多个以英文逗号分隔，all表示全部，取值见附录 - 访问运营商统计数据时不能填写 - 访问top_url数据时不能填写 - 访问区域情况数据时只能填写cn(中国)
     * @param {string} [province] 省份编码，当country为cn（中国）时有效，多个以英文逗号分隔，all表示全部，取值见附录
     * @param {string} [isp] 运营商编码，多个以英文逗号分隔，all表示全部，取值见附录
     * @param {string} [groupBy] 数据分组方式，多个以英文逗号分隔，可选domain、country、province、isp，默认不分组
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
     * @summary 查询域名统计基础数据
     * @param {string} action - 动作名称，可选summary、detail。 - summary：查询汇总数据 - detail：查询数据详情。
     * @param {number} startTime - 查询起始时间戳，需与结束时间戳同时指定，左闭右开，设置方式如下： - interval为300时，start_time设置为整5分钟时刻点，如：1631240100000(对应2021-09-10 10:15:00) - interval为3600时，start_time设置为整小时时刻点，如：1631239200000(对应2021-09-10 10:00:00) - interval为86400时，start_time设置为东8区零点时刻点，如：1631203200000(对应2021-09-10 00:00:00)
     * @param {number} endTime - 查询结束时间戳，需与开始时间戳同时指定，左闭右开，设置方式如下： - interval为300时，end_time设置为整5分钟时刻点，如：1631243700000(对应2021-09-10 11:15:00) - interval为3600时，end_time设置为整小时时刻点，如：1631325600000(对应2021-09-11 10:00:00) - interval为86400时，end_time设置为东8区零点时刻点，如：1631376000000(对应2021-09-12 00:00:00)
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名
     * @param {string} statType - 网络资源消耗：   - bw（带宽）   - flux（流量）   - bs_bw（回源带宽）   - bs_flux（回源流量） - 访问情况   - req_num（请求总数）   - hit_num（请求命中次数）   - bs_num（回源总数）   - bs_fail_num（回源失败数）   - hit_flux（命中流量） - HTTP状态码（组合指标）   - http_code_2xx（状态码汇总2xx）   - http_code_3xx（状态码汇总3xx）   - http_code_4xx（状态码汇总4xx）   - http_code_5xx（状态码汇总5xx）   - bs_http_code_2xx（回源状态码汇总2xx）   - bs_http_code_3xx（回源状态码汇总3xx）   - bs_http_code_4xx（回源状态码汇总4xx）   - bs_http_code_5xx（回源状态码汇总5xx）   - status_code_2xx（状态码详情2xx）   - status_code_3xx（状态码详情3xx）   - status_code_4xx（状态码详情4xx）   - status_code_5xx（状态码详情5xx）   - bs_status_code_2xx（回源状态码详情2xx）   - bs_status_code_3xx（回源状态码详情3xx）   - bs_status_code_4xx（回源状态码详情4xx）   - bs_status_code_5xx（回源状态码详情5xx）   - status_code和bs_status_code不能一起查询
     * @param {number} [interval] - 查询时间间隔，单位：秒，取值说明： - 300(5分钟)：最大查询跨度2天 - 3600(1小时)：最大查询跨度7天 - 86400(1天)：最大查询跨度31天 - 如果不传，默认取对应时间跨度的最小间隔。
     * @param {string} [groupBy] 数据分组方式，可选domain，默认不分组
     * @param {string} [serviceArea] 服务区域：mainland_china（默认）、outside_mainland_china，当查询回源类指标时该参数无效。
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
     * @param {string} [serviceArea] 服务区域：mainland_china（默认）、outside_mainland_china，当查询回源类指标时该参数无效。
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
     * @param {string} domainName 域名列表，多个域名以逗号（半角）分隔，如：www.test1.com,www.test2.com all表示查询名下全部域名
     * @param {string} statType - 参数类型支持：flux(流量),req_num(请求数)
     * @param {string} [serviceArea] 服务区域：mainland_china(大陆)，outside_mainland_china(海外)，默认为mainland_china
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
}

export const ParamCreater = function () {
    return {
    
        /**
         * 批量域名复制接口
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

            var body: any;

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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
         * 查询加速域名
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

            var body: any;

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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
         * 加速域名详情信息接口
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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