import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AclPolicyOption } from './model/AclPolicyOption';
import { AclPolicyResult } from './model/AclPolicyResult';
import { AgencyAllProjectRole } from './model/AgencyAllProjectRole';
import { AgencyAssumedby } from './model/AgencyAssumedby';
import { AgencyAssumedbyUser } from './model/AgencyAssumedbyUser';
import { AgencyAssumedbyUserDomain } from './model/AgencyAssumedbyUserDomain';
import { AgencyAuth } from './model/AgencyAuth';
import { AgencyAuthIdentity } from './model/AgencyAuthIdentity';
import { AgencyPolicy } from './model/AgencyPolicy';
import { AgencyPolicyResource } from './model/AgencyPolicyResource';
import { AgencyPolicyRoleOption } from './model/AgencyPolicyRoleOption';
import { AgencyPolicyRoleResult } from './model/AgencyPolicyRoleResult';
import { AgencyPolicyStatement } from './model/AgencyPolicyStatement';
import { AgencyResult } from './model/AgencyResult';
import { AgencyTokenAssumerole } from './model/AgencyTokenAssumerole';
import { AgencyTokenAuth } from './model/AgencyTokenAuth';
import { AgencyTokenDomain } from './model/AgencyTokenDomain';
import { AgencyTokenIdentity } from './model/AgencyTokenIdentity';
import { AgencyTokenProject } from './model/AgencyTokenProject';
import { AgencyTokenProjectDomain } from './model/AgencyTokenProjectDomain';
import { AgencyTokenResult } from './model/AgencyTokenResult';
import { AgencyTokenScope } from './model/AgencyTokenScope';
import { AgencyTokenScopeDomain } from './model/AgencyTokenScopeDomain';
import { AgencyTokenScopeProject } from './model/AgencyTokenScopeProject';
import { AgencyTokenUser } from './model/AgencyTokenUser';
import { AgencyTokenUserDomain } from './model/AgencyTokenUserDomain';
import { AllowAddressNetmasksOption } from './model/AllowAddressNetmasksOption';
import { AllowAddressNetmasksResult } from './model/AllowAddressNetmasksResult';
import { AllowIpRangesOption } from './model/AllowIpRangesOption';
import { AllowIpRangesResult } from './model/AllowIpRangesResult';
import { AllowUserBody } from './model/AllowUserBody';
import { AssociateAgencyWithAllProjectsPermissionRequest } from './model/AssociateAgencyWithAllProjectsPermissionRequest';
import { AssociateAgencyWithAllProjectsPermissionResponse } from './model/AssociateAgencyWithAllProjectsPermissionResponse';
import { AssociateAgencyWithDomainPermissionRequest } from './model/AssociateAgencyWithDomainPermissionRequest';
import { AssociateAgencyWithDomainPermissionResponse } from './model/AssociateAgencyWithDomainPermissionResponse';
import { AssociateAgencyWithProjectPermissionRequest } from './model/AssociateAgencyWithProjectPermissionRequest';
import { AssociateAgencyWithProjectPermissionResponse } from './model/AssociateAgencyWithProjectPermissionResponse';
import { AssociateRoleToGroupOnEnterpriseProjectRequest } from './model/AssociateRoleToGroupOnEnterpriseProjectRequest';
import { AssociateRoleToGroupOnEnterpriseProjectResponse } from './model/AssociateRoleToGroupOnEnterpriseProjectResponse';
import { AssociateRoleToUserOnEnterpriseProjectRequest } from './model/AssociateRoleToUserOnEnterpriseProjectRequest';
import { AssociateRoleToUserOnEnterpriseProjectResponse } from './model/AssociateRoleToUserOnEnterpriseProjectResponse';
import { AssumeroleSessionuser } from './model/AssumeroleSessionuser';
import { AuthProjectResult } from './model/AuthProjectResult';
import { AuthScope } from './model/AuthScope';
import { AuthScopeDomain } from './model/AuthScopeDomain';
import { AuthScopeProject } from './model/AuthScopeProject';
import { BindMfaDevice } from './model/BindMfaDevice';
import { Catalog } from './model/Catalog';
import { CatalogEndpoints } from './model/CatalogEndpoints';
import { CheckAllProjectsPermissionForAgencyRequest } from './model/CheckAllProjectsPermissionForAgencyRequest';
import { CheckAllProjectsPermissionForAgencyResponse } from './model/CheckAllProjectsPermissionForAgencyResponse';
import { CheckDomainPermissionForAgencyRequest } from './model/CheckDomainPermissionForAgencyRequest';
import { CheckDomainPermissionForAgencyResponse } from './model/CheckDomainPermissionForAgencyResponse';
import { CheckProjectPermissionForAgencyRequest } from './model/CheckProjectPermissionForAgencyRequest';
import { CheckProjectPermissionForAgencyResponse } from './model/CheckProjectPermissionForAgencyResponse';
import { Config } from './model/Config';
import { ConfigByOption } from './model/ConfigByOption';
import { CreateAgencyCustomPolicyRequest } from './model/CreateAgencyCustomPolicyRequest';
import { CreateAgencyCustomPolicyRequestBody } from './model/CreateAgencyCustomPolicyRequestBody';
import { CreateAgencyCustomPolicyResponse } from './model/CreateAgencyCustomPolicyResponse';
import { CreateAgencyOption } from './model/CreateAgencyOption';
import { CreateAgencyRequest } from './model/CreateAgencyRequest';
import { CreateAgencyRequestBody } from './model/CreateAgencyRequestBody';
import { CreateAgencyResponse } from './model/CreateAgencyResponse';
import { CreateBindingDeviceRequest } from './model/CreateBindingDeviceRequest';
import { CreateBindingDeviceResponse } from './model/CreateBindingDeviceResponse';
import { CreateCloudServiceCustomPolicyRequest } from './model/CreateCloudServiceCustomPolicyRequest';
import { CreateCloudServiceCustomPolicyRequestBody } from './model/CreateCloudServiceCustomPolicyRequestBody';
import { CreateCloudServiceCustomPolicyResponse } from './model/CreateCloudServiceCustomPolicyResponse';
import { CreateCredentialOption } from './model/CreateCredentialOption';
import { CreateCredentialResult } from './model/CreateCredentialResult';
import { CreateLoginTokenRequest } from './model/CreateLoginTokenRequest';
import { CreateLoginTokenRequestBody } from './model/CreateLoginTokenRequestBody';
import { CreateLoginTokenResponse } from './model/CreateLoginTokenResponse';
import { CreateMetadataRequest } from './model/CreateMetadataRequest';
import { CreateMetadataRequestBody } from './model/CreateMetadataRequestBody';
import { CreateMetadataResponse } from './model/CreateMetadataResponse';
import { CreateMfaDevice } from './model/CreateMfaDevice';
import { CreateMfaDeviceReq } from './model/CreateMfaDeviceReq';
import { CreateMfaDeviceRequest } from './model/CreateMfaDeviceRequest';
import { CreateMfaDeviceRespon } from './model/CreateMfaDeviceRespon';
import { CreateMfaDeviceResponse } from './model/CreateMfaDeviceResponse';
import { CreateOpenIdConnectConfig } from './model/CreateOpenIdConnectConfig';
import { CreateOpenIdConnectConfigRequest } from './model/CreateOpenIdConnectConfigRequest';
import { CreateOpenIdConnectConfigRequestBody } from './model/CreateOpenIdConnectConfigRequestBody';
import { CreateOpenIdConnectConfigResponse } from './model/CreateOpenIdConnectConfigResponse';
import { CreatePermanentAccessKeyRequest } from './model/CreatePermanentAccessKeyRequest';
import { CreatePermanentAccessKeyRequestBody } from './model/CreatePermanentAccessKeyRequestBody';
import { CreatePermanentAccessKeyResponse } from './model/CreatePermanentAccessKeyResponse';
import { CreateTemporaryAccessKeyByAgencyRequest } from './model/CreateTemporaryAccessKeyByAgencyRequest';
import { CreateTemporaryAccessKeyByAgencyRequestBody } from './model/CreateTemporaryAccessKeyByAgencyRequestBody';
import { CreateTemporaryAccessKeyByAgencyResponse } from './model/CreateTemporaryAccessKeyByAgencyResponse';
import { CreateTemporaryAccessKeyByTokenRequest } from './model/CreateTemporaryAccessKeyByTokenRequest';
import { CreateTemporaryAccessKeyByTokenRequestBody } from './model/CreateTemporaryAccessKeyByTokenRequestBody';
import { CreateTemporaryAccessKeyByTokenResponse } from './model/CreateTemporaryAccessKeyByTokenResponse';
import { CreateTokenWithIdTokenRequest } from './model/CreateTokenWithIdTokenRequest';
import { CreateTokenWithIdTokenResponse } from './model/CreateTokenWithIdTokenResponse';
import { CreateUnscopedTokenWithIdTokenRequest } from './model/CreateUnscopedTokenWithIdTokenRequest';
import { CreateUnscopedTokenWithIdTokenResponse } from './model/CreateUnscopedTokenWithIdTokenResponse';
import { CreateUserOption } from './model/CreateUserOption';
import { CreateUserRequest } from './model/CreateUserRequest';
import { CreateUserRequestBody } from './model/CreateUserRequestBody';
import { CreateUserResponse } from './model/CreateUserResponse';
import { CreateUserResult } from './model/CreateUserResult';
import { Credential } from './model/Credential';
import { Credentials } from './model/Credentials';
import { DeleteAgencyRequest } from './model/DeleteAgencyRequest';
import { DeleteAgencyResponse } from './model/DeleteAgencyResponse';
import { DeleteBindingDeviceRequest } from './model/DeleteBindingDeviceRequest';
import { DeleteBindingDeviceResponse } from './model/DeleteBindingDeviceResponse';
import { DeleteCustomPolicyRequest } from './model/DeleteCustomPolicyRequest';
import { DeleteCustomPolicyResponse } from './model/DeleteCustomPolicyResponse';
import { DeleteDomainGroupInheritedRoleRequest } from './model/DeleteDomainGroupInheritedRoleRequest';
import { DeleteDomainGroupInheritedRoleResponse } from './model/DeleteDomainGroupInheritedRoleResponse';
import { DeleteMfaDeviceRequest } from './model/DeleteMfaDeviceRequest';
import { DeleteMfaDeviceResponse } from './model/DeleteMfaDeviceResponse';
import { DeletePermanentAccessKeyRequest } from './model/DeletePermanentAccessKeyRequest';
import { DeletePermanentAccessKeyResponse } from './model/DeletePermanentAccessKeyResponse';
import { DomainInfo } from './model/DomainInfo';
import { Domains } from './model/Domains';
import { Endpoint } from './model/Endpoint';
import { FederationUserBody } from './model/FederationUserBody';
import { GetIdTokenAuthParams } from './model/GetIdTokenAuthParams';
import { GetIdTokenIdScopeBody } from './model/GetIdTokenIdScopeBody';
import { GetIdTokenIdTokenBody } from './model/GetIdTokenIdTokenBody';
import { GetIdTokenRequestBody } from './model/GetIdTokenRequestBody';
import { GetIdTokenScopeDomainOrProjectBody } from './model/GetIdTokenScopeDomainOrProjectBody';
import { IdentityAssumerole } from './model/IdentityAssumerole';
import { IdentityToken } from './model/IdentityToken';
import { IdentityproviderOption } from './model/IdentityproviderOption';
import { IdentityprovidersLinks } from './model/IdentityprovidersLinks';
import { IdentityprovidersResult } from './model/IdentityprovidersResult';
import { IdpIdInfo } from './model/IdpIdInfo';
import { KeystoneAddUserToGroupRequest } from './model/KeystoneAddUserToGroupRequest';
import { KeystoneAddUserToGroupResponse } from './model/KeystoneAddUserToGroupResponse';
import { KeystoneAssociateGroupWithDomainPermissionRequest } from './model/KeystoneAssociateGroupWithDomainPermissionRequest';
import { KeystoneAssociateGroupWithDomainPermissionResponse } from './model/KeystoneAssociateGroupWithDomainPermissionResponse';
import { KeystoneAssociateGroupWithProjectPermissionRequest } from './model/KeystoneAssociateGroupWithProjectPermissionRequest';
import { KeystoneAssociateGroupWithProjectPermissionResponse } from './model/KeystoneAssociateGroupWithProjectPermissionResponse';
import { KeystoneCheckDomainPermissionForGroupRequest } from './model/KeystoneCheckDomainPermissionForGroupRequest';
import { KeystoneCheckDomainPermissionForGroupResponse } from './model/KeystoneCheckDomainPermissionForGroupResponse';
import { KeystoneCheckProjectPermissionForGroupRequest } from './model/KeystoneCheckProjectPermissionForGroupRequest';
import { KeystoneCheckProjectPermissionForGroupResponse } from './model/KeystoneCheckProjectPermissionForGroupResponse';
import { KeystoneCheckUserInGroupRequest } from './model/KeystoneCheckUserInGroupRequest';
import { KeystoneCheckUserInGroupResponse } from './model/KeystoneCheckUserInGroupResponse';
import { KeystoneCheckroleForGroupRequest } from './model/KeystoneCheckroleForGroupRequest';
import { KeystoneCheckroleForGroupResponse } from './model/KeystoneCheckroleForGroupResponse';
import { KeystoneCreateAgencyTokenRequest } from './model/KeystoneCreateAgencyTokenRequest';
import { KeystoneCreateAgencyTokenRequestBody } from './model/KeystoneCreateAgencyTokenRequestBody';
import { KeystoneCreateAgencyTokenResponse } from './model/KeystoneCreateAgencyTokenResponse';
import { KeystoneCreateGroupOption } from './model/KeystoneCreateGroupOption';
import { KeystoneCreateGroupRequest } from './model/KeystoneCreateGroupRequest';
import { KeystoneCreateGroupRequestBody } from './model/KeystoneCreateGroupRequestBody';
import { KeystoneCreateGroupResponse } from './model/KeystoneCreateGroupResponse';
import { KeystoneCreateIdentityProviderRequest } from './model/KeystoneCreateIdentityProviderRequest';
import { KeystoneCreateIdentityProviderRequestBody } from './model/KeystoneCreateIdentityProviderRequestBody';
import { KeystoneCreateIdentityProviderResponse } from './model/KeystoneCreateIdentityProviderResponse';
import { KeystoneCreateMappingRequest } from './model/KeystoneCreateMappingRequest';
import { KeystoneCreateMappingRequestBody } from './model/KeystoneCreateMappingRequestBody';
import { KeystoneCreateMappingResponse } from './model/KeystoneCreateMappingResponse';
import { KeystoneCreateProjectOption } from './model/KeystoneCreateProjectOption';
import { KeystoneCreateProjectRequest } from './model/KeystoneCreateProjectRequest';
import { KeystoneCreateProjectRequestBody } from './model/KeystoneCreateProjectRequestBody';
import { KeystoneCreateProjectResponse } from './model/KeystoneCreateProjectResponse';
import { KeystoneCreateProtocolRequest } from './model/KeystoneCreateProtocolRequest';
import { KeystoneCreateProtocolRequestBody } from './model/KeystoneCreateProtocolRequestBody';
import { KeystoneCreateProtocolResponse } from './model/KeystoneCreateProtocolResponse';
import { KeystoneCreateScopedTokenRequest } from './model/KeystoneCreateScopedTokenRequest';
import { KeystoneCreateScopedTokenRequestBody } from './model/KeystoneCreateScopedTokenRequestBody';
import { KeystoneCreateScopedTokenResponse } from './model/KeystoneCreateScopedTokenResponse';
import { KeystoneCreateUserOption } from './model/KeystoneCreateUserOption';
import { KeystoneCreateUserRequest } from './model/KeystoneCreateUserRequest';
import { KeystoneCreateUserRequestBody } from './model/KeystoneCreateUserRequestBody';
import { KeystoneCreateUserResponse } from './model/KeystoneCreateUserResponse';
import { KeystoneCreateUserResult } from './model/KeystoneCreateUserResult';
import { KeystoneCreateUserTokenByPasswordAndMfaRequest } from './model/KeystoneCreateUserTokenByPasswordAndMfaRequest';
import { KeystoneCreateUserTokenByPasswordAndMfaRequestBody } from './model/KeystoneCreateUserTokenByPasswordAndMfaRequestBody';
import { KeystoneCreateUserTokenByPasswordAndMfaResponse } from './model/KeystoneCreateUserTokenByPasswordAndMfaResponse';
import { KeystoneCreateUserTokenByPasswordRequest } from './model/KeystoneCreateUserTokenByPasswordRequest';
import { KeystoneCreateUserTokenByPasswordRequestBody } from './model/KeystoneCreateUserTokenByPasswordRequestBody';
import { KeystoneCreateUserTokenByPasswordResponse } from './model/KeystoneCreateUserTokenByPasswordResponse';
import { KeystoneDeleteGroupRequest } from './model/KeystoneDeleteGroupRequest';
import { KeystoneDeleteGroupResponse } from './model/KeystoneDeleteGroupResponse';
import { KeystoneDeleteIdentityProviderRequest } from './model/KeystoneDeleteIdentityProviderRequest';
import { KeystoneDeleteIdentityProviderResponse } from './model/KeystoneDeleteIdentityProviderResponse';
import { KeystoneDeleteMappingRequest } from './model/KeystoneDeleteMappingRequest';
import { KeystoneDeleteMappingResponse } from './model/KeystoneDeleteMappingResponse';
import { KeystoneDeleteProtocolRequest } from './model/KeystoneDeleteProtocolRequest';
import { KeystoneDeleteProtocolResponse } from './model/KeystoneDeleteProtocolResponse';
import { KeystoneDeleteUserRequest } from './model/KeystoneDeleteUserRequest';
import { KeystoneDeleteUserResponse } from './model/KeystoneDeleteUserResponse';
import { KeystoneGroupResult } from './model/KeystoneGroupResult';
import { KeystoneGroupResultWithLinksSelf } from './model/KeystoneGroupResultWithLinksSelf';
import { KeystoneListAllProjectPermissionsForGroupRequest } from './model/KeystoneListAllProjectPermissionsForGroupRequest';
import { KeystoneListAllProjectPermissionsForGroupResponse } from './model/KeystoneListAllProjectPermissionsForGroupResponse';
import { KeystoneListAuthDomainsRequest } from './model/KeystoneListAuthDomainsRequest';
import { KeystoneListAuthDomainsResponse } from './model/KeystoneListAuthDomainsResponse';
import { KeystoneListAuthProjectsRequest } from './model/KeystoneListAuthProjectsRequest';
import { KeystoneListAuthProjectsResponse } from './model/KeystoneListAuthProjectsResponse';
import { KeystoneListDomainPermissionsForGroupRequest } from './model/KeystoneListDomainPermissionsForGroupRequest';
import { KeystoneListDomainPermissionsForGroupResponse } from './model/KeystoneListDomainPermissionsForGroupResponse';
import { KeystoneListEndpointsRequest } from './model/KeystoneListEndpointsRequest';
import { KeystoneListEndpointsResponse } from './model/KeystoneListEndpointsResponse';
import { KeystoneListFederationDomainsRequest } from './model/KeystoneListFederationDomainsRequest';
import { KeystoneListFederationDomainsResponse } from './model/KeystoneListFederationDomainsResponse';
import { KeystoneListGroupsForUserRequest } from './model/KeystoneListGroupsForUserRequest';
import { KeystoneListGroupsForUserResponse } from './model/KeystoneListGroupsForUserResponse';
import { KeystoneListGroupsRequest } from './model/KeystoneListGroupsRequest';
import { KeystoneListGroupsResponse } from './model/KeystoneListGroupsResponse';
import { KeystoneListIdentityProvidersRequest } from './model/KeystoneListIdentityProvidersRequest';
import { KeystoneListIdentityProvidersResponse } from './model/KeystoneListIdentityProvidersResponse';
import { KeystoneListMappingsRequest } from './model/KeystoneListMappingsRequest';
import { KeystoneListMappingsResponse } from './model/KeystoneListMappingsResponse';
import { KeystoneListPermissionsRequest } from './model/KeystoneListPermissionsRequest';
import { KeystoneListPermissionsResponse } from './model/KeystoneListPermissionsResponse';
import { KeystoneListProjectPermissionsForGroupRequest } from './model/KeystoneListProjectPermissionsForGroupRequest';
import { KeystoneListProjectPermissionsForGroupResponse } from './model/KeystoneListProjectPermissionsForGroupResponse';
import { KeystoneListProjectsForUserRequest } from './model/KeystoneListProjectsForUserRequest';
import { KeystoneListProjectsForUserResponse } from './model/KeystoneListProjectsForUserResponse';
import { KeystoneListProjectsRequest } from './model/KeystoneListProjectsRequest';
import { KeystoneListProjectsResponse } from './model/KeystoneListProjectsResponse';
import { KeystoneListProtocolsRequest } from './model/KeystoneListProtocolsRequest';
import { KeystoneListProtocolsResponse } from './model/KeystoneListProtocolsResponse';
import { KeystoneListRegionsRequest } from './model/KeystoneListRegionsRequest';
import { KeystoneListRegionsResponse } from './model/KeystoneListRegionsResponse';
import { KeystoneListServicesRequest } from './model/KeystoneListServicesRequest';
import { KeystoneListServicesResponse } from './model/KeystoneListServicesResponse';
import { KeystoneListUsersForGroupByAdminRequest } from './model/KeystoneListUsersForGroupByAdminRequest';
import { KeystoneListUsersForGroupByAdminResponse } from './model/KeystoneListUsersForGroupByAdminResponse';
import { KeystoneListUsersRequest } from './model/KeystoneListUsersRequest';
import { KeystoneListUsersResponse } from './model/KeystoneListUsersResponse';
import { KeystoneListUsersResult } from './model/KeystoneListUsersResult';
import { KeystoneListVersionsRequest } from './model/KeystoneListVersionsRequest';
import { KeystoneListVersionsResponse } from './model/KeystoneListVersionsResponse';
import { KeystoneRemoveDomainPermissionFromGroupRequest } from './model/KeystoneRemoveDomainPermissionFromGroupRequest';
import { KeystoneRemoveDomainPermissionFromGroupResponse } from './model/KeystoneRemoveDomainPermissionFromGroupResponse';
import { KeystoneRemoveProjectPermissionFromGroupRequest } from './model/KeystoneRemoveProjectPermissionFromGroupRequest';
import { KeystoneRemoveProjectPermissionFromGroupResponse } from './model/KeystoneRemoveProjectPermissionFromGroupResponse';
import { KeystoneRemoveUserFromGroupRequest } from './model/KeystoneRemoveUserFromGroupRequest';
import { KeystoneRemoveUserFromGroupResponse } from './model/KeystoneRemoveUserFromGroupResponse';
import { KeystoneShowCatalogRequest } from './model/KeystoneShowCatalogRequest';
import { KeystoneShowCatalogResponse } from './model/KeystoneShowCatalogResponse';
import { KeystoneShowEndpointRequest } from './model/KeystoneShowEndpointRequest';
import { KeystoneShowEndpointResponse } from './model/KeystoneShowEndpointResponse';
import { KeystoneShowGroupRequest } from './model/KeystoneShowGroupRequest';
import { KeystoneShowGroupResponse } from './model/KeystoneShowGroupResponse';
import { KeystoneShowIdentityProviderRequest } from './model/KeystoneShowIdentityProviderRequest';
import { KeystoneShowIdentityProviderResponse } from './model/KeystoneShowIdentityProviderResponse';
import { KeystoneShowMappingRequest } from './model/KeystoneShowMappingRequest';
import { KeystoneShowMappingResponse } from './model/KeystoneShowMappingResponse';
import { KeystoneShowPermissionRequest } from './model/KeystoneShowPermissionRequest';
import { KeystoneShowPermissionResponse } from './model/KeystoneShowPermissionResponse';
import { KeystoneShowProjectRequest } from './model/KeystoneShowProjectRequest';
import { KeystoneShowProjectResponse } from './model/KeystoneShowProjectResponse';
import { KeystoneShowProtocolRequest } from './model/KeystoneShowProtocolRequest';
import { KeystoneShowProtocolResponse } from './model/KeystoneShowProtocolResponse';
import { KeystoneShowRegionRequest } from './model/KeystoneShowRegionRequest';
import { KeystoneShowRegionResponse } from './model/KeystoneShowRegionResponse';
import { KeystoneShowSecurityComplianceByOptionRequest } from './model/KeystoneShowSecurityComplianceByOptionRequest';
import { KeystoneShowSecurityComplianceByOptionResponse } from './model/KeystoneShowSecurityComplianceByOptionResponse';
import { KeystoneShowSecurityComplianceRequest } from './model/KeystoneShowSecurityComplianceRequest';
import { KeystoneShowSecurityComplianceResponse } from './model/KeystoneShowSecurityComplianceResponse';
import { KeystoneShowServiceRequest } from './model/KeystoneShowServiceRequest';
import { KeystoneShowServiceResponse } from './model/KeystoneShowServiceResponse';
import { KeystoneShowUserRequest } from './model/KeystoneShowUserRequest';
import { KeystoneShowUserResponse } from './model/KeystoneShowUserResponse';
import { KeystoneShowUserResult } from './model/KeystoneShowUserResult';
import { KeystoneShowVersionRequest } from './model/KeystoneShowVersionRequest';
import { KeystoneShowVersionResponse } from './model/KeystoneShowVersionResponse';
import { KeystoneUpdateGroupOption } from './model/KeystoneUpdateGroupOption';
import { KeystoneUpdateGroupRequest } from './model/KeystoneUpdateGroupRequest';
import { KeystoneUpdateGroupRequestBody } from './model/KeystoneUpdateGroupRequestBody';
import { KeystoneUpdateGroupResponse } from './model/KeystoneUpdateGroupResponse';
import { KeystoneUpdateIdentityProviderRequest } from './model/KeystoneUpdateIdentityProviderRequest';
import { KeystoneUpdateIdentityProviderRequestBody } from './model/KeystoneUpdateIdentityProviderRequestBody';
import { KeystoneUpdateIdentityProviderResponse } from './model/KeystoneUpdateIdentityProviderResponse';
import { KeystoneUpdateMappingRequest } from './model/KeystoneUpdateMappingRequest';
import { KeystoneUpdateMappingRequestBody } from './model/KeystoneUpdateMappingRequestBody';
import { KeystoneUpdateMappingResponse } from './model/KeystoneUpdateMappingResponse';
import { KeystoneUpdatePasswordOption } from './model/KeystoneUpdatePasswordOption';
import { KeystoneUpdateProjectOption } from './model/KeystoneUpdateProjectOption';
import { KeystoneUpdateProjectRequest } from './model/KeystoneUpdateProjectRequest';
import { KeystoneUpdateProjectRequestBody } from './model/KeystoneUpdateProjectRequestBody';
import { KeystoneUpdateProjectResponse } from './model/KeystoneUpdateProjectResponse';
import { KeystoneUpdateProjectResult } from './model/KeystoneUpdateProjectResult';
import { KeystoneUpdateProtocolRequest } from './model/KeystoneUpdateProtocolRequest';
import { KeystoneUpdateProtocolRequestBody } from './model/KeystoneUpdateProtocolRequestBody';
import { KeystoneUpdateProtocolResponse } from './model/KeystoneUpdateProtocolResponse';
import { KeystoneUpdateUserByAdminRequest } from './model/KeystoneUpdateUserByAdminRequest';
import { KeystoneUpdateUserByAdminRequestBody } from './model/KeystoneUpdateUserByAdminRequestBody';
import { KeystoneUpdateUserByAdminResponse } from './model/KeystoneUpdateUserByAdminResponse';
import { KeystoneUpdateUserByAdminResult } from './model/KeystoneUpdateUserByAdminResult';
import { KeystoneUpdateUserOption } from './model/KeystoneUpdateUserOption';
import { KeystoneUpdateUserPasswordRequest } from './model/KeystoneUpdateUserPasswordRequest';
import { KeystoneUpdateUserPasswordRequestBody } from './model/KeystoneUpdateUserPasswordRequestBody';
import { KeystoneUpdateUserPasswordResponse } from './model/KeystoneUpdateUserPasswordResponse';
import { KeystoneUserResult } from './model/KeystoneUserResult';
import { KeystoneUserResultExtra } from './model/KeystoneUserResultExtra';
import { KeystoneValidateTokenRequest } from './model/KeystoneValidateTokenRequest';
import { KeystoneValidateTokenResponse } from './model/KeystoneValidateTokenResponse';
import { Links } from './model/Links';
import { LinksSelf } from './model/LinksSelf';
import { ListAgenciesRequest } from './model/ListAgenciesRequest';
import { ListAgenciesResponse } from './model/ListAgenciesResponse';
import { ListAllProjectsPermissionsForAgencyRequest } from './model/ListAllProjectsPermissionsForAgencyRequest';
import { ListAllProjectsPermissionsForAgencyResponse } from './model/ListAllProjectsPermissionsForAgencyResponse';
import { ListCustomPoliciesRequest } from './model/ListCustomPoliciesRequest';
import { ListCustomPoliciesResponse } from './model/ListCustomPoliciesResponse';
import { ListDomainPermissionsForAgencyRequest } from './model/ListDomainPermissionsForAgencyRequest';
import { ListDomainPermissionsForAgencyResponse } from './model/ListDomainPermissionsForAgencyResponse';
import { ListEnterpriseProjectsForGroupRequest } from './model/ListEnterpriseProjectsForGroupRequest';
import { ListEnterpriseProjectsForGroupResponse } from './model/ListEnterpriseProjectsForGroupResponse';
import { ListEnterpriseProjectsForUserRequest } from './model/ListEnterpriseProjectsForUserRequest';
import { ListEnterpriseProjectsForUserResponse } from './model/ListEnterpriseProjectsForUserResponse';
import { ListEnterpriseProjectsResDetail } from './model/ListEnterpriseProjectsResDetail';
import { ListGroupsForEnterpriseProjectRequest } from './model/ListGroupsForEnterpriseProjectRequest';
import { ListGroupsForEnterpriseProjectResDetail } from './model/ListGroupsForEnterpriseProjectResDetail';
import { ListGroupsForEnterpriseProjectResponse } from './model/ListGroupsForEnterpriseProjectResponse';
import { ListPermanentAccessKeysRequest } from './model/ListPermanentAccessKeysRequest';
import { ListPermanentAccessKeysResponse } from './model/ListPermanentAccessKeysResponse';
import { ListProjectPermissionsForAgencyRequest } from './model/ListProjectPermissionsForAgencyRequest';
import { ListProjectPermissionsForAgencyResponse } from './model/ListProjectPermissionsForAgencyResponse';
import { ListRolesForGroupOnEnterpriseProjectRequest } from './model/ListRolesForGroupOnEnterpriseProjectRequest';
import { ListRolesForGroupOnEnterpriseProjectResponse } from './model/ListRolesForGroupOnEnterpriseProjectResponse';
import { ListRolesForUserOnEnterpriseProjectRequest } from './model/ListRolesForUserOnEnterpriseProjectRequest';
import { ListRolesForUserOnEnterpriseProjectResponse } from './model/ListRolesForUserOnEnterpriseProjectResponse';
import { ListUserLoginProtectsRequest } from './model/ListUserLoginProtectsRequest';
import { ListUserLoginProtectsResponse } from './model/ListUserLoginProtectsResponse';
import { ListUserMfaDevicesRequest } from './model/ListUserMfaDevicesRequest';
import { ListUserMfaDevicesResponse } from './model/ListUserMfaDevicesResponse';
import { ListUsersForEnterpriseProjectRequest } from './model/ListUsersForEnterpriseProjectRequest';
import { ListUsersForEnterpriseProjectResUsers } from './model/ListUsersForEnterpriseProjectResUsers';
import { ListUsersForEnterpriseProjectResponse } from './model/ListUsersForEnterpriseProjectResponse';
import { LoginPolicyOption } from './model/LoginPolicyOption';
import { LoginPolicyResult } from './model/LoginPolicyResult';
import { LoginProtectResult } from './model/LoginProtectResult';
import { LoginToken } from './model/LoginToken';
import { LoginTokenAssumedBy } from './model/LoginTokenAssumedBy';
import { LoginTokenAuth } from './model/LoginTokenAuth';
import { LoginTokenDomain } from './model/LoginTokenDomain';
import { LoginTokenSecurityToken } from './model/LoginTokenSecurityToken';
import { LoginTokenUser } from './model/LoginTokenUser';
import { MappingOption } from './model/MappingOption';
import { MappingResult } from './model/MappingResult';
import { MappingRules } from './model/MappingRules';
import { MfaAuth } from './model/MfaAuth';
import { MfaDeviceResult } from './model/MfaDeviceResult';
import { MfaIdentity } from './model/MfaIdentity';
import { MfaTotp } from './model/MfaTotp';
import { MfaTotpUser } from './model/MfaTotpUser';
import { OpenIdConnectConfig } from './model/OpenIdConnectConfig';
import { OsFederationInfo } from './model/OsFederationInfo';
import { OsfederationGroups } from './model/OsfederationGroups';
import { OsfederationIdentityprovider } from './model/OsfederationIdentityprovider';
import { OsfederationProtocol } from './model/OsfederationProtocol';
import { PasswordPolicyOption } from './model/PasswordPolicyOption';
import { PasswordPolicyResult } from './model/PasswordPolicyResult';
import { PolicyDepends } from './model/PolicyDepends';
import { PolicyRoleResult } from './model/PolicyRoleResult';
import { PolicyStatement } from './model/PolicyStatement';
import { ProjectDetailsAndStatusResult } from './model/ProjectDetailsAndStatusResult';
import { ProjectInfo } from './model/ProjectInfo';
import { ProjectResult } from './model/ProjectResult';
import { ProtectPolicyOption } from './model/ProtectPolicyOption';
import { ProtocolIdInfo } from './model/ProtocolIdInfo';
import { ProtocolLinks } from './model/ProtocolLinks';
import { ProtocolOption } from './model/ProtocolOption';
import { ProtocolResult } from './model/ProtocolResult';
import { PwdAuth } from './model/PwdAuth';
import { PwdIdentity } from './model/PwdIdentity';
import { PwdPassword } from './model/PwdPassword';
import { PwdPasswordUser } from './model/PwdPasswordUser';
import { PwdPasswordUserDomain } from './model/PwdPasswordUserDomain';
import { QuotaResult } from './model/QuotaResult';
import { Region } from './model/Region';
import { RegionLocales } from './model/RegionLocales';
import { RemoveAllProjectsPermissionFromAgencyRequest } from './model/RemoveAllProjectsPermissionFromAgencyRequest';
import { RemoveAllProjectsPermissionFromAgencyResponse } from './model/RemoveAllProjectsPermissionFromAgencyResponse';
import { RemoveDomainPermissionFromAgencyRequest } from './model/RemoveDomainPermissionFromAgencyRequest';
import { RemoveDomainPermissionFromAgencyResponse } from './model/RemoveDomainPermissionFromAgencyResponse';
import { RemoveProjectPermissionFromAgencyRequest } from './model/RemoveProjectPermissionFromAgencyRequest';
import { RemoveProjectPermissionFromAgencyResponse } from './model/RemoveProjectPermissionFromAgencyResponse';
import { Resources } from './model/Resources';
import { RevokeRoleFromGroupOnEnterpriseProjectRequest } from './model/RevokeRoleFromGroupOnEnterpriseProjectRequest';
import { RevokeRoleFromGroupOnEnterpriseProjectResponse } from './model/RevokeRoleFromGroupOnEnterpriseProjectResponse';
import { RevokeRoleFromUserOnEnterpriseProjectRequest } from './model/RevokeRoleFromUserOnEnterpriseProjectRequest';
import { RevokeRoleFromUserOnEnterpriseProjectResponse } from './model/RevokeRoleFromUserOnEnterpriseProjectResponse';
import { RoleAgencyAssignmentId } from './model/RoleAgencyAssignmentId';
import { RoleAssignmentBody } from './model/RoleAssignmentBody';
import { RoleAssignmentId } from './model/RoleAssignmentId';
import { RoleAssignmentScope } from './model/RoleAssignmentScope';
import { RoleDomainAssignmentId } from './model/RoleDomainAssignmentId';
import { RoleEnterpriseProjectAssignmentId } from './model/RoleEnterpriseProjectAssignmentId';
import { RoleGroupAssignmentId } from './model/RoleGroupAssignmentId';
import { RolePolicy } from './model/RolePolicy';
import { RoleProjectAssignmentId } from './model/RoleProjectAssignmentId';
import { RoleResult } from './model/RoleResult';
import { RoleUserAssignmentId } from './model/RoleUserAssignmentId';
import { RolesItem } from './model/RolesItem';
import { RulesLocal } from './model/RulesLocal';
import { RulesLocalGroup } from './model/RulesLocalGroup';
import { RulesLocalUser } from './model/RulesLocalUser';
import { RulesRemote } from './model/RulesRemote';
import { ScopeDomainOption } from './model/ScopeDomainOption';
import { ScopeProjectOption } from './model/ScopeProjectOption';
import { ScopeTokenResult } from './model/ScopeTokenResult';
import { ScopedToken } from './model/ScopedToken';
import { ScopedTokenAuth } from './model/ScopedTokenAuth';
import { ScopedTokenIdentity } from './model/ScopedTokenIdentity';
import { ScopedTokenInfo } from './model/ScopedTokenInfo';
import { ScopedTokenInfoRoles } from './model/ScopedTokenInfoRoles';
import { ScopedTokenUser } from './model/ScopedTokenUser';
import { SecurityCompliance } from './model/SecurityCompliance';
import { Service } from './model/Service';
import { ServicePolicy } from './model/ServicePolicy';
import { ServicePolicyRoleOption } from './model/ServicePolicyRoleOption';
import { ServicePolicyRoleResult } from './model/ServicePolicyRoleResult';
import { ServiceStatement } from './model/ServiceStatement';
import { ShowAgencyRequest } from './model/ShowAgencyRequest';
import { ShowAgencyResponse } from './model/ShowAgencyResponse';
import { ShowCredential } from './model/ShowCredential';
import { ShowCustomPolicyRequest } from './model/ShowCustomPolicyRequest';
import { ShowCustomPolicyResponse } from './model/ShowCustomPolicyResponse';
import { ShowDomainApiAclPolicyRequest } from './model/ShowDomainApiAclPolicyRequest';
import { ShowDomainApiAclPolicyResponse } from './model/ShowDomainApiAclPolicyResponse';
import { ShowDomainConsoleAclPolicyRequest } from './model/ShowDomainConsoleAclPolicyRequest';
import { ShowDomainConsoleAclPolicyResponse } from './model/ShowDomainConsoleAclPolicyResponse';
import { ShowDomainLoginPolicyRequest } from './model/ShowDomainLoginPolicyRequest';
import { ShowDomainLoginPolicyResponse } from './model/ShowDomainLoginPolicyResponse';
import { ShowDomainPasswordPolicyRequest } from './model/ShowDomainPasswordPolicyRequest';
import { ShowDomainPasswordPolicyResponse } from './model/ShowDomainPasswordPolicyResponse';
import { ShowDomainProtectPolicyRequest } from './model/ShowDomainProtectPolicyRequest';
import { ShowDomainProtectPolicyResponse } from './model/ShowDomainProtectPolicyResponse';
import { ShowDomainProtectPolicyResponseBodyProtectPolicy } from './model/ShowDomainProtectPolicyResponseBodyProtectPolicy';
import { ShowDomainQuotaRequest } from './model/ShowDomainQuotaRequest';
import { ShowDomainQuotaResponse } from './model/ShowDomainQuotaResponse';
import { ShowDomainRoleAssignmentsRequest } from './model/ShowDomainRoleAssignmentsRequest';
import { ShowDomainRoleAssignmentsResponse } from './model/ShowDomainRoleAssignmentsResponse';
import { ShowMetadataRequest } from './model/ShowMetadataRequest';
import { ShowMetadataResponse } from './model/ShowMetadataResponse';
import { ShowOpenIdConnectConfigRequest } from './model/ShowOpenIdConnectConfigRequest';
import { ShowOpenIdConnectConfigResponse } from './model/ShowOpenIdConnectConfigResponse';
import { ShowPermanentAccessKeyRequest } from './model/ShowPermanentAccessKeyRequest';
import { ShowPermanentAccessKeyResponse } from './model/ShowPermanentAccessKeyResponse';
import { ShowProjectDetailsAndStatusRequest } from './model/ShowProjectDetailsAndStatusRequest';
import { ShowProjectDetailsAndStatusResponse } from './model/ShowProjectDetailsAndStatusResponse';
import { ShowProjectQuotaRequest } from './model/ShowProjectQuotaRequest';
import { ShowProjectQuotaResponse } from './model/ShowProjectQuotaResponse';
import { ShowUserLoginProtectRequest } from './model/ShowUserLoginProtectRequest';
import { ShowUserLoginProtectResponse } from './model/ShowUserLoginProtectResponse';
import { ShowUserMfaDeviceRequest } from './model/ShowUserMfaDeviceRequest';
import { ShowUserMfaDeviceResponse } from './model/ShowUserMfaDeviceResponse';
import { ShowUserRequest } from './model/ShowUserRequest';
import { ShowUserResponse } from './model/ShowUserResponse';
import { ShowUserResult } from './model/ShowUserResult';
import { TokenAuth } from './model/TokenAuth';
import { TokenAuthIdentity } from './model/TokenAuthIdentity';
import { TokenCatalog } from './model/TokenCatalog';
import { TokenCatalogEndpoint } from './model/TokenCatalogEndpoint';
import { TokenDomainResult } from './model/TokenDomainResult';
import { TokenProjectDomainResult } from './model/TokenProjectDomainResult';
import { TokenProjectResult } from './model/TokenProjectResult';
import { TokenResult } from './model/TokenResult';
import { TokenRole } from './model/TokenRole';
import { TokenSocpeOption } from './model/TokenSocpeOption';
import { TokenUserDomainResult } from './model/TokenUserDomainResult';
import { TokenUserOsfederation } from './model/TokenUserOsfederation';
import { TokenUserResult } from './model/TokenUserResult';
import { UnbindMfaDevice } from './model/UnbindMfaDevice';
import { UnscopedTokenInfo } from './model/UnscopedTokenInfo';
import { UnscopedTokenInfoCatalog } from './model/UnscopedTokenInfoCatalog';
import { UnscopedTokenInfoRoles } from './model/UnscopedTokenInfoRoles';
import { UpdateAgencyCustomPolicyRequest } from './model/UpdateAgencyCustomPolicyRequest';
import { UpdateAgencyCustomPolicyRequestBody } from './model/UpdateAgencyCustomPolicyRequestBody';
import { UpdateAgencyCustomPolicyResponse } from './model/UpdateAgencyCustomPolicyResponse';
import { UpdateAgencyOption } from './model/UpdateAgencyOption';
import { UpdateAgencyRequest } from './model/UpdateAgencyRequest';
import { UpdateAgencyRequestBody } from './model/UpdateAgencyRequestBody';
import { UpdateAgencyResponse } from './model/UpdateAgencyResponse';
import { UpdateCloudServiceCustomPolicyRequest } from './model/UpdateCloudServiceCustomPolicyRequest';
import { UpdateCloudServiceCustomPolicyRequestBody } from './model/UpdateCloudServiceCustomPolicyRequestBody';
import { UpdateCloudServiceCustomPolicyResponse } from './model/UpdateCloudServiceCustomPolicyResponse';
import { UpdateCredentialOption } from './model/UpdateCredentialOption';
import { UpdateCredentialResult } from './model/UpdateCredentialResult';
import { UpdateDomainApiAclPolicyRequest } from './model/UpdateDomainApiAclPolicyRequest';
import { UpdateDomainApiAclPolicyRequestBody } from './model/UpdateDomainApiAclPolicyRequestBody';
import { UpdateDomainApiAclPolicyResponse } from './model/UpdateDomainApiAclPolicyResponse';
import { UpdateDomainConsoleAclPolicyRequest } from './model/UpdateDomainConsoleAclPolicyRequest';
import { UpdateDomainConsoleAclPolicyRequestBody } from './model/UpdateDomainConsoleAclPolicyRequestBody';
import { UpdateDomainConsoleAclPolicyResponse } from './model/UpdateDomainConsoleAclPolicyResponse';
import { UpdateDomainGroupInheritRoleRequest } from './model/UpdateDomainGroupInheritRoleRequest';
import { UpdateDomainGroupInheritRoleResponse } from './model/UpdateDomainGroupInheritRoleResponse';
import { UpdateDomainLoginPolicyRequest } from './model/UpdateDomainLoginPolicyRequest';
import { UpdateDomainLoginPolicyRequestBody } from './model/UpdateDomainLoginPolicyRequestBody';
import { UpdateDomainLoginPolicyResponse } from './model/UpdateDomainLoginPolicyResponse';
import { UpdateDomainPasswordPolicyRequest } from './model/UpdateDomainPasswordPolicyRequest';
import { UpdateDomainPasswordPolicyRequestBody } from './model/UpdateDomainPasswordPolicyRequestBody';
import { UpdateDomainPasswordPolicyResponse } from './model/UpdateDomainPasswordPolicyResponse';
import { UpdateDomainProtectPolicyRequest } from './model/UpdateDomainProtectPolicyRequest';
import { UpdateDomainProtectPolicyRequestBody } from './model/UpdateDomainProtectPolicyRequestBody';
import { UpdateDomainProtectPolicyResponse } from './model/UpdateDomainProtectPolicyResponse';
import { UpdateDomainProtectPolicyResponseBodyProtectPolicy } from './model/UpdateDomainProtectPolicyResponseBodyProtectPolicy';
import { UpdateIdentityproviderOption } from './model/UpdateIdentityproviderOption';
import { UpdateLoginProject } from './model/UpdateLoginProject';
import { UpdateLoginProjectReq } from './model/UpdateLoginProjectReq';
import { UpdateLoginProtectRequest } from './model/UpdateLoginProtectRequest';
import { UpdateLoginProtectRespon } from './model/UpdateLoginProtectRespon';
import { UpdateLoginProtectResponse } from './model/UpdateLoginProtectResponse';
import { UpdateOpenIdConnectConfig } from './model/UpdateOpenIdConnectConfig';
import { UpdateOpenIdConnectConfigRequest } from './model/UpdateOpenIdConnectConfigRequest';
import { UpdateOpenIdConnectConfigRequestBody } from './model/UpdateOpenIdConnectConfigRequestBody';
import { UpdateOpenIdConnectConfigResponse } from './model/UpdateOpenIdConnectConfigResponse';
import { UpdatePermanentAccessKeyRequest } from './model/UpdatePermanentAccessKeyRequest';
import { UpdatePermanentAccessKeyRequestBody } from './model/UpdatePermanentAccessKeyRequestBody';
import { UpdatePermanentAccessKeyResponse } from './model/UpdatePermanentAccessKeyResponse';
import { UpdateProjectOption } from './model/UpdateProjectOption';
import { UpdateProjectStatusRequest } from './model/UpdateProjectStatusRequest';
import { UpdateProjectStatusRequestBody } from './model/UpdateProjectStatusRequestBody';
import { UpdateProjectStatusResponse } from './model/UpdateProjectStatusResponse';
import { UpdateUserInformationOption } from './model/UpdateUserInformationOption';
import { UpdateUserInformationRequest } from './model/UpdateUserInformationRequest';
import { UpdateUserInformationRequestBody } from './model/UpdateUserInformationRequestBody';
import { UpdateUserInformationResponse } from './model/UpdateUserInformationResponse';
import { UpdateUserOption } from './model/UpdateUserOption';
import { UpdateUserRequest } from './model/UpdateUserRequest';
import { UpdateUserRequestBody } from './model/UpdateUserRequestBody';
import { UpdateUserResponse } from './model/UpdateUserResponse';
import { UpdateUserResult } from './model/UpdateUserResult';
import { Version } from './model/Version';
import { VersionLinks } from './model/VersionLinks';
import { VersionMediatypes } from './model/VersionMediatypes';
import { Versions } from './model/Versions';

