import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { AcceptOrRejectEndpointConnectionsRequest } from './model/AcceptOrRejectEndpointConnectionsRequest';
import { AcceptOrRejectEndpointConnectionsResponse } from './model/AcceptOrRejectEndpointConnectionsResponse';
import { AclApiBindingCreate } from './model/AclApiBindingCreate';
import { AclApiBindingInfo } from './model/AclApiBindingInfo';
import { AclBatchDelete } from './model/AclBatchDelete';
import { AclBatchResultFailureResp } from './model/AclBatchResultFailureResp';
import { AclBindApiInfo } from './model/AclBindApiInfo';
import { AclBindingBatchDelete } from './model/AclBindingBatchDelete';
import { AclBindingBatchFailure } from './model/AclBindingBatchFailure';
import { AddCustomIngressPortRequest } from './model/AddCustomIngressPortRequest';
import { AddCustomIngressPortResponse } from './model/AddCustomIngressPortResponse';
import { AddEipV2Request } from './model/AddEipV2Request';
import { AddEipV2Response } from './model/AddEipV2Response';
import { AddEndpointPermissionsRequest } from './model/AddEndpointPermissionsRequest';
import { AddEndpointPermissionsResponse } from './model/AddEndpointPermissionsResponse';
import { AddEngressEipV2Request } from './model/AddEngressEipV2Request';
import { AddEngressEipV2Response } from './model/AddEngressEipV2Response';
import { AddIngressEipV2Request } from './model/AddIngressEipV2Request';
import { AddIngressEipV2Response } from './model/AddIngressEipV2Response';
import { AddingBackendInstancesV2Request } from './model/AddingBackendInstancesV2Request';
import { AddingBackendInstancesV2Response } from './model/AddingBackendInstancesV2Response';
import { ApiAclCreate } from './model/ApiAclCreate';
import { ApiAclInfoWithBindNum } from './model/ApiAclInfoWithBindNum';
import { ApiActionInfo } from './model/ApiActionInfo';
import { ApiAuthBase } from './model/ApiAuthBase';
import { ApiAuthCreate } from './model/ApiAuthCreate';
import { ApiAuthInfo } from './model/ApiAuthInfo';
import { ApiAuthRelations } from './model/ApiAuthRelations';
import { ApiBackendVpcReq } from './model/ApiBackendVpcReq';
import { ApiBaseInfo } from './model/ApiBaseInfo';
import { ApiBatchPublish } from './model/ApiBatchPublish';
import { ApiBindAclInfo } from './model/ApiBindAclInfo';
import { ApiCheckInfo } from './model/ApiCheckInfo';
import { ApiCheckInfoV2 } from './model/ApiCheckInfoV2';
import { ApiCommon } from './model/ApiCommon';
import { ApiConditionBase } from './model/ApiConditionBase';
import { ApiCreate } from './model/ApiCreate';
import { ApiCreateBase } from './model/ApiCreateBase';
import { ApiDebugInfo } from './model/ApiDebugInfo';
import { ApiForSign } from './model/ApiForSign';
import { ApiForThrottle } from './model/ApiForThrottle';
import { ApiFunc } from './model/ApiFunc';
import { ApiFuncCreate } from './model/ApiFuncCreate';
import { ApiGroupBase } from './model/ApiGroupBase';
import { ApiGroupCheck } from './model/ApiGroupCheck';
import { ApiGroupCommonInfo } from './model/ApiGroupCommonInfo';
import { ApiGroupCreate } from './model/ApiGroupCreate';
import { ApiGroupInfo } from './model/ApiGroupInfo';
import { ApiInfo } from './model/ApiInfo';
import { ApiInfoPerPage } from './model/ApiInfoPerPage';
import { ApiMock } from './model/ApiMock';
import { ApiMockCreate } from './model/ApiMockCreate';
import { ApiOperPluginInfo } from './model/ApiOperPluginInfo';
import { ApiOutline } from './model/ApiOutline';
import { ApiPolicyFunctionBase } from './model/ApiPolicyFunctionBase';
import { ApiPolicyFunctionCreate } from './model/ApiPolicyFunctionCreate';
import { ApiPolicyFunctionResp } from './model/ApiPolicyFunctionResp';
import { ApiPolicyHttpBase } from './model/ApiPolicyHttpBase';
import { ApiPolicyHttpCreate } from './model/ApiPolicyHttpCreate';
import { ApiPolicyHttpResp } from './model/ApiPolicyHttpResp';
import { ApiPolicyMockBase } from './model/ApiPolicyMockBase';
import { ApiPolicyMockCreate } from './model/ApiPolicyMockCreate';
import { ApiPolicyMockResp } from './model/ApiPolicyMockResp';
import { ApiPolicyReqBase } from './model/ApiPolicyReqBase';
import { ApiPolicyRespBase } from './model/ApiPolicyRespBase';
import { ApiRespBaseInfo } from './model/ApiRespBaseInfo';
import { ApiVersion } from './model/ApiVersion';
import { ApiVersionResp } from './model/ApiVersionResp';
import { AppAclCreate } from './model/AppAclCreate';
import { AppBaseInfo } from './model/AppBaseInfo';
import { AppCodeBaseInfo } from './model/AppCodeBaseInfo';
import { AppCodeCreate } from './model/AppCodeCreate';
import { AppCreate } from './model/AppCreate';
import { AppInfo } from './model/AppInfo';
import { AppInfoWithBindNum } from './model/AppInfoWithBindNum';
import { AppQuotaAppBinding } from './model/AppQuotaAppBinding';
import { AppQuotaAppInfo } from './model/AppQuotaAppInfo';
import { AppQuotaCreate } from './model/AppQuotaCreate';
import { AppQuotaInfo } from './model/AppQuotaInfo';
import { AppResetCreate } from './model/AppResetCreate';
import { AssociateAppsForAppQuotaRequest } from './model/AssociateAppsForAppQuotaRequest';
import { AssociateAppsForAppQuotaResponse } from './model/AssociateAppsForAppQuotaResponse';
import { AssociateCertificateV2Request } from './model/AssociateCertificateV2Request';
import { AssociateCertificateV2Response } from './model/AssociateCertificateV2Response';
import { AssociateDomainV2Request } from './model/AssociateDomainV2Request';
import { AssociateDomainV2Response } from './model/AssociateDomainV2Response';
import { AssociateRequestThrottlingPolicyV2Request } from './model/AssociateRequestThrottlingPolicyV2Request';
import { AssociateRequestThrottlingPolicyV2Response } from './model/AssociateRequestThrottlingPolicyV2Response';
import { AssociateSignatureKeyV2Request } from './model/AssociateSignatureKeyV2Request';
import { AssociateSignatureKeyV2Response } from './model/AssociateSignatureKeyV2Response';
import { AttachApiToPluginRequest } from './model/AttachApiToPluginRequest';
import { AttachApiToPluginResponse } from './model/AttachApiToPluginResponse';
import { AttachOrDetachCertsReqBody } from './model/AttachOrDetachCertsReqBody';
import { AttachOrDetachDomainInfo } from './model/AttachOrDetachDomainInfo';
import { AttachOrDetachDomainsReqBody } from './model/AttachOrDetachDomainsReqBody';
import { AttachPluginToApiRequest } from './model/AttachPluginToApiRequest';
import { AttachPluginToApiResponse } from './model/AttachPluginToApiResponse';
import { AttachedPluginInfo } from './model/AttachedPluginInfo';
import { AuthOpt } from './model/AuthOpt';
import { AuthResult } from './model/AuthResult';
import { AuthorizerBase } from './model/AuthorizerBase';
import { AuthorizerCreate } from './model/AuthorizerCreate';
import { AuthorizerResp } from './model/AuthorizerResp';
import { AvailableZone } from './model/AvailableZone';
import { BackendApi } from './model/BackendApi';
import { BackendApiBase } from './model/BackendApiBase';
import { BackendApiBaseInfo } from './model/BackendApiBaseInfo';
import { BackendApiCreate } from './model/BackendApiCreate';
import { BackendLatencyStats } from './model/BackendLatencyStats';
import { BackendParam } from './model/BackendParam';
import { BackendParamBase } from './model/BackendParamBase';
import { BasePage } from './model/BasePage';
import { BaseSignature } from './model/BaseSignature';
import { BatchAssociateCertsV2Request } from './model/BatchAssociateCertsV2Request';
import { BatchAssociateCertsV2Response } from './model/BatchAssociateCertsV2Response';
import { BatchAssociateDomainsV2Request } from './model/BatchAssociateDomainsV2Request';
import { BatchAssociateDomainsV2Response } from './model/BatchAssociateDomainsV2Response';
import { BatchCreateOrDeleteInstanceTagsRequest } from './model/BatchCreateOrDeleteInstanceTagsRequest';
import { BatchCreateOrDeleteInstanceTagsResponse } from './model/BatchCreateOrDeleteInstanceTagsResponse';
import { BatchDeleteAclV2Request } from './model/BatchDeleteAclV2Request';
import { BatchDeleteAclV2Response } from './model/BatchDeleteAclV2Response';
import { BatchDeleteApiAclBindingV2Request } from './model/BatchDeleteApiAclBindingV2Request';
import { BatchDeleteApiAclBindingV2Response } from './model/BatchDeleteApiAclBindingV2Response';
import { BatchDisableMembersRequest } from './model/BatchDisableMembersRequest';
import { BatchDisableMembersResponse } from './model/BatchDisableMembersResponse';
import { BatchDisassociateCertsV2Request } from './model/BatchDisassociateCertsV2Request';
import { BatchDisassociateCertsV2Response } from './model/BatchDisassociateCertsV2Response';
import { BatchDisassociateDomainsV2Request } from './model/BatchDisassociateDomainsV2Request';
import { BatchDisassociateDomainsV2Response } from './model/BatchDisassociateDomainsV2Response';
import { BatchDisassociateThrottlingPolicyV2Request } from './model/BatchDisassociateThrottlingPolicyV2Request';
import { BatchDisassociateThrottlingPolicyV2Response } from './model/BatchDisassociateThrottlingPolicyV2Response';
import { BatchEnableMembersRequest } from './model/BatchEnableMembersRequest';
import { BatchEnableMembersResponse } from './model/BatchEnableMembersResponse';
import { BatchFailure } from './model/BatchFailure';
import { BatchPublishOrOfflineApiV2Request } from './model/BatchPublishOrOfflineApiV2Request';
import { BatchPublishOrOfflineApiV2Response } from './model/BatchPublishOrOfflineApiV2Response';
import { CancelingAuthorizationV2Request } from './model/CancelingAuthorizationV2Request';
import { CancelingAuthorizationV2Response } from './model/CancelingAuthorizationV2Response';
import { CbcOperationLock } from './model/CbcOperationLock';
import { CertBase } from './model/CertBase';
import { CertForm } from './model/CertForm';
import { CertificateForm } from './model/CertificateForm';
import { ChangeApiVersionV2Request } from './model/ChangeApiVersionV2Request';
import { ChangeApiVersionV2Response } from './model/ChangeApiVersionV2Response';
import { CheckApiGroupsV2Request } from './model/CheckApiGroupsV2Request';
import { CheckApiGroupsV2Response } from './model/CheckApiGroupsV2Response';
import { CheckApisV2Request } from './model/CheckApisV2Request';
import { CheckApisV2Response } from './model/CheckApisV2Response';
import { CheckAppV2Request } from './model/CheckAppV2Request';
import { CheckAppV2Response } from './model/CheckAppV2Response';
import { CoditionResp } from './model/CoditionResp';
import { Config } from './model/Config';
import { ConnectionActionReq } from './model/ConnectionActionReq';
import { CreateAclStrategyV2Request } from './model/CreateAclStrategyV2Request';
import { CreateAclStrategyV2Response } from './model/CreateAclStrategyV2Response';
import { CreateAnAppV2Request } from './model/CreateAnAppV2Request';
import { CreateAnAppV2Response } from './model/CreateAnAppV2Response';
import { CreateApiAclBindingV2Request } from './model/CreateApiAclBindingV2Request';
import { CreateApiAclBindingV2Response } from './model/CreateApiAclBindingV2Response';
import { CreateApiGroupV2Request } from './model/CreateApiGroupV2Request';
import { CreateApiGroupV2Response } from './model/CreateApiGroupV2Response';
import { CreateApiV2Request } from './model/CreateApiV2Request';
import { CreateApiV2Response } from './model/CreateApiV2Response';
import { CreateAppCodeAutoV2Request } from './model/CreateAppCodeAutoV2Request';
import { CreateAppCodeAutoV2Response } from './model/CreateAppCodeAutoV2Response';
import { CreateAppCodeV2Request } from './model/CreateAppCodeV2Request';
import { CreateAppCodeV2Response } from './model/CreateAppCodeV2Response';
import { CreateAppQuotaBindingApp } from './model/CreateAppQuotaBindingApp';
import { CreateAppQuotaRequest } from './model/CreateAppQuotaRequest';
import { CreateAppQuotaResponse } from './model/CreateAppQuotaResponse';
import { CreateAuthorizingAppsV2Request } from './model/CreateAuthorizingAppsV2Request';
import { CreateAuthorizingAppsV2Response } from './model/CreateAuthorizingAppsV2Response';
import { CreateCertificateV2Request } from './model/CreateCertificateV2Request';
import { CreateCertificateV2Response } from './model/CreateCertificateV2Response';
import { CreateCustomAuthorizerV2Request } from './model/CreateCustomAuthorizerV2Request';
import { CreateCustomAuthorizerV2Response } from './model/CreateCustomAuthorizerV2Response';
import { CreateEnvironmentV2Request } from './model/CreateEnvironmentV2Request';
import { CreateEnvironmentV2Response } from './model/CreateEnvironmentV2Response';
import { CreateEnvironmentVariableV2Request } from './model/CreateEnvironmentVariableV2Request';
import { CreateEnvironmentVariableV2Response } from './model/CreateEnvironmentVariableV2Response';
import { CreateFeatureV2Request } from './model/CreateFeatureV2Request';
import { CreateFeatureV2Response } from './model/CreateFeatureV2Response';
import { CreateGatewayResponseV2Request } from './model/CreateGatewayResponseV2Request';
import { CreateGatewayResponseV2Response } from './model/CreateGatewayResponseV2Response';
import { CreateInstanceV2Request } from './model/CreateInstanceV2Request';
import { CreateInstanceV2Response } from './model/CreateInstanceV2Response';
import { CreateMemberGroupRequest } from './model/CreateMemberGroupRequest';
import { CreateMemberGroupResponse } from './model/CreateMemberGroupResponse';
import { CreateOrDeletePublishRecordForApiV2Request } from './model/CreateOrDeletePublishRecordForApiV2Request';
import { CreateOrDeletePublishRecordForApiV2Response } from './model/CreateOrDeletePublishRecordForApiV2Response';
import { CreateOrchestrationRequest } from './model/CreateOrchestrationRequest';
import { CreateOrchestrationResponse } from './model/CreateOrchestrationResponse';
import { CreateOrderRequest } from './model/CreateOrderRequest';
import { CreateOrderResponse } from './model/CreateOrderResponse';
import { CreatePluginRequest } from './model/CreatePluginRequest';
import { CreatePluginResponse } from './model/CreatePluginResponse';
import { CreatePostPayResizeOrderRequest } from './model/CreatePostPayResizeOrderRequest';
import { CreatePostPayResizeOrderResponse } from './model/CreatePostPayResizeOrderResponse';
import { CreatePrepayResizeRequest } from './model/CreatePrepayResizeRequest';
import { CreatePrepayResizeResponse } from './model/CreatePrepayResizeResponse';
import { CreateRequestThrottlingPolicyV2Request } from './model/CreateRequestThrottlingPolicyV2Request';
import { CreateRequestThrottlingPolicyV2Response } from './model/CreateRequestThrottlingPolicyV2Response';
import { CreateSignatureKeyV2Request } from './model/CreateSignatureKeyV2Request';
import { CreateSignatureKeyV2Response } from './model/CreateSignatureKeyV2Response';
import { CreateSpecialThrottlingConfigurationV2Request } from './model/CreateSpecialThrottlingConfigurationV2Request';
import { CreateSpecialThrottlingConfigurationV2Response } from './model/CreateSpecialThrottlingConfigurationV2Response';
import { CreateVpcChannelV2Request } from './model/CreateVpcChannelV2Request';
import { CreateVpcChannelV2Response } from './model/CreateVpcChannelV2Response';
import { DebugApiV2Request } from './model/DebugApiV2Request';
import { DebugApiV2Response } from './model/DebugApiV2Response';
import { DeleteAclV2Request } from './model/DeleteAclV2Request';
import { DeleteAclV2Response } from './model/DeleteAclV2Response';
import { DeleteApiAclBindingV2Request } from './model/DeleteApiAclBindingV2Request';
import { DeleteApiAclBindingV2Response } from './model/DeleteApiAclBindingV2Response';
import { DeleteApiByVersionIdV2Request } from './model/DeleteApiByVersionIdV2Request';
import { DeleteApiByVersionIdV2Response } from './model/DeleteApiByVersionIdV2Response';
import { DeleteApiGroupV2Request } from './model/DeleteApiGroupV2Request';
import { DeleteApiGroupV2Response } from './model/DeleteApiGroupV2Response';
import { DeleteApiV2Request } from './model/DeleteApiV2Request';
import { DeleteApiV2Response } from './model/DeleteApiV2Response';
import { DeleteAppAclRequest } from './model/DeleteAppAclRequest';
import { DeleteAppAclResponse } from './model/DeleteAppAclResponse';
import { DeleteAppCodeV2Request } from './model/DeleteAppCodeV2Request';
import { DeleteAppCodeV2Response } from './model/DeleteAppCodeV2Response';
import { DeleteAppQuotaRequest } from './model/DeleteAppQuotaRequest';
import { DeleteAppQuotaResponse } from './model/DeleteAppQuotaResponse';
import { DeleteAppV2Request } from './model/DeleteAppV2Request';
import { DeleteAppV2Response } from './model/DeleteAppV2Response';
import { DeleteBackendInstanceV2Request } from './model/DeleteBackendInstanceV2Request';
import { DeleteBackendInstanceV2Response } from './model/DeleteBackendInstanceV2Response';
import { DeleteCertificateV2Request } from './model/DeleteCertificateV2Request';
import { DeleteCertificateV2Response } from './model/DeleteCertificateV2Response';
import { DeleteCustomAuthorizerV2Request } from './model/DeleteCustomAuthorizerV2Request';
import { DeleteCustomAuthorizerV2Response } from './model/DeleteCustomAuthorizerV2Response';
import { DeleteCustomIngressPortRequest } from './model/DeleteCustomIngressPortRequest';
import { DeleteCustomIngressPortResponse } from './model/DeleteCustomIngressPortResponse';
import { DeleteEndpointPermissionsRequest } from './model/DeleteEndpointPermissionsRequest';
import { DeleteEndpointPermissionsResponse } from './model/DeleteEndpointPermissionsResponse';
import { DeleteEnvironmentV2Request } from './model/DeleteEnvironmentV2Request';
import { DeleteEnvironmentV2Response } from './model/DeleteEnvironmentV2Response';
import { DeleteEnvironmentVariableV2Request } from './model/DeleteEnvironmentVariableV2Request';
import { DeleteEnvironmentVariableV2Response } from './model/DeleteEnvironmentVariableV2Response';
import { DeleteGatewayResponseTypeV2Request } from './model/DeleteGatewayResponseTypeV2Request';
import { DeleteGatewayResponseTypeV2Response } from './model/DeleteGatewayResponseTypeV2Response';
import { DeleteGatewayResponseV2Request } from './model/DeleteGatewayResponseV2Request';
import { DeleteGatewayResponseV2Response } from './model/DeleteGatewayResponseV2Response';
import { DeleteInstancesV2Request } from './model/DeleteInstancesV2Request';
import { DeleteInstancesV2Response } from './model/DeleteInstancesV2Response';
import { DeleteMemberGroupRequest } from './model/DeleteMemberGroupRequest';
import { DeleteMemberGroupResponse } from './model/DeleteMemberGroupResponse';
import { DeleteOrchestrationRequest } from './model/DeleteOrchestrationRequest';
import { DeleteOrchestrationResponse } from './model/DeleteOrchestrationResponse';
import { DeletePluginRequest } from './model/DeletePluginRequest';
import { DeletePluginResponse } from './model/DeletePluginResponse';
import { DeleteRequestThrottlingPolicyV2Request } from './model/DeleteRequestThrottlingPolicyV2Request';
import { DeleteRequestThrottlingPolicyV2Response } from './model/DeleteRequestThrottlingPolicyV2Response';
import { DeleteSignatureKeyV2Request } from './model/DeleteSignatureKeyV2Request';
import { DeleteSignatureKeyV2Response } from './model/DeleteSignatureKeyV2Response';
import { DeleteSpecialThrottlingConfigurationV2Request } from './model/DeleteSpecialThrottlingConfigurationV2Request';
import { DeleteSpecialThrottlingConfigurationV2Response } from './model/DeleteSpecialThrottlingConfigurationV2Response';
import { DeleteVpcChannelV2Request } from './model/DeleteVpcChannelV2Request';
import { DeleteVpcChannelV2Response } from './model/DeleteVpcChannelV2Response';
import { DetachApiFromPluginRequest } from './model/DetachApiFromPluginRequest';
import { DetachApiFromPluginResponse } from './model/DetachApiFromPluginResponse';
import { DetachPluginFromApiRequest } from './model/DetachPluginFromApiRequest';
import { DetachPluginFromApiResponse } from './model/DetachPluginFromApiResponse';
import { DisassociateAppQuotaWithAppRequest } from './model/DisassociateAppQuotaWithAppRequest';
import { DisassociateAppQuotaWithAppResponse } from './model/DisassociateAppQuotaWithAppResponse';
import { DisassociateCertificateV2Request } from './model/DisassociateCertificateV2Request';
import { DisassociateCertificateV2Response } from './model/DisassociateCertificateV2Response';
import { DisassociateDomainV2Request } from './model/DisassociateDomainV2Request';
import { DisassociateDomainV2Response } from './model/DisassociateDomainV2Response';
import { DisassociateRequestThrottlingPolicyV2Request } from './model/DisassociateRequestThrottlingPolicyV2Request';
import { DisassociateRequestThrottlingPolicyV2Response } from './model/DisassociateRequestThrottlingPolicyV2Response';
import { DisassociateSignatureKeyV2Request } from './model/DisassociateSignatureKeyV2Request';
import { DisassociateSignatureKeyV2Response } from './model/DisassociateSignatureKeyV2Response';
import { EipBindReq } from './model/EipBindReq';
import { EndpointConnection } from './model/EndpointConnection';
import { EndpointPermission } from './model/EndpointPermission';
import { EndpointPermissionList } from './model/EndpointPermissionList';
import { EndpointService } from './model/EndpointService';
import { EnvCreate } from './model/EnvCreate';
import { EnvInfo } from './model/EnvInfo';
import { EnvVariableBase } from './model/EnvVariableBase';
import { EnvVariableCreate } from './model/EnvVariableCreate';
import { EnvVariableInfo } from './model/EnvVariableInfo';
import { ExportApiDefinitionsAsyncRequest } from './model/ExportApiDefinitionsAsyncRequest';
import { ExportApiDefinitionsAsyncResponse } from './model/ExportApiDefinitionsAsyncResponse';
import { ExportApiDefinitionsV2Request } from './model/ExportApiDefinitionsV2Request';
import { ExportApiDefinitionsV2Response } from './model/ExportApiDefinitionsV2Response';
import { ExportOpenApiReq } from './model/ExportOpenApiReq';
import { Failure } from './model/Failure';
import { FeatureInfo } from './model/FeatureInfo';
import { FeatureToggle } from './model/FeatureToggle';
import { Identity } from './model/Identity';
import { Ignore } from './model/Ignore';
import { ImportApiDefinitionsAsyncRequest } from './model/ImportApiDefinitionsAsyncRequest';
import { ImportApiDefinitionsAsyncRequestBody } from './model/ImportApiDefinitionsAsyncRequestBody';
import { ImportApiDefinitionsAsyncResponse } from './model/ImportApiDefinitionsAsyncResponse';
import { ImportApiDefinitionsV2Request } from './model/ImportApiDefinitionsV2Request';
import { ImportApiDefinitionsV2RequestBody } from './model/ImportApiDefinitionsV2RequestBody';
import { ImportApiDefinitionsV2Response } from './model/ImportApiDefinitionsV2Response';
import { ImportBaseResult } from './model/ImportBaseResult';
import { ImportMicroserviceRequest } from './model/ImportMicroserviceRequest';
import { ImportMicroserviceResponse } from './model/ImportMicroserviceResponse';
import { IngressPortCreate } from './model/IngressPortCreate';
import { IngressPortInfo } from './model/IngressPortInfo';
import { InnerLatencyStats } from './model/InnerLatencyStats';
import { InstanceAbstractReq } from './model/InstanceAbstractReq';
import { InstanceChangeOrderReq } from './model/InstanceChangeOrderReq';
import { InstanceConfig } from './model/InstanceConfig';
import { InstanceCreateReq } from './model/InstanceCreateReq';
import { InstanceCreateReqV2 } from './model/InstanceCreateReqV2';
import { InstanceModReq } from './model/InstanceModReq';
import { InstanceOrderReq } from './model/InstanceOrderReq';
import { IpDetails } from './model/IpDetails';
import { LatencyStats } from './model/LatencyStats';
import { ListAclPolicyBindedToApiV2Request } from './model/ListAclPolicyBindedToApiV2Request';
import { ListAclPolicyBindedToApiV2Response } from './model/ListAclPolicyBindedToApiV2Response';
import { ListAclStrategiesV2Request } from './model/ListAclStrategiesV2Request';
import { ListAclStrategiesV2Response } from './model/ListAclStrategiesV2Response';
import { ListApiAttachablePluginsRequest } from './model/ListApiAttachablePluginsRequest';
import { ListApiAttachablePluginsResponse } from './model/ListApiAttachablePluginsResponse';
import { ListApiAttachedPluginsRequest } from './model/ListApiAttachedPluginsRequest';
import { ListApiAttachedPluginsResponse } from './model/ListApiAttachedPluginsResponse';
import { ListApiGroupsQuantitiesV2Request } from './model/ListApiGroupsQuantitiesV2Request';
import { ListApiGroupsQuantitiesV2Response } from './model/ListApiGroupsQuantitiesV2Response';
import { ListApiGroupsV2Request } from './model/ListApiGroupsV2Request';
import { ListApiGroupsV2Response } from './model/ListApiGroupsV2Response';
import { ListApiQuantitiesV2Request } from './model/ListApiQuantitiesV2Request';
import { ListApiQuantitiesV2Response } from './model/ListApiQuantitiesV2Response';
import { ListApiRuntimeDefinitionV2Request } from './model/ListApiRuntimeDefinitionV2Request';
import { ListApiRuntimeDefinitionV2Response } from './model/ListApiRuntimeDefinitionV2Response';
import { ListApiVersionDetailV2Request } from './model/ListApiVersionDetailV2Request';
import { ListApiVersionDetailV2Response } from './model/ListApiVersionDetailV2Response';
import { ListApiVersionsV2Request } from './model/ListApiVersionsV2Request';
import { ListApiVersionsV2Response } from './model/ListApiVersionsV2Response';
import { ListApisBindedToAclPolicyV2Request } from './model/ListApisBindedToAclPolicyV2Request';
import { ListApisBindedToAclPolicyV2Response } from './model/ListApisBindedToAclPolicyV2Response';
import { ListApisBindedToAppV2Request } from './model/ListApisBindedToAppV2Request';
import { ListApisBindedToAppV2Response } from './model/ListApisBindedToAppV2Response';
import { ListApisBindedToRequestThrottlingPolicyV2Request } from './model/ListApisBindedToRequestThrottlingPolicyV2Request';
import { ListApisBindedToRequestThrottlingPolicyV2Response } from './model/ListApisBindedToRequestThrottlingPolicyV2Response';
import { ListApisBindedToSignatureKeyV2Request } from './model/ListApisBindedToSignatureKeyV2Request';
import { ListApisBindedToSignatureKeyV2Response } from './model/ListApisBindedToSignatureKeyV2Response';
import { ListApisNotBoundWithSignatureKeyV2Request } from './model/ListApisNotBoundWithSignatureKeyV2Request';
import { ListApisNotBoundWithSignatureKeyV2Response } from './model/ListApisNotBoundWithSignatureKeyV2Response';
import { ListApisUnbindedToAclPolicyV2Request } from './model/ListApisUnbindedToAclPolicyV2Request';
import { ListApisUnbindedToAclPolicyV2Response } from './model/ListApisUnbindedToAclPolicyV2Response';
import { ListApisUnbindedToAppV2Request } from './model/ListApisUnbindedToAppV2Request';
import { ListApisUnbindedToAppV2Response } from './model/ListApisUnbindedToAppV2Response';
import { ListApisUnbindedToRequestThrottlingPolicyV2Request } from './model/ListApisUnbindedToRequestThrottlingPolicyV2Request';
import { ListApisUnbindedToRequestThrottlingPolicyV2Response } from './model/ListApisUnbindedToRequestThrottlingPolicyV2Response';
import { ListApisV2Request } from './model/ListApisV2Request';
import { ListApisV2Response } from './model/ListApisV2Response';
import { ListAppCodesV2Request } from './model/ListAppCodesV2Request';
import { ListAppCodesV2Response } from './model/ListAppCodesV2Response';
import { ListAppQuantitiesV2Request } from './model/ListAppQuantitiesV2Request';
import { ListAppQuantitiesV2Response } from './model/ListAppQuantitiesV2Response';
import { ListAppQuotaBindableAppsRequest } from './model/ListAppQuotaBindableAppsRequest';
import { ListAppQuotaBindableAppsResponse } from './model/ListAppQuotaBindableAppsResponse';
import { ListAppQuotaBoundAppsRequest } from './model/ListAppQuotaBoundAppsRequest';
import { ListAppQuotaBoundAppsResponse } from './model/ListAppQuotaBoundAppsResponse';
import { ListAppQuotasRequest } from './model/ListAppQuotasRequest';
import { ListAppQuotasResponse } from './model/ListAppQuotasResponse';
import { ListAppsBindedToApiV2Request } from './model/ListAppsBindedToApiV2Request';
import { ListAppsBindedToApiV2Response } from './model/ListAppsBindedToApiV2Response';
import { ListAppsV2Request } from './model/ListAppsV2Request';
import { ListAppsV2Response } from './model/ListAppsV2Response';
import { ListAttachedDomainsV2Request } from './model/ListAttachedDomainsV2Request';
import { ListAttachedDomainsV2Response } from './model/ListAttachedDomainsV2Response';
import { ListAvailableZonesV2Request } from './model/ListAvailableZonesV2Request';
import { ListAvailableZonesV2Response } from './model/ListAvailableZonesV2Response';
import { ListBackendInstancesV2Request } from './model/ListBackendInstancesV2Request';
import { ListBackendInstancesV2Response } from './model/ListBackendInstancesV2Response';
import { ListCertificatesV2Request } from './model/ListCertificatesV2Request';
import { ListCertificatesV2Response } from './model/ListCertificatesV2Response';
import { ListCustomAuthorizersV2Request } from './model/ListCustomAuthorizersV2Request';
import { ListCustomAuthorizersV2Response } from './model/ListCustomAuthorizersV2Response';
import { ListCustomIngressPortDomainsRequest } from './model/ListCustomIngressPortDomainsRequest';
import { ListCustomIngressPortDomainsResponse } from './model/ListCustomIngressPortDomainsResponse';
import { ListCustomIngressPortsRequest } from './model/ListCustomIngressPortsRequest';
import { ListCustomIngressPortsResponse } from './model/ListCustomIngressPortsResponse';
import { ListEndpointConnectionsRequest } from './model/ListEndpointConnectionsRequest';
import { ListEndpointConnectionsResponse } from './model/ListEndpointConnectionsResponse';
import { ListEndpointPermissionsRequest } from './model/ListEndpointPermissionsRequest';
import { ListEndpointPermissionsResponse } from './model/ListEndpointPermissionsResponse';
import { ListEnvironmentVariablesV2Request } from './model/ListEnvironmentVariablesV2Request';
import { ListEnvironmentVariablesV2Response } from './model/ListEnvironmentVariablesV2Response';
import { ListEnvironmentsV2Request } from './model/ListEnvironmentsV2Request';
import { ListEnvironmentsV2Response } from './model/ListEnvironmentsV2Response';
import { ListFeaturesV2Request } from './model/ListFeaturesV2Request';
import { ListFeaturesV2Response } from './model/ListFeaturesV2Response';
import { ListGatewayResponsesV2Request } from './model/ListGatewayResponsesV2Request';
import { ListGatewayResponsesV2Response } from './model/ListGatewayResponsesV2Response';
import { ListInstanceConfigsV2Request } from './model/ListInstanceConfigsV2Request';
import { ListInstanceConfigsV2Response } from './model/ListInstanceConfigsV2Response';
import { ListInstanceFeaturesRequest } from './model/ListInstanceFeaturesRequest';
import { ListInstanceFeaturesResponse } from './model/ListInstanceFeaturesResponse';
import { ListInstanceTagsRequest } from './model/ListInstanceTagsRequest';
import { ListInstanceTagsResponse } from './model/ListInstanceTagsResponse';
import { ListInstancesByTagsRequest } from './model/ListInstancesByTagsRequest';
import { ListInstancesByTagsResponse } from './model/ListInstancesByTagsResponse';
import { ListInstancesV2Request } from './model/ListInstancesV2Request';
import { ListInstancesV2Response } from './model/ListInstancesV2Response';
import { ListLatelyApiStatisticsV2Request } from './model/ListLatelyApiStatisticsV2Request';
import { ListLatelyApiStatisticsV2Response } from './model/ListLatelyApiStatisticsV2Response';
import { ListLatelyGroupStatisticsV2Request } from './model/ListLatelyGroupStatisticsV2Request';
import { ListLatelyGroupStatisticsV2Response } from './model/ListLatelyGroupStatisticsV2Response';
import { ListMemberGroupsRequest } from './model/ListMemberGroupsRequest';
import { ListMemberGroupsResponse } from './model/ListMemberGroupsResponse';
import { ListMetricDataRequest } from './model/ListMetricDataRequest';
import { ListMetricDataResponse } from './model/ListMetricDataResponse';
import { ListOrchestrationAttachedApisRequest } from './model/ListOrchestrationAttachedApisRequest';
import { ListOrchestrationAttachedApisResponse } from './model/ListOrchestrationAttachedApisResponse';
import { ListOrchestrationsRequest } from './model/ListOrchestrationsRequest';
import { ListOrchestrationsResponse } from './model/ListOrchestrationsResponse';
import { ListPluginAttachableApisRequest } from './model/ListPluginAttachableApisRequest';
import { ListPluginAttachableApisResponse } from './model/ListPluginAttachableApisResponse';
import { ListPluginAttachedApisRequest } from './model/ListPluginAttachedApisRequest';
import { ListPluginAttachedApisResponse } from './model/ListPluginAttachedApisResponse';
import { ListPluginsRequest } from './model/ListPluginsRequest';
import { ListPluginsResponse } from './model/ListPluginsResponse';
import { ListProjectCofigsV2Request } from './model/ListProjectCofigsV2Request';
import { ListProjectCofigsV2Response } from './model/ListProjectCofigsV2Response';
import { ListProjectInstanceTagsRequest } from './model/ListProjectInstanceTagsRequest';
import { ListProjectInstanceTagsResponse } from './model/ListProjectInstanceTagsResponse';
import { ListRequestThrottlingPoliciesBindedToApiV2Request } from './model/ListRequestThrottlingPoliciesBindedToApiV2Request';
import { ListRequestThrottlingPoliciesBindedToApiV2Response } from './model/ListRequestThrottlingPoliciesBindedToApiV2Response';
import { ListRequestThrottlingPolicyV2Request } from './model/ListRequestThrottlingPolicyV2Request';
import { ListRequestThrottlingPolicyV2Response } from './model/ListRequestThrottlingPolicyV2Response';
import { ListSignatureKeysBindedToApiV2Request } from './model/ListSignatureKeysBindedToApiV2Request';
import { ListSignatureKeysBindedToApiV2Response } from './model/ListSignatureKeysBindedToApiV2Response';
import { ListSignatureKeysV2Request } from './model/ListSignatureKeysV2Request';
import { ListSignatureKeysV2Response } from './model/ListSignatureKeysV2Response';
import { ListSpecialThrottlingConfigurationsV2Request } from './model/ListSpecialThrottlingConfigurationsV2Request';
import { ListSpecialThrottlingConfigurationsV2Response } from './model/ListSpecialThrottlingConfigurationsV2Response';
import { ListTagsV2Request } from './model/ListTagsV2Request';
import { ListTagsV2Response } from './model/ListTagsV2Response';
import { ListVpcChannelsV2Request } from './model/ListVpcChannelsV2Request';
import { ListVpcChannelsV2Response } from './model/ListVpcChannelsV2Response';
import { LocalName } from './model/LocalName';
import { MemberBase } from './model/MemberBase';
import { MemberGroupCreate } from './model/MemberGroupCreate';
import { MemberGroupCreateBatch } from './model/MemberGroupCreateBatch';
import { MemberGroupInfo } from './model/MemberGroupInfo';
import { MemberInfo } from './model/MemberInfo';
import { MembersBatchEnableOrDisable } from './model/MembersBatchEnableOrDisable';
import { MetricData } from './model/MetricData';
import { MicroServiceCreate } from './model/MicroServiceCreate';
import { MicroServiceInfo } from './model/MicroServiceInfo';
import { MicroServiceInfoCCE } from './model/MicroServiceInfoCCE';
import { MicroServiceInfoCCEBase } from './model/MicroServiceInfoCCEBase';
import { MicroServiceInfoCCECreate } from './model/MicroServiceInfoCCECreate';
import { MicroServiceInfoCSE } from './model/MicroServiceInfoCSE';
import { MicroServiceInfoCSEBase } from './model/MicroServiceInfoCSEBase';
import { MicroServiceInfoCSECreate } from './model/MicroServiceInfoCSECreate';
import { MicroserviceApiCreate } from './model/MicroserviceApiCreate';
import { MicroserviceGroup } from './model/MicroserviceGroup';
import { MicroserviceImportApiResp } from './model/MicroserviceImportApiResp';
import { MicroserviceImportReq } from './model/MicroserviceImportReq';
import { MicroserviceLabel } from './model/MicroserviceLabel';
import { NetworkTrafficStats } from './model/NetworkTrafficStats';
import { NodeIps } from './model/NodeIps';
import { OpenEngressEipReq } from './model/OpenEngressEipReq';
import { OpenIngressEipReq } from './model/OpenIngressEipReq';
import { OrchestrationApiInfo } from './model/OrchestrationApiInfo';
import { OrchestrationBaseInfo } from './model/OrchestrationBaseInfo';
import { OrchestrationBaseResp } from './model/OrchestrationBaseResp';
import { OrchestrationCreate } from './model/OrchestrationCreate';
import { OrchestrationMap } from './model/OrchestrationMap';
import { OrchestrationMapParamRange } from './model/OrchestrationMapParamRange';
import { OrchestrationMappedParam } from './model/OrchestrationMappedParam';
import { PluginApiAttachInfo } from './model/PluginApiAttachInfo';
import { PluginApiInfo } from './model/PluginApiInfo';
import { PluginCreate } from './model/PluginCreate';
import { PluginInfo } from './model/PluginInfo';
import { PluginOperApiInfo } from './model/PluginOperApiInfo';
import { PortBindingDomainInfo } from './model/PortBindingDomainInfo';
import { PublishResp } from './model/PublishResp';
import { RemoveEipV2Request } from './model/RemoveEipV2Request';
import { RemoveEipV2Response } from './model/RemoveEipV2Response';
import { RemoveEngressEipV2Request } from './model/RemoveEngressEipV2Request';
import { RemoveEngressEipV2Response } from './model/RemoveEngressEipV2Response';
import { RemoveIngressEipV2Request } from './model/RemoveIngressEipV2Request';
import { RemoveIngressEipV2Response } from './model/RemoveIngressEipV2Response';
import { ReqParam } from './model/ReqParam';
import { ReqParamBase } from './model/ReqParamBase';
import { RequestCountStats } from './model/RequestCountStats';
import { ResettingAppSecretV2Request } from './model/ResettingAppSecretV2Request';
import { ResettingAppSecretV2Response } from './model/ResettingAppSecretV2Response';
import { ResizeInstanceReq } from './model/ResizeInstanceReq';
import { RespInstanceBase } from './model/RespInstanceBase';
import { ResponseInfo } from './model/ResponseInfo';
import { ResponseInfoHeader } from './model/ResponseInfoHeader';
import { ResponseInfoResp } from './model/ResponseInfoResp';
import { ResponsesCreate } from './model/ResponsesCreate';
import { ResponsesInfo } from './model/ResponsesInfo';
import { ShowAppBoundAppQuotaRequest } from './model/ShowAppBoundAppQuotaRequest';
import { ShowAppBoundAppQuotaResponse } from './model/ShowAppBoundAppQuotaResponse';
import { ShowAppQuotaRequest } from './model/ShowAppQuotaRequest';
import { ShowAppQuotaResponse } from './model/ShowAppQuotaResponse';
import { ShowAsyncTaskResultRequest } from './model/ShowAsyncTaskResultRequest';
import { ShowAsyncTaskResultResponse } from './model/ShowAsyncTaskResultResponse';
import { ShowDetailsOfAclPolicyV2Request } from './model/ShowDetailsOfAclPolicyV2Request';
import { ShowDetailsOfAclPolicyV2Response } from './model/ShowDetailsOfAclPolicyV2Response';
import { ShowDetailsOfApiGroupV2Request } from './model/ShowDetailsOfApiGroupV2Request';
import { ShowDetailsOfApiGroupV2Response } from './model/ShowDetailsOfApiGroupV2Response';
import { ShowDetailsOfApiV2Request } from './model/ShowDetailsOfApiV2Request';
import { ShowDetailsOfApiV2Response } from './model/ShowDetailsOfApiV2Response';
import { ShowDetailsOfAppAclRequest } from './model/ShowDetailsOfAppAclRequest';
import { ShowDetailsOfAppAclResponse } from './model/ShowDetailsOfAppAclResponse';
import { ShowDetailsOfAppCodeV2Request } from './model/ShowDetailsOfAppCodeV2Request';
import { ShowDetailsOfAppCodeV2Response } from './model/ShowDetailsOfAppCodeV2Response';
import { ShowDetailsOfAppV2Request } from './model/ShowDetailsOfAppV2Request';
import { ShowDetailsOfAppV2Response } from './model/ShowDetailsOfAppV2Response';
import { ShowDetailsOfCertificateV2Request } from './model/ShowDetailsOfCertificateV2Request';
import { ShowDetailsOfCertificateV2Response } from './model/ShowDetailsOfCertificateV2Response';
import { ShowDetailsOfCustomAuthorizersV2Request } from './model/ShowDetailsOfCustomAuthorizersV2Request';
import { ShowDetailsOfCustomAuthorizersV2Response } from './model/ShowDetailsOfCustomAuthorizersV2Response';
import { ShowDetailsOfDomainNameCertificateV2Request } from './model/ShowDetailsOfDomainNameCertificateV2Request';
import { ShowDetailsOfDomainNameCertificateV2Response } from './model/ShowDetailsOfDomainNameCertificateV2Response';
import { ShowDetailsOfEnvironmentVariableV2Request } from './model/ShowDetailsOfEnvironmentVariableV2Request';
import { ShowDetailsOfEnvironmentVariableV2Response } from './model/ShowDetailsOfEnvironmentVariableV2Response';
import { ShowDetailsOfGatewayResponseTypeV2Request } from './model/ShowDetailsOfGatewayResponseTypeV2Request';
import { ShowDetailsOfGatewayResponseTypeV2Response } from './model/ShowDetailsOfGatewayResponseTypeV2Response';
import { ShowDetailsOfGatewayResponseV2Request } from './model/ShowDetailsOfGatewayResponseV2Request';
import { ShowDetailsOfGatewayResponseV2Response } from './model/ShowDetailsOfGatewayResponseV2Response';
import { ShowDetailsOfInstanceProgressV2Request } from './model/ShowDetailsOfInstanceProgressV2Request';
import { ShowDetailsOfInstanceProgressV2Response } from './model/ShowDetailsOfInstanceProgressV2Response';
import { ShowDetailsOfInstanceV2Request } from './model/ShowDetailsOfInstanceV2Request';
import { ShowDetailsOfInstanceV2Response } from './model/ShowDetailsOfInstanceV2Response';
import { ShowDetailsOfMemberGroupRequest } from './model/ShowDetailsOfMemberGroupRequest';
import { ShowDetailsOfMemberGroupResponse } from './model/ShowDetailsOfMemberGroupResponse';
import { ShowDetailsOfOrchestrationRequest } from './model/ShowDetailsOfOrchestrationRequest';
import { ShowDetailsOfOrchestrationResponse } from './model/ShowDetailsOfOrchestrationResponse';
import { ShowDetailsOfRequestThrottlingPolicyV2Request } from './model/ShowDetailsOfRequestThrottlingPolicyV2Request';
import { ShowDetailsOfRequestThrottlingPolicyV2Response } from './model/ShowDetailsOfRequestThrottlingPolicyV2Response';
import { ShowDetailsOfVpcChannelV2Request } from './model/ShowDetailsOfVpcChannelV2Request';
import { ShowDetailsOfVpcChannelV2Response } from './model/ShowDetailsOfVpcChannelV2Response';
import { ShowInstancesNumByTagsRequest } from './model/ShowInstancesNumByTagsRequest';
import { ShowInstancesNumByTagsResponse } from './model/ShowInstancesNumByTagsResponse';
import { ShowPluginRequest } from './model/ShowPluginRequest';
import { ShowPluginResponse } from './model/ShowPluginResponse';
import { ShowRestrictionOfInstanceV2Request } from './model/ShowRestrictionOfInstanceV2Request';
import { ShowRestrictionOfInstanceV2Response } from './model/ShowRestrictionOfInstanceV2Response';
import { SignApiBinding } from './model/SignApiBinding';
import { SignApiBindingBase } from './model/SignApiBindingBase';
import { SignApiBindingInfo } from './model/SignApiBindingInfo';
import { SignApiBindingResult } from './model/SignApiBindingResult';
import { Signature } from './model/Signature';
import { SignatureWithBindNum } from './model/SignatureWithBindNum';
import { SlDomainAccessSetting } from './model/SlDomainAccessSetting';
import { StatisticsAPI } from './model/StatisticsAPI';
import { StatisticsGroup } from './model/StatisticsGroup';
import { Success } from './model/Success';
import { Swagger } from './model/Swagger';
import { ThrottleApiBinding } from './model/ThrottleApiBinding';
import { ThrottleApiBindingCreate } from './model/ThrottleApiBindingCreate';
import { ThrottleBaseInfo } from './model/ThrottleBaseInfo';
import { ThrottleBindingBatchDelete } from './model/ThrottleBindingBatchDelete';
import { ThrottleBindingBatchFailure } from './model/ThrottleBindingBatchFailure';
import { ThrottleForApi } from './model/ThrottleForApi';
import { ThrottleSpecialBase } from './model/ThrottleSpecialBase';
import { ThrottleSpecialCreate } from './model/ThrottleSpecialCreate';
import { ThrottleSpecialInfo } from './model/ThrottleSpecialInfo';
import { ThrottleSpecialUpdate } from './model/ThrottleSpecialUpdate';
import { ThrottlesInfo } from './model/ThrottlesInfo';
import { TmsKeyValue } from './model/TmsKeyValue';
import { TmsKeyValues } from './model/TmsKeyValues';
import { TmsMatchesKeyValue } from './model/TmsMatchesKeyValue';
import { TmsQueryReq } from './model/TmsQueryReq';
import { TmsResourceResp } from './model/TmsResourceResp';
import { TmsUpdatePublicReq } from './model/TmsUpdatePublicReq';
import { UnbindApiForAcl } from './model/UnbindApiForAcl';
import { UpdateAclStrategyV2Request } from './model/UpdateAclStrategyV2Request';
import { UpdateAclStrategyV2Response } from './model/UpdateAclStrategyV2Response';
import { UpdateApiGroupV2Request } from './model/UpdateApiGroupV2Request';
import { UpdateApiGroupV2Response } from './model/UpdateApiGroupV2Response';
import { UpdateApiV2Request } from './model/UpdateApiV2Request';
import { UpdateApiV2Response } from './model/UpdateApiV2Response';
import { UpdateAppAclRequest } from './model/UpdateAppAclRequest';
import { UpdateAppAclResponse } from './model/UpdateAppAclResponse';
import { UpdateAppQuotaRequest } from './model/UpdateAppQuotaRequest';
import { UpdateAppQuotaResponse } from './model/UpdateAppQuotaResponse';
import { UpdateAppV2Request } from './model/UpdateAppV2Request';
import { UpdateAppV2Response } from './model/UpdateAppV2Response';
import { UpdateBackendInstancesV2Request } from './model/UpdateBackendInstancesV2Request';
import { UpdateBackendInstancesV2Response } from './model/UpdateBackendInstancesV2Response';
import { UpdateCertificateV2Request } from './model/UpdateCertificateV2Request';
import { UpdateCertificateV2Response } from './model/UpdateCertificateV2Response';
import { UpdateCustomAuthorizerV2Request } from './model/UpdateCustomAuthorizerV2Request';
import { UpdateCustomAuthorizerV2Response } from './model/UpdateCustomAuthorizerV2Response';
import { UpdateDomainV2Request } from './model/UpdateDomainV2Request';
import { UpdateDomainV2Response } from './model/UpdateDomainV2Response';
import { UpdateEngressEipV2Request } from './model/UpdateEngressEipV2Request';
import { UpdateEngressEipV2Response } from './model/UpdateEngressEipV2Response';
import { UpdateEnvironmentV2Request } from './model/UpdateEnvironmentV2Request';
import { UpdateEnvironmentV2Response } from './model/UpdateEnvironmentV2Response';
import { UpdateEnvironmentVariableV2Request } from './model/UpdateEnvironmentVariableV2Request';
import { UpdateEnvironmentVariableV2Response } from './model/UpdateEnvironmentVariableV2Response';
import { UpdateGatewayResponseTypeV2Request } from './model/UpdateGatewayResponseTypeV2Request';
import { UpdateGatewayResponseTypeV2Response } from './model/UpdateGatewayResponseTypeV2Response';
import { UpdateGatewayResponseV2Request } from './model/UpdateGatewayResponseV2Request';
import { UpdateGatewayResponseV2Response } from './model/UpdateGatewayResponseV2Response';
import { UpdateHealthCheckRequest } from './model/UpdateHealthCheckRequest';
import { UpdateHealthCheckResponse } from './model/UpdateHealthCheckResponse';
import { UpdateIngressEipV2Request } from './model/UpdateIngressEipV2Request';
import { UpdateIngressEipV2Response } from './model/UpdateIngressEipV2Response';
import { UpdateInstanceV2Request } from './model/UpdateInstanceV2Request';
import { UpdateInstanceV2Response } from './model/UpdateInstanceV2Response';
import { UpdateMemberGroupRequest } from './model/UpdateMemberGroupRequest';
import { UpdateMemberGroupResponse } from './model/UpdateMemberGroupResponse';
import { UpdateOrchestrationRequest } from './model/UpdateOrchestrationRequest';
import { UpdateOrchestrationResponse } from './model/UpdateOrchestrationResponse';
import { UpdatePluginRequest } from './model/UpdatePluginRequest';
import { UpdatePluginResponse } from './model/UpdatePluginResponse';
import { UpdateRequestThrottlingPolicyV2Request } from './model/UpdateRequestThrottlingPolicyV2Request';
import { UpdateRequestThrottlingPolicyV2Response } from './model/UpdateRequestThrottlingPolicyV2Response';
import { UpdateSignatureKeyV2Request } from './model/UpdateSignatureKeyV2Request';
import { UpdateSignatureKeyV2Response } from './model/UpdateSignatureKeyV2Response';
import { UpdateSlDomainSettingV2Request } from './model/UpdateSlDomainSettingV2Request';
import { UpdateSlDomainSettingV2Response } from './model/UpdateSlDomainSettingV2Response';
import { UpdateSpecialThrottlingConfigurationV2Request } from './model/UpdateSpecialThrottlingConfigurationV2Request';
import { UpdateSpecialThrottlingConfigurationV2Response } from './model/UpdateSpecialThrottlingConfigurationV2Response';
import { UpdateVpcChannelV2Request } from './model/UpdateVpcChannelV2Request';
import { UpdateVpcChannelV2Response } from './model/UpdateVpcChannelV2Response';
import { UrlDomain } from './model/UrlDomain';
import { UrlDomainBase } from './model/UrlDomainBase';
import { UrlDomainBaseInfo } from './model/UrlDomainBaseInfo';
import { UrlDomainCreate } from './model/UrlDomainCreate';
import { UrlDomainModify } from './model/UrlDomainModify';
import { UrlDomainRefInfo } from './model/UrlDomainRefInfo';
import { VpcBase } from './model/VpcBase';
import { VpcBaseInfo } from './model/VpcBaseInfo';
import { VpcChannelInfo } from './model/VpcChannelInfo';
import { VpcCreate } from './model/VpcCreate';
import { VpcHealthConfig } from './model/VpcHealthConfig';
import { VpcHealthConfigBase } from './model/VpcHealthConfigBase';
import { VpcHealthConfigInfo } from './model/VpcHealthConfigInfo';
import { VpcInfo } from './model/VpcInfo';
import { VpcMemberCreate } from './model/VpcMemberCreate';
import { VpcMemberInfo } from './model/VpcMemberInfo';
import { VpcMemberModify } from './model/VpcMemberModify';

export class ApigClient {
    public static newBuilder(): ClientBuilder<ApigClient> {
            return new ClientBuilder<ApigClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 接受或拒绝实例节点连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 接受或拒绝终端节点连接
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {ConnectionActionReq} acceptOrRejectEndpointConnectionsRequestBody 接受或拒绝终端节点连接请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public acceptOrRejectEndpointConnections(acceptOrRejectEndpointConnectionsRequest?: AcceptOrRejectEndpointConnectionsRequest): Promise<AcceptOrRejectEndpointConnectionsResponse> {
        const options = ParamCreater().acceptOrRejectEndpointConnections(acceptOrRejectEndpointConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['x-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增实例的自定义入方向端口，在同个实例中，一个端口仅能支持一种协议。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增实例的自定义入方向端口
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {IngressPortCreate} addCustomIngressPortRequestBody 新增实例的自定义入方向端口的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addCustomIngressPort(addCustomIngressPortRequest?: AddCustomIngressPortRequest): Promise<AddCustomIngressPortResponse> {
        const options = ParamCreater().addCustomIngressPort(addCustomIngressPortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例更新或绑定EIP(仅当实例为LVS类型时支持)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例更新或绑定EIP
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {EipBindReq} addEipV2RequestBody 绑定EIP的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addEipV2(addEipV2Request?: AddEipV2Request): Promise<AddEipV2Response> {
        const options = ParamCreater().addEipV2(addEipV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加实例终端节点连接白名单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加实例终端节点连接白名单
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {EndpointPermissionList} addEndpointPermissionsRequestBody 添加实例终端节点服务的白名单请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addEndpointPermissions(addEndpointPermissionsRequest?: AddEndpointPermissionsRequest): Promise<AddEndpointPermissionsResponse> {
        const options = ParamCreater().addEndpointPermissions(addEndpointPermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['x-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例开启公网出口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启实例公网出口
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {OpenEngressEipReq} addEngressEipV2RequestBody 开启公网出口的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addEngressEipV2(addEngressEipV2Request?: AddEngressEipV2Request): Promise<AddEngressEipV2Response> {
        const options = ParamCreater().addEngressEipV2(addEngressEipV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启实例开启公网入口，仅当实例为ELB类型时支持
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启实例公网入口
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {OpenIngressEipReq} addIngressEipV2RequestBody 开启公网入口的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addIngressEipV2(addIngressEipV2Request?: AddIngressEipV2Request): Promise<AddIngressEipV2Response> {
        const options = ParamCreater().addIngressEipV2(addIngressEipV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 凭据配额绑定凭据列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 凭据配额绑定凭据列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appQuotaId 凭据配额编号
     * @param {CreateAppQuotaBindingApp} associateAppsForAppQuotaRequestBody 凭据配额绑定请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateAppsForAppQuota(associateAppsForAppQuotaRequest?: AssociateAppsForAppQuotaRequest): Promise<AssociateAppsForAppQuotaResponse> {
        const options = ParamCreater().associateAppsForAppQuota(associateAppsForAppQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 如果创建API时，“定义API请求”使用HTTPS请求协议，那么在独立域名中需要添加SSL证书。
     * 使用实例自定义入方向端口的特性时，相同的域名会同时绑定证书，注意开启/关闭客户端校验会对相同域名的不同端口同时生效。
     * 本章节主要介绍为特定域名绑定证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定域名证书
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {string} domainId 域名的编号
     * @param {CertForm} associateCertificateV2RequestBody 绑定域名证书的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateCertificateV2(associateCertificateV2Request?: AssociateCertificateV2Request): Promise<AssociateCertificateV2Response> {
        const options = ParamCreater().associateCertificateV2(associateCertificateV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户自定义的域名，需要增加A记录才能生效，具体方法请参见《云解析服务用户指南》的“添加A类型记录集”章节。
     * 
     * 每个API分组下最多可绑定5个域名。绑定域名后，用户可通过自定义域名调用API。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定域名
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {UrlDomainCreate} associateDomainV2RequestBody 绑定域名的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateDomainV2(associateDomainV2Request?: AssociateDomainV2Request): Promise<AssociateDomainV2Response> {
        const options = ParamCreater().associateDomainV2(associateDomainV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 签名密钥创建后，需要绑定到API才能生效。
     * 
     * 
     * 将签名密钥绑定到API后，则API网关请求后端服务时就会使用这个签名密钥进行加密签名，后端服务可以校验这个签名来验证请求来源。
     * 
     * 
     * 将指定的签名密钥绑定到一个或多个已发布的API上。同一个API发布到不同的环境可以绑定不同的签名密钥；一个API在发布到特定环境后只能绑定一个签名密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定签名密钥
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {SignApiBinding} associateSignatureKeyV2RequestBody 绑定签名密钥的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateSignatureKeyV2(associateSignatureKeyV2Request?: AssociateSignatureKeyV2Request): Promise<AssociateSignatureKeyV2Response> {
        const options = ParamCreater().associateSignatureKeyV2(associateSignatureKeyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 绑定插件到API上。
     * - 只能选择发布状态的API
     * - 绑定以后及时生效
     * - 修改插件后及时生效
     * - 相同类型的插件只能绑定一个，如果再次绑定同类型的插件，那么已绑定的同类型插件将直接被覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 插件绑定API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} pluginId 插件编号
     * @param {PluginOperApiInfo} attachApiToPluginRequestBody 插件绑定API请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachApiToPlugin(attachApiToPluginRequest?: AttachApiToPluginRequest): Promise<AttachApiToPluginResponse> {
        const options = ParamCreater().attachApiToPlugin(attachApiToPluginRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 绑定插件到API上。
     * - 只能选择发布状态的API
     * - 绑定以后及时生效
     * - 修改插件后及时生效
     * - 相同类型的插件只能绑定一个，如果再次绑定同类型的插件，那么已绑定的同类型插件将直接被覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary API绑定插件
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API编号
     * @param {ApiOperPluginInfo} attachPluginToApiRequestBody 插件绑定API请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachPluginToApi(attachPluginToApiRequest?: AttachPluginToApiRequest): Promise<AttachPluginToApiResponse> {
        const options = ParamCreater().attachPluginToApi(attachPluginToApiRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加或删除单个实例的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加或删除单个实例的标签
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {TmsUpdatePublicReq} batchCreateOrDeleteInstanceTagsRequestBody 批量添加或删除标签的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateOrDeleteInstanceTags(batchCreateOrDeleteInstanceTagsRequest?: BatchCreateOrDeleteInstanceTagsRequest): Promise<BatchCreateOrDeleteInstanceTagsResponse> {
        const options = ParamCreater().batchCreateOrDeleteInstanceTags(batchCreateOrDeleteInstanceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验app是否存在，非APP所有者可以调用该接口校验APP是否真实存在。这个接口只展示app的基本信息id 、name、
     * remark，其他信息不显示。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验APP
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkAppV2(checkAppV2Request?: CheckAppV2Request): Promise<CheckAppV2Response> {
        const options = ParamCreater().checkAppV2(checkAppV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * APP即应用，是一个可以访问API的身份标识。将API授权给APP后，APP即可调用API。
     * 创建一个APP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建APP
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {AppCreate} createAnAppV2RequestBody 创建APP的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAnAppV2(createAnAppV2Request?: CreateAnAppV2Request): Promise<CreateAnAppV2Response> {
        const options = ParamCreater().createAnAppV2(createAnAppV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建App Code时，可以不指定具体值，由后台自动生成随机字符串填充。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 自动生成APP Code
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAppCodeAutoV2(createAppCodeAutoV2Request?: CreateAppCodeAutoV2Request): Promise<CreateAppCodeAutoV2Response> {
        const options = ParamCreater().createAppCodeAutoV2(createAppCodeAutoV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * App Code为APP应用下的子模块，创建App Code之后，可以实现简易的APP认证。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建APP Code
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {AppCodeCreate} createAppCodeV2RequestBody 创建APP Code的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAppCodeV2(createAppCodeV2Request?: CreateAppCodeV2Request): Promise<CreateAppCodeV2Response> {
        const options = ParamCreater().createAppCodeV2(createAppCodeV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建凭据配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建凭据配额
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {AppQuotaCreate} createAppQuotaRequestBody 创建凭据配额策略的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAppQuota(createAppQuotaRequest?: CreateAppQuotaRequest): Promise<CreateAppQuotaResponse> {
        const options = ParamCreater().createAppQuota(createAppQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建自定义认证
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义认证
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {AuthorizerCreate} createCustomAuthorizerV2RequestBody 创建自定义认证请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCustomAuthorizerV2(createCustomAuthorizerV2Request?: CreateCustomAuthorizerV2Request): Promise<CreateCustomAuthorizerV2Response> {
        const options = ParamCreater().createCustomAuthorizerV2(createCustomAuthorizerV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在实际的生产中，API提供者可能有多个环境，如开发环境、测试环境、生产环境等，用户可以自由将API发布到某个环境，供调用者调用。
     * 
     * 
     * 对于不同的环境，API的版本、请求地址甚至于包括请求消息等均有可能不同。如：某个API，v1.0的版本为稳定版本，发布到了生产环境供生产使用，同时，该API正处于迭代中，v1.1的版本是开发人员交付测试人员进行测试的版本，发布在测试环境上，而v1.2的版本目前开发团队正处于开发过程中，可以发布到开发环境进行自测等。
     * 
     * 
     * 为此，API网关提供多环境管理功能，使租户能够最大化的模拟实际场景，低成本的接入API网关。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建环境
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {EnvCreate} createEnvironmentV2RequestBody 创建环境的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEnvironmentV2(createEnvironmentV2Request?: CreateEnvironmentV2Request): Promise<CreateEnvironmentV2Response> {
        const options = ParamCreater().createEnvironmentV2(createEnvironmentV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将API发布到不同的环境后，对于不同的环境，可能会有不同的环境变量，比如，API的服务部署地址，请求的版本号等。
     * 
     * 
     * 用户可以定义不同的环境变量，用户在定义API时，在API的定义中使用这些变量，当调用API时，API网关会将这些变量替换成真实的变量值，以达到不同环境的区分效果。
     * 
     * 
     * 环境变量定义在API分组上，该分组下的所有API都可以使用这些变量。
     * 
     * &gt; 1. 环境变量的变量名称必须保持唯一，即一个分组在同一个环境上不能有两个同名的变量。
     * &gt; 2. 环境变量区分大小写，即变量ABC与变量abc是两个不同的变量。
     * &gt; 3. 设置了环境变量后，使用到该变量的API的调试功能将不可使用。
     * &gt; 4. 定义了环境变量后，使用到环境变量的地方应该以对称的#标识环境变量，当API发布到相应的环境后，会对环境变量的值进行替换，如：定义的API的URL为：https://#address#:8080，环境变量address在RELEASE环境上的值为：192.168.1.5，则API发布到RELEASE环境后的真实的URL为：https://192.168.1.5:8080。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建变量
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {EnvVariableCreate} createEnvironmentVariableV2RequestBody 创建环境变量的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEnvironmentVariableV2(createEnvironmentVariableV2Request?: CreateEnvironmentVariableV2Request): Promise<CreateEnvironmentVariableV2Response> {
        const options = ParamCreater().createEnvironmentVariableV2(createEnvironmentVariableV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为实例配置需要的特性。
     * 
     * 支持配置的特性列表及特性配置示例请参考本手册中的“附录 &gt; 实例支持的APIG特性”章节。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例配置特性
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {FeatureToggle} createFeatureV2RequestBody 配置实例特性的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFeatureV2(createFeatureV2Request?: CreateFeatureV2Request): Promise<CreateFeatureV2Response> {
        const options = ParamCreater().createFeatureV2(createFeatureV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增分组下自定义响应
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建分组自定义响应
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {ResponsesCreate} createGatewayResponseV2RequestBody 创建分组自定义响应的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGatewayResponseV2(createGatewayResponseV2Request?: CreateGatewayResponseV2Request): Promise<CreateGatewayResponseV2Response> {
        const options = ParamCreater().createGatewayResponseV2(createGatewayResponseV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建按需专享版实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建专享版实例（按需）
     * @param {InstanceCreateReq} createInstanceV2RequestBody 创建按需专享版实例的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceV2(createInstanceV2Request?: CreateInstanceV2Request): Promise<CreateInstanceV2Response> {
        const options = ParamCreater().createInstanceV2(createInstanceV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建编排规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建编排规则
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {OrchestrationCreate} createOrchestrationRequestBody 创建编排规则的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrchestration(createOrchestrationRequest?: CreateOrchestrationRequest): Promise<CreateOrchestrationResponse> {
        const options = ParamCreater().createOrchestration(createOrchestrationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建包周期专享版实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建专享版实例（包周期）
     * @param {InstanceOrderReq} createOrderRequestBody 创建包周期专享版实例的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrder(createOrderRequest?: CreateOrderRequest): Promise<CreateOrderResponse> {
        const options = ParamCreater().createOrder(createOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建插件信息。
     * - 插件不允许重名
     * - 插件创建后未绑定API前是无意义的，绑定API后，对绑定的API即时生效
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建插件
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {PluginCreate} createPluginRequestBody 创建插件的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPlugin(createPluginRequest?: CreatePluginRequest): Promise<CreatePluginResponse> {
        const options = ParamCreater().createPlugin(createPluginRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建按需规格变更订单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按需规格变更
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {ResizeInstanceReq} createPostPayResizeOrderRequestBody 按需规格变更的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostPayResizeOrder(createPostPayResizeOrderRequest?: CreatePostPayResizeOrderRequest): Promise<CreatePostPayResizeOrderResponse> {
        const options = ParamCreater().createPostPayResizeOrder(createPostPayResizeOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建包周期规格变更订单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建包周期规格变更订单
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {InstanceChangeOrderReq} createPrepayResizeRequestBody 创建包周期规格变更订单的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrepayResize(createPrepayResizeRequest?: CreatePrepayResizeRequest): Promise<CreatePrepayResizeResponse> {
        const options = ParamCreater().createPrepayResize(createPrepayResizeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当API上线后，系统会默认给每个API提供一个流控策略，API提供者可以根据自身API的服务能力及负载情况变更这个流控策略。
     * 流控策略即限制API在一定长度的时间内，能够允许被访问的最大次数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建流控策略
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {ThrottleBaseInfo} createRequestThrottlingPolicyV2RequestBody 创建流控策略的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRequestThrottlingPolicyV2(createRequestThrottlingPolicyV2Request?: CreateRequestThrottlingPolicyV2Request): Promise<CreateRequestThrottlingPolicyV2Response> {
        const options = ParamCreater().createRequestThrottlingPolicyV2(createRequestThrottlingPolicyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为了保护API的安全性，建议租户为API的访问提供一套保护机制，即租户开放的API，需要对请求来源进行认证，不符合认证的请求直接拒绝访问。
     * 
     * 
     * 其中，签名密钥就是API安全保护机制的一种。
     * 
     * 
     * 租户创建一个签名密钥，并将签名密钥与API进行绑定，则API网关在请求这个API时，就会使用绑定的签名密钥对请求参数进行数据加密，生成签名。当租户的后端服务收到请求时，可以校验这个签名，如果签名校验不通过，则该请求不是API网关发出的请求，租户可以拒绝这个请求，从而保证API的安全性，避免API被未知来源的请求攻击。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建签名密钥
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {BaseSignature} createSignatureKeyV2RequestBody 创建签名密钥的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSignatureKeyV2(createSignatureKeyV2Request?: CreateSignatureKeyV2Request): Promise<CreateSignatureKeyV2Response> {
        const options = ParamCreater().createSignatureKeyV2(createSignatureKeyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 流控策略可以限制一段时间内可以访问API的最大次数，也可以限制一段时间内单个租户和单个APP可以访问API的最大次数。
     * 
     * 如果想要对某个特定的APP进行特殊设置，例如设置所有APP每分钟的访问次数为500次，但想设置APP1每分钟的访问次数为800次，可以通过在流控策略中设置特殊APP来实现该功能。
     * 
     * 为流控策略添加一个特殊设置的对象，可以是APP，也可以是租户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建特殊设置
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} throttleId 流控策略的编号
     * @param {ThrottleSpecialCreate} createSpecialThrottlingConfigurationV2RequestBody 创建特殊设置的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSpecialThrottlingConfigurationV2(createSpecialThrottlingConfigurationV2Request?: CreateSpecialThrottlingConfigurationV2Request): Promise<CreateSpecialThrottlingConfigurationV2Response> {
        const options = ParamCreater().createSpecialThrottlingConfigurationV2(createSpecialThrottlingConfigurationV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除凭据的访问控制信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除APP的访问控制
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAppAcl(deleteAppAclRequest?: DeleteAppAclRequest): Promise<DeleteAppAclResponse> {
        const options = ParamCreater().deleteAppAcl(deleteAppAclRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除App Code，App Code删除后，将无法再通过简易认证访问对应的API。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除APP Code
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {string} appCodeId APP Code编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAppCodeV2(deleteAppCodeV2Request?: DeleteAppCodeV2Request): Promise<DeleteAppCodeV2Response> {
        const options = ParamCreater().deleteAppCodeV2(deleteAppCodeV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除凭据配额。删除凭据配额时，同时删除凭据配额和凭据的关联关系
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除凭据配额
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appQuotaId 凭据配额编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAppQuota(deleteAppQuotaRequest?: DeleteAppQuotaRequest): Promise<DeleteAppQuotaResponse> {
        const options = ParamCreater().deleteAppQuota(deleteAppQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的APP。
     * APP删除后，将无法再调用任何API[；其中，云商店自动创建的APP无法被删除](tag:hws)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除APP
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAppV2(deleteAppV2Request?: DeleteAppV2Request): Promise<DeleteAppV2Response> {
        const options = ParamCreater().deleteAppV2(deleteAppV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除自定义认证
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义认证
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} authorizerId 自定义认证的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCustomAuthorizerV2(deleteCustomAuthorizerV2Request?: DeleteCustomAuthorizerV2Request): Promise<DeleteCustomAuthorizerV2Response> {
        const options = ParamCreater().deleteCustomAuthorizerV2(deleteCustomAuthorizerV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除实例指定的自定义入方向端口，不包含默认端口80和443。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除实例指定的自定义入方向端口
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} ingressPortId 实例自定义入方向端口ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCustomIngressPort(deleteCustomIngressPortRequest?: DeleteCustomIngressPortRequest): Promise<DeleteCustomIngressPortResponse> {
        const options = ParamCreater().deleteCustomIngressPort(deleteCustomIngressPortRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除实例终端节点连接白名单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除实例终端节点连接白名单
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {EndpointPermissionList} deleteEndpointPermissionsRequestBody 删除实例终端节点服务的白名单请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEndpointPermissions(deleteEndpointPermissionsRequest?: DeleteEndpointPermissionsRequest): Promise<DeleteEndpointPermissionsResponse> {
        const options = ParamCreater().deleteEndpointPermissions(deleteEndpointPermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['x-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的环境。
     * 
     * 该操作将导致此API在指定的环境无法被访问，可能会影响相当一部分应用和用户。请确保已经告知用户，或者确认需要强制下线。
     * 
     * 环境上存在已发布的API时，该环境不能被删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除环境
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} envId 环境的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEnvironmentV2(deleteEnvironmentV2Request?: DeleteEnvironmentV2Request): Promise<DeleteEnvironmentV2Response> {
        const options = ParamCreater().deleteEnvironmentV2(deleteEnvironmentV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的环境变量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除变量
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} envVariableId 环境变量的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEnvironmentVariableV2(deleteEnvironmentVariableV2Request?: DeleteEnvironmentVariableV2Request): Promise<DeleteEnvironmentVariableV2Response> {
        const options = ParamCreater().deleteEnvironmentVariableV2(deleteEnvironmentVariableV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除分组指定错误类型的自定义响应配置，还原为使用默认值的配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除分组指定错误类型的自定义响应配置
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {string} responseId 响应编号
     * @param {'AUTH_FAILURE' | 'AUTH_HEADER_MISSING' | 'AUTHORIZER_FAILURE' | 'AUTHORIZER_CONF_FAILURE' | 'AUTHORIZER_IDENTITIES_FAILURE' | 'BACKEND_UNAVAILABLE' | 'BACKEND_TIMEOUT' | 'THROTTLED' | 'UNAUTHORIZED' | 'ACCESS_DENIED' | 'NOT_FOUND' | 'REQUEST_PARAMETERS_FAILURE' | 'DEFAULT_4XX' | 'DEFAULT_5XX' | 'THIRD_AUTH_FAILURE' | 'THIRD_AUTH_IDENTITIES_FAILURE' | 'THIRD_AUTH_CONF_FAILURE' | 'ORCHESTRATION_PARAMETER_NOT_FOUND' | 'ORCHESTRATION_FAILURE'} responseType 错误类型 - AUTH_FAILURE: 认证失败，IAM或APP认证校验失败 - AUTH_HEADER_MISSING: 认证身份来源信息缺失 - AUTHORIZER_FAILURE: 自定义认证方返回认证失败 - AUTHORIZER_CONF_FAILURE:自定义认证方异常，通信失败、返回异常响应等错误 - AUTHORIZER_IDENTITIES_FAILURE: 前端自定义认证的身份来源信息缺失或不合法错误 - BACKEND_UNAVAILABLE: 后端不可用，网络不可达错误 - BACKEND_TIMEOUT: 后端超时，与后端的网络交互超过预配置的时间错误 - THROTTLED: API调用次数超出所配置的流量策略阈值 - UNAUTHORIZED: 使用的凭据未被授权访问该API - ACCESS_DENIED: 拒绝访问，如触发配置的访问控制策略、或异常攻击检测拦截 - NOT_FOUND: 未匹配到API错误 - REQUEST_PARAMETERS_FAILURE: 请求参数校验失败、不支持的HTTP方法 - DEFAULT_4XX: 其它4XX类错误 - DEFAULT_5XX: 其它5XX类错误 - THIRD_AUTH_FAILURE: 第三方认证方返回认证失败 - THIRD_AUTH_IDENTITIES_FAILURE: 第三方认证的身份来源信息缺失或不合法错误 - THIRD_AUTH_CONF_FAILURE: 第三方认证方异常，通信失败、返回异常响应等错误 - ORCHESTRATION_PARAMETER_NOT_FOUND: 参数编排失败，请求中没有待编排的入参 - ORCHESTRATION_FAILURE: 参数编排失败，没有编排规则匹配成功
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGatewayResponseTypeV2(deleteGatewayResponseTypeV2Request?: DeleteGatewayResponseTypeV2Request): Promise<DeleteGatewayResponseTypeV2Response> {
        const options = ParamCreater().deleteGatewayResponseTypeV2(deleteGatewayResponseTypeV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除分组自定义响应
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除分组自定义响应
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {string} responseId 响应编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGatewayResponseV2(deleteGatewayResponseV2Request?: DeleteGatewayResponseV2Request): Promise<DeleteGatewayResponseV2Response> {
        const options = ParamCreater().deleteGatewayResponseV2(deleteGatewayResponseV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除专享版实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除专享版实例
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstancesV2(deleteInstancesV2Request?: DeleteInstancesV2Request): Promise<DeleteInstancesV2Response> {
        const options = ParamCreater().deleteInstancesV2(deleteInstancesV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除编排规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除编排规则
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} orchestrationId 编排规则编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteOrchestration(deleteOrchestrationRequest?: DeleteOrchestrationRequest): Promise<DeleteOrchestrationResponse> {
        const options = ParamCreater().deleteOrchestration(deleteOrchestrationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除插件。
     * - 必须先解除API和插件的绑定关系，否则删除报错
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除插件
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} pluginId 插件编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePlugin(deletePluginRequest?: DeletePluginRequest): Promise<DeletePluginResponse> {
        const options = ParamCreater().deletePlugin(deletePluginRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的流控策略，以及该流控策略与API的所有绑定关系。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除流控策略
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} throttleId 流控策略的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRequestThrottlingPolicyV2(deleteRequestThrottlingPolicyV2Request?: DeleteRequestThrottlingPolicyV2Request): Promise<DeleteRequestThrottlingPolicyV2Response> {
        const options = ParamCreater().deleteRequestThrottlingPolicyV2(deleteRequestThrottlingPolicyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的签名密钥，删除签名密钥时，其配置的绑定关系会一并删除，相应的签名密钥会失效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除签名密钥
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} signId 签名密钥编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSignatureKeyV2(deleteSignatureKeyV2Request?: DeleteSignatureKeyV2Request): Promise<DeleteSignatureKeyV2Response> {
        const options = ParamCreater().deleteSignatureKeyV2(deleteSignatureKeyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除某个流控策略的某个特殊配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除特殊设置
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} throttleId 流控策略的编号
     * @param {string} strategyId 特殊配置的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSpecialThrottlingConfigurationV2(deleteSpecialThrottlingConfigurationV2Request?: DeleteSpecialThrottlingConfigurationV2Request): Promise<DeleteSpecialThrottlingConfigurationV2Response> {
        const options = ParamCreater().deleteSpecialThrottlingConfigurationV2(deleteSpecialThrottlingConfigurationV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除绑定在插件上的API。
     * - 解绑及时生效
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除绑定插件的API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} pluginId 插件编号
     * @param {PluginOperApiInfo} detachApiFromPluginRequestBody 插件解绑API请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachApiFromPlugin(detachApiFromPluginRequest?: DetachApiFromPluginRequest): Promise<DetachApiFromPluginResponse> {
        const options = ParamCreater().detachApiFromPlugin(detachApiFromPluginRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除绑定在API上的插件。
     * - 解绑及时生效
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除绑定API的插件
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API编号
     * @param {ApiOperPluginInfo} detachPluginFromApiRequestBody 插件解绑API请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachPluginFromApi(detachPluginFromApiRequest?: DetachPluginFromApiRequest): Promise<DetachPluginFromApiResponse> {
        const options = ParamCreater().detachPluginFromApi(detachPluginFromApiRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除凭据配额和凭据的绑定
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除凭据配额和凭据的绑定
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appQuotaId 凭据配额编号
     * @param {string} appId 应用编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateAppQuotaWithApp(disassociateAppQuotaWithAppRequest?: DisassociateAppQuotaWithAppRequest): Promise<DisassociateAppQuotaWithAppResponse> {
        const options = ParamCreater().disassociateAppQuotaWithApp(disassociateAppQuotaWithAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 如果域名证书不再需要或者已过期，则可以删除证书内容。在使用自定义入方向端口的特性时，相同的域名会同时解绑证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除域名证书
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {string} domainId 域名的编号
     * @param {string} certificateId 证书的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateCertificateV2(disassociateCertificateV2Request?: DisassociateCertificateV2Request): Promise<DisassociateCertificateV2Response> {
        const options = ParamCreater().disassociateCertificateV2(disassociateCertificateV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 如果API分组不再需要绑定某个自定义域名，则可以为此API分组解绑此域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑域名
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {string} domainId 域名的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateDomainV2(disassociateDomainV2Request?: DisassociateDomainV2Request): Promise<DisassociateDomainV2Response> {
        const options = ParamCreater().disassociateDomainV2(disassociateDomainV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除API与签名密钥的绑定关系。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除API与签名密钥的绑定关系
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} signBindingsId API与签名密钥的绑定关系编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateSignatureKeyV2(disassociateSignatureKeyV2Request?: DisassociateSignatureKeyV2Request): Promise<DisassociateSignatureKeyV2Response> {
        const options = ParamCreater().disassociateSignatureKeyV2(disassociateSignatureKeyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出分组下API的定义信息。导出文件内容符合swagger标准规范，API网关自定义扩展字段请参考《API网关用户指南》的“导入导出API：扩展定义”章节。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 异步导出API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {ExportOpenApiReq} exportApiDefinitionsAsyncRequestBody 批量导出API的请求体
     * @param {'2.0' | '3.0'} [oasVersion] OpenAPI版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportApiDefinitionsAsync(exportApiDefinitionsAsyncRequest?: ExportApiDefinitionsAsyncRequest): Promise<ExportApiDefinitionsAsyncResponse> {
        const options = ParamCreater().exportApiDefinitionsAsync(exportApiDefinitionsAsyncRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导入API。导入文件内容需要符合swagger标准规范，API网关自定义扩展字段请参考《API网关用户指南》的“导入导出API：扩展定义”章节。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 异步导入API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {any} fileName 导入Api的请求体，json或yaml格式的文件
     * @param {boolean} [isCreateGroup] 是否创建新分组
     * @param {string} [groupId] API分组编号，当is_create_group&#x3D;false时为必填
     * @param {string} [extendMode] 扩展信息导入模式 - merge：当扩展信息定义冲突时，merge保留原有扩展信息 - override：当扩展信息定义冲突时，override会覆盖原有扩展信息
     * @param {boolean} [simpleMode] 是否开启简易导入模式
     * @param {boolean} [mockMode] 是否开启Mock后端
     * @param {string} [apiMode] 导入模式 - merge：当API信息定义冲突时，merge保留原有API信息 - override：当API信息定义冲突时，override会覆盖原有API信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importApiDefinitionsAsync(importApiDefinitionsAsyncRequest?: ImportApiDefinitionsAsyncRequest): Promise<ImportApiDefinitionsAsyncResponse> {
        const options = ParamCreater().importApiDefinitionsAsync(importApiDefinitionsAsyncRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导入微服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入微服务
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {MicroserviceImportReq} importMicroserviceRequestBody 导入微服务的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importMicroservice(importMicroserviceRequest?: ImportMicroserviceRequest): Promise<ImportMicroserviceResponse> {
        const options = ParamCreater().importMicroservice(importMicroserviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可绑定当前API的插件信息。
     * - 支持分页返回
     * - 支持插件名称模糊查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可绑定当前API的插件
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [envId] 发布的环境编号
     * @param {string} [pluginName] 插件名称
     * @param {string} [pluginType] 插件类型
     * @param {string} [pluginId] 插件编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiAttachablePlugins(listApiAttachablePluginsRequest?: ListApiAttachablePluginsRequest): Promise<ListApiAttachablePluginsResponse> {
        const options = ParamCreater().listApiAttachablePlugins(listApiAttachablePluginsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定API下绑定的插件信息。
     * - 用于查询指定API下已经绑定的插件列表信息
     * - 支持分页返回
     * - 支持插件名称模糊查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API下绑定的插件
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [envId] 发布的环境编号
     * @param {string} [pluginName] 插件名称
     * @param {string} [pluginId] 插件编号
     * @param {string} [envName] 环境名称
     * @param {string} [pluginType] 插件类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiAttachedPlugins(listApiAttachedPluginsRequest?: ListApiAttachedPluginsRequest): Promise<ListApiAttachedPluginsResponse> {
        const options = ParamCreater().listApiAttachedPlugins(listApiAttachedPluginsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户名下的API分组概况。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API分组概况
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiGroupsQuantitiesV2(listApiGroupsQuantitiesV2Request?: ListApiGroupsQuantitiesV2Request): Promise<ListApiGroupsQuantitiesV2Response> {
        const options = ParamCreater().listApiGroupsQuantitiesV2(listApiGroupsQuantitiesV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户名下的API概况：已发布到RELEASE环境的API个数，未发布到RELEASE环境的API个数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API概况
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiQuantitiesV2(listApiQuantitiesV2Request?: ListApiQuantitiesV2Request): Promise<ListApiQuantitiesV2Response> {
        const options = ParamCreater().listApiQuantitiesV2(listApiQuantitiesV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某个签名密钥上已经绑定的API列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看签名密钥绑定的API列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} signId 签名密钥编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [envId] 环境编号
     * @param {string} [apiId] API的编号
     * @param {string} [apiName] API名称
     * @param {string} [groupId] API分组编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApisBindedToSignatureKeyV2(listApisBindedToSignatureKeyV2Request?: ListApisBindedToSignatureKeyV2Request): Promise<ListApisBindedToSignatureKeyV2Response> {
        const options = ParamCreater().listApisBindedToSignatureKeyV2(listApisBindedToSignatureKeyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有未绑定到该签名密钥上的API列表。需要API已经发布，未发布的API不予展示。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看签名密钥未绑定的API列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} signId 签名密钥编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [envId] 环境编号
     * @param {string} [apiId] API编号
     * @param {string} [apiName] API名称
     * @param {string} [groupId] API分组编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApisNotBoundWithSignatureKeyV2(listApisNotBoundWithSignatureKeyV2Request?: ListApisNotBoundWithSignatureKeyV2Request): Promise<ListApisNotBoundWithSignatureKeyV2Response> {
        const options = ParamCreater().listApisNotBoundWithSignatureKeyV2(listApisNotBoundWithSignatureKeyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询App Code列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询APP Code列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppCodesV2(listAppCodesV2Request?: ListAppCodesV2Request): Promise<ListAppCodesV2Response> {
        const options = ParamCreater().listAppCodesV2(listAppCodesV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户名下的APP概况：已进行API访问授权的APP个数，未进行API访问授权的APP个数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询APP概况
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppQuantitiesV2(listAppQuantitiesV2Request?: ListAppQuantitiesV2Request): Promise<ListAppQuantitiesV2Response> {
        const options = ParamCreater().listAppQuantitiesV2(listAppQuantitiesV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询凭据配额可绑定的凭据列表。支持按凭据名称模糊搜索
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据配额可绑定的凭据列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appQuotaId 凭据配额编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [appName] 应用名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppQuotaBindableApps(listAppQuotaBindableAppsRequest?: ListAppQuotaBindableAppsRequest): Promise<ListAppQuotaBindableAppsResponse> {
        const options = ParamCreater().listAppQuotaBindableApps(listAppQuotaBindableAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询凭据配额已绑定的凭据列表。支持按凭据名称模糊匹配
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据配额已绑定的凭据列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appQuotaId 凭据配额编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [appName] 凭据名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppQuotaBoundApps(listAppQuotaBoundAppsRequest?: ListAppQuotaBoundAppsRequest): Promise<ListAppQuotaBoundAppsResponse> {
        const options = ParamCreater().listAppQuotaBoundApps(listAppQuotaBoundAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取凭据配额列表。支持根据名称模糊查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取凭据配额列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [name] 凭据配额名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppQuotas(listAppQuotasRequest?: ListAppQuotasRequest): Promise<ListAppQuotasResponse> {
        const options = ParamCreater().listAppQuotas(listAppQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询APP列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询APP列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [id] APP编号
     * @param {string} [name] APP名称
     * @param {number} [status] APP状态
     * @param {string} [appKey] APP的KEY
     * @param {string} [creator] APP的创建者。 - USER：用户自行创建 - MARKET：[云商店分配](tag:hws)[暂未使用](tag:cmcc,ctc,DT,g42,hk_g42,hk_sbc,hk_tm,hws_eu,hws_ocb,OCB,sbc,tm,hws_hk)
     * @param {string} [preciseSearch] 指定需要精确匹配查找的参数名称，目前仅支持name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppsV2(listAppsV2Request?: ListAppsV2Request): Promise<ListAppsV2Response> {
        const options = ParamCreater().listAppsV2(listAppsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看可用区信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看可用区信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableZonesV2(listAvailableZonesV2Request?: ListAvailableZonesV2Request): Promise<ListAvailableZonesV2Response> {
        const options = ParamCreater().listAvailableZonesV2();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自定义认证列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义认证列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [id] 编号
     * @param {string} [name] 名称
     * @param {string} [type] 类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCustomAuthorizersV2(listCustomAuthorizersV2Request?: ListCustomAuthorizersV2Request): Promise<ListCustomAuthorizersV2Response> {
        const options = ParamCreater().listCustomAuthorizersV2(listCustomAuthorizersV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例指定的自定义入方向端口绑定的域名信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例指定的自定义入方向端口绑定的域名信息
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} ingressPortId 实例自定义入方向端口ID。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [domainName] 使用入方向端口的域名。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCustomIngressPortDomains(listCustomIngressPortDomainsRequest?: ListCustomIngressPortDomainsRequest): Promise<ListCustomIngressPortDomainsResponse> {
        const options = ParamCreater().listCustomIngressPortDomains(listCustomIngressPortDomainsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例的自定义入方向端口列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的自定义入方向端口列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {'HTTP' | 'HTTPS'} [protocol] 入方向端口的请求协议。 - HTTP: 入方向端口为HTTP协议。 - HTTPS: 入方向端口为HTTPS协议。 
     * @param {number} [ingressPort] 入方向端口的端口号，支持的端口范围为1024~49151。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCustomIngressPorts(listCustomIngressPortsRequest?: ListCustomIngressPortsRequest): Promise<ListCustomIngressPortsResponse> {
        const options = ParamCreater().listCustomIngressPorts(listCustomIngressPortsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例终端节点连接列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例终端节点连接列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [id] 终端节点的ID，唯一标识
     * @param {number} [markerId] 终端节点的报文标识
     * @param {'pendingAcceptance' | 'accepted' | 'rejected' | 'failed'} [status] 终端节点的连接状态 - pendingAcceptance 待接受 - accepted 已接受 - rejected 已拒绝 - failed 失败
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEndpointConnections(listEndpointConnectionsRequest?: ListEndpointConnectionsRequest): Promise<ListEndpointConnectionsResponse> {
        const options = ParamCreater().listEndpointConnections(listEndpointConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['x-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前实例终端节点服务的白名单列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例的终端节点服务的白名单列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [permission] 权限账号ID，格式为“iam:domain::domain_id”，支持模糊搜索
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEndpointPermissions(listEndpointPermissionsRequest?: ListEndpointPermissionsRequest): Promise<ListEndpointPermissionsResponse> {
        const options = ParamCreater().listEndpointPermissions(listEndpointPermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['x-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分组下的所有环境变量的列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询变量列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId API分组编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [envId] 环境编号
     * @param {string} [variableName] 变量名
     * @param {string} [preciseSearch] 指定需要精确匹配查找的参数名称，目前仅支持variable_name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnvironmentVariablesV2(listEnvironmentVariablesV2Request?: ListEnvironmentVariablesV2Request): Promise<ListEnvironmentVariablesV2Response> {
        const options = ParamCreater().listEnvironmentVariablesV2(listEnvironmentVariablesV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询符合条件的环境列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询环境列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [name] 环境名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnvironmentsV2(listEnvironmentsV2Request?: ListEnvironmentsV2Request): Promise<ListEnvironmentsV2Response> {
        const options = ParamCreater().listEnvironmentsV2(listEnvironmentsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看实例特性列表。注意：实例不支持以下特性的需要联系技术支持升级实例版本。
     * 
     * 支持配置的特性列表及特性配置示例请参考本手册中的“附录 &gt; 实例支持的APIG特性”章节。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看实例特性列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFeaturesV2(listFeaturesV2Request?: ListFeaturesV2Request): Promise<ListFeaturesV2Response> {
        const options = ParamCreater().listFeaturesV2(listFeaturesV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分组自定义响应列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分组自定义响应列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGatewayResponsesV2(listGatewayResponsesV2Request?: ListGatewayResponsesV2Request): Promise<ListGatewayResponsesV2Response> {
        const options = ParamCreater().listGatewayResponsesV2(listGatewayResponsesV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户实例配置列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户实例配置列表
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceConfigsV2(listInstanceConfigsV2Request?: ListInstanceConfigsV2Request): Promise<ListInstanceConfigsV2Response> {
        const options = ParamCreater().listInstanceConfigsV2(listInstanceConfigsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实例支持的特性列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例支持的特性列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstanceFeatures(listInstanceFeaturesRequest?: ListInstanceFeaturesRequest): Promise<ListInstanceFeaturesResponse> {
        const options = ParamCreater().listInstanceFeatures(listInstanceFeaturesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个实例的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个实例标签
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
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
     * 通过标签查询实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过标签查询实例列表
     * @param {TmsQueryReq} listInstancesByTagsRequestBody 通过标签查询实例列表的请求体
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstancesByTags(listInstancesByTagsRequest?: ListInstancesByTagsRequest): Promise<ListInstancesByTagsResponse> {
        const options = ParamCreater().listInstancesByTags(listInstancesByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询专享版实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询专享版实例列表
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [instanceId] 实例编号
     * @param {string} [instanceName] 实例名称
     * @param {'Creating' | 'CreateSuccess' | 'CreateFail' | 'Initing' | 'Registering' | 'Running' | 'InitingFailed' | 'RegisterFailed' | 'Installing' | 'InstallFailed' | 'Updating' | 'UpdateFailed' | 'Rollbacking' | 'RollbackSuccess' | 'RollbackFailed' | 'Deleting' | 'DeleteFailed' | 'Unregistering' | 'UnRegisterFailed' | 'CreateTimeout' | 'InitTimeout' | 'RegisterTimeout' | 'InstallTimeout' | 'UpdateTimeout' | 'RollbackTimeout' | 'DeleteTimeout' | 'UnregisterTimeout' | 'Starting' | 'Freezing' | 'Frozen' | 'Restarting' | 'RestartFail' | 'Unhealthy' | 'RestartTimeout'} [status] 实例状态： - Creating：创建中 - CreateSuccess：创建成功 - CreateFail：创建失败 - Initing：初始化中 - Registering：注册中 - Running：运行中 - InitingFailed：初始化失败 - RegisterFailed：注册失败 - Installing：安装中 - InstallFailed：安装失败 - Updating：升级中 - UpdateFailed：升级失败 - Rollbacking：回滚中 - RollbackSuccess：回滚成功 - RollbackFailed：回滚失败 - Deleting：删除中 - DeleteFailed：删除失败 - Unregistering：注销中 - UnRegisterFailed：注销失败 - CreateTimeout：创建超时 - InitTimeout：初始化超时 - RegisterTimeout：注册超时 - InstallTimeout：安装超时 - UpdateTimeout：升级超时 - RollbackTimeout：回滚超时 - DeleteTimeout：删除超时 - UnregisterTimeout：注销超时 - Starting：启动中 - Freezing：冻结中 - Frozen：已冻结 - Restarting：重启中 - RestartFail：重启失败 - Unhealthy：实例异常 - RestartTimeout：重启超时
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstancesV2(listInstancesV2Request?: ListInstancesV2Request): Promise<ListInstancesV2Response> {
        const options = ParamCreater().listInstancesV2(listInstancesV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据API的id和最近的一段时间查询API被调用的次数，统计周期为1分钟。查询范围一小时以内，一分钟一个样本，其样本值为一分钟内的累计值。
     * &gt; 为了安全起见，在服务器上使用curl命令调用接口查询信息后，需要清理历史操作记录，包括但不限于“~/.bash_history”、“/var/log/messages”（如有）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary API统计信息查询-最近一段时间
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API的编号
     * @param {string} duration 最近统计时长，单位必须为h和m，比如1h和1m，分别代表最近1小时和最近1分钟
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLatelyApiStatisticsV2(listLatelyApiStatisticsV2Request?: ListLatelyApiStatisticsV2Request): Promise<ListLatelyApiStatisticsV2Response> {
        const options = ParamCreater().listLatelyApiStatisticsV2(listLatelyApiStatisticsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据API分组的编号查询该分组下所有API被调用的总次数，统计周期为1分钟。查询范围一小时以内，一分钟一个样本，其样本值为一分钟内的累计值。
     * &gt; 为了安全起见，在服务器上使用curl命令调用接口查询信息后，需要清理历史操作记录，包括但不限于“~/.bash_history”、“/var/log/messages”（如有）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分组统计信息查询-最近一小时内
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId API分组的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLatelyGroupStatisticsV2(listLatelyGroupStatisticsV2Request?: ListLatelyGroupStatisticsV2Request): Promise<ListLatelyGroupStatisticsV2Response> {
        const options = ParamCreater().listLatelyGroupStatisticsV2(listLatelyGroupStatisticsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定时间范围指定指标的指定粒度的监控数据，可以通过参数指定需要查询的数据维度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询监控数据
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {'inbound_eip' | 'outbound_eip'} dim 指标维度 - inbound_eip：入口公网带宽，仅ELB类型实例支持 - outbound_eip：出口公网带宽
     * @param {'upstream_bandwidth' | 'downstream_bandwidth' | 'upstream_bandwidth_usage' | 'downstream_bandwidth_usage' | 'up_stream' | 'down_stream'} metricName 指标名称 - upstream_bandwidth：出网带宽 - downstream_bandwidth：入网带宽 - upstream_bandwidth_usage：出网带宽使用率 - downstream_bandwidth_usage：入网带宽使用率 - up_stream：出网流量 - down_stream：入网流量
     * @param {string} from 查询数据起始时间，UNIX时间戳，单位毫秒。
     * @param {string} to 查询数据截止时间UNIX时间戳，单位毫秒。from必须小于to。
     * @param {1 | 300 | 1200 | 3600 | 14400 | 86400} period 监控数据粒度。 - 1：实时数据 - 300：5分钟粒度 - 1200：20分钟粒度 - 3600：1小时粒度 - 14400：4小时粒度 - 86400：1天粒度
     * @param {'average' | 'max' | 'min' | 'sum' | 'variance'} filter 数据聚合方式。 - average：聚合周期内指标数据的平均值。 - max：聚合周期内指标数据的最大值。 - min：聚合周期内指标数据的最小值。 - sum：聚合周期内指标数据的求和值。 - variance：聚合周期内指标数据的方差。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMetricData(listMetricDataRequest?: ListMetricDataRequest): Promise<ListMetricDataResponse> {
        const options = ParamCreater().listMetricData(listMetricDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定插件下绑定的API信息
     * - 用于查询指定插件下已经绑定的API列表信息
     * - 支持分页返回
     * - 支持API名称模糊查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询编排规则绑定的API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} orchestrationId 编排规则编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [apiName] API名称。
     * @param {string} [apiId] API编号。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOrchestrationAttachedApis(listOrchestrationAttachedApisRequest?: ListOrchestrationAttachedApisRequest): Promise<ListOrchestrationAttachedApisResponse> {
        const options = ParamCreater().listOrchestrationAttachedApis(listOrchestrationAttachedApisRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看编排规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看编排规则列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [orchestrationName] 编排规则名称。
     * @param {string} [preciseSearch] 指定需要精确匹配查找的参数名称，多个参数需要支持精确匹配时参数之间使用“,”隔开。当前仅支持orchestration_name。
     * @param {string} [orchestrationId] 编排规则编号。  支持指定多个编号作为查询条件，多个参数之间使用“,”隔开，支持的查询参数个数与api允许绑定的参数规则上限保持一致，具体请参考产品介绍的“配额说明”章节。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOrchestrations(listOrchestrationsRequest?: ListOrchestrationsRequest): Promise<ListOrchestrationsResponse> {
        const options = ParamCreater().listOrchestrations(listOrchestrationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可绑定当前插件的API信息。
     * - 支持分页返回
     * - 支持API名称模糊查询
     * - 支持已绑定其他插件的API查询返回
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可绑定当前插件的API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} pluginId 插件编号
     * @param {string} envId 发布的环境编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [apiName] API名称
     * @param {string} [apiId] API编号
     * @param {string} [groupId] 分组编号
     * @param {string} [reqMethod] 请求方法
     * @param {string} [reqUri] 请求路径
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPluginAttachableApis(listPluginAttachableApisRequest?: ListPluginAttachableApisRequest): Promise<ListPluginAttachableApisResponse> {
        const options = ParamCreater().listPluginAttachableApis(listPluginAttachableApisRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定插件下绑定的API信息。
     * - 用于查询指定插件下已经绑定的API列表信息
     * - 支持分页返回
     * - 支持API名称模糊查询
     * - 绑定关系列表中返回的API在对应的环境中可能已经下线
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件下绑定的API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} pluginId 插件编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [envId] 发布的环境编号
     * @param {string} [apiName] API名称
     * @param {string} [apiId] API编号
     * @param {string} [groupId] 分组编号
     * @param {string} [reqMethod] 请求方法
     * @param {string} [reqUri] 请求路径
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPluginAttachedApis(listPluginAttachedApisRequest?: ListPluginAttachedApisRequest): Promise<ListPluginAttachedApisResponse> {
        const options = ParamCreater().listPluginAttachedApis(listPluginAttachedApisRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询一组符合条件的API网关插件详情。
     * - 支持分页
     * - 支持根据插件类型查询
     * - 支持根据插件可见范围查询
     * - 支持根据插件编码查询
     * - 支持根据名称模糊查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [pluginType] 插件类型
     * @param {string} [pluginScope] 插件可见范围
     * @param {string} [pluginId] 插件编码
     * @param {string} [pluginName] 插件名称，支持模糊查询
     * @param {string} [preciseSearch] 指定需要精确匹配查找的参数名称，目前支持插件名称
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
     * 查询某个实例的租户配置列表，用户可以通过此接口查看各类型资源配置及使用情况。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询某个实例的租户配置列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectCofigsV2(listProjectCofigsV2Request?: ListProjectCofigsV2Request): Promise<ListProjectCofigsV2Response> {
        const options = ParamCreater().listProjectCofigsV2(listProjectCofigsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目下所有实例标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目下所有实例标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectInstanceTags(listProjectInstanceTagsRequest?: ListProjectInstanceTagsRequest): Promise<ListProjectInstanceTagsResponse> {
        const options = ParamCreater().listProjectInstanceTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有流控策略的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流控策略列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [id] 流控策略编号
     * @param {string} [name] 流控策略名称
     * @param {string} [preciseSearch] 指定需要精确匹配查找的参数名称，目前仅支持name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRequestThrottlingPolicyV2(listRequestThrottlingPolicyV2Request?: ListRequestThrottlingPolicyV2Request): Promise<ListRequestThrottlingPolicyV2Response> {
        const options = ParamCreater().listRequestThrottlingPolicyV2(listRequestThrottlingPolicyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某个API绑定的签名密钥列表。每个API在每个环境上应该最多只会绑定一个签名密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看API绑定的签名密钥列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API的编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [signId] 签名密钥的编号
     * @param {string} [signName] 签名密钥的名称
     * @param {string} [envId] 环境编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSignatureKeysBindedToApiV2(listSignatureKeysBindedToApiV2Request?: ListSignatureKeysBindedToApiV2Request): Promise<ListSignatureKeysBindedToApiV2Response> {
        const options = ParamCreater().listSignatureKeysBindedToApiV2(listSignatureKeysBindedToApiV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有签名密钥的信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询签名密钥列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [id] 签名密钥编号
     * @param {string} [name] 签名密钥名称
     * @param {string} [preciseSearch] 指定需要精确匹配查找的参数名称，目前仅支持name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSignatureKeysV2(listSignatureKeysV2Request?: ListSignatureKeysV2Request): Promise<ListSignatureKeysV2Response> {
        const options = ParamCreater().listSignatureKeysV2(listSignatureKeysV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看给流控策略设置的特殊配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看特殊设置列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} throttleId 流控策略的编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [objectType] 特殊流控类型：APP，USER
     * @param {string} [appName] 筛选的特殊应用名称
     * @param {string} [user] 筛选的特殊用户名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSpecialThrottlingConfigurationsV2(listSpecialThrottlingConfigurationsV2Request?: ListSpecialThrottlingConfigurationsV2Request): Promise<ListSpecialThrottlingConfigurationsV2Response> {
        const options = ParamCreater().listSpecialThrottlingConfigurationsV2(listSpecialThrottlingConfigurationsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询标签列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询标签列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTagsV2(listTagsV2Request?: ListTagsV2Request): Promise<ListTagsV2Response> {
        const options = ParamCreater().listTagsV2(listTagsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 实例解绑EIP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 实例解绑EIP
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeEipV2(removeEipV2Request?: RemoveEipV2Request): Promise<RemoveEipV2Response> {
        const options = ParamCreater().removeEipV2(removeEipV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭实例公网出口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭实例公网出口
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeEngressEipV2(removeEngressEipV2Request?: RemoveEngressEipV2Request): Promise<RemoveEngressEipV2Response> {
        const options = ParamCreater().removeEngressEipV2(removeEngressEipV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭实例公网入口，仅当实例为ELB类型时支持
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭实例公网入口
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeIngressEipV2(removeIngressEipV2Request?: RemoveIngressEipV2Request): Promise<RemoveIngressEipV2Response> {
        const options = ParamCreater().removeIngressEipV2(removeIngressEipV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重置指定APP的密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置密钥
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {AppResetCreate} resettingAppSecretV2RequestBody 重置密钥的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resettingAppSecretV2(resettingAppSecretV2Request?: ResettingAppSecretV2Request): Promise<ResettingAppSecretV2Response> {
        const options = ParamCreater().resettingAppSecretV2(resettingAppSecretV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看指定凭据关联的凭据配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询凭据关联的凭据配额
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppBoundAppQuota(showAppBoundAppQuotaRequest?: ShowAppBoundAppQuotaRequest): Promise<ShowAppBoundAppQuotaResponse> {
        const options = ParamCreater().showAppBoundAppQuota(showAppBoundAppQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取凭据配额详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取凭据配额详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appQuotaId 凭据配额编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppQuota(showAppQuotaRequest?: ShowAppQuotaRequest): Promise<ShowAppQuotaResponse> {
        const options = ParamCreater().showAppQuota(showAppQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取异步任务结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取异步任务结果
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} taskId 异步任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAsyncTaskResult(showAsyncTaskResultRequest?: ShowAsyncTaskResultRequest): Promise<ShowAsyncTaskResultResponse> {
        const options = ParamCreater().showAsyncTaskResult(showAsyncTaskResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看APP的访问控制详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看APP的访问控制详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfAppAcl(showDetailsOfAppAclRequest?: ShowDetailsOfAppAclRequest): Promise<ShowDetailsOfAppAclResponse> {
        const options = ParamCreater().showDetailsOfAppAcl(showDetailsOfAppAclRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * App Code为APP应用下的子模块，创建App Code之后，可以实现简易的APP认证。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看APP Code详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {string} appCodeId APP Code编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfAppCodeV2(showDetailsOfAppCodeV2Request?: ShowDetailsOfAppCodeV2Request): Promise<ShowDetailsOfAppCodeV2Response> {
        const options = ParamCreater().showDetailsOfAppCodeV2(showDetailsOfAppCodeV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看指定APP的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看APP详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfAppV2(showDetailsOfAppV2Request?: ShowDetailsOfAppV2Request): Promise<ShowDetailsOfAppV2Response> {
        const options = ParamCreater().showDetailsOfAppV2(showDetailsOfAppV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看自定义认证详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看自定义认证详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} authorizerId 自定义认证的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfCustomAuthorizersV2(showDetailsOfCustomAuthorizersV2Request?: ShowDetailsOfCustomAuthorizersV2Request): Promise<ShowDetailsOfCustomAuthorizersV2Response> {
        const options = ParamCreater().showDetailsOfCustomAuthorizersV2(showDetailsOfCustomAuthorizersV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看域名下绑定的证书详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看域名证书
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {string} domainId 域名的编号
     * @param {string} certificateId 证书的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfDomainNameCertificateV2(showDetailsOfDomainNameCertificateV2Request?: ShowDetailsOfDomainNameCertificateV2Request): Promise<ShowDetailsOfDomainNameCertificateV2Response> {
        const options = ParamCreater().showDetailsOfDomainNameCertificateV2(showDetailsOfDomainNameCertificateV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看指定的环境变量的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看变量详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} envVariableId 环境变量的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfEnvironmentVariableV2(showDetailsOfEnvironmentVariableV2Request?: ShowDetailsOfEnvironmentVariableV2Request): Promise<ShowDetailsOfEnvironmentVariableV2Response> {
        const options = ParamCreater().showDetailsOfEnvironmentVariableV2(showDetailsOfEnvironmentVariableV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看分组下指定错误类型的自定义响应
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看分组下指定错误类型的自定义响应
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {string} responseId 响应编号
     * @param {'AUTH_FAILURE' | 'AUTH_HEADER_MISSING' | 'AUTHORIZER_FAILURE' | 'AUTHORIZER_CONF_FAILURE' | 'AUTHORIZER_IDENTITIES_FAILURE' | 'BACKEND_UNAVAILABLE' | 'BACKEND_TIMEOUT' | 'THROTTLED' | 'UNAUTHORIZED' | 'ACCESS_DENIED' | 'NOT_FOUND' | 'REQUEST_PARAMETERS_FAILURE' | 'DEFAULT_4XX' | 'DEFAULT_5XX' | 'THIRD_AUTH_FAILURE' | 'THIRD_AUTH_IDENTITIES_FAILURE' | 'THIRD_AUTH_CONF_FAILURE' | 'ORCHESTRATION_PARAMETER_NOT_FOUND' | 'ORCHESTRATION_FAILURE'} responseType 错误类型 - AUTH_FAILURE: 认证失败，IAM或APP认证校验失败 - AUTH_HEADER_MISSING: 认证身份来源信息缺失 - AUTHORIZER_FAILURE: 自定义认证方返回认证失败 - AUTHORIZER_CONF_FAILURE:自定义认证方异常，通信失败、返回异常响应等错误 - AUTHORIZER_IDENTITIES_FAILURE: 前端自定义认证的身份来源信息缺失或不合法错误 - BACKEND_UNAVAILABLE: 后端不可用，网络不可达错误 - BACKEND_TIMEOUT: 后端超时，与后端的网络交互超过预配置的时间错误 - THROTTLED: API调用次数超出所配置的流量策略阈值 - UNAUTHORIZED: 使用的凭据未被授权访问该API - ACCESS_DENIED: 拒绝访问，如触发配置的访问控制策略、或异常攻击检测拦截 - NOT_FOUND: 未匹配到API错误 - REQUEST_PARAMETERS_FAILURE: 请求参数校验失败、不支持的HTTP方法 - DEFAULT_4XX: 其它4XX类错误 - DEFAULT_5XX: 其它5XX类错误 - THIRD_AUTH_FAILURE: 第三方认证方返回认证失败 - THIRD_AUTH_IDENTITIES_FAILURE: 第三方认证的身份来源信息缺失或不合法错误 - THIRD_AUTH_CONF_FAILURE: 第三方认证方异常，通信失败、返回异常响应等错误 - ORCHESTRATION_PARAMETER_NOT_FOUND: 参数编排失败，请求中没有待编排的入参 - ORCHESTRATION_FAILURE: 参数编排失败，没有编排规则匹配成功
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfGatewayResponseTypeV2(showDetailsOfGatewayResponseTypeV2Request?: ShowDetailsOfGatewayResponseTypeV2Request): Promise<ShowDetailsOfGatewayResponseTypeV2Response> {
        const options = ParamCreater().showDetailsOfGatewayResponseTypeV2(showDetailsOfGatewayResponseTypeV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分组自定义响应详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分组自定义响应详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {string} responseId 响应编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfGatewayResponseV2(showDetailsOfGatewayResponseV2Request?: ShowDetailsOfGatewayResponseV2Request): Promise<ShowDetailsOfGatewayResponseV2Response> {
        const options = ParamCreater().showDetailsOfGatewayResponseV2(showDetailsOfGatewayResponseV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看专享版实例创建进度
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看专享版实例创建进度
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfInstanceProgressV2(showDetailsOfInstanceProgressV2Request?: ShowDetailsOfInstanceProgressV2Request): Promise<ShowDetailsOfInstanceProgressV2Response> {
        const options = ParamCreater().showDetailsOfInstanceProgressV2(showDetailsOfInstanceProgressV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看专享版实例详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看专享版实例详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfInstanceV2(showDetailsOfInstanceV2Request?: ShowDetailsOfInstanceV2Request): Promise<ShowDetailsOfInstanceV2Response> {
        const options = ParamCreater().showDetailsOfInstanceV2(showDetailsOfInstanceV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询编排规则详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询编排规则详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} orchestrationId 编排规则编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfOrchestration(showDetailsOfOrchestrationRequest?: ShowDetailsOfOrchestrationRequest): Promise<ShowDetailsOfOrchestrationResponse> {
        const options = ParamCreater().showDetailsOfOrchestration(showDetailsOfOrchestrationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看指定流控策略的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看流控策略详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} throttleId 流控策略的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfRequestThrottlingPolicyV2(showDetailsOfRequestThrottlingPolicyV2Request?: ShowDetailsOfRequestThrottlingPolicyV2Request): Promise<ShowDetailsOfRequestThrottlingPolicyV2Response> {
        const options = ParamCreater().showDetailsOfRequestThrottlingPolicyV2(showDetailsOfRequestThrottlingPolicyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询包含指定标签的实例数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询包含指定标签的实例数量
     * @param {TmsQueryReq} showInstancesNumByTagsRequestBody 通过标签查询实例数量的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInstancesNumByTags(showInstancesNumByTagsRequest?: ShowInstancesNumByTagsRequest): Promise<ShowInstancesNumByTagsResponse> {
        const options = ParamCreater().showInstancesNumByTags(showInstancesNumByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询插件详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询插件详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} pluginId 插件编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPlugin(showPluginRequest?: ShowPluginRequest): Promise<ShowPluginResponse> {
        const options = ParamCreater().showPlugin(showPluginRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看实例约束信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看实例约束信息
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRestrictionOfInstanceV2(showRestrictionOfInstanceV2Request?: ShowRestrictionOfInstanceV2Request): Promise<ShowRestrictionOfInstanceV2Response> {
        const options = ParamCreater().showRestrictionOfInstanceV2(showRestrictionOfInstanceV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置凭据的访问控制。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置APP的访问控制
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {AppAclCreate} updateAppAclRequestBody 修改APP访问控制的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAppAcl(updateAppAclRequest?: UpdateAppAclRequest): Promise<UpdateAppAclResponse> {
        const options = ParamCreater().updateAppAcl(updateAppAclRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改凭据配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改凭据配额
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appQuotaId 凭据配额编号
     * @param {AppQuotaCreate} updateAppQuotaRequestBody 更新凭据配额请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAppQuota(updateAppQuotaRequest?: UpdateAppQuotaRequest): Promise<UpdateAppQuotaResponse> {
        const options = ParamCreater().updateAppQuota(updateAppQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定APP的信息。其中可修改的属性为：name、remark，当支持用户自定义key和secret的开关开启时，app_key和app_secret也支持修改，其它属性不可修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改APP
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {AppCreate} updateAppV2RequestBody 修改APP的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAppV2(updateAppV2Request?: UpdateAppV2Request): Promise<UpdateAppV2Response> {
        const options = ParamCreater().updateAppV2(updateAppV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改自定义认证
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改自定义认证
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} authorizerId 自定义认证的编号
     * @param {AuthorizerCreate} updateCustomAuthorizerV2RequestBody 更新自定义认证请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCustomAuthorizerV2(updateCustomAuthorizerV2Request?: UpdateCustomAuthorizerV2Request): Promise<UpdateCustomAuthorizerV2Response> {
        const options = ParamCreater().updateCustomAuthorizerV2(updateCustomAuthorizerV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改绑定的域名所对应的配置信息。使用实例自定义入方向端口的特性时，注意开启/关闭客户端校验会对相同域名的不同端口同时生效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改域名
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {string} domainId 域名的编号
     * @param {UrlDomainModify} updateDomainV2RequestBody 修改域名的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainV2(updateDomainV2Request?: UpdateDomainV2Request): Promise<UpdateDomainV2Response> {
        const options = ParamCreater().updateDomainV2(updateDomainV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新实例出公网带宽
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新实例出公网带宽
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {OpenEngressEipReq} updateEngressEipV2RequestBody 更新实例出公网带宽请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEngressEipV2(updateEngressEipV2Request?: UpdateEngressEipV2Request): Promise<UpdateEngressEipV2Response> {
        const options = ParamCreater().updateEngressEipV2(updateEngressEipV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定环境的信息。其中可修改的属性为：name、remark，其它属性不可修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改环境
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} envId 环境的ID
     * @param {EnvCreate} updateEnvironmentV2RequestBody 修改环境的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEnvironmentV2(updateEnvironmentV2Request?: UpdateEnvironmentV2Request): Promise<UpdateEnvironmentV2Response> {
        const options = ParamCreater().updateEnvironmentV2(updateEnvironmentV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改环境变量。环境变量引用位置为api的后端服务地址时，修改对应环境变量会将使用该变量的所有api重新发布。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改变量
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} envVariableId 环境变量的编号
     * @param {EnvVariableBase} updateEnvironmentVariableV2RequestBody 修改环境变量的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEnvironmentVariableV2(updateEnvironmentVariableV2Request?: UpdateEnvironmentVariableV2Request): Promise<UpdateEnvironmentVariableV2Response> {
        const options = ParamCreater().updateEnvironmentVariableV2(updateEnvironmentVariableV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改分组下指定错误类型的自定义响应。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改分组下指定错误类型的自定义响应
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {string} responseId 响应编号
     * @param {'AUTH_FAILURE' | 'AUTH_HEADER_MISSING' | 'AUTHORIZER_FAILURE' | 'AUTHORIZER_CONF_FAILURE' | 'AUTHORIZER_IDENTITIES_FAILURE' | 'BACKEND_UNAVAILABLE' | 'BACKEND_TIMEOUT' | 'THROTTLED' | 'UNAUTHORIZED' | 'ACCESS_DENIED' | 'NOT_FOUND' | 'REQUEST_PARAMETERS_FAILURE' | 'DEFAULT_4XX' | 'DEFAULT_5XX' | 'THIRD_AUTH_FAILURE' | 'THIRD_AUTH_IDENTITIES_FAILURE' | 'THIRD_AUTH_CONF_FAILURE' | 'ORCHESTRATION_PARAMETER_NOT_FOUND' | 'ORCHESTRATION_FAILURE'} responseType 错误类型 - AUTH_FAILURE: 认证失败，IAM或APP认证校验失败 - AUTH_HEADER_MISSING: 认证身份来源信息缺失 - AUTHORIZER_FAILURE: 自定义认证方返回认证失败 - AUTHORIZER_CONF_FAILURE:自定义认证方异常，通信失败、返回异常响应等错误 - AUTHORIZER_IDENTITIES_FAILURE: 前端自定义认证的身份来源信息缺失或不合法错误 - BACKEND_UNAVAILABLE: 后端不可用，网络不可达错误 - BACKEND_TIMEOUT: 后端超时，与后端的网络交互超过预配置的时间错误 - THROTTLED: API调用次数超出所配置的流量策略阈值 - UNAUTHORIZED: 使用的凭据未被授权访问该API - ACCESS_DENIED: 拒绝访问，如触发配置的访问控制策略、或异常攻击检测拦截 - NOT_FOUND: 未匹配到API错误 - REQUEST_PARAMETERS_FAILURE: 请求参数校验失败、不支持的HTTP方法 - DEFAULT_4XX: 其它4XX类错误 - DEFAULT_5XX: 其它5XX类错误 - THIRD_AUTH_FAILURE: 第三方认证方返回认证失败 - THIRD_AUTH_IDENTITIES_FAILURE: 第三方认证的身份来源信息缺失或不合法错误 - THIRD_AUTH_CONF_FAILURE: 第三方认证方异常，通信失败、返回异常响应等错误 - ORCHESTRATION_PARAMETER_NOT_FOUND: 参数编排失败，请求中没有待编排的入参 - ORCHESTRATION_FAILURE: 参数编排失败，没有编排规则匹配成功
     * @param {ResponseInfo} updateGatewayResponseTypeV2RequestBody 修改分组下指定错误类型的自定义响应的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGatewayResponseTypeV2(updateGatewayResponseTypeV2Request?: UpdateGatewayResponseTypeV2Request): Promise<UpdateGatewayResponseTypeV2Response> {
        const options = ParamCreater().updateGatewayResponseTypeV2(updateGatewayResponseTypeV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改分组自定义响应
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改分组自定义响应
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {string} responseId 响应编号
     * @param {ResponsesCreate} updateGatewayResponseV2RequestBody 修改分组自定义响应的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGatewayResponseV2(updateGatewayResponseV2Request?: UpdateGatewayResponseV2Request): Promise<UpdateGatewayResponseV2Response> {
        const options = ParamCreater().updateGatewayResponseV2(updateGatewayResponseV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新实例入公网带宽，仅当实例为ELB类型时支持
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新实例入公网带宽
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {OpenIngressEipReq} updateIngressEipV2RequestBody 更新实例入公网带宽请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIngressEipV2(updateIngressEipV2Request?: UpdateIngressEipV2Request): Promise<UpdateIngressEipV2Response> {
        const options = ParamCreater().updateIngressEipV2(updateIngressEipV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新专享版实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新专享版实例
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {InstanceModReq} updateInstanceV2RequestBody 更新实例的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceV2(updateInstanceV2Request?: UpdateInstanceV2Request): Promise<UpdateInstanceV2Response> {
        const options = ParamCreater().updateInstanceV2(updateInstanceV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新编排规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新编排规则
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} orchestrationId 编排规则编号
     * @param {OrchestrationCreate} updateOrchestrationRequestBody 更新编排规则的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateOrchestration(updateOrchestrationRequest?: UpdateOrchestrationRequest): Promise<UpdateOrchestrationResponse> {
        const options = ParamCreater().updateOrchestration(updateOrchestrationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改插件信息。
     * - 插件不允许重名
     * - 插件不支持修改类型和可见范围
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改插件
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} pluginId 插件编号
     * @param {PluginCreate} updatePluginRequestBody 更新插件请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePlugin(updatePluginRequest?: UpdatePluginRequest): Promise<UpdatePluginResponse> {
        const options = ParamCreater().updatePlugin(updatePluginRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定流控策略的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改流控策略
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} throttleId 流控策略的编号
     * @param {ThrottleBaseInfo} updateRequestThrottlingPolicyV2RequestBody 修改流控策略的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRequestThrottlingPolicyV2(updateRequestThrottlingPolicyV2Request?: UpdateRequestThrottlingPolicyV2Request): Promise<UpdateRequestThrottlingPolicyV2Response> {
        const options = ParamCreater().updateRequestThrottlingPolicyV2(updateRequestThrottlingPolicyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定签名密钥的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改签名密钥
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} signId 签名密钥编号
     * @param {BaseSignature} updateSignatureKeyV2RequestBody 修改签名密钥的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSignatureKeyV2(updateSignatureKeyV2Request?: UpdateSignatureKeyV2Request): Promise<UpdateSignatureKeyV2Response> {
        const options = ParamCreater().updateSignatureKeyV2(updateSignatureKeyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 禁用或启用API分组绑定的调试域名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置调试域名是否可以访问
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {SlDomainAccessSetting} updateSlDomainSettingV2RequestBody 设置调试域名是否可以访问的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSlDomainSettingV2(updateSlDomainSettingV2Request?: UpdateSlDomainSettingV2Request): Promise<UpdateSlDomainSettingV2Response> {
        const options = ParamCreater().updateSlDomainSettingV2(updateSlDomainSettingV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改某个流控策略下的某个特殊设置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改特殊设置
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} throttleId 流控策略的编号
     * @param {string} strategyId 特殊配置的编号
     * @param {ThrottleSpecialUpdate} updateSpecialThrottlingConfigurationV2RequestBody 修改特殊设置的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSpecialThrottlingConfigurationV2(updateSpecialThrottlingConfigurationV2Request?: UpdateSpecialThrottlingConfigurationV2Request): Promise<UpdateSpecialThrottlingConfigurationV2Response> {
        const options = ParamCreater().updateSpecialThrottlingConfigurationV2(updateSpecialThrottlingConfigurationV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除指定的多个ACL策略。
     * 
     * 删除ACL策略时，如果存在ACL策略与API绑定关系，则无法删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除ACL策略
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} action 必须为delete
     * @param {AclBatchDelete} batchDeleteAclV2RequestBody 批量删除ACL策略请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteAclV2(batchDeleteAclV2Request?: BatchDeleteAclV2Request): Promise<BatchDeleteAclV2Response> {
        const options = ParamCreater().batchDeleteAclV2(batchDeleteAclV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 增加一个ACL策略，策略类型通过字段acl_type来确定（permit或者deny），限制的对象的类型可以为IP或者DOMAIN，这里的DOMAIN对应的acl_value的值为租户名称，而非“www.exampleDomain.com”之类的网络域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建ACL策略
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {ApiAclCreate} createAclStrategyV2RequestBody 创建ACL策略请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAclStrategyV2(createAclStrategyV2Request?: CreateAclStrategyV2Request): Promise<CreateAclStrategyV2Response> {
        const options = ParamCreater().createAclStrategyV2(createAclStrategyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的ACL策略， 如果存在api与该ACL策略的绑定关系，则无法删除
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除ACL策略
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} aclId ACL策略的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAclV2(deleteAclV2Request?: DeleteAclV2Request): Promise<DeleteAclV2Response> {
        const options = ParamCreater().deleteAclV2(deleteAclV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有的ACL策略列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看ACL策略列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [id] ACL策略编号。
     * @param {string} [name] ACL策略名称。
     * @param {string} [aclType] 类型 - PERMIT (白名单类型) - DENY (黑名单类型)
     * @param {string} [entityType] 作用的对象类型： - IP - DOMAIN
     * @param {string} [preciseSearch] 指定需要精确匹配查找的参数名称，目前仅支持name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAclStrategiesV2(listAclStrategiesV2Request?: ListAclStrategiesV2Request): Promise<ListAclStrategiesV2Response> {
        const options = ParamCreater().listAclStrategiesV2(listAclStrategiesV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定ACL策略的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看ACL策略详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} aclId ACL策略的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfAclPolicyV2(showDetailsOfAclPolicyV2Request?: ShowDetailsOfAclPolicyV2Request): Promise<ShowDetailsOfAclPolicyV2Response> {
        const options = ParamCreater().showDetailsOfAclPolicyV2(showDetailsOfAclPolicyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定的ACL策略，其中可修改的属性为：acl_name、acl_type、acl_value，其它属性不可修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改ACL策略
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} aclId ACL策略的编号
     * @param {ApiAclCreate} updateAclStrategyV2RequestBody 更新ACL策略请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAclStrategyV2(updateAclStrategyV2Request?: UpdateAclStrategyV2Request): Promise<UpdateAclStrategyV2Response> {
        const options = ParamCreater().updateAclStrategyV2(updateAclStrategyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将流控策略应用于API，则所有对该API的访问将会受到该流控策略的限制。
     * 
     * 
     * 当一定时间内的访问次数超过流控策略设置的API最大访问次数限制后，后续的访问将会被拒绝，从而能够较好的保护后端API免受异常流量的冲击，保障服务的稳定运行。
     * 
     * 
     * 为指定的API绑定流控策略，绑定时，需要指定在哪个环境上生效。同一个API发布到不同的环境可以绑定不同的流控策略；一个API在发布到特定环境后只能绑定一个默认的流控策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定流控策略
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {ThrottleApiBindingCreate} associateRequestThrottlingPolicyV2RequestBody 绑定流控策略的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateRequestThrottlingPolicyV2(associateRequestThrottlingPolicyV2Request?: AssociateRequestThrottlingPolicyV2Request): Promise<AssociateRequestThrottlingPolicyV2Response> {
        const options = ParamCreater().associateRequestThrottlingPolicyV2(associateRequestThrottlingPolicyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量解除API与流控策略的绑定关系
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量解绑流控策略
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} action 必须为delete
     * @param {ThrottleBindingBatchDelete} batchDisassociateThrottlingPolicyV2RequestBody 批量解绑流控策略请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDisassociateThrottlingPolicyV2(batchDisassociateThrottlingPolicyV2Request?: BatchDisassociateThrottlingPolicyV2Request): Promise<BatchDisassociateThrottlingPolicyV2Response> {
        const options = ParamCreater().batchDisassociateThrottlingPolicyV2(batchDisassociateThrottlingPolicyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将多个API发布到一个指定的环境，或将多个API从指定的环境下线。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量发布或下线API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} action - online：发布 - offline：下线
     * @param {ApiBatchPublish} batchPublishOrOfflineApiV2RequestBody 批量发布或下线API的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchPublishOrOfflineApiV2(batchPublishOrOfflineApiV2Request?: BatchPublishOrOfflineApiV2Request): Promise<BatchPublishOrOfflineApiV2Response> {
        const options = ParamCreater().batchPublishOrOfflineApiV2(batchPublishOrOfflineApiV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * API每次发布时，会基于当前的API定义生成一个版本。版本记录了API发布时的各种定义及状态。
     * 
     * 多个版本之间可以进行随意切换。但一个API在一个环境上，只能有一个版本生效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换API版本
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API的编号
     * @param {ApiVersion} changeApiVersionV2RequestBody API版本的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeApiVersionV2(changeApiVersionV2Request?: ChangeApiVersionV2Request): Promise<ChangeApiVersionV2Response> {
        const options = ParamCreater().changeApiVersionV2(changeApiVersionV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验API分组名称是否存在。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验API分组名称是否存在
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {ApiGroupCheck} checkApiGroupsV2RequestBody 校验API分组的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkApiGroupsV2(checkApiGroupsV2Request?: CheckApiGroupsV2Request): Promise<CheckApiGroupsV2Response> {
        const options = ParamCreater().checkApiGroupsV2(checkApiGroupsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 校验API定义。校验API的路径或名称是否已存在
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验API定义
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {ApiCheckInfoV2} checkApisV2RequestBody 校验API定义的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkApisV2(checkApisV2Request?: CheckApisV2Request): Promise<CheckApisV2Response> {
        const options = ParamCreater().checkApisV2(checkApisV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * API分组是API的管理单元，一个API分组等同于一个服务入口，创建API分组时，返回一个子域名作为访问入口。建议一个API分组下的API具有一定的相关性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建API分组
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {ApiGroupCreate} createApiGroupV2RequestBody 创建API分组的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApiGroupV2(createApiGroupV2Request?: CreateApiGroupV2Request): Promise<CreateApiGroupV2Response> {
        const options = ParamCreater().createApiGroupV2(createApiGroupV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加一个API，API即一个服务接口，具体的服务能力。
     * 
     * 
     * API分为两部分，第一部分为面向API使用者的API接口，定义了使用者如何调用这个API。第二部分面向API提供者，由API提供者定义这个API的真实的后端情况，定义了API网关如何去访问真实的后端服务。API的真实后端服务目前支持四种类型：传统的HTTP/HTTPS形式的web后端、GRPC后端、函数工作流、MOCK。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {ApiCreate} createApiV2RequestBody 创建API的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApiV2(createApiV2Request?: CreateApiV2Request): Promise<CreateApiV2Response> {
        const options = ParamCreater().createApiV2(createApiV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对API进行发布或下线。
     * 
     * 发布操作是将一个指定的API发布到一个指定的环境，API只有发布后，才能够被调用，且只能在该环境上才能被调用。未发布的API无法被调用。
     * 
     * 下线操作是将API从某个已发布的环境上下线，下线后，API将无法再被调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发布或下线API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {ApiActionInfo} createOrDeletePublishRecordForApiV2RequestBody 发布API的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrDeletePublishRecordForApiV2(createOrDeletePublishRecordForApiV2Request?: CreateOrDeletePublishRecordForApiV2Request): Promise<CreateOrDeletePublishRecordForApiV2Response> {
        const options = ParamCreater().createOrDeletePublishRecordForApiV2(createOrDeletePublishRecordForApiV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调试一个API在指定运行环境下的定义，接口调用者需要具有操作该API的权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 调试API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API的编号
     * @param {ApiDebugInfo} debugApiV2RequestBody 调试API请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public debugApiV2(debugApiV2Request?: DebugApiV2Request): Promise<DebugApiV2Response> {
        const options = ParamCreater().debugApiV2(debugApiV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对某个生效中的API版本进行下线操作，下线后，API在该版本生效的环境中将不再能够被调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据版本编号下线API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} versionId API版本的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApiByVersionIdV2(deleteApiByVersionIdV2Request?: DeleteApiByVersionIdV2Request): Promise<DeleteApiByVersionIdV2Response> {
        const options = ParamCreater().deleteApiByVersionIdV2(deleteApiByVersionIdV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的API分组。
     * 
     * 删除API分组前，要先下线并删除分组下的所有API。
     * 
     * 删除时，会一并删除直接或间接关联到该分组下的所有资源，包括独立域名、SSL证书信息等等。并会将外部域名与子域名的绑定关系进行解除（取决于域名cname方式）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除API分组
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApiGroupV2(deleteApiGroupV2Request?: DeleteApiGroupV2Request): Promise<DeleteApiGroupV2Response> {
        const options = ParamCreater().deleteApiGroupV2(deleteApiGroupV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的API。
     * 
     * 删除API时，会删除该API所有相关的资源信息或绑定关系，如API的发布记录，绑定的后端服务，对APP的授权信息等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApiV2(deleteApiV2Request?: DeleteApiV2Request): Promise<DeleteApiV2Response> {
        const options = ParamCreater().deleteApiV2(deleteApiV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除API与流控策略的绑定关系。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除API与流控策略的绑定关系
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} throttleBindingId API和流控策略绑定关系的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateRequestThrottlingPolicyV2(disassociateRequestThrottlingPolicyV2Request?: DisassociateRequestThrottlingPolicyV2Request): Promise<DisassociateRequestThrottlingPolicyV2Response> {
        const options = ParamCreater().disassociateRequestThrottlingPolicyV2(disassociateRequestThrottlingPolicyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询API分组列表。
     * 
     * 如果是租户操作，则查询该租户下所有的分组；如果是管理员权限账号操作，则查询的是所有租户的分组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分组列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [id] API分组编号
     * @param {string} [name] API分组名称
     * @param {string} [preciseSearch] 指定需要精确匹配查找的参数名称，目前仅支持API分组名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiGroupsV2(listApiGroupsV2Request?: ListApiGroupsV2Request): Promise<ListApiGroupsV2Response> {
        const options = ParamCreater().listApiGroupsV2(listApiGroupsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看指定的API在指定的环境上的运行时定义，默认查询RELEASE环境上的运行时定义。
     * 
     * API的定义分为临时定义和运行时定义，分别代表如下含义：
     * - 临时定义：API在编辑中的定义，表示用户最后一次编辑后的API的状态
     * - 运行时定义：API在发布到某个环境时，对发布时的API的临时定义进行快照，固化出来的API的状态。
     * 
     * 访问某个环境上的API，其实访问的就是其运行时的定义
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API运行时定义
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API的编号
     * @param {string} [envId] API的发布环境编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiRuntimeDefinitionV2(listApiRuntimeDefinitionV2Request?: ListApiRuntimeDefinitionV2Request): Promise<ListApiRuntimeDefinitionV2Response> {
        const options = ParamCreater().listApiRuntimeDefinitionV2(listApiRuntimeDefinitionV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某个指定的版本详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看版本详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} versionId API版本的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersionDetailV2(listApiVersionDetailV2Request?: ListApiVersionDetailV2Request): Promise<ListApiVersionDetailV2Response> {
        const options = ParamCreater().listApiVersionDetailV2(listApiVersionDetailV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某个API的历史版本。每个API在一个环境上最多存在10个历史版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API历史版本列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API的编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [envId] 环境的编号
     * @param {string} [envName] 环境的名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersionsV2(listApiVersionsV2Request?: ListApiVersionsV2Request): Promise<ListApiVersionsV2Response> {
        const options = ParamCreater().listApiVersionsV2(listApiVersionsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某个流控策略上已经绑定的API列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看流控策略绑定的API列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} throttleId 流控策略编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [envId] 环境的ID
     * @param {string} [groupId] API分组编号
     * @param {string} [apiId] API编号
     * @param {string} [apiName] API名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApisBindedToRequestThrottlingPolicyV2(listApisBindedToRequestThrottlingPolicyV2Request?: ListApisBindedToRequestThrottlingPolicyV2Request): Promise<ListApisBindedToRequestThrottlingPolicyV2Response> {
        const options = ParamCreater().listApisBindedToRequestThrottlingPolicyV2(listApisBindedToRequestThrottlingPolicyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有未绑定到该流控策略上的自有API列表。需要API已经发布，未发布的API不予展示。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看流控策略未绑定的API列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} throttleId 流控策略编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [envId] 环境的ID
     * @param {string} [groupId] API分组编号
     * @param {string} [apiId] API编号
     * @param {string} [apiName] API名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApisUnbindedToRequestThrottlingPolicyV2(listApisUnbindedToRequestThrottlingPolicyV2Request?: ListApisUnbindedToRequestThrottlingPolicyV2Request): Promise<ListApisUnbindedToRequestThrottlingPolicyV2Response> {
        const options = ParamCreater().listApisUnbindedToRequestThrottlingPolicyV2(listApisUnbindedToRequestThrottlingPolicyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看API列表，返回API详细信息、发布信息等，但不能查看到后端服务信息和API请求参数信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [id] API编号
     * @param {string} [name] API名称
     * @param {string} [groupId] API分组编号
     * @param {string} [reqProtocol] 请求协议
     * @param {string} [reqMethod] 请求方法
     * @param {string} [reqUri] 请求路径
     * @param {string} [authType] 授权类型
     * @param {string} [envId] 发布的环境编号
     * @param {number} [type] API类型
     * @param {string} [preciseSearch] 指定需要精确匹配查找的参数名称，目前仅支持name、req_uri
     * @param {string} [vpcChannelName] 负载通道名称
     * @param {string} [returnDataMode] 指定API详情中需要包含的额外返回结果，多个参数之间使用“,”隔开，当brief和其他include参数共同使用时，brief不生效。 目前仅支持brief，include_group，include_group_backend。 brief：默认值，不包含额外信息。 include_group：返回结果中包含api_group_info。 include_group_backend：返回结果中包含backend_api。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApisV2(listApisV2Request?: ListApisV2Request): Promise<ListApisV2Response> {
        const options = ParamCreater().listApisV2(listApisV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某个API绑定的流控策略列表。每个环境上应该最多只有一个流控策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看API绑定的流控策略列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [throttleId] 流控策略的编号
     * @param {string} [throttleName] 流控策略的名称
     * @param {string} [envId] 绑定的环境编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRequestThrottlingPoliciesBindedToApiV2(listRequestThrottlingPoliciesBindedToApiV2Request?: ListRequestThrottlingPoliciesBindedToApiV2Request): Promise<ListRequestThrottlingPoliciesBindedToApiV2Response> {
        const options = ParamCreater().listRequestThrottlingPoliciesBindedToApiV2(listRequestThrottlingPoliciesBindedToApiV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定分组的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询分组详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfApiGroupV2(showDetailsOfApiGroupV2Request?: ShowDetailsOfApiGroupV2Request): Promise<ShowDetailsOfApiGroupV2Response> {
        const options = ParamCreater().showDetailsOfApiGroupV2(showDetailsOfApiGroupV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看指定的API的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfApiV2(showDetailsOfApiV2Request?: ShowDetailsOfApiV2Request): Promise<ShowDetailsOfApiV2Response> {
        const options = ParamCreater().showDetailsOfApiV2(showDetailsOfApiV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改API分组属性。其中name和remark可修改，其他属性不可修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改API分组
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {ApiGroupBase} updateApiGroupV2RequestBody 修改API分组的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApiGroupV2(updateApiGroupV2Request?: UpdateApiGroupV2Request): Promise<UpdateApiGroupV2Response> {
        const options = ParamCreater().updateApiGroupV2(updateApiGroupV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改指定API的信息，包括后端服务信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API的编号
     * @param {ApiCreate} updateApiV2RequestBody 修改API的请求体，修改api时字段group_id不会生效，仅采用默认值
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApiV2(updateApiV2Request?: UpdateApiV2Request): Promise<UpdateApiV2Response> {
        const options = ParamCreater().updateApiV2(updateApiV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量解除API与ACL策略的绑定
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量解除API与ACL策略的绑定
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} action 必须为delete
     * @param {AclBindingBatchDelete} batchDeleteApiAclBindingV2RequestBody 批量解绑API和ACL绑定关系请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteApiAclBindingV2(batchDeleteApiAclBindingV2Request?: BatchDeleteApiAclBindingV2Request): Promise<BatchDeleteApiAclBindingV2Response> {
        const options = ParamCreater().batchDeleteApiAclBindingV2(batchDeleteApiAclBindingV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将API与ACL策略进行绑定。
     * 
     * 同一个API发布到不同的环境可以绑定不同的ACL策略；一个API在发布到特定环境后只能绑定一个同一种类型的ACL策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将API与ACL策略进行绑定
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {AclApiBindingCreate} createApiAclBindingV2RequestBody API绑定ACL请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApiAclBindingV2(createApiAclBindingV2Request?: CreateApiAclBindingV2Request): Promise<CreateApiAclBindingV2Response> {
        const options = ParamCreater().createApiAclBindingV2(createApiAclBindingV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除某条API与ACL策略的绑定关系
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除API与ACL策略的绑定
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} aclBindingsId 绑定关系编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApiAclBindingV2(deleteApiAclBindingV2Request?: DeleteApiAclBindingV2Request): Promise<DeleteApiAclBindingV2Response> {
        const options = ParamCreater().deleteApiAclBindingV2(deleteApiAclBindingV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看API绑定的ACL策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看API绑定的ACL策略列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} apiId API编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [envId] 环境编号
     * @param {string} [envName] 环境名称
     * @param {string} [aclId] ACL策略编号
     * @param {string} [aclName] ACL策略名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAclPolicyBindedToApiV2(listAclPolicyBindedToApiV2Request?: ListAclPolicyBindedToApiV2Request): Promise<ListAclPolicyBindedToApiV2Response> {
        const options = ParamCreater().listAclPolicyBindedToApiV2(listAclPolicyBindedToApiV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看ACL策略绑定的API列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看ACL策略绑定的API列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} aclId ACL编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [apiId] API编号
     * @param {string} [apiName] API名称
     * @param {string} [envId] 环境编号
     * @param {string} [groupId] API分组编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApisBindedToAclPolicyV2(listApisBindedToAclPolicyV2Request?: ListApisBindedToAclPolicyV2Request): Promise<ListApisBindedToAclPolicyV2Response> {
        const options = ParamCreater().listApisBindedToAclPolicyV2(listApisBindedToAclPolicyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看ACL策略未绑定的API列表，需要API已发布
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看ACL策略未绑定的API列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} aclId ACL策略编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [apiId] API编号
     * @param {string} [apiName] API名称
     * @param {string} [envId] 环境编号
     * @param {string} [groupId] API分组编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApisUnbindedToAclPolicyV2(listApisUnbindedToAclPolicyV2Request?: ListApisUnbindedToAclPolicyV2Request): Promise<ListApisUnbindedToAclPolicyV2Response> {
        const options = ParamCreater().listApisUnbindedToAclPolicyV2(listApisUnbindedToAclPolicyV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除API对APP的授权关系。解除授权后，APP将不再能够调用该API。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除授权
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appAuthId 授权关系的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelingAuthorizationV2(cancelingAuthorizationV2Request?: CancelingAuthorizationV2Request): Promise<CancelingAuthorizationV2Response> {
        const options = ParamCreater().cancelingAuthorizationV2(cancelingAuthorizationV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * APP创建成功后，还不能访问API，如果想要访问某个环境上的API，需要将该API在该环境上授权给APP。授权成功后，APP即可访问该环境上的这个API。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary APP授权
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {ApiAuthCreate} createAuthorizingAppsV2RequestBody APP授权的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAuthorizingAppsV2(createAuthorizingAppsV2Request?: CreateAuthorizingAppsV2Request): Promise<CreateAuthorizingAppsV2Response> {
        const options = ParamCreater().createAuthorizingAppsV2(createAuthorizingAppsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询APP已经绑定的API列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看APP已绑定的API列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [apiId] API编号
     * @param {string} [apiName] API名称
     * @param {string} [groupId] API分组编号
     * @param {string} [groupName] API分组名称
     * @param {string} [envId] 授权的环境编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApisBindedToAppV2(listApisBindedToAppV2Request?: ListApisBindedToAppV2Request): Promise<ListApisBindedToAppV2Response> {
        const options = ParamCreater().listApisBindedToAppV2(listApisBindedToAppV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定环境上某个APP未绑定的API列表[，包括自有API和从云商店购买的API](tag:hws)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看APP未绑定的API列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} appId 应用id
     * @param {string} envId 环境id
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [groupId] API分组编号
     * @param {string} [apiId] API编号
     * @param {string} [apiName] API名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApisUnbindedToAppV2(listApisUnbindedToAppV2Request?: ListApisUnbindedToAppV2Request): Promise<ListApisUnbindedToAppV2Response> {
        const options = ParamCreater().listApisUnbindedToAppV2(listApisUnbindedToAppV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询API绑定的APP列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看API已绑定的APP列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [apiId] API编号
     * @param {string} [appName] APP名称
     * @param {string} [appId] APP编号
     * @param {string} [envId] 环境编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppsBindedToApiV2(listAppsBindedToApiV2Request?: ListAppsBindedToApiV2Request): Promise<ListAppsBindedToApiV2Response> {
        const options = ParamCreater().listAppsBindedToApiV2(listAppsBindedToApiV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出分组下API的定义信息。导出文件内容符合swagger标准规范，API网关自定义扩展字段请参考《API网关用户指南》的“导入导出API：扩展定义”章节。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {ExportOpenApiReq} exportApiDefinitionsV2RequestBody 批量导出API的请求体
     * @param {'2.0' | '3.0'} [oasVersion] OpenAPI版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportApiDefinitionsV2(exportApiDefinitionsV2Request?: ExportApiDefinitionsV2Request): Promise<ExportApiDefinitionsV2Response> {
        const options = ParamCreater().exportApiDefinitionsV2(exportApiDefinitionsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导入API。导入文件内容需要符合swagger标准规范，API网关自定义扩展字段请参考《API网关用户指南》的“导入导出API：扩展定义”章节。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入API
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {any} fileName 导入Api的请求体，json或yaml格式的文件
     * @param {boolean} [isCreateGroup] 是否创建新分组
     * @param {string} [groupId] API分组编号，当is_create_group&#x3D;false时为必填
     * @param {string} [extendMode] 扩展信息导入模式 - merge：当扩展信息定义冲突时，merge保留原有扩展信息 - override：当扩展信息定义冲突时，override会覆盖原有扩展信息
     * @param {boolean} [simpleMode] 是否开启简易导入模式
     * @param {boolean} [mockMode] 是否开启Mock后端
     * @param {string} [apiMode] 导入模式 - merge：当API信息定义冲突时，merge保留原有API信息 - override：当API信息定义冲突时，override会覆盖原有API信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importApiDefinitionsV2(importApiDefinitionsV2Request?: ImportApiDefinitionsV2Request): Promise<ImportApiDefinitionsV2Response> {
        const options = ParamCreater().importApiDefinitionsV2(importApiDefinitionsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 域名绑定SSL证书。目前暂时仅支持单个绑定，请求体当中的certificate_ids里面有且只能有一个证书ID。使用实例自定义入方向端口的特性时，相同的域名会同时绑定证书，注意开启/关闭客户端校验会对相同域名的不同端口同时生效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 域名绑定SSL证书
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {string} domainId 域名的编号
     * @param {AttachOrDetachCertsReqBody} batchAssociateCertsV2RequestBody 域名绑定SSL证书的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAssociateCertsV2(batchAssociateCertsV2Request?: BatchAssociateCertsV2Request): Promise<BatchAssociateCertsV2Response> {
        const options = ParamCreater().batchAssociateCertsV2(batchAssociateCertsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * SSL证书绑定域名。使用实例自定义入方向端口的特性时，相同的域名会同时绑定证书，注意开启/关闭客户端校验会对相同域名的不同端口同时生效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SSL证书绑定域名
     * @param {string} certificateId 证书的编号
     * @param {AttachOrDetachDomainsReqBody} batchAssociateDomainsV2RequestBody SSL证书绑定域名的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAssociateDomainsV2(batchAssociateDomainsV2Request?: BatchAssociateDomainsV2Request): Promise<BatchAssociateDomainsV2Response> {
        const options = ParamCreater().batchAssociateDomainsV2(batchAssociateDomainsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 域名解绑SSL证书。目前暂时仅支持单个解绑，请求体当中的certificate_ids里面有且只能有一个证书ID。在使用自定义入方向端口的特性时，相同的域名会同时解绑证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 域名解绑SSL证书
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} groupId 分组的编号
     * @param {string} domainId 域名的编号
     * @param {AttachOrDetachCertsReqBody} batchDisassociateCertsV2RequestBody 域名解绑SSL证书的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDisassociateCertsV2(batchDisassociateCertsV2Request?: BatchDisassociateCertsV2Request): Promise<BatchDisassociateCertsV2Response> {
        const options = ParamCreater().batchDisassociateCertsV2(batchDisassociateCertsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * SSL证书解绑域名。在使用自定义入方向端口的特性时，相同的域名会同时解绑证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary SSL证书解绑域名
     * @param {string} certificateId 证书的编号
     * @param {AttachOrDetachDomainsReqBody} batchDisassociateDomainsV2RequestBody SSL证书解绑域名的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDisassociateDomainsV2(batchDisassociateDomainsV2Request?: BatchDisassociateDomainsV2Request): Promise<BatchDisassociateDomainsV2Response> {
        const options = ParamCreater().batchDisassociateDomainsV2(batchDisassociateDomainsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建SSL证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建SSL证书
     * @param {CertificateForm} createCertificateV2RequestBody 创建SSL证书的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCertificateV2(createCertificateV2Request?: CreateCertificateV2Request): Promise<CreateCertificateV2Response> {
        const options = ParamCreater().createCertificateV2(createCertificateV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除ssl证书接口，删除时只有没有关联域名的证书才能被删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除SSL证书
     * @param {string} certificateId 证书的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCertificateV2(deleteCertificateV2Request?: DeleteCertificateV2Request): Promise<DeleteCertificateV2Response> {
        const options = ParamCreater().deleteCertificateV2(deleteCertificateV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取SSL证书已绑定域名列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取SSL证书已绑定域名列表
     * @param {string} certificateId 证书的编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [urlDomain] 独立域名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAttachedDomainsV2(listAttachedDomainsV2Request?: ListAttachedDomainsV2Request): Promise<ListAttachedDomainsV2Response> {
        const options = ParamCreater().listAttachedDomainsV2(listAttachedDomainsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取SSL证书列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取SSL证书列表
     * @param {string} instanceId 证书所属实例ID
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [name] 证书名称
     * @param {string} [commonName] 证书域名
     * @param {string} [signatureAlgorithm] 证书签名算法
     * @param {'instance' | 'global'} [type] 证书可见范围
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCertificatesV2(listCertificatesV2Request?: ListCertificatesV2Request): Promise<ListCertificatesV2Response> {
        const options = ParamCreater().listCertificatesV2(listCertificatesV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看证书详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看证书详情
     * @param {string} certificateId 证书的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfCertificateV2(showDetailsOfCertificateV2Request?: ShowDetailsOfCertificateV2Request): Promise<ShowDetailsOfCertificateV2Response> {
        const options = ParamCreater().showDetailsOfCertificateV2(showDetailsOfCertificateV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改SSL证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改SSL证书
     * @param {string} certificateId 证书的编号
     * @param {CertificateForm} updateCertificateV2RequestBody 修改SSL证书的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCertificateV2(updateCertificateV2Request?: UpdateCertificateV2Request): Promise<UpdateCertificateV2Response> {
        const options = ParamCreater().updateCertificateV2(updateCertificateV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定的VPC通道添加后端实例
     * 
     * 如果指定地址的后端实例已存在，则更新对应后端实例信息。如果请求体中包含多个重复地址的后端实例定义，则使用第一个定义。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加或更新后端实例
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {VpcMemberCreate} addingBackendInstancesV2RequestBody 添加或更新后端实例的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addingBackendInstancesV2(addingBackendInstancesV2Request?: AddingBackendInstancesV2Request): Promise<AddingBackendInstancesV2Response> {
        const options = ParamCreater().addingBackendInstancesV2(addingBackendInstancesV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改后端服务器状态不可用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改后端服务器状态不可用
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {MembersBatchEnableOrDisable} batchDisableMembersRequestBody 批量修改后端服务器状态不可用的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDisableMembers(batchDisableMembersRequest?: BatchDisableMembersRequest): Promise<BatchDisableMembersResponse> {
        const options = ParamCreater().batchDisableMembers(batchDisableMembersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改后端服务器状态可用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改后端服务器状态可用
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {MembersBatchEnableOrDisable} batchEnableMembersRequestBody 批量修改后端服务器状态可用的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchEnableMembers(batchEnableMembersRequest?: BatchEnableMembersRequest): Promise<BatchEnableMembersResponse> {
        const options = ParamCreater().batchEnableMembers(batchEnableMembersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在APIG中创建VPC通道后端服务器组，VPC通道后端实例可以选择是否关联后端实例服务器组，以便管理后端服务器节点。
     * 
     * 如果指定名称的后端服务器组已存在，则更新对应后端服务器组信息。如果请求体中包含多个重复名称的后端服务器定义，则使用第一个定义。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加或更新VPC通道后端服务器组
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {MemberGroupCreateBatch} createMemberGroupRequestBody 创建VPC通道后端服务器组的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMemberGroup(createMemberGroupRequest?: CreateMemberGroupRequest): Promise<CreateMemberGroupResponse> {
        const options = ParamCreater().createMemberGroup(createMemberGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在API网关中创建连接私有VPC资源的通道，并在创建API时将后端节点配置为使用这些VPC通道，以便API网关直接访问私有VPC资源。
     * &gt; 每个用户最多创建30个VPC通道。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建VPC通道
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {VpcCreate} createVpcChannelV2RequestBody 创建VPC通道的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpcChannelV2(createVpcChannelV2Request?: CreateVpcChannelV2Request): Promise<CreateVpcChannelV2Response> {
        const options = ParamCreater().createVpcChannelV2(createVpcChannelV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定VPC通道中的后端实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除后端实例
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {string} memberId 后端实例对象的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBackendInstanceV2(deleteBackendInstanceV2Request?: DeleteBackendInstanceV2Request): Promise<DeleteBackendInstanceV2Response> {
        const options = ParamCreater().deleteBackendInstanceV2(deleteBackendInstanceV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的VPC通道后端服务器组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPC通道后端服务器组
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {string} memberGroupId VPC通道后端服务器组编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMemberGroup(deleteMemberGroupRequest?: DeleteMemberGroupRequest): Promise<DeleteMemberGroupResponse> {
        const options = ParamCreater().deleteMemberGroup(deleteMemberGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的VPC通道
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPC通道
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpcChannelV2(deleteVpcChannelV2Request?: DeleteVpcChannelV2Request): Promise<DeleteVpcChannelV2Response> {
        const options = ParamCreater().deleteVpcChannelV2(deleteVpcChannelV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看指定VPC通道的后端实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看后端实例列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [name] 云服务器的名称
     * @param {string} [memberGroupName] 后端服务器组名称。
     * @param {string} [memberGroupId] 后端服务器组编号
     * @param {string} [preciseSearch] 指定需要精确匹配查找的参数名称，多个参数需要支持精确匹配时参数之间使用“,”隔开。  目前支持name，member_group_name。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBackendInstancesV2(listBackendInstancesV2Request?: ListBackendInstancesV2Request): Promise<ListBackendInstancesV2Response> {
        const options = ParamCreater().listBackendInstancesV2(listBackendInstancesV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询VPC通道后端云服务组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC通道后端云服务组列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [dictCode] 字典编码。  支持英文，数字，特殊字符（-_.）  暂不支持
     * @param {string} [memberGroupName] VPC通道后端云服务组的名称
     * @param {string} [preciseSearch] 指定需要精确匹配查找的参数名称，多个参数需要支持精确匹配时参数之间使用“,”隔开。  当前支持member_group_name。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMemberGroups(listMemberGroupsRequest?: ListMemberGroupsRequest): Promise<ListMemberGroupsResponse> {
        const options = ParamCreater().listMemberGroups(listMemberGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看VPC通道列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC通道列表
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量小于0时，自动转换为0
     * @param {number} [limit] 每页显示的条目数量，条目数量小于等于0时，自动转换为20，条目数量大于500时，自动转换为500
     * @param {string} [id] VPC通道的编号
     * @param {string} [name] VPC通道的名称
     * @param {string} [dictCode] VPC通道的字典编码  支持英文，数字，特殊字符（-_.）  暂不支持
     * @param {string} [preciseSearch] 指定需要精确匹配查找的参数名称，多个参数需要支持精确匹配时参数之间使用“,”隔开。  目前支持name，member_group_name。
     * @param {string} [memberHost] 后端服务地址。默认精确查询，不支持模糊查询。
     * @param {number} [memberPort] 后端服务器端口
     * @param {string} [memberGroupName] 后端服务器组名称
     * @param {string} [memberGroupId] 后端服务器组编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcChannelsV2(listVpcChannelsV2Request?: ListVpcChannelsV2Request): Promise<ListVpcChannelsV2Response> {
        const options = ParamCreater().listVpcChannelsV2(listVpcChannelsV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看指定的VPC通道后端服务器组详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看VPC通道后端服务器组详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {string} memberGroupId VPC通道后端服务器组编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfMemberGroup(showDetailsOfMemberGroupRequest?: ShowDetailsOfMemberGroupRequest): Promise<ShowDetailsOfMemberGroupResponse> {
        const options = ParamCreater().showDetailsOfMemberGroup(showDetailsOfMemberGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看指定的VPC通道详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看VPC通道详情
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailsOfVpcChannelV2(showDetailsOfVpcChannelV2Request?: ShowDetailsOfVpcChannelV2Request): Promise<ShowDetailsOfVpcChannelV2Response> {
        const options = ParamCreater().showDetailsOfVpcChannelV2(showDetailsOfVpcChannelV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定的VPC通道的后端实例。更新时，使用传入的请求参数对对应云服务组的后端实例进行全量覆盖修改。如果未指定修改的云服务器组，则进行全量覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新后端实例
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {VpcMemberModify} updateBackendInstancesV2RequestBody 更新后端实例的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBackendInstancesV2(updateBackendInstancesV2Request?: UpdateBackendInstancesV2Request): Promise<UpdateBackendInstancesV2Response> {
        const options = ParamCreater().updateBackendInstancesV2(updateBackendInstancesV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改VPC通道健康检查。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改VPC通道健康检查
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {VpcHealthConfig} updateHealthCheckRequestBody 修改VPC通道健康检查的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHealthCheck(updateHealthCheckRequest?: UpdateHealthCheckRequest): Promise<UpdateHealthCheckResponse> {
        const options = ParamCreater().updateHealthCheck(updateHealthCheckRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定VPC通道后端服务器组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新VPC通道后端服务器组
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {string} memberGroupId VPC通道后端服务器组编号
     * @param {MemberGroupCreate} updateMemberGroupRequestBody 更新VPC通道的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMemberGroup(updateMemberGroupRequest?: UpdateMemberGroupRequest): Promise<UpdateMemberGroupResponse> {
        const options = ParamCreater().updateMemberGroup(updateMemberGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定VPC通道的参数
     * 
     * 使用传入的后端实例列表对VPC通道进行全量覆盖，如果后端实例列表为空，则会全量删除已有的后端实例；
     * 
     * 使用传入的后端服务器组列表对VPC通道进行全量覆盖，如果后端服务器组列表为空，则会全量删除已有的服务器组；
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新VPC通道
     * @param {string} instanceId 实例ID，在API网关控制台的“实例信息”中获取。
     * @param {string} vpcChannelId VPC通道的编号
     * @param {VpcCreate} updateVpcChannelV2RequestBody 更新VPC通道的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpcChannelV2(updateVpcChannelV2Request?: UpdateVpcChannelV2Request): Promise<UpdateVpcChannelV2Response> {
        const options = ParamCreater().updateVpcChannelV2(updateVpcChannelV2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 接受或拒绝实例节点连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        acceptOrRejectEndpointConnections(acceptOrRejectEndpointConnectionsRequest?: AcceptOrRejectEndpointConnectionsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-endpoint/connections/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (acceptOrRejectEndpointConnectionsRequest !== null && acceptOrRejectEndpointConnectionsRequest !== undefined) {
                if (acceptOrRejectEndpointConnectionsRequest instanceof AcceptOrRejectEndpointConnectionsRequest) {
                    instanceId = acceptOrRejectEndpointConnectionsRequest.instanceId;
                    body = acceptOrRejectEndpointConnectionsRequest.body
                } else {
                    instanceId = acceptOrRejectEndpointConnectionsRequest['instance_id'];
                    body = acceptOrRejectEndpointConnectionsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling acceptOrRejectEndpointConnections.');
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
         * 新增实例的自定义入方向端口，在同个实例中，一个端口仅能支持一种协议。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addCustomIngressPort(addCustomIngressPortRequest?: AddCustomIngressPortRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/custom-ingress-ports",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addCustomIngressPortRequest !== null && addCustomIngressPortRequest !== undefined) {
                if (addCustomIngressPortRequest instanceof AddCustomIngressPortRequest) {
                    instanceId = addCustomIngressPortRequest.instanceId;
                    body = addCustomIngressPortRequest.body
                } else {
                    instanceId = addCustomIngressPortRequest['instance_id'];
                    body = addCustomIngressPortRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addCustomIngressPort.');
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
         * 实例更新或绑定EIP(仅当实例为LVS类型时支持)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addEipV2(addEipV2Request?: AddEipV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/eip",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addEipV2Request !== null && addEipV2Request !== undefined) {
                if (addEipV2Request instanceof AddEipV2Request) {
                    instanceId = addEipV2Request.instanceId;
                    body = addEipV2Request.body
                } else {
                    instanceId = addEipV2Request['instance_id'];
                    body = addEipV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addEipV2.');
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
         * 批量添加实例终端节点连接白名单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addEndpointPermissions(addEndpointPermissionsRequest?: AddEndpointPermissionsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-endpoint/permissions/batch-add",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addEndpointPermissionsRequest !== null && addEndpointPermissionsRequest !== undefined) {
                if (addEndpointPermissionsRequest instanceof AddEndpointPermissionsRequest) {
                    instanceId = addEndpointPermissionsRequest.instanceId;
                    body = addEndpointPermissionsRequest.body
                } else {
                    instanceId = addEndpointPermissionsRequest['instance_id'];
                    body = addEndpointPermissionsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addEndpointPermissions.');
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
         * 实例开启公网出口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addEngressEipV2(addEngressEipV2Request?: AddEngressEipV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/nat-eip",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addEngressEipV2Request !== null && addEngressEipV2Request !== undefined) {
                if (addEngressEipV2Request instanceof AddEngressEipV2Request) {
                    instanceId = addEngressEipV2Request.instanceId;
                    body = addEngressEipV2Request.body
                } else {
                    instanceId = addEngressEipV2Request['instance_id'];
                    body = addEngressEipV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addEngressEipV2.');
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
         * 开启实例开启公网入口，仅当实例为ELB类型时支持
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addIngressEipV2(addIngressEipV2Request?: AddIngressEipV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/ingress-eip",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addIngressEipV2Request !== null && addIngressEipV2Request !== undefined) {
                if (addIngressEipV2Request instanceof AddIngressEipV2Request) {
                    instanceId = addIngressEipV2Request.instanceId;
                    body = addIngressEipV2Request.body
                } else {
                    instanceId = addIngressEipV2Request['instance_id'];
                    body = addIngressEipV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addIngressEipV2.');
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
         * 凭据配额绑定凭据列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateAppsForAppQuota(associateAppsForAppQuotaRequest?: AssociateAppsForAppQuotaRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/app-quotas/{app_quota_id}/binding-apps",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let appQuotaId;

            if (associateAppsForAppQuotaRequest !== null && associateAppsForAppQuotaRequest !== undefined) {
                if (associateAppsForAppQuotaRequest instanceof AssociateAppsForAppQuotaRequest) {
                    instanceId = associateAppsForAppQuotaRequest.instanceId;
                    appQuotaId = associateAppsForAppQuotaRequest.appQuotaId;
                    body = associateAppsForAppQuotaRequest.body
                } else {
                    instanceId = associateAppsForAppQuotaRequest['instance_id'];
                    appQuotaId = associateAppsForAppQuotaRequest['app_quota_id'];
                    body = associateAppsForAppQuotaRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling associateAppsForAppQuota.');
            }
            if (appQuotaId === null || appQuotaId === undefined) {
            throw new RequiredError('appQuotaId','Required parameter appQuotaId was null or undefined when calling associateAppsForAppQuota.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'app_quota_id': appQuotaId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 如果创建API时，“定义API请求”使用HTTPS请求协议，那么在独立域名中需要添加SSL证书。
         * 使用实例自定义入方向端口的特性时，相同的域名会同时绑定证书，注意开启/关闭客户端校验会对相同域名的不同端口同时生效。
         * 本章节主要介绍为特定域名绑定证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateCertificateV2(associateCertificateV2Request?: AssociateCertificateV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/domains/{domain_id}/certificate",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let groupId;
            
            let domainId;

            if (associateCertificateV2Request !== null && associateCertificateV2Request !== undefined) {
                if (associateCertificateV2Request instanceof AssociateCertificateV2Request) {
                    instanceId = associateCertificateV2Request.instanceId;
                    groupId = associateCertificateV2Request.groupId;
                    domainId = associateCertificateV2Request.domainId;
                    body = associateCertificateV2Request.body
                } else {
                    instanceId = associateCertificateV2Request['instance_id'];
                    groupId = associateCertificateV2Request['group_id'];
                    domainId = associateCertificateV2Request['domain_id'];
                    body = associateCertificateV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling associateCertificateV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling associateCertificateV2.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling associateCertificateV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户自定义的域名，需要增加A记录才能生效，具体方法请参见《云解析服务用户指南》的“添加A类型记录集”章节。
         * 
         * 每个API分组下最多可绑定5个域名。绑定域名后，用户可通过自定义域名调用API。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateDomainV2(associateDomainV2Request?: AssociateDomainV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/domains",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let groupId;

            if (associateDomainV2Request !== null && associateDomainV2Request !== undefined) {
                if (associateDomainV2Request instanceof AssociateDomainV2Request) {
                    instanceId = associateDomainV2Request.instanceId;
                    groupId = associateDomainV2Request.groupId;
                    body = associateDomainV2Request.body
                } else {
                    instanceId = associateDomainV2Request['instance_id'];
                    groupId = associateDomainV2Request['group_id'];
                    body = associateDomainV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling associateDomainV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling associateDomainV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 签名密钥创建后，需要绑定到API才能生效。
         * 
         * 
         * 将签名密钥绑定到API后，则API网关请求后端服务时就会使用这个签名密钥进行加密签名，后端服务可以校验这个签名来验证请求来源。
         * 
         * 
         * 将指定的签名密钥绑定到一个或多个已发布的API上。同一个API发布到不同的环境可以绑定不同的签名密钥；一个API在发布到特定环境后只能绑定一个签名密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateSignatureKeyV2(associateSignatureKeyV2Request?: AssociateSignatureKeyV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/sign-bindings",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (associateSignatureKeyV2Request !== null && associateSignatureKeyV2Request !== undefined) {
                if (associateSignatureKeyV2Request instanceof AssociateSignatureKeyV2Request) {
                    instanceId = associateSignatureKeyV2Request.instanceId;
                    body = associateSignatureKeyV2Request.body
                } else {
                    instanceId = associateSignatureKeyV2Request['instance_id'];
                    body = associateSignatureKeyV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling associateSignatureKeyV2.');
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
         * 绑定插件到API上。
         * - 只能选择发布状态的API
         * - 绑定以后及时生效
         * - 修改插件后及时生效
         * - 相同类型的插件只能绑定一个，如果再次绑定同类型的插件，那么已绑定的同类型插件将直接被覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachApiToPlugin(attachApiToPluginRequest?: AttachApiToPluginRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/plugins/{plugin_id}/attach",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let pluginId;

            if (attachApiToPluginRequest !== null && attachApiToPluginRequest !== undefined) {
                if (attachApiToPluginRequest instanceof AttachApiToPluginRequest) {
                    instanceId = attachApiToPluginRequest.instanceId;
                    pluginId = attachApiToPluginRequest.pluginId;
                    body = attachApiToPluginRequest.body
                } else {
                    instanceId = attachApiToPluginRequest['instance_id'];
                    pluginId = attachApiToPluginRequest['plugin_id'];
                    body = attachApiToPluginRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling attachApiToPlugin.');
            }
            if (pluginId === null || pluginId === undefined) {
            throw new RequiredError('pluginId','Required parameter pluginId was null or undefined when calling attachApiToPlugin.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'plugin_id': pluginId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 绑定插件到API上。
         * - 只能选择发布状态的API
         * - 绑定以后及时生效
         * - 修改插件后及时生效
         * - 相同类型的插件只能绑定一个，如果再次绑定同类型的插件，那么已绑定的同类型插件将直接被覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachPluginToApi(attachPluginToApiRequest?: AttachPluginToApiRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/{api_id}/plugins/attach",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let apiId;

            if (attachPluginToApiRequest !== null && attachPluginToApiRequest !== undefined) {
                if (attachPluginToApiRequest instanceof AttachPluginToApiRequest) {
                    instanceId = attachPluginToApiRequest.instanceId;
                    apiId = attachPluginToApiRequest.apiId;
                    body = attachPluginToApiRequest.body
                } else {
                    instanceId = attachPluginToApiRequest['instance_id'];
                    apiId = attachPluginToApiRequest['api_id'];
                    body = attachPluginToApiRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling attachPluginToApi.');
            }
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling attachPluginToApi.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量添加或删除单个实例的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateOrDeleteInstanceTags(batchCreateOrDeleteInstanceTagsRequest?: BatchCreateOrDeleteInstanceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/instance-tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (batchCreateOrDeleteInstanceTagsRequest !== null && batchCreateOrDeleteInstanceTagsRequest !== undefined) {
                if (batchCreateOrDeleteInstanceTagsRequest instanceof BatchCreateOrDeleteInstanceTagsRequest) {
                    instanceId = batchCreateOrDeleteInstanceTagsRequest.instanceId;
                    body = batchCreateOrDeleteInstanceTagsRequest.body
                } else {
                    instanceId = batchCreateOrDeleteInstanceTagsRequest['instance_id'];
                    body = batchCreateOrDeleteInstanceTagsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchCreateOrDeleteInstanceTags.');
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
         * 校验app是否存在，非APP所有者可以调用该接口校验APP是否真实存在。这个接口只展示app的基本信息id 、name、
         * remark，其他信息不显示。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkAppV2(checkAppV2Request?: CheckAppV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps/validation/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let appId;

            if (checkAppV2Request !== null && checkAppV2Request !== undefined) {
                if (checkAppV2Request instanceof CheckAppV2Request) {
                    instanceId = checkAppV2Request.instanceId;
                    appId = checkAppV2Request.appId;
                } else {
                    instanceId = checkAppV2Request['instance_id'];
                    appId = checkAppV2Request['app_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling checkAppV2.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling checkAppV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * APP即应用，是一个可以访问API的身份标识。将API授权给APP后，APP即可调用API。
         * 创建一个APP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAnAppV2(createAnAppV2Request?: CreateAnAppV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createAnAppV2Request !== null && createAnAppV2Request !== undefined) {
                if (createAnAppV2Request instanceof CreateAnAppV2Request) {
                    instanceId = createAnAppV2Request.instanceId;
                    body = createAnAppV2Request.body
                } else {
                    instanceId = createAnAppV2Request['instance_id'];
                    body = createAnAppV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAnAppV2.');
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
         * 创建App Code时，可以不指定具体值，由后台自动生成随机字符串填充。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAppCodeAutoV2(createAppCodeAutoV2Request?: CreateAppCodeAutoV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps/{app_id}/app-codes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let appId;

            if (createAppCodeAutoV2Request !== null && createAppCodeAutoV2Request !== undefined) {
                if (createAppCodeAutoV2Request instanceof CreateAppCodeAutoV2Request) {
                    instanceId = createAppCodeAutoV2Request.instanceId;
                    appId = createAppCodeAutoV2Request.appId;
                } else {
                    instanceId = createAppCodeAutoV2Request['instance_id'];
                    appId = createAppCodeAutoV2Request['app_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAppCodeAutoV2.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling createAppCodeAutoV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * App Code为APP应用下的子模块，创建App Code之后，可以实现简易的APP认证。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAppCodeV2(createAppCodeV2Request?: CreateAppCodeV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps/{app_id}/app-codes",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let appId;

            if (createAppCodeV2Request !== null && createAppCodeV2Request !== undefined) {
                if (createAppCodeV2Request instanceof CreateAppCodeV2Request) {
                    instanceId = createAppCodeV2Request.instanceId;
                    appId = createAppCodeV2Request.appId;
                    body = createAppCodeV2Request.body
                } else {
                    instanceId = createAppCodeV2Request['instance_id'];
                    appId = createAppCodeV2Request['app_id'];
                    body = createAppCodeV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAppCodeV2.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling createAppCodeV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建凭据配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAppQuota(createAppQuotaRequest?: CreateAppQuotaRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/app-quotas",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createAppQuotaRequest !== null && createAppQuotaRequest !== undefined) {
                if (createAppQuotaRequest instanceof CreateAppQuotaRequest) {
                    instanceId = createAppQuotaRequest.instanceId;
                    body = createAppQuotaRequest.body
                } else {
                    instanceId = createAppQuotaRequest['instance_id'];
                    body = createAppQuotaRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAppQuota.');
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
         * 创建自定义认证
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCustomAuthorizerV2(createCustomAuthorizerV2Request?: CreateCustomAuthorizerV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/authorizers",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createCustomAuthorizerV2Request !== null && createCustomAuthorizerV2Request !== undefined) {
                if (createCustomAuthorizerV2Request instanceof CreateCustomAuthorizerV2Request) {
                    instanceId = createCustomAuthorizerV2Request.instanceId;
                    body = createCustomAuthorizerV2Request.body
                } else {
                    instanceId = createCustomAuthorizerV2Request['instance_id'];
                    body = createCustomAuthorizerV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createCustomAuthorizerV2.');
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
         * 在实际的生产中，API提供者可能有多个环境，如开发环境、测试环境、生产环境等，用户可以自由将API发布到某个环境，供调用者调用。
         * 
         * 
         * 对于不同的环境，API的版本、请求地址甚至于包括请求消息等均有可能不同。如：某个API，v1.0的版本为稳定版本，发布到了生产环境供生产使用，同时，该API正处于迭代中，v1.1的版本是开发人员交付测试人员进行测试的版本，发布在测试环境上，而v1.2的版本目前开发团队正处于开发过程中，可以发布到开发环境进行自测等。
         * 
         * 
         * 为此，API网关提供多环境管理功能，使租户能够最大化的模拟实际场景，低成本的接入API网关。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEnvironmentV2(createEnvironmentV2Request?: CreateEnvironmentV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/envs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createEnvironmentV2Request !== null && createEnvironmentV2Request !== undefined) {
                if (createEnvironmentV2Request instanceof CreateEnvironmentV2Request) {
                    instanceId = createEnvironmentV2Request.instanceId;
                    body = createEnvironmentV2Request.body
                } else {
                    instanceId = createEnvironmentV2Request['instance_id'];
                    body = createEnvironmentV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createEnvironmentV2.');
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
         * 将API发布到不同的环境后，对于不同的环境，可能会有不同的环境变量，比如，API的服务部署地址，请求的版本号等。
         * 
         * 
         * 用户可以定义不同的环境变量，用户在定义API时，在API的定义中使用这些变量，当调用API时，API网关会将这些变量替换成真实的变量值，以达到不同环境的区分效果。
         * 
         * 
         * 环境变量定义在API分组上，该分组下的所有API都可以使用这些变量。
         * 
         * &gt; 1. 环境变量的变量名称必须保持唯一，即一个分组在同一个环境上不能有两个同名的变量。
         * &gt; 2. 环境变量区分大小写，即变量ABC与变量abc是两个不同的变量。
         * &gt; 3. 设置了环境变量后，使用到该变量的API的调试功能将不可使用。
         * &gt; 4. 定义了环境变量后，使用到环境变量的地方应该以对称的#标识环境变量，当API发布到相应的环境后，会对环境变量的值进行替换，如：定义的API的URL为：https://#address#:8080，环境变量address在RELEASE环境上的值为：192.168.1.5，则API发布到RELEASE环境后的真实的URL为：https://192.168.1.5:8080。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEnvironmentVariableV2(createEnvironmentVariableV2Request?: CreateEnvironmentVariableV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/env-variables",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createEnvironmentVariableV2Request !== null && createEnvironmentVariableV2Request !== undefined) {
                if (createEnvironmentVariableV2Request instanceof CreateEnvironmentVariableV2Request) {
                    instanceId = createEnvironmentVariableV2Request.instanceId;
                    body = createEnvironmentVariableV2Request.body
                } else {
                    instanceId = createEnvironmentVariableV2Request['instance_id'];
                    body = createEnvironmentVariableV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createEnvironmentVariableV2.');
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
         * 为实例配置需要的特性。
         * 
         * 支持配置的特性列表及特性配置示例请参考本手册中的“附录 &gt; 实例支持的APIG特性”章节。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFeatureV2(createFeatureV2Request?: CreateFeatureV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/features",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createFeatureV2Request !== null && createFeatureV2Request !== undefined) {
                if (createFeatureV2Request instanceof CreateFeatureV2Request) {
                    instanceId = createFeatureV2Request.instanceId;
                    body = createFeatureV2Request.body
                } else {
                    instanceId = createFeatureV2Request['instance_id'];
                    body = createFeatureV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createFeatureV2.');
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
         * 新增分组下自定义响应
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGatewayResponseV2(createGatewayResponseV2Request?: CreateGatewayResponseV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/gateway-responses",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let groupId;

            if (createGatewayResponseV2Request !== null && createGatewayResponseV2Request !== undefined) {
                if (createGatewayResponseV2Request instanceof CreateGatewayResponseV2Request) {
                    instanceId = createGatewayResponseV2Request.instanceId;
                    groupId = createGatewayResponseV2Request.groupId;
                    body = createGatewayResponseV2Request.body
                } else {
                    instanceId = createGatewayResponseV2Request['instance_id'];
                    groupId = createGatewayResponseV2Request['group_id'];
                    body = createGatewayResponseV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createGatewayResponseV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling createGatewayResponseV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建按需专享版实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceV2(createInstanceV2Request?: CreateInstanceV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createInstanceV2Request !== null && createInstanceV2Request !== undefined) {
                if (createInstanceV2Request instanceof CreateInstanceV2Request) {
                    body = createInstanceV2Request.body
                } else {
                    body = createInstanceV2Request['body'];
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
         * 创建编排规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrchestration(createOrchestrationRequest?: CreateOrchestrationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/orchestrations",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createOrchestrationRequest !== null && createOrchestrationRequest !== undefined) {
                if (createOrchestrationRequest instanceof CreateOrchestrationRequest) {
                    instanceId = createOrchestrationRequest.instanceId;
                    body = createOrchestrationRequest.body
                } else {
                    instanceId = createOrchestrationRequest['instance_id'];
                    body = createOrchestrationRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createOrchestration.');
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
         * 创建包周期专享版实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrder(createOrderRequest?: CreateOrderRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/prepay-instances",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createOrderRequest !== null && createOrderRequest !== undefined) {
                if (createOrderRequest instanceof CreateOrderRequest) {
                    body = createOrderRequest.body
                } else {
                    body = createOrderRequest['body'];
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
         * 创建插件信息。
         * - 插件不允许重名
         * - 插件创建后未绑定API前是无意义的，绑定API后，对绑定的API即时生效
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPlugin(createPluginRequest?: CreatePluginRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/plugins",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createPluginRequest !== null && createPluginRequest !== undefined) {
                if (createPluginRequest instanceof CreatePluginRequest) {
                    instanceId = createPluginRequest.instanceId;
                    body = createPluginRequest.body
                } else {
                    instanceId = createPluginRequest['instance_id'];
                    body = createPluginRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createPlugin.');
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
         * 创建按需规格变更订单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPostPayResizeOrder(createPostPayResizeOrderRequest?: CreatePostPayResizeOrderRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/postpaid-resize",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createPostPayResizeOrderRequest !== null && createPostPayResizeOrderRequest !== undefined) {
                if (createPostPayResizeOrderRequest instanceof CreatePostPayResizeOrderRequest) {
                    instanceId = createPostPayResizeOrderRequest.instanceId;
                    body = createPostPayResizeOrderRequest.body
                } else {
                    instanceId = createPostPayResizeOrderRequest['instance_id'];
                    body = createPostPayResizeOrderRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createPostPayResizeOrder.');
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
         * 创建包周期规格变更订单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrepayResize(createPrepayResizeRequest?: CreatePrepayResizeRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/prepay-resize",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createPrepayResizeRequest !== null && createPrepayResizeRequest !== undefined) {
                if (createPrepayResizeRequest instanceof CreatePrepayResizeRequest) {
                    instanceId = createPrepayResizeRequest.instanceId;
                    body = createPrepayResizeRequest.body
                } else {
                    instanceId = createPrepayResizeRequest['instance_id'];
                    body = createPrepayResizeRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createPrepayResize.');
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
         * 当API上线后，系统会默认给每个API提供一个流控策略，API提供者可以根据自身API的服务能力及负载情况变更这个流控策略。
         * 流控策略即限制API在一定长度的时间内，能够允许被访问的最大次数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRequestThrottlingPolicyV2(createRequestThrottlingPolicyV2Request?: CreateRequestThrottlingPolicyV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttles",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createRequestThrottlingPolicyV2Request !== null && createRequestThrottlingPolicyV2Request !== undefined) {
                if (createRequestThrottlingPolicyV2Request instanceof CreateRequestThrottlingPolicyV2Request) {
                    instanceId = createRequestThrottlingPolicyV2Request.instanceId;
                    body = createRequestThrottlingPolicyV2Request.body
                } else {
                    instanceId = createRequestThrottlingPolicyV2Request['instance_id'];
                    body = createRequestThrottlingPolicyV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createRequestThrottlingPolicyV2.');
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
         * 为了保护API的安全性，建议租户为API的访问提供一套保护机制，即租户开放的API，需要对请求来源进行认证，不符合认证的请求直接拒绝访问。
         * 
         * 
         * 其中，签名密钥就是API安全保护机制的一种。
         * 
         * 
         * 租户创建一个签名密钥，并将签名密钥与API进行绑定，则API网关在请求这个API时，就会使用绑定的签名密钥对请求参数进行数据加密，生成签名。当租户的后端服务收到请求时，可以校验这个签名，如果签名校验不通过，则该请求不是API网关发出的请求，租户可以拒绝这个请求，从而保证API的安全性，避免API被未知来源的请求攻击。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSignatureKeyV2(createSignatureKeyV2Request?: CreateSignatureKeyV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/signs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createSignatureKeyV2Request !== null && createSignatureKeyV2Request !== undefined) {
                if (createSignatureKeyV2Request instanceof CreateSignatureKeyV2Request) {
                    instanceId = createSignatureKeyV2Request.instanceId;
                    body = createSignatureKeyV2Request.body
                } else {
                    instanceId = createSignatureKeyV2Request['instance_id'];
                    body = createSignatureKeyV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createSignatureKeyV2.');
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
         * 流控策略可以限制一段时间内可以访问API的最大次数，也可以限制一段时间内单个租户和单个APP可以访问API的最大次数。
         * 
         * 如果想要对某个特定的APP进行特殊设置，例如设置所有APP每分钟的访问次数为500次，但想设置APP1每分钟的访问次数为800次，可以通过在流控策略中设置特殊APP来实现该功能。
         * 
         * 为流控策略添加一个特殊设置的对象，可以是APP，也可以是租户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSpecialThrottlingConfigurationV2(createSpecialThrottlingConfigurationV2Request?: CreateSpecialThrottlingConfigurationV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttles/{throttle_id}/throttle-specials",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let throttleId;

            if (createSpecialThrottlingConfigurationV2Request !== null && createSpecialThrottlingConfigurationV2Request !== undefined) {
                if (createSpecialThrottlingConfigurationV2Request instanceof CreateSpecialThrottlingConfigurationV2Request) {
                    instanceId = createSpecialThrottlingConfigurationV2Request.instanceId;
                    throttleId = createSpecialThrottlingConfigurationV2Request.throttleId;
                    body = createSpecialThrottlingConfigurationV2Request.body
                } else {
                    instanceId = createSpecialThrottlingConfigurationV2Request['instance_id'];
                    throttleId = createSpecialThrottlingConfigurationV2Request['throttle_id'];
                    body = createSpecialThrottlingConfigurationV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createSpecialThrottlingConfigurationV2.');
            }
            if (throttleId === null || throttleId === undefined) {
            throw new RequiredError('throttleId','Required parameter throttleId was null or undefined when calling createSpecialThrottlingConfigurationV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'throttle_id': throttleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除凭据的访问控制信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAppAcl(deleteAppAclRequest?: DeleteAppAclRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps/{app_id}/app-acl",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let appId;

            if (deleteAppAclRequest !== null && deleteAppAclRequest !== undefined) {
                if (deleteAppAclRequest instanceof DeleteAppAclRequest) {
                    instanceId = deleteAppAclRequest.instanceId;
                    appId = deleteAppAclRequest.appId;
                } else {
                    instanceId = deleteAppAclRequest['instance_id'];
                    appId = deleteAppAclRequest['app_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAppAcl.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling deleteAppAcl.');
            }

            options.pathParams = { 'instance_id': instanceId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除App Code，App Code删除后，将无法再通过简易认证访问对应的API。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAppCodeV2(deleteAppCodeV2Request?: DeleteAppCodeV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps/{app_id}/app-codes/{app_code_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let appId;
            
            let appCodeId;

            if (deleteAppCodeV2Request !== null && deleteAppCodeV2Request !== undefined) {
                if (deleteAppCodeV2Request instanceof DeleteAppCodeV2Request) {
                    instanceId = deleteAppCodeV2Request.instanceId;
                    appId = deleteAppCodeV2Request.appId;
                    appCodeId = deleteAppCodeV2Request.appCodeId;
                } else {
                    instanceId = deleteAppCodeV2Request['instance_id'];
                    appId = deleteAppCodeV2Request['app_id'];
                    appCodeId = deleteAppCodeV2Request['app_code_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAppCodeV2.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling deleteAppCodeV2.');
            }
            if (appCodeId === null || appCodeId === undefined) {
            throw new RequiredError('appCodeId','Required parameter appCodeId was null or undefined when calling deleteAppCodeV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'app_id': appId,'app_code_id': appCodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除凭据配额。删除凭据配额时，同时删除凭据配额和凭据的关联关系
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAppQuota(deleteAppQuotaRequest?: DeleteAppQuotaRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/app-quotas/{app_quota_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let appQuotaId;

            if (deleteAppQuotaRequest !== null && deleteAppQuotaRequest !== undefined) {
                if (deleteAppQuotaRequest instanceof DeleteAppQuotaRequest) {
                    instanceId = deleteAppQuotaRequest.instanceId;
                    appQuotaId = deleteAppQuotaRequest.appQuotaId;
                } else {
                    instanceId = deleteAppQuotaRequest['instance_id'];
                    appQuotaId = deleteAppQuotaRequest['app_quota_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAppQuota.');
            }
            if (appQuotaId === null || appQuotaId === undefined) {
            throw new RequiredError('appQuotaId','Required parameter appQuotaId was null or undefined when calling deleteAppQuota.');
            }

            options.pathParams = { 'instance_id': instanceId,'app_quota_id': appQuotaId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的APP。
         * APP删除后，将无法再调用任何API[；其中，云商店自动创建的APP无法被删除](tag:hws)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAppV2(deleteAppV2Request?: DeleteAppV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let appId;

            if (deleteAppV2Request !== null && deleteAppV2Request !== undefined) {
                if (deleteAppV2Request instanceof DeleteAppV2Request) {
                    instanceId = deleteAppV2Request.instanceId;
                    appId = deleteAppV2Request.appId;
                } else {
                    instanceId = deleteAppV2Request['instance_id'];
                    appId = deleteAppV2Request['app_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAppV2.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling deleteAppV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除自定义认证
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCustomAuthorizerV2(deleteCustomAuthorizerV2Request?: DeleteCustomAuthorizerV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/authorizers/{authorizer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let authorizerId;

            if (deleteCustomAuthorizerV2Request !== null && deleteCustomAuthorizerV2Request !== undefined) {
                if (deleteCustomAuthorizerV2Request instanceof DeleteCustomAuthorizerV2Request) {
                    instanceId = deleteCustomAuthorizerV2Request.instanceId;
                    authorizerId = deleteCustomAuthorizerV2Request.authorizerId;
                } else {
                    instanceId = deleteCustomAuthorizerV2Request['instance_id'];
                    authorizerId = deleteCustomAuthorizerV2Request['authorizer_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteCustomAuthorizerV2.');
            }
            if (authorizerId === null || authorizerId === undefined) {
            throw new RequiredError('authorizerId','Required parameter authorizerId was null or undefined when calling deleteCustomAuthorizerV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'authorizer_id': authorizerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除实例指定的自定义入方向端口，不包含默认端口80和443。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCustomIngressPort(deleteCustomIngressPortRequest?: DeleteCustomIngressPortRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/custom-ingress-ports/{ingress_port_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let ingressPortId;

            if (deleteCustomIngressPortRequest !== null && deleteCustomIngressPortRequest !== undefined) {
                if (deleteCustomIngressPortRequest instanceof DeleteCustomIngressPortRequest) {
                    instanceId = deleteCustomIngressPortRequest.instanceId;
                    ingressPortId = deleteCustomIngressPortRequest.ingressPortId;
                } else {
                    instanceId = deleteCustomIngressPortRequest['instance_id'];
                    ingressPortId = deleteCustomIngressPortRequest['ingress_port_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteCustomIngressPort.');
            }
            if (ingressPortId === null || ingressPortId === undefined) {
            throw new RequiredError('ingressPortId','Required parameter ingressPortId was null or undefined when calling deleteCustomIngressPort.');
            }

            options.pathParams = { 'instance_id': instanceId,'ingress_port_id': ingressPortId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除实例终端节点连接白名单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEndpointPermissions(deleteEndpointPermissionsRequest?: DeleteEndpointPermissionsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-endpoint/permissions/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (deleteEndpointPermissionsRequest !== null && deleteEndpointPermissionsRequest !== undefined) {
                if (deleteEndpointPermissionsRequest instanceof DeleteEndpointPermissionsRequest) {
                    instanceId = deleteEndpointPermissionsRequest.instanceId;
                    body = deleteEndpointPermissionsRequest.body
                } else {
                    instanceId = deleteEndpointPermissionsRequest['instance_id'];
                    body = deleteEndpointPermissionsRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteEndpointPermissions.');
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
         * 删除指定的环境。
         * 
         * 该操作将导致此API在指定的环境无法被访问，可能会影响相当一部分应用和用户。请确保已经告知用户，或者确认需要强制下线。
         * 
         * 环境上存在已发布的API时，该环境不能被删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEnvironmentV2(deleteEnvironmentV2Request?: DeleteEnvironmentV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/envs/{env_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let envId;

            if (deleteEnvironmentV2Request !== null && deleteEnvironmentV2Request !== undefined) {
                if (deleteEnvironmentV2Request instanceof DeleteEnvironmentV2Request) {
                    instanceId = deleteEnvironmentV2Request.instanceId;
                    envId = deleteEnvironmentV2Request.envId;
                } else {
                    instanceId = deleteEnvironmentV2Request['instance_id'];
                    envId = deleteEnvironmentV2Request['env_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteEnvironmentV2.');
            }
            if (envId === null || envId === undefined) {
            throw new RequiredError('envId','Required parameter envId was null or undefined when calling deleteEnvironmentV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'env_id': envId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的环境变量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEnvironmentVariableV2(deleteEnvironmentVariableV2Request?: DeleteEnvironmentVariableV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/env-variables/{env_variable_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let envVariableId;

            if (deleteEnvironmentVariableV2Request !== null && deleteEnvironmentVariableV2Request !== undefined) {
                if (deleteEnvironmentVariableV2Request instanceof DeleteEnvironmentVariableV2Request) {
                    instanceId = deleteEnvironmentVariableV2Request.instanceId;
                    envVariableId = deleteEnvironmentVariableV2Request.envVariableId;
                } else {
                    instanceId = deleteEnvironmentVariableV2Request['instance_id'];
                    envVariableId = deleteEnvironmentVariableV2Request['env_variable_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteEnvironmentVariableV2.');
            }
            if (envVariableId === null || envVariableId === undefined) {
            throw new RequiredError('envVariableId','Required parameter envVariableId was null or undefined when calling deleteEnvironmentVariableV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'env_variable_id': envVariableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除分组指定错误类型的自定义响应配置，还原为使用默认值的配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGatewayResponseTypeV2(deleteGatewayResponseTypeV2Request?: DeleteGatewayResponseTypeV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/gateway-responses/{response_id}/{response_type}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let groupId;
            
            let responseId;
            
            let responseType;

            if (deleteGatewayResponseTypeV2Request !== null && deleteGatewayResponseTypeV2Request !== undefined) {
                if (deleteGatewayResponseTypeV2Request instanceof DeleteGatewayResponseTypeV2Request) {
                    instanceId = deleteGatewayResponseTypeV2Request.instanceId;
                    groupId = deleteGatewayResponseTypeV2Request.groupId;
                    responseId = deleteGatewayResponseTypeV2Request.responseId;
                    responseType = deleteGatewayResponseTypeV2Request.responseType;
                } else {
                    instanceId = deleteGatewayResponseTypeV2Request['instance_id'];
                    groupId = deleteGatewayResponseTypeV2Request['group_id'];
                    responseId = deleteGatewayResponseTypeV2Request['response_id'];
                    responseType = deleteGatewayResponseTypeV2Request['response_type'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteGatewayResponseTypeV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteGatewayResponseTypeV2.');
            }
            if (responseId === null || responseId === undefined) {
            throw new RequiredError('responseId','Required parameter responseId was null or undefined when calling deleteGatewayResponseTypeV2.');
            }
            if (responseType === null || responseType === undefined) {
            throw new RequiredError('responseType','Required parameter responseType was null or undefined when calling deleteGatewayResponseTypeV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'response_id': responseId,'response_type': responseType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除分组自定义响应
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGatewayResponseV2(deleteGatewayResponseV2Request?: DeleteGatewayResponseV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/gateway-responses/{response_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let groupId;
            
            let responseId;

            if (deleteGatewayResponseV2Request !== null && deleteGatewayResponseV2Request !== undefined) {
                if (deleteGatewayResponseV2Request instanceof DeleteGatewayResponseV2Request) {
                    instanceId = deleteGatewayResponseV2Request.instanceId;
                    groupId = deleteGatewayResponseV2Request.groupId;
                    responseId = deleteGatewayResponseV2Request.responseId;
                } else {
                    instanceId = deleteGatewayResponseV2Request['instance_id'];
                    groupId = deleteGatewayResponseV2Request['group_id'];
                    responseId = deleteGatewayResponseV2Request['response_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteGatewayResponseV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteGatewayResponseV2.');
            }
            if (responseId === null || responseId === undefined) {
            throw new RequiredError('responseId','Required parameter responseId was null or undefined when calling deleteGatewayResponseV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'response_id': responseId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除专享版实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstancesV2(deleteInstancesV2Request?: DeleteInstancesV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (deleteInstancesV2Request !== null && deleteInstancesV2Request !== undefined) {
                if (deleteInstancesV2Request instanceof DeleteInstancesV2Request) {
                    instanceId = deleteInstancesV2Request.instanceId;
                } else {
                    instanceId = deleteInstancesV2Request['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstancesV2.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除编排规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteOrchestration(deleteOrchestrationRequest?: DeleteOrchestrationRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/orchestrations/{orchestration_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let orchestrationId;

            if (deleteOrchestrationRequest !== null && deleteOrchestrationRequest !== undefined) {
                if (deleteOrchestrationRequest instanceof DeleteOrchestrationRequest) {
                    instanceId = deleteOrchestrationRequest.instanceId;
                    orchestrationId = deleteOrchestrationRequest.orchestrationId;
                } else {
                    instanceId = deleteOrchestrationRequest['instance_id'];
                    orchestrationId = deleteOrchestrationRequest['orchestration_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteOrchestration.');
            }
            if (orchestrationId === null || orchestrationId === undefined) {
            throw new RequiredError('orchestrationId','Required parameter orchestrationId was null or undefined when calling deleteOrchestration.');
            }

            options.pathParams = { 'instance_id': instanceId,'orchestration_id': orchestrationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除插件。
         * - 必须先解除API和插件的绑定关系，否则删除报错
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePlugin(deletePluginRequest?: DeletePluginRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/plugins/{plugin_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let pluginId;

            if (deletePluginRequest !== null && deletePluginRequest !== undefined) {
                if (deletePluginRequest instanceof DeletePluginRequest) {
                    instanceId = deletePluginRequest.instanceId;
                    pluginId = deletePluginRequest.pluginId;
                } else {
                    instanceId = deletePluginRequest['instance_id'];
                    pluginId = deletePluginRequest['plugin_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deletePlugin.');
            }
            if (pluginId === null || pluginId === undefined) {
            throw new RequiredError('pluginId','Required parameter pluginId was null or undefined when calling deletePlugin.');
            }

            options.pathParams = { 'instance_id': instanceId,'plugin_id': pluginId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的流控策略，以及该流控策略与API的所有绑定关系。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRequestThrottlingPolicyV2(deleteRequestThrottlingPolicyV2Request?: DeleteRequestThrottlingPolicyV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttles/{throttle_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let throttleId;

            if (deleteRequestThrottlingPolicyV2Request !== null && deleteRequestThrottlingPolicyV2Request !== undefined) {
                if (deleteRequestThrottlingPolicyV2Request instanceof DeleteRequestThrottlingPolicyV2Request) {
                    instanceId = deleteRequestThrottlingPolicyV2Request.instanceId;
                    throttleId = deleteRequestThrottlingPolicyV2Request.throttleId;
                } else {
                    instanceId = deleteRequestThrottlingPolicyV2Request['instance_id'];
                    throttleId = deleteRequestThrottlingPolicyV2Request['throttle_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteRequestThrottlingPolicyV2.');
            }
            if (throttleId === null || throttleId === undefined) {
            throw new RequiredError('throttleId','Required parameter throttleId was null or undefined when calling deleteRequestThrottlingPolicyV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'throttle_id': throttleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的签名密钥，删除签名密钥时，其配置的绑定关系会一并删除，相应的签名密钥会失效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSignatureKeyV2(deleteSignatureKeyV2Request?: DeleteSignatureKeyV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/signs/{sign_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let signId;

            if (deleteSignatureKeyV2Request !== null && deleteSignatureKeyV2Request !== undefined) {
                if (deleteSignatureKeyV2Request instanceof DeleteSignatureKeyV2Request) {
                    instanceId = deleteSignatureKeyV2Request.instanceId;
                    signId = deleteSignatureKeyV2Request.signId;
                } else {
                    instanceId = deleteSignatureKeyV2Request['instance_id'];
                    signId = deleteSignatureKeyV2Request['sign_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteSignatureKeyV2.');
            }
            if (signId === null || signId === undefined) {
            throw new RequiredError('signId','Required parameter signId was null or undefined when calling deleteSignatureKeyV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'sign_id': signId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除某个流控策略的某个特殊配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSpecialThrottlingConfigurationV2(deleteSpecialThrottlingConfigurationV2Request?: DeleteSpecialThrottlingConfigurationV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttles/{throttle_id}/throttle-specials/{strategy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let throttleId;
            
            let strategyId;

            if (deleteSpecialThrottlingConfigurationV2Request !== null && deleteSpecialThrottlingConfigurationV2Request !== undefined) {
                if (deleteSpecialThrottlingConfigurationV2Request instanceof DeleteSpecialThrottlingConfigurationV2Request) {
                    instanceId = deleteSpecialThrottlingConfigurationV2Request.instanceId;
                    throttleId = deleteSpecialThrottlingConfigurationV2Request.throttleId;
                    strategyId = deleteSpecialThrottlingConfigurationV2Request.strategyId;
                } else {
                    instanceId = deleteSpecialThrottlingConfigurationV2Request['instance_id'];
                    throttleId = deleteSpecialThrottlingConfigurationV2Request['throttle_id'];
                    strategyId = deleteSpecialThrottlingConfigurationV2Request['strategy_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteSpecialThrottlingConfigurationV2.');
            }
            if (throttleId === null || throttleId === undefined) {
            throw new RequiredError('throttleId','Required parameter throttleId was null or undefined when calling deleteSpecialThrottlingConfigurationV2.');
            }
            if (strategyId === null || strategyId === undefined) {
            throw new RequiredError('strategyId','Required parameter strategyId was null or undefined when calling deleteSpecialThrottlingConfigurationV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'throttle_id': throttleId,'strategy_id': strategyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除绑定在插件上的API。
         * - 解绑及时生效
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachApiFromPlugin(detachApiFromPluginRequest?: DetachApiFromPluginRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/plugins/{plugin_id}/detach",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let pluginId;

            if (detachApiFromPluginRequest !== null && detachApiFromPluginRequest !== undefined) {
                if (detachApiFromPluginRequest instanceof DetachApiFromPluginRequest) {
                    instanceId = detachApiFromPluginRequest.instanceId;
                    pluginId = detachApiFromPluginRequest.pluginId;
                    body = detachApiFromPluginRequest.body
                } else {
                    instanceId = detachApiFromPluginRequest['instance_id'];
                    pluginId = detachApiFromPluginRequest['plugin_id'];
                    body = detachApiFromPluginRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling detachApiFromPlugin.');
            }
            if (pluginId === null || pluginId === undefined) {
            throw new RequiredError('pluginId','Required parameter pluginId was null or undefined when calling detachApiFromPlugin.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'plugin_id': pluginId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除绑定在API上的插件。
         * - 解绑及时生效
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachPluginFromApi(detachPluginFromApiRequest?: DetachPluginFromApiRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/{api_id}/plugins/detach",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let apiId;

            if (detachPluginFromApiRequest !== null && detachPluginFromApiRequest !== undefined) {
                if (detachPluginFromApiRequest instanceof DetachPluginFromApiRequest) {
                    instanceId = detachPluginFromApiRequest.instanceId;
                    apiId = detachPluginFromApiRequest.apiId;
                    body = detachPluginFromApiRequest.body
                } else {
                    instanceId = detachPluginFromApiRequest['instance_id'];
                    apiId = detachPluginFromApiRequest['api_id'];
                    body = detachPluginFromApiRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling detachPluginFromApi.');
            }
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling detachPluginFromApi.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除凭据配额和凭据的绑定
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateAppQuotaWithApp(disassociateAppQuotaWithAppRequest?: DisassociateAppQuotaWithAppRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/app-quotas/{app_quota_id}/bound-apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let appQuotaId;
            
            let appId;

            if (disassociateAppQuotaWithAppRequest !== null && disassociateAppQuotaWithAppRequest !== undefined) {
                if (disassociateAppQuotaWithAppRequest instanceof DisassociateAppQuotaWithAppRequest) {
                    instanceId = disassociateAppQuotaWithAppRequest.instanceId;
                    appQuotaId = disassociateAppQuotaWithAppRequest.appQuotaId;
                    appId = disassociateAppQuotaWithAppRequest.appId;
                } else {
                    instanceId = disassociateAppQuotaWithAppRequest['instance_id'];
                    appQuotaId = disassociateAppQuotaWithAppRequest['app_quota_id'];
                    appId = disassociateAppQuotaWithAppRequest['app_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling disassociateAppQuotaWithApp.');
            }
            if (appQuotaId === null || appQuotaId === undefined) {
            throw new RequiredError('appQuotaId','Required parameter appQuotaId was null or undefined when calling disassociateAppQuotaWithApp.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling disassociateAppQuotaWithApp.');
            }

            options.pathParams = { 'instance_id': instanceId,'app_quota_id': appQuotaId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 如果域名证书不再需要或者已过期，则可以删除证书内容。在使用自定义入方向端口的特性时，相同的域名会同时解绑证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateCertificateV2(disassociateCertificateV2Request?: DisassociateCertificateV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/domains/{domain_id}/certificate/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let groupId;
            
            let domainId;
            
            let certificateId;

            if (disassociateCertificateV2Request !== null && disassociateCertificateV2Request !== undefined) {
                if (disassociateCertificateV2Request instanceof DisassociateCertificateV2Request) {
                    instanceId = disassociateCertificateV2Request.instanceId;
                    groupId = disassociateCertificateV2Request.groupId;
                    domainId = disassociateCertificateV2Request.domainId;
                    certificateId = disassociateCertificateV2Request.certificateId;
                } else {
                    instanceId = disassociateCertificateV2Request['instance_id'];
                    groupId = disassociateCertificateV2Request['group_id'];
                    domainId = disassociateCertificateV2Request['domain_id'];
                    certificateId = disassociateCertificateV2Request['certificate_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling disassociateCertificateV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling disassociateCertificateV2.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling disassociateCertificateV2.');
            }
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling disassociateCertificateV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'domain_id': domainId,'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 如果API分组不再需要绑定某个自定义域名，则可以为此API分组解绑此域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateDomainV2(disassociateDomainV2Request?: DisassociateDomainV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/domains/{domain_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let groupId;
            
            let domainId;

            if (disassociateDomainV2Request !== null && disassociateDomainV2Request !== undefined) {
                if (disassociateDomainV2Request instanceof DisassociateDomainV2Request) {
                    instanceId = disassociateDomainV2Request.instanceId;
                    groupId = disassociateDomainV2Request.groupId;
                    domainId = disassociateDomainV2Request.domainId;
                } else {
                    instanceId = disassociateDomainV2Request['instance_id'];
                    groupId = disassociateDomainV2Request['group_id'];
                    domainId = disassociateDomainV2Request['domain_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling disassociateDomainV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling disassociateDomainV2.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling disassociateDomainV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除API与签名密钥的绑定关系。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateSignatureKeyV2(disassociateSignatureKeyV2Request?: DisassociateSignatureKeyV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/sign-bindings/{sign_bindings_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let signBindingsId;

            if (disassociateSignatureKeyV2Request !== null && disassociateSignatureKeyV2Request !== undefined) {
                if (disassociateSignatureKeyV2Request instanceof DisassociateSignatureKeyV2Request) {
                    instanceId = disassociateSignatureKeyV2Request.instanceId;
                    signBindingsId = disassociateSignatureKeyV2Request.signBindingsId;
                } else {
                    instanceId = disassociateSignatureKeyV2Request['instance_id'];
                    signBindingsId = disassociateSignatureKeyV2Request['sign_bindings_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling disassociateSignatureKeyV2.');
            }
            if (signBindingsId === null || signBindingsId === undefined) {
            throw new RequiredError('signBindingsId','Required parameter signBindingsId was null or undefined when calling disassociateSignatureKeyV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'sign_bindings_id': signBindingsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出分组下API的定义信息。导出文件内容符合swagger标准规范，API网关自定义扩展字段请参考《API网关用户指南》的“导入导出API：扩展定义”章节。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportApiDefinitionsAsync(exportApiDefinitionsAsyncRequest?: ExportApiDefinitionsAsyncRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/openapi/async-export",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let instanceId;
            
            let oasVersion;

            if (exportApiDefinitionsAsyncRequest !== null && exportApiDefinitionsAsyncRequest !== undefined) {
                if (exportApiDefinitionsAsyncRequest instanceof ExportApiDefinitionsAsyncRequest) {
                    instanceId = exportApiDefinitionsAsyncRequest.instanceId;
                    body = exportApiDefinitionsAsyncRequest.body
                    oasVersion = exportApiDefinitionsAsyncRequest.oasVersion;
                } else {
                    instanceId = exportApiDefinitionsAsyncRequest['instance_id'];
                    body = exportApiDefinitionsAsyncRequest['body'];
                    oasVersion = exportApiDefinitionsAsyncRequest['oas_version'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling exportApiDefinitionsAsync.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (oasVersion !== null && oasVersion !== undefined) {
                localVarQueryParameter['oas_version'] = oasVersion;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导入API。导入文件内容需要符合swagger标准规范，API网关自定义扩展字段请参考《API网关用户指南》的“导入导出API：扩展定义”章节。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importApiDefinitionsAsync(importApiDefinitionsAsyncRequest?: ImportApiDefinitionsAsyncRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/openapi/async-import",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            
            let instanceId;
            let fileName;
            
            let isCreateGroup;
            
            let groupId;
            
            let extendMode;
            
            let simpleMode;
            
            let mockMode;
            
            let apiMode;
            

            if (importApiDefinitionsAsyncRequest !== null && importApiDefinitionsAsyncRequest !== undefined) {
                if (importApiDefinitionsAsyncRequest instanceof ImportApiDefinitionsAsyncRequest) {
                    instanceId = importApiDefinitionsAsyncRequest.instanceId;
                    fileName = importApiDefinitionsAsyncRequest.body?.fileName;
                    isCreateGroup = importApiDefinitionsAsyncRequest.body?.isCreateGroup;
                    groupId = importApiDefinitionsAsyncRequest.body?.groupId;
                    extendMode = importApiDefinitionsAsyncRequest.body?.extendMode;
                    simpleMode = importApiDefinitionsAsyncRequest.body?.simpleMode;
                    mockMode = importApiDefinitionsAsyncRequest.body?.mockMode;
                    apiMode = importApiDefinitionsAsyncRequest.body?.apiMode;
                } else {
                    instanceId = importApiDefinitionsAsyncRequest['instance_id'];
                    fileName = importApiDefinitionsAsyncRequest['body']['fileName'];
                    isCreateGroup = importApiDefinitionsAsyncRequest['body']['isCreateGroup'];
                    groupId = importApiDefinitionsAsyncRequest['body']['groupId'];
                    extendMode = importApiDefinitionsAsyncRequest['body']['extendMode'];
                    simpleMode = importApiDefinitionsAsyncRequest['body']['simpleMode'];
                    mockMode = importApiDefinitionsAsyncRequest['body']['mockMode'];
                    apiMode = importApiDefinitionsAsyncRequest['body']['apiMode'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling importApiDefinitionsAsync.');
            }
            if (fileName === null || fileName === undefined) {
            throw new RequiredError('fileName','Required parameter fileName was null or undefined when calling importApiDefinitionsAsync.');
            }
            if (isCreateGroup !== undefined) { 
                localVarFormParams.append('is_create_group', isCreateGroup as any);
            }
            if (groupId !== undefined) { 
                localVarFormParams.append('group_id', groupId as any);
            }
            if (extendMode !== undefined) { 
                localVarFormParams.append('extend_mode', extendMode as any);
            }
            if (simpleMode !== undefined) { 
                localVarFormParams.append('simple_mode', simpleMode as any);
            }
            if (mockMode !== undefined) { 
                localVarFormParams.append('mock_mode', mockMode as any);
            }
            if (apiMode !== undefined) { 
                localVarFormParams.append('api_mode', apiMode as any);
            }
            if (fileName !== undefined) { 
                localVarFormParams.append('file_name', fileName as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导入微服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importMicroservice(importMicroserviceRequest?: ImportMicroserviceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/microservice/import",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (importMicroserviceRequest !== null && importMicroserviceRequest !== undefined) {
                if (importMicroserviceRequest instanceof ImportMicroserviceRequest) {
                    instanceId = importMicroserviceRequest.instanceId;
                    body = importMicroserviceRequest.body
                } else {
                    instanceId = importMicroserviceRequest['instance_id'];
                    body = importMicroserviceRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling importMicroservice.');
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
         * 查询可绑定当前API的插件信息。
         * - 支持分页返回
         * - 支持插件名称模糊查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiAttachablePlugins(listApiAttachablePluginsRequest?: ListApiAttachablePluginsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/{api_id}/attachable-plugins",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let apiId;
            
            let offset;
            
            let limit;
            
            let envId;
            
            let pluginName;
            
            let pluginType;
            
            let pluginId;

            if (listApiAttachablePluginsRequest !== null && listApiAttachablePluginsRequest !== undefined) {
                if (listApiAttachablePluginsRequest instanceof ListApiAttachablePluginsRequest) {
                    instanceId = listApiAttachablePluginsRequest.instanceId;
                    apiId = listApiAttachablePluginsRequest.apiId;
                    offset = listApiAttachablePluginsRequest.offset;
                    limit = listApiAttachablePluginsRequest.limit;
                    envId = listApiAttachablePluginsRequest.envId;
                    pluginName = listApiAttachablePluginsRequest.pluginName;
                    pluginType = listApiAttachablePluginsRequest.pluginType;
                    pluginId = listApiAttachablePluginsRequest.pluginId;
                } else {
                    instanceId = listApiAttachablePluginsRequest['instance_id'];
                    apiId = listApiAttachablePluginsRequest['api_id'];
                    offset = listApiAttachablePluginsRequest['offset'];
                    limit = listApiAttachablePluginsRequest['limit'];
                    envId = listApiAttachablePluginsRequest['env_id'];
                    pluginName = listApiAttachablePluginsRequest['plugin_name'];
                    pluginType = listApiAttachablePluginsRequest['plugin_type'];
                    pluginId = listApiAttachablePluginsRequest['plugin_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApiAttachablePlugins.');
            }
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling listApiAttachablePlugins.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (pluginName !== null && pluginName !== undefined) {
                localVarQueryParameter['plugin_name'] = pluginName;
            }
            if (pluginType !== null && pluginType !== undefined) {
                localVarQueryParameter['plugin_type'] = pluginType;
            }
            if (pluginId !== null && pluginId !== undefined) {
                localVarQueryParameter['plugin_id'] = pluginId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定API下绑定的插件信息。
         * - 用于查询指定API下已经绑定的插件列表信息
         * - 支持分页返回
         * - 支持插件名称模糊查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiAttachedPlugins(listApiAttachedPluginsRequest?: ListApiAttachedPluginsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/{api_id}/attached-plugins",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let apiId;
            
            let offset;
            
            let limit;
            
            let envId;
            
            let pluginName;
            
            let pluginId;
            
            let envName;
            
            let pluginType;

            if (listApiAttachedPluginsRequest !== null && listApiAttachedPluginsRequest !== undefined) {
                if (listApiAttachedPluginsRequest instanceof ListApiAttachedPluginsRequest) {
                    instanceId = listApiAttachedPluginsRequest.instanceId;
                    apiId = listApiAttachedPluginsRequest.apiId;
                    offset = listApiAttachedPluginsRequest.offset;
                    limit = listApiAttachedPluginsRequest.limit;
                    envId = listApiAttachedPluginsRequest.envId;
                    pluginName = listApiAttachedPluginsRequest.pluginName;
                    pluginId = listApiAttachedPluginsRequest.pluginId;
                    envName = listApiAttachedPluginsRequest.envName;
                    pluginType = listApiAttachedPluginsRequest.pluginType;
                } else {
                    instanceId = listApiAttachedPluginsRequest['instance_id'];
                    apiId = listApiAttachedPluginsRequest['api_id'];
                    offset = listApiAttachedPluginsRequest['offset'];
                    limit = listApiAttachedPluginsRequest['limit'];
                    envId = listApiAttachedPluginsRequest['env_id'];
                    pluginName = listApiAttachedPluginsRequest['plugin_name'];
                    pluginId = listApiAttachedPluginsRequest['plugin_id'];
                    envName = listApiAttachedPluginsRequest['env_name'];
                    pluginType = listApiAttachedPluginsRequest['plugin_type'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApiAttachedPlugins.');
            }
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling listApiAttachedPlugins.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (pluginName !== null && pluginName !== undefined) {
                localVarQueryParameter['plugin_name'] = pluginName;
            }
            if (pluginId !== null && pluginId !== undefined) {
                localVarQueryParameter['plugin_id'] = pluginId;
            }
            if (envName !== null && envName !== undefined) {
                localVarQueryParameter['env_name'] = envName;
            }
            if (pluginType !== null && pluginType !== undefined) {
                localVarQueryParameter['plugin_type'] = pluginType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户名下的API分组概况。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiGroupsQuantitiesV2(listApiGroupsQuantitiesV2Request?: ListApiGroupsQuantitiesV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/resources/outline/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listApiGroupsQuantitiesV2Request !== null && listApiGroupsQuantitiesV2Request !== undefined) {
                if (listApiGroupsQuantitiesV2Request instanceof ListApiGroupsQuantitiesV2Request) {
                    instanceId = listApiGroupsQuantitiesV2Request.instanceId;
                } else {
                    instanceId = listApiGroupsQuantitiesV2Request['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApiGroupsQuantitiesV2.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户名下的API概况：已发布到RELEASE环境的API个数，未发布到RELEASE环境的API个数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiQuantitiesV2(listApiQuantitiesV2Request?: ListApiQuantitiesV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/resources/outline/apis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listApiQuantitiesV2Request !== null && listApiQuantitiesV2Request !== undefined) {
                if (listApiQuantitiesV2Request instanceof ListApiQuantitiesV2Request) {
                    instanceId = listApiQuantitiesV2Request.instanceId;
                } else {
                    instanceId = listApiQuantitiesV2Request['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApiQuantitiesV2.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某个签名密钥上已经绑定的API列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApisBindedToSignatureKeyV2(listApisBindedToSignatureKeyV2Request?: ListApisBindedToSignatureKeyV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/sign-bindings/binded-apis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let signId;
            
            let offset;
            
            let limit;
            
            let envId;
            
            let apiId;
            
            let apiName;
            
            let groupId;

            if (listApisBindedToSignatureKeyV2Request !== null && listApisBindedToSignatureKeyV2Request !== undefined) {
                if (listApisBindedToSignatureKeyV2Request instanceof ListApisBindedToSignatureKeyV2Request) {
                    instanceId = listApisBindedToSignatureKeyV2Request.instanceId;
                    signId = listApisBindedToSignatureKeyV2Request.signId;
                    offset = listApisBindedToSignatureKeyV2Request.offset;
                    limit = listApisBindedToSignatureKeyV2Request.limit;
                    envId = listApisBindedToSignatureKeyV2Request.envId;
                    apiId = listApisBindedToSignatureKeyV2Request.apiId;
                    apiName = listApisBindedToSignatureKeyV2Request.apiName;
                    groupId = listApisBindedToSignatureKeyV2Request.groupId;
                } else {
                    instanceId = listApisBindedToSignatureKeyV2Request['instance_id'];
                    signId = listApisBindedToSignatureKeyV2Request['sign_id'];
                    offset = listApisBindedToSignatureKeyV2Request['offset'];
                    limit = listApisBindedToSignatureKeyV2Request['limit'];
                    envId = listApisBindedToSignatureKeyV2Request['env_id'];
                    apiId = listApisBindedToSignatureKeyV2Request['api_id'];
                    apiName = listApisBindedToSignatureKeyV2Request['api_name'];
                    groupId = listApisBindedToSignatureKeyV2Request['group_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApisBindedToSignatureKeyV2.');
            }
            if (signId === null || signId === undefined) {
                throw new RequiredError('signId','Required parameter signId was null or undefined when calling listApisBindedToSignatureKeyV2.');
            }
            if (signId !== null && signId !== undefined) {
                localVarQueryParameter['sign_id'] = signId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (apiName !== null && apiName !== undefined) {
                localVarQueryParameter['api_name'] = apiName;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有未绑定到该签名密钥上的API列表。需要API已经发布，未发布的API不予展示。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApisNotBoundWithSignatureKeyV2(listApisNotBoundWithSignatureKeyV2Request?: ListApisNotBoundWithSignatureKeyV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/sign-bindings/unbinded-apis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let signId;
            
            let offset;
            
            let limit;
            
            let envId;
            
            let apiId;
            
            let apiName;
            
            let groupId;

            if (listApisNotBoundWithSignatureKeyV2Request !== null && listApisNotBoundWithSignatureKeyV2Request !== undefined) {
                if (listApisNotBoundWithSignatureKeyV2Request instanceof ListApisNotBoundWithSignatureKeyV2Request) {
                    instanceId = listApisNotBoundWithSignatureKeyV2Request.instanceId;
                    signId = listApisNotBoundWithSignatureKeyV2Request.signId;
                    offset = listApisNotBoundWithSignatureKeyV2Request.offset;
                    limit = listApisNotBoundWithSignatureKeyV2Request.limit;
                    envId = listApisNotBoundWithSignatureKeyV2Request.envId;
                    apiId = listApisNotBoundWithSignatureKeyV2Request.apiId;
                    apiName = listApisNotBoundWithSignatureKeyV2Request.apiName;
                    groupId = listApisNotBoundWithSignatureKeyV2Request.groupId;
                } else {
                    instanceId = listApisNotBoundWithSignatureKeyV2Request['instance_id'];
                    signId = listApisNotBoundWithSignatureKeyV2Request['sign_id'];
                    offset = listApisNotBoundWithSignatureKeyV2Request['offset'];
                    limit = listApisNotBoundWithSignatureKeyV2Request['limit'];
                    envId = listApisNotBoundWithSignatureKeyV2Request['env_id'];
                    apiId = listApisNotBoundWithSignatureKeyV2Request['api_id'];
                    apiName = listApisNotBoundWithSignatureKeyV2Request['api_name'];
                    groupId = listApisNotBoundWithSignatureKeyV2Request['group_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApisNotBoundWithSignatureKeyV2.');
            }
            if (signId === null || signId === undefined) {
                throw new RequiredError('signId','Required parameter signId was null or undefined when calling listApisNotBoundWithSignatureKeyV2.');
            }
            if (signId !== null && signId !== undefined) {
                localVarQueryParameter['sign_id'] = signId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (apiName !== null && apiName !== undefined) {
                localVarQueryParameter['api_name'] = apiName;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询App Code列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppCodesV2(listAppCodesV2Request?: ListAppCodesV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps/{app_id}/app-codes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let appId;
            
            let offset;
            
            let limit;

            if (listAppCodesV2Request !== null && listAppCodesV2Request !== undefined) {
                if (listAppCodesV2Request instanceof ListAppCodesV2Request) {
                    instanceId = listAppCodesV2Request.instanceId;
                    appId = listAppCodesV2Request.appId;
                    offset = listAppCodesV2Request.offset;
                    limit = listAppCodesV2Request.limit;
                } else {
                    instanceId = listAppCodesV2Request['instance_id'];
                    appId = listAppCodesV2Request['app_id'];
                    offset = listAppCodesV2Request['offset'];
                    limit = listAppCodesV2Request['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAppCodesV2.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling listAppCodesV2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户名下的APP概况：已进行API访问授权的APP个数，未进行API访问授权的APP个数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppQuantitiesV2(listAppQuantitiesV2Request?: ListAppQuantitiesV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/resources/outline/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listAppQuantitiesV2Request !== null && listAppQuantitiesV2Request !== undefined) {
                if (listAppQuantitiesV2Request instanceof ListAppQuantitiesV2Request) {
                    instanceId = listAppQuantitiesV2Request.instanceId;
                } else {
                    instanceId = listAppQuantitiesV2Request['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAppQuantitiesV2.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询凭据配额可绑定的凭据列表。支持按凭据名称模糊搜索
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppQuotaBindableApps(listAppQuotaBindableAppsRequest?: ListAppQuotaBindableAppsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/app-quotas/{app_quota_id}/bindable-apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let appQuotaId;
            
            let offset;
            
            let limit;
            
            let appName;

            if (listAppQuotaBindableAppsRequest !== null && listAppQuotaBindableAppsRequest !== undefined) {
                if (listAppQuotaBindableAppsRequest instanceof ListAppQuotaBindableAppsRequest) {
                    instanceId = listAppQuotaBindableAppsRequest.instanceId;
                    appQuotaId = listAppQuotaBindableAppsRequest.appQuotaId;
                    offset = listAppQuotaBindableAppsRequest.offset;
                    limit = listAppQuotaBindableAppsRequest.limit;
                    appName = listAppQuotaBindableAppsRequest.appName;
                } else {
                    instanceId = listAppQuotaBindableAppsRequest['instance_id'];
                    appQuotaId = listAppQuotaBindableAppsRequest['app_quota_id'];
                    offset = listAppQuotaBindableAppsRequest['offset'];
                    limit = listAppQuotaBindableAppsRequest['limit'];
                    appName = listAppQuotaBindableAppsRequest['app_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAppQuotaBindableApps.');
            }
            if (appQuotaId === null || appQuotaId === undefined) {
            throw new RequiredError('appQuotaId','Required parameter appQuotaId was null or undefined when calling listAppQuotaBindableApps.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'app_quota_id': appQuotaId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询凭据配额已绑定的凭据列表。支持按凭据名称模糊匹配
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppQuotaBoundApps(listAppQuotaBoundAppsRequest?: ListAppQuotaBoundAppsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/app-quotas/{app_quota_id}/bound-apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let appQuotaId;
            
            let offset;
            
            let limit;
            
            let appName;

            if (listAppQuotaBoundAppsRequest !== null && listAppQuotaBoundAppsRequest !== undefined) {
                if (listAppQuotaBoundAppsRequest instanceof ListAppQuotaBoundAppsRequest) {
                    instanceId = listAppQuotaBoundAppsRequest.instanceId;
                    appQuotaId = listAppQuotaBoundAppsRequest.appQuotaId;
                    offset = listAppQuotaBoundAppsRequest.offset;
                    limit = listAppQuotaBoundAppsRequest.limit;
                    appName = listAppQuotaBoundAppsRequest.appName;
                } else {
                    instanceId = listAppQuotaBoundAppsRequest['instance_id'];
                    appQuotaId = listAppQuotaBoundAppsRequest['app_quota_id'];
                    offset = listAppQuotaBoundAppsRequest['offset'];
                    limit = listAppQuotaBoundAppsRequest['limit'];
                    appName = listAppQuotaBoundAppsRequest['app_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAppQuotaBoundApps.');
            }
            if (appQuotaId === null || appQuotaId === undefined) {
            throw new RequiredError('appQuotaId','Required parameter appQuotaId was null or undefined when calling listAppQuotaBoundApps.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'app_quota_id': appQuotaId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取凭据配额列表。支持根据名称模糊查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppQuotas(listAppQuotasRequest?: ListAppQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/app-quotas",
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
            
            let name;

            if (listAppQuotasRequest !== null && listAppQuotasRequest !== undefined) {
                if (listAppQuotasRequest instanceof ListAppQuotasRequest) {
                    instanceId = listAppQuotasRequest.instanceId;
                    offset = listAppQuotasRequest.offset;
                    limit = listAppQuotasRequest.limit;
                    name = listAppQuotasRequest.name;
                } else {
                    instanceId = listAppQuotasRequest['instance_id'];
                    offset = listAppQuotasRequest['offset'];
                    limit = listAppQuotasRequest['limit'];
                    name = listAppQuotasRequest['name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAppQuotas.');
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
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询APP列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppsV2(listAppsV2Request?: ListAppsV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps",
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
            
            let id;
            
            let name;
            
            let status;
            
            let appKey;
            
            let creator;
            
            let preciseSearch;

            if (listAppsV2Request !== null && listAppsV2Request !== undefined) {
                if (listAppsV2Request instanceof ListAppsV2Request) {
                    instanceId = listAppsV2Request.instanceId;
                    offset = listAppsV2Request.offset;
                    limit = listAppsV2Request.limit;
                    id = listAppsV2Request.id;
                    name = listAppsV2Request.name;
                    status = listAppsV2Request.status;
                    appKey = listAppsV2Request.appKey;
                    creator = listAppsV2Request.creator;
                    preciseSearch = listAppsV2Request.preciseSearch;
                } else {
                    instanceId = listAppsV2Request['instance_id'];
                    offset = listAppsV2Request['offset'];
                    limit = listAppsV2Request['limit'];
                    id = listAppsV2Request['id'];
                    name = listAppsV2Request['name'];
                    status = listAppsV2Request['status'];
                    appKey = listAppsV2Request['app_key'];
                    creator = listAppsV2Request['creator'];
                    preciseSearch = listAppsV2Request['precise_search'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAppsV2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (appKey !== null && appKey !== undefined) {
                localVarQueryParameter['app_key'] = appKey;
            }
            if (creator !== null && creator !== undefined) {
                localVarQueryParameter['creator'] = creator;
            }
            if (preciseSearch !== null && preciseSearch !== undefined) {
                localVarQueryParameter['precise_search'] = preciseSearch;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看可用区信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailableZonesV2() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/available-zones",
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
         * 查询自定义认证列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCustomAuthorizersV2(listCustomAuthorizersV2Request?: ListCustomAuthorizersV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/authorizers",
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
            
            let id;
            
            let name;
            
            let type;

            if (listCustomAuthorizersV2Request !== null && listCustomAuthorizersV2Request !== undefined) {
                if (listCustomAuthorizersV2Request instanceof ListCustomAuthorizersV2Request) {
                    instanceId = listCustomAuthorizersV2Request.instanceId;
                    offset = listCustomAuthorizersV2Request.offset;
                    limit = listCustomAuthorizersV2Request.limit;
                    id = listCustomAuthorizersV2Request.id;
                    name = listCustomAuthorizersV2Request.name;
                    type = listCustomAuthorizersV2Request.type;
                } else {
                    instanceId = listCustomAuthorizersV2Request['instance_id'];
                    offset = listCustomAuthorizersV2Request['offset'];
                    limit = listCustomAuthorizersV2Request['limit'];
                    id = listCustomAuthorizersV2Request['id'];
                    name = listCustomAuthorizersV2Request['name'];
                    type = listCustomAuthorizersV2Request['type'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listCustomAuthorizersV2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
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

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例指定的自定义入方向端口绑定的域名信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCustomIngressPortDomains(listCustomIngressPortDomainsRequest?: ListCustomIngressPortDomainsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/custom-ingress-ports/{ingress_port_id}/domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let ingressPortId;
            
            let offset;
            
            let limit;
            
            let domainName;

            if (listCustomIngressPortDomainsRequest !== null && listCustomIngressPortDomainsRequest !== undefined) {
                if (listCustomIngressPortDomainsRequest instanceof ListCustomIngressPortDomainsRequest) {
                    instanceId = listCustomIngressPortDomainsRequest.instanceId;
                    ingressPortId = listCustomIngressPortDomainsRequest.ingressPortId;
                    offset = listCustomIngressPortDomainsRequest.offset;
                    limit = listCustomIngressPortDomainsRequest.limit;
                    domainName = listCustomIngressPortDomainsRequest.domainName;
                } else {
                    instanceId = listCustomIngressPortDomainsRequest['instance_id'];
                    ingressPortId = listCustomIngressPortDomainsRequest['ingress_port_id'];
                    offset = listCustomIngressPortDomainsRequest['offset'];
                    limit = listCustomIngressPortDomainsRequest['limit'];
                    domainName = listCustomIngressPortDomainsRequest['domain_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listCustomIngressPortDomains.');
            }
            if (ingressPortId === null || ingressPortId === undefined) {
            throw new RequiredError('ingressPortId','Required parameter ingressPortId was null or undefined when calling listCustomIngressPortDomains.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'ingress_port_id': ingressPortId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例的自定义入方向端口列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCustomIngressPorts(listCustomIngressPortsRequest?: ListCustomIngressPortsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/custom-ingress-ports",
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
            
            let protocol;
            
            let ingressPort;

            if (listCustomIngressPortsRequest !== null && listCustomIngressPortsRequest !== undefined) {
                if (listCustomIngressPortsRequest instanceof ListCustomIngressPortsRequest) {
                    instanceId = listCustomIngressPortsRequest.instanceId;
                    offset = listCustomIngressPortsRequest.offset;
                    limit = listCustomIngressPortsRequest.limit;
                    protocol = listCustomIngressPortsRequest.protocol;
                    ingressPort = listCustomIngressPortsRequest.ingressPort;
                } else {
                    instanceId = listCustomIngressPortsRequest['instance_id'];
                    offset = listCustomIngressPortsRequest['offset'];
                    limit = listCustomIngressPortsRequest['limit'];
                    protocol = listCustomIngressPortsRequest['protocol'];
                    ingressPort = listCustomIngressPortsRequest['ingress_port'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listCustomIngressPorts.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (ingressPort !== null && ingressPort !== undefined) {
                localVarQueryParameter['ingress_port'] = ingressPort;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实例终端节点连接列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEndpointConnections(listEndpointConnectionsRequest?: ListEndpointConnectionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-endpoint/connections",
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
            
            let id;
            
            let markerId;
            
            let status;

            if (listEndpointConnectionsRequest !== null && listEndpointConnectionsRequest !== undefined) {
                if (listEndpointConnectionsRequest instanceof ListEndpointConnectionsRequest) {
                    instanceId = listEndpointConnectionsRequest.instanceId;
                    offset = listEndpointConnectionsRequest.offset;
                    limit = listEndpointConnectionsRequest.limit;
                    id = listEndpointConnectionsRequest.id;
                    markerId = listEndpointConnectionsRequest.markerId;
                    status = listEndpointConnectionsRequest.status;
                } else {
                    instanceId = listEndpointConnectionsRequest['instance_id'];
                    offset = listEndpointConnectionsRequest['offset'];
                    limit = listEndpointConnectionsRequest['limit'];
                    id = listEndpointConnectionsRequest['id'];
                    markerId = listEndpointConnectionsRequest['marker_id'];
                    status = listEndpointConnectionsRequest['status'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listEndpointConnections.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (markerId !== null && markerId !== undefined) {
                localVarQueryParameter['marker_id'] = markerId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前实例终端节点服务的白名单列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEndpointPermissions(listEndpointPermissionsRequest?: ListEndpointPermissionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-endpoint/permissions",
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
            
            let permission;

            if (listEndpointPermissionsRequest !== null && listEndpointPermissionsRequest !== undefined) {
                if (listEndpointPermissionsRequest instanceof ListEndpointPermissionsRequest) {
                    instanceId = listEndpointPermissionsRequest.instanceId;
                    offset = listEndpointPermissionsRequest.offset;
                    limit = listEndpointPermissionsRequest.limit;
                    permission = listEndpointPermissionsRequest.permission;
                } else {
                    instanceId = listEndpointPermissionsRequest['instance_id'];
                    offset = listEndpointPermissionsRequest['offset'];
                    limit = listEndpointPermissionsRequest['limit'];
                    permission = listEndpointPermissionsRequest['permission'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listEndpointPermissions.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (permission !== null && permission !== undefined) {
                localVarQueryParameter['permission'] = permission;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询分组下的所有环境变量的列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnvironmentVariablesV2(listEnvironmentVariablesV2Request?: ListEnvironmentVariablesV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/env-variables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let groupId;
            
            let offset;
            
            let limit;
            
            let envId;
            
            let variableName;
            
            let preciseSearch;

            if (listEnvironmentVariablesV2Request !== null && listEnvironmentVariablesV2Request !== undefined) {
                if (listEnvironmentVariablesV2Request instanceof ListEnvironmentVariablesV2Request) {
                    instanceId = listEnvironmentVariablesV2Request.instanceId;
                    groupId = listEnvironmentVariablesV2Request.groupId;
                    offset = listEnvironmentVariablesV2Request.offset;
                    limit = listEnvironmentVariablesV2Request.limit;
                    envId = listEnvironmentVariablesV2Request.envId;
                    variableName = listEnvironmentVariablesV2Request.variableName;
                    preciseSearch = listEnvironmentVariablesV2Request.preciseSearch;
                } else {
                    instanceId = listEnvironmentVariablesV2Request['instance_id'];
                    groupId = listEnvironmentVariablesV2Request['group_id'];
                    offset = listEnvironmentVariablesV2Request['offset'];
                    limit = listEnvironmentVariablesV2Request['limit'];
                    envId = listEnvironmentVariablesV2Request['env_id'];
                    variableName = listEnvironmentVariablesV2Request['variable_name'];
                    preciseSearch = listEnvironmentVariablesV2Request['precise_search'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listEnvironmentVariablesV2.');
            }
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listEnvironmentVariablesV2.');
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (variableName !== null && variableName !== undefined) {
                localVarQueryParameter['variable_name'] = variableName;
            }
            if (preciseSearch !== null && preciseSearch !== undefined) {
                localVarQueryParameter['precise_search'] = preciseSearch;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询符合条件的环境列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnvironmentsV2(listEnvironmentsV2Request?: ListEnvironmentsV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/envs",
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
            
            let name;

            if (listEnvironmentsV2Request !== null && listEnvironmentsV2Request !== undefined) {
                if (listEnvironmentsV2Request instanceof ListEnvironmentsV2Request) {
                    instanceId = listEnvironmentsV2Request.instanceId;
                    offset = listEnvironmentsV2Request.offset;
                    limit = listEnvironmentsV2Request.limit;
                    name = listEnvironmentsV2Request.name;
                } else {
                    instanceId = listEnvironmentsV2Request['instance_id'];
                    offset = listEnvironmentsV2Request['offset'];
                    limit = listEnvironmentsV2Request['limit'];
                    name = listEnvironmentsV2Request['name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listEnvironmentsV2.');
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
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看实例特性列表。注意：实例不支持以下特性的需要联系技术支持升级实例版本。
         * 
         * 支持配置的特性列表及特性配置示例请参考本手册中的“附录 &gt; 实例支持的APIG特性”章节。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFeaturesV2(listFeaturesV2Request?: ListFeaturesV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/features",
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

            if (listFeaturesV2Request !== null && listFeaturesV2Request !== undefined) {
                if (listFeaturesV2Request instanceof ListFeaturesV2Request) {
                    instanceId = listFeaturesV2Request.instanceId;
                    offset = listFeaturesV2Request.offset;
                    limit = listFeaturesV2Request.limit;
                } else {
                    instanceId = listFeaturesV2Request['instance_id'];
                    offset = listFeaturesV2Request['offset'];
                    limit = listFeaturesV2Request['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listFeaturesV2.');
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
         * 查询分组自定义响应列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGatewayResponsesV2(listGatewayResponsesV2Request?: ListGatewayResponsesV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/gateway-responses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let groupId;
            
            let offset;
            
            let limit;

            if (listGatewayResponsesV2Request !== null && listGatewayResponsesV2Request !== undefined) {
                if (listGatewayResponsesV2Request instanceof ListGatewayResponsesV2Request) {
                    instanceId = listGatewayResponsesV2Request.instanceId;
                    groupId = listGatewayResponsesV2Request.groupId;
                    offset = listGatewayResponsesV2Request.offset;
                    limit = listGatewayResponsesV2Request.limit;
                } else {
                    instanceId = listGatewayResponsesV2Request['instance_id'];
                    groupId = listGatewayResponsesV2Request['group_id'];
                    offset = listGatewayResponsesV2Request['offset'];
                    limit = listGatewayResponsesV2Request['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listGatewayResponsesV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listGatewayResponsesV2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户实例配置列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceConfigsV2(listInstanceConfigsV2Request?: ListInstanceConfigsV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instance/configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listInstanceConfigsV2Request !== null && listInstanceConfigsV2Request !== undefined) {
                if (listInstanceConfigsV2Request instanceof ListInstanceConfigsV2Request) {
                    offset = listInstanceConfigsV2Request.offset;
                    limit = listInstanceConfigsV2Request.limit;
                } else {
                    offset = listInstanceConfigsV2Request['offset'];
                    limit = listInstanceConfigsV2Request['limit'];
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
         * 查询实例支持的特性列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceFeatures(listInstanceFeaturesRequest?: ListInstanceFeaturesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/instance-features",
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

            if (listInstanceFeaturesRequest !== null && listInstanceFeaturesRequest !== undefined) {
                if (listInstanceFeaturesRequest instanceof ListInstanceFeaturesRequest) {
                    instanceId = listInstanceFeaturesRequest.instanceId;
                    offset = listInstanceFeaturesRequest.offset;
                    limit = listInstanceFeaturesRequest.limit;
                } else {
                    instanceId = listInstanceFeaturesRequest['instance_id'];
                    offset = listInstanceFeaturesRequest['offset'];
                    limit = listInstanceFeaturesRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceFeatures.');
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
         * 查询单个实例的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstanceTags(listInstanceTagsRequest?: ListInstanceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/instance-tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listInstanceTagsRequest !== null && listInstanceTagsRequest !== undefined) {
                if (listInstanceTagsRequest instanceof ListInstanceTagsRequest) {
                    instanceId = listInstanceTagsRequest.instanceId;
                } else {
                    instanceId = listInstanceTagsRequest['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listInstanceTags.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过标签查询实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstancesByTags(listInstancesByTagsRequest?: ListInstancesByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/resource-instances/filter",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let offset;
            
            let limit;

            if (listInstancesByTagsRequest !== null && listInstancesByTagsRequest !== undefined) {
                if (listInstancesByTagsRequest instanceof ListInstancesByTagsRequest) {
                    body = listInstancesByTagsRequest.body
                    offset = listInstancesByTagsRequest.offset;
                    limit = listInstancesByTagsRequest.limit;
                } else {
                    body = listInstancesByTagsRequest['body'];
                    offset = listInstancesByTagsRequest['offset'];
                    limit = listInstancesByTagsRequest['limit'];
                }
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询专享版实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstancesV2(listInstancesV2Request?: ListInstancesV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let instanceId;
            
            let instanceName;
            
            let status;

            if (listInstancesV2Request !== null && listInstancesV2Request !== undefined) {
                if (listInstancesV2Request instanceof ListInstancesV2Request) {
                    offset = listInstancesV2Request.offset;
                    limit = listInstancesV2Request.limit;
                    instanceId = listInstancesV2Request.instanceId;
                    instanceName = listInstancesV2Request.instanceName;
                    status = listInstancesV2Request.status;
                } else {
                    offset = listInstancesV2Request['offset'];
                    limit = listInstancesV2Request['limit'];
                    instanceId = listInstancesV2Request['instance_id'];
                    instanceName = listInstancesV2Request['instance_name'];
                    status = listInstancesV2Request['status'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (instanceName !== null && instanceName !== undefined) {
                localVarQueryParameter['instance_name'] = instanceName;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据API的id和最近的一段时间查询API被调用的次数，统计周期为1分钟。查询范围一小时以内，一分钟一个样本，其样本值为一分钟内的累计值。
         * &gt; 为了安全起见，在服务器上使用curl命令调用接口查询信息后，需要清理历史操作记录，包括但不限于“~/.bash_history”、“/var/log/messages”（如有）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLatelyApiStatisticsV2(listLatelyApiStatisticsV2Request?: ListLatelyApiStatisticsV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/statistics/api/latest",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let apiId;
            
            let duration;

            if (listLatelyApiStatisticsV2Request !== null && listLatelyApiStatisticsV2Request !== undefined) {
                if (listLatelyApiStatisticsV2Request instanceof ListLatelyApiStatisticsV2Request) {
                    instanceId = listLatelyApiStatisticsV2Request.instanceId;
                    apiId = listLatelyApiStatisticsV2Request.apiId;
                    duration = listLatelyApiStatisticsV2Request.duration;
                } else {
                    instanceId = listLatelyApiStatisticsV2Request['instance_id'];
                    apiId = listLatelyApiStatisticsV2Request['api_id'];
                    duration = listLatelyApiStatisticsV2Request['duration'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listLatelyApiStatisticsV2.');
            }
            if (apiId === null || apiId === undefined) {
                throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling listLatelyApiStatisticsV2.');
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (duration === null || duration === undefined) {
                throw new RequiredError('duration','Required parameter duration was null or undefined when calling listLatelyApiStatisticsV2.');
            }
            if (duration !== null && duration !== undefined) {
                localVarQueryParameter['duration'] = duration;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据API分组的编号查询该分组下所有API被调用的总次数，统计周期为1分钟。查询范围一小时以内，一分钟一个样本，其样本值为一分钟内的累计值。
         * &gt; 为了安全起见，在服务器上使用curl命令调用接口查询信息后，需要清理历史操作记录，包括但不限于“~/.bash_history”、“/var/log/messages”（如有）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLatelyGroupStatisticsV2(listLatelyGroupStatisticsV2Request?: ListLatelyGroupStatisticsV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/statistics/group/latest",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let groupId;

            if (listLatelyGroupStatisticsV2Request !== null && listLatelyGroupStatisticsV2Request !== undefined) {
                if (listLatelyGroupStatisticsV2Request instanceof ListLatelyGroupStatisticsV2Request) {
                    instanceId = listLatelyGroupStatisticsV2Request.instanceId;
                    groupId = listLatelyGroupStatisticsV2Request.groupId;
                } else {
                    instanceId = listLatelyGroupStatisticsV2Request['instance_id'];
                    groupId = listLatelyGroupStatisticsV2Request['group_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listLatelyGroupStatisticsV2.');
            }
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listLatelyGroupStatisticsV2.');
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定时间范围指定指标的指定粒度的监控数据，可以通过参数指定需要查询的数据维度。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMetricData(listMetricDataRequest?: ListMetricDataRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/metric-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dim;
            
            let metricName;
            
            let from;
            
            let to;
            
            let period;
            
            let filter;

            if (listMetricDataRequest !== null && listMetricDataRequest !== undefined) {
                if (listMetricDataRequest instanceof ListMetricDataRequest) {
                    instanceId = listMetricDataRequest.instanceId;
                    dim = listMetricDataRequest.dim;
                    metricName = listMetricDataRequest.metricName;
                    from = listMetricDataRequest.from;
                    to = listMetricDataRequest.to;
                    period = listMetricDataRequest.period;
                    filter = listMetricDataRequest.filter;
                } else {
                    instanceId = listMetricDataRequest['instance_id'];
                    dim = listMetricDataRequest['dim'];
                    metricName = listMetricDataRequest['metric_name'];
                    from = listMetricDataRequest['from'];
                    to = listMetricDataRequest['to'];
                    period = listMetricDataRequest['period'];
                    filter = listMetricDataRequest['filter'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listMetricData.');
            }
            if (dim === null || dim === undefined) {
                throw new RequiredError('dim','Required parameter dim was null or undefined when calling listMetricData.');
            }
            if (dim !== null && dim !== undefined) {
                localVarQueryParameter['dim'] = dim;
            }
            if (metricName === null || metricName === undefined) {
                throw new RequiredError('metricName','Required parameter metricName was null or undefined when calling listMetricData.');
            }
            if (metricName !== null && metricName !== undefined) {
                localVarQueryParameter['metric_name'] = metricName;
            }
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling listMetricData.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling listMetricData.');
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (period === null || period === undefined) {
                throw new RequiredError('period','Required parameter period was null or undefined when calling listMetricData.');
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (filter === null || filter === undefined) {
                throw new RequiredError('filter','Required parameter filter was null or undefined when calling listMetricData.');
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定插件下绑定的API信息
         * - 用于查询指定插件下已经绑定的API列表信息
         * - 支持分页返回
         * - 支持API名称模糊查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOrchestrationAttachedApis(listOrchestrationAttachedApisRequest?: ListOrchestrationAttachedApisRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/orchestrations/{orchestration_id}/attached-apis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let orchestrationId;
            
            let offset;
            
            let limit;
            
            let apiName;
            
            let apiId;

            if (listOrchestrationAttachedApisRequest !== null && listOrchestrationAttachedApisRequest !== undefined) {
                if (listOrchestrationAttachedApisRequest instanceof ListOrchestrationAttachedApisRequest) {
                    instanceId = listOrchestrationAttachedApisRequest.instanceId;
                    orchestrationId = listOrchestrationAttachedApisRequest.orchestrationId;
                    offset = listOrchestrationAttachedApisRequest.offset;
                    limit = listOrchestrationAttachedApisRequest.limit;
                    apiName = listOrchestrationAttachedApisRequest.apiName;
                    apiId = listOrchestrationAttachedApisRequest.apiId;
                } else {
                    instanceId = listOrchestrationAttachedApisRequest['instance_id'];
                    orchestrationId = listOrchestrationAttachedApisRequest['orchestration_id'];
                    offset = listOrchestrationAttachedApisRequest['offset'];
                    limit = listOrchestrationAttachedApisRequest['limit'];
                    apiName = listOrchestrationAttachedApisRequest['api_name'];
                    apiId = listOrchestrationAttachedApisRequest['api_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listOrchestrationAttachedApis.');
            }
            if (orchestrationId === null || orchestrationId === undefined) {
            throw new RequiredError('orchestrationId','Required parameter orchestrationId was null or undefined when calling listOrchestrationAttachedApis.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (apiName !== null && apiName !== undefined) {
                localVarQueryParameter['api_name'] = apiName;
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'orchestration_id': orchestrationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看编排规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOrchestrations(listOrchestrationsRequest?: ListOrchestrationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/orchestrations",
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
            
            let orchestrationName;
            
            let preciseSearch;
            
            let orchestrationId;

            if (listOrchestrationsRequest !== null && listOrchestrationsRequest !== undefined) {
                if (listOrchestrationsRequest instanceof ListOrchestrationsRequest) {
                    instanceId = listOrchestrationsRequest.instanceId;
                    offset = listOrchestrationsRequest.offset;
                    limit = listOrchestrationsRequest.limit;
                    orchestrationName = listOrchestrationsRequest.orchestrationName;
                    preciseSearch = listOrchestrationsRequest.preciseSearch;
                    orchestrationId = listOrchestrationsRequest.orchestrationId;
                } else {
                    instanceId = listOrchestrationsRequest['instance_id'];
                    offset = listOrchestrationsRequest['offset'];
                    limit = listOrchestrationsRequest['limit'];
                    orchestrationName = listOrchestrationsRequest['orchestration_name'];
                    preciseSearch = listOrchestrationsRequest['precise_search'];
                    orchestrationId = listOrchestrationsRequest['orchestration_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listOrchestrations.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (orchestrationName !== null && orchestrationName !== undefined) {
                localVarQueryParameter['orchestration_name'] = orchestrationName;
            }
            if (preciseSearch !== null && preciseSearch !== undefined) {
                localVarQueryParameter['precise_search'] = preciseSearch;
            }
            if (orchestrationId !== null && orchestrationId !== undefined) {
                localVarQueryParameter['orchestration_id'] = orchestrationId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询可绑定当前插件的API信息。
         * - 支持分页返回
         * - 支持API名称模糊查询
         * - 支持已绑定其他插件的API查询返回
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPluginAttachableApis(listPluginAttachableApisRequest?: ListPluginAttachableApisRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/plugins/{plugin_id}/attachable-apis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let pluginId;
            
            let envId;
            
            let offset;
            
            let limit;
            
            let apiName;
            
            let apiId;
            
            let groupId;
            
            let reqMethod;
            
            let reqUri;

            if (listPluginAttachableApisRequest !== null && listPluginAttachableApisRequest !== undefined) {
                if (listPluginAttachableApisRequest instanceof ListPluginAttachableApisRequest) {
                    instanceId = listPluginAttachableApisRequest.instanceId;
                    pluginId = listPluginAttachableApisRequest.pluginId;
                    envId = listPluginAttachableApisRequest.envId;
                    offset = listPluginAttachableApisRequest.offset;
                    limit = listPluginAttachableApisRequest.limit;
                    apiName = listPluginAttachableApisRequest.apiName;
                    apiId = listPluginAttachableApisRequest.apiId;
                    groupId = listPluginAttachableApisRequest.groupId;
                    reqMethod = listPluginAttachableApisRequest.reqMethod;
                    reqUri = listPluginAttachableApisRequest.reqUri;
                } else {
                    instanceId = listPluginAttachableApisRequest['instance_id'];
                    pluginId = listPluginAttachableApisRequest['plugin_id'];
                    envId = listPluginAttachableApisRequest['env_id'];
                    offset = listPluginAttachableApisRequest['offset'];
                    limit = listPluginAttachableApisRequest['limit'];
                    apiName = listPluginAttachableApisRequest['api_name'];
                    apiId = listPluginAttachableApisRequest['api_id'];
                    groupId = listPluginAttachableApisRequest['group_id'];
                    reqMethod = listPluginAttachableApisRequest['req_method'];
                    reqUri = listPluginAttachableApisRequest['req_uri'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPluginAttachableApis.');
            }
            if (pluginId === null || pluginId === undefined) {
            throw new RequiredError('pluginId','Required parameter pluginId was null or undefined when calling listPluginAttachableApis.');
            }
            if (envId === null || envId === undefined) {
                throw new RequiredError('envId','Required parameter envId was null or undefined when calling listPluginAttachableApis.');
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (apiName !== null && apiName !== undefined) {
                localVarQueryParameter['api_name'] = apiName;
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (reqMethod !== null && reqMethod !== undefined) {
                localVarQueryParameter['req_method'] = reqMethod;
            }
            if (reqUri !== null && reqUri !== undefined) {
                localVarQueryParameter['req_uri'] = reqUri;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'plugin_id': pluginId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定插件下绑定的API信息。
         * - 用于查询指定插件下已经绑定的API列表信息
         * - 支持分页返回
         * - 支持API名称模糊查询
         * - 绑定关系列表中返回的API在对应的环境中可能已经下线
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPluginAttachedApis(listPluginAttachedApisRequest?: ListPluginAttachedApisRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/plugins/{plugin_id}/attached-apis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let pluginId;
            
            let offset;
            
            let limit;
            
            let envId;
            
            let apiName;
            
            let apiId;
            
            let groupId;
            
            let reqMethod;
            
            let reqUri;

            if (listPluginAttachedApisRequest !== null && listPluginAttachedApisRequest !== undefined) {
                if (listPluginAttachedApisRequest instanceof ListPluginAttachedApisRequest) {
                    instanceId = listPluginAttachedApisRequest.instanceId;
                    pluginId = listPluginAttachedApisRequest.pluginId;
                    offset = listPluginAttachedApisRequest.offset;
                    limit = listPluginAttachedApisRequest.limit;
                    envId = listPluginAttachedApisRequest.envId;
                    apiName = listPluginAttachedApisRequest.apiName;
                    apiId = listPluginAttachedApisRequest.apiId;
                    groupId = listPluginAttachedApisRequest.groupId;
                    reqMethod = listPluginAttachedApisRequest.reqMethod;
                    reqUri = listPluginAttachedApisRequest.reqUri;
                } else {
                    instanceId = listPluginAttachedApisRequest['instance_id'];
                    pluginId = listPluginAttachedApisRequest['plugin_id'];
                    offset = listPluginAttachedApisRequest['offset'];
                    limit = listPluginAttachedApisRequest['limit'];
                    envId = listPluginAttachedApisRequest['env_id'];
                    apiName = listPluginAttachedApisRequest['api_name'];
                    apiId = listPluginAttachedApisRequest['api_id'];
                    groupId = listPluginAttachedApisRequest['group_id'];
                    reqMethod = listPluginAttachedApisRequest['req_method'];
                    reqUri = listPluginAttachedApisRequest['req_uri'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPluginAttachedApis.');
            }
            if (pluginId === null || pluginId === undefined) {
            throw new RequiredError('pluginId','Required parameter pluginId was null or undefined when calling listPluginAttachedApis.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (apiName !== null && apiName !== undefined) {
                localVarQueryParameter['api_name'] = apiName;
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (reqMethod !== null && reqMethod !== undefined) {
                localVarQueryParameter['req_method'] = reqMethod;
            }
            if (reqUri !== null && reqUri !== undefined) {
                localVarQueryParameter['req_uri'] = reqUri;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'plugin_id': pluginId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询一组符合条件的API网关插件详情。
         * - 支持分页
         * - 支持根据插件类型查询
         * - 支持根据插件可见范围查询
         * - 支持根据插件编码查询
         * - 支持根据名称模糊查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPlugins(listPluginsRequest?: ListPluginsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/plugins",
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
            
            let pluginType;
            
            let pluginScope;
            
            let pluginId;
            
            let pluginName;
            
            let preciseSearch;

            if (listPluginsRequest !== null && listPluginsRequest !== undefined) {
                if (listPluginsRequest instanceof ListPluginsRequest) {
                    instanceId = listPluginsRequest.instanceId;
                    offset = listPluginsRequest.offset;
                    limit = listPluginsRequest.limit;
                    pluginType = listPluginsRequest.pluginType;
                    pluginScope = listPluginsRequest.pluginScope;
                    pluginId = listPluginsRequest.pluginId;
                    pluginName = listPluginsRequest.pluginName;
                    preciseSearch = listPluginsRequest.preciseSearch;
                } else {
                    instanceId = listPluginsRequest['instance_id'];
                    offset = listPluginsRequest['offset'];
                    limit = listPluginsRequest['limit'];
                    pluginType = listPluginsRequest['plugin_type'];
                    pluginScope = listPluginsRequest['plugin_scope'];
                    pluginId = listPluginsRequest['plugin_id'];
                    pluginName = listPluginsRequest['plugin_name'];
                    preciseSearch = listPluginsRequest['precise_search'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPlugins.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (pluginType !== null && pluginType !== undefined) {
                localVarQueryParameter['plugin_type'] = pluginType;
            }
            if (pluginScope !== null && pluginScope !== undefined) {
                localVarQueryParameter['plugin_scope'] = pluginScope;
            }
            if (pluginId !== null && pluginId !== undefined) {
                localVarQueryParameter['plugin_id'] = pluginId;
            }
            if (pluginName !== null && pluginName !== undefined) {
                localVarQueryParameter['plugin_name'] = pluginName;
            }
            if (preciseSearch !== null && preciseSearch !== undefined) {
                localVarQueryParameter['precise_search'] = preciseSearch;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某个实例的租户配置列表，用户可以通过此接口查看各类型资源配置及使用情况。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectCofigsV2(listProjectCofigsV2Request?: ListProjectCofigsV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/project/configs",
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

            if (listProjectCofigsV2Request !== null && listProjectCofigsV2Request !== undefined) {
                if (listProjectCofigsV2Request instanceof ListProjectCofigsV2Request) {
                    instanceId = listProjectCofigsV2Request.instanceId;
                    offset = listProjectCofigsV2Request.offset;
                    limit = listProjectCofigsV2Request.limit;
                } else {
                    instanceId = listProjectCofigsV2Request['instance_id'];
                    offset = listProjectCofigsV2Request['offset'];
                    limit = listProjectCofigsV2Request['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listProjectCofigsV2.');
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
         * 查询项目下所有实例标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectInstanceTags() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instance-tags",
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
         * 查询所有流控策略的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRequestThrottlingPolicyV2(listRequestThrottlingPolicyV2Request?: ListRequestThrottlingPolicyV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttles",
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
            
            let id;
            
            let name;
            
            let preciseSearch;

            if (listRequestThrottlingPolicyV2Request !== null && listRequestThrottlingPolicyV2Request !== undefined) {
                if (listRequestThrottlingPolicyV2Request instanceof ListRequestThrottlingPolicyV2Request) {
                    instanceId = listRequestThrottlingPolicyV2Request.instanceId;
                    offset = listRequestThrottlingPolicyV2Request.offset;
                    limit = listRequestThrottlingPolicyV2Request.limit;
                    id = listRequestThrottlingPolicyV2Request.id;
                    name = listRequestThrottlingPolicyV2Request.name;
                    preciseSearch = listRequestThrottlingPolicyV2Request.preciseSearch;
                } else {
                    instanceId = listRequestThrottlingPolicyV2Request['instance_id'];
                    offset = listRequestThrottlingPolicyV2Request['offset'];
                    limit = listRequestThrottlingPolicyV2Request['limit'];
                    id = listRequestThrottlingPolicyV2Request['id'];
                    name = listRequestThrottlingPolicyV2Request['name'];
                    preciseSearch = listRequestThrottlingPolicyV2Request['precise_search'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRequestThrottlingPolicyV2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (preciseSearch !== null && preciseSearch !== undefined) {
                localVarQueryParameter['precise_search'] = preciseSearch;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某个API绑定的签名密钥列表。每个API在每个环境上应该最多只会绑定一个签名密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSignatureKeysBindedToApiV2(listSignatureKeysBindedToApiV2Request?: ListSignatureKeysBindedToApiV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/sign-bindings/binded-signs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let apiId;
            
            let offset;
            
            let limit;
            
            let signId;
            
            let signName;
            
            let envId;

            if (listSignatureKeysBindedToApiV2Request !== null && listSignatureKeysBindedToApiV2Request !== undefined) {
                if (listSignatureKeysBindedToApiV2Request instanceof ListSignatureKeysBindedToApiV2Request) {
                    instanceId = listSignatureKeysBindedToApiV2Request.instanceId;
                    apiId = listSignatureKeysBindedToApiV2Request.apiId;
                    offset = listSignatureKeysBindedToApiV2Request.offset;
                    limit = listSignatureKeysBindedToApiV2Request.limit;
                    signId = listSignatureKeysBindedToApiV2Request.signId;
                    signName = listSignatureKeysBindedToApiV2Request.signName;
                    envId = listSignatureKeysBindedToApiV2Request.envId;
                } else {
                    instanceId = listSignatureKeysBindedToApiV2Request['instance_id'];
                    apiId = listSignatureKeysBindedToApiV2Request['api_id'];
                    offset = listSignatureKeysBindedToApiV2Request['offset'];
                    limit = listSignatureKeysBindedToApiV2Request['limit'];
                    signId = listSignatureKeysBindedToApiV2Request['sign_id'];
                    signName = listSignatureKeysBindedToApiV2Request['sign_name'];
                    envId = listSignatureKeysBindedToApiV2Request['env_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSignatureKeysBindedToApiV2.');
            }
            if (apiId === null || apiId === undefined) {
                throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling listSignatureKeysBindedToApiV2.');
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (signId !== null && signId !== undefined) {
                localVarQueryParameter['sign_id'] = signId;
            }
            if (signName !== null && signName !== undefined) {
                localVarQueryParameter['sign_name'] = signName;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有签名密钥的信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSignatureKeysV2(listSignatureKeysV2Request?: ListSignatureKeysV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/signs",
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
            
            let id;
            
            let name;
            
            let preciseSearch;

            if (listSignatureKeysV2Request !== null && listSignatureKeysV2Request !== undefined) {
                if (listSignatureKeysV2Request instanceof ListSignatureKeysV2Request) {
                    instanceId = listSignatureKeysV2Request.instanceId;
                    offset = listSignatureKeysV2Request.offset;
                    limit = listSignatureKeysV2Request.limit;
                    id = listSignatureKeysV2Request.id;
                    name = listSignatureKeysV2Request.name;
                    preciseSearch = listSignatureKeysV2Request.preciseSearch;
                } else {
                    instanceId = listSignatureKeysV2Request['instance_id'];
                    offset = listSignatureKeysV2Request['offset'];
                    limit = listSignatureKeysV2Request['limit'];
                    id = listSignatureKeysV2Request['id'];
                    name = listSignatureKeysV2Request['name'];
                    preciseSearch = listSignatureKeysV2Request['precise_search'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSignatureKeysV2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (preciseSearch !== null && preciseSearch !== undefined) {
                localVarQueryParameter['precise_search'] = preciseSearch;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看给流控策略设置的特殊配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSpecialThrottlingConfigurationsV2(listSpecialThrottlingConfigurationsV2Request?: ListSpecialThrottlingConfigurationsV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttles/{throttle_id}/throttle-specials",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let throttleId;
            
            let offset;
            
            let limit;
            
            let objectType;
            
            let appName;
            
            let user;

            if (listSpecialThrottlingConfigurationsV2Request !== null && listSpecialThrottlingConfigurationsV2Request !== undefined) {
                if (listSpecialThrottlingConfigurationsV2Request instanceof ListSpecialThrottlingConfigurationsV2Request) {
                    instanceId = listSpecialThrottlingConfigurationsV2Request.instanceId;
                    throttleId = listSpecialThrottlingConfigurationsV2Request.throttleId;
                    offset = listSpecialThrottlingConfigurationsV2Request.offset;
                    limit = listSpecialThrottlingConfigurationsV2Request.limit;
                    objectType = listSpecialThrottlingConfigurationsV2Request.objectType;
                    appName = listSpecialThrottlingConfigurationsV2Request.appName;
                    user = listSpecialThrottlingConfigurationsV2Request.user;
                } else {
                    instanceId = listSpecialThrottlingConfigurationsV2Request['instance_id'];
                    throttleId = listSpecialThrottlingConfigurationsV2Request['throttle_id'];
                    offset = listSpecialThrottlingConfigurationsV2Request['offset'];
                    limit = listSpecialThrottlingConfigurationsV2Request['limit'];
                    objectType = listSpecialThrottlingConfigurationsV2Request['object_type'];
                    appName = listSpecialThrottlingConfigurationsV2Request['app_name'];
                    user = listSpecialThrottlingConfigurationsV2Request['user'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listSpecialThrottlingConfigurationsV2.');
            }
            if (throttleId === null || throttleId === undefined) {
            throw new RequiredError('throttleId','Required parameter throttleId was null or undefined when calling listSpecialThrottlingConfigurationsV2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (objectType !== null && objectType !== undefined) {
                localVarQueryParameter['object_type'] = objectType;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (user !== null && user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'throttle_id': throttleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询标签列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTagsV2(listTagsV2Request?: ListTagsV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/tags",
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

            if (listTagsV2Request !== null && listTagsV2Request !== undefined) {
                if (listTagsV2Request instanceof ListTagsV2Request) {
                    instanceId = listTagsV2Request.instanceId;
                    offset = listTagsV2Request.offset;
                    limit = listTagsV2Request.limit;
                } else {
                    instanceId = listTagsV2Request['instance_id'];
                    offset = listTagsV2Request['offset'];
                    limit = listTagsV2Request['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listTagsV2.');
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
         * 实例解绑EIP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeEipV2(removeEipV2Request?: RemoveEipV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/eip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (removeEipV2Request !== null && removeEipV2Request !== undefined) {
                if (removeEipV2Request instanceof RemoveEipV2Request) {
                    instanceId = removeEipV2Request.instanceId;
                } else {
                    instanceId = removeEipV2Request['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling removeEipV2.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭实例公网出口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeEngressEipV2(removeEngressEipV2Request?: RemoveEngressEipV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/nat-eip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (removeEngressEipV2Request !== null && removeEngressEipV2Request !== undefined) {
                if (removeEngressEipV2Request instanceof RemoveEngressEipV2Request) {
                    instanceId = removeEngressEipV2Request.instanceId;
                } else {
                    instanceId = removeEngressEipV2Request['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling removeEngressEipV2.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭实例公网入口，仅当实例为ELB类型时支持
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeIngressEipV2(removeIngressEipV2Request?: RemoveIngressEipV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/ingress-eip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (removeIngressEipV2Request !== null && removeIngressEipV2Request !== undefined) {
                if (removeIngressEipV2Request instanceof RemoveIngressEipV2Request) {
                    instanceId = removeIngressEipV2Request.instanceId;
                } else {
                    instanceId = removeIngressEipV2Request['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling removeIngressEipV2.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 重置指定APP的密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resettingAppSecretV2(resettingAppSecretV2Request?: ResettingAppSecretV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps/secret/{app_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let appId;

            if (resettingAppSecretV2Request !== null && resettingAppSecretV2Request !== undefined) {
                if (resettingAppSecretV2Request instanceof ResettingAppSecretV2Request) {
                    instanceId = resettingAppSecretV2Request.instanceId;
                    appId = resettingAppSecretV2Request.appId;
                    body = resettingAppSecretV2Request.body
                } else {
                    instanceId = resettingAppSecretV2Request['instance_id'];
                    appId = resettingAppSecretV2Request['app_id'];
                    body = resettingAppSecretV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling resettingAppSecretV2.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling resettingAppSecretV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看指定凭据关联的凭据配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppBoundAppQuota(showAppBoundAppQuotaRequest?: ShowAppBoundAppQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps/{app_id}/bound-quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let appId;

            if (showAppBoundAppQuotaRequest !== null && showAppBoundAppQuotaRequest !== undefined) {
                if (showAppBoundAppQuotaRequest instanceof ShowAppBoundAppQuotaRequest) {
                    instanceId = showAppBoundAppQuotaRequest.instanceId;
                    appId = showAppBoundAppQuotaRequest.appId;
                } else {
                    instanceId = showAppBoundAppQuotaRequest['instance_id'];
                    appId = showAppBoundAppQuotaRequest['app_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAppBoundAppQuota.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showAppBoundAppQuota.');
            }

            options.pathParams = { 'instance_id': instanceId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取凭据配额详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppQuota(showAppQuotaRequest?: ShowAppQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/app-quotas/{app_quota_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let appQuotaId;

            if (showAppQuotaRequest !== null && showAppQuotaRequest !== undefined) {
                if (showAppQuotaRequest instanceof ShowAppQuotaRequest) {
                    instanceId = showAppQuotaRequest.instanceId;
                    appQuotaId = showAppQuotaRequest.appQuotaId;
                } else {
                    instanceId = showAppQuotaRequest['instance_id'];
                    appQuotaId = showAppQuotaRequest['app_quota_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAppQuota.');
            }
            if (appQuotaId === null || appQuotaId === undefined) {
            throw new RequiredError('appQuotaId','Required parameter appQuotaId was null or undefined when calling showAppQuota.');
            }

            options.pathParams = { 'instance_id': instanceId,'app_quota_id': appQuotaId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取异步任务结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAsyncTaskResult(showAsyncTaskResultRequest?: ShowAsyncTaskResultRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/async-tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let taskId;

            if (showAsyncTaskResultRequest !== null && showAsyncTaskResultRequest !== undefined) {
                if (showAsyncTaskResultRequest instanceof ShowAsyncTaskResultRequest) {
                    instanceId = showAsyncTaskResultRequest.instanceId;
                    taskId = showAsyncTaskResultRequest.taskId;
                } else {
                    instanceId = showAsyncTaskResultRequest['instance_id'];
                    taskId = showAsyncTaskResultRequest['task_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showAsyncTaskResult.');
            }
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showAsyncTaskResult.');
            }

            options.pathParams = { 'instance_id': instanceId,'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看APP的访问控制详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfAppAcl(showDetailsOfAppAclRequest?: ShowDetailsOfAppAclRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps/{app_id}/app-acl",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let appId;

            if (showDetailsOfAppAclRequest !== null && showDetailsOfAppAclRequest !== undefined) {
                if (showDetailsOfAppAclRequest instanceof ShowDetailsOfAppAclRequest) {
                    instanceId = showDetailsOfAppAclRequest.instanceId;
                    appId = showDetailsOfAppAclRequest.appId;
                } else {
                    instanceId = showDetailsOfAppAclRequest['instance_id'];
                    appId = showDetailsOfAppAclRequest['app_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfAppAcl.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showDetailsOfAppAcl.');
            }

            options.pathParams = { 'instance_id': instanceId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * App Code为APP应用下的子模块，创建App Code之后，可以实现简易的APP认证。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfAppCodeV2(showDetailsOfAppCodeV2Request?: ShowDetailsOfAppCodeV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps/{app_id}/app-codes/{app_code_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let appId;
            
            let appCodeId;

            if (showDetailsOfAppCodeV2Request !== null && showDetailsOfAppCodeV2Request !== undefined) {
                if (showDetailsOfAppCodeV2Request instanceof ShowDetailsOfAppCodeV2Request) {
                    instanceId = showDetailsOfAppCodeV2Request.instanceId;
                    appId = showDetailsOfAppCodeV2Request.appId;
                    appCodeId = showDetailsOfAppCodeV2Request.appCodeId;
                } else {
                    instanceId = showDetailsOfAppCodeV2Request['instance_id'];
                    appId = showDetailsOfAppCodeV2Request['app_id'];
                    appCodeId = showDetailsOfAppCodeV2Request['app_code_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfAppCodeV2.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showDetailsOfAppCodeV2.');
            }
            if (appCodeId === null || appCodeId === undefined) {
            throw new RequiredError('appCodeId','Required parameter appCodeId was null or undefined when calling showDetailsOfAppCodeV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'app_id': appId,'app_code_id': appCodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看指定APP的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfAppV2(showDetailsOfAppV2Request?: ShowDetailsOfAppV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let appId;

            if (showDetailsOfAppV2Request !== null && showDetailsOfAppV2Request !== undefined) {
                if (showDetailsOfAppV2Request instanceof ShowDetailsOfAppV2Request) {
                    instanceId = showDetailsOfAppV2Request.instanceId;
                    appId = showDetailsOfAppV2Request.appId;
                } else {
                    instanceId = showDetailsOfAppV2Request['instance_id'];
                    appId = showDetailsOfAppV2Request['app_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfAppV2.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showDetailsOfAppV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看自定义认证详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfCustomAuthorizersV2(showDetailsOfCustomAuthorizersV2Request?: ShowDetailsOfCustomAuthorizersV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/authorizers/{authorizer_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let authorizerId;

            if (showDetailsOfCustomAuthorizersV2Request !== null && showDetailsOfCustomAuthorizersV2Request !== undefined) {
                if (showDetailsOfCustomAuthorizersV2Request instanceof ShowDetailsOfCustomAuthorizersV2Request) {
                    instanceId = showDetailsOfCustomAuthorizersV2Request.instanceId;
                    authorizerId = showDetailsOfCustomAuthorizersV2Request.authorizerId;
                } else {
                    instanceId = showDetailsOfCustomAuthorizersV2Request['instance_id'];
                    authorizerId = showDetailsOfCustomAuthorizersV2Request['authorizer_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfCustomAuthorizersV2.');
            }
            if (authorizerId === null || authorizerId === undefined) {
            throw new RequiredError('authorizerId','Required parameter authorizerId was null or undefined when calling showDetailsOfCustomAuthorizersV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'authorizer_id': authorizerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看域名下绑定的证书详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfDomainNameCertificateV2(showDetailsOfDomainNameCertificateV2Request?: ShowDetailsOfDomainNameCertificateV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/domains/{domain_id}/certificate/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let groupId;
            
            let domainId;
            
            let certificateId;

            if (showDetailsOfDomainNameCertificateV2Request !== null && showDetailsOfDomainNameCertificateV2Request !== undefined) {
                if (showDetailsOfDomainNameCertificateV2Request instanceof ShowDetailsOfDomainNameCertificateV2Request) {
                    instanceId = showDetailsOfDomainNameCertificateV2Request.instanceId;
                    groupId = showDetailsOfDomainNameCertificateV2Request.groupId;
                    domainId = showDetailsOfDomainNameCertificateV2Request.domainId;
                    certificateId = showDetailsOfDomainNameCertificateV2Request.certificateId;
                } else {
                    instanceId = showDetailsOfDomainNameCertificateV2Request['instance_id'];
                    groupId = showDetailsOfDomainNameCertificateV2Request['group_id'];
                    domainId = showDetailsOfDomainNameCertificateV2Request['domain_id'];
                    certificateId = showDetailsOfDomainNameCertificateV2Request['certificate_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfDomainNameCertificateV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showDetailsOfDomainNameCertificateV2.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showDetailsOfDomainNameCertificateV2.');
            }
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling showDetailsOfDomainNameCertificateV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'domain_id': domainId,'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看指定的环境变量的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfEnvironmentVariableV2(showDetailsOfEnvironmentVariableV2Request?: ShowDetailsOfEnvironmentVariableV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/env-variables/{env_variable_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let envVariableId;

            if (showDetailsOfEnvironmentVariableV2Request !== null && showDetailsOfEnvironmentVariableV2Request !== undefined) {
                if (showDetailsOfEnvironmentVariableV2Request instanceof ShowDetailsOfEnvironmentVariableV2Request) {
                    instanceId = showDetailsOfEnvironmentVariableV2Request.instanceId;
                    envVariableId = showDetailsOfEnvironmentVariableV2Request.envVariableId;
                } else {
                    instanceId = showDetailsOfEnvironmentVariableV2Request['instance_id'];
                    envVariableId = showDetailsOfEnvironmentVariableV2Request['env_variable_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfEnvironmentVariableV2.');
            }
            if (envVariableId === null || envVariableId === undefined) {
            throw new RequiredError('envVariableId','Required parameter envVariableId was null or undefined when calling showDetailsOfEnvironmentVariableV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'env_variable_id': envVariableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看分组下指定错误类型的自定义响应
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfGatewayResponseTypeV2(showDetailsOfGatewayResponseTypeV2Request?: ShowDetailsOfGatewayResponseTypeV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/gateway-responses/{response_id}/{response_type}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let groupId;
            
            let responseId;
            
            let responseType;

            if (showDetailsOfGatewayResponseTypeV2Request !== null && showDetailsOfGatewayResponseTypeV2Request !== undefined) {
                if (showDetailsOfGatewayResponseTypeV2Request instanceof ShowDetailsOfGatewayResponseTypeV2Request) {
                    instanceId = showDetailsOfGatewayResponseTypeV2Request.instanceId;
                    groupId = showDetailsOfGatewayResponseTypeV2Request.groupId;
                    responseId = showDetailsOfGatewayResponseTypeV2Request.responseId;
                    responseType = showDetailsOfGatewayResponseTypeV2Request.responseType;
                } else {
                    instanceId = showDetailsOfGatewayResponseTypeV2Request['instance_id'];
                    groupId = showDetailsOfGatewayResponseTypeV2Request['group_id'];
                    responseId = showDetailsOfGatewayResponseTypeV2Request['response_id'];
                    responseType = showDetailsOfGatewayResponseTypeV2Request['response_type'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfGatewayResponseTypeV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showDetailsOfGatewayResponseTypeV2.');
            }
            if (responseId === null || responseId === undefined) {
            throw new RequiredError('responseId','Required parameter responseId was null or undefined when calling showDetailsOfGatewayResponseTypeV2.');
            }
            if (responseType === null || responseType === undefined) {
            throw new RequiredError('responseType','Required parameter responseType was null or undefined when calling showDetailsOfGatewayResponseTypeV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'response_id': responseId,'response_type': responseType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询分组自定义响应详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfGatewayResponseV2(showDetailsOfGatewayResponseV2Request?: ShowDetailsOfGatewayResponseV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/gateway-responses/{response_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let groupId;
            
            let responseId;

            if (showDetailsOfGatewayResponseV2Request !== null && showDetailsOfGatewayResponseV2Request !== undefined) {
                if (showDetailsOfGatewayResponseV2Request instanceof ShowDetailsOfGatewayResponseV2Request) {
                    instanceId = showDetailsOfGatewayResponseV2Request.instanceId;
                    groupId = showDetailsOfGatewayResponseV2Request.groupId;
                    responseId = showDetailsOfGatewayResponseV2Request.responseId;
                } else {
                    instanceId = showDetailsOfGatewayResponseV2Request['instance_id'];
                    groupId = showDetailsOfGatewayResponseV2Request['group_id'];
                    responseId = showDetailsOfGatewayResponseV2Request['response_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfGatewayResponseV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showDetailsOfGatewayResponseV2.');
            }
            if (responseId === null || responseId === undefined) {
            throw new RequiredError('responseId','Required parameter responseId was null or undefined when calling showDetailsOfGatewayResponseV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'response_id': responseId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看专享版实例创建进度
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfInstanceProgressV2(showDetailsOfInstanceProgressV2Request?: ShowDetailsOfInstanceProgressV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/progress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showDetailsOfInstanceProgressV2Request !== null && showDetailsOfInstanceProgressV2Request !== undefined) {
                if (showDetailsOfInstanceProgressV2Request instanceof ShowDetailsOfInstanceProgressV2Request) {
                    instanceId = showDetailsOfInstanceProgressV2Request.instanceId;
                } else {
                    instanceId = showDetailsOfInstanceProgressV2Request['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfInstanceProgressV2.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看专享版实例详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfInstanceV2(showDetailsOfInstanceV2Request?: ShowDetailsOfInstanceV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showDetailsOfInstanceV2Request !== null && showDetailsOfInstanceV2Request !== undefined) {
                if (showDetailsOfInstanceV2Request instanceof ShowDetailsOfInstanceV2Request) {
                    instanceId = showDetailsOfInstanceV2Request.instanceId;
                } else {
                    instanceId = showDetailsOfInstanceV2Request['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfInstanceV2.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询编排规则详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfOrchestration(showDetailsOfOrchestrationRequest?: ShowDetailsOfOrchestrationRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/orchestrations/{orchestration_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let orchestrationId;

            if (showDetailsOfOrchestrationRequest !== null && showDetailsOfOrchestrationRequest !== undefined) {
                if (showDetailsOfOrchestrationRequest instanceof ShowDetailsOfOrchestrationRequest) {
                    instanceId = showDetailsOfOrchestrationRequest.instanceId;
                    orchestrationId = showDetailsOfOrchestrationRequest.orchestrationId;
                } else {
                    instanceId = showDetailsOfOrchestrationRequest['instance_id'];
                    orchestrationId = showDetailsOfOrchestrationRequest['orchestration_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfOrchestration.');
            }
            if (orchestrationId === null || orchestrationId === undefined) {
            throw new RequiredError('orchestrationId','Required parameter orchestrationId was null or undefined when calling showDetailsOfOrchestration.');
            }

            options.pathParams = { 'instance_id': instanceId,'orchestration_id': orchestrationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看指定流控策略的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfRequestThrottlingPolicyV2(showDetailsOfRequestThrottlingPolicyV2Request?: ShowDetailsOfRequestThrottlingPolicyV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttles/{throttle_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let throttleId;

            if (showDetailsOfRequestThrottlingPolicyV2Request !== null && showDetailsOfRequestThrottlingPolicyV2Request !== undefined) {
                if (showDetailsOfRequestThrottlingPolicyV2Request instanceof ShowDetailsOfRequestThrottlingPolicyV2Request) {
                    instanceId = showDetailsOfRequestThrottlingPolicyV2Request.instanceId;
                    throttleId = showDetailsOfRequestThrottlingPolicyV2Request.throttleId;
                } else {
                    instanceId = showDetailsOfRequestThrottlingPolicyV2Request['instance_id'];
                    throttleId = showDetailsOfRequestThrottlingPolicyV2Request['throttle_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfRequestThrottlingPolicyV2.');
            }
            if (throttleId === null || throttleId === undefined) {
            throw new RequiredError('throttleId','Required parameter throttleId was null or undefined when calling showDetailsOfRequestThrottlingPolicyV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'throttle_id': throttleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询包含指定标签的实例数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInstancesNumByTags(showInstancesNumByTagsRequest?: ShowInstancesNumByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/resource-instances/count",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showInstancesNumByTagsRequest !== null && showInstancesNumByTagsRequest !== undefined) {
                if (showInstancesNumByTagsRequest instanceof ShowInstancesNumByTagsRequest) {
                    body = showInstancesNumByTagsRequest.body
                } else {
                    body = showInstancesNumByTagsRequest['body'];
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
         * 查询插件详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPlugin(showPluginRequest?: ShowPluginRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/plugins/{plugin_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let pluginId;

            if (showPluginRequest !== null && showPluginRequest !== undefined) {
                if (showPluginRequest instanceof ShowPluginRequest) {
                    instanceId = showPluginRequest.instanceId;
                    pluginId = showPluginRequest.pluginId;
                } else {
                    instanceId = showPluginRequest['instance_id'];
                    pluginId = showPluginRequest['plugin_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showPlugin.');
            }
            if (pluginId === null || pluginId === undefined) {
            throw new RequiredError('pluginId','Required parameter pluginId was null or undefined when calling showPlugin.');
            }

            options.pathParams = { 'instance_id': instanceId,'plugin_id': pluginId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看实例约束信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRestrictionOfInstanceV2(showRestrictionOfInstanceV2Request?: ShowRestrictionOfInstanceV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/restriction",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (showRestrictionOfInstanceV2Request !== null && showRestrictionOfInstanceV2Request !== undefined) {
                if (showRestrictionOfInstanceV2Request instanceof ShowRestrictionOfInstanceV2Request) {
                    instanceId = showRestrictionOfInstanceV2Request.instanceId;
                } else {
                    instanceId = showRestrictionOfInstanceV2Request['instance_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showRestrictionOfInstanceV2.');
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置凭据的访问控制。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAppAcl(updateAppAclRequest?: UpdateAppAclRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps/{app_id}/app-acl",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let appId;

            if (updateAppAclRequest !== null && updateAppAclRequest !== undefined) {
                if (updateAppAclRequest instanceof UpdateAppAclRequest) {
                    instanceId = updateAppAclRequest.instanceId;
                    appId = updateAppAclRequest.appId;
                    body = updateAppAclRequest.body
                } else {
                    instanceId = updateAppAclRequest['instance_id'];
                    appId = updateAppAclRequest['app_id'];
                    body = updateAppAclRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAppAcl.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling updateAppAcl.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改凭据配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAppQuota(updateAppQuotaRequest?: UpdateAppQuotaRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/app-quotas/{app_quota_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let appQuotaId;

            if (updateAppQuotaRequest !== null && updateAppQuotaRequest !== undefined) {
                if (updateAppQuotaRequest instanceof UpdateAppQuotaRequest) {
                    instanceId = updateAppQuotaRequest.instanceId;
                    appQuotaId = updateAppQuotaRequest.appQuotaId;
                    body = updateAppQuotaRequest.body
                } else {
                    instanceId = updateAppQuotaRequest['instance_id'];
                    appQuotaId = updateAppQuotaRequest['app_quota_id'];
                    body = updateAppQuotaRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAppQuota.');
            }
            if (appQuotaId === null || appQuotaId === undefined) {
            throw new RequiredError('appQuotaId','Required parameter appQuotaId was null or undefined when calling updateAppQuota.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'app_quota_id': appQuotaId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定APP的信息。其中可修改的属性为：name、remark，当支持用户自定义key和secret的开关开启时，app_key和app_secret也支持修改，其它属性不可修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAppV2(updateAppV2Request?: UpdateAppV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apps/{app_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let appId;

            if (updateAppV2Request !== null && updateAppV2Request !== undefined) {
                if (updateAppV2Request instanceof UpdateAppV2Request) {
                    instanceId = updateAppV2Request.instanceId;
                    appId = updateAppV2Request.appId;
                    body = updateAppV2Request.body
                } else {
                    instanceId = updateAppV2Request['instance_id'];
                    appId = updateAppV2Request['app_id'];
                    body = updateAppV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAppV2.');
            }
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling updateAppV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改自定义认证
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCustomAuthorizerV2(updateCustomAuthorizerV2Request?: UpdateCustomAuthorizerV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/authorizers/{authorizer_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let authorizerId;

            if (updateCustomAuthorizerV2Request !== null && updateCustomAuthorizerV2Request !== undefined) {
                if (updateCustomAuthorizerV2Request instanceof UpdateCustomAuthorizerV2Request) {
                    instanceId = updateCustomAuthorizerV2Request.instanceId;
                    authorizerId = updateCustomAuthorizerV2Request.authorizerId;
                    body = updateCustomAuthorizerV2Request.body
                } else {
                    instanceId = updateCustomAuthorizerV2Request['instance_id'];
                    authorizerId = updateCustomAuthorizerV2Request['authorizer_id'];
                    body = updateCustomAuthorizerV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateCustomAuthorizerV2.');
            }
            if (authorizerId === null || authorizerId === undefined) {
            throw new RequiredError('authorizerId','Required parameter authorizerId was null or undefined when calling updateCustomAuthorizerV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'authorizer_id': authorizerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改绑定的域名所对应的配置信息。使用实例自定义入方向端口的特性时，注意开启/关闭客户端校验会对相同域名的不同端口同时生效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainV2(updateDomainV2Request?: UpdateDomainV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/domains/{domain_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let groupId;
            
            let domainId;

            if (updateDomainV2Request !== null && updateDomainV2Request !== undefined) {
                if (updateDomainV2Request instanceof UpdateDomainV2Request) {
                    instanceId = updateDomainV2Request.instanceId;
                    groupId = updateDomainV2Request.groupId;
                    domainId = updateDomainV2Request.domainId;
                    body = updateDomainV2Request.body
                } else {
                    instanceId = updateDomainV2Request['instance_id'];
                    groupId = updateDomainV2Request['group_id'];
                    domainId = updateDomainV2Request['domain_id'];
                    body = updateDomainV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateDomainV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateDomainV2.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateDomainV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新实例出公网带宽
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEngressEipV2(updateEngressEipV2Request?: UpdateEngressEipV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/nat-eip",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateEngressEipV2Request !== null && updateEngressEipV2Request !== undefined) {
                if (updateEngressEipV2Request instanceof UpdateEngressEipV2Request) {
                    instanceId = updateEngressEipV2Request.instanceId;
                    body = updateEngressEipV2Request.body
                } else {
                    instanceId = updateEngressEipV2Request['instance_id'];
                    body = updateEngressEipV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateEngressEipV2.');
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
         * 修改指定环境的信息。其中可修改的属性为：name、remark，其它属性不可修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEnvironmentV2(updateEnvironmentV2Request?: UpdateEnvironmentV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/envs/{env_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let envId;

            if (updateEnvironmentV2Request !== null && updateEnvironmentV2Request !== undefined) {
                if (updateEnvironmentV2Request instanceof UpdateEnvironmentV2Request) {
                    instanceId = updateEnvironmentV2Request.instanceId;
                    envId = updateEnvironmentV2Request.envId;
                    body = updateEnvironmentV2Request.body
                } else {
                    instanceId = updateEnvironmentV2Request['instance_id'];
                    envId = updateEnvironmentV2Request['env_id'];
                    body = updateEnvironmentV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateEnvironmentV2.');
            }
            if (envId === null || envId === undefined) {
            throw new RequiredError('envId','Required parameter envId was null or undefined when calling updateEnvironmentV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'env_id': envId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改环境变量。环境变量引用位置为api的后端服务地址时，修改对应环境变量会将使用该变量的所有api重新发布。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEnvironmentVariableV2(updateEnvironmentVariableV2Request?: UpdateEnvironmentVariableV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/env-variables/{env_variable_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let envVariableId;

            if (updateEnvironmentVariableV2Request !== null && updateEnvironmentVariableV2Request !== undefined) {
                if (updateEnvironmentVariableV2Request instanceof UpdateEnvironmentVariableV2Request) {
                    instanceId = updateEnvironmentVariableV2Request.instanceId;
                    envVariableId = updateEnvironmentVariableV2Request.envVariableId;
                    body = updateEnvironmentVariableV2Request.body
                } else {
                    instanceId = updateEnvironmentVariableV2Request['instance_id'];
                    envVariableId = updateEnvironmentVariableV2Request['env_variable_id'];
                    body = updateEnvironmentVariableV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateEnvironmentVariableV2.');
            }
            if (envVariableId === null || envVariableId === undefined) {
            throw new RequiredError('envVariableId','Required parameter envVariableId was null or undefined when calling updateEnvironmentVariableV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'env_variable_id': envVariableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改分组下指定错误类型的自定义响应。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGatewayResponseTypeV2(updateGatewayResponseTypeV2Request?: UpdateGatewayResponseTypeV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/gateway-responses/{response_id}/{response_type}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let groupId;
            
            let responseId;
            
            let responseType;

            if (updateGatewayResponseTypeV2Request !== null && updateGatewayResponseTypeV2Request !== undefined) {
                if (updateGatewayResponseTypeV2Request instanceof UpdateGatewayResponseTypeV2Request) {
                    instanceId = updateGatewayResponseTypeV2Request.instanceId;
                    groupId = updateGatewayResponseTypeV2Request.groupId;
                    responseId = updateGatewayResponseTypeV2Request.responseId;
                    responseType = updateGatewayResponseTypeV2Request.responseType;
                    body = updateGatewayResponseTypeV2Request.body
                } else {
                    instanceId = updateGatewayResponseTypeV2Request['instance_id'];
                    groupId = updateGatewayResponseTypeV2Request['group_id'];
                    responseId = updateGatewayResponseTypeV2Request['response_id'];
                    responseType = updateGatewayResponseTypeV2Request['response_type'];
                    body = updateGatewayResponseTypeV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateGatewayResponseTypeV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateGatewayResponseTypeV2.');
            }
            if (responseId === null || responseId === undefined) {
            throw new RequiredError('responseId','Required parameter responseId was null or undefined when calling updateGatewayResponseTypeV2.');
            }
            if (responseType === null || responseType === undefined) {
            throw new RequiredError('responseType','Required parameter responseType was null or undefined when calling updateGatewayResponseTypeV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'response_id': responseId,'response_type': responseType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改分组自定义响应
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGatewayResponseV2(updateGatewayResponseV2Request?: UpdateGatewayResponseV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/gateway-responses/{response_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let groupId;
            
            let responseId;

            if (updateGatewayResponseV2Request !== null && updateGatewayResponseV2Request !== undefined) {
                if (updateGatewayResponseV2Request instanceof UpdateGatewayResponseV2Request) {
                    instanceId = updateGatewayResponseV2Request.instanceId;
                    groupId = updateGatewayResponseV2Request.groupId;
                    responseId = updateGatewayResponseV2Request.responseId;
                    body = updateGatewayResponseV2Request.body
                } else {
                    instanceId = updateGatewayResponseV2Request['instance_id'];
                    groupId = updateGatewayResponseV2Request['group_id'];
                    responseId = updateGatewayResponseV2Request['response_id'];
                    body = updateGatewayResponseV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateGatewayResponseV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateGatewayResponseV2.');
            }
            if (responseId === null || responseId === undefined) {
            throw new RequiredError('responseId','Required parameter responseId was null or undefined when calling updateGatewayResponseV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'response_id': responseId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新实例入公网带宽，仅当实例为ELB类型时支持
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIngressEipV2(updateIngressEipV2Request?: UpdateIngressEipV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/ingress-eip",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateIngressEipV2Request !== null && updateIngressEipV2Request !== undefined) {
                if (updateIngressEipV2Request instanceof UpdateIngressEipV2Request) {
                    instanceId = updateIngressEipV2Request.instanceId;
                    body = updateIngressEipV2Request.body
                } else {
                    instanceId = updateIngressEipV2Request['instance_id'];
                    body = updateIngressEipV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateIngressEipV2.');
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
         * 更新专享版实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceV2(updateInstanceV2Request?: UpdateInstanceV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (updateInstanceV2Request !== null && updateInstanceV2Request !== undefined) {
                if (updateInstanceV2Request instanceof UpdateInstanceV2Request) {
                    instanceId = updateInstanceV2Request.instanceId;
                    body = updateInstanceV2Request.body
                } else {
                    instanceId = updateInstanceV2Request['instance_id'];
                    body = updateInstanceV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceV2.');
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
         * 更新编排规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateOrchestration(updateOrchestrationRequest?: UpdateOrchestrationRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/orchestrations/{orchestration_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let orchestrationId;

            if (updateOrchestrationRequest !== null && updateOrchestrationRequest !== undefined) {
                if (updateOrchestrationRequest instanceof UpdateOrchestrationRequest) {
                    instanceId = updateOrchestrationRequest.instanceId;
                    orchestrationId = updateOrchestrationRequest.orchestrationId;
                    body = updateOrchestrationRequest.body
                } else {
                    instanceId = updateOrchestrationRequest['instance_id'];
                    orchestrationId = updateOrchestrationRequest['orchestration_id'];
                    body = updateOrchestrationRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateOrchestration.');
            }
            if (orchestrationId === null || orchestrationId === undefined) {
            throw new RequiredError('orchestrationId','Required parameter orchestrationId was null or undefined when calling updateOrchestration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'orchestration_id': orchestrationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改插件信息。
         * - 插件不允许重名
         * - 插件不支持修改类型和可见范围
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePlugin(updatePluginRequest?: UpdatePluginRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/plugins/{plugin_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let pluginId;

            if (updatePluginRequest !== null && updatePluginRequest !== undefined) {
                if (updatePluginRequest instanceof UpdatePluginRequest) {
                    instanceId = updatePluginRequest.instanceId;
                    pluginId = updatePluginRequest.pluginId;
                    body = updatePluginRequest.body
                } else {
                    instanceId = updatePluginRequest['instance_id'];
                    pluginId = updatePluginRequest['plugin_id'];
                    body = updatePluginRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updatePlugin.');
            }
            if (pluginId === null || pluginId === undefined) {
            throw new RequiredError('pluginId','Required parameter pluginId was null or undefined when calling updatePlugin.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'plugin_id': pluginId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定流控策略的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRequestThrottlingPolicyV2(updateRequestThrottlingPolicyV2Request?: UpdateRequestThrottlingPolicyV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttles/{throttle_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let throttleId;

            if (updateRequestThrottlingPolicyV2Request !== null && updateRequestThrottlingPolicyV2Request !== undefined) {
                if (updateRequestThrottlingPolicyV2Request instanceof UpdateRequestThrottlingPolicyV2Request) {
                    instanceId = updateRequestThrottlingPolicyV2Request.instanceId;
                    throttleId = updateRequestThrottlingPolicyV2Request.throttleId;
                    body = updateRequestThrottlingPolicyV2Request.body
                } else {
                    instanceId = updateRequestThrottlingPolicyV2Request['instance_id'];
                    throttleId = updateRequestThrottlingPolicyV2Request['throttle_id'];
                    body = updateRequestThrottlingPolicyV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateRequestThrottlingPolicyV2.');
            }
            if (throttleId === null || throttleId === undefined) {
            throw new RequiredError('throttleId','Required parameter throttleId was null or undefined when calling updateRequestThrottlingPolicyV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'throttle_id': throttleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定签名密钥的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSignatureKeyV2(updateSignatureKeyV2Request?: UpdateSignatureKeyV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/signs/{sign_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let signId;

            if (updateSignatureKeyV2Request !== null && updateSignatureKeyV2Request !== undefined) {
                if (updateSignatureKeyV2Request instanceof UpdateSignatureKeyV2Request) {
                    instanceId = updateSignatureKeyV2Request.instanceId;
                    signId = updateSignatureKeyV2Request.signId;
                    body = updateSignatureKeyV2Request.body
                } else {
                    instanceId = updateSignatureKeyV2Request['instance_id'];
                    signId = updateSignatureKeyV2Request['sign_id'];
                    body = updateSignatureKeyV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateSignatureKeyV2.');
            }
            if (signId === null || signId === undefined) {
            throw new RequiredError('signId','Required parameter signId was null or undefined when calling updateSignatureKeyV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'sign_id': signId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 禁用或启用API分组绑定的调试域名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSlDomainSettingV2(updateSlDomainSettingV2Request?: UpdateSlDomainSettingV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/sl-domain-access-settings",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let groupId;

            if (updateSlDomainSettingV2Request !== null && updateSlDomainSettingV2Request !== undefined) {
                if (updateSlDomainSettingV2Request instanceof UpdateSlDomainSettingV2Request) {
                    instanceId = updateSlDomainSettingV2Request.instanceId;
                    groupId = updateSlDomainSettingV2Request.groupId;
                    body = updateSlDomainSettingV2Request.body
                } else {
                    instanceId = updateSlDomainSettingV2Request['instance_id'];
                    groupId = updateSlDomainSettingV2Request['group_id'];
                    body = updateSlDomainSettingV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateSlDomainSettingV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateSlDomainSettingV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改某个流控策略下的某个特殊设置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSpecialThrottlingConfigurationV2(updateSpecialThrottlingConfigurationV2Request?: UpdateSpecialThrottlingConfigurationV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttles/{throttle_id}/throttle-specials/{strategy_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let throttleId;
            
            let strategyId;

            if (updateSpecialThrottlingConfigurationV2Request !== null && updateSpecialThrottlingConfigurationV2Request !== undefined) {
                if (updateSpecialThrottlingConfigurationV2Request instanceof UpdateSpecialThrottlingConfigurationV2Request) {
                    instanceId = updateSpecialThrottlingConfigurationV2Request.instanceId;
                    throttleId = updateSpecialThrottlingConfigurationV2Request.throttleId;
                    strategyId = updateSpecialThrottlingConfigurationV2Request.strategyId;
                    body = updateSpecialThrottlingConfigurationV2Request.body
                } else {
                    instanceId = updateSpecialThrottlingConfigurationV2Request['instance_id'];
                    throttleId = updateSpecialThrottlingConfigurationV2Request['throttle_id'];
                    strategyId = updateSpecialThrottlingConfigurationV2Request['strategy_id'];
                    body = updateSpecialThrottlingConfigurationV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateSpecialThrottlingConfigurationV2.');
            }
            if (throttleId === null || throttleId === undefined) {
            throw new RequiredError('throttleId','Required parameter throttleId was null or undefined when calling updateSpecialThrottlingConfigurationV2.');
            }
            if (strategyId === null || strategyId === undefined) {
            throw new RequiredError('strategyId','Required parameter strategyId was null or undefined when calling updateSpecialThrottlingConfigurationV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'throttle_id': throttleId,'strategy_id': strategyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除指定的多个ACL策略。
         * 
         * 删除ACL策略时，如果存在ACL策略与API绑定关系，则无法删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteAclV2(batchDeleteAclV2Request?: BatchDeleteAclV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/acls",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let instanceId;
            
            let action;

            if (batchDeleteAclV2Request !== null && batchDeleteAclV2Request !== undefined) {
                if (batchDeleteAclV2Request instanceof BatchDeleteAclV2Request) {
                    instanceId = batchDeleteAclV2Request.instanceId;
                    action = batchDeleteAclV2Request.action;
                    body = batchDeleteAclV2Request.body
                } else {
                    instanceId = batchDeleteAclV2Request['instance_id'];
                    action = batchDeleteAclV2Request['action'];
                    body = batchDeleteAclV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteAclV2.');
            }
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling batchDeleteAclV2.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 增加一个ACL策略，策略类型通过字段acl_type来确定（permit或者deny），限制的对象的类型可以为IP或者DOMAIN，这里的DOMAIN对应的acl_value的值为租户名称，而非“www.exampleDomain.com”之类的网络域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAclStrategyV2(createAclStrategyV2Request?: CreateAclStrategyV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/acls",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createAclStrategyV2Request !== null && createAclStrategyV2Request !== undefined) {
                if (createAclStrategyV2Request instanceof CreateAclStrategyV2Request) {
                    instanceId = createAclStrategyV2Request.instanceId;
                    body = createAclStrategyV2Request.body
                } else {
                    instanceId = createAclStrategyV2Request['instance_id'];
                    body = createAclStrategyV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAclStrategyV2.');
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
         * 删除指定的ACL策略， 如果存在api与该ACL策略的绑定关系，则无法删除
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAclV2(deleteAclV2Request?: DeleteAclV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/acls/{acl_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let aclId;

            if (deleteAclV2Request !== null && deleteAclV2Request !== undefined) {
                if (deleteAclV2Request instanceof DeleteAclV2Request) {
                    instanceId = deleteAclV2Request.instanceId;
                    aclId = deleteAclV2Request.aclId;
                } else {
                    instanceId = deleteAclV2Request['instance_id'];
                    aclId = deleteAclV2Request['acl_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAclV2.');
            }
            if (aclId === null || aclId === undefined) {
            throw new RequiredError('aclId','Required parameter aclId was null or undefined when calling deleteAclV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'acl_id': aclId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有的ACL策略列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAclStrategiesV2(listAclStrategiesV2Request?: ListAclStrategiesV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/acls",
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
            
            let id;
            
            let name;
            
            let aclType;
            
            let entityType;
            
            let preciseSearch;

            if (listAclStrategiesV2Request !== null && listAclStrategiesV2Request !== undefined) {
                if (listAclStrategiesV2Request instanceof ListAclStrategiesV2Request) {
                    instanceId = listAclStrategiesV2Request.instanceId;
                    offset = listAclStrategiesV2Request.offset;
                    limit = listAclStrategiesV2Request.limit;
                    id = listAclStrategiesV2Request.id;
                    name = listAclStrategiesV2Request.name;
                    aclType = listAclStrategiesV2Request.aclType;
                    entityType = listAclStrategiesV2Request.entityType;
                    preciseSearch = listAclStrategiesV2Request.preciseSearch;
                } else {
                    instanceId = listAclStrategiesV2Request['instance_id'];
                    offset = listAclStrategiesV2Request['offset'];
                    limit = listAclStrategiesV2Request['limit'];
                    id = listAclStrategiesV2Request['id'];
                    name = listAclStrategiesV2Request['name'];
                    aclType = listAclStrategiesV2Request['acl_type'];
                    entityType = listAclStrategiesV2Request['entity_type'];
                    preciseSearch = listAclStrategiesV2Request['precise_search'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAclStrategiesV2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (aclType !== null && aclType !== undefined) {
                localVarQueryParameter['acl_type'] = aclType;
            }
            if (entityType !== null && entityType !== undefined) {
                localVarQueryParameter['entity_type'] = entityType;
            }
            if (preciseSearch !== null && preciseSearch !== undefined) {
                localVarQueryParameter['precise_search'] = preciseSearch;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定ACL策略的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfAclPolicyV2(showDetailsOfAclPolicyV2Request?: ShowDetailsOfAclPolicyV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/acls/{acl_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let aclId;

            if (showDetailsOfAclPolicyV2Request !== null && showDetailsOfAclPolicyV2Request !== undefined) {
                if (showDetailsOfAclPolicyV2Request instanceof ShowDetailsOfAclPolicyV2Request) {
                    instanceId = showDetailsOfAclPolicyV2Request.instanceId;
                    aclId = showDetailsOfAclPolicyV2Request.aclId;
                } else {
                    instanceId = showDetailsOfAclPolicyV2Request['instance_id'];
                    aclId = showDetailsOfAclPolicyV2Request['acl_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfAclPolicyV2.');
            }
            if (aclId === null || aclId === undefined) {
            throw new RequiredError('aclId','Required parameter aclId was null or undefined when calling showDetailsOfAclPolicyV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'acl_id': aclId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定的ACL策略，其中可修改的属性为：acl_name、acl_type、acl_value，其它属性不可修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAclStrategyV2(updateAclStrategyV2Request?: UpdateAclStrategyV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/acls/{acl_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let aclId;

            if (updateAclStrategyV2Request !== null && updateAclStrategyV2Request !== undefined) {
                if (updateAclStrategyV2Request instanceof UpdateAclStrategyV2Request) {
                    instanceId = updateAclStrategyV2Request.instanceId;
                    aclId = updateAclStrategyV2Request.aclId;
                    body = updateAclStrategyV2Request.body
                } else {
                    instanceId = updateAclStrategyV2Request['instance_id'];
                    aclId = updateAclStrategyV2Request['acl_id'];
                    body = updateAclStrategyV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateAclStrategyV2.');
            }
            if (aclId === null || aclId === undefined) {
            throw new RequiredError('aclId','Required parameter aclId was null or undefined when calling updateAclStrategyV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'acl_id': aclId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将流控策略应用于API，则所有对该API的访问将会受到该流控策略的限制。
         * 
         * 
         * 当一定时间内的访问次数超过流控策略设置的API最大访问次数限制后，后续的访问将会被拒绝，从而能够较好的保护后端API免受异常流量的冲击，保障服务的稳定运行。
         * 
         * 
         * 为指定的API绑定流控策略，绑定时，需要指定在哪个环境上生效。同一个API发布到不同的环境可以绑定不同的流控策略；一个API在发布到特定环境后只能绑定一个默认的流控策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateRequestThrottlingPolicyV2(associateRequestThrottlingPolicyV2Request?: AssociateRequestThrottlingPolicyV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttle-bindings",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (associateRequestThrottlingPolicyV2Request !== null && associateRequestThrottlingPolicyV2Request !== undefined) {
                if (associateRequestThrottlingPolicyV2Request instanceof AssociateRequestThrottlingPolicyV2Request) {
                    instanceId = associateRequestThrottlingPolicyV2Request.instanceId;
                    body = associateRequestThrottlingPolicyV2Request.body
                } else {
                    instanceId = associateRequestThrottlingPolicyV2Request['instance_id'];
                    body = associateRequestThrottlingPolicyV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling associateRequestThrottlingPolicyV2.');
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
         * 批量解除API与流控策略的绑定关系
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDisassociateThrottlingPolicyV2(batchDisassociateThrottlingPolicyV2Request?: BatchDisassociateThrottlingPolicyV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttle-bindings",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let instanceId;
            
            let action;

            if (batchDisassociateThrottlingPolicyV2Request !== null && batchDisassociateThrottlingPolicyV2Request !== undefined) {
                if (batchDisassociateThrottlingPolicyV2Request instanceof BatchDisassociateThrottlingPolicyV2Request) {
                    instanceId = batchDisassociateThrottlingPolicyV2Request.instanceId;
                    action = batchDisassociateThrottlingPolicyV2Request.action;
                    body = batchDisassociateThrottlingPolicyV2Request.body
                } else {
                    instanceId = batchDisassociateThrottlingPolicyV2Request['instance_id'];
                    action = batchDisassociateThrottlingPolicyV2Request['action'];
                    body = batchDisassociateThrottlingPolicyV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDisassociateThrottlingPolicyV2.');
            }
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling batchDisassociateThrottlingPolicyV2.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将多个API发布到一个指定的环境，或将多个API从指定的环境下线。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchPublishOrOfflineApiV2(batchPublishOrOfflineApiV2Request?: BatchPublishOrOfflineApiV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/publish",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let instanceId;
            
            let action;

            if (batchPublishOrOfflineApiV2Request !== null && batchPublishOrOfflineApiV2Request !== undefined) {
                if (batchPublishOrOfflineApiV2Request instanceof BatchPublishOrOfflineApiV2Request) {
                    instanceId = batchPublishOrOfflineApiV2Request.instanceId;
                    action = batchPublishOrOfflineApiV2Request.action;
                    body = batchPublishOrOfflineApiV2Request.body
                } else {
                    instanceId = batchPublishOrOfflineApiV2Request['instance_id'];
                    action = batchPublishOrOfflineApiV2Request['action'];
                    body = batchPublishOrOfflineApiV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchPublishOrOfflineApiV2.');
            }
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling batchPublishOrOfflineApiV2.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * API每次发布时，会基于当前的API定义生成一个版本。版本记录了API发布时的各种定义及状态。
         * 
         * 多个版本之间可以进行随意切换。但一个API在一个环境上，只能有一个版本生效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeApiVersionV2(changeApiVersionV2Request?: ChangeApiVersionV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/publish/{api_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let apiId;

            if (changeApiVersionV2Request !== null && changeApiVersionV2Request !== undefined) {
                if (changeApiVersionV2Request instanceof ChangeApiVersionV2Request) {
                    instanceId = changeApiVersionV2Request.instanceId;
                    apiId = changeApiVersionV2Request.apiId;
                    body = changeApiVersionV2Request.body
                } else {
                    instanceId = changeApiVersionV2Request['instance_id'];
                    apiId = changeApiVersionV2Request['api_id'];
                    body = changeApiVersionV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changeApiVersionV2.');
            }
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling changeApiVersionV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 校验API分组名称是否存在。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkApiGroupsV2(checkApiGroupsV2Request?: CheckApiGroupsV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/check",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (checkApiGroupsV2Request !== null && checkApiGroupsV2Request !== undefined) {
                if (checkApiGroupsV2Request instanceof CheckApiGroupsV2Request) {
                    instanceId = checkApiGroupsV2Request.instanceId;
                    body = checkApiGroupsV2Request.body
                } else {
                    instanceId = checkApiGroupsV2Request['instance_id'];
                    body = checkApiGroupsV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling checkApiGroupsV2.');
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
         * 校验API定义。校验API的路径或名称是否已存在
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkApisV2(checkApisV2Request?: CheckApisV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/check",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (checkApisV2Request !== null && checkApisV2Request !== undefined) {
                if (checkApisV2Request instanceof CheckApisV2Request) {
                    instanceId = checkApisV2Request.instanceId;
                    body = checkApisV2Request.body
                } else {
                    instanceId = checkApisV2Request['instance_id'];
                    body = checkApisV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling checkApisV2.');
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
         * API分组是API的管理单元，一个API分组等同于一个服务入口，创建API分组时，返回一个子域名作为访问入口。建议一个API分组下的API具有一定的相关性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApiGroupV2(createApiGroupV2Request?: CreateApiGroupV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createApiGroupV2Request !== null && createApiGroupV2Request !== undefined) {
                if (createApiGroupV2Request instanceof CreateApiGroupV2Request) {
                    instanceId = createApiGroupV2Request.instanceId;
                    body = createApiGroupV2Request.body
                } else {
                    instanceId = createApiGroupV2Request['instance_id'];
                    body = createApiGroupV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createApiGroupV2.');
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
         * 添加一个API，API即一个服务接口，具体的服务能力。
         * 
         * 
         * API分为两部分，第一部分为面向API使用者的API接口，定义了使用者如何调用这个API。第二部分面向API提供者，由API提供者定义这个API的真实的后端情况，定义了API网关如何去访问真实的后端服务。API的真实后端服务目前支持四种类型：传统的HTTP/HTTPS形式的web后端、GRPC后端、函数工作流、MOCK。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApiV2(createApiV2Request?: CreateApiV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createApiV2Request !== null && createApiV2Request !== undefined) {
                if (createApiV2Request instanceof CreateApiV2Request) {
                    instanceId = createApiV2Request.instanceId;
                    body = createApiV2Request.body
                } else {
                    instanceId = createApiV2Request['instance_id'];
                    body = createApiV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createApiV2.');
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
         * 对API进行发布或下线。
         * 
         * 发布操作是将一个指定的API发布到一个指定的环境，API只有发布后，才能够被调用，且只能在该环境上才能被调用。未发布的API无法被调用。
         * 
         * 下线操作是将API从某个已发布的环境上下线，下线后，API将无法再被调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrDeletePublishRecordForApiV2(createOrDeletePublishRecordForApiV2Request?: CreateOrDeletePublishRecordForApiV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createOrDeletePublishRecordForApiV2Request !== null && createOrDeletePublishRecordForApiV2Request !== undefined) {
                if (createOrDeletePublishRecordForApiV2Request instanceof CreateOrDeletePublishRecordForApiV2Request) {
                    instanceId = createOrDeletePublishRecordForApiV2Request.instanceId;
                    body = createOrDeletePublishRecordForApiV2Request.body
                } else {
                    instanceId = createOrDeletePublishRecordForApiV2Request['instance_id'];
                    body = createOrDeletePublishRecordForApiV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createOrDeletePublishRecordForApiV2.');
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
         * 调试一个API在指定运行环境下的定义，接口调用者需要具有操作该API的权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        debugApiV2(debugApiV2Request?: DebugApiV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/debug/{api_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let apiId;

            if (debugApiV2Request !== null && debugApiV2Request !== undefined) {
                if (debugApiV2Request instanceof DebugApiV2Request) {
                    instanceId = debugApiV2Request.instanceId;
                    apiId = debugApiV2Request.apiId;
                    body = debugApiV2Request.body
                } else {
                    instanceId = debugApiV2Request['instance_id'];
                    apiId = debugApiV2Request['api_id'];
                    body = debugApiV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling debugApiV2.');
            }
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling debugApiV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对某个生效中的API版本进行下线操作，下线后，API在该版本生效的环境中将不再能够被调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApiByVersionIdV2(deleteApiByVersionIdV2Request?: DeleteApiByVersionIdV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/versions/{version_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let versionId;

            if (deleteApiByVersionIdV2Request !== null && deleteApiByVersionIdV2Request !== undefined) {
                if (deleteApiByVersionIdV2Request instanceof DeleteApiByVersionIdV2Request) {
                    instanceId = deleteApiByVersionIdV2Request.instanceId;
                    versionId = deleteApiByVersionIdV2Request.versionId;
                } else {
                    instanceId = deleteApiByVersionIdV2Request['instance_id'];
                    versionId = deleteApiByVersionIdV2Request['version_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteApiByVersionIdV2.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling deleteApiByVersionIdV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的API分组。
         * 
         * 删除API分组前，要先下线并删除分组下的所有API。
         * 
         * 删除时，会一并删除直接或间接关联到该分组下的所有资源，包括独立域名、SSL证书信息等等。并会将外部域名与子域名的绑定关系进行解除（取决于域名cname方式）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApiGroupV2(deleteApiGroupV2Request?: DeleteApiGroupV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let groupId;

            if (deleteApiGroupV2Request !== null && deleteApiGroupV2Request !== undefined) {
                if (deleteApiGroupV2Request instanceof DeleteApiGroupV2Request) {
                    instanceId = deleteApiGroupV2Request.instanceId;
                    groupId = deleteApiGroupV2Request.groupId;
                } else {
                    instanceId = deleteApiGroupV2Request['instance_id'];
                    groupId = deleteApiGroupV2Request['group_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteApiGroupV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteApiGroupV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的API。
         * 
         * 删除API时，会删除该API所有相关的资源信息或绑定关系，如API的发布记录，绑定的后端服务，对APP的授权信息等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApiV2(deleteApiV2Request?: DeleteApiV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/{api_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let apiId;

            if (deleteApiV2Request !== null && deleteApiV2Request !== undefined) {
                if (deleteApiV2Request instanceof DeleteApiV2Request) {
                    instanceId = deleteApiV2Request.instanceId;
                    apiId = deleteApiV2Request.apiId;
                } else {
                    instanceId = deleteApiV2Request['instance_id'];
                    apiId = deleteApiV2Request['api_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteApiV2.');
            }
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling deleteApiV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除API与流控策略的绑定关系。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateRequestThrottlingPolicyV2(disassociateRequestThrottlingPolicyV2Request?: DisassociateRequestThrottlingPolicyV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttle-bindings/{throttle_binding_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let throttleBindingId;

            if (disassociateRequestThrottlingPolicyV2Request !== null && disassociateRequestThrottlingPolicyV2Request !== undefined) {
                if (disassociateRequestThrottlingPolicyV2Request instanceof DisassociateRequestThrottlingPolicyV2Request) {
                    instanceId = disassociateRequestThrottlingPolicyV2Request.instanceId;
                    throttleBindingId = disassociateRequestThrottlingPolicyV2Request.throttleBindingId;
                } else {
                    instanceId = disassociateRequestThrottlingPolicyV2Request['instance_id'];
                    throttleBindingId = disassociateRequestThrottlingPolicyV2Request['throttle_binding_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling disassociateRequestThrottlingPolicyV2.');
            }
            if (throttleBindingId === null || throttleBindingId === undefined) {
            throw new RequiredError('throttleBindingId','Required parameter throttleBindingId was null or undefined when calling disassociateRequestThrottlingPolicyV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'throttle_binding_id': throttleBindingId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询API分组列表。
         * 
         * 如果是租户操作，则查询该租户下所有的分组；如果是管理员权限账号操作，则查询的是所有租户的分组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiGroupsV2(listApiGroupsV2Request?: ListApiGroupsV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups",
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
            
            let id;
            
            let name;
            
            let preciseSearch;

            if (listApiGroupsV2Request !== null && listApiGroupsV2Request !== undefined) {
                if (listApiGroupsV2Request instanceof ListApiGroupsV2Request) {
                    instanceId = listApiGroupsV2Request.instanceId;
                    offset = listApiGroupsV2Request.offset;
                    limit = listApiGroupsV2Request.limit;
                    id = listApiGroupsV2Request.id;
                    name = listApiGroupsV2Request.name;
                    preciseSearch = listApiGroupsV2Request.preciseSearch;
                } else {
                    instanceId = listApiGroupsV2Request['instance_id'];
                    offset = listApiGroupsV2Request['offset'];
                    limit = listApiGroupsV2Request['limit'];
                    id = listApiGroupsV2Request['id'];
                    name = listApiGroupsV2Request['name'];
                    preciseSearch = listApiGroupsV2Request['precise_search'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApiGroupsV2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (preciseSearch !== null && preciseSearch !== undefined) {
                localVarQueryParameter['precise_search'] = preciseSearch;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看指定的API在指定的环境上的运行时定义，默认查询RELEASE环境上的运行时定义。
         * 
         * API的定义分为临时定义和运行时定义，分别代表如下含义：
         * - 临时定义：API在编辑中的定义，表示用户最后一次编辑后的API的状态
         * - 运行时定义：API在发布到某个环境时，对发布时的API的临时定义进行快照，固化出来的API的状态。
         * 
         * 访问某个环境上的API，其实访问的就是其运行时的定义
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiRuntimeDefinitionV2(listApiRuntimeDefinitionV2Request?: ListApiRuntimeDefinitionV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/runtime/{api_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let apiId;
            
            let envId;

            if (listApiRuntimeDefinitionV2Request !== null && listApiRuntimeDefinitionV2Request !== undefined) {
                if (listApiRuntimeDefinitionV2Request instanceof ListApiRuntimeDefinitionV2Request) {
                    instanceId = listApiRuntimeDefinitionV2Request.instanceId;
                    apiId = listApiRuntimeDefinitionV2Request.apiId;
                    envId = listApiRuntimeDefinitionV2Request.envId;
                } else {
                    instanceId = listApiRuntimeDefinitionV2Request['instance_id'];
                    apiId = listApiRuntimeDefinitionV2Request['api_id'];
                    envId = listApiRuntimeDefinitionV2Request['env_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApiRuntimeDefinitionV2.');
            }
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling listApiRuntimeDefinitionV2.');
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某个指定的版本详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersionDetailV2(listApiVersionDetailV2Request?: ListApiVersionDetailV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/versions/{version_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let versionId;

            if (listApiVersionDetailV2Request !== null && listApiVersionDetailV2Request !== undefined) {
                if (listApiVersionDetailV2Request instanceof ListApiVersionDetailV2Request) {
                    instanceId = listApiVersionDetailV2Request.instanceId;
                    versionId = listApiVersionDetailV2Request.versionId;
                } else {
                    instanceId = listApiVersionDetailV2Request['instance_id'];
                    versionId = listApiVersionDetailV2Request['version_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApiVersionDetailV2.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling listApiVersionDetailV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某个API的历史版本。每个API在一个环境上最多存在10个历史版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersionsV2(listApiVersionsV2Request?: ListApiVersionsV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/publish/{api_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let apiId;
            
            let offset;
            
            let limit;
            
            let envId;
            
            let envName;

            if (listApiVersionsV2Request !== null && listApiVersionsV2Request !== undefined) {
                if (listApiVersionsV2Request instanceof ListApiVersionsV2Request) {
                    instanceId = listApiVersionsV2Request.instanceId;
                    apiId = listApiVersionsV2Request.apiId;
                    offset = listApiVersionsV2Request.offset;
                    limit = listApiVersionsV2Request.limit;
                    envId = listApiVersionsV2Request.envId;
                    envName = listApiVersionsV2Request.envName;
                } else {
                    instanceId = listApiVersionsV2Request['instance_id'];
                    apiId = listApiVersionsV2Request['api_id'];
                    offset = listApiVersionsV2Request['offset'];
                    limit = listApiVersionsV2Request['limit'];
                    envId = listApiVersionsV2Request['env_id'];
                    envName = listApiVersionsV2Request['env_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApiVersionsV2.');
            }
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling listApiVersionsV2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (envName !== null && envName !== undefined) {
                localVarQueryParameter['env_name'] = envName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某个流控策略上已经绑定的API列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApisBindedToRequestThrottlingPolicyV2(listApisBindedToRequestThrottlingPolicyV2Request?: ListApisBindedToRequestThrottlingPolicyV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttle-bindings/binded-apis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let throttleId;
            
            let offset;
            
            let limit;
            
            let envId;
            
            let groupId;
            
            let apiId;
            
            let apiName;

            if (listApisBindedToRequestThrottlingPolicyV2Request !== null && listApisBindedToRequestThrottlingPolicyV2Request !== undefined) {
                if (listApisBindedToRequestThrottlingPolicyV2Request instanceof ListApisBindedToRequestThrottlingPolicyV2Request) {
                    instanceId = listApisBindedToRequestThrottlingPolicyV2Request.instanceId;
                    throttleId = listApisBindedToRequestThrottlingPolicyV2Request.throttleId;
                    offset = listApisBindedToRequestThrottlingPolicyV2Request.offset;
                    limit = listApisBindedToRequestThrottlingPolicyV2Request.limit;
                    envId = listApisBindedToRequestThrottlingPolicyV2Request.envId;
                    groupId = listApisBindedToRequestThrottlingPolicyV2Request.groupId;
                    apiId = listApisBindedToRequestThrottlingPolicyV2Request.apiId;
                    apiName = listApisBindedToRequestThrottlingPolicyV2Request.apiName;
                } else {
                    instanceId = listApisBindedToRequestThrottlingPolicyV2Request['instance_id'];
                    throttleId = listApisBindedToRequestThrottlingPolicyV2Request['throttle_id'];
                    offset = listApisBindedToRequestThrottlingPolicyV2Request['offset'];
                    limit = listApisBindedToRequestThrottlingPolicyV2Request['limit'];
                    envId = listApisBindedToRequestThrottlingPolicyV2Request['env_id'];
                    groupId = listApisBindedToRequestThrottlingPolicyV2Request['group_id'];
                    apiId = listApisBindedToRequestThrottlingPolicyV2Request['api_id'];
                    apiName = listApisBindedToRequestThrottlingPolicyV2Request['api_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApisBindedToRequestThrottlingPolicyV2.');
            }
            if (throttleId === null || throttleId === undefined) {
                throw new RequiredError('throttleId','Required parameter throttleId was null or undefined when calling listApisBindedToRequestThrottlingPolicyV2.');
            }
            if (throttleId !== null && throttleId !== undefined) {
                localVarQueryParameter['throttle_id'] = throttleId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (apiName !== null && apiName !== undefined) {
                localVarQueryParameter['api_name'] = apiName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有未绑定到该流控策略上的自有API列表。需要API已经发布，未发布的API不予展示。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApisUnbindedToRequestThrottlingPolicyV2(listApisUnbindedToRequestThrottlingPolicyV2Request?: ListApisUnbindedToRequestThrottlingPolicyV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttle-bindings/unbinded-apis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let throttleId;
            
            let offset;
            
            let limit;
            
            let envId;
            
            let groupId;
            
            let apiId;
            
            let apiName;

            if (listApisUnbindedToRequestThrottlingPolicyV2Request !== null && listApisUnbindedToRequestThrottlingPolicyV2Request !== undefined) {
                if (listApisUnbindedToRequestThrottlingPolicyV2Request instanceof ListApisUnbindedToRequestThrottlingPolicyV2Request) {
                    instanceId = listApisUnbindedToRequestThrottlingPolicyV2Request.instanceId;
                    throttleId = listApisUnbindedToRequestThrottlingPolicyV2Request.throttleId;
                    offset = listApisUnbindedToRequestThrottlingPolicyV2Request.offset;
                    limit = listApisUnbindedToRequestThrottlingPolicyV2Request.limit;
                    envId = listApisUnbindedToRequestThrottlingPolicyV2Request.envId;
                    groupId = listApisUnbindedToRequestThrottlingPolicyV2Request.groupId;
                    apiId = listApisUnbindedToRequestThrottlingPolicyV2Request.apiId;
                    apiName = listApisUnbindedToRequestThrottlingPolicyV2Request.apiName;
                } else {
                    instanceId = listApisUnbindedToRequestThrottlingPolicyV2Request['instance_id'];
                    throttleId = listApisUnbindedToRequestThrottlingPolicyV2Request['throttle_id'];
                    offset = listApisUnbindedToRequestThrottlingPolicyV2Request['offset'];
                    limit = listApisUnbindedToRequestThrottlingPolicyV2Request['limit'];
                    envId = listApisUnbindedToRequestThrottlingPolicyV2Request['env_id'];
                    groupId = listApisUnbindedToRequestThrottlingPolicyV2Request['group_id'];
                    apiId = listApisUnbindedToRequestThrottlingPolicyV2Request['api_id'];
                    apiName = listApisUnbindedToRequestThrottlingPolicyV2Request['api_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApisUnbindedToRequestThrottlingPolicyV2.');
            }
            if (throttleId === null || throttleId === undefined) {
                throw new RequiredError('throttleId','Required parameter throttleId was null or undefined when calling listApisUnbindedToRequestThrottlingPolicyV2.');
            }
            if (throttleId !== null && throttleId !== undefined) {
                localVarQueryParameter['throttle_id'] = throttleId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (apiName !== null && apiName !== undefined) {
                localVarQueryParameter['api_name'] = apiName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看API列表，返回API详细信息、发布信息等，但不能查看到后端服务信息和API请求参数信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApisV2(listApisV2Request?: ListApisV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis",
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
            
            let id;
            
            let name;
            
            let groupId;
            
            let reqProtocol;
            
            let reqMethod;
            
            let reqUri;
            
            let authType;
            
            let envId;
            
            let type;
            
            let preciseSearch;
            
            let vpcChannelName;
            
            let returnDataMode;

            if (listApisV2Request !== null && listApisV2Request !== undefined) {
                if (listApisV2Request instanceof ListApisV2Request) {
                    instanceId = listApisV2Request.instanceId;
                    offset = listApisV2Request.offset;
                    limit = listApisV2Request.limit;
                    id = listApisV2Request.id;
                    name = listApisV2Request.name;
                    groupId = listApisV2Request.groupId;
                    reqProtocol = listApisV2Request.reqProtocol;
                    reqMethod = listApisV2Request.reqMethod;
                    reqUri = listApisV2Request.reqUri;
                    authType = listApisV2Request.authType;
                    envId = listApisV2Request.envId;
                    type = listApisV2Request.type;
                    preciseSearch = listApisV2Request.preciseSearch;
                    vpcChannelName = listApisV2Request.vpcChannelName;
                    returnDataMode = listApisV2Request.returnDataMode;
                } else {
                    instanceId = listApisV2Request['instance_id'];
                    offset = listApisV2Request['offset'];
                    limit = listApisV2Request['limit'];
                    id = listApisV2Request['id'];
                    name = listApisV2Request['name'];
                    groupId = listApisV2Request['group_id'];
                    reqProtocol = listApisV2Request['req_protocol'];
                    reqMethod = listApisV2Request['req_method'];
                    reqUri = listApisV2Request['req_uri'];
                    authType = listApisV2Request['auth_type'];
                    envId = listApisV2Request['env_id'];
                    type = listApisV2Request['type'];
                    preciseSearch = listApisV2Request['precise_search'];
                    vpcChannelName = listApisV2Request['vpc_channel_name'];
                    returnDataMode = listApisV2Request['return_data_mode'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApisV2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (reqProtocol !== null && reqProtocol !== undefined) {
                localVarQueryParameter['req_protocol'] = reqProtocol;
            }
            if (reqMethod !== null && reqMethod !== undefined) {
                localVarQueryParameter['req_method'] = reqMethod;
            }
            if (reqUri !== null && reqUri !== undefined) {
                localVarQueryParameter['req_uri'] = reqUri;
            }
            if (authType !== null && authType !== undefined) {
                localVarQueryParameter['auth_type'] = authType;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (preciseSearch !== null && preciseSearch !== undefined) {
                localVarQueryParameter['precise_search'] = preciseSearch;
            }
            if (vpcChannelName !== null && vpcChannelName !== undefined) {
                localVarQueryParameter['vpc_channel_name'] = vpcChannelName;
            }
            if (returnDataMode !== null && returnDataMode !== undefined) {
                localVarQueryParameter['return_data_mode'] = returnDataMode;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某个API绑定的流控策略列表。每个环境上应该最多只有一个流控策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRequestThrottlingPoliciesBindedToApiV2(listRequestThrottlingPoliciesBindedToApiV2Request?: ListRequestThrottlingPoliciesBindedToApiV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/throttle-bindings/binded-throttles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let apiId;
            
            let offset;
            
            let limit;
            
            let throttleId;
            
            let throttleName;
            
            let envId;

            if (listRequestThrottlingPoliciesBindedToApiV2Request !== null && listRequestThrottlingPoliciesBindedToApiV2Request !== undefined) {
                if (listRequestThrottlingPoliciesBindedToApiV2Request instanceof ListRequestThrottlingPoliciesBindedToApiV2Request) {
                    instanceId = listRequestThrottlingPoliciesBindedToApiV2Request.instanceId;
                    apiId = listRequestThrottlingPoliciesBindedToApiV2Request.apiId;
                    offset = listRequestThrottlingPoliciesBindedToApiV2Request.offset;
                    limit = listRequestThrottlingPoliciesBindedToApiV2Request.limit;
                    throttleId = listRequestThrottlingPoliciesBindedToApiV2Request.throttleId;
                    throttleName = listRequestThrottlingPoliciesBindedToApiV2Request.throttleName;
                    envId = listRequestThrottlingPoliciesBindedToApiV2Request.envId;
                } else {
                    instanceId = listRequestThrottlingPoliciesBindedToApiV2Request['instance_id'];
                    apiId = listRequestThrottlingPoliciesBindedToApiV2Request['api_id'];
                    offset = listRequestThrottlingPoliciesBindedToApiV2Request['offset'];
                    limit = listRequestThrottlingPoliciesBindedToApiV2Request['limit'];
                    throttleId = listRequestThrottlingPoliciesBindedToApiV2Request['throttle_id'];
                    throttleName = listRequestThrottlingPoliciesBindedToApiV2Request['throttle_name'];
                    envId = listRequestThrottlingPoliciesBindedToApiV2Request['env_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listRequestThrottlingPoliciesBindedToApiV2.');
            }
            if (apiId === null || apiId === undefined) {
                throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling listRequestThrottlingPoliciesBindedToApiV2.');
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (throttleId !== null && throttleId !== undefined) {
                localVarQueryParameter['throttle_id'] = throttleId;
            }
            if (throttleName !== null && throttleName !== undefined) {
                localVarQueryParameter['throttle_name'] = throttleName;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定分组的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfApiGroupV2(showDetailsOfApiGroupV2Request?: ShowDetailsOfApiGroupV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let groupId;

            if (showDetailsOfApiGroupV2Request !== null && showDetailsOfApiGroupV2Request !== undefined) {
                if (showDetailsOfApiGroupV2Request instanceof ShowDetailsOfApiGroupV2Request) {
                    instanceId = showDetailsOfApiGroupV2Request.instanceId;
                    groupId = showDetailsOfApiGroupV2Request.groupId;
                } else {
                    instanceId = showDetailsOfApiGroupV2Request['instance_id'];
                    groupId = showDetailsOfApiGroupV2Request['group_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfApiGroupV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showDetailsOfApiGroupV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看指定的API的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfApiV2(showDetailsOfApiV2Request?: ShowDetailsOfApiV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/{api_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let apiId;

            if (showDetailsOfApiV2Request !== null && showDetailsOfApiV2Request !== undefined) {
                if (showDetailsOfApiV2Request instanceof ShowDetailsOfApiV2Request) {
                    instanceId = showDetailsOfApiV2Request.instanceId;
                    apiId = showDetailsOfApiV2Request.apiId;
                } else {
                    instanceId = showDetailsOfApiV2Request['instance_id'];
                    apiId = showDetailsOfApiV2Request['api_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfApiV2.');
            }
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling showDetailsOfApiV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改API分组属性。其中name和remark可修改，其他属性不可修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApiGroupV2(updateApiGroupV2Request?: UpdateApiGroupV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let groupId;

            if (updateApiGroupV2Request !== null && updateApiGroupV2Request !== undefined) {
                if (updateApiGroupV2Request instanceof UpdateApiGroupV2Request) {
                    instanceId = updateApiGroupV2Request.instanceId;
                    groupId = updateApiGroupV2Request.groupId;
                    body = updateApiGroupV2Request.body
                } else {
                    instanceId = updateApiGroupV2Request['instance_id'];
                    groupId = updateApiGroupV2Request['group_id'];
                    body = updateApiGroupV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateApiGroupV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateApiGroupV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改指定API的信息，包括后端服务信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApiV2(updateApiV2Request?: UpdateApiV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/apis/{api_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let apiId;

            if (updateApiV2Request !== null && updateApiV2Request !== undefined) {
                if (updateApiV2Request instanceof UpdateApiV2Request) {
                    instanceId = updateApiV2Request.instanceId;
                    apiId = updateApiV2Request.apiId;
                    body = updateApiV2Request.body
                } else {
                    instanceId = updateApiV2Request['instance_id'];
                    apiId = updateApiV2Request['api_id'];
                    body = updateApiV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateApiV2.');
            }
            if (apiId === null || apiId === undefined) {
            throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling updateApiV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'api_id': apiId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量解除API与ACL策略的绑定
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteApiAclBindingV2(batchDeleteApiAclBindingV2Request?: BatchDeleteApiAclBindingV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/acl-bindings",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let instanceId;
            
            let action;

            if (batchDeleteApiAclBindingV2Request !== null && batchDeleteApiAclBindingV2Request !== undefined) {
                if (batchDeleteApiAclBindingV2Request instanceof BatchDeleteApiAclBindingV2Request) {
                    instanceId = batchDeleteApiAclBindingV2Request.instanceId;
                    action = batchDeleteApiAclBindingV2Request.action;
                    body = batchDeleteApiAclBindingV2Request.body
                } else {
                    instanceId = batchDeleteApiAclBindingV2Request['instance_id'];
                    action = batchDeleteApiAclBindingV2Request['action'];
                    body = batchDeleteApiAclBindingV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDeleteApiAclBindingV2.');
            }
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling batchDeleteApiAclBindingV2.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将API与ACL策略进行绑定。
         * 
         * 同一个API发布到不同的环境可以绑定不同的ACL策略；一个API在发布到特定环境后只能绑定一个同一种类型的ACL策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApiAclBindingV2(createApiAclBindingV2Request?: CreateApiAclBindingV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/acl-bindings",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createApiAclBindingV2Request !== null && createApiAclBindingV2Request !== undefined) {
                if (createApiAclBindingV2Request instanceof CreateApiAclBindingV2Request) {
                    instanceId = createApiAclBindingV2Request.instanceId;
                    body = createApiAclBindingV2Request.body
                } else {
                    instanceId = createApiAclBindingV2Request['instance_id'];
                    body = createApiAclBindingV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createApiAclBindingV2.');
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
         * 解除某条API与ACL策略的绑定关系
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApiAclBindingV2(deleteApiAclBindingV2Request?: DeleteApiAclBindingV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/acl-bindings/{acl_bindings_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let aclBindingsId;

            if (deleteApiAclBindingV2Request !== null && deleteApiAclBindingV2Request !== undefined) {
                if (deleteApiAclBindingV2Request instanceof DeleteApiAclBindingV2Request) {
                    instanceId = deleteApiAclBindingV2Request.instanceId;
                    aclBindingsId = deleteApiAclBindingV2Request.aclBindingsId;
                } else {
                    instanceId = deleteApiAclBindingV2Request['instance_id'];
                    aclBindingsId = deleteApiAclBindingV2Request['acl_bindings_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteApiAclBindingV2.');
            }
            if (aclBindingsId === null || aclBindingsId === undefined) {
            throw new RequiredError('aclBindingsId','Required parameter aclBindingsId was null or undefined when calling deleteApiAclBindingV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'acl_bindings_id': aclBindingsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看API绑定的ACL策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAclPolicyBindedToApiV2(listAclPolicyBindedToApiV2Request?: ListAclPolicyBindedToApiV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/acl-bindings/binded-acls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let apiId;
            
            let offset;
            
            let limit;
            
            let envId;
            
            let envName;
            
            let aclId;
            
            let aclName;

            if (listAclPolicyBindedToApiV2Request !== null && listAclPolicyBindedToApiV2Request !== undefined) {
                if (listAclPolicyBindedToApiV2Request instanceof ListAclPolicyBindedToApiV2Request) {
                    instanceId = listAclPolicyBindedToApiV2Request.instanceId;
                    apiId = listAclPolicyBindedToApiV2Request.apiId;
                    offset = listAclPolicyBindedToApiV2Request.offset;
                    limit = listAclPolicyBindedToApiV2Request.limit;
                    envId = listAclPolicyBindedToApiV2Request.envId;
                    envName = listAclPolicyBindedToApiV2Request.envName;
                    aclId = listAclPolicyBindedToApiV2Request.aclId;
                    aclName = listAclPolicyBindedToApiV2Request.aclName;
                } else {
                    instanceId = listAclPolicyBindedToApiV2Request['instance_id'];
                    apiId = listAclPolicyBindedToApiV2Request['api_id'];
                    offset = listAclPolicyBindedToApiV2Request['offset'];
                    limit = listAclPolicyBindedToApiV2Request['limit'];
                    envId = listAclPolicyBindedToApiV2Request['env_id'];
                    envName = listAclPolicyBindedToApiV2Request['env_name'];
                    aclId = listAclPolicyBindedToApiV2Request['acl_id'];
                    aclName = listAclPolicyBindedToApiV2Request['acl_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAclPolicyBindedToApiV2.');
            }
            if (apiId === null || apiId === undefined) {
                throw new RequiredError('apiId','Required parameter apiId was null or undefined when calling listAclPolicyBindedToApiV2.');
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (envName !== null && envName !== undefined) {
                localVarQueryParameter['env_name'] = envName;
            }
            if (aclId !== null && aclId !== undefined) {
                localVarQueryParameter['acl_id'] = aclId;
            }
            if (aclName !== null && aclName !== undefined) {
                localVarQueryParameter['acl_name'] = aclName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看ACL策略绑定的API列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApisBindedToAclPolicyV2(listApisBindedToAclPolicyV2Request?: ListApisBindedToAclPolicyV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/acl-bindings/binded-apis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let aclId;
            
            let offset;
            
            let limit;
            
            let apiId;
            
            let apiName;
            
            let envId;
            
            let groupId;

            if (listApisBindedToAclPolicyV2Request !== null && listApisBindedToAclPolicyV2Request !== undefined) {
                if (listApisBindedToAclPolicyV2Request instanceof ListApisBindedToAclPolicyV2Request) {
                    instanceId = listApisBindedToAclPolicyV2Request.instanceId;
                    aclId = listApisBindedToAclPolicyV2Request.aclId;
                    offset = listApisBindedToAclPolicyV2Request.offset;
                    limit = listApisBindedToAclPolicyV2Request.limit;
                    apiId = listApisBindedToAclPolicyV2Request.apiId;
                    apiName = listApisBindedToAclPolicyV2Request.apiName;
                    envId = listApisBindedToAclPolicyV2Request.envId;
                    groupId = listApisBindedToAclPolicyV2Request.groupId;
                } else {
                    instanceId = listApisBindedToAclPolicyV2Request['instance_id'];
                    aclId = listApisBindedToAclPolicyV2Request['acl_id'];
                    offset = listApisBindedToAclPolicyV2Request['offset'];
                    limit = listApisBindedToAclPolicyV2Request['limit'];
                    apiId = listApisBindedToAclPolicyV2Request['api_id'];
                    apiName = listApisBindedToAclPolicyV2Request['api_name'];
                    envId = listApisBindedToAclPolicyV2Request['env_id'];
                    groupId = listApisBindedToAclPolicyV2Request['group_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApisBindedToAclPolicyV2.');
            }
            if (aclId === null || aclId === undefined) {
                throw new RequiredError('aclId','Required parameter aclId was null or undefined when calling listApisBindedToAclPolicyV2.');
            }
            if (aclId !== null && aclId !== undefined) {
                localVarQueryParameter['acl_id'] = aclId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (apiName !== null && apiName !== undefined) {
                localVarQueryParameter['api_name'] = apiName;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看ACL策略未绑定的API列表，需要API已发布
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApisUnbindedToAclPolicyV2(listApisUnbindedToAclPolicyV2Request?: ListApisUnbindedToAclPolicyV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/acl-bindings/unbinded-apis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let aclId;
            
            let offset;
            
            let limit;
            
            let apiId;
            
            let apiName;
            
            let envId;
            
            let groupId;

            if (listApisUnbindedToAclPolicyV2Request !== null && listApisUnbindedToAclPolicyV2Request !== undefined) {
                if (listApisUnbindedToAclPolicyV2Request instanceof ListApisUnbindedToAclPolicyV2Request) {
                    instanceId = listApisUnbindedToAclPolicyV2Request.instanceId;
                    aclId = listApisUnbindedToAclPolicyV2Request.aclId;
                    offset = listApisUnbindedToAclPolicyV2Request.offset;
                    limit = listApisUnbindedToAclPolicyV2Request.limit;
                    apiId = listApisUnbindedToAclPolicyV2Request.apiId;
                    apiName = listApisUnbindedToAclPolicyV2Request.apiName;
                    envId = listApisUnbindedToAclPolicyV2Request.envId;
                    groupId = listApisUnbindedToAclPolicyV2Request.groupId;
                } else {
                    instanceId = listApisUnbindedToAclPolicyV2Request['instance_id'];
                    aclId = listApisUnbindedToAclPolicyV2Request['acl_id'];
                    offset = listApisUnbindedToAclPolicyV2Request['offset'];
                    limit = listApisUnbindedToAclPolicyV2Request['limit'];
                    apiId = listApisUnbindedToAclPolicyV2Request['api_id'];
                    apiName = listApisUnbindedToAclPolicyV2Request['api_name'];
                    envId = listApisUnbindedToAclPolicyV2Request['env_id'];
                    groupId = listApisUnbindedToAclPolicyV2Request['group_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApisUnbindedToAclPolicyV2.');
            }
            if (aclId === null || aclId === undefined) {
                throw new RequiredError('aclId','Required parameter aclId was null or undefined when calling listApisUnbindedToAclPolicyV2.');
            }
            if (aclId !== null && aclId !== undefined) {
                localVarQueryParameter['acl_id'] = aclId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (apiName !== null && apiName !== undefined) {
                localVarQueryParameter['api_name'] = apiName;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除API对APP的授权关系。解除授权后，APP将不再能够调用该API。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelingAuthorizationV2(cancelingAuthorizationV2Request?: CancelingAuthorizationV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/app-auths/{app_auth_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let appAuthId;

            if (cancelingAuthorizationV2Request !== null && cancelingAuthorizationV2Request !== undefined) {
                if (cancelingAuthorizationV2Request instanceof CancelingAuthorizationV2Request) {
                    instanceId = cancelingAuthorizationV2Request.instanceId;
                    appAuthId = cancelingAuthorizationV2Request.appAuthId;
                } else {
                    instanceId = cancelingAuthorizationV2Request['instance_id'];
                    appAuthId = cancelingAuthorizationV2Request['app_auth_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling cancelingAuthorizationV2.');
            }
            if (appAuthId === null || appAuthId === undefined) {
            throw new RequiredError('appAuthId','Required parameter appAuthId was null or undefined when calling cancelingAuthorizationV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'app_auth_id': appAuthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * APP创建成功后，还不能访问API，如果想要访问某个环境上的API，需要将该API在该环境上授权给APP。授权成功后，APP即可访问该环境上的这个API。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAuthorizingAppsV2(createAuthorizingAppsV2Request?: CreateAuthorizingAppsV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/app-auths",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createAuthorizingAppsV2Request !== null && createAuthorizingAppsV2Request !== undefined) {
                if (createAuthorizingAppsV2Request instanceof CreateAuthorizingAppsV2Request) {
                    instanceId = createAuthorizingAppsV2Request.instanceId;
                    body = createAuthorizingAppsV2Request.body
                } else {
                    instanceId = createAuthorizingAppsV2Request['instance_id'];
                    body = createAuthorizingAppsV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAuthorizingAppsV2.');
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
         * 查询APP已经绑定的API列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApisBindedToAppV2(listApisBindedToAppV2Request?: ListApisBindedToAppV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/app-auths/binded-apis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let appId;
            
            let offset;
            
            let limit;
            
            let apiId;
            
            let apiName;
            
            let groupId;
            
            let groupName;
            
            let envId;

            if (listApisBindedToAppV2Request !== null && listApisBindedToAppV2Request !== undefined) {
                if (listApisBindedToAppV2Request instanceof ListApisBindedToAppV2Request) {
                    instanceId = listApisBindedToAppV2Request.instanceId;
                    appId = listApisBindedToAppV2Request.appId;
                    offset = listApisBindedToAppV2Request.offset;
                    limit = listApisBindedToAppV2Request.limit;
                    apiId = listApisBindedToAppV2Request.apiId;
                    apiName = listApisBindedToAppV2Request.apiName;
                    groupId = listApisBindedToAppV2Request.groupId;
                    groupName = listApisBindedToAppV2Request.groupName;
                    envId = listApisBindedToAppV2Request.envId;
                } else {
                    instanceId = listApisBindedToAppV2Request['instance_id'];
                    appId = listApisBindedToAppV2Request['app_id'];
                    offset = listApisBindedToAppV2Request['offset'];
                    limit = listApisBindedToAppV2Request['limit'];
                    apiId = listApisBindedToAppV2Request['api_id'];
                    apiName = listApisBindedToAppV2Request['api_name'];
                    groupId = listApisBindedToAppV2Request['group_id'];
                    groupName = listApisBindedToAppV2Request['group_name'];
                    envId = listApisBindedToAppV2Request['env_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApisBindedToAppV2.');
            }
            if (appId === null || appId === undefined) {
                throw new RequiredError('appId','Required parameter appId was null or undefined when calling listApisBindedToAppV2.');
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (apiName !== null && apiName !== undefined) {
                localVarQueryParameter['api_name'] = apiName;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定环境上某个APP未绑定的API列表[，包括自有API和从云商店购买的API](tag:hws)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApisUnbindedToAppV2(listApisUnbindedToAppV2Request?: ListApisUnbindedToAppV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/app-auths/unbinded-apis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let appId;
            
            let envId;
            
            let offset;
            
            let limit;
            
            let groupId;
            
            let apiId;
            
            let apiName;

            if (listApisUnbindedToAppV2Request !== null && listApisUnbindedToAppV2Request !== undefined) {
                if (listApisUnbindedToAppV2Request instanceof ListApisUnbindedToAppV2Request) {
                    instanceId = listApisUnbindedToAppV2Request.instanceId;
                    appId = listApisUnbindedToAppV2Request.appId;
                    envId = listApisUnbindedToAppV2Request.envId;
                    offset = listApisUnbindedToAppV2Request.offset;
                    limit = listApisUnbindedToAppV2Request.limit;
                    groupId = listApisUnbindedToAppV2Request.groupId;
                    apiId = listApisUnbindedToAppV2Request.apiId;
                    apiName = listApisUnbindedToAppV2Request.apiName;
                } else {
                    instanceId = listApisUnbindedToAppV2Request['instance_id'];
                    appId = listApisUnbindedToAppV2Request['app_id'];
                    envId = listApisUnbindedToAppV2Request['env_id'];
                    offset = listApisUnbindedToAppV2Request['offset'];
                    limit = listApisUnbindedToAppV2Request['limit'];
                    groupId = listApisUnbindedToAppV2Request['group_id'];
                    apiId = listApisUnbindedToAppV2Request['api_id'];
                    apiName = listApisUnbindedToAppV2Request['api_name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApisUnbindedToAppV2.');
            }
            if (appId === null || appId === undefined) {
                throw new RequiredError('appId','Required parameter appId was null or undefined when calling listApisUnbindedToAppV2.');
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (envId === null || envId === undefined) {
                throw new RequiredError('envId','Required parameter envId was null or undefined when calling listApisUnbindedToAppV2.');
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (apiName !== null && apiName !== undefined) {
                localVarQueryParameter['api_name'] = apiName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询API绑定的APP列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppsBindedToApiV2(listAppsBindedToApiV2Request?: ListAppsBindedToApiV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/app-auths/binded-apps",
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
            
            let apiId;
            
            let appName;
            
            let appId;
            
            let envId;

            if (listAppsBindedToApiV2Request !== null && listAppsBindedToApiV2Request !== undefined) {
                if (listAppsBindedToApiV2Request instanceof ListAppsBindedToApiV2Request) {
                    instanceId = listAppsBindedToApiV2Request.instanceId;
                    offset = listAppsBindedToApiV2Request.offset;
                    limit = listAppsBindedToApiV2Request.limit;
                    apiId = listAppsBindedToApiV2Request.apiId;
                    appName = listAppsBindedToApiV2Request.appName;
                    appId = listAppsBindedToApiV2Request.appId;
                    envId = listAppsBindedToApiV2Request.envId;
                } else {
                    instanceId = listAppsBindedToApiV2Request['instance_id'];
                    offset = listAppsBindedToApiV2Request['offset'];
                    limit = listAppsBindedToApiV2Request['limit'];
                    apiId = listAppsBindedToApiV2Request['api_id'];
                    appName = listAppsBindedToApiV2Request['app_name'];
                    appId = listAppsBindedToApiV2Request['app_id'];
                    envId = listAppsBindedToApiV2Request['env_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAppsBindedToApiV2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (apiId !== null && apiId !== undefined) {
                localVarQueryParameter['api_id'] = apiId;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出分组下API的定义信息。导出文件内容符合swagger标准规范，API网关自定义扩展字段请参考《API网关用户指南》的“导入导出API：扩展定义”章节。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportApiDefinitionsV2(exportApiDefinitionsV2Request?: ExportApiDefinitionsV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/openapi/export",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let instanceId;
            
            let oasVersion;

            if (exportApiDefinitionsV2Request !== null && exportApiDefinitionsV2Request !== undefined) {
                if (exportApiDefinitionsV2Request instanceof ExportApiDefinitionsV2Request) {
                    instanceId = exportApiDefinitionsV2Request.instanceId;
                    body = exportApiDefinitionsV2Request.body
                    oasVersion = exportApiDefinitionsV2Request.oasVersion;
                } else {
                    instanceId = exportApiDefinitionsV2Request['instance_id'];
                    body = exportApiDefinitionsV2Request['body'];
                    oasVersion = exportApiDefinitionsV2Request['oas_version'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling exportApiDefinitionsV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (oasVersion !== null && oasVersion !== undefined) {
                localVarQueryParameter['oas_version'] = oasVersion;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导入API。导入文件内容需要符合swagger标准规范，API网关自定义扩展字段请参考《API网关用户指南》的“导入导出API：扩展定义”章节。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importApiDefinitionsV2(importApiDefinitionsV2Request?: ImportApiDefinitionsV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/openapi/import",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            
            let instanceId;
            let fileName;
            
            let isCreateGroup;
            
            let groupId;
            
            let extendMode;
            
            let simpleMode;
            
            let mockMode;
            
            let apiMode;
            

            if (importApiDefinitionsV2Request !== null && importApiDefinitionsV2Request !== undefined) {
                if (importApiDefinitionsV2Request instanceof ImportApiDefinitionsV2Request) {
                    instanceId = importApiDefinitionsV2Request.instanceId;
                    fileName = importApiDefinitionsV2Request.body?.fileName;
                    isCreateGroup = importApiDefinitionsV2Request.body?.isCreateGroup;
                    groupId = importApiDefinitionsV2Request.body?.groupId;
                    extendMode = importApiDefinitionsV2Request.body?.extendMode;
                    simpleMode = importApiDefinitionsV2Request.body?.simpleMode;
                    mockMode = importApiDefinitionsV2Request.body?.mockMode;
                    apiMode = importApiDefinitionsV2Request.body?.apiMode;
                } else {
                    instanceId = importApiDefinitionsV2Request['instance_id'];
                    fileName = importApiDefinitionsV2Request['body']['fileName'];
                    isCreateGroup = importApiDefinitionsV2Request['body']['isCreateGroup'];
                    groupId = importApiDefinitionsV2Request['body']['groupId'];
                    extendMode = importApiDefinitionsV2Request['body']['extendMode'];
                    simpleMode = importApiDefinitionsV2Request['body']['simpleMode'];
                    mockMode = importApiDefinitionsV2Request['body']['mockMode'];
                    apiMode = importApiDefinitionsV2Request['body']['apiMode'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling importApiDefinitionsV2.');
            }
            if (fileName === null || fileName === undefined) {
            throw new RequiredError('fileName','Required parameter fileName was null or undefined when calling importApiDefinitionsV2.');
            }
            if (isCreateGroup !== undefined) { 
                localVarFormParams.append('is_create_group', isCreateGroup as any);
            }
            if (groupId !== undefined) { 
                localVarFormParams.append('group_id', groupId as any);
            }
            if (extendMode !== undefined) { 
                localVarFormParams.append('extend_mode', extendMode as any);
            }
            if (simpleMode !== undefined) { 
                localVarFormParams.append('simple_mode', simpleMode as any);
            }
            if (mockMode !== undefined) { 
                localVarFormParams.append('mock_mode', mockMode as any);
            }
            if (apiMode !== undefined) { 
                localVarFormParams.append('api_mode', apiMode as any);
            }
            if (fileName !== undefined) { 
                localVarFormParams.append('file_name', fileName as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 域名绑定SSL证书。目前暂时仅支持单个绑定，请求体当中的certificate_ids里面有且只能有一个证书ID。使用实例自定义入方向端口的特性时，相同的域名会同时绑定证书，注意开启/关闭客户端校验会对相同域名的不同端口同时生效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAssociateCertsV2(batchAssociateCertsV2Request?: BatchAssociateCertsV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/domains/{domain_id}/certificates/attach",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let groupId;
            
            let domainId;

            if (batchAssociateCertsV2Request !== null && batchAssociateCertsV2Request !== undefined) {
                if (batchAssociateCertsV2Request instanceof BatchAssociateCertsV2Request) {
                    instanceId = batchAssociateCertsV2Request.instanceId;
                    groupId = batchAssociateCertsV2Request.groupId;
                    domainId = batchAssociateCertsV2Request.domainId;
                    body = batchAssociateCertsV2Request.body
                } else {
                    instanceId = batchAssociateCertsV2Request['instance_id'];
                    groupId = batchAssociateCertsV2Request['group_id'];
                    domainId = batchAssociateCertsV2Request['domain_id'];
                    body = batchAssociateCertsV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchAssociateCertsV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling batchAssociateCertsV2.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling batchAssociateCertsV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * SSL证书绑定域名。使用实例自定义入方向端口的特性时，相同的域名会同时绑定证书，注意开启/关闭客户端校验会对相同域名的不同端口同时生效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAssociateDomainsV2(batchAssociateDomainsV2Request?: BatchAssociateDomainsV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/certificates/{certificate_id}/domains/attach",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let certificateId;

            if (batchAssociateDomainsV2Request !== null && batchAssociateDomainsV2Request !== undefined) {
                if (batchAssociateDomainsV2Request instanceof BatchAssociateDomainsV2Request) {
                    certificateId = batchAssociateDomainsV2Request.certificateId;
                    body = batchAssociateDomainsV2Request.body
                } else {
                    certificateId = batchAssociateDomainsV2Request['certificate_id'];
                    body = batchAssociateDomainsV2Request['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling batchAssociateDomainsV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 域名解绑SSL证书。目前暂时仅支持单个解绑，请求体当中的certificate_ids里面有且只能有一个证书ID。在使用自定义入方向端口的特性时，相同的域名会同时解绑证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDisassociateCertsV2(batchDisassociateCertsV2Request?: BatchDisassociateCertsV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/api-groups/{group_id}/domains/{domain_id}/certificates/detach",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let groupId;
            
            let domainId;

            if (batchDisassociateCertsV2Request !== null && batchDisassociateCertsV2Request !== undefined) {
                if (batchDisassociateCertsV2Request instanceof BatchDisassociateCertsV2Request) {
                    instanceId = batchDisassociateCertsV2Request.instanceId;
                    groupId = batchDisassociateCertsV2Request.groupId;
                    domainId = batchDisassociateCertsV2Request.domainId;
                    body = batchDisassociateCertsV2Request.body
                } else {
                    instanceId = batchDisassociateCertsV2Request['instance_id'];
                    groupId = batchDisassociateCertsV2Request['group_id'];
                    domainId = batchDisassociateCertsV2Request['domain_id'];
                    body = batchDisassociateCertsV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDisassociateCertsV2.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling batchDisassociateCertsV2.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling batchDisassociateCertsV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'group_id': groupId,'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * SSL证书解绑域名。在使用自定义入方向端口的特性时，相同的域名会同时解绑证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDisassociateDomainsV2(batchDisassociateDomainsV2Request?: BatchDisassociateDomainsV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/certificates/{certificate_id}/domains/detach",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let certificateId;

            if (batchDisassociateDomainsV2Request !== null && batchDisassociateDomainsV2Request !== undefined) {
                if (batchDisassociateDomainsV2Request instanceof BatchDisassociateDomainsV2Request) {
                    certificateId = batchDisassociateDomainsV2Request.certificateId;
                    body = batchDisassociateDomainsV2Request.body
                } else {
                    certificateId = batchDisassociateDomainsV2Request['certificate_id'];
                    body = batchDisassociateDomainsV2Request['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling batchDisassociateDomainsV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建SSL证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCertificateV2(createCertificateV2Request?: CreateCertificateV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/certificates",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCertificateV2Request !== null && createCertificateV2Request !== undefined) {
                if (createCertificateV2Request instanceof CreateCertificateV2Request) {
                    body = createCertificateV2Request.body
                } else {
                    body = createCertificateV2Request['body'];
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
         * 删除ssl证书接口，删除时只有没有关联域名的证书才能被删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCertificateV2(deleteCertificateV2Request?: DeleteCertificateV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let certificateId;

            if (deleteCertificateV2Request !== null && deleteCertificateV2Request !== undefined) {
                if (deleteCertificateV2Request instanceof DeleteCertificateV2Request) {
                    certificateId = deleteCertificateV2Request.certificateId;
                } else {
                    certificateId = deleteCertificateV2Request['certificate_id'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling deleteCertificateV2.');
            }

            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取SSL证书已绑定域名列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAttachedDomainsV2(listAttachedDomainsV2Request?: ListAttachedDomainsV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/certificates/{certificate_id}/attached-domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let certificateId;
            
            let offset;
            
            let limit;
            
            let urlDomain;

            if (listAttachedDomainsV2Request !== null && listAttachedDomainsV2Request !== undefined) {
                if (listAttachedDomainsV2Request instanceof ListAttachedDomainsV2Request) {
                    certificateId = listAttachedDomainsV2Request.certificateId;
                    offset = listAttachedDomainsV2Request.offset;
                    limit = listAttachedDomainsV2Request.limit;
                    urlDomain = listAttachedDomainsV2Request.urlDomain;
                } else {
                    certificateId = listAttachedDomainsV2Request['certificate_id'];
                    offset = listAttachedDomainsV2Request['offset'];
                    limit = listAttachedDomainsV2Request['limit'];
                    urlDomain = listAttachedDomainsV2Request['url_domain'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling listAttachedDomainsV2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (urlDomain !== null && urlDomain !== undefined) {
                localVarQueryParameter['url_domain'] = urlDomain;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取SSL证书列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCertificatesV2(listCertificatesV2Request?: ListCertificatesV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/certificates",
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
            
            let name;
            
            let commonName;
            
            let signatureAlgorithm;
            
            let type;

            if (listCertificatesV2Request !== null && listCertificatesV2Request !== undefined) {
                if (listCertificatesV2Request instanceof ListCertificatesV2Request) {
                    instanceId = listCertificatesV2Request.instanceId;
                    offset = listCertificatesV2Request.offset;
                    limit = listCertificatesV2Request.limit;
                    name = listCertificatesV2Request.name;
                    commonName = listCertificatesV2Request.commonName;
                    signatureAlgorithm = listCertificatesV2Request.signatureAlgorithm;
                    type = listCertificatesV2Request.type;
                } else {
                    instanceId = listCertificatesV2Request['instance_id'];
                    offset = listCertificatesV2Request['offset'];
                    limit = listCertificatesV2Request['limit'];
                    name = listCertificatesV2Request['name'];
                    commonName = listCertificatesV2Request['common_name'];
                    signatureAlgorithm = listCertificatesV2Request['signature_algorithm'];
                    type = listCertificatesV2Request['type'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
                throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listCertificatesV2.');
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
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
            if (commonName !== null && commonName !== undefined) {
                localVarQueryParameter['common_name'] = commonName;
            }
            if (signatureAlgorithm !== null && signatureAlgorithm !== undefined) {
                localVarQueryParameter['signature_algorithm'] = signatureAlgorithm;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看证书详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfCertificateV2(showDetailsOfCertificateV2Request?: ShowDetailsOfCertificateV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let certificateId;

            if (showDetailsOfCertificateV2Request !== null && showDetailsOfCertificateV2Request !== undefined) {
                if (showDetailsOfCertificateV2Request instanceof ShowDetailsOfCertificateV2Request) {
                    certificateId = showDetailsOfCertificateV2Request.certificateId;
                } else {
                    certificateId = showDetailsOfCertificateV2Request['certificate_id'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling showDetailsOfCertificateV2.');
            }

            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改SSL证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCertificateV2(updateCertificateV2Request?: UpdateCertificateV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/certificates/{certificate_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let certificateId;

            if (updateCertificateV2Request !== null && updateCertificateV2Request !== undefined) {
                if (updateCertificateV2Request instanceof UpdateCertificateV2Request) {
                    certificateId = updateCertificateV2Request.certificateId;
                    body = updateCertificateV2Request.body
                } else {
                    certificateId = updateCertificateV2Request['certificate_id'];
                    body = updateCertificateV2Request['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling updateCertificateV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定的VPC通道添加后端实例
         * 
         * 如果指定地址的后端实例已存在，则更新对应后端实例信息。如果请求体中包含多个重复地址的后端实例定义，则使用第一个定义。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addingBackendInstancesV2(addingBackendInstancesV2Request?: AddingBackendInstancesV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}/members",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let vpcChannelId;

            if (addingBackendInstancesV2Request !== null && addingBackendInstancesV2Request !== undefined) {
                if (addingBackendInstancesV2Request instanceof AddingBackendInstancesV2Request) {
                    instanceId = addingBackendInstancesV2Request.instanceId;
                    vpcChannelId = addingBackendInstancesV2Request.vpcChannelId;
                    body = addingBackendInstancesV2Request.body
                } else {
                    instanceId = addingBackendInstancesV2Request['instance_id'];
                    vpcChannelId = addingBackendInstancesV2Request['vpc_channel_id'];
                    body = addingBackendInstancesV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling addingBackendInstancesV2.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling addingBackendInstancesV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量修改后端服务器状态不可用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDisableMembers(batchDisableMembersRequest?: BatchDisableMembersRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}/members/batch-disable",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let vpcChannelId;

            if (batchDisableMembersRequest !== null && batchDisableMembersRequest !== undefined) {
                if (batchDisableMembersRequest instanceof BatchDisableMembersRequest) {
                    instanceId = batchDisableMembersRequest.instanceId;
                    vpcChannelId = batchDisableMembersRequest.vpcChannelId;
                    body = batchDisableMembersRequest.body
                } else {
                    instanceId = batchDisableMembersRequest['instance_id'];
                    vpcChannelId = batchDisableMembersRequest['vpc_channel_id'];
                    body = batchDisableMembersRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchDisableMembers.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling batchDisableMembers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量修改后端服务器状态可用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchEnableMembers(batchEnableMembersRequest?: BatchEnableMembersRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}/members/batch-enable",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let vpcChannelId;

            if (batchEnableMembersRequest !== null && batchEnableMembersRequest !== undefined) {
                if (batchEnableMembersRequest instanceof BatchEnableMembersRequest) {
                    instanceId = batchEnableMembersRequest.instanceId;
                    vpcChannelId = batchEnableMembersRequest.vpcChannelId;
                    body = batchEnableMembersRequest.body
                } else {
                    instanceId = batchEnableMembersRequest['instance_id'];
                    vpcChannelId = batchEnableMembersRequest['vpc_channel_id'];
                    body = batchEnableMembersRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling batchEnableMembers.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling batchEnableMembers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在APIG中创建VPC通道后端服务器组，VPC通道后端实例可以选择是否关联后端实例服务器组，以便管理后端服务器节点。
         * 
         * 如果指定名称的后端服务器组已存在，则更新对应后端服务器组信息。如果请求体中包含多个重复名称的后端服务器定义，则使用第一个定义。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMemberGroup(createMemberGroupRequest?: CreateMemberGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}/member-groups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let vpcChannelId;

            if (createMemberGroupRequest !== null && createMemberGroupRequest !== undefined) {
                if (createMemberGroupRequest instanceof CreateMemberGroupRequest) {
                    instanceId = createMemberGroupRequest.instanceId;
                    vpcChannelId = createMemberGroupRequest.vpcChannelId;
                    body = createMemberGroupRequest.body
                } else {
                    instanceId = createMemberGroupRequest['instance_id'];
                    vpcChannelId = createMemberGroupRequest['vpc_channel_id'];
                    body = createMemberGroupRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createMemberGroup.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling createMemberGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在API网关中创建连接私有VPC资源的通道，并在创建API时将后端节点配置为使用这些VPC通道，以便API网关直接访问私有VPC资源。
         * &gt; 每个用户最多创建30个VPC通道。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpcChannelV2(createVpcChannelV2Request?: CreateVpcChannelV2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createVpcChannelV2Request !== null && createVpcChannelV2Request !== undefined) {
                if (createVpcChannelV2Request instanceof CreateVpcChannelV2Request) {
                    instanceId = createVpcChannelV2Request.instanceId;
                    body = createVpcChannelV2Request.body
                } else {
                    instanceId = createVpcChannelV2Request['instance_id'];
                    body = createVpcChannelV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createVpcChannelV2.');
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
         * 删除指定VPC通道中的后端实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBackendInstanceV2(deleteBackendInstanceV2Request?: DeleteBackendInstanceV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}/members/{member_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let vpcChannelId;
            
            let memberId;

            if (deleteBackendInstanceV2Request !== null && deleteBackendInstanceV2Request !== undefined) {
                if (deleteBackendInstanceV2Request instanceof DeleteBackendInstanceV2Request) {
                    instanceId = deleteBackendInstanceV2Request.instanceId;
                    vpcChannelId = deleteBackendInstanceV2Request.vpcChannelId;
                    memberId = deleteBackendInstanceV2Request.memberId;
                } else {
                    instanceId = deleteBackendInstanceV2Request['instance_id'];
                    vpcChannelId = deleteBackendInstanceV2Request['vpc_channel_id'];
                    memberId = deleteBackendInstanceV2Request['member_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteBackendInstanceV2.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling deleteBackendInstanceV2.');
            }
            if (memberId === null || memberId === undefined) {
            throw new RequiredError('memberId','Required parameter memberId was null or undefined when calling deleteBackendInstanceV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId,'member_id': memberId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的VPC通道后端服务器组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMemberGroup(deleteMemberGroupRequest?: DeleteMemberGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}/member-groups/{member_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let vpcChannelId;
            
            let memberGroupId;

            if (deleteMemberGroupRequest !== null && deleteMemberGroupRequest !== undefined) {
                if (deleteMemberGroupRequest instanceof DeleteMemberGroupRequest) {
                    instanceId = deleteMemberGroupRequest.instanceId;
                    vpcChannelId = deleteMemberGroupRequest.vpcChannelId;
                    memberGroupId = deleteMemberGroupRequest.memberGroupId;
                } else {
                    instanceId = deleteMemberGroupRequest['instance_id'];
                    vpcChannelId = deleteMemberGroupRequest['vpc_channel_id'];
                    memberGroupId = deleteMemberGroupRequest['member_group_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteMemberGroup.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling deleteMemberGroup.');
            }
            if (memberGroupId === null || memberGroupId === undefined) {
            throw new RequiredError('memberGroupId','Required parameter memberGroupId was null or undefined when calling deleteMemberGroup.');
            }

            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId,'member_group_id': memberGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的VPC通道
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpcChannelV2(deleteVpcChannelV2Request?: DeleteVpcChannelV2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let vpcChannelId;

            if (deleteVpcChannelV2Request !== null && deleteVpcChannelV2Request !== undefined) {
                if (deleteVpcChannelV2Request instanceof DeleteVpcChannelV2Request) {
                    instanceId = deleteVpcChannelV2Request.instanceId;
                    vpcChannelId = deleteVpcChannelV2Request.vpcChannelId;
                } else {
                    instanceId = deleteVpcChannelV2Request['instance_id'];
                    vpcChannelId = deleteVpcChannelV2Request['vpc_channel_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteVpcChannelV2.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling deleteVpcChannelV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看指定VPC通道的后端实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBackendInstancesV2(listBackendInstancesV2Request?: ListBackendInstancesV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}/members",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let vpcChannelId;
            
            let offset;
            
            let limit;
            
            let name;
            
            let memberGroupName;
            
            let memberGroupId;
            
            let preciseSearch;

            if (listBackendInstancesV2Request !== null && listBackendInstancesV2Request !== undefined) {
                if (listBackendInstancesV2Request instanceof ListBackendInstancesV2Request) {
                    instanceId = listBackendInstancesV2Request.instanceId;
                    vpcChannelId = listBackendInstancesV2Request.vpcChannelId;
                    offset = listBackendInstancesV2Request.offset;
                    limit = listBackendInstancesV2Request.limit;
                    name = listBackendInstancesV2Request.name;
                    memberGroupName = listBackendInstancesV2Request.memberGroupName;
                    memberGroupId = listBackendInstancesV2Request.memberGroupId;
                    preciseSearch = listBackendInstancesV2Request.preciseSearch;
                } else {
                    instanceId = listBackendInstancesV2Request['instance_id'];
                    vpcChannelId = listBackendInstancesV2Request['vpc_channel_id'];
                    offset = listBackendInstancesV2Request['offset'];
                    limit = listBackendInstancesV2Request['limit'];
                    name = listBackendInstancesV2Request['name'];
                    memberGroupName = listBackendInstancesV2Request['member_group_name'];
                    memberGroupId = listBackendInstancesV2Request['member_group_id'];
                    preciseSearch = listBackendInstancesV2Request['precise_search'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listBackendInstancesV2.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling listBackendInstancesV2.');
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
            if (memberGroupName !== null && memberGroupName !== undefined) {
                localVarQueryParameter['member_group_name'] = memberGroupName;
            }
            if (memberGroupId !== null && memberGroupId !== undefined) {
                localVarQueryParameter['member_group_id'] = memberGroupId;
            }
            if (preciseSearch !== null && preciseSearch !== undefined) {
                localVarQueryParameter['precise_search'] = preciseSearch;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询VPC通道后端云服务组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMemberGroups(listMemberGroupsRequest?: ListMemberGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}/member-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let vpcChannelId;
            
            let offset;
            
            let limit;
            
            let dictCode;
            
            let memberGroupName;
            
            let preciseSearch;

            if (listMemberGroupsRequest !== null && listMemberGroupsRequest !== undefined) {
                if (listMemberGroupsRequest instanceof ListMemberGroupsRequest) {
                    instanceId = listMemberGroupsRequest.instanceId;
                    vpcChannelId = listMemberGroupsRequest.vpcChannelId;
                    offset = listMemberGroupsRequest.offset;
                    limit = listMemberGroupsRequest.limit;
                    dictCode = listMemberGroupsRequest.dictCode;
                    memberGroupName = listMemberGroupsRequest.memberGroupName;
                    preciseSearch = listMemberGroupsRequest.preciseSearch;
                } else {
                    instanceId = listMemberGroupsRequest['instance_id'];
                    vpcChannelId = listMemberGroupsRequest['vpc_channel_id'];
                    offset = listMemberGroupsRequest['offset'];
                    limit = listMemberGroupsRequest['limit'];
                    dictCode = listMemberGroupsRequest['dict_code'];
                    memberGroupName = listMemberGroupsRequest['member_group_name'];
                    preciseSearch = listMemberGroupsRequest['precise_search'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listMemberGroups.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling listMemberGroups.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (dictCode !== null && dictCode !== undefined) {
                localVarQueryParameter['dict_code'] = dictCode;
            }
            if (memberGroupName !== null && memberGroupName !== undefined) {
                localVarQueryParameter['member_group_name'] = memberGroupName;
            }
            if (preciseSearch !== null && preciseSearch !== undefined) {
                localVarQueryParameter['precise_search'] = preciseSearch;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看VPC通道列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcChannelsV2(listVpcChannelsV2Request?: ListVpcChannelsV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels",
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
            
            let id;
            
            let name;
            
            let dictCode;
            
            let preciseSearch;
            
            let memberHost;
            
            let memberPort;
            
            let memberGroupName;
            
            let memberGroupId;

            if (listVpcChannelsV2Request !== null && listVpcChannelsV2Request !== undefined) {
                if (listVpcChannelsV2Request instanceof ListVpcChannelsV2Request) {
                    instanceId = listVpcChannelsV2Request.instanceId;
                    offset = listVpcChannelsV2Request.offset;
                    limit = listVpcChannelsV2Request.limit;
                    id = listVpcChannelsV2Request.id;
                    name = listVpcChannelsV2Request.name;
                    dictCode = listVpcChannelsV2Request.dictCode;
                    preciseSearch = listVpcChannelsV2Request.preciseSearch;
                    memberHost = listVpcChannelsV2Request.memberHost;
                    memberPort = listVpcChannelsV2Request.memberPort;
                    memberGroupName = listVpcChannelsV2Request.memberGroupName;
                    memberGroupId = listVpcChannelsV2Request.memberGroupId;
                } else {
                    instanceId = listVpcChannelsV2Request['instance_id'];
                    offset = listVpcChannelsV2Request['offset'];
                    limit = listVpcChannelsV2Request['limit'];
                    id = listVpcChannelsV2Request['id'];
                    name = listVpcChannelsV2Request['name'];
                    dictCode = listVpcChannelsV2Request['dict_code'];
                    preciseSearch = listVpcChannelsV2Request['precise_search'];
                    memberHost = listVpcChannelsV2Request['member_host'];
                    memberPort = listVpcChannelsV2Request['member_port'];
                    memberGroupName = listVpcChannelsV2Request['member_group_name'];
                    memberGroupId = listVpcChannelsV2Request['member_group_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listVpcChannelsV2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (dictCode !== null && dictCode !== undefined) {
                localVarQueryParameter['dict_code'] = dictCode;
            }
            if (preciseSearch !== null && preciseSearch !== undefined) {
                localVarQueryParameter['precise_search'] = preciseSearch;
            }
            if (memberHost !== null && memberHost !== undefined) {
                localVarQueryParameter['member_host'] = memberHost;
            }
            if (memberPort !== null && memberPort !== undefined) {
                localVarQueryParameter['member_port'] = memberPort;
            }
            if (memberGroupName !== null && memberGroupName !== undefined) {
                localVarQueryParameter['member_group_name'] = memberGroupName;
            }
            if (memberGroupId !== null && memberGroupId !== undefined) {
                localVarQueryParameter['member_group_id'] = memberGroupId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看指定的VPC通道后端服务器组详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfMemberGroup(showDetailsOfMemberGroupRequest?: ShowDetailsOfMemberGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}/member-groups/{member_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let vpcChannelId;
            
            let memberGroupId;

            if (showDetailsOfMemberGroupRequest !== null && showDetailsOfMemberGroupRequest !== undefined) {
                if (showDetailsOfMemberGroupRequest instanceof ShowDetailsOfMemberGroupRequest) {
                    instanceId = showDetailsOfMemberGroupRequest.instanceId;
                    vpcChannelId = showDetailsOfMemberGroupRequest.vpcChannelId;
                    memberGroupId = showDetailsOfMemberGroupRequest.memberGroupId;
                } else {
                    instanceId = showDetailsOfMemberGroupRequest['instance_id'];
                    vpcChannelId = showDetailsOfMemberGroupRequest['vpc_channel_id'];
                    memberGroupId = showDetailsOfMemberGroupRequest['member_group_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfMemberGroup.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling showDetailsOfMemberGroup.');
            }
            if (memberGroupId === null || memberGroupId === undefined) {
            throw new RequiredError('memberGroupId','Required parameter memberGroupId was null or undefined when calling showDetailsOfMemberGroup.');
            }

            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId,'member_group_id': memberGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看指定的VPC通道详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailsOfVpcChannelV2(showDetailsOfVpcChannelV2Request?: ShowDetailsOfVpcChannelV2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let vpcChannelId;

            if (showDetailsOfVpcChannelV2Request !== null && showDetailsOfVpcChannelV2Request !== undefined) {
                if (showDetailsOfVpcChannelV2Request instanceof ShowDetailsOfVpcChannelV2Request) {
                    instanceId = showDetailsOfVpcChannelV2Request.instanceId;
                    vpcChannelId = showDetailsOfVpcChannelV2Request.vpcChannelId;
                } else {
                    instanceId = showDetailsOfVpcChannelV2Request['instance_id'];
                    vpcChannelId = showDetailsOfVpcChannelV2Request['vpc_channel_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showDetailsOfVpcChannelV2.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling showDetailsOfVpcChannelV2.');
            }

            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定的VPC通道的后端实例。更新时，使用传入的请求参数对对应云服务组的后端实例进行全量覆盖修改。如果未指定修改的云服务器组，则进行全量覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBackendInstancesV2(updateBackendInstancesV2Request?: UpdateBackendInstancesV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}/members",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let vpcChannelId;

            if (updateBackendInstancesV2Request !== null && updateBackendInstancesV2Request !== undefined) {
                if (updateBackendInstancesV2Request instanceof UpdateBackendInstancesV2Request) {
                    instanceId = updateBackendInstancesV2Request.instanceId;
                    vpcChannelId = updateBackendInstancesV2Request.vpcChannelId;
                    body = updateBackendInstancesV2Request.body
                } else {
                    instanceId = updateBackendInstancesV2Request['instance_id'];
                    vpcChannelId = updateBackendInstancesV2Request['vpc_channel_id'];
                    body = updateBackendInstancesV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateBackendInstancesV2.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling updateBackendInstancesV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改VPC通道健康检查。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHealthCheck(updateHealthCheckRequest?: UpdateHealthCheckRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}/health-config",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let vpcChannelId;

            if (updateHealthCheckRequest !== null && updateHealthCheckRequest !== undefined) {
                if (updateHealthCheckRequest instanceof UpdateHealthCheckRequest) {
                    instanceId = updateHealthCheckRequest.instanceId;
                    vpcChannelId = updateHealthCheckRequest.vpcChannelId;
                    body = updateHealthCheckRequest.body
                } else {
                    instanceId = updateHealthCheckRequest['instance_id'];
                    vpcChannelId = updateHealthCheckRequest['vpc_channel_id'];
                    body = updateHealthCheckRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateHealthCheck.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling updateHealthCheck.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定VPC通道后端服务器组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMemberGroup(updateMemberGroupRequest?: UpdateMemberGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}/member-groups/{member_group_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let vpcChannelId;
            
            let memberGroupId;

            if (updateMemberGroupRequest !== null && updateMemberGroupRequest !== undefined) {
                if (updateMemberGroupRequest instanceof UpdateMemberGroupRequest) {
                    instanceId = updateMemberGroupRequest.instanceId;
                    vpcChannelId = updateMemberGroupRequest.vpcChannelId;
                    memberGroupId = updateMemberGroupRequest.memberGroupId;
                    body = updateMemberGroupRequest.body
                } else {
                    instanceId = updateMemberGroupRequest['instance_id'];
                    vpcChannelId = updateMemberGroupRequest['vpc_channel_id'];
                    memberGroupId = updateMemberGroupRequest['member_group_id'];
                    body = updateMemberGroupRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateMemberGroup.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling updateMemberGroup.');
            }
            if (memberGroupId === null || memberGroupId === undefined) {
            throw new RequiredError('memberGroupId','Required parameter memberGroupId was null or undefined when calling updateMemberGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId,'member_group_id': memberGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定VPC通道的参数
         * 
         * 使用传入的后端实例列表对VPC通道进行全量覆盖，如果后端实例列表为空，则会全量删除已有的后端实例；
         * 
         * 使用传入的后端服务器组列表对VPC通道进行全量覆盖，如果后端服务器组列表为空，则会全量删除已有的服务器组；
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpcChannelV2(updateVpcChannelV2Request?: UpdateVpcChannelV2Request) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/apigw/instances/{instance_id}/vpc-channels/{vpc_channel_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let vpcChannelId;

            if (updateVpcChannelV2Request !== null && updateVpcChannelV2Request !== undefined) {
                if (updateVpcChannelV2Request instanceof UpdateVpcChannelV2Request) {
                    instanceId = updateVpcChannelV2Request.instanceId;
                    vpcChannelId = updateVpcChannelV2Request.vpcChannelId;
                    body = updateVpcChannelV2Request.body
                } else {
                    instanceId = updateVpcChannelV2Request['instance_id'];
                    vpcChannelId = updateVpcChannelV2Request['vpc_channel_id'];
                    body = updateVpcChannelV2Request['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateVpcChannelV2.');
            }
            if (vpcChannelId === null || vpcChannelId === undefined) {
            throw new RequiredError('vpcChannelId','Required parameter vpcChannelId was null or undefined when calling updateVpcChannelV2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'vpc_channel_id': vpcChannelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): ApigClient {
    return new ApigClient(client);
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