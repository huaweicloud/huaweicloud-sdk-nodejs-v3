import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AssociatePublicipsOption } from './model/AssociatePublicipsOption';
import { AssociatePublicipsRequest } from './model/AssociatePublicipsRequest';
import { AssociatePublicipsRequestBody } from './model/AssociatePublicipsRequestBody';
import { AssociatePublicipsResponse } from './model/AssociatePublicipsResponse';
import { AttachBatchPublicIpRequest } from './model/AttachBatchPublicIpRequest';
import { AttachBatchPublicIpResponse } from './model/AttachBatchPublicIpResponse';
import { AttachShareBandwidthRequest } from './model/AttachShareBandwidthRequest';
import { AttachShareBandwidthResponse } from './model/AttachShareBandwidthResponse';
import { AttachSharebwDict } from './model/AttachSharebwDict';
import { AttachSharebwReq } from './model/AttachSharebwReq';
import { BackboneBandwidthResp } from './model/BackboneBandwidthResp';
import { BandWidthRules } from './model/BandWidthRules';
import { BandwidthInfoResp } from './model/BandwidthInfoResp';
import { BandwidthResp } from './model/BandwidthResp';
import { BandwidthResponseBody } from './model/BandwidthResponseBody';
import { BatchAttachSharebwDict } from './model/BatchAttachSharebwDict';
import { BatchAttachSharebwReq } from './model/BatchAttachSharebwReq';
import { BatchPublicipResp } from './model/BatchPublicipResp';
import { BillingInfoDict } from './model/BillingInfoDict';
import { CommonPoolDict } from './model/CommonPoolDict';
import { CommonPoolsWithBorderGroupDict } from './model/CommonPoolsWithBorderGroupDict';
import { CountEipAvailableResourcesRequest } from './model/CountEipAvailableResourcesRequest';
import { CountEipAvailableResourcesResponse } from './model/CountEipAvailableResourcesResponse';
import { CreateTenantVpcIgwRequest } from './model/CreateTenantVpcIgwRequest';
import { CreateTenantVpcIgwRequestBody } from './model/CreateTenantVpcIgwRequestBody';
import { CreateTenantVpcIgwRequestBodyVpcIgw } from './model/CreateTenantVpcIgwRequestBodyVpcIgw';
import { CreateTenantVpcIgwResponse } from './model/CreateTenantVpcIgwResponse';
import { DeleteTenantVpcIgwRequest } from './model/DeleteTenantVpcIgwRequest';
import { DeleteTenantVpcIgwResponse } from './model/DeleteTenantVpcIgwResponse';
import { DetachBatchPublicIpRequest } from './model/DetachBatchPublicIpRequest';
import { DetachBatchPublicIpResponse } from './model/DetachBatchPublicIpResponse';
import { DetachBatchSharedbwReq } from './model/DetachBatchSharedbwReq';
import { DetachBatchSharedbwReqPublicips } from './model/DetachBatchSharedbwReqPublicips';
import { DetachShareBandwidthRequest } from './model/DetachShareBandwidthRequest';
import { DetachShareBandwidthResponse } from './model/DetachShareBandwidthResponse';
import { DetachSharedbwDict } from './model/DetachSharedbwDict';
import { DetachSharedbwReq } from './model/DetachSharedbwReq';
import { DetachSharedbwReqPublicip } from './model/DetachSharedbwReqPublicip';
import { DisableNat64Request } from './model/DisableNat64Request';
import { DisableNat64Response } from './model/DisableNat64Response';
import { DisassociatePublicipsRequest } from './model/DisassociatePublicipsRequest';
import { DisassociatePublicipsResponse } from './model/DisassociatePublicipsResponse';
import { EipBandwidthResponseBody } from './model/EipBandwidthResponseBody';
import { EipResourcesAvailableV3RequestBody } from './model/EipResourcesAvailableV3RequestBody';
import { EnableNat64Request } from './model/EnableNat64Request';
import { EnableNat64Response } from './model/EnableNat64Response';
import { ExtLimitPojo } from './model/ExtLimitPojo';
import { GeipBindingsInternalResp } from './model/GeipBindingsInternalResp';
import { InstanceVnicResp } from './model/InstanceVnicResp';
import { InstancevirtualListResp } from './model/InstancevirtualListResp';
import { ListBandwidthRequest } from './model/ListBandwidthRequest';
import { ListBandwidthResponse } from './model/ListBandwidthResponse';
import { ListBandwidthsLimitRequest } from './model/ListBandwidthsLimitRequest';
import { ListBandwidthsLimitResponse } from './model/ListBandwidthsLimitResponse';
import { ListCommonPoolsRequest } from './model/ListCommonPoolsRequest';
import { ListCommonPoolsResponse } from './model/ListCommonPoolsResponse';
import { ListEipBandwidthsRequest } from './model/ListEipBandwidthsRequest';
import { ListEipBandwidthsResponse } from './model/ListEipBandwidthsResponse';
import { ListProjectGeipBindingsRequest } from './model/ListProjectGeipBindingsRequest';
import { ListProjectGeipBindingsResponse } from './model/ListProjectGeipBindingsResponse';
import { ListPublicBorderGroupsRequest } from './model/ListPublicBorderGroupsRequest';
import { ListPublicBorderGroupsResponse } from './model/ListPublicBorderGroupsResponse';
import { ListPublicipPoolRequest } from './model/ListPublicipPoolRequest';
import { ListPublicipPoolResponse } from './model/ListPublicipPoolResponse';
import { ListPublicipsRequest } from './model/ListPublicipsRequest';
import { ListPublicipsResponse } from './model/ListPublicipsResponse';
import { ListShareBandwidthTypesRequest } from './model/ListShareBandwidthTypesRequest';
import { ListShareBandwidthTypesResponse } from './model/ListShareBandwidthTypesResponse';
import { ListTenantVpcIgwsRequest } from './model/ListTenantVpcIgwsRequest';
import { ListTenantVpcIgwsResponse } from './model/ListTenantVpcIgwsResponse';
import { NexthopDict } from './model/NexthopDict';
import { PageInfoDict } from './model/PageInfoDict';
import { PageInfoOption } from './model/PageInfoOption';
import { ProfileInfo } from './model/ProfileInfo';
import { PublicipBandwidthInfo } from './model/PublicipBandwidthInfo';
import { PublicipInfoResponseBody } from './model/PublicipInfoResponseBody';
import { PublicipInstanceResp } from './model/PublicipInstanceResp';
import { PublicipPoolShowResp } from './model/PublicipPoolShowResp';
import { PublicipResp } from './model/PublicipResp';
import { PublicipSingleShowResp } from './model/PublicipSingleShowResp';
import { PublicipUpdateResp } from './model/PublicipUpdateResp';
import { ShareBandwidthTypeShowResp } from './model/ShareBandwidthTypeShowResp';
import { ShowInternalVpcIgwRequest } from './model/ShowInternalVpcIgwRequest';
import { ShowInternalVpcIgwResponse } from './model/ShowInternalVpcIgwResponse';
import { ShowPublicipPoolRequest } from './model/ShowPublicipPoolRequest';
import { ShowPublicipPoolResponse } from './model/ShowPublicipPoolResponse';
import { ShowPublicipRequest } from './model/ShowPublicipRequest';
import { ShowPublicipResponse } from './model/ShowPublicipResponse';
import { ShowTenantDict } from './model/ShowTenantDict';
import { TagsInfo } from './model/TagsInfo';
import { UpdatePublicipOption } from './model/UpdatePublicipOption';
import { UpdatePublicipRequest } from './model/UpdatePublicipRequest';
import { UpdatePublicipResponse } from './model/UpdatePublicipResponse';
import { UpdatePublicipsRequestBody } from './model/UpdatePublicipsRequestBody';
import { UpdateTenantVpcIgwRequest } from './model/UpdateTenantVpcIgwRequest';
import { UpdateTenantVpcIgwRequestBody } from './model/UpdateTenantVpcIgwRequestBody';
import { UpdateTenantVpcIgwRequestBodyVpcIgw } from './model/UpdateTenantVpcIgwRequestBodyVpcIgw';
import { UpdateTenantVpcIgwResponse } from './model/UpdateTenantVpcIgwResponse';
import { VnicInfo } from './model/VnicInfo';
import { VnicResp } from './model/VnicResp';
import { VpcIgwsTenantResp } from './model/VpcIgwsTenantResp';

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
     * 查询带宽列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询带宽列表
     * @param {string} [limit] - 功能说明：每页返回的个数 - 取值范围：取值范围：1~[2000]，其中2000为局点差异项，具体取值由局点决定
     * @param {string} [marker] - 功能说明：分页查询起始的资源ID，为空时为查询第一页
     * @param {string} [id] - 功能说明：带宽唯一标识
     * @param {Array<string>} [fields] display in the form \&quot;fields&#x3D;id&amp;fields&#x3D;name&amp;...\&quot;  Supported fields：id/name/tenant_id/size/ratio_95peak_plus/ingress_size/bandwidth_type/admin_state/billing_info/charge_mode/type/publicip_info/enable_bandwidth_rules/rule_quota/bandwidth_rules/public_border_group/created_at/updated_at/lock_infos
     * @param {string} [bandwidthType] - 功能说明：带宽类型，共享带宽默认为share。 - 取值范围：share，bgp，telcom，sbgp等。   - share：共享带宽   - bgp：动态bgp   - telcom ：联通   - sbgp：静态bgp
     * @param {string} [name] - 功能说明：宽带名称，按照宽带名称过滤
     * @param {string} [nameLike] - 功能说明：根据宽带名称模糊查询过滤
     * @param {string} [ingressSize] - 功能说明：根据入云大小过滤
     * @param {string} [adminState] - 功能说明：根据宽带状态过滤
     * @param {string} [billingInfo] - 功能说明：根据计费信息过滤
     * @param {string} [tags] - 功能说明：根据标签过滤
     * @param {string} [enableBandwidthRules] - 功能说明：根据是否带宽分组使能过滤 - 取值范围：true、false
     * @param {number} [ruleQuota] - 功能说明：根据规则数值过滤
     * @param {string} [publicBorderGroup] - 功能说明：根据站点信息过滤
     * @param {string} [chargeMode] - 功能说明：按流量计费,按带宽计费还是按增强型95计费 - 取值范围：bandwidth（按带宽计费），traffic（按流量计费），95peak_plus（按增强型95计费），不返回或者为空时表示是bandwidth - 约束：只有共享带宽支持95peak_plus（按增强型95计费），按增强型95计费时需要指定保底百分比，默认是20%
     * @param {string} [size] - 功能说明：带宽大小。共享带宽的大小有最小值限制，默认为5M，可能因局点不同而不同。 - 取值范围：默认5Mbit/s~2000Mbit/s（具体范围以各区域配置为准，请参见控制台对应页面显示）。   调整带宽时的最小单位会根据带宽范围不同存在差异。 - 小于等于300Mbit/s：默认最小单位为1Mbit/s。 - 300Mbit/s~1000Mbit/s：默认最小单位为50Mbit/s。 - 大于1000Mbit/s：默认最小单位为500Mbit/s。
     * @param {string} [type] - 功能说明：带宽类型，标识是否是共享带宽 - 取值范围：WHOLE，PER。   - WHOLE表示共享带宽   - PER表示独享带宽
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBandwidth(listBandwidthRequest?: ListBandwidthRequest): Promise<ListBandwidthResponse> {
        const options = ParamCreater().listBandwidth(listBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取EIP带宽限制列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看租户带宽限制
     * @param {number} [limit] 每页条数
     * @param {number} [offset] 分页起始点
     * @param {string} [marker] 分页起始点
     * @param {boolean} [pageReverse] 翻页方向
     * @param {Array<'id' | 'charge_mode' | 'min_size' | 'max_size' | 'ext_limit'>} [fields] 只显示指定的字段。使用ext-fields时在默认显示的字段基础上追加字段
     * @param {string} [chargeMode] 根据charge_mode过滤
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBandwidthsLimit(listBandwidthsLimitRequest?: ListBandwidthsLimitRequest): Promise<ListBandwidthsLimitResponse> {
        const options = ParamCreater().listBandwidthsLimit(listBandwidthsLimitRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询公共池列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公共池列表
     * @param {Array<string>} [fields] 显示，形式为\&quot;fields&#x3D;id&amp;fields&#x3D;name&amp;...\&quot;  支持字段：id/name/status/type/used/allow_share_bandwidth_types/public_border_group/description
     * @param {number} [limit] 每页返回的个数取值范围：0~[2000]，其中2000为局点差异项，具体取值由局点决定
     * @param {number} [offset] 分页查询起始的资源序号
     * @param {string} [name] 公共池名称
     * @param {string} [publicBorderGroup] 公共池位于中心还是边缘
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCommonPools(listCommonPoolsRequest?: ListCommonPoolsRequest): Promise<ListCommonPoolsResponse> {
        const options = ParamCreater().listCommonPools(listCommonPoolsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询带宽列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询带宽列表
     * @param {string} [limit] - 功能说明：每页返回的个数 - 取值范围：取值范围：1~[2000]，其中2000为局点差异项，具体取值由局点决定
     * @param {string} [marker] - 功能说明：分页查询起始的资源ID，为空时为查询第一页
     * @param {Array<string>} [fields] display in the form \&quot;fields&#x3D;id&amp;fields&#x3D;name&amp;...\&quot;  Supported fields：id/name/tenant_id/size/ratio_95peak_plus/ingress_size/bandwidth_type/admin_state/billing_info/charge_mode/type/publicip_info/enable_bandwidth_rules/rule_quota/bandwidth_rules/public_border_group/created_at/updated_at/lock_infos
     * @param {string} [id] - 功能说明：带宽唯一标识
     * @param {string} [bandwidthType] - 功能说明：带宽类型，共享带宽默认为share。 - 取值范围：share，bgp，telcom，sbgp等。   - share：共享带宽   - bgp：动态bgp   - telcom ：联通   - sbgp：静态bgp
     * @param {string} [name] - 功能说明：宽带名称，按照宽带名称过滤
     * @param {string} [nameLike] - 功能说明：根据宽带名称模糊查询过滤
     * @param {string} [tenantId] - 功能说明：根据tenant_id过滤
     * @param {string} [ingressSize] - 功能说明：根据入云大小过滤
     * @param {string} [adminState] - 功能说明：根据宽带状态过滤
     * @param {string} [billingInfo] - 功能说明：根据计费信息过滤
     * @param {string} [tags] - 功能说明：根据标签过滤
     * @param {string} [enableBandwidthRules] - 功能说明：根据是否带宽分组使能过滤 - 取值范围：true、false
     * @param {number} [ruleQuota] - 功能说明：根据规则数值过滤
     * @param {string} [publicBorderGroup] - 功能说明：根据站点信息过滤
     * @param {string} [chargeMode] - 功能说明：按流量计费,按带宽计费还是按增强型95计费 - 取值范围：bandwidth（按带宽计费），traffic（按流量计费），95peak_plus（按增强型95计费），不返回或者为空时表示是bandwidth - 约束：只有共享带宽支持95peak_plus（按增强型95计费），按增强型95计费时需要指定保底百分比，默认是20%
     * @param {string} [size] - 功能说明：带宽大小。共享带宽的大小有最小值限制，默认为5M，可能因局点不同而不同。 - 取值范围：默认5Mbit/s~2000Mbit/s（具体范围以各区域配置为准，请参见控制台对应页面显示）。   调整带宽时的最小单位会根据带宽范围不同存在差异。 - 小于等于300Mbit/s：默认最小单位为1Mbit/s。 - 300Mbit/s~1000Mbit/s：默认最小单位为50Mbit/s。 - 大于1000Mbit/s：默认最小单位为500Mbit/s。
     * @param {string} [type] - 功能说明：带宽类型，标识是否是共享带宽 - 取值范围：WHOLE，PER。   - WHOLE表示共享带宽   - PER表示独享带宽
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEipBandwidths(listEipBandwidthsRequest?: ListEipBandwidthsRequest): Promise<ListEipBandwidthsResponse> {
        const options = ParamCreater().listEipBandwidths(listEipBandwidthsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询公共池分组列表，包含名称和位置信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公共池分组列表
     * @param {string} [fields] 显示，形式为\&quot;fields&#x3D;id&amp;fields&#x3D;name&amp;...\&quot;  支持字段：publicip_pools/public_border_group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPublicBorderGroups(listPublicBorderGroupsRequest?: ListPublicBorderGroupsRequest): Promise<ListPublicBorderGroupsResponse> {
        const options = ParamCreater().listPublicBorderGroups(listPublicBorderGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 全量查询公网IP池列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网IP池列表
     * @param {string} [marker] 分页查询起始的资源ID，为空时为查询第一页
     * @param {number} [limit] 每页返回的个数取值范围：0~[2000]，其中2000为局点差异项，具体取值由局点决定
     * @param {Array<string>} [fields] 显示，形式为\&quot;fields&#x3D;id&amp;fields&#x3D;name&amp;...\&quot;  支持字段：id/name/size/used/project_id/status/billing_info/created_at/updated_at/type/shared/is_common/description/tags/enterprise_project_id/allow_share_bandwidth_types/public_border_group
     * @param {string} [sortKey] 排序，形式为\&quot;sort_key&#x3D;id&amp;sort_dir&#x3D;asc\&quot;  支持字段：id/name/created_at/updated_at/public_border_group
     * @param {string} [sortDir] 排序方向  取值范围：asc、desc
     * @param {string} [id] 根据id过滤
     * @param {string} [name] 根据name过滤
     * @param {number} [size] 根据size过滤
     * @param {string} [status] 根据status过滤
     * @param {string} [type] 根据type过滤
     * @param {string} [description] 根据description过滤
     * @param {string} [publicBorderGroup] 根据public_border_group过滤
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPublicipPool(listPublicipPoolRequest?: ListPublicipPoolRequest): Promise<ListPublicipPoolResponse> {
        const options = ParamCreater().listPublicipPool(listPublicipPoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定租户下的共享带宽类型列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定租户下的共享带宽类型列表
     * @param {Array<string>} [fields] 形式为\\\&quot;fields&#x3D;id&amp;fields&#x3D;bandwidth_type&amp;...\\\&quot;，支持字段：id/bandwidth_type/name_en/name_zh/created_at/update_at/public_border_group/description
     * @param {string} [id] 支持带宽类型的id
     * @param {string} [bandwidthType] 带宽支持类型
     * @param {string} [nameEn] 带宽类型英文表述
     * @param {string} [nameZh] 带宽类型中文表述
     * @param {string} [publicBorderGroup] 带宽类型所处位置，中心站点or边缘站点
     * @param {string} [sortKey] 排序，形式为\&quot;sort_key&#x3D;id&amp;sort_dir&#x3D;asc\&quot;  支持字段：id/bandwidth_type/public_border_group
     * @param {string} [sortDir] 排序方向  取值范围：asc、desc
     * @param {number} [limit] 每页返回的个数取值范围：0~[2000]，其中2000为局点差异项，具体取值由局点决定
     * @param {string} [marker] 分页查询起始的资源ID，为空时为查询第一页
     * @param {number} [offset] 分页查询起始的资源序号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listShareBandwidthTypes(listShareBandwidthTypesRequest?: ListShareBandwidthTypesRequest): Promise<ListShareBandwidthTypesResponse> {
        const options = ParamCreater().listShareBandwidthTypes(listShareBandwidthTypesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询公网IP池详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公网IP池详情
     * @param {string} publicipPoolId 公网IP池ID唯一标识
     * @param {Array<string>} [fields] 显示，形式为\&quot;fields&#x3D;id&amp;fields&#x3D;name&amp;...\&quot;  支持字段：id/name/size/used/project_id/status/billing_info/created_at/updated_at/type/shared/is_common/description/tags/enterprise_project_id/allow_share_bandwidth_types/public_border_group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPublicipPool(showPublicipPoolRequest?: ShowPublicipPoolRequest): Promise<ShowPublicipPoolResponse> {
        const options = ParamCreater().showPublicipPool(showPublicipPoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询GEIP与实例绑定关系的租户列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询GEIP与实例绑定关系的租户列表
     * @param {Array<string>} [fields] 形式为\\\&quot;fields&#x3D;geip_id&amp;fields&#x3D;geip_ip_address&amp;...\\\&quot;，支持字段：geip_id/geip_ip_address/instance_type/instance_id/vnic/vn_list/public_border_group/gcbandwidth/version/created_at/updated_at/instance_vpc_id
     * @param {string} [geipId] GEIP的uuid
     * @param {string} [geipIpAddress] GEIP的ip地址
     * @param {string} [publicBorderGroup] GEIP所处的出口位置
     * @param {string} [instanceType] 绑定的实例类型
     * @param {string} [instanceId] 绑定的实例id
     * @param {string} [instanceVpcId] 绑定的实例vpcid
     * @param {string} [gcbandwidthId] 骨干带宽的uuid
     * @param {string} [gcbandwidthAdminStatus] 骨干带宽的状态
     * @param {number} [gcbandwidthSize] 骨干带宽的大小
     * @param {string} [gcbandwidthSlaLevel] 描述网络等级，从高到低分为铂金、金、银、铜
     * @param {number} [gcbandwidthDscp] 线路质量金银铜对应的DSCP值
     * @param {string} [vnicPrivateIpAddress] 绑定实例的ip地址
     * @param {string} [vnicVpcId] 绑定实例所在的vpcid
     * @param {string} [vnicPortId] 绑定实例port的uuid
     * @param {string} [vnicDeviceId] 绑定实例port对应的实例id
     * @param {string} [vnicDeviceOwner] 绑定实例port对应的实例所有者
     * @param {string} [vnicDeviceOwnerPrefixlike] 绑定实例port对应的实例所有者的前缀
     * @param {string} [vnicInstanceType] 绑定实例port对应的实例类型
     * @param {string} [vnicInstanceId] 绑定实例port对应的实例id
     * @param {string} [sortKey] 排序，形式为\&quot;sort_key&#x3D;geip_id&amp;sort_dir&#x3D;asc\&quot;  支持字段：geip_id/version/public_border_group/ geip_ip_address/created_at/updated_at
     * @param {string} [sortDir] 排序方向  取值范围：asc、desc
     * @param {number} [limit] 每页返回的个数取值范围：0~[2000]，其中2000为局点差异项，具体取值由局点决定
     * @param {number} [offset] 分页起始点
     * @param {string} [marker] 分页起始点
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectGeipBindings(listProjectGeipBindingsRequest?: ListProjectGeipBindingsRequest): Promise<ListProjectGeipBindingsResponse> {
        const options = ParamCreater().listProjectGeipBindings(listProjectGeipBindingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建虚拟igw
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建虚拟igw
     * @param {CreateTenantVpcIgwRequestBody} createTenantVpcIgwRequestBody 创建虚拟igw对象
     * @param {Array<string>} [fields] 形式为\\\&quot;fields&#x3D;id&amp;fields&#x3D;project_id&amp;...\\\&quot;，支持字段：id/project_id/vpc_id/created_at/updated_at/name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTenantVpcIgw(createTenantVpcIgwRequest?: CreateTenantVpcIgwRequest): Promise<CreateTenantVpcIgwResponse> {
        const options = ParamCreater().createTenantVpcIgw(createTenantVpcIgwRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除虚拟igw
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除虚拟igw
     * @param {string} vpcIgwId 虚拟igw的uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTenantVpcIgw(deleteTenantVpcIgwRequest?: DeleteTenantVpcIgwRequest): Promise<DeleteTenantVpcIgwResponse> {
        const options = ParamCreater().deleteTenantVpcIgw(deleteTenantVpcIgwRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定租户下的虚拟igw列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定租户下的虚拟igw列表
     * @param {Array<string>} [fields] 形式为\\\&quot;fields&#x3D;id&amp;fields&#x3D;project_id&amp;...\\\&quot;，支持字段：id/project_id/vpc_id/created_at/updated_at/name
     * @param {string} [id] 虚拟IGW的uuid
     * @param {string} [vpcId] 虚拟igw所在的vpcid
     * @param {string} [name] 虚拟igw的名称
     * @param {string} [sortKey] 排序，形式为\&quot;sort_key&#x3D;i2a_id&amp;sort_dir&#x3D;asc\&quot;  支持字段：id/created_at/updated_at
     * @param {string} [sortDir] 排序方向  取值范围：asc、desc
     * @param {number} [limit] 每页返回的个数取值范围：0~[2000]，其中2000为局点差异项，具体取值由局点决定
     * @param {number} [offset] 分页起始点
     * @param {string} [marker] 分页起始点
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTenantVpcIgws(listTenantVpcIgwsRequest?: ListTenantVpcIgwsRequest): Promise<ListTenantVpcIgwsResponse> {
        const options = ParamCreater().listTenantVpcIgws(listTenantVpcIgwsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询虚拟igw详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询虚拟igw详情
     * @param {string} vpcIgwId 虚拟igw的uuid
     * @param {Array<string>} [fields] 形式为\\\&quot;fields&#x3D;id&amp;fields&#x3D;project_id&amp;...\\\&quot;，支持字段：id/project_id/vpc_id/created_at/updated_at/igw_cluster
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showInternalVpcIgw(showInternalVpcIgwRequest?: ShowInternalVpcIgwRequest): Promise<ShowInternalVpcIgwResponse> {
        const options = ParamCreater().showInternalVpcIgw(showInternalVpcIgwRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改虚拟igw
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改虚拟igw
     * @param {string} vpcIgwId vpc-igw的uuid
     * @param {UpdateTenantVpcIgwRequestBody} updateTenantVpcIgwRequestBody 修改虚拟igw
     * @param {Array<string>} [fields] 形式为\\\&quot;fields&#x3D;id&amp;fields&#x3D;project_id&amp;...\\\&quot;，支持字段：id/project_id/vpc_id/created_at/updated_at/name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTenantVpcIgw(updateTenantVpcIgwRequest?: UpdateTenantVpcIgwRequest): Promise<UpdateTenantVpcIgwResponse> {
        const options = ParamCreater().updateTenantVpcIgw(updateTenantVpcIgwRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 绑定弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定弹性公网IP
     * @param {string} publicipId 弹性公网IP的ID
     * @param {AssociatePublicipsRequestBody} associatePublicipsRequestBody 弹性公网ip对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associatePublicips(associatePublicipsRequest?: AssociatePublicipsRequest): Promise<AssociatePublicipsResponse> {
        const options = ParamCreater().associatePublicips(associatePublicipsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 共享带宽批量加入弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 共享带宽批量加入弹性公网IP
     * @param {BatchAttachSharebwReq} attachBatchPublicIpRequestBody 共享带宽批量加入弹性公网IP的请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachBatchPublicIp(attachBatchPublicIpRequest?: AttachBatchPublicIpRequest): Promise<AttachBatchPublicIpResponse> {
        const options = ParamCreater().attachBatchPublicIp(attachBatchPublicIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 共享带宽加入弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 共享带宽加入弹性公网IP
     * @param {string} publicipId 弹性公网ID
     * @param {AttachSharebwReq} attachSharebwRequestBody 共享带宽加入弹性公网IP的请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachShareBandwidth(attachShareBandwidthRequest?: AttachShareBandwidthRequest): Promise<AttachShareBandwidthResponse> {
        const options = ParamCreater().attachShareBandwidth(attachShareBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * IP池用于查询公网可用ip个数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性公网IP可用数
     * @param {EipResourcesAvailableV3RequestBody} eipResourcesAvailableV3RequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countEipAvailableResources(countEipAvailableResourcesRequest?: CountEipAvailableResourcesRequest): Promise<CountEipAvailableResourcesResponse> {
        const options = ParamCreater().countEipAvailableResources(countEipAvailableResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 共享带宽批量移出弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 共享带宽批量移出弹性公网IP
     * @param {DetachBatchSharedbwReq} detachBatchPublicIpRequestBody 共享带宽批量移出弹性公网IP的请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachBatchPublicIp(detachBatchPublicIpRequest?: DetachBatchPublicIpRequest): Promise<DetachBatchPublicIpResponse> {
        const options = ParamCreater().detachBatchPublicIp(detachBatchPublicIpRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 共享带宽移出弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 共享带宽移出弹性公网IP
     * @param {string} publicipId 弹性公网ID
     * @param {DetachSharedbwReq} detachSharebwRequestBody 共享带宽移出弹性公网IP的请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachShareBandwidth(detachShareBandwidthRequest?: DetachShareBandwidthRequest): Promise<DetachShareBandwidthResponse> {
        const options = ParamCreater().detachShareBandwidth(detachShareBandwidthRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 弹性公网IP关闭NAT64
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 弹性公网IP关闭NAT64
     * @param {string} publicipId 弹性公网ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableNat64(disableNat64Request?: DisableNat64Request): Promise<DisableNat64Response> {
        const options = ParamCreater().disableNat64(disableNat64Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解绑弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑弹性公网IP
     * @param {string} publicipId 弹性公网IP的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociatePublicips(disassociatePublicipsRequest?: DisassociatePublicipsRequest): Promise<DisassociatePublicipsResponse> {
        const options = ParamCreater().disassociatePublicips(disassociatePublicipsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 弹性公网IP开启NAT64
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 弹性公网IP开启NAT64
     * @param {string} publicipId 弹性公网ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableNat64(enableNat64Request?: EnableNat64Request): Promise<EnableNat64Response> {
        const options = ParamCreater().enableNat64(enableNat64Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询弹性公网IP列表信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 全量查询弹性公网IP列表
     * @param {string} [marker] 分页查询起始的资源ID，为空时为查询第一页
     * @param {number} [offset] 分页查询起始的资源序号
     * @param {number} [limit] 每页返回的个数取值范围：0~[2000]，其中2000为局点差异项，具体取值由局点决定
     * @param {Array<string>} [fields] 显示，形式为\&quot;fields&#x3D;id&amp;fields&#x3D;owner&amp;...\&quot;  支持字段：id/project_id/ip_version/type/public_ip_address/public_ipv6_address/network_type/status/description/created_at/updated_at/vnic/bandwidth/associate_instance_type/associate_instance_id/lock_status/billing_info/tags/enterprise_project_id/allow_share_bandwidth_types/public_border_group/alias/publicip_pool_name/publicip_pool_id
     * @param {'id' | 'public_ip_address' | 'public_ipv6_address' | 'ip_version' | 'created_at' | 'updated_at' | 'public_border_group'} [sortKey] 排序，形式为\&quot;sort_key&#x3D;id\&quot;  支持字段：id/public_ip_address/public_ipv6_address/ip_version/created_at/updated_at/public_border_group
     * @param {'asc' | 'desc'} [sortDir] 排序方向  取值范围：asc、desc
     * @param {Array<string>} [id] 根据id过滤
     * @param {Array<4 | 6>} [ipVersion] 根据ip_version过滤  取值范围：4、6
     * @param {Array<string>} [publicIpAddress] 根据public_ip_address过滤
     * @param {string} [publicIpAddressLike] 根据public_ip_address过滤，模糊搜索
     * @param {Array<string>} [publicIpv6Address] 根据public_ipv6_address过滤
     * @param {string} [publicIpv6AddressLike] 根据public_ipv6_address过滤，模糊搜索
     * @param {Array<'EIP' | 'DUALSTACK' | 'DUALSTACK_SUBNET'>} [type] 根据type过滤  取值范围：EIP、DUALSTACK、DUALSTACK_SUBNET  EIP: 弹性公网IP   DUALSTACK: 双栈IPV6   DUALSTACK_SUBNET: 双栈子网
     * @param {Array<'5_telcom' | '5_union' | '5_bgp' | '5_sbgp' | '5_ipv6' | '5_graybgp'>} [networkType] 根据network_type过滤  取值范围：5_telcom、5_union、5_bgp、5_sbgp、5_ipv6、5_graybgp
     * @param {Array<string>} [publicipPoolName] 根据publicip_pool_name过滤  取值范围：5_telcom、5_union、5_bgp、5_sbgp、5_ipv6、5_graybgp、专属池名称等
     * @param {Array<'FREEZED' | 'DOWN' | 'ACTIVE' | 'ERROR'>} [status] 根据status过滤  取值范围：FREEZED、DOWN、ACTIVE、ERROR
     * @param {string} [aliasLike] 根据alias模糊搜索
     * @param {Array<string>} [alias] 根据alias过滤
     * @param {Array<string>} [description] 根据description过滤
     * @param {Array<string>} [vnicPrivateIpAddress] 根据private_ip_address过滤
     * @param {string} [vnicPrivateIpAddressLike] 根据private_ip_address模糊搜索
     * @param {Array<string>} [vnicDeviceId] 根据device_id过滤
     * @param {Array<string>} [vnicDeviceOwner] 根据device_owner过滤
     * @param {Array<string>} [vnicVpcId] 根据vpc_id过滤
     * @param {Array<string>} [vnicPortId] 根据port_id过滤
     * @param {string} [vnicDeviceOwnerPrefixlike] 根据device_owner_prefixlike模糊搜索
     * @param {Array<string>} [vnicInstanceType] 根据instance_type过滤
     * @param {Array<string>} [vnicInstanceId] 根据instance_id过滤
     * @param {Array<string>} [bandwidthId] 根据id过滤
     * @param {Array<string>} [bandwidthName] 根据name过滤
     * @param {Array<string>} [bandwidthNameLike] 根据name模糊过滤
     * @param {Array<number>} [bandwidthSize] 根据size过滤
     * @param {Array<'PER' | 'WHOLE'>} [bandwidthShareType] 根据share_type过滤
     * @param {Array<'bandwidth' | 'traffic' | '95peak_plus'>} [bandwidthChargeMode] 根据charge_mode过滤
     * @param {Array<string>} [billingInfo] 根据billing_info过滤
     * @param {'YEARLY_MONTHLY' | 'PAY_PER_USE'} [billingMode] 根据订单模式过滤,   取值范围：YEARLY_MONTHLY、PAY_PER_USE
     * @param {Array<'PORT' | 'NATGW' | 'ELB' | 'VPN' | 'ELBV1'>} [associateInstanceType] 根据associate_instance_type过滤  取值范围：PORT、NATGW、ELB、VPN、ELBV1
     * @param {Array<string>} [associateInstanceId] 根据associate_instance_id过滤
     * @param {Array<string>} [enterpriseProjectId] 根据enterprise_project_id过滤
     * @param {Array<string>} [publicBorderGroup] 根据public_border_group过滤
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
     * 查询弹性公网IP详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询弹性公网IP详情
     * @param {string} publicipId 弹性公网IP的ID
     * @param {Array<string>} [fields] 显示，形式为\&quot;fields&#x3D;id&amp;fields&#x3D;owner&amp;...\&quot;  支持字段：id/project_id/ip_version/type/public_ip_address/public_ipv6_address/network_type/status/description/created_at/updated_at/vnic/bandwidth/associate_instance_type/associate_instance_id/lock_status/billing_info/tags/enterprise_project_id/publicip_pool_name/allow_share_bandwidth_types/alias/publicip_pool_id/public_border_group
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
     * 更新弹性公网IP
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新弹性公网IP
     * @param {string} publicipId 弹性公网IP的ID
     * @param {UpdatePublicipsRequestBody} updatePublicipsRequestBody 弹性公网ip对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePublicip(updatePublicipRequest?: UpdatePublicipRequest): Promise<UpdatePublicipResponse> {
        const options = ParamCreater().updatePublicip(updatePublicipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 查询带宽列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBandwidth(listBandwidthRequest?: ListBandwidthRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/eip/bandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let id;
            
            let fields;
            
            let bandwidthType;
            
            let name;
            
            let nameLike;
            
            let ingressSize;
            
            let adminState;
            
            let billingInfo;
            
            let tags;
            
            let enableBandwidthRules;
            
            let ruleQuota;
            
            let publicBorderGroup;
            
            let chargeMode;
            
            let size;
            
            let type;

            if (listBandwidthRequest !== null && listBandwidthRequest !== undefined) {
                if (listBandwidthRequest instanceof ListBandwidthRequest) {
                    limit = listBandwidthRequest.limit;
                    marker = listBandwidthRequest.marker;
                    id = listBandwidthRequest.id;
                    fields = listBandwidthRequest.fields;
                    bandwidthType = listBandwidthRequest.bandwidthType;
                    name = listBandwidthRequest.name;
                    nameLike = listBandwidthRequest.nameLike;
                    ingressSize = listBandwidthRequest.ingressSize;
                    adminState = listBandwidthRequest.adminState;
                    billingInfo = listBandwidthRequest.billingInfo;
                    tags = listBandwidthRequest.tags;
                    enableBandwidthRules = listBandwidthRequest.enableBandwidthRules;
                    ruleQuota = listBandwidthRequest.ruleQuota;
                    publicBorderGroup = listBandwidthRequest.publicBorderGroup;
                    chargeMode = listBandwidthRequest.chargeMode;
                    size = listBandwidthRequest.size;
                    type = listBandwidthRequest.type;
                } else {
                    limit = listBandwidthRequest['limit'];
                    marker = listBandwidthRequest['marker'];
                    id = listBandwidthRequest['id'];
                    fields = listBandwidthRequest['fields'];
                    bandwidthType = listBandwidthRequest['bandwidth_type'];
                    name = listBandwidthRequest['name'];
                    nameLike = listBandwidthRequest['name_like'];
                    ingressSize = listBandwidthRequest['ingress_size'];
                    adminState = listBandwidthRequest['admin_state'];
                    billingInfo = listBandwidthRequest['billing_info'];
                    tags = listBandwidthRequest['tags'];
                    enableBandwidthRules = listBandwidthRequest['enable_bandwidth_rules'];
                    ruleQuota = listBandwidthRequest['rule_quota'];
                    publicBorderGroup = listBandwidthRequest['public_border_group'];
                    chargeMode = listBandwidthRequest['charge_mode'];
                    size = listBandwidthRequest['size'];
                    type = listBandwidthRequest['type'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (bandwidthType !== null && bandwidthType !== undefined) {
                localVarQueryParameter['bandwidth_type'] = bandwidthType;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (nameLike !== null && nameLike !== undefined) {
                localVarQueryParameter['name_like'] = nameLike;
            }
            if (ingressSize !== null && ingressSize !== undefined) {
                localVarQueryParameter['ingress_size'] = ingressSize;
            }
            if (adminState !== null && adminState !== undefined) {
                localVarQueryParameter['admin_state'] = adminState;
            }
            if (billingInfo !== null && billingInfo !== undefined) {
                localVarQueryParameter['billing_info'] = billingInfo;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (enableBandwidthRules !== null && enableBandwidthRules !== undefined) {
                localVarQueryParameter['enable_bandwidth_rules'] = enableBandwidthRules;
            }
            if (ruleQuota !== null && ruleQuota !== undefined) {
                localVarQueryParameter['rule_quota'] = ruleQuota;
            }
            if (publicBorderGroup !== null && publicBorderGroup !== undefined) {
                localVarQueryParameter['public_border_group'] = publicBorderGroup;
            }
            if (chargeMode !== null && chargeMode !== undefined) {
                localVarQueryParameter['charge_mode'] = chargeMode;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取EIP带宽限制列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBandwidthsLimit(listBandwidthsLimitRequest?: ListBandwidthsLimitRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/eip/eip-bandwidth-limits",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let marker;
            
            let pageReverse;
            
            let fields;
            
            let chargeMode;

            if (listBandwidthsLimitRequest !== null && listBandwidthsLimitRequest !== undefined) {
                if (listBandwidthsLimitRequest instanceof ListBandwidthsLimitRequest) {
                    limit = listBandwidthsLimitRequest.limit;
                    offset = listBandwidthsLimitRequest.offset;
                    marker = listBandwidthsLimitRequest.marker;
                    pageReverse = listBandwidthsLimitRequest.pageReverse;
                    fields = listBandwidthsLimitRequest.fields;
                    chargeMode = listBandwidthsLimitRequest.chargeMode;
                } else {
                    limit = listBandwidthsLimitRequest['limit'];
                    offset = listBandwidthsLimitRequest['offset'];
                    marker = listBandwidthsLimitRequest['marker'];
                    pageReverse = listBandwidthsLimitRequest['page_reverse'];
                    fields = listBandwidthsLimitRequest['fields'];
                    chargeMode = listBandwidthsLimitRequest['charge_mode'];
                }
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
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (chargeMode !== null && chargeMode !== undefined) {
                localVarQueryParameter['charge_mode'] = chargeMode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询公共池列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCommonPools(listCommonPoolsRequest?: ListCommonPoolsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/eip/publicip-pools/common-pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fields;
            
            let limit;
            
            let offset;
            
            let name;
            
            let publicBorderGroup;

            if (listCommonPoolsRequest !== null && listCommonPoolsRequest !== undefined) {
                if (listCommonPoolsRequest instanceof ListCommonPoolsRequest) {
                    fields = listCommonPoolsRequest.fields;
                    limit = listCommonPoolsRequest.limit;
                    offset = listCommonPoolsRequest.offset;
                    name = listCommonPoolsRequest.name;
                    publicBorderGroup = listCommonPoolsRequest.publicBorderGroup;
                } else {
                    fields = listCommonPoolsRequest['fields'];
                    limit = listCommonPoolsRequest['limit'];
                    offset = listCommonPoolsRequest['offset'];
                    name = listCommonPoolsRequest['name'];
                    publicBorderGroup = listCommonPoolsRequest['public_border_group'];
                }
            }

        
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (publicBorderGroup !== null && publicBorderGroup !== undefined) {
                localVarQueryParameter['public_border_group'] = publicBorderGroup;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询带宽列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEipBandwidths(listEipBandwidthsRequest?: ListEipBandwidthsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/eip-bandwidths",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let fields;
            
            let id;
            
            let bandwidthType;
            
            let name;
            
            let nameLike;
            
            let tenantId;
            
            let ingressSize;
            
            let adminState;
            
            let billingInfo;
            
            let tags;
            
            let enableBandwidthRules;
            
            let ruleQuota;
            
            let publicBorderGroup;
            
            let chargeMode;
            
            let size;
            
            let type;

            if (listEipBandwidthsRequest !== null && listEipBandwidthsRequest !== undefined) {
                if (listEipBandwidthsRequest instanceof ListEipBandwidthsRequest) {
                    limit = listEipBandwidthsRequest.limit;
                    marker = listEipBandwidthsRequest.marker;
                    fields = listEipBandwidthsRequest.fields;
                    id = listEipBandwidthsRequest.id;
                    bandwidthType = listEipBandwidthsRequest.bandwidthType;
                    name = listEipBandwidthsRequest.name;
                    nameLike = listEipBandwidthsRequest.nameLike;
                    tenantId = listEipBandwidthsRequest.tenantId;
                    ingressSize = listEipBandwidthsRequest.ingressSize;
                    adminState = listEipBandwidthsRequest.adminState;
                    billingInfo = listEipBandwidthsRequest.billingInfo;
                    tags = listEipBandwidthsRequest.tags;
                    enableBandwidthRules = listEipBandwidthsRequest.enableBandwidthRules;
                    ruleQuota = listEipBandwidthsRequest.ruleQuota;
                    publicBorderGroup = listEipBandwidthsRequest.publicBorderGroup;
                    chargeMode = listEipBandwidthsRequest.chargeMode;
                    size = listEipBandwidthsRequest.size;
                    type = listEipBandwidthsRequest.type;
                } else {
                    limit = listEipBandwidthsRequest['limit'];
                    marker = listEipBandwidthsRequest['marker'];
                    fields = listEipBandwidthsRequest['fields'];
                    id = listEipBandwidthsRequest['id'];
                    bandwidthType = listEipBandwidthsRequest['bandwidth_type'];
                    name = listEipBandwidthsRequest['name'];
                    nameLike = listEipBandwidthsRequest['name_like'];
                    tenantId = listEipBandwidthsRequest['tenant_id'];
                    ingressSize = listEipBandwidthsRequest['ingress_size'];
                    adminState = listEipBandwidthsRequest['admin_state'];
                    billingInfo = listEipBandwidthsRequest['billing_info'];
                    tags = listEipBandwidthsRequest['tags'];
                    enableBandwidthRules = listEipBandwidthsRequest['enable_bandwidth_rules'];
                    ruleQuota = listEipBandwidthsRequest['rule_quota'];
                    publicBorderGroup = listEipBandwidthsRequest['public_border_group'];
                    chargeMode = listEipBandwidthsRequest['charge_mode'];
                    size = listEipBandwidthsRequest['size'];
                    type = listEipBandwidthsRequest['type'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (bandwidthType !== null && bandwidthType !== undefined) {
                localVarQueryParameter['bandwidth_type'] = bandwidthType;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (nameLike !== null && nameLike !== undefined) {
                localVarQueryParameter['name_like'] = nameLike;
            }
            if (tenantId !== null && tenantId !== undefined) {
                localVarQueryParameter['tenant_id'] = tenantId;
            }
            if (ingressSize !== null && ingressSize !== undefined) {
                localVarQueryParameter['ingress_size'] = ingressSize;
            }
            if (adminState !== null && adminState !== undefined) {
                localVarQueryParameter['admin_state'] = adminState;
            }
            if (billingInfo !== null && billingInfo !== undefined) {
                localVarQueryParameter['billing_info'] = billingInfo;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (enableBandwidthRules !== null && enableBandwidthRules !== undefined) {
                localVarQueryParameter['enable_bandwidth_rules'] = enableBandwidthRules;
            }
            if (ruleQuota !== null && ruleQuota !== undefined) {
                localVarQueryParameter['rule_quota'] = ruleQuota;
            }
            if (publicBorderGroup !== null && publicBorderGroup !== undefined) {
                localVarQueryParameter['public_border_group'] = publicBorderGroup;
            }
            if (chargeMode !== null && chargeMode !== undefined) {
                localVarQueryParameter['charge_mode'] = chargeMode;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询公共池分组列表，包含名称和位置信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPublicBorderGroups(listPublicBorderGroupsRequest?: ListPublicBorderGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/eip/public-border-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fields;

            if (listPublicBorderGroupsRequest !== null && listPublicBorderGroupsRequest !== undefined) {
                if (listPublicBorderGroupsRequest instanceof ListPublicBorderGroupsRequest) {
                    fields = listPublicBorderGroupsRequest.fields;
                } else {
                    fields = listPublicBorderGroupsRequest['fields'];
                }
            }

        
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 全量查询公网IP池列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPublicipPool(listPublicipPoolRequest?: ListPublicipPoolRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/eip/publicip-pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let limit;
            
            let fields;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let name;
            
            let size;
            
            let status;
            
            let type;
            
            let description;
            
            let publicBorderGroup;

            if (listPublicipPoolRequest !== null && listPublicipPoolRequest !== undefined) {
                if (listPublicipPoolRequest instanceof ListPublicipPoolRequest) {
                    marker = listPublicipPoolRequest.marker;
                    limit = listPublicipPoolRequest.limit;
                    fields = listPublicipPoolRequest.fields;
                    sortKey = listPublicipPoolRequest.sortKey;
                    sortDir = listPublicipPoolRequest.sortDir;
                    id = listPublicipPoolRequest.id;
                    name = listPublicipPoolRequest.name;
                    size = listPublicipPoolRequest.size;
                    status = listPublicipPoolRequest.status;
                    type = listPublicipPoolRequest.type;
                    description = listPublicipPoolRequest.description;
                    publicBorderGroup = listPublicipPoolRequest.publicBorderGroup;
                } else {
                    marker = listPublicipPoolRequest['marker'];
                    limit = listPublicipPoolRequest['limit'];
                    fields = listPublicipPoolRequest['fields'];
                    sortKey = listPublicipPoolRequest['sort_key'];
                    sortDir = listPublicipPoolRequest['sort_dir'];
                    id = listPublicipPoolRequest['id'];
                    name = listPublicipPoolRequest['name'];
                    size = listPublicipPoolRequest['size'];
                    status = listPublicipPoolRequest['status'];
                    type = listPublicipPoolRequest['type'];
                    description = listPublicipPoolRequest['description'];
                    publicBorderGroup = listPublicipPoolRequest['public_border_group'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (size !== null && size !== undefined) {
                localVarQueryParameter['size'] = size;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (publicBorderGroup !== null && publicBorderGroup !== undefined) {
                localVarQueryParameter['public_border_group'] = publicBorderGroup;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定租户下的共享带宽类型列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listShareBandwidthTypes(listShareBandwidthTypesRequest?: ListShareBandwidthTypesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/eip/share-bandwidth-types",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fields;
            
            let id;
            
            let bandwidthType;
            
            let nameEn;
            
            let nameZh;
            
            let publicBorderGroup;
            
            let sortKey;
            
            let sortDir;
            
            let limit;
            
            let marker;
            
            let offset;

            if (listShareBandwidthTypesRequest !== null && listShareBandwidthTypesRequest !== undefined) {
                if (listShareBandwidthTypesRequest instanceof ListShareBandwidthTypesRequest) {
                    fields = listShareBandwidthTypesRequest.fields;
                    id = listShareBandwidthTypesRequest.id;
                    bandwidthType = listShareBandwidthTypesRequest.bandwidthType;
                    nameEn = listShareBandwidthTypesRequest.nameEn;
                    nameZh = listShareBandwidthTypesRequest.nameZh;
                    publicBorderGroup = listShareBandwidthTypesRequest.publicBorderGroup;
                    sortKey = listShareBandwidthTypesRequest.sortKey;
                    sortDir = listShareBandwidthTypesRequest.sortDir;
                    limit = listShareBandwidthTypesRequest.limit;
                    marker = listShareBandwidthTypesRequest.marker;
                    offset = listShareBandwidthTypesRequest.offset;
                } else {
                    fields = listShareBandwidthTypesRequest['fields'];
                    id = listShareBandwidthTypesRequest['id'];
                    bandwidthType = listShareBandwidthTypesRequest['bandwidth_type'];
                    nameEn = listShareBandwidthTypesRequest['name_en'];
                    nameZh = listShareBandwidthTypesRequest['name_zh'];
                    publicBorderGroup = listShareBandwidthTypesRequest['public_border_group'];
                    sortKey = listShareBandwidthTypesRequest['sort_key'];
                    sortDir = listShareBandwidthTypesRequest['sort_dir'];
                    limit = listShareBandwidthTypesRequest['limit'];
                    marker = listShareBandwidthTypesRequest['marker'];
                    offset = listShareBandwidthTypesRequest['offset'];
                }
            }

        
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (bandwidthType !== null && bandwidthType !== undefined) {
                localVarQueryParameter['bandwidth_type'] = bandwidthType;
            }
            if (nameEn !== null && nameEn !== undefined) {
                localVarQueryParameter['name_en'] = nameEn;
            }
            if (nameZh !== null && nameZh !== undefined) {
                localVarQueryParameter['name_zh'] = nameZh;
            }
            if (publicBorderGroup !== null && publicBorderGroup !== undefined) {
                localVarQueryParameter['public_border_group'] = publicBorderGroup;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
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
         * 查询公网IP池详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPublicipPool(showPublicipPoolRequest?: ShowPublicipPoolRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/eip/publicip-pools/{publicip_pool_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let publicipPoolId;
            
            let fields;

            if (showPublicipPoolRequest !== null && showPublicipPoolRequest !== undefined) {
                if (showPublicipPoolRequest instanceof ShowPublicipPoolRequest) {
                    publicipPoolId = showPublicipPoolRequest.publicipPoolId;
                    fields = showPublicipPoolRequest.fields;
                } else {
                    publicipPoolId = showPublicipPoolRequest['publicip_pool_id'];
                    fields = showPublicipPoolRequest['fields'];
                }
            }

        
            if (publicipPoolId === null || publicipPoolId === undefined) {
            throw new RequiredError('publicipPoolId','Required parameter publicipPoolId was null or undefined when calling showPublicipPool.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'publicip_pool_id': publicipPoolId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询GEIP与实例绑定关系的租户列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectGeipBindings(listProjectGeipBindingsRequest?: ListProjectGeipBindingsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/geip/bindings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fields;
            
            let geipId;
            
            let geipIpAddress;
            
            let publicBorderGroup;
            
            let instanceType;
            
            let instanceId;
            
            let instanceVpcId;
            
            let gcbandwidthId;
            
            let gcbandwidthAdminStatus;
            
            let gcbandwidthSize;
            
            let gcbandwidthSlaLevel;
            
            let gcbandwidthDscp;
            
            let vnicPrivateIpAddress;
            
            let vnicVpcId;
            
            let vnicPortId;
            
            let vnicDeviceId;
            
            let vnicDeviceOwner;
            
            let vnicDeviceOwnerPrefixlike;
            
            let vnicInstanceType;
            
            let vnicInstanceId;
            
            let sortKey;
            
            let sortDir;
            
            let limit;
            
            let offset;
            
            let marker;

            if (listProjectGeipBindingsRequest !== null && listProjectGeipBindingsRequest !== undefined) {
                if (listProjectGeipBindingsRequest instanceof ListProjectGeipBindingsRequest) {
                    fields = listProjectGeipBindingsRequest.fields;
                    geipId = listProjectGeipBindingsRequest.geipId;
                    geipIpAddress = listProjectGeipBindingsRequest.geipIpAddress;
                    publicBorderGroup = listProjectGeipBindingsRequest.publicBorderGroup;
                    instanceType = listProjectGeipBindingsRequest.instanceType;
                    instanceId = listProjectGeipBindingsRequest.instanceId;
                    instanceVpcId = listProjectGeipBindingsRequest.instanceVpcId;
                    gcbandwidthId = listProjectGeipBindingsRequest.gcbandwidthId;
                    gcbandwidthAdminStatus = listProjectGeipBindingsRequest.gcbandwidthAdminStatus;
                    gcbandwidthSize = listProjectGeipBindingsRequest.gcbandwidthSize;
                    gcbandwidthSlaLevel = listProjectGeipBindingsRequest.gcbandwidthSlaLevel;
                    gcbandwidthDscp = listProjectGeipBindingsRequest.gcbandwidthDscp;
                    vnicPrivateIpAddress = listProjectGeipBindingsRequest.vnicPrivateIpAddress;
                    vnicVpcId = listProjectGeipBindingsRequest.vnicVpcId;
                    vnicPortId = listProjectGeipBindingsRequest.vnicPortId;
                    vnicDeviceId = listProjectGeipBindingsRequest.vnicDeviceId;
                    vnicDeviceOwner = listProjectGeipBindingsRequest.vnicDeviceOwner;
                    vnicDeviceOwnerPrefixlike = listProjectGeipBindingsRequest.vnicDeviceOwnerPrefixlike;
                    vnicInstanceType = listProjectGeipBindingsRequest.vnicInstanceType;
                    vnicInstanceId = listProjectGeipBindingsRequest.vnicInstanceId;
                    sortKey = listProjectGeipBindingsRequest.sortKey;
                    sortDir = listProjectGeipBindingsRequest.sortDir;
                    limit = listProjectGeipBindingsRequest.limit;
                    offset = listProjectGeipBindingsRequest.offset;
                    marker = listProjectGeipBindingsRequest.marker;
                } else {
                    fields = listProjectGeipBindingsRequest['fields'];
                    geipId = listProjectGeipBindingsRequest['geip_id'];
                    geipIpAddress = listProjectGeipBindingsRequest['geip_ip_address'];
                    publicBorderGroup = listProjectGeipBindingsRequest['public_border_group'];
                    instanceType = listProjectGeipBindingsRequest['instance_type'];
                    instanceId = listProjectGeipBindingsRequest['instance_id'];
                    instanceVpcId = listProjectGeipBindingsRequest['instance_vpc_id'];
                    gcbandwidthId = listProjectGeipBindingsRequest['gcbandwidth.id'];
                    gcbandwidthAdminStatus = listProjectGeipBindingsRequest['gcbandwidth.admin_status'];
                    gcbandwidthSize = listProjectGeipBindingsRequest['gcbandwidth.size'];
                    gcbandwidthSlaLevel = listProjectGeipBindingsRequest['gcbandwidth.sla_level'];
                    gcbandwidthDscp = listProjectGeipBindingsRequest['gcbandwidth.dscp'];
                    vnicPrivateIpAddress = listProjectGeipBindingsRequest['vnic.private_ip_address'];
                    vnicVpcId = listProjectGeipBindingsRequest['vnic.vpc_id'];
                    vnicPortId = listProjectGeipBindingsRequest['vnic.port_id'];
                    vnicDeviceId = listProjectGeipBindingsRequest['vnic.device_id'];
                    vnicDeviceOwner = listProjectGeipBindingsRequest['vnic.device_owner'];
                    vnicDeviceOwnerPrefixlike = listProjectGeipBindingsRequest['vnic.device_owner_prefixlike'];
                    vnicInstanceType = listProjectGeipBindingsRequest['vnic.instance_type'];
                    vnicInstanceId = listProjectGeipBindingsRequest['vnic.instance_id'];
                    sortKey = listProjectGeipBindingsRequest['sort_key'];
                    sortDir = listProjectGeipBindingsRequest['sort_dir'];
                    limit = listProjectGeipBindingsRequest['limit'];
                    offset = listProjectGeipBindingsRequest['offset'];
                    marker = listProjectGeipBindingsRequest['marker'];
                }
            }

        
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (geipId !== null && geipId !== undefined) {
                localVarQueryParameter['geip_id'] = geipId;
            }
            if (geipIpAddress !== null && geipIpAddress !== undefined) {
                localVarQueryParameter['geip_ip_address'] = geipIpAddress;
            }
            if (publicBorderGroup !== null && publicBorderGroup !== undefined) {
                localVarQueryParameter['public_border_group'] = publicBorderGroup;
            }
            if (instanceType !== null && instanceType !== undefined) {
                localVarQueryParameter['instance_type'] = instanceType;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (instanceVpcId !== null && instanceVpcId !== undefined) {
                localVarQueryParameter['instance_vpc_id'] = instanceVpcId;
            }
            if (gcbandwidthId !== null && gcbandwidthId !== undefined) {
                localVarQueryParameter['gcbandwidth.id'] = gcbandwidthId;
            }
            if (gcbandwidthAdminStatus !== null && gcbandwidthAdminStatus !== undefined) {
                localVarQueryParameter['gcbandwidth.admin_status'] = gcbandwidthAdminStatus;
            }
            if (gcbandwidthSize !== null && gcbandwidthSize !== undefined) {
                localVarQueryParameter['gcbandwidth.size'] = gcbandwidthSize;
            }
            if (gcbandwidthSlaLevel !== null && gcbandwidthSlaLevel !== undefined) {
                localVarQueryParameter['gcbandwidth.sla_level'] = gcbandwidthSlaLevel;
            }
            if (gcbandwidthDscp !== null && gcbandwidthDscp !== undefined) {
                localVarQueryParameter['gcbandwidth.dscp'] = gcbandwidthDscp;
            }
            if (vnicPrivateIpAddress !== null && vnicPrivateIpAddress !== undefined) {
                localVarQueryParameter['vnic.private_ip_address'] = vnicPrivateIpAddress;
            }
            if (vnicVpcId !== null && vnicVpcId !== undefined) {
                localVarQueryParameter['vnic.vpc_id'] = vnicVpcId;
            }
            if (vnicPortId !== null && vnicPortId !== undefined) {
                localVarQueryParameter['vnic.port_id'] = vnicPortId;
            }
            if (vnicDeviceId !== null && vnicDeviceId !== undefined) {
                localVarQueryParameter['vnic.device_id'] = vnicDeviceId;
            }
            if (vnicDeviceOwner !== null && vnicDeviceOwner !== undefined) {
                localVarQueryParameter['vnic.device_owner'] = vnicDeviceOwner;
            }
            if (vnicDeviceOwnerPrefixlike !== null && vnicDeviceOwnerPrefixlike !== undefined) {
                localVarQueryParameter['vnic.device_owner_prefixlike'] = vnicDeviceOwnerPrefixlike;
            }
            if (vnicInstanceType !== null && vnicInstanceType !== undefined) {
                localVarQueryParameter['vnic.instance_type'] = vnicInstanceType;
            }
            if (vnicInstanceId !== null && vnicInstanceId !== undefined) {
                localVarQueryParameter['vnic.instance_id'] = vnicInstanceId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
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
         * 创建虚拟igw
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTenantVpcIgw(createTenantVpcIgwRequest?: CreateTenantVpcIgwRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/geip/vpc-igws",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let fields;

            if (createTenantVpcIgwRequest !== null && createTenantVpcIgwRequest !== undefined) {
                if (createTenantVpcIgwRequest instanceof CreateTenantVpcIgwRequest) {
                    body = createTenantVpcIgwRequest.body
                    fields = createTenantVpcIgwRequest.fields;
                } else {
                    body = createTenantVpcIgwRequest['body'];
                    fields = createTenantVpcIgwRequest['fields'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除虚拟igw
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTenantVpcIgw(deleteTenantVpcIgwRequest?: DeleteTenantVpcIgwRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/geip/vpc-igws/{vpc_igw_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpcIgwId;

            if (deleteTenantVpcIgwRequest !== null && deleteTenantVpcIgwRequest !== undefined) {
                if (deleteTenantVpcIgwRequest instanceof DeleteTenantVpcIgwRequest) {
                    vpcIgwId = deleteTenantVpcIgwRequest.vpcIgwId;
                } else {
                    vpcIgwId = deleteTenantVpcIgwRequest['vpc_igw_id'];
                }
            }

        
            if (vpcIgwId === null || vpcIgwId === undefined) {
            throw new RequiredError('vpcIgwId','Required parameter vpcIgwId was null or undefined when calling deleteTenantVpcIgw.');
            }

            options.pathParams = { 'vpc_igw_id': vpcIgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定租户下的虚拟igw列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTenantVpcIgws(listTenantVpcIgwsRequest?: ListTenantVpcIgwsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/geip/vpc-igws",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fields;
            
            let id;
            
            let vpcId;
            
            let name;
            
            let sortKey;
            
            let sortDir;
            
            let limit;
            
            let offset;
            
            let marker;

            if (listTenantVpcIgwsRequest !== null && listTenantVpcIgwsRequest !== undefined) {
                if (listTenantVpcIgwsRequest instanceof ListTenantVpcIgwsRequest) {
                    fields = listTenantVpcIgwsRequest.fields;
                    id = listTenantVpcIgwsRequest.id;
                    vpcId = listTenantVpcIgwsRequest.vpcId;
                    name = listTenantVpcIgwsRequest.name;
                    sortKey = listTenantVpcIgwsRequest.sortKey;
                    sortDir = listTenantVpcIgwsRequest.sortDir;
                    limit = listTenantVpcIgwsRequest.limit;
                    offset = listTenantVpcIgwsRequest.offset;
                    marker = listTenantVpcIgwsRequest.marker;
                } else {
                    fields = listTenantVpcIgwsRequest['fields'];
                    id = listTenantVpcIgwsRequest['id'];
                    vpcId = listTenantVpcIgwsRequest['vpc_id'];
                    name = listTenantVpcIgwsRequest['name'];
                    sortKey = listTenantVpcIgwsRequest['sort_key'];
                    sortDir = listTenantVpcIgwsRequest['sort_dir'];
                    limit = listTenantVpcIgwsRequest['limit'];
                    offset = listTenantVpcIgwsRequest['offset'];
                    marker = listTenantVpcIgwsRequest['marker'];
                }
            }

        
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
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
         * 查询虚拟igw详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showInternalVpcIgw(showInternalVpcIgwRequest?: ShowInternalVpcIgwRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/geip/vpc-igws/{vpc_igw_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vpcIgwId;
            
            let fields;

            if (showInternalVpcIgwRequest !== null && showInternalVpcIgwRequest !== undefined) {
                if (showInternalVpcIgwRequest instanceof ShowInternalVpcIgwRequest) {
                    vpcIgwId = showInternalVpcIgwRequest.vpcIgwId;
                    fields = showInternalVpcIgwRequest.fields;
                } else {
                    vpcIgwId = showInternalVpcIgwRequest['vpc_igw_id'];
                    fields = showInternalVpcIgwRequest['fields'];
                }
            }

        
            if (vpcIgwId === null || vpcIgwId === undefined) {
            throw new RequiredError('vpcIgwId','Required parameter vpcIgwId was null or undefined when calling showInternalVpcIgw.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'vpc_igw_id': vpcIgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改虚拟igw
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTenantVpcIgw(updateTenantVpcIgwRequest?: UpdateTenantVpcIgwRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/geip/vpc-igws/{vpc_igw_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let vpcIgwId;
            
            let fields;

            if (updateTenantVpcIgwRequest !== null && updateTenantVpcIgwRequest !== undefined) {
                if (updateTenantVpcIgwRequest instanceof UpdateTenantVpcIgwRequest) {
                    vpcIgwId = updateTenantVpcIgwRequest.vpcIgwId;
                    body = updateTenantVpcIgwRequest.body
                    fields = updateTenantVpcIgwRequest.fields;
                } else {
                    vpcIgwId = updateTenantVpcIgwRequest['vpc_igw_id'];
                    body = updateTenantVpcIgwRequest['body'];
                    fields = updateTenantVpcIgwRequest['fields'];
                }
            }

        
            if (vpcIgwId === null || vpcIgwId === undefined) {
            throw new RequiredError('vpcIgwId','Required parameter vpcIgwId was null or undefined when calling updateTenantVpcIgw.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'vpc_igw_id': vpcIgwId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 绑定弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associatePublicips(associatePublicipsRequest?: AssociatePublicipsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/eip/publicips/{publicip_id}/associate-instance",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let publicipId;

            if (associatePublicipsRequest !== null && associatePublicipsRequest !== undefined) {
                if (associatePublicipsRequest instanceof AssociatePublicipsRequest) {
                    publicipId = associatePublicipsRequest.publicipId;
                    body = associatePublicipsRequest.body
                } else {
                    publicipId = associatePublicipsRequest['publicip_id'];
                    body = associatePublicipsRequest['body'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling associatePublicips.');
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
         * 共享带宽批量加入弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachBatchPublicIp(attachBatchPublicIpRequest?: AttachBatchPublicIpRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/eip/publicips/attach-share-bandwidth",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (attachBatchPublicIpRequest !== null && attachBatchPublicIpRequest !== undefined) {
                if (attachBatchPublicIpRequest instanceof AttachBatchPublicIpRequest) {
                    body = attachBatchPublicIpRequest.body
                } else {
                    body = attachBatchPublicIpRequest['body'];
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
         * 共享带宽加入弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachShareBandwidth(attachShareBandwidthRequest?: AttachShareBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/eip/publicips/{publicip_id}/attach-share-bandwidth",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let publicipId;

            if (attachShareBandwidthRequest !== null && attachShareBandwidthRequest !== undefined) {
                if (attachShareBandwidthRequest instanceof AttachShareBandwidthRequest) {
                    publicipId = attachShareBandwidthRequest.publicipId;
                    body = attachShareBandwidthRequest.body
                } else {
                    publicipId = attachShareBandwidthRequest['publicip_id'];
                    body = attachShareBandwidthRequest['body'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling attachShareBandwidth.');
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
         * IP池用于查询公网可用ip个数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countEipAvailableResources(countEipAvailableResourcesRequest?: CountEipAvailableResourcesRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/eip/resources/available",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (countEipAvailableResourcesRequest !== null && countEipAvailableResourcesRequest !== undefined) {
                if (countEipAvailableResourcesRequest instanceof CountEipAvailableResourcesRequest) {
                    body = countEipAvailableResourcesRequest.body
                } else {
                    body = countEipAvailableResourcesRequest['body'];
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
         * 共享带宽批量移出弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachBatchPublicIp(detachBatchPublicIpRequest?: DetachBatchPublicIpRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/eip/publicips/detach-share-bandwidth",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (detachBatchPublicIpRequest !== null && detachBatchPublicIpRequest !== undefined) {
                if (detachBatchPublicIpRequest instanceof DetachBatchPublicIpRequest) {
                    body = detachBatchPublicIpRequest.body
                } else {
                    body = detachBatchPublicIpRequest['body'];
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
         * 共享带宽移出弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachShareBandwidth(detachShareBandwidthRequest?: DetachShareBandwidthRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/eip/publicips/{publicip_id}/detach-share-bandwidth",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let publicipId;

            if (detachShareBandwidthRequest !== null && detachShareBandwidthRequest !== undefined) {
                if (detachShareBandwidthRequest instanceof DetachShareBandwidthRequest) {
                    publicipId = detachShareBandwidthRequest.publicipId;
                    body = detachShareBandwidthRequest.body
                } else {
                    publicipId = detachShareBandwidthRequest['publicip_id'];
                    body = detachShareBandwidthRequest['body'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling detachShareBandwidth.');
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
         * 弹性公网IP关闭NAT64
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableNat64(disableNat64Request?: DisableNat64Request) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/eip/publicips/{publicip_id}/disable-nat64",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let publicipId;

            if (disableNat64Request !== null && disableNat64Request !== undefined) {
                if (disableNat64Request instanceof DisableNat64Request) {
                    publicipId = disableNat64Request.publicipId;
                } else {
                    publicipId = disableNat64Request['publicip_id'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling disableNat64.');
            }

            options.pathParams = { 'publicip_id': publicipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解绑弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociatePublicips(disassociatePublicipsRequest?: DisassociatePublicipsRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/eip/publicips/{publicip_id}/disassociate-instance",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let publicipId;

            if (disassociatePublicipsRequest !== null && disassociatePublicipsRequest !== undefined) {
                if (disassociatePublicipsRequest instanceof DisassociatePublicipsRequest) {
                    publicipId = disassociatePublicipsRequest.publicipId;
                } else {
                    publicipId = disassociatePublicipsRequest['publicip_id'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling disassociatePublicips.');
            }

            options.pathParams = { 'publicip_id': publicipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 弹性公网IP开启NAT64
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableNat64(enableNat64Request?: EnableNat64Request) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/eip/publicips/{publicip_id}/enable-nat64",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let publicipId;

            if (enableNat64Request !== null && enableNat64Request !== undefined) {
                if (enableNat64Request instanceof EnableNat64Request) {
                    publicipId = enableNat64Request.publicipId;
                } else {
                    publicipId = enableNat64Request['publicip_id'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling enableNat64.');
            }

            options.pathParams = { 'publicip_id': publicipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性公网IP列表信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPublicips(listPublicipsRequest?: ListPublicipsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/eip/publicips",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let marker;
            
            let offset;
            
            let limit;
            
            let fields;
            
            let sortKey;
            
            let sortDir;
            
            let id;
            
            let ipVersion;
            
            let publicIpAddress;
            
            let publicIpAddressLike;
            
            let publicIpv6Address;
            
            let publicIpv6AddressLike;
            
            let type;
            
            let networkType;
            
            let publicipPoolName;
            
            let status;
            
            let aliasLike;
            
            let alias;
            
            let description;
            
            let vnicPrivateIpAddress;
            
            let vnicPrivateIpAddressLike;
            
            let vnicDeviceId;
            
            let vnicDeviceOwner;
            
            let vnicVpcId;
            
            let vnicPortId;
            
            let vnicDeviceOwnerPrefixlike;
            
            let vnicInstanceType;
            
            let vnicInstanceId;
            
            let bandwidthId;
            
            let bandwidthName;
            
            let bandwidthNameLike;
            
            let bandwidthSize;
            
            let bandwidthShareType;
            
            let bandwidthChargeMode;
            
            let billingInfo;
            
            let billingMode;
            
            let associateInstanceType;
            
            let associateInstanceId;
            
            let enterpriseProjectId;
            
            let publicBorderGroup;
            
            let allowShareBandwidthTypeAny;

            if (listPublicipsRequest !== null && listPublicipsRequest !== undefined) {
                if (listPublicipsRequest instanceof ListPublicipsRequest) {
                    marker = listPublicipsRequest.marker;
                    offset = listPublicipsRequest.offset;
                    limit = listPublicipsRequest.limit;
                    fields = listPublicipsRequest.fields;
                    sortKey = listPublicipsRequest.sortKey;
                    sortDir = listPublicipsRequest.sortDir;
                    id = listPublicipsRequest.id;
                    ipVersion = listPublicipsRequest.ipVersion;
                    publicIpAddress = listPublicipsRequest.publicIpAddress;
                    publicIpAddressLike = listPublicipsRequest.publicIpAddressLike;
                    publicIpv6Address = listPublicipsRequest.publicIpv6Address;
                    publicIpv6AddressLike = listPublicipsRequest.publicIpv6AddressLike;
                    type = listPublicipsRequest.type;
                    networkType = listPublicipsRequest.networkType;
                    publicipPoolName = listPublicipsRequest.publicipPoolName;
                    status = listPublicipsRequest.status;
                    aliasLike = listPublicipsRequest.aliasLike;
                    alias = listPublicipsRequest.alias;
                    description = listPublicipsRequest.description;
                    vnicPrivateIpAddress = listPublicipsRequest.vnicPrivateIpAddress;
                    vnicPrivateIpAddressLike = listPublicipsRequest.vnicPrivateIpAddressLike;
                    vnicDeviceId = listPublicipsRequest.vnicDeviceId;
                    vnicDeviceOwner = listPublicipsRequest.vnicDeviceOwner;
                    vnicVpcId = listPublicipsRequest.vnicVpcId;
                    vnicPortId = listPublicipsRequest.vnicPortId;
                    vnicDeviceOwnerPrefixlike = listPublicipsRequest.vnicDeviceOwnerPrefixlike;
                    vnicInstanceType = listPublicipsRequest.vnicInstanceType;
                    vnicInstanceId = listPublicipsRequest.vnicInstanceId;
                    bandwidthId = listPublicipsRequest.bandwidthId;
                    bandwidthName = listPublicipsRequest.bandwidthName;
                    bandwidthNameLike = listPublicipsRequest.bandwidthNameLike;
                    bandwidthSize = listPublicipsRequest.bandwidthSize;
                    bandwidthShareType = listPublicipsRequest.bandwidthShareType;
                    bandwidthChargeMode = listPublicipsRequest.bandwidthChargeMode;
                    billingInfo = listPublicipsRequest.billingInfo;
                    billingMode = listPublicipsRequest.billingMode;
                    associateInstanceType = listPublicipsRequest.associateInstanceType;
                    associateInstanceId = listPublicipsRequest.associateInstanceId;
                    enterpriseProjectId = listPublicipsRequest.enterpriseProjectId;
                    publicBorderGroup = listPublicipsRequest.publicBorderGroup;
                    allowShareBandwidthTypeAny = listPublicipsRequest.allowShareBandwidthTypeAny;
                } else {
                    marker = listPublicipsRequest['marker'];
                    offset = listPublicipsRequest['offset'];
                    limit = listPublicipsRequest['limit'];
                    fields = listPublicipsRequest['fields'];
                    sortKey = listPublicipsRequest['sort_key'];
                    sortDir = listPublicipsRequest['sort_dir'];
                    id = listPublicipsRequest['id'];
                    ipVersion = listPublicipsRequest['ip_version'];
                    publicIpAddress = listPublicipsRequest['public_ip_address'];
                    publicIpAddressLike = listPublicipsRequest['public_ip_address_like'];
                    publicIpv6Address = listPublicipsRequest['public_ipv6_address'];
                    publicIpv6AddressLike = listPublicipsRequest['public_ipv6_address_like'];
                    type = listPublicipsRequest['type'];
                    networkType = listPublicipsRequest['network_type'];
                    publicipPoolName = listPublicipsRequest['publicip_pool_name'];
                    status = listPublicipsRequest['status'];
                    aliasLike = listPublicipsRequest['alias_like'];
                    alias = listPublicipsRequest['alias'];
                    description = listPublicipsRequest['description'];
                    vnicPrivateIpAddress = listPublicipsRequest['vnic.private_ip_address'];
                    vnicPrivateIpAddressLike = listPublicipsRequest['vnic.private_ip_address_like'];
                    vnicDeviceId = listPublicipsRequest['vnic.device_id'];
                    vnicDeviceOwner = listPublicipsRequest['vnic.device_owner'];
                    vnicVpcId = listPublicipsRequest['vnic.vpc_id'];
                    vnicPortId = listPublicipsRequest['vnic.port_id'];
                    vnicDeviceOwnerPrefixlike = listPublicipsRequest['vnic.device_owner_prefixlike'];
                    vnicInstanceType = listPublicipsRequest['vnic.instance_type'];
                    vnicInstanceId = listPublicipsRequest['vnic.instance_id'];
                    bandwidthId = listPublicipsRequest['bandwidth.id'];
                    bandwidthName = listPublicipsRequest['bandwidth.name'];
                    bandwidthNameLike = listPublicipsRequest['bandwidth.name_like'];
                    bandwidthSize = listPublicipsRequest['bandwidth.size'];
                    bandwidthShareType = listPublicipsRequest['bandwidth.share_type'];
                    bandwidthChargeMode = listPublicipsRequest['bandwidth.charge_mode'];
                    billingInfo = listPublicipsRequest['billing_info'];
                    billingMode = listPublicipsRequest['billing_mode'];
                    associateInstanceType = listPublicipsRequest['associate_instance_type'];
                    associateInstanceId = listPublicipsRequest['associate_instance_id'];
                    enterpriseProjectId = listPublicipsRequest['enterprise_project_id'];
                    publicBorderGroup = listPublicipsRequest['public_border_group'];
                    allowShareBandwidthTypeAny = listPublicipsRequest['allow_share_bandwidth_type_any'];
                }
            }

        
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (ipVersion !== null && ipVersion !== undefined) {
                localVarQueryParameter['ip_version'] = ipVersion;
            }
            if (publicIpAddress !== null && publicIpAddress !== undefined) {
                localVarQueryParameter['public_ip_address'] = publicIpAddress;
            }
            if (publicIpAddressLike !== null && publicIpAddressLike !== undefined) {
                localVarQueryParameter['public_ip_address_like'] = publicIpAddressLike;
            }
            if (publicIpv6Address !== null && publicIpv6Address !== undefined) {
                localVarQueryParameter['public_ipv6_address'] = publicIpv6Address;
            }
            if (publicIpv6AddressLike !== null && publicIpv6AddressLike !== undefined) {
                localVarQueryParameter['public_ipv6_address_like'] = publicIpv6AddressLike;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (networkType !== null && networkType !== undefined) {
                localVarQueryParameter['network_type'] = networkType;
            }
            if (publicipPoolName !== null && publicipPoolName !== undefined) {
                localVarQueryParameter['publicip_pool_name'] = publicipPoolName;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (aliasLike !== null && aliasLike !== undefined) {
                localVarQueryParameter['alias_like'] = aliasLike;
            }
            if (alias !== null && alias !== undefined) {
                localVarQueryParameter['alias'] = alias;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (vnicPrivateIpAddress !== null && vnicPrivateIpAddress !== undefined) {
                localVarQueryParameter['vnic.private_ip_address'] = vnicPrivateIpAddress;
            }
            if (vnicPrivateIpAddressLike !== null && vnicPrivateIpAddressLike !== undefined) {
                localVarQueryParameter['vnic.private_ip_address_like'] = vnicPrivateIpAddressLike;
            }
            if (vnicDeviceId !== null && vnicDeviceId !== undefined) {
                localVarQueryParameter['vnic.device_id'] = vnicDeviceId;
            }
            if (vnicDeviceOwner !== null && vnicDeviceOwner !== undefined) {
                localVarQueryParameter['vnic.device_owner'] = vnicDeviceOwner;
            }
            if (vnicVpcId !== null && vnicVpcId !== undefined) {
                localVarQueryParameter['vnic.vpc_id'] = vnicVpcId;
            }
            if (vnicPortId !== null && vnicPortId !== undefined) {
                localVarQueryParameter['vnic.port_id'] = vnicPortId;
            }
            if (vnicDeviceOwnerPrefixlike !== null && vnicDeviceOwnerPrefixlike !== undefined) {
                localVarQueryParameter['vnic.device_owner_prefixlike'] = vnicDeviceOwnerPrefixlike;
            }
            if (vnicInstanceType !== null && vnicInstanceType !== undefined) {
                localVarQueryParameter['vnic.instance_type'] = vnicInstanceType;
            }
            if (vnicInstanceId !== null && vnicInstanceId !== undefined) {
                localVarQueryParameter['vnic.instance_id'] = vnicInstanceId;
            }
            if (bandwidthId !== null && bandwidthId !== undefined) {
                localVarQueryParameter['bandwidth.id'] = bandwidthId;
            }
            if (bandwidthName !== null && bandwidthName !== undefined) {
                localVarQueryParameter['bandwidth.name'] = bandwidthName;
            }
            if (bandwidthNameLike !== null && bandwidthNameLike !== undefined) {
                localVarQueryParameter['bandwidth.name_like'] = bandwidthNameLike;
            }
            if (bandwidthSize !== null && bandwidthSize !== undefined) {
                localVarQueryParameter['bandwidth.size'] = bandwidthSize;
            }
            if (bandwidthShareType !== null && bandwidthShareType !== undefined) {
                localVarQueryParameter['bandwidth.share_type'] = bandwidthShareType;
            }
            if (bandwidthChargeMode !== null && bandwidthChargeMode !== undefined) {
                localVarQueryParameter['bandwidth.charge_mode'] = bandwidthChargeMode;
            }
            if (billingInfo !== null && billingInfo !== undefined) {
                localVarQueryParameter['billing_info'] = billingInfo;
            }
            if (billingMode !== null && billingMode !== undefined) {
                localVarQueryParameter['billing_mode'] = billingMode;
            }
            if (associateInstanceType !== null && associateInstanceType !== undefined) {
                localVarQueryParameter['associate_instance_type'] = associateInstanceType;
            }
            if (associateInstanceId !== null && associateInstanceId !== undefined) {
                localVarQueryParameter['associate_instance_id'] = associateInstanceId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (publicBorderGroup !== null && publicBorderGroup !== undefined) {
                localVarQueryParameter['public_border_group'] = publicBorderGroup;
            }
            if (allowShareBandwidthTypeAny !== null && allowShareBandwidthTypeAny !== undefined) {
                localVarQueryParameter['allow_share_bandwidth_type_any'] = allowShareBandwidthTypeAny;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询弹性公网IP详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPublicip(showPublicipRequest?: ShowPublicipRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/eip/publicips/{publicip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let publicipId;
            
            let fields;

            if (showPublicipRequest !== null && showPublicipRequest !== undefined) {
                if (showPublicipRequest instanceof ShowPublicipRequest) {
                    publicipId = showPublicipRequest.publicipId;
                    fields = showPublicipRequest.fields;
                } else {
                    publicipId = showPublicipRequest['publicip_id'];
                    fields = showPublicipRequest['fields'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling showPublicip.');
            }
            if (fields !== null && fields !== undefined) {
                localVarQueryParameter['fields'] = fields;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'publicip_id': publicipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePublicip(updatePublicipRequest?: UpdatePublicipRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/eip/publicips/{publicip_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
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