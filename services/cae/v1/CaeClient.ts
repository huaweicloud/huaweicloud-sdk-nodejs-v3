import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { Access } from './model/Access';
import { AccessConfigurationDataItems } from './model/AccessConfigurationDataItems';
import { AccessConfigurationHttpPath } from './model/AccessConfigurationHttpPath';
import { AccessConfigurationMetadata } from './model/AccessConfigurationMetadata';
import { AccessConfigurationPort } from './model/AccessConfigurationPort';
import { AccessControl } from './model/AccessControl';
import { ActionKindObj } from './model/ActionKindObj';
import { ActionOnComponentBuild } from './model/ActionOnComponentBuild';
import { ActionOnComponentSource } from './model/ActionOnComponentSource';
import { ActionOnComponentSpec } from './model/ActionOnComponentSpec';
import { Agency } from './model/Agency';
import { AgencyItem } from './model/AgencyItem';
import { AgencyKindObj } from './model/AgencyKindObj';
import { AgencyMetadata } from './model/AgencyMetadata';
import { ApiVersionObj } from './model/ApiVersionObj';
import { AppInfo } from './model/AppInfo';
import { ApplicationItem } from './model/ApplicationItem';
import { ApplicationKindObj } from './model/ApplicationKindObj';
import { ApplicationMetadata } from './model/ApplicationMetadata';
import { Archive } from './model/Archive';
import { Build } from './model/Build';
import { CertItem } from './model/CertItem';
import { CertReq } from './model/CertReq';
import { CertificateKindObj } from './model/CertificateKindObj';
import { CloudStorageLogPathInfo } from './model/CloudStorageLogPathInfo';
import { ComponentConfigurationKindObj } from './model/ComponentConfigurationKindObj';
import { ComponentExecutionResult } from './model/ComponentExecutionResult';
import { ComponentInfo } from './model/ComponentInfo';
import { ComponentItem } from './model/ComponentItem';
import { ComponentKindObj } from './model/ComponentKindObj';
import { ComponentSnapshotContext } from './model/ComponentSnapshotContext';
import { ComponentSnapshotItem } from './model/ComponentSnapshotItem';
import { ComponentSnapshotKindObj } from './model/ComponentSnapshotKindObj';
import { ComponentSpec } from './model/ComponentSpec';
import { Configuration } from './model/Configuration';
import { ConfigurationData } from './model/ConfigurationData';
import { ConfigurationDataMetadata } from './model/ConfigurationDataMetadata';
import { ConfigurationItem } from './model/ConfigurationItem';
import { ConfigurationRequestDataSpec } from './model/ConfigurationRequestDataSpec';
import { ConfigurationRequestDataSpecPostStart } from './model/ConfigurationRequestDataSpecPostStart';
import { ConfigurationRequestDataSpecPreStop } from './model/ConfigurationRequestDataSpecPreStop';
import { ConfigurationResponseDataSpec } from './model/ConfigurationResponseDataSpec';
import { ConfigurationResponseDataSpecPostStart } from './model/ConfigurationResponseDataSpecPostStart';
import { ConfigurationResponseDataSpecPreStop } from './model/ConfigurationResponseDataSpecPreStop';
import { CreateAgencyRequest } from './model/CreateAgencyRequest';
import { CreateAgencyResponse } from './model/CreateAgencyResponse';
import { CreateApplicationRequest } from './model/CreateApplicationRequest';
import { CreateApplicationRequestBody } from './model/CreateApplicationRequestBody';
import { CreateApplicationRequestBodyMetadata } from './model/CreateApplicationRequestBodyMetadata';
import { CreateApplicationResponse } from './model/CreateApplicationResponse';
import { CreateCertificateRequest } from './model/CreateCertificateRequest';
import { CreateCertificateResponse } from './model/CreateCertificateResponse';
import { CreateComponentConfigurationRequest } from './model/CreateComponentConfigurationRequest';
import { CreateComponentConfigurationRequestBody } from './model/CreateComponentConfigurationRequestBody';
import { CreateComponentConfigurationResponse } from './model/CreateComponentConfigurationResponse';
import { CreateComponentRequest } from './model/CreateComponentRequest';
import { CreateComponentRequestBody } from './model/CreateComponentRequestBody';
import { CreateComponentResponse } from './model/CreateComponentResponse';
import { CreateComponentSpec } from './model/CreateComponentSpec';
import { CreateComponentWithConfigurationRequest } from './model/CreateComponentWithConfigurationRequest';
import { CreateComponentWithConfigurationRequestBody } from './model/CreateComponentWithConfigurationRequestBody';
import { CreateComponentWithConfigurationRequestBodyMetadata } from './model/CreateComponentWithConfigurationRequestBodyMetadata';
import { CreateComponentWithConfigurationRequestBodySpec } from './model/CreateComponentWithConfigurationRequestBodySpec';
import { CreateComponentWithConfigurationResponse } from './model/CreateComponentWithConfigurationResponse';
import { CreateComponentWithConfigurationResponseBodyStatus } from './model/CreateComponentWithConfigurationResponseBodyStatus';
import { CreateDomainReq } from './model/CreateDomainReq';
import { CreateDomainRequest } from './model/CreateDomainRequest';
import { CreateDomainResponse } from './model/CreateDomainResponse';
import { CreateEnvironmentRequest } from './model/CreateEnvironmentRequest';
import { CreateEnvironmentRequestBody } from './model/CreateEnvironmentRequestBody';
import { CreateEnvironmentRequestBodyMetadata } from './model/CreateEnvironmentRequestBodyMetadata';
import { CreateEnvironmentResponse } from './model/CreateEnvironmentResponse';
import { CreateMetaCert } from './model/CreateMetaCert';
import { CreateMetaDomain } from './model/CreateMetaDomain';
import { CreateMonitorSystemRequest } from './model/CreateMonitorSystemRequest';
import { CreateMonitorSystemResponse } from './model/CreateMonitorSystemResponse';
import { CreateNoticeRuleItem } from './model/CreateNoticeRuleItem';
import { CreateNoticeRuleReq } from './model/CreateNoticeRuleReq';
import { CreateNoticeRuleRequest } from './model/CreateNoticeRuleRequest';
import { CreateNoticeRuleRespItem } from './model/CreateNoticeRuleRespItem';
import { CreateNoticeRuleResponse } from './model/CreateNoticeRuleResponse';
import { CreateOrUpdateSecretDetail } from './model/CreateOrUpdateSecretDetail';
import { CreateOrUpdateSecretReq } from './model/CreateOrUpdateSecretReq';
import { CreateSecretRequest } from './model/CreateSecretRequest';
import { CreateSecretResponse } from './model/CreateSecretResponse';
import { CreateSpecCert } from './model/CreateSpecCert';
import { CreateTimerRuleReq } from './model/CreateTimerRuleReq';
import { CreateTimerRuleRequest } from './model/CreateTimerRuleRequest';
import { CreateTimerRuleResponse } from './model/CreateTimerRuleResponse';
import { CreateVolumeReq } from './model/CreateVolumeReq';
import { CreateVolumeRequest } from './model/CreateVolumeRequest';
import { CreateVolumeResponse } from './model/CreateVolumeResponse';
import { CreateVpcEgressRequest } from './model/CreateVpcEgressRequest';
import { CreateVpcEgressResponse } from './model/CreateVpcEgressResponse';
import { CronTriggerScheduler } from './model/CronTriggerScheduler';
import { DeleteApplicationRequest } from './model/DeleteApplicationRequest';
import { DeleteApplicationResponse } from './model/DeleteApplicationResponse';
import { DeleteCertificateRequest } from './model/DeleteCertificateRequest';
import { DeleteCertificateResponse } from './model/DeleteCertificateResponse';
import { DeleteComponentConfigurationRequest } from './model/DeleteComponentConfigurationRequest';
import { DeleteComponentConfigurationResponse } from './model/DeleteComponentConfigurationResponse';
import { DeleteComponentRequest } from './model/DeleteComponentRequest';
import { DeleteComponentResponse } from './model/DeleteComponentResponse';
import { DeleteDomainRequest } from './model/DeleteDomainRequest';
import { DeleteDomainResponse } from './model/DeleteDomainResponse';
import { DeleteEnvironmentRequest } from './model/DeleteEnvironmentRequest';
import { DeleteEnvironmentResponse } from './model/DeleteEnvironmentResponse';
import { DeleteNoticeRuleRequest } from './model/DeleteNoticeRuleRequest';
import { DeleteNoticeRuleResponse } from './model/DeleteNoticeRuleResponse';
import { DeleteSecretRequest } from './model/DeleteSecretRequest';
import { DeleteSecretResponse } from './model/DeleteSecretResponse';
import { DeleteTimerRuleRequest } from './model/DeleteTimerRuleRequest';
import { DeleteTimerRuleResponse } from './model/DeleteTimerRuleResponse';
import { DeleteVolumeRequest } from './model/DeleteVolumeRequest';
import { DeleteVolumeResponse } from './model/DeleteVolumeResponse';
import { DeleteVpcEgressRequest } from './model/DeleteVpcEgressRequest';
import { DeleteVpcEgressResponse } from './model/DeleteVpcEgressResponse';
import { DomainItem } from './model/DomainItem';
import { DomainKindObj } from './model/DomainKindObj';
import { EgressCidr } from './model/EgressCidr';
import { EipKindObj } from './model/EipKindObj';
import { EnvironmentItem } from './model/EnvironmentItem';
import { EnvironmentKindObj } from './model/EnvironmentKindObj';
import { ExecuteActionRequest } from './model/ExecuteActionRequest';
import { ExecuteActionRequestBody } from './model/ExecuteActionRequestBody';
import { ExecuteActionRequestBodyMetadata } from './model/ExecuteActionRequestBodyMetadata';
import { ExecuteActionResponse } from './model/ExecuteActionResponse';
import { ExecutionDetails } from './model/ExecutionDetails';
import { HealthCheckConfigurationExec } from './model/HealthCheckConfigurationExec';
import { HealthCheckConfigurationHttpGet } from './model/HealthCheckConfigurationHttpGet';
import { HealthCheckConfigurationLivenessProbe } from './model/HealthCheckConfigurationLivenessProbe';
import { HealthCheckConfigurationReadinessProbe } from './model/HealthCheckConfigurationReadinessProbe';
import { HealthCheckConfigurationStartupProbe } from './model/HealthCheckConfigurationStartupProbe';
import { HealthCheckConfigurationTcpSocket } from './model/HealthCheckConfigurationTcpSocket';
import { Instance } from './model/Instance';
import { JobKindObj } from './model/JobKindObj';
import { JobSpec } from './model/JobSpec';
import { LifeCycleConfigurationExec } from './model/LifeCycleConfigurationExec';
import { ListAgenciesRequest } from './model/ListAgenciesRequest';
import { ListAgenciesResponse } from './model/ListAgenciesResponse';
import { ListApplicationsRequest } from './model/ListApplicationsRequest';
import { ListApplicationsResponse } from './model/ListApplicationsResponse';
import { ListCertificatesRequest } from './model/ListCertificatesRequest';
import { ListCertificatesResponse } from './model/ListCertificatesResponse';
import { ListComponentConfigurationsRequest } from './model/ListComponentConfigurationsRequest';
import { ListComponentConfigurationsResponse } from './model/ListComponentConfigurationsResponse';
import { ListComponentConfigurationsResponseData } from './model/ListComponentConfigurationsResponseData';
import { ListComponentInstancesRequest } from './model/ListComponentInstancesRequest';
import { ListComponentInstancesResponse } from './model/ListComponentInstancesResponse';
import { ListComponentSnapshotsRequest } from './model/ListComponentSnapshotsRequest';
import { ListComponentSnapshotsResponse } from './model/ListComponentSnapshotsResponse';
import { ListComponentsRequest } from './model/ListComponentsRequest';
import { ListComponentsResponse } from './model/ListComponentsResponse';
import { ListDomainsRequest } from './model/ListDomainsRequest';
import { ListDomainsResponse } from './model/ListDomainsResponse';
import { ListEffectiveComponentsRequest } from './model/ListEffectiveComponentsRequest';
import { ListEffectiveComponentsResponse } from './model/ListEffectiveComponentsResponse';
import { ListEipResponseBodySpec } from './model/ListEipResponseBodySpec';
import { ListEipResponseBodySpecEgress } from './model/ListEipResponseBodySpecEgress';
import { ListEipResponseBodySpecIngress } from './model/ListEipResponseBodySpecIngress';
import { ListEipsRequest } from './model/ListEipsRequest';
import { ListEipsResponse } from './model/ListEipsResponse';
import { ListEnvironmentsRequest } from './model/ListEnvironmentsRequest';
import { ListEnvironmentsResponse } from './model/ListEnvironmentsResponse';
import { ListNoticeRulesRequest } from './model/ListNoticeRulesRequest';
import { ListNoticeRulesResponse } from './model/ListNoticeRulesResponse';
import { ListSecretsRequest } from './model/ListSecretsRequest';
import { ListSecretsResponse } from './model/ListSecretsResponse';
import { ListTimerRulesRequest } from './model/ListTimerRulesRequest';
import { ListTimerRulesResponse } from './model/ListTimerRulesResponse';
import { ListVolumesRequest } from './model/ListVolumesRequest';
import { ListVolumesResponse } from './model/ListVolumesResponse';
import { ListVpcEgressRequest } from './model/ListVpcEgressRequest';
import { ListVpcEgressResponse } from './model/ListVpcEgressResponse';
import { MetaCert } from './model/MetaCert';
import { MetaDomain } from './model/MetaDomain';
import { MetadataResponse } from './model/MetadataResponse';
import { MonitorSystemKindObj } from './model/MonitorSystemKindObj';
import { MonitorSystemRequestBody } from './model/MonitorSystemRequestBody';
import { MonitorSystemRequestBodySpec } from './model/MonitorSystemRequestBodySpec';
import { MountComponent } from './model/MountComponent';
import { NoticeRuleNotification } from './model/NoticeRuleNotification';
import { NoticeRuleScope } from './model/NoticeRuleScope';
import { Repo } from './model/Repo';
import { ResourceLimit } from './model/ResourceLimit';
import { ResourceLimitForUpgrade } from './model/ResourceLimitForUpgrade';
import { ResourcesCredential } from './model/ResourcesCredential';
import { RetryJobRequest } from './model/RetryJobRequest';
import { RetryJobResponse } from './model/RetryJobResponse';
import { ScaleConfigurationDataAdvanced } from './model/ScaleConfigurationDataAdvanced';
import { ScaleConfigurationDataTrigger } from './model/ScaleConfigurationDataTrigger';
import { ScalingTriggerMeta } from './model/ScalingTriggerMeta';
import { SecretDetail } from './model/SecretDetail';
import { ShowApplicationRequest } from './model/ShowApplicationRequest';
import { ShowApplicationResponse } from './model/ShowApplicationResponse';
import { ShowComponentRequest } from './model/ShowComponentRequest';
import { ShowComponentResponse } from './model/ShowComponentResponse';
import { ShowExecutionResultRequest } from './model/ShowExecutionResultRequest';
import { ShowExecutionResultResponse } from './model/ShowExecutionResultResponse';
import { ShowJobRequest } from './model/ShowJobRequest';
import { ShowJobResponse } from './model/ShowJobResponse';
import { ShowMonitorSystemRequest } from './model/ShowMonitorSystemRequest';
import { ShowMonitorSystemResponse } from './model/ShowMonitorSystemResponse';
import { ShowMonitorSystemResponseBodySpec } from './model/ShowMonitorSystemResponseBodySpec';
import { ShowNoticeRuleRequest } from './model/ShowNoticeRuleRequest';
import { ShowNoticeRuleResponse } from './model/ShowNoticeRuleResponse';
import { Source } from './model/Source';
import { SpecCert } from './model/SpecCert';
import { Task } from './model/Task';
import { TimeRuleKindObj } from './model/TimeRuleKindObj';
import { TimerRuleDetails } from './model/TimerRuleDetails';
import { TriggerPolicy } from './model/TriggerPolicy';
import { UpdateCertReq } from './model/UpdateCertReq';
import { UpdateCertificateRequest } from './model/UpdateCertificateRequest';
import { UpdateCertificateResponse } from './model/UpdateCertificateResponse';
import { UpdateComponentRequest } from './model/UpdateComponentRequest';
import { UpdateComponentRequestBody } from './model/UpdateComponentRequestBody';
import { UpdateComponentRequestMetadata } from './model/UpdateComponentRequestMetadata';
import { UpdateComponentRequestSpec } from './model/UpdateComponentRequestSpec';
import { UpdateComponentResponse } from './model/UpdateComponentResponse';
import { UpdateEipRequest } from './model/UpdateEipRequest';
import { UpdateEipRequestBody } from './model/UpdateEipRequestBody';
import { UpdateEipRequestBodySpec } from './model/UpdateEipRequestBodySpec';
import { UpdateEipRequestBodySpecEgress } from './model/UpdateEipRequestBodySpecEgress';
import { UpdateEipRequestBodySpecIngress } from './model/UpdateEipRequestBodySpecIngress';
import { UpdateEipResponse } from './model/UpdateEipResponse';
import { UpdateMonitorSystemRequest } from './model/UpdateMonitorSystemRequest';
import { UpdateMonitorSystemResponse } from './model/UpdateMonitorSystemResponse';
import { UpdateNoticeRuleItem } from './model/UpdateNoticeRuleItem';
import { UpdateNoticeRuleReq } from './model/UpdateNoticeRuleReq';
import { UpdateNoticeRuleRequest } from './model/UpdateNoticeRuleRequest';
import { UpdateNoticeRuleResponse } from './model/UpdateNoticeRuleResponse';
import { UpdateSecretRequest } from './model/UpdateSecretRequest';
import { UpdateSecretResponse } from './model/UpdateSecretResponse';
import { UpdateSpecCert } from './model/UpdateSpecCert';
import { UpdateTimerRuleDetails } from './model/UpdateTimerRuleDetails';
import { UpdateTimerRuleReq } from './model/UpdateTimerRuleReq';
import { UpdateTimerRuleRequest } from './model/UpdateTimerRuleRequest';
import { UpdateTimerRuleResponse } from './model/UpdateTimerRuleResponse';
import { Volume } from './model/Volume';
import { VolumeConfigurationDataVolume } from './model/VolumeConfigurationDataVolume';
import { VolumeConfigurationMountInfo } from './model/VolumeConfigurationMountInfo';
import { VolumeKindObj } from './model/VolumeKindObj';
import { VolumeSpec } from './model/VolumeSpec';
import { VpcEgressKindObj } from './model/VpcEgressKindObj';
import { VpcEgressRequestBody } from './model/VpcEgressRequestBody';
import { VpcEgressRequestBodySpec } from './model/VpcEgressRequestBodySpec';
import { VpcEgressResponseBodySpec } from './model/VpcEgressResponseBodySpec';

