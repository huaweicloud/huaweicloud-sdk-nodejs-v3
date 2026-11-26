import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AgencyUrn } from './model/AgencyUrn';
import { AllowedResourceOauth2ReturnUrl } from './model/AllowedResourceOauth2ReturnUrl';
import { ApiKeyCredentialProvider } from './model/ApiKeyCredentialProvider';
import { ApiKeyCredentialProviderSummary } from './model/ApiKeyCredentialProviderSummary';
import { ApiKeyInfo } from './model/ApiKeyInfo';
import { AuthorizerConfiguration } from './model/AuthorizerConfiguration';
import { AuthorizerType } from './model/AuthorizerType';
import { AuthorizingClaimMatchValue } from './model/AuthorizingClaimMatchValue';
import { CedarPolicy } from './model/CedarPolicy';
import { ClaimMatchValue } from './model/ClaimMatchValue';
import { ClientId } from './model/ClientId';
import { ClientSecret } from './model/ClientSecret';
import { CompleteResourceTokenAuthRequest } from './model/CompleteResourceTokenAuthRequest';
import { CompleteResourceTokenAuthRequestBody } from './model/CompleteResourceTokenAuthRequestBody';
import { CompleteResourceTokenAuthResponse } from './model/CompleteResourceTokenAuthResponse';
import { CreateApiKeyCredentialProviderReqBody } from './model/CreateApiKeyCredentialProviderReqBody';
import { CreateApiKeyCredentialProviderRequest } from './model/CreateApiKeyCredentialProviderRequest';
import { CreateApiKeyCredentialProviderResponse } from './model/CreateApiKeyCredentialProviderResponse';
import { CreateOauth2CredentialProviderReqBody } from './model/CreateOauth2CredentialProviderReqBody';
import { CreateOauth2CredentialProviderRequest } from './model/CreateOauth2CredentialProviderRequest';
import { CreateOauth2CredentialProviderResponse } from './model/CreateOauth2CredentialProviderResponse';
import { CreatePolicyEngineReqBody } from './model/CreatePolicyEngineReqBody';
import { CreatePolicyEngineRequest } from './model/CreatePolicyEngineRequest';
import { CreatePolicyEngineResponse } from './model/CreatePolicyEngineResponse';
import { CreatePolicyReqBody } from './model/CreatePolicyReqBody';
import { CreatePolicyRequest } from './model/CreatePolicyRequest';
import { CreatePolicyResponse } from './model/CreatePolicyResponse';
import { CreateStsCredentialProviderReqBody } from './model/CreateStsCredentialProviderReqBody';
import { CreateStsCredentialProviderRequest } from './model/CreateStsCredentialProviderRequest';
import { CreateStsCredentialProviderResponse } from './model/CreateStsCredentialProviderResponse';
import { CreateWorkloadAccessTokenForJwtRequest } from './model/CreateWorkloadAccessTokenForJwtRequest';
import { CreateWorkloadAccessTokenForJwtRequestBody } from './model/CreateWorkloadAccessTokenForJwtRequestBody';
import { CreateWorkloadAccessTokenForJwtResponse } from './model/CreateWorkloadAccessTokenForJwtResponse';
import { CreateWorkloadAccessTokenForUserIdRequest } from './model/CreateWorkloadAccessTokenForUserIdRequest';
import { CreateWorkloadAccessTokenForUserIdRequestBody } from './model/CreateWorkloadAccessTokenForUserIdRequestBody';
import { CreateWorkloadAccessTokenForUserIdResponse } from './model/CreateWorkloadAccessTokenForUserIdResponse';
import { CreateWorkloadAccessTokenRequest } from './model/CreateWorkloadAccessTokenRequest';
import { CreateWorkloadAccessTokenRequestBody } from './model/CreateWorkloadAccessTokenRequestBody';
import { CreateWorkloadAccessTokenResponse } from './model/CreateWorkloadAccessTokenResponse';
import { CreateWorkloadIdentityReqBody } from './model/CreateWorkloadIdentityReqBody';
import { CreateWorkloadIdentityRequest } from './model/CreateWorkloadIdentityRequest';
import { CreateWorkloadIdentityResponse } from './model/CreateWorkloadIdentityResponse';
import { CreatedBy } from './model/CreatedBy';
import { CredentialProviderName } from './model/CredentialProviderName';
import { CredentialProviderVendor } from './model/CredentialProviderVendor';
import { CustomClaimValidation } from './model/CustomClaimValidation';
import { CustomJWTAuthorizerConfiguration } from './model/CustomJWTAuthorizerConfiguration';
import { CustomOauth2ProviderConfigInput } from './model/CustomOauth2ProviderConfigInput';
import { CustomOauth2ProviderConfigOutput } from './model/CustomOauth2ProviderConfigOutput';
import { DeleteApiKeyCredentialProviderRequest } from './model/DeleteApiKeyCredentialProviderRequest';
import { DeleteApiKeyCredentialProviderResponse } from './model/DeleteApiKeyCredentialProviderResponse';
import { DeleteOauth2CredentialProviderRequest } from './model/DeleteOauth2CredentialProviderRequest';
import { DeleteOauth2CredentialProviderResponse } from './model/DeleteOauth2CredentialProviderResponse';
import { DeletePolicyEngineRequest } from './model/DeletePolicyEngineRequest';
import { DeletePolicyEngineResponse } from './model/DeletePolicyEngineResponse';
import { DeletePolicyRequest } from './model/DeletePolicyRequest';
import { DeletePolicyResponse } from './model/DeletePolicyResponse';
import { DeleteStsCredentialProviderRequest } from './model/DeleteStsCredentialProviderRequest';
import { DeleteStsCredentialProviderResponse } from './model/DeleteStsCredentialProviderResponse';
import { DeleteWorkloadIdentityRequest } from './model/DeleteWorkloadIdentityRequest';
import { DeleteWorkloadIdentityResponse } from './model/DeleteWorkloadIdentityResponse';
import { DiscoveryUrl } from './model/DiscoveryUrl';
import { EntityType } from './model/EntityType';
import { GetApiKeyCredentialProviderRequest } from './model/GetApiKeyCredentialProviderRequest';
import { GetApiKeyCredentialProviderResponse } from './model/GetApiKeyCredentialProviderResponse';
import { GetOauth2CredentialProviderRequest } from './model/GetOauth2CredentialProviderRequest';
import { GetOauth2CredentialProviderResponse } from './model/GetOauth2CredentialProviderResponse';
import { GetPolicyEngineRequest } from './model/GetPolicyEngineRequest';
import { GetPolicyEngineResponse } from './model/GetPolicyEngineResponse';
import { GetPolicyRequest } from './model/GetPolicyRequest';
import { GetPolicyResponse } from './model/GetPolicyResponse';
import { GetResourceApiKeyRequest } from './model/GetResourceApiKeyRequest';
import { GetResourceApiKeyRequestBody } from './model/GetResourceApiKeyRequestBody';
import { GetResourceApiKeyResponse } from './model/GetResourceApiKeyResponse';
import { GetResourceOauth2TokenRequest } from './model/GetResourceOauth2TokenRequest';
import { GetResourceOauth2TokenRequestBody } from './model/GetResourceOauth2TokenRequestBody';
import { GetResourceOauth2TokenResponse } from './model/GetResourceOauth2TokenResponse';
import { GetResourceStsTokenRequest } from './model/GetResourceStsTokenRequest';
import { GetResourceStsTokenRequestBody } from './model/GetResourceStsTokenRequestBody';
import { GetResourceStsTokenResponse } from './model/GetResourceStsTokenResponse';
import { GetResourceStsTokenResponseBodyAssumedAgency } from './model/GetResourceStsTokenResponseBodyAssumedAgency';
import { GetResourceStsTokenResponseBodyCredentials } from './model/GetResourceStsTokenResponseBodyCredentials';
import { GetStsCredentialProviderRequest } from './model/GetStsCredentialProviderRequest';
import { GetStsCredentialProviderResponse } from './model/GetStsCredentialProviderResponse';
import { GetTokenVaultRequest } from './model/GetTokenVaultRequest';
import { GetTokenVaultResponse } from './model/GetTokenVaultResponse';
import { GetWorkloadIdentityAuthorizerConfigurationRequest } from './model/GetWorkloadIdentityAuthorizerConfigurationRequest';
import { GetWorkloadIdentityAuthorizerConfigurationResponse } from './model/GetWorkloadIdentityAuthorizerConfigurationResponse';
import { GetWorkloadIdentityRequest } from './model/GetWorkloadIdentityRequest';
import { GetWorkloadIdentityResponse } from './model/GetWorkloadIdentityResponse';
import { GithubOauth2ProviderConfigInput } from './model/GithubOauth2ProviderConfigInput';
import { GithubOauth2ProviderConfigOutput } from './model/GithubOauth2ProviderConfigOutput';
import { GoogleOauth2ProviderConfigInput } from './model/GoogleOauth2ProviderConfigInput';
import { GoogleOauth2ProviderConfigOutput } from './model/GoogleOauth2ProviderConfigOutput';
import { IdentityProvider } from './model/IdentityProvider';
import { IdentityProviderListSummary } from './model/IdentityProviderListSummary';
import { KeyAuthAuthorizerConfiguration } from './model/KeyAuthAuthorizerConfiguration';
import { KmsConfiguration } from './model/KmsConfiguration';
import { KmsKeyId } from './model/KmsKeyId';
import { KmsKeyType } from './model/KmsKeyType';
import { Limit } from './model/Limit';
import { ListApiKeyCredentialProvidersRequest } from './model/ListApiKeyCredentialProvidersRequest';
import { ListApiKeyCredentialProvidersResponse } from './model/ListApiKeyCredentialProvidersResponse';
import { ListIdentityProvidersRequest } from './model/ListIdentityProvidersRequest';
import { ListIdentityProvidersResponse } from './model/ListIdentityProvidersResponse';
import { ListOauth2CredentialProvidersRequest } from './model/ListOauth2CredentialProvidersRequest';
import { ListOauth2CredentialProvidersResponse } from './model/ListOauth2CredentialProvidersResponse';
import { ListPoliciesRequest } from './model/ListPoliciesRequest';
import { ListPoliciesResponse } from './model/ListPoliciesResponse';
import { ListPolicyEngineAttachmentsRequest } from './model/ListPolicyEngineAttachmentsRequest';
import { ListPolicyEngineAttachmentsResponse } from './model/ListPolicyEngineAttachmentsResponse';
import { ListPolicyEnginesRequest } from './model/ListPolicyEnginesRequest';
import { ListPolicyEnginesResponse } from './model/ListPolicyEnginesResponse';
import { ListStsCredentialProvidersRequest } from './model/ListStsCredentialProvidersRequest';
import { ListStsCredentialProvidersResponse } from './model/ListStsCredentialProvidersResponse';
import { ListWorkloadIdentitiesRequest } from './model/ListWorkloadIdentitiesRequest';
import { ListWorkloadIdentitiesResponse } from './model/ListWorkloadIdentitiesResponse';
import { Marker } from './model/Marker';
import { MicrosoftOauth2ProviderConfigInput } from './model/MicrosoftOauth2ProviderConfigInput';
import { MicrosoftOauth2ProviderConfigOutput } from './model/MicrosoftOauth2ProviderConfigOutput';
import { Oauth2AuthorizationServerMetadata } from './model/Oauth2AuthorizationServerMetadata';
import { Oauth2AuthorizeRequest } from './model/Oauth2AuthorizeRequest';
import { Oauth2AuthorizeResponse } from './model/Oauth2AuthorizeResponse';
import { Oauth2CallbackRequest } from './model/Oauth2CallbackRequest';
import { Oauth2CallbackResponse } from './model/Oauth2CallbackResponse';
import { Oauth2CredentialProvider } from './model/Oauth2CredentialProvider';
import { Oauth2CredentialProviderSummary } from './model/Oauth2CredentialProviderSummary';
import { Oauth2Discovery } from './model/Oauth2Discovery';
import { Oauth2ProviderConfigInput } from './model/Oauth2ProviderConfigInput';
import { Oauth2ProviderConfigOutput } from './model/Oauth2ProviderConfigOutput';
import { PageInfo } from './model/PageInfo';
import { Policy } from './model/Policy';
import { PolicyDefinition } from './model/PolicyDefinition';
import { PolicyEngine } from './model/PolicyEngine';
import { PolicyEngineAttachmentSummary } from './model/PolicyEngineAttachmentSummary';
import { PolicyEngineConfiguration } from './model/PolicyEngineConfiguration';
import { PolicyEngineId } from './model/PolicyEngineId';
import { PolicyEngineMode } from './model/PolicyEngineMode';
import { PolicyEngineName } from './model/PolicyEngineName';
import { PolicyEngineSummary } from './model/PolicyEngineSummary';
import { PolicyEngineType } from './model/PolicyEngineType';
import { PolicyEngineUrn } from './model/PolicyEngineUrn';
import { PolicyId } from './model/PolicyId';
import { PolicyName } from './model/PolicyName';
import { PolicyStatus } from './model/PolicyStatus';
import { PolicySummary } from './model/PolicySummary';
import { PolicyUrn } from './model/PolicyUrn';
import { Secret } from './model/Secret';
import { StsCredentialProvider } from './model/StsCredentialProvider';
import { StsCredentialProviderSummary } from './model/StsCredentialProviderSummary';
import { StsTag } from './model/StsTag';
import { Tag } from './model/Tag';
import { TenantId } from './model/TenantId';
import { TokenVault } from './model/TokenVault';
import { TokenVaultId } from './model/TokenVaultId';
import { TokenVaultUrn } from './model/TokenVaultUrn';
import { UpdateApiKeyCredentialProviderReqBody } from './model/UpdateApiKeyCredentialProviderReqBody';
import { UpdateApiKeyCredentialProviderRequest } from './model/UpdateApiKeyCredentialProviderRequest';
import { UpdateApiKeyCredentialProviderResponse } from './model/UpdateApiKeyCredentialProviderResponse';
import { UpdateOauth2CredentialProviderReqBody } from './model/UpdateOauth2CredentialProviderReqBody';
import { UpdateOauth2CredentialProviderRequest } from './model/UpdateOauth2CredentialProviderRequest';
import { UpdateOauth2CredentialProviderResponse } from './model/UpdateOauth2CredentialProviderResponse';
import { UpdatePolicyEngineReqBody } from './model/UpdatePolicyEngineReqBody';
import { UpdatePolicyEngineRequest } from './model/UpdatePolicyEngineRequest';
import { UpdatePolicyEngineResponse } from './model/UpdatePolicyEngineResponse';
import { UpdatePolicyReqBody } from './model/UpdatePolicyReqBody';
import { UpdatePolicyRequest } from './model/UpdatePolicyRequest';
import { UpdatePolicyResponse } from './model/UpdatePolicyResponse';
import { UpdateStsCredentialProviderReqBody } from './model/UpdateStsCredentialProviderReqBody';
import { UpdateStsCredentialProviderRequest } from './model/UpdateStsCredentialProviderRequest';
import { UpdateStsCredentialProviderResponse } from './model/UpdateStsCredentialProviderResponse';
import { UpdateTokenVaultReqBody } from './model/UpdateTokenVaultReqBody';
import { UpdateTokenVaultRequest } from './model/UpdateTokenVaultRequest';
import { UpdateTokenVaultResponse } from './model/UpdateTokenVaultResponse';
import { UpdateWorkloadIdentityReqBody } from './model/UpdateWorkloadIdentityReqBody';
import { UpdateWorkloadIdentityRequest } from './model/UpdateWorkloadIdentityRequest';
import { UpdateWorkloadIdentityResponse } from './model/UpdateWorkloadIdentityResponse';
import { UserIdentifier } from './model/UserIdentifier';
import { UtcDateTime } from './model/UtcDateTime';
import { ValidationMode } from './model/ValidationMode';
import { WorkloadAccessToken } from './model/WorkloadAccessToken';
import { WorkloadIdentity } from './model/WorkloadIdentity';
import { WorkloadIdentityAuthorizerConfiguration } from './model/WorkloadIdentityAuthorizerConfiguration';
import { WorkloadIdentityName } from './model/WorkloadIdentityName';
import { WorkloadIdentitySummary } from './model/WorkloadIdentitySummary';
import { WorkloadIdentityUrn } from './model/WorkloadIdentityUrn';

