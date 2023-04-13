import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BandwidthPolicyDto } from './model/BandwidthPolicyDto';
import { CreateSyncEventsRequest } from './model/CreateSyncEventsRequest';
import { CreateSyncEventsResponse } from './model/CreateSyncEventsResponse';
import { CreateTaskGroupReq } from './model/CreateTaskGroupReq';
import { CreateTaskGroupRequest } from './model/CreateTaskGroupRequest';
import { CreateTaskGroupResponse } from './model/CreateTaskGroupResponse';
import { CreateTaskReq } from './model/CreateTaskReq';
import { CreateTaskRequest } from './model/CreateTaskRequest';
import { CreateTaskResponse } from './model/CreateTaskResponse';
import { DeleteTaskGroupRequest } from './model/DeleteTaskGroupRequest';
import { DeleteTaskGroupResponse } from './model/DeleteTaskGroupResponse';
import { DeleteTaskRequest } from './model/DeleteTaskRequest';
import { DeleteTaskResponse } from './model/DeleteTaskResponse';
import { DstNodeReq } from './model/DstNodeReq';
import { DstNodeResp } from './model/DstNodeResp';
import { ErrorReasonResp } from './model/ErrorReasonResp';
import { FailedObjectRecordDto } from './model/FailedObjectRecordDto';
import { Link } from './model/Link';
import { ListApiVersionsRequest } from './model/ListApiVersionsRequest';
import { ListApiVersionsResponse } from './model/ListApiVersionsResponse';
import { ListFile } from './model/ListFile';
import { ListTaskGroupRequest } from './model/ListTaskGroupRequest';
import { ListTaskGroupResponse } from './model/ListTaskGroupResponse';
import { ListTasksRequest } from './model/ListTasksRequest';
import { ListTasksResponse } from './model/ListTasksResponse';
import { RetryTaskGroupReq } from './model/RetryTaskGroupReq';
import { RetryTaskGroupRequest } from './model/RetryTaskGroupRequest';
import { RetryTaskGroupResponse } from './model/RetryTaskGroupResponse';
import { ShowApiInfoRequest } from './model/ShowApiInfoRequest';
import { ShowApiInfoResponse } from './model/ShowApiInfoResponse';
import { ShowTaskGroupRequest } from './model/ShowTaskGroupRequest';
import { ShowTaskGroupResponse } from './model/ShowTaskGroupResponse';
import { ShowTaskRequest } from './model/ShowTaskRequest';
import { ShowTaskResponse } from './model/ShowTaskResponse';
import { SmnConfig } from './model/SmnConfig';
import { SmnInfo } from './model/SmnInfo';
import { SourceCdnReq } from './model/SourceCdnReq';
import { SourceCdnResp } from './model/SourceCdnResp';
import { SrcNodeReq } from './model/SrcNodeReq';
import { SrcNodeResp } from './model/SrcNodeResp';
import { StartTaskGroupReq } from './model/StartTaskGroupReq';
import { StartTaskGroupRequest } from './model/StartTaskGroupRequest';
import { StartTaskGroupResponse } from './model/StartTaskGroupResponse';
import { StartTaskReq } from './model/StartTaskReq';
import { StartTaskRequest } from './model/StartTaskRequest';
import { StartTaskResponse } from './model/StartTaskResponse';
import { StopTaskGroupRequest } from './model/StopTaskGroupRequest';
import { StopTaskGroupResponse } from './model/StopTaskGroupResponse';
import { StopTaskRequest } from './model/StopTaskRequest';
import { StopTaskResponse } from './model/StopTaskResponse';
import { SyncObjectReq } from './model/SyncObjectReq';
import { TaskGroupDstNode } from './model/TaskGroupDstNode';
import { TaskGroupDstNodeResp } from './model/TaskGroupDstNodeResp';
import { TaskGroupResp } from './model/TaskGroupResp';
import { TaskGroupSrcNode } from './model/TaskGroupSrcNode';
import { TaskGroupSrcNodeResp } from './model/TaskGroupSrcNodeResp';
import { TaskResp } from './model/TaskResp';
import { UpdateBandwidthPolicyReq } from './model/UpdateBandwidthPolicyReq';
import { UpdateBandwidthPolicyRequest } from './model/UpdateBandwidthPolicyRequest';
import { UpdateBandwidthPolicyResponse } from './model/UpdateBandwidthPolicyResponse';
import { UpdateTaskGroupRequest } from './model/UpdateTaskGroupRequest';
import { UpdateTaskGroupResponse } from './model/UpdateTaskGroupResponse';
import { Version } from './model/Version';

