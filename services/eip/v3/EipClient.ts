import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AssociatePublicipsOption } from './model/AssociatePublicipsOption';
import { AssociatePublicipsRequest } from './model/AssociatePublicipsRequest';
import { AssociatePublicipsRequestBody } from './model/AssociatePublicipsRequestBody';
import { AssociatePublicipsResponse } from './model/AssociatePublicipsResponse';
import { BandwidthInfoResp } from './model/BandwidthInfoResp';
import { BillingInfoDict } from './model/BillingInfoDict';
import { CommonPoolDict } from './model/CommonPoolDict';
import { CommonPoolsWithBorderGroupDict } from './model/CommonPoolsWithBorderGroupDict';
import { CountEipAvailableResourcesRequest } from './model/CountEipAvailableResourcesRequest';
import { CountEipAvailableResourcesResponse } from './model/CountEipAvailableResourcesResponse';
import { DisassociatePublicipsOption } from './model/DisassociatePublicipsOption';
import { DisassociatePublicipsRequest } from './model/DisassociatePublicipsRequest';
import { DisassociatePublicipsRequestBody } from './model/DisassociatePublicipsRequestBody';
import { DisassociatePublicipsResponse } from './model/DisassociatePublicipsResponse';
import { EipResourcesAvailableV3RequestBody } from './model/EipResourcesAvailableV3RequestBody';
import { ListCommonPoolsRequest } from './model/ListCommonPoolsRequest';
import { ListCommonPoolsResponse } from './model/ListCommonPoolsResponse';
import { ListPublicBorderGroupsRequest } from './model/ListPublicBorderGroupsRequest';
import { ListPublicBorderGroupsResponse } from './model/ListPublicBorderGroupsResponse';
import { ListPublicipPoolRequest } from './model/ListPublicipPoolRequest';
import { ListPublicipPoolResponse } from './model/ListPublicipPoolResponse';
import { ListPublicipsRequest } from './model/ListPublicipsRequest';
import { ListPublicipsResponse } from './model/ListPublicipsResponse';
import { ListShareBandwidthTypesRequest } from './model/ListShareBandwidthTypesRequest';
import { ListShareBandwidthTypesResponse } from './model/ListShareBandwidthTypesResponse';
import { PageInfoOption } from './model/PageInfoOption';
import { ProfileInfo } from './model/ProfileInfo';
import { PublicipBandwidthInfo } from './model/PublicipBandwidthInfo';
import { PublicipInstanceResp } from './model/PublicipInstanceResp';
import { PublicipPoolShowResp } from './model/PublicipPoolShowResp';
import { PublicipSingleShowResp } from './model/PublicipSingleShowResp';
import { ShareBandwidthTypeShowResp } from './model/ShareBandwidthTypeShowResp';
import { ShowPublicipPoolRequest } from './model/ShowPublicipPoolRequest';
import { ShowPublicipPoolResponse } from './model/ShowPublicipPoolResponse';
import { ShowPublicipRequest } from './model/ShowPublicipRequest';
import { ShowPublicipResponse } from './model/ShowPublicipResponse';
import { TagsInfo } from './model/TagsInfo';
import { UpdateAssociatePublicipRequest } from './model/UpdateAssociatePublicipRequest';
import { UpdateAssociatePublicipResponse } from './model/UpdateAssociatePublicipResponse';
import { UpdateDisassociatePublicipRequest } from './model/UpdateDisassociatePublicipRequest';
import { UpdateDisassociatePublicipResponse } from './model/UpdateDisassociatePublicipResponse';
import { VnicInfo } from './model/VnicInfo';

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
     * 查询公共池列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公共池列表
     * @param {string} [fields] 显示，形式为\&quot;fields&#x3D;id&amp;fields&#x3D;name&amp;...\&quot;  支持字段：id/name/status/type/used/allow_share_bandwidth_types/public_border_group
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
     * @param {string} [fields] 显示，形式为\&quot;fields&#x3D;id&amp;fields&#x3D;name&amp;...\&quot;  支持字段：id/name/size/used/project_id/status/billing_info/created_at/updated_at/type/shared/is_common/description/tags/enterprise_project_id/allow_share_bandwidth_types/public_border_group
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
     * @param {string} [fields] 形式为\\\&quot;fields&#x3D;id&amp;fields&#x3D;bandwidth_type&amp;...\\\&quot;，支持字段：id/bandwidth_type/name_en/name_zh/created_at/update_at/public_border_group/description
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
     * @param {string} [fields] 显示，形式为\&quot;fields&#x3D;id&amp;fields&#x3D;name&amp;...\&quot;  支持字段：id/name/size/used/project_id/status/billing_info/created_at/updated_at/type/shared/is_common/description/tags/enterprise_project_id/allow_share_bandwidth_types/public_border_group
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
    public updateAssociatePublicip(updateAssociatePublicipRequest?: UpdateAssociatePublicipRequest): Promise<UpdateAssociatePublicipResponse> {
        const options = ParamCreater().updateAssociatePublicip(updateAssociatePublicipRequest);

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
     * @param {DisassociatePublicipsRequestBody} disassociatePublicipsRequestBody 弹性公网ip对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDisassociatePublicip(updateDisassociatePublicipRequest?: UpdateDisassociatePublicipRequest): Promise<UpdateDisassociatePublicipResponse> {
        const options = ParamCreater().updateDisassociatePublicip(updateDisassociatePublicipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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

            var body: any;
            
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

            var body: any;

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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
                headers: {},
                data: {}
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
         * 绑定弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAssociatePublicip(updateAssociatePublicipRequest?: UpdateAssociatePublicipRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/eip/publicips/{publicip_id}/associate-instance",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let publicipId;

            if (updateAssociatePublicipRequest !== null && updateAssociatePublicipRequest !== undefined) {
                if (updateAssociatePublicipRequest instanceof UpdateAssociatePublicipRequest) {
                    publicipId = updateAssociatePublicipRequest.publicipId;
                    body = updateAssociatePublicipRequest.body
                } else {
                    publicipId = updateAssociatePublicipRequest['publicip_id'];
                    body = updateAssociatePublicipRequest['body'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling updateAssociatePublicip.');
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
         * 解绑弹性公网IP
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDisassociatePublicip(updateDisassociatePublicipRequest?: UpdateDisassociatePublicipRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/eip/publicips/{publicip_id}/disassociate-instance",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let publicipId;

            if (updateDisassociatePublicipRequest !== null && updateDisassociatePublicipRequest !== undefined) {
                if (updateDisassociatePublicipRequest instanceof UpdateDisassociatePublicipRequest) {
                    publicipId = updateDisassociatePublicipRequest.publicipId;
                    body = updateDisassociatePublicipRequest.body
                } else {
                    publicipId = updateDisassociatePublicipRequest['publicip_id'];
                    body = updateDisassociatePublicipRequest['body'];
                }
            }

        
            if (publicipId === null || publicipId === undefined) {
            throw new RequiredError('publicipId','Required parameter publicipId was null or undefined when calling updateDisassociatePublicip.');
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