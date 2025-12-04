import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AssociatedTransitIp } from './model/AssociatedTransitIp';
import { BatchCreateDeleteNatGatewayTagRequest } from './model/BatchCreateDeleteNatGatewayTagRequest';
import { BatchCreateDeleteNatGatewayTagResponse } from './model/BatchCreateDeleteNatGatewayTagResponse';
import { BatchCreateDeleteNatTagsRequestBody } from './model/BatchCreateDeleteNatTagsRequestBody';
import { BatchCreateDeletePrivateNatTagsRequest } from './model/BatchCreateDeletePrivateNatTagsRequest';
import { BatchCreateDeletePrivateNatTagsResponse } from './model/BatchCreateDeletePrivateNatTagsResponse';
import { BatchCreateDeleteTransitIpTagsRequest } from './model/BatchCreateDeleteTransitIpTagsRequest';
import { BatchCreateDeleteTransitIpTagsResponse } from './model/BatchCreateDeleteTransitIpTagsResponse';
import { BatchCreateDeleteTransitSubnetTagsRequest } from './model/BatchCreateDeleteTransitSubnetTagsRequest';
import { BatchCreateDeleteTransitSubnetTagsResponse } from './model/BatchCreateDeleteTransitSubnetTagsResponse';
import { BatchCreateNatGatewayDnatRulesRequest } from './model/BatchCreateNatGatewayDnatRulesRequest';
import { BatchCreateNatGatewayDnatRulesRequestBody } from './model/BatchCreateNatGatewayDnatRulesRequestBody';
import { BatchCreateNatGatewayDnatRulesResponse } from './model/BatchCreateNatGatewayDnatRulesResponse';
import { BatchOperateResourceTagsRequestBody } from './model/BatchOperateResourceTagsRequestBody';
import { CreatTransitIpOption } from './model/CreatTransitIpOption';
import { CreateNatGatewayDnatOption } from './model/CreateNatGatewayDnatOption';
import { CreateNatGatewayDnatRuleOption } from './model/CreateNatGatewayDnatRuleOption';
import { CreateNatGatewayDnatRuleRequest } from './model/CreateNatGatewayDnatRuleRequest';
import { CreateNatGatewayDnatRuleResponse } from './model/CreateNatGatewayDnatRuleResponse';
import { CreateNatGatewayOption } from './model/CreateNatGatewayOption';
import { CreateNatGatewayRequest } from './model/CreateNatGatewayRequest';
import { CreateNatGatewayRequestBody } from './model/CreateNatGatewayRequestBody';
import { CreateNatGatewayResponse } from './model/CreateNatGatewayResponse';
import { CreateNatGatewaySnatRuleOption } from './model/CreateNatGatewaySnatRuleOption';
import { CreateNatGatewaySnatRuleRequest } from './model/CreateNatGatewaySnatRuleRequest';
import { CreateNatGatewaySnatRuleRequestOption } from './model/CreateNatGatewaySnatRuleRequestOption';
import { CreateNatGatewaySnatRuleResponse } from './model/CreateNatGatewaySnatRuleResponse';
import { CreateNatGatewaySnatRuleResponseBody } from './model/CreateNatGatewaySnatRuleResponseBody';
import { CreateNatGatewayTagRequest } from './model/CreateNatGatewayTagRequest';
import { CreateNatGatewayTagResponse } from './model/CreateNatGatewayTagResponse';
import { CreateNatTagRequestBody } from './model/CreateNatTagRequestBody';
import { CreatePrivateDnatOption } from './model/CreatePrivateDnatOption';
import { CreatePrivateDnatOptionBody } from './model/CreatePrivateDnatOptionBody';
import { CreatePrivateDnatRequest } from './model/CreatePrivateDnatRequest';
import { CreatePrivateDnatResponse } from './model/CreatePrivateDnatResponse';
import { CreatePrivateNatOption } from './model/CreatePrivateNatOption';
import { CreatePrivateNatRequest } from './model/CreatePrivateNatRequest';
import { CreatePrivateNatRequestBody } from './model/CreatePrivateNatRequestBody';
import { CreatePrivateNatResponse } from './model/CreatePrivateNatResponse';
import { CreatePrivateNatTagRequest } from './model/CreatePrivateNatTagRequest';
import { CreatePrivateNatTagResponse } from './model/CreatePrivateNatTagResponse';
import { CreatePrivateSnatOption } from './model/CreatePrivateSnatOption';
import { CreatePrivateSnatOptionBody } from './model/CreatePrivateSnatOptionBody';
import { CreatePrivateSnatRequest } from './model/CreatePrivateSnatRequest';
import { CreatePrivateSnatResponse } from './model/CreatePrivateSnatResponse';
import { CreateResourceTagRequestBody } from './model/CreateResourceTagRequestBody';
import { CreateTransitIpRequest } from './model/CreateTransitIpRequest';
import { CreateTransitIpRequestBody } from './model/CreateTransitIpRequestBody';
import { CreateTransitIpResponse } from './model/CreateTransitIpResponse';
import { CreateTransitIpTagRequest } from './model/CreateTransitIpTagRequest';
import { CreateTransitIpTagResponse } from './model/CreateTransitIpTagResponse';
import { CreateTransitSubnetOption } from './model/CreateTransitSubnetOption';
import { CreateTransitSubnetRequest } from './model/CreateTransitSubnetRequest';
import { CreateTransitSubnetRequestBody } from './model/CreateTransitSubnetRequestBody';
import { CreateTransitSubnetResponse } from './model/CreateTransitSubnetResponse';
import { CreateTransitSubnetTagRequest } from './model/CreateTransitSubnetTagRequest';
import { CreateTransitSubnetTagResponse } from './model/CreateTransitSubnetTagResponse';
import { DeleteNatGatewayDnatRuleRequest } from './model/DeleteNatGatewayDnatRuleRequest';
import { DeleteNatGatewayDnatRuleResponse } from './model/DeleteNatGatewayDnatRuleResponse';
import { DeleteNatGatewayRequest } from './model/DeleteNatGatewayRequest';
import { DeleteNatGatewayResponse } from './model/DeleteNatGatewayResponse';
import { DeleteNatGatewaySnatRuleRequest } from './model/DeleteNatGatewaySnatRuleRequest';
import { DeleteNatGatewaySnatRuleResponse } from './model/DeleteNatGatewaySnatRuleResponse';
import { DeleteNatGatewayTagRequest } from './model/DeleteNatGatewayTagRequest';
import { DeleteNatGatewayTagResponse } from './model/DeleteNatGatewayTagResponse';
import { DeletePrivateDnatRequest } from './model/DeletePrivateDnatRequest';
import { DeletePrivateDnatResponse } from './model/DeletePrivateDnatResponse';
import { DeletePrivateNatRequest } from './model/DeletePrivateNatRequest';
import { DeletePrivateNatResponse } from './model/DeletePrivateNatResponse';
import { DeletePrivateNatTagRequest } from './model/DeletePrivateNatTagRequest';
import { DeletePrivateNatTagResponse } from './model/DeletePrivateNatTagResponse';
import { DeletePrivateSnatRequest } from './model/DeletePrivateSnatRequest';
import { DeletePrivateSnatResponse } from './model/DeletePrivateSnatResponse';
import { DeleteTransitIpRequest } from './model/DeleteTransitIpRequest';
import { DeleteTransitIpResponse } from './model/DeleteTransitIpResponse';
import { DeleteTransitIpTagRequest } from './model/DeleteTransitIpTagRequest';
import { DeleteTransitIpTagResponse } from './model/DeleteTransitIpTagResponse';
import { DeleteTransitSubnetRequest } from './model/DeleteTransitSubnetRequest';
import { DeleteTransitSubnetResponse } from './model/DeleteTransitSubnetResponse';
import { DeleteTransitSubnetTagRequest } from './model/DeleteTransitSubnetTagRequest';
import { DeleteTransitSubnetTagResponse } from './model/DeleteTransitSubnetTagResponse';
import { DownlinkVpc } from './model/DownlinkVpc';
import { DownlinkVpcOption } from './model/DownlinkVpcOption';
import { ListNatGatewayByTagRequest } from './model/ListNatGatewayByTagRequest';
import { ListNatGatewayByTagResponse } from './model/ListNatGatewayByTagResponse';
import { ListNatGatewayDnatRulesRequest } from './model/ListNatGatewayDnatRulesRequest';
import { ListNatGatewayDnatRulesResponse } from './model/ListNatGatewayDnatRulesResponse';
import { ListNatGatewaySnatRulesRequest } from './model/ListNatGatewaySnatRulesRequest';
import { ListNatGatewaySnatRulesResponse } from './model/ListNatGatewaySnatRulesResponse';
import { ListNatGatewaySpecsRequest } from './model/ListNatGatewaySpecsRequest';
import { ListNatGatewaySpecsResponse } from './model/ListNatGatewaySpecsResponse';
import { ListNatGatewayTagRequest } from './model/ListNatGatewayTagRequest';
import { ListNatGatewayTagResponse } from './model/ListNatGatewayTagResponse';
import { ListNatGatewaysRequest } from './model/ListNatGatewaysRequest';
import { ListNatGatewaysResponse } from './model/ListNatGatewaysResponse';
import { ListNatsByTagsRequestBody } from './model/ListNatsByTagsRequestBody';
import { ListPrivateDnatsRequest } from './model/ListPrivateDnatsRequest';
import { ListPrivateDnatsResponse } from './model/ListPrivateDnatsResponse';
import { ListPrivateNatTagsRequest } from './model/ListPrivateNatTagsRequest';
import { ListPrivateNatTagsResponse } from './model/ListPrivateNatTagsResponse';
import { ListPrivateNatsByTagsRequest } from './model/ListPrivateNatsByTagsRequest';
import { ListPrivateNatsByTagsResponse } from './model/ListPrivateNatsByTagsResponse';
import { ListPrivateNatsRequest } from './model/ListPrivateNatsRequest';
import { ListPrivateNatsResponse } from './model/ListPrivateNatsResponse';
import { ListPrivateSnatsRequest } from './model/ListPrivateSnatsRequest';
import { ListPrivateSnatsResponse } from './model/ListPrivateSnatsResponse';
import { ListSpecsRequest } from './model/ListSpecsRequest';
import { ListSpecsResponse } from './model/ListSpecsResponse';
import { ListTagResourceInstancesRequestBody } from './model/ListTagResourceInstancesRequestBody';
import { ListTransitIpTagsRequest } from './model/ListTransitIpTagsRequest';
import { ListTransitIpTagsResponse } from './model/ListTransitIpTagsResponse';
import { ListTransitIpsByTagsRequest } from './model/ListTransitIpsByTagsRequest';
import { ListTransitIpsByTagsResponse } from './model/ListTransitIpsByTagsResponse';
import { ListTransitIpsRequest } from './model/ListTransitIpsRequest';
import { ListTransitIpsResponse } from './model/ListTransitIpsResponse';
import { ListTransitSubnetRequest } from './model/ListTransitSubnetRequest';
import { ListTransitSubnetResponse } from './model/ListTransitSubnetResponse';
import { ListTransitSubnetTagsRequest } from './model/ListTransitSubnetTagsRequest';
import { ListTransitSubnetTagsResponse } from './model/ListTransitSubnetTagsResponse';
import { ListTransitSubnetsByTagsRequest } from './model/ListTransitSubnetsByTagsRequest';
import { ListTransitSubnetsByTagsResponse } from './model/ListTransitSubnetsByTagsResponse';
import { Match } from './model/Match';
import { NatGatewayDnatRuleResponseBody } from './model/NatGatewayDnatRuleResponseBody';
import { NatGatewayResponseBody } from './model/NatGatewayResponseBody';
import { NatGatewaySnatRuleResponseBody } from './model/NatGatewaySnatRuleResponseBody';
import { NatGatewayUpdateSnatRuleResponseBody } from './model/NatGatewayUpdateSnatRuleResponseBody';
import { PageInfo } from './model/PageInfo';
import { PrepaidOptions } from './model/PrepaidOptions';
import { PrivateDnat } from './model/PrivateDnat';
import { PrivateNat } from './model/PrivateNat';
import { PrivateSnat } from './model/PrivateSnat';
import { PrivateTag } from './model/PrivateTag';
import { PublicMatch } from './model/PublicMatch';
import { PublicResource } from './model/PublicResource';
import { PublicResourceTag } from './model/PublicResourceTag';
import { PublicTag } from './model/PublicTag';
import { PublicTags } from './model/PublicTags';
import { Resource } from './model/Resource';
import { ResourceTag } from './model/ResourceTag';
import { SessionConfiguration } from './model/SessionConfiguration';
import { ShowNatGatewayDnatRuleRequest } from './model/ShowNatGatewayDnatRuleRequest';
import { ShowNatGatewayDnatRuleResponse } from './model/ShowNatGatewayDnatRuleResponse';
import { ShowNatGatewayRequest } from './model/ShowNatGatewayRequest';
import { ShowNatGatewayResponse } from './model/ShowNatGatewayResponse';
import { ShowNatGatewaySnatRuleRequest } from './model/ShowNatGatewaySnatRuleRequest';
import { ShowNatGatewaySnatRuleResponse } from './model/ShowNatGatewaySnatRuleResponse';
import { ShowNatGatewayTagRequest } from './model/ShowNatGatewayTagRequest';
import { ShowNatGatewayTagResponse } from './model/ShowNatGatewayTagResponse';
import { ShowPrivateDnatRequest } from './model/ShowPrivateDnatRequest';
import { ShowPrivateDnatResponse } from './model/ShowPrivateDnatResponse';
import { ShowPrivateNatRequest } from './model/ShowPrivateNatRequest';
import { ShowPrivateNatResponse } from './model/ShowPrivateNatResponse';
import { ShowPrivateNatTagsRequest } from './model/ShowPrivateNatTagsRequest';
import { ShowPrivateNatTagsResponse } from './model/ShowPrivateNatTagsResponse';
import { ShowPrivateSnatRequest } from './model/ShowPrivateSnatRequest';
import { ShowPrivateSnatResponse } from './model/ShowPrivateSnatResponse';
import { ShowTransitIpRequest } from './model/ShowTransitIpRequest';
import { ShowTransitIpResponse } from './model/ShowTransitIpResponse';
import { ShowTransitIpTagsRequest } from './model/ShowTransitIpTagsRequest';
import { ShowTransitIpTagsResponse } from './model/ShowTransitIpTagsResponse';
import { ShowTransitSubnetRequest } from './model/ShowTransitSubnetRequest';
import { ShowTransitSubnetResponse } from './model/ShowTransitSubnetResponse';
import { ShowTransitSubnetTagsRequest } from './model/ShowTransitSubnetTagsRequest';
import { ShowTransitSubnetTagsResponse } from './model/ShowTransitSubnetTagsResponse';
import { Spec } from './model/Spec';
import { Tag } from './model/Tag';
import { TagBody } from './model/TagBody';
import { Tags } from './model/Tags';
import { TagsBody } from './model/TagsBody';
import { TransitIp } from './model/TransitIp';
import { TransitSubnet } from './model/TransitSubnet';
import { UpdateNatGatewayDnatRuleOption } from './model/UpdateNatGatewayDnatRuleOption';
import { UpdateNatGatewayDnatRuleRequest } from './model/UpdateNatGatewayDnatRuleRequest';
import { UpdateNatGatewayDnatRuleRequestBody } from './model/UpdateNatGatewayDnatRuleRequestBody';
import { UpdateNatGatewayDnatRuleResponse } from './model/UpdateNatGatewayDnatRuleResponse';
import { UpdateNatGatewayOption } from './model/UpdateNatGatewayOption';
import { UpdateNatGatewayOptionPrepaidOptions } from './model/UpdateNatGatewayOptionPrepaidOptions';
import { UpdateNatGatewayRequest } from './model/UpdateNatGatewayRequest';
import { UpdateNatGatewayRequestBody } from './model/UpdateNatGatewayRequestBody';
import { UpdateNatGatewayResponse } from './model/UpdateNatGatewayResponse';
import { UpdateNatGatewaySnatRuleOption } from './model/UpdateNatGatewaySnatRuleOption';
import { UpdateNatGatewaySnatRuleRequest } from './model/UpdateNatGatewaySnatRuleRequest';
import { UpdateNatGatewaySnatRuleRequestOption } from './model/UpdateNatGatewaySnatRuleRequestOption';
import { UpdateNatGatewaySnatRuleResponse } from './model/UpdateNatGatewaySnatRuleResponse';
import { UpdateNatGatewayToPeriodRequest } from './model/UpdateNatGatewayToPeriodRequest';
import { UpdateNatGatewayToPeriodRequestBody } from './model/UpdateNatGatewayToPeriodRequestBody';
import { UpdateNatGatewayToPeriodResponse } from './model/UpdateNatGatewayToPeriodResponse';
import { UpdatePrivateDnatOption } from './model/UpdatePrivateDnatOption';
import { UpdatePrivateDnatRequest } from './model/UpdatePrivateDnatRequest';
import { UpdatePrivateDnatRequestBody } from './model/UpdatePrivateDnatRequestBody';
import { UpdatePrivateDnatResponse } from './model/UpdatePrivateDnatResponse';
import { UpdatePrivateNatOption } from './model/UpdatePrivateNatOption';
import { UpdatePrivateNatRequest } from './model/UpdatePrivateNatRequest';
import { UpdatePrivateNatRequestBody } from './model/UpdatePrivateNatRequestBody';
import { UpdatePrivateNatResponse } from './model/UpdatePrivateNatResponse';
import { UpdatePrivateSnatOption } from './model/UpdatePrivateSnatOption';
import { UpdatePrivateSnatOptionBody } from './model/UpdatePrivateSnatOptionBody';
import { UpdatePrivateSnatRequest } from './model/UpdatePrivateSnatRequest';
import { UpdatePrivateSnatResponse } from './model/UpdatePrivateSnatResponse';
import { UpdateTransitSubnetOption } from './model/UpdateTransitSubnetOption';
import { UpdateTransitSubnetRequest } from './model/UpdateTransitSubnetRequest';
import { UpdateTransitSubnetRequestBody } from './model/UpdateTransitSubnetRequestBody';
import { UpdateTransitSubnetResponse } from './model/UpdateTransitSubnetResponse';

