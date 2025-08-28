import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AdminUserInfoReq } from './model/AdminUserInfoReq';
import { ApiVersion } from './model/ApiVersion';
import { AvailableZone } from './model/AvailableZone';
import { ChangeDatabaseVersionRequest } from './model/ChangeDatabaseVersionRequest';
import { ChangeDatabaseVersionResponse } from './model/ChangeDatabaseVersionResponse';
import { ComputeFlavorGroupsInfo } from './model/ComputeFlavorGroupsInfo';
import { ComputeFlavors } from './model/ComputeFlavors';
import { ConfigurationInfo } from './model/ConfigurationInfo';
import { ConfigurationParameter } from './model/ConfigurationParameter';
import { ConfigurationParameterList } from './model/ConfigurationParameterList';
import { CreateDatabaseDetail } from './model/CreateDatabaseDetail';
import { CreateDatabaseDetailResponses } from './model/CreateDatabaseDetailResponses';
import { CreateDatabaseReq } from './model/CreateDatabaseReq';
import { CreateDatabaseRequest } from './model/CreateDatabaseRequest';
import { CreateDatabaseResponse } from './model/CreateDatabaseResponse';
import { CreateDdmDatabaseRequest } from './model/CreateDdmDatabaseRequest';
import { CreateDdmDatabaseRequestBody } from './model/CreateDdmDatabaseRequestBody';
import { CreateDdmDatabaseResponse } from './model/CreateDdmDatabaseResponse';
import { CreateGroupRequest } from './model/CreateGroupRequest';
import { CreateGroupRequestBody } from './model/CreateGroupRequestBody';
import { CreateGroupResponse } from './model/CreateGroupResponse';
import { CreateInstanceDetail } from './model/CreateInstanceDetail';
import { CreateInstanceExtendParam } from './model/CreateInstanceExtendParam';
import { CreateInstanceReq } from './model/CreateInstanceReq';
import { CreateInstanceRequest } from './model/CreateInstanceRequest';
import { CreateInstanceResponse } from './model/CreateInstanceResponse';
import { CreateUsersDatabases } from './model/CreateUsersDatabases';
import { CreateUsersDetailResponses } from './model/CreateUsersDetailResponses';
import { CreateUsersInfo } from './model/CreateUsersInfo';
import { CreateUsersReq } from './model/CreateUsersReq';
import { CreateUsersRequest } from './model/CreateUsersRequest';
import { CreateUsersResponse } from './model/CreateUsersResponse';
import { DatabaseDnInstances } from './model/DatabaseDnInstances';
import { DatabaseInstabcesParam } from './model/DatabaseInstabcesParam';
import { DatabaseVersionRequest } from './model/DatabaseVersionRequest';
import { DeleteDatabaseRequest } from './model/DeleteDatabaseRequest';
import { DeleteDatabaseResponse } from './model/DeleteDatabaseResponse';
import { DeleteDdmDatabaseRequest } from './model/DeleteDdmDatabaseRequest';
import { DeleteDdmDatabaseResponse } from './model/DeleteDdmDatabaseResponse';
import { DeleteDdmInstanceRequest } from './model/DeleteDdmInstanceRequest';
import { DeleteDdmInstanceResponse } from './model/DeleteDdmInstanceResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { DeleteUserRequest } from './model/DeleteUserRequest';
import { DeleteUserResponse } from './model/DeleteUserResponse';
import { EngineGroupInfo } from './model/EngineGroupInfo';
import { EngineGroupsInfo } from './model/EngineGroupsInfo';
import { EnlargeNodeInfo } from './model/EnlargeNodeInfo';
import { EnlargeRequest } from './model/EnlargeRequest';
import { ErrorResponse } from './model/ErrorResponse';
import { ExecuteKillLogicalProcessesRequest } from './model/ExecuteKillLogicalProcessesRequest';
import { ExecuteKillLogicalProcessesResponse } from './model/ExecuteKillLogicalProcessesResponse';
import { ExecuteKillPhysicalProcessesRequest } from './model/ExecuteKillPhysicalProcessesRequest';
import { ExecuteKillPhysicalProcessesResponse } from './model/ExecuteKillPhysicalProcessesResponse';
import { ExpandDdmInstanceNodesRequest } from './model/ExpandDdmInstanceNodesRequest';
import { ExpandDdmInstanceNodesRequestBody } from './model/ExpandDdmInstanceNodesRequestBody';
import { ExpandDdmInstanceNodesResponse } from './model/ExpandDdmInstanceNodesResponse';
import { ExpandInstanceNodesRequest } from './model/ExpandInstanceNodesRequest';
import { ExpandInstanceNodesResponse } from './model/ExpandInstanceNodesResponse';
import { Flavor } from './model/Flavor';
import { FlavorGroupInfo } from './model/FlavorGroupInfo';
import { GetDatabaseInfo } from './model/GetDatabaseInfo';
import { GetDatabaseResponseBean } from './model/GetDatabaseResponseBean';
import { GetDatabaseUsedRds } from './model/GetDatabaseUsedRds';
import { GetDatabases } from './model/GetDatabases';
import { GetDetailfNodesInfo } from './model/GetDetailfNodesInfo';
import { GetUsersListDetailResponses } from './model/GetUsersListDetailResponses';
import { GetUsersListdatabase } from './model/GetUsersListdatabase';
import { GroupInfo } from './model/GroupInfo';
import { GroupNodeInfo } from './model/GroupNodeInfo';
import { Instance } from './model/Instance';
import { JobInfo } from './model/JobInfo';
import { KillProcessesOpenRequest } from './model/KillProcessesOpenRequest';
import { LinkInfo } from './model/LinkInfo';
import { ListApiVersionRequest } from './model/ListApiVersionRequest';
import { ListApiVersionResponse } from './model/ListApiVersionResponse';
import { ListAvailableRdsListRequest } from './model/ListAvailableRdsListRequest';
import { ListAvailableRdsListResponse } from './model/ListAvailableRdsListResponse';
import { ListDatabaseAvailableVersionsRequest } from './model/ListDatabaseAvailableVersionsRequest';
import { ListDatabaseAvailableVersionsResponse } from './model/ListDatabaseAvailableVersionsResponse';
import { ListDatabasesRequest } from './model/ListDatabasesRequest';
import { ListDatabasesResponse } from './model/ListDatabasesResponse';
import { ListDdmConfigurationsRequest } from './model/ListDdmConfigurationsRequest';
import { ListDdmConfigurationsResponse } from './model/ListDdmConfigurationsResponse';
import { ListDdmEnginesRequest } from './model/ListDdmEnginesRequest';
import { ListDdmEnginesResponse } from './model/ListDdmEnginesResponse';
import { ListDdmFlavorsRequest } from './model/ListDdmFlavorsRequest';
import { ListDdmFlavorsResponse } from './model/ListDdmFlavorsResponse';
import { ListEnginesRequest } from './model/ListEnginesRequest';
import { ListEnginesResponse } from './model/ListEnginesResponse';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListGroupRequest } from './model/ListGroupRequest';
import { ListGroupResponse } from './model/ListGroupResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListNodesRequest } from './model/ListNodesRequest';
import { ListNodesResponse } from './model/ListNodesResponse';
import { ListReadWriteRatioRequest } from './model/ListReadWriteRatioRequest';
import { ListReadWriteRatioResponse } from './model/ListReadWriteRatioResponse';
import { ListSlowLogRequest } from './model/ListSlowLogRequest';
import { ListSlowLogResponse } from './model/ListSlowLogResponse';
import { ListSlowLogsRequest } from './model/ListSlowLogsRequest';
import { ListSlowLogsResponse } from './model/ListSlowLogsResponse';
import { ListUsersRequest } from './model/ListUsersRequest';
import { ListUsersResponse } from './model/ListUsersResponse';
import { LogicalProcessInfo } from './model/LogicalProcessInfo';
import { ModifyInstanceNameReq } from './model/ModifyInstanceNameReq';
import { ModifyInstanceSecurityGroupReq } from './model/ModifyInstanceSecurityGroupReq';
import { ModifyReadAndWriteStrategyReq } from './model/ModifyReadAndWriteStrategyReq';
import { NodeInfo } from './model/NodeInfo';
import { NodeList } from './model/NodeList';
import { PhysicalProcessInfo } from './model/PhysicalProcessInfo';
import { QueryAvailableRdsList } from './model/QueryAvailableRdsList';
import { ReadWriteRatioList } from './model/ReadWriteRatioList';
import { RebuildConfigRequest } from './model/RebuildConfigRequest';
import { RebuildConfigResponse } from './model/RebuildConfigResponse';
import { ReduceRequest } from './model/ReduceRequest';
import { ResetAdministratorRequest } from './model/ResetAdministratorRequest';
import { ResetAdministratorResponse } from './model/ResetAdministratorResponse';
import { ResetUserPasswordReq } from './model/ResetUserPasswordReq';
import { ResetUserPasswordRequest } from './model/ResetUserPasswordRequest';
import { ResetUserPasswordResponse } from './model/ResetUserPasswordResponse';
import { ResizeFlavorReq } from './model/ResizeFlavorReq';
import { ResizeFlavorRequest } from './model/ResizeFlavorRequest';
import { ResizeFlavorResponse } from './model/ResizeFlavorResponse';
import { RestarInstanceInfo } from './model/RestarInstanceInfo';
import { RestartInstanceReq } from './model/RestartInstanceReq';
import { RestartInstanceRequest } from './model/RestartInstanceRequest';
import { RestartInstanceResponse } from './model/RestartInstanceResponse';
import { Risks } from './model/Risks';
import { RollBackDatabaseVersionRequest } from './model/RollBackDatabaseVersionRequest';
import { RollBackDatabaseVersionResponse } from './model/RollBackDatabaseVersionResponse';
import { ShowConfigurationRequest } from './model/ShowConfigurationRequest';
import { ShowConfigurationResponse } from './model/ShowConfigurationResponse';
import { ShowDatabaseRequest } from './model/ShowDatabaseRequest';
import { ShowDatabaseResponse } from './model/ShowDatabaseResponse';
import { ShowDdmJobResultRequest } from './model/ShowDdmJobResultRequest';
import { ShowDdmJobResultResponse } from './model/ShowDdmJobResultResponse';
import { ShowInstanceBeanResponse } from './model/ShowInstanceBeanResponse';
import { ShowInstanceParamRequest } from './model/ShowInstanceParamRequest';
import { ShowInstanceParamResponse } from './model/ShowInstanceParamResponse';
import { ShowInstanceRequest } from './model/ShowInstanceRequest';
import { ShowInstanceResponse } from './model/ShowInstanceResponse';
import { ShowLogicalProcessesRequest } from './model/ShowLogicalProcessesRequest';
import { ShowLogicalProcessesResponse } from './model/ShowLogicalProcessesResponse';
import { ShowNodeRequest } from './model/ShowNodeRequest';
import { ShowNodeResponse } from './model/ShowNodeResponse';
import { ShowPhysicalProcessesRequest } from './model/ShowPhysicalProcessesRequest';
import { ShowPhysicalProcessesResponse } from './model/ShowPhysicalProcessesResponse';
import { ShowProcessesAuditLogRequest } from './model/ShowProcessesAuditLogRequest';
import { ShowProcessesAuditLogResponse } from './model/ShowProcessesAuditLogResponse';
import { ShowRiskInfoRequest } from './model/ShowRiskInfoRequest';
import { ShowRiskInfoResponse } from './model/ShowRiskInfoResponse';
import { ShrinkInstanceNodesRequest } from './model/ShrinkInstanceNodesRequest';
import { ShrinkInstanceNodesResponse } from './model/ShrinkInstanceNodesResponse';
import { SlowLogList } from './model/SlowLogList';
import { SlowLogs } from './model/SlowLogs';
import { SupportAzsInfo } from './model/SupportAzsInfo';
import { SwitchSslOpenRequest } from './model/SwitchSslOpenRequest';
import { SwitchSslRequest } from './model/SwitchSslRequest';
import { SwitchSslResponse } from './model/SwitchSslResponse';
import { UpdateDatabaseInfoRequest } from './model/UpdateDatabaseInfoRequest';
import { UpdateDatabaseInfoResponse } from './model/UpdateDatabaseInfoResponse';
import { UpdateInstanceNameRequest } from './model/UpdateInstanceNameRequest';
import { UpdateInstanceNameResponse } from './model/UpdateInstanceNameResponse';
import { UpdateInstanceParamRequest } from './model/UpdateInstanceParamRequest';
import { UpdateInstanceParamResponse } from './model/UpdateInstanceParamResponse';
import { UpdateInstancePortRequest } from './model/UpdateInstancePortRequest';
import { UpdateInstancePortResponse } from './model/UpdateInstancePortResponse';
import { UpdateInstanceSecurityGroupRequest } from './model/UpdateInstanceSecurityGroupRequest';
import { UpdateInstanceSecurityGroupResponse } from './model/UpdateInstanceSecurityGroupResponse';
import { UpdateParametersReq } from './model/UpdateParametersReq';
import { UpdateParametersReqValues } from './model/UpdateParametersReqValues';
import { UpdatePortRequest } from './model/UpdatePortRequest';
import { UpdateReadAndWriteStrategyRequest } from './model/UpdateReadAndWriteStrategyRequest';
import { UpdateReadAndWriteStrategyResponse } from './model/UpdateReadAndWriteStrategyResponse';
import { UpdateUserDetailReq } from './model/UpdateUserDetailReq';
import { UpdateUserReq } from './model/UpdateUserReq';
import { UpdateUserRequest } from './model/UpdateUserRequest';
import { UpdateUserResponse } from './model/UpdateUserResponse';
import { UpdateUsersDatabases } from './model/UpdateUsersDatabases';
import { UserProcessAuditLog } from './model/UserProcessAuditLog';
import { ValidateWeakPasswordRequest } from './model/ValidateWeakPasswordRequest';
import { ValidateWeakPasswordResponse } from './model/ValidateWeakPasswordResponse';
import { WeakPasswordReq } from './model/WeakPasswordReq';

