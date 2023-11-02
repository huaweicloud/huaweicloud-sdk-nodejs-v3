import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddRdsNoAgentDatabaseRequest } from './model/AddRdsNoAgentDatabaseRequest';
import { AddRdsNoAgentDatabaseResponse } from './model/AddRdsNoAgentDatabaseResponse';
import { AgentSwitchRequest } from './model/AgentSwitchRequest';
import { AuditInstanceListBean } from './model/AuditInstanceListBean';
import { AzInfo } from './model/AzInfo';
import { BatchAddResourceTagRequest } from './model/BatchAddResourceTagRequest';
import { BatchAddResourceTagResponse } from './model/BatchAddResourceTagResponse';
import { BatchDeleteResourceTagRequest } from './model/BatchDeleteResourceTagRequest';
import { BatchDeleteResourceTagResponse } from './model/BatchDeleteResourceTagResponse';
import { BatchSwitchesRequest } from './model/BatchSwitchesRequest';
import { CountResourceInstanceByTagRequest } from './model/CountResourceInstanceByTagRequest';
import { CountResourceInstanceByTagResponse } from './model/CountResourceInstanceByTagResponse';
import { CreateInstancePeriodRequest } from './model/CreateInstancePeriodRequest';
import { CreateInstancePeriodRequestNics } from './model/CreateInstancePeriodRequestNics';
import { CreateInstancePeriodRequestProductInfos } from './model/CreateInstancePeriodRequestProductInfos';
import { CreateInstancePeriodRequestSecurityGroups } from './model/CreateInstancePeriodRequestSecurityGroups';
import { CreateInstancesPeriodOrderRequest } from './model/CreateInstancesPeriodOrderRequest';
import { CreateInstancesPeriodOrderResponse } from './model/CreateInstancesPeriodOrderResponse';
import { DataBase } from './model/DataBase';
import { DataBaseBean } from './model/DataBaseBean';
import { EcsSpecificationBean } from './model/EcsSpecificationBean';
import { JobBean } from './model/JobBean';
import { KeyValueBean } from './model/KeyValueBean';
import { ListAuditDatabasesRequest } from './model/ListAuditDatabasesRequest';
import { ListAuditDatabasesResponse } from './model/ListAuditDatabasesResponse';
import { ListAuditInstanceJobsRequest } from './model/ListAuditInstanceJobsRequest';
import { ListAuditInstanceJobsResponse } from './model/ListAuditInstanceJobsResponse';
import { ListAuditInstancesRequest } from './model/ListAuditInstancesRequest';
import { ListAuditInstancesResponse } from './model/ListAuditInstancesResponse';
import { ListAuditOperateLogsRequest } from './model/ListAuditOperateLogsRequest';
import { ListAuditOperateLogsResponse } from './model/ListAuditOperateLogsResponse';
import { ListAuditRuleRisksRequest } from './model/ListAuditRuleRisksRequest';
import { ListAuditRuleRisksResponse } from './model/ListAuditRuleRisksResponse';
import { ListAuditRuleScopesRequest } from './model/ListAuditRuleScopesRequest';
import { ListAuditRuleScopesResponse } from './model/ListAuditRuleScopesResponse';
import { ListAuditSensitiveMasksRequest } from './model/ListAuditSensitiveMasksRequest';
import { ListAuditSensitiveMasksResponse } from './model/ListAuditSensitiveMasksResponse';
import { ListAvailabilityZoneInfosRequest } from './model/ListAvailabilityZoneInfosRequest';
import { ListAvailabilityZoneInfosResponse } from './model/ListAvailabilityZoneInfosResponse';
import { ListEcsSpecificationRequest } from './model/ListEcsSpecificationRequest';
import { ListEcsSpecificationResponse } from './model/ListEcsSpecificationResponse';
import { ListProjectResourceTagsRequest } from './model/ListProjectResourceTagsRequest';
import { ListProjectResourceTagsResponse } from './model/ListProjectResourceTagsResponse';
import { ListResourceInstanceByTagRequest } from './model/ListResourceInstanceByTagRequest';
import { ListResourceInstanceByTagResponse } from './model/ListResourceInstanceByTagResponse';
import { ListSqlInjectionRulesRequest } from './model/ListSqlInjectionRulesRequest';
import { ListSqlInjectionRulesResponse } from './model/ListSqlInjectionRulesResponse';
import { OperateLogGetRequest } from './model/OperateLogGetRequest';
import { OperateLogInfo } from './model/OperateLogInfo';
import { ProjectResourceTagResponseTags } from './model/ProjectResourceTagResponseTags';
import { RdsNoAgentDbRequest } from './model/RdsNoAgentDbRequest';
import { RdsNoAgentDbRequestDatabases } from './model/RdsNoAgentDbRequestDatabases';
import { ResourceInstanceResponseResources } from './model/ResourceInstanceResponseResources';
import { ResourceInstanceResponseSysTags } from './model/ResourceInstanceResponseSysTags';
import { ResourceInstanceResponseTags } from './model/ResourceInstanceResponseTags';
import { ResourceInstanceTagRequest } from './model/ResourceInstanceTagRequest';
import { ResourceInstanceTagRequestMatches } from './model/ResourceInstanceTagRequestMatches';
import { ResourceTagRequest } from './model/ResourceTagRequest';
import { RuleRiskInfoBeanSchemas } from './model/RuleRiskInfoBeanSchemas';
import { RuleRiskResponseRules } from './model/RuleRiskResponseRules';
import { RuleScopeInfo } from './model/RuleScopeInfo';
import { SecurityGroupRequest } from './model/SecurityGroupRequest';
import { SensitiveMaskResponseRules } from './model/SensitiveMaskResponseRules';
import { ShowAuditQuotaRequest } from './model/ShowAuditQuotaRequest';
import { ShowAuditQuotaResponse } from './model/ShowAuditQuotaResponse';
import { ShowAuditRuleRiskRequest } from './model/ShowAuditRuleRiskRequest';
import { ShowAuditRuleRiskResponse } from './model/ShowAuditRuleRiskResponse';
import { SqlRuleRequest } from './model/SqlRuleRequest';
import { SqlRuleResponseRules } from './model/SqlRuleResponseRules';
import { SwitchAgentRequest } from './model/SwitchAgentRequest';
import { SwitchAgentResponse } from './model/SwitchAgentResponse';
import { SwitchRiskRuleRequest } from './model/SwitchRiskRuleRequest';
import { SwitchRiskRuleResponse } from './model/SwitchRiskRuleResponse';
import { TagKeyValuesBean } from './model/TagKeyValuesBean';
import { TimeRangeBean } from './model/TimeRangeBean';
import { UpdateAuditSecurityGroupRequest } from './model/UpdateAuditSecurityGroupRequest';
import { UpdateAuditSecurityGroupResponse } from './model/UpdateAuditSecurityGroupResponse';

