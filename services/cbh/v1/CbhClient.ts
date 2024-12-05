import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AvailabilityZones } from './model/AvailabilityZones';
import { CBHInstances } from './model/CBHInstances';
import { ChangeInstanceNetwork } from './model/ChangeInstanceNetwork';
import { ChangeInstanceNetworkRequest } from './model/ChangeInstanceNetworkRequest';
import { ChangeInstanceNetworkResponse } from './model/ChangeInstanceNetworkResponse';
import { ChangeInstanceOrderRequest } from './model/ChangeInstanceOrderRequest';
import { ChangeInstanceOrderResponse } from './model/ChangeInstanceOrderResponse';
import { CreateCbhRequest } from './model/CreateCbhRequest';
import { CreateCbhResponse } from './model/CreateCbhResponse';
import { CreateInstanceBody } from './model/CreateInstanceBody';
import { CreateInstanceOrder } from './model/CreateInstanceOrder';
import { CreateInstanceOrderRequest } from './model/CreateInstanceOrderRequest';
import { CreateInstanceOrderResponse } from './model/CreateInstanceOrderResponse';
import { InstallCbhEipRequest } from './model/InstallCbhEipRequest';
import { InstallCbhEipResponse } from './model/InstallCbhEipResponse';
import { InstanceDetail } from './model/InstanceDetail';
import { ListCbhInstanceRequest } from './model/ListCbhInstanceRequest';
import { ListCbhInstanceResponse } from './model/ListCbhInstanceResponse';
import { ListQuotaStatusRequest } from './model/ListQuotaStatusRequest';
import { ListQuotaStatusResponse } from './model/ListQuotaStatusResponse';
import { LoginCbhRequest } from './model/LoginCbhRequest';
import { LoginCbhRequestBody } from './model/LoginCbhRequestBody';
import { LoginCbhResponse } from './model/LoginCbhResponse';
import { NetworkRequestBody } from './model/NetworkRequestBody';
import { Nics } from './model/Nics';
import { OperateEipRequestBody } from './model/OperateEipRequestBody';
import { ProductInfos } from './model/ProductInfos';
import { PublicIp } from './model/PublicIp';
import { QuotaDetail } from './model/QuotaDetail';
import { RebootCbhRequestBody } from './model/RebootCbhRequestBody';
import { RebootType } from './model/RebootType';
import { ResetLoginMethodRequest } from './model/ResetLoginMethodRequest';
import { ResetLoginMethodResponse } from './model/ResetLoginMethodResponse';
import { ResetPassword } from './model/ResetPassword';
import { ResetPasswordRequest } from './model/ResetPasswordRequest';
import { ResetPasswordResponse } from './model/ResetPasswordResponse';
import { RestartCbhInstanceRequest } from './model/RestartCbhInstanceRequest';
import { RestartCbhInstanceResponse } from './model/RestartCbhInstanceResponse';
import { SearchQuotaRequest } from './model/SearchQuotaRequest';
import { SearchQuotaResponse } from './model/SearchQuotaResponse';
import { SecurityGroup } from './model/SecurityGroup';
import { ShowAvailableZoneInfoRequest } from './model/ShowAvailableZoneInfoRequest';
import { ShowAvailableZoneInfoResponse } from './model/ShowAvailableZoneInfoResponse';
import { ShowNetworkConfigurationRequest } from './model/ShowNetworkConfigurationRequest';
import { ShowNetworkConfigurationResponse } from './model/ShowNetworkConfigurationResponse';
import { StartCbhInstanceRequest } from './model/StartCbhInstanceRequest';
import { StartCbhInstanceResponse } from './model/StartCbhInstanceResponse';
import { StartCbhRequestBody } from './model/StartCbhRequestBody';
import { StopCbhInstanceRequest } from './model/StopCbhInstanceRequest';
import { StopCbhInstanceResponse } from './model/StopCbhInstanceResponse';
import { StopCbhRequestBody } from './model/StopCbhRequestBody';
import { UninstallCbhEipRequest } from './model/UninstallCbhEipRequest';
import { UninstallCbhEipResponse } from './model/UninstallCbhEipResponse';
import { UpgradeCbhInstanceRequest } from './model/UpgradeCbhInstanceRequest';
import { UpgradeCbhInstanceResponse } from './model/UpgradeCbhInstanceResponse';
import { UpgradeCbhRequestBody } from './model/UpgradeCbhRequestBody';

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
     * 修改云堡垒机实例网络。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例网络
     * @param {string} serverId 云堡垒机实例ID，使用UUID格式。
     * @param {ChangeInstanceNetwork} changeInstanceNetworkRequestBody ChangeInstanceNetworkRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeInstanceNetwork(changeInstanceNetworkRequest?: ChangeInstanceNetworkRequest): Promise<ChangeInstanceNetworkResponse> {
        const options = ParamCreater().changeInstanceNetwork(changeInstanceNetworkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建变更云堡垒机实例订单。（调用此接口前先调用创建变更云堡垒机实例任务接口，当前接口未开放）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建变更云堡垒机实例订单
     * @param {string} serverId 云堡垒机实例ID。
     * @param {string} instanceKey 云堡垒机实例Key。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeInstanceOrder(changeInstanceOrderRequest?: ChangeInstanceOrderRequest): Promise<ChangeInstanceOrderResponse> {
        const options = ParamCreater().changeInstanceOrder(changeInstanceOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建云堡垒机实例。（创建云堡垒机实例订单前，先调用此接口）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云堡垒机实例
     * @param {CreateInstanceBody} createInstanceRequestBody CreateInstanceBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCbh(createCbhRequest?: CreateCbhRequest): Promise<CreateCbhResponse> {
        const options = ParamCreater().createCbh(createCbhRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建云堡垒机实例订单。(调用此接口前先调用创建云堡垒机实例接口)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云堡垒机实例订单
     * @param {CreateInstanceOrder} createInstanceOrderRequestBody CreateInstanceOrderRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceOrder(createInstanceOrderRequest?: CreateInstanceOrderRequest): Promise<CreateInstanceOrderResponse> {
        const options = ParamCreater().createInstanceOrder(createInstanceOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 云堡垒机实例绑定弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定弹性公网IP
     * @param {string} serverId 云堡垒机实例ID，使用UUID格式表示。
     * @param {OperateEipRequestBody} installInstanceEipRequestBody InstallInstanceEipRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public installCbhEip(installCbhEipRequest?: InstallCbhEipRequest): Promise<InstallCbhEipResponse> {
        const options = ParamCreater().installCbhEip(installCbhEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前租户下的云堡垒机实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取CBH实例列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCbhInstance(listCbhInstanceRequest?: ListCbhInstanceRequest): Promise<ListCbhInstanceResponse> {
        const options = ParamCreater().listCbhInstance();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前租户所选择的可用分区、性能规格所对应的弹性云服务器是否可用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取弹性云服务器配额
     * @param {string} availabilityZone 创建云堡垒机所在的可用区，需要指定可用分区名称。 可参考[地区和终端节点](https://developer.huaweicloud.com/endpoint)获取
     * @param {string} resourceSpecCode 待创建云堡垒机规格ID，例如： - cbh.basic.10  10资产标准版 - cbh.enhance.10  10资产专业版 已上线的规格详情请参见《云堡垒机常见问题》的购买，[云堡垒机实例有哪些规格](https://support.huaweicloud.com/cbh_faq/cbh_03_0025.html)章节。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotaStatus(listQuotaStatusRequest?: ListQuotaStatusRequest): Promise<ListQuotaStatusResponse> {
        const options = ParamCreater().listQuotaStatus(listQuotaStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置admin用户多因子认证方式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置admin用户多因子认证方式
     * @param {string} serverId 堡垒机实例ID，使用UUID格式。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetLoginMethod(resetLoginMethodRequest?: ResetLoginMethodRequest): Promise<ResetLoginMethodResponse> {
        const options = ParamCreater().resetLoginMethod(resetLoginMethodRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改云堡垒机实例web登录admin用户密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改admin用户密码
     * @param {ResetPassword} resetPasswordRequestBody ResetPasswordRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetPassword(resetPasswordRequest?: ResetPasswordRequest): Promise<ResetPasswordResponse> {
        const options = ParamCreater().resetPassword(resetPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启云堡垒机实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启云堡垒机实例
     * @param {RebootCbhRequestBody} restartCbhInstanceRequestBody RestartCbhInstanceRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartCbhInstance(restartCbhInstanceRequest?: RestartCbhInstanceRequest): Promise<RestartCbhInstanceResponse> {
        const options = ParamCreater().restartCbhInstance(restartCbhInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云堡垒机配额信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询堡垒机配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchQuota(searchQuotaRequest?: SearchQuotaRequest): Promise<SearchQuotaResponse> {
        const options = ParamCreater().searchQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取云堡垒机服务可用分区信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取可用用分区信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAvailableZoneInfo(showAvailableZoneInfoRequest?: ShowAvailableZoneInfoRequest): Promise<ShowAvailableZoneInfoResponse> {
        const options = ParamCreater().showAvailableZoneInfo();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检查云堡垒机实例网络信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查云堡垒机网络
     * @param {NetworkRequestBody} showNetworkConfigurationRequestBody NetworkRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNetworkConfiguration(showNetworkConfigurationRequest?: ShowNetworkConfigurationRequest): Promise<ShowNetworkConfigurationResponse> {
        const options = ParamCreater().showNetworkConfiguration(showNetworkConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动云堡垒机实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动云堡垒机实例
     * @param {StartCbhRequestBody} startCbhInstanceRequestBody StartCbhInstanceRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startCbhInstance(startCbhInstanceRequest?: StartCbhInstanceRequest): Promise<StartCbhInstanceResponse> {
        const options = ParamCreater().startCbhInstance(startCbhInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭云堡垒机实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭云堡垒机实例
     * @param {StopCbhRequestBody} stopCbhInstanceRequestBody StopCbhInstanceRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopCbhInstance(stopCbhInstanceRequest?: StopCbhInstanceRequest): Promise<StopCbhInstanceResponse> {
        const options = ParamCreater().stopCbhInstance(stopCbhInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 云堡垒机实例解绑弹性公网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑弹性公网IP
     * @param {string} serverId 云堡垒机实例ID，使用UUID格式。
     * @param {OperateEipRequestBody} uninstallInstanceEipRequestBody UninstallInstanceEipRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uninstallCbhEip(uninstallCbhEipRequest?: UninstallCbhEipRequest): Promise<UninstallCbhEipResponse> {
        const options = ParamCreater().uninstallCbhEip(uninstallCbhEipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 升级云堡垒机实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 升级云堡垒机实例
     * @param {UpgradeCbhRequestBody} upgradeCbhInstanceRequestBody UpgradeCbhInstanceRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeCbhInstance(upgradeCbhInstanceRequest?: UpgradeCbhInstanceRequest): Promise<UpgradeCbhInstanceResponse> {
        const options = ParamCreater().upgradeCbhInstance(upgradeCbhInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前IAM用户登录堡垒机的免登录链接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取IAM登录实例链接
     * @param {LoginCbhRequestBody} loginCbhRequestBody LoginCbhBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public loginCbh(loginCbhRequest?: LoginCbhRequest): Promise<LoginCbhResponse> {
        const options = ParamCreater().loginCbh(loginCbhRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 修改云堡垒机实例网络。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeInstanceNetwork(changeInstanceNetworkRequest?: ChangeInstanceNetworkRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cbs/{server_id}/network/change",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (changeInstanceNetworkRequest !== null && changeInstanceNetworkRequest !== undefined) {
                if (changeInstanceNetworkRequest instanceof ChangeInstanceNetworkRequest) {
                    serverId = changeInstanceNetworkRequest.serverId;
                    body = changeInstanceNetworkRequest.body
                } else {
                    serverId = changeInstanceNetworkRequest['server_id'];
                    body = changeInstanceNetworkRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling changeInstanceNetwork.');
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
         * 创建变更云堡垒机实例订单。（调用此接口前先调用创建变更云堡垒机实例任务接口，当前接口未开放）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeInstanceOrder(changeInstanceOrderRequest?: ChangeInstanceOrderRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cbs/{server_id}/alter/{instance_key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;
            
            let instanceKey;

            if (changeInstanceOrderRequest !== null && changeInstanceOrderRequest !== undefined) {
                if (changeInstanceOrderRequest instanceof ChangeInstanceOrderRequest) {
                    serverId = changeInstanceOrderRequest.serverId;
                    instanceKey = changeInstanceOrderRequest.instanceKey;
                } else {
                    serverId = changeInstanceOrderRequest['server_id'];
                    instanceKey = changeInstanceOrderRequest['instance_key'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling changeInstanceOrder.');
            }
            if (instanceKey === null || instanceKey === undefined) {
            throw new RequiredError('instanceKey','Required parameter instanceKey was null or undefined when calling changeInstanceOrder.');
            }

            options.pathParams = { 'server_id': serverId,'instance_key': instanceKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建云堡垒机实例。（创建云堡垒机实例订单前，先调用此接口）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCbh(createCbhRequest?: CreateCbhRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cbs/instance/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCbhRequest !== null && createCbhRequest !== undefined) {
                if (createCbhRequest instanceof CreateCbhRequest) {
                    body = createCbhRequest.body
                } else {
                    body = createCbhRequest['body'];
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
         * 创建云堡垒机实例订单。(调用此接口前先调用创建云堡垒机实例接口)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceOrder(createInstanceOrderRequest?: CreateInstanceOrderRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cbs/period/order",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createInstanceOrderRequest !== null && createInstanceOrderRequest !== undefined) {
                if (createInstanceOrderRequest instanceof CreateInstanceOrderRequest) {
                    body = createInstanceOrderRequest.body
                } else {
                    body = createInstanceOrderRequest['body'];
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
         * 云堡垒机实例绑定弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        installCbhEip(installCbhEipRequest?: InstallCbhEipRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cbs/instance/{server_id}/eip/bind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (installCbhEipRequest !== null && installCbhEipRequest !== undefined) {
                if (installCbhEipRequest instanceof InstallCbhEipRequest) {
                    serverId = installCbhEipRequest.serverId;
                    body = installCbhEipRequest.body
                } else {
                    serverId = installCbhEipRequest['server_id'];
                    body = installCbhEipRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling installCbhEip.');
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
         * 获取当前租户下的云堡垒机实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCbhInstance() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cbs/instance/list",
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
         * 获取当前租户所选择的可用分区、性能规格所对应的弹性云服务器是否可用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotaStatus(listQuotaStatusRequest?: ListQuotaStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cbs/instance/ecs-quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let availabilityZone;
            
            let resourceSpecCode;

            if (listQuotaStatusRequest !== null && listQuotaStatusRequest !== undefined) {
                if (listQuotaStatusRequest instanceof ListQuotaStatusRequest) {
                    availabilityZone = listQuotaStatusRequest.availabilityZone;
                    resourceSpecCode = listQuotaStatusRequest.resourceSpecCode;
                } else {
                    availabilityZone = listQuotaStatusRequest['availability_zone'];
                    resourceSpecCode = listQuotaStatusRequest['resource_spec_code'];
                }
            }

        
            if (availabilityZone === null || availabilityZone === undefined) {
                throw new RequiredError('availabilityZone','Required parameter availabilityZone was null or undefined when calling listQuotaStatus.');
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (resourceSpecCode === null || resourceSpecCode === undefined) {
                throw new RequiredError('resourceSpecCode','Required parameter resourceSpecCode was null or undefined when calling listQuotaStatus.');
            }
            if (resourceSpecCode !== null && resourceSpecCode !== undefined) {
                localVarQueryParameter['resource_spec_code'] = resourceSpecCode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置admin用户多因子认证方式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetLoginMethod(resetLoginMethodRequest?: ResetLoginMethodRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cbs/instance/{server_id}/login-method",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (resetLoginMethodRequest !== null && resetLoginMethodRequest !== undefined) {
                if (resetLoginMethodRequest instanceof ResetLoginMethodRequest) {
                    serverId = resetLoginMethodRequest.serverId;
                } else {
                    serverId = resetLoginMethodRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling resetLoginMethod.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改云堡垒机实例web登录admin用户密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPassword(resetPasswordRequest?: ResetPasswordRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/cbs/instance/password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (resetPasswordRequest !== null && resetPasswordRequest !== undefined) {
                if (resetPasswordRequest instanceof ResetPasswordRequest) {
                    body = resetPasswordRequest.body
                } else {
                    body = resetPasswordRequest['body'];
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
         * 重启云堡垒机实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartCbhInstance(restartCbhInstanceRequest?: RestartCbhInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cbs/instance/reboot",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (restartCbhInstanceRequest !== null && restartCbhInstanceRequest !== undefined) {
                if (restartCbhInstanceRequest instanceof RestartCbhInstanceRequest) {
                    body = restartCbhInstanceRequest.body
                } else {
                    body = restartCbhInstanceRequest['body'];
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
         * 查询云堡垒机配额信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchQuota() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cbs/instance/quota",
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
         * 获取云堡垒机服务可用分区信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAvailableZoneInfo() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/cbs/available-zone",
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
         * 检查云堡垒机实例网络信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNetworkConfiguration(showNetworkConfigurationRequest?: ShowNetworkConfigurationRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cbs/network/configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showNetworkConfigurationRequest !== null && showNetworkConfigurationRequest !== undefined) {
                if (showNetworkConfigurationRequest instanceof ShowNetworkConfigurationRequest) {
                    body = showNetworkConfigurationRequest.body
                } else {
                    body = showNetworkConfigurationRequest['body'];
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
         * 启动云堡垒机实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startCbhInstance(startCbhInstanceRequest?: StartCbhInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cbs/instance/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (startCbhInstanceRequest !== null && startCbhInstanceRequest !== undefined) {
                if (startCbhInstanceRequest instanceof StartCbhInstanceRequest) {
                    body = startCbhInstanceRequest.body
                } else {
                    body = startCbhInstanceRequest['body'];
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
        stopCbhInstance(stopCbhInstanceRequest?: StopCbhInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cbs/instance/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (stopCbhInstanceRequest !== null && stopCbhInstanceRequest !== undefined) {
                if (stopCbhInstanceRequest instanceof StopCbhInstanceRequest) {
                    body = stopCbhInstanceRequest.body
                } else {
                    body = stopCbhInstanceRequest['body'];
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
         * 云堡垒机实例解绑弹性公网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uninstallCbhEip(uninstallCbhEipRequest?: UninstallCbhEipRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cbs/instance/{server_id}/eip/unbind",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (uninstallCbhEipRequest !== null && uninstallCbhEipRequest !== undefined) {
                if (uninstallCbhEipRequest instanceof UninstallCbhEipRequest) {
                    serverId = uninstallCbhEipRequest.serverId;
                    body = uninstallCbhEipRequest.body
                } else {
                    serverId = uninstallCbhEipRequest['server_id'];
                    body = uninstallCbhEipRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling uninstallCbhEip.');
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
         * 升级云堡垒机实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeCbhInstance(upgradeCbhInstanceRequest?: UpgradeCbhInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cbs/instance/upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (upgradeCbhInstanceRequest !== null && upgradeCbhInstanceRequest !== undefined) {
                if (upgradeCbhInstanceRequest instanceof UpgradeCbhInstanceRequest) {
                    body = upgradeCbhInstanceRequest.body
                } else {
                    body = upgradeCbhInstanceRequest['body'];
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
         * 获取当前IAM用户登录堡垒机的免登录链接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        loginCbh(loginCbhRequest?: LoginCbhRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/cbs/instance/login",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (loginCbhRequest !== null && loginCbhRequest !== undefined) {
                if (loginCbhRequest instanceof LoginCbhRequest) {
                    body = loginCbhRequest.body
                } else {
                    body = loginCbhRequest['body'];
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