export class DdmClient {
    public static newBuilder(): ClientBuilder<DdmClient> {
            let client = new ClientBuilder<DdmClient>(newClient);
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
     * 变更内核版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更内核版本
     * @param {string} instanceId DDM实例ID。
     * @param {DatabaseVersionRequest} changeDatabaseVersionRequestBody 变更内核版本请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeDatabaseVersion(changeDatabaseVersionRequest?: ChangeDatabaseVersionRequest): Promise<ChangeDatabaseVersionResponse> {
        const options = ParamCreater().changeDatabaseVersion(changeDatabaseVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可变更内核版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可变更内核版本
     * @param {string} instanceId DDM实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabaseAvailableVersions(listDatabaseAvailableVersionsRequest?: ListDatabaseAvailableVersionsRequest): Promise<ListDatabaseAvailableVersionsResponse> {
        const options = ParamCreater().listDatabaseAvailableVersions(listDatabaseAvailableVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取参数模板列表，包括所有DDM的默认参数模板和用户创建的参数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取参数模板列表
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0。取值必须为数字，且不能为负数。
     * @param {number} [limit] 查询个数上限值。取值范围：1~128。不传该参数时，默认值为10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDdmConfigurations(listDdmConfigurationsRequest?: ListDdmConfigurationsRequest): Promise<ListDdmConfigurationsResponse> {
        const options = ParamCreater().listDdmConfigurations(listDdmConfigurationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 回滚内核版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 回滚内核版本
     * @param {string} instanceId DDM实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rollBackDatabaseVersion(rollBackDatabaseVersionRequest?: RollBackDatabaseVersionRequest): Promise<RollBackDatabaseVersionResponse> {
        const options = ParamCreater().rollBackDatabaseVersion(rollBackDatabaseVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定参数模板的参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定参数模板的参数
     * @param {string} configId 参数模板ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConfiguration(showConfigurationRequest?: ShowConfigurationRequest): Promise<ShowConfigurationResponse> {
        const options = ParamCreater().showConfiguration(showConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 内核版本风险提醒
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 内核版本风险提醒
     * @param {string} instanceId DDM实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRiskInfo(showRiskInfoRequest?: ShowRiskInfoRequest): Promise<ShowRiskInfoResponse> {
        const options = ParamCreater().showRiskInfo(showRiskInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询API版本列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersion(listApiVersionRequest?: ListApiVersionRequest): Promise<ListApiVersionResponse> {
        const options = ParamCreater().listApiVersion();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建DDM逻辑库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建DDM逻辑库
     * @param {string} instanceId DDM实例ID
     * @param {CreateDatabaseReq} createDatabaseReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDatabase(createDatabaseRequest?: CreateDatabaseRequest): Promise<CreateDatabaseResponse> {
        const options = ParamCreater().createDatabase(createDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建DDM逻辑库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建DDM逻辑库
     * @param {string} instanceId DDM实例ID
     * @param {CreateDdmDatabaseRequestBody} [createDdmDatabaseRequestBody] 创建逻辑库请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDdmDatabase(createDdmDatabaseRequest?: CreateDdmDatabaseRequest): Promise<CreateDdmDatabaseResponse> {
        const options = ParamCreater().createDdmDatabase(createDdmDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建组
     * @param {string} instanceId DDM实例ID
     * @param {CreateGroupRequestBody} createGroupRequestBody 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGroup(createGroupRequest?: CreateGroupRequest): Promise<CreateGroupResponse> {
        const options = ParamCreater().createGroup(createGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一个DDM实例。
     * 
     * DDM运行于虚拟私有云。申请DDM实例前，需保证有可用的虚拟私有云，并且已配置好子网与安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 购买DDM实例
     * @param {CreateInstanceReq} createInstanceReq This is a auto create Body Object
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
     * DDM帐号用于连接和管理逻辑库。一个DDM实例最多能创建100个DDM帐号，一个DDM帐号可以关联多个逻辑库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建DDM帐号
     * @param {string} instanceId DDM实例ID。
     * @param {CreateUsersReq} createUsersReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUsers(createUsersRequest?: CreateUsersRequest): Promise<CreateUsersResponse> {
        const options = ParamCreater().createUsers(createUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的逻辑库，释放该逻辑库的所有资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除DDM逻辑库
     * @param {string} instanceId DDM实例ID。
     * @param {string} ddmDbname 需要查询的逻辑库名称，不区分大小写。
     * @param {'true' | 'false'} [deleteRdsData] 是否同时删除关联后端数据库实例上存储的数据。 - 取值为“true”：删除。 - 取值为空或“false”：不删除。 默认值为空。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDatabase(deleteDatabaseRequest?: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse> {
        const options = ParamCreater().deleteDatabase(deleteDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的逻辑库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除逻辑库
     * @param {string} instanceId DDM实例ID。
     * @param {string} databaseName 逻辑库名称。
     * @param {boolean} deleteDnData 是否同时删除关联后端数据库实例上存储的数据。 - 取值为true：删除。 - 取值为false：不删除。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDdmDatabase(deleteDdmDatabaseRequest?: DeleteDdmDatabaseRequest): Promise<DeleteDdmDatabaseResponse> {
        const options = ParamCreater().deleteDdmDatabase(deleteDdmDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的DDM实例，释放该实例的所有资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除DDM实例
     * @param {string} instanceId DDM实例ID。
     * @param {boolean} [deleteDnData] 是否同时删除关联后端数据库实例上存储的数据。  - 取值true：删除。 - 取值为空或false：不删除。 默认值为空。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDdmInstance(deleteDdmInstanceRequest?: DeleteDdmInstanceRequest): Promise<DeleteDdmInstanceResponse> {
        const options = ParamCreater().deleteDdmInstance(deleteDdmInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的DDM实例，释放该实例的所有资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除DDM实例
     * @param {string} instanceId DDM实例ID。
     * @param {'true' | 'false'} [deleteRdsData] 是否同时删除关联后端数据库实例上存储的数据。  - 取值为空或“true”：删除。 - 取值为“false”：不删除。 默认值为空。
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
     * 删除指定的DDM实例帐号，如果帐号关联了逻辑库，则对应的关联关系也会删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除DDM帐号
     * @param {string} instanceId DDM实例ID。
     * @param {string} username 要删除的DDM帐号名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteUser(deleteUserRequest?: DeleteUserRequest): Promise<DeleteUserResponse> {
        const options = ParamCreater().deleteUser(deleteUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * kill逻辑会话
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary kill逻辑会话
     * @param {string} instanceId DDM实例ID。
     * @param {KillProcessesOpenRequest} executeKillLogicalProcessesRequestBody kill逻辑会话请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeKillLogicalProcesses(executeKillLogicalProcessesRequest?: ExecuteKillLogicalProcessesRequest): Promise<ExecuteKillLogicalProcessesResponse> {
        const options = ParamCreater().executeKillLogicalProcesses(executeKillLogicalProcessesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * kill物理会话
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary kill物理会话
     * @param {string} instanceId 关联RDS的ID。
     * @param {KillProcessesOpenRequest} executeKillPhysicalProcessesRequestBody DemoInfo object that needs to be created
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeKillPhysicalProcesses(executeKillPhysicalProcessesRequest?: ExecuteKillPhysicalProcessesRequest): Promise<ExecuteKillPhysicalProcessesResponse> {
        const options = ParamCreater().executeKillPhysicalProcesses(executeKillPhysicalProcessesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对指定的DDM实例的节点个数进行扩容，支持按需实例与包周期实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary DDM实例节点扩容
     * @param {string} instanceId DDM实例ID
     * @param {ExpandDdmInstanceNodesRequestBody} expandDdmInstanceNodesRequestBody This is a auto enlarge Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandDdmInstanceNodes(expandDdmInstanceNodesRequest?: ExpandDdmInstanceNodesRequest): Promise<ExpandDdmInstanceNodesResponse> {
        const options = ParamCreater().expandDdmInstanceNodes(expandDdmInstanceNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对指定的DDM实例的节点个数进行扩容，支持按需实例与包周期实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary DDM实例节点扩容
     * @param {string} instanceId DDM实例ID
     * @param {EnlargeRequest} enlargeRequest This is a auto enlarge Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandInstanceNodes(expandInstanceNodesRequest?: ExpandInstanceNodesRequest): Promise<ExpandInstanceNodesResponse> {
        const options = ParamCreater().expandInstanceNodes(expandInstanceNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询创建逻辑库可选取的数据库实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询创建逻辑库可选取的数据库实例列表
     * @param {string} instanceId DDM实例ID
     * @param {number} [offset] 分页参数：起始值 [大于等于0] 。默认值是0。
     * @param {number} [limit] 分页参数：每页多少条 [大于0且小于等于1000]。默认值是128。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableRdsList(listAvailableRdsListRequest?: ListAvailableRdsListRequest): Promise<ListAvailableRdsListResponse> {
        const options = ParamCreater().listAvailableRdsList(listAvailableRdsListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DDM逻辑库列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDM逻辑库列表
     * @param {string} instanceId DDM实例ID
     * @param {number} [offset] 分页参数：起始值 [大于等于0] 。默认值是0。
     * @param {number} [limit] 分页参数：每页多少条 [大于0且小于等于128]。默认值是128。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDatabases(listDatabasesRequest?: ListDatabasesRequest): Promise<ListDatabasesResponse> {
        const options = ParamCreater().listDatabases(listDatabasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DDM引擎信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDM引擎信息
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0。取值必须为数字，且不能为负数。
     * @param {number} [limit] 查询个数上限值。取值范围：1~128。不传该参数时，默认值为10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDdmEngines(listDdmEnginesRequest?: ListDdmEnginesRequest): Promise<ListDdmEnginesResponse> {
        const options = ParamCreater().listDdmEngines(listDdmEnginesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DDM可用区规格信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDM可用区规格信息
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0。取值必须为数字，且不能为负数。
     * @param {number} [limit] 查询个数上限值。取值范围：1~128。不传该参数时，默认值为10。
     * @param {string} [engineId] 引擎ID,通过查询DDM引擎信息接口获取，引擎ID与引擎版本至少指定一个
     * @param {string} [engineVersion] 引擎版本,通过查询DDM引擎信息接口获取，引擎ID与引擎版本至少指定一个
     * @param {string} [availableZones] 可用区，多个用\&quot;,\&quot;分割，如cn-southwest-244a,cn-southwest-244b。请参见地区和终端节点(https://console.huaweicloud.com/apiexplorer/#/endpoint/DDM)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDdmFlavors(listDdmFlavorsRequest?: ListDdmFlavorsRequest): Promise<ListDdmFlavorsResponse> {
        const options = ParamCreater().listDdmFlavors(listDdmFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DDM引擎信息详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDM引擎信息
     * @param {number} [offset] 分页参数：起始值 [大于等于0] 。默认值是0。
     * @param {number} [limit] 分页参数：每页多少条 [大于0且小于等于128]。默认值是128。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEngines(listEnginesRequest?: ListEnginesRequest): Promise<ListEnginesResponse> {
        const options = ParamCreater().listEngines(listEnginesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DDM可用区规格信息详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDM可用区规格信息
     * @param {string} engineId 引擎id,通过查询DDM引擎信息接口获取。
     * @param {number} [offset] 分页参数：起始值 [大于等于0] 。默认值是0。
     * @param {number} [limit] 分页参数：每页多少条 [大于0且小于等于128]。默认值是128。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlavors(listFlavorsRequest?: ListFlavorsRequest): Promise<ListFlavorsResponse> {
        const options = ParamCreater().listFlavors(listFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实例组信息列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例组信息列表
     * @param {string} instanceId DDM实例ID。
     * @param {number} [offset] 分页参数：起始值 [大于等于0] 。默认值是0。
     * @param {number} [limit] 分页参数：每页多少条 [大于0且小于等于128]。默认值是10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGroup(listGroupRequest?: ListGroupRequest): Promise<ListGroupResponse> {
        const options = ParamCreater().listGroup(listGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DDM实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDM实例列表
     * @param {number} [offset] 分页参数：起始值 [大于等于0] 。默认值是0。
     * @param {number} [limit] 分页参数：每页多少条 [大于0且小于等于128]。默认值是10。
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
     * 查询DDM实例节点列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDM实例节点列表
     * @param {string} instanceId DDM实例ID
     * @param {number} [offset] 分页参数：起始值 [大于等于0] 。默认值是0。
     * @param {number} [limit] 分页参数：每页多少条 [大于0且小于等于128]。默认值是128。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNodes(listNodesRequest?: ListNodesRequest): Promise<ListNodesResponse> {
        const options = ParamCreater().listNodes(listNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定时间段内在DDM实例的读写次数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 读写比例监控
     * @param {string} instanceId DDM实例ID。
     * @param {string} curPage 分页参数：起始值 [大于等于0] 。
     * @param {string} perPage 分页参数：每页多少条。
     * @param {string} startDate 开始时间，UTC time，精确到毫秒。
     * @param {string} endDate 结束时间，UTC time，精确到毫秒。结束时间与开始时间，间隔不能超过1个月。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listReadWriteRatio(listReadWriteRatioRequest?: ListReadWriteRatioRequest): Promise<ListReadWriteRatioResponse> {
        const options = ParamCreater().listReadWriteRatio(listReadWriteRatioRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定时间段内在DDM实例上执行过的慢sql相关信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 慢日志监控
     * @param {string} instanceId DDM实例ID。
     * @param {string} curPage 分页参数：起始值 [大于等于1] 。
     * @param {string} perPage 分页参数：每页多少条。
     * @param {string} startDate 开始时间，UTC time，精确到毫秒。
     * @param {string} endDate 结束时间，UTC time，精确到毫秒。结束时间与开始时间，间隔不能超过7天。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSlowLog(listSlowLogRequest?: ListSlowLogRequest): Promise<ListSlowLogResponse> {
        const options = ParamCreater().listSlowLog(listSlowLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定时间段内在DDM实例上执行过的慢sql相关信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 慢日志监控
     * @param {string} instanceId DDM实例ID。
     * @param {string} startDate 开始时间，UTC time，精确到毫秒。
     * @param {string} endDate 结束时间，UTC time，精确到毫秒。结束时间与开始时间，间隔不能超过7天。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0。取值必须为数字，且不能为负数。
     * @param {number} [limit] 分页参数：每页多少条。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSlowLogs(listSlowLogsRequest?: ListSlowLogsRequest): Promise<ListSlowLogsResponse> {
        const options = ParamCreater().listSlowLogs(listSlowLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DDM帐号列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDM帐号列表
     * @param {string} instanceId DDM实例ID。
     * @param {number} [offset] 分页参数：起始值 [大于等于0] 。默认值是0。
     * @param {number} [limit] 分页参数：每页多少条 [大于0且小于等于128]。默认值是128。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUsers(listUsersRequest?: ListUsersRequest): Promise<ListUsersResponse> {
        const options = ParamCreater().listUsers(listUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * DDM实例跨region容灾场景下，针对目标DDM实例实现表数据reload，使数据同步。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary DDM表数据重载
     * @param {string} instanceId DDM实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rebuildConfig(rebuildConfigRequest?: RebuildConfigRequest): Promise<RebuildConfigResponse> {
        const options = ParamCreater().rebuildConfig(rebuildConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 首次调用时新建DDM管理员帐号并设置密码。后续调用时仅更新管理员密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary DDM管理员账号密码管理
     * @param {string} instanceId DDM实例ID。
     * @param {AdminUserInfoReq} adminUserInfoReq 管理用用户信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetAdministrator(resetAdministratorRequest?: ResetAdministratorRequest): Promise<ResetAdministratorResponse> {
        const options = ParamCreater().resetAdministrator(resetAdministratorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置现有DDM帐号的密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置DDM账号密码
     * @param {string} instanceId DDM实例ID。
     * @param {string} username 需要修改的DDM帐号名称。
     * @param {ResetUserPasswordReq} resetUserPasswordReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetUserPassword(resetUserPasswordRequest?: ResetUserPasswordRequest): Promise<ResetUserPasswordResponse> {
        const options = ParamCreater().resetUserPassword(resetUserPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更DDM实例规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更DDM实例规格
     * @param {string} instanceId DDM实例ID。
     * @param {ResizeFlavorReq} resizeFlavorReq 目标规格信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeFlavor(resizeFlavorRequest?: ResizeFlavorRequest): Promise<ResizeFlavorResponse> {
        const options = ParamCreater().resizeFlavor(resizeFlavorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启指定的DDM实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启DDM实例
     * @param {string} instanceId DDM实例ID
     * @param {RestartInstanceReq} restartInstanceReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartInstance(restartInstanceRequest?: RestartInstanceRequest): Promise<RestartInstanceResponse> {
        const options = ParamCreater().restartInstance(restartInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定逻辑库的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDM逻辑库详细信息
     * @param {string} instanceId DDM实例ID
     * @param {string} ddmDbname 需要查询的逻辑库名称，不区分大小写。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDatabase(showDatabaseRequest?: ShowDatabaseRequest): Promise<ShowDatabaseResponse> {
        const options = ParamCreater().showDatabase(showDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定ID的任务信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定ID的任务信息
     * @param {string} jobId 任务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDdmJobResult(showDdmJobResultRequest?: ShowDdmJobResultRequest): Promise<ShowDdmJobResultResponse> {
        const options = ParamCreater().showDdmJobResult(showDdmJobResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定DDM实例的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDM实例详情
     * @param {string} instanceId DDM实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstance(showInstanceRequest?: ShowInstanceRequest): Promise<ShowInstanceResponse> {
        const options = ParamCreater().showInstance(showInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DDM指定实例的参数详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDM指定实例的参数详情
     * @param {string} instanceId DDM实例ID
     * @param {number} [offset] 分页参数：起始值 [大于等于0] 。默认值是0。
     * @param {number} [limit] 分页参数：每页多少条 [大于0且小于等于128]。默认值是128。
     * @param {string} [xLanguage] 语种，默认中文。中文:zh-cn;英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceParam(showInstanceParamRequest?: ShowInstanceParamRequest): Promise<ShowInstanceParamResponse> {
        const options = ParamCreater().showInstanceParam(showInstanceParamRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询逻辑会话列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询逻辑会话列表
     * @param {string} instanceId DDM实例ID。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0。取值必须为数字，且不能为负数。
     * @param {number} [limit] 查询个数上限值。取值范围：1~128。不传该参数时，默认值为10。
     * @param {string} [keyword] 会话结果筛选关键字，支持返回结果全字段模糊匹配，长度最大255
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLogicalProcesses(showLogicalProcessesRequest?: ShowLogicalProcessesRequest): Promise<ShowLogicalProcessesResponse> {
        const options = ParamCreater().showLogicalProcesses(showLogicalProcessesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DDM实例节点详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DDM实例节点详情
     * @param {string} instanceId DDM实例ID
     * @param {string} nodeId DDM节点ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNode(showNodeRequest?: ShowNodeRequest): Promise<ShowNodeResponse> {
        const options = ParamCreater().showNode(showNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询物理会话列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询物理会话列表
     * @param {string} instanceId 关联RDS的ID。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0。取值必须为数字，且不能为负数。
     * @param {number} [limit] 查询个数上限值。取值范围：1~128。不传该参数时，默认值为10。
     * @param {string} [keyword] 会话结果筛选关键子，长度最大255
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPhysicalProcesses(showPhysicalProcessesRequest?: ShowPhysicalProcessesRequest): Promise<ShowPhysicalProcessesResponse> {
        const options = ParamCreater().showPhysicalProcesses(showPhysicalProcessesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询kill会话审计日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询kill会话审计日志
     * @param {string} instanceId DDM实例ID或关联RDS的ID。
     * @param {string} startTime 开始时间，UTC time，精确到毫秒。格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。
     * @param {string} endTime 结束时间，UTC time，精确到毫秒。格式为“yyyy-mm-ddThh:mm:ssZ”。其中，T指某个时间的开始；Z指时区偏移量，例如北京时间偏移显示为+0800。结束时间与开始时间，间隔不能超过7天。
     * @param {number} [offset] 索引位置，偏移量。从第一条数据偏移offset条数据后开始查询，默认为0。取值必须为数字，且不能为负数。
     * @param {number} [limit] 查询个数上限值。取值范围：1~128。不传该参数时，默认值为10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProcessesAuditLog(showProcessesAuditLogRequest?: ShowProcessesAuditLogRequest): Promise<ShowProcessesAuditLogResponse> {
        const options = ParamCreater().showProcessesAuditLog(showProcessesAuditLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对指定的DDM实例的节点个数进行缩容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary DDM实例节点缩容
     * @param {string} instanceId DDM实例ID
     * @param {ReduceRequest} reduceRequest This is a auto reduce Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public shrinkInstanceNodes(shrinkInstanceNodesRequest?: ShrinkInstanceNodesRequest): Promise<ShrinkInstanceNodesResponse> {
        const options = ParamCreater().shrinkInstanceNodes(shrinkInstanceNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为实例设置SSL数据加密。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为实例设置SSL数据加密
     * @param {string} instanceId DDM实例ID。
     * @param {SwitchSslOpenRequest} switchSslRequestBody 设置SSL开关请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchSsl(switchSslRequest?: SwitchSslRequest): Promise<SwitchSslResponse> {
        const options = ParamCreater().switchSsl(switchSslRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 同步当前DDM实例已关联的所有DN实例配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 同步DN信息
     * @param {string} instanceId DDM实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDatabaseInfo(updateDatabaseInfoRequest?: UpdateDatabaseInfoRequest): Promise<UpdateDatabaseInfoResponse> {
        const options = ParamCreater().updateDatabaseInfo(updateDatabaseInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改DDM实例名称。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改DDM实例名称
     * @param {string} instanceId DDM实例ID
     * @param {ModifyInstanceNameReq} modifyInstanceNameReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceName(updateInstanceNameRequest?: UpdateInstanceNameRequest): Promise<UpdateInstanceNameResponse> {
        const options = ParamCreater().updateInstanceName(updateInstanceNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改DDM实例参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改DDM实例参数
     * @param {string} instanceId DDM实例ID
     * @param {UpdateParametersReq} updateParametersReq This is a auto create Body Object
     * @param {string} [xLanguage] 语种，默认中文。中文:zh-cn;英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceParam(updateInstanceParamRequest?: UpdateInstanceParamRequest): Promise<UpdateInstanceParamResponse> {
        const options = ParamCreater().updateInstanceParam(updateInstanceParamRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例端口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例端口
     * @param {string} instanceId DDM实例ID。
     * @param {UpdatePortRequest} updateInstancePortRequestBody 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstancePort(updateInstancePortRequest?: UpdateInstancePortRequest): Promise<UpdateInstancePortResponse> {
        const options = ParamCreater().updateInstancePort(updateInstancePortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改DDM实例安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改DDM实例安全组
     * @param {string} instanceId DDM实例ID
     * @param {ModifyInstanceSecurityGroupReq} modifyInstanceSecurityGroupReq This is a auto create Body Object
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
     * 修改DDM已关联的数据库实例的读策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改DDM已关联的数据库实例的读策略
     * @param {string} instanceId DDM实例ID
     * @param {ModifyReadAndWriteStrategyReq} modifyReadAndWriteStrategyReq This is a auto read-write-strategy Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateReadAndWriteStrategy(updateReadAndWriteStrategyRequest?: UpdateReadAndWriteStrategyRequest): Promise<UpdateReadAndWriteStrategyResponse> {
        const options = ParamCreater().updateReadAndWriteStrategy(updateReadAndWriteStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改现有DDM帐号的权限或者与逻辑库的管理关系。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改DDM帐号
     * @param {string} instanceId DDM实例ID。
     * @param {string} username 需要修改的DDM帐号名称。
     * @param {UpdateUserReq} updateUserReq This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUser(updateUserRequest?: UpdateUserRequest): Promise<UpdateUserResponse> {
        const options = ParamCreater().updateUser(updateUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 弱密码校验
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 弱密码校验
     * @param {WeakPasswordReq} weakPasswordReq 弱密码请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateWeakPassword(validateWeakPasswordRequest?: ValidateWeakPasswordRequest): Promise<ValidateWeakPasswordResponse> {
        const options = ParamCreater().validateWeakPassword(validateWeakPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 变更内核版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeDatabaseVersion(changeDatabaseVersionRequest?: ChangeDatabaseVersionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/database-version/change-version",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (changeDatabaseVersionRequest !== null && changeDatabaseVersionRequest !== undefined) {
                if (changeDatabaseVersionRequest instanceof ChangeDatabaseVersionRequest) {
                    instanceId = changeDatabaseVersionRequest.instanceId;
                    body = changeDatabaseVersionRequest.body
                } else {
                    instanceId = changeDatabaseVersionRequest['instance_id'];
                    body = changeDatabaseVersionRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeDatabaseVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询可变更内核版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabaseAvailableVersions(listDatabaseAvailableVersionsRequest?: ListDatabaseAvailableVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/database-version/available-versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listDatabaseAvailableVersionsRequest !== null && listDatabaseAvailableVersionsRequest !== undefined) {
                if (listDatabaseAvailableVersionsRequest instanceof ListDatabaseAvailableVersionsRequest) {
                    instanceId = listDatabaseAvailableVersionsRequest.instanceId;
                } else {
                    instanceId = listDatabaseAvailableVersionsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDatabaseAvailableVersions.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取参数模板列表，包括所有DDM的默认参数模板和用户创建的参数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDdmConfigurations(listDdmConfigurationsRequest?: ListDdmConfigurationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listDdmConfigurationsRequest !== null && listDdmConfigurationsRequest !== undefined) {
                if (listDdmConfigurationsRequest instanceof ListDdmConfigurationsRequest) {
                    offset = listDdmConfigurationsRequest.offset;
                    limit = listDdmConfigurationsRequest.limit;
                } else {
                    offset = listDdmConfigurationsRequest['offset'];
                    limit = listDdmConfigurationsRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 回滚内核版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rollBackDatabaseVersion(rollBackDatabaseVersionRequest?: RollBackDatabaseVersionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/database-version/rollback-version",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (rollBackDatabaseVersionRequest !== null && rollBackDatabaseVersionRequest !== undefined) {
                if (rollBackDatabaseVersionRequest instanceof RollBackDatabaseVersionRequest) {
                    instanceId = rollBackDatabaseVersionRequest.instanceId;
                } else {
                    instanceId = rollBackDatabaseVersionRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling rollBackDatabaseVersion.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定参数模板的参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConfiguration(showConfigurationRequest?: ShowConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/configurations/{config_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let configId;

            if (showConfigurationRequest !== null && showConfigurationRequest !== undefined) {
                if (showConfigurationRequest instanceof ShowConfigurationRequest) {
                    configId = showConfigurationRequest.configId;
                } else {
                    configId = showConfigurationRequest['config_id'];
                }
            }

        
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling showConfiguration.');
            }

            options.pathParams = { 'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 内核版本风险提醒
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRiskInfo(showRiskInfoRequest?: ShowRiskInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/show-risk-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showRiskInfoRequest !== null && showRiskInfoRequest !== undefined) {
                if (showRiskInfoRequest instanceof ShowRiskInfoRequest) {
                    instanceId = showRiskInfoRequest.instanceId;
                } else {
                    instanceId = showRiskInfoRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showRiskInfo.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询API版本列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersion() {
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
         * 创建DDM逻辑库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatabase(createDatabaseRequest?: CreateDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/instances/{instance_id}/databases",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createDatabaseRequest !== null && createDatabaseRequest !== undefined) {
                if (createDatabaseRequest instanceof CreateDatabaseRequest) {
                    instanceId = createDatabaseRequest.instanceId;
                    body = createDatabaseRequest.body
                } else {
                    instanceId = createDatabaseRequest['instance_id'];
                    body = createDatabaseRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDatabase.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建DDM逻辑库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDdmDatabase(createDdmDatabaseRequest?: CreateDdmDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/databases",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createDdmDatabaseRequest !== null && createDdmDatabaseRequest !== undefined) {
                if (createDdmDatabaseRequest instanceof CreateDdmDatabaseRequest) {
                    instanceId = createDdmDatabaseRequest.instanceId;
                    body = createDdmDatabaseRequest.body
                } else {
                    instanceId = createDdmDatabaseRequest['instance_id'];
                    body = createDdmDatabaseRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createDdmDatabase.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGroup(createGroupRequest?: CreateGroupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/groups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createGroupRequest !== null && createGroupRequest !== undefined) {
                if (createGroupRequest instanceof CreateGroupRequest) {
                    instanceId = createGroupRequest.instanceId;
                    body = createGroupRequest.body
                } else {
                    instanceId = createGroupRequest['instance_id'];
                    body = createGroupRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一个DDM实例。
         * 
         * DDM运行于虚拟私有云。申请DDM实例前，需保证有可用的虚拟私有云，并且已配置好子网与安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstance(createInstanceRequest?: CreateInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/instances",
                contentType: "application/json;charset=UTF-8",
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * DDM帐号用于连接和管理逻辑库。一个DDM实例最多能创建100个DDM帐号，一个DDM帐号可以关联多个逻辑库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createUsers(createUsersRequest?: CreateUsersRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/instances/{instance_id}/users",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createUsersRequest !== null && createUsersRequest !== undefined) {
                if (createUsersRequest instanceof CreateUsersRequest) {
                    instanceId = createUsersRequest.instanceId;
                    body = createUsersRequest.body
                } else {
                    instanceId = createUsersRequest['instance_id'];
                    body = createUsersRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createUsers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的逻辑库，释放该逻辑库的所有资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDatabase(deleteDatabaseRequest?: DeleteDatabaseRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/instances/{instance_id}/databases/{ddm_dbname}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let ddmDbname;
            
            let deleteRdsData;

            if (deleteDatabaseRequest !== null && deleteDatabaseRequest !== undefined) {
                if (deleteDatabaseRequest instanceof DeleteDatabaseRequest) {
                    instanceId = deleteDatabaseRequest.instanceId;
                    ddmDbname = deleteDatabaseRequest.ddmDbname;
                    deleteRdsData = deleteDatabaseRequest.deleteRdsData;
                } else {
                    instanceId = deleteDatabaseRequest['instance_id'];
                    ddmDbname = deleteDatabaseRequest['ddm_dbname'];
                    deleteRdsData = deleteDatabaseRequest['delete_rds_data'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDatabase.');
            }
            if (ddmDbname === null || ddmDbname === undefined) {
            throw new RequiredError('ddmDbname','Required parameter ddmDbname was null or undefined when calling deleteDatabase.');
            }
            if (deleteRdsData !== null && deleteRdsData !== undefined) {
                localVarQueryParameter['delete_rds_data'] = deleteRdsData;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'ddm_dbname': ddmDbname, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的逻辑库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDdmDatabase(deleteDdmDatabaseRequest?: DeleteDdmDatabaseRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/databases/{database_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let databaseName;
            
            let deleteDnData;

            if (deleteDdmDatabaseRequest !== null && deleteDdmDatabaseRequest !== undefined) {
                if (deleteDdmDatabaseRequest instanceof DeleteDdmDatabaseRequest) {
                    instanceId = deleteDdmDatabaseRequest.instanceId;
                    databaseName = deleteDdmDatabaseRequest.databaseName;
                    deleteDnData = deleteDdmDatabaseRequest.deleteDnData;
                } else {
                    instanceId = deleteDdmDatabaseRequest['instance_id'];
                    databaseName = deleteDdmDatabaseRequest['database_name'];
                    deleteDnData = deleteDdmDatabaseRequest['delete_dn_data'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDdmDatabase.');
            }
            if (databaseName === null || databaseName === undefined) {
            throw new RequiredError('databaseName','Required parameter databaseName was null or undefined when calling deleteDdmDatabase.');
            }
            if (deleteDnData === null || deleteDnData === undefined) {
                throw new RequiredError('deleteDnData','Required parameter deleteDnData was null or undefined when calling deleteDdmDatabase.');
            }
            if (deleteDnData !== null && deleteDnData !== undefined) {
                localVarQueryParameter['delete_dn_data'] = deleteDnData;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'database_name': databaseName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的DDM实例，释放该实例的所有资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDdmInstance(deleteDdmInstanceRequest?: DeleteDdmInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let deleteDnData;

            if (deleteDdmInstanceRequest !== null && deleteDdmInstanceRequest !== undefined) {
                if (deleteDdmInstanceRequest instanceof DeleteDdmInstanceRequest) {
                    instanceId = deleteDdmInstanceRequest.instanceId;
                    deleteDnData = deleteDdmInstanceRequest.deleteDnData;
                } else {
                    instanceId = deleteDdmInstanceRequest['instance_id'];
                    deleteDnData = deleteDdmInstanceRequest['delete_dn_data'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDdmInstance.');
            }
            if (deleteDnData !== null && deleteDnData !== undefined) {
                localVarQueryParameter['delete_dn_data'] = deleteDnData;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的DDM实例，释放该实例的所有资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let deleteRdsData;

            if (deleteInstanceRequest !== null && deleteInstanceRequest !== undefined) {
                if (deleteInstanceRequest instanceof DeleteInstanceRequest) {
                    instanceId = deleteInstanceRequest.instanceId;
                    deleteRdsData = deleteInstanceRequest.deleteRdsData;
                } else {
                    instanceId = deleteInstanceRequest['instance_id'];
                    deleteRdsData = deleteInstanceRequest['delete_rds_data'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstance.');
            }
            if (deleteRdsData !== null && deleteRdsData !== undefined) {
                localVarQueryParameter['delete_rds_data'] = deleteRdsData;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的DDM实例帐号，如果帐号关联了逻辑库，则对应的关联关系也会删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteUser(deleteUserRequest?: DeleteUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/instances/{instance_id}/users/{username}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let username;

            if (deleteUserRequest !== null && deleteUserRequest !== undefined) {
                if (deleteUserRequest instanceof DeleteUserRequest) {
                    instanceId = deleteUserRequest.instanceId;
                    username = deleteUserRequest.username;
                } else {
                    instanceId = deleteUserRequest['instance_id'];
                    username = deleteUserRequest['username'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteUser.');
            }
            if (username === null || username === undefined) {
            throw new RequiredError('username','Required parameter username was null or undefined when calling deleteUser.');
            }

            options.pathParams = { 'instance_id': instanceId,'username': username, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * kill逻辑会话
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeKillLogicalProcesses(executeKillLogicalProcessesRequest?: ExecuteKillLogicalProcessesRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/logical-processes",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (executeKillLogicalProcessesRequest !== null && executeKillLogicalProcessesRequest !== undefined) {
                if (executeKillLogicalProcessesRequest instanceof ExecuteKillLogicalProcessesRequest) {
                    instanceId = executeKillLogicalProcessesRequest.instanceId;
                    body = executeKillLogicalProcessesRequest.body
                } else {
                    instanceId = executeKillLogicalProcessesRequest['instance_id'];
                    body = executeKillLogicalProcessesRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeKillLogicalProcesses.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * kill物理会话
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeKillPhysicalProcesses(executeKillPhysicalProcessesRequest?: ExecuteKillPhysicalProcessesRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/instances/{instance_id}/physical-processes",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (executeKillPhysicalProcessesRequest !== null && executeKillPhysicalProcessesRequest !== undefined) {
                if (executeKillPhysicalProcessesRequest instanceof ExecuteKillPhysicalProcessesRequest) {
                    instanceId = executeKillPhysicalProcessesRequest.instanceId;
                    body = executeKillPhysicalProcessesRequest.body
                } else {
                    instanceId = executeKillPhysicalProcessesRequest['instance_id'];
                    body = executeKillPhysicalProcessesRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeKillPhysicalProcesses.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对指定的DDM实例的节点个数进行扩容，支持按需实例与包周期实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandDdmInstanceNodes(expandDdmInstanceNodesRequest?: ExpandDdmInstanceNodesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/nodes",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (expandDdmInstanceNodesRequest !== null && expandDdmInstanceNodesRequest !== undefined) {
                if (expandDdmInstanceNodesRequest instanceof ExpandDdmInstanceNodesRequest) {
                    instanceId = expandDdmInstanceNodesRequest.instanceId;
                    body = expandDdmInstanceNodesRequest.body
                } else {
                    instanceId = expandDdmInstanceNodesRequest['instance_id'];
                    body = expandDdmInstanceNodesRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling expandDdmInstanceNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对指定的DDM实例的节点个数进行扩容，支持按需实例与包周期实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandInstanceNodes(expandInstanceNodesRequest?: ExpandInstanceNodesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/action/enlarge",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (expandInstanceNodesRequest !== null && expandInstanceNodesRequest !== undefined) {
                if (expandInstanceNodesRequest instanceof ExpandInstanceNodesRequest) {
                    instanceId = expandInstanceNodesRequest.instanceId;
                    body = expandInstanceNodesRequest.body
                } else {
                    instanceId = expandInstanceNodesRequest['instance_id'];
                    body = expandInstanceNodesRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling expandInstanceNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询创建逻辑库可选取的数据库实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailableRdsList(listAvailableRdsListRequest?: ListAvailableRdsListRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/instances/{instance_id}/rds",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;

            if (listAvailableRdsListRequest !== null && listAvailableRdsListRequest !== undefined) {
                if (listAvailableRdsListRequest instanceof ListAvailableRdsListRequest) {
                    instanceId = listAvailableRdsListRequest.instanceId;
                    offset = listAvailableRdsListRequest.offset;
                    limit = listAvailableRdsListRequest.limit;
                } else {
                    instanceId = listAvailableRdsListRequest['instance_id'];
                    offset = listAvailableRdsListRequest['offset'];
                    limit = listAvailableRdsListRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAvailableRdsList.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DDM逻辑库列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDatabases(listDatabasesRequest?: ListDatabasesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/instances/{instance_id}/databases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;

            if (listDatabasesRequest !== null && listDatabasesRequest !== undefined) {
                if (listDatabasesRequest instanceof ListDatabasesRequest) {
                    instanceId = listDatabasesRequest.instanceId;
                    offset = listDatabasesRequest.offset;
                    limit = listDatabasesRequest.limit;
                } else {
                    instanceId = listDatabasesRequest['instance_id'];
                    offset = listDatabasesRequest['offset'];
                    limit = listDatabasesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDatabases.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DDM引擎信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDdmEngines(listDdmEnginesRequest?: ListDdmEnginesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/engines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listDdmEnginesRequest !== null && listDdmEnginesRequest !== undefined) {
                if (listDdmEnginesRequest instanceof ListDdmEnginesRequest) {
                    offset = listDdmEnginesRequest.offset;
                    limit = listDdmEnginesRequest.limit;
                } else {
                    offset = listDdmEnginesRequest['offset'];
                    limit = listDdmEnginesRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DDM可用区规格信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDdmFlavors(listDdmFlavorsRequest?: ListDdmFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let engineId;
            
            let engineVersion;
            
            let availableZones;

            if (listDdmFlavorsRequest !== null && listDdmFlavorsRequest !== undefined) {
                if (listDdmFlavorsRequest instanceof ListDdmFlavorsRequest) {
                    offset = listDdmFlavorsRequest.offset;
                    limit = listDdmFlavorsRequest.limit;
                    engineId = listDdmFlavorsRequest.engineId;
                    engineVersion = listDdmFlavorsRequest.engineVersion;
                    availableZones = listDdmFlavorsRequest.availableZones;
                } else {
                    offset = listDdmFlavorsRequest['offset'];
                    limit = listDdmFlavorsRequest['limit'];
                    engineId = listDdmFlavorsRequest['engine_id'];
                    engineVersion = listDdmFlavorsRequest['engine_version'];
                    availableZones = listDdmFlavorsRequest['available_zones'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (engineId !== null && engineId !== undefined) {
                localVarQueryParameter['engine_id'] = engineId;
            }
            if (engineVersion !== null && engineVersion !== undefined) {
                localVarQueryParameter['engine_version'] = engineVersion;
            }
            if (availableZones !== null && availableZones !== undefined) {
                localVarQueryParameter['available_zones'] = availableZones;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DDM引擎信息详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEngines(listEnginesRequest?: ListEnginesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/engines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listEnginesRequest !== null && listEnginesRequest !== undefined) {
                if (listEnginesRequest instanceof ListEnginesRequest) {
                    offset = listEnginesRequest.offset;
                    limit = listEnginesRequest.limit;
                } else {
                    offset = listEnginesRequest['offset'];
                    limit = listEnginesRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DDM可用区规格信息详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavors(listFlavorsRequest?: ListFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let engineId;
            
            let offset;
            
            let limit;

            if (listFlavorsRequest !== null && listFlavorsRequest !== undefined) {
                if (listFlavorsRequest instanceof ListFlavorsRequest) {
                    engineId = listFlavorsRequest.engineId;
                    offset = listFlavorsRequest.offset;
                    limit = listFlavorsRequest.limit;
                } else {
                    engineId = listFlavorsRequest['engine_id'];
                    offset = listFlavorsRequest['offset'];
                    limit = listFlavorsRequest['limit'];
                }
            }

        
            if (engineId === null || engineId === undefined) {
                throw new RequiredError('engineId','Required parameter engineId was null or undefined when calling listFlavors.');
            }
            if (engineId !== null && engineId !== undefined) {
                localVarQueryParameter['engine_id'] = engineId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实例组信息列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGroup(listGroupRequest?: ListGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;

            if (listGroupRequest !== null && listGroupRequest !== undefined) {
                if (listGroupRequest instanceof ListGroupRequest) {
                    instanceId = listGroupRequest.instanceId;
                    offset = listGroupRequest.offset;
                    limit = listGroupRequest.limit;
                } else {
                    instanceId = listGroupRequest['instance_id'];
                    offset = listGroupRequest['offset'];
                    limit = listGroupRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listGroup.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DDM实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstances(listInstancesRequest?: ListInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    offset = listInstancesRequest.offset;
                    limit = listInstancesRequest.limit;
                } else {
                    offset = listInstancesRequest['offset'];
                    limit = listInstancesRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DDM实例节点列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNodes(listNodesRequest?: ListNodesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/instances/{instance_id}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;

            if (listNodesRequest !== null && listNodesRequest !== undefined) {
                if (listNodesRequest instanceof ListNodesRequest) {
                    instanceId = listNodesRequest.instanceId;
                    offset = listNodesRequest.offset;
                    limit = listNodesRequest.limit;
                } else {
                    instanceId = listNodesRequest['instance_id'];
                    offset = listNodesRequest['offset'];
                    limit = listNodesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listNodes.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定时间段内在DDM实例的读写次数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listReadWriteRatio(listReadWriteRatioRequest?: ListReadWriteRatioRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/read-write-ratio",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let curPage;
            
            let perPage;
            
            let startDate;
            
            let endDate;

            if (listReadWriteRatioRequest !== null && listReadWriteRatioRequest !== undefined) {
                if (listReadWriteRatioRequest instanceof ListReadWriteRatioRequest) {
                    instanceId = listReadWriteRatioRequest.instanceId;
                    curPage = listReadWriteRatioRequest.curPage;
                    perPage = listReadWriteRatioRequest.perPage;
                    startDate = listReadWriteRatioRequest.startDate;
                    endDate = listReadWriteRatioRequest.endDate;
                } else {
                    instanceId = listReadWriteRatioRequest['instance_id'];
                    curPage = listReadWriteRatioRequest['curPage'];
                    perPage = listReadWriteRatioRequest['perPage'];
                    startDate = listReadWriteRatioRequest['startDate'];
                    endDate = listReadWriteRatioRequest['endDate'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listReadWriteRatio.');
            }
            if (curPage === null || curPage === undefined) {
                throw new RequiredError('curPage','Required parameter curPage was null or undefined when calling listReadWriteRatio.');
            }
            if (curPage !== null && curPage !== undefined) {
                localVarQueryParameter['curPage'] = curPage;
            }
            if (perPage === null || perPage === undefined) {
                throw new RequiredError('perPage','Required parameter perPage was null or undefined when calling listReadWriteRatio.');
            }
            if (perPage !== null && perPage !== undefined) {
                localVarQueryParameter['perPage'] = perPage;
            }
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling listReadWriteRatio.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['startDate'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling listReadWriteRatio.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['endDate'] = endDate;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定时间段内在DDM实例上执行过的慢sql相关信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSlowLog(listSlowLogRequest?: ListSlowLogRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/slowlog",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let curPage;
            
            let perPage;
            
            let startDate;
            
            let endDate;

            if (listSlowLogRequest !== null && listSlowLogRequest !== undefined) {
                if (listSlowLogRequest instanceof ListSlowLogRequest) {
                    instanceId = listSlowLogRequest.instanceId;
                    curPage = listSlowLogRequest.curPage;
                    perPage = listSlowLogRequest.perPage;
                    startDate = listSlowLogRequest.startDate;
                    endDate = listSlowLogRequest.endDate;
                } else {
                    instanceId = listSlowLogRequest['instance_id'];
                    curPage = listSlowLogRequest['curPage'];
                    perPage = listSlowLogRequest['perPage'];
                    startDate = listSlowLogRequest['startDate'];
                    endDate = listSlowLogRequest['endDate'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSlowLog.');
            }
            if (curPage === null || curPage === undefined) {
                throw new RequiredError('curPage','Required parameter curPage was null or undefined when calling listSlowLog.');
            }
            if (curPage !== null && curPage !== undefined) {
                localVarQueryParameter['curPage'] = curPage;
            }
            if (perPage === null || perPage === undefined) {
                throw new RequiredError('perPage','Required parameter perPage was null or undefined when calling listSlowLog.');
            }
            if (perPage !== null && perPage !== undefined) {
                localVarQueryParameter['perPage'] = perPage;
            }
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling listSlowLog.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['startDate'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling listSlowLog.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['endDate'] = endDate;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定时间段内在DDM实例上执行过的慢sql相关信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSlowLogs(listSlowLogsRequest?: ListSlowLogsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/slow-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let startDate;
            
            let endDate;
            
            let offset;
            
            let limit;

            if (listSlowLogsRequest !== null && listSlowLogsRequest !== undefined) {
                if (listSlowLogsRequest instanceof ListSlowLogsRequest) {
                    instanceId = listSlowLogsRequest.instanceId;
                    startDate = listSlowLogsRequest.startDate;
                    endDate = listSlowLogsRequest.endDate;
                    offset = listSlowLogsRequest.offset;
                    limit = listSlowLogsRequest.limit;
                } else {
                    instanceId = listSlowLogsRequest['instance_id'];
                    startDate = listSlowLogsRequest['start_date'];
                    endDate = listSlowLogsRequest['end_date'];
                    offset = listSlowLogsRequest['offset'];
                    limit = listSlowLogsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSlowLogs.');
            }
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling listSlowLogs.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling listSlowLogs.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DDM帐号列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUsers(listUsersRequest?: ListUsersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/instances/{instance_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;

            if (listUsersRequest !== null && listUsersRequest !== undefined) {
                if (listUsersRequest instanceof ListUsersRequest) {
                    instanceId = listUsersRequest.instanceId;
                    offset = listUsersRequest.offset;
                    limit = listUsersRequest.limit;
                } else {
                    instanceId = listUsersRequest['instance_id'];
                    offset = listUsersRequest['offset'];
                    limit = listUsersRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listUsers.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * DDM实例跨region容灾场景下，针对目标DDM实例实现表数据reload，使数据同步。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rebuildConfig(rebuildConfigRequest?: RebuildConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/instances/{instance_id}/reload-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (rebuildConfigRequest !== null && rebuildConfigRequest !== undefined) {
                if (rebuildConfigRequest instanceof RebuildConfigRequest) {
                    instanceId = rebuildConfigRequest.instanceId;
                } else {
                    instanceId = rebuildConfigRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling rebuildConfig.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 首次调用时新建DDM管理员帐号并设置密码。后续调用时仅更新管理员密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetAdministrator(resetAdministratorRequest?: ResetAdministratorRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/admin-user",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resetAdministratorRequest !== null && resetAdministratorRequest !== undefined) {
                if (resetAdministratorRequest instanceof ResetAdministratorRequest) {
                    instanceId = resetAdministratorRequest.instanceId;
                    body = resetAdministratorRequest.body
                } else {
                    instanceId = resetAdministratorRequest['instance_id'];
                    body = resetAdministratorRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetAdministrator.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置现有DDM帐号的密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetUserPassword(resetUserPasswordRequest?: ResetUserPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/users/{username}/password",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let username;

            if (resetUserPasswordRequest !== null && resetUserPasswordRequest !== undefined) {
                if (resetUserPasswordRequest instanceof ResetUserPasswordRequest) {
                    instanceId = resetUserPasswordRequest.instanceId;
                    username = resetUserPasswordRequest.username;
                    body = resetUserPasswordRequest.body
                } else {
                    instanceId = resetUserPasswordRequest['instance_id'];
                    username = resetUserPasswordRequest['username'];
                    body = resetUserPasswordRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resetUserPassword.');
            }
            if (username === null || username === undefined) {
            throw new RequiredError('username','Required parameter username was null or undefined when calling resetUserPassword.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'username': username, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 变更DDM实例规格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeFlavor(resizeFlavorRequest?: ResizeFlavorRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/flavor",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (resizeFlavorRequest !== null && resizeFlavorRequest !== undefined) {
                if (resizeFlavorRequest instanceof ResizeFlavorRequest) {
                    instanceId = resizeFlavorRequest.instanceId;
                    body = resizeFlavorRequest.body
                } else {
                    instanceId = resizeFlavorRequest['instance_id'];
                    body = resizeFlavorRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resizeFlavor.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重启指定的DDM实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartInstance(restartInstanceRequest?: RestartInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/instances/{instance_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (restartInstanceRequest !== null && restartInstanceRequest !== undefined) {
                if (restartInstanceRequest instanceof RestartInstanceRequest) {
                    instanceId = restartInstanceRequest.instanceId;
                    body = restartInstanceRequest.body
                } else {
                    instanceId = restartInstanceRequest['instance_id'];
                    body = restartInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling restartInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定逻辑库的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDatabase(showDatabaseRequest?: ShowDatabaseRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/instances/{instance_id}/databases/{ddm_dbname}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let ddmDbname;

            if (showDatabaseRequest !== null && showDatabaseRequest !== undefined) {
                if (showDatabaseRequest instanceof ShowDatabaseRequest) {
                    instanceId = showDatabaseRequest.instanceId;
                    ddmDbname = showDatabaseRequest.ddmDbname;
                } else {
                    instanceId = showDatabaseRequest['instance_id'];
                    ddmDbname = showDatabaseRequest['ddm_dbname'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDatabase.');
            }
            if (ddmDbname === null || ddmDbname === undefined) {
            throw new RequiredError('ddmDbname','Required parameter ddmDbname was null or undefined when calling showDatabase.');
            }

            options.pathParams = { 'instance_id': instanceId,'ddm_dbname': ddmDbname, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定ID的任务信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDdmJobResult(showDdmJobResultRequest?: ShowDdmJobResultRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showDdmJobResultRequest !== null && showDdmJobResultRequest !== undefined) {
                if (showDdmJobResultRequest instanceof ShowDdmJobResultRequest) {
                    jobId = showDdmJobResultRequest.jobId;
                } else {
                    jobId = showDdmJobResultRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showDdmJobResult.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定DDM实例的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstance(showInstanceRequest?: ShowInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showInstanceRequest !== null && showInstanceRequest !== undefined) {
                if (showInstanceRequest instanceof ShowInstanceRequest) {
                    instanceId = showInstanceRequest.instanceId;
                } else {
                    instanceId = showInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DDM指定实例的参数详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceParam(showInstanceParamRequest?: ShowInstanceParamRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;
            
            let xLanguage;

            if (showInstanceParamRequest !== null && showInstanceParamRequest !== undefined) {
                if (showInstanceParamRequest instanceof ShowInstanceParamRequest) {
                    instanceId = showInstanceParamRequest.instanceId;
                    offset = showInstanceParamRequest.offset;
                    limit = showInstanceParamRequest.limit;
                    xLanguage = showInstanceParamRequest.xLanguage;
                } else {
                    instanceId = showInstanceParamRequest['instance_id'];
                    offset = showInstanceParamRequest['offset'];
                    limit = showInstanceParamRequest['limit'];
                    xLanguage = showInstanceParamRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceParam.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询逻辑会话列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLogicalProcesses(showLogicalProcessesRequest?: ShowLogicalProcessesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/logical-processes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;
            
            let keyword;

            if (showLogicalProcessesRequest !== null && showLogicalProcessesRequest !== undefined) {
                if (showLogicalProcessesRequest instanceof ShowLogicalProcessesRequest) {
                    instanceId = showLogicalProcessesRequest.instanceId;
                    offset = showLogicalProcessesRequest.offset;
                    limit = showLogicalProcessesRequest.limit;
                    keyword = showLogicalProcessesRequest.keyword;
                } else {
                    instanceId = showLogicalProcessesRequest['instance_id'];
                    offset = showLogicalProcessesRequest['offset'];
                    limit = showLogicalProcessesRequest['limit'];
                    keyword = showLogicalProcessesRequest['keyword'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showLogicalProcesses.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DDM实例节点详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNode(showNodeRequest?: ShowNodeRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/instances/{instance_id}/nodes/{node_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let nodeId;

            if (showNodeRequest !== null && showNodeRequest !== undefined) {
                if (showNodeRequest instanceof ShowNodeRequest) {
                    instanceId = showNodeRequest.instanceId;
                    nodeId = showNodeRequest.nodeId;
                } else {
                    instanceId = showNodeRequest['instance_id'];
                    nodeId = showNodeRequest['node_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showNode.');
            }
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling showNode.');
            }

            options.pathParams = { 'instance_id': instanceId,'node_id': nodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询物理会话列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPhysicalProcesses(showPhysicalProcessesRequest?: ShowPhysicalProcessesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/physical-processes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let offset;
            
            let limit;
            
            let keyword;

            if (showPhysicalProcessesRequest !== null && showPhysicalProcessesRequest !== undefined) {
                if (showPhysicalProcessesRequest instanceof ShowPhysicalProcessesRequest) {
                    instanceId = showPhysicalProcessesRequest.instanceId;
                    offset = showPhysicalProcessesRequest.offset;
                    limit = showPhysicalProcessesRequest.limit;
                    keyword = showPhysicalProcessesRequest.keyword;
                } else {
                    instanceId = showPhysicalProcessesRequest['instance_id'];
                    offset = showPhysicalProcessesRequest['offset'];
                    limit = showPhysicalProcessesRequest['limit'];
                    keyword = showPhysicalProcessesRequest['keyword'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showPhysicalProcesses.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询kill会话审计日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProcessesAuditLog(showProcessesAuditLogRequest?: ShowProcessesAuditLogRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/instances/{instance_id}/processes-audit-log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let startTime;
            
            let endTime;
            
            let offset;
            
            let limit;

            if (showProcessesAuditLogRequest !== null && showProcessesAuditLogRequest !== undefined) {
                if (showProcessesAuditLogRequest instanceof ShowProcessesAuditLogRequest) {
                    instanceId = showProcessesAuditLogRequest.instanceId;
                    startTime = showProcessesAuditLogRequest.startTime;
                    endTime = showProcessesAuditLogRequest.endTime;
                    offset = showProcessesAuditLogRequest.offset;
                    limit = showProcessesAuditLogRequest.limit;
                } else {
                    instanceId = showProcessesAuditLogRequest['instance_id'];
                    startTime = showProcessesAuditLogRequest['start_time'];
                    endTime = showProcessesAuditLogRequest['end_time'];
                    offset = showProcessesAuditLogRequest['offset'];
                    limit = showProcessesAuditLogRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showProcessesAuditLog.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showProcessesAuditLog.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showProcessesAuditLog.');
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对指定的DDM实例的节点个数进行缩容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        shrinkInstanceNodes(shrinkInstanceNodesRequest?: ShrinkInstanceNodesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/action/reduce",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (shrinkInstanceNodesRequest !== null && shrinkInstanceNodesRequest !== undefined) {
                if (shrinkInstanceNodesRequest instanceof ShrinkInstanceNodesRequest) {
                    instanceId = shrinkInstanceNodesRequest.instanceId;
                    body = shrinkInstanceNodesRequest.body
                } else {
                    instanceId = shrinkInstanceNodesRequest['instance_id'];
                    body = shrinkInstanceNodesRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling shrinkInstanceNodes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为实例设置SSL数据加密。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchSsl(switchSslRequest?: SwitchSslRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/instances/{instance_id}/switch-ssl",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchSslRequest !== null && switchSslRequest !== undefined) {
                if (switchSslRequest instanceof SwitchSslRequest) {
                    instanceId = switchSslRequest.instanceId;
                    body = switchSslRequest.body
                } else {
                    instanceId = switchSslRequest['instance_id'];
                    body = switchSslRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchSsl.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 同步当前DDM实例已关联的所有DN实例配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDatabaseInfo(updateDatabaseInfoRequest?: UpdateDatabaseInfoRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/instances/{instance_id}/rds/sync",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (updateDatabaseInfoRequest !== null && updateDatabaseInfoRequest !== undefined) {
                if (updateDatabaseInfoRequest instanceof UpdateDatabaseInfoRequest) {
                    instanceId = updateDatabaseInfoRequest.instanceId;
                } else {
                    instanceId = updateDatabaseInfoRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateDatabaseInfo.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改DDM实例名称。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceName(updateInstanceNameRequest?: UpdateInstanceNameRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/instances/{instance_id}/modify-name",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceNameRequest !== null && updateInstanceNameRequest !== undefined) {
                if (updateInstanceNameRequest instanceof UpdateInstanceNameRequest) {
                    instanceId = updateInstanceNameRequest.instanceId;
                    body = updateInstanceNameRequest.body
                } else {
                    instanceId = updateInstanceNameRequest['instance_id'];
                    body = updateInstanceNameRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改DDM实例参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceParam(updateInstanceParamRequest?: UpdateInstanceParamRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/configurations",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xLanguage;

            if (updateInstanceParamRequest !== null && updateInstanceParamRequest !== undefined) {
                if (updateInstanceParamRequest instanceof UpdateInstanceParamRequest) {
                    instanceId = updateInstanceParamRequest.instanceId;
                    body = updateInstanceParamRequest.body
                    xLanguage = updateInstanceParamRequest.xLanguage;
                } else {
                    instanceId = updateInstanceParamRequest['instance_id'];
                    body = updateInstanceParamRequest['body'];
                    xLanguage = updateInstanceParamRequest['X-Language'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceParam.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改实例端口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstancePort(updateInstancePortRequest?: UpdateInstancePortRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/instances/{instance_id}/port",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstancePortRequest !== null && updateInstancePortRequest !== undefined) {
                if (updateInstancePortRequest instanceof UpdateInstancePortRequest) {
                    instanceId = updateInstancePortRequest.instanceId;
                    body = updateInstancePortRequest.body
                } else {
                    instanceId = updateInstancePortRequest['instance_id'];
                    body = updateInstancePortRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstancePort.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改DDM实例安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceSecurityGroup(updateInstanceSecurityGroupRequest?: UpdateInstanceSecurityGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/instances/{instance_id}/modify-security-group",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceSecurityGroupRequest !== null && updateInstanceSecurityGroupRequest !== undefined) {
                if (updateInstanceSecurityGroupRequest instanceof UpdateInstanceSecurityGroupRequest) {
                    instanceId = updateInstanceSecurityGroupRequest.instanceId;
                    body = updateInstanceSecurityGroupRequest.body
                } else {
                    instanceId = updateInstanceSecurityGroupRequest['instance_id'];
                    body = updateInstanceSecurityGroupRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改DDM已关联的数据库实例的读策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateReadAndWriteStrategy(updateReadAndWriteStrategyRequest?: UpdateReadAndWriteStrategyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/action/read-write-strategy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateReadAndWriteStrategyRequest !== null && updateReadAndWriteStrategyRequest !== undefined) {
                if (updateReadAndWriteStrategyRequest instanceof UpdateReadAndWriteStrategyRequest) {
                    instanceId = updateReadAndWriteStrategyRequest.instanceId;
                    body = updateReadAndWriteStrategyRequest.body
                } else {
                    instanceId = updateReadAndWriteStrategyRequest['instance_id'];
                    body = updateReadAndWriteStrategyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateReadAndWriteStrategy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改现有DDM帐号的权限或者与逻辑库的管理关系。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUser(updateUserRequest?: UpdateUserRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/instances/{instance_id}/users/{username}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let username;

            if (updateUserRequest !== null && updateUserRequest !== undefined) {
                if (updateUserRequest instanceof UpdateUserRequest) {
                    instanceId = updateUserRequest.instanceId;
                    username = updateUserRequest.username;
                    body = updateUserRequest.body
                } else {
                    instanceId = updateUserRequest['instance_id'];
                    username = updateUserRequest['username'];
                    body = updateUserRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateUser.');
            }
            if (username === null || username === undefined) {
            throw new RequiredError('username','Required parameter username was null or undefined when calling updateUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'username': username, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 弱密码校验
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateWeakPassword(validateWeakPasswordRequest?: ValidateWeakPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/weak-password-verification",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (validateWeakPasswordRequest !== null && validateWeakPasswordRequest !== undefined) {
                if (validateWeakPasswordRequest instanceof ValidateWeakPasswordRequest) {
                    body = validateWeakPasswordRequest.body
                } else {
                    body = validateWeakPasswordRequest['body'];
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
    
    }
};

function newClient(client: HcClient): DdmClient {
    return new DdmClient(client);
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