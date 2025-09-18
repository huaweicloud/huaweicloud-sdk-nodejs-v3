import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AppBaseInfo } from './model/AppBaseInfo';
import { AppBaseResponse } from './model/AppBaseResponse';
import { AppBatchDeleteRequest } from './model/AppBatchDeleteRequest';
import { AppComponentDao } from './model/AppComponentDao';
import { AppDeleteResult } from './model/AppDeleteResult';
import { AppDetailInfo } from './model/AppDetailInfo';
import { AppExecutionInfo } from './model/AppExecutionInfo';
import { AppGroupsEntity } from './model/AppGroupsEntity';
import { AppPermission } from './model/AppPermission';
import { ApplicationPermissionVO } from './model/ApplicationPermissionVO';
import { BatchDeleteAppRequest } from './model/BatchDeleteAppRequest';
import { BatchDeleteAppResponse } from './model/BatchDeleteAppResponse';
import { BatchDeleteHostsRequest } from './model/BatchDeleteHostsRequest';
import { BatchDeleteHostsResponse } from './model/BatchDeleteHostsResponse';
import { BatchUpdateApplicationPermissionsRequest } from './model/BatchUpdateApplicationPermissionsRequest';
import { BatchUpdateApplicationPermissionsRequestBody } from './model/BatchUpdateApplicationPermissionsRequestBody';
import { BatchUpdateApplicationPermissionsResponse } from './model/BatchUpdateApplicationPermissionsResponse';
import { BatchUpdatePermissionLevelRequest } from './model/BatchUpdatePermissionLevelRequest';
import { BatchUpdatePermissionLevelRequestBody } from './model/BatchUpdatePermissionLevelRequestBody';
import { BatchUpdatePermissionLevelResponse } from './model/BatchUpdatePermissionLevelResponse';
import { CancelInfo } from './model/CancelInfo';
import { CheckCanCreateRequest } from './model/CheckCanCreateRequest';
import { CheckCanCreateResponse } from './model/CheckCanCreateResponse';
import { CheckCanCreateResponseBodyResult } from './model/CheckCanCreateResponseBodyResult';
import { CheckDeployStatusRequest } from './model/CheckDeployStatusRequest';
import { CheckDeployStatusResponse } from './model/CheckDeployStatusResponse';
import { CheckIsDuplicateAppNameRequest } from './model/CheckIsDuplicateAppNameRequest';
import { CheckIsDuplicateAppNameResponse } from './model/CheckIsDuplicateAppNameResponse';
import { CheckWhetherHostGroupCanBeCreatedRequest } from './model/CheckWhetherHostGroupCanBeCreatedRequest';
import { CheckWhetherHostGroupCanBeCreatedResponse } from './model/CheckWhetherHostGroupCanBeCreatedResponse';
import { ConfigInfo } from './model/ConfigInfo';
import { ConfigInfoDO } from './model/ConfigInfoDO';
import { CopyApplicationRequest } from './model/CopyApplicationRequest';
import { CopyApplicationResponse } from './model/CopyApplicationResponse';
import { CopyHostsToTargetRequest } from './model/CopyHostsToTargetRequest';
import { CopyHostsToTargetResponse } from './model/CopyHostsToTargetResponse';
import { CreateAppGroupsRequest } from './model/CreateAppGroupsRequest';
import { CreateAppGroupsRequestBody } from './model/CreateAppGroupsRequestBody';
import { CreateAppGroupsResponse } from './model/CreateAppGroupsResponse';
import { CreateAppRequest } from './model/CreateAppRequest';
import { CreateAppRequestBody } from './model/CreateAppRequestBody';
import { CreateAppResponse } from './model/CreateAppResponse';
import { CreateDeployTaskByTemplateRequest } from './model/CreateDeployTaskByTemplateRequest';
import { CreateDeployTaskByTemplateResponse } from './model/CreateDeployTaskByTemplateResponse';
import { CreateDeploymentGroupRequest } from './model/CreateDeploymentGroupRequest';
import { CreateDeploymentGroupResponse } from './model/CreateDeploymentGroupResponse';
import { CreateDeploymentHostRequest } from './model/CreateDeploymentHostRequest';
import { CreateDeploymentHostResponse } from './model/CreateDeploymentHostResponse';
import { CreateEnvironmentRequest } from './model/CreateEnvironmentRequest';
import { CreateEnvironmentResponse } from './model/CreateEnvironmentResponse';
import { CreateHostClusterRequest } from './model/CreateHostClusterRequest';
import { CreateHostClusterRequestBody } from './model/CreateHostClusterRequestBody';
import { CreateHostClusterResponse } from './model/CreateHostClusterResponse';
import { CreateHostRequest } from './model/CreateHostRequest';
import { CreateHostRequestBody } from './model/CreateHostRequestBody';
import { CreateHostResponse } from './model/CreateHostResponse';
import { DeleteAppGroupsRequest } from './model/DeleteAppGroupsRequest';
import { DeleteAppGroupsResponse } from './model/DeleteAppGroupsResponse';
import { DeleteApplicationRequest } from './model/DeleteApplicationRequest';
import { DeleteApplicationResponse } from './model/DeleteApplicationResponse';
import { DeleteDeployTaskRequest } from './model/DeleteDeployTaskRequest';
import { DeleteDeployTaskResponse } from './model/DeleteDeployTaskResponse';
import { DeleteDeploymentGroupRequest } from './model/DeleteDeploymentGroupRequest';
import { DeleteDeploymentGroupResponse } from './model/DeleteDeploymentGroupResponse';
import { DeleteDeploymentHostRequest } from './model/DeleteDeploymentHostRequest';
import { DeleteDeploymentHostResponse } from './model/DeleteDeploymentHostResponse';
import { DeleteEnvironmentRequest } from './model/DeleteEnvironmentRequest';
import { DeleteEnvironmentResponse } from './model/DeleteEnvironmentResponse';
import { DeleteHostClusterRequest } from './model/DeleteHostClusterRequest';
import { DeleteHostClusterResponse } from './model/DeleteHostClusterResponse';
import { DeleteHostFromEnvironmentRequest } from './model/DeleteHostFromEnvironmentRequest';
import { DeleteHostFromEnvironmentResponse } from './model/DeleteHostFromEnvironmentResponse';
import { DeleteHostRequest } from './model/DeleteHostRequest';
import { DeleteHostResponse } from './model/DeleteHostResponse';
import { DeployV2OperationsDO } from './model/DeployV2OperationsDO';
import { DeploymentGroup } from './model/DeploymentGroup';
import { DeploymentGroupDetail } from './model/DeploymentGroupDetail';
import { DeploymentGroupUpdateRequest } from './model/DeploymentGroupUpdateRequest';
import { DeploymentHost } from './model/DeploymentHost';
import { DeploymentHostAuthorizationBody } from './model/DeploymentHostAuthorizationBody';
import { DeploymentHostDetail } from './model/DeploymentHostDetail';
import { DeploymentHostInfo } from './model/DeploymentHostInfo';
import { DeploymentHostListEntity } from './model/DeploymentHostListEntity';
import { DeploymentHostRequest } from './model/DeploymentHostRequest';
import { DeploymentHostRequestExternal } from './model/DeploymentHostRequestExternal';
import { DeploymentHostsCopyRequest } from './model/DeploymentHostsCopyRequest';
import { DeploymentUpdateHost } from './model/DeploymentUpdateHost';
import { DevUcClusterPermission } from './model/DevUcClusterPermission';
import { DevUcEnvironmentPermission } from './model/DevUcEnvironmentPermission';
import { DynamicConfigInfo } from './model/DynamicConfigInfo';
import { EnvExecutionBody } from './model/EnvExecutionBody';
import { EnvironmentBaseInfo } from './model/EnvironmentBaseInfo';
import { EnvironmentDetail } from './model/EnvironmentDetail';
import { EnvironmentHostInfo } from './model/EnvironmentHostInfo';
import { EnvironmentHostPermission } from './model/EnvironmentHostPermission';
import { EnvironmentInfo } from './model/EnvironmentInfo';
import { EnvironmentPermissionDetail } from './model/EnvironmentPermissionDetail';
import { EnvironmentPermissionV2Body } from './model/EnvironmentPermissionV2Body';
import { EnvironmentRequest } from './model/EnvironmentRequest';
import { EnvironmentRequestBody } from './model/EnvironmentRequestBody';
import { ExecuteRecordV2Body } from './model/ExecuteRecordV2Body';
import { HostAuthorizationBody } from './model/HostAuthorizationBody';
import { HostClusterInfo } from './model/HostClusterInfo';
import { HostClusterInfoDetail } from './model/HostClusterInfoDetail';
import { HostClusterRequest } from './model/HostClusterRequest';
import { HostInfo } from './model/HostInfo';
import { HostInfoDetail } from './model/HostInfoDetail';
import { ImportHostToEnvironmentRequest } from './model/ImportHostToEnvironmentRequest';
import { ImportHostToEnvironmentRequestBody } from './model/ImportHostToEnvironmentRequestBody';
import { ImportHostToEnvironmentResponse } from './model/ImportHostToEnvironmentResponse';
import { KeyValueDO } from './model/KeyValueDO';
import { ListAllAppRequest } from './model/ListAllAppRequest';
import { ListAllAppRequestBody } from './model/ListAllAppRequestBody';
import { ListAllAppResponse } from './model/ListAllAppResponse';
import { ListAppGroupsRequest } from './model/ListAppGroupsRequest';
import { ListAppGroupsResponse } from './model/ListAppGroupsResponse';
import { ListApplicationPermissionsRequest } from './model/ListApplicationPermissionsRequest';
import { ListApplicationPermissionsResponse } from './model/ListApplicationPermissionsResponse';
import { ListAssociateEnvironmentsInfosRequest } from './model/ListAssociateEnvironmentsInfosRequest';
import { ListAssociateEnvironmentsInfosResponse } from './model/ListAssociateEnvironmentsInfosResponse';
import { ListDeployTaskHistoryByDateRequest } from './model/ListDeployTaskHistoryByDateRequest';
import { ListDeployTaskHistoryByDateResponse } from './model/ListDeployTaskHistoryByDateResponse';
import { ListDeployTasksRequest } from './model/ListDeployTasksRequest';
import { ListDeployTasksResponse } from './model/ListDeployTasksResponse';
import { ListEnvironmentHostsRequest } from './model/ListEnvironmentHostsRequest';
import { ListEnvironmentHostsResponse } from './model/ListEnvironmentHostsResponse';
import { ListEnvironmentPermissionsRequest } from './model/ListEnvironmentPermissionsRequest';
import { ListEnvironmentPermissionsResponse } from './model/ListEnvironmentPermissionsResponse';
import { ListEnvironmentsRequest } from './model/ListEnvironmentsRequest';
import { ListEnvironmentsResponse } from './model/ListEnvironmentsResponse';
import { ListHostClustersRequest } from './model/ListHostClustersRequest';
import { ListHostClustersResponse } from './model/ListHostClustersResponse';
import { ListHostGroupBaseInfosRequest } from './model/ListHostGroupBaseInfosRequest';
import { ListHostGroupBaseInfosResponse } from './model/ListHostGroupBaseInfosResponse';
import { ListHostGroupPermissionsRequest } from './model/ListHostGroupPermissionsRequest';
import { ListHostGroupPermissionsResponse } from './model/ListHostGroupPermissionsResponse';
import { ListHostGroupsRequest } from './model/ListHostGroupsRequest';
import { ListHostGroupsResponse } from './model/ListHostGroupsResponse';
import { ListHostsRequest } from './model/ListHostsRequest';
import { ListHostsResponse } from './model/ListHostsResponse';
import { ListNewHostsRequest } from './model/ListNewHostsRequest';
import { ListNewHostsResponse } from './model/ListNewHostsResponse';
import { ListTaskSuccessRateRequest } from './model/ListTaskSuccessRateRequest';
import { ListTaskSuccessRateResponse } from './model/ListTaskSuccessRateResponse';
import { MoveAppGroupsRequest } from './model/MoveAppGroupsRequest';
import { MoveAppGroupsRequestBody } from './model/MoveAppGroupsRequestBody';
import { MoveAppGroupsResponse } from './model/MoveAppGroupsResponse';
import { MoveAppToGroupRequest } from './model/MoveAppToGroupRequest';
import { MoveAppToGroupRequestBody } from './model/MoveAppToGroupRequestBody';
import { MoveAppToGroupResponse } from './model/MoveAppToGroupResponse';
import { MoveAppToGroupResult } from './model/MoveAppToGroupResult';
import { ParamTypeLimits } from './model/ParamTypeLimits';
import { PermissionClusterDetail } from './model/PermissionClusterDetail';
import { PermissionGroupDetail } from './model/PermissionGroupDetail';
import { PermissionHostDetail } from './model/PermissionHostDetail';
import { PermissionHostDetailNew } from './model/PermissionHostDetailNew';
import { PermissionUpdateV2Body } from './model/PermissionUpdateV2Body';
import { ShowAppDetailByIdRequest } from './model/ShowAppDetailByIdRequest';
import { ShowAppDetailByIdResponse } from './model/ShowAppDetailByIdResponse';
import { ShowDeployTaskDetailRequest } from './model/ShowDeployTaskDetailRequest';
import { ShowDeployTaskDetailResponse } from './model/ShowDeployTaskDetailResponse';
import { ShowDeploymentGroupDetailRequest } from './model/ShowDeploymentGroupDetailRequest';
import { ShowDeploymentGroupDetailResponse } from './model/ShowDeploymentGroupDetailResponse';
import { ShowDeploymentHostDetailRequest } from './model/ShowDeploymentHostDetailRequest';
import { ShowDeploymentHostDetailResponse } from './model/ShowDeploymentHostDetailResponse';
import { ShowEnvironmentDetailRequest } from './model/ShowEnvironmentDetailRequest';
import { ShowEnvironmentDetailResponse } from './model/ShowEnvironmentDetailResponse';
import { ShowExecutionParamsRequest } from './model/ShowExecutionParamsRequest';
import { ShowExecutionParamsResponse } from './model/ShowExecutionParamsResponse';
import { ShowHostClusterDetailRequest } from './model/ShowHostClusterDetailRequest';
import { ShowHostClusterDetailResponse } from './model/ShowHostClusterDetailResponse';
import { ShowHostDetailRequest } from './model/ShowHostDetailRequest';
import { ShowHostDetailResponse } from './model/ShowHostDetailResponse';
import { ShowProjectSuccessRateRequest } from './model/ShowProjectSuccessRateRequest';
import { ShowProjectSuccessRateResponse } from './model/ShowProjectSuccessRateResponse';
import { StartDeployTaskRequest } from './model/StartDeployTaskRequest';
import { StartDeployTaskResponse } from './model/StartDeployTaskResponse';
import { StateInfo } from './model/StateInfo';
import { Step } from './model/Step';
import { StepInfo } from './model/StepInfo';
import { StopDeployTaskRequest } from './model/StopDeployTaskRequest';
import { StopDeployTaskResponse } from './model/StopDeployTaskResponse';
import { TaskBaseBody } from './model/TaskBaseBody';
import { TaskBaseResponseBody } from './model/TaskBaseResponseBody';
import { TaskInfo } from './model/TaskInfo';
import { TaskSuccessRate } from './model/TaskSuccessRate';
import { TaskTriggerVO } from './model/TaskTriggerVO';
import { TaskV2Info } from './model/TaskV2Info';
import { TaskV2RequestBody } from './model/TaskV2RequestBody';
import { TasksSuccessRateQuery } from './model/TasksSuccessRateQuery';
import { TemplateTaskRequestBody } from './model/TemplateTaskRequestBody';
import { UpdateAppDisableStatusRequest } from './model/UpdateAppDisableStatusRequest';
import { UpdateAppDisableStatusRequestBody } from './model/UpdateAppDisableStatusRequestBody';
import { UpdateAppDisableStatusResponse } from './model/UpdateAppDisableStatusResponse';
import { UpdateAppGroupsRequest } from './model/UpdateAppGroupsRequest';
import { UpdateAppGroupsRequestBody } from './model/UpdateAppGroupsRequestBody';
import { UpdateAppGroupsResponse } from './model/UpdateAppGroupsResponse';
import { UpdateAppInfoRequest } from './model/UpdateAppInfoRequest';
import { UpdateAppInfoRequestBody } from './model/UpdateAppInfoRequestBody';
import { UpdateAppInfoResponse } from './model/UpdateAppInfoResponse';
import { UpdateDeploymentGroupRequest } from './model/UpdateDeploymentGroupRequest';
import { UpdateDeploymentGroupResponse } from './model/UpdateDeploymentGroupResponse';
import { UpdateDeploymentHostRequest } from './model/UpdateDeploymentHostRequest';
import { UpdateDeploymentHostResponse } from './model/UpdateDeploymentHostResponse';
import { UpdateEnvironmentPermissionRequest } from './model/UpdateEnvironmentPermissionRequest';
import { UpdateEnvironmentPermissionResponse } from './model/UpdateEnvironmentPermissionResponse';
import { UpdateEnvironmentRequest } from './model/UpdateEnvironmentRequest';
import { UpdateEnvironmentResponse } from './model/UpdateEnvironmentResponse';
import { UpdateHostClusterRequest } from './model/UpdateHostClusterRequest';
import { UpdateHostClusterResponse } from './model/UpdateHostClusterResponse';
import { UpdateHostGroupPermissionsRequest } from './model/UpdateHostGroupPermissionsRequest';
import { UpdateHostGroupPermissionsResponse } from './model/UpdateHostGroupPermissionsResponse';
import { UpdateHostInfoRequest } from './model/UpdateHostInfoRequest';
import { UpdateHostInfoResponse } from './model/UpdateHostInfoResponse';
import { UpdateTaskV2RequestBody } from './model/UpdateTaskV2RequestBody';
import { UserInfo } from './model/UserInfo';

