import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AliasTarget } from './model/AliasTarget';
import { AssociateHealthCheckReq } from './model/AssociateHealthCheckReq';
import { AssociateHealthCheckRequest } from './model/AssociateHealthCheckRequest';
import { AssociateHealthCheckResponse } from './model/AssociateHealthCheckResponse';
import { AssociateRouterRequest } from './model/AssociateRouterRequest';
import { AssociateRouterRequestBody } from './model/AssociateRouterRequestBody';
import { AssociateRouterResponse } from './model/AssociateRouterResponse';
import { BatchCreateRecordSetWithLine } from './model/BatchCreateRecordSetWithLine';
import { BatchCreateTagRequest } from './model/BatchCreateTagRequest';
import { BatchCreateTagResponse } from './model/BatchCreateTagResponse';
import { BatchDeleteRecordSetWithLineRequest } from './model/BatchDeleteRecordSetWithLineRequest';
import { BatchDeleteRecordSetWithLineRequestBody } from './model/BatchDeleteRecordSetWithLineRequestBody';
import { BatchDeleteRecordSetWithLineResponse } from './model/BatchDeleteRecordSetWithLineResponse';
import { BatchHandTags } from './model/BatchHandTags';
import { BatchUpdateRecordSet } from './model/BatchUpdateRecordSet';
import { BatchUpdateRecordSetWithLineReq } from './model/BatchUpdateRecordSetWithLineReq';
import { BatchUpdateRecordSetWithLineRequest } from './model/BatchUpdateRecordSetWithLineRequest';
import { BatchUpdateRecordSetWithLineResponse } from './model/BatchUpdateRecordSetWithLineResponse';
import { CreateCustomLineRequest } from './model/CreateCustomLineRequest';
import { CreateCustomLineResponse } from './model/CreateCustomLineResponse';
import { CreateCustomLines } from './model/CreateCustomLines';
import { CreateEipRecordSetRequest } from './model/CreateEipRecordSetRequest';
import { CreateEipRecordSetResponse } from './model/CreateEipRecordSetResponse';
import { CreateLineGroupRequest } from './model/CreateLineGroupRequest';
import { CreateLineGroupResponse } from './model/CreateLineGroupResponse';
import { CreateLineGroupsReq } from './model/CreateLineGroupsReq';
import { CreateLineGroupsResp } from './model/CreateLineGroupsResp';
import { CreatePrivateZoneReq } from './model/CreatePrivateZoneReq';
import { CreatePrivateZoneRequest } from './model/CreatePrivateZoneRequest';
import { CreatePrivateZoneResponse } from './model/CreatePrivateZoneResponse';
import { CreatePtrReq } from './model/CreatePtrReq';
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
import { CreateTagReq } from './model/CreateTagReq';
import { CreateTagRequest } from './model/CreateTagRequest';
import { CreateTagResponse } from './model/CreateTagResponse';
import { DeleteCustomLineRequest } from './model/DeleteCustomLineRequest';
import { DeleteCustomLineResponse } from './model/DeleteCustomLineResponse';
import { DeleteLineGroupRequest } from './model/DeleteLineGroupRequest';
import { DeleteLineGroupResponse } from './model/DeleteLineGroupResponse';
import { DeletePrivateZoneRequest } from './model/DeletePrivateZoneRequest';
import { DeletePrivateZoneResponse } from './model/DeletePrivateZoneResponse';
import { DeletePublicZoneRequest } from './model/DeletePublicZoneRequest';
import { DeletePublicZoneResponse } from './model/DeletePublicZoneResponse';
import { DeleteRecordSetRequest } from './model/DeleteRecordSetRequest';
import { DeleteRecordSetResponse } from './model/DeleteRecordSetResponse';
import { DeleteRecordSetsRequest } from './model/DeleteRecordSetsRequest';
import { DeleteRecordSetsResponse } from './model/DeleteRecordSetsResponse';
import { DeleteTagRequest } from './model/DeleteTagRequest';
import { DeleteTagResponse } from './model/DeleteTagResponse';
import { DisassociateHealthCheckRequest } from './model/DisassociateHealthCheckRequest';
import { DisassociateHealthCheckResponse } from './model/DisassociateHealthCheckResponse';
import { DisassociateRouterRequest } from './model/DisassociateRouterRequest';
import { DisassociateRouterResponse } from './model/DisassociateRouterResponse';
import { DisassociaterouterRequestBody } from './model/DisassociaterouterRequestBody';
import { Line } from './model/Line';
import { LinksItem } from './model/LinksItem';
import { ListApiVersionsItem } from './model/ListApiVersionsItem';
import { ListApiVersionsRequest } from './model/ListApiVersionsRequest';
import { ListApiVersionsResponse } from './model/ListApiVersionsResponse';
import { ListCustomLineRequest } from './model/ListCustomLineRequest';
import { ListCustomLineResponse } from './model/ListCustomLineResponse';
import { ListLineGroupsRequest } from './model/ListLineGroupsRequest';
import { ListLineGroupsResponse } from './model/ListLineGroupsResponse';
import { ListNameServersRequest } from './model/ListNameServersRequest';
import { ListNameServersResponse } from './model/ListNameServersResponse';
import { ListPrivateZonesRequest } from './model/ListPrivateZonesRequest';
import { ListPrivateZonesResponse } from './model/ListPrivateZonesResponse';
import { ListPtrRecordsFloatingResp } from './model/ListPtrRecordsFloatingResp';
import { ListPtrRecordsRequest } from './model/ListPtrRecordsRequest';
import { ListPtrRecordsResponse } from './model/ListPtrRecordsResponse';
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
import { PageLink } from './model/PageLink';
import { PrivateNameServer } from './model/PrivateNameServer';
import { PrivateZoneResp } from './model/PrivateZoneResp';
import { PublicZoneResp } from './model/PublicZoneResp';
import { QueryRecordSetWithLineAndTagsResp } from './model/QueryRecordSetWithLineAndTagsResp';
import { QueryRecordSetWithLineResp } from './model/QueryRecordSetWithLineResp';
import { ResourceItem } from './model/ResourceItem';
import { RestorePtrRecordRequest } from './model/RestorePtrRecordRequest';
import { RestorePtrRecordResponse } from './model/RestorePtrRecordResponse';
import { RestorePtrReq } from './model/RestorePtrReq';
import { Router } from './model/Router';
import { RouterWithStatus } from './model/RouterWithStatus';
import { SetRecordSetsStatusReq } from './model/SetRecordSetsStatusReq';
import { SetRecordSetsStatusRequest } from './model/SetRecordSetsStatusRequest';
import { SetRecordSetsStatusResponse } from './model/SetRecordSetsStatusResponse';
import { ShowApiInfoRequest } from './model/ShowApiInfoRequest';
import { ShowApiInfoResponse } from './model/ShowApiInfoResponse';
import { ShowLineGroupRequest } from './model/ShowLineGroupRequest';
import { ShowLineGroupResponse } from './model/ShowLineGroupResponse';
import { ShowPrivateZoneNameServerRequest } from './model/ShowPrivateZoneNameServerRequest';
import { ShowPrivateZoneNameServerResponse } from './model/ShowPrivateZoneNameServerResponse';
import { ShowPrivateZoneRequest } from './model/ShowPrivateZoneRequest';
import { ShowPrivateZoneResponse } from './model/ShowPrivateZoneResponse';
import { ShowPtrRecordSetRequest } from './model/ShowPtrRecordSetRequest';
import { ShowPtrRecordSetResponse } from './model/ShowPtrRecordSetResponse';
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
import { ShowResourceTagRequest } from './model/ShowResourceTagRequest';
import { ShowResourceTagResponse } from './model/ShowResourceTagResponse';
import { Tag } from './model/Tag';
import { TagValues } from './model/TagValues';
import { UpdateCustomLineRequest } from './model/UpdateCustomLineRequest';
import { UpdateCustomLineResponse } from './model/UpdateCustomLineResponse';
import { UpdateCustomsLineReq } from './model/UpdateCustomsLineReq';
import { UpdateLineGroupsBody } from './model/UpdateLineGroupsBody';
import { UpdateLineGroupsRequest } from './model/UpdateLineGroupsRequest';
import { UpdateLineGroupsResponse } from './model/UpdateLineGroupsResponse';
import { UpdatePrivateZoneInfoReq } from './model/UpdatePrivateZoneInfoReq';
import { UpdatePrivateZoneRequest } from './model/UpdatePrivateZoneRequest';
import { UpdatePrivateZoneResponse } from './model/UpdatePrivateZoneResponse';
import { UpdatePtrRecordRequest } from './model/UpdatePtrRecordRequest';
import { UpdatePtrRecordResponse } from './model/UpdatePtrRecordResponse';
import { UpdatePtrReq } from './model/UpdatePtrReq';
import { UpdatePublicZoneInfo } from './model/UpdatePublicZoneInfo';
import { UpdatePublicZoneRequest } from './model/UpdatePublicZoneRequest';
import { UpdatePublicZoneResponse } from './model/UpdatePublicZoneResponse';
import { UpdatePublicZoneStatusRequest } from './model/UpdatePublicZoneStatusRequest';
import { UpdatePublicZoneStatusRequestBody } from './model/UpdatePublicZoneStatusRequestBody';
import { UpdatePublicZoneStatusResponse } from './model/UpdatePublicZoneStatusResponse';
import { UpdateRecordSetReq } from './model/UpdateRecordSetReq';
import { UpdateRecordSetRequest } from './model/UpdateRecordSetRequest';
import { UpdateRecordSetResponse } from './model/UpdateRecordSetResponse';
import { UpdateRecordSetsReq } from './model/UpdateRecordSetsReq';
import { UpdateRecordSetsRequest } from './model/UpdateRecordSetsRequest';
import { UpdateRecordSetsResponse } from './model/UpdateRecordSetsResponse';
import { ValuesItem } from './model/ValuesItem';
import { VersionItem } from './model/VersionItem';