export class AgentIdentityClient {
    public static newBuilder(): ClientBuilder<AgentIdentityClient> {
            let client = new ClientBuilder<AgentIdentityClient>(newClient);
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
     * Creates a new API key credential provider.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建API密钥凭证提供者
     * @param {CreateApiKeyCredentialProviderReqBody} createApiKeyCredentialProviderReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApiKeyCredentialProvider(createApiKeyCredentialProviderRequest?: CreateApiKeyCredentialProviderRequest): Promise<CreateApiKeyCredentialProviderResponse> {
        const options = ParamCreater().createApiKeyCredentialProvider(createApiKeyCredentialProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Deletes an API key credential provider.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除API密钥凭证提供者
     * @param {string} credentialProviderName The name of the credential provider.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApiKeyCredentialProvider(deleteApiKeyCredentialProviderRequest?: DeleteApiKeyCredentialProviderRequest): Promise<DeleteApiKeyCredentialProviderResponse> {
        const options = ParamCreater().deleteApiKeyCredentialProvider(deleteApiKeyCredentialProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Gets details of an API key credential provider.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API密钥凭证提供者详情
     * @param {string} credentialProviderName The name of the credential provider.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getApiKeyCredentialProvider(getApiKeyCredentialProviderRequest?: GetApiKeyCredentialProviderRequest): Promise<GetApiKeyCredentialProviderResponse> {
        const options = ParamCreater().getApiKeyCredentialProvider(getApiKeyCredentialProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Lists API key credential providers.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API密钥凭证提供者列表
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiKeyCredentialProviders(listApiKeyCredentialProvidersRequest?: ListApiKeyCredentialProvidersRequest): Promise<ListApiKeyCredentialProvidersResponse> {
        const options = ParamCreater().listApiKeyCredentialProviders(listApiKeyCredentialProvidersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Updates the API key of an existing API key credential provider.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新API密钥凭证提供者
     * @param {string} credentialProviderName The name of the credential provider.
     * @param {UpdateApiKeyCredentialProviderReqBody} updateApiKeyCredentialProviderReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApiKeyCredentialProvider(updateApiKeyCredentialProviderRequest?: UpdateApiKeyCredentialProviderRequest): Promise<UpdateApiKeyCredentialProviderResponse> {
        const options = ParamCreater().updateApiKeyCredentialProvider(updateApiKeyCredentialProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Confirms the user authentication session to obtain OAuth2.0 tokens for a resource
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Confirm user authentication session for OAuth2.0 tokens
     * @param {CompleteResourceTokenAuthRequestBody} completeResourceTokenAuthRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public completeResourceTokenAuth(completeResourceTokenAuthRequest?: CompleteResourceTokenAuthRequest): Promise<CompleteResourceTokenAuthResponse> {
        const options = ParamCreater().completeResourceTokenAuth(completeResourceTokenAuthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Retrieves the API key associated with a specified resource credential provider
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Retrieve API key from resource credential provider
     * @param {GetResourceApiKeyRequestBody} getResourceApiKeyRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getResourceApiKey(getResourceApiKeyRequest?: GetResourceApiKeyRequest): Promise<GetResourceApiKeyResponse> {
        const options = ParamCreater().getResourceApiKey(getResourceApiKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Returns the OAuth2.0 token for the specified resource using the configured flow
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Retrieve OAuth2.0 token from resource credential provider
     * @param {GetResourceOauth2TokenRequestBody} getResourceOauth2TokenRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getResourceOauth2Token(getResourceOauth2TokenRequest?: GetResourceOauth2TokenRequest): Promise<GetResourceOauth2TokenResponse> {
        const options = ParamCreater().getResourceOauth2Token(getResourceOauth2TokenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Retrieves temporary STS credentials from a specified STS credential provider
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Retrieve STS credentials from STS credential provider
     * @param {GetResourceStsTokenRequestBody} getResourceStsTokenRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getResourceStsToken(getResourceStsTokenRequest?: GetResourceStsTokenRequest): Promise<GetResourceStsTokenResponse> {
        const options = ParamCreater().getResourceStsToken(getResourceStsTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Lists identity providers.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询身份提供商
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIdentityProviders(listIdentityProvidersRequest?: ListIdentityProvidersRequest): Promise<ListIdentityProvidersResponse> {
        const options = ParamCreater().listIdentityProviders();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Core OAuth2 authorization endpoint following RFC 9126 PAR spec, only accepts authorization request via request_uri parameter to trigger user authorization flow
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary OAuth2.0 Pushed Authorization Request (PAR) standard authorize API
     * @param {string} requestUri OAuth 2.0 PAR standard request URI, references authorization parameters for the OAuth2 flow
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public oauth2Authorize(oauth2AuthorizeRequest?: Oauth2AuthorizeRequest): Promise<Oauth2AuthorizeResponse> {
        const options = ParamCreater().oauth2Authorize(oauth2AuthorizeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * OAuth2 redirect callback endpoint to receive authorization result after user consent/denial
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary OAuth2.0 Standard Authorization Callback API
     * @param {string} credentialProviderId Unique identifier of the credential provider
     * @param {string} state OAuth2.0 Standard CSRF Protection State - opaque string, echo of original request state. PRESENT FOR BOTH SUCCESS AND ERROR.
     * @param {string} [code] OAuth2.0 Standard Authorization Code - one-time use, short-lived token for access token exchange. Present ONLY on successful authorization.
     * @param {string} [error] OAuth2.0 Standard Error Code - present ONLY on authorization failure (denial/expiry/invalid). e.g. access_denied, invalid_scope, server_error
     * @param {string} [errorDescription] OAuth2.0 Standard Error Description - human-readable error message, paired with error param, URL-encoded for safe transmission
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public oauth2Callback(oauth2CallbackRequest?: Oauth2CallbackRequest): Promise<Oauth2CallbackResponse> {
        const options = ParamCreater().oauth2Callback(oauth2CallbackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Creates a new OAuth2 credential provider.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建OAuth2凭证提供者
     * @param {CreateOauth2CredentialProviderReqBody} createOauth2CredentialProviderReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOauth2CredentialProvider(createOauth2CredentialProviderRequest?: CreateOauth2CredentialProviderRequest): Promise<CreateOauth2CredentialProviderResponse> {
        const options = ParamCreater().createOauth2CredentialProvider(createOauth2CredentialProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Deletes an OAuth2 credential provider.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除OAuth2凭证提供者
     * @param {string} credentialProviderName The name of the credential provider.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteOauth2CredentialProvider(deleteOauth2CredentialProviderRequest?: DeleteOauth2CredentialProviderRequest): Promise<DeleteOauth2CredentialProviderResponse> {
        const options = ParamCreater().deleteOauth2CredentialProvider(deleteOauth2CredentialProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Gets details of an OAuth2 credential provider.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询OAuth2凭证提供者详情
     * @param {string} credentialProviderName The name of the credential provider.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getOauth2CredentialProvider(getOauth2CredentialProviderRequest?: GetOauth2CredentialProviderRequest): Promise<GetOauth2CredentialProviderResponse> {
        const options = ParamCreater().getOauth2CredentialProvider(getOauth2CredentialProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Lists OAuth2 credential providers.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询OAuth2凭证提供者列表
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOauth2CredentialProviders(listOauth2CredentialProvidersRequest?: ListOauth2CredentialProvidersRequest): Promise<ListOauth2CredentialProvidersResponse> {
        const options = ParamCreater().listOauth2CredentialProviders(listOauth2CredentialProvidersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Updates an existing OAuth2 credential provider.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新OAuth2凭证提供者
     * @param {string} credentialProviderName The name of the credential provider.
     * @param {UpdateOauth2CredentialProviderReqBody} updateOauth2CredentialProviderReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateOauth2CredentialProvider(updateOauth2CredentialProviderRequest?: UpdateOauth2CredentialProviderRequest): Promise<UpdateOauth2CredentialProviderResponse> {
        const options = ParamCreater().updateOauth2CredentialProvider(updateOauth2CredentialProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Creates a new policy in the specified policy engine.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在指定策略集中创建策略
     * @param {string} policyEngineId The system-generated unique identifier of the policy engine.
     * @param {CreatePolicyReqBody} createPolicyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPolicy(createPolicyRequest?: CreatePolicyRequest): Promise<CreatePolicyResponse> {
        const options = ParamCreater().createPolicy(createPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Deletes a policy.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除策略
     * @param {string} policyEngineId The system-generated unique identifier of the policy engine.
     * @param {string} policyId The system-generated unique identifier of the policy.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePolicy(deletePolicyRequest?: DeletePolicyRequest): Promise<DeletePolicyResponse> {
        const options = ParamCreater().deletePolicy(deletePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Gets details of a specific policy.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略详情
     * @param {string} policyEngineId The system-generated unique identifier of the policy engine.
     * @param {string} policyId The system-generated unique identifier of the policy.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getPolicy(getPolicyRequest?: GetPolicyRequest): Promise<GetPolicyResponse> {
        const options = ParamCreater().getPolicy(getPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Lists policies in the specified policy engine.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略列表
     * @param {string} policyEngineId The system-generated unique identifier of the policy engine.
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicies(listPoliciesRequest?: ListPoliciesRequest): Promise<ListPoliciesResponse> {
        const options = ParamCreater().listPolicies(listPoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Updates an existing policy.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新策略
     * @param {string} policyEngineId The system-generated unique identifier of the policy engine.
     * @param {string} policyId The system-generated unique identifier of the policy.
     * @param {UpdatePolicyReqBody} updatePolicyReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePolicy(updatePolicyRequest?: UpdatePolicyRequest): Promise<UpdatePolicyResponse> {
        const options = ParamCreater().updatePolicy(updatePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Creates a new policy engine.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建策略集
     * @param {CreatePolicyEngineReqBody} createPolicyEngineReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPolicyEngine(createPolicyEngineRequest?: CreatePolicyEngineRequest): Promise<CreatePolicyEngineResponse> {
        const options = ParamCreater().createPolicyEngine(createPolicyEngineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Deletes a policy engine.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除策略集
     * @param {string} policyEngineId The system-generated unique identifier of the policy engine.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePolicyEngine(deletePolicyEngineRequest?: DeletePolicyEngineRequest): Promise<DeletePolicyEngineResponse> {
        const options = ParamCreater().deletePolicyEngine(deletePolicyEngineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Gets details of a policy engine.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略集详情
     * @param {string} policyEngineId The system-generated unique identifier of the policy engine.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getPolicyEngine(getPolicyEngineRequest?: GetPolicyEngineRequest): Promise<GetPolicyEngineResponse> {
        const options = ParamCreater().getPolicyEngine(getPolicyEngineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Lists the entities (gateways and token vaults) attached to the specified policy engine.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略集关联的实体列表
     * @param {string} policyEngineId The system-generated unique identifier of the policy engine.
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyEngineAttachments(listPolicyEngineAttachmentsRequest?: ListPolicyEngineAttachmentsRequest): Promise<ListPolicyEngineAttachmentsResponse> {
        const options = ParamCreater().listPolicyEngineAttachments(listPolicyEngineAttachmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Lists policy engines.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询策略集列表
     * @param {PolicyEngineType} [type] Filter by policy engine type. If not specified, all policy engine types are returned.
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPolicyEngines(listPolicyEnginesRequest?: ListPolicyEnginesRequest): Promise<ListPolicyEnginesResponse> {
        const options = ParamCreater().listPolicyEngines(listPolicyEnginesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Updates a policy engine (description only).
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新策略集
     * @param {string} policyEngineId The system-generated unique identifier of the policy engine.
     * @param {UpdatePolicyEngineReqBody} updatePolicyEngineReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePolicyEngine(updatePolicyEngineRequest?: UpdatePolicyEngineRequest): Promise<UpdatePolicyEngineResponse> {
        const options = ParamCreater().updatePolicyEngine(updatePolicyEngineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Creates a new STS credential provider.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建STS凭证提供者
     * @param {CreateStsCredentialProviderReqBody} createStsCredentialProviderReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStsCredentialProvider(createStsCredentialProviderRequest?: CreateStsCredentialProviderRequest): Promise<CreateStsCredentialProviderResponse> {
        const options = ParamCreater().createStsCredentialProvider(createStsCredentialProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Deletes an STS credential provider.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除STS凭证提供者
     * @param {string} credentialProviderName The name of the credential provider.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStsCredentialProvider(deleteStsCredentialProviderRequest?: DeleteStsCredentialProviderRequest): Promise<DeleteStsCredentialProviderResponse> {
        const options = ParamCreater().deleteStsCredentialProvider(deleteStsCredentialProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Gets details of an STS credential provider.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询STS凭证提供者详情
     * @param {string} credentialProviderName The name of the credential provider.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getStsCredentialProvider(getStsCredentialProviderRequest?: GetStsCredentialProviderRequest): Promise<GetStsCredentialProviderResponse> {
        const options = ParamCreater().getStsCredentialProvider(getStsCredentialProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Lists STS credential providers.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询STS凭证提供者列表
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStsCredentialProviders(listStsCredentialProvidersRequest?: ListStsCredentialProvidersRequest): Promise<ListStsCredentialProvidersResponse> {
        const options = ParamCreater().listStsCredentialProviders(listStsCredentialProvidersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Updates an existing STS credential provider.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新STS凭证提供者
     * @param {string} credentialProviderName The name of the credential provider.
     * @param {UpdateStsCredentialProviderReqBody} updateStsCredentialProviderReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStsCredentialProvider(updateStsCredentialProviderRequest?: UpdateStsCredentialProviderRequest): Promise<UpdateStsCredentialProviderResponse> {
        const options = ParamCreater().updateStsCredentialProvider(updateStsCredentialProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Gets details of a token vault.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询令牌保管库详情
     * @param {string} tokenVaultId The unique identifier of the token vault.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getTokenVault(getTokenVaultRequest?: GetTokenVaultRequest): Promise<GetTokenVaultResponse> {
        const options = ParamCreater().getTokenVault(getTokenVaultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Updates the token vault configuration including KMS and policy engine settings.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新令牌保管库配置
     * @param {string} tokenVaultId The unique identifier of the token vault.
     * @param {UpdateTokenVaultReqBody} updateTokenVaultReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTokenVault(updateTokenVaultRequest?: UpdateTokenVaultRequest): Promise<UpdateTokenVaultResponse> {
        const options = ParamCreater().updateTokenVault(updateTokenVaultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Retrieves a workload access token for agentic workloads that do not act on behalf of a user
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Create workload access token (not acting on behalf of a user)
     * @param {CreateWorkloadAccessTokenRequestBody} createWorkloadAccessTokenRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkloadAccessToken(createWorkloadAccessTokenRequest?: CreateWorkloadAccessTokenRequest): Promise<CreateWorkloadAccessTokenResponse> {
        const options = ParamCreater().createWorkloadAccessToken(createWorkloadAccessTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Retrieves a workload access token for agentic workloads acting on behalf of a user, using a JWT token
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Create workload access token using JWT (acting on behalf of a user)
     * @param {CreateWorkloadAccessTokenForJwtRequestBody} createWorkloadAccessTokenForJwtRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkloadAccessTokenForJwt(createWorkloadAccessTokenForJwtRequest?: CreateWorkloadAccessTokenForJwtRequest): Promise<CreateWorkloadAccessTokenForJwtResponse> {
        const options = ParamCreater().createWorkloadAccessTokenForJwt(createWorkloadAccessTokenForJwtRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Retrieves a workload access token for agentic workloads acting on behalf of a user, using the user\&#39;s ID
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Create workload access token using user ID (acting on behalf of a user)
     * @param {CreateWorkloadAccessTokenForUserIdRequestBody} createWorkloadAccessTokenForUserIdRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkloadAccessTokenForUserId(createWorkloadAccessTokenForUserIdRequest?: CreateWorkloadAccessTokenForUserIdRequest): Promise<CreateWorkloadAccessTokenForUserIdResponse> {
        const options = ParamCreater().createWorkloadAccessTokenForUserId(createWorkloadAccessTokenForUserIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Creates a new workload identity.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建工作负载身份
     * @param {CreateWorkloadIdentityReqBody} createWorkloadIdentityReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkloadIdentity(createWorkloadIdentityRequest?: CreateWorkloadIdentityRequest): Promise<CreateWorkloadIdentityResponse> {
        const options = ParamCreater().createWorkloadIdentity(createWorkloadIdentityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Deletes a workload identity.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除工作负载身份
     * @param {string} workloadIdentityName The name of the workload identity.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWorkloadIdentity(deleteWorkloadIdentityRequest?: DeleteWorkloadIdentityRequest): Promise<DeleteWorkloadIdentityResponse> {
        const options = ParamCreater().deleteWorkloadIdentity(deleteWorkloadIdentityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Gets details of a workload identity.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作负载身份详情
     * @param {string} workloadIdentityName The name of the workload identity.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getWorkloadIdentity(getWorkloadIdentityRequest?: GetWorkloadIdentityRequest): Promise<GetWorkloadIdentityResponse> {
        const options = ParamCreater().getWorkloadIdentity(getWorkloadIdentityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Gets the authorizer configuration of a workload identity.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作负载身份的授权配置
     * @param {string} workloadIdentityName The name of the workload identity.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getWorkloadIdentityAuthorizerConfiguration(getWorkloadIdentityAuthorizerConfigurationRequest?: GetWorkloadIdentityAuthorizerConfigurationRequest): Promise<GetWorkloadIdentityAuthorizerConfigurationResponse> {
        const options = ParamCreater().getWorkloadIdentityAuthorizerConfiguration(getWorkloadIdentityAuthorizerConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Lists workload identities.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作负载身份列表
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [marker] 分页标记。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkloadIdentities(listWorkloadIdentitiesRequest?: ListWorkloadIdentitiesRequest): Promise<ListWorkloadIdentitiesResponse> {
        const options = ParamCreater().listWorkloadIdentities(listWorkloadIdentitiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Updates an existing workload identity.
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新工作负载身份
     * @param {string} workloadIdentityName The name of the workload identity.
     * @param {UpdateWorkloadIdentityReqBody} updateWorkloadIdentityReqBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkloadIdentity(updateWorkloadIdentityRequest?: UpdateWorkloadIdentityRequest): Promise<UpdateWorkloadIdentityResponse> {
        const options = ParamCreater().updateWorkloadIdentity(updateWorkloadIdentityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * Creates a new API key credential provider.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApiKeyCredentialProvider(createApiKeyCredentialProviderRequest?: CreateApiKeyCredentialProviderRequest) {
            const options = {
                method: "POST",
                url: "/v1/api-key-credential-providers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createApiKeyCredentialProviderRequest !== null && createApiKeyCredentialProviderRequest !== undefined) {
                if (createApiKeyCredentialProviderRequest instanceof CreateApiKeyCredentialProviderRequest) {
                    body = createApiKeyCredentialProviderRequest.body
                } else {
                    body = createApiKeyCredentialProviderRequest['body'];
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
         * Deletes an API key credential provider.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApiKeyCredentialProvider(deleteApiKeyCredentialProviderRequest?: DeleteApiKeyCredentialProviderRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/api-key-credential-providers/{credential_provider_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let credentialProviderName;

            if (deleteApiKeyCredentialProviderRequest !== null && deleteApiKeyCredentialProviderRequest !== undefined) {
                if (deleteApiKeyCredentialProviderRequest instanceof DeleteApiKeyCredentialProviderRequest) {
                    credentialProviderName = deleteApiKeyCredentialProviderRequest.credentialProviderName;
                } else {
                    credentialProviderName = deleteApiKeyCredentialProviderRequest['credential_provider_name'];
                }
            }

        
            if (credentialProviderName === null || credentialProviderName === undefined) {
            throw new RequiredError('credentialProviderName','Required parameter credentialProviderName was null or undefined when calling deleteApiKeyCredentialProvider.');
            }

            options.pathParams = { 'credential_provider_name': credentialProviderName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Gets details of an API key credential provider.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getApiKeyCredentialProvider(getApiKeyCredentialProviderRequest?: GetApiKeyCredentialProviderRequest) {
            const options = {
                method: "GET",
                url: "/v1/api-key-credential-providers/{credential_provider_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let credentialProviderName;

            if (getApiKeyCredentialProviderRequest !== null && getApiKeyCredentialProviderRequest !== undefined) {
                if (getApiKeyCredentialProviderRequest instanceof GetApiKeyCredentialProviderRequest) {
                    credentialProviderName = getApiKeyCredentialProviderRequest.credentialProviderName;
                } else {
                    credentialProviderName = getApiKeyCredentialProviderRequest['credential_provider_name'];
                }
            }

        
            if (credentialProviderName === null || credentialProviderName === undefined) {
            throw new RequiredError('credentialProviderName','Required parameter credentialProviderName was null or undefined when calling getApiKeyCredentialProvider.');
            }

            options.pathParams = { 'credential_provider_name': credentialProviderName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Lists API key credential providers.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiKeyCredentialProviders(listApiKeyCredentialProvidersRequest?: ListApiKeyCredentialProvidersRequest) {
            const options = {
                method: "GET",
                url: "/v1/api-key-credential-providers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listApiKeyCredentialProvidersRequest !== null && listApiKeyCredentialProvidersRequest !== undefined) {
                if (listApiKeyCredentialProvidersRequest instanceof ListApiKeyCredentialProvidersRequest) {
                    limit = listApiKeyCredentialProvidersRequest.limit;
                    marker = listApiKeyCredentialProvidersRequest.marker;
                } else {
                    limit = listApiKeyCredentialProvidersRequest['limit'];
                    marker = listApiKeyCredentialProvidersRequest['marker'];
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
         * Updates the API key of an existing API key credential provider.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApiKeyCredentialProvider(updateApiKeyCredentialProviderRequest?: UpdateApiKeyCredentialProviderRequest) {
            const options = {
                method: "PUT",
                url: "/v1/api-key-credential-providers/{credential_provider_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let credentialProviderName;

            if (updateApiKeyCredentialProviderRequest !== null && updateApiKeyCredentialProviderRequest !== undefined) {
                if (updateApiKeyCredentialProviderRequest instanceof UpdateApiKeyCredentialProviderRequest) {
                    credentialProviderName = updateApiKeyCredentialProviderRequest.credentialProviderName;
                    body = updateApiKeyCredentialProviderRequest.body
                } else {
                    credentialProviderName = updateApiKeyCredentialProviderRequest['credential_provider_name'];
                    body = updateApiKeyCredentialProviderRequest['body'];
                }
            }

        
            if (credentialProviderName === null || credentialProviderName === undefined) {
            throw new RequiredError('credentialProviderName','Required parameter credentialProviderName was null or undefined when calling updateApiKeyCredentialProvider.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'credential_provider_name': credentialProviderName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Confirms the user authentication session to obtain OAuth2.0 tokens for a resource
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        completeResourceTokenAuth(completeResourceTokenAuthRequest?: CompleteResourceTokenAuthRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-token-auth/complete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (completeResourceTokenAuthRequest !== null && completeResourceTokenAuthRequest !== undefined) {
                if (completeResourceTokenAuthRequest instanceof CompleteResourceTokenAuthRequest) {
                    body = completeResourceTokenAuthRequest.body
                } else {
                    body = completeResourceTokenAuthRequest['body'];
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
         * Retrieves the API key associated with a specified resource credential provider
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getResourceApiKey(getResourceApiKeyRequest?: GetResourceApiKeyRequest) {
            const options = {
                method: "POST",
                url: "/v1/api-key",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (getResourceApiKeyRequest !== null && getResourceApiKeyRequest !== undefined) {
                if (getResourceApiKeyRequest instanceof GetResourceApiKeyRequest) {
                    body = getResourceApiKeyRequest.body
                } else {
                    body = getResourceApiKeyRequest['body'];
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
         * Returns the OAuth2.0 token for the specified resource using the configured flow
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getResourceOauth2Token(getResourceOauth2TokenRequest?: GetResourceOauth2TokenRequest) {
            const options = {
                method: "POST",
                url: "/v1/oauth2/token",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (getResourceOauth2TokenRequest !== null && getResourceOauth2TokenRequest !== undefined) {
                if (getResourceOauth2TokenRequest instanceof GetResourceOauth2TokenRequest) {
                    body = getResourceOauth2TokenRequest.body
                } else {
                    body = getResourceOauth2TokenRequest['body'];
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
         * Retrieves temporary STS credentials from a specified STS credential provider
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getResourceStsToken(getResourceStsTokenRequest?: GetResourceStsTokenRequest) {
            const options = {
                method: "POST",
                url: "/v1/sts/token",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (getResourceStsTokenRequest !== null && getResourceStsTokenRequest !== undefined) {
                if (getResourceStsTokenRequest instanceof GetResourceStsTokenRequest) {
                    body = getResourceStsTokenRequest.body
                } else {
                    body = getResourceStsTokenRequest['body'];
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
         * Lists identity providers.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIdentityProviders() {
            const options = {
                method: "GET",
                url: "/v1/identity-providers",
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
         * Core OAuth2 authorization endpoint following RFC 9126 PAR spec, only accepts authorization request via request_uri parameter to trigger user authorization flow
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        oauth2Authorize(oauth2AuthorizeRequest?: Oauth2AuthorizeRequest) {
            const options = {
                method: "GET",
                url: "/v1/oauth2/authorize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let requestUri;

            if (oauth2AuthorizeRequest !== null && oauth2AuthorizeRequest !== undefined) {
                if (oauth2AuthorizeRequest instanceof Oauth2AuthorizeRequest) {
                    requestUri = oauth2AuthorizeRequest.requestUri;
                } else {
                    requestUri = oauth2AuthorizeRequest['request_uri'];
                }
            }

        
            if (requestUri === null || requestUri === undefined) {
                throw new RequiredError('requestUri','Required parameter requestUri was null or undefined when calling oauth2Authorize.');
            }
            if (requestUri !== null && requestUri !== undefined) {
                localVarQueryParameter['request_uri'] = requestUri;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * OAuth2 redirect callback endpoint to receive authorization result after user consent/denial
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        oauth2Callback(oauth2CallbackRequest?: Oauth2CallbackRequest) {
            const options = {
                method: "GET",
                url: "/v1/oauth2/callback/{credential_provider_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let credentialProviderId;
            
            let state;
            
            let code;
            
            let error;
            
            let errorDescription;

            if (oauth2CallbackRequest !== null && oauth2CallbackRequest !== undefined) {
                if (oauth2CallbackRequest instanceof Oauth2CallbackRequest) {
                    credentialProviderId = oauth2CallbackRequest.credentialProviderId;
                    state = oauth2CallbackRequest.state;
                    code = oauth2CallbackRequest.code;
                    error = oauth2CallbackRequest.error;
                    errorDescription = oauth2CallbackRequest.errorDescription;
                } else {
                    credentialProviderId = oauth2CallbackRequest['credential_provider_id'];
                    state = oauth2CallbackRequest['state'];
                    code = oauth2CallbackRequest['code'];
                    error = oauth2CallbackRequest['error'];
                    errorDescription = oauth2CallbackRequest['error_description'];
                }
            }

        
            if (credentialProviderId === null || credentialProviderId === undefined) {
            throw new RequiredError('credentialProviderId','Required parameter credentialProviderId was null or undefined when calling oauth2Callback.');
            }
            if (state === null || state === undefined) {
                throw new RequiredError('state','Required parameter state was null or undefined when calling oauth2Callback.');
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (code !== null && code !== undefined) {
                localVarQueryParameter['code'] = code;
            }
            if (error !== null && error !== undefined) {
                localVarQueryParameter['error'] = error;
            }
            if (errorDescription !== null && errorDescription !== undefined) {
                localVarQueryParameter['error_description'] = errorDescription;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'credential_provider_id': credentialProviderId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Creates a new OAuth2 credential provider.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOauth2CredentialProvider(createOauth2CredentialProviderRequest?: CreateOauth2CredentialProviderRequest) {
            const options = {
                method: "POST",
                url: "/v1/oauth2-credential-providers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createOauth2CredentialProviderRequest !== null && createOauth2CredentialProviderRequest !== undefined) {
                if (createOauth2CredentialProviderRequest instanceof CreateOauth2CredentialProviderRequest) {
                    body = createOauth2CredentialProviderRequest.body
                } else {
                    body = createOauth2CredentialProviderRequest['body'];
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
         * Deletes an OAuth2 credential provider.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteOauth2CredentialProvider(deleteOauth2CredentialProviderRequest?: DeleteOauth2CredentialProviderRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/oauth2-credential-providers/{credential_provider_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let credentialProviderName;

            if (deleteOauth2CredentialProviderRequest !== null && deleteOauth2CredentialProviderRequest !== undefined) {
                if (deleteOauth2CredentialProviderRequest instanceof DeleteOauth2CredentialProviderRequest) {
                    credentialProviderName = deleteOauth2CredentialProviderRequest.credentialProviderName;
                } else {
                    credentialProviderName = deleteOauth2CredentialProviderRequest['credential_provider_name'];
                }
            }

        
            if (credentialProviderName === null || credentialProviderName === undefined) {
            throw new RequiredError('credentialProviderName','Required parameter credentialProviderName was null or undefined when calling deleteOauth2CredentialProvider.');
            }

            options.pathParams = { 'credential_provider_name': credentialProviderName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Gets details of an OAuth2 credential provider.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getOauth2CredentialProvider(getOauth2CredentialProviderRequest?: GetOauth2CredentialProviderRequest) {
            const options = {
                method: "GET",
                url: "/v1/oauth2-credential-providers/{credential_provider_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let credentialProviderName;

            if (getOauth2CredentialProviderRequest !== null && getOauth2CredentialProviderRequest !== undefined) {
                if (getOauth2CredentialProviderRequest instanceof GetOauth2CredentialProviderRequest) {
                    credentialProviderName = getOauth2CredentialProviderRequest.credentialProviderName;
                } else {
                    credentialProviderName = getOauth2CredentialProviderRequest['credential_provider_name'];
                }
            }

        
            if (credentialProviderName === null || credentialProviderName === undefined) {
            throw new RequiredError('credentialProviderName','Required parameter credentialProviderName was null or undefined when calling getOauth2CredentialProvider.');
            }

            options.pathParams = { 'credential_provider_name': credentialProviderName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Lists OAuth2 credential providers.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOauth2CredentialProviders(listOauth2CredentialProvidersRequest?: ListOauth2CredentialProvidersRequest) {
            const options = {
                method: "GET",
                url: "/v1/oauth2-credential-providers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listOauth2CredentialProvidersRequest !== null && listOauth2CredentialProvidersRequest !== undefined) {
                if (listOauth2CredentialProvidersRequest instanceof ListOauth2CredentialProvidersRequest) {
                    limit = listOauth2CredentialProvidersRequest.limit;
                    marker = listOauth2CredentialProvidersRequest.marker;
                } else {
                    limit = listOauth2CredentialProvidersRequest['limit'];
                    marker = listOauth2CredentialProvidersRequest['marker'];
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
         * Updates an existing OAuth2 credential provider.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateOauth2CredentialProvider(updateOauth2CredentialProviderRequest?: UpdateOauth2CredentialProviderRequest) {
            const options = {
                method: "PUT",
                url: "/v1/oauth2-credential-providers/{credential_provider_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let credentialProviderName;

            if (updateOauth2CredentialProviderRequest !== null && updateOauth2CredentialProviderRequest !== undefined) {
                if (updateOauth2CredentialProviderRequest instanceof UpdateOauth2CredentialProviderRequest) {
                    credentialProviderName = updateOauth2CredentialProviderRequest.credentialProviderName;
                    body = updateOauth2CredentialProviderRequest.body
                } else {
                    credentialProviderName = updateOauth2CredentialProviderRequest['credential_provider_name'];
                    body = updateOauth2CredentialProviderRequest['body'];
                }
            }

        
            if (credentialProviderName === null || credentialProviderName === undefined) {
            throw new RequiredError('credentialProviderName','Required parameter credentialProviderName was null or undefined when calling updateOauth2CredentialProvider.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'credential_provider_name': credentialProviderName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Creates a new policy in the specified policy engine.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPolicy(createPolicyRequest?: CreatePolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1/policy-engines/{policy_engine_id}/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyEngineId;

            if (createPolicyRequest !== null && createPolicyRequest !== undefined) {
                if (createPolicyRequest instanceof CreatePolicyRequest) {
                    policyEngineId = createPolicyRequest.policyEngineId;
                    body = createPolicyRequest.body
                } else {
                    policyEngineId = createPolicyRequest['policy_engine_id'];
                    body = createPolicyRequest['body'];
                }
            }

        
            if (policyEngineId === null || policyEngineId === undefined) {
            throw new RequiredError('policyEngineId','Required parameter policyEngineId was null or undefined when calling createPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_engine_id': policyEngineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Deletes a policy.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePolicy(deletePolicyRequest?: DeletePolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/policy-engines/{policy_engine_id}/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyEngineId;
            
            let policyId;

            if (deletePolicyRequest !== null && deletePolicyRequest !== undefined) {
                if (deletePolicyRequest instanceof DeletePolicyRequest) {
                    policyEngineId = deletePolicyRequest.policyEngineId;
                    policyId = deletePolicyRequest.policyId;
                } else {
                    policyEngineId = deletePolicyRequest['policy_engine_id'];
                    policyId = deletePolicyRequest['policy_id'];
                }
            }

        
            if (policyEngineId === null || policyEngineId === undefined) {
            throw new RequiredError('policyEngineId','Required parameter policyEngineId was null or undefined when calling deletePolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deletePolicy.');
            }

            options.pathParams = { 'policy_engine_id': policyEngineId,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Gets details of a specific policy.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getPolicy(getPolicyRequest?: GetPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v1/policy-engines/{policy_engine_id}/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyEngineId;
            
            let policyId;

            if (getPolicyRequest !== null && getPolicyRequest !== undefined) {
                if (getPolicyRequest instanceof GetPolicyRequest) {
                    policyEngineId = getPolicyRequest.policyEngineId;
                    policyId = getPolicyRequest.policyId;
                } else {
                    policyEngineId = getPolicyRequest['policy_engine_id'];
                    policyId = getPolicyRequest['policy_id'];
                }
            }

        
            if (policyEngineId === null || policyEngineId === undefined) {
            throw new RequiredError('policyEngineId','Required parameter policyEngineId was null or undefined when calling getPolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling getPolicy.');
            }

            options.pathParams = { 'policy_engine_id': policyEngineId,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Lists policies in the specified policy engine.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicies(listPoliciesRequest?: ListPoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v1/policy-engines/{policy_engine_id}/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyEngineId;
            
            let limit;
            
            let marker;

            if (listPoliciesRequest !== null && listPoliciesRequest !== undefined) {
                if (listPoliciesRequest instanceof ListPoliciesRequest) {
                    policyEngineId = listPoliciesRequest.policyEngineId;
                    limit = listPoliciesRequest.limit;
                    marker = listPoliciesRequest.marker;
                } else {
                    policyEngineId = listPoliciesRequest['policy_engine_id'];
                    limit = listPoliciesRequest['limit'];
                    marker = listPoliciesRequest['marker'];
                }
            }

        
            if (policyEngineId === null || policyEngineId === undefined) {
            throw new RequiredError('policyEngineId','Required parameter policyEngineId was null or undefined when calling listPolicies.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_engine_id': policyEngineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Updates an existing policy.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePolicy(updatePolicyRequest?: UpdatePolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v1/policy-engines/{policy_engine_id}/policies/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyEngineId;
            
            let policyId;

            if (updatePolicyRequest !== null && updatePolicyRequest !== undefined) {
                if (updatePolicyRequest instanceof UpdatePolicyRequest) {
                    policyEngineId = updatePolicyRequest.policyEngineId;
                    policyId = updatePolicyRequest.policyId;
                    body = updatePolicyRequest.body
                } else {
                    policyEngineId = updatePolicyRequest['policy_engine_id'];
                    policyId = updatePolicyRequest['policy_id'];
                    body = updatePolicyRequest['body'];
                }
            }

        
            if (policyEngineId === null || policyEngineId === undefined) {
            throw new RequiredError('policyEngineId','Required parameter policyEngineId was null or undefined when calling updatePolicy.');
            }
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updatePolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_engine_id': policyEngineId,'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Creates a new policy engine.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPolicyEngine(createPolicyEngineRequest?: CreatePolicyEngineRequest) {
            const options = {
                method: "POST",
                url: "/v1/policy-engines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPolicyEngineRequest !== null && createPolicyEngineRequest !== undefined) {
                if (createPolicyEngineRequest instanceof CreatePolicyEngineRequest) {
                    body = createPolicyEngineRequest.body
                } else {
                    body = createPolicyEngineRequest['body'];
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
         * Deletes a policy engine.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePolicyEngine(deletePolicyEngineRequest?: DeletePolicyEngineRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/policy-engines/{policy_engine_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyEngineId;

            if (deletePolicyEngineRequest !== null && deletePolicyEngineRequest !== undefined) {
                if (deletePolicyEngineRequest instanceof DeletePolicyEngineRequest) {
                    policyEngineId = deletePolicyEngineRequest.policyEngineId;
                } else {
                    policyEngineId = deletePolicyEngineRequest['policy_engine_id'];
                }
            }

        
            if (policyEngineId === null || policyEngineId === undefined) {
            throw new RequiredError('policyEngineId','Required parameter policyEngineId was null or undefined when calling deletePolicyEngine.');
            }

            options.pathParams = { 'policy_engine_id': policyEngineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Gets details of a policy engine.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getPolicyEngine(getPolicyEngineRequest?: GetPolicyEngineRequest) {
            const options = {
                method: "GET",
                url: "/v1/policy-engines/{policy_engine_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyEngineId;

            if (getPolicyEngineRequest !== null && getPolicyEngineRequest !== undefined) {
                if (getPolicyEngineRequest instanceof GetPolicyEngineRequest) {
                    policyEngineId = getPolicyEngineRequest.policyEngineId;
                } else {
                    policyEngineId = getPolicyEngineRequest['policy_engine_id'];
                }
            }

        
            if (policyEngineId === null || policyEngineId === undefined) {
            throw new RequiredError('policyEngineId','Required parameter policyEngineId was null or undefined when calling getPolicyEngine.');
            }

            options.pathParams = { 'policy_engine_id': policyEngineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Lists the entities (gateways and token vaults) attached to the specified policy engine.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyEngineAttachments(listPolicyEngineAttachmentsRequest?: ListPolicyEngineAttachmentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/policy-engines/{policy_engine_id}/attachments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let policyEngineId;
            
            let limit;
            
            let marker;

            if (listPolicyEngineAttachmentsRequest !== null && listPolicyEngineAttachmentsRequest !== undefined) {
                if (listPolicyEngineAttachmentsRequest instanceof ListPolicyEngineAttachmentsRequest) {
                    policyEngineId = listPolicyEngineAttachmentsRequest.policyEngineId;
                    limit = listPolicyEngineAttachmentsRequest.limit;
                    marker = listPolicyEngineAttachmentsRequest.marker;
                } else {
                    policyEngineId = listPolicyEngineAttachmentsRequest['policy_engine_id'];
                    limit = listPolicyEngineAttachmentsRequest['limit'];
                    marker = listPolicyEngineAttachmentsRequest['marker'];
                }
            }

        
            if (policyEngineId === null || policyEngineId === undefined) {
            throw new RequiredError('policyEngineId','Required parameter policyEngineId was null or undefined when calling listPolicyEngineAttachments.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'policy_engine_id': policyEngineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Lists policy engines.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPolicyEngines(listPolicyEnginesRequest?: ListPolicyEnginesRequest) {
            const options = {
                method: "GET",
                url: "/v1/policy-engines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;
            
            let limit;
            
            let marker;

            if (listPolicyEnginesRequest !== null && listPolicyEnginesRequest !== undefined) {
                if (listPolicyEnginesRequest instanceof ListPolicyEnginesRequest) {
                    type = listPolicyEnginesRequest.type;
                    limit = listPolicyEnginesRequest.limit;
                    marker = listPolicyEnginesRequest.marker;
                } else {
                    type = listPolicyEnginesRequest['type'];
                    limit = listPolicyEnginesRequest['limit'];
                    marker = listPolicyEnginesRequest['marker'];
                }
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Updates a policy engine (description only).
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePolicyEngine(updatePolicyEngineRequest?: UpdatePolicyEngineRequest) {
            const options = {
                method: "PUT",
                url: "/v1/policy-engines/{policy_engine_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyEngineId;

            if (updatePolicyEngineRequest !== null && updatePolicyEngineRequest !== undefined) {
                if (updatePolicyEngineRequest instanceof UpdatePolicyEngineRequest) {
                    policyEngineId = updatePolicyEngineRequest.policyEngineId;
                    body = updatePolicyEngineRequest.body
                } else {
                    policyEngineId = updatePolicyEngineRequest['policy_engine_id'];
                    body = updatePolicyEngineRequest['body'];
                }
            }

        
            if (policyEngineId === null || policyEngineId === undefined) {
            throw new RequiredError('policyEngineId','Required parameter policyEngineId was null or undefined when calling updatePolicyEngine.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_engine_id': policyEngineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Creates a new STS credential provider.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStsCredentialProvider(createStsCredentialProviderRequest?: CreateStsCredentialProviderRequest) {
            const options = {
                method: "POST",
                url: "/v1/sts-credential-providers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createStsCredentialProviderRequest !== null && createStsCredentialProviderRequest !== undefined) {
                if (createStsCredentialProviderRequest instanceof CreateStsCredentialProviderRequest) {
                    body = createStsCredentialProviderRequest.body
                } else {
                    body = createStsCredentialProviderRequest['body'];
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
         * Deletes an STS credential provider.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStsCredentialProvider(deleteStsCredentialProviderRequest?: DeleteStsCredentialProviderRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/sts-credential-providers/{credential_provider_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let credentialProviderName;

            if (deleteStsCredentialProviderRequest !== null && deleteStsCredentialProviderRequest !== undefined) {
                if (deleteStsCredentialProviderRequest instanceof DeleteStsCredentialProviderRequest) {
                    credentialProviderName = deleteStsCredentialProviderRequest.credentialProviderName;
                } else {
                    credentialProviderName = deleteStsCredentialProviderRequest['credential_provider_name'];
                }
            }

        
            if (credentialProviderName === null || credentialProviderName === undefined) {
            throw new RequiredError('credentialProviderName','Required parameter credentialProviderName was null or undefined when calling deleteStsCredentialProvider.');
            }

            options.pathParams = { 'credential_provider_name': credentialProviderName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Gets details of an STS credential provider.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getStsCredentialProvider(getStsCredentialProviderRequest?: GetStsCredentialProviderRequest) {
            const options = {
                method: "GET",
                url: "/v1/sts-credential-providers/{credential_provider_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let credentialProviderName;

            if (getStsCredentialProviderRequest !== null && getStsCredentialProviderRequest !== undefined) {
                if (getStsCredentialProviderRequest instanceof GetStsCredentialProviderRequest) {
                    credentialProviderName = getStsCredentialProviderRequest.credentialProviderName;
                } else {
                    credentialProviderName = getStsCredentialProviderRequest['credential_provider_name'];
                }
            }

        
            if (credentialProviderName === null || credentialProviderName === undefined) {
            throw new RequiredError('credentialProviderName','Required parameter credentialProviderName was null or undefined when calling getStsCredentialProvider.');
            }

            options.pathParams = { 'credential_provider_name': credentialProviderName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Lists STS credential providers.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStsCredentialProviders(listStsCredentialProvidersRequest?: ListStsCredentialProvidersRequest) {
            const options = {
                method: "GET",
                url: "/v1/sts-credential-providers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listStsCredentialProvidersRequest !== null && listStsCredentialProvidersRequest !== undefined) {
                if (listStsCredentialProvidersRequest instanceof ListStsCredentialProvidersRequest) {
                    limit = listStsCredentialProvidersRequest.limit;
                    marker = listStsCredentialProvidersRequest.marker;
                } else {
                    limit = listStsCredentialProvidersRequest['limit'];
                    marker = listStsCredentialProvidersRequest['marker'];
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
         * Updates an existing STS credential provider.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStsCredentialProvider(updateStsCredentialProviderRequest?: UpdateStsCredentialProviderRequest) {
            const options = {
                method: "PUT",
                url: "/v1/sts-credential-providers/{credential_provider_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let credentialProviderName;

            if (updateStsCredentialProviderRequest !== null && updateStsCredentialProviderRequest !== undefined) {
                if (updateStsCredentialProviderRequest instanceof UpdateStsCredentialProviderRequest) {
                    credentialProviderName = updateStsCredentialProviderRequest.credentialProviderName;
                    body = updateStsCredentialProviderRequest.body
                } else {
                    credentialProviderName = updateStsCredentialProviderRequest['credential_provider_name'];
                    body = updateStsCredentialProviderRequest['body'];
                }
            }

        
            if (credentialProviderName === null || credentialProviderName === undefined) {
            throw new RequiredError('credentialProviderName','Required parameter credentialProviderName was null or undefined when calling updateStsCredentialProvider.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'credential_provider_name': credentialProviderName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Gets details of a token vault.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getTokenVault(getTokenVaultRequest?: GetTokenVaultRequest) {
            const options = {
                method: "GET",
                url: "/v1/token-vaults/{token_vault_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let tokenVaultId;

            if (getTokenVaultRequest !== null && getTokenVaultRequest !== undefined) {
                if (getTokenVaultRequest instanceof GetTokenVaultRequest) {
                    tokenVaultId = getTokenVaultRequest.tokenVaultId;
                } else {
                    tokenVaultId = getTokenVaultRequest['token_vault_id'];
                }
            }

        
            if (tokenVaultId === null || tokenVaultId === undefined) {
            throw new RequiredError('tokenVaultId','Required parameter tokenVaultId was null or undefined when calling getTokenVault.');
            }

            options.pathParams = { 'token_vault_id': tokenVaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Updates the token vault configuration including KMS and policy engine settings.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTokenVault(updateTokenVaultRequest?: UpdateTokenVaultRequest) {
            const options = {
                method: "PUT",
                url: "/v1/token-vaults/{token_vault_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let tokenVaultId;

            if (updateTokenVaultRequest !== null && updateTokenVaultRequest !== undefined) {
                if (updateTokenVaultRequest instanceof UpdateTokenVaultRequest) {
                    tokenVaultId = updateTokenVaultRequest.tokenVaultId;
                    body = updateTokenVaultRequest.body
                } else {
                    tokenVaultId = updateTokenVaultRequest['token_vault_id'];
                    body = updateTokenVaultRequest['body'];
                }
            }

        
            if (tokenVaultId === null || tokenVaultId === undefined) {
            throw new RequiredError('tokenVaultId','Required parameter tokenVaultId was null or undefined when calling updateTokenVault.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'token_vault_id': tokenVaultId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Retrieves a workload access token for agentic workloads that do not act on behalf of a user
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkloadAccessToken(createWorkloadAccessTokenRequest?: CreateWorkloadAccessTokenRequest) {
            const options = {
                method: "POST",
                url: "/v1/workload-access-token",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createWorkloadAccessTokenRequest !== null && createWorkloadAccessTokenRequest !== undefined) {
                if (createWorkloadAccessTokenRequest instanceof CreateWorkloadAccessTokenRequest) {
                    body = createWorkloadAccessTokenRequest.body
                } else {
                    body = createWorkloadAccessTokenRequest['body'];
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
         * Retrieves a workload access token for agentic workloads acting on behalf of a user, using a JWT token
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkloadAccessTokenForJwt(createWorkloadAccessTokenForJwtRequest?: CreateWorkloadAccessTokenForJwtRequest) {
            const options = {
                method: "POST",
                url: "/v1/workload-access-token-for-jwt",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createWorkloadAccessTokenForJwtRequest !== null && createWorkloadAccessTokenForJwtRequest !== undefined) {
                if (createWorkloadAccessTokenForJwtRequest instanceof CreateWorkloadAccessTokenForJwtRequest) {
                    body = createWorkloadAccessTokenForJwtRequest.body
                } else {
                    body = createWorkloadAccessTokenForJwtRequest['body'];
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
         * Retrieves a workload access token for agentic workloads acting on behalf of a user, using the user\&#39;s ID
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkloadAccessTokenForUserId(createWorkloadAccessTokenForUserIdRequest?: CreateWorkloadAccessTokenForUserIdRequest) {
            const options = {
                method: "POST",
                url: "/v1/workload-access-token-for-user-id",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createWorkloadAccessTokenForUserIdRequest !== null && createWorkloadAccessTokenForUserIdRequest !== undefined) {
                if (createWorkloadAccessTokenForUserIdRequest instanceof CreateWorkloadAccessTokenForUserIdRequest) {
                    body = createWorkloadAccessTokenForUserIdRequest.body
                } else {
                    body = createWorkloadAccessTokenForUserIdRequest['body'];
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
         * Creates a new workload identity.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkloadIdentity(createWorkloadIdentityRequest?: CreateWorkloadIdentityRequest) {
            const options = {
                method: "POST",
                url: "/v1/workload-identities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createWorkloadIdentityRequest !== null && createWorkloadIdentityRequest !== undefined) {
                if (createWorkloadIdentityRequest instanceof CreateWorkloadIdentityRequest) {
                    body = createWorkloadIdentityRequest.body
                } else {
                    body = createWorkloadIdentityRequest['body'];
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
         * Deletes a workload identity.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWorkloadIdentity(deleteWorkloadIdentityRequest?: DeleteWorkloadIdentityRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/workload-identities/{workload_identity_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workloadIdentityName;

            if (deleteWorkloadIdentityRequest !== null && deleteWorkloadIdentityRequest !== undefined) {
                if (deleteWorkloadIdentityRequest instanceof DeleteWorkloadIdentityRequest) {
                    workloadIdentityName = deleteWorkloadIdentityRequest.workloadIdentityName;
                } else {
                    workloadIdentityName = deleteWorkloadIdentityRequest['workload_identity_name'];
                }
            }

        
            if (workloadIdentityName === null || workloadIdentityName === undefined) {
            throw new RequiredError('workloadIdentityName','Required parameter workloadIdentityName was null or undefined when calling deleteWorkloadIdentity.');
            }

            options.pathParams = { 'workload_identity_name': workloadIdentityName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Gets details of a workload identity.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getWorkloadIdentity(getWorkloadIdentityRequest?: GetWorkloadIdentityRequest) {
            const options = {
                method: "GET",
                url: "/v1/workload-identities/{workload_identity_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workloadIdentityName;

            if (getWorkloadIdentityRequest !== null && getWorkloadIdentityRequest !== undefined) {
                if (getWorkloadIdentityRequest instanceof GetWorkloadIdentityRequest) {
                    workloadIdentityName = getWorkloadIdentityRequest.workloadIdentityName;
                } else {
                    workloadIdentityName = getWorkloadIdentityRequest['workload_identity_name'];
                }
            }

        
            if (workloadIdentityName === null || workloadIdentityName === undefined) {
            throw new RequiredError('workloadIdentityName','Required parameter workloadIdentityName was null or undefined when calling getWorkloadIdentity.');
            }

            options.pathParams = { 'workload_identity_name': workloadIdentityName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Gets the authorizer configuration of a workload identity.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getWorkloadIdentityAuthorizerConfiguration(getWorkloadIdentityAuthorizerConfigurationRequest?: GetWorkloadIdentityAuthorizerConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/v1/workload-identities/{workload_identity_name}/authorizer-configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workloadIdentityName;

            if (getWorkloadIdentityAuthorizerConfigurationRequest !== null && getWorkloadIdentityAuthorizerConfigurationRequest !== undefined) {
                if (getWorkloadIdentityAuthorizerConfigurationRequest instanceof GetWorkloadIdentityAuthorizerConfigurationRequest) {
                    workloadIdentityName = getWorkloadIdentityAuthorizerConfigurationRequest.workloadIdentityName;
                } else {
                    workloadIdentityName = getWorkloadIdentityAuthorizerConfigurationRequest['workload_identity_name'];
                }
            }

        
            if (workloadIdentityName === null || workloadIdentityName === undefined) {
            throw new RequiredError('workloadIdentityName','Required parameter workloadIdentityName was null or undefined when calling getWorkloadIdentityAuthorizerConfiguration.');
            }

            options.pathParams = { 'workload_identity_name': workloadIdentityName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Lists workload identities.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkloadIdentities(listWorkloadIdentitiesRequest?: ListWorkloadIdentitiesRequest) {
            const options = {
                method: "GET",
                url: "/v1/workload-identities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listWorkloadIdentitiesRequest !== null && listWorkloadIdentitiesRequest !== undefined) {
                if (listWorkloadIdentitiesRequest instanceof ListWorkloadIdentitiesRequest) {
                    limit = listWorkloadIdentitiesRequest.limit;
                    marker = listWorkloadIdentitiesRequest.marker;
                } else {
                    limit = listWorkloadIdentitiesRequest['limit'];
                    marker = listWorkloadIdentitiesRequest['marker'];
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
         * Updates an existing workload identity.
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkloadIdentity(updateWorkloadIdentityRequest?: UpdateWorkloadIdentityRequest) {
            const options = {
                method: "PUT",
                url: "/v1/workload-identities/{workload_identity_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workloadIdentityName;

            if (updateWorkloadIdentityRequest !== null && updateWorkloadIdentityRequest !== undefined) {
                if (updateWorkloadIdentityRequest instanceof UpdateWorkloadIdentityRequest) {
                    workloadIdentityName = updateWorkloadIdentityRequest.workloadIdentityName;
                    body = updateWorkloadIdentityRequest.body
                } else {
                    workloadIdentityName = updateWorkloadIdentityRequest['workload_identity_name'];
                    body = updateWorkloadIdentityRequest['body'];
                }
            }

        
            if (workloadIdentityName === null || workloadIdentityName === undefined) {
            throw new RequiredError('workloadIdentityName','Required parameter workloadIdentityName was null or undefined when calling updateWorkloadIdentity.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workload_identity_name': workloadIdentityName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): AgentIdentityClient {
    return new AgentIdentityClient(client);
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