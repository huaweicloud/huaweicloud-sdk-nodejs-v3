import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ApplicationBaseV3 } from './model/ApplicationBaseV3';
import { ApplicationModifyInfo } from './model/ApplicationModifyInfo';
import { ApplicationV3 } from './model/ApplicationV3';
import { CheckRepositoryDuplicateNameRequest } from './model/CheckRepositoryDuplicateNameRequest';
import { CheckRepositoryDuplicateNameResponse } from './model/CheckRepositoryDuplicateNameResponse';
import { CodehubJobInfo } from './model/CodehubJobInfo';
import { CreateDeploymentJobsParams } from './model/CreateDeploymentJobsParams';
import { CreateDeploymentJobsRequest } from './model/CreateDeploymentJobsRequest';
import { CreateDeploymentJobsResponse } from './model/CreateDeploymentJobsResponse';
import { CreateTemplateViewHistoriesRequest } from './model/CreateTemplateViewHistoriesRequest';
import { CreateTemplateViewHistoriesResponse } from './model/CreateTemplateViewHistoriesResponse';
import { DeleteApplicationV4Request } from './model/DeleteApplicationV4Request';
import { DeleteApplicationV4Response } from './model/DeleteApplicationV4Response';
import { Dependent } from './model/Dependent';
import { DownloadApplicationCodeRequest } from './model/DownloadApplicationCodeRequest';
import { DownloadApplicationCodeResponse } from './model/DownloadApplicationCodeResponse';
import { FGSDeploymentJobsParam } from './model/FGSDeploymentJobsParam';
import { FileTreeNode } from './model/FileTreeNode';
import { ListApplicationsV6Request } from './model/ListApplicationsV6Request';
import { ListApplicationsV6Response } from './model/ListApplicationsV6Response';
import { ListPipelineTemplatesRequest } from './model/ListPipelineTemplatesRequest';
import { ListPipelineTemplatesResponse } from './model/ListPipelineTemplatesResponse';
import { ListProjectsV4Request } from './model/ListProjectsV4Request';
import { ListProjectsV4Response } from './model/ListProjectsV4Response';
import { ListPublishedTemplatesRequest } from './model/ListPublishedTemplatesRequest';
import { ListPublishedTemplatesResponse } from './model/ListPublishedTemplatesResponse';
import { ListTemplateViewHistoriesRequest } from './model/ListTemplateViewHistoriesRequest';
import { ListTemplateViewHistoriesResponse } from './model/ListTemplateViewHistoriesResponse';
import { ListTemplatesRequest } from './model/ListTemplatesRequest';
import { ListTemplatesResponse } from './model/ListTemplatesResponse';
import { ListTemplatesV2Request } from './model/ListTemplatesV2Request';
import { ListTemplatesV2Response } from './model/ListTemplatesV2Response';
import { PipelineBasic } from './model/PipelineBasic';
import { PipelineCreationResult } from './model/PipelineCreationResult';
import { PipelineDeleteStatus } from './model/PipelineDeleteStatus';
import { PipelineStageResp } from './model/PipelineStageResp';
import { PipelineTemplate } from './model/PipelineTemplate';
import { PipelineTemplateInfo } from './model/PipelineTemplateInfo';
import { ProjectV3 } from './model/ProjectV3';
import { Reference } from './model/Reference';
import { ReleaseRepository } from './model/ReleaseRepository';
import { RepositoryBasicInfo } from './model/RepositoryBasicInfo';
import { RepositoryCreationResult } from './model/RepositoryCreationResult';
import { RepositoryInfo } from './model/RepositoryInfo';
import { ResouceInfo } from './model/ResouceInfo';
import { RunCodehubTemplateJobRequest } from './model/RunCodehubTemplateJobRequest';
import { RunCodehubTemplateJobResponse } from './model/RunCodehubTemplateJobResponse';
import { RunDevstarTemplateJobRequest } from './model/RunDevstarTemplateJobRequest';
import { RunDevstarTemplateJobResponse } from './model/RunDevstarTemplateJobResponse';
import { ShowApplicationDependentResourcesRequest } from './model/ShowApplicationDependentResourcesRequest';
import { ShowApplicationDependentResourcesResponse } from './model/ShowApplicationDependentResourcesResponse';
import { ShowApplicationReleaseRepositoriesRequest } from './model/ShowApplicationReleaseRepositoriesRequest';
import { ShowApplicationReleaseRepositoriesResponse } from './model/ShowApplicationReleaseRepositoriesResponse';
import { ShowApplicationResDeleteStatusRequest } from './model/ShowApplicationResDeleteStatusRequest';
import { ShowApplicationResDeleteStatusResponse } from './model/ShowApplicationResDeleteStatusResponse';
import { ShowApplicationV3Request } from './model/ShowApplicationV3Request';
import { ShowApplicationV3Response } from './model/ShowApplicationV3Response';
import { ShowDeploymentJobsRequest } from './model/ShowDeploymentJobsRequest';
import { ShowDeploymentJobsResponse } from './model/ShowDeploymentJobsResponse';
import { ShowJobDetailRequest } from './model/ShowJobDetailRequest';
import { ShowJobDetailResponse } from './model/ShowJobDetailResponse';
import { ShowPipelineLastStatusV2Request } from './model/ShowPipelineLastStatusV2Request';
import { ShowPipelineLastStatusV2Response } from './model/ShowPipelineLastStatusV2Response';
import { ShowRepositoryByCloudIdeRequest } from './model/ShowRepositoryByCloudIdeRequest';
import { ShowRepositoryByCloudIdeResponse } from './model/ShowRepositoryByCloudIdeResponse';
import { ShowRepositoryStatisticalDataV2Request } from './model/ShowRepositoryStatisticalDataV2Request';
import { ShowRepositoryStatisticalDataV2Response } from './model/ShowRepositoryStatisticalDataV2Response';
import { ShowTemplateDetailRequest } from './model/ShowTemplateDetailRequest';
import { ShowTemplateDetailResponse } from './model/ShowTemplateDetailResponse';
import { ShowTemplateFileRequest } from './model/ShowTemplateFileRequest';
import { ShowTemplateFileResponse } from './model/ShowTemplateFileResponse';
import { ShowTemplateV3Request } from './model/ShowTemplateV3Request';
import { ShowTemplateV3Response } from './model/ShowTemplateV3Response';
import { StartPipelineRequest } from './model/StartPipelineRequest';
import { StartPipelineResponse } from './model/StartPipelineResponse';
import { TagInfo } from './model/TagInfo';
import { TemplateInfo } from './model/TemplateInfo';
import { TemplateJobInfo } from './model/TemplateJobInfo';
import { TemplateProductExt } from './model/TemplateProductExt';
import { TemplateQuery } from './model/TemplateQuery';
import { TemplateQueryV2 } from './model/TemplateQueryV2';
import { TemplateSimpleInfo } from './model/TemplateSimpleInfo';
import { TemplateType } from './model/TemplateType';
import { TemplateViewHistory } from './model/TemplateViewHistory';
import { TemplatesInfo } from './model/TemplatesInfo';
import { TopicCategory } from './model/TopicCategory';
import { UpdateApplicationRequest } from './model/UpdateApplicationRequest';
import { UpdateApplicationResponse } from './model/UpdateApplicationResponse';

