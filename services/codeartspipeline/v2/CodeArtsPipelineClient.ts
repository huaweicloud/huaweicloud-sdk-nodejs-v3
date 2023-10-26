import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AcceptManualReviewRequest } from './model/AcceptManualReviewRequest';
import { AcceptManualReviewResponse } from './model/AcceptManualReviewResponse';
import { BatchShowPipelinesLatestStatusRequest } from './model/BatchShowPipelinesLatestStatusRequest';
import { BatchShowPipelinesLatestStatusResponse } from './model/BatchShowPipelinesLatestStatusResponse';
import { BatchShowPipelinesStatusRequest } from './model/BatchShowPipelinesStatusRequest';
import { BatchShowPipelinesStatusResponse } from './model/BatchShowPipelinesStatusResponse';
import { CodeSource } from './model/CodeSource';
import { CodeSourceParams } from './model/CodeSourceParams';
import { Constraint } from './model/Constraint';
import { CreatePipelineByTemplateIdRequest } from './model/CreatePipelineByTemplateIdRequest';
import { CreatePipelineByTemplateIdResponse } from './model/CreatePipelineByTemplateIdResponse';
import { CreatePipelineByTemplateRequest } from './model/CreatePipelineByTemplateRequest';
import { CreatePipelineByTemplateResponse } from './model/CreatePipelineByTemplateResponse';
import { CreatePipelineNewRequest } from './model/CreatePipelineNewRequest';
import { CreatePipelineNewResponse } from './model/CreatePipelineNewResponse';
import { CustomVariable } from './model/CustomVariable';
import { DeletePipelineRequest } from './model/DeletePipelineRequest';
import { DeletePipelineResponse } from './model/DeletePipelineResponse';
import { JobRun } from './model/JobRun';
import { ListPipelineQuery } from './model/ListPipelineQuery';
import { ListPipelineRunsPageBuildParams } from './model/ListPipelineRunsPageBuildParams';
import { ListPipelineRunsPagePipelineRuns } from './model/ListPipelineRunsPagePipelineRuns';
import { ListPipelineRunsPageStageStatusList } from './model/ListPipelineRunsPageStageStatusList';
import { ListPipelineRunsQuery } from './model/ListPipelineRunsQuery';
import { ListPipelineRunsRequest } from './model/ListPipelineRunsRequest';
import { ListPipelineRunsResponse } from './model/ListPipelineRunsResponse';
import { ListPipelineSimpleInfoRequest } from './model/ListPipelineSimpleInfoRequest';
import { ListPipelineSimpleInfoRequestBody } from './model/ListPipelineSimpleInfoRequestBody';
import { ListPipelineSimpleInfoResponse } from './model/ListPipelineSimpleInfoResponse';
import { ListPipelineTemplatesQuery } from './model/ListPipelineTemplatesQuery';
import { ListPipelineTemplatesRequest } from './model/ListPipelineTemplatesRequest';
import { ListPipelineTemplatesResponse } from './model/ListPipelineTemplatesResponse';
import { ListPipelinesPageLatestRun } from './model/ListPipelinesPageLatestRun';
import { ListPipelinesPageLatestRunArtifactParams } from './model/ListPipelinesPageLatestRunArtifactParams';
import { ListPipelinesPageLatestRunBuildParams } from './model/ListPipelinesPageLatestRunBuildParams';
import { ListPipelinesPageLatestRunStageStatusList } from './model/ListPipelinesPageLatestRunStageStatusList';
import { ListPipelinesPagePipelines } from './model/ListPipelinesPagePipelines';
import { ListPipelinesRequest } from './model/ListPipelinesRequest';
import { ListPipelinesResponse } from './model/ListPipelinesResponse';
import { ListPipleineBuildResultRequest } from './model/ListPipleineBuildResultRequest';
import { ListPipleineBuildResultResponse } from './model/ListPipleineBuildResultResponse';
import { ListTemplatesRequest } from './model/ListTemplatesRequest';
import { ListTemplatesResponse } from './model/ListTemplatesResponse';
import { PackageInfo } from './model/PackageInfo';
import { ParamTypeLimits } from './model/ParamTypeLimits';
import { PipelineBasicInfo } from './model/PipelineBasicInfo';
import { PipelineBuildResult } from './model/PipelineBuildResult';
import { PipelineByTemplateDTO } from './model/PipelineByTemplateDTO';
import { PipelineByTemplateDTOVariables } from './model/PipelineByTemplateDTOVariables';
import { PipelineDTO } from './model/PipelineDTO';
import { PipelineExecuteStates } from './model/PipelineExecuteStates';
import { PipelineLatestRun } from './model/PipelineLatestRun';
import { PipelineLatestRunArtifactParams } from './model/PipelineLatestRunArtifactParams';
import { PipelineLatestRunBuildParams } from './model/PipelineLatestRunBuildParams';
import { PipelineLatestRunStageStatusList } from './model/PipelineLatestRunStageStatusList';
import { PipelineParam } from './model/PipelineParam';
import { PipelineParameter } from './model/PipelineParameter';
import { PipelineStateStatus } from './model/PipelineStateStatus';
import { PipelineTemplateSimpleVO } from './model/PipelineTemplateSimpleVO';
import { PipelineTemplateSimpleVOStages } from './model/PipelineTemplateSimpleVOStages';
import { RejectManualReviewRequest } from './model/RejectManualReviewRequest';
import { RejectManualReviewResponse } from './model/RejectManualReviewResponse';
import { RemovePipelineRequest } from './model/RemovePipelineRequest';
import { RemovePipelineResponse } from './model/RemovePipelineResponse';
import { RetryPipelineRunRequest } from './model/RetryPipelineRunRequest';
import { RetryPipelineRunResponse } from './model/RetryPipelineRunResponse';
import { RunPipelineDTO } from './model/RunPipelineDTO';
import { RunPipelineDTOParams } from './model/RunPipelineDTOParams';
import { RunPipelineDTOParamsBuildParams } from './model/RunPipelineDTOParamsBuildParams';
import { RunPipelineDTOSources } from './model/RunPipelineDTOSources';
import { RunPipelineDTOVariables } from './model/RunPipelineDTOVariables';
import { RunPipelineRequest } from './model/RunPipelineRequest';
import { RunPipelineResponse } from './model/RunPipelineResponse';
import { RunPipelineSource } from './model/RunPipelineSource';
import { RunPipelineSourceParams } from './model/RunPipelineSourceParams';
import { RunPipelineSourceParamsBuildParams } from './model/RunPipelineSourceParamsBuildParams';
import { ShowInstanceStatusRequest } from './model/ShowInstanceStatusRequest';
import { ShowInstanceStatusResponse } from './model/ShowInstanceStatusResponse';
import { ShowPipelineRunDetailRequest } from './model/ShowPipelineRunDetailRequest';
import { ShowPipelineRunDetailResponse } from './model/ShowPipelineRunDetailResponse';
import { ShowPipelineTemplateDetailRequest } from './model/ShowPipelineTemplateDetailRequest';
import { ShowPipelineTemplateDetailResponse } from './model/ShowPipelineTemplateDetailResponse';
import { ShowPipleineStatusRequest } from './model/ShowPipleineStatusRequest';
import { ShowPipleineStatusResponse } from './model/ShowPipleineStatusResponse';
import { ShowTemplateDetailRequest } from './model/ShowTemplateDetailRequest';
import { ShowTemplateDetailResponse } from './model/ShowTemplateDetailResponse';
import { Source } from './model/Source';
import { StageRun } from './model/StageRun';
import { Stages } from './model/Stages';
import { StartNewPipelineRequest } from './model/StartNewPipelineRequest';
import { StartNewPipelineResponse } from './model/StartNewPipelineResponse';
import { StartPipelineBuildParams } from './model/StartPipelineBuildParams';
import { StartPipelineParameters } from './model/StartPipelineParameters';
import { StepRun } from './model/StepRun';
import { StepRunInputs } from './model/StepRunInputs';
import { StopPipelineNewRequest } from './model/StopPipelineNewRequest';
import { StopPipelineNewResponse } from './model/StopPipelineNewResponse';
import { StopPipelineRunRequest } from './model/StopPipelineRunRequest';
import { StopPipelineRunResponse } from './model/StopPipelineRunResponse';
import { TemplateCddl } from './model/TemplateCddl';
import { TemplateParam } from './model/TemplateParam';
import { TemplateState } from './model/TemplateState';
import { TemplateView } from './model/TemplateView';
import { Workflow } from './model/Workflow';

