import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddPublicipsIntoSharedBandwidthOption } from './model/AddPublicipsIntoSharedBandwidthOption';
import { AddPublicipsIntoSharedBandwidthRequest } from './model/AddPublicipsIntoSharedBandwidthRequest';
import { AddPublicipsIntoSharedBandwidthRequestBody } from './model/AddPublicipsIntoSharedBandwidthRequestBody';
import { AddPublicipsIntoSharedBandwidthResponse } from './model/AddPublicipsIntoSharedBandwidthResponse';
import { BandWidthRules } from './model/BandWidthRules';
import { BandwidthPkgPage } from './model/BandwidthPkgPage';
import { BandwidthPkgResp } from './model/BandwidthPkgResp';
import { BandwidthResp } from './model/BandwidthResp';
import { BandwidthRespInsert } from './model/BandwidthRespInsert';
import { BatchBandwidth } from './model/BatchBandwidth';
import { BatchBandwidthResp } from './model/BatchBandwidthResp';
import { BatchCreateBandwidthOption } from './model/BatchCreateBandwidthOption';
import { BatchCreateBandwidthRequestBody } from './model/BatchCreateBandwidthRequestBody';
import { BatchCreatePublicipTagsRequest } from './model/BatchCreatePublicipTagsRequest';
import { BatchCreatePublicipTagsRequestBody } from './model/BatchCreatePublicipTagsRequestBody';
import { BatchCreatePublicipTagsResponse } from './model/BatchCreatePublicipTagsResponse';
import { BatchCreatePublicipsRequest } from './model/BatchCreatePublicipsRequest';
import { BatchCreatePublicipsResponse } from './model/BatchCreatePublicipsResponse';
import { BatchCreatePublicipsV2RequestBody } from './model/BatchCreatePublicipsV2RequestBody';
import { BatchCreateSharedBandwidthsRequest } from './model/BatchCreateSharedBandwidthsRequest';
import { BatchCreateSharedBandwidthsResponse } from './model/BatchCreateSharedBandwidthsResponse';
import { BatchDeletePublicIpRequest } from './model/BatchDeletePublicIpRequest';
import { BatchDeletePublicIpRequestBody } from './model/BatchDeletePublicIpRequestBody';
import { BatchDeletePublicIpResponse } from './model/BatchDeletePublicIpResponse';
import { BatchDeletePublicipTagsRequest } from './model/BatchDeletePublicipTagsRequest';
import { BatchDeletePublicipTagsRequestBody } from './model/BatchDeletePublicipTagsRequestBody';
import { BatchDeletePublicipTagsResponse } from './model/BatchDeletePublicipTagsResponse';
import { BatchDisassociatePublicipsRequest } from './model/BatchDisassociatePublicipsRequest';
import { BatchDisassociatePublicipsResponse } from './model/BatchDisassociatePublicipsResponse';
import { BatchProfile } from './model/BatchProfile';
import { BatchPublicIp } from './model/BatchPublicIp';
import { BwChangeToPeriodReq } from './model/BwChangeToPeriodReq';
import { ChangeBandwidthToPeriodRequest } from './model/ChangeBandwidthToPeriodRequest';
import { ChangeBandwidthToPeriodResponse } from './model/ChangeBandwidthToPeriodResponse';
import { ChangePublicipToPeriodRequest } from './model/ChangePublicipToPeriodRequest';
import { ChangePublicipToPeriodResponse } from './model/ChangePublicipToPeriodResponse';
import { ChangeToPeriodReq } from './model/ChangeToPeriodReq';
import { CountPublicIpInstanceRequest } from './model/CountPublicIpInstanceRequest';
import { CountPublicIpInstanceResponse } from './model/CountPublicIpInstanceResponse';
import { CountPublicIpRequest } from './model/CountPublicIpRequest';
import { CountPublicIpResponse } from './model/CountPublicIpResponse';
import { CreateFloatingIpOption } from './model/CreateFloatingIpOption';
import { CreatePrePaidPublicipExtendParamOption } from './model/CreatePrePaidPublicipExtendParamOption';
import { CreatePrePaidPublicipOption } from './model/CreatePrePaidPublicipOption';
import { CreatePrePaidPublicipRequest } from './model/CreatePrePaidPublicipRequest';
import { CreatePrePaidPublicipRequestBody } from './model/CreatePrePaidPublicipRequestBody';
import { CreatePrePaidPublicipResponse } from './model/CreatePrePaidPublicipResponse';
import { CreatePublicipBandwidthOption } from './model/CreatePublicipBandwidthOption';
import { CreatePublicipOption } from './model/CreatePublicipOption';
import { CreatePublicipRequest } from './model/CreatePublicipRequest';
import { CreatePublicipRequestBody } from './model/CreatePublicipRequestBody';
import { CreatePublicipResponse } from './model/CreatePublicipResponse';
import { CreatePublicipTagRequest } from './model/CreatePublicipTagRequest';
import { CreatePublicipTagRequestBody } from './model/CreatePublicipTagRequestBody';
import { CreatePublicipTagResponse } from './model/CreatePublicipTagResponse';
import { CreateSharedBandwidhRequestBody } from './model/CreateSharedBandwidhRequestBody';
import { CreateSharedBandwidthOption } from './model/CreateSharedBandwidthOption';
import { CreateSharedBandwidthRequest } from './model/CreateSharedBandwidthRequest';
import { CreateSharedBandwidthResponse } from './model/CreateSharedBandwidthResponse';
import { DeletePublicipRequest } from './model/DeletePublicipRequest';
import { DeletePublicipResponse } from './model/DeletePublicipResponse';
import { DeletePublicipTagRequest } from './model/DeletePublicipTagRequest';
import { DeletePublicipTagResponse } from './model/DeletePublicipTagResponse';
import { DeleteSharedBandwidthRequest } from './model/DeleteSharedBandwidthRequest';
import { DeleteSharedBandwidthResponse } from './model/DeleteSharedBandwidthResponse';
import { FloatingIpResp } from './model/FloatingIpResp';
import { InsertPublicipInfo } from './model/InsertPublicipInfo';
import { ListBandwidthPkgRequest } from './model/ListBandwidthPkgRequest';
import { ListBandwidthPkgResponse } from './model/ListBandwidthPkgResponse';
import { ListBandwidthsRequest } from './model/ListBandwidthsRequest';
import { ListBandwidthsResponse } from './model/ListBandwidthsResponse';
import { ListPublicipTagsRequest } from './model/ListPublicipTagsRequest';
import { ListPublicipTagsResponse } from './model/ListPublicipTagsResponse';
import { ListPublicipsByTagsRequest } from './model/ListPublicipsByTagsRequest';
import { ListPublicipsByTagsRequestBody } from './model/ListPublicipsByTagsRequestBody';
import { ListPublicipsByTagsResponse } from './model/ListPublicipsByTagsResponse';
import { ListPublicipsRequest } from './model/ListPublicipsRequest';
import { ListPublicipsResponse } from './model/ListPublicipsResponse';
import { ListQuotasRequest } from './model/ListQuotasRequest';
import { ListQuotasResponse } from './model/ListQuotasResponse';
import { ListResourceResp } from './model/ListResourceResp';
import { MatchReq } from './model/MatchReq';
import { NeutronCreateFloatingIpRequest } from './model/NeutronCreateFloatingIpRequest';
import { NeutronCreateFloatingIpRequestBody } from './model/NeutronCreateFloatingIpRequestBody';
import { NeutronCreateFloatingIpResponse } from './model/NeutronCreateFloatingIpResponse';
import { NeutronDeleteFloatingIpRequest } from './model/NeutronDeleteFloatingIpRequest';
import { NeutronDeleteFloatingIpResponse } from './model/NeutronDeleteFloatingIpResponse';
import { NeutronListFloatingIpsRequest } from './model/NeutronListFloatingIpsRequest';
import { NeutronListFloatingIpsResponse } from './model/NeutronListFloatingIpsResponse';
import { NeutronShowFloatingIpRequest } from './model/NeutronShowFloatingIpRequest';
import { NeutronShowFloatingIpResponse } from './model/NeutronShowFloatingIpResponse';
import { NeutronUpdateFloatingIpRequest } from './model/NeutronUpdateFloatingIpRequest';
import { NeutronUpdateFloatingIpRequestBody } from './model/NeutronUpdateFloatingIpRequestBody';
import { NeutronUpdateFloatingIpResponse } from './model/NeutronUpdateFloatingIpResponse';
import { Pager } from './model/Pager';
import { PostAndPutFloatingIpResp } from './model/PostAndPutFloatingIpResp';
import { ProfileResp } from './model/ProfileResp';
import { PublicipCreateResp } from './model/PublicipCreateResp';
import { PublicipInfoResp } from './model/PublicipInfoResp';
import { PublicipShowResp } from './model/PublicipShowResp';
import { PublicipUpdateResp } from './model/PublicipUpdateResp';
import { QuotaShowResp } from './model/QuotaShowResp';
import { RemoveFromSharedBandwidthOption } from './model/RemoveFromSharedBandwidthOption';
import { RemovePublicipInfo } from './model/RemovePublicipInfo';
import { RemovePublicipsFromSharedBandwidthRequest } from './model/RemovePublicipsFromSharedBandwidthRequest';
import { RemovePublicipsFromSharedBandwidthRequestBody } from './model/RemovePublicipsFromSharedBandwidthRequestBody';
import { RemovePublicipsFromSharedBandwidthResponse } from './model/RemovePublicipsFromSharedBandwidthResponse';
import { ResourceResp } from './model/ResourceResp';
import { ResourceTagOption } from './model/ResourceTagOption';
import { ResourceTagResp } from './model/ResourceTagResp';
import { ShowBandwidthRequest } from './model/ShowBandwidthRequest';
import { ShowBandwidthResponse } from './model/ShowBandwidthResponse';
import { ShowPublicIpTypeRequest } from './model/ShowPublicIpTypeRequest';
import { ShowPublicIpTypeResponse } from './model/ShowPublicIpTypeResponse';
import { ShowPublicipRequest } from './model/ShowPublicipRequest';
import { ShowPublicipResponse } from './model/ShowPublicipResponse';
import { ShowPublicipTagsRequest } from './model/ShowPublicipTagsRequest';
import { ShowPublicipTagsResponse } from './model/ShowPublicipTagsResponse';
import { ShowResourcesJobDetailRequest } from './model/ShowResourcesJobDetailRequest';
import { ShowResourcesJobDetailResponse } from './model/ShowResourcesJobDetailResponse';
import { SubJobsInfo } from './model/SubJobsInfo';
import { TagReq } from './model/TagReq';
import { TagResp } from './model/TagResp';
import { UpdateBandwidthOption } from './model/UpdateBandwidthOption';
import { UpdateBandwidthRequest } from './model/UpdateBandwidthRequest';
import { UpdateBandwidthRequestBody } from './model/UpdateBandwidthRequestBody';
import { UpdateBandwidthResponse } from './model/UpdateBandwidthResponse';
import { UpdateFloatingIpOption } from './model/UpdateFloatingIpOption';
import { UpdatePrePaidBandwidthExtendParamOption } from './model/UpdatePrePaidBandwidthExtendParamOption';
import { UpdatePrePaidBandwidthOption } from './model/UpdatePrePaidBandwidthOption';
import { UpdatePrePaidBandwidthRequest } from './model/UpdatePrePaidBandwidthRequest';
import { UpdatePrePaidBandwidthRequestBody } from './model/UpdatePrePaidBandwidthRequestBody';
import { UpdatePrePaidBandwidthResponse } from './model/UpdatePrePaidBandwidthResponse';
import { UpdatePublicipOption } from './model/UpdatePublicipOption';
import { UpdatePublicipRequest } from './model/UpdatePublicipRequest';
import { UpdatePublicipResponse } from './model/UpdatePublicipResponse';
import { UpdatePublicipsRequestBody } from './model/UpdatePublicipsRequestBody';

