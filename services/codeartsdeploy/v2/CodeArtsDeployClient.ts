import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AppComponentDao } from './model/AppComponentDao';
import { ConfigInfoDO } from './model/ConfigInfoDO';
import { CreateDeployTaskByTemplateRequest } from './model/CreateDeployTaskByTemplateRequest';
import { CreateDeployTaskByTemplateResponse } from './model/CreateDeployTaskByTemplateResponse';
import { CreateDeploymentGroupRequest } from './model/CreateDeploymentGroupRequest';
import { CreateDeploymentGroupResponse } from './model/CreateDeploymentGroupResponse';
import { CreateDeploymentHostRequest } from './model/CreateDeploymentHostRequest';
import { CreateDeploymentHostResponse } from './model/CreateDeploymentHostResponse';
import { DeleteDeployTaskRequest } from './model/DeleteDeployTaskRequest';
import { DeleteDeployTaskResponse } from './model/DeleteDeployTaskResponse';
import { DeleteDeploymentGroupRequest } from './model/DeleteDeploymentGroupRequest';
import { DeleteDeploymentGroupResponse } from './model/DeleteDeploymentGroupResponse';
import { DeleteDeploymentHostRequest } from './model/DeleteDeploymentHostRequest';
import { DeleteDeploymentHostResponse } from './model/DeleteDeploymentHostResponse';
import { DeploymentGroup } from './model/DeploymentGroup';
import { DeploymentGroupDetail } from './model/DeploymentGroupDetail';
import { DeploymentGroupUpdateRequest } from './model/DeploymentGroupUpdateRequest';
import { DeploymentHost } from './model/DeploymentHost';
import { DeploymentHostAuthorizationBody } from './model/DeploymentHostAuthorizationBody';
import { DeploymentHostDetail } from './model/DeploymentHostDetail';
import { DeploymentHostInfo } from './model/DeploymentHostInfo';
import { DeploymentHostRequest } from './model/DeploymentHostRequest';
import { DeploymentUpdateHost } from './model/DeploymentUpdateHost';
import { DynamicConfigInfo } from './model/DynamicConfigInfo';
import { EnvExecutionBody } from './model/EnvExecutionBody';
import { ExecuteRecordV2Body } from './model/ExecuteRecordV2Body';
import { KeyValueDO } from './model/KeyValueDO';
import { ListDeployTaskHistoryByDateRequest } from './model/ListDeployTaskHistoryByDateRequest';
import { ListDeployTaskHistoryByDateResponse } from './model/ListDeployTaskHistoryByDateResponse';
import { ListDeployTasksRequest } from './model/ListDeployTasksRequest';
import { ListDeployTasksResponse } from './model/ListDeployTasksResponse';
import { ListHostGroupsRequest } from './model/ListHostGroupsRequest';
import { ListHostGroupsResponse } from './model/ListHostGroupsResponse';
import { ListHostsRequest } from './model/ListHostsRequest';
import { ListHostsResponse } from './model/ListHostsResponse';
import { ListTaskSuccessRateRequest } from './model/ListTaskSuccessRateRequest';
import { ListTaskSuccessRateResponse } from './model/ListTaskSuccessRateResponse';
import { ParamTypeLimits } from './model/ParamTypeLimits';
import { PermissionGroupDetail } from './model/PermissionGroupDetail';
import { PermissionHostDetail } from './model/PermissionHostDetail';
import { ShowDeployTaskDetailRequest } from './model/ShowDeployTaskDetailRequest';
import { ShowDeployTaskDetailResponse } from './model/ShowDeployTaskDetailResponse';
import { ShowDeploymentGroupDetailRequest } from './model/ShowDeploymentGroupDetailRequest';
import { ShowDeploymentGroupDetailResponse } from './model/ShowDeploymentGroupDetailResponse';
import { ShowDeploymentHostDetailRequest } from './model/ShowDeploymentHostDetailRequest';
import { ShowDeploymentHostDetailResponse } from './model/ShowDeploymentHostDetailResponse';
import { ShowProjectSuccessRateRequest } from './model/ShowProjectSuccessRateRequest';
import { ShowProjectSuccessRateResponse } from './model/ShowProjectSuccessRateResponse';
import { StartDeployTaskRequest } from './model/StartDeployTaskRequest';
import { StartDeployTaskResponse } from './model/StartDeployTaskResponse';
import { Step } from './model/Step';
import { TaskInfo } from './model/TaskInfo';
import { TaskSuccessRate } from './model/TaskSuccessRate';
import { TasksSuccessRateQuery } from './model/TasksSuccessRateQuery';
import { TemplateTaskRequestBody } from './model/TemplateTaskRequestBody';
import { UpdateDeploymentGroupRequest } from './model/UpdateDeploymentGroupRequest';
import { UpdateDeploymentGroupResponse } from './model/UpdateDeploymentGroupResponse';
import { UpdateDeploymentHostRequest } from './model/UpdateDeploymentHostRequest';
import { UpdateDeploymentHostResponse } from './model/UpdateDeploymentHostResponse';
import { UserInfo } from './model/UserInfo';

