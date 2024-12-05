import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionResources } from './model/ActionResources';
import { Agency } from './model/Agency';
import { BatchCreateOrDeleteTagsRequest } from './model/BatchCreateOrDeleteTagsRequest';
import { BatchCreateOrDeleteTagsRequestBody } from './model/BatchCreateOrDeleteTagsRequestBody';
import { BatchCreateOrDeleteTagsResponse } from './model/BatchCreateOrDeleteTagsResponse';
import { CreateAgencyRequest } from './model/CreateAgencyRequest';
import { CreateAgencyRequestBody } from './model/CreateAgencyRequestBody';
import { CreateAgencyResponse } from './model/CreateAgencyResponse';
import { CreateSecretEventRequest } from './model/CreateSecretEventRequest';
import { CreateSecretEventRequestBody } from './model/CreateSecretEventRequestBody';
import { CreateSecretEventResponse } from './model/CreateSecretEventResponse';
import { CreateSecretRequest } from './model/CreateSecretRequest';
import { CreateSecretRequestBody } from './model/CreateSecretRequestBody';
import { CreateSecretResponse } from './model/CreateSecretResponse';
import { CreateSecretTagRequest } from './model/CreateSecretTagRequest';
import { CreateSecretTagRequestBody } from './model/CreateSecretTagRequestBody';
import { CreateSecretTagResponse } from './model/CreateSecretTagResponse';
import { CreateSecretVersionRequest } from './model/CreateSecretVersionRequest';
import { CreateSecretVersionRequestBody } from './model/CreateSecretVersionRequestBody';
import { CreateSecretVersionResponse } from './model/CreateSecretVersionResponse';
import { DeleteSecretEventRequest } from './model/DeleteSecretEventRequest';
import { DeleteSecretEventResponse } from './model/DeleteSecretEventResponse';
import { DeleteSecretForScheduleRequest } from './model/DeleteSecretForScheduleRequest';
import { DeleteSecretForScheduleRequestBody } from './model/DeleteSecretForScheduleRequestBody';
import { DeleteSecretForScheduleResponse } from './model/DeleteSecretForScheduleResponse';
import { DeleteSecretRequest } from './model/DeleteSecretRequest';
import { DeleteSecretResponse } from './model/DeleteSecretResponse';
import { DeleteSecretStageRequest } from './model/DeleteSecretStageRequest';
import { DeleteSecretStageResponse } from './model/DeleteSecretStageResponse';
import { DeleteSecretTagRequest } from './model/DeleteSecretTagRequest';
import { DeleteSecretTagResponse } from './model/DeleteSecretTagResponse';
import { DownloadSecretBlobRequest } from './model/DownloadSecretBlobRequest';
import { DownloadSecretBlobResponse } from './model/DownloadSecretBlobResponse';
import { Event } from './model/Event';
import { ListNotificationRecordsRequest } from './model/ListNotificationRecordsRequest';
import { ListNotificationRecordsResponse } from './model/ListNotificationRecordsResponse';
import { ListProjectSecretsTagsRequest } from './model/ListProjectSecretsTagsRequest';
import { ListProjectSecretsTagsResponse } from './model/ListProjectSecretsTagsResponse';
import { ListResourceInstancesRequest } from './model/ListResourceInstancesRequest';
import { ListResourceInstancesRequestBody } from './model/ListResourceInstancesRequestBody';
import { ListResourceInstancesResponse } from './model/ListResourceInstancesResponse';
import { ListSecretEventsRequest } from './model/ListSecretEventsRequest';
import { ListSecretEventsResponse } from './model/ListSecretEventsResponse';
import { ListSecretTagsRequest } from './model/ListSecretTagsRequest';
import { ListSecretTagsResponse } from './model/ListSecretTagsResponse';
import { ListSecretTaskRequest } from './model/ListSecretTaskRequest';
import { ListSecretTaskResponse } from './model/ListSecretTaskResponse';
import { ListSecretVersionsRequest } from './model/ListSecretVersionsRequest';
import { ListSecretVersionsResponse } from './model/ListSecretVersionsResponse';
import { ListSecretsRequest } from './model/ListSecretsRequest';
import { ListSecretsResponse } from './model/ListSecretsResponse';
import { Notification } from './model/Notification';
import { PageInfo } from './model/PageInfo';
import { Record } from './model/Record';
import { RestoreSecretRequest } from './model/RestoreSecretRequest';
import { RestoreSecretResponse } from './model/RestoreSecretResponse';
import { RotateSecretRequest } from './model/RotateSecretRequest';
import { RotateSecretResponse } from './model/RotateSecretResponse';
import { Secret } from './model/Secret';
import { SecretTask } from './model/SecretTask';
import { ShowAgencyRequest } from './model/ShowAgencyRequest';
import { ShowAgencyResponse } from './model/ShowAgencyResponse';
import { ShowSecretEventRequest } from './model/ShowSecretEventRequest';
import { ShowSecretEventResponse } from './model/ShowSecretEventResponse';
import { ShowSecretFunctionTemplatesRequest } from './model/ShowSecretFunctionTemplatesRequest';
import { ShowSecretFunctionTemplatesResponse } from './model/ShowSecretFunctionTemplatesResponse';
import { ShowSecretRequest } from './model/ShowSecretRequest';
import { ShowSecretResponse } from './model/ShowSecretResponse';
import { ShowSecretStageRequest } from './model/ShowSecretStageRequest';
import { ShowSecretStageResponse } from './model/ShowSecretStageResponse';
import { ShowSecretVersionRequest } from './model/ShowSecretVersionRequest';
import { ShowSecretVersionResponse } from './model/ShowSecretVersionResponse';
import { Stage } from './model/Stage';
import { SysTag } from './model/SysTag';
import { Tag } from './model/Tag';
import { TagItem } from './model/TagItem';
import { TagMatches } from './model/TagMatches';
import { TagResponse } from './model/TagResponse';
import { UpdateSecretEventRequest } from './model/UpdateSecretEventRequest';
import { UpdateSecretEventRequestBody } from './model/UpdateSecretEventRequestBody';
import { UpdateSecretEventResponse } from './model/UpdateSecretEventResponse';
import { UpdateSecretRequest } from './model/UpdateSecretRequest';
import { UpdateSecretRequestBody } from './model/UpdateSecretRequestBody';
import { UpdateSecretResponse } from './model/UpdateSecretResponse';
import { UpdateSecretStageRequest } from './model/UpdateSecretStageRequest';
import { UpdateSecretStageRequestBody } from './model/UpdateSecretStageRequestBody';
import { UpdateSecretStageResponse } from './model/UpdateSecretStageResponse';
import { UpdateVersionRequest } from './model/UpdateVersionRequest';
import { UpdateVersionRequestBody } from './model/UpdateVersionRequestBody';
import { UpdateVersionResponse } from './model/UpdateVersionResponse';
import { UploadSecretBlobRequest } from './model/UploadSecretBlobRequest';
import { UploadSecretBlobRequestBody } from './model/UploadSecretBlobRequestBody';
import { UploadSecretBlobResponse } from './model/UploadSecretBlobResponse';
import { Version } from './model/Version';
import { VersionMetadata } from './model/VersionMetadata';