export class DevStarClient {
    public static newBuilder(): ClientBuilder<DevStarClient> {
        return new ClientBuilder<DevStarClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }

    /**
     * 通过应用Id获取软件发布仓库列表 
     * @summary 通过应用Id获取软件发布仓库列表 
     * @param {string} applicationId 应用id
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {string} [parentId] 父id,仅在仓库类型为ReleaseMan需要
     * @param {string} [keyword] 搜索关键字,支持按名称搜索,默认null
     * @param {number} [limit] 每页显示的条目数量,默认10
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询,默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplicationReleaseRepositories(showApplicationReleaseRepositoriesRequest?: ShowApplicationReleaseRepositoriesRequest): Promise<ShowApplicationReleaseRepositoriesResponse> {
        const options = ParamCreater().showApplicationReleaseRepositories(showApplicationReleaseRepositoriesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据应用Id查询应用关联的代码仓、流水线删除状态 使用场景：用户删除应用关联的资源（如代码仓、流水线...）后，通过该接口实时查询代码仓、流水线删除状态
     * @summary 查询应用关联资源删除状态
     * @param {string} applicationId 应用id
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplicationResDeleteStatus(showApplicationResDeleteStatusRequest?: ShowApplicationResDeleteStatusRequest): Promise<ShowApplicationResDeleteStatusResponse> {
        const options = ParamCreater().showApplicationResDeleteStatus(showApplicationResDeleteStatusRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据应用Id获取依赖元数据资源
     * @summary 获取应用依赖元数据资源
     * @param {string} applicationId 应用id
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {number} [limit] 每页显示的条目数量
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplicationDependentResources(showApplicationDependentResourcesRequest?: ShowApplicationDependentResourcesRequest): Promise<ShowApplicationDependentResourcesResponse> {
        const options = ParamCreater().showApplicationDependentResources(showApplicationDependentResourcesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据应用Id获取应用详情
     * @summary 获取应用详情
     * @param {string} applicationId 应用id
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplicationV3(showApplicationV3Request?: ShowApplicationV3Request): Promise<ShowApplicationV3Response> {
        const options = ParamCreater().showApplicationV3(showApplicationV3Request);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据应用Id更新对应有权限的应用信息 - 允许更新信息的信息包含 name,description,icon
     * @summary 更新应用信息
     * @param {string} applicationId 应用id
     * @param {ApplicationModifyInfo} updateApplicationRequestBody 应用信息
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApplication(updateApplicationRequest?: UpdateApplicationRequest): Promise<void> {
        const options = ParamCreater().updateApplication(updateApplicationRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据应用Id删除应用，并可以选择删除其关联的代码仓、流水线资源
     * @summary 删除应用信息
     * @param {string} applicationId 应用id
     * @param {boolean} [isDeleteRepository] 是否删除代码仓
     * @param {string} [pipelineIds] 删除流水线ID,多流水线逗号隔开
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApplicationV4(deleteApplicationV4Request?: DeleteApplicationV4Request): Promise<void> {
        const options = ParamCreater().deleteApplicationV4(deleteApplicationV4Request);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取我创建的应用列表 当前只支持查询我创建的应用，其中请求参数is_created_by_self需为true
     * @summary 获取应用列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {boolean} [attention] 是否查询我关注的应用
     * @param {string} [regionId] 区域id，从控制台获取方法请参见: [获取区域ID](https://console.huaweicloud.com/iam/?region&#x3D;cn-north-1&amp;locale&#x3D;zh-cn#/iam/projects)
     * @param {string} [keyword] 搜索关键字,支持按名称和描述搜索，默认null
     * @param {string} [projectId] 所属DevCloud项目id，从 [项目列表接口](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;DevStar&amp;api&#x3D;ListProjectsV4) 查询。
     * @param {string} [topicId] 主题id,场景或者部署方式分类id
     * @param {boolean} [isCreatedBySelf] 是否查询由我创建
     * @param {Array<'name' | 'created_at' | 'updated_at'>} [sortKey] 排序字段, name：应用名称,created_at:创建时间,updated_at:更新时间
     * @param {Array<'desc' | 'asc'>} [sortDir] 排序方式, desc:降序, asc:升序
     * @param {number} [limit] 每页显示的条目数量,默认10
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询,默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplicationsV6(listApplicationsV6Request?: ListApplicationsV6Request): Promise<ListApplicationsV6Response> {
        const options = ParamCreater().listApplicationsV6(listApplicationsV6Request);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 下载模板产物。
     * @summary 下载模板产物
     * @param {string} jobId 任务id。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型，缺省值为“zh-cn”。  枚举值： - zh-cn：中文 - en-us：英文 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadApplicationCode(downloadApplicationCodeRequest?: DownloadApplicationCodeRequest): Promise<any> {
        const options = ParamCreater().downloadApplicationCode(downloadApplicationCodeRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 创建部署任务，并触发任务执行，当前只支持函数部署。 其中，报文中file_id为查询软件版本包接口返回版本包id; handler为在函数部署方式下，入口函数名称，从应用代码中获取，格式为“包名.类名.函数名称”，例如：com.example.demo.APIGTrigger.handler。 也可以从应用详情接口返回结构template_deployment中直接获取。
     * @summary 创建部署任务
     * @param {string} applicationId 应用id
     * @param {string} environmentTag 环境标识，从 [应用详情接口](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;DevStar&amp;api&#x3D;ShowApplication) 返回报文中的环境信息获取。
     * @param {CreateDeploymentJobsParams} createDeploymentJobsRequestBody 创建部署任务信息
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDeploymentJobs(createDeploymentJobsRequest?: CreateDeploymentJobsRequest): Promise<CreateDeploymentJobsResponse> {
        const options = ParamCreater().createDeploymentJobs(createDeploymentJobsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询应用环境部署任务详情
     * @summary 查询应用环境部署任务详情
     * @param {string} applicationId 应用id
     * @param {string} environmentTag 环境标识，从 [应用详情接口](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;DevStar&amp;api&#x3D;ShowApplication) 返回报文中的环境信息获取。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeploymentJobs(showDeploymentJobsRequest?: ShowDeploymentJobsRequest): Promise<ShowDeploymentJobsResponse> {
        const options = ParamCreater().showDeploymentJobs(showDeploymentJobsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 使用CodeHub模板创建应用代码。  通过 Codehub 模板创建生成应用代码的任务，并将应用代码存储于指定的 CodeHub 仓库中或者生成代码压缩包，可以通过返回的任务 ID 查询相关任务状态。  - 接口鉴权方式 通过华为云服务获取的用户token。  - 代码生成位置 应用代码生成后的地址，目前支持codehub地址和压缩包下载地址。
     * @summary CodeHub 模板生成代码
     * @param {CodehubJobInfo} runCodehubTemplateJobRequestBody 创建任务参数
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型，缺省值为“zh-cn”。  枚举值： - zh-cn：中文 - en-us：英文 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runCodehubTemplateJob(runCodehubTemplateJobRequest?: RunCodehubTemplateJobRequest): Promise<RunCodehubTemplateJobResponse> {
        const options = ParamCreater().runCodehubTemplateJob(runCodehubTemplateJobRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 使用DevStar的模板创建应用代码。  通过 DevStar 模板创建生成应用代码的任务，并将应用代码存储于指定的 CodeHub 仓库中，可以通过返回的任务 ID 查询相关任务状态。  - 接口鉴权方式 通过华为云服务获取的用户token。  - 代码生成位置 应用代码生成后的地址，目前支持codehub地址和压缩包下载地址。
     * @summary Devstar 模板生成代码
     * @param {TemplateJobInfo} runDevstarTemplateJobRequestBody 创建任务参数
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型，缺省值为“zh-cn”。  枚举值： - zh-cn：中文 - en-us：英文 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runDevstarTemplateJob(runDevstarTemplateJobRequest?: RunDevstarTemplateJobRequest): Promise<RunDevstarTemplateJobResponse> {
        const options = ParamCreater().runDevstarTemplateJob(runDevstarTemplateJobRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询任务的详情。  通过任务ID可以查看任务的状态 当任务结束时返回应用代码存放的位置。  - 接口鉴权方式 通过华为云服务获取的用户token。  - 代码生成位置 应用代码生成后的地址，目前支持codehub地址和压缩包下载地址。
     * @summary 查询任务详情
     * @param {string} jobId 任务 ID: 可以通过调用 RunDevstarTemplateJob 返回结果获取
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型，缺省值为“zh-cn”。  枚举值： - zh-cn：中文 - en-us：英文 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobDetail(showJobDetailRequest?: ShowJobDetailRequest): Promise<ShowJobDetailResponse> {
        const options = ParamCreater().showJobDetail(showJobDetailRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 流水线模板列表查询
     * @summary 流水线模板列表查询
     * @param {string} regionId 区域id
     * @param {string} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，默认0
     * @param {number} [limit] 每页显示的条目数量，默认10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPipelineTemplates(listPipelineTemplatesRequest?: ListPipelineTemplatesRequest): Promise<ListPipelineTemplatesResponse> {
        const options = ParamCreater().listPipelineTemplates(listPipelineTemplatesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询应用流水线最近一次运行状态查询接口
     * @summary 查询流水线最近一次运行状态查询接口
     * @param {string} pipelineId 流水线ID
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPipelineLastStatusV2(showPipelineLastStatusV2Request?: ShowPipelineLastStatusV2Request): Promise<ShowPipelineLastStatusV2Response> {
        const options = ParamCreater().showPipelineLastStatusV2(showPipelineLastStatusV2Request);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 根据流水线Id操作流水线启动
     * @summary 根据流水线Id操作流水线启动
     * @param {string} pipelineId 流水线ID
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startPipeline(startPipelineRequest?: StartPipelineRequest): Promise<StartPipelineResponse> {
        const options = ParamCreater().startPipeline(startPipelineRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取用户有权限的DevStar存量DevCloud项目列表。 来源包括：1.DevStar创建的DevCloud项目；2.DevStar应用有关联DevCloud项目。
     * @summary 获取用户有权限的DevStar存量DevCloud项目列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {string} [keyword] 搜索关键字,支持按名称和描述搜索，默认null
     * @param {number} [limit] 每页显示的条目数量,默认100
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询,默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectsV4(listProjectsV4Request?: ListProjectsV4Request): Promise<ListProjectsV4Response> {
        const options = ParamCreater().listProjectsV4(listProjectsV4Request);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 检查仓库名称是否重名 - 校验规则     同一个项目下的仓库名称不能存在重复,当结果为true时,校验通过,仓库名称可用,否则,校验不通过,当前项目下的仓库名称已存在,不可用 - 必传参数     project_id,name,region_id
     * @summary 检查仓库名称是否重名
     * @param {string} projectId 项目id
     * @param {string} name 仓库名称
     * @param {string} regionId 区域id
     * @param {string} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkRepositoryDuplicateName(checkRepositoryDuplicateNameRequest?: CheckRepositoryDuplicateNameRequest): Promise<CheckRepositoryDuplicateNameResponse> {
        const options = ParamCreater().checkRepositoryDuplicateName(checkRepositoryDuplicateNameRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 使用 CloudIDE 实例打开应用代码。CloudIDE会保存用户项目数据，相同用户使用同一个CloudIDE，使用要求： - 用户需为登录状态。 - 拥有仓库权限。 
     * @summary 使用 CloudIDE 实例打开应用代码
     * @param {string} repositoryId 仓库id。
     * @param {string} repositorySshUrl 仓库下载地址。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {string} [regionId] 区域ID，目前仅支持北京四：cn-north-4及北京一：cn-north-1。
     * @param {string} [spacePrefix] 工作空间名称前缀，仅在is_open_last为false时生效，由用户自定义，支持大小写字母、中文、_、-，长度1-256。
     * @param {boolean} [isOpenLast] 是否打开上一次的工作空间，true表示打开上一次工作空间，如果没有上一次工作空间会返回空，false代表打开一个全新的工作空间。
     * @param {boolean} [isFree] 是否创建 CloudIDE 免费实例链接，true表示创建一个 CloudIDE 免费实例链接，false表示创建一个 CloudIDE 收费实例链接。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRepositoryByCloudIde(showRepositoryByCloudIdeRequest?: ShowRepositoryByCloudIdeRequest): Promise<ShowRepositoryByCloudIdeResponse> {
        const options = ParamCreater().showRepositoryByCloudIde(showRepositoryByCloudIdeRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询代码仓库的统计信息,包括代码仓的名称,代码行数等信息
     * @summary 应用代码仓库统计信息
     * @param {string} repositoryId 代码仓库id
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型 中文:zh-cn 英文:en-us
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRepositoryStatisticalDataV2(showRepositoryStatisticalDataV2Request?: ShowRepositoryStatisticalDataV2Request): Promise<ShowRepositoryStatisticalDataV2Response> {
        const options = ParamCreater().showRepositoryStatisticalDataV2(showRepositoryStatisticalDataV2Request);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 该接口可以用于模板作者或模板维护人读取模板文件内容。
     * @summary 读取模板文件
     * @param {string} templateId 模板ID，通过查询模板列表接口可获取相应的模板ID。
     * @param {string} filePath 文件相对路径，基于当前根目录的相对文件路径，例如获取HELP.md文件内容，则文件相对路径为“template-resources/file/HELP.md”。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型，缺省值为“zh-cn”。  枚举值： - zh-cn：中文 - en-us：英文 
     * @param {'source-package' | 'introduction'} [type] 读取文件来源，缺省值为“source-pachage”。  枚举值： - source-package: 源文件压缩包 - introduction: 说明文件 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateFile(showTemplateFileRequest?: ShowTemplateFileRequest): Promise<ShowTemplateFileResponse> {
        const options = ParamCreater().showTemplateFile(showTemplateFileRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 未登录状态下，将用户浏览过的模板缓存在浏览器中，登录时，调用该接口同步模板浏览记录。 
     * @summary 同步模板浏览记录
     * @param {TemplatesInfo} createTemplateViewHistoriesRequestBody 模板信息
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型，缺省值为“zh-cn”。  枚举值： - zh-cn：中文 - en-us：英文 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTemplateViewHistories(createTemplateViewHistoriesRequest?: CreateTemplateViewHistoriesRequest): Promise<CreateTemplateViewHistoriesResponse> {
        const options = ParamCreater().createTemplateViewHistories(createTemplateViewHistoriesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询模板列表，推荐使用/v1/templates/query接口。
     * @summary 查询模板列表（V1）
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型，缺省值为“zh-cn”。  枚举值： - zh-cn：中文 - en-us：英文 
     * @param {string} [keyword] 搜索关键字，支持按名称和描述搜索，默认null。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，offset大于等于0。
     * @param {number} [limit] 每页的模板条数，默认10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPublishedTemplates(listPublishedTemplatesRequest?: ListPublishedTemplatesRequest): Promise<ListPublishedTemplatesResponse> {
        const options = ParamCreater().listPublishedTemplates(listPublishedTemplatesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询DevStar或者CodeLabs登录用户浏览过的模板（只返回最近浏览的5个模板）。 
     * @summary 我浏览的模板记录
     * @param {0 | 1} platformSource 平台来源： - 0：查询CodeLabs中用户浏览过的模板。 - 1：查询DevStar中用户浏览过的模板。 
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型，缺省值为“zh-cn”。  枚举值： - zh-cn：中文 - en-us：英文 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplateViewHistories(listTemplateViewHistoriesRequest?: ListTemplateViewHistoriesRequest): Promise<ListTemplateViewHistoriesResponse> {
        const options = ParamCreater().listTemplateViewHistories(listTemplateViewHistoriesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询模板列表。
     * @summary 查询模板列表
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型，缺省值为“zh-cn”。  枚举值： - zh-cn：中文 - en-us：英文 
     * @param {TemplateQuery} [listTemplatesRequestBody] 模板列表查询参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplates(listTemplatesRequest?: ListTemplatesRequest): Promise<ListTemplatesResponse> {
        const options = ParamCreater().listTemplates(listTemplatesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询模板列表。
     * @summary 查询模板列表（V2）
     * @param {string} actionId 请填写固定值“query”。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型，缺省值为“zh-cn”。  枚举值： - zh-cn：中文 - en-us：英文 
     * @param {TemplateQueryV2} [listTemplatesV2RequestBody] 模板列表查询参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplatesV2(listTemplatesV2Request?: ListTemplatesV2Request): Promise<ListTemplatesV2Response> {
        const options = ParamCreater().listTemplatesV2(listTemplatesV2Request);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 获取指定模板详情，包括模板id、名称、描述、作者、标签、上架时间等信息。 
     * @summary 查询模板详情（V3）
     * @param {string} templateId 模板ID，通过查询模板列表接口可获取相应的模板ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型，缺省值为“zh-cn”。  枚举值： - zh-cn：中文 - en-us：英文 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateV3(showTemplateV3Request?: ShowTemplateV3Request): Promise<ShowTemplateV3Response> {
        const options = ParamCreater().showTemplateV3(showTemplateV3Request);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 查询模板详情，推荐使用V3版本接口。
     * @summary 查询模板详情（V1）
     * @param {string} templateId 模板ID，通过查询模板列表接口可获取相应模板ID。
     * @param {'zh-cn' | 'en-us'} [xLanguage] 语言类型，缺省值为“zh-cn”。  枚举值： - zh-cn：中文 - en-us：英文 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateDetail(showTemplateDetailRequest?: ShowTemplateDetailRequest): Promise<ShowTemplateDetailResponse> {
        const options = ParamCreater().showTemplateDetail(showTemplateDetailRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 通过应用Id获取软件发布仓库列表 
         */
        showApplicationReleaseRepositories(showApplicationReleaseRepositoriesRequest?: ShowApplicationReleaseRepositoriesRequest) {
            const options = {
                method: "GET",
                url: "/v1/applications/{application_id}/release-repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let applicationId;
            let xLanguage;
            let parentId;
            let keyword;
            let limit;
            let offset;

            if (showApplicationReleaseRepositoriesRequest !== null && showApplicationReleaseRepositoriesRequest !== undefined) {
                if (showApplicationReleaseRepositoriesRequest instanceof ShowApplicationReleaseRepositoriesRequest) {
                    applicationId = showApplicationReleaseRepositoriesRequest.applicationId;
                    xLanguage = showApplicationReleaseRepositoriesRequest.xLanguage;
                    parentId = showApplicationReleaseRepositoriesRequest.parentId;
                    keyword = showApplicationReleaseRepositoriesRequest.keyword;
                    limit = showApplicationReleaseRepositoriesRequest.limit;
                    offset = showApplicationReleaseRepositoriesRequest.offset;
                } else {
                    applicationId = showApplicationReleaseRepositoriesRequest['application_id'];
                    xLanguage = showApplicationReleaseRepositoriesRequest['X-Language'];
                    parentId = showApplicationReleaseRepositoriesRequest['parent_id'];
                    keyword = showApplicationReleaseRepositoriesRequest['keyword'];
                    limit = showApplicationReleaseRepositoriesRequest['limit'];
                    offset = showApplicationReleaseRepositoriesRequest['offset'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showApplicationReleaseRepositories.');
            }
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
            }
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据应用Id查询应用关联的代码仓、流水线删除状态 使用场景：用户删除应用关联的资源（如代码仓、流水线...）后，通过该接口实时查询代码仓、流水线删除状态
         */
        showApplicationResDeleteStatus(showApplicationResDeleteStatusRequest?: ShowApplicationResDeleteStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/application-resources/{application_id}/delete-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let applicationId;
            let xLanguage;

            if (showApplicationResDeleteStatusRequest !== null && showApplicationResDeleteStatusRequest !== undefined) {
                if (showApplicationResDeleteStatusRequest instanceof ShowApplicationResDeleteStatusRequest) {
                    applicationId = showApplicationResDeleteStatusRequest.applicationId;
                    xLanguage = showApplicationResDeleteStatusRequest.xLanguage;
                } else {
                    applicationId = showApplicationResDeleteStatusRequest['application_id'];
                    xLanguage = showApplicationResDeleteStatusRequest['X-Language'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showApplicationResDeleteStatus.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据应用Id获取依赖元数据资源
         */
        showApplicationDependentResources(showApplicationDependentResourcesRequest?: ShowApplicationDependentResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v3/applications/{application_id}/dependent-resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let applicationId;
            let xLanguage;
            let limit;
            let offset;

            if (showApplicationDependentResourcesRequest !== null && showApplicationDependentResourcesRequest !== undefined) {
                if (showApplicationDependentResourcesRequest instanceof ShowApplicationDependentResourcesRequest) {
                    applicationId = showApplicationDependentResourcesRequest.applicationId;
                    xLanguage = showApplicationDependentResourcesRequest.xLanguage;
                    limit = showApplicationDependentResourcesRequest.limit;
                    offset = showApplicationDependentResourcesRequest.offset;
                } else {
                    applicationId = showApplicationDependentResourcesRequest['application_id'];
                    xLanguage = showApplicationDependentResourcesRequest['X-Language'];
                    limit = showApplicationDependentResourcesRequest['limit'];
                    offset = showApplicationDependentResourcesRequest['offset'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showApplicationDependentResources.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据应用Id获取应用详情
         */
        showApplicationV3(showApplicationV3Request?: ShowApplicationV3Request) {
            const options = {
                method: "GET",
                url: "/v3/applications/{application_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let applicationId;
            let xLanguage;

            if (showApplicationV3Request !== null && showApplicationV3Request !== undefined) {
                if (showApplicationV3Request instanceof ShowApplicationV3Request) {
                    applicationId = showApplicationV3Request.applicationId;
                    xLanguage = showApplicationV3Request.xLanguage;
                } else {
                    applicationId = showApplicationV3Request['application_id'];
                    xLanguage = showApplicationV3Request['X-Language'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showApplicationV3.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据应用Id更新对应有权限的应用信息 - 允许更新信息的信息包含 name,description,icon
         */
        updateApplication(updateApplicationRequest?: UpdateApplicationRequest) {
            const options = {
                method: "PUT",
                url: "/v3/applications/{application_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let applicationId;
            let xLanguage;

            if (updateApplicationRequest !== null && updateApplicationRequest !== undefined) {
                if (updateApplicationRequest instanceof UpdateApplicationRequest) {
                    applicationId = updateApplicationRequest.applicationId;
                    body = updateApplicationRequest.body
                    xLanguage = updateApplicationRequest.xLanguage;
                } else {
                    applicationId = updateApplicationRequest['application_id'];
                    body = updateApplicationRequest['body'];
                    xLanguage = updateApplicationRequest['X-Language'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling updateApplication.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据应用Id删除应用，并可以选择删除其关联的代码仓、流水线资源
         */
        deleteApplicationV4(deleteApplicationV4Request?: DeleteApplicationV4Request) {
            const options = {
                method: "DELETE",
                url: "/v4/applications/{application_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let applicationId;
            let isDeleteRepository;
            let pipelineIds;

            if (deleteApplicationV4Request !== null && deleteApplicationV4Request !== undefined) {
                if (deleteApplicationV4Request instanceof DeleteApplicationV4Request) {
                    applicationId = deleteApplicationV4Request.applicationId;
                    isDeleteRepository = deleteApplicationV4Request.isDeleteRepository;
                    pipelineIds = deleteApplicationV4Request.pipelineIds;
                } else {
                    applicationId = deleteApplicationV4Request['application_id'];
                    isDeleteRepository = deleteApplicationV4Request['is_delete_repository'];
                    pipelineIds = deleteApplicationV4Request['pipeline_ids'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling deleteApplicationV4.');
            }
            if (isDeleteRepository !== null && isDeleteRepository !== undefined) {
                localVarQueryParameter['is_delete_repository'] = isDeleteRepository;
            }
            if (pipelineIds !== null && pipelineIds !== undefined) {
                localVarQueryParameter['pipeline_ids'] = pipelineIds;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取我创建的应用列表 当前只支持查询我创建的应用，其中请求参数is_created_by_self需为true
         */
        listApplicationsV6(listApplicationsV6Request?: ListApplicationsV6Request) {
            const options = {
                method: "GET",
                url: "/v6/applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let xLanguage;
            let attention;
            let regionId;
            let keyword;
            let projectId;
            let topicId;
            let isCreatedBySelf;
            let sortKey;
            let sortDir;
            let limit;
            let offset;

            if (listApplicationsV6Request !== null && listApplicationsV6Request !== undefined) {
                if (listApplicationsV6Request instanceof ListApplicationsV6Request) {
                    xLanguage = listApplicationsV6Request.xLanguage;
                    attention = listApplicationsV6Request.attention;
                    regionId = listApplicationsV6Request.regionId;
                    keyword = listApplicationsV6Request.keyword;
                    projectId = listApplicationsV6Request.projectId;
                    topicId = listApplicationsV6Request.topicId;
                    isCreatedBySelf = listApplicationsV6Request.isCreatedBySelf;
                    sortKey = listApplicationsV6Request.sortKey;
                    sortDir = listApplicationsV6Request.sortDir;
                    limit = listApplicationsV6Request.limit;
                    offset = listApplicationsV6Request.offset;
                } else {
                    xLanguage = listApplicationsV6Request['X-Language'];
                    attention = listApplicationsV6Request['attention'];
                    regionId = listApplicationsV6Request['region_id'];
                    keyword = listApplicationsV6Request['keyword'];
                    projectId = listApplicationsV6Request['project_id'];
                    topicId = listApplicationsV6Request['topic_id'];
                    isCreatedBySelf = listApplicationsV6Request['is_created_by_self'];
                    sortKey = listApplicationsV6Request['sort_key'];
                    sortDir = listApplicationsV6Request['sort_dir'];
                    limit = listApplicationsV6Request['limit'];
                    offset = listApplicationsV6Request['offset'];
                }
            }

        
            if (attention !== null && attention !== undefined) {
                localVarQueryParameter['attention'] = attention;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (topicId !== null && topicId !== undefined) {
                localVarQueryParameter['topic_id'] = topicId;
            }
            if (isCreatedBySelf !== null && isCreatedBySelf !== undefined) {
                localVarQueryParameter['is_created_by_self'] = isCreatedBySelf;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载模板产物。
         */
        downloadApplicationCode(downloadApplicationCodeRequest?: DownloadApplicationCodeRequest) {
            const options = {
                method: "GET",
                url: "/v1/application-codes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let jobId;
            let xLanguage;

            if (downloadApplicationCodeRequest !== null && downloadApplicationCodeRequest !== undefined) {
                if (downloadApplicationCodeRequest instanceof DownloadApplicationCodeRequest) {
                    jobId = downloadApplicationCodeRequest.jobId;
                    xLanguage = downloadApplicationCodeRequest.xLanguage;
                } else {
                    jobId = downloadApplicationCodeRequest['job_id'];
                    xLanguage = downloadApplicationCodeRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling downloadApplicationCode.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建部署任务，并触发任务执行，当前只支持函数部署。 其中，报文中file_id为查询软件版本包接口返回版本包id; handler为在函数部署方式下，入口函数名称，从应用代码中获取，格式为“包名.类名.函数名称”，例如：com.example.demo.APIGTrigger.handler。 也可以从应用详情接口返回结构template_deployment中直接获取。
         */
        createDeploymentJobs(createDeploymentJobsRequest?: CreateDeploymentJobsRequest) {
            const options = {
                method: "POST",
                url: "/v1/applications/{application_id}/environments/{environment_tag}/deployment-jobs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let applicationId;
            let environmentTag;
            let xLanguage;

            if (createDeploymentJobsRequest !== null && createDeploymentJobsRequest !== undefined) {
                if (createDeploymentJobsRequest instanceof CreateDeploymentJobsRequest) {
                    applicationId = createDeploymentJobsRequest.applicationId;
                    environmentTag = createDeploymentJobsRequest.environmentTag;
                    body = createDeploymentJobsRequest.body
                    xLanguage = createDeploymentJobsRequest.xLanguage;
                } else {
                    applicationId = createDeploymentJobsRequest['application_id'];
                    environmentTag = createDeploymentJobsRequest['environment_tag'];
                    body = createDeploymentJobsRequest['body'];
                    xLanguage = createDeploymentJobsRequest['X-Language'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling createDeploymentJobs.');
            }
            if (environmentTag === null || environmentTag === undefined) {
            throw new RequiredError('environmentTag','Required parameter environmentTag was null or undefined when calling createDeploymentJobs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'application_id': applicationId,'environment_tag': environmentTag, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用环境部署任务详情
         */
        showDeploymentJobs(showDeploymentJobsRequest?: ShowDeploymentJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/applications/{application_id}/environments/{environment_tag}/deployment-jobs/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let applicationId;
            let environmentTag;
            let xLanguage;

            if (showDeploymentJobsRequest !== null && showDeploymentJobsRequest !== undefined) {
                if (showDeploymentJobsRequest instanceof ShowDeploymentJobsRequest) {
                    applicationId = showDeploymentJobsRequest.applicationId;
                    environmentTag = showDeploymentJobsRequest.environmentTag;
                    xLanguage = showDeploymentJobsRequest.xLanguage;
                } else {
                    applicationId = showDeploymentJobsRequest['application_id'];
                    environmentTag = showDeploymentJobsRequest['environment_tag'];
                    xLanguage = showDeploymentJobsRequest['X-Language'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling showDeploymentJobs.');
            }
            if (environmentTag === null || environmentTag === undefined) {
            throw new RequiredError('environmentTag','Required parameter environmentTag was null or undefined when calling showDeploymentJobs.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'application_id': applicationId,'environment_tag': environmentTag, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用CodeHub模板创建应用代码。  通过 Codehub 模板创建生成应用代码的任务，并将应用代码存储于指定的 CodeHub 仓库中或者生成代码压缩包，可以通过返回的任务 ID 查询相关任务状态。  - 接口鉴权方式 通过华为云服务获取的用户token。  - 代码生成位置 应用代码生成后的地址，目前支持codehub地址和压缩包下载地址。
         */
        runCodehubTemplateJob(runCodehubTemplateJobRequest?: RunCodehubTemplateJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/jobs/codehub",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let xLanguage;

            if (runCodehubTemplateJobRequest !== null && runCodehubTemplateJobRequest !== undefined) {
                if (runCodehubTemplateJobRequest instanceof RunCodehubTemplateJobRequest) {
                    body = runCodehubTemplateJobRequest.body
                    xLanguage = runCodehubTemplateJobRequest.xLanguage;
                } else {
                    body = runCodehubTemplateJobRequest['body'];
                    xLanguage = runCodehubTemplateJobRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用DevStar的模板创建应用代码。  通过 DevStar 模板创建生成应用代码的任务，并将应用代码存储于指定的 CodeHub 仓库中，可以通过返回的任务 ID 查询相关任务状态。  - 接口鉴权方式 通过华为云服务获取的用户token。  - 代码生成位置 应用代码生成后的地址，目前支持codehub地址和压缩包下载地址。
         */
        runDevstarTemplateJob(runDevstarTemplateJobRequest?: RunDevstarTemplateJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/jobs/template",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let xLanguage;

            if (runDevstarTemplateJobRequest !== null && runDevstarTemplateJobRequest !== undefined) {
                if (runDevstarTemplateJobRequest instanceof RunDevstarTemplateJobRequest) {
                    body = runDevstarTemplateJobRequest.body
                    xLanguage = runDevstarTemplateJobRequest.xLanguage;
                } else {
                    body = runDevstarTemplateJobRequest['body'];
                    xLanguage = runDevstarTemplateJobRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务的详情。  通过任务ID可以查看任务的状态 当任务结束时返回应用代码存放的位置。  - 接口鉴权方式 通过华为云服务获取的用户token。  - 代码生成位置 应用代码生成后的地址，目前支持codehub地址和压缩包下载地址。
         */
        showJobDetail(showJobDetailRequest?: ShowJobDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let jobId;
            let xLanguage;

            if (showJobDetailRequest !== null && showJobDetailRequest !== undefined) {
                if (showJobDetailRequest instanceof ShowJobDetailRequest) {
                    jobId = showJobDetailRequest.jobId;
                    xLanguage = showJobDetailRequest.xLanguage;
                } else {
                    jobId = showJobDetailRequest['job_id'];
                    xLanguage = showJobDetailRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobDetail.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 流水线模板列表查询
         */
        listPipelineTemplates(listPipelineTemplatesRequest?: ListPipelineTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/pipeline-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let regionId;
            let xLanguage;
            let offset;
            let limit;

            if (listPipelineTemplatesRequest !== null && listPipelineTemplatesRequest !== undefined) {
                if (listPipelineTemplatesRequest instanceof ListPipelineTemplatesRequest) {
                    regionId = listPipelineTemplatesRequest.regionId;
                    xLanguage = listPipelineTemplatesRequest.xLanguage;
                    offset = listPipelineTemplatesRequest.offset;
                    limit = listPipelineTemplatesRequest.limit;
                } else {
                    regionId = listPipelineTemplatesRequest['region_id'];
                    xLanguage = listPipelineTemplatesRequest['X-Language'];
                    offset = listPipelineTemplatesRequest['offset'];
                    limit = listPipelineTemplatesRequest['limit'];
                }
            }

        
            if (regionId === null || regionId === undefined) {
                throw new RequiredError('regionId','Required parameter regionId was null or undefined when calling listPipelineTemplates.');
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用流水线最近一次运行状态查询接口
         */
        showPipelineLastStatusV2(showPipelineLastStatusV2Request?: ShowPipelineLastStatusV2Request) {
            const options = {
                method: "GET",
                url: "/v2/pipelines/{pipeline_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let pipelineId;
            let xLanguage;

            if (showPipelineLastStatusV2Request !== null && showPipelineLastStatusV2Request !== undefined) {
                if (showPipelineLastStatusV2Request instanceof ShowPipelineLastStatusV2Request) {
                    pipelineId = showPipelineLastStatusV2Request.pipelineId;
                    xLanguage = showPipelineLastStatusV2Request.xLanguage;
                } else {
                    pipelineId = showPipelineLastStatusV2Request['pipeline_id'];
                    xLanguage = showPipelineLastStatusV2Request['X-Language'];
                }
            }

        
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling showPipelineLastStatusV2.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'pipeline_id': pipelineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据流水线Id操作流水线启动
         */
        startPipeline(startPipelineRequest?: StartPipelineRequest) {
            const options = {
                method: "POST",
                url: "/v2/pipelines/{pipeline_id}/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let pipelineId;
            let xLanguage;

            if (startPipelineRequest !== null && startPipelineRequest !== undefined) {
                if (startPipelineRequest instanceof StartPipelineRequest) {
                    pipelineId = startPipelineRequest.pipelineId;
                    xLanguage = startPipelineRequest.xLanguage;
                } else {
                    pipelineId = startPipelineRequest['pipeline_id'];
                    xLanguage = startPipelineRequest['X-Language'];
                }
            }

        
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling startPipeline.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'pipeline_id': pipelineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取用户有权限的DevStar存量DevCloud项目列表。 来源包括：1.DevStar创建的DevCloud项目；2.DevStar应用有关联DevCloud项目。
         */
        listProjectsV4(listProjectsV4Request?: ListProjectsV4Request) {
            const options = {
                method: "GET",
                url: "/v4/projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let xLanguage;
            let keyword;
            let limit;
            let offset;

            if (listProjectsV4Request !== null && listProjectsV4Request !== undefined) {
                if (listProjectsV4Request instanceof ListProjectsV4Request) {
                    xLanguage = listProjectsV4Request.xLanguage;
                    keyword = listProjectsV4Request.keyword;
                    limit = listProjectsV4Request.limit;
                    offset = listProjectsV4Request.offset;
                } else {
                    xLanguage = listProjectsV4Request['X-Language'];
                    keyword = listProjectsV4Request['keyword'];
                    limit = listProjectsV4Request['limit'];
                    offset = listProjectsV4Request['offset'];
                }
            }

        
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检查仓库名称是否重名 - 校验规则     同一个项目下的仓库名称不能存在重复,当结果为true时,校验通过,仓库名称可用,否则,校验不通过,当前项目下的仓库名称已存在,不可用 - 必传参数     project_id,name,region_id
         */
        checkRepositoryDuplicateName(checkRepositoryDuplicateNameRequest?: CheckRepositoryDuplicateNameRequest) {
            const options = {
                method: "POST",
                url: "/v1/check-repository-duplicate-name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let projectId;
            let name;
            let regionId;
            let xLanguage;

            if (checkRepositoryDuplicateNameRequest !== null && checkRepositoryDuplicateNameRequest !== undefined) {
                if (checkRepositoryDuplicateNameRequest instanceof CheckRepositoryDuplicateNameRequest) {
                    projectId = checkRepositoryDuplicateNameRequest.projectId;
                    name = checkRepositoryDuplicateNameRequest.name;
                    regionId = checkRepositoryDuplicateNameRequest.regionId;
                    xLanguage = checkRepositoryDuplicateNameRequest.xLanguage;
                } else {
                    projectId = checkRepositoryDuplicateNameRequest['project_id'];
                    name = checkRepositoryDuplicateNameRequest['name'];
                    regionId = checkRepositoryDuplicateNameRequest['region_id'];
                    xLanguage = checkRepositoryDuplicateNameRequest['X-Language'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
                throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling checkRepositoryDuplicateName.');
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling checkRepositoryDuplicateName.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (regionId === null || regionId === undefined) {
                throw new RequiredError('regionId','Required parameter regionId was null or undefined when calling checkRepositoryDuplicateName.');
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用 CloudIDE 实例打开应用代码。CloudIDE会保存用户项目数据，相同用户使用同一个CloudIDE，使用要求： - 用户需为登录状态。 - 拥有仓库权限。 
         */
        showRepositoryByCloudIde(showRepositoryByCloudIdeRequest?: ShowRepositoryByCloudIdeRequest) {
            const options = {
                method: "GET",
                url: "/v1/repositories/{repository_id}/show/cloudide",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let repositoryId;
            let repositorySshUrl;
            let xLanguage;
            let regionId;
            let spacePrefix;
            let isOpenLast;
            let isFree;

            if (showRepositoryByCloudIdeRequest !== null && showRepositoryByCloudIdeRequest !== undefined) {
                if (showRepositoryByCloudIdeRequest instanceof ShowRepositoryByCloudIdeRequest) {
                    repositoryId = showRepositoryByCloudIdeRequest.repositoryId;
                    repositorySshUrl = showRepositoryByCloudIdeRequest.repositorySshUrl;
                    xLanguage = showRepositoryByCloudIdeRequest.xLanguage;
                    regionId = showRepositoryByCloudIdeRequest.regionId;
                    spacePrefix = showRepositoryByCloudIdeRequest.spacePrefix;
                    isOpenLast = showRepositoryByCloudIdeRequest.isOpenLast;
                    isFree = showRepositoryByCloudIdeRequest.isFree;
                } else {
                    repositoryId = showRepositoryByCloudIdeRequest['repository_id'];
                    repositorySshUrl = showRepositoryByCloudIdeRequest['repository_ssh_url'];
                    xLanguage = showRepositoryByCloudIdeRequest['X-Language'];
                    regionId = showRepositoryByCloudIdeRequest['region_id'];
                    spacePrefix = showRepositoryByCloudIdeRequest['space_prefix'];
                    isOpenLast = showRepositoryByCloudIdeRequest['is_open_last'];
                    isFree = showRepositoryByCloudIdeRequest['is_free'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling showRepositoryByCloudIde.');
            }
            if (repositorySshUrl === null || repositorySshUrl === undefined) {
                throw new RequiredError('repositorySshUrl','Required parameter repositorySshUrl was null or undefined when calling showRepositoryByCloudIde.');
            }
            if (repositorySshUrl !== null && repositorySshUrl !== undefined) {
                localVarQueryParameter['repository_ssh_url'] = repositorySshUrl;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (spacePrefix !== null && spacePrefix !== undefined) {
                localVarQueryParameter['space_prefix'] = spacePrefix;
            }
            if (isOpenLast !== null && isOpenLast !== undefined) {
                localVarQueryParameter['is_open_last'] = isOpenLast;
            }
            if (isFree !== null && isFree !== undefined) {
                localVarQueryParameter['is_free'] = isFree;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询代码仓库的统计信息,包括代码仓的名称,代码行数等信息
         */
        showRepositoryStatisticalDataV2(showRepositoryStatisticalDataV2Request?: ShowRepositoryStatisticalDataV2Request) {
            const options = {
                method: "GET",
                url: "/v2/repositories/{repository_id}/statistical-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let repositoryId;
            let xLanguage;

            if (showRepositoryStatisticalDataV2Request !== null && showRepositoryStatisticalDataV2Request !== undefined) {
                if (showRepositoryStatisticalDataV2Request instanceof ShowRepositoryStatisticalDataV2Request) {
                    repositoryId = showRepositoryStatisticalDataV2Request.repositoryId;
                    xLanguage = showRepositoryStatisticalDataV2Request.xLanguage;
                } else {
                    repositoryId = showRepositoryStatisticalDataV2Request['repository_id'];
                    xLanguage = showRepositoryStatisticalDataV2Request['X-Language'];
                }
            }

        
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling showRepositoryStatisticalDataV2.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于模板作者或模板维护人读取模板文件内容。
         */
        showTemplateFile(showTemplateFileRequest?: ShowTemplateFileRequest) {
            const options = {
                method: "GET",
                url: "/v1/templates/{template_id}/files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let templateId;
            let filePath;
            let xLanguage;
            let type;

            if (showTemplateFileRequest !== null && showTemplateFileRequest !== undefined) {
                if (showTemplateFileRequest instanceof ShowTemplateFileRequest) {
                    templateId = showTemplateFileRequest.templateId;
                    filePath = showTemplateFileRequest.filePath;
                    xLanguage = showTemplateFileRequest.xLanguage;
                    type = showTemplateFileRequest.type;
                } else {
                    templateId = showTemplateFileRequest['template_id'];
                    filePath = showTemplateFileRequest['file_path'];
                    xLanguage = showTemplateFileRequest['X-Language'];
                    type = showTemplateFileRequest['type'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showTemplateFile.');
            }
            if (filePath === null || filePath === undefined) {
                throw new RequiredError('filePath','Required parameter filePath was null or undefined when calling showTemplateFile.');
            }
            if (filePath !== null && filePath !== undefined) {
                localVarQueryParameter['file_path'] = filePath;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 未登录状态下，将用户浏览过的模板缓存在浏览器中，登录时，调用该接口同步模板浏览记录。 
         */
        createTemplateViewHistories(createTemplateViewHistoriesRequest?: CreateTemplateViewHistoriesRequest) {
            const options = {
                method: "POST",
                url: "/v1/templates/view-histories",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let xLanguage;

            if (createTemplateViewHistoriesRequest !== null && createTemplateViewHistoriesRequest !== undefined) {
                if (createTemplateViewHistoriesRequest instanceof CreateTemplateViewHistoriesRequest) {
                    body = createTemplateViewHistoriesRequest.body
                    xLanguage = createTemplateViewHistoriesRequest.xLanguage;
                } else {
                    body = createTemplateViewHistoriesRequest['body'];
                    xLanguage = createTemplateViewHistoriesRequest['X-Language'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询模板列表，推荐使用/v1/templates/query接口。
         */
        listPublishedTemplates(listPublishedTemplatesRequest?: ListPublishedTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let xLanguage;
            let keyword;
            let offset;
            let limit;

            if (listPublishedTemplatesRequest !== null && listPublishedTemplatesRequest !== undefined) {
                if (listPublishedTemplatesRequest instanceof ListPublishedTemplatesRequest) {
                    xLanguage = listPublishedTemplatesRequest.xLanguage;
                    keyword = listPublishedTemplatesRequest.keyword;
                    offset = listPublishedTemplatesRequest.offset;
                    limit = listPublishedTemplatesRequest.limit;
                } else {
                    xLanguage = listPublishedTemplatesRequest['X-Language'];
                    keyword = listPublishedTemplatesRequest['keyword'];
                    offset = listPublishedTemplatesRequest['offset'];
                    limit = listPublishedTemplatesRequest['limit'];
                }
            }

        
            if (keyword !== null && keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DevStar或者CodeLabs登录用户浏览过的模板（只返回最近浏览的5个模板）。 
         */
        listTemplateViewHistories(listTemplateViewHistoriesRequest?: ListTemplateViewHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v1/templates/view-histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let platformSource;
            let xLanguage;

            if (listTemplateViewHistoriesRequest !== null && listTemplateViewHistoriesRequest !== undefined) {
                if (listTemplateViewHistoriesRequest instanceof ListTemplateViewHistoriesRequest) {
                    platformSource = listTemplateViewHistoriesRequest.platformSource;
                    xLanguage = listTemplateViewHistoriesRequest.xLanguage;
                } else {
                    platformSource = listTemplateViewHistoriesRequest['platform_source'];
                    xLanguage = listTemplateViewHistoriesRequest['X-Language'];
                }
            }

        
            if (platformSource === null || platformSource === undefined) {
                throw new RequiredError('platformSource','Required parameter platformSource was null or undefined when calling listTemplateViewHistories.');
            }
            if (platformSource !== null && platformSource !== undefined) {
                localVarQueryParameter['platform_source'] = platformSource;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询模板列表。
         */
        listTemplates(listTemplatesRequest?: ListTemplatesRequest) {
            const options = {
                method: "POST",
                url: "/v1/templates/query",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let xLanguage;

            if (listTemplatesRequest !== null && listTemplatesRequest !== undefined) {
                if (listTemplatesRequest instanceof ListTemplatesRequest) {
                    xLanguage = listTemplatesRequest.xLanguage;
                    body = listTemplatesRequest.body
                } else {
                    xLanguage = listTemplatesRequest['X-Language'];
                    body = listTemplatesRequest['body'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询模板列表。
         */
        listTemplatesV2(listTemplatesV2Request?: ListTemplatesV2Request) {
            const options = {
                method: "POST",
                url: "/v2/templates/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            let actionId;
            let xLanguage;

            if (listTemplatesV2Request !== null && listTemplatesV2Request !== undefined) {
                if (listTemplatesV2Request instanceof ListTemplatesV2Request) {
                    actionId = listTemplatesV2Request.actionId;
                    xLanguage = listTemplatesV2Request.xLanguage;
                    body = listTemplatesV2Request.body
                } else {
                    actionId = listTemplatesV2Request['action_id'];
                    xLanguage = listTemplatesV2Request['X-Language'];
                    body = listTemplatesV2Request['body'];
                }
            }

        
            if (actionId === null || actionId === undefined) {
                throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling listTemplatesV2.');
            }
            if (actionId !== null && actionId !== undefined) {
                localVarQueryParameter['action_id'] = actionId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定模板详情，包括模板id、名称、描述、作者、标签、上架时间等信息。 
         */
        showTemplateV3(showTemplateV3Request?: ShowTemplateV3Request) {
            const options = {
                method: "GET",
                url: "/v3/templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let templateId;
            let xLanguage;

            if (showTemplateV3Request !== null && showTemplateV3Request !== undefined) {
                if (showTemplateV3Request instanceof ShowTemplateV3Request) {
                    templateId = showTemplateV3Request.templateId;
                    xLanguage = showTemplateV3Request.xLanguage;
                } else {
                    templateId = showTemplateV3Request['template_id'];
                    xLanguage = showTemplateV3Request['X-Language'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showTemplateV3.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询模板详情，推荐使用V3版本接口。
         */
        showTemplateDetail(showTemplateDetailRequest?: ShowTemplateDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let templateId;
            let xLanguage;

            if (showTemplateDetailRequest !== null && showTemplateDetailRequest !== undefined) {
                if (showTemplateDetailRequest instanceof ShowTemplateDetailRequest) {
                    templateId = showTemplateDetailRequest.templateId;
                    xLanguage = showTemplateDetailRequest.xLanguage;
                } else {
                    templateId = showTemplateDetailRequest['template_id'];
                    xLanguage = showTemplateDetailRequest['X-Language'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showTemplateDetail.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): DevStarClient {
    return new DevStarClient(client);
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