import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { Application } from './model/Application';
import { ApplicationConfigConfiguration } from './model/ApplicationConfigConfiguration';
import { ApplicationConfigConfiguration1 } from './model/ApplicationConfigConfiguration1';
import { ApplicationConfigConfigurationEnv } from './model/ApplicationConfigConfigurationEnv';
import { ApplicationConfigModify } from './model/ApplicationConfigModify';
import { ApplicationConfigModifyConfiguration } from './model/ApplicationConfigModifyConfiguration';
import { ApplicationConfigModifyConfigurationEnv } from './model/ApplicationConfigModifyConfigurationEnv';
import { ApplicationCreate } from './model/ApplicationCreate';
import { ApplicationLabels } from './model/ApplicationLabels';
import { ApplicationModify } from './model/ApplicationModify';
import { Build } from './model/Build';
import { BuildParameters } from './model/BuildParameters';
import { ComponentAction } from './model/ComponentAction';
import { ComponentActionParameters } from './model/ComponentActionParameters';
import { ComponentActionType } from './model/ComponentActionType';
import { ComponentAffinity } from './model/ComponentAffinity';
import { ComponentAffinityAppInnerParameters } from './model/ComponentAffinityAppInnerParameters';
import { ComponentArtifact } from './model/ComponentArtifact';
import { ComponentCommand } from './model/ComponentCommand';
import { ComponentCreate } from './model/ComponentCreate';
import { ComponentEnvironment } from './model/ComponentEnvironment';
import { ComponentEnvironmentValueFrom } from './model/ComponentEnvironmentValueFrom';
import { ComponentFailDetail } from './model/ComponentFailDetail';
import { ComponentInfoCustomMetric } from './model/ComponentInfoCustomMetric';
import { ComponentInfoTomcatOpts } from './model/ComponentInfoTomcatOpts';
import { ComponentLifecycle } from './model/ComponentLifecycle';
import { ComponentList } from './model/ComponentList';
import { ComponentLogs } from './model/ComponentLogs';
import { ComponentModify } from './model/ComponentModify';
import { ComponentModifyCustomMetric } from './model/ComponentModifyCustomMetric';
import { ComponentModifyTomcatOpts } from './model/ComponentModifyTomcatOpts';
import { ComponentMount } from './model/ComponentMount';
import { ComponentProbe } from './model/ComponentProbe';
import { ComponentRecordView } from './model/ComponentRecordView';
import { ComponentStatusType } from './model/ComponentStatusType';
import { ComponentStatusView } from './model/ComponentStatusView';
import { ComponentStorage } from './model/ComponentStorage';
import { ComponentStorageParameters } from './model/ComponentStorageParameters';
import { CreateApplicationRequest } from './model/CreateApplicationRequest';
import { CreateApplicationResponse } from './model/CreateApplicationResponse';
import { CreateComponentRequest } from './model/CreateComponentRequest';
import { CreateComponentResponse } from './model/CreateComponentResponse';
import { CreateEnvironmentRequest } from './model/CreateEnvironmentRequest';
import { CreateEnvironmentResponse } from './model/CreateEnvironmentResponse';
import { DeleteApplicationConfigurationRequest } from './model/DeleteApplicationConfigurationRequest';
import { DeleteApplicationConfigurationResponse } from './model/DeleteApplicationConfigurationResponse';
import { DeleteApplicationRequest } from './model/DeleteApplicationRequest';
import { DeleteApplicationResponse } from './model/DeleteApplicationResponse';
import { DeleteComponentRequest } from './model/DeleteComponentRequest';
import { DeleteComponentResponse } from './model/DeleteComponentResponse';
import { DeleteEnvironmentRequest } from './model/DeleteEnvironmentRequest';
import { DeleteEnvironmentResponse } from './model/DeleteEnvironmentResponse';
import { DeployStrategy } from './model/DeployStrategy';
import { DeployStrategyGrayRelease } from './model/DeployStrategyGrayRelease';
import { DeployStrategyGrayReleaseRules } from './model/DeployStrategyGrayReleaseRules';
import { DeployStrategyRollingRelease } from './model/DeployStrategyRollingRelease';
import { EnvironmentCreate } from './model/EnvironmentCreate';
import { EnvironmentCreateLabels } from './model/EnvironmentCreateLabels';
import { EnvironmentListView } from './model/EnvironmentListView';
import { EnvironmentModify } from './model/EnvironmentModify';
import { EnvironmentResourceModify } from './model/EnvironmentResourceModify';
import { EnvironmentViewLabels } from './model/EnvironmentViewLabels';
import { ExternalAccesses } from './model/ExternalAccesses';
import { JobInfo } from './model/JobInfo';
import { Label } from './model/Label';
import { Mesher } from './model/Mesher';
import { ModifyApplicationConfigurationRequest } from './model/ModifyApplicationConfigurationRequest';
import { ModifyApplicationConfigurationResponse } from './model/ModifyApplicationConfigurationResponse';
import { ModifyApplicationRequest } from './model/ModifyApplicationRequest';
import { ModifyApplicationResponse } from './model/ModifyApplicationResponse';
import { ModifyComponentRequest } from './model/ModifyComponentRequest';
import { ModifyComponentResponse } from './model/ModifyComponentResponse';
import { ModifyEnvironmentRequest } from './model/ModifyEnvironmentRequest';
import { ModifyEnvironmentResponse } from './model/ModifyEnvironmentResponse';
import { ModifyResourceInEnvironmentRequest } from './model/ModifyResourceInEnvironmentRequest';
import { ModifyResourceInEnvironmentResponse } from './model/ModifyResourceInEnvironmentResponse';
import { RecordJob } from './model/RecordJob';
import { RecordJobInfo } from './model/RecordJobInfo';
import { ReferResourceCreate } from './model/ReferResourceCreate';
import { ReferResourceCreateParameters } from './model/ReferResourceCreateParameters';
import { Resource } from './model/Resource';
import { ResourceType } from './model/ResourceType';
import { RuntimeStack } from './model/RuntimeStack';
import { RuntimeStackView } from './model/RuntimeStackView';
import { ShowApplicationConfigurationRequest } from './model/ShowApplicationConfigurationRequest';
import { ShowApplicationConfigurationResponse } from './model/ShowApplicationConfigurationResponse';
import { ShowApplicationInfoRequest } from './model/ShowApplicationInfoRequest';
import { ShowApplicationInfoResponse } from './model/ShowApplicationInfoResponse';
import { ShowApplicationsRequest } from './model/ShowApplicationsRequest';
import { ShowApplicationsResponse } from './model/ShowApplicationsResponse';
import { ShowComponentInfoRequest } from './model/ShowComponentInfoRequest';
import { ShowComponentInfoResponse } from './model/ShowComponentInfoResponse';
import { ShowComponentRecordsRequest } from './model/ShowComponentRecordsRequest';
import { ShowComponentRecordsResponse } from './model/ShowComponentRecordsResponse';
import { ShowComponentsInApplicationRequest } from './model/ShowComponentsInApplicationRequest';
import { ShowComponentsInApplicationResponse } from './model/ShowComponentsInApplicationResponse';
import { ShowComponentsRequest } from './model/ShowComponentsRequest';
import { ShowComponentsResponse } from './model/ShowComponentsResponse';
import { ShowEnvironmentInfoRequest } from './model/ShowEnvironmentInfoRequest';
import { ShowEnvironmentInfoResponse } from './model/ShowEnvironmentInfoResponse';
import { ShowEnvironmentResourcesRequest } from './model/ShowEnvironmentResourcesRequest';
import { ShowEnvironmentResourcesResponse } from './model/ShowEnvironmentResourcesResponse';
import { ShowEnvironmentsRequest } from './model/ShowEnvironmentsRequest';
import { ShowEnvironmentsResponse } from './model/ShowEnvironmentsResponse';
import { ShowJobInfoRequest } from './model/ShowJobInfoRequest';
import { ShowJobInfoResponse } from './model/ShowJobInfoResponse';
import { ShowRuntimeStacksRequest } from './model/ShowRuntimeStacksRequest';
import { ShowRuntimeStacksResponse } from './model/ShowRuntimeStacksResponse';
import { SourceKind } from './model/SourceKind';
import { SourceObject } from './model/SourceObject';
import { TaskInfo } from './model/TaskInfo';
import { UpdateComponentActionRequest } from './model/UpdateComponentActionRequest';
import { UpdateComponentActionResponse } from './model/UpdateComponentActionResponse';

