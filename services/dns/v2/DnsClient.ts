import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AliasTarget } from './model/AliasTarget';
import { AssociateEndpointIpaddressRequest } from './model/AssociateEndpointIpaddressRequest';
import { AssociateEndpointIpaddressResponse } from './model/AssociateEndpointIpaddressResponse';
import { AssociateOrDisassociateRouterWithRuleRequestBody } from './model/AssociateOrDisassociateRouterWithRuleRequestBody';
import { AssociateResolverQueryLogConfigRequest } from './model/AssociateResolverQueryLogConfigRequest';
import { AssociateResolverQueryLogConfigRequestBody } from './model/AssociateResolverQueryLogConfigRequestBody';
import { AssociateResolverQueryLogConfigResponse } from './model/AssociateResolverQueryLogConfigResponse';
import { AssociateResolverRuleRouterRequest } from './model/AssociateResolverRuleRouterRequest';
import { AssociateResolverRuleRouterResponse } from './model/AssociateResolverRuleRouterResponse';
import { AssociateRouterRequest } from './model/AssociateRouterRequest';
import { AssociateRouterRequestBody } from './model/AssociateRouterRequestBody';
import { AssociateRouterResponse } from './model/AssociateRouterResponse';
import { BatchCreateCombinedPublicRecordsetsTaskRequest } from './model/BatchCreateCombinedPublicRecordsetsTaskRequest';
import { BatchCreateCombinedPublicRecordsetsTaskRequestBody } from './model/BatchCreateCombinedPublicRecordsetsTaskRequestBody';
import { BatchCreateCombinedPublicRecordsetsTaskResponse } from './model/BatchCreateCombinedPublicRecordsetsTaskResponse';
import { BatchCreatePublicRecordsetsTaskItem } from './model/BatchCreatePublicRecordsetsTaskItem';
import { BatchCreatePublicRecordsetsTaskRequest } from './model/BatchCreatePublicRecordsetsTaskRequest';
import { BatchCreatePublicRecordsetsTaskRequestBody } from './model/BatchCreatePublicRecordsetsTaskRequestBody';
import { BatchCreatePublicRecordsetsTaskResponse } from './model/BatchCreatePublicRecordsetsTaskResponse';
import { BatchCreatePublicZonesTaskRequest } from './model/BatchCreatePublicZonesTaskRequest';
import { BatchCreatePublicZonesTaskRequestBody } from './model/BatchCreatePublicZonesTaskRequestBody';
import { BatchCreatePublicZonesTaskResponse } from './model/BatchCreatePublicZonesTaskResponse';
import { BatchCreateRecordSetWithLine } from './model/BatchCreateRecordSetWithLine';
import { BatchCreateRecordSetsTaskItem } from './model/BatchCreateRecordSetsTaskItem';
import { BatchCreateRecordSetsTaskRequest } from './model/BatchCreateRecordSetsTaskRequest';
import { BatchCreateRecordSetsTaskRequestBody } from './model/BatchCreateRecordSetsTaskRequestBody';
import { BatchCreateRecordSetsTaskResponse } from './model/BatchCreateRecordSetsTaskResponse';
import { BatchCreateTagRequest } from './model/BatchCreateTagRequest';
import { BatchCreateTagResponse } from './model/BatchCreateTagResponse';
import { BatchDeletePtrRecordsRequest } from './model/BatchDeletePtrRecordsRequest';
import { BatchDeletePtrRecordsRequestBody } from './model/BatchDeletePtrRecordsRequestBody';
import { BatchDeletePtrRecordsResponse } from './model/BatchDeletePtrRecordsResponse';
import { BatchDeletePublicRecordsetsTaskRequest } from './model/BatchDeletePublicRecordsetsTaskRequest';
import { BatchDeletePublicRecordsetsTaskRequestBody } from './model/BatchDeletePublicRecordsetsTaskRequestBody';
import { BatchDeletePublicRecordsetsTaskResponse } from './model/BatchDeletePublicRecordsetsTaskResponse';
import { BatchDeleteRecordSetWithLineRequest } from './model/BatchDeleteRecordSetWithLineRequest';
import { BatchDeleteRecordSetWithLineRequestBody } from './model/BatchDeleteRecordSetWithLineRequestBody';
import { BatchDeleteRecordSetWithLineResponse } from './model/BatchDeleteRecordSetWithLineResponse';
import { BatchDeleteRecordSetsRequest } from './model/BatchDeleteRecordSetsRequest';
import { BatchDeleteRecordSetsRequestBody } from './model/BatchDeleteRecordSetsRequestBody';
import { BatchDeleteRecordSetsResponse } from './model/BatchDeleteRecordSetsResponse';
import { BatchDeleteZonesRequest } from './model/BatchDeleteZonesRequest';
import { BatchDeleteZonesRequestBody } from './model/BatchDeleteZonesRequestBody';
import { BatchDeleteZonesResponse } from './model/BatchDeleteZonesResponse';
import { BatchHandTags } from './model/BatchHandTags';
import { BatchSetRecordSetsStatusRequest } from './model/BatchSetRecordSetsStatusRequest';
import { BatchSetRecordSetsStatusRequestBody } from './model/BatchSetRecordSetsStatusRequestBody';
import { BatchSetRecordSetsStatusResponse } from './model/BatchSetRecordSetsStatusResponse';
import { BatchSetZonesStatusRequest } from './model/BatchSetZonesStatusRequest';
import { BatchSetZonesStatusRequestBody } from './model/BatchSetZonesStatusRequestBody';
import { BatchSetZonesStatusResponse } from './model/BatchSetZonesStatusResponse';
import { BatchTransferPublicZonesTaskRequest } from './model/BatchTransferPublicZonesTaskRequest';
import { BatchTransferPublicZonesTaskRequestBody } from './model/BatchTransferPublicZonesTaskRequestBody';
import { BatchTransferPublicZonesTaskResponse } from './model/BatchTransferPublicZonesTaskResponse';
import { BatchUpdatePublicRecordsetsConditionvalue } from './model/BatchUpdatePublicRecordsetsConditionvalue';
import { BatchUpdatePublicRecordsetsFilter } from './model/BatchUpdatePublicRecordsetsFilter';
import { BatchUpdatePublicRecordsetsTaskRequest } from './model/BatchUpdatePublicRecordsetsTaskRequest';
import { BatchUpdatePublicRecordsetsTaskRequestBody } from './model/BatchUpdatePublicRecordsetsTaskRequestBody';
import { BatchUpdatePublicRecordsetsTaskResponse } from './model/BatchUpdatePublicRecordsetsTaskResponse';
import { BatchUpdatePublicRecordsetsUpdateValue } from './model/BatchUpdatePublicRecordsetsUpdateValue';
import { BatchUpdateRecordSet } from './model/BatchUpdateRecordSet';
import { BatchUpdateRecordSetWithLineRequest } from './model/BatchUpdateRecordSetWithLineRequest';
import { BatchUpdateRecordSetWithLineRequestBody } from './model/BatchUpdateRecordSetWithLineRequestBody';
import { BatchUpdateRecordSetWithLineResponse } from './model/BatchUpdateRecordSetWithLineResponse';
import { CreateAuthorizeTxtRecordRequest } from './model/CreateAuthorizeTxtRecordRequest';
import { CreateAuthorizeTxtRecordRequestBody } from './model/CreateAuthorizeTxtRecordRequestBody';
import { CreateAuthorizeTxtRecordResponse } from './model/CreateAuthorizeTxtRecordResponse';
import { CreateAuthorizeTxtRecordVerificationRequest } from './model/CreateAuthorizeTxtRecordVerificationRequest';
import { CreateAuthorizeTxtRecordVerificationResponse } from './model/CreateAuthorizeTxtRecordVerificationResponse';
import { CreateCustomLineRequest } from './model/CreateCustomLineRequest';
import { CreateCustomLineRequestBody } from './model/CreateCustomLineRequestBody';
import { CreateCustomLineResponse } from './model/CreateCustomLineResponse';
import { CreateEipRecordSetRequest } from './model/CreateEipRecordSetRequest';
import { CreateEipRecordSetResponse } from './model/CreateEipRecordSetResponse';
import { CreateEndpointRequest } from './model/CreateEndpointRequest';
import { CreateEndpointRequestBody } from './model/CreateEndpointRequestBody';
import { CreateEndpointResponse } from './model/CreateEndpointResponse';
import { CreateLineGroupRequest } from './model/CreateLineGroupRequest';
import { CreateLineGroupResponse } from './model/CreateLineGroupResponse';
import { CreateLineGroupsReq } from './model/CreateLineGroupsReq';
import { CreateLineGroupsResp } from './model/CreateLineGroupsResp';
import { CreatePrivateZoneReq } from './model/CreatePrivateZoneReq';
import { CreatePrivateZoneRequest } from './model/CreatePrivateZoneRequest';
import { CreatePrivateZoneResponse } from './model/CreatePrivateZoneResponse';
import { CreatePtrReq } from './model/CreatePtrReq';
import { CreatePtrRequest } from './model/CreatePtrRequest';
import { CreatePtrRequestBody } from './model/CreatePtrRequestBody';
import { CreatePtrResponse } from './model/CreatePtrResponse';
import { CreatePublicZoneReq } from './model/CreatePublicZoneReq';
import { CreatePublicZoneRequest } from './model/CreatePublicZoneRequest';
import { CreatePublicZoneResponse } from './model/CreatePublicZoneResponse';
import { CreateRSetBatchLinesReq } from './model/CreateRSetBatchLinesReq';
import { CreateRecordSetRequest } from './model/CreateRecordSetRequest';
import { CreateRecordSetRequestBody } from './model/CreateRecordSetRequestBody';
import { CreateRecordSetResponse } from './model/CreateRecordSetResponse';
import { CreateRecordSetWithBatchLinesRequest } from './model/CreateRecordSetWithBatchLinesRequest';
import { CreateRecordSetWithBatchLinesResponse } from './model/CreateRecordSetWithBatchLinesResponse';
import { CreateRecordSetWithLineRequest } from './model/CreateRecordSetWithLineRequest';
import { CreateRecordSetWithLineRequestBody } from './model/CreateRecordSetWithLineRequestBody';
import { CreateRecordSetWithLineResponse } from './model/CreateRecordSetWithLineResponse';
import { CreateResolverQueryLogConfigRequest } from './model/CreateResolverQueryLogConfigRequest';
import { CreateResolverQueryLogConfigRequestBody } from './model/CreateResolverQueryLogConfigRequestBody';
import { CreateResolverQueryLogConfigResponse } from './model/CreateResolverQueryLogConfigResponse';
import { CreateResolverRuleRequest } from './model/CreateResolverRuleRequest';
import { CreateResolverRuleRequestBody } from './model/CreateResolverRuleRequestBody';
import { CreateResolverRuleResponse } from './model/CreateResolverRuleResponse';
import { CreateRetrievalRequest } from './model/CreateRetrievalRequest';
import { CreateRetrievalRequestBody } from './model/CreateRetrievalRequestBody';
import { CreateRetrievalResponse } from './model/CreateRetrievalResponse';
import { CreateRetrievalVerificationRequest } from './model/CreateRetrievalVerificationRequest';
import { CreateRetrievalVerificationResponse } from './model/CreateRetrievalVerificationResponse';
import { CreateTagReq } from './model/CreateTagReq';
import { CreateTagRequest } from './model/CreateTagRequest';
import { CreateTagResponse } from './model/CreateTagResponse';
import { DeleteBatchCreateRecordSetsTaskRequest } from './model/DeleteBatchCreateRecordSetsTaskRequest';
import { DeleteBatchCreateRecordSetsTaskResponse } from './model/DeleteBatchCreateRecordSetsTaskResponse';
import { DeleteCustomLineRequest } from './model/DeleteCustomLineRequest';
import { DeleteCustomLineResponse } from './model/DeleteCustomLineResponse';
import { DeleteEndpointRequest } from './model/DeleteEndpointRequest';
import { DeleteEndpointResponse } from './model/DeleteEndpointResponse';
import { DeleteLineGroupRequest } from './model/DeleteLineGroupRequest';
import { DeleteLineGroupResponse } from './model/DeleteLineGroupResponse';
import { DeletePrivateZoneRequest } from './model/DeletePrivateZoneRequest';
import { DeletePrivateZoneResponse } from './model/DeletePrivateZoneResponse';
import { DeletePtrRequest } from './model/DeletePtrRequest';
import { DeletePtrResponse } from './model/DeletePtrResponse';
import { DeletePublicZoneRequest } from './model/DeletePublicZoneRequest';
import { DeletePublicZoneResponse } from './model/DeletePublicZoneResponse';
import { DeleteRecordSetRequest } from './model/DeleteRecordSetRequest';
import { DeleteRecordSetResponse } from './model/DeleteRecordSetResponse';
import { DeleteRecordSetsRequest } from './model/DeleteRecordSetsRequest';
import { DeleteRecordSetsResponse } from './model/DeleteRecordSetsResponse';
import { DeleteResolverQueryLogConfigRequest } from './model/DeleteResolverQueryLogConfigRequest';
import { DeleteResolverQueryLogConfigResponse } from './model/DeleteResolverQueryLogConfigResponse';
import { DeleteResolverRuleRequest } from './model/DeleteResolverRuleRequest';
import { DeleteResolverRuleResponse } from './model/DeleteResolverRuleResponse';
import { DeleteTagRequest } from './model/DeleteTagRequest';
import { DeleteTagResponse } from './model/DeleteTagResponse';
import { DisableDnssecConfigRequest } from './model/DisableDnssecConfigRequest';
import { DisableDnssecConfigResponse } from './model/DisableDnssecConfigResponse';
import { DisassociateEndpointIpaddressRequest } from './model/DisassociateEndpointIpaddressRequest';
import { DisassociateEndpointIpaddressResponse } from './model/DisassociateEndpointIpaddressResponse';
import { DisassociateResolverQueryLogConfigRequest } from './model/DisassociateResolverQueryLogConfigRequest';
import { DisassociateResolverQueryLogConfigResponse } from './model/DisassociateResolverQueryLogConfigResponse';
import { DisassociateResolverRuleRouterRequest } from './model/DisassociateResolverRuleRouterRequest';
import { DisassociateResolverRuleRouterResponse } from './model/DisassociateResolverRuleRouterResponse';
import { DisassociateRouterRequest } from './model/DisassociateRouterRequest';
import { DisassociateRouterResponse } from './model/DisassociateRouterResponse';
import { DisassociaterouterRequestBody } from './model/DisassociaterouterRequestBody';
import { DomainQuotaResponseQuotas } from './model/DomainQuotaResponseQuotas';
import { EnableDnssecConfigRequest } from './model/EnableDnssecConfigRequest';
import { EnableDnssecConfigResponse } from './model/EnableDnssecConfigResponse';
import { EndpointResp } from './model/EndpointResp';
import { FloatingIpsPtr } from './model/FloatingIpsPtr';
import { IpInfo } from './model/IpInfo';
import { IpValue } from './model/IpValue';
import { IpaddressInfo } from './model/IpaddressInfo';
import { Ipaddresses } from './model/Ipaddresses';
import { IpaddressesData } from './model/IpaddressesData';
import { Line } from './model/Line';
import { Link } from './model/Link';
import { LinksItem } from './model/LinksItem';
import { ListApiVersionsItem } from './model/ListApiVersionsItem';
import { ListApiVersionsRequest } from './model/ListApiVersionsRequest';
import { ListApiVersionsResponse } from './model/ListApiVersionsResponse';
import { ListBatchOperationTasksItem } from './model/ListBatchOperationTasksItem';
import { ListBatchOperationTasksRequest } from './model/ListBatchOperationTasksRequest';
import { ListBatchOperationTasksResponse } from './model/ListBatchOperationTasksResponse';
import { ListCustomLineRequest } from './model/ListCustomLineRequest';
import { ListCustomLineResponse } from './model/ListCustomLineResponse';
import { ListEndpointIpaddressesRequest } from './model/ListEndpointIpaddressesRequest';
import { ListEndpointIpaddressesResponse } from './model/ListEndpointIpaddressesResponse';
import { ListEndpointVpcsRequest } from './model/ListEndpointVpcsRequest';
import { ListEndpointVpcsResponse } from './model/ListEndpointVpcsResponse';
import { ListEndpointsRequest } from './model/ListEndpointsRequest';
import { ListEndpointsResponse } from './model/ListEndpointsResponse';
import { ListLineGroupsRequest } from './model/ListLineGroupsRequest';
import { ListLineGroupsResponse } from './model/ListLineGroupsResponse';
import { ListNameServersRequest } from './model/ListNameServersRequest';
import { ListNameServersResponse } from './model/ListNameServersResponse';
import { ListPrivateZonesRequest } from './model/ListPrivateZonesRequest';
import { ListPrivateZonesResponse } from './model/ListPrivateZonesResponse';
import { ListPtrRecordsFloatingResp } from './model/ListPtrRecordsFloatingResp';
import { ListPtrRecordsRequest } from './model/ListPtrRecordsRequest';
import { ListPtrRecordsResponse } from './model/ListPtrRecordsResponse';
import { ListPtrsRequest } from './model/ListPtrsRequest';
import { ListPtrsResponse } from './model/ListPtrsResponse';
import { ListPublicZoneLinesRequest } from './model/ListPublicZoneLinesRequest';
import { ListPublicZoneLinesResponse } from './model/ListPublicZoneLinesResponse';
import { ListPublicZonesRequest } from './model/ListPublicZonesRequest';
import { ListPublicZonesResponse } from './model/ListPublicZonesResponse';
import { ListRecordSets } from './model/ListRecordSets';
import { ListRecordSetsByZoneRequest } from './model/ListRecordSetsByZoneRequest';
import { ListRecordSetsByZoneResponse } from './model/ListRecordSetsByZoneResponse';
import { ListRecordSetsRequest } from './model/ListRecordSetsRequest';
import { ListRecordSetsResponse } from './model/ListRecordSetsResponse';
import { ListRecordSetsWithLineRequest } from './model/ListRecordSetsWithLineRequest';
import { ListRecordSetsWithLineResponse } from './model/ListRecordSetsWithLineResponse';
import { ListRecordSetsWithTags } from './model/ListRecordSetsWithTags';
import { ListResolverQueryLogConfigsRequest } from './model/ListResolverQueryLogConfigsRequest';
import { ListResolverQueryLogConfigsResponse } from './model/ListResolverQueryLogConfigsResponse';
import { ListResolverRuleParam } from './model/ListResolverRuleParam';
import { ListResolverRulesRequest } from './model/ListResolverRulesRequest';
import { ListResolverRulesResponse } from './model/ListResolverRulesResponse';
import { ListSystemLinesRequest } from './model/ListSystemLinesRequest';
import { ListSystemLinesResponse } from './model/ListSystemLinesResponse';
import { ListTagReq } from './model/ListTagReq';
import { ListTagRequest } from './model/ListTagRequest';
import { ListTagResponse } from './model/ListTagResponse';
import { ListTagsRequest } from './model/ListTagsRequest';
import { ListTagsResponse } from './model/ListTagsResponse';
import { Match } from './model/Match';
import { Metadata } from './model/Metadata';
import { NameServersResp } from './model/NameServersResp';
import { Nameserver } from './model/Nameserver';
import { NsRecords } from './model/NsRecords';
import { PageInfo } from './model/PageInfo';
import { PageLink } from './model/PageLink';
import { PrivateNameServer } from './model/PrivateNameServer';
import { PrivateZoneResp } from './model/PrivateZoneResp';
import { PublicIpReq } from './model/PublicIpReq';
import { PublicIpRes } from './model/PublicIpRes';
import { PublicZoneLines } from './model/PublicZoneLines';
import { PublicZoneResp } from './model/PublicZoneResp';
import { QueryRecordSetWithLineAndTagsResp } from './model/QueryRecordSetWithLineAndTagsResp';
import { QueryRecordSetWithLineResp } from './model/QueryRecordSetWithLineResp';
import { RecordInfo } from './model/RecordInfo';
import { RecordsetData } from './model/RecordsetData';
import { ResolverQueryLogConfig } from './model/ResolverQueryLogConfig';
import { ResolverRuleParam } from './model/ResolverRuleParam';
import { ResourceItem } from './model/ResourceItem';
import { RestorePtrRecordRequest } from './model/RestorePtrRecordRequest';
import { RestorePtrRecordResponse } from './model/RestorePtrRecordResponse';
import { RestorePtrReq } from './model/RestorePtrReq';
import { Router } from './model/Router';
import { RouterForRule } from './model/RouterForRule';
import { RouterWithStatus } from './model/RouterWithStatus';
import { SetPrivateZoneProxyPatternRequest } from './model/SetPrivateZoneProxyPatternRequest';
import { SetPrivateZoneProxyPatternRequestBody } from './model/SetPrivateZoneProxyPatternRequestBody';
import { SetPrivateZoneProxyPatternResponse } from './model/SetPrivateZoneProxyPatternResponse';
import { SetRecordSetsStatusRequest } from './model/SetRecordSetsStatusRequest';
import { SetRecordSetsStatusRequestBody } from './model/SetRecordSetsStatusRequestBody';
import { SetRecordSetsStatusResponse } from './model/SetRecordSetsStatusResponse';
import { ShowApiInfoRequest } from './model/ShowApiInfoRequest';
import { ShowApiInfoResponse } from './model/ShowApiInfoResponse';
import { ShowAuthorizeTxtRecordRequest } from './model/ShowAuthorizeTxtRecordRequest';
import { ShowAuthorizeTxtRecordResponse } from './model/ShowAuthorizeTxtRecordResponse';
import { ShowBatchCreateRecordSetsTaskErrorItem } from './model/ShowBatchCreateRecordSetsTaskErrorItem';
import { ShowBatchCreateRecordSetsTaskRequest } from './model/ShowBatchCreateRecordSetsTaskRequest';
import { ShowBatchCreateRecordSetsTaskResponse } from './model/ShowBatchCreateRecordSetsTaskResponse';
import { ShowBatchOperationTaskErrorItem } from './model/ShowBatchOperationTaskErrorItem';
import { ShowBatchOperationTaskRequest } from './model/ShowBatchOperationTaskRequest';
import { ShowBatchOperationTaskResponse } from './model/ShowBatchOperationTaskResponse';
import { ShowDnssecConfigRequest } from './model/ShowDnssecConfigRequest';
import { ShowDnssecConfigResponse } from './model/ShowDnssecConfigResponse';
import { ShowDomainDetectionRequest } from './model/ShowDomainDetectionRequest';
import { ShowDomainDetectionResponse } from './model/ShowDomainDetectionResponse';
import { ShowDomainQuotaRequest } from './model/ShowDomainQuotaRequest';
import { ShowDomainQuotaResponse } from './model/ShowDomainQuotaResponse';
import { ShowEmailRecordSetRequest } from './model/ShowEmailRecordSetRequest';
import { ShowEmailRecordSetResponse } from './model/ShowEmailRecordSetResponse';
import { ShowEndpointRequest } from './model/ShowEndpointRequest';
import { ShowEndpointResponse } from './model/ShowEndpointResponse';
import { ShowLineGroupRequest } from './model/ShowLineGroupRequest';
import { ShowLineGroupResponse } from './model/ShowLineGroupResponse';
import { ShowPrivateZoneNameServerRequest } from './model/ShowPrivateZoneNameServerRequest';
import { ShowPrivateZoneNameServerResponse } from './model/ShowPrivateZoneNameServerResponse';
import { ShowPrivateZoneRequest } from './model/ShowPrivateZoneRequest';
import { ShowPrivateZoneResponse } from './model/ShowPrivateZoneResponse';
import { ShowPtrRecordSetRequest } from './model/ShowPtrRecordSetRequest';
import { ShowPtrRecordSetResponse } from './model/ShowPtrRecordSetResponse';
import { ShowPtrRequest } from './model/ShowPtrRequest';
import { ShowPtrResponse } from './model/ShowPtrResponse';
import { ShowPublicZoneNameServerRequest } from './model/ShowPublicZoneNameServerRequest';
import { ShowPublicZoneNameServerResponse } from './model/ShowPublicZoneNameServerResponse';
import { ShowPublicZoneRequest } from './model/ShowPublicZoneRequest';
import { ShowPublicZoneResponse } from './model/ShowPublicZoneResponse';
import { ShowRecordSetByZoneRequest } from './model/ShowRecordSetByZoneRequest';
import { ShowRecordSetByZoneResp } from './model/ShowRecordSetByZoneResp';
import { ShowRecordSetByZoneResponse } from './model/ShowRecordSetByZoneResponse';
import { ShowRecordSetRequest } from './model/ShowRecordSetRequest';
import { ShowRecordSetResponse } from './model/ShowRecordSetResponse';
import { ShowRecordSetWithLineRequest } from './model/ShowRecordSetWithLineRequest';
import { ShowRecordSetWithLineResponse } from './model/ShowRecordSetWithLineResponse';
import { ShowResolverQueryLogConfigRequest } from './model/ShowResolverQueryLogConfigRequest';
import { ShowResolverQueryLogConfigResponse } from './model/ShowResolverQueryLogConfigResponse';
import { ShowResolverRuleRequest } from './model/ShowResolverRuleRequest';
import { ShowResolverRuleRespParam } from './model/ShowResolverRuleRespParam';
import { ShowResolverRuleResponse } from './model/ShowResolverRuleResponse';
import { ShowResourceTagRequest } from './model/ShowResourceTagRequest';
import { ShowResourceTagResponse } from './model/ShowResourceTagResponse';
import { ShowRetrievalRequest } from './model/ShowRetrievalRequest';
import { ShowRetrievalResponse } from './model/ShowRetrievalResponse';
import { ShowRetrievalVerificationRequest } from './model/ShowRetrievalVerificationRequest';
import { ShowRetrievalVerificationResponse } from './model/ShowRetrievalVerificationResponse';
import { ShowWebsiteRecordSetRequest } from './model/ShowWebsiteRecordSetRequest';
import { ShowWebsiteRecordSetResponse } from './model/ShowWebsiteRecordSetResponse';
import { ShowZoneNameServerRequest } from './model/ShowZoneNameServerRequest';
import { ShowZoneNameServerResponse } from './model/ShowZoneNameServerResponse';
import { SystemLine } from './model/SystemLine';
import { Tag } from './model/Tag';
import { TagValues } from './model/TagValues';
import { UpdateCustomLineRequest } from './model/UpdateCustomLineRequest';
import { UpdateCustomLineRequestBody } from './model/UpdateCustomLineRequestBody';
import { UpdateCustomLineResponse } from './model/UpdateCustomLineResponse';
import { UpdateEndpointRequest } from './model/UpdateEndpointRequest';
import { UpdateEndpointRequestBody } from './model/UpdateEndpointRequestBody';
import { UpdateEndpointResponse } from './model/UpdateEndpointResponse';
import { UpdateLineGroupsRequest } from './model/UpdateLineGroupsRequest';
import { UpdateLineGroupsRequestBody } from './model/UpdateLineGroupsRequestBody';
import { UpdateLineGroupsResponse } from './model/UpdateLineGroupsResponse';
import { UpdatePrivateZoneInfoReq } from './model/UpdatePrivateZoneInfoReq';
import { UpdatePrivateZoneRequest } from './model/UpdatePrivateZoneRequest';
import { UpdatePrivateZoneResponse } from './model/UpdatePrivateZoneResponse';
import { UpdatePrivateZoneStatusRequest } from './model/UpdatePrivateZoneStatusRequest';
import { UpdatePrivateZoneStatusResponse } from './model/UpdatePrivateZoneStatusResponse';
import { UpdatePtrRecordRequest } from './model/UpdatePtrRecordRequest';
import { UpdatePtrRecordResponse } from './model/UpdatePtrRecordResponse';
import { UpdatePtrReq } from './model/UpdatePtrReq';
import { UpdatePtrRequest } from './model/UpdatePtrRequest';
import { UpdatePtrRequestBody } from './model/UpdatePtrRequestBody';
import { UpdatePtrResponse } from './model/UpdatePtrResponse';
import { UpdatePublicZoneInfo } from './model/UpdatePublicZoneInfo';
import { UpdatePublicZoneRequest } from './model/UpdatePublicZoneRequest';
import { UpdatePublicZoneResponse } from './model/UpdatePublicZoneResponse';
import { UpdatePublicZoneStatusRequest } from './model/UpdatePublicZoneStatusRequest';
import { UpdatePublicZoneStatusResponse } from './model/UpdatePublicZoneStatusResponse';
import { UpdateRecordSetReq } from './model/UpdateRecordSetReq';
import { UpdateRecordSetRequest } from './model/UpdateRecordSetRequest';
import { UpdateRecordSetResponse } from './model/UpdateRecordSetResponse';
import { UpdateRecordSetsReq } from './model/UpdateRecordSetsReq';
import { UpdateRecordSetsRequest } from './model/UpdateRecordSetsRequest';
import { UpdateRecordSetsResponse } from './model/UpdateRecordSetsResponse';
import { UpdateResolverRuleRequest } from './model/UpdateResolverRuleRequest';
import { UpdateResolverRuleRequestBody } from './model/UpdateResolverRuleRequestBody';
import { UpdateResolverRuleResponse } from './model/UpdateResolverRuleResponse';
import { UpdateZoneStatusRequestBody } from './model/UpdateZoneStatusRequestBody';
import { ValuesItem } from './model/ValuesItem';
import { VersionItem } from './model/VersionItem';
import { Vpc } from './model/Vpc';
import { VpcsData } from './model/VpcsData';
import { ZoneData } from './model/ZoneData';

