import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { CheckConfigInfo } from './model/CheckConfigInfo';
import { CheckParametersRequest } from './model/CheckParametersRequest';
import { CheckParametersResponse } from './model/CheckParametersResponse';
import { CheckRecordDataInfo } from './model/CheckRecordDataInfo';
import { CheckRecordIssueCountsInfo } from './model/CheckRecordIssueCountsInfo';
import { CheckRecordRequest } from './model/CheckRecordRequest';
import { CheckRecordResponse } from './model/CheckRecordResponse';
import { CheckRulesetParametersRequest } from './model/CheckRulesetParametersRequest';
import { CheckRulesetParametersResponse } from './model/CheckRulesetParametersResponse';
import { ConfigTaskParameterBody } from './model/ConfigTaskParameterBody';
import { CreateRulesetRequest } from './model/CreateRulesetRequest';
import { CreateRulesetResponse } from './model/CreateRulesetResponse';
import { CreateTaskRequest } from './model/CreateTaskRequest';
import { CreateTaskRequestV2 } from './model/CreateTaskRequestV2';
import { CreateTaskResponse } from './model/CreateTaskResponse';
import { CustomAttributes } from './model/CustomAttributes';
import { CustomAttributesRule } from './model/CustomAttributesRule';
import { DefectEvents } from './model/DefectEvents';
import { DefectFragmentV2 } from './model/DefectFragmentV2';
import { DefectInfoV2 } from './model/DefectInfoV2';
import { DeleteRulesetRequest } from './model/DeleteRulesetRequest';
import { DeleteRulesetResponse } from './model/DeleteRulesetResponse';
import { DeleteTaskRequest } from './model/DeleteTaskRequest';
import { DeleteTaskResponse } from './model/DeleteTaskResponse';
import { IgnorePathSettingItem } from './model/IgnorePathSettingItem';
import { IncConfigV2 } from './model/IncConfigV2';
import { ListRulesRequest } from './model/ListRulesRequest';
import { ListRulesResponse } from './model/ListRulesResponse';
import { ListRulesetsRequest } from './model/ListRulesetsRequest';
import { ListRulesetsResponse } from './model/ListRulesetsResponse';
import { ListTaskParameterRequest } from './model/ListTaskParameterRequest';
import { ListTaskParameterResponse } from './model/ListTaskParameterResponse';
import { ListTaskRulesetRequest } from './model/ListTaskRulesetRequest';
import { ListTaskRulesetResponse } from './model/ListTaskRulesetResponse';
import { ListTemplateRulesRequest } from './model/ListTemplateRulesRequest';
import { ListTemplateRulesResponse } from './model/ListTemplateRulesResponse';
import { LogInfo } from './model/LogInfo';
import { MetricInfo } from './model/MetricInfo';
import { ParamInfo } from './model/ParamInfo';
import { ProgressDetailV2 } from './model/ProgressDetailV2';
import { RuleConfig } from './model/RuleConfig';
import { RuleItem } from './model/RuleItem';
import { RuleListItem } from './model/RuleListItem';
import { RuleSetV2 } from './model/RuleSetV2';
import { Ruleset } from './model/Ruleset';
import { RulesetItem } from './model/RulesetItem';
import { RunRequestV2 } from './model/RunRequestV2';
import { RunTaskRequest } from './model/RunTaskRequest';
import { RunTaskResponse } from './model/RunTaskResponse';
import { SetDefaulTemplateRequest } from './model/SetDefaulTemplateRequest';
import { SetDefaulTemplateResponse } from './model/SetDefaulTemplateResponse';
import { ShowProgressDetailRequest } from './model/ShowProgressDetailRequest';
import { ShowProgressDetailResponse } from './model/ShowProgressDetailResponse';
import { ShowTaskCmetricsRequest } from './model/ShowTaskCmetricsRequest';
import { ShowTaskCmetricsResponse } from './model/ShowTaskCmetricsResponse';
import { ShowTaskDefectsRequest } from './model/ShowTaskDefectsRequest';
import { ShowTaskDefectsResponse } from './model/ShowTaskDefectsResponse';
import { ShowTaskDefectsStatisticRequest } from './model/ShowTaskDefectsStatisticRequest';
import { ShowTaskDefectsStatisticResponse } from './model/ShowTaskDefectsStatisticResponse';
import { ShowTaskDetailRequest } from './model/ShowTaskDetailRequest';
import { ShowTaskDetailResponse } from './model/ShowTaskDetailResponse';
import { ShowTaskListByProjectIdRequest } from './model/ShowTaskListByProjectIdRequest';
import { ShowTaskListByProjectIdResponse } from './model/ShowTaskListByProjectIdResponse';
import { ShowTaskPathTreeRequest } from './model/ShowTaskPathTreeRequest';
import { ShowTaskPathTreeResponse } from './model/ShowTaskPathTreeResponse';
import { ShowTaskSettingsRequest } from './model/ShowTaskSettingsRequest';
import { ShowTaskSettingsResponse } from './model/ShowTaskSettingsResponse';
import { ShowTasklogRequest } from './model/ShowTasklogRequest';
import { ShowTasklogResponse } from './model/ShowTasklogResponse';
import { ShowTasksRulesetsRequest } from './model/ShowTasksRulesetsRequest';
import { ShowTasksRulesetsResponse } from './model/ShowTasksRulesetsResponse';
import { SimpleTaskInfoV2 } from './model/SimpleTaskInfoV2';
import { StatisticSeverityV2 } from './model/StatisticSeverityV2';
import { StatisticStatusV2 } from './model/StatisticStatusV2';
import { StopTaskByIdRequest } from './model/StopTaskByIdRequest';
import { StopTaskByIdResponse } from './model/StopTaskByIdResponse';
import { TaskAdvancedSettings } from './model/TaskAdvancedSettings';
import { TaskAdvancedSettingsItem } from './model/TaskAdvancedSettingsItem';
import { TaskCheckParamters } from './model/TaskCheckParamters';
import { TaskCheckSettingsItem } from './model/TaskCheckSettingsItem';
import { TaskRulesetInfo } from './model/TaskRulesetInfo';
import { TreeNode } from './model/TreeNode';
import { UpdateDefectRequestBody } from './model/UpdateDefectRequestBody';
import { UpdateDefectStatusRequest } from './model/UpdateDefectStatusRequest';
import { UpdateDefectStatusResponse } from './model/UpdateDefectStatusResponse';
import { UpdateIgnorePathRequest } from './model/UpdateIgnorePathRequest';
import { UpdateIgnorePathRequestBody } from './model/UpdateIgnorePathRequestBody';
import { UpdateIgnorePathResponse } from './model/UpdateIgnorePathResponse';
import { UpdateTaskRulesetItem } from './model/UpdateTaskRulesetItem';
import { UpdateTaskRulesetRequest } from './model/UpdateTaskRulesetRequest';
import { UpdateTaskRulesetResponse } from './model/UpdateTaskRulesetResponse';
import { UpdateTaskSettingsRequest } from './model/UpdateTaskSettingsRequest';
import { UpdateTaskSettingsRequestBody } from './model/UpdateTaskSettingsRequestBody';
import { UpdateTaskSettingsResponse } from './model/UpdateTaskSettingsResponse';

