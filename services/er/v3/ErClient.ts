import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AcceptAttachmentRequest } from './model/AcceptAttachmentRequest';
import { AcceptAttachmentResponse } from './model/AcceptAttachmentResponse';
import { AssociateRouteTableRequest } from './model/AssociateRouteTableRequest';
import { AssociateRouteTableResponse } from './model/AssociateRouteTableResponse';
import { Association } from './model/Association';
import { AssociationRequestBody } from './model/AssociationRequestBody';
import { AssociationRoutePolicyRequestBody } from './model/AssociationRoutePolicyRequestBody';
import { AttachmentDetails } from './model/AttachmentDetails';
import { AttachmentResponse } from './model/AttachmentResponse';
import { AvailableZone } from './model/AvailableZone';
import { BatchCreateResourceTagsRequest } from './model/BatchCreateResourceTagsRequest';
import { BatchCreateResourceTagsResponse } from './model/BatchCreateResourceTagsResponse';
import { BatchOperateResourceTagsRequestBody } from './model/BatchOperateResourceTagsRequestBody';
import { ChangeAssociationRoutePolicyRequest } from './model/ChangeAssociationRoutePolicyRequest';
import { ChangeAssociationRoutePolicyResponse } from './model/ChangeAssociationRoutePolicyResponse';
import { ChangeAvailabilityZoneRequest } from './model/ChangeAvailabilityZoneRequest';
import { ChangeAvailabilityZoneResponse } from './model/ChangeAvailabilityZoneResponse';
import { CreateEnterpriseRouter } from './model/CreateEnterpriseRouter';
import { CreateEnterpriseRouterRequest } from './model/CreateEnterpriseRouterRequest';
import { CreateEnterpriseRouterRequestBody } from './model/CreateEnterpriseRouterRequestBody';
import { CreateEnterpriseRouterResponse } from './model/CreateEnterpriseRouterResponse';
import { CreateFlowLogRequest } from './model/CreateFlowLogRequest';
import { CreateFlowLogRequestBody } from './model/CreateFlowLogRequestBody';
import { CreateFlowLogResponse } from './model/CreateFlowLogResponse';
import { CreateResourceTagRequest } from './model/CreateResourceTagRequest';
import { CreateResourceTagRequestBody } from './model/CreateResourceTagRequestBody';
import { CreateResourceTagResponse } from './model/CreateResourceTagResponse';
import { CreateRoute } from './model/CreateRoute';
import { CreateRouteRequestBody } from './model/CreateRouteRequestBody';
import { CreateRouteTable } from './model/CreateRouteTable';
import { CreateRouteTableRequest } from './model/CreateRouteTableRequest';
import { CreateRouteTableRequestBody } from './model/CreateRouteTableRequestBody';
import { CreateRouteTableResponse } from './model/CreateRouteTableResponse';
import { CreateStaticRouteRequest } from './model/CreateStaticRouteRequest';
import { CreateStaticRouteResponse } from './model/CreateStaticRouteResponse';
import { CreateVpcAttachmentBody } from './model/CreateVpcAttachmentBody';
import { CreateVpcAttachmentRequest } from './model/CreateVpcAttachmentRequest';
import { CreateVpcAttachmentResponse } from './model/CreateVpcAttachmentResponse';
import { DeleteEnterpriseRouterRequest } from './model/DeleteEnterpriseRouterRequest';
import { DeleteEnterpriseRouterResponse } from './model/DeleteEnterpriseRouterResponse';
import { DeleteFlowLogRequest } from './model/DeleteFlowLogRequest';
import { DeleteFlowLogResponse } from './model/DeleteFlowLogResponse';
import { DeleteResourceTagRequest } from './model/DeleteResourceTagRequest';
import { DeleteResourceTagResponse } from './model/DeleteResourceTagResponse';
import { DeleteRouteTableRequest } from './model/DeleteRouteTableRequest';
import { DeleteRouteTableResponse } from './model/DeleteRouteTableResponse';
import { DeleteStaticRouteRequest } from './model/DeleteStaticRouteRequest';
import { DeleteStaticRouteResponse } from './model/DeleteStaticRouteResponse';
import { DeleteVpcAttachmentRequest } from './model/DeleteVpcAttachmentRequest';
import { DeleteVpcAttachmentResponse } from './model/DeleteVpcAttachmentResponse';
import { DisableFlowLogRequest } from './model/DisableFlowLogRequest';
import { DisableFlowLogResponse } from './model/DisableFlowLogResponse';
import { DisablePropagationRequest } from './model/DisablePropagationRequest';
import { DisablePropagationResponse } from './model/DisablePropagationResponse';
import { DisassociateRouteTableRequest } from './model/DisassociateRouteTableRequest';
import { DisassociateRouteTableResponse } from './model/DisassociateRouteTableResponse';
import { EffectiveRoute } from './model/EffectiveRoute';
import { EnableFlowLogRequest } from './model/EnableFlowLogRequest';
import { EnableFlowLogResponse } from './model/EnableFlowLogResponse';
import { EnablePropagationRequest } from './model/EnablePropagationRequest';
import { EnablePropagationResponse } from './model/EnablePropagationResponse';
import { EnterpriseRouter } from './model/EnterpriseRouter';
import { EnterpriseRouterAZ } from './model/EnterpriseRouterAZ';
import { ExportRoutePolicy } from './model/ExportRoutePolicy';
import { FlowLog } from './model/FlowLog';
import { FlowLogRequest } from './model/FlowLogRequest';
import { ImportRoutePolicy } from './model/ImportRoutePolicy';
import { ListAssociationsRequest } from './model/ListAssociationsRequest';
import { ListAssociationsResponse } from './model/ListAssociationsResponse';
import { ListAttachmentsRequest } from './model/ListAttachmentsRequest';
import { ListAttachmentsResponse } from './model/ListAttachmentsResponse';
import { ListAvailabilityZoneRequest } from './model/ListAvailabilityZoneRequest';
import { ListAvailabilityZoneResponse } from './model/ListAvailabilityZoneResponse';
import { ListEffectiveRoutesRequest } from './model/ListEffectiveRoutesRequest';
import { ListEffectiveRoutesResponse } from './model/ListEffectiveRoutesResponse';
import { ListEnterpriseRoutersRequest } from './model/ListEnterpriseRoutersRequest';
import { ListEnterpriseRoutersResponse } from './model/ListEnterpriseRoutersResponse';
import { ListFlowLogsRequest } from './model/ListFlowLogsRequest';
import { ListFlowLogsResponse } from './model/ListFlowLogsResponse';
import { ListProjectTagsRequest } from './model/ListProjectTagsRequest';
import { ListProjectTagsResponse } from './model/ListProjectTagsResponse';
import { ListPropagationsRequest } from './model/ListPropagationsRequest';
import { ListPropagationsResponse } from './model/ListPropagationsResponse';
import { ListRouteTablesRequest } from './model/ListRouteTablesRequest';
import { ListRouteTablesResponse } from './model/ListRouteTablesResponse';
import { ListStaticRoutesRequest } from './model/ListStaticRoutesRequest';
import { ListStaticRoutesResponse } from './model/ListStaticRoutesResponse';
import { ListVpcAttachmentsRequest } from './model/ListVpcAttachmentsRequest';
import { ListVpcAttachmentsResponse } from './model/ListVpcAttachmentsResponse';
import { PageInfo } from './model/PageInfo';
import { Propagation } from './model/Propagation';
import { PropagationRequestBody } from './model/PropagationRequestBody';
import { Quota } from './model/Quota';
import { RejectAttachmentRequest } from './model/RejectAttachmentRequest';
import { RejectAttachmentResponse } from './model/RejectAttachmentResponse';
import { Route } from './model/Route';
import { RouteAttachment } from './model/RouteAttachment';
import { RouteTable } from './model/RouteTable';
import { ShowAttachmentRequest } from './model/ShowAttachmentRequest';
import { ShowAttachmentResponse } from './model/ShowAttachmentResponse';
import { ShowEnterpriseRouterRequest } from './model/ShowEnterpriseRouterRequest';
import { ShowEnterpriseRouterResponse } from './model/ShowEnterpriseRouterResponse';
import { ShowFlowLogRequest } from './model/ShowFlowLogRequest';
import { ShowFlowLogResponse } from './model/ShowFlowLogResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { ShowResourceTagRequest } from './model/ShowResourceTagRequest';
import { ShowResourceTagResponse } from './model/ShowResourceTagResponse';
import { ShowRouteTableRequest } from './model/ShowRouteTableRequest';
import { ShowRouteTableResponse } from './model/ShowRouteTableResponse';
import { ShowStaticRouteRequest } from './model/ShowStaticRouteRequest';
import { ShowStaticRouteResponse } from './model/ShowStaticRouteResponse';
import { ShowVpcAttachmentRequest } from './model/ShowVpcAttachmentRequest';
import { ShowVpcAttachmentResponse } from './model/ShowVpcAttachmentResponse';
import { Tag } from './model/Tag';
import { Tags } from './model/Tags';
import { UpdateAttachmentBody } from './model/UpdateAttachmentBody';
import { UpdateAttachmentRequest } from './model/UpdateAttachmentRequest';
import { UpdateAttachmentRequestBody } from './model/UpdateAttachmentRequestBody';
import { UpdateAttachmentResponse } from './model/UpdateAttachmentResponse';
import { UpdateEnterpriseRouter } from './model/UpdateEnterpriseRouter';
import { UpdateEnterpriseRouterRequest } from './model/UpdateEnterpriseRouterRequest';
import { UpdateEnterpriseRouterRequestBody } from './model/UpdateEnterpriseRouterRequestBody';
import { UpdateEnterpriseRouterResponse } from './model/UpdateEnterpriseRouterResponse';
import { UpdateFlowLogRequest } from './model/UpdateFlowLogRequest';
import { UpdateFlowLogRequestBody } from './model/UpdateFlowLogRequestBody';
import { UpdateFlowLogResponse } from './model/UpdateFlowLogResponse';
import { UpdatePropagationRequestBody } from './model/UpdatePropagationRequestBody';
import { UpdatePropagationRoutePolicyRequest } from './model/UpdatePropagationRoutePolicyRequest';
import { UpdatePropagationRoutePolicyResponse } from './model/UpdatePropagationRoutePolicyResponse';
import { UpdateRoute } from './model/UpdateRoute';
import { UpdateRouteRequestBody } from './model/UpdateRouteRequestBody';
import { UpdateRouteTable } from './model/UpdateRouteTable';
import { UpdateRouteTableRequest } from './model/UpdateRouteTableRequest';
import { UpdateRouteTableRequestBody } from './model/UpdateRouteTableRequestBody';
import { UpdateRouteTableResponse } from './model/UpdateRouteTableResponse';
import { UpdateStaticRouteRequest } from './model/UpdateStaticRouteRequest';
import { UpdateStaticRouteResponse } from './model/UpdateStaticRouteResponse';
import { UpdateVpcAttachmentBody } from './model/UpdateVpcAttachmentBody';
import { UpdateVpcAttachmentRequest } from './model/UpdateVpcAttachmentRequest';
import { UpdateVpcAttachmentRequestBody } from './model/UpdateVpcAttachmentRequestBody';
import { UpdateVpcAttachmentResponse } from './model/UpdateVpcAttachmentResponse';
import { VpcAttachmentCreateRequest } from './model/VpcAttachmentCreateRequest';
import { VpcAttachmentDetails } from './model/VpcAttachmentDetails';

