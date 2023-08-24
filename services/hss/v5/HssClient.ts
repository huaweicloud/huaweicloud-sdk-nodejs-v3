import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddHostsGroupRequest } from './model/AddHostsGroupRequest';
import { AddHostsGroupRequestInfo } from './model/AddHostsGroupRequestInfo';
import { AddHostsGroupResponse } from './model/AddHostsGroupResponse';
import { AgentId } from './model/AgentId';
import { AlarmWhiteListResponseInfo } from './model/AlarmWhiteListResponseInfo';
import { AppChangeResponseInfo } from './model/AppChangeResponseInfo';
import { AppResponseInfo } from './model/AppResponseInfo';
import { AppStatisticResponseInfo } from './model/AppStatisticResponseInfo';
import { AssociatePolicyGroupRequest } from './model/AssociatePolicyGroupRequest';
import { AssociatePolicyGroupRequestInfo } from './model/AssociatePolicyGroupRequestInfo';
import { AssociatePolicyGroupResponse } from './model/AssociatePolicyGroupResponse';
import { AttackPhase } from './model/AttackPhase';
import { AttackTag } from './model/AttackTag';
import { AutoLauchResponseInfo } from './model/AutoLauchResponseInfo';
import { AutoLaunchChangeResponseInfo } from './model/AutoLaunchChangeResponseInfo';
import { AutoLaunchStatisticsResponseInfo } from './model/AutoLaunchStatisticsResponseInfo';
import { AvailableResourceIdsInfo } from './model/AvailableResourceIdsInfo';
import { BackupResources } from './model/BackupResources';
import { BackupTriggerInfo } from './model/BackupTriggerInfo';
import { BackupTriggerPropertiesInfo } from './model/BackupTriggerPropertiesInfo';
import { BackupTriggerPropertiesRequestInfo } from './model/BackupTriggerPropertiesRequestInfo';
import { BackupTriggerPropertiesRequestInfo1 } from './model/BackupTriggerPropertiesRequestInfo1';
import { BackupTriggerRequestInfo } from './model/BackupTriggerRequestInfo';
import { BackupTriggerRequestInfo1 } from './model/BackupTriggerRequestInfo1';
import { BatchCreateTagsRequest } from './model/BatchCreateTagsRequest';
import { BatchCreateTagsRequestInfo } from './model/BatchCreateTagsRequestInfo';
import { BatchCreateTagsResponse } from './model/BatchCreateTagsResponse';
import { ChangeEventRequest } from './model/ChangeEventRequest';
import { ChangeEventRequestInfo } from './model/ChangeEventRequestInfo';
import { ChangeEventResponse } from './model/ChangeEventResponse';
import { ChangeHostsGroupRequest } from './model/ChangeHostsGroupRequest';
import { ChangeHostsGroupRequestInfo } from './model/ChangeHostsGroupRequestInfo';
import { ChangeHostsGroupResponse } from './model/ChangeHostsGroupResponse';
import { ChangeVulStatusRequest } from './model/ChangeVulStatusRequest';
import { ChangeVulStatusRequestInfo } from './model/ChangeVulStatusRequestInfo';
import { ChangeVulStatusResponse } from './model/ChangeVulStatusResponse';
import { CheckRuleCheckCaseResponseInfo } from './model/CheckRuleCheckCaseResponseInfo';
import { CheckRuleFixParamInfo } from './model/CheckRuleFixParamInfo';
import { CheckRuleRiskInfoResponseInfo } from './model/CheckRuleRiskInfoResponseInfo';
import { CloseProtectionInfoRequestInfo } from './model/CloseProtectionInfoRequestInfo';
import { ContainerName } from './model/ContainerName';
import { DefaultGroup } from './model/DefaultGroup';
import { Deletable } from './model/Deletable';
import { DeleteHostsGroupRequest } from './model/DeleteHostsGroupRequest';
import { DeleteHostsGroupResponse } from './model/DeleteHostsGroupResponse';
import { DeleteResourceInstanceTagRequest } from './model/DeleteResourceInstanceTagRequest';
import { DeleteResourceInstanceTagResponse } from './model/DeleteResourceInstanceTagResponse';
import { Description } from './model/Description';
import { EnterpriseProjectName } from './model/EnterpriseProjectName';
import { EventClassId } from './model/EventClassId';
import { EventDetailRequestInfo } from './model/EventDetailRequestInfo';
import { EventDetailResponseInfo } from './model/EventDetailResponseInfo';
import { EventFileResponseInfo } from './model/EventFileResponseInfo';
import { EventId } from './model/EventId';
import { EventManagementResponseInfo } from './model/EventManagementResponseInfo';
import { EventName } from './model/EventName';
import { EventProcessResponseInfo } from './model/EventProcessResponseInfo';
import { EventResourceResponseInfo } from './model/EventResourceResponseInfo';
import { EventType } from './model/EventType';
import { EventUserResponseInfo } from './model/EventUserResponseInfo';
import { FileAttr } from './model/FileAttr';
import { FileHash } from './model/FileHash';
import { FilePath } from './model/FilePath';
import { GroupId } from './model/GroupId';
import { GroupName } from './model/GroupName';
import { HandleMethod } from './model/HandleMethod';
import { HandleStatus } from './model/HandleStatus';
import { HandleTime } from './model/HandleTime';
import { Handler } from './model/Handler';
import { Hash } from './model/Hash';
import { Host } from './model/Host';
import { HostGroupItem } from './model/HostGroupItem';
import { HostId } from './model/HostId';
import { HostName } from './model/HostName';
import { HostNum } from './model/HostNum';
import { HostProtectHistoryResponseInfo } from './model/HostProtectHistoryResponseInfo';
import { HostRaspProtectHistoryResponseInfo } from './model/HostRaspProtectHistoryResponseInfo';
import { HostVulInfo } from './model/HostVulInfo';
import { HostVulInfoAppList } from './model/HostVulInfoAppList';
import { HostVulInfoCveList } from './model/HostVulInfoCveList';
import { HostVulOperateInfo } from './model/HostVulOperateInfo';
import { ImageName } from './model/ImageName';
import { IsParent } from './model/IsParent';
import { JarPackageHostInfo } from './model/JarPackageHostInfo';
import { JarPackageStatisticsResponseInfo } from './model/JarPackageStatisticsResponseInfo';
import { ListAlarmWhiteListRequest } from './model/ListAlarmWhiteListRequest';
import { ListAlarmWhiteListResponse } from './model/ListAlarmWhiteListResponse';
import { ListAppChangeHistoriesRequest } from './model/ListAppChangeHistoriesRequest';
import { ListAppChangeHistoriesResponse } from './model/ListAppChangeHistoriesResponse';
import { ListAppStatisticsRequest } from './model/ListAppStatisticsRequest';
import { ListAppStatisticsResponse } from './model/ListAppStatisticsResponse';
import { ListAppsRequest } from './model/ListAppsRequest';
import { ListAppsResponse } from './model/ListAppsResponse';
import { ListAutoLaunchChangeHistoriesRequest } from './model/ListAutoLaunchChangeHistoriesRequest';
import { ListAutoLaunchChangeHistoriesResponse } from './model/ListAutoLaunchChangeHistoriesResponse';
import { ListAutoLaunchStatisticsRequest } from './model/ListAutoLaunchStatisticsRequest';
import { ListAutoLaunchStatisticsResponse } from './model/ListAutoLaunchStatisticsResponse';
import { ListAutoLaunchsRequest } from './model/ListAutoLaunchsRequest';
import { ListAutoLaunchsResponse } from './model/ListAutoLaunchsResponse';
import { ListHostGroupsRequest } from './model/ListHostGroupsRequest';
import { ListHostGroupsResponse } from './model/ListHostGroupsResponse';
import { ListHostProtectHistoryInfoRequest } from './model/ListHostProtectHistoryInfoRequest';
import { ListHostProtectHistoryInfoResponse } from './model/ListHostProtectHistoryInfoResponse';
import { ListHostRaspProtectHistoryInfoRequest } from './model/ListHostRaspProtectHistoryInfoRequest';
import { ListHostRaspProtectHistoryInfoResponse } from './model/ListHostRaspProtectHistoryInfoResponse';
import { ListHostStatusRequest } from './model/ListHostStatusRequest';
import { ListHostStatusResponse } from './model/ListHostStatusResponse';
import { ListHostVulsRequest } from './model/ListHostVulsRequest';
import { ListHostVulsResponse } from './model/ListHostVulsResponse';
import { ListJarPackageHostInfoRequest } from './model/ListJarPackageHostInfoRequest';
import { ListJarPackageHostInfoResponse } from './model/ListJarPackageHostInfoResponse';
import { ListJarPackageStatisticsRequest } from './model/ListJarPackageStatisticsRequest';
import { ListJarPackageStatisticsResponse } from './model/ListJarPackageStatisticsResponse';
import { ListPasswordComplexityRequest } from './model/ListPasswordComplexityRequest';
import { ListPasswordComplexityResponse } from './model/ListPasswordComplexityResponse';
import { ListPolicyGroupRequest } from './model/ListPolicyGroupRequest';
import { ListPolicyGroupResponse } from './model/ListPolicyGroupResponse';
import { ListPortStatisticsRequest } from './model/ListPortStatisticsRequest';
import { ListPortStatisticsResponse } from './model/ListPortStatisticsResponse';
import { ListPortsRequest } from './model/ListPortsRequest';
import { ListPortsResponse } from './model/ListPortsResponse';
import { ListProcessStatisticsRequest } from './model/ListProcessStatisticsRequest';
import { ListProcessStatisticsResponse } from './model/ListProcessStatisticsResponse';
import { ListProtectionPolicyRequest } from './model/ListProtectionPolicyRequest';
import { ListProtectionPolicyResponse } from './model/ListProtectionPolicyResponse';
import { ListProtectionServerRequest } from './model/ListProtectionServerRequest';
import { ListProtectionServerResponse } from './model/ListProtectionServerResponse';
import { ListQuotasDetailRequest } from './model/ListQuotasDetailRequest';
import { ListQuotasDetailResponse } from './model/ListQuotasDetailResponse';
import { ListRiskConfigCheckRulesRequest } from './model/ListRiskConfigCheckRulesRequest';
import { ListRiskConfigCheckRulesResponse } from './model/ListRiskConfigCheckRulesResponse';
import { ListRiskConfigHostsRequest } from './model/ListRiskConfigHostsRequest';
import { ListRiskConfigHostsResponse } from './model/ListRiskConfigHostsResponse';
import { ListRiskConfigsRequest } from './model/ListRiskConfigsRequest';
import { ListRiskConfigsResponse } from './model/ListRiskConfigsResponse';
import { ListSecurityEventsRequest } from './model/ListSecurityEventsRequest';
import { ListSecurityEventsResponse } from './model/ListSecurityEventsResponse';
import { ListUserChangeHistoriesRequest } from './model/ListUserChangeHistoriesRequest';
import { ListUserChangeHistoriesResponse } from './model/ListUserChangeHistoriesResponse';
import { ListUserStatisticsRequest } from './model/ListUserStatisticsRequest';
import { ListUserStatisticsResponse } from './model/ListUserStatisticsResponse';
import { ListUsersRequest } from './model/ListUsersRequest';
import { ListUsersResponse } from './model/ListUsersResponse';
import { ListVulHostsRequest } from './model/ListVulHostsRequest';
import { ListVulHostsResponse } from './model/ListVulHostsResponse';
import { ListVulnerabilitiesRequest } from './model/ListVulnerabilitiesRequest';
import { ListVulnerabilitiesResponse } from './model/ListVulnerabilitiesResponse';
import { ListWeakPasswordUsersRequest } from './model/ListWeakPasswordUsersRequest';
import { ListWeakPasswordUsersResponse } from './model/ListWeakPasswordUsersResponse';
import { ListWtpProtectHostRequest } from './model/ListWtpProtectHostRequest';
import { ListWtpProtectHostResponse } from './model/ListWtpProtectHostResponse';
import { LoginIp } from './model/LoginIp';
import { LoginUserName } from './model/LoginUserName';
import { OccurTime } from './model/OccurTime';
import { OperateEventRequestInfo } from './model/OperateEventRequestInfo';
import { OperateType } from './model/OperateType';
import { OperationDefinitionInfo } from './model/OperationDefinitionInfo';
import { OperationDefinitionRequestInfo } from './model/OperationDefinitionRequestInfo';
import { OsType } from './model/OsType';
import { PolicyGroupId } from './model/PolicyGroupId';
import { PolicyGroupName } from './model/PolicyGroupName';
import { PolicyGroupResponseInfo } from './model/PolicyGroupResponseInfo';
import { PortResponseInfo } from './model/PortResponseInfo';
import { PortStatisticResponseInfo } from './model/PortStatisticResponseInfo';
import { PrivateIp } from './model/PrivateIp';
import { ProcessPid } from './model/ProcessPid';
import { ProcessStatisticResponseInfo } from './model/ProcessStatisticResponseInfo';
import { ProtectionInfoRequestInfo } from './model/ProtectionInfoRequestInfo';
import { ProtectionPolicyInfo } from './model/ProtectionPolicyInfo';
import { ProtectionProxyInfoRequestInfo } from './model/ProtectionProxyInfoRequestInfo';
import { ProtectionServerInfo } from './model/ProtectionServerInfo';
import { ProtectionServerInfoBackupError } from './model/ProtectionServerInfoBackupError';
import { PublicIp } from './model/PublicIp';
import { PwdPolicyInfoResponseInfo } from './model/PwdPolicyInfoResponseInfo';
import { QuotaResourcesResponseInfo } from './model/QuotaResourcesResponseInfo';
import { QuotaStatisticsResponseInfo } from './model/QuotaStatisticsResponseInfo';
import { ResourceInfo } from './model/ResourceInfo';
import { ResourceQuotasInfo } from './model/ResourceQuotasInfo';
import { ResourceTagInfo } from './model/ResourceTagInfo';
import { RiskHostNum } from './model/RiskHostNum';
import { SecurityCheckHostInfoResponseInfo } from './model/SecurityCheckHostInfoResponseInfo';
import { SecurityCheckInfoResponseInfo } from './model/SecurityCheckInfoResponseInfo';
import { SetRaspSwitchRequest } from './model/SetRaspSwitchRequest';
import { SetRaspSwitchRequestInfo } from './model/SetRaspSwitchRequestInfo';
import { SetRaspSwitchResponse } from './model/SetRaspSwitchResponse';
import { SetWtpProtectionStatusInfoRequest } from './model/SetWtpProtectionStatusInfoRequest';
import { SetWtpProtectionStatusInfoResponse } from './model/SetWtpProtectionStatusInfoResponse';
import { SetWtpProtectionStatusRequestInfo } from './model/SetWtpProtectionStatusRequestInfo';
import { Severity } from './model/Severity';
import { ShowAssetStatisticRequest } from './model/ShowAssetStatisticRequest';
import { ShowAssetStatisticResponse } from './model/ShowAssetStatisticResponse';
import { ShowBackupPolicyInfoRequest } from './model/ShowBackupPolicyInfoRequest';
import { ShowBackupPolicyInfoResponse } from './model/ShowBackupPolicyInfoResponse';
import { ShowCheckRuleDetailRequest } from './model/ShowCheckRuleDetailRequest';
import { ShowCheckRuleDetailResponse } from './model/ShowCheckRuleDetailResponse';
import { ShowResourceQuotasRequest } from './model/ShowResourceQuotasRequest';
import { ShowResourceQuotasResponse } from './model/ShowResourceQuotasResponse';
import { ShowRiskConfigDetailRequest } from './model/ShowRiskConfigDetailRequest';
import { ShowRiskConfigDetailResponse } from './model/ShowRiskConfigDetailResponse';
import { StartProtectionRequest } from './model/StartProtectionRequest';
import { StartProtectionResponse } from './model/StartProtectionResponse';
import { StopProtectionRequest } from './model/StopProtectionRequest';
import { StopProtectionResponse } from './model/StopProtectionResponse';
import { SupportOs } from './model/SupportOs';
import { SupportVersion } from './model/SupportVersion';
import { SwitchHostsProtectStatusRequest } from './model/SwitchHostsProtectStatusRequest';
import { SwitchHostsProtectStatusRequestInfo } from './model/SwitchHostsProtectStatusRequestInfo';
import { SwitchHostsProtectStatusResponse } from './model/SwitchHostsProtectStatusResponse';
import { TagInfo } from './model/TagInfo';
import { TotalNum } from './model/TotalNum';
import { TrustProcessInfo } from './model/TrustProcessInfo';
import { UnprotectHostNum } from './model/UnprotectHostNum';
import { UpdateBackupPolicyInfoRequest } from './model/UpdateBackupPolicyInfoRequest';
import { UpdateBackupPolicyInfoResponse } from './model/UpdateBackupPolicyInfoResponse';
import { UpdateBackupPolicyRequestInfo } from './model/UpdateBackupPolicyRequestInfo';
import { UpdateBackupPolicyRequestInfo1 } from './model/UpdateBackupPolicyRequestInfo1';
import { UpdateProtectionPolicyInfoRequestInfo } from './model/UpdateProtectionPolicyInfoRequestInfo';
import { UpdateProtectionPolicyRequest } from './model/UpdateProtectionPolicyRequest';
import { UpdateProtectionPolicyResponse } from './model/UpdateProtectionPolicyResponse';
import { UpdateTime } from './model/UpdateTime';
import { UserChangeHistoryResponseInfo } from './model/UserChangeHistoryResponseInfo';
import { UserResponseInfo } from './model/UserResponseInfo';
import { UserStatisticInfoResponseInfo } from './model/UserStatisticInfoResponseInfo';
import { VulHostInfo } from './model/VulHostInfo';
import { VulInfo } from './model/VulInfo';
import { VulInfoCveList } from './model/VulInfoCveList';
import { VulOperateInfo } from './model/VulOperateInfo';
import { VulnerabilityHostNumberInfo } from './model/VulnerabilityHostNumberInfo';
import { WeakPwdAccountInfoResponseInfo } from './model/WeakPwdAccountInfoResponseInfo';
import { WeakPwdListInfoResponseInfo } from './model/WeakPwdListInfoResponseInfo';
import { WtpProtectHostResponseInfo } from './model/WtpProtectHostResponseInfo';

