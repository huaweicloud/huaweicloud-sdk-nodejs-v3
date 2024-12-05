import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BandwidthPolicyDto } from './model/BandwidthPolicyDto';
import { BatchUpdateTasksReq } from './model/BatchUpdateTasksReq';
import { BatchUpdateTasksRequest } from './model/BatchUpdateTasksRequest';
import { BatchUpdateTasksResponse } from './model/BatchUpdateTasksResponse';
import { CheckPrefixReq } from './model/CheckPrefixReq';
import { CheckPrefixRequest } from './model/CheckPrefixRequest';
import { CheckPrefixResponse } from './model/CheckPrefixResponse';
import { CheckedKey } from './model/CheckedKey';
import { CreateSyncEventsRequest } from './model/CreateSyncEventsRequest';
import { CreateSyncEventsResponse } from './model/CreateSyncEventsResponse';
import { CreateSyncTaskReq } from './model/CreateSyncTaskReq';
import { CreateSyncTaskRequest } from './model/CreateSyncTaskRequest';
import { CreateSyncTaskResponse } from './model/CreateSyncTaskResponse';
import { CreateTaskGroupReq } from './model/CreateTaskGroupReq';
import { CreateTaskGroupRequest } from './model/CreateTaskGroupRequest';
import { CreateTaskGroupResponse } from './model/CreateTaskGroupResponse';
import { CreateTaskReq } from './model/CreateTaskReq';
import { CreateTaskRequest } from './model/CreateTaskRequest';
import { CreateTaskResponse } from './model/CreateTaskResponse';
import { DeleteSyncTaskRequest } from './model/DeleteSyncTaskRequest';
import { DeleteSyncTaskResponse } from './model/DeleteSyncTaskResponse';
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
import { ListBucketsReq } from './model/ListBucketsReq';
import { ListFile } from './model/ListFile';
import { ListSyncTaskStatisticRequest } from './model/ListSyncTaskStatisticRequest';
import { ListSyncTaskStatisticResponse } from './model/ListSyncTaskStatisticResponse';
import { ListSyncTasksRequest } from './model/ListSyncTasksRequest';
import { ListSyncTasksResponse } from './model/ListSyncTasksResponse';
import { ListTaskGroupRequest } from './model/ListTaskGroupRequest';
import { ListTaskGroupResponse } from './model/ListTaskGroupResponse';
import { ListTasksRequest } from './model/ListTasksRequest';
import { ListTasksResponse } from './model/ListTasksResponse';
import { PrefixKeyInfo } from './model/PrefixKeyInfo';
import { RegionInfo } from './model/RegionInfo';
import { RetryTaskGroupReq } from './model/RetryTaskGroupReq';
import { RetryTaskGroupRequest } from './model/RetryTaskGroupRequest';
import { RetryTaskGroupResponse } from './model/RetryTaskGroupResponse';
import { ShowApiInfoRequest } from './model/ShowApiInfoRequest';
import { ShowApiInfoResponse } from './model/ShowApiInfoResponse';
import { ShowBucketListRequest } from './model/ShowBucketListRequest';
import { ShowBucketListResponse } from './model/ShowBucketListResponse';
import { ShowBucketObjectsRequest } from './model/ShowBucketObjectsRequest';
import { ShowBucketObjectsResponse } from './model/ShowBucketObjectsResponse';
import { ShowBucketRecord } from './model/ShowBucketRecord';
import { ShowBucketRegionReq } from './model/ShowBucketRegionReq';
import { ShowBucketRegionRequest } from './model/ShowBucketRegionRequest';
import { ShowBucketRegionResponse } from './model/ShowBucketRegionResponse';
import { ShowBucketReq } from './model/ShowBucketReq';
import { ShowCdnInfoReq } from './model/ShowCdnInfoReq';
import { ShowCdnInfoRequest } from './model/ShowCdnInfoRequest';
import { ShowCdnInfoResponse } from './model/ShowCdnInfoResponse';
import { ShowCloudTypeRequest } from './model/ShowCloudTypeRequest';
import { ShowCloudTypeResponse } from './model/ShowCloudTypeResponse';
import { ShowRegionInfoRequest } from './model/ShowRegionInfoRequest';
import { ShowRegionInfoResp } from './model/ShowRegionInfoResp';
import { ShowRegionInfoResponse } from './model/ShowRegionInfoResponse';
import { ShowSyncTaskRequest } from './model/ShowSyncTaskRequest';
import { ShowSyncTaskResponse } from './model/ShowSyncTaskResponse';
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
import { StartSyncTaskReq } from './model/StartSyncTaskReq';
import { StartSyncTaskRequest } from './model/StartSyncTaskRequest';
import { StartSyncTaskResponse } from './model/StartSyncTaskResponse';
import { StartTaskGroupReq } from './model/StartTaskGroupReq';
import { StartTaskGroupRequest } from './model/StartTaskGroupRequest';
import { StartTaskGroupResponse } from './model/StartTaskGroupResponse';
import { StartTaskReq } from './model/StartTaskReq';
import { StartTaskRequest } from './model/StartTaskRequest';
import { StartTaskResponse } from './model/StartTaskResponse';
import { StatisticData } from './model/StatisticData';
import { StatisticTypeData } from './model/StatisticTypeData';
import { StopSyncTaskRequest } from './model/StopSyncTaskRequest';
import { StopSyncTaskResponse } from './model/StopSyncTaskResponse';
import { StopTaskGroupRequest } from './model/StopTaskGroupRequest';
import { StopTaskGroupResponse } from './model/StopTaskGroupResponse';
import { StopTaskRequest } from './model/StopTaskRequest';
import { StopTaskResponse } from './model/StopTaskResponse';
import { SyncObjectReq } from './model/SyncObjectReq';
import { SyncTaskInfo } from './model/SyncTaskInfo';
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
            let client = new ClientBuilder<OmsClient>(newClient);
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
     * 批量更新迁移任务，可指定单个迁移任务组下所有的迁移任务或通过迁移任务ID来执行。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新任务
     * @param {BatchUpdateTasksReq} batchUpdateTasksRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateTasks(batchUpdateTasksRequest?: BatchUpdateTasksRequest): Promise<BatchUpdateTasksResponse> {
        const options = ParamCreater().batchUpdateTasks(batchUpdateTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检查前缀是否在源端桶中存在
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查前缀是否在源端桶中存在
     * @param {CheckPrefixReq} checkPrefixRequestBody 检查前缀请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkPrefix(checkPrefixRequest?: CheckPrefixRequest): Promise<CheckPrefixResponse> {
        const options = ParamCreater().checkPrefix(checkPrefixRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 源端有对象需要进行同步时，调用该接口创建一个同步事件，系统将根据同步事件中包含的对象名称进行同步(目前只支持华北-北京四、华东-上海一地区)。
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
     * 创建同步任务，创建成功后，任务会被自动启动，不需要额外调用启动任务命令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建同步任务
     * @param {CreateSyncTaskReq} createSyncTaskRequestBody 创建同步任务请求body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSyncTask(createSyncTaskRequest?: CreateSyncTaskRequest): Promise<CreateSyncTaskResponse> {
        const options = ParamCreater().createSyncTask(createSyncTaskRequest);

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
     * 调用该接口删除同步任务。
     * 正在同步的任务不允许删除，如果删除会返回失败；若要删除，请先行暂停任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除同步任务
     * @param {string} syncTaskId 同步任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSyncTask(deleteSyncTaskRequest?: DeleteSyncTaskRequest): Promise<DeleteSyncTaskResponse> {
        const options = ParamCreater().deleteSyncTask(deleteSyncTaskRequest);

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
     * 删除指定的迁移任务组.
     * 创建任务中、监控中、暂停中状态的任务不允许删除，如果删除会返回失败；若要删除，请先行暂停任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定id的迁移任务组
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
     * 查询指定ID同步任务的接收同步请求对象数、同步成功对象数、同步失败对象数、同步跳过对象数、同步成功对象容量统计数据(目前只支持华北-北京四、华东-上海一地区)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定ID的同步任务统计数据
     * @param {string} syncTaskId 同步任务ID。
     * @param {'REQUEST' | 'SUCCESS' | 'FAILURE' | 'SKIP' | 'SIZE'} dataType 统计数据类型： 多类型查询用‘,’分割； REQUEST：接收同步请求对象数 SUCCESS：同步成功对象数 FAILURE：同步失败对象数 SKIP：同步跳过对象数 SIZE：同步成功对象容量(Byte)
     * @param {string} startTime 查询开始时间
     * @param {string} endTime 查询开始时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSyncTaskStatistic(listSyncTaskStatisticRequest?: ListSyncTaskStatisticRequest): Promise<ListSyncTaskStatisticResponse> {
        const options = ParamCreater().listSyncTaskStatistic(listSyncTaskStatisticRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户名下所有同步任务信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询同步任务列表
     * @param {number} [limit] 查询返回同步任务列表当前页面的数量，默认查询10条。 最多返回100条迁移任务信息。
     * @param {number} [offset] 起始的任务序号，默认为0。 取值大于等于0，取值为0时从第一条开始查询。
     * @param {string} [status] 同步任务状态（无该参数时代表查询所有状态的任务）： SYNCHRONIZING：同步中 STOPPED：已停止
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSyncTasks(listSyncTasksRequest?: ListSyncTasksRequest): Promise<ListSyncTasksResponse> {
        const options = ParamCreater().listSyncTasks(listSyncTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户账户下的任务组信息
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
     * 当迁移任务组处于迁移失败状态时，调用该接口重启指定id的迁移任务组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对已经失败的指定id迁移任务组进行重启
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
     * 查询桶列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桶列表
     * @param {ListBucketsReq} showBucketListRequestBody 查询桶列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBucketList(showBucketListRequest?: ShowBucketListRequest): Promise<ShowBucketListResponse> {
        const options = ParamCreater().showBucketList(showBucketListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询桶对象列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桶对象列表
     * @param {ShowBucketReq} showBucketObjectsRequestBody 查询桶请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBucketObjects(showBucketObjectsRequest?: ShowBucketObjectsRequest): Promise<ShowBucketObjectsResponse> {
        const options = ParamCreater().showBucketObjects(showBucketObjectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询桶对应的region
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询桶对应的region
     * @param {ShowBucketRegionReq} showBucketRegionRequestBody 查询桶region请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBucketRegion(showBucketRegionRequest?: ShowBucketRegionRequest): Promise<ShowBucketRegionResponse> {
        const options = ParamCreater().showBucketRegion(showBucketRegionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查桶对应的CDN信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查桶对应的CDN信息
     * @param {ShowCdnInfoReq} showCdnInfoRequestBody 查询CDN信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCdnInfo(showCdnInfoRequest?: ShowCdnInfoRequest): Promise<ShowCdnInfoResponse> {
        const options = ParamCreater().showCdnInfo(showCdnInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有支持的云厂商
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有支持的云厂商
     * @param {string} type 连接端类型源端(src)，目的端(dst)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCloudType(showCloudTypeRequest?: ShowCloudTypeRequest): Promise<ShowCloudTypeResponse> {
        const options = ParamCreater().showCloudType(showCloudTypeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云厂商支持的reigon
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询云厂商支持的reigon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRegionInfo(showRegionInfoRequest?: ShowRegionInfoRequest): Promise<ShowRegionInfoResponse> {
        const options = ParamCreater().showRegionInfo();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定ID的同步任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定ID的同步任务详情
     * @param {string} syncTaskId 同步任务ID。
     * @param {string} queryTime 查询同步任务详情的时间（毫秒），依据该值返回所在月份的统计数据。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSyncTask(showSyncTaskRequest?: ShowSyncTaskRequest): Promise<ShowSyncTaskResponse> {
        const options = ParamCreater().showSyncTask(showSyncTaskRequest);

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
     * 获取指定id的taskgroup信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定id的taskgroup信息
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
     * 同步任务停止后，调用该接口以启动同步任务(目前只支持华北-北京四、华东-上海一地区)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动同步任务
     * @param {string} syncTaskId 同步任务ID。
     * @param {StartSyncTaskReq} startSyncTaskRequestBody 启动同步任务的body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startSyncTask(startSyncTaskRequest?: StartSyncTaskRequest): Promise<StartSyncTaskResponse> {
        const options = ParamCreater().startSyncTask(startSyncTaskRequest);

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
     * 当迁移任务组处于暂停状态时，调用该接口启动指定id的迁移任务组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复指定id的迁移任务组
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
     * 当同步任务处于同步中时，调用该接口停止任务(目前只支持华北-北京四、华东-上海一地区)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 暂停同步任务
     * @param {string} syncTaskId 同步任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopSyncTask(stopSyncTaskRequest?: StopSyncTaskRequest): Promise<StopSyncTaskResponse> {
        const options = ParamCreater().stopSyncTask(stopSyncTaskRequest);

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
     * 当迁移任务组处于创建任务中或监控中时，调用该接口暂停指定迁移任务组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 暂停指定id的迁移任务组
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
     * 当迁移任务组未执行完成时，修改迁移任务组的流量控制策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定id的迁移任务组的流控策略
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
    public listApiVersions(listApiVersionsRequest?: ListApiVersionsRequest): Promise<ListApiVersionsResponse> {
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
         * 批量更新迁移任务，可指定单个迁移任务组下所有的迁移任务或通过迁移任务ID来执行。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateTasks(batchUpdateTasksRequest?: BatchUpdateTasksRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/tasks/batch-update",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdateTasksRequest !== null && batchUpdateTasksRequest !== undefined) {
                if (batchUpdateTasksRequest instanceof BatchUpdateTasksRequest) {
                    body = batchUpdateTasksRequest.body
                } else {
                    body = batchUpdateTasksRequest['body'];
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
         * 检查前缀是否在源端桶中存在
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkPrefix(checkPrefixRequest?: CheckPrefixRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/objectstorage/buckets/prefix",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (checkPrefixRequest !== null && checkPrefixRequest !== undefined) {
                if (checkPrefixRequest instanceof CheckPrefixRequest) {
                    body = checkPrefixRequest.body
                } else {
                    body = checkPrefixRequest['body'];
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
         * 源端有对象需要进行同步时，调用该接口创建一个同步事件，系统将根据同步事件中包含的对象名称进行同步(目前只支持华北-北京四、华东-上海一地区)。
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

            let body: any;
            
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
         * 创建同步任务，创建成功后，任务会被自动启动，不需要额外调用启动任务命令。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSyncTask(createSyncTaskRequest?: CreateSyncTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/sync-tasks",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSyncTaskRequest !== null && createSyncTaskRequest !== undefined) {
                if (createSyncTaskRequest instanceof CreateSyncTaskRequest) {
                    body = createSyncTaskRequest.body
                } else {
                    body = createSyncTaskRequest['body'];
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

            let body: any;

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

            let body: any;

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
         * 调用该接口删除同步任务。
         * 正在同步的任务不允许删除，如果删除会返回失败；若要删除，请先行暂停任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSyncTask(deleteSyncTaskRequest?: DeleteSyncTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/sync-tasks/{sync_task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let syncTaskId;

            if (deleteSyncTaskRequest !== null && deleteSyncTaskRequest !== undefined) {
                if (deleteSyncTaskRequest instanceof DeleteSyncTaskRequest) {
                    syncTaskId = deleteSyncTaskRequest.syncTaskId;
                } else {
                    syncTaskId = deleteSyncTaskRequest['sync_task_id'];
                }
            }

        
            if (syncTaskId === null || syncTaskId === undefined) {
            throw new RequiredError('syncTaskId','Required parameter syncTaskId was null or undefined when calling deleteSyncTask.');
            }

            options.pathParams = { 'sync_task_id': syncTaskId, };
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
                headers: {}
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
                headers: {}
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
         * 查询指定ID同步任务的接收同步请求对象数、同步成功对象数、同步失败对象数、同步跳过对象数、同步成功对象容量统计数据(目前只支持华北-北京四、华东-上海一地区)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSyncTaskStatistic(listSyncTaskStatisticRequest?: ListSyncTaskStatisticRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/sync-tasks/{sync_task_id}/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let syncTaskId;
            
            let dataType;
            
            let startTime;
            
            let endTime;

            if (listSyncTaskStatisticRequest !== null && listSyncTaskStatisticRequest !== undefined) {
                if (listSyncTaskStatisticRequest instanceof ListSyncTaskStatisticRequest) {
                    syncTaskId = listSyncTaskStatisticRequest.syncTaskId;
                    dataType = listSyncTaskStatisticRequest.dataType;
                    startTime = listSyncTaskStatisticRequest.startTime;
                    endTime = listSyncTaskStatisticRequest.endTime;
                } else {
                    syncTaskId = listSyncTaskStatisticRequest['sync_task_id'];
                    dataType = listSyncTaskStatisticRequest['data_type'];
                    startTime = listSyncTaskStatisticRequest['start_time'];
                    endTime = listSyncTaskStatisticRequest['end_time'];
                }
            }

        
            if (syncTaskId === null || syncTaskId === undefined) {
            throw new RequiredError('syncTaskId','Required parameter syncTaskId was null or undefined when calling listSyncTaskStatistic.');
            }
            if (dataType === null || dataType === undefined) {
                throw new RequiredError('dataType','Required parameter dataType was null or undefined when calling listSyncTaskStatistic.');
            }
            if (dataType !== null && dataType !== undefined) {
                localVarQueryParameter['data_type'] = dataType;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listSyncTaskStatistic.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listSyncTaskStatistic.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'sync_task_id': syncTaskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户名下所有同步任务信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSyncTasks(listSyncTasksRequest?: ListSyncTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/sync-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let status;

            if (listSyncTasksRequest !== null && listSyncTasksRequest !== undefined) {
                if (listSyncTasksRequest instanceof ListSyncTasksRequest) {
                    limit = listSyncTasksRequest.limit;
                    offset = listSyncTasksRequest.offset;
                    status = listSyncTasksRequest.status;
                } else {
                    limit = listSyncTasksRequest['limit'];
                    offset = listSyncTasksRequest['offset'];
                    status = listSyncTasksRequest['status'];
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
         * 查询用户账户下的任务组信息
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
                headers: {}
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
                headers: {}
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
         * 当迁移任务组处于迁移失败状态时，调用该接口重启指定id的迁移任务组。
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

            let body: any;
            
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
         * 查询桶列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBucketList(showBucketListRequest?: ShowBucketListRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/objectstorage/buckets",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showBucketListRequest !== null && showBucketListRequest !== undefined) {
                if (showBucketListRequest instanceof ShowBucketListRequest) {
                    body = showBucketListRequest.body
                } else {
                    body = showBucketListRequest['body'];
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
         * 查询桶对象列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBucketObjects(showBucketObjectsRequest?: ShowBucketObjectsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/objectstorage/buckets/objects",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showBucketObjectsRequest !== null && showBucketObjectsRequest !== undefined) {
                if (showBucketObjectsRequest instanceof ShowBucketObjectsRequest) {
                    body = showBucketObjectsRequest.body
                } else {
                    body = showBucketObjectsRequest['body'];
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
         * 查询桶对应的region
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBucketRegion(showBucketRegionRequest?: ShowBucketRegionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/objectstorage/buckets/regions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showBucketRegionRequest !== null && showBucketRegionRequest !== undefined) {
                if (showBucketRegionRequest instanceof ShowBucketRegionRequest) {
                    body = showBucketRegionRequest.body
                } else {
                    body = showBucketRegionRequest['body'];
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
         * 查桶对应的CDN信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCdnInfo(showCdnInfoRequest?: ShowCdnInfoRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/objectstorage/buckets/cdn-info",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showCdnInfoRequest !== null && showCdnInfoRequest !== undefined) {
                if (showCdnInfoRequest instanceof ShowCdnInfoRequest) {
                    body = showCdnInfoRequest.body
                } else {
                    body = showCdnInfoRequest['body'];
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
         * 查询所有支持的云厂商
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCloudType(showCloudTypeRequest?: ShowCloudTypeRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/objectstorage/cloud-type",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;

            if (showCloudTypeRequest !== null && showCloudTypeRequest !== undefined) {
                if (showCloudTypeRequest instanceof ShowCloudTypeRequest) {
                    type = showCloudTypeRequest.type;
                } else {
                    type = showCloudTypeRequest['type'];
                }
            }

        
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showCloudType.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云厂商支持的reigon
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRegionInfo() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/objectstorage/data-center",
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
         * 查询指定ID的同步任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSyncTask(showSyncTaskRequest?: ShowSyncTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/sync-tasks/{sync_task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let syncTaskId;
            
            let queryTime;

            if (showSyncTaskRequest !== null && showSyncTaskRequest !== undefined) {
                if (showSyncTaskRequest instanceof ShowSyncTaskRequest) {
                    syncTaskId = showSyncTaskRequest.syncTaskId;
                    queryTime = showSyncTaskRequest.queryTime;
                } else {
                    syncTaskId = showSyncTaskRequest['sync_task_id'];
                    queryTime = showSyncTaskRequest['query_time'];
                }
            }

        
            if (syncTaskId === null || syncTaskId === undefined) {
            throw new RequiredError('syncTaskId','Required parameter syncTaskId was null or undefined when calling showSyncTask.');
            }
            if (queryTime === null || queryTime === undefined) {
                throw new RequiredError('queryTime','Required parameter queryTime was null or undefined when calling showSyncTask.');
            }
            if (queryTime !== null && queryTime !== undefined) {
                localVarQueryParameter['query_time'] = queryTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'sync_task_id': syncTaskId, };
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
                headers: {}
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
         * 获取指定id的taskgroup信息
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
                headers: {}
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
         * 同步任务停止后，调用该接口以启动同步任务(目前只支持华北-北京四、华东-上海一地区)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startSyncTask(startSyncTaskRequest?: StartSyncTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/sync-tasks/{sync_task_id}/start",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let syncTaskId;

            if (startSyncTaskRequest !== null && startSyncTaskRequest !== undefined) {
                if (startSyncTaskRequest instanceof StartSyncTaskRequest) {
                    syncTaskId = startSyncTaskRequest.syncTaskId;
                    body = startSyncTaskRequest.body
                } else {
                    syncTaskId = startSyncTaskRequest['sync_task_id'];
                    body = startSyncTaskRequest['body'];
                }
            }

        
            if (syncTaskId === null || syncTaskId === undefined) {
            throw new RequiredError('syncTaskId','Required parameter syncTaskId was null or undefined when calling startSyncTask.');
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

            let body: any;
            
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
         * 当迁移任务组处于暂停状态时，调用该接口启动指定id的迁移任务组。
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

            let body: any;
            
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
         * 当同步任务处于同步中时，调用该接口停止任务(目前只支持华北-北京四、华东-上海一地区)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopSyncTask(stopSyncTaskRequest?: StopSyncTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/sync-tasks/{sync_task_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let syncTaskId;

            if (stopSyncTaskRequest !== null && stopSyncTaskRequest !== undefined) {
                if (stopSyncTaskRequest instanceof StopSyncTaskRequest) {
                    syncTaskId = stopSyncTaskRequest.syncTaskId;
                } else {
                    syncTaskId = stopSyncTaskRequest['sync_task_id'];
                }
            }

        
            if (syncTaskId === null || syncTaskId === undefined) {
            throw new RequiredError('syncTaskId','Required parameter syncTaskId was null or undefined when calling stopSyncTask.');
            }

            options.pathParams = { 'sync_task_id': syncTaskId, };
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
                headers: {}
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
                headers: {}
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

            let body: any;
            
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

            let body: any;
            
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
                headers: {}
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
                headers: {}
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