export class CsmsClient {
    public static newBuilder(): ClientBuilder<CsmsClient> {
            let client = new ClientBuilder<CsmsClient>(newClient);
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
     * - 功能介绍：批量添加或删除凭据标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加或删除凭据标签
     * @param {string} secretId 凭据ID
     * @param {BatchCreateOrDeleteTagsRequestBody} batchCreateOrDeleteTagsRequestBody action
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateOrDeleteTags(batchCreateOrDeleteTagsRequest?: BatchCreateOrDeleteTagsRequest): Promise<BatchCreateOrDeleteTagsResponse> {
        const options = ParamCreater().batchCreateOrDeleteTags(batchCreateOrDeleteTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建服务委托。用于创建凭据管理服务相关委托和函数工作流相关委托。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建服务委托
     * @param {CreateAgencyRequestBody} createAgencyRequestBody 创建服务委托的请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAgency(createAgencyRequest?: CreateAgencyRequest): Promise<CreateAgencyResponse> {
        const options = ParamCreater().createAgency(createAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建新的凭据，并将凭据值存入凭据的初始版本。
     * 
     * 凭据管理服务将凭据值加密后，存储在凭据对象下的版本中。每个版本可与多个凭据版本状态相关联，凭据版本状态用于标识凭据版本处于的阶段，没有版本状态标记的版本视为已弃用，可用凭据管理服务自动删除。
     * 
     * 初始版本的状态被标记为SYSCURRENT。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建凭据
     * @param {CreateSecretRequestBody} createSecretRequestBody 创建凭据请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecret(createSecretRequest?: CreateSecretRequest): Promise<CreateSecretResponse> {
        const options = ParamCreater().createSecret(createSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建事件，事件可配置在一个或多个凭据对象上。当事件为启用状态且包含的基础事件类型在凭据对象上触发时，云服务会将对应的事件通知发送至事件指定的通知主题上。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建事件
     * @param {CreateSecretEventRequestBody} createSecretEventRequestBody 创建凭据事件通知请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecretEvent(createSecretEventRequest?: CreateSecretEventRequest): Promise<CreateSecretEventResponse> {
        const options = ParamCreater().createSecretEvent(createSecretEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加凭据标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加凭据标签
     * @param {string} secretId 凭据ID
     * @param {CreateSecretTagRequestBody} createSecretTagRequestBody 创建凭据标签消息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecretTag(createSecretTagRequest?: CreateSecretTagRequest): Promise<CreateSecretTagResponse> {
        const options = ParamCreater().createSecretTag(createSecretTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定的凭据中，创建一个新的凭据版本，用于加密保管新的凭据值。默认情况下，新创建的凭据版本被标记为SYSCURRENT状态，而SYSCURRENT标记的前一个凭据版本被标记为SYSPREVIOUS状态。您可以通过指定VersionStage参数来覆盖默认行为。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建凭据版本
     * @param {string} secretName 凭据名称。
     * @param {CreateSecretVersionRequestBody} createSecretVersionRequestBody 创建凭据请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecretVersion(createSecretVersionRequest?: CreateSecretVersionRequest): Promise<CreateSecretVersionResponse> {
        const options = ParamCreater().createSecretVersion(createSecretVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 立即删除指定的凭据，且无法恢复。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 立即删除凭据
     * @param {string} secretName 凭据名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecret(deleteSecretRequest?: DeleteSecretRequest): Promise<DeleteSecretResponse> {
        const options = ParamCreater().deleteSecret(deleteSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 立即删除指定的事件，且无法恢复。如事件存在凭据引用，则无法删除，请先解除关联。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 立即删除事件
     * @param {string} eventName 事件通知的名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecretEvent(deleteSecretEventRequest?: DeleteSecretEventRequest): Promise<DeleteSecretEventResponse> {
        const options = ParamCreater().deleteSecretEvent(deleteSecretEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定延迟删除时间，创建删除凭据的定时任务，可设置7~30天的的延迟删除时间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建凭据的定时删除任务
     * @param {string} secretName 凭据名称。
     * @param {DeleteSecretForScheduleRequestBody} deleteSecretForScheduleRequestBody 计划删除凭据请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecretForSchedule(deleteSecretForScheduleRequest?: DeleteSecretForScheduleRequest): Promise<DeleteSecretForScheduleResponse> {
        const options = ParamCreater().deleteSecretForSchedule(deleteSecretForScheduleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的凭据版本状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除凭据的版本状态
     * @param {string} secretName 凭据的资源标识符。
     * @param {string} stageName 凭据版本状态的名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecretStage(deleteSecretStageRequest?: DeleteSecretStageRequest): Promise<DeleteSecretStageResponse> {
        const options = ParamCreater().deleteSecretStage(deleteSecretStageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除凭据标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除凭据标签
     * @param {string} secretId 凭据ID
     * @param {string} key 标签键的值
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSecretTag(deleteSecretTagRequest?: DeleteSecretTagRequest): Promise<DeleteSecretTagResponse> {
        const options = ParamCreater().deleteSecretTag(deleteSecretTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载指定凭据的备份文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载凭据备份
     * @param {string} secretName 凭据的名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadSecretBlob(downloadSecretBlobRequest?: DownloadSecretBlobRequest): Promise<DownloadSecretBlobResponse> {
        const options = ParamCreater().downloadSecretBlob(downloadSecretBlobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询三个月内所有已触发的事件通知记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询已触发的事件通知记录
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNotificationRecords(listNotificationRecordsRequest?: ListNotificationRecordsRequest): Promise<ListNotificationRecordsResponse> {
        const options = ParamCreater().listNotificationRecords();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户在指定项目下的所有凭据标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectSecretsTags(listProjectSecretsTagsRequest?: ListProjectSecretsTagsRequest): Promise<ListProjectSecretsTagsResponse> {
        const options = ParamCreater().listProjectSecretsTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询凭据实例。通过标签过滤，筛选用户凭据，返回凭据列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据实例
     * @param {string} resourceInstances 定值为resource_instances。
     * @param {ListResourceInstancesRequestBody} listResourceInstancesRequestBody action
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceInstances(listResourceInstancesRequest?: ListResourceInstancesRequest): Promise<ListResourceInstancesResponse> {
        const options = ParamCreater().listResourceInstances(listResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前用户在本项目下创建的所有事件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件列表
     * @param {string} [limit] 每页返回的个数。  默认值：50。
     * @param {string} [marker] 分页查询起始的事件名称，为空时为查询第一页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecretEvents(listSecretEventsRequest?: ListSecretEventsRequest): Promise<ListSecretEventsResponse> {
        const options = ParamCreater().listSecretEvents(listSecretEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询凭据标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据标签
     * @param {string} secretId 凭据ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecretTags(listSecretTagsRequest?: ListSecretTagsRequest): Promise<ListSecretTagsResponse> {
        const options = ParamCreater().listSecretTags(listSecretTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务列表
     * @param {string} [secretName] 凭据的名称。
     * @param {'SUCCESS' | 'FAILED'} [status] 任务状态。取值 ：  - SUCCESS ：任务轮转成功。 - FAILED ：任务轮转失败。
     * @param {string} [taskId] 任务ID。 该参数与其他参数不能同时存在。
     * @param {number} [limit] 每页返回的个数。 默认值：50。
     * @param {string} [marker] 分页查询起始的任务ID，为空时为查询第一页。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecretTask(listSecretTaskRequest?: ListSecretTaskRequest): Promise<ListSecretTaskResponse> {
        const options = ParamCreater().listSecretTask(listSecretTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定凭据下的版本列表信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据的版本列表
     * @param {string} secretName 凭据名称。
     * @param {string} [marker] 分页参数，取值为上一页数据的最后一条记录的版本号。
     * @param {number} [limit] 每页显示的条目数量。默认值50。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecretVersions(listSecretVersionsRequest?: ListSecretVersionsRequest): Promise<ListSecretVersionsResponse> {
        const options = ParamCreater().listSecretVersions(listSecretVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前用户在本项目下创建的所有凭据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据列表
     * @param {string} [limit] 每页返回的个数。  默认值：50。
     * @param {string} [marker] 分页查询起始的凭据名称，为空时为查询第一页
     * @param {string} [eventName] 指定事件名称时，仅返回关联该事件的凭据
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecrets(listSecretsRequest?: ListSecretsRequest): Promise<ListSecretsResponse> {
        const options = ParamCreater().listSecrets(listSecretsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消凭据的定时删除任务，凭据对象恢复可使用状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消凭据的定时删除任务
     * @param {string} secretName 凭据名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreSecret(restoreSecretRequest?: RestoreSecretRequest): Promise<RestoreSecretResponse> {
        const options = ParamCreater().restoreSecret(restoreSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 立即执行轮转凭据。在指定的凭据中，创建一个新的凭据版本，用于加密存储后台随机产生的凭据值。同时将新创建的凭据版本标记为SYSCURRENT状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 轮转凭据
     * @param {string} secretName 凭据名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rotateSecret(rotateSecretRequest?: RotateSecretRequest): Promise<RotateSecretResponse> {
        const options = ParamCreater().rotateSecret(rotateSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看是否有服务委托
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看是否有服务委托
     * @param {'RDS-FG' | 'GaussDB-FG'} secretType 凭据类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAgency(showAgencyRequest?: ShowAgencyRequest): Promise<ShowAgencyResponse> {
        const options = ParamCreater().showAgency(showAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定凭据的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据
     * @param {string} secretName 凭据的名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecret(showSecretRequest?: ShowSecretRequest): Promise<ShowSecretResponse> {
        const options = ParamCreater().showSecret(showSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定事件的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件
     * @param {string} eventName 事件通知的名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecretEvent(showSecretEventRequest?: ShowSecretEventRequest): Promise<ShowSecretEventResponse> {
        const options = ParamCreater().showSecretEvent(showSecretEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取凭据轮转函数模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取凭据轮转函数模板
     * @param {'RDS-FG' | 'GaussDB-FG'} secretType 凭据类型。
     * @param {'SingleUser' | 'MultiUser'} secretSubType 凭据轮转账号类型。 - SingleUser：单用户模式轮转 - MultiUser：双用户模式轮转
     * @param {'mysql' | 'postgresql' | 'sqlserver'} [engine] 数据库类型。凭据类型为RDS-FG时为必填参数，可传入mysql、postgresql、sqlserver。其余凭据类型不支持。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecretFunctionTemplates(showSecretFunctionTemplatesRequest?: ShowSecretFunctionTemplatesRequest): Promise<ShowSecretFunctionTemplatesResponse> {
        const options = ParamCreater().showSecretFunctionTemplates(showSecretFunctionTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定凭据版本状态标记的版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据的版本状态
     * @param {string} secretName 凭据名称。
     * @param {string} stageName 凭据版本状态的名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecretStage(showSecretStageRequest?: ShowSecretStageRequest): Promise<ShowSecretStageResponse> {
        const options = ParamCreater().showSecretStage(showSecretStageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定凭据版本的信息和版本中的明文凭据值，只能查询ENABLED状态的凭据。
     * 通过/v1/{project_id}/secrets/{secret_name}/versions/latest （即将当前接口URL中的{version_id}赋值为latest）可访问凭据最新版本的凭据值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据的版本与凭据值
     * @param {string} secretName 凭据名称。
     * @param {string} versionId 凭据的版本标识符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSecretVersion(showSecretVersionRequest?: ShowSecretVersionRequest): Promise<ShowSecretVersionResponse> {
        const options = ParamCreater().showSecretVersion(showSecretVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定凭据的元数据信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新凭据
     * @param {string} secretName 凭据名称。
     * @param {UpdateSecretRequestBody} updateSecretRequestBody 创建凭据请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecret(updateSecretRequest?: UpdateSecretRequest): Promise<UpdateSecretResponse> {
        const options = ParamCreater().updateSecret(updateSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定事件的元数据信息。支持更新的元数据包含事件启用状态、基础类型列表、通知主题。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新事件
     * @param {string} eventName 事件通知名称。
     * @param {UpdateSecretEventRequestBody} updateSecretEventRequestBody 更新事件通知的请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecretEvent(updateSecretEventRequest?: UpdateSecretEventRequest): Promise<UpdateSecretEventResponse> {
        const options = ParamCreater().updateSecretEvent(updateSecretEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新凭据的版本状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新凭据的版本状态
     * @param {string} secretName 凭据名称。
     * @param {string} stageName 凭据版本状态的名称。满足 \&#39;^[a-zA-Z0-9_-]{1,64}$\&#39;
     * @param {UpdateSecretStageRequestBody} updateSecretStageRequestBody 创建凭据版本状态请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSecretStage(updateSecretStageRequest?: UpdateSecretStageRequest): Promise<UpdateSecretStageResponse> {
        const options = ParamCreater().updateSecretStage(updateSecretStageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当前支持更新指定凭据版本的有效期，只能更新ENABLED状态的凭据。在关联订阅的事件包含“版本过期”基础事件类型时，每次更新版本有效期后仅会触发一次事件通知。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新凭据版本
     * @param {string} secretName 凭据名称。
     * @param {string} versionId 凭据的版本标识符。
     * @param {UpdateVersionRequestBody} updateVersionRequestBody 更新凭据版本有效期请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVersion(updateVersionRequest?: UpdateVersionRequest): Promise<UpdateVersionResponse> {
        const options = ParamCreater().updateVersion(updateVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过上传凭据备份文件，恢复凭据对象
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复凭据对象
     * @param {UploadSecretBlobRequestBody} uploadSecretBlobRequestBody 恢复凭据请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadSecretBlob(uploadSecretBlobRequest?: UploadSecretBlobRequest): Promise<UploadSecretBlobResponse> {
        const options = ParamCreater().uploadSecretBlob(uploadSecretBlobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * - 功能介绍：批量添加或删除凭据标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateOrDeleteTags(batchCreateOrDeleteTagsRequest?: BatchCreateOrDeleteTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/csms/{secret_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let secretId;

            if (batchCreateOrDeleteTagsRequest !== null && batchCreateOrDeleteTagsRequest !== undefined) {
                if (batchCreateOrDeleteTagsRequest instanceof BatchCreateOrDeleteTagsRequest) {
                    secretId = batchCreateOrDeleteTagsRequest.secretId;
                    body = batchCreateOrDeleteTagsRequest.body
                } else {
                    secretId = batchCreateOrDeleteTagsRequest['secret_id'];
                    body = batchCreateOrDeleteTagsRequest['body'];
                }
            }

        
            if (secretId === null || secretId === undefined) {
            throw new RequiredError('secretId','Required parameter secretId was null or undefined when calling batchCreateOrDeleteTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'secret_id': secretId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建服务委托。用于创建凭据管理服务相关委托和函数工作流相关委托。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAgency(createAgencyRequest?: CreateAgencyRequest) {
            const options = {
                method: "POST",
                url: "/v1/csms/agencies",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAgencyRequest !== null && createAgencyRequest !== undefined) {
                if (createAgencyRequest instanceof CreateAgencyRequest) {
                    body = createAgencyRequest.body
                } else {
                    body = createAgencyRequest['body'];
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
         * 创建新的凭据，并将凭据值存入凭据的初始版本。
         * 
         * 凭据管理服务将凭据值加密后，存储在凭据对象下的版本中。每个版本可与多个凭据版本状态相关联，凭据版本状态用于标识凭据版本处于的阶段，没有版本状态标记的版本视为已弃用，可用凭据管理服务自动删除。
         * 
         * 初始版本的状态被标记为SYSCURRENT。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecret(createSecretRequest?: CreateSecretRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/secrets",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSecretRequest !== null && createSecretRequest !== undefined) {
                if (createSecretRequest instanceof CreateSecretRequest) {
                    body = createSecretRequest.body
                } else {
                    body = createSecretRequest['body'];
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
         * 创建事件，事件可配置在一个或多个凭据对象上。当事件为启用状态且包含的基础事件类型在凭据对象上触发时，云服务会将对应的事件通知发送至事件指定的通知主题上。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecretEvent(createSecretEventRequest?: CreateSecretEventRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/csms/events",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createSecretEventRequest !== null && createSecretEventRequest !== undefined) {
                if (createSecretEventRequest instanceof CreateSecretEventRequest) {
                    body = createSecretEventRequest.body
                } else {
                    body = createSecretEventRequest['body'];
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
         * 添加凭据标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecretTag(createSecretTagRequest?: CreateSecretTagRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/csms/{secret_id}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let secretId;

            if (createSecretTagRequest !== null && createSecretTagRequest !== undefined) {
                if (createSecretTagRequest instanceof CreateSecretTagRequest) {
                    secretId = createSecretTagRequest.secretId;
                    body = createSecretTagRequest.body
                } else {
                    secretId = createSecretTagRequest['secret_id'];
                    body = createSecretTagRequest['body'];
                }
            }

        
            if (secretId === null || secretId === undefined) {
            throw new RequiredError('secretId','Required parameter secretId was null or undefined when calling createSecretTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'secret_id': secretId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定的凭据中，创建一个新的凭据版本，用于加密保管新的凭据值。默认情况下，新创建的凭据版本被标记为SYSCURRENT状态，而SYSCURRENT标记的前一个凭据版本被标记为SYSPREVIOUS状态。您可以通过指定VersionStage参数来覆盖默认行为。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecretVersion(createSecretVersionRequest?: CreateSecretVersionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/secrets/{secret_name}/versions",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let secretName;

            if (createSecretVersionRequest !== null && createSecretVersionRequest !== undefined) {
                if (createSecretVersionRequest instanceof CreateSecretVersionRequest) {
                    secretName = createSecretVersionRequest.secretName;
                    body = createSecretVersionRequest.body
                } else {
                    secretName = createSecretVersionRequest['secret_name'];
                    body = createSecretVersionRequest['body'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling createSecretVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 立即删除指定的凭据，且无法恢复。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecret(deleteSecretRequest?: DeleteSecretRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/secrets/{secret_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;

            if (deleteSecretRequest !== null && deleteSecretRequest !== undefined) {
                if (deleteSecretRequest instanceof DeleteSecretRequest) {
                    secretName = deleteSecretRequest.secretName;
                } else {
                    secretName = deleteSecretRequest['secret_name'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling deleteSecret.');
            }

            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 立即删除指定的事件，且无法恢复。如事件存在凭据引用，则无法删除，请先解除关联。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecretEvent(deleteSecretEventRequest?: DeleteSecretEventRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/csms/events/{event_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let eventName;

            if (deleteSecretEventRequest !== null && deleteSecretEventRequest !== undefined) {
                if (deleteSecretEventRequest instanceof DeleteSecretEventRequest) {
                    eventName = deleteSecretEventRequest.eventName;
                } else {
                    eventName = deleteSecretEventRequest['event_name'];
                }
            }

        
            if (eventName === null || eventName === undefined) {
            throw new RequiredError('eventName','Required parameter eventName was null or undefined when calling deleteSecretEvent.');
            }

            options.pathParams = { 'event_name': eventName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定延迟删除时间，创建删除凭据的定时任务，可设置7~30天的的延迟删除时间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecretForSchedule(deleteSecretForScheduleRequest?: DeleteSecretForScheduleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/secrets/{secret_name}/scheduled-deleted-tasks/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let secretName;

            if (deleteSecretForScheduleRequest !== null && deleteSecretForScheduleRequest !== undefined) {
                if (deleteSecretForScheduleRequest instanceof DeleteSecretForScheduleRequest) {
                    secretName = deleteSecretForScheduleRequest.secretName;
                    body = deleteSecretForScheduleRequest.body
                } else {
                    secretName = deleteSecretForScheduleRequest['secret_name'];
                    body = deleteSecretForScheduleRequest['body'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling deleteSecretForSchedule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的凭据版本状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecretStage(deleteSecretStageRequest?: DeleteSecretStageRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/secrets/{secret_name}/stages/{stage_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;
            
            let stageName;

            if (deleteSecretStageRequest !== null && deleteSecretStageRequest !== undefined) {
                if (deleteSecretStageRequest instanceof DeleteSecretStageRequest) {
                    secretName = deleteSecretStageRequest.secretName;
                    stageName = deleteSecretStageRequest.stageName;
                } else {
                    secretName = deleteSecretStageRequest['secret_name'];
                    stageName = deleteSecretStageRequest['stage_name'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling deleteSecretStage.');
            }
            if (stageName === null || stageName === undefined) {
            throw new RequiredError('stageName','Required parameter stageName was null or undefined when calling deleteSecretStage.');
            }

            options.pathParams = { 'secret_name': secretName,'stage_name': stageName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除凭据标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSecretTag(deleteSecretTagRequest?: DeleteSecretTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/csms/{secret_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretId;
            
            let key;

            if (deleteSecretTagRequest !== null && deleteSecretTagRequest !== undefined) {
                if (deleteSecretTagRequest instanceof DeleteSecretTagRequest) {
                    secretId = deleteSecretTagRequest.secretId;
                    key = deleteSecretTagRequest.key;
                } else {
                    secretId = deleteSecretTagRequest['secret_id'];
                    key = deleteSecretTagRequest['key'];
                }
            }

        
            if (secretId === null || secretId === undefined) {
            throw new RequiredError('secretId','Required parameter secretId was null or undefined when calling deleteSecretTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteSecretTag.');
            }

            options.pathParams = { 'secret_id': secretId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载指定凭据的备份文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadSecretBlob(downloadSecretBlobRequest?: DownloadSecretBlobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/secrets/{secret_name}/backup",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;

            if (downloadSecretBlobRequest !== null && downloadSecretBlobRequest !== undefined) {
                if (downloadSecretBlobRequest instanceof DownloadSecretBlobRequest) {
                    secretName = downloadSecretBlobRequest.secretName;
                } else {
                    secretName = downloadSecretBlobRequest['secret_name'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling downloadSecretBlob.');
            }

            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询三个月内所有已触发的事件通知记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNotificationRecords() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/csms/notification-records",
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
         * 查询用户在指定项目下的所有凭据标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectSecretsTags() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/csms/tags",
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
         * 查询凭据实例。通过标签过滤，筛选用户凭据，返回凭据列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceInstances(listResourceInstancesRequest?: ListResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/csms/{resource_instances}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceInstances;

            if (listResourceInstancesRequest !== null && listResourceInstancesRequest !== undefined) {
                if (listResourceInstancesRequest instanceof ListResourceInstancesRequest) {
                    resourceInstances = listResourceInstancesRequest.resourceInstances;
                    body = listResourceInstancesRequest.body
                } else {
                    resourceInstances = listResourceInstancesRequest['resource_instances'];
                    body = listResourceInstancesRequest['body'];
                }
            }

        
            if (resourceInstances === null || resourceInstances === undefined) {
            throw new RequiredError('resourceInstances','Required parameter resourceInstances was null or undefined when calling listResourceInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_instances': resourceInstances, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前用户在本项目下创建的所有事件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecretEvents(listSecretEventsRequest?: ListSecretEventsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/csms/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listSecretEventsRequest !== null && listSecretEventsRequest !== undefined) {
                if (listSecretEventsRequest instanceof ListSecretEventsRequest) {
                    limit = listSecretEventsRequest.limit;
                    marker = listSecretEventsRequest.marker;
                } else {
                    limit = listSecretEventsRequest['limit'];
                    marker = listSecretEventsRequest['marker'];
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
         * 查询凭据标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecretTags(listSecretTagsRequest?: ListSecretTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/csms/{secret_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretId;

            if (listSecretTagsRequest !== null && listSecretTagsRequest !== undefined) {
                if (listSecretTagsRequest instanceof ListSecretTagsRequest) {
                    secretId = listSecretTagsRequest.secretId;
                } else {
                    secretId = listSecretTagsRequest['secret_id'];
                }
            }

        
            if (secretId === null || secretId === undefined) {
            throw new RequiredError('secretId','Required parameter secretId was null or undefined when calling listSecretTags.');
            }

            options.pathParams = { 'secret_id': secretId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecretTask(listSecretTaskRequest?: ListSecretTaskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/csms/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let secretName;
            
            let status;
            
            let taskId;
            
            let limit;
            
            let marker;

            if (listSecretTaskRequest !== null && listSecretTaskRequest !== undefined) {
                if (listSecretTaskRequest instanceof ListSecretTaskRequest) {
                    secretName = listSecretTaskRequest.secretName;
                    status = listSecretTaskRequest.status;
                    taskId = listSecretTaskRequest.taskId;
                    limit = listSecretTaskRequest.limit;
                    marker = listSecretTaskRequest.marker;
                } else {
                    secretName = listSecretTaskRequest['secret_name'];
                    status = listSecretTaskRequest['status'];
                    taskId = listSecretTaskRequest['task_id'];
                    limit = listSecretTaskRequest['limit'];
                    marker = listSecretTaskRequest['marker'];
                }
            }

        
            if (secretName !== null && secretName !== undefined) {
                localVarQueryParameter['secret_name'] = secretName;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (taskId !== null && taskId !== undefined) {
                localVarQueryParameter['task_id'] = taskId;
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
         * 查询指定凭据下的版本列表信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecretVersions(listSecretVersionsRequest?: ListSecretVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/secrets/{secret_name}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let secretName;
            
            let marker;
            
            let limit;

            if (listSecretVersionsRequest !== null && listSecretVersionsRequest !== undefined) {
                if (listSecretVersionsRequest instanceof ListSecretVersionsRequest) {
                    secretName = listSecretVersionsRequest.secretName;
                    marker = listSecretVersionsRequest.marker;
                    limit = listSecretVersionsRequest.limit;
                } else {
                    secretName = listSecretVersionsRequest['secret_name'];
                    marker = listSecretVersionsRequest['marker'];
                    limit = listSecretVersionsRequest['limit'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling listSecretVersions.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前用户在本项目下创建的所有凭据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecrets(listSecretsRequest?: ListSecretsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/secrets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let eventName;

            if (listSecretsRequest !== null && listSecretsRequest !== undefined) {
                if (listSecretsRequest instanceof ListSecretsRequest) {
                    limit = listSecretsRequest.limit;
                    marker = listSecretsRequest.marker;
                    eventName = listSecretsRequest.eventName;
                } else {
                    limit = listSecretsRequest['limit'];
                    marker = listSecretsRequest['marker'];
                    eventName = listSecretsRequest['event_name'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (eventName !== null && eventName !== undefined) {
                localVarQueryParameter['event_name'] = eventName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 取消凭据的定时删除任务，凭据对象恢复可使用状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreSecret(restoreSecretRequest?: RestoreSecretRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/secrets/{secret_name}/scheduled-deleted-tasks/cancel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;

            if (restoreSecretRequest !== null && restoreSecretRequest !== undefined) {
                if (restoreSecretRequest instanceof RestoreSecretRequest) {
                    secretName = restoreSecretRequest.secretName;
                } else {
                    secretName = restoreSecretRequest['secret_name'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling restoreSecret.');
            }

            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 立即执行轮转凭据。在指定的凭据中，创建一个新的凭据版本，用于加密存储后台随机产生的凭据值。同时将新创建的凭据版本标记为SYSCURRENT状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rotateSecret(rotateSecretRequest?: RotateSecretRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/secrets/{secret_name}/rotate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;

            if (rotateSecretRequest !== null && rotateSecretRequest !== undefined) {
                if (rotateSecretRequest instanceof RotateSecretRequest) {
                    secretName = rotateSecretRequest.secretName;
                } else {
                    secretName = rotateSecretRequest['secret_name'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling rotateSecret.');
            }

            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看是否有服务委托
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAgency(showAgencyRequest?: ShowAgencyRequest) {
            const options = {
                method: "GET",
                url: "/v1/csms/agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let secretType;

            if (showAgencyRequest !== null && showAgencyRequest !== undefined) {
                if (showAgencyRequest instanceof ShowAgencyRequest) {
                    secretType = showAgencyRequest.secretType;
                } else {
                    secretType = showAgencyRequest['secret_type'];
                }
            }

        
            if (secretType === null || secretType === undefined) {
                throw new RequiredError('secretType','Required parameter secretType was null or undefined when calling showAgency.');
            }
            if (secretType !== null && secretType !== undefined) {
                localVarQueryParameter['secret_type'] = secretType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定凭据的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecret(showSecretRequest?: ShowSecretRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/secrets/{secret_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;

            if (showSecretRequest !== null && showSecretRequest !== undefined) {
                if (showSecretRequest instanceof ShowSecretRequest) {
                    secretName = showSecretRequest.secretName;
                } else {
                    secretName = showSecretRequest['secret_name'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling showSecret.');
            }

            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定事件的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecretEvent(showSecretEventRequest?: ShowSecretEventRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/csms/events/{event_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let eventName;

            if (showSecretEventRequest !== null && showSecretEventRequest !== undefined) {
                if (showSecretEventRequest instanceof ShowSecretEventRequest) {
                    eventName = showSecretEventRequest.eventName;
                } else {
                    eventName = showSecretEventRequest['event_name'];
                }
            }

        
            if (eventName === null || eventName === undefined) {
            throw new RequiredError('eventName','Required parameter eventName was null or undefined when calling showSecretEvent.');
            }

            options.pathParams = { 'event_name': eventName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取凭据轮转函数模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecretFunctionTemplates(showSecretFunctionTemplatesRequest?: ShowSecretFunctionTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/csms/function-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let secretType;
            
            let secretSubType;
            
            let engine;

            if (showSecretFunctionTemplatesRequest !== null && showSecretFunctionTemplatesRequest !== undefined) {
                if (showSecretFunctionTemplatesRequest instanceof ShowSecretFunctionTemplatesRequest) {
                    secretType = showSecretFunctionTemplatesRequest.secretType;
                    secretSubType = showSecretFunctionTemplatesRequest.secretSubType;
                    engine = showSecretFunctionTemplatesRequest.engine;
                } else {
                    secretType = showSecretFunctionTemplatesRequest['secret_type'];
                    secretSubType = showSecretFunctionTemplatesRequest['secret_sub_type'];
                    engine = showSecretFunctionTemplatesRequest['engine'];
                }
            }

        
            if (secretType === null || secretType === undefined) {
                throw new RequiredError('secretType','Required parameter secretType was null or undefined when calling showSecretFunctionTemplates.');
            }
            if (secretType !== null && secretType !== undefined) {
                localVarQueryParameter['secret_type'] = secretType;
            }
            if (secretSubType === null || secretSubType === undefined) {
                throw new RequiredError('secretSubType','Required parameter secretSubType was null or undefined when calling showSecretFunctionTemplates.');
            }
            if (secretSubType !== null && secretSubType !== undefined) {
                localVarQueryParameter['secret_sub_type'] = secretSubType;
            }
            if (engine !== null && engine !== undefined) {
                localVarQueryParameter['engine'] = engine;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定凭据版本状态标记的版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecretStage(showSecretStageRequest?: ShowSecretStageRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/secrets/{secret_name}/stages/{stage_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;
            
            let stageName;

            if (showSecretStageRequest !== null && showSecretStageRequest !== undefined) {
                if (showSecretStageRequest instanceof ShowSecretStageRequest) {
                    secretName = showSecretStageRequest.secretName;
                    stageName = showSecretStageRequest.stageName;
                } else {
                    secretName = showSecretStageRequest['secret_name'];
                    stageName = showSecretStageRequest['stage_name'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling showSecretStage.');
            }
            if (stageName === null || stageName === undefined) {
            throw new RequiredError('stageName','Required parameter stageName was null or undefined when calling showSecretStage.');
            }

            options.pathParams = { 'secret_name': secretName,'stage_name': stageName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定凭据版本的信息和版本中的明文凭据值，只能查询ENABLED状态的凭据。
         * 通过/v1/{project_id}/secrets/{secret_name}/versions/latest （即将当前接口URL中的{version_id}赋值为latest）可访问凭据最新版本的凭据值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSecretVersion(showSecretVersionRequest?: ShowSecretVersionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/secrets/{secret_name}/versions/{version_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let secretName;
            
            let versionId;

            if (showSecretVersionRequest !== null && showSecretVersionRequest !== undefined) {
                if (showSecretVersionRequest instanceof ShowSecretVersionRequest) {
                    secretName = showSecretVersionRequest.secretName;
                    versionId = showSecretVersionRequest.versionId;
                } else {
                    secretName = showSecretVersionRequest['secret_name'];
                    versionId = showSecretVersionRequest['version_id'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling showSecretVersion.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling showSecretVersion.');
            }

            options.pathParams = { 'secret_name': secretName,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定凭据的元数据信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecret(updateSecretRequest?: UpdateSecretRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/secrets/{secret_name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let secretName;

            if (updateSecretRequest !== null && updateSecretRequest !== undefined) {
                if (updateSecretRequest instanceof UpdateSecretRequest) {
                    secretName = updateSecretRequest.secretName;
                    body = updateSecretRequest.body
                } else {
                    secretName = updateSecretRequest['secret_name'];
                    body = updateSecretRequest['body'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling updateSecret.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'secret_name': secretName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定事件的元数据信息。支持更新的元数据包含事件启用状态、基础类型列表、通知主题。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecretEvent(updateSecretEventRequest?: UpdateSecretEventRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/csms/events/{event_name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let eventName;

            if (updateSecretEventRequest !== null && updateSecretEventRequest !== undefined) {
                if (updateSecretEventRequest instanceof UpdateSecretEventRequest) {
                    eventName = updateSecretEventRequest.eventName;
                    body = updateSecretEventRequest.body
                } else {
                    eventName = updateSecretEventRequest['event_name'];
                    body = updateSecretEventRequest['body'];
                }
            }

        
            if (eventName === null || eventName === undefined) {
            throw new RequiredError('eventName','Required parameter eventName was null or undefined when calling updateSecretEvent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'event_name': eventName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新凭据的版本状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSecretStage(updateSecretStageRequest?: UpdateSecretStageRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/secrets/{secret_name}/stages/{stage_name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let secretName;
            
            let stageName;

            if (updateSecretStageRequest !== null && updateSecretStageRequest !== undefined) {
                if (updateSecretStageRequest instanceof UpdateSecretStageRequest) {
                    secretName = updateSecretStageRequest.secretName;
                    stageName = updateSecretStageRequest.stageName;
                    body = updateSecretStageRequest.body
                } else {
                    secretName = updateSecretStageRequest['secret_name'];
                    stageName = updateSecretStageRequest['stage_name'];
                    body = updateSecretStageRequest['body'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling updateSecretStage.');
            }
            if (stageName === null || stageName === undefined) {
            throw new RequiredError('stageName','Required parameter stageName was null or undefined when calling updateSecretStage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'secret_name': secretName,'stage_name': stageName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当前支持更新指定凭据版本的有效期，只能更新ENABLED状态的凭据。在关联订阅的事件包含“版本过期”基础事件类型时，每次更新版本有效期后仅会触发一次事件通知。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVersion(updateVersionRequest?: UpdateVersionRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/secrets/{secret_name}/versions/{version_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let secretName;
            
            let versionId;

            if (updateVersionRequest !== null && updateVersionRequest !== undefined) {
                if (updateVersionRequest instanceof UpdateVersionRequest) {
                    secretName = updateVersionRequest.secretName;
                    versionId = updateVersionRequest.versionId;
                    body = updateVersionRequest.body
                } else {
                    secretName = updateVersionRequest['secret_name'];
                    versionId = updateVersionRequest['version_id'];
                    body = updateVersionRequest['body'];
                }
            }

        
            if (secretName === null || secretName === undefined) {
            throw new RequiredError('secretName','Required parameter secretName was null or undefined when calling updateVersion.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling updateVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'secret_name': secretName,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过上传凭据备份文件，恢复凭据对象
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadSecretBlob(uploadSecretBlobRequest?: UploadSecretBlobRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/secrets/restore",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (uploadSecretBlobRequest !== null && uploadSecretBlobRequest !== undefined) {
                if (uploadSecretBlobRequest instanceof UploadSecretBlobRequest) {
                    body = uploadSecretBlobRequest.body
                } else {
                    body = uploadSecretBlobRequest['body'];
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

function newClient(client: HcClient): CsmsClient {
    return new CsmsClient(client);
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