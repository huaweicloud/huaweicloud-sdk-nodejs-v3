import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessPassword } from './model/AccessPassword';
import { AccessToken } from './model/AccessToken';
import { ApplicationConfigModify } from './model/ApplicationConfigModify';
import { ApplicationConfigModifyConfiguration } from './model/ApplicationConfigModifyConfiguration';
import { ApplicationConfigModifyConfigurationEnv } from './model/ApplicationConfigModifyConfigurationEnv';
import { ApplicationCreate } from './model/ApplicationCreate';
import { ApplicationListConfigConfiguration } from './model/ApplicationListConfigConfiguration';
import { ApplicationListConfigConfiguration1 } from './model/ApplicationListConfigConfiguration1';
import { ApplicationListConfigConfigurationEnv } from './model/ApplicationListConfigConfigurationEnv';
import { ApplicationModify } from './model/ApplicationModify';
import { ApplicationView } from './model/ApplicationView';
import { AuthorizationVI } from './model/AuthorizationVI';
import { AuthorizationVO } from './model/AuthorizationVO';
import { Build } from './model/Build';
import { BuildInfo } from './model/BuildInfo';
import { BuildInfoParameters } from './model/BuildInfoParameters';
import { BuildParameters } from './model/BuildParameters';
import { ChangeApplicationConfigurationRequest } from './model/ChangeApplicationConfigurationRequest';
import { ChangeApplicationConfigurationResponse } from './model/ChangeApplicationConfigurationResponse';
import { ChangeApplicationRequest } from './model/ChangeApplicationRequest';
import { ChangeApplicationResponse } from './model/ChangeApplicationResponse';
import { ChangeComponentRequest } from './model/ChangeComponentRequest';
import { ChangeComponentResponse } from './model/ChangeComponentResponse';
import { ChangeEnvironmentRequest } from './model/ChangeEnvironmentRequest';
import { ChangeEnvironmentResponse } from './model/ChangeEnvironmentResponse';
import { ChangeInstanceRequest } from './model/ChangeInstanceRequest';
import { ChangeInstanceResponse } from './model/ChangeInstanceResponse';
import { ChangeResourceInEnvironmentRequest } from './model/ChangeResourceInEnvironmentRequest';
import { ChangeResourceInEnvironmentResponse } from './model/ChangeResourceInEnvironmentResponse';
import { ChargeMode } from './model/ChargeMode';
import { CommitsCommits } from './model/CommitsCommits';
import { ComponentCategory } from './model/ComponentCategory';
import { ComponentContainerParameter } from './model/ComponentContainerParameter';
import { ComponentContainerSize } from './model/ComponentContainerSize';
import { ComponentCreate } from './model/ComponentCreate';
import { ComponentInstanceOverView } from './model/ComponentInstanceOverView';
import { ComponentModify } from './model/ComponentModify';
import { ComponentMount } from './model/ComponentMount';
import { ComponentOverview } from './model/ComponentOverview';
import { ComponentProbe } from './model/ComponentProbe';
import { ComponentStorage } from './model/ComponentStorage';
import { ComponentSubCategory } from './model/ComponentSubCategory';
import { ComponentView } from './model/ComponentView';
import { ConfigurationContainerSpec } from './model/ConfigurationContainerSpec';
import { ConfigurationEnvParam } from './model/ConfigurationEnvParam';
import { ConfigurationLifecycle } from './model/ConfigurationLifecycle';
import { ConfigurationProbes } from './model/ConfigurationProbes';
import { ConfigurationScheduler } from './model/ConfigurationScheduler';
import { ConfigurationStrategy } from './model/ConfigurationStrategy';
import { CreateApplicationRequest } from './model/CreateApplicationRequest';
import { CreateApplicationResponse } from './model/CreateApplicationResponse';
import { CreateComponentRequest } from './model/CreateComponentRequest';
import { CreateComponentResponse } from './model/CreateComponentResponse';
import { CreateEnvironmentRequest } from './model/CreateEnvironmentRequest';
import { CreateEnvironmentResponse } from './model/CreateEnvironmentResponse';
import { CreateFileRequest } from './model/CreateFileRequest';
import { CreateFileResponse } from './model/CreateFileResponse';
import { CreateHookRequest } from './model/CreateHookRequest';
import { CreateHookResponse } from './model/CreateHookResponse';
import { CreateInstanceRequest } from './model/CreateInstanceRequest';
import { CreateInstanceResponse } from './model/CreateInstanceResponse';
import { CreateOAuthRequest } from './model/CreateOAuthRequest';
import { CreateOAuthResponse } from './model/CreateOAuthResponse';
import { CreatePasswordAuthRequest } from './model/CreatePasswordAuthRequest';
import { CreatePasswordAuthResponse } from './model/CreatePasswordAuthResponse';
import { CreatePersonalAuthRequest } from './model/CreatePersonalAuthRequest';
import { CreatePersonalAuthResponse } from './model/CreatePersonalAuthResponse';
import { CreateProjectRequest } from './model/CreateProjectRequest';
import { CreateProjectResponse } from './model/CreateProjectResponse';
import { CreateTagRequest } from './model/CreateTagRequest';
import { CreateTagResponse } from './model/CreateTagResponse';
import { DeleteApplicationConfigurationRequest } from './model/DeleteApplicationConfigurationRequest';
import { DeleteApplicationConfigurationResponse } from './model/DeleteApplicationConfigurationResponse';
import { DeleteApplicationRequest } from './model/DeleteApplicationRequest';
import { DeleteApplicationResponse } from './model/DeleteApplicationResponse';
import { DeleteAuthorizeRequest } from './model/DeleteAuthorizeRequest';
import { DeleteAuthorizeResponse } from './model/DeleteAuthorizeResponse';
import { DeleteComponentRequest } from './model/DeleteComponentRequest';
import { DeleteComponentResponse } from './model/DeleteComponentResponse';
import { DeleteEnvironmentRequest } from './model/DeleteEnvironmentRequest';
import { DeleteEnvironmentResponse } from './model/DeleteEnvironmentResponse';
import { DeleteFileRequest } from './model/DeleteFileRequest';
import { DeleteFileResponse } from './model/DeleteFileResponse';
import { DeleteHookRequest } from './model/DeleteHookRequest';
import { DeleteHookResponse } from './model/DeleteHookResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { DeleteTagRequest } from './model/DeleteTagRequest';
import { DeleteTagResponse } from './model/DeleteTagResponse';
import { Environment } from './model/Environment';
import { EnvironmentCreate } from './model/EnvironmentCreate';
import { EnvironmentModify } from './model/EnvironmentModify';
import { EnvironmentResourceModify } from './model/EnvironmentResourceModify';
import { ExternalAccessProtocol } from './model/ExternalAccessProtocol';
import { ExternalAccessStatus } from './model/ExternalAccessStatus';
import { ExternalAccessType } from './model/ExternalAccessType';
import { ExternalAccesses } from './model/ExternalAccesses';
import { ExternalAccessesCreate } from './model/ExternalAccessesCreate';
import { FileCreate } from './model/FileCreate';
import { FileUpdate } from './model/FileUpdate';
import { FlavorId } from './model/FlavorId';
import { FlavorView } from './model/FlavorView';
import { Hook } from './model/Hook';
import { HookCreate } from './model/HookCreate';
import { InstanceAction } from './model/InstanceAction';
import { InstanceActionParameters } from './model/InstanceActionParameters';
import { InstanceActionType } from './model/InstanceActionType';
import { InstanceConfiguration } from './model/InstanceConfiguration';
import { InstanceCreate } from './model/InstanceCreate';
import { InstanceFailDetail } from './model/InstanceFailDetail';
import { InstanceListView } from './model/InstanceListView';
import { InstanceModify } from './model/InstanceModify';
import { InstancePlatformType } from './model/InstancePlatformType';
import { InstanceSnapshotView } from './model/InstanceSnapshotView';
import { InstanceStatusType } from './model/InstanceStatusType';
import { InstanceStatusView } from './model/InstanceStatusView';
import { JobInfo } from './model/JobInfo';
import { LifecycleEntrypoint } from './model/LifecycleEntrypoint';
import { LifecycleProcess } from './model/LifecycleProcess';
import { LifecycleProcessParameter } from './model/LifecycleProcessParameter';
import { ListApplicationsRequest } from './model/ListApplicationsRequest';
import { ListApplicationsResponse } from './model/ListApplicationsResponse';
import { ListAuthorizationsRequest } from './model/ListAuthorizationsRequest';
import { ListAuthorizationsResponse } from './model/ListAuthorizationsResponse';
import { ListBranchesRequest } from './model/ListBranchesRequest';
import { ListBranchesResponse } from './model/ListBranchesResponse';
import { ListCommitsRequest } from './model/ListCommitsRequest';
import { ListCommitsResponse } from './model/ListCommitsResponse';
import { ListComponentOverviewsRequest } from './model/ListComponentOverviewsRequest';
import { ListComponentOverviewsResponse } from './model/ListComponentOverviewsResponse';
import { ListComponentsRequest } from './model/ListComponentsRequest';
import { ListComponentsResponse } from './model/ListComponentsResponse';
import { ListEnvironmentsRequest } from './model/ListEnvironmentsRequest';
import { ListEnvironmentsResponse } from './model/ListEnvironmentsResponse';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ListHooksRequest } from './model/ListHooksRequest';
import { ListHooksResponse } from './model/ListHooksResponse';
import { ListInstanceSnapshotsRequest } from './model/ListInstanceSnapshotsRequest';
import { ListInstanceSnapshotsResponse } from './model/ListInstanceSnapshotsResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListNamespacesRequest } from './model/ListNamespacesRequest';
import { ListNamespacesResponse } from './model/ListNamespacesResponse';
import { ListProjectsRequest } from './model/ListProjectsRequest';
import { ListProjectsResponse } from './model/ListProjectsResponse';
import { ListRuntimesRequest } from './model/ListRuntimesRequest';
import { ListRuntimesResponse } from './model/ListRuntimesResponse';
import { ListTagsRequest } from './model/ListTagsRequest';
import { ListTagsResponse } from './model/ListTagsResponse';
import { ListTemplatesRequest } from './model/ListTemplatesRequest';
import { ListTemplatesResponse } from './model/ListTemplatesResponse';
import { ListTreesRequest } from './model/ListTreesRequest';
import { ListTreesResponse } from './model/ListTreesResponse';
import { NamespacesNamespaces } from './model/NamespacesNamespaces';
import { OAuth } from './model/OAuth';
import { ObsProperties } from './model/ObsProperties';
import { ProbeParameter } from './model/ProbeParameter';
import { Project } from './model/Project';
import { ProjectCreate } from './model/ProjectCreate';
import { ReferResourceCreate } from './model/ReferResourceCreate';
import { ReferResources } from './model/ReferResources';
import { Resource } from './model/Resource';
import { ResourceReferAlias } from './model/ResourceReferAlias';
import { ResourceType } from './model/ResourceType';
import { RuntimeType } from './model/RuntimeType';
import { RuntimeTypeView } from './model/RuntimeTypeView';
import { SchedulerAffinity } from './model/SchedulerAffinity';
import { ShowApplicationConfigurationRequest } from './model/ShowApplicationConfigurationRequest';
import { ShowApplicationConfigurationResponse } from './model/ShowApplicationConfigurationResponse';
import { ShowApplicationDetailRequest } from './model/ShowApplicationDetailRequest';
import { ShowApplicationDetailResponse } from './model/ShowApplicationDetailResponse';
import { ShowComponentDetailRequest } from './model/ShowComponentDetailRequest';
import { ShowComponentDetailResponse } from './model/ShowComponentDetailResponse';
import { ShowContentRequest } from './model/ShowContentRequest';
import { ShowContentResponse } from './model/ShowContentResponse';
import { ShowEnvironmentDetailRequest } from './model/ShowEnvironmentDetailRequest';
import { ShowEnvironmentDetailResponse } from './model/ShowEnvironmentDetailResponse';
import { ShowInstanceDetailRequest } from './model/ShowInstanceDetailRequest';
import { ShowInstanceDetailResponse } from './model/ShowInstanceDetailResponse';
import { ShowJobDetailRequest } from './model/ShowJobDetailRequest';
import { ShowJobDetailResponse } from './model/ShowJobDetailResponse';
import { ShowProjectDetailRequest } from './model/ShowProjectDetailRequest';
import { ShowProjectDetailResponse } from './model/ShowProjectDetailResponse';
import { ShowRedirectUrlRequest } from './model/ShowRedirectUrlRequest';
import { ShowRedirectUrlResponse } from './model/ShowRedirectUrlResponse';
import { SourceKind } from './model/SourceKind';
import { SourceObject } from './model/SourceObject';
import { SourceOrArtifact } from './model/SourceOrArtifact';
import { SourceRepoType } from './model/SourceRepoType';
import { StorageParameter } from './model/StorageParameter';
import { TagCreate } from './model/TagCreate';
import { TaskInfo } from './model/TaskInfo';
import { Template } from './model/Template';
import { TemplateView } from './model/TemplateView';
import { UpdateFileRequest } from './model/UpdateFileRequest';
import { UpdateFileResponse } from './model/UpdateFileResponse';
import { UpdateInstanceActionRequest } from './model/UpdateInstanceActionRequest';
import { UpdateInstanceActionResponse } from './model/UpdateInstanceActionResponse';

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
     * 此API通过应用ID修改应用信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改应用信息
     * @param {string} applicationId 应用ID。
     * @param {ApplicationModify} [applicationModify] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeApplication(changeApplicationRequest?: ChangeApplicationRequest): Promise<ChangeApplicationResponse> {
        const options = ParamCreater().changeApplication(changeApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过此API修改应用配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改应用配置信息
     * @param {string} applicationId 应用ID。
     * @param {ApplicationConfigModify} [applicationConfigModify] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeApplicationConfiguration(changeApplicationConfigurationRequest?: ChangeApplicationConfigurationRequest): Promise<ChangeApplicationConfigurationResponse> {
        const options = ParamCreater().changeApplicationConfiguration(changeApplicationConfigurationRequest);

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
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {ComponentModify} [componentModify] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeComponent(changeComponentRequest?: ChangeComponentRequest): Promise<ChangeComponentResponse> {
        const options = ParamCreater().changeComponent(changeComponentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API通过环境ID修改环境信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改环境信息
     * @param {string} environmentId 环境ID。
     * @param {EnvironmentModify} [environmentModify] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeEnvironment(changeEnvironmentRequest?: ChangeEnvironmentRequest): Promise<ChangeEnvironmentResponse> {
        const options = ParamCreater().changeEnvironment(changeEnvironmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过此API修改应用组件实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改应用组件实例
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {string} instanceId 组件实例ID。
     * @param {InstanceModify} [instanceModify] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeInstance(changeInstanceRequest?: ChangeInstanceRequest): Promise<ChangeInstanceResponse> {
        const options = ParamCreater().changeInstance(changeInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API用来修改环境资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改环境资源
     * @param {string} environmentId 环境ID。
     * @param {EnvironmentResourceModify} [environmentResourceModify] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeResourceInEnvironment(changeResourceInEnvironmentRequest?: ChangeResourceInEnvironmentRequest): Promise<ChangeResourceInEnvironmentResponse> {
        const options = ParamCreater().changeResourceInEnvironment(changeResourceInEnvironmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
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
     * 应用组件是组成应用的某个业务特性实现，以代码或者软件包为载体，可独立部署运行。
     * 
     * 此API用来在应用中创建组件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用中创建组件
     * @param {string} applicationId 应用ID。
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
     * 此API用来创建应用组件实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建组件实例
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {InstanceCreate} [instanceCreate] 
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
     * 此API通过应用ID删除应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据应用ID删除应用
     * @param {string} applicationId 应用ID。
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
     * 通过此API删除应用配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用配置
     * @param {string} applicationId 应用ID。
     * @param {string} environmentId 环境ID。
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
     * 此API通过应用组件ID删除应用组件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据应用组件ID删除应用组件
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {boolean} [force] 是否强制删除。
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
     * 此API通过环境ID删除环境。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据环境ID删除环境
     * @param {string} environmentId 环境ID。
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
     * 通过此API删除应用组件实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用组件实例
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {string} instanceId 组件实例ID。
     * @param {boolean} [force] 是否强制删除。
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
     * 通过此API可以获取所有已经创建的应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取所有应用
     * @param {number} [limit] 指定个数，明确指定的时候用于分页，取值[0, 100]。不指定的时候表示不分页，最多查询1000条记录。
     * @param {number} [offset] 指定查询偏移量，默认偏移量为0.
     * @param {string} [orderBy] 排序字段，默认按创建时间排序。  排序字段支持枚举值：create_time、name、update_time。 
     * @param {'desc' | 'asc'} [order] desc/asc，默认desc。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplications(listApplicationsRequest?: ListApplicationsRequest): Promise<ListApplicationsResponse> {
        const options = ParamCreater().listApplications(listApplicationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过此API获取应用下所有应用组件部署信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取应用所有组件部署信息
     * @param {string} applicationId 应用ID。
     * @param {number} [limit] 指定个数，明确指定的时候用于分页，取值[0, 100]。不指定的时候表示不分页，最多查询1000条记录。
     * @param {number} [offset] 指定查询偏移量，默认偏移量为0.
     * @param {string} [orderBy] 排序字段，默认按创建时间排序。  排序字段支持枚举值：create_time、name、update_time。 
     * @param {'desc' | 'asc'} [order] desc/asc，默认desc。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listComponentOverviews(listComponentOverviewsRequest?: ListComponentOverviewsRequest): Promise<ListComponentOverviewsResponse> {
        const options = ParamCreater().listComponentOverviews(listComponentOverviewsRequest);

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
     * @param {string} applicationId 应用ID。
     * @param {number} [limit] 指定个数，明确指定的时候用于分页，取值[0, 100]。不指定的时候表示不分页，最多查询1000条记录。
     * @param {number} [offset] 指定查询偏移量，默认偏移量为0.
     * @param {string} [orderBy] 排序字段，默认按创建时间排序。  排序字段支持枚举值：create_time、name、update_time。 
     * @param {'desc' | 'asc'} [order] desc/asc，默认desc。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listComponents(listComponentsRequest?: ListComponentsRequest): Promise<ListComponentsResponse> {
        const options = ParamCreater().listComponents(listComponentsRequest);

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
     * 通过此API获取应用组件实例快照信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取组件实例快照
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {string} instanceId 组件实例ID。
     * @param {number} [limit] 指定个数，明确指定的时候用于分页，取值[0, 100]。不指定的时候表示不分页，最多查询1000条记录。
     * @param {number} [offset] 指定查询偏移量，默认偏移量为0.
     * @param {string} [snapshotOrderBy] 排序字段，默认按创建时间排序。  排序字段支持枚举值：create_time、version。 
     * @param {'desc' | 'asc'} [order] desc/asc，默认desc。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceSnapshots(listInstanceSnapshotsRequest?: ListInstanceSnapshotsRequest): Promise<ListInstanceSnapshotsResponse> {
        const options = ParamCreater().listInstanceSnapshots(listInstanceSnapshotsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过此API获取组件下的所有组件实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取应用组件实例
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {number} [limit] 指定个数，明确指定的时候用于分页，取值[0, 100]。不指定的时候表示不分页，最多查询1000条记录。
     * @param {number} [offset] 指定查询偏移量，默认偏移量为0.
     * @param {string} [orderBy] 排序字段，默认按创建时间排序。  排序字段支持枚举值：create_time、name、update_time。 
     * @param {'desc' | 'asc'} [order] desc/asc，默认desc。
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
     * 通过此API获取应用配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取应用配置
     * @param {string} applicationId 应用ID。
     * @param {string} [environmentId] 环境ID，如果未提供，查询所有环境。
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
     * @param {string} applicationId 应用ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplicationDetail(showApplicationDetailRequest?: ShowApplicationDetailRequest): Promise<ShowApplicationDetailResponse> {
        const options = ParamCreater().showApplicationDetail(showApplicationDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过组件ID获取应用组件信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据组件ID获取应用组件信息
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showComponentDetail(showComponentDetailRequest?: ShowComponentDetailRequest): Promise<ShowComponentDetailResponse> {
        const options = ParamCreater().showComponentDetail(showComponentDetailRequest);

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
     * @param {string} environmentId 环境ID。
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
     * 此API通过实例ID获取实例详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据实例ID获取实例详细信息
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {string} instanceId 组件实例ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceDetail(showInstanceDetailRequest?: ShowInstanceDetailRequest): Promise<ShowInstanceDetailResponse> {
        const options = ParamCreater().showInstanceDetail(showInstanceDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过此API获取部署任务详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取部署任务详细信息
     * @param {string} jobId 部署任务ID。
     * @param {string} [instanceId] 应用组件实例ID。
     * @param {number} [limit] 指定查询的个数，可用于分页查询。
     * @param {number} [offset] 指定查询的偏移量，可用于分页查询。
     * @param {string} [desc] 是否降序。true表示desc, false表示asc。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobDetail(showJobDetailRequest?: ShowJobDetailRequest): Promise<ShowJobDetailResponse> {
        const options = ParamCreater().showJobDetail(showJobDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过此API获取对组件实例的操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对组件实例的操作
     * @param {string} applicationId 应用ID。
     * @param {string} componentId 组件ID。
     * @param {string} instanceId 组件实例ID。
     * @param {InstanceAction} [instanceAction] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceAction(updateInstanceActionRequest?: UpdateInstanceActionRequest): Promise<UpdateInstanceActionResponse> {
        const options = ParamCreater().updateInstanceAction(updateInstanceActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定仓库项目下创建文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建仓库文件
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {string} project 仓库项目ID，如果含有“/”，需要将“/”替换为“:”。
     * @param {string} path 文件路径，需要将“/”替换为“:”。
     * @param {string} ref 分支名称或者tag标签名称或者commit sha。
     * @param {FileCreate} [fileCreate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFile(createFileRequest?: CreateFileRequest): Promise<CreateFileResponse> {
        const options = ParamCreater().createFile(createFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建指定项目的hook。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建项目hook
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {string} project 仓库项目ID，如果含有“/”，需要将“/”替换为“:”。
     * @param {HookCreate} [hookCreate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHook(createHookRequest?: CreateHookRequest): Promise<CreateHookResponse> {
        const options = ParamCreater().createHook(createHookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建指定Git仓库类型的OAuth授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建OAuth授权
     * @param {'github' | 'gitlab' | 'gitee' | 'bitbucket'} repoType 仓库类型。 支持OAuth授权的仓库类型有：github、gitlab、gitee、bitbucket。
     * @param {string} [tag] 站点标签。 比如国际站的，?tag&#x3D;intl。 默认为空。
     * @param {OAuth} [oAuth] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOAuth(createOAuthRequest?: CreateOAuthRequest): Promise<CreateOAuthResponse> {
        const options = ParamCreater().createOAuth(createOAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建指定Git仓库类型的口令授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建口令授权
     * @param {'github' | 'devcloud' | 'bitbucket'} repoType 仓库类型。 支持口令授权的仓库类型有：github、devcloud、bitbucket。
     * @param {AccessPassword} [accessPassword] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPasswordAuth(createPasswordAuthRequest?: CreatePasswordAuthRequest): Promise<CreatePasswordAuthResponse> {
        const options = ParamCreater().createPasswordAuth(createPasswordAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建指定Git仓库类型的私人令牌授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建私人令牌授权
     * @param {'github' | 'gitlab' | 'gitee'} repoType 仓库类型。 支持私人令牌授权的仓库类型有：github、gitlab、gitee。
     * @param {AccessToken} [accessToken] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPersonalAuth(createPersonalAuthRequest?: CreatePersonalAuthRequest): Promise<CreatePersonalAuthResponse> {
        const options = ParamCreater().createPersonalAuth(createPersonalAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建指定组织下的软件仓库项目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建软件仓库项目
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {ProjectCreate} [projectCreate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createProject(createProjectRequest?: CreateProjectRequest): Promise<CreateProjectResponse> {
        const options = ParamCreater().createProject(createProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建指定项目的tag标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建项目tag标签
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {string} project 仓库项目ID，如果含有“/”，需要将“/”替换为“:”。
     * @param {string} ref 分支名称或者tag标签名称或者commit sha。
     * @param {TagCreate} [tagCreate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTag(createTagRequest?: CreateTagRequest): Promise<CreateTagResponse> {
        const options = ParamCreater().createTag(createTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过名称删除仓库授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除仓库授权
     * @param {string} name 授权名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAuthorize(deleteAuthorizeRequest?: DeleteAuthorizeRequest): Promise<DeleteAuthorizeResponse> {
        const options = ParamCreater().deleteAuthorize(deleteAuthorizeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定项目仓库下的文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除仓库文件
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {string} project 仓库项目ID，如果含有“/”，需要将“/”替换为“:”。
     * @param {string} path 文件路径，需要将“/”替换为“:”。
     * @param {string} ref 分支名称或者tag标签名称或者commit sha。
     * @param {string} message 提交描述。
     * @param {string} sha 最后一次提交的commit sha值。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFile(deleteFileRequest?: DeleteFileRequest): Promise<DeleteFileResponse> {
        const options = ParamCreater().deleteFile(deleteFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定项目的hook。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除项目hook
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {string} project 仓库项目ID，如果含有“/”，需要将“/”替换为“:”。
     * @param {string} hookId hook ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHook(deleteHookRequest?: DeleteHookRequest): Promise<DeleteHookResponse> {
        const options = ParamCreater().deleteHook(deleteHookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定项目的tag标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除项目tag标签
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {string} project 仓库项目ID，如果含有“/”，需要将“/”替换为“:”。
     * @param {string} tagName tag标签名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTag(deleteTagRequest?: DeleteTagRequest): Promise<DeleteTagResponse> {
        const options = ParamCreater().deleteTag(deleteTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取所有Git仓库授权信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取仓库授权列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuthorizations(listAuthorizationsRequest?: ListAuthorizationsRequest): Promise<ListAuthorizationsResponse> {
        const options = ParamCreater().listAuthorizations();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定项目的所有分支列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目分支
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {string} project 仓库项目ID，如果含有“/”，需要将“/”替换为“:”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBranches(listBranchesRequest?: ListBranchesRequest): Promise<ListBranchesResponse> {
        const options = ParamCreater().listBranches(listBranchesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定项目的最近10次commit提交记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目commit提交记录
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {string} project 仓库项目ID，如果含有“/”，需要将“/”替换为“:”。
     * @param {string} [ref] 分支名称或者tag名称，如果没有提供，使用默认分支。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCommits(listCommitsRequest?: ListCommitsRequest): Promise<ListCommitsResponse> {
        const options = ParamCreater().listCommits(listCommitsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定项目的所有hooks
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目hooks
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {string} project 仓库项目ID，如果含有“/”，需要将“/”替换为“:”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHooks(listHooksRequest?: ListHooksRequest): Promise<ListHooksResponse> {
        const options = ParamCreater().listHooks(listHooksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库的namespaces。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取仓库的namespaces
     * @param {string} xRepoAuth 授权名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNamespaces(listNamespacesRequest?: ListNamespacesRequest): Promise<ListNamespacesResponse> {
        const options = ParamCreater().listNamespaces(listNamespacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定组织下的所有项目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取组织下所有项目
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjects(listProjectsRequest?: ListProjectsRequest): Promise<ListProjectsResponse> {
        const options = ParamCreater().listProjects(listProjectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定项目的所有tag标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目的所有tag标签
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {string} project 仓库项目ID，如果含有“/”，需要将“/”替换为“:”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTags(listTagsRequest?: ListTagsRequest): Promise<ListTagsResponse> {
        const options = ParamCreater().listTags(listTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定项目仓库的文件列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取仓库文件列表
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {string} project 仓库项目ID，如果含有“/”，需要将“/”替换为“:”。
     * @param {string} ref 分支名称或者tag标签名称或者commit sha。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTrees(listTreesRequest?: ListTreesRequest): Promise<ListTreesResponse> {
        const options = ParamCreater().listTrees(listTreesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定项目仓库下文件的内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取仓库文件内容
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {string} project 仓库项目ID，如果含有“/”，需要将“/”替换为“:”。
     * @param {string} path 文件路径，需要将“/”替换为“:”。
     * @param {string} ref 分支名称或者tag标签名称或者commit sha。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showContent(showContentRequest?: ShowContentRequest): Promise<ShowContentResponse> {
        const options = ParamCreater().showContent(showContentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过指定的clone url 获取仓库信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过clone url 获取仓库信息
     * @param {string} xRepoAuth 授权名称。
     * @param {string} cloneUrl 仓库克隆URL。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectDetail(showProjectDetailRequest?: ShowProjectDetailRequest): Promise<ShowProjectDetailResponse> {
        const options = ParamCreater().showProjectDetail(showProjectDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定Git仓库类型的授权重定向URL。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取授权重定向URL
     * @param {'github' | 'gitlab' | 'gitee' | 'bitbucket'} repoType 仓库类型。 取值范围：github、gitlab、gitee、bitbucket。
     * @param {string} [tag] 站点标签。 比如国际站的，?tag&#x3D;intl。 默认为空。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRedirectUrl(showRedirectUrlRequest?: ShowRedirectUrlRequest): Promise<ShowRedirectUrlResponse> {
        const options = ParamCreater().showRedirectUrl(showRedirectUrlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定项目仓库下的文件内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新仓库文件内容
     * @param {string} xRepoAuth 授权名称。
     * @param {string} namespace 命名空间ID或者URL编码名称。
     * @param {string} project 仓库项目ID，如果含有“/”，需要将“/”替换为“:”。
     * @param {string} path 文件路径，需要将“/”替换为“:”。
     * @param {string} ref 分支名称或者tag标签名称或者commit sha。
     * @param {FileUpdate} [fileUpdate] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFile(updateFileRequest?: UpdateFileRequest): Promise<UpdateFileResponse> {
        const options = ParamCreater().updateFile(updateFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过此API获取所用支持的应用资源规格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取所有支持的应用资源规格
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlavors(listFlavorsRequest?: ListFlavorsRequest): Promise<ListFlavorsResponse> {
        const options = ParamCreater().listFlavors();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API用来获取所有支持应用组件运行时类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取所有支持的应用组件运行时类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRuntimes(listRuntimesRequest?: ListRuntimesRequest): Promise<ListRuntimesResponse> {
        const options = ParamCreater().listRuntimes();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此API用来获取所有内置应用组件模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取所有支持的应用组件模板
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplates(listTemplatesRequest?: ListTemplatesRequest): Promise<ListTemplatesResponse> {
        const options = ParamCreater().listTemplates();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 此API通过应用ID修改应用信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeApplication(changeApplicationRequest?: ChangeApplicationRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/cas/applications/{application_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;

            if (changeApplicationRequest !== null && changeApplicationRequest !== undefined) {
                if (changeApplicationRequest instanceof ChangeApplicationRequest) {
                    applicationId = changeApplicationRequest.applicationId;
                    body = changeApplicationRequest.body
                } else {
                    applicationId = changeApplicationRequest['application_id'];
                    body = changeApplicationRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling changeApplication.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过此API修改应用配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeApplicationConfiguration(changeApplicationConfigurationRequest?: ChangeApplicationConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/cas/applications/{application_id}/configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let applicationId;

            if (changeApplicationConfigurationRequest !== null && changeApplicationConfigurationRequest !== undefined) {
                if (changeApplicationConfigurationRequest instanceof ChangeApplicationConfigurationRequest) {
                    applicationId = changeApplicationConfigurationRequest.applicationId;
                    body = changeApplicationConfigurationRequest.body
                } else {
                    applicationId = changeApplicationConfigurationRequest['application_id'];
                    body = changeApplicationConfigurationRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling changeApplicationConfiguration.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过组件ID修改组件信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeComponent(changeComponentRequest?: ChangeComponentRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/cas/applications/{application_id}/components/{component_id}",
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

            if (changeComponentRequest !== null && changeComponentRequest !== undefined) {
                if (changeComponentRequest instanceof ChangeComponentRequest) {
                    applicationId = changeComponentRequest.applicationId;
                    componentId = changeComponentRequest.componentId;
                    body = changeComponentRequest.body
                } else {
                    applicationId = changeComponentRequest['application_id'];
                    componentId = changeComponentRequest['component_id'];
                    body = changeComponentRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling changeComponent.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling changeComponent.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过环境ID修改环境信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeEnvironment(changeEnvironmentRequest?: ChangeEnvironmentRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/cas/environments/{environment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let environmentId;

            if (changeEnvironmentRequest !== null && changeEnvironmentRequest !== undefined) {
                if (changeEnvironmentRequest instanceof ChangeEnvironmentRequest) {
                    environmentId = changeEnvironmentRequest.environmentId;
                    body = changeEnvironmentRequest.body
                } else {
                    environmentId = changeEnvironmentRequest['environment_id'];
                    body = changeEnvironmentRequest['body'];
                }
            }

        
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling changeEnvironment.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过此API修改应用组件实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeInstance(changeInstanceRequest?: ChangeInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/cas/applications/{application_id}/components/{component_id}/instances/{instance_id}",
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
            
            let instanceId;

            if (changeInstanceRequest !== null && changeInstanceRequest !== undefined) {
                if (changeInstanceRequest instanceof ChangeInstanceRequest) {
                    applicationId = changeInstanceRequest.applicationId;
                    componentId = changeInstanceRequest.componentId;
                    instanceId = changeInstanceRequest.instanceId;
                    body = changeInstanceRequest.body
                } else {
                    applicationId = changeInstanceRequest['application_id'];
                    componentId = changeInstanceRequest['component_id'];
                    instanceId = changeInstanceRequest['instance_id'];
                    body = changeInstanceRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling changeInstance.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling changeInstance.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeInstance.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId,'component_id': componentId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API用来修改环境资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeResourceInEnvironment(changeResourceInEnvironmentRequest?: ChangeResourceInEnvironmentRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/{project_id}/cas/environments/{environment_id}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let environmentId;

            if (changeResourceInEnvironmentRequest !== null && changeResourceInEnvironmentRequest !== undefined) {
                if (changeResourceInEnvironmentRequest instanceof ChangeResourceInEnvironmentRequest) {
                    environmentId = changeResourceInEnvironmentRequest.environmentId;
                    body = changeResourceInEnvironmentRequest.body
                } else {
                    environmentId = changeResourceInEnvironmentRequest['environment_id'];
                    body = changeResourceInEnvironmentRequest['body'];
                }
            }

        
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling changeResourceInEnvironment.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
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
                url: "/v2/{project_id}/cas/applications",
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
         * 应用组件是组成应用的某个业务特性实现，以代码或者软件包为载体，可独立部署运行。
         * 
         * 此API用来在应用中创建组件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createComponent(createComponentRequest?: CreateComponentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cas/applications/{application_id}/components",
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
         * 环境是用于应用部署和运行的计算、存储、网络等基础设施的集合。Servicestage把相同VPC下的CCE集群加上多个ELB、RDS、DCS实例组合为一个环境，如：开发环境，测试环境，预生产环境，生产环境。环境内网络互通，可以按环境维度来管理资源、部署服务，减少具体基础设施运维管理的复杂性。
         * 
         * 此API用来创建环境。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEnvironment(createEnvironmentRequest?: CreateEnvironmentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cas/environments",
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
         * 此API用来创建应用组件实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstance(createInstanceRequest?: CreateInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cas/applications/{application_id}/components/{component_id}/instances",
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

            if (createInstanceRequest !== null && createInstanceRequest !== undefined) {
                if (createInstanceRequest instanceof CreateInstanceRequest) {
                    applicationId = createInstanceRequest.applicationId;
                    componentId = createInstanceRequest.componentId;
                    body = createInstanceRequest.body
                } else {
                    applicationId = createInstanceRequest['application_id'];
                    componentId = createInstanceRequest['component_id'];
                    body = createInstanceRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling createInstance.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling createInstance.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
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
                url: "/v2/{project_id}/cas/applications/{application_id}",
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
         * 通过此API删除应用配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApplicationConfiguration(deleteApplicationConfigurationRequest?: DeleteApplicationConfigurationRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/cas/applications/{application_id}/configuration",
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
         * 此API通过应用组件ID删除应用组件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteComponent(deleteComponentRequest?: DeleteComponentRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/cas/applications/{application_id}/components/{component_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationId;
            
            let componentId;
            
            let force;

            if (deleteComponentRequest !== null && deleteComponentRequest !== undefined) {
                if (deleteComponentRequest instanceof DeleteComponentRequest) {
                    applicationId = deleteComponentRequest.applicationId;
                    componentId = deleteComponentRequest.componentId;
                    force = deleteComponentRequest.force;
                } else {
                    applicationId = deleteComponentRequest['application_id'];
                    componentId = deleteComponentRequest['component_id'];
                    force = deleteComponentRequest['force'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling deleteComponent.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling deleteComponent.');
            }
            if (force !== null && force !== undefined) {
                localVarQueryParameter['force'] = force;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
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
                url: "/v2/{project_id}/cas/environments/{environment_id}",
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
         * 通过此API删除应用组件实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/cas/applications/{application_id}/components/{component_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationId;
            
            let componentId;
            
            let instanceId;
            
            let force;

            if (deleteInstanceRequest !== null && deleteInstanceRequest !== undefined) {
                if (deleteInstanceRequest instanceof DeleteInstanceRequest) {
                    applicationId = deleteInstanceRequest.applicationId;
                    componentId = deleteInstanceRequest.componentId;
                    instanceId = deleteInstanceRequest.instanceId;
                    force = deleteInstanceRequest.force;
                } else {
                    applicationId = deleteInstanceRequest['application_id'];
                    componentId = deleteInstanceRequest['component_id'];
                    instanceId = deleteInstanceRequest['instance_id'];
                    force = deleteInstanceRequest['force'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling deleteInstance.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling deleteInstance.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstance.');
            }
            if (force !== null && force !== undefined) {
                localVarQueryParameter['force'] = force;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'application_id': applicationId,'component_id': componentId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过此API可以获取所有已经创建的应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplications(listApplicationsRequest?: ListApplicationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/applications",
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

            if (listApplicationsRequest !== null && listApplicationsRequest !== undefined) {
                if (listApplicationsRequest instanceof ListApplicationsRequest) {
                    limit = listApplicationsRequest.limit;
                    offset = listApplicationsRequest.offset;
                    orderBy = listApplicationsRequest.orderBy;
                    order = listApplicationsRequest.order;
                } else {
                    limit = listApplicationsRequest['limit'];
                    offset = listApplicationsRequest['offset'];
                    orderBy = listApplicationsRequest['order_by'];
                    order = listApplicationsRequest['order'];
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
         * 通过此API获取应用下所有应用组件部署信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listComponentOverviews(listComponentOverviewsRequest?: ListComponentOverviewsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/applications/{application_id}/components/overviews",
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

            if (listComponentOverviewsRequest !== null && listComponentOverviewsRequest !== undefined) {
                if (listComponentOverviewsRequest instanceof ListComponentOverviewsRequest) {
                    applicationId = listComponentOverviewsRequest.applicationId;
                    limit = listComponentOverviewsRequest.limit;
                    offset = listComponentOverviewsRequest.offset;
                    orderBy = listComponentOverviewsRequest.orderBy;
                    order = listComponentOverviewsRequest.order;
                } else {
                    applicationId = listComponentOverviewsRequest['application_id'];
                    limit = listComponentOverviewsRequest['limit'];
                    offset = listComponentOverviewsRequest['offset'];
                    orderBy = listComponentOverviewsRequest['order_by'];
                    order = listComponentOverviewsRequest['order'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling listComponentOverviews.');
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
         * 通过此API获取应用下所有应用组件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listComponents(listComponentsRequest?: ListComponentsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/applications/{application_id}/components",
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

            if (listComponentsRequest !== null && listComponentsRequest !== undefined) {
                if (listComponentsRequest instanceof ListComponentsRequest) {
                    applicationId = listComponentsRequest.applicationId;
                    limit = listComponentsRequest.limit;
                    offset = listComponentsRequest.offset;
                    orderBy = listComponentsRequest.orderBy;
                    order = listComponentsRequest.order;
                } else {
                    applicationId = listComponentsRequest['application_id'];
                    limit = listComponentsRequest['limit'];
                    offset = listComponentsRequest['offset'];
                    orderBy = listComponentsRequest['order_by'];
                    order = listComponentsRequest['order'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling listComponents.');
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
         * 此API用来获取所有已经创建环境。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnvironments(listEnvironmentsRequest?: ListEnvironmentsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/environments",
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

            if (listEnvironmentsRequest !== null && listEnvironmentsRequest !== undefined) {
                if (listEnvironmentsRequest instanceof ListEnvironmentsRequest) {
                    limit = listEnvironmentsRequest.limit;
                    offset = listEnvironmentsRequest.offset;
                    orderBy = listEnvironmentsRequest.orderBy;
                    order = listEnvironmentsRequest.order;
                } else {
                    limit = listEnvironmentsRequest['limit'];
                    offset = listEnvironmentsRequest['offset'];
                    orderBy = listEnvironmentsRequest['order_by'];
                    order = listEnvironmentsRequest['order'];
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
         * 通过此API获取应用组件实例快照信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceSnapshots(listInstanceSnapshotsRequest?: ListInstanceSnapshotsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/applications/{application_id}/components/{component_id}/instances/{instance_id}/snapshots",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationId;
            
            let componentId;
            
            let instanceId;
            
            let limit;
            
            let offset;
            
            let snapshotOrderBy;
            
            let order;

            if (listInstanceSnapshotsRequest !== null && listInstanceSnapshotsRequest !== undefined) {
                if (listInstanceSnapshotsRequest instanceof ListInstanceSnapshotsRequest) {
                    applicationId = listInstanceSnapshotsRequest.applicationId;
                    componentId = listInstanceSnapshotsRequest.componentId;
                    instanceId = listInstanceSnapshotsRequest.instanceId;
                    limit = listInstanceSnapshotsRequest.limit;
                    offset = listInstanceSnapshotsRequest.offset;
                    snapshotOrderBy = listInstanceSnapshotsRequest.snapshotOrderBy;
                    order = listInstanceSnapshotsRequest.order;
                } else {
                    applicationId = listInstanceSnapshotsRequest['application_id'];
                    componentId = listInstanceSnapshotsRequest['component_id'];
                    instanceId = listInstanceSnapshotsRequest['instance_id'];
                    limit = listInstanceSnapshotsRequest['limit'];
                    offset = listInstanceSnapshotsRequest['offset'];
                    snapshotOrderBy = listInstanceSnapshotsRequest['snapshot_order_by'];
                    order = listInstanceSnapshotsRequest['order'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling listInstanceSnapshots.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling listInstanceSnapshots.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceSnapshots.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (snapshotOrderBy !== null && snapshotOrderBy !== undefined) {
                localVarQueryParameter['snapshot_order_by'] = snapshotOrderBy;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'application_id': applicationId,'component_id': componentId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过此API获取组件下的所有组件实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstances(listInstancesRequest?: ListInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/applications/{application_id}/components/{component_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationId;
            
            let componentId;
            
            let limit;
            
            let offset;
            
            let orderBy;
            
            let order;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    applicationId = listInstancesRequest.applicationId;
                    componentId = listInstancesRequest.componentId;
                    limit = listInstancesRequest.limit;
                    offset = listInstancesRequest.offset;
                    orderBy = listInstancesRequest.orderBy;
                    order = listInstancesRequest.order;
                } else {
                    applicationId = listInstancesRequest['application_id'];
                    componentId = listInstancesRequest['component_id'];
                    limit = listInstancesRequest['limit'];
                    offset = listInstancesRequest['offset'];
                    orderBy = listInstancesRequest['order_by'];
                    order = listInstancesRequest['order'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling listInstances.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling listInstances.');
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
            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过此API获取应用配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApplicationConfiguration(showApplicationConfigurationRequest?: ShowApplicationConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/applications/{application_id}/configuration",
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
        showApplicationDetail(showApplicationDetailRequest?: ShowApplicationDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/applications/{application_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;

            if (showApplicationDetailRequest !== null && showApplicationDetailRequest !== undefined) {
                if (showApplicationDetailRequest instanceof ShowApplicationDetailRequest) {
                    applicationId = showApplicationDetailRequest.applicationId;
                } else {
                    applicationId = showApplicationDetailRequest['application_id'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showApplicationDetail.');
            }

            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过组件ID获取应用组件信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showComponentDetail(showComponentDetailRequest?: ShowComponentDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/applications/{application_id}/components/{component_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let componentId;

            if (showComponentDetailRequest !== null && showComponentDetailRequest !== undefined) {
                if (showComponentDetailRequest instanceof ShowComponentDetailRequest) {
                    applicationId = showComponentDetailRequest.applicationId;
                    componentId = showComponentDetailRequest.componentId;
                } else {
                    applicationId = showComponentDetailRequest['application_id'];
                    componentId = showComponentDetailRequest['component_id'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showComponentDetail.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling showComponentDetail.');
            }

            options.pathParams = { 'application_id': applicationId,'component_id': componentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过环境ID获取环境详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEnvironmentDetail(showEnvironmentDetailRequest?: ShowEnvironmentDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/environments/{environment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let environmentId;

            if (showEnvironmentDetailRequest !== null && showEnvironmentDetailRequest !== undefined) {
                if (showEnvironmentDetailRequest instanceof ShowEnvironmentDetailRequest) {
                    environmentId = showEnvironmentDetailRequest.environmentId;
                } else {
                    environmentId = showEnvironmentDetailRequest['environment_id'];
                }
            }

        
            if (environmentId === null || environmentId === undefined) {
            throw new RequiredError('environmentId','Required parameter environmentId was null or undefined when calling showEnvironmentDetail.');
            }

            options.pathParams = { 'environment_id': environmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此API通过实例ID获取实例详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceDetail(showInstanceDetailRequest?: ShowInstanceDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/applications/{application_id}/components/{component_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let componentId;
            
            let instanceId;

            if (showInstanceDetailRequest !== null && showInstanceDetailRequest !== undefined) {
                if (showInstanceDetailRequest instanceof ShowInstanceDetailRequest) {
                    applicationId = showInstanceDetailRequest.applicationId;
                    componentId = showInstanceDetailRequest.componentId;
                    instanceId = showInstanceDetailRequest.instanceId;
                } else {
                    applicationId = showInstanceDetailRequest['application_id'];
                    componentId = showInstanceDetailRequest['component_id'];
                    instanceId = showInstanceDetailRequest['instance_id'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showInstanceDetail.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling showInstanceDetail.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceDetail.');
            }

            options.pathParams = { 'application_id': applicationId,'component_id': componentId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过此API获取部署任务详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobDetail(showJobDetailRequest?: ShowJobDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/jobs/{job_id}",
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

            if (showJobDetailRequest !== null && showJobDetailRequest !== undefined) {
                if (showJobDetailRequest instanceof ShowJobDetailRequest) {
                    jobId = showJobDetailRequest.jobId;
                    instanceId = showJobDetailRequest.instanceId;
                    limit = showJobDetailRequest.limit;
                    offset = showJobDetailRequest.offset;
                    desc = showJobDetailRequest.desc;
                } else {
                    jobId = showJobDetailRequest['job_id'];
                    instanceId = showJobDetailRequest['instance_id'];
                    limit = showJobDetailRequest['limit'];
                    offset = showJobDetailRequest['offset'];
                    desc = showJobDetailRequest['desc'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobDetail.');
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
         * 通过此API获取对组件实例的操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceAction(updateInstanceActionRequest?: UpdateInstanceActionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/cas/applications/{application_id}/components/{component_id}/instances/{instance_id}/action",
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
            
            let instanceId;

            if (updateInstanceActionRequest !== null && updateInstanceActionRequest !== undefined) {
                if (updateInstanceActionRequest instanceof UpdateInstanceActionRequest) {
                    applicationId = updateInstanceActionRequest.applicationId;
                    componentId = updateInstanceActionRequest.componentId;
                    instanceId = updateInstanceActionRequest.instanceId;
                    body = updateInstanceActionRequest.body
                } else {
                    applicationId = updateInstanceActionRequest['application_id'];
                    componentId = updateInstanceActionRequest['component_id'];
                    instanceId = updateInstanceActionRequest['instance_id'];
                    body = updateInstanceActionRequest['body'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling updateInstanceAction.');
            }
            if (componentId === null || componentId === undefined) {
            throw new RequiredError('componentId','Required parameter componentId was null or undefined when calling updateInstanceAction.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceAction.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId,'component_id': componentId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定仓库项目下创建文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFile(createFileRequest?: CreateFileRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/git/files/{namespace}/{project}/{path}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let xRepoAuth;
            
            let namespace;
            
            let project;
            
            let path;
            
            let ref;

            if (createFileRequest !== null && createFileRequest !== undefined) {
                if (createFileRequest instanceof CreateFileRequest) {
                    xRepoAuth = createFileRequest.xRepoAuth;
                    namespace = createFileRequest.namespace;
                    project = createFileRequest.project;
                    path = createFileRequest.path;
                    ref = createFileRequest.ref;
                    body = createFileRequest.body
                } else {
                    xRepoAuth = createFileRequest['X-Repo-Auth'];
                    namespace = createFileRequest['namespace'];
                    project = createFileRequest['project'];
                    path = createFileRequest['path'];
                    ref = createFileRequest['ref'];
                    body = createFileRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createFile.');
            }
            if (project === null || project === undefined) {
            throw new RequiredError('project','Required parameter project was null or undefined when calling createFile.');
            }
            if (path === null || path === undefined) {
            throw new RequiredError('path','Required parameter path was null or undefined when calling createFile.');
            }
            if (ref === null || ref === undefined) {
                throw new RequiredError('ref','Required parameter ref was null or undefined when calling createFile.');
            }
            if (ref !== null && ref !== undefined) {
                localVarQueryParameter['ref'] = ref;
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'project': project,'path': path, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建指定项目的hook。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHook(createHookRequest?: CreateHookRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/git/repos/{namespace}/{project}/hooks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRepoAuth;
            
            let namespace;
            
            let project;

            if (createHookRequest !== null && createHookRequest !== undefined) {
                if (createHookRequest instanceof CreateHookRequest) {
                    xRepoAuth = createHookRequest.xRepoAuth;
                    namespace = createHookRequest.namespace;
                    project = createHookRequest.project;
                    body = createHookRequest.body
                } else {
                    xRepoAuth = createHookRequest['X-Repo-Auth'];
                    namespace = createHookRequest['namespace'];
                    project = createHookRequest['project'];
                    body = createHookRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createHook.');
            }
            if (project === null || project === undefined) {
            throw new RequiredError('project','Required parameter project was null or undefined when calling createHook.');
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'project': project, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建指定Git仓库类型的OAuth授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOAuth(createOAuthRequest?: CreateOAuthRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/git/auths/{repo_type}/oauth",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let repoType;
            
            let tag;

            if (createOAuthRequest !== null && createOAuthRequest !== undefined) {
                if (createOAuthRequest instanceof CreateOAuthRequest) {
                    repoType = createOAuthRequest.repoType;
                    tag = createOAuthRequest.tag;
                    body = createOAuthRequest.body
                } else {
                    repoType = createOAuthRequest['repo_type'];
                    tag = createOAuthRequest['tag'];
                    body = createOAuthRequest['body'];
                }
            }

        
            if (repoType === null || repoType === undefined) {
            throw new RequiredError('repoType','Required parameter repoType was null or undefined when calling createOAuth.');
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repo_type': repoType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建指定Git仓库类型的口令授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPasswordAuth(createPasswordAuthRequest?: CreatePasswordAuthRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/git/auths/{repo_type}/password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repoType;

            if (createPasswordAuthRequest !== null && createPasswordAuthRequest !== undefined) {
                if (createPasswordAuthRequest instanceof CreatePasswordAuthRequest) {
                    repoType = createPasswordAuthRequest.repoType;
                    body = createPasswordAuthRequest.body
                } else {
                    repoType = createPasswordAuthRequest['repo_type'];
                    body = createPasswordAuthRequest['body'];
                }
            }

        
            if (repoType === null || repoType === undefined) {
            throw new RequiredError('repoType','Required parameter repoType was null or undefined when calling createPasswordAuth.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repo_type': repoType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建指定Git仓库类型的私人令牌授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPersonalAuth(createPersonalAuthRequest?: CreatePersonalAuthRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/git/auths/{repo_type}/personal",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let repoType;

            if (createPersonalAuthRequest !== null && createPersonalAuthRequest !== undefined) {
                if (createPersonalAuthRequest instanceof CreatePersonalAuthRequest) {
                    repoType = createPersonalAuthRequest.repoType;
                    body = createPersonalAuthRequest.body
                } else {
                    repoType = createPersonalAuthRequest['repo_type'];
                    body = createPersonalAuthRequest['body'];
                }
            }

        
            if (repoType === null || repoType === undefined) {
            throw new RequiredError('repoType','Required parameter repoType was null or undefined when calling createPersonalAuth.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'repo_type': repoType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建指定组织下的软件仓库项目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createProject(createProjectRequest?: CreateProjectRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/git/repos/{namespace}/projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xRepoAuth;
            
            let namespace;

            if (createProjectRequest !== null && createProjectRequest !== undefined) {
                if (createProjectRequest instanceof CreateProjectRequest) {
                    xRepoAuth = createProjectRequest.xRepoAuth;
                    namespace = createProjectRequest.namespace;
                    body = createProjectRequest.body
                } else {
                    xRepoAuth = createProjectRequest['X-Repo-Auth'];
                    namespace = createProjectRequest['namespace'];
                    body = createProjectRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createProject.');
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建指定项目的tag标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTag(createTagRequest?: CreateTagRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/git/repos/{namespace}/{project}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let xRepoAuth;
            
            let namespace;
            
            let project;
            
            let ref;

            if (createTagRequest !== null && createTagRequest !== undefined) {
                if (createTagRequest instanceof CreateTagRequest) {
                    xRepoAuth = createTagRequest.xRepoAuth;
                    namespace = createTagRequest.namespace;
                    project = createTagRequest.project;
                    ref = createTagRequest.ref;
                    body = createTagRequest.body
                } else {
                    xRepoAuth = createTagRequest['X-Repo-Auth'];
                    namespace = createTagRequest['namespace'];
                    project = createTagRequest['project'];
                    ref = createTagRequest['ref'];
                    body = createTagRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createTag.');
            }
            if (project === null || project === undefined) {
            throw new RequiredError('project','Required parameter project was null or undefined when calling createTag.');
            }
            if (ref === null || ref === undefined) {
                throw new RequiredError('ref','Required parameter ref was null or undefined when calling createTag.');
            }
            if (ref !== null && ref !== undefined) {
                localVarQueryParameter['ref'] = ref;
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'project': project, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过名称删除仓库授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAuthorize(deleteAuthorizeRequest?: DeleteAuthorizeRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/git/auths/{name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let name;

            if (deleteAuthorizeRequest !== null && deleteAuthorizeRequest !== undefined) {
                if (deleteAuthorizeRequest instanceof DeleteAuthorizeRequest) {
                    name = deleteAuthorizeRequest.name;
                } else {
                    name = deleteAuthorizeRequest['name'];
                }
            }

        
            if (name === null || name === undefined) {
            throw new RequiredError('name','Required parameter name was null or undefined when calling deleteAuthorize.');
            }

            options.pathParams = { 'name': name, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定项目仓库下的文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFile(deleteFileRequest?: DeleteFileRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/git/files/{namespace}/{project}/{path}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRepoAuth;
            
            let namespace;
            
            let project;
            
            let path;
            
            let ref;
            
            let message;
            
            let sha;

            if (deleteFileRequest !== null && deleteFileRequest !== undefined) {
                if (deleteFileRequest instanceof DeleteFileRequest) {
                    xRepoAuth = deleteFileRequest.xRepoAuth;
                    namespace = deleteFileRequest.namespace;
                    project = deleteFileRequest.project;
                    path = deleteFileRequest.path;
                    ref = deleteFileRequest.ref;
                    message = deleteFileRequest.message;
                    sha = deleteFileRequest.sha;
                } else {
                    xRepoAuth = deleteFileRequest['X-Repo-Auth'];
                    namespace = deleteFileRequest['namespace'];
                    project = deleteFileRequest['project'];
                    path = deleteFileRequest['path'];
                    ref = deleteFileRequest['ref'];
                    message = deleteFileRequest['message'];
                    sha = deleteFileRequest['sha'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteFile.');
            }
            if (project === null || project === undefined) {
            throw new RequiredError('project','Required parameter project was null or undefined when calling deleteFile.');
            }
            if (path === null || path === undefined) {
            throw new RequiredError('path','Required parameter path was null or undefined when calling deleteFile.');
            }
            if (ref === null || ref === undefined) {
                throw new RequiredError('ref','Required parameter ref was null or undefined when calling deleteFile.');
            }
            if (ref !== null && ref !== undefined) {
                localVarQueryParameter['ref'] = ref;
            }
            if (message === null || message === undefined) {
                throw new RequiredError('message','Required parameter message was null or undefined when calling deleteFile.');
            }
            if (message !== null && message !== undefined) {
                localVarQueryParameter['message'] = message;
            }
            if (sha === null || sha === undefined) {
                throw new RequiredError('sha','Required parameter sha was null or undefined when calling deleteFile.');
            }
            if (sha !== null && sha !== undefined) {
                localVarQueryParameter['sha'] = sha;
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'project': project,'path': path, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定项目的hook。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHook(deleteHookRequest?: DeleteHookRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/git/repos/{namespace}/{project}/hooks/{hook_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRepoAuth;
            
            let namespace;
            
            let project;
            
            let hookId;

            if (deleteHookRequest !== null && deleteHookRequest !== undefined) {
                if (deleteHookRequest instanceof DeleteHookRequest) {
                    xRepoAuth = deleteHookRequest.xRepoAuth;
                    namespace = deleteHookRequest.namespace;
                    project = deleteHookRequest.project;
                    hookId = deleteHookRequest.hookId;
                } else {
                    xRepoAuth = deleteHookRequest['X-Repo-Auth'];
                    namespace = deleteHookRequest['namespace'];
                    project = deleteHookRequest['project'];
                    hookId = deleteHookRequest['hook_id'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteHook.');
            }
            if (project === null || project === undefined) {
            throw new RequiredError('project','Required parameter project was null or undefined when calling deleteHook.');
            }
            if (hookId === null || hookId === undefined) {
            throw new RequiredError('hookId','Required parameter hookId was null or undefined when calling deleteHook.');
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }

            options.pathParams = { 'namespace': namespace,'project': project,'hook_id': hookId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定项目的tag标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTag(deleteTagRequest?: DeleteTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/git/repos/{namespace}/{project}/tags/{tag_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRepoAuth;
            
            let namespace;
            
            let project;
            
            let tagName;

            if (deleteTagRequest !== null && deleteTagRequest !== undefined) {
                if (deleteTagRequest instanceof DeleteTagRequest) {
                    xRepoAuth = deleteTagRequest.xRepoAuth;
                    namespace = deleteTagRequest.namespace;
                    project = deleteTagRequest.project;
                    tagName = deleteTagRequest.tagName;
                } else {
                    xRepoAuth = deleteTagRequest['X-Repo-Auth'];
                    namespace = deleteTagRequest['namespace'];
                    project = deleteTagRequest['project'];
                    tagName = deleteTagRequest['tag_name'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteTag.');
            }
            if (project === null || project === undefined) {
            throw new RequiredError('project','Required parameter project was null or undefined when calling deleteTag.');
            }
            if (tagName === null || tagName === undefined) {
            throw new RequiredError('tagName','Required parameter tagName was null or undefined when calling deleteTag.');
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }

            options.pathParams = { 'namespace': namespace,'project': project,'tag_name': tagName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取所有Git仓库授权信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuthorizations() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/git/auths",
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
         * 获取指定项目的所有分支列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBranches(listBranchesRequest?: ListBranchesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/git/repos/{namespace}/{project}/branches",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRepoAuth;
            
            let namespace;
            
            let project;

            if (listBranchesRequest !== null && listBranchesRequest !== undefined) {
                if (listBranchesRequest instanceof ListBranchesRequest) {
                    xRepoAuth = listBranchesRequest.xRepoAuth;
                    namespace = listBranchesRequest.namespace;
                    project = listBranchesRequest.project;
                } else {
                    xRepoAuth = listBranchesRequest['X-Repo-Auth'];
                    namespace = listBranchesRequest['namespace'];
                    project = listBranchesRequest['project'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listBranches.');
            }
            if (project === null || project === undefined) {
            throw new RequiredError('project','Required parameter project was null or undefined when calling listBranches.');
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }

            options.pathParams = { 'namespace': namespace,'project': project, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定项目的最近10次commit提交记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCommits(listCommitsRequest?: ListCommitsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/git/repos/{namespace}/{project}/commits",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRepoAuth;
            
            let namespace;
            
            let project;
            
            let ref;

            if (listCommitsRequest !== null && listCommitsRequest !== undefined) {
                if (listCommitsRequest instanceof ListCommitsRequest) {
                    xRepoAuth = listCommitsRequest.xRepoAuth;
                    namespace = listCommitsRequest.namespace;
                    project = listCommitsRequest.project;
                    ref = listCommitsRequest.ref;
                } else {
                    xRepoAuth = listCommitsRequest['X-Repo-Auth'];
                    namespace = listCommitsRequest['namespace'];
                    project = listCommitsRequest['project'];
                    ref = listCommitsRequest['ref'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listCommits.');
            }
            if (project === null || project === undefined) {
            throw new RequiredError('project','Required parameter project was null or undefined when calling listCommits.');
            }
            if (ref !== null && ref !== undefined) {
                localVarQueryParameter['ref'] = ref;
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'project': project, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定项目的所有hooks
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHooks(listHooksRequest?: ListHooksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/git/repos/{namespace}/{project}/hooks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRepoAuth;
            
            let namespace;
            
            let project;

            if (listHooksRequest !== null && listHooksRequest !== undefined) {
                if (listHooksRequest instanceof ListHooksRequest) {
                    xRepoAuth = listHooksRequest.xRepoAuth;
                    namespace = listHooksRequest.namespace;
                    project = listHooksRequest.project;
                } else {
                    xRepoAuth = listHooksRequest['X-Repo-Auth'];
                    namespace = listHooksRequest['namespace'];
                    project = listHooksRequest['project'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listHooks.');
            }
            if (project === null || project === undefined) {
            throw new RequiredError('project','Required parameter project was null or undefined when calling listHooks.');
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }

            options.pathParams = { 'namespace': namespace,'project': project, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库的namespaces。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNamespaces(listNamespacesRequest?: ListNamespacesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/git/repos/namespaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRepoAuth;

            if (listNamespacesRequest !== null && listNamespacesRequest !== undefined) {
                if (listNamespacesRequest instanceof ListNamespacesRequest) {
                    xRepoAuth = listNamespacesRequest.xRepoAuth;
                } else {
                    xRepoAuth = listNamespacesRequest['X-Repo-Auth'];
                }
            }

        
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定组织下的所有项目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjects(listProjectsRequest?: ListProjectsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/git/repos/{namespace}/projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRepoAuth;
            
            let namespace;

            if (listProjectsRequest !== null && listProjectsRequest !== undefined) {
                if (listProjectsRequest instanceof ListProjectsRequest) {
                    xRepoAuth = listProjectsRequest.xRepoAuth;
                    namespace = listProjectsRequest.namespace;
                } else {
                    xRepoAuth = listProjectsRequest['X-Repo-Auth'];
                    namespace = listProjectsRequest['namespace'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listProjects.');
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }

            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定项目的所有tag标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTags(listTagsRequest?: ListTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/git/repos/{namespace}/{project}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xRepoAuth;
            
            let namespace;
            
            let project;

            if (listTagsRequest !== null && listTagsRequest !== undefined) {
                if (listTagsRequest instanceof ListTagsRequest) {
                    xRepoAuth = listTagsRequest.xRepoAuth;
                    namespace = listTagsRequest.namespace;
                    project = listTagsRequest.project;
                } else {
                    xRepoAuth = listTagsRequest['X-Repo-Auth'];
                    namespace = listTagsRequest['namespace'];
                    project = listTagsRequest['project'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listTags.');
            }
            if (project === null || project === undefined) {
            throw new RequiredError('project','Required parameter project was null or undefined when calling listTags.');
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }

            options.pathParams = { 'namespace': namespace,'project': project, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定项目仓库的文件列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTrees(listTreesRequest?: ListTreesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/git/files/{namespace}/{project}/trees",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRepoAuth;
            
            let namespace;
            
            let project;
            
            let ref;

            if (listTreesRequest !== null && listTreesRequest !== undefined) {
                if (listTreesRequest instanceof ListTreesRequest) {
                    xRepoAuth = listTreesRequest.xRepoAuth;
                    namespace = listTreesRequest.namespace;
                    project = listTreesRequest.project;
                    ref = listTreesRequest.ref;
                } else {
                    xRepoAuth = listTreesRequest['X-Repo-Auth'];
                    namespace = listTreesRequest['namespace'];
                    project = listTreesRequest['project'];
                    ref = listTreesRequest['ref'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listTrees.');
            }
            if (project === null || project === undefined) {
            throw new RequiredError('project','Required parameter project was null or undefined when calling listTrees.');
            }
            if (ref === null || ref === undefined) {
                throw new RequiredError('ref','Required parameter ref was null or undefined when calling listTrees.');
            }
            if (ref !== null && ref !== undefined) {
                localVarQueryParameter['ref'] = ref;
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'project': project, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定项目仓库下文件的内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showContent(showContentRequest?: ShowContentRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/git/files/{namespace}/{project}/{path}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRepoAuth;
            
            let namespace;
            
            let project;
            
            let path;
            
            let ref;

            if (showContentRequest !== null && showContentRequest !== undefined) {
                if (showContentRequest instanceof ShowContentRequest) {
                    xRepoAuth = showContentRequest.xRepoAuth;
                    namespace = showContentRequest.namespace;
                    project = showContentRequest.project;
                    path = showContentRequest.path;
                    ref = showContentRequest.ref;
                } else {
                    xRepoAuth = showContentRequest['X-Repo-Auth'];
                    namespace = showContentRequest['namespace'];
                    project = showContentRequest['project'];
                    path = showContentRequest['path'];
                    ref = showContentRequest['ref'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showContent.');
            }
            if (project === null || project === undefined) {
            throw new RequiredError('project','Required parameter project was null or undefined when calling showContent.');
            }
            if (path === null || path === undefined) {
            throw new RequiredError('path','Required parameter path was null or undefined when calling showContent.');
            }
            if (ref === null || ref === undefined) {
                throw new RequiredError('ref','Required parameter ref was null or undefined when calling showContent.');
            }
            if (ref !== null && ref !== undefined) {
                localVarQueryParameter['ref'] = ref;
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'project': project,'path': path, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过指定的clone url 获取仓库信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectDetail(showProjectDetailRequest?: ShowProjectDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/git/repos/project-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xRepoAuth;
            
            let cloneUrl;

            if (showProjectDetailRequest !== null && showProjectDetailRequest !== undefined) {
                if (showProjectDetailRequest instanceof ShowProjectDetailRequest) {
                    xRepoAuth = showProjectDetailRequest.xRepoAuth;
                    cloneUrl = showProjectDetailRequest.cloneUrl;
                } else {
                    xRepoAuth = showProjectDetailRequest['X-Repo-Auth'];
                    cloneUrl = showProjectDetailRequest['clone_url'];
                }
            }

        
            if (cloneUrl === null || cloneUrl === undefined) {
                throw new RequiredError('cloneUrl','Required parameter cloneUrl was null or undefined when calling showProjectDetail.');
            }
            if (cloneUrl !== null && cloneUrl !== undefined) {
                localVarQueryParameter['clone_url'] = cloneUrl;
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定Git仓库类型的授权重定向URL。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRedirectUrl(showRedirectUrlRequest?: ShowRedirectUrlRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/git/auths/{repo_type}/redirect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let repoType;
            
            let tag;

            if (showRedirectUrlRequest !== null && showRedirectUrlRequest !== undefined) {
                if (showRedirectUrlRequest instanceof ShowRedirectUrlRequest) {
                    repoType = showRedirectUrlRequest.repoType;
                    tag = showRedirectUrlRequest.tag;
                } else {
                    repoType = showRedirectUrlRequest['repo_type'];
                    tag = showRedirectUrlRequest['tag'];
                }
            }

        
            if (repoType === null || repoType === undefined) {
            throw new RequiredError('repoType','Required parameter repoType was null or undefined when calling showRedirectUrl.');
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repo_type': repoType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定项目仓库下的文件内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFile(updateFileRequest?: UpdateFileRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/git/files/{namespace}/{project}/{path}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let xRepoAuth;
            
            let namespace;
            
            let project;
            
            let path;
            
            let ref;

            if (updateFileRequest !== null && updateFileRequest !== undefined) {
                if (updateFileRequest instanceof UpdateFileRequest) {
                    xRepoAuth = updateFileRequest.xRepoAuth;
                    namespace = updateFileRequest.namespace;
                    project = updateFileRequest.project;
                    path = updateFileRequest.path;
                    ref = updateFileRequest.ref;
                    body = updateFileRequest.body
                } else {
                    xRepoAuth = updateFileRequest['X-Repo-Auth'];
                    namespace = updateFileRequest['namespace'];
                    project = updateFileRequest['project'];
                    path = updateFileRequest['path'];
                    ref = updateFileRequest['ref'];
                    body = updateFileRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateFile.');
            }
            if (project === null || project === undefined) {
            throw new RequiredError('project','Required parameter project was null or undefined when calling updateFile.');
            }
            if (path === null || path === undefined) {
            throw new RequiredError('path','Required parameter path was null or undefined when calling updateFile.');
            }
            if (ref === null || ref === undefined) {
                throw new RequiredError('ref','Required parameter ref was null or undefined when calling updateFile.');
            }
            if (ref !== null && ref !== undefined) {
                localVarQueryParameter['ref'] = ref;
            }
            if (xRepoAuth !== undefined && xRepoAuth !== null) {
                localVarHeaderParameter['X-Repo-Auth'] = String(xRepoAuth);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'project': project,'path': path, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过此API获取所用支持的应用资源规格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlavors() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/metadata/flavors",
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
         * 此API用来获取所有支持应用组件运行时类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRuntimes() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/metadata/runtimes",
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
         * 此API用来获取所有内置应用组件模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplates() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/cas/metadata/templates",
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