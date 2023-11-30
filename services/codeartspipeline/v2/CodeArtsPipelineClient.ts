import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { AcceptManualReviewRequest } from './model/AcceptManualReviewRequest';
import { AcceptManualReviewResponse } from './model/AcceptManualReviewResponse';
import { AgentPluginInfoQueryDTO } from './model/AgentPluginInfoQueryDTO';
import { BatchMovePipelineToGroupRequest } from './model/BatchMovePipelineToGroupRequest';
import { BatchMovePipelineToGroupResponse } from './model/BatchMovePipelineToGroupResponse';
import { BatchShowPipelinesLatestStatusRequest } from './model/BatchShowPipelinesLatestStatusRequest';
import { BatchShowPipelinesLatestStatusResponse } from './model/BatchShowPipelinesLatestStatusResponse';
import { BatchShowPipelinesStatusRequest } from './model/BatchShowPipelinesStatusRequest';
import { BatchShowPipelinesStatusResponse } from './model/BatchShowPipelinesStatusResponse';
import { BusinessTypePluginsQueryDTO } from './model/BusinessTypePluginsQueryDTO';
import { CodeEvent } from './model/CodeEvent';
import { CodeSource } from './model/CodeSource';
import { CodeSourceParams } from './model/CodeSourceParams';
import { Constraint } from './model/Constraint';
import { CreateBasicPluginRequest } from './model/CreateBasicPluginRequest';
import { CreateBasicPluginResponse } from './model/CreateBasicPluginResponse';
import { CreateOpenSourceStrategyRequest } from './model/CreateOpenSourceStrategyRequest';
import { CreateOpenSourceStrategyResponse } from './model/CreateOpenSourceStrategyResponse';
import { CreatePipelineByTemplateIdRequest } from './model/CreatePipelineByTemplateIdRequest';
import { CreatePipelineByTemplateIdResponse } from './model/CreatePipelineByTemplateIdResponse';
import { CreatePipelineByTemplateRequest } from './model/CreatePipelineByTemplateRequest';
import { CreatePipelineByTemplateResponse } from './model/CreatePipelineByTemplateResponse';
import { CreatePipelineGroupRequest } from './model/CreatePipelineGroupRequest';
import { CreatePipelineGroupResponse } from './model/CreatePipelineGroupResponse';
import { CreatePipelineNewRequest } from './model/CreatePipelineNewRequest';
import { CreatePipelineNewResponse } from './model/CreatePipelineNewResponse';
import { CreatePipelineTemplateRequest } from './model/CreatePipelineTemplateRequest';
import { CreatePipelineTemplateResponse } from './model/CreatePipelineTemplateResponse';
import { CreatePluginDraftRequest } from './model/CreatePluginDraftRequest';
import { CreatePluginDraftResponse } from './model/CreatePluginDraftResponse';
import { CreatePluginVersionRequest } from './model/CreatePluginVersionRequest';
import { CreatePluginVersionResponse } from './model/CreatePluginVersionResponse';
import { CreatePublisherRequest } from './model/CreatePublisherRequest';
import { CreatePublisherResponse } from './model/CreatePublisherResponse';
import { CreateRuleReq } from './model/CreateRuleReq';
import { CreateRuleRequest } from './model/CreateRuleRequest';
import { CreateRuleResponse } from './model/CreateRuleResponse';
import { CreateRuleSetReq } from './model/CreateRuleSetReq';
import { CreateStrategyRequest } from './model/CreateStrategyRequest';
import { CreateStrategyResponse } from './model/CreateStrategyResponse';
import { CustomVariable } from './model/CustomVariable';
import { DeleteBasicPluginRequest } from './model/DeleteBasicPluginRequest';
import { DeleteBasicPluginResponse } from './model/DeleteBasicPluginResponse';
import { DeleteOpenSourceStrategyRequest } from './model/DeleteOpenSourceStrategyRequest';
import { DeleteOpenSourceStrategyResponse } from './model/DeleteOpenSourceStrategyResponse';
import { DeletePipelineGroupRequest } from './model/DeletePipelineGroupRequest';
import { DeletePipelineGroupResponse } from './model/DeletePipelineGroupResponse';
import { DeletePipelineRequest } from './model/DeletePipelineRequest';
import { DeletePipelineResponse } from './model/DeletePipelineResponse';
import { DeletePipelineTemplateRequest } from './model/DeletePipelineTemplateRequest';
import { DeletePipelineTemplateResponse } from './model/DeletePipelineTemplateResponse';
import { DeletePluginDraftRequest } from './model/DeletePluginDraftRequest';
import { DeletePluginDraftResponse } from './model/DeletePluginDraftResponse';
import { DeletePublisherRequest } from './model/DeletePublisherRequest';
import { DeletePublisherResponse } from './model/DeletePublisherResponse';
import { DeleteRuleRequest } from './model/DeleteRuleRequest';
import { DeleteRuleResponse } from './model/DeleteRuleResponse';
import { DeleteStrategyRequest } from './model/DeleteStrategyRequest';
import { DeleteStrategyResponse } from './model/DeleteStrategyResponse';
import { ExtensionExtendProp } from './model/ExtensionExtendProp';
import { ExtensionValidation } from './model/ExtensionValidation';
import { FullStagePluginsRelationVOAddables } from './model/FullStagePluginsRelationVOAddables';
import { FullStagePluginsRelationVOAllSteps } from './model/FullStagePluginsRelationVOAllSteps';
import { FullStagePluginsRelationVOFullStagePluginsItemList } from './model/FullStagePluginsRelationVOFullStagePluginsItemList';
import { FullStagePluginsRelationVOPluginsList } from './model/FullStagePluginsRelationVOPluginsList';
import { JobRun } from './model/JobRun';
import { LicenseProperty } from './model/LicenseProperty';
import { LicensePropertyRules } from './model/LicensePropertyRules';
import { ListAvailablePublisherRequest } from './model/ListAvailablePublisherRequest';
import { ListAvailablePublisherResponse } from './model/ListAvailablePublisherResponse';
import { ListBasePluginsNewPostRequest } from './model/ListBasePluginsNewPostRequest';
import { ListBasePluginsNewPostResponse } from './model/ListBasePluginsNewPostResponse';
import { ListBasePluginsRequest } from './model/ListBasePluginsRequest';
import { ListBasePluginsResponse } from './model/ListBasePluginsResponse';
import { ListOpenSourceStrategyRequest } from './model/ListOpenSourceStrategyRequest';
import { ListOpenSourceStrategyResponse } from './model/ListOpenSourceStrategyResponse';
import { ListPLuginVersionRequest } from './model/ListPLuginVersionRequest';
import { ListPLuginVersionResponse } from './model/ListPLuginVersionResponse';
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
import { ListPluginVersionNumberRequest } from './model/ListPluginVersionNumberRequest';
import { ListPluginVersionNumberResponse } from './model/ListPluginVersionNumberResponse';
import { ListPluginsRequest } from './model/ListPluginsRequest';
import { ListPluginsResponse } from './model/ListPluginsResponse';
import { ListProjectOpenSourceStrategyRequest } from './model/ListProjectOpenSourceStrategyRequest';
import { ListProjectOpenSourceStrategyResponse } from './model/ListProjectOpenSourceStrategyResponse';
import { ListProjectStrategyRequest } from './model/ListProjectStrategyRequest';
import { ListProjectStrategyResponse } from './model/ListProjectStrategyResponse';
import { ListPublisherRequest } from './model/ListPublisherRequest';
import { ListPublisherResponse } from './model/ListPublisherResponse';
import { ListRuleRequest } from './model/ListRuleRequest';
import { ListRuleResponse } from './model/ListRuleResponse';
import { ListStagePluginsRequest } from './model/ListStagePluginsRequest';
import { ListStagePluginsResponse } from './model/ListStagePluginsResponse';
import { ListStrategyRequest } from './model/ListStrategyRequest';
import { ListStrategyResponse } from './model/ListStrategyResponse';
import { ListTemplatesRequest } from './model/ListTemplatesRequest';
import { ListTemplatesResponse } from './model/ListTemplatesResponse';
import { LogQuery } from './model/LogQuery';
import { NewExtensionExecution } from './model/NewExtensionExecution';
import { NewExtensionInputs } from './model/NewExtensionInputs';
import { NewExtensionOutputs } from './model/NewExtensionOutputs';
import { OpenSourceRuleContent } from './model/OpenSourceRuleContent';
import { OpenSourceRuleSetCreateVO } from './model/OpenSourceRuleSetCreateVO';
import { PackageInfo } from './model/PackageInfo';
import { PageInfoBusinessTypeDefinitionVOData } from './model/PageInfoBusinessTypeDefinitionVOData';
import { PageInfoBusinessTypeDefinitionVOPluginsList } from './model/PageInfoBusinessTypeDefinitionVOPluginsList';
import { PageInfoOptionalSinglePluginVOData } from './model/PageInfoOptionalSinglePluginVOData';
import { ParamTypeLimits } from './model/ParamTypeLimits';
import { PipelineBasicInfo } from './model/PipelineBasicInfo';
import { PipelineBuildResult } from './model/PipelineBuildResult';
import { PipelineByTemplateDTO } from './model/PipelineByTemplateDTO';
import { PipelineByTemplateDTOVariables } from './model/PipelineByTemplateDTOVariables';
import { PipelineDTO } from './model/PipelineDTO';
import { PipelineExecuteStates } from './model/PipelineExecuteStates';
import { PipelineGroupBindDTO } from './model/PipelineGroupBindDTO';
import { PipelineGroupBindDTOPipelines } from './model/PipelineGroupBindDTOPipelines';
import { PipelineGroupCreateDTO } from './model/PipelineGroupCreateDTO';
import { PipelineGroupUpdateDTO } from './model/PipelineGroupUpdateDTO';
import { PipelineGroupVo } from './model/PipelineGroupVo';
import { PipelineLatestRun } from './model/PipelineLatestRun';
import { PipelineLatestRunArtifactParams } from './model/PipelineLatestRunArtifactParams';
import { PipelineLatestRunBuildParams } from './model/PipelineLatestRunBuildParams';
import { PipelineLatestRunStageStatusList } from './model/PipelineLatestRunStageStatusList';
import { PipelineMoveToGroupResponseVo } from './model/PipelineMoveToGroupResponseVo';
import { PipelineParam } from './model/PipelineParam';
import { PipelineParameter } from './model/PipelineParameter';
import { PipelineSchedule } from './model/PipelineSchedule';
import { PipelineStateStatus } from './model/PipelineStateStatus';
import { PipelineTemplateDTO } from './model/PipelineTemplateDTO';
import { PipelineTemplateSimpleVO } from './model/PipelineTemplateSimpleVO';
import { PipelineTemplateSimpleVOStages } from './model/PipelineTemplateSimpleVOStages';
import { PipelineTrigger } from './model/PipelineTrigger';
import { PluginBasicDTO } from './model/PluginBasicDTO';
import { PluginBasicVO } from './model/PluginBasicVO';
import { PluginDTO } from './model/PluginDTO';
import { PluginDTOExecutionInfo } from './model/PluginDTOExecutionInfo';
import { PluginDTOInputInfo } from './model/PluginDTOInputInfo';
import { PluginPartQueryDTO } from './model/PluginPartQueryDTO';
import { PluginPartQueryVOListAgentPluginInputVO } from './model/PluginPartQueryVOListAgentPluginInputVO';
import { PluginPartQueryVOListAgentPluginInputVOData } from './model/PluginPartQueryVOListAgentPluginInputVOData';
import { PluginPartQueryVOListAgentPluginOutputVO } from './model/PluginPartQueryVOListAgentPluginOutputVO';
import { PluginPartQueryVOListAgentPluginOutputVOData } from './model/PluginPartQueryVOListAgentPluginOutputVOData';
import { PublishPluginBindRequest } from './model/PublishPluginBindRequest';
import { PublishPluginBindResponse } from './model/PublishPluginBindResponse';
import { PublishPluginDTO } from './model/PublishPluginDTO';
import { PublishPluginDraftRequest } from './model/PublishPluginDraftRequest';
import { PublishPluginDraftResponse } from './model/PublishPluginDraftResponse';
import { PublishPluginRequest } from './model/PublishPluginRequest';
import { PublishPluginResponse } from './model/PublishPluginResponse';
import { PublisherRequest } from './model/PublisherRequest';
import { PublisherVO } from './model/PublisherVO';
import { RejectManualReviewRequest } from './model/RejectManualReviewRequest';
import { RejectManualReviewResponse } from './model/RejectManualReviewResponse';
import { RemovePipelineRequest } from './model/RemovePipelineRequest';
import { RemovePipelineResponse } from './model/RemovePipelineResponse';
import { RequestRuleInstance } from './model/RequestRuleInstance';
import { RetryPipelineRunRequest } from './model/RetryPipelineRunRequest';
import { RetryPipelineRunResponse } from './model/RetryPipelineRunResponse';
import { Rule } from './model/Rule';
import { RuleContent } from './model/RuleContent';
import { RuleInstance } from './model/RuleInstance';
import { RuleInstanceContent } from './model/RuleInstanceContent';
import { RuleInstanceProperty } from './model/RuleInstanceProperty';
import { RuleProperty } from './model/RuleProperty';
import { RuleSet } from './model/RuleSet';
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
import { SecurityProperty } from './model/SecurityProperty';
import { SecurityRule } from './model/SecurityRule';
import { SecurityRuleCve } from './model/SecurityRuleCve';
import { SecurityRuleSeverity } from './model/SecurityRuleSeverity';
import { ShowBasicPluginRequest } from './model/ShowBasicPluginRequest';
import { ShowBasicPluginResponse } from './model/ShowBasicPluginResponse';
import { ShowInstanceStatusRequest } from './model/ShowInstanceStatusRequest';
import { ShowInstanceStatusResponse } from './model/ShowInstanceStatusResponse';
import { ShowOpenSourceStrategyRequest } from './model/ShowOpenSourceStrategyRequest';
import { ShowOpenSourceStrategyResponse } from './model/ShowOpenSourceStrategyResponse';
import { ShowPipelineGroupTreeRequest } from './model/ShowPipelineGroupTreeRequest';
import { ShowPipelineGroupTreeResponse } from './model/ShowPipelineGroupTreeResponse';
import { ShowPipelineLogRequest } from './model/ShowPipelineLogRequest';
import { ShowPipelineLogResponse } from './model/ShowPipelineLogResponse';
import { ShowPipelineRunDetailRequest } from './model/ShowPipelineRunDetailRequest';
import { ShowPipelineRunDetailResponse } from './model/ShowPipelineRunDetailResponse';
import { ShowPipelineTemplateDetailRequest } from './model/ShowPipelineTemplateDetailRequest';
import { ShowPipelineTemplateDetailResponse } from './model/ShowPipelineTemplateDetailResponse';
import { ShowPipleineStatusRequest } from './model/ShowPipleineStatusRequest';
import { ShowPipleineStatusResponse } from './model/ShowPipleineStatusResponse';
import { ShowPluginInputsRequest } from './model/ShowPluginInputsRequest';
import { ShowPluginInputsResponse } from './model/ShowPluginInputsResponse';
import { ShowPluginMetricsRequest } from './model/ShowPluginMetricsRequest';
import { ShowPluginMetricsResponse } from './model/ShowPluginMetricsResponse';
import { ShowPluginOutputsRequest } from './model/ShowPluginOutputsRequest';
import { ShowPluginOutputsResponse } from './model/ShowPluginOutputsResponse';
import { ShowPluginVersionRequest } from './model/ShowPluginVersionRequest';
import { ShowPluginVersionResponse } from './model/ShowPluginVersionResponse';
import { ShowProjectOpenSourceStrategyRequest } from './model/ShowProjectOpenSourceStrategyRequest';
import { ShowProjectOpenSourceStrategyResponse } from './model/ShowProjectOpenSourceStrategyResponse';
import { ShowProjectStrategyRequest } from './model/ShowProjectStrategyRequest';
import { ShowProjectStrategyResponse } from './model/ShowProjectStrategyResponse';
import { ShowPublisherRequest } from './model/ShowPublisherRequest';
import { ShowPublisherResponse } from './model/ShowPublisherResponse';
import { ShowRuleRequest } from './model/ShowRuleRequest';
import { ShowRuleResponse } from './model/ShowRuleResponse';
import { ShowStrategyRequest } from './model/ShowStrategyRequest';
import { ShowStrategyResponse } from './model/ShowStrategyResponse';
import { ShowTemplateDetailRequest } from './model/ShowTemplateDetailRequest';
import { ShowTemplateDetailResponse } from './model/ShowTemplateDetailResponse';
import { SimpleOpenSourceRuleSetVO } from './model/SimpleOpenSourceRuleSetVO';
import { Source } from './model/Source';
import { StagePluginsQueryDTO } from './model/StagePluginsQueryDTO';
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
import { SwitchOpenSourceStrategyRequest } from './model/SwitchOpenSourceStrategyRequest';
import { SwitchOpenSourceStrategyResponse } from './model/SwitchOpenSourceStrategyResponse';
import { SwitchStrategyRequest } from './model/SwitchStrategyRequest';
import { SwitchStrategyResponse } from './model/SwitchStrategyResponse';
import { TemplateCddl } from './model/TemplateCddl';
import { TemplateParam } from './model/TemplateParam';
import { TemplateState } from './model/TemplateState';
import { TemplateView } from './model/TemplateView';
import { TenantOpenSourceRuleSetCreateVO } from './model/TenantOpenSourceRuleSetCreateVO';
import { UpdateBasicPluginRequest } from './model/UpdateBasicPluginRequest';
import { UpdateBasicPluginResponse } from './model/UpdateBasicPluginResponse';
import { UpdateOpenSourceStrategyRequest } from './model/UpdateOpenSourceStrategyRequest';
import { UpdateOpenSourceStrategyResponse } from './model/UpdateOpenSourceStrategyResponse';
import { UpdatePipelineGroupRequest } from './model/UpdatePipelineGroupRequest';
import { UpdatePipelineGroupResponse } from './model/UpdatePipelineGroupResponse';
import { UpdatePipelineTemplateRequest } from './model/UpdatePipelineTemplateRequest';
import { UpdatePipelineTemplateResponse } from './model/UpdatePipelineTemplateResponse';
import { UpdatePluginBaseInfoRequest } from './model/UpdatePluginBaseInfoRequest';
import { UpdatePluginBaseInfoResponse } from './model/UpdatePluginBaseInfoResponse';
import { UpdatePluginDraftRequest } from './model/UpdatePluginDraftRequest';
import { UpdatePluginDraftResponse } from './model/UpdatePluginDraftResponse';
import { UpdateRuleInstance } from './model/UpdateRuleInstance';
import { UpdateRuleReq } from './model/UpdateRuleReq';
import { UpdateRuleRequest } from './model/UpdateRuleRequest';
import { UpdateRuleResponse } from './model/UpdateRuleResponse';
import { UpdateRuleSetReq } from './model/UpdateRuleSetReq';
import { UpdateRuleSetStatusReq } from './model/UpdateRuleSetStatusReq';
import { UpdateStrategyRequest } from './model/UpdateStrategyRequest';
import { UpdateStrategyResponse } from './model/UpdateStrategyResponse';
import { UploadBasicPluginRequest } from './model/UploadBasicPluginRequest';
import { UploadBasicPluginRequestBody } from './model/UploadBasicPluginRequestBody';
import { UploadBasicPluginResponse } from './model/UploadBasicPluginResponse';
import { UploadPluginIconRequest } from './model/UploadPluginIconRequest';
import { UploadPluginIconRequestBody } from './model/UploadPluginIconRequestBody';
import { UploadPluginIconResponse } from './model/UploadPluginIconResponse';
import { UploadPublisherIconRequest } from './model/UploadPublisherIconRequest';
import { UploadPublisherIconRequestBody } from './model/UploadPublisherIconRequestBody';
import { UploadPublisherIconResponse } from './model/UploadPublisherIconResponse';
import { VersionSetProperty } from './model/VersionSetProperty';
import { VersionSetRule } from './model/VersionSetRule';
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
     * 批量把流水线移动到分组下
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量把流水线移动到分组下
     * @param {PipelineGroupBindDTO} batchMovePipelineGroupRequestBody 批量把流水线移动到分组参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchMovePipelineToGroup(batchMovePipelineToGroupRequest?: BatchMovePipelineToGroupRequest): Promise<BatchMovePipelineToGroupResponse> {
        const options = ParamCreater().batchMovePipelineToGroup(batchMovePipelineToGroupRequest);

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
     * 创建基础插件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建基础插件
     * @param {string} domainId 租户ID
     * @param {PluginBasicDTO} [pluginBasicDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBasicPlugin(createBasicPluginRequest?: CreateBasicPluginRequest): Promise<CreateBasicPluginResponse> {
        const options = ParamCreater().createBasicPlugin(createBasicPluginRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建租户级开源治理策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建租户级开源治理策略
     * @param {string} domainId 租户ID
     * @param {TenantOpenSourceRuleSetCreateVO} body 开源治理策略实例详情
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOpenSourceStrategy(createOpenSourceStrategyRequest?: CreateOpenSourceStrategyRequest): Promise<CreateOpenSourceStrategyResponse> {
        const options = ParamCreater().createOpenSourceStrategy(createOpenSourceStrategyRequest);

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
     * 新建流水线分组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建流水线分组
     * @param {PipelineGroupCreateDTO} createPipelineGroupRequestBody 创建流水线分组参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPipelineGroup(createPipelineGroupRequest?: CreatePipelineGroupRequest): Promise<CreatePipelineGroupResponse> {
        const options = ParamCreater().createPipelineGroup(createPipelineGroupRequest);

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
     * 创建流水线模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建流水线模板
     * @param {string} tenantId 租户ID
     * @param {PipelineTemplateDTO} body 创建模板请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPipelineTemplate(createPipelineTemplateRequest?: CreatePipelineTemplateRequest): Promise<CreatePipelineTemplateResponse> {
        const options = ParamCreater().createPipelineTemplate(createPipelineTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建插件草稿版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建插件草稿版本
     * @param {string} domainId 租户ID
     * @param {PluginDTO} [pluginDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPluginDraft(createPluginDraftRequest?: CreatePluginDraftRequest): Promise<CreatePluginDraftResponse> {
        const options = ParamCreater().createPluginDraft(createPluginDraftRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建插件版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建插件版本
     * @param {string} domainId 租户ID
     * @param {PluginDTO} [pluginDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPluginVersion(createPluginVersionRequest?: CreatePluginVersionRequest): Promise<CreatePluginVersionResponse> {
        const options = ParamCreater().createPluginVersion(createPluginVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建发布商
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建发布商
     * @param {string} domainId 租户ID
     * @param {PublisherRequest} [publisherRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPublisher(createPublisherRequest?: CreatePublisherRequest): Promise<CreatePublisherResponse> {
        const options = ParamCreater().createPublisher(createPublisherRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建规则
     * @param {string} domainId 租户ID
     * @param {CreateRuleReq} body 规则详情
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRule(createRuleRequest?: CreateRuleRequest): Promise<CreateRuleResponse> {
        const options = ParamCreater().createRule(createRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建规则集
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建规则集
     * @param {string} domainId 租户ID
     * @param {CreateRuleSetReq} body 规则模板实例详情
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStrategy(createStrategyRequest?: CreateStrategyRequest): Promise<CreateStrategyResponse> {
        const options = ParamCreater().createStrategy(createStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除基础插件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除基础插件
     * @param {string} domainId 租户ID
     * @param {string} [pluginName] 是否调用成功
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBasicPlugin(deleteBasicPluginRequest?: DeleteBasicPluginRequest): Promise<DeleteBasicPluginResponse> {
        const options = ParamCreater().deleteBasicPlugin(deleteBasicPluginRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除租户级开源治理策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除租户级开源治理策略
     * @param {string} domainId 租户ID
     * @param {string} ruleSetId 策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteOpenSourceStrategy(deleteOpenSourceStrategyRequest?: DeleteOpenSourceStrategyRequest): Promise<DeleteOpenSourceStrategyResponse> {
        const options = ParamCreater().deleteOpenSourceStrategy(deleteOpenSourceStrategyRequest);

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
     * 删除流水线分组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除流水线分组
     * @param {string} id 分组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePipelineGroup(deletePipelineGroupRequest?: DeletePipelineGroupRequest): Promise<DeletePipelineGroupResponse> {
        const options = ParamCreater().deletePipelineGroup(deletePipelineGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除流水线模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除流水线模板
     * @param {string} tenantId 租户ID
     * @param {string} templateId 模板ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePipelineTemplate(deletePipelineTemplateRequest?: DeletePipelineTemplateRequest): Promise<DeletePipelineTemplateResponse> {
        const options = ParamCreater().deletePipelineTemplate(deletePipelineTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除插件草稿
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除插件草稿
     * @param {string} domainId 租户ID
     * @param {string} [pluginName] 插件名
     * @param {string} [version] 版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePluginDraft(deletePluginDraftRequest?: DeletePluginDraftRequest): Promise<DeletePluginDraftResponse> {
        const options = ParamCreater().deletePluginDraft(deletePluginDraftRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除发布商
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除发布商
     * @param {string} domainId 租户ID
     * @param {string} [publisherUniqueId] 发布商ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePublisher(deletePublisherRequest?: DeletePublisherRequest): Promise<DeletePublisherResponse> {
        const options = ParamCreater().deletePublisher(deletePublisherRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除规则
     * @param {string} domainId 租户ID
     * @param {string} ruleId 规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRule(deleteRuleRequest?: DeleteRuleRequest): Promise<DeleteRuleResponse> {
        const options = ParamCreater().deleteRule(deleteRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除规则集
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除规则集
     * @param {string} ruleSetId 规则集ID
     * @param {string} domainId 租户ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStrategy(deleteStrategyRequest?: DeleteStrategyRequest): Promise<DeleteStrategyResponse> {
        const options = ParamCreater().deleteStrategy(deleteStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可用发布商
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用发布商
     * @param {string} domainId 租户ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailablePublisher(listAvailablePublisherRequest?: ListAvailablePublisherRequest): Promise<ListAvailablePublisherResponse> {
        const options = ParamCreater().listAvailablePublisher(listAvailablePublisherRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询基础插件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询基础插件列表
     * @param {string} domainId 租户ID
     * @param {string} [attribution] 属性
     * @param {string} [offset] 偏移
     * @param {string} [limit] 大小
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBasePlugins(listBasePluginsRequest?: ListBasePluginsRequest): Promise<ListBasePluginsResponse> {
        const options = ParamCreater().listBasePlugins(listBasePluginsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页查询可选插件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分页查询可选插件列表
     * @param {string} domainId 租户ID
     * @param {number} offset 偏移
     * @param {number} limit 大小
     * @param {BusinessTypePluginsQueryDTO} businessTypePluginsQueryDTO 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBasePluginsNewPost(listBasePluginsNewPostRequest?: ListBasePluginsNewPostRequest): Promise<ListBasePluginsNewPostResponse> {
        const options = ParamCreater().listBasePluginsNewPost(listBasePluginsNewPostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户级开源治理策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户级开源治理策略列表
     * @param {string} domainId 租户ID
     * @param {string} [name] 策略名称
     * @param {string} [creatorName] 策略创建人名称
     * @param {number} [limit] 分页参数，默认15
     * @param {number} [offset] 分页参数，默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOpenSourceStrategy(listOpenSourceStrategyRequest?: ListOpenSourceStrategyRequest): Promise<ListOpenSourceStrategyResponse> {
        const options = ParamCreater().listOpenSourceStrategy(listOpenSourceStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询插件所有版本信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件所有版本信息
     * @param {string} domainId 租户ID
     * @param {string} [pluginName] 插件名
     * @param {string} [offset] 偏移
     * @param {string} [limit] 大小
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPLuginVersion(listPLuginVersionRequest?: ListPLuginVersionRequest): Promise<ListPLuginVersionResponse> {
        const options = ParamCreater().listPLuginVersion(listPLuginVersionRequest);

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
     * 查询插件版本号
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件版本号
     * @param {string} domainId 租户ID
     * @param {string} [pluginName] 插件名
     * @param {string} [offset] 偏移
     * @param {string} [limit] 大小
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPluginVersionNumber(listPluginVersionNumberRequest?: ListPluginVersionNumberRequest): Promise<ListPluginVersionNumberResponse> {
        const options = ParamCreater().listPluginVersionNumber(listPluginVersionNumberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询插件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件列表
     * @param {string} domainId 租户ID
     * @param {string} [offset] 偏移
     * @param {string} [limit] 大小
     * @param {AgentPluginInfoQueryDTO} [agentPluginInfoQueryDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPlugins(listPluginsRequest?: ListPluginsRequest): Promise<ListPluginsResponse> {
        const options = ParamCreater().listPlugins(listPluginsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目级开源治理策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目级开源治理策略列表
     * @param {boolean} includeTenantRuleSet 是否包含当前项目所属租户的策略
     * @param {string} [name] 策略名称
     * @param {string} [creatorName] 策略创建人名称
     * @param {number} [limit] 分页参数，默认15
     * @param {number} [offset] 分页参数，默认0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectOpenSourceStrategy(listProjectOpenSourceStrategyRequest?: ListProjectOpenSourceStrategyRequest): Promise<ListProjectOpenSourceStrategyResponse> {
        const options = ParamCreater().listProjectOpenSourceStrategy(listProjectOpenSourceStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取规则集列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取规则模板实例列表
     * @param {number} offset 偏移量，表示从此偏移量开始查询，offset大于等于0
     * @param {number} limit 每页显示的条目数量
     * @param {boolean} includeTenantRuleSet 是否包含租户级规则
     * @param {string} [name] 策略名称，用于模糊查询
     * @param {boolean} [isValid] 是否有效
     * @param {string} [type] 规则集类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectStrategy(listProjectStrategyRequest?: ListProjectStrategyRequest): Promise<ListProjectStrategyResponse> {
        const options = ParamCreater().listProjectStrategy(listProjectStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询发布商列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询发布商列表
     * @param {string} domainId 租户ID
     * @param {string} [offset] 偏移
     * @param {string} [limit] 大小
     * @param {string} [name] 名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPublisher(listPublisherRequest?: ListPublisherRequest): Promise<ListPublisherResponse> {
        const options = ParamCreater().listPublisher(listPublisherRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分页获取规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分页获取规则列表
     * @param {string} domainId 租户ID
     * @param {number} offset 偏移量，表示从此偏移量开始查询，offset大于等于0
     * @param {number} limit 每页显示的条目数量
     * @param {string} [cloudProjectId] 项目ID
     * @param {string} [type] 类型
     * @param {string} [name] 规则名称，用于模糊搜索
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRule(listRuleRequest?: ListRuleRequest): Promise<ListRuleResponse> {
        const options = ParamCreater().listRule(listRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可选插件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可选插件列表
     * @param {string} domainId 租户ID
     * @param {StagePluginsQueryDTO} [stagePluginsQueryDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStagePlugins(listStagePluginsRequest?: ListStagePluginsRequest): Promise<ListStagePluginsResponse> {
        const options = ParamCreater().listStagePlugins(listStagePluginsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取规则集列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取规则集列表
     * @param {string} domainId 租户ID
     * @param {number} offset 偏移量，表示从此偏移量开始查询，offset大于等于0
     * @param {number} limit 每页显示的条目数量
     * @param {boolean} includeTenantRuleSet 是否包含租户级规则
     * @param {string} [name] 策略名称，用于模糊查询
     * @param {boolean} [isValid] 是否有效
     * @param {string} [type] 规则集类型
     * @param {string} [cloudProjectId] 项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStrategy(listStrategyRequest?: ListStrategyRequest): Promise<ListStrategyResponse> {
        const options = ParamCreater().listStrategy(listStrategyRequest);

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
     * 发布插件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发布插件
     * @param {string} domainId 租户ID
     * @param {PublishPluginDTO} [publishPluginDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public publishPlugin(publishPluginRequest?: PublishPluginRequest): Promise<PublishPluginResponse> {
        const options = ParamCreater().publishPlugin(publishPluginRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 插件绑定发布商
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 插件绑定发布商
     * @param {string} domainId 租户ID
     * @param {PublishPluginDTO} [publishPluginDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public publishPluginBind(publishPluginBindRequest?: PublishPluginBindRequest): Promise<PublishPluginBindResponse> {
        const options = ParamCreater().publishPluginBind(publishPluginBindRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 发布插件草稿
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发布插件草稿
     * @param {string} domainId 租户ID
     * @param {PluginPartQueryDTO} [pluginPartQueryDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public publishPluginDraft(publishPluginDraftRequest?: PublishPluginDraftRequest): Promise<PublishPluginDraftResponse> {
        const options = ParamCreater().publishPluginDraft(publishPluginDraftRequest);

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
     * 查询基础插件详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询基础插件详情
     * @param {string} domainId 租户ID
     * @param {string} [pluginName] 插件名
     * @param {string} [version] 版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBasicPlugin(showBasicPluginRequest?: ShowBasicPluginRequest): Promise<ShowBasicPluginResponse> {
        const options = ParamCreater().showBasicPlugin(showBasicPluginRequest);

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
     * 查询租户级开源治理策略详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户级开源治理策略详情
     * @param {string} domainId 租户ID
     * @param {string} ruleSetId 规则集ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOpenSourceStrategy(showOpenSourceStrategyRequest?: ShowOpenSourceStrategyRequest): Promise<ShowOpenSourceStrategyResponse> {
        const options = ParamCreater().showOpenSourceStrategy(showOpenSourceStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流水线分组树
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流水线分组树
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPipelineGroupTree(showPipelineGroupTreeRequest?: ShowPipelineGroupTreeRequest): Promise<ShowPipelineGroupTreeResponse> {
        const options = ParamCreater().showPipelineGroupTree();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流水线日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流水线日志
     * @param {string} pipelineId 流水线ID
     * @param {string} pipelineRunId 流水线运行实例ID
     * @param {string} jobRunId 流水线任务ID
     * @param {string} stepRunId 流水线步骤ID
     * @param {LogQuery} body 查询日志请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPipelineLog(showPipelineLogRequest?: ShowPipelineLogRequest): Promise<ShowPipelineLogResponse> {
        const options = ParamCreater().showPipelineLog(showPipelineLogRequest);

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
     * 查询插件输入配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件输入配置
     * @param {string} domainId 租户ID
     * @param {Array<PluginPartQueryDTO>} [pluginPartQueryDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPluginInputs(showPluginInputsRequest?: ShowPluginInputsRequest): Promise<ShowPluginInputsResponse> {
        const options = ParamCreater().showPluginInputs(showPluginInputsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询插件指标配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件指标配置
     * @param {string} domainId 租户ID
     * @param {Array<PluginPartQueryDTO>} [pluginPartQueryDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPluginMetrics(showPluginMetricsRequest?: ShowPluginMetricsRequest): Promise<ShowPluginMetricsResponse> {
        const options = ParamCreater().showPluginMetrics(showPluginMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询插件输出配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件输出配置
     * @param {string} domainId 租户ID
     * @param {Array<PluginPartQueryDTO>} [pluginPartQueryDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPluginOutputs(showPluginOutputsRequest?: ShowPluginOutputsRequest): Promise<ShowPluginOutputsResponse> {
        const options = ParamCreater().showPluginOutputs(showPluginOutputsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询插件版本详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件版本详情
     * @param {string} domainId 租户ID
     * @param {string} [pluginName] 插件名
     * @param {string} [version] 版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPluginVersion(showPluginVersionRequest?: ShowPluginVersionRequest): Promise<ShowPluginVersionResponse> {
        const options = ParamCreater().showPluginVersion(showPluginVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目级开源治理策略详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目级开源治理策略详情
     * @param {string} ruleSetId 策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectOpenSourceStrategy(showProjectOpenSourceStrategyRequest?: ShowProjectOpenSourceStrategyRequest): Promise<ShowProjectOpenSourceStrategyResponse> {
        const options = ParamCreater().showProjectOpenSourceStrategy(showProjectOpenSourceStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目级策略详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {string} ruleSetId 策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectStrategy(showProjectStrategyRequest?: ShowProjectStrategyRequest): Promise<ShowProjectStrategyResponse> {
        const options = ParamCreater().showProjectStrategy(showProjectStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询发布商详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询发布商详情
     * @param {string} domainId 租户ID
     * @param {Array<string>} [arrayString] 发布商ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPublisher(showPublisherRequest?: ShowPublisherRequest): Promise<ShowPublisherResponse> {
        const options = ParamCreater().showPublisher(showPublisherRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取单条规则详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取单条规则详情
     * @param {string} domainId 租户ID
     * @param {string} ruleId 规则ID
     * @param {string} [cloudProjectId] 项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRule(showRuleRequest?: ShowRuleRequest): Promise<ShowRuleResponse> {
        const options = ParamCreater().showRule(showRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取规则集详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取规则集详情
     * @param {string} ruleSetId 规则集ID
     * @param {string} domainId 租户ID
     * @param {string} [cloudProjectId] 项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStrategy(showStrategyRequest?: ShowStrategyRequest): Promise<ShowStrategyResponse> {
        const options = ParamCreater().showStrategy(showStrategyRequest);

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

    /**
     * 修改租户级开源治理策略启用状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改租户级开源治理策略启用状态
     * @param {string} domainId 租户ID
     * @param {string} ruleSetId 策略ID
     * @param {UpdateRuleSetStatusReq} body 规则模版实例状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchOpenSourceStrategy(switchOpenSourceStrategyRequest?: SwitchOpenSourceStrategyRequest): Promise<SwitchOpenSourceStrategyResponse> {
        const options = ParamCreater().switchOpenSourceStrategy(switchOpenSourceStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改规则集状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开关规则集
     * @param {string} ruleSetId 规则集ID
     * @param {string} domainId 租户ID
     * @param {UpdateRuleSetStatusReq} body 规则模版实例状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchStrategy(switchStrategyRequest?: SwitchStrategyRequest): Promise<SwitchStrategyResponse> {
        const options = ParamCreater().switchStrategy(switchStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新基础插件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新基础插件
     * @param {string} domainId 租户ID
     * @param {PluginBasicDTO} [pluginBasicDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBasicPlugin(updateBasicPluginRequest?: UpdateBasicPluginRequest): Promise<UpdateBasicPluginResponse> {
        const options = ParamCreater().updateBasicPlugin(updateBasicPluginRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改租户级开源治理策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改租户级开源治理策略
     * @param {string} domainId 租户ID
     * @param {string} ruleSetId 规则集ID
     * @param {OpenSourceRuleSetCreateVO} body 修改开源治理策略实例详情
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateOpenSourceStrategy(updateOpenSourceStrategyRequest?: UpdateOpenSourceStrategyRequest): Promise<UpdateOpenSourceStrategyResponse> {
        const options = ParamCreater().updateOpenSourceStrategy(updateOpenSourceStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新流水线分组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新流水线分组
     * @param {PipelineGroupUpdateDTO} updatePipelineRequestBody 更新流水线分组参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePipelineGroup(updatePipelineGroupRequest?: UpdatePipelineGroupRequest): Promise<UpdatePipelineGroupResponse> {
        const options = ParamCreater().updatePipelineGroup(updatePipelineGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新流水线模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新流水线模板
     * @param {string} tenantId 租户ID
     * @param {string} templateId 模板ID
     * @param {PipelineTemplateDTO} [body] 修改模板请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePipelineTemplate(updatePipelineTemplateRequest?: UpdatePipelineTemplateRequest): Promise<UpdatePipelineTemplateResponse> {
        const options = ParamCreater().updatePipelineTemplate(updatePipelineTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新插件基本信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新插件基本信息
     * @param {string} domainId 租户ID
     * @param {PluginBasicDTO} [pluginBasicDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePluginBaseInfo(updatePluginBaseInfoRequest?: UpdatePluginBaseInfoRequest): Promise<UpdatePluginBaseInfoResponse> {
        const options = ParamCreater().updatePluginBaseInfo(updatePluginBaseInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新插件草稿
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新插件草稿
     * @param {string} domainId 租户ID
     * @param {PluginDTO} [pluginDTO] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePluginDraft(updatePluginDraftRequest?: UpdatePluginDraftRequest): Promise<UpdatePluginDraftResponse> {
        const options = ParamCreater().updatePluginDraft(updatePluginDraftRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新规则
     * @param {string} domainId 租户ID
     * @param {string} ruleId 规则ID
     * @param {UpdateRuleReq} body 规则详情
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRule(updateRuleRequest?: UpdateRuleRequest): Promise<UpdateRuleResponse> {
        const options = ParamCreater().updateRule(updateRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改规则集
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改规则集
     * @param {string} ruleSetId 规则集ID
     * @param {string} domainId 租户ID
     * @param {UpdateRuleSetReq} body 规则模版实例详情
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStrategy(updateStrategyRequest?: UpdateStrategyRequest): Promise<UpdateStrategyResponse> {
        const options = ParamCreater().updateStrategy(updateStrategyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 上传基础插件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传基础插件
     * @param {string} domainId 租户ID
     * @param {any} uploadFile 
     * @param {string} [pluginName] 插件名
     * @param {string} [businessType] 业务类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadBasicPlugin(uploadBasicPluginRequest?: UploadBasicPluginRequest): Promise<UploadBasicPluginResponse> {
        const options = ParamCreater().uploadBasicPlugin(uploadBasicPluginRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新插件图标
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新插件图标
     * @param {string} domainId 租户ID
     * @param {any} uploadFile 图标文件
     * @param {string} [pluginName] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadPluginIcon(uploadPluginIconRequest?: UploadPluginIconRequest): Promise<UploadPluginIconResponse> {
        const options = ParamCreater().uploadPluginIcon(uploadPluginIconRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新发布商图标
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新发布商图标
     * @param {string} domainId 租户ID
     * @param {any} uploadFile 图标文件
     * @param {string} [publisherEnName] 发布商名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadPublisherIcon(uploadPublisherIconRequest?: UploadPublisherIconRequest): Promise<UploadPublisherIconResponse> {
        const options = ParamCreater().uploadPublisherIcon(uploadPublisherIconRequest);

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
         * 批量把流水线移动到分组下
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchMovePipelineToGroup(batchMovePipelineToGroupRequest?: BatchMovePipelineToGroupRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/api/pipeline-group/pipeline/move",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchMovePipelineToGroupRequest !== null && batchMovePipelineToGroupRequest !== undefined) {
                if (batchMovePipelineToGroupRequest instanceof BatchMovePipelineToGroupRequest) {
                    body = batchMovePipelineToGroupRequest.body
                } else {
                    body = batchMovePipelineToGroupRequest['body'];
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
         * 创建基础插件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBasicPlugin(createBasicPluginRequest?: CreateBasicPluginRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/extension/info/add",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (createBasicPluginRequest !== null && createBasicPluginRequest !== undefined) {
                if (createBasicPluginRequest instanceof CreateBasicPluginRequest) {
                    domainId = createBasicPluginRequest.domainId;
                    body = createBasicPluginRequest.body
                } else {
                    domainId = createBasicPluginRequest['domain_id'];
                    body = createBasicPluginRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling createBasicPlugin.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建租户级开源治理策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOpenSourceStrategy(createOpenSourceStrategyRequest?: CreateOpenSourceStrategyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{domain_id}/tenant/open-source/rule-sets/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (createOpenSourceStrategyRequest !== null && createOpenSourceStrategyRequest !== undefined) {
                if (createOpenSourceStrategyRequest instanceof CreateOpenSourceStrategyRequest) {
                    domainId = createOpenSourceStrategyRequest.domainId;
                    body = createOpenSourceStrategyRequest.body
                } else {
                    domainId = createOpenSourceStrategyRequest['domain_id'];
                    body = createOpenSourceStrategyRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling createOpenSourceStrategy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
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
         * 新建流水线分组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPipelineGroup(createPipelineGroupRequest?: CreatePipelineGroupRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/api/pipeline-group/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPipelineGroupRequest !== null && createPipelineGroupRequest !== undefined) {
                if (createPipelineGroupRequest instanceof CreatePipelineGroupRequest) {
                    body = createPipelineGroupRequest.body
                } else {
                    body = createPipelineGroupRequest['body'];
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
         * 创建流水线模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPipelineTemplate(createPipelineTemplateRequest?: CreatePipelineTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v5/{tenant_id}/api/pipeline-templates",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let tenantId;

            if (createPipelineTemplateRequest !== null && createPipelineTemplateRequest !== undefined) {
                if (createPipelineTemplateRequest instanceof CreatePipelineTemplateRequest) {
                    tenantId = createPipelineTemplateRequest.tenantId;
                    body = createPipelineTemplateRequest.body
                } else {
                    tenantId = createPipelineTemplateRequest['tenant_id'];
                    body = createPipelineTemplateRequest['body'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling createPipelineTemplate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'tenant_id': tenantId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建插件草稿版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPluginDraft(createPluginDraftRequest?: CreatePluginDraftRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/agent-plugin/create-draft",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (createPluginDraftRequest !== null && createPluginDraftRequest !== undefined) {
                if (createPluginDraftRequest instanceof CreatePluginDraftRequest) {
                    domainId = createPluginDraftRequest.domainId;
                    body = createPluginDraftRequest.body
                } else {
                    domainId = createPluginDraftRequest['domain_id'];
                    body = createPluginDraftRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling createPluginDraft.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建插件版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPluginVersion(createPluginVersionRequest?: CreatePluginVersionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/agent-plugin/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (createPluginVersionRequest !== null && createPluginVersionRequest !== undefined) {
                if (createPluginVersionRequest instanceof CreatePluginVersionRequest) {
                    domainId = createPluginVersionRequest.domainId;
                    body = createPluginVersionRequest.body
                } else {
                    domainId = createPluginVersionRequest['domain_id'];
                    body = createPluginVersionRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling createPluginVersion.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建发布商
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPublisher(createPublisherRequest?: CreatePublisherRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/publisher/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (createPublisherRequest !== null && createPublisherRequest !== undefined) {
                if (createPublisherRequest instanceof CreatePublisherRequest) {
                    domainId = createPublisherRequest.domainId;
                    body = createPublisherRequest.body
                } else {
                    domainId = createPublisherRequest['domain_id'];
                    body = createPublisherRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling createPublisher.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRule(createRuleRequest?: CreateRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{domain_id}/rules/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (createRuleRequest !== null && createRuleRequest !== undefined) {
                if (createRuleRequest instanceof CreateRuleRequest) {
                    domainId = createRuleRequest.domainId;
                    body = createRuleRequest.body
                } else {
                    domainId = createRuleRequest['domain_id'];
                    body = createRuleRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling createRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建规则集
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStrategy(createStrategyRequest?: CreateStrategyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{domain_id}/tenant/rule-sets/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (createStrategyRequest !== null && createStrategyRequest !== undefined) {
                if (createStrategyRequest instanceof CreateStrategyRequest) {
                    domainId = createStrategyRequest.domainId;
                    body = createStrategyRequest.body
                } else {
                    domainId = createStrategyRequest['domain_id'];
                    body = createStrategyRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling createStrategy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除基础插件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBasicPlugin(deleteBasicPluginRequest?: DeleteBasicPluginRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{domain_id}/extension/info/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let pluginName;

            if (deleteBasicPluginRequest !== null && deleteBasicPluginRequest !== undefined) {
                if (deleteBasicPluginRequest instanceof DeleteBasicPluginRequest) {
                    domainId = deleteBasicPluginRequest.domainId;
                    pluginName = deleteBasicPluginRequest.pluginName;
                } else {
                    domainId = deleteBasicPluginRequest['domain_id'];
                    pluginName = deleteBasicPluginRequest['plugin_name'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling deleteBasicPlugin.');
            }
            if (pluginName !== null && pluginName !== undefined) {
                localVarQueryParameter['plugin_name'] = pluginName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除租户级开源治理策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteOpenSourceStrategy(deleteOpenSourceStrategyRequest?: DeleteOpenSourceStrategyRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{domain_id}/tenant/open-source/rule-sets/{rule_set_id}/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let ruleSetId;

            if (deleteOpenSourceStrategyRequest !== null && deleteOpenSourceStrategyRequest !== undefined) {
                if (deleteOpenSourceStrategyRequest instanceof DeleteOpenSourceStrategyRequest) {
                    domainId = deleteOpenSourceStrategyRequest.domainId;
                    ruleSetId = deleteOpenSourceStrategyRequest.ruleSetId;
                } else {
                    domainId = deleteOpenSourceStrategyRequest['domain_id'];
                    ruleSetId = deleteOpenSourceStrategyRequest['rule_set_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling deleteOpenSourceStrategy.');
            }
            if (ruleSetId === null || ruleSetId === undefined) {
            throw new RequiredError('ruleSetId','Required parameter ruleSetId was null or undefined when calling deleteOpenSourceStrategy.');
            }

            options.pathParams = { 'domain_id': domainId,'rule_set_id': ruleSetId, };
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
         * 删除流水线分组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePipelineGroup(deletePipelineGroupRequest?: DeletePipelineGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/api/pipeline-group/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;

            if (deletePipelineGroupRequest !== null && deletePipelineGroupRequest !== undefined) {
                if (deletePipelineGroupRequest instanceof DeletePipelineGroupRequest) {
                    id = deletePipelineGroupRequest.id;
                } else {
                    id = deletePipelineGroupRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deletePipelineGroup.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除流水线模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePipelineTemplate(deletePipelineTemplateRequest?: DeletePipelineTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{tenant_id}/api/pipeline-templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let tenantId;
            
            let templateId;

            if (deletePipelineTemplateRequest !== null && deletePipelineTemplateRequest !== undefined) {
                if (deletePipelineTemplateRequest instanceof DeletePipelineTemplateRequest) {
                    tenantId = deletePipelineTemplateRequest.tenantId;
                    templateId = deletePipelineTemplateRequest.templateId;
                } else {
                    tenantId = deletePipelineTemplateRequest['tenant_id'];
                    templateId = deletePipelineTemplateRequest['template_id'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling deletePipelineTemplate.');
            }
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling deletePipelineTemplate.');
            }

            options.pathParams = { 'tenant_id': tenantId,'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除插件草稿
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePluginDraft(deletePluginDraftRequest?: DeletePluginDraftRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{domain_id}/agent-plugin/delete-draft",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let pluginName;
            
            let version;

            if (deletePluginDraftRequest !== null && deletePluginDraftRequest !== undefined) {
                if (deletePluginDraftRequest instanceof DeletePluginDraftRequest) {
                    domainId = deletePluginDraftRequest.domainId;
                    pluginName = deletePluginDraftRequest.pluginName;
                    version = deletePluginDraftRequest.version;
                } else {
                    domainId = deletePluginDraftRequest['domain_id'];
                    pluginName = deletePluginDraftRequest['plugin_name'];
                    version = deletePluginDraftRequest['version'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling deletePluginDraft.');
            }
            if (pluginName !== null && pluginName !== undefined) {
                localVarQueryParameter['plugin_name'] = pluginName;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除发布商
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePublisher(deletePublisherRequest?: DeletePublisherRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{domain_id}/publisher/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let publisherUniqueId;

            if (deletePublisherRequest !== null && deletePublisherRequest !== undefined) {
                if (deletePublisherRequest instanceof DeletePublisherRequest) {
                    domainId = deletePublisherRequest.domainId;
                    publisherUniqueId = deletePublisherRequest.publisherUniqueId;
                } else {
                    domainId = deletePublisherRequest['domain_id'];
                    publisherUniqueId = deletePublisherRequest['publisher_unique_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling deletePublisher.');
            }
            if (publisherUniqueId !== null && publisherUniqueId !== undefined) {
                localVarQueryParameter['publisher_unique_id'] = publisherUniqueId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRule(deleteRuleRequest?: DeleteRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{domain_id}/rules/{rule_id}/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let ruleId;

            if (deleteRuleRequest !== null && deleteRuleRequest !== undefined) {
                if (deleteRuleRequest instanceof DeleteRuleRequest) {
                    domainId = deleteRuleRequest.domainId;
                    ruleId = deleteRuleRequest.ruleId;
                } else {
                    domainId = deleteRuleRequest['domain_id'];
                    ruleId = deleteRuleRequest['rule_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling deleteRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteRule.');
            }

            options.pathParams = { 'domain_id': domainId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除规则集
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStrategy(deleteStrategyRequest?: DeleteStrategyRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{domain_id}/tenant/rule-sets/{rule_set_id}/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleSetId;
            
            let domainId;

            if (deleteStrategyRequest !== null && deleteStrategyRequest !== undefined) {
                if (deleteStrategyRequest instanceof DeleteStrategyRequest) {
                    ruleSetId = deleteStrategyRequest.ruleSetId;
                    domainId = deleteStrategyRequest.domainId;
                } else {
                    ruleSetId = deleteStrategyRequest['rule_set_id'];
                    domainId = deleteStrategyRequest['domain_id'];
                }
            }

        
            if (ruleSetId === null || ruleSetId === undefined) {
            throw new RequiredError('ruleSetId','Required parameter ruleSetId was null or undefined when calling deleteStrategy.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling deleteStrategy.');
            }

            options.pathParams = { 'rule_set_id': ruleSetId,'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询可用发布商
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailablePublisher(listAvailablePublisherRequest?: ListAvailablePublisherRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/publisher/optional-publisher",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;

            if (listAvailablePublisherRequest !== null && listAvailablePublisherRequest !== undefined) {
                if (listAvailablePublisherRequest instanceof ListAvailablePublisherRequest) {
                    domainId = listAvailablePublisherRequest.domainId;
                } else {
                    domainId = listAvailablePublisherRequest['domain_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listAvailablePublisher.');
            }

            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询基础插件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBasePlugins(listBasePluginsRequest?: ListBasePluginsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/relation/plugin/single",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let attribution;
            
            let offset;
            
            let limit;

            if (listBasePluginsRequest !== null && listBasePluginsRequest !== undefined) {
                if (listBasePluginsRequest instanceof ListBasePluginsRequest) {
                    domainId = listBasePluginsRequest.domainId;
                    attribution = listBasePluginsRequest.attribution;
                    offset = listBasePluginsRequest.offset;
                    limit = listBasePluginsRequest.limit;
                } else {
                    domainId = listBasePluginsRequest['domain_id'];
                    attribution = listBasePluginsRequest['attribution'];
                    offset = listBasePluginsRequest['offset'];
                    limit = listBasePluginsRequest['limit'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listBasePlugins.');
            }
            if (attribution !== null && attribution !== undefined) {
                localVarQueryParameter['attribution'] = attribution;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页查询可选插件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBasePluginsNewPost(listBasePluginsNewPostRequest?: ListBasePluginsNewPostRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/relation/plugins",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let domainId;
            
            let offset;
            
            let limit;

            if (listBasePluginsNewPostRequest !== null && listBasePluginsNewPostRequest !== undefined) {
                if (listBasePluginsNewPostRequest instanceof ListBasePluginsNewPostRequest) {
                    domainId = listBasePluginsNewPostRequest.domainId;
                    offset = listBasePluginsNewPostRequest.offset;
                    limit = listBasePluginsNewPostRequest.limit;
                    body = listBasePluginsNewPostRequest.body
                } else {
                    domainId = listBasePluginsNewPostRequest['domain_id'];
                    offset = listBasePluginsNewPostRequest['offset'];
                    limit = listBasePluginsNewPostRequest['limit'];
                    body = listBasePluginsNewPostRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listBasePluginsNewPost.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listBasePluginsNewPost.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listBasePluginsNewPost.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户级开源治理策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOpenSourceStrategy(listOpenSourceStrategyRequest?: ListOpenSourceStrategyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/tenant/open-source/rule-sets/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let name;
            
            let creatorName;
            
            let limit;
            
            let offset;

            if (listOpenSourceStrategyRequest !== null && listOpenSourceStrategyRequest !== undefined) {
                if (listOpenSourceStrategyRequest instanceof ListOpenSourceStrategyRequest) {
                    domainId = listOpenSourceStrategyRequest.domainId;
                    name = listOpenSourceStrategyRequest.name;
                    creatorName = listOpenSourceStrategyRequest.creatorName;
                    limit = listOpenSourceStrategyRequest.limit;
                    offset = listOpenSourceStrategyRequest.offset;
                } else {
                    domainId = listOpenSourceStrategyRequest['domain_id'];
                    name = listOpenSourceStrategyRequest['name'];
                    creatorName = listOpenSourceStrategyRequest['creator_name'];
                    limit = listOpenSourceStrategyRequest['limit'];
                    offset = listOpenSourceStrategyRequest['offset'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listOpenSourceStrategy.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (creatorName !== null && creatorName !== undefined) {
                localVarQueryParameter['creator_name'] = creatorName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询插件所有版本信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPLuginVersion(listPLuginVersionRequest?: ListPLuginVersionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/agent-plugin/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let pluginName;
            
            let offset;
            
            let limit;

            if (listPLuginVersionRequest !== null && listPLuginVersionRequest !== undefined) {
                if (listPLuginVersionRequest instanceof ListPLuginVersionRequest) {
                    domainId = listPLuginVersionRequest.domainId;
                    pluginName = listPLuginVersionRequest.pluginName;
                    offset = listPLuginVersionRequest.offset;
                    limit = listPLuginVersionRequest.limit;
                } else {
                    domainId = listPLuginVersionRequest['domain_id'];
                    pluginName = listPLuginVersionRequest['plugin_name'];
                    offset = listPLuginVersionRequest['offset'];
                    limit = listPLuginVersionRequest['limit'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listPLuginVersion.');
            }
            if (pluginName !== null && pluginName !== undefined) {
                localVarQueryParameter['plugin_name'] = pluginName;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
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
         * 查询插件版本号
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPluginVersionNumber(listPluginVersionNumberRequest?: ListPluginVersionNumberRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/agent-plugin/all-version",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let pluginName;
            
            let offset;
            
            let limit;

            if (listPluginVersionNumberRequest !== null && listPluginVersionNumberRequest !== undefined) {
                if (listPluginVersionNumberRequest instanceof ListPluginVersionNumberRequest) {
                    domainId = listPluginVersionNumberRequest.domainId;
                    pluginName = listPluginVersionNumberRequest.pluginName;
                    offset = listPluginVersionNumberRequest.offset;
                    limit = listPluginVersionNumberRequest.limit;
                } else {
                    domainId = listPluginVersionNumberRequest['domain_id'];
                    pluginName = listPluginVersionNumberRequest['plugin_name'];
                    offset = listPluginVersionNumberRequest['offset'];
                    limit = listPluginVersionNumberRequest['limit'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listPluginVersionNumber.');
            }
            if (pluginName !== null && pluginName !== undefined) {
                localVarQueryParameter['plugin_name'] = pluginName;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询插件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPlugins(listPluginsRequest?: ListPluginsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/agent-plugin/query-all",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let domainId;
            
            let offset;
            
            let limit;

            if (listPluginsRequest !== null && listPluginsRequest !== undefined) {
                if (listPluginsRequest instanceof ListPluginsRequest) {
                    domainId = listPluginsRequest.domainId;
                    offset = listPluginsRequest.offset;
                    limit = listPluginsRequest.limit;
                    body = listPluginsRequest.body
                } else {
                    domainId = listPluginsRequest['domain_id'];
                    offset = listPluginsRequest['offset'];
                    limit = listPluginsRequest['limit'];
                    body = listPluginsRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listPlugins.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目级开源治理策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectOpenSourceStrategy(listProjectOpenSourceStrategyRequest?: ListProjectOpenSourceStrategyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/open-source/rule-sets/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let includeTenantRuleSet;
            
            let name;
            
            let creatorName;
            
            let limit;
            
            let offset;

            if (listProjectOpenSourceStrategyRequest !== null && listProjectOpenSourceStrategyRequest !== undefined) {
                if (listProjectOpenSourceStrategyRequest instanceof ListProjectOpenSourceStrategyRequest) {
                    includeTenantRuleSet = listProjectOpenSourceStrategyRequest.includeTenantRuleSet;
                    name = listProjectOpenSourceStrategyRequest.name;
                    creatorName = listProjectOpenSourceStrategyRequest.creatorName;
                    limit = listProjectOpenSourceStrategyRequest.limit;
                    offset = listProjectOpenSourceStrategyRequest.offset;
                } else {
                    includeTenantRuleSet = listProjectOpenSourceStrategyRequest['include_tenant_rule_set'];
                    name = listProjectOpenSourceStrategyRequest['name'];
                    creatorName = listProjectOpenSourceStrategyRequest['creator_name'];
                    limit = listProjectOpenSourceStrategyRequest['limit'];
                    offset = listProjectOpenSourceStrategyRequest['offset'];
                }
            }

        
            if (includeTenantRuleSet === null || includeTenantRuleSet === undefined) {
                throw new RequiredError('includeTenantRuleSet','Required parameter includeTenantRuleSet was null or undefined when calling listProjectOpenSourceStrategy.');
            }
            if (includeTenantRuleSet !== null && includeTenantRuleSet !== undefined) {
                localVarQueryParameter['include_tenant_rule_set'] = includeTenantRuleSet;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (creatorName !== null && creatorName !== undefined) {
                localVarQueryParameter['creator_name'] = creatorName;
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
         * 获取规则集列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectStrategy(listProjectStrategyRequest?: ListProjectStrategyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rule-sets/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let includeTenantRuleSet;
            
            let name;
            
            let isValid;
            
            let type;

            if (listProjectStrategyRequest !== null && listProjectStrategyRequest !== undefined) {
                if (listProjectStrategyRequest instanceof ListProjectStrategyRequest) {
                    offset = listProjectStrategyRequest.offset;
                    limit = listProjectStrategyRequest.limit;
                    includeTenantRuleSet = listProjectStrategyRequest.includeTenantRuleSet;
                    name = listProjectStrategyRequest.name;
                    isValid = listProjectStrategyRequest.isValid;
                    type = listProjectStrategyRequest.type;
                } else {
                    offset = listProjectStrategyRequest['offset'];
                    limit = listProjectStrategyRequest['limit'];
                    includeTenantRuleSet = listProjectStrategyRequest['include_tenant_rule_set'];
                    name = listProjectStrategyRequest['name'];
                    isValid = listProjectStrategyRequest['is_valid'];
                    type = listProjectStrategyRequest['type'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listProjectStrategy.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listProjectStrategy.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (includeTenantRuleSet === null || includeTenantRuleSet === undefined) {
                throw new RequiredError('includeTenantRuleSet','Required parameter includeTenantRuleSet was null or undefined when calling listProjectStrategy.');
            }
            if (includeTenantRuleSet !== null && includeTenantRuleSet !== undefined) {
                localVarQueryParameter['include_tenant_rule_set'] = includeTenantRuleSet;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (isValid !== null && isValid !== undefined) {
                localVarQueryParameter['is_valid'] = isValid;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询发布商列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPublisher(listPublisherRequest?: ListPublisherRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/publisher/query-all",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let offset;
            
            let limit;
            
            let name;

            if (listPublisherRequest !== null && listPublisherRequest !== undefined) {
                if (listPublisherRequest instanceof ListPublisherRequest) {
                    domainId = listPublisherRequest.domainId;
                    offset = listPublisherRequest.offset;
                    limit = listPublisherRequest.limit;
                    name = listPublisherRequest.name;
                } else {
                    domainId = listPublisherRequest['domain_id'];
                    offset = listPublisherRequest['offset'];
                    limit = listPublisherRequest['limit'];
                    name = listPublisherRequest['name'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listPublisher.');
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分页获取规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRule(listRuleRequest?: ListRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/rules/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let offset;
            
            let limit;
            
            let cloudProjectId;
            
            let type;
            
            let name;

            if (listRuleRequest !== null && listRuleRequest !== undefined) {
                if (listRuleRequest instanceof ListRuleRequest) {
                    domainId = listRuleRequest.domainId;
                    offset = listRuleRequest.offset;
                    limit = listRuleRequest.limit;
                    cloudProjectId = listRuleRequest.cloudProjectId;
                    type = listRuleRequest.type;
                    name = listRuleRequest.name;
                } else {
                    domainId = listRuleRequest['domain_id'];
                    offset = listRuleRequest['offset'];
                    limit = listRuleRequest['limit'];
                    cloudProjectId = listRuleRequest['cloud_project_id'];
                    type = listRuleRequest['type'];
                    name = listRuleRequest['name'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listRule.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listRule.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listRule.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (cloudProjectId !== null && cloudProjectId !== undefined) {
                localVarQueryParameter['cloud_project_id'] = cloudProjectId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询可选插件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStagePlugins(listStagePluginsRequest?: ListStagePluginsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/relation/stage-plugins",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (listStagePluginsRequest !== null && listStagePluginsRequest !== undefined) {
                if (listStagePluginsRequest instanceof ListStagePluginsRequest) {
                    domainId = listStagePluginsRequest.domainId;
                    body = listStagePluginsRequest.body
                } else {
                    domainId = listStagePluginsRequest['domain_id'];
                    body = listStagePluginsRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listStagePlugins.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取规则集列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStrategy(listStrategyRequest?: ListStrategyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/tenant/rule-sets/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let offset;
            
            let limit;
            
            let includeTenantRuleSet;
            
            let name;
            
            let isValid;
            
            let type;
            
            let cloudProjectId;

            if (listStrategyRequest !== null && listStrategyRequest !== undefined) {
                if (listStrategyRequest instanceof ListStrategyRequest) {
                    domainId = listStrategyRequest.domainId;
                    offset = listStrategyRequest.offset;
                    limit = listStrategyRequest.limit;
                    includeTenantRuleSet = listStrategyRequest.includeTenantRuleSet;
                    name = listStrategyRequest.name;
                    isValid = listStrategyRequest.isValid;
                    type = listStrategyRequest.type;
                    cloudProjectId = listStrategyRequest.cloudProjectId;
                } else {
                    domainId = listStrategyRequest['domain_id'];
                    offset = listStrategyRequest['offset'];
                    limit = listStrategyRequest['limit'];
                    includeTenantRuleSet = listStrategyRequest['include_tenant_rule_set'];
                    name = listStrategyRequest['name'];
                    isValid = listStrategyRequest['is_valid'];
                    type = listStrategyRequest['type'];
                    cloudProjectId = listStrategyRequest['cloud_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listStrategy.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listStrategy.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listStrategy.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (includeTenantRuleSet === null || includeTenantRuleSet === undefined) {
                throw new RequiredError('includeTenantRuleSet','Required parameter includeTenantRuleSet was null or undefined when calling listStrategy.');
            }
            if (includeTenantRuleSet !== null && includeTenantRuleSet !== undefined) {
                localVarQueryParameter['include_tenant_rule_set'] = includeTenantRuleSet;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (isValid !== null && isValid !== undefined) {
                localVarQueryParameter['is_valid'] = isValid;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (cloudProjectId !== null && cloudProjectId !== undefined) {
                localVarQueryParameter['cloud_project_id'] = cloudProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
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
         * 发布插件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        publishPlugin(publishPluginRequest?: PublishPluginRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/agent-plugin/publish-plugin",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (publishPluginRequest !== null && publishPluginRequest !== undefined) {
                if (publishPluginRequest instanceof PublishPluginRequest) {
                    domainId = publishPluginRequest.domainId;
                    body = publishPluginRequest.body
                } else {
                    domainId = publishPluginRequest['domain_id'];
                    body = publishPluginRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling publishPlugin.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 插件绑定发布商
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        publishPluginBind(publishPluginBindRequest?: PublishPluginBindRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/agent-plugin/publish-plugin-bind",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (publishPluginBindRequest !== null && publishPluginBindRequest !== undefined) {
                if (publishPluginBindRequest instanceof PublishPluginBindRequest) {
                    domainId = publishPluginBindRequest.domainId;
                    body = publishPluginBindRequest.body
                } else {
                    domainId = publishPluginBindRequest['domain_id'];
                    body = publishPluginBindRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling publishPluginBind.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 发布插件草稿
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        publishPluginDraft(publishPluginDraftRequest?: PublishPluginDraftRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/agent-plugin/publish-draft",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (publishPluginDraftRequest !== null && publishPluginDraftRequest !== undefined) {
                if (publishPluginDraftRequest instanceof PublishPluginDraftRequest) {
                    domainId = publishPluginDraftRequest.domainId;
                    body = publishPluginDraftRequest.body
                } else {
                    domainId = publishPluginDraftRequest['domain_id'];
                    body = publishPluginDraftRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling publishPluginDraft.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
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
         * 查询基础插件详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBasicPlugin(showBasicPluginRequest?: ShowBasicPluginRequest) {
            const options = {
                method: "GET",
                url: "/v3/{domain_id}/extension/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let pluginName;
            
            let version;

            if (showBasicPluginRequest !== null && showBasicPluginRequest !== undefined) {
                if (showBasicPluginRequest instanceof ShowBasicPluginRequest) {
                    domainId = showBasicPluginRequest.domainId;
                    pluginName = showBasicPluginRequest.pluginName;
                    version = showBasicPluginRequest.version;
                } else {
                    domainId = showBasicPluginRequest['domain_id'];
                    pluginName = showBasicPluginRequest['plugin_name'];
                    version = showBasicPluginRequest['version'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showBasicPlugin.');
            }
            if (pluginName !== null && pluginName !== undefined) {
                localVarQueryParameter['plugin_name'] = pluginName;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
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
         * 查询租户级开源治理策略详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOpenSourceStrategy(showOpenSourceStrategyRequest?: ShowOpenSourceStrategyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/tenant/open-source/rule-sets/{rule_set_id}/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let ruleSetId;

            if (showOpenSourceStrategyRequest !== null && showOpenSourceStrategyRequest !== undefined) {
                if (showOpenSourceStrategyRequest instanceof ShowOpenSourceStrategyRequest) {
                    domainId = showOpenSourceStrategyRequest.domainId;
                    ruleSetId = showOpenSourceStrategyRequest.ruleSetId;
                } else {
                    domainId = showOpenSourceStrategyRequest['domain_id'];
                    ruleSetId = showOpenSourceStrategyRequest['rule_set_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showOpenSourceStrategy.');
            }
            if (ruleSetId === null || ruleSetId === undefined) {
            throw new RequiredError('ruleSetId','Required parameter ruleSetId was null or undefined when calling showOpenSourceStrategy.');
            }

            options.pathParams = { 'domain_id': domainId,'rule_set_id': ruleSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询流水线分组树
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPipelineGroupTree() {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/api/pipeline-group/tree",
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
         * 查询流水线日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPipelineLog(showPipelineLogRequest?: ShowPipelineLogRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/api/pipelines/{pipeline_id}/pipeline-runs/{pipeline_run_id}/jobs/{job_run_id}/steps/{step_run_id}/logs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let pipelineId;
            
            let pipelineRunId;
            
            let jobRunId;
            
            let stepRunId;

            if (showPipelineLogRequest !== null && showPipelineLogRequest !== undefined) {
                if (showPipelineLogRequest instanceof ShowPipelineLogRequest) {
                    pipelineId = showPipelineLogRequest.pipelineId;
                    pipelineRunId = showPipelineLogRequest.pipelineRunId;
                    jobRunId = showPipelineLogRequest.jobRunId;
                    stepRunId = showPipelineLogRequest.stepRunId;
                    body = showPipelineLogRequest.body
                } else {
                    pipelineId = showPipelineLogRequest['pipeline_id'];
                    pipelineRunId = showPipelineLogRequest['pipeline_run_id'];
                    jobRunId = showPipelineLogRequest['job_run_id'];
                    stepRunId = showPipelineLogRequest['step_run_id'];
                    body = showPipelineLogRequest['body'];
                }
            }

        
            if (pipelineId === null || pipelineId === undefined) {
            throw new RequiredError('pipelineId','Required parameter pipelineId was null or undefined when calling showPipelineLog.');
            }
            if (pipelineRunId === null || pipelineRunId === undefined) {
            throw new RequiredError('pipelineRunId','Required parameter pipelineRunId was null or undefined when calling showPipelineLog.');
            }
            if (jobRunId === null || jobRunId === undefined) {
            throw new RequiredError('jobRunId','Required parameter jobRunId was null or undefined when calling showPipelineLog.');
            }
            if (stepRunId === null || stepRunId === undefined) {
            throw new RequiredError('stepRunId','Required parameter stepRunId was null or undefined when calling showPipelineLog.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'pipeline_id': pipelineId,'pipeline_run_id': pipelineRunId,'job_run_id': jobRunId,'step_run_id': stepRunId, };
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
         * 查询插件输入配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPluginInputs(showPluginInputsRequest?: ShowPluginInputsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/agent-plugin/plugin-input",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (showPluginInputsRequest !== null && showPluginInputsRequest !== undefined) {
                if (showPluginInputsRequest instanceof ShowPluginInputsRequest) {
                    domainId = showPluginInputsRequest.domainId;
                    body = showPluginInputsRequest.body
                } else {
                    domainId = showPluginInputsRequest['domain_id'];
                    body = showPluginInputsRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showPluginInputs.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询插件指标配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPluginMetrics(showPluginMetricsRequest?: ShowPluginMetricsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/agent-plugin/plugin-metrics",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (showPluginMetricsRequest !== null && showPluginMetricsRequest !== undefined) {
                if (showPluginMetricsRequest instanceof ShowPluginMetricsRequest) {
                    domainId = showPluginMetricsRequest.domainId;
                    body = showPluginMetricsRequest.body
                } else {
                    domainId = showPluginMetricsRequest['domain_id'];
                    body = showPluginMetricsRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showPluginMetrics.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询插件输出配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPluginOutputs(showPluginOutputsRequest?: ShowPluginOutputsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/agent-plugin/plugin-output",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (showPluginOutputsRequest !== null && showPluginOutputsRequest !== undefined) {
                if (showPluginOutputsRequest instanceof ShowPluginOutputsRequest) {
                    domainId = showPluginOutputsRequest.domainId;
                    body = showPluginOutputsRequest.body
                } else {
                    domainId = showPluginOutputsRequest['domain_id'];
                    body = showPluginOutputsRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showPluginOutputs.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询插件版本详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPluginVersion(showPluginVersionRequest?: ShowPluginVersionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/agent-plugin/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let pluginName;
            
            let version;

            if (showPluginVersionRequest !== null && showPluginVersionRequest !== undefined) {
                if (showPluginVersionRequest instanceof ShowPluginVersionRequest) {
                    domainId = showPluginVersionRequest.domainId;
                    pluginName = showPluginVersionRequest.pluginName;
                    version = showPluginVersionRequest.version;
                } else {
                    domainId = showPluginVersionRequest['domain_id'];
                    pluginName = showPluginVersionRequest['plugin_name'];
                    version = showPluginVersionRequest['version'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showPluginVersion.');
            }
            if (pluginName !== null && pluginName !== undefined) {
                localVarQueryParameter['plugin_name'] = pluginName;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目级开源治理策略详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectOpenSourceStrategy(showProjectOpenSourceStrategyRequest?: ShowProjectOpenSourceStrategyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/open-source/rule-sets/{rule_set_id}/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleSetId;

            if (showProjectOpenSourceStrategyRequest !== null && showProjectOpenSourceStrategyRequest !== undefined) {
                if (showProjectOpenSourceStrategyRequest instanceof ShowProjectOpenSourceStrategyRequest) {
                    ruleSetId = showProjectOpenSourceStrategyRequest.ruleSetId;
                } else {
                    ruleSetId = showProjectOpenSourceStrategyRequest['rule_set_id'];
                }
            }

        
            if (ruleSetId === null || ruleSetId === undefined) {
            throw new RequiredError('ruleSetId','Required parameter ruleSetId was null or undefined when calling showProjectOpenSourceStrategy.');
            }

            options.pathParams = { 'rule_set_id': ruleSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目级策略详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectStrategy(showProjectStrategyRequest?: ShowProjectStrategyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rule-sets/{rule_set_id}/gray/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleSetId;

            if (showProjectStrategyRequest !== null && showProjectStrategyRequest !== undefined) {
                if (showProjectStrategyRequest instanceof ShowProjectStrategyRequest) {
                    ruleSetId = showProjectStrategyRequest.ruleSetId;
                } else {
                    ruleSetId = showProjectStrategyRequest['rule_set_id'];
                }
            }

        
            if (ruleSetId === null || ruleSetId === undefined) {
            throw new RequiredError('ruleSetId','Required parameter ruleSetId was null or undefined when calling showProjectStrategy.');
            }

            options.pathParams = { 'rule_set_id': ruleSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询发布商详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPublisher(showPublisherRequest?: ShowPublisherRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/publisher/detail",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (showPublisherRequest !== null && showPublisherRequest !== undefined) {
                if (showPublisherRequest instanceof ShowPublisherRequest) {
                    domainId = showPublisherRequest.domainId;
                    body = showPublisherRequest.body
                } else {
                    domainId = showPublisherRequest['domain_id'];
                    body = showPublisherRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showPublisher.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取单条规则详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRule(showRuleRequest?: ShowRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/rules/{rule_id}/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let ruleId;
            
            let cloudProjectId;

            if (showRuleRequest !== null && showRuleRequest !== undefined) {
                if (showRuleRequest instanceof ShowRuleRequest) {
                    domainId = showRuleRequest.domainId;
                    ruleId = showRuleRequest.ruleId;
                    cloudProjectId = showRuleRequest.cloudProjectId;
                } else {
                    domainId = showRuleRequest['domain_id'];
                    ruleId = showRuleRequest['rule_id'];
                    cloudProjectId = showRuleRequest['cloud_project_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showRule.');
            }
            if (cloudProjectId !== null && cloudProjectId !== undefined) {
                localVarQueryParameter['cloud_project_id'] = cloudProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取规则集详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStrategy(showStrategyRequest?: ShowStrategyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/tenant/rule-sets/{rule_set_id}/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let ruleSetId;
            
            let domainId;
            
            let cloudProjectId;

            if (showStrategyRequest !== null && showStrategyRequest !== undefined) {
                if (showStrategyRequest instanceof ShowStrategyRequest) {
                    ruleSetId = showStrategyRequest.ruleSetId;
                    domainId = showStrategyRequest.domainId;
                    cloudProjectId = showStrategyRequest.cloudProjectId;
                } else {
                    ruleSetId = showStrategyRequest['rule_set_id'];
                    domainId = showStrategyRequest['domain_id'];
                    cloudProjectId = showStrategyRequest['cloud_project_id'];
                }
            }

        
            if (ruleSetId === null || ruleSetId === undefined) {
            throw new RequiredError('ruleSetId','Required parameter ruleSetId was null or undefined when calling showStrategy.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showStrategy.');
            }
            if (cloudProjectId !== null && cloudProjectId !== undefined) {
                localVarQueryParameter['cloud_project_id'] = cloudProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'rule_set_id': ruleSetId,'domain_id': domainId, };
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
    
        /**
         * 修改租户级开源治理策略启用状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchOpenSourceStrategy(switchOpenSourceStrategyRequest?: SwitchOpenSourceStrategyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{domain_id}/tenant/open-source/rule-sets/{rule_set_id}/switch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;
            
            let ruleSetId;

            if (switchOpenSourceStrategyRequest !== null && switchOpenSourceStrategyRequest !== undefined) {
                if (switchOpenSourceStrategyRequest instanceof SwitchOpenSourceStrategyRequest) {
                    domainId = switchOpenSourceStrategyRequest.domainId;
                    ruleSetId = switchOpenSourceStrategyRequest.ruleSetId;
                    body = switchOpenSourceStrategyRequest.body
                } else {
                    domainId = switchOpenSourceStrategyRequest['domain_id'];
                    ruleSetId = switchOpenSourceStrategyRequest['rule_set_id'];
                    body = switchOpenSourceStrategyRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling switchOpenSourceStrategy.');
            }
            if (ruleSetId === null || ruleSetId === undefined) {
            throw new RequiredError('ruleSetId','Required parameter ruleSetId was null or undefined when calling switchOpenSourceStrategy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId,'rule_set_id': ruleSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改规则集状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchStrategy(switchStrategyRequest?: SwitchStrategyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{domain_id}/tenant/rule-sets/{rule_set_id}/switch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ruleSetId;
            
            let domainId;

            if (switchStrategyRequest !== null && switchStrategyRequest !== undefined) {
                if (switchStrategyRequest instanceof SwitchStrategyRequest) {
                    ruleSetId = switchStrategyRequest.ruleSetId;
                    domainId = switchStrategyRequest.domainId;
                    body = switchStrategyRequest.body
                } else {
                    ruleSetId = switchStrategyRequest['rule_set_id'];
                    domainId = switchStrategyRequest['domain_id'];
                    body = switchStrategyRequest['body'];
                }
            }

        
            if (ruleSetId === null || ruleSetId === undefined) {
            throw new RequiredError('ruleSetId','Required parameter ruleSetId was null or undefined when calling switchStrategy.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling switchStrategy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'rule_set_id': ruleSetId,'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新基础插件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBasicPlugin(updateBasicPluginRequest?: UpdateBasicPluginRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/extension/info/update",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (updateBasicPluginRequest !== null && updateBasicPluginRequest !== undefined) {
                if (updateBasicPluginRequest instanceof UpdateBasicPluginRequest) {
                    domainId = updateBasicPluginRequest.domainId;
                    body = updateBasicPluginRequest.body
                } else {
                    domainId = updateBasicPluginRequest['domain_id'];
                    body = updateBasicPluginRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateBasicPlugin.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改租户级开源治理策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateOpenSourceStrategy(updateOpenSourceStrategyRequest?: UpdateOpenSourceStrategyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{domain_id}/tenant/open-source/rule-sets/{rule_set_id}/update",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;
            
            let ruleSetId;

            if (updateOpenSourceStrategyRequest !== null && updateOpenSourceStrategyRequest !== undefined) {
                if (updateOpenSourceStrategyRequest instanceof UpdateOpenSourceStrategyRequest) {
                    domainId = updateOpenSourceStrategyRequest.domainId;
                    ruleSetId = updateOpenSourceStrategyRequest.ruleSetId;
                    body = updateOpenSourceStrategyRequest.body
                } else {
                    domainId = updateOpenSourceStrategyRequest['domain_id'];
                    ruleSetId = updateOpenSourceStrategyRequest['rule_set_id'];
                    body = updateOpenSourceStrategyRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateOpenSourceStrategy.');
            }
            if (ruleSetId === null || ruleSetId === undefined) {
            throw new RequiredError('ruleSetId','Required parameter ruleSetId was null or undefined when calling updateOpenSourceStrategy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId,'rule_set_id': ruleSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新流水线分组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePipelineGroup(updatePipelineGroupRequest?: UpdatePipelineGroupRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/api/pipeline-group/update",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updatePipelineGroupRequest !== null && updatePipelineGroupRequest !== undefined) {
                if (updatePipelineGroupRequest instanceof UpdatePipelineGroupRequest) {
                    body = updatePipelineGroupRequest.body
                } else {
                    body = updatePipelineGroupRequest['body'];
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
         * 更新流水线模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePipelineTemplate(updatePipelineTemplateRequest?: UpdatePipelineTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{tenant_id}/api/pipeline-templates/{template_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let tenantId;
            
            let templateId;

            if (updatePipelineTemplateRequest !== null && updatePipelineTemplateRequest !== undefined) {
                if (updatePipelineTemplateRequest instanceof UpdatePipelineTemplateRequest) {
                    tenantId = updatePipelineTemplateRequest.tenantId;
                    templateId = updatePipelineTemplateRequest.templateId;
                    body = updatePipelineTemplateRequest.body
                } else {
                    tenantId = updatePipelineTemplateRequest['tenant_id'];
                    templateId = updatePipelineTemplateRequest['template_id'];
                    body = updatePipelineTemplateRequest['body'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling updatePipelineTemplate.');
            }
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling updatePipelineTemplate.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'tenant_id': tenantId,'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新插件基本信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePluginBaseInfo(updatePluginBaseInfoRequest?: UpdatePluginBaseInfoRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/agent-plugin/update-info",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (updatePluginBaseInfoRequest !== null && updatePluginBaseInfoRequest !== undefined) {
                if (updatePluginBaseInfoRequest instanceof UpdatePluginBaseInfoRequest) {
                    domainId = updatePluginBaseInfoRequest.domainId;
                    body = updatePluginBaseInfoRequest.body
                } else {
                    domainId = updatePluginBaseInfoRequest['domain_id'];
                    body = updatePluginBaseInfoRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updatePluginBaseInfo.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新插件草稿
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePluginDraft(updatePluginDraftRequest?: UpdatePluginDraftRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/agent-plugin/edit-draft",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;

            if (updatePluginDraftRequest !== null && updatePluginDraftRequest !== undefined) {
                if (updatePluginDraftRequest instanceof UpdatePluginDraftRequest) {
                    domainId = updatePluginDraftRequest.domainId;
                    body = updatePluginDraftRequest.body
                } else {
                    domainId = updatePluginDraftRequest['domain_id'];
                    body = updatePluginDraftRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updatePluginDraft.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRule(updateRuleRequest?: UpdateRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{domain_id}/rules/{rule_id}/update",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;
            
            let ruleId;

            if (updateRuleRequest !== null && updateRuleRequest !== undefined) {
                if (updateRuleRequest instanceof UpdateRuleRequest) {
                    domainId = updateRuleRequest.domainId;
                    ruleId = updateRuleRequest.ruleId;
                    body = updateRuleRequest.body
                } else {
                    domainId = updateRuleRequest['domain_id'];
                    ruleId = updateRuleRequest['rule_id'];
                    body = updateRuleRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改规则集
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStrategy(updateStrategyRequest?: UpdateStrategyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{domain_id}/tenant/rule-sets/{rule_set_id}/update",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ruleSetId;
            
            let domainId;

            if (updateStrategyRequest !== null && updateStrategyRequest !== undefined) {
                if (updateStrategyRequest instanceof UpdateStrategyRequest) {
                    ruleSetId = updateStrategyRequest.ruleSetId;
                    domainId = updateStrategyRequest.domainId;
                    body = updateStrategyRequest.body
                } else {
                    ruleSetId = updateStrategyRequest['rule_set_id'];
                    domainId = updateStrategyRequest['domain_id'];
                    body = updateStrategyRequest['body'];
                }
            }

        
            if (ruleSetId === null || ruleSetId === undefined) {
            throw new RequiredError('ruleSetId','Required parameter ruleSetId was null or undefined when calling updateStrategy.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateStrategy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'rule_set_id': ruleSetId,'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 上传基础插件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadBasicPlugin(uploadBasicPluginRequest?: UploadBasicPluginRequest) {
            const options = {
                method: "POST",
                url: "/v3/{domain_id}/extension/upload",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();
            
            let domainId;
            let uploadFile;
            
            
            let pluginName;
            
            let businessType;

            if (uploadBasicPluginRequest !== null && uploadBasicPluginRequest !== undefined) {
                if (uploadBasicPluginRequest instanceof UploadBasicPluginRequest) {
                    domainId = uploadBasicPluginRequest.domainId;
                    uploadFile = uploadBasicPluginRequest.body?.uploadFile;
                    pluginName = uploadBasicPluginRequest.pluginName;
                    businessType = uploadBasicPluginRequest.businessType;
                } else {
                    domainId = uploadBasicPluginRequest['domain_id'];
                    uploadFile = uploadBasicPluginRequest['body']['uploadFile'];
                    pluginName = uploadBasicPluginRequest['plugin_name'];
                    businessType = uploadBasicPluginRequest['business_type'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling uploadBasicPlugin.');
            }
            if (uploadFile === null || uploadFile === undefined) {
            throw new RequiredError('uploadFile','Required parameter uploadFile was null or undefined when calling uploadBasicPlugin.');
            }
            if (pluginName !== null && pluginName !== undefined) {
                localVarQueryParameter['plugin_name'] = pluginName;
            }
            if (businessType !== null && businessType !== undefined) {
                localVarQueryParameter['business_type'] = businessType;
            }
            if (uploadFile !== undefined) { 
                localVarFormParams.append('upload_file', uploadFile as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新插件图标
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadPluginIcon(uploadPluginIconRequest?: UploadPluginIconRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/common/upload-plugin-icon",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();
            
            let domainId;
            let uploadFile;
            
            
            let pluginName;

            if (uploadPluginIconRequest !== null && uploadPluginIconRequest !== undefined) {
                if (uploadPluginIconRequest instanceof UploadPluginIconRequest) {
                    domainId = uploadPluginIconRequest.domainId;
                    uploadFile = uploadPluginIconRequest.body?.uploadFile;
                    pluginName = uploadPluginIconRequest.pluginName;
                } else {
                    domainId = uploadPluginIconRequest['domain_id'];
                    uploadFile = uploadPluginIconRequest['body']['uploadFile'];
                    pluginName = uploadPluginIconRequest['plugin_name'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling uploadPluginIcon.');
            }
            if (uploadFile === null || uploadFile === undefined) {
            throw new RequiredError('uploadFile','Required parameter uploadFile was null or undefined when calling uploadPluginIcon.');
            }
            if (pluginName !== null && pluginName !== undefined) {
                localVarQueryParameter['plugin_name'] = pluginName;
            }
            if (uploadFile !== undefined) { 
                localVarFormParams.append('upload_file', uploadFile as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新发布商图标
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadPublisherIcon(uploadPublisherIconRequest?: UploadPublisherIconRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/common/upload-publisher-icon",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();
            
            let domainId;
            let uploadFile;
            
            
            let publisherEnName;

            if (uploadPublisherIconRequest !== null && uploadPublisherIconRequest !== undefined) {
                if (uploadPublisherIconRequest instanceof UploadPublisherIconRequest) {
                    domainId = uploadPublisherIconRequest.domainId;
                    uploadFile = uploadPublisherIconRequest.body?.uploadFile;
                    publisherEnName = uploadPublisherIconRequest.publisherEnName;
                } else {
                    domainId = uploadPublisherIconRequest['domain_id'];
                    uploadFile = uploadPublisherIconRequest['body']['uploadFile'];
                    publisherEnName = uploadPublisherIconRequest['publisher_en_name'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling uploadPublisherIcon.');
            }
            if (uploadFile === null || uploadFile === undefined) {
            throw new RequiredError('uploadFile','Required parameter uploadFile was null or undefined when calling uploadPublisherIcon.');
            }
            if (publisherEnName !== null && publisherEnName !== undefined) {
                localVarQueryParameter['publisher_en_name'] = publisherEnName;
            }
            if (uploadFile !== undefined) { 
                localVarFormParams.append('upload_file', uploadFile as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
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