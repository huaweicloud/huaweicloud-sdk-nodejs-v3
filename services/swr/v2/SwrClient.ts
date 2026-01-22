import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { Accessory } from './model/Accessory';
import { AccessoryListAccessories } from './model/AccessoryListAccessories';
import { AddDomainNameRequest } from './model/AddDomainNameRequest';
import { AddDomainNameRequestBody } from './model/AddDomainNameRequestBody';
import { AddDomainNameResponse } from './model/AddDomainNameResponse';
import { Artifact } from './model/Artifact';
import { ArtifactTag } from './model/ArtifactTag';
import { AuditLog } from './model/AuditLog';
import { AuthInfo } from './model/AuthInfo';
import { AuthToken } from './model/AuthToken';
import { BuildHistory } from './model/BuildHistory';
import { CVEAllowlist } from './model/CVEAllowlist';
import { CVEAllowlistItem } from './model/CVEAllowlistItem';
import { CheckAgencyRequest } from './model/CheckAgencyRequest';
import { CheckAgencyResponse } from './model/CheckAgencyResponse';
import { CreateAgencyRequest } from './model/CreateAgencyRequest';
import { CreateAgencyResponse } from './model/CreateAgencyResponse';
import { CreateAuthorizationTokenRequest } from './model/CreateAuthorizationTokenRequest';
import { CreateAuthorizationTokenResponse } from './model/CreateAuthorizationTokenResponse';
import { CreateEndpointPolicyRequestBody } from './model/CreateEndpointPolicyRequestBody';
import { CreateImageSyncRepoRequest } from './model/CreateImageSyncRepoRequest';
import { CreateImageSyncRepoRequestBody } from './model/CreateImageSyncRepoRequestBody';
import { CreateImageSyncRepoResponse } from './model/CreateImageSyncRepoResponse';
import { CreateImmutableRuleBody } from './model/CreateImmutableRuleBody';
import { CreateImmutableRuleRequest } from './model/CreateImmutableRuleRequest';
import { CreateImmutableRuleResponse } from './model/CreateImmutableRuleResponse';
import { CreateInstanceEndpointPolicyRequest } from './model/CreateInstanceEndpointPolicyRequest';
import { CreateInstanceEndpointPolicyResponse } from './model/CreateInstanceEndpointPolicyResponse';
import { CreateInstanceInternalEndpointRequest } from './model/CreateInstanceInternalEndpointRequest';
import { CreateInstanceInternalEndpointResponse } from './model/CreateInstanceInternalEndpointResponse';
import { CreateInstanceLtCredentialRequest } from './model/CreateInstanceLtCredentialRequest';
import { CreateInstanceLtCredentialResponse } from './model/CreateInstanceLtCredentialResponse';
import { CreateInstanceNamespaceRequest } from './model/CreateInstanceNamespaceRequest';
import { CreateInstanceNamespaceRequestBody } from './model/CreateInstanceNamespaceRequestBody';
import { CreateInstanceNamespaceResponse } from './model/CreateInstanceNamespaceResponse';
import { CreateInstanceRegistryRequest } from './model/CreateInstanceRegistryRequest';
import { CreateInstanceRegistryResponse } from './model/CreateInstanceRegistryResponse';
import { CreateInstanceReplicationPolicyRequest } from './model/CreateInstanceReplicationPolicyRequest';
import { CreateInstanceReplicationPolicyResponse } from './model/CreateInstanceReplicationPolicyResponse';
import { CreateInstanceRequest } from './model/CreateInstanceRequest';
import { CreateInstanceRequestBody } from './model/CreateInstanceRequestBody';
import { CreateInstanceRequestBodyResourceTags } from './model/CreateInstanceRequestBodyResourceTags';
import { CreateInstanceResourceTagsRequest } from './model/CreateInstanceResourceTagsRequest';
import { CreateInstanceResourceTagsResponse } from './model/CreateInstanceResourceTagsResponse';
import { CreateInstanceResponse } from './model/CreateInstanceResponse';
import { CreateInstanceRetentionPolicyRequest } from './model/CreateInstanceRetentionPolicyRequest';
import { CreateInstanceRetentionPolicyResponse } from './model/CreateInstanceRetentionPolicyResponse';
import { CreateInstanceSignPolicyRequest } from './model/CreateInstanceSignPolicyRequest';
import { CreateInstanceSignPolicyResponse } from './model/CreateInstanceSignPolicyResponse';
import { CreateInstanceTempCredentialRequest } from './model/CreateInstanceTempCredentialRequest';
import { CreateInstanceTempCredentialResponse } from './model/CreateInstanceTempCredentialResponse';
import { CreateInstanceWebhookRequest } from './model/CreateInstanceWebhookRequest';
import { CreateInstanceWebhookResponse } from './model/CreateInstanceWebhookResponse';
import { CreateIntranetAccessRequestBody } from './model/CreateIntranetAccessRequestBody';
import { CreateLongTermCredentialRequestBody } from './model/CreateLongTermCredentialRequestBody';
import { CreateManualImageSyncRepoRequest } from './model/CreateManualImageSyncRepoRequest';
import { CreateManualImageSyncRepoRequestBody } from './model/CreateManualImageSyncRepoRequestBody';
import { CreateManualImageSyncRepoResponse } from './model/CreateManualImageSyncRepoResponse';
import { CreateNamespaceAuthRequest } from './model/CreateNamespaceAuthRequest';
import { CreateNamespaceAuthResponse } from './model/CreateNamespaceAuthResponse';
import { CreateNamespaceRequest } from './model/CreateNamespaceRequest';
import { CreateNamespaceRequestBody } from './model/CreateNamespaceRequestBody';
import { CreateNamespaceResponse } from './model/CreateNamespaceResponse';
import { CreateRegistryRequestBody } from './model/CreateRegistryRequestBody';
import { CreateReplicationExecutionRequestBody } from './model/CreateReplicationExecutionRequestBody';
import { CreateReplicationPolicyRequestBody } from './model/CreateReplicationPolicyRequestBody';
import { CreateRepoDomainsRequest } from './model/CreateRepoDomainsRequest';
import { CreateRepoDomainsRequestBody } from './model/CreateRepoDomainsRequestBody';
import { CreateRepoDomainsResponse } from './model/CreateRepoDomainsResponse';
import { CreateRepoRequest } from './model/CreateRepoRequest';
import { CreateRepoRequestBody } from './model/CreateRepoRequestBody';
import { CreateRepoResponse } from './model/CreateRepoResponse';
import { CreateRepoTagRequest } from './model/CreateRepoTagRequest';
import { CreateRepoTagRequestBody } from './model/CreateRepoTagRequestBody';
import { CreateRepoTagResponse } from './model/CreateRepoTagResponse';
import { CreateResourceTagsRequestBody } from './model/CreateResourceTagsRequestBody';
import { CreateRetentionPolicyRequestBody } from './model/CreateRetentionPolicyRequestBody';
import { CreateRetentionRequest } from './model/CreateRetentionRequest';
import { CreateRetentionRequestBody } from './model/CreateRetentionRequestBody';
import { CreateRetentionResponse } from './model/CreateRetentionResponse';
import { CreateSecretRequest } from './model/CreateSecretRequest';
import { CreateSecretResponse } from './model/CreateSecretResponse';
import { CreateSignaturePolicyRequestBody } from './model/CreateSignaturePolicyRequestBody';
import { CreateSubResourceTagsRequest } from './model/CreateSubResourceTagsRequest';
import { CreateSubResourceTagsResponse } from './model/CreateSubResourceTagsResponse';
import { CreateTriggerRequest } from './model/CreateTriggerRequest';
import { CreateTriggerRequestBody } from './model/CreateTriggerRequestBody';
import { CreateTriggerResponse } from './model/CreateTriggerResponse';
import { CreateUserRepositoryAuthRequest } from './model/CreateUserRepositoryAuthRequest';
import { CreateUserRepositoryAuthResponse } from './model/CreateUserRepositoryAuthResponse';
import { CreateWebhookPolicyRequestBody } from './model/CreateWebhookPolicyRequestBody';
import { Credential } from './model/Credential';
import { DeleteDomainNameRequest } from './model/DeleteDomainNameRequest';
import { DeleteDomainNameResponse } from './model/DeleteDomainNameResponse';
import { DeleteImageSyncRepoRequest } from './model/DeleteImageSyncRepoRequest';
import { DeleteImageSyncRepoRequestBody } from './model/DeleteImageSyncRepoRequestBody';
import { DeleteImageSyncRepoResponse } from './model/DeleteImageSyncRepoResponse';
import { DeleteImmutableRuleRequest } from './model/DeleteImmutableRuleRequest';
import { DeleteImmutableRuleResponse } from './model/DeleteImmutableRuleResponse';
import { DeleteInstanceArtifactRequest } from './model/DeleteInstanceArtifactRequest';
import { DeleteInstanceArtifactResponse } from './model/DeleteInstanceArtifactResponse';
import { DeleteInstanceInternalEndpointRequest } from './model/DeleteInstanceInternalEndpointRequest';
import { DeleteInstanceInternalEndpointResponse } from './model/DeleteInstanceInternalEndpointResponse';
import { DeleteInstanceJobRequest } from './model/DeleteInstanceJobRequest';
import { DeleteInstanceJobResponse } from './model/DeleteInstanceJobResponse';
import { DeleteInstanceLtCredentialRequest } from './model/DeleteInstanceLtCredentialRequest';
import { DeleteInstanceLtCredentialResponse } from './model/DeleteInstanceLtCredentialResponse';
import { DeleteInstanceNamespaceRequest } from './model/DeleteInstanceNamespaceRequest';
import { DeleteInstanceNamespaceResponse } from './model/DeleteInstanceNamespaceResponse';
import { DeleteInstanceRegistryRequest } from './model/DeleteInstanceRegistryRequest';
import { DeleteInstanceRegistryResponse } from './model/DeleteInstanceRegistryResponse';
import { DeleteInstanceReplicationPolicyRequest } from './model/DeleteInstanceReplicationPolicyRequest';
import { DeleteInstanceReplicationPolicyResponse } from './model/DeleteInstanceReplicationPolicyResponse';
import { DeleteInstanceRepositoryRequest } from './model/DeleteInstanceRepositoryRequest';
import { DeleteInstanceRepositoryResponse } from './model/DeleteInstanceRepositoryResponse';
import { DeleteInstanceRequest } from './model/DeleteInstanceRequest';
import { DeleteInstanceRequestBody } from './model/DeleteInstanceRequestBody';
import { DeleteInstanceResourceTagsRequest } from './model/DeleteInstanceResourceTagsRequest';
import { DeleteInstanceResourceTagsResponse } from './model/DeleteInstanceResourceTagsResponse';
import { DeleteInstanceResponse } from './model/DeleteInstanceResponse';
import { DeleteInstanceRetentionPolicyRequest } from './model/DeleteInstanceRetentionPolicyRequest';
import { DeleteInstanceRetentionPolicyResponse } from './model/DeleteInstanceRetentionPolicyResponse';
import { DeleteInstanceSignPolicyRequest } from './model/DeleteInstanceSignPolicyRequest';
import { DeleteInstanceSignPolicyResponse } from './model/DeleteInstanceSignPolicyResponse';
import { DeleteInstanceTagRequest } from './model/DeleteInstanceTagRequest';
import { DeleteInstanceTagResponse } from './model/DeleteInstanceTagResponse';
import { DeleteInstanceWebhookRequest } from './model/DeleteInstanceWebhookRequest';
import { DeleteInstanceWebhookResponse } from './model/DeleteInstanceWebhookResponse';
import { DeleteNamespaceAuthRequest } from './model/DeleteNamespaceAuthRequest';
import { DeleteNamespaceAuthResponse } from './model/DeleteNamespaceAuthResponse';
import { DeleteNamespacesRequest } from './model/DeleteNamespacesRequest';
import { DeleteNamespacesResponse } from './model/DeleteNamespacesResponse';
import { DeleteRepoDomainsRequest } from './model/DeleteRepoDomainsRequest';
import { DeleteRepoDomainsResponse } from './model/DeleteRepoDomainsResponse';
import { DeleteRepoRequest } from './model/DeleteRepoRequest';
import { DeleteRepoResponse } from './model/DeleteRepoResponse';
import { DeleteRepoTagRequest } from './model/DeleteRepoTagRequest';
import { DeleteRepoTagResponse } from './model/DeleteRepoTagResponse';
import { DeleteResourceTagsRequestBody } from './model/DeleteResourceTagsRequestBody';
import { DeleteRetentionRequest } from './model/DeleteRetentionRequest';
import { DeleteRetentionResponse } from './model/DeleteRetentionResponse';
import { DeleteSubResourceTagsRequest } from './model/DeleteSubResourceTagsRequest';
import { DeleteSubResourceTagsResponse } from './model/DeleteSubResourceTagsResponse';
import { DeleteTriggerRequest } from './model/DeleteTriggerRequest';
import { DeleteTriggerResponse } from './model/DeleteTriggerResponse';
import { DeleteUserRepositoryAuthRequest } from './model/DeleteUserRepositoryAuthRequest';
import { DeleteUserRepositoryAuthResponse } from './model/DeleteUserRepositoryAuthResponse';
import { DnsConf } from './model/DnsConf';
import { DomainNameInfo } from './model/DomainNameInfo';
import { ExecuteInstanceReplicationPolicyRequest } from './model/ExecuteInstanceReplicationPolicyRequest';
import { ExecuteInstanceReplicationPolicyResponse } from './model/ExecuteInstanceReplicationPolicyResponse';
import { ExecuteInstanceRetentionPolicyRequest } from './model/ExecuteInstanceRetentionPolicyRequest';
import { ExecuteInstanceRetentionPolicyResponse } from './model/ExecuteInstanceRetentionPolicyResponse';
import { ExecuteInstanceSignPolicyRequest } from './model/ExecuteInstanceSignPolicyRequest';
import { ExecuteInstanceSignPolicyResponse } from './model/ExecuteInstanceSignPolicyResponse';
import { ExecuteRetentionPolicyRequestBody } from './model/ExecuteRetentionPolicyRequestBody';
import { Execution } from './model/Execution';
import { Filter } from './model/Filter';
import { ImageRetention } from './model/ImageRetention';
import { ImageTag } from './model/ImageTag';
import { ImmutableRule } from './model/ImmutableRule';
import { Instance } from './model/Instance';
import { InternalEndpoint } from './model/InternalEndpoint';
import { IpInfo } from './model/IpInfo';
import { Job } from './model/Job';
import { JobDetail } from './model/JobDetail';
import { Link } from './model/Link';
import { ListApiVersionsRequest } from './model/ListApiVersionsRequest';
import { ListApiVersionsResponse } from './model/ListApiVersionsResponse';
import { ListAuditLogsRequest } from './model/ListAuditLogsRequest';
import { ListAuditLogsResponse } from './model/ListAuditLogsResponse';
import { ListDomainNamesRequest } from './model/ListDomainNamesRequest';
import { ListDomainNamesResponse } from './model/ListDomainNamesResponse';
import { ListFeatureGatesRequest } from './model/ListFeatureGatesRequest';
import { ListFeatureGatesResponse } from './model/ListFeatureGatesResponse';
import { ListGlobalFeatureGatesRequest } from './model/ListGlobalFeatureGatesRequest';
import { ListGlobalFeatureGatesResponse } from './model/ListGlobalFeatureGatesResponse';
import { ListImageAutoSyncReposDetailsRequest } from './model/ListImageAutoSyncReposDetailsRequest';
import { ListImageAutoSyncReposDetailsResponse } from './model/ListImageAutoSyncReposDetailsResponse';
import { ListImmutableRulesRequest } from './model/ListImmutableRulesRequest';
import { ListImmutableRulesResponse } from './model/ListImmutableRulesResponse';
import { ListInstanceAccessoriesRequest } from './model/ListInstanceAccessoriesRequest';
import { ListInstanceAccessoriesResponse } from './model/ListInstanceAccessoriesResponse';
import { ListInstanceAllArtifactsRequest } from './model/ListInstanceAllArtifactsRequest';
import { ListInstanceAllArtifactsResponse } from './model/ListInstanceAllArtifactsResponse';
import { ListInstanceArtifactVulnerabilitiesRequest } from './model/ListInstanceArtifactVulnerabilitiesRequest';
import { ListInstanceArtifactVulnerabilitiesResponse } from './model/ListInstanceArtifactVulnerabilitiesResponse';
import { ListInstanceArtifactsRequest } from './model/ListInstanceArtifactsRequest';
import { ListInstanceArtifactsResponse } from './model/ListInstanceArtifactsResponse';
import { ListInstanceInternalEndpointsRequest } from './model/ListInstanceInternalEndpointsRequest';
import { ListInstanceInternalEndpointsResponse } from './model/ListInstanceInternalEndpointsResponse';
import { ListInstanceJobsRequest } from './model/ListInstanceJobsRequest';
import { ListInstanceJobsResponse } from './model/ListInstanceJobsResponse';
import { ListInstanceLtCredentialsRequest } from './model/ListInstanceLtCredentialsRequest';
import { ListInstanceLtCredentialsResponse } from './model/ListInstanceLtCredentialsResponse';
import { ListInstanceNamespacesRequest } from './model/ListInstanceNamespacesRequest';
import { ListInstanceNamespacesResponse } from './model/ListInstanceNamespacesResponse';
import { ListInstanceProjectTagsRequest } from './model/ListInstanceProjectTagsRequest';
import { ListInstanceProjectTagsResponse } from './model/ListInstanceProjectTagsResponse';
import { ListInstanceRegistriesRequest } from './model/ListInstanceRegistriesRequest';
import { ListInstanceRegistriesResponse } from './model/ListInstanceRegistriesResponse';
import { ListInstanceReplicationPoliciesRequest } from './model/ListInstanceReplicationPoliciesRequest';
import { ListInstanceReplicationPoliciesResponse } from './model/ListInstanceReplicationPoliciesResponse';
import { ListInstanceReplicationPolicyExecSubTasksRequest } from './model/ListInstanceReplicationPolicyExecSubTasksRequest';
import { ListInstanceReplicationPolicyExecSubTasksResponse } from './model/ListInstanceReplicationPolicyExecSubTasksResponse';
import { ListInstanceReplicationPolicyExecTasksRequest } from './model/ListInstanceReplicationPolicyExecTasksRequest';
import { ListInstanceReplicationPolicyExecTasksResponse } from './model/ListInstanceReplicationPolicyExecTasksResponse';
import { ListInstanceReplicationPolicyExecutionsRequest } from './model/ListInstanceReplicationPolicyExecutionsRequest';
import { ListInstanceReplicationPolicyExecutionsResponse } from './model/ListInstanceReplicationPolicyExecutionsResponse';
import { ListInstanceRepositoriesRequest } from './model/ListInstanceRepositoriesRequest';
import { ListInstanceRepositoriesResponse } from './model/ListInstanceRepositoriesResponse';
import { ListInstanceRequest } from './model/ListInstanceRequest';
import { ListInstanceResourceInstancesRequest } from './model/ListInstanceResourceInstancesRequest';
import { ListInstanceResourceInstancesResponse } from './model/ListInstanceResourceInstancesResponse';
import { ListInstanceResourceTagsRequest } from './model/ListInstanceResourceTagsRequest';
import { ListInstanceResourceTagsResponse } from './model/ListInstanceResourceTagsResponse';
import { ListInstanceResponse } from './model/ListInstanceResponse';
import { ListInstanceRetentionPoliciesRequest } from './model/ListInstanceRetentionPoliciesRequest';
import { ListInstanceRetentionPoliciesResponse } from './model/ListInstanceRetentionPoliciesResponse';
import { ListInstanceRetentionPolicyExecSubTasksRequest } from './model/ListInstanceRetentionPolicyExecSubTasksRequest';
import { ListInstanceRetentionPolicyExecSubTasksResponse } from './model/ListInstanceRetentionPolicyExecSubTasksResponse';
import { ListInstanceRetentionPolicyExecTasksRequest } from './model/ListInstanceRetentionPolicyExecTasksRequest';
import { ListInstanceRetentionPolicyExecTasksResponse } from './model/ListInstanceRetentionPolicyExecTasksResponse';
import { ListInstanceRetentionPolicyExecutionsRequest } from './model/ListInstanceRetentionPolicyExecutionsRequest';
import { ListInstanceRetentionPolicyExecutionsResponse } from './model/ListInstanceRetentionPolicyExecutionsResponse';
import { ListInstanceSignPoliciesRequest } from './model/ListInstanceSignPoliciesRequest';
import { ListInstanceSignPoliciesResponse } from './model/ListInstanceSignPoliciesResponse';
import { ListInstanceSignPolicyExecTasksRequest } from './model/ListInstanceSignPolicyExecTasksRequest';
import { ListInstanceSignPolicyExecTasksResponse } from './model/ListInstanceSignPolicyExecTasksResponse';
import { ListInstanceSignPolicyExecutionsRequest } from './model/ListInstanceSignPolicyExecutionsRequest';
import { ListInstanceSignPolicyExecutionsResponse } from './model/ListInstanceSignPolicyExecutionsResponse';
import { ListInstanceSignatureExecutionSubtasksRequest } from './model/ListInstanceSignatureExecutionSubtasksRequest';
import { ListInstanceSignatureExecutionSubtasksResponse } from './model/ListInstanceSignatureExecutionSubtasksResponse';
import { ListInstanceStatisticsRequest } from './model/ListInstanceStatisticsRequest';
import { ListInstanceStatisticsResponse } from './model/ListInstanceStatisticsResponse';
import { ListInstanceTagsRequest } from './model/ListInstanceTagsRequest';
import { ListInstanceTagsResponse } from './model/ListInstanceTagsResponse';
import { ListInstanceWebhookJobsRequest } from './model/ListInstanceWebhookJobsRequest';
import { ListInstanceWebhookJobsResponse } from './model/ListInstanceWebhookJobsResponse';
import { ListInstanceWebhooksRequest } from './model/ListInstanceWebhooksRequest';
import { ListInstanceWebhooksResponse } from './model/ListInstanceWebhooksResponse';
import { ListNamespaceRepositoriesRequest } from './model/ListNamespaceRepositoriesRequest';
import { ListNamespaceRepositoriesResponse } from './model/ListNamespaceRepositoriesResponse';
import { ListNamespaceTagsRequest } from './model/ListNamespaceTagsRequest';
import { ListNamespaceTagsResponse } from './model/ListNamespaceTagsResponse';
import { ListNamespacesRequest } from './model/ListNamespacesRequest';
import { ListNamespacesResponse } from './model/ListNamespacesResponse';
import { ListQuotasRequest } from './model/ListQuotasRequest';
import { ListQuotasResponse } from './model/ListQuotasResponse';
import { ListReferencesRequest } from './model/ListReferencesRequest';
import { ListReferencesResponse } from './model/ListReferencesResponse';
import { ListRepoAccessoriesRequest } from './model/ListRepoAccessoriesRequest';
import { ListRepoAccessoriesResponse } from './model/ListRepoAccessoriesResponse';
import { ListRepoDetailsRequest } from './model/ListRepoDetailsRequest';
import { ListRepoDetailsResponse } from './model/ListRepoDetailsResponse';
import { ListRepoDomainsRequest } from './model/ListRepoDomainsRequest';
import { ListRepoDomainsResponse } from './model/ListRepoDomainsResponse';
import { ListReposDetailsRequest } from './model/ListReposDetailsRequest';
import { ListReposDetailsResponse } from './model/ListReposDetailsResponse';
import { ListRepositoryTagRequest } from './model/ListRepositoryTagRequest';
import { ListRepositoryTagResponse } from './model/ListRepositoryTagResponse';
import { ListRepositoryTagsRequest } from './model/ListRepositoryTagsRequest';
import { ListRepositoryTagsResponse } from './model/ListRepositoryTagsResponse';
import { ListResourceInstancesRequestBody } from './model/ListResourceInstancesRequestBody';
import { ListRetentionHistoriesRequest } from './model/ListRetentionHistoriesRequest';
import { ListRetentionHistoriesResponse } from './model/ListRetentionHistoriesResponse';
import { ListRetentionsRequest } from './model/ListRetentionsRequest';
import { ListRetentionsResponse } from './model/ListRetentionsResponse';
import { ListSharedRepoDetailsRequest } from './model/ListSharedRepoDetailsRequest';
import { ListSharedRepoDetailsResponse } from './model/ListSharedRepoDetailsResponse';
import { ListSharedReposDetailsRequest } from './model/ListSharedReposDetailsRequest';
import { ListSharedReposDetailsResponse } from './model/ListSharedReposDetailsResponse';
import { ListSubResourceInstancesRequest } from './model/ListSubResourceInstancesRequest';
import { ListSubResourceInstancesResponse } from './model/ListSubResourceInstancesResponse';
import { ListSubResourceTagsRequest } from './model/ListSubResourceTagsRequest';
import { ListSubResourceTagsResponse } from './model/ListSubResourceTagsResponse';
import { ListSyncRegionsRequest } from './model/ListSyncRegionsRequest';
import { ListSyncRegionsResponse } from './model/ListSyncRegionsResponse';
import { ListTriggersDetailsRequest } from './model/ListTriggersDetailsRequest';
import { ListTriggersDetailsResponse } from './model/ListTriggersDetailsResponse';
import { Namespace } from './model/Namespace';
import { NamespaceMetadata } from './model/NamespaceMetadata';
import { NativeReportSummary } from './model/NativeReportSummary';
import { ProjectTag } from './model/ProjectTag';
import { RegionInfo } from './model/RegionInfo';
import { Registry } from './model/Registry';
import { ReplicationPolicy } from './model/ReplicationPolicy';
import { ReplicationRegistry } from './model/ReplicationRegistry';
import { ReportData } from './model/ReportData';
import { Repository } from './model/Repository';
import { RepositoryTag } from './model/RepositoryTag';
import { Resource } from './model/Resource';
import { ResourceTag } from './model/ResourceTag';
import { Retention } from './model/Retention';
import { RetentionExecution } from './model/RetentionExecution';
import { RetentionLog } from './model/RetentionLog';
import { RetentionRule } from './model/RetentionRule';
import { RetentionRuleResponseBody } from './model/RetentionRuleResponseBody';
import { RetentionSelector } from './model/RetentionSelector';
import { Rule } from './model/Rule';
import { RuleSelector } from './model/RuleSelector';
import { Scanner } from './model/Scanner';
import { ScopeRule } from './model/ScopeRule';
import { ShowAccessDomainRequest } from './model/ShowAccessDomainRequest';
import { ShowAccessDomainResponse } from './model/ShowAccessDomainResponse';
import { ShowApiVersionRequest } from './model/ShowApiVersionRequest';
import { ShowApiVersionResponse } from './model/ShowApiVersionResponse';
import { ShowDomainOverviewRequest } from './model/ShowDomainOverviewRequest';
import { ShowDomainOverviewResponse } from './model/ShowDomainOverviewResponse';
import { ShowDomainResourceReportsRequest } from './model/ShowDomainResourceReportsRequest';
import { ShowDomainResourceReportsResponse } from './model/ShowDomainResourceReportsResponse';
import { ShowInstanceArtifactAdditionRequest } from './model/ShowInstanceArtifactAdditionRequest';
import { ShowInstanceArtifactAdditionResponse } from './model/ShowInstanceArtifactAdditionResponse';
import { ShowInstanceArtifactRequest } from './model/ShowInstanceArtifactRequest';
import { ShowInstanceArtifactResponse } from './model/ShowInstanceArtifactResponse';
import { ShowInstanceConfigurationRequest } from './model/ShowInstanceConfigurationRequest';
import { ShowInstanceConfigurationResponse } from './model/ShowInstanceConfigurationResponse';
import { ShowInstanceEndpointPolicyRequest } from './model/ShowInstanceEndpointPolicyRequest';
import { ShowInstanceEndpointPolicyResponse } from './model/ShowInstanceEndpointPolicyResponse';
import { ShowInstanceInternalEndpointRequest } from './model/ShowInstanceInternalEndpointRequest';
import { ShowInstanceInternalEndpointResponse } from './model/ShowInstanceInternalEndpointResponse';
import { ShowInstanceJobRequest } from './model/ShowInstanceJobRequest';
import { ShowInstanceJobResponse } from './model/ShowInstanceJobResponse';
import { ShowInstanceNamespaceRequest } from './model/ShowInstanceNamespaceRequest';
import { ShowInstanceNamespaceResponse } from './model/ShowInstanceNamespaceResponse';
import { ShowInstanceRegistryRequest } from './model/ShowInstanceRegistryRequest';
import { ShowInstanceRegistryResponse } from './model/ShowInstanceRegistryResponse';
import { ShowInstanceReplicationPolicyRequest } from './model/ShowInstanceReplicationPolicyRequest';
import { ShowInstanceReplicationPolicyResponse } from './model/ShowInstanceReplicationPolicyResponse';
import { ShowInstanceRepositoryRequest } from './model/ShowInstanceRepositoryRequest';
import { ShowInstanceRepositoryResponse } from './model/ShowInstanceRepositoryResponse';
import { ShowInstanceRequest } from './model/ShowInstanceRequest';
import { ShowInstanceResourceInstancesCountRequest } from './model/ShowInstanceResourceInstancesCountRequest';
import { ShowInstanceResourceInstancesCountResponse } from './model/ShowInstanceResourceInstancesCountResponse';
import { ShowInstanceResponse } from './model/ShowInstanceResponse';
import { ShowInstanceRetentionPolicyRequest } from './model/ShowInstanceRetentionPolicyRequest';
import { ShowInstanceRetentionPolicyResponse } from './model/ShowInstanceRetentionPolicyResponse';
import { ShowInstanceSignPolicyRequest } from './model/ShowInstanceSignPolicyRequest';
import { ShowInstanceSignPolicyResponse } from './model/ShowInstanceSignPolicyResponse';
import { ShowInstanceWebhookRequest } from './model/ShowInstanceWebhookRequest';
import { ShowInstanceWebhookResponse } from './model/ShowInstanceWebhookResponse';
import { ShowNamespace } from './model/ShowNamespace';
import { ShowNamespaceAuthRequest } from './model/ShowNamespaceAuthRequest';
import { ShowNamespaceAuthResponse } from './model/ShowNamespaceAuthResponse';
import { ShowNamespaceRequest } from './model/ShowNamespaceRequest';
import { ShowNamespaceResponse } from './model/ShowNamespaceResponse';
import { ShowQuota } from './model/ShowQuota';
import { ShowRepoDomainsResponse } from './model/ShowRepoDomainsResponse';
import { ShowRepoTagRequest } from './model/ShowRepoTagRequest';
import { ShowRepoTagResponse } from './model/ShowRepoTagResponse';
import { ShowReposResp } from './model/ShowReposResp';
import { ShowReposRespV3 } from './model/ShowReposRespV3';
import { ShowReposTagResp } from './model/ShowReposTagResp';
import { ShowReposTagRespV3 } from './model/ShowReposTagRespV3';
import { ShowRepositoryRequest } from './model/ShowRepositoryRequest';
import { ShowRepositoryResponse } from './model/ShowRepositoryResponse';
import { ShowRetentionRequest } from './model/ShowRetentionRequest';
import { ShowRetentionResponse } from './model/ShowRetentionResponse';
import { ShowShareFeatureGatesRequest } from './model/ShowShareFeatureGatesRequest';
import { ShowShareFeatureGatesResponse } from './model/ShowShareFeatureGatesResponse';
import { ShowSubResourceInstancesCountRequest } from './model/ShowSubResourceInstancesCountRequest';
import { ShowSubResourceInstancesCountResponse } from './model/ShowSubResourceInstancesCountResponse';
import { ShowSyncJobRequest } from './model/ShowSyncJobRequest';
import { ShowSyncJobResponse } from './model/ShowSyncJobResponse';
import { ShowTriggerRequest } from './model/ShowTriggerRequest';
import { ShowTriggerResponse } from './model/ShowTriggerResponse';
import { ShowUserRepositoryAuthRequest } from './model/ShowUserRepositoryAuthRequest';
import { ShowUserRepositoryAuthResponse } from './model/ShowUserRepositoryAuthResponse';
import { SignPolicyDetail } from './model/SignPolicyDetail';
import { SignRuleSelector } from './model/SignRuleSelector';
import { SignScopeRule } from './model/SignScopeRule';
import { SignatureExecutionSubTask } from './model/SignatureExecutionSubTask';
import { SignatureExecutionTask } from './model/SignatureExecutionTask';
import { StartManualScanningRequest } from './model/StartManualScanningRequest';
import { StartManualScanningResponse } from './model/StartManualScanningResponse';
import { StopInstanceReplicationPolicyExecutionRequest } from './model/StopInstanceReplicationPolicyExecutionRequest';
import { StopInstanceReplicationPolicyExecutionResponse } from './model/StopInstanceReplicationPolicyExecutionResponse';
import { Subtask } from './model/Subtask';
import { SubtaskDetail } from './model/SubtaskDetail';
import { SyncJob } from './model/SyncJob';
import { SyncRepo } from './model/SyncRepo';
import { TagSelector } from './model/TagSelector';
import { TagsFilter } from './model/TagsFilter';
import { Target } from './model/Target';
import { Task } from './model/Task';
import { TaskDetail } from './model/TaskDetail';
import { Trigger } from './model/Trigger';
import { TriggerConfig } from './model/TriggerConfig';
import { TriggerHistories } from './model/TriggerHistories';
import { TriggerSetting } from './model/TriggerSetting';
import { UpdateCVEAllowlistRequest } from './model/UpdateCVEAllowlistRequest';
import { UpdateDomainNameRequest } from './model/UpdateDomainNameRequest';
import { UpdateDomainNameRequestBody } from './model/UpdateDomainNameRequestBody';
import { UpdateDomainNameResponse } from './model/UpdateDomainNameResponse';
import { UpdateImmutableRuleBody } from './model/UpdateImmutableRuleBody';
import { UpdateImmutableRuleRequest } from './model/UpdateImmutableRuleRequest';
import { UpdateImmutableRuleResponse } from './model/UpdateImmutableRuleResponse';
import { UpdateInstanceConfigurationRequest } from './model/UpdateInstanceConfigurationRequest';
import { UpdateInstanceConfigurationRequestBody } from './model/UpdateInstanceConfigurationRequestBody';
import { UpdateInstanceConfigurationResponse } from './model/UpdateInstanceConfigurationResponse';
import { UpdateInstanceEndpointPolicyRequest } from './model/UpdateInstanceEndpointPolicyRequest';
import { UpdateInstanceEndpointPolicyResponse } from './model/UpdateInstanceEndpointPolicyResponse';
import { UpdateInstanceLtCredentialRequest } from './model/UpdateInstanceLtCredentialRequest';
import { UpdateInstanceLtCredentialResponse } from './model/UpdateInstanceLtCredentialResponse';
import { UpdateInstanceNamespaceRequest } from './model/UpdateInstanceNamespaceRequest';
import { UpdateInstanceNamespaceResponse } from './model/UpdateInstanceNamespaceResponse';
import { UpdateInstanceRegistryRequest } from './model/UpdateInstanceRegistryRequest';
import { UpdateInstanceRegistryResponse } from './model/UpdateInstanceRegistryResponse';
import { UpdateInstanceReplicationPolicyRequest } from './model/UpdateInstanceReplicationPolicyRequest';
import { UpdateInstanceReplicationPolicyResponse } from './model/UpdateInstanceReplicationPolicyResponse';
import { UpdateInstanceRepositoryRequest } from './model/UpdateInstanceRepositoryRequest';
import { UpdateInstanceRepositoryResponse } from './model/UpdateInstanceRepositoryResponse';
import { UpdateInstanceRetentionPolicyRequest } from './model/UpdateInstanceRetentionPolicyRequest';
import { UpdateInstanceRetentionPolicyResponse } from './model/UpdateInstanceRetentionPolicyResponse';
import { UpdateInstanceSignPolicyRequest } from './model/UpdateInstanceSignPolicyRequest';
import { UpdateInstanceSignPolicyResponse } from './model/UpdateInstanceSignPolicyResponse';
import { UpdateInstanceWebhookRequest } from './model/UpdateInstanceWebhookRequest';
import { UpdateInstanceWebhookResponse } from './model/UpdateInstanceWebhookResponse';
import { UpdateLongTermCredentialRequestBody } from './model/UpdateLongTermCredentialRequestBody';
import { UpdateNamespaceAuthRequest } from './model/UpdateNamespaceAuthRequest';
import { UpdateNamespaceAuthResponse } from './model/UpdateNamespaceAuthResponse';
import { UpdateNamespaceRequestBody } from './model/UpdateNamespaceRequestBody';
import { UpdateRegistryRequestBody } from './model/UpdateRegistryRequestBody';
import { UpdateReplicationPolicyRequestBody } from './model/UpdateReplicationPolicyRequestBody';
import { UpdateRepoConfigRequestBody } from './model/UpdateRepoConfigRequestBody';
import { UpdateRepoDomainsRequest } from './model/UpdateRepoDomainsRequest';
import { UpdateRepoDomainsRequestBody } from './model/UpdateRepoDomainsRequestBody';
import { UpdateRepoDomainsResponse } from './model/UpdateRepoDomainsResponse';
import { UpdateRepoRequest } from './model/UpdateRepoRequest';
import { UpdateRepoRequestBody } from './model/UpdateRepoRequestBody';
import { UpdateRepoResponse } from './model/UpdateRepoResponse';
import { UpdateRetentionPolicyRequestBody } from './model/UpdateRetentionPolicyRequestBody';
import { UpdateRetentionRequest } from './model/UpdateRetentionRequest';
import { UpdateRetentionRequestBody } from './model/UpdateRetentionRequestBody';
import { UpdateRetentionResponse } from './model/UpdateRetentionResponse';
import { UpdateSignaturePolicyRequestBody } from './model/UpdateSignaturePolicyRequestBody';
import { UpdateTriggerRequest } from './model/UpdateTriggerRequest';
import { UpdateTriggerRequestBody } from './model/UpdateTriggerRequestBody';
import { UpdateTriggerResponse } from './model/UpdateTriggerResponse';
import { UpdateUserRepositoryAuthRequest } from './model/UpdateUserRepositoryAuthRequest';
import { UpdateUserRepositoryAuthResponse } from './model/UpdateUserRepositoryAuthResponse';
import { UpdateWebhookPolicyRequestBody } from './model/UpdateWebhookPolicyRequestBody';
import { UpdateWhiteListRequestBody } from './model/UpdateWhiteListRequestBody';
import { UserAuth } from './model/UserAuth';
import { VersionDetail } from './model/VersionDetail';
import { Vulnerability } from './model/Vulnerability';
import { VulnerabilityPreferredCvss } from './model/VulnerabilityPreferredCvss';
import { VulnerabilityReports } from './model/VulnerabilityReports';
import { VulnerabilitySummary } from './model/VulnerabilitySummary';
import { WebhookPolicyDetail } from './model/WebhookPolicyDetail';

