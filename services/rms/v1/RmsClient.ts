import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccountAggregationSource } from './model/AccountAggregationSource';
import { AggregateComplianceDetailRequest } from './model/AggregateComplianceDetailRequest';
import { AggregateDiscoveredResourceCountsRequest } from './model/AggregateDiscoveredResourceCountsRequest';
import { AggregateDiscoveredResourcesRequest } from './model/AggregateDiscoveredResourcesRequest';
import { AggregatePolicyAssignmentDetailRequest } from './model/AggregatePolicyAssignmentDetailRequest';
import { AggregatePolicyAssignments } from './model/AggregatePolicyAssignments';
import { AggregatePolicyAssignmentsFilters } from './model/AggregatePolicyAssignmentsFilters';
import { AggregatePolicyAssignmentsRequest } from './model/AggregatePolicyAssignmentsRequest';
import { AggregatePolicyComplianceSummaryResult } from './model/AggregatePolicyComplianceSummaryResult';
import { AggregatePolicyStatesRequest } from './model/AggregatePolicyStatesRequest';
import { AggregateResourceConfigRequest } from './model/AggregateResourceConfigRequest';
import { AggregatedSourceStatus } from './model/AggregatedSourceStatus';
import { AggregationAuthorizationRequest } from './model/AggregationAuthorizationRequest';
import { AggregationAuthorizationResp } from './model/AggregationAuthorizationResp';
import { ChannelConfigBody } from './model/ChannelConfigBody';
import { CollectAllResourcesSummaryRequest } from './model/CollectAllResourcesSummaryRequest';
import { CollectAllResourcesSummaryResponse } from './model/CollectAllResourcesSummaryResponse';
import { Compliance } from './model/Compliance';
import { ConfigurationAggregatorRequest } from './model/ConfigurationAggregatorRequest';
import { ConfigurationAggregatorResp } from './model/ConfigurationAggregatorResp';
import { CountAllResourcesRequest } from './model/CountAllResourcesRequest';
import { CountAllResourcesResponse } from './model/CountAllResourcesResponse';
import { CreateAggregationAuthorizationRequest } from './model/CreateAggregationAuthorizationRequest';
import { CreateAggregationAuthorizationResponse } from './model/CreateAggregationAuthorizationResponse';
import { CreateConfigurationAggregatorRequest } from './model/CreateConfigurationAggregatorRequest';
import { CreateConfigurationAggregatorResponse } from './model/CreateConfigurationAggregatorResponse';
import { CreateOrganizationPolicyAssignmentRequest } from './model/CreateOrganizationPolicyAssignmentRequest';
import { CreateOrganizationPolicyAssignmentResponse } from './model/CreateOrganizationPolicyAssignmentResponse';
import { CreatePolicyAssignmentsRequest } from './model/CreatePolicyAssignmentsRequest';
import { CreatePolicyAssignmentsResponse } from './model/CreatePolicyAssignmentsResponse';
import { CreateStoredQueryRequest } from './model/CreateStoredQueryRequest';
import { CreateStoredQueryResponse } from './model/CreateStoredQueryResponse';
import { CreateTrackerConfigRequest } from './model/CreateTrackerConfigRequest';
import { CreateTrackerConfigResponse } from './model/CreateTrackerConfigResponse';
import { CustomPolicy } from './model/CustomPolicy';
import { DeleteAggregationAuthorizationRequest } from './model/DeleteAggregationAuthorizationRequest';
import { DeleteAggregationAuthorizationResponse } from './model/DeleteAggregationAuthorizationResponse';
import { DeleteConfigurationAggregatorRequest } from './model/DeleteConfigurationAggregatorRequest';
import { DeleteConfigurationAggregatorResponse } from './model/DeleteConfigurationAggregatorResponse';
import { DeleteOrganizationPolicyAssignmentRequest } from './model/DeleteOrganizationPolicyAssignmentRequest';
import { DeleteOrganizationPolicyAssignmentResponse } from './model/DeleteOrganizationPolicyAssignmentResponse';
import { DeletePendingAggregationRequestRequest } from './model/DeletePendingAggregationRequestRequest';
import { DeletePendingAggregationRequestResponse } from './model/DeletePendingAggregationRequestResponse';
import { DeletePolicyAssignmentRequest } from './model/DeletePolicyAssignmentRequest';
import { DeletePolicyAssignmentResponse } from './model/DeletePolicyAssignmentResponse';
import { DeleteStoredQueryRequest } from './model/DeleteStoredQueryRequest';
import { DeleteStoredQueryResponse } from './model/DeleteStoredQueryResponse';
import { DeleteTrackerConfigRequest } from './model/DeleteTrackerConfigRequest';
import { DeleteTrackerConfigResponse } from './model/DeleteTrackerConfigResponse';
import { DisablePolicyAssignmentRequest } from './model/DisablePolicyAssignmentRequest';
import { DisablePolicyAssignmentResponse } from './model/DisablePolicyAssignmentResponse';
import { EnablePolicyAssignmentRequest } from './model/EnablePolicyAssignmentRequest';
import { EnablePolicyAssignmentResponse } from './model/EnablePolicyAssignmentResponse';
import { GroupedResourceCount } from './model/GroupedResourceCount';
import { HistoryItem } from './model/HistoryItem';
import { ListAggregateComplianceByPolicyAssignmentRequest } from './model/ListAggregateComplianceByPolicyAssignmentRequest';
import { ListAggregateComplianceByPolicyAssignmentResponse } from './model/ListAggregateComplianceByPolicyAssignmentResponse';
import { ListAggregateDiscoveredResourcesRequest } from './model/ListAggregateDiscoveredResourcesRequest';
import { ListAggregateDiscoveredResourcesResponse } from './model/ListAggregateDiscoveredResourcesResponse';
import { ListAggregationAuthorizationsRequest } from './model/ListAggregationAuthorizationsRequest';
import { ListAggregationAuthorizationsResponse } from './model/ListAggregationAuthorizationsResponse';
import { ListAllResourcesRequest } from './model/ListAllResourcesRequest';
import { ListAllResourcesResponse } from './model/ListAllResourcesResponse';
import { ListAllTagsRequest } from './model/ListAllTagsRequest';
import { ListAllTagsResponse } from './model/ListAllTagsResponse';
import { ListBuiltInPolicyDefinitionsRequest } from './model/ListBuiltInPolicyDefinitionsRequest';
import { ListBuiltInPolicyDefinitionsResponse } from './model/ListBuiltInPolicyDefinitionsResponse';
import { ListConfigurationAggregatorsRequest } from './model/ListConfigurationAggregatorsRequest';
import { ListConfigurationAggregatorsResponse } from './model/ListConfigurationAggregatorsResponse';
import { ListOrganizationPolicyAssignmentsRequest } from './model/ListOrganizationPolicyAssignmentsRequest';
import { ListOrganizationPolicyAssignmentsResponse } from './model/ListOrganizationPolicyAssignmentsResponse';
import { ListPendingAggregationRequestsRequest } from './model/ListPendingAggregationRequestsRequest';
import { ListPendingAggregationRequestsResponse } from './model/ListPendingAggregationRequestsResponse';
import { ListPolicyAssignmentsRequest } from './model/ListPolicyAssignmentsRequest';
import { ListPolicyAssignmentsResponse } from './model/ListPolicyAssignmentsResponse';
import { ListPolicyStatesByAssignmentIdRequest } from './model/ListPolicyStatesByAssignmentIdRequest';
import { ListPolicyStatesByAssignmentIdResponse } from './model/ListPolicyStatesByAssignmentIdResponse';
import { ListPolicyStatesByDomainIdRequest } from './model/ListPolicyStatesByDomainIdRequest';
import { ListPolicyStatesByDomainIdResponse } from './model/ListPolicyStatesByDomainIdResponse';
import { ListPolicyStatesByResourceIdRequest } from './model/ListPolicyStatesByResourceIdRequest';
import { ListPolicyStatesByResourceIdResponse } from './model/ListPolicyStatesByResourceIdResponse';
import { ListProvidersRequest } from './model/ListProvidersRequest';
import { ListProvidersResponse } from './model/ListProvidersResponse';
import { ListRegionsRequest } from './model/ListRegionsRequest';
import { ListRegionsResponse } from './model/ListRegionsResponse';
import { ListResourcesRequest } from './model/ListResourcesRequest';
import { ListResourcesResponse } from './model/ListResourcesResponse';
import { ListSchemasRequest } from './model/ListSchemasRequest';
import { ListSchemasResponse } from './model/ListSchemasResponse';
import { ListStoredQueriesRequest } from './model/ListStoredQueriesRequest';
import { ListStoredQueriesResponse } from './model/ListStoredQueriesResponse';
import { ManagedPolicyAssignmentMetadata } from './model/ManagedPolicyAssignmentMetadata';
import { OrganizationPolicyAssignmentDetailedStatusResponse } from './model/OrganizationPolicyAssignmentDetailedStatusResponse';
import { OrganizationPolicyAssignmentRequest } from './model/OrganizationPolicyAssignmentRequest';
import { OrganizationPolicyAssignmentResponse } from './model/OrganizationPolicyAssignmentResponse';
import { OrganizationPolicyAssignmentStatusResponse } from './model/OrganizationPolicyAssignmentStatusResponse';
import { PageInfo } from './model/PageInfo';
import { PendingAggregationRequest } from './model/PendingAggregationRequest';
import { PolicyAssignment } from './model/PolicyAssignment';
import { PolicyAssignmentRequestBody } from './model/PolicyAssignmentRequestBody';
import { PolicyComplianceSummaryUnit } from './model/PolicyComplianceSummaryUnit';
import { PolicyDefinition } from './model/PolicyDefinition';
import { PolicyFilterDefinition } from './model/PolicyFilterDefinition';
import { PolicyParameterDefinition } from './model/PolicyParameterDefinition';
import { PolicyParameterValue } from './model/PolicyParameterValue';
import { PolicyResource } from './model/PolicyResource';
import { PolicyState } from './model/PolicyState';
import { PolicyStateRequestBody } from './model/PolicyStateRequestBody';
import { QueryInfo } from './model/QueryInfo';
import { QueryRunRequestBody } from './model/QueryRunRequestBody';
import { Region } from './model/Region';
import { ResourceCountsFilters } from './model/ResourceCountsFilters';
import { ResourceEntity } from './model/ResourceEntity';
import { ResourceIdentifier } from './model/ResourceIdentifier';
import { ResourceProviderResponse } from './model/ResourceProviderResponse';
import { ResourceRelation } from './model/ResourceRelation';
import { ResourceSchemaResponse } from './model/ResourceSchemaResponse';
import { ResourceSummaryResponseItem } from './model/ResourceSummaryResponseItem';
import { ResourceSummaryResponseItemRegions } from './model/ResourceSummaryResponseItemRegions';
import { ResourceSummaryResponseItemTypes } from './model/ResourceSummaryResponseItemTypes';
import { ResourceTypeResponse } from './model/ResourceTypeResponse';
import { ResourcesFilters } from './model/ResourcesFilters';
import { RunAggregateResourceQueryRequest } from './model/RunAggregateResourceQueryRequest';
import { RunAggregateResourceQueryResponse } from './model/RunAggregateResourceQueryResponse';
import { RunEvaluationByPolicyAssignmentIdRequest } from './model/RunEvaluationByPolicyAssignmentIdRequest';
import { RunEvaluationByPolicyAssignmentIdResponse } from './model/RunEvaluationByPolicyAssignmentIdResponse';
import { RunQueryRequest } from './model/RunQueryRequest';
import { RunQueryResponse } from './model/RunQueryResponse';
import { SelectorConfigBody } from './model/SelectorConfigBody';
import { ShowAggregateComplianceDetailsByPolicyAssignmentRequest } from './model/ShowAggregateComplianceDetailsByPolicyAssignmentRequest';
import { ShowAggregateComplianceDetailsByPolicyAssignmentResponse } from './model/ShowAggregateComplianceDetailsByPolicyAssignmentResponse';
import { ShowAggregateDiscoveredResourceCountsRequest } from './model/ShowAggregateDiscoveredResourceCountsRequest';
import { ShowAggregateDiscoveredResourceCountsResponse } from './model/ShowAggregateDiscoveredResourceCountsResponse';
import { ShowAggregatePolicyAssignmentDetailRequest } from './model/ShowAggregatePolicyAssignmentDetailRequest';
import { ShowAggregatePolicyAssignmentDetailResponse } from './model/ShowAggregatePolicyAssignmentDetailResponse';
import { ShowAggregatePolicyStateComplianceSummaryRequest } from './model/ShowAggregatePolicyStateComplianceSummaryRequest';
import { ShowAggregatePolicyStateComplianceSummaryResponse } from './model/ShowAggregatePolicyStateComplianceSummaryResponse';
import { ShowAggregateResourceConfigRequest } from './model/ShowAggregateResourceConfigRequest';
import { ShowAggregateResourceConfigResponse } from './model/ShowAggregateResourceConfigResponse';
import { ShowBuiltInPolicyDefinitionRequest } from './model/ShowBuiltInPolicyDefinitionRequest';
import { ShowBuiltInPolicyDefinitionResponse } from './model/ShowBuiltInPolicyDefinitionResponse';
import { ShowConfigurationAggregatorRequest } from './model/ShowConfigurationAggregatorRequest';
import { ShowConfigurationAggregatorResponse } from './model/ShowConfigurationAggregatorResponse';
import { ShowConfigurationAggregatorSourcesStatusRequest } from './model/ShowConfigurationAggregatorSourcesStatusRequest';
import { ShowConfigurationAggregatorSourcesStatusResponse } from './model/ShowConfigurationAggregatorSourcesStatusResponse';
import { ShowEvaluationStateByAssignmentIdRequest } from './model/ShowEvaluationStateByAssignmentIdRequest';
import { ShowEvaluationStateByAssignmentIdResponse } from './model/ShowEvaluationStateByAssignmentIdResponse';
import { ShowOrganizationPolicyAssignmentDetailedStatusRequest } from './model/ShowOrganizationPolicyAssignmentDetailedStatusRequest';
import { ShowOrganizationPolicyAssignmentDetailedStatusResponse } from './model/ShowOrganizationPolicyAssignmentDetailedStatusResponse';
import { ShowOrganizationPolicyAssignmentRequest } from './model/ShowOrganizationPolicyAssignmentRequest';
import { ShowOrganizationPolicyAssignmentResponse } from './model/ShowOrganizationPolicyAssignmentResponse';
import { ShowOrganizationPolicyAssignmentStatusesRequest } from './model/ShowOrganizationPolicyAssignmentStatusesRequest';
import { ShowOrganizationPolicyAssignmentStatusesResponse } from './model/ShowOrganizationPolicyAssignmentStatusesResponse';
import { ShowPolicyAssignmentRequest } from './model/ShowPolicyAssignmentRequest';
import { ShowPolicyAssignmentResponse } from './model/ShowPolicyAssignmentResponse';
import { ShowResourceByIdRequest } from './model/ShowResourceByIdRequest';
import { ShowResourceByIdResponse } from './model/ShowResourceByIdResponse';
import { ShowResourceDetailRequest } from './model/ShowResourceDetailRequest';
import { ShowResourceDetailResponse } from './model/ShowResourceDetailResponse';
import { ShowResourceHistoryRequest } from './model/ShowResourceHistoryRequest';
import { ShowResourceHistoryResponse } from './model/ShowResourceHistoryResponse';
import { ShowResourceRelationsDetailRequest } from './model/ShowResourceRelationsDetailRequest';
import { ShowResourceRelationsDetailResponse } from './model/ShowResourceRelationsDetailResponse';
import { ShowResourceRelationsRequest } from './model/ShowResourceRelationsRequest';
import { ShowResourceRelationsResponse } from './model/ShowResourceRelationsResponse';
import { ShowStoredQueryRequest } from './model/ShowStoredQueryRequest';
import { ShowStoredQueryResponse } from './model/ShowStoredQueryResponse';
import { ShowTrackerConfigRequest } from './model/ShowTrackerConfigRequest';
import { ShowTrackerConfigResponse } from './model/ShowTrackerConfigResponse';
import { StoredQuery } from './model/StoredQuery';
import { StoredQueryRequestBody } from './model/StoredQueryRequestBody';
import { TagDetail } from './model/TagDetail';
import { TrackerConfigBody } from './model/TrackerConfigBody';
import { TrackerOBSChannelConfigBody } from './model/TrackerOBSChannelConfigBody';
import { TrackerSMNChannelConfigBody } from './model/TrackerSMNChannelConfigBody';
import { UpdateConfigurationAggregatorRequest } from './model/UpdateConfigurationAggregatorRequest';
import { UpdateConfigurationAggregatorResponse } from './model/UpdateConfigurationAggregatorResponse';
import { UpdatePolicyAssignmentRequest } from './model/UpdatePolicyAssignmentRequest';
import { UpdatePolicyAssignmentResponse } from './model/UpdatePolicyAssignmentResponse';
import { UpdatePolicyStateRequest } from './model/UpdatePolicyStateRequest';
import { UpdatePolicyStateResponse } from './model/UpdatePolicyStateResponse';
import { UpdateStoredQueryRequest } from './model/UpdateStoredQueryRequest';
import { UpdateStoredQueryResponse } from './model/UpdateStoredQueryResponse';

