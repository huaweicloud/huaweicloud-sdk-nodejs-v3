import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BizAppParam } from './model/BizAppParam';
import { ComponentParam } from './model/ComponentParam';
import { ComponentUpdateParam } from './model/ComponentUpdateParam';
import { CreateAppRequest } from './model/CreateAppRequest';
import { CreateAppResponse } from './model/CreateAppResponse';
import { CreateComponentRequest } from './model/CreateComponentRequest';
import { CreateComponentResponse } from './model/CreateComponentResponse';
import { CreateEnvRequest } from './model/CreateEnvRequest';
import { CreateEnvResponse } from './model/CreateEnvResponse';
import { CreateSubAppRequest } from './model/CreateSubAppRequest';
import { CreateSubAppResponse } from './model/CreateSubAppResponse';
import { DeleteAppRequest } from './model/DeleteAppRequest';
import { DeleteAppResponse } from './model/DeleteAppResponse';
import { DeleteComponentRequest } from './model/DeleteComponentRequest';
import { DeleteComponentResponse } from './model/DeleteComponentResponse';
import { DeleteEnvRequest } from './model/DeleteEnvRequest';
import { DeleteEnvResponse } from './model/DeleteEnvResponse';
import { DeleteSubAppRequest } from './model/DeleteSubAppRequest';
import { DeleteSubAppResponse } from './model/DeleteSubAppResponse';
import { EnvParam } from './model/EnvParam';
import { ListResourceUnderNodeRequest } from './model/ListResourceUnderNodeRequest';
import { ListResourceUnderNodeResponse } from './model/ListResourceUnderNodeResponse';
import { PageResourceListParam } from './model/PageResourceListParam';
import { ShowAppByNameRequest } from './model/ShowAppByNameRequest';
import { ShowAppByNameResponse } from './model/ShowAppByNameResponse';
import { ShowAppRequest } from './model/ShowAppRequest';
import { ShowAppResponse } from './model/ShowAppResponse';
import { ShowComponentByNameRequest } from './model/ShowComponentByNameRequest';
import { ShowComponentByNameResponse } from './model/ShowComponentByNameResponse';
import { ShowComponentRequest } from './model/ShowComponentRequest';
import { ShowComponentResponse } from './model/ShowComponentResponse';
import { ShowEnvByNameRequest } from './model/ShowEnvByNameRequest';
import { ShowEnvByNameResponse } from './model/ShowEnvByNameResponse';
import { ShowEnvRequest } from './model/ShowEnvRequest';
import { ShowEnvResponse } from './model/ShowEnvResponse';
import { SubAppCreateParam } from './model/SubAppCreateParam';
import { SubAppUpdateParam } from './model/SubAppUpdateParam';
import { TagNameAndIdVo } from './model/TagNameAndIdVo';
import { UpdateAppRequest } from './model/UpdateAppRequest';
import { UpdateAppResponse } from './model/UpdateAppResponse';
import { UpdateComponentRequest } from './model/UpdateComponentRequest';
import { UpdateComponentResponse } from './model/UpdateComponentResponse';
import { UpdateEnvRequest } from './model/UpdateEnvRequest';
import { UpdateEnvResponse } from './model/UpdateEnvResponse';
import { UpdateSubAppRequest } from './model/UpdateSubAppRequest';
import { UpdateSubAppResponse } from './model/UpdateSubAppResponse';
import { WaterfallPageListParam } from './model/WaterfallPageListParam';