export class CodeArtsPipelineClient {
    public static newBuilder(): ClientBuilder<CodeArtsPipelineClient> {
            return new ClientBuilder<CodeArtsPipelineClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 通过人工审核
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过人工审核
     * @param {string} jobRunId 流水线任务ID
     * @param {string} pipelineId 流水线ID
     * @param {string} pipelineRunId 流水线运行实例ID
     * @param {string} stepRunId 流水线步骤ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public acceptManualReview(acceptManualReviewRequest?: AcceptManualReviewRequest): Promise<AcceptManualReviewResponse> {
        const options = ParamCreater().acceptManualReview(acceptManualReviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量获取流水线状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量获取流水线状态
     * @param {Array<string>} pipelineIds 流水线ID列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchShowPipelinesLatestStatus(batchShowPipelinesLatestStatusRequest?: BatchShowPipelinesLatestStatusRequest): Promise<BatchShowPipelinesLatestStatusResponse> {
        const options = ParamCreater().batchShowPipelinesLatestStatus(batchShowPipelinesLatestStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量获取流水线状态和阶段信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量获取流水线状态
     * @param {string} pipelineIds 要获取状态的流水线ID，用逗号隔开
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchShowPipelinesStatus(batchShowPipelinesStatusRequest?: BatchShowPipelinesStatusRequest): Promise<BatchShowPipelinesStatusResponse> {
        const options = ParamCreater().batchShowPipelinesStatus(batchShowPipelinesStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 基于模板快速创建流水线及流水线内任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 基于模板快速创建流水线及流水线内任务
     * @param {TemplateCddl} createPipelineByTemplateRequestBody 创建流水线参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPipelineByTemplate(createPipelineByTemplateRequest?: CreatePipelineByTemplateRequest): Promise<CreatePipelineByTemplateResponse> {
        const options = ParamCreater().createPipelineByTemplate(createPipelineByTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 基于模板创建流水线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 基于模板创建流水线
     * @param {string} templateId 模板ID
     * @param {PipelineByTemplateDTO} pipelineByTemplateDTO 模板创建流水线请求体参数
     * @param {string} [componentId] 微服务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPipelineByTemplateId(createPipelineByTemplateIdRequest?: CreatePipelineByTemplateIdRequest): Promise<CreatePipelineByTemplateIdResponse> {
        const options = ParamCreater().createPipelineByTemplateId(createPipelineByTemplateIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建流水线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建流水线
     * @param {PipelineDTO} body 创建流水线请求体
     * @param {string} [componentId] 组件ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPipelineNew(createPipelineNewRequest?: CreatePipelineNewRequest): Promise<CreatePipelineNewResponse> {
        const options = ParamCreater().createPipelineNew(createPipelineNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除流水线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除流水线
     * @param {string} pipelineId 流水线ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePipeline(deletePipelineRequest?: DeletePipelineRequest): Promise<DeletePipelineResponse> {
        const options = ParamCreater().deletePipeline(deletePipelineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取流水线执行记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取流水线执行记录
     * @param {string} pipelineId 流水线ID
     * @param {ListPipelineRunsQuery} [listPipelineRunsQuery] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPipelineRuns(listPipelineRunsRequest?: ListPipelineRunsRequest): Promise<ListPipelineRunsResponse> {
        const options = ParamCreater().listPipelineRuns(listPipelineRunsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取流水线列表接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取流水线列表接口
     * @param {ListPipelineSimpleInfoRequestBody} [listPipelineSimpleInfoRequestBody] JSON格式数据，支持传递参数，value的最大长度为8192，样例：{\&quot;pipeline_name\&quot;: \&quot;XXX\&quot;,\&quot;project_ids\&quot;: \&quot;XXX,XXX\&quot;,\&quot;creator_ids\&quot;: \&quot;XXX,XXX\&quot;,\&quot;executor_ids\&quot;: \&quot;XXX,XXX\&quot;,\&quot;status\&quot;: \&quot;waiting,running\&quot;,\&quot;outcome\&quot;: \&quot;success,error\&quot;,\&quot;sort_key\&quot;: \&quot;pipeline_name\&quot;,\&quot;sort_type\&quot;: \&quot;asc\&quot;,\&quot;git_url\&quot;: \&quot;ssh://git@XXX.git\&quot;,\&quot;limit\&quot;: 10,\&quot;offset\&quot;: 0}
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPipelineSimpleInfo(listPipelineSimpleInfoRequest?: ListPipelineSimpleInfoRequest): Promise<ListPipelineSimpleInfoResponse> {
        const options = ParamCreater().listPipelineSimpleInfo(listPipelineSimpleInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流水线模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询模板列表
     * @param {string} tenantId 租户ID
     * @param {ListPipelineTemplatesQuery} [listPipelineTemplatesQuery] 查询模板列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPipelineTemplates(listPipelineTemplatesRequest?: ListPipelineTemplatesRequest): Promise<ListPipelineTemplatesResponse> {
        const options = ParamCreater().listPipelineTemplates(listPipelineTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取流水线列表/获取项目下流水线执行状况
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取流水线列表/获取项目下流水线执行状况
     * @param {ListPipelineQuery} [listPipelinesQuery] 查询流水线列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPipelines(listPipelinesRequest?: ListPipelinesRequest): Promise<ListPipelinesResponse> {
        const options = ParamCreater().listPipelines(listPipelinesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取项目下流水线执行状况
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目下流水线执行状况
     * @param {string} startDate 起始日期,起始日期和结束日期间隔不超过一个月，查询包含起始日期
     * @param {string} endDate 结束日期，起始日期和结束日期间隔不超过一个月，查询包含结束日期
     * @param {number} offset 偏移量,表示从此偏移量开始查询,offset大于等于0
     * @param {number} limit 每次查询的条目数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPipleineBuildResult(listPipleineBuildResultRequest?: ListPipleineBuildResultRequest): Promise<ListPipleineBuildResultResponse> {
        const options = ParamCreater().listPipleineBuildResult(listPipleineBuildResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询模板列表，支持分页查询,支持模板名字模糊查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询模板列表
     * @param {string} templateType 模板类型
     * @param {string} isBuildIn 是否内置模板
     * @param {number} [offset] 偏移量,表示从此偏移量开始查询,offset大于等于0
     * @param {number} [limit] 每页显示的条目数量
     * @param {string} [name] 模板名称，匹配规则为模糊匹配
     * @param {string} [sort] 排序字段
     * @param {string} [asc] 是否正序
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
     * 驳回人工审核
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 驳回人工审核
     * @param {string} jobRunId 流水线任务ID
     * @param {string} stepRunId 流水线步骤ID
     * @param {string} pipelineId 流水线ID
     * @param {string} pipelineRunId 流水线运行实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rejectManualReview(rejectManualReviewRequest?: RejectManualReviewRequest): Promise<RejectManualReviewResponse> {
        const options = ParamCreater().rejectManualReview(rejectManualReviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据id删除流水线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除流水线
     * @param {string} pipelineId 要删除的流水线ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removePipeline(removePipelineRequest?: RemovePipelineRequest): Promise<RemovePipelineResponse> {
        const options = ParamCreater().removePipeline(removePipelineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重试运行流水线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重试运行流水线
     * @param {string} pipelineId 流水线ID
     * @param {string} pipelineRunId 流水线运行实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retryPipelineRun(retryPipelineRunRequest?: RetryPipelineRunRequest): Promise<RetryPipelineRunResponse> {
        const options = ParamCreater().retryPipelineRun(retryPipelineRunRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动流水线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动流水线
     * @param {string} pipelineId 流水线ID
     * @param {RunPipelineDTO} [runPipelineReq] 运行流水线请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runPipeline(runPipelineRequest?: RunPipelineRequest): Promise<RunPipelineResponse> {
        const options = ParamCreater().runPipeline(runPipelineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检查流水线创建状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查流水线创建状态
     * @param {string} taskId 实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceStatus(showInstanceStatusRequest?: ShowInstanceStatusRequest): Promise<ShowInstanceStatusResponse> {
        const options = ParamCreater().showInstanceStatus(showInstanceStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取流水线状态/获取流水线执行详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取流水线状态/获取流水线执行详情
     * @param {string} pipelineId 流水线ID
     * @param {string} [pipelineRunId] 流水线运行实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPipelineRunDetail(showPipelineRunDetailRequest?: ShowPipelineRunDetailRequest): Promise<ShowPipelineRunDetailResponse> {
        const options = ParamCreater().showPipelineRunDetail(showPipelineRunDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询模板详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询模板详情
     * @param {string} tenantId 租户ID
     * @param {string} templateId 模板ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPipelineTemplateDetail(showPipelineTemplateDetailRequest?: ShowPipelineTemplateDetailRequest): Promise<ShowPipelineTemplateDetailResponse> {
        const options = ParamCreater().showPipelineTemplateDetail(showPipelineTemplateDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取流水线状态,阶段及任务信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取流水线状态
     * @param {string} pipelineId 要获取状态的流水线ID
     * @param {string} [buildId] 要获取状态的执行ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPipleineStatus(showPipleineStatusRequest?: ShowPipleineStatusRequest): Promise<ShowPipleineStatusResponse> {
        const options = ParamCreater().showPipleineStatus(showPipleineStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询模板详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询模板详情
     * @param {string} templateId 模板ID
     * @param {string} templateType 模板类型
     * @param {string} [source] 接口调用方
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateDetail(showTemplateDetailRequest?: ShowTemplateDetailRequest): Promise<ShowTemplateDetailResponse> {
        const options = ParamCreater().showTemplateDetail(showTemplateDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动流水线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动流水线
     * @param {string} pipelineId 流水线ID
     * @param {StartPipelineParameters} [startNewPipelineRequestBody] JSON格式数据，支持传递参数，value的最大长度为8192，样例：{\&quot;build_params\&quot;:[{\&quot;name\&quot;:\&quot;serviceName\&quot;,\&quot;value\&quot;:\&quot;pipeline-devcloud-step\&quot;}]}
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startNewPipeline(startNewPipelineRequest?: StartNewPipelineRequest): Promise<StartNewPipelineResponse> {
        const options = ParamCreater().startNewPipeline(startNewPipelineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止流水线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止流水线
     * @param {string} pipelineId 流水线ID
     * @param {string} buildId 流水线执行ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopPipelineNew(stopPipelineNewRequest?: StopPipelineNewRequest): Promise<StopPipelineNewResponse> {
        const options = ParamCreater().stopPipelineNew(stopPipelineNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止流水线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止流水线
     * @param {string} pipelineId 流水线ID
     * @param {string} pipelineRunId 流水线运行实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopPipelineRun(stopPipelineRunRequest?: StopPipelineRunRequest): Promise<StopPipelineRunResponse> {
        const options = ParamCreater().stopPipelineRun(stopPipelineRunRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 通过人工审核
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        acceptManualReview(acceptManualReviewRequest?: AcceptManualReviewRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/api/pipelines/{pipeline_id}/pipeline-runs/{pipeline_run_id}/jobs/{job_run_id}/steps/{step_run_id}/pass",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobRunId;
            
            let pipelineId;
            
            let pipelineRunId;
            
            let stepRunId;

            if (acceptManualReviewRequest !== null && acceptManualReviewRequest !== undefined) {
                if (acceptManualReviewRequest instanceof AcceptManualReviewRequest) {
                    jobRunId = acceptManualReviewRequest.jobRunId;
                    pipelineId = acceptManualReviewRequest.pipelineId;
                    pipelineRunId = acceptManualReviewRequest.pipelineRunId;
                    stepRunId = acceptManualReviewRequest.stepRunId;
                } else {
                    jobRunId = acceptManualReviewRequest['job_run_id'];
                    pipelineId = acceptManualReviewRequest['pipeline_id'];
                    pipelineRunId = acceptManualReviewRequest['pipeline_run_id'];
                    stepRunId = acceptManualReviewRequest['step_run_id'];
                }
            }

        
            if (jobRunId === null || jobRunId === undefined) {
            throw new RequiredError('jobRunId','Required parameter jobRunId was null or undefined when calling acceptManualReview.');
            }
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling acceptManualReview.');
            }
            if (pipelineRunId === null || pipelineRunId === undefined) {
            throw new RequiredError('pipelineRunId','Required parameter pipelineRunId was null or undefined when calling acceptManualReview.');
            }
            if (stepRunId === null || stepRunId === undefined) {
            throw new RequiredError('stepRunId','Required parameter stepRunId was null or undefined when calling acceptManualReview.');
            }

            options.pathParams = { 'job_run_id': jobRunId,'pipeline_id': pipelineId,'pipeline_run_id': pipelineRunId,'step_run_id': stepRunId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量获取流水线状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchShowPipelinesLatestStatus(batchShowPipelinesLatestStatusRequest?: BatchShowPipelinesLatestStatusRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/api/pipelines/status",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchShowPipelinesLatestStatusRequest !== null && batchShowPipelinesLatestStatusRequest !== undefined) {
                if (batchShowPipelinesLatestStatusRequest instanceof BatchShowPipelinesLatestStatusRequest) {
                    body = batchShowPipelinesLatestStatusRequest.body
                } else {
                    body = batchShowPipelinesLatestStatusRequest['body'];
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
         * 批量获取流水线状态和阶段信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchShowPipelinesStatus(batchShowPipelinesStatusRequest?: BatchShowPipelinesStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/pipelines/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pipelineIds;

            if (batchShowPipelinesStatusRequest !== null && batchShowPipelinesStatusRequest !== undefined) {
                if (batchShowPipelinesStatusRequest instanceof BatchShowPipelinesStatusRequest) {
                    pipelineIds = batchShowPipelinesStatusRequest.pipelineIds;
                } else {
                    pipelineIds = batchShowPipelinesStatusRequest['pipeline_ids'];
                }
            }

        
            if (pipelineIds === null || pipelineIds === undefined) {
                throw new RequiredError('pipelineIds','Required parameter pipelineIds was null or undefined when calling batchShowPipelinesStatus.');
            }
            if (pipelineIds !== null && pipelineIds !== undefined) {
                localVarQueryParameter['pipeline_ids'] = pipelineIds;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 基于模板快速创建流水线及流水线内任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPipelineByTemplate(createPipelineByTemplateRequest?: CreatePipelineByTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v3/templates/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPipelineByTemplateRequest !== null && createPipelineByTemplateRequest !== undefined) {
                if (createPipelineByTemplateRequest instanceof CreatePipelineByTemplateRequest) {
                    body = createPipelineByTemplateRequest.body
                } else {
                    body = createPipelineByTemplateRequest['body'];
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
         * 基于模板创建流水线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPipelineByTemplateId(createPipelineByTemplateIdRequest?: CreatePipelineByTemplateIdRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/api/pipeline-templates/{template_id}/create-pipeline",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let templateId;
            
            let componentId;

            if (createPipelineByTemplateIdRequest !== null && createPipelineByTemplateIdRequest !== undefined) {
                if (createPipelineByTemplateIdRequest instanceof CreatePipelineByTemplateIdRequest) {
                    templateId = createPipelineByTemplateIdRequest.templateId;
                    body = createPipelineByTemplateIdRequest.body
                    componentId = createPipelineByTemplateIdRequest.componentId;
                } else {
                    templateId = createPipelineByTemplateIdRequest['template_id'];
                    body = createPipelineByTemplateIdRequest['body'];
                    componentId = createPipelineByTemplateIdRequest['component_id'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling createPipelineByTemplateId.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (componentId !== null && componentId !== undefined) {
                localVarQueryParameter['component_id'] = componentId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建流水线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPipelineNew(createPipelineNewRequest?: CreatePipelineNewRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/api/pipelines",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let componentId;

            if (createPipelineNewRequest !== null && createPipelineNewRequest !== undefined) {
                if (createPipelineNewRequest instanceof CreatePipelineNewRequest) {
                    body = createPipelineNewRequest.body
                    componentId = createPipelineNewRequest.componentId;
                } else {
                    body = createPipelineNewRequest['body'];
                    componentId = createPipelineNewRequest['component_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (componentId !== null && componentId !== undefined) {
                localVarQueryParameter['component_id'] = componentId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除流水线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePipeline(deletePipelineRequest?: DeletePipelineRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/api/pipelines/{pipeline_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let pipelineId;

            if (deletePipelineRequest !== null && deletePipelineRequest !== undefined) {
                if (deletePipelineRequest instanceof DeletePipelineRequest) {
                    pipelineId = deletePipelineRequest.pipelineId;
                } else {
                    pipelineId = deletePipelineRequest['pipeline_id'];
                }
            }

        
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling deletePipeline.');
            }

            options.pathParams = { 'pipeline_id': pipelineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取流水线执行记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPipelineRuns(listPipelineRunsRequest?: ListPipelineRunsRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/api/pipelines/{pipeline_id}/pipeline-runs/list",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let pipelineId;

            if (listPipelineRunsRequest !== null && listPipelineRunsRequest !== undefined) {
                if (listPipelineRunsRequest instanceof ListPipelineRunsRequest) {
                    pipelineId = listPipelineRunsRequest.pipelineId;
                    body = listPipelineRunsRequest.body
                } else {
                    pipelineId = listPipelineRunsRequest['pipeline_id'];
                    body = listPipelineRunsRequest['body'];
                }
            }

        
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling listPipelineRuns.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pipeline_id': pipelineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取流水线列表接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPipelineSimpleInfo(listPipelineSimpleInfoRequest?: ListPipelineSimpleInfoRequest) {
            const options = {
                method: "POST",
                url: "/v3/pipelines/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listPipelineSimpleInfoRequest !== null && listPipelineSimpleInfoRequest !== undefined) {
                if (listPipelineSimpleInfoRequest instanceof ListPipelineSimpleInfoRequest) {
                    body = listPipelineSimpleInfoRequest.body
                } else {
                    body = listPipelineSimpleInfoRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询流水线模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPipelineTemplates(listPipelineTemplatesRequest?: ListPipelineTemplatesRequest) {
            const options = {
                method: "POST",
                url: "/v5/{tenant_id}/api/pipeline-templates/list",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let tenantId;

            if (listPipelineTemplatesRequest !== null && listPipelineTemplatesRequest !== undefined) {
                if (listPipelineTemplatesRequest instanceof ListPipelineTemplatesRequest) {
                    tenantId = listPipelineTemplatesRequest.tenantId;
                    body = listPipelineTemplatesRequest.body
                } else {
                    tenantId = listPipelineTemplatesRequest['tenant_id'];
                    body = listPipelineTemplatesRequest['body'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling listPipelineTemplates.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'tenant_id': tenantId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取流水线列表/获取项目下流水线执行状况
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPipelines(listPipelinesRequest?: ListPipelinesRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/api/pipelines/list",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listPipelinesRequest !== null && listPipelinesRequest !== undefined) {
                if (listPipelinesRequest instanceof ListPipelinesRequest) {
                    body = listPipelinesRequest.body
                } else {
                    body = listPipelinesRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取项目下流水线执行状况
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPipleineBuildResult(listPipleineBuildResultRequest?: ListPipleineBuildResultRequest) {
            const options = {
                method: "GET",
                url: "/v3/pipelines/build-result",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startDate;
            
            let endDate;
            
            let offset;
            
            let limit;

            if (listPipleineBuildResultRequest !== null && listPipleineBuildResultRequest !== undefined) {
                if (listPipleineBuildResultRequest instanceof ListPipleineBuildResultRequest) {
                    startDate = listPipleineBuildResultRequest.startDate;
                    endDate = listPipleineBuildResultRequest.endDate;
                    offset = listPipleineBuildResultRequest.offset;
                    limit = listPipleineBuildResultRequest.limit;
                } else {
                    startDate = listPipleineBuildResultRequest['start_date'];
                    endDate = listPipleineBuildResultRequest['end_date'];
                    offset = listPipleineBuildResultRequest['offset'];
                    limit = listPipleineBuildResultRequest['limit'];
                }
            }

        
            if (startDate === null || startDate === undefined) {
                throw new RequiredError('startDate','Required parameter startDate was null or undefined when calling listPipleineBuildResult.');
            }
            if (startDate !== null && startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }
            if (endDate === null || endDate === undefined) {
                throw new RequiredError('endDate','Required parameter endDate was null or undefined when calling listPipleineBuildResult.');
            }
            if (endDate !== null && endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listPipleineBuildResult.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listPipleineBuildResult.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询模板列表，支持分页查询,支持模板名字模糊查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplates(listTemplatesRequest?: ListTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v3/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let templateType;
            
            let isBuildIn;
            
            let offset;
            
            let limit;
            
            let name;
            
            let sort;
            
            let asc;

            if (listTemplatesRequest !== null && listTemplatesRequest !== undefined) {
                if (listTemplatesRequest instanceof ListTemplatesRequest) {
                    templateType = listTemplatesRequest.templateType;
                    isBuildIn = listTemplatesRequest.isBuildIn;
                    offset = listTemplatesRequest.offset;
                    limit = listTemplatesRequest.limit;
                    name = listTemplatesRequest.name;
                    sort = listTemplatesRequest.sort;
                    asc = listTemplatesRequest.asc;
                } else {
                    templateType = listTemplatesRequest['template_type'];
                    isBuildIn = listTemplatesRequest['is_build_in'];
                    offset = listTemplatesRequest['offset'];
                    limit = listTemplatesRequest['limit'];
                    name = listTemplatesRequest['name'];
                    sort = listTemplatesRequest['sort'];
                    asc = listTemplatesRequest['asc'];
                }
            }

        
            if (templateType === null || templateType === undefined) {
                throw new RequiredError('templateType','Required parameter templateType was null or undefined when calling listTemplates.');
            }
            if (templateType !== null && templateType !== undefined) {
                localVarQueryParameter['template_type'] = templateType;
            }
            if (isBuildIn === null || isBuildIn === undefined) {
                throw new RequiredError('isBuildIn','Required parameter isBuildIn was null or undefined when calling listTemplates.');
            }
            if (isBuildIn !== null && isBuildIn !== undefined) {
                localVarQueryParameter['is_build_in'] = isBuildIn;
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
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (asc !== null && asc !== undefined) {
                localVarQueryParameter['asc'] = asc;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 驳回人工审核
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rejectManualReview(rejectManualReviewRequest?: RejectManualReviewRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/api/pipelines/{pipeline_id}/pipeline-runs/{pipeline_run_id}/jobs/{job_run_id}/steps/{step_run_id}/refuse",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobRunId;
            
            let stepRunId;
            
            let pipelineId;
            
            let pipelineRunId;

            if (rejectManualReviewRequest !== null && rejectManualReviewRequest !== undefined) {
                if (rejectManualReviewRequest instanceof RejectManualReviewRequest) {
                    jobRunId = rejectManualReviewRequest.jobRunId;
                    stepRunId = rejectManualReviewRequest.stepRunId;
                    pipelineId = rejectManualReviewRequest.pipelineId;
                    pipelineRunId = rejectManualReviewRequest.pipelineRunId;
                } else {
                    jobRunId = rejectManualReviewRequest['job_run_id'];
                    stepRunId = rejectManualReviewRequest['step_run_id'];
                    pipelineId = rejectManualReviewRequest['pipeline_id'];
                    pipelineRunId = rejectManualReviewRequest['pipeline_run_id'];
                }
            }

        
            if (jobRunId === null || jobRunId === undefined) {
            throw new RequiredError('jobRunId','Required parameter jobRunId was null or undefined when calling rejectManualReview.');
            }
            if (stepRunId === null || stepRunId === undefined) {
            throw new RequiredError('stepRunId','Required parameter stepRunId was null or undefined when calling rejectManualReview.');
            }
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling rejectManualReview.');
            }
            if (pipelineRunId === null || pipelineRunId === undefined) {
            throw new RequiredError('pipelineRunId','Required parameter pipelineRunId was null or undefined when calling rejectManualReview.');
            }

            options.pathParams = { 'job_run_id': jobRunId,'step_run_id': stepRunId,'pipeline_id': pipelineId,'pipeline_run_id': pipelineRunId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据id删除流水线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removePipeline(removePipelineRequest?: RemovePipelineRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/pipelines/{pipeline_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let pipelineId;

            if (removePipelineRequest !== null && removePipelineRequest !== undefined) {
                if (removePipelineRequest instanceof RemovePipelineRequest) {
                    pipelineId = removePipelineRequest.pipelineId;
                } else {
                    pipelineId = removePipelineRequest['pipeline_id'];
                }
            }

        
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling removePipeline.');
            }

            options.pathParams = { 'pipeline_id': pipelineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重试运行流水线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retryPipelineRun(retryPipelineRunRequest?: RetryPipelineRunRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/api/pipelines/{pipeline_id}/pipeline-runs/{pipeline_run_id}/retry",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let pipelineId;
            
            let pipelineRunId;

            if (retryPipelineRunRequest !== null && retryPipelineRunRequest !== undefined) {
                if (retryPipelineRunRequest instanceof RetryPipelineRunRequest) {
                    pipelineId = retryPipelineRunRequest.pipelineId;
                    pipelineRunId = retryPipelineRunRequest.pipelineRunId;
                } else {
                    pipelineId = retryPipelineRunRequest['pipeline_id'];
                    pipelineRunId = retryPipelineRunRequest['pipeline_run_id'];
                }
            }

        
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling retryPipelineRun.');
            }
            if (pipelineRunId === null || pipelineRunId === undefined) {
            throw new RequiredError('pipelineRunId','Required parameter pipelineRunId was null or undefined when calling retryPipelineRun.');
            }

            options.pathParams = { 'pipeline_id': pipelineId,'pipeline_run_id': pipelineRunId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动流水线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runPipeline(runPipelineRequest?: RunPipelineRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/api/pipelines/{pipeline_id}/run",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let pipelineId;

            if (runPipelineRequest !== null && runPipelineRequest !== undefined) {
                if (runPipelineRequest instanceof RunPipelineRequest) {
                    pipelineId = runPipelineRequest.pipelineId;
                    body = runPipelineRequest.body
                } else {
                    pipelineId = runPipelineRequest['pipeline_id'];
                    body = runPipelineRequest['body'];
                }
            }

        
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling runPipeline.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pipeline_id': pipelineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检查流水线创建状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceStatus(showInstanceStatusRequest?: ShowInstanceStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/templates/{task_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showInstanceStatusRequest !== null && showInstanceStatusRequest !== undefined) {
                if (showInstanceStatusRequest instanceof ShowInstanceStatusRequest) {
                    taskId = showInstanceStatusRequest.taskId;
                } else {
                    taskId = showInstanceStatusRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showInstanceStatus.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取流水线状态/获取流水线执行详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPipelineRunDetail(showPipelineRunDetailRequest?: ShowPipelineRunDetailRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/api/pipelines/{pipeline_id}/pipeline-runs/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pipelineId;
            
            let pipelineRunId;

            if (showPipelineRunDetailRequest !== null && showPipelineRunDetailRequest !== undefined) {
                if (showPipelineRunDetailRequest instanceof ShowPipelineRunDetailRequest) {
                    pipelineId = showPipelineRunDetailRequest.pipelineId;
                    pipelineRunId = showPipelineRunDetailRequest.pipelineRunId;
                } else {
                    pipelineId = showPipelineRunDetailRequest['pipeline_id'];
                    pipelineRunId = showPipelineRunDetailRequest['pipeline_run_id'];
                }
            }

        
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling showPipelineRunDetail.');
            }
            if (pipelineRunId !== null && pipelineRunId !== undefined) {
                localVarQueryParameter['pipeline_run_id'] = pipelineRunId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'pipeline_id': pipelineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询模板详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPipelineTemplateDetail(showPipelineTemplateDetailRequest?: ShowPipelineTemplateDetailRequest) {
            const options = {
                method: "GET",
                url: "/v5/{tenant_id}/api/pipeline-templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let tenantId;
            
            let templateId;

            if (showPipelineTemplateDetailRequest !== null && showPipelineTemplateDetailRequest !== undefined) {
                if (showPipelineTemplateDetailRequest instanceof ShowPipelineTemplateDetailRequest) {
                    tenantId = showPipelineTemplateDetailRequest.tenantId;
                    templateId = showPipelineTemplateDetailRequest.templateId;
                } else {
                    tenantId = showPipelineTemplateDetailRequest['tenant_id'];
                    templateId = showPipelineTemplateDetailRequest['template_id'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling showPipelineTemplateDetail.');
            }
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showPipelineTemplateDetail.');
            }

            options.pathParams = { 'tenant_id': tenantId,'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取流水线状态,阶段及任务信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPipleineStatus(showPipleineStatusRequest?: ShowPipleineStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/pipelines/{pipeline_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pipelineId;
            
            let buildId;

            if (showPipleineStatusRequest !== null && showPipleineStatusRequest !== undefined) {
                if (showPipleineStatusRequest instanceof ShowPipleineStatusRequest) {
                    pipelineId = showPipleineStatusRequest.pipelineId;
                    buildId = showPipleineStatusRequest.buildId;
                } else {
                    pipelineId = showPipleineStatusRequest['pipeline_id'];
                    buildId = showPipleineStatusRequest['build_id'];
                }
            }

        
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling showPipleineStatus.');
            }
            if (buildId !== null && buildId !== undefined) {
                localVarQueryParameter['build_id'] = buildId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'pipeline_id': pipelineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询模板详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTemplateDetail(showTemplateDetailRequest?: ShowTemplateDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3/templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let templateId;
            
            let templateType;
            
            let source;

            if (showTemplateDetailRequest !== null && showTemplateDetailRequest !== undefined) {
                if (showTemplateDetailRequest instanceof ShowTemplateDetailRequest) {
                    templateId = showTemplateDetailRequest.templateId;
                    templateType = showTemplateDetailRequest.templateType;
                    source = showTemplateDetailRequest.source;
                } else {
                    templateId = showTemplateDetailRequest['template_id'];
                    templateType = showTemplateDetailRequest['template_type'];
                    source = showTemplateDetailRequest['source'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showTemplateDetail.');
            }
            if (templateType === null || templateType === undefined) {
                throw new RequiredError('templateType','Required parameter templateType was null or undefined when calling showTemplateDetail.');
            }
            if (templateType !== null && templateType !== undefined) {
                localVarQueryParameter['template_type'] = templateType;
            }
            if (source !== null && source !== undefined) {
                localVarQueryParameter['source'] = source;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动流水线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startNewPipeline(startNewPipelineRequest?: StartNewPipelineRequest) {
            const options = {
                method: "POST",
                url: "/v3/pipelines/{pipeline_id}/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let pipelineId;

            if (startNewPipelineRequest !== null && startNewPipelineRequest !== undefined) {
                if (startNewPipelineRequest instanceof StartNewPipelineRequest) {
                    pipelineId = startNewPipelineRequest.pipelineId;
                    body = startNewPipelineRequest.body
                } else {
                    pipelineId = startNewPipelineRequest['pipeline_id'];
                    body = startNewPipelineRequest['body'];
                }
            }

        
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling startNewPipeline.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pipeline_id': pipelineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止流水线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopPipelineNew(stopPipelineNewRequest?: StopPipelineNewRequest) {
            const options = {
                method: "POST",
                url: "/v3/pipelines/{pipeline_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pipelineId;
            
            let buildId;

            if (stopPipelineNewRequest !== null && stopPipelineNewRequest !== undefined) {
                if (stopPipelineNewRequest instanceof StopPipelineNewRequest) {
                    pipelineId = stopPipelineNewRequest.pipelineId;
                    buildId = stopPipelineNewRequest.buildId;
                } else {
                    pipelineId = stopPipelineNewRequest['pipeline_id'];
                    buildId = stopPipelineNewRequest['build_id'];
                }
            }

        
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling stopPipelineNew.');
            }
            if (buildId === null || buildId === undefined) {
                throw new RequiredError('buildId','Required parameter buildId was null or undefined when calling stopPipelineNew.');
            }
            if (buildId !== null && buildId !== undefined) {
                localVarQueryParameter['build_id'] = buildId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'pipeline_id': pipelineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止流水线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopPipelineRun(stopPipelineRunRequest?: StopPipelineRunRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/api/pipelines/{pipeline_id}/pipeline-runs/{pipeline_run_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let pipelineId;
            
            let pipelineRunId;

            if (stopPipelineRunRequest !== null && stopPipelineRunRequest !== undefined) {
                if (stopPipelineRunRequest instanceof StopPipelineRunRequest) {
                    pipelineId = stopPipelineRunRequest.pipelineId;
                    pipelineRunId = stopPipelineRunRequest.pipelineRunId;
                } else {
                    pipelineId = stopPipelineRunRequest['pipeline_id'];
                    pipelineRunId = stopPipelineRunRequest['pipeline_run_id'];
                }
            }

        
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling stopPipelineRun.');
            }
            if (pipelineRunId === null || pipelineRunId === undefined) {
            throw new RequiredError('pipelineRunId','Required parameter pipelineRunId was null or undefined when calling stopPipelineRun.');
            }

            options.pathParams = { 'pipeline_id': pipelineId,'pipeline_run_id': pipelineRunId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CodeArtsPipelineClient {
    return new CodeArtsPipelineClient(client);
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