export class SwrClient {
    public static newBuilder(): ClientBuilder<SwrClient> {
            let client = new ClientBuilder<SwrClient>(newClient);
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
     * 检查租户是否已委托SWR服务通过触发器功能调用CCE、CCI服务，一般由前端控制台自动调用，用户无需手动调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询委托是否存在
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkAgency(checkAgencyRequest?: CheckAgencyRequest): Promise<CheckAgencyResponse> {
        const options = ParamCreater().checkAgency();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 租户首次使用SWR服务时创建SWR服务内部委托，一般由前端控制台自动调用，用户无需手动调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建委托
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
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
     * 调用该接口，通过获取响应消息头的X-Swr-Dockerlogin的值及响应消息体的host值，可生成增强型登录指令,注：此接口只支持IAM新平面的调用方式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 生成增强型登录指令(新)
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAuthorizationToken(createAuthorizationTokenRequest?: CreateAuthorizationTokenRequest): Promise<CreateAuthorizationTokenResponse> {
        const options = ParamCreater().createAuthorizationToken(createAuthorizationTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Swr-Dockerlogin', 'x-swr-expireat'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建镜像自动同步任务，帮助您把最新推送的镜像自动同步到其他区域镜像仓库内。 镜像自动同步帮助您把最新推送的镜像自动同步到其他区域镜像仓库内，后期镜像有更新时，目标仓库的镜像也会自动更新，但已有的镜像不会自动同步。已有镜像的同步需要手动操作，详情请参见手动同步镜像。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建镜像自动同步任务
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateImageSyncRepoRequestBody} body 需要创建镜像自动同步任务的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createImageSyncRepo(createImageSyncRepoRequest?: CreateImageSyncRepoRequest): Promise<CreateImageSyncRepoResponse> {
        const options = ParamCreater().createImageSyncRepo(createImageSyncRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对于镜像仓库已有的镜像，如果想在其他区域使用，需要手动触发镜像同步。 判断是否同步成功的方法如下：响应状态码为200，无报错信息，表示同步成功。通过SWR管理控制台或调用查询镜像仓库概要信息接口，在目标区域的目标组织下，若存在所同步的镜像版本表示同步成功。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 手动同步镜像
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateManualImageSyncRepoRequestBody} body 需要手动同步镜像的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createManualImageSyncRepo(createManualImageSyncRepoRequest?: CreateManualImageSyncRepoRequest): Promise<CreateManualImageSyncRepoResponse> {
        const options = ParamCreater().createManualImageSyncRepo(createManualImageSyncRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建组织
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建组织
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {CreateNamespaceRequestBody} createNamespaceRequestBody This is a  create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNamespace(createNamespaceRequest?: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
        const options = ParamCreater().createNamespace(createNamespaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建组织权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建组织权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {Array<UserAuth>} createNamespaceAuthRequestBody 创建组织权限需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNamespaceAuth(createNamespaceAuthRequest?: CreateNamespaceAuthRequest): Promise<CreateNamespaceAuthResponse> {
        const options = ParamCreater().createNamespaceAuth(createNamespaceAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在组织下创建镜像仓库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在组织下创建镜像仓库
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {CreateRepoRequestBody} createRepoRequestBody dfsgdfg
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRepo(createRepoRequest?: CreateRepoRequest): Promise<CreateRepoResponse> {
        const options = ParamCreater().createRepo(createRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建共享帐号。镜像上传后，您可以共享私有镜像给其他帐号，并授予下载该镜像的权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建共享帐号
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateRepoDomainsRequestBody} createRepoDomainsRequestBody 创建共享帐号需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRepoDomains(createRepoDomainsRequest?: CreateRepoDomainsRequest): Promise<CreateRepoDomainsResponse> {
        const options = ParamCreater().createRepoDomains(createRepoDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建镜像tag
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建镜像tag
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateRepoTagRequestBody} createRepoTagRequestBody 创建镜像tag需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRepoTag(createRepoTagRequest?: CreateRepoTagRequest): Promise<CreateRepoTagResponse> {
        const options = ParamCreater().createRepoTag(createRepoTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建镜像老化规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建镜像老化规则
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateRetentionRequestBody} createRetentionRequestBody 需要创建镜像老化规则的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRetention(createRetentionRequest?: CreateRetentionRequest): Promise<CreateRetentionResponse> {
        const options = ParamCreater().createRetention(createRetentionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用该接口，通过获取响应消息头的X-Swr-Dockerlogin的值及响应消息体的host值，可生成临时登录指令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 生成临时登录指令
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} [projectname] 项目名称，缺省值默认为区域名称，例如：cn-north-1。 
     * @param {number} [durationSeconds] 自定义临时凭证有效期，单位秒，取值范围15min-24h
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSecret(createSecretRequest?: CreateSecretRequest): Promise<CreateSecretResponse> {
        const options = ParamCreater().createSecret(createSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Swr-Dockerlogin', 'X-Swr-Expireat'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建触发器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建触发器
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {CreateTriggerRequestBody} createTriggerRequestBody 需要创建触发器的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTrigger(createTriggerRequest?: CreateTriggerRequest): Promise<CreateTriggerResponse> {
        const options = ParamCreater().createTrigger(createTriggerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建镜像权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建镜像权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {Array<UserAuth>} createUserRepositoryAuthRequestBody 需要创建镜像权限的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUserRepositoryAuth(createUserRepositoryAuthRequest?: CreateUserRepositoryAuthRequest): Promise<CreateUserRepositoryAuthResponse> {
        const options = ParamCreater().createUserRepositoryAuth(createUserRepositoryAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据目标区域、目标组织删除指定的镜像自动同步任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除镜像自动同步任务
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {DeleteImageSyncRepoRequestBody} body 需要删除镜像自动同步任务的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteImageSyncRepo(deleteImageSyncRepoRequest?: DeleteImageSyncRepoRequest): Promise<DeleteImageSyncRepoResponse> {
        const options = ParamCreater().deleteImageSyncRepo(deleteImageSyncRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除组织权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除组织权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {Array<string>} deleteNamespaceAuthRequestBody 需要删除权限的用户id列表，需要从IAM服务获取
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNamespaceAuth(deleteNamespaceAuthRequest?: DeleteNamespaceAuthRequest): Promise<DeleteNamespaceAuthResponse> {
        const options = ParamCreater().deleteNamespaceAuth(deleteNamespaceAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除组织
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除组织
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNamespaces(deleteNamespacesRequest?: DeleteNamespacesRequest): Promise<DeleteNamespacesResponse> {
        const options = ParamCreater().deleteNamespaces(deleteNamespacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除组织下的镜像仓库。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除组织下的镜像仓库
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRepo(deleteRepoRequest?: DeleteRepoRequest): Promise<DeleteRepoResponse> {
        const options = ParamCreater().deleteRepo(deleteRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除共享帐号
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除共享帐号
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} accessDomain 共享租户名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRepoDomains(deleteRepoDomainsRequest?: DeleteRepoDomainsRequest): Promise<DeleteRepoDomainsResponse> {
        const options = ParamCreater().deleteRepoDomains(deleteRepoDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除镜像仓库中指定tag的镜像
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定tag的镜像
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} tag 镜像版本名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRepoTag(deleteRepoTagRequest?: DeleteRepoTagRequest): Promise<DeleteRepoTagResponse> {
        const options = ParamCreater().deleteRepoTag(deleteRepoTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除镜像老化规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除镜像老化规则
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {number} retentionId 镜像老化规则id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRetention(deleteRetentionRequest?: DeleteRetentionRequest): Promise<DeleteRetentionResponse> {
        const options = ParamCreater().deleteRetention(deleteRetentionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除触发器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除触发器
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} trigger 触发器名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTrigger(deleteTriggerRequest?: DeleteTriggerRequest): Promise<DeleteTriggerResponse> {
        const options = ParamCreater().deleteTrigger(deleteTriggerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除镜像权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除镜像权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {Array<string>} deleteUserRepositoryAuthRequestBody 用户ID，需从华为云IAM服务获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteUserRepositoryAuth(deleteUserRepositoryAuthRequest?: DeleteUserRepositoryAuthRequest): Promise<DeleteUserRepositoryAuthResponse> {
        const options = ParamCreater().deleteUserRepositoryAuth(deleteUserRepositoryAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取为当前镜像仓库所创建的所有自动同步任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像自动同步任务列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImageAutoSyncReposDetails(listImageAutoSyncReposDetailsRequest?: ListImageAutoSyncReposDetailsRequest): Promise<ListImageAutoSyncReposDetailsResponse> {
        const options = ParamCreater().listImageAutoSyncReposDetails(listImageAutoSyncReposDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询组织列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} [namespace] 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} [filter] 应填写namespace::{namespace}|mode::{mode}。其中{namespace}是组织名称，{mode}如果不设置，查看有权限的组织列表；设置为visible，查看可见的组织列表（部分组织：仓库有权限，组织没有权限）。
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
     * 获取配额信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取配额信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotas(listQuotasRequest?: ListQuotasRequest): Promise<ListQuotasResponse> {
        const options = ParamCreater().listQuotas(listQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取签名镜像关联的被签名镜像版本列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取签名镜像关联的被签名镜像版本列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} tag 签名镜像的版本号
     * @param {number} [limit] 返回条数。如果不传该参数默认返回10条记录，最大支持10条记录
     * @param {string} [marker] 分页查询时的起始标记，接口的返回值next_marker为下一次查询的起始标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listReferences(listReferencesRequest?: ListReferencesRequest): Promise<ListReferencesResponse> {
        const options = ParamCreater().listReferences(listReferencesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取共享仓的镜像的附件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像的附件列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} tag 镜像版本
     * @param {number} [limit] 返回条数。如果不传该参数默认返回10条记录，最大支持100条记录
     * @param {number} [offset] 起始索引,默认值为0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRepoAccessories(listRepoAccessoriesRequest?: ListRepoAccessoriesRequest): Promise<ListRepoAccessoriesResponse> {
        const options = ParamCreater().listRepoAccessories(listRepoAccessoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像仓库列表详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像仓库列表详情
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} [namespace] 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} [name] 镜像仓库名称。
     * @param {string} [category] 镜像仓库分类，可设置为app_server, linux, framework_app, database, lang, other, windows, arm。
     * @param {number} [limit] 返回条数，默认返回100条记录，最多返回1000条记录。
     * @param {number} [marker] 分页查询下一次查询起始标记，接口的返回值nextMarker为下一次查询的起始标记。
     * @param {boolean} [isPublic] 是否公开私有，true为公开，false为私有。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRepoDetails(listRepoDetailsRequest?: ListRepoDetailsRequest): Promise<ListRepoDetailsResponse> {
        const options = ParamCreater().listRepoDetails(listRepoDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取共享帐号列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取共享帐号列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRepoDomains(listRepoDomainsRequest?: ListRepoDomainsRequest): Promise<ListRepoDomainsResponse> {
        const options = ParamCreater().listRepoDomains(listRepoDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像仓库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像仓库列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} [namespace] 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。注意：和filter最好分开使用，如果同时使用，此过滤参数将失效，以filter为准。
     * @param {string} [name] 镜像仓库名称。注意：和filter最好分开使用，如果同时使用，此过滤参数将失效，以filter为准。
     * @param {string} [category] 镜像仓库分类，可设置为app_server, linux, framework_app, database, lang, other, windows, arm。注意：和filter最好分开使用，如果同时使用，此过滤参数将失效，以filter为准。
     * @param {string} [limit] 返回条数，默认情况下返回100条记录，最多返回1000条记录。注意：offset和limit参数需要配套使用。
     * @param {string} [offset] 起始索引。注意：offset和limit参数需要配套使用。
     * @param {string} [orderColumn] 按列排序，可设置为updated_at（按更新时间排序）。注意：order_column和order_type参数需要配套使用。
     * @param {string} [orderType] 排序类型，可设置为desc（降序）、asc（升序）。注意：order_column和order_type参数需要配套使用。
     * @param {string} [filter] 注意：如果使用filter至少要传递一个filter参数。应填写 namespace::{namespace}|name::{name}|limit::{limit}|offset::{offset}|order_column::{order_column}|order_type::{order_type},其中{namespace}为组织名称。 {name}为镜像仓库名称，模糊匹配。{category}为镜像仓库分类，可设置为app_server、linux、framework_app、database、lang、other、windows、arm。 {limit}为返回条数,{offset}为起始索引，注意：offset和limit参数需要配套使用。{order_column}为按列排序，可设置为name、updated_time、tag_count,{order_type}为排序类型， 可设置为desc（降序）、asc（升序），注意：order_column和order_type参数需要配套使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listReposDetails(listReposDetailsRequest?: ListReposDetailsRequest): Promise<ListReposDetailsResponse> {
        const options = ParamCreater().listReposDetails(listReposDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Content-Range'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像tag列表详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像tag列表详情
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {number} [limit] 返回条数,默认返回100条，最多返回1000条数据。
     * @param {string} [marker] Start position of the cursor for querying the next page in pagination query.
     * @param {string} [tag] 镜像版本名。
     * @param {string} [orderColumn] 按列排序，可设置为updated_at（按更新时间排序）或者tag（按照镜像版本排序）。注意：order_column和order_type参数需要配套使用。
     * @param {string} [orderType] 排序类型，可设置为desc（降序）、asc（升序）。注意：order_column和order_type参数需要配套使用。
     * @param {boolean} [withManifest] 是否返回镜像的manifest信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRepositoryTag(listRepositoryTagRequest?: ListRepositoryTagRequest): Promise<ListRepositoryTagResponse> {
        const options = ParamCreater().listRepositoryTag(listRepositoryTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像tag列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像tag列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} [limit] 返回条数,默认返回100条，最多返回1000条数据。注意：offset和limit参数需要配套使用。
     * @param {string} [offset] 起始索引。注意：offset和limit参数需要配套使用。
     * @param {string} [orderColumn] 按列排序，可设置为updated_at（按更新时间排序）。注意：order_column和order_type参数需要配套使用。
     * @param {string} [orderType] 排序类型，可设置为desc（降序）、asc（升序）。注意：order_column和order_type参数需要配套使用。
     * @param {string} [tag] 镜像版本名。
     * @param {string} [filter] 应填写 offset::{offset}|limit::{limit}|order_column::{order_column}|order_type::{order_type}|tag::{tag} ,其中{limit}为返回条数,{offset}为起始索引,注意：offset和limit参数需要配套使用。 {order_column}为按列排序，可设置为updated_at（按更新时间排序）,{order_type}为排序类型，可设置为desc（降序）、asc（升序），{tag}为镜像版本名。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRepositoryTags(listRepositoryTagsRequest?: ListRepositoryTagsRequest): Promise<ListRepositoryTagsResponse> {
        const options = ParamCreater().listRepositoryTags(listRepositoryTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Content-Range'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像老化记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像老化记录
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} [limit] 返回条数。注意：offset和limit参数需要配套使用。
     * @param {string} [offset] 起始索引。注意：offset和limit参数需要配套使用。
     * @param {string} [filter] 应填写 limit::{limit}|offset::{offset}, 其中{limit}为返回条数,{offset}为起始索引, 注意：offset和limit参数需要配套使用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRetentionHistories(listRetentionHistoriesRequest?: ListRetentionHistoriesRequest): Promise<ListRetentionHistoriesResponse> {
        const options = ParamCreater().listRetentionHistories(listRetentionHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Content-Range'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像老化规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像老化规则列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRetentions(listRetentionsRequest?: ListRetentionsRequest): Promise<ListRetentionsResponse> {
        const options = ParamCreater().listRetentions(listRetentionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询共享镜像列表详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询共享镜像列表详情
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {'self' | 'thirdparty'} sharedBy self: 我共享的镜像。thirdparty: 他人共享给我的镜像
     * @param {string} [namespace] 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} [name] 镜像仓库名称
     * @param {number} [limit] 返回条数,默认返回100条记录，最多返回1000条。
     * @param {number} [marker] 分页查询时下一次查询的起始地址。
     * @param {boolean} [status] 查询他人共享给我的镜像是否已过期 false：共享已过期。true：正常
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSharedRepoDetails(listSharedRepoDetailsRequest?: ListSharedRepoDetailsRequest): Promise<ListSharedRepoDetailsResponse> {
        const options = ParamCreater().listSharedRepoDetails(listSharedRepoDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询共享镜像列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询共享镜像列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} center self: 我共享的镜像。thirdparty: 他人共享给我的镜像
     * @param {string} [namespace] 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} [name] 镜像仓库名称
     * @param {string} [limit] 返回条数。注意：offset和limit参数需要配套使用。
     * @param {string} [offset] 起始索引。注意：offset和limit参数需要配套使用。
     * @param {string} [orderColumn] 按列排序，可设置为updated_at（按更新时间排序）。注意：order_column和order_type参数需要配套使用。
     * @param {string} [orderType] 排序类型，可设置为desc（降序）、asc（升序）。注意：order_column和order_type参数需要配套使用。
     * @param {string} [filter] 应填写 center::{center}|name::{name}|limit::{limit}|offset::{offset}|namespace::{namespace}|order_column::{order_column}|order_type::{order_type} ,其中 {center}可选为self: 我共享的镜像。thirdparty: 他人共享给我的镜像，namespace为组织名称，name为镜像仓库名称， {limit}为返回条数,{offset}为起始索引,{order_column}为按列排序，可设置为name、updated_time、tag_count,{order_type}为排序类型，可设置为desc（降序）、asc（升序）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSharedReposDetails(listSharedReposDetailsRequest?: ListSharedReposDetailsRequest): Promise<ListSharedReposDetailsResponse> {
        const options = ParamCreater().listSharedReposDetails(listSharedReposDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Content-Range'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取可进行镜像同步的区域列表，用户可以将镜像手动或自动同步到此接口返回的区域。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取可进行镜像同步的区域列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSyncRegions(listSyncRegionsRequest?: ListSyncRegionsRequest): Promise<ListSyncRegionsResponse> {
        const options = ParamCreater().listSyncRegions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像仓库下的触发器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像仓库下的触发器列表
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTriggersDetails(listTriggersDetailsRequest?: ListTriggersDetailsRequest): Promise<ListTriggersDetailsResponse> {
        const options = ParamCreater().listTriggersDetails(listTriggersDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 判断共享租户是否存在
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 判断共享帐号是否存在
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} accessDomain 共享帐号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAccessDomain(showAccessDomainRequest?: ShowAccessDomainRequest): Promise<ShowAccessDomainResponse> {
        const options = ParamCreater().showAccessDomain(showAccessDomainRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取租户总览信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取租户总览信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainOverview(showDomainOverviewRequest?: ShowDomainOverviewRequest): Promise<ShowDomainOverviewResponse> {
        const options = ParamCreater().showDomainOverview(showDomainOverviewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取租户资源统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取租户资源统计信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {'downflow' | 'store'} resourceType 资源类型
     * @param {'daily'} frequency 频率类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainResourceReports(showDomainResourceReportsRequest?: ShowDomainResourceReportsRequest): Promise<ShowDomainResourceReportsResponse> {
        const options = ParamCreater().showDomainResourceReports(showDomainResourceReportsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取组织详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取组织详情
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNamespace(showNamespaceRequest?: ShowNamespaceRequest): Promise<ShowNamespaceResponse> {
        const options = ParamCreater().showNamespace(showNamespaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组织权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询组织权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNamespaceAuth(showNamespaceAuthRequest?: ShowNamespaceAuthRequest): Promise<ShowNamespaceAuthResponse> {
        const options = ParamCreater().showNamespaceAuth(showNamespaceAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像仓库中指定tag的镜像
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定tag的镜像详情
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} tag 镜像版本名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRepoTag(showRepoTagRequest?: ShowRepoTagRequest): Promise<ShowRepoTagResponse> {
        const options = ParamCreater().showRepoTag(showRepoTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像仓库概要信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像仓库概要信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRepository(showRepositoryRequest?: ShowRepositoryRequest): Promise<ShowRepositoryResponse> {
        const options = ParamCreater().showRepository(showRepositoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像老化规则记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像老化规则记录
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {number} retentionId 镜像老化规则id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRetention(showRetentionRequest?: ShowRetentionRequest): Promise<ShowRetentionResponse> {
        const options = ParamCreater().showRetention(showRetentionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务特性开关信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务特性开关信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showShareFeatureGates(showShareFeatureGatesRequest?: ShowShareFeatureGatesRequest): Promise<ShowShareFeatureGatesResponse> {
        const options = ParamCreater().showShareFeatureGates();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建镜像自动同步任务后，可以通过此接口查询该任务的状态，以判断是否同步成功。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像自动同步任务信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} filter 应填写 limit::{limit}|offset::{offset}|order::{order} ,其中{limit}为返回条数,{offset}为起始索引,注意：offset和limit参数需要配套使用，且必选。{order}为排序类型（可选），可设置为desc（降序）、asc（升序）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSyncJob(showSyncJobRequest?: ShowSyncJobRequest): Promise<ShowSyncJobResponse> {
        const options = ParamCreater().showSyncJob(showSyncJobRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Content-Range'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取触发器详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取触发器详情
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} trigger 触发器名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrigger(showTriggerRequest?: ShowTriggerRequest): Promise<ShowTriggerResponse> {
        const options = ParamCreater().showTrigger(showTriggerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询镜像权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询镜像权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserRepositoryAuth(showUserRepositoryAuthRequest?: ShowUserRepositoryAuthRequest): Promise<ShowUserRepositoryAuthResponse> {
        const options = ParamCreater().showUserRepositoryAuth(showUserRepositoryAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新组织权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新组织权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {Array<UserAuth>} updateNamespaceAuthRequestBody 更新组织权限需要的权限
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNamespaceAuth(updateNamespaceAuthRequest?: UpdateNamespaceAuthRequest): Promise<UpdateNamespaceAuthResponse> {
        const options = ParamCreater().updateNamespaceAuth(updateNamespaceAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新租户组织下的镜像概要信息，包括镜像类型、是否公有、描述信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新镜像仓库的概要信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称。小写字母或数字开头，后面跟小写字母、数字、小数点、斜杠、下划线或中划线（其中下划线最多允许连续两个，小数点、斜杠、下划线、中划线不能直接相连），小写字母或数字结尾，1-128个字符。
     * @param {UpdateRepoRequestBody} updateRepoRequestBody dfsgdfg
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRepo(updateRepoRequest?: UpdateRepoRequest): Promise<UpdateRepoResponse> {
        const options = ParamCreater().updateRepo(updateRepoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新共享帐号
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新共享帐号
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} accessDomain 共享帐号
     * @param {UpdateRepoDomainsRequestBody} updateRepoDomainsRequestBody 更新共享帐号需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRepoDomains(updateRepoDomainsRequest?: UpdateRepoDomainsRequest): Promise<UpdateRepoDomainsResponse> {
        const options = ParamCreater().updateRepoDomains(updateRepoDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改镜像老化规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改镜像老化规则
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {number} retentionId 镜像老化规则id
     * @param {UpdateRetentionRequestBody} [updateRetentionRequestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRetention(updateRetentionRequest?: UpdateRetentionRequest): Promise<UpdateRetentionResponse> {
        const options = ParamCreater().updateRetention(updateRetentionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新触发器配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新触发器配置
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {string} trigger 触发器名称
     * @param {UpdateTriggerRequestBody} body 更新触发器配置的请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTrigger(updateTriggerRequest?: UpdateTriggerRequest): Promise<UpdateTriggerResponse> {
        const options = ParamCreater().updateTrigger(updateTriggerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新镜像权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新镜像权限
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} namespace 组织名称。小写字母开头，后面跟小写字母、数字、小数点、下划线或中划线（其中下划线最多允许连续两个，小数点、下划线、中划线不能直接相连），小写字母或数字结尾，1-64个字符。
     * @param {string} repository 镜像仓库名称
     * @param {Array<UserAuth>} updateRepositoryAuthRequestBody 需要创建镜像权限的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUserRepositoryAuth(updateUserRepositoryAuthRequest?: UpdateUserRepositoryAuthRequest): Promise<UpdateUserRepositoryAuthResponse> {
        const options = ParamCreater().updateUserRepositoryAuth(updateUserRepositoryAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有API版本信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有API版本信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersions(listApiVersionsRequest?: ListApiVersionsRequest): Promise<ListApiVersionsResponse> {
        const options = ParamCreater().listApiVersions(listApiVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定API版本信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定API版本信息
     * @param {'application/json;charset=utf-8' | 'application/json'} contentType 消息体的类型（格式），下方类型可任选其一使用： application/json;charset&#x3D;utf-8 application/json
     * @param {string} apiVersion API版本号。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApiVersion(showApiVersionRequest?: ShowApiVersionRequest): Promise<ShowApiVersionResponse> {
        const options = ParamCreater().showApiVersion(showApiVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 增加域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 增加域名
     * @param {string} instanceId 企业仓库实例ID
     * @param {AddDomainNameRequestBody} addDomainNameBody 增加域名body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDomainName(addDomainNameRequest?: AddDomainNameRequest): Promise<AddDomainNameResponse> {
        const options = ParamCreater().addDomainName(addDomainNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建不可变Tag策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建不可变Tag策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {CreateImmutableRuleBody} createImmutableRuleRequestBody 创建不可变Tag策略需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createImmutableRule(createImmutableRuleRequest?: CreateImmutableRuleRequest): Promise<CreateImmutableRuleResponse> {
        const options = ParamCreater().createImmutableRule(createImmutableRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建企业仓库实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建实例
     * @param {CreateInstanceRequestBody} createInstanceRequestBody 创建实例需要的信息
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
     * 开启或关闭公网访问
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启或关闭公网访问
     * @param {string} instanceId 企业仓库实例ID
     * @param {CreateEndpointPolicyRequestBody} createEndpointPolicyRequestBody 开启或关闭公网访问的请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceEndpointPolicy(createInstanceEndpointPolicyRequest?: CreateInstanceEndpointPolicyRequest): Promise<CreateInstanceEndpointPolicyResponse> {
        const options = ParamCreater().createInstanceEndpointPolicy(createInstanceEndpointPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增内网访问
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增内网访问
     * @param {string} instanceId 企业仓库实例ID
     * @param {CreateIntranetAccessRequestBody} createIntranetAccessRequestBody 创建内网访问控制的请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceInternalEndpoint(createInstanceInternalEndpointRequest?: CreateInstanceInternalEndpointRequest): Promise<CreateInstanceInternalEndpointResponse> {
        const options = ParamCreater().createInstanceInternalEndpoint(createInstanceInternalEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建长期访问凭证
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建长期访问凭证
     * @param {string} instanceId 企业仓库实例ID
     * @param {CreateLongTermCredentialRequestBody} createLongTermCredentialRequestBody 需要创建长期访问凭证的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceLtCredential(createInstanceLtCredentialRequest?: CreateInstanceLtCredentialRequest): Promise<CreateInstanceLtCredentialResponse> {
        const options = ParamCreater().createInstanceLtCredential(createInstanceLtCredentialRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建命名空间
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建命名空间
     * @param {string} instanceId 企业仓库实例ID
     * @param {CreateInstanceNamespaceRequestBody} createEnterpriseNamespaceRequestBody 创建命名空间需要的名称和元数据
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceNamespace(createInstanceNamespaceRequest?: CreateInstanceNamespaceRequest): Promise<CreateInstanceNamespaceResponse> {
        const options = ParamCreater().createInstanceNamespace(createInstanceNamespaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建镜像同步的目标仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建镜像同步的目标仓库
     * @param {string} instanceId 企业仓库实例ID
     * @param {CreateRegistryRequestBody} createRegistryRequestBody 创建同步仓库需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceRegistry(createInstanceRegistryRequest?: CreateInstanceRegistryRequest): Promise<CreateInstanceRegistryResponse> {
        const options = ParamCreater().createInstanceRegistry(createInstanceRegistryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建镜像同步策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建镜像同步策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {CreateReplicationPolicyRequestBody} createReplicationPolicyRequestBody 创建同步策略需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceReplicationPolicy(createInstanceReplicationPolicyRequest?: CreateInstanceReplicationPolicyRequest): Promise<CreateInstanceReplicationPolicyResponse> {
        const options = ParamCreater().createInstanceReplicationPolicy(createInstanceReplicationPolicyRequest);

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
     * @param {'instances'} resourceType 资源类型，支持的资源类型为：instances
     * @param {string} resourceId 资源id
     * @param {CreateResourceTagsRequestBody} createResourceTagsRequestBody 批量添加的资源标签的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceResourceTags(createInstanceResourceTagsRequest?: CreateInstanceResourceTagsRequest): Promise<CreateInstanceResourceTagsResponse> {
        const options = ParamCreater().createInstanceResourceTags(createInstanceResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建老化策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建老化策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {CreateRetentionPolicyRequestBody} createRetentionPolicyRequestBody 创建老化策略需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceRetentionPolicy(createInstanceRetentionPolicyRequest?: CreateInstanceRetentionPolicyRequest): Promise<CreateInstanceRetentionPolicyResponse> {
        const options = ParamCreater().createInstanceRetentionPolicy(createInstanceRetentionPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建签名策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建签名策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {CreateSignaturePolicyRequestBody} createSignaturePolicyRequestBody 创建签名策略所需的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceSignPolicy(createInstanceSignPolicyRequest?: CreateInstanceSignPolicyRequest): Promise<CreateInstanceSignPolicyResponse> {
        const options = ParamCreater().createInstanceSignPolicy(createInstanceSignPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取临时访问凭证
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取临时访问凭证
     * @param {string} instanceId 企业仓库实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceTempCredential(createInstanceTempCredentialRequest?: CreateInstanceTempCredentialRequest): Promise<CreateInstanceTempCredentialResponse> {
        const options = ParamCreater().createInstanceTempCredential(createInstanceTempCredentialRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建触发器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建触发器
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {CreateWebhookPolicyRequestBody} createWebhookPolicyRequestBody 创建触发器需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceWebhook(createInstanceWebhookRequest?: CreateInstanceWebhookRequest): Promise<CreateInstanceWebhookResponse> {
        const options = ParamCreater().createInstanceWebhook(createInstanceWebhookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加子资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加子资源标签
     * @param {'instances'} resourceType 资源类型，支持的资源类型为：instances
     * @param {string} resourceId 资源id
     * @param {'namespaces'} subResourceType 子资源类型，支持的子资源类型为：namespaces
     * @param {string} subResourceId 子资源id
     * @param {CreateResourceTagsRequestBody} createResourceTagsRequestBody 批量添加的子资源标签的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubResourceTags(createSubResourceTagsRequest?: CreateSubResourceTagsRequest): Promise<CreateSubResourceTagsResponse> {
        const options = ParamCreater().createSubResourceTags(createSubResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除域名，SWR企业仓库的默认域名无法删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除域名
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} domainnameId 域名ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDomainName(deleteDomainNameRequest?: DeleteDomainNameRequest): Promise<DeleteDomainNameResponse> {
        const options = ParamCreater().deleteDomainName(deleteDomainNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除不可变Tag策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除不可变Tag策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} immutableRuleId 不可变Tag策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteImmutableRule(deleteImmutableRuleRequest?: DeleteImmutableRuleRequest): Promise<DeleteImmutableRuleResponse> {
        const options = ParamCreater().deleteImmutableRule(deleteImmutableRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除实例
     * @param {string} instanceId 企业仓库实例ID
     * @param {DeleteInstanceRequestBody} deleteInstanceRequestBody 删除实例需要的信息
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
     * 删除制品版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除制品版本
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {string} repositoryName 仓库名称
     * @param {string} reference 制品摘要
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceArtifact(deleteInstanceArtifactRequest?: DeleteInstanceArtifactRequest): Promise<DeleteInstanceArtifactResponse> {
        const options = ParamCreater().deleteInstanceArtifact(deleteInstanceArtifactRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除内网访问
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除内网访问
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} internalEndpointsId 内网访问ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceInternalEndpoint(deleteInstanceInternalEndpointRequest?: DeleteInstanceInternalEndpointRequest): Promise<DeleteInstanceInternalEndpointResponse> {
        const options = ParamCreater().deleteInstanceInternalEndpoint(deleteInstanceInternalEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除任务
     * @param {string} jobId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceJob(deleteInstanceJobRequest?: DeleteInstanceJobRequest): Promise<DeleteInstanceJobResponse> {
        const options = ParamCreater().deleteInstanceJob(deleteInstanceJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除长期访问凭证
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除长期访问凭证
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} credentialId 访问凭证ID，即token_id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceLtCredential(deleteInstanceLtCredentialRequest?: DeleteInstanceLtCredentialRequest): Promise<DeleteInstanceLtCredentialResponse> {
        const options = ParamCreater().deleteInstanceLtCredential(deleteInstanceLtCredentialRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除命名空间
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除命名空间
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称，小写字母或数字开头，后面跟小写字母、数字、点、下划线或中划线（其中点、下划线、中划线不能直接连续），小写字母或数字结尾，1-64个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceNamespace(deleteInstanceNamespaceRequest?: DeleteInstanceNamespaceRequest): Promise<DeleteInstanceNamespaceResponse> {
        const options = ParamCreater().deleteInstanceNamespace(deleteInstanceNamespaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除同步仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除镜像同步的目标仓库
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} registryId 同步仓库ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceRegistry(deleteInstanceRegistryRequest?: DeleteInstanceRegistryRequest): Promise<DeleteInstanceRegistryResponse> {
        const options = ParamCreater().deleteInstanceRegistry(deleteInstanceRegistryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除镜像同步策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除镜像同步策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} policyId 同步策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceReplicationPolicy(deleteInstanceReplicationPolicyRequest?: DeleteInstanceReplicationPolicyRequest): Promise<DeleteInstanceReplicationPolicyResponse> {
        const options = ParamCreater().deleteInstanceReplicationPolicy(deleteInstanceReplicationPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除制品仓库
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {string} repositoryName 制品仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceRepository(deleteInstanceRepositoryRequest?: DeleteInstanceRepositoryRequest): Promise<DeleteInstanceRepositoryResponse> {
        const options = ParamCreater().deleteInstanceRepository(deleteInstanceRepositoryRequest);

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
     * @param {'instances'} resourceType 资源类型，支持的资源类型为：instances
     * @param {string} resourceId 资源id
     * @param {DeleteResourceTagsRequestBody} deleteResourceTagsRequestBody 批量删除的资源标签的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceResourceTags(deleteInstanceResourceTagsRequest?: DeleteInstanceResourceTagsRequest): Promise<DeleteInstanceResourceTagsResponse> {
        const options = ParamCreater().deleteInstanceResourceTags(deleteInstanceResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除老化策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除老化策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 老化策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceRetentionPolicy(deleteInstanceRetentionPolicyRequest?: DeleteInstanceRetentionPolicyRequest): Promise<DeleteInstanceRetentionPolicyResponse> {
        const options = ParamCreater().deleteInstanceRetentionPolicy(deleteInstanceRetentionPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除签名策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除签名策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceSignPolicy(deleteInstanceSignPolicyRequest?: DeleteInstanceSignPolicyRequest): Promise<DeleteInstanceSignPolicyResponse> {
        const options = ParamCreater().deleteInstanceSignPolicy(deleteInstanceSignPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除制品Tag
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除制品的Tag
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {string} repositoryName 仓库名称
     * @param {string} tagName Tag名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceTag(deleteInstanceTagRequest?: DeleteInstanceTagRequest): Promise<DeleteInstanceTagResponse> {
        const options = ParamCreater().deleteInstanceTag(deleteInstanceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除触发器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除触发器
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 触发器ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceWebhook(deleteInstanceWebhookRequest?: DeleteInstanceWebhookRequest): Promise<DeleteInstanceWebhookResponse> {
        const options = ParamCreater().deleteInstanceWebhook(deleteInstanceWebhookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除子资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除子资源标签
     * @param {'instances'} resourceType 资源类型，支持的资源类型为：instances
     * @param {string} resourceId 资源id
     * @param {'namespaces'} subResourceType 子资源类型，支持的子资源类型为：namespaces
     * @param {string} subResourceId 子资源id
     * @param {DeleteResourceTagsRequestBody} deleteResourceTagsRequestBody 批量删除的子资源标签的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubResourceTags(deleteSubResourceTagsRequest?: DeleteSubResourceTagsRequest): Promise<DeleteSubResourceTagsResponse> {
        const options = ParamCreater().deleteSubResourceTags(deleteSubResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 手动执行同步策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 手动执行镜像同步策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {CreateReplicationExecutionRequestBody} createReplicationExecutionRequestBody 手动执行同步策略需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeInstanceReplicationPolicy(executeInstanceReplicationPolicyRequest?: ExecuteInstanceReplicationPolicyRequest): Promise<ExecuteInstanceReplicationPolicyResponse> {
        const options = ParamCreater().executeInstanceReplicationPolicy(executeInstanceReplicationPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 执行老化策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行老化策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 老化策略ID
     * @param {ExecuteRetentionPolicyRequestBody} applyRetentionPolicyRequestBody 执行老化策略需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeInstanceRetentionPolicy(executeInstanceRetentionPolicyRequest?: ExecuteInstanceRetentionPolicyRequest): Promise<ExecuteInstanceRetentionPolicyResponse> {
        const options = ParamCreater().executeInstanceRetentionPolicy(executeInstanceRetentionPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 手动执行签名策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 手动执行签名策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeInstanceSignPolicy(executeInstanceSignPolicyRequest?: ExecuteInstanceSignPolicyRequest): Promise<ExecuteInstanceSignPolicyResponse> {
        const options = ParamCreater().executeInstanceSignPolicy(executeInstanceSignPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取上传下载的相关审计日志列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取上传下载的相关审计日志列表
     * @param {string} operation 类型，目前支持pull,delete,create
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAuditLogs(listAuditLogsRequest?: ListAuditLogsRequest): Promise<ListAuditLogsResponse> {
        const options = ParamCreater().listAuditLogs(listAuditLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前实例的所有域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有域名列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} [uid] 域名ID
     * @param {string} [domainName] 域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainNames(listDomainNamesRequest?: ListDomainNamesRequest): Promise<ListDomainNamesResponse> {
        const options = ParamCreater().listDomainNames(listDomainNamesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询特性开关信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询特性开关信息
     * @param {string} instanceId 企业仓库实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFeatureGates(listFeatureGatesRequest?: ListFeatureGatesRequest): Promise<ListFeatureGatesResponse> {
        const options = ParamCreater().listFeatureGates(listFeatureGatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全局特性开关信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全局特性开关信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGlobalFeatureGates(listGlobalFeatureGatesRequest?: ListGlobalFeatureGatesRequest): Promise<ListGlobalFeatureGatesResponse> {
        const options = ParamCreater().listGlobalFeatureGates();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取不可变Tag策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取不可变Tag策略列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} [namespaceId] 所属命名空间ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listImmutableRules(listImmutableRulesRequest?: ListImmutableRulesRequest): Promise<ListImmutableRulesResponse> {
        const options = ParamCreater().listImmutableRules(listImmutableRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例列表
     * @param {number} [offset] 起始索引，默认为0。**注意：offset和limit参数需要配套使用。**
     * @param {number} [limit] 返回条数，默认为100，最大值为100。**注意：offset和limit参数需要配套使用。**
     * @param {'Initial' | 'Creating' | 'Running' | 'Unavailable'} [status] 实例状态, Initial, Creating, Running, Unavailable
     * @param {string} [enterpriseProjectId] 企业项目ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstance(listInstanceRequest?: ListInstanceRequest): Promise<ListInstanceResponse> {
        const options = ParamCreater().listInstance(listInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取制品附件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取制品附件列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {string} repositoryName 制品名称
     * @param {string} reference 制品摘要
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {'signature.cosign'} [type] 附件类型，支持的附件类型有：signature.cosign
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceAccessories(listInstanceAccessoriesRequest?: ListInstanceAccessoriesRequest): Promise<ListInstanceAccessoriesResponse> {
        const options = ParamCreater().listInstanceAccessories(listInstanceAccessoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库实例的所有制品版本列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取仓库实例的所有制品版本列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} [marker] 分页查询时的查询标记，使用上一次接口调用返回的next_marker值。默认值为1。**注意：marker和limit参数需要配套使用。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：marker和limit参数需要配套使用。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceAllArtifacts(listInstanceAllArtifactsRequest?: ListInstanceAllArtifactsRequest): Promise<ListInstanceAllArtifactsResponse> {
        const options = ParamCreater().listInstanceAllArtifacts(listInstanceAllArtifactsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取制品扫描的漏洞信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取制品扫描的漏洞信息
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {string} repositoryName 仓库名称
     * @param {string} reference 制品摘要
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceArtifactVulnerabilities(listInstanceArtifactVulnerabilitiesRequest?: ListInstanceArtifactVulnerabilitiesRequest): Promise<ListInstanceArtifactVulnerabilitiesResponse> {
        const options = ParamCreater().listInstanceArtifactVulnerabilities(listInstanceArtifactVulnerabilitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取制品版本列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取制品版本列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {string} repositoryName 仓库名称
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {'IMAGE' | 'CHART'} [type] 制品类型
     * @param {string} [tags] 制品包含版本，模糊匹配条件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceArtifacts(listInstanceArtifactsRequest?: ListInstanceArtifactsRequest): Promise<ListInstanceArtifactsResponse> {
        const options = ParamCreater().listInstanceArtifacts(listInstanceArtifactsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取内网访问列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取内网访问列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用。**
     * @param {number} [limit] 返回条数，默认为100，最大值为100。**注意：offset和limit参数需要配套使用。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceInternalEndpoints(listInstanceInternalEndpointsRequest?: ListInstanceInternalEndpointsRequest): Promise<ListInstanceInternalEndpointsResponse> {
        const options = ParamCreater().listInstanceInternalEndpoints(listInstanceInternalEndpointsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务列表
     * @param {'Creating' | 'Initializing' | 'Running' | 'Failed' | 'Success'} [status] 任务状态, 支持的状态为：Creating,Initializing,Running,Failed,Success
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用。**
     * @param {number} [limit] 返回条数，默认为100，最大值为100。**注意：offset和limit参数需要配套使用。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceJobs(listInstanceJobsRequest?: ListInstanceJobsRequest): Promise<ListInstanceJobsResponse> {
        const options = ParamCreater().listInstanceJobs(listInstanceJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询长期访问凭证列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询长期访问凭证列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} [offset] 起始索引，默认为0。**注意：offset和limit参数需要配套使用。**
     * @param {number} [limit] 返回条数，默认为100，最大值为100。**注意：offset和limit参数需要配套使用。**
     * @param {boolean} [selfOnly] 值为false的时候，拥有te_admin角色的用户可以查询实例下所有的长期登录凭证，默认情况下只查询自己创建的长期登录凭证
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceLtCredentials(listInstanceLtCredentialsRequest?: ListInstanceLtCredentialsRequest): Promise<ListInstanceLtCredentialsResponse> {
        const options = ParamCreater().listInstanceLtCredentials(listInstanceLtCredentialsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取命名空间列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取命名空间列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {'updated_at'} [orderColumn] 按列排序，可设置为updated_at（按更新时间排序）
     * @param {'desc' | 'asc'} [orderType] 排序类型，可设置为desc（降序）、asc（升序），与order_column配合使用
     * @param {string} [name] 命名空间名称，小写字母或数字开头，后面跟小写字母、数字、点、下划线或中划线（其中点、下划线、中划线不能直接连续），小写字母或数字结尾，1-64个字符。
     * @param {string} [_public] 是否公开，非空且非true默认返回false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceNamespaces(listInstanceNamespacesRequest?: ListInstanceNamespacesRequest): Promise<ListInstanceNamespacesResponse> {
        const options = ParamCreater().listInstanceNamespaces(listInstanceNamespacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目下所有实例标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目下所有实例标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceProjectTags(listInstanceProjectTagsRequest?: ListInstanceProjectTagsRequest): Promise<ListInstanceProjectTagsResponse> {
        const options = ParamCreater().listInstanceProjectTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像同步的目标仓库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像同步的目标仓库列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {'created_at' | 'updated_at' | 'name'} [orderColumn] 排序字段，支持created_at、updated_at、name，默认为created_at
     * @param {'desc' | 'asc'} [orderType] 排序方式，支持desc、asc，默认desc; 注意：order_type需要与order_column配合使用
     * @param {string} [name] 名称，模糊查询
     * @param {string} [type] 仓库类型
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceRegistries(listInstanceRegistriesRequest?: ListInstanceRegistriesRequest): Promise<ListInstanceRegistriesResponse> {
        const options = ParamCreater().listInstanceRegistries(listInstanceRegistriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像同步策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像同步策略列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} [orderColumn] 排序字段，支持created_at、updated_at、name，默认为created_at
     * @param {string} [orderType] 排序方式，支持desc、asc，默认desc; 注意：order_type需要与order_column配合使用。
     * @param {string} [name] 名称，模糊查询
     * @param {number} [registryId] 仓库ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceReplicationPolicies(listInstanceReplicationPoliciesRequest?: ListInstanceReplicationPoliciesRequest): Promise<ListInstanceReplicationPoliciesResponse> {
        const options = ParamCreater().listInstanceReplicationPolicies(listInstanceReplicationPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像同步策略执行任务的镜像版本列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像同步策略执行任务的镜像版本列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} executionId 同步策略执行记录ID
     * @param {number} taskId 任务ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {string} [status] 状态，可选Initialized、Pending、InProgress、Succeed、Failed、Stopped
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceReplicationPolicyExecSubTasks(listInstanceReplicationPolicyExecSubTasksRequest?: ListInstanceReplicationPolicyExecSubTasksRequest): Promise<ListInstanceReplicationPolicyExecSubTasksResponse> {
        const options = ParamCreater().listInstanceReplicationPolicyExecSubTasks(listInstanceReplicationPolicyExecSubTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像同步策略执行任务的镜像列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像同步策略执行任务的镜像列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} executionId 同步策略执行记录ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceReplicationPolicyExecTasks(listInstanceReplicationPolicyExecTasksRequest?: ListInstanceReplicationPolicyExecTasksRequest): Promise<ListInstanceReplicationPolicyExecTasksResponse> {
        const options = ParamCreater().listInstanceReplicationPolicyExecTasks(listInstanceReplicationPolicyExecTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像同步策略执行记录列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像同步策略执行记录列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} [policyId] 同步策略ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100 **注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceReplicationPolicyExecutions(listInstanceReplicationPolicyExecutionsRequest?: ListInstanceReplicationPolicyExecutionsRequest): Promise<ListInstanceReplicationPolicyExecutionsResponse> {
        const options = ParamCreater().listInstanceReplicationPolicyExecutions(listInstanceReplicationPolicyExecutionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取制品仓库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取制品仓库列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {'created_at' | 'updated_at'} [orderColumn] 排序字段，支持created_at、updated_at，默认为created_at
     * @param {'desc' | 'asc'} [orderType] 排序方式，支持desc、asc，默认desc
     * @param {number} [namespaceId] 所属命名空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceRepositories(listInstanceRepositoriesRequest?: ListInstanceRepositoriesRequest): Promise<ListInstanceRepositoriesResponse> {
        const options = ParamCreater().listInstanceRepositories(listInstanceRepositoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按照标签检索资源列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按照标签检索资源列表
     * @param {'instances'} resourceType 资源类型，支持的资源类型为：instances
     * @param {ListResourceInstancesRequestBody} listResourceInstancesRequestBody 查询资源列表需要的信息
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用。**
     * @param {number} [limit] 返回条数，默认为200，最小值为1，最大值为200。**注意：offset和limit参数需要配套使用。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceResourceInstances(listInstanceResourceInstancesRequest?: ListInstanceResourceInstancesRequest): Promise<ListInstanceResourceInstancesResponse> {
        const options = ParamCreater().listInstanceResourceInstances(listInstanceResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {'instances'} resourceType 资源类型，支持的资源类型为：instances
     * @param {string} resourceId 资源id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceResourceTags(listInstanceResourceTagsRequest?: ListInstanceResourceTagsRequest): Promise<ListInstanceResourceTagsResponse> {
        const options = ParamCreater().listInstanceResourceTags(listInstanceResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取老化策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取老化策略列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} [name] 老化策略名称
     * @param {number} [namespaceId] 所属命名空间ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceRetentionPolicies(listInstanceRetentionPoliciesRequest?: ListInstanceRetentionPoliciesRequest): Promise<ListInstanceRetentionPoliciesResponse> {
        const options = ParamCreater().listInstanceRetentionPolicies(listInstanceRetentionPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取老化策略执行任务的镜像版本列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取老化策略执行任务的镜像版本列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 老化策略ID
     * @param {number} executionId 老化策略执行记录ID
     * @param {number} taskId 任务ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {string} [status] 状态，可选Initialized、Pending、InProgress、Succeed、Failed、Stopped
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceRetentionPolicyExecSubTasks(listInstanceRetentionPolicyExecSubTasksRequest?: ListInstanceRetentionPolicyExecSubTasksRequest): Promise<ListInstanceRetentionPolicyExecSubTasksResponse> {
        const options = ParamCreater().listInstanceRetentionPolicyExecSubTasks(listInstanceRetentionPolicyExecSubTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取老化策略执行任务的镜像列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取老化策略执行任务的镜像列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 老化策略ID
     * @param {number} executionId 老化策略执行记录ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {string} [status] 状态，可选Initialized、Pending、InProgress、Succeed、Failed、Stopped
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceRetentionPolicyExecTasks(listInstanceRetentionPolicyExecTasksRequest?: ListInstanceRetentionPolicyExecTasksRequest): Promise<ListInstanceRetentionPolicyExecTasksResponse> {
        const options = ParamCreater().listInstanceRetentionPolicyExecTasks(listInstanceRetentionPolicyExecTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取老化策略执行记录列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取老化策略执行记录列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 老化策略ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceRetentionPolicyExecutions(listInstanceRetentionPolicyExecutionsRequest?: ListInstanceRetentionPolicyExecutionsRequest): Promise<ListInstanceRetentionPolicyExecutionsResponse> {
        const options = ParamCreater().listInstanceRetentionPolicyExecutions(listInstanceRetentionPolicyExecutionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取签名策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取签名策略列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceSignPolicies(listInstanceSignPoliciesRequest?: ListInstanceSignPoliciesRequest): Promise<ListInstanceSignPoliciesResponse> {
        const options = ParamCreater().listInstanceSignPolicies(listInstanceSignPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取签名执行记录任务的镜像列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取签名执行记录任务的镜像列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 策略ID
     * @param {number} executionId 签名策略执行记录ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceSignPolicyExecTasks(listInstanceSignPolicyExecTasksRequest?: ListInstanceSignPolicyExecTasksRequest): Promise<ListInstanceSignPolicyExecTasksResponse> {
        const options = ParamCreater().listInstanceSignPolicyExecTasks(listInstanceSignPolicyExecTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取签名执行记录列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取签名执行记录列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 策略ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceSignPolicyExecutions(listInstanceSignPolicyExecutionsRequest?: ListInstanceSignPolicyExecutionsRequest): Promise<ListInstanceSignPolicyExecutionsResponse> {
        const options = ParamCreater().listInstanceSignPolicyExecutions(listInstanceSignPolicyExecutionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取签名策略执行任务的镜像版本列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取签名策略执行任务的镜像版本列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 签名策略ID
     * @param {number} executionId 签名策略执行记录ID
     * @param {number} taskId 任务ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {string} [status] 状态，可选Initialized、Pending、InProgress、Succeed、Failed、Stopped
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceSignatureExecutionSubtasks(listInstanceSignatureExecutionSubtasksRequest?: ListInstanceSignatureExecutionSubtasksRequest): Promise<ListInstanceSignatureExecutionSubtasksResponse> {
        const options = ParamCreater().listInstanceSignatureExecutionSubtasks(listInstanceSignatureExecutionSubtasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实例统计数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例统计数据
     * @param {string} instanceId 企业仓库实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceStatistics(listInstanceStatisticsRequest?: ListInstanceStatisticsRequest): Promise<ListInstanceStatisticsResponse> {
        const options = ParamCreater().listInstanceStatistics(listInstanceStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取制品仓库的Tag列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取制品仓库的Tag列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {string} repositoryName 仓库名称
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {boolean} [isAccessory] 是否返回制品附件，默认为true
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceTags(listInstanceTagsRequest?: ListInstanceTagsRequest): Promise<ListInstanceTagsResponse> {
        const options = ParamCreater().listInstanceTags(listInstanceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取触发器执行任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取触发器执行任务列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 触发器ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {string} [status] 状态，可选Initialized、Pending、InProgress、Succeed、Failed、Stopped
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceWebhookJobs(listInstanceWebhookJobsRequest?: ListInstanceWebhookJobsRequest): Promise<ListInstanceWebhookJobsResponse> {
        const options = ParamCreater().listInstanceWebhookJobs(listInstanceWebhookJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取触发器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取触发器列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} [orderColumn] 排序字段，支持created_at、updated_at、name，默认为created_at
     * @param {'desc' | 'asc'} [orderType] 排序方式，支持desc、asc，默认desc;order_type需要与order_column配合使用
     * @param {string} [name] 策略名称，模糊查询
     * @param {number} [namespaceId] 所属命名空间ID
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceWebhooks(listInstanceWebhooksRequest?: ListInstanceWebhooksRequest): Promise<ListInstanceWebhooksResponse> {
        const options = ParamCreater().listInstanceWebhooks(listInstanceWebhooksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取命名空间下所有制品仓库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取命名空间下所有制品仓库列表
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 所属命名空间名称
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {number} [limit] 返回条数，默认为10，最大值为100。**注意：offset和limit参数需要配套使用，offset必须为0或者为limit的倍数。**
     * @param {'created_at' | 'updated_at'} [orderColumn] 排序字段，支持created_at、updated_at，默认为created_at
     * @param {'desc' | 'asc'} [orderType] 排序方式，支持desc、asc，默认desc;order_column和order_type参数需要配套使用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNamespaceRepositories(listNamespaceRepositoriesRequest?: ListNamespaceRepositoriesRequest): Promise<ListNamespaceRepositoriesResponse> {
        const options = ParamCreater().listNamespaceRepositories(listNamespaceRepositoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例下所有命名空间标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例下所有命名空间标签
     * @param {string} instanceId 实例id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNamespaceTags(listNamespaceTagsRequest?: ListNamespaceTagsRequest): Promise<ListNamespaceTagsResponse> {
        const options = ParamCreater().listNamespaceTags(listNamespaceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按照标签检索子资源列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按照标签检索子资源列表
     * @param {'instances'} resourceType 资源类型，支持的资源类型为：instances
     * @param {string} resourceId 资源id
     * @param {'namespaces'} subResourceType 子资源类型，支持的子资源类型为：namespaces
     * @param {ListResourceInstancesRequestBody} listResourceInstancesRequestBody 查询子资源列表需要的信息
     * @param {number} [offset] 起始索引，默认值为0。**注意：offset和limit参数需要配套使用。**
     * @param {number} [limit] 返回条数，默认为200，最小值为1，最大值为200。**注意：offset和limit参数需要配套使用。**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubResourceInstances(listSubResourceInstancesRequest?: ListSubResourceInstancesRequest): Promise<ListSubResourceInstancesResponse> {
        const options = ParamCreater().listSubResourceInstances(listSubResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询子资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询子资源标签
     * @param {'instances'} resourceType 资源类型，支持的资源类型为：instances
     * @param {string} resourceId 资源id
     * @param {'namespaces'} subResourceType 子资源类型，支持的子资源类型为：namespaces
     * @param {string} subResourceId 子资源id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubResourceTags(listSubResourceTagsRequest?: ListSubResourceTagsRequest): Promise<ListSubResourceTagsResponse> {
        const options = ParamCreater().listSubResourceTags(listSubResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实例详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例详情
     * @param {string} instanceId 企业仓库实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstance(showInstanceRequest?: ShowInstanceRequest): Promise<ShowInstanceResponse> {
        const options = ParamCreater().showInstance(showInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取制品版本详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取制品版本详情
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {string} repositoryName 制品名称
     * @param {string} reference 制品摘要
     * @param {boolean} [withScanOverview] 是否返回制品扫描摘要
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceArtifact(showInstanceArtifactRequest?: ShowInstanceArtifactRequest): Promise<ShowInstanceArtifactResponse> {
        const options = ParamCreater().showInstanceArtifact(showInstanceArtifactRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取制品附加信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取制品附加信息
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {string} repositoryName 仓库名称
     * @param {string} reference 制品摘要
     * @param {'build_history'} addition 制品附加信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceArtifactAddition(showInstanceArtifactAdditionRequest?: ShowInstanceArtifactAdditionRequest): Promise<ShowInstanceArtifactAdditionResponse> {
        const options = ParamCreater().showInstanceArtifactAddition(showInstanceArtifactAdditionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看实例配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看实例配置
     * @param {string} instanceId 企业仓库实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceConfiguration(showInstanceConfigurationRequest?: ShowInstanceConfigurationRequest): Promise<ShowInstanceConfigurationResponse> {
        const options = ParamCreater().showInstanceConfiguration(showInstanceConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取公网访问信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取公网访问信息
     * @param {string} instanceId 企业仓库实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceEndpointPolicy(showInstanceEndpointPolicyRequest?: ShowInstanceEndpointPolicyRequest): Promise<ShowInstanceEndpointPolicyResponse> {
        const options = ParamCreater().showInstanceEndpointPolicy(showInstanceEndpointPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询内网访问详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询内网访问详情
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} internalEndpointsId 内网访问ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceInternalEndpoint(showInstanceInternalEndpointRequest?: ShowInstanceInternalEndpointRequest): Promise<ShowInstanceInternalEndpointResponse> {
        const options = ParamCreater().showInstanceInternalEndpoint(showInstanceInternalEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取任务详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务详情
     * @param {string} jobId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceJob(showInstanceJobRequest?: ShowInstanceJobRequest): Promise<ShowInstanceJobResponse> {
        const options = ParamCreater().showInstanceJob(showInstanceJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取命名空间详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取命名空间详情
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称，小写字母或数字开头，后面跟小写字母、数字、点、下划线或中划线（其中点、下划线、中划线不能直接连续），小写字母或数字结尾，1-64个字符。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceNamespace(showInstanceNamespaceRequest?: ShowInstanceNamespaceRequest): Promise<ShowInstanceNamespaceResponse> {
        const options = ParamCreater().showInstanceNamespace(showInstanceNamespaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像同步的目标仓库详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像同步的目标仓库详情
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} registryId 同步仓库ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceRegistry(showInstanceRegistryRequest?: ShowInstanceRegistryRequest): Promise<ShowInstanceRegistryResponse> {
        const options = ParamCreater().showInstanceRegistry(showInstanceRegistryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像同步策略详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像同步策略详情
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} policyId 策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceReplicationPolicy(showInstanceReplicationPolicyRequest?: ShowInstanceReplicationPolicyRequest): Promise<ShowInstanceReplicationPolicyResponse> {
        const options = ParamCreater().showInstanceReplicationPolicy(showInstanceReplicationPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取制品仓库详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取制品仓库详情
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {string} repositoryName 仓库名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceRepository(showInstanceRepositoryRequest?: ShowInstanceRepositoryRequest): Promise<ShowInstanceRepositoryResponse> {
        const options = ParamCreater().showInstanceRepository(showInstanceRepositoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按照标签检索资源数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按照标签检索资源数量
     * @param {'instances'} resourceType 资源类型，支持的资源类型为：instances
     * @param {ListResourceInstancesRequestBody} listResourceInstancesRequestBody 查询资源数量需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceResourceInstancesCount(showInstanceResourceInstancesCountRequest?: ShowInstanceResourceInstancesCountRequest): Promise<ShowInstanceResourceInstancesCountResponse> {
        const options = ParamCreater().showInstanceResourceInstancesCount(showInstanceResourceInstancesCountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取老化策略详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取老化策略详情
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 老化策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceRetentionPolicy(showInstanceRetentionPolicyRequest?: ShowInstanceRetentionPolicyRequest): Promise<ShowInstanceRetentionPolicyResponse> {
        const options = ParamCreater().showInstanceRetentionPolicy(showInstanceRetentionPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取签名策略详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取签名策略详情
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 策略ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceSignPolicy(showInstanceSignPolicyRequest?: ShowInstanceSignPolicyRequest): Promise<ShowInstanceSignPolicyResponse> {
        const options = ParamCreater().showInstanceSignPolicy(showInstanceSignPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取触发器详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取触发器详情
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 触发器ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstanceWebhook(showInstanceWebhookRequest?: ShowInstanceWebhookRequest): Promise<ShowInstanceWebhookResponse> {
        const options = ParamCreater().showInstanceWebhook(showInstanceWebhookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按照标签检索子资源数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按照标签检索子资源数量
     * @param {'instances'} resourceType 资源类型，支持的资源类型为：instances
     * @param {string} resourceId 资源id
     * @param {'namespaces'} subResourceType 子资源类型，支持的子资源类型为：namespaces
     * @param {ListResourceInstancesRequestBody} listResourceInstancesRequestBody 查询子资源数量需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSubResourceInstancesCount(showSubResourceInstancesCountRequest?: ShowSubResourceInstancesCountRequest): Promise<ShowSubResourceInstancesCountResponse> {
        const options = ParamCreater().showSubResourceInstancesCount(showSubResourceInstancesCountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 手动启动制品扫描
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 手动启动制品扫描
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {string} repositoryName 仓库名称
     * @param {string} reference 制品摘要
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startManualScanning(startManualScanningRequest?: StartManualScanningRequest): Promise<StartManualScanningResponse> {
        const options = ParamCreater().startManualScanning(startManualScanningRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止镜像同步任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止镜像同步任务
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} executionId 同步策略执行记录ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopInstanceReplicationPolicyExecution(stopInstanceReplicationPolicyExecutionRequest?: StopInstanceReplicationPolicyExecutionRequest): Promise<StopInstanceReplicationPolicyExecutionResponse> {
        const options = ParamCreater().stopInstanceReplicationPolicyExecution(stopInstanceReplicationPolicyExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新域名
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} domainnameId 域名ID
     * @param {UpdateDomainNameRequestBody} updateDomainNameBody 更新域名请求body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainName(updateDomainNameRequest?: UpdateDomainNameRequest): Promise<UpdateDomainNameResponse> {
        const options = ParamCreater().updateDomainName(updateDomainNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改不可变Tag策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改不可变Tag策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} immutableRuleId 不可变Tag策略ID
     * @param {UpdateImmutableRuleBody} updateImmutableRuleRequestBody 修改不可变策略需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateImmutableRule(updateImmutableRuleRequest?: UpdateImmutableRuleRequest): Promise<UpdateImmutableRuleResponse> {
        const options = ParamCreater().updateImmutableRule(updateImmutableRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改实例配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改实例配置
     * @param {string} instanceId 企业仓库实例ID
     * @param {UpdateInstanceConfigurationRequestBody} updateInstanceConfigurationRequestBody 要修改的实例配置信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceConfiguration(updateInstanceConfigurationRequest?: UpdateInstanceConfigurationRequest): Promise<UpdateInstanceConfigurationResponse> {
        const options = ParamCreater().updateInstanceConfiguration(updateInstanceConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新公网访问白名单，更新方式为全量更新方式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新公网访问白名单
     * @param {string} instanceId 企业仓库实例ID
     * @param {UpdateWhiteListRequestBody} updateWhiteListRequestBody 更新白名单需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceEndpointPolicy(updateInstanceEndpointPolicyRequest?: UpdateInstanceEndpointPolicyRequest): Promise<UpdateInstanceEndpointPolicyResponse> {
        const options = ParamCreater().updateInstanceEndpointPolicy(updateInstanceEndpointPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用/停用长期访问凭证
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用/停用长期访问凭证
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} credentialId 访问凭证ID，即token_id
     * @param {UpdateLongTermCredentialRequestBody} updateLongTermCredentialRequestBody 启用/停用长期访问凭证需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceLtCredential(updateInstanceLtCredentialRequest?: UpdateInstanceLtCredentialRequest): Promise<UpdateInstanceLtCredentialResponse> {
        const options = ParamCreater().updateInstanceLtCredential(updateInstanceLtCredentialRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改命名空间
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改命名空间
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称，小写字母或数字开头，后面跟小写字母、数字、点、下划线或中划线（其中点、下划线、中划线不能直接连续），小写字母或数字结尾，1-64个字符。
     * @param {UpdateNamespaceRequestBody} updateNamespaceRequestBody 修改实例需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceNamespace(updateInstanceNamespaceRequest?: UpdateInstanceNamespaceRequest): Promise<UpdateInstanceNamespaceResponse> {
        const options = ParamCreater().updateInstanceNamespace(updateInstanceNamespaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改镜像同步的目标仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改镜像同步的目标仓库
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} registryId 同步仓库ID
     * @param {UpdateRegistryRequestBody} updateRegistryRequestBody 修改同步仓库需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceRegistry(updateInstanceRegistryRequest?: UpdateInstanceRegistryRequest): Promise<UpdateInstanceRegistryResponse> {
        const options = ParamCreater().updateInstanceRegistry(updateInstanceRegistryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改镜像同步策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改镜像同步策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {number} policyId 同步策略ID
     * @param {UpdateReplicationPolicyRequestBody} updateReplicationPolicyRequestBody 更新同步策略所需的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceReplicationPolicy(updateInstanceReplicationPolicyRequest?: UpdateInstanceReplicationPolicyRequest): Promise<UpdateInstanceReplicationPolicyResponse> {
        const options = ParamCreater().updateInstanceReplicationPolicy(updateInstanceReplicationPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改制品仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改制品仓库
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {string} repositoryName 制品仓库名称
     * @param {UpdateRepoConfigRequestBody} updateRepoConfigRequestBody 修改仓库配置需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceRepository(updateInstanceRepositoryRequest?: UpdateInstanceRepositoryRequest): Promise<UpdateInstanceRepositoryResponse> {
        const options = ParamCreater().updateInstanceRepository(updateInstanceRepositoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改老化策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改老化策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 老化策略ID
     * @param {UpdateRetentionPolicyRequestBody} updateRetentionPolicyRequestBody 更新老化策略需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceRetentionPolicy(updateInstanceRetentionPolicyRequest?: UpdateInstanceRetentionPolicyRequest): Promise<UpdateInstanceRetentionPolicyResponse> {
        const options = ParamCreater().updateInstanceRetentionPolicy(updateInstanceRetentionPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改签名策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改签名策略
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 策略ID
     * @param {UpdateSignaturePolicyRequestBody} updateSignaturePolicyRequestBody 更新签名策略需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceSignPolicy(updateInstanceSignPolicyRequest?: UpdateInstanceSignPolicyRequest): Promise<UpdateInstanceSignPolicyResponse> {
        const options = ParamCreater().updateInstanceSignPolicy(updateInstanceSignPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改触发器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改触发器
     * @param {string} instanceId 企业仓库实例ID
     * @param {string} namespaceName 命名空间名称
     * @param {number} policyId 触发器ID
     * @param {UpdateWebhookPolicyRequestBody} updateWebhookPolicyRequestBody 修改触发器需要的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceWebhook(updateInstanceWebhookRequest?: UpdateInstanceWebhookRequest): Promise<UpdateInstanceWebhookResponse> {
        const options = ParamCreater().updateInstanceWebhook(updateInstanceWebhookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 检查租户是否已委托SWR服务通过触发器功能调用CCE、CCI服务，一般由前端控制台自动调用，用户无需手动调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkAgency() {
            const options = {
                method: "GET",
                url: "/v2/manage/agency",
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
         * 租户首次使用SWR服务时创建SWR服务内部委托，一般由前端控制台自动调用，用户无需手动调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAgency(createAgencyRequest?: CreateAgencyRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/agency",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (createAgencyRequest !== null && createAgencyRequest !== undefined) {
                if (createAgencyRequest instanceof CreateAgencyRequest) {
                    contentType = createAgencyRequest.contentType;
                } else {
                    contentType = createAgencyRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用该接口，通过获取响应消息头的X-Swr-Dockerlogin的值及响应消息体的host值，可生成增强型登录指令,注：此接口只支持IAM新平面的调用方式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAuthorizationToken(createAuthorizationTokenRequest?: CreateAuthorizationTokenRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/utils/authorizationtoken",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (createAuthorizationTokenRequest !== null && createAuthorizationTokenRequest !== undefined) {
                if (createAuthorizationTokenRequest instanceof CreateAuthorizationTokenRequest) {
                    contentType = createAuthorizationTokenRequest.contentType;
                } else {
                    contentType = createAuthorizationTokenRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建镜像自动同步任务，帮助您把最新推送的镜像自动同步到其他区域镜像仓库内。 镜像自动同步帮助您把最新推送的镜像自动同步到其他区域镜像仓库内，后期镜像有更新时，目标仓库的镜像也会自动更新，但已有的镜像不会自动同步。已有镜像的同步需要手动操作，详情请参见手动同步镜像。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createImageSyncRepo(createImageSyncRepoRequest?: CreateImageSyncRepoRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/sync_repo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;
            
            let repository;

            if (createImageSyncRepoRequest !== null && createImageSyncRepoRequest !== undefined) {
                if (createImageSyncRepoRequest instanceof CreateImageSyncRepoRequest) {
                    contentType = createImageSyncRepoRequest.contentType;
                    namespace = createImageSyncRepoRequest.namespace;
                    repository = createImageSyncRepoRequest.repository;
                    body = createImageSyncRepoRequest.body
                } else {
                    contentType = createImageSyncRepoRequest['Content-Type'];
                    namespace = createImageSyncRepoRequest['namespace'];
                    repository = createImageSyncRepoRequest['repository'];
                    body = createImageSyncRepoRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createImageSyncRepo.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling createImageSyncRepo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对于镜像仓库已有的镜像，如果想在其他区域使用，需要手动触发镜像同步。 判断是否同步成功的方法如下：响应状态码为200，无报错信息，表示同步成功。通过SWR管理控制台或调用查询镜像仓库概要信息接口，在目标区域的目标组织下，若存在所同步的镜像版本表示同步成功。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createManualImageSyncRepo(createManualImageSyncRepoRequest?: CreateManualImageSyncRepoRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/sync_images",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;
            
            let repository;

            if (createManualImageSyncRepoRequest !== null && createManualImageSyncRepoRequest !== undefined) {
                if (createManualImageSyncRepoRequest instanceof CreateManualImageSyncRepoRequest) {
                    contentType = createManualImageSyncRepoRequest.contentType;
                    namespace = createManualImageSyncRepoRequest.namespace;
                    repository = createManualImageSyncRepoRequest.repository;
                    body = createManualImageSyncRepoRequest.body
                } else {
                    contentType = createManualImageSyncRepoRequest['Content-Type'];
                    namespace = createManualImageSyncRepoRequest['namespace'];
                    repository = createManualImageSyncRepoRequest['repository'];
                    body = createManualImageSyncRepoRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createManualImageSyncRepo.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling createManualImageSyncRepo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建组织
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNamespace(createNamespaceRequest?: CreateNamespaceRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createNamespaceRequest !== null && createNamespaceRequest !== undefined) {
                if (createNamespaceRequest instanceof CreateNamespaceRequest) {
                    contentType = createNamespaceRequest.contentType;
                    body = createNamespaceRequest.body
                } else {
                    contentType = createNamespaceRequest['Content-Type'];
                    body = createNamespaceRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建组织权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNamespaceAuth(createNamespaceAuthRequest?: CreateNamespaceAuthRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;

            if (createNamespaceAuthRequest !== null && createNamespaceAuthRequest !== undefined) {
                if (createNamespaceAuthRequest instanceof CreateNamespaceAuthRequest) {
                    contentType = createNamespaceAuthRequest.contentType;
                    namespace = createNamespaceAuthRequest.namespace;
                    body = createNamespaceAuthRequest.body
                } else {
                    contentType = createNamespaceAuthRequest['Content-Type'];
                    namespace = createNamespaceAuthRequest['namespace'];
                    body = createNamespaceAuthRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createNamespaceAuth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在组织下创建镜像仓库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRepo(createRepoRequest?: CreateRepoRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;

            if (createRepoRequest !== null && createRepoRequest !== undefined) {
                if (createRepoRequest instanceof CreateRepoRequest) {
                    contentType = createRepoRequest.contentType;
                    namespace = createRepoRequest.namespace;
                    body = createRepoRequest.body
                } else {
                    contentType = createRepoRequest['Content-Type'];
                    namespace = createRepoRequest['namespace'];
                    body = createRepoRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createRepo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建共享帐号。镜像上传后，您可以共享私有镜像给其他帐号，并授予下载该镜像的权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRepoDomains(createRepoDomainsRequest?: CreateRepoDomainsRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repositories/{repository}/access-domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;
            
            let repository;

            if (createRepoDomainsRequest !== null && createRepoDomainsRequest !== undefined) {
                if (createRepoDomainsRequest instanceof CreateRepoDomainsRequest) {
                    contentType = createRepoDomainsRequest.contentType;
                    namespace = createRepoDomainsRequest.namespace;
                    repository = createRepoDomainsRequest.repository;
                    body = createRepoDomainsRequest.body
                } else {
                    contentType = createRepoDomainsRequest['Content-Type'];
                    namespace = createRepoDomainsRequest['namespace'];
                    repository = createRepoDomainsRequest['repository'];
                    body = createRepoDomainsRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createRepoDomains.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling createRepoDomains.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建镜像tag
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRepoTag(createRepoTagRequest?: CreateRepoTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;
            
            let repository;

            if (createRepoTagRequest !== null && createRepoTagRequest !== undefined) {
                if (createRepoTagRequest instanceof CreateRepoTagRequest) {
                    contentType = createRepoTagRequest.contentType;
                    namespace = createRepoTagRequest.namespace;
                    repository = createRepoTagRequest.repository;
                    body = createRepoTagRequest.body
                } else {
                    contentType = createRepoTagRequest['Content-Type'];
                    namespace = createRepoTagRequest['namespace'];
                    repository = createRepoTagRequest['repository'];
                    body = createRepoTagRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createRepoTag.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling createRepoTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建镜像老化规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRetention(createRetentionRequest?: CreateRetentionRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;
            
            let repository;

            if (createRetentionRequest !== null && createRetentionRequest !== undefined) {
                if (createRetentionRequest instanceof CreateRetentionRequest) {
                    contentType = createRetentionRequest.contentType;
                    namespace = createRetentionRequest.namespace;
                    repository = createRetentionRequest.repository;
                    body = createRetentionRequest.body
                } else {
                    contentType = createRetentionRequest['Content-Type'];
                    namespace = createRetentionRequest['namespace'];
                    repository = createRetentionRequest['repository'];
                    body = createRetentionRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createRetention.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling createRetention.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用该接口，通过获取响应消息头的X-Swr-Dockerlogin的值及响应消息体的host值，可生成临时登录指令。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSecret(createSecretRequest?: CreateSecretRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/utils/secret",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let projectname;
            
            let durationSeconds;

            if (createSecretRequest !== null && createSecretRequest !== undefined) {
                if (createSecretRequest instanceof CreateSecretRequest) {
                    contentType = createSecretRequest.contentType;
                    projectname = createSecretRequest.projectname;
                    durationSeconds = createSecretRequest.durationSeconds;
                } else {
                    contentType = createSecretRequest['Content-Type'];
                    projectname = createSecretRequest['projectname'];
                    durationSeconds = createSecretRequest['duration_seconds'];
                }
            }

        
            if (projectname !== null && projectname !== undefined) {
                localVarQueryParameter['projectname'] = projectname;
            }
            if (durationSeconds !== null && durationSeconds !== undefined) {
                localVarQueryParameter['duration_seconds'] = durationSeconds;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建触发器
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTrigger(createTriggerRequest?: CreateTriggerRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/triggers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;
            
            let repository;

            if (createTriggerRequest !== null && createTriggerRequest !== undefined) {
                if (createTriggerRequest instanceof CreateTriggerRequest) {
                    contentType = createTriggerRequest.contentType;
                    namespace = createTriggerRequest.namespace;
                    repository = createTriggerRequest.repository;
                    body = createTriggerRequest.body
                } else {
                    contentType = createTriggerRequest['Content-Type'];
                    namespace = createTriggerRequest['namespace'];
                    repository = createTriggerRequest['repository'];
                    body = createTriggerRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createTrigger.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling createTrigger.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建镜像权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createUserRepositoryAuth(createUserRepositoryAuthRequest?: CreateUserRepositoryAuthRequest) {
            const options = {
                method: "POST",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;
            
            let repository;

            if (createUserRepositoryAuthRequest !== null && createUserRepositoryAuthRequest !== undefined) {
                if (createUserRepositoryAuthRequest instanceof CreateUserRepositoryAuthRequest) {
                    contentType = createUserRepositoryAuthRequest.contentType;
                    namespace = createUserRepositoryAuthRequest.namespace;
                    repository = createUserRepositoryAuthRequest.repository;
                    body = createUserRepositoryAuthRequest.body
                } else {
                    contentType = createUserRepositoryAuthRequest['Content-Type'];
                    namespace = createUserRepositoryAuthRequest['namespace'];
                    repository = createUserRepositoryAuthRequest['repository'];
                    body = createUserRepositoryAuthRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling createUserRepositoryAuth.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling createUserRepositoryAuth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据目标区域、目标组织删除指定的镜像自动同步任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteImageSyncRepo(deleteImageSyncRepoRequest?: DeleteImageSyncRepoRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/sync_repo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;
            
            let repository;

            if (deleteImageSyncRepoRequest !== null && deleteImageSyncRepoRequest !== undefined) {
                if (deleteImageSyncRepoRequest instanceof DeleteImageSyncRepoRequest) {
                    contentType = deleteImageSyncRepoRequest.contentType;
                    namespace = deleteImageSyncRepoRequest.namespace;
                    repository = deleteImageSyncRepoRequest.repository;
                    body = deleteImageSyncRepoRequest.body
                } else {
                    contentType = deleteImageSyncRepoRequest['Content-Type'];
                    namespace = deleteImageSyncRepoRequest['namespace'];
                    repository = deleteImageSyncRepoRequest['repository'];
                    body = deleteImageSyncRepoRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteImageSyncRepo.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling deleteImageSyncRepo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除组织权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNamespaceAuth(deleteNamespaceAuthRequest?: DeleteNamespaceAuthRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;

            if (deleteNamespaceAuthRequest !== null && deleteNamespaceAuthRequest !== undefined) {
                if (deleteNamespaceAuthRequest instanceof DeleteNamespaceAuthRequest) {
                    contentType = deleteNamespaceAuthRequest.contentType;
                    namespace = deleteNamespaceAuthRequest.namespace;
                    body = deleteNamespaceAuthRequest.body
                } else {
                    contentType = deleteNamespaceAuthRequest['Content-Type'];
                    namespace = deleteNamespaceAuthRequest['namespace'];
                    body = deleteNamespaceAuthRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteNamespaceAuth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除组织
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNamespaces(deleteNamespacesRequest?: DeleteNamespacesRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;

            if (deleteNamespacesRequest !== null && deleteNamespacesRequest !== undefined) {
                if (deleteNamespacesRequest instanceof DeleteNamespacesRequest) {
                    contentType = deleteNamespacesRequest.contentType;
                    namespace = deleteNamespacesRequest.namespace;
                } else {
                    contentType = deleteNamespacesRequest['Content-Type'];
                    namespace = deleteNamespacesRequest['namespace'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteNamespaces.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除组织下的镜像仓库。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRepo(deleteRepoRequest?: DeleteRepoRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;

            if (deleteRepoRequest !== null && deleteRepoRequest !== undefined) {
                if (deleteRepoRequest instanceof DeleteRepoRequest) {
                    contentType = deleteRepoRequest.contentType;
                    namespace = deleteRepoRequest.namespace;
                    repository = deleteRepoRequest.repository;
                } else {
                    contentType = deleteRepoRequest['Content-Type'];
                    namespace = deleteRepoRequest['namespace'];
                    repository = deleteRepoRequest['repository'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteRepo.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling deleteRepo.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除共享帐号
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRepoDomains(deleteRepoDomainsRequest?: DeleteRepoDomainsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repositories/{repository}/access-domains/{access_domain}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let accessDomain;

            if (deleteRepoDomainsRequest !== null && deleteRepoDomainsRequest !== undefined) {
                if (deleteRepoDomainsRequest instanceof DeleteRepoDomainsRequest) {
                    contentType = deleteRepoDomainsRequest.contentType;
                    namespace = deleteRepoDomainsRequest.namespace;
                    repository = deleteRepoDomainsRequest.repository;
                    accessDomain = deleteRepoDomainsRequest.accessDomain;
                } else {
                    contentType = deleteRepoDomainsRequest['Content-Type'];
                    namespace = deleteRepoDomainsRequest['namespace'];
                    repository = deleteRepoDomainsRequest['repository'];
                    accessDomain = deleteRepoDomainsRequest['access_domain'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteRepoDomains.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling deleteRepoDomains.');
            }
            if (accessDomain === null || accessDomain === undefined) {
            throw new RequiredError('accessDomain','Required parameter accessDomain was null or undefined when calling deleteRepoDomains.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'access_domain': accessDomain, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除镜像仓库中指定tag的镜像
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRepoTag(deleteRepoTagRequest?: DeleteRepoTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/tags/{tag}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let tag;

            if (deleteRepoTagRequest !== null && deleteRepoTagRequest !== undefined) {
                if (deleteRepoTagRequest instanceof DeleteRepoTagRequest) {
                    contentType = deleteRepoTagRequest.contentType;
                    namespace = deleteRepoTagRequest.namespace;
                    repository = deleteRepoTagRequest.repository;
                    tag = deleteRepoTagRequest.tag;
                } else {
                    contentType = deleteRepoTagRequest['Content-Type'];
                    namespace = deleteRepoTagRequest['namespace'];
                    repository = deleteRepoTagRequest['repository'];
                    tag = deleteRepoTagRequest['tag'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteRepoTag.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling deleteRepoTag.');
            }
            if (tag === null || tag === undefined) {
            throw new RequiredError('tag','Required parameter tag was null or undefined when calling deleteRepoTag.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'tag': tag, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除镜像老化规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRetention(deleteRetentionRequest?: DeleteRetentionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions/{retention_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let retentionId;

            if (deleteRetentionRequest !== null && deleteRetentionRequest !== undefined) {
                if (deleteRetentionRequest instanceof DeleteRetentionRequest) {
                    contentType = deleteRetentionRequest.contentType;
                    namespace = deleteRetentionRequest.namespace;
                    repository = deleteRetentionRequest.repository;
                    retentionId = deleteRetentionRequest.retentionId;
                } else {
                    contentType = deleteRetentionRequest['Content-Type'];
                    namespace = deleteRetentionRequest['namespace'];
                    repository = deleteRetentionRequest['repository'];
                    retentionId = deleteRetentionRequest['retention_id'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteRetention.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling deleteRetention.');
            }
            if (retentionId === null || retentionId === undefined) {
            throw new RequiredError('retentionId','Required parameter retentionId was null or undefined when calling deleteRetention.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'retention_id': retentionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除触发器
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTrigger(deleteTriggerRequest?: DeleteTriggerRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/triggers/{trigger}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let trigger;

            if (deleteTriggerRequest !== null && deleteTriggerRequest !== undefined) {
                if (deleteTriggerRequest instanceof DeleteTriggerRequest) {
                    contentType = deleteTriggerRequest.contentType;
                    namespace = deleteTriggerRequest.namespace;
                    repository = deleteTriggerRequest.repository;
                    trigger = deleteTriggerRequest.trigger;
                } else {
                    contentType = deleteTriggerRequest['Content-Type'];
                    namespace = deleteTriggerRequest['namespace'];
                    repository = deleteTriggerRequest['repository'];
                    trigger = deleteTriggerRequest['trigger'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteTrigger.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling deleteTrigger.');
            }
            if (trigger === null || trigger === undefined) {
            throw new RequiredError('trigger','Required parameter trigger was null or undefined when calling deleteTrigger.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'trigger': trigger, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除镜像权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteUserRepositoryAuth(deleteUserRepositoryAuthRequest?: DeleteUserRepositoryAuthRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;
            
            let repository;

            if (deleteUserRepositoryAuthRequest !== null && deleteUserRepositoryAuthRequest !== undefined) {
                if (deleteUserRepositoryAuthRequest instanceof DeleteUserRepositoryAuthRequest) {
                    contentType = deleteUserRepositoryAuthRequest.contentType;
                    namespace = deleteUserRepositoryAuthRequest.namespace;
                    repository = deleteUserRepositoryAuthRequest.repository;
                    body = deleteUserRepositoryAuthRequest.body
                } else {
                    contentType = deleteUserRepositoryAuthRequest['Content-Type'];
                    namespace = deleteUserRepositoryAuthRequest['namespace'];
                    repository = deleteUserRepositoryAuthRequest['repository'];
                    body = deleteUserRepositoryAuthRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling deleteUserRepositoryAuth.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling deleteUserRepositoryAuth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取为当前镜像仓库所创建的所有自动同步任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImageAutoSyncReposDetails(listImageAutoSyncReposDetailsRequest?: ListImageAutoSyncReposDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/sync_repo",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;

            if (listImageAutoSyncReposDetailsRequest !== null && listImageAutoSyncReposDetailsRequest !== undefined) {
                if (listImageAutoSyncReposDetailsRequest instanceof ListImageAutoSyncReposDetailsRequest) {
                    contentType = listImageAutoSyncReposDetailsRequest.contentType;
                    namespace = listImageAutoSyncReposDetailsRequest.namespace;
                    repository = listImageAutoSyncReposDetailsRequest.repository;
                } else {
                    contentType = listImageAutoSyncReposDetailsRequest['Content-Type'];
                    namespace = listImageAutoSyncReposDetailsRequest['namespace'];
                    repository = listImageAutoSyncReposDetailsRequest['repository'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listImageAutoSyncReposDetails.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listImageAutoSyncReposDetails.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组织列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNamespaces(listNamespacesRequest?: ListNamespacesRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let namespace;
            
            let filter;

            if (listNamespacesRequest !== null && listNamespacesRequest !== undefined) {
                if (listNamespacesRequest instanceof ListNamespacesRequest) {
                    contentType = listNamespacesRequest.contentType;
                    namespace = listNamespacesRequest.namespace;
                    filter = listNamespacesRequest.filter;
                } else {
                    contentType = listNamespacesRequest['Content-Type'];
                    namespace = listNamespacesRequest['namespace'];
                    filter = listNamespacesRequest['filter'];
                }
            }

        
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取配额信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotas(listQuotasRequest?: ListQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/projects/{project_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listQuotasRequest !== null && listQuotasRequest !== undefined) {
                if (listQuotasRequest instanceof ListQuotasRequest) {
                    contentType = listQuotasRequest.contentType;
                } else {
                    contentType = listQuotasRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取签名镜像关联的被签名镜像版本列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listReferences(listReferencesRequest?: ListReferencesRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/{tag}/references",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let tag;
            
            let limit;
            
            let marker;

            if (listReferencesRequest !== null && listReferencesRequest !== undefined) {
                if (listReferencesRequest instanceof ListReferencesRequest) {
                    contentType = listReferencesRequest.contentType;
                    namespace = listReferencesRequest.namespace;
                    repository = listReferencesRequest.repository;
                    tag = listReferencesRequest.tag;
                    limit = listReferencesRequest.limit;
                    marker = listReferencesRequest.marker;
                } else {
                    contentType = listReferencesRequest['Content-Type'];
                    namespace = listReferencesRequest['namespace'];
                    repository = listReferencesRequest['repository'];
                    tag = listReferencesRequest['tag'];
                    limit = listReferencesRequest['limit'];
                    marker = listReferencesRequest['marker'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listReferences.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listReferences.');
            }
            if (tag === null || tag === undefined) {
            throw new RequiredError('tag','Required parameter tag was null or undefined when calling listReferences.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'repository': repository,'tag': tag, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取共享仓的镜像的附件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRepoAccessories(listRepoAccessoriesRequest?: ListRepoAccessoriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/{tag}/accessories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let tag;
            
            let limit;
            
            let offset;

            if (listRepoAccessoriesRequest !== null && listRepoAccessoriesRequest !== undefined) {
                if (listRepoAccessoriesRequest instanceof ListRepoAccessoriesRequest) {
                    contentType = listRepoAccessoriesRequest.contentType;
                    namespace = listRepoAccessoriesRequest.namespace;
                    repository = listRepoAccessoriesRequest.repository;
                    tag = listRepoAccessoriesRequest.tag;
                    limit = listRepoAccessoriesRequest.limit;
                    offset = listRepoAccessoriesRequest.offset;
                } else {
                    contentType = listRepoAccessoriesRequest['Content-Type'];
                    namespace = listRepoAccessoriesRequest['namespace'];
                    repository = listRepoAccessoriesRequest['repository'];
                    tag = listRepoAccessoriesRequest['tag'];
                    limit = listRepoAccessoriesRequest['limit'];
                    offset = listRepoAccessoriesRequest['offset'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listRepoAccessories.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listRepoAccessories.');
            }
            if (tag === null || tag === undefined) {
            throw new RequiredError('tag','Required parameter tag was null or undefined when calling listRepoAccessories.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'repository': repository,'tag': tag, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像仓库列表详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRepoDetails(listRepoDetailsRequest?: ListRepoDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3/manage/repos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let namespace;
            
            let name;
            
            let category;
            
            let limit;
            
            let marker;
            
            let isPublic;

            if (listRepoDetailsRequest !== null && listRepoDetailsRequest !== undefined) {
                if (listRepoDetailsRequest instanceof ListRepoDetailsRequest) {
                    contentType = listRepoDetailsRequest.contentType;
                    namespace = listRepoDetailsRequest.namespace;
                    name = listRepoDetailsRequest.name;
                    category = listRepoDetailsRequest.category;
                    limit = listRepoDetailsRequest.limit;
                    marker = listRepoDetailsRequest.marker;
                    isPublic = listRepoDetailsRequest.isPublic;
                } else {
                    contentType = listRepoDetailsRequest['Content-Type'];
                    namespace = listRepoDetailsRequest['namespace'];
                    name = listRepoDetailsRequest['name'];
                    category = listRepoDetailsRequest['category'];
                    limit = listRepoDetailsRequest['limit'];
                    marker = listRepoDetailsRequest['marker'];
                    isPublic = listRepoDetailsRequest['is_public'];
                }
            }

        
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (isPublic !== null && isPublic !== undefined) {
                localVarQueryParameter['is_public'] = isPublic;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取共享帐号列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRepoDomains(listRepoDomainsRequest?: ListRepoDomainsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repositories/{repository}/access-domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;

            if (listRepoDomainsRequest !== null && listRepoDomainsRequest !== undefined) {
                if (listRepoDomainsRequest instanceof ListRepoDomainsRequest) {
                    contentType = listRepoDomainsRequest.contentType;
                    namespace = listRepoDomainsRequest.namespace;
                    repository = listRepoDomainsRequest.repository;
                } else {
                    contentType = listRepoDomainsRequest['Content-Type'];
                    namespace = listRepoDomainsRequest['namespace'];
                    repository = listRepoDomainsRequest['repository'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listRepoDomains.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listRepoDomains.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像仓库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listReposDetails(listReposDetailsRequest?: ListReposDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/repos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let namespace;
            
            let name;
            
            let category;
            
            let limit;
            
            let offset;
            
            let orderColumn;
            
            let orderType;
            
            let filter;

            if (listReposDetailsRequest !== null && listReposDetailsRequest !== undefined) {
                if (listReposDetailsRequest instanceof ListReposDetailsRequest) {
                    contentType = listReposDetailsRequest.contentType;
                    namespace = listReposDetailsRequest.namespace;
                    name = listReposDetailsRequest.name;
                    category = listReposDetailsRequest.category;
                    limit = listReposDetailsRequest.limit;
                    offset = listReposDetailsRequest.offset;
                    orderColumn = listReposDetailsRequest.orderColumn;
                    orderType = listReposDetailsRequest.orderType;
                    filter = listReposDetailsRequest.filter;
                } else {
                    contentType = listReposDetailsRequest['Content-Type'];
                    namespace = listReposDetailsRequest['namespace'];
                    name = listReposDetailsRequest['name'];
                    category = listReposDetailsRequest['category'];
                    limit = listReposDetailsRequest['limit'];
                    offset = listReposDetailsRequest['offset'];
                    orderColumn = listReposDetailsRequest['order_column'];
                    orderType = listReposDetailsRequest['order_type'];
                    filter = listReposDetailsRequest['filter'];
                }
            }

        
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderColumn !== null && orderColumn !== undefined) {
                localVarQueryParameter['order_column'] = orderColumn;
            }
            if (orderType !== null && orderType !== undefined) {
                localVarQueryParameter['order_type'] = orderType;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像tag列表详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRepositoryTag(listRepositoryTagRequest?: ListRepositoryTagRequest) {
            const options = {
                method: "GET",
                url: "/v3/manage/namespaces/{namespace}/repos/{repository}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let limit;
            
            let marker;
            
            let tag;
            
            let orderColumn;
            
            let orderType;
            
            let withManifest;

            if (listRepositoryTagRequest !== null && listRepositoryTagRequest !== undefined) {
                if (listRepositoryTagRequest instanceof ListRepositoryTagRequest) {
                    contentType = listRepositoryTagRequest.contentType;
                    namespace = listRepositoryTagRequest.namespace;
                    repository = listRepositoryTagRequest.repository;
                    limit = listRepositoryTagRequest.limit;
                    marker = listRepositoryTagRequest.marker;
                    tag = listRepositoryTagRequest.tag;
                    orderColumn = listRepositoryTagRequest.orderColumn;
                    orderType = listRepositoryTagRequest.orderType;
                    withManifest = listRepositoryTagRequest.withManifest;
                } else {
                    contentType = listRepositoryTagRequest['Content-Type'];
                    namespace = listRepositoryTagRequest['namespace'];
                    repository = listRepositoryTagRequest['repository'];
                    limit = listRepositoryTagRequest['limit'];
                    marker = listRepositoryTagRequest['marker'];
                    tag = listRepositoryTagRequest['tag'];
                    orderColumn = listRepositoryTagRequest['order_column'];
                    orderType = listRepositoryTagRequest['order_type'];
                    withManifest = listRepositoryTagRequest['with_manifest'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listRepositoryTag.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listRepositoryTag.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (orderColumn !== null && orderColumn !== undefined) {
                localVarQueryParameter['order_column'] = orderColumn;
            }
            if (orderType !== null && orderType !== undefined) {
                localVarQueryParameter['order_type'] = orderType;
            }
            if (withManifest !== null && withManifest !== undefined) {
                localVarQueryParameter['with_manifest'] = withManifest;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像tag列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRepositoryTags(listRepositoryTagsRequest?: ListRepositoryTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let limit;
            
            let offset;
            
            let orderColumn;
            
            let orderType;
            
            let tag;
            
            let filter;

            if (listRepositoryTagsRequest !== null && listRepositoryTagsRequest !== undefined) {
                if (listRepositoryTagsRequest instanceof ListRepositoryTagsRequest) {
                    contentType = listRepositoryTagsRequest.contentType;
                    namespace = listRepositoryTagsRequest.namespace;
                    repository = listRepositoryTagsRequest.repository;
                    limit = listRepositoryTagsRequest.limit;
                    offset = listRepositoryTagsRequest.offset;
                    orderColumn = listRepositoryTagsRequest.orderColumn;
                    orderType = listRepositoryTagsRequest.orderType;
                    tag = listRepositoryTagsRequest.tag;
                    filter = listRepositoryTagsRequest.filter;
                } else {
                    contentType = listRepositoryTagsRequest['Content-Type'];
                    namespace = listRepositoryTagsRequest['namespace'];
                    repository = listRepositoryTagsRequest['repository'];
                    limit = listRepositoryTagsRequest['limit'];
                    offset = listRepositoryTagsRequest['offset'];
                    orderColumn = listRepositoryTagsRequest['order_column'];
                    orderType = listRepositoryTagsRequest['order_type'];
                    tag = listRepositoryTagsRequest['tag'];
                    filter = listRepositoryTagsRequest['filter'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listRepositoryTags.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listRepositoryTags.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderColumn !== null && orderColumn !== undefined) {
                localVarQueryParameter['order_column'] = orderColumn;
            }
            if (orderType !== null && orderType !== undefined) {
                localVarQueryParameter['order_type'] = orderType;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像老化记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRetentionHistories(listRetentionHistoriesRequest?: ListRetentionHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions/histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let limit;
            
            let offset;
            
            let filter;

            if (listRetentionHistoriesRequest !== null && listRetentionHistoriesRequest !== undefined) {
                if (listRetentionHistoriesRequest instanceof ListRetentionHistoriesRequest) {
                    contentType = listRetentionHistoriesRequest.contentType;
                    namespace = listRetentionHistoriesRequest.namespace;
                    repository = listRetentionHistoriesRequest.repository;
                    limit = listRetentionHistoriesRequest.limit;
                    offset = listRetentionHistoriesRequest.offset;
                    filter = listRetentionHistoriesRequest.filter;
                } else {
                    contentType = listRetentionHistoriesRequest['Content-Type'];
                    namespace = listRetentionHistoriesRequest['namespace'];
                    repository = listRetentionHistoriesRequest['repository'];
                    limit = listRetentionHistoriesRequest['limit'];
                    offset = listRetentionHistoriesRequest['offset'];
                    filter = listRetentionHistoriesRequest['filter'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listRetentionHistories.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listRetentionHistories.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像老化规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRetentions(listRetentionsRequest?: ListRetentionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;

            if (listRetentionsRequest !== null && listRetentionsRequest !== undefined) {
                if (listRetentionsRequest instanceof ListRetentionsRequest) {
                    contentType = listRetentionsRequest.contentType;
                    namespace = listRetentionsRequest.namespace;
                    repository = listRetentionsRequest.repository;
                } else {
                    contentType = listRetentionsRequest['Content-Type'];
                    namespace = listRetentionsRequest['namespace'];
                    repository = listRetentionsRequest['repository'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listRetentions.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listRetentions.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询共享镜像列表详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSharedRepoDetails(listSharedRepoDetailsRequest?: ListSharedRepoDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3/manage/shared-repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let sharedBy;
            
            let namespace;
            
            let name;
            
            let limit;
            
            let marker;
            
            let status;

            if (listSharedRepoDetailsRequest !== null && listSharedRepoDetailsRequest !== undefined) {
                if (listSharedRepoDetailsRequest instanceof ListSharedRepoDetailsRequest) {
                    contentType = listSharedRepoDetailsRequest.contentType;
                    sharedBy = listSharedRepoDetailsRequest.sharedBy;
                    namespace = listSharedRepoDetailsRequest.namespace;
                    name = listSharedRepoDetailsRequest.name;
                    limit = listSharedRepoDetailsRequest.limit;
                    marker = listSharedRepoDetailsRequest.marker;
                    status = listSharedRepoDetailsRequest.status;
                } else {
                    contentType = listSharedRepoDetailsRequest['Content-Type'];
                    sharedBy = listSharedRepoDetailsRequest['shared_by'];
                    namespace = listSharedRepoDetailsRequest['namespace'];
                    name = listSharedRepoDetailsRequest['name'];
                    limit = listSharedRepoDetailsRequest['limit'];
                    marker = listSharedRepoDetailsRequest['marker'];
                    status = listSharedRepoDetailsRequest['status'];
                }
            }

        
            if (sharedBy === null || sharedBy === undefined) {
                throw new RequiredError('sharedBy','Required parameter sharedBy was null or undefined when calling listSharedRepoDetails.');
            }
            if (sharedBy !== null && sharedBy !== undefined) {
                localVarQueryParameter['shared_by'] = sharedBy;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询共享镜像列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSharedReposDetails(listSharedReposDetailsRequest?: ListSharedReposDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/shared-repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let center;
            
            let namespace;
            
            let name;
            
            let limit;
            
            let offset;
            
            let orderColumn;
            
            let orderType;
            
            let filter;

            if (listSharedReposDetailsRequest !== null && listSharedReposDetailsRequest !== undefined) {
                if (listSharedReposDetailsRequest instanceof ListSharedReposDetailsRequest) {
                    contentType = listSharedReposDetailsRequest.contentType;
                    center = listSharedReposDetailsRequest.center;
                    namespace = listSharedReposDetailsRequest.namespace;
                    name = listSharedReposDetailsRequest.name;
                    limit = listSharedReposDetailsRequest.limit;
                    offset = listSharedReposDetailsRequest.offset;
                    orderColumn = listSharedReposDetailsRequest.orderColumn;
                    orderType = listSharedReposDetailsRequest.orderType;
                    filter = listSharedReposDetailsRequest.filter;
                } else {
                    contentType = listSharedReposDetailsRequest['Content-Type'];
                    center = listSharedReposDetailsRequest['center'];
                    namespace = listSharedReposDetailsRequest['namespace'];
                    name = listSharedReposDetailsRequest['name'];
                    limit = listSharedReposDetailsRequest['limit'];
                    offset = listSharedReposDetailsRequest['offset'];
                    orderColumn = listSharedReposDetailsRequest['order_column'];
                    orderType = listSharedReposDetailsRequest['order_type'];
                    filter = listSharedReposDetailsRequest['filter'];
                }
            }

        
            if (center === null || center === undefined) {
                throw new RequiredError('center','Required parameter center was null or undefined when calling listSharedReposDetails.');
            }
            if (center !== null && center !== undefined) {
                localVarQueryParameter['center'] = center;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (orderColumn !== null && orderColumn !== undefined) {
                localVarQueryParameter['order_column'] = orderColumn;
            }
            if (orderType !== null && orderType !== undefined) {
                localVarQueryParameter['order_type'] = orderType;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取可进行镜像同步的区域列表，用户可以将镜像手动或自动同步到此接口返回的区域。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSyncRegions() {
            const options = {
                method: "GET",
                url: "/v2/manage/regions",
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
         * 获取镜像仓库下的触发器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTriggersDetails(listTriggersDetailsRequest?: ListTriggersDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/triggers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;

            if (listTriggersDetailsRequest !== null && listTriggersDetailsRequest !== undefined) {
                if (listTriggersDetailsRequest instanceof ListTriggersDetailsRequest) {
                    contentType = listTriggersDetailsRequest.contentType;
                    namespace = listTriggersDetailsRequest.namespace;
                    repository = listTriggersDetailsRequest.repository;
                } else {
                    contentType = listTriggersDetailsRequest['Content-Type'];
                    namespace = listTriggersDetailsRequest['namespace'];
                    repository = listTriggersDetailsRequest['repository'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listTriggersDetails.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling listTriggersDetails.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 判断共享租户是否存在
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAccessDomain(showAccessDomainRequest?: ShowAccessDomainRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repositories/{repository}/access-domains/{access_domain}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let accessDomain;

            if (showAccessDomainRequest !== null && showAccessDomainRequest !== undefined) {
                if (showAccessDomainRequest instanceof ShowAccessDomainRequest) {
                    contentType = showAccessDomainRequest.contentType;
                    namespace = showAccessDomainRequest.namespace;
                    repository = showAccessDomainRequest.repository;
                    accessDomain = showAccessDomainRequest.accessDomain;
                } else {
                    contentType = showAccessDomainRequest['Content-Type'];
                    namespace = showAccessDomainRequest['namespace'];
                    repository = showAccessDomainRequest['repository'];
                    accessDomain = showAccessDomainRequest['access_domain'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showAccessDomain.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling showAccessDomain.');
            }
            if (accessDomain === null || accessDomain === undefined) {
            throw new RequiredError('accessDomain','Required parameter accessDomain was null or undefined when calling showAccessDomain.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'access_domain': accessDomain, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取租户总览信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainOverview(showDomainOverviewRequest?: ShowDomainOverviewRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/overview",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (showDomainOverviewRequest !== null && showDomainOverviewRequest !== undefined) {
                if (showDomainOverviewRequest instanceof ShowDomainOverviewRequest) {
                    contentType = showDomainOverviewRequest.contentType;
                } else {
                    contentType = showDomainOverviewRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取租户资源统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainResourceReports(showDomainResourceReportsRequest?: ShowDomainResourceReportsRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/reports/{resource_type}/{frequency}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let resourceType;
            
            let frequency;

            if (showDomainResourceReportsRequest !== null && showDomainResourceReportsRequest !== undefined) {
                if (showDomainResourceReportsRequest instanceof ShowDomainResourceReportsRequest) {
                    contentType = showDomainResourceReportsRequest.contentType;
                    resourceType = showDomainResourceReportsRequest.resourceType;
                    frequency = showDomainResourceReportsRequest.frequency;
                } else {
                    contentType = showDomainResourceReportsRequest['Content-Type'];
                    resourceType = showDomainResourceReportsRequest['resource_type'];
                    frequency = showDomainResourceReportsRequest['frequency'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showDomainResourceReports.');
            }
            if (frequency === null || frequency === undefined) {
            throw new RequiredError('frequency','Required parameter frequency was null or undefined when calling showDomainResourceReports.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'resource_type': resourceType,'frequency': frequency, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取组织详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNamespace(showNamespaceRequest?: ShowNamespaceRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;

            if (showNamespaceRequest !== null && showNamespaceRequest !== undefined) {
                if (showNamespaceRequest instanceof ShowNamespaceRequest) {
                    contentType = showNamespaceRequest.contentType;
                    namespace = showNamespaceRequest.namespace;
                } else {
                    contentType = showNamespaceRequest['Content-Type'];
                    namespace = showNamespaceRequest['namespace'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showNamespace.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组织权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNamespaceAuth(showNamespaceAuthRequest?: ShowNamespaceAuthRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;

            if (showNamespaceAuthRequest !== null && showNamespaceAuthRequest !== undefined) {
                if (showNamespaceAuthRequest instanceof ShowNamespaceAuthRequest) {
                    contentType = showNamespaceAuthRequest.contentType;
                    namespace = showNamespaceAuthRequest.namespace;
                } else {
                    contentType = showNamespaceAuthRequest['Content-Type'];
                    namespace = showNamespaceAuthRequest['namespace'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showNamespaceAuth.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像仓库中指定tag的镜像
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRepoTag(showRepoTagRequest?: ShowRepoTagRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/tags/{tag}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let tag;

            if (showRepoTagRequest !== null && showRepoTagRequest !== undefined) {
                if (showRepoTagRequest instanceof ShowRepoTagRequest) {
                    contentType = showRepoTagRequest.contentType;
                    namespace = showRepoTagRequest.namespace;
                    repository = showRepoTagRequest.repository;
                    tag = showRepoTagRequest.tag;
                } else {
                    contentType = showRepoTagRequest['Content-Type'];
                    namespace = showRepoTagRequest['namespace'];
                    repository = showRepoTagRequest['repository'];
                    tag = showRepoTagRequest['tag'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showRepoTag.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling showRepoTag.');
            }
            if (tag === null || tag === undefined) {
            throw new RequiredError('tag','Required parameter tag was null or undefined when calling showRepoTag.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'tag': tag, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像仓库概要信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRepository(showRepositoryRequest?: ShowRepositoryRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;

            if (showRepositoryRequest !== null && showRepositoryRequest !== undefined) {
                if (showRepositoryRequest instanceof ShowRepositoryRequest) {
                    contentType = showRepositoryRequest.contentType;
                    namespace = showRepositoryRequest.namespace;
                    repository = showRepositoryRequest.repository;
                } else {
                    contentType = showRepositoryRequest['Content-Type'];
                    namespace = showRepositoryRequest['namespace'];
                    repository = showRepositoryRequest['repository'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showRepository.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling showRepository.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像老化规则记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRetention(showRetentionRequest?: ShowRetentionRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions/{retention_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let retentionId;

            if (showRetentionRequest !== null && showRetentionRequest !== undefined) {
                if (showRetentionRequest instanceof ShowRetentionRequest) {
                    contentType = showRetentionRequest.contentType;
                    namespace = showRetentionRequest.namespace;
                    repository = showRetentionRequest.repository;
                    retentionId = showRetentionRequest.retentionId;
                } else {
                    contentType = showRetentionRequest['Content-Type'];
                    namespace = showRetentionRequest['namespace'];
                    repository = showRetentionRequest['repository'];
                    retentionId = showRetentionRequest['retention_id'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showRetention.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling showRetention.');
            }
            if (retentionId === null || retentionId === undefined) {
            throw new RequiredError('retentionId','Required parameter retentionId was null or undefined when calling showRetention.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'retention_id': retentionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务特性开关信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showShareFeatureGates() {
            const options = {
                method: "GET",
                url: "/v2/manage/projects/{project_id}/feature-gates",
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
         * 创建镜像自动同步任务后，可以通过此接口查询该任务的状态，以判断是否同步成功。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSyncJob(showSyncJobRequest?: ShowSyncJobRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/sync_job",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let filter;

            if (showSyncJobRequest !== null && showSyncJobRequest !== undefined) {
                if (showSyncJobRequest instanceof ShowSyncJobRequest) {
                    contentType = showSyncJobRequest.contentType;
                    namespace = showSyncJobRequest.namespace;
                    repository = showSyncJobRequest.repository;
                    filter = showSyncJobRequest.filter;
                } else {
                    contentType = showSyncJobRequest['Content-Type'];
                    namespace = showSyncJobRequest['namespace'];
                    repository = showSyncJobRequest['repository'];
                    filter = showSyncJobRequest['filter'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showSyncJob.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling showSyncJob.');
            }
            if (filter === null || filter === undefined) {
                throw new RequiredError('filter','Required parameter filter was null or undefined when calling showSyncJob.');
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取触发器详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrigger(showTriggerRequest?: ShowTriggerRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/triggers/{trigger}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let trigger;

            if (showTriggerRequest !== null && showTriggerRequest !== undefined) {
                if (showTriggerRequest instanceof ShowTriggerRequest) {
                    contentType = showTriggerRequest.contentType;
                    namespace = showTriggerRequest.namespace;
                    repository = showTriggerRequest.repository;
                    trigger = showTriggerRequest.trigger;
                } else {
                    contentType = showTriggerRequest['Content-Type'];
                    namespace = showTriggerRequest['namespace'];
                    repository = showTriggerRequest['repository'];
                    trigger = showTriggerRequest['trigger'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showTrigger.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling showTrigger.');
            }
            if (trigger === null || trigger === undefined) {
            throw new RequiredError('trigger','Required parameter trigger was null or undefined when calling showTrigger.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository,'trigger': trigger, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询镜像权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserRepositoryAuth(showUserRepositoryAuthRequest?: ShowUserRepositoryAuthRequest) {
            const options = {
                method: "GET",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let namespace;
            
            let repository;

            if (showUserRepositoryAuthRequest !== null && showUserRepositoryAuthRequest !== undefined) {
                if (showUserRepositoryAuthRequest instanceof ShowUserRepositoryAuthRequest) {
                    contentType = showUserRepositoryAuthRequest.contentType;
                    namespace = showUserRepositoryAuthRequest.namespace;
                    repository = showUserRepositoryAuthRequest.repository;
                } else {
                    contentType = showUserRepositoryAuthRequest['Content-Type'];
                    namespace = showUserRepositoryAuthRequest['namespace'];
                    repository = showUserRepositoryAuthRequest['repository'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showUserRepositoryAuth.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling showUserRepositoryAuth.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新组织权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNamespaceAuth(updateNamespaceAuthRequest?: UpdateNamespaceAuthRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/manage/namespaces/{namespace}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;

            if (updateNamespaceAuthRequest !== null && updateNamespaceAuthRequest !== undefined) {
                if (updateNamespaceAuthRequest instanceof UpdateNamespaceAuthRequest) {
                    contentType = updateNamespaceAuthRequest.contentType;
                    namespace = updateNamespaceAuthRequest.namespace;
                    body = updateNamespaceAuthRequest.body
                } else {
                    contentType = updateNamespaceAuthRequest['Content-Type'];
                    namespace = updateNamespaceAuthRequest['namespace'];
                    body = updateNamespaceAuthRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateNamespaceAuth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新租户组织下的镜像概要信息，包括镜像类型、是否公有、描述信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRepo(updateRepoRequest?: UpdateRepoRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;
            
            let repository;

            if (updateRepoRequest !== null && updateRepoRequest !== undefined) {
                if (updateRepoRequest instanceof UpdateRepoRequest) {
                    contentType = updateRepoRequest.contentType;
                    namespace = updateRepoRequest.namespace;
                    repository = updateRepoRequest.repository;
                    body = updateRepoRequest.body
                } else {
                    contentType = updateRepoRequest['Content-Type'];
                    namespace = updateRepoRequest['namespace'];
                    repository = updateRepoRequest['repository'];
                    body = updateRepoRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateRepo.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling updateRepo.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新共享帐号
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRepoDomains(updateRepoDomainsRequest?: UpdateRepoDomainsRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/manage/namespaces/{namespace}/repositories/{repository}/access-domains/{access_domain}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let accessDomain;

            if (updateRepoDomainsRequest !== null && updateRepoDomainsRequest !== undefined) {
                if (updateRepoDomainsRequest instanceof UpdateRepoDomainsRequest) {
                    contentType = updateRepoDomainsRequest.contentType;
                    namespace = updateRepoDomainsRequest.namespace;
                    repository = updateRepoDomainsRequest.repository;
                    accessDomain = updateRepoDomainsRequest.accessDomain;
                    body = updateRepoDomainsRequest.body
                } else {
                    contentType = updateRepoDomainsRequest['Content-Type'];
                    namespace = updateRepoDomainsRequest['namespace'];
                    repository = updateRepoDomainsRequest['repository'];
                    accessDomain = updateRepoDomainsRequest['access_domain'];
                    body = updateRepoDomainsRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateRepoDomains.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling updateRepoDomains.');
            }
            if (accessDomain === null || accessDomain === undefined) {
            throw new RequiredError('accessDomain','Required parameter accessDomain was null or undefined when calling updateRepoDomains.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository,'access_domain': accessDomain, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改镜像老化规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRetention(updateRetentionRequest?: UpdateRetentionRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/retentions/{retention_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let retentionId;

            if (updateRetentionRequest !== null && updateRetentionRequest !== undefined) {
                if (updateRetentionRequest instanceof UpdateRetentionRequest) {
                    contentType = updateRetentionRequest.contentType;
                    namespace = updateRetentionRequest.namespace;
                    repository = updateRetentionRequest.repository;
                    retentionId = updateRetentionRequest.retentionId;
                    body = updateRetentionRequest.body
                } else {
                    contentType = updateRetentionRequest['Content-Type'];
                    namespace = updateRetentionRequest['namespace'];
                    repository = updateRetentionRequest['repository'];
                    retentionId = updateRetentionRequest['retention_id'];
                    body = updateRetentionRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateRetention.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling updateRetention.');
            }
            if (retentionId === null || retentionId === undefined) {
            throw new RequiredError('retentionId','Required parameter retentionId was null or undefined when calling updateRetention.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository,'retention_id': retentionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新触发器配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTrigger(updateTriggerRequest?: UpdateTriggerRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/triggers/{trigger}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;
            
            let repository;
            
            let trigger;

            if (updateTriggerRequest !== null && updateTriggerRequest !== undefined) {
                if (updateTriggerRequest instanceof UpdateTriggerRequest) {
                    contentType = updateTriggerRequest.contentType;
                    namespace = updateTriggerRequest.namespace;
                    repository = updateTriggerRequest.repository;
                    trigger = updateTriggerRequest.trigger;
                    body = updateTriggerRequest.body
                } else {
                    contentType = updateTriggerRequest['Content-Type'];
                    namespace = updateTriggerRequest['namespace'];
                    repository = updateTriggerRequest['repository'];
                    trigger = updateTriggerRequest['trigger'];
                    body = updateTriggerRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateTrigger.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling updateTrigger.');
            }
            if (trigger === null || trigger === undefined) {
            throw new RequiredError('trigger','Required parameter trigger was null or undefined when calling updateTrigger.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository,'trigger': trigger, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新镜像权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUserRepositoryAuth(updateUserRepositoryAuthRequest?: UpdateUserRepositoryAuthRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/manage/namespaces/{namespace}/repos/{repository}/access",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let namespace;
            
            let repository;

            if (updateUserRepositoryAuthRequest !== null && updateUserRepositoryAuthRequest !== undefined) {
                if (updateUserRepositoryAuthRequest instanceof UpdateUserRepositoryAuthRequest) {
                    contentType = updateUserRepositoryAuthRequest.contentType;
                    namespace = updateUserRepositoryAuthRequest.namespace;
                    repository = updateUserRepositoryAuthRequest.repository;
                    body = updateUserRepositoryAuthRequest.body
                } else {
                    contentType = updateUserRepositoryAuthRequest['Content-Type'];
                    namespace = updateUserRepositoryAuthRequest['namespace'];
                    repository = updateUserRepositoryAuthRequest['repository'];
                    body = updateUserRepositoryAuthRequest['body'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling updateUserRepositoryAuth.');
            }
            if (repository === null || repository === undefined) {
            throw new RequiredError('repository','Required parameter repository was null or undefined when calling updateUserRepositoryAuth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'namespace': namespace,'repository': repository, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有API版本信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersions(listApiVersionsRequest?: ListApiVersionsRequest) {
            const options = {
                method: "GET",
                url: "/",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listApiVersionsRequest !== null && listApiVersionsRequest !== undefined) {
                if (listApiVersionsRequest instanceof ListApiVersionsRequest) {
                    contentType = listApiVersionsRequest.contentType;
                } else {
                    contentType = listApiVersionsRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定API版本信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApiVersion(showApiVersionRequest?: ShowApiVersionRequest) {
            const options = {
                method: "GET",
                url: "/{api_version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let apiVersion;

            if (showApiVersionRequest !== null && showApiVersionRequest !== undefined) {
                if (showApiVersionRequest instanceof ShowApiVersionRequest) {
                    contentType = showApiVersionRequest.contentType;
                    apiVersion = showApiVersionRequest.apiVersion;
                } else {
                    contentType = showApiVersionRequest['Content-Type'];
                    apiVersion = showApiVersionRequest['api_version'];
                }
            }

        
            if (apiVersion === null || apiVersion === undefined) {
            throw new RequiredError('apiVersion','Required parameter apiVersion was null or undefined when calling showApiVersion.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'api_version': apiVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 增加域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addDomainName(addDomainNameRequest?: AddDomainNameRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/domainname",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addDomainNameRequest !== null && addDomainNameRequest !== undefined) {
                if (addDomainNameRequest instanceof AddDomainNameRequest) {
                    instanceId = addDomainNameRequest.instanceId;
                    body = addDomainNameRequest.body
                } else {
                    instanceId = addDomainNameRequest['instance_id'];
                    body = addDomainNameRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addDomainName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建不可变Tag策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createImmutableRule(createImmutableRuleRequest?: CreateImmutableRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/immutabletagrules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let namespaceName;

            if (createImmutableRuleRequest !== null && createImmutableRuleRequest !== undefined) {
                if (createImmutableRuleRequest instanceof CreateImmutableRuleRequest) {
                    instanceId = createImmutableRuleRequest.instanceId;
                    namespaceName = createImmutableRuleRequest.namespaceName;
                    body = createImmutableRuleRequest.body
                } else {
                    instanceId = createImmutableRuleRequest['instance_id'];
                    namespaceName = createImmutableRuleRequest['namespace_name'];
                    body = createImmutableRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createImmutableRule.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling createImmutableRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建企业仓库实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstance(createInstanceRequest?: CreateInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createInstanceRequest !== null && createInstanceRequest !== undefined) {
                if (createInstanceRequest instanceof CreateInstanceRequest) {
                    body = createInstanceRequest.body
                } else {
                    body = createInstanceRequest['body'];
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
         * 开启或关闭公网访问
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceEndpointPolicy(createInstanceEndpointPolicyRequest?: CreateInstanceEndpointPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/endpoint-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createInstanceEndpointPolicyRequest !== null && createInstanceEndpointPolicyRequest !== undefined) {
                if (createInstanceEndpointPolicyRequest instanceof CreateInstanceEndpointPolicyRequest) {
                    instanceId = createInstanceEndpointPolicyRequest.instanceId;
                    body = createInstanceEndpointPolicyRequest.body
                } else {
                    instanceId = createInstanceEndpointPolicyRequest['instance_id'];
                    body = createInstanceEndpointPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceEndpointPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增内网访问
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceInternalEndpoint(createInstanceInternalEndpointRequest?: CreateInstanceInternalEndpointRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/internal-endpoints",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createInstanceInternalEndpointRequest !== null && createInstanceInternalEndpointRequest !== undefined) {
                if (createInstanceInternalEndpointRequest instanceof CreateInstanceInternalEndpointRequest) {
                    instanceId = createInstanceInternalEndpointRequest.instanceId;
                    body = createInstanceInternalEndpointRequest.body
                } else {
                    instanceId = createInstanceInternalEndpointRequest['instance_id'];
                    body = createInstanceInternalEndpointRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceInternalEndpoint.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建长期访问凭证
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceLtCredential(createInstanceLtCredentialRequest?: CreateInstanceLtCredentialRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/long-term-credential",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createInstanceLtCredentialRequest !== null && createInstanceLtCredentialRequest !== undefined) {
                if (createInstanceLtCredentialRequest instanceof CreateInstanceLtCredentialRequest) {
                    instanceId = createInstanceLtCredentialRequest.instanceId;
                    body = createInstanceLtCredentialRequest.body
                } else {
                    instanceId = createInstanceLtCredentialRequest['instance_id'];
                    body = createInstanceLtCredentialRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceLtCredential.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建命名空间
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceNamespace(createInstanceNamespaceRequest?: CreateInstanceNamespaceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createInstanceNamespaceRequest !== null && createInstanceNamespaceRequest !== undefined) {
                if (createInstanceNamespaceRequest instanceof CreateInstanceNamespaceRequest) {
                    instanceId = createInstanceNamespaceRequest.instanceId;
                    body = createInstanceNamespaceRequest.body
                } else {
                    instanceId = createInstanceNamespaceRequest['instance_id'];
                    body = createInstanceNamespaceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceNamespace.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建镜像同步的目标仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceRegistry(createInstanceRegistryRequest?: CreateInstanceRegistryRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/registries",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createInstanceRegistryRequest !== null && createInstanceRegistryRequest !== undefined) {
                if (createInstanceRegistryRequest instanceof CreateInstanceRegistryRequest) {
                    instanceId = createInstanceRegistryRequest.instanceId;
                    body = createInstanceRegistryRequest.body
                } else {
                    instanceId = createInstanceRegistryRequest['instance_id'];
                    body = createInstanceRegistryRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceRegistry.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建镜像同步策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceReplicationPolicy(createInstanceReplicationPolicyRequest?: CreateInstanceReplicationPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/replication/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createInstanceReplicationPolicyRequest !== null && createInstanceReplicationPolicyRequest !== undefined) {
                if (createInstanceReplicationPolicyRequest instanceof CreateInstanceReplicationPolicyRequest) {
                    instanceId = createInstanceReplicationPolicyRequest.instanceId;
                    body = createInstanceReplicationPolicyRequest.body
                } else {
                    instanceId = createInstanceReplicationPolicyRequest['instance_id'];
                    body = createInstanceReplicationPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceReplicationPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

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
        createInstanceResourceTags(createInstanceResourceTagsRequest?: CreateInstanceResourceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;

            if (createInstanceResourceTagsRequest !== null && createInstanceResourceTagsRequest !== undefined) {
                if (createInstanceResourceTagsRequest instanceof CreateInstanceResourceTagsRequest) {
                    resourceType = createInstanceResourceTagsRequest.resourceType;
                    resourceId = createInstanceResourceTagsRequest.resourceId;
                    body = createInstanceResourceTagsRequest.body
                } else {
                    resourceType = createInstanceResourceTagsRequest['resource_type'];
                    resourceId = createInstanceResourceTagsRequest['resource_id'];
                    body = createInstanceResourceTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createInstanceResourceTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createInstanceResourceTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建老化策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceRetentionPolicy(createInstanceRetentionPolicyRequest?: CreateInstanceRetentionPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/retention/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let namespaceName;

            if (createInstanceRetentionPolicyRequest !== null && createInstanceRetentionPolicyRequest !== undefined) {
                if (createInstanceRetentionPolicyRequest instanceof CreateInstanceRetentionPolicyRequest) {
                    instanceId = createInstanceRetentionPolicyRequest.instanceId;
                    namespaceName = createInstanceRetentionPolicyRequest.namespaceName;
                    body = createInstanceRetentionPolicyRequest.body
                } else {
                    instanceId = createInstanceRetentionPolicyRequest['instance_id'];
                    namespaceName = createInstanceRetentionPolicyRequest['namespace_name'];
                    body = createInstanceRetentionPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceRetentionPolicy.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling createInstanceRetentionPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建签名策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceSignPolicy(createInstanceSignPolicyRequest?: CreateInstanceSignPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/signature/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let namespaceName;

            if (createInstanceSignPolicyRequest !== null && createInstanceSignPolicyRequest !== undefined) {
                if (createInstanceSignPolicyRequest instanceof CreateInstanceSignPolicyRequest) {
                    instanceId = createInstanceSignPolicyRequest.instanceId;
                    namespaceName = createInstanceSignPolicyRequest.namespaceName;
                    body = createInstanceSignPolicyRequest.body
                } else {
                    instanceId = createInstanceSignPolicyRequest['instance_id'];
                    namespaceName = createInstanceSignPolicyRequest['namespace_name'];
                    body = createInstanceSignPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceSignPolicy.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling createInstanceSignPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取临时访问凭证
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceTempCredential(createInstanceTempCredentialRequest?: CreateInstanceTempCredentialRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/temp-credential",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (createInstanceTempCredentialRequest !== null && createInstanceTempCredentialRequest !== undefined) {
                if (createInstanceTempCredentialRequest instanceof CreateInstanceTempCredentialRequest) {
                    instanceId = createInstanceTempCredentialRequest.instanceId;
                } else {
                    instanceId = createInstanceTempCredentialRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceTempCredential.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建触发器
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceWebhook(createInstanceWebhookRequest?: CreateInstanceWebhookRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/webhook/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let namespaceName;

            if (createInstanceWebhookRequest !== null && createInstanceWebhookRequest !== undefined) {
                if (createInstanceWebhookRequest instanceof CreateInstanceWebhookRequest) {
                    instanceId = createInstanceWebhookRequest.instanceId;
                    namespaceName = createInstanceWebhookRequest.namespaceName;
                    body = createInstanceWebhookRequest.body
                } else {
                    instanceId = createInstanceWebhookRequest['instance_id'];
                    namespaceName = createInstanceWebhookRequest['namespace_name'];
                    body = createInstanceWebhookRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceWebhook.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling createInstanceWebhook.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量添加子资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubResourceTags(createSubResourceTagsRequest?: CreateSubResourceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/{sub_resource_type}/{sub_resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;
            
            let subResourceType;
            
            let subResourceId;

            if (createSubResourceTagsRequest !== null && createSubResourceTagsRequest !== undefined) {
                if (createSubResourceTagsRequest instanceof CreateSubResourceTagsRequest) {
                    resourceType = createSubResourceTagsRequest.resourceType;
                    resourceId = createSubResourceTagsRequest.resourceId;
                    subResourceType = createSubResourceTagsRequest.subResourceType;
                    subResourceId = createSubResourceTagsRequest.subResourceId;
                    body = createSubResourceTagsRequest.body
                } else {
                    resourceType = createSubResourceTagsRequest['resource_type'];
                    resourceId = createSubResourceTagsRequest['resource_id'];
                    subResourceType = createSubResourceTagsRequest['sub_resource_type'];
                    subResourceId = createSubResourceTagsRequest['sub_resource_id'];
                    body = createSubResourceTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createSubResourceTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createSubResourceTags.');
            }
            if (subResourceType === null || subResourceType === undefined) {
            throw new RequiredError('subResourceType','Required parameter subResourceType was null or undefined when calling createSubResourceTags.');
            }
            if (subResourceId === null || subResourceId === undefined) {
            throw new RequiredError('subResourceId','Required parameter subResourceId was null or undefined when calling createSubResourceTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId,'sub_resource_type': subResourceType,'sub_resource_id': subResourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除域名，SWR企业仓库的默认域名无法删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDomainName(deleteDomainNameRequest?: DeleteDomainNameRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/domainname/{domainname_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let domainnameId;

            if (deleteDomainNameRequest !== null && deleteDomainNameRequest !== undefined) {
                if (deleteDomainNameRequest instanceof DeleteDomainNameRequest) {
                    instanceId = deleteDomainNameRequest.instanceId;
                    domainnameId = deleteDomainNameRequest.domainnameId;
                } else {
                    instanceId = deleteDomainNameRequest['instance_id'];
                    domainnameId = deleteDomainNameRequest['domainname_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteDomainName.');
            }
            if (domainnameId === null || domainnameId === undefined) {
            throw new RequiredError('domainnameId','Required parameter domainnameId was null or undefined when calling deleteDomainName.');
            }

            options.pathParams = { 'instance_id': instanceId,'domainname_id': domainnameId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除不可变Tag策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteImmutableRule(deleteImmutableRuleRequest?: DeleteImmutableRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/immutabletagrules/{immutable_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let immutableRuleId;

            if (deleteImmutableRuleRequest !== null && deleteImmutableRuleRequest !== undefined) {
                if (deleteImmutableRuleRequest instanceof DeleteImmutableRuleRequest) {
                    instanceId = deleteImmutableRuleRequest.instanceId;
                    namespaceName = deleteImmutableRuleRequest.namespaceName;
                    immutableRuleId = deleteImmutableRuleRequest.immutableRuleId;
                } else {
                    instanceId = deleteImmutableRuleRequest['instance_id'];
                    namespaceName = deleteImmutableRuleRequest['namespace_name'];
                    immutableRuleId = deleteImmutableRuleRequest['immutable_rule_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteImmutableRule.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling deleteImmutableRule.');
            }
            if (immutableRuleId === null || immutableRuleId === undefined) {
            throw new RequiredError('immutableRuleId','Required parameter immutableRuleId was null or undefined when calling deleteImmutableRule.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'immutable_rule_id': immutableRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstance(deleteInstanceRequest?: DeleteInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteInstanceRequest !== null && deleteInstanceRequest !== undefined) {
                if (deleteInstanceRequest instanceof DeleteInstanceRequest) {
                    instanceId = deleteInstanceRequest.instanceId;
                    body = deleteInstanceRequest.body
                } else {
                    instanceId = deleteInstanceRequest['instance_id'];
                    body = deleteInstanceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除制品版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceArtifact(deleteInstanceArtifactRequest?: DeleteInstanceArtifactRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/repositories/{repository_name}/artifacts/{reference}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let repositoryName;
            
            let reference;

            if (deleteInstanceArtifactRequest !== null && deleteInstanceArtifactRequest !== undefined) {
                if (deleteInstanceArtifactRequest instanceof DeleteInstanceArtifactRequest) {
                    instanceId = deleteInstanceArtifactRequest.instanceId;
                    namespaceName = deleteInstanceArtifactRequest.namespaceName;
                    repositoryName = deleteInstanceArtifactRequest.repositoryName;
                    reference = deleteInstanceArtifactRequest.reference;
                } else {
                    instanceId = deleteInstanceArtifactRequest['instance_id'];
                    namespaceName = deleteInstanceArtifactRequest['namespace_name'];
                    repositoryName = deleteInstanceArtifactRequest['repository_name'];
                    reference = deleteInstanceArtifactRequest['reference'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstanceArtifact.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling deleteInstanceArtifact.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling deleteInstanceArtifact.');
            }
            if (reference === null || reference === undefined) {
            throw new RequiredError('reference','Required parameter reference was null or undefined when calling deleteInstanceArtifact.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'repository_name': repositoryName,'reference': reference, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除内网访问
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceInternalEndpoint(deleteInstanceInternalEndpointRequest?: DeleteInstanceInternalEndpointRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/internal-endpoints/{internal_endpoints_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let internalEndpointsId;

            if (deleteInstanceInternalEndpointRequest !== null && deleteInstanceInternalEndpointRequest !== undefined) {
                if (deleteInstanceInternalEndpointRequest instanceof DeleteInstanceInternalEndpointRequest) {
                    instanceId = deleteInstanceInternalEndpointRequest.instanceId;
                    internalEndpointsId = deleteInstanceInternalEndpointRequest.internalEndpointsId;
                } else {
                    instanceId = deleteInstanceInternalEndpointRequest['instance_id'];
                    internalEndpointsId = deleteInstanceInternalEndpointRequest['internal_endpoints_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstanceInternalEndpoint.');
            }
            if (internalEndpointsId === null || internalEndpointsId === undefined) {
            throw new RequiredError('internalEndpointsId','Required parameter internalEndpointsId was null or undefined when calling deleteInstanceInternalEndpoint.');
            }

            options.pathParams = { 'instance_id': instanceId,'internal_endpoints_id': internalEndpointsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceJob(deleteInstanceJobRequest?: DeleteInstanceJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (deleteInstanceJobRequest !== null && deleteInstanceJobRequest !== undefined) {
                if (deleteInstanceJobRequest instanceof DeleteInstanceJobRequest) {
                    jobId = deleteInstanceJobRequest.jobId;
                } else {
                    jobId = deleteInstanceJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteInstanceJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除长期访问凭证
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceLtCredential(deleteInstanceLtCredentialRequest?: DeleteInstanceLtCredentialRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/long-term-credentials/{credential_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let credentialId;

            if (deleteInstanceLtCredentialRequest !== null && deleteInstanceLtCredentialRequest !== undefined) {
                if (deleteInstanceLtCredentialRequest instanceof DeleteInstanceLtCredentialRequest) {
                    instanceId = deleteInstanceLtCredentialRequest.instanceId;
                    credentialId = deleteInstanceLtCredentialRequest.credentialId;
                } else {
                    instanceId = deleteInstanceLtCredentialRequest['instance_id'];
                    credentialId = deleteInstanceLtCredentialRequest['credential_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstanceLtCredential.');
            }
            if (credentialId === null || credentialId === undefined) {
            throw new RequiredError('credentialId','Required parameter credentialId was null or undefined when calling deleteInstanceLtCredential.');
            }

            options.pathParams = { 'instance_id': instanceId,'credential_id': credentialId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除命名空间
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceNamespace(deleteInstanceNamespaceRequest?: DeleteInstanceNamespaceRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;

            if (deleteInstanceNamespaceRequest !== null && deleteInstanceNamespaceRequest !== undefined) {
                if (deleteInstanceNamespaceRequest instanceof DeleteInstanceNamespaceRequest) {
                    instanceId = deleteInstanceNamespaceRequest.instanceId;
                    namespaceName = deleteInstanceNamespaceRequest.namespaceName;
                } else {
                    instanceId = deleteInstanceNamespaceRequest['instance_id'];
                    namespaceName = deleteInstanceNamespaceRequest['namespace_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstanceNamespace.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling deleteInstanceNamespace.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除同步仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceRegistry(deleteInstanceRegistryRequest?: DeleteInstanceRegistryRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/registries/{registry_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let registryId;

            if (deleteInstanceRegistryRequest !== null && deleteInstanceRegistryRequest !== undefined) {
                if (deleteInstanceRegistryRequest instanceof DeleteInstanceRegistryRequest) {
                    instanceId = deleteInstanceRegistryRequest.instanceId;
                    registryId = deleteInstanceRegistryRequest.registryId;
                } else {
                    instanceId = deleteInstanceRegistryRequest['instance_id'];
                    registryId = deleteInstanceRegistryRequest['registry_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstanceRegistry.');
            }
            if (registryId === null || registryId === undefined) {
            throw new RequiredError('registryId','Required parameter registryId was null or undefined when calling deleteInstanceRegistry.');
            }

            options.pathParams = { 'instance_id': instanceId,'registry_id': registryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除镜像同步策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceReplicationPolicy(deleteInstanceReplicationPolicyRequest?: DeleteInstanceReplicationPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/replication/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let policyId;

            if (deleteInstanceReplicationPolicyRequest !== null && deleteInstanceReplicationPolicyRequest !== undefined) {
                if (deleteInstanceReplicationPolicyRequest instanceof DeleteInstanceReplicationPolicyRequest) {
                    instanceId = deleteInstanceReplicationPolicyRequest.instanceId;
                    policyId = deleteInstanceReplicationPolicyRequest.policyId;
                } else {
                    instanceId = deleteInstanceReplicationPolicyRequest['instance_id'];
                    policyId = deleteInstanceReplicationPolicyRequest['policy_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstanceReplicationPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteInstanceReplicationPolicy.');
            }

            options.pathParams = { 'instance_id': instanceId,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceRepository(deleteInstanceRepositoryRequest?: DeleteInstanceRepositoryRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/repositories/{repository_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let repositoryName;

            if (deleteInstanceRepositoryRequest !== null && deleteInstanceRepositoryRequest !== undefined) {
                if (deleteInstanceRepositoryRequest instanceof DeleteInstanceRepositoryRequest) {
                    instanceId = deleteInstanceRepositoryRequest.instanceId;
                    namespaceName = deleteInstanceRepositoryRequest.namespaceName;
                    repositoryName = deleteInstanceRepositoryRequest.repositoryName;
                } else {
                    instanceId = deleteInstanceRepositoryRequest['instance_id'];
                    namespaceName = deleteInstanceRepositoryRequest['namespace_name'];
                    repositoryName = deleteInstanceRepositoryRequest['repository_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstanceRepository.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling deleteInstanceRepository.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling deleteInstanceRepository.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'repository_name': repositoryName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceResourceTags(deleteInstanceResourceTagsRequest?: DeleteInstanceResourceTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;

            if (deleteInstanceResourceTagsRequest !== null && deleteInstanceResourceTagsRequest !== undefined) {
                if (deleteInstanceResourceTagsRequest instanceof DeleteInstanceResourceTagsRequest) {
                    resourceType = deleteInstanceResourceTagsRequest.resourceType;
                    resourceId = deleteInstanceResourceTagsRequest.resourceId;
                    body = deleteInstanceResourceTagsRequest.body
                } else {
                    resourceType = deleteInstanceResourceTagsRequest['resource_type'];
                    resourceId = deleteInstanceResourceTagsRequest['resource_id'];
                    body = deleteInstanceResourceTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteInstanceResourceTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteInstanceResourceTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除老化策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceRetentionPolicy(deleteInstanceRetentionPolicyRequest?: DeleteInstanceRetentionPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/retention/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let policyId;

            if (deleteInstanceRetentionPolicyRequest !== null && deleteInstanceRetentionPolicyRequest !== undefined) {
                if (deleteInstanceRetentionPolicyRequest instanceof DeleteInstanceRetentionPolicyRequest) {
                    instanceId = deleteInstanceRetentionPolicyRequest.instanceId;
                    namespaceName = deleteInstanceRetentionPolicyRequest.namespaceName;
                    policyId = deleteInstanceRetentionPolicyRequest.policyId;
                } else {
                    instanceId = deleteInstanceRetentionPolicyRequest['instance_id'];
                    namespaceName = deleteInstanceRetentionPolicyRequest['namespace_name'];
                    policyId = deleteInstanceRetentionPolicyRequest['policy_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstanceRetentionPolicy.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling deleteInstanceRetentionPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteInstanceRetentionPolicy.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除签名策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceSignPolicy(deleteInstanceSignPolicyRequest?: DeleteInstanceSignPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/signature/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let policyId;

            if (deleteInstanceSignPolicyRequest !== null && deleteInstanceSignPolicyRequest !== undefined) {
                if (deleteInstanceSignPolicyRequest instanceof DeleteInstanceSignPolicyRequest) {
                    instanceId = deleteInstanceSignPolicyRequest.instanceId;
                    namespaceName = deleteInstanceSignPolicyRequest.namespaceName;
                    policyId = deleteInstanceSignPolicyRequest.policyId;
                } else {
                    instanceId = deleteInstanceSignPolicyRequest['instance_id'];
                    namespaceName = deleteInstanceSignPolicyRequest['namespace_name'];
                    policyId = deleteInstanceSignPolicyRequest['policy_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstanceSignPolicy.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling deleteInstanceSignPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteInstanceSignPolicy.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除制品Tag
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceTag(deleteInstanceTagRequest?: DeleteInstanceTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/instances/{instance_id}/namespaces/{namespace_name}/repositories/{repository_name}/tags/{tag_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let repositoryName;
            
            let tagName;

            if (deleteInstanceTagRequest !== null && deleteInstanceTagRequest !== undefined) {
                if (deleteInstanceTagRequest instanceof DeleteInstanceTagRequest) {
                    instanceId = deleteInstanceTagRequest.instanceId;
                    namespaceName = deleteInstanceTagRequest.namespaceName;
                    repositoryName = deleteInstanceTagRequest.repositoryName;
                    tagName = deleteInstanceTagRequest.tagName;
                } else {
                    instanceId = deleteInstanceTagRequest['instance_id'];
                    namespaceName = deleteInstanceTagRequest['namespace_name'];
                    repositoryName = deleteInstanceTagRequest['repository_name'];
                    tagName = deleteInstanceTagRequest['tag_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstanceTag.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling deleteInstanceTag.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling deleteInstanceTag.');
            }
            if (tagName === null || tagName === undefined) {
            throw new RequiredError('tagName','Required parameter tagName was null or undefined when calling deleteInstanceTag.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'repository_name': repositoryName,'tag_name': tagName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除触发器
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceWebhook(deleteInstanceWebhookRequest?: DeleteInstanceWebhookRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/webhook/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let policyId;

            if (deleteInstanceWebhookRequest !== null && deleteInstanceWebhookRequest !== undefined) {
                if (deleteInstanceWebhookRequest instanceof DeleteInstanceWebhookRequest) {
                    instanceId = deleteInstanceWebhookRequest.instanceId;
                    namespaceName = deleteInstanceWebhookRequest.namespaceName;
                    policyId = deleteInstanceWebhookRequest.policyId;
                } else {
                    instanceId = deleteInstanceWebhookRequest['instance_id'];
                    namespaceName = deleteInstanceWebhookRequest['namespace_name'];
                    policyId = deleteInstanceWebhookRequest['policy_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstanceWebhook.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling deleteInstanceWebhook.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteInstanceWebhook.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除子资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubResourceTags(deleteSubResourceTagsRequest?: DeleteSubResourceTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/{sub_resource_type}/{sub_resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;
            
            let subResourceType;
            
            let subResourceId;

            if (deleteSubResourceTagsRequest !== null && deleteSubResourceTagsRequest !== undefined) {
                if (deleteSubResourceTagsRequest instanceof DeleteSubResourceTagsRequest) {
                    resourceType = deleteSubResourceTagsRequest.resourceType;
                    resourceId = deleteSubResourceTagsRequest.resourceId;
                    subResourceType = deleteSubResourceTagsRequest.subResourceType;
                    subResourceId = deleteSubResourceTagsRequest.subResourceId;
                    body = deleteSubResourceTagsRequest.body
                } else {
                    resourceType = deleteSubResourceTagsRequest['resource_type'];
                    resourceId = deleteSubResourceTagsRequest['resource_id'];
                    subResourceType = deleteSubResourceTagsRequest['sub_resource_type'];
                    subResourceId = deleteSubResourceTagsRequest['sub_resource_id'];
                    body = deleteSubResourceTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteSubResourceTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteSubResourceTags.');
            }
            if (subResourceType === null || subResourceType === undefined) {
            throw new RequiredError('subResourceType','Required parameter subResourceType was null or undefined when calling deleteSubResourceTags.');
            }
            if (subResourceId === null || subResourceId === undefined) {
            throw new RequiredError('subResourceId','Required parameter subResourceId was null or undefined when calling deleteSubResourceTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId,'sub_resource_type': subResourceType,'sub_resource_id': subResourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 手动执行同步策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeInstanceReplicationPolicy(executeInstanceReplicationPolicyRequest?: ExecuteInstanceReplicationPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/replication/executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (executeInstanceReplicationPolicyRequest !== null && executeInstanceReplicationPolicyRequest !== undefined) {
                if (executeInstanceReplicationPolicyRequest instanceof ExecuteInstanceReplicationPolicyRequest) {
                    instanceId = executeInstanceReplicationPolicyRequest.instanceId;
                    body = executeInstanceReplicationPolicyRequest.body
                } else {
                    instanceId = executeInstanceReplicationPolicyRequest['instance_id'];
                    body = executeInstanceReplicationPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeInstanceReplicationPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 执行老化策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeInstanceRetentionPolicy(executeInstanceRetentionPolicyRequest?: ExecuteInstanceRetentionPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/retention/policies/{policy_id}/executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let namespaceName;
            
            let policyId;

            if (executeInstanceRetentionPolicyRequest !== null && executeInstanceRetentionPolicyRequest !== undefined) {
                if (executeInstanceRetentionPolicyRequest instanceof ExecuteInstanceRetentionPolicyRequest) {
                    instanceId = executeInstanceRetentionPolicyRequest.instanceId;
                    namespaceName = executeInstanceRetentionPolicyRequest.namespaceName;
                    policyId = executeInstanceRetentionPolicyRequest.policyId;
                    body = executeInstanceRetentionPolicyRequest.body
                } else {
                    instanceId = executeInstanceRetentionPolicyRequest['instance_id'];
                    namespaceName = executeInstanceRetentionPolicyRequest['namespace_name'];
                    policyId = executeInstanceRetentionPolicyRequest['policy_id'];
                    body = executeInstanceRetentionPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeInstanceRetentionPolicy.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling executeInstanceRetentionPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling executeInstanceRetentionPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 手动执行签名策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeInstanceSignPolicy(executeInstanceSignPolicyRequest?: ExecuteInstanceSignPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/signature/policies/{policy_id}/executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let policyId;

            if (executeInstanceSignPolicyRequest !== null && executeInstanceSignPolicyRequest !== undefined) {
                if (executeInstanceSignPolicyRequest instanceof ExecuteInstanceSignPolicyRequest) {
                    instanceId = executeInstanceSignPolicyRequest.instanceId;
                    namespaceName = executeInstanceSignPolicyRequest.namespaceName;
                    policyId = executeInstanceSignPolicyRequest.policyId;
                } else {
                    instanceId = executeInstanceSignPolicyRequest['instance_id'];
                    namespaceName = executeInstanceSignPolicyRequest['namespace_name'];
                    policyId = executeInstanceSignPolicyRequest['policy_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling executeInstanceSignPolicy.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling executeInstanceSignPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling executeInstanceSignPolicy.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取上传下载的相关审计日志列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAuditLogs(listAuditLogsRequest?: ListAuditLogsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/audit-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let operation;
            
            let instanceId;
            
            let offset;
            
            let limit;

            if (listAuditLogsRequest !== null && listAuditLogsRequest !== undefined) {
                if (listAuditLogsRequest instanceof ListAuditLogsRequest) {
                    operation = listAuditLogsRequest.operation;
                    instanceId = listAuditLogsRequest.instanceId;
                    offset = listAuditLogsRequest.offset;
                    limit = listAuditLogsRequest.limit;
                } else {
                    operation = listAuditLogsRequest['operation'];
                    instanceId = listAuditLogsRequest['instance_id'];
                    offset = listAuditLogsRequest['offset'];
                    limit = listAuditLogsRequest['limit'];
                }
            }

        
            if (operation === null || operation === undefined) {
                throw new RequiredError('operation','Required parameter operation was null or undefined when calling listAuditLogs.');
            }
            if (operation !== null && operation !== undefined) {
                localVarQueryParameter['operation'] = operation;
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAuditLogs.');
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
         * 查询当前实例的所有域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainNames(listDomainNamesRequest?: ListDomainNamesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/domainname",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let uid;
            
            let domainName;

            if (listDomainNamesRequest !== null && listDomainNamesRequest !== undefined) {
                if (listDomainNamesRequest instanceof ListDomainNamesRequest) {
                    instanceId = listDomainNamesRequest.instanceId;
                    uid = listDomainNamesRequest.uid;
                    domainName = listDomainNamesRequest.domainName;
                } else {
                    instanceId = listDomainNamesRequest['instance_id'];
                    uid = listDomainNamesRequest['uid'];
                    domainName = listDomainNamesRequest['domain_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listDomainNames.');
            }
            if (uid !== null && uid !== undefined) {
                localVarQueryParameter['uid'] = uid;
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询特性开关信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFeatureGates(listFeatureGatesRequest?: ListFeatureGatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/feature-gates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listFeatureGatesRequest !== null && listFeatureGatesRequest !== undefined) {
                if (listFeatureGatesRequest instanceof ListFeatureGatesRequest) {
                    instanceId = listFeatureGatesRequest.instanceId;
                } else {
                    instanceId = listFeatureGatesRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listFeatureGates.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全局特性开关信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGlobalFeatureGates() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/feature-gates",
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
         * 获取不可变Tag策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listImmutableRules(listImmutableRulesRequest?: ListImmutableRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/immutabletagrules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let namespaceId;
            
            let offset;
            
            let limit;

            if (listImmutableRulesRequest !== null && listImmutableRulesRequest !== undefined) {
                if (listImmutableRulesRequest instanceof ListImmutableRulesRequest) {
                    instanceId = listImmutableRulesRequest.instanceId;
                    namespaceId = listImmutableRulesRequest.namespaceId;
                    offset = listImmutableRulesRequest.offset;
                    limit = listImmutableRulesRequest.limit;
                } else {
                    instanceId = listImmutableRulesRequest['instance_id'];
                    namespaceId = listImmutableRulesRequest['namespace_id'];
                    offset = listImmutableRulesRequest['offset'];
                    limit = listImmutableRulesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listImmutableRules.');
            }
            if (namespaceId !== null && namespaceId !== undefined) {
                localVarQueryParameter['namespace_id'] = namespaceId;
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
         * 查询实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstance(listInstanceRequest?: ListInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let status;
            
            let enterpriseProjectId;

            if (listInstanceRequest !== null && listInstanceRequest !== undefined) {
                if (listInstanceRequest instanceof ListInstanceRequest) {
                    offset = listInstanceRequest.offset;
                    limit = listInstanceRequest.limit;
                    status = listInstanceRequest.status;
                    enterpriseProjectId = listInstanceRequest.enterpriseProjectId;
                } else {
                    offset = listInstanceRequest['offset'];
                    limit = listInstanceRequest['limit'];
                    status = listInstanceRequest['status'];
                    enterpriseProjectId = listInstanceRequest['enterprise_project_id'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取制品附件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceAccessories(listInstanceAccessoriesRequest?: ListInstanceAccessoriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/repositories/{repository_name}/artifacts/{reference}/accessories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let namespaceName;
            
            let repositoryName;
            
            let reference;
            
            let offset;
            
            let limit;
            
            let type;

            if (listInstanceAccessoriesRequest !== null && listInstanceAccessoriesRequest !== undefined) {
                if (listInstanceAccessoriesRequest instanceof ListInstanceAccessoriesRequest) {
                    instanceId = listInstanceAccessoriesRequest.instanceId;
                    namespaceName = listInstanceAccessoriesRequest.namespaceName;
                    repositoryName = listInstanceAccessoriesRequest.repositoryName;
                    reference = listInstanceAccessoriesRequest.reference;
                    offset = listInstanceAccessoriesRequest.offset;
                    limit = listInstanceAccessoriesRequest.limit;
                    type = listInstanceAccessoriesRequest.type;
                } else {
                    instanceId = listInstanceAccessoriesRequest['instance_id'];
                    namespaceName = listInstanceAccessoriesRequest['namespace_name'];
                    repositoryName = listInstanceAccessoriesRequest['repository_name'];
                    reference = listInstanceAccessoriesRequest['reference'];
                    offset = listInstanceAccessoriesRequest['offset'];
                    limit = listInstanceAccessoriesRequest['limit'];
                    type = listInstanceAccessoriesRequest['type'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceAccessories.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling listInstanceAccessories.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling listInstanceAccessories.');
            }
            if (reference === null || reference === undefined) {
            throw new RequiredError('reference','Required parameter reference was null or undefined when calling listInstanceAccessories.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'repository_name': repositoryName,'reference': reference, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库实例的所有制品版本列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceAllArtifacts(listInstanceAllArtifactsRequest?: ListInstanceAllArtifactsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/artifacts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let marker;
            
            let limit;

            if (listInstanceAllArtifactsRequest !== null && listInstanceAllArtifactsRequest !== undefined) {
                if (listInstanceAllArtifactsRequest instanceof ListInstanceAllArtifactsRequest) {
                    instanceId = listInstanceAllArtifactsRequest.instanceId;
                    marker = listInstanceAllArtifactsRequest.marker;
                    limit = listInstanceAllArtifactsRequest.limit;
                } else {
                    instanceId = listInstanceAllArtifactsRequest['instance_id'];
                    marker = listInstanceAllArtifactsRequest['marker'];
                    limit = listInstanceAllArtifactsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceAllArtifacts.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
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
         * 获取制品扫描的漏洞信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceArtifactVulnerabilities(listInstanceArtifactVulnerabilitiesRequest?: ListInstanceArtifactVulnerabilitiesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/repositories/{repository_name}/artifacts/{reference}/vulnerabilities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let repositoryName;
            
            let reference;

            if (listInstanceArtifactVulnerabilitiesRequest !== null && listInstanceArtifactVulnerabilitiesRequest !== undefined) {
                if (listInstanceArtifactVulnerabilitiesRequest instanceof ListInstanceArtifactVulnerabilitiesRequest) {
                    instanceId = listInstanceArtifactVulnerabilitiesRequest.instanceId;
                    namespaceName = listInstanceArtifactVulnerabilitiesRequest.namespaceName;
                    repositoryName = listInstanceArtifactVulnerabilitiesRequest.repositoryName;
                    reference = listInstanceArtifactVulnerabilitiesRequest.reference;
                } else {
                    instanceId = listInstanceArtifactVulnerabilitiesRequest['instance_id'];
                    namespaceName = listInstanceArtifactVulnerabilitiesRequest['namespace_name'];
                    repositoryName = listInstanceArtifactVulnerabilitiesRequest['repository_name'];
                    reference = listInstanceArtifactVulnerabilitiesRequest['reference'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceArtifactVulnerabilities.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling listInstanceArtifactVulnerabilities.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling listInstanceArtifactVulnerabilities.');
            }
            if (reference === null || reference === undefined) {
            throw new RequiredError('reference','Required parameter reference was null or undefined when calling listInstanceArtifactVulnerabilities.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'repository_name': repositoryName,'reference': reference, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取制品版本列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceArtifacts(listInstanceArtifactsRequest?: ListInstanceArtifactsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/repositories/{repository_name}/artifacts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let namespaceName;
            
            let repositoryName;
            
            let offset;
            
            let limit;
            
            let type;
            
            let tags;

            if (listInstanceArtifactsRequest !== null && listInstanceArtifactsRequest !== undefined) {
                if (listInstanceArtifactsRequest instanceof ListInstanceArtifactsRequest) {
                    instanceId = listInstanceArtifactsRequest.instanceId;
                    namespaceName = listInstanceArtifactsRequest.namespaceName;
                    repositoryName = listInstanceArtifactsRequest.repositoryName;
                    offset = listInstanceArtifactsRequest.offset;
                    limit = listInstanceArtifactsRequest.limit;
                    type = listInstanceArtifactsRequest.type;
                    tags = listInstanceArtifactsRequest.tags;
                } else {
                    instanceId = listInstanceArtifactsRequest['instance_id'];
                    namespaceName = listInstanceArtifactsRequest['namespace_name'];
                    repositoryName = listInstanceArtifactsRequest['repository_name'];
                    offset = listInstanceArtifactsRequest['offset'];
                    limit = listInstanceArtifactsRequest['limit'];
                    type = listInstanceArtifactsRequest['type'];
                    tags = listInstanceArtifactsRequest['tags'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceArtifacts.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling listInstanceArtifacts.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling listInstanceArtifacts.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'repository_name': repositoryName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取内网访问列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceInternalEndpoints(listInstanceInternalEndpointsRequest?: ListInstanceInternalEndpointsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/internal-endpoints",
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

            if (listInstanceInternalEndpointsRequest !== null && listInstanceInternalEndpointsRequest !== undefined) {
                if (listInstanceInternalEndpointsRequest instanceof ListInstanceInternalEndpointsRequest) {
                    instanceId = listInstanceInternalEndpointsRequest.instanceId;
                    offset = listInstanceInternalEndpointsRequest.offset;
                    limit = listInstanceInternalEndpointsRequest.limit;
                } else {
                    instanceId = listInstanceInternalEndpointsRequest['instance_id'];
                    offset = listInstanceInternalEndpointsRequest['offset'];
                    limit = listInstanceInternalEndpointsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceInternalEndpoints.');
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
         * 获取任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceJobs(listInstanceJobsRequest?: ListInstanceJobsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let status;
            
            let offset;
            
            let limit;

            if (listInstanceJobsRequest !== null && listInstanceJobsRequest !== undefined) {
                if (listInstanceJobsRequest instanceof ListInstanceJobsRequest) {
                    status = listInstanceJobsRequest.status;
                    offset = listInstanceJobsRequest.offset;
                    limit = listInstanceJobsRequest.limit;
                } else {
                    status = listInstanceJobsRequest['status'];
                    offset = listInstanceJobsRequest['offset'];
                    limit = listInstanceJobsRequest['limit'];
                }
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询长期访问凭证列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceLtCredentials(listInstanceLtCredentialsRequest?: ListInstanceLtCredentialsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/long-term-credentials",
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
            
            let selfOnly;

            if (listInstanceLtCredentialsRequest !== null && listInstanceLtCredentialsRequest !== undefined) {
                if (listInstanceLtCredentialsRequest instanceof ListInstanceLtCredentialsRequest) {
                    instanceId = listInstanceLtCredentialsRequest.instanceId;
                    offset = listInstanceLtCredentialsRequest.offset;
                    limit = listInstanceLtCredentialsRequest.limit;
                    selfOnly = listInstanceLtCredentialsRequest.selfOnly;
                } else {
                    instanceId = listInstanceLtCredentialsRequest['instance_id'];
                    offset = listInstanceLtCredentialsRequest['offset'];
                    limit = listInstanceLtCredentialsRequest['limit'];
                    selfOnly = listInstanceLtCredentialsRequest['self_only'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceLtCredentials.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (selfOnly !== null && selfOnly !== undefined) {
                localVarQueryParameter['self_only'] = selfOnly;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取命名空间列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceNamespaces(listInstanceNamespacesRequest?: ListInstanceNamespacesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces",
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
            
            let orderColumn;
            
            let orderType;
            
            let name;
            
            let _public;

            if (listInstanceNamespacesRequest !== null && listInstanceNamespacesRequest !== undefined) {
                if (listInstanceNamespacesRequest instanceof ListInstanceNamespacesRequest) {
                    instanceId = listInstanceNamespacesRequest.instanceId;
                    offset = listInstanceNamespacesRequest.offset;
                    limit = listInstanceNamespacesRequest.limit;
                    orderColumn = listInstanceNamespacesRequest.orderColumn;
                    orderType = listInstanceNamespacesRequest.orderType;
                    name = listInstanceNamespacesRequest.name;
                    _public = listInstanceNamespacesRequest._public;
                } else {
                    instanceId = listInstanceNamespacesRequest['instance_id'];
                    offset = listInstanceNamespacesRequest['offset'];
                    limit = listInstanceNamespacesRequest['limit'];
                    orderColumn = listInstanceNamespacesRequest['order_column'];
                    orderType = listInstanceNamespacesRequest['order_type'];
                    name = listInstanceNamespacesRequest['name'];
                    _public = listInstanceNamespacesRequest['public'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceNamespaces.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (orderColumn !== null && orderColumn !== undefined) {
                localVarQueryParameter['order_column'] = orderColumn;
            }
            if (orderType !== null && orderType !== undefined) {
                localVarQueryParameter['order_type'] = orderType;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (_public !== null && _public !== undefined) {
                localVarQueryParameter['public'] = _public;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询项目下所有实例标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceProjectTags() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/tags",
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
         * 获取镜像同步的目标仓库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceRegistries(listInstanceRegistriesRequest?: ListInstanceRegistriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/registries",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let orderColumn;
            
            let orderType;
            
            let name;
            
            let type;
            
            let offset;
            
            let limit;

            if (listInstanceRegistriesRequest !== null && listInstanceRegistriesRequest !== undefined) {
                if (listInstanceRegistriesRequest instanceof ListInstanceRegistriesRequest) {
                    instanceId = listInstanceRegistriesRequest.instanceId;
                    orderColumn = listInstanceRegistriesRequest.orderColumn;
                    orderType = listInstanceRegistriesRequest.orderType;
                    name = listInstanceRegistriesRequest.name;
                    type = listInstanceRegistriesRequest.type;
                    offset = listInstanceRegistriesRequest.offset;
                    limit = listInstanceRegistriesRequest.limit;
                } else {
                    instanceId = listInstanceRegistriesRequest['instance_id'];
                    orderColumn = listInstanceRegistriesRequest['order_column'];
                    orderType = listInstanceRegistriesRequest['order_type'];
                    name = listInstanceRegistriesRequest['name'];
                    type = listInstanceRegistriesRequest['type'];
                    offset = listInstanceRegistriesRequest['offset'];
                    limit = listInstanceRegistriesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceRegistries.');
            }
            if (orderColumn !== null && orderColumn !== undefined) {
                localVarQueryParameter['order_column'] = orderColumn;
            }
            if (orderType !== null && orderType !== undefined) {
                localVarQueryParameter['order_type'] = orderType;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
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
         * 获取镜像同步策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceReplicationPolicies(listInstanceReplicationPoliciesRequest?: ListInstanceReplicationPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/replication/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let orderColumn;
            
            let orderType;
            
            let name;
            
            let registryId;
            
            let offset;
            
            let limit;

            if (listInstanceReplicationPoliciesRequest !== null && listInstanceReplicationPoliciesRequest !== undefined) {
                if (listInstanceReplicationPoliciesRequest instanceof ListInstanceReplicationPoliciesRequest) {
                    instanceId = listInstanceReplicationPoliciesRequest.instanceId;
                    orderColumn = listInstanceReplicationPoliciesRequest.orderColumn;
                    orderType = listInstanceReplicationPoliciesRequest.orderType;
                    name = listInstanceReplicationPoliciesRequest.name;
                    registryId = listInstanceReplicationPoliciesRequest.registryId;
                    offset = listInstanceReplicationPoliciesRequest.offset;
                    limit = listInstanceReplicationPoliciesRequest.limit;
                } else {
                    instanceId = listInstanceReplicationPoliciesRequest['instance_id'];
                    orderColumn = listInstanceReplicationPoliciesRequest['order_column'];
                    orderType = listInstanceReplicationPoliciesRequest['order_type'];
                    name = listInstanceReplicationPoliciesRequest['name'];
                    registryId = listInstanceReplicationPoliciesRequest['registry_id'];
                    offset = listInstanceReplicationPoliciesRequest['offset'];
                    limit = listInstanceReplicationPoliciesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceReplicationPolicies.');
            }
            if (orderColumn !== null && orderColumn !== undefined) {
                localVarQueryParameter['order_column'] = orderColumn;
            }
            if (orderType !== null && orderType !== undefined) {
                localVarQueryParameter['order_type'] = orderType;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (registryId !== null && registryId !== undefined) {
                localVarQueryParameter['registry_id'] = registryId;
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
         * 获取镜像同步策略执行任务的镜像版本列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceReplicationPolicyExecSubTasks(listInstanceReplicationPolicyExecSubTasksRequest?: ListInstanceReplicationPolicyExecSubTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/replication/executions/{execution_id}/tasks/{task_id}/subtasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let executionId;
            
            let taskId;
            
            let offset;
            
            let limit;
            
            let status;

            if (listInstanceReplicationPolicyExecSubTasksRequest !== null && listInstanceReplicationPolicyExecSubTasksRequest !== undefined) {
                if (listInstanceReplicationPolicyExecSubTasksRequest instanceof ListInstanceReplicationPolicyExecSubTasksRequest) {
                    instanceId = listInstanceReplicationPolicyExecSubTasksRequest.instanceId;
                    executionId = listInstanceReplicationPolicyExecSubTasksRequest.executionId;
                    taskId = listInstanceReplicationPolicyExecSubTasksRequest.taskId;
                    offset = listInstanceReplicationPolicyExecSubTasksRequest.offset;
                    limit = listInstanceReplicationPolicyExecSubTasksRequest.limit;
                    status = listInstanceReplicationPolicyExecSubTasksRequest.status;
                } else {
                    instanceId = listInstanceReplicationPolicyExecSubTasksRequest['instance_id'];
                    executionId = listInstanceReplicationPolicyExecSubTasksRequest['execution_id'];
                    taskId = listInstanceReplicationPolicyExecSubTasksRequest['task_id'];
                    offset = listInstanceReplicationPolicyExecSubTasksRequest['offset'];
                    limit = listInstanceReplicationPolicyExecSubTasksRequest['limit'];
                    status = listInstanceReplicationPolicyExecSubTasksRequest['status'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceReplicationPolicyExecSubTasks.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling listInstanceReplicationPolicyExecSubTasks.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listInstanceReplicationPolicyExecSubTasks.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'execution_id': executionId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像同步策略执行任务的镜像列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceReplicationPolicyExecTasks(listInstanceReplicationPolicyExecTasksRequest?: ListInstanceReplicationPolicyExecTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/replication/executions/{execution_id}/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let executionId;
            
            let offset;
            
            let limit;

            if (listInstanceReplicationPolicyExecTasksRequest !== null && listInstanceReplicationPolicyExecTasksRequest !== undefined) {
                if (listInstanceReplicationPolicyExecTasksRequest instanceof ListInstanceReplicationPolicyExecTasksRequest) {
                    instanceId = listInstanceReplicationPolicyExecTasksRequest.instanceId;
                    executionId = listInstanceReplicationPolicyExecTasksRequest.executionId;
                    offset = listInstanceReplicationPolicyExecTasksRequest.offset;
                    limit = listInstanceReplicationPolicyExecTasksRequest.limit;
                } else {
                    instanceId = listInstanceReplicationPolicyExecTasksRequest['instance_id'];
                    executionId = listInstanceReplicationPolicyExecTasksRequest['execution_id'];
                    offset = listInstanceReplicationPolicyExecTasksRequest['offset'];
                    limit = listInstanceReplicationPolicyExecTasksRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceReplicationPolicyExecTasks.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling listInstanceReplicationPolicyExecTasks.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像同步策略执行记录列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceReplicationPolicyExecutions(listInstanceReplicationPolicyExecutionsRequest?: ListInstanceReplicationPolicyExecutionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/replication/executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let policyId;
            
            let offset;
            
            let limit;

            if (listInstanceReplicationPolicyExecutionsRequest !== null && listInstanceReplicationPolicyExecutionsRequest !== undefined) {
                if (listInstanceReplicationPolicyExecutionsRequest instanceof ListInstanceReplicationPolicyExecutionsRequest) {
                    instanceId = listInstanceReplicationPolicyExecutionsRequest.instanceId;
                    policyId = listInstanceReplicationPolicyExecutionsRequest.policyId;
                    offset = listInstanceReplicationPolicyExecutionsRequest.offset;
                    limit = listInstanceReplicationPolicyExecutionsRequest.limit;
                } else {
                    instanceId = listInstanceReplicationPolicyExecutionsRequest['instance_id'];
                    policyId = listInstanceReplicationPolicyExecutionsRequest['policy_id'];
                    offset = listInstanceReplicationPolicyExecutionsRequest['offset'];
                    limit = listInstanceReplicationPolicyExecutionsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceReplicationPolicyExecutions.');
            }
            if (policyId !== null && policyId !== undefined) {
                localVarQueryParameter['policy_id'] = policyId;
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
         * 获取制品仓库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceRepositories(listInstanceRepositoriesRequest?: ListInstanceRepositoriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/repositories",
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
            
            let orderColumn;
            
            let orderType;
            
            let namespaceId;

            if (listInstanceRepositoriesRequest !== null && listInstanceRepositoriesRequest !== undefined) {
                if (listInstanceRepositoriesRequest instanceof ListInstanceRepositoriesRequest) {
                    instanceId = listInstanceRepositoriesRequest.instanceId;
                    offset = listInstanceRepositoriesRequest.offset;
                    limit = listInstanceRepositoriesRequest.limit;
                    orderColumn = listInstanceRepositoriesRequest.orderColumn;
                    orderType = listInstanceRepositoriesRequest.orderType;
                    namespaceId = listInstanceRepositoriesRequest.namespaceId;
                } else {
                    instanceId = listInstanceRepositoriesRequest['instance_id'];
                    offset = listInstanceRepositoriesRequest['offset'];
                    limit = listInstanceRepositoriesRequest['limit'];
                    orderColumn = listInstanceRepositoriesRequest['order_column'];
                    orderType = listInstanceRepositoriesRequest['order_type'];
                    namespaceId = listInstanceRepositoriesRequest['namespace_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceRepositories.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (orderColumn !== null && orderColumn !== undefined) {
                localVarQueryParameter['order_column'] = orderColumn;
            }
            if (orderType !== null && orderType !== undefined) {
                localVarQueryParameter['order_type'] = orderType;
            }
            if (namespaceId !== null && namespaceId !== undefined) {
                localVarQueryParameter['namespace_id'] = namespaceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按照标签检索资源列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceResourceInstances(listInstanceResourceInstancesRequest?: ListInstanceResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{resource_type}/resource-instances/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let resourceType;
            
            let offset;
            
            let limit;

            if (listInstanceResourceInstancesRequest !== null && listInstanceResourceInstancesRequest !== undefined) {
                if (listInstanceResourceInstancesRequest instanceof ListInstanceResourceInstancesRequest) {
                    resourceType = listInstanceResourceInstancesRequest.resourceType;
                    body = listInstanceResourceInstancesRequest.body
                    offset = listInstanceResourceInstancesRequest.offset;
                    limit = listInstanceResourceInstancesRequest.limit;
                } else {
                    resourceType = listInstanceResourceInstancesRequest['resource_type'];
                    body = listInstanceResourceInstancesRequest['body'];
                    offset = listInstanceResourceInstancesRequest['offset'];
                    limit = listInstanceResourceInstancesRequest['limit'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listInstanceResourceInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceResourceTags(listInstanceResourceTagsRequest?: ListInstanceResourceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;

            if (listInstanceResourceTagsRequest !== null && listInstanceResourceTagsRequest !== undefined) {
                if (listInstanceResourceTagsRequest instanceof ListInstanceResourceTagsRequest) {
                    resourceType = listInstanceResourceTagsRequest.resourceType;
                    resourceId = listInstanceResourceTagsRequest.resourceId;
                } else {
                    resourceType = listInstanceResourceTagsRequest['resource_type'];
                    resourceId = listInstanceResourceTagsRequest['resource_id'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listInstanceResourceTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listInstanceResourceTags.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取老化策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceRetentionPolicies(listInstanceRetentionPoliciesRequest?: ListInstanceRetentionPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/retention/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let name;
            
            let namespaceId;
            
            let offset;
            
            let limit;

            if (listInstanceRetentionPoliciesRequest !== null && listInstanceRetentionPoliciesRequest !== undefined) {
                if (listInstanceRetentionPoliciesRequest instanceof ListInstanceRetentionPoliciesRequest) {
                    instanceId = listInstanceRetentionPoliciesRequest.instanceId;
                    name = listInstanceRetentionPoliciesRequest.name;
                    namespaceId = listInstanceRetentionPoliciesRequest.namespaceId;
                    offset = listInstanceRetentionPoliciesRequest.offset;
                    limit = listInstanceRetentionPoliciesRequest.limit;
                } else {
                    instanceId = listInstanceRetentionPoliciesRequest['instance_id'];
                    name = listInstanceRetentionPoliciesRequest['name'];
                    namespaceId = listInstanceRetentionPoliciesRequest['namespace_id'];
                    offset = listInstanceRetentionPoliciesRequest['offset'];
                    limit = listInstanceRetentionPoliciesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceRetentionPolicies.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (namespaceId !== null && namespaceId !== undefined) {
                localVarQueryParameter['namespace_id'] = namespaceId;
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
         * 获取老化策略执行任务的镜像版本列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceRetentionPolicyExecSubTasks(listInstanceRetentionPolicyExecSubTasksRequest?: ListInstanceRetentionPolicyExecSubTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/retention/policies/{policy_id}/executions/{execution_id}/tasks/{task_id}/subtasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let namespaceName;
            
            let policyId;
            
            let executionId;
            
            let taskId;
            
            let offset;
            
            let limit;
            
            let status;

            if (listInstanceRetentionPolicyExecSubTasksRequest !== null && listInstanceRetentionPolicyExecSubTasksRequest !== undefined) {
                if (listInstanceRetentionPolicyExecSubTasksRequest instanceof ListInstanceRetentionPolicyExecSubTasksRequest) {
                    instanceId = listInstanceRetentionPolicyExecSubTasksRequest.instanceId;
                    namespaceName = listInstanceRetentionPolicyExecSubTasksRequest.namespaceName;
                    policyId = listInstanceRetentionPolicyExecSubTasksRequest.policyId;
                    executionId = listInstanceRetentionPolicyExecSubTasksRequest.executionId;
                    taskId = listInstanceRetentionPolicyExecSubTasksRequest.taskId;
                    offset = listInstanceRetentionPolicyExecSubTasksRequest.offset;
                    limit = listInstanceRetentionPolicyExecSubTasksRequest.limit;
                    status = listInstanceRetentionPolicyExecSubTasksRequest.status;
                } else {
                    instanceId = listInstanceRetentionPolicyExecSubTasksRequest['instance_id'];
                    namespaceName = listInstanceRetentionPolicyExecSubTasksRequest['namespace_name'];
                    policyId = listInstanceRetentionPolicyExecSubTasksRequest['policy_id'];
                    executionId = listInstanceRetentionPolicyExecSubTasksRequest['execution_id'];
                    taskId = listInstanceRetentionPolicyExecSubTasksRequest['task_id'];
                    offset = listInstanceRetentionPolicyExecSubTasksRequest['offset'];
                    limit = listInstanceRetentionPolicyExecSubTasksRequest['limit'];
                    status = listInstanceRetentionPolicyExecSubTasksRequest['status'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceRetentionPolicyExecSubTasks.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling listInstanceRetentionPolicyExecSubTasks.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listInstanceRetentionPolicyExecSubTasks.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling listInstanceRetentionPolicyExecSubTasks.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listInstanceRetentionPolicyExecSubTasks.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId,'execution_id': executionId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取老化策略执行任务的镜像列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceRetentionPolicyExecTasks(listInstanceRetentionPolicyExecTasksRequest?: ListInstanceRetentionPolicyExecTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/retention/policies/{policy_id}/executions/{execution_id}/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let namespaceName;
            
            let policyId;
            
            let executionId;
            
            let offset;
            
            let limit;
            
            let status;

            if (listInstanceRetentionPolicyExecTasksRequest !== null && listInstanceRetentionPolicyExecTasksRequest !== undefined) {
                if (listInstanceRetentionPolicyExecTasksRequest instanceof ListInstanceRetentionPolicyExecTasksRequest) {
                    instanceId = listInstanceRetentionPolicyExecTasksRequest.instanceId;
                    namespaceName = listInstanceRetentionPolicyExecTasksRequest.namespaceName;
                    policyId = listInstanceRetentionPolicyExecTasksRequest.policyId;
                    executionId = listInstanceRetentionPolicyExecTasksRequest.executionId;
                    offset = listInstanceRetentionPolicyExecTasksRequest.offset;
                    limit = listInstanceRetentionPolicyExecTasksRequest.limit;
                    status = listInstanceRetentionPolicyExecTasksRequest.status;
                } else {
                    instanceId = listInstanceRetentionPolicyExecTasksRequest['instance_id'];
                    namespaceName = listInstanceRetentionPolicyExecTasksRequest['namespace_name'];
                    policyId = listInstanceRetentionPolicyExecTasksRequest['policy_id'];
                    executionId = listInstanceRetentionPolicyExecTasksRequest['execution_id'];
                    offset = listInstanceRetentionPolicyExecTasksRequest['offset'];
                    limit = listInstanceRetentionPolicyExecTasksRequest['limit'];
                    status = listInstanceRetentionPolicyExecTasksRequest['status'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceRetentionPolicyExecTasks.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling listInstanceRetentionPolicyExecTasks.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listInstanceRetentionPolicyExecTasks.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling listInstanceRetentionPolicyExecTasks.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId,'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取老化策略执行记录列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceRetentionPolicyExecutions(listInstanceRetentionPolicyExecutionsRequest?: ListInstanceRetentionPolicyExecutionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/retention/policies/{policy_id}/executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let namespaceName;
            
            let policyId;
            
            let offset;
            
            let limit;

            if (listInstanceRetentionPolicyExecutionsRequest !== null && listInstanceRetentionPolicyExecutionsRequest !== undefined) {
                if (listInstanceRetentionPolicyExecutionsRequest instanceof ListInstanceRetentionPolicyExecutionsRequest) {
                    instanceId = listInstanceRetentionPolicyExecutionsRequest.instanceId;
                    namespaceName = listInstanceRetentionPolicyExecutionsRequest.namespaceName;
                    policyId = listInstanceRetentionPolicyExecutionsRequest.policyId;
                    offset = listInstanceRetentionPolicyExecutionsRequest.offset;
                    limit = listInstanceRetentionPolicyExecutionsRequest.limit;
                } else {
                    instanceId = listInstanceRetentionPolicyExecutionsRequest['instance_id'];
                    namespaceName = listInstanceRetentionPolicyExecutionsRequest['namespace_name'];
                    policyId = listInstanceRetentionPolicyExecutionsRequest['policy_id'];
                    offset = listInstanceRetentionPolicyExecutionsRequest['offset'];
                    limit = listInstanceRetentionPolicyExecutionsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceRetentionPolicyExecutions.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling listInstanceRetentionPolicyExecutions.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listInstanceRetentionPolicyExecutions.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取签名策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceSignPolicies(listInstanceSignPoliciesRequest?: ListInstanceSignPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/signature/policies",
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

            if (listInstanceSignPoliciesRequest !== null && listInstanceSignPoliciesRequest !== undefined) {
                if (listInstanceSignPoliciesRequest instanceof ListInstanceSignPoliciesRequest) {
                    instanceId = listInstanceSignPoliciesRequest.instanceId;
                    offset = listInstanceSignPoliciesRequest.offset;
                    limit = listInstanceSignPoliciesRequest.limit;
                } else {
                    instanceId = listInstanceSignPoliciesRequest['instance_id'];
                    offset = listInstanceSignPoliciesRequest['offset'];
                    limit = listInstanceSignPoliciesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceSignPolicies.');
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
         * 获取签名执行记录任务的镜像列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceSignPolicyExecTasks(listInstanceSignPolicyExecTasksRequest?: ListInstanceSignPolicyExecTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/signature/policies/{policy_id}/executions/{execution_id}/tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let namespaceName;
            
            let policyId;
            
            let executionId;
            
            let offset;
            
            let limit;

            if (listInstanceSignPolicyExecTasksRequest !== null && listInstanceSignPolicyExecTasksRequest !== undefined) {
                if (listInstanceSignPolicyExecTasksRequest instanceof ListInstanceSignPolicyExecTasksRequest) {
                    instanceId = listInstanceSignPolicyExecTasksRequest.instanceId;
                    namespaceName = listInstanceSignPolicyExecTasksRequest.namespaceName;
                    policyId = listInstanceSignPolicyExecTasksRequest.policyId;
                    executionId = listInstanceSignPolicyExecTasksRequest.executionId;
                    offset = listInstanceSignPolicyExecTasksRequest.offset;
                    limit = listInstanceSignPolicyExecTasksRequest.limit;
                } else {
                    instanceId = listInstanceSignPolicyExecTasksRequest['instance_id'];
                    namespaceName = listInstanceSignPolicyExecTasksRequest['namespace_name'];
                    policyId = listInstanceSignPolicyExecTasksRequest['policy_id'];
                    executionId = listInstanceSignPolicyExecTasksRequest['execution_id'];
                    offset = listInstanceSignPolicyExecTasksRequest['offset'];
                    limit = listInstanceSignPolicyExecTasksRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceSignPolicyExecTasks.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling listInstanceSignPolicyExecTasks.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listInstanceSignPolicyExecTasks.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling listInstanceSignPolicyExecTasks.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId,'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取签名执行记录列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceSignPolicyExecutions(listInstanceSignPolicyExecutionsRequest?: ListInstanceSignPolicyExecutionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/signature/policies/{policy_id}/executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let namespaceName;
            
            let policyId;
            
            let offset;
            
            let limit;

            if (listInstanceSignPolicyExecutionsRequest !== null && listInstanceSignPolicyExecutionsRequest !== undefined) {
                if (listInstanceSignPolicyExecutionsRequest instanceof ListInstanceSignPolicyExecutionsRequest) {
                    instanceId = listInstanceSignPolicyExecutionsRequest.instanceId;
                    namespaceName = listInstanceSignPolicyExecutionsRequest.namespaceName;
                    policyId = listInstanceSignPolicyExecutionsRequest.policyId;
                    offset = listInstanceSignPolicyExecutionsRequest.offset;
                    limit = listInstanceSignPolicyExecutionsRequest.limit;
                } else {
                    instanceId = listInstanceSignPolicyExecutionsRequest['instance_id'];
                    namespaceName = listInstanceSignPolicyExecutionsRequest['namespace_name'];
                    policyId = listInstanceSignPolicyExecutionsRequest['policy_id'];
                    offset = listInstanceSignPolicyExecutionsRequest['offset'];
                    limit = listInstanceSignPolicyExecutionsRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceSignPolicyExecutions.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling listInstanceSignPolicyExecutions.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listInstanceSignPolicyExecutions.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取签名策略执行任务的镜像版本列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceSignatureExecutionSubtasks(listInstanceSignatureExecutionSubtasksRequest?: ListInstanceSignatureExecutionSubtasksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/signature/policies/{policy_id}/executions/{execution_id}/tasks/{task_id}/subtasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let namespaceName;
            
            let policyId;
            
            let executionId;
            
            let taskId;
            
            let offset;
            
            let limit;
            
            let status;

            if (listInstanceSignatureExecutionSubtasksRequest !== null && listInstanceSignatureExecutionSubtasksRequest !== undefined) {
                if (listInstanceSignatureExecutionSubtasksRequest instanceof ListInstanceSignatureExecutionSubtasksRequest) {
                    instanceId = listInstanceSignatureExecutionSubtasksRequest.instanceId;
                    namespaceName = listInstanceSignatureExecutionSubtasksRequest.namespaceName;
                    policyId = listInstanceSignatureExecutionSubtasksRequest.policyId;
                    executionId = listInstanceSignatureExecutionSubtasksRequest.executionId;
                    taskId = listInstanceSignatureExecutionSubtasksRequest.taskId;
                    offset = listInstanceSignatureExecutionSubtasksRequest.offset;
                    limit = listInstanceSignatureExecutionSubtasksRequest.limit;
                    status = listInstanceSignatureExecutionSubtasksRequest.status;
                } else {
                    instanceId = listInstanceSignatureExecutionSubtasksRequest['instance_id'];
                    namespaceName = listInstanceSignatureExecutionSubtasksRequest['namespace_name'];
                    policyId = listInstanceSignatureExecutionSubtasksRequest['policy_id'];
                    executionId = listInstanceSignatureExecutionSubtasksRequest['execution_id'];
                    taskId = listInstanceSignatureExecutionSubtasksRequest['task_id'];
                    offset = listInstanceSignatureExecutionSubtasksRequest['offset'];
                    limit = listInstanceSignatureExecutionSubtasksRequest['limit'];
                    status = listInstanceSignatureExecutionSubtasksRequest['status'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceSignatureExecutionSubtasks.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling listInstanceSignatureExecutionSubtasks.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listInstanceSignatureExecutionSubtasks.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling listInstanceSignatureExecutionSubtasks.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listInstanceSignatureExecutionSubtasks.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId,'execution_id': executionId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实例统计数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceStatistics(listInstanceStatisticsRequest?: ListInstanceStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listInstanceStatisticsRequest !== null && listInstanceStatisticsRequest !== undefined) {
                if (listInstanceStatisticsRequest instanceof ListInstanceStatisticsRequest) {
                    instanceId = listInstanceStatisticsRequest.instanceId;
                } else {
                    instanceId = listInstanceStatisticsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceStatistics.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取制品仓库的Tag列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceTags(listInstanceTagsRequest?: ListInstanceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/instances/{instance_id}/namespaces/{namespace_name}/repositories/{repository_name}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let namespaceName;
            
            let repositoryName;
            
            let offset;
            
            let limit;
            
            let isAccessory;

            if (listInstanceTagsRequest !== null && listInstanceTagsRequest !== undefined) {
                if (listInstanceTagsRequest instanceof ListInstanceTagsRequest) {
                    instanceId = listInstanceTagsRequest.instanceId;
                    namespaceName = listInstanceTagsRequest.namespaceName;
                    repositoryName = listInstanceTagsRequest.repositoryName;
                    offset = listInstanceTagsRequest.offset;
                    limit = listInstanceTagsRequest.limit;
                    isAccessory = listInstanceTagsRequest.isAccessory;
                } else {
                    instanceId = listInstanceTagsRequest['instance_id'];
                    namespaceName = listInstanceTagsRequest['namespace_name'];
                    repositoryName = listInstanceTagsRequest['repository_name'];
                    offset = listInstanceTagsRequest['offset'];
                    limit = listInstanceTagsRequest['limit'];
                    isAccessory = listInstanceTagsRequest['is_accessory'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceTags.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling listInstanceTags.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling listInstanceTags.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (isAccessory !== null && isAccessory !== undefined) {
                localVarQueryParameter['is_accessory'] = isAccessory;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'repository_name': repositoryName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取触发器执行任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceWebhookJobs(listInstanceWebhookJobsRequest?: ListInstanceWebhookJobsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/webhook/policies/{policy_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let namespaceName;
            
            let policyId;
            
            let offset;
            
            let limit;
            
            let status;

            if (listInstanceWebhookJobsRequest !== null && listInstanceWebhookJobsRequest !== undefined) {
                if (listInstanceWebhookJobsRequest instanceof ListInstanceWebhookJobsRequest) {
                    instanceId = listInstanceWebhookJobsRequest.instanceId;
                    namespaceName = listInstanceWebhookJobsRequest.namespaceName;
                    policyId = listInstanceWebhookJobsRequest.policyId;
                    offset = listInstanceWebhookJobsRequest.offset;
                    limit = listInstanceWebhookJobsRequest.limit;
                    status = listInstanceWebhookJobsRequest.status;
                } else {
                    instanceId = listInstanceWebhookJobsRequest['instance_id'];
                    namespaceName = listInstanceWebhookJobsRequest['namespace_name'];
                    policyId = listInstanceWebhookJobsRequest['policy_id'];
                    offset = listInstanceWebhookJobsRequest['offset'];
                    limit = listInstanceWebhookJobsRequest['limit'];
                    status = listInstanceWebhookJobsRequest['status'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceWebhookJobs.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling listInstanceWebhookJobs.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling listInstanceWebhookJobs.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取触发器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceWebhooks(listInstanceWebhooksRequest?: ListInstanceWebhooksRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/webhook/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let orderColumn;
            
            let orderType;
            
            let name;
            
            let namespaceId;
            
            let offset;
            
            let limit;

            if (listInstanceWebhooksRequest !== null && listInstanceWebhooksRequest !== undefined) {
                if (listInstanceWebhooksRequest instanceof ListInstanceWebhooksRequest) {
                    instanceId = listInstanceWebhooksRequest.instanceId;
                    orderColumn = listInstanceWebhooksRequest.orderColumn;
                    orderType = listInstanceWebhooksRequest.orderType;
                    name = listInstanceWebhooksRequest.name;
                    namespaceId = listInstanceWebhooksRequest.namespaceId;
                    offset = listInstanceWebhooksRequest.offset;
                    limit = listInstanceWebhooksRequest.limit;
                } else {
                    instanceId = listInstanceWebhooksRequest['instance_id'];
                    orderColumn = listInstanceWebhooksRequest['order_column'];
                    orderType = listInstanceWebhooksRequest['order_type'];
                    name = listInstanceWebhooksRequest['name'];
                    namespaceId = listInstanceWebhooksRequest['namespace_id'];
                    offset = listInstanceWebhooksRequest['offset'];
                    limit = listInstanceWebhooksRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceWebhooks.');
            }
            if (orderColumn !== null && orderColumn !== undefined) {
                localVarQueryParameter['order_column'] = orderColumn;
            }
            if (orderType !== null && orderType !== undefined) {
                localVarQueryParameter['order_type'] = orderType;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (namespaceId !== null && namespaceId !== undefined) {
                localVarQueryParameter['namespace_id'] = namespaceId;
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
         * 获取命名空间下所有制品仓库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNamespaceRepositories(listNamespaceRepositoriesRequest?: ListNamespaceRepositoriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let namespaceName;
            
            let offset;
            
            let limit;
            
            let orderColumn;
            
            let orderType;

            if (listNamespaceRepositoriesRequest !== null && listNamespaceRepositoriesRequest !== undefined) {
                if (listNamespaceRepositoriesRequest instanceof ListNamespaceRepositoriesRequest) {
                    instanceId = listNamespaceRepositoriesRequest.instanceId;
                    namespaceName = listNamespaceRepositoriesRequest.namespaceName;
                    offset = listNamespaceRepositoriesRequest.offset;
                    limit = listNamespaceRepositoriesRequest.limit;
                    orderColumn = listNamespaceRepositoriesRequest.orderColumn;
                    orderType = listNamespaceRepositoriesRequest.orderType;
                } else {
                    instanceId = listNamespaceRepositoriesRequest['instance_id'];
                    namespaceName = listNamespaceRepositoriesRequest['namespace_name'];
                    offset = listNamespaceRepositoriesRequest['offset'];
                    limit = listNamespaceRepositoriesRequest['limit'];
                    orderColumn = listNamespaceRepositoriesRequest['order_column'];
                    orderType = listNamespaceRepositoriesRequest['order_type'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listNamespaceRepositories.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling listNamespaceRepositories.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (orderColumn !== null && orderColumn !== undefined) {
                localVarQueryParameter['order_column'] = orderColumn;
            }
            if (orderType !== null && orderType !== undefined) {
                localVarQueryParameter['order_type'] = orderType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例下所有命名空间标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNamespaceTags(listNamespaceTagsRequest?: ListNamespaceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces-tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listNamespaceTagsRequest !== null && listNamespaceTagsRequest !== undefined) {
                if (listNamespaceTagsRequest instanceof ListNamespaceTagsRequest) {
                    instanceId = listNamespaceTagsRequest.instanceId;
                } else {
                    instanceId = listNamespaceTagsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listNamespaceTags.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按照标签检索子资源列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubResourceInstances(listSubResourceInstancesRequest?: ListSubResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/{sub_resource_type}/resource-instances/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let resourceType;
            
            let resourceId;
            
            let subResourceType;
            
            let offset;
            
            let limit;

            if (listSubResourceInstancesRequest !== null && listSubResourceInstancesRequest !== undefined) {
                if (listSubResourceInstancesRequest instanceof ListSubResourceInstancesRequest) {
                    resourceType = listSubResourceInstancesRequest.resourceType;
                    resourceId = listSubResourceInstancesRequest.resourceId;
                    subResourceType = listSubResourceInstancesRequest.subResourceType;
                    body = listSubResourceInstancesRequest.body
                    offset = listSubResourceInstancesRequest.offset;
                    limit = listSubResourceInstancesRequest.limit;
                } else {
                    resourceType = listSubResourceInstancesRequest['resource_type'];
                    resourceId = listSubResourceInstancesRequest['resource_id'];
                    subResourceType = listSubResourceInstancesRequest['sub_resource_type'];
                    body = listSubResourceInstancesRequest['body'];
                    offset = listSubResourceInstancesRequest['offset'];
                    limit = listSubResourceInstancesRequest['limit'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listSubResourceInstances.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listSubResourceInstances.');
            }
            if (subResourceType === null || subResourceType === undefined) {
            throw new RequiredError('subResourceType','Required parameter subResourceType was null or undefined when calling listSubResourceInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId,'sub_resource_type': subResourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询子资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubResourceTags(listSubResourceTagsRequest?: ListSubResourceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/{sub_resource_type}/{sub_resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;
            
            let subResourceType;
            
            let subResourceId;

            if (listSubResourceTagsRequest !== null && listSubResourceTagsRequest !== undefined) {
                if (listSubResourceTagsRequest instanceof ListSubResourceTagsRequest) {
                    resourceType = listSubResourceTagsRequest.resourceType;
                    resourceId = listSubResourceTagsRequest.resourceId;
                    subResourceType = listSubResourceTagsRequest.subResourceType;
                    subResourceId = listSubResourceTagsRequest.subResourceId;
                } else {
                    resourceType = listSubResourceTagsRequest['resource_type'];
                    resourceId = listSubResourceTagsRequest['resource_id'];
                    subResourceType = listSubResourceTagsRequest['sub_resource_type'];
                    subResourceId = listSubResourceTagsRequest['sub_resource_id'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listSubResourceTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listSubResourceTags.');
            }
            if (subResourceType === null || subResourceType === undefined) {
            throw new RequiredError('subResourceType','Required parameter subResourceType was null or undefined when calling listSubResourceTags.');
            }
            if (subResourceId === null || subResourceId === undefined) {
            throw new RequiredError('subResourceId','Required parameter subResourceId was null or undefined when calling listSubResourceTags.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId,'sub_resource_type': subResourceType,'sub_resource_id': subResourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实例详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstance(showInstanceRequest?: ShowInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showInstanceRequest !== null && showInstanceRequest !== undefined) {
                if (showInstanceRequest instanceof ShowInstanceRequest) {
                    instanceId = showInstanceRequest.instanceId;
                } else {
                    instanceId = showInstanceRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstance.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取制品版本详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceArtifact(showInstanceArtifactRequest?: ShowInstanceArtifactRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/repositories/{repository_name}/artifacts/{reference}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let namespaceName;
            
            let repositoryName;
            
            let reference;
            
            let withScanOverview;

            if (showInstanceArtifactRequest !== null && showInstanceArtifactRequest !== undefined) {
                if (showInstanceArtifactRequest instanceof ShowInstanceArtifactRequest) {
                    instanceId = showInstanceArtifactRequest.instanceId;
                    namespaceName = showInstanceArtifactRequest.namespaceName;
                    repositoryName = showInstanceArtifactRequest.repositoryName;
                    reference = showInstanceArtifactRequest.reference;
                    withScanOverview = showInstanceArtifactRequest.withScanOverview;
                } else {
                    instanceId = showInstanceArtifactRequest['instance_id'];
                    namespaceName = showInstanceArtifactRequest['namespace_name'];
                    repositoryName = showInstanceArtifactRequest['repository_name'];
                    reference = showInstanceArtifactRequest['reference'];
                    withScanOverview = showInstanceArtifactRequest['with_scan_overview'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceArtifact.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling showInstanceArtifact.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling showInstanceArtifact.');
            }
            if (reference === null || reference === undefined) {
            throw new RequiredError('reference','Required parameter reference was null or undefined when calling showInstanceArtifact.');
            }
            if (withScanOverview !== null && withScanOverview !== undefined) {
                localVarQueryParameter['with_scan_overview'] = withScanOverview;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'repository_name': repositoryName,'reference': reference, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取制品附加信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceArtifactAddition(showInstanceArtifactAdditionRequest?: ShowInstanceArtifactAdditionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/repositories/{repository_name}/artifacts/{reference}/additions/{addition}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let repositoryName;
            
            let reference;
            
            let addition;

            if (showInstanceArtifactAdditionRequest !== null && showInstanceArtifactAdditionRequest !== undefined) {
                if (showInstanceArtifactAdditionRequest instanceof ShowInstanceArtifactAdditionRequest) {
                    instanceId = showInstanceArtifactAdditionRequest.instanceId;
                    namespaceName = showInstanceArtifactAdditionRequest.namespaceName;
                    repositoryName = showInstanceArtifactAdditionRequest.repositoryName;
                    reference = showInstanceArtifactAdditionRequest.reference;
                    addition = showInstanceArtifactAdditionRequest.addition;
                } else {
                    instanceId = showInstanceArtifactAdditionRequest['instance_id'];
                    namespaceName = showInstanceArtifactAdditionRequest['namespace_name'];
                    repositoryName = showInstanceArtifactAdditionRequest['repository_name'];
                    reference = showInstanceArtifactAdditionRequest['reference'];
                    addition = showInstanceArtifactAdditionRequest['addition'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceArtifactAddition.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling showInstanceArtifactAddition.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling showInstanceArtifactAddition.');
            }
            if (reference === null || reference === undefined) {
            throw new RequiredError('reference','Required parameter reference was null or undefined when calling showInstanceArtifactAddition.');
            }
            if (addition === null || addition === undefined) {
            throw new RequiredError('addition','Required parameter addition was null or undefined when calling showInstanceArtifactAddition.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'repository_name': repositoryName,'reference': reference,'addition': addition, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看实例配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceConfiguration(showInstanceConfigurationRequest?: ShowInstanceConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showInstanceConfigurationRequest !== null && showInstanceConfigurationRequest !== undefined) {
                if (showInstanceConfigurationRequest instanceof ShowInstanceConfigurationRequest) {
                    instanceId = showInstanceConfigurationRequest.instanceId;
                } else {
                    instanceId = showInstanceConfigurationRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceConfiguration.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取公网访问信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceEndpointPolicy(showInstanceEndpointPolicyRequest?: ShowInstanceEndpointPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/endpoint-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showInstanceEndpointPolicyRequest !== null && showInstanceEndpointPolicyRequest !== undefined) {
                if (showInstanceEndpointPolicyRequest instanceof ShowInstanceEndpointPolicyRequest) {
                    instanceId = showInstanceEndpointPolicyRequest.instanceId;
                } else {
                    instanceId = showInstanceEndpointPolicyRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceEndpointPolicy.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询内网访问详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceInternalEndpoint(showInstanceInternalEndpointRequest?: ShowInstanceInternalEndpointRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/internal-endpoints/{internal_endpoints_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let internalEndpointsId;

            if (showInstanceInternalEndpointRequest !== null && showInstanceInternalEndpointRequest !== undefined) {
                if (showInstanceInternalEndpointRequest instanceof ShowInstanceInternalEndpointRequest) {
                    instanceId = showInstanceInternalEndpointRequest.instanceId;
                    internalEndpointsId = showInstanceInternalEndpointRequest.internalEndpointsId;
                } else {
                    instanceId = showInstanceInternalEndpointRequest['instance_id'];
                    internalEndpointsId = showInstanceInternalEndpointRequest['internal_endpoints_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceInternalEndpoint.');
            }
            if (internalEndpointsId === null || internalEndpointsId === undefined) {
            throw new RequiredError('internalEndpointsId','Required parameter internalEndpointsId was null or undefined when calling showInstanceInternalEndpoint.');
            }

            options.pathParams = { 'instance_id': instanceId,'internal_endpoints_id': internalEndpointsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取任务详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceJob(showInstanceJobRequest?: ShowInstanceJobRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showInstanceJobRequest !== null && showInstanceJobRequest !== undefined) {
                if (showInstanceJobRequest instanceof ShowInstanceJobRequest) {
                    jobId = showInstanceJobRequest.jobId;
                } else {
                    jobId = showInstanceJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showInstanceJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取命名空间详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceNamespace(showInstanceNamespaceRequest?: ShowInstanceNamespaceRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;

            if (showInstanceNamespaceRequest !== null && showInstanceNamespaceRequest !== undefined) {
                if (showInstanceNamespaceRequest instanceof ShowInstanceNamespaceRequest) {
                    instanceId = showInstanceNamespaceRequest.instanceId;
                    namespaceName = showInstanceNamespaceRequest.namespaceName;
                } else {
                    instanceId = showInstanceNamespaceRequest['instance_id'];
                    namespaceName = showInstanceNamespaceRequest['namespace_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceNamespace.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling showInstanceNamespace.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像同步的目标仓库详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceRegistry(showInstanceRegistryRequest?: ShowInstanceRegistryRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/registries/{registry_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let registryId;

            if (showInstanceRegistryRequest !== null && showInstanceRegistryRequest !== undefined) {
                if (showInstanceRegistryRequest instanceof ShowInstanceRegistryRequest) {
                    instanceId = showInstanceRegistryRequest.instanceId;
                    registryId = showInstanceRegistryRequest.registryId;
                } else {
                    instanceId = showInstanceRegistryRequest['instance_id'];
                    registryId = showInstanceRegistryRequest['registry_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceRegistry.');
            }
            if (registryId === null || registryId === undefined) {
            throw new RequiredError('registryId','Required parameter registryId was null or undefined when calling showInstanceRegistry.');
            }

            options.pathParams = { 'instance_id': instanceId,'registry_id': registryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像同步策略详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceReplicationPolicy(showInstanceReplicationPolicyRequest?: ShowInstanceReplicationPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/replication/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let policyId;

            if (showInstanceReplicationPolicyRequest !== null && showInstanceReplicationPolicyRequest !== undefined) {
                if (showInstanceReplicationPolicyRequest instanceof ShowInstanceReplicationPolicyRequest) {
                    instanceId = showInstanceReplicationPolicyRequest.instanceId;
                    policyId = showInstanceReplicationPolicyRequest.policyId;
                } else {
                    instanceId = showInstanceReplicationPolicyRequest['instance_id'];
                    policyId = showInstanceReplicationPolicyRequest['policy_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceReplicationPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showInstanceReplicationPolicy.');
            }

            options.pathParams = { 'instance_id': instanceId,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取制品仓库详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceRepository(showInstanceRepositoryRequest?: ShowInstanceRepositoryRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/repositories/{repository_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let repositoryName;

            if (showInstanceRepositoryRequest !== null && showInstanceRepositoryRequest !== undefined) {
                if (showInstanceRepositoryRequest instanceof ShowInstanceRepositoryRequest) {
                    instanceId = showInstanceRepositoryRequest.instanceId;
                    namespaceName = showInstanceRepositoryRequest.namespaceName;
                    repositoryName = showInstanceRepositoryRequest.repositoryName;
                } else {
                    instanceId = showInstanceRepositoryRequest['instance_id'];
                    namespaceName = showInstanceRepositoryRequest['namespace_name'];
                    repositoryName = showInstanceRepositoryRequest['repository_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceRepository.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling showInstanceRepository.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling showInstanceRepository.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'repository_name': repositoryName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按照标签检索资源数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceResourceInstancesCount(showInstanceResourceInstancesCountRequest?: ShowInstanceResourceInstancesCountRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{resource_type}/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;

            if (showInstanceResourceInstancesCountRequest !== null && showInstanceResourceInstancesCountRequest !== undefined) {
                if (showInstanceResourceInstancesCountRequest instanceof ShowInstanceResourceInstancesCountRequest) {
                    resourceType = showInstanceResourceInstancesCountRequest.resourceType;
                    body = showInstanceResourceInstancesCountRequest.body
                } else {
                    resourceType = showInstanceResourceInstancesCountRequest['resource_type'];
                    body = showInstanceResourceInstancesCountRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showInstanceResourceInstancesCount.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取老化策略详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceRetentionPolicy(showInstanceRetentionPolicyRequest?: ShowInstanceRetentionPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/retention/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let policyId;

            if (showInstanceRetentionPolicyRequest !== null && showInstanceRetentionPolicyRequest !== undefined) {
                if (showInstanceRetentionPolicyRequest instanceof ShowInstanceRetentionPolicyRequest) {
                    instanceId = showInstanceRetentionPolicyRequest.instanceId;
                    namespaceName = showInstanceRetentionPolicyRequest.namespaceName;
                    policyId = showInstanceRetentionPolicyRequest.policyId;
                } else {
                    instanceId = showInstanceRetentionPolicyRequest['instance_id'];
                    namespaceName = showInstanceRetentionPolicyRequest['namespace_name'];
                    policyId = showInstanceRetentionPolicyRequest['policy_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceRetentionPolicy.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling showInstanceRetentionPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showInstanceRetentionPolicy.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取签名策略详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceSignPolicy(showInstanceSignPolicyRequest?: ShowInstanceSignPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/signature/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let policyId;

            if (showInstanceSignPolicyRequest !== null && showInstanceSignPolicyRequest !== undefined) {
                if (showInstanceSignPolicyRequest instanceof ShowInstanceSignPolicyRequest) {
                    instanceId = showInstanceSignPolicyRequest.instanceId;
                    namespaceName = showInstanceSignPolicyRequest.namespaceName;
                    policyId = showInstanceSignPolicyRequest.policyId;
                } else {
                    instanceId = showInstanceSignPolicyRequest['instance_id'];
                    namespaceName = showInstanceSignPolicyRequest['namespace_name'];
                    policyId = showInstanceSignPolicyRequest['policy_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceSignPolicy.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling showInstanceSignPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showInstanceSignPolicy.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取触发器详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstanceWebhook(showInstanceWebhookRequest?: ShowInstanceWebhookRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/webhook/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let policyId;

            if (showInstanceWebhookRequest !== null && showInstanceWebhookRequest !== undefined) {
                if (showInstanceWebhookRequest instanceof ShowInstanceWebhookRequest) {
                    instanceId = showInstanceWebhookRequest.instanceId;
                    namespaceName = showInstanceWebhookRequest.namespaceName;
                    policyId = showInstanceWebhookRequest.policyId;
                } else {
                    instanceId = showInstanceWebhookRequest['instance_id'];
                    namespaceName = showInstanceWebhookRequest['namespace_name'];
                    policyId = showInstanceWebhookRequest['policy_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showInstanceWebhook.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling showInstanceWebhook.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showInstanceWebhook.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按照标签检索子资源数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSubResourceInstancesCount(showSubResourceInstancesCountRequest?: ShowSubResourceInstancesCountRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/{sub_resource_type}/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;
            
            let subResourceType;

            if (showSubResourceInstancesCountRequest !== null && showSubResourceInstancesCountRequest !== undefined) {
                if (showSubResourceInstancesCountRequest instanceof ShowSubResourceInstancesCountRequest) {
                    resourceType = showSubResourceInstancesCountRequest.resourceType;
                    resourceId = showSubResourceInstancesCountRequest.resourceId;
                    subResourceType = showSubResourceInstancesCountRequest.subResourceType;
                    body = showSubResourceInstancesCountRequest.body
                } else {
                    resourceType = showSubResourceInstancesCountRequest['resource_type'];
                    resourceId = showSubResourceInstancesCountRequest['resource_id'];
                    subResourceType = showSubResourceInstancesCountRequest['sub_resource_type'];
                    body = showSubResourceInstancesCountRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showSubResourceInstancesCount.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showSubResourceInstancesCount.');
            }
            if (subResourceType === null || subResourceType === undefined) {
            throw new RequiredError('subResourceType','Required parameter subResourceType was null or undefined when calling showSubResourceInstancesCount.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId,'sub_resource_type': subResourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 手动启动制品扫描
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startManualScanning(startManualScanningRequest?: StartManualScanningRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/repositories/{repository_name}/artifacts/{reference}/scan",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let namespaceName;
            
            let repositoryName;
            
            let reference;

            if (startManualScanningRequest !== null && startManualScanningRequest !== undefined) {
                if (startManualScanningRequest instanceof StartManualScanningRequest) {
                    instanceId = startManualScanningRequest.instanceId;
                    namespaceName = startManualScanningRequest.namespaceName;
                    repositoryName = startManualScanningRequest.repositoryName;
                    reference = startManualScanningRequest.reference;
                } else {
                    instanceId = startManualScanningRequest['instance_id'];
                    namespaceName = startManualScanningRequest['namespace_name'];
                    repositoryName = startManualScanningRequest['repository_name'];
                    reference = startManualScanningRequest['reference'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling startManualScanning.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling startManualScanning.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling startManualScanning.');
            }
            if (reference === null || reference === undefined) {
            throw new RequiredError('reference','Required parameter reference was null or undefined when calling startManualScanning.');
            }

            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'repository_name': repositoryName,'reference': reference, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止镜像同步任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopInstanceReplicationPolicyExecution(stopInstanceReplicationPolicyExecutionRequest?: StopInstanceReplicationPolicyExecutionRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/replication/executions/{execution_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let executionId;

            if (stopInstanceReplicationPolicyExecutionRequest !== null && stopInstanceReplicationPolicyExecutionRequest !== undefined) {
                if (stopInstanceReplicationPolicyExecutionRequest instanceof StopInstanceReplicationPolicyExecutionRequest) {
                    instanceId = stopInstanceReplicationPolicyExecutionRequest.instanceId;
                    executionId = stopInstanceReplicationPolicyExecutionRequest.executionId;
                } else {
                    instanceId = stopInstanceReplicationPolicyExecutionRequest['instance_id'];
                    executionId = stopInstanceReplicationPolicyExecutionRequest['execution_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling stopInstanceReplicationPolicyExecution.');
            }
            if (executionId === null || executionId === undefined) {
            throw new RequiredError('executionId','Required parameter executionId was null or undefined when calling stopInstanceReplicationPolicyExecution.');
            }

            options.pathParams = { 'instance_id': instanceId,'execution_id': executionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainName(updateDomainNameRequest?: UpdateDomainNameRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/domainname/{domainname_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let domainnameId;

            if (updateDomainNameRequest !== null && updateDomainNameRequest !== undefined) {
                if (updateDomainNameRequest instanceof UpdateDomainNameRequest) {
                    instanceId = updateDomainNameRequest.instanceId;
                    domainnameId = updateDomainNameRequest.domainnameId;
                    body = updateDomainNameRequest.body
                } else {
                    instanceId = updateDomainNameRequest['instance_id'];
                    domainnameId = updateDomainNameRequest['domainname_id'];
                    body = updateDomainNameRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateDomainName.');
            }
            if (domainnameId === null || domainnameId === undefined) {
            throw new RequiredError('domainnameId','Required parameter domainnameId was null or undefined when calling updateDomainName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'domainname_id': domainnameId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改不可变Tag策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateImmutableRule(updateImmutableRuleRequest?: UpdateImmutableRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/immutabletagrules/{immutable_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let namespaceName;
            
            let immutableRuleId;

            if (updateImmutableRuleRequest !== null && updateImmutableRuleRequest !== undefined) {
                if (updateImmutableRuleRequest instanceof UpdateImmutableRuleRequest) {
                    instanceId = updateImmutableRuleRequest.instanceId;
                    namespaceName = updateImmutableRuleRequest.namespaceName;
                    immutableRuleId = updateImmutableRuleRequest.immutableRuleId;
                    body = updateImmutableRuleRequest.body
                } else {
                    instanceId = updateImmutableRuleRequest['instance_id'];
                    namespaceName = updateImmutableRuleRequest['namespace_name'];
                    immutableRuleId = updateImmutableRuleRequest['immutable_rule_id'];
                    body = updateImmutableRuleRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateImmutableRule.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling updateImmutableRule.');
            }
            if (immutableRuleId === null || immutableRuleId === undefined) {
            throw new RequiredError('immutableRuleId','Required parameter immutableRuleId was null or undefined when calling updateImmutableRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'immutable_rule_id': immutableRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改实例配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceConfiguration(updateInstanceConfigurationRequest?: UpdateInstanceConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/configurations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceConfigurationRequest !== null && updateInstanceConfigurationRequest !== undefined) {
                if (updateInstanceConfigurationRequest instanceof UpdateInstanceConfigurationRequest) {
                    instanceId = updateInstanceConfigurationRequest.instanceId;
                    body = updateInstanceConfigurationRequest.body
                } else {
                    instanceId = updateInstanceConfigurationRequest['instance_id'];
                    body = updateInstanceConfigurationRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新公网访问白名单，更新方式为全量更新方式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceEndpointPolicy(updateInstanceEndpointPolicyRequest?: UpdateInstanceEndpointPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/endpoint-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceEndpointPolicyRequest !== null && updateInstanceEndpointPolicyRequest !== undefined) {
                if (updateInstanceEndpointPolicyRequest instanceof UpdateInstanceEndpointPolicyRequest) {
                    instanceId = updateInstanceEndpointPolicyRequest.instanceId;
                    body = updateInstanceEndpointPolicyRequest.body
                } else {
                    instanceId = updateInstanceEndpointPolicyRequest['instance_id'];
                    body = updateInstanceEndpointPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceEndpointPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用/停用长期访问凭证
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceLtCredential(updateInstanceLtCredentialRequest?: UpdateInstanceLtCredentialRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/long-term-credentials/{credential_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let credentialId;

            if (updateInstanceLtCredentialRequest !== null && updateInstanceLtCredentialRequest !== undefined) {
                if (updateInstanceLtCredentialRequest instanceof UpdateInstanceLtCredentialRequest) {
                    instanceId = updateInstanceLtCredentialRequest.instanceId;
                    credentialId = updateInstanceLtCredentialRequest.credentialId;
                    body = updateInstanceLtCredentialRequest.body
                } else {
                    instanceId = updateInstanceLtCredentialRequest['instance_id'];
                    credentialId = updateInstanceLtCredentialRequest['credential_id'];
                    body = updateInstanceLtCredentialRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceLtCredential.');
            }
            if (credentialId === null || credentialId === undefined) {
            throw new RequiredError('credentialId','Required parameter credentialId was null or undefined when calling updateInstanceLtCredential.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'credential_id': credentialId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改命名空间
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceNamespace(updateInstanceNamespaceRequest?: UpdateInstanceNamespaceRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let namespaceName;

            if (updateInstanceNamespaceRequest !== null && updateInstanceNamespaceRequest !== undefined) {
                if (updateInstanceNamespaceRequest instanceof UpdateInstanceNamespaceRequest) {
                    instanceId = updateInstanceNamespaceRequest.instanceId;
                    namespaceName = updateInstanceNamespaceRequest.namespaceName;
                    body = updateInstanceNamespaceRequest.body
                } else {
                    instanceId = updateInstanceNamespaceRequest['instance_id'];
                    namespaceName = updateInstanceNamespaceRequest['namespace_name'];
                    body = updateInstanceNamespaceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceNamespace.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling updateInstanceNamespace.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改镜像同步的目标仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceRegistry(updateInstanceRegistryRequest?: UpdateInstanceRegistryRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/registries/{registry_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let registryId;

            if (updateInstanceRegistryRequest !== null && updateInstanceRegistryRequest !== undefined) {
                if (updateInstanceRegistryRequest instanceof UpdateInstanceRegistryRequest) {
                    instanceId = updateInstanceRegistryRequest.instanceId;
                    registryId = updateInstanceRegistryRequest.registryId;
                    body = updateInstanceRegistryRequest.body
                } else {
                    instanceId = updateInstanceRegistryRequest['instance_id'];
                    registryId = updateInstanceRegistryRequest['registry_id'];
                    body = updateInstanceRegistryRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceRegistry.');
            }
            if (registryId === null || registryId === undefined) {
            throw new RequiredError('registryId','Required parameter registryId was null or undefined when calling updateInstanceRegistry.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'registry_id': registryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改镜像同步策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceReplicationPolicy(updateInstanceReplicationPolicyRequest?: UpdateInstanceReplicationPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/replication/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let policyId;

            if (updateInstanceReplicationPolicyRequest !== null && updateInstanceReplicationPolicyRequest !== undefined) {
                if (updateInstanceReplicationPolicyRequest instanceof UpdateInstanceReplicationPolicyRequest) {
                    instanceId = updateInstanceReplicationPolicyRequest.instanceId;
                    policyId = updateInstanceReplicationPolicyRequest.policyId;
                    body = updateInstanceReplicationPolicyRequest.body
                } else {
                    instanceId = updateInstanceReplicationPolicyRequest['instance_id'];
                    policyId = updateInstanceReplicationPolicyRequest['policy_id'];
                    body = updateInstanceReplicationPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceReplicationPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateInstanceReplicationPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改制品仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceRepository(updateInstanceRepositoryRequest?: UpdateInstanceRepositoryRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/repositories/{repository_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let namespaceName;
            
            let repositoryName;

            if (updateInstanceRepositoryRequest !== null && updateInstanceRepositoryRequest !== undefined) {
                if (updateInstanceRepositoryRequest instanceof UpdateInstanceRepositoryRequest) {
                    instanceId = updateInstanceRepositoryRequest.instanceId;
                    namespaceName = updateInstanceRepositoryRequest.namespaceName;
                    repositoryName = updateInstanceRepositoryRequest.repositoryName;
                    body = updateInstanceRepositoryRequest.body
                } else {
                    instanceId = updateInstanceRepositoryRequest['instance_id'];
                    namespaceName = updateInstanceRepositoryRequest['namespace_name'];
                    repositoryName = updateInstanceRepositoryRequest['repository_name'];
                    body = updateInstanceRepositoryRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceRepository.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling updateInstanceRepository.');
            }
            if (repositoryName === null || repositoryName === undefined) {
            throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling updateInstanceRepository.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'repository_name': repositoryName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改老化策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceRetentionPolicy(updateInstanceRetentionPolicyRequest?: UpdateInstanceRetentionPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/retention/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let namespaceName;
            
            let policyId;

            if (updateInstanceRetentionPolicyRequest !== null && updateInstanceRetentionPolicyRequest !== undefined) {
                if (updateInstanceRetentionPolicyRequest instanceof UpdateInstanceRetentionPolicyRequest) {
                    instanceId = updateInstanceRetentionPolicyRequest.instanceId;
                    namespaceName = updateInstanceRetentionPolicyRequest.namespaceName;
                    policyId = updateInstanceRetentionPolicyRequest.policyId;
                    body = updateInstanceRetentionPolicyRequest.body
                } else {
                    instanceId = updateInstanceRetentionPolicyRequest['instance_id'];
                    namespaceName = updateInstanceRetentionPolicyRequest['namespace_name'];
                    policyId = updateInstanceRetentionPolicyRequest['policy_id'];
                    body = updateInstanceRetentionPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceRetentionPolicy.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling updateInstanceRetentionPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateInstanceRetentionPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改签名策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceSignPolicy(updateInstanceSignPolicyRequest?: UpdateInstanceSignPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/signature/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let namespaceName;
            
            let policyId;

            if (updateInstanceSignPolicyRequest !== null && updateInstanceSignPolicyRequest !== undefined) {
                if (updateInstanceSignPolicyRequest instanceof UpdateInstanceSignPolicyRequest) {
                    instanceId = updateInstanceSignPolicyRequest.instanceId;
                    namespaceName = updateInstanceSignPolicyRequest.namespaceName;
                    policyId = updateInstanceSignPolicyRequest.policyId;
                    body = updateInstanceSignPolicyRequest.body
                } else {
                    instanceId = updateInstanceSignPolicyRequest['instance_id'];
                    namespaceName = updateInstanceSignPolicyRequest['namespace_name'];
                    policyId = updateInstanceSignPolicyRequest['policy_id'];
                    body = updateInstanceSignPolicyRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceSignPolicy.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling updateInstanceSignPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateInstanceSignPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改触发器
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceWebhook(updateInstanceWebhookRequest?: UpdateInstanceWebhookRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/instances/{instance_id}/namespaces/{namespace_name}/webhook/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let namespaceName;
            
            let policyId;

            if (updateInstanceWebhookRequest !== null && updateInstanceWebhookRequest !== undefined) {
                if (updateInstanceWebhookRequest instanceof UpdateInstanceWebhookRequest) {
                    instanceId = updateInstanceWebhookRequest.instanceId;
                    namespaceName = updateInstanceWebhookRequest.namespaceName;
                    policyId = updateInstanceWebhookRequest.policyId;
                    body = updateInstanceWebhookRequest.body
                } else {
                    instanceId = updateInstanceWebhookRequest['instance_id'];
                    namespaceName = updateInstanceWebhookRequest['namespace_name'];
                    policyId = updateInstanceWebhookRequest['policy_id'];
                    body = updateInstanceWebhookRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceWebhook.');
            }
            if (namespaceName === null || namespaceName === undefined) {
            throw new RequiredError('namespaceName','Required parameter namespaceName was null or undefined when calling updateInstanceWebhook.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateInstanceWebhook.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'namespace_name': namespaceName,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): SwrClient {
    return new SwrClient(client);
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