export class DnsClient {
    public static newBuilder(): ClientBuilder<DnsClient> {
            let client = new ClientBuilder<DnsClient>(newClient);
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
     * 终端节点绑定IP地址。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 终端节点绑定IP地址
     * @param {string} endpointId 终端节点ID。
     * @param {Ipaddresses} associateEndpointIpaddressRequestBody 终端节点绑定IP地址请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateEndpointIpaddress(associateEndpointIpaddressRequest?: AssociateEndpointIpaddressRequest): Promise<AssociateEndpointIpaddressResponse> {
        const options = ParamCreater().associateEndpointIpaddress(associateEndpointIpaddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解析器访问日志关联VPC。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解析器访问日志关联VPC
     * @param {string} id 访问日志ID。
     * @param {AssociateResolverQueryLogConfigRequestBody} associateResolverQueryLogConfigRequestBody 解析器访问日志关联VPC请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateResolverQueryLogConfig(associateResolverQueryLogConfigRequest?: AssociateResolverQueryLogConfigRequest): Promise<AssociateResolverQueryLogConfigResponse> {
        const options = ParamCreater().associateResolverQueryLogConfig(associateResolverQueryLogConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解析器转发规则关联VPC。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解析器转发规则关联VPC
     * @param {string} resolverruleId 转发规则ID。
     * @param {AssociateOrDisassociateRouterWithRuleRequestBody} associateResolverRuleRouterRequestBody 解析器转发规则关联VPC请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateResolverRuleRouter(associateResolverRuleRouterRequest?: AssociateResolverRuleRouterRequest): Promise<AssociateResolverRuleRouterResponse> {
        const options = ParamCreater().associateResolverRuleRouter(associateResolverRuleRouterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的内网域名创建完成后，可以通过调用此接口为内网域名关联新的VPC。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在内网域名上关联VPC
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {AssociateRouterRequestBody} associateRouterRequestBody 在内网域名上关联VPC请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateRouter(associateRouterRequest?: AssociateRouterRequest): Promise<AssociateRouterResponse> {
        const options = ParamCreater().associateRouter(associateRouterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提交批量创建公网记录集任务，返回任务ID。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建公网记录集
     * @param {BatchCreateCombinedPublicRecordsetsTaskRequestBody} batchCreateCombinedPublicRecordsetsTaskRequestBody 批量创建公网记录集请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateCombinedPublicRecordsetsTask(batchCreateCombinedPublicRecordsetsTaskRequest?: BatchCreateCombinedPublicRecordsetsTaskRequest): Promise<BatchCreateCombinedPublicRecordsetsTaskResponse> {
        const options = ParamCreater().batchCreateCombinedPublicRecordsetsTask(batchCreateCombinedPublicRecordsetsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提交批量创建公网记录集任务，返回任务ID。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建公网记录集
     * @param {BatchCreatePublicRecordsetsTaskRequestBody} batchCreatePublicRecordsetsTaskRequestBody 批量创建公网记录集请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreatePublicRecordsetsTask(batchCreatePublicRecordsetsTaskRequest?: BatchCreatePublicRecordsetsTaskRequest): Promise<BatchCreatePublicRecordsetsTaskResponse> {
        const options = ParamCreater().batchCreatePublicRecordsetsTask(batchCreatePublicRecordsetsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提交批量创建公网域名任务，返回任务ID。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建公网域名
     * @param {BatchCreatePublicZonesTaskRequestBody} batchCreatePublicZonesTaskRequestBody 批量创建公网域名请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreatePublicZonesTask(batchCreatePublicZonesTaskRequest?: BatchCreatePublicZonesTaskRequest): Promise<BatchCreatePublicZonesTaskResponse> {
        const options = ParamCreater().batchCreatePublicZonesTask(batchCreatePublicZonesTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定实例批量添加或删除标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定实例批量添加或删除标签
     * @param {string} resourceType 资源的类型：DNS-public_zone，DNS-private_zone，DNS-public_recordset，DNS-private_recordset，DNS-ptr_record。
     * @param {string} resourceId 资源ID。
     * @param {BatchHandTags} [batchHandTags] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateTag(batchCreateTagRequest?: BatchCreateTagRequest): Promise<BatchCreateTagResponse> {
        const options = ParamCreater().batchCreateTag(batchCreateTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除反向解析。本接口为原子操作，所有记录应全部删除成功或全部失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除反向解析
     * @param {BatchDeletePtrRecordsRequestBody} batchDeletePtrRecordsRequestBody 批量删除反向解析请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeletePtrRecords(batchDeletePtrRecordsRequest?: BatchDeletePtrRecordsRequest): Promise<BatchDeletePtrRecordsResponse> {
        const options = ParamCreater().batchDeletePtrRecords(batchDeletePtrRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提交批量删除公网记录集任务，返回任务ID。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除公网记录集
     * @param {BatchDeletePublicRecordsetsTaskRequestBody} batchDeletePublicRecordsetsTaskRequestBody 批量删除公网记录集请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeletePublicRecordsetsTask(batchDeletePublicRecordsetsTaskRequest?: BatchDeletePublicRecordsetsTaskRequest): Promise<BatchDeletePublicRecordsetsTaskResponse> {
        const options = ParamCreater().batchDeletePublicRecordsetsTask(batchDeletePublicRecordsetsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除记录集。
     * 响应结果中只包含本次实际删除的记录集。
     * 支持批量删除公网域名和内网域名的记录集。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除记录集
     * @param {BatchDeleteRecordSetsRequestBody} batchDeleteRecordSetsRequestBody 批量删除记录集请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteRecordSets(batchDeleteRecordSetsRequest?: BatchDeleteRecordSetsRequest): Promise<BatchDeleteRecordSetsResponse> {
        const options = ParamCreater().batchDeleteRecordSets(batchDeleteRecordSetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除域名。
     * 本接口为原子操作，所有记录应全部删除成功或全部失败。
     * 支持公网域名、内网域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除域名
     * @param {BatchDeleteZonesRequestBody} batchDeleteZonesRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteZones(batchDeleteZonesRequest?: BatchDeleteZonesRequest): Promise<BatchDeleteZonesResponse> {
        const options = ParamCreater().batchDeleteZones(batchDeleteZonesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量设置记录集状态。
     * 响应结果中只包含本次实际更新的记录集。
     * 支持公网域名和内网域名的记录集。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量设置记录集状态
     * @param {BatchSetRecordSetsStatusRequestBody} batchSetRecordSetsStatusRequestBody 批量设置记录集状态请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSetRecordSetsStatus(batchSetRecordSetsStatusRequest?: BatchSetRecordSetsStatusRequest): Promise<BatchSetRecordSetsStatusResponse> {
        const options = ParamCreater().batchSetRecordSetsStatus(batchSetRecordSetsStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量设置域名状态。
     * 响应结果中只包含本次实际更新的域名。
     * 支持公网域名、内网域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量设置域名状态
     * @param {BatchSetZonesStatusRequestBody} batchSetZonesStatusRequestBody 批量设置域名状态请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSetZonesStatus(batchSetZonesStatusRequest?: BatchSetZonesStatusRequest): Promise<BatchSetZonesStatusResponse> {
        const options = ParamCreater().batchSetZonesStatus(batchSetZonesStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提交批量转移公网域名任务，返回任务ID。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量转移公网域名
     * @param {BatchTransferPublicZonesTaskRequestBody} batchTransferPublicZonesTaskRequestBody 批量转移公网域名请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchTransferPublicZonesTask(batchTransferPublicZonesTaskRequest?: BatchTransferPublicZonesTaskRequest): Promise<BatchTransferPublicZonesTaskResponse> {
        const options = ParamCreater().batchTransferPublicZonesTask(batchTransferPublicZonesTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提交批量修改公网记录集任务，返回任务ID。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改公网记录集
     * @param {BatchUpdatePublicRecordsetsTaskRequestBody} batchUpdatePublicRecordsetsTaskRequestBody 批量修改公网记录集请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdatePublicRecordsetsTask(batchUpdatePublicRecordsetsTaskRequest?: BatchUpdatePublicRecordsetsTaskRequest): Promise<BatchUpdatePublicRecordsetsTaskResponse> {
        const options = ParamCreater().batchUpdatePublicRecordsetsTask(batchUpdatePublicRecordsetsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当创建子域名时提示“域名与其他租户冲突，你需要添加TXT授权校验”，通过调用当前接口生成子域名授权的TXT记录验证信息。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * &gt; TXT记录验证信息生成后，请前往主域名所属的DNS服务商处添加相应的TXT类型解析记录，主机记录和记录值与验证信息保持一致。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建公网子域名授权
     * @param {CreateAuthorizeTxtRecordRequestBody} createAuthorizeTxtRecordRequestBody 创建公网子域名授权请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAuthorizeTxtRecord(createAuthorizeTxtRecordRequest?: CreateAuthorizeTxtRecordRequest): Promise<CreateAuthorizeTxtRecordResponse> {
        const options = ParamCreater().createAuthorizeTxtRecord(createAuthorizeTxtRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户在主域名所属DNS服务商处添加TXT类型解析记录后，调用当前接口验证子域名授权状态。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 验证公网子域名授权
     * @param {string} id 授权请求ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAuthorizeTxtRecordVerification(createAuthorizeTxtRecordVerificationRequest?: CreateAuthorizeTxtRecordVerificationRequest): Promise<CreateAuthorizeTxtRecordVerificationResponse> {
        const options = ParamCreater().createAuthorizeTxtRecordVerification(createAuthorizeTxtRecordVerificationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建自定义线路。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义线路
     * @param {CreateCustomLineRequestBody} createCustomLineRequestBody 创建自定义线路请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCustomLine(createCustomLineRequest?: CreateCustomLineRequest): Promise<CreateCustomLineResponse> {
        const options = ParamCreater().createCustomLine(createCustomLineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建终端节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建终端节点
     * @param {CreateEndpointRequestBody} createEndpointRequestBody 创建终端节点请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEndpoint(createEndpointRequest?: CreateEndpointRequest): Promise<CreateEndpointResponse> {
        const options = ParamCreater().createEndpoint(createEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建线路分组。该接口部分区域未上线，如需使用请提交工单申请开通。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建线路分组
     * @param {CreateLineGroupsReq} createLineGroupsReq 创建线路分组请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLineGroup(createLineGroupRequest?: CreateLineGroupRequest): Promise<CreateLineGroupResponse> {
        const options = ParamCreater().createLineGroup(createLineGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 内网域名是指在VPC中生效的域名，内网域名创建后，用户可以将其与私网IP地址相关联，为云服务提供VPC内的内网域名解析服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建内网域名
     * @param {CreatePrivateZoneReq} [createPrivateZoneReq] 创建内网域名请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrivateZone(createPrivateZoneRequest?: CreatePrivateZoneRequest): Promise<CreatePrivateZoneResponse> {
        const options = ParamCreater().createPrivateZone(createPrivateZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 您在使用华为云云解析服务为自己注册的域名配置DNS解析之前，需要先将域名添加至云解析服务控制台。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建公网域名
     * @param {CreatePublicZoneReq} createPublicZone 创建公网域名请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPublicZone(createPublicZoneRequest?: CreatePublicZoneRequest): Promise<CreatePublicZoneResponse> {
        const options = ParamCreater().createPublicZone(createPublicZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建解析器访问日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建解析器访问日志
     * @param {CreateResolverQueryLogConfigRequestBody} createResolverQueryLogConfigRequestBody 创建解析器访问日志请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createResolverQueryLogConfig(createResolverQueryLogConfigRequest?: CreateResolverQueryLogConfigRequest): Promise<CreateResolverQueryLogConfigResponse> {
        const options = ParamCreater().createResolverQueryLogConfig(createResolverQueryLogConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建解析器转发规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建解析器转发规则
     * @param {CreateResolverRuleRequestBody} createResolverRuleRequestBody 创建解析器转发规则请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createResolverRule(createResolverRuleRequest?: CreateResolverRuleRequest): Promise<CreateResolverRuleResponse> {
        const options = ParamCreater().createResolverRule(createResolverRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建公网域名找回请求。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建公网域名找回
     * @param {CreateRetrievalRequestBody} createRetrievalRequestBody 创建公网域名找回请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRetrieval(createRetrievalRequest?: CreateRetrievalRequest): Promise<CreateRetrievalResponse> {
        const options = ParamCreater().createRetrieval(createRetrievalRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 验证公网域名找回。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 验证公网域名找回
     * @param {string} id 找回请求ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRetrievalVerification(createRetrievalVerificationRequest?: CreateRetrievalVerificationRequest): Promise<CreateRetrievalVerificationResponse> {
        const options = ParamCreater().createRetrievalVerification(createRetrievalVerificationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定实例添加标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定实例添加标签
     * @param {string} resourceType 资源的类型：DNS-public_zone，DNS-private_zone，DNS-public_recordset，DNS-private_recordset，DNS-ptr_record。
     * @param {string} resourceId 资源ID。
     * @param {CreateTagReq} [createTagReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTag(createTagRequest?: CreateTagRequest): Promise<CreateTagResponse> {
        const options = ParamCreater().createTag(createTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除自定义线路。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义线路
     * @param {string} lineId 自定义线路ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCustomLine(deleteCustomLineRequest?: DeleteCustomLineRequest): Promise<DeleteCustomLineResponse> {
        const options = ParamCreater().deleteCustomLine(deleteCustomLineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除终端节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除终端节点
     * @param {string} endpointId 终端节点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEndpoint(deleteEndpointRequest?: DeleteEndpointRequest): Promise<DeleteEndpointResponse> {
        const options = ParamCreater().deleteEndpoint(deleteEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除线路分组。该接口部分区域未上线，如需使用请提交工单申请开通。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除线路分组
     * @param {string} linegroupId 线路分组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLineGroup(deleteLineGroupRequest?: DeleteLineGroupRequest): Promise<DeleteLineGroupResponse> {
        const options = ParamCreater().deleteLineGroup(deleteLineGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的内网域名不再使用时，您可以通过调用此接口将其删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除内网域名
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePrivateZone(deletePrivateZoneRequest?: DeletePrivateZoneRequest): Promise<DeletePrivateZoneResponse> {
        const options = ParamCreater().deletePrivateZone(deletePrivateZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的公网域名不再使用时，您可以通过调用此接口将其删除。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除公网域名
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePublicZone(deletePublicZoneRequest?: DeletePublicZoneRequest): Promise<DeletePublicZoneResponse> {
        const options = ParamCreater().deletePublicZone(deletePublicZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除解析器访问日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除解析器访问日志
     * @param {string} id 访问日志ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResolverQueryLogConfig(deleteResolverQueryLogConfigRequest?: DeleteResolverQueryLogConfigRequest): Promise<DeleteResolverQueryLogConfigResponse> {
        const options = ParamCreater().deleteResolverQueryLogConfig(deleteResolverQueryLogConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除解析器转发规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除解析器转发规则
     * @param {string} resolverruleId 转发规则ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResolverRule(deleteResolverRuleRequest?: DeleteResolverRuleRequest): Promise<DeleteResolverRuleResponse> {
        const options = ParamCreater().deleteResolverRule(deleteResolverRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源标签
     * @param {string} resourceType 资源的类型：DNS-public_zone，DNS-private_zone，DNS-public_recordset，DNS-private_recordset，DNS-ptr_record。  
     * @param {string} resourceId 资源ID。
     * @param {string} key 标签key。  标签key不能为空或者空字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTag(deleteTagRequest?: DeleteTagRequest): Promise<DeleteTagResponse> {
        const options = ParamCreater().deleteTag(deleteTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 终端节点解绑IP地址。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 终端节点解绑IP地址
     * @param {string} endpointId 终端节点ID。
     * @param {string} ipaddressId IP地址ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateEndpointIpaddress(disassociateEndpointIpaddressRequest?: DisassociateEndpointIpaddressRequest): Promise<DisassociateEndpointIpaddressResponse> {
        const options = ParamCreater().disassociateEndpointIpaddress(disassociateEndpointIpaddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解析器访问日志解关联VPC。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解析器访问日志解关联VPC
     * @param {string} id 访问日志ID。
     * @param {AssociateResolverQueryLogConfigRequestBody} disassociateResolverQueryLogConfigRequestBody 解析器访问日志解关联VPC请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateResolverQueryLogConfig(disassociateResolverQueryLogConfigRequest?: DisassociateResolverQueryLogConfigRequest): Promise<DisassociateResolverQueryLogConfigResponse> {
        const options = ParamCreater().disassociateResolverQueryLogConfig(disassociateResolverQueryLogConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解析器转发规则解关联VPC。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解析器转发规则解关联VPC
     * @param {string} resolverruleId 转发规则ID。
     * @param {AssociateOrDisassociateRouterWithRuleRequestBody} disassociateResolverRuleRouterRequestBody 解析器转发规则解关联VPC请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateResolverRuleRouter(disassociateResolverRuleRouterRequest?: DisassociateResolverRuleRouterRequest): Promise<DisassociateResolverRuleRouterResponse> {
        const options = ParamCreater().disassociateResolverRuleRouter(disassociateResolverRuleRouterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的内网域名创建完成后，可以通过调用此接口为内网域名解除已关联的VPC。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在内网域名上解关联VPC
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {DisassociaterouterRequestBody} disassociaterouterRequestBody 在内网域名上解关联VPC请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateRouter(disassociateRouterRequest?: DisassociateRouterRequest): Promise<DisassociateRouterResponse> {
        const options = ParamCreater().disassociateRouter(disassociateRouterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询云解析服务支持的所有API版本信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询API版本信息列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersions(listApiVersionsRequest?: ListApiVersionsRequest): Promise<ListApiVersionsResponse> {
        const options = ParamCreater().listApiVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询批量操作任务列表。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询批量操作任务列表
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {number} [offset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 **约束限制：** 当设置marker不为空时，以marker为分页起始标识，offset不生效。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBatchOperationTasks(listBatchOperationTasksRequest?: ListBatchOperationTasksRequest): Promise<ListBatchOperationTasksResponse> {
        const options = ParamCreater().listBatchOperationTasks(listBatchOperationTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自定义线路。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义线路
     * @param {string} [lineId] 解析线路ID。
     * @param {string} [name] 解析线路名称。
     * @param {number} [limit] 分页查询时配置每页返回的资源个数。 当查询详细信息时：取值范围：0~100取值一般为10，20，50默认为100。 当查询概要信息时：取值范围：0~3000默认为3000。
     * @param {number} [offset] 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。  取值范围：0~2147483647  默认值为0。  当设置marker不为空时，以marker为分页起始标识，offset不生效。
     * @param {boolean} [showDetail] 是否查询详细信息。  取值范围：  true：是，查询详细信息。 false：否，不查询详细信息。 默认为true。
     * @param {string} [status] 资源状态。
     * @param {string} [ip] IP地址范围。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCustomLine(listCustomLineRequest?: ListCustomLineRequest): Promise<ListCustomLineResponse> {
        const options = ParamCreater().listCustomLine(listCustomLineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询终端节点下的IP地址列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询IP地址列表
     * @param {string} endpointId 终端节点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEndpointIpaddresses(listEndpointIpaddressesRequest?: ListEndpointIpaddressesRequest): Promise<ListEndpointIpaddressesResponse> {
        const options = ParamCreater().listEndpointIpaddresses(listEndpointIpaddressesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询终端节点VPC列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点VPC列表
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {number} [offset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 **约束限制：** 当设置marker不为空时，以marker为分页起始标识，offset不生效。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {string} [vpcId] 待查询的VPC的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEndpointVpcs(listEndpointVpcsRequest?: ListEndpointVpcsRequest): Promise<ListEndpointVpcsResponse> {
        const options = ParamCreater().listEndpointVpcs(listEndpointVpcsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询终端节点列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点列表
     * @param {string} direction 终端节点方向。 取值： inbound，表示入站终端节点。 outbound，表示出站终端节点。
     * @param {string} [vpcId] 待查询的终端节点所属VPC的ID。
     * @param {string} [name] 终端节点名称。
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {number} [offset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 **约束限制：** 当设置marker不为空时，以marker为分页起始标识，offset不生效。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEndpoints(listEndpointsRequest?: ListEndpointsRequest): Promise<ListEndpointsResponse> {
        const options = ParamCreater().listEndpoints(listEndpointsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询线路分组列表。该接口部分区域未上线，如需使用请提交工单申请开通。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询线路分组列表
     * @param {string} [lineId] 线路分组ID。 模糊匹配。
     * @param {string} [name] 线路分组名称。 模糊匹配。
     * @param {number} [limit] 分页查询时配置每页返回的资源个数。  取值范围：0~500  取值一般为10，20，50。默认值为500。
     * @param {number} [offset] 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。  取值范围：0~2147483647  默认值为0。  当设置marker不为空时，以marker为分页起始标识，offset不生效。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLineGroups(listLineGroupsRequest?: ListLineGroupsRequest): Promise<ListLineGroupsResponse> {
        const options = ParamCreater().listLineGroups(listLineGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询名称服务器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询名称服务器列表
     * @param {string} [type] 待查询名称服务器的类型。 取值范围: public, private。 如果为空，表示查询所有类型的名称服务器。 如果为public，表示查询公网的名称服务器。 如果为private，表示查询内网的名称服务器。 搜索模式精确搜索。 默认值为空。
     * @param {string} [region] 待查询的region ID。 当查询公网的名称服务器时，此处不填。 搜索模式精确搜索。 默认值为空。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNameServers(listNameServersRequest?: ListNameServersRequest): Promise<ListNameServersResponse> {
        const options = ParamCreater().listNameServers(listNameServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的内网域名创建成功后，您可以通过调用此接口查询单个内网域名信息，包括域名、ID、状态、记录集个数、企业项目、标签、TTL、创建时间、修改时间、描述等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询内网域名列表
     * @param {string} type **参数解释：** 待查询域名的类型。 **约束限制：** 不涉及。 **取值范围：** private：内网域名 **默认取值：** 不涉及。
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {string} [marker] **参数解释：** 分页查询的起始资源ID。 - 查询第一页时，设置为空。 - 查询下一页时，设置为上一页最后一条资源的ID。  **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {number} [offset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 **约束限制：** 当设置marker不为空时，以marker为分页起始标识，offset不生效。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {string} [tags] **参数解释：** 内网域名的标签，包括标签键和标签值。 取值格式：key1,value1|key2,value2。 **约束限制：** - 多个标签之间用“|”分开，每个标签的键值用英文逗号“,”相隔。 - 多个标签之间为“与”的关系。 - 搜索模式为精确搜索。如果资源标签值value是以&amp;ast;开头时，则按照&amp;ast;后面的值全模糊匹配。  **取值范围：** 最多可以查询20个标签。 **默认取值：** 不涉及。
     * @param {string} [name] **参数解释：** 域名。 搜索模式默认为模糊搜索。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [id] **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [status] **参数解释：** 内网域名状态。 **约束限制：** 不涉及。 **取值范围：** - ACTIVE：正常 - PENDING_CREATE：创建中 - PENDING_UPDATE：更新中 - PENDING_DELETE：删除中 - PENDING_FREEZE：冻结中 - FREEZE：冻结 - ILLEGAL：违规冻结 - POLICE：公安冻结 - PENDING_DISABLE：暂停中 - DISABLE：暂停 - ERROR：失败  **默认取值：** 不涉及。
     * @param {string} [searchMode] **参数解释：** 查询条件搜索模式。 **约束限制：** 不涉及。 **取值范围：** - like：模糊搜索 - equal：精确搜索  **默认取值：** 不涉及。
     * @param {string} [sortKey] **参数解释：** 查询结果中域名列表的排序字段。 **约束限制：** 不涉及。 **取值范围：** - name：域名 - created_at：创建时间 - updated_at：更新时间  **默认取值：** created_at
     * @param {string} [sortDir] **参数解释：** 查询结果中域名列表的排序方式。 **约束限制：** 不涉及。 **取值范围：** - desc：降序排序 - asc：升序排序  **默认取值：** desc
     * @param {string} [enterpriseProjectId] **参数解释：** 域名所属的企业项目ID。可以使用该字段过滤企业项目下的域名。 **约束限制：** 不涉及。             **取值范围：** 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。 **默认取值：** 0
     * @param {string} [routerId] **参数解释：** 关联VPC的ID。  **约束限制：** 不涉及。             **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivateZones(listPrivateZonesRequest?: ListPrivateZonesRequest): Promise<ListPrivateZonesResponse> {
        const options = ParamCreater().listPrivateZones(listPrivateZonesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的公网域名创建成功后，您可以通过调用此接口查询所有公网域名信息，包括域名、ID、状态、记录集个数、企业项目、标签、TTL、创建时间、修改时间、描述等。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网域名列表
     * @param {string} [type] **参数解释：** 待查询域名的类型。 **约束限制：** 不涉及。 **取值范围：** public：公网域名 **默认取值：** public。
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {string} [marker] **参数解释：** 分页查询的起始资源ID。 - 查询第一页时，设置为空。 - 查询下一页时，设置为上一页最后一条资源的ID。  **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {number} [offset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 **约束限制：** 当设置marker不为空时，以marker为分页起始标识，offset不生效。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {string} [tags] **参数解释：** 公网域名的标签，包括标签键和标签值。 取值格式：key1,value1|key2,value2。 **约束限制：** - 多个标签之间用“|”分开，每个标签的键值用英文逗号“,”相隔。 - 多个标签之间为“与”的关系。 - 搜索模式为精确搜索。如果资源标签值value是以&amp;ast;开头时，则按照&amp;ast;后面的值全模糊匹配。  **取值范围：** 最多可以查询20个标签。 **默认取值：** 不涉及。
     * @param {string} [name] **参数解释：** 域名。 搜索模式默认为模糊搜索。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [id] **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [status] **参数解释：** 公网域名状态。 **约束限制：** 不涉及。 **取值范围：** - ACTIVE：正常 - PENDING_CREATE：创建中 - PENDING_UPDATE：更新中 - PENDING_DELETE：删除中 - PENDING_FREEZE：冻结中 - FREEZE：冻结 - ILLEGAL：违规冻结 - POLICE：公安冻结 - PENDING_DISABLE：暂停中 - DISABLE：暂停 - ERROR：失败  **默认取值：** 不涉及。
     * @param {string} [searchMode] **参数解释：** 查询条件搜索模式。 **约束限制：** 不涉及。 **取值范围：** - like：模糊搜索 - equal：精确搜索  **默认取值：** 不涉及。
     * @param {string} [sortKey] **参数解释：** 查询结果中域名列表的排序字段。 **约束限制：** 不涉及。 **取值范围：** - name：域名 - created_at：创建时间 - updated_at：更新时间  **默认取值：** created_at
     * @param {string} [sortDir] **参数解释：** 查询结果中域名列表的排序方式。 **约束限制：** 不涉及。 **取值范围：** - desc：降序排序 - asc：升序排序  **默认取值：** desc
     * @param {string} [enterpriseProjectId] **参数解释：** 域名所属的企业项目ID。可以使用该字段过滤企业项目下的域名。 **约束限制：** 不涉及。             **取值范围：** 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。 **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPublicZones(listPublicZonesRequest?: ListPublicZonesRequest): Promise<ListPublicZonesResponse> {
        const options = ParamCreater().listPublicZones(listPublicZonesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询解析器访问日志列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询解析器访问日志列表
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {string} [marker] **参数解释：** 分页查询的起始资源ID。 - 查询第一页时，设置为空。 - 查询下一页时，设置为上一页最后一条资源的ID。  **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [vpcId] VPC ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResolverQueryLogConfigs(listResolverQueryLogConfigsRequest?: ListResolverQueryLogConfigsRequest): Promise<ListResolverQueryLogConfigsResponse> {
        const options = ParamCreater().listResolverQueryLogConfigs(listResolverQueryLogConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询解析器转发规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询解析器转发规则列表
     * @param {string} [domainName] 待查询的转发规则的域名。
     * @param {string} [name] 待查询的转发规则的名称。
     * @param {string} [endpointId] 终端节点ID。
     * @param {string} [id] 转发规则ID。
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {number} [offset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 **约束限制：** 当设置marker不为空时，以marker为分页起始标识，offset不生效。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {string} [marker] **参数解释：** 分页查询的起始资源ID。 - 查询第一页时，设置为空。 - 查询下一页时，设置为上一页最后一条资源的ID。  **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResolverRules(listResolverRulesRequest?: ListResolverRulesRequest): Promise<ListResolverRulesResponse> {
        const options = ParamCreater().listResolverRules(listResolverRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签查询资源实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 使用标签查询资源实例
     * @param {string} resourceType 资源的类型：DNS-public_zone，DNS-private_zone，DNS-public_recordset，DNS-private_recordset，DNS-ptr_record。
     * @param {ListTagReq} [listTagReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTag(listTagRequest?: ListTagRequest): Promise<ListTagResponse> {
        const options = ParamCreater().listTag(listTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例类型的所有标签集合
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定实例类型的所有标签集合
     * @param {string} resourceType 资源的类型：DNS-public_zone，DNS-private_zone，DNS-public_recordset，DNS-private_recordset，DNS-ptr_record。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTags(listTagsRequest?: ListTagsRequest): Promise<ListTagsResponse> {
        const options = ParamCreater().listTags(listTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的内网域名创建成功后，您可以通过调用此接口设置开启或者关闭内网域名的子域名递归解析代理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置内网域名的子域名递归解析代理
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {SetPrivateZoneProxyPatternRequestBody} setPrivateZoneProxyPatternRequestBody 设置内网域名的子域名递归解析代理请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setPrivateZoneProxyPattern(setPrivateZoneProxyPatternRequest?: SetPrivateZoneProxyPatternRequest): Promise<SetPrivateZoneProxyPatternResponse> {
        const options = ParamCreater().setPrivateZoneProxyPattern(setPrivateZoneProxyPatternRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定版本号的云解析服务API版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定版本号的API版本信息
     * @param {string} version **参数解释：** 待查询版本号。 **约束限制：** 不涉及。 **取值范围：** v2。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApiInfo(showApiInfoRequest?: ShowApiInfoRequest): Promise<ShowApiInfoResponse> {
        const options = ParamCreater().showApiInfo(showApiInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询已生成的子域名授权TXT记录验证信息。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网子域名授权
     * @param {string} zoneName 待创建的子域名。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAuthorizeTxtRecord(showAuthorizeTxtRecordRequest?: ShowAuthorizeTxtRecordRequest): Promise<ShowAuthorizeTxtRecordResponse> {
        const options = ParamCreater().showAuthorizeTxtRecord(showAuthorizeTxtRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询批量操作任务，分页返回失败条目。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询批量操作任务
     * @param {string} taskId **参数解释：** 批量操作任务的ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {number} [errorItemLimit] **参数解释：** 分页查询时配置每页返回的失败条目个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {number} [errorItemOffset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个失败条目开始查询。 **约束限制：** 不涉及。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBatchOperationTask(showBatchOperationTaskRequest?: ShowBatchOperationTaskRequest): Promise<ShowBatchOperationTaskResponse> {
        const options = ParamCreater().showBatchOperationTask(showBatchOperationTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询公网域名的域名诊断。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网域名的域名诊断
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} domainName 待诊断记录集的名称。
     * @param {string} [type] 待诊断记录集的类型。 取值范围：CNAME、TXT、MX。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDomainDetection(showDomainDetectionRequest?: ShowDomainDetectionRequest): Promise<ShowDomainDetectionResponse> {
        const options = ParamCreater().showDomainDetection(showDomainDetectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在DNS服务下的资源配额，包括公网域名配额、内网域名配额、记录集配额、反向解析配额、自定义线路配额、线路分组配额、入站终端节点配额、出站终端节点配额、转发规则配额等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户配额
     * @param {string} domainId 租户ID。
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
     * 查询公网域名的邮箱域名。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网域名的邮箱域名
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {number} [offset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 **约束限制：** 当设置marker不为空时，以marker为分页起始标识，offset不生效。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEmailRecordSet(showEmailRecordSetRequest?: ShowEmailRecordSetRequest): Promise<ShowEmailRecordSetResponse> {
        const options = ParamCreater().showEmailRecordSet(showEmailRecordSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询终端节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点
     * @param {string} endpointId 终端节点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEndpoint(showEndpointRequest?: ShowEndpointRequest): Promise<ShowEndpointResponse> {
        const options = ParamCreater().showEndpoint(showEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询线路分组。该接口部分区域未上线，如需使用请提交工单申请开通。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询线路分组
     * @param {string} linegroupId 线路分组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLineGroup(showLineGroupRequest?: ShowLineGroupRequest): Promise<ShowLineGroupResponse> {
        const options = ParamCreater().showLineGroup(showLineGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的内网域名创建成功后，您可以通过调用此接口查询单个内网域名信息，包括域名、ID、状态、记录集个数、企业项目、标签、TTL、创建时间、修改时间、描述等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询内网域名
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateZone(showPrivateZoneRequest?: ShowPrivateZoneRequest): Promise<ShowPrivateZoneResponse> {
        const options = ParamCreater().showPrivateZone(showPrivateZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的内网域名创建成功后，您可以通过调用此接口查询内网域名的名称服务器信息，包括优先级、DNS服务器地址等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询内网域名的名称服务器
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateZoneNameServer(showPrivateZoneNameServerRequest?: ShowPrivateZoneNameServerRequest): Promise<ShowPrivateZoneNameServerResponse> {
        const options = ParamCreater().showPrivateZoneNameServer(showPrivateZoneNameServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的公网域名创建成功后，您可以通过调用此接口查询单个公网域名信息，包括域名、ID、状态、记录集个数、企业项目、标签、TTL、创建时间、修改时间、描述等。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网域名
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPublicZone(showPublicZoneRequest?: ShowPublicZoneRequest): Promise<ShowPublicZoneResponse> {
        const options = ParamCreater().showPublicZone(showPublicZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的公网域名创建成功后，您可以通过调用此接口查询公网域名的名称服务器信息，包括主机名、优先级等。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网域名的名称服务器
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPublicZoneNameServer(showPublicZoneNameServerRequest?: ShowPublicZoneNameServerRequest): Promise<ShowPublicZoneNameServerResponse> {
        const options = ParamCreater().showPublicZoneNameServer(showPublicZoneNameServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询解析器访问日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询解析器访问日志
     * @param {string} id 访问日志ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResolverQueryLogConfig(showResolverQueryLogConfigRequest?: ShowResolverQueryLogConfigRequest): Promise<ShowResolverQueryLogConfigResponse> {
        const options = ParamCreater().showResolverQueryLogConfig(showResolverQueryLogConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询解析器转发规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询解析器转发规则
     * @param {string} resolverruleId 转发规则ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResolverRule(showResolverRuleRequest?: ShowResolverRuleRequest): Promise<ShowResolverRuleResponse> {
        const options = ParamCreater().showResolverRule(showResolverRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例的标签信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定实例的标签信息
     * @param {string} resourceType 资源的类型：DNS-public_zone，DNS-private_zone，DNS-public_recordset，DNS-private_recordset，DNS-ptr_record。
     * @param {string} resourceId 资源ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceTag(showResourceTagRequest?: ShowResourceTagRequest): Promise<ShowResourceTagResponse> {
        const options = ParamCreater().showResourceTag(showResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询公网域名找回请求。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网域名找回
     * @param {string} name 公网域名。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRetrieval(showRetrievalRequest?: ShowRetrievalRequest): Promise<ShowRetrievalResponse> {
        const options = ParamCreater().showRetrieval(showRetrievalRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询公网域名找回结果。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网域名找回结果
     * @param {string} id 找回请求ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRetrievalVerification(showRetrievalVerificationRequest?: ShowRetrievalVerificationRequest): Promise<ShowRetrievalVerificationResponse> {
        const options = ParamCreater().showRetrievalVerification(showRetrievalVerificationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询公网域名的网站域名。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网域名的网站域名
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {number} [offset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 **约束限制：** 当设置marker不为空时，以marker为分页起始标识，offset不生效。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWebsiteRecordSet(showWebsiteRecordSetRequest?: ShowWebsiteRecordSetRequest): Promise<ShowWebsiteRecordSetResponse> {
        const options = ParamCreater().showWebsiteRecordSet(showWebsiteRecordSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询域名当前DNS服务器地址及华为云提供的DNS服务器地址。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网域名的DNS服务器地址
     * @param {string} domainName **参数解释：** 待查询的公网域名。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showZoneNameServer(showZoneNameServerRequest?: ShowZoneNameServerRequest): Promise<ShowZoneNameServerResponse> {
        const options = ParamCreater().showZoneNameServer(showZoneNameServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改自定义线路。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改自定义线路
     * @param {string} lineId 自定义线路ID。
     * @param {UpdateCustomLineRequestBody} updateCustomLineRequestBody 更新自定义线路请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCustomLine(updateCustomLineRequest?: UpdateCustomLineRequest): Promise<UpdateCustomLineResponse> {
        const options = ParamCreater().updateCustomLine(updateCustomLineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改终端节点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改终端节点
     * @param {string} endpointId 终端节点ID。
     * @param {UpdateEndpointRequestBody} updateEndpointRequestBody 修改终端节点请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEndpoint(updateEndpointRequest?: UpdateEndpointRequest): Promise<UpdateEndpointResponse> {
        const options = ParamCreater().updateEndpoint(updateEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改线路分组。该接口部分区域未上线，如需使用请提交工单申请开通。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改线路分组
     * @param {string} linegroupId 线路分组ID。
     * @param {UpdateLineGroupsRequestBody} updateLineGroupsRequestBody 更新线路分组请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLineGroups(updateLineGroupsRequest?: UpdateLineGroupsRequest): Promise<UpdateLineGroupsResponse> {
        const options = ParamCreater().updateLineGroups(updateLineGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的内网域名创建成功后，您可以通过调用此接口修改内网域名的基本信息，包括TTL、描述等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改内网域名
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {UpdatePrivateZoneInfoReq} updatePrivateZoneInfoReq 修改内网域名请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePrivateZone(updatePrivateZoneRequest?: UpdatePrivateZoneRequest): Promise<UpdatePrivateZoneResponse> {
        const options = ParamCreater().updatePrivateZone(updatePrivateZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的内网域名创建成功后，您可以通过调用此接口设置内网域名的状态，包括暂停、启用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置内网域名状态
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {UpdateZoneStatusRequestBody} updatePrivateZoneStatusRequestBody 设置内网域名状态请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePrivateZoneStatus(updatePrivateZoneStatusRequest?: UpdatePrivateZoneStatusRequest): Promise<UpdatePrivateZoneStatusResponse> {
        const options = ParamCreater().updatePrivateZoneStatus(updatePrivateZoneStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的公网域名创建成功后，您可以通过调用此接口修改公网域名的基本信息，包括TTL、描述等。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改公网域名
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {UpdatePublicZoneInfo} updatePublicZoneInfo 修改公网域名请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePublicZone(updatePublicZoneRequest?: UpdatePublicZoneRequest): Promise<UpdatePublicZoneResponse> {
        const options = ParamCreater().updatePublicZone(updatePublicZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的公网域名创建成功后，您可以通过调用此接口设置公网域名的状态，包括暂停、启用。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置公网域名状态
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {UpdateZoneStatusRequestBody} updatePublicZoneStatusRequestBody 设置公网域名状态请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePublicZoneStatus(updatePublicZoneStatusRequest?: UpdatePublicZoneStatusRequest): Promise<UpdatePublicZoneStatusResponse> {
        const options = ParamCreater().updatePublicZoneStatus(updatePublicZoneStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改解析器转发规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改解析器转发规则
     * @param {string} resolverruleId 转发规则ID。
     * @param {UpdateResolverRuleRequestBody} updateResolverRuleRequestBody 修改解析器转发规则请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateResolverRule(updateResolverRuleRequest?: UpdateResolverRuleRequest): Promise<UpdateResolverRuleResponse> {
        const options = ParamCreater().updateResolverRule(updateResolverRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭公网域名的DNSSEC。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭DNSSEC
     * @param {string} zoneId 公网域名的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableDnssecConfig(disableDnssecConfigRequest?: DisableDnssecConfigRequest): Promise<DisableDnssecConfigResponse> {
        const options = ParamCreater().disableDnssecConfig(disableDnssecConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启公网域名的DNSSEC。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启DNSSEC
     * @param {string} zoneId 公网域名的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableDnssecConfig(enableDnssecConfigRequest?: EnableDnssecConfigRequest): Promise<EnableDnssecConfigResponse> {
        const options = ParamCreater().enableDnssecConfig(enableDnssecConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询公网域名的DNSSEC。
     * 
     * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
     * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DNSSEC
     * @param {string} zoneId 公网域名的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDnssecConfig(showDnssecConfigRequest?: ShowDnssecConfigRequest): Promise<ShowDnssecConfigResponse> {
        const options = ParamCreater().showDnssecConfig(showDnssecConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置弹性公网IP的反向解析记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置弹性公网IP的反向解析记录
     * @param {string} region 租户的区域信息。
     * @param {string} floatingipId 弹性公网IP（EIP）的ID。
     * @param {CreatePtrReq} createPtrReq 设置弹性公网IP的反向解析记录请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEipRecordSet(createEipRecordSetRequest?: CreateEipRecordSetRequest): Promise<CreateEipRecordSetResponse> {
        const options = ParamCreater().createEipRecordSet(createEipRecordSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 记录集是指一组资源记录的集合，这些资源记录属于同一域名，用于定义域名支持的解析类型以及解析值。您的域名创建完成后，可以通过调用此接口为域名添加不同类型的记录集。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建记录集
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {CreateRecordSetRequestBody} createRecordSetRequestBody 创建记录集请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRecordSet(createRecordSetRequest?: CreateRecordSetRequest): Promise<CreateRecordSetResponse> {
        const options = ParamCreater().createRecordSet(createRecordSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的记录集不再使用时，您可以通过调用此接口将其删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除记录集
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} recordsetId **参数解释：** 记录集ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRecordSet(deleteRecordSetRequest?: DeleteRecordSetRequest): Promise<DeleteRecordSetResponse> {
        const options = ParamCreater().deleteRecordSet(deleteRecordSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性公网IP的反向解析记录列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性公网IP的反向解析记录列表
     * @param {string} [marker] 分页查询起始的资源ID，为空时为查询第一页。  默认值为空。
     * @param {number} [limit] 分页查询时配置每页返回的资源个数。  取值范围：0~500  取值一般为10，20，50。默认值为500。
     * @param {number} [offset] 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。  取值范围：0~2147483647  默认值为0。  当设置marker不为空时，以marker为分页起始标识，offset不生效。
     * @param {string} [enterpriseProjectId] 反向解析关联的企业项目ID，长度不超过36个字符。
     * @param {string} [tags] 资源标签。  取值格式：key1,value1|key2,value2  多个标签之间用“|”分开，每个标签的键值用英文逗号“,”相隔。
     * @param {string} [status] 资源状态。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPtrRecords(listPtrRecordsRequest?: ListPtrRecordsRequest): Promise<ListPtrRecordsResponse> {
        const options = ParamCreater().listPtrRecords(listPtrRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的记录集创建成功后，您可以通过调用此接口查询所有记录集信息，包括名称、ID、状态、所属域名、解析记录值、标签、TTL、创建时间、修改时间、描述等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户记录集列表
     * @param {string} [zoneType] **参数解释：** 记录集所属域名的类型。 **约束限制：** 不涉及。 **取值范围：** - public：表示查询公网域名的记录集。 - private：表示查询内网域名的记录集。  **默认取值：** public。
     * @param {string} [marker] **参数解释：** 分页查询的起始资源ID。 - 查询第一页时，设置为空。 - 查询下一页时，设置为上一页最后一条资源的ID。  **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [searchMode] **参数解释：** 查询条件搜索模式。 **约束限制：** 不涉及。 **取值范围：** - like：模糊搜索 - equal：精确搜索  **默认取值：** 不涉及。
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {number} [offset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 **约束限制：** 当设置marker不为空时，以marker为分页起始标识，offset不生效。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {string} [tags] **参数解释：** 记录集的标签，包括标签键和标签值。 取值格式：key1,value1|key2,value2。 **约束限制：** - 多个标签之间用“|”分开，每个标签的键值用英文逗号“,”相隔。 - 多个标签之间为“与”的关系。 - 搜索模式为精确搜索。如果资源标签值value是以&amp;ast;开头时，则按照&amp;ast;后面的值全模糊匹配。  **取值范围：** 最多可以查询20个标签。 **默认取值：** 不涉及。
     * @param {string} [status] **参数解释：** 记录集状态。 **约束限制：** 不涉及。 **取值范围：** - ACTIVE：正常 - PENDING_CREATE：创建中 - PENDING_UPDATE：更新中 - PENDING_DELETE：删除中 - PENDING_FREEZE：冻结中 - FREEZE：冻结 - ILLEGAL：违规冻结 - POLICE：公安冻结 - PENDING_DISABLE：暂停中 - DISABLE：暂停 - ERROR：失败  **默认取值：** 不涉及。
     * @param {string} [type] **参数解释：** 记录集的类型。 **约束限制：** 不涉及。 **取值范围：** - 公网域名的记录类型: A、AAAA、MX、CNAME、TXT、SRV、NS、SOA、CAA。 - 内网域名的记录类型: A、AAAA、MX、CNAME、TXT、PTR、SRV、NS、SOA。  **默认取值：** 不涉及。
     * @param {string} [name] **参数解释：** 待查询的记录集的域名中包含此name。 搜索模式默认为模糊搜索。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [id] **参数解释：** 待查询的记录集ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [records] **参数解释：** 待查询的记录集的值。 搜索模式默认为模糊搜索。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [sortKey] **参数解释：** 查询结果中记录集列表的排序字段。 **约束限制：** 不涉及。 **取值范围：** - name：记录集名称 - type：记录集类型  **默认取值：** 默认值为空，表示不排序。
     * @param {string} [sortDir] **参数解释：** 查询结果中记录集列表的排序方式。 **约束限制：** 不涉及。 **取值范围：** - desc：降序排序 - asc：升序排序  **默认取值：** 默认值为空，表示不排序。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecordSets(listRecordSetsRequest?: ListRecordSetsRequest): Promise<ListRecordSetsResponse> {
        const options = ParamCreater().listRecordSets(listRecordSetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的记录集创建成功后，您可以通过调用此接口查询指定域名下的所有记录集信息，包括名称、ID、状态、所属域名、解析记录值、标签、TTL、创建时间、修改时间、描述等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名下的记录集列表
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [searchMode] **参数解释：** 查询条件搜索模式。 **约束限制：** 不涉及。 **取值范围：** - like：模糊搜索 - equal：精确搜索  **默认取值：** 不涉及。
     * @param {string} [marker] **参数解释：** 分页查询的起始资源ID。 - 查询第一页时，设置为空。 - 查询下一页时，设置为上一页最后一条资源的ID。  **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {number} [offset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 **约束限制：** 当设置marker不为空时，以marker为分页起始标识，offset不生效。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {string} [tags] **参数解释：** 记录集的标签，包括标签键和标签值。 取值格式：key1,value1|key2,value2。 **约束限制：** - 多个标签之间用“|”分开，每个标签的键值用英文逗号“,”相隔。 - 多个标签之间为“与”的关系。 - 搜索模式为精确搜索。如果资源标签值value是以&amp;ast;开头时，则按照&amp;ast;后面的值全模糊匹配。  **取值范围：** 最多可以查询20个标签。 **默认取值：** 不涉及。
     * @param {string} [status] **参数解释：** 记录集状态。 **约束限制：** 不涉及。 **取值范围：** - ACTIVE：正常 - PENDING_CREATE：创建中 - PENDING_UPDATE：更新中 - PENDING_DELETE：删除中 - PENDING_FREEZE：冻结中 - FREEZE：冻结 - ILLEGAL：违规冻结 - POLICE：公安冻结 - PENDING_DISABLE：暂停中 - DISABLE：暂停 - ERROR：失败  **默认取值：** 不涉及。
     * @param {string} [type] **参数解释：** 记录集的类型。 **约束限制：** 不涉及。 **取值范围：** - 公网域名的记录类型: A、AAAA、MX、CNAME、TXT、SRV、NS、SOA、CAA。 - 内网域名的记录类型: A、AAAA、MX、CNAME、TXT、PTR、SRV、NS、SOA。  **默认取值：** 不涉及。
     * @param {string} [name] **参数解释：** 待查询的记录集的域名中包含此name。 搜索模式默认为模糊搜索。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [id] **参数解释：** 待查询的记录集ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [sortKey] **参数解释：** 查询结果中记录集列表的排序字段。 **约束限制：** 不涉及。 **取值范围：** - name：记录集名称 - type：记录集类型  **默认取值：** 默认值为空，表示不排序。
     * @param {string} [sortDir] **参数解释：** 查询结果中记录集列表的排序方式。 **约束限制：** 不涉及。 **取值范围：** - desc：降序排序 - asc：升序排序  **默认取值：** 默认值为空，表示不排序。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecordSetsByZone(listRecordSetsByZoneRequest?: ListRecordSetsByZoneRequest): Promise<ListRecordSetsByZoneResponse> {
        const options = ParamCreater().listRecordSetsByZone(listRecordSetsByZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将弹性公网IP的反向解析记录恢复为默认值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将弹性公网IP的反向解析记录恢复为默认值
     * @param {string} region 域名所属的区域。
     * @param {string} floatingipId 弹性公网IP（EIP）的ID。
     * @param {RestorePtrReq} [restorePtrReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restorePtrRecord(restorePtrRecordRequest?: RestorePtrRecordRequest): Promise<RestorePtrRecordResponse> {
        const options = ParamCreater().restorePtrRecord(restorePtrRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性公网IP的反向解析记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性公网IP的反向解析记录
     * @param {string} region 租户的区域信息。 
     * @param {string} floatingipId 弹性公网IP（EIP）的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPtrRecordSet(showPtrRecordSetRequest?: ShowPtrRecordSetRequest): Promise<ShowPtrRecordSetResponse> {
        const options = ParamCreater().showPtrRecordSet(showPtrRecordSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的记录集创建成功后，您可以通过调用此接口查询指定域名下的所有记录集信息，包括名称、ID、状态、所属域名、解析记录值、标签、TTL、创建时间、修改时间、描述等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询记录集
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} recordsetId **参数解释：** 记录集ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecordSet(showRecordSetRequest?: ShowRecordSetRequest): Promise<ShowRecordSetResponse> {
        const options = ParamCreater().showRecordSet(showRecordSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改弹性公网IP的反向解析记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改弹性公网IP的反向解析记录
     * @param {string} region 域名所属的区域。
     * @param {string} floatingipId 弹性公网IP（EIP）的ID。
     * @param {UpdatePtrReq} [updatePtrReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePtrRecord(updatePtrRecordRequest?: UpdatePtrRecordRequest): Promise<UpdatePtrRecordResponse> {
        const options = ParamCreater().updatePtrRecord(updatePtrRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的记录集创建成功后，您可以通过调用此接口修改记录集的信息，包括域名、类型、记录值、TTL、描述等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改记录集
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} recordsetId **参数解释：** 记录集ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {UpdateRecordSetReq} [updateRecordSetReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRecordSet(updateRecordSetRequest?: UpdateRecordSetRequest): Promise<UpdateRecordSetResponse> {
        const options = ParamCreater().updateRecordSet(updateRecordSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提交批量创建记录集任务，返回任务ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建记录集
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {BatchCreateRecordSetsTaskRequestBody} batchCreateRecordSetsTaskRequestBody 批量创建记录集请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateRecordSetsTask(batchCreateRecordSetsTaskRequest?: BatchCreateRecordSetsTaskRequest): Promise<BatchCreateRecordSetsTaskResponse> {
        const options = ParamCreater().batchCreateRecordSetsTask(batchCreateRecordSetsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除域名下的记录集，当删除的资源不存在时，则默认删除成功。
     * 响应结果中只包含本次实际删除的资源。
     * 支持公网域名和内网域名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除域名下的记录集
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {BatchDeleteRecordSetWithLineRequestBody} batchDeleteRecordSetWithLineRequestBody 批量删除域名下的记录集请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteRecordSetWithLine(batchDeleteRecordSetWithLineRequest?: BatchDeleteRecordSetWithLineRequest): Promise<BatchDeleteRecordSetWithLineResponse> {
        const options = ParamCreater().batchDeleteRecordSetWithLine(batchDeleteRecordSetWithLineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改记录集。属于原子性操作，请求记录集将全部完成修改，或不做任何修改。
     * 仅公网域名支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改记录集
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {BatchUpdateRecordSetWithLineRequestBody} batchUpdateRecordSetWithLineRequestBody 批量修改记录集请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateRecordSetWithLine(batchUpdateRecordSetWithLineRequest?: BatchUpdateRecordSetWithLineRequest): Promise<BatchUpdateRecordSetWithLineResponse> {
        const options = ParamCreater().batchUpdateRecordSetWithLine(batchUpdateRecordSetWithLineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建弹性公网IP的反向解析记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建弹性公网IP的反向解析记录
     * @param {CreatePtrRequestBody} createPtrRequestBody 创建弹性公网IP的反向解析记录请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPtr(createPtrRequest?: CreatePtrRequest): Promise<CreatePtrResponse> {
        const options = ParamCreater().createPtr(createPtrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量线路创建记录集。属于原子性操作，如果存在一个参数校验不通过，则创建失败。仅公网域名支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量线路创建记录集
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {CreateRSetBatchLinesReq} createRSetBatchLinesReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRecordSetWithBatchLines(createRecordSetWithBatchLinesRequest?: CreateRecordSetWithBatchLinesRequest): Promise<CreateRecordSetWithBatchLinesResponse> {
        const options = ParamCreater().createRecordSetWithBatchLines(createRecordSetWithBatchLinesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 记录集是指一组资源记录的集合，这些资源记录属于同一域名，用于定义域名支持的解析类型以及解析值。您的域名创建完成后，可以通过调用此接口为域名添加不同类型的记录集。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建记录集
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {CreateRecordSetWithLineRequestBody} createRecordSetWithLineRequestBody 创建记录集请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRecordSetWithLine(createRecordSetWithLineRequest?: CreateRecordSetWithLineRequest): Promise<CreateRecordSetWithLineResponse> {
        const options = ParamCreater().createRecordSetWithLine(createRecordSetWithLineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除批量创建记录集任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除批量创建记录集任务
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBatchCreateRecordSetsTask(deleteBatchCreateRecordSetsTaskRequest?: DeleteBatchCreateRecordSetsTaskRequest): Promise<DeleteBatchCreateRecordSetsTaskResponse> {
        const options = ParamCreater().deleteBatchCreateRecordSetsTask(deleteBatchCreateRecordSetsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将弹性公网IP的反向解析记录恢复为默认值。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将弹性公网IP的反向解析记录恢复为默认值
     * @param {string} ptrId 反向解析ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePtr(deletePtrRequest?: DeletePtrRequest): Promise<DeletePtrResponse> {
        const options = ParamCreater().deletePtr(deletePtrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的记录集不再使用时，您可以通过调用此接口将其删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除记录集
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} recordsetId **参数解释：** 记录集ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRecordSets(deleteRecordSetsRequest?: DeleteRecordSetsRequest): Promise<DeleteRecordSetsResponse> {
        const options = ParamCreater().deleteRecordSets(deleteRecordSetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性公网IP的反向解析记录列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性公网IP的反向解析记录列表
     * @param {string} [marker] 分页查询起始的资源ID，为空时为查询第一页。 默认值为空。
     * @param {number} [limit] 分页查询时配置每页返回的资源个数。 取值范围：0~500 取值一般为10，20，50。默认值为500。
     * @param {number} [offset] 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 取值范围：0~2147483647 默认值为0。 当设置marker不为空时，以marker为分页起始标识，offset不生效。
     * @param {string} [enterpriseProjectId] 反向解析关联的企业项目ID，长度不超过36个字符。
     * @param {string} [tags] 资源标签。 取值格式：key1,value1|key2,value2 多个标签之间用“|”分开，每个标签的键值用英文逗号“,”相隔。
     * @param {string} [status] 资源状态。
     * @param {string} [resourceType] 弹性公网IP类型。  取值范围： publicip：弹性公网IP（EIP）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPtrs(listPtrsRequest?: ListPtrsRequest): Promise<ListPtrsResponse> {
        const options = ParamCreater().listPtrs(listPtrsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 公网域名支持设置线路解析，当您的公网域名创建完成并添加记录集时，可通过调用此接口查询公网域名的所有解析线路。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网域名的线路列表
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {number} [offset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 **约束限制：** 当设置marker不为空时，以marker为分页起始标识，offset不生效。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPublicZoneLines(listPublicZoneLinesRequest?: ListPublicZoneLinesRequest): Promise<ListPublicZoneLinesResponse> {
        const options = ParamCreater().listPublicZoneLines(listPublicZoneLinesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的记录集创建成功后，您可以通过调用此接口查询所有记录集信息，包括名称、ID、状态、所属域名、解析记录值、标签、TTL、创建时间、修改时间、描述等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户记录集列表
     * @param {string} [zoneType] **参数解释：** 记录集所属域名的类型。 **约束限制：** 不涉及。 **取值范围：** - public：表示查询公网域名的记录集。 - private：表示查询内网域名的记录集。  **默认取值：** public。
     * @param {string} [marker] **参数解释：** 分页查询的起始资源ID。 - 查询第一页时，设置为空。 - 查询下一页时，设置为上一页最后一条资源的ID。  **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {number} [offset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 **约束限制：** 当设置marker不为空时，以marker为分页起始标识，offset不生效。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {string} [zoneId] **参数解释：** 域名的ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [lineId] **参数解释：** 解析线路ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [tags] **参数解释：** 记录集的标签，包括标签键和标签值。 取值格式：key1,value1|key2,value2。 **约束限制：** - 多个标签之间用“|”分开，每个标签的键值用英文逗号“,”相隔。 - 多个标签之间为“与”的关系。 - 搜索模式为精确搜索。如果资源标签值value是以&amp;ast;开头时，则按照&amp;ast;后面的值全模糊匹配。  **取值范围：** 最多可以查询20个标签。 **默认取值：** 不涉及。
     * @param {string} [status] **参数解释：** 记录集状态。 **约束限制：** 不涉及。 **取值范围：** - ACTIVE：正常 - PENDING_CREATE：创建中 - PENDING_UPDATE：更新中 - PENDING_DELETE：删除中 - PENDING_FREEZE：冻结中 - FREEZE：冻结 - ILLEGAL：违规冻结 - POLICE：公安冻结 - PENDING_DISABLE：暂停中 - DISABLE：暂停 - ERROR：失败  **默认取值：** 不涉及。
     * @param {string} [type] **参数解释：** 记录集的类型。 **约束限制：** 不涉及。 **取值范围：** - 公网域名的记录类型: A、AAAA、MX、CNAME、TXT、SRV、NS、SOA、CAA。 - 内网域名的记录类型: A、AAAA、MX、CNAME、TXT、PTR、SRV、NS、SOA。  **默认取值：** 不涉及。
     * @param {string} [name] **参数解释：** 待查询的记录集的域名中包含此name。 搜索模式默认为模糊搜索。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [id] **参数解释：** 待查询的记录集ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [records] **参数解释：** 待查询的记录集的值。 搜索模式默认为模糊搜索。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [sortKey] **参数解释：** 查询结果中记录集列表的排序字段。 **约束限制：** 不涉及。 **取值范围：** - name：记录集名称 - type：记录集类型 - created_at：创建时间 - updated_at：更新时间  **默认取值：** created_at
     * @param {string} [sortDir] **参数解释：** 查询结果中记录集列表的排序方式。 **约束限制：** 不涉及。 **取值范围：** - desc：降序排序 - asc：升序排序  **默认取值：** desc
     * @param {string} [healthCheckId] **参数解释：** 健康检查ID。 搜索模式默认为模糊搜索。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [searchMode] **参数解释：** 查询条件搜索模式。 **约束限制：** 不涉及。 **取值范围：** - like：模糊搜索 - equal：精确搜索  **默认取值：** name默认模糊搜索，其他默认精确搜索。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecordSetsWithLine(listRecordSetsWithLineRequest?: ListRecordSetsWithLineRequest): Promise<ListRecordSetsWithLineResponse> {
        const options = ParamCreater().listRecordSetsWithLine(listRecordSetsWithLineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询系统预置解析线路。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询系统线路
     * @param {string} [locale] **参数解释：** 指定显示语言。 **约束限制：** 不涉及。 **取值范围：** - zh-cn：中文 - en-us：英语             - es-us：西班牙语 - pt-br：葡萄牙语 **默认取值：** zh-cn
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~1000。 **默认取值：** 1000
     * @param {number} [offset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 **约束限制：** 当设置marker不为空时，以marker为分页起始标识，offset不生效。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSystemLines(listSystemLinesRequest?: ListSystemLinesRequest): Promise<ListSystemLinesResponse> {
        const options = ParamCreater().listSystemLines(listSystemLinesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的记录集创建成功后，您可以通过调用此接口设置记录集的状态，包括暂停、启用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置记录集状态
     * @param {string} recordsetId **参数解释：** 记录集ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {SetRecordSetsStatusRequestBody} [setRecordSetsStatusRequestBody] 设置记录集状态请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setRecordSetsStatus(setRecordSetsStatusRequest?: SetRecordSetsStatusRequest): Promise<SetRecordSetsStatusResponse> {
        const options = ParamCreater().setRecordSetsStatus(setRecordSetsStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询批量创建记录集任务，分页返回失败条目。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询批量创建记录集任务
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {number} [errorItemLimit] **参数解释：** 分页查询时配置每页返回的失败条目个数。 **约束限制：** 不涉及。 **取值范围：** 0~2000。 **默认取值：** 2000
     * @param {number} [errorItemOffset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个失败条目开始查询。 **约束限制：** 不涉及。 **取值范围：** 0~2000。 **默认取值：** 0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBatchCreateRecordSetsTask(showBatchCreateRecordSetsTaskRequest?: ShowBatchCreateRecordSetsTaskRequest): Promise<ShowBatchCreateRecordSetsTaskResponse> {
        const options = ParamCreater().showBatchCreateRecordSetsTask(showBatchCreateRecordSetsTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性公网IP的反向解析记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性公网IP的反向解析记录
     * @param {string} ptrId 反向解析ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPtr(showPtrRequest?: ShowPtrRequest): Promise<ShowPtrResponse> {
        const options = ParamCreater().showPtr(showPtrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的记录集创建成功后，您可以通过调用此接口查询指定域名下的所有记录集信息，包括名称、ID、状态、所属域名、解析记录值、标签、TTL、创建时间、修改时间、描述等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询域名下的记录集列表
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [marker] **参数解释：** 分页查询的起始资源ID。 - 查询第一页时，设置为空。 - 查询下一页时，设置为上一页最后一条资源的ID。  **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {number} [limit] **参数解释：** 分页查询时配置每页返回的资源个数。 **约束限制：** 不涉及。 **取值范围：** 0~500。 **默认取值：** 500
     * @param {number} [offset] **参数解释：** 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。 **约束限制：** 当设置marker不为空时，以marker为分页起始标识，offset不生效。 **取值范围：** 0~2147483647。 **默认取值：** 0
     * @param {string} [lineId] **参数解释：** 解析线路ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [tags] **参数解释：** 记录集的标签，包括标签键和标签值。 取值格式：key1,value1|key2,value2。 **约束限制：** - 多个标签之间用“|”分开，每个标签的键值用英文逗号“,”相隔。 - 多个标签之间为“与”的关系。 - 搜索模式为精确搜索。如果资源标签值value是以&amp;ast;开头时，则按照&amp;ast;后面的值全模糊匹配。  **取值范围：** 最多可以查询20个标签。 **默认取值：** 不涉及。
     * @param {string} [status] **参数解释：** 记录集状态。 **约束限制：** 不涉及。 **取值范围：** - ACTIVE：正常 - PENDING_CREATE：创建中 - PENDING_UPDATE：更新中 - PENDING_DELETE：删除中 - PENDING_FREEZE：冻结中 - FREEZE：冻结 - ILLEGAL：违规冻结 - POLICE：公安冻结 - PENDING_DISABLE：暂停中 - DISABLE：暂停 - ERROR：失败  **默认取值：** 不涉及。
     * @param {string} [type] **参数解释：** 记录集的类型。 **约束限制：** 不涉及。 **取值范围：** - 公网域名的记录类型: A、AAAA、MX、CNAME、TXT、SRV、NS、SOA、CAA。 - 内网域名的记录类型: A、AAAA、MX、CNAME、TXT、PTR、SRV、NS、SOA。  **默认取值：** 不涉及。
     * @param {string} [name] **参数解释：** 待查询的记录集的域名中包含此name。 搜索模式默认为模糊搜索。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [id] **参数解释：** 待查询的记录集ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} [sortKey] **参数解释：** 查询结果中记录集列表的排序字段。 **约束限制：** 不涉及。 **取值范围：** - name：记录集名称 - type：记录集类型 - created_at：创建时间 - updated_at：更新时间  **默认取值：** created_at
     * @param {string} [sortDir] **参数解释：** 查询结果中记录集列表的排序方式。 **约束限制：** 不涉及。 **取值范围：** - desc：降序排序 - asc：升序排序  **默认取值：** desc
     * @param {string} [searchMode] **参数解释：** 查询条件搜索模式。 **约束限制：** 不涉及。 **取值范围：** - like：模糊搜索 - equal：精确搜索  **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecordSetByZone(showRecordSetByZoneRequest?: ShowRecordSetByZoneRequest): Promise<ShowRecordSetByZoneResponse> {
        const options = ParamCreater().showRecordSetByZone(showRecordSetByZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的记录集创建成功后，您可以通过调用此接口查询单个记录集信息，包括名称、ID、状态、所属域名、解析记录值、标签、TTL、创建时间、修改时间、描述等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询记录集
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} recordsetId **参数解释：** 记录集ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecordSetWithLine(showRecordSetWithLineRequest?: ShowRecordSetWithLineRequest): Promise<ShowRecordSetWithLineResponse> {
        const options = ParamCreater().showRecordSetWithLine(showRecordSetWithLineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改弹性公网IP的反向解析记录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改弹性公网IP的反向解析记录
     * @param {string} ptrId 反向解析ID。
     * @param {UpdatePtrRequestBody} [updatePtrRequestBody] 修改弹性公网IP的反向解析记录请求。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePtr(updatePtrRequest?: UpdatePtrRequest): Promise<UpdatePtrResponse> {
        const options = ParamCreater().updatePtr(updatePtrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当您的记录集创建成功后，您可以通过调用此接口修改记录集的信息，包括域名、类型、记录值、TTL、描述等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改记录集
     * @param {string} zoneId **参数解释：** 域名ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {string} recordsetId **参数解释：** 记录集ID。 **约束限制：** 不涉及。 **取值范围：** 不涉及。 **默认取值：** 不涉及。
     * @param {UpdateRecordSetsReq} [updateRecordSetsReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRecordSets(updateRecordSetsRequest?: UpdateRecordSetsRequest): Promise<UpdateRecordSetsResponse> {
        const options = ParamCreater().updateRecordSets(updateRecordSetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 终端节点绑定IP地址。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateEndpointIpaddress(associateEndpointIpaddressRequest?: AssociateEndpointIpaddressRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/endpoints/{endpoint_id}/ipaddresses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let endpointId;

            if (associateEndpointIpaddressRequest !== null && associateEndpointIpaddressRequest !== undefined) {
                if (associateEndpointIpaddressRequest instanceof AssociateEndpointIpaddressRequest) {
                    endpointId = associateEndpointIpaddressRequest.endpointId;
                    body = associateEndpointIpaddressRequest.body
                } else {
                    endpointId = associateEndpointIpaddressRequest['endpoint_id'];
                    body = associateEndpointIpaddressRequest['body'];
                }
            }

        
            if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('endpointId','Required parameter endpointId was null or undefined when calling associateEndpointIpaddress.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'endpoint_id': endpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解析器访问日志关联VPC。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateResolverQueryLogConfig(associateResolverQueryLogConfigRequest?: AssociateResolverQueryLogConfigRequest) {
            const options = {
                method: "POST",
                url: "/v2/resolver/queryloggingconfig/{id}/associatevpc",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (associateResolverQueryLogConfigRequest !== null && associateResolverQueryLogConfigRequest !== undefined) {
                if (associateResolverQueryLogConfigRequest instanceof AssociateResolverQueryLogConfigRequest) {
                    id = associateResolverQueryLogConfigRequest.id;
                    body = associateResolverQueryLogConfigRequest.body
                } else {
                    id = associateResolverQueryLogConfigRequest['id'];
                    body = associateResolverQueryLogConfigRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling associateResolverQueryLogConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解析器转发规则关联VPC。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateResolverRuleRouter(associateResolverRuleRouterRequest?: AssociateResolverRuleRouterRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/resolverrules/{resolverrule_id}/associaterouter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resolverruleId;

            if (associateResolverRuleRouterRequest !== null && associateResolverRuleRouterRequest !== undefined) {
                if (associateResolverRuleRouterRequest instanceof AssociateResolverRuleRouterRequest) {
                    resolverruleId = associateResolverRuleRouterRequest.resolverruleId;
                    body = associateResolverRuleRouterRequest.body
                } else {
                    resolverruleId = associateResolverRuleRouterRequest['resolverrule_id'];
                    body = associateResolverRuleRouterRequest['body'];
                }
            }

        
            if (resolverruleId === null || resolverruleId === undefined) {
            throw new RequiredError('resolverruleId','Required parameter resolverruleId was null or undefined when calling associateResolverRuleRouter.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resolverrule_id': resolverruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的内网域名创建完成后，可以通过调用此接口为内网域名关联新的VPC。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateRouter(associateRouterRequest?: AssociateRouterRequest) {
            const options = {
                method: "POST",
                url: "/v2/zones/{zone_id}/associaterouter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;

            if (associateRouterRequest !== null && associateRouterRequest !== undefined) {
                if (associateRouterRequest instanceof AssociateRouterRequest) {
                    zoneId = associateRouterRequest.zoneId;
                    body = associateRouterRequest.body
                } else {
                    zoneId = associateRouterRequest['zone_id'];
                    body = associateRouterRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling associateRouter.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 提交批量创建公网记录集任务，返回任务ID。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateCombinedPublicRecordsetsTask(batchCreateCombinedPublicRecordsetsTaskRequest?: BatchCreateCombinedPublicRecordsetsTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/operation-task/batch-create-combined-recordset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchCreateCombinedPublicRecordsetsTaskRequest !== null && batchCreateCombinedPublicRecordsetsTaskRequest !== undefined) {
                if (batchCreateCombinedPublicRecordsetsTaskRequest instanceof BatchCreateCombinedPublicRecordsetsTaskRequest) {
                    body = batchCreateCombinedPublicRecordsetsTaskRequest.body
                } else {
                    body = batchCreateCombinedPublicRecordsetsTaskRequest['body'];
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
         * 提交批量创建公网记录集任务，返回任务ID。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreatePublicRecordsetsTask(batchCreatePublicRecordsetsTaskRequest?: BatchCreatePublicRecordsetsTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/operation-task/batch-create-recordset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchCreatePublicRecordsetsTaskRequest !== null && batchCreatePublicRecordsetsTaskRequest !== undefined) {
                if (batchCreatePublicRecordsetsTaskRequest instanceof BatchCreatePublicRecordsetsTaskRequest) {
                    body = batchCreatePublicRecordsetsTaskRequest.body
                } else {
                    body = batchCreatePublicRecordsetsTaskRequest['body'];
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
         * 提交批量创建公网域名任务，返回任务ID。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreatePublicZonesTask(batchCreatePublicZonesTaskRequest?: BatchCreatePublicZonesTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/operation-task/batch-create-zone",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchCreatePublicZonesTaskRequest !== null && batchCreatePublicZonesTaskRequest !== undefined) {
                if (batchCreatePublicZonesTaskRequest instanceof BatchCreatePublicZonesTaskRequest) {
                    body = batchCreatePublicZonesTaskRequest.body
                } else {
                    body = batchCreatePublicZonesTaskRequest['body'];
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
         * 为指定实例批量添加或删除标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateTag(batchCreateTagRequest?: BatchCreateTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/tags/action",
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

            if (batchCreateTagRequest !== null && batchCreateTagRequest !== undefined) {
                if (batchCreateTagRequest instanceof BatchCreateTagRequest) {
                    resourceType = batchCreateTagRequest.resourceType;
                    resourceId = batchCreateTagRequest.resourceId;
                    body = batchCreateTagRequest.body
                } else {
                    resourceType = batchCreateTagRequest['resource_type'];
                    resourceId = batchCreateTagRequest['resource_id'];
                    body = batchCreateTagRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchCreateTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateTag.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除反向解析。本接口为原子操作，所有记录应全部删除成功或全部失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeletePtrRecords(batchDeletePtrRecordsRequest?: BatchDeletePtrRecordsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/reverse/floatingips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeletePtrRecordsRequest !== null && batchDeletePtrRecordsRequest !== undefined) {
                if (batchDeletePtrRecordsRequest instanceof BatchDeletePtrRecordsRequest) {
                    body = batchDeletePtrRecordsRequest.body
                } else {
                    body = batchDeletePtrRecordsRequest['body'];
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
         * 提交批量删除公网记录集任务，返回任务ID。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeletePublicRecordsetsTask(batchDeletePublicRecordsetsTaskRequest?: BatchDeletePublicRecordsetsTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/operation-task/batch-delete-recordset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeletePublicRecordsetsTaskRequest !== null && batchDeletePublicRecordsetsTaskRequest !== undefined) {
                if (batchDeletePublicRecordsetsTaskRequest instanceof BatchDeletePublicRecordsetsTaskRequest) {
                    body = batchDeletePublicRecordsetsTaskRequest.body
                } else {
                    body = batchDeletePublicRecordsetsTaskRequest['body'];
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
         * 批量删除记录集。
         * 响应结果中只包含本次实际删除的记录集。
         * 支持批量删除公网域名和内网域名的记录集。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteRecordSets(batchDeleteRecordSetsRequest?: BatchDeleteRecordSetsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/recordsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteRecordSetsRequest !== null && batchDeleteRecordSetsRequest !== undefined) {
                if (batchDeleteRecordSetsRequest instanceof BatchDeleteRecordSetsRequest) {
                    body = batchDeleteRecordSetsRequest.body
                } else {
                    body = batchDeleteRecordSetsRequest['body'];
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
         * 批量删除域名。
         * 本接口为原子操作，所有记录应全部删除成功或全部失败。
         * 支持公网域名、内网域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteZones(batchDeleteZonesRequest?: BatchDeleteZonesRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/zones",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteZonesRequest !== null && batchDeleteZonesRequest !== undefined) {
                if (batchDeleteZonesRequest instanceof BatchDeleteZonesRequest) {
                    body = batchDeleteZonesRequest.body
                } else {
                    body = batchDeleteZonesRequest['body'];
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
         * 批量设置记录集状态。
         * 响应结果中只包含本次实际更新的记录集。
         * 支持公网域名和内网域名的记录集。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSetRecordSetsStatus(batchSetRecordSetsStatusRequest?: BatchSetRecordSetsStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v2.1/recordsets/statuses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchSetRecordSetsStatusRequest !== null && batchSetRecordSetsStatusRequest !== undefined) {
                if (batchSetRecordSetsStatusRequest instanceof BatchSetRecordSetsStatusRequest) {
                    body = batchSetRecordSetsStatusRequest.body
                } else {
                    body = batchSetRecordSetsStatusRequest['body'];
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
         * 批量设置域名状态。
         * 响应结果中只包含本次实际更新的域名。
         * 支持公网域名、内网域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSetZonesStatus(batchSetZonesStatusRequest?: BatchSetZonesStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v2.1/zones/statuses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchSetZonesStatusRequest !== null && batchSetZonesStatusRequest !== undefined) {
                if (batchSetZonesStatusRequest instanceof BatchSetZonesStatusRequest) {
                    body = batchSetZonesStatusRequest.body
                } else {
                    body = batchSetZonesStatusRequest['body'];
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
         * 提交批量转移公网域名任务，返回任务ID。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchTransferPublicZonesTask(batchTransferPublicZonesTaskRequest?: BatchTransferPublicZonesTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/operation-task/batch-transfer",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchTransferPublicZonesTaskRequest !== null && batchTransferPublicZonesTaskRequest !== undefined) {
                if (batchTransferPublicZonesTaskRequest instanceof BatchTransferPublicZonesTaskRequest) {
                    body = batchTransferPublicZonesTaskRequest.body
                } else {
                    body = batchTransferPublicZonesTaskRequest['body'];
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
         * 提交批量修改公网记录集任务，返回任务ID。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdatePublicRecordsetsTask(batchUpdatePublicRecordsetsTaskRequest?: BatchUpdatePublicRecordsetsTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/operation-task/batch-update-recordset",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdatePublicRecordsetsTaskRequest !== null && batchUpdatePublicRecordsetsTaskRequest !== undefined) {
                if (batchUpdatePublicRecordsetsTaskRequest instanceof BatchUpdatePublicRecordsetsTaskRequest) {
                    body = batchUpdatePublicRecordsetsTaskRequest.body
                } else {
                    body = batchUpdatePublicRecordsetsTaskRequest['body'];
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
         * 当创建子域名时提示“域名与其他租户冲突，你需要添加TXT授权校验”，通过调用当前接口生成子域名授权的TXT记录验证信息。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * &gt; TXT记录验证信息生成后，请前往主域名所属的DNS服务商处添加相应的TXT类型解析记录，主机记录和记录值与验证信息保持一致。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAuthorizeTxtRecord(createAuthorizeTxtRecordRequest?: CreateAuthorizeTxtRecordRequest) {
            const options = {
                method: "POST",
                url: "/v2/authorize-txtrecord",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAuthorizeTxtRecordRequest !== null && createAuthorizeTxtRecordRequest !== undefined) {
                if (createAuthorizeTxtRecordRequest instanceof CreateAuthorizeTxtRecordRequest) {
                    body = createAuthorizeTxtRecordRequest.body
                } else {
                    body = createAuthorizeTxtRecordRequest['body'];
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
         * 用户在主域名所属DNS服务商处添加TXT类型解析记录后，调用当前接口验证子域名授权状态。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAuthorizeTxtRecordVerification(createAuthorizeTxtRecordVerificationRequest?: CreateAuthorizeTxtRecordVerificationRequest) {
            const options = {
                method: "POST",
                url: "/v2/authorize-txtrecord/{id}/verify",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (createAuthorizeTxtRecordVerificationRequest !== null && createAuthorizeTxtRecordVerificationRequest !== undefined) {
                if (createAuthorizeTxtRecordVerificationRequest instanceof CreateAuthorizeTxtRecordVerificationRequest) {
                    id = createAuthorizeTxtRecordVerificationRequest.id;
                } else {
                    id = createAuthorizeTxtRecordVerificationRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling createAuthorizeTxtRecordVerification.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建自定义线路。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCustomLine(createCustomLineRequest?: CreateCustomLineRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/customlines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCustomLineRequest !== null && createCustomLineRequest !== undefined) {
                if (createCustomLineRequest instanceof CreateCustomLineRequest) {
                    body = createCustomLineRequest.body
                } else {
                    body = createCustomLineRequest['body'];
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
         * 创建终端节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEndpoint(createEndpointRequest?: CreateEndpointRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/endpoints",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEndpointRequest !== null && createEndpointRequest !== undefined) {
                if (createEndpointRequest instanceof CreateEndpointRequest) {
                    body = createEndpointRequest.body
                } else {
                    body = createEndpointRequest['body'];
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
         * 创建线路分组。该接口部分区域未上线，如需使用请提交工单申请开通。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLineGroup(createLineGroupRequest?: CreateLineGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/linegroups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createLineGroupRequest !== null && createLineGroupRequest !== undefined) {
                if (createLineGroupRequest instanceof CreateLineGroupRequest) {
                    body = createLineGroupRequest.body
                } else {
                    body = createLineGroupRequest['body'];
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
         * 内网域名是指在VPC中生效的域名，内网域名创建后，用户可以将其与私网IP地址相关联，为云服务提供VPC内的内网域名解析服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrivateZone(createPrivateZoneRequest?: CreatePrivateZoneRequest) {
            const options = {
                method: "POST",
                url: "/v2/zones",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPrivateZoneRequest !== null && createPrivateZoneRequest !== undefined) {
                if (createPrivateZoneRequest instanceof CreatePrivateZoneRequest) {
                    body = createPrivateZoneRequest.body
                } else {
                    body = createPrivateZoneRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 您在使用华为云云解析服务为自己注册的域名配置DNS解析之前，需要先将域名添加至云解析服务控制台。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPublicZone(createPublicZoneRequest?: CreatePublicZoneRequest) {
            const options = {
                method: "POST",
                url: "/v2/zones",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPublicZoneRequest !== null && createPublicZoneRequest !== undefined) {
                if (createPublicZoneRequest instanceof CreatePublicZoneRequest) {
                    body = createPublicZoneRequest.body
                } else {
                    body = createPublicZoneRequest['body'];
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
         * 创建解析器访问日志。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createResolverQueryLogConfig(createResolverQueryLogConfigRequest?: CreateResolverQueryLogConfigRequest) {
            const options = {
                method: "POST",
                url: "/v2/resolver/queryloggingconfig",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createResolverQueryLogConfigRequest !== null && createResolverQueryLogConfigRequest !== undefined) {
                if (createResolverQueryLogConfigRequest instanceof CreateResolverQueryLogConfigRequest) {
                    body = createResolverQueryLogConfigRequest.body
                } else {
                    body = createResolverQueryLogConfigRequest['body'];
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
         * 创建解析器转发规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createResolverRule(createResolverRuleRequest?: CreateResolverRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/resolverrules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createResolverRuleRequest !== null && createResolverRuleRequest !== undefined) {
                if (createResolverRuleRequest instanceof CreateResolverRuleRequest) {
                    body = createResolverRuleRequest.body
                } else {
                    body = createResolverRuleRequest['body'];
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
         * 创建公网域名找回请求。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRetrieval(createRetrievalRequest?: CreateRetrievalRequest) {
            const options = {
                method: "POST",
                url: "/v2/retrieval",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createRetrievalRequest !== null && createRetrievalRequest !== undefined) {
                if (createRetrievalRequest instanceof CreateRetrievalRequest) {
                    body = createRetrievalRequest.body
                } else {
                    body = createRetrievalRequest['body'];
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
         * 验证公网域名找回。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRetrievalVerification(createRetrievalVerificationRequest?: CreateRetrievalVerificationRequest) {
            const options = {
                method: "POST",
                url: "/v2/retrieval/verification/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (createRetrievalVerificationRequest !== null && createRetrievalVerificationRequest !== undefined) {
                if (createRetrievalVerificationRequest instanceof CreateRetrievalVerificationRequest) {
                    id = createRetrievalVerificationRequest.id;
                } else {
                    id = createRetrievalVerificationRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling createRetrievalVerification.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定实例添加标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTag(createTagRequest?: CreateTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/tags",
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

            if (createTagRequest !== null && createTagRequest !== undefined) {
                if (createTagRequest instanceof CreateTagRequest) {
                    resourceType = createTagRequest.resourceType;
                    resourceId = createTagRequest.resourceId;
                    body = createTagRequest.body
                } else {
                    resourceType = createTagRequest['resource_type'];
                    resourceId = createTagRequest['resource_id'];
                    body = createTagRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createTag.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除自定义线路。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCustomLine(deleteCustomLineRequest?: DeleteCustomLineRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/customlines/{line_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let lineId;

            if (deleteCustomLineRequest !== null && deleteCustomLineRequest !== undefined) {
                if (deleteCustomLineRequest instanceof DeleteCustomLineRequest) {
                    lineId = deleteCustomLineRequest.lineId;
                } else {
                    lineId = deleteCustomLineRequest['line_id'];
                }
            }

        
            if (lineId === null || lineId === undefined) {
            throw new RequiredError('lineId','Required parameter lineId was null or undefined when calling deleteCustomLine.');
            }

            options.pathParams = { 'line_id': lineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除终端节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEndpoint(deleteEndpointRequest?: DeleteEndpointRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/endpoints/{endpoint_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let endpointId;

            if (deleteEndpointRequest !== null && deleteEndpointRequest !== undefined) {
                if (deleteEndpointRequest instanceof DeleteEndpointRequest) {
                    endpointId = deleteEndpointRequest.endpointId;
                } else {
                    endpointId = deleteEndpointRequest['endpoint_id'];
                }
            }

        
            if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('endpointId','Required parameter endpointId was null or undefined when calling deleteEndpoint.');
            }

            options.pathParams = { 'endpoint_id': endpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除线路分组。该接口部分区域未上线，如需使用请提交工单申请开通。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLineGroup(deleteLineGroupRequest?: DeleteLineGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/linegroups/{linegroup_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let linegroupId;

            if (deleteLineGroupRequest !== null && deleteLineGroupRequest !== undefined) {
                if (deleteLineGroupRequest instanceof DeleteLineGroupRequest) {
                    linegroupId = deleteLineGroupRequest.linegroupId;
                } else {
                    linegroupId = deleteLineGroupRequest['linegroup_id'];
                }
            }

        
            if (linegroupId === null || linegroupId === undefined) {
            throw new RequiredError('linegroupId','Required parameter linegroupId was null or undefined when calling deleteLineGroup.');
            }

            options.pathParams = { 'linegroup_id': linegroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的内网域名不再使用时，您可以通过调用此接口将其删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePrivateZone(deletePrivateZoneRequest?: DeletePrivateZoneRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/zones/{zone_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let zoneId;

            if (deletePrivateZoneRequest !== null && deletePrivateZoneRequest !== undefined) {
                if (deletePrivateZoneRequest instanceof DeletePrivateZoneRequest) {
                    zoneId = deletePrivateZoneRequest.zoneId;
                } else {
                    zoneId = deletePrivateZoneRequest['zone_id'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling deletePrivateZone.');
            }

            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的公网域名不再使用时，您可以通过调用此接口将其删除。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePublicZone(deletePublicZoneRequest?: DeletePublicZoneRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/zones/{zone_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let zoneId;

            if (deletePublicZoneRequest !== null && deletePublicZoneRequest !== undefined) {
                if (deletePublicZoneRequest instanceof DeletePublicZoneRequest) {
                    zoneId = deletePublicZoneRequest.zoneId;
                } else {
                    zoneId = deletePublicZoneRequest['zone_id'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling deletePublicZone.');
            }

            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除解析器访问日志。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResolverQueryLogConfig(deleteResolverQueryLogConfigRequest?: DeleteResolverQueryLogConfigRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/resolver/queryloggingconfig/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteResolverQueryLogConfigRequest !== null && deleteResolverQueryLogConfigRequest !== undefined) {
                if (deleteResolverQueryLogConfigRequest instanceof DeleteResolverQueryLogConfigRequest) {
                    id = deleteResolverQueryLogConfigRequest.id;
                } else {
                    id = deleteResolverQueryLogConfigRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteResolverQueryLogConfig.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除解析器转发规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResolverRule(deleteResolverRuleRequest?: DeleteResolverRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/resolverrules/{resolverrule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resolverruleId;

            if (deleteResolverRuleRequest !== null && deleteResolverRuleRequest !== undefined) {
                if (deleteResolverRuleRequest instanceof DeleteResolverRuleRequest) {
                    resolverruleId = deleteResolverRuleRequest.resolverruleId;
                } else {
                    resolverruleId = deleteResolverRuleRequest['resolverrule_id'];
                }
            }

        
            if (resolverruleId === null || resolverruleId === undefined) {
            throw new RequiredError('resolverruleId','Required parameter resolverruleId was null or undefined when calling deleteResolverRule.');
            }

            options.pathParams = { 'resolverrule_id': resolverruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除资源标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTag(deleteTagRequest?: DeleteTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/{resource_type}/{resource_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;
            
            let key;

            if (deleteTagRequest !== null && deleteTagRequest !== undefined) {
                if (deleteTagRequest instanceof DeleteTagRequest) {
                    resourceType = deleteTagRequest.resourceType;
                    resourceId = deleteTagRequest.resourceId;
                    key = deleteTagRequest.key;
                } else {
                    resourceType = deleteTagRequest['resource_type'];
                    resourceId = deleteTagRequest['resource_id'];
                    key = deleteTagRequest['key'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteTag.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 终端节点解绑IP地址。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateEndpointIpaddress(disassociateEndpointIpaddressRequest?: DisassociateEndpointIpaddressRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/endpoints/{endpoint_id}/ipaddresses/{ipaddress_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let endpointId;
            
            let ipaddressId;

            if (disassociateEndpointIpaddressRequest !== null && disassociateEndpointIpaddressRequest !== undefined) {
                if (disassociateEndpointIpaddressRequest instanceof DisassociateEndpointIpaddressRequest) {
                    endpointId = disassociateEndpointIpaddressRequest.endpointId;
                    ipaddressId = disassociateEndpointIpaddressRequest.ipaddressId;
                } else {
                    endpointId = disassociateEndpointIpaddressRequest['endpoint_id'];
                    ipaddressId = disassociateEndpointIpaddressRequest['ipaddress_id'];
                }
            }

        
            if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('endpointId','Required parameter endpointId was null or undefined when calling disassociateEndpointIpaddress.');
            }
            if (ipaddressId === null || ipaddressId === undefined) {
            throw new RequiredError('ipaddressId','Required parameter ipaddressId was null or undefined when calling disassociateEndpointIpaddress.');
            }

            options.pathParams = { 'endpoint_id': endpointId,'ipaddress_id': ipaddressId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解析器访问日志解关联VPC。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateResolverQueryLogConfig(disassociateResolverQueryLogConfigRequest?: DisassociateResolverQueryLogConfigRequest) {
            const options = {
                method: "POST",
                url: "/v2/resolver/queryloggingconfig/{id}/disassociatevpc",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (disassociateResolverQueryLogConfigRequest !== null && disassociateResolverQueryLogConfigRequest !== undefined) {
                if (disassociateResolverQueryLogConfigRequest instanceof DisassociateResolverQueryLogConfigRequest) {
                    id = disassociateResolverQueryLogConfigRequest.id;
                    body = disassociateResolverQueryLogConfigRequest.body
                } else {
                    id = disassociateResolverQueryLogConfigRequest['id'];
                    body = disassociateResolverQueryLogConfigRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling disassociateResolverQueryLogConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解析器转发规则解关联VPC。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateResolverRuleRouter(disassociateResolverRuleRouterRequest?: DisassociateResolverRuleRouterRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/resolverrules/{resolverrule_id}/disassociaterouter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resolverruleId;

            if (disassociateResolverRuleRouterRequest !== null && disassociateResolverRuleRouterRequest !== undefined) {
                if (disassociateResolverRuleRouterRequest instanceof DisassociateResolverRuleRouterRequest) {
                    resolverruleId = disassociateResolverRuleRouterRequest.resolverruleId;
                    body = disassociateResolverRuleRouterRequest.body
                } else {
                    resolverruleId = disassociateResolverRuleRouterRequest['resolverrule_id'];
                    body = disassociateResolverRuleRouterRequest['body'];
                }
            }

        
            if (resolverruleId === null || resolverruleId === undefined) {
            throw new RequiredError('resolverruleId','Required parameter resolverruleId was null or undefined when calling disassociateResolverRuleRouter.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resolverrule_id': resolverruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的内网域名创建完成后，可以通过调用此接口为内网域名解除已关联的VPC。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateRouter(disassociateRouterRequest?: DisassociateRouterRequest) {
            const options = {
                method: "POST",
                url: "/v2/zones/{zone_id}/disassociaterouter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;

            if (disassociateRouterRequest !== null && disassociateRouterRequest !== undefined) {
                if (disassociateRouterRequest instanceof DisassociateRouterRequest) {
                    zoneId = disassociateRouterRequest.zoneId;
                    body = disassociateRouterRequest.body
                } else {
                    zoneId = disassociateRouterRequest['zone_id'];
                    body = disassociateRouterRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling disassociateRouter.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询云解析服务支持的所有API版本信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersions() {
            const options = {
                method: "GET",
                url: "/",
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
         * 查询批量操作任务列表。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBatchOperationTasks(listBatchOperationTasksRequest?: ListBatchOperationTasksRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/batch-operation-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listBatchOperationTasksRequest !== null && listBatchOperationTasksRequest !== undefined) {
                if (listBatchOperationTasksRequest instanceof ListBatchOperationTasksRequest) {
                    limit = listBatchOperationTasksRequest.limit;
                    offset = listBatchOperationTasksRequest.offset;
                } else {
                    limit = listBatchOperationTasksRequest['limit'];
                    offset = listBatchOperationTasksRequest['offset'];
                }
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
         * 查询自定义线路。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCustomLine(listCustomLineRequest?: ListCustomLineRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/customlines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let lineId;
            
            let name;
            
            let limit;
            
            let offset;
            
            let showDetail;
            
            let status;
            
            let ip;

            if (listCustomLineRequest !== null && listCustomLineRequest !== undefined) {
                if (listCustomLineRequest instanceof ListCustomLineRequest) {
                    lineId = listCustomLineRequest.lineId;
                    name = listCustomLineRequest.name;
                    limit = listCustomLineRequest.limit;
                    offset = listCustomLineRequest.offset;
                    showDetail = listCustomLineRequest.showDetail;
                    status = listCustomLineRequest.status;
                    ip = listCustomLineRequest.ip;
                } else {
                    lineId = listCustomLineRequest['line_id'];
                    name = listCustomLineRequest['name'];
                    limit = listCustomLineRequest['limit'];
                    offset = listCustomLineRequest['offset'];
                    showDetail = listCustomLineRequest['show_detail'];
                    status = listCustomLineRequest['status'];
                    ip = listCustomLineRequest['ip'];
                }
            }

        
            if (lineId !== null && lineId !== undefined) {
                localVarQueryParameter['line_id'] = lineId;
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
            if (showDetail !== null && showDetail !== undefined) {
                localVarQueryParameter['show_detail'] = showDetail;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (ip !== null && ip !== undefined) {
                localVarQueryParameter['ip'] = ip;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询终端节点下的IP地址列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEndpointIpaddresses(listEndpointIpaddressesRequest?: ListEndpointIpaddressesRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/endpoints/{endpoint_id}/ipaddresses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let endpointId;

            if (listEndpointIpaddressesRequest !== null && listEndpointIpaddressesRequest !== undefined) {
                if (listEndpointIpaddressesRequest instanceof ListEndpointIpaddressesRequest) {
                    endpointId = listEndpointIpaddressesRequest.endpointId;
                } else {
                    endpointId = listEndpointIpaddressesRequest['endpoint_id'];
                }
            }

        
            if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('endpointId','Required parameter endpointId was null or undefined when calling listEndpointIpaddresses.');
            }

            options.pathParams = { 'endpoint_id': endpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询终端节点VPC列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEndpointVpcs(listEndpointVpcsRequest?: ListEndpointVpcsRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/vpcs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let vpcId;

            if (listEndpointVpcsRequest !== null && listEndpointVpcsRequest !== undefined) {
                if (listEndpointVpcsRequest instanceof ListEndpointVpcsRequest) {
                    limit = listEndpointVpcsRequest.limit;
                    offset = listEndpointVpcsRequest.offset;
                    vpcId = listEndpointVpcsRequest.vpcId;
                } else {
                    limit = listEndpointVpcsRequest['limit'];
                    offset = listEndpointVpcsRequest['offset'];
                    vpcId = listEndpointVpcsRequest['vpc_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询终端节点列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEndpoints(listEndpointsRequest?: ListEndpointsRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/endpoints",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let direction;
            
            let vpcId;
            
            let name;
            
            let limit;
            
            let offset;

            if (listEndpointsRequest !== null && listEndpointsRequest !== undefined) {
                if (listEndpointsRequest instanceof ListEndpointsRequest) {
                    direction = listEndpointsRequest.direction;
                    vpcId = listEndpointsRequest.vpcId;
                    name = listEndpointsRequest.name;
                    limit = listEndpointsRequest.limit;
                    offset = listEndpointsRequest.offset;
                } else {
                    direction = listEndpointsRequest['direction'];
                    vpcId = listEndpointsRequest['vpc_id'];
                    name = listEndpointsRequest['name'];
                    limit = listEndpointsRequest['limit'];
                    offset = listEndpointsRequest['offset'];
                }
            }

        
            if (direction === null || direction === undefined) {
                throw new RequiredError('direction','Required parameter direction was null or undefined when calling listEndpoints.');
            }
            if (direction !== null && direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询线路分组列表。该接口部分区域未上线，如需使用请提交工单申请开通。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLineGroups(listLineGroupsRequest?: ListLineGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/linegroups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let lineId;
            
            let name;
            
            let limit;
            
            let offset;

            if (listLineGroupsRequest !== null && listLineGroupsRequest !== undefined) {
                if (listLineGroupsRequest instanceof ListLineGroupsRequest) {
                    lineId = listLineGroupsRequest.lineId;
                    name = listLineGroupsRequest.name;
                    limit = listLineGroupsRequest.limit;
                    offset = listLineGroupsRequest.offset;
                } else {
                    lineId = listLineGroupsRequest['line_id'];
                    name = listLineGroupsRequest['name'];
                    limit = listLineGroupsRequest['limit'];
                    offset = listLineGroupsRequest['offset'];
                }
            }

        
            if (lineId !== null && lineId !== undefined) {
                localVarQueryParameter['line_id'] = lineId;
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询名称服务器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNameServers(listNameServersRequest?: ListNameServersRequest) {
            const options = {
                method: "GET",
                url: "/v2/nameservers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;
            
            let region;

            if (listNameServersRequest !== null && listNameServersRequest !== undefined) {
                if (listNameServersRequest instanceof ListNameServersRequest) {
                    type = listNameServersRequest.type;
                    region = listNameServersRequest.region;
                } else {
                    type = listNameServersRequest['type'];
                    region = listNameServersRequest['region'];
                }
            }

        
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的内网域名创建成功后，您可以通过调用此接口查询单个内网域名信息，包括域名、ID、状态、记录集个数、企业项目、标签、TTL、创建时间、修改时间、描述等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivateZones(listPrivateZonesRequest?: ListPrivateZonesRequest) {
            const options = {
                method: "GET",
                url: "/v2/zones",
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
            
            let offset;
            
            let tags;
            
            let name;
            
            let id;
            
            let status;
            
            let searchMode;
            
            let sortKey;
            
            let sortDir;
            
            let enterpriseProjectId;
            
            let routerId;

            if (listPrivateZonesRequest !== null && listPrivateZonesRequest !== undefined) {
                if (listPrivateZonesRequest instanceof ListPrivateZonesRequest) {
                    type = listPrivateZonesRequest.type;
                    limit = listPrivateZonesRequest.limit;
                    marker = listPrivateZonesRequest.marker;
                    offset = listPrivateZonesRequest.offset;
                    tags = listPrivateZonesRequest.tags;
                    name = listPrivateZonesRequest.name;
                    id = listPrivateZonesRequest.id;
                    status = listPrivateZonesRequest.status;
                    searchMode = listPrivateZonesRequest.searchMode;
                    sortKey = listPrivateZonesRequest.sortKey;
                    sortDir = listPrivateZonesRequest.sortDir;
                    enterpriseProjectId = listPrivateZonesRequest.enterpriseProjectId;
                    routerId = listPrivateZonesRequest.routerId;
                } else {
                    type = listPrivateZonesRequest['type'];
                    limit = listPrivateZonesRequest['limit'];
                    marker = listPrivateZonesRequest['marker'];
                    offset = listPrivateZonesRequest['offset'];
                    tags = listPrivateZonesRequest['tags'];
                    name = listPrivateZonesRequest['name'];
                    id = listPrivateZonesRequest['id'];
                    status = listPrivateZonesRequest['status'];
                    searchMode = listPrivateZonesRequest['search_mode'];
                    sortKey = listPrivateZonesRequest['sort_key'];
                    sortDir = listPrivateZonesRequest['sort_dir'];
                    enterpriseProjectId = listPrivateZonesRequest['enterprise_project_id'];
                    routerId = listPrivateZonesRequest['router_id'];
                }
            }

        
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listPrivateZones.');
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
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (searchMode !== null && searchMode !== undefined) {
                localVarQueryParameter['search_mode'] = searchMode;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (routerId !== null && routerId !== undefined) {
                localVarQueryParameter['router_id'] = routerId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的公网域名创建成功后，您可以通过调用此接口查询所有公网域名信息，包括域名、ID、状态、记录集个数、企业项目、标签、TTL、创建时间、修改时间、描述等。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPublicZones(listPublicZonesRequest?: ListPublicZonesRequest) {
            const options = {
                method: "GET",
                url: "/v2/zones",
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
            
            let offset;
            
            let tags;
            
            let name;
            
            let id;
            
            let status;
            
            let searchMode;
            
            let sortKey;
            
            let sortDir;
            
            let enterpriseProjectId;

            if (listPublicZonesRequest !== null && listPublicZonesRequest !== undefined) {
                if (listPublicZonesRequest instanceof ListPublicZonesRequest) {
                    type = listPublicZonesRequest.type;
                    limit = listPublicZonesRequest.limit;
                    marker = listPublicZonesRequest.marker;
                    offset = listPublicZonesRequest.offset;
                    tags = listPublicZonesRequest.tags;
                    name = listPublicZonesRequest.name;
                    id = listPublicZonesRequest.id;
                    status = listPublicZonesRequest.status;
                    searchMode = listPublicZonesRequest.searchMode;
                    sortKey = listPublicZonesRequest.sortKey;
                    sortDir = listPublicZonesRequest.sortDir;
                    enterpriseProjectId = listPublicZonesRequest.enterpriseProjectId;
                } else {
                    type = listPublicZonesRequest['type'];
                    limit = listPublicZonesRequest['limit'];
                    marker = listPublicZonesRequest['marker'];
                    offset = listPublicZonesRequest['offset'];
                    tags = listPublicZonesRequest['tags'];
                    name = listPublicZonesRequest['name'];
                    id = listPublicZonesRequest['id'];
                    status = listPublicZonesRequest['status'];
                    searchMode = listPublicZonesRequest['search_mode'];
                    sortKey = listPublicZonesRequest['sort_key'];
                    sortDir = listPublicZonesRequest['sort_dir'];
                    enterpriseProjectId = listPublicZonesRequest['enterprise_project_id'];
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
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (searchMode !== null && searchMode !== undefined) {
                localVarQueryParameter['search_mode'] = searchMode;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询解析器访问日志列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResolverQueryLogConfigs(listResolverQueryLogConfigsRequest?: ListResolverQueryLogConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v2/resolver/queryloggingconfig",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let vpcId;

            if (listResolverQueryLogConfigsRequest !== null && listResolverQueryLogConfigsRequest !== undefined) {
                if (listResolverQueryLogConfigsRequest instanceof ListResolverQueryLogConfigsRequest) {
                    limit = listResolverQueryLogConfigsRequest.limit;
                    marker = listResolverQueryLogConfigsRequest.marker;
                    vpcId = listResolverQueryLogConfigsRequest.vpcId;
                } else {
                    limit = listResolverQueryLogConfigsRequest['limit'];
                    marker = listResolverQueryLogConfigsRequest['marker'];
                    vpcId = listResolverQueryLogConfigsRequest['vpc_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询解析器转发规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResolverRules(listResolverRulesRequest?: ListResolverRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/resolverrules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainName;
            
            let name;
            
            let endpointId;
            
            let id;
            
            let limit;
            
            let offset;
            
            let marker;

            if (listResolverRulesRequest !== null && listResolverRulesRequest !== undefined) {
                if (listResolverRulesRequest instanceof ListResolverRulesRequest) {
                    domainName = listResolverRulesRequest.domainName;
                    name = listResolverRulesRequest.name;
                    endpointId = listResolverRulesRequest.endpointId;
                    id = listResolverRulesRequest.id;
                    limit = listResolverRulesRequest.limit;
                    offset = listResolverRulesRequest.offset;
                    marker = listResolverRulesRequest.marker;
                } else {
                    domainName = listResolverRulesRequest['domain_name'];
                    name = listResolverRulesRequest['name'];
                    endpointId = listResolverRulesRequest['endpoint_id'];
                    id = listResolverRulesRequest['id'];
                    limit = listResolverRulesRequest['limit'];
                    offset = listResolverRulesRequest['offset'];
                    marker = listResolverRulesRequest['marker'];
                }
            }

        
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (endpointId !== null && endpointId !== undefined) {
                localVarQueryParameter['endpoint_id'] = endpointId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签查询资源实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTag(listTagRequest?: ListTagRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{resource_type}/resource_instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;

            if (listTagRequest !== null && listTagRequest !== undefined) {
                if (listTagRequest instanceof ListTagRequest) {
                    resourceType = listTagRequest.resourceType;
                    body = listTagRequest.body
                } else {
                    resourceType = listTagRequest['resource_type'];
                    body = listTagRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listTag.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例类型的所有标签集合
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTags(listTagsRequest?: ListTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;

            if (listTagsRequest !== null && listTagsRequest !== undefined) {
                if (listTagsRequest instanceof ListTagsRequest) {
                    resourceType = listTagsRequest.resourceType;
                } else {
                    resourceType = listTagsRequest['resource_type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listTags.');
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的内网域名创建成功后，您可以通过调用此接口设置开启或者关闭内网域名的子域名递归解析代理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setPrivateZoneProxyPattern(setPrivateZoneProxyPatternRequest?: SetPrivateZoneProxyPatternRequest) {
            const options = {
                method: "POST",
                url: "/v2/zones/{zone_id}/actions/set-proxy-pattern",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;

            if (setPrivateZoneProxyPatternRequest !== null && setPrivateZoneProxyPatternRequest !== undefined) {
                if (setPrivateZoneProxyPatternRequest instanceof SetPrivateZoneProxyPatternRequest) {
                    zoneId = setPrivateZoneProxyPatternRequest.zoneId;
                    body = setPrivateZoneProxyPatternRequest.body
                } else {
                    zoneId = setPrivateZoneProxyPatternRequest['zone_id'];
                    body = setPrivateZoneProxyPatternRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling setPrivateZoneProxyPattern.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定版本号的云解析服务API版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApiInfo(showApiInfoRequest?: ShowApiInfoRequest) {
            const options = {
                method: "GET",
                url: "/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let version;

            if (showApiInfoRequest !== null && showApiInfoRequest !== undefined) {
                if (showApiInfoRequest instanceof ShowApiInfoRequest) {
                    version = showApiInfoRequest.version;
                } else {
                    version = showApiInfoRequest['version'];
                }
            }

        
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling showApiInfo.');
            }

            options.pathParams = { 'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询已生成的子域名授权TXT记录验证信息。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAuthorizeTxtRecord(showAuthorizeTxtRecordRequest?: ShowAuthorizeTxtRecordRequest) {
            const options = {
                method: "GET",
                url: "/v2/authorize-txtrecord",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneName;

            if (showAuthorizeTxtRecordRequest !== null && showAuthorizeTxtRecordRequest !== undefined) {
                if (showAuthorizeTxtRecordRequest instanceof ShowAuthorizeTxtRecordRequest) {
                    zoneName = showAuthorizeTxtRecordRequest.zoneName;
                } else {
                    zoneName = showAuthorizeTxtRecordRequest['zone_name'];
                }
            }

        
            if (zoneName === null || zoneName === undefined) {
                throw new RequiredError('zoneName','Required parameter zoneName was null or undefined when calling showAuthorizeTxtRecord.');
            }
            if (zoneName !== null && zoneName !== undefined) {
                localVarQueryParameter['zone_name'] = zoneName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询批量操作任务，分页返回失败条目。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBatchOperationTask(showBatchOperationTaskRequest?: ShowBatchOperationTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/batch-operation-tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let errorItemLimit;
            
            let errorItemOffset;

            if (showBatchOperationTaskRequest !== null && showBatchOperationTaskRequest !== undefined) {
                if (showBatchOperationTaskRequest instanceof ShowBatchOperationTaskRequest) {
                    taskId = showBatchOperationTaskRequest.taskId;
                    errorItemLimit = showBatchOperationTaskRequest.errorItemLimit;
                    errorItemOffset = showBatchOperationTaskRequest.errorItemOffset;
                } else {
                    taskId = showBatchOperationTaskRequest['task_id'];
                    errorItemLimit = showBatchOperationTaskRequest['error_item_limit'];
                    errorItemOffset = showBatchOperationTaskRequest['error_item_offset'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showBatchOperationTask.');
            }
            if (errorItemLimit !== null && errorItemLimit !== undefined) {
                localVarQueryParameter['error_item_limit'] = errorItemLimit;
            }
            if (errorItemOffset !== null && errorItemOffset !== undefined) {
                localVarQueryParameter['error_item_offset'] = errorItemOffset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询公网域名的域名诊断。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainDetection(showDomainDetectionRequest?: ShowDomainDetectionRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/zones/{zone_id}/detection",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneId;
            
            let domainName;
            
            let type;

            if (showDomainDetectionRequest !== null && showDomainDetectionRequest !== undefined) {
                if (showDomainDetectionRequest instanceof ShowDomainDetectionRequest) {
                    zoneId = showDomainDetectionRequest.zoneId;
                    domainName = showDomainDetectionRequest.domainName;
                    type = showDomainDetectionRequest.type;
                } else {
                    zoneId = showDomainDetectionRequest['zone_id'];
                    domainName = showDomainDetectionRequest['domain_name'];
                    type = showDomainDetectionRequest['type'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling showDomainDetection.');
            }
            if (domainName === null || domainName === undefined) {
                throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showDomainDetection.');
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户在DNS服务下的资源配额，包括公网域名配额、内网域名配额、记录集配额、反向解析配额、自定义线路配额、线路分组配额、入站终端节点配额、出站终端节点配额、转发规则配额等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDomainQuota(showDomainQuotaRequest?: ShowDomainQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v2/quotamg/dns/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;

            if (showDomainQuotaRequest !== null && showDomainQuotaRequest !== undefined) {
                if (showDomainQuotaRequest instanceof ShowDomainQuotaRequest) {
                    domainId = showDomainQuotaRequest.domainId;
                } else {
                    domainId = showDomainQuotaRequest['domain_id'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
                throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showDomainQuota.');
            }
            if (domainId !== null && domainId !== undefined) {
                localVarQueryParameter['domain_id'] = domainId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询公网域名的邮箱域名。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEmailRecordSet(showEmailRecordSetRequest?: ShowEmailRecordSetRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/zones/{zone_id}/email-recordsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneId;
            
            let limit;
            
            let offset;

            if (showEmailRecordSetRequest !== null && showEmailRecordSetRequest !== undefined) {
                if (showEmailRecordSetRequest instanceof ShowEmailRecordSetRequest) {
                    zoneId = showEmailRecordSetRequest.zoneId;
                    limit = showEmailRecordSetRequest.limit;
                    offset = showEmailRecordSetRequest.offset;
                } else {
                    zoneId = showEmailRecordSetRequest['zone_id'];
                    limit = showEmailRecordSetRequest['limit'];
                    offset = showEmailRecordSetRequest['offset'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling showEmailRecordSet.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询终端节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEndpoint(showEndpointRequest?: ShowEndpointRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/endpoints/{endpoint_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let endpointId;

            if (showEndpointRequest !== null && showEndpointRequest !== undefined) {
                if (showEndpointRequest instanceof ShowEndpointRequest) {
                    endpointId = showEndpointRequest.endpointId;
                } else {
                    endpointId = showEndpointRequest['endpoint_id'];
                }
            }

        
            if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('endpointId','Required parameter endpointId was null or undefined when calling showEndpoint.');
            }

            options.pathParams = { 'endpoint_id': endpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询线路分组。该接口部分区域未上线，如需使用请提交工单申请开通。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLineGroup(showLineGroupRequest?: ShowLineGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/linegroups/{linegroup_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let linegroupId;

            if (showLineGroupRequest !== null && showLineGroupRequest !== undefined) {
                if (showLineGroupRequest instanceof ShowLineGroupRequest) {
                    linegroupId = showLineGroupRequest.linegroupId;
                } else {
                    linegroupId = showLineGroupRequest['linegroup_id'];
                }
            }

        
            if (linegroupId === null || linegroupId === undefined) {
            throw new RequiredError('linegroupId','Required parameter linegroupId was null or undefined when calling showLineGroup.');
            }

            options.pathParams = { 'linegroup_id': linegroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的内网域名创建成功后，您可以通过调用此接口查询单个内网域名信息，包括域名、ID、状态、记录集个数、企业项目、标签、TTL、创建时间、修改时间、描述等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateZone(showPrivateZoneRequest?: ShowPrivateZoneRequest) {
            const options = {
                method: "GET",
                url: "/v2/zones/{zone_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let zoneId;

            if (showPrivateZoneRequest !== null && showPrivateZoneRequest !== undefined) {
                if (showPrivateZoneRequest instanceof ShowPrivateZoneRequest) {
                    zoneId = showPrivateZoneRequest.zoneId;
                } else {
                    zoneId = showPrivateZoneRequest['zone_id'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling showPrivateZone.');
            }

            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的内网域名创建成功后，您可以通过调用此接口查询内网域名的名称服务器信息，包括优先级、DNS服务器地址等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateZoneNameServer(showPrivateZoneNameServerRequest?: ShowPrivateZoneNameServerRequest) {
            const options = {
                method: "GET",
                url: "/v2/zones/{zone_id}/nameservers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let zoneId;

            if (showPrivateZoneNameServerRequest !== null && showPrivateZoneNameServerRequest !== undefined) {
                if (showPrivateZoneNameServerRequest instanceof ShowPrivateZoneNameServerRequest) {
                    zoneId = showPrivateZoneNameServerRequest.zoneId;
                } else {
                    zoneId = showPrivateZoneNameServerRequest['zone_id'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling showPrivateZoneNameServer.');
            }

            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的公网域名创建成功后，您可以通过调用此接口查询单个公网域名信息，包括域名、ID、状态、记录集个数、企业项目、标签、TTL、创建时间、修改时间、描述等。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPublicZone(showPublicZoneRequest?: ShowPublicZoneRequest) {
            const options = {
                method: "GET",
                url: "/v2/zones/{zone_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let zoneId;

            if (showPublicZoneRequest !== null && showPublicZoneRequest !== undefined) {
                if (showPublicZoneRequest instanceof ShowPublicZoneRequest) {
                    zoneId = showPublicZoneRequest.zoneId;
                } else {
                    zoneId = showPublicZoneRequest['zone_id'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling showPublicZone.');
            }

            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的公网域名创建成功后，您可以通过调用此接口查询公网域名的名称服务器信息，包括主机名、优先级等。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPublicZoneNameServer(showPublicZoneNameServerRequest?: ShowPublicZoneNameServerRequest) {
            const options = {
                method: "GET",
                url: "/v2/zones/{zone_id}/nameservers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let zoneId;

            if (showPublicZoneNameServerRequest !== null && showPublicZoneNameServerRequest !== undefined) {
                if (showPublicZoneNameServerRequest instanceof ShowPublicZoneNameServerRequest) {
                    zoneId = showPublicZoneNameServerRequest.zoneId;
                } else {
                    zoneId = showPublicZoneNameServerRequest['zone_id'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling showPublicZoneNameServer.');
            }

            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询解析器访问日志。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResolverQueryLogConfig(showResolverQueryLogConfigRequest?: ShowResolverQueryLogConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/resolver/queryloggingconfig/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showResolverQueryLogConfigRequest !== null && showResolverQueryLogConfigRequest !== undefined) {
                if (showResolverQueryLogConfigRequest instanceof ShowResolverQueryLogConfigRequest) {
                    id = showResolverQueryLogConfigRequest.id;
                } else {
                    id = showResolverQueryLogConfigRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showResolverQueryLogConfig.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询解析器转发规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResolverRule(showResolverRuleRequest?: ShowResolverRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/resolverrules/{resolverrule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resolverruleId;

            if (showResolverRuleRequest !== null && showResolverRuleRequest !== undefined) {
                if (showResolverRuleRequest instanceof ShowResolverRuleRequest) {
                    resolverruleId = showResolverRuleRequest.resolverruleId;
                } else {
                    resolverruleId = showResolverRuleRequest['resolverrule_id'];
                }
            }

        
            if (resolverruleId === null || resolverruleId === undefined) {
            throw new RequiredError('resolverruleId','Required parameter resolverruleId was null or undefined when calling showResolverRule.');
            }

            options.pathParams = { 'resolverrule_id': resolverruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例的标签信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceTag(showResourceTagRequest?: ShowResourceTagRequest) {
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

            if (showResourceTagRequest !== null && showResourceTagRequest !== undefined) {
                if (showResourceTagRequest instanceof ShowResourceTagRequest) {
                    resourceType = showResourceTagRequest.resourceType;
                    resourceId = showResourceTagRequest.resourceId;
                } else {
                    resourceType = showResourceTagRequest['resource_type'];
                    resourceId = showResourceTagRequest['resource_id'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showResourceTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showResourceTag.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询公网域名找回请求。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRetrieval(showRetrievalRequest?: ShowRetrievalRequest) {
            const options = {
                method: "GET",
                url: "/v2/retrieval",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;

            if (showRetrievalRequest !== null && showRetrievalRequest !== undefined) {
                if (showRetrievalRequest instanceof ShowRetrievalRequest) {
                    name = showRetrievalRequest.name;
                } else {
                    name = showRetrievalRequest['name'];
                }
            }

        
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling showRetrieval.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询公网域名找回结果。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRetrievalVerification(showRetrievalVerificationRequest?: ShowRetrievalVerificationRequest) {
            const options = {
                method: "GET",
                url: "/v2/retrieval/verification/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showRetrievalVerificationRequest !== null && showRetrievalVerificationRequest !== undefined) {
                if (showRetrievalVerificationRequest instanceof ShowRetrievalVerificationRequest) {
                    id = showRetrievalVerificationRequest.id;
                } else {
                    id = showRetrievalVerificationRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showRetrievalVerification.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询公网域名的网站域名。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWebsiteRecordSet(showWebsiteRecordSetRequest?: ShowWebsiteRecordSetRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/zones/{zone_id}/website-recordsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneId;
            
            let limit;
            
            let offset;

            if (showWebsiteRecordSetRequest !== null && showWebsiteRecordSetRequest !== undefined) {
                if (showWebsiteRecordSetRequest instanceof ShowWebsiteRecordSetRequest) {
                    zoneId = showWebsiteRecordSetRequest.zoneId;
                    limit = showWebsiteRecordSetRequest.limit;
                    offset = showWebsiteRecordSetRequest.offset;
                } else {
                    zoneId = showWebsiteRecordSetRequest['zone_id'];
                    limit = showWebsiteRecordSetRequest['limit'];
                    offset = showWebsiteRecordSetRequest['offset'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling showWebsiteRecordSet.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询域名当前DNS服务器地址及华为云提供的DNS服务器地址。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showZoneNameServer(showZoneNameServerRequest?: ShowZoneNameServerRequest) {
            const options = {
                method: "GET",
                url: "/v2/public-zones/dns-servers/{domain_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainName;

            if (showZoneNameServerRequest !== null && showZoneNameServerRequest !== undefined) {
                if (showZoneNameServerRequest instanceof ShowZoneNameServerRequest) {
                    domainName = showZoneNameServerRequest.domainName;
                } else {
                    domainName = showZoneNameServerRequest['domain_name'];
                }
            }

        
            if (domainName === null || domainName === undefined) {
            throw new RequiredError('domainName','Required parameter domainName was null or undefined when calling showZoneNameServer.');
            }

            options.pathParams = { 'domain_name': domainName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改自定义线路。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCustomLine(updateCustomLineRequest?: UpdateCustomLineRequest) {
            const options = {
                method: "PUT",
                url: "/v2.1/customlines/{line_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let lineId;

            if (updateCustomLineRequest !== null && updateCustomLineRequest !== undefined) {
                if (updateCustomLineRequest instanceof UpdateCustomLineRequest) {
                    lineId = updateCustomLineRequest.lineId;
                    body = updateCustomLineRequest.body
                } else {
                    lineId = updateCustomLineRequest['line_id'];
                    body = updateCustomLineRequest['body'];
                }
            }

        
            if (lineId === null || lineId === undefined) {
            throw new RequiredError('lineId','Required parameter lineId was null or undefined when calling updateCustomLine.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'line_id': lineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改终端节点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEndpoint(updateEndpointRequest?: UpdateEndpointRequest) {
            const options = {
                method: "PUT",
                url: "/v2.1/endpoints/{endpoint_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let endpointId;

            if (updateEndpointRequest !== null && updateEndpointRequest !== undefined) {
                if (updateEndpointRequest instanceof UpdateEndpointRequest) {
                    endpointId = updateEndpointRequest.endpointId;
                    body = updateEndpointRequest.body
                } else {
                    endpointId = updateEndpointRequest['endpoint_id'];
                    body = updateEndpointRequest['body'];
                }
            }

        
            if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('endpointId','Required parameter endpointId was null or undefined when calling updateEndpoint.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'endpoint_id': endpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改线路分组。该接口部分区域未上线，如需使用请提交工单申请开通。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLineGroups(updateLineGroupsRequest?: UpdateLineGroupsRequest) {
            const options = {
                method: "PUT",
                url: "/v2.1/linegroups/{linegroup_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let linegroupId;

            if (updateLineGroupsRequest !== null && updateLineGroupsRequest !== undefined) {
                if (updateLineGroupsRequest instanceof UpdateLineGroupsRequest) {
                    linegroupId = updateLineGroupsRequest.linegroupId;
                    body = updateLineGroupsRequest.body
                } else {
                    linegroupId = updateLineGroupsRequest['linegroup_id'];
                    body = updateLineGroupsRequest['body'];
                }
            }

        
            if (linegroupId === null || linegroupId === undefined) {
            throw new RequiredError('linegroupId','Required parameter linegroupId was null or undefined when calling updateLineGroups.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'linegroup_id': linegroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的内网域名创建成功后，您可以通过调用此接口修改内网域名的基本信息，包括TTL、描述等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePrivateZone(updatePrivateZoneRequest?: UpdatePrivateZoneRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/zones/{zone_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;

            if (updatePrivateZoneRequest !== null && updatePrivateZoneRequest !== undefined) {
                if (updatePrivateZoneRequest instanceof UpdatePrivateZoneRequest) {
                    zoneId = updatePrivateZoneRequest.zoneId;
                    body = updatePrivateZoneRequest.body
                } else {
                    zoneId = updatePrivateZoneRequest['zone_id'];
                    body = updatePrivateZoneRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling updatePrivateZone.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的内网域名创建成功后，您可以通过调用此接口设置内网域名的状态，包括暂停、启用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePrivateZoneStatus(updatePrivateZoneStatusRequest?: UpdatePrivateZoneStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v2/zones/{zone_id}/statuses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;

            if (updatePrivateZoneStatusRequest !== null && updatePrivateZoneStatusRequest !== undefined) {
                if (updatePrivateZoneStatusRequest instanceof UpdatePrivateZoneStatusRequest) {
                    zoneId = updatePrivateZoneStatusRequest.zoneId;
                    body = updatePrivateZoneStatusRequest.body
                } else {
                    zoneId = updatePrivateZoneStatusRequest['zone_id'];
                    body = updatePrivateZoneStatusRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling updatePrivateZoneStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的公网域名创建成功后，您可以通过调用此接口修改公网域名的基本信息，包括TTL、描述等。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePublicZone(updatePublicZoneRequest?: UpdatePublicZoneRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/zones/{zone_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;

            if (updatePublicZoneRequest !== null && updatePublicZoneRequest !== undefined) {
                if (updatePublicZoneRequest instanceof UpdatePublicZoneRequest) {
                    zoneId = updatePublicZoneRequest.zoneId;
                    body = updatePublicZoneRequest.body
                } else {
                    zoneId = updatePublicZoneRequest['zone_id'];
                    body = updatePublicZoneRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling updatePublicZone.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的公网域名创建成功后，您可以通过调用此接口设置公网域名的状态，包括暂停、启用。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePublicZoneStatus(updatePublicZoneStatusRequest?: UpdatePublicZoneStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v2/zones/{zone_id}/statuses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;

            if (updatePublicZoneStatusRequest !== null && updatePublicZoneStatusRequest !== undefined) {
                if (updatePublicZoneStatusRequest instanceof UpdatePublicZoneStatusRequest) {
                    zoneId = updatePublicZoneStatusRequest.zoneId;
                    body = updatePublicZoneStatusRequest.body
                } else {
                    zoneId = updatePublicZoneStatusRequest['zone_id'];
                    body = updatePublicZoneStatusRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling updatePublicZoneStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改解析器转发规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateResolverRule(updateResolverRuleRequest?: UpdateResolverRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2.1/resolverrules/{resolverrule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resolverruleId;

            if (updateResolverRuleRequest !== null && updateResolverRuleRequest !== undefined) {
                if (updateResolverRuleRequest instanceof UpdateResolverRuleRequest) {
                    resolverruleId = updateResolverRuleRequest.resolverruleId;
                    body = updateResolverRuleRequest.body
                } else {
                    resolverruleId = updateResolverRuleRequest['resolverrule_id'];
                    body = updateResolverRuleRequest['body'];
                }
            }

        
            if (resolverruleId === null || resolverruleId === undefined) {
            throw new RequiredError('resolverruleId','Required parameter resolverruleId was null or undefined when calling updateResolverRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resolverrule_id': resolverruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭公网域名的DNSSEC。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableDnssecConfig(disableDnssecConfigRequest?: DisableDnssecConfigRequest) {
            const options = {
                method: "POST",
                url: "/v2/zones/{zone_id}/disable-dnssec",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let zoneId;

            if (disableDnssecConfigRequest !== null && disableDnssecConfigRequest !== undefined) {
                if (disableDnssecConfigRequest instanceof DisableDnssecConfigRequest) {
                    zoneId = disableDnssecConfigRequest.zoneId;
                } else {
                    zoneId = disableDnssecConfigRequest['zone_id'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling disableDnssecConfig.');
            }

            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启公网域名的DNSSEC。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableDnssecConfig(enableDnssecConfigRequest?: EnableDnssecConfigRequest) {
            const options = {
                method: "POST",
                url: "/v2/zones/{zone_id}/enable-dnssec",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let zoneId;

            if (enableDnssecConfigRequest !== null && enableDnssecConfigRequest !== undefined) {
                if (enableDnssecConfigRequest instanceof EnableDnssecConfigRequest) {
                    zoneId = enableDnssecConfigRequest.zoneId;
                } else {
                    zoneId = enableDnssecConfigRequest['zone_id'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling enableDnssecConfig.');
            }

            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询公网域名的DNSSEC。
         * 
         * **[公网域名为全局资源，请选择“华北-北京四（cn-north-4）”区域调用。](tag:hws)**
         * **[公网域名为全局资源，请选择“亚太-新加坡（ap-southeast-3）”区域调用。](tag:hws_hk)**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDnssecConfig(showDnssecConfigRequest?: ShowDnssecConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/zones/{zone_id}/dnssec",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let zoneId;

            if (showDnssecConfigRequest !== null && showDnssecConfigRequest !== undefined) {
                if (showDnssecConfigRequest instanceof ShowDnssecConfigRequest) {
                    zoneId = showDnssecConfigRequest.zoneId;
                } else {
                    zoneId = showDnssecConfigRequest['zone_id'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling showDnssecConfig.');
            }

            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置弹性公网IP的反向解析记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEipRecordSet(createEipRecordSetRequest?: CreateEipRecordSetRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/reverse/floatingips/{region}:{floatingip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let region;
            
            let floatingipId;

            if (createEipRecordSetRequest !== null && createEipRecordSetRequest !== undefined) {
                if (createEipRecordSetRequest instanceof CreateEipRecordSetRequest) {
                    region = createEipRecordSetRequest.region;
                    floatingipId = createEipRecordSetRequest.floatingipId;
                    body = createEipRecordSetRequest.body
                } else {
                    region = createEipRecordSetRequest['region'];
                    floatingipId = createEipRecordSetRequest['floatingip_id'];
                    body = createEipRecordSetRequest['body'];
                }
            }

        
            if (region === null || region === undefined) {
            throw new RequiredError('region','Required parameter region was null or undefined when calling createEipRecordSet.');
            }
            if (floatingipId === null || floatingipId === undefined) {
            throw new RequiredError('floatingipId','Required parameter floatingipId was null or undefined when calling createEipRecordSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'region': region,'floatingip_id': floatingipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 记录集是指一组资源记录的集合，这些资源记录属于同一域名，用于定义域名支持的解析类型以及解析值。您的域名创建完成后，可以通过调用此接口为域名添加不同类型的记录集。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRecordSet(createRecordSetRequest?: CreateRecordSetRequest) {
            const options = {
                method: "POST",
                url: "/v2/zones/{zone_id}/recordsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;

            if (createRecordSetRequest !== null && createRecordSetRequest !== undefined) {
                if (createRecordSetRequest instanceof CreateRecordSetRequest) {
                    zoneId = createRecordSetRequest.zoneId;
                    body = createRecordSetRequest.body
                } else {
                    zoneId = createRecordSetRequest['zone_id'];
                    body = createRecordSetRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling createRecordSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的记录集不再使用时，您可以通过调用此接口将其删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRecordSet(deleteRecordSetRequest?: DeleteRecordSetRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/zones/{zone_id}/recordsets/{recordset_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let zoneId;
            
            let recordsetId;

            if (deleteRecordSetRequest !== null && deleteRecordSetRequest !== undefined) {
                if (deleteRecordSetRequest instanceof DeleteRecordSetRequest) {
                    zoneId = deleteRecordSetRequest.zoneId;
                    recordsetId = deleteRecordSetRequest.recordsetId;
                } else {
                    zoneId = deleteRecordSetRequest['zone_id'];
                    recordsetId = deleteRecordSetRequest['recordset_id'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling deleteRecordSet.');
            }
            if (recordsetId === null || recordsetId === undefined) {
            throw new RequiredError('recordsetId','Required parameter recordsetId was null or undefined when calling deleteRecordSet.');
            }

            options.pathParams = { 'zone_id': zoneId,'recordset_id': recordsetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性公网IP的反向解析记录列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPtrRecords(listPtrRecordsRequest?: ListPtrRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v2/reverse/floatingips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;
            
            let tags;
            
            let status;

            if (listPtrRecordsRequest !== null && listPtrRecordsRequest !== undefined) {
                if (listPtrRecordsRequest instanceof ListPtrRecordsRequest) {
                    marker = listPtrRecordsRequest.marker;
                    limit = listPtrRecordsRequest.limit;
                    offset = listPtrRecordsRequest.offset;
                    enterpriseProjectId = listPtrRecordsRequest.enterpriseProjectId;
                    tags = listPtrRecordsRequest.tags;
                    status = listPtrRecordsRequest.status;
                } else {
                    marker = listPtrRecordsRequest['marker'];
                    limit = listPtrRecordsRequest['limit'];
                    offset = listPtrRecordsRequest['offset'];
                    enterpriseProjectId = listPtrRecordsRequest['enterprise_project_id'];
                    tags = listPtrRecordsRequest['tags'];
                    status = listPtrRecordsRequest['status'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的记录集创建成功后，您可以通过调用此接口查询所有记录集信息，包括名称、ID、状态、所属域名、解析记录值、标签、TTL、创建时间、修改时间、描述等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecordSets(listRecordSetsRequest?: ListRecordSetsRequest) {
            const options = {
                method: "GET",
                url: "/v2/recordsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneType;
            
            let marker;
            
            let searchMode;
            
            let limit;
            
            let offset;
            
            let tags;
            
            let status;
            
            let type;
            
            let name;
            
            let id;
            
            let records;
            
            let sortKey;
            
            let sortDir;

            if (listRecordSetsRequest !== null && listRecordSetsRequest !== undefined) {
                if (listRecordSetsRequest instanceof ListRecordSetsRequest) {
                    zoneType = listRecordSetsRequest.zoneType;
                    marker = listRecordSetsRequest.marker;
                    searchMode = listRecordSetsRequest.searchMode;
                    limit = listRecordSetsRequest.limit;
                    offset = listRecordSetsRequest.offset;
                    tags = listRecordSetsRequest.tags;
                    status = listRecordSetsRequest.status;
                    type = listRecordSetsRequest.type;
                    name = listRecordSetsRequest.name;
                    id = listRecordSetsRequest.id;
                    records = listRecordSetsRequest.records;
                    sortKey = listRecordSetsRequest.sortKey;
                    sortDir = listRecordSetsRequest.sortDir;
                } else {
                    zoneType = listRecordSetsRequest['zone_type'];
                    marker = listRecordSetsRequest['marker'];
                    searchMode = listRecordSetsRequest['search_mode'];
                    limit = listRecordSetsRequest['limit'];
                    offset = listRecordSetsRequest['offset'];
                    tags = listRecordSetsRequest['tags'];
                    status = listRecordSetsRequest['status'];
                    type = listRecordSetsRequest['type'];
                    name = listRecordSetsRequest['name'];
                    id = listRecordSetsRequest['id'];
                    records = listRecordSetsRequest['records'];
                    sortKey = listRecordSetsRequest['sort_key'];
                    sortDir = listRecordSetsRequest['sort_dir'];
                }
            }

        
            if (zoneType !== null && zoneType !== undefined) {
                localVarQueryParameter['zone_type'] = zoneType;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (searchMode !== null && searchMode !== undefined) {
                localVarQueryParameter['search_mode'] = searchMode;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (records !== null && records !== undefined) {
                localVarQueryParameter['records'] = records;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的记录集创建成功后，您可以通过调用此接口查询指定域名下的所有记录集信息，包括名称、ID、状态、所属域名、解析记录值、标签、TTL、创建时间、修改时间、描述等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecordSetsByZone(listRecordSetsByZoneRequest?: ListRecordSetsByZoneRequest) {
            const options = {
                method: "GET",
                url: "/v2/zones/{zone_id}/recordsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneId;
            
            let searchMode;
            
            let marker;
            
            let limit;
            
            let offset;
            
            let tags;
            
            let status;
            
            let type;
            
            let name;
            
            let id;
            
            let sortKey;
            
            let sortDir;

            if (listRecordSetsByZoneRequest !== null && listRecordSetsByZoneRequest !== undefined) {
                if (listRecordSetsByZoneRequest instanceof ListRecordSetsByZoneRequest) {
                    zoneId = listRecordSetsByZoneRequest.zoneId;
                    searchMode = listRecordSetsByZoneRequest.searchMode;
                    marker = listRecordSetsByZoneRequest.marker;
                    limit = listRecordSetsByZoneRequest.limit;
                    offset = listRecordSetsByZoneRequest.offset;
                    tags = listRecordSetsByZoneRequest.tags;
                    status = listRecordSetsByZoneRequest.status;
                    type = listRecordSetsByZoneRequest.type;
                    name = listRecordSetsByZoneRequest.name;
                    id = listRecordSetsByZoneRequest.id;
                    sortKey = listRecordSetsByZoneRequest.sortKey;
                    sortDir = listRecordSetsByZoneRequest.sortDir;
                } else {
                    zoneId = listRecordSetsByZoneRequest['zone_id'];
                    searchMode = listRecordSetsByZoneRequest['search_mode'];
                    marker = listRecordSetsByZoneRequest['marker'];
                    limit = listRecordSetsByZoneRequest['limit'];
                    offset = listRecordSetsByZoneRequest['offset'];
                    tags = listRecordSetsByZoneRequest['tags'];
                    status = listRecordSetsByZoneRequest['status'];
                    type = listRecordSetsByZoneRequest['type'];
                    name = listRecordSetsByZoneRequest['name'];
                    id = listRecordSetsByZoneRequest['id'];
                    sortKey = listRecordSetsByZoneRequest['sort_key'];
                    sortDir = listRecordSetsByZoneRequest['sort_dir'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling listRecordSetsByZone.');
            }
            if (searchMode !== null && searchMode !== undefined) {
                localVarQueryParameter['search_mode'] = searchMode;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将弹性公网IP的反向解析记录恢复为默认值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restorePtrRecord(restorePtrRecordRequest?: RestorePtrRecordRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/reverse/floatingips/{region}:{floatingip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let region;
            
            let floatingipId;

            if (restorePtrRecordRequest !== null && restorePtrRecordRequest !== undefined) {
                if (restorePtrRecordRequest instanceof RestorePtrRecordRequest) {
                    region = restorePtrRecordRequest.region;
                    floatingipId = restorePtrRecordRequest.floatingipId;
                    body = restorePtrRecordRequest.body
                } else {
                    region = restorePtrRecordRequest['region'];
                    floatingipId = restorePtrRecordRequest['floatingip_id'];
                    body = restorePtrRecordRequest['body'];
                }
            }

        
            if (region === null || region === undefined) {
            throw new RequiredError('region','Required parameter region was null or undefined when calling restorePtrRecord.');
            }
            if (floatingipId === null || floatingipId === undefined) {
            throw new RequiredError('floatingipId','Required parameter floatingipId was null or undefined when calling restorePtrRecord.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'region': region,'floatingip_id': floatingipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性公网IP的反向解析记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPtrRecordSet(showPtrRecordSetRequest?: ShowPtrRecordSetRequest) {
            const options = {
                method: "GET",
                url: "/v2/reverse/floatingips/{region}:{floatingip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let region;
            
            let floatingipId;

            if (showPtrRecordSetRequest !== null && showPtrRecordSetRequest !== undefined) {
                if (showPtrRecordSetRequest instanceof ShowPtrRecordSetRequest) {
                    region = showPtrRecordSetRequest.region;
                    floatingipId = showPtrRecordSetRequest.floatingipId;
                } else {
                    region = showPtrRecordSetRequest['region'];
                    floatingipId = showPtrRecordSetRequest['floatingip_id'];
                }
            }

        
            if (region === null || region === undefined) {
            throw new RequiredError('region','Required parameter region was null or undefined when calling showPtrRecordSet.');
            }
            if (floatingipId === null || floatingipId === undefined) {
            throw new RequiredError('floatingipId','Required parameter floatingipId was null or undefined when calling showPtrRecordSet.');
            }

            options.pathParams = { 'region': region,'floatingip_id': floatingipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的记录集创建成功后，您可以通过调用此接口查询指定域名下的所有记录集信息，包括名称、ID、状态、所属域名、解析记录值、标签、TTL、创建时间、修改时间、描述等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecordSet(showRecordSetRequest?: ShowRecordSetRequest) {
            const options = {
                method: "GET",
                url: "/v2/zones/{zone_id}/recordsets/{recordset_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let zoneId;
            
            let recordsetId;

            if (showRecordSetRequest !== null && showRecordSetRequest !== undefined) {
                if (showRecordSetRequest instanceof ShowRecordSetRequest) {
                    zoneId = showRecordSetRequest.zoneId;
                    recordsetId = showRecordSetRequest.recordsetId;
                } else {
                    zoneId = showRecordSetRequest['zone_id'];
                    recordsetId = showRecordSetRequest['recordset_id'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling showRecordSet.');
            }
            if (recordsetId === null || recordsetId === undefined) {
            throw new RequiredError('recordsetId','Required parameter recordsetId was null or undefined when calling showRecordSet.');
            }

            options.pathParams = { 'zone_id': zoneId,'recordset_id': recordsetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改弹性公网IP的反向解析记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePtrRecord(updatePtrRecordRequest?: UpdatePtrRecordRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/reverse/floatingips/{region}:{floatingip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let region;
            
            let floatingipId;

            if (updatePtrRecordRequest !== null && updatePtrRecordRequest !== undefined) {
                if (updatePtrRecordRequest instanceof UpdatePtrRecordRequest) {
                    region = updatePtrRecordRequest.region;
                    floatingipId = updatePtrRecordRequest.floatingipId;
                    body = updatePtrRecordRequest.body
                } else {
                    region = updatePtrRecordRequest['region'];
                    floatingipId = updatePtrRecordRequest['floatingip_id'];
                    body = updatePtrRecordRequest['body'];
                }
            }

        
            if (region === null || region === undefined) {
            throw new RequiredError('region','Required parameter region was null or undefined when calling updatePtrRecord.');
            }
            if (floatingipId === null || floatingipId === undefined) {
            throw new RequiredError('floatingipId','Required parameter floatingipId was null or undefined when calling updatePtrRecord.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'region': region,'floatingip_id': floatingipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的记录集创建成功后，您可以通过调用此接口修改记录集的信息，包括域名、类型、记录值、TTL、描述等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRecordSet(updateRecordSetRequest?: UpdateRecordSetRequest) {
            const options = {
                method: "PUT",
                url: "/v2/zones/{zone_id}/recordsets/{recordset_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;
            
            let recordsetId;

            if (updateRecordSetRequest !== null && updateRecordSetRequest !== undefined) {
                if (updateRecordSetRequest instanceof UpdateRecordSetRequest) {
                    zoneId = updateRecordSetRequest.zoneId;
                    recordsetId = updateRecordSetRequest.recordsetId;
                    body = updateRecordSetRequest.body
                } else {
                    zoneId = updateRecordSetRequest['zone_id'];
                    recordsetId = updateRecordSetRequest['recordset_id'];
                    body = updateRecordSetRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling updateRecordSet.');
            }
            if (recordsetId === null || recordsetId === undefined) {
            throw new RequiredError('recordsetId','Required parameter recordsetId was null or undefined when calling updateRecordSet.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId,'recordset_id': recordsetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 提交批量创建记录集任务，返回任务ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateRecordSetsTask(batchCreateRecordSetsTaskRequest?: BatchCreateRecordSetsTaskRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/zones/{zone_id}/recordsets/batch-create-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;

            if (batchCreateRecordSetsTaskRequest !== null && batchCreateRecordSetsTaskRequest !== undefined) {
                if (batchCreateRecordSetsTaskRequest instanceof BatchCreateRecordSetsTaskRequest) {
                    zoneId = batchCreateRecordSetsTaskRequest.zoneId;
                    body = batchCreateRecordSetsTaskRequest.body
                } else {
                    zoneId = batchCreateRecordSetsTaskRequest['zone_id'];
                    body = batchCreateRecordSetsTaskRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling batchCreateRecordSetsTask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除域名下的记录集，当删除的资源不存在时，则默认删除成功。
         * 响应结果中只包含本次实际删除的资源。
         * 支持公网域名和内网域名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteRecordSetWithLine(batchDeleteRecordSetWithLineRequest?: BatchDeleteRecordSetWithLineRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/zones/{zone_id}/recordsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;

            if (batchDeleteRecordSetWithLineRequest !== null && batchDeleteRecordSetWithLineRequest !== undefined) {
                if (batchDeleteRecordSetWithLineRequest instanceof BatchDeleteRecordSetWithLineRequest) {
                    zoneId = batchDeleteRecordSetWithLineRequest.zoneId;
                    body = batchDeleteRecordSetWithLineRequest.body
                } else {
                    zoneId = batchDeleteRecordSetWithLineRequest['zone_id'];
                    body = batchDeleteRecordSetWithLineRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling batchDeleteRecordSetWithLine.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量修改记录集。属于原子性操作，请求记录集将全部完成修改，或不做任何修改。
         * 仅公网域名支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateRecordSetWithLine(batchUpdateRecordSetWithLineRequest?: BatchUpdateRecordSetWithLineRequest) {
            const options = {
                method: "PUT",
                url: "/v2.1/zones/{zone_id}/recordsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;

            if (batchUpdateRecordSetWithLineRequest !== null && batchUpdateRecordSetWithLineRequest !== undefined) {
                if (batchUpdateRecordSetWithLineRequest instanceof BatchUpdateRecordSetWithLineRequest) {
                    zoneId = batchUpdateRecordSetWithLineRequest.zoneId;
                    body = batchUpdateRecordSetWithLineRequest.body
                } else {
                    zoneId = batchUpdateRecordSetWithLineRequest['zone_id'];
                    body = batchUpdateRecordSetWithLineRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling batchUpdateRecordSetWithLine.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建弹性公网IP的反向解析记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPtr(createPtrRequest?: CreatePtrRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/ptrs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPtrRequest !== null && createPtrRequest !== undefined) {
                if (createPtrRequest instanceof CreatePtrRequest) {
                    body = createPtrRequest.body
                } else {
                    body = createPtrRequest['body'];
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
         * 批量线路创建记录集。属于原子性操作，如果存在一个参数校验不通过，则创建失败。仅公网域名支持。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRecordSetWithBatchLines(createRecordSetWithBatchLinesRequest?: CreateRecordSetWithBatchLinesRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/zones/{zone_id}/recordsets/batch/lines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;

            if (createRecordSetWithBatchLinesRequest !== null && createRecordSetWithBatchLinesRequest !== undefined) {
                if (createRecordSetWithBatchLinesRequest instanceof CreateRecordSetWithBatchLinesRequest) {
                    zoneId = createRecordSetWithBatchLinesRequest.zoneId;
                    body = createRecordSetWithBatchLinesRequest.body
                } else {
                    zoneId = createRecordSetWithBatchLinesRequest['zone_id'];
                    body = createRecordSetWithBatchLinesRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling createRecordSetWithBatchLines.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 记录集是指一组资源记录的集合，这些资源记录属于同一域名，用于定义域名支持的解析类型以及解析值。您的域名创建完成后，可以通过调用此接口为域名添加不同类型的记录集。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRecordSetWithLine(createRecordSetWithLineRequest?: CreateRecordSetWithLineRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/zones/{zone_id}/recordsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;

            if (createRecordSetWithLineRequest !== null && createRecordSetWithLineRequest !== undefined) {
                if (createRecordSetWithLineRequest instanceof CreateRecordSetWithLineRequest) {
                    zoneId = createRecordSetWithLineRequest.zoneId;
                    body = createRecordSetWithLineRequest.body
                } else {
                    zoneId = createRecordSetWithLineRequest['zone_id'];
                    body = createRecordSetWithLineRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling createRecordSetWithLine.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除批量创建记录集任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBatchCreateRecordSetsTask(deleteBatchCreateRecordSetsTaskRequest?: DeleteBatchCreateRecordSetsTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/zones/{zone_id}/recordsets/batch-create-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let zoneId;

            if (deleteBatchCreateRecordSetsTaskRequest !== null && deleteBatchCreateRecordSetsTaskRequest !== undefined) {
                if (deleteBatchCreateRecordSetsTaskRequest instanceof DeleteBatchCreateRecordSetsTaskRequest) {
                    zoneId = deleteBatchCreateRecordSetsTaskRequest.zoneId;
                } else {
                    zoneId = deleteBatchCreateRecordSetsTaskRequest['zone_id'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling deleteBatchCreateRecordSetsTask.');
            }

            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将弹性公网IP的反向解析记录恢复为默认值。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePtr(deletePtrRequest?: DeletePtrRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/ptrs/{ptr_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ptrId;

            if (deletePtrRequest !== null && deletePtrRequest !== undefined) {
                if (deletePtrRequest instanceof DeletePtrRequest) {
                    ptrId = deletePtrRequest.ptrId;
                } else {
                    ptrId = deletePtrRequest['ptr_id'];
                }
            }

        
            if (ptrId === null || ptrId === undefined) {
            throw new RequiredError('ptrId','Required parameter ptrId was null or undefined when calling deletePtr.');
            }

            options.pathParams = { 'ptr_id': ptrId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的记录集不再使用时，您可以通过调用此接口将其删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRecordSets(deleteRecordSetsRequest?: DeleteRecordSetsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/zones/{zone_id}/recordsets/{recordset_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let zoneId;
            
            let recordsetId;

            if (deleteRecordSetsRequest !== null && deleteRecordSetsRequest !== undefined) {
                if (deleteRecordSetsRequest instanceof DeleteRecordSetsRequest) {
                    zoneId = deleteRecordSetsRequest.zoneId;
                    recordsetId = deleteRecordSetsRequest.recordsetId;
                } else {
                    zoneId = deleteRecordSetsRequest['zone_id'];
                    recordsetId = deleteRecordSetsRequest['recordset_id'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling deleteRecordSets.');
            }
            if (recordsetId === null || recordsetId === undefined) {
            throw new RequiredError('recordsetId','Required parameter recordsetId was null or undefined when calling deleteRecordSets.');
            }

            options.pathParams = { 'zone_id': zoneId,'recordset_id': recordsetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性公网IP的反向解析记录列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPtrs(listPtrsRequest?: ListPtrsRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/ptrs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let offset;
            
            let enterpriseProjectId;
            
            let tags;
            
            let status;
            
            let resourceType;

            if (listPtrsRequest !== null && listPtrsRequest !== undefined) {
                if (listPtrsRequest instanceof ListPtrsRequest) {
                    marker = listPtrsRequest.marker;
                    limit = listPtrsRequest.limit;
                    offset = listPtrsRequest.offset;
                    enterpriseProjectId = listPtrsRequest.enterpriseProjectId;
                    tags = listPtrsRequest.tags;
                    status = listPtrsRequest.status;
                    resourceType = listPtrsRequest.resourceType;
                } else {
                    marker = listPtrsRequest['marker'];
                    limit = listPtrsRequest['limit'];
                    offset = listPtrsRequest['offset'];
                    enterpriseProjectId = listPtrsRequest['enterprise_project_id'];
                    tags = listPtrsRequest['tags'];
                    status = listPtrsRequest['status'];
                    resourceType = listPtrsRequest['resource_type'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 公网域名支持设置线路解析，当您的公网域名创建完成并添加记录集时，可通过调用此接口查询公网域名的所有解析线路。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPublicZoneLines(listPublicZoneLinesRequest?: ListPublicZoneLinesRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/zones/{zone_id}/lines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneId;
            
            let limit;
            
            let offset;

            if (listPublicZoneLinesRequest !== null && listPublicZoneLinesRequest !== undefined) {
                if (listPublicZoneLinesRequest instanceof ListPublicZoneLinesRequest) {
                    zoneId = listPublicZoneLinesRequest.zoneId;
                    limit = listPublicZoneLinesRequest.limit;
                    offset = listPublicZoneLinesRequest.offset;
                } else {
                    zoneId = listPublicZoneLinesRequest['zone_id'];
                    limit = listPublicZoneLinesRequest['limit'];
                    offset = listPublicZoneLinesRequest['offset'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling listPublicZoneLines.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的记录集创建成功后，您可以通过调用此接口查询所有记录集信息，包括名称、ID、状态、所属域名、解析记录值、标签、TTL、创建时间、修改时间、描述等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecordSetsWithLine(listRecordSetsWithLineRequest?: ListRecordSetsWithLineRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/recordsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneType;
            
            let marker;
            
            let limit;
            
            let offset;
            
            let zoneId;
            
            let lineId;
            
            let tags;
            
            let status;
            
            let type;
            
            let name;
            
            let id;
            
            let records;
            
            let sortKey;
            
            let sortDir;
            
            let healthCheckId;
            
            let searchMode;

            if (listRecordSetsWithLineRequest !== null && listRecordSetsWithLineRequest !== undefined) {
                if (listRecordSetsWithLineRequest instanceof ListRecordSetsWithLineRequest) {
                    zoneType = listRecordSetsWithLineRequest.zoneType;
                    marker = listRecordSetsWithLineRequest.marker;
                    limit = listRecordSetsWithLineRequest.limit;
                    offset = listRecordSetsWithLineRequest.offset;
                    zoneId = listRecordSetsWithLineRequest.zoneId;
                    lineId = listRecordSetsWithLineRequest.lineId;
                    tags = listRecordSetsWithLineRequest.tags;
                    status = listRecordSetsWithLineRequest.status;
                    type = listRecordSetsWithLineRequest.type;
                    name = listRecordSetsWithLineRequest.name;
                    id = listRecordSetsWithLineRequest.id;
                    records = listRecordSetsWithLineRequest.records;
                    sortKey = listRecordSetsWithLineRequest.sortKey;
                    sortDir = listRecordSetsWithLineRequest.sortDir;
                    healthCheckId = listRecordSetsWithLineRequest.healthCheckId;
                    searchMode = listRecordSetsWithLineRequest.searchMode;
                } else {
                    zoneType = listRecordSetsWithLineRequest['zone_type'];
                    marker = listRecordSetsWithLineRequest['marker'];
                    limit = listRecordSetsWithLineRequest['limit'];
                    offset = listRecordSetsWithLineRequest['offset'];
                    zoneId = listRecordSetsWithLineRequest['zone_id'];
                    lineId = listRecordSetsWithLineRequest['line_id'];
                    tags = listRecordSetsWithLineRequest['tags'];
                    status = listRecordSetsWithLineRequest['status'];
                    type = listRecordSetsWithLineRequest['type'];
                    name = listRecordSetsWithLineRequest['name'];
                    id = listRecordSetsWithLineRequest['id'];
                    records = listRecordSetsWithLineRequest['records'];
                    sortKey = listRecordSetsWithLineRequest['sort_key'];
                    sortDir = listRecordSetsWithLineRequest['sort_dir'];
                    healthCheckId = listRecordSetsWithLineRequest['health_check_id'];
                    searchMode = listRecordSetsWithLineRequest['search_mode'];
                }
            }

        
            if (zoneType !== null && zoneType !== undefined) {
                localVarQueryParameter['zone_type'] = zoneType;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (zoneId !== null && zoneId !== undefined) {
                localVarQueryParameter['zone_id'] = zoneId;
            }
            if (lineId !== null && lineId !== undefined) {
                localVarQueryParameter['line_id'] = lineId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (records !== null && records !== undefined) {
                localVarQueryParameter['records'] = records;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (healthCheckId !== null && healthCheckId !== undefined) {
                localVarQueryParameter['health_check_id'] = healthCheckId;
            }
            if (searchMode !== null && searchMode !== undefined) {
                localVarQueryParameter['search_mode'] = searchMode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询系统预置解析线路。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSystemLines(listSystemLinesRequest?: ListSystemLinesRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/system-lines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let locale;
            
            let limit;
            
            let offset;

            if (listSystemLinesRequest !== null && listSystemLinesRequest !== undefined) {
                if (listSystemLinesRequest instanceof ListSystemLinesRequest) {
                    locale = listSystemLinesRequest.locale;
                    limit = listSystemLinesRequest.limit;
                    offset = listSystemLinesRequest.offset;
                } else {
                    locale = listSystemLinesRequest['locale'];
                    limit = listSystemLinesRequest['limit'];
                    offset = listSystemLinesRequest['offset'];
                }
            }

        
            if (locale !== null && locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
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
         * 当您的记录集创建成功后，您可以通过调用此接口设置记录集的状态，包括暂停、启用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setRecordSetsStatus(setRecordSetsStatusRequest?: SetRecordSetsStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v2.1/recordsets/{recordset_id}/statuses/set",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let recordsetId;

            if (setRecordSetsStatusRequest !== null && setRecordSetsStatusRequest !== undefined) {
                if (setRecordSetsStatusRequest instanceof SetRecordSetsStatusRequest) {
                    recordsetId = setRecordSetsStatusRequest.recordsetId;
                    body = setRecordSetsStatusRequest.body
                } else {
                    recordsetId = setRecordSetsStatusRequest['recordset_id'];
                    body = setRecordSetsStatusRequest['body'];
                }
            }

        
            if (recordsetId === null || recordsetId === undefined) {
            throw new RequiredError('recordsetId','Required parameter recordsetId was null or undefined when calling setRecordSetsStatus.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'recordset_id': recordsetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询批量创建记录集任务，分页返回失败条目。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBatchCreateRecordSetsTask(showBatchCreateRecordSetsTaskRequest?: ShowBatchCreateRecordSetsTaskRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/zones/{zone_id}/recordsets/batch-create-task",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneId;
            
            let errorItemLimit;
            
            let errorItemOffset;

            if (showBatchCreateRecordSetsTaskRequest !== null && showBatchCreateRecordSetsTaskRequest !== undefined) {
                if (showBatchCreateRecordSetsTaskRequest instanceof ShowBatchCreateRecordSetsTaskRequest) {
                    zoneId = showBatchCreateRecordSetsTaskRequest.zoneId;
                    errorItemLimit = showBatchCreateRecordSetsTaskRequest.errorItemLimit;
                    errorItemOffset = showBatchCreateRecordSetsTaskRequest.errorItemOffset;
                } else {
                    zoneId = showBatchCreateRecordSetsTaskRequest['zone_id'];
                    errorItemLimit = showBatchCreateRecordSetsTaskRequest['error_item_limit'];
                    errorItemOffset = showBatchCreateRecordSetsTaskRequest['error_item_offset'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling showBatchCreateRecordSetsTask.');
            }
            if (errorItemLimit !== null && errorItemLimit !== undefined) {
                localVarQueryParameter['error_item_limit'] = errorItemLimit;
            }
            if (errorItemOffset !== null && errorItemOffset !== undefined) {
                localVarQueryParameter['error_item_offset'] = errorItemOffset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性公网IP的反向解析记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPtr(showPtrRequest?: ShowPtrRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/ptrs/{ptr_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ptrId;

            if (showPtrRequest !== null && showPtrRequest !== undefined) {
                if (showPtrRequest instanceof ShowPtrRequest) {
                    ptrId = showPtrRequest.ptrId;
                } else {
                    ptrId = showPtrRequest['ptr_id'];
                }
            }

        
            if (ptrId === null || ptrId === undefined) {
            throw new RequiredError('ptrId','Required parameter ptrId was null or undefined when calling showPtr.');
            }

            options.pathParams = { 'ptr_id': ptrId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的记录集创建成功后，您可以通过调用此接口查询指定域名下的所有记录集信息，包括名称、ID、状态、所属域名、解析记录值、标签、TTL、创建时间、修改时间、描述等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecordSetByZone(showRecordSetByZoneRequest?: ShowRecordSetByZoneRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/zones/{zone_id}/recordsets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneId;
            
            let marker;
            
            let limit;
            
            let offset;
            
            let lineId;
            
            let tags;
            
            let status;
            
            let type;
            
            let name;
            
            let id;
            
            let sortKey;
            
            let sortDir;
            
            let searchMode;

            if (showRecordSetByZoneRequest !== null && showRecordSetByZoneRequest !== undefined) {
                if (showRecordSetByZoneRequest instanceof ShowRecordSetByZoneRequest) {
                    zoneId = showRecordSetByZoneRequest.zoneId;
                    marker = showRecordSetByZoneRequest.marker;
                    limit = showRecordSetByZoneRequest.limit;
                    offset = showRecordSetByZoneRequest.offset;
                    lineId = showRecordSetByZoneRequest.lineId;
                    tags = showRecordSetByZoneRequest.tags;
                    status = showRecordSetByZoneRequest.status;
                    type = showRecordSetByZoneRequest.type;
                    name = showRecordSetByZoneRequest.name;
                    id = showRecordSetByZoneRequest.id;
                    sortKey = showRecordSetByZoneRequest.sortKey;
                    sortDir = showRecordSetByZoneRequest.sortDir;
                    searchMode = showRecordSetByZoneRequest.searchMode;
                } else {
                    zoneId = showRecordSetByZoneRequest['zone_id'];
                    marker = showRecordSetByZoneRequest['marker'];
                    limit = showRecordSetByZoneRequest['limit'];
                    offset = showRecordSetByZoneRequest['offset'];
                    lineId = showRecordSetByZoneRequest['line_id'];
                    tags = showRecordSetByZoneRequest['tags'];
                    status = showRecordSetByZoneRequest['status'];
                    type = showRecordSetByZoneRequest['type'];
                    name = showRecordSetByZoneRequest['name'];
                    id = showRecordSetByZoneRequest['id'];
                    sortKey = showRecordSetByZoneRequest['sort_key'];
                    sortDir = showRecordSetByZoneRequest['sort_dir'];
                    searchMode = showRecordSetByZoneRequest['search_mode'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling showRecordSetByZone.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (lineId !== null && lineId !== undefined) {
                localVarQueryParameter['line_id'] = lineId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (searchMode !== null && searchMode !== undefined) {
                localVarQueryParameter['search_mode'] = searchMode;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'zone_id': zoneId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的记录集创建成功后，您可以通过调用此接口查询单个记录集信息，包括名称、ID、状态、所属域名、解析记录值、标签、TTL、创建时间、修改时间、描述等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecordSetWithLine(showRecordSetWithLineRequest?: ShowRecordSetWithLineRequest) {
            const options = {
                method: "GET",
                url: "/v2.1/zones/{zone_id}/recordsets/{recordset_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let zoneId;
            
            let recordsetId;

            if (showRecordSetWithLineRequest !== null && showRecordSetWithLineRequest !== undefined) {
                if (showRecordSetWithLineRequest instanceof ShowRecordSetWithLineRequest) {
                    zoneId = showRecordSetWithLineRequest.zoneId;
                    recordsetId = showRecordSetWithLineRequest.recordsetId;
                } else {
                    zoneId = showRecordSetWithLineRequest['zone_id'];
                    recordsetId = showRecordSetWithLineRequest['recordset_id'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling showRecordSetWithLine.');
            }
            if (recordsetId === null || recordsetId === undefined) {
            throw new RequiredError('recordsetId','Required parameter recordsetId was null or undefined when calling showRecordSetWithLine.');
            }

            options.pathParams = { 'zone_id': zoneId,'recordset_id': recordsetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改弹性公网IP的反向解析记录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePtr(updatePtrRequest?: UpdatePtrRequest) {
            const options = {
                method: "PUT",
                url: "/v2.1/ptrs/{ptr_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ptrId;

            if (updatePtrRequest !== null && updatePtrRequest !== undefined) {
                if (updatePtrRequest instanceof UpdatePtrRequest) {
                    ptrId = updatePtrRequest.ptrId;
                    body = updatePtrRequest.body
                } else {
                    ptrId = updatePtrRequest['ptr_id'];
                    body = updatePtrRequest['body'];
                }
            }

        
            if (ptrId === null || ptrId === undefined) {
            throw new RequiredError('ptrId','Required parameter ptrId was null or undefined when calling updatePtr.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ptr_id': ptrId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当您的记录集创建成功后，您可以通过调用此接口修改记录集的信息，包括域名、类型、记录值、TTL、描述等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRecordSets(updateRecordSetsRequest?: UpdateRecordSetsRequest) {
            const options = {
                method: "PUT",
                url: "/v2.1/zones/{zone_id}/recordsets/{recordset_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let zoneId;
            
            let recordsetId;

            if (updateRecordSetsRequest !== null && updateRecordSetsRequest !== undefined) {
                if (updateRecordSetsRequest instanceof UpdateRecordSetsRequest) {
                    zoneId = updateRecordSetsRequest.zoneId;
                    recordsetId = updateRecordSetsRequest.recordsetId;
                    body = updateRecordSetsRequest.body
                } else {
                    zoneId = updateRecordSetsRequest['zone_id'];
                    recordsetId = updateRecordSetsRequest['recordset_id'];
                    body = updateRecordSetsRequest['body'];
                }
            }

        
            if (zoneId === null || zoneId === undefined) {
            throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling updateRecordSets.');
            }
            if (recordsetId === null || recordsetId === undefined) {
            throw new RequiredError('recordsetId','Required parameter recordsetId was null or undefined when calling updateRecordSets.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'zone_id': zoneId,'recordset_id': recordsetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): DnsClient {
    return new DnsClient(client);
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