export class CodeArtsDeployClient {
    public static newBuilder(): ClientBuilder<CodeArtsDeployClient> {
            return new ClientBuilder<CodeArtsDeployClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 通过模板新建应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过模板新建应用
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {TemplateTaskRequestBody} createDeployTaskByTemplateRequestBody Body参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDeployTaskByTemplate(createDeployTaskByTemplateRequest?: CreateDeployTaskByTemplateRequest): Promise<CreateDeployTaskByTemplateResponse> {
        const options = ParamCreater().createDeployTaskByTemplate(createDeployTaskByTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据部署任务id删除应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用
     * @param {string} taskId 部署任务id
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDeployTask(deleteDeployTaskRequest?: DeleteDeployTaskRequest): Promise<DeleteDeployTaskResponse> {
        const options = ParamCreater().deleteDeployTask(deleteDeployTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据开始时间和结束时间查询项目下指定应用的历史部署记录列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据开始时间和结束时间查询项目下指定应用的历史部署记录列表
     * @param {string} projectId 项目ID
     * @param {string} id 任务ID
     * @param {number} page 分页页码， 表示从此页开始查询， page大于等于1
     * @param {number} size 每页显示的条目数量，size小于等于100
     * @param {string} startDate 区间开始时间，格式yyyy-MM-dd。 开始时间和结束时间间隔不能超过30天
     * @param {string} endDate 区间结束时间，格式yyyy-MM-dd。 开始时间和结束时间间隔不能超过30天
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDeployTaskHistoryByDate(listDeployTaskHistoryByDateRequest?: ListDeployTaskHistoryByDateRequest): Promise<ListDeployTaskHistoryByDateResponse> {
        const options = ParamCreater().listDeployTaskHistoryByDate(listDeployTaskHistoryByDateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目下应用列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取应用列表
     * @param {string} projectId 项目ID
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {number} page 分页页码， 表示从此页开始查询， page大于等于1
     * @param {number} size 每页显示的条目数量，size小于等于100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDeployTasks(listDeployTasksRequest?: ListDeployTasksRequest): Promise<ListDeployTasksResponse> {
        const options = ParamCreater().listDeployTasks(listDeployTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据部署任务id获取应用详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取应用详情
     * @param {string} taskId 部署任务id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeployTaskDetail(showDeployTaskDetailRequest?: ShowDeployTaskDetailRequest): Promise<ShowDeployTaskDetailResponse> {
        const options = ParamCreater().showDeployTaskDetail(showDeployTaskDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据部署任务id部署应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 部署应用
     * @param {string} taskId 部署任务id
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {EnvExecutionBody} startDeployTaskRequestBody 启动参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startDeployTask(startDeployTaskRequest?: StartDeployTaskRequest): Promise<StartDeployTaskResponse> {
        const options = ParamCreater().startDeployTask(startDeployTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定主机集群下新建主机。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建主机
     * @param {string} groupId 主机集群id
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {DeploymentHost} createDeploymentHostRequestBody 创建主机请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDeploymentHost(createDeploymentHostRequest?: CreateDeploymentHostRequest): Promise<CreateDeploymentHostResponse> {
        const options = ParamCreater().createDeploymentHost(createDeploymentHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据主机id删除主机。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除主机
     * @param {string} groupId 主机集群id
     * @param {string} hostId 主机id
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDeploymentHost(deleteDeploymentHostRequest?: DeleteDeploymentHostRequest): Promise<DeleteDeploymentHostResponse> {
        const options = ParamCreater().deleteDeploymentHost(deleteDeploymentHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据主机集群id查询指定主机集群下的主机列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机列表
     * @param {string} groupId 主机集群id
     * @param {boolean} [asProxy] 是否为代理机
     * @param {number} [offset] 偏移量,表示从此偏移量开始查询,offset大于等于0
     * @param {number} [limit] 每页显示的条目数量，默认为1000
     * @param {string} [name] 主机名，可输入中英文，数字和符号(-_.)
     * @param {string} [sortKey] 排序字段，支持：AS_PROXY|HOST_NAME|OS|OWNER_NAME|as_proxy|host_name|os|owner_name|nickName。不填默认为：as_proxy
     * @param {'DESC' | 'ASC'} [sortDir] 排序方式,默认为：DESC。DESC：降序排序。ASC：升序排序
     * @param {boolean} [withAuth] 返回结果是否加密
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHosts(listHostsRequest?: ListHostsRequest): Promise<ListHostsResponse> {
        const options = ParamCreater().listHosts(listHostsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据主机id查询主机详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机详情
     * @param {string} groupId 主机集群id
     * @param {string} hostId 主机id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeploymentHostDetail(showDeploymentHostDetailRequest?: ShowDeploymentHostDetailRequest): Promise<ShowDeploymentHostDetailResponse> {
        const options = ParamCreater().showDeploymentHostDetail(showDeploymentHostDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据主机id修改主机信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改主机
     * @param {string} groupId 主机集群id
     * @param {string} hostId 主机id
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {DeploymentHostRequest} updateDeploymentHostRequestBody 更新主机请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDeploymentHost(updateDeploymentHostRequest?: UpdateDeploymentHostRequest): Promise<UpdateDeploymentHostResponse> {
        const options = ParamCreater().updateDeploymentHost(updateDeploymentHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在项目下新建主机集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建主机集群
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {DeploymentGroup} createDeploymentGroupRequestBody 创建主机集群请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDeploymentGroup(createDeploymentGroupRequest?: CreateDeploymentGroupRequest): Promise<CreateDeploymentGroupResponse> {
        const options = ParamCreater().createDeploymentGroup(createDeploymentGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据主机集群id删除主机集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除主机集群
     * @param {string} groupId 主机集群id
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDeploymentGroup(deleteDeploymentGroupRequest?: DeleteDeploymentGroupRequest): Promise<DeleteDeploymentGroupResponse> {
        const options = ParamCreater().deleteDeploymentGroup(deleteDeploymentGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按条件查询主机集群列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机集群列表
     * @param {string} regionName 局点信息
     * @param {string} [projectId] 项目ID
     * @param {'windows' | 'linux'} [os] 操作系统：windows|linux
     * @param {number} [offset] 偏移量,表示从此偏移量开始查询,offset大于等于0
     * @param {number} [limit] 每页显示的条目数量，默认为1000
     * @param {string} [name] 主机集群名
     * @param {string} [sortKey] 排序字段：nickName|NAME|OWNER_NAME|CREATE_TIME|name|owner_name|create_time，不传使用默认排序
     * @param {'DESC' | 'ASC'} [sortDir] 排序方式：DESC、ASC，默认为DESC
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
     * 根据主机集群id查询主机集群详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机集群
     * @param {string} groupId 主机集群id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeploymentGroupDetail(showDeploymentGroupDetailRequest?: ShowDeploymentGroupDetailRequest): Promise<ShowDeploymentGroupDetailResponse> {
        const options = ParamCreater().showDeploymentGroupDetail(showDeploymentGroupDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据主机集群id修改主机集群信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改主机集群
     * @param {string} groupId 主机集群ID
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {DeploymentGroupUpdateRequest} updateDeploymentGroupRequestBody 主机集群请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDeploymentGroup(updateDeploymentGroupRequest?: UpdateDeploymentGroupRequest): Promise<UpdateDeploymentGroupResponse> {
        const options = ParamCreater().updateDeploymentGroup(updateDeploymentGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定应用的应用部署成功率
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定应用的应用部署成功率
     * @param {string} projectId 项目ID
     * @param {TasksSuccessRateQuery} listTaskSuccessRateRequestBody 应用部署成功率接口请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTaskSuccessRate(listTaskSuccessRateRequest?: ListTaskSuccessRateRequest): Promise<ListTaskSuccessRateResponse> {
        const options = ParamCreater().listTaskSuccessRate(listTaskSuccessRateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定项目的应用部署成功率
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定项目的应用部署成功率
     * @param {string} projectId 项目ID
     * @param {string} startDate 部署应用开始时间范围的左边界（包含），格式yyyy-MM-dd
     * @param {string} endDate 部署应用开始时间范围的右边界（包含），格式yyyy-MM-dd 。最大时间范围为1年。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectSuccessRate(showProjectSuccessRateRequest?: ShowProjectSuccessRateRequest): Promise<ShowProjectSuccessRateResponse> {
        const options = ParamCreater().showProjectSuccessRate(showProjectSuccessRateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 通过模板新建应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDeployTaskByTemplate(createDeployTaskByTemplateRequest?: CreateDeployTaskByTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2/tasks/template-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createDeployTaskByTemplateRequest !== null && createDeployTaskByTemplateRequest !== undefined) {
                if (createDeployTaskByTemplateRequest instanceof CreateDeployTaskByTemplateRequest) {
                    contentType = createDeployTaskByTemplateRequest.contentType;
                    body = createDeployTaskByTemplateRequest.body
                } else {
                    contentType = createDeployTaskByTemplateRequest['Content-Type'];
                    body = createDeployTaskByTemplateRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据部署任务id删除应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDeployTask(deleteDeployTaskRequest?: DeleteDeployTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;
            
            let contentType;

            if (deleteDeployTaskRequest !== null && deleteDeployTaskRequest !== undefined) {
                if (deleteDeployTaskRequest instanceof DeleteDeployTaskRequest) {
                    taskId = deleteDeployTaskRequest.taskId;
                    contentType = deleteDeployTaskRequest.contentType;
                } else {
                    taskId = deleteDeployTaskRequest['task_id'];
                    contentType = deleteDeployTaskRequest['Content-Type'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteDeployTask.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据开始时间和结束时间查询项目下指定应用的历史部署记录列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDeployTaskHistoryByDate(listDeployTaskHistoryByDateRequest?: ListDeployTaskHistoryByDateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/task/{id}/history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let id;
            
            let page;
            
            let size;
            
            let startDate;
            
            let endDate;
            
            let contentType;

            if (listDeployTaskHistoryByDateRequest !== null && listDeployTaskHistoryByDateRequest !== undefined) {
                if (listDeployTaskHistoryByDateRequest instanceof ListDeployTaskHistoryByDateRequest) {
                    projectId = listDeployTaskHistoryByDateRequest.projectId;
                    id = listDeployTaskHistoryByDateRequest.id;
                    page = listDeployTaskHistoryByDateRequest.page;
                    size = listDeployTaskHistoryByDateRequest.size;
                    startDate = listDeployTaskHistoryByDateRequest.startDate;
                    endDate = listDeployTaskHistoryByDateRequest.endDate;
                    contentType = listDeployTaskHistoryByDateRequest.contentType;
                } else {
                    projectId = listDeployTaskHistoryByDateRequest['project_id'];
                    id = listDeployTaskHistoryByDateRequest['id'];
                    page = listDeployTaskHistoryByDateRequest['page'];
                    size = listDeployTaskHistoryByDateRequest['size'];
                    startDate = listDeployTaskHistoryByDateRequest['start_date'];
                    endDate = listDeployTaskHistoryByDateRequest['end_date'];
                    contentType = listDeployTaskHistoryByDateRequest['Content-Type'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listDeployTaskHistoryByDate.');
            }
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling listDeployTaskHistoryByDate.');
            }
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling listDeployTaskHistoryByDate.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size === null || size === undefined) {
                throw new RequiredError('size','Required parameter size was null or undefined when calling listDeployTaskHistoryByDate.');
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling listDeployTaskHistoryByDate.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling listDeployTaskHistoryByDate.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目下应用列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDeployTasks(listDeployTasksRequest?: ListDeployTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/tasks/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let contentType;
            
            let page;
            
            let size;

            if (listDeployTasksRequest !== null && listDeployTasksRequest !== undefined) {
                if (listDeployTasksRequest instanceof ListDeployTasksRequest) {
                    projectId = listDeployTasksRequest.projectId;
                    contentType = listDeployTasksRequest.contentType;
                    page = listDeployTasksRequest.page;
                    size = listDeployTasksRequest.size;
                } else {
                    projectId = listDeployTasksRequest['project_id'];
                    contentType = listDeployTasksRequest['Content-Type'];
                    page = listDeployTasksRequest['page'];
                    size = listDeployTasksRequest['size'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listDeployTasks.');
            }
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling listDeployTasks.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (size === null || size === undefined) {
                throw new RequiredError('size','Required parameter size was null or undefined when calling listDeployTasks.');
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据部署任务id获取应用详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDeployTaskDetail(showDeployTaskDetailRequest?: ShowDeployTaskDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showDeployTaskDetailRequest !== null && showDeployTaskDetailRequest !== undefined) {
                if (showDeployTaskDetailRequest instanceof ShowDeployTaskDetailRequest) {
                    taskId = showDeployTaskDetailRequest.taskId;
                } else {
                    taskId = showDeployTaskDetailRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showDeployTaskDetail.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据部署任务id部署应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startDeployTask(startDeployTaskRequest?: StartDeployTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/tasks/{task_id}/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;
            
            let contentType;

            if (startDeployTaskRequest !== null && startDeployTaskRequest !== undefined) {
                if (startDeployTaskRequest instanceof StartDeployTaskRequest) {
                    taskId = startDeployTaskRequest.taskId;
                    contentType = startDeployTaskRequest.contentType;
                    body = startDeployTaskRequest.body
                } else {
                    taskId = startDeployTaskRequest['task_id'];
                    contentType = startDeployTaskRequest['Content-Type'];
                    body = startDeployTaskRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling startDeployTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定主机集群下新建主机。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDeploymentHost(createDeploymentHostRequest?: CreateDeploymentHostRequest) {
            const options = {
                method: "POST",
                url: "/v2/host-groups/{group_id}/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;
            
            let contentType;

            if (createDeploymentHostRequest !== null && createDeploymentHostRequest !== undefined) {
                if (createDeploymentHostRequest instanceof CreateDeploymentHostRequest) {
                    groupId = createDeploymentHostRequest.groupId;
                    contentType = createDeploymentHostRequest.contentType;
                    body = createDeploymentHostRequest.body
                } else {
                    groupId = createDeploymentHostRequest['group_id'];
                    contentType = createDeploymentHostRequest['Content-Type'];
                    body = createDeploymentHostRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling createDeploymentHost.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据主机id删除主机。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDeploymentHost(deleteDeploymentHostRequest?: DeleteDeploymentHostRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/host-groups/{group_id}/hosts/{host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let hostId;
            
            let contentType;

            if (deleteDeploymentHostRequest !== null && deleteDeploymentHostRequest !== undefined) {
                if (deleteDeploymentHostRequest instanceof DeleteDeploymentHostRequest) {
                    groupId = deleteDeploymentHostRequest.groupId;
                    hostId = deleteDeploymentHostRequest.hostId;
                    contentType = deleteDeploymentHostRequest.contentType;
                } else {
                    groupId = deleteDeploymentHostRequest['group_id'];
                    hostId = deleteDeploymentHostRequest['host_id'];
                    contentType = deleteDeploymentHostRequest['Content-Type'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteDeploymentHost.');
            }
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling deleteDeploymentHost.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'group_id': groupId,'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据主机集群id查询指定主机集群下的主机列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHosts(listHostsRequest?: ListHostsRequest) {
            const options = {
                method: "GET",
                url: "/v2/host-groups/{group_id}/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let asProxy;
            
            let offset;
            
            let limit;
            
            let name;
            
            let sortKey;
            
            let sortDir;
            
            let withAuth;

            if (listHostsRequest !== null && listHostsRequest !== undefined) {
                if (listHostsRequest instanceof ListHostsRequest) {
                    groupId = listHostsRequest.groupId;
                    asProxy = listHostsRequest.asProxy;
                    offset = listHostsRequest.offset;
                    limit = listHostsRequest.limit;
                    name = listHostsRequest.name;
                    sortKey = listHostsRequest.sortKey;
                    sortDir = listHostsRequest.sortDir;
                    withAuth = listHostsRequest.withAuth;
                } else {
                    groupId = listHostsRequest['group_id'];
                    asProxy = listHostsRequest['as_proxy'];
                    offset = listHostsRequest['offset'];
                    limit = listHostsRequest['limit'];
                    name = listHostsRequest['name'];
                    sortKey = listHostsRequest['sort_key'];
                    sortDir = listHostsRequest['sort_dir'];
                    withAuth = listHostsRequest['with_auth'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listHosts.');
            }
            if (asProxy !== null && asProxy !== undefined) {
                localVarQueryParameter['as_proxy'] = asProxy;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (withAuth !== null && withAuth !== undefined) {
                localVarQueryParameter['with_auth'] = withAuth;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据主机id查询主机详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDeploymentHostDetail(showDeploymentHostDetailRequest?: ShowDeploymentHostDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/host-groups/{group_id}/hosts/{host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let hostId;

            if (showDeploymentHostDetailRequest !== null && showDeploymentHostDetailRequest !== undefined) {
                if (showDeploymentHostDetailRequest instanceof ShowDeploymentHostDetailRequest) {
                    groupId = showDeploymentHostDetailRequest.groupId;
                    hostId = showDeploymentHostDetailRequest.hostId;
                } else {
                    groupId = showDeploymentHostDetailRequest['group_id'];
                    hostId = showDeploymentHostDetailRequest['host_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showDeploymentHostDetail.');
            }
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling showDeploymentHostDetail.');
            }

            options.pathParams = { 'group_id': groupId,'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据主机id修改主机信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDeploymentHost(updateDeploymentHostRequest?: UpdateDeploymentHostRequest) {
            const options = {
                method: "PUT",
                url: "/v2/host-groups/{group_id}/hosts/{host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;
            
            let hostId;
            
            let contentType;

            if (updateDeploymentHostRequest !== null && updateDeploymentHostRequest !== undefined) {
                if (updateDeploymentHostRequest instanceof UpdateDeploymentHostRequest) {
                    groupId = updateDeploymentHostRequest.groupId;
                    hostId = updateDeploymentHostRequest.hostId;
                    contentType = updateDeploymentHostRequest.contentType;
                    body = updateDeploymentHostRequest.body
                } else {
                    groupId = updateDeploymentHostRequest['group_id'];
                    hostId = updateDeploymentHostRequest['host_id'];
                    contentType = updateDeploymentHostRequest['Content-Type'];
                    body = updateDeploymentHostRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateDeploymentHost.');
            }
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling updateDeploymentHost.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId,'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在项目下新建主机集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDeploymentGroup(createDeploymentGroupRequest?: CreateDeploymentGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/host-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createDeploymentGroupRequest !== null && createDeploymentGroupRequest !== undefined) {
                if (createDeploymentGroupRequest instanceof CreateDeploymentGroupRequest) {
                    contentType = createDeploymentGroupRequest.contentType;
                    body = createDeploymentGroupRequest.body
                } else {
                    contentType = createDeploymentGroupRequest['Content-Type'];
                    body = createDeploymentGroupRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据主机集群id删除主机集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDeploymentGroup(deleteDeploymentGroupRequest?: DeleteDeploymentGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/host-groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let contentType;

            if (deleteDeploymentGroupRequest !== null && deleteDeploymentGroupRequest !== undefined) {
                if (deleteDeploymentGroupRequest instanceof DeleteDeploymentGroupRequest) {
                    groupId = deleteDeploymentGroupRequest.groupId;
                    contentType = deleteDeploymentGroupRequest.contentType;
                } else {
                    groupId = deleteDeploymentGroupRequest['group_id'];
                    contentType = deleteDeploymentGroupRequest['Content-Type'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteDeploymentGroup.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按条件查询主机集群列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostGroups(listHostGroupsRequest?: ListHostGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2/host-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let regionName;
            
            let projectId;
            
            let os;
            
            let offset;
            
            let limit;
            
            let name;
            
            let sortKey;
            
            let sortDir;

            if (listHostGroupsRequest !== null && listHostGroupsRequest !== undefined) {
                if (listHostGroupsRequest instanceof ListHostGroupsRequest) {
                    regionName = listHostGroupsRequest.regionName;
                    projectId = listHostGroupsRequest.projectId;
                    os = listHostGroupsRequest.os;
                    offset = listHostGroupsRequest.offset;
                    limit = listHostGroupsRequest.limit;
                    name = listHostGroupsRequest.name;
                    sortKey = listHostGroupsRequest.sortKey;
                    sortDir = listHostGroupsRequest.sortDir;
                } else {
                    regionName = listHostGroupsRequest['region_name'];
                    projectId = listHostGroupsRequest['project_id'];
                    os = listHostGroupsRequest['os'];
                    offset = listHostGroupsRequest['offset'];
                    limit = listHostGroupsRequest['limit'];
                    name = listHostGroupsRequest['name'];
                    sortKey = listHostGroupsRequest['sort_key'];
                    sortDir = listHostGroupsRequest['sort_dir'];
                }
            }

        
            if (regionName === null || regionName === undefined) {
                throw new RequiredError('regionName','Required parameter regionName was null or undefined when calling listHostGroups.');
            }
            if (regionName !== null && regionName !== undefined) {
                localVarQueryParameter['region_name'] = regionName;
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (os !== null && os !== undefined) {
                localVarQueryParameter['os'] = os;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
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
         * 根据主机集群id查询主机集群详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDeploymentGroupDetail(showDeploymentGroupDetailRequest?: ShowDeploymentGroupDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/host-groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (showDeploymentGroupDetailRequest !== null && showDeploymentGroupDetailRequest !== undefined) {
                if (showDeploymentGroupDetailRequest instanceof ShowDeploymentGroupDetailRequest) {
                    groupId = showDeploymentGroupDetailRequest.groupId;
                } else {
                    groupId = showDeploymentGroupDetailRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showDeploymentGroupDetail.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据主机集群id修改主机集群信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDeploymentGroup(updateDeploymentGroupRequest?: UpdateDeploymentGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/host-groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;
            
            let contentType;

            if (updateDeploymentGroupRequest !== null && updateDeploymentGroupRequest !== undefined) {
                if (updateDeploymentGroupRequest instanceof UpdateDeploymentGroupRequest) {
                    groupId = updateDeploymentGroupRequest.groupId;
                    contentType = updateDeploymentGroupRequest.contentType;
                    body = updateDeploymentGroupRequest.body
                } else {
                    groupId = updateDeploymentGroupRequest['group_id'];
                    contentType = updateDeploymentGroupRequest['Content-Type'];
                    body = updateDeploymentGroupRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateDeploymentGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定应用的应用部署成功率
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTaskSuccessRate(listTaskSuccessRateRequest?: ListTaskSuccessRateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/tasks/metrics/success-rate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (listTaskSuccessRateRequest !== null && listTaskSuccessRateRequest !== undefined) {
                if (listTaskSuccessRateRequest instanceof ListTaskSuccessRateRequest) {
                    projectId = listTaskSuccessRateRequest.projectId;
                    body = listTaskSuccessRateRequest.body
                } else {
                    projectId = listTaskSuccessRateRequest['project_id'];
                    body = listTaskSuccessRateRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTaskSuccessRate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定项目的应用部署成功率
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectSuccessRate(showProjectSuccessRateRequest?: ShowProjectSuccessRateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/metrics/success-rate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let startDate;
            
            let endDate;

            if (showProjectSuccessRateRequest !== null && showProjectSuccessRateRequest !== undefined) {
                if (showProjectSuccessRateRequest instanceof ShowProjectSuccessRateRequest) {
                    projectId = showProjectSuccessRateRequest.projectId;
                    startDate = showProjectSuccessRateRequest.startDate;
                    endDate = showProjectSuccessRateRequest.endDate;
                } else {
                    projectId = showProjectSuccessRateRequest['project_id'];
                    startDate = showProjectSuccessRateRequest['start_date'];
                    endDate = showProjectSuccessRateRequest['end_date'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showProjectSuccessRate.');
            }
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling showProjectSuccessRate.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling showProjectSuccessRate.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CodeArtsDeployClient {
    return new CodeArtsDeployClient(client);
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