export class EipClient {
    public static newBuilder(): ClientBuilder<EipClient> {
            return new ClientBuilder<EipClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 共享带宽插入弹性公网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 共享带宽插入弹性公网IP
     * @param {string} bandwidthId 带宽唯一标识
     * @param {AddPublicipsIntoSharedBandwidthRequestBody} bandwidth 带宽对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addPublicipsIntoSharedBandwidth(addPublicipsIntoSharedBandwidthRequest?: AddPublicipsIntoSharedBandwidthRequest): Promise<AddPublicipsIntoSharedBandwidthResponse> {
        const options = ParamCreater().addPublicipsIntoSharedBandwidth(addPublicipsIntoSharedBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建共享带宽。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建共享带宽
     * @param {BatchCreateBandwidthRequestBody} bandwidth 带宽对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateSharedBandwidths(batchCreateSharedBandwidthsRequest?: BatchCreateSharedBandwidthsRequest): Promise<BatchCreateSharedBandwidthsResponse> {
        const options = ParamCreater().batchCreateSharedBandwidths(batchCreateSharedBandwidthsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 租户按需转包接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按需转包API
     * @param {BwChangeToPeriodReq} ipChangeToPeriodRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeBandwidthToPeriod(changeBandwidthToPeriodRequest?: ChangeBandwidthToPeriodRequest): Promise<ChangeBandwidthToPeriodResponse> {
        const options = ParamCreater().changeBandwidthToPeriod(changeBandwidthToPeriodRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建共享带宽。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建共享带宽
     * @param {CreateSharedBandwidhRequestBody} bandwidth 带宽对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSharedBandwidth(createSharedBandwidthRequest?: CreateSharedBandwidthRequest): Promise<CreateSharedBandwidthResponse> {
        const options = ParamCreater().createSharedBandwidth(createSharedBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除共享带宽。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除共享带宽
     * @param {string} bandwidthId 带宽唯一标识  约束： 当前仅支持删除共享带宽
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSharedBandwidth(deleteSharedBandwidthRequest?: DeleteSharedBandwidthRequest): Promise<DeleteSharedBandwidthResponse> {
        const options = ParamCreater().deleteSharedBandwidth(deleteSharedBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询带宽加油包列表信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询带宽加油包列表
     * @param {number} [limit] 每页返回的个数取值范围：0~[2000]，其中2000为局点差异项，具体取值由局点决定
     * @param {string} [marker] 分页查询起始的资源ID，为空时为查询第一页
     * @param {number} [offset] 分页查询起始的资源序号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBandwidthPkg(listBandwidthPkgRequest?: ListBandwidthPkgRequest): Promise<ListBandwidthPkgResponse> {
        const options = ParamCreater().listBandwidthPkg(listBandwidthPkgRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询带宽列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询带宽列表
     * @param {string} [marker] 取值为上一页数据的最后一条记录的id，为空时为查询第一页
     * @param {number} [limit] 功能说明：每页返回的个数  取值范围：0~intmax
     * @param {string} [enterpriseProjectId] 功能说明：企业项目ID。可以使用该字段过滤某个企业项目下的虚拟私有云。  取值范围：最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。若需要查询当前用户所有企业项目绑定的虚拟私有云，请传参all_granted_eps。
     * @param {'WHOLE' | 'PER'} [shareType] 功能说明：带宽类型，标识是否是共享带宽 取值范围：WHOLE，PER WHOLE表示共享带宽；PER，表示独享带宽
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBandwidths(listBandwidthsRequest?: ListBandwidthsRequest): Promise<ListBandwidthsResponse> {
        const options = ParamCreater().listBandwidths(listBandwidthsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询配额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额接口
     * @param {string} [type] 功能说明：根据type过滤查询指定类型的配额 取值范围：vpc，subnet，securityGroup，securityGroupRule，publicIp，vpn，vpngw，vpcPeer，firewall，shareBandwidth，shareBandwidthIP，loadbalancer，listener
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
     * 共享带宽移除弹性公网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 共享带宽移除弹性公网IP
     * @param {string} bandwidthId 带宽唯一标识
     * @param {RemovePublicipsFromSharedBandwidthRequestBody} bandwidth 带宽对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removePublicipsFromSharedBandwidth(removePublicipsFromSharedBandwidthRequest?: RemovePublicipsFromSharedBandwidthRequest): Promise<RemovePublicipsFromSharedBandwidthResponse> {
        const options = ParamCreater().removePublicipsFromSharedBandwidth(removePublicipsFromSharedBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询带宽
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询带宽
     * @param {string} bandwidthId 带宽唯一标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBandwidth(showBandwidthRequest?: ShowBandwidthRequest): Promise<ShowBandwidthResponse> {
        const options = ParamCreater().showBandwidth(showBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新带宽。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新带宽
     * @param {string} bandwidthId 带宽唯一标识
     * @param {UpdateBandwidthRequestBody} bandwidth 带宽对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBandwidth(updateBandwidthRequest?: UpdateBandwidthRequest): Promise<UpdateBandwidthResponse> {
        const options = ParamCreater().updateBandwidth(updateBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新带宽。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新包周期带宽
     * @param {string} bandwidthId 带宽唯一标识。通过弹性公网IP详情获取，且此弹性公网IP是包周期的。
     * @param {UpdatePrePaidBandwidthRequestBody} updateBandwidthInformation 更新包周期带宽请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePrePaidBandwidth(updatePrePaidBandwidthRequest?: UpdatePrePaidBandwidthRequest): Promise<UpdatePrePaidBandwidthResponse> {
        const options = ParamCreater().updatePrePaidBandwidth(updatePrePaidBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定的弹性公网IP资源实例批量添加标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建弹性公网IP资源标签
     * @param {string} publicipId 资源ID
     * @param {BatchCreatePublicipTagsRequestBody} resourceTagAction 批量创建弹性公网IP资源标签请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreatePublicipTags(batchCreatePublicipTagsRequest?: BatchCreatePublicipTagsRequest): Promise<BatchCreatePublicipTagsResponse> {
        const options = ParamCreater().batchCreatePublicipTags(batchCreatePublicipTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建弹性公网IP
     * @param {BatchCreatePublicipsV2RequestBody} batchCreatePublicipsV2RequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreatePublicips(batchCreatePublicipsRequest?: BatchCreatePublicipsRequest): Promise<BatchCreatePublicipsResponse> {
        const options = ParamCreater().batchCreatePublicips(batchCreatePublicipsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除弹性公网IP
     * @param {BatchDeletePublicIpRequestBody} batchDeletePublicIpRequestBody 批量操作弹性公网IP请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeletePublicIp(batchDeletePublicIpRequest?: BatchDeletePublicIpRequest): Promise<BatchDeletePublicIpResponse> {
        const options = ParamCreater().batchDeletePublicIp(batchDeletePublicIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定的弹性公网IP资源实例批量删除标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除弹性公网IP资源标签
     * @param {string} publicipId 资源ID
     * @param {BatchDeletePublicipTagsRequestBody} resourceTagAction 批量删除弹性公网IP资源标签请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeletePublicipTags(batchDeletePublicipTagsRequest?: BatchDeletePublicipTagsRequest): Promise<BatchDeletePublicipTagsResponse> {
        const options = ParamCreater().batchDeletePublicipTags(batchDeletePublicipTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量解绑弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量解绑弹性公网IP
     * @param {BatchDeletePublicIpRequestBody} batchDisassociatePublicipsRequestBody 批量操作弹性公网IP请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDisassociatePublicips(batchDisassociatePublicipsRequest?: BatchDisassociatePublicipsRequest): Promise<BatchDisassociatePublicipsResponse> {
        const options = ParamCreater().batchDisassociatePublicips(batchDisassociatePublicipsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 租户按需转包接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按需转包接口
     * @param {ChangeToPeriodReq} ipChangeToPeriodRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changePublicipToPeriod(changePublicipToPeriodRequest?: ChangePublicipToPeriodRequest): Promise<ChangePublicipToPeriodResponse> {
        const options = ParamCreater().changePublicipToPeriod(changePublicipToPeriodRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询PublicIp数量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询PublicIp数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countPublicIp(): Promise<CountPublicIpResponse> {
        const options = ParamCreater().countPublicIp();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询PublicIp实例数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询PublicIp实例数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countPublicIpInstance(): Promise<CountPublicIpInstanceResponse> {
        const options = ParamCreater().countPublicIpInstance();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 申请包年包月的弹性公网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 申请包周期弹性公网IP
     * @param {CreatePrePaidPublicipRequestBody} createPeriodPublicip 申请包周期弹性公网IP请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPrePaidPublicip(createPrePaidPublicipRequest?: CreatePrePaidPublicipRequest): Promise<CreatePrePaidPublicipResponse> {
        const options = ParamCreater().createPrePaidPublicip(createPrePaidPublicipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 申请弹性公网IP，支持IPv4和IPv6。
     *  弹性公网IP（Elastic IP）提供独立的公网IP资源，包括公网IP地址与公网出口带宽服务。可以与弹性云服务器、裸金属服务器、虚拟IP、弹性负载均衡、NAT网关等资源灵活地绑定及解绑。拥有多种灵活的计费方式，可以满足各种业务场景的需要。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 申请弹性公网IP
     * @param {CreatePublicipRequestBody} createPublicip 申请弹性公网IP请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPublicip(createPublicipRequest?: CreatePublicipRequest): Promise<CreatePublicipResponse> {
        const options = ParamCreater().createPublicip(createPublicipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给指定弹性IP资源实例增加标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建弹性公网IP资源标签
     * @param {string} publicipId 资源ID
     * @param {CreatePublicipTagRequestBody} tag 标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPublicipTag(createPublicipTagRequest?: CreatePublicipTagRequest): Promise<CreatePublicipTagResponse> {
        const options = ParamCreater().createPublicipTag(createPublicipTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除弹性公网IP,绑定状态eip不允许直接删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除弹性公网IP
     * @param {string} publicipId 弹性公网IP唯一标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePublicip(deletePublicipRequest?: DeletePublicipRequest): Promise<DeletePublicipResponse> {
        const options = ParamCreater().deletePublicip(deletePublicipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定弹性公网IP的标签信息。其中project_id是项目ID，publicip_id 是要操作的弹性公网IP的id。key是要删除标签的键。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除弹性公网IP的标签
     * @param {string} publicipId 弹性公网IP的id
     * @param {string} key 标签的键
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePublicipTag(deletePublicipTagRequest?: DeletePublicipTagRequest): Promise<DeletePublicipTagResponse> {
        const options = ParamCreater().deletePublicipTag(deletePublicipTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在指定区域和实例类型的所有标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的弹性公网IP标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPublicipTags(): Promise<ListPublicipTagsResponse> {
        const options = ParamCreater().listPublicipTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性公网IP列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性公网IP列表
     * @param {string} [marker] 取值为上一页数据的最后一条记录的id，为空时为查询第一页
     * @param {number} [limit] 功能说明：每页返回的个数  取值范围：0~intmax
     * @param {4 | 6} [ipVersion] IP地址版本信息  4：IPv4  6：IPv6
     * @param {string} [enterpriseProjectId] 功能说明：企业项目ID。可以使用该字段过滤某个企业项目下的弹性IP弹性公网IP。  取值范围：最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。若需要查询当前用户所有企业项目绑定的弹性公网IP，请传参all_granted_eps。
     * @param {Array<string>} [portId] 绑定弹性公网IP的端口id
     * @param {Array<string>} [publicIpAddress] IPv4时是申请到的弹性公网IP地址，IPv6时是IPv6地址对应的IPv4地址
     * @param {Array<string>} [privateIpAddress] 关联端口的私有IP地址
     * @param {Array<string>} [id] 弹性公网IP唯一标识
     * @param {Array<string>} [allowShareBandwidthTypeAny] 共享带宽类型，根据任一共享带宽类型过滤EIP列表。 可以指定多个带宽类型，不同的带宽类型间用逗号分隔。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPublicips(listPublicipsRequest?: ListPublicipsRequest): Promise<ListPublicipsResponse> {
        const options = ParamCreater().listPublicips(listPublicipsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤弹性公网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按标签查询弹性公网IP列表
     * @param {ListPublicipsByTagsRequestBody} showPublicipResourceInstance 查询弹性IP资源实例请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPublicipsByTags(listPublicipsByTagsRequest?: ListPublicipsByTagsRequest): Promise<ListPublicipsByTagsResponse> {
        const options = ParamCreater().listPublicipsByTags(listPublicipsByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询PublicIp类型
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询PublicIp类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPublicIpType(): Promise<ShowPublicIpTypeResponse> {
        const options = ParamCreater().showPublicIpType();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定的弹性公网IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性公网IP
     * @param {string} publicipId 弹性公网IP唯一标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPublicip(showPublicipRequest?: ShowPublicipRequest): Promise<ShowPublicipResponse> {
        const options = ParamCreater().showPublicip(showPublicipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定弹性IP实例的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性公网IP的标签
     * @param {string} publicipId 资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPublicipTags(showPublicipTagsRequest?: ShowPublicipTagsRequest): Promise<ShowPublicipTagsResponse> {
        const options = ParamCreater().showPublicipTags(showPublicipTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新弹性公网IP，将弹性公网IP跟一个网卡绑定或者解绑定，转换IP地址版本类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新弹性公网IP
     * @param {string} publicipId 弹性公网IP唯一标识
     * @param {UpdatePublicipsRequestBody} publicip 弹性公网IP对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePublicip(updatePublicipRequest?: UpdatePublicipRequest): Promise<UpdatePublicipResponse> {
        const options = ParamCreater().updatePublicip(updatePublicipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Job状态接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Job状态接口
     * @param {string} jobId 批量操作返回的JOB ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourcesJobDetail(showResourcesJobDetailRequest?: ShowResourcesJobDetailRequest): Promise<ShowResourcesJobDetailResponse> {
        const options = ParamCreater().showResourcesJobDetail(showResourcesJobDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建浮动IP的外部网络UUID，请使用GET /v2.0/networks?router:external&#x3D;True或neutron net-external-list方式获取。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建浮动IP
     * @param {NeutronCreateFloatingIpRequestBody} floatingip 创建floatingip对象列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronCreateFloatingIp(neutronCreateFloatingIpRequest?: NeutronCreateFloatingIpRequest): Promise<NeutronCreateFloatingIpResponse> {
        const options = ParamCreater().neutronCreateFloatingIp(neutronCreateFloatingIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的浮动IP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除浮动IP
     * @param {string} floatingipId floatingip的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronDeleteFloatingIp(neutronDeleteFloatingIpRequest?: NeutronDeleteFloatingIpRequest): Promise<NeutronDeleteFloatingIpResponse> {
        const options = ParamCreater().neutronDeleteFloatingIp(neutronDeleteFloatingIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询提交请求的租户有权限操作的所有浮动IP地址。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询浮动IP列表
     * @param {number} [limit] 每页显示的条目数量。
     * @param {string} [marker] 取值为上一页数据的最后一条记录的id，当marker参数为无效id时，response将响应错误码400
     * @param {boolean} [pageReverse] False/True，是否设置分页的顺序。
     * @param {string} [id] 浮动IP的id。
     * @param {string} [floatingIpAddress] 浮动IP地址。
     * @param {string} [routerId] 所属路由器id。
     * @param {string} [portId] 端口id。
     * @param {string} [fixedIpAddress] 关联端口的私有IP地址。
     * @param {string} [tenantId] 项目ID。
     * @param {string} [floatingNetworkId] 外部网络的id。只能使用固定的外网，外部网络的信息请通过GET /v2.0/networks?router:external&#x3D;True或GET /v2.0/networks?name&#x3D;{floating_network}或neutron net-external-list方式查询
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronListFloatingIps(neutronListFloatingIpsRequest?: NeutronListFloatingIpsRequest): Promise<NeutronListFloatingIpsResponse> {
        const options = ParamCreater().neutronListFloatingIps(neutronListFloatingIpsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询浮动IP详情，包括浮动IP状态，浮动IP所属路由器ID，浮动IP的外部网络ID等等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询浮动IP
     * @param {string} floatingipId floatingip的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronShowFloatingIp(neutronShowFloatingIpRequest?: NeutronShowFloatingIpRequest): Promise<NeutronShowFloatingIpResponse> {
        const options = ParamCreater().neutronShowFloatingIp(neutronShowFloatingIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新浮动IP。
     *  更新时需在URL中给出浮动IP地址的ID。
     *  port_id 为空，则表示浮动IP从端口解绑。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新浮动IP
     * @param {string} floatingipId floatingip的ID
     * @param {NeutronUpdateFloatingIpRequestBody} neutronUpdateFloatingIpRequestBody 更新floatingip对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public neutronUpdateFloatingIp(neutronUpdateFloatingIpRequest?: NeutronUpdateFloatingIpRequest): Promise<NeutronUpdateFloatingIpResponse> {
        const options = ParamCreater().neutronUpdateFloatingIp(neutronUpdateFloatingIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 共享带宽插入弹性公网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addPublicipsIntoSharedBandwidth(addPublicipsIntoSharedBandwidthRequest?: AddPublicipsIntoSharedBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/bandwidths/{bandwidth_id}/insert",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let bandwidthId;

            if (addPublicipsIntoSharedBandwidthRequest !== null && addPublicipsIntoSharedBandwidthRequest !== undefined) {
                if (addPublicipsIntoSharedBandwidthRequest instanceof AddPublicipsIntoSharedBandwidthRequest) {
                    bandwidthId = addPublicipsIntoSharedBandwidthRequest.bandwidthId;
                    body = addPublicipsIntoSharedBandwidthRequest.body
                } else {
                    bandwidthId = addPublicipsIntoSharedBandwidthRequest['bandwidth_id'];
                    body = addPublicipsIntoSharedBandwidthRequest['body'];
                }
            }

        
            if (bandwidthId === null || bandwidthId === undefined) {
            throw new RequiredError('bandwidthId','Required parameter bandwidthId was null or undefined when calling addPublicipsIntoSharedBandwidth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'bandwidth_id': bandwidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建共享带宽。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateSharedBandwidths(batchCreateSharedBandwidthsRequest?: BatchCreateSharedBandwidthsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/batch-bandwidths",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (batchCreateSharedBandwidthsRequest !== null && batchCreateSharedBandwidthsRequest !== undefined) {
                if (batchCreateSharedBandwidthsRequest instanceof BatchCreateSharedBandwidthsRequest) {
                    body = batchCreateSharedBandwidthsRequest.body
                } else {
                    body = batchCreateSharedBandwidthsRequest['body'];
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
         * 租户按需转包接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeBandwidthToPeriod(changeBandwidthToPeriodRequest?: ChangeBandwidthToPeriodRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/bandwidths/change-to-period",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (changeBandwidthToPeriodRequest !== null && changeBandwidthToPeriodRequest !== undefined) {
                if (changeBandwidthToPeriodRequest instanceof ChangeBandwidthToPeriodRequest) {
                    body = changeBandwidthToPeriodRequest.body
                } else {
                    body = changeBandwidthToPeriodRequest['body'];
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
         * 创建共享带宽。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSharedBandwidth(createSharedBandwidthRequest?: CreateSharedBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/bandwidths",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createSharedBandwidthRequest !== null && createSharedBandwidthRequest !== undefined) {
                if (createSharedBandwidthRequest instanceof CreateSharedBandwidthRequest) {
                    body = createSharedBandwidthRequest.body
                } else {
                    body = createSharedBandwidthRequest['body'];
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
         * 删除共享带宽。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSharedBandwidth(deleteSharedBandwidthRequest?: DeleteSharedBandwidthRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/{project_id}/bandwidths/{bandwidth_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let bandwidthId;

            if (deleteSharedBandwidthRequest !== null && deleteSharedBandwidthRequest !== undefined) {
                if (deleteSharedBandwidthRequest instanceof DeleteSharedBandwidthRequest) {
                    bandwidthId = deleteSharedBandwidthRequest.bandwidthId;
                } else {
                    bandwidthId = deleteSharedBandwidthRequest['bandwidth_id'];
                }
            }

        
            if (bandwidthId === null || bandwidthId === undefined) {
            throw new RequiredError('bandwidthId','Required parameter bandwidthId was null or undefined when calling deleteSharedBandwidth.');
            }

            options.pathParams = { 'bandwidth_id': bandwidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询带宽加油包列表信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBandwidthPkg(listBandwidthPkgRequest?: ListBandwidthPkgRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/bandwidthpkgs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let offset;

            if (listBandwidthPkgRequest !== null && listBandwidthPkgRequest !== undefined) {
                if (listBandwidthPkgRequest instanceof ListBandwidthPkgRequest) {
                    limit = listBandwidthPkgRequest.limit;
                    marker = listBandwidthPkgRequest.marker;
                    offset = listBandwidthPkgRequest.offset;
                } else {
                    limit = listBandwidthPkgRequest['limit'];
                    marker = listBandwidthPkgRequest['marker'];
                    offset = listBandwidthPkgRequest['offset'];
                }
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询带宽列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBandwidths(listBandwidthsRequest?: ListBandwidthsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/bandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let enterpriseProjectId;
            
            let shareType;

            if (listBandwidthsRequest !== null && listBandwidthsRequest !== undefined) {
                if (listBandwidthsRequest instanceof ListBandwidthsRequest) {
                    marker = listBandwidthsRequest.marker;
                    limit = listBandwidthsRequest.limit;
                    enterpriseProjectId = listBandwidthsRequest.enterpriseProjectId;
                    shareType = listBandwidthsRequest.shareType;
                } else {
                    marker = listBandwidthsRequest['marker'];
                    limit = listBandwidthsRequest['limit'];
                    enterpriseProjectId = listBandwidthsRequest['enterprise_project_id'];
                    shareType = listBandwidthsRequest['share_type'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (shareType !== null && shareType !== undefined) {
                localVarQueryParameter['share_type'] = shareType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询配额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotas(listQuotasRequest?: ListQuotasRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;

            if (listQuotasRequest !== null && listQuotasRequest !== undefined) {
                if (listQuotasRequest instanceof ListQuotasRequest) {
                    type = listQuotasRequest.type;
                } else {
                    type = listQuotasRequest['type'];
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
         * 共享带宽移除弹性公网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removePublicipsFromSharedBandwidth(removePublicipsFromSharedBandwidthRequest?: RemovePublicipsFromSharedBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/bandwidths/{bandwidth_id}/remove",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let bandwidthId;

            if (removePublicipsFromSharedBandwidthRequest !== null && removePublicipsFromSharedBandwidthRequest !== undefined) {
                if (removePublicipsFromSharedBandwidthRequest instanceof RemovePublicipsFromSharedBandwidthRequest) {
                    bandwidthId = removePublicipsFromSharedBandwidthRequest.bandwidthId;
                    body = removePublicipsFromSharedBandwidthRequest.body
                } else {
                    bandwidthId = removePublicipsFromSharedBandwidthRequest['bandwidth_id'];
                    body = removePublicipsFromSharedBandwidthRequest['body'];
                }
            }

        
            if (bandwidthId === null || bandwidthId === undefined) {
            throw new RequiredError('bandwidthId','Required parameter bandwidthId was null or undefined when calling removePublicipsFromSharedBandwidth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'bandwidth_id': bandwidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询带宽
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBandwidth(showBandwidthRequest?: ShowBandwidthRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/bandwidths/{bandwidth_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let bandwidthId;

            if (showBandwidthRequest !== null && showBandwidthRequest !== undefined) {
                if (showBandwidthRequest instanceof ShowBandwidthRequest) {
                    bandwidthId = showBandwidthRequest.bandwidthId;
                } else {
                    bandwidthId = showBandwidthRequest['bandwidth_id'];
                }
            }

        
            if (bandwidthId === null || bandwidthId === undefined) {
            throw new RequiredError('bandwidthId','Required parameter bandwidthId was null or undefined when calling showBandwidth.');
            }

            options.pathParams = { 'bandwidth_id': bandwidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新带宽。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBandwidth(updateBandwidthRequest?: UpdateBandwidthRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/bandwidths/{bandwidth_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let bandwidthId;

            if (updateBandwidthRequest !== null && updateBandwidthRequest !== undefined) {
                if (updateBandwidthRequest instanceof UpdateBandwidthRequest) {
                    bandwidthId = updateBandwidthRequest.bandwidthId;
                    body = updateBandwidthRequest.body
                } else {
                    bandwidthId = updateBandwidthRequest['bandwidth_id'];
                    body = updateBandwidthRequest['body'];
                }
            }

        
            if (bandwidthId === null || bandwidthId === undefined) {
            throw new RequiredError('bandwidthId','Required parameter bandwidthId was null or undefined when calling updateBandwidth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'bandwidth_id': bandwidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新带宽。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePrePaidBandwidth(updatePrePaidBandwidthRequest?: UpdatePrePaidBandwidthRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/{project_id}/bandwidths/{bandwidth_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let bandwidthId;

            if (updatePrePaidBandwidthRequest !== null && updatePrePaidBandwidthRequest !== undefined) {
                if (updatePrePaidBandwidthRequest instanceof UpdatePrePaidBandwidthRequest) {
                    bandwidthId = updatePrePaidBandwidthRequest.bandwidthId;
                    body = updatePrePaidBandwidthRequest.body
                } else {
                    bandwidthId = updatePrePaidBandwidthRequest['bandwidth_id'];
                    body = updatePrePaidBandwidthRequest['body'];
                }
            }

        
            if (bandwidthId === null || bandwidthId === undefined) {
            throw new RequiredError('bandwidthId','Required parameter bandwidthId was null or undefined when calling updatePrePaidBandwidth.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'bandwidth_id': bandwidthId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为指定的弹性公网IP资源实例批量添加标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreatePublicipTags(batchCreatePublicipTagsRequest?: BatchCreatePublicipTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/publicips/{publicip_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let publicipId;

            if (batchCreatePublicipTagsRequest !== null && batchCreatePublicipTagsRequest !== undefined) {
                if (batchCreatePublicipTagsRequest instanceof BatchCreatePublicipTagsRequest) {
                    publicipId = batchCreatePublicipTagsRequest.publicipId;
                    body = batchCreatePublicipTagsRequest.body
                } else {
                    publicipId = batchCreatePublicipTagsRequest['publicip_id'];
                    body = batchCreatePublicipTagsRequest['body'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling batchCreatePublicipTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'publicip_id': publicipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreatePublicips(batchCreatePublicipsRequest?: BatchCreatePublicipsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/batchpublicips",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (batchCreatePublicipsRequest !== null && batchCreatePublicipsRequest !== undefined) {
                if (batchCreatePublicipsRequest instanceof BatchCreatePublicipsRequest) {
                    body = batchCreatePublicipsRequest.body
                } else {
                    body = batchCreatePublicipsRequest['body'];
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
         * 批量删除弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeletePublicIp(batchDeletePublicIpRequest?: BatchDeletePublicIpRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/batchpublicips",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (batchDeletePublicIpRequest !== null && batchDeletePublicIpRequest !== undefined) {
                if (batchDeletePublicIpRequest instanceof BatchDeletePublicIpRequest) {
                    body = batchDeletePublicIpRequest.body
                } else {
                    body = batchDeletePublicIpRequest['body'];
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
         * 为指定的弹性公网IP资源实例批量删除标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeletePublicipTags(batchDeletePublicipTagsRequest?: BatchDeletePublicipTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/publicips/{publicip_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let publicipId;

            if (batchDeletePublicipTagsRequest !== null && batchDeletePublicipTagsRequest !== undefined) {
                if (batchDeletePublicipTagsRequest instanceof BatchDeletePublicipTagsRequest) {
                    publicipId = batchDeletePublicipTagsRequest.publicipId;
                    body = batchDeletePublicipTagsRequest.body
                } else {
                    publicipId = batchDeletePublicipTagsRequest['publicip_id'];
                    body = batchDeletePublicipTagsRequest['body'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling batchDeletePublicipTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'publicip_id': publicipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量解绑弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDisassociatePublicips(batchDisassociatePublicipsRequest?: BatchDisassociatePublicipsRequest) {
            const options = {
                method: "PATCH",
                url: "/v2/{project_id}/batchpublicips",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (batchDisassociatePublicipsRequest !== null && batchDisassociatePublicipsRequest !== undefined) {
                if (batchDisassociatePublicipsRequest instanceof BatchDisassociatePublicipsRequest) {
                    body = batchDisassociatePublicipsRequest.body
                } else {
                    body = batchDisassociatePublicipsRequest['body'];
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
         * 租户按需转包接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changePublicipToPeriod(changePublicipToPeriodRequest?: ChangePublicipToPeriodRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/publicips/change-to-period",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (changePublicipToPeriodRequest !== null && changePublicipToPeriodRequest !== undefined) {
                if (changePublicipToPeriodRequest instanceof ChangePublicipToPeriodRequest) {
                    body = changePublicipToPeriodRequest.body
                } else {
                    body = changePublicipToPeriodRequest['body'];
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
         * 查询PublicIp数量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countPublicIp() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/elasticips",
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
         * 查询PublicIp实例数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countPublicIpInstance() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/publicip/instances",
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
         * 申请包年包月的弹性公网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPrePaidPublicip(createPrePaidPublicipRequest?: CreatePrePaidPublicipRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/publicips",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createPrePaidPublicipRequest !== null && createPrePaidPublicipRequest !== undefined) {
                if (createPrePaidPublicipRequest instanceof CreatePrePaidPublicipRequest) {
                    body = createPrePaidPublicipRequest.body
                } else {
                    body = createPrePaidPublicipRequest['body'];
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
         * 申请弹性公网IP，支持IPv4和IPv6。
         *  弹性公网IP（Elastic IP）提供独立的公网IP资源，包括公网IP地址与公网出口带宽服务。可以与弹性云服务器、裸金属服务器、虚拟IP、弹性负载均衡、NAT网关等资源灵活地绑定及解绑。拥有多种灵活的计费方式，可以满足各种业务场景的需要。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPublicip(createPublicipRequest?: CreatePublicipRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/publicips",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createPublicipRequest !== null && createPublicipRequest !== undefined) {
                if (createPublicipRequest instanceof CreatePublicipRequest) {
                    body = createPublicipRequest.body
                } else {
                    body = createPublicipRequest['body'];
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
         * 给指定弹性IP资源实例增加标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPublicipTag(createPublicipTagRequest?: CreatePublicipTagRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/publicips/{publicip_id}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let publicipId;

            if (createPublicipTagRequest !== null && createPublicipTagRequest !== undefined) {
                if (createPublicipTagRequest instanceof CreatePublicipTagRequest) {
                    publicipId = createPublicipTagRequest.publicipId;
                    body = createPublicipTagRequest.body
                } else {
                    publicipId = createPublicipTagRequest['publicip_id'];
                    body = createPublicipTagRequest['body'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling createPublicipTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'publicip_id': publicipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除弹性公网IP,绑定状态eip不允许直接删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePublicip(deletePublicipRequest?: DeletePublicipRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/publicips/{publicip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let publicipId;

            if (deletePublicipRequest !== null && deletePublicipRequest !== undefined) {
                if (deletePublicipRequest instanceof DeletePublicipRequest) {
                    publicipId = deletePublicipRequest.publicipId;
                } else {
                    publicipId = deletePublicipRequest['publicip_id'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling deletePublicip.');
            }

            options.pathParams = { 'publicip_id': publicipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定弹性公网IP的标签信息。其中project_id是项目ID，publicip_id 是要操作的弹性公网IP的id。key是要删除标签的键。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePublicipTag(deletePublicipTagRequest?: DeletePublicipTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/{project_id}/publicips/{publicip_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let publicipId;
            
            let key;

            if (deletePublicipTagRequest !== null && deletePublicipTagRequest !== undefined) {
                if (deletePublicipTagRequest instanceof DeletePublicipTagRequest) {
                    publicipId = deletePublicipTagRequest.publicipId;
                    key = deletePublicipTagRequest.key;
                } else {
                    publicipId = deletePublicipTagRequest['publicip_id'];
                    key = deletePublicipTagRequest['key'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling deletePublicipTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deletePublicipTag.');
            }

            options.pathParams = { 'publicip_id': publicipId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户在指定区域和实例类型的所有标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPublicipTags() {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/publicips/tags",
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
         * 查询弹性公网IP列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPublicips(listPublicipsRequest?: ListPublicipsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/publicips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let ipVersion;
            
            let enterpriseProjectId;
            
            let portId;
            
            let publicIpAddress;
            
            let privateIpAddress;
            
            let id;
            
            let allowShareBandwidthTypeAny;

            if (listPublicipsRequest !== null && listPublicipsRequest !== undefined) {
                if (listPublicipsRequest instanceof ListPublicipsRequest) {
                    marker = listPublicipsRequest.marker;
                    limit = listPublicipsRequest.limit;
                    ipVersion = listPublicipsRequest.ipVersion;
                    enterpriseProjectId = listPublicipsRequest.enterpriseProjectId;
                    portId = listPublicipsRequest.portId;
                    publicIpAddress = listPublicipsRequest.publicIpAddress;
                    privateIpAddress = listPublicipsRequest.privateIpAddress;
                    id = listPublicipsRequest.id;
                    allowShareBandwidthTypeAny = listPublicipsRequest.allowShareBandwidthTypeAny;
                } else {
                    marker = listPublicipsRequest['marker'];
                    limit = listPublicipsRequest['limit'];
                    ipVersion = listPublicipsRequest['ip_version'];
                    enterpriseProjectId = listPublicipsRequest['enterprise_project_id'];
                    portId = listPublicipsRequest['port_id'];
                    publicIpAddress = listPublicipsRequest['public_ip_address'];
                    privateIpAddress = listPublicipsRequest['private_ip_address'];
                    id = listPublicipsRequest['id'];
                    allowShareBandwidthTypeAny = listPublicipsRequest['allow_share_bandwidth_type_any'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (portId !== null && portId !== undefined) {
                localVarQueryParameter['port_id'] = portId;
            }
            if (publicIpAddress !== null && publicIpAddress !== undefined) {
                localVarQueryParameter['public_ip_address'] = publicIpAddress;
            }
            if (privateIpAddress !== null && privateIpAddress !== undefined) {
                localVarQueryParameter['private_ip_address'] = privateIpAddress;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (allowShareBandwidthTypeAny !== null && allowShareBandwidthTypeAny !== undefined) {
                localVarQueryParameter['allow_share_bandwidth_type_any'] = allowShareBandwidthTypeAny;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤弹性公网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPublicipsByTags(listPublicipsByTagsRequest?: ListPublicipsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/publicips/resource_instances/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (listPublicipsByTagsRequest !== null && listPublicipsByTagsRequest !== undefined) {
                if (listPublicipsByTagsRequest instanceof ListPublicipsByTagsRequest) {
                    body = listPublicipsByTagsRequest.body
                } else {
                    body = listPublicipsByTagsRequest['body'];
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
         * 查询PublicIp类型
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPublicIpType() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/publicip_types",
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
         * 查询指定的弹性公网IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPublicip(showPublicipRequest?: ShowPublicipRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/publicips/{publicip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let publicipId;

            if (showPublicipRequest !== null && showPublicipRequest !== undefined) {
                if (showPublicipRequest instanceof ShowPublicipRequest) {
                    publicipId = showPublicipRequest.publicipId;
                } else {
                    publicipId = showPublicipRequest['publicip_id'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling showPublicip.');
            }

            options.pathParams = { 'publicip_id': publicipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定弹性IP实例的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPublicipTags(showPublicipTagsRequest?: ShowPublicipTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/{project_id}/publicips/{publicip_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let publicipId;

            if (showPublicipTagsRequest !== null && showPublicipTagsRequest !== undefined) {
                if (showPublicipTagsRequest instanceof ShowPublicipTagsRequest) {
                    publicipId = showPublicipTagsRequest.publicipId;
                } else {
                    publicipId = showPublicipTagsRequest['publicip_id'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling showPublicipTags.');
            }

            options.pathParams = { 'publicip_id': publicipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新弹性公网IP，将弹性公网IP跟一个网卡绑定或者解绑定，转换IP地址版本类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePublicip(updatePublicipRequest?: UpdatePublicipRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/publicips/{publicip_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let publicipId;

            if (updatePublicipRequest !== null && updatePublicipRequest !== undefined) {
                if (updatePublicipRequest instanceof UpdatePublicipRequest) {
                    publicipId = updatePublicipRequest.publicipId;
                    body = updatePublicipRequest.body
                } else {
                    publicipId = updatePublicipRequest['publicip_id'];
                    body = updatePublicipRequest['body'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling updatePublicip.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'publicip_id': publicipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Job状态接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourcesJobDetail(showResourcesJobDetailRequest?: ShowResourcesJobDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showResourcesJobDetailRequest !== null && showResourcesJobDetailRequest !== undefined) {
                if (showResourcesJobDetailRequest instanceof ShowResourcesJobDetailRequest) {
                    jobId = showResourcesJobDetailRequest.jobId;
                } else {
                    jobId = showResourcesJobDetailRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showResourcesJobDetail.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建浮动IP的外部网络UUID，请使用GET /v2.0/networks?router:external&#x3D;True或neutron net-external-list方式获取。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronCreateFloatingIp(neutronCreateFloatingIpRequest?: NeutronCreateFloatingIpRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/floatingips",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (neutronCreateFloatingIpRequest !== null && neutronCreateFloatingIpRequest !== undefined) {
                if (neutronCreateFloatingIpRequest instanceof NeutronCreateFloatingIpRequest) {
                    body = neutronCreateFloatingIpRequest.body
                } else {
                    body = neutronCreateFloatingIpRequest['body'];
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
         * 删除指定的浮动IP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronDeleteFloatingIp(neutronDeleteFloatingIpRequest?: NeutronDeleteFloatingIpRequest) {
            const options = {
                method: "DELETE",
                url: "/v2.0/floatingips/{floatingip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let floatingipId;

            if (neutronDeleteFloatingIpRequest !== null && neutronDeleteFloatingIpRequest !== undefined) {
                if (neutronDeleteFloatingIpRequest instanceof NeutronDeleteFloatingIpRequest) {
                    floatingipId = neutronDeleteFloatingIpRequest.floatingipId;
                } else {
                    floatingipId = neutronDeleteFloatingIpRequest['floatingip_id'];
                }
            }

        
            if (floatingipId === null || floatingipId === undefined) {
            throw new RequiredError('floatingipId','Required parameter floatingipId was null or undefined when calling neutronDeleteFloatingIp.');
            }

            options.pathParams = { 'floatingip_id': floatingipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询提交请求的租户有权限操作的所有浮动IP地址。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronListFloatingIps(neutronListFloatingIpsRequest?: NeutronListFloatingIpsRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/floatingips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let floatingIpAddress;
            
            let routerId;
            
            let portId;
            
            let fixedIpAddress;
            
            let tenantId;
            
            let floatingNetworkId;

            if (neutronListFloatingIpsRequest !== null && neutronListFloatingIpsRequest !== undefined) {
                if (neutronListFloatingIpsRequest instanceof NeutronListFloatingIpsRequest) {
                    limit = neutronListFloatingIpsRequest.limit;
                    marker = neutronListFloatingIpsRequest.marker;
                    pageReverse = neutronListFloatingIpsRequest.pageReverse;
                    id = neutronListFloatingIpsRequest.id;
                    floatingIpAddress = neutronListFloatingIpsRequest.floatingIpAddress;
                    routerId = neutronListFloatingIpsRequest.routerId;
                    portId = neutronListFloatingIpsRequest.portId;
                    fixedIpAddress = neutronListFloatingIpsRequest.fixedIpAddress;
                    tenantId = neutronListFloatingIpsRequest.tenantId;
                    floatingNetworkId = neutronListFloatingIpsRequest.floatingNetworkId;
                } else {
                    limit = neutronListFloatingIpsRequest['limit'];
                    marker = neutronListFloatingIpsRequest['marker'];
                    pageReverse = neutronListFloatingIpsRequest['page_reverse'];
                    id = neutronListFloatingIpsRequest['id'];
                    floatingIpAddress = neutronListFloatingIpsRequest['floating_ip_address'];
                    routerId = neutronListFloatingIpsRequest['router_id'];
                    portId = neutronListFloatingIpsRequest['port_id'];
                    fixedIpAddress = neutronListFloatingIpsRequest['fixed_ip_address'];
                    tenantId = neutronListFloatingIpsRequest['tenant_id'];
                    floatingNetworkId = neutronListFloatingIpsRequest['floating_network_id'];
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
            if (floatingIpAddress !== null && floatingIpAddress !== undefined) {
                localVarQueryParameter['floating_ip_address'] = floatingIpAddress;
            }
            if (routerId !== null && routerId !== undefined) {
                localVarQueryParameter['router_id'] = routerId;
            }
            if (portId !== null && portId !== undefined) {
                localVarQueryParameter['port_id'] = portId;
            }
            if (fixedIpAddress !== null && fixedIpAddress !== undefined) {
                localVarQueryParameter['fixed_ip_address'] = fixedIpAddress;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }
            if (floatingNetworkId !== null && floatingNetworkId !== undefined) {
                localVarQueryParameter['floating_network_id'] = floatingNetworkId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询浮动IP详情，包括浮动IP状态，浮动IP所属路由器ID，浮动IP的外部网络ID等等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronShowFloatingIp(neutronShowFloatingIpRequest?: NeutronShowFloatingIpRequest) {
            const options = {
                method: "GET",
                url: "/v2.0/floatingips/{floatingip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let floatingipId;

            if (neutronShowFloatingIpRequest !== null && neutronShowFloatingIpRequest !== undefined) {
                if (neutronShowFloatingIpRequest instanceof NeutronShowFloatingIpRequest) {
                    floatingipId = neutronShowFloatingIpRequest.floatingipId;
                } else {
                    floatingipId = neutronShowFloatingIpRequest['floatingip_id'];
                }
            }

        
            if (floatingipId === null || floatingipId === undefined) {
            throw new RequiredError('floatingipId','Required parameter floatingipId was null or undefined when calling neutronShowFloatingIp.');
            }

            options.pathParams = { 'floatingip_id': floatingipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新浮动IP。
         *  更新时需在URL中给出浮动IP地址的ID。
         *  port_id 为空，则表示浮动IP从端口解绑。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        neutronUpdateFloatingIp(neutronUpdateFloatingIpRequest?: NeutronUpdateFloatingIpRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/floatingips/{floatingip_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let floatingipId;

            if (neutronUpdateFloatingIpRequest !== null && neutronUpdateFloatingIpRequest !== undefined) {
                if (neutronUpdateFloatingIpRequest instanceof NeutronUpdateFloatingIpRequest) {
                    floatingipId = neutronUpdateFloatingIpRequest.floatingipId;
                    body = neutronUpdateFloatingIpRequest.body
                } else {
                    floatingipId = neutronUpdateFloatingIpRequest['floatingip_id'];
                    body = neutronUpdateFloatingIpRequest['body'];
                }
            }

        
            if (floatingipId === null || floatingipId === undefined) {
            throw new RequiredError('floatingipId','Required parameter floatingipId was null or undefined when calling neutronUpdateFloatingIp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'floatingip_id': floatingipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): EipClient {
    return new EipClient(client);
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