export class OmsClient {
    public static newBuilder(): ClientBuilder<OmsClient> {
            return new ClientBuilder<OmsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 源端有对象需要进行同步时，调用该接口创建一个同步事件，系统将根据同步事件中包含的对象名称进行同步。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建同步事件
     * @param {string} syncTaskId 同步任务ID
     * @param {SyncObjectReq} createSyncEventsRequestBody 请求体，同步事件参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSyncEvents(createSyncEventsRequest?: CreateSyncEventsRequest): Promise<CreateSyncEventsResponse> {
        const options = ParamCreater().createSyncEvents(createSyncEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建迁移任务，创建成功后，任务会被自动启动，不需要额外调用启动任务命令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建迁移任务
     * @param {CreateTaskReq} createTaskRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTask(createTaskRequest?: CreateTaskRequest): Promise<CreateTaskResponse> {
        const options = ParamCreater().createTask(createTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用该接口删除迁移任务。
     * 正在运行的任务不允许删除，如果删除会返回失败；若要删除，请先行暂停任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除迁移任务
     * @param {string} taskId 迁移任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTask(deleteTaskRequest?: DeleteTaskRequest): Promise<DeleteTaskResponse> {
        const options = ParamCreater().deleteTask(deleteTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户账户下的所有任务信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询迁移任务列表
     * @param {string} [groupId] 迁移任务组group_id
     * @param {number} [limit] 查询返回迁移任务列表当前页面的数量，默认查询10条。 最多返回100条迁移任务信息。
     * @param {number} [offset] 起始的任务序号，默认为0。 取值大于等于0，取值为0时从第一条开始查询。
     * @param {number} [status] 迁移任务状态（无该参数时代表查询所有状态的任务）： 1：等待调度 2：正在执行 3：停止 4：失败 5：成功 7: 暂停中
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTasks(listTasksRequest?: ListTasksRequest): Promise<ListTasksResponse> {
        const options = ParamCreater().listTasks(listTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定ID的任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定ID的任务详情
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTask(showTaskRequest?: ShowTaskRequest): Promise<ShowTaskResponse> {
        const options = ParamCreater().showTask(showTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 迁移任务暂停或失败后，调用该接口以启动任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动迁移任务
     * @param {string} taskId 迁移任务ID。
     * @param {StartTaskReq} startTaskRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startTask(startTaskRequest?: StartTaskRequest): Promise<StartTaskResponse> {
        const options = ParamCreater().startTask(startTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当迁移任务处于迁移中时，调用该接口停止任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 暂停迁移任务
     * @param {string} taskId 迁移任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopTask(stopTaskRequest?: StopTaskRequest): Promise<StopTaskResponse> {
        const options = ParamCreater().stopTask(stopTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当迁移任务未执行完成时，修改迁移任务的流量控制策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新任务带宽策略
     * @param {string} taskId 任务ID。
     * @param {UpdateBandwidthPolicyReq} updateBandwidthPolicyRequestBody 流量控制策略。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBandwidthPolicy(updateBandwidthPolicyRequest?: UpdateBandwidthPolicyRequest): Promise<UpdateBandwidthPolicyResponse> {
        const options = ParamCreater().updateBandwidthPolicy(updateBandwidthPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建迁移任务组，创建成功后，迁移任务组会自动创建迁移任务，不需要额外调用启动任务命令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建迁移任务组
     * @param {CreateTaskGroupReq} createTaskGroupRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTaskGroup(createTaskGroupRequest?: CreateTaskGroupRequest): Promise<CreateTaskGroupResponse> {
        const options = ParamCreater().createTaskGroup(createTaskGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的迁移任务组.
     * 创建任务中、监控中、暂停中状态的任务不允许删除，如果删除会返回失败；若要删除，请先行暂停任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定ID的迁移任务组
     * @param {string} groupId 任务组id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTaskGroup(deleteTaskGroupRequest?: DeleteTaskGroupRequest): Promise<DeleteTaskGroupResponse> {
        const options = ParamCreater().deleteTaskGroup(deleteTaskGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户账户下的任务组信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询迁移任务组列表
     * @param {number} [limit] 查询返回迁移组任务列表当前页面的数量，默认查询10条。 最多返回100条迁移任务信息。
     * @param {number} [offset] 起始的任务序号，默认为0。 取值大于等于0，取值为0时从第一条开始查询。
     * @param {number} [status] 迁移任务组状态（无该参数时代表查询所有状态的任务） 0 – 等待中 1 – 执行中/创建中 2 – 监控任务执行 3 – 暂停 4 – 创建任务失败 5 – 迁移失败 6 – 迁移完成 7 – 暂停中 8 – 等待删除中 9 – 删除
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTaskGroup(listTaskGroupRequest?: ListTaskGroupRequest): Promise<ListTaskGroupResponse> {
        const options = ParamCreater().listTaskGroup(listTaskGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当迁移任务组处于迁移失败状态时，调用该接口重启指定ID的迁移任务组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对已经失败的指定ID迁移任务组进行重启
     * @param {string} groupId 任务组id
     * @param {RetryTaskGroupReq} retryTaskGroupRequestBody 重试任务请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retryTaskGroup(retryTaskGroupRequest?: RetryTaskGroupRequest): Promise<RetryTaskGroupResponse> {
        const options = ParamCreater().retryTaskGroup(retryTaskGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定ID的taskgroup信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定ID的taskgroup信息
     * @param {string} groupId 任务组id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTaskGroup(showTaskGroupRequest?: ShowTaskGroupRequest): Promise<ShowTaskGroupResponse> {
        const options = ParamCreater().showTaskGroup(showTaskGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当迁移任务组处于暂停状态时，调用该接口启动指定ID的迁移任务组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复指定ID的迁移任务组
     * @param {string} groupId 任务组id
     * @param {StartTaskGroupReq} startTaskGroupRequestBody 启动任务组请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startTaskGroup(startTaskGroupRequest?: StartTaskGroupRequest): Promise<StartTaskGroupResponse> {
        const options = ParamCreater().startTaskGroup(startTaskGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当迁移任务组处于创建任务中或监控中时，调用该接口暂停指定迁移任务组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 暂停指定ID的迁移任务组
     * @param {string} groupId 任务组id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopTaskGroup(stopTaskGroupRequest?: StopTaskGroupRequest): Promise<StopTaskGroupResponse> {
        const options = ParamCreater().stopTaskGroup(stopTaskGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当迁移任务组未执行完成时，修改迁移任务组的流量控制策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定ID的迁移任务组的流控策略
     * @param {string} groupId 任务组id
     * @param {UpdateBandwidthPolicyReq} [updateTaskGroupRequestBody] 配置流量控制策略
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTaskGroup(updateTaskGroupRequest?: UpdateTaskGroupRequest): Promise<UpdateTaskGroupResponse> {
        const options = ParamCreater().updateTaskGroup(updateTaskGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询对象存储迁移服务的API版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本信息列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersions(): Promise<ListApiVersionsResponse> {
        const options = ParamCreater().listApiVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询对象存储迁移服务指定API版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定API版本信息
     * @param {string} version 版本信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApiInfo(showApiInfoRequest?: ShowApiInfoRequest): Promise<ShowApiInfoResponse> {
        const options = ParamCreater().showApiInfo(showApiInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 源端有对象需要进行同步时，调用该接口创建一个同步事件，系统将根据同步事件中包含的对象名称进行同步。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSyncEvents(createSyncEventsRequest?: CreateSyncEventsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/sync-tasks/{sync_task_id}/events",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let syncTaskId;

            if (createSyncEventsRequest !== null && createSyncEventsRequest !== undefined) {
                if (createSyncEventsRequest instanceof CreateSyncEventsRequest) {
                    syncTaskId = createSyncEventsRequest.syncTaskId;
                    body = createSyncEventsRequest.body
                } else {
                    syncTaskId = createSyncEventsRequest['sync_task_id'];
                    body = createSyncEventsRequest['body'];
                }
            }

        
            if (syncTaskId === null || syncTaskId === undefined) {
            throw new RequiredError('syncTaskId','Required parameter syncTaskId was null or undefined when calling createSyncEvents.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'sync_task_id': syncTaskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建迁移任务，创建成功后，任务会被自动启动，不需要额外调用启动任务命令。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTask(createTaskRequest?: CreateTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createTaskRequest !== null && createTaskRequest !== undefined) {
                if (createTaskRequest instanceof CreateTaskRequest) {
                    body = createTaskRequest.body
                } else {
                    body = createTaskRequest['body'];
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
         * 调用该接口删除迁移任务。
         * 正在运行的任务不允许删除，如果删除会返回失败；若要删除，请先行暂停任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTask(deleteTaskRequest?: DeleteTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (deleteTaskRequest !== null && deleteTaskRequest !== undefined) {
                if (deleteTaskRequest instanceof DeleteTaskRequest) {
                    taskId = deleteTaskRequest.taskId;
                } else {
                    taskId = deleteTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户账户下的所有任务信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTasks(listTasksRequest?: ListTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let limit;
            
            let offset;
            
            let status;

            if (listTasksRequest !== null && listTasksRequest !== undefined) {
                if (listTasksRequest instanceof ListTasksRequest) {
                    groupId = listTasksRequest.groupId;
                    limit = listTasksRequest.limit;
                    offset = listTasksRequest.offset;
                    status = listTasksRequest.status;
                } else {
                    groupId = listTasksRequest['group_id'];
                    limit = listTasksRequest['limit'];
                    offset = listTasksRequest['offset'];
                    status = listTasksRequest['status'];
                }
            }

        
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定ID的任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTask(showTaskRequest?: ShowTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showTaskRequest !== null && showTaskRequest !== undefined) {
                if (showTaskRequest instanceof ShowTaskRequest) {
                    taskId = showTaskRequest.taskId;
                } else {
                    taskId = showTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 迁移任务暂停或失败后，调用该接口以启动任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startTask(startTaskRequest?: StartTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/tasks/{task_id}/start",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let taskId;

            if (startTaskRequest !== null && startTaskRequest !== undefined) {
                if (startTaskRequest instanceof StartTaskRequest) {
                    taskId = startTaskRequest.taskId;
                    body = startTaskRequest.body
                } else {
                    taskId = startTaskRequest['task_id'];
                    body = startTaskRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling startTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当迁移任务处于迁移中时，调用该接口停止任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopTask(stopTaskRequest?: StopTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/tasks/{task_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (stopTaskRequest !== null && stopTaskRequest !== undefined) {
                if (stopTaskRequest instanceof StopTaskRequest) {
                    taskId = stopTaskRequest.taskId;
                } else {
                    taskId = stopTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling stopTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当迁移任务未执行完成时，修改迁移任务的流量控制策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBandwidthPolicy(updateBandwidthPolicyRequest?: UpdateBandwidthPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/tasks/{task_id}/bandwidth-policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let taskId;

            if (updateBandwidthPolicyRequest !== null && updateBandwidthPolicyRequest !== undefined) {
                if (updateBandwidthPolicyRequest instanceof UpdateBandwidthPolicyRequest) {
                    taskId = updateBandwidthPolicyRequest.taskId;
                    body = updateBandwidthPolicyRequest.body
                } else {
                    taskId = updateBandwidthPolicyRequest['task_id'];
                    body = updateBandwidthPolicyRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateBandwidthPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建迁移任务组，创建成功后，迁移任务组会自动创建迁移任务，不需要额外调用启动任务命令。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTaskGroup(createTaskGroupRequest?: CreateTaskGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/taskgroups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createTaskGroupRequest !== null && createTaskGroupRequest !== undefined) {
                if (createTaskGroupRequest instanceof CreateTaskGroupRequest) {
                    body = createTaskGroupRequest.body
                } else {
                    body = createTaskGroupRequest['body'];
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
         * 删除指定的迁移任务组.
         * 创建任务中、监控中、暂停中状态的任务不允许删除，如果删除会返回失败；若要删除，请先行暂停任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTaskGroup(deleteTaskGroupRequest?: DeleteTaskGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/taskgroups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (deleteTaskGroupRequest !== null && deleteTaskGroupRequest !== undefined) {
                if (deleteTaskGroupRequest instanceof DeleteTaskGroupRequest) {
                    groupId = deleteTaskGroupRequest.groupId;
                } else {
                    groupId = deleteTaskGroupRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteTaskGroup.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户账户下的任务组信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTaskGroup(listTaskGroupRequest?: ListTaskGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/taskgroups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let status;

            if (listTaskGroupRequest !== null && listTaskGroupRequest !== undefined) {
                if (listTaskGroupRequest instanceof ListTaskGroupRequest) {
                    limit = listTaskGroupRequest.limit;
                    offset = listTaskGroupRequest.offset;
                    status = listTaskGroupRequest.status;
                } else {
                    limit = listTaskGroupRequest['limit'];
                    offset = listTaskGroupRequest['offset'];
                    status = listTaskGroupRequest['status'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当迁移任务组处于迁移失败状态时，调用该接口重启指定ID的迁移任务组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retryTaskGroup(retryTaskGroupRequest?: RetryTaskGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/taskgroups/{group_id}/retry",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let groupId;

            if (retryTaskGroupRequest !== null && retryTaskGroupRequest !== undefined) {
                if (retryTaskGroupRequest instanceof RetryTaskGroupRequest) {
                    groupId = retryTaskGroupRequest.groupId;
                    body = retryTaskGroupRequest.body
                } else {
                    groupId = retryTaskGroupRequest['group_id'];
                    body = retryTaskGroupRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling retryTaskGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定ID的taskgroup信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTaskGroup(showTaskGroupRequest?: ShowTaskGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/taskgroups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (showTaskGroupRequest !== null && showTaskGroupRequest !== undefined) {
                if (showTaskGroupRequest instanceof ShowTaskGroupRequest) {
                    groupId = showTaskGroupRequest.groupId;
                } else {
                    groupId = showTaskGroupRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showTaskGroup.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当迁移任务组处于暂停状态时，调用该接口启动指定ID的迁移任务组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startTaskGroup(startTaskGroupRequest?: StartTaskGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/taskgroups/{group_id}/start",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let groupId;

            if (startTaskGroupRequest !== null && startTaskGroupRequest !== undefined) {
                if (startTaskGroupRequest instanceof StartTaskGroupRequest) {
                    groupId = startTaskGroupRequest.groupId;
                    body = startTaskGroupRequest.body
                } else {
                    groupId = startTaskGroupRequest['group_id'];
                    body = startTaskGroupRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling startTaskGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当迁移任务组处于创建任务中或监控中时，调用该接口暂停指定迁移任务组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopTaskGroup(stopTaskGroupRequest?: StopTaskGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/taskgroups/{group_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (stopTaskGroupRequest !== null && stopTaskGroupRequest !== undefined) {
                if (stopTaskGroupRequest instanceof StopTaskGroupRequest) {
                    groupId = stopTaskGroupRequest.groupId;
                } else {
                    groupId = stopTaskGroupRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling stopTaskGroup.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当迁移任务组未执行完成时，修改迁移任务组的流量控制策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTaskGroup(updateTaskGroupRequest?: UpdateTaskGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/taskgroups/{group_id}/update",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let groupId;

            if (updateTaskGroupRequest !== null && updateTaskGroupRequest !== undefined) {
                if (updateTaskGroupRequest instanceof UpdateTaskGroupRequest) {
                    groupId = updateTaskGroupRequest.groupId;
                    body = updateTaskGroupRequest.body
                } else {
                    groupId = updateTaskGroupRequest['group_id'];
                    body = updateTaskGroupRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateTaskGroup.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询对象存储迁移服务的API版本信息。
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
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询对象存储迁移服务指定API版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApiInfo(showApiInfoRequest?: ShowApiInfoRequest) {
            const options = {
                method: "GET",
                url: "/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let version;

            if (showApiInfoRequest !== null && showApiInfoRequest !== undefined) {
                if (showApiInfoRequest instanceof ShowApiInfoRequest) {
                    version = showApiInfoRequest.version;
                } else {
                    version = showApiInfoRequest['version'];
                }
            }

        
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling showApiInfo.');
            }

            options.pathParams = { 'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): OmsClient {
    return new OmsClient(client);
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