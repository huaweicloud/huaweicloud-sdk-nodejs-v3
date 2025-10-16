import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessKeyInfo } from './model/AccessKeyInfo';
import { AddClusterPortRequest } from './model/AddClusterPortRequest';
import { AddClusterPortResponse } from './model/AddClusterPortResponse';
import { AppInfo } from './model/AppInfo';
import { AppResourceInfo } from './model/AppResourceInfo';
import { AssociateAppsRequest } from './model/AssociateAppsRequest';
import { AssociateAppsRequestBody } from './model/AssociateAppsRequestBody';
import { AssociateAppsResponse } from './model/AssociateAppsResponse';
import { AssociationInfo } from './model/AssociationInfo';
import { AuthObject } from './model/AuthObject';
import { AuthObjectAuth } from './model/AuthObjectAuth';
import { AuthObjectAuthAccessKey } from './model/AuthObjectAuthAccessKey';
import { AuthObjectScope } from './model/AuthObjectScope';
import { AuthObjectScopeCluster } from './model/AuthObjectScopeCluster';
import { AuthorizeAccessKeysRequest } from './model/AuthorizeAccessKeysRequest';
import { AuthorizeAccessKeysRequestBody } from './model/AuthorizeAccessKeysRequestBody';
import { AuthorizeAccessKeysResponse } from './model/AuthorizeAccessKeysResponse';
import { BatchAccessKeysRequestBody } from './model/BatchAccessKeysRequestBody';
import { BatchDisableAccessKeysRequest } from './model/BatchDisableAccessKeysRequest';
import { BatchDisableAccessKeysResponse } from './model/BatchDisableAccessKeysResponse';
import { BatchEnableAccessKeysRequest } from './model/BatchEnableAccessKeysRequest';
import { BatchEnableAccessKeysResponse } from './model/BatchEnableAccessKeysResponse';
import { CancelAuthorizeAccessKeysRequest } from './model/CancelAuthorizeAccessKeysRequest';
import { CancelAuthorizeAccessKeysResponse } from './model/CancelAuthorizeAccessKeysResponse';
import { CcspClusterInfo } from './model/CcspClusterInfo';
import { CcspInstanceInfo } from './model/CcspInstanceInfo';
import { CcspServiceInfo } from './model/CcspServiceInfo';
import { CheckClusterPortRequest } from './model/CheckClusterPortRequest';
import { CheckClusterPortResponse } from './model/CheckClusterPortResponse';
import { CloudServiceInfo } from './model/CloudServiceInfo';
import { CreateAppAccessKeyRequest } from './model/CreateAppAccessKeyRequest';
import { CreateAppAccessKeyRequestBody } from './model/CreateAppAccessKeyRequestBody';
import { CreateAppAccessKeyResponse } from './model/CreateAppAccessKeyResponse';
import { CreateAppRequest } from './model/CreateAppRequest';
import { CreateAppRequestBody } from './model/CreateAppRequestBody';
import { CreateAppResponse } from './model/CreateAppResponse';
import { CreateClusterRequest } from './model/CreateClusterRequest';
import { CreateClusterRequestBody } from './model/CreateClusterRequestBody';
import { CreateClusterResponse } from './model/CreateClusterResponse';
import { CreateElbClusterPortRequestBody } from './model/CreateElbClusterPortRequestBody';
import { Datapoint } from './model/Datapoint';
import { DeAuthorizeAccessKeysRequestBody } from './model/DeAuthorizeAccessKeysRequestBody';
import { DeleteAccessKeyRequest } from './model/DeleteAccessKeyRequest';
import { DeleteAccessKeyResponse } from './model/DeleteAccessKeyResponse';
import { DeleteAppRequest } from './model/DeleteAppRequest';
import { DeleteAppResponse } from './model/DeleteAppResponse';
import { DeleteCcspClusterRequest } from './model/DeleteCcspClusterRequest';
import { DeleteCcspClusterResponse } from './model/DeleteCcspClusterResponse';
import { DeleteClusterPortRequest } from './model/DeleteClusterPortRequest';
import { DeleteClusterPortResponse } from './model/DeleteClusterPortResponse';
import { DisAssociateAppsRequestBody } from './model/DisAssociateAppsRequestBody';
import { DisableCcspInstanceRequest } from './model/DisableCcspInstanceRequest';
import { DisableCcspInstanceResponse } from './model/DisableCcspInstanceResponse';
import { DisassociateAppsRequest } from './model/DisassociateAppsRequest';
import { DisassociateAppsResponse } from './model/DisassociateAppsResponse';
import { ElbClusterPortReponseBody } from './model/ElbClusterPortReponseBody';
import { EnableCcspInstanceRequest } from './model/EnableCcspInstanceRequest';
import { EnableCcspInstanceResponse } from './model/EnableCcspInstanceResponse';
import { ImageInfo } from './model/ImageInfo';
import { InstanceDistribution } from './model/InstanceDistribution';
import { KmsInfo } from './model/KmsInfo';
import { KmsResourceInfo } from './model/KmsResourceInfo';
import { ListCcspTenantImagesRequest } from './model/ListCcspTenantImagesRequest';
import { ListCcspTenantImagesResponse } from './model/ListCcspTenantImagesResponse';
import { ListClusterPortRequest } from './model/ListClusterPortRequest';
import { ListClusterPortResponse } from './model/ListClusterPortResponse';
import { ResourceDistribution } from './model/ResourceDistribution';
import { ShowAccessKeyRequest } from './model/ShowAccessKeyRequest';
import { ShowAccessKeyResponse } from './model/ShowAccessKeyResponse';
import { ShowAppAccessKeyListRequest } from './model/ShowAppAccessKeyListRequest';
import { ShowAppAccessKeyListResponse } from './model/ShowAppAccessKeyListResponse';
import { ShowAppListRequest } from './model/ShowAppListRequest';
import { ShowAppListResponse } from './model/ShowAppListResponse';
import { ShowAssociationListRequest } from './model/ShowAssociationListRequest';
import { ShowAssociationListResponse } from './model/ShowAssociationListResponse';
import { ShowAuditLogRequest } from './model/ShowAuditLogRequest';
import { ShowAuditLogResponse } from './model/ShowAuditLogResponse';
import { ShowAuditLogResponseBodyAuditRecords } from './model/ShowAuditLogResponseBodyAuditRecords';
import { ShowAvailableAzRequest } from './model/ShowAvailableAzRequest';
import { ShowAvailableAzResponse } from './model/ShowAvailableAzResponse';
import { ShowAvailableAzResponsebodyAvailabilityZone } from './model/ShowAvailableAzResponsebodyAvailabilityZone';
import { ShowAvailableAzResponsebodyLocales } from './model/ShowAvailableAzResponsebodyLocales';
import { ShowCcspClusterListRequest } from './model/ShowCcspClusterListRequest';
import { ShowCcspClusterListResponse } from './model/ShowCcspClusterListResponse';
import { ShowCcspClusterRequest } from './model/ShowCcspClusterRequest';
import { ShowCcspClusterResponse } from './model/ShowCcspClusterResponse';
import { ShowCcspInstanceInfoRequest } from './model/ShowCcspInstanceInfoRequest';
import { ShowCcspInstanceInfoResponse } from './model/ShowCcspInstanceInfoResponse';
import { ShowClusterAccessKeyListRequest } from './model/ShowClusterAccessKeyListRequest';
import { ShowClusterAccessKeyListResponse } from './model/ShowClusterAccessKeyListResponse';
import { ShowClusterAccessKeyListResponseBodyResult } from './model/ShowClusterAccessKeyListResponseBodyResult';
import { ShowClusterUriRequest } from './model/ShowClusterUriRequest';
import { ShowClusterUriResponse } from './model/ShowClusterUriResponse';
import { ShowResourceDetailAccessKeyRequest } from './model/ShowResourceDetailAccessKeyRequest';
import { ShowResourceDetailAccessKeyResponse } from './model/ShowResourceDetailAccessKeyResponse';
import { ShowResourceDetailAccessKeyResponseBodyAkList } from './model/ShowResourceDetailAccessKeyResponseBodyAkList';
import { ShowResourceDetailCertificateRequest } from './model/ShowResourceDetailCertificateRequest';
import { ShowResourceDetailCertificateResponse } from './model/ShowResourceDetailCertificateResponse';
import { ShowResourceDetailCertificateResponseBodyCertificateList } from './model/ShowResourceDetailCertificateResponseBodyCertificateList';
import { ShowResourceInfoRequest } from './model/ShowResourceInfoRequest';
import { ShowResourceInfoResponse } from './model/ShowResourceInfoResponse';
import { ShowStatisticCertificateRequest } from './model/ShowStatisticCertificateRequest';
import { ShowStatisticCertificateResponse } from './model/ShowStatisticCertificateResponse';
import { ShowStatisticInterfaceRequest } from './model/ShowStatisticInterfaceRequest';
import { ShowStatisticInterfaceResponse } from './model/ShowStatisticInterfaceResponse';
import { ShowStatisticInterfaceResponseBodyMetrics } from './model/ShowStatisticInterfaceResponseBodyMetrics';
import { ShowStatisticResourceRequest } from './model/ShowStatisticResourceRequest';
import { ShowStatisticResourceResponse } from './model/ShowStatisticResourceResponse';
import { ShowStatisticResourceResponseBodyDatapoints } from './model/ShowStatisticResourceResponseBodyDatapoints';
import { ShowStatisticSecretKeyRequest } from './model/ShowStatisticSecretKeyRequest';
import { ShowStatisticSecretKeyResponse } from './model/ShowStatisticSecretKeyResponse';
import { ShowStatusAppItem } from './model/ShowStatusAppItem';
import { ShowStatusAppRequest } from './model/ShowStatusAppRequest';
import { ShowStatusAppResponse } from './model/ShowStatusAppResponse';
import { ShowStatusClusterItem } from './model/ShowStatusClusterItem';
import { ShowStatusClusterRequest } from './model/ShowStatusClusterRequest';
import { ShowStatusClusterResponse } from './model/ShowStatusClusterResponse';
import { ShowStatusInstanceItem } from './model/ShowStatusInstanceItem';
import { ShowStatusInstanceItemInstanceList } from './model/ShowStatusInstanceItemInstanceList';
import { ShowStatusInstanceRequest } from './model/ShowStatusInstanceRequest';
import { ShowStatusInstanceResponse } from './model/ShowStatusInstanceResponse';
import { ShowStatusServiceRequest } from './model/ShowStatusServiceRequest';
import { ShowStatusServiceResponse } from './model/ShowStatusServiceResponse';
import { ShowStatusServiceResponseBodyServerList } from './model/ShowStatusServiceResponseBodyServerList';
import { ShowVmMonitorRequest } from './model/ShowVmMonitorRequest';
import { ShowVmMonitorResponse } from './model/ShowVmMonitorResponse';
import { StatisticalCharacteristic } from './model/StatisticalCharacteristic';
import { SwitchCpcsTokenRequest } from './model/SwitchCpcsTokenRequest';
import { SwitchCpcsTokenResponse } from './model/SwitchCpcsTokenResponse';
import { SwitchTokenResponseAk } from './model/SwitchTokenResponseAk';
import { SwitchTokenResponseUser } from './model/SwitchTokenResponseUser';
import { SwitchTokenResponseUserDomain } from './model/SwitchTokenResponseUserDomain';
import { VendorCertificateStatistic } from './model/VendorCertificateStatistic';
import { VendorKeyStatistic } from './model/VendorKeyStatistic';
import { VsmResourceInfo } from './model/VsmResourceInfo';