export class IamClient {
    public static newBuilder(): ClientBuilder<IamClient> {
            return new ClientBuilder<IamClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)为委托授予所有项目服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为委托授予所有项目服务权限
     * @param {string} agencyId 委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} domainId 账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateAgencyWithAllProjectsPermission(associateAgencyWithAllProjectsPermissionRequest?: AssociateAgencyWithAllProjectsPermissionRequest): Promise<AssociateAgencyWithAllProjectsPermissionResponse> {
        const options = ParamCreater().associateAgencyWithAllProjectsPermission(associateAgencyWithAllProjectsPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)为委托授予全局服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为委托授予全局服务权限
     * @param {string} domainId 委托方账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} agencyId 委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateAgencyWithDomainPermission(associateAgencyWithDomainPermissionRequest?: AssociateAgencyWithDomainPermissionRequest): Promise<AssociateAgencyWithDomainPermissionResponse> {
        const options = ParamCreater().associateAgencyWithDomainPermission(associateAgencyWithDomainPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)为委托授予项目服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为委托授予项目服务权限
     * @param {string} agencyId 委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateAgencyWithProjectPermission(associateAgencyWithProjectPermissionRequest?: AssociateAgencyWithProjectPermissionRequest): Promise<AssociateAgencyWithProjectPermissionResponse> {
        const options = ParamCreater().associateAgencyWithProjectPermission(associateAgencyWithProjectPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于基于用户组为企业项目授权。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 基于用户组为企业项目授权
     * @param {string} enterpriseProjectId 企业项目ID。
     * @param {string} groupId 用户组ID。
     * @param {string} roleId 权限ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateRoleToGroupOnEnterpriseProject(associateRoleToGroupOnEnterpriseProjectRequest?: AssociateRoleToGroupOnEnterpriseProjectRequest): Promise<AssociateRoleToGroupOnEnterpriseProjectResponse> {
        const options = ParamCreater().associateRoleToGroupOnEnterpriseProject(associateRoleToGroupOnEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 基于用户为企业项目授权。
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 基于用户为企业项目授权
     * @param {string} enterpriseProjectId 企业项目ID。
     * @param {string} userId 用户ID。
     * @param {string} roleId 权限ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateRoleToUserOnEnterpriseProject(associateRoleToUserOnEnterpriseProjectRequest?: AssociateRoleToUserOnEnterpriseProjectRequest): Promise<AssociateRoleToUserOnEnterpriseProjectResponse> {
        const options = ParamCreater().associateRoleToUserOnEnterpriseProject(associateRoleToUserOnEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)检查委托是否具有所有项目服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查委托下是否具有所有项目服务权限
     * @param {string} agencyId 委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} domainId 账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkAllProjectsPermissionForAgency(checkAllProjectsPermissionForAgencyRequest?: CheckAllProjectsPermissionForAgencyRequest): Promise<CheckAllProjectsPermissionForAgencyResponse> {
        const options = ParamCreater().checkAllProjectsPermissionForAgency(checkAllProjectsPermissionForAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询委托是否拥有全局服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询委托是否拥有全局服务权限
     * @param {string} domainId 委托方账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} agencyId 委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkDomainPermissionForAgency(checkDomainPermissionForAgencyRequest?: CheckDomainPermissionForAgencyRequest): Promise<CheckDomainPermissionForAgencyResponse> {
        const options = ParamCreater().checkDomainPermissionForAgency(checkDomainPermissionForAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询委托是否拥有项目服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询委托是否拥有项目服务权限
     * @param {string} agencyId 委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkProjectPermissionForAgency(checkProjectPermissionForAgencyRequest?: CheckProjectPermissionForAgencyRequest): Promise<CheckProjectPermissionForAgencyResponse> {
        const options = ParamCreater().checkProjectPermissionForAgency(checkProjectPermissionForAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)创建委托。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建委托
     * @param {CreateAgencyRequestBody} createAgencyRequestBody 请求体。
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
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)创建委托自定义策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建委托自定义策略
     * @param {CreateAgencyCustomPolicyRequestBody} createAgencyCustomPolicyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAgencyCustomPolicy(createAgencyCustomPolicyRequest?: CreateAgencyCustomPolicyRequest): Promise<CreateAgencyCustomPolicyResponse> {
        const options = ParamCreater().createAgencyCustomPolicy(createAgencyCustomPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)创建云服务自定义策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建云服务自定义策略
     * @param {CreateCloudServiceCustomPolicyRequestBody} createCloudServiceCustomPolicyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCloudServiceCustomPolicy(createCloudServiceCustomPolicyRequest?: CreateCloudServiceCustomPolicyRequest): Promise<CreateCloudServiceCustomPolicyResponse> {
        const options = ParamCreater().createCloudServiceCustomPolicy(createCloudServiceCustomPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用于获取自定义代理登录票据logintoken。logintoken是系统颁发给自定义代理用户的登录票据，承载用户的身份、session等信息。调用自定义代理URL登录云服务控制台时，可以使用本接口获取的logintoken进行认证。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * &gt; - logintoken的有效期为10分钟。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取自定义代理登录票据
     * @param {CreateLoginTokenRequestBody} createLoginTokenRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLoginToken(createLoginTokenRequest?: CreateLoginTokenRequest): Promise<CreateLoginTokenResponse> {
        const options = ParamCreater().createLoginToken(createLoginTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Subject-LoginToken'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)导入Metadata文件。
     * 
     * 账号在使用联邦认证功能前，需要先将Metadata文件导入到IAM中。Metadata文件是SAML 2.0协议约定的接口文件，包含访问接口地址和证书信息，请找企业管理员获取企业IdP的Metadata文件。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入Metadata文件
     * @param {string} idpId 身份提供商ID。
     * @param {string} protocolId 协议ID。
     * @param {CreateMetadataRequestBody} createMetadataRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMetadata(createMetadataRequest?: CreateMetadataRequest): Promise<CreateMetadataResponse> {
        const options = ParamCreater().createMetadata(createMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建OpenId Connect身份提供商配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建OpenId Connect身份提供商配置
     * @param {string} idpId 身份提供商ID
     * @param {CreateOpenIdConnectConfigRequestBody} createOpenIdConnectConfigRequestBody 创建身份提供商的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOpenIdConnectConfig(createOpenIdConnectConfigRequest?: CreateOpenIdConnectConfigRequest): Promise<CreateOpenIdConnectConfigResponse> {
        const options = ParamCreater().createOpenIdConnectConfig(createOpenIdConnectConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取联邦认证token(OpenId Connect Id token方式)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取联邦认证token(OpenId Connect Id token方式)
     * @param {string} xIdpId 身份提供商ID。
     * @param {GetIdTokenRequestBody} body 获取iam token必要的请求体auth参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTokenWithIdToken(createTokenWithIdTokenRequest?: CreateTokenWithIdTokenRequest): Promise<CreateTokenWithIdTokenResponse> {
        const options = ParamCreater().createTokenWithIdToken(createTokenWithIdTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Subject-Token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取联邦认证token(OpenId Connect Id token方式)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取联邦认证unscoped token(OpenId Connect Id token方式)
     * @param {string} idpId 身份提供商id。
     * @param {string} protocolId 协议id。
     * @param {string} authorization OpenID Connect身份提供商的ID Token，格式为Bearer {ID Token}。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUnscopedTokenWithIdToken(createUnscopedTokenWithIdTokenRequest?: CreateUnscopedTokenWithIdTokenRequest): Promise<CreateUnscopedTokenWithIdTokenResponse> {
        const options = ParamCreater().createUnscopedTokenWithIdToken(createUnscopedTokenWithIdTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Subject-Token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除委托。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除委托
     * @param {string} agencyId 待删除的委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAgency(deleteAgencyRequest?: DeleteAgencyRequest): Promise<DeleteAgencyResponse> {
        const options = ParamCreater().deleteAgency(deleteAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除自定义策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义策略
     * @param {string} roleId 待删除的自定义策略ID，获取方式请参见：[自定义策略ID](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;IAM&amp;api&#x3D;ListCustomPolicies)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCustomPolicy(deleteCustomPolicyRequest?: DeleteCustomPolicyRequest): Promise<DeleteCustomPolicyResponse> {
        const options = ParamCreater().deleteCustomPolicy(deleteCustomPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于移除用户组的所有项目服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除用户组的所有项目服务权限
     * @param {string} domainId 用户组所属账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDomainGroupInheritedRole(deleteDomainGroupInheritedRoleRequest?: DeleteDomainGroupInheritedRoleRequest): Promise<DeleteDomainGroupInheritedRoleResponse> {
        const options = ParamCreater().deleteDomainGroupInheritedRole(deleteDomainGroupInheritedRoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)添加IAM用户到用户组。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加IAM用户到用户组
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} userId 待添加的IAM用户ID，获取方式请参见：[获取IAM用户ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneAddUserToGroup(keystoneAddUserToGroupRequest?: KeystoneAddUserToGroupRequest): Promise<KeystoneAddUserToGroupResponse> {
        const options = ParamCreater().keystoneAddUserToGroup(keystoneAddUserToGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)为用户组授予全局服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为用户组授予全局服务权限
     * @param {string} domainId 用户组所属账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneAssociateGroupWithDomainPermission(keystoneAssociateGroupWithDomainPermissionRequest?: KeystoneAssociateGroupWithDomainPermissionRequest): Promise<KeystoneAssociateGroupWithDomainPermissionResponse> {
        const options = ParamCreater().keystoneAssociateGroupWithDomainPermission(keystoneAssociateGroupWithDomainPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)为用户组授予项目服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为用户组授予项目服务权限
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneAssociateGroupWithProjectPermission(keystoneAssociateGroupWithProjectPermissionRequest?: KeystoneAssociateGroupWithProjectPermissionRequest): Promise<KeystoneAssociateGroupWithProjectPermissionResponse> {
        const options = ParamCreater().keystoneAssociateGroupWithProjectPermission(keystoneAssociateGroupWithProjectPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询用户组是否拥有全局服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组是否拥有全局服务权限
     * @param {string} domainId 用户组所属账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneCheckDomainPermissionForGroup(keystoneCheckDomainPermissionForGroupRequest?: KeystoneCheckDomainPermissionForGroupRequest): Promise<KeystoneCheckDomainPermissionForGroupResponse> {
        const options = ParamCreater().keystoneCheckDomainPermissionForGroup(keystoneCheckDomainPermissionForGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询用户组是否拥有项目服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组是否拥有项目服务权限
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneCheckProjectPermissionForGroup(keystoneCheckProjectPermissionForGroupRequest?: KeystoneCheckProjectPermissionForGroupRequest): Promise<KeystoneCheckProjectPermissionForGroupResponse> {
        const options = ParamCreater().keystoneCheckProjectPermissionForGroup(keystoneCheckProjectPermissionForGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户是否在用户组中。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IAM用户是否在用户组中
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} userId 待查询的IAM用户ID，获取方式请参见：[获取IAM用户ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneCheckUserInGroup(keystoneCheckUserInGroupRequest?: KeystoneCheckUserInGroupRequest): Promise<KeystoneCheckUserInGroupResponse> {
        const options = ParamCreater().keystoneCheckUserInGroup(keystoneCheckUserInGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询用户组是否拥有所有项目指定权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组是否拥有所有项目指定权限
     * @param {string} domainId 用户组所属账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneCheckroleForGroup(keystoneCheckroleForGroupRequest?: KeystoneCheckroleForGroupRequest): Promise<KeystoneCheckroleForGroupResponse> {
        const options = ParamCreater().keystoneCheckroleForGroup(keystoneCheckroleForGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)创建用户组。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建用户组
     * @param {KeystoneCreateGroupRequestBody} keystoneCreateGroupRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneCreateGroup(keystoneCreateGroupRequest?: KeystoneCreateGroupRequest): Promise<KeystoneCreateGroupResponse> {
        const options = ParamCreater().keystoneCreateGroup(keystoneCreateGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)注册身份提供商。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册身份提供商
     * @param {string} contentType 该字段内容填为“application/json;charset&#x3D;utf8”。
     * @param {string} id 待注册的身份提供商ID。
     * @param {KeystoneCreateIdentityProviderRequestBody} keystoneCreateIdentityProviderRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneCreateIdentityProvider(keystoneCreateIdentityProviderRequest?: KeystoneCreateIdentityProviderRequest): Promise<KeystoneCreateIdentityProviderResponse> {
        const options = ParamCreater().keystoneCreateIdentityProvider(keystoneCreateIdentityProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)注册映射。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册映射
     * @param {string} id 待注册的映射ID。
     * @param {KeystoneCreateMappingRequestBody} keystoneCreateMappingRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneCreateMapping(keystoneCreateMappingRequest?: KeystoneCreateMappingRequest): Promise<KeystoneCreateMappingResponse> {
        const options = ParamCreater().keystoneCreateMapping(keystoneCreateMappingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)创建项目。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建项目
     * @param {KeystoneCreateProjectRequestBody} keystoneCreateProjectRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneCreateProject(keystoneCreateProjectRequest?: KeystoneCreateProjectRequest): Promise<KeystoneCreateProjectResponse> {
        const options = ParamCreater().keystoneCreateProject(keystoneCreateProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)注册协议（将协议关联到某一身份提供商）。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册协议
     * @param {string} idpId 身份提供商ID。
     * @param {string} protocolId 待注册的协议ID。
     * @param {KeystoneCreateProtocolRequestBody} keystoneCreateProtocolRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneCreateProtocol(keystoneCreateProtocolRequest?: KeystoneCreateProtocolRequest): Promise<KeystoneCreateProtocolResponse> {
        const options = ParamCreater().keystoneCreateProtocol(keystoneCreateProtocolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于通过联邦认证方式获取scoped token。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取联邦认证scoped token
     * @param {KeystoneCreateScopedTokenRequestBody} keystoneCreateScopedTokenRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneCreateScopedToken(keystoneCreateScopedTokenRequest?: KeystoneCreateScopedTokenRequest): Promise<KeystoneCreateScopedTokenResponse> {
        const options = ParamCreater().keystoneCreateScopedToken(keystoneCreateScopedTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Subject-Token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除用户组。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户组
     * @param {string} groupId 待删除的用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneDeleteGroup(keystoneDeleteGroupRequest?: KeystoneDeleteGroupRequest): Promise<KeystoneDeleteGroupResponse> {
        const options = ParamCreater().keystoneDeleteGroup(keystoneDeleteGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html) 删除身份提供商。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除身份提供商
     * @param {string} id 待删除的身份提供商ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneDeleteIdentityProvider(keystoneDeleteIdentityProviderRequest?: KeystoneDeleteIdentityProviderRequest): Promise<KeystoneDeleteIdentityProviderResponse> {
        const options = ParamCreater().keystoneDeleteIdentityProvider(keystoneDeleteIdentityProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除映射。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除映射
     * @param {string} id 待删除的映射ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneDeleteMapping(keystoneDeleteMappingRequest?: KeystoneDeleteMappingRequest): Promise<KeystoneDeleteMappingResponse> {
        const options = ParamCreater().keystoneDeleteMapping(keystoneDeleteMappingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除协议。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除协议
     * @param {string} idpId 身份提供商ID。
     * @param {string} protocolId 待删除的协议ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneDeleteProtocol(keystoneDeleteProtocolRequest?: KeystoneDeleteProtocolRequest): Promise<KeystoneDeleteProtocolResponse> {
        const options = ParamCreater().keystoneDeleteProtocol(keystoneDeleteProtocolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于管理员查询用户组所有项目服务权限列表。 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组的所有项目权限列表
     * @param {string} domainId 租户ID，获取方式请参见：[获取项目名称、项目ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListAllProjectPermissionsForGroup(keystoneListAllProjectPermissionsForGroupRequest?: KeystoneListAllProjectPermissionsForGroupRequest): Promise<KeystoneListAllProjectPermissionsForGroupResponse> {
        const options = ParamCreater().keystoneListAllProjectPermissionsForGroup(keystoneListAllProjectPermissionsForGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询IAM用户可以用访问的账号详情。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IAM用户可以访问的账号详情
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListAuthDomains(): Promise<KeystoneListAuthDomainsResponse> {
        const options = ParamCreater().keystoneListAuthDomains();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询IAM用户可以访问的项目列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IAM用户可以访问的项目列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListAuthProjects(): Promise<KeystoneListAuthProjectsResponse> {
        const options = ParamCreater().keystoneListAuthProjects();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询全局服务中的用户组权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全局服务中的用户组权限
     * @param {string} domainId 用户组所属账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListDomainPermissionsForGroup(keystoneListDomainPermissionsForGroupRequest?: KeystoneListDomainPermissionsForGroupRequest): Promise<KeystoneListDomainPermissionsForGroupResponse> {
        const options = ParamCreater().keystoneListDomainPermissionsForGroup(keystoneListDomainPermissionsForGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询终端节点列表。终端节点用来提供服务访问入口。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点列表
     * @param {'public' | 'internal' | 'admin'} [_interface] 终端节点平面。可能取值为：public、internal或admin。public： 用户可在公共网络接口上看到。internal：用户可在内部网络接口上看到。admin：管理员可以在安全的网络接口上看到。
     * @param {string} [serviceId] 服务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListEndpoints(keystoneListEndpointsRequest?: KeystoneListEndpointsRequest): Promise<KeystoneListEndpointsResponse> {
        const options = ParamCreater().keystoneListEndpoints(keystoneListEndpointsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询联邦用户可以访问的账号列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * &gt; - 推荐使用[查询IAM用户可以访问的账号详情](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;IAM&amp;api&#x3D;KeystoneQueryAccessibleDomainDetailsToUser)，该接口可以返回相同的响应格式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询联邦用户可以访问的账号列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListFederationDomains(): Promise<KeystoneListFederationDomainsResponse> {
        const options = ParamCreater().keystoneListFederationDomains();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询用户组列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组列表
     * @param {string} [domainId] 用户组所属账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} [name] 用户组名，长度小于等于128字符，获取方式请参见：[获取用户组名](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListGroups(keystoneListGroupsRequest?: KeystoneListGroupsRequest): Promise<KeystoneListGroupsResponse> {
        const options = ParamCreater().keystoneListGroups(keystoneListGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询身份提供商列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询身份提供商列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListIdentityProviders(): Promise<KeystoneListIdentityProvidersResponse> {
        const options = ParamCreater().keystoneListIdentityProviders();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询映射列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询映射列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListMappings(): Promise<KeystoneListMappingsResponse> {
        const options = ParamCreater().keystoneListMappings();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询权限列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询权限列表
     * @param {string} [name] 系统内部呈现的权限名称。如云目录服务CCS普通用户权限CCS User的name为ccs_user。 建议您传参display_name，不传name参数。
     * @param {string} [domainId] 账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。 &gt; - 如果填写此参数，则返回账号下所有自定义策略。 &gt; - 如果不填写此参数，则返回所有系统权限（包含系统策略和系统角色）。
     * @param {number} [page] 分页查询时数据的页数，查询值最小为1。需要与per_page同时存在。传入domain_id参数查询自定义策略时，可配套使用。
     * @param {number} [perPage] 分页查询时每页的数据个数，取值范围为[1,300]，默认值为300。需要与page同时存在。不传page和per_page参数时，每页最多返回300个权限。
     * @param {string} [permissionType] 区分系统权限类型的参数。当domain_id参数为空时生效。 &gt; - policy：返回系统策略。 &gt; - role：返回系统角色。
     * @param {string} [displayName] 过滤权限名称。如传参为Administrator，则返回满足条件的所有管理员权限。
     * @param {string} [type] 过滤权限的显示模式。取值范围：domain,project,all。type为domain时，返回type&#x3D;AA或AX的权限；type为project时，返回type&#x3D;AA或XA的权限；type为all时返回type为AA、AX、XA的权限。 &gt; - AX表示在domain层显示。 &gt; - XA表示在project层显示。 &gt; - AA表示在domain和project层均显示。 &gt; - XX表示在domain和project层均不显示。
     * @param {string} [catalog] 权限所在目录。catalog值精确匹配策略的catalog字段(可以过滤服务的策略、或者自定义策略)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListPermissions(keystoneListPermissionsRequest?: KeystoneListPermissionsRequest): Promise<KeystoneListPermissionsResponse> {
        const options = ParamCreater().keystoneListPermissions(keystoneListPermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询项目服务中的用户组权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目服务中的用户组权限
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListProjectPermissionsForGroup(keystoneListProjectPermissionsForGroupRequest?: KeystoneListProjectPermissionsForGroupRequest): Promise<KeystoneListProjectPermissionsForGroupResponse> {
        const options = ParamCreater().keystoneListProjectPermissionsForGroup(keystoneListProjectPermissionsForGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询指定条件下的项目列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定条件下的项目列表
     * @param {string} [domainId] 项目所属账号ID，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} [name] 项目名称，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} [parentId] 如果查询自己创建的项目，则此处应填为所属区域的项目ID。  如果查询的是系统内置项目，如cn-north-4，则此处应填为账号ID。  获取项目ID和账号ID，请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {boolean} [enabled] 项目是否启用。
     * @param {boolean} [isDomain] 该字段无需填写。
     * @param {number} [page] 分页查询时数据的页数，查询值最小为1。需要与per_page同时存在。
     * @param {number} [perPage] 分页查询时每页的数据个数，取值范围为[1,5000]。需要与page同时存在。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListProjects(keystoneListProjectsRequest?: KeystoneListProjectsRequest): Promise<KeystoneListProjectsResponse> {
        const options = ParamCreater().keystoneListProjects(keystoneListProjectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询指定IAM用户的项目列表，或IAM用户查询自己的项目列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定IAM用户的项目列表
     * @param {string} userId 待查询的IAM用户ID，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListProjectsForUser(keystoneListProjectsForUserRequest?: KeystoneListProjectsForUserRequest): Promise<KeystoneListProjectsForUserResponse> {
        const options = ParamCreater().keystoneListProjectsForUser(keystoneListProjectsForUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询协议列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询协议列表
     * @param {string} idpId 身份提供商ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListProtocols(keystoneListProtocolsRequest?: KeystoneListProtocolsRequest): Promise<KeystoneListProtocolsResponse> {
        const options = ParamCreater().keystoneListProtocols(keystoneListProtocolsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询区域列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询区域列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListRegions(): Promise<KeystoneListRegionsResponse> {
        const options = ParamCreater().keystoneListRegions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询服务列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务列表
     * @param {string} [type] 服务类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListServices(keystoneListServicesRequest?: KeystoneListServicesRequest): Promise<KeystoneListServicesResponse> {
        const options = ParamCreater().keystoneListServices(keystoneListServicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询用户组中所包含的IAM用户。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 管理员查询用户组所包含的IAM用户
     * @param {string} groupId 待查询的用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListUsersForGroupByAdmin(keystoneListUsersForGroupByAdminRequest?: KeystoneListUsersForGroupByAdminRequest): Promise<KeystoneListUsersForGroupByAdminResponse> {
        const options = ParamCreater().keystoneListUsersForGroupByAdmin(keystoneListUsersForGroupByAdminRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询Keystone API的版本信息。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询版本信息列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListVersions(): Promise<KeystoneListVersionsResponse> {
        const options = ParamCreater().keystoneListVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)移除用户组的全局服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除用户组的全局服务权限
     * @param {string} domainId 用户组所属账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneRemoveDomainPermissionFromGroup(keystoneRemoveDomainPermissionFromGroupRequest?: KeystoneRemoveDomainPermissionFromGroupRequest): Promise<KeystoneRemoveDomainPermissionFromGroupResponse> {
        const options = ParamCreater().keystoneRemoveDomainPermissionFromGroup(keystoneRemoveDomainPermissionFromGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)移除用户组的项目服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除用户组的项目服务权限
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneRemoveProjectPermissionFromGroup(keystoneRemoveProjectPermissionFromGroupRequest?: KeystoneRemoveProjectPermissionFromGroupRequest): Promise<KeystoneRemoveProjectPermissionFromGroupResponse> {
        const options = ParamCreater().keystoneRemoveProjectPermissionFromGroup(keystoneRemoveProjectPermissionFromGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)移除用户组中的IAM用户。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除用户组中的IAM用户
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} userId 待从用户组中移除的IAM用户ID，获取方式请参见：[获取IAM用户ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneRemoveUserFromGroup(keystoneRemoveUserFromGroupRequest?: KeystoneRemoveUserFromGroupRequest): Promise<KeystoneRemoveUserFromGroupResponse> {
        const options = ParamCreater().keystoneRemoveUserFromGroup(keystoneRemoveUserFromGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询请求头中X-Auth-Token对应的服务目录。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务目录
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneShowCatalog(): Promise<KeystoneShowCatalogResponse> {
        const options = ParamCreater().keystoneShowCatalog();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询终端节点详情。终端节点用来提供服务访问入口。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点详情
     * @param {string} endpointId 待查询的终端节点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneShowEndpoint(keystoneShowEndpointRequest?: KeystoneShowEndpointRequest): Promise<KeystoneShowEndpointResponse> {
        const options = ParamCreater().keystoneShowEndpoint(keystoneShowEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询用户组详情。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组详情
     * @param {string} groupId 待查询的用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneShowGroup(keystoneShowGroupRequest?: KeystoneShowGroupRequest): Promise<KeystoneShowGroupResponse> {
        const options = ParamCreater().keystoneShowGroup(keystoneShowGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询身份提供商详情。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询身份提供商详情
     * @param {string} id 待查询的身份提供商ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneShowIdentityProvider(keystoneShowIdentityProviderRequest?: KeystoneShowIdentityProviderRequest): Promise<KeystoneShowIdentityProviderResponse> {
        const options = ParamCreater().keystoneShowIdentityProvider(keystoneShowIdentityProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询映射详情。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询映射详情
     * @param {string} id 待查询的映射ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneShowMapping(keystoneShowMappingRequest?: KeystoneShowMappingRequest): Promise<KeystoneShowMappingResponse> {
        const options = ParamCreater().keystoneShowMapping(keystoneShowMappingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询权限详情。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询权限详情
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneShowPermission(keystoneShowPermissionRequest?: KeystoneShowPermissionRequest): Promise<KeystoneShowPermissionResponse> {
        const options = ParamCreater().keystoneShowPermission(keystoneShowPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询项目详情。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目详情
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneShowProject(): Promise<KeystoneShowProjectResponse> {
        const options = ParamCreater().keystoneShowProject();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询协议详情。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询协议详情
     * @param {string} idpId 身份提供商ID。
     * @param {string} protocolId 待查询的协议ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneShowProtocol(keystoneShowProtocolRequest?: KeystoneShowProtocolRequest): Promise<KeystoneShowProtocolResponse> {
        const options = ParamCreater().keystoneShowProtocol(keystoneShowProtocolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询区域详情。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询区域详情
     * @param {string} regionId 待查询的区域ID。可以使用[查询区域列表](https://support.huaweicloud.com/api-iam/iam_05_0001.html)接口获取，控制台获取方法请参见：[获取区域ID](https://console.huaweicloud.com/iam/?agencyId&#x3D;d15f57bd355d4514bd9618bd648dd432®ion&#x3D;cn-east-2&amp;locale&#x3D;zh-cn#/iam/projects)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneShowRegion(keystoneShowRegionRequest?: KeystoneShowRegionRequest): Promise<KeystoneShowRegionResponse> {
        const options = ParamCreater().keystoneShowRegion(keystoneShowRegionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询账号密码强度策略，查询结果包括密码强度策略的正则表达式及其描述。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号密码强度策略
     * @param {string} domainId 待查询的账号ID，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneShowSecurityCompliance(keystoneShowSecurityComplianceRequest?: KeystoneShowSecurityComplianceRequest): Promise<KeystoneShowSecurityComplianceResponse> {
        const options = ParamCreater().keystoneShowSecurityCompliance(keystoneShowSecurityComplianceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于按条件查询账号密码强度策略，查询结果包括密码强度策略的正则表达式及其描述。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按条件查询账号密码强度策略
     * @param {string} domainId 待查询的账号ID，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {'password_regex' | 'password_regex_description'} option 查询条件。该字段内容为：password_regex或password_regex_description。  password_regex：密码强度策略的正则表达式；password_regex_description：密码强度策略的描述。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneShowSecurityComplianceByOption(keystoneShowSecurityComplianceByOptionRequest?: KeystoneShowSecurityComplianceByOptionRequest): Promise<KeystoneShowSecurityComplianceByOptionResponse> {
        const options = ParamCreater().keystoneShowSecurityComplianceByOption(keystoneShowSecurityComplianceByOptionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询服务详情。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务详情
     * @param {string} serviceId 待查询的服务ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneShowService(keystoneShowServiceRequest?: KeystoneShowServiceRequest): Promise<KeystoneShowServiceResponse> {
        const options = ParamCreater().keystoneShowService(keystoneShowServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询Keystone API的3.0版本的信息。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询版本信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneShowVersion(): Promise<KeystoneShowVersionResponse> {
        const options = ParamCreater().keystoneShowVersion();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)更新用户组信息。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新用户组
     * @param {string} groupId 待更新的用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {KeystoneUpdateGroupRequestBody} keystoneUpdateGroupRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneUpdateGroup(keystoneUpdateGroupRequest?: KeystoneUpdateGroupRequest): Promise<KeystoneUpdateGroupResponse> {
        const options = ParamCreater().keystoneUpdateGroup(keystoneUpdateGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)更新身份提供商。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新身份提供商
     * @param {string} id 待更新的身份提供商ID。
     * @param {KeystoneUpdateIdentityProviderRequestBody} keystoneUpdateIdentityProviderRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneUpdateIdentityProvider(keystoneUpdateIdentityProviderRequest?: KeystoneUpdateIdentityProviderRequest): Promise<KeystoneUpdateIdentityProviderResponse> {
        const options = ParamCreater().keystoneUpdateIdentityProvider(keystoneUpdateIdentityProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)更新映射。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新映射
     * @param {string} id 待更新的映射ID。
     * @param {KeystoneUpdateMappingRequestBody} keystoneUpdateMappingRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneUpdateMapping(keystoneUpdateMappingRequest?: KeystoneUpdateMappingRequest): Promise<KeystoneUpdateMappingResponse> {
        const options = ParamCreater().keystoneUpdateMapping(keystoneUpdateMappingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改项目信息。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改项目信息
     * @param {KeystoneUpdateProjectRequestBody} keystoneUpdateProjectRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneUpdateProject(keystoneUpdateProjectRequest?: KeystoneUpdateProjectRequest): Promise<KeystoneUpdateProjectResponse> {
        const options = ParamCreater().keystoneUpdateProject(keystoneUpdateProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)更新协议。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新协议
     * @param {string} idpId 身份提供商ID。
     * @param {string} protocolId 待更新的协议ID。
     * @param {KeystoneUpdateProtocolRequestBody} keystoneUpdateProtocolRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneUpdateProtocol(keystoneUpdateProtocolRequest?: KeystoneUpdateProtocolRequest): Promise<KeystoneUpdateProtocolResponse> {
        const options = ParamCreater().keystoneUpdateProtocol(keystoneUpdateProtocolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询指定条件下的委托列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定条件下的委托列表
     * @param {string} domainId 委托方账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} [trustDomainId] 被委托方账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} [name] 委托名，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAgencies(listAgenciesRequest?: ListAgenciesRequest): Promise<ListAgenciesResponse> {
        const options = ParamCreater().listAgencies(listAgenciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询委托所有项目服务权限列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询委托下的所有项目服务权限列表
     * @param {string} agencyId 委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} domainId 账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllProjectsPermissionsForAgency(listAllProjectsPermissionsForAgencyRequest?: ListAllProjectsPermissionsForAgencyRequest): Promise<ListAllProjectsPermissionsForAgencyResponse> {
        const options = ParamCreater().listAllProjectsPermissionsForAgency(listAllProjectsPermissionsForAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询自定义策略列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义策略列表
     * @param {number} [page] 分页查询时数据的页数，查询值最小为1。需要与per_page同时存在。
     * @param {number} [perPage] 分页查询时每页的数据个数，取值范围为[1,300]。需要与page同时存在。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCustomPolicies(listCustomPoliciesRequest?: ListCustomPoliciesRequest): Promise<ListCustomPoliciesResponse> {
        const options = ParamCreater().listCustomPolicies(listCustomPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询全局服务中的委托权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全局服务中的委托权限
     * @param {string} domainId 委托方账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} agencyId 委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainPermissionsForAgency(listDomainPermissionsForAgencyRequest?: ListDomainPermissionsForAgencyRequest): Promise<ListDomainPermissionsForAgencyResponse> {
        const options = ParamCreater().listDomainPermissionsForAgency(listDomainPermissionsForAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可用于查询用户组所关联的企业项目。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组关联的企业项目
     * @param {string} groupId 待查询用户组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnterpriseProjectsForGroup(listEnterpriseProjectsForGroupRequest?: ListEnterpriseProjectsForGroupRequest): Promise<ListEnterpriseProjectsForGroupResponse> {
        const options = ParamCreater().listEnterpriseProjectsForGroup(listEnterpriseProjectsForGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可用于查询用户所关联的企业项目。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户关联的企业项目
     * @param {string} userId 待查询用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnterpriseProjectsForUser(listEnterpriseProjectsForUserRequest?: ListEnterpriseProjectsForUserRequest): Promise<ListEnterpriseProjectsForUserResponse> {
        const options = ParamCreater().listEnterpriseProjectsForUser(listEnterpriseProjectsForUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可用于查询企业项目关联的用户组。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业项目关联的用户组
     * @param {string} enterpriseProjectId 待查询的企业项目Id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGroupsForEnterpriseProject(listGroupsForEnterpriseProjectRequest?: ListGroupsForEnterpriseProjectRequest): Promise<ListGroupsForEnterpriseProjectResponse> {
        const options = ParamCreater().listGroupsForEnterpriseProject(listGroupsForEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询项目服务中的委托权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目服务中的委托权限
     * @param {string} agencyId 委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectPermissionsForAgency(listProjectPermissionsForAgencyRequest?: ListProjectPermissionsForAgencyRequest): Promise<ListProjectPermissionsForAgencyResponse> {
        const options = ParamCreater().listProjectPermissionsForAgency(listProjectPermissionsForAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可用于查询企业项目已关联用户组的权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业项目已关联用户组的权限
     * @param {string} enterpriseProjectId 待查询企业项目ID。
     * @param {string} groupId 待查询用户组。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRolesForGroupOnEnterpriseProject(listRolesForGroupOnEnterpriseProjectRequest?: ListRolesForGroupOnEnterpriseProjectRequest): Promise<ListRolesForGroupOnEnterpriseProjectResponse> {
        const options = ParamCreater().listRolesForGroupOnEnterpriseProject(listRolesForGroupOnEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可用于查询企业项目直接关联用户的权限。
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业项目直接关联用户的权限
     * @param {string} enterpriseProjectId 企业项目ID。
     * @param {string} userId 用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRolesForUserOnEnterpriseProject(listRolesForUserOnEnterpriseProjectRequest?: ListRolesForUserOnEnterpriseProjectRequest): Promise<ListRolesForUserOnEnterpriseProjectResponse> {
        const options = ParamCreater().listRolesForUserOnEnterpriseProject(listRolesForUserOnEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可用于查询企业项目直接关联的用户。
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业项目直接关联用户
     * @param {string} enterpriseProjectId 待查询企业项目ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUsersForEnterpriseProject(listUsersForEnterpriseProjectRequest?: ListUsersForEnterpriseProjectRequest): Promise<ListUsersForEnterpriseProjectResponse> {
        const options = ParamCreater().listUsersForEnterpriseProject(listUsersForEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)移除委托的所有项目服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除委托下的所有项目服务权限
     * @param {string} agencyId 委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} domainId 账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeAllProjectsPermissionFromAgency(removeAllProjectsPermissionFromAgencyRequest?: RemoveAllProjectsPermissionFromAgencyRequest): Promise<RemoveAllProjectsPermissionFromAgencyResponse> {
        const options = ParamCreater().removeAllProjectsPermissionFromAgency(removeAllProjectsPermissionFromAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)移除委托的全局服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除委托的全局服务权限
     * @param {string} domainId 委托方账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} agencyId 委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeDomainPermissionFromAgency(removeDomainPermissionFromAgencyRequest?: RemoveDomainPermissionFromAgencyRequest): Promise<RemoveDomainPermissionFromAgencyResponse> {
        const options = ParamCreater().removeDomainPermissionFromAgency(removeDomainPermissionFromAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)移除委托的项目服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 移除委托的项目服务权限
     * @param {string} agencyId 委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeProjectPermissionFromAgency(removeProjectPermissionFromAgencyRequest?: RemoveProjectPermissionFromAgencyRequest): Promise<RemoveProjectPermissionFromAgencyResponse> {
        const options = ParamCreater().removeProjectPermissionFromAgency(removeProjectPermissionFromAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除企业项目关联用户组的权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除企业项目关联用户组的权限
     * @param {string} enterpriseProjectId 企业项目ID。
     * @param {string} groupId 用户组ID。
     * @param {string} roleId 权限ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public revokeRoleFromGroupOnEnterpriseProject(revokeRoleFromGroupOnEnterpriseProjectRequest?: RevokeRoleFromGroupOnEnterpriseProjectRequest): Promise<RevokeRoleFromGroupOnEnterpriseProjectResponse> {
        const options = ParamCreater().revokeRoleFromGroupOnEnterpriseProject(revokeRoleFromGroupOnEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除企业项目直接关联用户的权限。
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除企业项目直接关联用户的权限
     * @param {string} enterpriseProjectId 企业项目ID。
     * @param {string} userId 用户ID。
     * @param {string} roleId 权限ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public revokeRoleFromUserOnEnterpriseProject(revokeRoleFromUserOnEnterpriseProjectRequest?: RevokeRoleFromUserOnEnterpriseProjectRequest): Promise<RevokeRoleFromUserOnEnterpriseProjectResponse> {
        const options = ParamCreater().revokeRoleFromUserOnEnterpriseProject(revokeRoleFromUserOnEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询委托详情。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询委托详情
     * @param {string} agencyId 待查询的委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAgency(showAgencyRequest?: ShowAgencyRequest): Promise<ShowAgencyResponse> {
        const options = ParamCreater().showAgency(showAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询自定义策略详情。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义策略详情
     * @param {string} roleId 待查询的自定义策略ID，获取方式请参见：[自定义策略ID](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;IAM&amp;api&#x3D;ListCustomPolicies)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCustomPolicy(showCustomPolicyRequest?: ShowCustomPolicyRequest): Promise<ShowCustomPolicyResponse> {
        const options = ParamCreater().showCustomPolicy(showCustomPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询账号接口访问控制策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号接口访问策略
     * @param {string} domainId 待查询的账号ID，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainApiAclPolicy(showDomainApiAclPolicyRequest?: ShowDomainApiAclPolicyRequest): Promise<ShowDomainApiAclPolicyResponse> {
        const options = ParamCreater().showDomainApiAclPolicy(showDomainApiAclPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询账号控制台访问控制策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号控制台访问策略
     * @param {string} domainId 待查询的账号ID，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainConsoleAclPolicy(showDomainConsoleAclPolicyRequest?: ShowDomainConsoleAclPolicyRequest): Promise<ShowDomainConsoleAclPolicyResponse> {
        const options = ParamCreater().showDomainConsoleAclPolicy(showDomainConsoleAclPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询账号登录策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号登录策略
     * @param {string} domainId 待查询的账号ID，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainLoginPolicy(showDomainLoginPolicyRequest?: ShowDomainLoginPolicyRequest): Promise<ShowDomainLoginPolicyResponse> {
        const options = ParamCreater().showDomainLoginPolicy(showDomainLoginPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询账号密码策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号密码策略
     * @param {string} domainId 待查询的账号ID，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainPasswordPolicy(showDomainPasswordPolicyRequest?: ShowDomainPasswordPolicyRequest): Promise<ShowDomainPasswordPolicyResponse> {
        const options = ParamCreater().showDomainPasswordPolicy(showDomainPasswordPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询账号操作保护策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号操作保护策略
     * @param {string} domainId 待查询的账号ID，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainProtectPolicy(showDomainProtectPolicyRequest?: ShowDomainProtectPolicyRequest): Promise<ShowDomainProtectPolicyResponse> {
        const options = ParamCreater().showDomainProtectPolicy(showDomainProtectPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询账号配额。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号配额
     * @param {string} domainId 待查询的账号ID，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {'user' | 'group' | 'idp' | 'agency' | 'policy' | 'assigment_group_mp' | 'assigment_agency_mp' | 'assigment_group_ep' | 'assigment_user_ep' | 'mapping'} [type] 查询配额的类型，取值范围为：user, group, idp, agency, policy, assigment_group_mp, assigment_agency_mp, assigment_group_ep, assigment_user_ep, mapping。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainQuota(showDomainQuotaRequest?: ShowDomainQuotaRequest): Promise<ShowDomainQuotaResponse> {
        const options = ParamCreater().showDomainQuota(showDomainQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定账号中的授权记录。
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定账号中的授权记录
     * @param {string} domainId 待查询账号ID。
     * @param {string} [roleId] 策略ID。
     * @param {string} [subject] 授权主体,取值范围：user、group、agency。该参数与subject.user_id、subject.group_id、subject.agency_id只能选择一个。
     * @param {string} [subjectUserId] 授权的IAM用户ID。
     * @param {string} [subjectGroupId] 授权的用户组ID。
     * @param {string} [subjectAgencyId] 授权的委托ID。
     * @param {string} [scope] 授权范围，取值范围：project、domain、enterprise_project。该参数与scope.project_id、scope.domain_id、scope.enterprise_projects_id只能选择一个。 &gt; - 如需查看全局服务授权记录，scope取值domain或填写scope.domain_id。 &gt; - 如需查看基于所有资源的授权记录，scope取值为domain，且is_inherited取值为true &gt; - 如需查看基于项目的授权记录，scope取值为project或填写scope.project_id。 &gt; - 如需查看基于企业项目的授权记录，scope取值为enterprise_project或填写scope.enterprise_project_id。
     * @param {string} [scopeProjectId] 授权的项目ID。
     * @param {string} [scopeDomainId] 待查询账号ID。
     * @param {string} [scopeEnterpriseProjectsId] 授权的企业项目ID。
     * @param {boolean} [isInherited] 是否包含基于所有项目授权的记录，默认为false。当参数scope&#x3D;domain或者scope.domain_id存在时生效。true：查询基于所有项目授权的记录。 false：查询基于全局服务授权的记录。
     * @param {boolean} [includeGroup] 是否包含基于IAM用户所属用户组授权的记录，默认为true。当参数subject&#x3D;user或者subject.user_id存在时生效。true：查询基于IAM用户授权、IAM用户所属用户组授权的记录。 false：仅查询基于IAM用户授权的记录。
     * @param {string} [page] 分页查询时数据的页数，查询值最小为1。需要与per_page同时存在。
     * @param {string} [perPage] 分页查询时每页的数据个数，取值范围为[1,50]。需要与page同时存在。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainRoleAssignments(showDomainRoleAssignmentsRequest?: ShowDomainRoleAssignmentsRequest): Promise<ShowDomainRoleAssignmentsResponse> {
        const options = ParamCreater().showDomainRoleAssignments(showDomainRoleAssignmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询身份提供商导入到IAM中的Metadata文件。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Metadata文件
     * @param {string} idpId 身份提供商ID。
     * @param {string} protocolId 协议ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMetadata(showMetadataRequest?: ShowMetadataRequest): Promise<ShowMetadataResponse> {
        const options = ParamCreater().showMetadata(showMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询OpenId Connect身份提供商配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询OpenId Connect身份提供商配置
     * @param {string} idpId 身份提供商ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOpenIdConnectConfig(showOpenIdConnectConfigRequest?: ShowOpenIdConnectConfigRequest): Promise<ShowOpenIdConnectConfigResponse> {
        const options = ParamCreater().showOpenIdConnectConfig(showOpenIdConnectConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询项目详情与状态。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目详情与状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectDetailsAndStatus(): Promise<ShowProjectDetailsAndStatusResponse> {
        const options = ParamCreater().showProjectDetailsAndStatus();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于查询项目配额。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectQuota(): Promise<ShowProjectQuotaResponse> {
        const options = ParamCreater().showProjectQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改委托。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改委托
     * @param {string} agencyId 待修改的委托ID，获取方式请参见：[获取委托名、委托ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {UpdateAgencyRequestBody} updateAgencyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAgency(updateAgencyRequest?: UpdateAgencyRequest): Promise<UpdateAgencyResponse> {
        const options = ParamCreater().updateAgency(updateAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改委托自定义策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改委托自定义策略
     * @param {string} roleId 待修改的自定义策略ID，获取方式请参见：[自定义策略ID](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;IAM&amp;api&#x3D;ListCustomPolicies)。
     * @param {UpdateAgencyCustomPolicyRequestBody} updateAgencyCustomPolicyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAgencyCustomPolicy(updateAgencyCustomPolicyRequest?: UpdateAgencyCustomPolicyRequest): Promise<UpdateAgencyCustomPolicyResponse> {
        const options = ParamCreater().updateAgencyCustomPolicy(updateAgencyCustomPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改云服务自定义策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改云服务自定义策略
     * @param {string} roleId 待修改的自定义策略ID，获取方式请参见：[自定义策略ID](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;IAM&amp;api&#x3D;ListCustomPolicies)。
     * @param {UpdateCloudServiceCustomPolicyRequestBody} updateCloudServiceCustomPolicyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCloudServiceCustomPolicy(updateCloudServiceCustomPolicyRequest?: UpdateCloudServiceCustomPolicyRequest): Promise<UpdateCloudServiceCustomPolicyResponse> {
        const options = ParamCreater().updateCloudServiceCustomPolicy(updateCloudServiceCustomPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改账号接口访问策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改账号接口访问策略
     * @param {string} domainId 账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {UpdateDomainApiAclPolicyRequestBody} updateDomainApiAclPolicyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainApiAclPolicy(updateDomainApiAclPolicyRequest?: UpdateDomainApiAclPolicyRequest): Promise<UpdateDomainApiAclPolicyResponse> {
        const options = ParamCreater().updateDomainApiAclPolicy(updateDomainApiAclPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改账号控制台访问策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改账号控制台访问策略
     * @param {string} domainId 账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {UpdateDomainConsoleAclPolicyRequestBody} [updateDomainConsoleAclPolicyRequestBody] 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainConsoleAclPolicy(updateDomainConsoleAclPolicyRequest?: UpdateDomainConsoleAclPolicyRequest): Promise<UpdateDomainConsoleAclPolicyResponse> {
        const options = ParamCreater().updateDomainConsoleAclPolicy(updateDomainConsoleAclPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)为用户组授予所有项目服务权限。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为用户组授予所有项目服务权限
     * @param {string} domainId 用户组所属账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} groupId 用户组ID，获取方式请参见：[获取用户组ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {string} roleId 权限ID，获取方式请参见：[获取权限名、权限ID](https://support.huaweicloud.com/api-iam/iam_10_0001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainGroupInheritRole(updateDomainGroupInheritRoleRequest?: UpdateDomainGroupInheritRoleRequest): Promise<UpdateDomainGroupInheritRoleResponse> {
        const options = ParamCreater().updateDomainGroupInheritRole(updateDomainGroupInheritRoleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改账号登录策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改账号登录策略
     * @param {string} domainId 账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {UpdateDomainLoginPolicyRequestBody} updateDomainLoginPolicyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainLoginPolicy(updateDomainLoginPolicyRequest?: UpdateDomainLoginPolicyRequest): Promise<UpdateDomainLoginPolicyResponse> {
        const options = ParamCreater().updateDomainLoginPolicy(updateDomainLoginPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改账号密码策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改账号密码策略
     * @param {string} domainId 账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {UpdateDomainPasswordPolicyRequestBody} updateDomainPasswordPolicyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainPasswordPolicy(updateDomainPasswordPolicyRequest?: UpdateDomainPasswordPolicyRequest): Promise<UpdateDomainPasswordPolicyResponse> {
        const options = ParamCreater().updateDomainPasswordPolicy(updateDomainPasswordPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改账号操作保护策略。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改账号操作保护策略
     * @param {string} domainId 待修改的账号ID，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {UpdateDomainProtectPolicyRequestBody} updateDomainProtectPolicyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDomainProtectPolicy(updateDomainProtectPolicyRequest?: UpdateDomainProtectPolicyRequest): Promise<UpdateDomainProtectPolicyResponse> {
        const options = ParamCreater().updateDomainProtectPolicy(updateDomainProtectPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改OpenId Connect身份提供商配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改OpenId Connect身份提供商配置
     * @param {string} idpId 身份提供商ID
     * @param {UpdateOpenIdConnectConfigRequestBody} updateOpenIDConnectConfigRequestBody 修改身份提供商的信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateOpenIdConnectConfig(updateOpenIdConnectConfigRequest?: UpdateOpenIdConnectConfigRequest): Promise<UpdateOpenIdConnectConfigResponse> {
        const options = ParamCreater().updateOpenIdConnectConfig(updateOpenIdConnectConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)设置项目状态。项目状态包括：正常、冻结。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置项目状态
     * @param {UpdateProjectStatusRequestBody} updateProjectStatusRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProjectStatus(updateProjectStatusRequest?: UpdateProjectStatusRequest): Promise<UpdateProjectStatusResponse> {
        const options = ParamCreater().updateProjectStatus(updateProjectStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)给IAM用户创建永久访问密钥，或IAM用户给自己创建永久访问密钥。
     * 
     * 访问密钥（Access Key ID/Secret Access Key，简称AK/SK），是您通过开发工具（API、CLI、SDK）访问华为云时的身份凭证，不用于登录控制台。系统通过AK识别访问用户的身份，通过SK进行签名验证，通过加密签名验证可以确保请求的机密性、完整性和请求者身份的正确性。在控制台创建访问密钥的方式请参见：[访问密钥](https://support.huaweicloud.com/usermanual-ca/zh-cn_topic_0046606340.html) 。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建永久访问密钥
     * @param {CreatePermanentAccessKeyRequestBody} createPermanentAccessKeyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPermanentAccessKey(createPermanentAccessKeyRequest?: CreatePermanentAccessKeyRequest): Promise<CreatePermanentAccessKeyResponse> {
        const options = ParamCreater().createPermanentAccessKey(createPermanentAccessKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于通过委托来获取临时访问密钥（临时AK/SK）和securitytoken。
     * 
     * 临时AK/SK和securitytoken是系统颁发给IAM用户的临时访问令牌，有效期为15分钟至24小时，过期后需要重新获取。临时AK/SK和securitytoken遵循权限最小化原则。鉴权时，临时AK/SK和securitytoken必须同时使用，请求头中需要添加“x-security-token”字段，使用方法详情请参考：[API签名参考](https://support.huaweicloud.com/devg-apisign/api-sign-provide.html) 。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过委托获取临时访问密钥
     * @param {CreateTemporaryAccessKeyByAgencyRequestBody} createTemporaryAccessKeyByAgencyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTemporaryAccessKeyByAgency(createTemporaryAccessKeyByAgencyRequest?: CreateTemporaryAccessKeyByAgencyRequest): Promise<CreateTemporaryAccessKeyByAgencyResponse> {
        const options = ParamCreater().createTemporaryAccessKeyByAgency(createTemporaryAccessKeyByAgencyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于通过token来获取临时AK/SK和securitytoken。
     * 
     * 临时AK/SK和securitytoken是系统颁发给IAM用户的临时访问令牌，有效期为15分钟至24小时，过期后需要重新获取。临时AK/SK和securitytoken遵循权限最小化原则。鉴权时，临时AK/SK和securitytoken必须同时使用，请求头中需要添加“x-security-token”字段，使用方法详情请参考：[API签名参考](https://support.huaweicloud.com/devg-apisign/api-sign-provide.html)。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过token获取临时访问密钥
     * @param {CreateTemporaryAccessKeyByTokenRequestBody} createTemporaryAccessKeyByTokenRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTemporaryAccessKeyByToken(createTemporaryAccessKeyByTokenRequest?: CreateTemporaryAccessKeyByTokenRequest): Promise<CreateTemporaryAccessKeyByTokenResponse> {
        const options = ParamCreater().createTemporaryAccessKeyByToken(createTemporaryAccessKeyByTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除IAM用户的指定永久访问密钥，或IAM用户删除自己的指定永久访问密钥。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定永久访问密钥
     * @param {string} accessKey 待删除的指定AK。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePermanentAccessKey(deletePermanentAccessKeyRequest?: DeletePermanentAccessKeyRequest): Promise<DeletePermanentAccessKeyResponse> {
        const options = ParamCreater().deletePermanentAccessKey(deletePermanentAccessKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户的所有永久访问密钥，或IAM用户查询自己的所有永久访问密钥。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有永久访问密钥
     * @param {string} [userId] 待查询的IAM用户ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPermanentAccessKeys(listPermanentAccessKeysRequest?: ListPermanentAccessKeysRequest): Promise<ListPermanentAccessKeysResponse> {
        const options = ParamCreater().listPermanentAccessKeys(listPermanentAccessKeysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户的指定永久访问密钥，或IAM用户查询自己的指定永久访问密钥。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定永久访问密钥
     * @param {string} accessKey 待查询的指定AK。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPermanentAccessKey(showPermanentAccessKeyRequest?: ShowPermanentAccessKeyRequest): Promise<ShowPermanentAccessKeyResponse> {
        const options = ParamCreater().showPermanentAccessKey(showPermanentAccessKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改IAM用户的指定永久访问密钥，或IAM用户修改自己的指定永久访问密钥。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改指定永久访问密钥
     * @param {string} accessKey 待修改的指定AK。
     * @param {UpdatePermanentAccessKeyRequestBody} updatePermanentAccessKeyRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePermanentAccessKey(updatePermanentAccessKeyRequest?: UpdatePermanentAccessKeyRequest): Promise<UpdatePermanentAccessKeyResponse> {
        const options = ParamCreater().updatePermanentAccessKey(updatePermanentAccessKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于绑定MFA设备。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定MFA设备
     * @param {BindMfaDevice} createBindingDeviceRequestBody 绑定mfa Device
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBindingDevice(createBindingDeviceRequest?: CreateBindingDeviceRequest): Promise<CreateBindingDeviceResponse> {
        const options = ParamCreater().createBindingDevice(createBindingDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于创建MFA设备。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建MFA设备
     * @param {CreateMfaDeviceReq} createMfaDeviceRequestBody 创建mfa_device的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMfaDevice(createMfaDeviceRequest?: CreateMfaDeviceRequest): Promise<CreateMfaDeviceResponse> {
        const options = ParamCreater().createMfaDevice(createMfaDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)创建IAM用户。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 管理员创建IAM用户（推荐）
     * @param {CreateUserRequestBody} createUserRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUser(createUserRequest?: CreateUserRequest): Promise<CreateUserResponse> {
        const options = ParamCreater().createUser(createUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于解绑MFA设备
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑MFA设备
     * @param {UnbindMfaDevice} deleteBindingDeviceRequestBody 解绑的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBindingDevice(deleteBindingDeviceRequest?: DeleteBindingDeviceRequest): Promise<DeleteBindingDeviceResponse> {
        const options = ParamCreater().deleteBindingDevice(deleteBindingDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除MFA设备。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除MFA设备
     * @param {string} userId 绑定MFA设备的IAM 用户ID。
     * @param {string} serialNumber MFA设备序列号。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMfaDevice(deleteMfaDeviceRequest?: DeleteMfaDeviceRequest): Promise<DeleteMfaDeviceResponse> {
        const options = ParamCreater().deleteMfaDevice(deleteMfaDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)创建IAM用户。IAM用户首次登录时需要修改密码。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 管理员创建IAM用户
     * @param {KeystoneCreateUserRequestBody} keystoneCreateUserRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneCreateUser(keystoneCreateUserRequest?: KeystoneCreateUserRequest): Promise<KeystoneCreateUserResponse> {
        const options = ParamCreater().keystoneCreateUser(keystoneCreateUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除指定IAM用户。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 管理员删除IAM用户
     * @param {string} userId 待删除的IAM用户ID，获取方式请参见：[获取用户ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneDeleteUser(keystoneDeleteUserRequest?: KeystoneDeleteUserRequest): Promise<KeystoneDeleteUserResponse> {
        const options = ParamCreater().keystoneDeleteUser(keystoneDeleteUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户所属用户组，或IAM用户查询自己所属用户组。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IAM用户所属用户组
     * @param {string} userId 待查询的IAM用户ID，获取方式请参见：[获取项目名称、项目ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListGroupsForUser(keystoneListGroupsForUserRequest?: KeystoneListGroupsForUserRequest): Promise<KeystoneListGroupsForUserResponse> {
        const options = ParamCreater().keystoneListGroupsForUser(keystoneListGroupsForUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 管理员查询IAM用户列表
     * @param {string} [domainId] IAM用户所属账号ID，获取方式请参见：[获取账号ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {boolean} [enabled] 是否启IAM用户，true为启用，false为停用，默认为true。
     * @param {string} [name] IAM用户名。
     * @param {string} [passwordExpiresAt] 密码过期时间，格式为：password_expires_at&#x3D;{operator}:{timestamp}。timestamp格式为：YYYY-MM-DDTHH:mm:ssZ。示例：  &#x60;&#x60;&#x60; password_expires_at&#x3D;lt:2016-12-08T22:02:00Z &#x60;&#x60;&#x60; &gt; - operator取值范围：lt，lte，gt，gte，eq，neq。 &gt; - lt：过期时间小于timestamp。 &gt; - lte：过期时间小于等于timestamp。 &gt; - gt：过期时间大于timestamp。 &gt; - gte：过期时间大于等于timestamp。 &gt; - eq：过期时间等于timestamp。 &gt; - neq：过期时间不等于timestamp。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneListUsers(keystoneListUsersRequest?: KeystoneListUsersRequest): Promise<KeystoneListUsersResponse> {
        const options = ParamCreater().keystoneListUsers(keystoneListUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户详情，或IAM用户查询自己的用户详情。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IAM用户详情
     * @param {string} userId 待查询的IAM用户ID，获取方式请参见：[获取用户ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneShowUser(keystoneShowUserRequest?: KeystoneShowUserRequest): Promise<KeystoneShowUserResponse> {
        const options = ParamCreater().keystoneShowUser(keystoneShowUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改IAM用户信息。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 管理员修改IAM用户信息
     * @param {string} userId 待修改信息的IAM用户ID，获取方式请参见：[获取用户ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {KeystoneUpdateUserByAdminRequestBody} keystoneUpdateUserByAdminRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneUpdateUserByAdmin(keystoneUpdateUserByAdminRequest?: KeystoneUpdateUserByAdminRequest): Promise<KeystoneUpdateUserByAdminResponse> {
        const options = ParamCreater().keystoneUpdateUserByAdmin(keystoneUpdateUserByAdminRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于IAM用户修改自己的密码。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改IAM用户密码
     * @param {string} userId 待修改密码的IAM用户ID，获取方式请参见：[获取用户ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {KeystoneUpdateUserPasswordRequestBody} keystoneUpdateUserPasswordRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneUpdateUserPassword(keystoneUpdateUserPasswordRequest?: KeystoneUpdateUserPasswordRequest): Promise<KeystoneUpdateUserPasswordResponse> {
        const options = ParamCreater().keystoneUpdateUserPassword(keystoneUpdateUserPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户的登录保护状态列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IAM用户的登录保护状态信息列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserLoginProtects(): Promise<ListUserLoginProtectsResponse> {
        const options = ParamCreater().listUserLoginProtects();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户的MFA绑定信息列表。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 该接口可以用于获取MFA设备。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUserMfaDevices(): Promise<ListUserMfaDevicesResponse> {
        const options = ParamCreater().listUserMfaDevices();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户详情，或IAM用户查询自己的详情。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IAM用户详情（推荐）
     * @param {string} userId 待查询的IAM用户ID，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUser(showUserRequest?: ShowUserRequest): Promise<ShowUserResponse> {
        const options = ParamCreater().showUser(showUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询指定IAM用户的登录保护状态信息，或IAM用户查询自己的登录保护状态信息。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定IAM用户的登录保护状态信息
     * @param {string} userId 待查询的IAM用户ID，获取方式请参见：[获取用户ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserLoginProtect(showUserLoginProtectRequest?: ShowUserLoginProtectRequest): Promise<ShowUserLoginProtectResponse> {
        const options = ParamCreater().showUserLoginProtect(showUserLoginProtectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询指定IAM用户的MFA绑定信息，或IAM用户查询自己的MFA绑定信息。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定IAM用户的MFA绑定信息
     * @param {string} userId 待查询的IAM用户ID，获取方式请参见：[获取用户ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserMfaDevice(showUserMfaDeviceRequest?: ShowUserMfaDeviceRequest): Promise<ShowUserMfaDeviceResponse> {
        const options = ParamCreater().showUserMfaDevice(showUserMfaDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改账号操作保护。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改IAM用户登录保护状态信息
     * @param {string} userId 待修改登录保护状态信息的IAM用户ID。
     * @param {UpdateLoginProjectReq} updateLoginProtectRequestBody {     \&quot;login_protect\&quot;:{         \&quot;enabled\&quot;: true,         \&quot;verification_method\&quot;: \&quot;vmfa\&quot; [sms,email,vmfa]     } }
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLoginProtect(updateLoginProtectRequest?: UpdateLoginProtectRequest): Promise<UpdateLoginProtectResponse> {
        const options = ParamCreater().updateLoginProtect(updateLoginProtectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改IAM用户信息 。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 管理员修改IAM用户信息（推荐）
     * @param {string} userId 待修改信息的IAM用户ID，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {UpdateUserRequestBody} updateUserRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUser(updateUserRequest?: UpdateUserRequest): Promise<UpdateUserResponse> {
        const options = ParamCreater().updateUser(updateUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于IAM用户修改自己的用户信息。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改IAM用户信息（推荐）
     * @param {string} userId 待修改信息的IAM用户ID，获取方式请参见：[获取账号、IAM用户、项目、用户组、委托的名称和ID](https://support.huaweicloud.com/api-iam/iam_17_0002.html)。
     * @param {UpdateUserInformationRequestBody} updateUserInformationRequestBody 请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUserInformation(updateUserInformationRequest?: UpdateUserInformationRequest): Promise<UpdateUserInformationResponse> {
        const options = ParamCreater().updateUserInformation(updateUserInformationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于获取委托方的token。
     * 
     * 例如：A账号希望B账号管理自己的某些资源，所以A账号创建了委托给B账号，则A账号为委托方，B账号为被委托方。那么B账号可以通过该接口获取委托token。B账号仅能使用该token管理A账号的委托资源，不能管理自己账号中的资源。如果B账号需要管理自己账号中的资源，则需要获取自己的用户token。
     * 
     * token是系统颁发给用户的访问令牌，承载用户的身份、权限等信息。调用IAM以及其他云服务的接口时，可以使用本接口获取的token进行鉴权。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。如果使用全局区域的Endpoint调用，该token可以在所有区域使用；如果使用非全局区域的Endpoint调用，则该token仅在该区域生效，不能跨区域使用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * &gt; - token的有效期为24小时，建议进行缓存，避免频繁调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取委托Token
     * @param {KeystoneCreateAgencyTokenRequestBody} keystoneCreateAgencyTokenRequestBody 请求体。
     * @param {string} [nocatalog] 如果设置该参数，返回的响应体中将不显示catalog信息。任何非空字符串都将解释为true，并使该字段生效。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneCreateAgencyToken(keystoneCreateAgencyTokenRequest?: KeystoneCreateAgencyTokenRequest): Promise<KeystoneCreateAgencyTokenResponse> {
        const options = ParamCreater().keystoneCreateAgencyToken(keystoneCreateAgencyTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Subject-Token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于通过用户名/密码的方式进行认证来获取IAM用户token。
     * 
     * token是系统颁发给IAM用户的访问令牌，承载用户的身份、权限等信息。调用IAM以及其他云服务的接口时，可以使用本接口获取的IAM用户token进行鉴权。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。如果使用全局区域的Endpoint调用，该token可以在所有区域使用；如果使用非全局区域的Endpoint调用，则该token仅在该区域生效，不能跨区域使用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * &gt; - token的有效期为24小时，建议进行缓存，避免频繁调用。
     * &gt; - 通过Postman获取用户token示例请参见：[如何通过Postman获取用户token](https://support.huaweicloud.com/iam_faq/iam_01_034.html)。
     * &gt; - 如果需要获取具有Security Administrator权限的token，请参见：[IAM 常见问题](https://support.huaweicloud.com/iam_faq/iam_01_0608.html)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取IAM用户Token（使用密码）
     * @param {KeystoneCreateUserTokenByPasswordRequestBody} keystoneCreateUserTokenByPasswordRequestBody 请求体。
     * @param {string} [nocatalog] 如果设置该参数，返回的响应体中将不显示catalog信息。任何非空字符串都将解释为true，并使该字段生效。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneCreateUserTokenByPassword(keystoneCreateUserTokenByPasswordRequest?: KeystoneCreateUserTokenByPasswordRequest): Promise<KeystoneCreateUserTokenByPasswordResponse> {
        const options = ParamCreater().keystoneCreateUserTokenByPassword(keystoneCreateUserTokenByPasswordRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Subject-Token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于通过用户名/密码+虚拟MFA的方式进行认证，在IAM用户开启了的登录保护功能，并选择通过虚拟MFA验证时获取IAM用户token。
     * 
     * token是系统颁发给用户的访问令牌，承载用户的身份、权限等信息。调用IAM以及其他云服务的接口时，可以使用本接口获取的token进行鉴权。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。如果使用全局区域的Endpoint调用，该token可以在所有区域使用；如果使用非全局区域的Endpoint调用，则该token仅在该区域生效，不能跨区域使用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * &gt; - token的有效期为24小时，建议进行缓存，避免频繁调用。
     * &gt; - 通过Postman获取用户token示例请参见：[如何通过Postman获取用户token](https://support.huaweicloud.com/iam_faq/iam_01_034.html)。
     * &gt; - 如果需要获取具有Security Administrator权限的token，请参见：[IAM 常见问题](https://support.huaweicloud.com/iam_faq/iam_01_0608.html)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取IAM用户Token（使用密码+虚拟MFA）
     * @param {KeystoneCreateUserTokenByPasswordAndMfaRequestBody} keystoneCreateUserTokenByPasswordAndMfaRequestBody 请求体。
     * @param {string} [nocatalog] 如果设置该参数，返回的响应体中将不显示catalog信息。任何非空字符串都将解释为true，并使该字段生效。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneCreateUserTokenByPasswordAndMfa(keystoneCreateUserTokenByPasswordAndMfaRequest?: KeystoneCreateUserTokenByPasswordAndMfaRequest): Promise<KeystoneCreateUserTokenByPasswordAndMfaResponse> {
        const options = ParamCreater().keystoneCreateUserTokenByPasswordAndMfa(keystoneCreateUserTokenByPasswordAndMfaRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Subject-Token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)校验本账号中IAM用户token的有效性，或IAM用户校验自己token的有效性。管理员仅能校验本账号中IAM用户token的有效性，不能校验其他账号中IAM用户token的有效性。如果被校验的token有效，则返回该token的详细信息。
     * 
     * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验Token的有效性
     * @param {string} xSubjectToken 待校验的token。
     * @param {string} [nocatalog] 如果设置该参数，返回的响应体中将不显示catalog信息。任何非空字符串都将解释为true，并使该字段生效。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public keystoneValidateToken(keystoneValidateTokenRequest?: KeystoneValidateTokenRequest): Promise<KeystoneValidateTokenResponse> {
        const options = ParamCreater().keystoneValidateToken(keystoneValidateTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Subject-Token'];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)为委托授予所有项目服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateAgencyWithAllProjectsPermission(associateAgencyWithAllProjectsPermissionRequest?: AssociateAgencyWithAllProjectsPermissionRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-INHERIT/domains/{domain_id}/agencies/{agency_id}/roles/{role_id}/inherited_to_projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agencyId;
            
            let domainId;
            
            let roleId;

            if (associateAgencyWithAllProjectsPermissionRequest !== null && associateAgencyWithAllProjectsPermissionRequest !== undefined) {
                if (associateAgencyWithAllProjectsPermissionRequest instanceof AssociateAgencyWithAllProjectsPermissionRequest) {
                    agencyId = associateAgencyWithAllProjectsPermissionRequest.agencyId;
                    domainId = associateAgencyWithAllProjectsPermissionRequest.domainId;
                    roleId = associateAgencyWithAllProjectsPermissionRequest.roleId;
                } else {
                    agencyId = associateAgencyWithAllProjectsPermissionRequest['agency_id'];
                    domainId = associateAgencyWithAllProjectsPermissionRequest['domain_id'];
                    roleId = associateAgencyWithAllProjectsPermissionRequest['role_id'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling associateAgencyWithAllProjectsPermission.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling associateAgencyWithAllProjectsPermission.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling associateAgencyWithAllProjectsPermission.');
            }

            options.pathParams = { 'agency_id': agencyId,'domain_id': domainId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)为委托授予全局服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateAgencyWithDomainPermission(associateAgencyWithDomainPermissionRequest?: AssociateAgencyWithDomainPermissionRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-AGENCY/domains/{domain_id}/agencies/{agency_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let agencyId;
            
            let roleId;

            if (associateAgencyWithDomainPermissionRequest !== null && associateAgencyWithDomainPermissionRequest !== undefined) {
                if (associateAgencyWithDomainPermissionRequest instanceof AssociateAgencyWithDomainPermissionRequest) {
                    domainId = associateAgencyWithDomainPermissionRequest.domainId;
                    agencyId = associateAgencyWithDomainPermissionRequest.agencyId;
                    roleId = associateAgencyWithDomainPermissionRequest.roleId;
                } else {
                    domainId = associateAgencyWithDomainPermissionRequest['domain_id'];
                    agencyId = associateAgencyWithDomainPermissionRequest['agency_id'];
                    roleId = associateAgencyWithDomainPermissionRequest['role_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling associateAgencyWithDomainPermission.');
            }
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling associateAgencyWithDomainPermission.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling associateAgencyWithDomainPermission.');
            }

            options.pathParams = { 'domain_id': domainId,'agency_id': agencyId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)为委托授予项目服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateAgencyWithProjectPermission(associateAgencyWithProjectPermissionRequest?: AssociateAgencyWithProjectPermissionRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-AGENCY/projects/{project_id}/agencies/{agency_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agencyId;
            
            let roleId;

            if (associateAgencyWithProjectPermissionRequest !== null && associateAgencyWithProjectPermissionRequest !== undefined) {
                if (associateAgencyWithProjectPermissionRequest instanceof AssociateAgencyWithProjectPermissionRequest) {
                    agencyId = associateAgencyWithProjectPermissionRequest.agencyId;
                    roleId = associateAgencyWithProjectPermissionRequest.roleId;
                } else {
                    agencyId = associateAgencyWithProjectPermissionRequest['agency_id'];
                    roleId = associateAgencyWithProjectPermissionRequest['role_id'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling associateAgencyWithProjectPermission.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling associateAgencyWithProjectPermission.');
            }

            options.pathParams = { 'agency_id': agencyId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于基于用户组为企业项目授权。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateRoleToGroupOnEnterpriseProject(associateRoleToGroupOnEnterpriseProjectRequest?: AssociateRoleToGroupOnEnterpriseProjectRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-PERMISSION/enterprise-projects/{enterprise_project_id}/groups/{group_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let enterpriseProjectId;
            
            let groupId;
            
            let roleId;

            if (associateRoleToGroupOnEnterpriseProjectRequest !== null && associateRoleToGroupOnEnterpriseProjectRequest !== undefined) {
                if (associateRoleToGroupOnEnterpriseProjectRequest instanceof AssociateRoleToGroupOnEnterpriseProjectRequest) {
                    enterpriseProjectId = associateRoleToGroupOnEnterpriseProjectRequest.enterpriseProjectId;
                    groupId = associateRoleToGroupOnEnterpriseProjectRequest.groupId;
                    roleId = associateRoleToGroupOnEnterpriseProjectRequest.roleId;
                } else {
                    enterpriseProjectId = associateRoleToGroupOnEnterpriseProjectRequest['enterprise_project_id'];
                    groupId = associateRoleToGroupOnEnterpriseProjectRequest['group_id'];
                    roleId = associateRoleToGroupOnEnterpriseProjectRequest['role_id'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling associateRoleToGroupOnEnterpriseProject.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling associateRoleToGroupOnEnterpriseProject.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling associateRoleToGroupOnEnterpriseProject.');
            }

            options.pathParams = { 'enterprise_project_id': enterpriseProjectId,'group_id': groupId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 基于用户为企业项目授权。
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateRoleToUserOnEnterpriseProject(associateRoleToUserOnEnterpriseProjectRequest?: AssociateRoleToUserOnEnterpriseProjectRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-PERMISSION/enterprise-projects/{enterprise_project_id}/users/{user_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let enterpriseProjectId;
            
            let userId;
            
            let roleId;

            if (associateRoleToUserOnEnterpriseProjectRequest !== null && associateRoleToUserOnEnterpriseProjectRequest !== undefined) {
                if (associateRoleToUserOnEnterpriseProjectRequest instanceof AssociateRoleToUserOnEnterpriseProjectRequest) {
                    enterpriseProjectId = associateRoleToUserOnEnterpriseProjectRequest.enterpriseProjectId;
                    userId = associateRoleToUserOnEnterpriseProjectRequest.userId;
                    roleId = associateRoleToUserOnEnterpriseProjectRequest.roleId;
                } else {
                    enterpriseProjectId = associateRoleToUserOnEnterpriseProjectRequest['enterprise_project_id'];
                    userId = associateRoleToUserOnEnterpriseProjectRequest['user_id'];
                    roleId = associateRoleToUserOnEnterpriseProjectRequest['role_id'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling associateRoleToUserOnEnterpriseProject.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling associateRoleToUserOnEnterpriseProject.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling associateRoleToUserOnEnterpriseProject.');
            }

            options.pathParams = { 'enterprise_project_id': enterpriseProjectId,'user_id': userId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)检查委托是否具有所有项目服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkAllProjectsPermissionForAgency(checkAllProjectsPermissionForAgencyRequest?: CheckAllProjectsPermissionForAgencyRequest) {
            const options = {
                method: "HEAD",
                url: "/v3.0/OS-INHERIT/domains/{domain_id}/agencies/{agency_id}/roles/{role_id}/inherited_to_projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agencyId;
            
            let domainId;
            
            let roleId;

            if (checkAllProjectsPermissionForAgencyRequest !== null && checkAllProjectsPermissionForAgencyRequest !== undefined) {
                if (checkAllProjectsPermissionForAgencyRequest instanceof CheckAllProjectsPermissionForAgencyRequest) {
                    agencyId = checkAllProjectsPermissionForAgencyRequest.agencyId;
                    domainId = checkAllProjectsPermissionForAgencyRequest.domainId;
                    roleId = checkAllProjectsPermissionForAgencyRequest.roleId;
                } else {
                    agencyId = checkAllProjectsPermissionForAgencyRequest['agency_id'];
                    domainId = checkAllProjectsPermissionForAgencyRequest['domain_id'];
                    roleId = checkAllProjectsPermissionForAgencyRequest['role_id'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling checkAllProjectsPermissionForAgency.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling checkAllProjectsPermissionForAgency.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling checkAllProjectsPermissionForAgency.');
            }

            options.pathParams = { 'agency_id': agencyId,'domain_id': domainId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询委托是否拥有全局服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkDomainPermissionForAgency(checkDomainPermissionForAgencyRequest?: CheckDomainPermissionForAgencyRequest) {
            const options = {
                method: "HEAD",
                url: "/v3.0/OS-AGENCY/domains/{domain_id}/agencies/{agency_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let agencyId;
            
            let roleId;

            if (checkDomainPermissionForAgencyRequest !== null && checkDomainPermissionForAgencyRequest !== undefined) {
                if (checkDomainPermissionForAgencyRequest instanceof CheckDomainPermissionForAgencyRequest) {
                    domainId = checkDomainPermissionForAgencyRequest.domainId;
                    agencyId = checkDomainPermissionForAgencyRequest.agencyId;
                    roleId = checkDomainPermissionForAgencyRequest.roleId;
                } else {
                    domainId = checkDomainPermissionForAgencyRequest['domain_id'];
                    agencyId = checkDomainPermissionForAgencyRequest['agency_id'];
                    roleId = checkDomainPermissionForAgencyRequest['role_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling checkDomainPermissionForAgency.');
            }
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling checkDomainPermissionForAgency.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling checkDomainPermissionForAgency.');
            }

            options.pathParams = { 'domain_id': domainId,'agency_id': agencyId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询委托是否拥有项目服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkProjectPermissionForAgency(checkProjectPermissionForAgencyRequest?: CheckProjectPermissionForAgencyRequest) {
            const options = {
                method: "HEAD",
                url: "/v3.0/OS-AGENCY/projects/{project_id}/agencies/{agency_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agencyId;
            
            let roleId;

            if (checkProjectPermissionForAgencyRequest !== null && checkProjectPermissionForAgencyRequest !== undefined) {
                if (checkProjectPermissionForAgencyRequest instanceof CheckProjectPermissionForAgencyRequest) {
                    agencyId = checkProjectPermissionForAgencyRequest.agencyId;
                    roleId = checkProjectPermissionForAgencyRequest.roleId;
                } else {
                    agencyId = checkProjectPermissionForAgencyRequest['agency_id'];
                    roleId = checkProjectPermissionForAgencyRequest['role_id'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling checkProjectPermissionForAgency.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling checkProjectPermissionForAgency.');
            }

            options.pathParams = { 'agency_id': agencyId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)创建委托。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAgency(createAgencyRequest?: CreateAgencyRequest) {
            const options = {
                method: "POST",
                url: "/v3.0/OS-AGENCY/agencies",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createAgencyRequest !== null && createAgencyRequest !== undefined) {
                if (createAgencyRequest instanceof CreateAgencyRequest) {
                    body = createAgencyRequest.body
                } else {
                    body = createAgencyRequest['body'];
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)创建委托自定义策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAgencyCustomPolicy(createAgencyCustomPolicyRequest?: CreateAgencyCustomPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v3.0/OS-ROLE/roles",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createAgencyCustomPolicyRequest !== null && createAgencyCustomPolicyRequest !== undefined) {
                if (createAgencyCustomPolicyRequest instanceof CreateAgencyCustomPolicyRequest) {
                    body = createAgencyCustomPolicyRequest.body
                } else {
                    body = createAgencyCustomPolicyRequest['body'];
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)创建云服务自定义策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCloudServiceCustomPolicy(createCloudServiceCustomPolicyRequest?: CreateCloudServiceCustomPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v3.0/OS-ROLE/roles",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createCloudServiceCustomPolicyRequest !== null && createCloudServiceCustomPolicyRequest !== undefined) {
                if (createCloudServiceCustomPolicyRequest instanceof CreateCloudServiceCustomPolicyRequest) {
                    body = createCloudServiceCustomPolicyRequest.body
                } else {
                    body = createCloudServiceCustomPolicyRequest['body'];
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
         * 该接口用于用于获取自定义代理登录票据logintoken。logintoken是系统颁发给自定义代理用户的登录票据，承载用户的身份、session等信息。调用自定义代理URL登录云服务控制台时，可以使用本接口获取的logintoken进行认证。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * &gt; - logintoken的有效期为10分钟。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLoginToken(createLoginTokenRequest?: CreateLoginTokenRequest) {
            const options = {
                method: "POST",
                url: "/v3.0/OS-AUTH/securitytoken/logintokens",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createLoginTokenRequest !== null && createLoginTokenRequest !== undefined) {
                if (createLoginTokenRequest instanceof CreateLoginTokenRequest) {
                    body = createLoginTokenRequest.body
                } else {
                    body = createLoginTokenRequest['body'];
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)导入Metadata文件。
         * 
         * 账号在使用联邦认证功能前，需要先将Metadata文件导入到IAM中。Metadata文件是SAML 2.0协议约定的接口文件，包含访问接口地址和证书信息，请找企业管理员获取企业IdP的Metadata文件。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMetadata(createMetadataRequest?: CreateMetadataRequest) {
            const options = {
                method: "POST",
                url: "/v3-ext/OS-FEDERATION/identity_providers/{idp_id}/protocols/{protocol_id}/metadata",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let idpId;
            
            let protocolId;

            if (createMetadataRequest !== null && createMetadataRequest !== undefined) {
                if (createMetadataRequest instanceof CreateMetadataRequest) {
                    idpId = createMetadataRequest.idpId;
                    protocolId = createMetadataRequest.protocolId;
                    body = createMetadataRequest.body
                } else {
                    idpId = createMetadataRequest['idp_id'];
                    protocolId = createMetadataRequest['protocol_id'];
                    body = createMetadataRequest['body'];
                }
            }

        
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling createMetadata.');
            }
            if (protocolId === null || protocolId === undefined) {
            throw new RequiredError('protocolId','Required parameter protocolId was null or undefined when calling createMetadata.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'idp_id': idpId,'protocol_id': protocolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建OpenId Connect身份提供商配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOpenIdConnectConfig(createOpenIdConnectConfigRequest?: CreateOpenIdConnectConfigRequest) {
            const options = {
                method: "POST",
                url: "/v3.0/OS-FEDERATION/identity-providers/{idp_id}/openid-connect-config",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let idpId;

            if (createOpenIdConnectConfigRequest !== null && createOpenIdConnectConfigRequest !== undefined) {
                if (createOpenIdConnectConfigRequest instanceof CreateOpenIdConnectConfigRequest) {
                    idpId = createOpenIdConnectConfigRequest.idpId;
                    body = createOpenIdConnectConfigRequest.body
                } else {
                    idpId = createOpenIdConnectConfigRequest['idp_id'];
                    body = createOpenIdConnectConfigRequest['body'];
                }
            }

        
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling createOpenIdConnectConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'idp_id': idpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取联邦认证token(OpenId Connect Id token方式)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTokenWithIdToken(createTokenWithIdTokenRequest?: CreateTokenWithIdTokenRequest) {
            const options = {
                method: "POST",
                url: "/v3.0/OS-AUTH/id-token/tokens",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let xIdpId;

            if (createTokenWithIdTokenRequest !== null && createTokenWithIdTokenRequest !== undefined) {
                if (createTokenWithIdTokenRequest instanceof CreateTokenWithIdTokenRequest) {
                    xIdpId = createTokenWithIdTokenRequest.xIdpId;
                    body = createTokenWithIdTokenRequest.body
                } else {
                    xIdpId = createTokenWithIdTokenRequest['X-Idp-Id'];
                    body = createTokenWithIdTokenRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xIdpId !== undefined && xIdpId !== null) {
                localVarHeaderParameter['X-Idp-Id'] = String(xIdpId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取联邦认证token(OpenId Connect Id token方式)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createUnscopedTokenWithIdToken(createUnscopedTokenWithIdTokenRequest?: CreateUnscopedTokenWithIdTokenRequest) {
            const options = {
                method: "POST",
                url: "/v3/OS-FEDERATION/identity_providers/{idp_id}/protocols/{protocol_id}/auth",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let idpId;
            
            let protocolId;
            
            let authorization;

            if (createUnscopedTokenWithIdTokenRequest !== null && createUnscopedTokenWithIdTokenRequest !== undefined) {
                if (createUnscopedTokenWithIdTokenRequest instanceof CreateUnscopedTokenWithIdTokenRequest) {
                    idpId = createUnscopedTokenWithIdTokenRequest.idpId;
                    protocolId = createUnscopedTokenWithIdTokenRequest.protocolId;
                    authorization = createUnscopedTokenWithIdTokenRequest.authorization;
                } else {
                    idpId = createUnscopedTokenWithIdTokenRequest['idp_id'];
                    protocolId = createUnscopedTokenWithIdTokenRequest['protocol_id'];
                    authorization = createUnscopedTokenWithIdTokenRequest['Authorization'];
                }
            }

        
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling createUnscopedTokenWithIdToken.');
            }
            if (protocolId === null || protocolId === undefined) {
            throw new RequiredError('protocolId','Required parameter protocolId was null or undefined when calling createUnscopedTokenWithIdToken.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }

            options.pathParams = { 'idp_id': idpId,'protocol_id': protocolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除委托。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAgency(deleteAgencyRequest?: DeleteAgencyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3.0/OS-AGENCY/agencies/{agency_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agencyId;

            if (deleteAgencyRequest !== null && deleteAgencyRequest !== undefined) {
                if (deleteAgencyRequest instanceof DeleteAgencyRequest) {
                    agencyId = deleteAgencyRequest.agencyId;
                } else {
                    agencyId = deleteAgencyRequest['agency_id'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling deleteAgency.');
            }

            options.pathParams = { 'agency_id': agencyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除自定义策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCustomPolicy(deleteCustomPolicyRequest?: DeleteCustomPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3.0/OS-ROLE/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let roleId;

            if (deleteCustomPolicyRequest !== null && deleteCustomPolicyRequest !== undefined) {
                if (deleteCustomPolicyRequest instanceof DeleteCustomPolicyRequest) {
                    roleId = deleteCustomPolicyRequest.roleId;
                } else {
                    roleId = deleteCustomPolicyRequest['role_id'];
                }
            }

        
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling deleteCustomPolicy.');
            }

            options.pathParams = { 'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于移除用户组的所有项目服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDomainGroupInheritedRole(deleteDomainGroupInheritedRoleRequest?: DeleteDomainGroupInheritedRoleRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/OS-INHERIT/domains/{domain_id}/groups/{group_id}/roles/{role_id}/inherited_to_projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let groupId;
            
            let roleId;

            if (deleteDomainGroupInheritedRoleRequest !== null && deleteDomainGroupInheritedRoleRequest !== undefined) {
                if (deleteDomainGroupInheritedRoleRequest instanceof DeleteDomainGroupInheritedRoleRequest) {
                    domainId = deleteDomainGroupInheritedRoleRequest.domainId;
                    groupId = deleteDomainGroupInheritedRoleRequest.groupId;
                    roleId = deleteDomainGroupInheritedRoleRequest.roleId;
                } else {
                    domainId = deleteDomainGroupInheritedRoleRequest['domain_id'];
                    groupId = deleteDomainGroupInheritedRoleRequest['group_id'];
                    roleId = deleteDomainGroupInheritedRoleRequest['role_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling deleteDomainGroupInheritedRole.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteDomainGroupInheritedRole.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling deleteDomainGroupInheritedRole.');
            }

            options.pathParams = { 'domain_id': domainId,'group_id': groupId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)添加IAM用户到用户组。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneAddUserToGroup(keystoneAddUserToGroupRequest?: KeystoneAddUserToGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v3/groups/{group_id}/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let userId;

            if (keystoneAddUserToGroupRequest !== null && keystoneAddUserToGroupRequest !== undefined) {
                if (keystoneAddUserToGroupRequest instanceof KeystoneAddUserToGroupRequest) {
                    groupId = keystoneAddUserToGroupRequest.groupId;
                    userId = keystoneAddUserToGroupRequest.userId;
                } else {
                    groupId = keystoneAddUserToGroupRequest['group_id'];
                    userId = keystoneAddUserToGroupRequest['user_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneAddUserToGroup.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling keystoneAddUserToGroup.');
            }

            options.pathParams = { 'group_id': groupId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)为用户组授予全局服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneAssociateGroupWithDomainPermission(keystoneAssociateGroupWithDomainPermissionRequest?: KeystoneAssociateGroupWithDomainPermissionRequest) {
            const options = {
                method: "PUT",
                url: "/v3/domains/{domain_id}/groups/{group_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let groupId;
            
            let roleId;

            if (keystoneAssociateGroupWithDomainPermissionRequest !== null && keystoneAssociateGroupWithDomainPermissionRequest !== undefined) {
                if (keystoneAssociateGroupWithDomainPermissionRequest instanceof KeystoneAssociateGroupWithDomainPermissionRequest) {
                    domainId = keystoneAssociateGroupWithDomainPermissionRequest.domainId;
                    groupId = keystoneAssociateGroupWithDomainPermissionRequest.groupId;
                    roleId = keystoneAssociateGroupWithDomainPermissionRequest.roleId;
                } else {
                    domainId = keystoneAssociateGroupWithDomainPermissionRequest['domain_id'];
                    groupId = keystoneAssociateGroupWithDomainPermissionRequest['group_id'];
                    roleId = keystoneAssociateGroupWithDomainPermissionRequest['role_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling keystoneAssociateGroupWithDomainPermission.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneAssociateGroupWithDomainPermission.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling keystoneAssociateGroupWithDomainPermission.');
            }

            options.pathParams = { 'domain_id': domainId,'group_id': groupId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)为用户组授予项目服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneAssociateGroupWithProjectPermission(keystoneAssociateGroupWithProjectPermissionRequest?: KeystoneAssociateGroupWithProjectPermissionRequest) {
            const options = {
                method: "PUT",
                url: "/v3/projects/{project_id}/groups/{group_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let roleId;

            if (keystoneAssociateGroupWithProjectPermissionRequest !== null && keystoneAssociateGroupWithProjectPermissionRequest !== undefined) {
                if (keystoneAssociateGroupWithProjectPermissionRequest instanceof KeystoneAssociateGroupWithProjectPermissionRequest) {
                    groupId = keystoneAssociateGroupWithProjectPermissionRequest.groupId;
                    roleId = keystoneAssociateGroupWithProjectPermissionRequest.roleId;
                } else {
                    groupId = keystoneAssociateGroupWithProjectPermissionRequest['group_id'];
                    roleId = keystoneAssociateGroupWithProjectPermissionRequest['role_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneAssociateGroupWithProjectPermission.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling keystoneAssociateGroupWithProjectPermission.');
            }

            options.pathParams = { 'group_id': groupId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询用户组是否拥有全局服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneCheckDomainPermissionForGroup(keystoneCheckDomainPermissionForGroupRequest?: KeystoneCheckDomainPermissionForGroupRequest) {
            const options = {
                method: "HEAD",
                url: "/v3/domains/{domain_id}/groups/{group_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let groupId;
            
            let roleId;

            if (keystoneCheckDomainPermissionForGroupRequest !== null && keystoneCheckDomainPermissionForGroupRequest !== undefined) {
                if (keystoneCheckDomainPermissionForGroupRequest instanceof KeystoneCheckDomainPermissionForGroupRequest) {
                    domainId = keystoneCheckDomainPermissionForGroupRequest.domainId;
                    groupId = keystoneCheckDomainPermissionForGroupRequest.groupId;
                    roleId = keystoneCheckDomainPermissionForGroupRequest.roleId;
                } else {
                    domainId = keystoneCheckDomainPermissionForGroupRequest['domain_id'];
                    groupId = keystoneCheckDomainPermissionForGroupRequest['group_id'];
                    roleId = keystoneCheckDomainPermissionForGroupRequest['role_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling keystoneCheckDomainPermissionForGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneCheckDomainPermissionForGroup.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling keystoneCheckDomainPermissionForGroup.');
            }

            options.pathParams = { 'domain_id': domainId,'group_id': groupId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询用户组是否拥有项目服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneCheckProjectPermissionForGroup(keystoneCheckProjectPermissionForGroupRequest?: KeystoneCheckProjectPermissionForGroupRequest) {
            const options = {
                method: "HEAD",
                url: "/v3/projects/{project_id}/groups/{group_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let roleId;

            if (keystoneCheckProjectPermissionForGroupRequest !== null && keystoneCheckProjectPermissionForGroupRequest !== undefined) {
                if (keystoneCheckProjectPermissionForGroupRequest instanceof KeystoneCheckProjectPermissionForGroupRequest) {
                    groupId = keystoneCheckProjectPermissionForGroupRequest.groupId;
                    roleId = keystoneCheckProjectPermissionForGroupRequest.roleId;
                } else {
                    groupId = keystoneCheckProjectPermissionForGroupRequest['group_id'];
                    roleId = keystoneCheckProjectPermissionForGroupRequest['role_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneCheckProjectPermissionForGroup.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling keystoneCheckProjectPermissionForGroup.');
            }

            options.pathParams = { 'group_id': groupId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户是否在用户组中。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneCheckUserInGroup(keystoneCheckUserInGroupRequest?: KeystoneCheckUserInGroupRequest) {
            const options = {
                method: "HEAD",
                url: "/v3/groups/{group_id}/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let userId;

            if (keystoneCheckUserInGroupRequest !== null && keystoneCheckUserInGroupRequest !== undefined) {
                if (keystoneCheckUserInGroupRequest instanceof KeystoneCheckUserInGroupRequest) {
                    groupId = keystoneCheckUserInGroupRequest.groupId;
                    userId = keystoneCheckUserInGroupRequest.userId;
                } else {
                    groupId = keystoneCheckUserInGroupRequest['group_id'];
                    userId = keystoneCheckUserInGroupRequest['user_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneCheckUserInGroup.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling keystoneCheckUserInGroup.');
            }

            options.pathParams = { 'group_id': groupId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询用户组是否拥有所有项目指定权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneCheckroleForGroup(keystoneCheckroleForGroupRequest?: KeystoneCheckroleForGroupRequest) {
            const options = {
                method: "HEAD",
                url: "/v3/OS-INHERIT/domains/{domain_id}/groups/{group_id}/roles/{role_id}/inherited_to_projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let groupId;
            
            let roleId;

            if (keystoneCheckroleForGroupRequest !== null && keystoneCheckroleForGroupRequest !== undefined) {
                if (keystoneCheckroleForGroupRequest instanceof KeystoneCheckroleForGroupRequest) {
                    domainId = keystoneCheckroleForGroupRequest.domainId;
                    groupId = keystoneCheckroleForGroupRequest.groupId;
                    roleId = keystoneCheckroleForGroupRequest.roleId;
                } else {
                    domainId = keystoneCheckroleForGroupRequest['domain_id'];
                    groupId = keystoneCheckroleForGroupRequest['group_id'];
                    roleId = keystoneCheckroleForGroupRequest['role_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling keystoneCheckroleForGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneCheckroleForGroup.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling keystoneCheckroleForGroup.');
            }

            options.pathParams = { 'domain_id': domainId,'group_id': groupId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)创建用户组。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneCreateGroup(keystoneCreateGroupRequest?: KeystoneCreateGroupRequest) {
            const options = {
                method: "POST",
                url: "/v3/groups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (keystoneCreateGroupRequest !== null && keystoneCreateGroupRequest !== undefined) {
                if (keystoneCreateGroupRequest instanceof KeystoneCreateGroupRequest) {
                    body = keystoneCreateGroupRequest.body
                } else {
                    body = keystoneCreateGroupRequest['body'];
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)注册身份提供商。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneCreateIdentityProvider(keystoneCreateIdentityProviderRequest?: KeystoneCreateIdentityProviderRequest) {
            const options = {
                method: "PUT",
                url: "/v3/OS-FEDERATION/identity_providers/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let contentType;
            
            let id;

            if (keystoneCreateIdentityProviderRequest !== null && keystoneCreateIdentityProviderRequest !== undefined) {
                if (keystoneCreateIdentityProviderRequest instanceof KeystoneCreateIdentityProviderRequest) {
                    contentType = keystoneCreateIdentityProviderRequest.contentType;
                    id = keystoneCreateIdentityProviderRequest.id;
                    body = keystoneCreateIdentityProviderRequest.body
                } else {
                    contentType = keystoneCreateIdentityProviderRequest['Content-Type'];
                    id = keystoneCreateIdentityProviderRequest['id'];
                    body = keystoneCreateIdentityProviderRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling keystoneCreateIdentityProvider.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)注册映射。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneCreateMapping(keystoneCreateMappingRequest?: KeystoneCreateMappingRequest) {
            const options = {
                method: "PUT",
                url: "/v3/OS-FEDERATION/mappings/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let id;

            if (keystoneCreateMappingRequest !== null && keystoneCreateMappingRequest !== undefined) {
                if (keystoneCreateMappingRequest instanceof KeystoneCreateMappingRequest) {
                    id = keystoneCreateMappingRequest.id;
                    body = keystoneCreateMappingRequest.body
                } else {
                    id = keystoneCreateMappingRequest['id'];
                    body = keystoneCreateMappingRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling keystoneCreateMapping.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)创建项目。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneCreateProject(keystoneCreateProjectRequest?: KeystoneCreateProjectRequest) {
            const options = {
                method: "POST",
                url: "/v3/projects",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (keystoneCreateProjectRequest !== null && keystoneCreateProjectRequest !== undefined) {
                if (keystoneCreateProjectRequest instanceof KeystoneCreateProjectRequest) {
                    body = keystoneCreateProjectRequest.body
                } else {
                    body = keystoneCreateProjectRequest['body'];
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)注册协议（将协议关联到某一身份提供商）。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneCreateProtocol(keystoneCreateProtocolRequest?: KeystoneCreateProtocolRequest) {
            const options = {
                method: "PUT",
                url: "/v3/OS-FEDERATION/identity_providers/{idp_id}/protocols/{protocol_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let idpId;
            
            let protocolId;

            if (keystoneCreateProtocolRequest !== null && keystoneCreateProtocolRequest !== undefined) {
                if (keystoneCreateProtocolRequest instanceof KeystoneCreateProtocolRequest) {
                    idpId = keystoneCreateProtocolRequest.idpId;
                    protocolId = keystoneCreateProtocolRequest.protocolId;
                    body = keystoneCreateProtocolRequest.body
                } else {
                    idpId = keystoneCreateProtocolRequest['idp_id'];
                    protocolId = keystoneCreateProtocolRequest['protocol_id'];
                    body = keystoneCreateProtocolRequest['body'];
                }
            }

        
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling keystoneCreateProtocol.');
            }
            if (protocolId === null || protocolId === undefined) {
            throw new RequiredError('protocolId','Required parameter protocolId was null or undefined when calling keystoneCreateProtocol.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'idp_id': idpId,'protocol_id': protocolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于通过联邦认证方式获取scoped token。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneCreateScopedToken(keystoneCreateScopedTokenRequest?: KeystoneCreateScopedTokenRequest) {
            const options = {
                method: "POST",
                url: "/v3/auth/tokens",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (keystoneCreateScopedTokenRequest !== null && keystoneCreateScopedTokenRequest !== undefined) {
                if (keystoneCreateScopedTokenRequest instanceof KeystoneCreateScopedTokenRequest) {
                    body = keystoneCreateScopedTokenRequest.body
                } else {
                    body = keystoneCreateScopedTokenRequest['body'];
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除用户组。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneDeleteGroup(keystoneDeleteGroupRequest?: KeystoneDeleteGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (keystoneDeleteGroupRequest !== null && keystoneDeleteGroupRequest !== undefined) {
                if (keystoneDeleteGroupRequest instanceof KeystoneDeleteGroupRequest) {
                    groupId = keystoneDeleteGroupRequest.groupId;
                } else {
                    groupId = keystoneDeleteGroupRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneDeleteGroup.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html) 删除身份提供商。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneDeleteIdentityProvider(keystoneDeleteIdentityProviderRequest?: KeystoneDeleteIdentityProviderRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/OS-FEDERATION/identity_providers/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (keystoneDeleteIdentityProviderRequest !== null && keystoneDeleteIdentityProviderRequest !== undefined) {
                if (keystoneDeleteIdentityProviderRequest instanceof KeystoneDeleteIdentityProviderRequest) {
                    id = keystoneDeleteIdentityProviderRequest.id;
                } else {
                    id = keystoneDeleteIdentityProviderRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling keystoneDeleteIdentityProvider.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除映射。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneDeleteMapping(keystoneDeleteMappingRequest?: KeystoneDeleteMappingRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/OS-FEDERATION/mappings/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (keystoneDeleteMappingRequest !== null && keystoneDeleteMappingRequest !== undefined) {
                if (keystoneDeleteMappingRequest instanceof KeystoneDeleteMappingRequest) {
                    id = keystoneDeleteMappingRequest.id;
                } else {
                    id = keystoneDeleteMappingRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling keystoneDeleteMapping.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除协议。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneDeleteProtocol(keystoneDeleteProtocolRequest?: KeystoneDeleteProtocolRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/OS-FEDERATION/identity_providers/{idp_id}/protocols/{protocol_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let idpId;
            
            let protocolId;

            if (keystoneDeleteProtocolRequest !== null && keystoneDeleteProtocolRequest !== undefined) {
                if (keystoneDeleteProtocolRequest instanceof KeystoneDeleteProtocolRequest) {
                    idpId = keystoneDeleteProtocolRequest.idpId;
                    protocolId = keystoneDeleteProtocolRequest.protocolId;
                } else {
                    idpId = keystoneDeleteProtocolRequest['idp_id'];
                    protocolId = keystoneDeleteProtocolRequest['protocol_id'];
                }
            }

        
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling keystoneDeleteProtocol.');
            }
            if (protocolId === null || protocolId === undefined) {
            throw new RequiredError('protocolId','Required parameter protocolId was null or undefined when calling keystoneDeleteProtocol.');
            }

            options.pathParams = { 'idp_id': idpId,'protocol_id': protocolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于管理员查询用户组所有项目服务权限列表。 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListAllProjectPermissionsForGroup(keystoneListAllProjectPermissionsForGroupRequest?: KeystoneListAllProjectPermissionsForGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3/OS-INHERIT/domains/{domain_id}/groups/{group_id}/roles/inherited_to_projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let groupId;

            if (keystoneListAllProjectPermissionsForGroupRequest !== null && keystoneListAllProjectPermissionsForGroupRequest !== undefined) {
                if (keystoneListAllProjectPermissionsForGroupRequest instanceof KeystoneListAllProjectPermissionsForGroupRequest) {
                    domainId = keystoneListAllProjectPermissionsForGroupRequest.domainId;
                    groupId = keystoneListAllProjectPermissionsForGroupRequest.groupId;
                } else {
                    domainId = keystoneListAllProjectPermissionsForGroupRequest['domain_id'];
                    groupId = keystoneListAllProjectPermissionsForGroupRequest['group_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling keystoneListAllProjectPermissionsForGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneListAllProjectPermissionsForGroup.');
            }

            options.pathParams = { 'domain_id': domainId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询IAM用户可以用访问的账号详情。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListAuthDomains() {
            const options = {
                method: "GET",
                url: "/v3/auth/domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询IAM用户可以访问的项目列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListAuthProjects() {
            const options = {
                method: "GET",
                url: "/v3/auth/projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询全局服务中的用户组权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListDomainPermissionsForGroup(keystoneListDomainPermissionsForGroupRequest?: KeystoneListDomainPermissionsForGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3/domains/{domain_id}/groups/{group_id}/roles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let groupId;

            if (keystoneListDomainPermissionsForGroupRequest !== null && keystoneListDomainPermissionsForGroupRequest !== undefined) {
                if (keystoneListDomainPermissionsForGroupRequest instanceof KeystoneListDomainPermissionsForGroupRequest) {
                    domainId = keystoneListDomainPermissionsForGroupRequest.domainId;
                    groupId = keystoneListDomainPermissionsForGroupRequest.groupId;
                } else {
                    domainId = keystoneListDomainPermissionsForGroupRequest['domain_id'];
                    groupId = keystoneListDomainPermissionsForGroupRequest['group_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling keystoneListDomainPermissionsForGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneListDomainPermissionsForGroup.');
            }

            options.pathParams = { 'domain_id': domainId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询终端节点列表。终端节点用来提供服务访问入口。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListEndpoints(keystoneListEndpointsRequest?: KeystoneListEndpointsRequest) {
            const options = {
                method: "GET",
                url: "/v3/endpoints",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let _interface;
            
            let serviceId;

            if (keystoneListEndpointsRequest !== null && keystoneListEndpointsRequest !== undefined) {
                if (keystoneListEndpointsRequest instanceof KeystoneListEndpointsRequest) {
                    _interface = keystoneListEndpointsRequest._interface;
                    serviceId = keystoneListEndpointsRequest.serviceId;
                } else {
                    _interface = keystoneListEndpointsRequest['interface'];
                    serviceId = keystoneListEndpointsRequest['service_id'];
                }
            }

        
            if (_interface !== null && _interface !== undefined) {
                localVarQueryParameter['interface'] = _interface;
            }
            if (serviceId !== null && serviceId !== undefined) {
                localVarQueryParameter['service_id'] = serviceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询联邦用户可以访问的账号列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * &gt; - 推荐使用[查询IAM用户可以访问的账号详情](https://apiexplorer.developer.huaweicloud.com/apiexplorer/doc?product&#x3D;IAM&amp;api&#x3D;KeystoneQueryAccessibleDomainDetailsToUser)，该接口可以返回相同的响应格式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListFederationDomains() {
            const options = {
                method: "GET",
                url: "/v3/OS-FEDERATION/domains",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询用户组列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListGroups(keystoneListGroupsRequest?: KeystoneListGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v3/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let name;

            if (keystoneListGroupsRequest !== null && keystoneListGroupsRequest !== undefined) {
                if (keystoneListGroupsRequest instanceof KeystoneListGroupsRequest) {
                    domainId = keystoneListGroupsRequest.domainId;
                    name = keystoneListGroupsRequest.name;
                } else {
                    domainId = keystoneListGroupsRequest['domain_id'];
                    name = keystoneListGroupsRequest['name'];
                }
            }

        
            if (domainId !== null && domainId !== undefined) {
                localVarQueryParameter['domain_id'] = domainId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询身份提供商列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListIdentityProviders() {
            const options = {
                method: "GET",
                url: "/v3/OS-FEDERATION/identity_providers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询映射列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListMappings() {
            const options = {
                method: "GET",
                url: "/v3/OS-FEDERATION/mappings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询权限列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListPermissions(keystoneListPermissionsRequest?: KeystoneListPermissionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/roles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let domainId;
            
            let page;
            
            let perPage;
            
            let permissionType;
            
            let displayName;
            
            let type;
            
            let catalog;

            if (keystoneListPermissionsRequest !== null && keystoneListPermissionsRequest !== undefined) {
                if (keystoneListPermissionsRequest instanceof KeystoneListPermissionsRequest) {
                    name = keystoneListPermissionsRequest.name;
                    domainId = keystoneListPermissionsRequest.domainId;
                    page = keystoneListPermissionsRequest.page;
                    perPage = keystoneListPermissionsRequest.perPage;
                    permissionType = keystoneListPermissionsRequest.permissionType;
                    displayName = keystoneListPermissionsRequest.displayName;
                    type = keystoneListPermissionsRequest.type;
                    catalog = keystoneListPermissionsRequest.catalog;
                } else {
                    name = keystoneListPermissionsRequest['name'];
                    domainId = keystoneListPermissionsRequest['domain_id'];
                    page = keystoneListPermissionsRequest['page'];
                    perPage = keystoneListPermissionsRequest['per_page'];
                    permissionType = keystoneListPermissionsRequest['permission_type'];
                    displayName = keystoneListPermissionsRequest['display_name'];
                    type = keystoneListPermissionsRequest['type'];
                    catalog = keystoneListPermissionsRequest['catalog'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (domainId !== null && domainId !== undefined) {
                localVarQueryParameter['domain_id'] = domainId;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (perPage !== null && perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }
            if (permissionType !== null && permissionType !== undefined) {
                localVarQueryParameter['permission_type'] = permissionType;
            }
            if (displayName !== null && displayName !== undefined) {
                localVarQueryParameter['display_name'] = displayName;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (catalog !== null && catalog !== undefined) {
                localVarQueryParameter['catalog'] = catalog;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询项目服务中的用户组权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListProjectPermissionsForGroup(keystoneListProjectPermissionsForGroupRequest?: KeystoneListProjectPermissionsForGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3/projects/{project_id}/groups/{group_id}/roles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (keystoneListProjectPermissionsForGroupRequest !== null && keystoneListProjectPermissionsForGroupRequest !== undefined) {
                if (keystoneListProjectPermissionsForGroupRequest instanceof KeystoneListProjectPermissionsForGroupRequest) {
                    groupId = keystoneListProjectPermissionsForGroupRequest.groupId;
                } else {
                    groupId = keystoneListProjectPermissionsForGroupRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneListProjectPermissionsForGroup.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询指定条件下的项目列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListProjects(keystoneListProjectsRequest?: KeystoneListProjectsRequest) {
            const options = {
                method: "GET",
                url: "/v3/projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let name;
            
            let parentId;
            
            let enabled;
            
            let isDomain;
            
            let page;
            
            let perPage;

            if (keystoneListProjectsRequest !== null && keystoneListProjectsRequest !== undefined) {
                if (keystoneListProjectsRequest instanceof KeystoneListProjectsRequest) {
                    domainId = keystoneListProjectsRequest.domainId;
                    name = keystoneListProjectsRequest.name;
                    parentId = keystoneListProjectsRequest.parentId;
                    enabled = keystoneListProjectsRequest.enabled;
                    isDomain = keystoneListProjectsRequest.isDomain;
                    page = keystoneListProjectsRequest.page;
                    perPage = keystoneListProjectsRequest.perPage;
                } else {
                    domainId = keystoneListProjectsRequest['domain_id'];
                    name = keystoneListProjectsRequest['name'];
                    parentId = keystoneListProjectsRequest['parent_id'];
                    enabled = keystoneListProjectsRequest['enabled'];
                    isDomain = keystoneListProjectsRequest['is_domain'];
                    page = keystoneListProjectsRequest['page'];
                    perPage = keystoneListProjectsRequest['per_page'];
                }
            }

        
            if (domainId !== null && domainId !== undefined) {
                localVarQueryParameter['domain_id'] = domainId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (parentId !== null && parentId !== undefined) {
                localVarQueryParameter['parent_id'] = parentId;
            }
            if (enabled !== null && enabled !== undefined) {
                localVarQueryParameter['enabled'] = enabled;
            }
            if (isDomain !== null && isDomain !== undefined) {
                localVarQueryParameter['is_domain'] = isDomain;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (perPage !== null && perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询指定IAM用户的项目列表，或IAM用户查询自己的项目列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListProjectsForUser(keystoneListProjectsForUserRequest?: KeystoneListProjectsForUserRequest) {
            const options = {
                method: "GET",
                url: "/v3/users/{user_id}/projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (keystoneListProjectsForUserRequest !== null && keystoneListProjectsForUserRequest !== undefined) {
                if (keystoneListProjectsForUserRequest instanceof KeystoneListProjectsForUserRequest) {
                    userId = keystoneListProjectsForUserRequest.userId;
                } else {
                    userId = keystoneListProjectsForUserRequest['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling keystoneListProjectsForUser.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询协议列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListProtocols(keystoneListProtocolsRequest?: KeystoneListProtocolsRequest) {
            const options = {
                method: "GET",
                url: "/v3/OS-FEDERATION/identity_providers/{idp_id}/protocols",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let idpId;

            if (keystoneListProtocolsRequest !== null && keystoneListProtocolsRequest !== undefined) {
                if (keystoneListProtocolsRequest instanceof KeystoneListProtocolsRequest) {
                    idpId = keystoneListProtocolsRequest.idpId;
                } else {
                    idpId = keystoneListProtocolsRequest['idp_id'];
                }
            }

        
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling keystoneListProtocols.');
            }

            options.pathParams = { 'idp_id': idpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询区域列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListRegions() {
            const options = {
                method: "GET",
                url: "/v3/regions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询服务列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListServices(keystoneListServicesRequest?: KeystoneListServicesRequest) {
            const options = {
                method: "GET",
                url: "/v3/services",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;

            if (keystoneListServicesRequest !== null && keystoneListServicesRequest !== undefined) {
                if (keystoneListServicesRequest instanceof KeystoneListServicesRequest) {
                    type = keystoneListServicesRequest.type;
                } else {
                    type = keystoneListServicesRequest['type'];
                }
            }

        
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询用户组中所包含的IAM用户。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListUsersForGroupByAdmin(keystoneListUsersForGroupByAdminRequest?: KeystoneListUsersForGroupByAdminRequest) {
            const options = {
                method: "GET",
                url: "/v3/groups/{group_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (keystoneListUsersForGroupByAdminRequest !== null && keystoneListUsersForGroupByAdminRequest !== undefined) {
                if (keystoneListUsersForGroupByAdminRequest instanceof KeystoneListUsersForGroupByAdminRequest) {
                    groupId = keystoneListUsersForGroupByAdminRequest.groupId;
                } else {
                    groupId = keystoneListUsersForGroupByAdminRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneListUsersForGroupByAdmin.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询Keystone API的版本信息。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListVersions() {
            const options = {
                method: "GET",
                url: "/",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)移除用户组的全局服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneRemoveDomainPermissionFromGroup(keystoneRemoveDomainPermissionFromGroupRequest?: KeystoneRemoveDomainPermissionFromGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/domains/{domain_id}/groups/{group_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let groupId;
            
            let roleId;

            if (keystoneRemoveDomainPermissionFromGroupRequest !== null && keystoneRemoveDomainPermissionFromGroupRequest !== undefined) {
                if (keystoneRemoveDomainPermissionFromGroupRequest instanceof KeystoneRemoveDomainPermissionFromGroupRequest) {
                    domainId = keystoneRemoveDomainPermissionFromGroupRequest.domainId;
                    groupId = keystoneRemoveDomainPermissionFromGroupRequest.groupId;
                    roleId = keystoneRemoveDomainPermissionFromGroupRequest.roleId;
                } else {
                    domainId = keystoneRemoveDomainPermissionFromGroupRequest['domain_id'];
                    groupId = keystoneRemoveDomainPermissionFromGroupRequest['group_id'];
                    roleId = keystoneRemoveDomainPermissionFromGroupRequest['role_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling keystoneRemoveDomainPermissionFromGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneRemoveDomainPermissionFromGroup.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling keystoneRemoveDomainPermissionFromGroup.');
            }

            options.pathParams = { 'domain_id': domainId,'group_id': groupId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)移除用户组的项目服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneRemoveProjectPermissionFromGroup(keystoneRemoveProjectPermissionFromGroupRequest?: KeystoneRemoveProjectPermissionFromGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/projects/{project_id}/groups/{group_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let roleId;

            if (keystoneRemoveProjectPermissionFromGroupRequest !== null && keystoneRemoveProjectPermissionFromGroupRequest !== undefined) {
                if (keystoneRemoveProjectPermissionFromGroupRequest instanceof KeystoneRemoveProjectPermissionFromGroupRequest) {
                    groupId = keystoneRemoveProjectPermissionFromGroupRequest.groupId;
                    roleId = keystoneRemoveProjectPermissionFromGroupRequest.roleId;
                } else {
                    groupId = keystoneRemoveProjectPermissionFromGroupRequest['group_id'];
                    roleId = keystoneRemoveProjectPermissionFromGroupRequest['role_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneRemoveProjectPermissionFromGroup.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling keystoneRemoveProjectPermissionFromGroup.');
            }

            options.pathParams = { 'group_id': groupId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)移除用户组中的IAM用户。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneRemoveUserFromGroup(keystoneRemoveUserFromGroupRequest?: KeystoneRemoveUserFromGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/groups/{group_id}/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let userId;

            if (keystoneRemoveUserFromGroupRequest !== null && keystoneRemoveUserFromGroupRequest !== undefined) {
                if (keystoneRemoveUserFromGroupRequest instanceof KeystoneRemoveUserFromGroupRequest) {
                    groupId = keystoneRemoveUserFromGroupRequest.groupId;
                    userId = keystoneRemoveUserFromGroupRequest.userId;
                } else {
                    groupId = keystoneRemoveUserFromGroupRequest['group_id'];
                    userId = keystoneRemoveUserFromGroupRequest['user_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneRemoveUserFromGroup.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling keystoneRemoveUserFromGroup.');
            }

            options.pathParams = { 'group_id': groupId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询请求头中X-Auth-Token对应的服务目录。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneShowCatalog() {
            const options = {
                method: "GET",
                url: "/v3/auth/catalog",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询终端节点详情。终端节点用来提供服务访问入口。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneShowEndpoint(keystoneShowEndpointRequest?: KeystoneShowEndpointRequest) {
            const options = {
                method: "GET",
                url: "/v3/endpoints/{endpoint_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let endpointId;

            if (keystoneShowEndpointRequest !== null && keystoneShowEndpointRequest !== undefined) {
                if (keystoneShowEndpointRequest instanceof KeystoneShowEndpointRequest) {
                    endpointId = keystoneShowEndpointRequest.endpointId;
                } else {
                    endpointId = keystoneShowEndpointRequest['endpoint_id'];
                }
            }

        
            if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('endpointId','Required parameter endpointId was null or undefined when calling keystoneShowEndpoint.');
            }

            options.pathParams = { 'endpoint_id': endpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询用户组详情。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneShowGroup(keystoneShowGroupRequest?: KeystoneShowGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (keystoneShowGroupRequest !== null && keystoneShowGroupRequest !== undefined) {
                if (keystoneShowGroupRequest instanceof KeystoneShowGroupRequest) {
                    groupId = keystoneShowGroupRequest.groupId;
                } else {
                    groupId = keystoneShowGroupRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneShowGroup.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询身份提供商详情。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneShowIdentityProvider(keystoneShowIdentityProviderRequest?: KeystoneShowIdentityProviderRequest) {
            const options = {
                method: "GET",
                url: "/v3/OS-FEDERATION/identity_providers/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (keystoneShowIdentityProviderRequest !== null && keystoneShowIdentityProviderRequest !== undefined) {
                if (keystoneShowIdentityProviderRequest instanceof KeystoneShowIdentityProviderRequest) {
                    id = keystoneShowIdentityProviderRequest.id;
                } else {
                    id = keystoneShowIdentityProviderRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling keystoneShowIdentityProvider.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询映射详情。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneShowMapping(keystoneShowMappingRequest?: KeystoneShowMappingRequest) {
            const options = {
                method: "GET",
                url: "/v3/OS-FEDERATION/mappings/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (keystoneShowMappingRequest !== null && keystoneShowMappingRequest !== undefined) {
                if (keystoneShowMappingRequest instanceof KeystoneShowMappingRequest) {
                    id = keystoneShowMappingRequest.id;
                } else {
                    id = keystoneShowMappingRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling keystoneShowMapping.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询权限详情。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneShowPermission(keystoneShowPermissionRequest?: KeystoneShowPermissionRequest) {
            const options = {
                method: "GET",
                url: "/v3/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let roleId;

            if (keystoneShowPermissionRequest !== null && keystoneShowPermissionRequest !== undefined) {
                if (keystoneShowPermissionRequest instanceof KeystoneShowPermissionRequest) {
                    roleId = keystoneShowPermissionRequest.roleId;
                } else {
                    roleId = keystoneShowPermissionRequest['role_id'];
                }
            }

        
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling keystoneShowPermission.');
            }

            options.pathParams = { 'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询项目详情。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneShowProject() {
            const options = {
                method: "GET",
                url: "/v3/projects/{project_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询协议详情。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneShowProtocol(keystoneShowProtocolRequest?: KeystoneShowProtocolRequest) {
            const options = {
                method: "GET",
                url: "/v3/OS-FEDERATION/identity_providers/{idp_id}/protocols/{protocol_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let idpId;
            
            let protocolId;

            if (keystoneShowProtocolRequest !== null && keystoneShowProtocolRequest !== undefined) {
                if (keystoneShowProtocolRequest instanceof KeystoneShowProtocolRequest) {
                    idpId = keystoneShowProtocolRequest.idpId;
                    protocolId = keystoneShowProtocolRequest.protocolId;
                } else {
                    idpId = keystoneShowProtocolRequest['idp_id'];
                    protocolId = keystoneShowProtocolRequest['protocol_id'];
                }
            }

        
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling keystoneShowProtocol.');
            }
            if (protocolId === null || protocolId === undefined) {
            throw new RequiredError('protocolId','Required parameter protocolId was null or undefined when calling keystoneShowProtocol.');
            }

            options.pathParams = { 'idp_id': idpId,'protocol_id': protocolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询区域详情。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneShowRegion(keystoneShowRegionRequest?: KeystoneShowRegionRequest) {
            const options = {
                method: "GET",
                url: "/v3/regions/{region_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let regionId;

            if (keystoneShowRegionRequest !== null && keystoneShowRegionRequest !== undefined) {
                if (keystoneShowRegionRequest instanceof KeystoneShowRegionRequest) {
                    regionId = keystoneShowRegionRequest.regionId;
                } else {
                    regionId = keystoneShowRegionRequest['region_id'];
                }
            }

        
            if (regionId === null || regionId === undefined) {
            throw new RequiredError('regionId','Required parameter regionId was null or undefined when calling keystoneShowRegion.');
            }

            options.pathParams = { 'region_id': regionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询账号密码强度策略，查询结果包括密码强度策略的正则表达式及其描述。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneShowSecurityCompliance(keystoneShowSecurityComplianceRequest?: KeystoneShowSecurityComplianceRequest) {
            const options = {
                method: "GET",
                url: "/v3/domains/{domain_id}/config/security_compliance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;

            if (keystoneShowSecurityComplianceRequest !== null && keystoneShowSecurityComplianceRequest !== undefined) {
                if (keystoneShowSecurityComplianceRequest instanceof KeystoneShowSecurityComplianceRequest) {
                    domainId = keystoneShowSecurityComplianceRequest.domainId;
                } else {
                    domainId = keystoneShowSecurityComplianceRequest['domain_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling keystoneShowSecurityCompliance.');
            }

            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于按条件查询账号密码强度策略，查询结果包括密码强度策略的正则表达式及其描述。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneShowSecurityComplianceByOption(keystoneShowSecurityComplianceByOptionRequest?: KeystoneShowSecurityComplianceByOptionRequest) {
            const options = {
                method: "GET",
                url: "/v3/domains/{domain_id}/config/security_compliance/{option}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let option;

            if (keystoneShowSecurityComplianceByOptionRequest !== null && keystoneShowSecurityComplianceByOptionRequest !== undefined) {
                if (keystoneShowSecurityComplianceByOptionRequest instanceof KeystoneShowSecurityComplianceByOptionRequest) {
                    domainId = keystoneShowSecurityComplianceByOptionRequest.domainId;
                    option = keystoneShowSecurityComplianceByOptionRequest.option;
                } else {
                    domainId = keystoneShowSecurityComplianceByOptionRequest['domain_id'];
                    option = keystoneShowSecurityComplianceByOptionRequest['option'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling keystoneShowSecurityComplianceByOption.');
            }
            if (option === null || option === undefined) {
            throw new RequiredError('option','Required parameter option was null or undefined when calling keystoneShowSecurityComplianceByOption.');
            }

            options.pathParams = { 'domain_id': domainId,'option': option, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询服务详情。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneShowService(keystoneShowServiceRequest?: KeystoneShowServiceRequest) {
            const options = {
                method: "GET",
                url: "/v3/services/{service_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serviceId;

            if (keystoneShowServiceRequest !== null && keystoneShowServiceRequest !== undefined) {
                if (keystoneShowServiceRequest instanceof KeystoneShowServiceRequest) {
                    serviceId = keystoneShowServiceRequest.serviceId;
                } else {
                    serviceId = keystoneShowServiceRequest['service_id'];
                }
            }

        
            if (serviceId === null || serviceId === undefined) {
            throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling keystoneShowService.');
            }

            options.pathParams = { 'service_id': serviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询Keystone API的3.0版本的信息。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneShowVersion() {
            const options = {
                method: "GET",
                url: "/v3",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)更新用户组信息。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneUpdateGroup(keystoneUpdateGroupRequest?: KeystoneUpdateGroupRequest) {
            const options = {
                method: "PATCH",
                url: "/v3/groups/{group_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let groupId;

            if (keystoneUpdateGroupRequest !== null && keystoneUpdateGroupRequest !== undefined) {
                if (keystoneUpdateGroupRequest instanceof KeystoneUpdateGroupRequest) {
                    groupId = keystoneUpdateGroupRequest.groupId;
                    body = keystoneUpdateGroupRequest.body
                } else {
                    groupId = keystoneUpdateGroupRequest['group_id'];
                    body = keystoneUpdateGroupRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling keystoneUpdateGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)更新身份提供商。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneUpdateIdentityProvider(keystoneUpdateIdentityProviderRequest?: KeystoneUpdateIdentityProviderRequest) {
            const options = {
                method: "PATCH",
                url: "/v3/OS-FEDERATION/identity_providers/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let id;

            if (keystoneUpdateIdentityProviderRequest !== null && keystoneUpdateIdentityProviderRequest !== undefined) {
                if (keystoneUpdateIdentityProviderRequest instanceof KeystoneUpdateIdentityProviderRequest) {
                    id = keystoneUpdateIdentityProviderRequest.id;
                    body = keystoneUpdateIdentityProviderRequest.body
                } else {
                    id = keystoneUpdateIdentityProviderRequest['id'];
                    body = keystoneUpdateIdentityProviderRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling keystoneUpdateIdentityProvider.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)更新映射。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneUpdateMapping(keystoneUpdateMappingRequest?: KeystoneUpdateMappingRequest) {
            const options = {
                method: "PATCH",
                url: "/v3/OS-FEDERATION/mappings/{id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let id;

            if (keystoneUpdateMappingRequest !== null && keystoneUpdateMappingRequest !== undefined) {
                if (keystoneUpdateMappingRequest instanceof KeystoneUpdateMappingRequest) {
                    id = keystoneUpdateMappingRequest.id;
                    body = keystoneUpdateMappingRequest.body
                } else {
                    id = keystoneUpdateMappingRequest['id'];
                    body = keystoneUpdateMappingRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling keystoneUpdateMapping.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改项目信息。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneUpdateProject(keystoneUpdateProjectRequest?: KeystoneUpdateProjectRequest) {
            const options = {
                method: "PATCH",
                url: "/v3/projects/{project_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (keystoneUpdateProjectRequest !== null && keystoneUpdateProjectRequest !== undefined) {
                if (keystoneUpdateProjectRequest instanceof KeystoneUpdateProjectRequest) {
                    body = keystoneUpdateProjectRequest.body
                } else {
                    body = keystoneUpdateProjectRequest['body'];
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)更新协议。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneUpdateProtocol(keystoneUpdateProtocolRequest?: KeystoneUpdateProtocolRequest) {
            const options = {
                method: "PATCH",
                url: "/v3/OS-FEDERATION/identity_providers/{idp_id}/protocols/{protocol_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let idpId;
            
            let protocolId;

            if (keystoneUpdateProtocolRequest !== null && keystoneUpdateProtocolRequest !== undefined) {
                if (keystoneUpdateProtocolRequest instanceof KeystoneUpdateProtocolRequest) {
                    idpId = keystoneUpdateProtocolRequest.idpId;
                    protocolId = keystoneUpdateProtocolRequest.protocolId;
                    body = keystoneUpdateProtocolRequest.body
                } else {
                    idpId = keystoneUpdateProtocolRequest['idp_id'];
                    protocolId = keystoneUpdateProtocolRequest['protocol_id'];
                    body = keystoneUpdateProtocolRequest['body'];
                }
            }

        
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling keystoneUpdateProtocol.');
            }
            if (protocolId === null || protocolId === undefined) {
            throw new RequiredError('protocolId','Required parameter protocolId was null or undefined when calling keystoneUpdateProtocol.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'idp_id': idpId,'protocol_id': protocolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询指定条件下的委托列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAgencies(listAgenciesRequest?: ListAgenciesRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-AGENCY/agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let trustDomainId;
            
            let name;

            if (listAgenciesRequest !== null && listAgenciesRequest !== undefined) {
                if (listAgenciesRequest instanceof ListAgenciesRequest) {
                    domainId = listAgenciesRequest.domainId;
                    trustDomainId = listAgenciesRequest.trustDomainId;
                    name = listAgenciesRequest.name;
                } else {
                    domainId = listAgenciesRequest['domain_id'];
                    trustDomainId = listAgenciesRequest['trust_domain_id'];
                    name = listAgenciesRequest['name'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
                throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listAgencies.');
            }
            if (domainId !== null && domainId !== undefined) {
                localVarQueryParameter['domain_id'] = domainId;
            }
            if (trustDomainId !== null && trustDomainId !== undefined) {
                localVarQueryParameter['trust_domain_id'] = trustDomainId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询委托所有项目服务权限列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllProjectsPermissionsForAgency(listAllProjectsPermissionsForAgencyRequest?: ListAllProjectsPermissionsForAgencyRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-INHERIT/domains/{domain_id}/agencies/{agency_id}/roles/inherited_to_projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agencyId;
            
            let domainId;

            if (listAllProjectsPermissionsForAgencyRequest !== null && listAllProjectsPermissionsForAgencyRequest !== undefined) {
                if (listAllProjectsPermissionsForAgencyRequest instanceof ListAllProjectsPermissionsForAgencyRequest) {
                    agencyId = listAllProjectsPermissionsForAgencyRequest.agencyId;
                    domainId = listAllProjectsPermissionsForAgencyRequest.domainId;
                } else {
                    agencyId = listAllProjectsPermissionsForAgencyRequest['agency_id'];
                    domainId = listAllProjectsPermissionsForAgencyRequest['domain_id'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling listAllProjectsPermissionsForAgency.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listAllProjectsPermissionsForAgency.');
            }

            options.pathParams = { 'agency_id': agencyId,'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询自定义策略列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCustomPolicies(listCustomPoliciesRequest?: ListCustomPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-ROLE/roles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let page;
            
            let perPage;

            if (listCustomPoliciesRequest !== null && listCustomPoliciesRequest !== undefined) {
                if (listCustomPoliciesRequest instanceof ListCustomPoliciesRequest) {
                    page = listCustomPoliciesRequest.page;
                    perPage = listCustomPoliciesRequest.perPage;
                } else {
                    page = listCustomPoliciesRequest['page'];
                    perPage = listCustomPoliciesRequest['per_page'];
                }
            }

        
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (perPage !== null && perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询全局服务中的委托权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainPermissionsForAgency(listDomainPermissionsForAgencyRequest?: ListDomainPermissionsForAgencyRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-AGENCY/domains/{domain_id}/agencies/{agency_id}/roles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let agencyId;

            if (listDomainPermissionsForAgencyRequest !== null && listDomainPermissionsForAgencyRequest !== undefined) {
                if (listDomainPermissionsForAgencyRequest instanceof ListDomainPermissionsForAgencyRequest) {
                    domainId = listDomainPermissionsForAgencyRequest.domainId;
                    agencyId = listDomainPermissionsForAgencyRequest.agencyId;
                } else {
                    domainId = listDomainPermissionsForAgencyRequest['domain_id'];
                    agencyId = listDomainPermissionsForAgencyRequest['agency_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listDomainPermissionsForAgency.');
            }
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling listDomainPermissionsForAgency.');
            }

            options.pathParams = { 'domain_id': domainId,'agency_id': agencyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可用于查询用户组所关联的企业项目。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnterpriseProjectsForGroup(listEnterpriseProjectsForGroupRequest?: ListEnterpriseProjectsForGroupRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-PERMISSION/groups/{group_id}/enterprise-projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (listEnterpriseProjectsForGroupRequest !== null && listEnterpriseProjectsForGroupRequest !== undefined) {
                if (listEnterpriseProjectsForGroupRequest instanceof ListEnterpriseProjectsForGroupRequest) {
                    groupId = listEnterpriseProjectsForGroupRequest.groupId;
                } else {
                    groupId = listEnterpriseProjectsForGroupRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listEnterpriseProjectsForGroup.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可用于查询用户所关联的企业项目。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnterpriseProjectsForUser(listEnterpriseProjectsForUserRequest?: ListEnterpriseProjectsForUserRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-PERMISSION/users/{user_id}/enterprise-projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (listEnterpriseProjectsForUserRequest !== null && listEnterpriseProjectsForUserRequest !== undefined) {
                if (listEnterpriseProjectsForUserRequest instanceof ListEnterpriseProjectsForUserRequest) {
                    userId = listEnterpriseProjectsForUserRequest.userId;
                } else {
                    userId = listEnterpriseProjectsForUserRequest['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling listEnterpriseProjectsForUser.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可用于查询企业项目关联的用户组。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGroupsForEnterpriseProject(listGroupsForEnterpriseProjectRequest?: ListGroupsForEnterpriseProjectRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-PERMISSION/enterprise-projects/{enterprise_project_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let enterpriseProjectId;

            if (listGroupsForEnterpriseProjectRequest !== null && listGroupsForEnterpriseProjectRequest !== undefined) {
                if (listGroupsForEnterpriseProjectRequest instanceof ListGroupsForEnterpriseProjectRequest) {
                    enterpriseProjectId = listGroupsForEnterpriseProjectRequest.enterpriseProjectId;
                } else {
                    enterpriseProjectId = listGroupsForEnterpriseProjectRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling listGroupsForEnterpriseProject.');
            }

            options.pathParams = { 'enterprise_project_id': enterpriseProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询项目服务中的委托权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectPermissionsForAgency(listProjectPermissionsForAgencyRequest?: ListProjectPermissionsForAgencyRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-AGENCY/projects/{project_id}/agencies/{agency_id}/roles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agencyId;

            if (listProjectPermissionsForAgencyRequest !== null && listProjectPermissionsForAgencyRequest !== undefined) {
                if (listProjectPermissionsForAgencyRequest instanceof ListProjectPermissionsForAgencyRequest) {
                    agencyId = listProjectPermissionsForAgencyRequest.agencyId;
                } else {
                    agencyId = listProjectPermissionsForAgencyRequest['agency_id'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling listProjectPermissionsForAgency.');
            }

            options.pathParams = { 'agency_id': agencyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可用于查询企业项目已关联用户组的权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRolesForGroupOnEnterpriseProject(listRolesForGroupOnEnterpriseProjectRequest?: ListRolesForGroupOnEnterpriseProjectRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-PERMISSION/enterprise-projects/{enterprise_project_id}/groups/{group_id}/roles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let enterpriseProjectId;
            
            let groupId;

            if (listRolesForGroupOnEnterpriseProjectRequest !== null && listRolesForGroupOnEnterpriseProjectRequest !== undefined) {
                if (listRolesForGroupOnEnterpriseProjectRequest instanceof ListRolesForGroupOnEnterpriseProjectRequest) {
                    enterpriseProjectId = listRolesForGroupOnEnterpriseProjectRequest.enterpriseProjectId;
                    groupId = listRolesForGroupOnEnterpriseProjectRequest.groupId;
                } else {
                    enterpriseProjectId = listRolesForGroupOnEnterpriseProjectRequest['enterprise_project_id'];
                    groupId = listRolesForGroupOnEnterpriseProjectRequest['group_id'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling listRolesForGroupOnEnterpriseProject.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listRolesForGroupOnEnterpriseProject.');
            }

            options.pathParams = { 'enterprise_project_id': enterpriseProjectId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可用于查询企业项目直接关联用户的权限。
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRolesForUserOnEnterpriseProject(listRolesForUserOnEnterpriseProjectRequest?: ListRolesForUserOnEnterpriseProjectRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-PERMISSION/enterprise-projects/{enterprise_project_id}/users/{user_id}/roles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let enterpriseProjectId;
            
            let userId;

            if (listRolesForUserOnEnterpriseProjectRequest !== null && listRolesForUserOnEnterpriseProjectRequest !== undefined) {
                if (listRolesForUserOnEnterpriseProjectRequest instanceof ListRolesForUserOnEnterpriseProjectRequest) {
                    enterpriseProjectId = listRolesForUserOnEnterpriseProjectRequest.enterpriseProjectId;
                    userId = listRolesForUserOnEnterpriseProjectRequest.userId;
                } else {
                    enterpriseProjectId = listRolesForUserOnEnterpriseProjectRequest['enterprise_project_id'];
                    userId = listRolesForUserOnEnterpriseProjectRequest['user_id'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling listRolesForUserOnEnterpriseProject.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling listRolesForUserOnEnterpriseProject.');
            }

            options.pathParams = { 'enterprise_project_id': enterpriseProjectId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可用于查询企业项目直接关联的用户。
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUsersForEnterpriseProject(listUsersForEnterpriseProjectRequest?: ListUsersForEnterpriseProjectRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-PERMISSION/enterprise-projects/{enterprise_project_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let enterpriseProjectId;

            if (listUsersForEnterpriseProjectRequest !== null && listUsersForEnterpriseProjectRequest !== undefined) {
                if (listUsersForEnterpriseProjectRequest instanceof ListUsersForEnterpriseProjectRequest) {
                    enterpriseProjectId = listUsersForEnterpriseProjectRequest.enterpriseProjectId;
                } else {
                    enterpriseProjectId = listUsersForEnterpriseProjectRequest['enterprise_project_id'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling listUsersForEnterpriseProject.');
            }

            options.pathParams = { 'enterprise_project_id': enterpriseProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)移除委托的所有项目服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeAllProjectsPermissionFromAgency(removeAllProjectsPermissionFromAgencyRequest?: RemoveAllProjectsPermissionFromAgencyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3.0/OS-INHERIT/domains/{domain_id}/agencies/{agency_id}/roles/{role_id}/inherited_to_projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agencyId;
            
            let domainId;
            
            let roleId;

            if (removeAllProjectsPermissionFromAgencyRequest !== null && removeAllProjectsPermissionFromAgencyRequest !== undefined) {
                if (removeAllProjectsPermissionFromAgencyRequest instanceof RemoveAllProjectsPermissionFromAgencyRequest) {
                    agencyId = removeAllProjectsPermissionFromAgencyRequest.agencyId;
                    domainId = removeAllProjectsPermissionFromAgencyRequest.domainId;
                    roleId = removeAllProjectsPermissionFromAgencyRequest.roleId;
                } else {
                    agencyId = removeAllProjectsPermissionFromAgencyRequest['agency_id'];
                    domainId = removeAllProjectsPermissionFromAgencyRequest['domain_id'];
                    roleId = removeAllProjectsPermissionFromAgencyRequest['role_id'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling removeAllProjectsPermissionFromAgency.');
            }
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling removeAllProjectsPermissionFromAgency.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling removeAllProjectsPermissionFromAgency.');
            }

            options.pathParams = { 'agency_id': agencyId,'domain_id': domainId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)移除委托的全局服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeDomainPermissionFromAgency(removeDomainPermissionFromAgencyRequest?: RemoveDomainPermissionFromAgencyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3.0/OS-AGENCY/domains/{domain_id}/agencies/{agency_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let agencyId;
            
            let roleId;

            if (removeDomainPermissionFromAgencyRequest !== null && removeDomainPermissionFromAgencyRequest !== undefined) {
                if (removeDomainPermissionFromAgencyRequest instanceof RemoveDomainPermissionFromAgencyRequest) {
                    domainId = removeDomainPermissionFromAgencyRequest.domainId;
                    agencyId = removeDomainPermissionFromAgencyRequest.agencyId;
                    roleId = removeDomainPermissionFromAgencyRequest.roleId;
                } else {
                    domainId = removeDomainPermissionFromAgencyRequest['domain_id'];
                    agencyId = removeDomainPermissionFromAgencyRequest['agency_id'];
                    roleId = removeDomainPermissionFromAgencyRequest['role_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling removeDomainPermissionFromAgency.');
            }
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling removeDomainPermissionFromAgency.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling removeDomainPermissionFromAgency.');
            }

            options.pathParams = { 'domain_id': domainId,'agency_id': agencyId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)移除委托的项目服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeProjectPermissionFromAgency(removeProjectPermissionFromAgencyRequest?: RemoveProjectPermissionFromAgencyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3.0/OS-AGENCY/projects/{project_id}/agencies/{agency_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agencyId;
            
            let roleId;

            if (removeProjectPermissionFromAgencyRequest !== null && removeProjectPermissionFromAgencyRequest !== undefined) {
                if (removeProjectPermissionFromAgencyRequest instanceof RemoveProjectPermissionFromAgencyRequest) {
                    agencyId = removeProjectPermissionFromAgencyRequest.agencyId;
                    roleId = removeProjectPermissionFromAgencyRequest.roleId;
                } else {
                    agencyId = removeProjectPermissionFromAgencyRequest['agency_id'];
                    roleId = removeProjectPermissionFromAgencyRequest['role_id'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling removeProjectPermissionFromAgency.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling removeProjectPermissionFromAgency.');
            }

            options.pathParams = { 'agency_id': agencyId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除企业项目关联用户组的权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        revokeRoleFromGroupOnEnterpriseProject(revokeRoleFromGroupOnEnterpriseProjectRequest?: RevokeRoleFromGroupOnEnterpriseProjectRequest) {
            const options = {
                method: "DELETE",
                url: "/v3.0/OS-PERMISSION/enterprise-projects/{enterprise_project_id}/groups/{group_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let enterpriseProjectId;
            
            let groupId;
            
            let roleId;

            if (revokeRoleFromGroupOnEnterpriseProjectRequest !== null && revokeRoleFromGroupOnEnterpriseProjectRequest !== undefined) {
                if (revokeRoleFromGroupOnEnterpriseProjectRequest instanceof RevokeRoleFromGroupOnEnterpriseProjectRequest) {
                    enterpriseProjectId = revokeRoleFromGroupOnEnterpriseProjectRequest.enterpriseProjectId;
                    groupId = revokeRoleFromGroupOnEnterpriseProjectRequest.groupId;
                    roleId = revokeRoleFromGroupOnEnterpriseProjectRequest.roleId;
                } else {
                    enterpriseProjectId = revokeRoleFromGroupOnEnterpriseProjectRequest['enterprise_project_id'];
                    groupId = revokeRoleFromGroupOnEnterpriseProjectRequest['group_id'];
                    roleId = revokeRoleFromGroupOnEnterpriseProjectRequest['role_id'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling revokeRoleFromGroupOnEnterpriseProject.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling revokeRoleFromGroupOnEnterpriseProject.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling revokeRoleFromGroupOnEnterpriseProject.');
            }

            options.pathParams = { 'enterprise_project_id': enterpriseProjectId,'group_id': groupId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除企业项目直接关联用户的权限。
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        revokeRoleFromUserOnEnterpriseProject(revokeRoleFromUserOnEnterpriseProjectRequest?: RevokeRoleFromUserOnEnterpriseProjectRequest) {
            const options = {
                method: "DELETE",
                url: "/v3.0/OS-PERMISSION/enterprise-projects/{enterprise_project_id}/users/{user_id}/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let enterpriseProjectId;
            
            let userId;
            
            let roleId;

            if (revokeRoleFromUserOnEnterpriseProjectRequest !== null && revokeRoleFromUserOnEnterpriseProjectRequest !== undefined) {
                if (revokeRoleFromUserOnEnterpriseProjectRequest instanceof RevokeRoleFromUserOnEnterpriseProjectRequest) {
                    enterpriseProjectId = revokeRoleFromUserOnEnterpriseProjectRequest.enterpriseProjectId;
                    userId = revokeRoleFromUserOnEnterpriseProjectRequest.userId;
                    roleId = revokeRoleFromUserOnEnterpriseProjectRequest.roleId;
                } else {
                    enterpriseProjectId = revokeRoleFromUserOnEnterpriseProjectRequest['enterprise_project_id'];
                    userId = revokeRoleFromUserOnEnterpriseProjectRequest['user_id'];
                    roleId = revokeRoleFromUserOnEnterpriseProjectRequest['role_id'];
                }
            }

        
            if (enterpriseProjectId === null || enterpriseProjectId === undefined) {
            throw new RequiredError('enterpriseProjectId','Required parameter enterpriseProjectId was null or undefined when calling revokeRoleFromUserOnEnterpriseProject.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling revokeRoleFromUserOnEnterpriseProject.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling revokeRoleFromUserOnEnterpriseProject.');
            }

            options.pathParams = { 'enterprise_project_id': enterpriseProjectId,'user_id': userId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询委托详情。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAgency(showAgencyRequest?: ShowAgencyRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-AGENCY/agencies/{agency_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let agencyId;

            if (showAgencyRequest !== null && showAgencyRequest !== undefined) {
                if (showAgencyRequest instanceof ShowAgencyRequest) {
                    agencyId = showAgencyRequest.agencyId;
                } else {
                    agencyId = showAgencyRequest['agency_id'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling showAgency.');
            }

            options.pathParams = { 'agency_id': agencyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询自定义策略详情。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCustomPolicy(showCustomPolicyRequest?: ShowCustomPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-ROLE/roles/{role_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let roleId;

            if (showCustomPolicyRequest !== null && showCustomPolicyRequest !== undefined) {
                if (showCustomPolicyRequest instanceof ShowCustomPolicyRequest) {
                    roleId = showCustomPolicyRequest.roleId;
                } else {
                    roleId = showCustomPolicyRequest['role_id'];
                }
            }

        
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling showCustomPolicy.');
            }

            options.pathParams = { 'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询账号接口访问控制策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainApiAclPolicy(showDomainApiAclPolicyRequest?: ShowDomainApiAclPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-SECURITYPOLICY/domains/{domain_id}/api-acl-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;

            if (showDomainApiAclPolicyRequest !== null && showDomainApiAclPolicyRequest !== undefined) {
                if (showDomainApiAclPolicyRequest instanceof ShowDomainApiAclPolicyRequest) {
                    domainId = showDomainApiAclPolicyRequest.domainId;
                } else {
                    domainId = showDomainApiAclPolicyRequest['domain_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showDomainApiAclPolicy.');
            }

            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询账号控制台访问控制策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainConsoleAclPolicy(showDomainConsoleAclPolicyRequest?: ShowDomainConsoleAclPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-SECURITYPOLICY/domains/{domain_id}/console-acl-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;

            if (showDomainConsoleAclPolicyRequest !== null && showDomainConsoleAclPolicyRequest !== undefined) {
                if (showDomainConsoleAclPolicyRequest instanceof ShowDomainConsoleAclPolicyRequest) {
                    domainId = showDomainConsoleAclPolicyRequest.domainId;
                } else {
                    domainId = showDomainConsoleAclPolicyRequest['domain_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showDomainConsoleAclPolicy.');
            }

            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询账号登录策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainLoginPolicy(showDomainLoginPolicyRequest?: ShowDomainLoginPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-SECURITYPOLICY/domains/{domain_id}/login-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;

            if (showDomainLoginPolicyRequest !== null && showDomainLoginPolicyRequest !== undefined) {
                if (showDomainLoginPolicyRequest instanceof ShowDomainLoginPolicyRequest) {
                    domainId = showDomainLoginPolicyRequest.domainId;
                } else {
                    domainId = showDomainLoginPolicyRequest['domain_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showDomainLoginPolicy.');
            }

            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询账号密码策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainPasswordPolicy(showDomainPasswordPolicyRequest?: ShowDomainPasswordPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-SECURITYPOLICY/domains/{domain_id}/password-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;

            if (showDomainPasswordPolicyRequest !== null && showDomainPasswordPolicyRequest !== undefined) {
                if (showDomainPasswordPolicyRequest instanceof ShowDomainPasswordPolicyRequest) {
                    domainId = showDomainPasswordPolicyRequest.domainId;
                } else {
                    domainId = showDomainPasswordPolicyRequest['domain_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showDomainPasswordPolicy.');
            }

            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询账号操作保护策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainProtectPolicy(showDomainProtectPolicyRequest?: ShowDomainProtectPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-SECURITYPOLICY/domains/{domain_id}/protect-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;

            if (showDomainProtectPolicyRequest !== null && showDomainProtectPolicyRequest !== undefined) {
                if (showDomainProtectPolicyRequest instanceof ShowDomainProtectPolicyRequest) {
                    domainId = showDomainProtectPolicyRequest.domainId;
                } else {
                    domainId = showDomainProtectPolicyRequest['domain_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showDomainProtectPolicy.');
            }

            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询账号配额。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainQuota(showDomainQuotaRequest?: ShowDomainQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-QUOTA/domains/{domain_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let type;

            if (showDomainQuotaRequest !== null && showDomainQuotaRequest !== undefined) {
                if (showDomainQuotaRequest instanceof ShowDomainQuotaRequest) {
                    domainId = showDomainQuotaRequest.domainId;
                    type = showDomainQuotaRequest.type;
                } else {
                    domainId = showDomainQuotaRequest['domain_id'];
                    type = showDomainQuotaRequest['type'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showDomainQuota.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定账号中的授权记录。
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainRoleAssignments(showDomainRoleAssignmentsRequest?: ShowDomainRoleAssignmentsRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-PERMISSION/role-assignments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let roleId;
            
            let subject;
            
            let subjectUserId;
            
            let subjectGroupId;
            
            let subjectAgencyId;
            
            let scope;
            
            let scopeProjectId;
            
            let scopeDomainId;
            
            let scopeEnterpriseProjectsId;
            
            let isInherited;
            
            let includeGroup;
            
            let page;
            
            let perPage;

            if (showDomainRoleAssignmentsRequest !== null && showDomainRoleAssignmentsRequest !== undefined) {
                if (showDomainRoleAssignmentsRequest instanceof ShowDomainRoleAssignmentsRequest) {
                    domainId = showDomainRoleAssignmentsRequest.domainId;
                    roleId = showDomainRoleAssignmentsRequest.roleId;
                    subject = showDomainRoleAssignmentsRequest.subject;
                    subjectUserId = showDomainRoleAssignmentsRequest.subjectUserId;
                    subjectGroupId = showDomainRoleAssignmentsRequest.subjectGroupId;
                    subjectAgencyId = showDomainRoleAssignmentsRequest.subjectAgencyId;
                    scope = showDomainRoleAssignmentsRequest.scope;
                    scopeProjectId = showDomainRoleAssignmentsRequest.scopeProjectId;
                    scopeDomainId = showDomainRoleAssignmentsRequest.scopeDomainId;
                    scopeEnterpriseProjectsId = showDomainRoleAssignmentsRequest.scopeEnterpriseProjectsId;
                    isInherited = showDomainRoleAssignmentsRequest.isInherited;
                    includeGroup = showDomainRoleAssignmentsRequest.includeGroup;
                    page = showDomainRoleAssignmentsRequest.page;
                    perPage = showDomainRoleAssignmentsRequest.perPage;
                } else {
                    domainId = showDomainRoleAssignmentsRequest['domain_id'];
                    roleId = showDomainRoleAssignmentsRequest['role_id'];
                    subject = showDomainRoleAssignmentsRequest['subject'];
                    subjectUserId = showDomainRoleAssignmentsRequest['subject.user_id'];
                    subjectGroupId = showDomainRoleAssignmentsRequest['subject.group_id'];
                    subjectAgencyId = showDomainRoleAssignmentsRequest['subject.agency_id'];
                    scope = showDomainRoleAssignmentsRequest['scope'];
                    scopeProjectId = showDomainRoleAssignmentsRequest['scope.project_id'];
                    scopeDomainId = showDomainRoleAssignmentsRequest['scope.domain_id'];
                    scopeEnterpriseProjectsId = showDomainRoleAssignmentsRequest['scope.enterprise_projects_id'];
                    isInherited = showDomainRoleAssignmentsRequest['is_inherited'];
                    includeGroup = showDomainRoleAssignmentsRequest['include_group'];
                    page = showDomainRoleAssignmentsRequest['page'];
                    perPage = showDomainRoleAssignmentsRequest['per_page'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
                throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showDomainRoleAssignments.');
            }
            if (domainId !== null && domainId !== undefined) {
                localVarQueryParameter['domain_id'] = domainId;
            }
            if (roleId !== null && roleId !== undefined) {
                localVarQueryParameter['role_id'] = roleId;
            }
            if (subject !== null && subject !== undefined) {
                localVarQueryParameter['subject'] = subject;
            }
            if (subjectUserId !== null && subjectUserId !== undefined) {
                localVarQueryParameter['subject.user_id'] = subjectUserId;
            }
            if (subjectGroupId !== null && subjectGroupId !== undefined) {
                localVarQueryParameter['subject.group_id'] = subjectGroupId;
            }
            if (subjectAgencyId !== null && subjectAgencyId !== undefined) {
                localVarQueryParameter['subject.agency_id'] = subjectAgencyId;
            }
            if (scope !== null && scope !== undefined) {
                localVarQueryParameter['scope'] = scope;
            }
            if (scopeProjectId !== null && scopeProjectId !== undefined) {
                localVarQueryParameter['scope.project_id'] = scopeProjectId;
            }
            if (scopeDomainId !== null && scopeDomainId !== undefined) {
                localVarQueryParameter['scope.domain_id'] = scopeDomainId;
            }
            if (scopeEnterpriseProjectsId !== null && scopeEnterpriseProjectsId !== undefined) {
                localVarQueryParameter['scope.enterprise_projects_id'] = scopeEnterpriseProjectsId;
            }
            if (isInherited !== null && isInherited !== undefined) {
                localVarQueryParameter['is_inherited'] = isInherited;
            }
            if (includeGroup !== null && includeGroup !== undefined) {
                localVarQueryParameter['include_group'] = includeGroup;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (perPage !== null && perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询身份提供商导入到IAM中的Metadata文件。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMetadata(showMetadataRequest?: ShowMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v3-ext/OS-FEDERATION/identity_providers/{idp_id}/protocols/{protocol_id}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let idpId;
            
            let protocolId;

            if (showMetadataRequest !== null && showMetadataRequest !== undefined) {
                if (showMetadataRequest instanceof ShowMetadataRequest) {
                    idpId = showMetadataRequest.idpId;
                    protocolId = showMetadataRequest.protocolId;
                } else {
                    idpId = showMetadataRequest['idp_id'];
                    protocolId = showMetadataRequest['protocol_id'];
                }
            }

        
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling showMetadata.');
            }
            if (protocolId === null || protocolId === undefined) {
            throw new RequiredError('protocolId','Required parameter protocolId was null or undefined when calling showMetadata.');
            }

            options.pathParams = { 'idp_id': idpId,'protocol_id': protocolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询OpenId Connect身份提供商配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOpenIdConnectConfig(showOpenIdConnectConfigRequest?: ShowOpenIdConnectConfigRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-FEDERATION/identity-providers/{idp_id}/openid-connect-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let idpId;

            if (showOpenIdConnectConfigRequest !== null && showOpenIdConnectConfigRequest !== undefined) {
                if (showOpenIdConnectConfigRequest instanceof ShowOpenIdConnectConfigRequest) {
                    idpId = showOpenIdConnectConfigRequest.idpId;
                } else {
                    idpId = showOpenIdConnectConfigRequest['idp_id'];
                }
            }

        
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling showOpenIdConnectConfig.');
            }

            options.pathParams = { 'idp_id': idpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询项目详情与状态。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectDetailsAndStatus() {
            const options = {
                method: "GET",
                url: "/v3-ext/projects/{project_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于查询项目配额。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectQuota() {
            const options = {
                method: "GET",
                url: "/v3.0/OS-QUOTA/projects/{project_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改委托。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAgency(updateAgencyRequest?: UpdateAgencyRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-AGENCY/agencies/{agency_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let agencyId;

            if (updateAgencyRequest !== null && updateAgencyRequest !== undefined) {
                if (updateAgencyRequest instanceof UpdateAgencyRequest) {
                    agencyId = updateAgencyRequest.agencyId;
                    body = updateAgencyRequest.body
                } else {
                    agencyId = updateAgencyRequest['agency_id'];
                    body = updateAgencyRequest['body'];
                }
            }

        
            if (agencyId === null || agencyId === undefined) {
            throw new RequiredError('agencyId','Required parameter agencyId was null or undefined when calling updateAgency.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'agency_id': agencyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改委托自定义策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAgencyCustomPolicy(updateAgencyCustomPolicyRequest?: UpdateAgencyCustomPolicyRequest) {
            const options = {
                method: "PATCH",
                url: "/v3.0/OS-ROLE/roles/{role_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let roleId;

            if (updateAgencyCustomPolicyRequest !== null && updateAgencyCustomPolicyRequest !== undefined) {
                if (updateAgencyCustomPolicyRequest instanceof UpdateAgencyCustomPolicyRequest) {
                    roleId = updateAgencyCustomPolicyRequest.roleId;
                    body = updateAgencyCustomPolicyRequest.body
                } else {
                    roleId = updateAgencyCustomPolicyRequest['role_id'];
                    body = updateAgencyCustomPolicyRequest['body'];
                }
            }

        
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling updateAgencyCustomPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改云服务自定义策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCloudServiceCustomPolicy(updateCloudServiceCustomPolicyRequest?: UpdateCloudServiceCustomPolicyRequest) {
            const options = {
                method: "PATCH",
                url: "/v3.0/OS-ROLE/roles/{role_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let roleId;

            if (updateCloudServiceCustomPolicyRequest !== null && updateCloudServiceCustomPolicyRequest !== undefined) {
                if (updateCloudServiceCustomPolicyRequest instanceof UpdateCloudServiceCustomPolicyRequest) {
                    roleId = updateCloudServiceCustomPolicyRequest.roleId;
                    body = updateCloudServiceCustomPolicyRequest.body
                } else {
                    roleId = updateCloudServiceCustomPolicyRequest['role_id'];
                    body = updateCloudServiceCustomPolicyRequest['body'];
                }
            }

        
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling updateCloudServiceCustomPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改账号接口访问策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainApiAclPolicy(updateDomainApiAclPolicyRequest?: UpdateDomainApiAclPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-SECURITYPOLICY/domains/{domain_id}/api-acl-policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let domainId;

            if (updateDomainApiAclPolicyRequest !== null && updateDomainApiAclPolicyRequest !== undefined) {
                if (updateDomainApiAclPolicyRequest instanceof UpdateDomainApiAclPolicyRequest) {
                    domainId = updateDomainApiAclPolicyRequest.domainId;
                    body = updateDomainApiAclPolicyRequest.body
                } else {
                    domainId = updateDomainApiAclPolicyRequest['domain_id'];
                    body = updateDomainApiAclPolicyRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateDomainApiAclPolicy.');
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改账号控制台访问策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainConsoleAclPolicy(updateDomainConsoleAclPolicyRequest?: UpdateDomainConsoleAclPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-SECURITYPOLICY/domains/{domain_id}/console-acl-policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let domainId;

            if (updateDomainConsoleAclPolicyRequest !== null && updateDomainConsoleAclPolicyRequest !== undefined) {
                if (updateDomainConsoleAclPolicyRequest instanceof UpdateDomainConsoleAclPolicyRequest) {
                    domainId = updateDomainConsoleAclPolicyRequest.domainId;
                    body = updateDomainConsoleAclPolicyRequest.body
                } else {
                    domainId = updateDomainConsoleAclPolicyRequest['domain_id'];
                    body = updateDomainConsoleAclPolicyRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateDomainConsoleAclPolicy.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)为用户组授予所有项目服务权限。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainGroupInheritRole(updateDomainGroupInheritRoleRequest?: UpdateDomainGroupInheritRoleRequest) {
            const options = {
                method: "PUT",
                url: "/v3/OS-INHERIT/domains/{domain_id}/groups/{group_id}/roles/{role_id}/inherited_to_projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let groupId;
            
            let roleId;

            if (updateDomainGroupInheritRoleRequest !== null && updateDomainGroupInheritRoleRequest !== undefined) {
                if (updateDomainGroupInheritRoleRequest instanceof UpdateDomainGroupInheritRoleRequest) {
                    domainId = updateDomainGroupInheritRoleRequest.domainId;
                    groupId = updateDomainGroupInheritRoleRequest.groupId;
                    roleId = updateDomainGroupInheritRoleRequest.roleId;
                } else {
                    domainId = updateDomainGroupInheritRoleRequest['domain_id'];
                    groupId = updateDomainGroupInheritRoleRequest['group_id'];
                    roleId = updateDomainGroupInheritRoleRequest['role_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateDomainGroupInheritRole.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateDomainGroupInheritRole.');
            }
            if (roleId === null || roleId === undefined) {
            throw new RequiredError('roleId','Required parameter roleId was null or undefined when calling updateDomainGroupInheritRole.');
            }

            options.pathParams = { 'domain_id': domainId,'group_id': groupId,'role_id': roleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改账号登录策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainLoginPolicy(updateDomainLoginPolicyRequest?: UpdateDomainLoginPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-SECURITYPOLICY/domains/{domain_id}/login-policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let domainId;

            if (updateDomainLoginPolicyRequest !== null && updateDomainLoginPolicyRequest !== undefined) {
                if (updateDomainLoginPolicyRequest instanceof UpdateDomainLoginPolicyRequest) {
                    domainId = updateDomainLoginPolicyRequest.domainId;
                    body = updateDomainLoginPolicyRequest.body
                } else {
                    domainId = updateDomainLoginPolicyRequest['domain_id'];
                    body = updateDomainLoginPolicyRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateDomainLoginPolicy.');
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改账号密码策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainPasswordPolicy(updateDomainPasswordPolicyRequest?: UpdateDomainPasswordPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-SECURITYPOLICY/domains/{domain_id}/password-policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let domainId;

            if (updateDomainPasswordPolicyRequest !== null && updateDomainPasswordPolicyRequest !== undefined) {
                if (updateDomainPasswordPolicyRequest instanceof UpdateDomainPasswordPolicyRequest) {
                    domainId = updateDomainPasswordPolicyRequest.domainId;
                    body = updateDomainPasswordPolicyRequest.body
                } else {
                    domainId = updateDomainPasswordPolicyRequest['domain_id'];
                    body = updateDomainPasswordPolicyRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateDomainPasswordPolicy.');
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改账号操作保护策略。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDomainProtectPolicy(updateDomainProtectPolicyRequest?: UpdateDomainProtectPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-SECURITYPOLICY/domains/{domain_id}/protect-policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let domainId;

            if (updateDomainProtectPolicyRequest !== null && updateDomainProtectPolicyRequest !== undefined) {
                if (updateDomainProtectPolicyRequest instanceof UpdateDomainProtectPolicyRequest) {
                    domainId = updateDomainProtectPolicyRequest.domainId;
                    body = updateDomainProtectPolicyRequest.body
                } else {
                    domainId = updateDomainProtectPolicyRequest['domain_id'];
                    body = updateDomainProtectPolicyRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateDomainProtectPolicy.');
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
         * 修改OpenId Connect身份提供商配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateOpenIdConnectConfig(updateOpenIdConnectConfigRequest?: UpdateOpenIdConnectConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-FEDERATION/identity-providers/{idp_id}/openid-connect-config",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let idpId;

            if (updateOpenIdConnectConfigRequest !== null && updateOpenIdConnectConfigRequest !== undefined) {
                if (updateOpenIdConnectConfigRequest instanceof UpdateOpenIdConnectConfigRequest) {
                    idpId = updateOpenIdConnectConfigRequest.idpId;
                    body = updateOpenIdConnectConfigRequest.body
                } else {
                    idpId = updateOpenIdConnectConfigRequest['idp_id'];
                    body = updateOpenIdConnectConfigRequest['body'];
                }
            }

        
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling updateOpenIdConnectConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'idp_id': idpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)设置项目状态。项目状态包括：正常、冻结。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProjectStatus(updateProjectStatusRequest?: UpdateProjectStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v3-ext/projects/{project_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (updateProjectStatusRequest !== null && updateProjectStatusRequest !== undefined) {
                if (updateProjectStatusRequest instanceof UpdateProjectStatusRequest) {
                    body = updateProjectStatusRequest.body
                } else {
                    body = updateProjectStatusRequest['body'];
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)给IAM用户创建永久访问密钥，或IAM用户给自己创建永久访问密钥。
         * 
         * 访问密钥（Access Key ID/Secret Access Key，简称AK/SK），是您通过开发工具（API、CLI、SDK）访问华为云时的身份凭证，不用于登录控制台。系统通过AK识别访问用户的身份，通过SK进行签名验证，通过加密签名验证可以确保请求的机密性、完整性和请求者身份的正确性。在控制台创建访问密钥的方式请参见：[访问密钥](https://support.huaweicloud.com/usermanual-ca/zh-cn_topic_0046606340.html) 。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPermanentAccessKey(createPermanentAccessKeyRequest?: CreatePermanentAccessKeyRequest) {
            const options = {
                method: "POST",
                url: "/v3.0/OS-CREDENTIAL/credentials",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createPermanentAccessKeyRequest !== null && createPermanentAccessKeyRequest !== undefined) {
                if (createPermanentAccessKeyRequest instanceof CreatePermanentAccessKeyRequest) {
                    body = createPermanentAccessKeyRequest.body
                } else {
                    body = createPermanentAccessKeyRequest['body'];
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
         * 该接口可以用于通过委托来获取临时访问密钥（临时AK/SK）和securitytoken。
         * 
         * 临时AK/SK和securitytoken是系统颁发给IAM用户的临时访问令牌，有效期为15分钟至24小时，过期后需要重新获取。临时AK/SK和securitytoken遵循权限最小化原则。鉴权时，临时AK/SK和securitytoken必须同时使用，请求头中需要添加“x-security-token”字段，使用方法详情请参考：[API签名参考](https://support.huaweicloud.com/devg-apisign/api-sign-provide.html) 。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTemporaryAccessKeyByAgency(createTemporaryAccessKeyByAgencyRequest?: CreateTemporaryAccessKeyByAgencyRequest) {
            const options = {
                method: "POST",
                url: "/v3.0/OS-CREDENTIAL/securitytokens",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createTemporaryAccessKeyByAgencyRequest !== null && createTemporaryAccessKeyByAgencyRequest !== undefined) {
                if (createTemporaryAccessKeyByAgencyRequest instanceof CreateTemporaryAccessKeyByAgencyRequest) {
                    body = createTemporaryAccessKeyByAgencyRequest.body
                } else {
                    body = createTemporaryAccessKeyByAgencyRequest['body'];
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
         * 该接口可以用于通过token来获取临时AK/SK和securitytoken。
         * 
         * 临时AK/SK和securitytoken是系统颁发给IAM用户的临时访问令牌，有效期为15分钟至24小时，过期后需要重新获取。临时AK/SK和securitytoken遵循权限最小化原则。鉴权时，临时AK/SK和securitytoken必须同时使用，请求头中需要添加“x-security-token”字段，使用方法详情请参考：[API签名参考](https://support.huaweicloud.com/devg-apisign/api-sign-provide.html)。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTemporaryAccessKeyByToken(createTemporaryAccessKeyByTokenRequest?: CreateTemporaryAccessKeyByTokenRequest) {
            const options = {
                method: "POST",
                url: "/v3.0/OS-CREDENTIAL/securitytokens",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createTemporaryAccessKeyByTokenRequest !== null && createTemporaryAccessKeyByTokenRequest !== undefined) {
                if (createTemporaryAccessKeyByTokenRequest instanceof CreateTemporaryAccessKeyByTokenRequest) {
                    body = createTemporaryAccessKeyByTokenRequest.body
                } else {
                    body = createTemporaryAccessKeyByTokenRequest['body'];
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除IAM用户的指定永久访问密钥，或IAM用户删除自己的指定永久访问密钥。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePermanentAccessKey(deletePermanentAccessKeyRequest?: DeletePermanentAccessKeyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3.0/OS-CREDENTIAL/credentials/{access_key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let accessKey;

            if (deletePermanentAccessKeyRequest !== null && deletePermanentAccessKeyRequest !== undefined) {
                if (deletePermanentAccessKeyRequest instanceof DeletePermanentAccessKeyRequest) {
                    accessKey = deletePermanentAccessKeyRequest.accessKey;
                } else {
                    accessKey = deletePermanentAccessKeyRequest['access_key'];
                }
            }

        
            if (accessKey === null || accessKey === undefined) {
            throw new RequiredError('accessKey','Required parameter accessKey was null or undefined when calling deletePermanentAccessKey.');
            }

            options.pathParams = { 'access_key': accessKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户的所有永久访问密钥，或IAM用户查询自己的所有永久访问密钥。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPermanentAccessKeys(listPermanentAccessKeysRequest?: ListPermanentAccessKeysRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-CREDENTIAL/credentials",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userId;

            if (listPermanentAccessKeysRequest !== null && listPermanentAccessKeysRequest !== undefined) {
                if (listPermanentAccessKeysRequest instanceof ListPermanentAccessKeysRequest) {
                    userId = listPermanentAccessKeysRequest.userId;
                } else {
                    userId = listPermanentAccessKeysRequest['user_id'];
                }
            }

        
            if (userId !== null && userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户的指定永久访问密钥，或IAM用户查询自己的指定永久访问密钥。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPermanentAccessKey(showPermanentAccessKeyRequest?: ShowPermanentAccessKeyRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-CREDENTIAL/credentials/{access_key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let accessKey;

            if (showPermanentAccessKeyRequest !== null && showPermanentAccessKeyRequest !== undefined) {
                if (showPermanentAccessKeyRequest instanceof ShowPermanentAccessKeyRequest) {
                    accessKey = showPermanentAccessKeyRequest.accessKey;
                } else {
                    accessKey = showPermanentAccessKeyRequest['access_key'];
                }
            }

        
            if (accessKey === null || accessKey === undefined) {
            throw new RequiredError('accessKey','Required parameter accessKey was null or undefined when calling showPermanentAccessKey.');
            }

            options.pathParams = { 'access_key': accessKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改IAM用户的指定永久访问密钥，或IAM用户修改自己的指定永久访问密钥。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePermanentAccessKey(updatePermanentAccessKeyRequest?: UpdatePermanentAccessKeyRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-CREDENTIAL/credentials/{access_key}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let accessKey;

            if (updatePermanentAccessKeyRequest !== null && updatePermanentAccessKeyRequest !== undefined) {
                if (updatePermanentAccessKeyRequest instanceof UpdatePermanentAccessKeyRequest) {
                    accessKey = updatePermanentAccessKeyRequest.accessKey;
                    body = updatePermanentAccessKeyRequest.body
                } else {
                    accessKey = updatePermanentAccessKeyRequest['access_key'];
                    body = updatePermanentAccessKeyRequest['body'];
                }
            }

        
            if (accessKey === null || accessKey === undefined) {
            throw new RequiredError('accessKey','Required parameter accessKey was null or undefined when calling updatePermanentAccessKey.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'access_key': accessKey, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于绑定MFA设备。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBindingDevice(createBindingDeviceRequest?: CreateBindingDeviceRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-MFA/mfa-devices/bind",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createBindingDeviceRequest !== null && createBindingDeviceRequest !== undefined) {
                if (createBindingDeviceRequest instanceof CreateBindingDeviceRequest) {
                    body = createBindingDeviceRequest.body
                } else {
                    body = createBindingDeviceRequest['body'];
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
         * 该接口可以用于创建MFA设备。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMfaDevice(createMfaDeviceRequest?: CreateMfaDeviceRequest) {
            const options = {
                method: "POST",
                url: "/v3.0/OS-MFA/virtual-mfa-devices",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createMfaDeviceRequest !== null && createMfaDeviceRequest !== undefined) {
                if (createMfaDeviceRequest instanceof CreateMfaDeviceRequest) {
                    body = createMfaDeviceRequest.body
                } else {
                    body = createMfaDeviceRequest['body'];
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)创建IAM用户。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createUser(createUserRequest?: CreateUserRequest) {
            const options = {
                method: "POST",
                url: "/v3.0/OS-USER/users",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createUserRequest !== null && createUserRequest !== undefined) {
                if (createUserRequest instanceof CreateUserRequest) {
                    body = createUserRequest.body
                } else {
                    body = createUserRequest['body'];
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
         * 该接口可以用于解绑MFA设备
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBindingDevice(deleteBindingDeviceRequest?: DeleteBindingDeviceRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-MFA/mfa-devices/unbind",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (deleteBindingDeviceRequest !== null && deleteBindingDeviceRequest !== undefined) {
                if (deleteBindingDeviceRequest instanceof DeleteBindingDeviceRequest) {
                    body = deleteBindingDeviceRequest.body
                } else {
                    body = deleteBindingDeviceRequest['body'];
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除MFA设备。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMfaDevice(deleteMfaDeviceRequest?: DeleteMfaDeviceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3.0/OS-MFA/virtual-mfa-devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let userId;
            
            let serialNumber;

            if (deleteMfaDeviceRequest !== null && deleteMfaDeviceRequest !== undefined) {
                if (deleteMfaDeviceRequest instanceof DeleteMfaDeviceRequest) {
                    userId = deleteMfaDeviceRequest.userId;
                    serialNumber = deleteMfaDeviceRequest.serialNumber;
                } else {
                    userId = deleteMfaDeviceRequest['user_id'];
                    serialNumber = deleteMfaDeviceRequest['serial_number'];
                }
            }

        
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling deleteMfaDevice.');
            }
            if (userId !== null && userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }
            if (serialNumber === null || serialNumber === undefined) {
                throw new RequiredError('serialNumber','Required parameter serialNumber was null or undefined when calling deleteMfaDevice.');
            }
            if (serialNumber !== null && serialNumber !== undefined) {
                localVarQueryParameter['serial_number'] = serialNumber;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)创建IAM用户。IAM用户首次登录时需要修改密码。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneCreateUser(keystoneCreateUserRequest?: KeystoneCreateUserRequest) {
            const options = {
                method: "POST",
                url: "/v3/users",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (keystoneCreateUserRequest !== null && keystoneCreateUserRequest !== undefined) {
                if (keystoneCreateUserRequest instanceof KeystoneCreateUserRequest) {
                    body = keystoneCreateUserRequest.body
                } else {
                    body = keystoneCreateUserRequest['body'];
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
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)删除指定IAM用户。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneDeleteUser(keystoneDeleteUserRequest?: KeystoneDeleteUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (keystoneDeleteUserRequest !== null && keystoneDeleteUserRequest !== undefined) {
                if (keystoneDeleteUserRequest instanceof KeystoneDeleteUserRequest) {
                    userId = keystoneDeleteUserRequest.userId;
                } else {
                    userId = keystoneDeleteUserRequest['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling keystoneDeleteUser.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户所属用户组，或IAM用户查询自己所属用户组。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListGroupsForUser(keystoneListGroupsForUserRequest?: KeystoneListGroupsForUserRequest) {
            const options = {
                method: "GET",
                url: "/v3/users/{user_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (keystoneListGroupsForUserRequest !== null && keystoneListGroupsForUserRequest !== undefined) {
                if (keystoneListGroupsForUserRequest instanceof KeystoneListGroupsForUserRequest) {
                    userId = keystoneListGroupsForUserRequest.userId;
                } else {
                    userId = keystoneListGroupsForUserRequest['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling keystoneListGroupsForUser.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneListUsers(keystoneListUsersRequest?: KeystoneListUsersRequest) {
            const options = {
                method: "GET",
                url: "/v3/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let enabled;
            
            let name;
            
            let passwordExpiresAt;

            if (keystoneListUsersRequest !== null && keystoneListUsersRequest !== undefined) {
                if (keystoneListUsersRequest instanceof KeystoneListUsersRequest) {
                    domainId = keystoneListUsersRequest.domainId;
                    enabled = keystoneListUsersRequest.enabled;
                    name = keystoneListUsersRequest.name;
                    passwordExpiresAt = keystoneListUsersRequest.passwordExpiresAt;
                } else {
                    domainId = keystoneListUsersRequest['domain_id'];
                    enabled = keystoneListUsersRequest['enabled'];
                    name = keystoneListUsersRequest['name'];
                    passwordExpiresAt = keystoneListUsersRequest['password_expires_at'];
                }
            }

        
            if (domainId !== null && domainId !== undefined) {
                localVarQueryParameter['domain_id'] = domainId;
            }
            if (enabled !== null && enabled !== undefined) {
                localVarQueryParameter['enabled'] = enabled;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (passwordExpiresAt !== null && passwordExpiresAt !== undefined) {
                localVarQueryParameter['password_expires_at'] = passwordExpiresAt;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户详情，或IAM用户查询自己的用户详情。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneShowUser(keystoneShowUserRequest?: KeystoneShowUserRequest) {
            const options = {
                method: "GET",
                url: "/v3/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (keystoneShowUserRequest !== null && keystoneShowUserRequest !== undefined) {
                if (keystoneShowUserRequest instanceof KeystoneShowUserRequest) {
                    userId = keystoneShowUserRequest.userId;
                } else {
                    userId = keystoneShowUserRequest['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling keystoneShowUser.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改IAM用户信息。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneUpdateUserByAdmin(keystoneUpdateUserByAdminRequest?: KeystoneUpdateUserByAdminRequest) {
            const options = {
                method: "PATCH",
                url: "/v3/users/{user_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let userId;

            if (keystoneUpdateUserByAdminRequest !== null && keystoneUpdateUserByAdminRequest !== undefined) {
                if (keystoneUpdateUserByAdminRequest instanceof KeystoneUpdateUserByAdminRequest) {
                    userId = keystoneUpdateUserByAdminRequest.userId;
                    body = keystoneUpdateUserByAdminRequest.body
                } else {
                    userId = keystoneUpdateUserByAdminRequest['user_id'];
                    body = keystoneUpdateUserByAdminRequest['body'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling keystoneUpdateUserByAdmin.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于IAM用户修改自己的密码。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneUpdateUserPassword(keystoneUpdateUserPasswordRequest?: KeystoneUpdateUserPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v3/users/{user_id}/password",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let userId;

            if (keystoneUpdateUserPasswordRequest !== null && keystoneUpdateUserPasswordRequest !== undefined) {
                if (keystoneUpdateUserPasswordRequest instanceof KeystoneUpdateUserPasswordRequest) {
                    userId = keystoneUpdateUserPasswordRequest.userId;
                    body = keystoneUpdateUserPasswordRequest.body
                } else {
                    userId = keystoneUpdateUserPasswordRequest['user_id'];
                    body = keystoneUpdateUserPasswordRequest['body'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling keystoneUpdateUserPassword.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户的登录保护状态列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserLoginProtects() {
            const options = {
                method: "GET",
                url: "/v3.0/OS-USER/login-protects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户的MFA绑定信息列表。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUserMfaDevices() {
            const options = {
                method: "GET",
                url: "/v3.0/OS-MFA/virtual-mfa-devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询IAM用户详情，或IAM用户查询自己的详情。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUser(showUserRequest?: ShowUserRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-USER/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (showUserRequest !== null && showUserRequest !== undefined) {
                if (showUserRequest instanceof ShowUserRequest) {
                    userId = showUserRequest.userId;
                } else {
                    userId = showUserRequest['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling showUser.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询指定IAM用户的登录保护状态信息，或IAM用户查询自己的登录保护状态信息。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserLoginProtect(showUserLoginProtectRequest?: ShowUserLoginProtectRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-USER/users/{user_id}/login-protect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (showUserLoginProtectRequest !== null && showUserLoginProtectRequest !== undefined) {
                if (showUserLoginProtectRequest instanceof ShowUserLoginProtectRequest) {
                    userId = showUserLoginProtectRequest.userId;
                } else {
                    userId = showUserLoginProtectRequest['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling showUserLoginProtect.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)查询指定IAM用户的MFA绑定信息，或IAM用户查询自己的MFA绑定信息。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserMfaDevice(showUserMfaDeviceRequest?: ShowUserMfaDeviceRequest) {
            const options = {
                method: "GET",
                url: "/v3.0/OS-MFA/users/{user_id}/virtual-mfa-device",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let userId;

            if (showUserMfaDeviceRequest !== null && showUserMfaDeviceRequest !== undefined) {
                if (showUserMfaDeviceRequest instanceof ShowUserMfaDeviceRequest) {
                    userId = showUserMfaDeviceRequest.userId;
                } else {
                    userId = showUserMfaDeviceRequest['user_id'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling showUserMfaDevice.');
            }

            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改账号操作保护。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLoginProtect(updateLoginProtectRequest?: UpdateLoginProtectRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-USER/users/{user_id}/login-protect",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let userId;

            if (updateLoginProtectRequest !== null && updateLoginProtectRequest !== undefined) {
                if (updateLoginProtectRequest instanceof UpdateLoginProtectRequest) {
                    userId = updateLoginProtectRequest.userId;
                    body = updateLoginProtectRequest.body
                } else {
                    userId = updateLoginProtectRequest['user_id'];
                    body = updateLoginProtectRequest['body'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling updateLoginProtect.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)修改IAM用户信息 。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUser(updateUserRequest?: UpdateUserRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-USER/users/{user_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let userId;

            if (updateUserRequest !== null && updateUserRequest !== undefined) {
                if (updateUserRequest instanceof UpdateUserRequest) {
                    userId = updateUserRequest.userId;
                    body = updateUserRequest.body
                } else {
                    userId = updateUserRequest['user_id'];
                    body = updateUserRequest['body'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling updateUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于IAM用户修改自己的用户信息。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUserInformation(updateUserInformationRequest?: UpdateUserInformationRequest) {
            const options = {
                method: "PUT",
                url: "/v3.0/OS-USER/users/{user_id}/info",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let userId;

            if (updateUserInformationRequest !== null && updateUserInformationRequest !== undefined) {
                if (updateUserInformationRequest instanceof UpdateUserInformationRequest) {
                    userId = updateUserInformationRequest.userId;
                    body = updateUserInformationRequest.body
                } else {
                    userId = updateUserInformationRequest['user_id'];
                    body = updateUserInformationRequest['body'];
                }
            }

        
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling updateUserInformation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于获取委托方的token。
         * 
         * 例如：A账号希望B账号管理自己的某些资源，所以A账号创建了委托给B账号，则A账号为委托方，B账号为被委托方。那么B账号可以通过该接口获取委托token。B账号仅能使用该token管理A账号的委托资源，不能管理自己账号中的资源。如果B账号需要管理自己账号中的资源，则需要获取自己的用户token。
         * 
         * token是系统颁发给用户的访问令牌，承载用户的身份、权限等信息。调用IAM以及其他云服务的接口时，可以使用本接口获取的token进行鉴权。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。如果使用全局区域的Endpoint调用，该token可以在所有区域使用；如果使用非全局区域的Endpoint调用，则该token仅在该区域生效，不能跨区域使用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * &gt; - token的有效期为24小时，建议进行缓存，避免频繁调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneCreateAgencyToken(keystoneCreateAgencyTokenRequest?: KeystoneCreateAgencyTokenRequest) {
            const options = {
                method: "POST",
                url: "/v3/auth/tokens",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let nocatalog;

            if (keystoneCreateAgencyTokenRequest !== null && keystoneCreateAgencyTokenRequest !== undefined) {
                if (keystoneCreateAgencyTokenRequest instanceof KeystoneCreateAgencyTokenRequest) {
                    body = keystoneCreateAgencyTokenRequest.body
                    nocatalog = keystoneCreateAgencyTokenRequest.nocatalog;
                } else {
                    body = keystoneCreateAgencyTokenRequest['body'];
                    nocatalog = keystoneCreateAgencyTokenRequest['nocatalog'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (nocatalog !== null && nocatalog !== undefined) {
                localVarQueryParameter['nocatalog'] = nocatalog;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于通过用户名/密码的方式进行认证来获取IAM用户token。
         * 
         * token是系统颁发给IAM用户的访问令牌，承载用户的身份、权限等信息。调用IAM以及其他云服务的接口时，可以使用本接口获取的IAM用户token进行鉴权。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。如果使用全局区域的Endpoint调用，该token可以在所有区域使用；如果使用非全局区域的Endpoint调用，则该token仅在该区域生效，不能跨区域使用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * &gt; - token的有效期为24小时，建议进行缓存，避免频繁调用。
         * &gt; - 通过Postman获取用户token示例请参见：[如何通过Postman获取用户token](https://support.huaweicloud.com/iam_faq/iam_01_034.html)。
         * &gt; - 如果需要获取具有Security Administrator权限的token，请参见：[IAM 常见问题](https://support.huaweicloud.com/iam_faq/iam_01_0608.html)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneCreateUserTokenByPassword(keystoneCreateUserTokenByPasswordRequest?: KeystoneCreateUserTokenByPasswordRequest) {
            const options = {
                method: "POST",
                url: "/v3/auth/tokens",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let nocatalog;

            if (keystoneCreateUserTokenByPasswordRequest !== null && keystoneCreateUserTokenByPasswordRequest !== undefined) {
                if (keystoneCreateUserTokenByPasswordRequest instanceof KeystoneCreateUserTokenByPasswordRequest) {
                    body = keystoneCreateUserTokenByPasswordRequest.body
                    nocatalog = keystoneCreateUserTokenByPasswordRequest.nocatalog;
                } else {
                    body = keystoneCreateUserTokenByPasswordRequest['body'];
                    nocatalog = keystoneCreateUserTokenByPasswordRequest['nocatalog'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (nocatalog !== null && nocatalog !== undefined) {
                localVarQueryParameter['nocatalog'] = nocatalog;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于通过用户名/密码+虚拟MFA的方式进行认证，在IAM用户开启了的登录保护功能，并选择通过虚拟MFA验证时获取IAM用户token。
         * 
         * token是系统颁发给用户的访问令牌，承载用户的身份、权限等信息。调用IAM以及其他云服务的接口时，可以使用本接口获取的token进行鉴权。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。如果使用全局区域的Endpoint调用，该token可以在所有区域使用；如果使用非全局区域的Endpoint调用，则该token仅在该区域生效，不能跨区域使用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * &gt; - token的有效期为24小时，建议进行缓存，避免频繁调用。
         * &gt; - 通过Postman获取用户token示例请参见：[如何通过Postman获取用户token](https://support.huaweicloud.com/iam_faq/iam_01_034.html)。
         * &gt; - 如果需要获取具有Security Administrator权限的token，请参见：[IAM 常见问题](https://support.huaweicloud.com/iam_faq/iam_01_0608.html)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneCreateUserTokenByPasswordAndMfa(keystoneCreateUserTokenByPasswordAndMfaRequest?: KeystoneCreateUserTokenByPasswordAndMfaRequest) {
            const options = {
                method: "POST",
                url: "/v3/auth/tokens",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            
            let nocatalog;

            if (keystoneCreateUserTokenByPasswordAndMfaRequest !== null && keystoneCreateUserTokenByPasswordAndMfaRequest !== undefined) {
                if (keystoneCreateUserTokenByPasswordAndMfaRequest instanceof KeystoneCreateUserTokenByPasswordAndMfaRequest) {
                    body = keystoneCreateUserTokenByPasswordAndMfaRequest.body
                    nocatalog = keystoneCreateUserTokenByPasswordAndMfaRequest.nocatalog;
                } else {
                    body = keystoneCreateUserTokenByPasswordAndMfaRequest['body'];
                    nocatalog = keystoneCreateUserTokenByPasswordAndMfaRequest['nocatalog'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (nocatalog !== null && nocatalog !== undefined) {
                localVarQueryParameter['nocatalog'] = nocatalog;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以用于[管理员](https://support.huaweicloud.com/usermanual-iam/iam_01_0001.html)校验本账号中IAM用户token的有效性，或IAM用户校验自己token的有效性。管理员仅能校验本账号中IAM用户token的有效性，不能校验其他账号中IAM用户token的有效性。如果被校验的token有效，则返回该token的详细信息。
         * 
         * 该接口可以使用全局区域的Endpoint和其他区域的Endpoint调用。IAM的Endpoint请参见：[地区和终端节点](https://developer.huaweicloud.com/endpoint?IAM)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        keystoneValidateToken(keystoneValidateTokenRequest?: KeystoneValidateTokenRequest) {
            const options = {
                method: "GET",
                url: "/v3/auth/tokens",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSubjectToken;
            
            let nocatalog;

            if (keystoneValidateTokenRequest !== null && keystoneValidateTokenRequest !== undefined) {
                if (keystoneValidateTokenRequest instanceof KeystoneValidateTokenRequest) {
                    xSubjectToken = keystoneValidateTokenRequest.xSubjectToken;
                    nocatalog = keystoneValidateTokenRequest.nocatalog;
                } else {
                    xSubjectToken = keystoneValidateTokenRequest['X-Subject-Token'];
                    nocatalog = keystoneValidateTokenRequest['nocatalog'];
                }
            }

        
            if (nocatalog !== null && nocatalog !== undefined) {
                localVarQueryParameter['nocatalog'] = nocatalog;
            }
            if (xSubjectToken !== undefined && xSubjectToken !== null) {
                localVarHeaderParameter['X-Subject-Token'] = String(xSubjectToken);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): IamClient {
    return new IamClient(client);
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