export class CodeArtsCheckClient {
    public static newBuilder(): ClientBuilder<CodeArtsCheckClient> {
            let client = new ClientBuilder<CodeArtsCheckClient>(newClient);
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
     * 查询任务规则集的检查参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务规则集的检查参数
     * @param {string} projectId 项目ID
     * @param {string} taskId 任务ID
     * @param {string} rulesetId 规则集ID
     * @param {string} language 规则集语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkParameters(checkParametersRequest?: CheckParametersRequest): Promise<CheckParametersResponse> {
        const options = ParamCreater().checkParameters(checkParametersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提供每次扫描的问题数量统计
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 历史扫描结果查询
     * @param {string} projectId 项目ID
     * @param {string} taskId 任务ID
     * @param {number} [offset] 分页索引，偏移量
     * @param {number} [limit] 每页显示的数量,每页最多显示1000条
     * @param {string} [startTime] 过滤开始时间,根据任务检查开始时间过滤
     * @param {string} [endTime] 过滤结束时间,根据任务检查开始时间过滤
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkRecord(checkRecordRequest?: CheckRecordRequest): Promise<CheckRecordResponse> {
        const options = ParamCreater().checkRecord(checkRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务规则集的检查参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务规则集的检查参数
     * @param {string} projectId 项目ID
     * @param {string} taskId 任务ID
     * @param {string} rulesetId 规则集ID
     * @param {string} language 规则集语言
     * @param {number} [offset] 分页索引，偏移量，非必填
     * @param {number} [limit] 每页显示的数量，非必填
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkRulesetParameters(checkRulesetParametersRequest?: CheckRulesetParametersRequest): Promise<CheckRulesetParametersResponse> {
        const options = ParamCreater().checkRulesetParameters(checkRulesetParametersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 可根据需求灵活的组合规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义规则集
     * @param {Ruleset} createRulesetRequestBody 创建规则集信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRuleset(createRulesetRequest?: CreateRulesetRequest): Promise<CreateRulesetResponse> {
        const options = ParamCreater().createRuleset(createRulesetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新建检查任务但是不执行。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建检查任务
     * @param {string} projectId 项目ID
     * @param {CreateTaskRequestV2} createTaskV2RequestBody 创建仓库的相关信息,check_type只支持source,language支持cpp,java,js,python,php,css,html,go,typescript,csharp
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
     * 删除自定义规则集，正在使用中的或默认规则集不能删除
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义规则集
     * @param {string} projectId 项目ID
     * @param {string} rulesetId 规则集ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRuleset(deleteRulesetRequest?: DeleteRulesetRequest): Promise<DeleteRulesetResponse> {
        const options = ParamCreater().deleteRuleset(deleteRulesetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除检查任务，执行中的任务删除无法再查看
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除检查任务
     * @param {string} taskId 检查任务ID
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
     * 根据语言、问题级别等条件查询规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取规则列表接口
     * @param {string} [ruleLanguages] 规则对应的语言
     * @param {string} [ruleSeverity] 缺陷等级，0致命，1严重，2一般，3提示
     * @param {number} [offset] 分页索引，偏移量
     * @param {number} [limit] 每页显示的数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRules(listRulesRequest?: ListRulesRequest): Promise<ListRulesResponse> {
        const options = ParamCreater().listRules(listRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据项目ID、语言等条件查询规则集列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规则集列表
     * @param {string} projectId 项目ID
     * @param {string} [category] 规则集类别  \&#39;0只查询系统规则集，1只查询当前用户自定义规则集，2只查询其他用户自定义规则集，\&#39;0,1,2\&#39;或\&#39;\&#39;查所有\&#39;
     * @param {number} [offset] 分页索引，偏移量
     * @param {number} [limit] 每页显示的数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRulesets(listRulesetsRequest?: ListRulesetsRequest): Promise<ListRulesetsResponse> {
        const options = ParamCreater().listRulesets(listRulesetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 任务配置检查参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 任务配置检查参数
     * @param {string} projectId 项目ID
     * @param {string} taskId 任务ID
     * @param {ConfigTaskParameterBody} listTaskParameterRequestBody 任务配置检查参数相关信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTaskParameter(listTaskParameterRequest?: ListTaskParameterRequest): Promise<ListTaskParameterResponse> {
        const options = ParamCreater().listTaskParameter(listTaskParameterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务的已选规则集列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务的已选规则集列表
     * @param {string} projectId 项目ID
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTaskRuleset(listTaskRulesetRequest?: ListTaskRulesetRequest): Promise<ListTaskRulesetResponse> {
        const options = ParamCreater().listTaskRuleset(listTaskRulesetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据项目ID、规则集ID等条件查询规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看规则集的规则列表
     * @param {string} projectId 项目ID
     * @param {string} rulesetId 规则集ID
     * @param {string} types 规则状态  \&#39;1查询全部，2已启动，3未启用\&#39;
     * @param {string} [languages] 规则语言
     * @param {string} [tags] 规则所属标签
     * @param {number} [offset] 分页索引，偏移量
     * @param {number} [limit] 每页显示的数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplateRules(listTemplateRulesRequest?: ListTemplateRulesRequest): Promise<ListTemplateRulesResponse> {
        const options = ParamCreater().listTemplateRules(listTemplateRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 执行检查任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行检查任务
     * @param {string} taskId 任务ID
     * @param {RunRequestV2} [runTaskV2RequestBody] 代码仓相关的信息，主要是用于CodeFever临时仓库使用，不填时直接使用创建任务时已经提供的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runTask(runTaskRequest?: RunTaskRequest): Promise<RunTaskResponse> {
        const options = ParamCreater().runTask(runTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置每个项目对应语言的默认规则集配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置每个项目对应语言的默认规则集配置
     * @param {string} projectId 项目ID
     * @param {string} rulesetId 规则集ID
     * @param {string} language 规则集语言
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setDefaulTemplate(setDefaulTemplateRequest?: SetDefaulTemplateRequest): Promise<SetDefaulTemplateResponse> {
        const options = ParamCreater().setDefaulTemplate(setDefaulTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据任务ID查询任务执行状态。任务状态：0表示检查中，1表示检查失败，2表示检查成功，3表示任务中止。只有正在检查中才有进度的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务执行状态
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProgressDetail(showProgressDetailRequest?: ShowProgressDetailRequest): Promise<ShowProgressDetailResponse> {
        const options = ParamCreater().showProgressDetail(showProgressDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据检查任务ID查询cmertrics缺陷概要。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询cmertrics缺陷概要
     * @param {string} projectId 项目ID
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTaskCmetrics(showTaskCmetricsRequest?: ShowTaskCmetricsRequest): Promise<ShowTaskCmetricsResponse> {
        const options = ParamCreater().showTaskCmetrics(showTaskCmetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据检查任务ID分页查询缺陷结果详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询缺陷详情
     * @param {string} taskId 任务ID
     * @param {number} [offset] 分页索引，偏移量
     * @param {number} [limit] 每页显示的数量,每页最多显示100条
     * @param {string} [statusIds] 问题状态筛选
     * @param {string} [severity] 严重级别，0致命，1严重，2一般，3提示
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTaskDefects(showTaskDefectsRequest?: ShowTaskDefectsRequest): Promise<ShowTaskDefectsResponse> {
        const options = ParamCreater().showTaskDefects(showTaskDefectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据检查任务ID查询缺陷详情的统计
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询缺陷详情的统计
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTaskDefectsStatistic(showTaskDefectsStatisticRequest?: ShowTaskDefectsStatisticRequest): Promise<ShowTaskDefectsStatisticResponse> {
        const options = ParamCreater().showTaskDefectsStatistic(showTaskDefectsStatisticRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据检查任务ID查询缺陷结果的概要。包括问题概述、问题状态、圈复杂度、代码重复率等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询缺陷概要
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTaskDetail(showTaskDetailRequest?: ShowTaskDetailRequest): Promise<ShowTaskDetailResponse> {
        const options = ParamCreater().showTaskDetail(showTaskDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据DEVCLOUD_PROJECT_UUID查询该项目下的任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务列表
     * @param {string} projectId 项目ID
     * @param {number} [offset] 分页索引，偏移量
     * @param {number} [limit] 每页显示的数量,每页最多显示100条
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTaskListByProjectId(showTaskListByProjectIdRequest?: ShowTaskListByProjectIdRequest): Promise<ShowTaskListByProjectIdResponse> {
        const options = ParamCreater().showTaskListByProjectId(showTaskListByProjectIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取任务的目录树
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务的目录树
     * @param {string} projectId 项目id
     * @param {string} taskId 任务id
     * @param {string} [currentPath] 目录或文件的路径
     * @param {number} [offset] 分页索引，偏移量
     * @param {number} [limit] 每页显示的数量,每页最多显示1000条
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTaskPathTree(showTaskPathTreeRequest?: ShowTaskPathTreeRequest): Promise<ShowTaskPathTreeResponse> {
        const options = ParamCreater().showTaskPathTree(showTaskPathTreeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务的高级选项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务的高级选项
     * @param {string} projectId 项目ID
     * @param {string} taskId 任务ID
     * @param {number} [offset] 分页索引，偏移量，非必填
     * @param {number} [limit] 每页显示的数量，非必填
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTaskSettings(showTaskSettingsRequest?: ShowTaskSettingsRequest): Promise<ShowTaskSettingsResponse> {
        const options = ParamCreater().showTaskSettings(showTaskSettingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务检查失败日志，不传execute_id则查询最近一次的检查日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务检查失败日志
     * @param {string} projectId 项目ID
     * @param {string} taskId 任务ID
     * @param {string} [executeId] 任务单次的执行ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTasklog(showTasklogRequest?: ShowTasklogRequest): Promise<ShowTasklogResponse> {
        const options = ParamCreater().showTasklog(showTasklogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务的已选规则集列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务的已选规则集列表
     * @param {string} projectId 项目ID
     * @param {string} taskId 任务ID
     * @param {number} [offset] 分页索引，偏移量
     * @param {number} [limit] 每页显示的数量,每页最多显示1000条
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTasksRulesets(showTasksRulesetsRequest?: ShowTasksRulesetsRequest): Promise<ShowTasksRulesetsResponse> {
        const options = ParamCreater().showTasksRulesets(showTasksRulesetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据任务ID终止检查任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 终止检查任务
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopTaskById(stopTaskByIdRequest?: StopTaskByIdRequest): Promise<StopTaskByIdResponse> {
        const options = ParamCreater().stopTaskById(stopTaskByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改检查出的缺陷的状态为已解决、已忽略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改缺陷状态
     * @param {string} taskId 任务id
     * @param {UpdateDefectRequestBody} updateDefectStatusV2RequestBody 缺陷要变更到的状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDefectStatus(updateDefectStatusRequest?: UpdateDefectStatusRequest): Promise<UpdateDefectStatusResponse> {
        const options = ParamCreater().updateDefectStatus(updateDefectStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 任务配置屏蔽目录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 任务配置屏蔽目录
     * @param {string} projectId 项目ID
     * @param {string} taskId 任务ID
     * @param {UpdateIgnorePathRequestBody} updateIgnorePathRequestBody 任务配置屏蔽目录的相关信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIgnorePath(updateIgnorePathRequest?: UpdateIgnorePathRequest): Promise<UpdateIgnorePathResponse> {
        const options = ParamCreater().updateIgnorePath(updateIgnorePathRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改任务规则集。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改任务规则集
     * @param {string} taskId 任务ID
     * @param {Array<UpdateTaskRulesetItem>} updateTaskRulesetRequestBody 修改规则集信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTaskRuleset(updateTaskRulesetRequest?: UpdateTaskRulesetRequest): Promise<UpdateTaskRulesetResponse> {
        const options = ParamCreater().updateTaskRuleset(updateTaskRulesetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 任务配置高级选项，如自定义镜像
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 任务配置高级选项
     * @param {string} projectId 项目ID
     * @param {string} taskId 任务ID
     * @param {UpdateTaskSettingsRequestBody} updateTaskSettingsRequestBody 任务配置高级选项的相关信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTaskSettings(updateTaskSettingsRequest?: UpdateTaskSettingsRequest): Promise<UpdateTaskSettingsResponse> {
        const options = ParamCreater().updateTaskSettings(updateTaskSettingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 查询任务规则集的检查参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkParameters(checkParametersRequest?: CheckParametersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/tasks/{task_id}/ruleset/{ruleset_id}/check-parameters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let taskId;
            
            let rulesetId;
            
            let language;

            if (checkParametersRequest !== null && checkParametersRequest !== undefined) {
                if (checkParametersRequest instanceof CheckParametersRequest) {
                    projectId = checkParametersRequest.projectId;
                    taskId = checkParametersRequest.taskId;
                    rulesetId = checkParametersRequest.rulesetId;
                    language = checkParametersRequest.language;
                } else {
                    projectId = checkParametersRequest['project_id'];
                    taskId = checkParametersRequest['task_id'];
                    rulesetId = checkParametersRequest['ruleset_id'];
                    language = checkParametersRequest['language'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling checkParameters.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling checkParameters.');
            }
            if (rulesetId === null || rulesetId === undefined) {
            throw new RequiredError('rulesetId','Required parameter rulesetId was null or undefined when calling checkParameters.');
            }
            if (language === null || language === undefined) {
                throw new RequiredError('language','Required parameter language was null or undefined when calling checkParameters.');
            }
            if (language !== null && language !== undefined) {
                localVarQueryParameter['language'] = language;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'task_id': taskId,'ruleset_id': rulesetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 提供每次扫描的问题数量统计
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkRecord(checkRecordRequest?: CheckRecordRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/tasks/{task_id}/checkrecord",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let taskId;
            
            let offset;
            
            let limit;
            
            let startTime;
            
            let endTime;

            if (checkRecordRequest !== null && checkRecordRequest !== undefined) {
                if (checkRecordRequest instanceof CheckRecordRequest) {
                    projectId = checkRecordRequest.projectId;
                    taskId = checkRecordRequest.taskId;
                    offset = checkRecordRequest.offset;
                    limit = checkRecordRequest.limit;
                    startTime = checkRecordRequest.startTime;
                    endTime = checkRecordRequest.endTime;
                } else {
                    projectId = checkRecordRequest['project_id'];
                    taskId = checkRecordRequest['task_id'];
                    offset = checkRecordRequest['offset'];
                    limit = checkRecordRequest['limit'];
                    startTime = checkRecordRequest['start_time'];
                    endTime = checkRecordRequest['end_time'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling checkRecord.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling checkRecord.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务规则集的检查参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkRulesetParameters(checkRulesetParametersRequest?: CheckRulesetParametersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/tasks/{task_id}/ruleset/{ruleset_id}/check-parameters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let taskId;
            
            let rulesetId;
            
            let language;
            
            let offset;
            
            let limit;

            if (checkRulesetParametersRequest !== null && checkRulesetParametersRequest !== undefined) {
                if (checkRulesetParametersRequest instanceof CheckRulesetParametersRequest) {
                    projectId = checkRulesetParametersRequest.projectId;
                    taskId = checkRulesetParametersRequest.taskId;
                    rulesetId = checkRulesetParametersRequest.rulesetId;
                    language = checkRulesetParametersRequest.language;
                    offset = checkRulesetParametersRequest.offset;
                    limit = checkRulesetParametersRequest.limit;
                } else {
                    projectId = checkRulesetParametersRequest['project_id'];
                    taskId = checkRulesetParametersRequest['task_id'];
                    rulesetId = checkRulesetParametersRequest['ruleset_id'];
                    language = checkRulesetParametersRequest['language'];
                    offset = checkRulesetParametersRequest['offset'];
                    limit = checkRulesetParametersRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling checkRulesetParameters.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling checkRulesetParameters.');
            }
            if (rulesetId === null || rulesetId === undefined) {
            throw new RequiredError('rulesetId','Required parameter rulesetId was null or undefined when calling checkRulesetParameters.');
            }
            if (language === null || language === undefined) {
                throw new RequiredError('language','Required parameter language was null or undefined when calling checkRulesetParameters.');
            }
            if (language !== null && language !== undefined) {
                localVarQueryParameter['language'] = language;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'task_id': taskId,'ruleset_id': rulesetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 可根据需求灵活的组合规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRuleset(createRulesetRequest?: CreateRulesetRequest) {
            const options = {
                method: "POST",
                url: "/v2/ruleset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createRulesetRequest !== null && createRulesetRequest !== undefined) {
                if (createRulesetRequest instanceof CreateRulesetRequest) {
                    body = createRulesetRequest.body
                } else {
                    body = createRulesetRequest['body'];
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
         * 新建检查任务但是不执行。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTask(createTaskRequest?: CreateTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createTaskRequest !== null && createTaskRequest !== undefined) {
                if (createTaskRequest instanceof CreateTaskRequest) {
                    projectId = createTaskRequest.projectId;
                    body = createTaskRequest.body
                } else {
                    projectId = createTaskRequest['project_id'];
                    body = createTaskRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createTask.');
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
         * 删除自定义规则集，正在使用中的或默认规则集不能删除
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRuleset(deleteRulesetRequest?: DeleteRulesetRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/ruleset/{ruleset_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let rulesetId;

            if (deleteRulesetRequest !== null && deleteRulesetRequest !== undefined) {
                if (deleteRulesetRequest instanceof DeleteRulesetRequest) {
                    projectId = deleteRulesetRequest.projectId;
                    rulesetId = deleteRulesetRequest.rulesetId;
                } else {
                    projectId = deleteRulesetRequest['project_id'];
                    rulesetId = deleteRulesetRequest['ruleset_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteRuleset.');
            }
            if (rulesetId === null || rulesetId === undefined) {
            throw new RequiredError('rulesetId','Required parameter rulesetId was null or undefined when calling deleteRuleset.');
            }

            options.pathParams = { 'project_id': projectId,'ruleset_id': rulesetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除检查任务，执行中的任务删除无法再查看
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTask(deleteTaskRequest?: DeleteTaskRequest) {
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
         * 根据语言、问题级别等条件查询规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRules(listRulesRequest?: ListRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let ruleLanguages;
            
            let ruleSeverity;
            
            let offset;
            
            let limit;

            if (listRulesRequest !== null && listRulesRequest !== undefined) {
                if (listRulesRequest instanceof ListRulesRequest) {
                    ruleLanguages = listRulesRequest.ruleLanguages;
                    ruleSeverity = listRulesRequest.ruleSeverity;
                    offset = listRulesRequest.offset;
                    limit = listRulesRequest.limit;
                } else {
                    ruleLanguages = listRulesRequest['rule_languages'];
                    ruleSeverity = listRulesRequest['rule_severity'];
                    offset = listRulesRequest['offset'];
                    limit = listRulesRequest['limit'];
                }
            }

        
            if (ruleLanguages !== null && ruleLanguages !== undefined) {
                localVarQueryParameter['rule_languages'] = ruleLanguages;
            }
            if (ruleSeverity !== null && ruleSeverity !== undefined) {
                localVarQueryParameter['rule_severity'] = ruleSeverity;
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
         * 根据项目ID、语言等条件查询规则集列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRulesets(listRulesetsRequest?: ListRulesetsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/rulesets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let category;
            
            let offset;
            
            let limit;

            if (listRulesetsRequest !== null && listRulesetsRequest !== undefined) {
                if (listRulesetsRequest instanceof ListRulesetsRequest) {
                    projectId = listRulesetsRequest.projectId;
                    category = listRulesetsRequest.category;
                    offset = listRulesetsRequest.offset;
                    limit = listRulesetsRequest.limit;
                } else {
                    projectId = listRulesetsRequest['project_id'];
                    category = listRulesetsRequest['category'];
                    offset = listRulesetsRequest['offset'];
                    limit = listRulesetsRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listRulesets.');
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 任务配置检查参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTaskParameter(listTaskParameterRequest?: ListTaskParameterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/tasks/{task_id}/config-parameters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let taskId;

            if (listTaskParameterRequest !== null && listTaskParameterRequest !== undefined) {
                if (listTaskParameterRequest instanceof ListTaskParameterRequest) {
                    projectId = listTaskParameterRequest.projectId;
                    taskId = listTaskParameterRequest.taskId;
                    body = listTaskParameterRequest.body
                } else {
                    projectId = listTaskParameterRequest['project_id'];
                    taskId = listTaskParameterRequest['task_id'];
                    body = listTaskParameterRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTaskParameter.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listTaskParameter.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务的已选规则集列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTaskRuleset(listTaskRulesetRequest?: ListTaskRulesetRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/tasks/{task_id}/rulesets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let taskId;

            if (listTaskRulesetRequest !== null && listTaskRulesetRequest !== undefined) {
                if (listTaskRulesetRequest instanceof ListTaskRulesetRequest) {
                    projectId = listTaskRulesetRequest.projectId;
                    taskId = listTaskRulesetRequest.taskId;
                } else {
                    projectId = listTaskRulesetRequest['project_id'];
                    taskId = listTaskRulesetRequest['task_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTaskRuleset.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listTaskRuleset.');
            }

            options.pathParams = { 'project_id': projectId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据项目ID、规则集ID等条件查询规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplateRules(listTemplateRulesRequest?: ListTemplateRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/ruleset/{ruleset_id}/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let rulesetId;
            
            let types;
            
            let languages;
            
            let tags;
            
            let offset;
            
            let limit;

            if (listTemplateRulesRequest !== null && listTemplateRulesRequest !== undefined) {
                if (listTemplateRulesRequest instanceof ListTemplateRulesRequest) {
                    projectId = listTemplateRulesRequest.projectId;
                    rulesetId = listTemplateRulesRequest.rulesetId;
                    types = listTemplateRulesRequest.types;
                    languages = listTemplateRulesRequest.languages;
                    tags = listTemplateRulesRequest.tags;
                    offset = listTemplateRulesRequest.offset;
                    limit = listTemplateRulesRequest.limit;
                } else {
                    projectId = listTemplateRulesRequest['project_id'];
                    rulesetId = listTemplateRulesRequest['ruleset_id'];
                    types = listTemplateRulesRequest['types'];
                    languages = listTemplateRulesRequest['languages'];
                    tags = listTemplateRulesRequest['tags'];
                    offset = listTemplateRulesRequest['offset'];
                    limit = listTemplateRulesRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTemplateRules.');
            }
            if (rulesetId === null || rulesetId === undefined) {
            throw new RequiredError('rulesetId','Required parameter rulesetId was null or undefined when calling listTemplateRules.');
            }
            if (types === null || types === undefined) {
                throw new RequiredError('types','Required parameter types was null or undefined when calling listTemplateRules.');
            }
            if (types !== null && types !== undefined) {
                localVarQueryParameter['types'] = types;
            }
            if (languages !== null && languages !== undefined) {
                localVarQueryParameter['languages'] = languages;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'ruleset_id': rulesetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 执行检查任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runTask(runTaskRequest?: RunTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2/tasks/{task_id}/run",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (runTaskRequest !== null && runTaskRequest !== undefined) {
                if (runTaskRequest instanceof RunTaskRequest) {
                    taskId = runTaskRequest.taskId;
                    body = runTaskRequest.body
                } else {
                    taskId = runTaskRequest['task_id'];
                    body = runTaskRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling runTask.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置每个项目对应语言的默认规则集配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setDefaulTemplate(setDefaulTemplateRequest?: SetDefaulTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/ruleset/{ruleset_id}/{language}/default",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let rulesetId;
            
            let language;

            if (setDefaulTemplateRequest !== null && setDefaulTemplateRequest !== undefined) {
                if (setDefaulTemplateRequest instanceof SetDefaulTemplateRequest) {
                    projectId = setDefaulTemplateRequest.projectId;
                    rulesetId = setDefaulTemplateRequest.rulesetId;
                    language = setDefaulTemplateRequest.language;
                } else {
                    projectId = setDefaulTemplateRequest['project_id'];
                    rulesetId = setDefaulTemplateRequest['ruleset_id'];
                    language = setDefaulTemplateRequest['language'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling setDefaulTemplate.');
            }
            if (rulesetId === null || rulesetId === undefined) {
            throw new RequiredError('rulesetId','Required parameter rulesetId was null or undefined when calling setDefaulTemplate.');
            }
            if (language === null || language === undefined) {
            throw new RequiredError('language','Required parameter language was null or undefined when calling setDefaulTemplate.');
            }

            options.pathParams = { 'project_id': projectId,'ruleset_id': rulesetId,'language': language, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据任务ID查询任务执行状态。任务状态：0表示检查中，1表示检查失败，2表示检查成功，3表示任务中止。只有正在检查中才有进度的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProgressDetail(showProgressDetailRequest?: ShowProgressDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/tasks/{task_id}/progress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showProgressDetailRequest !== null && showProgressDetailRequest !== undefined) {
                if (showProgressDetailRequest instanceof ShowProgressDetailRequest) {
                    taskId = showProgressDetailRequest.taskId;
                } else {
                    taskId = showProgressDetailRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showProgressDetail.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据检查任务ID查询cmertrics缺陷概要。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTaskCmetrics(showTaskCmetricsRequest?: ShowTaskCmetricsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/tasks/{task_id}/metrics-summary",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let taskId;

            if (showTaskCmetricsRequest !== null && showTaskCmetricsRequest !== undefined) {
                if (showTaskCmetricsRequest instanceof ShowTaskCmetricsRequest) {
                    projectId = showTaskCmetricsRequest.projectId;
                    taskId = showTaskCmetricsRequest.taskId;
                } else {
                    projectId = showTaskCmetricsRequest['project_id'];
                    taskId = showTaskCmetricsRequest['task_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTaskCmetrics.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showTaskCmetrics.');
            }

            options.pathParams = { 'project_id': projectId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据检查任务ID分页查询缺陷结果详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTaskDefects(showTaskDefectsRequest?: ShowTaskDefectsRequest) {
            const options = {
                method: "GET",
                url: "/v2/tasks/{task_id}/defects-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let offset;
            
            let limit;
            
            let statusIds;
            
            let severity;

            if (showTaskDefectsRequest !== null && showTaskDefectsRequest !== undefined) {
                if (showTaskDefectsRequest instanceof ShowTaskDefectsRequest) {
                    taskId = showTaskDefectsRequest.taskId;
                    offset = showTaskDefectsRequest.offset;
                    limit = showTaskDefectsRequest.limit;
                    statusIds = showTaskDefectsRequest.statusIds;
                    severity = showTaskDefectsRequest.severity;
                } else {
                    taskId = showTaskDefectsRequest['task_id'];
                    offset = showTaskDefectsRequest['offset'];
                    limit = showTaskDefectsRequest['limit'];
                    statusIds = showTaskDefectsRequest['status_ids'];
                    severity = showTaskDefectsRequest['severity'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showTaskDefects.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (statusIds !== null && statusIds !== undefined) {
                localVarQueryParameter['status_ids'] = statusIds;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据检查任务ID查询缺陷详情的统计
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTaskDefectsStatistic(showTaskDefectsStatisticRequest?: ShowTaskDefectsStatisticRequest) {
            const options = {
                method: "GET",
                url: "/v2/tasks/{task_id}/defects-statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showTaskDefectsStatisticRequest !== null && showTaskDefectsStatisticRequest !== undefined) {
                if (showTaskDefectsStatisticRequest instanceof ShowTaskDefectsStatisticRequest) {
                    taskId = showTaskDefectsStatisticRequest.taskId;
                } else {
                    taskId = showTaskDefectsStatisticRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showTaskDefectsStatistic.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据检查任务ID查询缺陷结果的概要。包括问题概述、问题状态、圈复杂度、代码重复率等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTaskDetail(showTaskDetailRequest?: ShowTaskDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/tasks/{task_id}/defects-summary",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (showTaskDetailRequest !== null && showTaskDetailRequest !== undefined) {
                if (showTaskDetailRequest instanceof ShowTaskDetailRequest) {
                    taskId = showTaskDetailRequest.taskId;
                } else {
                    taskId = showTaskDetailRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showTaskDetail.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据DEVCLOUD_PROJECT_UUID查询该项目下的任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTaskListByProjectId(showTaskListByProjectIdRequest?: ShowTaskListByProjectIdRequest) {
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
            
            let projectId;
            
            let offset;
            
            let limit;

            if (showTaskListByProjectIdRequest !== null && showTaskListByProjectIdRequest !== undefined) {
                if (showTaskListByProjectIdRequest instanceof ShowTaskListByProjectIdRequest) {
                    projectId = showTaskListByProjectIdRequest.projectId;
                    offset = showTaskListByProjectIdRequest.offset;
                    limit = showTaskListByProjectIdRequest.limit;
                } else {
                    projectId = showTaskListByProjectIdRequest['project_id'];
                    offset = showTaskListByProjectIdRequest['offset'];
                    limit = showTaskListByProjectIdRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTaskListByProjectId.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取任务的目录树
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTaskPathTree(showTaskPathTreeRequest?: ShowTaskPathTreeRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/tasks/{task_id}/listpathtree",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let taskId;
            
            let currentPath;
            
            let offset;
            
            let limit;

            if (showTaskPathTreeRequest !== null && showTaskPathTreeRequest !== undefined) {
                if (showTaskPathTreeRequest instanceof ShowTaskPathTreeRequest) {
                    projectId = showTaskPathTreeRequest.projectId;
                    taskId = showTaskPathTreeRequest.taskId;
                    currentPath = showTaskPathTreeRequest.currentPath;
                    offset = showTaskPathTreeRequest.offset;
                    limit = showTaskPathTreeRequest.limit;
                } else {
                    projectId = showTaskPathTreeRequest['project_id'];
                    taskId = showTaskPathTreeRequest['task_id'];
                    currentPath = showTaskPathTreeRequest['current_path'];
                    offset = showTaskPathTreeRequest['offset'];
                    limit = showTaskPathTreeRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTaskPathTree.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showTaskPathTree.');
            }
            if (currentPath !== null && currentPath !== undefined) {
                localVarQueryParameter['current_path'] = currentPath;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务的高级选项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTaskSettings(showTaskSettingsRequest?: ShowTaskSettingsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/tasks/{task_id}/settings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let taskId;
            
            let offset;
            
            let limit;

            if (showTaskSettingsRequest !== null && showTaskSettingsRequest !== undefined) {
                if (showTaskSettingsRequest instanceof ShowTaskSettingsRequest) {
                    projectId = showTaskSettingsRequest.projectId;
                    taskId = showTaskSettingsRequest.taskId;
                    offset = showTaskSettingsRequest.offset;
                    limit = showTaskSettingsRequest.limit;
                } else {
                    projectId = showTaskSettingsRequest['project_id'];
                    taskId = showTaskSettingsRequest['task_id'];
                    offset = showTaskSettingsRequest['offset'];
                    limit = showTaskSettingsRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTaskSettings.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showTaskSettings.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务检查失败日志，不传execute_id则查询最近一次的检查日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTasklog(showTasklogRequest?: ShowTasklogRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/tasks/{task_id}/log-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let taskId;
            
            let executeId;

            if (showTasklogRequest !== null && showTasklogRequest !== undefined) {
                if (showTasklogRequest instanceof ShowTasklogRequest) {
                    projectId = showTasklogRequest.projectId;
                    taskId = showTasklogRequest.taskId;
                    executeId = showTasklogRequest.executeId;
                } else {
                    projectId = showTasklogRequest['project_id'];
                    taskId = showTasklogRequest['task_id'];
                    executeId = showTasklogRequest['execute_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTasklog.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showTasklog.');
            }
            if (executeId !== null && executeId !== undefined) {
                localVarQueryParameter['execute_id'] = executeId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务的已选规则集列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTasksRulesets(showTasksRulesetsRequest?: ShowTasksRulesetsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/tasks/{task_id}/rulesets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let taskId;
            
            let offset;
            
            let limit;

            if (showTasksRulesetsRequest !== null && showTasksRulesetsRequest !== undefined) {
                if (showTasksRulesetsRequest instanceof ShowTasksRulesetsRequest) {
                    projectId = showTasksRulesetsRequest.projectId;
                    taskId = showTasksRulesetsRequest.taskId;
                    offset = showTasksRulesetsRequest.offset;
                    limit = showTasksRulesetsRequest.limit;
                } else {
                    projectId = showTasksRulesetsRequest['project_id'];
                    taskId = showTasksRulesetsRequest['task_id'];
                    offset = showTasksRulesetsRequest['offset'];
                    limit = showTasksRulesetsRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTasksRulesets.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showTasksRulesets.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据任务ID终止检查任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopTaskById(stopTaskByIdRequest?: StopTaskByIdRequest) {
            const options = {
                method: "POST",
                url: "/v2/tasks/{task_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (stopTaskByIdRequest !== null && stopTaskByIdRequest !== undefined) {
                if (stopTaskByIdRequest instanceof StopTaskByIdRequest) {
                    taskId = stopTaskByIdRequest.taskId;
                } else {
                    taskId = stopTaskByIdRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling stopTaskById.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改检查出的缺陷的状态为已解决、已忽略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDefectStatus(updateDefectStatusRequest?: UpdateDefectStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v2/tasks/{task_id}/defect-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (updateDefectStatusRequest !== null && updateDefectStatusRequest !== undefined) {
                if (updateDefectStatusRequest instanceof UpdateDefectStatusRequest) {
                    taskId = updateDefectStatusRequest.taskId;
                    body = updateDefectStatusRequest.body
                } else {
                    taskId = updateDefectStatusRequest['task_id'];
                    body = updateDefectStatusRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateDefectStatus.');
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
         * 任务配置屏蔽目录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIgnorePath(updateIgnorePathRequest?: UpdateIgnorePathRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/tasks/{task_id}/config-ignorepath",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let taskId;

            if (updateIgnorePathRequest !== null && updateIgnorePathRequest !== undefined) {
                if (updateIgnorePathRequest instanceof UpdateIgnorePathRequest) {
                    projectId = updateIgnorePathRequest.projectId;
                    taskId = updateIgnorePathRequest.taskId;
                    body = updateIgnorePathRequest.body
                } else {
                    projectId = updateIgnorePathRequest['project_id'];
                    taskId = updateIgnorePathRequest['task_id'];
                    body = updateIgnorePathRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateIgnorePath.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateIgnorePath.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改任务规则集。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTaskRuleset(updateTaskRulesetRequest?: UpdateTaskRulesetRequest) {
            const options = {
                method: "PUT",
                url: "/v2/tasks/{task_id}/ruleset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;

            if (updateTaskRulesetRequest !== null && updateTaskRulesetRequest !== undefined) {
                if (updateTaskRulesetRequest instanceof UpdateTaskRulesetRequest) {
                    taskId = updateTaskRulesetRequest.taskId;
                    body = updateTaskRulesetRequest.body
                } else {
                    taskId = updateTaskRulesetRequest['task_id'];
                    body = updateTaskRulesetRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateTaskRuleset.');
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
         * 任务配置高级选项，如自定义镜像
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTaskSettings(updateTaskSettingsRequest?: UpdateTaskSettingsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/tasks/{task_id}/settings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;
            
            let taskId;

            if (updateTaskSettingsRequest !== null && updateTaskSettingsRequest !== undefined) {
                if (updateTaskSettingsRequest instanceof UpdateTaskSettingsRequest) {
                    projectId = updateTaskSettingsRequest.projectId;
                    taskId = updateTaskSettingsRequest.taskId;
                    body = updateTaskSettingsRequest.body
                } else {
                    projectId = updateTaskSettingsRequest['project_id'];
                    taskId = updateTaskSettingsRequest['task_id'];
                    body = updateTaskSettingsRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateTaskSettings.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling updateTaskSettings.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CodeArtsCheckClient {
    return new CodeArtsCheckClient(client);
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