export class DbssClient {
    public static newBuilder(): ClientBuilder<DbssClient> {
            return new ClientBuilder<DbssClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 添加RDS免agent数据库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加RDS免agent数据库
     * @param {string} instanceId 实例ID
     * @param {RdsNoAgentDbRequest} addRdsNoAgentDatabaseRequestBody 添加免agent数据库信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addRdsNoAgentDatabase(addRdsNoAgentDatabaseRequest?: AddRdsNoAgentDatabaseRequest): Promise<AddRdsNoAgentDatabaseResponse> {
        const options = ParamCreater().addRdsNoAgentDatabase(addRdsNoAgentDatabaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加资源标签
     * @param {string} resourceType 资源类型。审计：auditInstance
     * @param {string} resourceId 资源ID
     * @param {ResourceTagRequest} batchAddResourceTagRequestBody 添加Tag请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddResourceTag(batchAddResourceTagRequest?: BatchAddResourceTagRequest): Promise<BatchAddResourceTagResponse> {
        const options = ParamCreater().batchAddResourceTag(batchAddResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除资源标签
     * @param {string} resourceType 资源类型。审计：auditInstance
     * @param {string} resourceId 资源ID
     * @param {ResourceTagRequest} batchDeleteResourceTagRequestBody 添加Tag请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteResourceTag(batchDeleteResourceTagRequest?: BatchDeleteResourceTagRequest): Promise<BatchDeleteResourceTagResponse> {
        const options = ParamCreater().batchDeleteResourceTag(batchDeleteResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据标签查询资源实例数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据标签查询资源实例数量
     * @param {string} resourceType 资源类型。审计：auditInstance
     * @param {ResourceInstanceTagRequest} countResourceInstanceByTagRequestBody Tag请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countResourceInstanceByTag(countResourceInstanceByTagRequest?: CountResourceInstanceByTagRequest): Promise<CountResourceInstanceByTagResponse> {
        const options = ParamCreater().countResourceInstanceByTag(countResourceInstanceByTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 包年包月计费模式创建审计实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 包年包月计费模式创建审计实例
     * @param {CreateInstancePeriodRequest} createInstancesPeriodOrderRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstancesPeriodOrder(createInstancesPeriodOrderRequest?: CreateInstancesPeriodOrderRequest): Promise<CreateInstancesPeriodOrderResponse> {
        const options = ParamCreater().createInstancesPeriodOrder(createInstancesPeriodOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库列表
     * @param {string} instanceId 实例ID
     * @param {string} [status] 实例状态 ON ：开启 OFF ： 关闭
     * @param {string} [offset] 偏移量
     * @param {string} [limit] 查询记录数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditDatabases(listAuditDatabasesRequest?: ListAuditDatabasesRequest): Promise<ListAuditDatabasesResponse> {
        const options = ParamCreater().listAuditDatabases(listAuditDatabasesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例创建任务信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例创建任务信息
     * @param {string} resourceId 资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditInstanceJobs(listAuditInstanceJobsRequest?: ListAuditInstanceJobsRequest): Promise<ListAuditInstanceJobsResponse> {
        const options = ParamCreater().listAuditInstanceJobs(listAuditInstanceJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审计实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询审计实例列表
     * @param {string} [offset] 偏移量
     * @param {string} [limit] 查询记录数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditInstances(listAuditInstancesRequest?: ListAuditInstancesRequest): Promise<ListAuditInstancesResponse> {
        const options = ParamCreater().listAuditInstances(listAuditInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户操作日志信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户操作日志信息
     * @param {string} instanceId 实例ID
     * @param {OperateLogGetRequest} listAuditOperateLogsRequestBody 查询用户操作日志信息Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditOperateLogs(listAuditOperateLogsRequest?: ListAuditOperateLogsRequest): Promise<ListAuditOperateLogsResponse> {
        const options = ParamCreater().listAuditOperateLogs(listAuditOperateLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询风险规则策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询风险规则策略
     * @param {string} instanceId 实例ID
     * @param {string} [name] 风险名称
     * @param {string} [riskLevels] 风险级别[LOW,MEDIUM,HIGH,NO_RISK]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditRuleRisks(listAuditRuleRisksRequest?: ListAuditRuleRisksRequest): Promise<ListAuditRuleRisksResponse> {
        const options = ParamCreater().listAuditRuleRisks(listAuditRuleRisksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询审计范围策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询审计范围策略列表
     * @param {string} instanceId 实例ID
     * @param {string} [offset] 偏移量
     * @param {string} [limit] 查询记录数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditRuleScopes(listAuditRuleScopesRequest?: ListAuditRuleScopesRequest): Promise<ListAuditRuleScopesResponse> {
        const options = ParamCreater().listAuditRuleScopes(listAuditRuleScopesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询隐私数据脱敏规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询隐私数据脱敏规则
     * @param {string} instanceId 实例ID
     * @param {string} [offset] 偏移量
     * @param {string} [limit] 查询记录数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditSensitiveMasks(listAuditSensitiveMasksRequest?: ListAuditSensitiveMasksRequest): Promise<ListAuditSensitiveMasksResponse> {
        const options = ParamCreater().listAuditSensitiveMasks(listAuditSensitiveMasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可用区信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用区信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailabilityZoneInfos(listAvailabilityZoneInfosRequest?: ListAvailabilityZoneInfosRequest): Promise<ListAvailabilityZoneInfosResponse> {
        const options = ParamCreater().listAvailabilityZoneInfos();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询ecs服务器规格信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询ecs服务器规格信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEcsSpecification(listEcsSpecificationRequest?: ListEcsSpecificationRequest): Promise<ListEcsSpecificationResponse> {
        const options = ParamCreater().listEcsSpecification();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {string} resourceType 资源类型。审计：auditInstance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectResourceTags(listProjectResourceTagsRequest?: ListProjectResourceTagsRequest): Promise<ListProjectResourceTagsResponse> {
        const options = ParamCreater().listProjectResourceTags(listProjectResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据标签查询资源实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据标签查询资源实例列表
     * @param {string} resourceType 资源类型。审计：auditInstance
     * @param {ResourceInstanceTagRequest} listResourceInstanceByTagRequestBody Tag请求Body体
     * @param {string} [limit] 查询记录数（action为count时无此参数）如果action为filter默认为1000，limit最多为1000,不能为负数，最小值为1
     * @param {string} [offset] 索引位置，偏移量（action为count时无此参数）从第一条数据偏移offset条数据后开始查询，如果action为filter默认为0（偏移0条数据，表示从第一条数据开始查询）,必须为数字，不能为负数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceInstanceByTag(listResourceInstanceByTagRequest?: ListResourceInstanceByTagRequest): Promise<ListResourceInstanceByTagResponse> {
        const options = ParamCreater().listResourceInstanceByTag(listResourceInstanceByTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SQL注入规则策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL注入规则策略
     * @param {string} instanceId 实例ID
     * @param {SqlRuleRequest} listSqlInjectionRulesRequestBody sql风险级别
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSqlInjectionRules(listSqlInjectionRulesRequest?: ListSqlInjectionRulesRequest): Promise<ListSqlInjectionRulesResponse> {
        const options = ParamCreater().listSqlInjectionRules(listSqlInjectionRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询账户配额信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账户配额信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditQuota(showAuditQuotaRequest?: ShowAuditQuotaRequest): Promise<ShowAuditQuotaResponse> {
        const options = ParamCreater().showAuditQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定风险规则策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定风险规则策略
     * @param {string} instanceId 实例ID
     * @param {string} riskId 风险规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuditRuleRisk(showAuditRuleRiskRequest?: ShowAuditRuleRiskRequest): Promise<ShowAuditRuleRiskResponse> {
        const options = ParamCreater().showAuditRuleRisk(showAuditRuleRiskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用于开启和关闭agent的功能，当开启后，开始抓取用户的访问信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启关闭Agent
     * @param {string} instanceId 实例ID
     * @param {AgentSwitchRequest} switchAgentRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchAgent(switchAgentRequest?: SwitchAgentRequest): Promise<SwitchAgentResponse> {
        const options = ParamCreater().switchAgent(switchAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启关闭风险规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启关闭风险规则
     * @param {string} instanceId 实例ID
     * @param {BatchSwitchesRequest} switchRiskRuleRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchRiskRule(switchRiskRuleRequest?: SwitchRiskRuleRequest): Promise<SwitchRiskRuleResponse> {
        const options = ParamCreater().switchRiskRule(switchRiskRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改安全组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改安全组
     * @param {SecurityGroupRequest} updateAuditSecurityGroupRequestBody 请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAuditSecurityGroup(updateAuditSecurityGroupRequest?: UpdateAuditSecurityGroupRequest): Promise<UpdateAuditSecurityGroupResponse> {
        const options = ParamCreater().updateAuditSecurityGroup(updateAuditSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 添加RDS免agent数据库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addRdsNoAgentDatabase(addRdsNoAgentDatabaseRequest?: AddRdsNoAgentDatabaseRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/databases/rds",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addRdsNoAgentDatabaseRequest !== null && addRdsNoAgentDatabaseRequest !== undefined) {
                if (addRdsNoAgentDatabaseRequest instanceof AddRdsNoAgentDatabaseRequest) {
                    instanceId = addRdsNoAgentDatabaseRequest.instanceId;
                    body = addRdsNoAgentDatabaseRequest.body
                } else {
                    instanceId = addRdsNoAgentDatabaseRequest['instance_id'];
                    body = addRdsNoAgentDatabaseRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addRdsNoAgentDatabase.');
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
         * 批量添加资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddResourceTag(batchAddResourceTagRequest?: BatchAddResourceTagRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{resource_type}/{resource_id}/tags/create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;

            if (batchAddResourceTagRequest !== null && batchAddResourceTagRequest !== undefined) {
                if (batchAddResourceTagRequest instanceof BatchAddResourceTagRequest) {
                    resourceType = batchAddResourceTagRequest.resourceType;
                    resourceId = batchAddResourceTagRequest.resourceId;
                    body = batchAddResourceTagRequest.body
                } else {
                    resourceType = batchAddResourceTagRequest['resource_type'];
                    resourceId = batchAddResourceTagRequest['resource_id'];
                    body = batchAddResourceTagRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchAddResourceTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchAddResourceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteResourceTag(batchDeleteResourceTagRequest?: BatchDeleteResourceTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/{resource_type}/{resource_id}/tags/delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;

            if (batchDeleteResourceTagRequest !== null && batchDeleteResourceTagRequest !== undefined) {
                if (batchDeleteResourceTagRequest instanceof BatchDeleteResourceTagRequest) {
                    resourceType = batchDeleteResourceTagRequest.resourceType;
                    resourceId = batchDeleteResourceTagRequest.resourceId;
                    body = batchDeleteResourceTagRequest.body
                } else {
                    resourceType = batchDeleteResourceTagRequest['resource_type'];
                    resourceId = batchDeleteResourceTagRequest['resource_id'];
                    body = batchDeleteResourceTagRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchDeleteResourceTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchDeleteResourceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签查询资源实例数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countResourceInstanceByTag(countResourceInstanceByTagRequest?: CountResourceInstanceByTagRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{resource_type}/resource-instances/count",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;

            if (countResourceInstanceByTagRequest !== null && countResourceInstanceByTagRequest !== undefined) {
                if (countResourceInstanceByTagRequest instanceof CountResourceInstanceByTagRequest) {
                    resourceType = countResourceInstanceByTagRequest.resourceType;
                    body = countResourceInstanceByTagRequest.body
                } else {
                    resourceType = countResourceInstanceByTagRequest['resource_type'];
                    body = countResourceInstanceByTagRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling countResourceInstanceByTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 包年包月计费模式创建审计实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstancesPeriodOrder(createInstancesPeriodOrderRequest?: CreateInstancesPeriodOrderRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/dbss/audit/charge/period/order",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createInstancesPeriodOrderRequest !== null && createInstancesPeriodOrderRequest !== undefined) {
                if (createInstancesPeriodOrderRequest instanceof CreateInstancesPeriodOrderRequest) {
                    body = createInstancesPeriodOrderRequest.body
                } else {
                    body = createInstancesPeriodOrderRequest['body'];
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
         * 查询数据库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditDatabases(listAuditDatabasesRequest?: ListAuditDatabasesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/databases",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let status;
            
            let offset;
            
            let limit;

            if (listAuditDatabasesRequest !== null && listAuditDatabasesRequest !== undefined) {
                if (listAuditDatabasesRequest instanceof ListAuditDatabasesRequest) {
                    instanceId = listAuditDatabasesRequest.instanceId;
                    status = listAuditDatabasesRequest.status;
                    offset = listAuditDatabasesRequest.offset;
                    limit = listAuditDatabasesRequest.limit;
                } else {
                    instanceId = listAuditDatabasesRequest['instance_id'];
                    status = listAuditDatabasesRequest['status'];
                    offset = listAuditDatabasesRequest['offset'];
                    limit = listAuditDatabasesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditDatabases.');
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
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
         * 查询实例创建任务信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditInstanceJobs(listAuditInstanceJobsRequest?: ListAuditInstanceJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dbss/audit/jobs/{resource_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (listAuditInstanceJobsRequest !== null && listAuditInstanceJobsRequest !== undefined) {
                if (listAuditInstanceJobsRequest instanceof ListAuditInstanceJobsRequest) {
                    resourceId = listAuditInstanceJobsRequest.resourceId;
                } else {
                    resourceId = listAuditInstanceJobsRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listAuditInstanceJobs.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询审计实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditInstances(listAuditInstancesRequest?: ListAuditInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dbss/audit/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listAuditInstancesRequest !== null && listAuditInstancesRequest !== undefined) {
                if (listAuditInstancesRequest instanceof ListAuditInstancesRequest) {
                    offset = listAuditInstancesRequest.offset;
                    limit = listAuditInstancesRequest.limit;
                } else {
                    offset = listAuditInstancesRequest['offset'];
                    limit = listAuditInstancesRequest['limit'];
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
         * 查询用户操作日志信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditOperateLogs(listAuditOperateLogsRequest?: ListAuditOperateLogsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/operate-log",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listAuditOperateLogsRequest !== null && listAuditOperateLogsRequest !== undefined) {
                if (listAuditOperateLogsRequest instanceof ListAuditOperateLogsRequest) {
                    instanceId = listAuditOperateLogsRequest.instanceId;
                    body = listAuditOperateLogsRequest.body
                } else {
                    instanceId = listAuditOperateLogsRequest['instance_id'];
                    body = listAuditOperateLogsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditOperateLogs.');
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
         * 查询风险规则策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditRuleRisks(listAuditRuleRisksRequest?: ListAuditRuleRisksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/rule/risk",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let name;
            
            let riskLevels;

            if (listAuditRuleRisksRequest !== null && listAuditRuleRisksRequest !== undefined) {
                if (listAuditRuleRisksRequest instanceof ListAuditRuleRisksRequest) {
                    instanceId = listAuditRuleRisksRequest.instanceId;
                    name = listAuditRuleRisksRequest.name;
                    riskLevels = listAuditRuleRisksRequest.riskLevels;
                } else {
                    instanceId = listAuditRuleRisksRequest['instance_id'];
                    name = listAuditRuleRisksRequest['name'];
                    riskLevels = listAuditRuleRisksRequest['risk_levels'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditRuleRisks.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (riskLevels !== null && riskLevels !== undefined) {
                localVarQueryParameter['risk_levels'] = riskLevels;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询审计范围策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditRuleScopes(listAuditRuleScopesRequest?: ListAuditRuleScopesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/rule/scopes",
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

            if (listAuditRuleScopesRequest !== null && listAuditRuleScopesRequest !== undefined) {
                if (listAuditRuleScopesRequest instanceof ListAuditRuleScopesRequest) {
                    instanceId = listAuditRuleScopesRequest.instanceId;
                    offset = listAuditRuleScopesRequest.offset;
                    limit = listAuditRuleScopesRequest.limit;
                } else {
                    instanceId = listAuditRuleScopesRequest['instance_id'];
                    offset = listAuditRuleScopesRequest['offset'];
                    limit = listAuditRuleScopesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditRuleScopes.');
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
         * 查询隐私数据脱敏规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditSensitiveMasks(listAuditSensitiveMasksRequest?: ListAuditSensitiveMasksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/sensitive/masks",
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

            if (listAuditSensitiveMasksRequest !== null && listAuditSensitiveMasksRequest !== undefined) {
                if (listAuditSensitiveMasksRequest instanceof ListAuditSensitiveMasksRequest) {
                    instanceId = listAuditSensitiveMasksRequest.instanceId;
                    offset = listAuditSensitiveMasksRequest.offset;
                    limit = listAuditSensitiveMasksRequest.limit;
                } else {
                    instanceId = listAuditSensitiveMasksRequest['instance_id'];
                    offset = listAuditSensitiveMasksRequest['offset'];
                    limit = listAuditSensitiveMasksRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditSensitiveMasks.');
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
         * 查询可用区信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailabilityZoneInfos() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/dbss/audit/availability-zone",
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
         * 查询ecs服务器规格信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEcsSpecification() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dbss/audit/specification",
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
         * 查询项目标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectResourceTags(listProjectResourceTagsRequest?: ListProjectResourceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;

            if (listProjectResourceTagsRequest !== null && listProjectResourceTagsRequest !== undefined) {
                if (listProjectResourceTagsRequest instanceof ListProjectResourceTagsRequest) {
                    resourceType = listProjectResourceTagsRequest.resourceType;
                } else {
                    resourceType = listProjectResourceTagsRequest['resource_type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listProjectResourceTags.');
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签查询资源实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceInstanceByTag(listResourceInstanceByTagRequest?: ListResourceInstanceByTagRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{resource_type}/resource-instances/filter",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let resourceType;
            
            let limit;
            
            let offset;

            if (listResourceInstanceByTagRequest !== null && listResourceInstanceByTagRequest !== undefined) {
                if (listResourceInstanceByTagRequest instanceof ListResourceInstanceByTagRequest) {
                    resourceType = listResourceInstanceByTagRequest.resourceType;
                    body = listResourceInstanceByTagRequest.body
                    limit = listResourceInstanceByTagRequest.limit;
                    offset = listResourceInstanceByTagRequest.offset;
                } else {
                    resourceType = listResourceInstanceByTagRequest['resource_type'];
                    body = listResourceInstanceByTagRequest['body'];
                    limit = listResourceInstanceByTagRequest['limit'];
                    offset = listResourceInstanceByTagRequest['offset'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listResourceInstanceByTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SQL注入规则策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSqlInjectionRules(listSqlInjectionRulesRequest?: ListSqlInjectionRulesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/rule/sql-injections",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (listSqlInjectionRulesRequest !== null && listSqlInjectionRulesRequest !== undefined) {
                if (listSqlInjectionRulesRequest instanceof ListSqlInjectionRulesRequest) {
                    instanceId = listSqlInjectionRulesRequest.instanceId;
                    body = listSqlInjectionRulesRequest.body
                } else {
                    instanceId = listSqlInjectionRulesRequest['instance_id'];
                    body = listSqlInjectionRulesRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSqlInjectionRules.');
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
         * 查询账户配额信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditQuota() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/dbss/audit/quota",
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
         * 查询指定风险规则策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuditRuleRisk(showAuditRuleRiskRequest?: ShowAuditRuleRiskRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{instance_id}/dbss/audit/rule/risk/{risk_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let riskId;

            if (showAuditRuleRiskRequest !== null && showAuditRuleRiskRequest !== undefined) {
                if (showAuditRuleRiskRequest instanceof ShowAuditRuleRiskRequest) {
                    instanceId = showAuditRuleRiskRequest.instanceId;
                    riskId = showAuditRuleRiskRequest.riskId;
                } else {
                    instanceId = showAuditRuleRiskRequest['instance_id'];
                    riskId = showAuditRuleRiskRequest['risk_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAuditRuleRisk.');
            }
            if (riskId === null || riskId === undefined) {
            throw new RequiredError('riskId','Required parameter riskId was null or undefined when calling showAuditRuleRisk.');
            }

            options.pathParams = { 'instance_id': instanceId,'risk_id': riskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用于开启和关闭agent的功能，当开启后，开始抓取用户的访问信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchAgent(switchAgentRequest?: SwitchAgentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{instance_id}/audit/agent/switch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchAgentRequest !== null && switchAgentRequest !== undefined) {
                if (switchAgentRequest instanceof SwitchAgentRequest) {
                    instanceId = switchAgentRequest.instanceId;
                    body = switchAgentRequest.body
                } else {
                    instanceId = switchAgentRequest['instance_id'];
                    body = switchAgentRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchAgent.');
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
         * 开启关闭风险规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchRiskRule(switchRiskRuleRequest?: SwitchRiskRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{instance_id}/audit/rule/risk/switch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (switchRiskRuleRequest !== null && switchRiskRuleRequest !== undefined) {
                if (switchRiskRuleRequest instanceof SwitchRiskRuleRequest) {
                    instanceId = switchRiskRuleRequest.instanceId;
                    body = switchRiskRuleRequest.body
                } else {
                    instanceId = switchRiskRuleRequest['instance_id'];
                    body = switchRiskRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling switchRiskRule.');
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
         * 修改安全组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAuditSecurityGroup(updateAuditSecurityGroupRequest?: UpdateAuditSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/dbss/audit/security-group",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateAuditSecurityGroupRequest !== null && updateAuditSecurityGroupRequest !== undefined) {
                if (updateAuditSecurityGroupRequest instanceof UpdateAuditSecurityGroupRequest) {
                    body = updateAuditSecurityGroupRequest.body
                } else {
                    body = updateAuditSecurityGroupRequest['body'];
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

function newClient(client: HcClient): DbssClient {
    return new DbssClient(client);
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