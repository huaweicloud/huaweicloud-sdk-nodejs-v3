import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BtrfsFileSystem } from './model/BtrfsFileSystem';
import { BtrfsSubvolumn } from './model/BtrfsSubvolumn';
import { CheckNetAclRequest } from './model/CheckNetAclRequest';
import { CheckNetAclResponse } from './model/CheckNetAclResponse';
import { CloneServer } from './model/CloneServer';
import { CloneServerBrief } from './model/CloneServerBrief';
import { CollectLogRequest } from './model/CollectLogRequest';
import { CollectLogResponse } from './model/CollectLogResponse';
import { ComandParam } from './model/ComandParam';
import { CommandBody } from './model/CommandBody';
import { ConfigBody } from './model/ConfigBody';
import { ConfigurationRequestBody } from './model/ConfigurationRequestBody';
import { CreateMigprojectRequest } from './model/CreateMigprojectRequest';
import { CreateMigprojectResponse } from './model/CreateMigprojectResponse';
import { CreateTaskRequest } from './model/CreateTaskRequest';
import { CreateTaskResponse } from './model/CreateTaskResponse';
import { CreateTemplateReq } from './model/CreateTemplateReq';
import { CreateTemplateRequest } from './model/CreateTemplateRequest';
import { CreateTemplateResponse } from './model/CreateTemplateResponse';
import { DeleteIds } from './model/DeleteIds';
import { DeleteMigprojectRequest } from './model/DeleteMigprojectRequest';
import { DeleteMigprojectResponse } from './model/DeleteMigprojectResponse';
import { DeleteServerRequest } from './model/DeleteServerRequest';
import { DeleteServerResponse } from './model/DeleteServerResponse';
import { DeleteServersRequest } from './model/DeleteServersRequest';
import { DeleteServersResponse } from './model/DeleteServersResponse';
import { DeleteTaskRequest } from './model/DeleteTaskRequest';
import { DeleteTaskResponse } from './model/DeleteTaskResponse';
import { DeleteTasksReq } from './model/DeleteTasksReq';
import { DeleteTasksRequest } from './model/DeleteTasksRequest';
import { DeleteTasksResponse } from './model/DeleteTasksResponse';
import { DeleteTemplateRequest } from './model/DeleteTemplateRequest';
import { DeleteTemplateResponse } from './model/DeleteTemplateResponse';
import { DeleteTemplatesRequest } from './model/DeleteTemplatesRequest';
import { DeleteTemplatesResponse } from './model/DeleteTemplatesResponse';
import { DeletetemplatesReq } from './model/DeletetemplatesReq';
import { Disk } from './model/Disk';
import { DiskIntargetServer } from './model/DiskIntargetServer';
import { EnvironmentCheck } from './model/EnvironmentCheck';
import { InitTargetServer } from './model/InitTargetServer';
import { Link } from './model/Link';
import { ListApiVersionRequest } from './model/ListApiVersionRequest';
import { ListApiVersionResponse } from './model/ListApiVersionResponse';
import { ListErrorServersRequest } from './model/ListErrorServersRequest';
import { ListErrorServersResponse } from './model/ListErrorServersResponse';
import { ListMigprojectsRequest } from './model/ListMigprojectsRequest';
import { ListMigprojectsResponse } from './model/ListMigprojectsResponse';
import { ListServersRequest } from './model/ListServersRequest';
import { ListServersResponse } from './model/ListServersResponse';
import { ListTasksRequest } from './model/ListTasksRequest';
import { ListTasksResponse } from './model/ListTasksResponse';
import { ListTemplatesRequest } from './model/ListTemplatesRequest';
import { ListTemplatesResponse } from './model/ListTemplatesResponse';
import { LogicalVolumes } from './model/LogicalVolumes';
import { MigProject } from './model/MigProject';
import { MigprojectsResponseBody } from './model/MigprojectsResponseBody';
import { MigrationErrors } from './model/MigrationErrors';
import { NetWork } from './model/NetWork';
import { NetworkCheckInfoRequestBody } from './model/NetworkCheckInfoRequestBody';
import { Nics } from './model/Nics';
import { PhysicalVolume } from './model/PhysicalVolume';
import { PhysicalVolumes } from './model/PhysicalVolumes';
import { PostMigProjectBody } from './model/PostMigProjectBody';
import { PostSourceServerBody } from './model/PostSourceServerBody';
import { PostTask } from './model/PostTask';
import { PublicIp } from './model/PublicIp';
import { PutCopyStateReq } from './model/PutCopyStateReq';
import { PutDisk } from './model/PutDisk';
import { PutDiskInfoReq } from './model/PutDiskInfoReq';
import { PutLogicalVolume } from './model/PutLogicalVolume';
import { PutSourceServerBody } from './model/PutSourceServerBody';
import { PutTaskReq } from './model/PutTaskReq';
import { PutVolume } from './model/PutVolume';
import { PutVolumeGroups } from './model/PutVolumeGroups';
import { RegisterServerRequest } from './model/RegisterServerRequest';
import { RegisterServerResponse } from './model/RegisterServerResponse';
import { Server } from './model/Server';
import { ServerDisk } from './model/ServerDisk';
import { SgObject } from './model/SgObject';
import { ShowApiVersionRequest } from './model/ShowApiVersionRequest';
import { ShowApiVersionResponse } from './model/ShowApiVersionResponse';
import { ShowCertKeyRequest } from './model/ShowCertKeyRequest';
import { ShowCertKeyResponse } from './model/ShowCertKeyResponse';
import { ShowCommandRequest } from './model/ShowCommandRequest';
import { ShowCommandResponse } from './model/ShowCommandResponse';
import { ShowConfigRequest } from './model/ShowConfigRequest';
import { ShowConfigResponse } from './model/ShowConfigResponse';
import { ShowConfigSettingRequest } from './model/ShowConfigSettingRequest';
import { ShowConfigSettingResponse } from './model/ShowConfigSettingResponse';
import { ShowMigprojectRequest } from './model/ShowMigprojectRequest';
import { ShowMigprojectResponse } from './model/ShowMigprojectResponse';
import { ShowOverviewRequest } from './model/ShowOverviewRequest';
import { ShowOverviewResponse } from './model/ShowOverviewResponse';
import { ShowPassphraseRequest } from './model/ShowPassphraseRequest';
import { ShowPassphraseResponse } from './model/ShowPassphraseResponse';
import { ShowServerRequest } from './model/ShowServerRequest';
import { ShowServerResponse } from './model/ShowServerResponse';
import { ShowSha256Request } from './model/ShowSha256Request';
import { ShowSha256Response } from './model/ShowSha256Response';
import { ShowTargetPasswordRequest } from './model/ShowTargetPasswordRequest';
import { ShowTargetPasswordResponse } from './model/ShowTargetPasswordResponse';
import { ShowTaskRequest } from './model/ShowTaskRequest';
import { ShowTaskResponse } from './model/ShowTaskResponse';
import { ShowTemplateRequest } from './model/ShowTemplateRequest';
import { ShowTemplateResponse } from './model/ShowTemplateResponse';
import { ShowsSpeedLimitsRequest } from './model/ShowsSpeedLimitsRequest';
import { ShowsSpeedLimitsResponse } from './model/ShowsSpeedLimitsResponse';
import { SourceServerAssociatedWithTask } from './model/SourceServerAssociatedWithTask';
import { SourceServerByTask } from './model/SourceServerByTask';
import { SourceServerResponse } from './model/SourceServerResponse';
import { SourceServersResponseBody } from './model/SourceServersResponseBody';
import { SpeedLimit } from './model/SpeedLimit';
import { SpeedLimitlJson } from './model/SpeedLimitlJson';
import { SubTask } from './model/SubTask';
import { SubTaskAssociatedWithTask } from './model/SubTaskAssociatedWithTask';
import { TargetDisk } from './model/TargetDisk';
import { TargetDisks } from './model/TargetDisks';
import { TargetPhysicalVolumes } from './model/TargetPhysicalVolumes';
import { TargetServer } from './model/TargetServer';
import { TargetServerAssociatedWithTask } from './model/TargetServerAssociatedWithTask';
import { TargetServerById } from './model/TargetServerById';
import { TargetServerByTask } from './model/TargetServerByTask';
import { TaskByServerSource } from './model/TaskByServerSource';
import { TaskByServerSources } from './model/TaskByServerSources';
import { TaskTargetServer } from './model/TaskTargetServer';
import { TasksResponseBody } from './model/TasksResponseBody';
import { TemplateDisk } from './model/TemplateDisk';
import { TemplateRequest } from './model/TemplateRequest';
import { TemplateResponseBody } from './model/TemplateResponseBody';
import { UnlockTargetEcsRequest } from './model/UnlockTargetEcsRequest';
import { UnlockTargetEcsResponse } from './model/UnlockTargetEcsResponse';
import { UpdateCommandResultRequest } from './model/UpdateCommandResultRequest';
import { UpdateCommandResultResponse } from './model/UpdateCommandResultResponse';
import { UpdateCopyStateRequest } from './model/UpdateCopyStateRequest';
import { UpdateCopyStateResponse } from './model/UpdateCopyStateResponse';
import { UpdateDefaultMigprojectRequest } from './model/UpdateDefaultMigprojectRequest';
import { UpdateDefaultMigprojectResponse } from './model/UpdateDefaultMigprojectResponse';
import { UpdateDiskInfoRequest } from './model/UpdateDiskInfoRequest';
import { UpdateDiskInfoResponse } from './model/UpdateDiskInfoResponse';
import { UpdateMigprojectRequest } from './model/UpdateMigprojectRequest';
import { UpdateMigprojectResponse } from './model/UpdateMigprojectResponse';
import { UpdateNetworkCheckInfoRequest } from './model/UpdateNetworkCheckInfoRequest';
import { UpdateNetworkCheckInfoResponse } from './model/UpdateNetworkCheckInfoResponse';
import { UpdateServerNameRequest } from './model/UpdateServerNameRequest';
import { UpdateServerNameResponse } from './model/UpdateServerNameResponse';
import { UpdateSpeedRequest } from './model/UpdateSpeedRequest';
import { UpdateSpeedResponse } from './model/UpdateSpeedResponse';
import { UpdateTaskRequest } from './model/UpdateTaskRequest';
import { UpdateTaskResponse } from './model/UpdateTaskResponse';
import { UpdateTaskSpeedReq } from './model/UpdateTaskSpeedReq';
import { UpdateTaskSpeedRequest } from './model/UpdateTaskSpeedRequest';
import { UpdateTaskSpeedResponse } from './model/UpdateTaskSpeedResponse';
import { UpdateTaskStatusReq } from './model/UpdateTaskStatusReq';
import { UpdateTaskStatusRequest } from './model/UpdateTaskStatusRequest';
import { UpdateTaskStatusResponse } from './model/UpdateTaskStatusResponse';
import { UpdateTemplateReq } from './model/UpdateTemplateReq';
import { UpdateTemplateRequest } from './model/UpdateTemplateRequest';
import { UpdateTemplateResponse } from './model/UpdateTemplateResponse';
import { UploadLogRequestBody } from './model/UploadLogRequestBody';
import { UploadSpecialConfigurationSettingRequest } from './model/UploadSpecialConfigurationSettingRequest';
import { UploadSpecialConfigurationSettingResponse } from './model/UploadSpecialConfigurationSettingResponse';
import { Version } from './model/Version';
import { VolumeGroups } from './model/VolumeGroups';
import { VpcObject } from './model/VpcObject';