export class AomClient {
    public static newBuilder(): ClientBuilder<AomClient> {
            let client = new ClientBuilder<AomClient>(newClient);
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
     * 该接口用于新增应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增应用
     * @param {BizAppParam} createAppRequestBody 创建应用参数
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
     * 该接口用于新增组件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增组件
     * @param {ComponentParam} createComponentRequestBody 创建组件参数
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
     * 该接口用于创建环境。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建环境
     * @param {EnvParam} createEnvRequestBody 创建环境参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEnv(createEnvRequest?: CreateEnvRequest): Promise<CreateEnvResponse> {
        const options = ParamCreater().createEnv(createEnvRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于新增子应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增子应用
     * @param {SubAppCreateParam} createSubAppRequestBody 创建子应用参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubApp(createSubAppRequest?: CreateSubAppRequest): Promise<CreateSubAppResponse> {
        const options = ParamCreater().createSubApp(createSubAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用
     * @param {string} applicationId 应用id
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
     * 该接口用于删除组件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除组件
     * @param {string} componentId 组件id
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
     * 该接口用于删除环境。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除环境
     * @param {string} environmentId 环境id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEnv(deleteEnvRequest?: DeleteEnvRequest): Promise<DeleteEnvResponse> {
        const options = ParamCreater().deleteEnv(deleteEnvRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除子应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除子应用
     * @param {string} subAppId 子应用id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubApp(deleteSubAppRequest?: DeleteSubAppRequest): Promise<DeleteSubAppResponse> {
        const options = ParamCreater().deleteSubApp(deleteSubAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询绑定在节点上的资源列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询绑定在节点上的资源列表
     * @param {string} rfResourceType 云服务资源,同rms服务的provider
     * @param {string} type 云服务资源类型,同rms服务的type
     * @param {PageResourceListParam} listResourceUnderNodeRequestBody 查询资源列表参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceUnderNode(listResourceUnderNodeRequest?: ListResourceUnderNodeRequest): Promise<ListResourceUnderNodeResponse> {
        const options = ParamCreater().listResourceUnderNode(listResourceUnderNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询应用详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用详情
     * @param {string} applicationId 应用id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApp(showAppRequest?: ShowAppRequest): Promise<ShowAppResponse> {
        const options = ParamCreater().showApp(showAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询应用详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据应用名称查询应用详情
     * @param {string} [name] 应用唯一标识;字符集长度2-64，仅支持字符集：英文字母、数字、下划线、中划线、点；应用唯一标识与显示名称至少填写其一
     * @param {string} [displayName] 实体的显示名称；字符集长度2-64，仅支持字符集：中文字符、英文字母、数字、下划线、中划线、点；应用唯一标识与显示名称至少填写其一
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppByName(showAppByNameRequest?: ShowAppByNameRequest): Promise<ShowAppByNameResponse> {
        const options = ParamCreater().showAppByName(showAppByNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询组件详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询组件详情
     * @param {string} componentId 组件id
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
     * 该接口用于查询组件详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据组件名称查询组件详情
     * @param {string} applicationId 应用id
     * @param {string} componentName 组件名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showComponentByName(showComponentByNameRequest?: ShowComponentByNameRequest): Promise<ShowComponentByNameResponse> {
        const options = ParamCreater().showComponentByName(showComponentByNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询环境详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询环境详情
     * @param {string} environmentId 环境id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEnv(showEnvRequest?: ShowEnvRequest): Promise<ShowEnvResponse> {
        const options = ParamCreater().showEnv(showEnvRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询环境详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据环境名称查询环境详情
     * @param {string} environmentName 环境名称
     * @param {string} region 环境region
     * @param {string} componentId 组件id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEnvByName(showEnvByNameRequest?: ShowEnvByNameRequest): Promise<ShowEnvByNameResponse> {
        const options = ParamCreater().showEnvByName(showEnvByNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改应用
     * @param {string} applicationId 应用id
     * @param {BizAppParam} updateAppRequestBody 修改应用参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApp(updateAppRequest?: UpdateAppRequest): Promise<UpdateAppResponse> {
        const options = ParamCreater().updateApp(updateAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改组件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改组件
     * @param {string} componentId 组件id
     * @param {ComponentUpdateParam} updateComponentRequestBody 组件名称
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
     * 该接口用于修改环境。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改环境
     * @param {string} environmentId 环境id
     * @param {EnvParam} updateEnvRequestBody 更新环境参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEnv(updateEnvRequest?: UpdateEnvRequest): Promise<UpdateEnvResponse> {
        const options = ParamCreater().updateEnv(updateEnvRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改子应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改子应用
     * @param {string} subAppId 子应用id
     * @param {SubAppUpdateParam} updateSubAppRequestBody 修改子应用参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubApp(updateSubAppRequest?: UpdateSubAppRequest): Promise<UpdateSubAppResponse> {
        const options = ParamCreater().updateSubApp(updateSubAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 该接口用于新增应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApp(createAppRequest?: CreateAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/applications",
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
         * 该接口用于新增组件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createComponent(createComponentRequest?: CreateComponentRequest) {
            const options = {
                method: "POST",
                url: "/v1/components",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createComponentRequest !== null && createComponentRequest !== undefined) {
                if (createComponentRequest instanceof CreateComponentRequest) {
                    body = createComponentRequest.body
                } else {
                    body = createComponentRequest['body'];
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
         * 该接口用于创建环境。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEnv(createEnvRequest?: CreateEnvRequest) {
            const options = {
                method: "POST",
                url: "/v1/environments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEnvRequest !== null && createEnvRequest !== undefined) {
                if (createEnvRequest instanceof CreateEnvRequest) {
                    body = createEnvRequest.body
                } else {
                    body = createEnvRequest['body'];
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
         * 该接口用于新增子应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubApp(createSubAppRequest?: CreateSubAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/sub-applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSubAppRequest !== null && createSubAppRequest !== undefined) {
                if (createSubAppRequest instanceof CreateSubAppRequest) {
                    body = createSubAppRequest.body
                } else {
                    body = createSubAppRequest['body'];
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
         * 该接口用于删除应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApp(deleteAppRequest?: DeleteAppRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/applications/{application_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;

            if (deleteAppRequest !== null && deleteAppRequest !== undefined) {
                if (deleteAppRequest instanceof DeleteAppRequest) {
                    applicationId = deleteAppRequest.applicationId;
                } else {
                    applicationId = deleteAppRequest['application_id'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling deleteApp.');
            }

            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除组件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteComponent(deleteComponentRequest?: DeleteComponentRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/components/{component_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let componentId;

            if (deleteComponentRequest !== null && deleteComponentRequest !== undefined) {
                if (deleteComponentRequest instanceof DeleteComponentRequest) {
                    componentId = deleteComponentRequest.componentId;
                } else {
                    componentId = deleteComponentRequest['component_id'];
                }
            }

        
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling deleteComponent.');
            }

            options.pathParams = { 'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除环境。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEnv(deleteEnvRequest?: DeleteEnvRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/environments/{environment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let environmentId;

            if (deleteEnvRequest !== null && deleteEnvRequest !== undefined) {
                if (deleteEnvRequest instanceof DeleteEnvRequest) {
                    environmentId = deleteEnvRequest.environmentId;
                } else {
                    environmentId = deleteEnvRequest['environment_id'];
                }
            }

        
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling deleteEnv.');
            }

            options.pathParams = { 'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除子应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubApp(deleteSubAppRequest?: DeleteSubAppRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/sub-applications/{sub_app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let subAppId;

            if (deleteSubAppRequest !== null && deleteSubAppRequest !== undefined) {
                if (deleteSubAppRequest instanceof DeleteSubAppRequest) {
                    subAppId = deleteSubAppRequest.subAppId;
                } else {
                    subAppId = deleteSubAppRequest['sub_app_id'];
                }
            }

        
            if (subAppId === null || subAppId === undefined) {
            throw new RequiredError('subAppId','Required parameter subAppId was null or undefined when calling deleteSubApp.');
            }

            options.pathParams = { 'sub_app_id': subAppId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询绑定在节点上的资源列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceUnderNode(listResourceUnderNodeRequest?: ListResourceUnderNodeRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource/{rf_resource_type}/type/{type}/ci-relationships",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let rfResourceType;
            
            let type;

            if (listResourceUnderNodeRequest !== null && listResourceUnderNodeRequest !== undefined) {
                if (listResourceUnderNodeRequest instanceof ListResourceUnderNodeRequest) {
                    rfResourceType = listResourceUnderNodeRequest.rfResourceType;
                    type = listResourceUnderNodeRequest.type;
                    body = listResourceUnderNodeRequest.body
                } else {
                    rfResourceType = listResourceUnderNodeRequest['rf_resource_type'];
                    type = listResourceUnderNodeRequest['type'];
                    body = listResourceUnderNodeRequest['body'];
                }
            }

        
            if (rfResourceType === null || rfResourceType === undefined) {
            throw new RequiredError('rfResourceType','Required parameter rfResourceType was null or undefined when calling listResourceUnderNode.');
            }
            if (type === null || type === undefined) {
            throw new RequiredError('type','Required parameter type was null or undefined when calling listResourceUnderNode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'rf_resource_type': rfResourceType,'type': type, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询应用详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApp(showAppRequest?: ShowAppRequest) {
            const options = {
                method: "GET",
                url: "/v1/applications/{application_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;

            if (showAppRequest !== null && showAppRequest !== undefined) {
                if (showAppRequest instanceof ShowAppRequest) {
                    applicationId = showAppRequest.applicationId;
                } else {
                    applicationId = showAppRequest['application_id'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showApp.');
            }

            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询应用详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppByName(showAppByNameRequest?: ShowAppByNameRequest) {
            const options = {
                method: "GET",
                url: "/v1/applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let displayName;

            if (showAppByNameRequest !== null && showAppByNameRequest !== undefined) {
                if (showAppByNameRequest instanceof ShowAppByNameRequest) {
                    name = showAppByNameRequest.name;
                    displayName = showAppByNameRequest.displayName;
                } else {
                    name = showAppByNameRequest['name'];
                    displayName = showAppByNameRequest['display_name'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (displayName !== null && displayName !== undefined) {
                localVarQueryParameter['display_name'] = displayName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询组件详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showComponent(showComponentRequest?: ShowComponentRequest) {
            const options = {
                method: "GET",
                url: "/v1/components/{component_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let componentId;

            if (showComponentRequest !== null && showComponentRequest !== undefined) {
                if (showComponentRequest instanceof ShowComponentRequest) {
                    componentId = showComponentRequest.componentId;
                } else {
                    componentId = showComponentRequest['component_id'];
                }
            }

        
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling showComponent.');
            }

            options.pathParams = { 'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询组件详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showComponentByName(showComponentByNameRequest?: ShowComponentByNameRequest) {
            const options = {
                method: "GET",
                url: "/v1/components/application/{application_id}/name/{component_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let componentName;

            if (showComponentByNameRequest !== null && showComponentByNameRequest !== undefined) {
                if (showComponentByNameRequest instanceof ShowComponentByNameRequest) {
                    applicationId = showComponentByNameRequest.applicationId;
                    componentName = showComponentByNameRequest.componentName;
                } else {
                    applicationId = showComponentByNameRequest['application_id'];
                    componentName = showComponentByNameRequest['component_name'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showComponentByName.');
            }
            if (componentName === null || componentName === undefined) {
            throw new RequiredError('componentName','Required parameter componentName was null or undefined when calling showComponentByName.');
            }

            options.pathParams = { 'application_id': applicationId,'component_name': componentName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询环境详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEnv(showEnvRequest?: ShowEnvRequest) {
            const options = {
                method: "GET",
                url: "/v1/environments/{environment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let environmentId;

            if (showEnvRequest !== null && showEnvRequest !== undefined) {
                if (showEnvRequest instanceof ShowEnvRequest) {
                    environmentId = showEnvRequest.environmentId;
                } else {
                    environmentId = showEnvRequest['environment_id'];
                }
            }

        
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling showEnv.');
            }

            options.pathParams = { 'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询环境详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEnvByName(showEnvByNameRequest?: ShowEnvByNameRequest) {
            const options = {
                method: "GET",
                url: "/v1/environments/name/{environment_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let environmentName;
            
            let region;
            
            let componentId;

            if (showEnvByNameRequest !== null && showEnvByNameRequest !== undefined) {
                if (showEnvByNameRequest instanceof ShowEnvByNameRequest) {
                    environmentName = showEnvByNameRequest.environmentName;
                    region = showEnvByNameRequest.region;
                    componentId = showEnvByNameRequest.componentId;
                } else {
                    environmentName = showEnvByNameRequest['environment_name'];
                    region = showEnvByNameRequest['region'];
                    componentId = showEnvByNameRequest['component_id'];
                }
            }

        
            if (environmentName === null || environmentName === undefined) {
            throw new RequiredError('environmentName','Required parameter environmentName was null or undefined when calling showEnvByName.');
            }
            if (region === null || region === undefined) {
                throw new RequiredError('region','Required parameter region was null or undefined when calling showEnvByName.');
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (componentId === null || componentId === undefined) {
                throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling showEnvByName.');
            }
            if (componentId !== null && componentId !== undefined) {
                localVarQueryParameter['component_id'] = componentId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'environment_name': environmentName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApp(updateAppRequest?: UpdateAppRequest) {
            const options = {
                method: "PUT",
                url: "/v1/applications/{application_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;

            if (updateAppRequest !== null && updateAppRequest !== undefined) {
                if (updateAppRequest instanceof UpdateAppRequest) {
                    applicationId = updateAppRequest.applicationId;
                    body = updateAppRequest.body
                } else {
                    applicationId = updateAppRequest['application_id'];
                    body = updateAppRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling updateApp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改组件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateComponent(updateComponentRequest?: UpdateComponentRequest) {
            const options = {
                method: "PUT",
                url: "/v1/components/{component_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let componentId;

            if (updateComponentRequest !== null && updateComponentRequest !== undefined) {
                if (updateComponentRequest instanceof UpdateComponentRequest) {
                    componentId = updateComponentRequest.componentId;
                    body = updateComponentRequest.body
                } else {
                    componentId = updateComponentRequest['component_id'];
                    body = updateComponentRequest['body'];
                }
            }

        
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling updateComponent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改环境。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEnv(updateEnvRequest?: UpdateEnvRequest) {
            const options = {
                method: "PUT",
                url: "/v1/environments/{environment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let environmentId;

            if (updateEnvRequest !== null && updateEnvRequest !== undefined) {
                if (updateEnvRequest instanceof UpdateEnvRequest) {
                    environmentId = updateEnvRequest.environmentId;
                    body = updateEnvRequest.body
                } else {
                    environmentId = updateEnvRequest['environment_id'];
                    body = updateEnvRequest['body'];
                }
            }

        
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling updateEnv.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改子应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubApp(updateSubAppRequest?: UpdateSubAppRequest) {
            const options = {
                method: "PUT",
                url: "/v1/sub-applications/{sub_app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let subAppId;

            if (updateSubAppRequest !== null && updateSubAppRequest !== undefined) {
                if (updateSubAppRequest instanceof UpdateSubAppRequest) {
                    subAppId = updateSubAppRequest.subAppId;
                    body = updateSubAppRequest.body
                } else {
                    subAppId = updateSubAppRequest['sub_app_id'];
                    body = updateSubAppRequest['body'];
                }
            }

        
            if (subAppId === null || subAppId === undefined) {
            throw new RequiredError('subAppId','Required parameter subAppId was null or undefined when calling updateSubApp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'sub_app_id': subAppId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): AomClient {
    return new AomClient(client);
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