export class RmsClient {
    public static newBuilder(): ClientBuilder<RmsClient> {
            return new ClientBuilder<RmsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 给资源聚合器帐号授予从源帐号收集数据的权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源聚合器授权
     * @param {AggregationAuthorizationRequest} [aggregationAuthorizationRequest] 资源聚合器授权请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAggregationAuthorization(createAggregationAuthorizationRequest?: CreateAggregationAuthorizationRequest): Promise<CreateAggregationAuthorizationResponse> {
        const options = ParamCreater().createAggregationAuthorization(createAggregationAuthorizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建资源聚合器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源聚合器
     * @param {ConfigurationAggregatorRequest} [configurationAggregatorRequest] 资源聚合器对象请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConfigurationAggregator(createConfigurationAggregatorRequest?: CreateConfigurationAggregatorRequest): Promise<CreateConfigurationAggregatorResponse> {
        const options = ParamCreater().createConfigurationAggregator(createConfigurationAggregatorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定资源聚合器帐号的授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源聚合器授权
     * @param {string} authorizedAccountId 授权的资源聚合器的帐号ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAggregationAuthorization(deleteAggregationAuthorizationRequest?: DeleteAggregationAuthorizationRequest): Promise<DeleteAggregationAuthorizationResponse> {
        const options = ParamCreater().deleteAggregationAuthorization(deleteAggregationAuthorizationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源聚合器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源聚合器
     * @param {string} aggregatorId 资源聚合器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConfigurationAggregator(deleteConfigurationAggregatorRequest?: DeleteConfigurationAggregatorRequest): Promise<DeleteConfigurationAggregatorResponse> {
        const options = ParamCreater().deleteConfigurationAggregator(deleteConfigurationAggregatorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除聚合器帐号中挂起的授权请求。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除聚合器帐号中挂起的授权请求
     * @param {string} requesterAccountId 请求聚合数据的帐号ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePendingAggregationRequest(deletePendingAggregationRequestRequest?: DeletePendingAggregationRequestRequest): Promise<DeletePendingAggregationRequestResponse> {
        const options = ParamCreater().deletePendingAggregationRequest(deletePendingAggregationRequestRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询合规和不合规规则的列表，其中包含合规和不合规规则的资源数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询聚合合规规则列表
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {AggregatePolicyAssignmentsRequest} [aggregatePolicyAssignmentsRequest] 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAggregateComplianceByPolicyAssignment(listAggregateComplianceByPolicyAssignmentRequest?: ListAggregateComplianceByPolicyAssignmentRequest): Promise<ListAggregateComplianceByPolicyAssignmentResponse> {
        const options = ParamCreater().listAggregateComplianceByPolicyAssignment(listAggregateComplianceByPolicyAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源聚合器中特定资源的列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询聚合器中资源的列表
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {AggregateDiscoveredResourcesRequest} [aggregateDiscoveredResourcesRequest] 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAggregateDiscoveredResources(listAggregateDiscoveredResourcesRequest?: ListAggregateDiscoveredResourcesRequest): Promise<ListAggregateDiscoveredResourcesResponse> {
        const options = ParamCreater().listAggregateDiscoveredResources(listAggregateDiscoveredResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询授权过的资源聚合器列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源聚合器授权列表
     * @param {string} [accountId] 授权的帐号ID。
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAggregationAuthorizations(listAggregationAuthorizationsRequest?: ListAggregationAuthorizationsRequest): Promise<ListAggregationAuthorizationsResponse> {
        const options = ParamCreater().listAggregationAuthorizations(listAggregationAuthorizationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源聚合器列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源聚合器列表
     * @param {string} [aggregatorName] 资源聚合器名称。
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConfigurationAggregators(listConfigurationAggregatorsRequest?: ListConfigurationAggregatorsRequest): Promise<ListConfigurationAggregatorsResponse> {
        const options = ParamCreater().listConfigurationAggregators(listConfigurationAggregatorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有挂起的聚合请求列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有挂起的聚合请求列表
     * @param {string} [accountId] 授权的帐号ID。
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPendingAggregationRequests(listPendingAggregationRequestsRequest?: ListPendingAggregationRequestsRequest): Promise<ListPendingAggregationRequestsResponse> {
        const options = ParamCreater().listPendingAggregationRequests(listPendingAggregationRequestsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对指定聚合器执行高级查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对指定聚合器执行高级查询
     * @param {string} aggregatorId 资源聚合器ID。
     * @param {QueryRunRequestBody} [queryRunRequestBody] 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runAggregateResourceQuery(runAggregateResourceQueryRequest?: RunAggregateResourceQueryRequest): Promise<RunAggregateResourceQueryResponse> {
        const options = ParamCreater().runAggregateResourceQuery(runAggregateResourceQueryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回指定聚合合规规则的评估结果详情。包含评估了哪些资源，以及每个资源是否符合规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定聚合合规规则的评估结果详情
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {AggregateComplianceDetailRequest} [aggregateComplianceDetailRequest] 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAggregateComplianceDetailsByPolicyAssignment(showAggregateComplianceDetailsByPolicyAssignmentRequest?: ShowAggregateComplianceDetailsByPolicyAssignmentRequest): Promise<ShowAggregateComplianceDetailsByPolicyAssignmentResponse> {
        const options = ParamCreater().showAggregateComplianceDetailsByPolicyAssignment(showAggregateComplianceDetailsByPolicyAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询聚合器中帐号资源的计数，支持通过过滤器和GroupByKey来统计资源数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询聚合器中帐号资源的计数
     * @param {AggregateDiscoveredResourceCountsRequest} [aggregateDiscoveredResourceCountsRequest] 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAggregateDiscoveredResourceCounts(showAggregateDiscoveredResourceCountsRequest?: ShowAggregateDiscoveredResourceCountsRequest): Promise<ShowAggregateDiscoveredResourceCountsResponse> {
        const options = ParamCreater().showAggregateDiscoveredResourceCounts(showAggregateDiscoveredResourceCountsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回指定聚合合规规则详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定聚合合规规则详情
     * @param {AggregatePolicyAssignmentDetailRequest} [aggregatePolicyAssignmentDetailRequest] 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAggregatePolicyAssignmentDetail(showAggregatePolicyAssignmentDetailRequest?: ShowAggregatePolicyAssignmentDetailRequest): Promise<ShowAggregatePolicyAssignmentDetailResponse> {
        const options = ParamCreater().showAggregatePolicyAssignmentDetail(showAggregatePolicyAssignmentDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询聚合器中一个或多个帐户的合规和不合规规则数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询聚合器中一个或多个帐户的合规概况
     * @param {AggregatePolicyStatesRequest} [aggregatePolicyStatesRequest] 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAggregatePolicyStateComplianceSummary(showAggregatePolicyStateComplianceSummaryRequest?: ShowAggregatePolicyStateComplianceSummaryRequest): Promise<ShowAggregatePolicyStateComplianceSummaryResponse> {
        const options = ParamCreater().showAggregatePolicyStateComplianceSummary(showAggregatePolicyStateComplianceSummaryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询源帐号中特定资源的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询源帐号中资源的详情
     * @param {AggregateResourceConfigRequest} [aggregateResourceConfigRequest] 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAggregateResourceConfig(showAggregateResourceConfigRequest?: ShowAggregateResourceConfigRequest): Promise<ShowAggregateResourceConfigResponse> {
        const options = ParamCreater().showAggregateResourceConfig(showAggregateResourceConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定资源聚合器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定资源聚合器
     * @param {string} aggregatorId 资源聚合器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConfigurationAggregator(showConfigurationAggregatorRequest?: ShowConfigurationAggregatorRequest): Promise<ShowConfigurationAggregatorResponse> {
        const options = ParamCreater().showConfigurationAggregator(showConfigurationAggregatorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定资源聚合器聚合帐号的状态信息，状态包括验证源帐号和聚合器帐号之间授权的信息。如果失败，状态包含相关的错误码或消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定资源聚合器聚合帐号的状态信息
     * @param {string} aggregatorId 资源聚合器ID。
     * @param {'SUCCEEDED' | 'FAILED' | 'OUTDATED'} [updateStatus] 聚合帐号的状态。
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConfigurationAggregatorSourcesStatus(showConfigurationAggregatorSourcesStatusRequest?: ShowConfigurationAggregatorSourcesStatusRequest): Promise<ShowConfigurationAggregatorSourcesStatusResponse> {
        const options = ParamCreater().showConfigurationAggregatorSourcesStatus(showConfigurationAggregatorSourcesStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新资源聚合器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新资源聚合器
     * @param {string} aggregatorId 资源聚合器ID。
     * @param {ConfigurationAggregatorRequest} [configurationAggregatorRequest] 资源聚合器对象请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateConfigurationAggregator(updateConfigurationAggregatorRequest?: UpdateConfigurationAggregatorRequest): Promise<UpdateConfigurationAggregatorResponse> {
        const options = ParamCreater().updateConfigurationAggregator(updateConfigurationAggregatorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源与资源关系的变更历史
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源历史
     * @param {string} resourceId 资源ID
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {number} [limit] 最大的返回数量
     * @param {number} [earlierTime] 指定查询范围的起始时间点，如果不设置此参数，默认为最早的时间
     * @param {number} [laterTime] 指定查询范围的结束时间点，如果不设置此参数，默认为当前时间
     * @param {'Forward' | 'Reverse'} [chronologicalOrder] 指定返回数据的时间顺序，默认为倒序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceHistory(showResourceHistoryRequest?: ShowResourceHistoryRequest): Promise<ShowResourceHistoryResponse> {
        const options = ParamCreater().showResourceHistory(showResourceHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建或更新组织合规规则，如果规则名称已存在，则为更新操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建或更新组织合规规则
     * @param {string} organizationId 组织ID。
     * @param {OrganizationPolicyAssignmentRequest} [organizationPolicyAssignmentRequest] 组织规则定义对象。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrganizationPolicyAssignment(createOrganizationPolicyAssignmentRequest?: CreateOrganizationPolicyAssignmentRequest): Promise<CreateOrganizationPolicyAssignmentResponse> {
        const options = ParamCreater().createOrganizationPolicyAssignment(createOrganizationPolicyAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建新的合规规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建合规规则
     * @param {PolicyAssignmentRequestBody} [policyAssignmentRequestBody] 合规规则定义对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPolicyAssignments(createPolicyAssignmentsRequest?: CreatePolicyAssignmentsRequest): Promise<CreatePolicyAssignmentsResponse> {
        const options = ParamCreater().createPolicyAssignments(createPolicyAssignmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除组织合规规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除组织合规规则
     * @param {string} organizationId 组织ID。
     * @param {string} organizationPolicyAssignmentId 组织合规规则ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteOrganizationPolicyAssignment(deleteOrganizationPolicyAssignmentRequest?: DeleteOrganizationPolicyAssignmentRequest): Promise<DeleteOrganizationPolicyAssignmentResponse> {
        const options = ParamCreater().deleteOrganizationPolicyAssignment(deleteOrganizationPolicyAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据规则ID删除此规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除合规规则
     * @param {string} policyAssignmentId 规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePolicyAssignment(deletePolicyAssignmentRequest?: DeletePolicyAssignmentRequest): Promise<DeletePolicyAssignmentResponse> {
        const options = ParamCreater().deletePolicyAssignment(deletePolicyAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据规则ID停用此规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停用合规规则
     * @param {string} policyAssignmentId 规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disablePolicyAssignment(disablePolicyAssignmentRequest?: DisablePolicyAssignmentRequest): Promise<DisablePolicyAssignmentResponse> {
        const options = ParamCreater().disablePolicyAssignment(disablePolicyAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据规则ID启用此规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用合规规则
     * @param {string} policyAssignmentId 规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enablePolicyAssignment(enablePolicyAssignmentRequest?: EnablePolicyAssignmentRequest): Promise<EnablePolicyAssignmentResponse> {
        const options = ParamCreater().enablePolicyAssignment(enablePolicyAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出用户的内置策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出内置策略
     * @param {string} [xLanguage] 选择接口返回的信息的语言，默认为\&quot;zh-cn\&quot;中文
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBuiltInPolicyDefinitions(listBuiltInPolicyDefinitionsRequest?: ListBuiltInPolicyDefinitionsRequest): Promise<ListBuiltInPolicyDefinitionsResponse> {
        const options = ParamCreater().listBuiltInPolicyDefinitions(listBuiltInPolicyDefinitionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织合规规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询组织合规规则列表
     * @param {string} organizationId 组织ID。
     * @param {string} [organizationPolicyAssignmentName] 组织合规规则名称。
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOrganizationPolicyAssignments(listOrganizationPolicyAssignmentsRequest?: ListOrganizationPolicyAssignmentsRequest): Promise<ListOrganizationPolicyAssignmentsResponse> {
        const options = ParamCreater().listOrganizationPolicyAssignments(listOrganizationPolicyAssignmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出用户的合规规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出合规规则
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyAssignments(listPolicyAssignmentsRequest?: ListPolicyAssignmentsRequest): Promise<ListPolicyAssignmentsResponse> {
        const options = ParamCreater().listPolicyAssignments();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据规则ID查询所有的合规结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取规则的合规结果
     * @param {string} policyAssignmentId 规则ID
     * @param {string} [complianceState] 合规状态
     * @param {string} [resourceId] 资源ID
     * @param {string} [resourceName] 资源名称
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyStatesByAssignmentId(listPolicyStatesByAssignmentIdRequest?: ListPolicyStatesByAssignmentIdRequest): Promise<ListPolicyStatesByAssignmentIdResponse> {
        const options = ParamCreater().listPolicyStatesByAssignmentId(listPolicyStatesByAssignmentIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户所有的合规结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取用户的合规结果
     * @param {string} [complianceState] 合规状态
     * @param {string} [resourceId] 资源ID
     * @param {string} [resourceName] 资源名称
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyStatesByDomainId(listPolicyStatesByDomainIdRequest?: ListPolicyStatesByDomainIdRequest): Promise<ListPolicyStatesByDomainIdResponse> {
        const options = ParamCreater().listPolicyStatesByDomainId(listPolicyStatesByDomainIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据资源ID查询所有合规结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取资源的合规结果
     * @param {string} resourceId 资源ID
     * @param {string} [complianceState] 合规状态
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyStatesByResourceId(listPolicyStatesByResourceIdRequest?: ListPolicyStatesByResourceIdRequest): Promise<ListPolicyStatesByResourceIdResponse> {
        const options = ParamCreater().listPolicyStatesByResourceId(listPolicyStatesByResourceIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据规则ID评估此规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 运行合规评估
     * @param {string} policyAssignmentId 规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runEvaluationByPolicyAssignmentId(runEvaluationByPolicyAssignmentIdRequest?: RunEvaluationByPolicyAssignmentIdRequest): Promise<RunEvaluationByPolicyAssignmentIdResponse> {
        const options = ParamCreater().runEvaluationByPolicyAssignmentId(runEvaluationByPolicyAssignmentIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据策略ID查询单个内置策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个内置策略
     * @param {string} policyDefinitionId 策略ID
     * @param {string} [xLanguage] 选择接口返回的信息的语言，默认为\&quot;zh-cn\&quot;中文
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBuiltInPolicyDefinition(showBuiltInPolicyDefinitionRequest?: ShowBuiltInPolicyDefinitionRequest): Promise<ShowBuiltInPolicyDefinitionResponse> {
        const options = ParamCreater().showBuiltInPolicyDefinition(showBuiltInPolicyDefinitionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据规则ID查询此规则的评估状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取规则的评估状态
     * @param {string} policyAssignmentId 规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEvaluationStateByAssignmentId(showEvaluationStateByAssignmentIdRequest?: ShowEvaluationStateByAssignmentIdRequest): Promise<ShowEvaluationStateByAssignmentIdResponse> {
        const options = ParamCreater().showEvaluationStateByAssignmentId(showEvaluationStateByAssignmentIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定组织合规规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定组织合规规则
     * @param {string} organizationId 组织ID。
     * @param {string} organizationPolicyAssignmentId 组织合规规则ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOrganizationPolicyAssignment(showOrganizationPolicyAssignmentRequest?: ShowOrganizationPolicyAssignmentRequest): Promise<ShowOrganizationPolicyAssignmentResponse> {
        const options = ParamCreater().showOrganizationPolicyAssignment(showOrganizationPolicyAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织内每个成员帐号合规规则部署的详细状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询组织内每个成员帐号合规规则部署的详细状态
     * @param {string} organizationId 组织ID。
     * @param {string} organizationPolicyAssignmentName 组织合规规则名称。
     * @param {'CREATE_SUCCESSFUL' | 'CREATE_IN_PROGRESS' | 'CREATE_FAILED' | 'DELETE_SUCCESSFUL' | 'DELETE_IN_PROGRESS' | 'DELETE_FAILED' | 'UPDATE_SUCCESSFUL' | 'UPDATE_IN_PROGRESS' | 'UPDATE_FAILED'} [status] 成员帐号规则部署状态，区分大小写。
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOrganizationPolicyAssignmentDetailedStatus(showOrganizationPolicyAssignmentDetailedStatusRequest?: ShowOrganizationPolicyAssignmentDetailedStatusRequest): Promise<ShowOrganizationPolicyAssignmentDetailedStatusResponse> {
        const options = ParamCreater().showOrganizationPolicyAssignmentDetailedStatus(showOrganizationPolicyAssignmentDetailedStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织合规规则部署状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询组织合规规则部署状态
     * @param {string} organizationId 组织ID。
     * @param {string} [organizationPolicyAssignmentName] 组织合规规则名称。
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOrganizationPolicyAssignmentStatuses(showOrganizationPolicyAssignmentStatusesRequest?: ShowOrganizationPolicyAssignmentStatusesRequest): Promise<ShowOrganizationPolicyAssignmentStatusesResponse> {
        const options = ParamCreater().showOrganizationPolicyAssignmentStatuses(showOrganizationPolicyAssignmentStatusesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据规则ID获取单个规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取单个合规规则
     * @param {string} policyAssignmentId 规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPolicyAssignment(showPolicyAssignmentRequest?: ShowPolicyAssignmentRequest): Promise<ShowPolicyAssignmentResponse> {
        const options = ParamCreater().showPolicyAssignment(showPolicyAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新用户的合规规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新合规规则
     * @param {string} policyAssignmentId 规则ID
     * @param {PolicyAssignmentRequestBody} [policyAssignmentRequestBody] 合规规则对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePolicyAssignment(updatePolicyAssignmentRequest?: UpdatePolicyAssignmentRequest): Promise<UpdatePolicyAssignmentResponse> {
        const options = ParamCreater().updatePolicyAssignment(updatePolicyAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新用户自定义合规规则的合规评估结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新合规评估结果
     * @param {PolicyStateRequestBody} [policyStateRequestBody] 合规评估结果。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePolicyState(updatePolicyStateRequest?: UpdatePolicyStateRequest): Promise<UpdatePolicyStateResponse> {
        const options = ParamCreater().updatePolicyState(updatePolicyStateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建新的高级查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建高级查询
     * @param {StoredQueryRequestBody} storedQueryRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStoredQuery(createStoredQueryRequest?: CreateStoredQueryRequest): Promise<CreateStoredQueryResponse> {
        const options = ParamCreater().createStoredQuery(createStoredQueryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除单个高级查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除高级查询
     * @param {string} queryId 查询ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStoredQuery(deleteStoredQueryRequest?: DeleteStoredQueryRequest): Promise<DeleteStoredQueryResponse> {
        const options = ParamCreater().deleteStoredQuery(deleteStoredQueryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * List Schemas
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举高级查询Schema
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSchemas(listSchemasRequest?: ListSchemasRequest): Promise<ListSchemasResponse> {
        const options = ParamCreater().listSchemas(listSchemasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举所有高级查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出高级查询
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {string} [name] ResourceQL 名字
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStoredQueries(listStoredQueriesRequest?: ListStoredQueriesRequest): Promise<ListStoredQueriesResponse> {
        const options = ParamCreater().listStoredQueries(listStoredQueriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 执行高级查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 运行高级查询
     * @param {QueryRunRequestBody} queryRunRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runQuery(runQueryRequest?: RunQueryRequest): Promise<RunQueryResponse> {
        const options = ParamCreater().runQuery(runQueryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Show Resource Query Language
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个高级查询
     * @param {string} queryId 查询ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStoredQuery(showStoredQueryRequest?: ShowStoredQueryRequest): Promise<ShowStoredQueryResponse> {
        const options = ParamCreater().showStoredQuery(showStoredQueryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新自定义查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新单个高级查询
     * @param {string} queryId 查询ID
     * @param {StoredQueryRequestBody} storedQueryRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStoredQuery(updateStoredQueryRequest?: UpdateStoredQueryRequest): Promise<UpdateStoredQueryResponse> {
        const options = ParamCreater().updateStoredQuery(updateStoredQueryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户可见的区域
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户可见的区域
     * @param {'zh-cn' | 'en-us'} [xLanguage] 选择接口返回的信息的语言，默认为\&quot;zh-cn\&quot;中文
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRegions(listRegionsRequest?: ListRegionsRequest): Promise<ListRegionsResponse> {
        const options = ParamCreater().listRegions(listRegionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定资源ID，查询该资源与其他资源的关联关系，可以指定关系方向为\&quot;in\&quot; 或者\&quot;out\&quot;
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源关系
     * @param {string} resourceId 资源ID
     * @param {'in' | 'out'} direction 资源关系的指向
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceRelations(showResourceRelationsRequest?: ShowResourceRelationsRequest): Promise<ShowResourceRelationsResponse> {
        const options = ParamCreater().showResourceRelations(showResourceRelationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定资源ID，查询该资源与其他资源的关联关系，可以指定关系方向为“in”或者“out”，需要当帐号有rms:resources:getRelation权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源关系详情
     * @param {string} resourceId 资源ID
     * @param {'in' | 'out'} direction 资源关系的指向。
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceRelationsDetail(showResourceRelationsDetailRequest?: ShowResourceRelationsDetailRequest): Promise<ShowResourceRelationsDetailResponse> {
        const options = ParamCreater().showResourceRelationsDetail(showResourceRelationsDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前帐号的资源概览。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源概要
     * @param {string} [name] 资源名称
     * @param {Array<string>} [type] 资源类型（provider.type）
     * @param {Array<string>} [regionId] 区域ID列表
     * @param {Array<string>} [epId] 企业项目ID列表
     * @param {Array<string>} [projectId] 项目ID
     * @param {Array<string>} [tags] 标签列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public collectAllResourcesSummary(collectAllResourcesSummaryRequest?: CollectAllResourcesSummaryRequest): Promise<CollectAllResourcesSummaryResponse> {
        const options = ParamCreater().collectAllResourcesSummary(collectAllResourcesSummaryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前帐号的资源数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源数量
     * @param {string} [id] 资源ID
     * @param {string} [name] 资源名称
     * @param {Array<string>} [type] 资源类型（provider.type）
     * @param {Array<string>} [regionId] 区域ID列表
     * @param {Array<string>} [epId] 企业项目ID列表
     * @param {Array<string>} [projectId] 项目ID
     * @param {Array<string>} [tags] 标签列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countAllResources(countAllResourcesRequest?: CountAllResourcesRequest): Promise<CountAllResourcesResponse> {
        const options = ParamCreater().countAllResources(countAllResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回当前用户下所有资源，需要当前用户有rms:resources:list权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举所有资源
     * @param {string} [regionId] 区域ID
     * @param {string} [epId] 企业项目ID
     * @param {string} [type] 资源类型（provider.type）
     * @param {number} [limit] 最大的返回数量。
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {string} [id] 资源ID
     * @param {string} [name] 资源名称
     * @param {Array<string>} [tags] 标签列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllResources(listAllResourcesRequest?: ListAllResourcesRequest): Promise<ListAllResourcesResponse> {
        const options = ParamCreater().listAllResources(listAllResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前帐号下所有资源的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源标签
     * @param {string} [key] 标签键名
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {number} [limit] 最大的返回数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllTags(listAllTagsRequest?: ListAllTagsRequest): Promise<ListAllTagsResponse> {
        const options = ParamCreater().listAllTags(listAllTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询RMS支持的云服务、资源、区域列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举云服务
     * @param {number} [offset] 分页偏移
     * @param {number} [limit] 最大的返回数量
     * @param {'tracked' | 'untracked'} [track] 资源是否默认收集
     * @param {'zh-cn' | 'en-us'} [xLanguage] 选择接口返回的信息的语言，默认为\&quot;zh-cn\&quot;中文
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProviders(listProvidersRequest?: ListProvidersRequest): Promise<ListProvidersResponse> {
        const options = ParamCreater().listProviders(listProvidersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回当前租户下特定资源类型的资源，需要当前用户有rms:resources:list权限。比如查询云服务器，对应的RMS资源类型是ecs.cloudservers，其中provider为ecs，type为cloudservers。 RMS支持的服务和资源类型参见[支持的服务和区域](https://console.huaweicloud.com/eps/#/resources/supported)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举指定类型的资源
     * @param {string} provider 云服务名称
     * @param {string} type 资源类型名称
     * @param {string} [regionId] 区域ID
     * @param {string} [epId] 企业项目ID
     * @param {{ [key: string]: Array<string>; }} [tag] 标签
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResources(listResourcesRequest?: ListResourcesRequest): Promise<ListResourcesResponse> {
        const options = ParamCreater().listResources(listResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定资源ID，返回该资源的详细信息，需要当前用户有rms:resources:get权限。比如查询云服务器，对应的RMS资源类型是ecs.cloudservers，其中provider为ecs，type为cloudservers。RMS支持的服务和资源类型参见[支持的服务和区域](https://console.huaweicloud.com/eps/#/resources/supported)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个资源
     * @param {string} provider 云服务名称
     * @param {string} type 资源类型名称
     * @param {string} resourceId 资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceById(showResourceByIdRequest?: ShowResourceByIdRequest): Promise<ShowResourceByIdResponse> {
        const options = ParamCreater().showResourceById(showResourceByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前帐号下的单个资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询帐号下的单个资源
     * @param {string} resourceId 资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceDetail(showResourceDetailRequest?: ShowResourceDetailRequest): Promise<ShowResourceDetailResponse> {
        const options = ParamCreater().showResourceDetail(showResourceDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建或更新资源记录器，只能存在一个资源记录器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建或更新记录器
     * @param {TrackerConfigBody} [trackerConfigBody] Tracker对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTrackerConfig(createTrackerConfigRequest?: CreateTrackerConfigRequest): Promise<CreateTrackerConfigResponse> {
        const options = ParamCreater().createTrackerConfig(createTrackerConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源记录器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除记录器
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTrackerConfig(deleteTrackerConfigRequest?: DeleteTrackerConfigRequest): Promise<DeleteTrackerConfigResponse> {
        const options = ParamCreater().deleteTrackerConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源记录器的详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询记录器
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrackerConfig(showTrackerConfigRequest?: ShowTrackerConfigRequest): Promise<ShowTrackerConfigResponse> {
        const options = ParamCreater().showTrackerConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 给资源聚合器帐号授予从源帐号收集数据的权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAggregationAuthorization(createAggregationAuthorizationRequest?: CreateAggregationAuthorizationRequest) {
            const options = {
                method: "PUT",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/aggregation-authorization",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAggregationAuthorizationRequest !== null && createAggregationAuthorizationRequest !== undefined) {
                if (createAggregationAuthorizationRequest instanceof CreateAggregationAuthorizationRequest) {
                    body = createAggregationAuthorizationRequest.body
                } else {
                    body = createAggregationAuthorizationRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建资源聚合器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConfigurationAggregator(createConfigurationAggregatorRequest?: CreateConfigurationAggregatorRequest) {
            const options = {
                method: "PUT",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createConfigurationAggregatorRequest !== null && createConfigurationAggregatorRequest !== undefined) {
                if (createConfigurationAggregatorRequest instanceof CreateConfigurationAggregatorRequest) {
                    body = createConfigurationAggregatorRequest.body
                } else {
                    body = createConfigurationAggregatorRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定资源聚合器帐号的授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAggregationAuthorization(deleteAggregationAuthorizationRequest?: DeleteAggregationAuthorizationRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/aggregation-authorization/{authorized_account_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let authorizedAccountId;

            if (deleteAggregationAuthorizationRequest !== null && deleteAggregationAuthorizationRequest !== undefined) {
                if (deleteAggregationAuthorizationRequest instanceof DeleteAggregationAuthorizationRequest) {
                    authorizedAccountId = deleteAggregationAuthorizationRequest.authorizedAccountId;
                } else {
                    authorizedAccountId = deleteAggregationAuthorizationRequest['authorized_account_id'];
                }
            }

        
            if (authorizedAccountId === null || authorizedAccountId === undefined) {
            throw new RequiredError('authorizedAccountId','Required parameter authorizedAccountId was null or undefined when calling deleteAggregationAuthorization.');
            }

            options.pathParams = { 'authorized_account_id': authorizedAccountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源聚合器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConfigurationAggregator(deleteConfigurationAggregatorRequest?: DeleteConfigurationAggregatorRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/{aggregator_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let aggregatorId;

            if (deleteConfigurationAggregatorRequest !== null && deleteConfigurationAggregatorRequest !== undefined) {
                if (deleteConfigurationAggregatorRequest instanceof DeleteConfigurationAggregatorRequest) {
                    aggregatorId = deleteConfigurationAggregatorRequest.aggregatorId;
                } else {
                    aggregatorId = deleteConfigurationAggregatorRequest['aggregator_id'];
                }
            }

        
            if (aggregatorId === null || aggregatorId === undefined) {
            throw new RequiredError('aggregatorId','Required parameter aggregatorId was null or undefined when calling deleteConfigurationAggregator.');
            }

            options.pathParams = { 'aggregator_id': aggregatorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除聚合器帐号中挂起的授权请求。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePendingAggregationRequest(deletePendingAggregationRequestRequest?: DeletePendingAggregationRequestRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/pending-aggregation-request/{requester_account_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let requesterAccountId;

            if (deletePendingAggregationRequestRequest !== null && deletePendingAggregationRequestRequest !== undefined) {
                if (deletePendingAggregationRequestRequest instanceof DeletePendingAggregationRequestRequest) {
                    requesterAccountId = deletePendingAggregationRequestRequest.requesterAccountId;
                } else {
                    requesterAccountId = deletePendingAggregationRequestRequest['requester_account_id'];
                }
            }

        
            if (requesterAccountId === null || requesterAccountId === undefined) {
            throw new RequiredError('requesterAccountId','Required parameter requesterAccountId was null or undefined when calling deletePendingAggregationRequest.');
            }

            options.pathParams = { 'requester_account_id': requesterAccountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询合规和不合规规则的列表，其中包含合规和不合规规则的资源数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAggregateComplianceByPolicyAssignment(listAggregateComplianceByPolicyAssignmentRequest?: ListAggregateComplianceByPolicyAssignmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/aggregate-data/policy-assignments/compliance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let marker;

            if (listAggregateComplianceByPolicyAssignmentRequest !== null && listAggregateComplianceByPolicyAssignmentRequest !== undefined) {
                if (listAggregateComplianceByPolicyAssignmentRequest instanceof ListAggregateComplianceByPolicyAssignmentRequest) {
                    limit = listAggregateComplianceByPolicyAssignmentRequest.limit;
                    marker = listAggregateComplianceByPolicyAssignmentRequest.marker;
                    body = listAggregateComplianceByPolicyAssignmentRequest.body
                } else {
                    limit = listAggregateComplianceByPolicyAssignmentRequest['limit'];
                    marker = listAggregateComplianceByPolicyAssignmentRequest['marker'];
                    body = listAggregateComplianceByPolicyAssignmentRequest['body'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源聚合器中特定资源的列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAggregateDiscoveredResources(listAggregateDiscoveredResourcesRequest?: ListAggregateDiscoveredResourcesRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/aggregate-data/aggregate-discovered-resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let marker;

            if (listAggregateDiscoveredResourcesRequest !== null && listAggregateDiscoveredResourcesRequest !== undefined) {
                if (listAggregateDiscoveredResourcesRequest instanceof ListAggregateDiscoveredResourcesRequest) {
                    limit = listAggregateDiscoveredResourcesRequest.limit;
                    marker = listAggregateDiscoveredResourcesRequest.marker;
                    body = listAggregateDiscoveredResourcesRequest.body
                } else {
                    limit = listAggregateDiscoveredResourcesRequest['limit'];
                    marker = listAggregateDiscoveredResourcesRequest['marker'];
                    body = listAggregateDiscoveredResourcesRequest['body'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询授权过的资源聚合器列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAggregationAuthorizations(listAggregationAuthorizationsRequest?: ListAggregationAuthorizationsRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/aggregation-authorization",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let accountId;
            
            let limit;
            
            let marker;

            if (listAggregationAuthorizationsRequest !== null && listAggregationAuthorizationsRequest !== undefined) {
                if (listAggregationAuthorizationsRequest instanceof ListAggregationAuthorizationsRequest) {
                    accountId = listAggregationAuthorizationsRequest.accountId;
                    limit = listAggregationAuthorizationsRequest.limit;
                    marker = listAggregationAuthorizationsRequest.marker;
                } else {
                    accountId = listAggregationAuthorizationsRequest['account_id'];
                    limit = listAggregationAuthorizationsRequest['limit'];
                    marker = listAggregationAuthorizationsRequest['marker'];
                }
            }

        
            if (accountId !== null && accountId !== undefined) {
                localVarQueryParameter['account_id'] = accountId;
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
         * 查询资源聚合器列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConfigurationAggregators(listConfigurationAggregatorsRequest?: ListConfigurationAggregatorsRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let aggregatorName;
            
            let limit;
            
            let marker;

            if (listConfigurationAggregatorsRequest !== null && listConfigurationAggregatorsRequest !== undefined) {
                if (listConfigurationAggregatorsRequest instanceof ListConfigurationAggregatorsRequest) {
                    aggregatorName = listConfigurationAggregatorsRequest.aggregatorName;
                    limit = listConfigurationAggregatorsRequest.limit;
                    marker = listConfigurationAggregatorsRequest.marker;
                } else {
                    aggregatorName = listConfigurationAggregatorsRequest['aggregator_name'];
                    limit = listConfigurationAggregatorsRequest['limit'];
                    marker = listConfigurationAggregatorsRequest['marker'];
                }
            }

        
            if (aggregatorName !== null && aggregatorName !== undefined) {
                localVarQueryParameter['aggregator_name'] = aggregatorName;
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
         * 查询所有挂起的聚合请求列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPendingAggregationRequests(listPendingAggregationRequestsRequest?: ListPendingAggregationRequestsRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/pending-aggregation-request",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let accountId;
            
            let limit;
            
            let marker;

            if (listPendingAggregationRequestsRequest !== null && listPendingAggregationRequestsRequest !== undefined) {
                if (listPendingAggregationRequestsRequest instanceof ListPendingAggregationRequestsRequest) {
                    accountId = listPendingAggregationRequestsRequest.accountId;
                    limit = listPendingAggregationRequestsRequest.limit;
                    marker = listPendingAggregationRequestsRequest.marker;
                } else {
                    accountId = listPendingAggregationRequestsRequest['account_id'];
                    limit = listPendingAggregationRequestsRequest['limit'];
                    marker = listPendingAggregationRequestsRequest['marker'];
                }
            }

        
            if (accountId !== null && accountId !== undefined) {
                localVarQueryParameter['account_id'] = accountId;
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
         * 对指定聚合器执行高级查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runAggregateResourceQuery(runAggregateResourceQueryRequest?: RunAggregateResourceQueryRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/{aggregator_id}/run-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let aggregatorId;

            if (runAggregateResourceQueryRequest !== null && runAggregateResourceQueryRequest !== undefined) {
                if (runAggregateResourceQueryRequest instanceof RunAggregateResourceQueryRequest) {
                    aggregatorId = runAggregateResourceQueryRequest.aggregatorId;
                    body = runAggregateResourceQueryRequest.body
                } else {
                    aggregatorId = runAggregateResourceQueryRequest['aggregator_id'];
                    body = runAggregateResourceQueryRequest['body'];
                }
            }

        
            if (aggregatorId === null || aggregatorId === undefined) {
            throw new RequiredError('aggregatorId','Required parameter aggregatorId was null or undefined when calling runAggregateResourceQuery.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'aggregator_id': aggregatorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 返回指定聚合合规规则的评估结果详情。包含评估了哪些资源，以及每个资源是否符合规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAggregateComplianceDetailsByPolicyAssignment(showAggregateComplianceDetailsByPolicyAssignmentRequest?: ShowAggregateComplianceDetailsByPolicyAssignmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/aggregate-data/policy-states/compliance-details",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let marker;

            if (showAggregateComplianceDetailsByPolicyAssignmentRequest !== null && showAggregateComplianceDetailsByPolicyAssignmentRequest !== undefined) {
                if (showAggregateComplianceDetailsByPolicyAssignmentRequest instanceof ShowAggregateComplianceDetailsByPolicyAssignmentRequest) {
                    limit = showAggregateComplianceDetailsByPolicyAssignmentRequest.limit;
                    marker = showAggregateComplianceDetailsByPolicyAssignmentRequest.marker;
                    body = showAggregateComplianceDetailsByPolicyAssignmentRequest.body
                } else {
                    limit = showAggregateComplianceDetailsByPolicyAssignmentRequest['limit'];
                    marker = showAggregateComplianceDetailsByPolicyAssignmentRequest['marker'];
                    body = showAggregateComplianceDetailsByPolicyAssignmentRequest['body'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询聚合器中帐号资源的计数，支持通过过滤器和GroupByKey来统计资源数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAggregateDiscoveredResourceCounts(showAggregateDiscoveredResourceCountsRequest?: ShowAggregateDiscoveredResourceCountsRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/aggregate-data/aggregate-discovered-resource-counts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showAggregateDiscoveredResourceCountsRequest !== null && showAggregateDiscoveredResourceCountsRequest !== undefined) {
                if (showAggregateDiscoveredResourceCountsRequest instanceof ShowAggregateDiscoveredResourceCountsRequest) {
                    body = showAggregateDiscoveredResourceCountsRequest.body
                } else {
                    body = showAggregateDiscoveredResourceCountsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 返回指定聚合合规规则详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAggregatePolicyAssignmentDetail(showAggregatePolicyAssignmentDetailRequest?: ShowAggregatePolicyAssignmentDetailRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/aggregate-data/policy-assignment/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showAggregatePolicyAssignmentDetailRequest !== null && showAggregatePolicyAssignmentDetailRequest !== undefined) {
                if (showAggregatePolicyAssignmentDetailRequest instanceof ShowAggregatePolicyAssignmentDetailRequest) {
                    body = showAggregatePolicyAssignmentDetailRequest.body
                } else {
                    body = showAggregatePolicyAssignmentDetailRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询聚合器中一个或多个帐户的合规和不合规规则数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAggregatePolicyStateComplianceSummary(showAggregatePolicyStateComplianceSummaryRequest?: ShowAggregatePolicyStateComplianceSummaryRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/aggregate-data/policy-states/compliance-summary",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showAggregatePolicyStateComplianceSummaryRequest !== null && showAggregatePolicyStateComplianceSummaryRequest !== undefined) {
                if (showAggregatePolicyStateComplianceSummaryRequest instanceof ShowAggregatePolicyStateComplianceSummaryRequest) {
                    body = showAggregatePolicyStateComplianceSummaryRequest.body
                } else {
                    body = showAggregatePolicyStateComplianceSummaryRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询源帐号中特定资源的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAggregateResourceConfig(showAggregateResourceConfigRequest?: ShowAggregateResourceConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/aggregate-resource-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showAggregateResourceConfigRequest !== null && showAggregateResourceConfigRequest !== undefined) {
                if (showAggregateResourceConfigRequest instanceof ShowAggregateResourceConfigRequest) {
                    body = showAggregateResourceConfigRequest.body
                } else {
                    body = showAggregateResourceConfigRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定资源聚合器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConfigurationAggregator(showConfigurationAggregatorRequest?: ShowConfigurationAggregatorRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/{aggregator_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let aggregatorId;

            if (showConfigurationAggregatorRequest !== null && showConfigurationAggregatorRequest !== undefined) {
                if (showConfigurationAggregatorRequest instanceof ShowConfigurationAggregatorRequest) {
                    aggregatorId = showConfigurationAggregatorRequest.aggregatorId;
                } else {
                    aggregatorId = showConfigurationAggregatorRequest['aggregator_id'];
                }
            }

        
            if (aggregatorId === null || aggregatorId === undefined) {
            throw new RequiredError('aggregatorId','Required parameter aggregatorId was null or undefined when calling showConfigurationAggregator.');
            }

            options.pathParams = { 'aggregator_id': aggregatorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定资源聚合器聚合帐号的状态信息，状态包括验证源帐号和聚合器帐号之间授权的信息。如果失败，状态包含相关的错误码或消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConfigurationAggregatorSourcesStatus(showConfigurationAggregatorSourcesStatusRequest?: ShowConfigurationAggregatorSourcesStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/{aggregator_id}/aggregator-sources-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let aggregatorId;
            
            let updateStatus;
            
            let limit;
            
            let marker;

            if (showConfigurationAggregatorSourcesStatusRequest !== null && showConfigurationAggregatorSourcesStatusRequest !== undefined) {
                if (showConfigurationAggregatorSourcesStatusRequest instanceof ShowConfigurationAggregatorSourcesStatusRequest) {
                    aggregatorId = showConfigurationAggregatorSourcesStatusRequest.aggregatorId;
                    updateStatus = showConfigurationAggregatorSourcesStatusRequest.updateStatus;
                    limit = showConfigurationAggregatorSourcesStatusRequest.limit;
                    marker = showConfigurationAggregatorSourcesStatusRequest.marker;
                } else {
                    aggregatorId = showConfigurationAggregatorSourcesStatusRequest['aggregator_id'];
                    updateStatus = showConfigurationAggregatorSourcesStatusRequest['update_status'];
                    limit = showConfigurationAggregatorSourcesStatusRequest['limit'];
                    marker = showConfigurationAggregatorSourcesStatusRequest['marker'];
                }
            }

        
            if (aggregatorId === null || aggregatorId === undefined) {
            throw new RequiredError('aggregatorId','Required parameter aggregatorId was null or undefined when calling showConfigurationAggregatorSourcesStatus.');
            }
            if (updateStatus !== null && updateStatus !== undefined) {
                localVarQueryParameter['update_status'] = updateStatus;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'aggregator_id': aggregatorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新资源聚合器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateConfigurationAggregator(updateConfigurationAggregatorRequest?: UpdateConfigurationAggregatorRequest) {
            const options = {
                method: "PUT",
                url: "/v1/resource-manager/domains/{domain_id}/aggregators/{aggregator_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let aggregatorId;

            if (updateConfigurationAggregatorRequest !== null && updateConfigurationAggregatorRequest !== undefined) {
                if (updateConfigurationAggregatorRequest instanceof UpdateConfigurationAggregatorRequest) {
                    aggregatorId = updateConfigurationAggregatorRequest.aggregatorId;
                    body = updateConfigurationAggregatorRequest.body
                } else {
                    aggregatorId = updateConfigurationAggregatorRequest['aggregator_id'];
                    body = updateConfigurationAggregatorRequest['body'];
                }
            }

        
            if (aggregatorId === null || aggregatorId === undefined) {
            throw new RequiredError('aggregatorId','Required parameter aggregatorId was null or undefined when calling updateConfigurationAggregator.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'aggregator_id': aggregatorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源与资源关系的变更历史
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceHistory(showResourceHistoryRequest?: ShowResourceHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/resources/{resource_id}/history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceId;
            
            let marker;
            
            let limit;
            
            let earlierTime;
            
            let laterTime;
            
            let chronologicalOrder;

            if (showResourceHistoryRequest !== null && showResourceHistoryRequest !== undefined) {
                if (showResourceHistoryRequest instanceof ShowResourceHistoryRequest) {
                    resourceId = showResourceHistoryRequest.resourceId;
                    marker = showResourceHistoryRequest.marker;
                    limit = showResourceHistoryRequest.limit;
                    earlierTime = showResourceHistoryRequest.earlierTime;
                    laterTime = showResourceHistoryRequest.laterTime;
                    chronologicalOrder = showResourceHistoryRequest.chronologicalOrder;
                } else {
                    resourceId = showResourceHistoryRequest['resource_id'];
                    marker = showResourceHistoryRequest['marker'];
                    limit = showResourceHistoryRequest['limit'];
                    earlierTime = showResourceHistoryRequest['earlier_time'];
                    laterTime = showResourceHistoryRequest['later_time'];
                    chronologicalOrder = showResourceHistoryRequest['chronological_order'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showResourceHistory.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (earlierTime !== null && earlierTime !== undefined) {
                localVarQueryParameter['earlier_time'] = earlierTime;
            }
            if (laterTime !== null && laterTime !== undefined) {
                localVarQueryParameter['later_time'] = laterTime;
            }
            if (chronologicalOrder !== null && chronologicalOrder !== undefined) {
                localVarQueryParameter['chronological_order'] = chronologicalOrder;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建或更新组织合规规则，如果规则名称已存在，则为更新操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrganizationPolicyAssignment(createOrganizationPolicyAssignmentRequest?: CreateOrganizationPolicyAssignmentRequest) {
            const options = {
                method: "PUT",
                url: "/v1/resource-manager/organizations/{organization_id}/policy-assignments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let organizationId;

            if (createOrganizationPolicyAssignmentRequest !== null && createOrganizationPolicyAssignmentRequest !== undefined) {
                if (createOrganizationPolicyAssignmentRequest instanceof CreateOrganizationPolicyAssignmentRequest) {
                    organizationId = createOrganizationPolicyAssignmentRequest.organizationId;
                    body = createOrganizationPolicyAssignmentRequest.body
                } else {
                    organizationId = createOrganizationPolicyAssignmentRequest['organization_id'];
                    body = createOrganizationPolicyAssignmentRequest['body'];
                }
            }

        
            if (organizationId === null || organizationId === undefined) {
            throw new RequiredError('organizationId','Required parameter organizationId was null or undefined when calling createOrganizationPolicyAssignment.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'organization_id': organizationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建新的合规规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPolicyAssignments(createPolicyAssignmentsRequest?: CreatePolicyAssignmentsRequest) {
            const options = {
                method: "PUT",
                url: "/v1/resource-manager/domains/{domain_id}/policy-assignments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPolicyAssignmentsRequest !== null && createPolicyAssignmentsRequest !== undefined) {
                if (createPolicyAssignmentsRequest instanceof CreatePolicyAssignmentsRequest) {
                    body = createPolicyAssignmentsRequest.body
                } else {
                    body = createPolicyAssignmentsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除组织合规规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteOrganizationPolicyAssignment(deleteOrganizationPolicyAssignmentRequest?: DeleteOrganizationPolicyAssignmentRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/resource-manager/organizations/{organization_id}/policy-assignments/{organization_policy_assignment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let organizationId;
            
            let organizationPolicyAssignmentId;

            if (deleteOrganizationPolicyAssignmentRequest !== null && deleteOrganizationPolicyAssignmentRequest !== undefined) {
                if (deleteOrganizationPolicyAssignmentRequest instanceof DeleteOrganizationPolicyAssignmentRequest) {
                    organizationId = deleteOrganizationPolicyAssignmentRequest.organizationId;
                    organizationPolicyAssignmentId = deleteOrganizationPolicyAssignmentRequest.organizationPolicyAssignmentId;
                } else {
                    organizationId = deleteOrganizationPolicyAssignmentRequest['organization_id'];
                    organizationPolicyAssignmentId = deleteOrganizationPolicyAssignmentRequest['organization_policy_assignment_id'];
                }
            }

        
            if (organizationId === null || organizationId === undefined) {
            throw new RequiredError('organizationId','Required parameter organizationId was null or undefined when calling deleteOrganizationPolicyAssignment.');
            }
            if (organizationPolicyAssignmentId === null || organizationPolicyAssignmentId === undefined) {
            throw new RequiredError('organizationPolicyAssignmentId','Required parameter organizationPolicyAssignmentId was null or undefined when calling deleteOrganizationPolicyAssignment.');
            }

            options.pathParams = { 'organization_id': organizationId,'organization_policy_assignment_id': organizationPolicyAssignmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据规则ID删除此规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePolicyAssignment(deletePolicyAssignmentRequest?: DeletePolicyAssignmentRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/resource-manager/domains/{domain_id}/policy-assignments/{policy_assignment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyAssignmentId;

            if (deletePolicyAssignmentRequest !== null && deletePolicyAssignmentRequest !== undefined) {
                if (deletePolicyAssignmentRequest instanceof DeletePolicyAssignmentRequest) {
                    policyAssignmentId = deletePolicyAssignmentRequest.policyAssignmentId;
                } else {
                    policyAssignmentId = deletePolicyAssignmentRequest['policy_assignment_id'];
                }
            }

        
            if (policyAssignmentId === null || policyAssignmentId === undefined) {
            throw new RequiredError('policyAssignmentId','Required parameter policyAssignmentId was null or undefined when calling deletePolicyAssignment.');
            }

            options.pathParams = { 'policy_assignment_id': policyAssignmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据规则ID停用此规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disablePolicyAssignment(disablePolicyAssignmentRequest?: DisablePolicyAssignmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-manager/domains/{domain_id}/policy-assignments/{policy_assignment_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyAssignmentId;

            if (disablePolicyAssignmentRequest !== null && disablePolicyAssignmentRequest !== undefined) {
                if (disablePolicyAssignmentRequest instanceof DisablePolicyAssignmentRequest) {
                    policyAssignmentId = disablePolicyAssignmentRequest.policyAssignmentId;
                } else {
                    policyAssignmentId = disablePolicyAssignmentRequest['policy_assignment_id'];
                }
            }

        
            if (policyAssignmentId === null || policyAssignmentId === undefined) {
            throw new RequiredError('policyAssignmentId','Required parameter policyAssignmentId was null or undefined when calling disablePolicyAssignment.');
            }

            options.pathParams = { 'policy_assignment_id': policyAssignmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据规则ID启用此规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enablePolicyAssignment(enablePolicyAssignmentRequest?: EnablePolicyAssignmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-manager/domains/{domain_id}/policy-assignments/{policy_assignment_id}/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyAssignmentId;

            if (enablePolicyAssignmentRequest !== null && enablePolicyAssignmentRequest !== undefined) {
                if (enablePolicyAssignmentRequest instanceof EnablePolicyAssignmentRequest) {
                    policyAssignmentId = enablePolicyAssignmentRequest.policyAssignmentId;
                } else {
                    policyAssignmentId = enablePolicyAssignmentRequest['policy_assignment_id'];
                }
            }

        
            if (policyAssignmentId === null || policyAssignmentId === undefined) {
            throw new RequiredError('policyAssignmentId','Required parameter policyAssignmentId was null or undefined when calling enablePolicyAssignment.');
            }

            options.pathParams = { 'policy_assignment_id': policyAssignmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出用户的内置策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBuiltInPolicyDefinitions(listBuiltInPolicyDefinitionsRequest?: ListBuiltInPolicyDefinitionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/policy-definitions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (listBuiltInPolicyDefinitionsRequest !== null && listBuiltInPolicyDefinitionsRequest !== undefined) {
                if (listBuiltInPolicyDefinitionsRequest instanceof ListBuiltInPolicyDefinitionsRequest) {
                    xLanguage = listBuiltInPolicyDefinitionsRequest.xLanguage;
                } else {
                    xLanguage = listBuiltInPolicyDefinitionsRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组织合规规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOrganizationPolicyAssignments(listOrganizationPolicyAssignmentsRequest?: ListOrganizationPolicyAssignmentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/organizations/{organization_id}/policy-assignments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let organizationId;
            
            let organizationPolicyAssignmentName;
            
            let limit;
            
            let marker;

            if (listOrganizationPolicyAssignmentsRequest !== null && listOrganizationPolicyAssignmentsRequest !== undefined) {
                if (listOrganizationPolicyAssignmentsRequest instanceof ListOrganizationPolicyAssignmentsRequest) {
                    organizationId = listOrganizationPolicyAssignmentsRequest.organizationId;
                    organizationPolicyAssignmentName = listOrganizationPolicyAssignmentsRequest.organizationPolicyAssignmentName;
                    limit = listOrganizationPolicyAssignmentsRequest.limit;
                    marker = listOrganizationPolicyAssignmentsRequest.marker;
                } else {
                    organizationId = listOrganizationPolicyAssignmentsRequest['organization_id'];
                    organizationPolicyAssignmentName = listOrganizationPolicyAssignmentsRequest['organization_policy_assignment_name'];
                    limit = listOrganizationPolicyAssignmentsRequest['limit'];
                    marker = listOrganizationPolicyAssignmentsRequest['marker'];
                }
            }

        
            if (organizationId === null || organizationId === undefined) {
            throw new RequiredError('organizationId','Required parameter organizationId was null or undefined when calling listOrganizationPolicyAssignments.');
            }
            if (organizationPolicyAssignmentName !== null && organizationPolicyAssignmentName !== undefined) {
                localVarQueryParameter['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'organization_id': organizationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出用户的合规规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyAssignments() {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/policy-assignments",
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
         * 根据规则ID查询所有的合规结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyStatesByAssignmentId(listPolicyStatesByAssignmentIdRequest?: ListPolicyStatesByAssignmentIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/policy-assignments/{policy_assignment_id}/policy-states",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyAssignmentId;
            
            let complianceState;
            
            let resourceId;
            
            let resourceName;
            
            let limit;
            
            let marker;

            if (listPolicyStatesByAssignmentIdRequest !== null && listPolicyStatesByAssignmentIdRequest !== undefined) {
                if (listPolicyStatesByAssignmentIdRequest instanceof ListPolicyStatesByAssignmentIdRequest) {
                    policyAssignmentId = listPolicyStatesByAssignmentIdRequest.policyAssignmentId;
                    complianceState = listPolicyStatesByAssignmentIdRequest.complianceState;
                    resourceId = listPolicyStatesByAssignmentIdRequest.resourceId;
                    resourceName = listPolicyStatesByAssignmentIdRequest.resourceName;
                    limit = listPolicyStatesByAssignmentIdRequest.limit;
                    marker = listPolicyStatesByAssignmentIdRequest.marker;
                } else {
                    policyAssignmentId = listPolicyStatesByAssignmentIdRequest['policy_assignment_id'];
                    complianceState = listPolicyStatesByAssignmentIdRequest['compliance_state'];
                    resourceId = listPolicyStatesByAssignmentIdRequest['resource_id'];
                    resourceName = listPolicyStatesByAssignmentIdRequest['resource_name'];
                    limit = listPolicyStatesByAssignmentIdRequest['limit'];
                    marker = listPolicyStatesByAssignmentIdRequest['marker'];
                }
            }

        
            if (policyAssignmentId === null || policyAssignmentId === undefined) {
            throw new RequiredError('policyAssignmentId','Required parameter policyAssignmentId was null or undefined when calling listPolicyStatesByAssignmentId.');
            }
            if (complianceState !== null && complianceState !== undefined) {
                localVarQueryParameter['compliance_state'] = complianceState;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (resourceName !== null && resourceName !== undefined) {
                localVarQueryParameter['resource_name'] = resourceName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_assignment_id': policyAssignmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户所有的合规结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyStatesByDomainId(listPolicyStatesByDomainIdRequest?: ListPolicyStatesByDomainIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/policy-states",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let complianceState;
            
            let resourceId;
            
            let resourceName;
            
            let limit;
            
            let marker;

            if (listPolicyStatesByDomainIdRequest !== null && listPolicyStatesByDomainIdRequest !== undefined) {
                if (listPolicyStatesByDomainIdRequest instanceof ListPolicyStatesByDomainIdRequest) {
                    complianceState = listPolicyStatesByDomainIdRequest.complianceState;
                    resourceId = listPolicyStatesByDomainIdRequest.resourceId;
                    resourceName = listPolicyStatesByDomainIdRequest.resourceName;
                    limit = listPolicyStatesByDomainIdRequest.limit;
                    marker = listPolicyStatesByDomainIdRequest.marker;
                } else {
                    complianceState = listPolicyStatesByDomainIdRequest['compliance_state'];
                    resourceId = listPolicyStatesByDomainIdRequest['resource_id'];
                    resourceName = listPolicyStatesByDomainIdRequest['resource_name'];
                    limit = listPolicyStatesByDomainIdRequest['limit'];
                    marker = listPolicyStatesByDomainIdRequest['marker'];
                }
            }

        
            if (complianceState !== null && complianceState !== undefined) {
                localVarQueryParameter['compliance_state'] = complianceState;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (resourceName !== null && resourceName !== undefined) {
                localVarQueryParameter['resource_name'] = resourceName;
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
         * 根据资源ID查询所有合规结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyStatesByResourceId(listPolicyStatesByResourceIdRequest?: ListPolicyStatesByResourceIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/resources/{resource_id}/policy-states",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceId;
            
            let complianceState;
            
            let limit;
            
            let marker;

            if (listPolicyStatesByResourceIdRequest !== null && listPolicyStatesByResourceIdRequest !== undefined) {
                if (listPolicyStatesByResourceIdRequest instanceof ListPolicyStatesByResourceIdRequest) {
                    resourceId = listPolicyStatesByResourceIdRequest.resourceId;
                    complianceState = listPolicyStatesByResourceIdRequest.complianceState;
                    limit = listPolicyStatesByResourceIdRequest.limit;
                    marker = listPolicyStatesByResourceIdRequest.marker;
                } else {
                    resourceId = listPolicyStatesByResourceIdRequest['resource_id'];
                    complianceState = listPolicyStatesByResourceIdRequest['compliance_state'];
                    limit = listPolicyStatesByResourceIdRequest['limit'];
                    marker = listPolicyStatesByResourceIdRequest['marker'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listPolicyStatesByResourceId.');
            }
            if (complianceState !== null && complianceState !== undefined) {
                localVarQueryParameter['compliance_state'] = complianceState;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据规则ID评估此规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runEvaluationByPolicyAssignmentId(runEvaluationByPolicyAssignmentIdRequest?: RunEvaluationByPolicyAssignmentIdRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-manager/domains/{domain_id}/policy-assignments/{policy_assignment_id}/policy-states/run-evaluation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyAssignmentId;

            if (runEvaluationByPolicyAssignmentIdRequest !== null && runEvaluationByPolicyAssignmentIdRequest !== undefined) {
                if (runEvaluationByPolicyAssignmentIdRequest instanceof RunEvaluationByPolicyAssignmentIdRequest) {
                    policyAssignmentId = runEvaluationByPolicyAssignmentIdRequest.policyAssignmentId;
                } else {
                    policyAssignmentId = runEvaluationByPolicyAssignmentIdRequest['policy_assignment_id'];
                }
            }

        
            if (policyAssignmentId === null || policyAssignmentId === undefined) {
            throw new RequiredError('policyAssignmentId','Required parameter policyAssignmentId was null or undefined when calling runEvaluationByPolicyAssignmentId.');
            }

            options.pathParams = { 'policy_assignment_id': policyAssignmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据策略ID查询单个内置策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBuiltInPolicyDefinition(showBuiltInPolicyDefinitionRequest?: ShowBuiltInPolicyDefinitionRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/policy-definitions/{policy_definition_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyDefinitionId;
            
            let xLanguage;

            if (showBuiltInPolicyDefinitionRequest !== null && showBuiltInPolicyDefinitionRequest !== undefined) {
                if (showBuiltInPolicyDefinitionRequest instanceof ShowBuiltInPolicyDefinitionRequest) {
                    policyDefinitionId = showBuiltInPolicyDefinitionRequest.policyDefinitionId;
                    xLanguage = showBuiltInPolicyDefinitionRequest.xLanguage;
                } else {
                    policyDefinitionId = showBuiltInPolicyDefinitionRequest['policy_definition_id'];
                    xLanguage = showBuiltInPolicyDefinitionRequest['X-Language'];
                }
            }

        
            if (policyDefinitionId === null || policyDefinitionId === undefined) {
            throw new RequiredError('policyDefinitionId','Required parameter policyDefinitionId was null or undefined when calling showBuiltInPolicyDefinition.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'policy_definition_id': policyDefinitionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据规则ID查询此规则的评估状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEvaluationStateByAssignmentId(showEvaluationStateByAssignmentIdRequest?: ShowEvaluationStateByAssignmentIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/policy-assignments/{policy_assignment_id}/policy-states/evaluation-state",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyAssignmentId;

            if (showEvaluationStateByAssignmentIdRequest !== null && showEvaluationStateByAssignmentIdRequest !== undefined) {
                if (showEvaluationStateByAssignmentIdRequest instanceof ShowEvaluationStateByAssignmentIdRequest) {
                    policyAssignmentId = showEvaluationStateByAssignmentIdRequest.policyAssignmentId;
                } else {
                    policyAssignmentId = showEvaluationStateByAssignmentIdRequest['policy_assignment_id'];
                }
            }

        
            if (policyAssignmentId === null || policyAssignmentId === undefined) {
            throw new RequiredError('policyAssignmentId','Required parameter policyAssignmentId was null or undefined when calling showEvaluationStateByAssignmentId.');
            }

            options.pathParams = { 'policy_assignment_id': policyAssignmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定组织合规规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOrganizationPolicyAssignment(showOrganizationPolicyAssignmentRequest?: ShowOrganizationPolicyAssignmentRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/organizations/{organization_id}/policy-assignments/{organization_policy_assignment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let organizationId;
            
            let organizationPolicyAssignmentId;

            if (showOrganizationPolicyAssignmentRequest !== null && showOrganizationPolicyAssignmentRequest !== undefined) {
                if (showOrganizationPolicyAssignmentRequest instanceof ShowOrganizationPolicyAssignmentRequest) {
                    organizationId = showOrganizationPolicyAssignmentRequest.organizationId;
                    organizationPolicyAssignmentId = showOrganizationPolicyAssignmentRequest.organizationPolicyAssignmentId;
                } else {
                    organizationId = showOrganizationPolicyAssignmentRequest['organization_id'];
                    organizationPolicyAssignmentId = showOrganizationPolicyAssignmentRequest['organization_policy_assignment_id'];
                }
            }

        
            if (organizationId === null || organizationId === undefined) {
            throw new RequiredError('organizationId','Required parameter organizationId was null or undefined when calling showOrganizationPolicyAssignment.');
            }
            if (organizationPolicyAssignmentId === null || organizationPolicyAssignmentId === undefined) {
            throw new RequiredError('organizationPolicyAssignmentId','Required parameter organizationPolicyAssignmentId was null or undefined when calling showOrganizationPolicyAssignment.');
            }

            options.pathParams = { 'organization_id': organizationId,'organization_policy_assignment_id': organizationPolicyAssignmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组织内每个成员帐号合规规则部署的详细状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOrganizationPolicyAssignmentDetailedStatus(showOrganizationPolicyAssignmentDetailedStatusRequest?: ShowOrganizationPolicyAssignmentDetailedStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/organizations/{organization_id}/policy-assignment-detailed-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let organizationId;
            
            let organizationPolicyAssignmentName;
            
            let status;
            
            let limit;
            
            let marker;

            if (showOrganizationPolicyAssignmentDetailedStatusRequest !== null && showOrganizationPolicyAssignmentDetailedStatusRequest !== undefined) {
                if (showOrganizationPolicyAssignmentDetailedStatusRequest instanceof ShowOrganizationPolicyAssignmentDetailedStatusRequest) {
                    organizationId = showOrganizationPolicyAssignmentDetailedStatusRequest.organizationId;
                    organizationPolicyAssignmentName = showOrganizationPolicyAssignmentDetailedStatusRequest.organizationPolicyAssignmentName;
                    status = showOrganizationPolicyAssignmentDetailedStatusRequest.status;
                    limit = showOrganizationPolicyAssignmentDetailedStatusRequest.limit;
                    marker = showOrganizationPolicyAssignmentDetailedStatusRequest.marker;
                } else {
                    organizationId = showOrganizationPolicyAssignmentDetailedStatusRequest['organization_id'];
                    organizationPolicyAssignmentName = showOrganizationPolicyAssignmentDetailedStatusRequest['organization_policy_assignment_name'];
                    status = showOrganizationPolicyAssignmentDetailedStatusRequest['status'];
                    limit = showOrganizationPolicyAssignmentDetailedStatusRequest['limit'];
                    marker = showOrganizationPolicyAssignmentDetailedStatusRequest['marker'];
                }
            }

        
            if (organizationId === null || organizationId === undefined) {
            throw new RequiredError('organizationId','Required parameter organizationId was null or undefined when calling showOrganizationPolicyAssignmentDetailedStatus.');
            }
            if (organizationPolicyAssignmentName === null || organizationPolicyAssignmentName === undefined) {
                throw new RequiredError('organizationPolicyAssignmentName','Required parameter organizationPolicyAssignmentName was null or undefined when calling showOrganizationPolicyAssignmentDetailedStatus.');
            }
            if (organizationPolicyAssignmentName !== null && organizationPolicyAssignmentName !== undefined) {
                localVarQueryParameter['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'organization_id': organizationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组织合规规则部署状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOrganizationPolicyAssignmentStatuses(showOrganizationPolicyAssignmentStatusesRequest?: ShowOrganizationPolicyAssignmentStatusesRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/organizations/{organization_id}/policy-assignment-statuses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let organizationId;
            
            let organizationPolicyAssignmentName;
            
            let limit;
            
            let marker;

            if (showOrganizationPolicyAssignmentStatusesRequest !== null && showOrganizationPolicyAssignmentStatusesRequest !== undefined) {
                if (showOrganizationPolicyAssignmentStatusesRequest instanceof ShowOrganizationPolicyAssignmentStatusesRequest) {
                    organizationId = showOrganizationPolicyAssignmentStatusesRequest.organizationId;
                    organizationPolicyAssignmentName = showOrganizationPolicyAssignmentStatusesRequest.organizationPolicyAssignmentName;
                    limit = showOrganizationPolicyAssignmentStatusesRequest.limit;
                    marker = showOrganizationPolicyAssignmentStatusesRequest.marker;
                } else {
                    organizationId = showOrganizationPolicyAssignmentStatusesRequest['organization_id'];
                    organizationPolicyAssignmentName = showOrganizationPolicyAssignmentStatusesRequest['organization_policy_assignment_name'];
                    limit = showOrganizationPolicyAssignmentStatusesRequest['limit'];
                    marker = showOrganizationPolicyAssignmentStatusesRequest['marker'];
                }
            }

        
            if (organizationId === null || organizationId === undefined) {
            throw new RequiredError('organizationId','Required parameter organizationId was null or undefined when calling showOrganizationPolicyAssignmentStatuses.');
            }
            if (organizationPolicyAssignmentName !== null && organizationPolicyAssignmentName !== undefined) {
                localVarQueryParameter['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'organization_id': organizationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据规则ID获取单个规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPolicyAssignment(showPolicyAssignmentRequest?: ShowPolicyAssignmentRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/policy-assignments/{policy_assignment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyAssignmentId;

            if (showPolicyAssignmentRequest !== null && showPolicyAssignmentRequest !== undefined) {
                if (showPolicyAssignmentRequest instanceof ShowPolicyAssignmentRequest) {
                    policyAssignmentId = showPolicyAssignmentRequest.policyAssignmentId;
                } else {
                    policyAssignmentId = showPolicyAssignmentRequest['policy_assignment_id'];
                }
            }

        
            if (policyAssignmentId === null || policyAssignmentId === undefined) {
            throw new RequiredError('policyAssignmentId','Required parameter policyAssignmentId was null or undefined when calling showPolicyAssignment.');
            }

            options.pathParams = { 'policy_assignment_id': policyAssignmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新用户的合规规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePolicyAssignment(updatePolicyAssignmentRequest?: UpdatePolicyAssignmentRequest) {
            const options = {
                method: "PUT",
                url: "/v1/resource-manager/domains/{domain_id}/policy-assignments/{policy_assignment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyAssignmentId;

            if (updatePolicyAssignmentRequest !== null && updatePolicyAssignmentRequest !== undefined) {
                if (updatePolicyAssignmentRequest instanceof UpdatePolicyAssignmentRequest) {
                    policyAssignmentId = updatePolicyAssignmentRequest.policyAssignmentId;
                    body = updatePolicyAssignmentRequest.body
                } else {
                    policyAssignmentId = updatePolicyAssignmentRequest['policy_assignment_id'];
                    body = updatePolicyAssignmentRequest['body'];
                }
            }

        
            if (policyAssignmentId === null || policyAssignmentId === undefined) {
            throw new RequiredError('policyAssignmentId','Required parameter policyAssignmentId was null or undefined when calling updatePolicyAssignment.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_assignment_id': policyAssignmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新用户自定义合规规则的合规评估结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePolicyState(updatePolicyStateRequest?: UpdatePolicyStateRequest) {
            const options = {
                method: "PUT",
                url: "/v1/resource-manager/domains/{domain_id}/policy-states",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updatePolicyStateRequest !== null && updatePolicyStateRequest !== undefined) {
                if (updatePolicyStateRequest instanceof UpdatePolicyStateRequest) {
                    body = updatePolicyStateRequest.body
                } else {
                    body = updatePolicyStateRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建新的高级查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStoredQuery(createStoredQueryRequest?: CreateStoredQueryRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-manager/domains/{domain_id}/stored-queries",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createStoredQueryRequest !== null && createStoredQueryRequest !== undefined) {
                if (createStoredQueryRequest instanceof CreateStoredQueryRequest) {
                    body = createStoredQueryRequest.body
                } else {
                    body = createStoredQueryRequest['body'];
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
         * 删除单个高级查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStoredQuery(deleteStoredQueryRequest?: DeleteStoredQueryRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/resource-manager/domains/{domain_id}/stored-queries/{query_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let queryId;

            if (deleteStoredQueryRequest !== null && deleteStoredQueryRequest !== undefined) {
                if (deleteStoredQueryRequest instanceof DeleteStoredQueryRequest) {
                    queryId = deleteStoredQueryRequest.queryId;
                } else {
                    queryId = deleteStoredQueryRequest['query_id'];
                }
            }

        
            if (queryId === null || queryId === undefined) {
            throw new RequiredError('queryId','Required parameter queryId was null or undefined when calling deleteStoredQuery.');
            }

            options.pathParams = { 'query_id': queryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * List Schemas
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSchemas(listSchemasRequest?: ListSchemasRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/schemas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listSchemasRequest !== null && listSchemasRequest !== undefined) {
                if (listSchemasRequest instanceof ListSchemasRequest) {
                    limit = listSchemasRequest.limit;
                    marker = listSchemasRequest.marker;
                } else {
                    limit = listSchemasRequest['limit'];
                    marker = listSchemasRequest['marker'];
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
         * 列举所有高级查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStoredQueries(listStoredQueriesRequest?: ListStoredQueriesRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/stored-queries",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let name;

            if (listStoredQueriesRequest !== null && listStoredQueriesRequest !== undefined) {
                if (listStoredQueriesRequest instanceof ListStoredQueriesRequest) {
                    limit = listStoredQueriesRequest.limit;
                    marker = listStoredQueriesRequest.marker;
                    name = listStoredQueriesRequest.name;
                } else {
                    limit = listStoredQueriesRequest['limit'];
                    marker = listStoredQueriesRequest['marker'];
                    name = listStoredQueriesRequest['name'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 执行高级查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runQuery(runQueryRequest?: RunQueryRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-manager/domains/{domain_id}/run-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runQueryRequest !== null && runQueryRequest !== undefined) {
                if (runQueryRequest instanceof RunQueryRequest) {
                    body = runQueryRequest.body
                } else {
                    body = runQueryRequest['body'];
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
         * Show Resource Query Language
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStoredQuery(showStoredQueryRequest?: ShowStoredQueryRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/stored-queries/{query_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let queryId;

            if (showStoredQueryRequest !== null && showStoredQueryRequest !== undefined) {
                if (showStoredQueryRequest instanceof ShowStoredQueryRequest) {
                    queryId = showStoredQueryRequest.queryId;
                } else {
                    queryId = showStoredQueryRequest['query_id'];
                }
            }

        
            if (queryId === null || queryId === undefined) {
            throw new RequiredError('queryId','Required parameter queryId was null or undefined when calling showStoredQuery.');
            }

            options.pathParams = { 'query_id': queryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新自定义查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStoredQuery(updateStoredQueryRequest?: UpdateStoredQueryRequest) {
            const options = {
                method: "PUT",
                url: "/v1/resource-manager/domains/{domain_id}/stored-queries/{query_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let queryId;

            if (updateStoredQueryRequest !== null && updateStoredQueryRequest !== undefined) {
                if (updateStoredQueryRequest instanceof UpdateStoredQueryRequest) {
                    queryId = updateStoredQueryRequest.queryId;
                    body = updateStoredQueryRequest.body
                } else {
                    queryId = updateStoredQueryRequest['query_id'];
                    body = updateStoredQueryRequest['body'];
                }
            }

        
            if (queryId === null || queryId === undefined) {
            throw new RequiredError('queryId','Required parameter queryId was null or undefined when calling updateStoredQuery.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'query_id': queryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户可见的区域
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRegions(listRegionsRequest?: ListRegionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/regions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (listRegionsRequest !== null && listRegionsRequest !== undefined) {
                if (listRegionsRequest instanceof ListRegionsRequest) {
                    xLanguage = listRegionsRequest.xLanguage;
                } else {
                    xLanguage = listRegionsRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定资源ID，查询该资源与其他资源的关联关系，可以指定关系方向为\&quot;in\&quot; 或者\&quot;out\&quot;
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceRelations(showResourceRelationsRequest?: ShowResourceRelationsRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/resources/{resource_id}/relations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceId;
            
            let direction;
            
            let limit;
            
            let marker;

            if (showResourceRelationsRequest !== null && showResourceRelationsRequest !== undefined) {
                if (showResourceRelationsRequest instanceof ShowResourceRelationsRequest) {
                    resourceId = showResourceRelationsRequest.resourceId;
                    direction = showResourceRelationsRequest.direction;
                    limit = showResourceRelationsRequest.limit;
                    marker = showResourceRelationsRequest.marker;
                } else {
                    resourceId = showResourceRelationsRequest['resource_id'];
                    direction = showResourceRelationsRequest['direction'];
                    limit = showResourceRelationsRequest['limit'];
                    marker = showResourceRelationsRequest['marker'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showResourceRelations.');
            }
            if (direction === null || direction === undefined) {
                throw new RequiredError('direction','Required parameter direction was null or undefined when calling showResourceRelations.');
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定资源ID，查询该资源与其他资源的关联关系，可以指定关系方向为“in”或者“out”，需要当帐号有rms:resources:getRelation权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceRelationsDetail(showResourceRelationsDetailRequest?: ShowResourceRelationsDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/all-resources/{resource_id}/relations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceId;
            
            let direction;
            
            let limit;
            
            let marker;

            if (showResourceRelationsDetailRequest !== null && showResourceRelationsDetailRequest !== undefined) {
                if (showResourceRelationsDetailRequest instanceof ShowResourceRelationsDetailRequest) {
                    resourceId = showResourceRelationsDetailRequest.resourceId;
                    direction = showResourceRelationsDetailRequest.direction;
                    limit = showResourceRelationsDetailRequest.limit;
                    marker = showResourceRelationsDetailRequest.marker;
                } else {
                    resourceId = showResourceRelationsDetailRequest['resource_id'];
                    direction = showResourceRelationsDetailRequest['direction'];
                    limit = showResourceRelationsDetailRequest['limit'];
                    marker = showResourceRelationsDetailRequest['marker'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showResourceRelationsDetail.');
            }
            if (direction === null || direction === undefined) {
                throw new RequiredError('direction','Required parameter direction was null or undefined when calling showResourceRelationsDetail.');
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前帐号的资源概览。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        collectAllResourcesSummary(collectAllResourcesSummaryRequest?: CollectAllResourcesSummaryRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/all-resources/summary",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let type;
            
            let regionId;
            
            let epId;
            
            let projectId;
            
            let tags;

            if (collectAllResourcesSummaryRequest !== null && collectAllResourcesSummaryRequest !== undefined) {
                if (collectAllResourcesSummaryRequest instanceof CollectAllResourcesSummaryRequest) {
                    name = collectAllResourcesSummaryRequest.name;
                    type = collectAllResourcesSummaryRequest.type;
                    regionId = collectAllResourcesSummaryRequest.regionId;
                    epId = collectAllResourcesSummaryRequest.epId;
                    projectId = collectAllResourcesSummaryRequest.projectId;
                    tags = collectAllResourcesSummaryRequest.tags;
                } else {
                    name = collectAllResourcesSummaryRequest['name'];
                    type = collectAllResourcesSummaryRequest['type'];
                    regionId = collectAllResourcesSummaryRequest['region_id'];
                    epId = collectAllResourcesSummaryRequest['ep_id'];
                    projectId = collectAllResourcesSummaryRequest['project_id'];
                    tags = collectAllResourcesSummaryRequest['tags'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (epId !== null && epId !== undefined) {
                localVarQueryParameter['ep_id'] = epId;
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前帐号的资源数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countAllResources(countAllResourcesRequest?: CountAllResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/all-resources/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let name;
            
            let type;
            
            let regionId;
            
            let epId;
            
            let projectId;
            
            let tags;

            if (countAllResourcesRequest !== null && countAllResourcesRequest !== undefined) {
                if (countAllResourcesRequest instanceof CountAllResourcesRequest) {
                    id = countAllResourcesRequest.id;
                    name = countAllResourcesRequest.name;
                    type = countAllResourcesRequest.type;
                    regionId = countAllResourcesRequest.regionId;
                    epId = countAllResourcesRequest.epId;
                    projectId = countAllResourcesRequest.projectId;
                    tags = countAllResourcesRequest.tags;
                } else {
                    id = countAllResourcesRequest['id'];
                    name = countAllResourcesRequest['name'];
                    type = countAllResourcesRequest['type'];
                    regionId = countAllResourcesRequest['region_id'];
                    epId = countAllResourcesRequest['ep_id'];
                    projectId = countAllResourcesRequest['project_id'];
                    tags = countAllResourcesRequest['tags'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (epId !== null && epId !== undefined) {
                localVarQueryParameter['ep_id'] = epId;
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 返回当前用户下所有资源，需要当前用户有rms:resources:list权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllResources(listAllResourcesRequest?: ListAllResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/all-resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let regionId;
            
            let epId;
            
            let type;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let tags;

            if (listAllResourcesRequest !== null && listAllResourcesRequest !== undefined) {
                if (listAllResourcesRequest instanceof ListAllResourcesRequest) {
                    regionId = listAllResourcesRequest.regionId;
                    epId = listAllResourcesRequest.epId;
                    type = listAllResourcesRequest.type;
                    limit = listAllResourcesRequest.limit;
                    marker = listAllResourcesRequest.marker;
                    id = listAllResourcesRequest.id;
                    name = listAllResourcesRequest.name;
                    tags = listAllResourcesRequest.tags;
                } else {
                    regionId = listAllResourcesRequest['region_id'];
                    epId = listAllResourcesRequest['ep_id'];
                    type = listAllResourcesRequest['type'];
                    limit = listAllResourcesRequest['limit'];
                    marker = listAllResourcesRequest['marker'];
                    id = listAllResourcesRequest['id'];
                    name = listAllResourcesRequest['name'];
                    tags = listAllResourcesRequest['tags'];
                }
            }

        
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (epId !== null && epId !== undefined) {
                localVarQueryParameter['ep_id'] = epId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前帐号下所有资源的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllTags(listAllTagsRequest?: ListAllTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/all-resources/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let key;
            
            let marker;
            
            let limit;

            if (listAllTagsRequest !== null && listAllTagsRequest !== undefined) {
                if (listAllTagsRequest instanceof ListAllTagsRequest) {
                    key = listAllTagsRequest.key;
                    marker = listAllTagsRequest.marker;
                    limit = listAllTagsRequest.limit;
                } else {
                    key = listAllTagsRequest['key'];
                    marker = listAllTagsRequest['marker'];
                    limit = listAllTagsRequest['limit'];
                }
            }

        
            if (key !== null && key !== undefined) {
                localVarQueryParameter['key'] = key;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询RMS支持的云服务、资源、区域列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProviders(listProvidersRequest?: ListProvidersRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/providers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let track;
            
            let xLanguage;

            if (listProvidersRequest !== null && listProvidersRequest !== undefined) {
                if (listProvidersRequest instanceof ListProvidersRequest) {
                    offset = listProvidersRequest.offset;
                    limit = listProvidersRequest.limit;
                    track = listProvidersRequest.track;
                    xLanguage = listProvidersRequest.xLanguage;
                } else {
                    offset = listProvidersRequest['offset'];
                    limit = listProvidersRequest['limit'];
                    track = listProvidersRequest['track'];
                    xLanguage = listProvidersRequest['X-Language'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (track !== null && track !== undefined) {
                localVarQueryParameter['track'] = track;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 返回当前租户下特定资源类型的资源，需要当前用户有rms:resources:list权限。比如查询云服务器，对应的RMS资源类型是ecs.cloudservers，其中provider为ecs，type为cloudservers。 RMS支持的服务和资源类型参见[支持的服务和区域](https://console.huaweicloud.com/eps/#/resources/supported)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResources(listResourcesRequest?: ListResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/provider/{provider}/type/{type}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let provider;
            
            let type;
            
            let regionId;
            
            let epId;
            
            let tag;
            
            let limit;
            
            let marker;

            if (listResourcesRequest !== null && listResourcesRequest !== undefined) {
                if (listResourcesRequest instanceof ListResourcesRequest) {
                    provider = listResourcesRequest.provider;
                    type = listResourcesRequest.type;
                    regionId = listResourcesRequest.regionId;
                    epId = listResourcesRequest.epId;
                    tag = listResourcesRequest.tag;
                    limit = listResourcesRequest.limit;
                    marker = listResourcesRequest.marker;
                } else {
                    provider = listResourcesRequest['provider'];
                    type = listResourcesRequest['type'];
                    regionId = listResourcesRequest['region_id'];
                    epId = listResourcesRequest['ep_id'];
                    tag = listResourcesRequest['tag'];
                    limit = listResourcesRequest['limit'];
                    marker = listResourcesRequest['marker'];
                }
            }

        
            if (provider === null || provider === undefined) {
            throw new RequiredError('provider','Required parameter provider was null or undefined when calling listResources.');
            }
            if (type === null || type === undefined) {
            throw new RequiredError('type','Required parameter type was null or undefined when calling listResources.');
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (epId !== null && epId !== undefined) {
                localVarQueryParameter['ep_id'] = epId;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'provider': provider,'type': type, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定资源ID，返回该资源的详细信息，需要当前用户有rms:resources:get权限。比如查询云服务器，对应的RMS资源类型是ecs.cloudservers，其中provider为ecs，type为cloudservers。RMS支持的服务和资源类型参见[支持的服务和区域](https://console.huaweicloud.com/eps/#/resources/supported)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceById(showResourceByIdRequest?: ShowResourceByIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/provider/{provider}/type/{type}/resources/{resource_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let provider;
            
            let type;
            
            let resourceId;

            if (showResourceByIdRequest !== null && showResourceByIdRequest !== undefined) {
                if (showResourceByIdRequest instanceof ShowResourceByIdRequest) {
                    provider = showResourceByIdRequest.provider;
                    type = showResourceByIdRequest.type;
                    resourceId = showResourceByIdRequest.resourceId;
                } else {
                    provider = showResourceByIdRequest['provider'];
                    type = showResourceByIdRequest['type'];
                    resourceId = showResourceByIdRequest['resource_id'];
                }
            }

        
            if (provider === null || provider === undefined) {
            throw new RequiredError('provider','Required parameter provider was null or undefined when calling showResourceById.');
            }
            if (type === null || type === undefined) {
            throw new RequiredError('type','Required parameter type was null or undefined when calling showResourceById.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showResourceById.');
            }

            options.pathParams = { 'provider': provider,'type': type,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前帐号下的单个资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceDetail(showResourceDetailRequest?: ShowResourceDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/all-resources/{resource_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (showResourceDetailRequest !== null && showResourceDetailRequest !== undefined) {
                if (showResourceDetailRequest instanceof ShowResourceDetailRequest) {
                    resourceId = showResourceDetailRequest.resourceId;
                } else {
                    resourceId = showResourceDetailRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showResourceDetail.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建或更新资源记录器，只能存在一个资源记录器
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTrackerConfig(createTrackerConfigRequest?: CreateTrackerConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/resource-manager/domains/{domain_id}/tracker-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTrackerConfigRequest !== null && createTrackerConfigRequest !== undefined) {
                if (createTrackerConfigRequest instanceof CreateTrackerConfigRequest) {
                    body = createTrackerConfigRequest.body
                } else {
                    body = createTrackerConfigRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源记录器
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTrackerConfig() {
            const options = {
                method: "DELETE",
                url: "/v1/resource-manager/domains/{domain_id}/tracker-config",
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
         * 查询资源记录器的详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrackerConfig() {
            const options = {
                method: "GET",
                url: "/v1/resource-manager/domains/{domain_id}/tracker-config",
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

function newClient(client: HcClient): RmsClient {
    return new RmsClient(client);
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