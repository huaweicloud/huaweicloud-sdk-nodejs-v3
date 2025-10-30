import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AdministrationAgencyNamePrimitiveTypeHolder } from './model/AdministrationAgencyNamePrimitiveTypeHolder';
import { AdministrationAgencyUrnPrimitiveTypeHolder } from './model/AdministrationAgencyUrnPrimitiveTypeHolder';
import { AgenciesPrimitiveTypeHolder } from './model/AgenciesPrimitiveTypeHolder';
import { Agency } from './model/Agency';
import { ApplyExecutionPlanRequest } from './model/ApplyExecutionPlanRequest';
import { ApplyExecutionPlanRequestBody } from './model/ApplyExecutionPlanRequestBody';
import { ApplyExecutionPlanResponse } from './model/ApplyExecutionPlanResponse';
import { BaseTemplate } from './model/BaseTemplate';
import { BaseTemplateBody } from './model/BaseTemplateBody';
import { BaseTemplateVersion } from './model/BaseTemplateVersion';
import { CallIdentityPrimitiveTypeHolder } from './model/CallIdentityPrimitiveTypeHolder';
import { ConfigurationPrimitiveTypeHolder } from './model/ConfigurationPrimitiveTypeHolder';
import { ConfigurationPrimitiveTypeHolderConfiguration } from './model/ConfigurationPrimitiveTypeHolderConfiguration';
import { ContinueDeployStackRequest } from './model/ContinueDeployStackRequest';
import { ContinueDeployStackRequestBody } from './model/ContinueDeployStackRequestBody';
import { ContinueDeployStackResponse } from './model/ContinueDeployStackResponse';
import { ContinueRollbackStackRequest } from './model/ContinueRollbackStackRequest';
import { ContinueRollbackStackRequestBody } from './model/ContinueRollbackStackRequestBody';
import { ContinueRollbackStackResponse } from './model/ContinueRollbackStackResponse';
import { CreateExecutionPlanRequest } from './model/CreateExecutionPlanRequest';
import { CreateExecutionPlanRequestBody } from './model/CreateExecutionPlanRequestBody';
import { CreateExecutionPlanResponse } from './model/CreateExecutionPlanResponse';
import { CreatePrivateHookRequest } from './model/CreatePrivateHookRequest';
import { CreatePrivateHookRequestBody } from './model/CreatePrivateHookRequestBody';
import { CreatePrivateHookResponse } from './model/CreatePrivateHookResponse';
import { CreatePrivateHookVersionRequest } from './model/CreatePrivateHookVersionRequest';
import { CreatePrivateHookVersionRequestBody } from './model/CreatePrivateHookVersionRequestBody';
import { CreatePrivateHookVersionResponse } from './model/CreatePrivateHookVersionResponse';
import { CreatePrivateModuleRequest } from './model/CreatePrivateModuleRequest';
import { CreatePrivateModuleRequestBody } from './model/CreatePrivateModuleRequestBody';
import { CreatePrivateModuleResponse } from './model/CreatePrivateModuleResponse';
import { CreatePrivateModuleVersionRequest } from './model/CreatePrivateModuleVersionRequest';
import { CreatePrivateModuleVersionRequestBody } from './model/CreatePrivateModuleVersionRequestBody';
import { CreatePrivateModuleVersionResponse } from './model/CreatePrivateModuleVersionResponse';
import { CreatePrivateProviderRequest } from './model/CreatePrivateProviderRequest';
import { CreatePrivateProviderRequestBody } from './model/CreatePrivateProviderRequestBody';
import { CreatePrivateProviderResponse } from './model/CreatePrivateProviderResponse';
import { CreatePrivateProviderVersionRequest } from './model/CreatePrivateProviderVersionRequest';
import { CreatePrivateProviderVersionRequestBody } from './model/CreatePrivateProviderVersionRequestBody';
import { CreatePrivateProviderVersionResponse } from './model/CreatePrivateProviderVersionResponse';
import { CreateStackInstanceRequest } from './model/CreateStackInstanceRequest';
import { CreateStackInstanceRequestBody } from './model/CreateStackInstanceRequestBody';
import { CreateStackInstanceResponse } from './model/CreateStackInstanceResponse';
import { CreateStackRequest } from './model/CreateStackRequest';
import { CreateStackRequestBody } from './model/CreateStackRequestBody';
import { CreateStackResponse } from './model/CreateStackResponse';
import { CreateStackSetRequest } from './model/CreateStackSetRequest';
import { CreateStackSetRequestBody } from './model/CreateStackSetRequestBody';
import { CreateStackSetResponse } from './model/CreateStackSetResponse';
import { CreateTemplateRequest } from './model/CreateTemplateRequest';
import { CreateTemplateRequestBody } from './model/CreateTemplateRequestBody';
import { CreateTemplateResponse } from './model/CreateTemplateResponse';
import { CreateTemplateVersionRequest } from './model/CreateTemplateVersionRequest';
import { CreateTemplateVersionRequestBody } from './model/CreateTemplateVersionRequestBody';
import { CreateTemplateVersionResponse } from './model/CreateTemplateVersionResponse';
import { DeleteExecutionPlanRequest } from './model/DeleteExecutionPlanRequest';
import { DeleteExecutionPlanResponse } from './model/DeleteExecutionPlanResponse';
import { DeletePrivateHookRequest } from './model/DeletePrivateHookRequest';
import { DeletePrivateHookResponse } from './model/DeletePrivateHookResponse';
import { DeletePrivateHookVersionRequest } from './model/DeletePrivateHookVersionRequest';
import { DeletePrivateHookVersionResponse } from './model/DeletePrivateHookVersionResponse';
import { DeletePrivateModuleRequest } from './model/DeletePrivateModuleRequest';
import { DeletePrivateModuleResponse } from './model/DeletePrivateModuleResponse';
import { DeletePrivateModuleVersionRequest } from './model/DeletePrivateModuleVersionRequest';
import { DeletePrivateModuleVersionResponse } from './model/DeletePrivateModuleVersionResponse';
import { DeletePrivateProviderRequest } from './model/DeletePrivateProviderRequest';
import { DeletePrivateProviderResponse } from './model/DeletePrivateProviderResponse';
import { DeletePrivateProviderVersionRequest } from './model/DeletePrivateProviderVersionRequest';
import { DeletePrivateProviderVersionResponse } from './model/DeletePrivateProviderVersionResponse';
import { DeleteStackEnhancedRequest } from './model/DeleteStackEnhancedRequest';
import { DeleteStackEnhancedRequestBody } from './model/DeleteStackEnhancedRequestBody';
import { DeleteStackEnhancedResponse } from './model/DeleteStackEnhancedResponse';
import { DeleteStackInstanceDeprecatedRequest } from './model/DeleteStackInstanceDeprecatedRequest';
import { DeleteStackInstanceDeprecatedResponse } from './model/DeleteStackInstanceDeprecatedResponse';
import { DeleteStackInstanceRequest } from './model/DeleteStackInstanceRequest';
import { DeleteStackInstanceRequestBody } from './model/DeleteStackInstanceRequestBody';
import { DeleteStackInstanceResponse } from './model/DeleteStackInstanceResponse';
import { DeleteStackRequest } from './model/DeleteStackRequest';
import { DeleteStackResponse } from './model/DeleteStackResponse';
import { DeleteStackSetRequest } from './model/DeleteStackSetRequest';
import { DeleteStackSetResponse } from './model/DeleteStackSetResponse';
import { DeleteTemplateRequest } from './model/DeleteTemplateRequest';
import { DeleteTemplateResponse } from './model/DeleteTemplateResponse';
import { DeleteTemplateVersionRequest } from './model/DeleteTemplateVersionRequest';
import { DeleteTemplateVersionResponse } from './model/DeleteTemplateVersionResponse';
import { DeployStackRequest } from './model/DeployStackRequest';
import { DeployStackRequestBody } from './model/DeployStackRequestBody';
import { DeployStackResponse } from './model/DeployStackResponse';
import { DeployStackSetRequest } from './model/DeployStackSetRequest';
import { DeployStackSetRequestBody } from './model/DeployStackSetRequestBody';
import { DeployStackSetResponse } from './model/DeployStackSetResponse';
import { DeploymentIdPrimitiveTypeHolder } from './model/DeploymentIdPrimitiveTypeHolder';
import { DeploymentTargets } from './model/DeploymentTargets';
import { DeploymentTargetsPrimitiveTypeHolder } from './model/DeploymentTargetsPrimitiveTypeHolder';
import { DomainIdFilterTypePrimitiveTypeHolder } from './model/DomainIdFilterTypePrimitiveTypeHolder';
import { DomainIdsPrimitiveTypeHolder } from './model/DomainIdsPrimitiveTypeHolder';
import { DomainIdsUriPrimitiveTypeHolder } from './model/DomainIdsUriPrimitiveTypeHolder';
import { EnableAutoRollbackPrimitiveTypeHolder } from './model/EnableAutoRollbackPrimitiveTypeHolder';
import { EnableDeletionProtectionPrimitiveTypeHolder } from './model/EnableDeletionProtectionPrimitiveTypeHolder';
import { EncryptionStructure } from './model/EncryptionStructure';
import { EstimateExecutionPlanPriceRequest } from './model/EstimateExecutionPlanPriceRequest';
import { EstimateExecutionPlanPriceResponse } from './model/EstimateExecutionPlanPriceResponse';
import { ExecutionPlan } from './model/ExecutionPlan';
import { ExecutionPlanDescriptionPrimitiveTypeHolder } from './model/ExecutionPlanDescriptionPrimitiveTypeHolder';
import { ExecutionPlanDiffAttribute } from './model/ExecutionPlanDiffAttribute';
import { ExecutionPlanIdPrimitiveTypeHolder } from './model/ExecutionPlanIdPrimitiveTypeHolder';
import { ExecutionPlanItem } from './model/ExecutionPlanItem';
import { ExecutionPlanNamePrimitiveTypeHolder } from './model/ExecutionPlanNamePrimitiveTypeHolder';
import { ExecutionPlanStatusMessagePrimitiveTypeHolder } from './model/ExecutionPlanStatusMessagePrimitiveTypeHolder';
import { ExecutionPlanStatusPrimitiveTypeHolder } from './model/ExecutionPlanStatusPrimitiveTypeHolder';
import { ExecutionPlanSummary } from './model/ExecutionPlanSummary';
import { FunctionGraphUrnPrimitiveTypeHolder } from './model/FunctionGraphUrnPrimitiveTypeHolder';
import { FunctionGraphUrnRequiredPrimitiveTypeHolder } from './model/FunctionGraphUrnRequiredPrimitiveTypeHolder';
import { GetExecutionPlanMetadataRequest } from './model/GetExecutionPlanMetadataRequest';
import { GetExecutionPlanMetadataResponse } from './model/GetExecutionPlanMetadataResponse';
import { GetExecutionPlanRequest } from './model/GetExecutionPlanRequest';
import { GetExecutionPlanResponse } from './model/GetExecutionPlanResponse';
import { GetStackMetadataRequest } from './model/GetStackMetadataRequest';
import { GetStackMetadataResponse } from './model/GetStackMetadataResponse';
import { GetStackTemplateRequest } from './model/GetStackTemplateRequest';
import { GetStackTemplateResponse } from './model/GetStackTemplateResponse';
import { IndexPrimitiveTypeHolder } from './model/IndexPrimitiveTypeHolder';
import { InitialStackDescriptionPrimitiveTypeHolder } from './model/InitialStackDescriptionPrimitiveTypeHolder';
import { ItemsResponse } from './model/ItemsResponse';
import { KmsStructure } from './model/KmsStructure';
import { ListExecutionPlansRequest } from './model/ListExecutionPlansRequest';
import { ListExecutionPlansResponse } from './model/ListExecutionPlansResponse';
import { ListPrivateHookVersionsRequest } from './model/ListPrivateHookVersionsRequest';
import { ListPrivateHookVersionsResponse } from './model/ListPrivateHookVersionsResponse';
import { ListPrivateHooksRequest } from './model/ListPrivateHooksRequest';
import { ListPrivateHooksResponse } from './model/ListPrivateHooksResponse';
import { ListPrivateModuleVersionsRequest } from './model/ListPrivateModuleVersionsRequest';
import { ListPrivateModuleVersionsResponse } from './model/ListPrivateModuleVersionsResponse';
import { ListPrivateModulesRequest } from './model/ListPrivateModulesRequest';
import { ListPrivateModulesResponse } from './model/ListPrivateModulesResponse';
import { ListPrivateProviderVersionsRequest } from './model/ListPrivateProviderVersionsRequest';
import { ListPrivateProviderVersionsResponse } from './model/ListPrivateProviderVersionsResponse';
import { ListPrivateProvidersRequest } from './model/ListPrivateProvidersRequest';
import { ListPrivateProvidersResponse } from './model/ListPrivateProvidersResponse';
import { ListStackEventsRequest } from './model/ListStackEventsRequest';
import { ListStackEventsResponse } from './model/ListStackEventsResponse';
import { ListStackInstancesRequest } from './model/ListStackInstancesRequest';
import { ListStackInstancesResponse } from './model/ListStackInstancesResponse';
import { ListStackOutputsRequest } from './model/ListStackOutputsRequest';
import { ListStackOutputsResponse } from './model/ListStackOutputsResponse';
import { ListStackResourcesRequest } from './model/ListStackResourcesRequest';
import { ListStackResourcesResponse } from './model/ListStackResourcesResponse';
import { ListStackSetOperationsRequest } from './model/ListStackSetOperationsRequest';
import { ListStackSetOperationsResponse } from './model/ListStackSetOperationsResponse';
import { ListStackSetsRequest } from './model/ListStackSetsRequest';
import { ListStackSetsResponse } from './model/ListStackSetsResponse';
import { ListStacksRequest } from './model/ListStacksRequest';
import { ListStacksResponse } from './model/ListStacksResponse';
import { ListTemplateVersionsRequest } from './model/ListTemplateVersionsRequest';
import { ListTemplateVersionsResponse } from './model/ListTemplateVersionsResponse';
import { ListTemplatesRequest } from './model/ListTemplatesRequest';
import { ListTemplatesResponse } from './model/ListTemplatesResponse';
import { ManagedAgencyNamePrimitiveTypeHolder } from './model/ManagedAgencyNamePrimitiveTypeHolder';
import { ManagedOperation } from './model/ManagedOperation';
import { ManagedOperationTypeHolder } from './model/ManagedOperationTypeHolder';
import { ModuleURIPrimitiveTypeHolder } from './model/ModuleURIPrimitiveTypeHolder';
import { ModuleURIRequiredPrimitiveTypeHolder } from './model/ModuleURIRequiredPrimitiveTypeHolder';
import { OperationIdPrimitiveTypeHolder } from './model/OperationIdPrimitiveTypeHolder';
import { OperationPreferences } from './model/OperationPreferences';
import { OperationPreferencesTypeHolder } from './model/OperationPreferencesTypeHolder';
import { OrganizationalUnitIdsPrimitiveTypeHolder } from './model/OrganizationalUnitIdsPrimitiveTypeHolder';
import { PageInfo } from './model/PageInfo';
import { ParseTemplateVariablesRequest } from './model/ParseTemplateVariablesRequest';
import { ParseTemplateVariablesRequestBody } from './model/ParseTemplateVariablesRequestBody';
import { ParseTemplateVariablesResponse } from './model/ParseTemplateVariablesResponse';
import { PermissionModelPrimitiveTypeHolder } from './model/PermissionModelPrimitiveTypeHolder';
import { PrivateHookCreateTimePrimitiveTypeHolder } from './model/PrivateHookCreateTimePrimitiveTypeHolder';
import { PrivateHookDefaultVersionPrimitiveTypeHolder } from './model/PrivateHookDefaultVersionPrimitiveTypeHolder';
import { PrivateHookDescriptionPrimitiveTypeHolder } from './model/PrivateHookDescriptionPrimitiveTypeHolder';
import { PrivateHookIdPrimitiveTypeHolder } from './model/PrivateHookIdPrimitiveTypeHolder';
import { PrivateHookNamePrimitiveTypeHolder } from './model/PrivateHookNamePrimitiveTypeHolder';
import { PrivateHookSummary } from './model/PrivateHookSummary';
import { PrivateHookUpdateTimePrimitiveTypeHolder } from './model/PrivateHookUpdateTimePrimitiveTypeHolder';
import { PrivateHookVersionCreateTimePrimitiveTypeHolder } from './model/PrivateHookVersionCreateTimePrimitiveTypeHolder';
import { PrivateHookVersionDescriptionPrimitiveTypeHolder } from './model/PrivateHookVersionDescriptionPrimitiveTypeHolder';
import { PrivateHookVersionPrimitiveTypeHolder } from './model/PrivateHookVersionPrimitiveTypeHolder';
import { PrivateHookVersionSummary } from './model/PrivateHookVersionSummary';
import { PrivateModule } from './model/PrivateModule';
import { PrivateModuleCreateTimePrimitiveTypeHolder } from './model/PrivateModuleCreateTimePrimitiveTypeHolder';
import { PrivateModuleDescriptionPrimitiveTypeHolder } from './model/PrivateModuleDescriptionPrimitiveTypeHolder';
import { PrivateModuleIdPrimitiveTypeHolder } from './model/PrivateModuleIdPrimitiveTypeHolder';
import { PrivateModuleNamePrimitiveTypeHolder } from './model/PrivateModuleNamePrimitiveTypeHolder';
import { PrivateModuleSourcePrimitiveTypeHolder } from './model/PrivateModuleSourcePrimitiveTypeHolder';
import { PrivateModuleSummary } from './model/PrivateModuleSummary';
import { PrivateModuleUpdateTimePrimitiveTypeHolder } from './model/PrivateModuleUpdateTimePrimitiveTypeHolder';
import { PrivateModuleVersion } from './model/PrivateModuleVersion';
import { PrivateModuleVersionCreateTimePrimitiveTypeHolder } from './model/PrivateModuleVersionCreateTimePrimitiveTypeHolder';
import { PrivateModuleVersionDescriptionPrimitiveTypeHolder } from './model/PrivateModuleVersionDescriptionPrimitiveTypeHolder';
import { PrivateModuleVersionPrimitiveTypeHolder } from './model/PrivateModuleVersionPrimitiveTypeHolder';
import { PrivateModuleVersionRequiredPrimitiveTypeHolder } from './model/PrivateModuleVersionRequiredPrimitiveTypeHolder';
import { PrivateModuleVersionSummary } from './model/PrivateModuleVersionSummary';
import { PrivatePolicyBodyPrimitiveTypeHolder } from './model/PrivatePolicyBodyPrimitiveTypeHolder';
import { PrivatePolicyURIPrimitiveTypeHolder } from './model/PrivatePolicyURIPrimitiveTypeHolder';
import { PrivateProviderCreateTimePrimitiveTypeHolder } from './model/PrivateProviderCreateTimePrimitiveTypeHolder';
import { PrivateProviderDescriptionPrimitiveTypeHolder } from './model/PrivateProviderDescriptionPrimitiveTypeHolder';
import { PrivateProviderIdPrimitiveTypeHolder } from './model/PrivateProviderIdPrimitiveTypeHolder';
import { PrivateProviderNamePrimitiveTypeHolder } from './model/PrivateProviderNamePrimitiveTypeHolder';
import { PrivateProviderSourcePrimitiveTypeHolder } from './model/PrivateProviderSourcePrimitiveTypeHolder';
import { PrivateProviderSummary } from './model/PrivateProviderSummary';
import { PrivateProviderUpdateTimePrimitiveTypeHolder } from './model/PrivateProviderUpdateTimePrimitiveTypeHolder';
import { PrivateProviderVersionCreateTimePrimitiveTypeHolder } from './model/PrivateProviderVersionCreateTimePrimitiveTypeHolder';
import { PrivateProviderVersionDescriptionPrimitiveTypeHolder } from './model/PrivateProviderVersionDescriptionPrimitiveTypeHolder';
import { PrivateProviderVersionPrimitiveTypeHolder } from './model/PrivateProviderVersionPrimitiveTypeHolder';
import { PrivateProviderVersionRequiredPrimitiveTypeHolder } from './model/PrivateProviderVersionRequiredPrimitiveTypeHolder';
import { PrivateProviderVersionSummary } from './model/PrivateProviderVersionSummary';
import { ProviderAgencyNamePrimitiveTypeHolder } from './model/ProviderAgencyNamePrimitiveTypeHolder';
import { ProviderAgencyUrnPrimitiveTypeHolder } from './model/ProviderAgencyUrnPrimitiveTypeHolder';
import { RegionsPrimitiveTypeHolder } from './model/RegionsPrimitiveTypeHolder';
import { ResourceAttribute } from './model/ResourceAttribute';
import { ResourceNamePrimitiveTypeHolder } from './model/ResourceNamePrimitiveTypeHolder';
import { ResourcePriceResponse } from './model/ResourcePriceResponse';
import { ResourceTypePrimitiveTypeHolder } from './model/ResourceTypePrimitiveTypeHolder';
import { RetainAllResourcesTypeHolder } from './model/RetainAllResourcesTypeHolder';
import { ShowPrivateHookMetadataRequest } from './model/ShowPrivateHookMetadataRequest';
import { ShowPrivateHookMetadataResponse } from './model/ShowPrivateHookMetadataResponse';
import { ShowPrivateHookVersionMetadataRequest } from './model/ShowPrivateHookVersionMetadataRequest';
import { ShowPrivateHookVersionMetadataResponse } from './model/ShowPrivateHookVersionMetadataResponse';
import { ShowPrivateHookVersionPolicyRequest } from './model/ShowPrivateHookVersionPolicyRequest';
import { ShowPrivateHookVersionPolicyResponse } from './model/ShowPrivateHookVersionPolicyResponse';
import { ShowPrivateModuleMetadataRequest } from './model/ShowPrivateModuleMetadataRequest';
import { ShowPrivateModuleMetadataResponse } from './model/ShowPrivateModuleMetadataResponse';
import { ShowPrivateModuleVersionContentRequest } from './model/ShowPrivateModuleVersionContentRequest';
import { ShowPrivateModuleVersionContentResponse } from './model/ShowPrivateModuleVersionContentResponse';
import { ShowPrivateModuleVersionMetadataRequest } from './model/ShowPrivateModuleVersionMetadataRequest';
import { ShowPrivateModuleVersionMetadataResponse } from './model/ShowPrivateModuleVersionMetadataResponse';
import { ShowPrivateProviderMetadataRequest } from './model/ShowPrivateProviderMetadataRequest';
import { ShowPrivateProviderMetadataResponse } from './model/ShowPrivateProviderMetadataResponse';
import { ShowPrivateProviderVersionMetadataRequest } from './model/ShowPrivateProviderVersionMetadataRequest';
import { ShowPrivateProviderVersionMetadataResponse } from './model/ShowPrivateProviderVersionMetadataResponse';
import { ShowStackInstanceRequest } from './model/ShowStackInstanceRequest';
import { ShowStackInstanceResponse } from './model/ShowStackInstanceResponse';
import { ShowStackSetMetadataRequest } from './model/ShowStackSetMetadataRequest';
import { ShowStackSetMetadataResponse } from './model/ShowStackSetMetadataResponse';
import { ShowStackSetOperationMetadataRequest } from './model/ShowStackSetOperationMetadataRequest';
import { ShowStackSetOperationMetadataResponse } from './model/ShowStackSetOperationMetadataResponse';
import { ShowStackSetTemplateRequest } from './model/ShowStackSetTemplateRequest';
import { ShowStackSetTemplateResponse } from './model/ShowStackSetTemplateResponse';
import { ShowTemplateMetadataRequest } from './model/ShowTemplateMetadataRequest';
import { ShowTemplateMetadataResponse } from './model/ShowTemplateMetadataResponse';
import { ShowTemplateVersionContentRequest } from './model/ShowTemplateVersionContentRequest';
import { ShowTemplateVersionContentResponse } from './model/ShowTemplateVersionContentResponse';
import { ShowTemplateVersionMetadataRequest } from './model/ShowTemplateVersionMetadataRequest';
import { ShowTemplateVersionMetadataResponse } from './model/ShowTemplateVersionMetadataResponse';
import { Stack } from './model/Stack';
import { StackDescriptionPrimitiveTypeHolder } from './model/StackDescriptionPrimitiveTypeHolder';
import { StackEvent } from './model/StackEvent';
import { StackIdPrimitiveTypeHolder } from './model/StackIdPrimitiveTypeHolder';
import { StackInstance } from './model/StackInstance';
import { StackInstanceStatusMessagePrimitiveTypeHolder } from './model/StackInstanceStatusMessagePrimitiveTypeHolder';
import { StackInstanceStatusPrimitiveTypeHolder } from './model/StackInstanceStatusPrimitiveTypeHolder';
import { StackNamePrimitiveTypeHolder } from './model/StackNamePrimitiveTypeHolder';
import { StackOutput } from './model/StackOutput';
import { StackResource } from './model/StackResource';
import { StackSet } from './model/StackSet';
import { StackSetCreateTimePrimitiveTypeHolder } from './model/StackSetCreateTimePrimitiveTypeHolder';
import { StackSetDescriptionPrimitiveTypeHolder } from './model/StackSetDescriptionPrimitiveTypeHolder';
import { StackSetIdPrimitiveTypeHolder } from './model/StackSetIdPrimitiveTypeHolder';
import { StackSetNamePrimitiveTypeHolder } from './model/StackSetNamePrimitiveTypeHolder';
import { StackSetOperation } from './model/StackSetOperation';
import { StackSetOperationActionPrimitiveTypeHolder } from './model/StackSetOperationActionPrimitiveTypeHolder';
import { StackSetOperationCreateTimePrimitiveTypeHolder } from './model/StackSetOperationCreateTimePrimitiveTypeHolder';
import { StackSetOperationIdPrimitiveTypeHolder } from './model/StackSetOperationIdPrimitiveTypeHolder';
import { StackSetOperationStatusMessagePrimitiveTypeHolder } from './model/StackSetOperationStatusMessagePrimitiveTypeHolder';
import { StackSetOperationStatusPrimitiveTypeHolder } from './model/StackSetOperationStatusPrimitiveTypeHolder';
import { StackSetOperationUpdateTimePrimitiveTypeHolder } from './model/StackSetOperationUpdateTimePrimitiveTypeHolder';
import { StackSetStackNamePrimitiveTypeHolder } from './model/StackSetStackNamePrimitiveTypeHolder';
import { StackSetStatusPrimitiveTypeHolder } from './model/StackSetStatusPrimitiveTypeHolder';
import { StackSetUpdateTimePrimitiveTypeHolder } from './model/StackSetUpdateTimePrimitiveTypeHolder';
import { StackSetVarsURIContentPrimitiveTypeHolder } from './model/StackSetVarsURIContentPrimitiveTypeHolder';
import { StackStatusMessagePrimitiveTypeHolder } from './model/StackStatusMessagePrimitiveTypeHolder';
import { StackStatusPrimitiveTypeHolder } from './model/StackStatusPrimitiveTypeHolder';
import { Template } from './model/Template';
import { TemplateBodyPrimitiveTypeHolder } from './model/TemplateBodyPrimitiveTypeHolder';
import { TemplateURIPrimitiveTypeHolder } from './model/TemplateURIPrimitiveTypeHolder';
import { TemplateVersion } from './model/TemplateVersion';
import { UpdatePrivateHookMetadataRequest } from './model/UpdatePrivateHookMetadataRequest';
import { UpdatePrivateHookMetadataRequestBody } from './model/UpdatePrivateHookMetadataRequestBody';
import { UpdatePrivateHookMetadataResponse } from './model/UpdatePrivateHookMetadataResponse';
import { UpdatePrivateModuleMetadataRequest } from './model/UpdatePrivateModuleMetadataRequest';
import { UpdatePrivateModuleMetadataRequestBody } from './model/UpdatePrivateModuleMetadataRequestBody';
import { UpdatePrivateModuleMetadataResponse } from './model/UpdatePrivateModuleMetadataResponse';
import { UpdatePrivateProviderMetadataRequest } from './model/UpdatePrivateProviderMetadataRequest';
import { UpdatePrivateProviderMetadataRequestBody } from './model/UpdatePrivateProviderMetadataRequestBody';
import { UpdatePrivateProviderMetadataResponse } from './model/UpdatePrivateProviderMetadataResponse';
import { UpdateStackInstancesRequest } from './model/UpdateStackInstancesRequest';
import { UpdateStackInstancesRequestBody } from './model/UpdateStackInstancesRequestBody';
import { UpdateStackInstancesResponse } from './model/UpdateStackInstancesResponse';
import { UpdateStackRequest } from './model/UpdateStackRequest';
import { UpdateStackRequestBody } from './model/UpdateStackRequestBody';
import { UpdateStackResponse } from './model/UpdateStackResponse';
import { UpdateStackSetRequest } from './model/UpdateStackSetRequest';
import { UpdateStackSetRequestBody } from './model/UpdateStackSetRequestBody';
import { UpdateStackSetResponse } from './model/UpdateStackSetResponse';
import { UpdateTemplateMetadataRequest } from './model/UpdateTemplateMetadataRequest';
import { UpdateTemplateMetadataRequestBody } from './model/UpdateTemplateMetadataRequestBody';
import { UpdateTemplateMetadataResponse } from './model/UpdateTemplateMetadataResponse';
import { VarOverridesPrimitiveTypeHolder } from './model/VarOverridesPrimitiveTypeHolder';
import { VarOverridesPrimitiveTypeHolderVarOverrides } from './model/VarOverridesPrimitiveTypeHolderVarOverrides';
import { VariableResponse } from './model/VariableResponse';
import { VariableValidationResponse } from './model/VariableValidationResponse';
import { VarsBodyPrimitiveTypeHolder } from './model/VarsBodyPrimitiveTypeHolder';
import { VarsStructure } from './model/VarsStructure';
import { VarsStructurePrimitiveTypeHolder } from './model/VarsStructurePrimitiveTypeHolder';
import { VarsURIPrimitiveTypeHolder } from './model/VarsURIPrimitiveTypeHolder';
import { VarsUriContentPrimitiveTypeHolder } from './model/VarsUriContentPrimitiveTypeHolder';
import { VoidBody } from './model/VoidBody';