export class HssClient {
    public static newBuilder(): ClientBuilder<HssClient> {
            return new ClientBuilder<HssClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 创建服务器组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建服务器组
     * @param {string} region region id
     * @param {AddHostsGroupRequestInfo} addHostsGroupRequestBody 创建服务器组的请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addHostsGroup(addHostsGroupRequest?: AddHostsGroupRequest): Promise<AddHostsGroupResponse> {
        const options = ParamCreater().addHostsGroup(addHostsGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 部署策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 部署策略
     * @param {string} region region id
     * @param {AssociatePolicyGroupRequestInfo} associatePolicyGroupRequestBody request
     * @param {string} [enterpriseProjectId] 租户企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associatePolicyGroup(associatePolicyGroupRequest?: AssociatePolicyGroupRequest): Promise<AssociatePolicyGroupResponse> {
        const options = ParamCreater().associatePolicyGroup(associatePolicyGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建标签
     * @param {string} resourceType 资源类别，hss
     * @param {string} resourceId 资源ID
     * @param {BatchCreateTagsRequestInfo} batchCreateTagsRequestBody 批量创建标签的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateTags(batchCreateTagsRequest?: BatchCreateTagsRequest): Promise<BatchCreateTagsResponse> {
        const options = ParamCreater().batchCreateTags(batchCreateTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 处理告警事件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 处理告警事件
     * @param {string} region region id
     * @param {ChangeEventRequestInfo} changeEventRequestBody 处理告警事件列表
     * @param {string} [enterpriseProjectId] 租户企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [containerName] 容器实例名称
     * @param {string} [containerId] 容器Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeEvent(changeEventRequest?: ChangeEventRequest): Promise<ChangeEventResponse> {
        const options = ParamCreater().changeEvent(changeEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑服务器组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑服务器组
     * @param {string} region region id
     * @param {ChangeHostsGroupRequestInfo} changeHostsGroupRequestBody request
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeHostsGroup(changeHostsGroupRequest?: ChangeHostsGroupRequest): Promise<ChangeHostsGroupResponse> {
        const options = ParamCreater().changeHostsGroup(changeHostsGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改漏洞的状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改漏洞的状态
     * @param {ChangeVulStatusRequestInfo} changeVulStatusRequestBody vul_operate请求体
     * @param {string} [enterpriseProjectId] 企业租户ID，查询所有企业项目时填写：all_granted_eps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeVulStatus(changeVulStatusRequest?: ChangeVulStatusRequest): Promise<ChangeVulStatusResponse> {
        const options = ParamCreater().changeVulStatus(changeVulStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除服务器组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务器组
     * @param {string} region region id
     * @param {string} groupId 服务器组ID
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHostsGroup(deleteHostsGroupRequest?: DeleteHostsGroupRequest): Promise<DeleteHostsGroupResponse> {
        const options = ParamCreater().deleteHostsGroup(deleteHostsGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除单个资源下的标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源标签
     * @param {string} resourceType 资源类别，hss
     * @param {string} resourceId 资源ID
     * @param {string} key 待删除的key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResourceInstanceTag(deleteResourceInstanceTagRequest?: DeleteResourceInstanceTagRequest): Promise<DeleteResourceInstanceTagResponse> {
        const options = ParamCreater().deleteResourceInstanceTag(deleteResourceInstanceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警白名单列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警白名单列表
     * @param {string} region region id
     * @param {string} [enterpriseProjectId] 租户企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [hash] SHA256
     * @param {number} [eventType] 事件类型，包含如下:   - 1001 : 通用恶意软件   - 1002 : 病毒   - 1003 : 蠕虫   - 1004 : 木马   - 1005 : 僵尸网络   - 1006 : 后门   - 1010 : Rootkit   - 1011 : 勒索软件   - 1012 ：黑客工具   - 1015 : Webshell   - 1016 : 挖矿   - 1017 : 反弹Shell   - 2001 : 一般漏洞利用   - 2012 : 远程代码执行   - 2047 : Redis漏洞利用   - 2048 : Hadoop漏洞利用   - 2049 : MySQL漏洞利用   - 3002 : 文件提权   - 3003 : 进程提权   - 3004 : 关键文件变更   - 3005 : 文件/目录变更   - 3007 : 进程异常行为   - 3015 : 高危命令执行   - 3018 : 异常Shell   - 3027 : Crontab可疑任务   - 3029 ：系统安全防护被禁用   - 3030 ：备份删除   - 3031 ：异常注册表操作   - 3036 : 容器镜像阻断   - 4002 : 暴力破解   - 4004 : 异常登录   - 4006 : 非法系统账号   - 4014 : 用户账号添加   - 4020 : 用户密码窃取   - 6002 : 端口扫描   - 6003 : 主机扫描   - 13001 : Kubernetes事件删除   - 13002 : Pod异常行为   - 13003 : 枚举用户信息   - 13004 : 绑定集群用户角色
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {number} [limit] 每页显示个数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmWhiteList(listAlarmWhiteListRequest?: ListAlarmWhiteListRequest): Promise<ListAlarmWhiteListResponse> {
        const options = ParamCreater().listAlarmWhiteList(listAlarmWhiteListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取软件信息的历史变动记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取软件信息的历史变动记录
     * @param {string} [hostId] 主机id
     * @param {string} [hostIp] 主机ip
     * @param {string} [hostName] 主机名称
     * @param {string} [appName] 软件名称
     * @param {string} [variationType] 变更类型:   - add ：新建   - delete ：删除   - modify ：修改
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {string} [sortKey] 排序的key值
     * @param {string} [sortDir] 升序还是降序，默认升序，asc
     * @param {number} [limit] 默认10
     * @param {number} [offset] 默认是0
     * @param {number} [startTime] 变更开始时间，13位时间戳
     * @param {number} [endTime] 变更结束时间，13位时间戳
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppChangeHistories(listAppChangeHistoriesRequest?: ListAppChangeHistoriesRequest): Promise<ListAppChangeHistoriesResponse> {
        const options = ParamCreater().listAppChangeHistories(listAppChangeHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询软件列表，支持通过软件名称查询对应的服务器数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询软件列表
     * @param {string} [appName] 软件名称
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {number} [limit] 默认10
     * @param {number} [offset] 偏移量，为页数*每页显示条数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppStatistics(listAppStatisticsRequest?: ListAppStatisticsRequest): Promise<ListAppStatisticsResponse> {
        const options = ParamCreater().listAppStatistics(listAppStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询软件的服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询软件的服务器列表
     * @param {string} hostId 主机id
     * @param {string} [hostName] 主机名称
     * @param {string} [appName] 软件名称
     * @param {string} [hostIp] 主机ip
     * @param {string} [version] 版本号
     * @param {string} [installDir] 安装目录
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {number} [limit] 默认10
     * @param {number} [offset] 默认是0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApps(listAppsRequest?: ListAppsRequest): Promise<ListAppsResponse> {
        const options = ParamCreater().listApps(listAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取自启动项的历史变动记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取自启动项的历史变动记录
     * @param {string} [hostId] 主机id
     * @param {string} [hostIp] 主机ip
     * @param {string} [hostName] 主机名称
     * @param {string} [autoLaunchName] 自启动项名称
     * @param {number} [type] 自启动项类型   - 0 ：自启动服务   - 1 ：定时任务   - 2 ：预加载动态库   - 3 ：Run注册表键   - 4 ：开机启动文件夹
     * @param {string} [variationType] 变更类型:   - add ：新建   - delete ：删除   - modify ：修改
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {string} [sortKey] 排序的key值
     * @param {string} [sortDir] 升序还是降序，默认升序，asc
     * @param {number} [limit] 默认10
     * @param {number} [offset] 默认是0
     * @param {number} [startTime] 变更开始时间，13位时间戳
     * @param {number} [endTime] 变更结束时间，13位时间戳
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAutoLaunchChangeHistories(listAutoLaunchChangeHistoriesRequest?: ListAutoLaunchChangeHistoriesRequest): Promise<ListAutoLaunchChangeHistoriesResponse> {
        const options = ParamCreater().listAutoLaunchChangeHistories(listAutoLaunchChangeHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自启动信息，支持通过传入自启动名称查询启动类型和服务器数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自启动项信息
     * @param {string} [name] 自启动项名称
     * @param {string} [type] 自启动项类型
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {number} [limit] 默认10
     * @param {number} [offset] 默认是0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAutoLaunchStatistics(listAutoLaunchStatisticsRequest?: ListAutoLaunchStatisticsRequest): Promise<ListAutoLaunchStatisticsResponse> {
        const options = ParamCreater().listAutoLaunchStatistics(listAutoLaunchStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自启动项的服务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自启动项的服务列表
     * @param {string} [hostId] 主机id
     * @param {string} [hostName] 主机名称
     * @param {string} [name] 自启动项名称
     * @param {string} [hostIp] 主机ip
     * @param {string} [type] 自启动项类型
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {number} [limit] 默认10
     * @param {number} [offset] 默认是0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAutoLaunchs(listAutoLaunchsRequest?: ListAutoLaunchsRequest): Promise<ListAutoLaunchsResponse> {
        const options = ParamCreater().listAutoLaunchs(listAutoLaunchsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务器组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务器组列表
     * @param {string} region region id
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {number} [limit] 每页显示个数
     * @param {string} [groupName] 服务器组名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostGroups(listHostGroupsRequest?: ListHostGroupsRequest): Promise<ListHostGroupsResponse> {
        const options = ParamCreater().listHostGroups(listHostGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主机静态网页防篡改防护动态：展示服务器名称、服务器ip、防护策略、检测时间、防护文件、事件描述信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机静态网页防篡改防护动态
     * @param {string} region Region Id
     * @param {string} hostId Host Id
     * @param {number} startTime 起始时间
     * @param {number} endTime 终止时间
     * @param {number} limit limit
     * @param {number} offset offset
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostProtectHistoryInfo(listHostProtectHistoryInfoRequest?: ListHostProtectHistoryInfoRequest): Promise<ListHostProtectHistoryInfoResponse> {
        const options = ParamCreater().listHostProtectHistoryInfo(listHostProtectHistoryInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主机动态网页防篡改防护动态：包含告警级别、服务器ip、服务器名称、威胁类型、告警时间、攻击源ip、攻击源url信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机动态网页防篡改防护动态
     * @param {string} region Region Id
     * @param {string} hostId Host Id
     * @param {number} startTime 起始时间
     * @param {number} endTime 终止时间
     * @param {number} limit limit
     * @param {number} offset offset
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {number} [alarmLevel] 告警级别
     * @param {string} [severity] 威胁等级   - Security : 安全   - Low : 低危   - Medium : 中危   - High : 高危   - Critical : 危急
     * @param {string} [protectStatus] 防护状态   - closed : 未开启   - opened : 防护中
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostRaspProtectHistoryInfo(listHostRaspProtectHistoryInfoRequest?: ListHostRaspProtectHistoryInfoRequest): Promise<ListHostRaspProtectHistoryInfoResponse> {
        const options = ParamCreater().listHostRaspProtectHistoryInfo(listHostRaspProtectHistoryInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云服务器列表
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [version] 主机开通的版本，包含如下7种输入。   - hss.version.null ：无。   - hss.version.basic ：基础版。   - hss.version.advanced ：专业版。   - hss.version.enterprise ：企业版。   - hss.version.premium ：旗舰版。   - hss.version.wtp ：网页防篡改版。   - hss.version.container.enterprise：容器版。
     * @param {string} [agentStatus] Agent状态，包含如下6种。   - installed ：已安装。   - not_installed ：未安装。   - online ：在线。   - offline ：离线。   - install_failed ：安装失败。   - installing ：安装中。   - not_online ：不在线的（除了在线以外的所有状态，仅作为查询条件）。
     * @param {string} [detectResult] 检测结果，包含如下4种。   - undetected ：未检测。   - clean ：无风险。   - risk ：有风险。   - scanning ：检测中。
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostId] 服务器ID
     * @param {string} [hostStatus] 主机状态，包含如下4种。   - ACTIVE ：正在运行。   - SHUTOFF ：关机。   - BUILDING ：创建中。   - ERROR ：故障。
     * @param {string} [osType] 操作系统类型，包含如下2种。   - Linux ：Linux。   - Windows ：Windows。
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [publicIp] 服务器公网IP
     * @param {string} [ipAddr] 公网或私网IP
     * @param {string} [protectStatus] 防护状态，包含如下2种。   - closed ：关闭。   - opened ：开启。
     * @param {string} [groupId] 服务器组ID
     * @param {string} [groupName] 服务器组名称
     * @param {string} [region] region id
     * @param {string} [policyGroupId] 策略组ID
     * @param {string} [policyGroupName] 策略组名称
     * @param {string} [chargingMode] 收费模式，包含如下2种。   - packet_cycle ：包年/包月。   - on_demand ：按需。
     * @param {boolean} [refresh] 是否强制从ECS同步主机
     * @param {boolean} [aboveVersion] 是否返回比当前版本高的所有版本
     * @param {boolean} [outsideHost] 是否华为云主机
     * @param {string} [assetValue] 资产重要性，包含如下4种   - important ：重要资产   - common ：一般资产   - test ：测试资产
     * @param {string} [label] 资产标签
     * @param {string} [serverGroup] 资产服务器组
     * @param {number} [limit] 每页显示个数，默认10
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostStatus(listHostStatusRequest?: ListHostStatusRequest): Promise<ListHostStatusResponse> {
        const options = ParamCreater().listHostStatus(listHostStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单台服务器漏洞信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单台服务器漏洞信息
     * @param {string} hostId 服务器id
     * @param {string} [enterpriseProjectId] 企业租户ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [type] 漏洞类型，默认为linux_vul，包括如下：   - linux_vul : 漏洞类型-linux漏洞   - windows_vul : 漏洞类型-windows漏洞   - web_cms : Web-CMS漏洞   - app_vul : 应用漏洞
     * @param {string} [vulName] 漏洞名称
     * @param {number} [limit] 每页显示个数
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [handleStatus] 处置状态，包含如下:   - unhandled ：未处理   - handled : 已处理
     * @param {string} [status] 漏洞状态，包含如下：   - vul_status_unfix : 未处理   - vul_status_ignored : 已忽略   - vul_status_verified : 验证中   - vul_status_fixing : 修复中   - vul_status_fixed : 修复成功   - vul_status_reboot : 修复成功待重启   - vul_status_failed : 修复失败   - vul_status_fix_after_reboot : 请重启主机再次修复
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostVuls(listHostVulsRequest?: ListHostVulsRequest): Promise<ListHostVulsResponse> {
        const options = ParamCreater().listHostVuls(listHostVulsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定中间件的服务器列表，通过传入中间件名称参数，返回对应的中间件服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定中间件的服务器列表
     * @param {string} fileName 文件名称
     * @param {string} [enterpriseProjectId] 租户企业项目ID
     * @param {string} [category] 类别，包含如下:   - host : 主机   - container : 容器
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostIp] 服务器IP
     * @param {number} [limit] 默认10
     * @param {number} [offset] 默认是0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJarPackageHostInfo(listJarPackageHostInfoRequest?: ListJarPackageHostInfoRequest): Promise<ListJarPackageHostInfoResponse> {
        const options = ParamCreater().listJarPackageHostInfo(listJarPackageHostInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中间件列表，支持通过中间件名称查询对应的服务器树
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中间件列表
     * @param {string} [enterpriseProjectId] 租户企业项目ID
     * @param {string} [fileName] jar包名称
     * @param {string} [category] 类别，包含如下:   - host : 主机   - container : 容器
     * @param {number} [limit] 默认10
     * @param {number} [offset] 默认是0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJarPackageStatistics(listJarPackageStatisticsRequest?: ListJarPackageStatisticsRequest): Promise<ListJarPackageStatisticsResponse> {
        const options = ParamCreater().listJarPackageStatistics(listJarPackageStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询口令复杂度策略检测报告
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询口令复杂度策略检测报告
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostIp] 服务器IP地址
     * @param {string} [hostId] 服务器id，不赋值时，查租户所有主机
     * @param {number} [limit] 每页显示数量，默认10
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPasswordComplexity(listPasswordComplexityRequest?: ListPasswordComplexityRequest): Promise<ListPasswordComplexityResponse> {
        const options = ParamCreater().listPasswordComplexity(listPasswordComplexityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询策略组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略组列表
     * @param {string} region region id
     * @param {string} [enterpriseProjectId] 租户企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [groupName] 策略组名
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {number} [limit] 每页显示个数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyGroup(listPolicyGroupRequest?: ListPolicyGroupRequest): Promise<ListPolicyGroupResponse> {
        const options = ParamCreater().listPolicyGroup(listPolicyGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询开放端口列表，支持通过传入端口或协议类型查询服务器数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询开放端口列表
     * @param {number} [port] 端口号
     * @param {string} [type] 端口类型
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {number} [limit] 默认10
     * @param {number} [offset] 默认是0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPortStatistics(listPortStatisticsRequest?: ListPortStatisticsRequest): Promise<ListPortStatisticsResponse> {
        const options = ParamCreater().listPortStatistics(listPortStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单服务器的开放端口列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单服务器的开放端口列表
     * @param {string} hostId 主机id
     * @param {string} [hostName] 主机名称
     * @param {string} [hostIp] 主机ip
     * @param {number} [port] 端口号
     * @param {string} [type] 端口类型
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {number} [limit] 默认10
     * @param {number} [offset] 默认是0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPorts(listPortsRequest?: ListPortsRequest): Promise<ListPortsResponse> {
        const options = ParamCreater().listPorts(listPortsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询进程列表，通过传入进程路径参数查询对应的服务器数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询进程列表
     * @param {string} [path] 路径
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {number} [limit] 默认10
     * @param {number} [offset] 默认是0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProcessStatistics(listProcessStatisticsRequest?: ListProcessStatisticsRequest): Promise<ListProcessStatisticsResponse> {
        const options = ParamCreater().listProcessStatistics(listProcessStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防护策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护策略列表
     * @param {string} region region id
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {number} [limit] 每页显示个数
     * @param {string} [policyName] 防护策略名称
     * @param {string} [protectPolicyId] 防护策略id
     * @param {string} [operatingSystem] 策略支持的操作系统
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProtectionPolicy(listProtectionPolicyRequest?: ListProtectionPolicyRequest): Promise<ListProtectionPolicyResponse> {
        const options = ParamCreater().listProtectionPolicy(listProtectionPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询勒索防护服务器列表，与云备份服务配合使用。因此使用勒索相关接口之前确保该局点有云备份服务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询勒索防护服务器列表
     * @param {string} region region id
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {number} [limit] 每页显示个数
     * @param {string} [hostName] 服务器名称
     * @param {string} [osType] 操作系统类型，包含如下2种。   - Linux ：Linux。   - Windows ：Windows。
     * @param {string} [hostIp] 服务器IP地址
     * @param {string} [hostStatus] 主机状态，包含如下3种。   - 不传参默认为全部。   - ACTIVE ：正在运行。   - SHUTOFF ：关机。
     * @param {number} [lastDays] 查询时间范围天数，最近7天为last_days&#x3D;7，若不填，则默认查询一天内的防护事件和已有备份数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProtectionServer(listProtectionServerRequest?: ListProtectionServerRequest): Promise<ListProtectionServerResponse> {
        const options = ParamCreater().listProtectionServer(listProtectionServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询配额详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额详情
     * @param {string} [region] region id
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [version] 主机开通的版本，包含如下7种输入。   - hss.version.null ：无。   - hss.version.basic ：基础版。   - hss.version.advanced ：专业版。   - hss.version.enterprise ：企业版。   - hss.version.premium ：旗舰版。   - hss.version.wtp ：网页防篡改版。   - hss.version.container.enterprise：容器版。
     * @param {string} [category] 类别，包含如下几种：   - host_resource ：HOST_RESOURCE   - container_resource ：CONTAINER_RESOURCE
     * @param {string} [quotaStatus] 配额状态，包含如下几种：   - normal ： QUOTA_STATUS_NORMAL   - expired ：QUOTA_STATUS_EXPIRED   - freeze ：QUOTA_STATUS_FREEZE
     * @param {string} [usedStatus] 使用状态，包含如下几种：   - idle ：USED_STATUS_IDLE   - used ：USED_STATUS_USED
     * @param {string} [hostName] 服务器名称
     * @param {string} [resourceId] 资源ID
     * @param {string} [chargingMode] 收费模式，包含如下2种。   - packet_cycle ：包年/包月。   - on_demand ：按需。
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotasDetail(listQuotasDetailRequest?: ListQuotasDetailRequest): Promise<ListQuotasDetailResponse> {
        const options = ParamCreater().listQuotasDetail(listQuotasDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定安全配置项的检查项列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定安全配置项的检查项列表
     * @param {string} checkName 基线名称
     * @param {string} standard 标准类型，包含如下: - cn_standard : 等保合规标准 - hw_standard : 华为标准 - qt_standard : 青腾标准
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [resultType] 结果类型，包含如下： - safe ： 已通过 - unhandled : 未通过，且未忽略的 - ignored : 未通过，且已忽略的
     * @param {string} [checkRuleName] 检查项名称，支持模糊匹配
     * @param {string} [severity] 风险等级，包含如下:   - Security : 安全   - Low : 低危   - Medium : 中危   - High : 高危   - Critical : 危急
     * @param {string} [hostId] 主机ID，不赋值时，查租户所有主机
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRiskConfigCheckRules(listRiskConfigCheckRulesRequest?: ListRiskConfigCheckRulesRequest): Promise<ListRiskConfigCheckRulesResponse> {
        const options = ParamCreater().listRiskConfigCheckRules(listRiskConfigCheckRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定安全配置项的受影响服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定安全配置项的受影响服务器列表
     * @param {string} checkName 基线名称
     * @param {string} standard 标准类型，包含如下: - cn_standard : 等保合规标准 - hw_standard : 华为标准 - qt_standard : 青腾标准
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostIp] 服务器IP地址
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRiskConfigHosts(listRiskConfigHostsRequest?: ListRiskConfigHostsRequest): Promise<ListRiskConfigHostsResponse> {
        const options = ParamCreater().listRiskConfigHosts(listRiskConfigHostsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的服务器安全配置检测结果列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的服务器安全配置检测结果列表
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [checkName] 基线名称
     * @param {string} [groupId] 策略组ID
     * @param {string} [severity] 风险等级，包含如下:   - Security : 安全   - Low : 低危   - Medium : 中危   - High : 高危
     * @param {string} [standard] 标准类型，包含如下:   - cn_standard : 等保合规标准   - hw_standard : 华为标准   - qt_standard : 青腾标准
     * @param {string} [hostId] 服务器id
     * @param {number} [limit] 每页显示数量，默认10
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRiskConfigs(listRiskConfigsRequest?: ListRiskConfigsRequest): Promise<ListRiskConfigsResponse> {
        const options = ParamCreater().listRiskConfigs(listRiskConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查入侵事件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查入侵事件列表
     * @param {string} region region id
     * @param {string} category 事件类别，包含如下:   - host : 主机安全事件   - container : 容器安全事件
     * @param {string} [enterpriseProjectId] 租户企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {number} [lastDays] 查询时间范围天数，与自定义查询时间begin_time，end_time互斥
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostId] 服务器ID
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [containerName] 容器实例名称
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {number} [limit] 每页显示个数
     * @param {Array<number>} [eventTypes] 事件类型，包含如下:   - 1001 : 通用恶意软件   - 1002 : 病毒   - 1003 : 蠕虫   - 1004 : 木马   - 1005 : 僵尸网络   - 1006 : 后门   - 1010 : Rootkit   - 1011 : 勒索软件   - 1012 ：黑客工具   - 1015 : Webshell   - 1016 : 挖矿   - 1017 : 反弹Shell   - 2001 : 一般漏洞利用   - 2012 : 远程代码执行   - 2047 : Redis漏洞利用   - 2048 : Hadoop漏洞利用   - 2049 : MySQL漏洞利用   - 3002 : 文件提权   - 3003 : 进程提权   - 3004 : 关键文件变更   - 3005 : 文件/目录变更   - 3007 : 进程异常行为   - 3015 : 高危命令执行   - 3018 : 异常Shell   - 3027 : Crontab可疑任务   - 3029 ：系统安全防护被禁用   - 3030 ：备份删除   - 3031 ：异常注册表操作   - 3036 : 容器镜像阻断   - 4002 : 暴力破解   - 4004 : 异常登录   - 4006 : 非法系统账号   - 4014 : 用户账号添加   - 4020 : 用户密码窃取   - 6002 : 端口扫描   - 6003 : 主机扫描   - 13001 : Kubernetes事件删除   - 13002 : Pod异常行为   - 13003 : 枚举用户信息   - 13004 : 绑定集群用户角色
     * @param {string} [handleStatus] 处置状态，包含如下:   - unhandled ：未处理   - handled : 已处理
     * @param {string} [severity] 威胁等级，包含如下:   - Security ：安全   - Low : 低危   - Medium : 中危   - High : 高危   - Critical : 危急
     * @param {string} [beginTime] 自定义查询时间，与查询时间范围天数互斥，查询时间段的起始时间，毫秒级时间戳，end_time减去begin_time小于等于2天，与查询时间范围天数互斥
     * @param {string} [endTime] 自定义时间，查询时间段的终止时间，毫秒级时间戳，end_time减去begin_time小于等于2天，与查询时间范围天数互斥
     * @param {Array<string>} [eventClassIds] 事件标识，包含如下: - container_1001 : 容器命名空间 - container_1002 : 容器开放端口 - container_1003 : 容器安全选项 - container_1004 : 容器挂载目录 - containerescape_0001 : 容器高危系统调用 - containerescape_0002 : Shocker攻击 - containerescape_0003 : DirtCow攻击 - containerescape_0004 : 容器文件逃逸攻击 - dockerfile_001 : 用户自定义容器保护文件被修改 - dockerfile_002 : 容器文件系统可执行文件被修改 - dockerproc_001 : 容器进程异常事件上报 - fileprotect_0001 : 文件提权 - fileprotect_0002 : 关键文件变更 - fileprotect_0003 : 关键文件路径变更 - fileprotect_0004 : 文件/目录变更 - av_1002 : 病毒 - av_1003 : 蠕虫 - av_1004 : 木马 - av_1005 : 僵尸网络 - av_1006 : 后门 - av_1007 : 间谍软件 - av_1008 : 恶意广告软件 - av_1009 : 钓鱼 - av_1010 : Rootkit - av_1011 : 勒索软件 - av_1012 : 黑客工具 - av_1013 : 灰色软件 - av_1015 : Webshell - av_1016 : 挖矿软件 - login_0001 : 尝试暴力破解 - login_0002 : 爆破成功 - login_1001 : 登录成功 - login_1002 : 异地登录 - login_1003 : 弱口令 - malware_0001 : shell变更事件上报 - malware_0002 : 反弹shell事件上报 - malware_1001 : 恶意程序 - procdet_0001 : 进程异常行为检测 - procdet_0002 : 进程提权 - procreport_0001 : 危险命令 - user_1001 : 账号变更 - user_1002 : 风险账号 - vmescape_0001 : 虚拟机敏感命令执行 - vmescape_0002 : 虚拟化进程访问敏感文件 - vmescape_0003 : 虚拟机异常端口访问 - webshell_0001 : 网站后门 - network_1001 : 恶意挖矿 - network_1002 : 对外DDoS攻击 - network_1003 : 恶意扫描 - network_1004 : 敏感区域攻击 - ransomware_0001 : 勒索攻击 - ransomware_0002 : 勒索攻击 - ransomware_0003 : 勒索攻击 - fileless_0001 : 进程注入 - fileless_0002 : 动态库注入进程 - fileless_0003 : 关键配置变更 - fileless_0004 : 环境变量变更 - fileless_0005 : 内存文件进程 - fileless_0006 : vdso劫持 - crontab_1001 : Crontab可疑任务 - vul_exploit_0001 : Redis漏洞利用攻击 - vul_exploit_0002 : Hadoop漏洞利用攻击 - vul_exploit_0003 : MySQL漏洞利用攻击 - rootkit_0001 : 可疑rootkit文件 - rootkit_0002 : 可疑内核模块 - RASP_0004 : 上传Webshell - RASP_0018 : 无文件Webshell - blockexec_001 : 已知勒索攻击 - hips_0001 : Windows Defender防护被禁用 - hips_0002 : 可疑的黑客工具 - hips_0003 : 可疑的勒索加密行为 - hips_0004 : 隐藏账号创建 - hips_0005 : 读取用户密码凭据 - hips_0006 : 可疑的SAM文件导出 - hips_0007 : 可疑shadow copy删除操作 - hips_0008 : 备份文件删除 - hips_0009 : 可疑勒索病毒操作注册表 - hips_0010 : 可疑的异常进程行为 - hips_0011 : 可疑的扫描探测 - hips_0012 : 可疑的勒索病毒脚本运行 - hips_0013 : 可疑的挖矿命令执行 - hips_0014 : 可疑的禁用windows安全中心 - hips_0015 : 可疑的停止防火墙服务行为 - hips_0016 : 可疑的系统自动恢复禁用 - hips_0017 : Offies 创建可执行文件 - hips_0018 : 带宏Offies文件异常创建 - hips_0019 : 可疑的注册表操作 - hips_0020 : Confluence远程代码执行 - hips_0021 : MSDT远程代码执行 - portscan_0001 : 通用端口扫描 - portscan_0002 : 秘密端口扫描 - k8s_1001 : Kubernetes事件删除 - k8s_1002 : 创建特权Pod - k8s_1003 : Pod中使用交互式shell - k8s_1004 : 创建敏感目录Pod - k8s_1005 : 创建主机网络的Pod - k8s_1006 : 创建主机Pid空间的Pod - k8s_1007 : 普通pod访问APIserver认证失败 - k8s_1008 : 普通Pod通过Curl访问APIServer - k8s_1009 : 系统管理空间执行exec - k8s_1010 : 系统管理空间创建Pod - k8s_1011 : 创建静态Pod - k8s_1012 : 创建DaemonSet - k8s_1013 : 创建集群计划任务 - k8s_1014 : Secrets操作 - k8s_1015 : 枚举用户可执行的操作 - k8s_1016 : 高权限RoleBinding或ClusterRoleBinding - k8s_1017 : ServiceAccount创建 - k8s_1018 : 创建Cronjob - k8s_1019 : Pod中exec使用交互式shell - k8s_1020 : 无权限访问Apiserver - k8s_1021 : 使用curl访问APIServer - k8s_1022 : Ingress漏洞 - k8s_1023 : 中间人攻击 - k8s_1024 : 蠕虫挖矿木马 - k8s_1025 : K8s事件删除 - k8s_1026 : SelfSubjectRulesReview场景 - imgblock_0001 : 镜像白名单阻断 - imgblock_0002 : 镜像黑名单阻断 - imgblock_0003 : 镜像标签白名单阻断 - imgblock_0004 : 镜像标签黑名单阻断 - imgblock_0005 : 创建容器白名单阻断 - imgblock_0006 : 创建容器黑名单阻断 - imgblock_0007 : 容器mount proc阻断 - imgblock_0008 : 容器seccomp unconfined阻断 - imgblock_0009 : 容器特权阻断 - imgblock_0010 : 容器capabilities阻断
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityEvents(listSecurityEventsRequest?: ListSecurityEventsRequest): Promise<ListSecurityEventsResponse> {
        const options = ParamCreater().listSecurityEvents(listSecurityEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取账户变动历史记录信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取账户变动历史信息
     * @param {string} [userName] 账号名
     * @param {string} [hostId] 主机id
     * @param {boolean} [rootPermission] 是否有root权限
     * @param {string} [hostName] 主机名称
     * @param {string} [privateIp] 服务器私有IP
     * @param {string} [changeType] 变更类型:   - ADD ：添加   - DELETE ：删除   - MODIFY ： 修改
     * @param {number} [limit] 默认10
     * @param {number} [offset] 默认是0
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {number} [startTime] 变更开始时间，13位时间戳
     * @param {number} [endTime] 变更结束时间，13位时间戳
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserChangeHistories(listUserChangeHistoriesRequest?: ListUserChangeHistoriesRequest): Promise<ListUserChangeHistoriesResponse> {
        const options = ParamCreater().listUserChangeHistories(listUserChangeHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询账号信息列表，支持通过传入账号名称参数查询对应的服务器数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号信息列表
     * @param {string} [userName] 账号名称，参考windows文件命名规则，支持字母、数字、下划线、中文，特殊字符!@.-等，不包括中文标点符号
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {number} [limit] 默认10
     * @param {number} [offset] 默认是0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserStatistics(listUserStatisticsRequest?: ListUserStatisticsRequest): Promise<ListUserStatisticsResponse> {
        const options = ParamCreater().listUserStatistics(listUserStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询账号的服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号的服务器列表
     * @param {string} [hostId] 服务器ID
     * @param {string} [userName] 账号名称
     * @param {string} [hostName] 服务器名称
     * @param {string} [privateIp] 服务器私有IP
     * @param {boolean} [loginPermission] 是否允许登陆
     * @param {boolean} [rootPermission] 是否有root权限
     * @param {string} [userGroup] 用户组
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {number} [limit] 默认10
     * @param {number} [offset] 默认是0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUsers(listUsersRequest?: ListUsersRequest): Promise<ListUsersResponse> {
        const options = ParamCreater().listUsers(listUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个漏洞影响的云服务器信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个漏洞影响的云服务器信息
     * @param {string} vulId 漏洞ID
     * @param {string} type 漏洞类型   - linux_vul : 漏洞类型-linux漏洞   - windows_vul : 漏洞类型-windows漏洞   - web_cms : Web-CMS漏洞   - app_vul : 应用漏洞
     * @param {string} [enterpriseProjectId] 企业租户ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [hostName] 受影响资产名称
     * @param {string} [hostIp] 受影响资产ip
     * @param {string} [status] 漏洞状态   - vul_status_unfix : 未处理   - vul_status_ignored : 已忽略   - vul_status_verified : 验证中   - vul_status_fixing : 修复中   - vul_status_fixed : 修复成功   - vul_status_reboot : 修复成功待重启   - vul_status_failed : 修复失败   - vul_status_fix_after_reboot : 请重启主机再次修复
     * @param {number} [limit] 每页条数
     * @param {number} [offset] 偏移
     * @param {string} [assetValue] 资产重要性 important:重要 common：一般 test：测试
     * @param {string} [groupName] 服务器组名称
     * @param {string} [handleStatus] 处置状态，包含如下:   - unhandled ：未处理   - handled : 已处理
     * @param {string} [severityLevel] 危险程度 ，Critical，High，Medium，Low
     * @param {boolean} [isAffectBusiness] 是否影响业务
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVulHosts(listVulHostsRequest?: ListVulHostsRequest): Promise<ListVulHostsResponse> {
        const options = ParamCreater().listVulHosts(listVulHostsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询漏洞列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询漏洞列表
     * @param {string} [enterpriseProjectId] 企业租户ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [type] 漏洞类型，包含如下：   -linux_vul : linux漏洞   -windows_vul : windows漏洞   -web_cms : Web-CMS漏洞   -app_vul : 应用漏洞
     * @param {string} [vulId] 漏洞ID
     * @param {string} [vulName] 漏洞名称
     * @param {number} [limit] 每页显示个数
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {string} [repairPriority] 修复优先级 Critical 紧急 High  高 Medium 中 Low 低
     * @param {string} [handleStatus] 处置状态，包含如下:   - unhandled ：未处理   - handled : 已处理
     * @param {string} [cveId] 漏洞编号
     * @param {string} [labelList] 漏洞标签
     * @param {string} [status] 漏洞状态
     * @param {string} [assetValue] 资产重要性 important common test
     * @param {string} [groupName] 服务器组名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVulnerabilities(listVulnerabilitiesRequest?: ListVulnerabilitiesRequest): Promise<ListVulnerabilitiesResponse> {
        const options = ParamCreater().listVulnerabilities(listVulnerabilitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弱口令检测结果列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弱口令检测结果列表
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostIp] 服务器IP地址
     * @param {string} [userName] 弱口令账号名称
     * @param {string} [hostId] 主机ID，不赋值时，查租户所有主机
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWeakPasswordUsers(listWeakPasswordUsersRequest?: ListWeakPasswordUsersRequest): Promise<ListWeakPasswordUsersResponse> {
        const options = ParamCreater().listWeakPasswordUsers(listWeakPasswordUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询防护列表：查询网页防篡改主机防护状态列表信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询防护列表
     * @param {string} region Region Id
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {string} [hostName] 服务器名称
     * @param {string} [hostId] 云服务器ID
     * @param {string} [publicIp] 弹性公网IP
     * @param {string} [privateIp] 私有IP
     * @param {string} [groupName] 服务器组名称
     * @param {string} [osType] 操作系统类别（linux，windows）   - linux : linux操作系统   - windows : windows操作系统
     * @param {string} [protectStatus] 防护状态   - closed : 未开启   - opened : 防护中
     * @param {string} [agentStatus] 客户端状态   - not_installed : agent未安装   - online : agent在线   - offline : agent不在线
     * @param {number} [limit] 默认10
     * @param {number} [offset] 默认是0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWtpProtectHost(listWtpProtectHostRequest?: ListWtpProtectHostRequest): Promise<ListWtpProtectHostResponse> {
        const options = ParamCreater().listWtpProtectHost(listWtpProtectHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启/关闭动态网页防篡改防护，下发/清空动态网页防篡改策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启/关闭动态网页防篡改防护
     * @param {string} region Region Id
     * @param {SetRaspSwitchRequestInfo} setRaspSwitchRequestBody 请求体request
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setRaspSwitch(setRaspSwitchRequest?: SetRaspSwitchRequest): Promise<SetRaspSwitchResponse> {
        const options = ParamCreater().setRaspSwitch(setRaspSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启/关闭网页防篡改功能防护，下发/清空网页防篡改策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启关闭网页防篡改防护
     * @param {string} region Region Id
     * @param {SetWtpProtectionStatusRequestInfo} setWtpProtectionStatusInfoRequestBody 请求体request
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setWtpProtectionStatusInfo(setWtpProtectionStatusInfoRequest?: SetWtpProtectionStatusInfoRequest): Promise<SetWtpProtectionStatusInfoResponse> {
        const options = ParamCreater().setWtpProtectionStatusInfo(setWtpProtectionStatusInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资产统计信息，账号、端口、进程等
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 统计资产信息，账号、端口、进程等
     * @param {string} [enterpriseProjectId] 企业项目
     * @param {string} [hostId] host id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAssetStatistic(showAssetStatisticRequest?: ShowAssetStatisticRequest): Promise<ShowAssetStatisticResponse> {
        const options = ParamCreater().showAssetStatistic(showAssetStatisticRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询HSS存储库绑定的备份策略信息,确保已经购买了勒索防护存储库，可以从cbr云备份服务进行验证，确保已经存在HSS_projectid命名的存储库已经购买
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询HSS存储库绑定的备份策略信息
     * @param {string} region region id
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackupPolicyInfo(showBackupPolicyInfoRequest?: ShowBackupPolicyInfoRequest): Promise<ShowBackupPolicyInfoResponse> {
        const options = ParamCreater().showBackupPolicyInfo(showBackupPolicyInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询配置检查项检测报告
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配置检查项检测报告
     * @param {string} checkName 基线名称
     * @param {string} checkType 基线类型
     * @param {string} checkRuleId 检查项ID
     * @param {string} standard 标准类型，包含如下:   - cn_standard : 等保合规标准   - hw_standard : 华为标准   - qt_standard : 青腾标准
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [hostId] 主机ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCheckRuleDetail(showCheckRuleDetailRequest?: ShowCheckRuleDetailRequest): Promise<ShowCheckRuleDetailResponse> {
        const options = ParamCreater().showCheckRuleDetail(showCheckRuleDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询配额信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额信息
     * @param {string} [region] region id
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [version] 主机开通的版本，包含如下7种输入。   - hss.version.null ：无。   - hss.version.basic ：基础版。   - hss.version.advanced ：专业版。   - hss.version.enterprise ：企业版。   - hss.version.premium ：旗舰版。   - hss.version.wtp ：网页防篡改版。   - hss.version.container.enterprise：容器版。
     * @param {string} [chargingMode] 收费模式，包含如下2种。   - packet_cycle ：包年/包月。   - on_demand ：按需。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceQuotas(showResourceQuotasRequest?: ShowResourceQuotasRequest): Promise<ShowResourceQuotasResponse> {
        const options = ParamCreater().showResourceQuotas(showResourceQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定安全配置项的检查结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定安全配置项的检查结果
     * @param {string} checkName 基线名称
     * @param {string} standard 标准类型，包含如下: - cn_standard : 等保合规标准 - hw_standard : 华为标准 - qt_standard : 青腾标准
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {string} [hostId] 主机ID，不赋值时，查租户所有主机
     * @param {number} [limit] 每页数量
     * @param {number} [offset] 偏移量：指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRiskConfigDetail(showRiskConfigDetailRequest?: ShowRiskConfigDetailRequest): Promise<ShowRiskConfigDetailResponse> {
        const options = ParamCreater().showRiskConfigDetail(showRiskConfigDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启勒索病毒防护,请保证该region有cbr云备份服务，勒索服务与云备份服务有关联关系
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启勒索病毒防护
     * @param {string} region region id
     * @param {ProtectionInfoRequestInfo} startProtectionRequestBody 开启勒索病毒防护请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startProtection(startProtectionRequest?: StartProtectionRequest): Promise<StartProtectionResponse> {
        const options = ParamCreater().startProtection(startProtectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭勒索病毒防护
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭勒索病毒防护
     * @param {string} region region id
     * @param {CloseProtectionInfoRequestInfo} stopProtectionRequestBody 关闭勒索病毒防护请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopProtection(stopProtectionRequest?: StopProtectionRequest): Promise<StopProtectionResponse> {
        const options = ParamCreater().stopProtection(stopProtectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换防护状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换防护状态
     * @param {string} region region id
     * @param {SwitchHostsProtectStatusRequestInfo} switchHostsProtectStatusRequestBody 服务器列表
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchHostsProtectStatus(switchHostsProtectStatusRequest?: SwitchHostsProtectStatusRequest): Promise<SwitchHostsProtectStatusResponse> {
        const options = ParamCreater().switchHostsProtectStatus(switchHostsProtectStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改存储库绑定的备份策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改存储库绑定的备份策略
     * @param {string} region region id
     * @param {UpdateBackupPolicyRequestInfo} updateBackupPolicyInfoRequestBody 修改备份策略请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBackupPolicyInfo(updateBackupPolicyInfoRequest?: UpdateBackupPolicyInfoRequest): Promise<UpdateBackupPolicyInfoResponse> {
        const options = ParamCreater().updateBackupPolicyInfo(updateBackupPolicyInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改防护策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改防护策略
     * @param {string} region region id
     * @param {UpdateProtectionPolicyInfoRequestInfo} updateProtectionPolicyRequestBody 需要修改的防护策略的请求体
     * @param {string} [enterpriseProjectId] 企业项目ID，查询所有企业项目时填写：all_granted_eps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProtectionPolicy(updateProtectionPolicyRequest?: UpdateProtectionPolicyRequest): Promise<UpdateProtectionPolicyResponse> {
        const options = ParamCreater().updateProtectionPolicy(updateProtectionPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建服务器组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addHostsGroup(addHostsGroupRequest?: AddHostsGroupRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/host-management/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (addHostsGroupRequest !== null && addHostsGroupRequest !== undefined) {
                if (addHostsGroupRequest instanceof AddHostsGroupRequest) {
                    region = addHostsGroupRequest.region;
                    body = addHostsGroupRequest.body
                    enterpriseProjectId = addHostsGroupRequest.enterpriseProjectId;
                } else {
                    region = addHostsGroupRequest['region'];
                    body = addHostsGroupRequest['body'];
                    enterpriseProjectId = addHostsGroupRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 部署策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associatePolicyGroup(associatePolicyGroupRequest?: AssociatePolicyGroupRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/policy/deploy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (associatePolicyGroupRequest !== null && associatePolicyGroupRequest !== undefined) {
                if (associatePolicyGroupRequest instanceof AssociatePolicyGroupRequest) {
                    region = associatePolicyGroupRequest.region;
                    body = associatePolicyGroupRequest.body
                    enterpriseProjectId = associatePolicyGroupRequest.enterpriseProjectId;
                } else {
                    region = associatePolicyGroupRequest['region'];
                    body = associatePolicyGroupRequest['body'];
                    enterpriseProjectId = associatePolicyGroupRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateTags(batchCreateTagsRequest?: BatchCreateTagsRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/{resource_type}/{resource_id}/tags/create",
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

            if (batchCreateTagsRequest !== null && batchCreateTagsRequest !== undefined) {
                if (batchCreateTagsRequest instanceof BatchCreateTagsRequest) {
                    resourceType = batchCreateTagsRequest.resourceType;
                    resourceId = batchCreateTagsRequest.resourceId;
                    body = batchCreateTagsRequest.body
                } else {
                    resourceType = batchCreateTagsRequest['resource_type'];
                    resourceId = batchCreateTagsRequest['resource_id'];
                    body = batchCreateTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchCreateTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateTags.');
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
         * 处理告警事件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeEvent(changeEventRequest?: ChangeEventRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/event/operate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;
            
            let containerName;
            
            let containerId;

            if (changeEventRequest !== null && changeEventRequest !== undefined) {
                if (changeEventRequest instanceof ChangeEventRequest) {
                    region = changeEventRequest.region;
                    body = changeEventRequest.body
                    enterpriseProjectId = changeEventRequest.enterpriseProjectId;
                    containerName = changeEventRequest.containerName;
                    containerId = changeEventRequest.containerId;
                } else {
                    region = changeEventRequest['region'];
                    body = changeEventRequest['body'];
                    enterpriseProjectId = changeEventRequest['enterprise_project_id'];
                    containerName = changeEventRequest['container_name'];
                    containerId = changeEventRequest['container_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (containerName !== null && containerName !== undefined) {
                localVarQueryParameter['container_name'] = containerName;
            }
            if (containerId !== null && containerId !== undefined) {
                localVarQueryParameter['container_id'] = containerId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑服务器组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeHostsGroup(changeHostsGroupRequest?: ChangeHostsGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/host-management/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (changeHostsGroupRequest !== null && changeHostsGroupRequest !== undefined) {
                if (changeHostsGroupRequest instanceof ChangeHostsGroupRequest) {
                    region = changeHostsGroupRequest.region;
                    body = changeHostsGroupRequest.body
                    enterpriseProjectId = changeHostsGroupRequest.enterpriseProjectId;
                } else {
                    region = changeHostsGroupRequest['region'];
                    body = changeHostsGroupRequest['body'];
                    enterpriseProjectId = changeHostsGroupRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改漏洞的状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeVulStatus(changeVulStatusRequest?: ChangeVulStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/vulnerability/status",
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

            if (changeVulStatusRequest !== null && changeVulStatusRequest !== undefined) {
                if (changeVulStatusRequest instanceof ChangeVulStatusRequest) {
                    body = changeVulStatusRequest.body
                    enterpriseProjectId = changeVulStatusRequest.enterpriseProjectId;
                } else {
                    body = changeVulStatusRequest['body'];
                    enterpriseProjectId = changeVulStatusRequest['enterprise_project_id'];
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
         * 删除服务器组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHostsGroup(deleteHostsGroupRequest?: DeleteHostsGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/host-management/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let groupId;
            
            let enterpriseProjectId;

            if (deleteHostsGroupRequest !== null && deleteHostsGroupRequest !== undefined) {
                if (deleteHostsGroupRequest instanceof DeleteHostsGroupRequest) {
                    region = deleteHostsGroupRequest.region;
                    groupId = deleteHostsGroupRequest.groupId;
                    enterpriseProjectId = deleteHostsGroupRequest.enterpriseProjectId;
                } else {
                    region = deleteHostsGroupRequest['region'];
                    groupId = deleteHostsGroupRequest['group_id'];
                    enterpriseProjectId = deleteHostsGroupRequest['enterprise_project_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteHostsGroup.');
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除单个资源下的标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResourceInstanceTag(deleteResourceInstanceTagRequest?: DeleteResourceInstanceTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/{resource_type}/{resource_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;
            
            let key;

            if (deleteResourceInstanceTagRequest !== null && deleteResourceInstanceTagRequest !== undefined) {
                if (deleteResourceInstanceTagRequest instanceof DeleteResourceInstanceTagRequest) {
                    resourceType = deleteResourceInstanceTagRequest.resourceType;
                    resourceId = deleteResourceInstanceTagRequest.resourceId;
                    key = deleteResourceInstanceTagRequest.key;
                } else {
                    resourceType = deleteResourceInstanceTagRequest['resource_type'];
                    resourceId = deleteResourceInstanceTagRequest['resource_id'];
                    key = deleteResourceInstanceTagRequest['key'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteResourceInstanceTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteResourceInstanceTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteResourceInstanceTag.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警白名单列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmWhiteList(listAlarmWhiteListRequest?: ListAlarmWhiteListRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/event/white-list/alarm",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let hash;
            
            let eventType;
            
            let offset;
            
            let limit;

            if (listAlarmWhiteListRequest !== null && listAlarmWhiteListRequest !== undefined) {
                if (listAlarmWhiteListRequest instanceof ListAlarmWhiteListRequest) {
                    region = listAlarmWhiteListRequest.region;
                    enterpriseProjectId = listAlarmWhiteListRequest.enterpriseProjectId;
                    hash = listAlarmWhiteListRequest.hash;
                    eventType = listAlarmWhiteListRequest.eventType;
                    offset = listAlarmWhiteListRequest.offset;
                    limit = listAlarmWhiteListRequest.limit;
                } else {
                    region = listAlarmWhiteListRequest['region'];
                    enterpriseProjectId = listAlarmWhiteListRequest['enterprise_project_id'];
                    hash = listAlarmWhiteListRequest['hash'];
                    eventType = listAlarmWhiteListRequest['event_type'];
                    offset = listAlarmWhiteListRequest['offset'];
                    limit = listAlarmWhiteListRequest['limit'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hash !== null && hash !== undefined) {
                localVarQueryParameter['hash'] = hash;
            }
            if (eventType !== null && eventType !== undefined) {
                localVarQueryParameter['event_type'] = eventType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取软件信息的历史变动记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppChangeHistories(listAppChangeHistoriesRequest?: ListAppChangeHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/app/change-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostId;
            
            let hostIp;
            
            let hostName;
            
            let appName;
            
            let variationType;
            
            let enterpriseProjectId;
            
            let sortKey;
            
            let sortDir;
            
            let limit;
            
            let offset;
            
            let startTime;
            
            let endTime;

            if (listAppChangeHistoriesRequest !== null && listAppChangeHistoriesRequest !== undefined) {
                if (listAppChangeHistoriesRequest instanceof ListAppChangeHistoriesRequest) {
                    hostId = listAppChangeHistoriesRequest.hostId;
                    hostIp = listAppChangeHistoriesRequest.hostIp;
                    hostName = listAppChangeHistoriesRequest.hostName;
                    appName = listAppChangeHistoriesRequest.appName;
                    variationType = listAppChangeHistoriesRequest.variationType;
                    enterpriseProjectId = listAppChangeHistoriesRequest.enterpriseProjectId;
                    sortKey = listAppChangeHistoriesRequest.sortKey;
                    sortDir = listAppChangeHistoriesRequest.sortDir;
                    limit = listAppChangeHistoriesRequest.limit;
                    offset = listAppChangeHistoriesRequest.offset;
                    startTime = listAppChangeHistoriesRequest.startTime;
                    endTime = listAppChangeHistoriesRequest.endTime;
                } else {
                    hostId = listAppChangeHistoriesRequest['host_id'];
                    hostIp = listAppChangeHistoriesRequest['host_ip'];
                    hostName = listAppChangeHistoriesRequest['host_name'];
                    appName = listAppChangeHistoriesRequest['app_name'];
                    variationType = listAppChangeHistoriesRequest['variation_type'];
                    enterpriseProjectId = listAppChangeHistoriesRequest['enterprise_project_id'];
                    sortKey = listAppChangeHistoriesRequest['sort_key'];
                    sortDir = listAppChangeHistoriesRequest['sort_dir'];
                    limit = listAppChangeHistoriesRequest['limit'];
                    offset = listAppChangeHistoriesRequest['offset'];
                    startTime = listAppChangeHistoriesRequest['start_time'];
                    endTime = listAppChangeHistoriesRequest['end_time'];
                }
            }

        
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (variationType !== null && variationType !== undefined) {
                localVarQueryParameter['variation_type'] = variationType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询软件列表，支持通过软件名称查询对应的服务器数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppStatistics(listAppStatisticsRequest?: ListAppStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/app/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appName;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;

            if (listAppStatisticsRequest !== null && listAppStatisticsRequest !== undefined) {
                if (listAppStatisticsRequest instanceof ListAppStatisticsRequest) {
                    appName = listAppStatisticsRequest.appName;
                    enterpriseProjectId = listAppStatisticsRequest.enterpriseProjectId;
                    limit = listAppStatisticsRequest.limit;
                    offset = listAppStatisticsRequest.offset;
                } else {
                    appName = listAppStatisticsRequest['app_name'];
                    enterpriseProjectId = listAppStatisticsRequest['enterprise_project_id'];
                    limit = listAppStatisticsRequest['limit'];
                    offset = listAppStatisticsRequest['offset'];
                }
            }

        
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
         * 查询软件的服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApps(listAppsRequest?: ListAppsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostId;
            
            let hostName;
            
            let appName;
            
            let hostIp;
            
            let version;
            
            let installDir;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;

            if (listAppsRequest !== null && listAppsRequest !== undefined) {
                if (listAppsRequest instanceof ListAppsRequest) {
                    hostId = listAppsRequest.hostId;
                    hostName = listAppsRequest.hostName;
                    appName = listAppsRequest.appName;
                    hostIp = listAppsRequest.hostIp;
                    version = listAppsRequest.version;
                    installDir = listAppsRequest.installDir;
                    enterpriseProjectId = listAppsRequest.enterpriseProjectId;
                    limit = listAppsRequest.limit;
                    offset = listAppsRequest.offset;
                } else {
                    hostId = listAppsRequest['host_id'];
                    hostName = listAppsRequest['host_name'];
                    appName = listAppsRequest['app_name'];
                    hostIp = listAppsRequest['host_ip'];
                    version = listAppsRequest['version'];
                    installDir = listAppsRequest['install_dir'];
                    enterpriseProjectId = listAppsRequest['enterprise_project_id'];
                    limit = listAppsRequest['limit'];
                    offset = listAppsRequest['offset'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
                throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling listApps.');
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (installDir !== null && installDir !== undefined) {
                localVarQueryParameter['install_dir'] = installDir;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
         * 获取自启动项的历史变动记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAutoLaunchChangeHistories(listAutoLaunchChangeHistoriesRequest?: ListAutoLaunchChangeHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/auto-launch/change-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostId;
            
            let hostIp;
            
            let hostName;
            
            let autoLaunchName;
            
            let type;
            
            let variationType;
            
            let enterpriseProjectId;
            
            let sortKey;
            
            let sortDir;
            
            let limit;
            
            let offset;
            
            let startTime;
            
            let endTime;

            if (listAutoLaunchChangeHistoriesRequest !== null && listAutoLaunchChangeHistoriesRequest !== undefined) {
                if (listAutoLaunchChangeHistoriesRequest instanceof ListAutoLaunchChangeHistoriesRequest) {
                    hostId = listAutoLaunchChangeHistoriesRequest.hostId;
                    hostIp = listAutoLaunchChangeHistoriesRequest.hostIp;
                    hostName = listAutoLaunchChangeHistoriesRequest.hostName;
                    autoLaunchName = listAutoLaunchChangeHistoriesRequest.autoLaunchName;
                    type = listAutoLaunchChangeHistoriesRequest.type;
                    variationType = listAutoLaunchChangeHistoriesRequest.variationType;
                    enterpriseProjectId = listAutoLaunchChangeHistoriesRequest.enterpriseProjectId;
                    sortKey = listAutoLaunchChangeHistoriesRequest.sortKey;
                    sortDir = listAutoLaunchChangeHistoriesRequest.sortDir;
                    limit = listAutoLaunchChangeHistoriesRequest.limit;
                    offset = listAutoLaunchChangeHistoriesRequest.offset;
                    startTime = listAutoLaunchChangeHistoriesRequest.startTime;
                    endTime = listAutoLaunchChangeHistoriesRequest.endTime;
                } else {
                    hostId = listAutoLaunchChangeHistoriesRequest['host_id'];
                    hostIp = listAutoLaunchChangeHistoriesRequest['host_ip'];
                    hostName = listAutoLaunchChangeHistoriesRequest['host_name'];
                    autoLaunchName = listAutoLaunchChangeHistoriesRequest['auto_launch_name'];
                    type = listAutoLaunchChangeHistoriesRequest['type'];
                    variationType = listAutoLaunchChangeHistoriesRequest['variation_type'];
                    enterpriseProjectId = listAutoLaunchChangeHistoriesRequest['enterprise_project_id'];
                    sortKey = listAutoLaunchChangeHistoriesRequest['sort_key'];
                    sortDir = listAutoLaunchChangeHistoriesRequest['sort_dir'];
                    limit = listAutoLaunchChangeHistoriesRequest['limit'];
                    offset = listAutoLaunchChangeHistoriesRequest['offset'];
                    startTime = listAutoLaunchChangeHistoriesRequest['start_time'];
                    endTime = listAutoLaunchChangeHistoriesRequest['end_time'];
                }
            }

        
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (autoLaunchName !== null && autoLaunchName !== undefined) {
                localVarQueryParameter['auto_launch_name'] = autoLaunchName;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (variationType !== null && variationType !== undefined) {
                localVarQueryParameter['variation_type'] = variationType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自启动信息，支持通过传入自启动名称查询启动类型和服务器数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAutoLaunchStatistics(listAutoLaunchStatisticsRequest?: ListAutoLaunchStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/auto-launch/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let type;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;

            if (listAutoLaunchStatisticsRequest !== null && listAutoLaunchStatisticsRequest !== undefined) {
                if (listAutoLaunchStatisticsRequest instanceof ListAutoLaunchStatisticsRequest) {
                    name = listAutoLaunchStatisticsRequest.name;
                    type = listAutoLaunchStatisticsRequest.type;
                    enterpriseProjectId = listAutoLaunchStatisticsRequest.enterpriseProjectId;
                    limit = listAutoLaunchStatisticsRequest.limit;
                    offset = listAutoLaunchStatisticsRequest.offset;
                } else {
                    name = listAutoLaunchStatisticsRequest['name'];
                    type = listAutoLaunchStatisticsRequest['type'];
                    enterpriseProjectId = listAutoLaunchStatisticsRequest['enterprise_project_id'];
                    limit = listAutoLaunchStatisticsRequest['limit'];
                    offset = listAutoLaunchStatisticsRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
         * 查询自启动项的服务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAutoLaunchs(listAutoLaunchsRequest?: ListAutoLaunchsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/auto-launchs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostId;
            
            let hostName;
            
            let name;
            
            let hostIp;
            
            let type;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;

            if (listAutoLaunchsRequest !== null && listAutoLaunchsRequest !== undefined) {
                if (listAutoLaunchsRequest instanceof ListAutoLaunchsRequest) {
                    hostId = listAutoLaunchsRequest.hostId;
                    hostName = listAutoLaunchsRequest.hostName;
                    name = listAutoLaunchsRequest.name;
                    hostIp = listAutoLaunchsRequest.hostIp;
                    type = listAutoLaunchsRequest.type;
                    enterpriseProjectId = listAutoLaunchsRequest.enterpriseProjectId;
                    limit = listAutoLaunchsRequest.limit;
                    offset = listAutoLaunchsRequest.offset;
                } else {
                    hostId = listAutoLaunchsRequest['host_id'];
                    hostName = listAutoLaunchsRequest['host_name'];
                    name = listAutoLaunchsRequest['name'];
                    hostIp = listAutoLaunchsRequest['host_ip'];
                    type = listAutoLaunchsRequest['type'];
                    enterpriseProjectId = listAutoLaunchsRequest['enterprise_project_id'];
                    limit = listAutoLaunchsRequest['limit'];
                    offset = listAutoLaunchsRequest['offset'];
                }
            }

        
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
         * 查询服务器组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostGroups(listHostGroupsRequest?: ListHostGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/host-management/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;
            
            let groupName;

            if (listHostGroupsRequest !== null && listHostGroupsRequest !== undefined) {
                if (listHostGroupsRequest instanceof ListHostGroupsRequest) {
                    region = listHostGroupsRequest.region;
                    enterpriseProjectId = listHostGroupsRequest.enterpriseProjectId;
                    offset = listHostGroupsRequest.offset;
                    limit = listHostGroupsRequest.limit;
                    groupName = listHostGroupsRequest.groupName;
                } else {
                    region = listHostGroupsRequest['region'];
                    enterpriseProjectId = listHostGroupsRequest['enterprise_project_id'];
                    offset = listHostGroupsRequest['offset'];
                    limit = listHostGroupsRequest['limit'];
                    groupName = listHostGroupsRequest['group_name'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询主机静态网页防篡改防护动态：展示服务器名称、服务器ip、防护策略、检测时间、防护文件、事件描述信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostProtectHistoryInfo(listHostProtectHistoryInfoRequest?: ListHostProtectHistoryInfoRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/webtamper/static/protect-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let hostId;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;

            if (listHostProtectHistoryInfoRequest !== null && listHostProtectHistoryInfoRequest !== undefined) {
                if (listHostProtectHistoryInfoRequest instanceof ListHostProtectHistoryInfoRequest) {
                    region = listHostProtectHistoryInfoRequest.region;
                    hostId = listHostProtectHistoryInfoRequest.hostId;
                    startTime = listHostProtectHistoryInfoRequest.startTime;
                    endTime = listHostProtectHistoryInfoRequest.endTime;
                    limit = listHostProtectHistoryInfoRequest.limit;
                    offset = listHostProtectHistoryInfoRequest.offset;
                    enterpriseProjectId = listHostProtectHistoryInfoRequest.enterpriseProjectId;
                } else {
                    region = listHostProtectHistoryInfoRequest['region'];
                    hostId = listHostProtectHistoryInfoRequest['host_id'];
                    startTime = listHostProtectHistoryInfoRequest['start_time'];
                    endTime = listHostProtectHistoryInfoRequest['end_time'];
                    limit = listHostProtectHistoryInfoRequest['limit'];
                    offset = listHostProtectHistoryInfoRequest['offset'];
                    enterpriseProjectId = listHostProtectHistoryInfoRequest['enterprise_project_id'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
                throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling listHostProtectHistoryInfo.');
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listHostProtectHistoryInfo.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listHostProtectHistoryInfo.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listHostProtectHistoryInfo.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listHostProtectHistoryInfo.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询主机动态网页防篡改防护动态：包含告警级别、服务器ip、服务器名称、威胁类型、告警时间、攻击源ip、攻击源url信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostRaspProtectHistoryInfo(listHostRaspProtectHistoryInfoRequest?: ListHostRaspProtectHistoryInfoRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/webtamper/rasp/protect-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let hostId;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;
            
            let alarmLevel;
            
            let severity;
            
            let protectStatus;

            if (listHostRaspProtectHistoryInfoRequest !== null && listHostRaspProtectHistoryInfoRequest !== undefined) {
                if (listHostRaspProtectHistoryInfoRequest instanceof ListHostRaspProtectHistoryInfoRequest) {
                    region = listHostRaspProtectHistoryInfoRequest.region;
                    hostId = listHostRaspProtectHistoryInfoRequest.hostId;
                    startTime = listHostRaspProtectHistoryInfoRequest.startTime;
                    endTime = listHostRaspProtectHistoryInfoRequest.endTime;
                    limit = listHostRaspProtectHistoryInfoRequest.limit;
                    offset = listHostRaspProtectHistoryInfoRequest.offset;
                    enterpriseProjectId = listHostRaspProtectHistoryInfoRequest.enterpriseProjectId;
                    alarmLevel = listHostRaspProtectHistoryInfoRequest.alarmLevel;
                    severity = listHostRaspProtectHistoryInfoRequest.severity;
                    protectStatus = listHostRaspProtectHistoryInfoRequest.protectStatus;
                } else {
                    region = listHostRaspProtectHistoryInfoRequest['region'];
                    hostId = listHostRaspProtectHistoryInfoRequest['host_id'];
                    startTime = listHostRaspProtectHistoryInfoRequest['start_time'];
                    endTime = listHostRaspProtectHistoryInfoRequest['end_time'];
                    limit = listHostRaspProtectHistoryInfoRequest['limit'];
                    offset = listHostRaspProtectHistoryInfoRequest['offset'];
                    enterpriseProjectId = listHostRaspProtectHistoryInfoRequest['enterprise_project_id'];
                    alarmLevel = listHostRaspProtectHistoryInfoRequest['alarm_level'];
                    severity = listHostRaspProtectHistoryInfoRequest['severity'];
                    protectStatus = listHostRaspProtectHistoryInfoRequest['protect_status'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
                throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling listHostRaspProtectHistoryInfo.');
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listHostRaspProtectHistoryInfo.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listHostRaspProtectHistoryInfo.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listHostRaspProtectHistoryInfo.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listHostRaspProtectHistoryInfo.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (alarmLevel !== null && alarmLevel !== undefined) {
                localVarQueryParameter['alarm_level'] = alarmLevel;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (protectStatus !== null && protectStatus !== undefined) {
                localVarQueryParameter['protect_status'] = protectStatus;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostStatus(listHostStatusRequest?: ListHostStatusRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/host-management/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let version;
            
            let agentStatus;
            
            let detectResult;
            
            let hostName;
            
            let hostId;
            
            let hostStatus;
            
            let osType;
            
            let privateIp;
            
            let publicIp;
            
            let ipAddr;
            
            let protectStatus;
            
            let groupId;
            
            let groupName;
            
            let region;
            
            let policyGroupId;
            
            let policyGroupName;
            
            let chargingMode;
            
            let refresh;
            
            let aboveVersion;
            
            let outsideHost;
            
            let assetValue;
            
            let label;
            
            let serverGroup;
            
            let limit;
            
            let offset;

            if (listHostStatusRequest !== null && listHostStatusRequest !== undefined) {
                if (listHostStatusRequest instanceof ListHostStatusRequest) {
                    enterpriseProjectId = listHostStatusRequest.enterpriseProjectId;
                    version = listHostStatusRequest.version;
                    agentStatus = listHostStatusRequest.agentStatus;
                    detectResult = listHostStatusRequest.detectResult;
                    hostName = listHostStatusRequest.hostName;
                    hostId = listHostStatusRequest.hostId;
                    hostStatus = listHostStatusRequest.hostStatus;
                    osType = listHostStatusRequest.osType;
                    privateIp = listHostStatusRequest.privateIp;
                    publicIp = listHostStatusRequest.publicIp;
                    ipAddr = listHostStatusRequest.ipAddr;
                    protectStatus = listHostStatusRequest.protectStatus;
                    groupId = listHostStatusRequest.groupId;
                    groupName = listHostStatusRequest.groupName;
                    region = listHostStatusRequest.region;
                    policyGroupId = listHostStatusRequest.policyGroupId;
                    policyGroupName = listHostStatusRequest.policyGroupName;
                    chargingMode = listHostStatusRequest.chargingMode;
                    refresh = listHostStatusRequest.refresh;
                    aboveVersion = listHostStatusRequest.aboveVersion;
                    outsideHost = listHostStatusRequest.outsideHost;
                    assetValue = listHostStatusRequest.assetValue;
                    label = listHostStatusRequest.label;
                    serverGroup = listHostStatusRequest.serverGroup;
                    limit = listHostStatusRequest.limit;
                    offset = listHostStatusRequest.offset;
                } else {
                    enterpriseProjectId = listHostStatusRequest['enterprise_project_id'];
                    version = listHostStatusRequest['version'];
                    agentStatus = listHostStatusRequest['agent_status'];
                    detectResult = listHostStatusRequest['detect_result'];
                    hostName = listHostStatusRequest['host_name'];
                    hostId = listHostStatusRequest['host_id'];
                    hostStatus = listHostStatusRequest['host_status'];
                    osType = listHostStatusRequest['os_type'];
                    privateIp = listHostStatusRequest['private_ip'];
                    publicIp = listHostStatusRequest['public_ip'];
                    ipAddr = listHostStatusRequest['ip_addr'];
                    protectStatus = listHostStatusRequest['protect_status'];
                    groupId = listHostStatusRequest['group_id'];
                    groupName = listHostStatusRequest['group_name'];
                    region = listHostStatusRequest['region'];
                    policyGroupId = listHostStatusRequest['policy_group_id'];
                    policyGroupName = listHostStatusRequest['policy_group_name'];
                    chargingMode = listHostStatusRequest['charging_mode'];
                    refresh = listHostStatusRequest['refresh'];
                    aboveVersion = listHostStatusRequest['above_version'];
                    outsideHost = listHostStatusRequest['outside_host'];
                    assetValue = listHostStatusRequest['asset_value'];
                    label = listHostStatusRequest['label'];
                    serverGroup = listHostStatusRequest['server_group'];
                    limit = listHostStatusRequest['limit'];
                    offset = listHostStatusRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (agentStatus !== null && agentStatus !== undefined) {
                localVarQueryParameter['agent_status'] = agentStatus;
            }
            if (detectResult !== null && detectResult !== undefined) {
                localVarQueryParameter['detect_result'] = detectResult;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostStatus !== null && hostStatus !== undefined) {
                localVarQueryParameter['host_status'] = hostStatus;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (ipAddr !== null && ipAddr !== undefined) {
                localVarQueryParameter['ip_addr'] = ipAddr;
            }
            if (protectStatus !== null && protectStatus !== undefined) {
                localVarQueryParameter['protect_status'] = protectStatus;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (policyGroupId !== null && policyGroupId !== undefined) {
                localVarQueryParameter['policy_group_id'] = policyGroupId;
            }
            if (policyGroupName !== null && policyGroupName !== undefined) {
                localVarQueryParameter['policy_group_name'] = policyGroupName;
            }
            if (chargingMode !== null && chargingMode !== undefined) {
                localVarQueryParameter['charging_mode'] = chargingMode;
            }
            if (refresh !== null && refresh !== undefined) {
                localVarQueryParameter['refresh'] = refresh;
            }
            if (aboveVersion !== null && aboveVersion !== undefined) {
                localVarQueryParameter['above_version'] = aboveVersion;
            }
            if (outsideHost !== null && outsideHost !== undefined) {
                localVarQueryParameter['outside_host'] = outsideHost;
            }
            if (assetValue !== null && assetValue !== undefined) {
                localVarQueryParameter['asset_value'] = assetValue;
            }
            if (label !== null && label !== undefined) {
                localVarQueryParameter['label'] = label;
            }
            if (serverGroup !== null && serverGroup !== undefined) {
                localVarQueryParameter['server_group'] = serverGroup;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单台服务器漏洞信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostVuls(listHostVulsRequest?: ListHostVulsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vulnerability/host/{host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostId;
            
            let enterpriseProjectId;
            
            let type;
            
            let vulName;
            
            let limit;
            
            let offset;
            
            let handleStatus;
            
            let status;

            if (listHostVulsRequest !== null && listHostVulsRequest !== undefined) {
                if (listHostVulsRequest instanceof ListHostVulsRequest) {
                    hostId = listHostVulsRequest.hostId;
                    enterpriseProjectId = listHostVulsRequest.enterpriseProjectId;
                    type = listHostVulsRequest.type;
                    vulName = listHostVulsRequest.vulName;
                    limit = listHostVulsRequest.limit;
                    offset = listHostVulsRequest.offset;
                    handleStatus = listHostVulsRequest.handleStatus;
                    status = listHostVulsRequest.status;
                } else {
                    hostId = listHostVulsRequest['host_id'];
                    enterpriseProjectId = listHostVulsRequest['enterprise_project_id'];
                    type = listHostVulsRequest['type'];
                    vulName = listHostVulsRequest['vul_name'];
                    limit = listHostVulsRequest['limit'];
                    offset = listHostVulsRequest['offset'];
                    handleStatus = listHostVulsRequest['handle_status'];
                    status = listHostVulsRequest['status'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling listHostVuls.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (vulName !== null && vulName !== undefined) {
                localVarQueryParameter['vul_name'] = vulName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (handleStatus !== null && handleStatus !== undefined) {
                localVarQueryParameter['handle_status'] = handleStatus;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定中间件的服务器列表，通过传入中间件名称参数，返回对应的中间件服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJarPackageHostInfo(listJarPackageHostInfoRequest?: ListJarPackageHostInfoRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/midwares/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fileName;
            
            let enterpriseProjectId;
            
            let category;
            
            let hostName;
            
            let hostIp;
            
            let limit;
            
            let offset;

            if (listJarPackageHostInfoRequest !== null && listJarPackageHostInfoRequest !== undefined) {
                if (listJarPackageHostInfoRequest instanceof ListJarPackageHostInfoRequest) {
                    fileName = listJarPackageHostInfoRequest.fileName;
                    enterpriseProjectId = listJarPackageHostInfoRequest.enterpriseProjectId;
                    category = listJarPackageHostInfoRequest.category;
                    hostName = listJarPackageHostInfoRequest.hostName;
                    hostIp = listJarPackageHostInfoRequest.hostIp;
                    limit = listJarPackageHostInfoRequest.limit;
                    offset = listJarPackageHostInfoRequest.offset;
                } else {
                    fileName = listJarPackageHostInfoRequest['file_name'];
                    enterpriseProjectId = listJarPackageHostInfoRequest['enterprise_project_id'];
                    category = listJarPackageHostInfoRequest['category'];
                    hostName = listJarPackageHostInfoRequest['host_name'];
                    hostIp = listJarPackageHostInfoRequest['host_ip'];
                    limit = listJarPackageHostInfoRequest['limit'];
                    offset = listJarPackageHostInfoRequest['offset'];
                }
            }

        
            if (fileName === null || fileName === undefined) {
                throw new RequiredError('fileName','Required parameter fileName was null or undefined when calling listJarPackageHostInfo.');
            }
            if (fileName !== null && fileName !== undefined) {
                localVarQueryParameter['file_name'] = fileName;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
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
         * 查询中间件列表，支持通过中间件名称查询对应的服务器树
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJarPackageStatistics(listJarPackageStatisticsRequest?: ListJarPackageStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/midwares",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let fileName;
            
            let category;
            
            let limit;
            
            let offset;

            if (listJarPackageStatisticsRequest !== null && listJarPackageStatisticsRequest !== undefined) {
                if (listJarPackageStatisticsRequest instanceof ListJarPackageStatisticsRequest) {
                    enterpriseProjectId = listJarPackageStatisticsRequest.enterpriseProjectId;
                    fileName = listJarPackageStatisticsRequest.fileName;
                    category = listJarPackageStatisticsRequest.category;
                    limit = listJarPackageStatisticsRequest.limit;
                    offset = listJarPackageStatisticsRequest.offset;
                } else {
                    enterpriseProjectId = listJarPackageStatisticsRequest['enterprise_project_id'];
                    fileName = listJarPackageStatisticsRequest['file_name'];
                    category = listJarPackageStatisticsRequest['category'];
                    limit = listJarPackageStatisticsRequest['limit'];
                    offset = listJarPackageStatisticsRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (fileName !== null && fileName !== undefined) {
                localVarQueryParameter['file_name'] = fileName;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
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
         * 查询口令复杂度策略检测报告
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPasswordComplexity(listPasswordComplexityRequest?: ListPasswordComplexityRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/baseline/password-complexity",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let hostIp;
            
            let hostId;
            
            let limit;
            
            let offset;

            if (listPasswordComplexityRequest !== null && listPasswordComplexityRequest !== undefined) {
                if (listPasswordComplexityRequest instanceof ListPasswordComplexityRequest) {
                    enterpriseProjectId = listPasswordComplexityRequest.enterpriseProjectId;
                    hostName = listPasswordComplexityRequest.hostName;
                    hostIp = listPasswordComplexityRequest.hostIp;
                    hostId = listPasswordComplexityRequest.hostId;
                    limit = listPasswordComplexityRequest.limit;
                    offset = listPasswordComplexityRequest.offset;
                } else {
                    enterpriseProjectId = listPasswordComplexityRequest['enterprise_project_id'];
                    hostName = listPasswordComplexityRequest['host_name'];
                    hostIp = listPasswordComplexityRequest['host_ip'];
                    hostId = listPasswordComplexityRequest['host_id'];
                    limit = listPasswordComplexityRequest['limit'];
                    offset = listPasswordComplexityRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
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
         * 查询策略组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyGroup(listPolicyGroupRequest?: ListPolicyGroupRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/policy/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let groupName;
            
            let offset;
            
            let limit;

            if (listPolicyGroupRequest !== null && listPolicyGroupRequest !== undefined) {
                if (listPolicyGroupRequest instanceof ListPolicyGroupRequest) {
                    region = listPolicyGroupRequest.region;
                    enterpriseProjectId = listPolicyGroupRequest.enterpriseProjectId;
                    groupName = listPolicyGroupRequest.groupName;
                    offset = listPolicyGroupRequest.offset;
                    limit = listPolicyGroupRequest.limit;
                } else {
                    region = listPolicyGroupRequest['region'];
                    enterpriseProjectId = listPolicyGroupRequest['enterprise_project_id'];
                    groupName = listPolicyGroupRequest['group_name'];
                    offset = listPolicyGroupRequest['offset'];
                    limit = listPolicyGroupRequest['limit'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询开放端口列表，支持通过传入端口或协议类型查询服务器数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPortStatistics(listPortStatisticsRequest?: ListPortStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/port/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let port;
            
            let type;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;

            if (listPortStatisticsRequest !== null && listPortStatisticsRequest !== undefined) {
                if (listPortStatisticsRequest instanceof ListPortStatisticsRequest) {
                    port = listPortStatisticsRequest.port;
                    type = listPortStatisticsRequest.type;
                    enterpriseProjectId = listPortStatisticsRequest.enterpriseProjectId;
                    limit = listPortStatisticsRequest.limit;
                    offset = listPortStatisticsRequest.offset;
                } else {
                    port = listPortStatisticsRequest['port'];
                    type = listPortStatisticsRequest['type'];
                    enterpriseProjectId = listPortStatisticsRequest['enterprise_project_id'];
                    limit = listPortStatisticsRequest['limit'];
                    offset = listPortStatisticsRequest['offset'];
                }
            }

        
            if (port !== null && port !== undefined) {
                localVarQueryParameter['port'] = port;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
         * 查询单服务器的开放端口列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPorts(listPortsRequest?: ListPortsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/ports",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostId;
            
            let hostName;
            
            let hostIp;
            
            let port;
            
            let type;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;

            if (listPortsRequest !== null && listPortsRequest !== undefined) {
                if (listPortsRequest instanceof ListPortsRequest) {
                    hostId = listPortsRequest.hostId;
                    hostName = listPortsRequest.hostName;
                    hostIp = listPortsRequest.hostIp;
                    port = listPortsRequest.port;
                    type = listPortsRequest.type;
                    enterpriseProjectId = listPortsRequest.enterpriseProjectId;
                    limit = listPortsRequest.limit;
                    offset = listPortsRequest.offset;
                } else {
                    hostId = listPortsRequest['host_id'];
                    hostName = listPortsRequest['host_name'];
                    hostIp = listPortsRequest['host_ip'];
                    port = listPortsRequest['port'];
                    type = listPortsRequest['type'];
                    enterpriseProjectId = listPortsRequest['enterprise_project_id'];
                    limit = listPortsRequest['limit'];
                    offset = listPortsRequest['offset'];
                }
            }

        
            if (hostId === null || hostId === undefined) {
                throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling listPorts.');
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (port !== null && port !== undefined) {
                localVarQueryParameter['port'] = port;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
         * 查询进程列表，通过传入进程路径参数查询对应的服务器数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProcessStatistics(listProcessStatisticsRequest?: ListProcessStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/process/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let path;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;

            if (listProcessStatisticsRequest !== null && listProcessStatisticsRequest !== undefined) {
                if (listProcessStatisticsRequest instanceof ListProcessStatisticsRequest) {
                    path = listProcessStatisticsRequest.path;
                    enterpriseProjectId = listProcessStatisticsRequest.enterpriseProjectId;
                    limit = listProcessStatisticsRequest.limit;
                    offset = listProcessStatisticsRequest.offset;
                } else {
                    path = listProcessStatisticsRequest['path'];
                    enterpriseProjectId = listProcessStatisticsRequest['enterprise_project_id'];
                    limit = listProcessStatisticsRequest['limit'];
                    offset = listProcessStatisticsRequest['offset'];
                }
            }

        
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
         * 查询防护策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProtectionPolicy(listProtectionPolicyRequest?: ListProtectionPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/ransomware/protection/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;
            
            let policyName;
            
            let protectPolicyId;
            
            let operatingSystem;

            if (listProtectionPolicyRequest !== null && listProtectionPolicyRequest !== undefined) {
                if (listProtectionPolicyRequest instanceof ListProtectionPolicyRequest) {
                    region = listProtectionPolicyRequest.region;
                    enterpriseProjectId = listProtectionPolicyRequest.enterpriseProjectId;
                    offset = listProtectionPolicyRequest.offset;
                    limit = listProtectionPolicyRequest.limit;
                    policyName = listProtectionPolicyRequest.policyName;
                    protectPolicyId = listProtectionPolicyRequest.protectPolicyId;
                    operatingSystem = listProtectionPolicyRequest.operatingSystem;
                } else {
                    region = listProtectionPolicyRequest['region'];
                    enterpriseProjectId = listProtectionPolicyRequest['enterprise_project_id'];
                    offset = listProtectionPolicyRequest['offset'];
                    limit = listProtectionPolicyRequest['limit'];
                    policyName = listProtectionPolicyRequest['policy_name'];
                    protectPolicyId = listProtectionPolicyRequest['protect_policy_id'];
                    operatingSystem = listProtectionPolicyRequest['operating_system'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
            if (protectPolicyId !== null && protectPolicyId !== undefined) {
                localVarQueryParameter['protect_policy_id'] = protectPolicyId;
            }
            if (operatingSystem !== null && operatingSystem !== undefined) {
                localVarQueryParameter['operating_system'] = operatingSystem;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询勒索防护服务器列表，与云备份服务配合使用。因此使用勒索相关接口之前确保该局点有云备份服务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProtectionServer(listProtectionServerRequest?: ListProtectionServerRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/ransomware/server",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;
            
            let hostName;
            
            let osType;
            
            let hostIp;
            
            let hostStatus;
            
            let lastDays;

            if (listProtectionServerRequest !== null && listProtectionServerRequest !== undefined) {
                if (listProtectionServerRequest instanceof ListProtectionServerRequest) {
                    region = listProtectionServerRequest.region;
                    enterpriseProjectId = listProtectionServerRequest.enterpriseProjectId;
                    offset = listProtectionServerRequest.offset;
                    limit = listProtectionServerRequest.limit;
                    hostName = listProtectionServerRequest.hostName;
                    osType = listProtectionServerRequest.osType;
                    hostIp = listProtectionServerRequest.hostIp;
                    hostStatus = listProtectionServerRequest.hostStatus;
                    lastDays = listProtectionServerRequest.lastDays;
                } else {
                    region = listProtectionServerRequest['region'];
                    enterpriseProjectId = listProtectionServerRequest['enterprise_project_id'];
                    offset = listProtectionServerRequest['offset'];
                    limit = listProtectionServerRequest['limit'];
                    hostName = listProtectionServerRequest['host_name'];
                    osType = listProtectionServerRequest['os_type'];
                    hostIp = listProtectionServerRequest['host_ip'];
                    hostStatus = listProtectionServerRequest['host_status'];
                    lastDays = listProtectionServerRequest['last_days'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (hostStatus !== null && hostStatus !== undefined) {
                localVarQueryParameter['host_status'] = hostStatus;
            }
            if (lastDays !== null && lastDays !== undefined) {
                localVarQueryParameter['last_days'] = lastDays;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询配额详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotasDetail(listQuotasDetailRequest?: ListQuotasDetailRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/billing/quotas-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let version;
            
            let category;
            
            let quotaStatus;
            
            let usedStatus;
            
            let hostName;
            
            let resourceId;
            
            let chargingMode;
            
            let limit;
            
            let offset;

            if (listQuotasDetailRequest !== null && listQuotasDetailRequest !== undefined) {
                if (listQuotasDetailRequest instanceof ListQuotasDetailRequest) {
                    region = listQuotasDetailRequest.region;
                    enterpriseProjectId = listQuotasDetailRequest.enterpriseProjectId;
                    version = listQuotasDetailRequest.version;
                    category = listQuotasDetailRequest.category;
                    quotaStatus = listQuotasDetailRequest.quotaStatus;
                    usedStatus = listQuotasDetailRequest.usedStatus;
                    hostName = listQuotasDetailRequest.hostName;
                    resourceId = listQuotasDetailRequest.resourceId;
                    chargingMode = listQuotasDetailRequest.chargingMode;
                    limit = listQuotasDetailRequest.limit;
                    offset = listQuotasDetailRequest.offset;
                } else {
                    region = listQuotasDetailRequest['region'];
                    enterpriseProjectId = listQuotasDetailRequest['enterprise_project_id'];
                    version = listQuotasDetailRequest['version'];
                    category = listQuotasDetailRequest['category'];
                    quotaStatus = listQuotasDetailRequest['quota_status'];
                    usedStatus = listQuotasDetailRequest['used_status'];
                    hostName = listQuotasDetailRequest['host_name'];
                    resourceId = listQuotasDetailRequest['resource_id'];
                    chargingMode = listQuotasDetailRequest['charging_mode'];
                    limit = listQuotasDetailRequest['limit'];
                    offset = listQuotasDetailRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (quotaStatus !== null && quotaStatus !== undefined) {
                localVarQueryParameter['quota_status'] = quotaStatus;
            }
            if (usedStatus !== null && usedStatus !== undefined) {
                localVarQueryParameter['used_status'] = usedStatus;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (chargingMode !== null && chargingMode !== undefined) {
                localVarQueryParameter['charging_mode'] = chargingMode;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定安全配置项的检查项列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRiskConfigCheckRules(listRiskConfigCheckRulesRequest?: ListRiskConfigCheckRulesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/baseline/risk-config/{check_name}/check-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let checkName;
            
            let standard;
            
            let enterpriseProjectId;
            
            let resultType;
            
            let checkRuleName;
            
            let severity;
            
            let hostId;
            
            let limit;
            
            let offset;

            if (listRiskConfigCheckRulesRequest !== null && listRiskConfigCheckRulesRequest !== undefined) {
                if (listRiskConfigCheckRulesRequest instanceof ListRiskConfigCheckRulesRequest) {
                    checkName = listRiskConfigCheckRulesRequest.checkName;
                    standard = listRiskConfigCheckRulesRequest.standard;
                    enterpriseProjectId = listRiskConfigCheckRulesRequest.enterpriseProjectId;
                    resultType = listRiskConfigCheckRulesRequest.resultType;
                    checkRuleName = listRiskConfigCheckRulesRequest.checkRuleName;
                    severity = listRiskConfigCheckRulesRequest.severity;
                    hostId = listRiskConfigCheckRulesRequest.hostId;
                    limit = listRiskConfigCheckRulesRequest.limit;
                    offset = listRiskConfigCheckRulesRequest.offset;
                } else {
                    checkName = listRiskConfigCheckRulesRequest['check_name'];
                    standard = listRiskConfigCheckRulesRequest['standard'];
                    enterpriseProjectId = listRiskConfigCheckRulesRequest['enterprise_project_id'];
                    resultType = listRiskConfigCheckRulesRequest['result_type'];
                    checkRuleName = listRiskConfigCheckRulesRequest['check_rule_name'];
                    severity = listRiskConfigCheckRulesRequest['severity'];
                    hostId = listRiskConfigCheckRulesRequest['host_id'];
                    limit = listRiskConfigCheckRulesRequest['limit'];
                    offset = listRiskConfigCheckRulesRequest['offset'];
                }
            }

        
            if (checkName === null || checkName === undefined) {
            throw new RequiredError('checkName','Required parameter checkName was null or undefined when calling listRiskConfigCheckRules.');
            }
            if (standard === null || standard === undefined) {
                throw new RequiredError('standard','Required parameter standard was null or undefined when calling listRiskConfigCheckRules.');
            }
            if (standard !== null && standard !== undefined) {
                localVarQueryParameter['standard'] = standard;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (resultType !== null && resultType !== undefined) {
                localVarQueryParameter['result_type'] = resultType;
            }
            if (checkRuleName !== null && checkRuleName !== undefined) {
                localVarQueryParameter['check_rule_name'] = checkRuleName;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'check_name': checkName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定安全配置项的受影响服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRiskConfigHosts(listRiskConfigHostsRequest?: ListRiskConfigHostsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/baseline/risk-config/{check_name}/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let checkName;
            
            let standard;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let hostIp;
            
            let limit;
            
            let offset;

            if (listRiskConfigHostsRequest !== null && listRiskConfigHostsRequest !== undefined) {
                if (listRiskConfigHostsRequest instanceof ListRiskConfigHostsRequest) {
                    checkName = listRiskConfigHostsRequest.checkName;
                    standard = listRiskConfigHostsRequest.standard;
                    enterpriseProjectId = listRiskConfigHostsRequest.enterpriseProjectId;
                    hostName = listRiskConfigHostsRequest.hostName;
                    hostIp = listRiskConfigHostsRequest.hostIp;
                    limit = listRiskConfigHostsRequest.limit;
                    offset = listRiskConfigHostsRequest.offset;
                } else {
                    checkName = listRiskConfigHostsRequest['check_name'];
                    standard = listRiskConfigHostsRequest['standard'];
                    enterpriseProjectId = listRiskConfigHostsRequest['enterprise_project_id'];
                    hostName = listRiskConfigHostsRequest['host_name'];
                    hostIp = listRiskConfigHostsRequest['host_ip'];
                    limit = listRiskConfigHostsRequest['limit'];
                    offset = listRiskConfigHostsRequest['offset'];
                }
            }

        
            if (checkName === null || checkName === undefined) {
            throw new RequiredError('checkName','Required parameter checkName was null or undefined when calling listRiskConfigHosts.');
            }
            if (standard === null || standard === undefined) {
                throw new RequiredError('standard','Required parameter standard was null or undefined when calling listRiskConfigHosts.');
            }
            if (standard !== null && standard !== undefined) {
                localVarQueryParameter['standard'] = standard;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'check_name': checkName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户的服务器安全配置检测结果列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRiskConfigs(listRiskConfigsRequest?: ListRiskConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/baseline/risk-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let checkName;
            
            let groupId;
            
            let severity;
            
            let standard;
            
            let hostId;
            
            let limit;
            
            let offset;

            if (listRiskConfigsRequest !== null && listRiskConfigsRequest !== undefined) {
                if (listRiskConfigsRequest instanceof ListRiskConfigsRequest) {
                    enterpriseProjectId = listRiskConfigsRequest.enterpriseProjectId;
                    checkName = listRiskConfigsRequest.checkName;
                    groupId = listRiskConfigsRequest.groupId;
                    severity = listRiskConfigsRequest.severity;
                    standard = listRiskConfigsRequest.standard;
                    hostId = listRiskConfigsRequest.hostId;
                    limit = listRiskConfigsRequest.limit;
                    offset = listRiskConfigsRequest.offset;
                } else {
                    enterpriseProjectId = listRiskConfigsRequest['enterprise_project_id'];
                    checkName = listRiskConfigsRequest['check_name'];
                    groupId = listRiskConfigsRequest['group_id'];
                    severity = listRiskConfigsRequest['severity'];
                    standard = listRiskConfigsRequest['standard'];
                    hostId = listRiskConfigsRequest['host_id'];
                    limit = listRiskConfigsRequest['limit'];
                    offset = listRiskConfigsRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (checkName !== null && checkName !== undefined) {
                localVarQueryParameter['check_name'] = checkName;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (standard !== null && standard !== undefined) {
                localVarQueryParameter['standard'] = standard;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
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
         * 查入侵事件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityEvents(listSecurityEventsRequest?: ListSecurityEventsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/event/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let category;
            
            let enterpriseProjectId;
            
            let lastDays;
            
            let hostName;
            
            let hostId;
            
            let privateIp;
            
            let containerName;
            
            let offset;
            
            let limit;
            
            let eventTypes;
            
            let handleStatus;
            
            let severity;
            
            let beginTime;
            
            let endTime;
            
            let eventClassIds;

            if (listSecurityEventsRequest !== null && listSecurityEventsRequest !== undefined) {
                if (listSecurityEventsRequest instanceof ListSecurityEventsRequest) {
                    region = listSecurityEventsRequest.region;
                    category = listSecurityEventsRequest.category;
                    enterpriseProjectId = listSecurityEventsRequest.enterpriseProjectId;
                    lastDays = listSecurityEventsRequest.lastDays;
                    hostName = listSecurityEventsRequest.hostName;
                    hostId = listSecurityEventsRequest.hostId;
                    privateIp = listSecurityEventsRequest.privateIp;
                    containerName = listSecurityEventsRequest.containerName;
                    offset = listSecurityEventsRequest.offset;
                    limit = listSecurityEventsRequest.limit;
                    eventTypes = listSecurityEventsRequest.eventTypes;
                    handleStatus = listSecurityEventsRequest.handleStatus;
                    severity = listSecurityEventsRequest.severity;
                    beginTime = listSecurityEventsRequest.beginTime;
                    endTime = listSecurityEventsRequest.endTime;
                    eventClassIds = listSecurityEventsRequest.eventClassIds;
                } else {
                    region = listSecurityEventsRequest['region'];
                    category = listSecurityEventsRequest['category'];
                    enterpriseProjectId = listSecurityEventsRequest['enterprise_project_id'];
                    lastDays = listSecurityEventsRequest['last_days'];
                    hostName = listSecurityEventsRequest['host_name'];
                    hostId = listSecurityEventsRequest['host_id'];
                    privateIp = listSecurityEventsRequest['private_ip'];
                    containerName = listSecurityEventsRequest['container_name'];
                    offset = listSecurityEventsRequest['offset'];
                    limit = listSecurityEventsRequest['limit'];
                    eventTypes = listSecurityEventsRequest['event_types'];
                    handleStatus = listSecurityEventsRequest['handle_status'];
                    severity = listSecurityEventsRequest['severity'];
                    beginTime = listSecurityEventsRequest['begin_time'];
                    endTime = listSecurityEventsRequest['end_time'];
                    eventClassIds = listSecurityEventsRequest['event_class_ids'];
                }
            }

        
            if (category === null || category === undefined) {
                throw new RequiredError('category','Required parameter category was null or undefined when calling listSecurityEvents.');
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (lastDays !== null && lastDays !== undefined) {
                localVarQueryParameter['last_days'] = lastDays;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (containerName !== null && containerName !== undefined) {
                localVarQueryParameter['container_name'] = containerName;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (eventTypes !== null && eventTypes !== undefined) {
                localVarQueryParameter['event_types'] = eventTypes;
            }
            if (handleStatus !== null && handleStatus !== undefined) {
                localVarQueryParameter['handle_status'] = handleStatus;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (eventClassIds !== null && eventClassIds !== undefined) {
                localVarQueryParameter['event_class_ids'] = eventClassIds;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取账户变动历史记录信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserChangeHistories(listUserChangeHistoriesRequest?: ListUserChangeHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/user/change-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userName;
            
            let hostId;
            
            let rootPermission;
            
            let hostName;
            
            let privateIp;
            
            let changeType;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;
            
            let startTime;
            
            let endTime;

            if (listUserChangeHistoriesRequest !== null && listUserChangeHistoriesRequest !== undefined) {
                if (listUserChangeHistoriesRequest instanceof ListUserChangeHistoriesRequest) {
                    userName = listUserChangeHistoriesRequest.userName;
                    hostId = listUserChangeHistoriesRequest.hostId;
                    rootPermission = listUserChangeHistoriesRequest.rootPermission;
                    hostName = listUserChangeHistoriesRequest.hostName;
                    privateIp = listUserChangeHistoriesRequest.privateIp;
                    changeType = listUserChangeHistoriesRequest.changeType;
                    limit = listUserChangeHistoriesRequest.limit;
                    offset = listUserChangeHistoriesRequest.offset;
                    enterpriseProjectId = listUserChangeHistoriesRequest.enterpriseProjectId;
                    startTime = listUserChangeHistoriesRequest.startTime;
                    endTime = listUserChangeHistoriesRequest.endTime;
                } else {
                    userName = listUserChangeHistoriesRequest['user_name'];
                    hostId = listUserChangeHistoriesRequest['host_id'];
                    rootPermission = listUserChangeHistoriesRequest['root_permission'];
                    hostName = listUserChangeHistoriesRequest['host_name'];
                    privateIp = listUserChangeHistoriesRequest['private_ip'];
                    changeType = listUserChangeHistoriesRequest['change_type'];
                    limit = listUserChangeHistoriesRequest['limit'];
                    offset = listUserChangeHistoriesRequest['offset'];
                    enterpriseProjectId = listUserChangeHistoriesRequest['enterprise_project_id'];
                    startTime = listUserChangeHistoriesRequest['start_time'];
                    endTime = listUserChangeHistoriesRequest['end_time'];
                }
            }

        
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (rootPermission !== null && rootPermission !== undefined) {
                localVarQueryParameter['root_permission'] = rootPermission;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (changeType !== null && changeType !== undefined) {
                localVarQueryParameter['change_type'] = changeType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询账号信息列表，支持通过传入账号名称参数查询对应的服务器数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserStatistics(listUserStatisticsRequest?: ListUserStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/user/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userName;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;

            if (listUserStatisticsRequest !== null && listUserStatisticsRequest !== undefined) {
                if (listUserStatisticsRequest instanceof ListUserStatisticsRequest) {
                    userName = listUserStatisticsRequest.userName;
                    enterpriseProjectId = listUserStatisticsRequest.enterpriseProjectId;
                    limit = listUserStatisticsRequest.limit;
                    offset = listUserStatisticsRequest.offset;
                } else {
                    userName = listUserStatisticsRequest['user_name'];
                    enterpriseProjectId = listUserStatisticsRequest['enterprise_project_id'];
                    limit = listUserStatisticsRequest['limit'];
                    offset = listUserStatisticsRequest['offset'];
                }
            }

        
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
         * 查询账号的服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUsers(listUsersRequest?: ListUsersRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let hostId;
            
            let userName;
            
            let hostName;
            
            let privateIp;
            
            let loginPermission;
            
            let rootPermission;
            
            let userGroup;
            
            let enterpriseProjectId;
            
            let limit;
            
            let offset;

            if (listUsersRequest !== null && listUsersRequest !== undefined) {
                if (listUsersRequest instanceof ListUsersRequest) {
                    hostId = listUsersRequest.hostId;
                    userName = listUsersRequest.userName;
                    hostName = listUsersRequest.hostName;
                    privateIp = listUsersRequest.privateIp;
                    loginPermission = listUsersRequest.loginPermission;
                    rootPermission = listUsersRequest.rootPermission;
                    userGroup = listUsersRequest.userGroup;
                    enterpriseProjectId = listUsersRequest.enterpriseProjectId;
                    limit = listUsersRequest.limit;
                    offset = listUsersRequest.offset;
                } else {
                    hostId = listUsersRequest['host_id'];
                    userName = listUsersRequest['user_name'];
                    hostName = listUsersRequest['host_name'];
                    privateIp = listUsersRequest['private_ip'];
                    loginPermission = listUsersRequest['login_permission'];
                    rootPermission = listUsersRequest['root_permission'];
                    userGroup = listUsersRequest['user_group'];
                    enterpriseProjectId = listUsersRequest['enterprise_project_id'];
                    limit = listUsersRequest['limit'];
                    offset = listUsersRequest['offset'];
                }
            }

        
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (loginPermission !== null && loginPermission !== undefined) {
                localVarQueryParameter['login_permission'] = loginPermission;
            }
            if (rootPermission !== null && rootPermission !== undefined) {
                localVarQueryParameter['root_permission'] = rootPermission;
            }
            if (userGroup !== null && userGroup !== undefined) {
                localVarQueryParameter['user_group'] = userGroup;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
         * 查询单个漏洞影响的云服务器信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVulHosts(listVulHostsRequest?: ListVulHostsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vulnerability/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vulId;
            
            let type;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let hostIp;
            
            let status;
            
            let limit;
            
            let offset;
            
            let assetValue;
            
            let groupName;
            
            let handleStatus;
            
            let severityLevel;
            
            let isAffectBusiness;

            if (listVulHostsRequest !== null && listVulHostsRequest !== undefined) {
                if (listVulHostsRequest instanceof ListVulHostsRequest) {
                    vulId = listVulHostsRequest.vulId;
                    type = listVulHostsRequest.type;
                    enterpriseProjectId = listVulHostsRequest.enterpriseProjectId;
                    hostName = listVulHostsRequest.hostName;
                    hostIp = listVulHostsRequest.hostIp;
                    status = listVulHostsRequest.status;
                    limit = listVulHostsRequest.limit;
                    offset = listVulHostsRequest.offset;
                    assetValue = listVulHostsRequest.assetValue;
                    groupName = listVulHostsRequest.groupName;
                    handleStatus = listVulHostsRequest.handleStatus;
                    severityLevel = listVulHostsRequest.severityLevel;
                    isAffectBusiness = listVulHostsRequest.isAffectBusiness;
                } else {
                    vulId = listVulHostsRequest['vul_id'];
                    type = listVulHostsRequest['type'];
                    enterpriseProjectId = listVulHostsRequest['enterprise_project_id'];
                    hostName = listVulHostsRequest['host_name'];
                    hostIp = listVulHostsRequest['host_ip'];
                    status = listVulHostsRequest['status'];
                    limit = listVulHostsRequest['limit'];
                    offset = listVulHostsRequest['offset'];
                    assetValue = listVulHostsRequest['asset_value'];
                    groupName = listVulHostsRequest['group_name'];
                    handleStatus = listVulHostsRequest['handle_status'];
                    severityLevel = listVulHostsRequest['severity_level'];
                    isAffectBusiness = listVulHostsRequest['is_affect_business'];
                }
            }

        
            if (vulId === null || vulId === undefined) {
                throw new RequiredError('vulId','Required parameter vulId was null or undefined when calling listVulHosts.');
            }
            if (vulId !== null && vulId !== undefined) {
                localVarQueryParameter['vul_id'] = vulId;
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listVulHosts.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (assetValue !== null && assetValue !== undefined) {
                localVarQueryParameter['asset_value'] = assetValue;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (handleStatus !== null && handleStatus !== undefined) {
                localVarQueryParameter['handle_status'] = handleStatus;
            }
            if (severityLevel !== null && severityLevel !== undefined) {
                localVarQueryParameter['severity_level'] = severityLevel;
            }
            if (isAffectBusiness !== null && isAffectBusiness !== undefined) {
                localVarQueryParameter['is_affect_business'] = isAffectBusiness;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询漏洞列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVulnerabilities(listVulnerabilitiesRequest?: ListVulnerabilitiesRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/vulnerability/vulnerabilities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let type;
            
            let vulId;
            
            let vulName;
            
            let limit;
            
            let offset;
            
            let repairPriority;
            
            let handleStatus;
            
            let cveId;
            
            let labelList;
            
            let status;
            
            let assetValue;
            
            let groupName;

            if (listVulnerabilitiesRequest !== null && listVulnerabilitiesRequest !== undefined) {
                if (listVulnerabilitiesRequest instanceof ListVulnerabilitiesRequest) {
                    enterpriseProjectId = listVulnerabilitiesRequest.enterpriseProjectId;
                    type = listVulnerabilitiesRequest.type;
                    vulId = listVulnerabilitiesRequest.vulId;
                    vulName = listVulnerabilitiesRequest.vulName;
                    limit = listVulnerabilitiesRequest.limit;
                    offset = listVulnerabilitiesRequest.offset;
                    repairPriority = listVulnerabilitiesRequest.repairPriority;
                    handleStatus = listVulnerabilitiesRequest.handleStatus;
                    cveId = listVulnerabilitiesRequest.cveId;
                    labelList = listVulnerabilitiesRequest.labelList;
                    status = listVulnerabilitiesRequest.status;
                    assetValue = listVulnerabilitiesRequest.assetValue;
                    groupName = listVulnerabilitiesRequest.groupName;
                } else {
                    enterpriseProjectId = listVulnerabilitiesRequest['enterprise_project_id'];
                    type = listVulnerabilitiesRequest['type'];
                    vulId = listVulnerabilitiesRequest['vul_id'];
                    vulName = listVulnerabilitiesRequest['vul_name'];
                    limit = listVulnerabilitiesRequest['limit'];
                    offset = listVulnerabilitiesRequest['offset'];
                    repairPriority = listVulnerabilitiesRequest['repair_priority'];
                    handleStatus = listVulnerabilitiesRequest['handle_status'];
                    cveId = listVulnerabilitiesRequest['cve_id'];
                    labelList = listVulnerabilitiesRequest['label_list'];
                    status = listVulnerabilitiesRequest['status'];
                    assetValue = listVulnerabilitiesRequest['asset_value'];
                    groupName = listVulnerabilitiesRequest['group_name'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (vulId !== null && vulId !== undefined) {
                localVarQueryParameter['vul_id'] = vulId;
            }
            if (vulName !== null && vulName !== undefined) {
                localVarQueryParameter['vul_name'] = vulName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (repairPriority !== null && repairPriority !== undefined) {
                localVarQueryParameter['repair_priority'] = repairPriority;
            }
            if (handleStatus !== null && handleStatus !== undefined) {
                localVarQueryParameter['handle_status'] = handleStatus;
            }
            if (cveId !== null && cveId !== undefined) {
                localVarQueryParameter['cve_id'] = cveId;
            }
            if (labelList !== null && labelList !== undefined) {
                localVarQueryParameter['label_list'] = labelList;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (assetValue !== null && assetValue !== undefined) {
                localVarQueryParameter['asset_value'] = assetValue;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弱口令检测结果列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWeakPasswordUsers(listWeakPasswordUsersRequest?: ListWeakPasswordUsersRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/baseline/weak-password-users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let hostIp;
            
            let userName;
            
            let hostId;
            
            let limit;
            
            let offset;

            if (listWeakPasswordUsersRequest !== null && listWeakPasswordUsersRequest !== undefined) {
                if (listWeakPasswordUsersRequest instanceof ListWeakPasswordUsersRequest) {
                    enterpriseProjectId = listWeakPasswordUsersRequest.enterpriseProjectId;
                    hostName = listWeakPasswordUsersRequest.hostName;
                    hostIp = listWeakPasswordUsersRequest.hostIp;
                    userName = listWeakPasswordUsersRequest.userName;
                    hostId = listWeakPasswordUsersRequest.hostId;
                    limit = listWeakPasswordUsersRequest.limit;
                    offset = listWeakPasswordUsersRequest.offset;
                } else {
                    enterpriseProjectId = listWeakPasswordUsersRequest['enterprise_project_id'];
                    hostName = listWeakPasswordUsersRequest['host_name'];
                    hostIp = listWeakPasswordUsersRequest['host_ip'];
                    userName = listWeakPasswordUsersRequest['user_name'];
                    hostId = listWeakPasswordUsersRequest['host_id'];
                    limit = listWeakPasswordUsersRequest['limit'];
                    offset = listWeakPasswordUsersRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostIp !== null && hostIp !== undefined) {
                localVarQueryParameter['host_ip'] = hostIp;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
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
         * 查询防护列表：查询网页防篡改主机防护状态列表信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWtpProtectHost(listWtpProtectHostRequest?: ListWtpProtectHostRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/webtamper/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let hostName;
            
            let hostId;
            
            let publicIp;
            
            let privateIp;
            
            let groupName;
            
            let osType;
            
            let protectStatus;
            
            let agentStatus;
            
            let limit;
            
            let offset;

            if (listWtpProtectHostRequest !== null && listWtpProtectHostRequest !== undefined) {
                if (listWtpProtectHostRequest instanceof ListWtpProtectHostRequest) {
                    region = listWtpProtectHostRequest.region;
                    enterpriseProjectId = listWtpProtectHostRequest.enterpriseProjectId;
                    hostName = listWtpProtectHostRequest.hostName;
                    hostId = listWtpProtectHostRequest.hostId;
                    publicIp = listWtpProtectHostRequest.publicIp;
                    privateIp = listWtpProtectHostRequest.privateIp;
                    groupName = listWtpProtectHostRequest.groupName;
                    osType = listWtpProtectHostRequest.osType;
                    protectStatus = listWtpProtectHostRequest.protectStatus;
                    agentStatus = listWtpProtectHostRequest.agentStatus;
                    limit = listWtpProtectHostRequest.limit;
                    offset = listWtpProtectHostRequest.offset;
                } else {
                    region = listWtpProtectHostRequest['region'];
                    enterpriseProjectId = listWtpProtectHostRequest['enterprise_project_id'];
                    hostName = listWtpProtectHostRequest['host_name'];
                    hostId = listWtpProtectHostRequest['host_id'];
                    publicIp = listWtpProtectHostRequest['public_ip'];
                    privateIp = listWtpProtectHostRequest['private_ip'];
                    groupName = listWtpProtectHostRequest['group_name'];
                    osType = listWtpProtectHostRequest['os_type'];
                    protectStatus = listWtpProtectHostRequest['protect_status'];
                    agentStatus = listWtpProtectHostRequest['agent_status'];
                    limit = listWtpProtectHostRequest['limit'];
                    offset = listWtpProtectHostRequest['offset'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostName !== null && hostName !== undefined) {
                localVarQueryParameter['host_name'] = hostName;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (publicIp !== null && publicIp !== undefined) {
                localVarQueryParameter['public_ip'] = publicIp;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }
            if (protectStatus !== null && protectStatus !== undefined) {
                localVarQueryParameter['protect_status'] = protectStatus;
            }
            if (agentStatus !== null && agentStatus !== undefined) {
                localVarQueryParameter['agent_status'] = agentStatus;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启/关闭动态网页防篡改防护，下发/清空动态网页防篡改策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setRaspSwitch(setRaspSwitchRequest?: SetRaspSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/webtamper/rasp/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (setRaspSwitchRequest !== null && setRaspSwitchRequest !== undefined) {
                if (setRaspSwitchRequest instanceof SetRaspSwitchRequest) {
                    region = setRaspSwitchRequest.region;
                    body = setRaspSwitchRequest.body
                    enterpriseProjectId = setRaspSwitchRequest.enterpriseProjectId;
                } else {
                    region = setRaspSwitchRequest['region'];
                    body = setRaspSwitchRequest['body'];
                    enterpriseProjectId = setRaspSwitchRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启/关闭网页防篡改功能防护，下发/清空网页防篡改策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setWtpProtectionStatusInfo(setWtpProtectionStatusInfoRequest?: SetWtpProtectionStatusInfoRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/webtamper/static/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (setWtpProtectionStatusInfoRequest !== null && setWtpProtectionStatusInfoRequest !== undefined) {
                if (setWtpProtectionStatusInfoRequest instanceof SetWtpProtectionStatusInfoRequest) {
                    region = setWtpProtectionStatusInfoRequest.region;
                    body = setWtpProtectionStatusInfoRequest.body
                    enterpriseProjectId = setWtpProtectionStatusInfoRequest.enterpriseProjectId;
                } else {
                    region = setWtpProtectionStatusInfoRequest['region'];
                    body = setWtpProtectionStatusInfoRequest['body'];
                    enterpriseProjectId = setWtpProtectionStatusInfoRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 资产统计信息，账号、端口、进程等
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAssetStatistic(showAssetStatisticRequest?: ShowAssetStatisticRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/asset/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let hostId;

            if (showAssetStatisticRequest !== null && showAssetStatisticRequest !== undefined) {
                if (showAssetStatisticRequest instanceof ShowAssetStatisticRequest) {
                    enterpriseProjectId = showAssetStatisticRequest.enterpriseProjectId;
                    hostId = showAssetStatisticRequest.hostId;
                } else {
                    enterpriseProjectId = showAssetStatisticRequest['enterprise_project_id'];
                    hostId = showAssetStatisticRequest['host_id'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询HSS存储库绑定的备份策略信息,确保已经购买了勒索防护存储库，可以从cbr云备份服务进行验证，确保已经存在HSS_projectid命名的存储库已经购买
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackupPolicyInfo(showBackupPolicyInfoRequest?: ShowBackupPolicyInfoRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/backup/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;

            if (showBackupPolicyInfoRequest !== null && showBackupPolicyInfoRequest !== undefined) {
                if (showBackupPolicyInfoRequest instanceof ShowBackupPolicyInfoRequest) {
                    region = showBackupPolicyInfoRequest.region;
                    enterpriseProjectId = showBackupPolicyInfoRequest.enterpriseProjectId;
                } else {
                    region = showBackupPolicyInfoRequest['region'];
                    enterpriseProjectId = showBackupPolicyInfoRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询配置检查项检测报告
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCheckRuleDetail(showCheckRuleDetailRequest?: ShowCheckRuleDetailRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/baseline/check-rule/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let checkName;
            
            let checkType;
            
            let checkRuleId;
            
            let standard;
            
            let enterpriseProjectId;
            
            let hostId;

            if (showCheckRuleDetailRequest !== null && showCheckRuleDetailRequest !== undefined) {
                if (showCheckRuleDetailRequest instanceof ShowCheckRuleDetailRequest) {
                    checkName = showCheckRuleDetailRequest.checkName;
                    checkType = showCheckRuleDetailRequest.checkType;
                    checkRuleId = showCheckRuleDetailRequest.checkRuleId;
                    standard = showCheckRuleDetailRequest.standard;
                    enterpriseProjectId = showCheckRuleDetailRequest.enterpriseProjectId;
                    hostId = showCheckRuleDetailRequest.hostId;
                } else {
                    checkName = showCheckRuleDetailRequest['check_name'];
                    checkType = showCheckRuleDetailRequest['check_type'];
                    checkRuleId = showCheckRuleDetailRequest['check_rule_id'];
                    standard = showCheckRuleDetailRequest['standard'];
                    enterpriseProjectId = showCheckRuleDetailRequest['enterprise_project_id'];
                    hostId = showCheckRuleDetailRequest['host_id'];
                }
            }

        
            if (checkName === null || checkName === undefined) {
                throw new RequiredError('checkName','Required parameter checkName was null or undefined when calling showCheckRuleDetail.');
            }
            if (checkName !== null && checkName !== undefined) {
                localVarQueryParameter['check_name'] = checkName;
            }
            if (checkType === null || checkType === undefined) {
                throw new RequiredError('checkType','Required parameter checkType was null or undefined when calling showCheckRuleDetail.');
            }
            if (checkType !== null && checkType !== undefined) {
                localVarQueryParameter['check_type'] = checkType;
            }
            if (checkRuleId === null || checkRuleId === undefined) {
                throw new RequiredError('checkRuleId','Required parameter checkRuleId was null or undefined when calling showCheckRuleDetail.');
            }
            if (checkRuleId !== null && checkRuleId !== undefined) {
                localVarQueryParameter['check_rule_id'] = checkRuleId;
            }
            if (standard === null || standard === undefined) {
                throw new RequiredError('standard','Required parameter standard was null or undefined when calling showCheckRuleDetail.');
            }
            if (standard !== null && standard !== undefined) {
                localVarQueryParameter['standard'] = standard;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询配额信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceQuotas(showResourceQuotasRequest?: ShowResourceQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/billing/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let region;
            
            let enterpriseProjectId;
            
            let version;
            
            let chargingMode;

            if (showResourceQuotasRequest !== null && showResourceQuotasRequest !== undefined) {
                if (showResourceQuotasRequest instanceof ShowResourceQuotasRequest) {
                    region = showResourceQuotasRequest.region;
                    enterpriseProjectId = showResourceQuotasRequest.enterpriseProjectId;
                    version = showResourceQuotasRequest.version;
                    chargingMode = showResourceQuotasRequest.chargingMode;
                } else {
                    region = showResourceQuotasRequest['region'];
                    enterpriseProjectId = showResourceQuotasRequest['enterprise_project_id'];
                    version = showResourceQuotasRequest['version'];
                    chargingMode = showResourceQuotasRequest['charging_mode'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (chargingMode !== null && chargingMode !== undefined) {
                localVarQueryParameter['charging_mode'] = chargingMode;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定安全配置项的检查结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRiskConfigDetail(showRiskConfigDetailRequest?: ShowRiskConfigDetailRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/baseline/risk-config/{check_name}/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let checkName;
            
            let standard;
            
            let enterpriseProjectId;
            
            let hostId;
            
            let limit;
            
            let offset;

            if (showRiskConfigDetailRequest !== null && showRiskConfigDetailRequest !== undefined) {
                if (showRiskConfigDetailRequest instanceof ShowRiskConfigDetailRequest) {
                    checkName = showRiskConfigDetailRequest.checkName;
                    standard = showRiskConfigDetailRequest.standard;
                    enterpriseProjectId = showRiskConfigDetailRequest.enterpriseProjectId;
                    hostId = showRiskConfigDetailRequest.hostId;
                    limit = showRiskConfigDetailRequest.limit;
                    offset = showRiskConfigDetailRequest.offset;
                } else {
                    checkName = showRiskConfigDetailRequest['check_name'];
                    standard = showRiskConfigDetailRequest['standard'];
                    enterpriseProjectId = showRiskConfigDetailRequest['enterprise_project_id'];
                    hostId = showRiskConfigDetailRequest['host_id'];
                    limit = showRiskConfigDetailRequest['limit'];
                    offset = showRiskConfigDetailRequest['offset'];
                }
            }

        
            if (checkName === null || checkName === undefined) {
            throw new RequiredError('checkName','Required parameter checkName was null or undefined when calling showRiskConfigDetail.');
            }
            if (standard === null || standard === undefined) {
                throw new RequiredError('standard','Required parameter standard was null or undefined when calling showRiskConfigDetail.');
            }
            if (standard !== null && standard !== undefined) {
                localVarQueryParameter['standard'] = standard;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (hostId !== null && hostId !== undefined) {
                localVarQueryParameter['host_id'] = hostId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'check_name': checkName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启勒索病毒防护,请保证该region有cbr云备份服务，勒索服务与云备份服务有关联关系
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startProtection(startProtectionRequest?: StartProtectionRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/ransomware/protection/open",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (startProtectionRequest !== null && startProtectionRequest !== undefined) {
                if (startProtectionRequest instanceof StartProtectionRequest) {
                    region = startProtectionRequest.region;
                    body = startProtectionRequest.body
                    enterpriseProjectId = startProtectionRequest.enterpriseProjectId;
                } else {
                    region = startProtectionRequest['region'];
                    body = startProtectionRequest['body'];
                    enterpriseProjectId = startProtectionRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭勒索病毒防护
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopProtection(stopProtectionRequest?: StopProtectionRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/ransomware/protection/close",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (stopProtectionRequest !== null && stopProtectionRequest !== undefined) {
                if (stopProtectionRequest instanceof StopProtectionRequest) {
                    region = stopProtectionRequest.region;
                    body = stopProtectionRequest.body
                    enterpriseProjectId = stopProtectionRequest.enterpriseProjectId;
                } else {
                    region = stopProtectionRequest['region'];
                    body = stopProtectionRequest['body'];
                    enterpriseProjectId = stopProtectionRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 切换防护状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchHostsProtectStatus(switchHostsProtectStatusRequest?: SwitchHostsProtectStatusRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/host-management/protection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (switchHostsProtectStatusRequest !== null && switchHostsProtectStatusRequest !== undefined) {
                if (switchHostsProtectStatusRequest instanceof SwitchHostsProtectStatusRequest) {
                    region = switchHostsProtectStatusRequest.region;
                    body = switchHostsProtectStatusRequest.body
                    enterpriseProjectId = switchHostsProtectStatusRequest.enterpriseProjectId;
                } else {
                    region = switchHostsProtectStatusRequest['region'];
                    body = switchHostsProtectStatusRequest['body'];
                    enterpriseProjectId = switchHostsProtectStatusRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改存储库绑定的备份策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBackupPolicyInfo(updateBackupPolicyInfoRequest?: UpdateBackupPolicyInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/backup/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (updateBackupPolicyInfoRequest !== null && updateBackupPolicyInfoRequest !== undefined) {
                if (updateBackupPolicyInfoRequest instanceof UpdateBackupPolicyInfoRequest) {
                    region = updateBackupPolicyInfoRequest.region;
                    body = updateBackupPolicyInfoRequest.body
                    enterpriseProjectId = updateBackupPolicyInfoRequest.enterpriseProjectId;
                } else {
                    region = updateBackupPolicyInfoRequest['region'];
                    body = updateBackupPolicyInfoRequest['body'];
                    enterpriseProjectId = updateBackupPolicyInfoRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改防护策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProtectionPolicy(updateProtectionPolicyRequest?: UpdateProtectionPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/ransomware/protection/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let region;
            
            let enterpriseProjectId;

            if (updateProtectionPolicyRequest !== null && updateProtectionPolicyRequest !== undefined) {
                if (updateProtectionPolicyRequest instanceof UpdateProtectionPolicyRequest) {
                    region = updateProtectionPolicyRequest.region;
                    body = updateProtectionPolicyRequest.body
                    enterpriseProjectId = updateProtectionPolicyRequest.enterpriseProjectId;
                } else {
                    region = updateProtectionPolicyRequest['region'];
                    body = updateProtectionPolicyRequest['body'];
                    enterpriseProjectId = updateProtectionPolicyRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (region !== undefined && region !== null) {
                localVarHeaderParameter['region'] = String(region);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): HssClient {
    return new HssClient(client);
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