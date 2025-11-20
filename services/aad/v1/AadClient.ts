import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddBlackWhiteIpListRequest } from './model/AddBlackWhiteIpListRequest';
import { AddBlackWhiteIpListResponse } from './model/AddBlackWhiteIpListResponse';
import { AddPolicyBlackAndWhiteIpListRequest } from './model/AddPolicyBlackAndWhiteIpListRequest';
import { AddPolicyBlackAndWhiteIpListResponse } from './model/AddPolicyBlackAndWhiteIpListResponse';
import { AlarmBody } from './model/AlarmBody';
import { AssociateIpToPolicyAndPackageRequest } from './model/AssociateIpToPolicyAndPackageRequest';
import { AssociateIpToPolicyAndPackageResponse } from './model/AssociateIpToPolicyAndPackageResponse';
import { AssociateIpToPolicyRequest } from './model/AssociateIpToPolicyRequest';
import { AssociateIpToPolicyResponse } from './model/AssociateIpToPolicyResponse';
import { BatchCreateInstanceIpRuleRequest } from './model/BatchCreateInstanceIpRuleRequest';
import { BatchCreateInstanceIpRuleResponse } from './model/BatchCreateInstanceIpRuleResponse';
import { BatchDeleteInstanceIpRuleRequest } from './model/BatchDeleteInstanceIpRuleRequest';
import { BatchDeleteInstanceIpRuleResponse } from './model/BatchDeleteInstanceIpRuleResponse';
import { BatchIdBody } from './model/BatchIdBody';
import { BatchTransferRuleBody } from './model/BatchTransferRuleBody';
import { BlackWhiteIpListRequest } from './model/BlackWhiteIpListRequest';
import { BlackWhiteIpRequestBody } from './model/BlackWhiteIpRequestBody';
import { BlockListBlockingList } from './model/BlockListBlockingList';
import { Bw } from './model/Bw';
import { CadDomainSwitchRequest } from './model/CadDomainSwitchRequest';
import { CertificateBody } from './model/CertificateBody';
import { CreateDomainRequest } from './model/CreateDomainRequest';
import { CreateDomainResponse } from './model/CreateDomainResponse';
import { CreatePolicyRequest } from './model/CreatePolicyRequest';
import { CreatePolicyRequestBody } from './model/CreatePolicyRequestBody';
import { CreatePolicyResponse } from './model/CreatePolicyResponse';
import { DeleteAlarmConfigRequest } from './model/DeleteAlarmConfigRequest';
import { DeleteAlarmConfigResponse } from './model/DeleteAlarmConfigResponse';
import { DeleteBlackWhiteIpListRequest } from './model/DeleteBlackWhiteIpListRequest';
import { DeleteBlackWhiteIpListResponse } from './model/DeleteBlackWhiteIpListResponse';
import { DeletePolicyBlackAndWhiteIpListRequest } from './model/DeletePolicyBlackAndWhiteIpListRequest';
import { DeletePolicyBlackAndWhiteIpListResponse } from './model/DeletePolicyBlackAndWhiteIpListResponse';
import { DeletePolicyRequest } from './model/DeletePolicyRequest';
import { DeletePolicyResponse } from './model/DeletePolicyResponse';
import { DisassociateIpFromPolicyAndPackageRequest } from './model/DisassociateIpFromPolicyAndPackageRequest';
import { DisassociateIpFromPolicyAndPackageResponse } from './model/DisassociateIpFromPolicyAndPackageResponse';
import { DisassociateIpFromPolicyRequest } from './model/DisassociateIpFromPolicyRequest';
import { DisassociateIpFromPolicyResponse } from './model/DisassociateIpFromPolicyResponse';
import { DomainInfo } from './model/DomainInfo';
import { DomainRealServerInfo } from './model/DomainRealServerInfo';
import { ExecuteUnblockIpRequest } from './model/ExecuteUnblockIpRequest';
import { ExecuteUnblockIpRequestBody } from './model/ExecuteUnblockIpRequestBody';
import { ExecuteUnblockIpResponse } from './model/ExecuteUnblockIpResponse';
import { HostBody } from './model/HostBody';
import { InstanceInfo } from './model/InstanceInfo';
import { InstanceIpInfo } from './model/InstanceIpInfo';
import { IpBindingBody } from './model/IpBindingBody';
import { IpBindingV3Body } from './model/IpBindingV3Body';
import { IpStatusDetail } from './model/IpStatusDetail';
import { ListBlockIpsRequest } from './model/ListBlockIpsRequest';
import { ListBlockIpsResponse } from './model/ListBlockIpsResponse';
import { ListDomainRequest } from './model/ListDomainRequest';
import { ListDomainResponse } from './model/ListDomainResponse';
import { ListInstanceIdRequest } from './model/ListInstanceIdRequest';
import { ListInstanceIdResponse } from './model/ListInstanceIdResponse';
import { ListInstanceIpRuleRequest } from './model/ListInstanceIpRuleRequest';
import { ListInstanceIpRuleResponse } from './model/ListInstanceIpRuleResponse';
import { ListInstanceRequest } from './model/ListInstanceRequest';
import { ListInstanceResponse } from './model/ListInstanceResponse';
import { ListPackageRequest } from './model/ListPackageRequest';
import { ListPackageResponse } from './model/ListPackageResponse';
import { ListPeakRequest } from './model/ListPeakRequest';
import { ListPeakResponse } from './model/ListPeakResponse';
import { ListPolicyRequest } from './model/ListPolicyRequest';
import { ListPolicyResponse } from './model/ListPolicyResponse';
import { ListProtectedIpRequest } from './model/ListProtectedIpRequest';
import { ListProtectedIpResponse } from './model/ListProtectedIpResponse';
import { ListSourceIpsRequest } from './model/ListSourceIpsRequest';
import { ListSourceIpsResponse } from './model/ListSourceIpsResponse';
import { ListUnblockQuotaStatisticsRequest } from './model/ListUnblockQuotaStatisticsRequest';
import { ListUnblockQuotaStatisticsResponse } from './model/ListUnblockQuotaStatisticsResponse';
import { ListUnboundProtectedIpRequest } from './model/ListUnboundProtectedIpRequest';
import { ListUnboundProtectedIpResponse } from './model/ListUnboundProtectedIpResponse';
import { ModifyDomainWebSwitchRequest } from './model/ModifyDomainWebSwitchRequest';
import { ModifyDomainWebSwitchResponse } from './model/ModifyDomainWebSwitchResponse';
import { PackageResponse } from './model/PackageResponse';
import { PolicyResponse } from './model/PolicyResponse';
import { PopPolicy } from './model/PopPolicy';
import { ProtectedIpResponse } from './model/ProtectedIpResponse';
import { SetCertForDomainRequest } from './model/SetCertForDomainRequest';
import { SetCertForDomainResponse } from './model/SetCertForDomainResponse';
import { ShowAlarmConfigRequest } from './model/ShowAlarmConfigRequest';
import { ShowAlarmConfigResponse } from './model/ShowAlarmConfigResponse';
import { ShowBlockStatisticsRequest } from './model/ShowBlockStatisticsRequest';
import { ShowBlockStatisticsResponse } from './model/ShowBlockStatisticsResponse';
import { ShowLtsConfigRequest } from './model/ShowLtsConfigRequest';
import { ShowLtsConfigResponse } from './model/ShowLtsConfigResponse';
import { ShowPolicyRequest } from './model/ShowPolicyRequest';
import { ShowPolicyResponse } from './model/ShowPolicyResponse';
import { ShowUnblockRecordRequest } from './model/ShowUnblockRecordRequest';
import { ShowUnblockRecordResponse } from './model/ShowUnblockRecordResponse';
import { TransferRuleBody } from './model/TransferRuleBody';
import { TransferRuleInfo } from './model/TransferRuleInfo';
import { UnblockRecordResponseUnblockRecord } from './model/UnblockRecordResponseUnblockRecord';
import { UpdateAlarmConfigRequest } from './model/UpdateAlarmConfigRequest';
import { UpdateAlarmConfigResponse } from './model/UpdateAlarmConfigResponse';
import { UpdateDomainRequest } from './model/UpdateDomainRequest';
import { UpdateDomainResponse } from './model/UpdateDomainResponse';
import { UpdateInstanceIpRuleRequest } from './model/UpdateInstanceIpRuleRequest';
import { UpdateInstanceIpRuleResponse } from './model/UpdateInstanceIpRuleResponse';
import { UpdateLtsConfigRequest } from './model/UpdateLtsConfigRequest';
import { UpdateLtsConfigRequestBody } from './model/UpdateLtsConfigRequestBody';
import { UpdateLtsConfigRequestBodyLtsIdInfo } from './model/UpdateLtsConfigRequestBodyLtsIdInfo';
import { UpdateLtsConfigResponse } from './model/UpdateLtsConfigResponse';
import { UpdatePackageIpRequest } from './model/UpdatePackageIpRequest';
import { UpdatePackageIpRequestBody } from './model/UpdatePackageIpRequestBody';
import { UpdatePackageIpResponse } from './model/UpdatePackageIpResponse';
import { UpdatePackageNameRequest } from './model/UpdatePackageNameRequest';
import { UpdatePackageNameRequestBody } from './model/UpdatePackageNameRequestBody';
import { UpdatePackageNameResponse } from './model/UpdatePackageNameResponse';
import { UpdatePolicyRequest } from './model/UpdatePolicyRequest';
import { UpdatePolicyRequestBody } from './model/UpdatePolicyRequestBody';
import { UpdatePolicyResponse } from './model/UpdatePolicyResponse';
import { UpdateProtectedIpBody } from './model/UpdateProtectedIpBody';
import { UpdateProtectedIpInPolicyBody } from './model/UpdateProtectedIpInPolicyBody';
import { UpdateTagForProtectedIpRequest } from './model/UpdateTagForProtectedIpRequest';
import { UpdateTagForProtectedIpResponse } from './model/UpdateTagForProtectedIpResponse';

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
     * 解封IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解封IP
     * @param {string} domainId 租户id
     * @param {ExecuteUnblockIpRequestBody} executeUnblockIpRequestBody ip地址
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeUnblockIp(executeUnblockIpRequest?: ExecuteUnblockIpRequest): Promise<ExecuteUnblockIpResponse> {
        const options = ParamCreater().executeUnblockIp(executeUnblockIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户封堵列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户封堵列表
     * @param {string} domainId 租户id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBlockIps(listBlockIpsRequest?: ListBlockIpsRequest): Promise<ListBlockIpsResponse> {
        const options = ParamCreater().listBlockIps(listBlockIpsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询解封配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询解封配额
     * @param {string} domainId 租户id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUnblockQuotaStatistics(listUnblockQuotaStatisticsRequest?: ListUnblockQuotaStatisticsRequest): Promise<ListUnblockQuotaStatisticsResponse> {
        const options = ParamCreater().listUnblockQuotaStatistics(listUnblockQuotaStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询封堵统计数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询封堵统计数据
     * @param {string} domainId 租户id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBlockStatistics(showBlockStatisticsRequest?: ShowBlockStatisticsRequest): Promise<ShowBlockStatisticsResponse> {
        const options = ParamCreater().showBlockStatistics(showBlockStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户解封记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户解封记录
     * @param {string} domainId 租户id
     * @param {number} startTime 开始时间
     * @param {number} endTime 结束时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUnblockRecord(showUnblockRecordRequest?: ShowUnblockRecordRequest): Promise<ShowUnblockRecordResponse> {
        const options = ParamCreater().showUnblockRecord(showUnblockRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 高防实例添加黑白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 高防实例添加黑白名单
     * @param {BlackWhiteIpListRequest} blackWhiteIpListRequest 黑白名单IP信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addBlackWhiteIpList(addBlackWhiteIpListRequest?: AddBlackWhiteIpListRequest): Promise<AddBlackWhiteIpListResponse> {
        const options = ParamCreater().addBlackWhiteIpList(addBlackWhiteIpListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 策略添加黑白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 策略添加黑白名单
     * @param {string} policyId 策略id
     * @param {BlackWhiteIpRequestBody} addPolicyBlackAndWhiteIpListRequestBody 添加黑白名单的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addPolicyBlackAndWhiteIpList(addPolicyBlackAndWhiteIpListRequest?: AddPolicyBlackAndWhiteIpListRequest): Promise<AddPolicyBlackAndWhiteIpListResponse> {
        const options = ParamCreater().addPolicyBlackAndWhiteIpList(addPolicyBlackAndWhiteIpListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 策略绑定防护对象
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 策略绑定防护对象
     * @param {string} policyId 策略id
     * @param {IpBindingBody} associateIpToPolicyRequestBody 策略绑定ip的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateIpToPolicy(associateIpToPolicyRequest?: AssociateIpToPolicyRequest): Promise<AssociateIpToPolicyResponse> {
        const options = ParamCreater().associateIpToPolicy(associateIpToPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 策略和实例绑定防护对象
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 策略和实例绑定防护对象
     * @param {string} policyId 策略id
     * @param {IpBindingV3Body} associateIpToPolicyAndPackageRequestBody 策略绑定ip的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateIpToPolicyAndPackage(associateIpToPolicyAndPackageRequest?: AssociateIpToPolicyAndPackageRequest): Promise<AssociateIpToPolicyAndPackageResponse> {
        const options = ParamCreater().associateIpToPolicyAndPackage(associateIpToPolicyAndPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建高防实例IP的转发规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建高防实例IP的转发规则
     * @param {string} instanceId 实例Id
     * @param {string} ip 单个 IP
     * @param {BatchTransferRuleBody} batchCreateInstanceIpRuleRequestBody 批量创建的转发规则信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateInstanceIpRule(batchCreateInstanceIpRuleRequest?: BatchCreateInstanceIpRuleRequest): Promise<BatchCreateInstanceIpRuleResponse> {
        const options = ParamCreater().batchCreateInstanceIpRule(batchCreateInstanceIpRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除高防实例IP的转发规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除高防实例IP的转发规则
     * @param {string} instanceId 实例Id
     * @param {string} ip 单个 IP
     * @param {BatchIdBody} batchDeleteInstanceIpRuleRequestBody 批量删除的转发规则信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteInstanceIpRule(batchDeleteInstanceIpRuleRequest?: BatchDeleteInstanceIpRuleRequest): Promise<BatchDeleteInstanceIpRuleResponse> {
        const options = ParamCreater().batchDeleteInstanceIpRule(batchDeleteInstanceIpRuleRequest);

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
     * @param {HostBody} hostBody 域名信息
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
     * 创建策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建策略
     * @param {CreatePolicyRequestBody} createPolicyRequestBody 创建策略请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPolicy(createPolicyRequest?: CreatePolicyRequest): Promise<CreatePolicyResponse> {
        const options = ParamCreater().createPolicy(createPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除告警配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除告警配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAlarmConfig(deleteAlarmConfigRequest?: DeleteAlarmConfigRequest): Promise<DeleteAlarmConfigResponse> {
        const options = ParamCreater().deleteAlarmConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 高防实例删除黑白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 高防实例删除黑白名单
     * @param {BlackWhiteIpListRequest} blackWhiteIpListRequest 黑白名单IP信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBlackWhiteIpList(deleteBlackWhiteIpListRequest?: DeleteBlackWhiteIpListRequest): Promise<DeleteBlackWhiteIpListResponse> {
        const options = ParamCreater().deleteBlackWhiteIpList(deleteBlackWhiteIpListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除策略
     * @param {string} policyId 策略id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePolicy(deletePolicyRequest?: DeletePolicyRequest): Promise<DeletePolicyResponse> {
        const options = ParamCreater().deletePolicy(deletePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 策略删除黑白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 策略删除黑白名单
     * @param {string} policyId 策略id
     * @param {BlackWhiteIpRequestBody} deletePolicyBlackAndWhiteIpListRequestBody 删除黑白名单的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePolicyBlackAndWhiteIpList(deletePolicyBlackAndWhiteIpListRequest?: DeletePolicyBlackAndWhiteIpListRequest): Promise<DeletePolicyBlackAndWhiteIpListResponse> {
        const options = ParamCreater().deletePolicyBlackAndWhiteIpList(deletePolicyBlackAndWhiteIpListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 策略解绑防护对象
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 策略解绑防护对象
     * @param {string} policyId 策略id
     * @param {IpBindingBody} disassociateIpFromPolicyRequestBody 策略解绑ip的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateIpFromPolicy(disassociateIpFromPolicyRequest?: DisassociateIpFromPolicyRequest): Promise<DisassociateIpFromPolicyResponse> {
        const options = ParamCreater().disassociateIpFromPolicy(disassociateIpFromPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 策略和实例解绑防护对象
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 策略和实例解绑防护对象
     * @param {string} policyId 策略id
     * @param {IpBindingV3Body} disassociateIpFromPolicyAndPackageRequestBody 策略解绑ip的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateIpFromPolicyAndPackage(disassociateIpFromPolicyAndPackageRequest?: DisassociateIpFromPolicyAndPackageRequest): Promise<DisassociateIpFromPolicyAndPackageResponse> {
        const options = ParamCreater().disassociateIpFromPolicyAndPackage(disassociateIpFromPolicyAndPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域名列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名列表
     * @param {number} [limit] 限制条数
     * @param {number} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomain(listDomainRequest?: ListDomainRequest): Promise<ListDomainResponse> {
        const options = ParamCreater().listDomain(listDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询高防实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询高防实例列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstance(listInstanceRequest?: ListInstanceRequest): Promise<ListInstanceResponse> {
        const options = ParamCreater().listInstance();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域名关联的实例ID
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名关联的实例ID
     * @param {string} domainId 域名ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceId(listInstanceIdRequest?: ListInstanceIdRequest): Promise<ListInstanceIdResponse> {
        const options = ParamCreater().listInstanceId(listInstanceIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询高防实例IP的转发规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询高防实例IP的转发规则列表
     * @param {string} instanceId 实例Id
     * @param {string} ip 单个 IP
     * @param {number} [limit] 限制条数
     * @param {number} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceIpRule(listInstanceIpRuleRequest?: ListInstanceIpRuleRequest): Promise<ListInstanceIpRuleResponse> {
        const options = ParamCreater().listInstanceIpRule(listInstanceIpRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPackage(listPackageRequest?: ListPackageRequest): Promise<ListPackageResponse> {
        const options = ParamCreater().listPackage();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流量峰值、攻击计数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流量峰值、攻击计数
     * @param {string} instanceId 实例Id
     * @param {string} ip 单个 IP
     * @param {string} startTime 开始时间，毫秒时间戳
     * @param {string} endTime 结束时间，毫秒时间戳
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPeak(listPeakRequest?: ListPeakRequest): Promise<ListPeakResponse> {
        const options = ParamCreater().listPeak(listPeakRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略列表
     * @param {number} [offset] 开始查询的偏移量,默认值:0
     * @param {number} [limit] 每页显示的条目数量,默认值:2000
     * @param {string} [policyName] 策略名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicy(listPolicyRequest?: ListPolicyRequest): Promise<ListPolicyResponse> {
        const options = ParamCreater().listPolicy(listPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防护对象列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护对象列表
     * @param {number} [offset] 开始查询的偏移量,默认值:0
     * @param {number} [limit] 每页显示的条目数量,默认值:2000
     * @param {string} [packageId] 实例id
     * @param {string} [policyId] 策略id
     * @param {string} [ip] 防护ip
     * @param {string} [tag] 本地标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProtectedIp(listProtectedIpRequest?: ListProtectedIpRequest): Promise<ListProtectedIpResponse> {
        const options = ParamCreater().listProtectedIp(listProtectedIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询高防回源IP段列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询高防回源IP段列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSourceIps(listSourceIpsRequest?: ListSourceIpsRequest): Promise<ListSourceIpsResponse> {
        const options = ParamCreater().listSourceIps();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可绑定的防护对象列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可绑定的防护对象列表
     * @param {string} packageId 实例id
     * @param {number} [offset] 开始查询的偏移量,默认值:0
     * @param {number} [limit] 每页显示的条目数量,默认值:2000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUnboundProtectedIp(listUnboundProtectedIpRequest?: ListUnboundProtectedIpRequest): Promise<ListUnboundProtectedIpResponse> {
        const options = ParamCreater().listUnboundProtectedIp(listUnboundProtectedIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改域名WEB基础防护开关/CC防护开关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改域名WEB基础防护开关/CC防护开关
     * @param {CadDomainSwitchRequest} switchRequest WEB防护开关信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyDomainWebSwitch(modifyDomainWebSwitchRequest?: ModifyDomainWebSwitchRequest): Promise<ModifyDomainWebSwitchResponse> {
        const options = ParamCreater().modifyDomainWebSwitch(modifyDomainWebSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 上传/修改域名对应证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传/修改域名对应证书
     * @param {CertificateBody} certificateBody 证书信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setCertForDomain(setCertForDomainRequest?: SetCertForDomainRequest): Promise<SetCertForDomainResponse> {
        const options = ParamCreater().setCertForDomain(setCertForDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAlarmConfig(showAlarmConfigRequest?: ShowAlarmConfigRequest): Promise<ShowAlarmConfigResponse> {
        const options = ParamCreater().showAlarmConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询日志配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询日志配置
     * @param {string} [enterpriseProjectId] 企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLtsConfig(showLtsConfigRequest?: ShowLtsConfigRequest): Promise<ShowLtsConfigResponse> {
        const options = ParamCreater().showLtsConfig(showLtsConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询策略详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略详情
     * @param {string} policyId 策略id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPolicy(showPolicyRequest?: ShowPolicyRequest): Promise<ShowPolicyResponse> {
        const options = ParamCreater().showPolicy(showPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置告警配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置告警配置
     * @param {AlarmBody} updateAlarmConfigRequestBody AlarmBody object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlarmConfig(updateAlarmConfigRequest?: UpdateAlarmConfigRequest): Promise<UpdateAlarmConfigResponse> {
        const options = ParamCreater().updateAlarmConfig(updateAlarmConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新域名源站配置信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新域名信息
     * @param {string} domainId 域名ID
     * @param {DomainRealServerInfo} updateDomainRequestBody 域名信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomain(updateDomainRequest?: UpdateDomainRequest): Promise<UpdateDomainResponse> {
        const options = ParamCreater().updateDomain(updateDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改高防实例转发配置的源站IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改高防实例转发配置的源站IP
     * @param {string} instanceId 实例Id
     * @param {string} ip 单个 IP
     * @param {string} ruleId 规则ID
     * @param {TransferRuleBody} updateInstanceIpRuleRequestBody 转发规则信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceIpRule(updateInstanceIpRuleRequest?: UpdateInstanceIpRuleRequest): Promise<UpdateInstanceIpRuleResponse> {
        const options = ParamCreater().updateInstanceIpRule(updateInstanceIpRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置日志配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置日志配置
     * @param {UpdateLtsConfigRequestBody} updateLtsConfigRequestBody 更新日志配置的请求体
     * @param {string} [enterpriseProjectId] 企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLtsConfig(updateLtsConfigRequest?: UpdateLtsConfigRequest): Promise<UpdateLtsConfigResponse> {
        const options = ParamCreater().updateLtsConfig(updateLtsConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新实例绑定的全量防护对象
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新实例绑定的全量防护对象
     * @param {string} packageId 实例id
     * @param {UpdatePackageIpRequestBody} updatePackageIpRequestBody 实例绑定全量ip的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePackageIp(updatePackageIpRequest?: UpdatePackageIpRequest): Promise<UpdatePackageIpResponse> {
        const options = ParamCreater().updatePackageIp(updatePackageIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新实例名字
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新实例名字
     * @param {string} packageId 实例id
     * @param {UpdatePackageNameRequestBody} updatePackageNameRequestBody 更新实例名的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePackageName(updatePackageNameRequest?: UpdatePackageNameRequest): Promise<UpdatePackageNameResponse> {
        const options = ParamCreater().updatePackageName(updatePackageNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新策略
     * @param {string} policyId 策略id
     * @param {UpdatePolicyRequestBody} updatePolicyRequestBody 更新策略的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePolicy(updatePolicyRequest?: UpdatePolicyRequest): Promise<UpdatePolicyResponse> {
        const options = ParamCreater().updatePolicy(updatePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 防护对象设置标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 防护对象设置标签
     * @param {UpdateProtectedIpBody} updateTagForProtectedIpRequestBody 更新ip标签的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTagForProtectedIp(updateTagForProtectedIpRequest?: UpdateTagForProtectedIpRequest): Promise<UpdateTagForProtectedIpResponse> {
        const options = ParamCreater().updateTagForProtectedIp(updateTagForProtectedIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 解封IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeUnblockIp(executeUnblockIpRequest?: ExecuteUnblockIpRequest) {
            const options = {
                method: "POST",
                url: "/v1/unblockservice/{domain_id}/unblock",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (executeUnblockIpRequest !== null && executeUnblockIpRequest !== undefined) {
                if (executeUnblockIpRequest instanceof ExecuteUnblockIpRequest) {
                    domainId = executeUnblockIpRequest.domainId;
                    body = executeUnblockIpRequest.body
                } else {
                    domainId = executeUnblockIpRequest['domain_id'];
                    body = executeUnblockIpRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling executeUnblockIp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户封堵列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBlockIps(listBlockIpsRequest?: ListBlockIpsRequest) {
            const options = {
                method: "GET",
                url: "/v1/unblockservice/{domain_id}/block-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;

            if (listBlockIpsRequest !== null && listBlockIpsRequest !== undefined) {
                if (listBlockIpsRequest instanceof ListBlockIpsRequest) {
                    domainId = listBlockIpsRequest.domainId;
                } else {
                    domainId = listBlockIpsRequest['domain_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listBlockIps.');
            }

            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询解封配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUnblockQuotaStatistics(listUnblockQuotaStatisticsRequest?: ListUnblockQuotaStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1/unblockservice/{domain_id}/unblock-quota-statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;

            if (listUnblockQuotaStatisticsRequest !== null && listUnblockQuotaStatisticsRequest !== undefined) {
                if (listUnblockQuotaStatisticsRequest instanceof ListUnblockQuotaStatisticsRequest) {
                    domainId = listUnblockQuotaStatisticsRequest.domainId;
                } else {
                    domainId = listUnblockQuotaStatisticsRequest['domain_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listUnblockQuotaStatistics.');
            }

            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询封堵统计数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBlockStatistics(showBlockStatisticsRequest?: ShowBlockStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1/unblockservice/{domain_id}/block-statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;

            if (showBlockStatisticsRequest !== null && showBlockStatisticsRequest !== undefined) {
                if (showBlockStatisticsRequest instanceof ShowBlockStatisticsRequest) {
                    domainId = showBlockStatisticsRequest.domainId;
                } else {
                    domainId = showBlockStatisticsRequest['domain_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showBlockStatistics.');
            }

            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户解封记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUnblockRecord(showUnblockRecordRequest?: ShowUnblockRecordRequest) {
            const options = {
                method: "GET",
                url: "/v1/unblockservice/{domain_id}/unblock-record",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let startTime;
            
            let endTime;

            if (showUnblockRecordRequest !== null && showUnblockRecordRequest !== undefined) {
                if (showUnblockRecordRequest instanceof ShowUnblockRecordRequest) {
                    domainId = showUnblockRecordRequest.domainId;
                    startTime = showUnblockRecordRequest.startTime;
                    endTime = showUnblockRecordRequest.endTime;
                } else {
                    domainId = showUnblockRecordRequest['domain_id'];
                    startTime = showUnblockRecordRequest['start_time'];
                    endTime = showUnblockRecordRequest['end_time'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showUnblockRecord.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showUnblockRecord.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showUnblockRecord.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 高防实例添加黑白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addBlackWhiteIpList(addBlackWhiteIpListRequest?: AddBlackWhiteIpListRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/aad/external/bwlist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addBlackWhiteIpListRequest !== null && addBlackWhiteIpListRequest !== undefined) {
                if (addBlackWhiteIpListRequest instanceof AddBlackWhiteIpListRequest) {
                    body = addBlackWhiteIpListRequest.body
                } else {
                    body = addBlackWhiteIpListRequest['body'];
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
         * 策略添加黑白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addPolicyBlackAndWhiteIpList(addPolicyBlackAndWhiteIpListRequest?: AddPolicyBlackAndWhiteIpListRequest) {
            const options = {
                method: "POST",
                url: "/v1/cnad/policies/{policy_id}/ip-list/add",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (addPolicyBlackAndWhiteIpListRequest !== null && addPolicyBlackAndWhiteIpListRequest !== undefined) {
                if (addPolicyBlackAndWhiteIpListRequest instanceof AddPolicyBlackAndWhiteIpListRequest) {
                    policyId = addPolicyBlackAndWhiteIpListRequest.policyId;
                    body = addPolicyBlackAndWhiteIpListRequest.body
                } else {
                    policyId = addPolicyBlackAndWhiteIpListRequest['policy_id'];
                    body = addPolicyBlackAndWhiteIpListRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling addPolicyBlackAndWhiteIpList.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 策略绑定防护对象
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateIpToPolicy(associateIpToPolicyRequest?: AssociateIpToPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1/cnad/policies/{policy_id}/bind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (associateIpToPolicyRequest !== null && associateIpToPolicyRequest !== undefined) {
                if (associateIpToPolicyRequest instanceof AssociateIpToPolicyRequest) {
                    policyId = associateIpToPolicyRequest.policyId;
                    body = associateIpToPolicyRequest.body
                } else {
                    policyId = associateIpToPolicyRequest['policy_id'];
                    body = associateIpToPolicyRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling associateIpToPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 策略和实例绑定防护对象
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateIpToPolicyAndPackage(associateIpToPolicyAndPackageRequest?: AssociateIpToPolicyAndPackageRequest) {
            const options = {
                method: "POST",
                url: "/v3/cnad/policies/{policy_id}/bind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (associateIpToPolicyAndPackageRequest !== null && associateIpToPolicyAndPackageRequest !== undefined) {
                if (associateIpToPolicyAndPackageRequest instanceof AssociateIpToPolicyAndPackageRequest) {
                    policyId = associateIpToPolicyAndPackageRequest.policyId;
                    body = associateIpToPolicyAndPackageRequest.body
                } else {
                    policyId = associateIpToPolicyAndPackageRequest['policy_id'];
                    body = associateIpToPolicyAndPackageRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling associateIpToPolicyAndPackage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建高防实例IP的转发规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateInstanceIpRule(batchCreateInstanceIpRuleRequest?: BatchCreateInstanceIpRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/aad/instances/{instance_id}/{ip}/rules/batch-create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let ip;

            if (batchCreateInstanceIpRuleRequest !== null && batchCreateInstanceIpRuleRequest !== undefined) {
                if (batchCreateInstanceIpRuleRequest instanceof BatchCreateInstanceIpRuleRequest) {
                    instanceId = batchCreateInstanceIpRuleRequest.instanceId;
                    ip = batchCreateInstanceIpRuleRequest.ip;
                    body = batchCreateInstanceIpRuleRequest.body
                } else {
                    instanceId = batchCreateInstanceIpRuleRequest['instance_id'];
                    ip = batchCreateInstanceIpRuleRequest['ip'];
                    body = batchCreateInstanceIpRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchCreateInstanceIpRule.');
            }
            if (ip === null || ip === undefined) {
            throw new RequiredError('ip','Required parameter ip was null or undefined when calling batchCreateInstanceIpRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'ip': ip, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除高防实例IP的转发规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteInstanceIpRule(batchDeleteInstanceIpRuleRequest?: BatchDeleteInstanceIpRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/aad/instances/{instance_id}/{ip}/rules/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let ip;

            if (batchDeleteInstanceIpRuleRequest !== null && batchDeleteInstanceIpRuleRequest !== undefined) {
                if (batchDeleteInstanceIpRuleRequest instanceof BatchDeleteInstanceIpRuleRequest) {
                    instanceId = batchDeleteInstanceIpRuleRequest.instanceId;
                    ip = batchDeleteInstanceIpRuleRequest.ip;
                    body = batchDeleteInstanceIpRuleRequest.body
                } else {
                    instanceId = batchDeleteInstanceIpRuleRequest['instance_id'];
                    ip = batchDeleteInstanceIpRuleRequest['ip'];
                    body = batchDeleteInstanceIpRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteInstanceIpRule.');
            }
            if (ip === null || ip === undefined) {
            throw new RequiredError('ip','Required parameter ip was null or undefined when calling batchDeleteInstanceIpRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'ip': ip, };
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
                url: "/v1/{project_id}/aad/external/domains",
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
         * 创建策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPolicy(createPolicyRequest?: CreatePolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1/cnad/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPolicyRequest !== null && createPolicyRequest !== undefined) {
                if (createPolicyRequest instanceof CreatePolicyRequest) {
                    body = createPolicyRequest.body
                } else {
                    body = createPolicyRequest['body'];
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
         * 删除告警配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAlarmConfig() {
            const options = {
                method: "DELETE",
                url: "/v1/cnad/alarm-config",
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
         * 高防实例删除黑白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBlackWhiteIpList(deleteBlackWhiteIpListRequest?: DeleteBlackWhiteIpListRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/aad/external/bwlist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteBlackWhiteIpListRequest !== null && deleteBlackWhiteIpListRequest !== undefined) {
                if (deleteBlackWhiteIpListRequest instanceof DeleteBlackWhiteIpListRequest) {
                    body = deleteBlackWhiteIpListRequest.body
                } else {
                    body = deleteBlackWhiteIpListRequest['body'];
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
         * 删除策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePolicy(deletePolicyRequest?: DeletePolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/cnad/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;

            if (deletePolicyRequest !== null && deletePolicyRequest !== undefined) {
                if (deletePolicyRequest instanceof DeletePolicyRequest) {
                    policyId = deletePolicyRequest.policyId;
                } else {
                    policyId = deletePolicyRequest['policy_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deletePolicy.');
            }

            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 策略删除黑白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePolicyBlackAndWhiteIpList(deletePolicyBlackAndWhiteIpListRequest?: DeletePolicyBlackAndWhiteIpListRequest) {
            const options = {
                method: "POST",
                url: "/v1/cnad/policies/{policy_id}/ip-list/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (deletePolicyBlackAndWhiteIpListRequest !== null && deletePolicyBlackAndWhiteIpListRequest !== undefined) {
                if (deletePolicyBlackAndWhiteIpListRequest instanceof DeletePolicyBlackAndWhiteIpListRequest) {
                    policyId = deletePolicyBlackAndWhiteIpListRequest.policyId;
                    body = deletePolicyBlackAndWhiteIpListRequest.body
                } else {
                    policyId = deletePolicyBlackAndWhiteIpListRequest['policy_id'];
                    body = deletePolicyBlackAndWhiteIpListRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deletePolicyBlackAndWhiteIpList.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 策略解绑防护对象
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateIpFromPolicy(disassociateIpFromPolicyRequest?: DisassociateIpFromPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1/cnad/policies/{policy_id}/unbind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (disassociateIpFromPolicyRequest !== null && disassociateIpFromPolicyRequest !== undefined) {
                if (disassociateIpFromPolicyRequest instanceof DisassociateIpFromPolicyRequest) {
                    policyId = disassociateIpFromPolicyRequest.policyId;
                    body = disassociateIpFromPolicyRequest.body
                } else {
                    policyId = disassociateIpFromPolicyRequest['policy_id'];
                    body = disassociateIpFromPolicyRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling disassociateIpFromPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 策略和实例解绑防护对象
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateIpFromPolicyAndPackage(disassociateIpFromPolicyAndPackageRequest?: DisassociateIpFromPolicyAndPackageRequest) {
            const options = {
                method: "POST",
                url: "/v3/cnad/policies/{policy_id}/unbind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (disassociateIpFromPolicyAndPackageRequest !== null && disassociateIpFromPolicyAndPackageRequest !== undefined) {
                if (disassociateIpFromPolicyAndPackageRequest instanceof DisassociateIpFromPolicyAndPackageRequest) {
                    policyId = disassociateIpFromPolicyAndPackageRequest.policyId;
                    body = disassociateIpFromPolicyAndPackageRequest.body
                } else {
                    policyId = disassociateIpFromPolicyAndPackageRequest['policy_id'];
                    body = disassociateIpFromPolicyAndPackageRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling disassociateIpFromPolicyAndPackage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询域名列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomain(listDomainRequest?: ListDomainRequest) {
            const options = {
                method: "GET",
                url: "/v1/aad/protected-domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listDomainRequest !== null && listDomainRequest !== undefined) {
                if (listDomainRequest instanceof ListDomainRequest) {
                    limit = listDomainRequest.limit;
                    offset = listDomainRequest.offset;
                } else {
                    limit = listDomainRequest['limit'];
                    offset = listDomainRequest['offset'];
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
         * 查询高防实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstance() {
            const options = {
                method: "GET",
                url: "/v1/aad/instances",
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
         * 查询域名关联的实例ID
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceId(listInstanceIdRequest?: ListInstanceIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/aad/protected-domains/{domain_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;

            if (listInstanceIdRequest !== null && listInstanceIdRequest !== undefined) {
                if (listInstanceIdRequest instanceof ListInstanceIdRequest) {
                    domainId = listInstanceIdRequest.domainId;
                } else {
                    domainId = listInstanceIdRequest['domain_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listInstanceId.');
            }

            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询高防实例IP的转发规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceIpRule(listInstanceIpRuleRequest?: ListInstanceIpRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/aad/instances/{instance_id}/{ip}/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let ip;
            
            let limit;
            
            let offset;

            if (listInstanceIpRuleRequest !== null && listInstanceIpRuleRequest !== undefined) {
                if (listInstanceIpRuleRequest instanceof ListInstanceIpRuleRequest) {
                    instanceId = listInstanceIpRuleRequest.instanceId;
                    ip = listInstanceIpRuleRequest.ip;
                    limit = listInstanceIpRuleRequest.limit;
                    offset = listInstanceIpRuleRequest.offset;
                } else {
                    instanceId = listInstanceIpRuleRequest['instance_id'];
                    ip = listInstanceIpRuleRequest['ip'];
                    limit = listInstanceIpRuleRequest['limit'];
                    offset = listInstanceIpRuleRequest['offset'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceIpRule.');
            }
            if (ip === null || ip === undefined) {
            throw new RequiredError('ip','Required parameter ip was null or undefined when calling listInstanceIpRule.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'ip': ip, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPackage() {
            const options = {
                method: "GET",
                url: "/v1/cnad/packages",
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
         * 查询流量峰值、攻击计数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPeak(listPeakRequest?: ListPeakRequest) {
            const options = {
                method: "GET",
                url: "/v1/aad/instances/{instance_id}/{ip}/ddos-statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let ip;
            
            let startTime;
            
            let endTime;

            if (listPeakRequest !== null && listPeakRequest !== undefined) {
                if (listPeakRequest instanceof ListPeakRequest) {
                    instanceId = listPeakRequest.instanceId;
                    ip = listPeakRequest.ip;
                    startTime = listPeakRequest.startTime;
                    endTime = listPeakRequest.endTime;
                } else {
                    instanceId = listPeakRequest['instance_id'];
                    ip = listPeakRequest['ip'];
                    startTime = listPeakRequest['start_time'];
                    endTime = listPeakRequest['end_time'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPeak.');
            }
            if (ip === null || ip === undefined) {
            throw new RequiredError('ip','Required parameter ip was null or undefined when calling listPeak.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listPeak.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listPeak.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'ip': ip, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicy(listPolicyRequest?: ListPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v1/cnad/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let policyName;

            if (listPolicyRequest !== null && listPolicyRequest !== undefined) {
                if (listPolicyRequest instanceof ListPolicyRequest) {
                    offset = listPolicyRequest.offset;
                    limit = listPolicyRequest.limit;
                    policyName = listPolicyRequest.policyName;
                } else {
                    offset = listPolicyRequest['offset'];
                    limit = listPolicyRequest['limit'];
                    policyName = listPolicyRequest['policy_name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (policyName !== null && policyName !== undefined) {
                localVarQueryParameter['policy_name'] = policyName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询防护对象列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProtectedIp(listProtectedIpRequest?: ListProtectedIpRequest) {
            const options = {
                method: "GET",
                url: "/v1/cnad/protected-ips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let packageId;
            
            let policyId;
            
            let ip;
            
            let tag;

            if (listProtectedIpRequest !== null && listProtectedIpRequest !== undefined) {
                if (listProtectedIpRequest instanceof ListProtectedIpRequest) {
                    offset = listProtectedIpRequest.offset;
                    limit = listProtectedIpRequest.limit;
                    packageId = listProtectedIpRequest.packageId;
                    policyId = listProtectedIpRequest.policyId;
                    ip = listProtectedIpRequest.ip;
                    tag = listProtectedIpRequest.tag;
                } else {
                    offset = listProtectedIpRequest['offset'];
                    limit = listProtectedIpRequest['limit'];
                    packageId = listProtectedIpRequest['package_id'];
                    policyId = listProtectedIpRequest['policy_id'];
                    ip = listProtectedIpRequest['ip'];
                    tag = listProtectedIpRequest['tag'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (packageId !== null && packageId !== undefined) {
                localVarQueryParameter['package_id'] = packageId;
            }
            if (policyId !== null && policyId !== undefined) {
                localVarQueryParameter['policy_id'] = policyId;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询高防回源IP段列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSourceIps() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/aad/external/source-ip",
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
         * 查询可绑定的防护对象列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUnboundProtectedIp(listUnboundProtectedIpRequest?: ListUnboundProtectedIpRequest) {
            const options = {
                method: "GET",
                url: "/v1/cnad/packages/{package_id}/unbound-protected-ips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let packageId;
            
            let offset;
            
            let limit;

            if (listUnboundProtectedIpRequest !== null && listUnboundProtectedIpRequest !== undefined) {
                if (listUnboundProtectedIpRequest instanceof ListUnboundProtectedIpRequest) {
                    packageId = listUnboundProtectedIpRequest.packageId;
                    offset = listUnboundProtectedIpRequest.offset;
                    limit = listUnboundProtectedIpRequest.limit;
                } else {
                    packageId = listUnboundProtectedIpRequest['package_id'];
                    offset = listUnboundProtectedIpRequest['offset'];
                    limit = listUnboundProtectedIpRequest['limit'];
                }
            }

        
            if (packageId === null || packageId === undefined) {
            throw new RequiredError('packageId','Required parameter packageId was null or undefined when calling listUnboundProtectedIp.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'package_id': packageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改域名WEB基础防护开关/CC防护开关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyDomainWebSwitch(modifyDomainWebSwitchRequest?: ModifyDomainWebSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/aad/external/domains/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (modifyDomainWebSwitchRequest !== null && modifyDomainWebSwitchRequest !== undefined) {
                if (modifyDomainWebSwitchRequest instanceof ModifyDomainWebSwitchRequest) {
                    body = modifyDomainWebSwitchRequest.body
                } else {
                    body = modifyDomainWebSwitchRequest['body'];
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
         * 上传/修改域名对应证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setCertForDomain(setCertForDomainRequest?: SetCertForDomainRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/aad/external/domains/certificate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setCertForDomainRequest !== null && setCertForDomainRequest !== undefined) {
                if (setCertForDomainRequest instanceof SetCertForDomainRequest) {
                    body = setCertForDomainRequest.body
                } else {
                    body = setCertForDomainRequest['body'];
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
         * 查询告警配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAlarmConfig() {
            const options = {
                method: "GET",
                url: "/v1/cnad/alarm-config",
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
         * 查询日志配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLtsConfig(showLtsConfigRequest?: ShowLtsConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/cnad/config/lts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;

            if (showLtsConfigRequest !== null && showLtsConfigRequest !== undefined) {
                if (showLtsConfigRequest instanceof ShowLtsConfigRequest) {
                    enterpriseProjectId = showLtsConfigRequest.enterpriseProjectId;
                } else {
                    enterpriseProjectId = showLtsConfigRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询策略详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPolicy(showPolicyRequest?: ShowPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v1/cnad/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;

            if (showPolicyRequest !== null && showPolicyRequest !== undefined) {
                if (showPolicyRequest instanceof ShowPolicyRequest) {
                    policyId = showPolicyRequest.policyId;
                } else {
                    policyId = showPolicyRequest['policy_id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showPolicy.');
            }

            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置告警配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlarmConfig(updateAlarmConfigRequest?: UpdateAlarmConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/cnad/alarm-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateAlarmConfigRequest !== null && updateAlarmConfigRequest !== undefined) {
                if (updateAlarmConfigRequest instanceof UpdateAlarmConfigRequest) {
                    body = updateAlarmConfigRequest.body
                } else {
                    body = updateAlarmConfigRequest['body'];
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
         * 更新域名源站配置信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomain(updateDomainRequest?: UpdateDomainRequest) {
            const options = {
                method: "PUT",
                url: "/v1/aad/protected-domains/{domain_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (updateDomainRequest !== null && updateDomainRequest !== undefined) {
                if (updateDomainRequest instanceof UpdateDomainRequest) {
                    domainId = updateDomainRequest.domainId;
                    body = updateDomainRequest.body
                } else {
                    domainId = updateDomainRequest['domain_id'];
                    body = updateDomainRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateDomain.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改高防实例转发配置的源站IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceIpRule(updateInstanceIpRuleRequest?: UpdateInstanceIpRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/aad/instances/{instance_id}/{ip}/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let ip;
            
            let ruleId;

            if (updateInstanceIpRuleRequest !== null && updateInstanceIpRuleRequest !== undefined) {
                if (updateInstanceIpRuleRequest instanceof UpdateInstanceIpRuleRequest) {
                    instanceId = updateInstanceIpRuleRequest.instanceId;
                    ip = updateInstanceIpRuleRequest.ip;
                    ruleId = updateInstanceIpRuleRequest.ruleId;
                    body = updateInstanceIpRuleRequest.body
                } else {
                    instanceId = updateInstanceIpRuleRequest['instance_id'];
                    ip = updateInstanceIpRuleRequest['ip'];
                    ruleId = updateInstanceIpRuleRequest['rule_id'];
                    body = updateInstanceIpRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceIpRule.');
            }
            if (ip === null || ip === undefined) {
            throw new RequiredError('ip','Required parameter ip was null or undefined when calling updateInstanceIpRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateInstanceIpRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'ip': ip,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置日志配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLtsConfig(updateLtsConfigRequest?: UpdateLtsConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/cnad/config/lts",
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

            if (updateLtsConfigRequest !== null && updateLtsConfigRequest !== undefined) {
                if (updateLtsConfigRequest instanceof UpdateLtsConfigRequest) {
                    body = updateLtsConfigRequest.body
                    enterpriseProjectId = updateLtsConfigRequest.enterpriseProjectId;
                } else {
                    body = updateLtsConfigRequest['body'];
                    enterpriseProjectId = updateLtsConfigRequest['enterprise_project_id'];
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
         * 更新实例绑定的全量防护对象
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePackageIp(updatePackageIpRequest?: UpdatePackageIpRequest) {
            const options = {
                method: "POST",
                url: "/v1/cnad/packages/{package_id}/protected-ips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let packageId;

            if (updatePackageIpRequest !== null && updatePackageIpRequest !== undefined) {
                if (updatePackageIpRequest instanceof UpdatePackageIpRequest) {
                    packageId = updatePackageIpRequest.packageId;
                    body = updatePackageIpRequest.body
                } else {
                    packageId = updatePackageIpRequest['package_id'];
                    body = updatePackageIpRequest['body'];
                }
            }

        
            if (packageId === null || packageId === undefined) {
            throw new RequiredError('packageId','Required parameter packageId was null or undefined when calling updatePackageIp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'package_id': packageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新实例名字
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePackageName(updatePackageNameRequest?: UpdatePackageNameRequest) {
            const options = {
                method: "PUT",
                url: "/v1/cnad/packages/{package_id}/name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let packageId;

            if (updatePackageNameRequest !== null && updatePackageNameRequest !== undefined) {
                if (updatePackageNameRequest instanceof UpdatePackageNameRequest) {
                    packageId = updatePackageNameRequest.packageId;
                    body = updatePackageNameRequest.body
                } else {
                    packageId = updatePackageNameRequest['package_id'];
                    body = updatePackageNameRequest['body'];
                }
            }

        
            if (packageId === null || packageId === undefined) {
            throw new RequiredError('packageId','Required parameter packageId was null or undefined when calling updatePackageName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'package_id': packageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePolicy(updatePolicyRequest?: UpdatePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v1/cnad/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;

            if (updatePolicyRequest !== null && updatePolicyRequest !== undefined) {
                if (updatePolicyRequest instanceof UpdatePolicyRequest) {
                    policyId = updatePolicyRequest.policyId;
                    body = updatePolicyRequest.body
                } else {
                    policyId = updatePolicyRequest['policy_id'];
                    body = updatePolicyRequest['body'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updatePolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 防护对象设置标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTagForProtectedIp(updateTagForProtectedIpRequest?: UpdateTagForProtectedIpRequest) {
            const options = {
                method: "PUT",
                url: "/v1/cnad/protected-ips/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateTagForProtectedIpRequest !== null && updateTagForProtectedIpRequest !== undefined) {
                if (updateTagForProtectedIpRequest instanceof UpdateTagForProtectedIpRequest) {
                    body = updateTagForProtectedIpRequest.body
                } else {
                    body = updateTagForProtectedIpRequest['body'];
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