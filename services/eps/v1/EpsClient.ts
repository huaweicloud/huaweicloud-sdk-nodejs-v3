import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AssociatedResourceListResponse } from './model/AssociatedResourceListResponse';
import { CreateEnterpriseProjectRequest } from './model/CreateEnterpriseProjectRequest';
import { CreateEnterpriseProjectResponse } from './model/CreateEnterpriseProjectResponse';
import { DeleteEnterpriseProjectRequest } from './model/DeleteEnterpriseProjectRequest';
import { DeleteEnterpriseProjectResponse } from './model/DeleteEnterpriseProjectResponse';
import { DisableAction } from './model/DisableAction';
import { DisableEnterpriseProjectRequest } from './model/DisableEnterpriseProjectRequest';
import { DisableEnterpriseProjectResponse } from './model/DisableEnterpriseProjectResponse';
import { EnableAction } from './model/EnableAction';
import { EnableEnterpriseProjectRequest } from './model/EnableEnterpriseProjectRequest';
import { EnableEnterpriseProjectResponse } from './model/EnableEnterpriseProjectResponse';
import { EnterpriseProject } from './model/EnterpriseProject';
import { EnterpriseProjectConfig } from './model/EnterpriseProjectConfig';
import { EpDetail } from './model/EpDetail';
import { EpQuotas } from './model/EpQuotas';
import { Errors } from './model/Errors';
import { Link } from './model/Link';
import { ListApiVersionsRequest } from './model/ListApiVersionsRequest';
import { ListApiVersionsResponse } from './model/ListApiVersionsResponse';
import { ListEnterpriseProjectRequest } from './model/ListEnterpriseProjectRequest';
import { ListEnterpriseProjectResponse } from './model/ListEnterpriseProjectResponse';
import { ListMigrationRecordRequest } from './model/ListMigrationRecordRequest';
import { ListMigrationRecordResponse } from './model/ListMigrationRecordResponse';
import { ListProvidersRequest } from './model/ListProvidersRequest';
import { ListProvidersResponse } from './model/ListProvidersResponse';
import { ListResourceMappingRequest } from './model/ListResourceMappingRequest';
import { ListResourceMappingResponse } from './model/ListResourceMappingResponse';
import { Match } from './model/Match';
import { MigrateResource } from './model/MigrateResource';
import { MigrateResourceRequest } from './model/MigrateResourceRequest';
import { MigrateResourceResponse } from './model/MigrateResourceResponse';
import { ProviderResponseBody } from './model/ProviderResponseBody';
import { QuotasDetail } from './model/QuotasDetail';
import { ResourceErrorListResponse } from './model/ResourceErrorListResponse';
import { ResourceMigrateRecord } from './model/ResourceMigrateRecord';
import { ResourceTypeBody } from './model/ResourceTypeBody';
import { Resources } from './model/Resources';
import { ResqEpResouce } from './model/ResqEpResouce';
import { ShowApiVersionRequest } from './model/ShowApiVersionRequest';
import { ShowApiVersionResponse } from './model/ShowApiVersionResponse';
import { ShowAssociatedResourcesRequest } from './model/ShowAssociatedResourcesRequest';
import { ShowAssociatedResourcesResponse } from './model/ShowAssociatedResourcesResponse';
import { ShowEnterpriseProjectQuotaRequest } from './model/ShowEnterpriseProjectQuotaRequest';
import { ShowEnterpriseProjectQuotaResponse } from './model/ShowEnterpriseProjectQuotaResponse';
import { ShowEnterpriseProjectRequest } from './model/ShowEnterpriseProjectRequest';
import { ShowEnterpriseProjectResponse } from './model/ShowEnterpriseProjectResponse';
import { ShowEpConfigsRequest } from './model/ShowEpConfigsRequest';
import { ShowEpConfigsResponse } from './model/ShowEpConfigsResponse';
import { ShowResourceBindEnterpriseProjectRequest } from './model/ShowResourceBindEnterpriseProjectRequest';
import { ShowResourceBindEnterpriseProjectResponse } from './model/ShowResourceBindEnterpriseProjectResponse';
import { UpdateEnterpriseProjectRequest } from './model/UpdateEnterpriseProjectRequest';
import { UpdateEnterpriseProjectResponse } from './model/UpdateEnterpriseProjectResponse';
import { VersionDetail } from './model/VersionDetail';