export class DnsClient {
    public static newBuilder(): ClientBuilder<DnsClient> {
            return new ClientBuilder<DnsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 创建单个自定义线路
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建单个自定义线路
     * @param {CreateCustomLines} [createCustomLines] 
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
     * 创建一个线路分组。
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
     * 删除单个自定义线路
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除单个自定义线路
     * @param {string} lineId 解析线路ID。
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
     * 删除单个线路分组。
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
     * 查询所有的云解析服务API版本号列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有的云解析服务API版本号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersions(): Promise<ListApiVersionsResponse> {
        const options = ParamCreater().listApiVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自定义线路
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义线路
     * @param {string} [lineId] 解析线路ID。
     * @param {string} [name] 解析线路名称。
     * @param {number} [limit] 每页返回的资源个数。  取值范围：0~500  取值一般为10，20，50。默认值为500。
     * @param {number} [offset] 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。  取值范围：0~2147483647  默认值为0。  当前设置marker不为空时，以marker为分页起始标识。
     * @param {boolean} [showDetail] 是否查询详细信息。  取值范围：  true：是，查询详细信息。 false：否，不查询详细信息。 默认为true。
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
     * 查询线路分组列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询线路分组列表
     * @param {string} [lineId] 线路分组ID。 模糊匹配。
     * @param {string} [name] 线路分组名称。 模糊匹配。
     * @param {number} [limit] 每页返回的资源个数。  当查询详细信息时：取值范围：0~100取值一般为10，20，50默认为100。  当查询概要信息时：取值范围：0~3000默认为3000。
     * @param {number} [offset] 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。  取值范围：0~2147483647  默认值为0。  当前设置marker不为空时，以marker为分页起始标识。
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
     * 查询指定的云解析服务API版本号
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定的云解析服务API版本号
     * @param {string} version 待查询版本号。以v开头，如v2。
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
     * 查询线路分组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询线路分组
     * @param {string} linegroupId 待查询的线路分组ID。
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
     * 更新单个自定义线路
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新单个自定义线路
     * @param {string} lineId 解析线路ID。
     * @param {UpdateCustomsLineReq} [updateCustomsLineReq] 
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
     * 更新单个线路分组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新线路分组
     * @param {string} linegroupId 待更新的线路分组ID。
     * @param {UpdateLineGroupsBody} updateLineGroupsBody 更新线路分组请求。
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
     * 设置弹性IP的PTR记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置弹性IP的PTR记录
     * @param {string} region 租户的区域信息。
     * @param {string} floatingipId 弹性IP的ID。
     * @param {CreatePtrReq} createPtrReq 设置弹性IP的PTR记录请求。
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
     * 查询租户弹性IP的PTR记录列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户弹性IP的PTR记录列表
     * @param {string} [marker] 分页查询起始的资源ID，为空时为查询第一页。  默认值为空。
     * @param {number} [limit] 每页返回的资源个数。  取值范围：0~500  取值一般为10，20，50。默认值为500。
     * @param {number} [offset] 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。  取值范围：0~2147483647  默认值为0。  当前设置marker不为空时，以marker为分页起始标识。
     * @param {string} [enterpriseProjectId] 反向解析关联的企业项目ID，长度不超过36个字符。  默认值为0。
     * @param {string} [tags] 资源标签。  取值格式：key1,value1|key2,value2  多个标签之间用\&quot;|\&quot;分开，每个标签的键值用英文逗号\&quot;,\&quot;相隔。
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
     * 将弹性IP的PTR记录恢复为默认值
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将弹性IP的PTR记录恢复为默认值
     * @param {string} region 域名所属的区域。
     * @param {string} floatingipId 待删除PTR ID。
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
     * 查询单个弹性IP的PTR记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个弹性IP的PTR记录
     * @param {string} region 租户的区域信息。 
     * @param {string} floatingipId 弹性IP的ID。
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
     * 修改弹性IP的PTR记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改弹性IP的PTR记录
     * @param {string} region 域名所属的区域。
     * @param {string} floatingipId 待修改弹性IP的PTR记录ID信息。
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
     * Record Set关联健康检查。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Record Set关联健康检查
     * @param {string} recordsetId 待查询的recordset ID。
     * @param {AssociateHealthCheckReq} associateHealthCheckReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateHealthCheck(associateHealthCheckRequest?: AssociateHealthCheckRequest): Promise<AssociateHealthCheckResponse> {
        const options = ParamCreater().associateHealthCheck(associateHealthCheckRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除某个Zone下的Record Set资源，当删除的资源不存在时，则默认删除成功。
     * 响应结果中只包含本次实际删除的资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除某个Zone下的Record Set资源
     * @param {string} zoneId 所属zone的ID。
     * @param {BatchDeleteRecordSetWithLineRequestBody} batchDeleteRecordSetWithLineRequestBody 批量删除某个Zone下的Record Set资源请求体。
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
     * 批量修改RecordSet。属于原子性操作，请求Record Set将全部完成修改，或不做任何修改。
     * 仅公网Zone支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改RecordSet
     * @param {string} zoneId 所属zone的ID。
     * @param {BatchUpdateRecordSetWithLineReq} batchUpdateRecordSetWithLineReq 
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
     * 创建单个Record Set
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建单个Record Set
     * @param {string} zoneId 所属zone的ID。
     * @param {CreateRecordSetRequestBody} createRecordSetRequestBody 创建RecordSet请求对象。
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
     * 批量线路创建RecordSet。属于原子性操作，如果存在一个参数校验不通过，则创建失败。仅公网Zone支持。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量线路创建RecordSet
     * @param {string} zoneId 所属Zone的ID。
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
     * 创建单个Record Set，仅适用于公网DNS
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建单个Record Set
     * @param {string} zoneId 所属zone的ID。
     * @param {CreateRecordSetWithLineRequestBody} createRecordSetWithLineRequestBody 创建单个Record Set请求体
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
     * 删除单个Record Set
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除单个Record Set
     * @param {string} zoneId 当前recordset所属的zoneID。
     * @param {string} recordsetId 当前recordset所属的ID信息。
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
     * 删除单个Record Set
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除单个Record Set
     * @param {string} zoneId Record Set所属的zone_id。
     * @param {string} recordsetId Record Set的id信息。
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
     * Record Set解关联健康检查。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Record Set解关联健康检查
     * @param {string} recordsetId Record Set关联健康检查。
     * @param {AssociateHealthCheckReq} associateHealthCheckReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateHealthCheck(disassociateHealthCheckRequest?: DisassociateHealthCheckRequest): Promise<DisassociateHealthCheckResponse> {
        const options = ParamCreater().disassociateHealthCheck(disassociateHealthCheckRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户Record Set资源列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户Record Set资源列表
     * @param {string} [zoneType] 待查询的Record Set的域名类型。  取值范围：public、private  如果为空，表示查询公网类型的Record Set。 如果为public，表示查询公网类型的Record Set。 如果为private，表示查询内网类型的Record Set。 搜索模式默认为模糊搜索。  默认值为public。
     * @param {string} [marker] 分页查询起始的资源ID，为空时为查询第一页。  默认值为空。
     * @param {string} [searchMode] 查询条件搜索模式。  取值范围：  like：模糊搜索 equal：精确搜索 默认值为equal。
     * @param {number} [limit] 每页返回的资源个数。  取值范围：0~500  取值一般为10，20，50。默认值为500。
     * @param {number} [offset] 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。  取值范围：0~2147483647  默认值为0。  当前设置marker不为空时，以marker为分页起始标识。
     * @param {string} [tags] 资源标签。  取值格式：key1,value1|key2,value2  多个标签之间用\&quot;|\&quot;分开，每个标签的键值用英文逗号\&quot;,\&quot;相隔。
     * @param {string} [status] 待查询的Record Set的状态。  取值范围：ACTIVE、ERROR、DISABLE、FREEZE、PENDING_CREATE、PENDING_UPDATE、PENDING_DELETE
     * @param {string} [type] 待查询的Record Set的记录集类型。 公网域名场景的记录类型: A、AAAA、MX、CNAME、TXT、NS、SRV、CAA。 内网域名场景的记录类型: A、AAAA、MX、CNAME、TXT、SRV。
     * @param {string} [name] 待查询的Record Set的域名中包含此name。  搜索模式默认为模糊搜索。  默认值为空。
     * @param {string} [id] 待查询的Record Set的id包含此id。  搜索模式默认为模糊搜索。  默认值为空。
     * @param {string} [records] 待查询的Record Set的值中包含此records。  搜索模式默认为模糊搜索。  默认值为空。
     * @param {string} [sortKey] 查询结果中Record Set列表的排序字段。  取值范围：  name：域名 type：记录集类型 默认值为空，表示不排序。
     * @param {string} [sortDir] 查询结果中Record Set列表的排序方式。  取值范围：  desc：降序排序 asc：升序排序 默认值为空，表示不排序。
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
     * 查询单个Zone下Record Set列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个Zone下Record Set列表
     * @param {string} zoneId 所属zone id。
     * @param {string} [searchMode] 查询条件搜索模式。  取值范围：  like：模糊搜索 equal：精确搜索 默认值为equal。
     * @param {string} [marker] 分页查询起始的资源ID，为空时为查询第一页。  默认值为空。
     * @param {number} [limit] 每页返回的资源个数。  取值范围：0~500  取值一般为10，20，50。默认值为500。
     * @param {number} [offset] 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。  取值范围：0~2147483647  默认值为0。  当前设置marker不为空时，以marker为分页起始标识。
     * @param {string} [tags] 资源标签。  取值格式：key1,value1|key2,value2  多个标签之间用\&quot;|\&quot;分开，每个标签的键值用英文逗号\&quot;,\&quot;相隔。
     * @param {string} [status] 待查询的Record Set的状态。  取值范围：ACTIVE、ERROR、DISABLE、FREEZE、PENDING_CREATE、PENDING_UPDATE、PENDING_DELETE
     * @param {string} [type] 待查询的Record Set的记录集类型。  取值范围：A,AAAA,MX,CNAME,TXT, NS（仅限公网Zone）,SRV,PTR（仅限内网Zone）,CAA（仅限公网Zone）。
     * @param {string} [name] 待查询的Record Set的域名中包含此name。  搜索模式默认为模糊搜索。  默认值为空。
     * @param {string} [id] 待查询的Record Set的id包含此id。  搜索模式默认为模糊搜索。  默认值为空。
     * @param {string} [sortKey] 查询结果中Record Set列表的排序字段。  取值范围为：  name：域名 type：记录集类型 默认值为空，表示不排序。
     * @param {string} [sortDir] 查询结果中Record Set列表的排序方式。  取值范围：  desc：降序排序 asc：升序排序 默认值为空，表示不排序。
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
     * 查询租户Record Set资源列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户Record Set资源列表
     * @param {string} [zoneType] 待查询的Record Set的域名类型。  取值范围：public  搜索模式默认为模糊搜索。  默认值为public。
     * @param {string} [marker] 分页查询起始的资源ID，为空时为查询第一页。  默认值为空。
     * @param {number} [limit] 每页返回的资源个数。  取值范围：0~500  取值一般为10，20，50。默认值为500。
     * @param {number} [offset] 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。  取值范围：0~2147483647  默认值为0。  当前设置marker不为空时，以marker为分页起始标识。
     * @param {string} [lineId] 解析线路ID。
     * @param {string} [tags] 资源标签。  取值格式：key1,value1|key2,value2  多个标签之间用\&quot;|\&quot;分开，每个标签的键值用英文逗号\&quot;,\&quot;相隔。
     * @param {string} [status] 待查询的Record Set的状态。  取值范围：ACTIVE、ERROR、DISABLE、FREEZE、PENDING_CREATE、PENDING_UPDATE、PENDING_DELETE
     * @param {string} [type] 待查询的Record Set的记录集类型。  取值范围：A、CNAME、MX、AAAA、TXT、SRV、NS、CAA
     * @param {string} [name] 待查询的Record Set的域名中包含此name。  搜索模式默认为模糊搜索。  默认值为空。
     * @param {string} [id] 待查询的Record Set的id包含此id。  搜索模式默认为模糊搜索。  默认值为空。
     * @param {string} [records] 待查询的Record Set的值中包含此records。  搜索模式默认为模糊搜索。  默认值为空。
     * @param {string} [sortKey] 查询结果中Record Set列表的排序字段。  取值范围：  name：域名 type：记录集类型 默认值为空，表示不排序。
     * @param {string} [sortDir] 查询结果中Record Set列表的排序方式。  取值范围：  desc：降序排序 asc：升序排序 默认值为空，表示不排序。
     * @param {string} [healthCheckId] 健康检查ID。  搜索模式默认为模糊搜索。  默认值为空。
     * @param {string} [searchMode] 查询条件搜索模式。  取值范围：  like：模糊搜索 equal：精确搜索 默认值为like。
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
     * 设置Record Set状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置Record Set状态
     * @param {string} recordsetId 待设置Record Set的ID信息。
     * @param {SetRecordSetsStatusReq} [setRecordSetsStatusReq] 
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
     * 查询单个Record Set。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个Record Set
     * @param {string} zoneId 所属zone的ID。
     * @param {string} recordsetId 待查询recordset的ID信息。
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
     * 查询单个Zone下Record Set列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个Zone下Record Set列表
     * @param {string} zoneId 所属zone的ID。
     * @param {string} [marker] 分页查询起始的资源ID，为空时为查询第一页。  默认值为空。
     * @param {number} [limit] 每页返回的资源个数。  取值范围：0~500  取值一般为10，20，50。默认值为500。
     * @param {number} [offset] 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。  取值范围：0~2147483647  默认值为0。  当前设置marker不为空时，以marker为分页起始标识。
     * @param {string} [lineId] 解析线路ID。
     * @param {string} [tags] 资源标签。  取值格式：key1,value1|key2,value2  多个标签之间用\&quot;|\&quot;分开，每个标签的键值用英文逗号\&quot;,\&quot;相隔。
     * @param {string} [status] 待查询的Record Set的状态。  取值范围：ACTIVE、ERROR、DISABLE、FREEZE、PENDING_CREATE、PENDING_UPDATE、PENDING_DELETE
     * @param {string} [type] 待查询的Record Set的记录集类型。  公网域名场景的记录类型: A、AAAA、MX、CNAME、TXT、NS、SRV、CAA。 内网域名场景的记录类型: A、AAAA、MX、CNAME、TXT、SRV。
     * @param {string} [name] 待查询的Record Set的域名中包含此name。  搜索模式默认为模糊搜索。  默认值为空。
     * @param {string} [id] 待查询的Record Set的id包含此id。  搜索模式默认为模糊搜索。  默认值为空。
     * @param {string} [sortKey] 查询结果中Record Set列表的排序字段。  取值范围：  name：域名 type：记录集类型 默认值为空，表示不排序。
     * @param {string} [sortDir] 查询结果中Record Set列表的排序方式。  取值范围：  desc：降序排序 asc：升序排序 默认值为空，表示不排序。
     * @param {string} [searchMode] 查询条件搜索模式。  取值范围：  like：模糊搜索 equal：精确搜索 默认值为equal。
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
     * 查询单个Record Set，仅适用于公网DNS
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个Record Set
     * @param {string} zoneId 所属zone的ID。
     * @param {string} recordsetId 待查询recordset的ID信息。
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
     * 修改单个Record Set
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改单个Record Set
     * @param {string} zoneId 所属zone的ID。
     * @param {string} recordsetId 待修改的recordset的ID信息。
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
     * 修改单个Record Set
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改单个Record Set
     * @param {string} zoneId 所属zone的ID。
     * @param {string} recordsetId 待查询recordset的ID信息。
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

    /**
     * 为指定实例批量添加或删除标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定实例批量添加或删除标签
     * @param {string} resourceType 资源的类型：DNS-public_zone，DNS-private_zone，DNS-public_recordset，DNS-private_recordset，DNS-ptr_record。
     * @param {string} resourceId 资源id。
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
     * 为指定实例添加标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定实例添加标签
     * @param {string} resourceType 资源的类型：DNS-public_zone，DNS-private_zone，DNS-public_recordset，DNS-private_recordset，DNS-ptr_record。
     * @param {string} resourceId 资源id。  
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
     * 删除资源标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源标签
     * @param {string} resourceType 资源的类型：DNS-public_zone，DNS-private_zone，DNS-public_recordset，DNS-private_recordset，DNS-ptr_record。  
     * @param {string} resourceId 资源id。  
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
     * 查询指定实例的标签信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定实例的标签信息
     * @param {string} resourceType 资源的类型：DNS-public_zone，DNS-private_zone，DNS-public_recordset，DNS-private_recordset，DNS-ptr_record。
     * @param {string} resourceId 资源id。
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
     * 在内网Zone上关联VPC
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在内网Zone上关联VPC
     * @param {string} zoneId 关联VPC的Zone ID。
     * @param {AssociateRouterRequestBody} associateRouterRequestBody 需要关联的Router(VPC)。
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
     * 创建单个内网Zone
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建单个内网Zone
     * @param {CreatePrivateZoneReq} [createPrivateZoneReq] 创建单个内网Zone请求体。
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
     * 创建单个公网Zone
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建单个公网Zone
     * @param {CreatePublicZoneReq} createPublicZone 创建公网Zone请求对象。
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
     * 删除单个内网Zone
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除单个内网Zone
     * @param {string} zoneId 待删除zone的ID。
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
     * 删除单个公网Zone
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除单个公网Zone
     * @param {string} zoneId 待删除zone的ID
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
     * 在内网Zone上解关联VPC
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在内网Zone上解关联VPC
     * @param {string} zoneId 待解关联zone的ID。
     * @param {DisassociaterouterRequestBody} disassociaterouterRequestBody 在内网Zone上解关联VPC请求。
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
     * 查询内网Zone列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询内网Zone列表
     * @param {string} [type] 待查询的zone的类型。  取值范围：private。
     * @param {number} [limit] 每页返回的资源个数。  取值范围：0~500  取值一般为10，20，50。默认值为500。
     * @param {string} [marker] 分页查询起始的资源ID，为空时为查询第一页。  默认值为空。
     * @param {number} [offset] 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。  取值范围：0~2147483647  默认值为0。  当前设置marker不为空时，以marker为分页起始标识。
     * @param {string} [tags] 资源标签。
     * @param {string} [name] zone名称。
     * @param {string} [status] 资源状态。
     * @param {string} [searchMode] 查询条件搜索模式。  取值范围：  like：模糊搜索 equal：精确搜索 默认值为equal。
     * @param {string} [enterpriseProjectId] 域名关联的企业项目ID，长度不超过36个字符。  默认值为0。
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
     * 查询公网Zone列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网Zone列表
     * @param {string} [type] 待查询的zone的类型。  取值范围：public  搜索模式默认为模糊搜索。  默认值为空。
     * @param {number} [limit] 每页返回的资源个数。  取值范围：0~500  取值一般为10，20，50。默认值为500。
     * @param {string} [marker] 分页查询起始的资源ID，为空时为查询第一页。  默认值为空。
     * @param {number} [offset] 分页查询起始偏移量，表示从偏移量的下一个资源开始查询。  取值范围：0~2147483647  默认值为0。  当前设置marker不为空时，以marker为分页起始标识。
     * @param {string} [tags] 资源标签。  取值格式：key1,value1|key2,value2  多个标签之间用\&quot;|\&quot;分开，每个标签的键值用英文逗号\&quot;,\&quot;相隔。  多个标签之间为“与”的关系。  关于资源标签，请参见添加资源标签。  搜索模式为精确搜索。如果资源标签值value是以*开头时，则按照*后面的值全模糊匹配。  默认值为空。
     * @param {string} [name] zone名称。  搜索模式默认为模糊搜索。
     * @param {string} [status] 资源状态。
     * @param {string} [searchMode] 查询条件搜索模式。  取值范围：  like：模糊搜索 equal：精确搜索 默认值为equal。
     * @param {string} [enterpriseProjectId] 域名关联的企业项目ID，长度不超过36个字符。  默认值为0。
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
     * 查询单个内网Zone
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个内网Zone
     * @param {string} zoneId 待查询zone的ID。
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
     * 查询单个内网Zone的名称服务器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个内网Zone的名称服务器
     * @param {string} zoneId 待查询内网zone的ID。
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
     * 查询单个公网Zone
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个公网Zone
     * @param {string} zoneId 待查询zone的ID。
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
     * 查询单个公网Zone的名称服务器
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个公网Zone的名称服务器
     * @param {string} zoneId 待查询zone的ID。  可以通过查询公网Zone列表获取。
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
     * 修改单个内网Zone
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改单个内网Zone
     * @param {string} zoneId 待修改Zone的ID。
     * @param {UpdatePrivateZoneInfoReq} updatePrivateZoneInfoReq 修改内网Zone信息请求。
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
     * 修改单个公网Zone
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改单个公网Zone
     * @param {string} zoneId 待修改zone的ID
     * @param {UpdatePublicZoneInfo} updatePublicZoneInfo 修改单个公网Zone请求。
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
     * 设置单个公网Zone状态，支持暂停、启用Zone
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置单个公网Zone状态
     * @param {string} zoneId 待设置状态Zone的ID
     * @param {UpdatePublicZoneStatusRequestBody} updatePublicZoneStatusRequestBody 设置单个公网Zone状态请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePublicZoneStatus(updatePublicZoneStatusRequest?: UpdatePublicZoneStatusRequest): Promise<UpdatePublicZoneStatusResponse> {
        const options = ParamCreater().updatePublicZoneStatus(updatePublicZoneStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建单个自定义线路
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

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一个线路分组。
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
         * 删除单个自定义线路
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
         * 删除单个线路分组。
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
         * 查询所有的云解析服务API版本号列表
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
         * 查询自定义线路
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

            if (listCustomLineRequest !== null && listCustomLineRequest !== undefined) {
                if (listCustomLineRequest instanceof ListCustomLineRequest) {
                    lineId = listCustomLineRequest.lineId;
                    name = listCustomLineRequest.name;
                    limit = listCustomLineRequest.limit;
                    offset = listCustomLineRequest.offset;
                    showDetail = listCustomLineRequest.showDetail;
                } else {
                    lineId = listCustomLineRequest['line_id'];
                    name = listCustomLineRequest['name'];
                    limit = listCustomLineRequest['limit'];
                    offset = listCustomLineRequest['offset'];
                    showDetail = listCustomLineRequest['show_detail'];
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询线路分组列表。
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
         * 查询指定的云解析服务API版本号
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
         * 查询线路分组。
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
         * 更新单个自定义线路
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'line_id': lineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新单个线路分组。
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
         * 设置弹性IP的PTR记录
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
         * 查询租户弹性IP的PTR记录列表
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
         * 将弹性IP的PTR记录恢复为默认值
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
         * 查询单个弹性IP的PTR记录
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
         * 修改弹性IP的PTR记录
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
         * Record Set关联健康检查。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateHealthCheck(associateHealthCheckRequest?: AssociateHealthCheckRequest) {
            const options = {
                method: "POST",
                url: "/v2.1/recordsets/{recordset_id}/associatehealthcheck",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let recordsetId;

            if (associateHealthCheckRequest !== null && associateHealthCheckRequest !== undefined) {
                if (associateHealthCheckRequest instanceof AssociateHealthCheckRequest) {
                    recordsetId = associateHealthCheckRequest.recordsetId;
                    body = associateHealthCheckRequest.body
                } else {
                    recordsetId = associateHealthCheckRequest['recordset_id'];
                    body = associateHealthCheckRequest['body'];
                }
            }

        
            if (recordsetId === null || recordsetId === undefined) {
            throw new RequiredError('recordsetId','Required parameter recordsetId was null or undefined when calling associateHealthCheck.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'recordset_id': recordsetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除某个Zone下的Record Set资源，当删除的资源不存在时，则默认删除成功。
         * 响应结果中只包含本次实际删除的资源。
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
         * 批量修改RecordSet。属于原子性操作，请求Record Set将全部完成修改，或不做任何修改。
         * 仅公网Zone支持。
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
         * 创建单个Record Set
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
         * 批量线路创建RecordSet。属于原子性操作，如果存在一个参数校验不通过，则创建失败。仅公网Zone支持。
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
         * 创建单个Record Set，仅适用于公网DNS
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
         * 删除单个Record Set
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
         * 删除单个Record Set
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
         * Record Set解关联健康检查。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateHealthCheck(disassociateHealthCheckRequest?: DisassociateHealthCheckRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.1/recordsets/{recordset_id}/disassociatehealthcheck",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let recordsetId;

            if (disassociateHealthCheckRequest !== null && disassociateHealthCheckRequest !== undefined) {
                if (disassociateHealthCheckRequest instanceof DisassociateHealthCheckRequest) {
                    recordsetId = disassociateHealthCheckRequest.recordsetId;
                    body = disassociateHealthCheckRequest.body
                } else {
                    recordsetId = disassociateHealthCheckRequest['recordset_id'];
                    body = disassociateHealthCheckRequest['body'];
                }
            }

        
            if (recordsetId === null || recordsetId === undefined) {
            throw new RequiredError('recordsetId','Required parameter recordsetId was null or undefined when calling disassociateHealthCheck.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'recordset_id': recordsetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户Record Set资源列表
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
         * 查询单个Zone下Record Set列表
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
         * 查询租户Record Set资源列表
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
         * 设置Record Set状态
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
         * 查询单个Record Set。
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
         * 查询单个Zone下Record Set列表
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
         * 查询单个Record Set，仅适用于公网DNS
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
         * 修改单个Record Set
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
         * 修改单个Record Set
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
         * 在内网Zone上关联VPC
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
         * 创建单个内网Zone
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
         * 创建单个公网Zone
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
         * 删除单个内网Zone
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
         * 删除单个公网Zone
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
         * 在内网Zone上解关联VPC
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
         * 查询内网Zone列表
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
            
            let status;
            
            let searchMode;
            
            let enterpriseProjectId;

            if (listPrivateZonesRequest !== null && listPrivateZonesRequest !== undefined) {
                if (listPrivateZonesRequest instanceof ListPrivateZonesRequest) {
                    type = listPrivateZonesRequest.type;
                    limit = listPrivateZonesRequest.limit;
                    marker = listPrivateZonesRequest.marker;
                    offset = listPrivateZonesRequest.offset;
                    tags = listPrivateZonesRequest.tags;
                    name = listPrivateZonesRequest.name;
                    status = listPrivateZonesRequest.status;
                    searchMode = listPrivateZonesRequest.searchMode;
                    enterpriseProjectId = listPrivateZonesRequest.enterpriseProjectId;
                } else {
                    type = listPrivateZonesRequest['type'];
                    limit = listPrivateZonesRequest['limit'];
                    marker = listPrivateZonesRequest['marker'];
                    offset = listPrivateZonesRequest['offset'];
                    tags = listPrivateZonesRequest['tags'];
                    name = listPrivateZonesRequest['name'];
                    status = listPrivateZonesRequest['status'];
                    searchMode = listPrivateZonesRequest['search_mode'];
                    enterpriseProjectId = listPrivateZonesRequest['enterprise_project_id'];
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
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (searchMode !== null && searchMode !== undefined) {
                localVarQueryParameter['search_mode'] = searchMode;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询公网Zone列表
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
            
            let status;
            
            let searchMode;
            
            let enterpriseProjectId;

            if (listPublicZonesRequest !== null && listPublicZonesRequest !== undefined) {
                if (listPublicZonesRequest instanceof ListPublicZonesRequest) {
                    type = listPublicZonesRequest.type;
                    limit = listPublicZonesRequest.limit;
                    marker = listPublicZonesRequest.marker;
                    offset = listPublicZonesRequest.offset;
                    tags = listPublicZonesRequest.tags;
                    name = listPublicZonesRequest.name;
                    status = listPublicZonesRequest.status;
                    searchMode = listPublicZonesRequest.searchMode;
                    enterpriseProjectId = listPublicZonesRequest.enterpriseProjectId;
                } else {
                    type = listPublicZonesRequest['type'];
                    limit = listPublicZonesRequest['limit'];
                    marker = listPublicZonesRequest['marker'];
                    offset = listPublicZonesRequest['offset'];
                    tags = listPublicZonesRequest['tags'];
                    name = listPublicZonesRequest['name'];
                    status = listPublicZonesRequest['status'];
                    searchMode = listPublicZonesRequest['search_mode'];
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
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (searchMode !== null && searchMode !== undefined) {
                localVarQueryParameter['search_mode'] = searchMode;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个内网Zone
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
         * 查询单个内网Zone的名称服务器
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
         * 查询单个公网Zone
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
         * 查询单个公网Zone的名称服务器
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
         * 修改单个内网Zone
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
         * 修改单个公网Zone
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
         * 设置单个公网Zone状态，支持暂停、启用Zone
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