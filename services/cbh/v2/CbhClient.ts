import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AgencyAuthorizeInfo } from './model/AgencyAuthorizeInfo';
import { AuthorizeCsmsAndKmsRequestBody } from './model/AuthorizeCsmsAndKmsRequestBody';
import { AvailabilityZones } from './model/AvailabilityZones';
import { BatchCreateInstanceTagRequest } from './model/BatchCreateInstanceTagRequest';
import { BatchCreateInstanceTagResponse } from './model/BatchCreateInstanceTagResponse';
import { CbsGetResourceIdTags } from './model/CbsGetResourceIdTags';
import { CbsGetSpecInfo } from './model/CbsGetSpecInfo';
import { ChangeInstanceRequestBody } from './model/ChangeInstanceRequestBody';
import { ChangeInstanceSecurityGroups } from './model/ChangeInstanceSecurityGroups';
import { ChangeInstanceTypeRequest } from './model/ChangeInstanceTypeRequest';
import { ChangeInstanceTypeResponse } from './model/ChangeInstanceTypeResponse';
import { CommonCbhRequestBody } from './model/CommonCbhRequestBody';
import { CountInstancesByTagRequest } from './model/CountInstancesByTagRequest';
import { CountInstancesByTagResponse } from './model/CountInstancesByTagResponse';
import { CreateInstanceBody } from './model/CreateInstanceBody';
import { CreateInstanceRequest } from './model/CreateInstanceRequest';
import { CreateInstanceResponse } from './model/CreateInstanceResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { InstallInstanceEipRequest } from './model/InstallInstanceEipRequest';
import { InstallInstanceEipResponse } from './model/InstallInstanceEipResponse';
import { InstanceDetail } from './model/InstanceDetail';
import { InstanceDetailAzInfo } from './model/InstanceDetailAzInfo';
import { InstanceDetailHaInfo } from './model/InstanceDetailHaInfo';
import { InstanceDetailNetwork } from './model/InstanceDetailNetwork';
import { InstanceDetailResourceInfo } from './model/InstanceDetailResourceInfo';
import { InstanceDetailStatusInfo } from './model/InstanceDetailStatusInfo';
import { IsAutoPay } from './model/IsAutoPay';
import { ListAvailableZonesRequest } from './model/ListAvailableZonesRequest';
import { ListAvailableZonesResponse } from './model/ListAvailableZonesResponse';
import { ListCBHByTagsRequestBody } from './model/ListCBHByTagsRequestBody';
import { ListInstancesByTagRequest } from './model/ListInstancesByTagRequest';
import { ListInstancesByTagResponse } from './model/ListInstancesByTagResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListSpecificationsRequest } from './model/ListSpecificationsRequest';
import { ListSpecificationsResponse } from './model/ListSpecificationsResponse';
import { ListTagsRequest } from './model/ListTagsRequest';
import { ListTagsResponse } from './model/ListTagsResponse';
import { LoginInstanceAdminRequest } from './model/LoginInstanceAdminRequest';
import { LoginInstanceAdminResponse } from './model/LoginInstanceAdminResponse';
import { LoginInstanceRequest } from './model/LoginInstanceRequest';
import { LoginInstanceResponse } from './model/LoginInstanceResponse';
import { Match } from './model/Match';
import { NetworkInfoCreate } from './model/NetworkInfoCreate';
import { OperateEipRequestBody } from './model/OperateEipRequestBody';
import { PrivateIp } from './model/PrivateIp';
import { PublicIp } from './model/PublicIp';
import { RebootCbhRequestBody } from './model/RebootCbhRequestBody';
import { RebootInstanceRequest } from './model/RebootInstanceRequest';
import { RebootInstanceResponse } from './model/RebootInstanceResponse';
import { RegisterAuthorizationRequest } from './model/RegisterAuthorizationRequest';
import { RegisterAuthorizationResponse } from './model/RegisterAuthorizationResponse';
import { ResetInstanceLoginMethodRequest } from './model/ResetInstanceLoginMethodRequest';
import { ResetInstanceLoginMethodResponse } from './model/ResetInstanceLoginMethodResponse';
import { ResetInstancePasswordRequest } from './model/ResetInstancePasswordRequest';
import { ResetInstancePasswordResponse } from './model/ResetInstancePasswordResponse';
import { ResetPassword } from './model/ResetPassword';
import { ResizeInstanceRequest } from './model/ResizeInstanceRequest';
import { ResizeInstanceResponse } from './model/ResizeInstanceResponse';
import { ResourceTag } from './model/ResourceTag';
import { Resources } from './model/Resources';
import { RollbackInstanceRequest } from './model/RollbackInstanceRequest';
import { RollbackInstanceRequestBody } from './model/RollbackInstanceRequestBody';
import { RollbackInstanceResponse } from './model/RollbackInstanceResponse';
import { SecurityGroup } from './model/SecurityGroup';
import { ShowAuthorizationRequest } from './model/ShowAuthorizationRequest';
import { ShowAuthorizationResponse } from './model/ShowAuthorizationResponse';
import { ShowEcsQuotaRequest } from './model/ShowEcsQuotaRequest';
import { ShowEcsQuotaResponse } from './model/ShowEcsQuotaResponse';
import { ShowInstanceStatusRequest } from './model/ShowInstanceStatusRequest';
import { ShowInstanceStatusResponse } from './model/ShowInstanceStatusResponse';
import { ShowInstanceTagsRequest } from './model/ShowInstanceTagsRequest';
import { ShowInstanceTagsResponse } from './model/ShowInstanceTagsResponse';
import { ShowOmUrlRequest } from './model/ShowOmUrlRequest';
import { ShowOmUrlResponse } from './model/ShowOmUrlResponse';
import { ShowQuotaRequest } from './model/ShowQuotaRequest';
import { ShowQuotaResponse } from './model/ShowQuotaResponse';
import { StartInstanceRequest } from './model/StartInstanceRequest';
import { StartInstanceResponse } from './model/StartInstanceResponse';
import { StopInstanceRequest } from './model/StopInstanceRequest';
import { StopInstanceResponse } from './model/StopInstanceResponse';
import { SwitchInstanceVpcRequest } from './model/SwitchInstanceVpcRequest';
import { SwitchInstanceVpcResponse } from './model/SwitchInstanceVpcResponse';
import { SwitchVirtualPrivateCloudRequestBody } from './model/SwitchVirtualPrivateCloudRequestBody';
import { Tags } from './model/Tags';
import { UninstallInstanceEipRequest } from './model/UninstallInstanceEipRequest';
import { UninstallInstanceEipResponse } from './model/UninstallInstanceEipResponse';
import { UpdateInstanceSecurityGroupRequest } from './model/UpdateInstanceSecurityGroupRequest';
import { UpdateInstanceSecurityGroupResponse } from './model/UpdateInstanceSecurityGroupResponse';
import { UpgradeCbhRequestBody } from './model/UpgradeCbhRequestBody';
import { UpgradeInstanceRequest } from './model/UpgradeInstanceRequest';
import { UpgradeInstanceResponse } from './model/UpgradeInstanceResponse';