export class SmsClient {
    public static newBuilder(): ClientBuilder<SmsClient> {
            return new ClientBuilder<SmsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 检查网卡安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查网卡安全组端口是否符合要求
     * @param {string} tProjectId 目的虚拟机所属project_id
     * @param {string} tNetworkId 目的端子网ID
     * @param {string} regionId 区域ID
     * @param {string} osType 操作系统类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkNetAcl(checkNetAclRequest?: CheckNetAclRequest): Promise<CheckNetAclResponse> {
        const options = ParamCreater().checkNetAcl(checkNetAclRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 上传迁移任务的日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传迁移任务的日志
     * @param {string} taskId 迁移任务ID
     * @param {UploadLogRequestBody} collectLogRequestBody 上传日志请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public collectLog(collectLogRequest?: CollectLogRequest): Promise<CollectLogResponse> {
        const options = ParamCreater().collectLog(collectLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新建迁移项目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建迁移项目
     * @param {PostMigProjectBody} createMigprojectRequestBody 新建的迁移项目的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMigproject(createMigprojectRequest?: CreateMigprojectRequest): Promise<CreateMigprojectResponse> {
        const options = ParamCreater().createMigproject(createMigprojectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据源端服务器创建一个迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建迁移任务
     * @param {PostTask} createTaskRequestBody 迁移任务信息请求体
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
     * 新增源端模板信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增模板信息
     * @param {CreateTemplateReq} createTemplateRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTemplate(createTemplateRequest?: CreateTemplateRequest): Promise<CreateTemplateResponse> {
        const options = ParamCreater().createTemplate(createTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定ID的迁移项目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除迁移项目
     * @param {string} migProjectId 需要删除的迁移项目的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMigproject(deleteMigprojectRequest?: DeleteMigprojectRequest): Promise<DeleteMigprojectResponse> {
        const options = ParamCreater().deleteMigproject(deleteMigprojectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从主机迁移服务界面上删除指定ID的源端服务器信息。一旦源端服务器信息被删除，则只能通过重启源端服务器上的迁移Agent来将源端服务器信息重新添加在主机迁移服务界面。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定ID的源端服务器信息
     * @param {string} sourceId 源端服务器在主机迁移服务中的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServer(deleteServerRequest?: DeleteServerRequest): Promise<DeleteServerResponse> {
        const options = ParamCreater().deleteServer(deleteServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除源端服务器信息。一旦源端服务器信息被删除，则只能通过重启源端服务器上的迁移Agent来将源端服务器信息重新添加在主机迁移服务界面。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除源端服务器信息
     * @param {DeleteIds} deleteServersRequestBody 批量删除对象的源端ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteServers(deleteServersRequest?: DeleteServersRequest): Promise<DeleteServersResponse> {
        const options = ParamCreater().deleteServers(deleteServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定ID的迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定ID的迁移任务
     * @param {string} taskId 要删除的迁移任务ID
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
     * 批量删除迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除迁移任务
     * @param {DeleteTasksReq} deleteTasksRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTasks(deleteTasksRequest?: DeleteTasksRequest): Promise<DeleteTasksResponse> {
        const options = ParamCreater().deleteTasks(deleteTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定ID的模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定ID的模板
     * @param {string} id 需要删除的模板的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
        const options = ParamCreater().deleteTemplate(deleteTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除指定ID的模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除指定ID的模板
     * @param {DeletetemplatesReq} [deletetemplatesRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplates(deleteTemplatesRequest?: DeleteTemplatesRequest): Promise<DeleteTemplatesResponse> {
        const options = ParamCreater().deleteTemplates(deleteTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 主机迁移过程中可能发生错误，使用该接口可以批量查询迁移过程中出现错误的源端服务器信息，以及它们的错误信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询待迁移源端的所有错误
     * @param {number} offset 偏移量
     * @param {number} [limit] 每一页记录的错误数量
     * @param {string} [migproject] 需要查询的迁移项目ID，添加此字段将只查询对应ID下的迁移任务报错信息
     * @param {string} [enterpriseProjectId] 需要查询的企业项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listErrorServers(listErrorServersRequest?: ListErrorServersRequest): Promise<ListErrorServersResponse> {
        const options = ParamCreater().listErrorServers(listErrorServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 主机迁移服务中可以使用迁移项目来对源端进行项目管理，使用该接口获取当前账户下所有的迁移项目列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目列表
     * @param {number} [limit] 每一页记录的迁移项目
     * @param {number} [offset] 偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMigprojects(listMigprojectsRequest?: ListMigprojectsRequest): Promise<ListMigprojectsResponse> {
        const options = ParamCreater().listMigprojects(listMigprojectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户在源端安装并成功启动Agent后，Agent会将源端服务器信息注册在主机迁移服务中，调用该接口查询已注册的源端服务器列表信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询源端服务器列表
     * @param {'unavailable' | 'waiting' | 'initialize' | 'replicate' | 'syncing' | 'stopping' | 'stopped' | 'deleting' | 'error' | 'cloning' | 'cutovering' | 'finished'} [state] 源端服务器状态 unavailable：环境校验不通过 waiting：等待 initialize：初始化 replicate：复制 syncing：持续同步 stopping：暂停中 stopped：已暂停 deleting：删除中 error：错误 cloning：等待克隆完成 cutovering：启动目的端中 finished：启动目的端完成
     * @param {string} [name] 源端服务器名称
     * @param {string} [id] 源端服务器ID
     * @param {string} [ip] 源端服务器IP地址
     * @param {string} [migproject] 迁移项目ID，填写该参数将查询迁移项目下的所有虚拟机
     * @param {number} [limit] 每一页记录的源端服务器数量，0表示用默认值 200
     * @param {number} [offset] 偏移量，默认值0
     * @param {'checking' | 'setting' | 'replicating' | 'syncing' | 'cutovering' | 'cutovered'} [migrationCycle] checking:检查中 setting:设置中 replicating:复制中 syncing:同步中 cutovering:启动目的端中 cutovered:启动目的端完成
     * @param {boolean} [connected] 查询失去连接的源端
     * @param {string} [enterpriseProjectId] 需要查询的企业项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServers(listServersRequest?: ListServersRequest): Promise<ListServersResponse> {
        const options = ParamCreater().listServers(listServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在设置目的端后，主机迁移服务会自动创建迁移任务，使用该接口可以查询迁移任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询迁移任务列表
     * @param {'READY' | 'RUNNING' | 'SYNCING' | 'MIGRATE_SUCCESS' | 'MIGRATE_FAIL' | 'ABORTING' | 'ABORT' | 'DELETING' | 'SYNC_F_ROLLBACKING' | 'SYNC_F_ROLLBACK_SUCCESS'} [state] 迁移任务状态 READY:准备就绪 RUNNING:迁移中 SYNCING:同步中 MIGRATE_SUCCESS:迁移成功 MIGRATE_FAIL:迁移失败 ABORTING:中止中 ABORT:中止 DELETING::删除中 SYNC_F_ROLLBACKING:同步失败回滚中 SYNC_F_ROLLBACK_SUCCESS:同步失败回滚成功
     * @param {string} [name] 任务的名称
     * @param {string} [id] 任务的ID
     * @param {string} [sourceServerId] 源端服务器的ID
     * @param {number} [limit] 每一页记录的任务数量
     * @param {number} [offset] 偏移量
     * @param {string} [enterpriseProjectId] 需要查询的企业项目ID
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
     * 查询弹性云服务器模板列表，迁移时选择“新建服务器”时可使用该模板创建弹性云服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询模板列表
     * @param {string} [name] 模板名称
     * @param {string} [availabilityZone] 可用区
     * @param {string} [region] Region ID
     * @param {number} [limit] 分页大小，不传值默认为50
     * @param {number} [offset] 偏移量，不传值默认为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplates(listTemplatesRequest?: ListTemplatesRequest): Promise<ListTemplatesResponse> {
        const options = ParamCreater().listTemplates(listTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 上报源端服务器信息，上报成功后会在sms服务器列表中看到对应的源端服务器信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上报源端服务器基本信息
     * @param {PostSourceServerBody} registerServerRequestBody 源端服务器信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerServer(registerServerRequest?: RegisterServerRequest): Promise<RegisterServerResponse> {
        const options = ParamCreater().registerServer(registerServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当源端服务器为Windows操作系统时，安装在源端服务器上的迁移Agent通过SSLSocket同目的端服务器通信，该接口用于下载目的端服务器所需要的证书和私钥(PEM格式)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取SSL目的端证书和私钥
     * @param {string} taskId 迁移任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCertKey(showCertKeyRequest?: ShowCertKeyRequest): Promise<ShowCertKeyResponse> {
        const options = ParamCreater().showCertKey(showCertKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 迁移Agent调用该接口从SMS服务端获取下发给指定源端迁移Agent的命令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取服务端命令
     * @param {string} serverId 命令对应的服务器ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCommand(showCommandRequest?: ShowCommandRequest): Promise<ShowCommandResponse> {
        const options = ParamCreater().showCommand(showCommandRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用该接口查询任指定任务的指定配置类型的配置信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配置资源
     * @param {string} taskId 任务id
     * @param {string} [configKey] 具体请求配置项
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConfigSetting(showConfigSettingRequest?: ShowConfigSettingRequest): Promise<ShowConfigSettingResponse> {
        const options = ParamCreater().showConfigSetting(showConfigSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定ID的迁移项目详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定ID迁移项目详情
     * @param {string} migProjectId 迁移项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMigproject(showMigprojectRequest?: ShowMigprojectRequest): Promise<ShowMigprojectResponse> {
        const options = ParamCreater().showMigproject(showMigprojectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取服务器总览
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取服务器总览
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOverview(): Promise<ShowOverviewResponse> {
        const options = ParamCreater().showOverview();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定任务ID的安全传输通道的证书passphrase。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定任务ID的安全传输通道的证书passphrase
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPassphrase(showPassphraseRequest?: ShowPassphraseRequest): Promise<ShowPassphraseResponse> {
        const options = ParamCreater().showPassphrase(showPassphraseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 迁移Agent将源端服务器信息上报到主机迁移服务后，主机迁移服务会对迁移的可行性进行检测，该接口返回源端服务器的基本信息和检查结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定ID的源端服务器
     * @param {string} sourceId 源端服务器在主机迁移服务中的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServer(showServerRequest?: ShowServerRequest): Promise<ShowServerResponse> {
        const options = ParamCreater().showServer(showServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 计算sha256
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 计算sha256
     * @param {string} key 关键字
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSha256(showSha256Request?: ShowSha256Request): Promise<ShowSha256Response> {
        const options = ParamCreater().showSha256(showSha256Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定ID的模板中的目的端服务器的密码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定ID的模板中的目的端服务器的密码
     * @param {string} id 模板的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTargetPassword(showTargetPasswordRequest?: ShowTargetPasswordRequest): Promise<ShowTargetPasswordResponse> {
        const options = ParamCreater().showTargetPassword(showTargetPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定ID的迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定ID的迁移任务
     * @param {string} taskId 迁移任务ID
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
     * 查询指定ID的弹性云服务器模板信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定ID模板信息
     * @param {string} id 需要查询的模板信息的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplate(showTemplateRequest?: ShowTemplateRequest): Promise<ShowTemplateResponse> {
        const options = ParamCreater().showTemplate(showTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按时间段查询迁移任务的迁移速率。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务限速规则
     * @param {string} taskId 查询限速信息的任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showsSpeedLimits(showsSpeedLimitsRequest?: ShowsSpeedLimitsRequest): Promise<ShowsSpeedLimitsResponse> {
        const options = ParamCreater().showsSpeedLimits(showsSpeedLimitsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解锁指定任务的目的端服务器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解锁指定任务的目的端服务器
     * @param {string} taskId 指定任务的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unlockTargetEcs(unlockTargetEcsRequest?: UnlockTargetEcsRequest): Promise<UnlockTargetEcsResponse> {
        const options = ParamCreater().unlockTargetEcs(unlockTargetEcsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 迁移Agent调用该接口向SMS服务端反馈指定指令的执行结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上报服务端命令执行结果
     * @param {string} serverId 上报命令执行结果的命令所对应的服务端ID
     * @param {CommandBody} updateCommandResultRequestBody 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCommandResult(updateCommandResultRequest?: UpdateCommandResultRequest): Promise<UpdateCommandResultResponse> {
        const options = ParamCreater().updateCommandResult(updateCommandResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新任务对应源端复制状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新任务对应源端复制状态
     * @param {string} sourceId 源端服务器在主机迁移服务中的ID
     * @param {PutCopyStateReq} updateCopyStateRequestBody 源端复制状态请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCopyState(updateCopyStateRequest?: UpdateCopyStateRequest): Promise<UpdateCopyStateResponse> {
        const options = ParamCreater().updateCopyState(updateCopyStateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更改默认迁移项目，注册源端会注册在当前的默认项目下。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新默认迁移项目
     * @param {string} migProjectId 迁移项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDefaultMigproject(updateDefaultMigprojectRequest?: UpdateDefaultMigprojectRequest): Promise<UpdateDefaultMigprojectResponse> {
        const options = ParamCreater().updateDefaultMigproject(updateDefaultMigprojectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新服务器的磁盘信息，此接口会把服务器原有磁盘信息清空，然后更新成新磁盘信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新磁盘信息
     * @param {string} sourceId 源端服务器ID
     * @param {PutDiskInfoReq} [updateDiskInfoRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDiskInfo(updateDiskInfoRequest?: UpdateDiskInfoRequest): Promise<UpdateDiskInfoResponse> {
        const options = ParamCreater().updateDiskInfo(updateDiskInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新迁移项目的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新迁移项目信息
     * @param {string} migProjectId 迁移项目ID
     * @param {MigProject} [updateMigprojectRequestBody] 新的迁移项目信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMigproject(updateMigprojectRequest?: UpdateMigprojectRequest): Promise<UpdateMigprojectResponse> {
        const options = ParamCreater().updateMigproject(updateMigprojectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Agent 上报网络检测相关的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新网络检测相关的信息
     * @param {string} taskId 任务id
     * @param {NetworkCheckInfoRequestBody} updateNetworkCheckInfoRequestBody 网络检测相关结果信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNetworkCheckInfo(updateNetworkCheckInfoRequest?: UpdateNetworkCheckInfoRequest): Promise<UpdateNetworkCheckInfoResponse> {
        const options = ParamCreater().updateNetworkCheckInfo(updateNetworkCheckInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该功能用来修改SMS服务端的源端名称，方便用户对源端进行管理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定ID的源端服务器名称
     * @param {string} sourceId 源端服务器在主机迁移服务中的ID
     * @param {PutSourceServerBody} updateServerNameRequestBody 修改源端信息的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateServerName(updateServerNameRequest?: UpdateServerNameRequest): Promise<UpdateServerNameResponse> {
        const options = ParamCreater().updateServerName(updateServerNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置迁移任务的迁移速率。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置迁移限速规则
     * @param {string} taskId 主机迁移任务的ID
     * @param {SpeedLimit} updateSpeedRequestBody 迁移中限速信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSpeed(updateSpeedRequest?: UpdateSpeedRequest): Promise<UpdateSpeedResponse> {
        const options = ParamCreater().updateSpeed(updateSpeedRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定ID的迁移任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定ID的迁移任务
     * @param {string} taskId 迁移任务ID
     * @param {PutTaskReq} [updateTaskRequestBody] 更新迁移任务请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTask(updateTaskRequest?: UpdateTaskRequest): Promise<UpdateTaskResponse> {
        const options = ParamCreater().updateTask(updateTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口由安装在源端服务器上的迁移Agent在数据迁移阶段调用，用来将迁移的具体进度上报给SMS服务端。
     * 
     * 迁移Agent自动调用此接口用于上报数据迁移进度，您无需调用此接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上报数据迁移进度和速率
     * @param {string} taskId 主机迁移任务的ID
     * @param {UpdateTaskSpeedReq} [updateTaskSpeedRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTaskSpeed(updateTaskSpeedRequest?: UpdateTaskSpeedRequest): Promise<UpdateTaskSpeedResponse> {
        const options = ParamCreater().updateTaskSpeed(updateTaskSpeedRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 管理迁移任务，包括启动任务，暂停任务，同步任务，日志上传，回滚失败迁移任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 管理迁移任务
     * @param {string} taskId 迁移任务ID
     * @param {UpdateTaskStatusReq} updateTaskStatusRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTaskStatus(updateTaskStatusRequest?: UpdateTaskStatusRequest): Promise<UpdateTaskStatusResponse> {
        const options = ParamCreater().updateTaskStatus(updateTaskStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改源端模板信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改模板信息
     * @param {string} id 需要修改信息的模板的ID
     * @param {UpdateTemplateReq} [updateTemplateRequestBody] This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTemplate(updateTemplateRequest?: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
        const options = ParamCreater().updateTemplate(updateTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 配置迁移任务特殊设置，例如配置指定同步的文件或路径
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 迁移任务配置设置
     * @param {string} taskId 任务id
     * @param {ConfigurationRequestBody} uploadSpecialConfigurationSettingRequestBody 配置参数相关值
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadSpecialConfigurationSetting(uploadSpecialConfigurationSettingRequest?: UploadSpecialConfigurationSettingRequest): Promise<UploadSpecialConfigurationSettingResponse> {
        const options = ParamCreater().uploadSpecialConfigurationSetting(uploadSpecialConfigurationSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 源端Agent启动后，访问此接口获取配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Agent配置信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConfig(): Promise<ShowConfigResponse> {
        const options = ParamCreater().showConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主机迁移服务的API版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机迁移服务的API版本信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersion(): Promise<ListApiVersionResponse> {
        const options = ParamCreater().listApiVersion();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主机迁移服务指定API版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机迁移服务指定API版本信息
     * @param {string} version 版本信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApiVersion(showApiVersionRequest?: ShowApiVersionRequest): Promise<ShowApiVersionResponse> {
        const options = ParamCreater().showApiVersion(showApiVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 检查网卡安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkNetAcl(checkNetAclRequest?: CheckNetAclRequest) {
            const options = {
                method: "GET",
                url: "/v3/tasks/{t_project_id}/networkacl/{t_network_id}/check",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let tProjectId;
            
            let tNetworkId;
            
            let regionId;
            
            let osType;

            if (checkNetAclRequest !== null && checkNetAclRequest !== undefined) {
                if (checkNetAclRequest instanceof CheckNetAclRequest) {
                    tProjectId = checkNetAclRequest.tProjectId;
                    tNetworkId = checkNetAclRequest.tNetworkId;
                    regionId = checkNetAclRequest.regionId;
                    osType = checkNetAclRequest.osType;
                } else {
                    tProjectId = checkNetAclRequest['t_project_id'];
                    tNetworkId = checkNetAclRequest['t_network_id'];
                    regionId = checkNetAclRequest['region_id'];
                    osType = checkNetAclRequest['os_type'];
                }
            }

        
            if (tProjectId === null || tProjectId === undefined) {
            throw new RequiredError('tProjectId','Required parameter tProjectId was null or undefined when calling checkNetAcl.');
            }
            if (tNetworkId === null || tNetworkId === undefined) {
            throw new RequiredError('tNetworkId','Required parameter tNetworkId was null or undefined when calling checkNetAcl.');
            }
            if (regionId === null || regionId === undefined) {
                throw new RequiredError('regionId','Required parameter regionId was null or undefined when calling checkNetAcl.');
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (osType === null || osType === undefined) {
                throw new RequiredError('osType','Required parameter osType was null or undefined when calling checkNetAcl.');
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 't_project_id': tProjectId,'t_network_id': tNetworkId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 上传迁移任务的日志。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        collectLog(collectLogRequest?: CollectLogRequest) {
            const options = {
                method: "POST",
                url: "/v3/tasks/{task_id}/log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (collectLogRequest !== null && collectLogRequest !== undefined) {
                if (collectLogRequest instanceof CollectLogRequest) {
                    taskId = collectLogRequest.taskId;
                    body = collectLogRequest.body
                } else {
                    taskId = collectLogRequest['task_id'];
                    body = collectLogRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling collectLog.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新建迁移项目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMigproject(createMigprojectRequest?: CreateMigprojectRequest) {
            const options = {
                method: "POST",
                url: "/v3/migprojects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createMigprojectRequest !== null && createMigprojectRequest !== undefined) {
                if (createMigprojectRequest instanceof CreateMigprojectRequest) {
                    body = createMigprojectRequest.body
                } else {
                    body = createMigprojectRequest['body'];
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
         * 根据源端服务器创建一个迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTask(createTaskRequest?: CreateTaskRequest) {
            const options = {
                method: "POST",
                url: "/v3/tasks",
                contentType: "application/json",
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增源端模板信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTemplate(createTemplateRequest?: CreateTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v3/vm/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTemplateRequest !== null && createTemplateRequest !== undefined) {
                if (createTemplateRequest instanceof CreateTemplateRequest) {
                    body = createTemplateRequest.body
                } else {
                    body = createTemplateRequest['body'];
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
         * 删除指定ID的迁移项目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMigproject(deleteMigprojectRequest?: DeleteMigprojectRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/migprojects/{mig_project_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let migProjectId;

            if (deleteMigprojectRequest !== null && deleteMigprojectRequest !== undefined) {
                if (deleteMigprojectRequest instanceof DeleteMigprojectRequest) {
                    migProjectId = deleteMigprojectRequest.migProjectId;
                } else {
                    migProjectId = deleteMigprojectRequest['mig_project_id'];
                }
            }

        
            if (migProjectId === null || migProjectId === undefined) {
            throw new RequiredError('migProjectId','Required parameter migProjectId was null or undefined when calling deleteMigproject.');
            }

            options.pathParams = { 'mig_project_id': migProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从主机迁移服务界面上删除指定ID的源端服务器信息。一旦源端服务器信息被删除，则只能通过重启源端服务器上的迁移Agent来将源端服务器信息重新添加在主机迁移服务界面。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServer(deleteServerRequest?: DeleteServerRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/sources/{source_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let sourceId;

            if (deleteServerRequest !== null && deleteServerRequest !== undefined) {
                if (deleteServerRequest instanceof DeleteServerRequest) {
                    sourceId = deleteServerRequest.sourceId;
                } else {
                    sourceId = deleteServerRequest['source_id'];
                }
            }

        
            if (sourceId === null || sourceId === undefined) {
            throw new RequiredError('sourceId','Required parameter sourceId was null or undefined when calling deleteServer.');
            }

            options.pathParams = { 'source_id': sourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除源端服务器信息。一旦源端服务器信息被删除，则只能通过重启源端服务器上的迁移Agent来将源端服务器信息重新添加在主机迁移服务界面。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteServers(deleteServersRequest?: DeleteServersRequest) {
            const options = {
                method: "POST",
                url: "/v3/sources/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteServersRequest !== null && deleteServersRequest !== undefined) {
                if (deleteServersRequest instanceof DeleteServersRequest) {
                    body = deleteServersRequest.body
                } else {
                    body = deleteServersRequest['body'];
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
         * 删除指定ID的迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTask(deleteTaskRequest?: DeleteTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/tasks/{task_id}",
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
         * 批量删除迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTasks(deleteTasksRequest?: DeleteTasksRequest) {
            const options = {
                method: "POST",
                url: "/v3/tasks/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteTasksRequest !== null && deleteTasksRequest !== undefined) {
                if (deleteTasksRequest instanceof DeleteTasksRequest) {
                    body = deleteTasksRequest.body
                } else {
                    body = deleteTasksRequest['body'];
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
         * 删除指定ID的模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/vm/templates/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteTemplateRequest !== null && deleteTemplateRequest !== undefined) {
                if (deleteTemplateRequest instanceof DeleteTemplateRequest) {
                    id = deleteTemplateRequest.id;
                } else {
                    id = deleteTemplateRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteTemplate.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除指定ID的模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplates(deleteTemplatesRequest?: DeleteTemplatesRequest) {
            const options = {
                method: "POST",
                url: "/v3/vm/templates/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteTemplatesRequest !== null && deleteTemplatesRequest !== undefined) {
                if (deleteTemplatesRequest instanceof DeleteTemplatesRequest) {
                    body = deleteTemplatesRequest.body
                } else {
                    body = deleteTemplatesRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 主机迁移过程中可能发生错误，使用该接口可以批量查询迁移过程中出现错误的源端服务器信息，以及它们的错误信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listErrorServers(listErrorServersRequest?: ListErrorServersRequest) {
            const options = {
                method: "GET",
                url: "/v3/errors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let migproject;
            
            let enterpriseProjectId;

            if (listErrorServersRequest !== null && listErrorServersRequest !== undefined) {
                if (listErrorServersRequest instanceof ListErrorServersRequest) {
                    offset = listErrorServersRequest.offset;
                    limit = listErrorServersRequest.limit;
                    migproject = listErrorServersRequest.migproject;
                    enterpriseProjectId = listErrorServersRequest.enterpriseProjectId;
                } else {
                    offset = listErrorServersRequest['offset'];
                    limit = listErrorServersRequest['limit'];
                    migproject = listErrorServersRequest['migproject'];
                    enterpriseProjectId = listErrorServersRequest['enterprise_project_id'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listErrorServers.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (migproject !== null && migproject !== undefined) {
                localVarQueryParameter['migproject'] = migproject;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 主机迁移服务中可以使用迁移项目来对源端进行项目管理，使用该接口获取当前账户下所有的迁移项目列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMigprojects(listMigprojectsRequest?: ListMigprojectsRequest) {
            const options = {
                method: "GET",
                url: "/v3/migprojects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listMigprojectsRequest !== null && listMigprojectsRequest !== undefined) {
                if (listMigprojectsRequest instanceof ListMigprojectsRequest) {
                    limit = listMigprojectsRequest.limit;
                    offset = listMigprojectsRequest.offset;
                } else {
                    limit = listMigprojectsRequest['limit'];
                    offset = listMigprojectsRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户在源端安装并成功启动Agent后，Agent会将源端服务器信息注册在主机迁移服务中，调用该接口查询已注册的源端服务器列表信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServers(listServersRequest?: ListServersRequest) {
            const options = {
                method: "GET",
                url: "/v3/sources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let state;
            
            let name;
            
            let id;
            
            let ip;
            
            let migproject;
            
            let limit;
            
            let offset;
            
            let migrationCycle;
            
            let connected;
            
            let enterpriseProjectId;

            if (listServersRequest !== null && listServersRequest !== undefined) {
                if (listServersRequest instanceof ListServersRequest) {
                    state = listServersRequest.state;
                    name = listServersRequest.name;
                    id = listServersRequest.id;
                    ip = listServersRequest.ip;
                    migproject = listServersRequest.migproject;
                    limit = listServersRequest.limit;
                    offset = listServersRequest.offset;
                    migrationCycle = listServersRequest.migrationCycle;
                    connected = listServersRequest.connected;
                    enterpriseProjectId = listServersRequest.enterpriseProjectId;
                } else {
                    state = listServersRequest['state'];
                    name = listServersRequest['name'];
                    id = listServersRequest['id'];
                    ip = listServersRequest['ip'];
                    migproject = listServersRequest['migproject'];
                    limit = listServersRequest['limit'];
                    offset = listServersRequest['offset'];
                    migrationCycle = listServersRequest['migration_cycle'];
                    connected = listServersRequest['connected'];
                    enterpriseProjectId = listServersRequest['enterprise_project_id'];
                }
            }

        
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }
            if (migproject !== null && migproject !== undefined) {
                localVarQueryParameter['migproject'] = migproject;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (migrationCycle !== null && migrationCycle !== undefined) {
                localVarQueryParameter['migration_cycle'] = migrationCycle;
            }
            if (connected !== null && connected !== undefined) {
                localVarQueryParameter['connected'] = connected;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在设置目的端后，主机迁移服务会自动创建迁移任务，使用该接口可以查询迁移任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTasks(listTasksRequest?: ListTasksRequest) {
            const options = {
                method: "GET",
                url: "/v3/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let state;
            
            let name;
            
            let id;
            
            let sourceServerId;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;

            if (listTasksRequest !== null && listTasksRequest !== undefined) {
                if (listTasksRequest instanceof ListTasksRequest) {
                    state = listTasksRequest.state;
                    name = listTasksRequest.name;
                    id = listTasksRequest.id;
                    sourceServerId = listTasksRequest.sourceServerId;
                    limit = listTasksRequest.limit;
                    offset = listTasksRequest.offset;
                    enterpriseProjectId = listTasksRequest.enterpriseProjectId;
                } else {
                    state = listTasksRequest['state'];
                    name = listTasksRequest['name'];
                    id = listTasksRequest['id'];
                    sourceServerId = listTasksRequest['source_server_id'];
                    limit = listTasksRequest['limit'];
                    offset = listTasksRequest['offset'];
                    enterpriseProjectId = listTasksRequest['enterprise_project_id'];
                }
            }

        
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (sourceServerId !== null && sourceServerId !== undefined) {
                localVarQueryParameter['source_server_id'] = sourceServerId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性云服务器模板列表，迁移时选择“新建服务器”时可使用该模板创建弹性云服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplates(listTemplatesRequest?: ListTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v3/vm/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let availabilityZone;
            
            let region;
            
            let limit;
            
            let offset;

            if (listTemplatesRequest !== null && listTemplatesRequest !== undefined) {
                if (listTemplatesRequest instanceof ListTemplatesRequest) {
                    name = listTemplatesRequest.name;
                    availabilityZone = listTemplatesRequest.availabilityZone;
                    region = listTemplatesRequest.region;
                    limit = listTemplatesRequest.limit;
                    offset = listTemplatesRequest.offset;
                } else {
                    name = listTemplatesRequest['name'];
                    availabilityZone = listTemplatesRequest['availability_zone'];
                    region = listTemplatesRequest['region'];
                    limit = listTemplatesRequest['limit'];
                    offset = listTemplatesRequest['offset'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 上报源端服务器信息，上报成功后会在sms服务器列表中看到对应的源端服务器信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerServer(registerServerRequest?: RegisterServerRequest) {
            const options = {
                method: "POST",
                url: "/v3/sources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (registerServerRequest !== null && registerServerRequest !== undefined) {
                if (registerServerRequest instanceof RegisterServerRequest) {
                    body = registerServerRequest.body
                } else {
                    body = registerServerRequest['body'];
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
         * 当源端服务器为Windows操作系统时，安装在源端服务器上的迁移Agent通过SSLSocket同目的端服务器通信，该接口用于下载目的端服务器所需要的证书和私钥(PEM格式)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCertKey(showCertKeyRequest?: ShowCertKeyRequest) {
            const options = {
                method: "GET",
                url: "/v3/tasks/{task_id}/certkey",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showCertKeyRequest !== null && showCertKeyRequest !== undefined) {
                if (showCertKeyRequest instanceof ShowCertKeyRequest) {
                    taskId = showCertKeyRequest.taskId;
                } else {
                    taskId = showCertKeyRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showCertKey.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 迁移Agent调用该接口从SMS服务端获取下发给指定源端迁移Agent的命令。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCommand(showCommandRequest?: ShowCommandRequest) {
            const options = {
                method: "GET",
                url: "/v3/sources/{server_id}/command",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showCommandRequest !== null && showCommandRequest !== undefined) {
                if (showCommandRequest instanceof ShowCommandRequest) {
                    serverId = showCommandRequest.serverId;
                } else {
                    serverId = showCommandRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showCommand.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用该接口查询任指定任务的指定配置类型的配置信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConfigSetting(showConfigSettingRequest?: ShowConfigSettingRequest) {
            const options = {
                method: "GET",
                url: "/v3/tasks/{task_id}/configuration-setting",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let configKey;

            if (showConfigSettingRequest !== null && showConfigSettingRequest !== undefined) {
                if (showConfigSettingRequest instanceof ShowConfigSettingRequest) {
                    taskId = showConfigSettingRequest.taskId;
                    configKey = showConfigSettingRequest.configKey;
                } else {
                    taskId = showConfigSettingRequest['task_id'];
                    configKey = showConfigSettingRequest['config_key'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showConfigSetting.');
            }
            if (configKey !== null && configKey !== undefined) {
                localVarQueryParameter['config_key'] = configKey;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定ID的迁移项目详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMigproject(showMigprojectRequest?: ShowMigprojectRequest) {
            const options = {
                method: "GET",
                url: "/v3/migprojects/{mig_project_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let migProjectId;

            if (showMigprojectRequest !== null && showMigprojectRequest !== undefined) {
                if (showMigprojectRequest instanceof ShowMigprojectRequest) {
                    migProjectId = showMigprojectRequest.migProjectId;
                } else {
                    migProjectId = showMigprojectRequest['mig_project_id'];
                }
            }

        
            if (migProjectId === null || migProjectId === undefined) {
            throw new RequiredError('migProjectId','Required parameter migProjectId was null or undefined when calling showMigproject.');
            }

            options.pathParams = { 'mig_project_id': migProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取服务器总览
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOverview() {
            const options = {
                method: "GET",
                url: "/v3/sources/overview",
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
         * 查询指定任务ID的安全传输通道的证书passphrase。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPassphrase(showPassphraseRequest?: ShowPassphraseRequest) {
            const options = {
                method: "GET",
                url: "/v3/tasks/{task_id}/passphrase",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showPassphraseRequest !== null && showPassphraseRequest !== undefined) {
                if (showPassphraseRequest instanceof ShowPassphraseRequest) {
                    taskId = showPassphraseRequest.taskId;
                } else {
                    taskId = showPassphraseRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showPassphrase.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 迁移Agent将源端服务器信息上报到主机迁移服务后，主机迁移服务会对迁移的可行性进行检测，该接口返回源端服务器的基本信息和检查结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServer(showServerRequest?: ShowServerRequest) {
            const options = {
                method: "GET",
                url: "/v3/sources/{source_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let sourceId;

            if (showServerRequest !== null && showServerRequest !== undefined) {
                if (showServerRequest instanceof ShowServerRequest) {
                    sourceId = showServerRequest.sourceId;
                } else {
                    sourceId = showServerRequest['source_id'];
                }
            }

        
            if (sourceId === null || sourceId === undefined) {
            throw new RequiredError('sourceId','Required parameter sourceId was null or undefined when calling showServer.');
            }

            options.pathParams = { 'source_id': sourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 计算sha256
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSha256(showSha256Request?: ShowSha256Request) {
            const options = {
                method: "GET",
                url: "/v3/sha256/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let key;

            if (showSha256Request !== null && showSha256Request !== undefined) {
                if (showSha256Request instanceof ShowSha256Request) {
                    key = showSha256Request.key;
                } else {
                    key = showSha256Request['key'];
                }
            }

        
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling showSha256.');
            }

            options.pathParams = { 'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定ID的模板中的目的端服务器的密码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTargetPassword(showTargetPasswordRequest?: ShowTargetPasswordRequest) {
            const options = {
                method: "GET",
                url: "/v3/vm/templates/{id}/target-password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showTargetPasswordRequest !== null && showTargetPasswordRequest !== undefined) {
                if (showTargetPasswordRequest instanceof ShowTargetPasswordRequest) {
                    id = showTargetPasswordRequest.id;
                } else {
                    id = showTargetPasswordRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showTargetPassword.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定ID的迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTask(showTaskRequest?: ShowTaskRequest) {
            const options = {
                method: "GET",
                url: "/v3/tasks/{task_id}",
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
         * 查询指定ID的弹性云服务器模板信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTemplate(showTemplateRequest?: ShowTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v3/vm/templates/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showTemplateRequest !== null && showTemplateRequest !== undefined) {
                if (showTemplateRequest instanceof ShowTemplateRequest) {
                    id = showTemplateRequest.id;
                } else {
                    id = showTemplateRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showTemplate.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按时间段查询迁移任务的迁移速率。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showsSpeedLimits(showsSpeedLimitsRequest?: ShowsSpeedLimitsRequest) {
            const options = {
                method: "GET",
                url: "/v3/tasks/{task_id}/speed-limit",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showsSpeedLimitsRequest !== null && showsSpeedLimitsRequest !== undefined) {
                if (showsSpeedLimitsRequest instanceof ShowsSpeedLimitsRequest) {
                    taskId = showsSpeedLimitsRequest.taskId;
                } else {
                    taskId = showsSpeedLimitsRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showsSpeedLimits.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解锁指定任务的目的端服务器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unlockTargetEcs(unlockTargetEcsRequest?: UnlockTargetEcsRequest) {
            const options = {
                method: "POST",
                url: "/v3/tasks/{task_id}/unlock",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (unlockTargetEcsRequest !== null && unlockTargetEcsRequest !== undefined) {
                if (unlockTargetEcsRequest instanceof UnlockTargetEcsRequest) {
                    taskId = unlockTargetEcsRequest.taskId;
                } else {
                    taskId = unlockTargetEcsRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling unlockTargetEcs.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 迁移Agent调用该接口向SMS服务端反馈指定指令的执行结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCommandResult(updateCommandResultRequest?: UpdateCommandResultRequest) {
            const options = {
                method: "POST",
                url: "/v3/sources/{server_id}/command_result",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let serverId;

            if (updateCommandResultRequest !== null && updateCommandResultRequest !== undefined) {
                if (updateCommandResultRequest instanceof UpdateCommandResultRequest) {
                    serverId = updateCommandResultRequest.serverId;
                    body = updateCommandResultRequest.body
                } else {
                    serverId = updateCommandResultRequest['server_id'];
                    body = updateCommandResultRequest['body'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling updateCommandResult.');
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
         * 更新任务对应源端复制状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCopyState(updateCopyStateRequest?: UpdateCopyStateRequest) {
            const options = {
                method: "PUT",
                url: "/v3/sources/{source_id}/changestate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let sourceId;

            if (updateCopyStateRequest !== null && updateCopyStateRequest !== undefined) {
                if (updateCopyStateRequest instanceof UpdateCopyStateRequest) {
                    sourceId = updateCopyStateRequest.sourceId;
                    body = updateCopyStateRequest.body
                } else {
                    sourceId = updateCopyStateRequest['source_id'];
                    body = updateCopyStateRequest['body'];
                }
            }

        
            if (sourceId === null || sourceId === undefined) {
            throw new RequiredError('sourceId','Required parameter sourceId was null or undefined when calling updateCopyState.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'source_id': sourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更改默认迁移项目，注册源端会注册在当前的默认项目下。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDefaultMigproject(updateDefaultMigprojectRequest?: UpdateDefaultMigprojectRequest) {
            const options = {
                method: "PUT",
                url: "/v3/migprojects/{mig_project_id}/default",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let migProjectId;

            if (updateDefaultMigprojectRequest !== null && updateDefaultMigprojectRequest !== undefined) {
                if (updateDefaultMigprojectRequest instanceof UpdateDefaultMigprojectRequest) {
                    migProjectId = updateDefaultMigprojectRequest.migProjectId;
                } else {
                    migProjectId = updateDefaultMigprojectRequest['mig_project_id'];
                }
            }

        
            if (migProjectId === null || migProjectId === undefined) {
            throw new RequiredError('migProjectId','Required parameter migProjectId was null or undefined when calling updateDefaultMigproject.');
            }

            options.pathParams = { 'mig_project_id': migProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新服务器的磁盘信息，此接口会把服务器原有磁盘信息清空，然后更新成新磁盘信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDiskInfo(updateDiskInfoRequest?: UpdateDiskInfoRequest) {
            const options = {
                method: "PUT",
                url: "/v3/sources/{source_id}/diskinfo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let sourceId;

            if (updateDiskInfoRequest !== null && updateDiskInfoRequest !== undefined) {
                if (updateDiskInfoRequest instanceof UpdateDiskInfoRequest) {
                    sourceId = updateDiskInfoRequest.sourceId;
                    body = updateDiskInfoRequest.body
                } else {
                    sourceId = updateDiskInfoRequest['source_id'];
                    body = updateDiskInfoRequest['body'];
                }
            }

        
            if (sourceId === null || sourceId === undefined) {
            throw new RequiredError('sourceId','Required parameter sourceId was null or undefined when calling updateDiskInfo.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'source_id': sourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新迁移项目的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMigproject(updateMigprojectRequest?: UpdateMigprojectRequest) {
            const options = {
                method: "PUT",
                url: "/v3/migprojects/{mig_project_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let migProjectId;

            if (updateMigprojectRequest !== null && updateMigprojectRequest !== undefined) {
                if (updateMigprojectRequest instanceof UpdateMigprojectRequest) {
                    migProjectId = updateMigprojectRequest.migProjectId;
                    body = updateMigprojectRequest.body
                } else {
                    migProjectId = updateMigprojectRequest['mig_project_id'];
                    body = updateMigprojectRequest['body'];
                }
            }

        
            if (migProjectId === null || migProjectId === undefined) {
            throw new RequiredError('migProjectId','Required parameter migProjectId was null or undefined when calling updateMigproject.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'mig_project_id': migProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Agent 上报网络检测相关的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNetworkCheckInfo(updateNetworkCheckInfoRequest?: UpdateNetworkCheckInfoRequest) {
            const options = {
                method: "POST",
                url: "/v3/{task_id}/update-network-check-info",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (updateNetworkCheckInfoRequest !== null && updateNetworkCheckInfoRequest !== undefined) {
                if (updateNetworkCheckInfoRequest instanceof UpdateNetworkCheckInfoRequest) {
                    taskId = updateNetworkCheckInfoRequest.taskId;
                    body = updateNetworkCheckInfoRequest.body
                } else {
                    taskId = updateNetworkCheckInfoRequest['task_id'];
                    body = updateNetworkCheckInfoRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateNetworkCheckInfo.');
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
         * 该功能用来修改SMS服务端的源端名称，方便用户对源端进行管理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateServerName(updateServerNameRequest?: UpdateServerNameRequest) {
            const options = {
                method: "PUT",
                url: "/v3/sources/{source_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let sourceId;

            if (updateServerNameRequest !== null && updateServerNameRequest !== undefined) {
                if (updateServerNameRequest instanceof UpdateServerNameRequest) {
                    sourceId = updateServerNameRequest.sourceId;
                    body = updateServerNameRequest.body
                } else {
                    sourceId = updateServerNameRequest['source_id'];
                    body = updateServerNameRequest['body'];
                }
            }

        
            if (sourceId === null || sourceId === undefined) {
            throw new RequiredError('sourceId','Required parameter sourceId was null or undefined when calling updateServerName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'source_id': sourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置迁移任务的迁移速率。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSpeed(updateSpeedRequest?: UpdateSpeedRequest) {
            const options = {
                method: "POST",
                url: "/v3/tasks/{task_id}/speed-limit",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (updateSpeedRequest !== null && updateSpeedRequest !== undefined) {
                if (updateSpeedRequest instanceof UpdateSpeedRequest) {
                    taskId = updateSpeedRequest.taskId;
                    body = updateSpeedRequest.body
                } else {
                    taskId = updateSpeedRequest['task_id'];
                    body = updateSpeedRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateSpeed.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定ID的迁移任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTask(updateTaskRequest?: UpdateTaskRequest) {
            const options = {
                method: "PUT",
                url: "/v3/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (updateTaskRequest !== null && updateTaskRequest !== undefined) {
                if (updateTaskRequest instanceof UpdateTaskRequest) {
                    taskId = updateTaskRequest.taskId;
                    body = updateTaskRequest.body
                } else {
                    taskId = updateTaskRequest['task_id'];
                    body = updateTaskRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateTask.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口由安装在源端服务器上的迁移Agent在数据迁移阶段调用，用来将迁移的具体进度上报给SMS服务端。
         * 
         * 迁移Agent自动调用此接口用于上报数据迁移进度，您无需调用此接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTaskSpeed(updateTaskSpeedRequest?: UpdateTaskSpeedRequest) {
            const options = {
                method: "PUT",
                url: "/v3/tasks/{task_id}/progress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (updateTaskSpeedRequest !== null && updateTaskSpeedRequest !== undefined) {
                if (updateTaskSpeedRequest instanceof UpdateTaskSpeedRequest) {
                    taskId = updateTaskSpeedRequest.taskId;
                    body = updateTaskSpeedRequest.body
                } else {
                    taskId = updateTaskSpeedRequest['task_id'];
                    body = updateTaskSpeedRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateTaskSpeed.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 管理迁移任务，包括启动任务，暂停任务，同步任务，日志上传，回滚失败迁移任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTaskStatus(updateTaskStatusRequest?: UpdateTaskStatusRequest) {
            const options = {
                method: "POST",
                url: "/v3/tasks/{task_id}/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (updateTaskStatusRequest !== null && updateTaskStatusRequest !== undefined) {
                if (updateTaskStatusRequest instanceof UpdateTaskStatusRequest) {
                    taskId = updateTaskStatusRequest.taskId;
                    body = updateTaskStatusRequest.body
                } else {
                    taskId = updateTaskStatusRequest['task_id'];
                    body = updateTaskStatusRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateTaskStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改源端模板信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTemplate(updateTemplateRequest?: UpdateTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v3/vm/templates/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateTemplateRequest !== null && updateTemplateRequest !== undefined) {
                if (updateTemplateRequest instanceof UpdateTemplateRequest) {
                    id = updateTemplateRequest.id;
                    body = updateTemplateRequest.body
                } else {
                    id = updateTemplateRequest['id'];
                    body = updateTemplateRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateTemplate.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 配置迁移任务特殊设置，例如配置指定同步的文件或路径
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadSpecialConfigurationSetting(uploadSpecialConfigurationSettingRequest?: UploadSpecialConfigurationSettingRequest) {
            const options = {
                method: "POST",
                url: "/v3/tasks/{task_id}/configuration-setting",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (uploadSpecialConfigurationSettingRequest !== null && uploadSpecialConfigurationSettingRequest !== undefined) {
                if (uploadSpecialConfigurationSettingRequest instanceof UploadSpecialConfigurationSettingRequest) {
                    taskId = uploadSpecialConfigurationSettingRequest.taskId;
                    body = uploadSpecialConfigurationSettingRequest.body
                } else {
                    taskId = uploadSpecialConfigurationSettingRequest['task_id'];
                    body = uploadSpecialConfigurationSettingRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling uploadSpecialConfigurationSetting.');
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
         * 源端Agent启动后，访问此接口获取配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConfig() {
            const options = {
                method: "GET",
                url: "/v3/config",
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
         * 查询主机迁移服务的API版本信息。
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
         * 查询主机迁移服务指定API版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApiVersion(showApiVersionRequest?: ShowApiVersionRequest) {
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

            if (showApiVersionRequest !== null && showApiVersionRequest !== undefined) {
                if (showApiVersionRequest instanceof ShowApiVersionRequest) {
                    version = showApiVersionRequest.version;
                } else {
                    version = showApiVersionRequest['version'];
                }
            }

        
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling showApiVersion.');
            }

            options.pathParams = { 'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): SmsClient {
    return new SmsClient(client);
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