export class CodeArtsDeployClient {
    public static newBuilder(): ClientBuilder<CodeArtsDeployClient> {
            let client = new ClientBuilder<CodeArtsDeployClient>(newClient);
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
     * 创建分组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建分组
     * @param {string} projectId 项目Id
     * @param {CreateAppGroupsRequestBody} createAppGroupsRequestBody 创建分组请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAppGroups(createAppGroupsRequest?: CreateAppGroupsRequest): Promise<CreateAppGroupsResponse> {
        const options = ParamCreater().createAppGroups(createAppGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除分组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除分组
     * @param {string} projectId 项目Id
     * @param {string} groupId 分组Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAppGroups(deleteAppGroupsRequest?: DeleteAppGroupsRequest): Promise<DeleteAppGroupsResponse> {
        const options = ParamCreater().deleteAppGroups(deleteAppGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分组列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分组列表
     * @param {string} projectId 项目Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppGroups(listAppGroupsRequest?: ListAppGroupsRequest): Promise<ListAppGroupsResponse> {
        const options = ParamCreater().listAppGroups(listAppGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 往上或者往下移动单个分组,用来在页面上调整分组位置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移动分组
     * @param {string} projectId 项目Id
     * @param {MoveAppGroupsRequestBody} moveAppGroupsRequestBody 移动分组请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public moveAppGroups(moveAppGroupsRequest?: MoveAppGroupsRequest): Promise<MoveAppGroupsResponse> {
        const options = ParamCreater().moveAppGroups(moveAppGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将应用移动至指定分组（支持批量）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移动应用至指定分组
     * @param {string} projectId 项目Id
     * @param {MoveAppToGroupRequestBody} moveAppToGroupRequestBody 移动应用至指定分组请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public moveAppToGroup(moveAppToGroupRequest?: MoveAppToGroupRequest): Promise<MoveAppToGroupResponse> {
        const options = ParamCreater().moveAppToGroup(moveAppToGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改分组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改分组
     * @param {string} projectId 项目Id
     * @param {string} groupId 分组Id
     * @param {UpdateAppGroupsRequestBody} updateAppGroupsRequestBody 修改分组请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAppGroups(updateAppGroupsRequest?: UpdateAppGroupsRequest): Promise<UpdateAppGroupsResponse> {
        const options = ParamCreater().updateAppGroups(updateAppGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改应用权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改应用权限
     * @param {BatchUpdateApplicationPermissionsRequestBody} batchUpdateApplicationPermissionsRequestBody 批量修改应用权限请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateApplicationPermissions(batchUpdateApplicationPermissionsRequest?: BatchUpdateApplicationPermissionsRequest): Promise<BatchUpdateApplicationPermissionsResponse> {
        const options = ParamCreater().batchUpdateApplicationPermissions(batchUpdateApplicationPermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量配置应用下鉴权级别为项目级或实例级。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量配置应用下鉴权级别
     * @param {BatchUpdatePermissionLevelRequestBody} batchUpdatePermissionLevelRequestBody 批量配置应用下鉴权级别请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdatePermissionLevel(batchUpdatePermissionLevelRequest?: BatchUpdatePermissionLevelRequest): Promise<BatchUpdatePermissionLevelResponse> {
        const options = ParamCreater().batchUpdatePermissionLevel(batchUpdatePermissionLevelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前用户是否有项目下创建应用权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前用户是否有项目下创建应用权限
     * @param {string} projectId 项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkCanCreate(checkCanCreateRequest?: CheckCanCreateRequest): Promise<CheckCanCreateResponse> {
        const options = ParamCreater().checkCanCreate(checkCanCreateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用实例级/项目级权限矩阵，传递app_id时，查询应用实例级权限矩阵；未传app_id，传递project_id时，查询应用项目级权限矩阵。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用实例级/项目级权限矩阵
     * @param {string} [appId] 应用id
     * @param {string} [projectId] 项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplicationPermissions(listApplicationPermissionsRequest?: ListApplicationPermissionsRequest): Promise<ListApplicationPermissionsResponse> {
        const options = ParamCreater().listApplicationPermissions(listApplicationPermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除项目下应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除项目下应用
     * @param {AppBatchDeleteRequest} batchDeleteAppRequestBody 批量删除应用请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteApp(batchDeleteAppRequest?: BatchDeleteAppRequest): Promise<BatchDeleteAppResponse> {
        const options = ParamCreater().batchDeleteApp(batchDeleteAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目下是否存在同名应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目下是否存在同名应用
     * @param {string} name 应用名称
     * @param {string} projectId 项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkIsDuplicateAppName(checkIsDuplicateAppNameRequest?: CheckIsDuplicateAppNameRequest): Promise<CheckIsDuplicateAppNameResponse> {
        const options = ParamCreater().checkIsDuplicateAppName(checkIsDuplicateAppNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 复制应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制应用
     * @param {string} appId 应用id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyApplication(copyApplicationRequest?: CopyApplicationRequest): Promise<CopyApplicationResponse> {
        const options = ParamCreater().copyApplication(copyApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新建应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建应用
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {CreateAppRequestBody} createAppRequestBody Body参数
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
     * 通过模板新建应用。该接口于2024年09月30日后不再维护，推荐使用新版CreateApp接口。
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
     * 根据应用id删除应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用
     * @param {string} appId 应用id
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
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
     * 根据部署任务id删除应用。该接口于2024年09月30日后不再维护，推荐使用新版DeleteApplication接口。
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
     * 查询项目下应用列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取应用列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {ListAllAppRequestBody} listAllAppRequestBody Body参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllApp(listAllAppRequest?: ListAllAppRequest): Promise<ListAllAppResponse> {
        const options = ParamCreater().listAllApp(listAllAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据开始时间和结束时间查询项目下指定应用的历史部署记录列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据开始时间和结束时间查询项目下指定应用的历史部署记录列表
     * @param {string} projectId 项目id
     * @param {string} id 任务id
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
     * 查询项目下应用列表。该接口于2024年09月30日后不再维护，推荐使用新版ListAllApp接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取应用列表
     * @param {string} projectId 项目id
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
     * 根据应用id获取应用详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取应用详情
     * @param {string} appId 应用id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppDetailById(showAppDetailByIdRequest?: ShowAppDetailByIdRequest): Promise<ShowAppDetailByIdResponse> {
        const options = ParamCreater().showAppDetailById(showAppDetailByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据部署任务id获取应用详情。该接口于2024年09月30日后不再维护，推荐使用新版ShowAppDetailById接口。
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
     * 查询部署记录的执行参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询部署记录的执行参数
     * @param {string} taskId 任务id
     * @param {string} [recordId] 执行记录id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showExecutionParams(showExecutionParamsRequest?: ShowExecutionParamsRequest): Promise<ShowExecutionParamsResponse> {
        const options = ParamCreater().showExecutionParams(showExecutionParamsRequest);

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
     * 禁用/取消禁用应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用/取消禁用应用
     * @param {string} appId 应用id
     * @param {UpdateAppDisableStatusRequestBody} updateAppDisableStatusRequestBody 禁用参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAppDisableStatus(updateAppDisableStatusRequest?: UpdateAppDisableStatusRequest): Promise<UpdateAppDisableStatusResponse> {
        const options = ParamCreater().updateAppDisableStatus(updateAppDisableStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新应用
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {UpdateAppInfoRequestBody} updateAppInfoRequestBody 更新应用请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAppInfo(updateAppInfoRequest?: UpdateAppInfoRequest): Promise<UpdateAppInfoResponse> {
        const options = ParamCreater().updateAppInfo(updateAppInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取部署任务状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取部署任务状态
     * @param {string} taskId task_id
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {string} [recordId] record_id
     * @param {boolean} [stepState] 是否返回部署任务各步骤的状态， true返回， false不返回
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkDeployStatus(checkDeployStatusRequest?: CheckDeployStatusRequest): Promise<CheckDeployStatusResponse> {
        const options = ParamCreater().checkDeployStatus(checkDeployStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用下创建环境。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用下创建环境
     * @param {string} applicationId 应用id
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {EnvironmentRequestBody} createEnvironmentRequestBody Body参数
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
     * 删除应用下的环境。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用下的环境
     * @param {string} applicationId 应用id
     * @param {string} environmentId 环境id
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
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
     * 环境下删除主机。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 环境下删除主机
     * @param {string} applicationId 应用id
     * @param {string} environmentId 环境id
     * @param {string} hostId 主机id
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHostFromEnvironment(deleteHostFromEnvironmentRequest?: DeleteHostFromEnvironmentRequest): Promise<DeleteHostFromEnvironmentResponse> {
        const options = ParamCreater().deleteHostFromEnvironment(deleteHostFromEnvironmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 环境下导入主机。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 环境下导入主机
     * @param {string} applicationId 应用id
     * @param {string} environmentId 环境id
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {ImportHostToEnvironmentRequestBody} importHostToEnvironmentRequestBody Body参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importHostToEnvironment(importHostToEnvironmentRequest?: ImportHostToEnvironmentRequest): Promise<ImportHostToEnvironmentResponse> {
        const options = ParamCreater().importHostToEnvironment(importHostToEnvironmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询环境内的主机列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询环境内的主机列表
     * @param {string} applicationId 应用id
     * @param {string} environmentId 环境id
     * @param {string} [keyField] 主机名、ip关键字模糊搜索
     * @param {boolean} [asProxy] 是否为代理机,true为代理机
     * @param {number} [pageIndex] 分页页码
     * @param {number} [pageSize] 分页查询每页条数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnvironmentHosts(listEnvironmentHostsRequest?: ListEnvironmentHostsRequest): Promise<ListEnvironmentHostsResponse> {
        const options = ParamCreater().listEnvironmentHosts(listEnvironmentHostsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用下环境列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用下环境列表
     * @param {string} applicationId 应用id
     * @param {string} projectId 项目id
     * @param {number} [pageIndex] 分页页码， 表示从此页开始查询， page大于等于1
     * @param {number} [pageSize] 每页显示的条目数量，size小于等于100
     * @param {string} [name] 要查询的环境名称
     * @param {'NAME' | 'USER_NAME' | 'CREATED_TIME' | 'NICK_NAME'} [sortKey] 排序字段，支持按照环境名称|用户名称|创建时间|用户昵称排序
     * @param {'DESC' | 'ASC'} [sortDir] 排序顺序，DESC降序，ASC升序
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
     * 查询环境详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询环境详情
     * @param {string} applicationId 应用id
     * @param {string} environmentId 环境id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEnvironmentDetail(showEnvironmentDetailRequest?: ShowEnvironmentDetailRequest): Promise<ShowEnvironmentDetailResponse> {
        const options = ParamCreater().showEnvironmentDetail(showEnvironmentDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用下编辑环境。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用下编辑环境
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {string} applicationId 应用id
     * @param {string} environmentId 环境id
     * @param {EnvironmentRequest} updateEnvironmentRequestBody 更新环境请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEnvironment(updateEnvironmentRequest?: UpdateEnvironmentRequest): Promise<UpdateEnvironmentResponse> {
        const options = ParamCreater().updateEnvironment(updateEnvironmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询环境权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询环境权限
     * @param {string} applicationId 应用id
     * @param {string} environmentId 环境id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnvironmentPermissions(listEnvironmentPermissionsRequest?: ListEnvironmentPermissionsRequest): Promise<ListEnvironmentPermissionsResponse> {
        const options = ParamCreater().listEnvironmentPermissions(listEnvironmentPermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑环境权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑环境权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {string} applicationId 应用id
     * @param {string} environmentId 环境id
     * @param {EnvironmentPermissionV2Body} updateEnvironmentPermissionRequestBody 环境权限对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEnvironmentPermission(updateEnvironmentPermissionRequest?: UpdateEnvironmentPermissionRequest): Promise<UpdateEnvironmentPermissionResponse> {
        const options = ParamCreater().updateEnvironmentPermission(updateEnvironmentPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止部署任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止部署任务
     * @param {string} taskId task_id
     * @param {string} recordId record_id
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {string} emptyRequestBody EmptyRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopDeployTask(stopDeployTaskRequest?: StopDeployTaskRequest): Promise<StopDeployTaskResponse> {
        const options = ParamCreater().stopDeployTask(stopDeployTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除主机集群下的主机。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除主机集群下的主机
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {string} groupId 主机集群id
     * @param {DeploymentHostListEntity} batchDeleteHostsRequestBody 批量删除主机请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteHosts(batchDeleteHostsRequest?: BatchDeleteHostsRequest): Promise<BatchDeleteHostsResponse> {
        const options = ParamCreater().batchDeleteHosts(batchDeleteHostsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量复制主机至目标主机集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量复制主机至目标主机集群
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {string} groupId 源主机集群id
     * @param {DeploymentHostsCopyRequest} copyHostsToTargetRequestBody 复制主机请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyHostsToTarget(copyHostsToTargetRequest?: CopyHostsToTargetRequest): Promise<CopyHostsToTargetResponse> {
        const options = ParamCreater().copyHostsToTarget(copyHostsToTargetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定主机集群下新建主机。该接口于2024年09月30日后不再维护，推荐使用新版CreateHost接口。
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
     * 在指定主机集群下新建主机。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建主机
     * @param {string} groupId 主机集群id
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {CreateHostRequestBody} createHostRequestBody 创建主机请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHost(createHostRequest?: CreateHostRequest): Promise<CreateHostResponse> {
        const options = ParamCreater().createHost(createHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据主机id删除主机。该接口于2024年9月30日后不再维护。
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
     * 根据主机id删除主机集群下主机。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除主机集群下主机
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {string} groupId 主机集群id
     * @param {string} hostId 主机id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHost(deleteHostRequest?: DeleteHostRequest): Promise<DeleteHostResponse> {
        const options = ParamCreater().deleteHost(deleteHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据主机集群id查询指定主机集群下的主机列表。该接口于2024年09月30日后不再维护，推荐使用新版ListNewHosts接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机列表
     * @param {string} groupId 主机集群id
     * @param {boolean} [asProxy] 是否为代理机
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0
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
     * 根据主机集群id查询指定主机集群下的主机列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机列表
     * @param {string} groupId 项目id
     * @param {string} [keyField] 主机名模糊查询信息
     * @param {string} [environmentId] 环境id
     * @param {number} [pageIndex] 页码数
     * @param {number} [pageSize] 每页显示的条目数量，默认为10
     * @param {string} [sortKey] 排序字段：as_proxy|host_name|owner_name，不传使用默认排序
     * @param {'DESC' | 'ASC'} [sortDir] 排序方式：DESC、ASC，默认为DESC
     * @param {boolean} [asProxy] 是否为代理机
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNewHosts(listNewHostsRequest?: ListNewHostsRequest): Promise<ListNewHostsResponse> {
        const options = ParamCreater().listNewHosts(listNewHostsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据主机id查询主机详情。该接口于2024年09月30日后不再维护，推荐使用新版ShowHostDetail接口。
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
    public showHostDetail(showHostDetailRequest?: ShowHostDetailRequest): Promise<ShowHostDetailResponse> {
        const options = ParamCreater().showHostDetail(showHostDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据主机id修改主机信息。该接口于2024年9月30日后不再维护。
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
     * 根据主机id编辑主机集群下主机信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑主机集群下主机信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {string} groupId 主机集群id
     * @param {string} hostId 主机id
     * @param {DeploymentHostRequestExternal} updateHostInfoRequestBody 编辑主机请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHostInfo(updateHostInfoRequest?: UpdateHostInfoRequest): Promise<UpdateHostInfoResponse> {
        const options = ParamCreater().updateHostInfo(updateHostInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在项目下新建主机集群。该接口于2024年09月30日后不再维护，推荐使用新版CreateHostCluster接口。
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
     * 在项目下新建主机集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建主机集群
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {CreateHostClusterRequestBody} createHostClusterRequestBody 创建主机集群请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHostCluster(createHostClusterRequest?: CreateHostClusterRequest): Promise<CreateHostClusterResponse> {
        const options = ParamCreater().createHostCluster(createHostClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据主机集群id删除主机集群。该接口于2024年9月30日后不再维护。
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
     * 根据主机集群id删除主机集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除主机集群
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {string} groupId 主机集群id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHostCluster(deleteHostClusterRequest?: DeleteHostClusterRequest): Promise<DeleteHostClusterResponse> {
        const options = ParamCreater().deleteHostCluster(deleteHostClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主机集群关联环境信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机集群关联环境信息
     * @param {string} groupId 主机集群id
     * @param {number} [pageIndex] 页码
     * @param {number} [pageSize] 每页查询条数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAssociateEnvironmentsInfos(listAssociateEnvironmentsInfosRequest?: ListAssociateEnvironmentsInfosRequest): Promise<ListAssociateEnvironmentsInfosResponse> {
        const options = ParamCreater().listAssociateEnvironmentsInfos(listAssociateEnvironmentsInfosRequest);

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
     * @param {string} projectId 项目id
     * @param {string} [name] 主机集群模糊查询信息
     * @param {'windows' | 'linux'} [os] 操作系统：windows|linux
     * @param {number} [pageIndex] 页码数
     * @param {number} [pageSize] 每页显示的条目数量，默认为10
     * @param {string} [sortField] 排序字段：nick_name|name|owner_name|create_time，不传使用默认排序
     * @param {'DESC' | 'ASC'} [sortType] 排序方式：DESC、ASC，默认为DESC
     * @param {number} [isProxyMode] 是否为代理机
     * @param {string} [slaveClusterId] 自定义资源池id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostClusters(listHostClustersRequest?: ListHostClustersRequest): Promise<ListHostClustersResponse> {
        const options = ParamCreater().listHostClusters(listHostClustersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用下环境基本信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用下环境基本信息列表
     * @param {string} applicationId 应用id
     * @param {string} projectUuid 项目id
     * @param {'linux' | 'windows'} [os] 操作系统：windows|linux
     * @param {number} [pageIndex] 分页页码
     * @param {number} [pageSize] 分页查询每页条数
     * @param {string} [name] 按主机集群名称搜索关键字
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostGroupBaseInfos(listHostGroupBaseInfosRequest?: ListHostGroupBaseInfosRequest): Promise<ListHostGroupBaseInfosResponse> {
        const options = ParamCreater().listHostGroupBaseInfos(listHostGroupBaseInfosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按条件查询主机集群列表。该接口于2024年09月30日后不再维护，推荐使用新版ListHostClusters接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机集群列表
     * @param {string} projectId 项目id
     * @param {string} regionName 局点信息
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
     * 根据主机集群id查询主机集群详情。该接口于2024年09月30日后不再维护，推荐使用新版ShowHostClusterDetail接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机集群详情
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
     * 根据主机集群id查询主机集群详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机集群详情
     * @param {string} groupId 主机集群id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHostClusterDetail(showHostClusterDetailRequest?: ShowHostClusterDetailRequest): Promise<ShowHostClusterDetailResponse> {
        const options = ParamCreater().showHostClusterDetail(showHostClusterDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据主机集群id修改主机集群信息。该接口于2024年9月30日后不再维护。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改主机集群
     * @param {string} groupId 主机集群id
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
     * 编辑主机集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑主机集群
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {string} groupId 主机集群id
     * @param {HostClusterRequest} updateHostClusterRequestBody 编辑主机集群请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHostCluster(updateHostClusterRequest?: UpdateHostClusterRequest): Promise<UpdateHostClusterResponse> {
        const options = ParamCreater().updateHostCluster(updateHostClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 判断当前用户在项目下是否有权限创建主机集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 判断当前用户在项目下是否有权限创建主机集群
     * @param {string} projectId 项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkWhetherHostGroupCanBeCreated(checkWhetherHostGroupCanBeCreatedRequest?: CheckWhetherHostGroupCanBeCreatedRequest): Promise<CheckWhetherHostGroupCanBeCreatedResponse> {
        const options = ParamCreater().checkWhetherHostGroupCanBeCreated(checkWhetherHostGroupCanBeCreatedRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据主机集群id查询主机集群权限矩阵。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机集群权限矩阵
     * @param {string} groupId 主机集群id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostGroupPermissions(listHostGroupPermissionsRequest?: ListHostGroupPermissionsRequest): Promise<ListHostGroupPermissionsResponse> {
        const options = ParamCreater().listHostGroupPermissions(listHostGroupPermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据主机集群id修改主机集群权限矩阵。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改主机集群权限矩阵
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用：                         application/json;charset&#x3D;utf-8                         application/json
     * @param {string} groupId 主机集群id
     * @param {PermissionUpdateV2Body} updateHostGroupPermissionsRequestBody 更新主机集群权限请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHostGroupPermissions(updateHostGroupPermissionsRequest?: UpdateHostGroupPermissionsRequest): Promise<UpdateHostGroupPermissionsResponse> {
        const options = ParamCreater().updateHostGroupPermissions(updateHostGroupPermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定应用的应用部署成功率。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定应用的应用部署成功率
     * @param {string} projectId 项目id
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
     * 获取指定项目的应用部署成功率。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定项目的应用部署成功率
     * @param {string} projectId 项目id
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
         * 创建分组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAppGroups(createAppGroupsRequest?: CreateAppGroupsRequest) {
            const options = {
                method: "POST",
                url: "/v1/projects/{project_id}/applications/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createAppGroupsRequest !== null && createAppGroupsRequest !== undefined) {
                if (createAppGroupsRequest instanceof CreateAppGroupsRequest) {
                    projectId = createAppGroupsRequest.projectId;
                    body = createAppGroupsRequest.body
                } else {
                    projectId = createAppGroupsRequest['project_id'];
                    body = createAppGroupsRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createAppGroups.');
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
         * 删除分组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAppGroups(deleteAppGroupsRequest?: DeleteAppGroupsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/projects/{project_id}/applications/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let groupId;

            if (deleteAppGroupsRequest !== null && deleteAppGroupsRequest !== undefined) {
                if (deleteAppGroupsRequest instanceof DeleteAppGroupsRequest) {
                    projectId = deleteAppGroupsRequest.projectId;
                    groupId = deleteAppGroupsRequest.groupId;
                } else {
                    projectId = deleteAppGroupsRequest['project_id'];
                    groupId = deleteAppGroupsRequest['group_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteAppGroups.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteAppGroups.');
            }

            options.pathParams = { 'project_id': projectId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询分组列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppGroups(listAppGroupsRequest?: ListAppGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1/projects/{project_id}/applications/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (listAppGroupsRequest !== null && listAppGroupsRequest !== undefined) {
                if (listAppGroupsRequest instanceof ListAppGroupsRequest) {
                    projectId = listAppGroupsRequest.projectId;
                } else {
                    projectId = listAppGroupsRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listAppGroups.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 往上或者往下移动单个分组,用来在页面上调整分组位置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        moveAppGroups(moveAppGroupsRequest?: MoveAppGroupsRequest) {
            const options = {
                method: "PUT",
                url: "/v1/projects/{project_id}/applications/groups/swap",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (moveAppGroupsRequest !== null && moveAppGroupsRequest !== undefined) {
                if (moveAppGroupsRequest instanceof MoveAppGroupsRequest) {
                    projectId = moveAppGroupsRequest.projectId;
                    body = moveAppGroupsRequest.body
                } else {
                    projectId = moveAppGroupsRequest['project_id'];
                    body = moveAppGroupsRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling moveAppGroups.');
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
         * 将应用移动至指定分组（支持批量）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        moveAppToGroup(moveAppToGroupRequest?: MoveAppToGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1/projects/{project_id}/applications/groups/move",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (moveAppToGroupRequest !== null && moveAppToGroupRequest !== undefined) {
                if (moveAppToGroupRequest instanceof MoveAppToGroupRequest) {
                    projectId = moveAppToGroupRequest.projectId;
                    body = moveAppToGroupRequest.body
                } else {
                    projectId = moveAppToGroupRequest['project_id'];
                    body = moveAppToGroupRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling moveAppToGroup.');
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
         * 修改分组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAppGroups(updateAppGroupsRequest?: UpdateAppGroupsRequest) {
            const options = {
                method: "PUT",
                url: "/v1/projects/{project_id}/applications/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let groupId;

            if (updateAppGroupsRequest !== null && updateAppGroupsRequest !== undefined) {
                if (updateAppGroupsRequest instanceof UpdateAppGroupsRequest) {
                    projectId = updateAppGroupsRequest.projectId;
                    groupId = updateAppGroupsRequest.groupId;
                    body = updateAppGroupsRequest.body
                } else {
                    projectId = updateAppGroupsRequest['project_id'];
                    groupId = updateAppGroupsRequest['group_id'];
                    body = updateAppGroupsRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateAppGroups.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateAppGroups.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量修改应用权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateApplicationPermissions(batchUpdateApplicationPermissionsRequest?: BatchUpdateApplicationPermissionsRequest) {
            const options = {
                method: "PUT",
                url: "/v3/applications/permissions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdateApplicationPermissionsRequest !== null && batchUpdateApplicationPermissionsRequest !== undefined) {
                if (batchUpdateApplicationPermissionsRequest instanceof BatchUpdateApplicationPermissionsRequest) {
                    body = batchUpdateApplicationPermissionsRequest.body
                } else {
                    body = batchUpdateApplicationPermissionsRequest['body'];
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
         * 批量配置应用下鉴权级别为项目级或实例级。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdatePermissionLevel(batchUpdatePermissionLevelRequest?: BatchUpdatePermissionLevelRequest) {
            const options = {
                method: "PUT",
                url: "/v3/applications/permission-level",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdatePermissionLevelRequest !== null && batchUpdatePermissionLevelRequest !== undefined) {
                if (batchUpdatePermissionLevelRequest instanceof BatchUpdatePermissionLevelRequest) {
                    body = batchUpdatePermissionLevelRequest.body
                } else {
                    body = batchUpdatePermissionLevelRequest['body'];
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
         * 查询当前用户是否有项目下创建应用权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkCanCreate(checkCanCreateRequest?: CheckCanCreateRequest) {
            const options = {
                method: "GET",
                url: "/v1/applications/creatable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;

            if (checkCanCreateRequest !== null && checkCanCreateRequest !== undefined) {
                if (checkCanCreateRequest instanceof CheckCanCreateRequest) {
                    projectId = checkCanCreateRequest.projectId;
                } else {
                    projectId = checkCanCreateRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
                throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling checkCanCreate.');
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用实例级/项目级权限矩阵，传递app_id时，查询应用实例级权限矩阵；未传app_id，传递project_id时，查询应用项目级权限矩阵。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplicationPermissions(listApplicationPermissionsRequest?: ListApplicationPermissionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/applications/permissions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appId;
            
            let projectId;

            if (listApplicationPermissionsRequest !== null && listApplicationPermissionsRequest !== undefined) {
                if (listApplicationPermissionsRequest instanceof ListApplicationPermissionsRequest) {
                    appId = listApplicationPermissionsRequest.appId;
                    projectId = listApplicationPermissionsRequest.projectId;
                } else {
                    appId = listApplicationPermissionsRequest['app_id'];
                    projectId = listApplicationPermissionsRequest['project_id'];
                }
            }

        
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除项目下应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteApp(batchDeleteAppRequest?: BatchDeleteAppRequest) {
            const options = {
                method: "POST",
                url: "/v2/applications/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteAppRequest !== null && batchDeleteAppRequest !== undefined) {
                if (batchDeleteAppRequest instanceof BatchDeleteAppRequest) {
                    body = batchDeleteAppRequest.body
                } else {
                    body = batchDeleteAppRequest['body'];
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
         * 查询项目下是否存在同名应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkIsDuplicateAppName(checkIsDuplicateAppNameRequest?: CheckIsDuplicateAppNameRequest) {
            const options = {
                method: "GET",
                url: "/v1/applications/exist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let projectId;

            if (checkIsDuplicateAppNameRequest !== null && checkIsDuplicateAppNameRequest !== undefined) {
                if (checkIsDuplicateAppNameRequest instanceof CheckIsDuplicateAppNameRequest) {
                    name = checkIsDuplicateAppNameRequest.name;
                    projectId = checkIsDuplicateAppNameRequest.projectId;
                } else {
                    name = checkIsDuplicateAppNameRequest['name'];
                    projectId = checkIsDuplicateAppNameRequest['project_id'];
                }
            }

        
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling checkIsDuplicateAppName.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (projectId === null || projectId === undefined) {
                throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling checkIsDuplicateAppName.');
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 复制应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyApplication(copyApplicationRequest?: CopyApplicationRequest) {
            const options = {
                method: "POST",
                url: "/v1/applications/{app_id}/duplicate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;

            if (copyApplicationRequest !== null && copyApplicationRequest !== undefined) {
                if (copyApplicationRequest instanceof CopyApplicationRequest) {
                    appId = copyApplicationRequest.appId;
                } else {
                    appId = copyApplicationRequest['app_id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling copyApplication.');
            }

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新建应用。
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
            
            let contentType;

            if (createAppRequest !== null && createAppRequest !== undefined) {
                if (createAppRequest instanceof CreateAppRequest) {
                    contentType = createAppRequest.contentType;
                    body = createAppRequest.body
                } else {
                    contentType = createAppRequest['Content-Type'];
                    body = createAppRequest['body'];
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
         * 通过模板新建应用。该接口于2024年09月30日后不再维护，推荐使用新版CreateApp接口。
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
         * 根据应用id删除应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApplication(deleteApplicationRequest?: DeleteApplicationRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/applications/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let contentType;

            if (deleteApplicationRequest !== null && deleteApplicationRequest !== undefined) {
                if (deleteApplicationRequest instanceof DeleteApplicationRequest) {
                    appId = deleteApplicationRequest.appId;
                    contentType = deleteApplicationRequest.contentType;
                } else {
                    appId = deleteApplicationRequest['app_id'];
                    contentType = deleteApplicationRequest['Content-Type'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling deleteApplication.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据部署任务id删除应用。该接口于2024年09月30日后不再维护，推荐使用新版DeleteApplication接口。
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
         * 查询项目下应用列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllApp(listAllAppRequest?: ListAllAppRequest) {
            const options = {
                method: "POST",
                url: "/v1/applications/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (listAllAppRequest !== null && listAllAppRequest !== undefined) {
                if (listAllAppRequest instanceof ListAllAppRequest) {
                    contentType = listAllAppRequest.contentType;
                    body = listAllAppRequest.body
                } else {
                    contentType = listAllAppRequest['Content-Type'];
                    body = listAllAppRequest['body'];
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
         * 根据开始时间和结束时间查询项目下指定应用的历史部署记录列表。
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
         * 查询项目下应用列表。该接口于2024年09月30日后不再维护，推荐使用新版ListAllApp接口。
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
         * 根据应用id获取应用详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppDetailById(showAppDetailByIdRequest?: ShowAppDetailByIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/applications/{app_id}/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;

            if (showAppDetailByIdRequest !== null && showAppDetailByIdRequest !== undefined) {
                if (showAppDetailByIdRequest instanceof ShowAppDetailByIdRequest) {
                    appId = showAppDetailByIdRequest.appId;
                } else {
                    appId = showAppDetailByIdRequest['app_id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showAppDetailById.');
            }

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据部署任务id获取应用详情。该接口于2024年09月30日后不再维护，推荐使用新版ShowAppDetailById接口。
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
         * 查询部署记录的执行参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showExecutionParams(showExecutionParamsRequest?: ShowExecutionParamsRequest) {
            const options = {
                method: "GET",
                url: "/v2/history/tasks/{task_id}/params",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let recordId;

            if (showExecutionParamsRequest !== null && showExecutionParamsRequest !== undefined) {
                if (showExecutionParamsRequest instanceof ShowExecutionParamsRequest) {
                    taskId = showExecutionParamsRequest.taskId;
                    recordId = showExecutionParamsRequest.recordId;
                } else {
                    taskId = showExecutionParamsRequest['task_id'];
                    recordId = showExecutionParamsRequest['record_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showExecutionParams.');
            }
            if (recordId !== null && recordId !== undefined) {
                localVarQueryParameter['record_id'] = recordId;
            }

            options.queryParams = localVarQueryParameter;
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
         * 禁用/取消禁用应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAppDisableStatus(updateAppDisableStatusRequest?: UpdateAppDisableStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v1/applications/{app_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;

            if (updateAppDisableStatusRequest !== null && updateAppDisableStatusRequest !== undefined) {
                if (updateAppDisableStatusRequest instanceof UpdateAppDisableStatusRequest) {
                    appId = updateAppDisableStatusRequest.appId;
                    body = updateAppDisableStatusRequest.body
                } else {
                    appId = updateAppDisableStatusRequest['app_id'];
                    body = updateAppDisableStatusRequest['body'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling updateAppDisableStatus.');
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
         * 更新应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAppInfo(updateAppInfoRequest?: UpdateAppInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v1/applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (updateAppInfoRequest !== null && updateAppInfoRequest !== undefined) {
                if (updateAppInfoRequest instanceof UpdateAppInfoRequest) {
                    contentType = updateAppInfoRequest.contentType;
                    body = updateAppInfoRequest.body
                } else {
                    contentType = updateAppInfoRequest['Content-Type'];
                    body = updateAppInfoRequest['body'];
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
         * 获取部署任务状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkDeployStatus(checkDeployStatusRequest?: CheckDeployStatusRequest) {
            const options = {
                method: "GET",
                url: "/v2/tasks/{task_id}/state",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let contentType;
            
            let recordId;
            
            let stepState;

            if (checkDeployStatusRequest !== null && checkDeployStatusRequest !== undefined) {
                if (checkDeployStatusRequest instanceof CheckDeployStatusRequest) {
                    taskId = checkDeployStatusRequest.taskId;
                    contentType = checkDeployStatusRequest.contentType;
                    recordId = checkDeployStatusRequest.recordId;
                    stepState = checkDeployStatusRequest.stepState;
                } else {
                    taskId = checkDeployStatusRequest['task_id'];
                    contentType = checkDeployStatusRequest['Content-Type'];
                    recordId = checkDeployStatusRequest['record_id'];
                    stepState = checkDeployStatusRequest['step_state'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling checkDeployStatus.');
            }
            if (recordId !== null && recordId !== undefined) {
                localVarQueryParameter['record_id'] = recordId;
            }
            if (stepState !== null && stepState !== undefined) {
                localVarQueryParameter['step_state'] = stepState;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用下创建环境。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEnvironment(createEnvironmentRequest?: CreateEnvironmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/applications/{application_id}/environments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;
            
            let contentType;

            if (createEnvironmentRequest !== null && createEnvironmentRequest !== undefined) {
                if (createEnvironmentRequest instanceof CreateEnvironmentRequest) {
                    applicationId = createEnvironmentRequest.applicationId;
                    contentType = createEnvironmentRequest.contentType;
                    body = createEnvironmentRequest.body
                } else {
                    applicationId = createEnvironmentRequest['application_id'];
                    contentType = createEnvironmentRequest['Content-Type'];
                    body = createEnvironmentRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling createEnvironment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除应用下的环境。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEnvironment(deleteEnvironmentRequest?: DeleteEnvironmentRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/applications/{application_id}/environments/{environment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let environmentId;
            
            let contentType;

            if (deleteEnvironmentRequest !== null && deleteEnvironmentRequest !== undefined) {
                if (deleteEnvironmentRequest instanceof DeleteEnvironmentRequest) {
                    applicationId = deleteEnvironmentRequest.applicationId;
                    environmentId = deleteEnvironmentRequest.environmentId;
                    contentType = deleteEnvironmentRequest.contentType;
                } else {
                    applicationId = deleteEnvironmentRequest['application_id'];
                    environmentId = deleteEnvironmentRequest['environment_id'];
                    contentType = deleteEnvironmentRequest['Content-Type'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling deleteEnvironment.');
            }
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling deleteEnvironment.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'application_id': applicationId,'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 环境下删除主机。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHostFromEnvironment(deleteHostFromEnvironmentRequest?: DeleteHostFromEnvironmentRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/applications/{application_id}/environments/{environment_id}/{host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let environmentId;
            
            let hostId;
            
            let contentType;

            if (deleteHostFromEnvironmentRequest !== null && deleteHostFromEnvironmentRequest !== undefined) {
                if (deleteHostFromEnvironmentRequest instanceof DeleteHostFromEnvironmentRequest) {
                    applicationId = deleteHostFromEnvironmentRequest.applicationId;
                    environmentId = deleteHostFromEnvironmentRequest.environmentId;
                    hostId = deleteHostFromEnvironmentRequest.hostId;
                    contentType = deleteHostFromEnvironmentRequest.contentType;
                } else {
                    applicationId = deleteHostFromEnvironmentRequest['application_id'];
                    environmentId = deleteHostFromEnvironmentRequest['environment_id'];
                    hostId = deleteHostFromEnvironmentRequest['host_id'];
                    contentType = deleteHostFromEnvironmentRequest['Content-Type'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling deleteHostFromEnvironment.');
            }
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling deleteHostFromEnvironment.');
            }
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling deleteHostFromEnvironment.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'application_id': applicationId,'environment_id': environmentId,'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 环境下导入主机。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importHostToEnvironment(importHostToEnvironmentRequest?: ImportHostToEnvironmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/applications/{application_id}/environments/{environment_id}/hosts/import",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;
            
            let environmentId;
            
            let contentType;

            if (importHostToEnvironmentRequest !== null && importHostToEnvironmentRequest !== undefined) {
                if (importHostToEnvironmentRequest instanceof ImportHostToEnvironmentRequest) {
                    applicationId = importHostToEnvironmentRequest.applicationId;
                    environmentId = importHostToEnvironmentRequest.environmentId;
                    contentType = importHostToEnvironmentRequest.contentType;
                    body = importHostToEnvironmentRequest.body
                } else {
                    applicationId = importHostToEnvironmentRequest['application_id'];
                    environmentId = importHostToEnvironmentRequest['environment_id'];
                    contentType = importHostToEnvironmentRequest['Content-Type'];
                    body = importHostToEnvironmentRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling importHostToEnvironment.');
            }
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling importHostToEnvironment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId,'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询环境内的主机列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnvironmentHosts(listEnvironmentHostsRequest?: ListEnvironmentHostsRequest) {
            const options = {
                method: "GET",
                url: "/v1/applications/{application_id}/environments/{environment_id}/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationId;
            
            let environmentId;
            
            let keyField;
            
            let asProxy;
            
            let pageIndex;
            
            let pageSize;

            if (listEnvironmentHostsRequest !== null && listEnvironmentHostsRequest !== undefined) {
                if (listEnvironmentHostsRequest instanceof ListEnvironmentHostsRequest) {
                    applicationId = listEnvironmentHostsRequest.applicationId;
                    environmentId = listEnvironmentHostsRequest.environmentId;
                    keyField = listEnvironmentHostsRequest.keyField;
                    asProxy = listEnvironmentHostsRequest.asProxy;
                    pageIndex = listEnvironmentHostsRequest.pageIndex;
                    pageSize = listEnvironmentHostsRequest.pageSize;
                } else {
                    applicationId = listEnvironmentHostsRequest['application_id'];
                    environmentId = listEnvironmentHostsRequest['environment_id'];
                    keyField = listEnvironmentHostsRequest['key_field'];
                    asProxy = listEnvironmentHostsRequest['as_proxy'];
                    pageIndex = listEnvironmentHostsRequest['page_index'];
                    pageSize = listEnvironmentHostsRequest['page_size'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling listEnvironmentHosts.');
            }
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling listEnvironmentHosts.');
            }
            if (keyField !== null && keyField !== undefined) {
                localVarQueryParameter['key_field'] = keyField;
            }
            if (asProxy !== null && asProxy !== undefined) {
                localVarQueryParameter['as_proxy'] = asProxy;
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'application_id': applicationId,'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用下环境列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnvironments(listEnvironmentsRequest?: ListEnvironmentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/applications/{application_id}/environments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationId;
            
            let projectId;
            
            let pageIndex;
            
            let pageSize;
            
            let name;
            
            let sortKey;
            
            let sortDir;

            if (listEnvironmentsRequest !== null && listEnvironmentsRequest !== undefined) {
                if (listEnvironmentsRequest instanceof ListEnvironmentsRequest) {
                    applicationId = listEnvironmentsRequest.applicationId;
                    projectId = listEnvironmentsRequest.projectId;
                    pageIndex = listEnvironmentsRequest.pageIndex;
                    pageSize = listEnvironmentsRequest.pageSize;
                    name = listEnvironmentsRequest.name;
                    sortKey = listEnvironmentsRequest.sortKey;
                    sortDir = listEnvironmentsRequest.sortDir;
                } else {
                    applicationId = listEnvironmentsRequest['application_id'];
                    projectId = listEnvironmentsRequest['project_id'];
                    pageIndex = listEnvironmentsRequest['page_index'];
                    pageSize = listEnvironmentsRequest['page_size'];
                    name = listEnvironmentsRequest['name'];
                    sortKey = listEnvironmentsRequest['sort_key'];
                    sortDir = listEnvironmentsRequest['sort_dir'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling listEnvironments.');
            }
            if (projectId === null || projectId === undefined) {
                throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listEnvironments.');
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
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
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询环境详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEnvironmentDetail(showEnvironmentDetailRequest?: ShowEnvironmentDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/applications/{application_id}/environments/{environment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let environmentId;

            if (showEnvironmentDetailRequest !== null && showEnvironmentDetailRequest !== undefined) {
                if (showEnvironmentDetailRequest instanceof ShowEnvironmentDetailRequest) {
                    applicationId = showEnvironmentDetailRequest.applicationId;
                    environmentId = showEnvironmentDetailRequest.environmentId;
                } else {
                    applicationId = showEnvironmentDetailRequest['application_id'];
                    environmentId = showEnvironmentDetailRequest['environment_id'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showEnvironmentDetail.');
            }
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling showEnvironmentDetail.');
            }

            options.pathParams = { 'application_id': applicationId,'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用下编辑环境。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEnvironment(updateEnvironmentRequest?: UpdateEnvironmentRequest) {
            const options = {
                method: "PUT",
                url: "/v1/applications/{application_id}/environments/{environment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let applicationId;
            
            let environmentId;

            if (updateEnvironmentRequest !== null && updateEnvironmentRequest !== undefined) {
                if (updateEnvironmentRequest instanceof UpdateEnvironmentRequest) {
                    contentType = updateEnvironmentRequest.contentType;
                    applicationId = updateEnvironmentRequest.applicationId;
                    environmentId = updateEnvironmentRequest.environmentId;
                    body = updateEnvironmentRequest.body
                } else {
                    contentType = updateEnvironmentRequest['Content-Type'];
                    applicationId = updateEnvironmentRequest['application_id'];
                    environmentId = updateEnvironmentRequest['environment_id'];
                    body = updateEnvironmentRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling updateEnvironment.');
            }
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling updateEnvironment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId,'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询环境权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnvironmentPermissions(listEnvironmentPermissionsRequest?: ListEnvironmentPermissionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/applications/{application_id}/environments/{environment_id}/permissions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let environmentId;

            if (listEnvironmentPermissionsRequest !== null && listEnvironmentPermissionsRequest !== undefined) {
                if (listEnvironmentPermissionsRequest instanceof ListEnvironmentPermissionsRequest) {
                    applicationId = listEnvironmentPermissionsRequest.applicationId;
                    environmentId = listEnvironmentPermissionsRequest.environmentId;
                } else {
                    applicationId = listEnvironmentPermissionsRequest['application_id'];
                    environmentId = listEnvironmentPermissionsRequest['environment_id'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling listEnvironmentPermissions.');
            }
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling listEnvironmentPermissions.');
            }

            options.pathParams = { 'application_id': applicationId,'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑环境权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEnvironmentPermission(updateEnvironmentPermissionRequest?: UpdateEnvironmentPermissionRequest) {
            const options = {
                method: "PUT",
                url: "/v2/applications/{application_id}/environments/{environment_id}/permissions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let applicationId;
            
            let environmentId;

            if (updateEnvironmentPermissionRequest !== null && updateEnvironmentPermissionRequest !== undefined) {
                if (updateEnvironmentPermissionRequest instanceof UpdateEnvironmentPermissionRequest) {
                    contentType = updateEnvironmentPermissionRequest.contentType;
                    applicationId = updateEnvironmentPermissionRequest.applicationId;
                    environmentId = updateEnvironmentPermissionRequest.environmentId;
                    body = updateEnvironmentPermissionRequest.body
                } else {
                    contentType = updateEnvironmentPermissionRequest['Content-Type'];
                    applicationId = updateEnvironmentPermissionRequest['application_id'];
                    environmentId = updateEnvironmentPermissionRequest['environment_id'];
                    body = updateEnvironmentPermissionRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling updateEnvironmentPermission.');
            }
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling updateEnvironmentPermission.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId,'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止部署任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopDeployTask(stopDeployTaskRequest?: StopDeployTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v2/tasks/{task_id}/records/{record_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;
            
            let recordId;
            
            let contentType;

            if (stopDeployTaskRequest !== null && stopDeployTaskRequest !== undefined) {
                if (stopDeployTaskRequest instanceof StopDeployTaskRequest) {
                    taskId = stopDeployTaskRequest.taskId;
                    recordId = stopDeployTaskRequest.recordId;
                    contentType = stopDeployTaskRequest.contentType;
                    body = stopDeployTaskRequest.body
                } else {
                    taskId = stopDeployTaskRequest['task_id'];
                    recordId = stopDeployTaskRequest['record_id'];
                    contentType = stopDeployTaskRequest['Content-Type'];
                    body = stopDeployTaskRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling stopDeployTask.');
            }
            if (recordId === null || recordId === undefined) {
            throw new RequiredError('recordId','Required parameter recordId was null or undefined when calling stopDeployTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId,'record_id': recordId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除主机集群下的主机。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteHosts(batchDeleteHostsRequest?: BatchDeleteHostsRequest) {
            const options = {
                method: "POST",
                url: "/v1/resources/host-groups/{group_id}/hosts/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let groupId;

            if (batchDeleteHostsRequest !== null && batchDeleteHostsRequest !== undefined) {
                if (batchDeleteHostsRequest instanceof BatchDeleteHostsRequest) {
                    contentType = batchDeleteHostsRequest.contentType;
                    groupId = batchDeleteHostsRequest.groupId;
                    body = batchDeleteHostsRequest.body
                } else {
                    contentType = batchDeleteHostsRequest['Content-Type'];
                    groupId = batchDeleteHostsRequest['group_id'];
                    body = batchDeleteHostsRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling batchDeleteHosts.');
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
         * 批量复制主机至目标主机集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyHostsToTarget(copyHostsToTargetRequest?: CopyHostsToTargetRequest) {
            const options = {
                method: "POST",
                url: "/v1/resources/host-groups/{group_id}/hosts/replication",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let groupId;

            if (copyHostsToTargetRequest !== null && copyHostsToTargetRequest !== undefined) {
                if (copyHostsToTargetRequest instanceof CopyHostsToTargetRequest) {
                    contentType = copyHostsToTargetRequest.contentType;
                    groupId = copyHostsToTargetRequest.groupId;
                    body = copyHostsToTargetRequest.body
                } else {
                    contentType = copyHostsToTargetRequest['Content-Type'];
                    groupId = copyHostsToTargetRequest['group_id'];
                    body = copyHostsToTargetRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling copyHostsToTarget.');
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
         * 在指定主机集群下新建主机。该接口于2024年09月30日后不再维护，推荐使用新版CreateHost接口。
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
         * 在指定主机集群下新建主机。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHost(createHostRequest?: CreateHostRequest) {
            const options = {
                method: "POST",
                url: "/v1/resources/host-groups/{group_id}/hosts",
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

            if (createHostRequest !== null && createHostRequest !== undefined) {
                if (createHostRequest instanceof CreateHostRequest) {
                    groupId = createHostRequest.groupId;
                    contentType = createHostRequest.contentType;
                    body = createHostRequest.body
                } else {
                    groupId = createHostRequest['group_id'];
                    contentType = createHostRequest['Content-Type'];
                    body = createHostRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling createHost.');
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
         * 根据主机id删除主机。该接口于2024年9月30日后不再维护。
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
         * 根据主机id删除主机集群下主机。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHost(deleteHostRequest?: DeleteHostRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/resources/host-groups/{group_id}/hosts/{host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let groupId;
            
            let hostId;

            if (deleteHostRequest !== null && deleteHostRequest !== undefined) {
                if (deleteHostRequest instanceof DeleteHostRequest) {
                    contentType = deleteHostRequest.contentType;
                    groupId = deleteHostRequest.groupId;
                    hostId = deleteHostRequest.hostId;
                } else {
                    contentType = deleteHostRequest['Content-Type'];
                    groupId = deleteHostRequest['group_id'];
                    hostId = deleteHostRequest['host_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteHost.');
            }
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling deleteHost.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'group_id': groupId,'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据主机集群id查询指定主机集群下的主机列表。该接口于2024年09月30日后不再维护，推荐使用新版ListNewHosts接口。
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
         * 根据主机集群id查询指定主机集群下的主机列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNewHosts(listNewHostsRequest?: ListNewHostsRequest) {
            const options = {
                method: "GET",
                url: "/v1/resources/host-groups/{group_id}/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let keyField;
            
            let environmentId;
            
            let pageIndex;
            
            let pageSize;
            
            let sortKey;
            
            let sortDir;
            
            let asProxy;

            if (listNewHostsRequest !== null && listNewHostsRequest !== undefined) {
                if (listNewHostsRequest instanceof ListNewHostsRequest) {
                    groupId = listNewHostsRequest.groupId;
                    keyField = listNewHostsRequest.keyField;
                    environmentId = listNewHostsRequest.environmentId;
                    pageIndex = listNewHostsRequest.pageIndex;
                    pageSize = listNewHostsRequest.pageSize;
                    sortKey = listNewHostsRequest.sortKey;
                    sortDir = listNewHostsRequest.sortDir;
                    asProxy = listNewHostsRequest.asProxy;
                } else {
                    groupId = listNewHostsRequest['group_id'];
                    keyField = listNewHostsRequest['key_field'];
                    environmentId = listNewHostsRequest['environment_id'];
                    pageIndex = listNewHostsRequest['page_index'];
                    pageSize = listNewHostsRequest['page_size'];
                    sortKey = listNewHostsRequest['sort_key'];
                    sortDir = listNewHostsRequest['sort_dir'];
                    asProxy = listNewHostsRequest['as_proxy'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listNewHosts.');
            }
            if (keyField !== null && keyField !== undefined) {
                localVarQueryParameter['key_field'] = keyField;
            }
            if (environmentId !== null && environmentId !== undefined) {
                localVarQueryParameter['environment_id'] = environmentId;
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (asProxy !== null && asProxy !== undefined) {
                localVarQueryParameter['as_proxy'] = asProxy;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据主机id查询主机详情。该接口于2024年09月30日后不再维护，推荐使用新版ShowHostDetail接口。
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
         * 根据主机id查询主机详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHostDetail(showHostDetailRequest?: ShowHostDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/resources/host-groups/{group_id}/hosts/{host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let hostId;

            if (showHostDetailRequest !== null && showHostDetailRequest !== undefined) {
                if (showHostDetailRequest instanceof ShowHostDetailRequest) {
                    groupId = showHostDetailRequest.groupId;
                    hostId = showHostDetailRequest.hostId;
                } else {
                    groupId = showHostDetailRequest['group_id'];
                    hostId = showHostDetailRequest['host_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showHostDetail.');
            }
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling showHostDetail.');
            }

            options.pathParams = { 'group_id': groupId,'host_id': hostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据主机id修改主机信息。该接口于2024年9月30日后不再维护。
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
         * 根据主机id编辑主机集群下主机信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHostInfo(updateHostInfoRequest?: UpdateHostInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v1/resources/host-groups/{group_id}/hosts/{host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let groupId;
            
            let hostId;

            if (updateHostInfoRequest !== null && updateHostInfoRequest !== undefined) {
                if (updateHostInfoRequest instanceof UpdateHostInfoRequest) {
                    contentType = updateHostInfoRequest.contentType;
                    groupId = updateHostInfoRequest.groupId;
                    hostId = updateHostInfoRequest.hostId;
                    body = updateHostInfoRequest.body
                } else {
                    contentType = updateHostInfoRequest['Content-Type'];
                    groupId = updateHostInfoRequest['group_id'];
                    hostId = updateHostInfoRequest['host_id'];
                    body = updateHostInfoRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateHostInfo.');
            }
            if (hostId === null || hostId === undefined) {
            throw new RequiredError('hostId','Required parameter hostId was null or undefined when calling updateHostInfo.');
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
         * 在项目下新建主机集群。该接口于2024年09月30日后不再维护，推荐使用新版CreateHostCluster接口。
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
         * 在项目下新建主机集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHostCluster(createHostClusterRequest?: CreateHostClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1/resources/host-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createHostClusterRequest !== null && createHostClusterRequest !== undefined) {
                if (createHostClusterRequest instanceof CreateHostClusterRequest) {
                    contentType = createHostClusterRequest.contentType;
                    body = createHostClusterRequest.body
                } else {
                    contentType = createHostClusterRequest['Content-Type'];
                    body = createHostClusterRequest['body'];
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
         * 根据主机集群id删除主机集群。该接口于2024年9月30日后不再维护。
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
         * 根据主机集群id删除主机集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHostCluster(deleteHostClusterRequest?: DeleteHostClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/resources/host-groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let groupId;

            if (deleteHostClusterRequest !== null && deleteHostClusterRequest !== undefined) {
                if (deleteHostClusterRequest instanceof DeleteHostClusterRequest) {
                    contentType = deleteHostClusterRequest.contentType;
                    groupId = deleteHostClusterRequest.groupId;
                } else {
                    contentType = deleteHostClusterRequest['Content-Type'];
                    groupId = deleteHostClusterRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteHostCluster.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询主机集群关联环境信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAssociateEnvironmentsInfos(listAssociateEnvironmentsInfosRequest?: ListAssociateEnvironmentsInfosRequest) {
            const options = {
                method: "GET",
                url: "/v1/resources/host-groups/{group_id}/environments/infos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let pageIndex;
            
            let pageSize;

            if (listAssociateEnvironmentsInfosRequest !== null && listAssociateEnvironmentsInfosRequest !== undefined) {
                if (listAssociateEnvironmentsInfosRequest instanceof ListAssociateEnvironmentsInfosRequest) {
                    groupId = listAssociateEnvironmentsInfosRequest.groupId;
                    pageIndex = listAssociateEnvironmentsInfosRequest.pageIndex;
                    pageSize = listAssociateEnvironmentsInfosRequest.pageSize;
                } else {
                    groupId = listAssociateEnvironmentsInfosRequest['group_id'];
                    pageIndex = listAssociateEnvironmentsInfosRequest['page_index'];
                    pageSize = listAssociateEnvironmentsInfosRequest['page_size'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listAssociateEnvironmentsInfos.');
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按条件查询主机集群列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostClusters(listHostClustersRequest?: ListHostClustersRequest) {
            const options = {
                method: "GET",
                url: "/v1/resources/host-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let name;
            
            let os;
            
            let pageIndex;
            
            let pageSize;
            
            let sortField;
            
            let sortType;
            
            let isProxyMode;
            
            let slaveClusterId;

            if (listHostClustersRequest !== null && listHostClustersRequest !== undefined) {
                if (listHostClustersRequest instanceof ListHostClustersRequest) {
                    projectId = listHostClustersRequest.projectId;
                    name = listHostClustersRequest.name;
                    os = listHostClustersRequest.os;
                    pageIndex = listHostClustersRequest.pageIndex;
                    pageSize = listHostClustersRequest.pageSize;
                    sortField = listHostClustersRequest.sortField;
                    sortType = listHostClustersRequest.sortType;
                    isProxyMode = listHostClustersRequest.isProxyMode;
                    slaveClusterId = listHostClustersRequest.slaveClusterId;
                } else {
                    projectId = listHostClustersRequest['project_id'];
                    name = listHostClustersRequest['name'];
                    os = listHostClustersRequest['os'];
                    pageIndex = listHostClustersRequest['page_index'];
                    pageSize = listHostClustersRequest['page_size'];
                    sortField = listHostClustersRequest['sort_field'];
                    sortType = listHostClustersRequest['sort_type'];
                    isProxyMode = listHostClustersRequest['is_proxy_mode'];
                    slaveClusterId = listHostClustersRequest['slave_cluster_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
                throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listHostClusters.');
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (os !== null && os !== undefined) {
                localVarQueryParameter['os'] = os;
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (sortType !== null && sortType !== undefined) {
                localVarQueryParameter['sort_type'] = sortType;
            }
            if (isProxyMode !== null && isProxyMode !== undefined) {
                localVarQueryParameter['is_proxy_mode'] = isProxyMode;
            }
            if (slaveClusterId !== null && slaveClusterId !== undefined) {
                localVarQueryParameter['slave_cluster_id'] = slaveClusterId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用下环境基本信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostGroupBaseInfos(listHostGroupBaseInfosRequest?: ListHostGroupBaseInfosRequest) {
            const options = {
                method: "GET",
                url: "/v1/applications/{application_id}/host-groups/base/infos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationId;
            
            let projectUuid;
            
            let os;
            
            let pageIndex;
            
            let pageSize;
            
            let name;

            if (listHostGroupBaseInfosRequest !== null && listHostGroupBaseInfosRequest !== undefined) {
                if (listHostGroupBaseInfosRequest instanceof ListHostGroupBaseInfosRequest) {
                    applicationId = listHostGroupBaseInfosRequest.applicationId;
                    projectUuid = listHostGroupBaseInfosRequest.projectUuid;
                    os = listHostGroupBaseInfosRequest.os;
                    pageIndex = listHostGroupBaseInfosRequest.pageIndex;
                    pageSize = listHostGroupBaseInfosRequest.pageSize;
                    name = listHostGroupBaseInfosRequest.name;
                } else {
                    applicationId = listHostGroupBaseInfosRequest['application_id'];
                    projectUuid = listHostGroupBaseInfosRequest['project_uuid'];
                    os = listHostGroupBaseInfosRequest['os'];
                    pageIndex = listHostGroupBaseInfosRequest['page_index'];
                    pageSize = listHostGroupBaseInfosRequest['page_size'];
                    name = listHostGroupBaseInfosRequest['name'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling listHostGroupBaseInfos.');
            }
            if (projectUuid === null || projectUuid === undefined) {
                throw new RequiredError('projectUuid','Required parameter projectUuid was null or undefined when calling listHostGroupBaseInfos.');
            }
            if (projectUuid !== null && projectUuid !== undefined) {
                localVarQueryParameter['project_uuid'] = projectUuid;
            }
            if (os !== null && os !== undefined) {
                localVarQueryParameter['os'] = os;
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按条件查询主机集群列表。该接口于2024年09月30日后不再维护，推荐使用新版ListHostClusters接口。
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
            
            let projectId;
            
            let regionName;
            
            let os;
            
            let offset;
            
            let limit;
            
            let name;
            
            let sortKey;
            
            let sortDir;

            if (listHostGroupsRequest !== null && listHostGroupsRequest !== undefined) {
                if (listHostGroupsRequest instanceof ListHostGroupsRequest) {
                    projectId = listHostGroupsRequest.projectId;
                    regionName = listHostGroupsRequest.regionName;
                    os = listHostGroupsRequest.os;
                    offset = listHostGroupsRequest.offset;
                    limit = listHostGroupsRequest.limit;
                    name = listHostGroupsRequest.name;
                    sortKey = listHostGroupsRequest.sortKey;
                    sortDir = listHostGroupsRequest.sortDir;
                } else {
                    projectId = listHostGroupsRequest['project_id'];
                    regionName = listHostGroupsRequest['region_name'];
                    os = listHostGroupsRequest['os'];
                    offset = listHostGroupsRequest['offset'];
                    limit = listHostGroupsRequest['limit'];
                    name = listHostGroupsRequest['name'];
                    sortKey = listHostGroupsRequest['sort_key'];
                    sortDir = listHostGroupsRequest['sort_dir'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
                throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listHostGroups.');
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (regionName === null || regionName === undefined) {
                throw new RequiredError('regionName','Required parameter regionName was null or undefined when calling listHostGroups.');
            }
            if (regionName !== null && regionName !== undefined) {
                localVarQueryParameter['region_name'] = regionName;
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
         * 根据主机集群id查询主机集群详情。该接口于2024年09月30日后不再维护，推荐使用新版ShowHostClusterDetail接口。
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
         * 根据主机集群id查询主机集群详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHostClusterDetail(showHostClusterDetailRequest?: ShowHostClusterDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/resources/host-groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (showHostClusterDetailRequest !== null && showHostClusterDetailRequest !== undefined) {
                if (showHostClusterDetailRequest instanceof ShowHostClusterDetailRequest) {
                    groupId = showHostClusterDetailRequest.groupId;
                } else {
                    groupId = showHostClusterDetailRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showHostClusterDetail.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据主机集群id修改主机集群信息。该接口于2024年9月30日后不再维护。
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
         * 编辑主机集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHostCluster(updateHostClusterRequest?: UpdateHostClusterRequest) {
            const options = {
                method: "PUT",
                url: "/v1/resources/host-groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let groupId;

            if (updateHostClusterRequest !== null && updateHostClusterRequest !== undefined) {
                if (updateHostClusterRequest instanceof UpdateHostClusterRequest) {
                    contentType = updateHostClusterRequest.contentType;
                    groupId = updateHostClusterRequest.groupId;
                    body = updateHostClusterRequest.body
                } else {
                    contentType = updateHostClusterRequest['Content-Type'];
                    groupId = updateHostClusterRequest['group_id'];
                    body = updateHostClusterRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateHostCluster.');
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
         * 判断当前用户在项目下是否有权限创建主机集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkWhetherHostGroupCanBeCreated(checkWhetherHostGroupCanBeCreatedRequest?: CheckWhetherHostGroupCanBeCreatedRequest) {
            const options = {
                method: "GET",
                url: "/v1/host-groups/creatable/{project_id}/permissions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;

            if (checkWhetherHostGroupCanBeCreatedRequest !== null && checkWhetherHostGroupCanBeCreatedRequest !== undefined) {
                if (checkWhetherHostGroupCanBeCreatedRequest instanceof CheckWhetherHostGroupCanBeCreatedRequest) {
                    projectId = checkWhetherHostGroupCanBeCreatedRequest.projectId;
                } else {
                    projectId = checkWhetherHostGroupCanBeCreatedRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling checkWhetherHostGroupCanBeCreated.');
            }

            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据主机集群id查询主机集群权限矩阵。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostGroupPermissions(listHostGroupPermissionsRequest?: ListHostGroupPermissionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/host-groups/{group_id}/permissions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (listHostGroupPermissionsRequest !== null && listHostGroupPermissionsRequest !== undefined) {
                if (listHostGroupPermissionsRequest instanceof ListHostGroupPermissionsRequest) {
                    groupId = listHostGroupPermissionsRequest.groupId;
                } else {
                    groupId = listHostGroupPermissionsRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listHostGroupPermissions.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据主机集群id修改主机集群权限矩阵。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHostGroupPermissions(updateHostGroupPermissionsRequest?: UpdateHostGroupPermissionsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/host-groups/{group_id}/permissions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let groupId;

            if (updateHostGroupPermissionsRequest !== null && updateHostGroupPermissionsRequest !== undefined) {
                if (updateHostGroupPermissionsRequest instanceof UpdateHostGroupPermissionsRequest) {
                    contentType = updateHostGroupPermissionsRequest.contentType;
                    groupId = updateHostGroupPermissionsRequest.groupId;
                    body = updateHostGroupPermissionsRequest.body
                } else {
                    contentType = updateHostGroupPermissionsRequest['Content-Type'];
                    groupId = updateHostGroupPermissionsRequest['group_id'];
                    body = updateHostGroupPermissionsRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateHostGroupPermissions.');
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
         * 获取指定应用的应用部署成功率。
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
         * 获取指定项目的应用部署成功率。
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