export class CbhClient {
    public static newBuilder(): ClientBuilder<CbhClient> {
            let client = new ClientBuilder<CbhClient>(newClient);
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
     * 操作堡垒机实例资源标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 操作堡垒机实例资源标签
     * @param {string} resourceId 资源ID。(list接口获取)
     * @param {CbsGetResourceIdTags} batchCreateInstanceTagRequestBody BatchCreateInstanceTagRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateInstanceTag(batchCreateInstanceTagRequest?: BatchCreateInstanceTagRequest): Promise<BatchCreateInstanceTagResponse> {
        const options = ParamCreater().batchCreateInstanceTag(batchCreateInstanceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改单机堡垒机实例类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改单机堡垒机实例类型
     * @param {string} serverId 实例id
     * @param {string} [availabilityZone] 可用分区名称。  可参考接口\&quot;获取服务可用区\&quot;获取
     * @param {number} [isAutoPay] 是否自动支付，下单订购后，是否自动从客户的华为云账户中支付，而不需要客户手动去进行支付。 - 1：是（会自动选择折扣和优惠券进行优惠，然后自动从客户华为云账户中支付），自动支付失败后会生成订单成功(该订单应付金额是优惠后金额)、但订单状态为“待支付”，等待客户手动支付(手动支付时，客户还可以修改系统自动选择的折扣和优惠券) - 0：否（需要客户手动去支付，客户可以选择折扣和优惠券。）  默认值为“0”
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeInstanceType(changeInstanceTypeRequest?: ChangeInstanceTypeRequest): Promise<ChangeInstanceTypeResponse> {
        const options = ParamCreater().changeInstanceType(changeInstanceTypeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 统计符合标签条件的实例数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 统计符合标签条件的实例数量
     * @param {ListCBHByTagsRequestBody} countInstancesByTagRequestBody CountInstancesByTagRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countInstancesByTag(countInstancesByTagRequest?: CountInstancesByTagRequest): Promise<CountInstancesByTagResponse> {
        const options = ParamCreater().countInstancesByTag(countInstancesByTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建云堡垒机实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建堡垒机实例
     * @param {CreateInstanceBody} createInstanceRequestBody CreateInstanceBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstance(createInstanceRequest?: CreateInstanceRequest): Promise<CreateInstanceResponse> {
        const options = ParamCreater().createInstance(createInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除云堡垒机故障实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除故障云堡垒机实例
     * @param {number} instanceId 删除故障云堡垒机实例id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
        const options = ParamCreater().deleteInstance(deleteInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 云堡垒机实例绑定弹性公网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 堡垒机实例绑定弹性公网IP
     * @param {string} serverId 云堡垒机实例ID，使用UUID格式表示。  获取方法详见用户指南里面的实例\&quot;查看实例详情\&quot;
     * @param {OperateEipRequestBody} installInstanceEipRequestBody InstallInstanceEipRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public installInstanceEip(installInstanceEipRequest?: InstallInstanceEipRequest): Promise<InstallInstanceEipResponse> {
        const options = ParamCreater().installInstanceEip(installInstanceEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取云堡垒机服务可用区信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取服务可用区信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableZones(listAvailableZonesRequest?: ListAvailableZonesRequest): Promise<ListAvailableZonesResponse> {
        const options = ParamCreater().listAvailableZones();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前租户下的堡垒机实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取堡垒机实例列表
     * @param {number} [instanceId] 云堡垒机实例ID。（非必传，需要查询单个实例详情时传入）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstances(listInstancesRequest?: ListInstancesRequest): Promise<ListInstancesResponse> {
        const options = ParamCreater().listInstances(listInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 使用标签过滤实例
     * @param {ListCBHByTagsRequestBody} listInstancesByTagRequestBody ListInstancesByTagRequestBody
     * @param {string} [limit] 查询记录数（action为count时无此参数）如果action为filter默认为1000，limit最多为1000,不能为负数，最小值为1。
     * @param {string} [offset] 索引位置，偏移量（action为count时无此参数）从第一条数据偏移offset条数据后开始查询，如果action为filter默认为0（偏移0条数据，表示从第一条数据开始查询）,必须为数字，不能为负数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstancesByTag(listInstancesByTagRequest?: ListInstancesByTagRequest): Promise<ListInstancesByTagResponse> {
        const options = ParamCreater().listInstancesByTag(listInstancesByTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云堡垒机规格信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云堡垒机规格信息
     * @param {string} action 查询云堡垒机规格当前动作。 - create：查询可创建云堡垒机规格信息 - update：查询可变更云堡垒机规格信息
     * @param {string} [specCode] 云堡垒机规格信息，当action为update时此字段必填。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSpecifications(listSpecificationsRequest?: ListSpecificationsRequest): Promise<ListSpecificationsResponse> {
        const options = ParamCreater().listSpecifications(listSpecificationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在项目中的资源标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户在项目中的资源标签集合
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTags(listTagsRequest?: ListTagsRequest): Promise<ListTagsResponse> {
        const options = ParamCreater().listTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * IAM用户登录堡垒机实例console。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary IAM用户登录堡垒机实例console
     * @param {CommonCbhRequestBody} loginInstanceRequestBody LoginInstanceRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public loginInstance(loginInstanceRequest?: LoginInstanceRequest): Promise<LoginInstanceResponse> {
        const options = ParamCreater().loginInstance(loginInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户登录堡垒机实例admin的console。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 用户登录堡垒机实例admin的console
     * @param {string} serverId 云堡垒机实例ID，使用UUID格式表示。  获取方法详见用户指南里面的实例\&quot;查看实例详情\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public loginInstanceAdmin(loginInstanceAdminRequest?: LoginInstanceAdminRequest): Promise<LoginInstanceAdminResponse> {
        const options = ParamCreater().loginInstanceAdmin(loginInstanceAdminRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启云堡垒机实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启堡垒机实例
     * @param {RebootCbhRequestBody} rebootInstanceRequestBody RestartInstanceRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rebootInstance(rebootInstanceRequest?: RebootInstanceRequest): Promise<RebootInstanceResponse> {
        const options = ParamCreater().rebootInstance(rebootInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 租户创建或取消云堡垒机服务的委托授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 租户创建或取消云堡垒机服务的委托授权
     * @param {AuthorizeCsmsAndKmsRequestBody} registerAuthorizationRequestBody RegisterAuthorizationRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerAuthorization(registerAuthorizationRequest?: RegisterAuthorizationRequest): Promise<RegisterAuthorizationResponse> {
        const options = ParamCreater().registerAuthorization(registerAuthorizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置堡垒机实例admin用户登录方式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置堡垒机实例admin登录方式
     * @param {CommonCbhRequestBody} resetInstanceLoginMethodRequestBody ResetInstanceLoginMethodRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetInstanceLoginMethod(resetInstanceLoginMethodRequest?: ResetInstanceLoginMethodRequest): Promise<ResetInstanceLoginMethodResponse> {
        const options = ParamCreater().resetInstanceLoginMethod(resetInstanceLoginMethodRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置云堡垒机实例web登录admin用户密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置堡垒机实例admin密码
     * @param {ResetPassword} resetInstancePasswordRequestBody ResetInstancePasswordRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetInstancePassword(resetInstancePasswordRequest?: ResetInstancePasswordRequest): Promise<ResetInstancePasswordResponse> {
        const options = ParamCreater().resetInstancePassword(resetInstancePasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更云堡垒机实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更堡垒机实例
     * @param {ChangeInstanceRequestBody} resizeInstanceRequestBody ResizeInstanceRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeInstance(resizeInstanceRequest?: ResizeInstanceRequest): Promise<ResizeInstanceResponse> {
        const options = ParamCreater().resizeInstance(resizeInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 回退升级的云堡垒机实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 回退升级的堡垒机实例
     * @param {RollbackInstanceRequestBody} rollbackInstanceRequestBody 升级回退的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rollbackInstance(rollbackInstanceRequest?: RollbackInstanceRequest): Promise<RollbackInstanceResponse> {
        const options = ParamCreater().rollbackInstance(rollbackInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取租户给云堡垒机服务委托授权信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取租户给云堡垒机服务委托授权信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuthorization(showAuthorizationRequest?: ShowAuthorizationRequest): Promise<ShowAuthorizationResponse> {
        const options = ParamCreater().showAuthorization();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前租户所选择的可用分区里的堡垒机ECS规格是否可用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取创建堡垒机实例所需ECS资源配额
     * @param {string} availabilityZone 可用分区名称。  可参考接口\&quot;获取服务可用区\&quot;获取
     * @param {string} resourceSpecCode 待创建云堡垒机规格ID，例如： - cbh.basic.10  10资产标准版 - cbh.enhance.10  10资产专业版  可参考接口\&quot;查询云堡垒机规格信息\&quot;获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEcsQuota(showEcsQuotaRequest?: ShowEcsQuotaRequest): Promise<ShowEcsQuotaResponse> {
        const options = ParamCreater().showEcsQuota(showEcsQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取堡垒机实例状态信息（未删除实例）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取堡垒机实例状态信息
     * @param {string} serverId 云堡垒机实例ID，使用UUID格式表示。  获取方法详见用户指南里面的实例\&quot;查看实例详情\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceStatus(showInstanceStatusRequest?: ShowInstanceStatusRequest): Promise<ShowInstanceStatusResponse> {
        const options = ParamCreater().showInstanceStatus(showInstanceStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询堡垒机实例资源的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询堡垒机实例资源的标签信息
     * @param {string} resourceId 资源ID。(list接口获取)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceTags(showInstanceTagsRequest?: ShowInstanceTagsRequest): Promise<ShowInstanceTagsResponse> {
        const options = ParamCreater().showInstanceTags(showInstanceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取运维链接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取运维链接
     * @param {string} serverId 云堡垒机服务器ID
     * @param {string} ipAddress 被纳管主机IP
     * @param {string} hostAccountName 被纳管主机的账户
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOmUrl(showOmUrlRequest?: ShowOmUrlRequest): Promise<ShowOmUrlResponse> {
        const options = ParamCreater().showOmUrl(showOmUrlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取堡垒机实例配额信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取堡垒机实例配额
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
     * 启动云堡垒机实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动堡垒机实例
     * @param {CommonCbhRequestBody} startInstanceRequestBody StarInstanceRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startInstance(startInstanceRequest?: StartInstanceRequest): Promise<StartInstanceResponse> {
        const options = ParamCreater().startInstance(startInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭云堡垒机实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭堡垒机实例
     * @param {CommonCbhRequestBody} stopInstanceRequestBody StopInstanceRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopInstance(stopInstanceRequest?: StopInstanceRequest): Promise<StopInstanceResponse> {
        const options = ParamCreater().stopInstance(stopInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 切换堡垒机虚拟私有云
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换堡垒机虚拟私有云
     * @param {SwitchVirtualPrivateCloudRequestBody} switchInstanceVpcRequestBody 切换vpc的body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchInstanceVpc(switchInstanceVpcRequest?: SwitchInstanceVpcRequest): Promise<SwitchInstanceVpcResponse> {
        const options = ParamCreater().switchInstanceVpc(switchInstanceVpcRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为云堡垒机实例解绑弹性公网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 堡垒机实例解绑弹性公网IP
     * @param {string} serverId 云堡垒机实例ID，使用UUID格式表示。  获取方法详见用户指南里面的实例\&quot;查看实例详情\&quot;
     * @param {OperateEipRequestBody} uninstallInstanceEipRequestBody UninstallInstanceEipRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uninstallInstanceEip(uninstallInstanceEipRequest?: UninstallInstanceEipRequest): Promise<UninstallInstanceEipResponse> {
        const options = ParamCreater().uninstallInstanceEip(uninstallInstanceEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改堡垒机实例安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改堡垒机实例安全组
     * @param {string} serverId 云堡垒机实例ID，使用UUID格式表示。  获取方法详见用户指南里面的实例\&quot;查看实例详情\&quot;
     * @param {ChangeInstanceSecurityGroups} updateInstanceSecurityGroupRequestBody UpdateInstanceSecurityGroupRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceSecurityGroup(updateInstanceSecurityGroupRequest?: UpdateInstanceSecurityGroupRequest): Promise<UpdateInstanceSecurityGroupResponse> {
        const options = ParamCreater().updateInstanceSecurityGroup(updateInstanceSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 升级云堡垒机实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 升级堡垒机实例
     * @param {UpgradeCbhRequestBody} upgradeInstanceRequestBody UpgradeInstanceRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeInstance(upgradeInstanceRequest?: UpgradeInstanceRequest): Promise<UpgradeInstanceResponse> {
        const options = ParamCreater().upgradeInstance(upgradeInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 操作堡垒机实例资源标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateInstanceTag(batchCreateInstanceTagRequest?: BatchCreateInstanceTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cbs/instance/{resource_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchCreateInstanceTagRequest !== null && batchCreateInstanceTagRequest !== undefined) {
                if (batchCreateInstanceTagRequest instanceof BatchCreateInstanceTagRequest) {
                    resourceId = batchCreateInstanceTagRequest.resourceId;
                    body = batchCreateInstanceTagRequest.body
                } else {
                    resourceId = batchCreateInstanceTagRequest['resource_id'];
                    body = batchCreateInstanceTagRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateInstanceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改单机堡垒机实例类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeInstanceType(changeInstanceTypeRequest?: ChangeInstanceTypeRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/cbs/instance/type",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serverId;
            
            let availabilityZone;
            
            let isAutoPay;

            if (changeInstanceTypeRequest !== null && changeInstanceTypeRequest !== undefined) {
                if (changeInstanceTypeRequest instanceof ChangeInstanceTypeRequest) {
                    serverId = changeInstanceTypeRequest.serverId;
                    availabilityZone = changeInstanceTypeRequest.availabilityZone;
                    isAutoPay = changeInstanceTypeRequest.isAutoPay;
                } else {
                    serverId = changeInstanceTypeRequest['server_id'];
                    availabilityZone = changeInstanceTypeRequest['availability_zone'];
                    isAutoPay = changeInstanceTypeRequest['is_auto_pay'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling changeInstanceType.');
            }
            if (serverId !== null && serverId !== undefined) {
                localVarQueryParameter['server_id'] = serverId;
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (isAutoPay !== null && isAutoPay !== undefined) {
                localVarQueryParameter['is_auto_pay'] = isAutoPay;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 统计符合标签条件的实例数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countInstancesByTag(countInstancesByTagRequest?: CountInstancesByTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cbs/instance/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (countInstancesByTagRequest !== null && countInstancesByTagRequest !== undefined) {
                if (countInstancesByTagRequest instanceof CountInstancesByTagRequest) {
                    body = countInstancesByTagRequest.body
                } else {
                    body = countInstancesByTagRequest['body'];
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
         * 创建云堡垒机实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstance(createInstanceRequest?: CreateInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cbs/instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createInstanceRequest !== null && createInstanceRequest !== undefined) {
                if (createInstanceRequest instanceof CreateInstanceRequest) {
                    body = createInstanceRequest.body
                } else {
                    body = createInstanceRequest['body'];
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
         * 删除云堡垒机故障实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/cbs/instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;

            if (deleteInstanceRequest !== null && deleteInstanceRequest !== undefined) {
                if (deleteInstanceRequest instanceof DeleteInstanceRequest) {
                    instanceId = deleteInstanceRequest.instanceId;
                } else {
                    instanceId = deleteInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
                throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstance.');
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 云堡垒机实例绑定弹性公网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        installInstanceEip(installInstanceEipRequest?: InstallInstanceEipRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cbs/instance/{server_id}/eip/bind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (installInstanceEipRequest !== null && installInstanceEipRequest !== undefined) {
                if (installInstanceEipRequest instanceof InstallInstanceEipRequest) {
                    serverId = installInstanceEipRequest.serverId;
                    body = installInstanceEipRequest.body
                } else {
                    serverId = installInstanceEipRequest['server_id'];
                    body = installInstanceEipRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling installInstanceEip.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取云堡垒机服务可用区信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailableZones() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cbs/available-zone",
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
         * 获取当前租户下的堡垒机实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstances(listInstancesRequest?: ListInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cbs/instance/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    instanceId = listInstancesRequest.instanceId;
                } else {
                    instanceId = listInstancesRequest['instance_id'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstancesByTag(listInstancesByTagRequest?: ListInstancesByTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cbs/instance/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let limit;
            
            let offset;

            if (listInstancesByTagRequest !== null && listInstancesByTagRequest !== undefined) {
                if (listInstancesByTagRequest instanceof ListInstancesByTagRequest) {
                    body = listInstancesByTagRequest.body
                    limit = listInstancesByTagRequest.limit;
                    offset = listInstancesByTagRequest.offset;
                } else {
                    body = listInstancesByTagRequest['body'];
                    limit = listInstancesByTagRequest['limit'];
                    offset = listInstancesByTagRequest['offset'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (limit !== undefined && limit !== null) {
                localVarHeaderParameter['limit'] = String(limit);
            }
            if (offset !== undefined && offset !== null) {
                localVarHeaderParameter['offset'] = String(offset);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云堡垒机规格信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSpecifications(listSpecificationsRequest?: ListSpecificationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cbs/instance/specification",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let action;
            
            let specCode;

            if (listSpecificationsRequest !== null && listSpecificationsRequest !== undefined) {
                if (listSpecificationsRequest instanceof ListSpecificationsRequest) {
                    action = listSpecificationsRequest.action;
                    specCode = listSpecificationsRequest.specCode;
                } else {
                    action = listSpecificationsRequest['action'];
                    specCode = listSpecificationsRequest['spec_code'];
                }
            }

        
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling listSpecifications.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (specCode !== null && specCode !== undefined) {
                localVarQueryParameter['spec_code'] = specCode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户在项目中的资源标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTags() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cbs/instance/tags",
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
         * IAM用户登录堡垒机实例console。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        loginInstance(loginInstanceRequest?: LoginInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cbs/instance/login",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (loginInstanceRequest !== null && loginInstanceRequest !== undefined) {
                if (loginInstanceRequest instanceof LoginInstanceRequest) {
                    body = loginInstanceRequest.body
                } else {
                    body = loginInstanceRequest['body'];
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
         * 用户登录堡垒机实例admin的console。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        loginInstanceAdmin(loginInstanceAdminRequest?: LoginInstanceAdminRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cbs/instances/{server_id}/admin-url",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (loginInstanceAdminRequest !== null && loginInstanceAdminRequest !== undefined) {
                if (loginInstanceAdminRequest instanceof LoginInstanceAdminRequest) {
                    serverId = loginInstanceAdminRequest.serverId;
                } else {
                    serverId = loginInstanceAdminRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling loginInstanceAdmin.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重启云堡垒机实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rebootInstance(rebootInstanceRequest?: RebootInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cbs/instance/reboot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (rebootInstanceRequest !== null && rebootInstanceRequest !== undefined) {
                if (rebootInstanceRequest instanceof RebootInstanceRequest) {
                    body = rebootInstanceRequest.body
                } else {
                    body = rebootInstanceRequest['body'];
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
         * 租户创建或取消云堡垒机服务的委托授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerAuthorization(registerAuthorizationRequest?: RegisterAuthorizationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cbs/agency/authorization",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (registerAuthorizationRequest !== null && registerAuthorizationRequest !== undefined) {
                if (registerAuthorizationRequest instanceof RegisterAuthorizationRequest) {
                    body = registerAuthorizationRequest.body
                } else {
                    body = registerAuthorizationRequest['body'];
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
         * 重置堡垒机实例admin用户登录方式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetInstanceLoginMethod(resetInstanceLoginMethodRequest?: ResetInstanceLoginMethodRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/cbs/instance/login-method",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (resetInstanceLoginMethodRequest !== null && resetInstanceLoginMethodRequest !== undefined) {
                if (resetInstanceLoginMethodRequest instanceof ResetInstanceLoginMethodRequest) {
                    body = resetInstanceLoginMethodRequest.body
                } else {
                    body = resetInstanceLoginMethodRequest['body'];
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
         * 重置云堡垒机实例web登录admin用户密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetInstancePassword(resetInstancePasswordRequest?: ResetInstancePasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/cbs/instance/password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (resetInstancePasswordRequest !== null && resetInstancePasswordRequest !== undefined) {
                if (resetInstancePasswordRequest instanceof ResetInstancePasswordRequest) {
                    body = resetInstancePasswordRequest.body
                } else {
                    body = resetInstancePasswordRequest['body'];
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
         * 变更云堡垒机实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeInstance(resizeInstanceRequest?: ResizeInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/cbs/instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (resizeInstanceRequest !== null && resizeInstanceRequest !== undefined) {
                if (resizeInstanceRequest instanceof ResizeInstanceRequest) {
                    body = resizeInstanceRequest.body
                } else {
                    body = resizeInstanceRequest['body'];
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
         * 回退升级的云堡垒机实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rollbackInstance(rollbackInstanceRequest?: RollbackInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cbs/instance/rollback",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (rollbackInstanceRequest !== null && rollbackInstanceRequest !== undefined) {
                if (rollbackInstanceRequest instanceof RollbackInstanceRequest) {
                    body = rollbackInstanceRequest.body
                } else {
                    body = rollbackInstanceRequest['body'];
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
         * 获取租户给云堡垒机服务委托授权信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuthorization() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cbs/agency/authorization",
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
         * 获取当前租户所选择的可用分区里的堡垒机ECS规格是否可用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEcsQuota(showEcsQuotaRequest?: ShowEcsQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cbs/instance/ecs-quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let availabilityZone;
            
            let resourceSpecCode;

            if (showEcsQuotaRequest !== null && showEcsQuotaRequest !== undefined) {
                if (showEcsQuotaRequest instanceof ShowEcsQuotaRequest) {
                    availabilityZone = showEcsQuotaRequest.availabilityZone;
                    resourceSpecCode = showEcsQuotaRequest.resourceSpecCode;
                } else {
                    availabilityZone = showEcsQuotaRequest['availability_zone'];
                    resourceSpecCode = showEcsQuotaRequest['resource_spec_code'];
                }
            }

        
            if (availabilityZone === null || availabilityZone === undefined) {
                throw new RequiredError('availabilityZone','Required parameter availabilityZone was null or undefined when calling showEcsQuota.');
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (resourceSpecCode === null || resourceSpecCode === undefined) {
                throw new RequiredError('resourceSpecCode','Required parameter resourceSpecCode was null or undefined when calling showEcsQuota.');
            }
            if (resourceSpecCode !== null && resourceSpecCode !== undefined) {
                localVarQueryParameter['resource_spec_code'] = resourceSpecCode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取堡垒机实例状态信息（未删除实例）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceStatus(showInstanceStatusRequest?: ShowInstanceStatusRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cbs/instance/{server_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showInstanceStatusRequest !== null && showInstanceStatusRequest !== undefined) {
                if (showInstanceStatusRequest instanceof ShowInstanceStatusRequest) {
                    serverId = showInstanceStatusRequest.serverId;
                } else {
                    serverId = showInstanceStatusRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showInstanceStatus.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询堡垒机实例资源的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceTags(showInstanceTagsRequest?: ShowInstanceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cbs/instance/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (showInstanceTagsRequest !== null && showInstanceTagsRequest !== undefined) {
                if (showInstanceTagsRequest instanceof ShowInstanceTagsRequest) {
                    resourceId = showInstanceTagsRequest.resourceId;
                } else {
                    resourceId = showInstanceTagsRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showInstanceTags.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取运维链接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOmUrl(showOmUrlRequest?: ShowOmUrlRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cbs/instance/get-om-url",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let serverId;
            
            let ipAddress;
            
            let hostAccountName;

            if (showOmUrlRequest !== null && showOmUrlRequest !== undefined) {
                if (showOmUrlRequest instanceof ShowOmUrlRequest) {
                    serverId = showOmUrlRequest.serverId;
                    ipAddress = showOmUrlRequest.ipAddress;
                    hostAccountName = showOmUrlRequest.hostAccountName;
                } else {
                    serverId = showOmUrlRequest['server_id'];
                    ipAddress = showOmUrlRequest['ip_address'];
                    hostAccountName = showOmUrlRequest['host_account_name'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
                throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showOmUrl.');
            }
            if (serverId !== null && serverId !== undefined) {
                localVarQueryParameter['server_id'] = serverId;
            }
            if (ipAddress === null || ipAddress === undefined) {
                throw new RequiredError('ipAddress','Required parameter ipAddress was null or undefined when calling showOmUrl.');
            }
            if (ipAddress !== null && ipAddress !== undefined) {
                localVarQueryParameter['ip_address'] = ipAddress;
            }
            if (hostAccountName === null || hostAccountName === undefined) {
                throw new RequiredError('hostAccountName','Required parameter hostAccountName was null or undefined when calling showOmUrl.');
            }
            if (hostAccountName !== null && hostAccountName !== undefined) {
                localVarQueryParameter['host_account_name'] = hostAccountName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取堡垒机实例配额信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuota() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cbs/instance/quota",
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
         * 启动云堡垒机实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startInstance(startInstanceRequest?: StartInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cbs/instance/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (startInstanceRequest !== null && startInstanceRequest !== undefined) {
                if (startInstanceRequest instanceof StartInstanceRequest) {
                    body = startInstanceRequest.body
                } else {
                    body = startInstanceRequest['body'];
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
         * 关闭云堡垒机实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopInstance(stopInstanceRequest?: StopInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cbs/instance/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (stopInstanceRequest !== null && stopInstanceRequest !== undefined) {
                if (stopInstanceRequest instanceof StopInstanceRequest) {
                    body = stopInstanceRequest.body
                } else {
                    body = stopInstanceRequest['body'];
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
         * 切换堡垒机虚拟私有云
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchInstanceVpc(switchInstanceVpcRequest?: SwitchInstanceVpcRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/cbs/instance/vpc",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (switchInstanceVpcRequest !== null && switchInstanceVpcRequest !== undefined) {
                if (switchInstanceVpcRequest instanceof SwitchInstanceVpcRequest) {
                    body = switchInstanceVpcRequest.body
                } else {
                    body = switchInstanceVpcRequest['body'];
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
         * 为云堡垒机实例解绑弹性公网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uninstallInstanceEip(uninstallInstanceEipRequest?: UninstallInstanceEipRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cbs/instance/{server_id}/eip/unbind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (uninstallInstanceEipRequest !== null && uninstallInstanceEipRequest !== undefined) {
                if (uninstallInstanceEipRequest instanceof UninstallInstanceEipRequest) {
                    serverId = uninstallInstanceEipRequest.serverId;
                    body = uninstallInstanceEipRequest.body
                } else {
                    serverId = uninstallInstanceEipRequest['server_id'];
                    body = uninstallInstanceEipRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling uninstallInstanceEip.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改堡垒机实例安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceSecurityGroup(updateInstanceSecurityGroupRequest?: UpdateInstanceSecurityGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/cbs/instance/{server_id}/security-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (updateInstanceSecurityGroupRequest !== null && updateInstanceSecurityGroupRequest !== undefined) {
                if (updateInstanceSecurityGroupRequest instanceof UpdateInstanceSecurityGroupRequest) {
                    serverId = updateInstanceSecurityGroupRequest.serverId;
                    body = updateInstanceSecurityGroupRequest.body
                } else {
                    serverId = updateInstanceSecurityGroupRequest['server_id'];
                    body = updateInstanceSecurityGroupRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateInstanceSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 升级云堡垒机实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeInstance(upgradeInstanceRequest?: UpgradeInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cbs/instance/upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (upgradeInstanceRequest !== null && upgradeInstanceRequest !== undefined) {
                if (upgradeInstanceRequest instanceof UpgradeInstanceRequest) {
                    body = upgradeInstanceRequest.body
                } else {
                    body = upgradeInstanceRequest['body'];
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

function newClient(client: HcClient): CbhClient {
    return new CbhClient(client);
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