export class NatClient {
    public static newBuilder(): ClientBuilder<NatClient> {
            let client = new ClientBuilder<NatClient>(newClient);
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
     * - 为指定中转子网实例批量添加或删除标签
     * - 标签管理服务需要使用该接口批量管理中转子网实例的标签。
     * - 一个中转子网上最多有20个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加删除中转子网标签
     * @param {string} resourceId 中转子网的ID。
     * @param {BatchOperateResourceTagsRequestBody} batchCreateDeleteTransitSubnetTagsRequestBody 批量添加删除中转子网的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateDeleteTransitSubnetTags(batchCreateDeleteTransitSubnetTagsRequest?: BatchCreateDeleteTransitSubnetTagsRequest): Promise<BatchCreateDeleteTransitSubnetTagsResponse> {
        const options = ParamCreater().batchCreateDeleteTransitSubnetTags(batchCreateDeleteTransitSubnetTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建中转子网。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建中转子网
     * @param {CreateTransitSubnetRequestBody} createTransitSubnetRequestBody 中转子网请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTransitSubnet(createTransitSubnetRequest?: CreateTransitSubnetRequest): Promise<CreateTransitSubnetResponse> {
        const options = ParamCreater().createTransitSubnet(createTransitSubnetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 为指定中转子网添加标签
     * - 一个中转子网上最多有20个标签。
     * - 此接口为幂等接口：
     * - 创建时，如果创建的标签已经存在（key相同），则覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加中转子网标签
     * @param {string} resourceId 中转子网的ID。
     * @param {CreateResourceTagRequestBody} createTransitSubnetTagRequestBody 添加中转子网标签的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTransitSubnetTag(createTransitSubnetTagRequest?: CreateTransitSubnetTagRequest): Promise<CreateTransitSubnetTagResponse> {
        const options = ParamCreater().createTransitSubnetTag(createTransitSubnetTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除中转子网。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除中转子网
     * @param {string} transitSubnetId 中转子网ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTransitSubnet(deleteTransitSubnetRequest?: DeleteTransitSubnetRequest): Promise<DeleteTransitSubnetResponse> {
        const options = ParamCreater().deleteTransitSubnet(deleteTransitSubnetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 幂等接口：
     * - 删除时，不对标签字符集做校验，调用接口前必须要做encodeURI，服务端需要对接口uri做decodeURI。删除的key不存在报404，key不能为空或者空字符串。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除中转子网标签
     * @param {string} key 标签key。
     * @param {string} resourceId 中转子网的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTransitSubnetTag(deleteTransitSubnetTagRequest?: DeleteTransitSubnetTagRequest): Promise<DeleteTransitSubnetTagResponse> {
        const options = ParamCreater().deleteTransitSubnetTag(deleteTransitSubnetTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中转子网列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中转子网列表
     * @param {Array<string>} [id] 中转子网的ID
     * @param {Array<string>} [name] 中转子网的名字
     * @param {Array<string>} [description] 中转子网的描述
     * @param {Array<string>} [virsubnetProjectId] 中转子网的子网所属项目的ID
     * @param {Array<string>} [vpcId] 中转子网的子网所属的VPC的ID
     * @param {Array<string>} [virsubnetId] 中转子网的子网ID
     * @param {Array<string>} [status] 中转子网状态。 取值范围： ACTIVE： 当前资源状态正常。 INACTIVE： 不可用。
     * @param {number} [limit] 功能说明：每页返回的个数。 取值范围：1~2000。 默认值：2000
     * @param {string} [marker] 功能说明：分页查询起始的资源ID，为空时查询第一页。 值从上一次查询的PageInfo中的next_marker或者previous_marker中获取
     * @param {boolean} [pageReverse] 是否查询前一页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTransitSubnet(listTransitSubnetRequest?: ListTransitSubnetRequest): Promise<ListTransitSubnetResponse> {
        const options = ParamCreater().listTransitSubnet(listTransitSubnetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询租户在指定Project的所有中转子网标签集合。
     * - 标签管理服务需要能够列出当前租户全部已使用的中转子网标签集合，为打中转子网标签和过滤中转子网实例时提供标签联想功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中转子网项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTransitSubnetTags(listTransitSubnetTagsRequest?: ListTransitSubnetTagsRequest): Promise<ListTransitSubnetTagsResponse> {
        const options = ParamCreater().listTransitSubnetTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 使用标签过滤中转子网实例。
     * - 标签管理服务需要提供按标签过滤中转子网服务实例并汇总显示在列表中，需要中转子网服务提供查询能力。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中转子网实例
     * @param {ListTagResourceInstancesRequestBody} listTransitSubnetsByTagsRequestBody 查询中转子网实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTransitSubnetsByTags(listTransitSubnetsByTagsRequest?: ListTransitSubnetsByTagsRequest): Promise<ListTransitSubnetsByTagsResponse> {
        const options = ParamCreater().listTransitSubnetsByTags(listTransitSubnetsByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的中转子网详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定的中转子网详情
     * @param {string} transitSubnetId 中转子网ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTransitSubnet(showTransitSubnetRequest?: ShowTransitSubnetRequest): Promise<ShowTransitSubnetResponse> {
        const options = ParamCreater().showTransitSubnet(showTransitSubnetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询指定中转子网实例的标签信息。
     * - 标签管理服务需要使用该接口查询指定中转子网实例的全部标签数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中转子网标签
     * @param {string} resourceId 中转子网的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTransitSubnetTags(showTransitSubnetTagsRequest?: ShowTransitSubnetTagsRequest): Promise<ShowTransitSubnetTagsResponse> {
        const options = ParamCreater().showTransitSubnetTags(showTransitSubnetTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定的中转子网。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新中转子网
     * @param {string} transitSubnetId 中转子网ID。
     * @param {UpdateTransitSubnetRequestBody} updateTransitSubnetRequestBody 更新中转子网请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTransitSubnet(updateTransitSubnetRequest?: UpdateTransitSubnetRequest): Promise<UpdateTransitSubnetResponse> {
        const options = ParamCreater().updateTransitSubnet(updateTransitSubnetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建DNAT规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建DNAT规则
     * @param {BatchCreateNatGatewayDnatRulesRequestBody} batchCreateNatGatewayDnatRulesRequestBody This is an auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateNatGatewayDnatRules(batchCreateNatGatewayDnatRulesRequest?: BatchCreateNatGatewayDnatRulesRequest): Promise<BatchCreateNatGatewayDnatRulesResponse> {
        const options = ParamCreater().batchCreateNatGatewayDnatRules(batchCreateNatGatewayDnatRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建DNAT规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建DNAT规则
     * @param {CreateNatGatewayDnatRuleOption} createNatGatewayDnatRuleRequestBody 创建DNAT规则的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNatGatewayDnatRule(createNatGatewayDnatRuleRequest?: CreateNatGatewayDnatRuleRequest): Promise<CreateNatGatewayDnatRuleResponse> {
        const options = ParamCreater().createNatGatewayDnatRule(createNatGatewayDnatRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建DNAT规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建DNAT规则
     * @param {CreatePrivateDnatOptionBody} createPrivateDnatRequestBody 创建DNAT规则的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrivateDnat(createPrivateDnatRequest?: CreatePrivateDnatRequest): Promise<CreatePrivateDnatResponse> {
        const options = ParamCreater().createPrivateDnat(createPrivateDnatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的DNAT规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除DNAT规则
     * @param {string} natGatewayId 公网NAT网关实例的ID。
     * @param {string} dnatRuleId DNAT规则的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNatGatewayDnatRule(deleteNatGatewayDnatRuleRequest?: DeleteNatGatewayDnatRuleRequest): Promise<DeleteNatGatewayDnatRuleResponse> {
        const options = ParamCreater().deleteNatGatewayDnatRule(deleteNatGatewayDnatRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的DNAT规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除DNAT规则
     * @param {string} dnatRuleId DNAT规则的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePrivateDnat(deletePrivateDnatRequest?: DeletePrivateDnatRequest): Promise<DeletePrivateDnatResponse> {
        const options = ParamCreater().deletePrivateDnat(deletePrivateDnatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DNAT规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DNAT规则列表
     * @param {boolean} [adminStateUp] 解冻/冻结状态。 取值范围： \&quot;true\&quot;：解冻 \&quot;false\&quot;：冻结
     * @param {number} [externalServicePort] Floatingip对外提供服务的端口号。 取值范围：0~65535。
     * @param {string} [floatingIpAddress] 弹性公网的IP地址。
     * @param {string} [globalEipAddress] 全域弹性公网的IP地址。
     * @param {Array<'ACTIVE' | 'PENDING_CREATE' | 'PENDING_UPDATE' | 'PENDING_DELETE' | 'EIP_FREEZED' | 'INACTIVE'>} [status] DNAT规则的状态。 取值为:  ACTIVE: 可用 PENDING_CREATE: 创建中 PENDING_UPDATE: 更新中 PENDING_DELETE: 删除中 EIP_FREEZED: EIP冻结 INACTIVE: 不可用
     * @param {string} [floatingIpId] 弹性公网IP的id。
     * @param {string} [globalEipId] 全域弹性公网IP的id。
     * @param {number} [internalServicePort] 虚拟机或者裸机对外提供服务的协议端口号。 取值范围：0~65535。
     * @param {number} [limit] 功能说明：每页返回的个数。 取值范围：1~2000。 默认值：2000。
     * @param {string} [id] DNAT规则的ID。
     * @param {string} [description] DNAT规则的描述，长度范围小于等于255个字符，不能包含“&lt;”和“&gt;”。
     * @param {Date} [createdAt] DNAT规则的创建时间，格式是yyyy-mm-dd hh:mm:ss.SSSSSS。
     * @param {Array<string>} [natGatewayId] 公网NAT网关实例的ID。
     * @param {string} [portId] 虚拟机或者裸机的Port ID，对应虚拟私有云场景，与private_ip参数二选一。
     * @param {string} [privateIp] 用户私有IP地址，对应专线、云连接场景，与port_id参数二选一。
     * @param {Array<string>} [protocol] 协议类型，目前支持TCP/tcp、UDP/udp、ANY/any。 对应协议号6、17、0。
     * @param {string} [marker] 分页查询的起始资源ID，表示从指定资源的下一条记录开始查询。 - 若不传入marker和limit参数，查询结果返回第一页全部资源记录（默认2000条）。 - 若不传入marker参数，limit为10，查询结果返回第1~10条资源记录。 - 若marker为第10条记录的资源ID，limit为10，查询结果返回第11~20条资源记录。 - 若marker为第10条记录的资源ID，不传入limit参数，查询结果返回第11条及之后的资源记录（默认2000条）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNatGatewayDnatRules(listNatGatewayDnatRulesRequest?: ListNatGatewayDnatRulesRequest): Promise<ListNatGatewayDnatRulesResponse> {
        const options = ParamCreater().listNatGatewayDnatRules(listNatGatewayDnatRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询DNAT规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询DNAT规则列表
     * @param {number} [limit] 功能说明：每页返回的个数。 取值范围：1~2000。 默认值：2000。
     * @param {string} [marker] 功能说明：分页查询起始的资源ID，为空时查询第一页。 值从上一次查询的PageInfo中的next_marker或者previous_marker中获取。
     * @param {boolean} [pageReverse] 是否查询前一页。
     * @param {Array<string>} [id] DNAT规则的ID。
     * @param {Array<string>} [enterpriseProjectId] 企业项目ID。创建DNAT规则时，关联的企业项目ID。
     * @param {Array<string>} [description] DNAT规则的描述。长度范围小于等于255个字符，不能包含“&lt;”和“&gt;”。
     * @param {Array<string>} [gatewayId] 私网NAT网关实例的ID。
     * @param {Array<string>} [transitIpId] 中转IP的ID。
     * @param {Array<string>} [networkInterfaceId] 计算实例、ELBV2、ELBV3、VIP等资源的端口ID。
     * @param {Array<string>} [type] DNAT规则后端的类型。 取值：     COMPUTE：后端为计算实例。     VIP：后端为VIP的实例。     ELB：后端为ELBv2的实例。     ELBv3：后端为ELBv3的实例。     CUSTOMIZE：后端为自定义IP。
     * @param {Array<string>} [privateIpAddress] 后端资源（计算实例、ELBV2、ELBV3、VIP等）的私网IP地址。
     * @param {Array<string>} [protocol] DNAT规则协议类型， 目前支持TCP/tcp/Tcp/tCp/tcP/TCp/tCP/TcP、 UDP/udp/Udp/uDp/udP/UDp/uDP/UdP、 ANY/any/Any/aNy/anY/ANy/aNY/AnY。 分别对应协议号6、17、0。
     * @param {Array<string>} [internalServicePort] 后端实例的端口号（计算实例、ELBV2、ELBV3、VIP等)。
     * @param {Array<string>} [transitServicePort] 中转IP的端口号。
     * @param {Array<string>} [transitIpAddress] 中转IP的地址。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivateDnats(listPrivateDnatsRequest?: ListPrivateDnatsRequest): Promise<ListPrivateDnatsResponse> {
        const options = ParamCreater().listPrivateDnats(listPrivateDnatsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的DNAT规则详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定的DNAT规则详情
     * @param {string} dnatRuleId DNAT规则的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNatGatewayDnatRule(showNatGatewayDnatRuleRequest?: ShowNatGatewayDnatRuleRequest): Promise<ShowNatGatewayDnatRuleResponse> {
        const options = ParamCreater().showNatGatewayDnatRule(showNatGatewayDnatRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的DNAT规则详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定的DNAT规则详情
     * @param {string} dnatRuleId DNAT规则的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateDnat(showPrivateDnatRequest?: ShowPrivateDnatRequest): Promise<ShowPrivateDnatResponse> {
        const options = ParamCreater().showPrivateDnat(showPrivateDnatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定的DNAT规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新DNAT规则
     * @param {string} dnatRuleId DNAT规则的ID。
     * @param {UpdateNatGatewayDnatRuleRequestBody} updateNatGatewayDnatRuleRequestBody 更新DNAT规则的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNatGatewayDnatRule(updateNatGatewayDnatRuleRequest?: UpdateNatGatewayDnatRuleRequest): Promise<UpdateNatGatewayDnatRuleResponse> {
        const options = ParamCreater().updateNatGatewayDnatRule(updateNatGatewayDnatRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定的DNAT规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新DNAT规则
     * @param {string} dnatRuleId DNAT规则的ID。
     * @param {UpdatePrivateDnatRequestBody} updatePrivateDnatRequestBody 更新DNAT规则的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePrivateDnat(updatePrivateDnatRequest?: UpdatePrivateDnatRequest): Promise<UpdatePrivateDnatResponse> {
        const options = ParamCreater().updatePrivateDnat(updatePrivateDnatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 为指定中转IP实例批量添加或删除标签
     * - 标签管理服务需要使用该接口批量管理中转IP实例的标签。
     * - 一个中转IP上最多有10个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加删除中转IP标签
     * @param {string} resourceId 中转IP的ID。
     * @param {BatchOperateResourceTagsRequestBody} batchCreateDeleteTransitIpTagsRequestBody 批量添加删除中转IP的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateDeleteTransitIpTags(batchCreateDeleteTransitIpTagsRequest?: BatchCreateDeleteTransitIpTagsRequest): Promise<BatchCreateDeleteTransitIpTagsResponse> {
        const options = ParamCreater().batchCreateDeleteTransitIpTags(batchCreateDeleteTransitIpTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 一个中转IP上最多有10个标签。
     * - 此接口为幂等接口：
     * - 创建时，如果创建的标签已经存在（key相同），则覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加中转IP标签
     * @param {string} resourceId 中转IP的ID。
     * @param {CreateResourceTagRequestBody} createTransitIpTagRequestBody 添加中转IP标签的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTransitIpTag(createTransitIpTagRequest?: CreateTransitIpTagRequest): Promise<CreateTransitIpTagResponse> {
        const options = ParamCreater().createTransitIpTag(createTransitIpTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 幂等接口：
     * - 删除时，不对标签字符集做校验，调用接口前必须要做encodeURI，服务端需要对接口uri做decodeURI。删除的key不存在报404，key不能为空或者空字符串。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除中转IP标签
     * @param {string} key 标签key。
     * @param {string} resourceId 中转IP的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTransitIpTag(deleteTransitIpTagRequest?: DeleteTransitIpTagRequest): Promise<DeleteTransitIpTagResponse> {
        const options = ParamCreater().deleteTransitIpTag(deleteTransitIpTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询租户在指定Project和实例类型的所有中转IP标签集合。
     * - 标签管理服务需要能够列出当前租户全部已使用的中转IP标签集合，为打中转IP标签和过滤中转IP实例时提供标签联想功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中转IP项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTransitIpTags(listTransitIpTagsRequest?: ListTransitIpTagsRequest): Promise<ListTransitIpTagsResponse> {
        const options = ParamCreater().listTransitIpTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 使用标签过滤中转IP实例。
     * - 标签管理服务需要提供按标签过滤中转IP服务实例并汇总显示在列表中，需要中转IP服务提供查询能力。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中转IP实例
     * @param {ListTagResourceInstancesRequestBody} listTransitIpsByTagsRequestBody 查询中转IP实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTransitIpsByTags(listTransitIpsByTagsRequest?: ListTransitIpsByTagsRequest): Promise<ListTransitIpsByTagsResponse> {
        const options = ParamCreater().listTransitIpsByTags(listTransitIpsByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询指定中转IP实例的标签信息。
     * - 标签管理服务需要使用该接口查询指定中转IP实例的全部标签数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中转IP标签
     * @param {string} resourceId 中转IP的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTransitIpTags(showTransitIpTagsRequest?: ShowTransitIpTagsRequest): Promise<ShowTransitIpTagsResponse> {
        const options = ParamCreater().showTransitIpTags(showTransitIpTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 为指定公网NAT网关实例批量添加或删除标签。 
     * - 标签管理服务需要使用该接口批量管理实例的标签。 
     * - 一个资源上最多有10个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加/删除公网NAT网关资源标签
     * @param {string} natGatewayId 公网NAT网关ID。
     * @param {BatchCreateDeleteNatTagsRequestBody} batchCreateDeleteNatGatewayTagRequestBody 批量添加删除的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateDeleteNatGatewayTag(batchCreateDeleteNatGatewayTagRequest?: BatchCreateDeleteNatGatewayTagRequest): Promise<BatchCreateDeleteNatGatewayTagResponse> {
        const options = ParamCreater().batchCreateDeleteNatGatewayTag(batchCreateDeleteNatGatewayTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 为指定私网NAT网关实例批量添加或删除标签
     * - 标签管理服务需要使用该接口批量管理私网NAT网关实例的标签。
     * - 一个私网NAT网关上最多有10个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加删除私网NAT网关标签
     * @param {string} resourceId 私网NAT网关的ID。
     * @param {BatchOperateResourceTagsRequestBody} batchCreateDeletePrivateNatTagsRequestBody 批量添加删除私网NAT网关的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateDeletePrivateNatTags(batchCreateDeletePrivateNatTagsRequest?: BatchCreateDeletePrivateNatTagsRequest): Promise<BatchCreateDeletePrivateNatTagsResponse> {
        const options = ParamCreater().batchCreateDeletePrivateNatTags(batchCreateDeletePrivateNatTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建公网NAT网关实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建公网NAT网关
     * @param {CreateNatGatewayRequestBody} createNatGatewayRequestBody 创建公网NAT网关实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNatGateway(createNatGatewayRequest?: CreateNatGatewayRequest): Promise<CreateNatGatewayResponse> {
        const options = ParamCreater().createNatGateway(createNatGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 添加公网NAT网关资源标签。一个资源上最多有10个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加公网NAT网关资源标签
     * @param {string} natGatewayId 所属公网NAT网关的id。
     * @param {CreateNatTagRequestBody} createNatGatewayTagRequestBody 添加公网NAT网关资源标签的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNatGatewayTag(createNatGatewayTagRequest?: CreateNatGatewayTagRequest): Promise<CreateNatGatewayTagResponse> {
        const options = ParamCreater().createNatGatewayTag(createNatGatewayTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建私网NAT网关实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建私网NAT网关
     * @param {CreatePrivateNatRequestBody} createPrivateNatRequestBody 创建私网NAT网关实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrivateNat(createPrivateNatRequest?: CreatePrivateNatRequest): Promise<CreatePrivateNatResponse> {
        const options = ParamCreater().createPrivateNat(createPrivateNatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 一个私网NAT网关上最多有10个标签。
     * - 此接口为幂等接口：
     * - 创建时，如果创建的标签已经存在（key相同），则覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加私网NAT网关标签
     * @param {string} resourceId 私网NAT网关的ID。
     * @param {CreateResourceTagRequestBody} createPrivateNatTagRequestBody 添加私网NAT网关标签的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrivateNatTag(createPrivateNatTagRequest?: CreatePrivateNatTagRequest): Promise<CreatePrivateNatTagResponse> {
        const options = ParamCreater().createPrivateNatTag(createPrivateNatTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除公网NAT网关实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除公网NAT网关
     * @param {string} natGatewayId 公网NAT网关实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNatGateway(deleteNatGatewayRequest?: DeleteNatGatewayRequest): Promise<DeleteNatGatewayResponse> {
        const options = ParamCreater().deleteNatGateway(deleteNatGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 删除指定公网NAT网关资源实例的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除公网NAT网关资源标签
     * @param {string} natGatewayId 公网NAT网关id。
     * @param {string} key 标签key。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNatGatewayTag(deleteNatGatewayTagRequest?: DeleteNatGatewayTagRequest): Promise<DeleteNatGatewayTagResponse> {
        const options = ParamCreater().deleteNatGatewayTag(deleteNatGatewayTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除私网NAT网关实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除私网NAT网关
     * @param {string} gatewayId 私网NAT网关实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePrivateNat(deletePrivateNatRequest?: DeletePrivateNatRequest): Promise<DeletePrivateNatResponse> {
        const options = ParamCreater().deletePrivateNat(deletePrivateNatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 幂等接口：
     * - 删除时，不对标签字符集做校验，调用接口前必须要做encodeURI，服务端需要对接口uri做decodeURI。删除的key不存在报404，key不能为空或者空字符串。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除私网NAT网关标签
     * @param {string} key 标签key。
     * @param {string} resourceId 私网NAT网关的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePrivateNatTag(deletePrivateNatTagRequest?: DeletePrivateNatTagRequest): Promise<DeletePrivateNatTagResponse> {
        const options = ParamCreater().deletePrivateNatTag(deletePrivateNatTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 使用标签过滤公网NAT网关资源实例。
     * - 标签管理服务需要提供按标签过滤公网NAT网关服务实例并汇总显示在列表中，需要公网NAT网关服务提供查询能力。
     * - 资源默认按照创建时间倒序，资源tag也按照创建时间倒序。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网NAT网关资源实例
     * @param {ListNatsByTagsRequestBody} listNatGatewayByTagRequestBody 查询资源实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNatGatewayByTag(listNatGatewayByTagRequest?: ListNatGatewayByTagRequest): Promise<ListNatGatewayByTagResponse> {
        const options = ParamCreater().listNatGatewayByTag(listNatGatewayByTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 支持创建的NAT网关规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 支持创建的NAT网关规格列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNatGatewaySpecs(listNatGatewaySpecsRequest?: ListNatGatewaySpecsRequest): Promise<ListNatGatewaySpecsResponse> {
        const options = ParamCreater().listNatGatewaySpecs();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询租户在指定项目和公网NAT网关实例类型的所有标签集合。
     * - 标签管理服务需要能够列出当前租户全部已使用的标签集合，为各服务Console打标签和过滤实例时提供标签联想功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网NAT网关项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNatGatewayTag(listNatGatewayTagRequest?: ListNatGatewayTagRequest): Promise<ListNatGatewayTagResponse> {
        const options = ParamCreater().listNatGatewayTag();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询公网NAT网关实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网NAT网关列表
     * @param {string} [tenantId] 项目的ID。
     * @param {string} [id] 公网NAT网关实例的ID。
     * @param {string} [enterpriseProjectId] 企业项目ID。创建公网NAT网关实例时，关联的企业项目ID。
     * @param {string} [description] 公网NAT网关实例的描述，长度范围小于等于255个字符，不能包含“&lt;”和“&gt;”。
     * @param {Date} [createdAt] 公网NAT网关实例的创建时间，遵循UTC时间，格式是yyyy-mm-ddThh:mm:ssZ。
     * @param {string} [name] 公网NAT网关实例的名字，长度限制为64。 公网NAT网关实例的名字仅支持数字、字母、_（下划线）、-（中划线）、中文
     * @param {Array<'ACTIVE' | 'PENDING_CREATE' | 'PENDING_UPDATE' | 'PENDING_DELETE' | 'INACTIVE'>} [status] 公网NAT网关实例的状态。 取值为:  ACTIVE: 可用 PENDING_CREATE: 创建中 PENDING_UPDATE: 更新中 PENDING_DELETE: 删除中 INACTIVE: 不可用
     * @param {Array<'1' | '2' | '3' | '4' | '5'>} [spec] 公网NAT网关实例的规格。 取值为： \&quot;1\&quot;：小型，SNAT最大连接数10000 \&quot;2\&quot;：中型，SNAT最大连接数50000 \&quot;3\&quot;：大型，SNAT最大连接数200000 \&quot;4\&quot;：超大型，SNAT最大连接数1000000 “5”：企业型，SNAT最大连接数10000000 
     * @param {boolean} [adminStateUp] 解冻/冻结状态。 取值范围： \&quot;true\&quot;：解冻 \&quot;false\&quot;：冻结
     * @param {string} [internalNetworkId] 公网NAT网关下行口（DVR的下一跳）所属的network id。
     * @param {string} [routerId] VPC的id。
     * @param {number} [limit] 功能说明：每页返回的个数。 取值范围：1~2000。 默认值：2000。
     * @param {string} [marker] 分页查询的起始资源ID，表示从指定资源的下一条记录开始查询。 - 若不传入marker和limit参数，查询结果返回第一页全部资源记录（默认2000条）。 - 若不传入marker参数，limit为10，查询结果返回第1~10条资源记录。 - 若marker为第10条记录的资源ID，limit为10，查询结果返回第11~20条资源记录。 - 若marker为第10条记录的资源ID，不传入limit参数，查询结果返回第11条及之后的资源记录（默认2000条）。
     * @param {'id' | 'name' | 'status' | 'created_at'} [sortKey] 排序使用的key
     * @param {'desc' | 'asc'} [sortDir] 返回结果按照升序或降序排列，默认降序desc，升序为asc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNatGateways(listNatGatewaysRequest?: ListNatGatewaysRequest): Promise<ListNatGatewaysResponse> {
        const options = ParamCreater().listNatGateways(listNatGatewaysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询租户在指定Project和实例类型的所有私网NAT网关标签集合。
     * - 标签管理服务需要能够列出当前租户全部已使用的私网NAT网关标签集合，为打私网NAT网关标签和过滤私网NAT网关实例时提供标签联想功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询私网NAT网关项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivateNatTags(listPrivateNatTagsRequest?: ListPrivateNatTagsRequest): Promise<ListPrivateNatTagsResponse> {
        const options = ParamCreater().listPrivateNatTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询私网NAT网关实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询私网NAT网关列表
     * @param {number} [limit] 功能说明：每页返回的个数。 取值范围：1~2000。 默认值：2000。
     * @param {string} [marker] 功能说明：分页查询起始的资源ID，为空时查询第一页。 值从上一次查询的PageInfo中的next_marker或者previous_marker中获取。
     * @param {boolean} [pageReverse] 是否查询前一页。
     * @param {Array<string>} [id] 私网NAT网关实例的ID。
     * @param {Array<string>} [name] 私网NAT网关实例的名字。
     * @param {Array<string>} [description] 私网NAT网关实例的描述。长度范围小于等于255个字符，不能包含“&lt;”和“&gt;”。
     * @param {Array<'Small' | 'Medium' | 'Large' | 'Extra-large' | 'Extra-xlarge'>} [spec] 私网NAT网关实例的规格。 取值为： \&quot;Small\&quot;：小型 \&quot;Medium\&quot;：中型 \&quot;Large\&quot;：大型 \&quot;Extra-large\&quot;：超大型 \&quot;Extra-xlarge\&quot;：企业型
     * @param {Array<'ACTIVE' | 'FROZEN' | 'INACTIVE'>} [status] 私网NAT网关实例的状态。 取值为： \&quot;ACTIVE\&quot;：正常运行 \&quot;FROZEN\&quot;：冻结 \&quot;INACTIVE\&quot;：不可用
     * @param {Array<string>} [vpcId] 私网NAT网关实例所属VPC的ID。
     * @param {Array<string>} [virsubnetId] 私网NAT网关实例所属子网的ID。
     * @param {Array<string>} [enterpriseProjectId] 企业项目ID。创建私网NAT网关实例时，关联的企业项目ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivateNats(listPrivateNatsRequest?: ListPrivateNatsRequest): Promise<ListPrivateNatsResponse> {
        const options = ParamCreater().listPrivateNats(listPrivateNatsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 使用标签过滤私网NAT网关实例。
     * - 标签管理服务需要提供按标签过滤私网NAT网关服务实例并汇总显示在列表中，需要私网NAT网关服务提供查询能力。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询私网NAT网关实例
     * @param {ListTagResourceInstancesRequestBody} listPrivateNatsByTagsRequestBody 查询资源实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivateNatsByTags(listPrivateNatsByTagsRequest?: ListPrivateNatsByTagsRequest): Promise<ListPrivateNatsByTagsResponse> {
        const options = ParamCreater().listPrivateNatsByTags(listPrivateNatsByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目支持的网关规格列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目支持的网关规格列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSpecs(listSpecsRequest?: ListSpecsRequest): Promise<ListSpecsResponse> {
        const options = ParamCreater().listSpecs();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的公网NAT网关实例详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定的公网NAT网关详情
     * @param {string} natGatewayId 公网NAT网关实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNatGateway(showNatGatewayRequest?: ShowNatGatewayRequest): Promise<ShowNatGatewayResponse> {
        const options = ParamCreater().showNatGateway(showNatGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询指定公网NAT网关实例的标签信息。
     * - 标签管理服务需要使用该接口查询指定公网NAT网关实例的全部标签数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网NAT网关资源标签
     * @param {string} natGatewayId 公网NAT网关ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNatGatewayTag(showNatGatewayTagRequest?: ShowNatGatewayTagRequest): Promise<ShowNatGatewayTagResponse> {
        const options = ParamCreater().showNatGatewayTag(showNatGatewayTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的私网NAT网关实例详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定的私网NAT网关详情
     * @param {string} gatewayId 私网NAT网关实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateNat(showPrivateNatRequest?: ShowPrivateNatRequest): Promise<ShowPrivateNatResponse> {
        const options = ParamCreater().showPrivateNat(showPrivateNatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询指定私网NAT网关实例的标签信息。
     * - 标签管理服务需要使用该接口查询指定私网NAT网关实例的全部标签数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询私网NAT网关标签
     * @param {string} resourceId 私网NAT网关的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateNatTags(showPrivateNatTagsRequest?: ShowPrivateNatTagsRequest): Promise<ShowPrivateNatTagsResponse> {
        const options = ParamCreater().showPrivateNatTags(showPrivateNatTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新公网NAT网关实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新公网NAT网关
     * @param {string} natGatewayId 公网NAT网关实例的ID。
     * @param {UpdateNatGatewayRequestBody} updateNatGatewayRequestBody 更新公网NAT网关实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNatGateway(updateNatGatewayRequest?: UpdateNatGatewayRequest): Promise<UpdateNatGatewayResponse> {
        const options = ParamCreater().updateNatGateway(updateNatGatewayRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 公网NAT网关按需转包。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 公网NAT网关按需转包
     * @param {string} natGatewayId 公网NAT网关实例的ID。
     * @param {UpdateNatGatewayToPeriodRequestBody} updateNatGatewayToPeriodRequestBody 公网NAT网关按需转包的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNatGatewayToPeriod(updateNatGatewayToPeriodRequest?: UpdateNatGatewayToPeriodRequest): Promise<UpdateNatGatewayToPeriodResponse> {
        const options = ParamCreater().updateNatGatewayToPeriod(updateNatGatewayToPeriodRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新私网NAT网关实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新私网NAT网关
     * @param {string} gatewayId 私网NAT网关实例的ID。
     * @param {UpdatePrivateNatRequestBody} updatePrivateNatRequestBody 更新私网NAT网关实例的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePrivateNat(updatePrivateNatRequest?: UpdatePrivateNatRequest): Promise<UpdatePrivateNatResponse> {
        const options = ParamCreater().updatePrivateNat(updatePrivateNatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建中转IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建中转IP
     * @param {CreateTransitIpRequestBody} createTransitIpRequestBody 创建中转子网请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTransitIp(createTransitIpRequest?: CreateTransitIpRequest): Promise<CreateTransitIpResponse> {
        const options = ParamCreater().createTransitIp(createTransitIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除中转IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除中转IP
     * @param {string} transitIpId 中转IP的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTransitIp(deleteTransitIpRequest?: DeleteTransitIpRequest): Promise<DeleteTransitIpResponse> {
        const options = ParamCreater().deleteTransitIp(deleteTransitIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中转IP列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询中转IP列表
     * @param {number} [limit] 功能说明：每页返回的个数。 取值范围：1~2000。 默认值：2000。
     * @param {string} [marker] 功能说明：分页查询起始的资源ID，为空时查询第一页。 值从上一次查询的PageInfo中的next_marker或者previous_marker中获取。
     * @param {boolean} [pageReverse] 是否查询前一页。
     * @param {Array<string>} [id] 中转IP的ID。
     * @param {Array<string>} [networkInterfaceId] 中转IP的网络接口ID。
     * @param {Array<string>} [ipAddress] 中转IP地址。
     * @param {Array<string>} [gatewayId] 中转IP绑定的私网NAT网关实例的ID。
     * @param {Array<string>} [enterpriseProjectId] 企业项目ID。创建中转IP时，关联的企业项目ID。
     * @param {Array<string>} [virsubnetId] 当前租户子网的ID。
     * @param {Array<string>} [transitSubnetId] 中转子网的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTransitIps(listTransitIpsRequest?: ListTransitIpsRequest): Promise<ListTransitIpsResponse> {
        const options = ParamCreater().listTransitIps(listTransitIpsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询中转IP详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定的中转IP详情
     * @param {string} transitIpId 中转IP的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTransitIp(showTransitIpRequest?: ShowTransitIpRequest): Promise<ShowTransitIpResponse> {
        const options = ParamCreater().showTransitIp(showTransitIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建SNAT规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建SNAT规则
     * @param {CreateNatGatewaySnatRuleRequestOption} createNatGatewaySnatRuleRequestBody 创建SNAT规则的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNatGatewaySnatRule(createNatGatewaySnatRuleRequest?: CreateNatGatewaySnatRuleRequest): Promise<CreateNatGatewaySnatRuleResponse> {
        const options = ParamCreater().createNatGatewaySnatRule(createNatGatewaySnatRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建SNAT规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建SNAT规则
     * @param {CreatePrivateSnatOptionBody} createPrivateSnatRequestBody 创建SNAT规则的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrivateSnat(createPrivateSnatRequest?: CreatePrivateSnatRequest): Promise<CreatePrivateSnatResponse> {
        const options = ParamCreater().createPrivateSnat(createPrivateSnatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的SNAT规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除SNAT规则
     * @param {string} natGatewayId 公网NAT网关实例的ID。
     * @param {string} snatRuleId SNAT规则的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNatGatewaySnatRule(deleteNatGatewaySnatRuleRequest?: DeleteNatGatewaySnatRuleRequest): Promise<DeleteNatGatewaySnatRuleResponse> {
        const options = ParamCreater().deleteNatGatewaySnatRule(deleteNatGatewaySnatRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的SNAT规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除SNAT规则
     * @param {string} snatRuleId SNAT规则的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePrivateSnat(deletePrivateSnatRequest?: DeletePrivateSnatRequest): Promise<DeletePrivateSnatResponse> {
        const options = ParamCreater().deletePrivateSnat(deletePrivateSnatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SNAT规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SNAT规则列表
     * @param {boolean} [adminStateUp] 解冻/冻结状态。 取值范围： \&quot;true\&quot;：解冻 \&quot;false\&quot;：冻结
     * @param {string} [cidr] 可以是网段或者主机格式，与network_id参数二选一。 Source_type&#x3D;0时，cidr必须是vpc子网网段的子集(不能相等）; Source_type&#x3D;1时，cidr必须指定专线侧网段。
     * @param {number} [limit] 功能说明：每页返回的个数。 取值范围：1~2000。 默认值：2000。
     * @param {string} [floatingIpAddress] 功能说明：弹性公网IP，多个弹性公网IP使用逗号分隔。 取值范围：最大长度1024字节。
     * @param {string} [globalEipAddress] 功能说明：全域弹性公网IP，多个全域弹性公网IP使用逗号分隔。 取值范围：最大长度1024字节。
     * @param {string} [floatingIpId] 功能说明：弹性公网IP的id，多个弹性公网IP使用逗号分隔。 取值范围：最大长度4096字节。
     * @param {string} [globalEipId] 功能说明：全域弹性公网IP的id，多个全域弹性公网IP使用逗号分隔。 取值范围：最大长度4096字节。
     * @param {string} [id] SNAT规则的ID。
     * @param {string} [description] SNAT规则的描述，长度范围小于等于255个字符，不能包含“&lt;”和“&gt;”。
     * @param {Date} [createdAt] SNAT规则的创建时间，格式是yyyy-mm-dd hh:mm:ss.SSSSSS。
     * @param {Array<string>} [natGatewayId] 公网NAT网关实例的ID。
     * @param {string} [networkId] 规则使用的网络id。与cidr参数二选一。
     * @param {number} [sourceType] 0：VPC侧，可以指定network_id 或者cidr 1：专线侧，只能指定cidr 不输入默认为0（VPC）
     * @param {'ACTIVE' | 'PENDING_CREATE' | 'PENDING_UPDATE' | 'PENDING_DELETE' | 'EIP_FREEZED' | 'INACTIVE'} [status] SNAT规则的状态。 取值为:  ACTIVE: 可用 PENDING_CREATE: 创建中 PENDING_UPDATE: 更新中 PENDING_DELETE: 删除中 EIP_FREEZED: EIP冻结 INACTIVE: 不可用
     * @param {string} [marker] 分页查询的起始资源ID，表示从指定资源的下一条记录开始查询。 - 若不传入marker和limit参数，查询结果返回第一页全部资源记录（默认2000条）。 - 若不传入marker参数，limit为10，查询结果返回第1~10条资源记录。 - 若marker为第10条记录的资源ID，limit为10，查询结果返回第11~20条资源记录。 - 若marker为第10条记录的资源ID，不传入limit参数，查询结果返回第11条及之后的资源记录（默认2000条）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNatGatewaySnatRules(listNatGatewaySnatRulesRequest?: ListNatGatewaySnatRulesRequest): Promise<ListNatGatewaySnatRulesResponse> {
        const options = ParamCreater().listNatGatewaySnatRules(listNatGatewaySnatRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SNAT规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SNAT规则列表
     * @param {number} [limit] 功能说明：每页返回的个数。 取值范围：1~2000。 默认值：2000。
     * @param {string} [marker] 功能说明：分页查询起始的资源ID，为空时查询第一页。 值从上一次查询的PageInfo中的next_marker或者previous_marker中获取。
     * @param {boolean} [pageReverse] 是否查询前一页。
     * @param {Array<string>} [id] SNAT规则的ID。
     * @param {Array<string>} [description] SNAT规则的描述。长度范围小于等于255个字符，不能包含“&lt;”和“&gt;”。
     * @param {Array<string>} [gatewayId] 私网NAT网关实例的ID。
     * @param {Array<string>} [cidr] 规则匹配的CIDR。
     * @param {Array<string>} [virsubnetId] 规则匹配的子网的ID。
     * @param {Array<string>} [transitIpId] 中转IP的ID。
     * @param {Array<string>} [transitIpAddress] 中转IP地址。
     * @param {Array<string>} [enterpriseProjectId] 企业项目ID。创建SNAT规则时，关联的企业项目ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPrivateSnats(listPrivateSnatsRequest?: ListPrivateSnatsRequest): Promise<ListPrivateSnatsResponse> {
        const options = ParamCreater().listPrivateSnats(listPrivateSnatsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的SNAT规则详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定的SNAT规则详情
     * @param {string} snatRuleId SNAT规则的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNatGatewaySnatRule(showNatGatewaySnatRuleRequest?: ShowNatGatewaySnatRuleRequest): Promise<ShowNatGatewaySnatRuleResponse> {
        const options = ParamCreater().showNatGatewaySnatRule(showNatGatewaySnatRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的SNAT规则详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定的SNAT规则详情
     * @param {string} snatRuleId SNAT规则的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPrivateSnat(showPrivateSnatRequest?: ShowPrivateSnatRequest): Promise<ShowPrivateSnatResponse> {
        const options = ParamCreater().showPrivateSnat(showPrivateSnatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定的SNAT规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新SNAT规则
     * @param {string} snatRuleId SNAT规则的ID。
     * @param {UpdateNatGatewaySnatRuleRequestOption} updateNatGatewaySnatRuleRequestBody 更新SNAT规则的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNatGatewaySnatRule(updateNatGatewaySnatRuleRequest?: UpdateNatGatewaySnatRuleRequest): Promise<UpdateNatGatewaySnatRuleResponse> {
        const options = ParamCreater().updateNatGatewaySnatRule(updateNatGatewaySnatRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新指定的SNAT规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新SNAT规则
     * @param {string} snatRuleId SNAT规则的ID。
     * @param {UpdatePrivateSnatOptionBody} updatePrivateSnatRequestBody 更新SNAT规则的请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePrivateSnat(updatePrivateSnatRequest?: UpdatePrivateSnatRequest): Promise<UpdatePrivateSnatResponse> {
        const options = ParamCreater().updatePrivateSnat(updatePrivateSnatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * - 为指定中转子网实例批量添加或删除标签
         * - 标签管理服务需要使用该接口批量管理中转子网实例的标签。
         * - 一个中转子网上最多有20个标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateDeleteTransitSubnetTags(batchCreateDeleteTransitSubnetTagsRequest?: BatchCreateDeleteTransitSubnetTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/transit-subnets/{resource_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchCreateDeleteTransitSubnetTagsRequest !== null && batchCreateDeleteTransitSubnetTagsRequest !== undefined) {
                if (batchCreateDeleteTransitSubnetTagsRequest instanceof BatchCreateDeleteTransitSubnetTagsRequest) {
                    resourceId = batchCreateDeleteTransitSubnetTagsRequest.resourceId;
                    body = batchCreateDeleteTransitSubnetTagsRequest.body
                } else {
                    resourceId = batchCreateDeleteTransitSubnetTagsRequest['resource_id'];
                    body = batchCreateDeleteTransitSubnetTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateDeleteTransitSubnetTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建中转子网。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTransitSubnet(createTransitSubnetRequest?: CreateTransitSubnetRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/private-nat/transit-subnets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTransitSubnetRequest !== null && createTransitSubnetRequest !== undefined) {
                if (createTransitSubnetRequest instanceof CreateTransitSubnetRequest) {
                    body = createTransitSubnetRequest.body
                } else {
                    body = createTransitSubnetRequest['body'];
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
         * - 为指定中转子网添加标签
         * - 一个中转子网上最多有20个标签。
         * - 此接口为幂等接口：
         * - 创建时，如果创建的标签已经存在（key相同），则覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTransitSubnetTag(createTransitSubnetTagRequest?: CreateTransitSubnetTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/transit-subnets/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (createTransitSubnetTagRequest !== null && createTransitSubnetTagRequest !== undefined) {
                if (createTransitSubnetTagRequest instanceof CreateTransitSubnetTagRequest) {
                    resourceId = createTransitSubnetTagRequest.resourceId;
                    body = createTransitSubnetTagRequest.body
                } else {
                    resourceId = createTransitSubnetTagRequest['resource_id'];
                    body = createTransitSubnetTagRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createTransitSubnetTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除中转子网。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTransitSubnet(deleteTransitSubnetRequest?: DeleteTransitSubnetRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/private-nat/transit-subnets/{transit_subnet_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let transitSubnetId;

            if (deleteTransitSubnetRequest !== null && deleteTransitSubnetRequest !== undefined) {
                if (deleteTransitSubnetRequest instanceof DeleteTransitSubnetRequest) {
                    transitSubnetId = deleteTransitSubnetRequest.transitSubnetId;
                } else {
                    transitSubnetId = deleteTransitSubnetRequest['transit_subnet_id'];
                }
            }

        
            if (transitSubnetId === null || transitSubnetId === undefined) {
            throw new RequiredError('transitSubnetId','Required parameter transitSubnetId was null or undefined when calling deleteTransitSubnet.');
            }

            options.pathParams = { 'transit_subnet_id': transitSubnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 幂等接口：
         * - 删除时，不对标签字符集做校验，调用接口前必须要做encodeURI，服务端需要对接口uri做decodeURI。删除的key不存在报404，key不能为空或者空字符串。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTransitSubnetTag(deleteTransitSubnetTagRequest?: DeleteTransitSubnetTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/transit-subnets/{resource_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let key;
            
            let resourceId;

            if (deleteTransitSubnetTagRequest !== null && deleteTransitSubnetTagRequest !== undefined) {
                if (deleteTransitSubnetTagRequest instanceof DeleteTransitSubnetTagRequest) {
                    key = deleteTransitSubnetTagRequest.key;
                    resourceId = deleteTransitSubnetTagRequest.resourceId;
                } else {
                    key = deleteTransitSubnetTagRequest['key'];
                    resourceId = deleteTransitSubnetTagRequest['resource_id'];
                }
            }

        
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteTransitSubnetTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteTransitSubnetTag.');
            }

            options.pathParams = { 'key': key,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询中转子网列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTransitSubnet(listTransitSubnetRequest?: ListTransitSubnetRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/private-nat/transit-subnets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let name;
            
            let description;
            
            let virsubnetProjectId;
            
            let vpcId;
            
            let virsubnetId;
            
            let status;
            
            let limit;
            
            let marker;
            
            let pageReverse;

            if (listTransitSubnetRequest !== null && listTransitSubnetRequest !== undefined) {
                if (listTransitSubnetRequest instanceof ListTransitSubnetRequest) {
                    id = listTransitSubnetRequest.id;
                    name = listTransitSubnetRequest.name;
                    description = listTransitSubnetRequest.description;
                    virsubnetProjectId = listTransitSubnetRequest.virsubnetProjectId;
                    vpcId = listTransitSubnetRequest.vpcId;
                    virsubnetId = listTransitSubnetRequest.virsubnetId;
                    status = listTransitSubnetRequest.status;
                    limit = listTransitSubnetRequest.limit;
                    marker = listTransitSubnetRequest.marker;
                    pageReverse = listTransitSubnetRequest.pageReverse;
                } else {
                    id = listTransitSubnetRequest['id'];
                    name = listTransitSubnetRequest['name'];
                    description = listTransitSubnetRequest['description'];
                    virsubnetProjectId = listTransitSubnetRequest['virsubnet_project_id'];
                    vpcId = listTransitSubnetRequest['vpc_id'];
                    virsubnetId = listTransitSubnetRequest['virsubnet_id'];
                    status = listTransitSubnetRequest['status'];
                    limit = listTransitSubnetRequest['limit'];
                    marker = listTransitSubnetRequest['marker'];
                    pageReverse = listTransitSubnetRequest['page_reverse'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (virsubnetProjectId !== null && virsubnetProjectId !== undefined) {
                localVarQueryParameter['virsubnet_project_id'] = virsubnetProjectId;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (virsubnetId !== null && virsubnetId !== undefined) {
                localVarQueryParameter['virsubnet_id'] = virsubnetId;
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
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询租户在指定Project的所有中转子网标签集合。
         * - 标签管理服务需要能够列出当前租户全部已使用的中转子网标签集合，为打中转子网标签和过滤中转子网实例时提供标签联想功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTransitSubnetTags() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/transit-subnets/tags",
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
         * - 使用标签过滤中转子网实例。
         * - 标签管理服务需要提供按标签过滤中转子网服务实例并汇总显示在列表中，需要中转子网服务提供查询能力。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTransitSubnetsByTags(listTransitSubnetsByTagsRequest?: ListTransitSubnetsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/transit-subnets/resource_instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listTransitSubnetsByTagsRequest !== null && listTransitSubnetsByTagsRequest !== undefined) {
                if (listTransitSubnetsByTagsRequest instanceof ListTransitSubnetsByTagsRequest) {
                    body = listTransitSubnetsByTagsRequest.body
                } else {
                    body = listTransitSubnetsByTagsRequest['body'];
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
         * 查询指定的中转子网详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTransitSubnet(showTransitSubnetRequest?: ShowTransitSubnetRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/private-nat/transit-subnets/{transit_subnet_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let transitSubnetId;

            if (showTransitSubnetRequest !== null && showTransitSubnetRequest !== undefined) {
                if (showTransitSubnetRequest instanceof ShowTransitSubnetRequest) {
                    transitSubnetId = showTransitSubnetRequest.transitSubnetId;
                } else {
                    transitSubnetId = showTransitSubnetRequest['transit_subnet_id'];
                }
            }

        
            if (transitSubnetId === null || transitSubnetId === undefined) {
            throw new RequiredError('transitSubnetId','Required parameter transitSubnetId was null or undefined when calling showTransitSubnet.');
            }

            options.pathParams = { 'transit_subnet_id': transitSubnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询指定中转子网实例的标签信息。
         * - 标签管理服务需要使用该接口查询指定中转子网实例的全部标签数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTransitSubnetTags(showTransitSubnetTagsRequest?: ShowTransitSubnetTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/transit-subnets/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (showTransitSubnetTagsRequest !== null && showTransitSubnetTagsRequest !== undefined) {
                if (showTransitSubnetTagsRequest instanceof ShowTransitSubnetTagsRequest) {
                    resourceId = showTransitSubnetTagsRequest.resourceId;
                } else {
                    resourceId = showTransitSubnetTagsRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showTransitSubnetTags.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定的中转子网。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTransitSubnet(updateTransitSubnetRequest?: UpdateTransitSubnetRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/private-nat/transit-subnets/{transit_subnet_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let transitSubnetId;

            if (updateTransitSubnetRequest !== null && updateTransitSubnetRequest !== undefined) {
                if (updateTransitSubnetRequest instanceof UpdateTransitSubnetRequest) {
                    transitSubnetId = updateTransitSubnetRequest.transitSubnetId;
                    body = updateTransitSubnetRequest.body
                } else {
                    transitSubnetId = updateTransitSubnetRequest['transit_subnet_id'];
                    body = updateTransitSubnetRequest['body'];
                }
            }

        
            if (transitSubnetId === null || transitSubnetId === undefined) {
            throw new RequiredError('transitSubnetId','Required parameter transitSubnetId was null or undefined when calling updateTransitSubnet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'transit_subnet_id': transitSubnetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建DNAT规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateNatGatewayDnatRules(batchCreateNatGatewayDnatRulesRequest?: BatchCreateNatGatewayDnatRulesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/dnat_rules/batch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchCreateNatGatewayDnatRulesRequest !== null && batchCreateNatGatewayDnatRulesRequest !== undefined) {
                if (batchCreateNatGatewayDnatRulesRequest instanceof BatchCreateNatGatewayDnatRulesRequest) {
                    body = batchCreateNatGatewayDnatRulesRequest.body
                } else {
                    body = batchCreateNatGatewayDnatRulesRequest['body'];
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
         * 创建DNAT规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNatGatewayDnatRule(createNatGatewayDnatRuleRequest?: CreateNatGatewayDnatRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/dnat_rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createNatGatewayDnatRuleRequest !== null && createNatGatewayDnatRuleRequest !== undefined) {
                if (createNatGatewayDnatRuleRequest instanceof CreateNatGatewayDnatRuleRequest) {
                    body = createNatGatewayDnatRuleRequest.body
                } else {
                    body = createNatGatewayDnatRuleRequest['body'];
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
         * 创建DNAT规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrivateDnat(createPrivateDnatRequest?: CreatePrivateDnatRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/private-nat/dnat-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPrivateDnatRequest !== null && createPrivateDnatRequest !== undefined) {
                if (createPrivateDnatRequest instanceof CreatePrivateDnatRequest) {
                    body = createPrivateDnatRequest.body
                } else {
                    body = createPrivateDnatRequest['body'];
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
         * 删除指定的DNAT规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNatGatewayDnatRule(deleteNatGatewayDnatRuleRequest?: DeleteNatGatewayDnatRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/nat_gateways/{nat_gateway_id}/dnat_rules/{dnat_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let natGatewayId;
            
            let dnatRuleId;

            if (deleteNatGatewayDnatRuleRequest !== null && deleteNatGatewayDnatRuleRequest !== undefined) {
                if (deleteNatGatewayDnatRuleRequest instanceof DeleteNatGatewayDnatRuleRequest) {
                    natGatewayId = deleteNatGatewayDnatRuleRequest.natGatewayId;
                    dnatRuleId = deleteNatGatewayDnatRuleRequest.dnatRuleId;
                } else {
                    natGatewayId = deleteNatGatewayDnatRuleRequest['nat_gateway_id'];
                    dnatRuleId = deleteNatGatewayDnatRuleRequest['dnat_rule_id'];
                }
            }

        
            if (natGatewayId === null || natGatewayId === undefined) {
            throw new RequiredError('natGatewayId','Required parameter natGatewayId was null or undefined when calling deleteNatGatewayDnatRule.');
            }
            if (dnatRuleId === null || dnatRuleId === undefined) {
            throw new RequiredError('dnatRuleId','Required parameter dnatRuleId was null or undefined when calling deleteNatGatewayDnatRule.');
            }

            options.pathParams = { 'nat_gateway_id': natGatewayId,'dnat_rule_id': dnatRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的DNAT规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePrivateDnat(deletePrivateDnatRequest?: DeletePrivateDnatRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/private-nat/dnat-rules/{dnat_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let dnatRuleId;

            if (deletePrivateDnatRequest !== null && deletePrivateDnatRequest !== undefined) {
                if (deletePrivateDnatRequest instanceof DeletePrivateDnatRequest) {
                    dnatRuleId = deletePrivateDnatRequest.dnatRuleId;
                } else {
                    dnatRuleId = deletePrivateDnatRequest['dnat_rule_id'];
                }
            }

        
            if (dnatRuleId === null || dnatRuleId === undefined) {
            throw new RequiredError('dnatRuleId','Required parameter dnatRuleId was null or undefined when calling deletePrivateDnat.');
            }

            options.pathParams = { 'dnat_rule_id': dnatRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DNAT规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNatGatewayDnatRules(listNatGatewayDnatRulesRequest?: ListNatGatewayDnatRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/dnat_rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let adminStateUp;
            
            let externalServicePort;
            
            let floatingIpAddress;
            
            let globalEipAddress;
            
            let status;
            
            let floatingIpId;
            
            let globalEipId;
            
            let internalServicePort;
            
            let limit;
            
            let id;
            
            let description;
            
            let createdAt;
            
            let natGatewayId;
            
            let portId;
            
            let privateIp;
            
            let protocol;
            
            let marker;

            if (listNatGatewayDnatRulesRequest !== null && listNatGatewayDnatRulesRequest !== undefined) {
                if (listNatGatewayDnatRulesRequest instanceof ListNatGatewayDnatRulesRequest) {
                    adminStateUp = listNatGatewayDnatRulesRequest.adminStateUp;
                    externalServicePort = listNatGatewayDnatRulesRequest.externalServicePort;
                    floatingIpAddress = listNatGatewayDnatRulesRequest.floatingIpAddress;
                    globalEipAddress = listNatGatewayDnatRulesRequest.globalEipAddress;
                    status = listNatGatewayDnatRulesRequest.status;
                    floatingIpId = listNatGatewayDnatRulesRequest.floatingIpId;
                    globalEipId = listNatGatewayDnatRulesRequest.globalEipId;
                    internalServicePort = listNatGatewayDnatRulesRequest.internalServicePort;
                    limit = listNatGatewayDnatRulesRequest.limit;
                    id = listNatGatewayDnatRulesRequest.id;
                    description = listNatGatewayDnatRulesRequest.description;
                    createdAt = listNatGatewayDnatRulesRequest.createdAt;
                    natGatewayId = listNatGatewayDnatRulesRequest.natGatewayId;
                    portId = listNatGatewayDnatRulesRequest.portId;
                    privateIp = listNatGatewayDnatRulesRequest.privateIp;
                    protocol = listNatGatewayDnatRulesRequest.protocol;
                    marker = listNatGatewayDnatRulesRequest.marker;
                } else {
                    adminStateUp = listNatGatewayDnatRulesRequest['admin_state_up'];
                    externalServicePort = listNatGatewayDnatRulesRequest['external_service_port'];
                    floatingIpAddress = listNatGatewayDnatRulesRequest['floating_ip_address'];
                    globalEipAddress = listNatGatewayDnatRulesRequest['global_eip_address'];
                    status = listNatGatewayDnatRulesRequest['status'];
                    floatingIpId = listNatGatewayDnatRulesRequest['floating_ip_id'];
                    globalEipId = listNatGatewayDnatRulesRequest['global_eip_id'];
                    internalServicePort = listNatGatewayDnatRulesRequest['internal_service_port'];
                    limit = listNatGatewayDnatRulesRequest['limit'];
                    id = listNatGatewayDnatRulesRequest['id'];
                    description = listNatGatewayDnatRulesRequest['description'];
                    createdAt = listNatGatewayDnatRulesRequest['created_at'];
                    natGatewayId = listNatGatewayDnatRulesRequest['nat_gateway_id'];
                    portId = listNatGatewayDnatRulesRequest['port_id'];
                    privateIp = listNatGatewayDnatRulesRequest['private_ip'];
                    protocol = listNatGatewayDnatRulesRequest['protocol'];
                    marker = listNatGatewayDnatRulesRequest['marker'];
                }
            }

        
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (externalServicePort !== null && externalServicePort !== undefined) {
                localVarQueryParameter['external_service_port'] = externalServicePort;
            }
            if (floatingIpAddress !== null && floatingIpAddress !== undefined) {
                localVarQueryParameter['floating_ip_address'] = floatingIpAddress;
            }
            if (globalEipAddress !== null && globalEipAddress !== undefined) {
                localVarQueryParameter['global_eip_address'] = globalEipAddress;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (floatingIpId !== null && floatingIpId !== undefined) {
                localVarQueryParameter['floating_ip_id'] = floatingIpId;
            }
            if (globalEipId !== null && globalEipId !== undefined) {
                localVarQueryParameter['global_eip_id'] = globalEipId;
            }
            if (internalServicePort !== null && internalServicePort !== undefined) {
                localVarQueryParameter['internal_service_port'] = internalServicePort;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (createdAt !== null && createdAt !== undefined) {
                localVarQueryParameter['created_at'] = createdAt;
            }
            if (natGatewayId !== null && natGatewayId !== undefined) {
                localVarQueryParameter['nat_gateway_id'] = natGatewayId;
            }
            if (portId !== null && portId !== undefined) {
                localVarQueryParameter['port_id'] = portId;
            }
            if (privateIp !== null && privateIp !== undefined) {
                localVarQueryParameter['private_ip'] = privateIp;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询DNAT规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivateDnats(listPrivateDnatsRequest?: ListPrivateDnatsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/private-nat/dnat-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let enterpriseProjectId;
            
            let description;
            
            let gatewayId;
            
            let transitIpId;
            
            let networkInterfaceId;
            
            let type;
            
            let privateIpAddress;
            
            let protocol;
            
            let internalServicePort;
            
            let transitServicePort;
            
            let transitIpAddress;

            if (listPrivateDnatsRequest !== null && listPrivateDnatsRequest !== undefined) {
                if (listPrivateDnatsRequest instanceof ListPrivateDnatsRequest) {
                    limit = listPrivateDnatsRequest.limit;
                    marker = listPrivateDnatsRequest.marker;
                    pageReverse = listPrivateDnatsRequest.pageReverse;
                    id = listPrivateDnatsRequest.id;
                    enterpriseProjectId = listPrivateDnatsRequest.enterpriseProjectId;
                    description = listPrivateDnatsRequest.description;
                    gatewayId = listPrivateDnatsRequest.gatewayId;
                    transitIpId = listPrivateDnatsRequest.transitIpId;
                    networkInterfaceId = listPrivateDnatsRequest.networkInterfaceId;
                    type = listPrivateDnatsRequest.type;
                    privateIpAddress = listPrivateDnatsRequest.privateIpAddress;
                    protocol = listPrivateDnatsRequest.protocol;
                    internalServicePort = listPrivateDnatsRequest.internalServicePort;
                    transitServicePort = listPrivateDnatsRequest.transitServicePort;
                    transitIpAddress = listPrivateDnatsRequest.transitIpAddress;
                } else {
                    limit = listPrivateDnatsRequest['limit'];
                    marker = listPrivateDnatsRequest['marker'];
                    pageReverse = listPrivateDnatsRequest['page_reverse'];
                    id = listPrivateDnatsRequest['id'];
                    enterpriseProjectId = listPrivateDnatsRequest['enterprise_project_id'];
                    description = listPrivateDnatsRequest['description'];
                    gatewayId = listPrivateDnatsRequest['gateway_id'];
                    transitIpId = listPrivateDnatsRequest['transit_ip_id'];
                    networkInterfaceId = listPrivateDnatsRequest['network_interface_id'];
                    type = listPrivateDnatsRequest['type'];
                    privateIpAddress = listPrivateDnatsRequest['private_ip_address'];
                    protocol = listPrivateDnatsRequest['protocol'];
                    internalServicePort = listPrivateDnatsRequest['internal_service_port'];
                    transitServicePort = listPrivateDnatsRequest['transit_service_port'];
                    transitIpAddress = listPrivateDnatsRequest['transit_ip_address'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (gatewayId !== null && gatewayId !== undefined) {
                localVarQueryParameter['gateway_id'] = gatewayId;
            }
            if (transitIpId !== null && transitIpId !== undefined) {
                localVarQueryParameter['transit_ip_id'] = transitIpId;
            }
            if (networkInterfaceId !== null && networkInterfaceId !== undefined) {
                localVarQueryParameter['network_interface_id'] = networkInterfaceId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (privateIpAddress !== null && privateIpAddress !== undefined) {
                localVarQueryParameter['private_ip_address'] = privateIpAddress;
            }
            if (protocol !== null && protocol !== undefined) {
                localVarQueryParameter['protocol'] = protocol;
            }
            if (internalServicePort !== null && internalServicePort !== undefined) {
                localVarQueryParameter['internal_service_port'] = internalServicePort;
            }
            if (transitServicePort !== null && transitServicePort !== undefined) {
                localVarQueryParameter['transit_service_port'] = transitServicePort;
            }
            if (transitIpAddress !== null && transitIpAddress !== undefined) {
                localVarQueryParameter['transit_ip_address'] = transitIpAddress;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定的DNAT规则详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNatGatewayDnatRule(showNatGatewayDnatRuleRequest?: ShowNatGatewayDnatRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/dnat_rules/{dnat_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let dnatRuleId;

            if (showNatGatewayDnatRuleRequest !== null && showNatGatewayDnatRuleRequest !== undefined) {
                if (showNatGatewayDnatRuleRequest instanceof ShowNatGatewayDnatRuleRequest) {
                    dnatRuleId = showNatGatewayDnatRuleRequest.dnatRuleId;
                } else {
                    dnatRuleId = showNatGatewayDnatRuleRequest['dnat_rule_id'];
                }
            }

        
            if (dnatRuleId === null || dnatRuleId === undefined) {
            throw new RequiredError('dnatRuleId','Required parameter dnatRuleId was null or undefined when calling showNatGatewayDnatRule.');
            }

            options.pathParams = { 'dnat_rule_id': dnatRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定的DNAT规则详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateDnat(showPrivateDnatRequest?: ShowPrivateDnatRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/private-nat/dnat-rules/{dnat_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let dnatRuleId;

            if (showPrivateDnatRequest !== null && showPrivateDnatRequest !== undefined) {
                if (showPrivateDnatRequest instanceof ShowPrivateDnatRequest) {
                    dnatRuleId = showPrivateDnatRequest.dnatRuleId;
                } else {
                    dnatRuleId = showPrivateDnatRequest['dnat_rule_id'];
                }
            }

        
            if (dnatRuleId === null || dnatRuleId === undefined) {
            throw new RequiredError('dnatRuleId','Required parameter dnatRuleId was null or undefined when calling showPrivateDnat.');
            }

            options.pathParams = { 'dnat_rule_id': dnatRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定的DNAT规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNatGatewayDnatRule(updateNatGatewayDnatRuleRequest?: UpdateNatGatewayDnatRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/dnat_rules/{dnat_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let dnatRuleId;

            if (updateNatGatewayDnatRuleRequest !== null && updateNatGatewayDnatRuleRequest !== undefined) {
                if (updateNatGatewayDnatRuleRequest instanceof UpdateNatGatewayDnatRuleRequest) {
                    dnatRuleId = updateNatGatewayDnatRuleRequest.dnatRuleId;
                    body = updateNatGatewayDnatRuleRequest.body
                } else {
                    dnatRuleId = updateNatGatewayDnatRuleRequest['dnat_rule_id'];
                    body = updateNatGatewayDnatRuleRequest['body'];
                }
            }

        
            if (dnatRuleId === null || dnatRuleId === undefined) {
            throw new RequiredError('dnatRuleId','Required parameter dnatRuleId was null or undefined when calling updateNatGatewayDnatRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'dnat_rule_id': dnatRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定的DNAT规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePrivateDnat(updatePrivateDnatRequest?: UpdatePrivateDnatRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/private-nat/dnat-rules/{dnat_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let dnatRuleId;

            if (updatePrivateDnatRequest !== null && updatePrivateDnatRequest !== undefined) {
                if (updatePrivateDnatRequest instanceof UpdatePrivateDnatRequest) {
                    dnatRuleId = updatePrivateDnatRequest.dnatRuleId;
                    body = updatePrivateDnatRequest.body
                } else {
                    dnatRuleId = updatePrivateDnatRequest['dnat_rule_id'];
                    body = updatePrivateDnatRequest['body'];
                }
            }

        
            if (dnatRuleId === null || dnatRuleId === undefined) {
            throw new RequiredError('dnatRuleId','Required parameter dnatRuleId was null or undefined when calling updatePrivateDnat.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'dnat_rule_id': dnatRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 为指定中转IP实例批量添加或删除标签
         * - 标签管理服务需要使用该接口批量管理中转IP实例的标签。
         * - 一个中转IP上最多有10个标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateDeleteTransitIpTags(batchCreateDeleteTransitIpTagsRequest?: BatchCreateDeleteTransitIpTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/transit-ips/{resource_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchCreateDeleteTransitIpTagsRequest !== null && batchCreateDeleteTransitIpTagsRequest !== undefined) {
                if (batchCreateDeleteTransitIpTagsRequest instanceof BatchCreateDeleteTransitIpTagsRequest) {
                    resourceId = batchCreateDeleteTransitIpTagsRequest.resourceId;
                    body = batchCreateDeleteTransitIpTagsRequest.body
                } else {
                    resourceId = batchCreateDeleteTransitIpTagsRequest['resource_id'];
                    body = batchCreateDeleteTransitIpTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateDeleteTransitIpTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 一个中转IP上最多有10个标签。
         * - 此接口为幂等接口：
         * - 创建时，如果创建的标签已经存在（key相同），则覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTransitIpTag(createTransitIpTagRequest?: CreateTransitIpTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/transit-ips/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (createTransitIpTagRequest !== null && createTransitIpTagRequest !== undefined) {
                if (createTransitIpTagRequest instanceof CreateTransitIpTagRequest) {
                    resourceId = createTransitIpTagRequest.resourceId;
                    body = createTransitIpTagRequest.body
                } else {
                    resourceId = createTransitIpTagRequest['resource_id'];
                    body = createTransitIpTagRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createTransitIpTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 幂等接口：
         * - 删除时，不对标签字符集做校验，调用接口前必须要做encodeURI，服务端需要对接口uri做decodeURI。删除的key不存在报404，key不能为空或者空字符串。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTransitIpTag(deleteTransitIpTagRequest?: DeleteTransitIpTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/transit-ips/{resource_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let key;
            
            let resourceId;

            if (deleteTransitIpTagRequest !== null && deleteTransitIpTagRequest !== undefined) {
                if (deleteTransitIpTagRequest instanceof DeleteTransitIpTagRequest) {
                    key = deleteTransitIpTagRequest.key;
                    resourceId = deleteTransitIpTagRequest.resourceId;
                } else {
                    key = deleteTransitIpTagRequest['key'];
                    resourceId = deleteTransitIpTagRequest['resource_id'];
                }
            }

        
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteTransitIpTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteTransitIpTag.');
            }

            options.pathParams = { 'key': key,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询租户在指定Project和实例类型的所有中转IP标签集合。
         * - 标签管理服务需要能够列出当前租户全部已使用的中转IP标签集合，为打中转IP标签和过滤中转IP实例时提供标签联想功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTransitIpTags() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/transit-ips/tags",
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
         * - 使用标签过滤中转IP实例。
         * - 标签管理服务需要提供按标签过滤中转IP服务实例并汇总显示在列表中，需要中转IP服务提供查询能力。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTransitIpsByTags(listTransitIpsByTagsRequest?: ListTransitIpsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/transit-ips/resource_instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listTransitIpsByTagsRequest !== null && listTransitIpsByTagsRequest !== undefined) {
                if (listTransitIpsByTagsRequest instanceof ListTransitIpsByTagsRequest) {
                    body = listTransitIpsByTagsRequest.body
                } else {
                    body = listTransitIpsByTagsRequest['body'];
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
         * - 查询指定中转IP实例的标签信息。
         * - 标签管理服务需要使用该接口查询指定中转IP实例的全部标签数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTransitIpTags(showTransitIpTagsRequest?: ShowTransitIpTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/transit-ips/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (showTransitIpTagsRequest !== null && showTransitIpTagsRequest !== undefined) {
                if (showTransitIpTagsRequest instanceof ShowTransitIpTagsRequest) {
                    resourceId = showTransitIpTagsRequest.resourceId;
                } else {
                    resourceId = showTransitIpTagsRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showTransitIpTags.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 为指定公网NAT网关实例批量添加或删除标签。 
         * - 标签管理服务需要使用该接口批量管理实例的标签。 
         * - 一个资源上最多有10个标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateDeleteNatGatewayTag(batchCreateDeleteNatGatewayTagRequest?: BatchCreateDeleteNatGatewayTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/nat_gateways/{nat_gateway_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let natGatewayId;

            if (batchCreateDeleteNatGatewayTagRequest !== null && batchCreateDeleteNatGatewayTagRequest !== undefined) {
                if (batchCreateDeleteNatGatewayTagRequest instanceof BatchCreateDeleteNatGatewayTagRequest) {
                    natGatewayId = batchCreateDeleteNatGatewayTagRequest.natGatewayId;
                    body = batchCreateDeleteNatGatewayTagRequest.body
                } else {
                    natGatewayId = batchCreateDeleteNatGatewayTagRequest['nat_gateway_id'];
                    body = batchCreateDeleteNatGatewayTagRequest['body'];
                }
            }

        
            if (natGatewayId === null || natGatewayId === undefined) {
            throw new RequiredError('natGatewayId','Required parameter natGatewayId was null or undefined when calling batchCreateDeleteNatGatewayTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'nat_gateway_id': natGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 为指定私网NAT网关实例批量添加或删除标签
         * - 标签管理服务需要使用该接口批量管理私网NAT网关实例的标签。
         * - 一个私网NAT网关上最多有10个标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateDeletePrivateNatTags(batchCreateDeletePrivateNatTagsRequest?: BatchCreateDeletePrivateNatTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/private-nat-gateways/{resource_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchCreateDeletePrivateNatTagsRequest !== null && batchCreateDeletePrivateNatTagsRequest !== undefined) {
                if (batchCreateDeletePrivateNatTagsRequest instanceof BatchCreateDeletePrivateNatTagsRequest) {
                    resourceId = batchCreateDeletePrivateNatTagsRequest.resourceId;
                    body = batchCreateDeletePrivateNatTagsRequest.body
                } else {
                    resourceId = batchCreateDeletePrivateNatTagsRequest['resource_id'];
                    body = batchCreateDeletePrivateNatTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateDeletePrivateNatTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建公网NAT网关实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNatGateway(createNatGatewayRequest?: CreateNatGatewayRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/nat_gateways",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createNatGatewayRequest !== null && createNatGatewayRequest !== undefined) {
                if (createNatGatewayRequest instanceof CreateNatGatewayRequest) {
                    body = createNatGatewayRequest.body
                } else {
                    body = createNatGatewayRequest['body'];
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
         * - 添加公网NAT网关资源标签。一个资源上最多有10个标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNatGatewayTag(createNatGatewayTagRequest?: CreateNatGatewayTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/nat_gateways/{nat_gateway_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let natGatewayId;

            if (createNatGatewayTagRequest !== null && createNatGatewayTagRequest !== undefined) {
                if (createNatGatewayTagRequest instanceof CreateNatGatewayTagRequest) {
                    natGatewayId = createNatGatewayTagRequest.natGatewayId;
                    body = createNatGatewayTagRequest.body
                } else {
                    natGatewayId = createNatGatewayTagRequest['nat_gateway_id'];
                    body = createNatGatewayTagRequest['body'];
                }
            }

        
            if (natGatewayId === null || natGatewayId === undefined) {
            throw new RequiredError('natGatewayId','Required parameter natGatewayId was null or undefined when calling createNatGatewayTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'nat_gateway_id': natGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建私网NAT网关实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrivateNat(createPrivateNatRequest?: CreatePrivateNatRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/private-nat/gateways",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPrivateNatRequest !== null && createPrivateNatRequest !== undefined) {
                if (createPrivateNatRequest instanceof CreatePrivateNatRequest) {
                    body = createPrivateNatRequest.body
                } else {
                    body = createPrivateNatRequest['body'];
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
         * - 一个私网NAT网关上最多有10个标签。
         * - 此接口为幂等接口：
         * - 创建时，如果创建的标签已经存在（key相同），则覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrivateNatTag(createPrivateNatTagRequest?: CreatePrivateNatTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/private-nat-gateways/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (createPrivateNatTagRequest !== null && createPrivateNatTagRequest !== undefined) {
                if (createPrivateNatTagRequest instanceof CreatePrivateNatTagRequest) {
                    resourceId = createPrivateNatTagRequest.resourceId;
                    body = createPrivateNatTagRequest.body
                } else {
                    resourceId = createPrivateNatTagRequest['resource_id'];
                    body = createPrivateNatTagRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createPrivateNatTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除公网NAT网关实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNatGateway(deleteNatGatewayRequest?: DeleteNatGatewayRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/nat_gateways/{nat_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let natGatewayId;

            if (deleteNatGatewayRequest !== null && deleteNatGatewayRequest !== undefined) {
                if (deleteNatGatewayRequest instanceof DeleteNatGatewayRequest) {
                    natGatewayId = deleteNatGatewayRequest.natGatewayId;
                } else {
                    natGatewayId = deleteNatGatewayRequest['nat_gateway_id'];
                }
            }

        
            if (natGatewayId === null || natGatewayId === undefined) {
            throw new RequiredError('natGatewayId','Required parameter natGatewayId was null or undefined when calling deleteNatGateway.');
            }

            options.pathParams = { 'nat_gateway_id': natGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 删除指定公网NAT网关资源实例的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNatGatewayTag(deleteNatGatewayTagRequest?: DeleteNatGatewayTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/nat_gateways/{nat_gateway_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let natGatewayId;
            
            let key;

            if (deleteNatGatewayTagRequest !== null && deleteNatGatewayTagRequest !== undefined) {
                if (deleteNatGatewayTagRequest instanceof DeleteNatGatewayTagRequest) {
                    natGatewayId = deleteNatGatewayTagRequest.natGatewayId;
                    key = deleteNatGatewayTagRequest.key;
                } else {
                    natGatewayId = deleteNatGatewayTagRequest['nat_gateway_id'];
                    key = deleteNatGatewayTagRequest['key'];
                }
            }

        
            if (natGatewayId === null || natGatewayId === undefined) {
            throw new RequiredError('natGatewayId','Required parameter natGatewayId was null or undefined when calling deleteNatGatewayTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteNatGatewayTag.');
            }

            options.pathParams = { 'nat_gateway_id': natGatewayId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除私网NAT网关实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePrivateNat(deletePrivateNatRequest?: DeletePrivateNatRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/private-nat/gateways/{gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let gatewayId;

            if (deletePrivateNatRequest !== null && deletePrivateNatRequest !== undefined) {
                if (deletePrivateNatRequest instanceof DeletePrivateNatRequest) {
                    gatewayId = deletePrivateNatRequest.gatewayId;
                } else {
                    gatewayId = deletePrivateNatRequest['gateway_id'];
                }
            }

        
            if (gatewayId === null || gatewayId === undefined) {
            throw new RequiredError('gatewayId','Required parameter gatewayId was null or undefined when calling deletePrivateNat.');
            }

            options.pathParams = { 'gateway_id': gatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 幂等接口：
         * - 删除时，不对标签字符集做校验，调用接口前必须要做encodeURI，服务端需要对接口uri做decodeURI。删除的key不存在报404，key不能为空或者空字符串。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePrivateNatTag(deletePrivateNatTagRequest?: DeletePrivateNatTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/private-nat-gateways/{resource_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let key;
            
            let resourceId;

            if (deletePrivateNatTagRequest !== null && deletePrivateNatTagRequest !== undefined) {
                if (deletePrivateNatTagRequest instanceof DeletePrivateNatTagRequest) {
                    key = deletePrivateNatTagRequest.key;
                    resourceId = deletePrivateNatTagRequest.resourceId;
                } else {
                    key = deletePrivateNatTagRequest['key'];
                    resourceId = deletePrivateNatTagRequest['resource_id'];
                }
            }

        
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deletePrivateNatTag.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deletePrivateNatTag.');
            }

            options.pathParams = { 'key': key,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 使用标签过滤公网NAT网关资源实例。
         * - 标签管理服务需要提供按标签过滤公网NAT网关服务实例并汇总显示在列表中，需要公网NAT网关服务提供查询能力。
         * - 资源默认按照创建时间倒序，资源tag也按照创建时间倒序。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNatGatewayByTag(listNatGatewayByTagRequest?: ListNatGatewayByTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/nat_gateways/resource_instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listNatGatewayByTagRequest !== null && listNatGatewayByTagRequest !== undefined) {
                if (listNatGatewayByTagRequest instanceof ListNatGatewayByTagRequest) {
                    body = listNatGatewayByTagRequest.body
                } else {
                    body = listNatGatewayByTagRequest['body'];
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
         * 支持创建的NAT网关规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNatGatewaySpecs() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/nat_gateway_specs",
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
         * - 查询租户在指定项目和公网NAT网关实例类型的所有标签集合。
         * - 标签管理服务需要能够列出当前租户全部已使用的标签集合，为各服务Console打标签和过滤实例时提供标签联想功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNatGatewayTag() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/nat_gateways/tags",
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
         * 查询公网NAT网关实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNatGateways(listNatGatewaysRequest?: ListNatGatewaysRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/nat_gateways",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let tenantId;
            
            let id;
            
            let enterpriseProjectId;
            
            let description;
            
            let createdAt;
            
            let name;
            
            let status;
            
            let spec;
            
            let adminStateUp;
            
            let internalNetworkId;
            
            let routerId;
            
            let limit;
            
            let marker;
            
            let sortKey;
            
            let sortDir;

            if (listNatGatewaysRequest !== null && listNatGatewaysRequest !== undefined) {
                if (listNatGatewaysRequest instanceof ListNatGatewaysRequest) {
                    tenantId = listNatGatewaysRequest.tenantId;
                    id = listNatGatewaysRequest.id;
                    enterpriseProjectId = listNatGatewaysRequest.enterpriseProjectId;
                    description = listNatGatewaysRequest.description;
                    createdAt = listNatGatewaysRequest.createdAt;
                    name = listNatGatewaysRequest.name;
                    status = listNatGatewaysRequest.status;
                    spec = listNatGatewaysRequest.spec;
                    adminStateUp = listNatGatewaysRequest.adminStateUp;
                    internalNetworkId = listNatGatewaysRequest.internalNetworkId;
                    routerId = listNatGatewaysRequest.routerId;
                    limit = listNatGatewaysRequest.limit;
                    marker = listNatGatewaysRequest.marker;
                    sortKey = listNatGatewaysRequest.sortKey;
                    sortDir = listNatGatewaysRequest.sortDir;
                } else {
                    tenantId = listNatGatewaysRequest['tenant_id'];
                    id = listNatGatewaysRequest['id'];
                    enterpriseProjectId = listNatGatewaysRequest['enterprise_project_id'];
                    description = listNatGatewaysRequest['description'];
                    createdAt = listNatGatewaysRequest['created_at'];
                    name = listNatGatewaysRequest['name'];
                    status = listNatGatewaysRequest['status'];
                    spec = listNatGatewaysRequest['spec'];
                    adminStateUp = listNatGatewaysRequest['admin_state_up'];
                    internalNetworkId = listNatGatewaysRequest['internal_network_id'];
                    routerId = listNatGatewaysRequest['router_id'];
                    limit = listNatGatewaysRequest['limit'];
                    marker = listNatGatewaysRequest['marker'];
                    sortKey = listNatGatewaysRequest['sort_key'];
                    sortDir = listNatGatewaysRequest['sort_dir'];
                }
            }

        
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (createdAt !== null && createdAt !== undefined) {
                localVarQueryParameter['created_at'] = createdAt;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (spec !== null && spec !== undefined) {
                localVarQueryParameter['spec'] = spec;
            }
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (internalNetworkId !== null && internalNetworkId !== undefined) {
                localVarQueryParameter['internal_network_id'] = internalNetworkId;
            }
            if (routerId !== null && routerId !== undefined) {
                localVarQueryParameter['router_id'] = routerId;
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询租户在指定Project和实例类型的所有私网NAT网关标签集合。
         * - 标签管理服务需要能够列出当前租户全部已使用的私网NAT网关标签集合，为打私网NAT网关标签和过滤私网NAT网关实例时提供标签联想功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivateNatTags() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/private-nat-gateways/tags",
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
         * 查询私网NAT网关实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivateNats(listPrivateNatsRequest?: ListPrivateNatsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/private-nat/gateways",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let description;
            
            let spec;
            
            let status;
            
            let vpcId;
            
            let virsubnetId;
            
            let enterpriseProjectId;

            if (listPrivateNatsRequest !== null && listPrivateNatsRequest !== undefined) {
                if (listPrivateNatsRequest instanceof ListPrivateNatsRequest) {
                    limit = listPrivateNatsRequest.limit;
                    marker = listPrivateNatsRequest.marker;
                    pageReverse = listPrivateNatsRequest.pageReverse;
                    id = listPrivateNatsRequest.id;
                    name = listPrivateNatsRequest.name;
                    description = listPrivateNatsRequest.description;
                    spec = listPrivateNatsRequest.spec;
                    status = listPrivateNatsRequest.status;
                    vpcId = listPrivateNatsRequest.vpcId;
                    virsubnetId = listPrivateNatsRequest.virsubnetId;
                    enterpriseProjectId = listPrivateNatsRequest.enterpriseProjectId;
                } else {
                    limit = listPrivateNatsRequest['limit'];
                    marker = listPrivateNatsRequest['marker'];
                    pageReverse = listPrivateNatsRequest['page_reverse'];
                    id = listPrivateNatsRequest['id'];
                    name = listPrivateNatsRequest['name'];
                    description = listPrivateNatsRequest['description'];
                    spec = listPrivateNatsRequest['spec'];
                    status = listPrivateNatsRequest['status'];
                    vpcId = listPrivateNatsRequest['vpc_id'];
                    virsubnetId = listPrivateNatsRequest['virsubnet_id'];
                    enterpriseProjectId = listPrivateNatsRequest['enterprise_project_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (spec !== null && spec !== undefined) {
                localVarQueryParameter['spec'] = spec;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (virsubnetId !== null && virsubnetId !== undefined) {
                localVarQueryParameter['virsubnet_id'] = virsubnetId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 使用标签过滤私网NAT网关实例。
         * - 标签管理服务需要提供按标签过滤私网NAT网关服务实例并汇总显示在列表中，需要私网NAT网关服务提供查询能力。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivateNatsByTags(listPrivateNatsByTagsRequest?: ListPrivateNatsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/private-nat-gateways/resource_instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listPrivateNatsByTagsRequest !== null && listPrivateNatsByTagsRequest !== undefined) {
                if (listPrivateNatsByTagsRequest instanceof ListPrivateNatsByTagsRequest) {
                    body = listPrivateNatsByTagsRequest.body
                } else {
                    body = listPrivateNatsByTagsRequest['body'];
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
         * 查询项目支持的网关规格列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSpecs() {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/private-nat/specs",
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
         * 查询指定的公网NAT网关实例详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNatGateway(showNatGatewayRequest?: ShowNatGatewayRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/nat_gateways/{nat_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let natGatewayId;

            if (showNatGatewayRequest !== null && showNatGatewayRequest !== undefined) {
                if (showNatGatewayRequest instanceof ShowNatGatewayRequest) {
                    natGatewayId = showNatGatewayRequest.natGatewayId;
                } else {
                    natGatewayId = showNatGatewayRequest['nat_gateway_id'];
                }
            }

        
            if (natGatewayId === null || natGatewayId === undefined) {
            throw new RequiredError('natGatewayId','Required parameter natGatewayId was null or undefined when calling showNatGateway.');
            }

            options.pathParams = { 'nat_gateway_id': natGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询指定公网NAT网关实例的标签信息。
         * - 标签管理服务需要使用该接口查询指定公网NAT网关实例的全部标签数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNatGatewayTag(showNatGatewayTagRequest?: ShowNatGatewayTagRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/nat_gateways/{nat_gateway_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let natGatewayId;

            if (showNatGatewayTagRequest !== null && showNatGatewayTagRequest !== undefined) {
                if (showNatGatewayTagRequest instanceof ShowNatGatewayTagRequest) {
                    natGatewayId = showNatGatewayTagRequest.natGatewayId;
                } else {
                    natGatewayId = showNatGatewayTagRequest['nat_gateway_id'];
                }
            }

        
            if (natGatewayId === null || natGatewayId === undefined) {
            throw new RequiredError('natGatewayId','Required parameter natGatewayId was null or undefined when calling showNatGatewayTag.');
            }

            options.pathParams = { 'nat_gateway_id': natGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定的私网NAT网关实例详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateNat(showPrivateNatRequest?: ShowPrivateNatRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/private-nat/gateways/{gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let gatewayId;

            if (showPrivateNatRequest !== null && showPrivateNatRequest !== undefined) {
                if (showPrivateNatRequest instanceof ShowPrivateNatRequest) {
                    gatewayId = showPrivateNatRequest.gatewayId;
                } else {
                    gatewayId = showPrivateNatRequest['gateway_id'];
                }
            }

        
            if (gatewayId === null || gatewayId === undefined) {
            throw new RequiredError('gatewayId','Required parameter gatewayId was null or undefined when calling showPrivateNat.');
            }

            options.pathParams = { 'gateway_id': gatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询指定私网NAT网关实例的标签信息。
         * - 标签管理服务需要使用该接口查询指定私网NAT网关实例的全部标签数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateNatTags(showPrivateNatTagsRequest?: ShowPrivateNatTagsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/private-nat-gateways/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (showPrivateNatTagsRequest !== null && showPrivateNatTagsRequest !== undefined) {
                if (showPrivateNatTagsRequest instanceof ShowPrivateNatTagsRequest) {
                    resourceId = showPrivateNatTagsRequest.resourceId;
                } else {
                    resourceId = showPrivateNatTagsRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showPrivateNatTags.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新公网NAT网关实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNatGateway(updateNatGatewayRequest?: UpdateNatGatewayRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/nat_gateways/{nat_gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let natGatewayId;

            if (updateNatGatewayRequest !== null && updateNatGatewayRequest !== undefined) {
                if (updateNatGatewayRequest instanceof UpdateNatGatewayRequest) {
                    natGatewayId = updateNatGatewayRequest.natGatewayId;
                    body = updateNatGatewayRequest.body
                } else {
                    natGatewayId = updateNatGatewayRequest['nat_gateway_id'];
                    body = updateNatGatewayRequest['body'];
                }
            }

        
            if (natGatewayId === null || natGatewayId === undefined) {
            throw new RequiredError('natGatewayId','Required parameter natGatewayId was null or undefined when calling updateNatGateway.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'nat_gateway_id': natGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 公网NAT网关按需转包。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNatGatewayToPeriod(updateNatGatewayToPeriodRequest?: UpdateNatGatewayToPeriodRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/nat_gateways/{nat_gateway_id}/change_to_period",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let natGatewayId;

            if (updateNatGatewayToPeriodRequest !== null && updateNatGatewayToPeriodRequest !== undefined) {
                if (updateNatGatewayToPeriodRequest instanceof UpdateNatGatewayToPeriodRequest) {
                    natGatewayId = updateNatGatewayToPeriodRequest.natGatewayId;
                    body = updateNatGatewayToPeriodRequest.body
                } else {
                    natGatewayId = updateNatGatewayToPeriodRequest['nat_gateway_id'];
                    body = updateNatGatewayToPeriodRequest['body'];
                }
            }

        
            if (natGatewayId === null || natGatewayId === undefined) {
            throw new RequiredError('natGatewayId','Required parameter natGatewayId was null or undefined when calling updateNatGatewayToPeriod.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'nat_gateway_id': natGatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新私网NAT网关实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePrivateNat(updatePrivateNatRequest?: UpdatePrivateNatRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/private-nat/gateways/{gateway_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let gatewayId;

            if (updatePrivateNatRequest !== null && updatePrivateNatRequest !== undefined) {
                if (updatePrivateNatRequest instanceof UpdatePrivateNatRequest) {
                    gatewayId = updatePrivateNatRequest.gatewayId;
                    body = updatePrivateNatRequest.body
                } else {
                    gatewayId = updatePrivateNatRequest['gateway_id'];
                    body = updatePrivateNatRequest['body'];
                }
            }

        
            if (gatewayId === null || gatewayId === undefined) {
            throw new RequiredError('gatewayId','Required parameter gatewayId was null or undefined when calling updatePrivateNat.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'gateway_id': gatewayId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建中转IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTransitIp(createTransitIpRequest?: CreateTransitIpRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/private-nat/transit-ips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTransitIpRequest !== null && createTransitIpRequest !== undefined) {
                if (createTransitIpRequest instanceof CreateTransitIpRequest) {
                    body = createTransitIpRequest.body
                } else {
                    body = createTransitIpRequest['body'];
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
         * 删除中转IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTransitIp(deleteTransitIpRequest?: DeleteTransitIpRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/private-nat/transit-ips/{transit_ip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let transitIpId;

            if (deleteTransitIpRequest !== null && deleteTransitIpRequest !== undefined) {
                if (deleteTransitIpRequest instanceof DeleteTransitIpRequest) {
                    transitIpId = deleteTransitIpRequest.transitIpId;
                } else {
                    transitIpId = deleteTransitIpRequest['transit_ip_id'];
                }
            }

        
            if (transitIpId === null || transitIpId === undefined) {
            throw new RequiredError('transitIpId','Required parameter transitIpId was null or undefined when calling deleteTransitIp.');
            }

            options.pathParams = { 'transit_ip_id': transitIpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询中转IP列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTransitIps(listTransitIpsRequest?: ListTransitIpsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/private-nat/transit-ips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let networkInterfaceId;
            
            let ipAddress;
            
            let gatewayId;
            
            let enterpriseProjectId;
            
            let virsubnetId;
            
            let transitSubnetId;

            if (listTransitIpsRequest !== null && listTransitIpsRequest !== undefined) {
                if (listTransitIpsRequest instanceof ListTransitIpsRequest) {
                    limit = listTransitIpsRequest.limit;
                    marker = listTransitIpsRequest.marker;
                    pageReverse = listTransitIpsRequest.pageReverse;
                    id = listTransitIpsRequest.id;
                    networkInterfaceId = listTransitIpsRequest.networkInterfaceId;
                    ipAddress = listTransitIpsRequest.ipAddress;
                    gatewayId = listTransitIpsRequest.gatewayId;
                    enterpriseProjectId = listTransitIpsRequest.enterpriseProjectId;
                    virsubnetId = listTransitIpsRequest.virsubnetId;
                    transitSubnetId = listTransitIpsRequest.transitSubnetId;
                } else {
                    limit = listTransitIpsRequest['limit'];
                    marker = listTransitIpsRequest['marker'];
                    pageReverse = listTransitIpsRequest['page_reverse'];
                    id = listTransitIpsRequest['id'];
                    networkInterfaceId = listTransitIpsRequest['network_interface_id'];
                    ipAddress = listTransitIpsRequest['ip_address'];
                    gatewayId = listTransitIpsRequest['gateway_id'];
                    enterpriseProjectId = listTransitIpsRequest['enterprise_project_id'];
                    virsubnetId = listTransitIpsRequest['virsubnet_id'];
                    transitSubnetId = listTransitIpsRequest['transit_subnet_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (networkInterfaceId !== null && networkInterfaceId !== undefined) {
                localVarQueryParameter['network_interface_id'] = networkInterfaceId;
            }
            if (ipAddress !== null && ipAddress !== undefined) {
                localVarQueryParameter['ip_address'] = ipAddress;
            }
            if (gatewayId !== null && gatewayId !== undefined) {
                localVarQueryParameter['gateway_id'] = gatewayId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (virsubnetId !== null && virsubnetId !== undefined) {
                localVarQueryParameter['virsubnet_id'] = virsubnetId;
            }
            if (transitSubnetId !== null && transitSubnetId !== undefined) {
                localVarQueryParameter['transit_subnet_id'] = transitSubnetId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询中转IP详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTransitIp(showTransitIpRequest?: ShowTransitIpRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/private-nat/transit-ips/{transit_ip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let transitIpId;

            if (showTransitIpRequest !== null && showTransitIpRequest !== undefined) {
                if (showTransitIpRequest instanceof ShowTransitIpRequest) {
                    transitIpId = showTransitIpRequest.transitIpId;
                } else {
                    transitIpId = showTransitIpRequest['transit_ip_id'];
                }
            }

        
            if (transitIpId === null || transitIpId === undefined) {
            throw new RequiredError('transitIpId','Required parameter transitIpId was null or undefined when calling showTransitIp.');
            }

            options.pathParams = { 'transit_ip_id': transitIpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建SNAT规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNatGatewaySnatRule(createNatGatewaySnatRuleRequest?: CreateNatGatewaySnatRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/snat_rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createNatGatewaySnatRuleRequest !== null && createNatGatewaySnatRuleRequest !== undefined) {
                if (createNatGatewaySnatRuleRequest instanceof CreateNatGatewaySnatRuleRequest) {
                    body = createNatGatewaySnatRuleRequest.body
                } else {
                    body = createNatGatewaySnatRuleRequest['body'];
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
         * 创建SNAT规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrivateSnat(createPrivateSnatRequest?: CreatePrivateSnatRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/private-nat/snat-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPrivateSnatRequest !== null && createPrivateSnatRequest !== undefined) {
                if (createPrivateSnatRequest instanceof CreatePrivateSnatRequest) {
                    body = createPrivateSnatRequest.body
                } else {
                    body = createPrivateSnatRequest['body'];
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
         * 删除指定的SNAT规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNatGatewaySnatRule(deleteNatGatewaySnatRuleRequest?: DeleteNatGatewaySnatRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/nat_gateways/{nat_gateway_id}/snat_rules/{snat_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let natGatewayId;
            
            let snatRuleId;

            if (deleteNatGatewaySnatRuleRequest !== null && deleteNatGatewaySnatRuleRequest !== undefined) {
                if (deleteNatGatewaySnatRuleRequest instanceof DeleteNatGatewaySnatRuleRequest) {
                    natGatewayId = deleteNatGatewaySnatRuleRequest.natGatewayId;
                    snatRuleId = deleteNatGatewaySnatRuleRequest.snatRuleId;
                } else {
                    natGatewayId = deleteNatGatewaySnatRuleRequest['nat_gateway_id'];
                    snatRuleId = deleteNatGatewaySnatRuleRequest['snat_rule_id'];
                }
            }

        
            if (natGatewayId === null || natGatewayId === undefined) {
            throw new RequiredError('natGatewayId','Required parameter natGatewayId was null or undefined when calling deleteNatGatewaySnatRule.');
            }
            if (snatRuleId === null || snatRuleId === undefined) {
            throw new RequiredError('snatRuleId','Required parameter snatRuleId was null or undefined when calling deleteNatGatewaySnatRule.');
            }

            options.pathParams = { 'nat_gateway_id': natGatewayId,'snat_rule_id': snatRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的SNAT规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePrivateSnat(deletePrivateSnatRequest?: DeletePrivateSnatRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/private-nat/snat-rules/{snat_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let snatRuleId;

            if (deletePrivateSnatRequest !== null && deletePrivateSnatRequest !== undefined) {
                if (deletePrivateSnatRequest instanceof DeletePrivateSnatRequest) {
                    snatRuleId = deletePrivateSnatRequest.snatRuleId;
                } else {
                    snatRuleId = deletePrivateSnatRequest['snat_rule_id'];
                }
            }

        
            if (snatRuleId === null || snatRuleId === undefined) {
            throw new RequiredError('snatRuleId','Required parameter snatRuleId was null or undefined when calling deletePrivateSnat.');
            }

            options.pathParams = { 'snat_rule_id': snatRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SNAT规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNatGatewaySnatRules(listNatGatewaySnatRulesRequest?: ListNatGatewaySnatRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/snat_rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let adminStateUp;
            
            let cidr;
            
            let limit;
            
            let floatingIpAddress;
            
            let globalEipAddress;
            
            let floatingIpId;
            
            let globalEipId;
            
            let id;
            
            let description;
            
            let createdAt;
            
            let natGatewayId;
            
            let networkId;
            
            let sourceType;
            
            let status;
            
            let marker;

            if (listNatGatewaySnatRulesRequest !== null && listNatGatewaySnatRulesRequest !== undefined) {
                if (listNatGatewaySnatRulesRequest instanceof ListNatGatewaySnatRulesRequest) {
                    adminStateUp = listNatGatewaySnatRulesRequest.adminStateUp;
                    cidr = listNatGatewaySnatRulesRequest.cidr;
                    limit = listNatGatewaySnatRulesRequest.limit;
                    floatingIpAddress = listNatGatewaySnatRulesRequest.floatingIpAddress;
                    globalEipAddress = listNatGatewaySnatRulesRequest.globalEipAddress;
                    floatingIpId = listNatGatewaySnatRulesRequest.floatingIpId;
                    globalEipId = listNatGatewaySnatRulesRequest.globalEipId;
                    id = listNatGatewaySnatRulesRequest.id;
                    description = listNatGatewaySnatRulesRequest.description;
                    createdAt = listNatGatewaySnatRulesRequest.createdAt;
                    natGatewayId = listNatGatewaySnatRulesRequest.natGatewayId;
                    networkId = listNatGatewaySnatRulesRequest.networkId;
                    sourceType = listNatGatewaySnatRulesRequest.sourceType;
                    status = listNatGatewaySnatRulesRequest.status;
                    marker = listNatGatewaySnatRulesRequest.marker;
                } else {
                    adminStateUp = listNatGatewaySnatRulesRequest['admin_state_up'];
                    cidr = listNatGatewaySnatRulesRequest['cidr'];
                    limit = listNatGatewaySnatRulesRequest['limit'];
                    floatingIpAddress = listNatGatewaySnatRulesRequest['floating_ip_address'];
                    globalEipAddress = listNatGatewaySnatRulesRequest['global_eip_address'];
                    floatingIpId = listNatGatewaySnatRulesRequest['floating_ip_id'];
                    globalEipId = listNatGatewaySnatRulesRequest['global_eip_id'];
                    id = listNatGatewaySnatRulesRequest['id'];
                    description = listNatGatewaySnatRulesRequest['description'];
                    createdAt = listNatGatewaySnatRulesRequest['created_at'];
                    natGatewayId = listNatGatewaySnatRulesRequest['nat_gateway_id'];
                    networkId = listNatGatewaySnatRulesRequest['network_id'];
                    sourceType = listNatGatewaySnatRulesRequest['source_type'];
                    status = listNatGatewaySnatRulesRequest['status'];
                    marker = listNatGatewaySnatRulesRequest['marker'];
                }
            }

        
            if (adminStateUp !== null && adminStateUp !== undefined) {
                localVarQueryParameter['admin_state_up'] = adminStateUp;
            }
            if (cidr !== null && cidr !== undefined) {
                localVarQueryParameter['cidr'] = cidr;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (floatingIpAddress !== null && floatingIpAddress !== undefined) {
                localVarQueryParameter['floating_ip_address'] = floatingIpAddress;
            }
            if (globalEipAddress !== null && globalEipAddress !== undefined) {
                localVarQueryParameter['global_eip_address'] = globalEipAddress;
            }
            if (floatingIpId !== null && floatingIpId !== undefined) {
                localVarQueryParameter['floating_ip_id'] = floatingIpId;
            }
            if (globalEipId !== null && globalEipId !== undefined) {
                localVarQueryParameter['global_eip_id'] = globalEipId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (createdAt !== null && createdAt !== undefined) {
                localVarQueryParameter['created_at'] = createdAt;
            }
            if (natGatewayId !== null && natGatewayId !== undefined) {
                localVarQueryParameter['nat_gateway_id'] = natGatewayId;
            }
            if (networkId !== null && networkId !== undefined) {
                localVarQueryParameter['network_id'] = networkId;
            }
            if (sourceType !== null && sourceType !== undefined) {
                localVarQueryParameter['source_type'] = sourceType;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SNAT规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPrivateSnats(listPrivateSnatsRequest?: ListPrivateSnatsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/private-nat/snat-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let description;
            
            let gatewayId;
            
            let cidr;
            
            let virsubnetId;
            
            let transitIpId;
            
            let transitIpAddress;
            
            let enterpriseProjectId;

            if (listPrivateSnatsRequest !== null && listPrivateSnatsRequest !== undefined) {
                if (listPrivateSnatsRequest instanceof ListPrivateSnatsRequest) {
                    limit = listPrivateSnatsRequest.limit;
                    marker = listPrivateSnatsRequest.marker;
                    pageReverse = listPrivateSnatsRequest.pageReverse;
                    id = listPrivateSnatsRequest.id;
                    description = listPrivateSnatsRequest.description;
                    gatewayId = listPrivateSnatsRequest.gatewayId;
                    cidr = listPrivateSnatsRequest.cidr;
                    virsubnetId = listPrivateSnatsRequest.virsubnetId;
                    transitIpId = listPrivateSnatsRequest.transitIpId;
                    transitIpAddress = listPrivateSnatsRequest.transitIpAddress;
                    enterpriseProjectId = listPrivateSnatsRequest.enterpriseProjectId;
                } else {
                    limit = listPrivateSnatsRequest['limit'];
                    marker = listPrivateSnatsRequest['marker'];
                    pageReverse = listPrivateSnatsRequest['page_reverse'];
                    id = listPrivateSnatsRequest['id'];
                    description = listPrivateSnatsRequest['description'];
                    gatewayId = listPrivateSnatsRequest['gateway_id'];
                    cidr = listPrivateSnatsRequest['cidr'];
                    virsubnetId = listPrivateSnatsRequest['virsubnet_id'];
                    transitIpId = listPrivateSnatsRequest['transit_ip_id'];
                    transitIpAddress = listPrivateSnatsRequest['transit_ip_address'];
                    enterpriseProjectId = listPrivateSnatsRequest['enterprise_project_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (gatewayId !== null && gatewayId !== undefined) {
                localVarQueryParameter['gateway_id'] = gatewayId;
            }
            if (cidr !== null && cidr !== undefined) {
                localVarQueryParameter['cidr'] = cidr;
            }
            if (virsubnetId !== null && virsubnetId !== undefined) {
                localVarQueryParameter['virsubnet_id'] = virsubnetId;
            }
            if (transitIpId !== null && transitIpId !== undefined) {
                localVarQueryParameter['transit_ip_id'] = transitIpId;
            }
            if (transitIpAddress !== null && transitIpAddress !== undefined) {
                localVarQueryParameter['transit_ip_address'] = transitIpAddress;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定的SNAT规则详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNatGatewaySnatRule(showNatGatewaySnatRuleRequest?: ShowNatGatewaySnatRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/snat_rules/{snat_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let snatRuleId;

            if (showNatGatewaySnatRuleRequest !== null && showNatGatewaySnatRuleRequest !== undefined) {
                if (showNatGatewaySnatRuleRequest instanceof ShowNatGatewaySnatRuleRequest) {
                    snatRuleId = showNatGatewaySnatRuleRequest.snatRuleId;
                } else {
                    snatRuleId = showNatGatewaySnatRuleRequest['snat_rule_id'];
                }
            }

        
            if (snatRuleId === null || snatRuleId === undefined) {
            throw new RequiredError('snatRuleId','Required parameter snatRuleId was null or undefined when calling showNatGatewaySnatRule.');
            }

            options.pathParams = { 'snat_rule_id': snatRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定的SNAT规则详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPrivateSnat(showPrivateSnatRequest?: ShowPrivateSnatRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/private-nat/snat-rules/{snat_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let snatRuleId;

            if (showPrivateSnatRequest !== null && showPrivateSnatRequest !== undefined) {
                if (showPrivateSnatRequest instanceof ShowPrivateSnatRequest) {
                    snatRuleId = showPrivateSnatRequest.snatRuleId;
                } else {
                    snatRuleId = showPrivateSnatRequest['snat_rule_id'];
                }
            }

        
            if (snatRuleId === null || snatRuleId === undefined) {
            throw new RequiredError('snatRuleId','Required parameter snatRuleId was null or undefined when calling showPrivateSnat.');
            }

            options.pathParams = { 'snat_rule_id': snatRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定的SNAT规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNatGatewaySnatRule(updateNatGatewaySnatRuleRequest?: UpdateNatGatewaySnatRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/snat_rules/{snat_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snatRuleId;

            if (updateNatGatewaySnatRuleRequest !== null && updateNatGatewaySnatRuleRequest !== undefined) {
                if (updateNatGatewaySnatRuleRequest instanceof UpdateNatGatewaySnatRuleRequest) {
                    snatRuleId = updateNatGatewaySnatRuleRequest.snatRuleId;
                    body = updateNatGatewaySnatRuleRequest.body
                } else {
                    snatRuleId = updateNatGatewaySnatRuleRequest['snat_rule_id'];
                    body = updateNatGatewaySnatRuleRequest['body'];
                }
            }

        
            if (snatRuleId === null || snatRuleId === undefined) {
            throw new RequiredError('snatRuleId','Required parameter snatRuleId was null or undefined when calling updateNatGatewaySnatRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snat_rule_id': snatRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新指定的SNAT规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePrivateSnat(updatePrivateSnatRequest?: UpdatePrivateSnatRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/private-nat/snat-rules/{snat_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let snatRuleId;

            if (updatePrivateSnatRequest !== null && updatePrivateSnatRequest !== undefined) {
                if (updatePrivateSnatRequest instanceof UpdatePrivateSnatRequest) {
                    snatRuleId = updatePrivateSnatRequest.snatRuleId;
                    body = updatePrivateSnatRequest.body
                } else {
                    snatRuleId = updatePrivateSnatRequest['snat_rule_id'];
                    body = updatePrivateSnatRequest['body'];
                }
            }

        
            if (snatRuleId === null || snatRuleId === undefined) {
            throw new RequiredError('snatRuleId','Required parameter snatRuleId was null or undefined when calling updatePrivateSnat.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'snat_rule_id': snatRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): NatClient {
    return new NatClient(client);
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