export class CpcsClient {
    public static newBuilder(): ClientBuilder<CpcsClient> {
            let client = new ClientBuilder<CpcsClient>(newClient);
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
     * 创建集群模式端口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群模式端口
     * @param {string} clusterId 集群ID
     * @param {CreateElbClusterPortRequestBody} [createElbClusterPortRequestBody] 创建集群模式端口请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addClusterPort(addClusterPortRequest?: AddClusterPortRequest): Promise<AddClusterPortResponse> {
        const options = ParamCreater().addClusterPort(addClusterPortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建密码服务集群与应用绑定关系
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建密码服务集群与应用绑定关系
     * @param {AssociateAppsRequestBody} associateAppsRequestBody AssociateAppsRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateApps(associateAppsRequest?: AssociateAppsRequest): Promise<AssociateAppsResponse> {
        const options = ParamCreater().associateApps(associateAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 密码服务集群授予应用访问密钥的访问权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 密码服务集群授予应用访问密钥的访问权限
     * @param {string} clusterId 所需要绑定应用的密码集群ID
     * @param {AuthorizeAccessKeysRequestBody} authorizeAccessKeysRequestBody AuthorizeAccessKeysRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public authorizeAccessKeys(authorizeAccessKeysRequest?: AuthorizeAccessKeysRequest): Promise<AuthorizeAccessKeysResponse> {
        const options = ParamCreater().authorizeAccessKeys(authorizeAccessKeysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停用应用的访问密钥
     * &gt; 只有当访问密钥处于“启用”状态时，方可调用此接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停用应用的访问密钥
     * @param {string} appId 应用ID
     * @param {BatchAccessKeysRequestBody} batchDisableAccessKeysRequestBody BatchDisableAccessKeysRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDisableAccessKeys(batchDisableAccessKeysRequest?: BatchDisableAccessKeysRequest): Promise<BatchDisableAccessKeysResponse> {
        const options = ParamCreater().batchDisableAccessKeys(batchDisableAccessKeysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用应用的访问密钥
     * &gt; 只有当访问密钥处于“停用”状态时，方可调用此接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用应用的访问密钥
     * @param {string} appId 应用ID
     * @param {BatchAccessKeysRequestBody} batchEnableAccessKeysRequestBody BatchEnableAccessKeysRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchEnableAccessKeys(batchEnableAccessKeysRequest?: BatchEnableAccessKeysRequest): Promise<BatchEnableAccessKeysResponse> {
        const options = ParamCreater().batchEnableAccessKeys(batchEnableAccessKeysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 密码服务集群解除对访问密钥的授权
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 密码服务集群解除对访问密钥的授权
     * @param {string} clusterId 所需要解除授权的密码集群ID
     * @param {DeAuthorizeAccessKeysRequestBody} deAuthorizeAccessKeysRequestBody DeAuthorizeAccessKeysRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelAuthorizeAccessKeys(cancelAuthorizeAccessKeysRequest?: CancelAuthorizeAccessKeysRequest): Promise<CancelAuthorizeAccessKeysResponse> {
        const options = ParamCreater().cancelAuthorizeAccessKeys(cancelAuthorizeAccessKeysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检测该端口关联的监听器、后端服务器组是否正确无误。
     * &gt; 该接口调用后会根据实际情况，更新检查结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检测集群模式端口是否正常
     * @param {string} clusterId 集群ID
     * @param {string} id 端口的id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkClusterPort(checkClusterPortRequest?: CheckClusterPortRequest): Promise<CheckClusterPortResponse> {
        const options = ParamCreater().checkClusterPort(checkClusterPortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建应用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用
     * @param {CreateAppRequestBody} createAppRequestBody CreateAppRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApp(createAppRequest?: CreateAppRequest): Promise<CreateAppResponse> {
        const options = ParamCreater().createApp(createAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建访问密钥
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建访问密钥
     * @param {string} appId 应用ID
     * @param {CreateAppAccessKeyRequestBody} createAppAccessKeyRequestBody CreateAppAccessKeyRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAppAccessKey(createAppAccessKeyRequest?: CreateAppAccessKeyRequest): Promise<CreateAppAccessKeyResponse> {
        const options = ParamCreater().createAppAccessKey(createAppAccessKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建密码服务集群
     * &gt; 调用接口之后返回订单ID，需要到“待支付订单里面”支付成功之后才能创建密码服务集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建密码服务集群
     * @param {CreateClusterRequestBody} createClusterRequestBody CreateClusterRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCluster(createClusterRequest?: CreateClusterRequest): Promise<CreateClusterResponse> {
        const options = ParamCreater().createCluster(createClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用的访问密钥
     * &gt; 只有当访问密钥处于“停用”状态时，方可调用此接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用的访问密钥
     * @param {string} accessKeyId 访问密钥ID
     * @param {string} appId 应用ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAccessKey(deleteAccessKeyRequest?: DeleteAccessKeyRequest): Promise<DeleteAccessKeyResponse> {
        const options = ParamCreater().deleteAccessKey(deleteAccessKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用
     * &gt; 只有当应用与任何其它服务没有绑定关系的情况下，方可进行集群删除操作该操作不可恢复，请谨慎执行
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用
     * @param {string} appId 应用ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApp(deleteAppRequest?: DeleteAppRequest): Promise<DeleteAppResponse> {
        const options = ParamCreater().deleteApp(deleteAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除密码服务集群，即释放密码服务集群所有服务实例以及对应的VSM集群实例，并删除集群相关信息
     * &gt; 只有当集群与任何应用都没有绑定关系的情况下，且处于“运行中”状态，且退订了集群中所有实例，方可进行集群删除操作，该操作不可恢复，请谨慎执行
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除密码服务集群
     * @param {string} clusterId 密码服务集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCcspCluster(deleteCcspClusterRequest?: DeleteCcspClusterRequest): Promise<DeleteCcspClusterResponse> {
        const options = ParamCreater().deleteCcspCluster(deleteCcspClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除集群模式端口。
     * &gt; 由于端口可能被租户二次修改过，并用于其他业务,所以删除会有几个不同选项，具体查看参数说明。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群模式端口
     * @param {string} clusterId 集群ID
     * @param {string} id 端口的id
     * @param {'DELETE_DB' | 'TRY_DELETE' | 'FORCE_DELETE'} type DELETE_DB 仅删除CPCS数据库中的记录，不删除elb资源。 TRY_DELETE 当被删除的端口的wrong字段为false时，删除elb资源。不为false时仅删除数据库。 FORCE_DELETE 删除cpcs数据库和elb资源
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClusterPort(deleteClusterPortRequest?: DeleteClusterPortRequest): Promise<DeleteClusterPortResponse> {
        const options = ParamCreater().deleteClusterPort(deleteClusterPortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停用密码服务实例的业务功能
     * &gt; 只有当密码服务实例处于“启用”状态时，方可调用此接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停用密码服务实例的业务功能
     * @param {string} instanceId 密码服务实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableCcspInstance(disableCcspInstanceRequest?: DisableCcspInstanceRequest): Promise<DisableCcspInstanceResponse> {
        const options = ParamCreater().disableCcspInstance(disableCcspInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除密码服务集群与应用绑定关系
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除密码服务集群与应用绑定关系
     * @param {DisAssociateAppsRequestBody} disAssociateAppsRequestBody DisAssociateAppsRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateApps(disassociateAppsRequest?: DisassociateAppsRequest): Promise<DisassociateAppsResponse> {
        const options = ParamCreater().disassociateApps(disassociateAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用密码服务实例的业务功能
     * &gt; 只有当密码服务实例处于“停用”状态时，方可调用此接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用密码服务实例的业务功能
     * @param {string} instanceId 密码服务实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableCcspInstance(enableCcspInstanceRequest?: EnableCcspInstanceRequest): Promise<EnableCcspInstanceResponse> {
        const options = ParamCreater().enableCcspInstance(enableCcspInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询密码服务的镜像
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询密码服务的镜像
     * @param {number} [pageSize] 指定查询返回记录条数，默认值10
     * @param {number} [pageNum] 索引位置，从page_num指定的下一条数据开始查询默认值为0
     * @param {string} [imageName] 镜像名称
     * @param {string} [serviceType] 镜像所属的服务类型： - **ENCRYPT_DECRYPT** : 加解密服务； - **SIGN_VERIFY** : 签名验签服务； - **KMS** : 密钥管理服务； - **TIMESTAMP** : 时间戳服务； - **COLLA_SIGN** : 协同签名服务； - **OTP** : 动态令牌服务； - **DB_ENCRYPT** : 数据库加密服务； - **FILE_ENCRYPT** : 文件加密服务 - **TIMESTAMP** : 时间戳服务； - **DIGIT_SEAL** : 电子签章服务； - **SSL_VPN** : ssl vpn服务；
     * @param {string} [sortKey] 排序属性，目前支持以下属性： - **create_time** : 镜像的创建时间（默认）
     * @param {string} [sortDir] 排序方向，支持以下值： - **DESC** : 降序（默认） - **ASC** : 升序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCcspTenantImages(listCcspTenantImagesRequest?: ListCcspTenantImagesRequest): Promise<ListCcspTenantImagesResponse> {
        const options = ParamCreater().listCcspTenantImages(listCcspTenantImagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出当前集群下的所有集群模式端口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群模式端口列表
     * @param {string} clusterId 集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterPort(listClusterPortRequest?: ListClusterPortRequest): Promise<ListClusterPortResponse> {
        const options = ParamCreater().listClusterPort(listClusterPortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载访问密钥且只能下载一次。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载访问密钥
     * @param {string} accessKeyId 访问密钥ID
     * @param {string} appId 应用ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAccessKey(showAccessKeyRequest?: ShowAccessKeyRequest): Promise<ShowAccessKeyResponse> {
        const options = ParamCreater().showAccessKey(showAccessKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用的访问密钥列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用的访问密钥列表
     * @param {string} appId 应用ID
     * @param {number} [pageSize] 指定查询返回记录条数，默认值10
     * @param {number} [pageNum] 索引位置，从page_num指定的下一条数据开始查询默认值为0
     * @param {string} [keyName] 访问密钥名称
     * @param {string} [sortKey] 排序属性，目前支持以下属性： - **create_time** : 应用的创建时间（默认）
     * @param {string} [sortDir] 排序方向，支持以下值： - **DESC** : 降序（默认） - **ASC** : 升序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppAccessKeyList(showAppAccessKeyListRequest?: ShowAppAccessKeyListRequest): Promise<ShowAppAccessKeyListResponse> {
        const options = ParamCreater().showAppAccessKeyList(showAppAccessKeyListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用列表
     * @param {number} [pageSize] 指定查询返回记录条数，默认值10
     * @param {number} [pageNum] 索引位置，从page_num指定的下一条数据开始查询默认值为0
     * @param {string} [appName] 应用名称
     * @param {string} [vpcName] 所属的VPC名称
     * @param {string} [sortKey] 排序属性，目前支持以下属性： - **create_time** : 应用的创建时间（默认）
     * @param {string} [sortDir] 排序方向，支持以下值： - **DESC** : 降序（默认） - **ASC** : 升序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppList(showAppListRequest?: ShowAppListRequest): Promise<ShowAppListResponse> {
        const options = ParamCreater().showAppList(showAppListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询密码服务集群与应用的绑定关系列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询密码服务集群与应用的绑定关系列表
     * @param {string} [clusterId] 密码集群ID
     * @param {string} [appId] 应用ID
     * @param {number} [pageSize] 指定查询返回记录条数，默认值10
     * @param {number} [pageNum] 索引位置，从page_num指定的下一条数据开始查询默认值为0
     * @param {string} [sortKey] 排序属性，目前支持以下属性： - **create_time** : 应用的创建时间（默认）
     * @param {string} [sortDir] 排序方向，支持以下值： - **DESC** : 降序（默认） - **ASC** : 升序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAssociationList(showAssociationListRequest?: ShowAssociationListRequest): Promise<ShowAssociationListResponse> {
        const options = ParamCreater().showAssociationList(showAssociationListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询平台审计日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询平台审计日志
     * @param {number} [pageSize] 指定查询返回记录条数，默认值10
     * @param {number} [pageNum] 索引位置，从page_num指定的下一条数据开始查询默认值为0
     * @param {number} [startTime] 开始时间
     * @param {number} [endTime] 结束时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditLog(showAuditLogRequest?: ShowAuditLogRequest): Promise<ShowAuditLogResponse> {
        const options = ParamCreater().showAuditLog(showAuditLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可创建密码服务集群的可用区列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可创建密码服务集群的可用区列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAvailableAz(showAvailableAzRequest?: ShowAvailableAzRequest): Promise<ShowAvailableAzResponse> {
        const options = ParamCreater().showAvailableAz();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询密码服务集群信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询密码服务集群详情
     * @param {string} clusterId 密码服务集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCcspCluster(showCcspClusterRequest?: ShowCcspClusterRequest): Promise<ShowCcspClusterResponse> {
        const options = ParamCreater().showCcspCluster(showCcspClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询密码服务集群列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询密码服务集群列表
     * @param {number} [pageSize] 指定查询返回记录条数，默认值10
     * @param {number} [pageNum] 索引位置，从page_num指定的下一条数据开始查询默认值为0
     * @param {string} [name] 集群名称
     * @param {string} [serviceType] 集群所属的服务类型： - **ENCRYPT_DECRYPT** : 加解密服务； - **SIGN_VERIFY** : 签名验签服务； - **KMS** : 密钥管理服务； - **TIMESTAMP** : 时间戳服务； - **COLLA_SIGN** : 协同签名服务； - **OTP** : 动态令牌服务； - **DB_ENCRYPT** : 数据库加密服务； - **FILE_ENCRYPT** : 文件加密服务 - **TIMESTAMP** : 时间戳服务； - **DIGIT_SEAL** : 电子签章服务； - **SSL_VPN** : ssl vpn服务；
     * @param {string} [sortKey] 排序属性，目前支持以下属性： - **create_time** : 集群的创建时间（默认）
     * @param {string} [sortDir] 排序方向，支持以下值： - **DESC** : 降序（默认） - **ASC** : 升序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCcspClusterList(showCcspClusterListRequest?: ShowCcspClusterListRequest): Promise<ShowCcspClusterListResponse> {
        const options = ParamCreater().showCcspClusterList(showCcspClusterListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询密码服务实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询密码服务实例列表
     * @param {number} [pageSize] 指定查询返回记录条数，默认值10
     * @param {string} [name] 实例名称
     * @param {number} [pageNum] 索引位置，从page_num指定的下一条数据开始查询默认值为0
     * @param {string} [sortKey] 排序属性，目前支持以下属性： - **create_time** : 实例创建时间（默认）
     * @param {string} [sortDir] 排序方向，支持以下值： - **DESC** : 降序（默认） - **ASC** : 升序
     * @param {string} [clusterId] 密码服务集群ID
     * @param {number} [status] 实例的服务状态: - **enable** : 启用； - **disable** : 停用
     * @param {boolean} [isNormal] 实例健康状态： - **true** : 正常； - **false** : 异常
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCcspInstanceInfo(showCcspInstanceInfoRequest?: ShowCcspInstanceInfoRequest): Promise<ShowCcspInstanceInfoResponse> {
        const options = ParamCreater().showCcspInstanceInfo(showCcspInstanceInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询密码服务集群已授权的访问密钥列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询密码服务集群已授权的访问密钥列表
     * @param {string} clusterId 密码集群ID
     * @param {number} [pageSize] 指定查询返回记录条数，默认值10
     * @param {number} [pageNum] 索引位置，从page_num指定的下一条数据开始查询默认值为0
     * @param {string} [appName] 应用名称
     * @param {string} [sortKey] 排序属性，目前支持以下属性： - **create_time** : 应用的创建时间（默认）
     * @param {string} [sortDir] 排序方向，支持以下值： - **DESC** : 降序（默认） - **ASC** : 升序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterAccessKeyList(showClusterAccessKeyListRequest?: ShowClusterAccessKeyListRequest): Promise<ShowClusterAccessKeyListResponse> {
        const options = ParamCreater().showClusterAccessKeyList(showClusterAccessKeyListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取密码服务管理界面URL
     * &gt; URL存在有效期，URL失效后无法跳转管理界面，需要重新获取URL
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取密码服务管理界面URL
     * @param {string} clusterId 密码集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterUri(showClusterUriRequest?: ShowClusterUriRequest): Promise<ShowClusterUriResponse> {
        const options = ParamCreater().showClusterUri(showClusterUriRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取所监控或者统计的AK详情列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取AK详情
     * @param {string} [clusterId] 集群id，默认空字符串，默认查询所有集群
     * @param {string} [appId] 应用id，默认空字符串，默认查询所有的应用
     * @param {string} [serviceType] 密码服务类型，默认空字符串，默认查询所有密码服务类型
     * @param {string} [algorithmType] 算法类型，默认空字符串，0：国密，1：国际
     * @param {string} [certificateType] 证书类型，默认空字符串，0：根证书，1：业务证书
     * @param {number} [pageSize] 页面大小，不超过1500
     * @param {number} [pageNum] 页数，默认1
     * @param {number} [from] 查询起始时间戳，毫秒级时间戳，默认为0，默认从三天前查询
     * @param {string} [to] 查询终止时间戳，毫秒级时间戳，默认为0，默认查询到当前时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceDetailAccessKey(showResourceDetailAccessKeyRequest?: ShowResourceDetailAccessKeyRequest): Promise<ShowResourceDetailAccessKeyResponse> {
        const options = ParamCreater().showResourceDetailAccessKey(showResourceDetailAccessKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取所监控或者统计的证书详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取证书详情
     * @param {string} [clusterId] 集群id，默认空字符串，默认查询所有集群
     * @param {string} [appId] 应用id，默认空字符串，默认查询所有的应用
     * @param {string} [serviceType] 密码服务类型，默认空字符串，默认查询所有密码服务类型
     * @param {string} [algorithmType] 算法类型，默认空字符串，0：国密，1：国际
     * @param {string} [certificateType] 证书类型，默认空字符串，0：根证书，1：业务证书
     * @param {number} [pageSize] 页面大小，不超过1500
     * @param {number} [pageNum] 页数，默认1
     * @param {number} [from] 查询起始时间戳，毫秒级时间戳，默认为0，默认从三天前查询
     * @param {number} [to] 查询终止时间戳，毫秒级时间戳，默认为0，默认查询到当前时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceDetailCertificate(showResourceDetailCertificateRequest?: ShowResourceDetailCertificateRequest): Promise<ShowResourceDetailCertificateResponse> {
        const options = ParamCreater().showResourceDetailCertificate(showResourceDetailCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的资源分布信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的资源分布信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceInfo(showResourceInfoRequest?: ShowResourceInfoRequest): Promise<ShowResourceInfoResponse> {
        const options = ParamCreater().showResourceInfo();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取CPCS中证书分布统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取证书分布统计信息
     * @param {string} [clusterId] 集群id，默认为空，默认查询所有集群
     * @param {string} [appId] 应用id，默认为空，默认查询所有app
     * @param {number} [from] 查询的初始时间戳，毫秒级时间戳，默认查询前三天
     * @param {number} [to] 查询的终止时间戳，毫秒级时间戳，默认查询到当前时间
     * @param {number} [period] 统计周期，默认为1，五分钟为一个周期
     * @param {string} [filter] 统计值，默认为min:最小值
     * @param {string} [algorithm] 算法，有：“sm2”,\&quot;rsa\&quot;
     * @param {string} [algorithmType] 算法类型，0：国密算法，1：国际算法
     * @param {string} [certificateType] 证书类型，0：根证书，1：业务证书
     * @param {string} [serverType] 密码服务类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStatisticCertificate(showStatisticCertificateRequest?: ShowStatisticCertificateRequest): Promise<ShowStatisticCertificateResponse> {
        const options = ParamCreater().showStatisticCertificate(showStatisticCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取CPCS中接口调用统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取接口调用统计信息
     * @param {string} [clusterId] 集群id，默认为空，默认查询所有集群
     * @param {string} [appId] 应用id，默认为空，默认查询所有app
     * @param {number} [from] 查询的初始时间戳，毫秒级时间戳，默认查询前三天
     * @param {number} [to] 查询的终止时间戳，毫秒级时间戳，默认查询到当前时间
     * @param {number} [period] 统计周期，默认为1，五分钟为一个周期
     * @param {string} [filter] 统计值，默认为min:最小值
     * @param {string} [algorithm] 算法，有：“sm2”,\&quot;rsa\&quot;
     * @param {string} [algorithmType] 算法类型，0：国密算法，1：国际算法
     * @param {string} [certificateType] 证书类型，0：根证书，1：业务证书
     * @param {string} [serverType] 密码服务类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStatisticInterface(showStatisticInterfaceRequest?: ShowStatisticInterfaceRequest): Promise<ShowStatisticInterfaceResponse> {
        const options = ParamCreater().showStatisticInterface(showStatisticInterfaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取CPCS中\\资源总量统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取资源总量统计信息
     * @param {string} [clusterId] 集群id，默认为空，默认查询所有集群
     * @param {string} [appId] 应用id，默认为空，默认查询所有app
     * @param {number} [from] 查询的初始时间戳，毫秒级时间戳，默认查询前三天
     * @param {number} [to] 查询的终止时间戳，毫秒级时间戳，默认查询到当前时间
     * @param {number} [period] 统计周期，默认为1，五分钟为一个周期
     * @param {string} [filter] 统计值，默认为min:最小值
     * @param {string} [algorithm] 算法，有：“sm2”,\&quot;rsa\&quot;
     * @param {string} [algorithmType] 算法类型，0：国密算法，1：国际算法
     * @param {string} [certificateType] 证书类型，0：根证书，1：业务证书
     * @param {string} [serverType] 密码服务类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStatisticResource(showStatisticResourceRequest?: ShowStatisticResourceRequest): Promise<ShowStatisticResourceResponse> {
        const options = ParamCreater().showStatisticResource(showStatisticResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取CPCS中密钥分布统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取密钥分布统计信息
     * @param {string} [clusterId] 集群id，默认为空，默认查询所有集群
     * @param {string} [appId] 应用id，默认为空，默认查询所有app
     * @param {number} [from] 查询的初始时间戳，毫秒级时间戳，默认查询前三天
     * @param {number} [to] 查询的终止时间戳，毫秒级时间戳，默认查询到当前时间
     * @param {number} [period] 统计周期，默认为1，五分钟为一个周期
     * @param {string} [filter] 统计值，默认为min:最小值
     * @param {string} [algorithm] 算法，有：“sm2”,\&quot;rsa\&quot;
     * @param {string} [algorithmType] 算法类型，0：国密算法，1：国际算法
     * @param {string} [certificateType] 证书类型，0：根证书，1：业务证书
     * @param {string} [serverType] 密码服务类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStatisticSecretKey(showStatisticSecretKeyRequest?: ShowStatisticSecretKeyRequest): Promise<ShowStatisticSecretKeyResponse> {
        const options = ParamCreater().showStatisticSecretKey(showStatisticSecretKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * CPCS服务创建的应用状态监控
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取应用状态监控
     * @param {string} [clusterId] 集群ID，默认空字符串，默认查询所有集群。
     * @param {string} [appId] 应用ID，默认空字符串，默认查询所有应用。
     * @param {string} [instanceId] 集群ID，默认空字符串，默认查询所有集群。
     * @param {number} [from] 查询范围起始时间，毫秒时间戳，默认为0，默认查询三天前。
     * @param {number} [to] 查询范围终止时间，毫秒时间戳，默认为0，默认查询到当前时间。
     * @param {number} [period] 数据统计周期，默认0，默认为5分钟。
     * @param {string} [filter] 统计类型，默认min，默认用统计周期中数据的最小值。
     * @param {string} [serverType] 服务类型，默认空字符串，默认查询所有服务类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStatusApp(showStatusAppRequest?: ShowStatusAppRequest): Promise<ShowStatusAppResponse> {
        const options = ParamCreater().showStatusApp(showStatusAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * CPCS服务创建的集群的状态监控
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取集群监控信息
     * @param {string} [clusterId] 集群ID，默认空字符串，默认查询所有集群。
     * @param {string} [appId] 应用ID，默认空字符串，默认查询所有应用。
     * @param {string} [instanceId] 集群ID，默认空字符串，默认查询所有集群。
     * @param {number} [from] 查询范围起始时间，毫秒时间戳，默认为0，默认查询三天前。
     * @param {number} [to] 查询范围终止时间，毫秒时间戳，默认为0，默认查询到当前时间。
     * @param {number} [period] 数据统计周期，默认0，默认为5分钟。
     * @param {string} [filter] 统计类型，默认min，默认用统计周期中数据的最小值。
     * @param {string} [serverType] 服务类型，默认空字符串，默认查询所有服务类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStatusCluster(showStatusClusterRequest?: ShowStatusClusterRequest): Promise<ShowStatusClusterResponse> {
        const options = ParamCreater().showStatusCluster(showStatusClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * CPCS服务创建的密码服务实例的状态监控
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例监控信息
     * @param {string} [clusterId] 集群ID，默认空字符串，默认查询所有集群。
     * @param {string} [appId] 应用ID，默认空字符串，默认查询所有应用。
     * @param {string} [instanceId] 集群ID，默认空字符串，默认查询所有集群。
     * @param {number} [from] 查询范围起始时间，毫秒时间戳，默认为0，默认查询三天前。
     * @param {number} [to] 查询范围终止时间，毫秒时间戳，默认为0，默认查询到当前时间。
     * @param {number} [period] 数据统计周期，默认0，默认为5分钟。
     * @param {string} [filter] 统计类型，默认min，默认用统计周期中数据的最小值。
     * @param {string} [serverType] 服务类型，默认空字符串，默认查询所有服务类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStatusInstance(showStatusInstanceRequest?: ShowStatusInstanceRequest): Promise<ShowStatusInstanceResponse> {
        const options = ParamCreater().showStatusInstance(showStatusInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * CPCS服务的状态监控
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取服务监控信息
     * @param {string} [clusterId] 集群ID，默认空字符串，默认查询所有集群。
     * @param {string} [appId] 应用ID，默认空字符串，默认查询所有应用。
     * @param {string} [instanceId] 集群ID，默认空字符串，默认查询所有集群。
     * @param {number} [from] 查询范围起始时间，毫秒时间戳，默认为0，默认查询三天前。
     * @param {number} [to] 查询范围终止时间，毫秒时间戳，默认为0，默认查询到当前时间。
     * @param {number} [period] 数据统计周期，默认0，默认为5分钟。
     * @param {string} [filter] 统计类型，默认min，默认用统计周期中数据的最小值。
     * @param {string} [serverType] 服务类型，默认空字符串，默认查询所有服务类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStatusService(showStatusServiceRequest?: ShowStatusServiceRequest): Promise<ShowStatusServiceResponse> {
        const options = ParamCreater().showStatusService(showStatusServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取密码服务实例与虚拟密码机实例的指标（cpu使用率，内存使用率等指标）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 密码资源指标监控
     * @param {'ECS' | 'DHSM'} namespace 所属空间，分别从不同的来源获取监控数据，有：ECS，DHSM
     * @param {'mem_util' | 'cpu_uttl' | 'network_outgoing_bytes_rate_inband'} metricName 指标名称，有：mem_util，cpu_uttl，network_outgoing_bytes_rate_inband
     * @param {string} [instanceId] 实例id，默认空字符串，默认查询所有实例。
     * @param {string} [vsmId] 虚拟机id
     * @param {number} [from] 查询时间范围的起始时间，毫秒时间戳，默认0，默认查询从三天前。
     * @param {number} [to] 查询时间范围的终止时间，毫秒时间戳，默认0，默认查询到当前时间。
     * @param {number} [period] 统计数据周期，默认0，默认周期为5分钟
     * @param {string} [filter] 统计值类型，默认min，默认查询最小值
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVmMonitor(showVmMonitorRequest?: ShowVmMonitorRequest): Promise<ShowVmMonitorResponse> {
        const options = ParamCreater().showVmMonitor(showVmMonitorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用aksk换取cpcs token
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary AK/SK 换取Cpcs token
     * @param {AuthObject} auth 鉴权请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchCpcsToken(switchCpcsTokenRequest?: SwitchCpcsTokenRequest): Promise<SwitchCpcsTokenResponse> {
        const options = ParamCreater().switchCpcsToken(switchCpcsTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-CPCS-Token'];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建集群模式端口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addClusterPort(addClusterPortRequest?: AddClusterPortRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dew/cpcs/cluster/{cluster_id}/port",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (addClusterPortRequest !== null && addClusterPortRequest !== undefined) {
                if (addClusterPortRequest instanceof AddClusterPortRequest) {
                    clusterId = addClusterPortRequest.clusterId;
                    body = addClusterPortRequest.body
                } else {
                    clusterId = addClusterPortRequest['cluster_id'];
                    body = addClusterPortRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling addClusterPort.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建密码服务集群与应用绑定关系
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateApps(associateAppsRequest?: AssociateAppsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dew/cpcs/associate-apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (associateAppsRequest !== null && associateAppsRequest !== undefined) {
                if (associateAppsRequest instanceof AssociateAppsRequest) {
                    body = associateAppsRequest.body
                } else {
                    body = associateAppsRequest['body'];
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
         * 密码服务集群授予应用访问密钥的访问权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        authorizeAccessKeys(authorizeAccessKeysRequest?: AuthorizeAccessKeysRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dew/cpcs/cluster/{cluster_id}/authorize-access-keys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (authorizeAccessKeysRequest !== null && authorizeAccessKeysRequest !== undefined) {
                if (authorizeAccessKeysRequest instanceof AuthorizeAccessKeysRequest) {
                    clusterId = authorizeAccessKeysRequest.clusterId;
                    body = authorizeAccessKeysRequest.body
                } else {
                    clusterId = authorizeAccessKeysRequest['cluster_id'];
                    body = authorizeAccessKeysRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling authorizeAccessKeys.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停用应用的访问密钥
         * &gt; 只有当访问密钥处于“启用”状态时，方可调用此接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDisableAccessKeys(batchDisableAccessKeysRequest?: BatchDisableAccessKeysRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dew/cpcs/apps/{app_id}/access-keys/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;

            if (batchDisableAccessKeysRequest !== null && batchDisableAccessKeysRequest !== undefined) {
                if (batchDisableAccessKeysRequest instanceof BatchDisableAccessKeysRequest) {
                    appId = batchDisableAccessKeysRequest.appId;
                    body = batchDisableAccessKeysRequest.body
                } else {
                    appId = batchDisableAccessKeysRequest['app_id'];
                    body = batchDisableAccessKeysRequest['body'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling batchDisableAccessKeys.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用应用的访问密钥
         * &gt; 只有当访问密钥处于“停用”状态时，方可调用此接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchEnableAccessKeys(batchEnableAccessKeysRequest?: BatchEnableAccessKeysRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dew/cpcs/apps/{app_id}/access-keys/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;

            if (batchEnableAccessKeysRequest !== null && batchEnableAccessKeysRequest !== undefined) {
                if (batchEnableAccessKeysRequest instanceof BatchEnableAccessKeysRequest) {
                    appId = batchEnableAccessKeysRequest.appId;
                    body = batchEnableAccessKeysRequest.body
                } else {
                    appId = batchEnableAccessKeysRequest['app_id'];
                    body = batchEnableAccessKeysRequest['body'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling batchEnableAccessKeys.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 密码服务集群解除对访问密钥的授权
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelAuthorizeAccessKeys(cancelAuthorizeAccessKeysRequest?: CancelAuthorizeAccessKeysRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dew/cpcs/cluster/{cluster_id}/de-authorize-access-keys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (cancelAuthorizeAccessKeysRequest !== null && cancelAuthorizeAccessKeysRequest !== undefined) {
                if (cancelAuthorizeAccessKeysRequest instanceof CancelAuthorizeAccessKeysRequest) {
                    clusterId = cancelAuthorizeAccessKeysRequest.clusterId;
                    body = cancelAuthorizeAccessKeysRequest.body
                } else {
                    clusterId = cancelAuthorizeAccessKeysRequest['cluster_id'];
                    body = cancelAuthorizeAccessKeysRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling cancelAuthorizeAccessKeys.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检测该端口关联的监听器、后端服务器组是否正确无误。
         * &gt; 该接口调用后会根据实际情况，更新检查结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkClusterPort(checkClusterPortRequest?: CheckClusterPortRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/dew/cpcs/cluster/{cluster_id}/port/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let id;

            if (checkClusterPortRequest !== null && checkClusterPortRequest !== undefined) {
                if (checkClusterPortRequest instanceof CheckClusterPortRequest) {
                    clusterId = checkClusterPortRequest.clusterId;
                    id = checkClusterPortRequest.id;
                } else {
                    clusterId = checkClusterPortRequest['cluster_id'];
                    id = checkClusterPortRequest['id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling checkClusterPort.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling checkClusterPort.');
            }

            options.pathParams = { 'cluster_id': clusterId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建应用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApp(createAppRequest?: CreateAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dew/cpcs/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAppRequest !== null && createAppRequest !== undefined) {
                if (createAppRequest instanceof CreateAppRequest) {
                    body = createAppRequest.body
                } else {
                    body = createAppRequest['body'];
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
         * 创建访问密钥
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAppAccessKey(createAppAccessKeyRequest?: CreateAppAccessKeyRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dew/cpcs/apps/{app_id}/access-keys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;

            if (createAppAccessKeyRequest !== null && createAppAccessKeyRequest !== undefined) {
                if (createAppAccessKeyRequest instanceof CreateAppAccessKeyRequest) {
                    appId = createAppAccessKeyRequest.appId;
                    body = createAppAccessKeyRequest.body
                } else {
                    appId = createAppAccessKeyRequest['app_id'];
                    body = createAppAccessKeyRequest['body'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling createAppAccessKey.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建密码服务集群
         * &gt; 调用接口之后返回订单ID，需要到“待支付订单里面”支付成功之后才能创建密码服务集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCluster(createClusterRequest?: CreateClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dew/cpcs/cluster",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createClusterRequest !== null && createClusterRequest !== undefined) {
                if (createClusterRequest instanceof CreateClusterRequest) {
                    body = createClusterRequest.body
                } else {
                    body = createClusterRequest['body'];
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
         * 删除应用的访问密钥
         * &gt; 只有当访问密钥处于“停用”状态时，方可调用此接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAccessKey(deleteAccessKeyRequest?: DeleteAccessKeyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/dew/cpcs/apps/{app_id}/access-keys/{access_key_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let accessKeyId;
            
            let appId;

            if (deleteAccessKeyRequest !== null && deleteAccessKeyRequest !== undefined) {
                if (deleteAccessKeyRequest instanceof DeleteAccessKeyRequest) {
                    accessKeyId = deleteAccessKeyRequest.accessKeyId;
                    appId = deleteAccessKeyRequest.appId;
                } else {
                    accessKeyId = deleteAccessKeyRequest['access_key_id'];
                    appId = deleteAccessKeyRequest['app_id'];
                }
            }

        
            if (accessKeyId === null || accessKeyId === undefined) {
            throw new RequiredError('accessKeyId','Required parameter accessKeyId was null or undefined when calling deleteAccessKey.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling deleteAccessKey.');
            }

            options.pathParams = { 'access_key_id': accessKeyId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除应用
         * &gt; 只有当应用与任何其它服务没有绑定关系的情况下，方可进行集群删除操作该操作不可恢复，请谨慎执行
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApp(deleteAppRequest?: DeleteAppRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/dew/cpcs/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;

            if (deleteAppRequest !== null && deleteAppRequest !== undefined) {
                if (deleteAppRequest instanceof DeleteAppRequest) {
                    appId = deleteAppRequest.appId;
                } else {
                    appId = deleteAppRequest['app_id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling deleteApp.');
            }

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除密码服务集群，即释放密码服务集群所有服务实例以及对应的VSM集群实例，并删除集群相关信息
         * &gt; 只有当集群与任何应用都没有绑定关系的情况下，且处于“运行中”状态，且退订了集群中所有实例，方可进行集群删除操作，该操作不可恢复，请谨慎执行
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCcspCluster(deleteCcspClusterRequest?: DeleteCcspClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/dew/cpcs/cluster/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (deleteCcspClusterRequest !== null && deleteCcspClusterRequest !== undefined) {
                if (deleteCcspClusterRequest instanceof DeleteCcspClusterRequest) {
                    clusterId = deleteCcspClusterRequest.clusterId;
                } else {
                    clusterId = deleteCcspClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteCcspCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除集群模式端口。
         * &gt; 由于端口可能被租户二次修改过，并用于其他业务,所以删除会有几个不同选项，具体查看参数说明。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClusterPort(deleteClusterPortRequest?: DeleteClusterPortRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/dew/cpcs/cluster/{cluster_id}/port/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let id;
            
            let type;

            if (deleteClusterPortRequest !== null && deleteClusterPortRequest !== undefined) {
                if (deleteClusterPortRequest instanceof DeleteClusterPortRequest) {
                    clusterId = deleteClusterPortRequest.clusterId;
                    id = deleteClusterPortRequest.id;
                    type = deleteClusterPortRequest.type;
                } else {
                    clusterId = deleteClusterPortRequest['cluster_id'];
                    id = deleteClusterPortRequest['id'];
                    type = deleteClusterPortRequest['type'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteClusterPort.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteClusterPort.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling deleteClusterPort.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停用密码服务实例的业务功能
         * &gt; 只有当密码服务实例处于“启用”状态时，方可调用此接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableCcspInstance(disableCcspInstanceRequest?: DisableCcspInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dew/cpcs/instances/{instance_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (disableCcspInstanceRequest !== null && disableCcspInstanceRequest !== undefined) {
                if (disableCcspInstanceRequest instanceof DisableCcspInstanceRequest) {
                    instanceId = disableCcspInstanceRequest.instanceId;
                } else {
                    instanceId = disableCcspInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling disableCcspInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除密码服务集群与应用绑定关系
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateApps(disassociateAppsRequest?: DisassociateAppsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dew/cpcs/disassociate-apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (disassociateAppsRequest !== null && disassociateAppsRequest !== undefined) {
                if (disassociateAppsRequest instanceof DisassociateAppsRequest) {
                    body = disassociateAppsRequest.body
                } else {
                    body = disassociateAppsRequest['body'];
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
         * 启用密码服务实例的业务功能
         * &gt; 只有当密码服务实例处于“停用”状态时，方可调用此接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableCcspInstance(enableCcspInstanceRequest?: EnableCcspInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dew/cpcs/instances/{instance_id}/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (enableCcspInstanceRequest !== null && enableCcspInstanceRequest !== undefined) {
                if (enableCcspInstanceRequest instanceof EnableCcspInstanceRequest) {
                    instanceId = enableCcspInstanceRequest.instanceId;
                } else {
                    instanceId = enableCcspInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling enableCcspInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询密码服务的镜像
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCcspTenantImages(listCcspTenantImagesRequest?: ListCcspTenantImagesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/images",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageSize;
            
            let pageNum;
            
            let imageName;
            
            let serviceType;
            
            let sortKey;
            
            let sortDir;

            if (listCcspTenantImagesRequest !== null && listCcspTenantImagesRequest !== undefined) {
                if (listCcspTenantImagesRequest instanceof ListCcspTenantImagesRequest) {
                    pageSize = listCcspTenantImagesRequest.pageSize;
                    pageNum = listCcspTenantImagesRequest.pageNum;
                    imageName = listCcspTenantImagesRequest.imageName;
                    serviceType = listCcspTenantImagesRequest.serviceType;
                    sortKey = listCcspTenantImagesRequest.sortKey;
                    sortDir = listCcspTenantImagesRequest.sortDir;
                } else {
                    pageSize = listCcspTenantImagesRequest['page_size'];
                    pageNum = listCcspTenantImagesRequest['page_num'];
                    imageName = listCcspTenantImagesRequest['image_name'];
                    serviceType = listCcspTenantImagesRequest['service_type'];
                    sortKey = listCcspTenantImagesRequest['sort_key'];
                    sortDir = listCcspTenantImagesRequest['sort_dir'];
                }
            }

        
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNum !== null && pageNum !== undefined) {
                localVarQueryParameter['page_num'] = pageNum;
            }
            if (imageName !== null && imageName !== undefined) {
                localVarQueryParameter['image_name'] = imageName;
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出当前集群下的所有集群模式端口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterPort(listClusterPortRequest?: ListClusterPortRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/cluster/{cluster_id}/port",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterPortRequest !== null && listClusterPortRequest !== undefined) {
                if (listClusterPortRequest instanceof ListClusterPortRequest) {
                    clusterId = listClusterPortRequest.clusterId;
                } else {
                    clusterId = listClusterPortRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterPort.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载访问密钥且只能下载一次。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAccessKey(showAccessKeyRequest?: ShowAccessKeyRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/apps/{app_id}/access-keys/{access_key_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let accessKeyId;
            
            let appId;

            if (showAccessKeyRequest !== null && showAccessKeyRequest !== undefined) {
                if (showAccessKeyRequest instanceof ShowAccessKeyRequest) {
                    accessKeyId = showAccessKeyRequest.accessKeyId;
                    appId = showAccessKeyRequest.appId;
                } else {
                    accessKeyId = showAccessKeyRequest['access_key_id'];
                    appId = showAccessKeyRequest['app_id'];
                }
            }

        
            if (accessKeyId === null || accessKeyId === undefined) {
            throw new RequiredError('accessKeyId','Required parameter accessKeyId was null or undefined when calling showAccessKey.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showAccessKey.');
            }

            options.pathParams = { 'access_key_id': accessKeyId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用的访问密钥列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppAccessKeyList(showAppAccessKeyListRequest?: ShowAppAccessKeyListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/apps/{app_id}/access-keys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appId;
            
            let pageSize;
            
            let pageNum;
            
            let keyName;
            
            let sortKey;
            
            let sortDir;

            if (showAppAccessKeyListRequest !== null && showAppAccessKeyListRequest !== undefined) {
                if (showAppAccessKeyListRequest instanceof ShowAppAccessKeyListRequest) {
                    appId = showAppAccessKeyListRequest.appId;
                    pageSize = showAppAccessKeyListRequest.pageSize;
                    pageNum = showAppAccessKeyListRequest.pageNum;
                    keyName = showAppAccessKeyListRequest.keyName;
                    sortKey = showAppAccessKeyListRequest.sortKey;
                    sortDir = showAppAccessKeyListRequest.sortDir;
                } else {
                    appId = showAppAccessKeyListRequest['app_id'];
                    pageSize = showAppAccessKeyListRequest['page_size'];
                    pageNum = showAppAccessKeyListRequest['page_num'];
                    keyName = showAppAccessKeyListRequest['key_name'];
                    sortKey = showAppAccessKeyListRequest['sort_key'];
                    sortDir = showAppAccessKeyListRequest['sort_dir'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showAppAccessKeyList.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNum !== null && pageNum !== undefined) {
                localVarQueryParameter['page_num'] = pageNum;
            }
            if (keyName !== null && keyName !== undefined) {
                localVarQueryParameter['key_name'] = keyName;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppList(showAppListRequest?: ShowAppListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageSize;
            
            let pageNum;
            
            let appName;
            
            let vpcName;
            
            let sortKey;
            
            let sortDir;

            if (showAppListRequest !== null && showAppListRequest !== undefined) {
                if (showAppListRequest instanceof ShowAppListRequest) {
                    pageSize = showAppListRequest.pageSize;
                    pageNum = showAppListRequest.pageNum;
                    appName = showAppListRequest.appName;
                    vpcName = showAppListRequest.vpcName;
                    sortKey = showAppListRequest.sortKey;
                    sortDir = showAppListRequest.sortDir;
                } else {
                    pageSize = showAppListRequest['page_size'];
                    pageNum = showAppListRequest['page_num'];
                    appName = showAppListRequest['app_name'];
                    vpcName = showAppListRequest['vpc_name'];
                    sortKey = showAppListRequest['sort_key'];
                    sortDir = showAppListRequest['sort_dir'];
                }
            }

        
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNum !== null && pageNum !== undefined) {
                localVarQueryParameter['page_num'] = pageNum;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (vpcName !== null && vpcName !== undefined) {
                localVarQueryParameter['vpc_name'] = vpcName;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询密码服务集群与应用的绑定关系列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAssociationList(showAssociationListRequest?: ShowAssociationListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/associations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let appId;
            
            let pageSize;
            
            let pageNum;
            
            let sortKey;
            
            let sortDir;

            if (showAssociationListRequest !== null && showAssociationListRequest !== undefined) {
                if (showAssociationListRequest instanceof ShowAssociationListRequest) {
                    clusterId = showAssociationListRequest.clusterId;
                    appId = showAssociationListRequest.appId;
                    pageSize = showAssociationListRequest.pageSize;
                    pageNum = showAssociationListRequest.pageNum;
                    sortKey = showAssociationListRequest.sortKey;
                    sortDir = showAssociationListRequest.sortDir;
                } else {
                    clusterId = showAssociationListRequest['cluster_id'];
                    appId = showAssociationListRequest['app_id'];
                    pageSize = showAssociationListRequest['page_size'];
                    pageNum = showAssociationListRequest['page_num'];
                    sortKey = showAssociationListRequest['sort_key'];
                    sortDir = showAssociationListRequest['sort_dir'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNum !== null && pageNum !== undefined) {
                localVarQueryParameter['page_num'] = pageNum;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询平台审计日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditLog(showAuditLogRequest?: ShowAuditLogRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/platform/audit-log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageSize;
            
            let pageNum;
            
            let startTime;
            
            let endTime;

            if (showAuditLogRequest !== null && showAuditLogRequest !== undefined) {
                if (showAuditLogRequest instanceof ShowAuditLogRequest) {
                    pageSize = showAuditLogRequest.pageSize;
                    pageNum = showAuditLogRequest.pageNum;
                    startTime = showAuditLogRequest.startTime;
                    endTime = showAuditLogRequest.endTime;
                } else {
                    pageSize = showAuditLogRequest['page_size'];
                    pageNum = showAuditLogRequest['page_num'];
                    startTime = showAuditLogRequest['start_time'];
                    endTime = showAuditLogRequest['end_time'];
                }
            }

        
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNum !== null && pageNum !== undefined) {
                localVarQueryParameter['page_num'] = pageNum;
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
         * 查询可创建密码服务集群的可用区列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAvailableAz() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/az",
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
         * 查询密码服务集群信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCcspCluster(showCcspClusterRequest?: ShowCcspClusterRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/cluster/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showCcspClusterRequest !== null && showCcspClusterRequest !== undefined) {
                if (showCcspClusterRequest instanceof ShowCcspClusterRequest) {
                    clusterId = showCcspClusterRequest.clusterId;
                } else {
                    clusterId = showCcspClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showCcspCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询密码服务集群列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCcspClusterList(showCcspClusterListRequest?: ShowCcspClusterListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/cluster",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageSize;
            
            let pageNum;
            
            let name;
            
            let serviceType;
            
            let sortKey;
            
            let sortDir;

            if (showCcspClusterListRequest !== null && showCcspClusterListRequest !== undefined) {
                if (showCcspClusterListRequest instanceof ShowCcspClusterListRequest) {
                    pageSize = showCcspClusterListRequest.pageSize;
                    pageNum = showCcspClusterListRequest.pageNum;
                    name = showCcspClusterListRequest.name;
                    serviceType = showCcspClusterListRequest.serviceType;
                    sortKey = showCcspClusterListRequest.sortKey;
                    sortDir = showCcspClusterListRequest.sortDir;
                } else {
                    pageSize = showCcspClusterListRequest['page_size'];
                    pageNum = showCcspClusterListRequest['page_num'];
                    name = showCcspClusterListRequest['name'];
                    serviceType = showCcspClusterListRequest['service_type'];
                    sortKey = showCcspClusterListRequest['sort_key'];
                    sortDir = showCcspClusterListRequest['sort_dir'];
                }
            }

        
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNum !== null && pageNum !== undefined) {
                localVarQueryParameter['page_num'] = pageNum;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询密码服务实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCcspInstanceInfo(showCcspInstanceInfoRequest?: ShowCcspInstanceInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageSize;
            
            let name;
            
            let pageNum;
            
            let sortKey;
            
            let sortDir;
            
            let clusterId;
            
            let status;
            
            let isNormal;

            if (showCcspInstanceInfoRequest !== null && showCcspInstanceInfoRequest !== undefined) {
                if (showCcspInstanceInfoRequest instanceof ShowCcspInstanceInfoRequest) {
                    pageSize = showCcspInstanceInfoRequest.pageSize;
                    name = showCcspInstanceInfoRequest.name;
                    pageNum = showCcspInstanceInfoRequest.pageNum;
                    sortKey = showCcspInstanceInfoRequest.sortKey;
                    sortDir = showCcspInstanceInfoRequest.sortDir;
                    clusterId = showCcspInstanceInfoRequest.clusterId;
                    status = showCcspInstanceInfoRequest.status;
                    isNormal = showCcspInstanceInfoRequest.isNormal;
                } else {
                    pageSize = showCcspInstanceInfoRequest['page_size'];
                    name = showCcspInstanceInfoRequest['name'];
                    pageNum = showCcspInstanceInfoRequest['page_num'];
                    sortKey = showCcspInstanceInfoRequest['sort_key'];
                    sortDir = showCcspInstanceInfoRequest['sort_dir'];
                    clusterId = showCcspInstanceInfoRequest['cluster_id'];
                    status = showCcspInstanceInfoRequest['status'];
                    isNormal = showCcspInstanceInfoRequest['is_normal'];
                }
            }

        
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (pageNum !== null && pageNum !== undefined) {
                localVarQueryParameter['page_num'] = pageNum;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (isNormal !== null && isNormal !== undefined) {
                localVarQueryParameter['is_normal'] = isNormal;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询密码服务集群已授权的访问密钥列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterAccessKeyList(showClusterAccessKeyListRequest?: ShowClusterAccessKeyListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/cluster/{cluster_id}/access-keys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let pageSize;
            
            let pageNum;
            
            let appName;
            
            let sortKey;
            
            let sortDir;

            if (showClusterAccessKeyListRequest !== null && showClusterAccessKeyListRequest !== undefined) {
                if (showClusterAccessKeyListRequest instanceof ShowClusterAccessKeyListRequest) {
                    clusterId = showClusterAccessKeyListRequest.clusterId;
                    pageSize = showClusterAccessKeyListRequest.pageSize;
                    pageNum = showClusterAccessKeyListRequest.pageNum;
                    appName = showClusterAccessKeyListRequest.appName;
                    sortKey = showClusterAccessKeyListRequest.sortKey;
                    sortDir = showClusterAccessKeyListRequest.sortDir;
                } else {
                    clusterId = showClusterAccessKeyListRequest['cluster_id'];
                    pageSize = showClusterAccessKeyListRequest['page_size'];
                    pageNum = showClusterAccessKeyListRequest['page_num'];
                    appName = showClusterAccessKeyListRequest['app_name'];
                    sortKey = showClusterAccessKeyListRequest['sort_key'];
                    sortDir = showClusterAccessKeyListRequest['sort_dir'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterAccessKeyList.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNum !== null && pageNum !== undefined) {
                localVarQueryParameter['page_num'] = pageNum;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取密码服务管理界面URL
         * &gt; URL存在有效期，URL失效后无法跳转管理界面，需要重新获取URL
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterUri(showClusterUriRequest?: ShowClusterUriRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/cluster/{cluster_id}/uri",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showClusterUriRequest !== null && showClusterUriRequest !== undefined) {
                if (showClusterUriRequest instanceof ShowClusterUriRequest) {
                    clusterId = showClusterUriRequest.clusterId;
                } else {
                    clusterId = showClusterUriRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterUri.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取所监控或者统计的AK详情列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceDetailAccessKey(showResourceDetailAccessKeyRequest?: ShowResourceDetailAccessKeyRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/resource/access-key",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let appId;
            
            let serviceType;
            
            let algorithmType;
            
            let certificateType;
            
            let pageSize;
            
            let pageNum;
            
            let from;
            
            let to;

            if (showResourceDetailAccessKeyRequest !== null && showResourceDetailAccessKeyRequest !== undefined) {
                if (showResourceDetailAccessKeyRequest instanceof ShowResourceDetailAccessKeyRequest) {
                    clusterId = showResourceDetailAccessKeyRequest.clusterId;
                    appId = showResourceDetailAccessKeyRequest.appId;
                    serviceType = showResourceDetailAccessKeyRequest.serviceType;
                    algorithmType = showResourceDetailAccessKeyRequest.algorithmType;
                    certificateType = showResourceDetailAccessKeyRequest.certificateType;
                    pageSize = showResourceDetailAccessKeyRequest.pageSize;
                    pageNum = showResourceDetailAccessKeyRequest.pageNum;
                    from = showResourceDetailAccessKeyRequest.from;
                    to = showResourceDetailAccessKeyRequest.to;
                } else {
                    clusterId = showResourceDetailAccessKeyRequest['cluster_id'];
                    appId = showResourceDetailAccessKeyRequest['app_id'];
                    serviceType = showResourceDetailAccessKeyRequest['service_type'];
                    algorithmType = showResourceDetailAccessKeyRequest['algorithm_type'];
                    certificateType = showResourceDetailAccessKeyRequest['certificate_type'];
                    pageSize = showResourceDetailAccessKeyRequest['page_size'];
                    pageNum = showResourceDetailAccessKeyRequest['page_num'];
                    from = showResourceDetailAccessKeyRequest['from'];
                    to = showResourceDetailAccessKeyRequest['to'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }
            if (algorithmType !== null && algorithmType !== undefined) {
                localVarQueryParameter['algorithm_type'] = algorithmType;
            }
            if (certificateType !== null && certificateType !== undefined) {
                localVarQueryParameter['certificate_type'] = certificateType;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNum !== null && pageNum !== undefined) {
                localVarQueryParameter['page_num'] = pageNum;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取所监控或者统计的证书详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceDetailCertificate(showResourceDetailCertificateRequest?: ShowResourceDetailCertificateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/resource/certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let appId;
            
            let serviceType;
            
            let algorithmType;
            
            let certificateType;
            
            let pageSize;
            
            let pageNum;
            
            let from;
            
            let to;

            if (showResourceDetailCertificateRequest !== null && showResourceDetailCertificateRequest !== undefined) {
                if (showResourceDetailCertificateRequest instanceof ShowResourceDetailCertificateRequest) {
                    clusterId = showResourceDetailCertificateRequest.clusterId;
                    appId = showResourceDetailCertificateRequest.appId;
                    serviceType = showResourceDetailCertificateRequest.serviceType;
                    algorithmType = showResourceDetailCertificateRequest.algorithmType;
                    certificateType = showResourceDetailCertificateRequest.certificateType;
                    pageSize = showResourceDetailCertificateRequest.pageSize;
                    pageNum = showResourceDetailCertificateRequest.pageNum;
                    from = showResourceDetailCertificateRequest.from;
                    to = showResourceDetailCertificateRequest.to;
                } else {
                    clusterId = showResourceDetailCertificateRequest['cluster_id'];
                    appId = showResourceDetailCertificateRequest['app_id'];
                    serviceType = showResourceDetailCertificateRequest['service_type'];
                    algorithmType = showResourceDetailCertificateRequest['algorithm_type'];
                    certificateType = showResourceDetailCertificateRequest['certificate_type'];
                    pageSize = showResourceDetailCertificateRequest['page_size'];
                    pageNum = showResourceDetailCertificateRequest['page_num'];
                    from = showResourceDetailCertificateRequest['from'];
                    to = showResourceDetailCertificateRequest['to'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (serviceType !== null && serviceType !== undefined) {
                localVarQueryParameter['service_type'] = serviceType;
            }
            if (algorithmType !== null && algorithmType !== undefined) {
                localVarQueryParameter['algorithm_type'] = algorithmType;
            }
            if (certificateType !== null && certificateType !== undefined) {
                localVarQueryParameter['certificate_type'] = certificateType;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNum !== null && pageNum !== undefined) {
                localVarQueryParameter['page_num'] = pageNum;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户的资源分布信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceInfo() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/resource-info",
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
         * 获取CPCS中证书分布统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStatisticCertificate(showStatisticCertificateRequest?: ShowStatisticCertificateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/certificate/statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let appId;
            
            let from;
            
            let to;
            
            let period;
            
            let filter;
            
            let algorithm;
            
            let algorithmType;
            
            let certificateType;
            
            let serverType;

            if (showStatisticCertificateRequest !== null && showStatisticCertificateRequest !== undefined) {
                if (showStatisticCertificateRequest instanceof ShowStatisticCertificateRequest) {
                    clusterId = showStatisticCertificateRequest.clusterId;
                    appId = showStatisticCertificateRequest.appId;
                    from = showStatisticCertificateRequest.from;
                    to = showStatisticCertificateRequest.to;
                    period = showStatisticCertificateRequest.period;
                    filter = showStatisticCertificateRequest.filter;
                    algorithm = showStatisticCertificateRequest.algorithm;
                    algorithmType = showStatisticCertificateRequest.algorithmType;
                    certificateType = showStatisticCertificateRequest.certificateType;
                    serverType = showStatisticCertificateRequest.serverType;
                } else {
                    clusterId = showStatisticCertificateRequest['cluster_id'];
                    appId = showStatisticCertificateRequest['app_id'];
                    from = showStatisticCertificateRequest['from'];
                    to = showStatisticCertificateRequest['to'];
                    period = showStatisticCertificateRequest['period'];
                    filter = showStatisticCertificateRequest['filter'];
                    algorithm = showStatisticCertificateRequest['algorithm'];
                    algorithmType = showStatisticCertificateRequest['algorithm_type'];
                    certificateType = showStatisticCertificateRequest['certificate_type'];
                    serverType = showStatisticCertificateRequest['server_type'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (algorithm !== null && algorithm !== undefined) {
                localVarQueryParameter['algorithm'] = algorithm;
            }
            if (algorithmType !== null && algorithmType !== undefined) {
                localVarQueryParameter['algorithm_type'] = algorithmType;
            }
            if (certificateType !== null && certificateType !== undefined) {
                localVarQueryParameter['certificate_type'] = certificateType;
            }
            if (serverType !== null && serverType !== undefined) {
                localVarQueryParameter['server_type'] = serverType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取CPCS中接口调用统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStatisticInterface(showStatisticInterfaceRequest?: ShowStatisticInterfaceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/interface/statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let appId;
            
            let from;
            
            let to;
            
            let period;
            
            let filter;
            
            let algorithm;
            
            let algorithmType;
            
            let certificateType;
            
            let serverType;

            if (showStatisticInterfaceRequest !== null && showStatisticInterfaceRequest !== undefined) {
                if (showStatisticInterfaceRequest instanceof ShowStatisticInterfaceRequest) {
                    clusterId = showStatisticInterfaceRequest.clusterId;
                    appId = showStatisticInterfaceRequest.appId;
                    from = showStatisticInterfaceRequest.from;
                    to = showStatisticInterfaceRequest.to;
                    period = showStatisticInterfaceRequest.period;
                    filter = showStatisticInterfaceRequest.filter;
                    algorithm = showStatisticInterfaceRequest.algorithm;
                    algorithmType = showStatisticInterfaceRequest.algorithmType;
                    certificateType = showStatisticInterfaceRequest.certificateType;
                    serverType = showStatisticInterfaceRequest.serverType;
                } else {
                    clusterId = showStatisticInterfaceRequest['cluster_id'];
                    appId = showStatisticInterfaceRequest['app_id'];
                    from = showStatisticInterfaceRequest['from'];
                    to = showStatisticInterfaceRequest['to'];
                    period = showStatisticInterfaceRequest['period'];
                    filter = showStatisticInterfaceRequest['filter'];
                    algorithm = showStatisticInterfaceRequest['algorithm'];
                    algorithmType = showStatisticInterfaceRequest['algorithm_type'];
                    certificateType = showStatisticInterfaceRequest['certificate_type'];
                    serverType = showStatisticInterfaceRequest['server_type'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (algorithm !== null && algorithm !== undefined) {
                localVarQueryParameter['algorithm'] = algorithm;
            }
            if (algorithmType !== null && algorithmType !== undefined) {
                localVarQueryParameter['algorithm_type'] = algorithmType;
            }
            if (certificateType !== null && certificateType !== undefined) {
                localVarQueryParameter['certificate_type'] = certificateType;
            }
            if (serverType !== null && serverType !== undefined) {
                localVarQueryParameter['server_type'] = serverType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取CPCS中\\资源总量统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStatisticResource(showStatisticResourceRequest?: ShowStatisticResourceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/resource/statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let appId;
            
            let from;
            
            let to;
            
            let period;
            
            let filter;
            
            let algorithm;
            
            let algorithmType;
            
            let certificateType;
            
            let serverType;

            if (showStatisticResourceRequest !== null && showStatisticResourceRequest !== undefined) {
                if (showStatisticResourceRequest instanceof ShowStatisticResourceRequest) {
                    clusterId = showStatisticResourceRequest.clusterId;
                    appId = showStatisticResourceRequest.appId;
                    from = showStatisticResourceRequest.from;
                    to = showStatisticResourceRequest.to;
                    period = showStatisticResourceRequest.period;
                    filter = showStatisticResourceRequest.filter;
                    algorithm = showStatisticResourceRequest.algorithm;
                    algorithmType = showStatisticResourceRequest.algorithmType;
                    certificateType = showStatisticResourceRequest.certificateType;
                    serverType = showStatisticResourceRequest.serverType;
                } else {
                    clusterId = showStatisticResourceRequest['cluster_id'];
                    appId = showStatisticResourceRequest['app_id'];
                    from = showStatisticResourceRequest['from'];
                    to = showStatisticResourceRequest['to'];
                    period = showStatisticResourceRequest['period'];
                    filter = showStatisticResourceRequest['filter'];
                    algorithm = showStatisticResourceRequest['algorithm'];
                    algorithmType = showStatisticResourceRequest['algorithm_type'];
                    certificateType = showStatisticResourceRequest['certificate_type'];
                    serverType = showStatisticResourceRequest['server_type'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (algorithm !== null && algorithm !== undefined) {
                localVarQueryParameter['algorithm'] = algorithm;
            }
            if (algorithmType !== null && algorithmType !== undefined) {
                localVarQueryParameter['algorithm_type'] = algorithmType;
            }
            if (certificateType !== null && certificateType !== undefined) {
                localVarQueryParameter['certificate_type'] = certificateType;
            }
            if (serverType !== null && serverType !== undefined) {
                localVarQueryParameter['server_type'] = serverType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取CPCS中密钥分布统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStatisticSecretKey(showStatisticSecretKeyRequest?: ShowStatisticSecretKeyRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/secret-key/statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let appId;
            
            let from;
            
            let to;
            
            let period;
            
            let filter;
            
            let algorithm;
            
            let algorithmType;
            
            let certificateType;
            
            let serverType;

            if (showStatisticSecretKeyRequest !== null && showStatisticSecretKeyRequest !== undefined) {
                if (showStatisticSecretKeyRequest instanceof ShowStatisticSecretKeyRequest) {
                    clusterId = showStatisticSecretKeyRequest.clusterId;
                    appId = showStatisticSecretKeyRequest.appId;
                    from = showStatisticSecretKeyRequest.from;
                    to = showStatisticSecretKeyRequest.to;
                    period = showStatisticSecretKeyRequest.period;
                    filter = showStatisticSecretKeyRequest.filter;
                    algorithm = showStatisticSecretKeyRequest.algorithm;
                    algorithmType = showStatisticSecretKeyRequest.algorithmType;
                    certificateType = showStatisticSecretKeyRequest.certificateType;
                    serverType = showStatisticSecretKeyRequest.serverType;
                } else {
                    clusterId = showStatisticSecretKeyRequest['cluster_id'];
                    appId = showStatisticSecretKeyRequest['app_id'];
                    from = showStatisticSecretKeyRequest['from'];
                    to = showStatisticSecretKeyRequest['to'];
                    period = showStatisticSecretKeyRequest['period'];
                    filter = showStatisticSecretKeyRequest['filter'];
                    algorithm = showStatisticSecretKeyRequest['algorithm'];
                    algorithmType = showStatisticSecretKeyRequest['algorithm_type'];
                    certificateType = showStatisticSecretKeyRequest['certificate_type'];
                    serverType = showStatisticSecretKeyRequest['server_type'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (algorithm !== null && algorithm !== undefined) {
                localVarQueryParameter['algorithm'] = algorithm;
            }
            if (algorithmType !== null && algorithmType !== undefined) {
                localVarQueryParameter['algorithm_type'] = algorithmType;
            }
            if (certificateType !== null && certificateType !== undefined) {
                localVarQueryParameter['certificate_type'] = certificateType;
            }
            if (serverType !== null && serverType !== undefined) {
                localVarQueryParameter['server_type'] = serverType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * CPCS服务创建的应用状态监控
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStatusApp(showStatusAppRequest?: ShowStatusAppRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/app/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let appId;
            
            let instanceId;
            
            let from;
            
            let to;
            
            let period;
            
            let filter;
            
            let serverType;

            if (showStatusAppRequest !== null && showStatusAppRequest !== undefined) {
                if (showStatusAppRequest instanceof ShowStatusAppRequest) {
                    clusterId = showStatusAppRequest.clusterId;
                    appId = showStatusAppRequest.appId;
                    instanceId = showStatusAppRequest.instanceId;
                    from = showStatusAppRequest.from;
                    to = showStatusAppRequest.to;
                    period = showStatusAppRequest.period;
                    filter = showStatusAppRequest.filter;
                    serverType = showStatusAppRequest.serverType;
                } else {
                    clusterId = showStatusAppRequest['cluster_id'];
                    appId = showStatusAppRequest['app_id'];
                    instanceId = showStatusAppRequest['instance_id'];
                    from = showStatusAppRequest['from'];
                    to = showStatusAppRequest['to'];
                    period = showStatusAppRequest['period'];
                    filter = showStatusAppRequest['filter'];
                    serverType = showStatusAppRequest['server_type'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (serverType !== null && serverType !== undefined) {
                localVarQueryParameter['server_type'] = serverType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * CPCS服务创建的集群的状态监控
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStatusCluster(showStatusClusterRequest?: ShowStatusClusterRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/cluster/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let appId;
            
            let instanceId;
            
            let from;
            
            let to;
            
            let period;
            
            let filter;
            
            let serverType;

            if (showStatusClusterRequest !== null && showStatusClusterRequest !== undefined) {
                if (showStatusClusterRequest instanceof ShowStatusClusterRequest) {
                    clusterId = showStatusClusterRequest.clusterId;
                    appId = showStatusClusterRequest.appId;
                    instanceId = showStatusClusterRequest.instanceId;
                    from = showStatusClusterRequest.from;
                    to = showStatusClusterRequest.to;
                    period = showStatusClusterRequest.period;
                    filter = showStatusClusterRequest.filter;
                    serverType = showStatusClusterRequest.serverType;
                } else {
                    clusterId = showStatusClusterRequest['cluster_id'];
                    appId = showStatusClusterRequest['app_id'];
                    instanceId = showStatusClusterRequest['instance_id'];
                    from = showStatusClusterRequest['from'];
                    to = showStatusClusterRequest['to'];
                    period = showStatusClusterRequest['period'];
                    filter = showStatusClusterRequest['filter'];
                    serverType = showStatusClusterRequest['server_type'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (serverType !== null && serverType !== undefined) {
                localVarQueryParameter['server_type'] = serverType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * CPCS服务创建的密码服务实例的状态监控
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStatusInstance(showStatusInstanceRequest?: ShowStatusInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/instance/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let appId;
            
            let instanceId;
            
            let from;
            
            let to;
            
            let period;
            
            let filter;
            
            let serverType;

            if (showStatusInstanceRequest !== null && showStatusInstanceRequest !== undefined) {
                if (showStatusInstanceRequest instanceof ShowStatusInstanceRequest) {
                    clusterId = showStatusInstanceRequest.clusterId;
                    appId = showStatusInstanceRequest.appId;
                    instanceId = showStatusInstanceRequest.instanceId;
                    from = showStatusInstanceRequest.from;
                    to = showStatusInstanceRequest.to;
                    period = showStatusInstanceRequest.period;
                    filter = showStatusInstanceRequest.filter;
                    serverType = showStatusInstanceRequest.serverType;
                } else {
                    clusterId = showStatusInstanceRequest['cluster_id'];
                    appId = showStatusInstanceRequest['app_id'];
                    instanceId = showStatusInstanceRequest['instance_id'];
                    from = showStatusInstanceRequest['from'];
                    to = showStatusInstanceRequest['to'];
                    period = showStatusInstanceRequest['period'];
                    filter = showStatusInstanceRequest['filter'];
                    serverType = showStatusInstanceRequest['server_type'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (serverType !== null && serverType !== undefined) {
                localVarQueryParameter['server_type'] = serverType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * CPCS服务的状态监控
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStatusService(showStatusServiceRequest?: ShowStatusServiceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/service/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let appId;
            
            let instanceId;
            
            let from;
            
            let to;
            
            let period;
            
            let filter;
            
            let serverType;

            if (showStatusServiceRequest !== null && showStatusServiceRequest !== undefined) {
                if (showStatusServiceRequest instanceof ShowStatusServiceRequest) {
                    clusterId = showStatusServiceRequest.clusterId;
                    appId = showStatusServiceRequest.appId;
                    instanceId = showStatusServiceRequest.instanceId;
                    from = showStatusServiceRequest.from;
                    to = showStatusServiceRequest.to;
                    period = showStatusServiceRequest.period;
                    filter = showStatusServiceRequest.filter;
                    serverType = showStatusServiceRequest.serverType;
                } else {
                    clusterId = showStatusServiceRequest['cluster_id'];
                    appId = showStatusServiceRequest['app_id'];
                    instanceId = showStatusServiceRequest['instance_id'];
                    from = showStatusServiceRequest['from'];
                    to = showStatusServiceRequest['to'];
                    period = showStatusServiceRequest['period'];
                    filter = showStatusServiceRequest['filter'];
                    serverType = showStatusServiceRequest['server_type'];
                }
            }

        
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (serverType !== null && serverType !== undefined) {
                localVarQueryParameter['server_type'] = serverType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取密码服务实例与虚拟密码机实例的指标（cpu使用率，内存使用率等指标）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVmMonitor(showVmMonitorRequest?: ShowVmMonitorRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dew/cpcs/vm-monitor",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let namespace;
            
            let metricName;
            
            let instanceId;
            
            let vsmId;
            
            let from;
            
            let to;
            
            let period;
            
            let filter;

            if (showVmMonitorRequest !== null && showVmMonitorRequest !== undefined) {
                if (showVmMonitorRequest instanceof ShowVmMonitorRequest) {
                    namespace = showVmMonitorRequest.namespace;
                    metricName = showVmMonitorRequest.metricName;
                    instanceId = showVmMonitorRequest.instanceId;
                    vsmId = showVmMonitorRequest.vsmId;
                    from = showVmMonitorRequest.from;
                    to = showVmMonitorRequest.to;
                    period = showVmMonitorRequest.period;
                    filter = showVmMonitorRequest.filter;
                } else {
                    namespace = showVmMonitorRequest['namespace'];
                    metricName = showVmMonitorRequest['metric_name'];
                    instanceId = showVmMonitorRequest['instance_id'];
                    vsmId = showVmMonitorRequest['vsm_id'];
                    from = showVmMonitorRequest['from'];
                    to = showVmMonitorRequest['to'];
                    period = showVmMonitorRequest['period'];
                    filter = showVmMonitorRequest['filter'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
                throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showVmMonitor.');
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (metricName === null || metricName === undefined) {
                throw new RequiredError('metricName','Required parameter metricName was null or undefined when calling showVmMonitor.');
            }
            if (metricName !== null && metricName !== undefined) {
                localVarQueryParameter['metric_name'] = metricName;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (vsmId !== null && vsmId !== undefined) {
                localVarQueryParameter['vsm_id'] = vsmId;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用aksk换取cpcs token
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchCpcsToken(switchCpcsTokenRequest?: SwitchCpcsTokenRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dew/cpcs/token/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (switchCpcsTokenRequest !== null && switchCpcsTokenRequest !== undefined) {
                if (switchCpcsTokenRequest instanceof SwitchCpcsTokenRequest) {
                    body = switchCpcsTokenRequest.body
                } else {
                    body = switchCpcsTokenRequest['body'];
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

function newClient(client: HcClient): CpcsClient {
    return new CpcsClient(client);
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