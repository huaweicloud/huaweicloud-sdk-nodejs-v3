import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { Blueprint } from './model/Blueprint';
import { ControlOperateReqBody } from './model/ControlOperateReqBody';
import { ControlOperation } from './model/ControlOperation';
import { CreateAccountRequest } from './model/CreateAccountRequest';
import { CreateAccountResponse } from './model/CreateAccountResponse';
import { CreateManagedAccountRequest } from './model/CreateManagedAccountRequest';
import { DisableControlRequest } from './model/DisableControlRequest';
import { DisableControlResponse } from './model/DisableControlResponse';
import { EnableControlParameters } from './model/EnableControlParameters';
import { EnableControlRequest } from './model/EnableControlRequest';
import { EnableControlResponse } from './model/EnableControlResponse';
import { EnabledControl } from './model/EnabledControl';
import { ListControlsForOrganizationalUnitRequest } from './model/ListControlsForOrganizationalUnitRequest';
import { ListControlsForOrganizationalUnitResponse } from './model/ListControlsForOrganizationalUnitResponse';
import { ListEnabledControlsRequest } from './model/ListEnabledControlsRequest';
import { ListEnabledControlsResponse } from './model/ListEnabledControlsResponse';
import { OrganizationalPercentageDetail } from './model/OrganizationalPercentageDetail';
import { PageInfoDto } from './model/PageInfoDto';
import { RegionManagedList } from './model/RegionManagedList';
import { RegisterOrganizationalUnitRequest } from './model/RegisterOrganizationalUnitRequest';
import { RegisterOrganizationalUnitResponse } from './model/RegisterOrganizationalUnitResponse';
import { ShowControlOperateRequest } from './model/ShowControlOperateRequest';
import { ShowControlOperateResponse } from './model/ShowControlOperateResponse';
import { ShowManagedAccountRequest } from './model/ShowManagedAccountRequest';
import { ShowManagedAccountResponse } from './model/ShowManagedAccountResponse';
import { ShowOperationRequest } from './model/ShowOperationRequest';
import { ShowOperationResponse } from './model/ShowOperationResponse';
import { TargetControl } from './model/TargetControl';