export class ServiceStageClient {
    public static newBuilder(): ClientBuilder<ServiceStageClient> {
            let client = new ClientBuilder<ServiceStageClient>(newClient);
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
     * 应用是一个功能相对完备的业务系统，由一个或多个特性相关的组件组成。
     * 
     * 此API用来创建应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用
     * @param {ApplicationCreate} [applicationCreate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApplication(createApplicationRequest?: CreateApplicationRequest): Promise<CreateApplicationResponse> {
        const options = ParamCreater().createApplication(createApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API通过应用ID删除应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据应用ID删除应用
     * @param {string} applicationId 应用id
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
     * 此API通过应用ID删除应用配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据应用ID删除应用配置
     * @param {string} applicationId 应用id
     * @param {string} environmentId 环境id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApplicationConfiguration(deleteApplicationConfigurationRequest?: DeleteApplicationConfigurationRequest): Promise<DeleteApplicationConfigurationResponse> {
        const options = ParamCreater().deleteApplicationConfiguration(deleteApplicationConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API通过应用ID修改应用信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据应用ID修改应用信息
     * @param {string} applicationId 应用id
     * @param {ApplicationModify} [applicationModify] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyApplication(modifyApplicationRequest?: ModifyApplicationRequest): Promise<ModifyApplicationResponse> {
        const options = ParamCreater().modifyApplication(modifyApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API通过应用ID修改应用配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据应用ID修改应用配置
     * @param {string} applicationId 应用id
     * @param {ApplicationConfigModify} [applicationConfigModify] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyApplicationConfiguration(modifyApplicationConfigurationRequest?: ModifyApplicationConfigurationRequest): Promise<ModifyApplicationConfigurationResponse> {
        const options = ParamCreater().modifyApplicationConfiguration(modifyApplicationConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API通过应用ID获取应用配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据应用ID获取应用配置
     * @param {string} applicationId 应用id
     * @param {string} [environmentId] 环境id，如果不提供则查找所有环境
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplicationConfiguration(showApplicationConfigurationRequest?: ShowApplicationConfigurationRequest): Promise<ShowApplicationConfigurationResponse> {
        const options = ParamCreater().showApplicationConfiguration(showApplicationConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API通过应用ID获取应用详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据应用ID获取应用详细信息
     * @param {string} applicationId 应用id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplicationInfo(showApplicationInfoRequest?: ShowApplicationInfoRequest): Promise<ShowApplicationInfoResponse> {
        const options = ParamCreater().showApplicationInfo(showApplicationInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取所有应用信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取所用应用
     * @param {number} [limit] 指定个数，明确指定的时候用于分页，取值[0, 100]。不指定的时候表示不分页，最多查询1000条记录。
     * @param {number} [offset] 指定查询偏移量，默认偏移量为0.
     * @param {string} [orderBy] 排序字段，默认按创建时间排序。  排序字段支持枚举值：create_time、name、update_time。 
     * @param {'desc' | 'asc'} [order] desc/asc，默认desc。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplications(showApplicationsRequest?: ShowApplicationsRequest): Promise<ShowApplicationsResponse> {
        const options = ParamCreater().showApplications(showApplicationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API用来在应用中创建组件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用中创建组件
     * @param {string} applicationId 应用id
     * @param {ComponentCreate} [componentCreate] 
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
     * 此API通过组件ID删除组件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据组件ID删除组件
     * @param {string} applicationId 应用id
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
     * 此API通过组件ID修改组件信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据组件ID修改组件信息
     * @param {string} applicationId 应用id
     * @param {string} componentId 组件id
     * @param {ComponentModify} [componentModify] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyComponent(modifyComponentRequest?: ModifyComponentRequest): Promise<ModifyComponentResponse> {
        const options = ParamCreater().modifyComponent(modifyComponentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过组件ID获取组件信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据组件ID获取组件信息
     * @param {string} componentId 组件id
     * @param {string} applicationId 应用id
     * @param {string} [expectFields] 特殊字段
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showComponentInfo(showComponentInfoRequest?: ShowComponentInfoRequest): Promise<ShowComponentInfoResponse> {
        const options = ParamCreater().showComponentInfo(showComponentInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API用来通过组件ID获取记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过组件ID获取记录
     * @param {string} componentId 组件id
     * @param {string} applicationId 应用id
     * @param {number} [limit] 指定个数，明确指定的时候用于分页，取值[0, 100]。不指定的时候表示不分页，最多查询1000条记录。
     * @param {number} [offset] 指定查询偏移量，默认偏移量为0.
     * @param {string} [orderBy] 排序字段，默认按创建时间排序。  排序字段支持枚举值：create_time、name、update_time。 
     * @param {'desc' | 'asc'} [order] desc/asc，默认desc。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showComponentRecords(showComponentRecordsRequest?: ShowComponentRecordsRequest): Promise<ShowComponentRecordsResponse> {
        const options = ParamCreater().showComponentRecords(showComponentRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API用来获取所有组件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取所有组件
     * @param {number} [limit] 指定个数，明确指定的时候用于分页，取值[0, 100]。不指定的时候表示不分页，最多查询1000条记录。
     * @param {number} [offset] 指定查询偏移量，默认偏移量为0.
     * @param {string} [orderBy] 排序字段，默认按创建时间排序。  排序字段支持枚举值：create_time、name、update_time。 
     * @param {'desc' | 'asc'} [order] desc/asc，默认desc。
     * @param {string} [applicationName] 应用名称
     * @param {string} [componentName] 组件名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showComponents(showComponentsRequest?: ShowComponentsRequest): Promise<ShowComponentsResponse> {
        const options = ParamCreater().showComponents(showComponentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过此API获取应用下所有应用组件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取应用所有组件
     * @param {string} applicationId 应用id
     * @param {number} [limit] 指定个数，明确指定的时候用于分页，取值[0, 100]。不指定的时候表示不分页，最多查询1000条记录。
     * @param {number} [offset] 指定查询偏移量，默认偏移量为0.
     * @param {string} [orderBy] 排序字段，默认按创建时间排序。  排序字段支持枚举值：create_time、name、update_time。 
     * @param {'desc' | 'asc'} [order] desc/asc，默认desc。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showComponentsInApplication(showComponentsInApplicationRequest?: ShowComponentsInApplicationRequest): Promise<ShowComponentsInApplicationResponse> {
        const options = ParamCreater().showComponentsInApplication(showComponentsInApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过组件ID下发组件任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据组件ID下发组件任务
     * @param {string} applicationId 应用id
     * @param {string} componentId 组件id
     * @param {ComponentAction} [componentAction] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateComponentAction(updateComponentActionRequest?: UpdateComponentActionRequest): Promise<UpdateComponentActionResponse> {
        const options = ParamCreater().updateComponentAction(updateComponentActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 环境是用于应用部署和运行的计算、存储、网络等基础设施的集合。Servicestage把相同VPC下的CCE集群加上多个ELB、RDS、DCS实例组合为一个环境，如：开发环境，测试环境，预生产环境，生产环境。环境内网络互通，可以按环境维度来管理资源、部署服务，减少具体基础设施运维管理的复杂性。
     * 
     * 此API用来创建环境。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建环境
     * @param {EnvironmentCreate} [environmentCreate] 
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
     * 此API通过环境ID删除环境。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据环境ID删除环境
     * @param {string} environmentId 环境id
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
     * 此API通过环境ID修改环境。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据环境ID修改环境
     * @param {string} environmentId 环境id
     * @param {EnvironmentModify} [environmentModify] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyEnvironment(modifyEnvironmentRequest?: ModifyEnvironmentRequest): Promise<ModifyEnvironmentResponse> {
        const options = ParamCreater().modifyEnvironment(modifyEnvironmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API用来通过环境ID修改环境资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据环境ID修改环境资源
     * @param {string} environmentId 环境id
     * @param {EnvironmentResourceModify} [environmentResourceModify] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public modifyResourceInEnvironment(modifyResourceInEnvironmentRequest?: ModifyResourceInEnvironmentRequest): Promise<ModifyResourceInEnvironmentResponse> {
        const options = ParamCreater().modifyResourceInEnvironment(modifyResourceInEnvironmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API通过环境ID获取环境详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据环境ID获取环境详细信息
     * @param {string} environmentId 环境id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEnvironmentInfo(showEnvironmentInfoRequest?: ShowEnvironmentInfoRequest): Promise<ShowEnvironmentInfoResponse> {
        const options = ParamCreater().showEnvironmentInfo(showEnvironmentInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API用来根据环境ID查询环境资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据环境ID查询环境资源
     * @param {string} environmentId 环境id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEnvironmentResources(showEnvironmentResourcesRequest?: ShowEnvironmentResourcesRequest): Promise<ShowEnvironmentResourcesResponse> {
        const options = ParamCreater().showEnvironmentResources(showEnvironmentResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API用来获取所有已经创建环境。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取所有环境
     * @param {number} [limit] 指定个数，明确指定的时候用于分页，取值[0, 100]。不指定的时候表示不分页，最多查询1000条记录。
     * @param {number} [offset] 指定查询偏移量，默认偏移量为0.
     * @param {string} [orderBy] 排序字段，默认按创建时间排序。  排序字段支持枚举值：create_time、name、update_time。 
     * @param {'desc' | 'asc'} [order] desc/asc，默认desc。
     * @param {string} [name] 环境名称
     * @param {string} [environmentId] 环境id
     * @param {string} [enterpriseProjectId] 企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEnvironments(showEnvironmentsRequest?: ShowEnvironmentsRequest): Promise<ShowEnvironmentsResponse> {
        const options = ParamCreater().showEnvironments(showEnvironmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary get cas job infomation
     * @param {string} jobId 任务id，能通过组件操作获取
     * @param {string} [instanceId] 组件实例id
     * @param {string} [limit] 限制数量
     * @param {string} [offset] 偏移量
     * @param {string} [desc] 排序，true是倒序，false是正序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobInfo(showJobInfoRequest?: ShowJobInfoRequest): Promise<ShowJobInfoResponse> {
        const options = ParamCreater().showJobInfo(showJobInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取运行时信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询运行时栈
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRuntimeStacks(showRuntimeStacksRequest?: ShowRuntimeStacksRequest): Promise<ShowRuntimeStacksResponse> {
        const options = ParamCreater().showRuntimeStacks();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 应用是一个功能相对完备的业务系统，由一个或多个特性相关的组件组成。
         * 
         * 此API用来创建应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApplication(createApplicationRequest?: CreateApplicationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/cas/applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createApplicationRequest !== null && createApplicationRequest !== undefined) {
                if (createApplicationRequest instanceof CreateApplicationRequest) {
                    body = createApplicationRequest.body
                } else {
                    body = createApplicationRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过应用ID删除应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApplication(deleteApplicationRequest?: DeleteApplicationRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/cas/applications/{application_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;

            if (deleteApplicationRequest !== null && deleteApplicationRequest !== undefined) {
                if (deleteApplicationRequest instanceof DeleteApplicationRequest) {
                    applicationId = deleteApplicationRequest.applicationId;
                } else {
                    applicationId = deleteApplicationRequest['application_id'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling deleteApplication.');
            }

            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过应用ID删除应用配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApplicationConfiguration(deleteApplicationConfigurationRequest?: DeleteApplicationConfigurationRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/cas/applications/{application_id}/configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationId;
            
            let environmentId;

            if (deleteApplicationConfigurationRequest !== null && deleteApplicationConfigurationRequest !== undefined) {
                if (deleteApplicationConfigurationRequest instanceof DeleteApplicationConfigurationRequest) {
                    applicationId = deleteApplicationConfigurationRequest.applicationId;
                    environmentId = deleteApplicationConfigurationRequest.environmentId;
                } else {
                    applicationId = deleteApplicationConfigurationRequest['application_id'];
                    environmentId = deleteApplicationConfigurationRequest['environment_id'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling deleteApplicationConfiguration.');
            }
            if (environmentId === null || environmentId === undefined) {
                throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling deleteApplicationConfiguration.');
            }
            if (environmentId !== null && environmentId !== undefined) {
                localVarQueryParameter['environment_id'] = environmentId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过应用ID修改应用信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyApplication(modifyApplicationRequest?: ModifyApplicationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/cas/applications/{application_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;

            if (modifyApplicationRequest !== null && modifyApplicationRequest !== undefined) {
                if (modifyApplicationRequest instanceof ModifyApplicationRequest) {
                    applicationId = modifyApplicationRequest.applicationId;
                    body = modifyApplicationRequest.body
                } else {
                    applicationId = modifyApplicationRequest['application_id'];
                    body = modifyApplicationRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling modifyApplication.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过应用ID修改应用配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyApplicationConfiguration(modifyApplicationConfigurationRequest?: ModifyApplicationConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/cas/applications/{application_id}/configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;

            if (modifyApplicationConfigurationRequest !== null && modifyApplicationConfigurationRequest !== undefined) {
                if (modifyApplicationConfigurationRequest instanceof ModifyApplicationConfigurationRequest) {
                    applicationId = modifyApplicationConfigurationRequest.applicationId;
                    body = modifyApplicationConfigurationRequest.body
                } else {
                    applicationId = modifyApplicationConfigurationRequest['application_id'];
                    body = modifyApplicationConfigurationRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling modifyApplicationConfiguration.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过应用ID获取应用配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApplicationConfiguration(showApplicationConfigurationRequest?: ShowApplicationConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/cas/applications/{application_id}/configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationId;
            
            let environmentId;

            if (showApplicationConfigurationRequest !== null && showApplicationConfigurationRequest !== undefined) {
                if (showApplicationConfigurationRequest instanceof ShowApplicationConfigurationRequest) {
                    applicationId = showApplicationConfigurationRequest.applicationId;
                    environmentId = showApplicationConfigurationRequest.environmentId;
                } else {
                    applicationId = showApplicationConfigurationRequest['application_id'];
                    environmentId = showApplicationConfigurationRequest['environment_id'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showApplicationConfiguration.');
            }
            if (environmentId !== null && environmentId !== undefined) {
                localVarQueryParameter['environment_id'] = environmentId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过应用ID获取应用详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApplicationInfo(showApplicationInfoRequest?: ShowApplicationInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/cas/applications/{application_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;

            if (showApplicationInfoRequest !== null && showApplicationInfoRequest !== undefined) {
                if (showApplicationInfoRequest instanceof ShowApplicationInfoRequest) {
                    applicationId = showApplicationInfoRequest.applicationId;
                } else {
                    applicationId = showApplicationInfoRequest['application_id'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showApplicationInfo.');
            }

            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取所有应用信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApplications(showApplicationsRequest?: ShowApplicationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/cas/applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let orderBy;
            
            let order;

            if (showApplicationsRequest !== null && showApplicationsRequest !== undefined) {
                if (showApplicationsRequest instanceof ShowApplicationsRequest) {
                    limit = showApplicationsRequest.limit;
                    offset = showApplicationsRequest.offset;
                    orderBy = showApplicationsRequest.orderBy;
                    order = showApplicationsRequest.order;
                } else {
                    limit = showApplicationsRequest['limit'];
                    offset = showApplicationsRequest['offset'];
                    orderBy = showApplicationsRequest['order_by'];
                    order = showApplicationsRequest['order'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API用来在应用中创建组件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createComponent(createComponentRequest?: CreateComponentRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/cas/applications/{application_id}/components",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;

            if (createComponentRequest !== null && createComponentRequest !== undefined) {
                if (createComponentRequest instanceof CreateComponentRequest) {
                    applicationId = createComponentRequest.applicationId;
                    body = createComponentRequest.body
                } else {
                    applicationId = createComponentRequest['application_id'];
                    body = createComponentRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling createComponent.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过组件ID删除组件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteComponent(deleteComponentRequest?: DeleteComponentRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/cas/applications/{application_id}/components/{component_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let componentId;

            if (deleteComponentRequest !== null && deleteComponentRequest !== undefined) {
                if (deleteComponentRequest instanceof DeleteComponentRequest) {
                    applicationId = deleteComponentRequest.applicationId;
                    componentId = deleteComponentRequest.componentId;
                } else {
                    applicationId = deleteComponentRequest['application_id'];
                    componentId = deleteComponentRequest['component_id'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling deleteComponent.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling deleteComponent.');
            }

            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过组件ID修改组件信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyComponent(modifyComponentRequest?: ModifyComponentRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/cas/applications/{application_id}/components/{component_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;
            
            let componentId;

            if (modifyComponentRequest !== null && modifyComponentRequest !== undefined) {
                if (modifyComponentRequest instanceof ModifyComponentRequest) {
                    applicationId = modifyComponentRequest.applicationId;
                    componentId = modifyComponentRequest.componentId;
                    body = modifyComponentRequest.body
                } else {
                    applicationId = modifyComponentRequest['application_id'];
                    componentId = modifyComponentRequest['component_id'];
                    body = modifyComponentRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling modifyComponent.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling modifyComponent.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过组件ID获取组件信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showComponentInfo(showComponentInfoRequest?: ShowComponentInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/cas/applications/{application_id}/components/{component_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let componentId;
            
            let applicationId;
            
            let expectFields;

            if (showComponentInfoRequest !== null && showComponentInfoRequest !== undefined) {
                if (showComponentInfoRequest instanceof ShowComponentInfoRequest) {
                    componentId = showComponentInfoRequest.componentId;
                    applicationId = showComponentInfoRequest.applicationId;
                    expectFields = showComponentInfoRequest.expectFields;
                } else {
                    componentId = showComponentInfoRequest['component_id'];
                    applicationId = showComponentInfoRequest['application_id'];
                    expectFields = showComponentInfoRequest['expect_fields'];
                }
            }

        
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling showComponentInfo.');
            }
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showComponentInfo.');
            }
            if (expectFields !== null && expectFields !== undefined) {
                localVarQueryParameter['expect_fields'] = expectFields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'component_id': componentId,'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API用来通过组件ID获取记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showComponentRecords(showComponentRecordsRequest?: ShowComponentRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/cas/applications/{application_id}/components/{component_id}/records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let componentId;
            
            let applicationId;
            
            let limit;
            
            let offset;
            
            let orderBy;
            
            let order;

            if (showComponentRecordsRequest !== null && showComponentRecordsRequest !== undefined) {
                if (showComponentRecordsRequest instanceof ShowComponentRecordsRequest) {
                    componentId = showComponentRecordsRequest.componentId;
                    applicationId = showComponentRecordsRequest.applicationId;
                    limit = showComponentRecordsRequest.limit;
                    offset = showComponentRecordsRequest.offset;
                    orderBy = showComponentRecordsRequest.orderBy;
                    order = showComponentRecordsRequest.order;
                } else {
                    componentId = showComponentRecordsRequest['component_id'];
                    applicationId = showComponentRecordsRequest['application_id'];
                    limit = showComponentRecordsRequest['limit'];
                    offset = showComponentRecordsRequest['offset'];
                    orderBy = showComponentRecordsRequest['order_by'];
                    order = showComponentRecordsRequest['order'];
                }
            }

        
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling showComponentRecords.');
            }
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showComponentRecords.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'component_id': componentId,'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API用来获取所有组件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showComponents(showComponentsRequest?: ShowComponentsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/cas/components",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let orderBy;
            
            let order;
            
            let applicationName;
            
            let componentName;

            if (showComponentsRequest !== null && showComponentsRequest !== undefined) {
                if (showComponentsRequest instanceof ShowComponentsRequest) {
                    limit = showComponentsRequest.limit;
                    offset = showComponentsRequest.offset;
                    orderBy = showComponentsRequest.orderBy;
                    order = showComponentsRequest.order;
                    applicationName = showComponentsRequest.applicationName;
                    componentName = showComponentsRequest.componentName;
                } else {
                    limit = showComponentsRequest['limit'];
                    offset = showComponentsRequest['offset'];
                    orderBy = showComponentsRequest['order_by'];
                    order = showComponentsRequest['order'];
                    applicationName = showComponentsRequest['application_name'];
                    componentName = showComponentsRequest['component_name'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (applicationName !== null && applicationName !== undefined) {
                localVarQueryParameter['application_name'] = applicationName;
            }
            if (componentName !== null && componentName !== undefined) {
                localVarQueryParameter['component_name'] = componentName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过此API获取应用下所有应用组件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showComponentsInApplication(showComponentsInApplicationRequest?: ShowComponentsInApplicationRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/cas/applications/{application_id}/components",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationId;
            
            let limit;
            
            let offset;
            
            let orderBy;
            
            let order;

            if (showComponentsInApplicationRequest !== null && showComponentsInApplicationRequest !== undefined) {
                if (showComponentsInApplicationRequest instanceof ShowComponentsInApplicationRequest) {
                    applicationId = showComponentsInApplicationRequest.applicationId;
                    limit = showComponentsInApplicationRequest.limit;
                    offset = showComponentsInApplicationRequest.offset;
                    orderBy = showComponentsInApplicationRequest.orderBy;
                    order = showComponentsInApplicationRequest.order;
                } else {
                    applicationId = showComponentsInApplicationRequest['application_id'];
                    limit = showComponentsInApplicationRequest['limit'];
                    offset = showComponentsInApplicationRequest['offset'];
                    orderBy = showComponentsInApplicationRequest['order_by'];
                    order = showComponentsInApplicationRequest['order'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showComponentsInApplication.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过组件ID下发组件任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateComponentAction(updateComponentActionRequest?: UpdateComponentActionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/cas/applications/{application_id}/components/{component_id}/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;
            
            let componentId;

            if (updateComponentActionRequest !== null && updateComponentActionRequest !== undefined) {
                if (updateComponentActionRequest instanceof UpdateComponentActionRequest) {
                    applicationId = updateComponentActionRequest.applicationId;
                    componentId = updateComponentActionRequest.componentId;
                    body = updateComponentActionRequest.body
                } else {
                    applicationId = updateComponentActionRequest['application_id'];
                    componentId = updateComponentActionRequest['component_id'];
                    body = updateComponentActionRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling updateComponentAction.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling updateComponentAction.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 环境是用于应用部署和运行的计算、存储、网络等基础设施的集合。Servicestage把相同VPC下的CCE集群加上多个ELB、RDS、DCS实例组合为一个环境，如：开发环境，测试环境，预生产环境，生产环境。环境内网络互通，可以按环境维度来管理资源、部署服务，减少具体基础设施运维管理的复杂性。
         * 
         * 此API用来创建环境。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEnvironment(createEnvironmentRequest?: CreateEnvironmentRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/cas/environments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEnvironmentRequest !== null && createEnvironmentRequest !== undefined) {
                if (createEnvironmentRequest instanceof CreateEnvironmentRequest) {
                    body = createEnvironmentRequest.body
                } else {
                    body = createEnvironmentRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过环境ID删除环境。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEnvironment(deleteEnvironmentRequest?: DeleteEnvironmentRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/cas/environments/{environment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let environmentId;

            if (deleteEnvironmentRequest !== null && deleteEnvironmentRequest !== undefined) {
                if (deleteEnvironmentRequest instanceof DeleteEnvironmentRequest) {
                    environmentId = deleteEnvironmentRequest.environmentId;
                } else {
                    environmentId = deleteEnvironmentRequest['environment_id'];
                }
            }

        
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling deleteEnvironment.');
            }

            options.pathParams = { 'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过环境ID修改环境。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyEnvironment(modifyEnvironmentRequest?: ModifyEnvironmentRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/cas/environments/{environment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let environmentId;

            if (modifyEnvironmentRequest !== null && modifyEnvironmentRequest !== undefined) {
                if (modifyEnvironmentRequest instanceof ModifyEnvironmentRequest) {
                    environmentId = modifyEnvironmentRequest.environmentId;
                    body = modifyEnvironmentRequest.body
                } else {
                    environmentId = modifyEnvironmentRequest['environment_id'];
                    body = modifyEnvironmentRequest['body'];
                }
            }

        
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling modifyEnvironment.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API用来通过环境ID修改环境资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        modifyResourceInEnvironment(modifyResourceInEnvironmentRequest?: ModifyResourceInEnvironmentRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/cas/environments/{environment_id}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let environmentId;

            if (modifyResourceInEnvironmentRequest !== null && modifyResourceInEnvironmentRequest !== undefined) {
                if (modifyResourceInEnvironmentRequest instanceof ModifyResourceInEnvironmentRequest) {
                    environmentId = modifyResourceInEnvironmentRequest.environmentId;
                    body = modifyResourceInEnvironmentRequest.body
                } else {
                    environmentId = modifyResourceInEnvironmentRequest['environment_id'];
                    body = modifyResourceInEnvironmentRequest['body'];
                }
            }

        
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling modifyResourceInEnvironment.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过环境ID获取环境详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEnvironmentInfo(showEnvironmentInfoRequest?: ShowEnvironmentInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/cas/environments/{environment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let environmentId;

            if (showEnvironmentInfoRequest !== null && showEnvironmentInfoRequest !== undefined) {
                if (showEnvironmentInfoRequest instanceof ShowEnvironmentInfoRequest) {
                    environmentId = showEnvironmentInfoRequest.environmentId;
                } else {
                    environmentId = showEnvironmentInfoRequest['environment_id'];
                }
            }

        
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling showEnvironmentInfo.');
            }

            options.pathParams = { 'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API用来根据环境ID查询环境资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEnvironmentResources(showEnvironmentResourcesRequest?: ShowEnvironmentResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/cas/environments/{environment_id}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let environmentId;

            if (showEnvironmentResourcesRequest !== null && showEnvironmentResourcesRequest !== undefined) {
                if (showEnvironmentResourcesRequest instanceof ShowEnvironmentResourcesRequest) {
                    environmentId = showEnvironmentResourcesRequest.environmentId;
                } else {
                    environmentId = showEnvironmentResourcesRequest['environment_id'];
                }
            }

        
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling showEnvironmentResources.');
            }

            options.pathParams = { 'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API用来获取所有已经创建环境。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEnvironments(showEnvironmentsRequest?: ShowEnvironmentsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/cas/environments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let orderBy;
            
            let order;
            
            let name;
            
            let environmentId;
            
            let enterpriseProjectId;

            if (showEnvironmentsRequest !== null && showEnvironmentsRequest !== undefined) {
                if (showEnvironmentsRequest instanceof ShowEnvironmentsRequest) {
                    limit = showEnvironmentsRequest.limit;
                    offset = showEnvironmentsRequest.offset;
                    orderBy = showEnvironmentsRequest.orderBy;
                    order = showEnvironmentsRequest.order;
                    name = showEnvironmentsRequest.name;
                    environmentId = showEnvironmentsRequest.environmentId;
                    enterpriseProjectId = showEnvironmentsRequest.enterpriseProjectId;
                } else {
                    limit = showEnvironmentsRequest['limit'];
                    offset = showEnvironmentsRequest['offset'];
                    orderBy = showEnvironmentsRequest['order_by'];
                    order = showEnvironmentsRequest['order'];
                    name = showEnvironmentsRequest['name'];
                    environmentId = showEnvironmentsRequest['environment_id'];
                    enterpriseProjectId = showEnvironmentsRequest['enterprise_project_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (environmentId !== null && environmentId !== undefined) {
                localVarQueryParameter['environment_id'] = environmentId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobInfo(showJobInfoRequest?: ShowJobInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/cas/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let instanceId;
            
            let limit;
            
            let offset;
            
            let desc;

            if (showJobInfoRequest !== null && showJobInfoRequest !== undefined) {
                if (showJobInfoRequest instanceof ShowJobInfoRequest) {
                    jobId = showJobInfoRequest.jobId;
                    instanceId = showJobInfoRequest.instanceId;
                    limit = showJobInfoRequest.limit;
                    offset = showJobInfoRequest.offset;
                    desc = showJobInfoRequest.desc;
                } else {
                    jobId = showJobInfoRequest['job_id'];
                    instanceId = showJobInfoRequest['instance_id'];
                    limit = showJobInfoRequest['limit'];
                    offset = showJobInfoRequest['offset'];
                    desc = showJobInfoRequest['desc'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobInfo.');
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (desc !== null && desc !== undefined) {
                localVarQueryParameter['desc'] = desc;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取运行时信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRuntimeStacks() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/cas/runtimestacks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): ServiceStageClient {
    return new ServiceStageClient(client);
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