export class AosClient {
    public static newBuilder(): ClientBuilder<AosClient> {
            let client = new ClientBuilder<AosClient>(newClient);
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
     * 创建私有provider（CreatePrivateProvider）
     * 
     * 创建一个私有的空provider。如果用户给予了provider_version和function_graph_urn，则在创建私有provider的同时，还会在私有provider下创建一个私有provider版本。
     *   * 私有provider允许用户将自定义的provider注册到RFS中，并仅提供给当前用户使用。
     *   * 如果同名私有provider在当前账户中已经存在，则会返回409。
     *   * 版本号遵循语义化版本号（Semantic Version），为用户自定义。
     *   * 在本API中，provider_version和function_graph_urn需要搭配使用，如果只指定其中一个参数，则会返回400。
     *   * 资源编排服务只会对function_graph_urn进行浅校验，如是否符合正则，是否仅指定为当前region等。并不会深度校验，即用户是否存在权限调用，是否真实存在等。
     *   * 该API会返回provider_source字段，该字段按照“huawei.com/private-provider/{provider_name}”的形式拼接。关于provider_name和provider_source字段在模板中的使用细节，详见下方描述中。
     *   * 如果用户期望使用名称中不含有大写英文的provider，可以按照如下展示将provider_source字段指定为模板中定义的required_providers中的source参数。
     *   * 如果用户期望使用名称含有大写英文的provider，需要将provider_name完全转化为小写英文创建。同时用户既可以在模板中使用API返回的provider_source参数，也可以在模板中以 “huawei.com/private-provider”为固定前缀，按照原含大写英文的provider_name，拼写provider_source参数。
     *   * 用户在使用该私有provider时，如果期望RFS使用委托调用FG以及OBS，可在创建私有provider时提供委托信息，该委托对私有provider下所有版本生效。provider_agency_name或provider_agency_urn二者最多只能提供一个，推荐用户在使用信任委托时给予provider_agency_urn，provider_agency_name只支持接收普通委托名称，如果给予了信任委托名称，则会在使用私有provider部署资源栈时失败。
     * 
     * 以HCL格式的模板为例，模板中引用私有provider的语法如下：
     * &#x60;&#x60;&#x60;
     * Provider \&quot;{provider_name}\&quot; {
     *   source &#x3D; \&quot;{provider_source}\&quot;
     *   version &#x3D; \&quot;{provider_version}\&quot;
     * }
     * &#x60;&#x60;&#x60;
     * 
     * 以JSON格式的模板为例，模板中引用私有provider的语法如下：
     * &#x60;&#x60;&#x60;
     * {
     *   \&quot;terraform\&quot;:{
     *     \&quot;required_providers\&quot;:[
     *       {
     *         \&quot;{provider_name}\&quot;:{
     *           \&quot;source\&quot;:\&quot;{provider_source}\&quot;,
     *           \&quot;version\&quot;:\&quot;{provider_version}\&quot;
     *         }
     *       }
     *     ]
     *   }
     * }
     * &#x60;&#x60;&#x60;
     * 
     * RFS在支持用户使用FunctionGraph(以下简称：FG)的事件函数运行私有Provider时，定义了一套详细的对接规则，以实现RFS与私有Provider之间的成功交互。
     * 其中关于FG的事件函数使用，请参考官网文档： https://support.huaweicloud.com/productdesc-functiongraph/functiongraph_02_1002.html。
     * 用户需要在提供的FG的事件函数方法中，按照如下规则实现一系列对应方法：
     *   1. 用户需要首先在FG中启动一个HTTP Server，用于接受来自RFS的HTTP请求，请求的Path固定为\&quot;/provider\&quot;，请求方法为\&quot;POST\&quot;。RFS规定了发送给FG的HTTP请求体，请求体格式如下所示：
     *         &#x60;&#x60;&#x60;
     *         {
     *           \&quot;method_name\&quot;: String,
     *           \&quot;request_data\&quot;: String,
     *           \&quot;context\&quot;:{
     *             \&quot;session_id\&quot;: String,
     *             \&quot;config_data\&quot;: String
     *           }
     *         }
     *         &#x60;&#x60;&#x60;
     *      用户提供的FG的事件函数需要能够接收如上请求。否则会调用私有Provider失败，导致资源编排失败。
     *   2. 下面对FG中如何使用请求体中的各个参数，以实现FG与RFS的成功交互做详细解释：
     *      \&quot;method_name\&quot;：RFS期望FG的事件函数中调用的私有provider的gRPC方法名。RFS会在请求体中，根据实际业务场景，每次从如下方法中选择一个进行传递。其中每个方法名需要与provider中原生的gRPC方法一一对应。在收到携带有某个方法名的请求后，FG的事件函数内能够调用对应的私有provider的原生gRPC方法，实现具体资源的处理逻辑。
     *      provider内提供的原生gRPC协议请参考：tfplugin5.proto和grpc_controller.proto。方法名列表如下：
     *         &#x60;&#x60;&#x60;
     *         tfplugin5.proto：
     *           \&quot;/tfplugin5.Provider/GetSchema\&quot;
     *           \&quot;/tfplugin5.Provider/PrepareProviderConfig\&quot;
     *           \&quot;/tfplugin5.Provider/ValidateResourceTypeConfig\&quot;
     *           \&quot;/tfplugin5.Provider/ValidateDataSourceConfig\&quot;
     *           \&quot;/tfplugin5.Provider/UpgradeResourceState\&quot;
     *           \&quot;/tfplugin5.Provider/Configure\&quot;
     *           \&quot;/tfplugin5.Provider/ReadResource\&quot;
     *           \&quot;/tfplugin5.Provider/PlanResourceChange\&quot;
     *           \&quot;/tfplugin5.Provider/ApplyResourceChange\&quot;
     *           \&quot;/tfplugin5.Provider/ImportResourceState\&quot;
     *           \&quot;/tfplugin5.Provider/ReadDataSource\&quot;
     *           \&quot;/tfplugin5.Provider/Stop\&quot;
     *         grpc_controller.proto：
     *           \&quot;/plugin.GRPCController/Shutdown\&quot;
     *         &#x60;&#x60;&#x60;
     *      \&quot;request_data\&quot;：RFS传递给FG的事件函数中每个方法的请求内容。在每个方法的处理逻辑中，需要先将request_data中的数据使用base64解码，然后作为私有provider的gRPC方法的数据传入。
     *      \&quot;config_data\&quot;：用于自定义provider处理实际请求前的初始化，如果context中config_data非空，FG的事件函数需要先将config_data作为输入调用/tfplugin5.Provider/Configure方法，进行初始化，再根据method_name调用对应的方法获取响应。
     *      \&quot;session_id\&quot;：表示请求是否来自同一个模板中的同一批编排任务。session_id相同，表示请求来自同一个模板中的同一批编排任务。
     *      注意：用户启动的同一个provider进程不能接受多个来自RFS的请求。RFS推荐用户处理请求时，每次都启动新的进程处理相关请求。
     *   3. 在FG的事件函数中实现的请求响应按照固定格式进行返回，响应体的格式如下，成功响应码固定为200，任何其他响应码均视为失败请求，会导致资源编排失败。
     *         &#x60;&#x60;&#x60;
     *         {
     *           \&quot;response_data\&quot;: String,
     *           \&quot;error\&quot;: String
     *         }
     *         &#x60;&#x60;&#x60;
     *      \&quot;response_data\&quot;：调用私有provider的gRPC方法返回的内容。在FG的事件函数中，需要将gRPC方法返回的响应序列化后使用base64编码返回。
     *      \&quot;error\&quot;：调用gRPC方法返回的错误信息。
     *   4. 用户需要对FG事件函数进行异步配置，针对于不涉及资源操作的读相关的gRPC请求，RFS默认通过同步接口调用FG；针对于涉及资源操作的写相关的gRPC请求，RFS默认通过异步接口调用FG。
     *      以下gRPC请求默认同步调用：
     *         &#x60;&#x60;&#x60;
     *         tfplugin5.proto：
     *           \&quot;/tfplugin5.Provider/GetSchema\&quot;
     *           \&quot;/tfplugin5.Provider/PrepareProviderConfig\&quot;
     *           \&quot;/tfplugin5.Provider/ValidateResourceTypeConfig\&quot;
     *           \&quot;/tfplugin5.Provider/ValidateDataSourceConfig\&quot;
     *           \&quot;/tfplugin5.Provider/UpgradeResourceState\&quot;
     *           \&quot;/tfplugin5.Provider/Configure\&quot;
     *           \&quot;/tfplugin5.Provider/ReadResource\&quot;
     *           \&quot;/tfplugin5.Provider/ImportResourceState\&quot;
     *           \&quot;/tfplugin5.Provider/ReadDataSource\&quot;
     *         &#x60;&#x60;&#x60;
     *      以下gRPC请求默认异步调用：
     *         &#x60;&#x60;&#x60;
     *         tfplugin5.proto：
     *           \&quot;/tfplugin5.Provider/PlanResourceChange\&quot;
     *           \&quot;/tfplugin5.Provider/ApplyResourceChange\&quot;
     *           \&quot;/tfplugin5.Provider/Stop\&quot;
     *         grpc_controller.proto：
     *           \&quot;/plugin.GRPCController/Shutdown\&quot;
     *         &#x60;&#x60;&#x60;
     *      目前FG异步配置的成功和失败时通知的目标服务只支持OBS，用户如果开启异步调用状态持久化，RFS会通过轮询FG获取函数异步调用请求列表来获取异步调用的状态，否则会轮询OBS是否存在异步调用结果来判断异步调用状态。
     *      对于同步调用，RFS阻塞等待FG返回调用结果；对于异步调用，RFS在判断异步调用结束后，获取OBS桶中的异步调用结果。
     * 
     * **约束与限制：**
     *   1. 私有provider为用户自行定义，提供给RFS的provider插件，RFS不负责校验其内部逻辑是否正确。
     *   2. RFS不负责维护私有provider的生命周期。用户使用私有provider部署的资源栈，由于私有provider缺失或问题，导致资源栈无法继续部署管理的，RFS不负责提供解决方案。
     *   3. RFS不负责保障私有provider的信息安全。用户使用私有provider部署的资源栈，由于模板中存在敏感数据，进而导致敏感信息泄露给第三方相关资源的，RFS不承担其相关责任。
     *   4. 当前调用私有provider过程中增加了网络因素，因此使用私有provider部署的失败概率会增加。如果出现因网络原因导致的部署失败，可以增加重试操作。
     *   5. 当前RFS默认会同步调用在FG中定义的读相关gRPC请求，单次方法需要确保运行时间不超过30s，否则会极大增加失败概率。
     *   6. 当前仅支持在模板中固定私有provider版本，不支持&gt;,&gt;&#x3D;,&lt;,&lt;&#x3D;,~&gt;等定义宽松版本的表达式。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建私有provider
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {CreatePrivateProviderRequestBody} createPrivateProviderRequestBody CreatePrivateProvider API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrivateProvider(createPrivateProviderRequest?: CreatePrivateProviderRequest): Promise<CreatePrivateProviderResponse> {
        const options = ParamCreater().createPrivateProvider(createPrivateProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建私有provider版本（CreatePrivateProviderVersion）
     * 
     *   * provider的版本号需遵循语义化版本号（Semantic Version），为用户自定义。
     *   * 如果provider_name和provider_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     *   * 资源编排服务只会对function_graph_urn进行浅校验，如是否符合正则，是否仅指定为当前region等。并不会深度校验，即用户是否存在权限调用，是否真实存在等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建私有provider版本
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} providerName 私有provider（private-provider）的名称。此名字在domain_id+region下应唯一，可以使用小写英文、数字、中划线。仅支持以小写英文、数字开头结尾。
     * @param {CreatePrivateProviderVersionRequestBody} createPrivateProviderVersionRequestBody CreatePrivateProviderVersion API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrivateProviderVersion(createPrivateProviderVersionRequest?: CreatePrivateProviderVersionRequest): Promise<CreatePrivateProviderVersionResponse> {
        const options = ParamCreater().createPrivateProviderVersion(createPrivateProviderVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除私有provider（DeletePrivateProvider）
     * 
     * 删除某个私有provider及私有provider下的所有provider版本。
     * 
     *   * 如果provider_name和provider_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     * 
     * ** 请谨慎操作，删除私有provider将会删除该私有provider下的所有provider版本。 **
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除私有provider
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} providerName 私有provider（private-provider）的名称。此名字在domain_id+region下应唯一，可以使用小写英文、数字、中划线。仅支持以小写英文、数字开头结尾。
     * @param {string} [providerId] 私有provider的唯一Id，由资源编排服务随机生成，为UUID。  由于私有provider名称仅仅在同一时间下唯一，即用户允许先生成一个叫helloword的私有provider，删除，再重新创建一个同名私有provider。  对于团队并行开发，用户可能希望确保，当前我操作的私有provider就是我以为的那个，而不是由其他队友删除后创建的同名私有provider。  因此，使用ID就可以做到强匹配。资源编排服务保证每次创建私有provider所对应的Id都不相同。  如果给予的provider_id和当前私有provider的Id不一致，则返回400。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePrivateProvider(deletePrivateProviderRequest?: DeletePrivateProviderRequest): Promise<DeletePrivateProviderResponse> {
        const options = ParamCreater().deletePrivateProvider(deletePrivateProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除私有provider版本（DeletePrivateProviderVersion）
     * 
     * 删除某个私有provider版本
     * 
     *   * 如果provider_name和provider_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     * 
     * **请谨慎操作**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除私有provider版本
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} providerName 私有provider（private-provider）的名称。此名字在domain_id+region下应唯一，可以使用小写英文、数字、中划线。仅支持以小写英文、数字开头结尾。
     * @param {string} providerVersion provider的版本号。版本号遵循语义化版本号（Semantic Version），为用户自定义
     * @param {string} [providerId] 私有provider的唯一Id，由资源编排服务随机生成，为UUID。  由于私有provider名称仅仅在同一时间下唯一，即用户允许先生成一个叫helloword的私有provider，删除，再重新创建一个同名私有provider。  对于团队并行开发，用户可能希望确保，当前我操作的私有provider就是我以为的那个，而不是由其他队友删除后创建的同名私有provider。  因此，使用ID就可以做到强匹配。资源编排服务保证每次创建私有provider所对应的Id都不相同。  如果给予的provider_id和当前私有provider的Id不一致，则返回400。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePrivateProviderVersion(deletePrivateProviderVersionRequest?: DeletePrivateProviderVersionRequest): Promise<DeletePrivateProviderVersionResponse> {
        const options = ParamCreater().deletePrivateProviderVersion(deletePrivateProviderVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举私有provider版本（ListPrivateProviderVersions）
     * 
     * 列举所选择的私有provider中所有的provider版本信息。
     * 
     *   * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
     *   * 如果provider_name和provider_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     *   * 如果provider下不存在provider版本，则返回空list。
     *   * 如果provider不存在则返回404。
     *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举私有provider版本
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} providerName 私有provider（private-provider）的名称。此名字在domain_id+region下应唯一，可以使用小写英文、数字、中划线。仅支持以小写英文、数字开头结尾。
     * @param {string} [providerId] 私有provider的唯一Id，由资源编排服务随机生成，为UUID。  由于私有provider名称仅仅在同一时间下唯一，即用户允许先生成一个叫helloword的私有provider，删除，再重新创建一个同名私有provider。  对于团队并行开发，用户可能希望确保，当前我操作的私有provider就是我以为的那个，而不是由其他队友删除后创建的同名私有provider。  因此，使用ID就可以做到强匹配。资源编排服务保证每次创建私有provider所对应的Id都不相同。  如果给予的provider_id和当前私有provider的Id不一致，则返回400。
     * @param {Array<'create_time'>} [sortKey] 排序字段，仅支持给予create_time
     * @param {Array<'asc' | 'desc'>} [sortDir] 指定升序还是降序   * &#x60;asc&#x60; - 升序   * &#x60;desc&#x60; - 降序
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivateProviderVersions(listPrivateProviderVersionsRequest?: ListPrivateProviderVersionsRequest): Promise<ListPrivateProviderVersionsResponse> {
        const options = ParamCreater().listPrivateProviderVersions(listPrivateProviderVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举私有provider（ListPrivateProviders）
     * 
     * 列举当前局点下用户所有的私有provider。
     * 
     *   * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
     *   * 如果当前用户下没有任何私有provider，则返回空list。
     *   * 如果需要某个provider的所有版本信息，可以调用ListPrivateProviderVersions。
     *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举私有provider
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {Array<'create_time'>} [sortKey] 排序字段，仅支持给予create_time
     * @param {Array<'asc' | 'desc'>} [sortDir] 指定升序还是降序   * &#x60;asc&#x60; - 升序   * &#x60;desc&#x60; - 降序
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivateProviders(listPrivateProvidersRequest?: ListPrivateProvidersRequest): Promise<ListPrivateProvidersResponse> {
        const options = ParamCreater().listPrivateProviders(listPrivateProvidersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取私有provider元数据（ShowPrivateProviderMetadata）
     * 
     * 获取某个私有provider的元数据信息
     * 
     *   * 具体返回的信息见ShowPrivateProviderMetadataResponseBody，如果想查看私有provider下全部provider版本，请调用ListPrivateProviderVersions。
     *   * 如果provider_name和provider_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取私有provider元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} providerName 私有provider（private-provider）的名称。此名字在domain_id+region下应唯一，可以使用小写英文、数字、中划线。仅支持以小写英文、数字开头结尾。
     * @param {string} [providerId] 私有provider的唯一Id，由资源编排服务随机生成，为UUID。  由于私有provider名称仅仅在同一时间下唯一，即用户允许先生成一个叫helloword的私有provider，删除，再重新创建一个同名私有provider。  对于团队并行开发，用户可能希望确保，当前我操作的私有provider就是我以为的那个，而不是由其他队友删除后创建的同名私有provider。  因此，使用ID就可以做到强匹配。资源编排服务保证每次创建私有provider所对应的Id都不相同。  如果给予的provider_id和当前私有provider的Id不一致，则返回400。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateProviderMetadata(showPrivateProviderMetadataRequest?: ShowPrivateProviderMetadataRequest): Promise<ShowPrivateProviderMetadataResponse> {
        const options = ParamCreater().showPrivateProviderMetadata(showPrivateProviderMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取私有provider版本元数据（ShowPrivateProviderVersionMetadata）
     * 
     * 获取某个私有provider版本的元数据信息
     *   
     *   * 具体返回信息见ShowPrivateProviderVersionMetadataResponseBody
     *   * 如果provider_name和provider_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取私有provider版本元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} providerName 私有provider（private-provider）的名称。此名字在domain_id+region下应唯一，可以使用小写英文、数字、中划线。仅支持以小写英文、数字开头结尾。
     * @param {string} providerVersion provider的版本号。版本号遵循语义化版本号（Semantic Version），为用户自定义
     * @param {string} [providerId] 私有provider的唯一Id，由资源编排服务随机生成，为UUID。  由于私有provider名称仅仅在同一时间下唯一，即用户允许先生成一个叫helloword的私有provider，删除，再重新创建一个同名私有provider。  对于团队并行开发，用户可能希望确保，当前我操作的私有provider就是我以为的那个，而不是由其他队友删除后创建的同名私有provider。  因此，使用ID就可以做到强匹配。资源编排服务保证每次创建私有provider所对应的Id都不相同。  如果给予的provider_id和当前私有provider的Id不一致，则返回400。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateProviderVersionMetadata(showPrivateProviderVersionMetadataRequest?: ShowPrivateProviderVersionMetadataRequest): Promise<ShowPrivateProviderVersionMetadataResponse> {
        const options = ParamCreater().showPrivateProviderVersionMetadata(showPrivateProviderVersionMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新私有provider元数据（UpdatePrivateProviderMetadata）
     * 
     * 更新当前私有provider的元数据信息
     * 
     *   * 目前只支持更新私有provider的描述
     *   * 如果需要创建新的版本，请调用CreatePrivateProviderVersion
     *   * 更新为增量更新，即如果某个参数不提供，则保持原始值
     *   * 如果请求中没有需要被更新的参数，则返回400。注意：即使更新原始值和目标值一致也被认为是有效更新
     *   * 更新后私有provider的更新时间（update_time）也会被更新
     *   * 如果provider_name和provider_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新私有provider元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} providerName 私有provider（private-provider）的名称。此名字在domain_id+region下应唯一，可以使用小写英文、数字、中划线。仅支持以小写英文、数字开头结尾。
     * @param {UpdatePrivateProviderMetadataRequestBody} updatePrivateProviderMetadataRequestBody UpdatePrivateProviderMetadata API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePrivateProviderMetadata(updatePrivateProviderMetadataRequest?: UpdatePrivateProviderMetadataRequest): Promise<UpdatePrivateProviderMetadataResponse> {
        const options = ParamCreater().updatePrivateProviderMetadata(updatePrivateProviderMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 执行执行计划（ApplyExecutionPlan）
     * 
     * 此API用于执行一个执行计划
     * 
     * * 当执行请求接受后，执行计划状态将变为&#x60;APPLY_IN_PROGRESS&#x60;，后台会进行异步处理。
     * * 当执行结束后，执行计划状态将变为&#x60;APPLIED&#x60;。
     * * 用户可以调用GetStackMetadata查询资源栈的状态（status）来跟踪资源栈部署情况以及确认本次执行结果是否成功。
     * * 执行执行计划时，用户将模板中定义的资源删除（包括Import定义的资源），会触发实际资源的删除。
     * 
     * 如果不希望通过执行计划进行部署操作，也可以选择调用DeployStack进行直接部署
     * 
     * 关于执行计划的过期失效：
     *   1. 如果指定资源栈下有多个执行计划，则在执行某个执行计划后（无论结果是否成功），剩余所有的执行计划将过期失效；
     *   2. 如果调用ApplyExecutionPlan时，指定的执行计划已经过期失效，则返回403
     * 
     * 如果资源栈状态处于非终态（即以&#x60;IN_PROGRESS&#x60;结尾，详细见下方）状态时，则不允许执行执行计划，并返回403。非终态状态包括但不限于以下状态：
     *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
     *   * 正在删除（DELETION_IN_PROGRESS）
     *   * 正在回滚（ROLLBACK_IN_PROGRESS）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行执行计划
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} executionPlanName 执行计划的名称。此名字在domain_id+区域+project_id+stack_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {ApplyExecutionPlanRequestBody} [applyExecutionPlanRequestBody] ApplyExecutionPlan API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applyExecutionPlan(applyExecutionPlanRequest?: ApplyExecutionPlanRequest): Promise<ApplyExecutionPlanResponse> {
        const options = ParamCreater().applyExecutionPlan(applyExecutionPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建执行计划（CreateExecutionPlan）
     * 
     * 此API用于在指定的资源栈下生成一个执行计划，执行计划描述了当前资源栈中记录的资源状态和模板描述的目的资源状态之间的区别（如，资源A将以以下配置文件生成，资源B将以下参数从XXX修改成YYY）
     * 
     * 调用此API触发创建执行计划之后，可以通过GetExecutionPlanMetadata来跟踪执行计划的状态
     * 当执行计划状态为&#x60;AVAILABLE&#x60;时，可以通过GetExecutionPlan获取本次执行计划的结果
     * 
     * 执行计划不会做过多深层的检查和校验，如用户是否有权限生成、修改资源等
     * 
     * **注意：**
     *   * 创建执行计划时，指定的资源栈必须存在。如果指定的资源栈不存在，则返回404，用户可通过调用创建资源栈（CreateStack）API来创建资源栈。
     *   * 如果请求中不含有template_body和template_uri，则返回400
     *   * 如果资源栈进行了某次部署操作，则在该次部署操作前生成的执行计划将全部失效
     *   * 执行计划只代表生成时刻的结果，如果执行计划生成后，用户手动修改资源状态，则执行计划不会自动更新
     *   * 如果资源栈状态处于&#x60;DEPLOYMENT_IN_PROGRESS&#x60;、&#x60;ROLLBACK_IN_PROGRESS&#x60;、&#x60;DELETION_IN_PROGRESS&#x60;等状态时，则不允许创建执行计划，并返回403
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建执行计划
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {CreateExecutionPlanRequestBody} createExecutionPlanRequestBody CreateExecutionPlan API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createExecutionPlan(createExecutionPlanRequest?: CreateExecutionPlanRequest): Promise<CreateExecutionPlanResponse> {
        const options = ParamCreater().createExecutionPlan(createExecutionPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除执行计划（DeleteExecutionPlan）
     * 
     * 删除指定的执行计划
     * 
     * 如果执行计划状态处于&#x60;CREATION_IN_PROGRESS&#x60;、&#x60;APPLY_IN_PROGRESS&#x60;状态时，则不允许删除并返回403
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除执行计划
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} executionPlanName 执行计划的名称。此名字在domain_id+区域+project_id+stack_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一ID。  此ID由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给予的stack_id和当前资源栈的ID不一致，则返回400
     * @param {string} [executionPlanId] 执行计划（execution_plan）的唯一ID。  此ID由资源编排服务在生成执行计划的时候生成，为UUID。  由于执行计划名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的执行计划，删除，再重新创建一个同名执行计划。  对于团队并行开发，用户可能希望确保，当前我操作的执行计划就是我认为的那个，而不是其他队友删除后创建的同名执行计划。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的执行计划所对应的ID都不相同，更新不会影响ID。如果给予的execution_plan_id和当前执行计划的ID不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteExecutionPlan(deleteExecutionPlanRequest?: DeleteExecutionPlanRequest): Promise<DeleteExecutionPlanResponse> {
        const options = ParamCreater().deleteExecutionPlan(deleteExecutionPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 预估执行计划价格（EstimateExecutionPlanPrice）
     * 
     * 此API可以基于一份已有的执行计划中增量的资源进行询价，当前支持询价的计费模式有包周期计费、按需计费、免费，暂不支持其他形式的计费模式，例如竞价计费模式等。
     * 
     * 注：
     *   * 由于某些资源的属性值含有默认值，且该属性和询价参数相关。如果用户的模板中描述的资源没有声明这些属性，则询价结果可能存在偏差。
     *   * 询价结果仅为预估结果，具体请以实际为准。
     *   * 如果用户在模板中使用了depends_on参数，如A资源询价必要字段依赖于B资源的创建，则A资源不支持询价。
     *   * 暂不支持传入data sources的flavor.id的场景的询价。
     *   * 暂不支持镜像询价。
     *   * 如果A资源的询价必要字段设置了sensitive &#x3D; true，则A资源不支持询价。
     *   * 模板中询价的资源的个数是有限制的。当前一个模板中最多支持12个包周期计费资源和24个按需计费资源。
     *   * 支持询价的资源列表和询价必要参数
     *       * huaweicloud_cce_cluster: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_css_cluster:
     *           * 支持的计费模式：按需
     *       * huaweicloud_evs_volume: 
     *           * 支持的计费模式：包周期、按需
     *           * 询价必要参数：size（磁盘规格）
     *       * huaweicloud_compute_instance: 
     *           * 支持的计费模式：包周期、按需
     *           * 询价必要参数：flavor_id（规格ID）、flavor_name（规格名称，flavor_id和flavor_name至少给出一个）、system_disk_size（系统磁盘大小）
     *       * huaweicloud_vpc_bandwidth:
     *           * 支持的计费模式：包周期、按需
     *           * 询价必要参数：charge_mode仅支持bandwidth
     *       * huaweicloud_vpc_eip: 
     *           * 支持的计费模式：包周期、按需
     *           * 询价必要参数：bandwidth.size（带宽大小）
     *       * huaweicloud_gaussdb_redis_instance: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_nat_gateway: 
     *           * 支持的计费模式：按需
     *       * huaweicloud_rds_instance: 
     *           * 支持的计费模式：包周期、按需
     *           * 支持的数据库类型：MySQL、PostgreSQL、Microsoft SQL Server      
     *       * huaweicloud_sfs_turbo: 
     *           * 支持的计费模式：按需
     *           * 询价必要参数：share_type（文件系统类型）
     *       * huaweicloud_dms_kafka_instance: 
     *           * 支持的计费模式：按需
     *           * 询价必要参数：flavor_id（规格ID）、product_id（产品ID。flavor_id和product_id至少给出一个。）、storage_space（存储容量）
     *       * huaweicloud_dcs_instance: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_gaussdb_mysql_instance: 
     *           * 支持的计费模式：包周期、按需
     *           * 询价必要参数：proxy_node_number（代理节点数量）、volume_size（挂载卷的存储空间）
     *       * huaweicloud_vpc: 
     *           * 支持的计费模式：免费
     *       * huaweicloud_drs_job: 
     *           * 支持的计费模式：按需
     *       * huaweicloud_apig_instance: 
     *           * 支持的计费模式：按需
     *       * huaweicloud_dms_rabbitmq_instance: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_hss_quota: 
     *           * 支持的计费模式：包周期
     *       * huaweicloud_hss_host_protection: 
     *           * 支持的计费模式：按需
     *       * huaweicloud_cbr_vault: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_cbh_instance: 
     *           * 支持的计费模式：包周期
     *       * huaweicloud_cbh_ha_instance: 
     *           * 支持的计费模式：包周期
     *       * huaweicloud_waf_cloud_instance: 
     *           * 支持的计费模式：包周期
     *       * huaweicloud_lb_loadbalancer: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_elb_loadbalancer: 
     *           * 支持的计费模式：按需
     *       * huaweicloud_modelarts_resource_pool: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_cnad_advanced_black_white_list: 
     *           * 支持的计费模式：免费
     *       * huaweicloud_cnad_advanced_policy: 
     *           * 支持的计费模式：免费
     *       * huaweicloud_cnad_advanced_protected_object: 
     *           * 支持的计费模式：免费
     *       * huaweicloud_antiddos_basic: 
     *           * 支持的计费模式：免费
     *       * huaweicloud_obs_bucket: 
     *           * 支持的计费模式：免费
     *       * huaweicloud_obs_bucket_replication: 
     *           * 支持的计费模式：免费
     *       * huaweicloud_workspace_desktop: 
     *           * 支持的计费模式：按需
     *       * huaweicloud_dws_cluster: 
     *           * 支持的计费模式：按需
     *       * huaweicloud_dws_ext_data_source: 
     *           * 支持的计费模式：免费
     *       * huaweicloud_dws_snapshot: 
     *           * 支持的计费模式：免费
     *       * huaweicloud_dds_instance: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_rds_read_replica_instance: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_cce_node: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_dms_rocketmq_instance: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_gaussdb_opengauss_instance: 
     *           * 支持的计费模式：包周期、按需
     *       * huaweicloud_vpcep_endpoint: 
     *           * 支持的计费模式：按需
     *       * huaweicloud_kms_key: 
     *           * 支持的计费模式：按需
     *       * huaweicloud_elb_listener:
     *           * 支持的计费模式：免费
     *       * huaweicloud_elb_monitor:
     *           * 支持的计费模式：免费
     *       * huaweicloud_elb_pool:
     *           * 支持的计费模式：免费
     *       * huaweicloud_elb_member:
     *           * 支持的计费模式：免费
     *       * huaweicloud_vpc_subnet:
     *           * 支持的计费模式：免费
     *       * huaweicloud_networking_secgroup:
     *           * 支持的计费模式：免费
     *       * huaweicloud_iec_security_group:
     *           * 支持的计费模式：免费
     *       * huaweicloud_dns_zone:
     *           * 支持的计费模式：免费
     *       * huaweicloud_enterprise_project:
     *           * 支持的计费模式：免费
     *       * huaweicloud_er_instance:
     *           * 支持的计费模式：免费
     *       * huaweicloud_lts_group:
     *           * 支持的计费模式：免费
     *       * huaweicloud_smn_topic:
     *           * 支持的计费模式：免费
     *       * huaweicloud_smn_subscription:
     *           * 支持的计费模式：免费
     *       * huaweicloud_cc_connection:
     *           * 支持的计费模式：免费
     *       * huaweicloud_cc_network_instance:
     *           * 支持的计费模式：免费
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 预估执行计划价格
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} executionPlanName 执行计划的名称。此名字在domain_id+区域+project_id+stack_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一ID。  此ID由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给予的stack_id和当前资源栈的ID不一致，则返回400
     * @param {string} [executionPlanId] 执行计划（execution_plan）的唯一ID。  此ID由资源编排服务在生成执行计划的时候生成，为UUID。  由于执行计划名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的执行计划，删除，再重新创建一个同名执行计划。  对于团队并行开发，用户可能希望确保，当前我操作的执行计划就是我认为的那个，而不是其他队友删除后创建的同名执行计划。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的执行计划所对应的ID都不相同，更新不会影响ID。如果给予的execution_plan_id和当前执行计划的ID不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public estimateExecutionPlanPrice(estimateExecutionPlanPriceRequest?: EstimateExecutionPlanPriceRequest): Promise<EstimateExecutionPlanPriceResponse> {
        const options = ParamCreater().estimateExecutionPlanPrice(estimateExecutionPlanPriceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取执行计划（GetExecutionPlan）
     * 
     * 此API用于获取指定执行计划的详细内容（即执行计划项目），用户可通过此API得知指定执行计划在执行后，资源栈中的资源会发生何种变化
     * 
     * 如果执行计划状态为&#x60;CREATION_IN_PROGRESS&#x60;或&#x60;CREATION_FAILED&#x60;，则不返回执行计划项目列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取执行计划
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} executionPlanName 执行计划的名称。此名字在domain_id+区域+project_id+stack_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一ID。  此ID由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给予的stack_id和当前资源栈的ID不一致，则返回400
     * @param {string} [executionPlanId] 执行计划（execution_plan）的唯一ID。  此ID由资源编排服务在生成执行计划的时候生成，为UUID。  由于执行计划名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的执行计划，删除，再重新创建一个同名执行计划。  对于团队并行开发，用户可能希望确保，当前我操作的执行计划就是我认为的那个，而不是其他队友删除后创建的同名执行计划。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的执行计划所对应的ID都不相同，更新不会影响ID。如果给予的execution_plan_id和当前执行计划的ID不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getExecutionPlan(getExecutionPlanRequest?: GetExecutionPlanRequest): Promise<GetExecutionPlanResponse> {
        const options = ParamCreater().getExecutionPlan(getExecutionPlanRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取执行计划元数据（GetExecutionPlanMetadata）
     * 
     * 该API可以获取指定执行计划的元数据，包括资源栈ID、资源栈名称、执行计划ID、执行计划名称、执行计划描述、执行计划的创建时间和执行时间、执行计划状态等信息。
     * 
     * 具体信息见GetExecutionPlanMetadataResponseBody。
     * 
     * 如果需要获取执行计划的具体内容，请调用GetExecutionPlan。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取执行计划元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} executionPlanName 执行计划的名称。此名字在domain_id+区域+project_id+stack_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一ID。  此ID由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给予的stack_id和当前资源栈的ID不一致，则返回400
     * @param {string} [executionPlanId] 执行计划（execution_plan）的唯一ID。  此ID由资源编排服务在生成执行计划的时候生成，为UUID。  由于执行计划名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的执行计划，删除，再重新创建一个同名执行计划。  对于团队并行开发，用户可能希望确保，当前我操作的执行计划就是我认为的那个，而不是其他队友删除后创建的同名执行计划。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的执行计划所对应的ID都不相同，更新不会影响ID。如果给予的execution_plan_id和当前执行计划的ID不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getExecutionPlanMetadata(getExecutionPlanMetadataRequest?: GetExecutionPlanMetadataRequest): Promise<GetExecutionPlanMetadataResponse> {
        const options = ParamCreater().getExecutionPlanMetadata(getExecutionPlanMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举执行计划（ListExecutionPlans）
     * 
     * 列举当前局点下用户指定资源栈下所有的执行计划
     * 
     *   * 默认按照生成时间降序排序，最新生成的在最前
     *   * 如果指定的资源栈下没有任何执行计划，则返回空list
     *   * 如果指定的资源栈不存在，则返回404
     *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * ListExecutionPlans返回的只有摘要信息（具体摘要信息见ListExecutionPlansResponseBody），如果用户需要详细的执行计划元数据请调用GetExecutionPlanMetadata
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举执行计划
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一ID。  此ID由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给予的stack_id和当前资源栈的ID不一致，则返回400
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExecutionPlans(listExecutionPlansRequest?: ListExecutionPlansRequest): Promise<ListExecutionPlansResponse> {
        const options = ParamCreater().listExecutionPlans(listExecutionPlansRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建私有hook（CreatePrivateHook）
     * 
     * 创建一个带有初始默认版本的私有hook，创建私有hook的时候需要同时创建一个初始化的默认版本，不允许空私有hook的创建。
     * 设置配置(Configuration)后的私有hook才会在触发资源栈部署时生效，资源栈使用私有hook的默认版本。若创建私有hook时未指定配置项，则该私有hook在资源栈部署时不生效，后续可通过UpdatePrivateHook API更新配置。
     * 
     *   * 支持hook策略模板检验的资源栈服务API：
     *       CreateExecutionPlan
     *       ApplyExecutionPlan
     *       CreateStack
     *       DeployStack
     *       ContinueDeployStack
     *       DeleteStack
     *       DeleteStackEnhanced
     *   * 创建私有hook时指定的版本为初始默认版本。
     *   * 如果同名的私有hook在当前domain_id+region下已经存在，则会返回409。
     *   * 对于私有hook的名字，推荐用户使用三段命名空间：{自定义hook名称}-{hook应用场景}-hook。
     *   * 私有hook版本号遵循语义化版本号（Semantic Version），为用户自定义。
     *   * 资源编排服务会对私有hook进行校验，如文件大小，策略文件语法校验等。若存在错误，则会创建失败。
     *   * 当前仅支持部署资源前的检测，不支持部署资源过程中的检测。如果通过了部署资源前的检测，资源栈则会继续部署资源。反之会停止部署资源，并记录资源栈事件（stack events）。
     *   * 仅支持OPA开源引擎识别的，以Rego（https://www.openpolicyagent.org/docs/latest/policy-language/）语言编写的策略模板(用户可以通过policy_uri或policy_body给予策略文件内容)。
     *   * 策略模板中的决策结果使用object类型的hook_result，hook_result所在包的包名必须使用policy。hook_result格式如下：
     *       &#x60;&#x60;&#x60;
     *       hook_result :&#x3D; {
     *         \&quot;is_passed\&quot;: Bool,
     *         \&quot;err_msg\&quot;: String,
     *       }
     *       &#x60;&#x60;&#x60;
     *     其中is_passed必选，err_msg可选。RFS通过查询policy.hook_result[is_passed]判断是否通过策略校验。
     *     * 如果policy.hook_result[is_passed]的结果是true，则表示通过策略校验，资源编排服务会继续部署资源。
     *     * 如果policy.hook_result[is_passed]的结果是false，则表示没有通过策略校验，资源编排服务会停止部署资源。并记录资源栈事件信息，信息的内容为policy.hook_result[err_msg]。如果没有设置err_msg，则资源栈事件信息内容为默认错误信息（校验私有hook失败）。
     *     * 如果没有使用policy.hook_result，则该策略不会生效，资源编排服务会继续部署资源。
     *   * 策略模板中不支持调用其他服务API等方式获取数据、不支持任何形式的网络访问、不支持以任何形式的自定义函数或者方法等、不支持读取本地文件以及系统操作。
     * 
     * 私有hook的策略模板语法如下：
     * &#x60;&#x60;&#x60;
     * package policy
     * 
     * import rego.v1
     * 
     * hook_result :&#x3D; {
     *   \&quot;is_passed\&quot;: input.message &#x3D;&#x3D; \&quot;world\&quot;,
     *   \&quot;err_msg\&quot;: \&quot;The error msg when private hook is not passed the validation\&quot;,
     * }
     * &#x60;&#x60;&#x60;
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建私有hook
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {CreatePrivateHookRequestBody} createPrivateHookRequestBody CreatePrivateHook API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrivateHook(createPrivateHookRequest?: CreatePrivateHookRequest): Promise<CreatePrivateHookResponse> {
        const options = ParamCreater().createPrivateHook(createPrivateHookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建私有hook版本（CreatePrivateHookVersion）
     * 
     * 创建私有hook版本，创建私有hook版本后需要调用UpdatePrivateHook API设置为默认版本才能生效。
     * 
     *   * 版本号遵循语义化版本号（Semantic Version），为用户自定义。
     *   * 若hook_name和hook_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     *   * 资源编排服务会对私有hook进行校验，如文件大小，策略文件语法校验等。若存在错误，则会创建失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建私有hook版本
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} hookName 私有hook的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {CreatePrivateHookVersionRequestBody} createPrivateHookVersionRequestBody CreatePrivateHookVersion API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrivateHookVersion(createPrivateHookVersionRequest?: CreatePrivateHookVersionRequest): Promise<CreatePrivateHookVersionResponse> {
        const options = ParamCreater().createPrivateHookVersion(createPrivateHookVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除私有hook（DeletePrivateHook）
     * 
     * 删除某个私有hook以及私有hook下的全部hook版本
     * 
     *   * 默认版本只能调用本API删除，除默认版本外的其它版本可以调用DeletePrivateHookVersion API删除。
     *   * 若hook_name和hook_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     * 
     * **请谨慎操作，删除私有hook将会删除该私有hook和该私有hook下的所有私有hook版本。**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除私有hook
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} hookName 私有hook的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [hookId] 私有hook（private-hook）的唯一Id。  此Id由资源编排服务在生成私有hook的时候生成，为UUID。  由于私有hook名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的私有hook，删除，再重新创建一个同名私有hook。  对于团队并行开发，用户可能希望确保，当前我操作的私有hook就是我认为的那个，而不是其他队友删除后创建的同名私有hook。因此，使用Id就可以做到强匹配。  资源编排服务保证每次创建的私有hook所对应的Id都不相同，更新不会影响Id。如果给予的hook_id和当前hook的Id不一致，则返回400。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePrivateHook(deletePrivateHookRequest?: DeletePrivateHookRequest): Promise<DeletePrivateHookResponse> {
        const options = ParamCreater().deletePrivateHook(deletePrivateHookRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除私有hook版本（DeletePrivateHookVersion）
     * 
     * 删除某个私有hook版本
     * 
     *   * 默认版本只能调用DeletePrivateHook API删除，除默认版本外的其它版本都可以调用本API删除。
     *   * 若hook_name和hook_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     * 
     * **请谨慎操作**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除私有hook版本
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} hookName 私有hook的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} hookVersion 私有hook的版本号。版本号必须遵循语义化版本号（Semantic Version），为用户自定义。
     * @param {string} [hookId] 私有hook（private-hook）的唯一Id。  此Id由资源编排服务在生成私有hook的时候生成，为UUID。  由于私有hook名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的私有hook，删除，再重新创建一个同名私有hook。  对于团队并行开发，用户可能希望确保，当前我操作的私有hook就是我认为的那个，而不是其他队友删除后创建的同名私有hook。因此，使用Id就可以做到强匹配。  资源编排服务保证每次创建的私有hook所对应的Id都不相同，更新不会影响Id。如果给予的hook_id和当前hook的Id不一致，则返回400。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePrivateHookVersion(deletePrivateHookVersionRequest?: DeletePrivateHookVersionRequest): Promise<DeletePrivateHookVersionResponse> {
        const options = ParamCreater().deletePrivateHookVersion(deletePrivateHookVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举私有hook版本（ListPrivateHookVersions）
     * 
     * 列举所选择的私有hook中所有的hook版本信息。
     * 
     *   * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
     *   * 如果hook_name和hook_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     *   * 如果hook下不存在hook版本，则返回空list。
     *   * 如果hook不存在则返回404。
     *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举私有hook版本
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} hookName 私有hook的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [hookId] 私有hook（private-hook）的唯一Id。  此Id由资源编排服务在生成私有hook的时候生成，为UUID。  由于私有hook名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的私有hook，删除，再重新创建一个同名私有hook。  对于团队并行开发，用户可能希望确保，当前我操作的私有hook就是我认为的那个，而不是其他队友删除后创建的同名私有hook。因此，使用Id就可以做到强匹配。  资源编排服务保证每次创建的私有hook所对应的Id都不相同，更新不会影响Id。如果给予的hook_id和当前hook的Id不一致，则返回400。
     * @param {Array<'create_time'>} [sortKey] 排序字段，仅支持给予create_time
     * @param {Array<'asc' | 'desc'>} [sortDir] 指定升序还是降序   * &#x60;asc&#x60; - 升序   * &#x60;desc&#x60; - 降序
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivateHookVersions(listPrivateHookVersionsRequest?: ListPrivateHookVersionsRequest): Promise<ListPrivateHookVersionsResponse> {
        const options = ParamCreater().listPrivateHookVersions(listPrivateHookVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举私有hook（ListPrivateHooks）
     * 
     * 列举当前局点下用户所有的私有hook。
     * 
     *   * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir的数量须一致，否则返回400。若未给予sort_key和sort_dir，则默认按照创建时间降序排序。
     *   * 若当前用户没有任何私有hook，则返回空list。
     *   * 具体返回的信息见ListPrivateHooksResponseBody。
     *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举私有hook
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {Array<'create_time'>} [sortKey] 排序字段，仅支持给予create_time
     * @param {Array<'asc' | 'desc'>} [sortDir] 指定升序还是降序   * &#x60;asc&#x60; - 升序   * &#x60;desc&#x60; - 降序
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivateHooks(listPrivateHooksRequest?: ListPrivateHooksRequest): Promise<ListPrivateHooksResponse> {
        const options = ParamCreater().listPrivateHooks(listPrivateHooksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取私有hook元数据（ShowPrivateHookMetadata）
     * 
     * 获取某个私有hook的元数据信息
     * 
     *   * 具体返回的信息见ShowPrivateHookMetadataResponseBody，若想查看私有hook下全部版本，请调用ListPrivateHookVersions。
     *   * 若hook_name和hook_id同时存在，则资源编排服务会检查两个是否匹配，如果不匹配则会返回400。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取私有hook元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} hookName 私有hook的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [hookId] 私有hook（private-hook）的唯一Id。  此Id由资源编排服务在生成私有hook的时候生成，为UUID。  由于私有hook名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的私有hook，删除，再重新创建一个同名私有hook。  对于团队并行开发，用户可能希望确保，当前我操作的私有hook就是我认为的那个，而不是其他队友删除后创建的同名私有hook。因此，使用Id就可以做到强匹配。  资源编排服务保证每次创建的私有hook所对应的Id都不相同，更新不会影响Id。如果给予的hook_id和当前hook的Id不一致，则返回400。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateHookMetadata(showPrivateHookMetadataRequest?: ShowPrivateHookMetadataRequest): Promise<ShowPrivateHookMetadataResponse> {
        const options = ParamCreater().showPrivateHookMetadata(showPrivateHookMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取私有hook版本的元数据（ShowPrivateHookVersionMetadata）
     * 
     * 获取当前私有hook对应版本的元数据信息
     * 
     *   * 具体返回的信息见ShowPrivateHookVersionMetadataResponseBody。
     *   * 如果hook_name和hook_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取私有hook版本的元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} hookName 私有hook的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} hookVersion 私有hook的版本号。版本号必须遵循语义化版本号（Semantic Version），为用户自定义。
     * @param {string} [hookId] 私有hook（private-hook）的唯一Id。  此Id由资源编排服务在生成私有hook的时候生成，为UUID。  由于私有hook名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的私有hook，删除，再重新创建一个同名私有hook。  对于团队并行开发，用户可能希望确保，当前我操作的私有hook就是我认为的那个，而不是其他队友删除后创建的同名私有hook。因此，使用Id就可以做到强匹配。  资源编排服务保证每次创建的私有hook所对应的Id都不相同，更新不会影响Id。如果给予的hook_id和当前hook的Id不一致，则返回400。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateHookVersionMetadata(showPrivateHookVersionMetadataRequest?: ShowPrivateHookVersionMetadataRequest): Promise<ShowPrivateHookVersionMetadataResponse> {
        const options = ParamCreater().showPrivateHookVersionMetadata(showPrivateHookVersionMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取私有hook版本策略（ShowPrivateHookVersionPolicy）
     * 
     * 获取指定私有hook对应版本的策略。
     * 
     *   * 如果获取成功，则以临时重定向形式返回私有hook版本策略下载链接（OBS Pre Signed地址，有效期为5分钟），大多数的客户端会进行自动重定向并下载私有hook版本策略。
     *   * 如果未进行自动重定向，请参考HTTP的重定向规则获取私有hook版本策略下载链接，手动下载私有hook版本策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取私有hook版本策略
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} hookName 私有hook的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} hookVersion 私有hook的版本号。版本号必须遵循语义化版本号（Semantic Version），为用户自定义。
     * @param {string} [hookId] 私有hook（private-hook）的唯一Id。  此Id由资源编排服务在生成私有hook的时候生成，为UUID。  由于私有hook名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的私有hook，删除，再重新创建一个同名私有hook。  对于团队并行开发，用户可能希望确保，当前我操作的私有hook就是我认为的那个，而不是其他队友删除后创建的同名私有hook。因此，使用Id就可以做到强匹配。  资源编排服务保证每次创建的私有hook所对应的Id都不相同，更新不会影响Id。如果给予的hook_id和当前hook的Id不一致，则返回400。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateHookVersionPolicy(showPrivateHookVersionPolicyRequest?: ShowPrivateHookVersionPolicyRequest): Promise<ShowPrivateHookVersionPolicyResponse> {
        const options = ParamCreater().showPrivateHookVersionPolicy(showPrivateHookVersionPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Location'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新私有hook元数据（UpdatePrivateHookMetadata）
     * 
     * 更新当前私有hook的元数据信息
     * 
     *   * 目前支持更新私有hook的描述、默认版本、配置。
     *   * 如果需要创建新的版本，请调用CreatePrivateHookVersion。
     *   * 更新为增量更新，即如果某个参数不提供，则保持原始值。
     *   * 如果请求中没有需要被更新的参数（如请求中没有任何内容，或仅有hook_id），则返回400。注意：即使更新原始值和目标值一致也被认为是有效更新
     *   * 更新后私有hook的更新时间（update_time）也会被更新
     *   * 若hook_name和hook_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新私有hook元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} hookName 私有hook的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {UpdatePrivateHookMetadataRequestBody} updatePrivateHookMetadataRequestBody UpdatePrivateHookMetadata API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePrivateHookMetadata(updatePrivateHookMetadataRequest?: UpdatePrivateHookMetadataRequest): Promise<UpdatePrivateHookMetadataResponse> {
        const options = ParamCreater().updatePrivateHookMetadata(updatePrivateHookMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建私有模块（CreatePrivateModule）
     * 
     * 创建一个空的私有模块。如果用户给予了module_version与module_uri，则在创建私有模块的同时，在私有模块下创建一个私有模块版本。
     *   * 模块允许用户将可复用的代码编辑在一起供模块使用。
     *   * 如果同名私有模块在当前账户中已经存在，则会返回失败。
     *   * 版本号遵循语义化版本号（Semantic Version），为用户自定义。
     *   * 资源编排服务只会对模块进行浅校验，如文件大小、是否可以解压、文件数量等。并不会深度校验，即不会做语法类校验。
     * 
     * 以HCL格式的模板为例，模板中引用私有模块的语法如下：
     * &#x60;&#x60;&#x60;
     * module \&quot;my_hello_word_module\&quot; {
     *   source &#x3D; \&quot;rf://rfs.{region_id}.myhuaweicloud.com/private/{domain_id}/{module_name}?version&#x3D;&#x3D;{module_version}\&quot;
     * }
     * &#x60;&#x60;&#x60;
     * 
     * 以JSON格式的模板为例，模板中引用私有模块的语法如下：
     * &#x60;&#x60;&#x60;
     * {
     *   \&quot;module\&quot;: {
     *     \&quot;my_hello_word_module\&quot;: {
     *       \&quot;source\&quot;: \&quot;rf://rfs.{region_id}.myhuaweicloud.com/private/{domain_id}/{module_name}?version&#x3D;&#x3D;{module_version}\&quot;
     *     }
     *   }
     * }
     * &#x60;&#x60;&#x60;
     * 对应上述两个例子中的模块链接（source字段的内容）可以调用ShowPrivateModuleVersionMetadata返回的module_source字段中获取
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建私有模块
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {CreatePrivateModuleRequestBody} createPrivateModuleRequestBody CreatePrivateModule API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrivateModule(createPrivateModuleRequest?: CreatePrivateModuleRequest): Promise<CreatePrivateModuleResponse> {
        const options = ParamCreater().createPrivateModule(createPrivateModuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建私有模块版本（CreatePrivateModuleVersion）
     * 
     * 创建新的私有模块版本
     * 
     *   * 模块的版本号需遵循语义化版本号（Semantic Version），为用户自定义。
     *   * 如果module_name和module_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     *   * 资源编排服务只会对模块进行浅校验，如文件大小、是否可以解压、文件数量等。并不会深度校验，即不会做语法类校验。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建私有模块版本
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} moduleName 私有模块（private-module）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {CreatePrivateModuleVersionRequestBody} createPrivateModuleVersionRequestBody CreatePrivateModuleVersion API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrivateModuleVersion(createPrivateModuleVersionRequest?: CreatePrivateModuleVersionRequest): Promise<CreatePrivateModuleVersionResponse> {
        const options = ParamCreater().createPrivateModuleVersion(createPrivateModuleVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除私有模块（DeletePrivateModule）
     * 
     * 删除某个私有模块以及私有模块下的全部模块版本
     * 
     *   * 如果module_name和module_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     * 
     * **请谨慎操作，删除私有模块将会删除该私有模块下的所有的模块版本。**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除私有模块
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} moduleName 私有模块（private-module）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [moduleId] 私有模块（private-module）的唯一Id。  此Id由资源编排服务在生成模块的时候生成，为UUID。  由于私有模块名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的私有模块，删除，再重新创建一个同名私有模块。  对于团队并行开发，用户可能希望确保，当前我操作的私有模块就是我认为的那个，而不是其他队友删除后创建的同名私有模块。因此，使用Id就可以做到强匹配。  资源编排服务保证每次创建的私有模块所对应的Id都不相同，更新不会影响Id。如果给予的module_id和当前模块的Id不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePrivateModule(deletePrivateModuleRequest?: DeletePrivateModuleRequest): Promise<DeletePrivateModuleResponse> {
        const options = ParamCreater().deletePrivateModule(deletePrivateModuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除私有模块版本（DeletePrivateModuleVersion）
     * 
     * 删除某个私有模块版本
     * 
     *   * 如果module_name和module_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     * 
     * **请谨慎操作**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除私有模块版本
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} moduleName 私有模块（private-module）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} moduleVersion 模块的版本号。版本号遵循语义化版本号（Semantic Version），为用户自定义
     * @param {string} [moduleId] 私有模块（private-module）的唯一Id。  此Id由资源编排服务在生成模块的时候生成，为UUID。  由于私有模块名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的私有模块，删除，再重新创建一个同名私有模块。  对于团队并行开发，用户可能希望确保，当前我操作的私有模块就是我认为的那个，而不是其他队友删除后创建的同名私有模块。因此，使用Id就可以做到强匹配。  资源编排服务保证每次创建的私有模块所对应的Id都不相同，更新不会影响Id。如果给予的module_id和当前模块的Id不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePrivateModuleVersion(deletePrivateModuleVersionRequest?: DeletePrivateModuleVersionRequest): Promise<DeletePrivateModuleVersionResponse> {
        const options = ParamCreater().deletePrivateModuleVersion(deletePrivateModuleVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举私有模块版本（ListPrivateModuleVersions）
     * 
     * 列举所选择的私有模块中所有的模块版本信息。
     * 
     *   * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
     *   * 如果module_name和module_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     *   * 如果模块不存在则返回404。
     *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * ListPrivateModuleVersions返回的只有摘要信息（具体摘要信息见ListPrivateModuleVersionsResponseBody），如果用户需要详细的模块版本元数据请调用ShowPrivateModuleVersionMetadata
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举私有模块版本
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} moduleName 私有模块（private-module）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [moduleId] 私有模块（private-module）的唯一Id。  此Id由资源编排服务在生成模块的时候生成，为UUID。  由于私有模块名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的私有模块，删除，再重新创建一个同名私有模块。  对于团队并行开发，用户可能希望确保，当前我操作的私有模块就是我认为的那个，而不是其他队友删除后创建的同名私有模块。因此，使用Id就可以做到强匹配。  资源编排服务保证每次创建的私有模块所对应的Id都不相同，更新不会影响Id。如果给予的module_id和当前模块的Id不一致，则返回400
     * @param {Array<'create_time'>} [sortKey] 排序字段，仅支持给予create_time
     * @param {Array<'asc' | 'desc'>} [sortDir] 指定升序还是降序   * &#x60;asc&#x60; - 升序   * &#x60;desc&#x60; - 降序
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivateModuleVersions(listPrivateModuleVersionsRequest?: ListPrivateModuleVersionsRequest): Promise<ListPrivateModuleVersionsResponse> {
        const options = ParamCreater().listPrivateModuleVersions(listPrivateModuleVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举私有模块（ListPrivateModules）
     * 
     * 列举当前局点下用户所有的私有模块。
     * 
     *   * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
     *   * 如果当前用户下没有任何私有模块，则返回空list。
     *   * 如果需要某个模块的所有版本信息，可以调用ListModuleVersions。
     *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * ListPrivateModules返回的只有摘要信息（具体摘要信息见ListPrivateModulesResponseBody），如果用户需要详细的模块元数据请调用ShowPrivateModuleMetadata
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举私有模块
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {Array<'create_time'>} [sortKey] 排序字段，仅支持给予create_time
     * @param {Array<'asc' | 'desc'>} [sortDir] 指定升序还是降序   * &#x60;asc&#x60; - 升序   * &#x60;desc&#x60; - 降序
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivateModules(listPrivateModulesRequest?: ListPrivateModulesRequest): Promise<ListPrivateModulesResponse> {
        const options = ParamCreater().listPrivateModules(listPrivateModulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取私有模块元数据（ShowPrivateModuleMetadata）
     * 
     * 获取当前私有模块的元数据信息
     * 
     *   * 具体返回的信息见ShowPrivateModuleMetadataResponseBody，如果想查看私有模块下全部模块版本，请调用ListPrivateModuleVersions。
     *   * 如果module_name和module_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取私有模块元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} moduleName 私有模块（private-module）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [moduleId] 私有模块（private-module）的唯一Id。  此Id由资源编排服务在生成模块的时候生成，为UUID。  由于私有模块名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的私有模块，删除，再重新创建一个同名私有模块。  对于团队并行开发，用户可能希望确保，当前我操作的私有模块就是我认为的那个，而不是其他队友删除后创建的同名私有模块。因此，使用Id就可以做到强匹配。  资源编排服务保证每次创建的私有模块所对应的Id都不相同，更新不会影响Id。如果给予的module_id和当前模块的Id不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateModuleMetadata(showPrivateModuleMetadataRequest?: ShowPrivateModuleMetadataRequest): Promise<ShowPrivateModuleMetadataResponse> {
        const options = ParamCreater().showPrivateModuleMetadata(showPrivateModuleMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取私有模块版本内容（ShowPrivateModuleVersionContent）
     * 
     * 获取指定私有模块对应版本的内容。
     * 
     *   * 如果获取成功，则以临时重定向形式返回模块下载链接（OBS Pre Signed地址，有效期为5分钟），大多数的客户端会进行自动重定向并下载模块；
     *   * 如果未进行自动重定向，请参考HTTP的重定向规则获取模块下载链接，手动下载模块。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取私有模块版本内容
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} moduleName 私有模块（private-module）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} moduleVersion 模块的版本号。版本号遵循语义化版本号（Semantic Version），为用户自定义
     * @param {string} [moduleId] 私有模块（private-module）的唯一Id。  此Id由资源编排服务在生成模块的时候生成，为UUID。  由于私有模块名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的私有模块，删除，再重新创建一个同名私有模块。  对于团队并行开发，用户可能希望确保，当前我操作的私有模块就是我认为的那个，而不是其他队友删除后创建的同名私有模块。因此，使用Id就可以做到强匹配。  资源编排服务保证每次创建的私有模块所对应的Id都不相同，更新不会影响Id。如果给予的module_id和当前模块的Id不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateModuleVersionContent(showPrivateModuleVersionContentRequest?: ShowPrivateModuleVersionContentRequest): Promise<ShowPrivateModuleVersionContentResponse> {
        const options = ParamCreater().showPrivateModuleVersionContent(showPrivateModuleVersionContentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Location'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取私有模块版本元数据（ShowPrivateModuleVersionMetadata）
     * 
     * 获取当前私有模块对应的版本的元数据信息
     * 
     *   * 具体返回的信息见ShowPrivateModuleVersionMetadataResponseBody。
     *   * 如果module_name和module_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取私有模块版本元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} moduleName 私有模块（private-module）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} moduleVersion 模块的版本号。版本号遵循语义化版本号（Semantic Version），为用户自定义
     * @param {string} [moduleId] 私有模块（private-module）的唯一Id。  此Id由资源编排服务在生成模块的时候生成，为UUID。  由于私有模块名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的私有模块，删除，再重新创建一个同名私有模块。  对于团队并行开发，用户可能希望确保，当前我操作的私有模块就是我认为的那个，而不是其他队友删除后创建的同名私有模块。因此，使用Id就可以做到强匹配。  资源编排服务保证每次创建的私有模块所对应的Id都不相同，更新不会影响Id。如果给予的module_id和当前模块的Id不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateModuleVersionMetadata(showPrivateModuleVersionMetadataRequest?: ShowPrivateModuleVersionMetadataRequest): Promise<ShowPrivateModuleVersionMetadataResponse> {
        const options = ParamCreater().showPrivateModuleVersionMetadata(showPrivateModuleVersionMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新私有模块元数据（UpdatePrivateModuleMetadata）
     * 
     * 更新当前私有模块的元数据信息
     * 
     *   * 目前只支持更新私有模块的描述
     *   * 如果需要创建新的版本，请调用CreatePrivateModuleVersion
     *   * 更新为增量更新，即如果某个参数不提供，则保持原始值
     *   * 如果请求中没有需要被更新的参数，则返回400。注意：即使更新原始值和目标值一致也被认为是有效更新
     *   * 更新后私有模块的更新时间（update_time）也会被更新
     *   * 如果module_name和module_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新私有模块元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一Id，用于定位某个请求，推荐使用UUID
     * @param {string} moduleName 私有模块（private-module）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {UpdatePrivateModuleMetadataRequestBody} updatePrivateModuleMetadataRequestBody UpdatePrivateModuleMetadata API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePrivateModuleMetadata(updatePrivateModuleMetadataRequest?: UpdatePrivateModuleMetadataRequest): Promise<UpdatePrivateModuleMetadataResponse> {
        const options = ParamCreater().updatePrivateModuleMetadata(updatePrivateModuleMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 继续部署资源栈（ContinueDeployStack）
     * 
     * 此API用于继续部署一个已有的资源栈
     * 
     * * 如果资源栈当前可以继续部署，即处于&#x60;DEPLOYMENT_FAILED&#x60;，则返回202与对应生成的deploymentId，否则将不允许继续部署并返回相应的错误码
     * 
     * * 继续部署操作依然有可能部署失败，用户可以从ListStackEvents获取对应的log，解决后可再次调用此API触发继续部署
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 继续部署资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {ContinueDeployStackRequestBody} [continueDeployStackRequestBody] ContinueDeployStack API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public continueDeployStack(continueDeployStackRequest?: ContinueDeployStackRequest): Promise<ContinueDeployStackResponse> {
        const options = ParamCreater().continueDeployStack(continueDeployStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 继续回滚资源栈（ContinueRollbackStack）
     * 
     * 此API用于继续回滚一个已有的资源栈
     * 
     * 如果资源栈开启了自动回滚，在部署失败的时候则会自动回滚。但是自动回滚依然有可能失败，用户可以根据错误信息修复后，调用ContinueRollbackStack触发继续回滚，即重试回滚
     * 
     * * 如果资源栈当前可以回滚，即处于&#x60;ROLLBACK_FAILED&#x60;，则返回202与对应生成的deploymentId，否则将不允许回滚并返回响应的错误码
     * * 继续回滚也有可能会回滚失败。如果失败，用户可以从ListStackEvents获取对应的log，解决后可再次调用ContinueRollbackStack去继续触发回滚
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 继续回滚资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {ContinueRollbackStackRequestBody} [continueRollbackStackRequestBody] ContinueRollbackStack API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public continueRollbackStack(continueRollbackStackRequest?: ContinueRollbackStackRequest): Promise<ContinueRollbackStackResponse> {
        const options = ParamCreater().continueRollbackStack(continueRollbackStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * CreateStack用于生成一个资源栈
     * 
     * * 当请求中不含有模板（template）、参数（vars）等信息，将生成一个无任何资源的空资源栈，返回资源栈ID（stack_id）
     * * 当请求中携带了模板（template）、参数（vars）等信息，则会同时创建并部署资源栈，返回资源栈ID（stack_id）和部署ID（deployment_id）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {CreateStackRequestBody} createStackRequestBody CreateStack API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStack(createStackRequest?: CreateStackRequest): Promise<CreateStackResponse> {
        const options = ParamCreater().createStack(createStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源栈（DeleteStack）
     * 
     * 此API用于删除某个资源栈
     * **请谨慎操作，删除资源栈将会删除与该资源栈相关的所有数据和资源，如：执行计划、资源栈事件、资源栈输出、资源等。**
     * 
     * * 此API会触发删除资源栈，并以最终一致性删除所有数据（包括通过资源栈模板创建以及通过Import模块导入的已有资源），用户可以调用GetStackMetadata或ListStacks跟踪资源栈删除情况
     * * 如果资源栈状态处于非终态（状态以&#x60;IN_PROGRESS&#x60;结尾）状态时，则不允许删除。包括但不限于以下状态：
     *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
     *   * 正在删除（DELETION_IN_PROGRESS）
     *   * 正在回滚（ROLLBACK_IN_PROGRESS）
     * * 如果资源栈开启了删除保护，则不允许删除。用户可调用GetStackMetadata，查看返回中的&#x60;enable_deletion_protection&#x60;字段判断删除保护是否开启。用户可通过调用UpdateStack关闭删除保护。
     * * 如果资源栈删除失败，可以根据StackEvents提示信息修复当前模板中的错误后，部署成功后再次删除资源栈。有以下两种方式触发部署：
     *   * 调用CreateExecutionPlan创建执行计划，执行计划创建成功后调用ApplyExecutionPlan部署资源栈。
     *   * 调用DeployStack部署资源栈
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一ID。  此ID由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给予的stack_id和当前资源栈的ID不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStack(deleteStackRequest?: DeleteStackRequest): Promise<DeleteStackResponse> {
        const options = ParamCreater().deleteStack(deleteStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 条件删除资源栈（DeleteStackEnhanced）
     * 
     * 此API用于删除某个资源栈，可以选择是否保留资源。
     * **请谨慎操作，删除资源栈将默认删除与该资源栈相关的所有数据，如：执行计划、资源栈事件、资源栈输出、资源等。**
     * **如果希望删除资源栈保留资源，可以在请求中设置&#x60;retain_all_resources&#x60;对资源进行保留。**
     * 
     * * 此API会触发删除资源栈，并以最终一致性删除数据，用户可以调用GetStackMetadata或ListStacks跟踪资源栈删除情况。当删除完成后，被删除资源栈将不会在上述API中返回。
     * * 如果资源栈状态处于非终态（状态以&#x60;IN_PROGRESS&#x60;结尾）状态时，则不允许删除。包括但不限于以下状态：
     *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
     *   * 正在删除（DELETION_IN_PROGRESS）
     *   * 正在回滚（ROLLBACK_IN_PROGRESS）
     * 
     * * 如果资源栈开启了删除保护，则不允许删除。用户可调用GetStackMetadata，查看返回中的&#x60;enable_deletion_protection&#x60;字段判断删除保护是否开启。用户可通过调用UpdateStack关闭删除保护。
     * * 如果资源栈删除失败，可以根据StackEvents提示信息修复当前模板中的错误后，部署成功后再次删除资源栈。有以下两种方式触发部署：
     *   * 调用CreateExecutionPlan创建执行计划，执行计划创建成功后调用ApplyExecutionPlan部署资源栈。
     *   * 调用DeployStack部署资源栈。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 条件删除资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {DeleteStackEnhancedRequestBody} [deleteStackEnhancedRequestBody] DeleteStackEnhanced API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStackEnhanced(deleteStackEnhancedRequest?: DeleteStackEnhancedRequest): Promise<DeleteStackEnhancedResponse> {
        const options = ParamCreater().deleteStackEnhanced(deleteStackEnhancedRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 部署资源栈（DeployStack）
     * 
     * 此API用于部署一个已有的资源栈
     * 
     * * 用户可以使用此API更新模板、参数等并触发一个新的部署
     * 
     * * 此API会直接触发部署，如果用户希望先确认部署会发生的时间，请使用执行计划，即使用CreateExecutionPlan以创建执行计划、使用GetExecutionPlan以获取执行计划
     * 
     * * 此API为全量API，即用户每次部署都需要给予所想要使用的template、vars的全量
     * 
     * * 部署资源栈时，用户将模板中定义的资源删除（包括Import定义的资源），会触发实际资源的删除。建议通过CreateExecutionPlan查看模板修改后资源栈的部署行为，以避免误操作非预期资源
     * 
     * * 当触发的部署失败时，如果资源栈开启了自动回滚，会触发自动回滚的流程，否则就会停留在部署失败时的状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 部署资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {DeployStackRequestBody} deployStackRequestBody DeployStack API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deployStack(deployStackRequest?: DeployStackRequest): Promise<DeployStackResponse> {
        const options = ParamCreater().deployStack(deployStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取资源栈元数据（GetStackMetadata）
     * 
     * 此API用于获取指定资源栈的元数据，包括资源栈ID、资源栈名称、资源栈描述、创建时间、更新时间、资源栈状态、委托授权等信息。
     * 
     * 具体信息见GetStackMetadataResponseBody。
     * 
     * 注：
     * 当资源栈状态处于非终态（即以&#x60;IN_PROGRESS&#x60;结尾，详细见下方）状态时，资源栈的元数据信息处于转变阶段，可能为部署前的状态，也可能为部署后的状态。
     * 只有当资源栈状态处于终态（即以&#x60;COMPLETE&#x60;或&#x60;FAILED&#x60;结尾，详细见下方）时，资源栈的元数据信息才是部署后的状态
     * 
     * 非终态状态包括但不限于以下状态：
     *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
     *   * 正在回滚（ROLLBACK_IN_PROGRESS）
     *   * 正在删除（DELETION_IN_PROGRESS）
     * 
     * 终态状态包括但不限于以下状态：
     *   * 生成空资源栈完成（CREATION_COMPLETE）
     *   * 部署失败（DEPLOYMENT_FAILED）
     *   * 部署完成（DEPLOYMENT_COMPLETE）
     *   * 回滚失败（ROLLBACK_FAILED）
     *   * 回滚完成（ROLLBACK_COMPLETE）
     *   * 删除失败（DELETION_FAILED）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取资源栈元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一ID。  此ID由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给予的stack_id和当前资源栈的ID不一致，则返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getStackMetadata(getStackMetadataRequest?: GetStackMetadataRequest): Promise<GetStackMetadataResponse> {
        const options = ParamCreater().getStackMetadata(getStackMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取资源栈模板（GetStackTemplate）
     * 
     * 此API用于获取资源栈最近一次部署终态使用的模板。
     * 
     * 注：
     * 当资源栈状态处于非终态（即以&#x60;IN_PROGRESS&#x60;结尾，详细见下方）状态时，资源栈处于转变阶段，此API获取资源栈上一次部署使用的模板。
     * 只有当资源栈状态处于终态（即以&#x60;COMPLETE&#x60;或&#x60;FAILED&#x60;结尾，详细见下方）时，此API获取当前最新一次部署使用的模板。CREATION_COMPLETE除外，此时资源栈没有模板，返回404，并提示模板不存在
     * 
     * 非终态状态包括但不限于以下状态：
     *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
     *   * 正在回滚（ROLLBACK_IN_PROGRESS）
     *   * 正在删除（DELETION_IN_PROGRESS）
     * 
     * 终态状态包括但不限于以下状态：
     *   * 生成空资源栈完成（CREATION_COMPLETE）
     *   * 部署失败（DEPLOYMENT_FAILED）
     *   * 部署完成（DEPLOYMENT_COMPLETE）
     *   * 回滚失败（ROLLBACK_FAILED）
     *   * 回滚完成（ROLLBACK_COMPLETE）
     *   * 删除失败（DELETION_FAILED）
     * 
     * 如果获取成功，则以临时重定向形式返回模板下载链接（OBS Pre Signed地址，有效期为5分钟），大多数的客户端会进行自动重定向并下载模板；
     * 如果未进行自动重定向，请参考HTTP的重定向规则获取模板下载链接，手动下载模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取资源栈模板
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一ID。  此ID由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给予的stack_id和当前资源栈的ID不一致，则返回400
     * @param {Array<string>} [accessControlSourceIps] 允许访问资源栈模板的source ip列表，source ip应是具有CIDR表示法且带有子网掩码的IPv4地址。
     * @param {Array<string>} [accessControlSourceVpcIds] 允许访问资源栈模板的source vpc id列表， source vpc id应仅包含小写字母、数字或中划线。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getStackTemplate(getStackTemplateRequest?: GetStackTemplateRequest): Promise<GetStackTemplateResponse> {
        const options = ParamCreater().getStackTemplate(getStackTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Location'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举资源栈事件（ListStackEvents）
     * 
     * 此API用于列举资源栈某一次或全部的部署事件
     * 
     * * 如果给予deployment_id，则会将deployment_id作为查询条件，返回对应某一次部署的资源栈事件；如果不给予deployment_id，则返回全量的资源栈事件
     * * 如果给定的deployment_id对应的部署不存在，则返回404
     * * 可以使用filter作为过滤器，过滤出指定事件类型（event_type）、资源类型（resource_type）、资源名称（resource_name）的资源栈事件
     * * 可以使用field选择数据应返回的属性，属性事件类型（event_type）不可配置，一定会返回，可选择的属性有逝去时间（elapsed_seconds）、事件消息（event_message）、 资源ID键（resource_id_key）、资源ID值（resource_id_value）、资源键（resource_key）、资源类型（resource_type）、资源名称（resource_name）和时间戳（timestamp）
     * * 事件返回将以时间降序排列
     * * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源栈事件
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一ID。  此ID由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给予的stack_id和当前资源栈的ID不一致，则返回400
     * @param {string} [deploymentId] 标识部署的唯一ID，此ID由资源编排服务在触发部署、回滚等操作时生成，为UUID。
     * @param {string} [filter] 过滤条件       * 与（AND）运算符使用逗号（，）定义 * 或（OR）运算符使用竖线（|）定义，OR运算符优先级高于AND运算符 * 不支持括号 * 过滤运算符仅支持等号（&#x3D;&#x3D;） * 过滤参数名及其值仅支持包含大小写英文、数字和下划线 * 过滤条件中禁止使用分号，如果有分号，则此条过滤会被忽略 * 一个过滤参数仅能与一个与条件相关，一个与条件中的多个或条件仅能与一个过滤参数相关
     * @param {string} [field] 选择的属性名称  * 属性名仅支持包含大小写英文、数字和下划线 * 多个属性名称之间以逗号（,）分隔
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStackEvents(listStackEventsRequest?: ListStackEventsRequest): Promise<ListStackEventsResponse> {
        const options = ParamCreater().listStackEvents(listStackEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举资源栈输出（ListStackOutputs）
     * 
     * 此API用于列举该资源栈的所有输出
     * 
     * 资源栈输出为用户在模板中定义的 output 语句块在部署结束后所产生的返回信息，用户可在部署结束后，调用此API获取其具体的输出信息
     * 
     * 当资源栈状态处于非终态（状态以&#x60;IN_PROGRESS&#x60;结尾）状态时，此API将返回空。非终态包括但不限于以下状态：
     *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
     *   * 正在删除（DELETION_IN_PROGRESS）
     *   * 正在回滚（ROLLBACK_IN_PROGRESS）
     * 
     * output为HCL官方定义的语法，其返回信息类似于常见编程语言中的返回值，详细定义请参考HCL官方的说明
     * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源栈输出
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一ID。  此ID由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给予的stack_id和当前资源栈的ID不一致，则返回400
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStackOutputs(listStackOutputsRequest?: ListStackOutputsRequest): Promise<ListStackOutputsResponse> {
        const options = ParamCreater().listStackOutputs(listStackOutputsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举资源栈资源（ListStackResources）
     * 
     * 此API用于列举资源栈中当前管理的所有资源的信息
     * 
     * 当资源栈处于非终态时，仅输出资源栈下资源的简要信息，包含逻辑资源名称（logical_resource_name），逻辑资源类型（logical_resource_type），物理资源id（physical_resource_id），物理资源名称（physical_resource_name），资源状态（status）等信息；当资源栈处于终态时，将额外输出具体信息，如资源属性（resource_attributes）
     * 
     * 非终态包括但不限于以下状态：
     *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
     *   * 正在删除（DELETION_IN_PROGRESS）
     *   * 正在回滚（ROLLBACK_IN_PROGRESS）
     * 
     * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源栈资源
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackId] 资源栈（stack）的唯一ID。  此ID由资源编排服务在生成资源栈的时候生成，为UUID。  由于资源栈名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈，删除，再重新创建一个同名资源栈。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈就是我认为的那个，而不是其他队友删除后创建的同名资源栈。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈所对应的ID都不相同，更新不会影响ID。如果给予的stack_id和当前资源栈的ID不一致，则返回400
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStackResources(listStackResourcesRequest?: ListStackResourcesRequest): Promise<ListStackResourcesResponse> {
        const options = ParamCreater().listStackResources(listStackResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举资源栈（ListStacks）
     * 
     * 此API用于列举当前局点下用户所有的资源栈
     * 
     *   * 默认按照生成时间降序排序，最新生成的在最前
     *   * 如果没有任何资源栈，则返回空list
     *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * ListStacks返回的只有摘要信息（具体摘要信息见ListStacksResponseBody），如果用户需要详细的资源栈元数据请调用GetStackMetadata
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStacks(listStacksRequest?: ListStacksRequest): Promise<ListStacksResponse> {
        const options = ParamCreater().listStacks(listStacksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新资源栈（UpdateStack）
     * 
     * 更新资源栈的属性，该API可以根据用户给予的信息对资源栈的属性进行更新，可以更新资源栈的“description”、“enable_deletion_protection”、\&quot;enable_auto_rollback\&quot;、\&quot;agencies\&quot;四个属性中的一个或多个
     * 
     * 该API只会更新用户给予的信息中所涉及的字段；如果某字段未给予，则不会对该资源栈属性进行更新
     * 
     * 注：所有属性的更新都是覆盖式更新。即，所给予的参数将被完全覆盖至资源栈已有的属性上
     * 
     * 例如，如果要新增agencies，请通过GetStackMetadata获取该资源栈原有的agencies信息，将新旧agencies信息进行整合后再调用UpdateStack
     * 
     * * 如果资源栈状态处于非终态（状态以&#x60;IN_PROGRESS&#x60;结尾）状态时，则不允许更新。包括但不限于以下状态：
     *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
     *   * 正在删除（DELETION_IN_PROGRESS）
     *   * 正在回滚（ROLLBACK_IN_PROGRESS）
     * 
     * * 对于“enable_auto_rollback”属性从false到true的更新操作，资源栈状态判定将更加严格，在失败（状态以&#x60;_FAILED&#x60;结尾）状态时也不允许更新，包括但不限于以下状态：
     *   * 部署失败（DEPLOYMENT_FAILED）
     *   * 回滚失败（ROLLBACK_FAILED）
     *   * 删除失败（DELETION_FAILED）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新资源栈
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} stackName 资源栈的名称。此名字在domain_id+区域+project_id下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {UpdateStackRequestBody} updateStackRequestBody UpdateStack API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStack(updateStackRequest?: UpdateStackRequest): Promise<UpdateStackResponse> {
        const options = ParamCreater().updateStack(updateStackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建资源栈实例（CreateStackInstance）
     * 
     * 此API用于在指定资源栈集下生成多个资源栈实例，并返回资源栈集操作ID（stack_set_operation_id）
     * 
     * 此API可以通过var_overrides参数，指定创建资源栈实例的参数值，进行参数覆盖。如果var_overrides参数未给予，则默认使用当前资源栈集中记录的参数进行部署，详见：var_overrides参数描述。
     * 
     * 通过DeployStackSet API更新资源栈集参数后，资源栈实例中已经被覆盖的参数不会被更新，仍然保留覆盖值。
     * 
     * 用户只能覆盖已经在资源栈集中记录的参数，如果用户想要增加可以覆盖的参数，需要先通过DeployStackSet API更新资源栈集记录的参数集合。
     * 
     * * 用户可以根据资源栈集操作ID（stack_set_operation_id），通过ShowStackSetOperationMetadata API获取资源栈集操作状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源栈实例
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} stackSetName 资源栈集的名称。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {CreateStackInstanceRequestBody} createStackInstanceRequestBody CreateStackInstance API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStackInstance(createStackInstanceRequest?: CreateStackInstanceRequest): Promise<CreateStackInstanceResponse> {
        const options = ParamCreater().createStackInstance(createStackInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建资源栈集（CreateStackSet）
     * 
     * 此API为同步API，用于生成一个空资源栈集，即不包含任何一个资源栈实例，并返回资源栈集ID（stack_set_id）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源栈集
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {CreateStackSetRequestBody} createStackSetRequestBody CreateStackSet API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStackSet(createStackSetRequest?: CreateStackSetRequest): Promise<CreateStackSetResponse> {
        const options = ParamCreater().createStackSet(createStackSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源栈实例（DeleteStackInstance）
     * 
     * 此API用于删除指定资源栈集下指定局点（region）或指定成员账号（domain_id）的资源栈实例，并返回资源栈集操作ID（stack_set_operation_id）
     * 
     * **请谨慎操作，删除资源栈实例将会删除与该资源栈实例相关的资源栈以及资源栈所管理的一切资源。**
     * 
     * * 用户可以根据资源栈集操作ID（stack_set_operation_id），通过ShowStackSetOperationMetadata API获取资源栈集操作状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源栈实例
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} stackSetName 资源栈集的名称。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {DeleteStackInstanceRequestBody} deleteStackInstanceRequestBody DeleteStackInstances API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStackInstance(deleteStackInstanceRequest?: DeleteStackInstanceRequest): Promise<DeleteStackInstanceResponse> {
        const options = ParamCreater().deleteStackInstance(deleteStackInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源栈实例-被废弃（DeleteStackInstanceDeprecated）
     * 
     * 此API用于删除指定资源栈集下指定局点（region）或指定成员账号（domain_id）的资源栈实例，并返回资源栈集操作ID（stack_set_operation_id）
     * 
     * **请谨慎操作，删除资源栈实例将会删除与该资源栈实例相关的资源栈以及资源栈所管理的一切资源。**
     * 
     * * 用户可以根据资源栈集操作ID（stack_set_operation_id），通过ShowStackSetOperationMetadata API获取资源栈集操作状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源栈实例-已废弃
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} stackSetName 资源栈集的名称。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {DeleteStackInstanceRequestBody} deleteStackInstanceDeprecatedRequestBody DeleteStackInstanceDeprecated API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStackInstanceDeprecated(deleteStackInstanceDeprecatedRequest?: DeleteStackInstanceDeprecatedRequest): Promise<DeleteStackInstanceDeprecatedResponse> {
        const options = ParamCreater().deleteStackInstanceDeprecated(deleteStackInstanceDeprecatedRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源栈集（DeleteStackSet）
     * 
     * **请谨慎操作，删除资源栈集将会删除与该资源栈集相关的所有数据，如：资源栈集操作、资源栈集操作事件等。**
     * 
     * 当且仅当指定的资源栈集满足以下所有条件时，资源栈集才能被成功删除，否则会报错：
     *   * 资源栈集下没有资源栈实例
     *   * 资源栈集状态处于空闲（&#x60;IDLE&#x60;）状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源栈集
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} stackSetName 资源栈集的名称。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackSetId] 资源栈集（stack_set）的唯一ID。  此ID由资源编排服务在生成资源栈集的时候生成，为UUID。  由于资源栈集名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈集，删除，再重新创建一个同名资源栈集。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈集就是我认为的那个，而不是其他队友删除后创建的同名资源栈集。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈集所对应的ID都不相同，更新不会影响ID。如果给予的stack_set_id和当前资源栈集的ID不一致，则返回400
     * @param {'SELF' | 'DELEGATED_ADMIN'} [callIdentity] 仅支持资源栈集权限模式为SERVICE_MANAGED时指定该参数。用于指定用户是以组织管理账号还是成员账号中的服务委托管理员身份调用资源栈集。默认为SELF。  无论指定何种用户身份，创建或部署的资源栈集始终在组织管理账号名下。   * &#x60;SELF&#x60; - 以组织管理账号身份调用。   * &#x60;DELEGATED_ADMIN&#x60; - 以服务委托管理员身份调用。用户的华为云账号必须在组织中已经被注册为”资源编排资源栈集服务“的委托管理员。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStackSet(deleteStackSetRequest?: DeleteStackSetRequest): Promise<DeleteStackSetResponse> {
        const options = ParamCreater().deleteStackSet(deleteStackSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 部署资源栈集（DeployStackSet）
     * 
     * 此API用于部署一个已有的资源栈集，并返回资源栈集操作ID（stack_set_operation_id）
     * 
     * * 用户可以使用此API更新资源栈集的模板、参数并进行部署。
     * 
     * * 此API会直接触发资源栈实例部署。用户既可以部署资源栈集下所有的资源栈实例，也可以部署指定资源栈实例。
     * 
     * * 此API为全量API，即用户每次部署都需要给予所想要使用的template、vars的全量
     * 
     * * 当触发的部署失败时，资源栈集不会自动回滚模板和参数，但部署失败的资源栈会根据资源栈的回滚配置决定是否进行回滚，已经部署成功的资源栈不会触发回滚。
     * 
     * * 用户可以根据资源栈集操作ID（stack_set_operation_id），通过ShowStackSetOperationMetadata API获取资源栈集操作状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 部署资源栈集
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} stackSetName 资源栈集的名称。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {DeployStackSetRequestBody} deployStackSetRequestBody DeployStackSet API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deployStackSet(deployStackSetRequest?: DeployStackSetRequest): Promise<DeployStackSetResponse> {
        const options = ParamCreater().deployStackSet(deployStackSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举资源栈实例（ListStackInstances）
     * 
     * 此API用于列举指定资源栈集下指定局点（region）或指定成员账号（stack_domain_id）或全部资源栈实例
     * 
     * * 可以使用filter作为过滤器，过滤出指定局点（region）或指定成员账号（stack_domain_id）下的资源栈实例
     * * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
     * * 如果指定资源栈集下没有任何资源栈实例，则返回空list
     * * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源栈实例
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} stackSetName 资源栈集的名称。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackSetId] 资源栈集（stack_set）的唯一ID。  此ID由资源编排服务在生成资源栈集的时候生成，为UUID。  由于资源栈集名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈集，删除，再重新创建一个同名资源栈集。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈集就是我认为的那个，而不是其他队友删除后创建的同名资源栈集。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈集所对应的ID都不相同，更新不会影响ID。如果给予的stack_set_id和当前资源栈集的ID不一致，则返回400
     * @param {string} [filter] 过滤条件  * 与（AND）运算符使用逗号（，）定义 * 或（OR）运算符使用竖线（|）定义，OR运算符优先级高于AND运算符 * 不支持括号 * 过滤运算符仅支持双等号（&#x3D;&#x3D;） * 过滤参数名及其值仅支持包含大小写英文、数字和下划线 * 过滤条件中禁止使用分号，如果有分号，则此条过滤会被忽略 * 一个过滤参数仅能与一个与条件相关，一个与条件中的多个或条件仅能与一个过滤参数相关
     * @param {Array<'create_time'>} [sortKey] 排序字段，仅支持给予create_time
     * @param {Array<'asc' | 'desc'>} [sortDir] 指定升序还是降序   * &#x60;asc&#x60; - 升序   * &#x60;desc&#x60; - 降序
     * @param {'SELF' | 'DELEGATED_ADMIN'} [callIdentity] 仅支持资源栈集权限模式为SERVICE_MANAGED时指定该参数。用于指定用户是以组织管理账号还是成员账号中的服务委托管理员身份调用资源栈集。默认为SELF。  无论指定何种用户身份，创建或部署的资源栈集始终在组织管理账号名下。   * &#x60;SELF&#x60; - 以组织管理账号身份调用。   * &#x60;DELEGATED_ADMIN&#x60; - 以服务委托管理员身份调用。用户的华为云账号必须在组织中已经被注册为”资源编排资源栈集服务“的委托管理员。
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStackInstances(listStackInstancesRequest?: ListStackInstancesRequest): Promise<ListStackInstancesResponse> {
        const options = ParamCreater().listStackInstances(listStackInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举资源栈集操作（ListStackSetOperations）
     * 
     * 列举指定资源栈集下所有的资源栈集的操作。
     * 
     * 可以使用filter作为过滤器，过滤出指定操作状态（status）或操作类型（action）下的资源栈集操作。
     * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
     * 如果指定资源栈集下没有任何资源栈集操作，则返回空list。
     * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源栈集操作
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} stackSetName 资源栈集的名称。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackSetId] 资源栈集（stack_set）的唯一ID。  此ID由资源编排服务在生成资源栈集的时候生成，为UUID。  由于资源栈集名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈集，删除，再重新创建一个同名资源栈集。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈集就是我认为的那个，而不是其他队友删除后创建的同名资源栈集。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈集所对应的ID都不相同，更新不会影响ID。如果给予的stack_set_id和当前资源栈集的ID不一致，则返回400
     * @param {string} [filter] 过滤条件  * 与（AND）运算符使用逗号（，）定义 * 或（OR）运算符使用竖线（|）定义，OR运算符优先级高于AND运算符 * 不支持括号 * 过滤运算符仅支持双等号（&#x3D;&#x3D;） * 过滤参数名及其值仅支持包含大小写英文、数字和下划线 * 过滤条件中禁止使用分号，如果有分号，则此条过滤会被忽略 * 一个过滤参数仅能与一个与条件相关，一个与条件中的多个或条件仅能与一个过滤参数相关
     * @param {Array<'create_time'>} [sortKey] 排序字段，仅支持给予create_time
     * @param {Array<'asc' | 'desc'>} [sortDir] 指定升序还是降序   * &#x60;asc&#x60; - 升序   * &#x60;desc&#x60; - 降序
     * @param {'SELF' | 'DELEGATED_ADMIN'} [callIdentity] 仅支持资源栈集权限模式为SERVICE_MANAGED时指定该参数。用于指定用户是以组织管理账号还是成员账号中的服务委托管理员身份调用资源栈集。默认为SELF。  无论指定何种用户身份，创建或部署的资源栈集始终在组织管理账号名下。   * &#x60;SELF&#x60; - 以组织管理账号身份调用。   * &#x60;DELEGATED_ADMIN&#x60; - 以服务委托管理员身份调用。用户的华为云账号必须在组织中已经被注册为”资源编排资源栈集服务“的委托管理员。
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStackSetOperations(listStackSetOperationsRequest?: ListStackSetOperationsRequest): Promise<ListStackSetOperationsResponse> {
        const options = ParamCreater().listStackSetOperations(listStackSetOperationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举资源栈集（ListStackSets）
     * 
     * 此API用于列举当前用户（domain）当前局点（region）下全部资源栈集。
     * 
     * * 可以使用filter作为过滤器，过滤出指定权限模型（permission_model）下的资源栈集。
     * * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
     * * 注意：目前暂时返回全量资源栈集信息，即不支持分页
     * * 如果没有任何资源栈集，则返回空list
     * * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源栈集
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} [filter] 过滤条件  * 与（AND）运算符使用逗号（，）定义 * 或（OR）运算符使用竖线（|）定义，OR运算符优先级高于AND运算符 * 不支持括号 * 过滤运算符仅支持双等号（&#x3D;&#x3D;） * 过滤参数名及其值仅支持包含大小写英文、数字和下划线 * 过滤条件中禁止使用分号，如果有分号，则此条过滤会被忽略 * 一个过滤参数仅能与一个与条件相关，一个与条件中的多个或条件仅能与一个过滤参数相关
     * @param {Array<'create_time'>} [sortKey] 排序字段，仅支持给予create_time
     * @param {Array<'asc' | 'desc'>} [sortDir] 指定升序还是降序   * &#x60;asc&#x60; - 升序   * &#x60;desc&#x60; - 降序
     * @param {'SELF' | 'DELEGATED_ADMIN'} [callIdentity] 仅支持资源栈集权限模式为SERVICE_MANAGED时指定该参数。用于指定用户是以组织管理账号还是成员账号中的服务委托管理员身份调用资源栈集。默认为SELF。  无论指定何种用户身份，创建或部署的资源栈集始终在组织管理账号名下。   * &#x60;SELF&#x60; - 以组织管理账号身份调用。   * &#x60;DELEGATED_ADMIN&#x60; - 以服务委托管理员身份调用。用户的华为云账号必须在组织中已经被注册为”资源编排资源栈集服务“的委托管理员。
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStackSets(listStackSetsRequest?: ListStackSetsRequest): Promise<ListStackSetsResponse> {
        const options = ParamCreater().listStackSets(listStackSetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取资源栈实例（ShowStackInstance）
     * 
     * 用户可以使用此API获取资源栈实例的详细信息，包括关联资源栈名称与id，创建时间，参数覆盖等
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取资源栈实例
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} stackSetName 资源栈集的名称。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} stackInstanceAddr 资源栈实例的唯一地址。该地址由region和stack_domain_id通过\&quot;/\&quot;（转义后为%2f或%2F）拼接而成。该地址在domain_id+region+stack_set_name下唯一。
     * @param {string} [stackSetId] 资源栈集（stack_set）的唯一ID。  此ID由资源编排服务在生成资源栈集的时候生成，为UUID。  由于资源栈集名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈集，删除，再重新创建一个同名资源栈集。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈集就是我认为的那个，而不是其他队友删除后创建的同名资源栈集。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈集所对应的ID都不相同，更新不会影响ID。如果给予的stack_set_id和当前资源栈集的ID不一致，则返回400
     * @param {'SELF' | 'DELEGATED_ADMIN'} [callIdentity] 仅支持资源栈集权限模式为SERVICE_MANAGED时指定该参数。用于指定用户是以组织管理账号还是成员账号中的服务委托管理员身份调用资源栈集。默认为SELF。  无论指定何种用户身份，创建或部署的资源栈集始终在组织管理账号名下。   * &#x60;SELF&#x60; - 以组织管理账号身份调用。   * &#x60;DELEGATED_ADMIN&#x60; - 以服务委托管理员身份调用。用户的华为云账号必须在组织中已经被注册为”资源编排资源栈集服务“的委托管理员。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStackInstance(showStackInstanceRequest?: ShowStackInstanceRequest): Promise<ShowStackInstanceResponse> {
        const options = ParamCreater().showStackInstance(showStackInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取资源栈集元数据（ShowStackSetMetadata）
     * 
     * * 用户可以使用此API获取资源栈集的元数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取资源栈集元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} stackSetName 资源栈集的名称。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackSetId] 资源栈集（stack_set）的唯一ID。  此ID由资源编排服务在生成资源栈集的时候生成，为UUID。  由于资源栈集名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈集，删除，再重新创建一个同名资源栈集。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈集就是我认为的那个，而不是其他队友删除后创建的同名资源栈集。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈集所对应的ID都不相同，更新不会影响ID。如果给予的stack_set_id和当前资源栈集的ID不一致，则返回400
     * @param {'SELF' | 'DELEGATED_ADMIN'} [callIdentity] 仅支持资源栈集权限模式为SERVICE_MANAGED时指定该参数。用于指定用户是以组织管理账号还是成员账号中的服务委托管理员身份调用资源栈集。默认为SELF。  无论指定何种用户身份，创建或部署的资源栈集始终在组织管理账号名下。   * &#x60;SELF&#x60; - 以组织管理账号身份调用。   * &#x60;DELEGATED_ADMIN&#x60; - 以服务委托管理员身份调用。用户的华为云账号必须在组织中已经被注册为”资源编排资源栈集服务“的委托管理员。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStackSetMetadata(showStackSetMetadataRequest?: ShowStackSetMetadataRequest): Promise<ShowStackSetMetadataResponse> {
        const options = ParamCreater().showStackSetMetadata(showStackSetMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取资源栈集操作元数据（ShowStackSetOperationMetadata）
     * 
     * 此API用于获取指定资源栈集操作的元数据，包括资源栈集操作ID、资源栈集ID、资源栈集名称、资源栈集操作状态、创建时间、更新时间、部署目标等信息。
     * 
     * 具体信息见ShowStackSetOperationMetadataResponseBody。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取资源栈集操作的元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} stackSetName 资源栈集的名称。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} stackSetOperationId 资源栈集操作（stack_set_operation）的唯一Id。  此ID由资源编排服务在生成资源栈集操作的时候生成，为UUID。
     * @param {string} [stackSetId] 资源栈集（stack_set）的唯一ID。  此ID由资源编排服务在生成资源栈集的时候生成，为UUID。  由于资源栈集名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈集，删除，再重新创建一个同名资源栈集。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈集就是我认为的那个，而不是其他队友删除后创建的同名资源栈集。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈集所对应的ID都不相同，更新不会影响ID。如果给予的stack_set_id和当前资源栈集的ID不一致，则返回400
     * @param {'SELF' | 'DELEGATED_ADMIN'} [callIdentity] 仅支持资源栈集权限模式为SERVICE_MANAGED时指定该参数。用于指定用户是以组织管理账号还是成员账号中的服务委托管理员身份调用资源栈集。默认为SELF。  无论指定何种用户身份，创建或部署的资源栈集始终在组织管理账号名下。   * &#x60;SELF&#x60; - 以组织管理账号身份调用。   * &#x60;DELEGATED_ADMIN&#x60; - 以服务委托管理员身份调用。用户的华为云账号必须在组织中已经被注册为”资源编排资源栈集服务“的委托管理员。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStackSetOperationMetadata(showStackSetOperationMetadataRequest?: ShowStackSetOperationMetadataRequest): Promise<ShowStackSetOperationMetadataResponse> {
        const options = ParamCreater().showStackSetOperationMetadata(showStackSetOperationMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取资源栈集模板（ShowStackSetTemplate）
     * 
     * 此API用于获取指定资源栈集的模板。
     * 
     * 如果获取成功，则以临时重定向形式返回模板下载链接（OBS Pre Signed地址，有效期为5分钟），大多数的客户端会进行自动重定向并下载模板；
     * 如果未进行自动重定向，请参考HTTP的重定向规则获取模板下载链接，手动下载模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取资源栈集模板
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} stackSetName 资源栈集的名称。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [stackSetId] 资源栈集（stack_set）的唯一ID。  此ID由资源编排服务在生成资源栈集的时候生成，为UUID。  由于资源栈集名称仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的资源栈集，删除，再重新创建一个同名资源栈集。  对于团队并行开发，用户可能希望确保，当前我操作的资源栈集就是我认为的那个，而不是其他队友删除后创建的同名资源栈集。因此，使用ID就可以做到强匹配。  资源编排服务保证每次创建的资源栈集所对应的ID都不相同，更新不会影响ID。如果给予的stack_set_id和当前资源栈集的ID不一致，则返回400
     * @param {Array<string>} [accessControlSourceIps] 允许访问资源栈集模板的source ip列表，source ip应是具有CIDR表示法且带有子网掩码的IPv4地址。
     * @param {Array<string>} [accessControlSourceVpcIds] 允许访问资源栈集模板的source vpc id列表， source vpc id应仅包含小写字母、数字或中划线。
     * @param {'SELF' | 'DELEGATED_ADMIN'} [callIdentity] 仅支持资源栈集权限模式为SERVICE_MANAGED时指定该参数。用于指定用户是以组织管理账号还是成员账号中的服务委托管理员身份调用资源栈集。默认为SELF。  无论指定何种用户身份，创建或部署的资源栈集始终在组织管理账号名下。   * &#x60;SELF&#x60; - 以组织管理账号身份调用。   * &#x60;DELEGATED_ADMIN&#x60; - 以服务委托管理员身份调用。用户的华为云账号必须在组织中已经被注册为”资源编排资源栈集服务“的委托管理员。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStackSetTemplate(showStackSetTemplateRequest?: ShowStackSetTemplateRequest): Promise<ShowStackSetTemplateResponse> {
        const options = ParamCreater().showStackSetTemplate(showStackSetTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Location'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新资源栈实例（UpdateStackInstances）
     * 
     * 此API用于更新并部署指定资源栈实例集合，并返回资源栈集操作ID（stack_set_operation_id）
     * 
     * 此API可以通过var_overrides参数，更新指定资源栈实例的参数值，进行参数覆盖。如果var_overrides参数未给予，则默认使用当前资源栈集中记录的参数进行部署，详见：var_overrides参数描述。用户只可以更新已经存在的资源栈实例，如果用户想要增加额外的资源栈实例，请使用CreateStackInstances API。
     * 
     * 通过DeployStackSet API更新资源栈集参数后，资源栈实例中已经被覆盖的参数不会被更新，仍然保留覆盖值。
     * 
     * 用户只能覆盖已经在资源栈集中记录的参数，如果用户想要增加可以覆盖的参数，需要先通过DeployStackSet API更新资源栈集记录的参数集合。
     * 
     * * 当触发的部署失败时，资源栈实例不会自动回滚参数覆盖，但部署失败的资源栈会默认自动回滚，已经部署成功的资源栈不会触发回滚。
     * 
     * * 用户可以根据资源栈集操作ID（stack_set_operation_id），通过ShowStackSetOperationMetadata API获取资源栈集操作状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新资源栈实例
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} stackSetName 资源栈集的名称。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {UpdateStackInstancesRequestBody} updateStackInstancesRequestBody UpdateStackInstances API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStackInstances(updateStackInstancesRequest?: UpdateStackInstancesRequest): Promise<UpdateStackInstancesResponse> {
        const options = ParamCreater().updateStackInstances(updateStackInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新资源栈集（UpdateStackSet）
     * 
     * 该API可以根据用户给予的信息对资源栈集的属性进行更新，可以更新资源栈集如下属性“stack_set_description”、\&quot;initial_stack_description\&quot;、“administration_agency_name”、\&quot;managed_agency_name\&quot;、“administration_agency_urn”中的一个或多个。
     * 
     * 该API只会更新用户给予的信息中所涉及的字段；如果某字段未给予，则不会对该资源栈集属性进行更新。
     * 
     * 注：
     *   * 所有属性的更新都是覆盖式更新。即，所给予的参数将被完全覆盖至资源栈已有的属性上。
     *   * 只有在permission_model&#x3D;SELF_MANAGED时，才可更新administration_agency_name、managed_agency_name和administration_agency_urn。
     *   * 如果资源栈集的状态是OPERATION_IN_PROGRESS，不允许更新资源栈集。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新资源栈集
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} stackSetName 资源栈集的名称。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {UpdateStackSetRequestBody} updateStackSetRequestBody UpdateStackSet API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStackSet(updateStackSetRequest?: UpdateStackSetRequest): Promise<UpdateStackSetResponse> {
        const options = ParamCreater().updateStackSet(updateStackSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解析模板参数（ParseTemplateVariables）
     * 
     * 此API用于解析用户输入的模板中的参数（variable），将解析模板中的所有variable块并返回
     * 
     * * 如果用户传入的模板中定义了variable参数，则返回200和所有variable
     * * 如果用户传入的模板中没有定义variable参数，则返回200和空对象
     * * 如果用户请求非法或传入的模板非法，则返回400
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解析模板参数
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {ParseTemplateVariablesRequestBody} parseTemplateVariablesRequestBody ParseTemplateVariables API的请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public parseTemplateVariables(parseTemplateVariablesRequest?: ParseTemplateVariablesRequest): Promise<ParseTemplateVariablesResponse> {
        const options = ParamCreater().parseTemplateVariables(parseTemplateVariablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建模板（CreateTemplate）
     * 
     * 此API用于创建一个带有版本的模板
     * 
     *   * 请求中必须包括template_uri或是template_body。前者为模板内容obs链接，后者为模板内容
     *   * 模板管理名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板
     *   * 模板创建时，会自动生成模板版本号为V1的模板版本
     *   * 模板必须存在一个或多个模板版本，即不存在没有模板版本的模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建模板
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {CreateTemplateRequestBody} createTemplateRequestBody create-template request parameters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTemplate(createTemplateRequest?: CreateTemplateRequest): Promise<CreateTemplateResponse> {
        const options = ParamCreater().createTemplate(createTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建模板版本（CreateTemplateVersion）
     * 
     * 此API用于创建新的模板版本
     * 
     *   * 请求中必须包括template_uri或template_body。前者为模板内容obs链接，后者为模板内容
     *   * 新创建的模板版本版本ID会自动在当前最大模板版本ID的基础上加1
     *   * 创建模板版本需要的具体信息详见：CreateTemplateVersionRequestBody
     *   * template_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给予的template_id和当前模板管理的ID不一致，则返回400
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建模板版本
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} templateName 模板（Template）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {CreateTemplateVersionRequestBody} createTemplateVersionRequestBody create-template-version request parameters
     * @param {string} [templateId] 模板的ID。当template_id存在时，模板服务会检查template_id是否和template_name匹配，不匹配会返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTemplateVersion(createTemplateVersionRequest?: CreateTemplateVersionRequest): Promise<CreateTemplateVersionResponse> {
        const options = ParamCreater().createTemplateVersion(createTemplateVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除模板（DeleteTemplate）
     * 
     * 此API用于删除某个模板以及模板下的全部模板版本
     * **请谨慎操作，删除模板将会删除模板下的所有模板版本。**
     * 
     *   * template_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给予的template_id和当前模板管理的ID不一致，则返回400
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除模板
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} templateName 模板（Template）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [templateId] 模板的ID。当template_id存在时，模板服务会检查template_id是否和template_name匹配，不匹配会返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
        const options = ParamCreater().deleteTemplate(deleteTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除模板版本（DeleteTemplateVersion）
     * 
     * 此API用于删除某个模板版本
     * 
     *   * template_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给予的template_id和当前模板管理的ID不一致，则返回400
     *   * 如果模板下只存在唯一模板版本，此模板版本将无法被删除，如果需要删除此模板版本，请调用DeleteTemplate。模板服务不允许存在没有模板版本的模板
     * 
     * **请谨慎操作**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除模板版本
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} templateName 模板（Template）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} versionId 模板版本ID，以大写V开头，每次创建模板版本，模板版本ID数字部分会自增加一
     * @param {string} [templateId] 模板的ID。当template_id存在时，模板服务会检查template_id是否和template_name匹配，不匹配会返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplateVersion(deleteTemplateVersionRequest?: DeleteTemplateVersionRequest): Promise<DeleteTemplateVersionResponse> {
        const options = ParamCreater().deleteTemplateVersion(deleteTemplateVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举模板版本信息（ListTemplateVersions）
     * 
     * 此API用于列举模板下所有的模板版本信息
     * 
     *   * 默认按照生成时间降序排序，最新生成的模板排列在最前面
     *   * 如果没有任何模板版本，则返回空list
     *   * template_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给予的template_id和当前模板管理的ID不一致，则返回400
     *   * 如果模板不存在则返回404
     *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * ListTemplateVersions返回的信息只包含模板版本摘要信息（具体摘要信息见ListTemplateVersionsResponseBody），如果用户需要了解模板版本内容，请调用ShowTemplateVersionContent
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举模板版本
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} templateName 模板（Template）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [templateId] 模板的ID。当template_id存在时，模板服务会检查template_id是否和template_name匹配，不匹配会返回400
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplateVersions(listTemplateVersionsRequest?: ListTemplateVersionsRequest): Promise<ListTemplateVersionsResponse> {
        const options = ParamCreater().listTemplateVersions(listTemplateVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列举模板（ListTemplates）
     * 
     * 此API用于列举当前局点下用户所有的模板
     * 
     *   * 默认按照生成时间降序排序，最新生成的模板排列在最前面
     *   * 如果没有任何模板，则返回空list
     *   * 如果用户需要详细的模板版本信息，请调用ListTemplateVersions
     *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
     * 
     * ListTemplates返回的信息只包含模板摘要信息（具体摘要信息见ListTemplatesResponseBody），如果用户需要详细的某个模板信息，请调用ShowTemplateMetadata
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举模板
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} [marker] 分页标记。当一页无法返回所有结果，上一次的请求将返回next_marker以指引还有更多页数，用户可以将next_marker中的值放到此处以查询下一页的信息。此marker只能用于与上一请求指定的相同参数的请求。不指定时默认从第一页开始查询。
     * @param {number} [limit] 每页返回的最多结果数量
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
     * 获取模板元数据（ShowTemplateMetadata）
     * 
     * 此API用于获取当前模板的元数据信息
     * 
     * 具体信息见ShowTemplateMetadataResponseBody，如果想查看模板下全部模板版本，请调用ListTemplateVersions。
     * 
     *   * template_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给予的template_id和当前模板管理的ID不一致，则返回400
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} templateName 模板（Template）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} [templateId] 模板的ID。当template_id存在时，模板服务会检查template_id是否和template_name匹配，不匹配会返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateMetadata(showTemplateMetadataRequest?: ShowTemplateMetadataRequest): Promise<ShowTemplateMetadataResponse> {
        const options = ParamCreater().showTemplateMetadata(showTemplateMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取模板版本内容（ShowTemplateVersionContent）
     * 
     * 此API用于获取用户的模板版本内容
     * 
     *   * template_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给予的template_id和当前模板管理的ID不一致，则返回400
     *   * 此api会以临时重定向形式返回模板内容的下载链接，用户通过下载获取模板版本内容（OBS Pre Signed地址，有效期为5分钟）
     *   * 如果手动访问重定向的obs下载链接，请求时不可以携带任何的Request-Header，否则会导致签名失败
     * 
     * ShowTemplateVersionContent返回的信息只包含模板版本内容，如果想知道模板版本的元数据，请调用ShowTemplateVersionMetadata
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板版本内容
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} templateName 模板（Template）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} versionId 模板版本ID，以大写V开头，每次创建模板版本，模板版本ID数字部分会自增加一
     * @param {string} [templateId] 模板的ID。当template_id存在时，模板服务会检查template_id是否和template_name匹配，不匹配会返回400
     * @param {Array<string>} [accessControlSourceVpcIds] 允许访问资源栈模板的source vpc id列表， source vpc id应仅包含小写字母、数字或中划线。
     * @param {Array<string>} [accessControlSourceIps] 允许访问资源栈模板的source ip列表，source ip应是具有CIDR表示法且带有子网掩码的IPv4地址。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateVersionContent(showTemplateVersionContentRequest?: ShowTemplateVersionContentRequest): Promise<ShowTemplateVersionContentResponse> {
        const options = ParamCreater().showTemplateVersionContent(showTemplateVersionContentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['Location'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取模板版本元数据（ShowTemplateVersionMetadata）
     * 
     * 此API用于展示某一版本模板的元数据
     * 
     *   * template_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给予的template_id和当前模板管理的ID不一致，则返回400
     * 
     * ShowTemplateVersionMetadata返回的信息只包含模板版本元数据信息（具体摘要信息见ShowTemplateVersionMetadataResponseBody），如果用户需要了解模板版本内容，请调用ShowTemplateVersionContent
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板版本元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} templateName 模板（Template）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {string} versionId 模板版本ID，以大写V开头，每次创建模板版本，模板版本ID数字部分会自增加一
     * @param {string} [templateId] 模板的ID。当template_id存在时，模板服务会检查template_id是否和template_name匹配，不匹配会返回400
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplateVersionMetadata(showTemplateVersionMetadataRequest?: ShowTemplateVersionMetadataRequest): Promise<ShowTemplateVersionMetadataResponse> {
        const options = ParamCreater().showTemplateVersionMetadata(showTemplateVersionMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新模板元数据（UpdateTemplateMetadata）
     * 
     * 此API用于更新模板元数据
     * 
     * * 此api只支持更新模板描述
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新模板元数据
     * @param {string} clientRequestId 用户指定的，对于此请求的唯一ID，用于定位某个请求，推荐使用UUID
     * @param {string} projectId 项目ID，可以从调用API处获取，也可以从控制台获取。  [[项目ID获取方式](https://support.huaweicloud.com/api-ticket/ticket_api_20002.html)](tag:hws) [[项目ID获取方式](https://support.huaweicloud.com/intl/zh-cn/api-ticket/ticket_api_20002.html)](tag:hws_hk) [[项目ID获取方式](https://support.huaweicloud.com/eu/api-ticket/ticket_api_20002.html)](tag:hws_eu)
     * @param {string} templateName 模板（Template）的名字。此名字在domain_id+region下应唯一，可以使用中文、大小写英文、数字、下划线、中划线。首字符需为中文或者英文，区分大小写。
     * @param {UpdateTemplateMetadataRequestBody} updateTemplateMetadataRequestBody 更新模板元数据API请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTemplateMetadata(updateTemplateMetadataRequest?: UpdateTemplateMetadataRequest): Promise<UpdateTemplateMetadataResponse> {
        const options = ParamCreater().updateTemplateMetadata(updateTemplateMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建私有provider（CreatePrivateProvider）
         * 
         * 创建一个私有的空provider。如果用户给予了provider_version和function_graph_urn，则在创建私有provider的同时，还会在私有provider下创建一个私有provider版本。
         *   * 私有provider允许用户将自定义的provider注册到RFS中，并仅提供给当前用户使用。
         *   * 如果同名私有provider在当前账户中已经存在，则会返回409。
         *   * 版本号遵循语义化版本号（Semantic Version），为用户自定义。
         *   * 在本API中，provider_version和function_graph_urn需要搭配使用，如果只指定其中一个参数，则会返回400。
         *   * 资源编排服务只会对function_graph_urn进行浅校验，如是否符合正则，是否仅指定为当前region等。并不会深度校验，即用户是否存在权限调用，是否真实存在等。
         *   * 该API会返回provider_source字段，该字段按照“huawei.com/private-provider/{provider_name}”的形式拼接。关于provider_name和provider_source字段在模板中的使用细节，详见下方描述中。
         *   * 如果用户期望使用名称中不含有大写英文的provider，可以按照如下展示将provider_source字段指定为模板中定义的required_providers中的source参数。
         *   * 如果用户期望使用名称含有大写英文的provider，需要将provider_name完全转化为小写英文创建。同时用户既可以在模板中使用API返回的provider_source参数，也可以在模板中以 “huawei.com/private-provider”为固定前缀，按照原含大写英文的provider_name，拼写provider_source参数。
         *   * 用户在使用该私有provider时，如果期望RFS使用委托调用FG以及OBS，可在创建私有provider时提供委托信息，该委托对私有provider下所有版本生效。provider_agency_name或provider_agency_urn二者最多只能提供一个，推荐用户在使用信任委托时给予provider_agency_urn，provider_agency_name只支持接收普通委托名称，如果给予了信任委托名称，则会在使用私有provider部署资源栈时失败。
         * 
         * 以HCL格式的模板为例，模板中引用私有provider的语法如下：
         * &#x60;&#x60;&#x60;
         * Provider \&quot;{provider_name}\&quot; {
         *   source &#x3D; \&quot;{provider_source}\&quot;
         *   version &#x3D; \&quot;{provider_version}\&quot;
         * }
         * &#x60;&#x60;&#x60;
         * 
         * 以JSON格式的模板为例，模板中引用私有provider的语法如下：
         * &#x60;&#x60;&#x60;
         * {
         *   \&quot;terraform\&quot;:{
         *     \&quot;required_providers\&quot;:[
         *       {
         *         \&quot;{provider_name}\&quot;:{
         *           \&quot;source\&quot;:\&quot;{provider_source}\&quot;,
         *           \&quot;version\&quot;:\&quot;{provider_version}\&quot;
         *         }
         *       }
         *     ]
         *   }
         * }
         * &#x60;&#x60;&#x60;
         * 
         * RFS在支持用户使用FunctionGraph(以下简称：FG)的事件函数运行私有Provider时，定义了一套详细的对接规则，以实现RFS与私有Provider之间的成功交互。
         * 其中关于FG的事件函数使用，请参考官网文档： https://support.huaweicloud.com/productdesc-functiongraph/functiongraph_02_1002.html。
         * 用户需要在提供的FG的事件函数方法中，按照如下规则实现一系列对应方法：
         *   1. 用户需要首先在FG中启动一个HTTP Server，用于接受来自RFS的HTTP请求，请求的Path固定为\&quot;/provider\&quot;，请求方法为\&quot;POST\&quot;。RFS规定了发送给FG的HTTP请求体，请求体格式如下所示：
         *         &#x60;&#x60;&#x60;
         *         {
         *           \&quot;method_name\&quot;: String,
         *           \&quot;request_data\&quot;: String,
         *           \&quot;context\&quot;:{
         *             \&quot;session_id\&quot;: String,
         *             \&quot;config_data\&quot;: String
         *           }
         *         }
         *         &#x60;&#x60;&#x60;
         *      用户提供的FG的事件函数需要能够接收如上请求。否则会调用私有Provider失败，导致资源编排失败。
         *   2. 下面对FG中如何使用请求体中的各个参数，以实现FG与RFS的成功交互做详细解释：
         *      \&quot;method_name\&quot;：RFS期望FG的事件函数中调用的私有provider的gRPC方法名。RFS会在请求体中，根据实际业务场景，每次从如下方法中选择一个进行传递。其中每个方法名需要与provider中原生的gRPC方法一一对应。在收到携带有某个方法名的请求后，FG的事件函数内能够调用对应的私有provider的原生gRPC方法，实现具体资源的处理逻辑。
         *      provider内提供的原生gRPC协议请参考：tfplugin5.proto和grpc_controller.proto。方法名列表如下：
         *         &#x60;&#x60;&#x60;
         *         tfplugin5.proto：
         *           \&quot;/tfplugin5.Provider/GetSchema\&quot;
         *           \&quot;/tfplugin5.Provider/PrepareProviderConfig\&quot;
         *           \&quot;/tfplugin5.Provider/ValidateResourceTypeConfig\&quot;
         *           \&quot;/tfplugin5.Provider/ValidateDataSourceConfig\&quot;
         *           \&quot;/tfplugin5.Provider/UpgradeResourceState\&quot;
         *           \&quot;/tfplugin5.Provider/Configure\&quot;
         *           \&quot;/tfplugin5.Provider/ReadResource\&quot;
         *           \&quot;/tfplugin5.Provider/PlanResourceChange\&quot;
         *           \&quot;/tfplugin5.Provider/ApplyResourceChange\&quot;
         *           \&quot;/tfplugin5.Provider/ImportResourceState\&quot;
         *           \&quot;/tfplugin5.Provider/ReadDataSource\&quot;
         *           \&quot;/tfplugin5.Provider/Stop\&quot;
         *         grpc_controller.proto：
         *           \&quot;/plugin.GRPCController/Shutdown\&quot;
         *         &#x60;&#x60;&#x60;
         *      \&quot;request_data\&quot;：RFS传递给FG的事件函数中每个方法的请求内容。在每个方法的处理逻辑中，需要先将request_data中的数据使用base64解码，然后作为私有provider的gRPC方法的数据传入。
         *      \&quot;config_data\&quot;：用于自定义provider处理实际请求前的初始化，如果context中config_data非空，FG的事件函数需要先将config_data作为输入调用/tfplugin5.Provider/Configure方法，进行初始化，再根据method_name调用对应的方法获取响应。
         *      \&quot;session_id\&quot;：表示请求是否来自同一个模板中的同一批编排任务。session_id相同，表示请求来自同一个模板中的同一批编排任务。
         *      注意：用户启动的同一个provider进程不能接受多个来自RFS的请求。RFS推荐用户处理请求时，每次都启动新的进程处理相关请求。
         *   3. 在FG的事件函数中实现的请求响应按照固定格式进行返回，响应体的格式如下，成功响应码固定为200，任何其他响应码均视为失败请求，会导致资源编排失败。
         *         &#x60;&#x60;&#x60;
         *         {
         *           \&quot;response_data\&quot;: String,
         *           \&quot;error\&quot;: String
         *         }
         *         &#x60;&#x60;&#x60;
         *      \&quot;response_data\&quot;：调用私有provider的gRPC方法返回的内容。在FG的事件函数中，需要将gRPC方法返回的响应序列化后使用base64编码返回。
         *      \&quot;error\&quot;：调用gRPC方法返回的错误信息。
         *   4. 用户需要对FG事件函数进行异步配置，针对于不涉及资源操作的读相关的gRPC请求，RFS默认通过同步接口调用FG；针对于涉及资源操作的写相关的gRPC请求，RFS默认通过异步接口调用FG。
         *      以下gRPC请求默认同步调用：
         *         &#x60;&#x60;&#x60;
         *         tfplugin5.proto：
         *           \&quot;/tfplugin5.Provider/GetSchema\&quot;
         *           \&quot;/tfplugin5.Provider/PrepareProviderConfig\&quot;
         *           \&quot;/tfplugin5.Provider/ValidateResourceTypeConfig\&quot;
         *           \&quot;/tfplugin5.Provider/ValidateDataSourceConfig\&quot;
         *           \&quot;/tfplugin5.Provider/UpgradeResourceState\&quot;
         *           \&quot;/tfplugin5.Provider/Configure\&quot;
         *           \&quot;/tfplugin5.Provider/ReadResource\&quot;
         *           \&quot;/tfplugin5.Provider/ImportResourceState\&quot;
         *           \&quot;/tfplugin5.Provider/ReadDataSource\&quot;
         *         &#x60;&#x60;&#x60;
         *      以下gRPC请求默认异步调用：
         *         &#x60;&#x60;&#x60;
         *         tfplugin5.proto：
         *           \&quot;/tfplugin5.Provider/PlanResourceChange\&quot;
         *           \&quot;/tfplugin5.Provider/ApplyResourceChange\&quot;
         *           \&quot;/tfplugin5.Provider/Stop\&quot;
         *         grpc_controller.proto：
         *           \&quot;/plugin.GRPCController/Shutdown\&quot;
         *         &#x60;&#x60;&#x60;
         *      目前FG异步配置的成功和失败时通知的目标服务只支持OBS，用户如果开启异步调用状态持久化，RFS会通过轮询FG获取函数异步调用请求列表来获取异步调用的状态，否则会轮询OBS是否存在异步调用结果来判断异步调用状态。
         *      对于同步调用，RFS阻塞等待FG返回调用结果；对于异步调用，RFS在判断异步调用结束后，获取OBS桶中的异步调用结果。
         * 
         * **约束与限制：**
         *   1. 私有provider为用户自行定义，提供给RFS的provider插件，RFS不负责校验其内部逻辑是否正确。
         *   2. RFS不负责维护私有provider的生命周期。用户使用私有provider部署的资源栈，由于私有provider缺失或问题，导致资源栈无法继续部署管理的，RFS不负责提供解决方案。
         *   3. RFS不负责保障私有provider的信息安全。用户使用私有provider部署的资源栈，由于模板中存在敏感数据，进而导致敏感信息泄露给第三方相关资源的，RFS不承担其相关责任。
         *   4. 当前调用私有provider过程中增加了网络因素，因此使用私有provider部署的失败概率会增加。如果出现因网络原因导致的部署失败，可以增加重试操作。
         *   5. 当前RFS默认会同步调用在FG中定义的读相关gRPC请求，单次方法需要确保运行时间不超过30s，否则会极大增加失败概率。
         *   6. 当前仅支持在模板中固定私有provider版本，不支持&gt;,&gt;&#x3D;,&lt;,&lt;&#x3D;,~&gt;等定义宽松版本的表达式。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrivateProvider(createPrivateProviderRequest?: CreatePrivateProviderRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-providers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;

            if (createPrivateProviderRequest !== null && createPrivateProviderRequest !== undefined) {
                if (createPrivateProviderRequest instanceof CreatePrivateProviderRequest) {
                    clientRequestId = createPrivateProviderRequest.clientRequestId;
                    body = createPrivateProviderRequest.body
                } else {
                    clientRequestId = createPrivateProviderRequest['Client-Request-Id'];
                    body = createPrivateProviderRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建私有provider版本（CreatePrivateProviderVersion）
         * 
         *   * provider的版本号需遵循语义化版本号（Semantic Version），为用户自定义。
         *   * 如果provider_name和provider_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         *   * 资源编排服务只会对function_graph_urn进行浅校验，如是否符合正则，是否仅指定为当前region等。并不会深度校验，即用户是否存在权限调用，是否真实存在等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrivateProviderVersion(createPrivateProviderVersionRequest?: CreatePrivateProviderVersionRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-providers/{provider_name}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let providerName;

            if (createPrivateProviderVersionRequest !== null && createPrivateProviderVersionRequest !== undefined) {
                if (createPrivateProviderVersionRequest instanceof CreatePrivateProviderVersionRequest) {
                    clientRequestId = createPrivateProviderVersionRequest.clientRequestId;
                    providerName = createPrivateProviderVersionRequest.providerName;
                    body = createPrivateProviderVersionRequest.body
                } else {
                    clientRequestId = createPrivateProviderVersionRequest['Client-Request-Id'];
                    providerName = createPrivateProviderVersionRequest['provider_name'];
                    body = createPrivateProviderVersionRequest['body'];
                }
            }

        
            if (providerName === null || providerName === undefined) {
            throw new RequiredError('providerName','Required parameter providerName was null or undefined when calling createPrivateProviderVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'provider_name': providerName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除私有provider（DeletePrivateProvider）
         * 
         * 删除某个私有provider及私有provider下的所有provider版本。
         * 
         *   * 如果provider_name和provider_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         * 
         * ** 请谨慎操作，删除私有provider将会删除该私有provider下的所有provider版本。 **
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePrivateProvider(deletePrivateProviderRequest?: DeletePrivateProviderRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/private-providers/{provider_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let providerName;
            
            let providerId;

            if (deletePrivateProviderRequest !== null && deletePrivateProviderRequest !== undefined) {
                if (deletePrivateProviderRequest instanceof DeletePrivateProviderRequest) {
                    clientRequestId = deletePrivateProviderRequest.clientRequestId;
                    providerName = deletePrivateProviderRequest.providerName;
                    providerId = deletePrivateProviderRequest.providerId;
                } else {
                    clientRequestId = deletePrivateProviderRequest['Client-Request-Id'];
                    providerName = deletePrivateProviderRequest['provider_name'];
                    providerId = deletePrivateProviderRequest['provider_id'];
                }
            }

        
            if (providerName === null || providerName === undefined) {
            throw new RequiredError('providerName','Required parameter providerName was null or undefined when calling deletePrivateProvider.');
            }
            if (providerId !== null && providerId !== undefined) {
                localVarQueryParameter['provider_id'] = providerId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'provider_name': providerName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除私有provider版本（DeletePrivateProviderVersion）
         * 
         * 删除某个私有provider版本
         * 
         *   * 如果provider_name和provider_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         * 
         * **请谨慎操作**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePrivateProviderVersion(deletePrivateProviderVersionRequest?: DeletePrivateProviderVersionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/private-providers/{provider_name}/versions/{provider_version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let providerName;
            
            let providerVersion;
            
            let providerId;

            if (deletePrivateProviderVersionRequest !== null && deletePrivateProviderVersionRequest !== undefined) {
                if (deletePrivateProviderVersionRequest instanceof DeletePrivateProviderVersionRequest) {
                    clientRequestId = deletePrivateProviderVersionRequest.clientRequestId;
                    providerName = deletePrivateProviderVersionRequest.providerName;
                    providerVersion = deletePrivateProviderVersionRequest.providerVersion;
                    providerId = deletePrivateProviderVersionRequest.providerId;
                } else {
                    clientRequestId = deletePrivateProviderVersionRequest['Client-Request-Id'];
                    providerName = deletePrivateProviderVersionRequest['provider_name'];
                    providerVersion = deletePrivateProviderVersionRequest['provider_version'];
                    providerId = deletePrivateProviderVersionRequest['provider_id'];
                }
            }

        
            if (providerName === null || providerName === undefined) {
            throw new RequiredError('providerName','Required parameter providerName was null or undefined when calling deletePrivateProviderVersion.');
            }
            if (providerVersion === null || providerVersion === undefined) {
            throw new RequiredError('providerVersion','Required parameter providerVersion was null or undefined when calling deletePrivateProviderVersion.');
            }
            if (providerId !== null && providerId !== undefined) {
                localVarQueryParameter['provider_id'] = providerId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'provider_name': providerName,'provider_version': providerVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举私有provider版本（ListPrivateProviderVersions）
         * 
         * 列举所选择的私有provider中所有的provider版本信息。
         * 
         *   * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
         *   * 如果provider_name和provider_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         *   * 如果provider下不存在provider版本，则返回空list。
         *   * 如果provider不存在则返回404。
         *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivateProviderVersions(listPrivateProviderVersionsRequest?: ListPrivateProviderVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-providers/{provider_name}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let providerName;
            
            let providerId;
            
            let sortKey;
            
            let sortDir;
            
            let marker;
            
            let limit;

            if (listPrivateProviderVersionsRequest !== null && listPrivateProviderVersionsRequest !== undefined) {
                if (listPrivateProviderVersionsRequest instanceof ListPrivateProviderVersionsRequest) {
                    clientRequestId = listPrivateProviderVersionsRequest.clientRequestId;
                    providerName = listPrivateProviderVersionsRequest.providerName;
                    providerId = listPrivateProviderVersionsRequest.providerId;
                    sortKey = listPrivateProviderVersionsRequest.sortKey;
                    sortDir = listPrivateProviderVersionsRequest.sortDir;
                    marker = listPrivateProviderVersionsRequest.marker;
                    limit = listPrivateProviderVersionsRequest.limit;
                } else {
                    clientRequestId = listPrivateProviderVersionsRequest['Client-Request-Id'];
                    providerName = listPrivateProviderVersionsRequest['provider_name'];
                    providerId = listPrivateProviderVersionsRequest['provider_id'];
                    sortKey = listPrivateProviderVersionsRequest['sort_key'];
                    sortDir = listPrivateProviderVersionsRequest['sort_dir'];
                    marker = listPrivateProviderVersionsRequest['marker'];
                    limit = listPrivateProviderVersionsRequest['limit'];
                }
            }

        
            if (providerName === null || providerName === undefined) {
            throw new RequiredError('providerName','Required parameter providerName was null or undefined when calling listPrivateProviderVersions.');
            }
            if (providerId !== null && providerId !== undefined) {
                localVarQueryParameter['provider_id'] = providerId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'provider_name': providerName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举私有provider（ListPrivateProviders）
         * 
         * 列举当前局点下用户所有的私有provider。
         * 
         *   * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
         *   * 如果当前用户下没有任何私有provider，则返回空list。
         *   * 如果需要某个provider的所有版本信息，可以调用ListPrivateProviderVersions。
         *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivateProviders(listPrivateProvidersRequest?: ListPrivateProvidersRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-providers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let sortKey;
            
            let sortDir;
            
            let marker;
            
            let limit;

            if (listPrivateProvidersRequest !== null && listPrivateProvidersRequest !== undefined) {
                if (listPrivateProvidersRequest instanceof ListPrivateProvidersRequest) {
                    clientRequestId = listPrivateProvidersRequest.clientRequestId;
                    sortKey = listPrivateProvidersRequest.sortKey;
                    sortDir = listPrivateProvidersRequest.sortDir;
                    marker = listPrivateProvidersRequest.marker;
                    limit = listPrivateProvidersRequest.limit;
                } else {
                    clientRequestId = listPrivateProvidersRequest['Client-Request-Id'];
                    sortKey = listPrivateProvidersRequest['sort_key'];
                    sortDir = listPrivateProvidersRequest['sort_dir'];
                    marker = listPrivateProvidersRequest['marker'];
                    limit = listPrivateProvidersRequest['limit'];
                }
            }

        
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取私有provider元数据（ShowPrivateProviderMetadata）
         * 
         * 获取某个私有provider的元数据信息
         * 
         *   * 具体返回的信息见ShowPrivateProviderMetadataResponseBody，如果想查看私有provider下全部provider版本，请调用ListPrivateProviderVersions。
         *   * 如果provider_name和provider_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateProviderMetadata(showPrivateProviderMetadataRequest?: ShowPrivateProviderMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-providers/{provider_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let providerName;
            
            let providerId;

            if (showPrivateProviderMetadataRequest !== null && showPrivateProviderMetadataRequest !== undefined) {
                if (showPrivateProviderMetadataRequest instanceof ShowPrivateProviderMetadataRequest) {
                    clientRequestId = showPrivateProviderMetadataRequest.clientRequestId;
                    providerName = showPrivateProviderMetadataRequest.providerName;
                    providerId = showPrivateProviderMetadataRequest.providerId;
                } else {
                    clientRequestId = showPrivateProviderMetadataRequest['Client-Request-Id'];
                    providerName = showPrivateProviderMetadataRequest['provider_name'];
                    providerId = showPrivateProviderMetadataRequest['provider_id'];
                }
            }

        
            if (providerName === null || providerName === undefined) {
            throw new RequiredError('providerName','Required parameter providerName was null or undefined when calling showPrivateProviderMetadata.');
            }
            if (providerId !== null && providerId !== undefined) {
                localVarQueryParameter['provider_id'] = providerId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'provider_name': providerName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取私有provider版本元数据（ShowPrivateProviderVersionMetadata）
         * 
         * 获取某个私有provider版本的元数据信息
         *   
         *   * 具体返回信息见ShowPrivateProviderVersionMetadataResponseBody
         *   * 如果provider_name和provider_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateProviderVersionMetadata(showPrivateProviderVersionMetadataRequest?: ShowPrivateProviderVersionMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-providers/{provider_name}/versions/{provider_version}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let providerName;
            
            let providerVersion;
            
            let providerId;

            if (showPrivateProviderVersionMetadataRequest !== null && showPrivateProviderVersionMetadataRequest !== undefined) {
                if (showPrivateProviderVersionMetadataRequest instanceof ShowPrivateProviderVersionMetadataRequest) {
                    clientRequestId = showPrivateProviderVersionMetadataRequest.clientRequestId;
                    providerName = showPrivateProviderVersionMetadataRequest.providerName;
                    providerVersion = showPrivateProviderVersionMetadataRequest.providerVersion;
                    providerId = showPrivateProviderVersionMetadataRequest.providerId;
                } else {
                    clientRequestId = showPrivateProviderVersionMetadataRequest['Client-Request-Id'];
                    providerName = showPrivateProviderVersionMetadataRequest['provider_name'];
                    providerVersion = showPrivateProviderVersionMetadataRequest['provider_version'];
                    providerId = showPrivateProviderVersionMetadataRequest['provider_id'];
                }
            }

        
            if (providerName === null || providerName === undefined) {
            throw new RequiredError('providerName','Required parameter providerName was null or undefined when calling showPrivateProviderVersionMetadata.');
            }
            if (providerVersion === null || providerVersion === undefined) {
            throw new RequiredError('providerVersion','Required parameter providerVersion was null or undefined when calling showPrivateProviderVersionMetadata.');
            }
            if (providerId !== null && providerId !== undefined) {
                localVarQueryParameter['provider_id'] = providerId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'provider_name': providerName,'provider_version': providerVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新私有provider元数据（UpdatePrivateProviderMetadata）
         * 
         * 更新当前私有provider的元数据信息
         * 
         *   * 目前只支持更新私有provider的描述
         *   * 如果需要创建新的版本，请调用CreatePrivateProviderVersion
         *   * 更新为增量更新，即如果某个参数不提供，则保持原始值
         *   * 如果请求中没有需要被更新的参数，则返回400。注意：即使更新原始值和目标值一致也被认为是有效更新
         *   * 更新后私有provider的更新时间（update_time）也会被更新
         *   * 如果provider_name和provider_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePrivateProviderMetadata(updatePrivateProviderMetadataRequest?: UpdatePrivateProviderMetadataRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/private-providers/{provider_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let providerName;

            if (updatePrivateProviderMetadataRequest !== null && updatePrivateProviderMetadataRequest !== undefined) {
                if (updatePrivateProviderMetadataRequest instanceof UpdatePrivateProviderMetadataRequest) {
                    clientRequestId = updatePrivateProviderMetadataRequest.clientRequestId;
                    providerName = updatePrivateProviderMetadataRequest.providerName;
                    body = updatePrivateProviderMetadataRequest.body
                } else {
                    clientRequestId = updatePrivateProviderMetadataRequest['Client-Request-Id'];
                    providerName = updatePrivateProviderMetadataRequest['provider_name'];
                    body = updatePrivateProviderMetadataRequest['body'];
                }
            }

        
            if (providerName === null || providerName === undefined) {
            throw new RequiredError('providerName','Required parameter providerName was null or undefined when calling updatePrivateProviderMetadata.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'provider_name': providerName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 执行执行计划（ApplyExecutionPlan）
         * 
         * 此API用于执行一个执行计划
         * 
         * * 当执行请求接受后，执行计划状态将变为&#x60;APPLY_IN_PROGRESS&#x60;，后台会进行异步处理。
         * * 当执行结束后，执行计划状态将变为&#x60;APPLIED&#x60;。
         * * 用户可以调用GetStackMetadata查询资源栈的状态（status）来跟踪资源栈部署情况以及确认本次执行结果是否成功。
         * * 执行执行计划时，用户将模板中定义的资源删除（包括Import定义的资源），会触发实际资源的删除。
         * 
         * 如果不希望通过执行计划进行部署操作，也可以选择调用DeployStack进行直接部署
         * 
         * 关于执行计划的过期失效：
         *   1. 如果指定资源栈下有多个执行计划，则在执行某个执行计划后（无论结果是否成功），剩余所有的执行计划将过期失效；
         *   2. 如果调用ApplyExecutionPlan时，指定的执行计划已经过期失效，则返回403
         * 
         * 如果资源栈状态处于非终态（即以&#x60;IN_PROGRESS&#x60;结尾，详细见下方）状态时，则不允许执行执行计划，并返回403。非终态状态包括但不限于以下状态：
         *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
         *   * 正在删除（DELETION_IN_PROGRESS）
         *   * 正在回滚（ROLLBACK_IN_PROGRESS）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        applyExecutionPlan(applyExecutionPlanRequest?: ApplyExecutionPlanRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans/{execution_plan_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let executionPlanName;

            if (applyExecutionPlanRequest !== null && applyExecutionPlanRequest !== undefined) {
                if (applyExecutionPlanRequest instanceof ApplyExecutionPlanRequest) {
                    clientRequestId = applyExecutionPlanRequest.clientRequestId;
                    projectId = applyExecutionPlanRequest.projectId;
                    stackName = applyExecutionPlanRequest.stackName;
                    executionPlanName = applyExecutionPlanRequest.executionPlanName;
                    body = applyExecutionPlanRequest.body
                } else {
                    clientRequestId = applyExecutionPlanRequest['Client-Request-Id'];
                    projectId = applyExecutionPlanRequest['project_id'];
                    stackName = applyExecutionPlanRequest['stack_name'];
                    executionPlanName = applyExecutionPlanRequest['execution_plan_name'];
                    body = applyExecutionPlanRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling applyExecutionPlan.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling applyExecutionPlan.');
            }
            if (executionPlanName === null || executionPlanName === undefined) {
            throw new RequiredError('executionPlanName','Required parameter executionPlanName was null or undefined when calling applyExecutionPlan.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'stack_name': stackName,'execution_plan_name': executionPlanName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建执行计划（CreateExecutionPlan）
         * 
         * 此API用于在指定的资源栈下生成一个执行计划，执行计划描述了当前资源栈中记录的资源状态和模板描述的目的资源状态之间的区别（如，资源A将以以下配置文件生成，资源B将以下参数从XXX修改成YYY）
         * 
         * 调用此API触发创建执行计划之后，可以通过GetExecutionPlanMetadata来跟踪执行计划的状态
         * 当执行计划状态为&#x60;AVAILABLE&#x60;时，可以通过GetExecutionPlan获取本次执行计划的结果
         * 
         * 执行计划不会做过多深层的检查和校验，如用户是否有权限生成、修改资源等
         * 
         * **注意：**
         *   * 创建执行计划时，指定的资源栈必须存在。如果指定的资源栈不存在，则返回404，用户可通过调用创建资源栈（CreateStack）API来创建资源栈。
         *   * 如果请求中不含有template_body和template_uri，则返回400
         *   * 如果资源栈进行了某次部署操作，则在该次部署操作前生成的执行计划将全部失效
         *   * 执行计划只代表生成时刻的结果，如果执行计划生成后，用户手动修改资源状态，则执行计划不会自动更新
         *   * 如果资源栈状态处于&#x60;DEPLOYMENT_IN_PROGRESS&#x60;、&#x60;ROLLBACK_IN_PROGRESS&#x60;、&#x60;DELETION_IN_PROGRESS&#x60;等状态时，则不允许创建执行计划，并返回403
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createExecutionPlan(createExecutionPlanRequest?: CreateExecutionPlanRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;

            if (createExecutionPlanRequest !== null && createExecutionPlanRequest !== undefined) {
                if (createExecutionPlanRequest instanceof CreateExecutionPlanRequest) {
                    clientRequestId = createExecutionPlanRequest.clientRequestId;
                    projectId = createExecutionPlanRequest.projectId;
                    stackName = createExecutionPlanRequest.stackName;
                    body = createExecutionPlanRequest.body
                } else {
                    clientRequestId = createExecutionPlanRequest['Client-Request-Id'];
                    projectId = createExecutionPlanRequest['project_id'];
                    stackName = createExecutionPlanRequest['stack_name'];
                    body = createExecutionPlanRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createExecutionPlan.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling createExecutionPlan.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除执行计划（DeleteExecutionPlan）
         * 
         * 删除指定的执行计划
         * 
         * 如果执行计划状态处于&#x60;CREATION_IN_PROGRESS&#x60;、&#x60;APPLY_IN_PROGRESS&#x60;状态时，则不允许删除并返回403
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteExecutionPlan(deleteExecutionPlanRequest?: DeleteExecutionPlanRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans/{execution_plan_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let executionPlanName;
            
            let stackId;
            
            let executionPlanId;

            if (deleteExecutionPlanRequest !== null && deleteExecutionPlanRequest !== undefined) {
                if (deleteExecutionPlanRequest instanceof DeleteExecutionPlanRequest) {
                    clientRequestId = deleteExecutionPlanRequest.clientRequestId;
                    projectId = deleteExecutionPlanRequest.projectId;
                    stackName = deleteExecutionPlanRequest.stackName;
                    executionPlanName = deleteExecutionPlanRequest.executionPlanName;
                    stackId = deleteExecutionPlanRequest.stackId;
                    executionPlanId = deleteExecutionPlanRequest.executionPlanId;
                } else {
                    clientRequestId = deleteExecutionPlanRequest['Client-Request-Id'];
                    projectId = deleteExecutionPlanRequest['project_id'];
                    stackName = deleteExecutionPlanRequest['stack_name'];
                    executionPlanName = deleteExecutionPlanRequest['execution_plan_name'];
                    stackId = deleteExecutionPlanRequest['stack_id'];
                    executionPlanId = deleteExecutionPlanRequest['execution_plan_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteExecutionPlan.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling deleteExecutionPlan.');
            }
            if (executionPlanName === null || executionPlanName === undefined) {
            throw new RequiredError('executionPlanName','Required parameter executionPlanName was null or undefined when calling deleteExecutionPlan.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (executionPlanId !== null && executionPlanId !== undefined) {
                localVarQueryParameter['execution_plan_id'] = executionPlanId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName,'execution_plan_name': executionPlanName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 预估执行计划价格（EstimateExecutionPlanPrice）
         * 
         * 此API可以基于一份已有的执行计划中增量的资源进行询价，当前支持询价的计费模式有包周期计费、按需计费、免费，暂不支持其他形式的计费模式，例如竞价计费模式等。
         * 
         * 注：
         *   * 由于某些资源的属性值含有默认值，且该属性和询价参数相关。如果用户的模板中描述的资源没有声明这些属性，则询价结果可能存在偏差。
         *   * 询价结果仅为预估结果，具体请以实际为准。
         *   * 如果用户在模板中使用了depends_on参数，如A资源询价必要字段依赖于B资源的创建，则A资源不支持询价。
         *   * 暂不支持传入data sources的flavor.id的场景的询价。
         *   * 暂不支持镜像询价。
         *   * 如果A资源的询价必要字段设置了sensitive &#x3D; true，则A资源不支持询价。
         *   * 模板中询价的资源的个数是有限制的。当前一个模板中最多支持12个包周期计费资源和24个按需计费资源。
         *   * 支持询价的资源列表和询价必要参数
         *       * huaweicloud_cce_cluster: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_css_cluster:
         *           * 支持的计费模式：按需
         *       * huaweicloud_evs_volume: 
         *           * 支持的计费模式：包周期、按需
         *           * 询价必要参数：size（磁盘规格）
         *       * huaweicloud_compute_instance: 
         *           * 支持的计费模式：包周期、按需
         *           * 询价必要参数：flavor_id（规格ID）、flavor_name（规格名称，flavor_id和flavor_name至少给出一个）、system_disk_size（系统磁盘大小）
         *       * huaweicloud_vpc_bandwidth:
         *           * 支持的计费模式：包周期、按需
         *           * 询价必要参数：charge_mode仅支持bandwidth
         *       * huaweicloud_vpc_eip: 
         *           * 支持的计费模式：包周期、按需
         *           * 询价必要参数：bandwidth.size（带宽大小）
         *       * huaweicloud_gaussdb_redis_instance: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_nat_gateway: 
         *           * 支持的计费模式：按需
         *       * huaweicloud_rds_instance: 
         *           * 支持的计费模式：包周期、按需
         *           * 支持的数据库类型：MySQL、PostgreSQL、Microsoft SQL Server      
         *       * huaweicloud_sfs_turbo: 
         *           * 支持的计费模式：按需
         *           * 询价必要参数：share_type（文件系统类型）
         *       * huaweicloud_dms_kafka_instance: 
         *           * 支持的计费模式：按需
         *           * 询价必要参数：flavor_id（规格ID）、product_id（产品ID。flavor_id和product_id至少给出一个。）、storage_space（存储容量）
         *       * huaweicloud_dcs_instance: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_gaussdb_mysql_instance: 
         *           * 支持的计费模式：包周期、按需
         *           * 询价必要参数：proxy_node_number（代理节点数量）、volume_size（挂载卷的存储空间）
         *       * huaweicloud_vpc: 
         *           * 支持的计费模式：免费
         *       * huaweicloud_drs_job: 
         *           * 支持的计费模式：按需
         *       * huaweicloud_apig_instance: 
         *           * 支持的计费模式：按需
         *       * huaweicloud_dms_rabbitmq_instance: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_hss_quota: 
         *           * 支持的计费模式：包周期
         *       * huaweicloud_hss_host_protection: 
         *           * 支持的计费模式：按需
         *       * huaweicloud_cbr_vault: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_cbh_instance: 
         *           * 支持的计费模式：包周期
         *       * huaweicloud_cbh_ha_instance: 
         *           * 支持的计费模式：包周期
         *       * huaweicloud_waf_cloud_instance: 
         *           * 支持的计费模式：包周期
         *       * huaweicloud_lb_loadbalancer: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_elb_loadbalancer: 
         *           * 支持的计费模式：按需
         *       * huaweicloud_modelarts_resource_pool: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_cnad_advanced_black_white_list: 
         *           * 支持的计费模式：免费
         *       * huaweicloud_cnad_advanced_policy: 
         *           * 支持的计费模式：免费
         *       * huaweicloud_cnad_advanced_protected_object: 
         *           * 支持的计费模式：免费
         *       * huaweicloud_antiddos_basic: 
         *           * 支持的计费模式：免费
         *       * huaweicloud_obs_bucket: 
         *           * 支持的计费模式：免费
         *       * huaweicloud_obs_bucket_replication: 
         *           * 支持的计费模式：免费
         *       * huaweicloud_workspace_desktop: 
         *           * 支持的计费模式：按需
         *       * huaweicloud_dws_cluster: 
         *           * 支持的计费模式：按需
         *       * huaweicloud_dws_ext_data_source: 
         *           * 支持的计费模式：免费
         *       * huaweicloud_dws_snapshot: 
         *           * 支持的计费模式：免费
         *       * huaweicloud_dds_instance: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_rds_read_replica_instance: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_cce_node: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_dms_rocketmq_instance: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_gaussdb_opengauss_instance: 
         *           * 支持的计费模式：包周期、按需
         *       * huaweicloud_vpcep_endpoint: 
         *           * 支持的计费模式：按需
         *       * huaweicloud_kms_key: 
         *           * 支持的计费模式：按需
         *       * huaweicloud_elb_listener:
         *           * 支持的计费模式：免费
         *       * huaweicloud_elb_monitor:
         *           * 支持的计费模式：免费
         *       * huaweicloud_elb_pool:
         *           * 支持的计费模式：免费
         *       * huaweicloud_elb_member:
         *           * 支持的计费模式：免费
         *       * huaweicloud_vpc_subnet:
         *           * 支持的计费模式：免费
         *       * huaweicloud_networking_secgroup:
         *           * 支持的计费模式：免费
         *       * huaweicloud_iec_security_group:
         *           * 支持的计费模式：免费
         *       * huaweicloud_dns_zone:
         *           * 支持的计费模式：免费
         *       * huaweicloud_enterprise_project:
         *           * 支持的计费模式：免费
         *       * huaweicloud_er_instance:
         *           * 支持的计费模式：免费
         *       * huaweicloud_lts_group:
         *           * 支持的计费模式：免费
         *       * huaweicloud_smn_topic:
         *           * 支持的计费模式：免费
         *       * huaweicloud_smn_subscription:
         *           * 支持的计费模式：免费
         *       * huaweicloud_cc_connection:
         *           * 支持的计费模式：免费
         *       * huaweicloud_cc_network_instance:
         *           * 支持的计费模式：免费
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        estimateExecutionPlanPrice(estimateExecutionPlanPriceRequest?: EstimateExecutionPlanPriceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans/{execution_plan_name}/prices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let executionPlanName;
            
            let stackId;
            
            let executionPlanId;

            if (estimateExecutionPlanPriceRequest !== null && estimateExecutionPlanPriceRequest !== undefined) {
                if (estimateExecutionPlanPriceRequest instanceof EstimateExecutionPlanPriceRequest) {
                    clientRequestId = estimateExecutionPlanPriceRequest.clientRequestId;
                    projectId = estimateExecutionPlanPriceRequest.projectId;
                    stackName = estimateExecutionPlanPriceRequest.stackName;
                    executionPlanName = estimateExecutionPlanPriceRequest.executionPlanName;
                    stackId = estimateExecutionPlanPriceRequest.stackId;
                    executionPlanId = estimateExecutionPlanPriceRequest.executionPlanId;
                } else {
                    clientRequestId = estimateExecutionPlanPriceRequest['Client-Request-Id'];
                    projectId = estimateExecutionPlanPriceRequest['project_id'];
                    stackName = estimateExecutionPlanPriceRequest['stack_name'];
                    executionPlanName = estimateExecutionPlanPriceRequest['execution_plan_name'];
                    stackId = estimateExecutionPlanPriceRequest['stack_id'];
                    executionPlanId = estimateExecutionPlanPriceRequest['execution_plan_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling estimateExecutionPlanPrice.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling estimateExecutionPlanPrice.');
            }
            if (executionPlanName === null || executionPlanName === undefined) {
            throw new RequiredError('executionPlanName','Required parameter executionPlanName was null or undefined when calling estimateExecutionPlanPrice.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (executionPlanId !== null && executionPlanId !== undefined) {
                localVarQueryParameter['execution_plan_id'] = executionPlanId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName,'execution_plan_name': executionPlanName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取执行计划（GetExecutionPlan）
         * 
         * 此API用于获取指定执行计划的详细内容（即执行计划项目），用户可通过此API得知指定执行计划在执行后，资源栈中的资源会发生何种变化
         * 
         * 如果执行计划状态为&#x60;CREATION_IN_PROGRESS&#x60;或&#x60;CREATION_FAILED&#x60;，则不返回执行计划项目列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getExecutionPlan(getExecutionPlanRequest?: GetExecutionPlanRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans/{execution_plan_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let executionPlanName;
            
            let stackId;
            
            let executionPlanId;

            if (getExecutionPlanRequest !== null && getExecutionPlanRequest !== undefined) {
                if (getExecutionPlanRequest instanceof GetExecutionPlanRequest) {
                    clientRequestId = getExecutionPlanRequest.clientRequestId;
                    projectId = getExecutionPlanRequest.projectId;
                    stackName = getExecutionPlanRequest.stackName;
                    executionPlanName = getExecutionPlanRequest.executionPlanName;
                    stackId = getExecutionPlanRequest.stackId;
                    executionPlanId = getExecutionPlanRequest.executionPlanId;
                } else {
                    clientRequestId = getExecutionPlanRequest['Client-Request-Id'];
                    projectId = getExecutionPlanRequest['project_id'];
                    stackName = getExecutionPlanRequest['stack_name'];
                    executionPlanName = getExecutionPlanRequest['execution_plan_name'];
                    stackId = getExecutionPlanRequest['stack_id'];
                    executionPlanId = getExecutionPlanRequest['execution_plan_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling getExecutionPlan.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling getExecutionPlan.');
            }
            if (executionPlanName === null || executionPlanName === undefined) {
            throw new RequiredError('executionPlanName','Required parameter executionPlanName was null or undefined when calling getExecutionPlan.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (executionPlanId !== null && executionPlanId !== undefined) {
                localVarQueryParameter['execution_plan_id'] = executionPlanId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName,'execution_plan_name': executionPlanName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取执行计划元数据（GetExecutionPlanMetadata）
         * 
         * 该API可以获取指定执行计划的元数据，包括资源栈ID、资源栈名称、执行计划ID、执行计划名称、执行计划描述、执行计划的创建时间和执行时间、执行计划状态等信息。
         * 
         * 具体信息见GetExecutionPlanMetadataResponseBody。
         * 
         * 如果需要获取执行计划的具体内容，请调用GetExecutionPlan。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getExecutionPlanMetadata(getExecutionPlanMetadataRequest?: GetExecutionPlanMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans/{execution_plan_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let executionPlanName;
            
            let stackId;
            
            let executionPlanId;

            if (getExecutionPlanMetadataRequest !== null && getExecutionPlanMetadataRequest !== undefined) {
                if (getExecutionPlanMetadataRequest instanceof GetExecutionPlanMetadataRequest) {
                    clientRequestId = getExecutionPlanMetadataRequest.clientRequestId;
                    projectId = getExecutionPlanMetadataRequest.projectId;
                    stackName = getExecutionPlanMetadataRequest.stackName;
                    executionPlanName = getExecutionPlanMetadataRequest.executionPlanName;
                    stackId = getExecutionPlanMetadataRequest.stackId;
                    executionPlanId = getExecutionPlanMetadataRequest.executionPlanId;
                } else {
                    clientRequestId = getExecutionPlanMetadataRequest['Client-Request-Id'];
                    projectId = getExecutionPlanMetadataRequest['project_id'];
                    stackName = getExecutionPlanMetadataRequest['stack_name'];
                    executionPlanName = getExecutionPlanMetadataRequest['execution_plan_name'];
                    stackId = getExecutionPlanMetadataRequest['stack_id'];
                    executionPlanId = getExecutionPlanMetadataRequest['execution_plan_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling getExecutionPlanMetadata.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling getExecutionPlanMetadata.');
            }
            if (executionPlanName === null || executionPlanName === undefined) {
            throw new RequiredError('executionPlanName','Required parameter executionPlanName was null or undefined when calling getExecutionPlanMetadata.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (executionPlanId !== null && executionPlanId !== undefined) {
                localVarQueryParameter['execution_plan_id'] = executionPlanId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName,'execution_plan_name': executionPlanName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举执行计划（ListExecutionPlans）
         * 
         * 列举当前局点下用户指定资源栈下所有的执行计划
         * 
         *   * 默认按照生成时间降序排序，最新生成的在最前
         *   * 如果指定的资源栈下没有任何执行计划，则返回空list
         *   * 如果指定的资源栈不存在，则返回404
         *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * ListExecutionPlans返回的只有摘要信息（具体摘要信息见ListExecutionPlansResponseBody），如果用户需要详细的执行计划元数据请调用GetExecutionPlanMetadata
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExecutionPlans(listExecutionPlansRequest?: ListExecutionPlansRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/execution-plans",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;
            
            let marker;
            
            let limit;

            if (listExecutionPlansRequest !== null && listExecutionPlansRequest !== undefined) {
                if (listExecutionPlansRequest instanceof ListExecutionPlansRequest) {
                    clientRequestId = listExecutionPlansRequest.clientRequestId;
                    projectId = listExecutionPlansRequest.projectId;
                    stackName = listExecutionPlansRequest.stackName;
                    stackId = listExecutionPlansRequest.stackId;
                    marker = listExecutionPlansRequest.marker;
                    limit = listExecutionPlansRequest.limit;
                } else {
                    clientRequestId = listExecutionPlansRequest['Client-Request-Id'];
                    projectId = listExecutionPlansRequest['project_id'];
                    stackName = listExecutionPlansRequest['stack_name'];
                    stackId = listExecutionPlansRequest['stack_id'];
                    marker = listExecutionPlansRequest['marker'];
                    limit = listExecutionPlansRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listExecutionPlans.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling listExecutionPlans.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建私有hook（CreatePrivateHook）
         * 
         * 创建一个带有初始默认版本的私有hook，创建私有hook的时候需要同时创建一个初始化的默认版本，不允许空私有hook的创建。
         * 设置配置(Configuration)后的私有hook才会在触发资源栈部署时生效，资源栈使用私有hook的默认版本。若创建私有hook时未指定配置项，则该私有hook在资源栈部署时不生效，后续可通过UpdatePrivateHook API更新配置。
         * 
         *   * 支持hook策略模板检验的资源栈服务API：
         *       CreateExecutionPlan
         *       ApplyExecutionPlan
         *       CreateStack
         *       DeployStack
         *       ContinueDeployStack
         *       DeleteStack
         *       DeleteStackEnhanced
         *   * 创建私有hook时指定的版本为初始默认版本。
         *   * 如果同名的私有hook在当前domain_id+region下已经存在，则会返回409。
         *   * 对于私有hook的名字，推荐用户使用三段命名空间：{自定义hook名称}-{hook应用场景}-hook。
         *   * 私有hook版本号遵循语义化版本号（Semantic Version），为用户自定义。
         *   * 资源编排服务会对私有hook进行校验，如文件大小，策略文件语法校验等。若存在错误，则会创建失败。
         *   * 当前仅支持部署资源前的检测，不支持部署资源过程中的检测。如果通过了部署资源前的检测，资源栈则会继续部署资源。反之会停止部署资源，并记录资源栈事件（stack events）。
         *   * 仅支持OPA开源引擎识别的，以Rego（https://www.openpolicyagent.org/docs/latest/policy-language/）语言编写的策略模板(用户可以通过policy_uri或policy_body给予策略文件内容)。
         *   * 策略模板中的决策结果使用object类型的hook_result，hook_result所在包的包名必须使用policy。hook_result格式如下：
         *       &#x60;&#x60;&#x60;
         *       hook_result :&#x3D; {
         *         \&quot;is_passed\&quot;: Bool,
         *         \&quot;err_msg\&quot;: String,
         *       }
         *       &#x60;&#x60;&#x60;
         *     其中is_passed必选，err_msg可选。RFS通过查询policy.hook_result[is_passed]判断是否通过策略校验。
         *     * 如果policy.hook_result[is_passed]的结果是true，则表示通过策略校验，资源编排服务会继续部署资源。
         *     * 如果policy.hook_result[is_passed]的结果是false，则表示没有通过策略校验，资源编排服务会停止部署资源。并记录资源栈事件信息，信息的内容为policy.hook_result[err_msg]。如果没有设置err_msg，则资源栈事件信息内容为默认错误信息（校验私有hook失败）。
         *     * 如果没有使用policy.hook_result，则该策略不会生效，资源编排服务会继续部署资源。
         *   * 策略模板中不支持调用其他服务API等方式获取数据、不支持任何形式的网络访问、不支持以任何形式的自定义函数或者方法等、不支持读取本地文件以及系统操作。
         * 
         * 私有hook的策略模板语法如下：
         * &#x60;&#x60;&#x60;
         * package policy
         * 
         * import rego.v1
         * 
         * hook_result :&#x3D; {
         *   \&quot;is_passed\&quot;: input.message &#x3D;&#x3D; \&quot;world\&quot;,
         *   \&quot;err_msg\&quot;: \&quot;The error msg when private hook is not passed the validation\&quot;,
         * }
         * &#x60;&#x60;&#x60;
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrivateHook(createPrivateHookRequest?: CreatePrivateHookRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-hooks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;

            if (createPrivateHookRequest !== null && createPrivateHookRequest !== undefined) {
                if (createPrivateHookRequest instanceof CreatePrivateHookRequest) {
                    clientRequestId = createPrivateHookRequest.clientRequestId;
                    body = createPrivateHookRequest.body
                } else {
                    clientRequestId = createPrivateHookRequest['Client-Request-Id'];
                    body = createPrivateHookRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建私有hook版本（CreatePrivateHookVersion）
         * 
         * 创建私有hook版本，创建私有hook版本后需要调用UpdatePrivateHook API设置为默认版本才能生效。
         * 
         *   * 版本号遵循语义化版本号（Semantic Version），为用户自定义。
         *   * 若hook_name和hook_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         *   * 资源编排服务会对私有hook进行校验，如文件大小，策略文件语法校验等。若存在错误，则会创建失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrivateHookVersion(createPrivateHookVersionRequest?: CreatePrivateHookVersionRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-hooks/{hook_name}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let hookName;

            if (createPrivateHookVersionRequest !== null && createPrivateHookVersionRequest !== undefined) {
                if (createPrivateHookVersionRequest instanceof CreatePrivateHookVersionRequest) {
                    clientRequestId = createPrivateHookVersionRequest.clientRequestId;
                    hookName = createPrivateHookVersionRequest.hookName;
                    body = createPrivateHookVersionRequest.body
                } else {
                    clientRequestId = createPrivateHookVersionRequest['Client-Request-Id'];
                    hookName = createPrivateHookVersionRequest['hook_name'];
                    body = createPrivateHookVersionRequest['body'];
                }
            }

        
            if (hookName === null || hookName === undefined) {
            throw new RequiredError('hookName','Required parameter hookName was null or undefined when calling createPrivateHookVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'hook_name': hookName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除私有hook（DeletePrivateHook）
         * 
         * 删除某个私有hook以及私有hook下的全部hook版本
         * 
         *   * 默认版本只能调用本API删除，除默认版本外的其它版本可以调用DeletePrivateHookVersion API删除。
         *   * 若hook_name和hook_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         * 
         * **请谨慎操作，删除私有hook将会删除该私有hook和该私有hook下的所有私有hook版本。**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePrivateHook(deletePrivateHookRequest?: DeletePrivateHookRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/private-hooks/{hook_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let hookName;
            
            let hookId;

            if (deletePrivateHookRequest !== null && deletePrivateHookRequest !== undefined) {
                if (deletePrivateHookRequest instanceof DeletePrivateHookRequest) {
                    clientRequestId = deletePrivateHookRequest.clientRequestId;
                    hookName = deletePrivateHookRequest.hookName;
                    hookId = deletePrivateHookRequest.hookId;
                } else {
                    clientRequestId = deletePrivateHookRequest['Client-Request-Id'];
                    hookName = deletePrivateHookRequest['hook_name'];
                    hookId = deletePrivateHookRequest['hook_id'];
                }
            }

        
            if (hookName === null || hookName === undefined) {
            throw new RequiredError('hookName','Required parameter hookName was null or undefined when calling deletePrivateHook.');
            }
            if (hookId !== null && hookId !== undefined) {
                localVarQueryParameter['hook_id'] = hookId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'hook_name': hookName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除私有hook版本（DeletePrivateHookVersion）
         * 
         * 删除某个私有hook版本
         * 
         *   * 默认版本只能调用DeletePrivateHook API删除，除默认版本外的其它版本都可以调用本API删除。
         *   * 若hook_name和hook_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         * 
         * **请谨慎操作**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePrivateHookVersion(deletePrivateHookVersionRequest?: DeletePrivateHookVersionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/private-hooks/{hook_name}/versions/{hook_version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let hookName;
            
            let hookVersion;
            
            let hookId;

            if (deletePrivateHookVersionRequest !== null && deletePrivateHookVersionRequest !== undefined) {
                if (deletePrivateHookVersionRequest instanceof DeletePrivateHookVersionRequest) {
                    clientRequestId = deletePrivateHookVersionRequest.clientRequestId;
                    hookName = deletePrivateHookVersionRequest.hookName;
                    hookVersion = deletePrivateHookVersionRequest.hookVersion;
                    hookId = deletePrivateHookVersionRequest.hookId;
                } else {
                    clientRequestId = deletePrivateHookVersionRequest['Client-Request-Id'];
                    hookName = deletePrivateHookVersionRequest['hook_name'];
                    hookVersion = deletePrivateHookVersionRequest['hook_version'];
                    hookId = deletePrivateHookVersionRequest['hook_id'];
                }
            }

        
            if (hookName === null || hookName === undefined) {
            throw new RequiredError('hookName','Required parameter hookName was null or undefined when calling deletePrivateHookVersion.');
            }
            if (hookVersion === null || hookVersion === undefined) {
            throw new RequiredError('hookVersion','Required parameter hookVersion was null or undefined when calling deletePrivateHookVersion.');
            }
            if (hookId !== null && hookId !== undefined) {
                localVarQueryParameter['hook_id'] = hookId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'hook_name': hookName,'hook_version': hookVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举私有hook版本（ListPrivateHookVersions）
         * 
         * 列举所选择的私有hook中所有的hook版本信息。
         * 
         *   * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
         *   * 如果hook_name和hook_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         *   * 如果hook下不存在hook版本，则返回空list。
         *   * 如果hook不存在则返回404。
         *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivateHookVersions(listPrivateHookVersionsRequest?: ListPrivateHookVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-hooks/{hook_name}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let hookName;
            
            let hookId;
            
            let sortKey;
            
            let sortDir;
            
            let marker;
            
            let limit;

            if (listPrivateHookVersionsRequest !== null && listPrivateHookVersionsRequest !== undefined) {
                if (listPrivateHookVersionsRequest instanceof ListPrivateHookVersionsRequest) {
                    clientRequestId = listPrivateHookVersionsRequest.clientRequestId;
                    hookName = listPrivateHookVersionsRequest.hookName;
                    hookId = listPrivateHookVersionsRequest.hookId;
                    sortKey = listPrivateHookVersionsRequest.sortKey;
                    sortDir = listPrivateHookVersionsRequest.sortDir;
                    marker = listPrivateHookVersionsRequest.marker;
                    limit = listPrivateHookVersionsRequest.limit;
                } else {
                    clientRequestId = listPrivateHookVersionsRequest['Client-Request-Id'];
                    hookName = listPrivateHookVersionsRequest['hook_name'];
                    hookId = listPrivateHookVersionsRequest['hook_id'];
                    sortKey = listPrivateHookVersionsRequest['sort_key'];
                    sortDir = listPrivateHookVersionsRequest['sort_dir'];
                    marker = listPrivateHookVersionsRequest['marker'];
                    limit = listPrivateHookVersionsRequest['limit'];
                }
            }

        
            if (hookName === null || hookName === undefined) {
            throw new RequiredError('hookName','Required parameter hookName was null or undefined when calling listPrivateHookVersions.');
            }
            if (hookId !== null && hookId !== undefined) {
                localVarQueryParameter['hook_id'] = hookId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'hook_name': hookName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举私有hook（ListPrivateHooks）
         * 
         * 列举当前局点下用户所有的私有hook。
         * 
         *   * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir的数量须一致，否则返回400。若未给予sort_key和sort_dir，则默认按照创建时间降序排序。
         *   * 若当前用户没有任何私有hook，则返回空list。
         *   * 具体返回的信息见ListPrivateHooksResponseBody。
         *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivateHooks(listPrivateHooksRequest?: ListPrivateHooksRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-hooks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let sortKey;
            
            let sortDir;
            
            let marker;
            
            let limit;

            if (listPrivateHooksRequest !== null && listPrivateHooksRequest !== undefined) {
                if (listPrivateHooksRequest instanceof ListPrivateHooksRequest) {
                    clientRequestId = listPrivateHooksRequest.clientRequestId;
                    sortKey = listPrivateHooksRequest.sortKey;
                    sortDir = listPrivateHooksRequest.sortDir;
                    marker = listPrivateHooksRequest.marker;
                    limit = listPrivateHooksRequest.limit;
                } else {
                    clientRequestId = listPrivateHooksRequest['Client-Request-Id'];
                    sortKey = listPrivateHooksRequest['sort_key'];
                    sortDir = listPrivateHooksRequest['sort_dir'];
                    marker = listPrivateHooksRequest['marker'];
                    limit = listPrivateHooksRequest['limit'];
                }
            }

        
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取私有hook元数据（ShowPrivateHookMetadata）
         * 
         * 获取某个私有hook的元数据信息
         * 
         *   * 具体返回的信息见ShowPrivateHookMetadataResponseBody，若想查看私有hook下全部版本，请调用ListPrivateHookVersions。
         *   * 若hook_name和hook_id同时存在，则资源编排服务会检查两个是否匹配，如果不匹配则会返回400。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateHookMetadata(showPrivateHookMetadataRequest?: ShowPrivateHookMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-hooks/{hook_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let hookName;
            
            let hookId;

            if (showPrivateHookMetadataRequest !== null && showPrivateHookMetadataRequest !== undefined) {
                if (showPrivateHookMetadataRequest instanceof ShowPrivateHookMetadataRequest) {
                    clientRequestId = showPrivateHookMetadataRequest.clientRequestId;
                    hookName = showPrivateHookMetadataRequest.hookName;
                    hookId = showPrivateHookMetadataRequest.hookId;
                } else {
                    clientRequestId = showPrivateHookMetadataRequest['Client-Request-Id'];
                    hookName = showPrivateHookMetadataRequest['hook_name'];
                    hookId = showPrivateHookMetadataRequest['hook_id'];
                }
            }

        
            if (hookName === null || hookName === undefined) {
            throw new RequiredError('hookName','Required parameter hookName was null or undefined when calling showPrivateHookMetadata.');
            }
            if (hookId !== null && hookId !== undefined) {
                localVarQueryParameter['hook_id'] = hookId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'hook_name': hookName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取私有hook版本的元数据（ShowPrivateHookVersionMetadata）
         * 
         * 获取当前私有hook对应版本的元数据信息
         * 
         *   * 具体返回的信息见ShowPrivateHookVersionMetadataResponseBody。
         *   * 如果hook_name和hook_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateHookVersionMetadata(showPrivateHookVersionMetadataRequest?: ShowPrivateHookVersionMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-hooks/{hook_name}/versions/{hook_version}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let hookName;
            
            let hookVersion;
            
            let hookId;

            if (showPrivateHookVersionMetadataRequest !== null && showPrivateHookVersionMetadataRequest !== undefined) {
                if (showPrivateHookVersionMetadataRequest instanceof ShowPrivateHookVersionMetadataRequest) {
                    clientRequestId = showPrivateHookVersionMetadataRequest.clientRequestId;
                    hookName = showPrivateHookVersionMetadataRequest.hookName;
                    hookVersion = showPrivateHookVersionMetadataRequest.hookVersion;
                    hookId = showPrivateHookVersionMetadataRequest.hookId;
                } else {
                    clientRequestId = showPrivateHookVersionMetadataRequest['Client-Request-Id'];
                    hookName = showPrivateHookVersionMetadataRequest['hook_name'];
                    hookVersion = showPrivateHookVersionMetadataRequest['hook_version'];
                    hookId = showPrivateHookVersionMetadataRequest['hook_id'];
                }
            }

        
            if (hookName === null || hookName === undefined) {
            throw new RequiredError('hookName','Required parameter hookName was null or undefined when calling showPrivateHookVersionMetadata.');
            }
            if (hookVersion === null || hookVersion === undefined) {
            throw new RequiredError('hookVersion','Required parameter hookVersion was null or undefined when calling showPrivateHookVersionMetadata.');
            }
            if (hookId !== null && hookId !== undefined) {
                localVarQueryParameter['hook_id'] = hookId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'hook_name': hookName,'hook_version': hookVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取私有hook版本策略（ShowPrivateHookVersionPolicy）
         * 
         * 获取指定私有hook对应版本的策略。
         * 
         *   * 如果获取成功，则以临时重定向形式返回私有hook版本策略下载链接（OBS Pre Signed地址，有效期为5分钟），大多数的客户端会进行自动重定向并下载私有hook版本策略。
         *   * 如果未进行自动重定向，请参考HTTP的重定向规则获取私有hook版本策略下载链接，手动下载私有hook版本策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateHookVersionPolicy(showPrivateHookVersionPolicyRequest?: ShowPrivateHookVersionPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-hooks/{hook_name}/versions/{hook_version}/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let hookName;
            
            let hookVersion;
            
            let hookId;

            if (showPrivateHookVersionPolicyRequest !== null && showPrivateHookVersionPolicyRequest !== undefined) {
                if (showPrivateHookVersionPolicyRequest instanceof ShowPrivateHookVersionPolicyRequest) {
                    clientRequestId = showPrivateHookVersionPolicyRequest.clientRequestId;
                    hookName = showPrivateHookVersionPolicyRequest.hookName;
                    hookVersion = showPrivateHookVersionPolicyRequest.hookVersion;
                    hookId = showPrivateHookVersionPolicyRequest.hookId;
                } else {
                    clientRequestId = showPrivateHookVersionPolicyRequest['Client-Request-Id'];
                    hookName = showPrivateHookVersionPolicyRequest['hook_name'];
                    hookVersion = showPrivateHookVersionPolicyRequest['hook_version'];
                    hookId = showPrivateHookVersionPolicyRequest['hook_id'];
                }
            }

        
            if (hookName === null || hookName === undefined) {
            throw new RequiredError('hookName','Required parameter hookName was null or undefined when calling showPrivateHookVersionPolicy.');
            }
            if (hookVersion === null || hookVersion === undefined) {
            throw new RequiredError('hookVersion','Required parameter hookVersion was null or undefined when calling showPrivateHookVersionPolicy.');
            }
            if (hookId !== null && hookId !== undefined) {
                localVarQueryParameter['hook_id'] = hookId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'hook_name': hookName,'hook_version': hookVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新私有hook元数据（UpdatePrivateHookMetadata）
         * 
         * 更新当前私有hook的元数据信息
         * 
         *   * 目前支持更新私有hook的描述、默认版本、配置。
         *   * 如果需要创建新的版本，请调用CreatePrivateHookVersion。
         *   * 更新为增量更新，即如果某个参数不提供，则保持原始值。
         *   * 如果请求中没有需要被更新的参数（如请求中没有任何内容，或仅有hook_id），则返回400。注意：即使更新原始值和目标值一致也被认为是有效更新
         *   * 更新后私有hook的更新时间（update_time）也会被更新
         *   * 若hook_name和hook_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePrivateHookMetadata(updatePrivateHookMetadataRequest?: UpdatePrivateHookMetadataRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/private-hooks/{hook_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let hookName;

            if (updatePrivateHookMetadataRequest !== null && updatePrivateHookMetadataRequest !== undefined) {
                if (updatePrivateHookMetadataRequest instanceof UpdatePrivateHookMetadataRequest) {
                    clientRequestId = updatePrivateHookMetadataRequest.clientRequestId;
                    hookName = updatePrivateHookMetadataRequest.hookName;
                    body = updatePrivateHookMetadataRequest.body
                } else {
                    clientRequestId = updatePrivateHookMetadataRequest['Client-Request-Id'];
                    hookName = updatePrivateHookMetadataRequest['hook_name'];
                    body = updatePrivateHookMetadataRequest['body'];
                }
            }

        
            if (hookName === null || hookName === undefined) {
            throw new RequiredError('hookName','Required parameter hookName was null or undefined when calling updatePrivateHookMetadata.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'hook_name': hookName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建私有模块（CreatePrivateModule）
         * 
         * 创建一个空的私有模块。如果用户给予了module_version与module_uri，则在创建私有模块的同时，在私有模块下创建一个私有模块版本。
         *   * 模块允许用户将可复用的代码编辑在一起供模块使用。
         *   * 如果同名私有模块在当前账户中已经存在，则会返回失败。
         *   * 版本号遵循语义化版本号（Semantic Version），为用户自定义。
         *   * 资源编排服务只会对模块进行浅校验，如文件大小、是否可以解压、文件数量等。并不会深度校验，即不会做语法类校验。
         * 
         * 以HCL格式的模板为例，模板中引用私有模块的语法如下：
         * &#x60;&#x60;&#x60;
         * module \&quot;my_hello_word_module\&quot; {
         *   source &#x3D; \&quot;rf://rfs.{region_id}.myhuaweicloud.com/private/{domain_id}/{module_name}?version&#x3D;&#x3D;{module_version}\&quot;
         * }
         * &#x60;&#x60;&#x60;
         * 
         * 以JSON格式的模板为例，模板中引用私有模块的语法如下：
         * &#x60;&#x60;&#x60;
         * {
         *   \&quot;module\&quot;: {
         *     \&quot;my_hello_word_module\&quot;: {
         *       \&quot;source\&quot;: \&quot;rf://rfs.{region_id}.myhuaweicloud.com/private/{domain_id}/{module_name}?version&#x3D;&#x3D;{module_version}\&quot;
         *     }
         *   }
         * }
         * &#x60;&#x60;&#x60;
         * 对应上述两个例子中的模块链接（source字段的内容）可以调用ShowPrivateModuleVersionMetadata返回的module_source字段中获取
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrivateModule(createPrivateModuleRequest?: CreatePrivateModuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-modules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;

            if (createPrivateModuleRequest !== null && createPrivateModuleRequest !== undefined) {
                if (createPrivateModuleRequest instanceof CreatePrivateModuleRequest) {
                    clientRequestId = createPrivateModuleRequest.clientRequestId;
                    body = createPrivateModuleRequest.body
                } else {
                    clientRequestId = createPrivateModuleRequest['Client-Request-Id'];
                    body = createPrivateModuleRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建私有模块版本（CreatePrivateModuleVersion）
         * 
         * 创建新的私有模块版本
         * 
         *   * 模块的版本号需遵循语义化版本号（Semantic Version），为用户自定义。
         *   * 如果module_name和module_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         *   * 资源编排服务只会对模块进行浅校验，如文件大小、是否可以解压、文件数量等。并不会深度校验，即不会做语法类校验。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrivateModuleVersion(createPrivateModuleVersionRequest?: CreatePrivateModuleVersionRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-modules/{module_name}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let moduleName;

            if (createPrivateModuleVersionRequest !== null && createPrivateModuleVersionRequest !== undefined) {
                if (createPrivateModuleVersionRequest instanceof CreatePrivateModuleVersionRequest) {
                    clientRequestId = createPrivateModuleVersionRequest.clientRequestId;
                    moduleName = createPrivateModuleVersionRequest.moduleName;
                    body = createPrivateModuleVersionRequest.body
                } else {
                    clientRequestId = createPrivateModuleVersionRequest['Client-Request-Id'];
                    moduleName = createPrivateModuleVersionRequest['module_name'];
                    body = createPrivateModuleVersionRequest['body'];
                }
            }

        
            if (moduleName === null || moduleName === undefined) {
            throw new RequiredError('moduleName','Required parameter moduleName was null or undefined when calling createPrivateModuleVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'module_name': moduleName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除私有模块（DeletePrivateModule）
         * 
         * 删除某个私有模块以及私有模块下的全部模块版本
         * 
         *   * 如果module_name和module_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         * 
         * **请谨慎操作，删除私有模块将会删除该私有模块下的所有的模块版本。**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePrivateModule(deletePrivateModuleRequest?: DeletePrivateModuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/private-modules/{module_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let moduleName;
            
            let moduleId;

            if (deletePrivateModuleRequest !== null && deletePrivateModuleRequest !== undefined) {
                if (deletePrivateModuleRequest instanceof DeletePrivateModuleRequest) {
                    clientRequestId = deletePrivateModuleRequest.clientRequestId;
                    moduleName = deletePrivateModuleRequest.moduleName;
                    moduleId = deletePrivateModuleRequest.moduleId;
                } else {
                    clientRequestId = deletePrivateModuleRequest['Client-Request-Id'];
                    moduleName = deletePrivateModuleRequest['module_name'];
                    moduleId = deletePrivateModuleRequest['module_id'];
                }
            }

        
            if (moduleName === null || moduleName === undefined) {
            throw new RequiredError('moduleName','Required parameter moduleName was null or undefined when calling deletePrivateModule.');
            }
            if (moduleId !== null && moduleId !== undefined) {
                localVarQueryParameter['module_id'] = moduleId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'module_name': moduleName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除私有模块版本（DeletePrivateModuleVersion）
         * 
         * 删除某个私有模块版本
         * 
         *   * 如果module_name和module_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         * 
         * **请谨慎操作**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePrivateModuleVersion(deletePrivateModuleVersionRequest?: DeletePrivateModuleVersionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/private-modules/{module_name}/versions/{module_version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let moduleName;
            
            let moduleVersion;
            
            let moduleId;

            if (deletePrivateModuleVersionRequest !== null && deletePrivateModuleVersionRequest !== undefined) {
                if (deletePrivateModuleVersionRequest instanceof DeletePrivateModuleVersionRequest) {
                    clientRequestId = deletePrivateModuleVersionRequest.clientRequestId;
                    moduleName = deletePrivateModuleVersionRequest.moduleName;
                    moduleVersion = deletePrivateModuleVersionRequest.moduleVersion;
                    moduleId = deletePrivateModuleVersionRequest.moduleId;
                } else {
                    clientRequestId = deletePrivateModuleVersionRequest['Client-Request-Id'];
                    moduleName = deletePrivateModuleVersionRequest['module_name'];
                    moduleVersion = deletePrivateModuleVersionRequest['module_version'];
                    moduleId = deletePrivateModuleVersionRequest['module_id'];
                }
            }

        
            if (moduleName === null || moduleName === undefined) {
            throw new RequiredError('moduleName','Required parameter moduleName was null or undefined when calling deletePrivateModuleVersion.');
            }
            if (moduleVersion === null || moduleVersion === undefined) {
            throw new RequiredError('moduleVersion','Required parameter moduleVersion was null or undefined when calling deletePrivateModuleVersion.');
            }
            if (moduleId !== null && moduleId !== undefined) {
                localVarQueryParameter['module_id'] = moduleId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'module_name': moduleName,'module_version': moduleVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举私有模块版本（ListPrivateModuleVersions）
         * 
         * 列举所选择的私有模块中所有的模块版本信息。
         * 
         *   * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
         *   * 如果module_name和module_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         *   * 如果模块不存在则返回404。
         *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * ListPrivateModuleVersions返回的只有摘要信息（具体摘要信息见ListPrivateModuleVersionsResponseBody），如果用户需要详细的模块版本元数据请调用ShowPrivateModuleVersionMetadata
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivateModuleVersions(listPrivateModuleVersionsRequest?: ListPrivateModuleVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-modules/{module_name}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let moduleName;
            
            let moduleId;
            
            let sortKey;
            
            let sortDir;
            
            let marker;
            
            let limit;

            if (listPrivateModuleVersionsRequest !== null && listPrivateModuleVersionsRequest !== undefined) {
                if (listPrivateModuleVersionsRequest instanceof ListPrivateModuleVersionsRequest) {
                    clientRequestId = listPrivateModuleVersionsRequest.clientRequestId;
                    moduleName = listPrivateModuleVersionsRequest.moduleName;
                    moduleId = listPrivateModuleVersionsRequest.moduleId;
                    sortKey = listPrivateModuleVersionsRequest.sortKey;
                    sortDir = listPrivateModuleVersionsRequest.sortDir;
                    marker = listPrivateModuleVersionsRequest.marker;
                    limit = listPrivateModuleVersionsRequest.limit;
                } else {
                    clientRequestId = listPrivateModuleVersionsRequest['Client-Request-Id'];
                    moduleName = listPrivateModuleVersionsRequest['module_name'];
                    moduleId = listPrivateModuleVersionsRequest['module_id'];
                    sortKey = listPrivateModuleVersionsRequest['sort_key'];
                    sortDir = listPrivateModuleVersionsRequest['sort_dir'];
                    marker = listPrivateModuleVersionsRequest['marker'];
                    limit = listPrivateModuleVersionsRequest['limit'];
                }
            }

        
            if (moduleName === null || moduleName === undefined) {
            throw new RequiredError('moduleName','Required parameter moduleName was null or undefined when calling listPrivateModuleVersions.');
            }
            if (moduleId !== null && moduleId !== undefined) {
                localVarQueryParameter['module_id'] = moduleId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'module_name': moduleName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举私有模块（ListPrivateModules）
         * 
         * 列举当前局点下用户所有的私有模块。
         * 
         *   * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
         *   * 如果当前用户下没有任何私有模块，则返回空list。
         *   * 如果需要某个模块的所有版本信息，可以调用ListModuleVersions。
         *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * ListPrivateModules返回的只有摘要信息（具体摘要信息见ListPrivateModulesResponseBody），如果用户需要详细的模块元数据请调用ShowPrivateModuleMetadata
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivateModules(listPrivateModulesRequest?: ListPrivateModulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-modules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let sortKey;
            
            let sortDir;
            
            let marker;
            
            let limit;

            if (listPrivateModulesRequest !== null && listPrivateModulesRequest !== undefined) {
                if (listPrivateModulesRequest instanceof ListPrivateModulesRequest) {
                    clientRequestId = listPrivateModulesRequest.clientRequestId;
                    sortKey = listPrivateModulesRequest.sortKey;
                    sortDir = listPrivateModulesRequest.sortDir;
                    marker = listPrivateModulesRequest.marker;
                    limit = listPrivateModulesRequest.limit;
                } else {
                    clientRequestId = listPrivateModulesRequest['Client-Request-Id'];
                    sortKey = listPrivateModulesRequest['sort_key'];
                    sortDir = listPrivateModulesRequest['sort_dir'];
                    marker = listPrivateModulesRequest['marker'];
                    limit = listPrivateModulesRequest['limit'];
                }
            }

        
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取私有模块元数据（ShowPrivateModuleMetadata）
         * 
         * 获取当前私有模块的元数据信息
         * 
         *   * 具体返回的信息见ShowPrivateModuleMetadataResponseBody，如果想查看私有模块下全部模块版本，请调用ListPrivateModuleVersions。
         *   * 如果module_name和module_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateModuleMetadata(showPrivateModuleMetadataRequest?: ShowPrivateModuleMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-modules/{module_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let moduleName;
            
            let moduleId;

            if (showPrivateModuleMetadataRequest !== null && showPrivateModuleMetadataRequest !== undefined) {
                if (showPrivateModuleMetadataRequest instanceof ShowPrivateModuleMetadataRequest) {
                    clientRequestId = showPrivateModuleMetadataRequest.clientRequestId;
                    moduleName = showPrivateModuleMetadataRequest.moduleName;
                    moduleId = showPrivateModuleMetadataRequest.moduleId;
                } else {
                    clientRequestId = showPrivateModuleMetadataRequest['Client-Request-Id'];
                    moduleName = showPrivateModuleMetadataRequest['module_name'];
                    moduleId = showPrivateModuleMetadataRequest['module_id'];
                }
            }

        
            if (moduleName === null || moduleName === undefined) {
            throw new RequiredError('moduleName','Required parameter moduleName was null or undefined when calling showPrivateModuleMetadata.');
            }
            if (moduleId !== null && moduleId !== undefined) {
                localVarQueryParameter['module_id'] = moduleId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'module_name': moduleName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取私有模块版本内容（ShowPrivateModuleVersionContent）
         * 
         * 获取指定私有模块对应版本的内容。
         * 
         *   * 如果获取成功，则以临时重定向形式返回模块下载链接（OBS Pre Signed地址，有效期为5分钟），大多数的客户端会进行自动重定向并下载模块；
         *   * 如果未进行自动重定向，请参考HTTP的重定向规则获取模块下载链接，手动下载模块。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateModuleVersionContent(showPrivateModuleVersionContentRequest?: ShowPrivateModuleVersionContentRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-modules/{module_name}/versions/{module_version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let moduleName;
            
            let moduleVersion;
            
            let moduleId;

            if (showPrivateModuleVersionContentRequest !== null && showPrivateModuleVersionContentRequest !== undefined) {
                if (showPrivateModuleVersionContentRequest instanceof ShowPrivateModuleVersionContentRequest) {
                    clientRequestId = showPrivateModuleVersionContentRequest.clientRequestId;
                    moduleName = showPrivateModuleVersionContentRequest.moduleName;
                    moduleVersion = showPrivateModuleVersionContentRequest.moduleVersion;
                    moduleId = showPrivateModuleVersionContentRequest.moduleId;
                } else {
                    clientRequestId = showPrivateModuleVersionContentRequest['Client-Request-Id'];
                    moduleName = showPrivateModuleVersionContentRequest['module_name'];
                    moduleVersion = showPrivateModuleVersionContentRequest['module_version'];
                    moduleId = showPrivateModuleVersionContentRequest['module_id'];
                }
            }

        
            if (moduleName === null || moduleName === undefined) {
            throw new RequiredError('moduleName','Required parameter moduleName was null or undefined when calling showPrivateModuleVersionContent.');
            }
            if (moduleVersion === null || moduleVersion === undefined) {
            throw new RequiredError('moduleVersion','Required parameter moduleVersion was null or undefined when calling showPrivateModuleVersionContent.');
            }
            if (moduleId !== null && moduleId !== undefined) {
                localVarQueryParameter['module_id'] = moduleId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'module_name': moduleName,'module_version': moduleVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取私有模块版本元数据（ShowPrivateModuleVersionMetadata）
         * 
         * 获取当前私有模块对应的版本的元数据信息
         * 
         *   * 具体返回的信息见ShowPrivateModuleVersionMetadataResponseBody。
         *   * 如果module_name和module_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateModuleVersionMetadata(showPrivateModuleVersionMetadataRequest?: ShowPrivateModuleVersionMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-modules/{module_name}/versions/{module_version}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let moduleName;
            
            let moduleVersion;
            
            let moduleId;

            if (showPrivateModuleVersionMetadataRequest !== null && showPrivateModuleVersionMetadataRequest !== undefined) {
                if (showPrivateModuleVersionMetadataRequest instanceof ShowPrivateModuleVersionMetadataRequest) {
                    clientRequestId = showPrivateModuleVersionMetadataRequest.clientRequestId;
                    moduleName = showPrivateModuleVersionMetadataRequest.moduleName;
                    moduleVersion = showPrivateModuleVersionMetadataRequest.moduleVersion;
                    moduleId = showPrivateModuleVersionMetadataRequest.moduleId;
                } else {
                    clientRequestId = showPrivateModuleVersionMetadataRequest['Client-Request-Id'];
                    moduleName = showPrivateModuleVersionMetadataRequest['module_name'];
                    moduleVersion = showPrivateModuleVersionMetadataRequest['module_version'];
                    moduleId = showPrivateModuleVersionMetadataRequest['module_id'];
                }
            }

        
            if (moduleName === null || moduleName === undefined) {
            throw new RequiredError('moduleName','Required parameter moduleName was null or undefined when calling showPrivateModuleVersionMetadata.');
            }
            if (moduleVersion === null || moduleVersion === undefined) {
            throw new RequiredError('moduleVersion','Required parameter moduleVersion was null or undefined when calling showPrivateModuleVersionMetadata.');
            }
            if (moduleId !== null && moduleId !== undefined) {
                localVarQueryParameter['module_id'] = moduleId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'module_name': moduleName,'module_version': moduleVersion, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新私有模块元数据（UpdatePrivateModuleMetadata）
         * 
         * 更新当前私有模块的元数据信息
         * 
         *   * 目前只支持更新私有模块的描述
         *   * 如果需要创建新的版本，请调用CreatePrivateModuleVersion
         *   * 更新为增量更新，即如果某个参数不提供，则保持原始值
         *   * 如果请求中没有需要被更新的参数，则返回400。注意：即使更新原始值和目标值一致也被认为是有效更新
         *   * 更新后私有模块的更新时间（update_time）也会被更新
         *   * 如果module_name和module_id同时存在，则资源编排服务会检查是否两个匹配，如果不匹配则会返回400。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePrivateModuleMetadata(updatePrivateModuleMetadataRequest?: UpdatePrivateModuleMetadataRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/private-modules/{module_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let moduleName;

            if (updatePrivateModuleMetadataRequest !== null && updatePrivateModuleMetadataRequest !== undefined) {
                if (updatePrivateModuleMetadataRequest instanceof UpdatePrivateModuleMetadataRequest) {
                    clientRequestId = updatePrivateModuleMetadataRequest.clientRequestId;
                    moduleName = updatePrivateModuleMetadataRequest.moduleName;
                    body = updatePrivateModuleMetadataRequest.body
                } else {
                    clientRequestId = updatePrivateModuleMetadataRequest['Client-Request-Id'];
                    moduleName = updatePrivateModuleMetadataRequest['module_name'];
                    body = updatePrivateModuleMetadataRequest['body'];
                }
            }

        
            if (moduleName === null || moduleName === undefined) {
            throw new RequiredError('moduleName','Required parameter moduleName was null or undefined when calling updatePrivateModuleMetadata.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'module_name': moduleName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 继续部署资源栈（ContinueDeployStack）
         * 
         * 此API用于继续部署一个已有的资源栈
         * 
         * * 如果资源栈当前可以继续部署，即处于&#x60;DEPLOYMENT_FAILED&#x60;，则返回202与对应生成的deploymentId，否则将不允许继续部署并返回相应的错误码
         * 
         * * 继续部署操作依然有可能部署失败，用户可以从ListStackEvents获取对应的log，解决后可再次调用此API触发继续部署
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        continueDeployStack(continueDeployStackRequest?: ContinueDeployStackRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stacks/{stack_name}/continuations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;

            if (continueDeployStackRequest !== null && continueDeployStackRequest !== undefined) {
                if (continueDeployStackRequest instanceof ContinueDeployStackRequest) {
                    clientRequestId = continueDeployStackRequest.clientRequestId;
                    projectId = continueDeployStackRequest.projectId;
                    stackName = continueDeployStackRequest.stackName;
                    body = continueDeployStackRequest.body
                } else {
                    clientRequestId = continueDeployStackRequest['Client-Request-Id'];
                    projectId = continueDeployStackRequest['project_id'];
                    stackName = continueDeployStackRequest['stack_name'];
                    body = continueDeployStackRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling continueDeployStack.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling continueDeployStack.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 继续回滚资源栈（ContinueRollbackStack）
         * 
         * 此API用于继续回滚一个已有的资源栈
         * 
         * 如果资源栈开启了自动回滚，在部署失败的时候则会自动回滚。但是自动回滚依然有可能失败，用户可以根据错误信息修复后，调用ContinueRollbackStack触发继续回滚，即重试回滚
         * 
         * * 如果资源栈当前可以回滚，即处于&#x60;ROLLBACK_FAILED&#x60;，则返回202与对应生成的deploymentId，否则将不允许回滚并返回响应的错误码
         * * 继续回滚也有可能会回滚失败。如果失败，用户可以从ListStackEvents获取对应的log，解决后可再次调用ContinueRollbackStack去继续触发回滚
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        continueRollbackStack(continueRollbackStackRequest?: ContinueRollbackStackRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stacks/{stack_name}/rollbacks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;

            if (continueRollbackStackRequest !== null && continueRollbackStackRequest !== undefined) {
                if (continueRollbackStackRequest instanceof ContinueRollbackStackRequest) {
                    clientRequestId = continueRollbackStackRequest.clientRequestId;
                    projectId = continueRollbackStackRequest.projectId;
                    stackName = continueRollbackStackRequest.stackName;
                    body = continueRollbackStackRequest.body
                } else {
                    clientRequestId = continueRollbackStackRequest['Client-Request-Id'];
                    projectId = continueRollbackStackRequest['project_id'];
                    stackName = continueRollbackStackRequest['stack_name'];
                    body = continueRollbackStackRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling continueRollbackStack.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling continueRollbackStack.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * CreateStack用于生成一个资源栈
         * 
         * * 当请求中不含有模板（template）、参数（vars）等信息，将生成一个无任何资源的空资源栈，返回资源栈ID（stack_id）
         * * 当请求中携带了模板（template）、参数（vars）等信息，则会同时创建并部署资源栈，返回资源栈ID（stack_id）和部署ID（deployment_id）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStack(createStackRequest?: CreateStackRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stacks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let projectId;

            if (createStackRequest !== null && createStackRequest !== undefined) {
                if (createStackRequest instanceof CreateStackRequest) {
                    clientRequestId = createStackRequest.clientRequestId;
                    projectId = createStackRequest.projectId;
                    body = createStackRequest.body
                } else {
                    clientRequestId = createStackRequest['Client-Request-Id'];
                    projectId = createStackRequest['project_id'];
                    body = createStackRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createStack.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源栈（DeleteStack）
         * 
         * 此API用于删除某个资源栈
         * **请谨慎操作，删除资源栈将会删除与该资源栈相关的所有数据和资源，如：执行计划、资源栈事件、资源栈输出、资源等。**
         * 
         * * 此API会触发删除资源栈，并以最终一致性删除所有数据（包括通过资源栈模板创建以及通过Import模块导入的已有资源），用户可以调用GetStackMetadata或ListStacks跟踪资源栈删除情况
         * * 如果资源栈状态处于非终态（状态以&#x60;IN_PROGRESS&#x60;结尾）状态时，则不允许删除。包括但不限于以下状态：
         *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
         *   * 正在删除（DELETION_IN_PROGRESS）
         *   * 正在回滚（ROLLBACK_IN_PROGRESS）
         * * 如果资源栈开启了删除保护，则不允许删除。用户可调用GetStackMetadata，查看返回中的&#x60;enable_deletion_protection&#x60;字段判断删除保护是否开启。用户可通过调用UpdateStack关闭删除保护。
         * * 如果资源栈删除失败，可以根据StackEvents提示信息修复当前模板中的错误后，部署成功后再次删除资源栈。有以下两种方式触发部署：
         *   * 调用CreateExecutionPlan创建执行计划，执行计划创建成功后调用ApplyExecutionPlan部署资源栈。
         *   * 调用DeployStack部署资源栈
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStack(deleteStackRequest?: DeleteStackRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/stacks/{stack_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;

            if (deleteStackRequest !== null && deleteStackRequest !== undefined) {
                if (deleteStackRequest instanceof DeleteStackRequest) {
                    clientRequestId = deleteStackRequest.clientRequestId;
                    projectId = deleteStackRequest.projectId;
                    stackName = deleteStackRequest.stackName;
                    stackId = deleteStackRequest.stackId;
                } else {
                    clientRequestId = deleteStackRequest['Client-Request-Id'];
                    projectId = deleteStackRequest['project_id'];
                    stackName = deleteStackRequest['stack_name'];
                    stackId = deleteStackRequest['stack_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteStack.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling deleteStack.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 条件删除资源栈（DeleteStackEnhanced）
         * 
         * 此API用于删除某个资源栈，可以选择是否保留资源。
         * **请谨慎操作，删除资源栈将默认删除与该资源栈相关的所有数据，如：执行计划、资源栈事件、资源栈输出、资源等。**
         * **如果希望删除资源栈保留资源，可以在请求中设置&#x60;retain_all_resources&#x60;对资源进行保留。**
         * 
         * * 此API会触发删除资源栈，并以最终一致性删除数据，用户可以调用GetStackMetadata或ListStacks跟踪资源栈删除情况。当删除完成后，被删除资源栈将不会在上述API中返回。
         * * 如果资源栈状态处于非终态（状态以&#x60;IN_PROGRESS&#x60;结尾）状态时，则不允许删除。包括但不限于以下状态：
         *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
         *   * 正在删除（DELETION_IN_PROGRESS）
         *   * 正在回滚（ROLLBACK_IN_PROGRESS）
         * 
         * * 如果资源栈开启了删除保护，则不允许删除。用户可调用GetStackMetadata，查看返回中的&#x60;enable_deletion_protection&#x60;字段判断删除保护是否开启。用户可通过调用UpdateStack关闭删除保护。
         * * 如果资源栈删除失败，可以根据StackEvents提示信息修复当前模板中的错误后，部署成功后再次删除资源栈。有以下两种方式触发部署：
         *   * 调用CreateExecutionPlan创建执行计划，执行计划创建成功后调用ApplyExecutionPlan部署资源栈。
         *   * 调用DeployStack部署资源栈。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStackEnhanced(deleteStackEnhancedRequest?: DeleteStackEnhancedRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stacks/{stack_name}/deletion",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;

            if (deleteStackEnhancedRequest !== null && deleteStackEnhancedRequest !== undefined) {
                if (deleteStackEnhancedRequest instanceof DeleteStackEnhancedRequest) {
                    clientRequestId = deleteStackEnhancedRequest.clientRequestId;
                    projectId = deleteStackEnhancedRequest.projectId;
                    stackName = deleteStackEnhancedRequest.stackName;
                    body = deleteStackEnhancedRequest.body
                } else {
                    clientRequestId = deleteStackEnhancedRequest['Client-Request-Id'];
                    projectId = deleteStackEnhancedRequest['project_id'];
                    stackName = deleteStackEnhancedRequest['stack_name'];
                    body = deleteStackEnhancedRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteStackEnhanced.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling deleteStackEnhanced.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 部署资源栈（DeployStack）
         * 
         * 此API用于部署一个已有的资源栈
         * 
         * * 用户可以使用此API更新模板、参数等并触发一个新的部署
         * 
         * * 此API会直接触发部署，如果用户希望先确认部署会发生的时间，请使用执行计划，即使用CreateExecutionPlan以创建执行计划、使用GetExecutionPlan以获取执行计划
         * 
         * * 此API为全量API，即用户每次部署都需要给予所想要使用的template、vars的全量
         * 
         * * 部署资源栈时，用户将模板中定义的资源删除（包括Import定义的资源），会触发实际资源的删除。建议通过CreateExecutionPlan查看模板修改后资源栈的部署行为，以避免误操作非预期资源
         * 
         * * 当触发的部署失败时，如果资源栈开启了自动回滚，会触发自动回滚的流程，否则就会停留在部署失败时的状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deployStack(deployStackRequest?: DeployStackRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/stacks/{stack_name}/deployments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;

            if (deployStackRequest !== null && deployStackRequest !== undefined) {
                if (deployStackRequest instanceof DeployStackRequest) {
                    clientRequestId = deployStackRequest.clientRequestId;
                    projectId = deployStackRequest.projectId;
                    stackName = deployStackRequest.stackName;
                    body = deployStackRequest.body
                } else {
                    clientRequestId = deployStackRequest['Client-Request-Id'];
                    projectId = deployStackRequest['project_id'];
                    stackName = deployStackRequest['stack_name'];
                    body = deployStackRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deployStack.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling deployStack.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取资源栈元数据（GetStackMetadata）
         * 
         * 此API用于获取指定资源栈的元数据，包括资源栈ID、资源栈名称、资源栈描述、创建时间、更新时间、资源栈状态、委托授权等信息。
         * 
         * 具体信息见GetStackMetadataResponseBody。
         * 
         * 注：
         * 当资源栈状态处于非终态（即以&#x60;IN_PROGRESS&#x60;结尾，详细见下方）状态时，资源栈的元数据信息处于转变阶段，可能为部署前的状态，也可能为部署后的状态。
         * 只有当资源栈状态处于终态（即以&#x60;COMPLETE&#x60;或&#x60;FAILED&#x60;结尾，详细见下方）时，资源栈的元数据信息才是部署后的状态
         * 
         * 非终态状态包括但不限于以下状态：
         *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
         *   * 正在回滚（ROLLBACK_IN_PROGRESS）
         *   * 正在删除（DELETION_IN_PROGRESS）
         * 
         * 终态状态包括但不限于以下状态：
         *   * 生成空资源栈完成（CREATION_COMPLETE）
         *   * 部署失败（DEPLOYMENT_FAILED）
         *   * 部署完成（DEPLOYMENT_COMPLETE）
         *   * 回滚失败（ROLLBACK_FAILED）
         *   * 回滚完成（ROLLBACK_COMPLETE）
         *   * 删除失败（DELETION_FAILED）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getStackMetadata(getStackMetadataRequest?: GetStackMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;

            if (getStackMetadataRequest !== null && getStackMetadataRequest !== undefined) {
                if (getStackMetadataRequest instanceof GetStackMetadataRequest) {
                    clientRequestId = getStackMetadataRequest.clientRequestId;
                    projectId = getStackMetadataRequest.projectId;
                    stackName = getStackMetadataRequest.stackName;
                    stackId = getStackMetadataRequest.stackId;
                } else {
                    clientRequestId = getStackMetadataRequest['Client-Request-Id'];
                    projectId = getStackMetadataRequest['project_id'];
                    stackName = getStackMetadataRequest['stack_name'];
                    stackId = getStackMetadataRequest['stack_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling getStackMetadata.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling getStackMetadata.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取资源栈模板（GetStackTemplate）
         * 
         * 此API用于获取资源栈最近一次部署终态使用的模板。
         * 
         * 注：
         * 当资源栈状态处于非终态（即以&#x60;IN_PROGRESS&#x60;结尾，详细见下方）状态时，资源栈处于转变阶段，此API获取资源栈上一次部署使用的模板。
         * 只有当资源栈状态处于终态（即以&#x60;COMPLETE&#x60;或&#x60;FAILED&#x60;结尾，详细见下方）时，此API获取当前最新一次部署使用的模板。CREATION_COMPLETE除外，此时资源栈没有模板，返回404，并提示模板不存在
         * 
         * 非终态状态包括但不限于以下状态：
         *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
         *   * 正在回滚（ROLLBACK_IN_PROGRESS）
         *   * 正在删除（DELETION_IN_PROGRESS）
         * 
         * 终态状态包括但不限于以下状态：
         *   * 生成空资源栈完成（CREATION_COMPLETE）
         *   * 部署失败（DEPLOYMENT_FAILED）
         *   * 部署完成（DEPLOYMENT_COMPLETE）
         *   * 回滚失败（ROLLBACK_FAILED）
         *   * 回滚完成（ROLLBACK_COMPLETE）
         *   * 删除失败（DELETION_FAILED）
         * 
         * 如果获取成功，则以临时重定向形式返回模板下载链接（OBS Pre Signed地址，有效期为5分钟），大多数的客户端会进行自动重定向并下载模板；
         * 如果未进行自动重定向，请参考HTTP的重定向规则获取模板下载链接，手动下载模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getStackTemplate(getStackTemplateRequest?: GetStackTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;
            
            let accessControlSourceIps;
            
            let accessControlSourceVpcIds;

            if (getStackTemplateRequest !== null && getStackTemplateRequest !== undefined) {
                if (getStackTemplateRequest instanceof GetStackTemplateRequest) {
                    clientRequestId = getStackTemplateRequest.clientRequestId;
                    projectId = getStackTemplateRequest.projectId;
                    stackName = getStackTemplateRequest.stackName;
                    stackId = getStackTemplateRequest.stackId;
                    accessControlSourceIps = getStackTemplateRequest.accessControlSourceIps;
                    accessControlSourceVpcIds = getStackTemplateRequest.accessControlSourceVpcIds;
                } else {
                    clientRequestId = getStackTemplateRequest['Client-Request-Id'];
                    projectId = getStackTemplateRequest['project_id'];
                    stackName = getStackTemplateRequest['stack_name'];
                    stackId = getStackTemplateRequest['stack_id'];
                    accessControlSourceIps = getStackTemplateRequest['access_control_source_ips'];
                    accessControlSourceVpcIds = getStackTemplateRequest['access_control_source_vpc_ids'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling getStackTemplate.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling getStackTemplate.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (accessControlSourceIps !== null && accessControlSourceIps !== undefined) {
                localVarQueryParameter['access_control_source_ips'] = accessControlSourceIps;
            }
            if (accessControlSourceVpcIds !== null && accessControlSourceVpcIds !== undefined) {
                localVarQueryParameter['access_control_source_vpc_ids'] = accessControlSourceVpcIds;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举资源栈事件（ListStackEvents）
         * 
         * 此API用于列举资源栈某一次或全部的部署事件
         * 
         * * 如果给予deployment_id，则会将deployment_id作为查询条件，返回对应某一次部署的资源栈事件；如果不给予deployment_id，则返回全量的资源栈事件
         * * 如果给定的deployment_id对应的部署不存在，则返回404
         * * 可以使用filter作为过滤器，过滤出指定事件类型（event_type）、资源类型（resource_type）、资源名称（resource_name）的资源栈事件
         * * 可以使用field选择数据应返回的属性，属性事件类型（event_type）不可配置，一定会返回，可选择的属性有逝去时间（elapsed_seconds）、事件消息（event_message）、 资源ID键（resource_id_key）、资源ID值（resource_id_value）、资源键（resource_key）、资源类型（resource_type）、资源名称（resource_name）和时间戳（timestamp）
         * * 事件返回将以时间降序排列
         * * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStackEvents(listStackEventsRequest?: ListStackEventsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;
            
            let deploymentId;
            
            let filter;
            
            let field;
            
            let marker;
            
            let limit;

            if (listStackEventsRequest !== null && listStackEventsRequest !== undefined) {
                if (listStackEventsRequest instanceof ListStackEventsRequest) {
                    clientRequestId = listStackEventsRequest.clientRequestId;
                    projectId = listStackEventsRequest.projectId;
                    stackName = listStackEventsRequest.stackName;
                    stackId = listStackEventsRequest.stackId;
                    deploymentId = listStackEventsRequest.deploymentId;
                    filter = listStackEventsRequest.filter;
                    field = listStackEventsRequest.field;
                    marker = listStackEventsRequest.marker;
                    limit = listStackEventsRequest.limit;
                } else {
                    clientRequestId = listStackEventsRequest['Client-Request-Id'];
                    projectId = listStackEventsRequest['project_id'];
                    stackName = listStackEventsRequest['stack_name'];
                    stackId = listStackEventsRequest['stack_id'];
                    deploymentId = listStackEventsRequest['deployment_id'];
                    filter = listStackEventsRequest['filter'];
                    field = listStackEventsRequest['field'];
                    marker = listStackEventsRequest['marker'];
                    limit = listStackEventsRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listStackEvents.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling listStackEvents.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (deploymentId !== null && deploymentId !== undefined) {
                localVarQueryParameter['deployment_id'] = deploymentId;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (field !== null && field !== undefined) {
                localVarQueryParameter['field'] = field;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举资源栈输出（ListStackOutputs）
         * 
         * 此API用于列举该资源栈的所有输出
         * 
         * 资源栈输出为用户在模板中定义的 output 语句块在部署结束后所产生的返回信息，用户可在部署结束后，调用此API获取其具体的输出信息
         * 
         * 当资源栈状态处于非终态（状态以&#x60;IN_PROGRESS&#x60;结尾）状态时，此API将返回空。非终态包括但不限于以下状态：
         *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
         *   * 正在删除（DELETION_IN_PROGRESS）
         *   * 正在回滚（ROLLBACK_IN_PROGRESS）
         * 
         * output为HCL官方定义的语法，其返回信息类似于常见编程语言中的返回值，详细定义请参考HCL官方的说明
         * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStackOutputs(listStackOutputsRequest?: ListStackOutputsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/outputs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;
            
            let marker;
            
            let limit;

            if (listStackOutputsRequest !== null && listStackOutputsRequest !== undefined) {
                if (listStackOutputsRequest instanceof ListStackOutputsRequest) {
                    clientRequestId = listStackOutputsRequest.clientRequestId;
                    projectId = listStackOutputsRequest.projectId;
                    stackName = listStackOutputsRequest.stackName;
                    stackId = listStackOutputsRequest.stackId;
                    marker = listStackOutputsRequest.marker;
                    limit = listStackOutputsRequest.limit;
                } else {
                    clientRequestId = listStackOutputsRequest['Client-Request-Id'];
                    projectId = listStackOutputsRequest['project_id'];
                    stackName = listStackOutputsRequest['stack_name'];
                    stackId = listStackOutputsRequest['stack_id'];
                    marker = listStackOutputsRequest['marker'];
                    limit = listStackOutputsRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listStackOutputs.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling listStackOutputs.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举资源栈资源（ListStackResources）
         * 
         * 此API用于列举资源栈中当前管理的所有资源的信息
         * 
         * 当资源栈处于非终态时，仅输出资源栈下资源的简要信息，包含逻辑资源名称（logical_resource_name），逻辑资源类型（logical_resource_type），物理资源id（physical_resource_id），物理资源名称（physical_resource_name），资源状态（status）等信息；当资源栈处于终态时，将额外输出具体信息，如资源属性（resource_attributes）
         * 
         * 非终态包括但不限于以下状态：
         *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
         *   * 正在删除（DELETION_IN_PROGRESS）
         *   * 正在回滚（ROLLBACK_IN_PROGRESS）
         * 
         * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStackResources(listStackResourcesRequest?: ListStackResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks/{stack_name}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;
            
            let stackId;
            
            let marker;
            
            let limit;

            if (listStackResourcesRequest !== null && listStackResourcesRequest !== undefined) {
                if (listStackResourcesRequest instanceof ListStackResourcesRequest) {
                    clientRequestId = listStackResourcesRequest.clientRequestId;
                    projectId = listStackResourcesRequest.projectId;
                    stackName = listStackResourcesRequest.stackName;
                    stackId = listStackResourcesRequest.stackId;
                    marker = listStackResourcesRequest.marker;
                    limit = listStackResourcesRequest.limit;
                } else {
                    clientRequestId = listStackResourcesRequest['Client-Request-Id'];
                    projectId = listStackResourcesRequest['project_id'];
                    stackName = listStackResourcesRequest['stack_name'];
                    stackId = listStackResourcesRequest['stack_id'];
                    marker = listStackResourcesRequest['marker'];
                    limit = listStackResourcesRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listStackResources.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling listStackResources.');
            }
            if (stackId !== null && stackId !== undefined) {
                localVarQueryParameter['stack_id'] = stackId;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举资源栈（ListStacks）
         * 
         * 此API用于列举当前局点下用户所有的资源栈
         * 
         *   * 默认按照生成时间降序排序，最新生成的在最前
         *   * 如果没有任何资源栈，则返回空list
         *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * ListStacks返回的只有摘要信息（具体摘要信息见ListStacksResponseBody），如果用户需要详细的资源栈元数据请调用GetStackMetadata
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStacks(listStacksRequest?: ListStacksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/stacks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let marker;
            
            let limit;

            if (listStacksRequest !== null && listStacksRequest !== undefined) {
                if (listStacksRequest instanceof ListStacksRequest) {
                    clientRequestId = listStacksRequest.clientRequestId;
                    projectId = listStacksRequest.projectId;
                    marker = listStacksRequest.marker;
                    limit = listStacksRequest.limit;
                } else {
                    clientRequestId = listStacksRequest['Client-Request-Id'];
                    projectId = listStacksRequest['project_id'];
                    marker = listStacksRequest['marker'];
                    limit = listStacksRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listStacks.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新资源栈（UpdateStack）
         * 
         * 更新资源栈的属性，该API可以根据用户给予的信息对资源栈的属性进行更新，可以更新资源栈的“description”、“enable_deletion_protection”、\&quot;enable_auto_rollback\&quot;、\&quot;agencies\&quot;四个属性中的一个或多个
         * 
         * 该API只会更新用户给予的信息中所涉及的字段；如果某字段未给予，则不会对该资源栈属性进行更新
         * 
         * 注：所有属性的更新都是覆盖式更新。即，所给予的参数将被完全覆盖至资源栈已有的属性上
         * 
         * 例如，如果要新增agencies，请通过GetStackMetadata获取该资源栈原有的agencies信息，将新旧agencies信息进行整合后再调用UpdateStack
         * 
         * * 如果资源栈状态处于非终态（状态以&#x60;IN_PROGRESS&#x60;结尾）状态时，则不允许更新。包括但不限于以下状态：
         *   * 正在部署（DEPLOYMENT_IN_PROGRESS）
         *   * 正在删除（DELETION_IN_PROGRESS）
         *   * 正在回滚（ROLLBACK_IN_PROGRESS）
         * 
         * * 对于“enable_auto_rollback”属性从false到true的更新操作，资源栈状态判定将更加严格，在失败（状态以&#x60;_FAILED&#x60;结尾）状态时也不允许更新，包括但不限于以下状态：
         *   * 部署失败（DEPLOYMENT_FAILED）
         *   * 回滚失败（ROLLBACK_FAILED）
         *   * 删除失败（DELETION_FAILED）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStack(updateStackRequest?: UpdateStackRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/stacks/{stack_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let stackName;

            if (updateStackRequest !== null && updateStackRequest !== undefined) {
                if (updateStackRequest instanceof UpdateStackRequest) {
                    clientRequestId = updateStackRequest.clientRequestId;
                    projectId = updateStackRequest.projectId;
                    stackName = updateStackRequest.stackName;
                    body = updateStackRequest.body
                } else {
                    clientRequestId = updateStackRequest['Client-Request-Id'];
                    projectId = updateStackRequest['project_id'];
                    stackName = updateStackRequest['stack_name'];
                    body = updateStackRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateStack.');
            }
            if (stackName === null || stackName === undefined) {
            throw new RequiredError('stackName','Required parameter stackName was null or undefined when calling updateStack.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'stack_name': stackName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建资源栈实例（CreateStackInstance）
         * 
         * 此API用于在指定资源栈集下生成多个资源栈实例，并返回资源栈集操作ID（stack_set_operation_id）
         * 
         * 此API可以通过var_overrides参数，指定创建资源栈实例的参数值，进行参数覆盖。如果var_overrides参数未给予，则默认使用当前资源栈集中记录的参数进行部署，详见：var_overrides参数描述。
         * 
         * 通过DeployStackSet API更新资源栈集参数后，资源栈实例中已经被覆盖的参数不会被更新，仍然保留覆盖值。
         * 
         * 用户只能覆盖已经在资源栈集中记录的参数，如果用户想要增加可以覆盖的参数，需要先通过DeployStackSet API更新资源栈集记录的参数集合。
         * 
         * * 用户可以根据资源栈集操作ID（stack_set_operation_id），通过ShowStackSetOperationMetadata API获取资源栈集操作状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStackInstance(createStackInstanceRequest?: CreateStackInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/stack-sets/{stack_set_name}/stack-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let stackSetName;

            if (createStackInstanceRequest !== null && createStackInstanceRequest !== undefined) {
                if (createStackInstanceRequest instanceof CreateStackInstanceRequest) {
                    clientRequestId = createStackInstanceRequest.clientRequestId;
                    stackSetName = createStackInstanceRequest.stackSetName;
                    body = createStackInstanceRequest.body
                } else {
                    clientRequestId = createStackInstanceRequest['Client-Request-Id'];
                    stackSetName = createStackInstanceRequest['stack_set_name'];
                    body = createStackInstanceRequest['body'];
                }
            }

        
            if (stackSetName === null || stackSetName === undefined) {
            throw new RequiredError('stackSetName','Required parameter stackSetName was null or undefined when calling createStackInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'stack_set_name': stackSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建资源栈集（CreateStackSet）
         * 
         * 此API为同步API，用于生成一个空资源栈集，即不包含任何一个资源栈实例，并返回资源栈集ID（stack_set_id）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStackSet(createStackSetRequest?: CreateStackSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/stack-sets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;

            if (createStackSetRequest !== null && createStackSetRequest !== undefined) {
                if (createStackSetRequest instanceof CreateStackSetRequest) {
                    clientRequestId = createStackSetRequest.clientRequestId;
                    body = createStackSetRequest.body
                } else {
                    clientRequestId = createStackSetRequest['Client-Request-Id'];
                    body = createStackSetRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源栈实例（DeleteStackInstance）
         * 
         * 此API用于删除指定资源栈集下指定局点（region）或指定成员账号（domain_id）的资源栈实例，并返回资源栈集操作ID（stack_set_operation_id）
         * 
         * **请谨慎操作，删除资源栈实例将会删除与该资源栈实例相关的资源栈以及资源栈所管理的一切资源。**
         * 
         * * 用户可以根据资源栈集操作ID（stack_set_operation_id），通过ShowStackSetOperationMetadata API获取资源栈集操作状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStackInstance(deleteStackInstanceRequest?: DeleteStackInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/stack-sets/{stack_set_name}/stack-instances/deletion",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let stackSetName;

            if (deleteStackInstanceRequest !== null && deleteStackInstanceRequest !== undefined) {
                if (deleteStackInstanceRequest instanceof DeleteStackInstanceRequest) {
                    clientRequestId = deleteStackInstanceRequest.clientRequestId;
                    stackSetName = deleteStackInstanceRequest.stackSetName;
                    body = deleteStackInstanceRequest.body
                } else {
                    clientRequestId = deleteStackInstanceRequest['Client-Request-Id'];
                    stackSetName = deleteStackInstanceRequest['stack_set_name'];
                    body = deleteStackInstanceRequest['body'];
                }
            }

        
            if (stackSetName === null || stackSetName === undefined) {
            throw new RequiredError('stackSetName','Required parameter stackSetName was null or undefined when calling deleteStackInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'stack_set_name': stackSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源栈实例-被废弃（DeleteStackInstanceDeprecated）
         * 
         * 此API用于删除指定资源栈集下指定局点（region）或指定成员账号（domain_id）的资源栈实例，并返回资源栈集操作ID（stack_set_operation_id）
         * 
         * **请谨慎操作，删除资源栈实例将会删除与该资源栈实例相关的资源栈以及资源栈所管理的一切资源。**
         * 
         * * 用户可以根据资源栈集操作ID（stack_set_operation_id），通过ShowStackSetOperationMetadata API获取资源栈集操作状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStackInstanceDeprecated(deleteStackInstanceDeprecatedRequest?: DeleteStackInstanceDeprecatedRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/stack-sets/{stack_set_name}/stack-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let stackSetName;

            if (deleteStackInstanceDeprecatedRequest !== null && deleteStackInstanceDeprecatedRequest !== undefined) {
                if (deleteStackInstanceDeprecatedRequest instanceof DeleteStackInstanceDeprecatedRequest) {
                    clientRequestId = deleteStackInstanceDeprecatedRequest.clientRequestId;
                    stackSetName = deleteStackInstanceDeprecatedRequest.stackSetName;
                    body = deleteStackInstanceDeprecatedRequest.body
                } else {
                    clientRequestId = deleteStackInstanceDeprecatedRequest['Client-Request-Id'];
                    stackSetName = deleteStackInstanceDeprecatedRequest['stack_set_name'];
                    body = deleteStackInstanceDeprecatedRequest['body'];
                }
            }

        
            if (stackSetName === null || stackSetName === undefined) {
            throw new RequiredError('stackSetName','Required parameter stackSetName was null or undefined when calling deleteStackInstanceDeprecated.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'stack_set_name': stackSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源栈集（DeleteStackSet）
         * 
         * **请谨慎操作，删除资源栈集将会删除与该资源栈集相关的所有数据，如：资源栈集操作、资源栈集操作事件等。**
         * 
         * 当且仅当指定的资源栈集满足以下所有条件时，资源栈集才能被成功删除，否则会报错：
         *   * 资源栈集下没有资源栈实例
         *   * 资源栈集状态处于空闲（&#x60;IDLE&#x60;）状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStackSet(deleteStackSetRequest?: DeleteStackSetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/stack-sets/{stack_set_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let stackSetName;
            
            let stackSetId;
            
            let callIdentity;

            if (deleteStackSetRequest !== null && deleteStackSetRequest !== undefined) {
                if (deleteStackSetRequest instanceof DeleteStackSetRequest) {
                    clientRequestId = deleteStackSetRequest.clientRequestId;
                    stackSetName = deleteStackSetRequest.stackSetName;
                    stackSetId = deleteStackSetRequest.stackSetId;
                    callIdentity = deleteStackSetRequest.callIdentity;
                } else {
                    clientRequestId = deleteStackSetRequest['Client-Request-Id'];
                    stackSetName = deleteStackSetRequest['stack_set_name'];
                    stackSetId = deleteStackSetRequest['stack_set_id'];
                    callIdentity = deleteStackSetRequest['call_identity'];
                }
            }

        
            if (stackSetName === null || stackSetName === undefined) {
            throw new RequiredError('stackSetName','Required parameter stackSetName was null or undefined when calling deleteStackSet.');
            }
            if (stackSetId !== null && stackSetId !== undefined) {
                localVarQueryParameter['stack_set_id'] = stackSetId;
            }
            if (callIdentity !== null && callIdentity !== undefined) {
                localVarQueryParameter['call_identity'] = callIdentity;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'stack_set_name': stackSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 部署资源栈集（DeployStackSet）
         * 
         * 此API用于部署一个已有的资源栈集，并返回资源栈集操作ID（stack_set_operation_id）
         * 
         * * 用户可以使用此API更新资源栈集的模板、参数并进行部署。
         * 
         * * 此API会直接触发资源栈实例部署。用户既可以部署资源栈集下所有的资源栈实例，也可以部署指定资源栈实例。
         * 
         * * 此API为全量API，即用户每次部署都需要给予所想要使用的template、vars的全量
         * 
         * * 当触发的部署失败时，资源栈集不会自动回滚模板和参数，但部署失败的资源栈会根据资源栈的回滚配置决定是否进行回滚，已经部署成功的资源栈不会触发回滚。
         * 
         * * 用户可以根据资源栈集操作ID（stack_set_operation_id），通过ShowStackSetOperationMetadata API获取资源栈集操作状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deployStackSet(deployStackSetRequest?: DeployStackSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/stack-sets/{stack_set_name}/deployments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let stackSetName;

            if (deployStackSetRequest !== null && deployStackSetRequest !== undefined) {
                if (deployStackSetRequest instanceof DeployStackSetRequest) {
                    clientRequestId = deployStackSetRequest.clientRequestId;
                    stackSetName = deployStackSetRequest.stackSetName;
                    body = deployStackSetRequest.body
                } else {
                    clientRequestId = deployStackSetRequest['Client-Request-Id'];
                    stackSetName = deployStackSetRequest['stack_set_name'];
                    body = deployStackSetRequest['body'];
                }
            }

        
            if (stackSetName === null || stackSetName === undefined) {
            throw new RequiredError('stackSetName','Required parameter stackSetName was null or undefined when calling deployStackSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'stack_set_name': stackSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举资源栈实例（ListStackInstances）
         * 
         * 此API用于列举指定资源栈集下指定局点（region）或指定成员账号（stack_domain_id）或全部资源栈实例
         * 
         * * 可以使用filter作为过滤器，过滤出指定局点（region）或指定成员账号（stack_domain_id）下的资源栈实例
         * * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
         * * 如果指定资源栈集下没有任何资源栈实例，则返回空list
         * * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStackInstances(listStackInstancesRequest?: ListStackInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/stack-sets/{stack_set_name}/stack-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let stackSetName;
            
            let stackSetId;
            
            let filter;
            
            let sortKey;
            
            let sortDir;
            
            let callIdentity;
            
            let marker;
            
            let limit;

            if (listStackInstancesRequest !== null && listStackInstancesRequest !== undefined) {
                if (listStackInstancesRequest instanceof ListStackInstancesRequest) {
                    clientRequestId = listStackInstancesRequest.clientRequestId;
                    stackSetName = listStackInstancesRequest.stackSetName;
                    stackSetId = listStackInstancesRequest.stackSetId;
                    filter = listStackInstancesRequest.filter;
                    sortKey = listStackInstancesRequest.sortKey;
                    sortDir = listStackInstancesRequest.sortDir;
                    callIdentity = listStackInstancesRequest.callIdentity;
                    marker = listStackInstancesRequest.marker;
                    limit = listStackInstancesRequest.limit;
                } else {
                    clientRequestId = listStackInstancesRequest['Client-Request-Id'];
                    stackSetName = listStackInstancesRequest['stack_set_name'];
                    stackSetId = listStackInstancesRequest['stack_set_id'];
                    filter = listStackInstancesRequest['filter'];
                    sortKey = listStackInstancesRequest['sort_key'];
                    sortDir = listStackInstancesRequest['sort_dir'];
                    callIdentity = listStackInstancesRequest['call_identity'];
                    marker = listStackInstancesRequest['marker'];
                    limit = listStackInstancesRequest['limit'];
                }
            }

        
            if (stackSetName === null || stackSetName === undefined) {
            throw new RequiredError('stackSetName','Required parameter stackSetName was null or undefined when calling listStackInstances.');
            }
            if (stackSetId !== null && stackSetId !== undefined) {
                localVarQueryParameter['stack_set_id'] = stackSetId;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (callIdentity !== null && callIdentity !== undefined) {
                localVarQueryParameter['call_identity'] = callIdentity;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'stack_set_name': stackSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举资源栈集操作（ListStackSetOperations）
         * 
         * 列举指定资源栈集下所有的资源栈集的操作。
         * 
         * 可以使用filter作为过滤器，过滤出指定操作状态（status）或操作类型（action）下的资源栈集操作。
         * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
         * 如果指定资源栈集下没有任何资源栈集操作，则返回空list。
         * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStackSetOperations(listStackSetOperationsRequest?: ListStackSetOperationsRequest) {
            const options = {
                method: "GET",
                url: "/v1/stack-sets/{stack_set_name}/operations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let stackSetName;
            
            let stackSetId;
            
            let filter;
            
            let sortKey;
            
            let sortDir;
            
            let callIdentity;
            
            let marker;
            
            let limit;

            if (listStackSetOperationsRequest !== null && listStackSetOperationsRequest !== undefined) {
                if (listStackSetOperationsRequest instanceof ListStackSetOperationsRequest) {
                    clientRequestId = listStackSetOperationsRequest.clientRequestId;
                    stackSetName = listStackSetOperationsRequest.stackSetName;
                    stackSetId = listStackSetOperationsRequest.stackSetId;
                    filter = listStackSetOperationsRequest.filter;
                    sortKey = listStackSetOperationsRequest.sortKey;
                    sortDir = listStackSetOperationsRequest.sortDir;
                    callIdentity = listStackSetOperationsRequest.callIdentity;
                    marker = listStackSetOperationsRequest.marker;
                    limit = listStackSetOperationsRequest.limit;
                } else {
                    clientRequestId = listStackSetOperationsRequest['Client-Request-Id'];
                    stackSetName = listStackSetOperationsRequest['stack_set_name'];
                    stackSetId = listStackSetOperationsRequest['stack_set_id'];
                    filter = listStackSetOperationsRequest['filter'];
                    sortKey = listStackSetOperationsRequest['sort_key'];
                    sortDir = listStackSetOperationsRequest['sort_dir'];
                    callIdentity = listStackSetOperationsRequest['call_identity'];
                    marker = listStackSetOperationsRequest['marker'];
                    limit = listStackSetOperationsRequest['limit'];
                }
            }

        
            if (stackSetName === null || stackSetName === undefined) {
            throw new RequiredError('stackSetName','Required parameter stackSetName was null or undefined when calling listStackSetOperations.');
            }
            if (stackSetId !== null && stackSetId !== undefined) {
                localVarQueryParameter['stack_set_id'] = stackSetId;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (callIdentity !== null && callIdentity !== undefined) {
                localVarQueryParameter['call_identity'] = callIdentity;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'stack_set_name': stackSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举资源栈集（ListStackSets）
         * 
         * 此API用于列举当前用户（domain）当前局点（region）下全部资源栈集。
         * 
         * * 可以使用filter作为过滤器，过滤出指定权限模型（permission_model）下的资源栈集。
         * * 可以使用sort_key和sort_dir两个关键字对返回结果按创建时间（create_time）进行排序。给予的sort_key和sort_dir数量须一致，否则返回400。如果未给予sort_key和sort_dir，则默认按照创建时间降序排序。
         * * 注意：目前暂时返回全量资源栈集信息，即不支持分页
         * * 如果没有任何资源栈集，则返回空list
         * * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStackSets(listStackSetsRequest?: ListStackSetsRequest) {
            const options = {
                method: "GET",
                url: "/v1/stack-sets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let filter;
            
            let sortKey;
            
            let sortDir;
            
            let callIdentity;
            
            let marker;
            
            let limit;

            if (listStackSetsRequest !== null && listStackSetsRequest !== undefined) {
                if (listStackSetsRequest instanceof ListStackSetsRequest) {
                    clientRequestId = listStackSetsRequest.clientRequestId;
                    filter = listStackSetsRequest.filter;
                    sortKey = listStackSetsRequest.sortKey;
                    sortDir = listStackSetsRequest.sortDir;
                    callIdentity = listStackSetsRequest.callIdentity;
                    marker = listStackSetsRequest.marker;
                    limit = listStackSetsRequest.limit;
                } else {
                    clientRequestId = listStackSetsRequest['Client-Request-Id'];
                    filter = listStackSetsRequest['filter'];
                    sortKey = listStackSetsRequest['sort_key'];
                    sortDir = listStackSetsRequest['sort_dir'];
                    callIdentity = listStackSetsRequest['call_identity'];
                    marker = listStackSetsRequest['marker'];
                    limit = listStackSetsRequest['limit'];
                }
            }

        
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (callIdentity !== null && callIdentity !== undefined) {
                localVarQueryParameter['call_identity'] = callIdentity;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取资源栈实例（ShowStackInstance）
         * 
         * 用户可以使用此API获取资源栈实例的详细信息，包括关联资源栈名称与id，创建时间，参数覆盖等
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStackInstance(showStackInstanceRequest?: ShowStackInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v1/stack-sets/{stack_set_name}/stack-instances/{stack_instance_addr}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let stackSetName;
            
            let stackInstanceAddr;
            
            let stackSetId;
            
            let callIdentity;

            if (showStackInstanceRequest !== null && showStackInstanceRequest !== undefined) {
                if (showStackInstanceRequest instanceof ShowStackInstanceRequest) {
                    clientRequestId = showStackInstanceRequest.clientRequestId;
                    stackSetName = showStackInstanceRequest.stackSetName;
                    stackInstanceAddr = showStackInstanceRequest.stackInstanceAddr;
                    stackSetId = showStackInstanceRequest.stackSetId;
                    callIdentity = showStackInstanceRequest.callIdentity;
                } else {
                    clientRequestId = showStackInstanceRequest['Client-Request-Id'];
                    stackSetName = showStackInstanceRequest['stack_set_name'];
                    stackInstanceAddr = showStackInstanceRequest['stack_instance_addr'];
                    stackSetId = showStackInstanceRequest['stack_set_id'];
                    callIdentity = showStackInstanceRequest['call_identity'];
                }
            }

        
            if (stackSetName === null || stackSetName === undefined) {
            throw new RequiredError('stackSetName','Required parameter stackSetName was null or undefined when calling showStackInstance.');
            }
            if (stackInstanceAddr === null || stackInstanceAddr === undefined) {
            throw new RequiredError('stackInstanceAddr','Required parameter stackInstanceAddr was null or undefined when calling showStackInstance.');
            }
            if (stackSetId !== null && stackSetId !== undefined) {
                localVarQueryParameter['stack_set_id'] = stackSetId;
            }
            if (callIdentity !== null && callIdentity !== undefined) {
                localVarQueryParameter['call_identity'] = callIdentity;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'stack_set_name': stackSetName,'stack_instance_addr': stackInstanceAddr, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取资源栈集元数据（ShowStackSetMetadata）
         * 
         * * 用户可以使用此API获取资源栈集的元数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStackSetMetadata(showStackSetMetadataRequest?: ShowStackSetMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/stack-sets/{stack_set_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let stackSetName;
            
            let stackSetId;
            
            let callIdentity;

            if (showStackSetMetadataRequest !== null && showStackSetMetadataRequest !== undefined) {
                if (showStackSetMetadataRequest instanceof ShowStackSetMetadataRequest) {
                    clientRequestId = showStackSetMetadataRequest.clientRequestId;
                    stackSetName = showStackSetMetadataRequest.stackSetName;
                    stackSetId = showStackSetMetadataRequest.stackSetId;
                    callIdentity = showStackSetMetadataRequest.callIdentity;
                } else {
                    clientRequestId = showStackSetMetadataRequest['Client-Request-Id'];
                    stackSetName = showStackSetMetadataRequest['stack_set_name'];
                    stackSetId = showStackSetMetadataRequest['stack_set_id'];
                    callIdentity = showStackSetMetadataRequest['call_identity'];
                }
            }

        
            if (stackSetName === null || stackSetName === undefined) {
            throw new RequiredError('stackSetName','Required parameter stackSetName was null or undefined when calling showStackSetMetadata.');
            }
            if (stackSetId !== null && stackSetId !== undefined) {
                localVarQueryParameter['stack_set_id'] = stackSetId;
            }
            if (callIdentity !== null && callIdentity !== undefined) {
                localVarQueryParameter['call_identity'] = callIdentity;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'stack_set_name': stackSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取资源栈集操作元数据（ShowStackSetOperationMetadata）
         * 
         * 此API用于获取指定资源栈集操作的元数据，包括资源栈集操作ID、资源栈集ID、资源栈集名称、资源栈集操作状态、创建时间、更新时间、部署目标等信息。
         * 
         * 具体信息见ShowStackSetOperationMetadataResponseBody。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStackSetOperationMetadata(showStackSetOperationMetadataRequest?: ShowStackSetOperationMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/stack-sets/{stack_set_name}/operations/{stack_set_operation_id}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let stackSetName;
            
            let stackSetOperationId;
            
            let stackSetId;
            
            let callIdentity;

            if (showStackSetOperationMetadataRequest !== null && showStackSetOperationMetadataRequest !== undefined) {
                if (showStackSetOperationMetadataRequest instanceof ShowStackSetOperationMetadataRequest) {
                    clientRequestId = showStackSetOperationMetadataRequest.clientRequestId;
                    stackSetName = showStackSetOperationMetadataRequest.stackSetName;
                    stackSetOperationId = showStackSetOperationMetadataRequest.stackSetOperationId;
                    stackSetId = showStackSetOperationMetadataRequest.stackSetId;
                    callIdentity = showStackSetOperationMetadataRequest.callIdentity;
                } else {
                    clientRequestId = showStackSetOperationMetadataRequest['Client-Request-Id'];
                    stackSetName = showStackSetOperationMetadataRequest['stack_set_name'];
                    stackSetOperationId = showStackSetOperationMetadataRequest['stack_set_operation_id'];
                    stackSetId = showStackSetOperationMetadataRequest['stack_set_id'];
                    callIdentity = showStackSetOperationMetadataRequest['call_identity'];
                }
            }

        
            if (stackSetName === null || stackSetName === undefined) {
            throw new RequiredError('stackSetName','Required parameter stackSetName was null or undefined when calling showStackSetOperationMetadata.');
            }
            if (stackSetOperationId === null || stackSetOperationId === undefined) {
            throw new RequiredError('stackSetOperationId','Required parameter stackSetOperationId was null or undefined when calling showStackSetOperationMetadata.');
            }
            if (stackSetId !== null && stackSetId !== undefined) {
                localVarQueryParameter['stack_set_id'] = stackSetId;
            }
            if (callIdentity !== null && callIdentity !== undefined) {
                localVarQueryParameter['call_identity'] = callIdentity;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'stack_set_name': stackSetName,'stack_set_operation_id': stackSetOperationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取资源栈集模板（ShowStackSetTemplate）
         * 
         * 此API用于获取指定资源栈集的模板。
         * 
         * 如果获取成功，则以临时重定向形式返回模板下载链接（OBS Pre Signed地址，有效期为5分钟），大多数的客户端会进行自动重定向并下载模板；
         * 如果未进行自动重定向，请参考HTTP的重定向规则获取模板下载链接，手动下载模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStackSetTemplate(showStackSetTemplateRequest?: ShowStackSetTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/stack-sets/{stack_set_name}/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let stackSetName;
            
            let stackSetId;
            
            let accessControlSourceIps;
            
            let accessControlSourceVpcIds;
            
            let callIdentity;

            if (showStackSetTemplateRequest !== null && showStackSetTemplateRequest !== undefined) {
                if (showStackSetTemplateRequest instanceof ShowStackSetTemplateRequest) {
                    clientRequestId = showStackSetTemplateRequest.clientRequestId;
                    stackSetName = showStackSetTemplateRequest.stackSetName;
                    stackSetId = showStackSetTemplateRequest.stackSetId;
                    accessControlSourceIps = showStackSetTemplateRequest.accessControlSourceIps;
                    accessControlSourceVpcIds = showStackSetTemplateRequest.accessControlSourceVpcIds;
                    callIdentity = showStackSetTemplateRequest.callIdentity;
                } else {
                    clientRequestId = showStackSetTemplateRequest['Client-Request-Id'];
                    stackSetName = showStackSetTemplateRequest['stack_set_name'];
                    stackSetId = showStackSetTemplateRequest['stack_set_id'];
                    accessControlSourceIps = showStackSetTemplateRequest['access_control_source_ips'];
                    accessControlSourceVpcIds = showStackSetTemplateRequest['access_control_source_vpc_ids'];
                    callIdentity = showStackSetTemplateRequest['call_identity'];
                }
            }

        
            if (stackSetName === null || stackSetName === undefined) {
            throw new RequiredError('stackSetName','Required parameter stackSetName was null or undefined when calling showStackSetTemplate.');
            }
            if (stackSetId !== null && stackSetId !== undefined) {
                localVarQueryParameter['stack_set_id'] = stackSetId;
            }
            if (accessControlSourceIps !== null && accessControlSourceIps !== undefined) {
                localVarQueryParameter['access_control_source_ips'] = accessControlSourceIps;
            }
            if (accessControlSourceVpcIds !== null && accessControlSourceVpcIds !== undefined) {
                localVarQueryParameter['access_control_source_vpc_ids'] = accessControlSourceVpcIds;
            }
            if (callIdentity !== null && callIdentity !== undefined) {
                localVarQueryParameter['call_identity'] = callIdentity;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'stack_set_name': stackSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新资源栈实例（UpdateStackInstances）
         * 
         * 此API用于更新并部署指定资源栈实例集合，并返回资源栈集操作ID（stack_set_operation_id）
         * 
         * 此API可以通过var_overrides参数，更新指定资源栈实例的参数值，进行参数覆盖。如果var_overrides参数未给予，则默认使用当前资源栈集中记录的参数进行部署，详见：var_overrides参数描述。用户只可以更新已经存在的资源栈实例，如果用户想要增加额外的资源栈实例，请使用CreateStackInstances API。
         * 
         * 通过DeployStackSet API更新资源栈集参数后，资源栈实例中已经被覆盖的参数不会被更新，仍然保留覆盖值。
         * 
         * 用户只能覆盖已经在资源栈集中记录的参数，如果用户想要增加可以覆盖的参数，需要先通过DeployStackSet API更新资源栈集记录的参数集合。
         * 
         * * 当触发的部署失败时，资源栈实例不会自动回滚参数覆盖，但部署失败的资源栈会默认自动回滚，已经部署成功的资源栈不会触发回滚。
         * 
         * * 用户可以根据资源栈集操作ID（stack_set_operation_id），通过ShowStackSetOperationMetadata API获取资源栈集操作状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStackInstances(updateStackInstancesRequest?: UpdateStackInstancesRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/stack-sets/{stack_set_name}/stack-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let stackSetName;

            if (updateStackInstancesRequest !== null && updateStackInstancesRequest !== undefined) {
                if (updateStackInstancesRequest instanceof UpdateStackInstancesRequest) {
                    clientRequestId = updateStackInstancesRequest.clientRequestId;
                    stackSetName = updateStackInstancesRequest.stackSetName;
                    body = updateStackInstancesRequest.body
                } else {
                    clientRequestId = updateStackInstancesRequest['Client-Request-Id'];
                    stackSetName = updateStackInstancesRequest['stack_set_name'];
                    body = updateStackInstancesRequest['body'];
                }
            }

        
            if (stackSetName === null || stackSetName === undefined) {
            throw new RequiredError('stackSetName','Required parameter stackSetName was null or undefined when calling updateStackInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'stack_set_name': stackSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新资源栈集（UpdateStackSet）
         * 
         * 该API可以根据用户给予的信息对资源栈集的属性进行更新，可以更新资源栈集如下属性“stack_set_description”、\&quot;initial_stack_description\&quot;、“administration_agency_name”、\&quot;managed_agency_name\&quot;、“administration_agency_urn”中的一个或多个。
         * 
         * 该API只会更新用户给予的信息中所涉及的字段；如果某字段未给予，则不会对该资源栈集属性进行更新。
         * 
         * 注：
         *   * 所有属性的更新都是覆盖式更新。即，所给予的参数将被完全覆盖至资源栈已有的属性上。
         *   * 只有在permission_model&#x3D;SELF_MANAGED时，才可更新administration_agency_name、managed_agency_name和administration_agency_urn。
         *   * 如果资源栈集的状态是OPERATION_IN_PROGRESS，不允许更新资源栈集。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStackSet(updateStackSetRequest?: UpdateStackSetRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/stack-sets/{stack_set_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let stackSetName;

            if (updateStackSetRequest !== null && updateStackSetRequest !== undefined) {
                if (updateStackSetRequest instanceof UpdateStackSetRequest) {
                    clientRequestId = updateStackSetRequest.clientRequestId;
                    stackSetName = updateStackSetRequest.stackSetName;
                    body = updateStackSetRequest.body
                } else {
                    clientRequestId = updateStackSetRequest['Client-Request-Id'];
                    stackSetName = updateStackSetRequest['stack_set_name'];
                    body = updateStackSetRequest['body'];
                }
            }

        
            if (stackSetName === null || stackSetName === undefined) {
            throw new RequiredError('stackSetName','Required parameter stackSetName was null or undefined when calling updateStackSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'stack_set_name': stackSetName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解析模板参数（ParseTemplateVariables）
         * 
         * 此API用于解析用户输入的模板中的参数（variable），将解析模板中的所有variable块并返回
         * 
         * * 如果用户传入的模板中定义了variable参数，则返回200和所有variable
         * * 如果用户传入的模板中没有定义variable参数，则返回200和空对象
         * * 如果用户请求非法或传入的模板非法，则返回400
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        parseTemplateVariables(parseTemplateVariablesRequest?: ParseTemplateVariablesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/template-analyses/variables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let projectId;

            if (parseTemplateVariablesRequest !== null && parseTemplateVariablesRequest !== undefined) {
                if (parseTemplateVariablesRequest instanceof ParseTemplateVariablesRequest) {
                    clientRequestId = parseTemplateVariablesRequest.clientRequestId;
                    projectId = parseTemplateVariablesRequest.projectId;
                    body = parseTemplateVariablesRequest.body
                } else {
                    clientRequestId = parseTemplateVariablesRequest['Client-Request-Id'];
                    projectId = parseTemplateVariablesRequest['project_id'];
                    body = parseTemplateVariablesRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling parseTemplateVariables.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建模板（CreateTemplate）
         * 
         * 此API用于创建一个带有版本的模板
         * 
         *   * 请求中必须包括template_uri或是template_body。前者为模板内容obs链接，后者为模板内容
         *   * 模板管理名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板
         *   * 模板创建时，会自动生成模板版本号为V1的模板版本
         *   * 模板必须存在一个或多个模板版本，即不存在没有模板版本的模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTemplate(createTemplateRequest?: CreateTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let projectId;

            if (createTemplateRequest !== null && createTemplateRequest !== undefined) {
                if (createTemplateRequest instanceof CreateTemplateRequest) {
                    clientRequestId = createTemplateRequest.clientRequestId;
                    projectId = createTemplateRequest.projectId;
                    body = createTemplateRequest.body
                } else {
                    clientRequestId = createTemplateRequest['Client-Request-Id'];
                    projectId = createTemplateRequest['project_id'];
                    body = createTemplateRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createTemplate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建模板版本（CreateTemplateVersion）
         * 
         * 此API用于创建新的模板版本
         * 
         *   * 请求中必须包括template_uri或template_body。前者为模板内容obs链接，后者为模板内容
         *   * 新创建的模板版本版本ID会自动在当前最大模板版本ID的基础上加1
         *   * 创建模板版本需要的具体信息详见：CreateTemplateVersionRequestBody
         *   * template_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给予的template_id和当前模板管理的ID不一致，则返回400
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTemplateVersion(createTemplateVersionRequest?: CreateTemplateVersionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/templates/{template_name}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;
            
            let templateId;

            if (createTemplateVersionRequest !== null && createTemplateVersionRequest !== undefined) {
                if (createTemplateVersionRequest instanceof CreateTemplateVersionRequest) {
                    clientRequestId = createTemplateVersionRequest.clientRequestId;
                    projectId = createTemplateVersionRequest.projectId;
                    templateName = createTemplateVersionRequest.templateName;
                    body = createTemplateVersionRequest.body
                    templateId = createTemplateVersionRequest.templateId;
                } else {
                    clientRequestId = createTemplateVersionRequest['Client-Request-Id'];
                    projectId = createTemplateVersionRequest['project_id'];
                    templateName = createTemplateVersionRequest['template_name'];
                    body = createTemplateVersionRequest['body'];
                    templateId = createTemplateVersionRequest['template_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createTemplateVersion.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling createTemplateVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'template_name': templateName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除模板（DeleteTemplate）
         * 
         * 此API用于删除某个模板以及模板下的全部模板版本
         * **请谨慎操作，删除模板将会删除模板下的所有模板版本。**
         * 
         *   * template_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给予的template_id和当前模板管理的ID不一致，则返回400
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/templates/{template_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;
            
            let templateId;

            if (deleteTemplateRequest !== null && deleteTemplateRequest !== undefined) {
                if (deleteTemplateRequest instanceof DeleteTemplateRequest) {
                    clientRequestId = deleteTemplateRequest.clientRequestId;
                    projectId = deleteTemplateRequest.projectId;
                    templateName = deleteTemplateRequest.templateName;
                    templateId = deleteTemplateRequest.templateId;
                } else {
                    clientRequestId = deleteTemplateRequest['Client-Request-Id'];
                    projectId = deleteTemplateRequest['project_id'];
                    templateName = deleteTemplateRequest['template_name'];
                    templateId = deleteTemplateRequest['template_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteTemplate.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling deleteTemplate.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'template_name': templateName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除模板版本（DeleteTemplateVersion）
         * 
         * 此API用于删除某个模板版本
         * 
         *   * template_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给予的template_id和当前模板管理的ID不一致，则返回400
         *   * 如果模板下只存在唯一模板版本，此模板版本将无法被删除，如果需要删除此模板版本，请调用DeleteTemplate。模板服务不允许存在没有模板版本的模板
         * 
         * **请谨慎操作**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplateVersion(deleteTemplateVersionRequest?: DeleteTemplateVersionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/templates/{template_name}/versions/{version_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;
            
            let versionId;
            
            let templateId;

            if (deleteTemplateVersionRequest !== null && deleteTemplateVersionRequest !== undefined) {
                if (deleteTemplateVersionRequest instanceof DeleteTemplateVersionRequest) {
                    clientRequestId = deleteTemplateVersionRequest.clientRequestId;
                    projectId = deleteTemplateVersionRequest.projectId;
                    templateName = deleteTemplateVersionRequest.templateName;
                    versionId = deleteTemplateVersionRequest.versionId;
                    templateId = deleteTemplateVersionRequest.templateId;
                } else {
                    clientRequestId = deleteTemplateVersionRequest['Client-Request-Id'];
                    projectId = deleteTemplateVersionRequest['project_id'];
                    templateName = deleteTemplateVersionRequest['template_name'];
                    versionId = deleteTemplateVersionRequest['version_id'];
                    templateId = deleteTemplateVersionRequest['template_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteTemplateVersion.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling deleteTemplateVersion.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling deleteTemplateVersion.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'template_name': templateName,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举模板版本信息（ListTemplateVersions）
         * 
         * 此API用于列举模板下所有的模板版本信息
         * 
         *   * 默认按照生成时间降序排序，最新生成的模板排列在最前面
         *   * 如果没有任何模板版本，则返回空list
         *   * template_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给予的template_id和当前模板管理的ID不一致，则返回400
         *   * 如果模板不存在则返回404
         *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * ListTemplateVersions返回的信息只包含模板版本摘要信息（具体摘要信息见ListTemplateVersionsResponseBody），如果用户需要了解模板版本内容，请调用ShowTemplateVersionContent
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplateVersions(listTemplateVersionsRequest?: ListTemplateVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/templates/{template_name}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;
            
            let templateId;
            
            let marker;
            
            let limit;

            if (listTemplateVersionsRequest !== null && listTemplateVersionsRequest !== undefined) {
                if (listTemplateVersionsRequest instanceof ListTemplateVersionsRequest) {
                    clientRequestId = listTemplateVersionsRequest.clientRequestId;
                    projectId = listTemplateVersionsRequest.projectId;
                    templateName = listTemplateVersionsRequest.templateName;
                    templateId = listTemplateVersionsRequest.templateId;
                    marker = listTemplateVersionsRequest.marker;
                    limit = listTemplateVersionsRequest.limit;
                } else {
                    clientRequestId = listTemplateVersionsRequest['Client-Request-Id'];
                    projectId = listTemplateVersionsRequest['project_id'];
                    templateName = listTemplateVersionsRequest['template_name'];
                    templateId = listTemplateVersionsRequest['template_id'];
                    marker = listTemplateVersionsRequest['marker'];
                    limit = listTemplateVersionsRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTemplateVersions.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling listTemplateVersions.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'template_name': templateName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列举模板（ListTemplates）
         * 
         * 此API用于列举当前局点下用户所有的模板
         * 
         *   * 默认按照生成时间降序排序，最新生成的模板排列在最前面
         *   * 如果没有任何模板，则返回空list
         *   * 如果用户需要详细的模板版本信息，请调用ListTemplateVersions
         *   * 支持分页返回。如果响应中存在next_marker，则表示实际总输出比当前响应中包含的输出多。在对请求的后续调用中，在请求参数中使用此值，以获取输出的下一部分。您应该重复此操作，直到next_marker响应元素返回为null
         * 
         * ListTemplates返回的信息只包含模板摘要信息（具体摘要信息见ListTemplatesResponseBody），如果用户需要详细的某个模板信息，请调用ShowTemplateMetadata
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplates(listTemplatesRequest?: ListTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let marker;
            
            let limit;

            if (listTemplatesRequest !== null && listTemplatesRequest !== undefined) {
                if (listTemplatesRequest instanceof ListTemplatesRequest) {
                    clientRequestId = listTemplatesRequest.clientRequestId;
                    projectId = listTemplatesRequest.projectId;
                    marker = listTemplatesRequest.marker;
                    limit = listTemplatesRequest.limit;
                } else {
                    clientRequestId = listTemplatesRequest['Client-Request-Id'];
                    projectId = listTemplatesRequest['project_id'];
                    marker = listTemplatesRequest['marker'];
                    limit = listTemplatesRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listTemplates.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取模板元数据（ShowTemplateMetadata）
         * 
         * 此API用于获取当前模板的元数据信息
         * 
         * 具体信息见ShowTemplateMetadataResponseBody，如果想查看模板下全部模板版本，请调用ListTemplateVersions。
         * 
         *   * template_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给予的template_id和当前模板管理的ID不一致，则返回400
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTemplateMetadata(showTemplateMetadataRequest?: ShowTemplateMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/templates/{template_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;
            
            let templateId;

            if (showTemplateMetadataRequest !== null && showTemplateMetadataRequest !== undefined) {
                if (showTemplateMetadataRequest instanceof ShowTemplateMetadataRequest) {
                    clientRequestId = showTemplateMetadataRequest.clientRequestId;
                    projectId = showTemplateMetadataRequest.projectId;
                    templateName = showTemplateMetadataRequest.templateName;
                    templateId = showTemplateMetadataRequest.templateId;
                } else {
                    clientRequestId = showTemplateMetadataRequest['Client-Request-Id'];
                    projectId = showTemplateMetadataRequest['project_id'];
                    templateName = showTemplateMetadataRequest['template_name'];
                    templateId = showTemplateMetadataRequest['template_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTemplateMetadata.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling showTemplateMetadata.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'template_name': templateName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取模板版本内容（ShowTemplateVersionContent）
         * 
         * 此API用于获取用户的模板版本内容
         * 
         *   * template_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给予的template_id和当前模板管理的ID不一致，则返回400
         *   * 此api会以临时重定向形式返回模板内容的下载链接，用户通过下载获取模板版本内容（OBS Pre Signed地址，有效期为5分钟）
         *   * 如果手动访问重定向的obs下载链接，请求时不可以携带任何的Request-Header，否则会导致签名失败
         * 
         * ShowTemplateVersionContent返回的信息只包含模板版本内容，如果想知道模板版本的元数据，请调用ShowTemplateVersionMetadata
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTemplateVersionContent(showTemplateVersionContentRequest?: ShowTemplateVersionContentRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/templates/{template_name}/versions/{version_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;
            
            let versionId;
            
            let templateId;
            
            let accessControlSourceVpcIds;
            
            let accessControlSourceIps;

            if (showTemplateVersionContentRequest !== null && showTemplateVersionContentRequest !== undefined) {
                if (showTemplateVersionContentRequest instanceof ShowTemplateVersionContentRequest) {
                    clientRequestId = showTemplateVersionContentRequest.clientRequestId;
                    projectId = showTemplateVersionContentRequest.projectId;
                    templateName = showTemplateVersionContentRequest.templateName;
                    versionId = showTemplateVersionContentRequest.versionId;
                    templateId = showTemplateVersionContentRequest.templateId;
                    accessControlSourceVpcIds = showTemplateVersionContentRequest.accessControlSourceVpcIds;
                    accessControlSourceIps = showTemplateVersionContentRequest.accessControlSourceIps;
                } else {
                    clientRequestId = showTemplateVersionContentRequest['Client-Request-Id'];
                    projectId = showTemplateVersionContentRequest['project_id'];
                    templateName = showTemplateVersionContentRequest['template_name'];
                    versionId = showTemplateVersionContentRequest['version_id'];
                    templateId = showTemplateVersionContentRequest['template_id'];
                    accessControlSourceVpcIds = showTemplateVersionContentRequest['access_control_source_vpc_ids'];
                    accessControlSourceIps = showTemplateVersionContentRequest['access_control_source_ips'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTemplateVersionContent.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling showTemplateVersionContent.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling showTemplateVersionContent.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (accessControlSourceVpcIds !== null && accessControlSourceVpcIds !== undefined) {
                localVarQueryParameter['access_control_source_vpc_ids'] = accessControlSourceVpcIds;
            }
            if (accessControlSourceIps !== null && accessControlSourceIps !== undefined) {
                localVarQueryParameter['access_control_source_ips'] = accessControlSourceIps;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'template_name': templateName,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取模板版本元数据（ShowTemplateVersionMetadata）
         * 
         * 此API用于展示某一版本模板的元数据
         * 
         *   * template_id是模板的唯一Id。此Id由资源编排服务在生成模板的时候生成，为UUID。由于模板名仅仅在同一时间下唯一，即用户允许先生成一个叫HelloWorld的模板，删除，再重新创建一个同名模板。对于团队并行开发，用户可能希望确保当前我操作的模板就是我认为的那个，而不是其他队友删除后创建的同名模板。因此，使用ID就可以做到强匹配。资源编排服务保证每次创建的模板所对应的ID都不相同，更新不会影响ID。如果给予的template_id和当前模板管理的ID不一致，则返回400
         * 
         * ShowTemplateVersionMetadata返回的信息只包含模板版本元数据信息（具体摘要信息见ShowTemplateVersionMetadataResponseBody），如果用户需要了解模板版本内容，请调用ShowTemplateVersionContent
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTemplateVersionMetadata(showTemplateVersionMetadataRequest?: ShowTemplateVersionMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/templates/{template_name}/versions/{version_id}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;
            
            let versionId;
            
            let templateId;

            if (showTemplateVersionMetadataRequest !== null && showTemplateVersionMetadataRequest !== undefined) {
                if (showTemplateVersionMetadataRequest instanceof ShowTemplateVersionMetadataRequest) {
                    clientRequestId = showTemplateVersionMetadataRequest.clientRequestId;
                    projectId = showTemplateVersionMetadataRequest.projectId;
                    templateName = showTemplateVersionMetadataRequest.templateName;
                    versionId = showTemplateVersionMetadataRequest.versionId;
                    templateId = showTemplateVersionMetadataRequest.templateId;
                } else {
                    clientRequestId = showTemplateVersionMetadataRequest['Client-Request-Id'];
                    projectId = showTemplateVersionMetadataRequest['project_id'];
                    templateName = showTemplateVersionMetadataRequest['template_name'];
                    versionId = showTemplateVersionMetadataRequest['version_id'];
                    templateId = showTemplateVersionMetadataRequest['template_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showTemplateVersionMetadata.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling showTemplateVersionMetadata.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling showTemplateVersionMetadata.');
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId,'template_name': templateName,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新模板元数据（UpdateTemplateMetadata）
         * 
         * 此API用于更新模板元数据
         * 
         * * 此api只支持更新模板描述
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTemplateMetadata(updateTemplateMetadataRequest?: UpdateTemplateMetadataRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/{project_id}/templates/{template_name}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clientRequestId;
            
            let projectId;
            
            let templateName;

            if (updateTemplateMetadataRequest !== null && updateTemplateMetadataRequest !== undefined) {
                if (updateTemplateMetadataRequest instanceof UpdateTemplateMetadataRequest) {
                    clientRequestId = updateTemplateMetadataRequest.clientRequestId;
                    projectId = updateTemplateMetadataRequest.projectId;
                    templateName = updateTemplateMetadataRequest.templateName;
                    body = updateTemplateMetadataRequest.body
                } else {
                    clientRequestId = updateTemplateMetadataRequest['Client-Request-Id'];
                    projectId = updateTemplateMetadataRequest['project_id'];
                    templateName = updateTemplateMetadataRequest['template_name'];
                    body = updateTemplateMetadataRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling updateTemplateMetadata.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling updateTemplateMetadata.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (clientRequestId !== undefined && clientRequestId !== null) {
                localVarHeaderParameter['Client-Request-Id'] = String(clientRequestId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId,'template_name': templateName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): AosClient {
    return new AosClient(client);
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