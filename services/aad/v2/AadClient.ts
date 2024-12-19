import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionInfo } from './model/ActionInfo';
import { AddWafWhiteIpRuleRequest } from './model/AddWafWhiteIpRuleRequest';
import { AddWafWhiteIpRuleResponse } from './model/AddWafWhiteIpRuleResponse';
import { AddWafWhiteIpRuleV2RequestBody } from './model/AddWafWhiteIpRuleV2RequestBody';
import { Backend } from './model/Backend';
import { BlackWhiteListRule } from './model/BlackWhiteListRule';
import { BwListIps } from './model/BwListIps';
import { CertInfo } from './model/CertInfo';
import { Condition } from './model/Condition';
import { CreateAadDomainRequestBody } from './model/CreateAadDomainRequestBody';
import { CreateDomainRequest } from './model/CreateDomainRequest';
import { CreateDomainResponse } from './model/CreateDomainResponse';
import { Curve } from './model/Curve';
import { DeleteDomainRequest } from './model/DeleteDomainRequest';
import { DeleteDomainResponse } from './model/DeleteDomainResponse';
import { DeleteDomainV2RequestBody } from './model/DeleteDomainV2RequestBody';
import { DeleteWafWhiteIpRuleRequest } from './model/DeleteWafWhiteIpRuleRequest';
import { DeleteWafWhiteIpRuleResponse } from './model/DeleteWafWhiteIpRuleResponse';
import { DeleteWafWhiteIpRuleV2RequestBody } from './model/DeleteWafWhiteIpRuleV2RequestBody';
import { DetailInfo } from './model/DetailInfo';
import { EmptyJsonResponse } from './model/EmptyJsonResponse';
import { FlowBps } from './model/FlowBps';
import { FlowPps } from './model/FlowPps';
import { FrequencyControlRule } from './model/FrequencyControlRule';
import { InstanceDomainItem } from './model/InstanceDomainItem';
import { Ips } from './model/Ips';
import { ListConnectionNumberData } from './model/ListConnectionNumberData';
import { ListConnectionNumberDataList } from './model/ListConnectionNumberDataList';
import { ListDDoSAttackEventRequest } from './model/ListDDoSAttackEventRequest';
import { ListDDoSAttackEventRequestBody } from './model/ListDDoSAttackEventRequestBody';
import { ListDDoSAttackEventResponse } from './model/ListDDoSAttackEventResponse';
import { ListDDoSConnectionNumberRequest } from './model/ListDDoSConnectionNumberRequest';
import { ListDDoSConnectionNumberResponse } from './model/ListDDoSConnectionNumberResponse';
import { ListDDoSEventData } from './model/ListDDoSEventData';
import { ListDDoSFlowRequest } from './model/ListDDoSFlowRequest';
import { ListDDoSFlowResponse } from './model/ListDDoSFlowResponse';
import { ListFrequencyControlRuleRequest } from './model/ListFrequencyControlRuleRequest';
import { ListFrequencyControlRuleResponse } from './model/ListFrequencyControlRuleResponse';
import { ListInstanceDomainsRequest } from './model/ListInstanceDomainsRequest';
import { ListInstanceDomainsResponse } from './model/ListInstanceDomainsResponse';
import { ListWafAttackEventRequest } from './model/ListWafAttackEventRequest';
import { ListWafAttackEventResponse } from './model/ListWafAttackEventResponse';
import { ListWafAttackEventlist } from './model/ListWafAttackEventlist';
import { ListWafBandwidthRequest } from './model/ListWafBandwidthRequest';
import { ListWafBandwidthResponse } from './model/ListWafBandwidthResponse';
import { ListWafCustomRuleRequest } from './model/ListWafCustomRuleRequest';
import { ListWafCustomRuleResponse } from './model/ListWafCustomRuleResponse';
import { ListWafGeoIpRuleRequest } from './model/ListWafGeoIpRuleRequest';
import { ListWafGeoIpRuleResponse } from './model/ListWafGeoIpRuleResponse';
import { ListWafQpsRequest } from './model/ListWafQpsRequest';
import { ListWafQpsResponse } from './model/ListWafQpsResponse';
import { ListWafWhiteIpRuleRequest } from './model/ListWafWhiteIpRuleRequest';
import { ListWafWhiteIpRuleResponse } from './model/ListWafWhiteIpRuleResponse';
import { ListWhiteBlackIpRuleRequest } from './model/ListWhiteBlackIpRuleRequest';
import { ListWhiteBlackIpRuleResponse } from './model/ListWhiteBlackIpRuleResponse';
import { PageRespInfo } from './model/PageRespInfo';
import { Point } from './model/Point';
import { ShowDomainCertificateRequest } from './model/ShowDomainCertificateRequest';
import { ShowDomainCertificateResponse } from './model/ShowDomainCertificateResponse';
import { ShowFlowBlockRequest } from './model/ShowFlowBlockRequest';
import { ShowFlowBlockResponse } from './model/ShowFlowBlockResponse';
import { ShowWafPolicyRequest } from './model/ShowWafPolicyRequest';
import { ShowWafPolicyResponse } from './model/ShowWafPolicyResponse';
import { ShowWafQpsRequest } from './model/ShowWafQpsRequest';
import { ShowWafQpsResponse } from './model/ShowWafQpsResponse';
import { TagCondition } from './model/TagCondition';
import { UpgradeInstanceData } from './model/UpgradeInstanceData';
import { UpgradeInstanceSpecRequest } from './model/UpgradeInstanceSpecRequest';
import { UpgradeInstanceSpecResponse } from './model/UpgradeInstanceSpecResponse';
import { UpgradeInstanceSpecV2RequestBody } from './model/UpgradeInstanceSpecV2RequestBody';
import { WafCustomCondition } from './model/WafCustomCondition';
import { WafCustomRule } from './model/WafCustomRule';
import { WafCustomRuleAction } from './model/WafCustomRuleAction';
import { WafGeoIpRule } from './model/WafGeoIpRule';
import { WafPolicyOptions } from './model/WafPolicyOptions';