export class EpsClient {
    public static newBuilder(): ClientBuilder<EpsClient> {
            let client = new ClientBuilder<EpsClient>(newClient);
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
     * 创建企业项目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建企业项目
     * @param {EnterpriseProject} createEp 创建企业项目
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEnterpriseProject(createEnterpriseProjectRequest?: CreateEnterpriseProjectRequest): Promise<CreateEnterpriseProjectResponse> {
        const options = ParamCreater().createEnterpriseProject(createEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除企业项目
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除企业项目
     * @param {string} enterpriseProjectId 企业项目ID，不能为0。 可以通过查询企业项目列表接口获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEnterpriseProject(deleteEnterpriseProjectRequest?: DeleteEnterpriseProjectRequest): Promise<DeleteEnterpriseProjectResponse> {
        const options = ParamCreater().deleteEnterpriseProject(deleteEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停用企业项目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停用企业项目
     * @param {string} enterpriseProjectId 
     * @param {DisableAction} action “disable”—停用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableEnterpriseProject(disableEnterpriseProjectRequest?: DisableEnterpriseProjectRequest): Promise<DisableEnterpriseProjectResponse> {
        const options = ParamCreater().disableEnterpriseProject(disableEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用企业项目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用企业项目
     * @param {string} enterpriseProjectId 企业项目ID，不能为0。
     * @param {EnableAction} action “enable”—启用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableEnterpriseProject(enableEnterpriseProjectRequest?: EnableEnterpriseProjectRequest): Promise<EnableEnterpriseProjectResponse> {
        const options = ParamCreater().enableEnterpriseProject(enableEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业项目的API版本列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersions(listApiVersionsRequest?: ListApiVersionsRequest): Promise<ListApiVersionsResponse> {
        const options = ParamCreater().listApiVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前用户已授权的企业项目列表，用户可以使用企业项目绑定资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业项目列表
     * @param {string} [id] 企业项目ID，0表示默认企业项目
     * @param {number} [limit] 查询记录数默认为1000，limit最多为1000, 最小值为1
     * @param {string} [name] 企业项目名称，支持模糊搜索
     * @param {number} [offset] 索引位置，从offset指定的下一条数据开始查询，必须为数字，不能为负数，默认为0
     * @param {'desc' | 'asc'} [sortDir] 降序或升序,默认为“desc” 。desc表示降序 。asc 表示升序
     * @param {'created_at' | 'updated_at'} [sortKey] 返回结果按该关键字排序（支持updated_at等关键字，默认为“created_at”）
     * @param {number} [status] 企业项目状态。 1--启用，2--停用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnterpriseProject(listEnterpriseProjectRequest?: ListEnterpriseProjectRequest): Promise<ListEnterpriseProjectResponse> {
        const options = ParamCreater().listEnterpriseProject(listEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源迁移记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源迁移记录
     * @param {string} [startTime] 开始时间
     * @param {string} [endTime] 结束时间
     * @param {string} [offset] 索引位置，从offset指定的下一条数据开始查询
     * @param {number} [limit] 查询记录数
     * @param {string} [resourceId] 资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMigrationRecord(listMigrationRecordRequest?: ListMigrationRecordRequest): Promise<ListMigrationRecordResponse> {
        const options = ParamCreater().listMigrationRecord(listMigrationRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业项目支持的服务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业项目支持的服务
     * @param {'zh-cn' | 'en-us'} [locale] 指定显示语言
     * @param {number} [limit] 查询记录数默认为200，limit最多为200, 最小值为1
     * @param {number} [offset] 索引位置，从offset指定的下一条数据开始查询，必须为数字，不能为负数，默认为0
     * @param {string} [provider] 云服务名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProviders(listProvidersRequest?: ListProvidersRequest): Promise<ListProvidersResponse> {
        const options = ParamCreater().listProviders(listProvidersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源类型映射
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源类型映射
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceMapping(listResourceMappingRequest?: ListResourceMappingRequest): Promise<ListResourceMappingResponse> {
        const options = ParamCreater().listResourceMapping();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 迁移资源到目标企业项目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 迁移资源
     * @param {string} enterpriseProjectId 目标企业项目ID，enterprise_project_id为0时表示迁移资源到默认资源组default。注：实际迁移时，会将资源所属的【当前企业项目ID】替换为【目标企业项目ID】，所以不需要指定【当前企业项目ID】。
     * @param {MigrateResource} reqMigrateResource 资源迁移
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public migrateResource(migrateResourceRequest?: MigrateResourceRequest): Promise<MigrateResourceResponse> {
        const options = ParamCreater().migrateResource(migrateResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的企业项目API版本号详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本号详情
     * @param {string} apiVersion 版本ID（版本号），如v1.0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApiVersion(showApiVersionRequest?: ShowApiVersionRequest): Promise<ShowApiVersionResponse> {
        const options = ParamCreater().showApiVersion(showApiVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询关联资源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询关联资源
     * @param {string} projectId 项目ID
     * @param {string} regionId 区域ID
     * @param {string} resourceId 资源ID
     * @param {string} resourceType 资源类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAssociatedResources(showAssociatedResourcesRequest?: ShowAssociatedResourcesRequest): Promise<ShowAssociatedResourcesResponse> {
        const options = ParamCreater().showAssociatedResources(showAssociatedResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业项目详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业项目详情
     * @param {string} enterpriseProjectId 企业项目ID。 可以通过查询企业项目列表接口获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEnterpriseProject(showEnterpriseProjectRequest?: ShowEnterpriseProjectRequest): Promise<ShowEnterpriseProjectResponse> {
        const options = ParamCreater().showEnterpriseProject(showEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业项目的配额信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业项目配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEnterpriseProjectQuota(showEnterpriseProjectQuotaRequest?: ShowEnterpriseProjectQuotaRequest): Promise<ShowEnterpriseProjectQuotaResponse> {
        const options = ParamCreater().showEnterpriseProjectQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务配置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEpConfigs(showEpConfigsRequest?: ShowEpConfigsRequest): Promise<ShowEpConfigsResponse> {
        const options = ParamCreater().showEpConfigs();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业项目下绑定的资源详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业项目绑定的资源列表
     * @param {string} enterpriseProjectId 企业项目ID
     * @param {ResqEpResouce} reqEpResouce 获取企业项目下资源
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceBindEnterpriseProject(showResourceBindEnterpriseProjectRequest?: ShowResourceBindEnterpriseProjectRequest): Promise<ShowResourceBindEnterpriseProjectResponse> {
        const options = ParamCreater().showResourceBindEnterpriseProject(showResourceBindEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改企业项目。当前仅支持修改名称和描述。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改企业项目
     * @param {string} enterpriseProjectId 企业项目ID，不能为0。 可以通过查询企业项目列表接口获取。
     * @param {EnterpriseProject} modifyEp 修改企业项目
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEnterpriseProject(updateEnterpriseProjectRequest?: UpdateEnterpriseProjectRequest): Promise<UpdateEnterpriseProjectResponse> {
        const options = ParamCreater().updateEnterpriseProject(updateEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建企业项目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEnterpriseProject(createEnterpriseProjectRequest?: CreateEnterpriseProjectRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/enterprise-projects",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEnterpriseProjectRequest !== null && createEnterpriseProjectRequest !== undefined) {
                if (createEnterpriseProjectRequest instanceof CreateEnterpriseProjectRequest) {
                    body = createEnterpriseProjectRequest.body
                } else {
                    body = createEnterpriseProjectRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除企业项目
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEnterpriseProject(deleteEnterpriseProjectRequest?: DeleteEnterpriseProjectRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/enterprise-projects/{enterprise_project_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let enterpriseProjectId;

            if (deleteEnterpriseProjectRequest !== null && deleteEnterpriseProjectRequest !== undefined) {
                if (deleteEnterpriseProjectRequest instanceof DeleteEnterpriseProjectRequest) {
                    enterpriseProjectId = deleteEnterpriseProjectRequest.enterpriseProjectId;
                } else {
                    enterpriseProjectId = deleteEnterpriseProjectRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling deleteEnterpriseProject.');
            }

            options.pathParams = { 'enterprise_project_id': enterpriseProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停用企业项目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableEnterpriseProject(disableEnterpriseProjectRequest?: DisableEnterpriseProjectRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/enterprise-projects/{enterprise_project_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let enterpriseProjectId;

            if (disableEnterpriseProjectRequest !== null && disableEnterpriseProjectRequest !== undefined) {
                if (disableEnterpriseProjectRequest instanceof DisableEnterpriseProjectRequest) {
                    enterpriseProjectId = disableEnterpriseProjectRequest.enterpriseProjectId;
                    body = disableEnterpriseProjectRequest.body
                } else {
                    enterpriseProjectId = disableEnterpriseProjectRequest['enterprise_project_id'];
                    body = disableEnterpriseProjectRequest['body'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling disableEnterpriseProject.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'enterprise_project_id': enterpriseProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用企业项目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableEnterpriseProject(enableEnterpriseProjectRequest?: EnableEnterpriseProjectRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/enterprise-projects/{enterprise_project_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let enterpriseProjectId;

            if (enableEnterpriseProjectRequest !== null && enableEnterpriseProjectRequest !== undefined) {
                if (enableEnterpriseProjectRequest instanceof EnableEnterpriseProjectRequest) {
                    enterpriseProjectId = enableEnterpriseProjectRequest.enterpriseProjectId;
                    body = enableEnterpriseProjectRequest.body
                } else {
                    enterpriseProjectId = enableEnterpriseProjectRequest['enterprise_project_id'];
                    body = enableEnterpriseProjectRequest['body'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling enableEnterpriseProject.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'enterprise_project_id': enterpriseProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询企业项目的API版本列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersions() {
            const options = {
                method: "GET",
                url: "/",
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
         * 查询当前用户已授权的企业项目列表，用户可以使用企业项目绑定资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnterpriseProject(listEnterpriseProjectRequest?: ListEnterpriseProjectRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/enterprise-projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let limit;
            
            let name;
            
            let offset;
            
            let sortDir;
            
            let sortKey;
            
            let status;

            if (listEnterpriseProjectRequest !== null && listEnterpriseProjectRequest !== undefined) {
                if (listEnterpriseProjectRequest instanceof ListEnterpriseProjectRequest) {
                    id = listEnterpriseProjectRequest.id;
                    limit = listEnterpriseProjectRequest.limit;
                    name = listEnterpriseProjectRequest.name;
                    offset = listEnterpriseProjectRequest.offset;
                    sortDir = listEnterpriseProjectRequest.sortDir;
                    sortKey = listEnterpriseProjectRequest.sortKey;
                    status = listEnterpriseProjectRequest.status;
                } else {
                    id = listEnterpriseProjectRequest['id'];
                    limit = listEnterpriseProjectRequest['limit'];
                    name = listEnterpriseProjectRequest['name'];
                    offset = listEnterpriseProjectRequest['offset'];
                    sortDir = listEnterpriseProjectRequest['sort_dir'];
                    sortKey = listEnterpriseProjectRequest['sort_key'];
                    status = listEnterpriseProjectRequest['status'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源迁移记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMigrationRecord(listMigrationRecordRequest?: ListMigrationRecordRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/enterprise-projects/migrate-record/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let offset;
            
            let limit;
            
            let resourceId;

            if (listMigrationRecordRequest !== null && listMigrationRecordRequest !== undefined) {
                if (listMigrationRecordRequest instanceof ListMigrationRecordRequest) {
                    startTime = listMigrationRecordRequest.startTime;
                    endTime = listMigrationRecordRequest.endTime;
                    offset = listMigrationRecordRequest.offset;
                    limit = listMigrationRecordRequest.limit;
                    resourceId = listMigrationRecordRequest.resourceId;
                } else {
                    startTime = listMigrationRecordRequest['start_time'];
                    endTime = listMigrationRecordRequest['end_time'];
                    offset = listMigrationRecordRequest['offset'];
                    limit = listMigrationRecordRequest['limit'];
                    resourceId = listMigrationRecordRequest['resource_id'];
                }
            }

        
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询企业项目支持的服务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProviders(listProvidersRequest?: ListProvidersRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/enterprise-projects/providers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let locale;
            
            let limit;
            
            let offset;
            
            let provider;

            if (listProvidersRequest !== null && listProvidersRequest !== undefined) {
                if (listProvidersRequest instanceof ListProvidersRequest) {
                    locale = listProvidersRequest.locale;
                    limit = listProvidersRequest.limit;
                    offset = listProvidersRequest.offset;
                    provider = listProvidersRequest.provider;
                } else {
                    locale = listProvidersRequest['locale'];
                    limit = listProvidersRequest['limit'];
                    offset = listProvidersRequest['offset'];
                    provider = listProvidersRequest['provider'];
                }
            }

        
            if (locale !== null && locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (provider !== null && provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源类型映射
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceMapping() {
            const options = {
                method: "GET",
                url: "/v1.0/enterprise-projects/resources-mapping",
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
         * 迁移资源到目标企业项目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        migrateResource(migrateResourceRequest?: MigrateResourceRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/enterprise-projects/{enterprise_project_id}/resources-migrate",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let enterpriseProjectId;

            if (migrateResourceRequest !== null && migrateResourceRequest !== undefined) {
                if (migrateResourceRequest instanceof MigrateResourceRequest) {
                    enterpriseProjectId = migrateResourceRequest.enterpriseProjectId;
                    body = migrateResourceRequest.body
                } else {
                    enterpriseProjectId = migrateResourceRequest['enterprise_project_id'];
                    body = migrateResourceRequest['body'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling migrateResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'enterprise_project_id': enterpriseProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定的企业项目API版本号详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApiVersion(showApiVersionRequest?: ShowApiVersionRequest) {
            const options = {
                method: "GET",
                url: "/{api_version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let apiVersion;

            if (showApiVersionRequest !== null && showApiVersionRequest !== undefined) {
                if (showApiVersionRequest instanceof ShowApiVersionRequest) {
                    apiVersion = showApiVersionRequest.apiVersion;
                } else {
                    apiVersion = showApiVersionRequest['api_version'];
                }
            }

        
            if (apiVersion === null || apiVersion === undefined) {
            throw new RequiredError('apiVersion','Required parameter apiVersion was null or undefined when calling showApiVersion.');
            }

            options.pathParams = { 'api_version': apiVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询关联资源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAssociatedResources(showAssociatedResourcesRequest?: ShowAssociatedResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/associated-resources/{resource_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let regionId;
            
            let resourceId;
            
            let resourceType;

            if (showAssociatedResourcesRequest !== null && showAssociatedResourcesRequest !== undefined) {
                if (showAssociatedResourcesRequest instanceof ShowAssociatedResourcesRequest) {
                    projectId = showAssociatedResourcesRequest.projectId;
                    regionId = showAssociatedResourcesRequest.regionId;
                    resourceId = showAssociatedResourcesRequest.resourceId;
                    resourceType = showAssociatedResourcesRequest.resourceType;
                } else {
                    projectId = showAssociatedResourcesRequest['project_id'];
                    regionId = showAssociatedResourcesRequest['region_id'];
                    resourceId = showAssociatedResourcesRequest['resource_id'];
                    resourceType = showAssociatedResourcesRequest['resource_type'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
                throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showAssociatedResources.');
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (regionId === null || regionId === undefined) {
                throw new RequiredError('regionId','Required parameter regionId was null or undefined when calling showAssociatedResources.');
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showAssociatedResources.');
            }
            if (resourceType === null || resourceType === undefined) {
                throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showAssociatedResources.');
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询企业项目详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEnterpriseProject(showEnterpriseProjectRequest?: ShowEnterpriseProjectRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/enterprise-projects/{enterprise_project_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let enterpriseProjectId;

            if (showEnterpriseProjectRequest !== null && showEnterpriseProjectRequest !== undefined) {
                if (showEnterpriseProjectRequest instanceof ShowEnterpriseProjectRequest) {
                    enterpriseProjectId = showEnterpriseProjectRequest.enterpriseProjectId;
                } else {
                    enterpriseProjectId = showEnterpriseProjectRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling showEnterpriseProject.');
            }

            options.pathParams = { 'enterprise_project_id': enterpriseProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询企业项目的配额信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEnterpriseProjectQuota() {
            const options = {
                method: "GET",
                url: "/v1.0/enterprise-projects/quotas",
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
         * 查询服务配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEpConfigs() {
            const options = {
                method: "GET",
                url: "/v1/enterprise-projects/configs",
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
         * 查询企业项目下绑定的资源详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceBindEnterpriseProject(showResourceBindEnterpriseProjectRequest?: ShowResourceBindEnterpriseProjectRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/enterprise-projects/{enterprise_project_id}/resources/filter",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let enterpriseProjectId;

            if (showResourceBindEnterpriseProjectRequest !== null && showResourceBindEnterpriseProjectRequest !== undefined) {
                if (showResourceBindEnterpriseProjectRequest instanceof ShowResourceBindEnterpriseProjectRequest) {
                    enterpriseProjectId = showResourceBindEnterpriseProjectRequest.enterpriseProjectId;
                    body = showResourceBindEnterpriseProjectRequest.body
                } else {
                    enterpriseProjectId = showResourceBindEnterpriseProjectRequest['enterprise_project_id'];
                    body = showResourceBindEnterpriseProjectRequest['body'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling showResourceBindEnterpriseProject.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'enterprise_project_id': enterpriseProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改企业项目。当前仅支持修改名称和描述。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEnterpriseProject(updateEnterpriseProjectRequest?: UpdateEnterpriseProjectRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/enterprise-projects/{enterprise_project_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let enterpriseProjectId;

            if (updateEnterpriseProjectRequest !== null && updateEnterpriseProjectRequest !== undefined) {
                if (updateEnterpriseProjectRequest instanceof UpdateEnterpriseProjectRequest) {
                    enterpriseProjectId = updateEnterpriseProjectRequest.enterpriseProjectId;
                    body = updateEnterpriseProjectRequest.body
                } else {
                    enterpriseProjectId = updateEnterpriseProjectRequest['enterprise_project_id'];
                    body = updateEnterpriseProjectRequest['body'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling updateEnterpriseProject.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'enterprise_project_id': enterpriseProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): EpsClient {
    return new EpsClient(client);
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