export class CaeClient {
    public static newBuilder(): ClientBuilder<CaeClient> {
            let client = new ClientBuilder<CaeClient>(newClient);
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
     * 创建委托。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建委托
     * @param {Agency} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAgency(createAgencyRequest?: CreateAgencyRequest): Promise<CreateAgencyResponse> {
        const options = ParamCreater().createAgency(createAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取委托列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取委托列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAgencies(listAgenciesRequest?: ListAgenciesRequest): Promise<ListAgenciesResponse> {
        const options = ParamCreater().listAgencies();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {CreateApplicationRequestBody} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApplication(createApplicationRequest?: CreateApplicationRequest): Promise<CreateApplicationResponse> {
        const options = ParamCreater().createApplication(createApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用
     * @param {string} applicationId 应用ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApplication(deleteApplicationRequest?: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
        const options = ParamCreater().deleteApplication(deleteApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取应用列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取应用列表
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplications(listApplicationsRequest?: ListApplicationsRequest): Promise<ListApplicationsResponse> {
        const options = ParamCreater().listApplications(listApplicationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取应用详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取应用详情
     * @param {string} applicationId 应用ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplication(showApplicationRequest?: ShowApplicationRequest): Promise<ShowApplicationResponse> {
        const options = ParamCreater().showApplication(showApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建证书
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {CertReq} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCertificate(createCertificateRequest?: CreateCertificateRequest): Promise<CreateCertificateResponse> {
        const options = ParamCreater().createCertificate(createCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除证书
     * @param {string} certificateId 证书ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCertificate(deleteCertificateRequest?: DeleteCertificateRequest): Promise<DeleteCertificateResponse> {
        const options = ParamCreater().deleteCertificate(deleteCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取证书列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取证书列表
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCertificates(listCertificatesRequest?: ListCertificatesRequest): Promise<ListCertificatesResponse> {
        const options = ParamCreater().listCertificates(listCertificatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改证书
     * @param {string} certificateId 证书ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {UpdateCertReq} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCertificate(updateCertificateRequest?: UpdateCertificateRequest): Promise<UpdateCertificateResponse> {
        const options = ParamCreater().updateCertificate(updateCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建组件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建组件
     * @param {string} applicationId 应用ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {CreateComponentRequestBody} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createComponent(createComponentRequest?: CreateComponentRequest): Promise<CreateComponentResponse> {
        const options = ParamCreater().createComponent(createComponentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建、生效配置并部署组件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建、生效配置并部署组件
     * @param {string} applicationId 应用ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {CreateComponentWithConfigurationRequestBody} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createComponentWithConfiguration(createComponentWithConfigurationRequest?: CreateComponentWithConfigurationRequest): Promise<CreateComponentWithConfigurationResponse> {
        const options = ParamCreater().createComponentWithConfiguration(createComponentWithConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除组件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除组件
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteComponent(deleteComponentRequest?: DeleteComponentRequest): Promise<DeleteComponentResponse> {
        const options = ParamCreater().deleteComponent(deleteComponentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对组件执行指定操作，如部署、升级、重启、停止、启动、伸缩、配置、回滚。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 操作组件
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {ExecuteActionRequestBody} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeAction(executeActionRequest?: ExecuteActionRequest): Promise<ExecuteActionResponse> {
        const options = ParamCreater().executeAction(executeActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取组件实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取组件实例列表
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listComponentInstances(listComponentInstancesRequest?: ListComponentInstancesRequest): Promise<ListComponentInstancesResponse> {
        const options = ParamCreater().listComponentInstances(listComponentInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取组件快照列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取组件快照列表
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listComponentSnapshots(listComponentSnapshotsRequest?: ListComponentSnapshotsRequest): Promise<ListComponentSnapshotsResponse> {
        const options = ParamCreater().listComponentSnapshots(listComponentSnapshotsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取组件列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取组件列表
     * @param {string} applicationId 应用ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {string} [limit] 限制本次返回结果的条数。
     * @param {string} [offset] 分页偏移位，查询起始位置。
     * @param {'created_at' | 'updated_at'} [sortKey] 排序字段。
     * @param {'asc' | 'desc'} [sort] 升降序规则。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listComponents(listComponentsRequest?: ListComponentsRequest): Promise<ListComponentsResponse> {
        const options = ParamCreater().listComponents(listComponentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取组件详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取组件详情
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showComponent(showComponentRequest?: ShowComponentRequest): Promise<ShowComponentResponse> {
        const options = ParamCreater().showComponent(showComponentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新组件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新组件
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {UpdateComponentRequestBody} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateComponent(updateComponentRequest?: UpdateComponentRequest): Promise<UpdateComponentResponse> {
        const options = ParamCreater().updateComponent(updateComponentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建组件配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建组件配置
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {CreateComponentConfigurationRequestBody} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createComponentConfiguration(createComponentConfigurationRequest?: CreateComponentConfigurationRequest): Promise<CreateComponentConfigurationResponse> {
        const options = ParamCreater().createComponentConfiguration(createComponentConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除组件配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除组件配置
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteComponentConfiguration(deleteComponentConfigurationRequest?: DeleteComponentConfigurationRequest): Promise<DeleteComponentConfigurationResponse> {
        const options = ParamCreater().deleteComponentConfiguration(deleteComponentConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取组件配置列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取组件配置列表
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {string} [displayMode] 显示模式，当前只支持“latestEffective”，即只显示最后一次生效配置。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listComponentConfigurations(listComponentConfigurationsRequest?: ListComponentConfigurationsRequest): Promise<ListComponentConfigurationsResponse> {
        const options = ParamCreater().listComponentConfigurations(listComponentConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建域名
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {CreateDomainReq} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
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
     * 删除域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除域名
     * @param {string} domainId 域名ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
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
     * 获取域名列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取域名列表
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
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
     * 获取集群节点弹性公网IP列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群节点弹性公网IP列表
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEips(listEipsRequest?: ListEipsRequest): Promise<ListEipsResponse> {
        const options = ParamCreater().listEips(listEipsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改出入网带宽以及开闭状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改出入网带宽以及开闭状态
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {UpdateEipRequestBody} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEip(updateEipRequest?: UpdateEipRequest): Promise<UpdateEipResponse> {
        const options = ParamCreater().updateEip(updateEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建环境。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建环境
     * @param {CreateEnvironmentRequestBody} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEnvironment(createEnvironmentRequest?: CreateEnvironmentRequest): Promise<CreateEnvironmentResponse> {
        const options = ParamCreater().createEnvironment(createEnvironmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除环境。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除环境
     * @param {string} environmentId 环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEnvironment(deleteEnvironmentRequest?: DeleteEnvironmentRequest): Promise<DeleteEnvironmentResponse> {
        const options = ParamCreater().deleteEnvironment(deleteEnvironmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取环境列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取环境列表
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnvironments(listEnvironmentsRequest?: ListEnvironmentsRequest): Promise<ListEnvironmentsResponse> {
        const options = ParamCreater().listEnvironments(listEnvironmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重试任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重试任务
     * @param {string} jobId 任务ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retryJob(retryJobRequest?: RetryJobRequest): Promise<RetryJobResponse> {
        const options = ParamCreater().retryJob(retryJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务详情
     * @param {string} jobId 任务ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJob(showJobRequest?: ShowJobRequest): Promise<ShowJobResponse> {
        const options = ParamCreater().showJob(showJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建监控系统配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建监控系统配置
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {MonitorSystemRequestBody} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMonitorSystem(createMonitorSystemRequest?: CreateMonitorSystemRequest): Promise<CreateMonitorSystemResponse> {
        const options = ParamCreater().createMonitorSystem(createMonitorSystemRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取监控系统配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取监控系统配置
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMonitorSystem(showMonitorSystemRequest?: ShowMonitorSystemRequest): Promise<ShowMonitorSystemResponse> {
        const options = ParamCreater().showMonitorSystem(showMonitorSystemRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新监控系统配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新监控系统配置
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} monitorSystemId 监控系统配置ID。
     * @param {MonitorSystemRequestBody} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMonitorSystem(updateMonitorSystemRequest?: UpdateMonitorSystemRequest): Promise<UpdateMonitorSystemResponse> {
        const options = ParamCreater().updateMonitorSystem(updateMonitorSystemRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建事件通知规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建事件通知规则。
     * @param {CreateNoticeRuleReq} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNoticeRule(createNoticeRuleRequest?: CreateNoticeRuleRequest): Promise<CreateNoticeRuleResponse> {
        const options = ParamCreater().createNoticeRule(createNoticeRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除事件通知规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除事件通知规则。
     * @param {string} ruleId 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNoticeRule(deleteNoticeRuleRequest?: DeleteNoticeRuleRequest): Promise<DeleteNoticeRuleResponse> {
        const options = ParamCreater().deleteNoticeRule(deleteNoticeRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件通知规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件通知规则列表。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNoticeRules(listNoticeRulesRequest?: ListNoticeRulesRequest): Promise<ListNoticeRulesResponse> {
        const options = ParamCreater().listNoticeRules(listNoticeRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件通知规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件通知规则。
     * @param {string} ruleId 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNoticeRule(showNoticeRuleRequest?: ShowNoticeRuleRequest): Promise<ShowNoticeRuleResponse> {
        const options = ParamCreater().showNoticeRule(showNoticeRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改事件通知规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改事件通知规则。
     * @param {string} ruleId 
     * @param {UpdateNoticeRuleReq} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNoticeRule(updateNoticeRuleRequest?: UpdateNoticeRuleRequest): Promise<UpdateNoticeRuleResponse> {
        const options = ParamCreater().updateNoticeRule(updateNoticeRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关联租户已注册的凭据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关联租户已注册的凭据。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {CreateOrUpdateSecretReq} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecret(createSecretRequest?: CreateSecretRequest): Promise<CreateSecretResponse> {
        const options = ParamCreater().createSecret(createSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除用户已在DEW服务上注册的凭据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户已在DEW服务上注册的凭据。
     * @param {string} secretId 凭据ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecret(deleteSecretRequest?: DeleteSecretRequest): Promise<DeleteSecretResponse> {
        const options = ParamCreater().deleteSecret(deleteSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前正在使用的对应凭据组件列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取当前正在使用对应凭据组件列表。
     * @param {string} secretId 凭据ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEffectiveComponents(listEffectiveComponentsRequest?: ListEffectiveComponentsRequest): Promise<ListEffectiveComponentsResponse> {
        const options = ParamCreater().listEffectiveComponents(listEffectiveComponentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取用户现有的凭据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取用户现有的凭据。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecrets(listSecretsRequest?: ListSecretsRequest): Promise<ListSecretsResponse> {
        const options = ParamCreater().listSecrets(listSecretsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改用户已在DEW服务上注册的凭据版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改用户已在DEW服务上注册的凭据版本。
     * @param {string} secretId 凭据ID。
     * @param {CreateOrUpdateSecretReq} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecret(updateSecretRequest?: UpdateSecretRequest): Promise<UpdateSecretResponse> {
        const options = ParamCreater().updateSecret(updateSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建定时启停规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建定时启停规则
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {CreateTimerRuleReq} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTimerRule(createTimerRuleRequest?: CreateTimerRuleRequest): Promise<CreateTimerRuleResponse> {
        const options = ParamCreater().createTimerRule(createTimerRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除定时启停规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除定时启停规则
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} timerRuleId 定时启停规则ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTimerRule(deleteTimerRuleRequest?: DeleteTimerRuleRequest): Promise<DeleteTimerRuleResponse> {
        const options = ParamCreater().deleteTimerRule(deleteTimerRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取定时启停规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取定时启停规则列表
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTimerRules(listTimerRulesRequest?: ListTimerRulesRequest): Promise<ListTimerRulesResponse> {
        const options = ParamCreater().listTimerRules(listTimerRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取上次定时启停规则的执行情况。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取上次定时启停规则的执行情况
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} timerRuleId 定时启停规则ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showExecutionResult(showExecutionResultRequest?: ShowExecutionResultRequest): Promise<ShowExecutionResultResponse> {
        const options = ParamCreater().showExecutionResult(showExecutionResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改定时启停规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改定时启停规则
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} timerRuleId 定时启停规则ID。
     * @param {UpdateTimerRuleReq} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTimerRule(updateTimerRuleRequest?: UpdateTimerRuleRequest): Promise<UpdateTimerRuleResponse> {
        const options = ParamCreater().updateTimerRule(updateTimerRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 授权云存储。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 授权云存储
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {CreateVolumeReq} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVolume(createVolumeRequest?: CreateVolumeRequest): Promise<CreateVolumeResponse> {
        const options = ParamCreater().createVolume(createVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解绑云存储。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑云存储
     * @param {string} id 云存储ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVolume(deleteVolumeRequest?: DeleteVolumeRequest): Promise<DeleteVolumeResponse> {
        const options = ParamCreater().deleteVolume(deleteVolumeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取云存储列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取云存储列表
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} resourceType 资源类型，当前只支持“obs”和“sfs”。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVolumes(listVolumesRequest?: ListVolumesRequest): Promise<ListVolumesResponse> {
        const options = ParamCreater().listVolumes(listVolumesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建CAE环境访问VPC配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建CAE环境访问VPC配置
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {VpcEgressRequestBody} body 
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpcEgress(createVpcEgressRequest?: CreateVpcEgressRequest): Promise<CreateVpcEgressResponse> {
        const options = ParamCreater().createVpcEgress(createVpcEgressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除CAE环境访问VPC配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除CAE环境访问VPC配置
     * @param {string} vpcEgressId CAE环境访问VPC配置ID。
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpcEgress(deleteVpcEgressRequest?: DeleteVpcEgressRequest): Promise<DeleteVpcEgressResponse> {
        const options = ParamCreater().deleteVpcEgress(deleteVpcEgressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取CAE环境访问VPC配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取CAE环境访问VPC配置
     * @param {string} xEnvironmentID 环境ID。      - 获取环境ID，通过《[云应用引擎API参考](https://support.huaweicloud.com/api-cae/ListEnvironments.html)》的“获取环境列表”章节获取环境信息。     - 请求响应成功后在响应体的items数组中的一个元素即为一个环境的信息，其中id字段即是环境ID。
     * @param {string} [xEnterpriseProjectID] 企业项目ID。  - 创建环境时，环境会绑定企业项目ID。      - 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。     - 该字段不传（或传为字符串“0”）时，则查询默认企业项目下的资源。  &gt; 关于企业项目ID的获取及企业项目特性的详细信息，请参见《[企业管理服务用户指南](https://support.huaweicloud.com/usermanual-em/zh-cn_topic_0126101490.html)》。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcEgress(listVpcEgressRequest?: ListVpcEgressRequest): Promise<ListVpcEgressResponse> {
        const options = ParamCreater().listVpcEgress(listVpcEgressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建委托。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAgency(createAgencyRequest?: CreateAgencyRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAgencyRequest !== null && createAgencyRequest !== undefined) {
                if (createAgencyRequest instanceof CreateAgencyRequest) {
                    body = createAgencyRequest.body
                } else {
                    body = createAgencyRequest['body'];
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
         * 获取委托列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAgencies() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/agencies",
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
         * 创建应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApplication(createApplicationRequest?: CreateApplicationRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (createApplicationRequest !== null && createApplicationRequest !== undefined) {
                if (createApplicationRequest instanceof CreateApplicationRequest) {
                    xEnvironmentID = createApplicationRequest.xEnvironmentID;
                    body = createApplicationRequest.body
                    xEnterpriseProjectID = createApplicationRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = createApplicationRequest['X-Environment-ID'];
                    body = createApplicationRequest['body'];
                    xEnterpriseProjectID = createApplicationRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApplication(deleteApplicationRequest?: DeleteApplicationRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cae/applications/{application_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (deleteApplicationRequest !== null && deleteApplicationRequest !== undefined) {
                if (deleteApplicationRequest instanceof DeleteApplicationRequest) {
                    applicationId = deleteApplicationRequest.applicationId;
                    xEnvironmentID = deleteApplicationRequest.xEnvironmentID;
                    xEnterpriseProjectID = deleteApplicationRequest.xEnterpriseProjectID;
                } else {
                    applicationId = deleteApplicationRequest['application_id'];
                    xEnvironmentID = deleteApplicationRequest['X-Environment-ID'];
                    xEnterpriseProjectID = deleteApplicationRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling deleteApplication.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取应用列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplications(listApplicationsRequest?: ListApplicationsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (listApplicationsRequest !== null && listApplicationsRequest !== undefined) {
                if (listApplicationsRequest instanceof ListApplicationsRequest) {
                    xEnvironmentID = listApplicationsRequest.xEnvironmentID;
                    xEnterpriseProjectID = listApplicationsRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = listApplicationsRequest['X-Environment-ID'];
                    xEnterpriseProjectID = listApplicationsRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取应用详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApplication(showApplicationRequest?: ShowApplicationRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/applications/{application_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (showApplicationRequest !== null && showApplicationRequest !== undefined) {
                if (showApplicationRequest instanceof ShowApplicationRequest) {
                    applicationId = showApplicationRequest.applicationId;
                    xEnvironmentID = showApplicationRequest.xEnvironmentID;
                    xEnterpriseProjectID = showApplicationRequest.xEnterpriseProjectID;
                } else {
                    applicationId = showApplicationRequest['application_id'];
                    xEnvironmentID = showApplicationRequest['X-Environment-ID'];
                    xEnterpriseProjectID = showApplicationRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showApplication.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCertificate(createCertificateRequest?: CreateCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (createCertificateRequest !== null && createCertificateRequest !== undefined) {
                if (createCertificateRequest instanceof CreateCertificateRequest) {
                    xEnvironmentID = createCertificateRequest.xEnvironmentID;
                    body = createCertificateRequest.body
                    xEnterpriseProjectID = createCertificateRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = createCertificateRequest['X-Environment-ID'];
                    body = createCertificateRequest['body'];
                    xEnterpriseProjectID = createCertificateRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCertificate(deleteCertificateRequest?: DeleteCertificateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cae/certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let certificateId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (deleteCertificateRequest !== null && deleteCertificateRequest !== undefined) {
                if (deleteCertificateRequest instanceof DeleteCertificateRequest) {
                    certificateId = deleteCertificateRequest.certificateId;
                    xEnvironmentID = deleteCertificateRequest.xEnvironmentID;
                    xEnterpriseProjectID = deleteCertificateRequest.xEnterpriseProjectID;
                } else {
                    certificateId = deleteCertificateRequest['certificate_id'];
                    xEnvironmentID = deleteCertificateRequest['X-Environment-ID'];
                    xEnterpriseProjectID = deleteCertificateRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling deleteCertificate.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取证书列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCertificates(listCertificatesRequest?: ListCertificatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (listCertificatesRequest !== null && listCertificatesRequest !== undefined) {
                if (listCertificatesRequest instanceof ListCertificatesRequest) {
                    xEnvironmentID = listCertificatesRequest.xEnvironmentID;
                    xEnterpriseProjectID = listCertificatesRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = listCertificatesRequest['X-Environment-ID'];
                    xEnterpriseProjectID = listCertificatesRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCertificate(updateCertificateRequest?: UpdateCertificateRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cae/certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let certificateId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (updateCertificateRequest !== null && updateCertificateRequest !== undefined) {
                if (updateCertificateRequest instanceof UpdateCertificateRequest) {
                    certificateId = updateCertificateRequest.certificateId;
                    xEnvironmentID = updateCertificateRequest.xEnvironmentID;
                    body = updateCertificateRequest.body
                    xEnterpriseProjectID = updateCertificateRequest.xEnterpriseProjectID;
                } else {
                    certificateId = updateCertificateRequest['certificate_id'];
                    xEnvironmentID = updateCertificateRequest['X-Environment-ID'];
                    body = updateCertificateRequest['body'];
                    xEnterpriseProjectID = updateCertificateRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling updateCertificate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建组件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createComponent(createComponentRequest?: CreateComponentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/applications/{application_id}/components",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (createComponentRequest !== null && createComponentRequest !== undefined) {
                if (createComponentRequest instanceof CreateComponentRequest) {
                    applicationId = createComponentRequest.applicationId;
                    xEnvironmentID = createComponentRequest.xEnvironmentID;
                    body = createComponentRequest.body
                    xEnterpriseProjectID = createComponentRequest.xEnterpriseProjectID;
                } else {
                    applicationId = createComponentRequest['application_id'];
                    xEnvironmentID = createComponentRequest['X-Environment-ID'];
                    body = createComponentRequest['body'];
                    xEnterpriseProjectID = createComponentRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling createComponent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建、生效配置并部署组件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createComponentWithConfiguration(createComponentWithConfigurationRequest?: CreateComponentWithConfigurationRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/applications/{application_id}/component-with-configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (createComponentWithConfigurationRequest !== null && createComponentWithConfigurationRequest !== undefined) {
                if (createComponentWithConfigurationRequest instanceof CreateComponentWithConfigurationRequest) {
                    applicationId = createComponentWithConfigurationRequest.applicationId;
                    xEnvironmentID = createComponentWithConfigurationRequest.xEnvironmentID;
                    body = createComponentWithConfigurationRequest.body
                    xEnterpriseProjectID = createComponentWithConfigurationRequest.xEnterpriseProjectID;
                } else {
                    applicationId = createComponentWithConfigurationRequest['application_id'];
                    xEnvironmentID = createComponentWithConfigurationRequest['X-Environment-ID'];
                    body = createComponentWithConfigurationRequest['body'];
                    xEnterpriseProjectID = createComponentWithConfigurationRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling createComponentWithConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除组件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteComponent(deleteComponentRequest?: DeleteComponentRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cae/applications/{application_id}/components/{component_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let componentId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (deleteComponentRequest !== null && deleteComponentRequest !== undefined) {
                if (deleteComponentRequest instanceof DeleteComponentRequest) {
                    applicationId = deleteComponentRequest.applicationId;
                    componentId = deleteComponentRequest.componentId;
                    xEnvironmentID = deleteComponentRequest.xEnvironmentID;
                    xEnterpriseProjectID = deleteComponentRequest.xEnterpriseProjectID;
                } else {
                    applicationId = deleteComponentRequest['application_id'];
                    componentId = deleteComponentRequest['component_id'];
                    xEnvironmentID = deleteComponentRequest['X-Environment-ID'];
                    xEnterpriseProjectID = deleteComponentRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling deleteComponent.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling deleteComponent.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对组件执行指定操作，如部署、升级、重启、停止、启动、伸缩、配置、回滚。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeAction(executeActionRequest?: ExecuteActionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/applications/{application_id}/components/{component_id}/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;
            
            let componentId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (executeActionRequest !== null && executeActionRequest !== undefined) {
                if (executeActionRequest instanceof ExecuteActionRequest) {
                    applicationId = executeActionRequest.applicationId;
                    componentId = executeActionRequest.componentId;
                    xEnvironmentID = executeActionRequest.xEnvironmentID;
                    body = executeActionRequest.body
                    xEnterpriseProjectID = executeActionRequest.xEnterpriseProjectID;
                } else {
                    applicationId = executeActionRequest['application_id'];
                    componentId = executeActionRequest['component_id'];
                    xEnvironmentID = executeActionRequest['X-Environment-ID'];
                    body = executeActionRequest['body'];
                    xEnterpriseProjectID = executeActionRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling executeAction.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling executeAction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取组件实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listComponentInstances(listComponentInstancesRequest?: ListComponentInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/applications/{application_id}/components/{component_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let componentId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (listComponentInstancesRequest !== null && listComponentInstancesRequest !== undefined) {
                if (listComponentInstancesRequest instanceof ListComponentInstancesRequest) {
                    applicationId = listComponentInstancesRequest.applicationId;
                    componentId = listComponentInstancesRequest.componentId;
                    xEnvironmentID = listComponentInstancesRequest.xEnvironmentID;
                    xEnterpriseProjectID = listComponentInstancesRequest.xEnterpriseProjectID;
                } else {
                    applicationId = listComponentInstancesRequest['application_id'];
                    componentId = listComponentInstancesRequest['component_id'];
                    xEnvironmentID = listComponentInstancesRequest['X-Environment-ID'];
                    xEnterpriseProjectID = listComponentInstancesRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling listComponentInstances.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling listComponentInstances.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取组件快照列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listComponentSnapshots(listComponentSnapshotsRequest?: ListComponentSnapshotsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/applications/{application_id}/components/{component_id}/snapshots",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let componentId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (listComponentSnapshotsRequest !== null && listComponentSnapshotsRequest !== undefined) {
                if (listComponentSnapshotsRequest instanceof ListComponentSnapshotsRequest) {
                    applicationId = listComponentSnapshotsRequest.applicationId;
                    componentId = listComponentSnapshotsRequest.componentId;
                    xEnvironmentID = listComponentSnapshotsRequest.xEnvironmentID;
                    xEnterpriseProjectID = listComponentSnapshotsRequest.xEnterpriseProjectID;
                } else {
                    applicationId = listComponentSnapshotsRequest['application_id'];
                    componentId = listComponentSnapshotsRequest['component_id'];
                    xEnvironmentID = listComponentSnapshotsRequest['X-Environment-ID'];
                    xEnterpriseProjectID = listComponentSnapshotsRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling listComponentSnapshots.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling listComponentSnapshots.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取组件列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listComponents(listComponentsRequest?: ListComponentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/applications/{application_id}/components",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;
            
            let limit;
            
            let offset;
            
            let sortKey;
            
            let sort;

            if (listComponentsRequest !== null && listComponentsRequest !== undefined) {
                if (listComponentsRequest instanceof ListComponentsRequest) {
                    applicationId = listComponentsRequest.applicationId;
                    xEnvironmentID = listComponentsRequest.xEnvironmentID;
                    xEnterpriseProjectID = listComponentsRequest.xEnterpriseProjectID;
                    limit = listComponentsRequest.limit;
                    offset = listComponentsRequest.offset;
                    sortKey = listComponentsRequest.sortKey;
                    sort = listComponentsRequest.sort;
                } else {
                    applicationId = listComponentsRequest['application_id'];
                    xEnvironmentID = listComponentsRequest['X-Environment-ID'];
                    xEnterpriseProjectID = listComponentsRequest['X-Enterprise-Project-ID'];
                    limit = listComponentsRequest['limit'];
                    offset = listComponentsRequest['offset'];
                    sortKey = listComponentsRequest['sort_key'];
                    sort = listComponentsRequest['sort'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling listComponents.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取组件详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showComponent(showComponentRequest?: ShowComponentRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/applications/{application_id}/components/{component_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let componentId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (showComponentRequest !== null && showComponentRequest !== undefined) {
                if (showComponentRequest instanceof ShowComponentRequest) {
                    applicationId = showComponentRequest.applicationId;
                    componentId = showComponentRequest.componentId;
                    xEnvironmentID = showComponentRequest.xEnvironmentID;
                    xEnterpriseProjectID = showComponentRequest.xEnterpriseProjectID;
                } else {
                    applicationId = showComponentRequest['application_id'];
                    componentId = showComponentRequest['component_id'];
                    xEnvironmentID = showComponentRequest['X-Environment-ID'];
                    xEnterpriseProjectID = showComponentRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showComponent.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling showComponent.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新组件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateComponent(updateComponentRequest?: UpdateComponentRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cae/applications/{application_id}/components/{component_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;
            
            let componentId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (updateComponentRequest !== null && updateComponentRequest !== undefined) {
                if (updateComponentRequest instanceof UpdateComponentRequest) {
                    applicationId = updateComponentRequest.applicationId;
                    componentId = updateComponentRequest.componentId;
                    xEnvironmentID = updateComponentRequest.xEnvironmentID;
                    body = updateComponentRequest.body
                    xEnterpriseProjectID = updateComponentRequest.xEnterpriseProjectID;
                } else {
                    applicationId = updateComponentRequest['application_id'];
                    componentId = updateComponentRequest['component_id'];
                    xEnvironmentID = updateComponentRequest['X-Environment-ID'];
                    body = updateComponentRequest['body'];
                    xEnterpriseProjectID = updateComponentRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling updateComponent.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling updateComponent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建组件配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createComponentConfiguration(createComponentConfigurationRequest?: CreateComponentConfigurationRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/applications/{application_id}/components/{component_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;
            
            let componentId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (createComponentConfigurationRequest !== null && createComponentConfigurationRequest !== undefined) {
                if (createComponentConfigurationRequest instanceof CreateComponentConfigurationRequest) {
                    applicationId = createComponentConfigurationRequest.applicationId;
                    componentId = createComponentConfigurationRequest.componentId;
                    xEnvironmentID = createComponentConfigurationRequest.xEnvironmentID;
                    body = createComponentConfigurationRequest.body
                    xEnterpriseProjectID = createComponentConfigurationRequest.xEnterpriseProjectID;
                } else {
                    applicationId = createComponentConfigurationRequest['application_id'];
                    componentId = createComponentConfigurationRequest['component_id'];
                    xEnvironmentID = createComponentConfigurationRequest['X-Environment-ID'];
                    body = createComponentConfigurationRequest['body'];
                    xEnterpriseProjectID = createComponentConfigurationRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling createComponentConfiguration.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling createComponentConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除组件配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteComponentConfiguration(deleteComponentConfigurationRequest?: DeleteComponentConfigurationRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cae/applications/{application_id}/components/{component_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let componentId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (deleteComponentConfigurationRequest !== null && deleteComponentConfigurationRequest !== undefined) {
                if (deleteComponentConfigurationRequest instanceof DeleteComponentConfigurationRequest) {
                    applicationId = deleteComponentConfigurationRequest.applicationId;
                    componentId = deleteComponentConfigurationRequest.componentId;
                    xEnvironmentID = deleteComponentConfigurationRequest.xEnvironmentID;
                    xEnterpriseProjectID = deleteComponentConfigurationRequest.xEnterpriseProjectID;
                } else {
                    applicationId = deleteComponentConfigurationRequest['application_id'];
                    componentId = deleteComponentConfigurationRequest['component_id'];
                    xEnvironmentID = deleteComponentConfigurationRequest['X-Environment-ID'];
                    xEnterpriseProjectID = deleteComponentConfigurationRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling deleteComponentConfiguration.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling deleteComponentConfiguration.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取组件配置列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listComponentConfigurations(listComponentConfigurationsRequest?: ListComponentConfigurationsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/applications/{application_id}/components/{component_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationId;
            
            let componentId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;
            
            let displayMode;

            if (listComponentConfigurationsRequest !== null && listComponentConfigurationsRequest !== undefined) {
                if (listComponentConfigurationsRequest instanceof ListComponentConfigurationsRequest) {
                    applicationId = listComponentConfigurationsRequest.applicationId;
                    componentId = listComponentConfigurationsRequest.componentId;
                    xEnvironmentID = listComponentConfigurationsRequest.xEnvironmentID;
                    xEnterpriseProjectID = listComponentConfigurationsRequest.xEnterpriseProjectID;
                    displayMode = listComponentConfigurationsRequest.displayMode;
                } else {
                    applicationId = listComponentConfigurationsRequest['application_id'];
                    componentId = listComponentConfigurationsRequest['component_id'];
                    xEnvironmentID = listComponentConfigurationsRequest['X-Environment-ID'];
                    xEnterpriseProjectID = listComponentConfigurationsRequest['X-Enterprise-Project-ID'];
                    displayMode = listComponentConfigurationsRequest['displayMode'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling listComponentConfigurations.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling listComponentConfigurations.');
            }
            if (displayMode !== null && displayMode !== undefined) {
                localVarQueryParameter['displayMode'] = displayMode;
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDomain(createDomainRequest?: CreateDomainRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (createDomainRequest !== null && createDomainRequest !== undefined) {
                if (createDomainRequest instanceof CreateDomainRequest) {
                    xEnvironmentID = createDomainRequest.xEnvironmentID;
                    body = createDomainRequest.body
                    xEnterpriseProjectID = createDomainRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = createDomainRequest['X-Environment-ID'];
                    body = createDomainRequest['body'];
                    xEnterpriseProjectID = createDomainRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDomain(deleteDomainRequest?: DeleteDomainRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cae/domains/{domain_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (deleteDomainRequest !== null && deleteDomainRequest !== undefined) {
                if (deleteDomainRequest instanceof DeleteDomainRequest) {
                    domainId = deleteDomainRequest.domainId;
                    xEnvironmentID = deleteDomainRequest.xEnvironmentID;
                    xEnterpriseProjectID = deleteDomainRequest.xEnterpriseProjectID;
                } else {
                    domainId = deleteDomainRequest['domain_id'];
                    xEnvironmentID = deleteDomainRequest['X-Environment-ID'];
                    xEnterpriseProjectID = deleteDomainRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling deleteDomain.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取域名列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomains(listDomainsRequest?: ListDomainsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (listDomainsRequest !== null && listDomainsRequest !== undefined) {
                if (listDomainsRequest instanceof ListDomainsRequest) {
                    xEnvironmentID = listDomainsRequest.xEnvironmentID;
                    xEnterpriseProjectID = listDomainsRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = listDomainsRequest['X-Environment-ID'];
                    xEnterpriseProjectID = listDomainsRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取集群节点弹性公网IP列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEips(listEipsRequest?: ListEipsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/eips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (listEipsRequest !== null && listEipsRequest !== undefined) {
                if (listEipsRequest instanceof ListEipsRequest) {
                    xEnvironmentID = listEipsRequest.xEnvironmentID;
                    xEnterpriseProjectID = listEipsRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = listEipsRequest['X-Environment-ID'];
                    xEnterpriseProjectID = listEipsRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改出入网带宽以及开闭状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEip(updateEipRequest?: UpdateEipRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cae/eips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (updateEipRequest !== null && updateEipRequest !== undefined) {
                if (updateEipRequest instanceof UpdateEipRequest) {
                    xEnvironmentID = updateEipRequest.xEnvironmentID;
                    body = updateEipRequest.body
                    xEnterpriseProjectID = updateEipRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = updateEipRequest['X-Environment-ID'];
                    body = updateEipRequest['body'];
                    xEnterpriseProjectID = updateEipRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建环境。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEnvironment(createEnvironmentRequest?: CreateEnvironmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/environments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xEnterpriseProjectID;

            if (createEnvironmentRequest !== null && createEnvironmentRequest !== undefined) {
                if (createEnvironmentRequest instanceof CreateEnvironmentRequest) {
                    body = createEnvironmentRequest.body
                    xEnterpriseProjectID = createEnvironmentRequest.xEnterpriseProjectID;
                } else {
                    body = createEnvironmentRequest['body'];
                    xEnterpriseProjectID = createEnvironmentRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除环境。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEnvironment(deleteEnvironmentRequest?: DeleteEnvironmentRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cae/environments/{environment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let environmentId;
            
            let xEnterpriseProjectID;

            if (deleteEnvironmentRequest !== null && deleteEnvironmentRequest !== undefined) {
                if (deleteEnvironmentRequest instanceof DeleteEnvironmentRequest) {
                    environmentId = deleteEnvironmentRequest.environmentId;
                    xEnterpriseProjectID = deleteEnvironmentRequest.xEnterpriseProjectID;
                } else {
                    environmentId = deleteEnvironmentRequest['environment_id'];
                    xEnterpriseProjectID = deleteEnvironmentRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling deleteEnvironment.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.pathParams = { 'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取环境列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnvironments(listEnvironmentsRequest?: ListEnvironmentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/environments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xEnterpriseProjectID;

            if (listEnvironmentsRequest !== null && listEnvironmentsRequest !== undefined) {
                if (listEnvironmentsRequest instanceof ListEnvironmentsRequest) {
                    xEnterpriseProjectID = listEnvironmentsRequest.xEnterpriseProjectID;
                } else {
                    xEnterpriseProjectID = listEnvironmentsRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重试任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retryJob(retryJobRequest?: RetryJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (retryJobRequest !== null && retryJobRequest !== undefined) {
                if (retryJobRequest instanceof RetryJobRequest) {
                    jobId = retryJobRequest.jobId;
                    xEnvironmentID = retryJobRequest.xEnvironmentID;
                    xEnterpriseProjectID = retryJobRequest.xEnterpriseProjectID;
                } else {
                    jobId = retryJobRequest['job_id'];
                    xEnvironmentID = retryJobRequest['X-Environment-ID'];
                    xEnterpriseProjectID = retryJobRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling retryJob.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJob(showJobRequest?: ShowJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (showJobRequest !== null && showJobRequest !== undefined) {
                if (showJobRequest instanceof ShowJobRequest) {
                    jobId = showJobRequest.jobId;
                    xEnvironmentID = showJobRequest.xEnvironmentID;
                    xEnterpriseProjectID = showJobRequest.xEnterpriseProjectID;
                } else {
                    jobId = showJobRequest['job_id'];
                    xEnvironmentID = showJobRequest['X-Environment-ID'];
                    xEnterpriseProjectID = showJobRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJob.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建监控系统配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMonitorSystem(createMonitorSystemRequest?: CreateMonitorSystemRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/monitor-system",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (createMonitorSystemRequest !== null && createMonitorSystemRequest !== undefined) {
                if (createMonitorSystemRequest instanceof CreateMonitorSystemRequest) {
                    xEnvironmentID = createMonitorSystemRequest.xEnvironmentID;
                    body = createMonitorSystemRequest.body
                    xEnterpriseProjectID = createMonitorSystemRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = createMonitorSystemRequest['X-Environment-ID'];
                    body = createMonitorSystemRequest['body'];
                    xEnterpriseProjectID = createMonitorSystemRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取监控系统配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMonitorSystem(showMonitorSystemRequest?: ShowMonitorSystemRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/monitor-system",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (showMonitorSystemRequest !== null && showMonitorSystemRequest !== undefined) {
                if (showMonitorSystemRequest instanceof ShowMonitorSystemRequest) {
                    xEnvironmentID = showMonitorSystemRequest.xEnvironmentID;
                    xEnterpriseProjectID = showMonitorSystemRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = showMonitorSystemRequest['X-Environment-ID'];
                    xEnterpriseProjectID = showMonitorSystemRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新监控系统配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMonitorSystem(updateMonitorSystemRequest?: UpdateMonitorSystemRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cae/monitor-system/{monitor_system_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xEnvironmentID;
            
            let monitorSystemId;
            
            let xEnterpriseProjectID;

            if (updateMonitorSystemRequest !== null && updateMonitorSystemRequest !== undefined) {
                if (updateMonitorSystemRequest instanceof UpdateMonitorSystemRequest) {
                    xEnvironmentID = updateMonitorSystemRequest.xEnvironmentID;
                    monitorSystemId = updateMonitorSystemRequest.monitorSystemId;
                    body = updateMonitorSystemRequest.body
                    xEnterpriseProjectID = updateMonitorSystemRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = updateMonitorSystemRequest['X-Environment-ID'];
                    monitorSystemId = updateMonitorSystemRequest['monitor_system_id'];
                    body = updateMonitorSystemRequest['body'];
                    xEnterpriseProjectID = updateMonitorSystemRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (monitorSystemId === null || monitorSystemId === undefined) {
            throw new RequiredError('monitorSystemId','Required parameter monitorSystemId was null or undefined when calling updateMonitorSystem.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'monitor_system_id': monitorSystemId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建事件通知规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNoticeRule(createNoticeRuleRequest?: CreateNoticeRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/notice-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xEnterpriseProjectID;

            if (createNoticeRuleRequest !== null && createNoticeRuleRequest !== undefined) {
                if (createNoticeRuleRequest instanceof CreateNoticeRuleRequest) {
                    body = createNoticeRuleRequest.body
                    xEnterpriseProjectID = createNoticeRuleRequest.xEnterpriseProjectID;
                } else {
                    body = createNoticeRuleRequest['body'];
                    xEnterpriseProjectID = createNoticeRuleRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除事件通知规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNoticeRule(deleteNoticeRuleRequest?: DeleteNoticeRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cae/notice-rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleId;
            
            let xEnterpriseProjectID;

            if (deleteNoticeRuleRequest !== null && deleteNoticeRuleRequest !== undefined) {
                if (deleteNoticeRuleRequest instanceof DeleteNoticeRuleRequest) {
                    ruleId = deleteNoticeRuleRequest.ruleId;
                    xEnterpriseProjectID = deleteNoticeRuleRequest.xEnterpriseProjectID;
                } else {
                    ruleId = deleteNoticeRuleRequest['rule_id'];
                    xEnterpriseProjectID = deleteNoticeRuleRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteNoticeRule.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件通知规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNoticeRules(listNoticeRulesRequest?: ListNoticeRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/notice-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xEnterpriseProjectID;

            if (listNoticeRulesRequest !== null && listNoticeRulesRequest !== undefined) {
                if (listNoticeRulesRequest instanceof ListNoticeRulesRequest) {
                    xEnterpriseProjectID = listNoticeRulesRequest.xEnterpriseProjectID;
                } else {
                    xEnterpriseProjectID = listNoticeRulesRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件通知规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNoticeRule(showNoticeRuleRequest?: ShowNoticeRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/notice-rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleId;
            
            let xEnterpriseProjectID;

            if (showNoticeRuleRequest !== null && showNoticeRuleRequest !== undefined) {
                if (showNoticeRuleRequest instanceof ShowNoticeRuleRequest) {
                    ruleId = showNoticeRuleRequest.ruleId;
                    xEnterpriseProjectID = showNoticeRuleRequest.xEnterpriseProjectID;
                } else {
                    ruleId = showNoticeRuleRequest['rule_id'];
                    xEnterpriseProjectID = showNoticeRuleRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showNoticeRule.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改事件通知规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNoticeRule(updateNoticeRuleRequest?: UpdateNoticeRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cae/notice-rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ruleId;
            
            let xEnterpriseProjectID;

            if (updateNoticeRuleRequest !== null && updateNoticeRuleRequest !== undefined) {
                if (updateNoticeRuleRequest instanceof UpdateNoticeRuleRequest) {
                    ruleId = updateNoticeRuleRequest.ruleId;
                    body = updateNoticeRuleRequest.body
                    xEnterpriseProjectID = updateNoticeRuleRequest.xEnterpriseProjectID;
                } else {
                    ruleId = updateNoticeRuleRequest['rule_id'];
                    body = updateNoticeRuleRequest['body'];
                    xEnterpriseProjectID = updateNoticeRuleRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateNoticeRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关联租户已注册的凭据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecret(createSecretRequest?: CreateSecretRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/dew-secrets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (createSecretRequest !== null && createSecretRequest !== undefined) {
                if (createSecretRequest instanceof CreateSecretRequest) {
                    xEnvironmentID = createSecretRequest.xEnvironmentID;
                    body = createSecretRequest.body
                    xEnterpriseProjectID = createSecretRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = createSecretRequest['X-Environment-ID'];
                    body = createSecretRequest['body'];
                    xEnterpriseProjectID = createSecretRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除用户已在DEW服务上注册的凭据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecret(deleteSecretRequest?: DeleteSecretRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cae/dew-secrets/{secret_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretId;
            
            let xEnterpriseProjectID;

            if (deleteSecretRequest !== null && deleteSecretRequest !== undefined) {
                if (deleteSecretRequest instanceof DeleteSecretRequest) {
                    secretId = deleteSecretRequest.secretId;
                    xEnterpriseProjectID = deleteSecretRequest.xEnterpriseProjectID;
                } else {
                    secretId = deleteSecretRequest['secret_id'];
                    xEnterpriseProjectID = deleteSecretRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (secretId === null || secretId === undefined) {
            throw new RequiredError('secretId','Required parameter secretId was null or undefined when calling deleteSecret.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.pathParams = { 'secret_id': secretId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取当前正在使用的对应凭据组件列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEffectiveComponents(listEffectiveComponentsRequest?: ListEffectiveComponentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/dew-secrets/{secret_id}/effective-components",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretId;
            
            let xEnterpriseProjectID;

            if (listEffectiveComponentsRequest !== null && listEffectiveComponentsRequest !== undefined) {
                if (listEffectiveComponentsRequest instanceof ListEffectiveComponentsRequest) {
                    secretId = listEffectiveComponentsRequest.secretId;
                    xEnterpriseProjectID = listEffectiveComponentsRequest.xEnterpriseProjectID;
                } else {
                    secretId = listEffectiveComponentsRequest['secret_id'];
                    xEnterpriseProjectID = listEffectiveComponentsRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (secretId === null || secretId === undefined) {
            throw new RequiredError('secretId','Required parameter secretId was null or undefined when calling listEffectiveComponents.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.pathParams = { 'secret_id': secretId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取用户现有的凭据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecrets(listSecretsRequest?: ListSecretsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/dew-secrets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xEnterpriseProjectID;

            if (listSecretsRequest !== null && listSecretsRequest !== undefined) {
                if (listSecretsRequest instanceof ListSecretsRequest) {
                    xEnterpriseProjectID = listSecretsRequest.xEnterpriseProjectID;
                } else {
                    xEnterpriseProjectID = listSecretsRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改用户已在DEW服务上注册的凭据版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecret(updateSecretRequest?: UpdateSecretRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cae/dew-secrets/{secret_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let secretId;
            
            let xEnterpriseProjectID;

            if (updateSecretRequest !== null && updateSecretRequest !== undefined) {
                if (updateSecretRequest instanceof UpdateSecretRequest) {
                    secretId = updateSecretRequest.secretId;
                    body = updateSecretRequest.body
                    xEnterpriseProjectID = updateSecretRequest.xEnterpriseProjectID;
                } else {
                    secretId = updateSecretRequest['secret_id'];
                    body = updateSecretRequest['body'];
                    xEnterpriseProjectID = updateSecretRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (secretId === null || secretId === undefined) {
            throw new RequiredError('secretId','Required parameter secretId was null or undefined when calling updateSecret.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'secret_id': secretId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建定时启停规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTimerRule(createTimerRuleRequest?: CreateTimerRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/timer-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (createTimerRuleRequest !== null && createTimerRuleRequest !== undefined) {
                if (createTimerRuleRequest instanceof CreateTimerRuleRequest) {
                    xEnvironmentID = createTimerRuleRequest.xEnvironmentID;
                    body = createTimerRuleRequest.body
                    xEnterpriseProjectID = createTimerRuleRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = createTimerRuleRequest['X-Environment-ID'];
                    body = createTimerRuleRequest['body'];
                    xEnterpriseProjectID = createTimerRuleRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除定时启停规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTimerRule(deleteTimerRuleRequest?: DeleteTimerRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cae/timer-rules/{timer_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xEnvironmentID;
            
            let timerRuleId;
            
            let xEnterpriseProjectID;

            if (deleteTimerRuleRequest !== null && deleteTimerRuleRequest !== undefined) {
                if (deleteTimerRuleRequest instanceof DeleteTimerRuleRequest) {
                    xEnvironmentID = deleteTimerRuleRequest.xEnvironmentID;
                    timerRuleId = deleteTimerRuleRequest.timerRuleId;
                    xEnterpriseProjectID = deleteTimerRuleRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = deleteTimerRuleRequest['X-Environment-ID'];
                    timerRuleId = deleteTimerRuleRequest['timer_rule_id'];
                    xEnterpriseProjectID = deleteTimerRuleRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (timerRuleId === null || timerRuleId === undefined) {
            throw new RequiredError('timerRuleId','Required parameter timerRuleId was null or undefined when calling deleteTimerRule.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'timer_rule_id': timerRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取定时启停规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTimerRules(listTimerRulesRequest?: ListTimerRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/timer-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (listTimerRulesRequest !== null && listTimerRulesRequest !== undefined) {
                if (listTimerRulesRequest instanceof ListTimerRulesRequest) {
                    xEnvironmentID = listTimerRulesRequest.xEnvironmentID;
                    xEnterpriseProjectID = listTimerRulesRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = listTimerRulesRequest['X-Environment-ID'];
                    xEnterpriseProjectID = listTimerRulesRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取上次定时启停规则的执行情况。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showExecutionResult(showExecutionResultRequest?: ShowExecutionResultRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/timer-rules/{timer_rule_id}/execution-results",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xEnvironmentID;
            
            let timerRuleId;
            
            let xEnterpriseProjectID;

            if (showExecutionResultRequest !== null && showExecutionResultRequest !== undefined) {
                if (showExecutionResultRequest instanceof ShowExecutionResultRequest) {
                    xEnvironmentID = showExecutionResultRequest.xEnvironmentID;
                    timerRuleId = showExecutionResultRequest.timerRuleId;
                    xEnterpriseProjectID = showExecutionResultRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = showExecutionResultRequest['X-Environment-ID'];
                    timerRuleId = showExecutionResultRequest['timer_rule_id'];
                    xEnterpriseProjectID = showExecutionResultRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (timerRuleId === null || timerRuleId === undefined) {
            throw new RequiredError('timerRuleId','Required parameter timerRuleId was null or undefined when calling showExecutionResult.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'timer_rule_id': timerRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改定时启停规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTimerRule(updateTimerRuleRequest?: UpdateTimerRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cae/timer-rules/{timer_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xEnvironmentID;
            
            let timerRuleId;
            
            let xEnterpriseProjectID;

            if (updateTimerRuleRequest !== null && updateTimerRuleRequest !== undefined) {
                if (updateTimerRuleRequest instanceof UpdateTimerRuleRequest) {
                    xEnvironmentID = updateTimerRuleRequest.xEnvironmentID;
                    timerRuleId = updateTimerRuleRequest.timerRuleId;
                    body = updateTimerRuleRequest.body
                    xEnterpriseProjectID = updateTimerRuleRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = updateTimerRuleRequest['X-Environment-ID'];
                    timerRuleId = updateTimerRuleRequest['timer_rule_id'];
                    body = updateTimerRuleRequest['body'];
                    xEnterpriseProjectID = updateTimerRuleRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (timerRuleId === null || timerRuleId === undefined) {
            throw new RequiredError('timerRuleId','Required parameter timerRuleId was null or undefined when calling updateTimerRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'timer_rule_id': timerRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 授权云存储。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVolume(createVolumeRequest?: CreateVolumeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/volumes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (createVolumeRequest !== null && createVolumeRequest !== undefined) {
                if (createVolumeRequest instanceof CreateVolumeRequest) {
                    xEnvironmentID = createVolumeRequest.xEnvironmentID;
                    body = createVolumeRequest.body
                    xEnterpriseProjectID = createVolumeRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = createVolumeRequest['X-Environment-ID'];
                    body = createVolumeRequest['body'];
                    xEnterpriseProjectID = createVolumeRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解绑云存储。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVolume(deleteVolumeRequest?: DeleteVolumeRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cae/volumes/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (deleteVolumeRequest !== null && deleteVolumeRequest !== undefined) {
                if (deleteVolumeRequest instanceof DeleteVolumeRequest) {
                    id = deleteVolumeRequest.id;
                    xEnvironmentID = deleteVolumeRequest.xEnvironmentID;
                    xEnterpriseProjectID = deleteVolumeRequest.xEnterpriseProjectID;
                } else {
                    id = deleteVolumeRequest['id'];
                    xEnvironmentID = deleteVolumeRequest['X-Environment-ID'];
                    xEnterpriseProjectID = deleteVolumeRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteVolume.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取云存储列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVolumes(listVolumesRequest?: ListVolumesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/volumes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xEnvironmentID;
            
            let resourceType;
            
            let xEnterpriseProjectID;

            if (listVolumesRequest !== null && listVolumesRequest !== undefined) {
                if (listVolumesRequest instanceof ListVolumesRequest) {
                    xEnvironmentID = listVolumesRequest.xEnvironmentID;
                    resourceType = listVolumesRequest.resourceType;
                    xEnterpriseProjectID = listVolumesRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = listVolumesRequest['X-Environment-ID'];
                    resourceType = listVolumesRequest['resource_type'];
                    xEnterpriseProjectID = listVolumesRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
                throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listVolumes.');
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建CAE环境访问VPC配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpcEgress(createVpcEgressRequest?: CreateVpcEgressRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cae/vpc-egress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (createVpcEgressRequest !== null && createVpcEgressRequest !== undefined) {
                if (createVpcEgressRequest instanceof CreateVpcEgressRequest) {
                    xEnvironmentID = createVpcEgressRequest.xEnvironmentID;
                    body = createVpcEgressRequest.body
                    xEnterpriseProjectID = createVpcEgressRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = createVpcEgressRequest['X-Environment-ID'];
                    body = createVpcEgressRequest['body'];
                    xEnterpriseProjectID = createVpcEgressRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除CAE环境访问VPC配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpcEgress(deleteVpcEgressRequest?: DeleteVpcEgressRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/cae/vpc-egress/{vpc_egress_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpcEgressId;
            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (deleteVpcEgressRequest !== null && deleteVpcEgressRequest !== undefined) {
                if (deleteVpcEgressRequest instanceof DeleteVpcEgressRequest) {
                    vpcEgressId = deleteVpcEgressRequest.vpcEgressId;
                    xEnvironmentID = deleteVpcEgressRequest.xEnvironmentID;
                    xEnterpriseProjectID = deleteVpcEgressRequest.xEnterpriseProjectID;
                } else {
                    vpcEgressId = deleteVpcEgressRequest['vpc_egress_id'];
                    xEnvironmentID = deleteVpcEgressRequest['X-Environment-ID'];
                    xEnterpriseProjectID = deleteVpcEgressRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (vpcEgressId === null || vpcEgressId === undefined) {
            throw new RequiredError('vpcEgressId','Required parameter vpcEgressId was null or undefined when calling deleteVpcEgress.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.pathParams = { 'vpc_egress_id': vpcEgressId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取CAE环境访问VPC配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcEgress(listVpcEgressRequest?: ListVpcEgressRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cae/vpc-egress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xEnvironmentID;
            
            let xEnterpriseProjectID;

            if (listVpcEgressRequest !== null && listVpcEgressRequest !== undefined) {
                if (listVpcEgressRequest instanceof ListVpcEgressRequest) {
                    xEnvironmentID = listVpcEgressRequest.xEnvironmentID;
                    xEnterpriseProjectID = listVpcEgressRequest.xEnterpriseProjectID;
                } else {
                    xEnvironmentID = listVpcEgressRequest['X-Environment-ID'];
                    xEnterpriseProjectID = listVpcEgressRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEnvironmentID !== undefined && xEnvironmentID !== null) {
                localVarHeaderParameter['X-Environment-ID'] = String(xEnvironmentID);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CaeClient {
    return new CaeClient(client);
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