export class RgcClient {
    public static newBuilder(): ClientBuilder<RgcClient> {
            let client = new ClientBuilder<RgcClient>(newClient);
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
     * 关闭组织下的某个单元的某个控制策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭控制策略
     * @param {ControlOperateReqBody} controlOperateReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableControl(disableControlRequest?: DisableControlRequest): Promise<DisableControlResponse> {
        const options = ParamCreater().disableControl(disableControlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给组织下的某个单元开启某个控制策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启控制策略
     * @param {ControlOperateReqBody} controlOperateReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableControl(enableControlRequest?: EnableControlRequest): Promise<EnableControlResponse> {
        const options = ParamCreater().enableControl(enableControlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出组织里某个注册OU开启的所有控制策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出注册OU下开启的控制策略
     * @param {string} managedOrganizationalUnitId 注册OU ID。
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listControlsForOrganizationalUnit(listControlsForOrganizationalUnitRequest?: ListControlsForOrganizationalUnitRequest): Promise<ListControlsForOrganizationalUnitResponse> {
        const options = ParamCreater().listControlsForOrganizationalUnit(listControlsForOrganizationalUnitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出组织里开启的所有控制策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出开启的控制策略
     * @param {number} [limit] 分页页面的最大值。
     * @param {string} [marker] 页面标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnabledControls(listEnabledControlsRequest?: ListEnabledControlsRequest): Promise<ListEnabledControlsResponse> {
        const options = ParamCreater().listEnabledControls(listEnabledControlsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据操作ID查询返回指定ID的操作状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询控制策略操作状态
     * @param {string} operationControlStatusId 操作控制策略的请求ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showControlOperate(showControlOperateRequest?: ShowControlOperateRequest): Promise<ShowControlOperateResponse> {
        const options = ParamCreater().showControlOperate(showControlOperateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在组织里的某个注册OU下创建账号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建账号
     * @param {CreateManagedAccountRequest} createManagedAccountRequest 组织单元信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAccount(createAccountRequest?: CreateAccountRequest): Promise<CreateAccountResponse> {
        const options = ParamCreater().createAccount(createAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将组织里的某个OU注册到RGC服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册OU
     * @param {string} organizationalUnitId 注册OU ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerOrganizationalUnit(registerOrganizationalUnitRequest?: RegisterOrganizationalUnitRequest): Promise<RegisterOrganizationalUnitResponse> {
        const options = ParamCreater().registerOrganizationalUnit(registerOrganizationalUnitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织里某个纳管账号信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询纳管账号信息
     * @param {string} managedAccountId 纳管账号ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showManagedAccount(showManagedAccountRequest?: ShowManagedAccountRequest): Promise<ShowManagedAccountResponse> {
        const options = ParamCreater().showManagedAccount(showManagedAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询在RGC服务里注册/取消注册的过程信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询注册过程信息
     * @param {string} operationId 操作ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOperation(showOperationRequest?: ShowOperationRequest): Promise<ShowOperationResponse> {
        const options = ParamCreater().showOperation(showOperationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 关闭组织下的某个单元的某个控制策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableControl(disableControlRequest?: DisableControlRequest) {
            const options = {
                method: "POST",
                url: "/v1/governance/controls/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (disableControlRequest !== null && disableControlRequest !== undefined) {
                if (disableControlRequest instanceof DisableControlRequest) {
                    body = disableControlRequest.body
                } else {
                    body = disableControlRequest['body'];
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
         * 给组织下的某个单元开启某个控制策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableControl(enableControlRequest?: EnableControlRequest) {
            const options = {
                method: "POST",
                url: "/v1/governance/controls/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (enableControlRequest !== null && enableControlRequest !== undefined) {
                if (enableControlRequest instanceof EnableControlRequest) {
                    body = enableControlRequest.body
                } else {
                    body = enableControlRequest['body'];
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
         * 列出组织里某个注册OU开启的所有控制策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listControlsForOrganizationalUnit(listControlsForOrganizationalUnitRequest?: ListControlsForOrganizationalUnitRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/managed-organizational-units/{managed_organizational_unit_id}/controls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let managedOrganizationalUnitId;
            
            let limit;
            
            let marker;

            if (listControlsForOrganizationalUnitRequest !== null && listControlsForOrganizationalUnitRequest !== undefined) {
                if (listControlsForOrganizationalUnitRequest instanceof ListControlsForOrganizationalUnitRequest) {
                    managedOrganizationalUnitId = listControlsForOrganizationalUnitRequest.managedOrganizationalUnitId;
                    limit = listControlsForOrganizationalUnitRequest.limit;
                    marker = listControlsForOrganizationalUnitRequest.marker;
                } else {
                    managedOrganizationalUnitId = listControlsForOrganizationalUnitRequest['managed_organizational_unit_id'];
                    limit = listControlsForOrganizationalUnitRequest['limit'];
                    marker = listControlsForOrganizationalUnitRequest['marker'];
                }
            }

        
            if (managedOrganizationalUnitId === null || managedOrganizationalUnitId === undefined) {
            throw new RequiredError('managedOrganizationalUnitId','Required parameter managedOrganizationalUnitId was null or undefined when calling listControlsForOrganizationalUnit.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'managed_organizational_unit_id': managedOrganizationalUnitId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出组织里开启的所有控制策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnabledControls(listEnabledControlsRequest?: ListEnabledControlsRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/enabled-controls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listEnabledControlsRequest !== null && listEnabledControlsRequest !== undefined) {
                if (listEnabledControlsRequest instanceof ListEnabledControlsRequest) {
                    limit = listEnabledControlsRequest.limit;
                    marker = listEnabledControlsRequest.marker;
                } else {
                    limit = listEnabledControlsRequest['limit'];
                    marker = listEnabledControlsRequest['marker'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据操作ID查询返回指定ID的操作状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showControlOperate(showControlOperateRequest?: ShowControlOperateRequest) {
            const options = {
                method: "GET",
                url: "/v1/governance/operation-control-status/{operation_control_status_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let operationControlStatusId;

            if (showControlOperateRequest !== null && showControlOperateRequest !== undefined) {
                if (showControlOperateRequest instanceof ShowControlOperateRequest) {
                    operationControlStatusId = showControlOperateRequest.operationControlStatusId;
                } else {
                    operationControlStatusId = showControlOperateRequest['operation_control_status_id'];
                }
            }

        
            if (operationControlStatusId === null || operationControlStatusId === undefined) {
            throw new RequiredError('operationControlStatusId','Required parameter operationControlStatusId was null or undefined when calling showControlOperate.');
            }

            options.pathParams = { 'operation_control_status_id': operationControlStatusId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在组织里的某个注册OU下创建账号。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAccount(createAccountRequest?: CreateAccountRequest) {
            const options = {
                method: "POST",
                url: "/v1/managed-organization/managed-accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAccountRequest !== null && createAccountRequest !== undefined) {
                if (createAccountRequest instanceof CreateAccountRequest) {
                    body = createAccountRequest.body
                } else {
                    body = createAccountRequest['body'];
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
         * 将组织里的某个OU注册到RGC服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerOrganizationalUnit(registerOrganizationalUnitRequest?: RegisterOrganizationalUnitRequest) {
            const options = {
                method: "POST",
                url: "/v1/managed-organization/organizational-units/{organizational_unit_id}/register",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let organizationalUnitId;

            if (registerOrganizationalUnitRequest !== null && registerOrganizationalUnitRequest !== undefined) {
                if (registerOrganizationalUnitRequest instanceof RegisterOrganizationalUnitRequest) {
                    organizationalUnitId = registerOrganizationalUnitRequest.organizationalUnitId;
                } else {
                    organizationalUnitId = registerOrganizationalUnitRequest['organizational_unit_id'];
                }
            }

        
            if (organizationalUnitId === null || organizationalUnitId === undefined) {
            throw new RequiredError('organizationalUnitId','Required parameter organizationalUnitId was null or undefined when calling registerOrganizationalUnit.');
            }

            options.pathParams = { 'organizational_unit_id': organizationalUnitId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组织里某个纳管账号信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showManagedAccount(showManagedAccountRequest?: ShowManagedAccountRequest) {
            const options = {
                method: "GET",
                url: "/v1/managed-organization/managed-accounts/{managed_account_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let managedAccountId;

            if (showManagedAccountRequest !== null && showManagedAccountRequest !== undefined) {
                if (showManagedAccountRequest instanceof ShowManagedAccountRequest) {
                    managedAccountId = showManagedAccountRequest.managedAccountId;
                } else {
                    managedAccountId = showManagedAccountRequest['managed_account_id'];
                }
            }

        
            if (managedAccountId === null || managedAccountId === undefined) {
            throw new RequiredError('managedAccountId','Required parameter managedAccountId was null or undefined when calling showManagedAccount.');
            }

            options.pathParams = { 'managed_account_id': managedAccountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询在RGC服务里注册/取消注册的过程信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOperation(showOperationRequest?: ShowOperationRequest) {
            const options = {
                method: "GET",
                url: "/v1/managed-organization/{operation_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let operationId;

            if (showOperationRequest !== null && showOperationRequest !== undefined) {
                if (showOperationRequest instanceof ShowOperationRequest) {
                    operationId = showOperationRequest.operationId;
                } else {
                    operationId = showOperationRequest['operation_id'];
                }
            }

        
            if (operationId === null || operationId === undefined) {
            throw new RequiredError('operationId','Required parameter operationId was null or undefined when calling showOperation.');
            }

            options.pathParams = { 'operation_id': operationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): RgcClient {
    return new RgcClient(client);
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