export class ErClient {
    public static newBuilder(): ClientBuilder<ErClient> {
            let client = new ClientBuilder<ErClient>(newClient);
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
     * 每个连接只能关联到一张路由表。通过创建关联将连接关联到路由表，从该连接收到的报文会用被关联的路由表进行路由。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建路由关联
     * @param {string} erId 企业路由器实例ID
     * @param {string} routeTableId 路由表ID
     * @param {AssociationRequestBody} associateRouteTableRequestBody Association object that needs to be created
     * @param {string} [xClientToken] 幂等性标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateRouteTable(associateRouteTableRequest?: AssociateRouteTableRequest): Promise<AssociateRouteTableResponse> {
        const options = ParamCreater().associateRouteTable(associateRouteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Client-Token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改关联的路由策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改关联的路由策略
     * @param {string} erId 企业路由器实例ID
     * @param {string} routeTableId 路由表ID
     * @param {string} associationId 关联ID
     * @param {AssociationRoutePolicyRequestBody} changeExportRoutePolicyRequestBody Association object that needs to be update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeAssociationRoutePolicy(changeAssociationRoutePolicyRequest?: ChangeAssociationRoutePolicyRequest): Promise<ChangeAssociationRoutePolicyResponse> {
        const options = ParamCreater().changeAssociationRoutePolicy(changeAssociationRoutePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解绑连接和路由表的关联关系。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除路由关联
     * @param {string} erId 企业路由器实例ID
     * @param {string} routeTableId 路由表ID
     * @param {AssociationRequestBody} disassociateRouteTableRequestBody Association object that needs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateRouteTable(disassociateRouteTableRequest?: DisassociateRouteTableRequest): Promise<DisassociateRouteTableResponse> {
        const options = ParamCreater().disassociateRouteTable(disassociateRouteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询路由关联列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询路由关联列表
     * @param {string} erId 企业路由器实例ID
     * @param {string} routeTableId 路由表ID
     * @param {number} [limit] 每页返回的个数。 取值范围：0~2000。
     * @param {string} [marker] 上一页最后一条记录的企业路由器实例的id，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [attachmentId] 连接ID
     * @param {Array<'vpc' | 'vpn' | 'dgw' | 'vgw' | 'peering' | 'can' | 'ecn' | 'gdgw' | 'connect' | 'cfw'>} [resourceType] - vpc：虚拟私有云 - vpn：vpn网关 - vgw：云专线的虚拟网关 - peering：对等连接，通过云连接CC加载不同区域的企业路由器来创建“对等连接（Peering）”连接
     * @param {Array<'pending' | 'available' | 'deleting' | 'deleted' | 'failed' | 'modifying'>} [state] 状态
     * @param {Array<string>} [sortKey] 按关键字排序，默认按照id排序，可选值:id|name|state
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序或降序排列，默认为asc,降序为desc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAssociations(listAssociationsRequest?: ListAssociationsRequest): Promise<ListAssociationsResponse> {
        const options = ParamCreater().listAssociations(listAssociationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 接受共享连接创建
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 接受共享连接创建
     * @param {string} erId 企业路由器实例ID
     * @param {string} attachmentId 连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public acceptAttachment(acceptAttachmentRequest?: AcceptAttachmentRequest): Promise<AcceptAttachmentResponse> {
        const options = ParamCreater().acceptAttachment(acceptAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业路由器实例下的连接列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询连接列表
     * @param {string} erId 企业路由器实例ID
     * @param {number} [limit] 每页返回的个数。 取值范围：0~2000。
     * @param {string} [marker] 上一页最后一条记录的企业路由器实例的id，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<'pending' | 'available' | 'modifying' | 'deleting' | 'deleted' | 'failed' | 'initiating_request' | 'rejected' | 'pending_acceptance'>} [state] 连接状态:pending|available|modifying|deleting|deleted|failed|pending_acceptance|rejected|initiating_request
     * @param {Array<'vpc' | 'vpn' | 'dgw' | 'vgw' | 'peering' | 'can' | 'ecn' | 'gdgw' | 'connect' | 'cfw'>} [resourceType] - vpc：虚拟私有云 - vpn：vpn网关 - vgw：云专线的虚拟网关 - peering：对等连接，通过云连接CC加载不同区域的企业路由器来创建“对等连接（Peering）”连接
     * @param {Array<string>} [resourceId] 连接对应的资源ID列表
     * @param {Array<string>} [sortKey] 按关键字排序，默认按照id排序，可选值:id|name|state
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序或降序排列，默认为asc,降序为desc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAttachments(listAttachmentsRequest?: ListAttachmentsRequest): Promise<ListAttachmentsResponse> {
        const options = ParamCreater().listAttachments(listAttachmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 拒绝共享连接创建
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 拒绝共享连接创建
     * @param {string} erId 企业路由器实例ID
     * @param {string} attachmentId 连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rejectAttachment(rejectAttachmentRequest?: RejectAttachmentRequest): Promise<RejectAttachmentResponse> {
        const options = ParamCreater().rejectAttachment(rejectAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询连接详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询连接详情
     * @param {string} erId 企业路由器实例ID
     * @param {string} attachmentId 连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAttachment(showAttachmentRequest?: ShowAttachmentRequest): Promise<ShowAttachmentResponse> {
        const options = ParamCreater().showAttachment(showAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改连接基本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新连接基本信息
     * @param {string} erId 企业路由器实例ID
     * @param {string} attachmentId 连接ID
     * @param {UpdateAttachmentRequestBody} updateAttachmentRequestBody 更新连接消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAttachment(updateAttachmentRequest?: UpdateAttachmentRequest): Promise<UpdateAttachmentResponse> {
        const options = ParamCreater().updateAttachment(updateAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询支持创建企业路由器实例的可用区列表，当可用区状态为available时，表示可以创建企业路由器实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用区列表
     * @param {string} [instanceId] 企业路由器ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailabilityZone(listAvailabilityZoneRequest?: ListAvailabilityZoneRequest): Promise<ListAvailabilityZoneResponse> {
        const options = ParamCreater().listAvailabilityZone(listAvailabilityZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新企业路由器的可用区信息，企业路由器实例状态为available的时候才能更新。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新企业路由器的可用区信息
     * @param {string} erId 企业路由器实例ID
     * @param {EnterpriseRouterAZ} enterpriseRouterAZ 更新企业路由器实例的az信息Request Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeAvailabilityZone(changeAvailabilityZoneRequest?: ChangeAvailabilityZoneRequest): Promise<ChangeAvailabilityZoneResponse> {
        const options = ParamCreater().changeAvailabilityZone(changeAvailabilityZoneRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建企业路由器实例，如果使能默认关联路由表或使能默认传递路由表，那么系统会默认创建一张路由表，作为默认关联路由表或默认传递路由表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建企业路由器
     * @param {CreateEnterpriseRouterRequestBody} createEnterpriseRouterRequestBody This is a auto create Body Object
     * @param {string} [xClientToken] 幂等性标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEnterpriseRouter(createEnterpriseRouterRequest?: CreateEnterpriseRouterRequest): Promise<CreateEnterpriseRouterResponse> {
        const options = ParamCreater().createEnterpriseRouter(createEnterpriseRouterRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Client-Token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除企业路由器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除企业路由器
     * @param {string} erId 企业路由器实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEnterpriseRouter(deleteEnterpriseRouterRequest?: DeleteEnterpriseRouterRequest): Promise<DeleteEnterpriseRouterResponse> {
        const options = ParamCreater().deleteEnterpriseRouter(deleteEnterpriseRouterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业路由器列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业路由器列表
     * @param {number} [limit] 每页返回的个数。 取值范围：0~2000。
     * @param {string} [marker] 上一页最后一条记录的企业路由器实例的id，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [enterpriseProjectId] 企业项目ID
     * @param {Array<'pending' | 'available' | 'modifying' | 'deleting' | 'deleted' | 'failed'>} [state] 企业路由器实例状态
     * @param {Array<string>} [id] 根据资源ID查询，可同时查询多个。
     * @param {Array<string>} [resourceId] 连接对应的资源ID列表
     * @param {boolean} [ownedBySelf] 过滤资源是否属于当前租户；取值为true时，只查属于当前租户的资源，不包括共享资源；为false时，查询当前租户及共享给该租户的资源；
     * @param {Array<string>} [sortKey] 按关键字排序，默认按照id排序，可选值:id|name|state
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序或降序排列，默认为asc,降序为desc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnterpriseRouters(listEnterpriseRoutersRequest?: ListEnterpriseRoutersRequest): Promise<ListEnterpriseRoutersResponse> {
        const options = ParamCreater().listEnterpriseRouters(listEnterpriseRoutersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业路由器详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业路由器详情
     * @param {string} erId 企业路由器实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEnterpriseRouter(showEnterpriseRouterRequest?: ShowEnterpriseRouterRequest): Promise<ShowEnterpriseRouterResponse> {
        const options = ParamCreater().showEnterpriseRouter(showEnterpriseRouterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新企业路由器基本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新企业路由器
     * @param {string} erId 企业路由器实例ID
     * @param {UpdateEnterpriseRouterRequestBody} updateEnterpriseRouterRequestBody 企业路由器更新信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEnterpriseRouter(updateEnterpriseRouterRequest?: UpdateEnterpriseRouterRequest): Promise<UpdateEnterpriseRouterResponse> {
        const options = ParamCreater().updateEnterpriseRouter(updateEnterpriseRouterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给ER实例创建流日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建流日志
     * @param {string} erId 企业路由器实例ID
     * @param {CreateFlowLogRequestBody} createFlowLogRequestBody 创建流日志的消息体
     * @param {string} [xClientToken] 幂等性标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFlowLog(createFlowLogRequest?: CreateFlowLogRequest): Promise<CreateFlowLogResponse> {
        const options = ParamCreater().createFlowLog(createFlowLogRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Client-Token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除流日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除流日志
     * @param {string} erId 企业路由器实例ID
     * @param {string} flowLogId 流日志ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFlowLog(deleteFlowLogRequest?: DeleteFlowLogRequest): Promise<DeleteFlowLogResponse> {
        const options = ParamCreater().deleteFlowLog(deleteFlowLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭流日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭流日志
     * @param {string} erId 企业路由器实例ID
     * @param {string} flowLogId 流日志ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableFlowLog(disableFlowLogRequest?: DisableFlowLogRequest): Promise<DisableFlowLogResponse> {
        const options = ParamCreater().disableFlowLog(disableFlowLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启流日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启流日志
     * @param {string} erId 企业路由器实例ID
     * @param {string} flowLogId 流日志ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableFlowLog(enableFlowLogRequest?: EnableFlowLogRequest): Promise<EnableFlowLogResponse> {
        const options = ParamCreater().enableFlowLog(enableFlowLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业路由器实例下的流日志列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流日志列表
     * @param {string} erId 企业路由器实例ID
     * @param {'attachment'} [resourceType] 采集的资源类型
     * @param {Array<string>} [resourceId] 连接对应的资源ID列表
     * @param {number} [limit] 每页返回的个数。 取值范围：0~2000。
     * @param {string} [marker] 上一页最后一条记录的企业路由器实例的id，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [sortKey] 按关键字排序，默认按照id排序，可选值:id|name|state
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序或降序排列，默认为asc,降序为desc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlowLogs(listFlowLogsRequest?: ListFlowLogsRequest): Promise<ListFlowLogsResponse> {
        const options = ParamCreater().listFlowLogs(listFlowLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流日志详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流日志详情
     * @param {string} erId 企业路由器实例ID
     * @param {string} flowLogId 流日志ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFlowLog(showFlowLogRequest?: ShowFlowLogRequest): Promise<ShowFlowLogResponse> {
        const options = ParamCreater().showFlowLog(showFlowLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新流日志基本信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新流日志基本信息
     * @param {string} erId 企业路由器实例ID
     * @param {string} flowLogId 流日志ID
     * @param {UpdateFlowLogRequestBody} updateFlowLogRequestBody 更新流日志信息消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFlowLog(updateFlowLogRequest?: UpdateFlowLogRequest): Promise<UpdateFlowLogResponse> {
        const options = ParamCreater().updateFlowLog(updateFlowLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解绑连接和路由表的传播关系。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除路由传播
     * @param {string} erId 企业路由器实例ID
     * @param {string} routeTableId 路由表ID
     * @param {PropagationRequestBody} disablePropagationsRequestBody Propagation object that needs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disablePropagation(disablePropagationRequest?: DisablePropagationRequest): Promise<DisablePropagationResponse> {
        const options = ParamCreater().disablePropagation(disablePropagationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 每个连接可以和多个路由表建立传播关系，从该连接学习到的路由会应用到具有传播关系的路由表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建路由传播
     * @param {string} erId 企业路由器实例ID
     * @param {string} routeTableId 路由表ID
     * @param {PropagationRequestBody} enablePropagationsRequestBody Propagation object that needs to be created
     * @param {string} [xClientToken] 幂等性标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enablePropagation(enablePropagationRequest?: EnablePropagationRequest): Promise<EnablePropagationResponse> {
        const options = ParamCreater().enablePropagation(enablePropagationRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Client-Token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询路由传播列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询路由传播列表
     * @param {string} erId 企业路由器实例ID
     * @param {string} routeTableId 路由表ID
     * @param {number} [limit] 每页返回的个数。 取值范围：0~2000。
     * @param {string} [marker] 上一页最后一条记录的企业路由器实例的id，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [attachmentId] 连接ID
     * @param {Array<'vpc' | 'vpn' | 'dgw' | 'vgw' | 'peering' | 'can' | 'ecn' | 'gdgw' | 'connect' | 'cfw'>} [resourceType] - vpc：虚拟私有云 - vpn：vpn网关 - vgw：云专线的虚拟网关 - peering：对等连接，通过云连接CC加载不同区域的企业路由器来创建“对等连接（Peering）”连接
     * @param {Array<'pending' | 'available' | 'modifying' | 'deleting' | 'deleted' | 'failed'>} [state] 企业路由器实例状态
     * @param {Array<string>} [sortKey] 按关键字排序，默认按照id排序，可选值:id|name|state
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序或降序排列，默认为asc,降序为desc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPropagations(listPropagationsRequest?: ListPropagationsRequest): Promise<ListPropagationsResponse> {
        const options = ParamCreater().listPropagations(listPropagationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改路由策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改路由策略
     * @param {string} erId 企业路由器实例ID
     * @param {string} routeTableId 路由表ID
     * @param {string} propagationId 传播ID
     * @param {UpdatePropagationRequestBody} updatePropagationRequestBody Propagation object that needs to be update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePropagationRoutePolicy(updatePropagationRoutePolicyRequest?: UpdatePropagationRoutePolicyRequest): Promise<UpdatePropagationRoutePolicyResponse> {
        const options = ParamCreater().updatePropagationRoutePolicy(updatePropagationRoutePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户各类资源的使用情况，如企业路由器的使用量，VPC连接的使用量等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {Array<string>} [type] 支持过滤的配额类型： - er_instance: 企业路由器实例的配额和使用量 - dc_attachment: 云专线网关连接的配额和使用量 - vpc_attachment: VPC连接的配额和使用量 - vpn_attachment: VPN网关连接的配额和使用量 - peering_attachment：云连接实例连接的配额和使用量 - can_attachment: 智能接入网关连接的配额和使用量 - route_table: 路由表的配额和使用量 - static_route: 静态路由的配额和使用量 - vpc_er: 每个vpc可以接入的企业路由器数量和当前使用量 - flow_log: 每个连接可以创建的流日志数量
     * @param {Array<string>} [erId] 企业路由器ID
     * @param {Array<string>} [routeTableId] 路由表ID
     * @param {Array<string>} [vpcId] VPC ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuotas(showQuotasRequest?: ShowQuotasRequest): Promise<ShowQuotasResponse> {
        const options = ParamCreater().showQuotas(showQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建静态路由
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建静态路由
     * @param {string} routeTableId 路由表ID
     * @param {CreateRouteRequestBody} createStaticRouteRequestBody This is a auto create Body Object
     * @param {string} [xClientToken] 幂等性标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStaticRoute(createStaticRouteRequest?: CreateStaticRouteRequest): Promise<CreateStaticRouteResponse> {
        const options = ParamCreater().createStaticRoute(createStaticRouteRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Client-Token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除静态路由
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除静态路由
     * @param {string} routeTableId 路由表ID
     * @param {string} routeId 路由ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStaticRoute(deleteStaticRouteRequest?: DeleteStaticRouteRequest): Promise<DeleteStaticRouteResponse> {
        const options = ParamCreater().deleteStaticRoute(deleteStaticRouteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询有效的路由列表，支持分页查询能力
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询有效路由列表
     * @param {string} routeTableId 路由表ID
     * @param {number} [limit] 每页返回的个数。 取值范围：0~2000。
     * @param {string} [marker] 上一页最后一条记录的企业路由器实例的id，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [destination] 路由目的地址
     * @param {Array<'vpc' | 'vpn' | 'dgw' | 'vgw' | 'peering' | 'can' | 'ecn' | 'gdgw' | 'connect' | 'cfw'>} [resourceType] - vpc：虚拟私有云 - vpn：vpn网关 - vgw：云专线的虚拟网关 - peering：对等连接，通过云连接CC加载不同区域的企业路由器来创建“对等连接（Peering）”连接
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEffectiveRoutes(listEffectiveRoutesRequest?: ListEffectiveRoutesRequest): Promise<ListEffectiveRoutesResponse> {
        const options = ParamCreater().listEffectiveRoutes(listEffectiveRoutesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询静态路由列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询静态路由列表
     * @param {string} routeTableId 路由表ID
     * @param {number} [limit] 每页返回的个数。 取值范围：0~2000。
     * @param {string} [marker] 上一页最后一条记录的企业路由器实例的id，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<string>} [destination] 路由目的地址
     * @param {Array<string>} [attachmentId] 连接ID
     * @param {Array<'vpc' | 'vpn' | 'dgw' | 'vgw' | 'peering' | 'can' | 'ecn' | 'gdgw' | 'connect' | 'cfw'>} [resourceType] - vpc：虚拟私有云 - vpn：vpn网关 - vgw：云专线的虚拟网关 - peering：对等连接，通过云连接CC加载不同区域的企业路由器来创建“对等连接（Peering）”连接
     * @param {Array<string>} [sortKey] 按关键字排序，默认按照id排序，可选值:id|name|state
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序或降序排列，默认为asc,降序为desc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStaticRoutes(listStaticRoutesRequest?: ListStaticRoutesRequest): Promise<ListStaticRoutesResponse> {
        const options = ParamCreater().listStaticRoutes(listStaticRoutesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询静态路由详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询静态路由详情
     * @param {string} routeTableId 路由表ID
     * @param {string} routeId 路由ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStaticRoute(showStaticRouteRequest?: ShowStaticRouteRequest): Promise<ShowStaticRouteResponse> {
        const options = ParamCreater().showStaticRoute(showStaticRouteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新静态路由
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新静态路由
     * @param {string} routeTableId 路由表ID
     * @param {string} routeId 路由ID
     * @param {UpdateRouteRequestBody} updateStaticRouteRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStaticRoute(updateStaticRouteRequest?: UpdateStaticRouteRequest): Promise<UpdateStaticRouteResponse> {
        const options = ParamCreater().updateStaticRoute(updateStaticRouteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 路由表是企业路由器收发报文的依据，包含了连接的关联关系，传播关系以及路由信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建路由表
     * @param {string} erId 企业路由器实例ID
     * @param {CreateRouteTableRequestBody} createRouteTableRequestBody This is a auto create Body Object
     * @param {string} [xClientToken] 幂等性标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRouteTable(createRouteTableRequest?: CreateRouteTableRequest): Promise<CreateRouteTableResponse> {
        const options = ParamCreater().createRouteTable(createRouteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Client-Token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除路由表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除路由表
     * @param {string} erId 企业路由器实例ID
     * @param {string} routeTableId 路由表ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRouteTable(deleteRouteTableRequest?: DeleteRouteTableRequest): Promise<DeleteRouteTableResponse> {
        const options = ParamCreater().deleteRouteTable(deleteRouteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询路由表列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询路由表列表
     * @param {string} erId 企业路由器实例ID
     * @param {number} [limit] 每页返回的个数。 取值范围：0~2000。
     * @param {string} [marker] 上一页最后一条记录的企业路由器实例的id，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<'pending' | 'available' | 'deleting' | 'deleted' | 'failed'>} [state] 状态
     * @param {boolean} [isDefaultPropagationTable] 是否为默认传播路由表
     * @param {boolean} [isDefaultAssociationTable] 是否为默认关联路由表
     * @param {Array<string>} [sortKey] 按关键字排序，默认按照id排序，可选值:id|name|state
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序或降序排列，默认为asc,降序为desc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRouteTables(listRouteTablesRequest?: ListRouteTablesRequest): Promise<ListRouteTablesResponse> {
        const options = ParamCreater().listRouteTables(listRouteTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询路由表详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询路由表详情
     * @param {string} erId 企业路由器实例ID
     * @param {string} routeTableId 路由表ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRouteTable(showRouteTableRequest?: ShowRouteTableRequest): Promise<ShowRouteTableResponse> {
        const options = ParamCreater().showRouteTable(showRouteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新路由表基本信息，如名称，描述等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新路由表信息
     * @param {string} erId 企业路由器实例ID
     * @param {string} routeTableId 路由表ID
     * @param {UpdateRouteTableRequestBody} [updateRouteTableRequestBody] 路由表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRouteTable(updateRouteTableRequest?: UpdateRouteTableRequest): Promise<UpdateRouteTableResponse> {
        const options = ParamCreater().updateRouteTable(updateRouteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 为指定实例批量添加或删除标签
     * - 标签管理服务需要使用该接口批量管理实例的标签。
     * - 一个资源上最多有10个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加删除资源标签
     * @param {string} resourceId 资源ID
     * @param {'instance' | 'route-table' | 'vpc-attachment' | 'dgw-attachment' | 'vgw-attachment' | 'peering-attachment' | 'vpn-attachment' | 'can-attachment' | 'ecn-attachment' | 'gdgw-attachment' | 'connect-attachment' | 'cfw-attachment' | 'attachments'} resourceType 标签资源类型: - instance: 企业路由器实例 - route-table: 路由表 - vpc-attachment: VPC连接 - vgw-attachment: 虚拟网关连接 - peering-attachment: 对等连接（Peering）连接 - vpn-attachment: VPN网关连接 - attachments: 所有连接类型
     * @param {BatchOperateResourceTagsRequestBody} batchCreateResourceTagsRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateResourceTags(batchCreateResourceTagsRequest?: BatchCreateResourceTagsRequest): Promise<BatchCreateResourceTagsResponse> {
        const options = ParamCreater().batchCreateResourceTags(batchCreateResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为特定类型的资源创建标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源标签
     * @param {string} resourceId 资源ID
     * @param {'instance' | 'route-table' | 'vpc-attachment' | 'dgw-attachment' | 'vgw-attachment' | 'peering-attachment' | 'vpn-attachment' | 'can-attachment' | 'ecn-attachment' | 'gdgw-attachment' | 'connect-attachment' | 'cfw-attachment' | 'attachments'} resourceType 标签资源类型: - instance: 企业路由器实例 - route-table: 路由表 - vpc-attachment: VPC连接 - vgw-attachment: 虚拟网关连接 - peering-attachment: 对等连接（Peering）连接 - vpn-attachment: VPN网关连接 - attachments: 所有连接类型
     * @param {CreateResourceTagRequestBody} createResourceTagRequestBody 创建资源标签请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createResourceTag(createResourceTagRequest?: CreateResourceTagRequest): Promise<CreateResourceTagResponse> {
        const options = ParamCreater().createResourceTag(createResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除特定类型资源的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源标签
     * @param {string} key 标签键
     * @param {string} resourceId 资源ID
     * @param {'instance' | 'route-table' | 'vpc-attachment' | 'dgw-attachment' | 'vgw-attachment' | 'peering-attachment' | 'vpn-attachment' | 'can-attachment' | 'ecn-attachment' | 'gdgw-attachment' | 'connect-attachment' | 'cfw-attachment' | 'attachments'} resourceType 标签资源类型: - instance: 企业路由器实例 - route-table: 路由表 - vpc-attachment: VPC连接 - vgw-attachment: 虚拟网关连接 - peering-attachment: 对等连接（Peering）连接 - vpn-attachment: VPN网关连接 - attachments: 所有连接类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResourceTag(deleteResourceTagRequest?: DeleteResourceTagRequest): Promise<DeleteResourceTagResponse> {
        const options = ParamCreater().deleteResourceTag(deleteResourceTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询特定类型资源的标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {'instance' | 'route-table' | 'vpc-attachment' | 'dgw-attachment' | 'vgw-attachment' | 'peering-attachment' | 'vpn-attachment' | 'can-attachment' | 'ecn-attachment' | 'gdgw-attachment' | 'connect-attachment' | 'cfw-attachment' | 'attachments'} resourceType 标签资源类型: - instance: 企业路由器实例 - route-table: 路由表 - vpc-attachment: VPC连接 - vgw-attachment: 虚拟网关连接 - peering-attachment: 对等连接（Peering）连接 - vpn-attachment: VPN网关连接 - attachments: 所有连接类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectTags(listProjectTagsRequest?: ListProjectTagsRequest): Promise<ListProjectTagsResponse> {
        const options = ParamCreater().listProjectTags(listProjectTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询特定类型资源的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源标签
     * @param {string} resourceId 资源ID
     * @param {'instance' | 'route-table' | 'vpc-attachment' | 'dgw-attachment' | 'vgw-attachment' | 'peering-attachment' | 'vpn-attachment' | 'can-attachment' | 'ecn-attachment' | 'gdgw-attachment' | 'connect-attachment' | 'cfw-attachment' | 'attachments'} resourceType 标签资源类型: - instance: 企业路由器实例 - route-table: 路由表 - vpc-attachment: VPC连接 - vgw-attachment: 虚拟网关连接 - peering-attachment: 对等连接（Peering）连接 - vpn-attachment: VPN网关连接 - attachments: 所有连接类型
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
     * 给ER实例创建VPC连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建VPC连接
     * @param {string} erId 企业路由器实例ID
     * @param {CreateVpcAttachmentBody} createVpcAttachmentBody 创建VPC连接消息体
     * @param {string} [xClientToken] 幂等性标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createVpcAttachment(createVpcAttachmentRequest?: CreateVpcAttachmentRequest): Promise<CreateVpcAttachmentResponse> {
        const options = ParamCreater().createVpcAttachment(createVpcAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Client-Token'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除VPC连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除VPC连接
     * @param {string} erId 企业路由器实例ID
     * @param {string} vpcAttachmentId VPC连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteVpcAttachment(deleteVpcAttachmentRequest?: DeleteVpcAttachmentRequest): Promise<DeleteVpcAttachmentResponse> {
        const options = ParamCreater().deleteVpcAttachment(deleteVpcAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业路由器实例下的VPC连接列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC连接列表
     * @param {string} erId 企业路由器实例ID
     * @param {number} [limit] 每页返回的个数。 取值范围：0~2000。
     * @param {string} [marker] 上一页最后一条记录的企业路由器实例的id，为空时为查询第一页。 使用说明：必须与limit一起使用。
     * @param {Array<'pending' | 'available' | 'modifying' | 'deleting' | 'deleted' | 'failed' | 'initiating_request' | 'rejected' | 'pending_acceptance'>} [state] 连接状态:pending|available|modifying|deleting|deleted|failed|pending_acceptance|rejected|initiating_request
     * @param {Array<string>} [id] 根据资源ID查询，可同时查询多个。
     * @param {Array<string>} [sortKey] 按关键字排序，默认按照id排序，可选值:id|name|state
     * @param {Array<'asc' | 'desc'>} [sortDir] 返回结果按照升序或降序排列，默认为asc,降序为desc
     * @param {Array<string>} [vpcId] VPC id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVpcAttachments(listVpcAttachmentsRequest?: ListVpcAttachmentsRequest): Promise<ListVpcAttachmentsResponse> {
        const options = ParamCreater().listVpcAttachments(listVpcAttachmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询VPC连接详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC连接详情
     * @param {string} erId 企业路由器实例ID
     * @param {string} vpcAttachmentId VPC连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVpcAttachment(showVpcAttachmentRequest?: ShowVpcAttachmentRequest): Promise<ShowVpcAttachmentResponse> {
        const options = ParamCreater().showVpcAttachment(showVpcAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改VPC连接基本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新VPC连接基本信息
     * @param {string} erId 企业路由器实例ID
     * @param {string} vpcAttachmentId VPC连接ID
     * @param {UpdateVpcAttachmentRequestBody} updateVpcAttachmentRequestBody 更新VPC连接消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateVpcAttachment(updateVpcAttachmentRequest?: UpdateVpcAttachmentRequest): Promise<UpdateVpcAttachmentResponse> {
        const options = ParamCreater().updateVpcAttachment(updateVpcAttachmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 每个连接只能关联到一张路由表。通过创建关联将连接关联到路由表，从该连接收到的报文会用被关联的路由表进行路由。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateRouteTable(associateRouteTableRequest?: AssociateRouteTableRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/{er_id}/route-tables/{route_table_id}/associate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;
            
            let routeTableId;
            
            let xClientToken;

            if (associateRouteTableRequest !== null && associateRouteTableRequest !== undefined) {
                if (associateRouteTableRequest instanceof AssociateRouteTableRequest) {
                    erId = associateRouteTableRequest.erId;
                    routeTableId = associateRouteTableRequest.routeTableId;
                    body = associateRouteTableRequest.body
                    xClientToken = associateRouteTableRequest.xClientToken;
                } else {
                    erId = associateRouteTableRequest['er_id'];
                    routeTableId = associateRouteTableRequest['route_table_id'];
                    body = associateRouteTableRequest['body'];
                    xClientToken = associateRouteTableRequest['X-Client-Token'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling associateRouteTable.');
            }
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling associateRouteTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId,'route_table_id': routeTableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改关联的路由策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeAssociationRoutePolicy(changeAssociationRoutePolicyRequest?: ChangeAssociationRoutePolicyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/{er_id}/route-tables/{route_table_id}/associations/{association_id}/change-route-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;
            
            let routeTableId;
            
            let associationId;

            if (changeAssociationRoutePolicyRequest !== null && changeAssociationRoutePolicyRequest !== undefined) {
                if (changeAssociationRoutePolicyRequest instanceof ChangeAssociationRoutePolicyRequest) {
                    erId = changeAssociationRoutePolicyRequest.erId;
                    routeTableId = changeAssociationRoutePolicyRequest.routeTableId;
                    associationId = changeAssociationRoutePolicyRequest.associationId;
                    body = changeAssociationRoutePolicyRequest.body
                } else {
                    erId = changeAssociationRoutePolicyRequest['er_id'];
                    routeTableId = changeAssociationRoutePolicyRequest['route_table_id'];
                    associationId = changeAssociationRoutePolicyRequest['association_id'];
                    body = changeAssociationRoutePolicyRequest['body'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling changeAssociationRoutePolicy.');
            }
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling changeAssociationRoutePolicy.');
            }
            if (associationId === null || associationId === undefined) {
            throw new RequiredError('associationId','Required parameter associationId was null or undefined when calling changeAssociationRoutePolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId,'route_table_id': routeTableId,'association_id': associationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解绑连接和路由表的关联关系。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateRouteTable(disassociateRouteTableRequest?: DisassociateRouteTableRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/{er_id}/route-tables/{route_table_id}/disassociate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;
            
            let routeTableId;

            if (disassociateRouteTableRequest !== null && disassociateRouteTableRequest !== undefined) {
                if (disassociateRouteTableRequest instanceof DisassociateRouteTableRequest) {
                    erId = disassociateRouteTableRequest.erId;
                    routeTableId = disassociateRouteTableRequest.routeTableId;
                    body = disassociateRouteTableRequest.body
                } else {
                    erId = disassociateRouteTableRequest['er_id'];
                    routeTableId = disassociateRouteTableRequest['route_table_id'];
                    body = disassociateRouteTableRequest['body'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling disassociateRouteTable.');
            }
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling disassociateRouteTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId,'route_table_id': routeTableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询路由关联列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAssociations(listAssociationsRequest?: ListAssociationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/{er_id}/route-tables/{route_table_id}/associations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let erId;
            
            let routeTableId;
            
            let limit;
            
            let marker;
            
            let attachmentId;
            
            let resourceType;
            
            let state;
            
            let sortKey;
            
            let sortDir;

            if (listAssociationsRequest !== null && listAssociationsRequest !== undefined) {
                if (listAssociationsRequest instanceof ListAssociationsRequest) {
                    erId = listAssociationsRequest.erId;
                    routeTableId = listAssociationsRequest.routeTableId;
                    limit = listAssociationsRequest.limit;
                    marker = listAssociationsRequest.marker;
                    attachmentId = listAssociationsRequest.attachmentId;
                    resourceType = listAssociationsRequest.resourceType;
                    state = listAssociationsRequest.state;
                    sortKey = listAssociationsRequest.sortKey;
                    sortDir = listAssociationsRequest.sortDir;
                } else {
                    erId = listAssociationsRequest['er_id'];
                    routeTableId = listAssociationsRequest['route_table_id'];
                    limit = listAssociationsRequest['limit'];
                    marker = listAssociationsRequest['marker'];
                    attachmentId = listAssociationsRequest['attachment_id'];
                    resourceType = listAssociationsRequest['resource_type'];
                    state = listAssociationsRequest['state'];
                    sortKey = listAssociationsRequest['sort_key'];
                    sortDir = listAssociationsRequest['sort_dir'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling listAssociations.');
            }
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling listAssociations.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (attachmentId !== null && attachmentId !== undefined) {
                localVarQueryParameter['attachment_id'] = attachmentId;
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'er_id': erId,'route_table_id': routeTableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 接受共享连接创建
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        acceptAttachment(acceptAttachmentRequest?: AcceptAttachmentRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/{er_id}/attachments/{attachment_id}/accept",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let erId;
            
            let attachmentId;

            if (acceptAttachmentRequest !== null && acceptAttachmentRequest !== undefined) {
                if (acceptAttachmentRequest instanceof AcceptAttachmentRequest) {
                    erId = acceptAttachmentRequest.erId;
                    attachmentId = acceptAttachmentRequest.attachmentId;
                } else {
                    erId = acceptAttachmentRequest['er_id'];
                    attachmentId = acceptAttachmentRequest['attachment_id'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling acceptAttachment.');
            }
            if (attachmentId === null || attachmentId === undefined) {
            throw new RequiredError('attachmentId','Required parameter attachmentId was null or undefined when calling acceptAttachment.');
            }

            options.pathParams = { 'er_id': erId,'attachment_id': attachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询企业路由器实例下的连接列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAttachments(listAttachmentsRequest?: ListAttachmentsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/{er_id}/attachments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let erId;
            
            let limit;
            
            let marker;
            
            let state;
            
            let resourceType;
            
            let resourceId;
            
            let sortKey;
            
            let sortDir;

            if (listAttachmentsRequest !== null && listAttachmentsRequest !== undefined) {
                if (listAttachmentsRequest instanceof ListAttachmentsRequest) {
                    erId = listAttachmentsRequest.erId;
                    limit = listAttachmentsRequest.limit;
                    marker = listAttachmentsRequest.marker;
                    state = listAttachmentsRequest.state;
                    resourceType = listAttachmentsRequest.resourceType;
                    resourceId = listAttachmentsRequest.resourceId;
                    sortKey = listAttachmentsRequest.sortKey;
                    sortDir = listAttachmentsRequest.sortDir;
                } else {
                    erId = listAttachmentsRequest['er_id'];
                    limit = listAttachmentsRequest['limit'];
                    marker = listAttachmentsRequest['marker'];
                    state = listAttachmentsRequest['state'];
                    resourceType = listAttachmentsRequest['resource_type'];
                    resourceId = listAttachmentsRequest['resource_id'];
                    sortKey = listAttachmentsRequest['sort_key'];
                    sortDir = listAttachmentsRequest['sort_dir'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling listAttachments.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'er_id': erId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 拒绝共享连接创建
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rejectAttachment(rejectAttachmentRequest?: RejectAttachmentRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/{er_id}/attachments/{attachment_id}/reject",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let erId;
            
            let attachmentId;

            if (rejectAttachmentRequest !== null && rejectAttachmentRequest !== undefined) {
                if (rejectAttachmentRequest instanceof RejectAttachmentRequest) {
                    erId = rejectAttachmentRequest.erId;
                    attachmentId = rejectAttachmentRequest.attachmentId;
                } else {
                    erId = rejectAttachmentRequest['er_id'];
                    attachmentId = rejectAttachmentRequest['attachment_id'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling rejectAttachment.');
            }
            if (attachmentId === null || attachmentId === undefined) {
            throw new RequiredError('attachmentId','Required parameter attachmentId was null or undefined when calling rejectAttachment.');
            }

            options.pathParams = { 'er_id': erId,'attachment_id': attachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询连接详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAttachment(showAttachmentRequest?: ShowAttachmentRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/{er_id}/attachments/{attachment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let erId;
            
            let attachmentId;

            if (showAttachmentRequest !== null && showAttachmentRequest !== undefined) {
                if (showAttachmentRequest instanceof ShowAttachmentRequest) {
                    erId = showAttachmentRequest.erId;
                    attachmentId = showAttachmentRequest.attachmentId;
                } else {
                    erId = showAttachmentRequest['er_id'];
                    attachmentId = showAttachmentRequest['attachment_id'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling showAttachment.');
            }
            if (attachmentId === null || attachmentId === undefined) {
            throw new RequiredError('attachmentId','Required parameter attachmentId was null or undefined when calling showAttachment.');
            }

            options.pathParams = { 'er_id': erId,'attachment_id': attachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改连接基本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAttachment(updateAttachmentRequest?: UpdateAttachmentRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/enterprise-router/{er_id}/attachments/{attachment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;
            
            let attachmentId;

            if (updateAttachmentRequest !== null && updateAttachmentRequest !== undefined) {
                if (updateAttachmentRequest instanceof UpdateAttachmentRequest) {
                    erId = updateAttachmentRequest.erId;
                    attachmentId = updateAttachmentRequest.attachmentId;
                    body = updateAttachmentRequest.body
                } else {
                    erId = updateAttachmentRequest['er_id'];
                    attachmentId = updateAttachmentRequest['attachment_id'];
                    body = updateAttachmentRequest['body'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling updateAttachment.');
            }
            if (attachmentId === null || attachmentId === undefined) {
            throw new RequiredError('attachmentId','Required parameter attachmentId was null or undefined when calling updateAttachment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId,'attachment_id': attachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询支持创建企业路由器实例的可用区列表，当可用区状态为available时，表示可以创建企业路由器实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailabilityZone(listAvailabilityZoneRequest?: ListAvailabilityZoneRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/availability-zones",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;

            if (listAvailabilityZoneRequest !== null && listAvailabilityZoneRequest !== undefined) {
                if (listAvailabilityZoneRequest instanceof ListAvailabilityZoneRequest) {
                    instanceId = listAvailabilityZoneRequest.instanceId;
                } else {
                    instanceId = listAvailabilityZoneRequest['instance_id'];
                }
            }

        
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新企业路由器的可用区信息，企业路由器实例状态为available的时候才能更新。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeAvailabilityZone(changeAvailabilityZoneRequest?: ChangeAvailabilityZoneRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/instances/{er_id}/change-availability-zone-ids",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;

            if (changeAvailabilityZoneRequest !== null && changeAvailabilityZoneRequest !== undefined) {
                if (changeAvailabilityZoneRequest instanceof ChangeAvailabilityZoneRequest) {
                    erId = changeAvailabilityZoneRequest.erId;
                    body = changeAvailabilityZoneRequest.body
                } else {
                    erId = changeAvailabilityZoneRequest['er_id'];
                    body = changeAvailabilityZoneRequest['body'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling changeAvailabilityZone.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建企业路由器实例，如果使能默认关联路由表或使能默认传递路由表，那么系统会默认创建一张路由表，作为默认关联路由表或默认传递路由表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEnterpriseRouter(createEnterpriseRouterRequest?: CreateEnterpriseRouterRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xClientToken;

            if (createEnterpriseRouterRequest !== null && createEnterpriseRouterRequest !== undefined) {
                if (createEnterpriseRouterRequest instanceof CreateEnterpriseRouterRequest) {
                    body = createEnterpriseRouterRequest.body
                    xClientToken = createEnterpriseRouterRequest.xClientToken;
                } else {
                    body = createEnterpriseRouterRequest['body'];
                    xClientToken = createEnterpriseRouterRequest['X-Client-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除企业路由器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEnterpriseRouter(deleteEnterpriseRouterRequest?: DeleteEnterpriseRouterRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/enterprise-router/instances/{er_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let erId;

            if (deleteEnterpriseRouterRequest !== null && deleteEnterpriseRouterRequest !== undefined) {
                if (deleteEnterpriseRouterRequest instanceof DeleteEnterpriseRouterRequest) {
                    erId = deleteEnterpriseRouterRequest.erId;
                } else {
                    erId = deleteEnterpriseRouterRequest['er_id'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling deleteEnterpriseRouter.');
            }

            options.pathParams = { 'er_id': erId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询企业路由器列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnterpriseRouters(listEnterpriseRoutersRequest?: ListEnterpriseRoutersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let enterpriseProjectId;
            
            let state;
            
            let id;
            
            let resourceId;
            
            let ownedBySelf;
            
            let sortKey;
            
            let sortDir;

            if (listEnterpriseRoutersRequest !== null && listEnterpriseRoutersRequest !== undefined) {
                if (listEnterpriseRoutersRequest instanceof ListEnterpriseRoutersRequest) {
                    limit = listEnterpriseRoutersRequest.limit;
                    marker = listEnterpriseRoutersRequest.marker;
                    enterpriseProjectId = listEnterpriseRoutersRequest.enterpriseProjectId;
                    state = listEnterpriseRoutersRequest.state;
                    id = listEnterpriseRoutersRequest.id;
                    resourceId = listEnterpriseRoutersRequest.resourceId;
                    ownedBySelf = listEnterpriseRoutersRequest.ownedBySelf;
                    sortKey = listEnterpriseRoutersRequest.sortKey;
                    sortDir = listEnterpriseRoutersRequest.sortDir;
                } else {
                    limit = listEnterpriseRoutersRequest['limit'];
                    marker = listEnterpriseRoutersRequest['marker'];
                    enterpriseProjectId = listEnterpriseRoutersRequest['enterprise_project_id'];
                    state = listEnterpriseRoutersRequest['state'];
                    id = listEnterpriseRoutersRequest['id'];
                    resourceId = listEnterpriseRoutersRequest['resource_id'];
                    ownedBySelf = listEnterpriseRoutersRequest['owned_by_self'];
                    sortKey = listEnterpriseRoutersRequest['sort_key'];
                    sortDir = listEnterpriseRoutersRequest['sort_dir'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (ownedBySelf !== null && ownedBySelf !== undefined) {
                localVarQueryParameter['owned_by_self'] = ownedBySelf;
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
         * 查询企业路由器详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEnterpriseRouter(showEnterpriseRouterRequest?: ShowEnterpriseRouterRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/instances/{er_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let erId;

            if (showEnterpriseRouterRequest !== null && showEnterpriseRouterRequest !== undefined) {
                if (showEnterpriseRouterRequest instanceof ShowEnterpriseRouterRequest) {
                    erId = showEnterpriseRouterRequest.erId;
                } else {
                    erId = showEnterpriseRouterRequest['er_id'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling showEnterpriseRouter.');
            }

            options.pathParams = { 'er_id': erId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新企业路由器基本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEnterpriseRouter(updateEnterpriseRouterRequest?: UpdateEnterpriseRouterRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/enterprise-router/instances/{er_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;

            if (updateEnterpriseRouterRequest !== null && updateEnterpriseRouterRequest !== undefined) {
                if (updateEnterpriseRouterRequest instanceof UpdateEnterpriseRouterRequest) {
                    erId = updateEnterpriseRouterRequest.erId;
                    body = updateEnterpriseRouterRequest.body
                } else {
                    erId = updateEnterpriseRouterRequest['er_id'];
                    body = updateEnterpriseRouterRequest['body'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling updateEnterpriseRouter.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 给ER实例创建流日志。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFlowLog(createFlowLogRequest?: CreateFlowLogRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/{er_id}/flow-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;
            
            let xClientToken;

            if (createFlowLogRequest !== null && createFlowLogRequest !== undefined) {
                if (createFlowLogRequest instanceof CreateFlowLogRequest) {
                    erId = createFlowLogRequest.erId;
                    body = createFlowLogRequest.body
                    xClientToken = createFlowLogRequest.xClientToken;
                } else {
                    erId = createFlowLogRequest['er_id'];
                    body = createFlowLogRequest['body'];
                    xClientToken = createFlowLogRequest['X-Client-Token'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling createFlowLog.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除流日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFlowLog(deleteFlowLogRequest?: DeleteFlowLogRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/enterprise-router/{er_id}/flow-logs/{flow_log_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let erId;
            
            let flowLogId;

            if (deleteFlowLogRequest !== null && deleteFlowLogRequest !== undefined) {
                if (deleteFlowLogRequest instanceof DeleteFlowLogRequest) {
                    erId = deleteFlowLogRequest.erId;
                    flowLogId = deleteFlowLogRequest.flowLogId;
                } else {
                    erId = deleteFlowLogRequest['er_id'];
                    flowLogId = deleteFlowLogRequest['flow_log_id'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling deleteFlowLog.');
            }
            if (flowLogId === null || flowLogId === undefined) {
            throw new RequiredError('flowLogId','Required parameter flowLogId was null or undefined when calling deleteFlowLog.');
            }

            options.pathParams = { 'er_id': erId,'flow_log_id': flowLogId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭流日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableFlowLog(disableFlowLogRequest?: DisableFlowLogRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/{er_id}/flow-logs/{flow_log_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let erId;
            
            let flowLogId;

            if (disableFlowLogRequest !== null && disableFlowLogRequest !== undefined) {
                if (disableFlowLogRequest instanceof DisableFlowLogRequest) {
                    erId = disableFlowLogRequest.erId;
                    flowLogId = disableFlowLogRequest.flowLogId;
                } else {
                    erId = disableFlowLogRequest['er_id'];
                    flowLogId = disableFlowLogRequest['flow_log_id'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling disableFlowLog.');
            }
            if (flowLogId === null || flowLogId === undefined) {
            throw new RequiredError('flowLogId','Required parameter flowLogId was null or undefined when calling disableFlowLog.');
            }

            options.pathParams = { 'er_id': erId,'flow_log_id': flowLogId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启流日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableFlowLog(enableFlowLogRequest?: EnableFlowLogRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/{er_id}/flow-logs/{flow_log_id}/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let erId;
            
            let flowLogId;

            if (enableFlowLogRequest !== null && enableFlowLogRequest !== undefined) {
                if (enableFlowLogRequest instanceof EnableFlowLogRequest) {
                    erId = enableFlowLogRequest.erId;
                    flowLogId = enableFlowLogRequest.flowLogId;
                } else {
                    erId = enableFlowLogRequest['er_id'];
                    flowLogId = enableFlowLogRequest['flow_log_id'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling enableFlowLog.');
            }
            if (flowLogId === null || flowLogId === undefined) {
            throw new RequiredError('flowLogId','Required parameter flowLogId was null or undefined when calling enableFlowLog.');
            }

            options.pathParams = { 'er_id': erId,'flow_log_id': flowLogId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询企业路由器实例下的流日志列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFlowLogs(listFlowLogsRequest?: ListFlowLogsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/{er_id}/flow-logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let erId;
            
            let resourceType;
            
            let resourceId;
            
            let limit;
            
            let marker;
            
            let sortKey;
            
            let sortDir;

            if (listFlowLogsRequest !== null && listFlowLogsRequest !== undefined) {
                if (listFlowLogsRequest instanceof ListFlowLogsRequest) {
                    erId = listFlowLogsRequest.erId;
                    resourceType = listFlowLogsRequest.resourceType;
                    resourceId = listFlowLogsRequest.resourceId;
                    limit = listFlowLogsRequest.limit;
                    marker = listFlowLogsRequest.marker;
                    sortKey = listFlowLogsRequest.sortKey;
                    sortDir = listFlowLogsRequest.sortDir;
                } else {
                    erId = listFlowLogsRequest['er_id'];
                    resourceType = listFlowLogsRequest['resource_type'];
                    resourceId = listFlowLogsRequest['resource_id'];
                    limit = listFlowLogsRequest['limit'];
                    marker = listFlowLogsRequest['marker'];
                    sortKey = listFlowLogsRequest['sort_key'];
                    sortDir = listFlowLogsRequest['sort_dir'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling listFlowLogs.');
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'er_id': erId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询流日志详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFlowLog(showFlowLogRequest?: ShowFlowLogRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/{er_id}/flow-logs/{flow_log_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let erId;
            
            let flowLogId;

            if (showFlowLogRequest !== null && showFlowLogRequest !== undefined) {
                if (showFlowLogRequest instanceof ShowFlowLogRequest) {
                    erId = showFlowLogRequest.erId;
                    flowLogId = showFlowLogRequest.flowLogId;
                } else {
                    erId = showFlowLogRequest['er_id'];
                    flowLogId = showFlowLogRequest['flow_log_id'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling showFlowLog.');
            }
            if (flowLogId === null || flowLogId === undefined) {
            throw new RequiredError('flowLogId','Required parameter flowLogId was null or undefined when calling showFlowLog.');
            }

            options.pathParams = { 'er_id': erId,'flow_log_id': flowLogId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新流日志基本信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFlowLog(updateFlowLogRequest?: UpdateFlowLogRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/enterprise-router/{er_id}/flow-logs/{flow_log_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;
            
            let flowLogId;

            if (updateFlowLogRequest !== null && updateFlowLogRequest !== undefined) {
                if (updateFlowLogRequest instanceof UpdateFlowLogRequest) {
                    erId = updateFlowLogRequest.erId;
                    flowLogId = updateFlowLogRequest.flowLogId;
                    body = updateFlowLogRequest.body
                } else {
                    erId = updateFlowLogRequest['er_id'];
                    flowLogId = updateFlowLogRequest['flow_log_id'];
                    body = updateFlowLogRequest['body'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling updateFlowLog.');
            }
            if (flowLogId === null || flowLogId === undefined) {
            throw new RequiredError('flowLogId','Required parameter flowLogId was null or undefined when calling updateFlowLog.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId,'flow_log_id': flowLogId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解绑连接和路由表的传播关系。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disablePropagation(disablePropagationRequest?: DisablePropagationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/{er_id}/route-tables/{route_table_id}/disable-propagations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;
            
            let routeTableId;

            if (disablePropagationRequest !== null && disablePropagationRequest !== undefined) {
                if (disablePropagationRequest instanceof DisablePropagationRequest) {
                    erId = disablePropagationRequest.erId;
                    routeTableId = disablePropagationRequest.routeTableId;
                    body = disablePropagationRequest.body
                } else {
                    erId = disablePropagationRequest['er_id'];
                    routeTableId = disablePropagationRequest['route_table_id'];
                    body = disablePropagationRequest['body'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling disablePropagation.');
            }
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling disablePropagation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId,'route_table_id': routeTableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 每个连接可以和多个路由表建立传播关系，从该连接学习到的路由会应用到具有传播关系的路由表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enablePropagation(enablePropagationRequest?: EnablePropagationRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/{er_id}/route-tables/{route_table_id}/enable-propagations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;
            
            let routeTableId;
            
            let xClientToken;

            if (enablePropagationRequest !== null && enablePropagationRequest !== undefined) {
                if (enablePropagationRequest instanceof EnablePropagationRequest) {
                    erId = enablePropagationRequest.erId;
                    routeTableId = enablePropagationRequest.routeTableId;
                    body = enablePropagationRequest.body
                    xClientToken = enablePropagationRequest.xClientToken;
                } else {
                    erId = enablePropagationRequest['er_id'];
                    routeTableId = enablePropagationRequest['route_table_id'];
                    body = enablePropagationRequest['body'];
                    xClientToken = enablePropagationRequest['X-Client-Token'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling enablePropagation.');
            }
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling enablePropagation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId,'route_table_id': routeTableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询路由传播列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPropagations(listPropagationsRequest?: ListPropagationsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/{er_id}/route-tables/{route_table_id}/propagations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let erId;
            
            let routeTableId;
            
            let limit;
            
            let marker;
            
            let attachmentId;
            
            let resourceType;
            
            let state;
            
            let sortKey;
            
            let sortDir;

            if (listPropagationsRequest !== null && listPropagationsRequest !== undefined) {
                if (listPropagationsRequest instanceof ListPropagationsRequest) {
                    erId = listPropagationsRequest.erId;
                    routeTableId = listPropagationsRequest.routeTableId;
                    limit = listPropagationsRequest.limit;
                    marker = listPropagationsRequest.marker;
                    attachmentId = listPropagationsRequest.attachmentId;
                    resourceType = listPropagationsRequest.resourceType;
                    state = listPropagationsRequest.state;
                    sortKey = listPropagationsRequest.sortKey;
                    sortDir = listPropagationsRequest.sortDir;
                } else {
                    erId = listPropagationsRequest['er_id'];
                    routeTableId = listPropagationsRequest['route_table_id'];
                    limit = listPropagationsRequest['limit'];
                    marker = listPropagationsRequest['marker'];
                    attachmentId = listPropagationsRequest['attachment_id'];
                    resourceType = listPropagationsRequest['resource_type'];
                    state = listPropagationsRequest['state'];
                    sortKey = listPropagationsRequest['sort_key'];
                    sortDir = listPropagationsRequest['sort_dir'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling listPropagations.');
            }
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling listPropagations.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (attachmentId !== null && attachmentId !== undefined) {
                localVarQueryParameter['attachment_id'] = attachmentId;
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'er_id': erId,'route_table_id': routeTableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改路由策略
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePropagationRoutePolicy(updatePropagationRoutePolicyRequest?: UpdatePropagationRoutePolicyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/{er_id}/route-tables/{route_table_id}/propagations/{propagation_id}/change-route-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;
            
            let routeTableId;
            
            let propagationId;

            if (updatePropagationRoutePolicyRequest !== null && updatePropagationRoutePolicyRequest !== undefined) {
                if (updatePropagationRoutePolicyRequest instanceof UpdatePropagationRoutePolicyRequest) {
                    erId = updatePropagationRoutePolicyRequest.erId;
                    routeTableId = updatePropagationRoutePolicyRequest.routeTableId;
                    propagationId = updatePropagationRoutePolicyRequest.propagationId;
                    body = updatePropagationRoutePolicyRequest.body
                } else {
                    erId = updatePropagationRoutePolicyRequest['er_id'];
                    routeTableId = updatePropagationRoutePolicyRequest['route_table_id'];
                    propagationId = updatePropagationRoutePolicyRequest['propagation_id'];
                    body = updatePropagationRoutePolicyRequest['body'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling updatePropagationRoutePolicy.');
            }
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling updatePropagationRoutePolicy.');
            }
            if (propagationId === null || propagationId === undefined) {
            throw new RequiredError('propagationId','Required parameter propagationId was null or undefined when calling updatePropagationRoutePolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId,'route_table_id': routeTableId,'propagation_id': propagationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户各类资源的使用情况，如企业路由器的使用量，VPC连接的使用量等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuotas(showQuotasRequest?: ShowQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;
            
            let erId;
            
            let routeTableId;
            
            let vpcId;

            if (showQuotasRequest !== null && showQuotasRequest !== undefined) {
                if (showQuotasRequest instanceof ShowQuotasRequest) {
                    type = showQuotasRequest.type;
                    erId = showQuotasRequest.erId;
                    routeTableId = showQuotasRequest.routeTableId;
                    vpcId = showQuotasRequest.vpcId;
                } else {
                    type = showQuotasRequest['type'];
                    erId = showQuotasRequest['erId'];
                    routeTableId = showQuotasRequest['routeTableId'];
                    vpcId = showQuotasRequest['vpcId'];
                }
            }

        
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (erId !== null && erId !== undefined) {
                localVarQueryParameter['erId'] = erId;
            }
            if (routeTableId !== null && routeTableId !== undefined) {
                localVarQueryParameter['routeTableId'] = routeTableId;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpcId'] = vpcId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建静态路由
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStaticRoute(createStaticRouteRequest?: CreateStaticRouteRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/route-tables/{route_table_id}/static-routes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let routeTableId;
            
            let xClientToken;

            if (createStaticRouteRequest !== null && createStaticRouteRequest !== undefined) {
                if (createStaticRouteRequest instanceof CreateStaticRouteRequest) {
                    routeTableId = createStaticRouteRequest.routeTableId;
                    body = createStaticRouteRequest.body
                    xClientToken = createStaticRouteRequest.xClientToken;
                } else {
                    routeTableId = createStaticRouteRequest['route_table_id'];
                    body = createStaticRouteRequest['body'];
                    xClientToken = createStaticRouteRequest['X-Client-Token'];
                }
            }

        
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling createStaticRoute.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'route_table_id': routeTableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除静态路由
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStaticRoute(deleteStaticRouteRequest?: DeleteStaticRouteRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/enterprise-router/route-tables/{route_table_id}/static-routes/{route_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let routeTableId;
            
            let routeId;

            if (deleteStaticRouteRequest !== null && deleteStaticRouteRequest !== undefined) {
                if (deleteStaticRouteRequest instanceof DeleteStaticRouteRequest) {
                    routeTableId = deleteStaticRouteRequest.routeTableId;
                    routeId = deleteStaticRouteRequest.routeId;
                } else {
                    routeTableId = deleteStaticRouteRequest['route_table_id'];
                    routeId = deleteStaticRouteRequest['route_id'];
                }
            }

        
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling deleteStaticRoute.');
            }
            if (routeId === null || routeId === undefined) {
            throw new RequiredError('routeId','Required parameter routeId was null or undefined when calling deleteStaticRoute.');
            }

            options.pathParams = { 'route_table_id': routeTableId,'route_id': routeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询有效的路由列表，支持分页查询能力
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEffectiveRoutes(listEffectiveRoutesRequest?: ListEffectiveRoutesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/route-tables/{route_table_id}/routes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let routeTableId;
            
            let limit;
            
            let marker;
            
            let destination;
            
            let resourceType;

            if (listEffectiveRoutesRequest !== null && listEffectiveRoutesRequest !== undefined) {
                if (listEffectiveRoutesRequest instanceof ListEffectiveRoutesRequest) {
                    routeTableId = listEffectiveRoutesRequest.routeTableId;
                    limit = listEffectiveRoutesRequest.limit;
                    marker = listEffectiveRoutesRequest.marker;
                    destination = listEffectiveRoutesRequest.destination;
                    resourceType = listEffectiveRoutesRequest.resourceType;
                } else {
                    routeTableId = listEffectiveRoutesRequest['route_table_id'];
                    limit = listEffectiveRoutesRequest['limit'];
                    marker = listEffectiveRoutesRequest['marker'];
                    destination = listEffectiveRoutesRequest['destination'];
                    resourceType = listEffectiveRoutesRequest['resource_type'];
                }
            }

        
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling listEffectiveRoutes.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (destination !== null && destination !== undefined) {
                localVarQueryParameter['destination'] = destination;
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'route_table_id': routeTableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询静态路由列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStaticRoutes(listStaticRoutesRequest?: ListStaticRoutesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/route-tables/{route_table_id}/static-routes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let routeTableId;
            
            let limit;
            
            let marker;
            
            let destination;
            
            let attachmentId;
            
            let resourceType;
            
            let sortKey;
            
            let sortDir;

            if (listStaticRoutesRequest !== null && listStaticRoutesRequest !== undefined) {
                if (listStaticRoutesRequest instanceof ListStaticRoutesRequest) {
                    routeTableId = listStaticRoutesRequest.routeTableId;
                    limit = listStaticRoutesRequest.limit;
                    marker = listStaticRoutesRequest.marker;
                    destination = listStaticRoutesRequest.destination;
                    attachmentId = listStaticRoutesRequest.attachmentId;
                    resourceType = listStaticRoutesRequest.resourceType;
                    sortKey = listStaticRoutesRequest.sortKey;
                    sortDir = listStaticRoutesRequest.sortDir;
                } else {
                    routeTableId = listStaticRoutesRequest['route_table_id'];
                    limit = listStaticRoutesRequest['limit'];
                    marker = listStaticRoutesRequest['marker'];
                    destination = listStaticRoutesRequest['destination'];
                    attachmentId = listStaticRoutesRequest['attachment_id'];
                    resourceType = listStaticRoutesRequest['resource_type'];
                    sortKey = listStaticRoutesRequest['sort_key'];
                    sortDir = listStaticRoutesRequest['sort_dir'];
                }
            }

        
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling listStaticRoutes.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (destination !== null && destination !== undefined) {
                localVarQueryParameter['destination'] = destination;
            }
            if (attachmentId !== null && attachmentId !== undefined) {
                localVarQueryParameter['attachment_id'] = attachmentId;
            }
            if (resourceType !== null && resourceType !== undefined) {
                localVarQueryParameter['resource_type'] = resourceType;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'route_table_id': routeTableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询静态路由详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStaticRoute(showStaticRouteRequest?: ShowStaticRouteRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/route-tables/{route_table_id}/static-routes/{route_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let routeTableId;
            
            let routeId;

            if (showStaticRouteRequest !== null && showStaticRouteRequest !== undefined) {
                if (showStaticRouteRequest instanceof ShowStaticRouteRequest) {
                    routeTableId = showStaticRouteRequest.routeTableId;
                    routeId = showStaticRouteRequest.routeId;
                } else {
                    routeTableId = showStaticRouteRequest['route_table_id'];
                    routeId = showStaticRouteRequest['route_id'];
                }
            }

        
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling showStaticRoute.');
            }
            if (routeId === null || routeId === undefined) {
            throw new RequiredError('routeId','Required parameter routeId was null or undefined when calling showStaticRoute.');
            }

            options.pathParams = { 'route_table_id': routeTableId,'route_id': routeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新静态路由
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStaticRoute(updateStaticRouteRequest?: UpdateStaticRouteRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/enterprise-router/route-tables/{route_table_id}/static-routes/{route_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let routeTableId;
            
            let routeId;

            if (updateStaticRouteRequest !== null && updateStaticRouteRequest !== undefined) {
                if (updateStaticRouteRequest instanceof UpdateStaticRouteRequest) {
                    routeTableId = updateStaticRouteRequest.routeTableId;
                    routeId = updateStaticRouteRequest.routeId;
                    body = updateStaticRouteRequest.body
                } else {
                    routeTableId = updateStaticRouteRequest['route_table_id'];
                    routeId = updateStaticRouteRequest['route_id'];
                    body = updateStaticRouteRequest['body'];
                }
            }

        
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling updateStaticRoute.');
            }
            if (routeId === null || routeId === undefined) {
            throw new RequiredError('routeId','Required parameter routeId was null or undefined when calling updateStaticRoute.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'route_table_id': routeTableId,'route_id': routeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 路由表是企业路由器收发报文的依据，包含了连接的关联关系，传播关系以及路由信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRouteTable(createRouteTableRequest?: CreateRouteTableRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/{er_id}/route-tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;
            
            let xClientToken;

            if (createRouteTableRequest !== null && createRouteTableRequest !== undefined) {
                if (createRouteTableRequest instanceof CreateRouteTableRequest) {
                    erId = createRouteTableRequest.erId;
                    body = createRouteTableRequest.body
                    xClientToken = createRouteTableRequest.xClientToken;
                } else {
                    erId = createRouteTableRequest['er_id'];
                    body = createRouteTableRequest['body'];
                    xClientToken = createRouteTableRequest['X-Client-Token'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling createRouteTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除路由表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRouteTable(deleteRouteTableRequest?: DeleteRouteTableRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/enterprise-router/{er_id}/route-tables/{route_table_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let erId;
            
            let routeTableId;

            if (deleteRouteTableRequest !== null && deleteRouteTableRequest !== undefined) {
                if (deleteRouteTableRequest instanceof DeleteRouteTableRequest) {
                    erId = deleteRouteTableRequest.erId;
                    routeTableId = deleteRouteTableRequest.routeTableId;
                } else {
                    erId = deleteRouteTableRequest['er_id'];
                    routeTableId = deleteRouteTableRequest['route_table_id'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling deleteRouteTable.');
            }
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling deleteRouteTable.');
            }

            options.pathParams = { 'er_id': erId,'route_table_id': routeTableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询路由表列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRouteTables(listRouteTablesRequest?: ListRouteTablesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/{er_id}/route-tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let erId;
            
            let limit;
            
            let marker;
            
            let state;
            
            let isDefaultPropagationTable;
            
            let isDefaultAssociationTable;
            
            let sortKey;
            
            let sortDir;

            if (listRouteTablesRequest !== null && listRouteTablesRequest !== undefined) {
                if (listRouteTablesRequest instanceof ListRouteTablesRequest) {
                    erId = listRouteTablesRequest.erId;
                    limit = listRouteTablesRequest.limit;
                    marker = listRouteTablesRequest.marker;
                    state = listRouteTablesRequest.state;
                    isDefaultPropagationTable = listRouteTablesRequest.isDefaultPropagationTable;
                    isDefaultAssociationTable = listRouteTablesRequest.isDefaultAssociationTable;
                    sortKey = listRouteTablesRequest.sortKey;
                    sortDir = listRouteTablesRequest.sortDir;
                } else {
                    erId = listRouteTablesRequest['er_id'];
                    limit = listRouteTablesRequest['limit'];
                    marker = listRouteTablesRequest['marker'];
                    state = listRouteTablesRequest['state'];
                    isDefaultPropagationTable = listRouteTablesRequest['is_default_propagation_table'];
                    isDefaultAssociationTable = listRouteTablesRequest['is_default_association_table'];
                    sortKey = listRouteTablesRequest['sort_key'];
                    sortDir = listRouteTablesRequest['sort_dir'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling listRouteTables.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (isDefaultPropagationTable !== null && isDefaultPropagationTable !== undefined) {
                localVarQueryParameter['is_default_propagation_table'] = isDefaultPropagationTable;
            }
            if (isDefaultAssociationTable !== null && isDefaultAssociationTable !== undefined) {
                localVarQueryParameter['is_default_association_table'] = isDefaultAssociationTable;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'er_id': erId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询路由表详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRouteTable(showRouteTableRequest?: ShowRouteTableRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/{er_id}/route-tables/{route_table_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let erId;
            
            let routeTableId;

            if (showRouteTableRequest !== null && showRouteTableRequest !== undefined) {
                if (showRouteTableRequest instanceof ShowRouteTableRequest) {
                    erId = showRouteTableRequest.erId;
                    routeTableId = showRouteTableRequest.routeTableId;
                } else {
                    erId = showRouteTableRequest['er_id'];
                    routeTableId = showRouteTableRequest['route_table_id'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling showRouteTable.');
            }
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling showRouteTable.');
            }

            options.pathParams = { 'er_id': erId,'route_table_id': routeTableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新路由表基本信息，如名称，描述等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRouteTable(updateRouteTableRequest?: UpdateRouteTableRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/enterprise-router/{er_id}/route-tables/{route_table_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;
            
            let routeTableId;

            if (updateRouteTableRequest !== null && updateRouteTableRequest !== undefined) {
                if (updateRouteTableRequest instanceof UpdateRouteTableRequest) {
                    erId = updateRouteTableRequest.erId;
                    routeTableId = updateRouteTableRequest.routeTableId;
                    body = updateRouteTableRequest.body
                } else {
                    erId = updateRouteTableRequest['er_id'];
                    routeTableId = updateRouteTableRequest['route_table_id'];
                    body = updateRouteTableRequest['body'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling updateRouteTable.');
            }
            if (routeTableId === null || routeTableId === undefined) {
            throw new RequiredError('routeTableId','Required parameter routeTableId was null or undefined when calling updateRouteTable.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId,'route_table_id': routeTableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 为指定实例批量添加或删除标签
         * - 标签管理服务需要使用该接口批量管理实例的标签。
         * - 一个资源上最多有10个标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateResourceTags(batchCreateResourceTagsRequest?: BatchCreateResourceTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/{resource_type}/{resource_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;
            
            let resourceType;

            if (batchCreateResourceTagsRequest !== null && batchCreateResourceTagsRequest !== undefined) {
                if (batchCreateResourceTagsRequest instanceof BatchCreateResourceTagsRequest) {
                    resourceId = batchCreateResourceTagsRequest.resourceId;
                    resourceType = batchCreateResourceTagsRequest.resourceType;
                    body = batchCreateResourceTagsRequest.body
                } else {
                    resourceId = batchCreateResourceTagsRequest['resource_id'];
                    resourceType = batchCreateResourceTagsRequest['resource_type'];
                    body = batchCreateResourceTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateResourceTags.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchCreateResourceTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为特定类型的资源创建标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createResourceTag(createResourceTagRequest?: CreateResourceTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;
            
            let resourceType;

            if (createResourceTagRequest !== null && createResourceTagRequest !== undefined) {
                if (createResourceTagRequest instanceof CreateResourceTagRequest) {
                    resourceId = createResourceTagRequest.resourceId;
                    resourceType = createResourceTagRequest.resourceType;
                    body = createResourceTagRequest.body
                } else {
                    resourceId = createResourceTagRequest['resource_id'];
                    resourceType = createResourceTagRequest['resource_type'];
                    body = createResourceTagRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createResourceTag.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createResourceTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除特定类型资源的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResourceTag(deleteResourceTagRequest?: DeleteResourceTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/{resource_type}/{resource_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let key;
            
            let resourceId;
            
            let resourceType;

            if (deleteResourceTagRequest !== null && deleteResourceTagRequest !== undefined) {
                if (deleteResourceTagRequest instanceof DeleteResourceTagRequest) {
                    key = deleteResourceTagRequest.key;
                    resourceId = deleteResourceTagRequest.resourceId;
                    resourceType = deleteResourceTagRequest.resourceType;
                } else {
                    key = deleteResourceTagRequest['key'];
                    resourceId = deleteResourceTagRequest['resource_id'];
                    resourceType = deleteResourceTagRequest['resource_type'];
                }
            }

        
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteResourceTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteResourceTag.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteResourceTag.');
            }

            options.pathParams = { 'key': key,'resource_id': resourceId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询特定类型资源的标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectTags(listProjectTagsRequest?: ListProjectTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;

            if (listProjectTagsRequest !== null && listProjectTagsRequest !== undefined) {
                if (listProjectTagsRequest instanceof ListProjectTagsRequest) {
                    resourceType = listProjectTagsRequest.resourceType;
                } else {
                    resourceType = listProjectTagsRequest['resource_type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listProjectTags.');
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询特定类型资源的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceTag(showResourceTagRequest?: ShowResourceTagRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;
            
            let resourceType;

            if (showResourceTagRequest !== null && showResourceTagRequest !== undefined) {
                if (showResourceTagRequest instanceof ShowResourceTagRequest) {
                    resourceId = showResourceTagRequest.resourceId;
                    resourceType = showResourceTagRequest.resourceType;
                } else {
                    resourceId = showResourceTagRequest['resource_id'];
                    resourceType = showResourceTagRequest['resource_type'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showResourceTag.');
            }
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showResourceTag.');
            }

            options.pathParams = { 'resource_id': resourceId,'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 给ER实例创建VPC连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createVpcAttachment(createVpcAttachmentRequest?: CreateVpcAttachmentRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/enterprise-router/{er_id}/vpc-attachments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;
            
            let xClientToken;

            if (createVpcAttachmentRequest !== null && createVpcAttachmentRequest !== undefined) {
                if (createVpcAttachmentRequest instanceof CreateVpcAttachmentRequest) {
                    erId = createVpcAttachmentRequest.erId;
                    body = createVpcAttachmentRequest.body
                    xClientToken = createVpcAttachmentRequest.xClientToken;
                } else {
                    erId = createVpcAttachmentRequest['er_id'];
                    body = createVpcAttachmentRequest['body'];
                    xClientToken = createVpcAttachmentRequest['X-Client-Token'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling createVpcAttachment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xClientToken !== undefined && xClientToken !== null) {
                localVarHeaderParameter['X-Client-Token'] = String(xClientToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除VPC连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteVpcAttachment(deleteVpcAttachmentRequest?: DeleteVpcAttachmentRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/enterprise-router/{er_id}/vpc-attachments/{vpc_attachment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let erId;
            
            let vpcAttachmentId;

            if (deleteVpcAttachmentRequest !== null && deleteVpcAttachmentRequest !== undefined) {
                if (deleteVpcAttachmentRequest instanceof DeleteVpcAttachmentRequest) {
                    erId = deleteVpcAttachmentRequest.erId;
                    vpcAttachmentId = deleteVpcAttachmentRequest.vpcAttachmentId;
                } else {
                    erId = deleteVpcAttachmentRequest['er_id'];
                    vpcAttachmentId = deleteVpcAttachmentRequest['vpc_attachment_id'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling deleteVpcAttachment.');
            }
            if (vpcAttachmentId === null || vpcAttachmentId === undefined) {
            throw new RequiredError('vpcAttachmentId','Required parameter vpcAttachmentId was null or undefined when calling deleteVpcAttachment.');
            }

            options.pathParams = { 'er_id': erId,'vpc_attachment_id': vpcAttachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询企业路由器实例下的VPC连接列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVpcAttachments(listVpcAttachmentsRequest?: ListVpcAttachmentsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/{er_id}/vpc-attachments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let erId;
            
            let limit;
            
            let marker;
            
            let state;
            
            let id;
            
            let sortKey;
            
            let sortDir;
            
            let vpcId;

            if (listVpcAttachmentsRequest !== null && listVpcAttachmentsRequest !== undefined) {
                if (listVpcAttachmentsRequest instanceof ListVpcAttachmentsRequest) {
                    erId = listVpcAttachmentsRequest.erId;
                    limit = listVpcAttachmentsRequest.limit;
                    marker = listVpcAttachmentsRequest.marker;
                    state = listVpcAttachmentsRequest.state;
                    id = listVpcAttachmentsRequest.id;
                    sortKey = listVpcAttachmentsRequest.sortKey;
                    sortDir = listVpcAttachmentsRequest.sortDir;
                    vpcId = listVpcAttachmentsRequest.vpcId;
                } else {
                    erId = listVpcAttachmentsRequest['er_id'];
                    limit = listVpcAttachmentsRequest['limit'];
                    marker = listVpcAttachmentsRequest['marker'];
                    state = listVpcAttachmentsRequest['state'];
                    id = listVpcAttachmentsRequest['id'];
                    sortKey = listVpcAttachmentsRequest['sort_key'];
                    sortDir = listVpcAttachmentsRequest['sort_dir'];
                    vpcId = listVpcAttachmentsRequest['vpc_id'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling listVpcAttachments.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
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
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'er_id': erId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询VPC连接详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVpcAttachment(showVpcAttachmentRequest?: ShowVpcAttachmentRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/enterprise-router/{er_id}/vpc-attachments/{vpc_attachment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let erId;
            
            let vpcAttachmentId;

            if (showVpcAttachmentRequest !== null && showVpcAttachmentRequest !== undefined) {
                if (showVpcAttachmentRequest instanceof ShowVpcAttachmentRequest) {
                    erId = showVpcAttachmentRequest.erId;
                    vpcAttachmentId = showVpcAttachmentRequest.vpcAttachmentId;
                } else {
                    erId = showVpcAttachmentRequest['er_id'];
                    vpcAttachmentId = showVpcAttachmentRequest['vpc_attachment_id'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling showVpcAttachment.');
            }
            if (vpcAttachmentId === null || vpcAttachmentId === undefined) {
            throw new RequiredError('vpcAttachmentId','Required parameter vpcAttachmentId was null or undefined when calling showVpcAttachment.');
            }

            options.pathParams = { 'er_id': erId,'vpc_attachment_id': vpcAttachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改VPC连接基本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateVpcAttachment(updateVpcAttachmentRequest?: UpdateVpcAttachmentRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/enterprise-router/{er_id}/vpc-attachments/{vpc_attachment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let erId;
            
            let vpcAttachmentId;

            if (updateVpcAttachmentRequest !== null && updateVpcAttachmentRequest !== undefined) {
                if (updateVpcAttachmentRequest instanceof UpdateVpcAttachmentRequest) {
                    erId = updateVpcAttachmentRequest.erId;
                    vpcAttachmentId = updateVpcAttachmentRequest.vpcAttachmentId;
                    body = updateVpcAttachmentRequest.body
                } else {
                    erId = updateVpcAttachmentRequest['er_id'];
                    vpcAttachmentId = updateVpcAttachmentRequest['vpc_attachment_id'];
                    body = updateVpcAttachmentRequest['body'];
                }
            }

        
            if (erId === null || erId === undefined) {
            throw new RequiredError('erId','Required parameter erId was null or undefined when calling updateVpcAttachment.');
            }
            if (vpcAttachmentId === null || vpcAttachmentId === undefined) {
            throw new RequiredError('vpcAttachmentId','Required parameter vpcAttachmentId was null or undefined when calling updateVpcAttachment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'er_id': erId,'vpc_attachment_id': vpcAttachmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): ErClient {
    return new ErClient(client);
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