export class AadClient {
    public static newBuilder(): ClientBuilder<AadClient> {
            let client = new ClientBuilder<AadClient>(newClient, 'GlobalCredentials');
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
     * 防护策略web-cc黑白名单-创建黑白名单规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 防护策略web-cc黑白名单-创建黑白名单规则
     * @param {AddWafWhiteIpRuleV2RequestBody} [addWafWhiteIpRuleV2RequestBody] AddWafWhiteIpRuleV2RequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addWafWhiteIpRule(addWafWhiteIpRuleRequest?: AddWafWhiteIpRuleRequest): Promise<AddWafWhiteIpRuleResponse> {
        const options = ParamCreater().addWafWhiteIpRule(addWafWhiteIpRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建防护域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建防护域名
     * @param {CreateAadDomainRequestBody} createAadDomainRequestBody 防护域名信息
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
     * 删除防护域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除防护域名
     * @param {DeleteDomainV2RequestBody} deleteDomainV2RequestBody 删除防护域名信息
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
     * 防护策略web-cc黑白名单-删除黑白名单规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 防护策略web-cc黑白名单-删除黑白名单规则
     * @param {DeleteWafWhiteIpRuleV2RequestBody} deleteWafWhiteIpRuleV2RequestBody DeleteWafWhiteIpRuleV2RequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWafWhiteIpRule(deleteWafWhiteIpRuleRequest?: DeleteWafWhiteIpRuleRequest): Promise<DeleteWafWhiteIpRuleResponse> {
        const options = ParamCreater().deleteWafWhiteIpRule(deleteWafWhiteIpRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DDoS攻击事件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDoS攻击事件列表
     * @param {string} instanceId 实例id
     * @param {ListDDoSAttackEventRequestBody} listDDoSAttackEventRequestBody ListDDoSAttackEventRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDDoSAttackEvent(listDDoSAttackEventRequest?: ListDDoSAttackEventRequest): Promise<ListDDoSAttackEventResponse> {
        const options = ParamCreater().listDDoSAttackEvent(listDDoSAttackEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询新建连接数和并发连接数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询新建连接数和并发连接数
     * @param {string} startTime 开始时间（毫秒时间戳）
     * @param {string} endTime 结束时间（毫秒时间戳）
     * @param {string} instanceId 实例id
     * @param {string} ip 高防ip
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDDoSConnectionNumber(listDDoSConnectionNumberRequest?: ListDDoSConnectionNumberRequest): Promise<ListDDoSConnectionNumberResponse> {
        const options = ParamCreater().listDDoSConnectionNumber(listDDoSConnectionNumberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DDoS攻击防护BPS/PPS流量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDoS攻击防护BPS/PPS流量
     * @param {string} instanceId 实例ID
     * @param {string} ip 高防IP
     * @param {string} type 请求类型 pps、bps
     * @param {string} startTime 开始时间（毫秒时间戳）
     * @param {string} endTime 结束时间（毫秒时间戳）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDDoSFlow(listDDoSFlowRequest?: ListDDoSFlowRequest): Promise<ListDDoSFlowResponse> {
        const options = ParamCreater().listDDoSFlow(listDDoSFlowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询频率控制规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询频率控制规则列表
     * @param {string} domainName 域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFrequencyControlRule(listFrequencyControlRuleRequest?: ListFrequencyControlRuleRequest): Promise<ListFrequencyControlRuleResponse> {
        const options = ParamCreater().listFrequencyControlRule(listFrequencyControlRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例关联的域名信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例关联的域名信息
     * @param {string} instanceId 实例id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceDomains(listInstanceDomainsRequest?: ListInstanceDomainsRequest): Promise<ListInstanceDomainsResponse> {
        const options = ParamCreater().listInstanceDomains(listInstanceDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询攻击事件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询攻击事件列表
     * @param {string} [domains] 不传时代表全部域名
     * @param {string} [startTime] 开始时间（毫秒时间戳）
     * @param {string} [endTime] 结束时间（毫秒时间戳）
     * @param {string} [recent] 枚举值：yesterday,today,3days,1week,1month 与开始结束时间不同时为空
     * @param {number} [overseasType] 实例类型，0-大陆，1-海外
     * @param {string} [sip] 攻击源IP
     * @param {number} [limit] limit
     * @param {number} [offset] offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWafAttackEvent(listWafAttackEventRequest?: ListWafAttackEventRequest): Promise<ListWafAttackEventResponse> {
        const options = ParamCreater().listWafAttackEvent(listWafAttackEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 带宽曲线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 带宽曲线
     * @param {string} valueType 平均值 mean、峰值 peak
     * @param {string} [domains] 不传时代表全部域名
     * @param {string} [startTime] 开始时间（毫秒时间戳）
     * @param {string} [endTime] 结束时间（毫秒时间戳）
     * @param {string} [recent] 枚举值：yesterday,today,3days,1week,1month 与开始结束时间不同时为空
     * @param {number} [overseasType] 实例类型，0-大陆，1-海外
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWafBandwidth(listWafBandwidthRequest?: ListWafBandwidthRequest): Promise<ListWafBandwidthResponse> {
        const options = ParamCreater().listWafBandwidth(listWafBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询精准防护规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询精准防护规则
     * @param {string} domainName 域名
     * @param {number} overseasType 防护区域，0-大陆，1-海外
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWafCustomRule(listWafCustomRuleRequest?: ListWafCustomRuleRequest): Promise<ListWafCustomRuleResponse> {
        const options = ParamCreater().listWafCustomRule(listWafCustomRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询区域封禁规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询区域封禁规则
     * @param {string} domainName 域名
     * @param {number} overseasType 防护区域，0-大陆，1-海外
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWafGeoIpRule(listWafGeoIpRuleRequest?: ListWafGeoIpRuleRequest): Promise<ListWafGeoIpRuleResponse> {
        const options = ParamCreater().listWafGeoIpRule(listWafGeoIpRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询请求QPS
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询请求QPS
     * @param {string} valueType 用于 QPS、带宽: 平均值 mean、峰值 peak;用于 响应状态码: 源站返回值 source 、高防返回值 proxy
     * @param {string} [domains] 不传时代表全部域名
     * @param {string} [startTime] 开始时间（毫秒时间戳）
     * @param {string} [endTime] 结束时间（毫秒时间戳）
     * @param {string} [recent] 枚举值：yesterday,today,3days,1week,1month 与开始结束时间不同时为空
     * @param {number} [overseasType] 实例类型，0-大陆，1-海外
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWafQps(listWafQpsRequest?: ListWafQpsRequest): Promise<ListWafQpsResponse> {
        const options = ParamCreater().listWafQps(listWafQpsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 防护策略web-cc黑白名单-查询黑白名单规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 防护策略web-cc黑白名单-查询黑白名单规则
     * @param {string} domainName 域名
     * @param {number} overseasType 防护区域，0-大陆，1-海外
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWafWhiteIpRule(listWafWhiteIpRuleRequest?: ListWafWhiteIpRuleRequest): Promise<ListWafWhiteIpRuleResponse> {
        const options = ParamCreater().listWafWhiteIpRule(listWafWhiteIpRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DDoS攻击防护的黑白名单列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDoS攻击防护的黑白名单列表
     * @param {string} type white-白名单，black-黑名单
     * @param {string} instanceId instanceId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWhiteBlackIpRule(listWhiteBlackIpRuleRequest?: ListWhiteBlackIpRuleRequest): Promise<ListWhiteBlackIpRuleResponse> {
        const options = ParamCreater().listWhiteBlackIpRule(listWhiteBlackIpRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域名关联的证书信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名关联的证书信息
     * @param {string} domainId 域名id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainCertificate(showDomainCertificateRequest?: ShowDomainCertificateRequest): Promise<ShowDomainCertificateResponse> {
        const options = ParamCreater().showDomainCertificate(showDomainCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流量封禁信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流量封禁信息
     * @param {string} instanceId instanceId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFlowBlock(showFlowBlockRequest?: ShowFlowBlockRequest): Promise<ShowFlowBlockResponse> {
        const options = ParamCreater().showFlowBlock(showFlowBlockRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询WEB防护策略配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询WEB防护策略配置
     * @param {string} domainName 域名
     * @param {number} overseasType 防护区域，0-大陆，1-海外
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWafPolicy(showWafPolicyRequest?: ShowWafPolicyRequest): Promise<ShowWafPolicyResponse> {
        const options = ParamCreater().showWafPolicy(showWafPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询CC攻击防护请求QPS
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CC攻击防护请求QPS
     * @param {string} [recent] 枚举值：yesterday,today,3days,1week,1month 与开始结束时间不同时为空
     * @param {string} [domains] 查询域名
     * @param {string} [startTime] 开始时间（毫秒时间戳）
     * @param {string} [endTime] 结束时间（毫秒时间戳）
     * @param {number} [overseasType] 防护区域，0-大陆，1-海外
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWafQps(showWafQpsRequest?: ShowWafQpsRequest): Promise<ShowWafQpsResponse> {
        const options = ParamCreater().showWafQps(showWafQpsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例规格
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例规格
     * @param {UpgradeInstanceSpecV2RequestBody} upgradeInstanceSpecV2RequestBody 修改实例规格请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeInstanceSpec(upgradeInstanceSpecRequest?: UpgradeInstanceSpecRequest): Promise<UpgradeInstanceSpecResponse> {
        const options = ParamCreater().upgradeInstanceSpec(upgradeInstanceSpecRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 防护策略web-cc黑白名单-创建黑白名单规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addWafWhiteIpRule(addWafWhiteIpRuleRequest?: AddWafWhiteIpRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/aad/policies/waf/blackwhite-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addWafWhiteIpRuleRequest !== null && addWafWhiteIpRuleRequest !== undefined) {
                if (addWafWhiteIpRuleRequest instanceof AddWafWhiteIpRuleRequest) {
                    body = addWafWhiteIpRuleRequest.body
                } else {
                    body = addWafWhiteIpRuleRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建防护域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDomain(createDomainRequest?: CreateDomainRequest) {
            const options = {
                method: "POST",
                url: "/v2/aad/domains",
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

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除防护域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDomain(deleteDomainRequest?: DeleteDomainRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/aad/domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteDomainRequest !== null && deleteDomainRequest !== undefined) {
                if (deleteDomainRequest instanceof DeleteDomainRequest) {
                    body = deleteDomainRequest.body
                } else {
                    body = deleteDomainRequest['body'];
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
         * 防护策略web-cc黑白名单-删除黑白名单规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWafWhiteIpRule(deleteWafWhiteIpRuleRequest?: DeleteWafWhiteIpRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/aad/policies/waf/blackwhite-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteWafWhiteIpRuleRequest !== null && deleteWafWhiteIpRuleRequest !== undefined) {
                if (deleteWafWhiteIpRuleRequest instanceof DeleteWafWhiteIpRuleRequest) {
                    body = deleteWafWhiteIpRuleRequest.body
                } else {
                    body = deleteWafWhiteIpRuleRequest['body'];
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
         * 查询DDoS攻击事件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDDoSAttackEvent(listDDoSAttackEventRequest?: ListDDoSAttackEventRequest) {
            const options = {
                method: "POST",
                url: "/v2/aad/instances/{instance_id}/ddos-info/attack/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listDDoSAttackEventRequest !== null && listDDoSAttackEventRequest !== undefined) {
                if (listDDoSAttackEventRequest instanceof ListDDoSAttackEventRequest) {
                    instanceId = listDDoSAttackEventRequest.instanceId;
                    body = listDDoSAttackEventRequest.body
                } else {
                    instanceId = listDDoSAttackEventRequest['instance_id'];
                    body = listDDoSAttackEventRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDDoSAttackEvent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询新建连接数和并发连接数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDDoSConnectionNumber(listDDoSConnectionNumberRequest?: ListDDoSConnectionNumberRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/instances/{instance_id}/ddos-info/flow/connection-numbers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let instanceId;
            
            let ip;

            if (listDDoSConnectionNumberRequest !== null && listDDoSConnectionNumberRequest !== undefined) {
                if (listDDoSConnectionNumberRequest instanceof ListDDoSConnectionNumberRequest) {
                    startTime = listDDoSConnectionNumberRequest.startTime;
                    endTime = listDDoSConnectionNumberRequest.endTime;
                    instanceId = listDDoSConnectionNumberRequest.instanceId;
                    ip = listDDoSConnectionNumberRequest.ip;
                } else {
                    startTime = listDDoSConnectionNumberRequest['start_time'];
                    endTime = listDDoSConnectionNumberRequest['end_time'];
                    instanceId = listDDoSConnectionNumberRequest['instance_id'];
                    ip = listDDoSConnectionNumberRequest['ip'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listDDoSConnectionNumber.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listDDoSConnectionNumber.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDDoSConnectionNumber.');
            }
            if (ip === null || ip === undefined) {
                throw new RequiredError('ip','Required parameter ip was null or undefined when calling listDDoSConnectionNumber.');
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DDoS攻击防护BPS/PPS流量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDDoSFlow(listDDoSFlowRequest?: ListDDoSFlowRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/instances/{instance_id}/ddos-info/flow",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let ip;
            
            let type;
            
            let startTime;
            
            let endTime;

            if (listDDoSFlowRequest !== null && listDDoSFlowRequest !== undefined) {
                if (listDDoSFlowRequest instanceof ListDDoSFlowRequest) {
                    instanceId = listDDoSFlowRequest.instanceId;
                    ip = listDDoSFlowRequest.ip;
                    type = listDDoSFlowRequest.type;
                    startTime = listDDoSFlowRequest.startTime;
                    endTime = listDDoSFlowRequest.endTime;
                } else {
                    instanceId = listDDoSFlowRequest['instance_id'];
                    ip = listDDoSFlowRequest['ip'];
                    type = listDDoSFlowRequest['type'];
                    startTime = listDDoSFlowRequest['start_time'];
                    endTime = listDDoSFlowRequest['end_time'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDDoSFlow.');
            }
            if (ip === null || ip === undefined) {
                throw new RequiredError('ip','Required parameter ip was null or undefined when calling listDDoSFlow.');
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listDDoSFlow.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listDDoSFlow.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listDDoSFlow.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询频率控制规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFrequencyControlRule(listFrequencyControlRuleRequest?: ListFrequencyControlRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/policies/waf/frequency-control-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainName;

            if (listFrequencyControlRuleRequest !== null && listFrequencyControlRuleRequest !== undefined) {
                if (listFrequencyControlRuleRequest instanceof ListFrequencyControlRuleRequest) {
                    domainName = listFrequencyControlRuleRequest.domainName;
                } else {
                    domainName = listFrequencyControlRuleRequest['domain_name'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listFrequencyControlRule.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例关联的域名信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceDomains(listInstanceDomainsRequest?: ListInstanceDomainsRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/instances/{instance_id}/domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listInstanceDomainsRequest !== null && listInstanceDomainsRequest !== undefined) {
                if (listInstanceDomainsRequest instanceof ListInstanceDomainsRequest) {
                    instanceId = listInstanceDomainsRequest.instanceId;
                } else {
                    instanceId = listInstanceDomainsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceDomains.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询攻击事件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWafAttackEvent(listWafAttackEventRequest?: ListWafAttackEventRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/domains/waf-info/attack/event",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domains;
            
            let startTime;
            
            let endTime;
            
            let recent;
            
            let overseasType;
            
            let sip;
            
            let limit;
            
            let offset;

            if (listWafAttackEventRequest !== null && listWafAttackEventRequest !== undefined) {
                if (listWafAttackEventRequest instanceof ListWafAttackEventRequest) {
                    domains = listWafAttackEventRequest.domains;
                    startTime = listWafAttackEventRequest.startTime;
                    endTime = listWafAttackEventRequest.endTime;
                    recent = listWafAttackEventRequest.recent;
                    overseasType = listWafAttackEventRequest.overseasType;
                    sip = listWafAttackEventRequest.sip;
                    limit = listWafAttackEventRequest.limit;
                    offset = listWafAttackEventRequest.offset;
                } else {
                    domains = listWafAttackEventRequest['domains'];
                    startTime = listWafAttackEventRequest['start_time'];
                    endTime = listWafAttackEventRequest['end_time'];
                    recent = listWafAttackEventRequest['recent'];
                    overseasType = listWafAttackEventRequest['overseas_type'];
                    sip = listWafAttackEventRequest['sip'];
                    limit = listWafAttackEventRequest['limit'];
                    offset = listWafAttackEventRequest['offset'];
                }
            }

        
            if (domains !== null && domains !== undefined) {
                localVarQueryParameter['domains'] = domains;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (recent !== null && recent !== undefined) {
                localVarQueryParameter['recent'] = recent;
            }
            if (overseasType !== null && overseasType !== undefined) {
                localVarQueryParameter['overseas_type'] = overseasType;
            }
            if (sip !== null && sip !== undefined) {
                localVarQueryParameter['sip'] = sip;
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
         * 带宽曲线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWafBandwidth(listWafBandwidthRequest?: ListWafBandwidthRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/domains/waf-info/flow/bandwidth",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let valueType;
            
            let domains;
            
            let startTime;
            
            let endTime;
            
            let recent;
            
            let overseasType;

            if (listWafBandwidthRequest !== null && listWafBandwidthRequest !== undefined) {
                if (listWafBandwidthRequest instanceof ListWafBandwidthRequest) {
                    valueType = listWafBandwidthRequest.valueType;
                    domains = listWafBandwidthRequest.domains;
                    startTime = listWafBandwidthRequest.startTime;
                    endTime = listWafBandwidthRequest.endTime;
                    recent = listWafBandwidthRequest.recent;
                    overseasType = listWafBandwidthRequest.overseasType;
                } else {
                    valueType = listWafBandwidthRequest['value_type'];
                    domains = listWafBandwidthRequest['domains'];
                    startTime = listWafBandwidthRequest['start_time'];
                    endTime = listWafBandwidthRequest['end_time'];
                    recent = listWafBandwidthRequest['recent'];
                    overseasType = listWafBandwidthRequest['overseas_type'];
                }
            }

        
            if (valueType === null || valueType === undefined) {
                throw new RequiredError('valueType','Required parameter valueType was null or undefined when calling listWafBandwidth.');
            }
            if (valueType !== null && valueType !== undefined) {
                localVarQueryParameter['value_type'] = valueType;
            }
            if (domains !== null && domains !== undefined) {
                localVarQueryParameter['domains'] = domains;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (recent !== null && recent !== undefined) {
                localVarQueryParameter['recent'] = recent;
            }
            if (overseasType !== null && overseasType !== undefined) {
                localVarQueryParameter['overseas_type'] = overseasType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询精准防护规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWafCustomRule(listWafCustomRuleRequest?: ListWafCustomRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/policies/waf/custom-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainName;
            
            let overseasType;

            if (listWafCustomRuleRequest !== null && listWafCustomRuleRequest !== undefined) {
                if (listWafCustomRuleRequest instanceof ListWafCustomRuleRequest) {
                    domainName = listWafCustomRuleRequest.domainName;
                    overseasType = listWafCustomRuleRequest.overseasType;
                } else {
                    domainName = listWafCustomRuleRequest['domain_name'];
                    overseasType = listWafCustomRuleRequest['overseas_type'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listWafCustomRule.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (overseasType === null || overseasType === undefined) {
                throw new RequiredError('overseasType','Required parameter overseasType was null or undefined when calling listWafCustomRule.');
            }
            if (overseasType !== null && overseasType !== undefined) {
                localVarQueryParameter['overseas_type'] = overseasType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询区域封禁规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWafGeoIpRule(listWafGeoIpRuleRequest?: ListWafGeoIpRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/policies/waf/geoip-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainName;
            
            let overseasType;

            if (listWafGeoIpRuleRequest !== null && listWafGeoIpRuleRequest !== undefined) {
                if (listWafGeoIpRuleRequest instanceof ListWafGeoIpRuleRequest) {
                    domainName = listWafGeoIpRuleRequest.domainName;
                    overseasType = listWafGeoIpRuleRequest.overseasType;
                } else {
                    domainName = listWafGeoIpRuleRequest['domain_name'];
                    overseasType = listWafGeoIpRuleRequest['overseas_type'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listWafGeoIpRule.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (overseasType === null || overseasType === undefined) {
                throw new RequiredError('overseasType','Required parameter overseasType was null or undefined when calling listWafGeoIpRule.');
            }
            if (overseasType !== null && overseasType !== undefined) {
                localVarQueryParameter['overseas_type'] = overseasType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询请求QPS
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWafQps(listWafQpsRequest?: ListWafQpsRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/domains/waf-info/flow/qps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let valueType;
            
            let domains;
            
            let startTime;
            
            let endTime;
            
            let recent;
            
            let overseasType;

            if (listWafQpsRequest !== null && listWafQpsRequest !== undefined) {
                if (listWafQpsRequest instanceof ListWafQpsRequest) {
                    valueType = listWafQpsRequest.valueType;
                    domains = listWafQpsRequest.domains;
                    startTime = listWafQpsRequest.startTime;
                    endTime = listWafQpsRequest.endTime;
                    recent = listWafQpsRequest.recent;
                    overseasType = listWafQpsRequest.overseasType;
                } else {
                    valueType = listWafQpsRequest['value_type'];
                    domains = listWafQpsRequest['domains'];
                    startTime = listWafQpsRequest['start_time'];
                    endTime = listWafQpsRequest['end_time'];
                    recent = listWafQpsRequest['recent'];
                    overseasType = listWafQpsRequest['overseas_type'];
                }
            }

        
            if (valueType === null || valueType === undefined) {
                throw new RequiredError('valueType','Required parameter valueType was null or undefined when calling listWafQps.');
            }
            if (valueType !== null && valueType !== undefined) {
                localVarQueryParameter['value_type'] = valueType;
            }
            if (domains !== null && domains !== undefined) {
                localVarQueryParameter['domains'] = domains;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (recent !== null && recent !== undefined) {
                localVarQueryParameter['recent'] = recent;
            }
            if (overseasType !== null && overseasType !== undefined) {
                localVarQueryParameter['overseas_type'] = overseasType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 防护策略web-cc黑白名单-查询黑白名单规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWafWhiteIpRule(listWafWhiteIpRuleRequest?: ListWafWhiteIpRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/policies/waf/blackwhite-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainName;
            
            let overseasType;

            if (listWafWhiteIpRuleRequest !== null && listWafWhiteIpRuleRequest !== undefined) {
                if (listWafWhiteIpRuleRequest instanceof ListWafWhiteIpRuleRequest) {
                    domainName = listWafWhiteIpRuleRequest.domainName;
                    overseasType = listWafWhiteIpRuleRequest.overseasType;
                } else {
                    domainName = listWafWhiteIpRuleRequest['domain_name'];
                    overseasType = listWafWhiteIpRuleRequest['overseas_type'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling listWafWhiteIpRule.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (overseasType === null || overseasType === undefined) {
                throw new RequiredError('overseasType','Required parameter overseasType was null or undefined when calling listWafWhiteIpRule.');
            }
            if (overseasType !== null && overseasType !== undefined) {
                localVarQueryParameter['overseas_type'] = overseasType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DDoS攻击防护的黑白名单列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWhiteBlackIpRule(listWhiteBlackIpRuleRequest?: ListWhiteBlackIpRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/policies/ddos/blackwhite-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;
            
            let instanceId;

            if (listWhiteBlackIpRuleRequest !== null && listWhiteBlackIpRuleRequest !== undefined) {
                if (listWhiteBlackIpRuleRequest instanceof ListWhiteBlackIpRuleRequest) {
                    type = listWhiteBlackIpRuleRequest.type;
                    instanceId = listWhiteBlackIpRuleRequest.instanceId;
                } else {
                    type = listWhiteBlackIpRuleRequest['type'];
                    instanceId = listWhiteBlackIpRuleRequest['instance_id'];
                }
            }

        
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listWhiteBlackIpRule.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (instanceId === null || instanceId === undefined) {
                throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listWhiteBlackIpRule.');
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询域名关联的证书信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainCertificate(showDomainCertificateRequest?: ShowDomainCertificateRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/domains/{domain_id}/certificate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;

            if (showDomainCertificateRequest !== null && showDomainCertificateRequest !== undefined) {
                if (showDomainCertificateRequest instanceof ShowDomainCertificateRequest) {
                    domainId = showDomainCertificateRequest.domainId;
                } else {
                    domainId = showDomainCertificateRequest['domain_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showDomainCertificate.');
            }

            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询流量封禁信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFlowBlock(showFlowBlockRequest?: ShowFlowBlockRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/policies/ddos/flow-block",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;

            if (showFlowBlockRequest !== null && showFlowBlockRequest !== undefined) {
                if (showFlowBlockRequest instanceof ShowFlowBlockRequest) {
                    instanceId = showFlowBlockRequest.instanceId;
                } else {
                    instanceId = showFlowBlockRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
                throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showFlowBlock.');
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询WEB防护策略配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWafPolicy(showWafPolicyRequest?: ShowWafPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/policies/waf",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainName;
            
            let overseasType;

            if (showWafPolicyRequest !== null && showWafPolicyRequest !== undefined) {
                if (showWafPolicyRequest instanceof ShowWafPolicyRequest) {
                    domainName = showWafPolicyRequest.domainName;
                    overseasType = showWafPolicyRequest.overseasType;
                } else {
                    domainName = showWafPolicyRequest['domain_name'];
                    overseasType = showWafPolicyRequest['overseas_type'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showWafPolicy.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (overseasType === null || overseasType === undefined) {
                throw new RequiredError('overseasType','Required parameter overseasType was null or undefined when calling showWafPolicy.');
            }
            if (overseasType !== null && overseasType !== undefined) {
                localVarQueryParameter['overseas_type'] = overseasType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询CC攻击防护请求QPS
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWafQps(showWafQpsRequest?: ShowWafQpsRequest) {
            const options = {
                method: "GET",
                url: "/v2/aad/domains/waf-info/flow/request/peak",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let recent;
            
            let domains;
            
            let startTime;
            
            let endTime;
            
            let overseasType;

            if (showWafQpsRequest !== null && showWafQpsRequest !== undefined) {
                if (showWafQpsRequest instanceof ShowWafQpsRequest) {
                    recent = showWafQpsRequest.recent;
                    domains = showWafQpsRequest.domains;
                    startTime = showWafQpsRequest.startTime;
                    endTime = showWafQpsRequest.endTime;
                    overseasType = showWafQpsRequest.overseasType;
                } else {
                    recent = showWafQpsRequest['recent'];
                    domains = showWafQpsRequest['domains'];
                    startTime = showWafQpsRequest['start_time'];
                    endTime = showWafQpsRequest['end_time'];
                    overseasType = showWafQpsRequest['overseas_type'];
                }
            }

        
            if (recent !== null && recent !== undefined) {
                localVarQueryParameter['recent'] = recent;
            }
            if (domains !== null && domains !== undefined) {
                localVarQueryParameter['domains'] = domains;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (overseasType !== null && overseasType !== undefined) {
                localVarQueryParameter['overseas_type'] = overseasType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改实例规格
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeInstanceSpec(upgradeInstanceSpecRequest?: UpgradeInstanceSpecRequest) {
            const options = {
                method: "PUT",
                url: "/v2/aad/instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (upgradeInstanceSpecRequest !== null && upgradeInstanceSpecRequest !== undefined) {
                if (upgradeInstanceSpecRequest instanceof UpgradeInstanceSpecRequest) {
                    body = upgradeInstanceSpecRequest.body
                } else {
                    body = upgradeInstanceSpecRequest['body'];
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
    
    }
};

function newClient(client: HcClient): AadClient {
    return new AadClient(client);
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